package com.galaxyinternet.bo.project;

import java.util.List;

import com.galaxyinternet.model.project.MeetingRecord;

public class MeetingRecordBo  extends MeetingRecord{
	private static final long serialVersionUID = 1L;

	private String proName; //项目名称 - 会议记录
	private String bucketName;
	private Long fileLength;
	
	private Long uid; //项目创建人
	private String startTime;
	private String endTime;
	private String proNameCode;
	private int inpro; //是否项目内查看 1：是
	private List<Long> proIdList;
	
	private Integer pageNum;// 页码，默认是第一页
	private Integer pageSize;// 每页显示的记录数，默认是10
	
	private String direction;// asc,desc
	private String property;// 排序的字段名称
	
	private Long departId; //部门id
	
	public String getProName() {
		return proName;
	}
	public void setProName(String proName) {
		this.proName = proName;
	}
	public Long getUid() {
		return uid;
	}
	public void setUid(Long uid) {
		this.uid = uid;
	}
	public String getStartTime() {
		if (startTime != null && startTime.length() == 10) {
			startTime = startTime + " 00:00:00";
		}
		return startTime;
	}
	
	public void setStartTime(String startTime) {
		if (startTime != null && startTime.length() == 10) {
			startTime = startTime + " 00:00:00";
		}
		this.startTime = startTime;
	}
	
	public String getEndTime() {
		if (endTime != null && endTime.length() == 10) {
			endTime = endTime + " 23:59:59";
		}
		return endTime;
	}

	public void setEndTime(String endTime) {
		if (endTime != null && endTime.length() == 10) {
			endTime = endTime + " 23:59:59";
		}
		this.endTime = endTime;
	}
	public String getProNameCode() {
		return proNameCode == null ? null : proNameCode.trim();
	}

	public void setProNameCode(String proNameCode) {
		 this.proNameCode = proNameCode == null ? null : proNameCode.trim();
	}
	
	public int getInpro() {
		return inpro;
	}
	public void setInpro(int inpro) {
		this.inpro = inpro;
	}
	public Integer getPageNum() {
		return pageNum;
	}
	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public List<Long> getProIdList() {
		return proIdList;
	}
	public void setProIdList(List<Long> proIdList) {
		this.proIdList = proIdList;
	}
	public String getBucketName() {
		return bucketName;
	}
	public void setBucketName(String bucketName) {
		this.bucketName = bucketName;
	}
	public Long getFileLength() {
		return fileLength;
	}
	public void setFileLength(Long fileLength) {
		this.fileLength = fileLength;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public String getProperty() {
		if(property!=null){
			if(property.equals("meetingDate")){
				property = "meeting_date";
			}else if(property.equals("meetingType")){
				property = "meeting_type";
			}else if(property.equals("meetingResult")){
				property = "meeting_result";
			}
		}
		return property;
	}
	public void setProperty(String property) {
		if(property!=null){
			if(property.equals("meetingDate")){
				property = "meeting_date";
			}else if(property.equals("meetingType")){
				property = "meeting_type";
			}else if(property.equals("meetingResult")){
				property = "meeting_result";
			}
		}
		this.property = property==null?null:property.trim();
	}
	
	public Long getDepartId() {
		return departId;
	}
	public void setDepartId(Long departId) {
		this.departId = departId;
	}
	
	
}