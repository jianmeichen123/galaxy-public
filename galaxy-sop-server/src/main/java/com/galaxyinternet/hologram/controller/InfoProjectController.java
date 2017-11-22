package com.galaxyinternet.hologram.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.galaxyinternet.common.annotation.LogType;
import com.galaxyinternet.common.controller.BaseControllerImpl;
import com.galaxyinternet.common.enums.DictEnum;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.hologram.util.NodeUtil;
import com.galaxyinternet.model.common.Node;
import com.galaxyinternet.model.department.Department;
import com.galaxyinternet.model.dict.Dict;
import com.galaxyinternet.model.hologram.InformationData;
import com.galaxyinternet.model.hologram.InformationDictionary;
import com.galaxyinternet.model.hologram.InformationListdata;
import com.galaxyinternet.model.hologram.InformationListdataRemark;
import com.galaxyinternet.model.hologram.InformationResult;
import com.galaxyinternet.model.hologram.InformationTitle;
import com.galaxyinternet.model.project.JointDelivery;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.DepartmentService;
import com.galaxyinternet.service.DictService;
import com.galaxyinternet.service.JointDeliveryService;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.UserService;
import com.galaxyinternet.service.hologram.InformationDataService;
import com.galaxyinternet.service.hologram.InformationDictionaryService;
import com.galaxyinternet.service.hologram.InformationListdataRemarkService;
import com.galaxyinternet.service.hologram.InformationListdataService;
import com.galaxyinternet.service.hologram.InformationProgressService;
import com.galaxyinternet.service.hologram.InformationResultService;
import com.galaxyinternet.service.hologram.InformationTitleService;
import com.galaxyinternet.utils.CollectionUtils;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@Api("全息图后台接口")
@Controller
@RequestMapping("/galaxy/infoProject")
public class InfoProjectController  extends BaseControllerImpl<InformationData, InformationData> {

	final Logger logger = LoggerFactory.getLogger(InfoProjectController.class);
	
	@Autowired
	private InformationDataService infoDataService;
	@Autowired
	private InformationTitleService titleService;
	@Autowired
	private InformationDictionaryService infoDictionaryService;
	@Autowired
	private InformationListdataRemarkService  infoListdataRemarkService;
	@Autowired
	private InformationProgressService informationProgressService;
	@Autowired
	private InformationResultService informationResultService;
	@Autowired
	private InformationListdataService informationListdataService;
	@Autowired
	private JointDeliveryService jointDeliveryService;
	@Autowired
	private DictService dictService;
	
	@Override
	protected BaseService<InformationData> getBaseService() {
		return this.infoDataService;
	}
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private DepartmentService departmentService;
	
	@Autowired
	private UserService userService;
	
	
	/**
	 * 全息图-项目部分数据处理页面
	 * @version 
	 * @return
	 */
	@RequestMapping(value = "/toInfoProjectPage", method = RequestMethod.GET)
	public String toInfoProjectPage(HttpServletRequest request) {
		return "project/tanchuan/v_person_learning";
	}
	
	/**
	 * 全息图-项目部分-字段编辑
	 * @version 2017-03-13
	 * @author jianmeichen
	 */
	@ApiOperation("保存")
	@com.galaxyinternet.common.annotation.Logger(operationScope = LogType.LOG)
	@ResponseBody
	@RequestMapping(value = "/saveOrUpdateInfo", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<Project> saveOrUpdateInfo(
			@ApiParam(name = "informationData", value = "标题/值信息", required = true)
			@RequestBody 
			InformationData informationData,
			HttpServletRequest request) {
		ResponseData<Project> responseBody = new ResponseData<Project>();
		if(null==informationData.getProjectId()||"".equals(informationData.getProjectId())){
			responseBody.setResult(new Result(Status.ERROR,"csds" , "必要的参数丢失!"));
			return responseBody;
		}
	    Long projectId=Long.parseLong(informationData.getProjectId());
	    Project project = projectService.queryById(projectId);
		User user = (User) getUserFromSession(request);
		try{
			infoDataService.save(informationData);
		    logger.info("全息图编辑项目相关信息["+"项目名称:"+project.getProjectName()+" 创建人:"+project.getCreateUname()+" 部门："+user.getDepartmentName()+"]");
		    responseBody.setResult(new Result(Status.OK, null,"编辑项目部分成功"));

			informationProgressService.threadForUpdate(user.getId(),projectId);
		} catch (Exception e) {
			responseBody.setResult(new Result(Status.ERROR, null,"编辑项目部分数据失败"));
			logger.error("异常信息:",e);
		}
		return responseBody;
	}
	
	
	@ResponseBody
	@RequestMapping("/getTitleResults/{titleId}/{projectId}")
	public ResponseData<InformationTitle> getTitleResults(@PathVariable String titleId,@PathVariable String projectId)
	{
		ResponseData<InformationTitle> data = new ResponseData<>();
		
		try
		{
			List<InformationTitle> list = titleService.searchWithData(titleId, projectId);
			data.setEntityList(list);
			
		} catch (Exception e)
		{
			logger.error("获取标题失败，信息:titleId="+titleId,e);
			data.getResult().addError("获取标题失败");
		}
		
		return data;
	}
	@ApiOperation("查询页面标题及结果")
	@ApiImplicitParams(
		value = {
			@ApiImplicitParam(name="reportType", value="报告类型",paramType="path",required=true),
			@ApiImplicitParam(name="realteId", value="标题relate id",paramType="path",required=true),
			@ApiImplicitParam(name="projectId", value="项目id",paramType="path",required=true)
		}	
	)
	@ResponseBody
	@RequestMapping(value="/getRelateTitleResults/{reportType}/{realteId}/{projectId}",method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<InformationTitle> getRelateTitleResults(@PathVariable Integer reportType,@PathVariable Long realteId, @PathVariable Long projectId)
	{
		ResponseData<InformationTitle> data = new ResponseData<>();
		try
		{
			List<InformationTitle> list = titleService.searchRelateTitleWithData(reportType, realteId, projectId);
			data.setEntityList(list);
			
		} catch (Exception e)
		{
			logger.error("获取标题失败，信息:realteId="+realteId,e);
			data.getResult().addError("获取标题失败");
		}
		return data;
	}
	/**
	 * 数据字典加载
	 * @param parentTitleId
	 * @param subCode
	 * @param fileds
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/getDirectory/{tittleId}/{subCode}/{filed}", method = RequestMethod.GET)
	public ResponseData<InformationTitle> getDirectory(@PathVariable String tittleId, @PathVariable String subCode,
			@PathVariable String filed)

	{
		ResponseData<InformationTitle> data = new ResponseData<>();
		try {
			InformationListdataRemark query = new InformationListdataRemark();
			query.setCode(subCode);
			query.setTitleId(Long.parseLong(tittleId));
			Map<String, Object> map =
					new HashMap<String, Object>();
			InformationListdataRemark queryOne = infoListdataRemarkService.queryOne(query);
			if (null != queryOne) {
				{
					  List<InformationDictionary> dircList=
		  		                new ArrayList<InformationDictionary>();
					String index = filed.substring(5);
					String getSubCode = getSubCode(queryOne, index);
					dircList = infoDictionaryService
							.selectValuesByTid(Long.parseLong(getSubCode));
					map.put(filed, dircList);
				}
			}
			data.getResult().setStatus(Status.OK);
			data.setUserData(map);
		} catch (Exception e) {
			logger.error("加载数据字典失败，信息:titileId=" + tittleId, e);
			data.getResult().addError("加载数据字典失败");
		}
		return data;
	}
	
	public String getSubCode(InformationListdataRemark query,String index){
		String str="";
		switch(Integer.parseInt(index)){
		case 1:
			str=query.getSubTitleId1();
			break;
		case 2:
			str=query.getSubTitleId2();
			break;
		case 3:
			str=query.getSubTitleId3();
			break;
		case 4:
			str=query.getSubTitleId4();
			break;
		case 5:
			str=query.getSubTitleId5();
			break;
		case 6:
			str=query.getSubTitleId6();
			break;
		case 7:
			str=query.getSubTitleId7();
			break;
		case 8:
			str=query.getSubTitleId8();
			break;
		case 9:
			str=query.getSubTitleId9();
			break;
		case 10:
			str=query.getSubTitleId10();
			break;
		}
		return str;
	}
	
	/**
	 * 获取总注资计划额度
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/getTotalAppr", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<InformationResult> getTotalAppr(@RequestBody InformationResult informationResult,HttpServletRequest request){
		//是否验证信息完整
		boolean validate = "true".equals(request.getParameter("validate"));
		
		ResponseData<InformationResult> response = new ResponseData<InformationResult>();
		if(StringUtils.isEmpty(informationResult.getProjectId()) && StringUtils.isEmpty(informationResult.getTitleId())){
			response.setResult(new Result(Status.ERROR,"参数丢失."));
		}
		//投资金额,估值安排所有值,投资方主体
		String[] titleIds = {"3004","3012","3011","3010","3020"};
		Set<String> set=new HashSet<String>();         
		set.addAll(Arrays.asList(titleIds));
		try{
			Map<String,Object> map = new HashMap<String,Object>();
			informationResult.setTitleIds(set);
			informationResult.setIsValid("0");
			//获取总注资计划的金额
			List<InformationResult> list = informationResultService.queryList(informationResult);
			if(list != null && list.size() == titleIds.length){
				for(InformationResult ir : list){
					if(validate && StringUtils.isEmpty(ir.getContentDescribe1())){
						map.clear();
						break;
					}
					if("3004".equals(ir.getTitleId())){
						InformationListdata query = new InformationListdata();
			            query.setTitleId(3022l);
			            query.setProjectId(Long.valueOf(informationResult.getProjectId()));
			            map.put("totalMoney", ir.getContentDescribe1());
			            Double money = informationListdataService.selectPartMoney(query);
			            if(money != null){
			            	 BigDecimal total = new BigDecimal(ir.getContentDescribe1());
			 	             BigDecimal part = new BigDecimal(money);
			 	             if(total.doubleValue() > part.doubleValue()){
			 	            	double remainMoney = total.subtract(part).doubleValue();
			 	  				map.put("remainMoney",remainMoney );
			 	             }
			            }
					}
				}
	            response.setUserData(map);
			}
		   
		}catch(Exception e){
			logger.error("获取总注资金额失败.", e);
			e.printStackTrace();
			response.setResult(new Result(Status.ERROR,"总注资计划失败."));
		}
		
		return response;
	}
	
	/**
	 * 获取实际注资计划额度
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/getTotalApprActual", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<InformationResult> getTotalApprActual(@RequestBody InformationResult informationResult,HttpServletRequest request){
		
		ResponseData<InformationResult> response = new ResponseData<InformationResult>();
		if(informationResult.getId() == null){
			response.setResult(new Result(Status.ERROR,"参数丢失."));
		}
		try{
			Map<String,Object> map = new HashMap<String,Object>();;
			//获取分拨注资计划的金额
			InformationListdata ir = informationListdataService.queryById(informationResult.getId());
			if(StringUtils.isNotEmpty(ir.getCode())){
				ir = informationListdataService.queryById(ir.getParentId());
			}
			if(ir != null){
				String field3 = ir.getField3();
				InformationListdata query = new InformationListdata();
				query.setParentId(ir.getId());
				query.setCode("grant-actual");
	            query.setTitleId(ir.getTitleId());
	            query.setProjectId(ir.getProjectId());
	            Double money = informationListdataService.selectPartMoney(query);
	            map.put("totalMoney", field3);
	            if(money != null){
	            	 BigDecimal total = new BigDecimal(field3);
	 	             BigDecimal part = new BigDecimal(money);
	 	             if(total.doubleValue() > part.doubleValue()){
	 	            	double remainMoney = total.subtract(part).doubleValue();
	 	  				map.put("remainMoney",remainMoney );
	 	             }
	            }
	            response.setUserData(map);
			}
		   
		}catch(Exception e){
			logger.error("获取总注资金额失败.", e);
			e.printStackTrace();
			response.setResult(new Result(Status.ERROR,"总注资计划失败."));
		}
		
		return response;
	}
	
	
	/**
	 * 根据code等信息获取title和value
	 * @param reportType
	 * @param realteId
	 * @param projectId
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getTitleRelationResults/{reportType}/{projectId}",method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<InformationTitle> getTitleResults(@PathVariable Integer reportType,@PathVariable Long projectId)
	{
		ResponseData<InformationTitle> data = new ResponseData<>();
		if(reportType == null || projectId == null){
			data.getResult().addError("参数丢失");
			return data;
		}
		Map<String,Object> proInfo = new HashMap<String,Object>();
		try
		{
			//项目信息
			Project project = projectService.queryById(projectId);
			Map<String,String> dictMap = dictMap("financeMode");
			if (project != null) {
				List<Department> departments = departmentService.queryAll();
				Department queryOne = CollectionUtils.getItem(departments, "id", project.getProjectDepartid());
				Long deptId = null;
				if (queryOne != null) {
					project.setProjectCareerline(queryOne.getName());
					deptId = queryOne.getManagerId();
					if (null != deptId && deptId.longValue() > 0L) {
						User queryById = userService.queryById(queryOne
								.getManagerId());
						if (queryById != null) {
							project.setHhrName(queryById.getRealName());
						}
					}
				}
				if(project.getIndustryOwn()!=null){
	                String name=DictEnum.industryOwn.getNameByCode(
	        		 project.getIndustryOwn().toString());
				if (name != null) {
						project.setIndustryOwnDs(name);				
					}else{
						project.setIndustryOwnDs(null);
					}
				}	
				if(null!=project.getFinanceMode()&&!"".equals(project.getFinanceMode())){
					String financeMode=dictMap.get(project.getFinanceMode());
					project.setfModeRemark(financeMode);
					List<JointDelivery> queryList=new ArrayList<JointDelivery>();
					JointDelivery jointDelivery=new JointDelivery();
					jointDelivery.setProjectId(project.getId());
					jointDelivery.setDeliveryType(project.getFinanceMode());
					if(project.getFinanceMode().equals("financeMode:1")||project.getFinanceMode().equals("financeMode:2")){
						jointDelivery.setDeliveryType(project.getFinanceMode());
						queryList = jointDeliveryService.queryList(jointDelivery);
					}
					project.setJointDeliveryList(queryList);
				}
			} else {
				data.setResult(new Result(Status.ERROR, null, "未查找到指定项目信息!"));
				return data;
			}
			
			InformationResult ir = new InformationResult();
			ir.setProjectId(projectId.toString());
			ir.setReportType(reportType.toString());
			//全息报告信息
			List<Node> childs= informationResultService.selectResults(ir);
			List<Node> child = NodeUtil.bulid(childs);
				proInfo.put("pro", project);
				proInfo.put("report", child);
				data.setUserData(proInfo);
			
		} catch (Exception e)
		{
			logger.error("获取项目详情信息页失败",e);
			data.getResult().addError("获取标题失败");
		}
		return data;
	}
	

	  public Map<String,String> dictMap(String parentCode){
		  Map<String,String> map=new HashMap<String,String>();
			List<Dict> dictList = dictService.selectByParentCode(parentCode);
			for(Dict d : dictList){
				map.put(d.getCode(),d.getName());
			}
			return map;
	  }
	
	
}



