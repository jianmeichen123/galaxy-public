package com.galaxyinternet.project_process.event.handlers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.galaxyinternet.bo.project.MeetingRecordBo;
import com.galaxyinternet.common.constants.SopConstant;
import com.galaxyinternet.common.dictEnum.DictEnum.SWTPResult;
import com.galaxyinternet.common.dictEnum.DictEnum.meetingType;
import com.galaxyinternet.common.dictEnum.DictEnum.projectProgress;
import com.galaxyinternet.common.enums.DictEnum;
import com.galaxyinternet.common.utils.ControllerUtils;
import com.galaxyinternet.common.utils.WebUtils;
import com.galaxyinternet.framework.core.exception.BusinessException;
import com.galaxyinternet.model.operationLog.UrlNumber;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.soptask.SopTask;
import com.galaxyinternet.project_process.event.ProgressChangeEvent;
import com.galaxyinternet.service.MeetingRecordService;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.SopTaskService;
/**
 * 投资意向书（投资）：前置条件判定，必须一条“投资”结果的会议记录。然后进入“投资意向书”阶段
 * @author wangsong
 *
 */
@Component
public class TZHandler implements ProgressChangeHandler
{
	@Autowired
	private MeetingRecordService meetingService;
	@Autowired
	private ProjectService projectService;
	@Autowired
	private SopTaskService taskService;
	@Override
	public boolean support(ProgressChangeEvent event)
	{
		return projectProgress.会后商务谈判.getCode().equals(event.getProject().getProjectProgress())
				&& projectProgress.投资意向书.equals(event.getNext());
	}
	@Override
	public void handler(ProgressChangeEvent event)
	{
		Project project = event.getProject();
		MeetingRecordBo query = new MeetingRecordBo();
		query.setProjectId(project.getId());
		query.setMeetingType(meetingType.会后商务谈判.getCode());
		query.setMeetingResult(SWTPResult.TZ.getCode());
		
		Long count = meetingService.queryCount(query);
		if(count.intValue()==0)
		{
			throw new BusinessException("没有投资的会议记录");
		}
		
		Project po = new Project();
		po.setId(project.getId());
		po.setProjectProgress(projectProgress.投资意向书.getCode());
		po.setBusinessTypeCode(SopConstant.BUSINESS_TYPE_TZ);
		po.setProgressHistory(project.getProgressHistory()+","+po.getProjectProgress());
		projectService.updateById(po);
		HttpServletRequest request = WebUtils.getRequest();
		ControllerUtils.setRequestParamsForMessageTip(request, project.getProjectName(), project.getId(), UrlNumber.five);
	}

}
