package com.galaxyinternet.hologram.service;

import com.galaxyinternet.bo.hologram.InformationTitleBo;
import com.galaxyinternet.common.service.BaseInfoCache;
import com.galaxyinternet.dao.hologram.InformationDictionaryDao;
import com.galaxyinternet.dao.hologram.InformationFileDao;
import com.galaxyinternet.dao.hologram.InformationFixedTableDao;
import com.galaxyinternet.dao.hologram.InformationListdataDao;
import com.galaxyinternet.dao.hologram.InformationListdataRemarkDao;
import com.galaxyinternet.dao.hologram.InformationResultDao;
import com.galaxyinternet.dao.hologram.InformationTitleDao;
import com.galaxyinternet.framework.cache.Cache;
import com.galaxyinternet.framework.cache.LocalCache;
import com.galaxyinternet.framework.core.dao.BaseDao;
import com.galaxyinternet.framework.core.exception.BusinessException;
import com.galaxyinternet.framework.core.service.impl.BaseServiceImpl;
import com.galaxyinternet.framework.core.thread.GalaxyThreadPool;
import com.galaxyinternet.framework.core.utils.DateUtil;
import com.galaxyinternet.hologram.util.ListSortUtil;
import com.galaxyinternet.model.hologram.InformationDictionary;
import com.galaxyinternet.model.hologram.InformationFile;
import com.galaxyinternet.model.hologram.InformationFixedTable;
import com.galaxyinternet.model.hologram.InformationListdata;
import com.galaxyinternet.model.hologram.InformationListdataRemark;
import com.galaxyinternet.model.hologram.InformationResult;
import com.galaxyinternet.model.hologram.InformationScore;
import com.galaxyinternet.model.hologram.InformationTitle;
import com.galaxyinternet.model.hologram.ScoreAutoInfo;
import com.galaxyinternet.model.hologram.ScoreInfo;
import com.galaxyinternet.platform.constant.PlatformConst;
import com.galaxyinternet.service.hologram.InformationDictionaryService;
import com.galaxyinternet.service.hologram.InformationTitleService;
import com.galaxyinternet.service.hologram.ScoreInfoService;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;

@Service("com.galaxyinternet.service.hologram.InformationTitleService")
public class InformationTitleServiceImpl extends BaseServiceImpl<InformationTitle> implements InformationTitleService{

	private static final Logger logger = LoggerFactory.getLogger(InformationTitleServiceImpl.class);
	@Autowired
	private Cache cache;
	@Autowired
	private InformationTitleDao informationTitleDao;
	@Autowired
	private InformationDictionaryDao informationDictionaryDao;
	@Autowired
	private InformationResultDao resultDao;
	@Autowired
	private InformationFixedTableDao fixedTableDao;
	@Autowired
	private InformationListdataDao listDataDao;
	@Autowired
	private InformationListdataRemarkDao headerDao;
	
	@Autowired
	private InformationDictionaryService informationDictionaryService;
	@Autowired
	private LocalCache<String,Object> localCache;
	@Autowired
	private ScoreInfoService scoreInfoService;
	@Autowired
	private InformationFileDao infoFileDao;
	@Autowired
	private BaseInfoCache baseInfoCache;
	@Override
	protected BaseDao<InformationTitle, Long> getBaseDao() {
		return this.informationTitleDao;
	}

	
	
	
	// ===  TODO 字典功能
	
	
	/**
	 * 查询 parentid 为空的 题， 即顶级目录
	 */
	@Override
	public List<InformationTitle> selectFirstTitle() {
		List<InformationTitle> ptitleList = informationTitleDao.selectFirstTitle();
		ptitleList = ptitleList == null ? new ArrayList<InformationTitle>() : ptitleList;
		return ptitleList;
	}
	
	
	
	
	/**
	 * 根据 code 或 id 查询 本 title
	 */
	@Override
	public InformationTitle selectTitleByPinfo(String pinfoKey) {
		InformationTitleBo pquery = new InformationTitleBo();
		pquery.setIdcodekey(pinfoKey);
		
		InformationTitle title = informationTitleDao.selectOne(pquery);
		if(title!=null && title.getSign() != null && title.getSign().intValue() == 2){
			title.setName(title.getName()+":");
		}
		return title;
	}
	
	
	
	/**
	 * 根据父id 查询其子集
	 */
	@Override
	public List<InformationTitle> selectChildsByPid(Long pid) {
		Direction direction = Direction.ASC;
		String property = "index_no";
		
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("parentId",pid);
		params.put("isValid",0);
		params.put("isShow",'t');
		params.put("sorting", new Sort(direction, property).toString().replace(":", ""));
		List<InformationTitle> ptitleList = informationTitleDao.selectChildsByPid(params);
		
		ptitleList = ptitleList == null ? new ArrayList<InformationTitle>() : ptitleList;
		
		for(InformationTitle title : ptitleList){
			if(title.getSign() != null && title.getSign().intValue() == 2){
				title.setName(title.getName()+"：");
			}
		}
		
		return ptitleList;
	}
	
	/**
	 * @author jianmeichen
	 * @处理表格新增编辑页面是普通题型
	 * 2017-11-20
	 */
	@Override
	public List<InformationTitle> selectChildsByPidForTable(Long pid, String isShow) {
		Direction direction = Direction.ASC;
		String property = "index_no";
		
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("parentId",pid);
		params.put("isValid",0);
		params.put("isShow",isShow);
		params.put("sorting", new Sort(direction, property).toString().replace(":", ""));
		List<InformationTitle> ptitleList = informationTitleDao.selectChildsByPid(params);
		
		ptitleList = ptitleList == null ? new ArrayList<InformationTitle>() : ptitleList;
		
		for(InformationTitle title : ptitleList){
			if(title.getSign() != null && title.getSign().intValue() == 2){
				title.setName(title.getName()+"：");
			}
		}
		return ptitleList;
	}
	
	
	
	/**
	 * 根据 code 或   id 查询其子集
	 */
	@Override
	public List<InformationTitle> selectChildsByPinfo(String pinfoKey) {
		List<InformationTitle> ptitleList = null;
		InformationTitle ptitle = selectTitleByPinfo(pinfoKey);
		if(ptitle != null){
			ptitleList = selectChildsByPid(ptitle.getId());
		}
		return ptitleList == null ? new ArrayList<InformationTitle>() : ptitleList;
	}
	
	
	/**
	 * 根据 code 或   id ， 查询 该题 及其下一级的 题 信息
	 */
	@Override
	public InformationTitle selectTChildsByPinfo(String pinfoKey) {
		
		InformationTitle ptitle = selectTitleByPinfo(pinfoKey);
		
		List<InformationTitle> ptitleList = null;
		if(ptitle != null){
			ptitleList = selectChildsByPid(ptitle.getId());
			ptitle.setChildList(ptitleList);
		}
		
		return ptitle;
	}
	
	
	
	
	
	/**
	 * 根据 code 、 id 父信息递归查询其下所有子集合
	 */
	@Override
	public InformationTitle selectPchildsByPinfo(String pinfoKey) {
		InformationTitle title = selectTitleByPinfo(pinfoKey);
		if(title != null){
			List<InformationTitle> childList = selectByTlist(selectChildsByPid(title.getId()));
			title.setChildList(childList);
		}
		return title;
	}
	public List<InformationTitle> selectByTlist(List<InformationTitle> tList) {
		for(InformationTitle title : tList){
			List<InformationTitle> ptitleList = selectChildsByPid(title.getId());
			if(ptitleList !=null && !ptitleList.isEmpty()){
				selectByTlist(ptitleList);
				title.setChildList(ptitleList);
			}
		}
		return tList;

	}



	
	
	
	
	// ===  TODO 页面功能
	
	
	/**
	 * 查看题和保存的结果信息
	 * 传入项目 id， 区域  code， 返回 该区域下 题和保存的结果信息
	 * return : 
	 *       title  - title
	 *                  - resultList
	 *              - title  
	 *                  - resultList   
	 */
	@Override
	public InformationTitle selectAreaTitleResutl(String pid, String pinfoKey) {
		List<InformationTitle> tchilds = null;
		List<InformationResult> results = null;
		
		InformationTitle title = selectTChildsByPinfo(pinfoKey); //得到父title
		if(title != null && title.getSign().intValue() == 2){
			List<InformationResult> title_r =  selectResultByPidTids(pid ,null,title.getId());
			title.setResultList(title_r);
		}
		
		if(title != null) tchilds = title.getChildList();  //得到子title
		
		//得到子title 所有  result 集合
		if( tchilds != null && !tchilds.isEmpty()){
			Set<String> tids = new HashSet<String>();
			for(InformationTitle at : tchilds ){
				tids.add(at.getId()+"");
			}
			results = selectResultByPidTids(pid , tids, null);   
		}
		
		//各 title result 对应封装
		titleSwitchByType( pid, tchilds, results);
		/*if(results!=null && !results.isEmpty()){
		}*/
		
		return title;
	}
	
	/**
	 * 根据题的各 type 分类，分别封装 题：结果
	 * 
	 * //1:文本、2:单选、3:复选、4:级联选择、5:单选带备注(textarea)、6:复选带备注(textarea)、
	   //7:附件、8:文本域、9:固定表格、10:动态表格、11:静态数据、12:单选带备注(input)、13:复选带备注(input)  14select 15:2_textarea
	 */
	public void titleSwitchByType(String pid,List<InformationTitle> titles,List<InformationResult> results){
		Set<String> title_tableids = new HashSet<String>();
		for(InformationTitle atitle : titles ){
			if(atitle.getType() != null){
				
				if(results != null && !results.isEmpty()){
					//Type ： 1 2 8 11
					if(atitle.getType().intValue() == 1 ||  atitle.getType().intValue() == 2 || atitle.getType().intValue() == 8  || 
							atitle.getType().intValue() == 11 || atitle.getType().intValue() == 14){
						findResultByArecord(atitle, results);
					}//Type ： 3 4 5 6 12 13
					else if(atitle.getType().intValue() == 3 || atitle.getType().intValue() == 4 || atitle.getType().intValue() == 5 || 
							atitle.getType().intValue() == 6 || atitle.getType().intValue() == 12 || atitle.getType().intValue() == 13 || 
							atitle.getType().intValue() == 15 || atitle.getType().intValue() == 21|| atitle.getType().intValue() == 23 ){
						findResultByNrecord(atitle, results);  //findResultByNcontact
					}
				}
				
				//Type ： 7 
				if(atitle.getType().intValue() == 7){
					
				}//Type ： 9
				else if(atitle.getType().intValue() == 9){
					
				}//Type ： 10
				else if(atitle.getType().intValue() == 10){
					title_tableids.add(atitle.getId()+"");
				}
			}
		}
		
		if(!title_tableids.isEmpty()){
			findResultByTable(titles,title_tableids,pid); 
		}
	}
	
	
	/**
	 * 题的值只能有一条记录的
	 * Type ： 1 2 5 8 11
	 */
	@SuppressWarnings("unchecked")
	public void findResultByArecord(InformationTitle atitle, List<InformationResult> results){
		Map<Long, String> dict = (Map<Long, String>) cache.get(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME);
		List<InformationDictionary> values = atitle.getValueList();
		
		InformationResult isr = null;
		for(InformationResult aresult : results){
			
			if(Long.parseLong(aresult.getTitleId()) == atitle.getId().longValue() ){
				
				isr = new InformationResult();
				
				isr.setId(aresult.getId());
				if(aresult.getContentChoose() != null){
					if(!isNumeric(aresult.getContentChoose())){
						isr.setValueId(null);
						isr.setValueName(aresult.getContentChoose());
					}else{
						isr.setValueId(Long.parseLong(aresult.getContentChoose()));
						isr.setValueName(dict.get(isr.getValueId()));
					}
					
				}
				isr.setContentDescribe1(aresult.getContentDescribe1());
				isr.setContentDescribe2(aresult.getContentDescribe2());
				
				//对应的结果放入 title ResultList 中
				List<InformationResult> isv = atitle.getResultList();
				if(isv == null){
					List<InformationResult> t_resultList = new ArrayList<InformationResult>();
					t_resultList.add(isr);
					atitle.setResultList(t_resultList);
				}else{
					atitle.getResultList().add(isr);
				}
				
				//结果对应 value list 中的数据，设置选中状态
				if(values != null && !values.isEmpty() && isr.getValueId()!=null){
					for(InformationDictionary avalue : values){
						if(avalue.getId().longValue() == isr.getValueId().longValue()){
							avalue.setChecked(true);
							break;
						}
					}
				}
				
				results.remove(aresult);
				break;
			}
		}
	}
	
	/**
	 * 题的值可能有多条记录的
	 * Type ： 3 4 6
	 */
	@SuppressWarnings("unchecked")
	public void findResultByNrecord(InformationTitle atitle, List<InformationResult> results){
		Map<Long, String> dict = (Map<Long, String>) cache.get(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME);
		List<InformationResult> resultList_toremove = new ArrayList<InformationResult>();
		
		List<InformationDictionary> values = atitle.getValueList();
		
		InformationResult isr = null;
		for(InformationResult aresult : results){
			
			if(Long.parseLong(aresult.getTitleId()) == atitle.getId().longValue() ){
				isr = new InformationResult();

				isr.setId(aresult.getId());
				isr.setContentChoose(aresult.getContentChoose());
				isr.setContentDescribe1(aresult.getContentDescribe1());
				isr.setContentDescribe2(aresult.getContentDescribe2());

				if(aresult.getContentChoose() != null){
					if(NumberUtils.isNumber(aresult.getContentChoose())){
						if(("1118").equals(aresult.getTitleId())) //项目承揽人
						{
							isr.setValueId(Long.parseLong(aresult.getContentChoose()));
							isr.setValueName((String)cache.hget(PlatformConst.CACHE_PREFIX_USER+aresult.getContentChoose(), "realName"));
						}else{
							isr.setValueId(Long.parseLong(aresult.getContentChoose()));
							isr.setValueName(dict.get(isr.getValueId()));
						}
					}else{
						//isr.setValueId(aresult.getContentChoose());
						isr.setValueName(aresult.getContentChoose());
					}
				}

				//对应的结果放入 title ResultList 中
				List<InformationResult> isv = atitle.getResultList();
				if(isv == null){
					List<InformationResult> t_resultList = new ArrayList<InformationResult>();
					t_resultList.add(isr);
					atitle.setResultList(t_resultList);
				}else{
					atitle.getResultList().add(isr);
				}
				
				//结果对应 value list 中的数据，设置选中状态
				if(values != null && !values.isEmpty() && isr.getValueId()!=null){
					for(InformationDictionary avalue : values){
						if(avalue.getId().longValue() == isr.getValueId().longValue()){
							avalue.setChecked(true);
							break;
						}
					}
				}
				
				//remove add
				resultList_toremove.add(aresult);
			}
		}
		
		for(InformationResult ar : resultList_toremove){
			results.remove(ar);
		}
		
	}
	
	/**
	 * 拼装 table head body
	 * Type ：10
	 */
	public void findResultByTable(List<InformationTitle> titles, Set<String> title_tableids, String pid ){
		//查询表格头
		InformationListdataRemark headerQuery = new InformationListdataRemark();
		headerQuery.setTitleIds(title_tableids);
		List<InformationListdataRemark> headerList = headerDao.selectList(headerQuery);
		if(headerList != null && headerList.size() > 0){
			for(InformationListdataRemark item : headerList){
				if(item.getSubCode() == null){
					for(InformationTitle at : titles){
						if(at.getId().longValue() == item.getTitleId().longValue()){
							at.setTableHeader(item);
							break;
						}
					}
				}
				
			}
		}
		//查询表格
		InformationListdata listdataQuery = new InformationListdata();
		listdataQuery.setProjectId(Long.valueOf(pid));
		listdataQuery.setTitleIds(title_tableids);
		listdataQuery.setProperty("title_id");
		listdataQuery.setDirection(Direction.ASC.toString());
		List<InformationListdata> listdataList = listDataDao.selectList(listdataQuery);
		if(listdataList != null && listdataList.size() > 0){
			for(InformationListdata item : listdataList){
				for(InformationTitle at : titles){
					if(at.getId().longValue() == item.getTitleId().longValue()){
						if(at.getDataList() == null){
							List<InformationListdata> tempList = new ArrayList<InformationListdata>();
							tempList.add(item);
							at.setDataList(tempList);
						}else{
							at.getDataList().add(item);
						}
						break;
					}
				}
			}
		}
	}
	
	
	
	/**
	 * 编辑区域查看题和保存的结果信息
	 * 传入项目 id， 区域  code， 返回 该区域下 题和保存的结果信息
	 * return : 
	 *       title  - title
	 *                  - valueList
	 *                  - resultList
	 *              - title  
	 *                  - valueList
	 *                  - resultList   
	 */
	@Override
	public InformationTitle editAreaTitleResutl(String pid, String pinfoKey) {
		
		//InformationTitle title = informationDictionaryService.selectTitleAndTsTvaluesByCache(pinfoKey);  //得到 父 title
		InformationTitle title = informationDictionaryService.selectTitlesValuesForAll(pinfoKey,null);

		if(title.getSign().intValue() == 2){
			List<InformationResult> title_r =  selectResultByPidTids(pid ,null,title.getId());
			title.setResultList(title_r);
		}
		
		List<InformationTitle> tchilds = null;
		List<InformationResult> results = null;
		
		if(title != null && title.getChildList() != null && !title.getChildList().isEmpty()){
			tchilds = title.getChildList();    //得到 子 title
			
			//得到 各 title 的 result 结果集
			Set<String> tids = new HashSet<String>();
			for(InformationTitle at : tchilds ){
				tids.add(at.getId()+"");
			}
			results = selectResultByPidTids(pid , tids ,null);  
			
			//各 title result 对应封装，value 选中标记
			titleSwitchByType( pid, tchilds, results);
			/*if(results != null && !results.isEmpty()){
			}*/
		}
		
		return title;

	}
	
	
	
	
	public List<InformationResult> selectResultByPidTids(String pid,Set<String> tids,Long tid){
		InformationResult rq = new InformationResult();
		rq.setProjectId(pid);
		rq.setIsValid(0+"");
		if(tids != null) rq.setTitleIds(tids);
		if(tid != null) rq.setTitleId(tid+"");
		//rq.setProperty("title_id sort");
		rq.setProperty("title_id,id");
		rq.setDirection(Direction.ASC.toString());
		return resultDao.selectList(rq);
	}
	
	
	
	/**
	 * 页面级联功能
	 * 传入项目 id，    title id，    级联 value的 pid，  
	 * 返回 value 的 pid 下的 values
	 */
	@Override
	@Transactional
	public List<InformationDictionary> selectProNvaluesInfo(String pid, String tid, String vpid) {
		
		InformationResult rq = new InformationResult();
		rq.setProjectId(pid);
		rq.setTitleId(tid);
		//rq.setProperty("title_id sort");
		//rq.setProperty("title_id");
		//rq.setDirection(Direction.ASC.toString());
		List<InformationResult> results = resultDao.selectList(rq);
		
		List<String> Vds = new ArrayList<String>();
		if(results != null){
			for(InformationResult ar : results ){
				if( ar.getContentChoose() != null ){
					Vds.add(ar.getContentChoose());
				}
			}
		}
		
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("parentId",vpid);
		params.put("isValid",0);
		
		Direction direction = Direction.ASC;
		String property = "sort";
		params.put("sorting", new Sort(direction, property).toString().replace(":", ""));
		
		List<InformationDictionary> ptitleList = informationDictionaryDao.selectValues(params);
		
		for(InformationDictionary ad : ptitleList){
			if(Vds.contains(ad.getId()+"")){
				ad.setChecked(true);
			}
		}
		
		return ptitleList == null ? new ArrayList<InformationDictionary>() : ptitleList;
	}
	
	
	
	
	// ===  TODO 页面功能
	@SuppressWarnings({ "unchecked" })
	private Map<String,InformationTitle> getChildTitleMap(String parentId)
	{
		Map<String,InformationTitle> titleMap = null;
		String key = "title:map:pid="+parentId;
		if(localCache.containsKey(key))
		{
			titleMap = (Map<String,InformationTitle>)localCache.get(key);
		}
		else
		{
			List<InformationTitle> list = selectByTlist(selectChildsByPid(Long.valueOf(parentId)));
			titleMap = new HashMap<>();
			popTitleMap(list, titleMap);
			localCache.put(key, titleMap);
		}
		Map<String,InformationTitle> map = new ConcurrentHashMap<>(titleMap.size());
		for (Map.Entry<String,InformationTitle> e : titleMap.entrySet())
		{
			map.put(e.getKey(), e.getValue().clone());
		}
		return map;
	}
	

	@SuppressWarnings("unchecked")
	@Override
	public List<InformationTitle> searchWithData(String titleId,String projectId) 
	{
		List<InformationTitle> list = null;
		Map<String,InformationTitle> titleMap = getChildTitleMap(titleId);
		Set<String> titleIds = titleMap.keySet();
		list = new ArrayList<>(titleMap.values());
		//reset info
		if(list != null)
		{
			for(InformationTitle item : list)
			{
				if(item.getChildList() != null)
				{
					item.getChildList().clear();
				}
				if(item.getResultList() != null)
				{
					item.getResultList().clear();
				}
				if(item.getDataList() != null)
				{
					item.getDataList().clear();
				}
				if(item.getFixedTableList() != null)
				{
					item.getFixedTableList().clear();
				}
			}
		}
		//查询result
		InformationResult resultQuery = new InformationResult();
		resultQuery.setProjectId(projectId);
		resultQuery.setTitleIds(titleIds);
		resultQuery.setIsValid("0");
		resultQuery.setProperty("title_id");
		resultQuery.setDirection(Direction.ASC.toString());
		Map<Long, String> dict = (Map<Long, String>) cache.get(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME);
		List<InformationResult> resultList = resultDao.selectList(resultQuery);
		if(resultList != null && resultList.size() > 0)
		{
			InformationTitle title = null;
			List<InformationResult> tempList = null;
			for(InformationResult item : resultList)
			{
				if(item.getContentChoose() != null)
				{
					if(dict != null)
					{
						item.setValueName(dict.get(Long.valueOf(item.getContentChoose())));
					}
				}
				title = titleMap.get(item.getTitleId());
				if(title != null)
				{
					if(title.getResultList() == null)
					{
						tempList = new ArrayList<>();
						title.setResultList(tempList);
					}
					else
					{
						tempList = title.getResultList();
					}
					tempList.add(item);
				}
			}
		}
		//查询FixedTable
		InformationFixedTable fixedTableQuery = new InformationFixedTable();
		fixedTableQuery.setProjectId(projectId);
		fixedTableQuery.setTitleIds(titleIds);
		fixedTableQuery.setProperty("title_id");
		fixedTableQuery.setDirection(Direction.ASC.toString());
		List<InformationFixedTable> fixedTableList = fixedTableDao.selectList(fixedTableQuery);
		if(fixedTableList != null && fixedTableList.size() > 0)
		{
			InformationTitle title = null;
			List<InformationFixedTable> tempList = null;
			for(InformationFixedTable item : fixedTableList)
			{
				if(item.getContent() != null)
				{
					if(dict != null)
					{
						item.setValueName(dict.get(Long.valueOf(item.getContent())));
					}
				}
				title = titleMap.get(item.getTitleId());
				if(title != null)
				{
					if(title.getFixedTableList() == null)
					{
						tempList = new ArrayList<>();
						title.setFixedTableList(tempList);
					}
					else
					{
						tempList = title.getFixedTableList();
					}
					tempList.add(item);
				}
			}
		}
		//查询表格头
		InformationListdataRemark headerQuery = new InformationListdataRemark();
		headerQuery.setTitleIds(titleIds);
		List<InformationListdataRemark> headerList = headerDao.selectList(headerQuery);
		if(headerList != null && headerList.size() > 0)
		{
			InformationTitle title = null;
			for(InformationListdataRemark item : headerList)
			{
				if(item.getSubCode() == null){
					title = titleMap.get(item.getTitleId()+"");
					if(title != null)
					{
						title.setTableHeader(item);
					}
				}
			}
		}
		//查询表格
		InformationListdata listdataQuery = new InformationListdata();
		listdataQuery.setProjectId(Long.valueOf(projectId));
		listdataQuery.setTitleIds(titleIds);
		listdataQuery.setProperty("created_time");
		listdataQuery.setDirection(Direction.ASC.toString());
		List<InformationListdata> listdataList = listDataDao.selectList(listdataQuery);
		if(listdataList != null && listdataList.size() > 0)
		{
			Map<Long,String> userMap = baseInfoCache.getUserFromCache();
			InformationTitle title = null;
			List<InformationListdata> tempList = null;
			for(InformationListdata item : listdataList)
			{
				title = titleMap.get(item.getTitleId()+"");
				if(title != null)
				{
					if(title.getDataList() == null)
					{
						tempList = new ArrayList<>();
						title.setDataList(tempList);
					}
					else
					{
						tempList = title.getDataList();
					}
					if(item.getCreateId() != null)
					{
						String createUserName =userMap.get(item.getCreateId());
						item.setCreateUserName(createUserName);
					}
					if(item.getUpdateId() != null)
					{
						String updateUserName = userMap.get(item.getUpdateId());
						item.setUpdateUserName(updateUserName);
					}
					if(item.getCreatedTime() != null)
					{
						item.setCreateTimeStr(DateUtil.longString(item.getCreatedTime()));
					}
					if(item.getUpdateTime() != null)
					{
						item.setUpdateTimeStr(DateUtil.longToString(item.getUpdateTime()));
					}
					tempList.add(item);
				}
			}
		}
		
		return list;
	}
	private void popTitleMap(List<InformationTitle> list, Map<String,InformationTitle> map)
	{
		if(list != null && list.size() >0)
		{
			for(InformationTitle item : list)
			{
				map.put(item.getId()+"", item);
				if(item.getChildList() != null)
				{
					popTitleMap(item.getChildList(),map);
				}
			}
		}
	}

	@Override
	public List<InformationTitle> searchRelateTitleWithData(final Integer reportType, final Long relateId, final Long projectId)
	{
		final TitleInfoWapper titleInfo = getTitleCache(reportType, relateId);
		if(titleInfo.getRelateIdMap() == null || titleInfo.getRelateIdMap().size() == 0)
		{
			return null;
		}
		List<InformationTitle> list = new ArrayList<>();
		try
		{
			ExecutorService threadPool = GalaxyThreadPool.getExecutorService();
			final CountDownLatch countDownLatch = new CountDownLatch(6);
			threadPool.submit(new Runnable(){
				@Override
				public void run()
				{
					long start = System.currentTimeMillis();
					
					try
					{
						getAndSetFixedTable(projectId, titleInfo);
					} catch (Exception e)
					{
						logger.error("getAndSetFixedTable Error",e);
					}
					finally
					{
						logger.debug("====================================getAndSetFixedTable taken: "+(System.currentTimeMillis()-start));
						countDownLatch.countDown();
					}
					
				}
			});
			
			threadPool.submit(new Runnable(){
				@Override
				public void run()
				{
					long start = System.currentTimeMillis();
					try
					{
						getAndSetTableHeader(titleInfo);
					} catch (Exception e)
					{
						logger.error("getAndSetTableHeader Error",e);
					}
					finally
					{
						logger.debug("====================================getAndSetTableHeader taken: "+(System.currentTimeMillis()-start));
						countDownLatch.countDown();
					}
					
				}
			});
			threadPool.submit(new Runnable(){
				@Override
				public void run()
				{
					long start = System.currentTimeMillis();
					try
					{
						getAndSetTableContent(projectId, titleInfo);
					} catch (Exception e)
					{
						logger.error("getAndSetTableContent Error",e);
					}
					finally
					{
						logger.debug("====================================getAndSetTableContent taken: "+(System.currentTimeMillis()-start));
						countDownLatch.countDown();
					}
				}
			});
			
			threadPool.submit(new Runnable(){
				@Override
				public void run()
				{
					long start = System.currentTimeMillis();
					try
					{
						getAndSetResult(projectId, titleInfo);
					} catch (Exception e)
					{
						logger.error("getAndSetResult Error",e);
					}
					finally
					{
						logger.debug("====================================getAndSetResult taken: "+(System.currentTimeMillis()-start));
						countDownLatch.countDown();
					}
				}
			});
			
			threadPool.submit(new Runnable(){
				@Override
				public void run()
				{
					long start = System.currentTimeMillis();
					try
					{
						getAndSetScore(projectId, titleInfo);
					} catch (Exception e)
					{
						logger.error("getAndSetScore Error",e);
					}
					finally
					{
						logger.debug("====================================getAndSetScore taken: "+(System.currentTimeMillis()-start));
						countDownLatch.countDown();
					}
				}
				
			});
			
			threadPool.submit(new Runnable(){
				@Override
				public void run()
				{
					long start = System.currentTimeMillis();
					try
					{
						getAndSeInfoFiles(projectId, titleInfo);
					} catch (Exception e)
					{
						logger.error("getAndSeInfoFiles Error",e);
					}
					finally
					{
						logger.debug("====================================getAndSeInfoFiles taken: "+(System.currentTimeMillis()-start));
						countDownLatch.countDown();
					}
				}
			});
			countDownLatch.await();
			
			list.addAll(titleInfo.getList());
		} catch (InterruptedException e)
		{
			throw new BusinessException("获取结果错误",e);
		}
		return list;
		
	}
	
	public TitleInfoWapper getTitleCache(Integer reportType,Long relateId)
	{
		TitleInfoWapper result = null;
		String key = "titleRelate:"+reportType+":"+relateId;
		if(localCache.containsKey(key))
		{
			result = (TitleInfoWapper)localCache.get(key);
		}
		else
		{
			List<InformationTitle> titles = new ArrayList<>();
			InformationTitle title = null;
			if(0l == relateId)
			{
				title = new InformationTitle();
				title.setRelateId(relateId);
				title.setReportType(reportType);
				titles.add(title);
			}
			else
			{
				title = getRelateTitleById(Long.valueOf(relateId));
			}
			if(title != null)
			{
				InformationTitle query = new InformationTitle();
				if(0l == relateId)
				{
					query.setReportType(reportType);
				}
				else
				{
					String code = title.getCode();
					query.setCode(code);
				}
				List<InformationTitle> list = informationTitleDao.selectRelateTitle(query);
				titles.addAll(list);
			}
			result = new TitleInfoWapper(titles);
			localCache.put(key,  result);
		}
		return result.clone();
	}
	
	public InformationTitle getRelateTitleById(Long id)
	{
		InformationTitle query = new InformationTitle();
		query.setId(id);
		List<InformationTitle> list = informationTitleDao.selectRelateTitle(query);
		if(list != null && list.size() >0)
		{
			return list.iterator().next();
		}
		return null;
	}
	
	private static final class TitleInfoWapper
	{
		private List<InformationTitle> list;
		private Set<String> ids;
		private Set<Long> relateIds;
		private Map<String,List<InformationTitle>> idMap = new ConcurrentHashMap<>();
		private Map<Long,List<InformationTitle>> relateIdMap = new ConcurrentHashMap<>();
		
		public TitleInfoWapper(List<InformationTitle> list)
		{
			this.list = list;
			if(list != null && list.size()>0)
			{
				for(InformationTitle item : list)
				{
					if(item.getId() != null)
					{
						String id = item.getId()+"";
						List<InformationTitle> titles = idMap.get(id);
						if(titles == null)
						{
							titles = new CopyOnWriteArrayList<>();
							idMap.put(id, titles);
						}
						titles.add(item);
						
					}
					if(item.getRelateId() != null)
					{
						Long relateId = item.getRelateId();
						List<InformationTitle> titles = relateIdMap.get(relateId);
						if(titles == null)
						{
							titles = new CopyOnWriteArrayList<>();
							relateIdMap.put(item.getRelateId(), titles);
						}
						titles.add(item);
					}
				}
				ids = idMap.keySet();
				relateIds = relateIdMap.keySet();
			}
		}

		public Set<String> getIds()
		{
			return ids;
		}

		public Set<Long> getRelateIds()
		{
			return relateIds;
		}

		public Map<String, List<InformationTitle>> getIdMap()
		{
			return idMap;
		}

		public Map<Long, List<InformationTitle>> getRelateIdMap()
		{
			return relateIdMap;
		}
		
		public List<InformationTitle> getList()
		{
			return list;
		}

		@Override
		public TitleInfoWapper clone()
		{
			List<InformationTitle> originalList = getList();
			List<InformationTitle> newList = new ArrayList<>(originalList.size());
			for(InformationTitle original : originalList)
			{
				newList.add(original.clone());
			}
			return new TitleInfoWapper(newList);
		}
	}
	
	
	/**
	 * 固定表格
	 * @param projectId
	 * @param titleInfo
	 */
	@SuppressWarnings("unchecked")
	public void getAndSetFixedTable(Long projectId, TitleInfoWapper titleInfo)
	{
		InformationFixedTable fixedTableQuery = new InformationFixedTable();
		fixedTableQuery.setProjectId(projectId+"");
		fixedTableQuery.setTitleIds(titleInfo.getIds());
		List<InformationFixedTable> fixedTableList = fixedTableDao.selectList(fixedTableQuery);
		if(fixedTableList != null && fixedTableList.size()> 0)
		{
			Map<Long, String> dict = (Map<Long, String>) cache.get(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME);
			Map<String,List<InformationTitle>> idMap = titleInfo.getIdMap();
			for(InformationFixedTable item : fixedTableList)
			{
				String titleId = item.getTitleId();
				if(item.getContent() != null)
				{
					if(dict != null)
					{
						item.setValueName(dict.get(Long.valueOf(item.getContent())));
					}
				}
				if(idMap.containsKey(titleId))
				{
					List<InformationTitle> titles = idMap.get(titleId);
					List<InformationFixedTable> list = null;
					for(InformationTitle title : titles)
					{
						if(title.getFixedTableList() == null)
						{
							list = new ArrayList<>();
							title.setFixedTableList(list);
						}
						title.getFixedTableList().add(item);
					}
				}
			}
		}
	}
	
	/**
	 * 动态表格-表头
	 * @param titleInfo
	 */
	public void getAndSetTableHeader(TitleInfoWapper titleInfo)
	{
		InformationListdataRemark headerQuery = new InformationListdataRemark();
		headerQuery.setTitleIds(titleInfo.getIds());
		List<InformationListdataRemark> headers = headerDao.selectList(headerQuery);
		if(headers != null && headers.size()>0)
		{
			Map<String,List<InformationTitle>> idMap = titleInfo.getIdMap();
			for(InformationListdataRemark item : headers)
			{
				if(item.getSubCode() == null){
					String titleId = item.getTitleId()+"";
					if(idMap.containsKey(titleId))
					{
						List<InformationTitle> titles = idMap.get(titleId);
						for(InformationTitle title : titles)
						{
							title.setTableHeader(item);
						}
					}
				}
				
			
			}
		}
	}
	/**
	 * 表格内容
	 * @param projectId
	 * @param titleInfo
	 */
	public void getAndSetTableContent(Long projectId, TitleInfoWapper titleInfo)
	{
		InformationListdata listdataQuery = new InformationListdata();
		listdataQuery.setProjectId(Long.valueOf(projectId));
		listdataQuery.setTitleIds(titleInfo.getIds());
		listdataQuery.setProperty("project_id,created_time");
		listdataQuery.setDirection(Direction.ASC.toString());
		List<InformationListdata> listdataList = listDataDao.selectList(listdataQuery);
		if(listdataList != null && listdataList.size()>0)
		{
			Map<String,List<InformationTitle>> idMap = titleInfo.getIdMap();
			Map<Long,String> userMap = baseInfoCache.getUserFromCache();
			for(InformationListdata item : listdataList)
			{
				
				String titleId = item.getTitleId()+"";
				if(idMap.containsKey(titleId))
				{
					List<InformationTitle> titles = idMap.get(titleId);
					List<InformationListdata> list = null;
					for(InformationTitle title:titles)
					{
						if(title.getDataList() == null)
						{
							list = new ArrayList<>();
							title.setDataList(list);
						}
						if(item.getCreateId() != null)
						{
							String createUserName = userMap.get(item.getCreateId());
							item.setCreateUserName(createUserName);
						}
						if(item.getUpdateId() != null)
						{
							String updateUserName = userMap.get(item.getUpdateId());
							item.setUpdateUserName(updateUserName);
						}
						if(item.getCreatedTime() != null)
						{
							item.setCreateTimeStr(DateUtil.longString(item.getCreatedTime()));
						}
						if(item.getUpdateTime() != null)
						{
							item.setUpdateTimeStr(DateUtil.longToString(item.getUpdateTime()));
						}
						if(StringUtils.isEmpty(item.getCode())){
							List<InformationListdata> datalist = new ArrayList<InformationListdata>();
							for(InformationListdata data : listdataList)
							{
							  if(data.getParentId() != null && data.getCode() != null && item.getId().intValue() == data.getParentId().intValue()){
								  datalist.add(data);
							  }
							}
							 ListSortUtil<InformationListdata> sortList = new ListSortUtil<InformationListdata>();  
							 sortList.sort(datalist,"field2","asc");
							item.setDataList(datalist);
							title.getDataList().add(item);
						}
						
					}
				}
			}
		}
	}
	/**
	 * 	普通结果
	 * @param projectId
	 * @param titleInfo
	 */
	@SuppressWarnings("unchecked")
	public void getAndSetResult(Long projectId, TitleInfoWapper titleInfo)
	{
		InformationResult resultQuery = new InformationResult();
		resultQuery.setTitleIds(titleInfo.getIds());
		resultQuery.setProjectId(projectId+"");
		resultQuery.setIsValid("0");
		List<InformationResult> resultList = resultDao.selectList(resultQuery);
		Map<Long,InformationListdata> listData = getListMap(projectId);
		
		if(resultList != null && resultList.size()>0)
		{
			Map<Long, String> dict = (Map<Long, String>) cache.get(CacheOperationServiceImpl.CACHE_KEY_VALUE_ID_NAME);
			Map<String,List<InformationTitle>> idMap = titleInfo.getIdMap();
			//type = 22的题
			List<InformationTitle> titleList = new ArrayList<>();
			for(InformationResult item : resultList)
			{
				String val = item.getContentChoose();
				//type is 22, 从listdata表取值
				if( NumberUtils.isNumber(val)&& listData.containsKey(Long.parseLong(val)))
				{
					item.setValueName(listData.get(Long.parseLong(val)).getField1());
				}
				else if(item.getContentChoose() != null )
				{
					if(dict != null )
					{
						if(NumberUtils.isNumber(item.getContentChoose())){
							if(("1118").equals(item.getTitleId())) //项目承揽人
							{
								item.setValueId(Long.parseLong(item.getContentChoose()));
								item.setValueName((String)cache.hget(PlatformConst.CACHE_PREFIX_USER+item.getContentChoose(), "realName"));
							}else{
								item.setValueId(Long.parseLong(item.getContentChoose()));
								item.setValueName(dict.get(item.getValueId()));
							}
						}else{
							//isr.setValueId(aresult.getContentChoose());
							item.setValueName(item.getContentChoose());
						}
					}
				}
				String titleId = item.getTitleId()+"";
				if(idMap.containsKey(titleId))
				{
					List<InformationTitle> titles = idMap.get(titleId);
					List<InformationResult> list = null;
					for(InformationTitle title : titles)
					{
						if(title.getType() != null && title.getType().intValue() == 22)
						{
							titleList.add(title);
						}
						if(title.getResultList() == null)
						{
							list = new ArrayList<>();
							title.setResultList(list);
						}
						title.getResultList().add(item);
					}
				}
			}
			//type = 22,设置分数/权重
			if(titleList.size() >0)
			{
				for(InformationTitle title : titleList)
				{
					Long relateId = title.getRelateId();
					List<InformationResult> rtList = title.getResultList();
					if(rtList == null || rtList.size() == 0)
					{
						continue;
					}
					InformationScore query = new InformationScore();
					query.setProjectId(projectId);
					query.setRelateId(relateId);
					List<InformationScore> scoreList = scoreInfoService.selectScore(query);
					if(scoreList == null || scoreList.size() == 0)
					{
						continue;
					}
					for(InformationResult rt : rtList)
					{
						for(InformationScore score : scoreList)
						{
							if(rt.getId() != null 
									&& score.getResultId() != null 
									&& rt.getId().intValue() == score.getResultId().intValue())
							{
								rt.setScore(score.getScore1());
								rt.setWeight(score.getWeight());
							}
						}
					}
				}
			}
		}
	}
	/**
	 * 分数权重
	 * @param projectId
	 * @param titleInfo
	 */
	public void getAndSetScore(Long projectId, TitleInfoWapper titleInfo)
	{
		ScoreInfo scoreQuery = new ScoreInfo();
		scoreQuery.setIds(titleInfo.getRelateIds());
		List<ScoreInfo> scoreList= scoreInfoService.queryList(scoreQuery);
		if(scoreList != null && scoreList.size()>0)
		{
			Map<Long,List<InformationTitle>> relateIdMap = titleInfo.getRelateIdMap();
			for(ScoreInfo score : scoreList)
			{
				Long rId = score.getRelateId();
				if(relateIdMap.containsKey(rId))
				{
					List<InformationTitle> titles = relateIdMap.get(rId);
					if(titles == null || titles.size() ==0)
					{
						continue;
					}
					for(InformationTitle title : titles)
					{
						//权重
						if(score != null && score.getProcessMode() != null && 1 == score.getProcessMode().intValue())
						{
							BigDecimal weight = scoreInfoService.getWeight(score.getRelateId(), Long.valueOf(projectId));
							if(weight != null)
							{
								title.setWeight(weight);
							}
						}
						//分数选项
						List<ScoreAutoInfo> autoList = score.getAutoList();
						if(autoList!=null && autoList.size()>0)
						{
							Integer scoreType = score.getScoreType();
							if( scoreType!=null && (scoreType.intValue() == 1||scoreType.intValue() == 5))
							{
								title.setAutoList(autoList);
							}
						}
					}
				}
			}
		}
	}
	public void getAndSeInfoFiles(Long projectId, TitleInfoWapper titleInfo)
	{
		try
		{
			InformationFile query = new InformationFile();
			query.setProjectId(projectId);
			query.setTitleIds(titleInfo.getIds());
			List<InformationFile> files = infoFileDao.selectList(query);
			if(files != null && files.size() >0)
			{
				Map<String,List<InformationTitle>> idMap = titleInfo.getIdMap();
				for(InformationFile item : files)
				{
					String titleId = item.getTitleId()+"";
					if(idMap.containsKey(titleId))
					{
						List<InformationTitle> titles = idMap.get(titleId);
						List<InformationFile> list = null;
						for(InformationTitle title : titles)
						{
							if(title.getFileList() == null)
							{
								list = new ArrayList<>();
								title.setFileList(list);
							}
							title.getFileList().add(item);
						}
					}
				}
			}
		} catch (Exception e)
		{
			logger.error("Error:",e);
		}
	}
	public static boolean isNumeric(String str){
		 for (int i = str.length();--i>=0;){  
		  if (!Character.isDigit(str.charAt(i))){
		  return false;
		  }
		 }
		 return true;
		}
	
	/**
	 * type = 22,标题和对应选项（list_data）映射
	 */
	public static Map<Long,Long> RESULT_LIST_MAP = new ConcurrentHashMap<>();
	static
	{
		//主要的竞争对手
		RESULT_LIST_MAP.put(1584L, 1582L);
		//主要的潜在竞争对手
		RESULT_LIST_MAP.put(1585L, 1583L);
	}
	/**
	 * type=22时，获取项目对应列表
	 * @param projectId
	 * @return
	 */
	public Map<Long,InformationListdata> getListMap(Long projectId)
	{
		Map<Long,InformationListdata> map = new HashMap<>();
		Collection<Long> titleIds = RESULT_LIST_MAP.values();
		Set<String> titleStrIds = new HashSet<>(titleIds.size());
		for(Long titleId : titleIds)
		{
			titleStrIds.add(titleId+"");
		}
		InformationListdata query = new InformationListdata();
		query.setTitleIds(titleStrIds);
		query.setProjectId(projectId);
		List<InformationListdata> list = listDataDao.selectList(query);
		if(list != null && list.size()>0)
		{
			for(InformationListdata item : list)
			{
				map.put(item.getId(), item);
			}
		}
		return map;
	}
	/**
	 * type = 22时获取选项
	 * @param projectId
	 * @param titleId
	 * @return
	 */
	public List<InformationDictionary> getList4Title(Long projectId, Long titleId)
	{
		if(!RESULT_LIST_MAP.containsKey(titleId))
		{
			return null;
		}
		Long listTitleId = RESULT_LIST_MAP.get(titleId);
		InformationListdata query = new InformationListdata();
		query.setTitleId(listTitleId);
		query.setProjectId(projectId);
		List<InformationListdata> list = listDataDao.selectList(query);
		if(list != null && list.size()>0)
		{
			List<InformationDictionary> dataList = new ArrayList<>(list.size());
			InformationDictionary dict = null;
			for(InformationListdata item : list)
			{
				if(StringUtils.isBlank(item.getField1()))
				{
					continue;
				}
				dict = new InformationDictionary();
				dict.setName(item.getField1());
				dict.setValue(item.getId()+"");
				dataList.add(dict);
			}
			return dataList;
		}
		return null;
	}
}
