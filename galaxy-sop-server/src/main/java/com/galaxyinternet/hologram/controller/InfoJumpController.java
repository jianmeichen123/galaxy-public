package com.galaxyinternet.hologram.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.framework.core.model.Result;
import com.galaxyinternet.framework.core.model.Result.Status;
import com.galaxyinternet.model.hologram.InformationResult;
import com.galaxyinternet.model.hologram.InformationTitle;
import com.galaxyinternet.service.hologram.InformationResultService;

@Controller
@RequestMapping("/galaxy/infomation")
public class InfoJumpController{
	final Logger logger = LoggerFactory.getLogger(InfoJumpController.class);
	
	@Autowired
	com.galaxyinternet.framework.cache.Cache cache;
	
	
	@Resource(name = "map")
    private Map<String,List<String>> map;
	
	@Autowired
	private InformationResultService informationResultService;
	
	private Set<String> titleids = new HashSet<String>();
	
	/**
	 * 基本信息全息图-tab页跳转
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/tabInfomation", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String platform(HttpServletRequest request) {
		return "hologram/tabInfomation";
	}
     /**
	 *全息图-基本信息模块
	 * @param request
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toBaseInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String message(HttpServletRequest request) {
		return "hologram/baseInfo";
	}
	
	/**
	 * 全息图-项目模块
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toProjectInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String projects(HttpServletRequest request) {
		return "hologram/projectInfo";
	}
	/**
	 * 全息图-团队成员
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toTeamInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String dataBriefing(HttpServletRequest request) {
		return "hologram/teamInfo";
	}
	
	/**
	 * 全息图-运营数据
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toOperateInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String projectAnalysis(HttpServletRequest request) {
		return "hologram/operateInfo";
	}
	
	
	/**
	 * 全息图-竞争
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toSaveCompeteTable", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String toSaveCompeteTable(HttpServletRequest request) {
		return "hologram/gethtml/compete_save";
	}
	/**
	 * 全息图-竞争
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toCompeteInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String pfmAppraisal(HttpServletRequest request) {
		return "hologram/competeInfo";
	}
	
	/**
	 * 全息图-战略以及策略
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toPlanInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String operation(HttpServletRequest request) {
		return "hologram/planInfo";
	}

	/**
	 * 全息图-财务
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toFinanceInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String paprojectlist(HttpServletRequest request) {
		return "hologram/financeInfo";
	}
	
	/**
	 * 全息图-法务
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toJusticeInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String ghlprojectlist(HttpServletRequest request) {
		return "hologram/justiceInfo";
	}
	
	/**
	 * 全息图-融资及估值
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/toValuationInfo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String tjlprojectlist(HttpServletRequest request) {
		return "hologram/valuationInfo";
	}

	/**
	 * 获取必须题目的id
	 * @param projectId
	 * @return
	 */
	public List<String> getMustTitleIds(String projectId) {
	    List<String> ids = new ArrayList<String>();
    	if(!map.isEmpty()){
    		titleids.clear();
             for(Map.Entry<String,List<String>> en : map.entrySet()){
            	 if(!en.getKey().contains("-ref")){
            		 titleids.add(en.getKey());
            	 }
    		}
    	}
    	InformationResult ir = new InformationResult();
    	ir.setProjectId(String.valueOf(projectId));
    	ir.setTitleIds(titleids);
    	List<InformationResult> list = informationResultService.queryList(ir);
    	if(list == null || list.size() == 0){
    		return null;
    	}
    	/*Map<String,String> max = new HashMap<String,String>();*/
		for(InformationResult in : list){
			//所选值id
			String choose = in.getContentChoose();
			//值ids集合
			List<String> type = map.get(in.getTitleId());
			if(choose != null && type.contains(choose)){
				List<String> title = map.get(choose+"-ref");
				if(!ids.containsAll(title)){
					ids.addAll(title);
				}
			}
			/*max.put(in.getTitleId(), choose);*/
		}
		/*if(ids != null && ids.size() > 0){
			if(!max.isEmpty()){
				for(Map.Entry<String, String> m : max.entrySet()){
					//获取项目模式id
					List<String> unnio = map.get(m.getKey()+"-union-ref");
					//如果出现交集
					if(unnio != null && unnio.size() > 0){
						//项目阶段id
						String key = unnio.get(0);
						//项目阶段选择
						String choose = max.get(key);
						if(!map.get(key).contains(choose)){
							List<String> removeids = map.get(m.getKey());
							if(removeids != null && removeids.size() > 0){
								List<String> refRemoves = map.get(removeids.get(0)+"-ref");
								ids.removeAll(refRemoves);
							}
						}
					}
					
				}
			}
		}*/
	    return ids;
	}
	/***
	 * list 转 string
	 * @param stringList
	 * @return
	 */
	 public static String listToString(List<String> stringList){
	        if (stringList==null) {
	            return null;
	        }
	        StringBuilder result=new StringBuilder();
	        boolean flag=false;
	        for (String string : stringList) {
	            if (flag) {
	                result.append(",");
	            }else {
	                flag=true;
	            }
	            result.append(string);
	        }
	        return result.toString();
	    }
	
	/**
	 * 获取必填数据
	 * @param request
	 * @param projectId
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/queryMustInfo/{projectId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseData<InformationTitle> queryTitleInfo(HttpServletRequest request,@PathVariable("projectId") String projectId ) {
		  ResponseData<InformationTitle> responseBody = new ResponseData<InformationTitle>();
		  InformationTitle it = new InformationTitle();
			try{
			   if(StringUtils.isNotEmpty(projectId)){
				   List<String> titleList = getMustTitleIds(String.valueOf(projectId));
				   if(titleList != null && titleList.size() > 0){
					   it.setResultIds(listToString(titleList));
				   }
			   }
			   responseBody.setEntity(it);
			   responseBody.setResult(new Result(Status.OK, ""));
			} catch (Exception e) {
				responseBody.setResult(new Result(Status.ERROR,null, "必填选项获取失败"));
				logger.error("queryMustInfo 必填选项获取失败：",e);
			}
	       return responseBody;
	}
	
}