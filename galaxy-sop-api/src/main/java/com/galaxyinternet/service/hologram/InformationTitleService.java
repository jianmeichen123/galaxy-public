package com.galaxyinternet.service.hologram;

import java.util.List;

import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.model.hologram.InformationDictionary;
import com.galaxyinternet.model.hologram.InformationTitle;

public interface InformationTitleService extends BaseService<InformationTitle>{

	/**
	 * 查询 parentid 为空的 题， 即顶级目录
	 */
	List<InformationTitle> selectFirstTitle();
	
	
	/**
	 * 根据 code 或 id 查询 本 title
	 */
	InformationTitle selectTitleByPinfo(String pinfoKey);
	
	/**
	 * 根据父id 查询其子集
	 */
	List<InformationTitle> selectChildsByPid(Long pid);
	
	/**
	 * 根据 code 或   id ， 查询 该题 及其下一级的 题 信息
	 */
	InformationTitle selectTChildsByPinfo(String pinfoKey);
	
	
	/**
	 * 根据 code 或   id 查询其子集
	 */
	List<InformationTitle> selectChildsByPinfo(String pinfo);

	
	/**
	 * 根据 code 、 id 父信息递归查询其下所有子集合
	 */
	InformationTitle selectPchildsByPinfo(String pinfoKey);
	//List<InformationTitle> selectByTlist(List<InformationTitle> tList);


	
	/**
	 * 页面查看功能
	 * 查看题和保存的结果信息
	 * 传入项目 id， 区域  code， 返回 该区域下 题和保存的结果信息
	 */
	InformationTitle selectAreaTitleResutl(String pid, String pinfoKey);
	
	
	/**
	 * 页面编辑功能
	 * 查看题和values 及 保存的结果信息
	 * 传入项目 id， 区域  code， 返回 该区域下 题和values 及 保存的结果信息
	 */
	InformationTitle editAreaTitleResutl(String pid, String tcode);
	
	
	/**
	 * @param titleId 标题ID
	 * @return 返回子标题及标题的结果值
	 */
	List<InformationTitle> searchWithData(String titleId, String projectId);


	
	/**
	 * 页面级联功能
	 * 传入项目 id，    title id，    级联 value的 pid，  
	 * 返回 value 的 pid 下的 values
	 */
	List<InformationDictionary> selectProNvaluesInfo(String pid, String tid, String vpid);





	

	



}
