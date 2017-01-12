package com.galaxyinternet.grant.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.dubbo.remoting.exchange.Response;
import com.galaxyinternet.bo.GrantActualBo;
import com.galaxyinternet.common.annotation.LogType;
import com.galaxyinternet.common.controller.BaseControllerImpl;
import com.galaxyinternet.common.utils.ControllerUtils;
import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.framework.core.exception.DaoException;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.model.GrantActual;
import com.galaxyinternet.model.GrantPart;
import com.galaxyinternet.model.GrantTotal;
import com.galaxyinternet.model.operationLog.UrlNumber;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.sopfile.SopDownLoad;
import com.galaxyinternet.model.sopfile.SopFile;
import com.galaxyinternet.model.touhou.Delivery;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.GrantActualService;
import com.galaxyinternet.service.GrantPartService;
import com.galaxyinternet.service.GrantTotalService;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.SopFileService;
import com.galaxyinternet.service.UserService;
import com.galaxyinternet.utils.BatchUploadFile;
import com.galaxyinternet.utils.MathUtils;


@Controller
@RequestMapping("/galaxy/grant/actual")
public class GrantActualController extends BaseControllerImpl<GrantActual, GrantActualBo> {
	
	private static final Logger _common_logger_ = LoggerFactory.getLogger(GrantActualController.class);
	
	@Autowired
	private GrantActualService grantActualService;
	@Autowired
	private GrantPartService grantPartService;
	@Autowired
	private GrantTotalService grantTotalService;
	@Autowired
	private ProjectService projectService;
	@Autowired
	private UserService userService;
	@Autowired
	private SopFileService sopFileService;
	@Override
	protected BaseService<GrantActual> getBaseService() {
		return this.grantActualService;
	}
	@Autowired
	BatchUploadFile batchUpload;
	
	private String tempfilePath;

	public String getTempfilePath() {
		return tempfilePath;
	}

	@Value("${sop.oss.tempfile.path}")
	public void setTempfilePath(String tempfilePath) {
		this.tempfilePath = tempfilePath;
	}
	

	/**
	 * 查看实际注资列表弹出层
	 */
	@RequestMapping(value = "/toApprActualPage/{partId}", method = RequestMethod.GET)
	public ModelAndView toApprActualPage(@PathVariable("partId") Long partId, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView("project/tanchuan/appr_actual");
		mv.addObject("partId", partId);
		return mv;
	}
	/**
	 * 查看实际注资详细信息弹出层
	 */
	@RequestMapping(value = "/lookActual/{actualId}", method = RequestMethod.GET)
	public ModelAndView lookActual(@PathVariable("actualId") Long actualId, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView("project/tanchuan/appr_actual_look");
		Map<String, Object> actualInfo = grantActualService.lookActualDetail(actualId);
		try {
			double countMoney = grantActualService.calculateBelongToActualMoney(Long.parseLong(String.valueOf(actualInfo.get("partId"))));
			actualInfo.put("remainMoney", Double.parseDouble(String.valueOf(actualInfo.get("partMoney"))) - countMoney);
		} catch (NumberFormatException e) {
			_common_logger_.debug("转换出错，相应金额为NULL");
		}
		mv.addObject("actualInfo", actualInfo);
		return mv;
	}
	
	
	/**
	 * sop tab页面  日志 详情    /galaxy/project/proview/
	 */
	@RequestMapping(value = "/toApprActualLook", method = RequestMethod.GET)
	public String toApprActualLock(HttpServletRequest request) {
				return "project/tanchuan/appr_actual_look";
	}
	/**
	 * sop tab页面  日志 详情    /galaxy/project/proview/
	 */
	@RequestMapping(value = "/toApprActualAdd", method = RequestMethod.GET)
	public String toApprActualAdd(HttpServletRequest request) {
				return "project/tanchuan/appr_edit_actual";
	}
	
	
	/**
	 * 实际注资记录列表查询
	 */
	@ResponseBody
	@RequestMapping(value = "/searchActualList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<GrantActual> searchActualList(@RequestBody GrantActual actual,
			HttpServletRequest request) {
		ResponseData<GrantActual> responseBody = new ResponseData<GrantActual>();
		if(actual.getPartGrantId() == null){
			responseBody.setResult(new Result(Status.ERROR,"error" , "必要的参数丢失!"));
			return responseBody;
		}
		try {
			Page<GrantActual> actualPage = grantActualService.queryPageList(actual,
					new PageRequest(actual.getPageNum(), 
							actual.getPageSize(), 
							Direction.fromString("desc"), 
							"actual_time"));
			List<GrantActual> ga = actualPage.getContent();
			if(ga!=null && !ga.isEmpty()){
				for(GrantActual gaa : actualPage.getContent()){
					List<SopDownLoad> sopDownLoadList = grantActualService.queryActualDownFiles(gaa.getId());
					if(sopDownLoadList != null){
						gaa.setFileNum((byte) sopDownLoadList.size());
					}
				}
			}
			responseBody.setPageList(actualPage);
		} catch (Exception e) {
			_common_logger_.error("查询实际注资列表失败！查询条件：" + actual, e);
		}
		return responseBody;
	}
	
	@RequestMapping(value="/toEditApprActual",method=RequestMethod.GET)
	public String toEditApprActual(){
		return "project/tanchuan/appr_edit_actual";
	}
	
	@ResponseBody
	@RequestMapping(value="/initEditApprActual",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<GrantActual> initEditApprActual(@RequestBody GrantActual aQuery,HttpServletRequest request){
		ResponseData<GrantActual> responseBody = new ResponseData<GrantActual>();
		GrantPart part = new GrantPart();
		GrantTotal total = new GrantTotal();
		try {	
			GrantActual actual = null;
			//获取实际注资中实际注资金额
			if(aQuery.getId()!=null){
				actual = grantActualService.selectGrantActual(aQuery.getId());
				//actual = grantActualService.queryById(aQuery.getId());
			}
			if(aQuery.getPartGrantId()!=null){
				aQuery.setId(null);
				List<GrantActual> actualList = grantActualService.queryList(aQuery);
				part = grantPartService.queryById(aQuery.getPartGrantId());
				total = grantTotalService.queryById(part.getTotalGrantId());
				if(actual==null){
					actual = new GrantActual();
				}
				
				//投资方、目标公司、实际注资日期、股权占比、加速服务费占比、项目估值
				
				actual.setInvestors(total.getInvestors());  //投资方
				actual.setProtocolName(total.getGrantName());
				actual.setPlanGrantTime(part.getGrantDetail());
				//actual.setPlanGrantMoney(part.getGrantMoney());  
				actual.setPlanGrantMoney(total.getGrantMoney());  
				Double surplusGrantMoney = part.getGrantMoney();
				for(GrantActual temp : actualList){
					surplusGrantMoney = Double.parseDouble(MathUtils.calculate(surplusGrantMoney, temp.getGrantMoney(), "-", 4));
				}
				//剩余金额
				actual.setSurplusGrantMoney(surplusGrantMoney);
				
				Project pro = projectService.queryById(total.getProjectId());
				actual.setProjectCompany(pro.getProjectCompany());  //目标公司
				//actual.setFinalContribution(pro.getFinalContribution());  //实际投资
				actual.setFinalShareRatio(total.getFinalShareRatio());  //股权占比
				actual.setServiceCharge(total.getServiceCharge());  //加速服务费占比
				actual.setFinalValuations(total.getFinalValuations());  //实际估值
				
			}else{
				responseBody.setResult(new Result(Status.ERROR, "参数错误(partGrandID)"));
			}
			
			responseBody.setEntity(actual);
		} catch (DaoException e) {
			_common_logger_.error("初始化实际注资对话框出现错误", e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现不可预知的错误"));
		}
		return responseBody;
	}
	
	@com.galaxyinternet.common.annotation.Logger(operationScope = { LogType.LOG, LogType.MESSAGE })
	@ResponseBody
	@RequestMapping(value="/saveApprActual" , method=RequestMethod.POST , produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<GrantActual> saveApprActual(HttpServletRequest request, @RequestBody GrantActual form){
		ResponseData<GrantActual> responseBody = new ResponseData<GrantActual>();
		//校验
		if(form.getPartGrantId()==null){
			responseBody.setResult(new Result(Status.ERROR, "分拨ID不能为空"));
			return responseBody;
		}
		if(form.getGrantMoney()==null){
			responseBody.setResult(new Result(Status.ERROR, "实际注资金额不能为空"));
			return responseBody;
		}
		//还需存在金额校验

		try {
			UrlNumber uNum = null;
			GrantPart part = grantPartService.queryById(form.getPartGrantId());
			GrantTotal total = grantTotalService.queryById(part.getTotalGrantId());
			Project project = new Project();
			project = projectService.queryById(total.getProjectId());
			User blongUser = userService.queryById(project.getCreateUid());
			
			User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);
			
			
			if(form.getFileReidsKey() != null){
				ResponseData<SopFile> result = batchUpload.batchUpload(user.getId()+form.getFileReidsKey());
				if(Status.OK.equals(result.getResult().getStatus())){
					List<SopFile> fileList = result.getEntityList();
					form.setFiles(fileList);
				}
			}
			
			if(form.getId()==null || form.getId().intValue() == 0){
				//新增
				uNum = UrlNumber.one;
				form.setCreateUid(user.getId());
				form.setCreateUname(user.getRealName());
				//grantActualService.insert(form);
				grantActualService.insertGrantActual(form, project);
			}else{
				//编辑
				uNum = UrlNumber.two;
				GrantActual actual = grantActualService.queryById(form.getId());
				actual.setFileIds(form.getFileIds());
				actual.setFileNum(form.getFileNum());
				actual.setFiles(form.getFiles());
				actual.setActualTime(form.getActualTime());
				actual.setGrantMoney(form.getGrantMoney());
				actual.setUpdatedTime(System.currentTimeMillis());
				//grantActualService.updateById(actual);
				grantActualService.upateGrantActual(actual, project);
			}
			responseBody.setResult(new Result(Status.OK, ""));
			ControllerUtils.setRequestParamsForMessageTip(request, blongUser, project, "14.3", uNum);
		} catch (DaoException e) {
			// TODO: handle exception
			_common_logger_.error("添加或编辑出现错误", e);
			responseBody.setResult(new Result(Status.ERROR, "系统出现不可预知的错误"));
		}
		return responseBody;
	}
	
	@com.galaxyinternet.common.annotation.Logger(operationScope = { LogType.LOG, LogType.MESSAGE })
	@ResponseBody
	@RequestMapping(value="/deleteApprActual/{id}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<GrantActual> deleteApprActual( @PathVariable Long id,HttpServletRequest request){
		ResponseData<GrantActual> responseBody = new ResponseData<GrantActual>();
		try {
			
			GrantActual actual = grantActualService.queryById(id);
			GrantPart part = grantPartService.queryById(actual.getPartGrantId());
			GrantTotal total = grantTotalService.queryById(part.getTotalGrantId());
			Project project = projectService.queryById(total.getProjectId());
			User blongUser = userService.queryById(project.getCreateUid());
			
			//grantActualService.deleteById(id);
			grantActualService.deleteGrantActual(id);
			ControllerUtils.setRequestParamsForMessageTip(request, blongUser, project, "14.3", UrlNumber.three);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			// TODO: handle exception
			responseBody.setResult(new Result(Status.ERROR, "系统出现不可预知的错误"));
			_common_logger_.error("删除错误", e);
		}
		return responseBody;
	}
	
	
	/**
	 * 获取分拨中所有实际金额
	 * @param id
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getActualPartMoney/{partId}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<GrantActual> getActualPartMoney( @PathVariable Long partId,HttpServletRequest request){
		ResponseData<GrantActual> responseBody = new ResponseData<GrantActual>();
		try {
			double calculateBelongToActualMoney = grantActualService.calculateBelongToActualMoney(partId);
			GrantPart part = grantPartService.queryById(partId);
			GrantTotal total = grantTotalService.queryById(part.getTotalGrantId());
			Project project = projectService.queryById(total.getProjectId());
			Double sumProjectToActualMoney = grantTotalService.sumProjectToActualMoney(project.getId());
			Map<String,Object> map=new HashMap<String,Object>();
			map.put("moneyAvtual", calculateBelongToActualMoney);
			map.put("moneyAvtualAll", sumProjectToActualMoney);
			responseBody.setUserData(map);
			responseBody.setResult(new Result(Status.OK, ""));
		} catch (DaoException e) {
			// TODO: handle exception
			responseBody.setResult(new Result(Status.ERROR, "系统出现不可预知的错误"));
			_common_logger_.error("获取分拨实际金额出现错误", e);
		}
		return responseBody;
	}
	
	
	/**
	 * 文件下载
	 */
	@RequestMapping("/downActualFile/{id}")
	public void downloadBatchFile(@PathVariable("id") Long id, HttpServletRequest request, HttpServletResponse response)
	{
		
		if(id != null){
			GrantActual grantActual = grantActualService.queryById(id);  //grantActual.getCreatedTime().toString()+
			List<SopDownLoad> sopDownLoadList = grantActualService.queryActualDownFiles(id);
			try {
				sopFileService.downloadBatch(request, response, tempfilePath,"实际注资",sopDownLoadList);
			} catch (Exception e) {
				_common_logger_.error("下载失败.",e);
			}
		}
	}
}
