package com.galaxyinternet.dao.soptask;

import java.util.List;
import java.util.Map;

import com.galaxyinternet.bo.SheduleCommon;
import com.galaxyinternet.bo.SopUserScheduleBo;
import com.galaxyinternet.framework.core.dao.BaseDao;
import com.galaxyinternet.model.soptask.SopUserSchedule;

public interface SopUserScheduleDao extends BaseDao<SopUserSchedule, Long>{

	public List<SopUserSchedule> selectSopUserScheduleByTime(Map<String,Object> map);
	
	public List<SheduleCommon> selectScheduleListByDate(Map<String,Object> map);
	
	public List<SopUserSchedule> selectSopUserScheduleDesc(Map<String,Object> map);
}
