package com.galaxyinternet.chart.controller;

import com.galaxyinternet.bo.project.ProjectBo;
import com.galaxyinternet.common.controller.BaseControllerImpl;
import com.galaxyinternet.common.enums.DictEnum;
import com.galaxyinternet.common.query.ChartKpiQuery;
import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.framework.core.constants.UserConstant;
import com.galaxyinternet.framework.core.exception.DaoException;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.framework.core.utils.DateUtil;
import com.galaxyinternet.framework.core.utils.GSONUtil;
import com.galaxyinternet.model.chart.SopCharts;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.chart.SopProjectAnalysisService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@Controller
@RequestMapping("/galaxy/charts/analysis")
public class SopProjectAnalysisController extends BaseControllerImpl<SopCharts, SopCharts>{
	final Logger logger = LoggerFactory.getLogger(SopProjectAnalysisController.class);
	@Autowired
	private SopProjectAnalysisService analysisService;
	@Autowired
	private ProjectService projectService;
	
	
	@Override
	protected BaseService<SopCharts> getBaseService() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	@RequestMapping(value="/toProjectAnalysis",method = RequestMethod.GET)
	public String toProjectAnalysis(){
		return "charts/projectAnalysis";
	}

	/**
	 * 项目分析 - 项目总览 - 项目进度分布图
	 * 项目分析 - 项目总览 - 项目数统计top10
	 *
	 *
	 * select - dict - parentCode : projectProgress 、 order by : dictSort
	 *
	 *
	 *
	 *
	 *
	 *
	 * @param query
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/searchProjOverView",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> searchProjOverView(HttpServletRequest request, @RequestBody ChartKpiQuery query){
		ResponseData<Project> responseBody = new ResponseData<Project>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);

		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)
					|| roleIdList.contains(UserConstant.YYFZR) || roleIdList.contains(UserConstant.THYY)) {

			}else if(roleIdList.contains(UserConstant.HHR)){
				query.setDeptid(user.getDepartmentId());
			}else if(roleIdList.contains(UserConstant.TZJL)){
				return responseBody;
			}

			//条件设置
			if(StringUtils.isBlank(query.getSdate())) query.setSdate(DateUtil.getDefaultSdate(1));
			if(StringUtils.isBlank(query.getEdate())) query.setEdate(DateUtil.getDefaultEdate(1));

			query.setSdate(query.getSdate().trim() + " 00:00:00");
			query.setEdate(query.getEdate().trim() + " 23:59:59");

			Long startTime = DateUtil.stringToLong(query.getSdate(), "yyyy-MM-dd HH:mm:ss");
			Long endTime = DateUtil.stringToLong(query.getEdate(), "yyyy-MM-dd HH:mm:ss");

			if(startTime > endTime){
				responseBody.setResult(new Result(Status.ERROR,null, "开始时间不能大于结束时间"));
				return responseBody;
			}
			query.setStartTime(startTime);
			query.setEndTime(endTime);

			List<Project> overViewList = projectService.queryProjOverViewForComp(query);
			responseBody.setEntityList(overViewList);
			responseBody.setResult(new Result(Status.OK, ""));
			responseBody.setQueryParamsJsonStr(GSONUtil.toJson(query));
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
			logger.error("searchProjOverView",e);
		}
		return responseBody;
	}

	/**
	 * 
	 * 项目总览柱状图表
	 * @param query
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/searchOverView",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopCharts> searchOverView(HttpServletRequest request, @RequestBody(required=false) SopCharts query){
		ResponseData<SopCharts> responseBody = new ResponseData<SopCharts>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ) || roleIdList.contains(UserConstant.YYFZR) || roleIdList.contains(UserConstant.THYY)) {
				query.setCreateUid(null);
			}else if(roleIdList.contains(UserConstant.HHR)){
				query.setDepartmentId(user.getDepartmentId());
			}else if(roleIdList.contains(UserConstant.TZJL)){
				query.setCreateUid(user.getId());
			}
			//去掉关闭的项目统计
			query.setProjectStatus(DictEnum.projectStatus.YFJ.getCode());
			List<SopCharts> overViewList = analysisService.queryProjectOverView(query);
			responseBody.setEntityList(overViewList);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			logger.error("searchProjOverView",e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
		}
		return responseBody;
	}
	
	/**
	 * 项目总览表格
	 * @param request
	 * @param project
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/searchProjectByCharts",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> searchProjectByCharts(HttpServletRequest request,@RequestBody ProjectBo project){
		ResponseData<Project> responseBody = new ResponseData<Project>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}		
		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)) {
				
			}else if(roleIdList.contains(UserConstant.HHR)){
				project.setProjectDepartid(user.getDepartmentId());
			}
			PageRequest pageRequest = new PageRequest(project.getPageNum(),
					project.getPageSize(),Direction.DESC,"created_time");
			//去掉关闭的项目统计
			project.setResultCloseFilter(DictEnum.projectStatus.YFJ.getCode());
			Page<Project> pageProject = projectService.queryPageListByChart(project, pageRequest);
			responseBody.setPageList(pageProject);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			logger.error("searchProjOverView",e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
		}
		return responseBody;
	}
	
	
	/**
	 * 项目增长率图表
	 * @param request
	 * @param sopCharts
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/searchRiseRate",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopCharts> searchRiseRate(HttpServletRequest request, @RequestBody SopCharts query){
		ResponseData<SopCharts> responseBody = new ResponseData<SopCharts>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)) {
				
			}else if(roleIdList.contains(UserConstant.HHR)){
				query.setDepartmentId(user.getDepartmentId());
			}
			
			List<SopCharts> sopChartsList = analysisService.queryRiseRate(query);
			responseBody.setEntityList(sopChartsList);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			logger.error("searchProjOverView",e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
		}
		return responseBody;
	}
	
	
	/**
	 * 图表查询
	 * @param request
	 * @param query
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/searchRiseRateGrid",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopCharts> searchRiseRateGrid(HttpServletRequest request,@RequestBody SopCharts query){
		ResponseData<SopCharts> responseBody = new ResponseData<SopCharts>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)) {
				
			}else if(roleIdList.contains(UserConstant.HHR)){
				query.setDepartmentId(user.getDepartmentId());
			}
			PageRequest pageRequest = new PageRequest(query.getPageNum(),
					query.getPageSize());
			Page<SopCharts> sopChartsPage = analysisService.queryRiseRateGroup(query,pageRequest);
			responseBody.setPageList(sopChartsPage);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			logger.error("searchProjOverView",e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
		}
		return responseBody;
	}
	
	@ResponseBody
	@RequestMapping(value="/searchInvestmentGroupDate",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopCharts> searchInvestmentGroupDate(HttpServletRequest request,@RequestBody SopCharts query){
		ResponseData<SopCharts> responseBody = new ResponseData<SopCharts>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)) {
				
			}else if(roleIdList.contains(UserConstant.HHR)){
				query.setDepartmentId(user.getDepartmentId());
			}
			query.setProjectProgress(DictEnum.projectProgress.投后运营.getCode());
			List<SopCharts> chartsList = analysisService.queryInvestmentGroupDate(query);
			responseBody.setEntityList(chartsList);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			logger.error("searchProjOverView",e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
		}
		return responseBody;
	}

	
	@ResponseBody
	@RequestMapping(value="/searchPostAnalysis",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<SopCharts> searchPostAnalysis(HttpServletRequest request,@RequestBody(required=false) SopCharts query){
		ResponseData<SopCharts> responseBody = new ResponseData<SopCharts>();
		User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if (user == null) {
			responseBody.setResult(new Result(Status.ERROR, "未登录!"));
			return responseBody;
		}
		if(query.getBelongType()==null){
			responseBody.setResult(new Result(Status.ERROR, "业务部门分类不能为空"));
			return responseBody;
		}
		try {
			List<Long> roleIdList = user.getRoleIds();
			if (roleIdList.contains(UserConstant.CEO) || roleIdList.contains(UserConstant.DSZ)) {
				
			}else if(roleIdList.contains(UserConstant.HHR)){
				query.setDepartmentId(user.getDepartmentId());
			}else{
				responseBody.setResult(new Result(Status.OK, ""));
				return responseBody;
			}
			List<SopCharts> chartsList = analysisService.queryPostAnalysis(query);
			responseBody.setEntityList(chartsList);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			logger.error("searchProjOverView",e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现误不可预知错"));
		}
		return responseBody;
	}
	
}
