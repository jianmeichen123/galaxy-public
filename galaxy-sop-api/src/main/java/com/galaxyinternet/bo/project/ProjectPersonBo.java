package com.galaxyinternet.bo.project;

import com.galaxyinternet.model.project.ProjectPerson;

public class ProjectPersonBo extends ProjectPerson {
	private static final long serialVersionUID = 1L;

	private String extendFiled;// 业务对象中扩展的字段

	public String getExtendFiled() {
		return extendFiled;
	}

	public void setExtendFiled(String extendFiled) {
		this.extendFiled = extendFiled;
	}
}