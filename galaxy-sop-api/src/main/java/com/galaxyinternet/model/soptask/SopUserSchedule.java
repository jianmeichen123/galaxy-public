package com.galaxyinternet.model.soptask;

import java.sql.Timestamp;

import com.galaxyinternet.framework.core.model.BaseEntity;

public class SopUserSchedule extends BaseEntity {

	private static final long serialVersionUID = 1L;

	/**
	 * 用户id
	 */
	private Long userId;

	/**
	 * 事项类型 : 任务 会议 访谈...
	 */
	private int itemType;

	/**
	 * 内容
	 */
	private String content;

	/**
	 * 字典 优先级
	 */
	private String itemOrder;

	/**
	 * 日期
	 */
	private Timestamp itemDate;

   

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public void setItemType(int itemType) {
		this.itemType = itemType;
	}

	public int getItemType() {
		return itemType;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getContent() {
		return content;
	}

	public void setItemOrder(String itemOrder) {
		this.itemOrder = itemOrder;
	}

	public String getItemOrder() {
		return itemOrder;
	}

	public void setItemDate(Timestamp itemDate) {
		this.itemDate = itemDate;
	}

	public Timestamp getItemDate() {
		return itemDate;
	}

}
