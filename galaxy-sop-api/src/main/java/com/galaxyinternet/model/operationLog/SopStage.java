package com.galaxyinternet.model.operationLog;

/**
 * 
 * @Description:sop阶段
 * @author keifer
 * @date 2016年3月16日
 */
public enum SopStage {
	//创意
	CY_INFO("创意提出"),
	CY_DY("调研"),
	CY_LXH("创建立项会"),
	CY_PRO("创建项目"),
	CY_DRL("待认领"),
	CY_GZ("搁置"),
	//项目
	TOUCH_INTERVIEW("接触访谈"),
	INNER_REVIEW_SCHEDULE("内部评审"),
	CEO_REVIEW_SCHEDULE("CEO评审"),
	PROJECT_SCHEDULE("立项会"),
	INVESTMENT_INTENT("投资意向书"),
	DUE_DILIGENCE_INVESTIGATION("尽职调查"),
	VOTE_DECISION_MEETING("投决会"),
	INVESTMENT_AGREEMENT("投资协议"),
	EQUITY_DELIVERY_STAGE("股权交割");
	
	private SopStage(String stageName) {
		this.stageName = stageName;
	}

	private String stageName;

	public String getStageName() {
		return stageName;
	}

}
