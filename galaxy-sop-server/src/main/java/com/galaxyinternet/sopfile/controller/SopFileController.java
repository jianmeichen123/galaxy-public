package com.galaxyinternet.sopfile.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.aliyun.oss.OSSClient;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.model.PolicyConditions;
import com.galaxyinternet.bo.project.ProjectBo;
import com.galaxyinternet.bo.sopfile.SopFileBo;
import com.galaxyinternet.common.controller.BaseControllerImpl;
import com.galaxyinternet.common.dictEnum.DictEnum;
import com.galaxyinternet.common.utils.ControllerUtils;
import com.galaxyinternet.dao.sopfile.SopVoucherFileDao;
import com.galaxyinternet.exception.PlatformException;
import com.galaxyinternet.framework.cache.Cache;
import com.galaxyinternet.framework.core.config.PlaceholderConfigurer;
import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.framework.core.constants.UserConstant;
import com.galaxyinternet.framework.core.exception.DaoException;
import com.galaxyinternet.framework.core.file.OSSHelper;
import com.galaxyinternet.framework.core.id.IdGenerator;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.framework.core.oss.OSSConstant;
import com.galaxyinternet.framework.core.oss.OSSFactory;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.framework.core.utils.DateUtil;
import com.galaxyinternet.framework.core.utils.mail.MailTemplateUtils;
import com.galaxyinternet.framework.core.utils.mail.SimpleMailSender;
import com.galaxyinternet.model.department.Department;
import com.galaxyinternet.model.dict.Dict;
import com.galaxyinternet.model.operationLog.UrlNumber;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.sopfile.SopDownLoad;
import com.galaxyinternet.model.sopfile.SopFile;
import com.galaxyinternet.model.sopfile.SopVoucherFile;
import com.galaxyinternet.model.soptask.SopTask;
import com.galaxyinternet.model.template.TemplateMailInfo;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.DepartmentService;
import com.galaxyinternet.service.DictService;
import com.galaxyinternet.service.MeetingRecordService;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.SopFileService;
import com.galaxyinternet.service.SopTaskService;
import com.galaxyinternet.service.SopVoucherFileService;
import com.galaxyinternet.service.UserRoleService;
import com.galaxyinternet.service.UserService;
import com.galaxyinternet.utils.FileUtils;
import com.galaxyinternet.utils.RoleUtils;

@Controller
@RequestMapping("/galaxy/sopFile")
public class SopFileController extends BaseControllerImpl<SopFile, SopFileBo> {

	final Logger logger = LoggerFactory.getLogger(SopFileController.class);
	private static final String ERROR_NO_LOGIN = "not login.";
	private static final String ERR_UPLOAD_ALCLOUD = "上传云端时失败";
	private static final String ERR_UPLOAD_DAO = "上传数据时失败";
	private static final String ERR_UPLOAD_IO = "上传数据流错误";
	private static final String USER_AGENT = "User-Agent";
	
	@Autowired
	private SopFileService sopFileService;
	@Autowired
	private DictService dictService;
	@Autowired
	private ProjectService proJectService;
	@Autowired
	private DepartmentService departMentService;
	@Autowired
	private SopVoucherFileDao sopVoucherFileDao;
	@Autowired
	private UserRoleService userRoleService;
	@Autowired
	private UserService userService;
	@Autowired
	Cache cache;
	
	
	@Autowired
	private SopTaskService sopTaskService;
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private MeetingRecordService meetingRecordService;
	@Autowired
	private SopVoucherFileService sopVoucherFileService;
	
	private String tempfilePath;
	
	
	public String getTempfilePath() {
		return tempfilePath;
	}

	@Value("${sop.oss.tempfile.path}")
	public void setTempfilePath(String tempfilePath) {
		this.tempfilePath = tempfilePath;
	}

	@Override
	protected BaseService<SopFile> getBaseService() {
		// TODO Auto-generated method stub
		return this.sopFileService;
	}
	
	@ResponseBody
	@RequestMapping(value="/simpleUpload",method=RequestMethod.POST)
	public Result uploadFile(HttpServletRequest request,HttpServletResponse response){
		ResponseData<SopFile> responseBody = new ResponseData<SopFile>();
		//BTO
		SopFile sopFile = null;
		Result result = new Result();
		Object obj = request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		User user = (User) obj;
		if(obj == null){
			responseBody.setResult(new Result(Status.ERROR, ERROR_NO_LOGIN));
		}
		//获取参数
		String fileSource = request.getParameter("fileSource");
		String fileType = request.getParameter("fileType");
		String fileWorkType = request.getParameter("fileWorkType");
		String projectId = request.getParameter("projectId");
		//补充参数校验
		
		//请求转换
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		//文件上传
		//文件唯一key
		String fileKey = String.valueOf(IdGenerator.generateId(OSSHelper.class));
		try{
			Map<String,Object> map = sopFileService.aLiColoudUpload(multipartRequest, fileKey);
//			File tempfile = sopFileService.aLiColoudUpload(multipartRequest, fileKey, null);
			
			//若文件上传成功
			if(map != null){
				Map<String,String> nameMap = (Map<String, String>) map.get("nameMap");
				MultipartFile tempFile = (MultipartFile) map.get("file");
				
				
				sopFile = new SopFile();
				sopFile.setProjectId(Long.parseLong(projectId));
				sopFile.setFileWorktype(fileWorkType);
				sopFile = sopFileService.selectByProjectAndFileWorkType(sopFile);
				//bucketName
				sopFile.setBucketName(OSSFactory.getDefaultBucketName());
				//fileKey
				sopFile.setFileKey(fileKey);
				//文件大小
				sopFile.setFileLength(tempFile.getSize());
											
				sopFile.setFileName(nameMap.get("fileName"));
				sopFile.setFileSuffix(nameMap.get("fileSuffix"));	

//				//文件名称
//				sopFile.setFileName(tempFile.getName());
				//上传人
				sopFile.setFileUid(user.getId());		
				//存储类型
				sopFile.setFileType(fileType);
				//档案来源
				sopFile.setFileSource(fileSource);
//				//业务分类
//				sopFile.setFileWorktype(fileWorkType);
				//档案摘要
				
				//档案状态
				sopFile.setFileStatus(DictEnum.fileStatus.已上传.getCode());
				//将文件信息保存到数据库中
				sopFileService.updateByIdSelective(sopFile);
			}else{
				result.setStatus(Status.ERROR);
				result.addError(ERR_UPLOAD_ALCLOUD);
			}
			result.setStatus(Status.OK);
			result.setMessage(sopFile.getProjectId());
		}catch(DaoException e){
			result.addError(ERR_UPLOAD_DAO);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			result.addError(e.getMessage()+ERR_UPLOAD_IO);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.addError(e.getMessage()+ERR_UPLOAD_IO);
		}
		
		return result;
	}
	
	
	/**
	 * 非流程类上传文件-签署证明
	 * @param request
	 * @param response
	 * @param progress
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/commonUpload",method=RequestMethod.POST)
	public Result uploadCommonFile(HttpServletRequest request,HttpServletResponse response){
		Result result = new Result();
		Object obj = request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		User user = (User) obj;
		if(obj == null){
			return new Result(Status.ERROR, ERROR_NO_LOGIN);
		}
		//获取参数
		String fileSource = request.getParameter("fileSource");
		String fileType = request.getParameter("fileType");
		String fileWorkType = request.getParameter("fileWorkType");
		String projectId = request.getParameter("projectId");
		//补充参数校验
		
		//请求转换
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		//文件上传
		//文件唯一key
		String fileKey = String.valueOf(IdGenerator.generateId(OSSHelper.class));
		try{
			
			//上传  投资意向书  任务验证已完成
			SopTask task = new SopTask();
			task.setProjectId(Long.valueOf(projectId));
			task.setTaskName("上传投资意向书");          //任务名称：    上传投资意向书
			task.setAssignUid(user.getId());
			task.setTaskStatus(DictEnum.taskStatus.已完成.getCode());
			task = sopTaskService.queryOne(task);
			if(task.getTaskStatus()==null || !task.getTaskStatus().equals(DictEnum.taskStatus.已完成.getCode())){
				result.addError("Front task is not complete");
			}		
			SopFile queryFile=new SopFile();
			queryFile.setProjectId(Long.parseLong(projectId));
			queryFile.setFileWorktype(fileWorkType);
			SopFile sopf=sopFileService.queryOne(queryFile);
			
			if(!sopf.getFileStatus().equals(DictEnum.taskStatus.已完成.getCode())){
				result.addError("未上传投资意向书!");
			}		
//			File tempFile = sopFileService.aLiColoudUpload(multipartRequest, fileKey, null);
			Map<String,Object> map = sopFileService.aLiColoudUpload(multipartRequest, fileKey);
			
			//若文件上传成功
			if(map != null){
				Map<String,String> nameMap = (Map<String, String>) map.get("nameMap");
				MultipartFile tempFile = (MultipartFile) map.get("file");
				
				//project id 验证
				Project project = new Project();
				project = projectService.queryById(Long.valueOf(projectId));
				String err = errMessage(project,user,DictEnum.projectProgress.投资意向书.getCode());
				if(err!=null && err.length()>0){
					result.addError(err);
				}
				SopVoucherFile bo=new SopVoucherFile();
				bo.setId(sopf.getVoucherId());
				bo.setProjectId(Long.parseLong(projectId));
				bo.setProjectProgress(project.getProjectProgress());
				bo.setFileWorktype(sopf.getFileWorktype());
				bo.setFileType(sopf.getFileType());
				bo.setFileKey(fileKey);
				bo.setFileLength(tempFile.getSize());
				
				
		
				bo.setFileName(nameMap.get("fileName"));
				bo.setFileSuffix(nameMap.get("fileSuffix"));
				
//				bo.setFileName(tempFile.getName());
				bo.setUpdatedTime(System.currentTimeMillis());
				bo.setFileStatus(DictEnum.fileStatus.已上传.getCode());
				sopVoucherFileService.updateById(bo);
				//修改项目进度、生成任务
				meetingRecordService.upTermSheetSign(project,user.getId(),user.getDepartmentId());
			}		
			result.setStatus(Status.OK);	
		}catch(DaoException e){
			e.printStackTrace();
			result.addError(ERR_UPLOAD_DAO);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.addError(e.getMessage()+ERR_UPLOAD_IO);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.addError(e.getMessage()+ERR_UPLOAD_IO);
		}
		
		return result;
	}
	
	

	@ResponseBody
	@RequestMapping(value = "/getDictByParent/{parentCode}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Dict> getDictByParent( @PathVariable String parentCode,HttpServletRequest request) {
		ResponseData<Dict> responseBody = new ResponseData<Dict>();
		List<Dict> dicts = null;
		Result result = new Result();
		try {
			dicts = dictService.selectByParentCode(parentCode);	
		}catch(PlatformException e){
			result.setErrorCode(e.getCode()+"");
			result.setMessage(e.getMessage());
		}catch(Exception e){
			result.setMessage("系统错误");
			result.addError("系统错误");
			logger.error("根据parentId查找数据字典错误",e);
		}
		result.setMessage(parentCode);
	    result.setStatus(Status.OK);
	    responseBody.setEntityList(dicts);
		responseBody.setResult(result);
		return responseBody;
	}
	
	/**
	 * 获取部门字典
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/getDepartmentDict/{parentCode}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Department> getDepartmentDict( @PathVariable String parentCode,HttpServletRequest request) {
		ResponseData<Department> responseBody = new ResponseData<Department>();
		List<Department> departDicts = null;
		Result result = new Result();
		try {
			departDicts = departMentService.queryAll();	
		}catch(PlatformException e){
			result.setErrorCode(e.getCode()+"");
			result.setMessage(e.getMessage());
		}catch(Exception e){
			result.setMessage("系统错误");
			result.addError("系统错误");
			logger.error("根据parentId查找数据字典错误",e);
		}
	    result.setStatus(Status.OK);
	    result.setMessage("department");
	    responseBody.setEntityList(departDicts);
		responseBody.setResult(result);
		return responseBody;
	}
	
	/**
	 * 获取项目字典
	 * @param param
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/searchProjectDic/{param}",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> searchProjectDic(@PathVariable String param,HttpServletRequest request){
		ResponseData<Project> responseBody = new ResponseData<Project>();
		List<Project> projects = null;
		Result result = new Result();
		try {
			Project project = new Project();
			project.setProjectName(param);
			projects = proJectService.queryList(project);
		}catch(PlatformException e){
			result.setErrorCode(e.getCode()+"");
			result.setMessage(e.getMessage());
		}catch(Exception e){
			result.setMessage("系统错误");
			result.addError("系统错误");
			logger.error("根据parentId查找数据字典错误",e);
		}
//		result.setMessage(parentCode);
	    result.setStatus(Status.OK);
	    responseBody.setEntityList(projects);
		responseBody.setResult(result);
		return responseBody;
	}
	
	/**
	 * 获取档案列表(分页查询)
	 * 
	 * @param
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/searchSopFileList", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopFile> searchSopFileList(HttpServletRequest request, @RequestBody SopFile sopFile) {
		ResponseData<SopFile> responseBody = new ResponseData<SopFile>();
		User obj = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (obj == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try {
			List<Long> roleIdList = userRoleService.selectRoleIdByUserId(obj
					.getId());
			if ("dialog".equals(sopFile.getPageType())) {
				sopFile.setFileWorktypeNullFilter("true");
			} else {
				// 角色判断(人事)
				if (roleIdList.contains(UserConstant.HRZJ)
						|| roleIdList.contains(UserConstant.HRJL)) {
					sopFile.setFileUid(obj.getId());
					// 财务
				} else if (roleIdList.contains(UserConstant.FWZJ)
						|| roleIdList.contains(UserConstant.FWJL)) {
					sopFile.setFileUid(obj.getId());
					// 法务
				} else if (roleIdList.contains(UserConstant.CWZJ)
						|| roleIdList.contains(UserConstant.CWJL)) {
					sopFile.setFileUid(obj.getId());
					// 投资经理
				} else if (roleIdList.contains(UserConstant.TZJL)) {
					Project project = new Project();
					project.setCreateUid(obj.getId());
					List<Project> projectList = proJectService
							.queryList(project);
					List<Long> projectIdList = new ArrayList<Long>();
					for (Project temp : projectList) {
						projectIdList.add(temp.getId());
					}
					if(projectList.size() > 0){
						sopFile.setProjectIdList(projectIdList);
					}else{
						Page<SopFile> pageSopFile = new Page<SopFile>(
								new ArrayList<SopFile>(), new PageRequest(
										sopFile.getPageNum()==null? 0 : sopFile.getPageNum(),
										sopFile.getPageSize()==null? 0 : sopFile.getPageSize()), 0l);
						responseBody.setPageList(pageSopFile);
						responseBody.setResult(new Result(Status.OK, ""));
						return responseBody;
					}
					
					// 档案管理员
				} else if (roleIdList.contains(UserConstant.DAGLY)) {

					// 其他人怎么办
				} else {
					
				}
				sopFile.setFileWorktypeNullFilter("true");
//				sopFile.setFileStatus(DictEnum.fileStatus.已上传.getCode());
				List<String> fileStatusList = new ArrayList<String>();
				fileStatusList.add(DictEnum.fileStatus.已上传.getCode());
				fileStatusList.add(DictEnum.fileStatus.已签署.getCode());
				sopFile.setFileStatusList(fileStatusList);
				// 模糊搜索
				if (sopFile.getKeyword() != null
						&& !sopFile.getKeyword().isEmpty()) {
					ProjectBo project = new ProjectBo();
					project.setKeyword(sopFile.getKeyword());
					project.setFlagkeyword("onlyName");
					List<Project> projectList = projectService
							.queryList(project);
					User user = new User();
					user.setKeyword(sopFile.getKeyword());
					user.setFlagkeyword("onlyName");
					// user.setRealName(sopFile.getKeyword());
					List<User> userList = userService.queryList(user);
					if ((projectList == null || projectList.size() <= 0)
							&& (userList == null || userList.size() <= 0)) {
						Page<SopFile> pageSopFile = new Page<SopFile>(
								new ArrayList<SopFile>(), new PageRequest(
										sopFile.getPageNum()==null? 0 : sopFile.getPageNum(),
												sopFile.getPageSize()==null? 0 : sopFile.getPageSize()), 0l);
						responseBody.setPageList(pageSopFile);
						responseBody.setResult(new Result(Status.OK, ""));
						return responseBody;
					}
					if (projectList != null && projectList.size() > 0) {
						List<Long> projectIdList = new ArrayList<Long>();
						for (Project tempPro : projectList) {
							projectIdList.add(tempPro.getId());
						}
						sopFile.setProjectLikeIdList(projectIdList);
					}
					if (userList != null && userList.size() > 0) {
						List<Long> fileUidList = new ArrayList<Long>();
						for (User tempUser : userList) {
							fileUidList.add(tempUser.getId());
						}
						sopFile.setFileULikeidList(fileUidList);
					}

				}
			}

			PageRequest pageRequest = null;
			if ("index".equals(sopFile.getPageType())) {
				// 起始页从0开始
				pageRequest = new PageRequest(0, 3, Direction.DESC,
						"updated_time");
			} else {
				pageRequest = new PageRequest(sopFile.getPageNum(),
						sopFile.getPageSize());
			}
			Page<SopFile> pageSopFile = sopFileService.queryPageList(sopFile,
					pageRequest);
			// 操作权限判断
			for (SopFile temp : pageSopFile.getContent()) {
				String isEdit = RoleUtils.getWorkTypeEdit(roleIdList,
						temp.getFileWorktype());
				temp.setIsEdit(isEdit);
			}
			responseBody.setPageList(pageSopFile);
			responseBody.setResult(new Result(Status.OK, ""));
			return responseBody;
		} catch (DaoException e) {
			responseBody.setResult(new Result(Status.ERROR, "queryUserList faild"));
			if (logger.isErrorEnabled()) {
				logger.error("queryUserList ", e);
			}
		} catch (RuntimeException e){
			responseBody.setResult(new Result(Status.ERROR, "queryUserList faild"));
			if (logger.isErrorEnabled()) {
				logger.error("queryUserList ", e);
			}
		}
		return responseBody;
	}

	/**
	 * 获取档案列表
	 * 
	 * @param
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/searchSopFileListWithoutPage", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopFile> searchSopFileListWithoutPage(HttpServletRequest request, @RequestBody SopFile sopFile) {
		ResponseData<SopFile> responseBody = new ResponseData<SopFile>();
		Object obj = request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (obj == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		SopFileBo sbo = new SopFileBo();
		List<String> fileWorktypeList = new ArrayList<String>();
		fileWorktypeList.add(DictEnum.fileWorktype.投资协议.getCode());   //字典   投资协议
		fileWorktypeList.add(DictEnum.fileWorktype.股权转让协议.getCode());
		sbo.setProjectId(sopFile.getProjectId());
		sbo.setFileworktypeList(fileWorktypeList);
		try {
			List<SopFile> sopFileList = sopFileService.selectByFileTypeList(sbo);
			for(SopFile f : sopFileList){
				SopVoucherFile sf = sopVoucherFileDao.selectById(f.getVoucherId());
				f.setVoucherFileKey(sf.getFileKey());
			}
			responseBody.setEntityList(sopFileList);
			responseBody.setResult(new Result(Status.OK, ""));
			return responseBody;
		} catch (DaoException e) {
			responseBody.setResult(new Result(Status.ERROR, "queryUserList faild"));
			if (logger.isErrorEnabled()) {
				logger.error("queryUserList ", e);
			}
		}
		return responseBody;
	}
	    

	
	
	/**
	 * 档案管理模块入口
	 * @return
	 */
	@RequestMapping(value="/toFileList",method = RequestMethod.GET)
	public String toFileList(){
		return "sopFile/fileList";
	}
	
	
	@RequestMapping(value="/toUploadFile",method = RequestMethod.GET)
	public String toUploadFile(){
		return "sopFile/uploadFile";
	}

	@RequestMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseData<SopFile> query(@RequestBody SopFileBo query) {
		ResponseData<SopFile> resp = new ResponseData<SopFile>();
		try {
			List<SopFile> entityList = sopFileService.queryList(query);
			resp.setEntityList(entityList);
		} catch (Exception e) {
			Object msg = "查询出错.";
			logger.error(msg.toString());
			resp.getResult().addError(msg);
		}
//		File file = new File(parent, child)
		return resp;
	}
	
	
	@RequestMapping("/downloadFile/{id}")
	public void download(@PathVariable("id") Long id, HttpServletRequest request, HttpServletResponse response)
	{
		String type = request.getParameter("type");
		try {
			SopDownLoad downloadEntity = new SopDownLoad();
			if("voucher".equals(type))
			{
				SopVoucherFile file = sopVoucherFileService.queryById(id);
				if(file == null)
				{
					throw new Exception();
				}
				downloadEntity.setFileName(file.getFileName());
				downloadEntity.setFileSuffix("." + file.getFileSuffix());
				downloadEntity.setFileSize(file.getFileLength());
				downloadEntity.setFileKey(file.getFileKey());
			}
			else
			{
				SopFile file = sopFileService.queryById(id);
				if(file == null)
				{
					throw new Exception();
				}	
				downloadEntity.setFileName(file.getFileName());
				downloadEntity.setFileSuffix("." + file.getFileSuffix());
				downloadEntity.setFileSize(file.getFileLength());
				downloadEntity.setFileKey(file.getFileKey());
			}
			sopFileService.download(request, response, tempfilePath, downloadEntity);
		} catch (Exception e) {
			logger.error("下载失败.",e);
		}
	}
	
	/***
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/fileCallBack",method=RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopFile> fileCallBack(HttpServletRequest request, @RequestBody SopFile form) {
		//校验
		User user = (User)request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		ResponseData<SopFile> responseBody = new ResponseData<SopFile>();
		//业务分类校验 并 初始化任务名称及项目阶段
		String proProgress = "";
		Integer taskFlag = null;
		UrlNumber num = null;
		responseBody = validateUploadForm(responseBody,user, form.getProjectId(), form.getFileWorktype(), proProgress, num, taskFlag);
		if(responseBody.getResult().getErrorCode()!=null){
			return responseBody;
		}
		Map<String,Object> map = responseBody.getUserData();
		proProgress = (String) map.get("progress");
		taskFlag = (Integer) map.get("taskFlag");
		num = (UrlNumber) map.get("num");
		
		responseBody = validateFile(responseBody, form.getFileName(), form.getFileKey(), form.getFileLength());
		if(responseBody.getResult().getErrorCode()!=null){
			return responseBody;
		}	
		SopFile sopFile = sopFileService.selectByProjectAndFileWorkType(form);
		sopFile.setProjectId(form.getProjectId());
		sopFile.setFileWorktype(form.getFileWorktype());
		sopFile.setFileName(form.getFileName());
		sopFile.setFileLength(form.getFileLength());
		sopFile.setFileKey(form.getFileKey());
		sopFile.setFileType(form.getFileType());
		sopFile.setFileSource(form.getFileSource());
		sopFile.setRemark(form.getRemark());
		sopFile.setBucketName(OSSFactory.getDefaultBucketName());		
		//上传业务方法
		responseBody = updateFile(request,responseBody,user,sopFile,num);
		return responseBody;
	}
	
	private ResponseData<SopFile> updateFile(HttpServletRequest request,
			ResponseData<SopFile> responseBody, User user,SopFile sopFile,UrlNumber num) {
		try {
			Map<String, String> nameMap = FileUtils.transFileNames(sopFile.getFileName());
			sopFile.setFileName(nameMap.get("fileName"));
			sopFile.setFileSuffix(nameMap.get("fileSuffix"));
			// 上传人
			sopFile.setFileUid(user.getId());
			if(sopFile.getFileStatus()==null || DictEnum.fileStatus.缺失.getCode().equals(sopFile.getFileStatus())){
				// 档案状态
				sopFile.setFileStatus(DictEnum.fileStatus.已上传.getCode());
			}		
			// 调用非签署凭证业务方法
			sopFileService.updateByIdSelective(sopFile);
			responseBody.setResult(new Result(Status.OK, null));
			if (num != null) {
				String projectName = proJectService.queryById(
						sopFile.getProjectId()).getProjectName();
				ControllerUtils.setRequestParamsForMessageTip(request,
						projectName, sopFile.getProjectId(), num);
			}
		} catch (DaoException e) {
			responseBody.setResult(new Result(Status.ERROR, ERR_UPLOAD_DAO));
			return responseBody;
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR, e.getMessage()
					+ ERR_UPLOAD_IO));
			return responseBody;
		} finally {
		}
		return responseBody;
	}
	
	
	
	
	
	
	/**
	 * 项目业务逻辑校验
	 * @param project
	 * @param user
	 * @param prograss
	 * @return
	 */
	public String errMessage(Project project,User user,String prograss){
		if(project == null){
			return "项目检索为空";
		}else if(project.getProjectStatus().equals(DictEnum.meetingResult.否决.getCode())){ //字典 项目状态 = 会议结论 关闭
			return "项目已经关闭";
		}
		
		if(user != null){
			if(project.getCreateUid()==null || user.getId().longValue()!=project.getCreateUid().longValue()){ 
				return "不允许操作他人项目";
			}
		}
		if(prograss != null){
			if(project.getProjectProgress()==null || !project.getProjectProgress().equals(prograss) ){
				return "项目当前阶段不允许进行该操作";
			}
		}
		return null;
	}
	
	@ResponseBody
	@RequestMapping(value = "/selectProjectFiles", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopFile> selectProjectFiles(@RequestBody SopFileBo query)
	{
		ResponseData<SopFile> resp = new ResponseData<SopFile>();
		try {
			List<SopFile> entityList = sopFileService.selectByFileTypeList(query);
			resp.setEntityList(entityList);
		} catch (Exception e) {
			Object msg = "查询失败.";
			resp.getResult().addError(msg);
			logger.error(msg.toString(),e);
		}
		return resp;
	}
	
	@ResponseBody
	@RequestMapping(value = "/checkShow", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopFile> checkShow(HttpServletRequest request,@RequestBody(required=false) SopFile query)
	{
		ResponseData<SopFile> resp = new ResponseData<SopFile>();
		try {
			Object obj = request.getSession().getAttribute(Constants.SESSION_USER_KEY);
			User user = (User) obj;
			if(user == null){
				resp.setResult(new Result(Status.ERROR, ERROR_NO_LOGIN));
				return resp;
			}
			List<Long> roleIdList = userRoleService.selectRoleIdByUserId(user.getId());
			boolean result = RoleUtils.isDAGLY(roleIdList);
			if(result){
				resp.setResult(new Result(Status.OK, ""));
			}else{
				resp.setResult(new Result(Status.ERROR, ""));
			}
			
		} catch (Exception e) {
			Object msg = "查询失败.";
			resp.getResult().addError(msg);
			logger.error(msg.toString(),e);
		}
		return resp;
	}
	@RequestMapping("/showMailDialog")
	public ModelAndView showMailDialog()
	{
		ModelAndView mv = new ModelAndView("/sopFile/mailDialog");
	
		return mv;
	}
	
	@RequestMapping("/sendMail")
	@ResponseBody
	public Result sendMail(HttpServletRequest request,@RequestBody TemplateMailInfo mailInfo)
	{
		Result rtn = new Result();
		try 
		{
			SopFileBo bo = new SopFileBo();
			if(mailInfo.getTemplateIds() != null && mailInfo.getTemplateIds().length>0)
			{
				bo.setIds(Arrays.asList(mailInfo.getTemplateIds()));
			}
			
			List<SopFile> list = sopFileService.queryList(bo);
			
			User curUser = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
			String content = MailTemplateUtils.getContentByTemplate(Constants.MAIL_FILESHARE_CONTENT);
			String userName = "大家好：";
			String curTime = DateUtil.convertDateToString(new Date());
			
			String toAddress = mailInfo.getToAddress();
			String[] to = toAddress.split(";");
			if(to != null && to.length==1)
			{
				int atIndex = toAddress.lastIndexOf("@");
				userName = toAddress.substring(0, atIndex)+":<br>您好!";
			}
			String endpoint = getCurrEndpoint(request);
			String linkTemplate = "<a href=\"%s\">%s</a><br/>";
			String fileLinks = "";
			for(SopFile sopFile : list)
			{
				String fileName = sopFile.getfWorktype();
				String href = endpoint+"galaxy/openEntry/download/file/"+sopFile.getId();
				fileLinks += String.format(linkTemplate, href,fileName);
			}
			content = PlaceholderConfigurer.formatText(content, userName, curUser.getRealName(), curTime, list.size(), fileLinks);
			boolean success = SimpleMailSender.sendMultiMail(mailInfo.getToAddress(),  "繁星 - 档案分享",content.toString());
			
			if(success)
			{
				rtn.addOK("邮件发送成功.");
			}
			else
			{
				rtn.addError("邮件发送失败。");
			}
			
		} catch (Exception e) {
			logger.error("邮件发送失败。",e);
			rtn.addError("邮件发送失败。");
		}
		return rtn;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getPolicy/{fileKey}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Dict> getPolicy(@PathVariable String fileKey,
			HttpServletRequest request) {
		ResponseData<Dict> responseBody = new ResponseData<Dict>();
		Result result = new Result();
		fileKey = StringUtils.isBlank(fileKey) ? String.valueOf(IdGenerator.generateId(OSSHelper.class)) : fileKey; 
		Map<String, Object> respMap = new HashMap<String, Object>();
		String endPoint = OSSFactory.ENDPOINT;
		String accessKeyId = OSSFactory.ACCESS_KEY_ID;
		String accessKeyScret = OSSFactory.accessKeySecret;
		String bucket = OSSFactory.getDefaultBucketName();
		String region = OSSFactory.OSS_SERVICE_ENDPOINT_PREFIX;
//		String dir = "leung";
		String host = "http://" + bucket + "." + endPoint;
		long expireTime = OSSConstant.OSS_UPLOAD_FILE_EXPIRE_TIME;
		long expireEndTime = System.currentTimeMillis() + expireTime * 1000;
		Date expiration = new Date(expireEndTime);
		PolicyConditions policyConds = new PolicyConditions();
		policyConds.addConditionItem(
				PolicyConditions.COND_CONTENT_LENGTH_RANGE, 0, 1048576000);
//		policyConds.addConditionItem(MatchMode.StartWith,
//				PolicyConditions.COND_KEY, dir);

		try {
			OSSClient client = OSSFactory.getClientInstance();
			String postPolicy = client.generatePostPolicy(expiration,
					policyConds);
			byte[] binaryData;
			binaryData = postPolicy.getBytes("utf-8");
			String encodedPolicy = BinaryUtil.toBase64String(binaryData);
			String postSignature = client.calculatePostSignature(postPolicy);
			respMap.put("uploadMode", OSSFactory.UPLOAD_MODE);
			respMap.put("accessid", accessKeyId);
			respMap.put("accesskeysecret", accessKeyScret);
			respMap.put("policy", encodedPolicy);
			respMap.put("signature", postSignature);
			// respMap.put("expire", formatISO8601Date(expiration));
//			respMap.put("dir", dir);
//			respMap.put("fileName", filename);
			respMap.put("fileKey", fileKey);
			respMap.put("host", host);
			respMap.put("region", region);
			respMap.put("bucket", bucket);
			respMap.put("expire", String.valueOf(expireEndTime / 1000));
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (Exception e) {
			result.setMessage("系统错误");
			result.addError("系统错误");
			logger.error("根据parentId查找数据字典错误", e);
		}
		result.setStatus(Status.OK);
		responseBody.setUserData(respMap);
		responseBody.setResult(result);
		return responseBody;
	}
	
	
	
	
	private ResponseData<SopFile> validateUploadForm(ResponseData<SopFile> responseBody,User user,Long projectId,String fileWorktype,String proProgress,UrlNumber num,Integer taskFlag){
		if(user == null){
			responseBody.setResult(new Result(Status.ERROR, ERROR_NO_LOGIN));
			return responseBody;
		}
		if(projectId==null){
			responseBody.setResult(new Result(Status.ERROR,null, "项目不能为空"));
			return responseBody;
		}
		if(fileWorktype!=null){
			if(fileWorktype.equals(DictEnum.fileWorktype.投资意向书.getCode())){  //字典   档案业务类型   投资意向书
				proProgress = DictEnum.projectProgress.投资意向书.getCode() ;									  
				taskFlag = 1;
				num = UrlNumber.one;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.业务尽职调查报告.getCode())){
				proProgress = DictEnum.projectProgress.尽职调查.getCode() ;
				taskFlag = 5;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.投资协议.getCode())){
				proProgress = DictEnum.projectProgress.投资协议.getCode() ; 
				taskFlag = 6;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.股权转让协议.getCode())){
				proProgress = DictEnum.projectProgress.投资协议.getCode() ; 
				taskFlag = 7;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.人力资源尽职调查报告.getCode())){
				proProgress = DictEnum.projectProgress.尽职调查.getCode() ;
				taskFlag = 2;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.财务尽职调查报告.getCode())){
				proProgress = DictEnum.projectProgress.尽职调查.getCode() ;
				taskFlag = 4;
				num = UrlNumber.four;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.法务尽职调查报告.getCode())){
				proProgress = DictEnum.projectProgress.尽职调查.getCode() ;
				taskFlag = 3;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.工商转让凭证.getCode())){
				proProgress = DictEnum.projectProgress.股权交割.getCode() ;
				taskFlag = 9;
			}else if(fileWorktype.equals(DictEnum.fileWorktype.资金拨付凭证.getCode())){
				proProgress = DictEnum.projectProgress.股权交割.getCode() ;
				taskFlag = 8;	
			}else{
				responseBody.setResult(new Result(Status.ERROR, "文件业务类型不能识别"));
				return responseBody;
			}
		}else{
			responseBody.setResult(new Result(Status.ERROR,null, "文件业务类型为空"));
			return responseBody;
		}
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("progress", proProgress);
		map.put("taskFlag", taskFlag);
		map.put("num", num);
		responseBody.setUserData(map);
		return responseBody;
	}
	private ResponseData<SopFile> validateFile(ResponseData<SopFile> responseBody,String fileName,String fileKey,Long fileLength){
		if(fileName==null){
			responseBody.setResult(new Result(Status.ERROR, "文件名称获取为空"));
			return responseBody;
		}
		if(fileLength==null){
			responseBody.setResult(new Result(Status.ERROR, "文件大小获取错误"));
			return responseBody;
		}
//		if(fileKey==null){
//			responseBody.setResult(new Result(Status.ERROR, "文件ObjectKey获取错误"));
//			return responseBody;
//		}
		return responseBody;
	}
}
