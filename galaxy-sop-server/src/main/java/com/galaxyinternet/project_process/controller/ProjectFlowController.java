package com.galaxyinternet.project_process.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.galaxyinternet.bo.project.InterviewRecordBo;
import com.galaxyinternet.bo.project.MeetingRecordBo;
import com.galaxyinternet.bo.project.ProjectBo;
import com.galaxyinternet.common.SopResult;
import com.galaxyinternet.common.annotation.LogType;
import com.galaxyinternet.common.annotation.MessageHandlerInterceptor;
import com.galaxyinternet.common.constants.SopConstant;
import com.galaxyinternet.common.controller.BaseControllerImpl;
import com.galaxyinternet.common.enums.DictEnum;
import com.galaxyinternet.common.query.ProjectQuery;
import com.galaxyinternet.common.utils.ControllerUtils;
import com.galaxyinternet.dao.sopfile.SopFileDao;
import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.framework.core.constants.UserConstant;
import com.galaxyinternet.framework.core.file.OSSHelper;
import com.galaxyinternet.framework.core.file.UploadFileResult;
import com.galaxyinternet.framework.core.id.IdGenerator;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.framework.core.oss.OSSFactory;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.framework.core.utils.GSONUtil;
import com.galaxyinternet.framework.core.utils.JSONUtils;
import com.galaxyinternet.model.operationLog.OperationLogs;
import com.galaxyinternet.model.operationLog.UrlNumber;
import com.galaxyinternet.model.project.InterviewRecord;
import com.galaxyinternet.model.project.MeetingRecord;
import com.galaxyinternet.model.project.MeetingScheduling;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.sopfile.SopFile;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.project.service.HandlerManager;
import com.galaxyinternet.service.DepartmentService;
import com.galaxyinternet.service.InterviewRecordService;
import com.galaxyinternet.service.MeetingRecordService;
import com.galaxyinternet.service.MeetingSchedulingService;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.SopFileService;
import com.galaxyinternet.service.UserRoleService;


/**
 * 访谈、
 * 内部评审、 
 * CEO评审 、
 * 立项会、
 * 商务谈判、
 * 投资意向书、
 * 尽职调查、
 * 投决会 、
 * 投资协议 、
 * 股权交割、
 * 投后运营
 */
@Controller
@RequestMapping("/galaxy/progress")
public class ProjectFlowController extends BaseControllerImpl<Project, ProjectBo> {
	
	final Logger logger = LoggerFactory.getLogger(ProjectFlowController.class);
	
	private String tempfilePath;
	public String getTempfilePath() { return tempfilePath; }
	@Value("${sop.oss.tempfile.path}")
	public void setTempfilePath(String tempfilePath) { this.tempfilePath = tempfilePath; }
	
	
	@Autowired
	private UserRoleService userRoleService;
	
	@Autowired
	private ProjectService projectService;
	@Autowired
	private SopFileDao sopFileDao;
	@Autowired
	private MeetingRecordService meetingRecordService;
	
	@Autowired
	private InterviewRecordService interviewRecordService;
	
	@Autowired
	private MeetingSchedulingService meetingSchedulingService;
	
	@Autowired
	private  SopFileService sopFileService;
	
	@Autowired
	private DepartmentService departmentService;
	
	@Autowired
	com.galaxyinternet.framework.cache.Cache cache;
	
	@Autowired
	private HandlerManager handlerManager;
	
	@Override
	protected BaseService<Project> getBaseService() {
		return this.projectService;
	}
	
	
	// TODO : 流程总页面
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(HttpServletRequest request) {
		return "project/sop/sop_progress/list";
	}


	// TODO : 访谈
	/**
	 * 访谈页面
	 */
	@RequestMapping(value = "/p1", method = RequestMethod.GET)
	public String p1() {
		return "project/sop/sop_progress/edit";
	}
	
	/**
	 * 访谈查询,
	 * 			投资经理： 查询个人项目下		的访谈记录  
	 * 			合伙人：	    查询个人事业线下	的访谈记录  
	 * 			高管： 	    查询所有			的访谈记录  
	 * @param   interviewRecord 
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/p1/queryInterview", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<InterviewRecordBo> queryInterview(HttpServletRequest request,@RequestBody InterviewRecordBo query ) {
		ResponseData<InterviewRecordBo> responseBody = new ResponseData<InterviewRecordBo>();
		
		try {
			User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
			
			List<Long> roleIdList = userRoleService.selectRoleIdByUserId(user.getId());
			if(roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ) || roleIdList.contains(UserConstant.DMS) || roleIdList.contains(UserConstant.CEOMS)){  //无限制，根据传参查询
				//query.setUid(null);
			}else if(roleIdList.contains(UserConstant.HHR)){   //固定为其部门
				query.setDepartId(user.getDepartmentId());
			}else if(roleIdList.contains(UserConstant.TZJL)){  //固定为其创建
				query.setUid(user.getId());
			}else{
				responseBody.setResult(new Result(Status.ERROR, null, "没有权限查看!"));
				return responseBody;
			}

			if(query.getProjectId()!=null){
				List<Project> proList = null;
				boolean checked = false;
				if(roleIdList.contains(UserConstant.HHR)){   //部门下项目校验
					Project  proQ = new Project();
					proQ.setId(query.getProjectId());
					proQ.setProjectDepartid(user.getDepartmentId());
					proList = projectService.queryList(proQ);
					checked = true;
				}else if(roleIdList.contains(UserConstant.TZJL)){  //个人下项目校验
					Project  proQ = new Project();
					proQ.setCreateUid(user.getId());
					proQ.setId(query.getProjectId());
					proList = projectService.queryList(proQ);
					checked = true;
				}
				if(checked){
					if(proList==null || proList.isEmpty()){
						responseBody.setResult(new Result(Status.ERROR, null, "没有权限查看!"));
						return responseBody;
					}
				}
			}
			
			Page<InterviewRecordBo> pageList = interviewRecordService.queryInterviewPage(query,  new PageRequest(query.getPageNum()==null?0:query.getPageNum(), query.getPageSize()==null?10:query.getPageSize()) );
			responseBody.setPageList(pageList);
			responseBody.setResult(new Result(Status.OK, ""));
			
			return responseBody;
			
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR, null,"查询失败"));
			
			if(logger.isErrorEnabled()){
				logger.error("queryInterview 查询失败",e);
			}
		}
		
		return responseBody;
	}
	
	/**
	 * 接触访谈阶段: 附件添加 -访谈添加
	 * @param   interviewRecord 
	 * 			produces="application/text;charset=utf-8"
	 * @RequestBody InterviewRecord interviewRecord ,
	 * @return
	 */
	@com.galaxyinternet.common.annotation.Logger(operationScope = { LogType.LOG, LogType.MESSAGE })
	@ResponseBody
	@RequestMapping(value = "/p1/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<ProjectQuery> p1_add(ProjectQuery p,HttpServletRequest request,HttpServletResponse response ) {
		ResponseData<ProjectQuery> responseBody = new ResponseData<ProjectQuery>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (p.getPid() == null) {
			String json = JSONUtils.getBodyString(request);
			p = GSONUtil.fromJson(json, ProjectQuery.class);
		}
		// 所有都必须附带pid和stage
		if (p.getPid() == null
				|| p.getStage() == null
				|| !SopConstant._progress_pattern_.matcher(p.getStage())
						.matches() || p.getParseDate() == null) {
			responseBody.setResult(new Result(Status.ERROR, null, "必要的参数丢失!"));
			return responseBody;
		}
		Project project = projectService.queryById(p.getPid());
		if (project == null) {
			responseBody
					.setResult(new Result(Status.ERROR, null, "未找到相应的项目信息!"));
			return responseBody;
		}
		// 项目创建者用户ID与当前登录人ID是否一样
		if (user.getId().longValue() != project.getCreateUid().longValue()) {
			responseBody
					.setResult(new Result(Status.ERROR, null, "没有权限修改该项目!"));
			return responseBody;
		}
		p.setCreatedUid(user.getId());
		p.setDepartmentId(user.getDepartmentId());
		/**
		 * 2.文件上传 这里都是上传，无更新，所以每次都生成一个新的fileKey
		 */
		String fileKey = String
				.valueOf(IdGenerator.generateId(OSSHelper.class));
		UploadFileResult result = uploadFileToOSS(request, fileKey,
				tempfilePath);
		/**
		 * 3.处理业务
		 */
		try {
			if (result != null
					&& result.getResult().getStatus().equals(Result.Status.OK)) {
				p.setFileName(result.getFileName());
				p.setSuffix(result.getFileSuffix());
				p.setBucketName(result.getBucketName());
				p.setFileKey(fileKey);
				p.setFileSize(result.getContentLength());
			}
			Long fid = null;
			if(p.getFileKey() != null){
				SopFile file = new SopFile();
				file.setProjectId(p.getPid());
				file.setProjectProgress(p.getStage());
				file.setCareerLine(p.getDepartmentId());
				file.setFileType(DictEnum.fileType.音频文件.getCode());
				file.setFileStatus(DictEnum.fileStatus.已上传.getCode());
				file.setFileUid(p.getCreatedUid());
				file.setCreatedTime((new Date()).getTime());
				file.setFileLength(p.getFileSize());
				file.setFileKey(p.getFileKey());
				file.setBucketName(p.getBucketName());
				file.setFileName(p.getFileName());
				file.setFileSuffix(p.getSuffix());
				fid = sopFileDao.insert(file);
			}
			//添加访谈文件记录
			InterviewRecord ir = new InterviewRecord();
			ir.setProjectId(p.getPid());
			ir.setFileId(fid);
			ir.setViewDate(p.getParseDate() == null ? new Date() : p.getParseDate());
			ir.setViewTarget(p.getTarget());
			ir.setViewNotes(p.getContent());
			ir.setCreatedId(project.getCreateUid());
			ir.setCreatedTime((new Date()).getTime());
			interviewRecordService.insert(ir);
			SopResult r = new SopResult(Status.OK,null,"添加访谈纪要成功!",UrlNumber.one,MessageHandlerInterceptor.add_interview_type);
			// 记录操作日志
			ControllerUtils.setRequestParamsForMessageTip(request,
					project.getProjectName(), project.getId(),
					r.getMessageType(), r.getNumber(),r.getAttachment());
			
		} catch (Exception e) {
			logger.error("操作失败", e);
			responseBody.getResult().addError("操作失败!");
		}
		
		return responseBody;
	}
	
	/**
	 * 访谈页面查看
	 */
	@RequestMapping(value = "/p1/view", method = RequestMethod.GET)
	public String p1_view() {
		return "project/sop/sop_progress/view";
	}
	
	// TODO : 内部评审
	/**
	 * 内部评审页面
	 */
	@RequestMapping(value = "/p2", method = RequestMethod.GET)
	public String p2() {
		return "view";
	}
	
	
	/**
	 * 内部评审、 CEO评审 、 立项会、投决会  阶段 : 添加会议记录   
	 * 			判断会议结论，更新项目进度，启动关联任务
	 * @param   interviewRecord 
	 * @return
	 */
	@com.galaxyinternet.common.annotation.Logger(operationScope = { LogType.LOG, LogType.MESSAGE })
	@ResponseBody
	@RequestMapping(value = "/p2/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<MeetingRecord> p2_add(MeetingRecordBo meetingRecord,HttpServletRequest request,HttpServletResponse response  ) {
		ResponseData<MeetingRecord> responseBody = new ResponseData<MeetingRecord>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if(meetingRecord.getProjectId() == null){
			String json = JSONUtils.getBodyString(request);
			meetingRecord = GSONUtil.fromJson(json, MeetingRecordBo.class);
		}
		if(meetingRecord.getProjectId() == null 
				|| meetingRecord.getMeetingDate() == null 
				|| meetingRecord.getMeetingType() == null 
				|| meetingRecord.getMeetingResult() == null ){
			responseBody.setResult(new Result(Status.ERROR,null, "请完善会议信息"));
			return responseBody;
		}else if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.投决会.getCode()) && 
				meetingRecord.getMeetingResult().equals(DictEnum.meetingResult.通过.getCode())){
			if(meetingRecord.getFinalValuations() == null ||
					meetingRecord.getFinalContribution() == null ||
					meetingRecord.getFinalShareRatio() == null ||
					meetingRecord.getServiceCharge() == null ){
				responseBody.setResult(new Result(Status.ERROR,null, "请完善会议信息"));
				return responseBody;
			}
		}
		
		MeetingRecord mrQuery = new MeetingRecord();
		try {
			String prograss = "";
			UrlNumber uNum = null;
			String messageType = null;
			if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.内评会.getCode())){       
				prograss = DictEnum.projectProgress.内部评审.getCode();                                 	
				uNum = UrlNumber.one;
				if(meetingRecord.getMeetingResult().equals(DictEnum.meetingResult.通过.getCode())){
					messageType = "6.3";
				}else{
					messageType = "4.1";
				}
			}else if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.CEO评审.getCode())){ 
				prograss = DictEnum.projectProgress.CEO评审.getCode(); 								
				uNum = UrlNumber.two;
				messageType = "4.2";
			}else if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.立项会.getCode())){	
				prograss = DictEnum.projectProgress.立项会.getCode(); 										
				uNum = UrlNumber.three;
				if(meetingRecord.getMeetingResult().equals(DictEnum.meetingResult.通过.getCode())){
					messageType = "6.5";
				}else{
					messageType = "4.3";
				}
			}else if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.投决会.getCode())){
				prograss = DictEnum.projectProgress.投资决策会.getCode(); 								
				uNum = UrlNumber.four;
				if(meetingRecord.getMeetingResult().equals(DictEnum.meetingResult.通过.getCode())){
					messageType = "6.8";
				}else{
					messageType = "4.4";
				}
			}
			//project id 验证
			Project project = new Project();
			project = projectService.queryById(meetingRecord.getProjectId());
			
			String err = errMessage(project,user,prograss);
			if(err!=null && err.length()>0){
				responseBody.setResult(new Result(Status.ERROR,null, err));
				return responseBody;
			}
			if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.投决会.getCode()) &&
					meetingRecord.getMeetingResult().equals(DictEnum.meetingResult.通过.getCode())){
				project.setFinalValuations(meetingRecord.getFinalValuations());
				project.setFinalContribution(meetingRecord.getFinalContribution());
				project.setFinalShareRatio(meetingRecord.getFinalShareRatio());
				project.setServiceCharge(meetingRecord.getServiceCharge());
			}
			
			//已有通过的会议，不能再添加会议纪要
			mrQuery = new MeetingRecord();
			mrQuery.setProjectId(meetingRecord.getProjectId());
			mrQuery.setMeetingType(meetingRecord.getMeetingType());
			mrQuery.setMeetingResult(DictEnum.meetingResult.通过.getCode());
			Long mrCount = meetingRecordService.queryCount(mrQuery);
			if(mrCount != null && mrCount.longValue() > 0L)
			{
				responseBody.setResult(new Result(Status.ERROR, "","已有通过的会议，不能再添加会议纪要!"));
				return responseBody;
			}
			//排期池校验
			if(meetingRecord.getMeetingType().equals(DictEnum.meetingType.CEO评审.getCode()) || meetingRecord.getMeetingType().equals(DictEnum.meetingType.立项会.getCode()) || meetingRecord.getMeetingType().equals(DictEnum.meetingType.投决会.getCode())){	
				MeetingScheduling ms = new MeetingScheduling();
				ms.setProjectId(meetingRecord.getProjectId());
				ms.setMeetingType(meetingRecord.getMeetingType());
				ms.setStatus(DictEnum.meetingResult.待定.getCode());  //排期按钮置为 待定
				List<MeetingScheduling> mslist = meetingSchedulingService.queryList(ms);
				if(mslist==null || mslist.isEmpty()){
					responseBody.setResult(new Result(Status.ERROR, "","未在排期池中，不能添加会议记录!"));
					return responseBody;
				}
			}
			//保存
			Long id = null;
			boolean equalNowPrograss = true; //判断当前阶段、之后阶段
			int operationPro = Integer.parseInt(prograss.substring(prograss.length()-1)) ;//会议对应的阶段
			int projectPro = Integer.parseInt(project.getProjectProgress().substring(project.getProjectProgress().length()-1)) ; //项目阶段
			if(projectPro > operationPro){
				equalNowPrograss = false;
			}
			if(meetingRecord.getFkey()!=null){
				if( meetingRecord.getFileLength()==null||meetingRecord.getFname()==null){
					responseBody.setResult(new Result(Status.ERROR,null, "请完善附件信息"));
					return responseBody;
				}
				if(meetingRecord.getBucketName()==null){
					meetingRecord.setBucketName(OSSFactory.getDefaultBucketName());
				}		
						
				Map<String,String> nameMap = transFileNames(meetingRecord.getFname());
				SopFile sopFile = new SopFile();
				sopFile.setBucketName(meetingRecord.getBucketName());
				sopFile.setFileKey(meetingRecord.getFkey());
				sopFile.setFileLength(meetingRecord.getFileLength());
				sopFile.setFileName(nameMap.get("fileName"));
				sopFile.setFileSuffix(nameMap.get("fileSuffix"));
				
				sopFile.setProjectId(project.getId());
				sopFile.setProjectProgress(project.getProjectProgress());
				sopFile.setFileUid(user.getId());	 //上传人
				sopFile.setCareerLine(user.getDepartmentId());
				sopFile.setFileType(DictEnum.fileType.音频文件.getCode());   //存储类型
				sopFile.setFileSource(DictEnum.fileSource.内部.getCode());  //档案来源
				sopFile.setFileStatus(DictEnum.fileStatus.已上传.getCode());  //档案状态
				id = meetingRecordService.insertMeet(meetingRecord,project,sopFile,equalNowPrograss);
			}else if(!ServletFileUpload.isMultipartContent(request)){
				SopFile file = new SopFile();
				file.setCareerLine(user.getDepartmentId());
				file.setFileUid(user.getId());
				id = meetingRecordService.insertMeet(meetingRecord,project,file,equalNowPrograss);
			}else if(ServletFileUpload.isMultipartContent(request)){
				//调接口上传
				String fileKey = String.valueOf(IdGenerator.generateId(OSSHelper.class));
				UploadFileResult result = uploadFileToOSS(request, fileKey, tempfilePath);
				//上传成功后
				if(result!=null){
					Map<String,String> nameMap = new HashMap<String,String>();
					String fileName = "";
					if(meetingRecord.getFname()!=null && meetingRecord.getFname().trim().length()>0){
						fileName = meetingRecord.getFname().trim();
						nameMap = transFileNames(fileName);
					}else{
					    nameMap.put("fileName",result.getFileName());
					    nameMap.put("fileSuffix", result.getFileSuffix());
					}
					if(nameMap.get("fileName") == null || nameMap.get("fileName").trim().length()==0){
						responseBody.setResult(new Result(Status.ERROR,null, "文件名获取失败"));
						return responseBody;
					}//end get file name 
					
					SopFile sopFile = new SopFile();
					sopFile.setProjectId(project.getId());
					sopFile.setProjectProgress(project.getProjectProgress());
					sopFile.setBucketName(OSSFactory.getDefaultBucketName()); 
					sopFile.setFileKey(fileKey);  
					sopFile.setFileLength(result.getContentLength());  //文件大小
					sopFile.setFileName(nameMap.get("fileName"));
					sopFile.setFileSuffix(nameMap.get("fileSuffix"));
					sopFile.setFileUid(user.getId());	 //上传人
					sopFile.setCareerLine(user.getDepartmentId());
					sopFile.setFileType(DictEnum.fileType.音频文件.getCode());   //存储类型
					sopFile.setFileSource(DictEnum.fileSource.内部.getCode());  //档案来源
					sopFile.setFileStatus(DictEnum.fileStatus.已上传.getCode());  //档案状态
					
					id = meetingRecordService.insertMeet(meetingRecord,project,sopFile,equalNowPrograss);
				}else{
					responseBody.setResult(new Result(Status.ERROR,null, "上传失败"));
					return responseBody;
				}
			}
			
			responseBody.setId(id);
			responseBody.setResult(new Result(Status.OK, ""));
			
			ControllerUtils.setRequestParamsForMessageTip(request, null, project.getProjectName(), project.getId(), messageType, uNum);
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR,null, "会议添加失败"));
			if(logger.isErrorEnabled()){
				logger.error("addfilemeet 会议添加失败 ",e);
			}
		}
		return responseBody;
	}
	
	
	
	
	

	
	
	// TODO : CEO评审 
	/**
	 * CEO评审 
	 */
	@RequestMapping(value = "/p3", method = RequestMethod.GET)
	public String p3() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p3/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p3_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	

	
	// TODO : 立项会
	/**
	 * 立项会
	 */
	@RequestMapping(value = "/p4", method = RequestMethod.GET)
	public String p4() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p4/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p4_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	

	// TODO : 商务谈判
	/**
	 * 商务谈判
	 */
	@RequestMapping(value = "/p5", method = RequestMethod.GET)
	public String p5() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p5/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p5_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	
	

	
	// TODO : 投资意向书
	/**
	 * 投资意向书
	 */
	@RequestMapping(value = "/p6", method = RequestMethod.GET)
	public String p6() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p6/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p6_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	
	

	
	// TODO : 尽职调查
	/**
	 * 尽职调查
	 */
	@RequestMapping(value = "/p7", method = RequestMethod.GET)
	public String p7() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p7/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p7_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	
	
	

	// TODO : 投决会
	/**
	 * 投决会
	 */
	@RequestMapping(value = "/p8", method = RequestMethod.GET)
	public String p8() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p8/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p8_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	

	
	// TODO : 投资协议
	/**
	 * 投资协议
	 */
	@RequestMapping(value = "/p9", method = RequestMethod.GET)
	public String p9() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p9/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p9_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	

	
	// TODO : 股权交割
	/**
	 * 股权交割
	 */
	@RequestMapping(value = "/p10", method = RequestMethod.GET)
	public String p10() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p10/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p10_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	
	
	
	
	
	// TODO : 投后运营
	/**
	 * 投后运营
	 */
	@RequestMapping(value = "/p11", method = RequestMethod.GET)
	public String p11() {
		return "view";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/p11/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> p11_add(HttpServletRequest request,HttpServletResponse response ) 
	{
		ResponseData<Project> responseBody = new ResponseData<Project>();
		
		
		
		return responseBody;
	}
	
	@com.galaxyinternet.common.annotation.Logger(operationScope=LogType.LOG)
	@ResponseBody
	@RequestMapping(value = "/reject", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> reject(@RequestBody OperationLogs param, HttpServletRequest request)
	{
		ResponseData<Project> data = new ResponseData<Project>();
		try
		{
			Project project = projectService.queryById(param.getProjectId());
			projectService.reject(param.getProjectId());
			ControllerUtils.setRequestParamsForMessageTip(request,project.getProjectName(), project.getId(),null, false, null, param.getReason(), null);
		} catch (Exception e)
		{
			data.setResult(new Result(Status.ERROR, null,"否决项目失败"));
			if (logger.isErrorEnabled()) 
			{
				logger.error("否决项目失败 ", e);
			}
		}

		return data;
	}
	/**
	 * 项目推进统一接口
	 * @param p
	 * @param request
	 * @return
	 */
	@com.galaxyinternet.common.annotation.Logger(operationScope = { LogType.LOG, LogType.MESSAGE })
	@ResponseBody
	@RequestMapping(value = "/stageChange", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> stageChange(ProjectQuery p,HttpServletRequest request) 
	{
		ResponseData<Project> data = new ResponseData<Project>();
		try
		{
			projectService.updateProgress(p.getId(), p.getStage());
			
		} catch (Exception e)
		{
			data.setResult(new Result(Status.ERROR, null,"项目推进失败"));
			if (logger.isErrorEnabled()) 
			{
				logger.error("项目推进失败 ", e);
			}
		}
		return data;
	}
	
	
	public String errMessage(Project project,User user,String prograss){
		if(project == null){
			return "项目检索为空";
		}else if(project.getProjectStatus().equals(DictEnum.meetingResult.否决.getCode())||project.getProjectStatus().equals(DictEnum.projectStatus.YFJ.getCode())){ //字典 项目状态 = 会议结论 关闭
			return "项目已经关闭";
		}else if(project.getProjectStatus().equals(DictEnum.projectStatus.YTC.getCode())){ //字典 项目状态 = 会议结论 关闭
			return "项目已退出";
		}
		
		if(user != null){
			if(project.getCreateUid()==null || user.getId().longValue()!=project.getCreateUid().longValue()){ 
				return "不允许操作他人项目";
			}
		}
		if(prograss != null){
			if(project.getProjectProgress()!=null){
				try {
					int operationPro = Integer.parseInt(prograss.substring(prograss.length()-1)) ;
					int projectPro = Integer.parseInt(project.getProjectProgress().substring(project.getProjectProgress().length()-1)) ;
					if(projectPro < operationPro){
						return "项目当前阶段不允许进行该操作";
					}
				} catch (Exception e) {
					return "项目阶段不和规范";
				}
			}else{
				return "项目阶段出错";
			}
		}
		
		return null;
	}
	
	private Map<String, String> transFileNames(String fileName) {
		Map<String, String> retMap = new HashMap<String, String>();
		int dotPos = fileName.lastIndexOf(".");
		if(dotPos == -1){
			retMap.put("fileName", fileName);
			retMap.put("fileSuffix", "");
		}else{
			retMap.put("fileName", fileName.substring(0, dotPos));
			retMap.put("fileSuffix", fileName.substring(dotPos+1));
		}
		return retMap;
	}


	
	
	
}
