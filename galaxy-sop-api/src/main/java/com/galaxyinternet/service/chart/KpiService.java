package com.galaxyinternet.service.chart;

import java.util.List;
import java.util.Map;

import com.galaxyinternet.bo.chart.ChartDataBo;
import com.galaxyinternet.common.query.ChartKpiQuery;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.service.BaseService;
import com.galaxyinternet.model.chart.Chart;
import com.galaxyinternet.model.project.Project;


public interface KpiService extends BaseService<Chart> {

	Page<ChartDataBo> userKpi(ChartKpiQuery query);

	Page<ChartDataBo> deptkpi(ChartKpiQuery query);

	Page<ChartDataBo> ggLineChart(ChartKpiQuery query);

	Page<ChartDataBo> hhrLineChart(ChartKpiQuery query);

	Page<ChartDataBo> deptMeetPassRate(ChartKpiQuery query) throws Exception;

	Page<ChartDataBo> tzjlMeetPassRate(ChartKpiQuery query) throws Exception;

	Page<ChartDataBo> deptProTarget(ChartKpiQuery query);

	Page<ChartDataBo> tzjlProTarget(ChartKpiQuery query);
	
	
	
	
}

