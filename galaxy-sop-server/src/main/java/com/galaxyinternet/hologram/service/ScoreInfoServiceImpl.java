package com.galaxyinternet.hologram.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.atomic.AtomicReference;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxyinternet.dao.hologram.InformationResultDao;
import com.galaxyinternet.dao.hologram.InformationTitleRelateDao;
import com.galaxyinternet.dao.hologram.ScoreInfoDao;
import com.galaxyinternet.framework.core.dao.BaseDao;
import com.galaxyinternet.framework.core.service.impl.BaseServiceImpl;
import com.galaxyinternet.framework.core.thread.GalaxyThreadPool;
import com.galaxyinternet.hologram.model.ReportScoreCalculator;
import com.galaxyinternet.model.hologram.InformationResult;
import com.galaxyinternet.model.hologram.InformationScore;
import com.galaxyinternet.model.hologram.InformationTitle;
import com.galaxyinternet.model.hologram.ItemParam;
import com.galaxyinternet.model.hologram.ReportParam;
import com.galaxyinternet.model.hologram.ResultParam;
import com.galaxyinternet.model.hologram.ScoreAutoInfo;
import com.galaxyinternet.model.hologram.ScoreInfo;
import com.galaxyinternet.model.hologram.ScoreValue;
import com.galaxyinternet.service.hologram.ScoreInfoService;

@Service
public class ScoreInfoServiceImpl extends BaseServiceImpl<ScoreInfo> implements ScoreInfoService
{
	private static final Logger logger = LoggerFactory.getLogger(ScoreInfoServiceImpl.class);
	@Autowired
	private ScoreInfoDao scoreInfoDao;
	@Autowired
	private InformationResultDao resultDao;
	@Autowired
	private InformationTitleRelateDao informationTitleRelateDao;
	/**
	 * 计算题目分数
	 * @param param
	 * @return
	 */
	public Map<String,BigDecimal> calculateSingleReport(ReportParam param)
	{
		try
		{
			Long relateId = param.getRelateId();
			List<ItemParam> items = param.getItems();
			Map<String,ItemParam> map = new ConcurrentHashMap<>();
			for(ItemParam item : items)
			{
				map.put(item.getKey(), item);
			}
			ForkJoinPool pool = GalaxyThreadPool.getForkJoinPool();
			ScoreInfo scoreInfo = getByRelateId(relateId);
			ReportScoreCalculator task = new ReportScoreCalculator(scoreInfo,param.getProjectId(),map);
			ForkJoinTask<BigDecimal> result = pool.submit(task);
			BigDecimal score = result.get();
			Collection<ItemParam> values = map.values();
			Map<String,BigDecimal> scores = new HashMap<>();
			scores.put("0", score);
			for(ItemParam value : values)
			{
				scores.put(value.getKey(), value.getScore());
			}
			return scores;
			
		} catch (Exception e)
		{
			logger.error(String.format("计算报表分数失败, Param = %s", param.toString()),e);
		}
		
		return null;
	}
	/**
	 * 计算题目分数
	 * @param relateIds
	 * @param projectId
	 * @return
	 * @throws Exception 
	 */
	public Map<String,BigDecimal> calculateMutipleReport(List<Long> relateIds, final Long projectId) throws Exception
	{
		final Map<String,BigDecimal> scores = new ConcurrentHashMap<>();
		final CountDownLatch countDownLatch = new CountDownLatch(relateIds.size());
		ExecutorService executorService = GalaxyThreadPool.getExecutorService();
		final AtomicReference<BigDecimal> ref = new AtomicReference<BigDecimal>();
		ref.set(BigDecimal.ZERO);
		for(Long item : relateIds)
		{
			final Long relateId = item;
			executorService.submit(new Runnable(){
				@Override
				public void run()
				{
					try
					{
						ScoreInfo scoreInfo = scoreInfoDao.selectById(relateId);
						ScoreInfo query = new ScoreInfo();
						query.setProjectId(projectId);
						query.setCode(scoreInfo.getCode());
						List<ScoreInfo> vallueList = scoreInfoDao.selectList(query);
						
						ReportParam param = new ReportParam();
						param.setRelateId(relateId);
						param.setProjectId(projectId);
						param.setReportType(scoreInfo.getProcessMode());
						param.setItems(convert(vallueList));
						Map<String,BigDecimal> results = calculateSingleReport(param);
						if(results != null && results.size()>0)
						{
							for(Entry<String,BigDecimal> entry : results.entrySet())
							{
								if(entry.getKey() != null && entry.getValue() != null)
								{
									//计算总分
									if(entry.getKey().equals("0"))
									{
										while(true)
										{
											BigDecimal expect = ref.get();
											BigDecimal update = expect.add(entry.getValue());
											if(ref.compareAndSet(expect, update))
											{
												break;
											}
										}
									}
									else
									{
										scores.put(entry.getKey(), entry.getValue());
									}
								}
							}
						}
					} catch (Exception e)
					{
						logger.error("Calc Error, relateId="+relateId,e);
					}
					finally
					{
						countDownLatch.countDown();
					}
				}
			});
		}
		countDownLatch.await();
		scores.put("0", ref.get());
		return scores;
	}
	private List<ItemParam> convert(List<ScoreInfo> list)
	{
		List<ItemParam> items = new ArrayList<>();
		for(ScoreInfo info : list)
		{
			
			ItemParam param = new ItemParam();
			param.setRelateId(info.getRelateId());
			param.setSubId(info.getSubId());
			param.setScore(info.getScore());
			List<ScoreValue> valueList = info.getValueList();
			if(valueList != null && valueList.size()>0)
			{
				List<ResultParam> results = new ArrayList<>();
				List<String> values = new ArrayList<>();
				for(ScoreValue value : valueList)
				{
					ResultParam result = new ResultParam();
					result.setScore(value.getResultScore());
					result.setWeight(value.getWeight());
					results.add(result);
					if(value != null && value.getValue() != null)
					{
						values.add(value.getValue());
					}
				}
				param.setResults(results);
				param.setValues(values.toArray(new String[values.size()]));
			}
			items.add(param);
		}
		
		return items;
	}
	@Override
	protected BaseDao<ScoreInfo, Long> getBaseDao()
	{
		return scoreInfoDao;
	}
	
	public BigDecimal getWeight(Long relateId, Long projectId)
	{
		ScoreInfo scoreInfo = scoreInfoDao.selectById(relateId);
		if(scoreInfo == null || scoreInfo.getProcessMode() == null || 1 != scoreInfo.getProcessMode().intValue())
		{
			return null;
		}
		List<ScoreAutoInfo> autoList = scoreInfo.getAutoList();
		if(autoList == null || autoList.size() == 0)
		{
			return null;
		}
		String code = scoreInfo.getCode();
		//项目轮次不同，六大评测的权重比不同
		if(code != null 
				&& (code.equals("ENO1") ||
					code.equals("ENO2") ||
					code.equals("ENO3") ||
					code.equals("ENO4") ||
					code.equals("ENO5") ||
					code.equals("ENO6") ||
					code.equals("CNO1") ||
					code.equals("CNO2") ||
					code.equals("CNO3") ||
					code.equals("CNO4") ||
					code.equals("CNO5") ||
					code.equals("CNO6")
					)
			)
		{
			InformationResult query = new InformationResult();
			query.setProjectId(projectId+"");
			query.setTitleId("1108");
			InformationResult result = resultDao.selectOne(query);
			if(result != null)
			{
				String value = result.getContentChoose();
				if(value != null && autoList != null)
				{
					for(ScoreAutoInfo item : autoList)
					{
						if(value.equals(item.getDictId()+""))
						{
							return item.getGrade();
						}
					}
				}
			}
			return BigDecimal.ZERO;
		}
		else if(autoList.get(0) != null)
		{
			ScoreAutoInfo auto = autoList.get(0);
			return auto.getGrade();
		}
		
		return null;
	}
	/**
	 * 查询各tab项的比重
	 * @param preCode EN CN
	 * @return W1001项目、W1002团队、运营、、的比重
	 */
	public Map<String,String> getTabWeight(String preCode, Long projectId){
		Map<String, String> result = new HashMap<>();

		Map<String, Object> params = new HashMap<String,Object>();
		params.put("codeLike", StringUtils.isBlank(preCode)?"EN":preCode);
		params.put("isValid",0);
		params.put("parentId",0);
		List<InformationTitle> titles = informationTitleRelateDao.selectTitleByRelate(params);

		//for(int i = 0 ; i < titles.size(); i++)
		for(InformationTitle temp : titles)
		{
			BigDecimal weight =  getWeight(temp.getId(), projectId);
			if(weight!=null){
				result.put("W" + temp.getId(), weight.toString());
			}
		}

		return result;
	}

	
	public ScoreInfo getByRelateId(Long relateId)
	{
		ScoreInfo query = new ScoreInfo();
		query.setRelateId(relateId);
		List<ScoreInfo> list = queryList(query);
		if(list != null && list.size() > 0)
		{
			return list.iterator().next();
		}
		return null;
	}
	@Override
	public List<InformationScore> selectScore(InformationScore query)
	{
		return scoreInfoDao.selectScore(query);
	}
	
	
}
