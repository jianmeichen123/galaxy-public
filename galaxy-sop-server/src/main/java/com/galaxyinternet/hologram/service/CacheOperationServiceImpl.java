package com.galaxyinternet.hologram.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.galaxyinternet.dao.hologram.InformationDictionaryDao;
import com.galaxyinternet.dao.hologram.InformationTitleDao;
import com.galaxyinternet.framework.cache.Cache;
import com.galaxyinternet.model.hologram.InformationDictionary;
import com.galaxyinternet.model.hologram.InformationTitle;
import com.galaxyinternet.service.hologram.CacheOperationService;



@Service("com.galaxyinternet.service.CacheOperationService")
public class CacheOperationServiceImpl implements CacheOperationService,InitializingBean{
	
	public static final String CACHE_KEY_PAGE_AREA_TITLE = "QXT_PAGE_AREA_TITLE_";               //各区域块下的   题：value   ==  InformationTitle
	public static final String CACHE_KEY_PAGE_AREA_TITLE_HASKEY = "QXT_PAGE_AREA_TITLE_KEYLIST"; //各区域块下的   题：code   ==  List<String>
	
	public static final String CACHE_KEY_TITLE_ID_NAME = "QXT_TITLE_ID_NAME"; //各区域块下的   题：value   ==  Map<Long,String>
	
	public static final String CACHE_KEY_VALUE_ID_NAME = "QXT_VALUE_ID_NAME"; //各区域块下的   题：value   ==  Map<Long,String>

	
	@Autowired
	private Cache cache;
	
	
	@Autowired
	private InformationTitleDao informationTitleDao;
	
	@Autowired
	private InformationDictionaryDao informationDictionaryDao;
	
	
	//@Autowired
	//private InformationDictionaryService informationDictionaryService;
	
	
	
	/**
	 * 启动时：
	 * 1、清空缓存
	 * 2、写入缓存
	*/
	//@PostConstruct  
	@Override
	public void afterPropertiesSet() throws Exception {
		initTitleIdName();
		initValueIdName();
		initAreaTitleAndTValue();
	}
	
	
	
	/**
	 * CACHE_KEY_PAGE_AREA_TITLE 中没有的数据 存入缓存中
	 */
	@SuppressWarnings("unchecked")
	@Override
	public synchronized void saveAreaInfoByRedies(String hasKey_toAddkey, InformationTitle area_tinfo){
		
		List<String> cacheKey = new ArrayList<String>();
		Object getK = cache.get(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE_HASKEY);
		if(getK != null){
			cacheKey = (List<String>) getK;
		}
		if(!cacheKey.contains(hasKey_toAddkey)){
			cacheKey.add(hasKey_toAddkey);
			
			cache.set(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE_HASKEY, cacheKey);
			cache.set(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE +hasKey_toAddkey, area_tinfo);
		}
	}
	
	
	/**
	 * CACHE_KEY_PAGE_AREA 中没有的数据 存入缓存中
	 */
	@Override
	public synchronized void refreshCache(){
		initTitleIdName();
		initValueIdName();
		initAreaTitleAndTValue();
	}
	
	
	
	//title 表  id - name
	public void initTitleIdName() {
		Map<Long,String> titleIdName = new HashMap<Long,String>();
		
		//cache.remove(CacheOperationServiceImpl.CACHE_KEY_TITLE_ID_NAME);
		List<InformationTitle> allTitle = informationTitleDao.selectAll();
		for(InformationTitle atitle : allTitle){
			titleIdName.put(atitle.getId(), atitle.getName());
		}
		cache.set(CacheOperationServiceImpl.CACHE_KEY_TITLE_ID_NAME , titleIdName);

	}
	

	//title 表  id - name
	public void initValueIdName() {
		Map<Long,String> valueIdName = new HashMap<Long,String>();
		
		//cache.remove(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME);
		List<InformationDictionary> allValue = informationDictionaryDao.selectAll();
		for(InformationDictionary avalue : allValue){
			valueIdName.put(avalue.getId(), avalue.getName());
		}
		cache.set(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME , valueIdName);

	}
	
	
	@SuppressWarnings("unchecked")
	public void initAreaTitleAndTValue() {
		//Map<String,List<InformationTitle>> pagesAreacode = new HashMap<String,List<InformationTitle>>();
		List<String> cacheAreascode = new ArrayList<String>();
		
		Object getK = cache.get(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE_HASKEY);
		if(getK != null){
			List<String> cacheKey = (List<String>) getK;
			for(String ak : cacheKey){
				cache.remove(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE +ak);
			}
		}
		
		//顶级：基本信息 ……
		List<InformationTitle> title_0_List = selectFirstTitle();
		
		for(InformationTitle title_0 : title_0_List){
			List<InformationTitle> title_List =  selectChildsByPid(title_0.getId()); //第一页下的各区域：基础信息 、事业部……
			for(InformationTitle title_1 : title_List){
				List<InformationTitle> title_title_value = selectTsTvalueInfo(title_1.getId());
				title_1.setChildList(title_title_value);
				//pagesAreacode.put(title_1.getCode(), title_title_value);
				cacheAreascode.add(title_1.getCode());
				cache.set(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE +title_1.getCode(), title_1);
			}
		}
		
		cache.set(CacheOperationServiceImpl.CACHE_KEY_PAGE_AREA_TITLE_HASKEY, cacheAreascode);
	}
	
	
	
	
	
	private List<InformationTitle> selectFirstTitle() {
		List<InformationTitle> ptitleList = informationTitleDao.selectFirstTitle();
		ptitleList = ptitleList == null ? new ArrayList<InformationTitle>() : ptitleList;
		return ptitleList;
	}
	private List<InformationTitle> selectChildsByPid(Long pid) {
		Direction direction = Direction.ASC;
		String property = "index_no";
		
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("parentId",pid);
		params.put("isValid",0);
		params.put("sorting", new Sort(direction, property).toString().replace(":", ""));
		List<InformationTitle> ptitleList = informationTitleDao.selectChildsByPid(params);
		
		ptitleList = ptitleList == null ? new ArrayList<InformationTitle>() : ptitleList;
		
		for(InformationTitle title : ptitleList){
			if(title.getSign() != null && title.getSign().intValue() == 2){
				title.setName(title.getName()+":");
			}
		}
		return ptitleList;
	}
	private List<InformationTitle> selectTsTvalueInfo(Object pinfoKey) {
		List<InformationTitle> ts = selectChildsByPid((long)pinfoKey);
		for(InformationTitle title : ts){
			List<InformationDictionary> valueList = selectValuesByTid(title.getId());
			title.setValueList(valueList);
		}
		return ts;
	}
	private List<InformationDictionary> selectValuesByTid(Long tid) {
		Direction direction = Direction.ASC;
		String property = "sort";
		
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("titleId",tid);
		params.put("isValid",0);
		params.put("sorting", new Sort(direction, property).toString().replace(":", ""));
		List<InformationDictionary> ptitleList = informationDictionaryDao.selectValues(params);
		
		return ptitleList == null ? new ArrayList<InformationDictionary>() : ptitleList;
	}
}
