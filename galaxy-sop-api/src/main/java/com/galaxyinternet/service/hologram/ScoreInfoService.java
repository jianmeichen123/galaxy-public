package com.galaxyinternet.service.hologram;

import java.math.BigDecimal;
import java.util.Map;

import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.model.hologram.ScoreInfo;
import com.galaxyinternet.model.hologram.ReportParam;

public interface ScoreInfoService extends BaseService<ScoreInfo>
{
	public Map<Long, BigDecimal> calculateSingleReport(ReportParam param);
}
