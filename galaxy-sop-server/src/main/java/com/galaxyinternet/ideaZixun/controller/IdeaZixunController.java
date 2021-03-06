package com.galaxyinternet.ideaZixun.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang.StringUtils;
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

import com.galaxyinternet.bo.IdeaZixunBo;
import com.galaxyinternet.common.constants.SopConstant;
import com.galaxyinternet.common.controller.BaseControllerImpl;
import com.galaxyinternet.common.utils.ControllerUtils;
import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.framework.core.constants.UserConstant;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.framework.core.utils.DateUtil;
import com.galaxyinternet.model.chart.DataFormat;
import com.galaxyinternet.model.chart.ZixunData;
import com.galaxyinternet.model.common.Config;
import com.galaxyinternet.model.department.Department;
import com.galaxyinternet.model.idea.IdeaZixun;
import com.galaxyinternet.model.idea.ZixunFinance;
import com.galaxyinternet.model.report.SopReportModal;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.ConfigService;
import com.galaxyinternet.service.DepartmentService;
import com.galaxyinternet.service.IdeaZixunService;
import com.galaxyinternet.service.ZixunFinanceService;
import com.galaxyinternet.service.chart.ZixunGradeService;

@Controller
@RequestMapping("/galaxy/zixun")
public class IdeaZixunController extends BaseControllerImpl<IdeaZixun, IdeaZixunBo> {

	private final static Logger logger = LoggerFactory.getLogger(IdeaZixunController.class);

	@Autowired
	private IdeaZixunService ideaZixunService;
	
	@Autowired
	private ZixunGradeService zixunGradeService;
	
	@Autowired
	private ZixunFinanceService zixunFinanceService;
	
	@Autowired
	private DepartmentService departmentService;
	
	@Autowired
	private ConfigService configService;
	
	@Autowired
	com.galaxyinternet.framework.cache.Cache cache;


	@Override
	protected BaseService<IdeaZixun> getBaseService() {
		return this.ideaZixunService;
	}
	
	private static final String ZIXUN_CODE_PREFIX = "CYZX";
	
	private String tempfilePath;

	public String getTempfilePath() {
		return tempfilePath;
	}

	@Value("${sop.oss.tempfile.path}")
	public void setTempfilePath(String tempfilePath) {
		this.tempfilePath = tempfilePath;
	}
	
	/**
	 * 部门列表
	 */
	@ResponseBody
	@RequestMapping("/getDepartment")
	public ResponseData<Department> getDepartment(HttpServletRequest request)
	{
		ResponseData<Department> resp = new ResponseData<Department>();
		try {
			List<Department> departments = new ArrayList<Department>();
			
			/*User user = (User)getUserFromSession(request);
			List<Long> roleIdList = userRoleService.selectRoleIdByUserId(user.getId());
			
			if(roleIdList != null && roleIdList.size()>0) {
				if(roleIdList.contains(UserConstant.TZJL) || roleIdList.contains(UserConstant.HHR)){
					Department department = departmentService.queryById(user.getDepartmentId());
					departments.add(department);
				}else if(roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)){
					Department depQuery = new Department();
					depQuery.setType(1);
					departments =  departmentService.queryList(depQuery);
				}
			}*/
			Department depQuery = new Department();
			depQuery.setType(1);
			departments =  departmentService.queryList(depQuery);
			resp.setEntityList(departments);
		} catch (Exception e) {
			resp.getResult().addError("查询事业线失败");
			logger.error("查询事业线失败",e);
		}
		return resp;
	}
	
	
	
	/**
	 * 添加咨询 展示初始信息  ：  code
	 */
	@ResponseBody
	@RequestMapping(value="/preAdd",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixunBo> preAdd(HttpServletRequest request,HttpServletResponse response){
		
		ResponseData<IdeaZixunBo> responseBody = new ResponseData<IdeaZixunBo>();
		
		try {
			
			IdeaZixunBo zixun = new IdeaZixunBo();
			
			//获取session
			User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
			if (user == null) {
				responseBody.setResult(new Result(Status.ERROR,null, "未登录!"));
				return responseBody;
			}
			
			zixun.setCreateUid(user.getId());
			zixun.setCreatedTime(System.currentTimeMillis());
			
			
			/*List<Long> roleIdList = userRoleService.selectRoleIdByUserId(user.getId());
			if(!RoleUtils.isCEO(roleIdList) && !RoleUtils.isDSZ(roleIdList)){
				idea.setDepartmentId(user.getDepartmentId());
				idea.setDepartmentEditable("false");
			}else{
				//为高管时所属事业线可编辑
				idea.setDepartmentEditable("true");;
			}*/
			
			
			Config config = configService.getByKey(SopConstant.CONFIG_KEY_ZIXUN_CODE, true);
			int codeLength = config.getValue().length();
			String newCode = "";
			for(int i = 0;i<6-codeLength;i++){
				newCode += "0";
			}
			newCode += config.getValue();
			zixun.setCode(ZIXUN_CODE_PREFIX + newCode);
			
			responseBody.setEntity(zixun);
			responseBody.setResult(new Result(Status.OK,""));
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR,"创意code获取失败"));
			logger.error("preAdd 创意code获取失败",e);
		}
		return responseBody;
	}
	
	
	
	
	@ResponseBody
	@RequestMapping(value="/checkHasZx/{id}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixun> checkHasZx(@PathVariable("id") Long id,HttpServletRequest request){
		ResponseData<IdeaZixun> responseBody = new ResponseData<IdeaZixun>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try{
			
			//ideaZixunService.deleteById(id);
			IdeaZixun zx = new IdeaZixun();
			zx.setId(id);
			Long count = ideaZixunService.queryCount(zx);
			responseBody.setId(count);

			responseBody.setResult(new Result(Status.OK,null));
		}catch(Exception e){
			responseBody.setResult(new Result(Status.ERROR,null));
			logger.error("checkHasZx id 失败",e);
		}
		
		return responseBody;
	}
	
	
	/**
	 * 添加咨询 展示初始信息  ：  code
	 */
	@ResponseBody
	@RequestMapping(value="/zixunInfo/{id}",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixunBo> zixunInfo(@PathVariable("id") Long id,  HttpServletRequest request,HttpServletResponse response){
		
		ResponseData<IdeaZixunBo> responseBody = new ResponseData<IdeaZixunBo>();
		
		try {
			IdeaZixunBo bo = new IdeaZixunBo();
			
			IdeaZixun zixun = ideaZixunService.queryById(id);
			
			if(zixun == null){
				responseBody.setResult(new Result(Status.ERROR,null,"资讯查询失败!"));
				return responseBody;
			}
			BeanUtils.copyProperties(bo, zixun);
			
			if(zixun.getDepartmentId() != null){
				Department ad = departmentService.queryById(zixun.getDepartmentId());
				bo.setDepartName(ad.getName());
			}
			
			ZixunFinance zf = new ZixunFinance();
			zf.setZixunId(id);
			List<ZixunFinance> rzs = zixunFinanceService.queryList(zf);
			
			bo.setFinaceList(rzs);
			
			responseBody.setEntity(bo);
			responseBody.setResult(new Result(Status.OK,""));
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR,null,"资讯查询失败"));
			logger.error("zixunInfo 资讯查询失败",e);
		}
		return responseBody;
	}
	
	
	
	
	
	
	
	/**
	 * 资讯首页 
	 */
	@RequestMapping(value = "/index")
	public String zixunIndex() {
		return "idea/zixun";
	}
	
	
	/**
	 * 资讯  添加   页面
	 */
	@RequestMapping(value = "/add")
	public String zixunAdd() {
		return "idea/zixun/zixun_add";
	}
	
	
	/**
	 * 资讯   编辑  页面
	 */
	@RequestMapping(value = "/edit")
	public String zixunEdit() {
		return "idea/zixun/zixun_edit";
	}
	
	/**
	 * 资讯  查看  页面
	 */
	@RequestMapping(value = "/look")
	public String zixunInfo() {
		return "idea/zixun/zixun_look";
	}
	
	

	
	/**
	 * 资讯  列表
	 */
	@ResponseBody
	@RequestMapping(value = "/showlist", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixunBo> showPageList(HttpServletRequest request,@RequestBody IdeaZixunBo query ) {
		
		ResponseData<IdeaZixunBo> responseBody = new ResponseData<IdeaZixunBo>();
		Page<IdeaZixunBo> pageList = new Page<IdeaZixunBo>(new ArrayList<IdeaZixunBo>(), 0L);
		
		try {
			//User user = (User)getUserFromSession(request);
			User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
			
			List<Long> roleIdList = user.getRoleIds();  //UserConstant.DSZ
			
			//无权限查看，返回null
			if(roleIdList == null || (!roleIdList.contains(UserConstant.TZJL) && !roleIdList.contains(UserConstant.HHR)
					&& !roleIdList.contains(UserConstant.CEO) && !roleIdList.contains(UserConstant.DSZ)
					&& !roleIdList.contains(UserConstant.YJY) )){
				responseBody.setPageList(pageList);
				responseBody.setResult(new Result(Status.OK, ""));
				return responseBody;
			}
			
			PageRequest pageable = new PageRequest();

			Integer pageNum = query.getPageNum() != null ? query.getPageNum() : 0;
			Integer pageSize = query.getPageSize() != null ? query.getPageSize() : 10;
			
			Direction direction = Direction.DESC;
			if(StringUtils.isNotEmpty(query.getDirection())){
				direction = Direction.fromString(query.getDirection());
			}
			String property = "updated_time";
			if(StringUtils.isNotEmpty(query.getProperty())){
				property = query.getProperty();
			}
			
			//pageable = new PageRequest(pageNum, pageSize, new Sort(direction,property));
			pageable = new PageRequest(pageNum, pageSize,direction,property);
			//pageable = new PageRequest(pageNum,pageSize);
			
			
			/*if(StringUtils.isNotEmpty(query.getCodeQuery())){
				query.setCodeQuery((query.getCodeQuery()).toUpperCase());
			}*/
			if(StringUtils.isBlank(query.getCode())){
				query.setCode(null);
			}
			if(StringUtils.isNotEmpty(query.getKeyword())){
				query.setKeyword((query.getKeyword()).trim());
				//query.setKeyword((query.getKeyword()).toUpperCase());
			}
			
			//时间
			if(query.getStartTime() != null){
				Date date = DateUtil.convertStringToDate(query.getStartTime());
				query.setBeginTimeLong(DateUtil.getSearchFromDate(date).getTime());
			}
			if(query.getEndTime() != null){
				Date date = DateUtil.convertStringToDate(query.getEndTime());
				query.setEndTimeLong(DateUtil.getSearchToDate(date).getTime());
			}
			
			pageList = ideaZixunService.queryZixunPage(query, pageable,user.getId() );
			request.getSession().setAttribute("zixunQuery", query);
			responseBody.setPageList(pageList);
			responseBody.setResult(new Result(Status.OK, ""));
			
			return responseBody;
			
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR, null,"查询失败"));
			logger.error("showPageList 咨询查询失败",e);
		}
		
		return responseBody;
	}
	
	
	
	

	@ResponseBody
	@RequestMapping(value="/addzixun",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixun> addZixun(HttpServletRequest request,@RequestBody IdeaZixunBo zixunbo){
		ResponseData<IdeaZixun> responseBody = new ResponseData<IdeaZixun>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try{
			IdeaZixun zixun = new IdeaZixun();
			//BeanUtils.copyProperties(zixun,zixunbo);
			zixun.setCode(zixunbo.getCode());
			zixun.setCompanyName(zixunbo.getCompanyName());
			zixun.setCompanyBtime(zixunbo.getCompanyBtime());
			zixun.setCompanyField(zixunbo.getCompanyField());
			zixun.setCompanyCuser(zixunbo.getCompanyCuser());
			zixun.setCompanyAddress(zixunbo.getCompanyAddress());
			zixun.setCompanyUrl(zixunbo.getCompanyUrl());
			zixun.setDepartmentId(zixunbo.getDepartmentId());
			zixun.setRemark(zixunbo.getRemark());
			zixun.setDetailInfo(zixunbo.getDetailInfo());
			
			zixun.setId(null);
			zixun.setCreateUid(user.getId());
			zixun.setUpdatedUid(user.getId());
			zixun.setCreatedTime(System.currentTimeMillis());
			zixun.setUpdatedTime(System.currentTimeMillis());
			ideaZixunService.insertZixun(zixun,zixunbo);
			
			responseBody.setResult(new Result(Status.OK,null,"添加成功"));
			
			ControllerUtils.setRequestParamsForMessageTip(request, zixunbo.getCode(),zixun.getId(),"18");
		}catch(Exception e){
			responseBody.setResult(new Result(Status.ERROR,null,"添加失败!"));
			logger.error("addZixun 添加失败",e);
		}
		
		return responseBody;
	}
	
	
	@ResponseBody
	@RequestMapping(value="/editzixun",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixun> editZixun(HttpServletRequest request,@RequestBody IdeaZixunBo zixunbo){
		ResponseData<IdeaZixun> responseBody = new ResponseData<IdeaZixun>();
		
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try{
			IdeaZixun zixun = new IdeaZixun();
			//BeanUtils.copyProperties(zixun,zixunbo);
			zixun.setId(zixunbo.getId());
			zixun.setCode(zixunbo.getCode());
			zixun.setCompanyName(zixunbo.getCompanyName());
			zixun.setCompanyBtime(zixunbo.getCompanyBtime());
			zixun.setCompanyField(zixunbo.getCompanyField());
			zixun.setCompanyCuser(zixunbo.getCompanyCuser());
			zixun.setCompanyAddress(zixunbo.getCompanyAddress());
			zixun.setCompanyUrl(zixunbo.getCompanyUrl());
			zixun.setDepartmentId(zixunbo.getDepartmentId());
			zixun.setRemark(zixunbo.getRemark());
			zixun.setDetailInfo(zixunbo.getDetailInfo());
			
			zixun.setUpdatedTime(System.currentTimeMillis());
			zixun.setUpdatedUid(user.getId());
			ideaZixunService.editZixun(zixun,zixunbo);
			
			//ideaZixunService.updateById(zixun);
			responseBody.setResult(new Result(Status.OK,null,"修改成功"));
			
			ControllerUtils.setRequestParamsForMessageTip(request, zixunbo.getCode(),zixun.getId(),"18");
		}catch(Exception e){
			responseBody.setResult(new Result(Status.ERROR,null,"修改失败!"));
			logger.error("editZixun 修改失败",e);
		}
		
		return responseBody;
	}

	
	
	@ResponseBody
	@RequestMapping(value="/delzixun/{id}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<IdeaZixun> delZixun(@PathVariable("id") Long id,HttpServletRequest request){
		ResponseData<IdeaZixun> responseBody = new ResponseData<IdeaZixun>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try{
			IdeaZixun zxQ = ideaZixunService.queryById(id);
			if(zxQ != null){
				//ideaZixunService.deleteById(id);
				IdeaZixun zx = new IdeaZixun();
				zx.setUpdatedUid(user.getId());
				zx.setId(id);
				zx.setStatus((byte) 1);
				
				ideaZixunService.deleteZixun(zx);
			}
			
			responseBody.setResult(new Result(Status.OK,null,"删除成功"));
			ControllerUtils.setRequestParamsForMessageTip(request, zxQ.getCode(),id,"18");
		}catch(Exception e){
			responseBody.setResult(new Result(Status.ERROR,null,"删除失败!"));
			logger.error("delZixun 删除失败",e);
		}
		
		return responseBody;
	}
	
	/**
	 * 创意咨询导出
	 * 
	 * @param request
	 * @param response
	 */
	@ResponseBody
	@RequestMapping(value="/exportZixunGrade")
	public void exportZixunGrade(HttpServletRequest request,HttpServletResponse response){
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		IdeaZixunBo ideaZixun = (IdeaZixunBo) request.getSession().getAttribute("zixunQuery");	
		ideaZixun.setPageNum(0);
		ideaZixun.setPageSize(100000000);
	     Page<IdeaZixunBo> queryZixunPage = 
	    		 ideaZixunService.queryZixunPage(ideaZixun, 
				new PageRequest(ideaZixun.getPageNum(), 
						ideaZixun.getPageSize(), 
				Direction.fromString(ideaZixun.getDirection()), 
				ideaZixun.getProperty()),user.getId());
		List<ZixunData> chartDataList = setData(queryZixunPage.getContent(),ideaZixun);
		DataFormat<ZixunData> setFormat=new DataFormat<ZixunData>();
		String suffix = request.getParameter("suffix");
		try {
			setFormat.setList(chartDataList);
			setFormat.setStartTime(null==ideaZixun.getStartTime()?null:ideaZixun.getStartTime());
			setFormat.setEndTime(null==ideaZixun.getEndTime()?null:ideaZixun.getEndTime());
			SopReportModal modal = zixunGradeService.createReport(setFormat,request.getSession().getServletContext().getRealPath(""),tempfilePath,suffix);
			zixunGradeService.download(request, response, modal);
		} catch (Exception e) {
			logger.error("下载失败.",e);
		}
	     
	}
	
	public List<ZixunData> setData(List<IdeaZixunBo>list,IdeaZixunBo zixunBo){
		List<ZixunData> zixunList=new ArrayList<ZixunData>();
		if(null!=list&&!list.isEmpty()){
			for(IdeaZixunBo ideaZixunBo:list){
				ZixunData zixun=new ZixunData();
				zixun.setUpdateDate(DateUtil.longToString(ideaZixunBo.getUpdatedTime()).replaceAll("-", "/"));
				zixun.setCompanyAddress(ideaZixunBo.getCompanyName()==null?"":ideaZixunBo.getCompanyAddress());
				zixun.setCompanyBtime(ideaZixunBo.getCompanyBtime()==null?"":ideaZixunBo.getCompanyBtime());
				zixun.setCompanyField(ideaZixunBo.getCompanyField()==null?"":ideaZixunBo.getCompanyField());
				zixun.setDepartmentName(ideaZixunBo.getDepartName()==null?"":ideaZixunBo.getDepartName());
				zixun.setCompanyName(ideaZixunBo.getCompanyName()==null?"":ideaZixunBo.getCompanyName());
				zixun.setRemark(ideaZixunBo.getRemark()==null?"":ideaZixunBo.getRemark());
				zixun.setDetailInfo(ideaZixunBo.getDetailInfo()==null?"":ideaZixunBo.getDetailInfo());
				try {
				zixun=zixunFinance(ideaZixunBo.getId(),zixun);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				zixun.setCompanyCuser(ideaZixunBo.getCompanyCuser()==null?"":ideaZixunBo.getCompanyCuser());
				zixun.setCompanyAddress(ideaZixunBo.getCompanyAddress()==null?"":ideaZixunBo.getCompanyAddress());
				zixun.setCompanyUrl(ideaZixunBo.getCompanyUrl()==null?"":ideaZixunBo.getCompanyUrl());
				zixunList.add(zixun);
			}
		}
		   return zixunList;
	}
	  public Map<Long,String> departmentMap(){
		  Map<Long,String> map=new HashMap<Long,String>();
			List<Department> departmentList = departmentService.queryAll();
			for(Department p : departmentList){
				map.put(p.getId(),p.getName());
				
			}
			return map;
	  }
	  
	  
	  public ZixunData zixunFinance(Long id,ZixunData zixun) throws Exception  {
		  ZixunFinance zf = new ZixunFinance();
		  zixun=notNull(zixun);
			zf.setZixunId(id);
			List<ZixunFinance> rzs = zixunFinanceService.queryList(zf);
			if(null!=rzs&&!rzs.isEmpty()){
				for(int i=0;i<rzs.size();i++){
					ZixunFinance zf1=rzs.get(i);
					int k=i+1;
					zixun.getClass().getMethod("setTime"+k, String.class).invoke(zixun, zf1.getFinanceDate()==null?"":zf1.getFinanceDate());
					zixun.getClass().getMethod("setMoney"+k, String.class).invoke(zixun, zf1.getFinanceAmount()==null?"":zf1.getFinanceAmount());
				}
			}
			return zixun;
	  }
	  
	  public ZixunData notNull(ZixunData zixun){
		  
		  zixun.setTime1("");
		  zixun.setMoney1("");
		  zixun.setTime2("");
		  zixun.setMoney2("");
		  zixun.setTime3("");
		  zixun.setMoney3("");
		  zixun.setTime4("");
		  zixun.setMoney4("");
		  zixun.setTime5("");
		  zixun.setMoney5("");
		  zixun.setTime6("");
		  zixun.setMoney6("");
		  zixun.setTime7("");
		  zixun.setMoney7("");
		  zixun.setTime8("");
		  zixun.setMoney8("");
		  zixun.setTime9("");
		  zixun.setMoney9("");
		  zixun.setTime10("");
		  zixun.setMoney10("");
		  return zixun;
	  }
	  
}
