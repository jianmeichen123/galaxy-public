package com.galaxyinternet.model.project;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;

import com.galaxyinternet.framework.core.utils.DateUtil;
import com.galaxyinternet.model.common.PagableRecordEntity;
import com.galaxyinternet.model.sopfile.SopFile;


public class MeetingRecord  extends PagableRecordEntity{
	private static final long serialVersionUID = 1L;
	
	private Long projectId;

    private Long fileId;
	private String fkey;
	
    private Date meetingDate;
    @NotEmpty(message="会议日期不能为空")
    private String meetingDateStr;

    @NotEmpty(message="会议类型不能为空")
    private String meetingType;
    private String meetingTypeStr;

    private String meetingResult;
    private String meetingResultStr;

    private String meetingNotes;
    
    private String meetingNotesText;

    private String fname;
    
    private String participant;
    
    private Long meetingName;
    
    private Long createUid;
    
    private byte meetValid; //0表示有效，1表示无效
    
    private String fileReidsKey;
    
    private Byte fileNum;
    
    private List<SopFile> files;
    
    private List<Long> fileIds;
    
    
    
    
    
    
    
    
    /**
     * 非映射字段
     */
    private String hasFile;
    
    
    
    /**
     * 非数据库映射字段
     */
    private String createUName;
    
    
    public String getParticipant() {
		return participant;
	}

	public void setParticipant(String participant) {
		this.participant = participant;
	}

	public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Long getFileId() {
		return fileId;
	}

	public void setFileId(Long fileId) {
		this.fileId = fileId;
	}

	public Date getMeetingDate() { //2016-05-27 16:00:00   19
		if(meetingDate==null && meetingDateStr!=null){
			meetingDateStr = dateStrformat(meetingDateStr);
			try {
	    		meetingDate = DateUtil.convertStringtoD(meetingDateStr);
			} catch (ParseException e) {
				meetingDate = null;
			}
		}else{
			if(meetingDateStr==null && meetingDate!=null){
				meetingDateStr = DateUtil.convertDateToStringForChina(meetingDate);
			}
		}
        return meetingDate;
    }
	
    public void setMeetingDate(Date meetingDate) {
    	if(meetingDate==null && meetingDateStr!=null){
    		meetingDateStr = dateStrformat(meetingDateStr);
			try {
	    		meetingDate = DateUtil.convertStringtoD(this.meetingDateStr);
			} catch (ParseException e) {
				meetingDate = null;
			}
		}else{
			if(meetingDateStr==null && meetingDate!=null){
				meetingDateStr = DateUtil.convertDateToStringForChina(meetingDate);
			}
		}
        this.meetingDate = meetingDate;
    }

    public String getMeetingType() {
        return meetingType;
    }

    public void setMeetingType(String meetingType) {
    	if(meetingType!=null){
			if(meetingType.equals("meetingType:1")){
				meetingTypeStr = "内评会";
			}else if(meetingType.equals("meetingType:2")){
				meetingTypeStr = "CEO评审";
			}else if(meetingType.equals("meetingType:3")){
				this.meetingTypeStr = "立项会";
			}else if(meetingType.equals("meetingType:4")){
				meetingTypeStr = "投决会";
			}else if(meetingType.equals("postMeetingType:1")){
				meetingTypeStr = "周会议";
			}else if(meetingType.equals("postMeetingType:2")){
				meetingTypeStr = "月会议";
			}else if(meetingType.equals("postMeetingType:3")){
				meetingTypeStr = "季度会议";
			}
		}
        this.meetingType = meetingType == null ? null : meetingType.trim();
    }

    
    public String getMeetingResult() {
		return meetingResult;
	}

	public void setMeetingResult(String meetingResult) {
		if(meetingResult!=null&&meetingResultStr==null){
			if(meetingResult.equals("meetingResult:1")){
				meetingResultStr = "通过";
			}else if(meetingResult.equals("meetingResult:2")){
				meetingResultStr = "待定";
			}else if(meetingResult.equals("meetingResult:3")){
				meetingResultStr = "否决";
			}
		}
		this.meetingResult = meetingResult == null ? null : meetingResult.trim();
	}

	public String getMeetingNotes() {
        return meetingNotes;
    }

    public void setMeetingNotes(String meetingNotes) {
        this.meetingNotes = meetingNotes == null ? null : meetingNotes.trim();
    }

    
	public String getMeetingDateStr() {
		if(meetingDateStr==null && meetingDate!=null){
			meetingDateStr = DateUtil.convertDateToStringForChina(meetingDate);
		}
		return meetingDateStr;
	}

	
	
	public void setMeetingDateStr(String meetingDateStr) { ////2016-05-27 16:00:00   19
		if(meetingDate==null && meetingDateStr!=null ){
			meetingDateStr = dateStrformat(meetingDateStr.trim());
			try {
	    		meetingDate = DateUtil.convertStringtoD(meetingDateStr);
			} catch (ParseException e) {
				meetingDate = null;
			}
		}else{
			if(meetingDateStr==null && meetingDate!=null){
				meetingDateStr = DateUtil.convertDateToStringForChina(meetingDate);
			}
		}
		this.meetingDateStr = meetingDateStr;
	}
	
	public String getMeetingTypeStr() {
		if(meetingType!=null&&meetingTypeStr==null){
			if(meetingType.equals("meetingType:1")){
				meetingTypeStr = "内评会";
			}else if(meetingType.equals("meetingType:2")){
				meetingTypeStr = "CEO评审";
			}else if(meetingType.equals("meetingType:3")){
				meetingTypeStr = "立项会";
			}else if(meetingType.equals("meetingType:4")){
				meetingTypeStr = "投决会";
			}else if(meetingType.equals("postMeetingType:1")){
				meetingTypeStr = "周会议";
			}else if(meetingType.equals("postMeetingType:2")){
				meetingTypeStr = "月会议";
			}else if(meetingType.equals("postMeetingType:3")){
				meetingTypeStr = "季度会议";
			}
		}
		return meetingTypeStr;
	}

	public void setMeetingTypeStr(String meetingTypeStr) {
		this.meetingTypeStr = meetingTypeStr;
	}
		
	public String getMeetingResultStr() {
		if(meetingResult!=null&&meetingResultStr==null){
			if(meetingResult.equals("meetingResult:1")){
				meetingResultStr = "通过";
			}else if(meetingResult.equals("meetingResult:2")){
				meetingResultStr = "待定";
			}else if(meetingResult.equals("meetingResult:3")){
				meetingResultStr = "否决";
			}
		}
		return meetingResultStr;
	}

	public void setMeetingResultStr(String meetingResultStr) {
		this.meetingResultStr = meetingResultStr;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getFkey() {
		return fkey;
	}

	public void setFkey(String fkey) {
		this.fkey = fkey;
	}

	public byte getMeetValid() {
		return meetValid;
	}

	public void setMeetValid(byte meetValid) {
		this.meetValid = meetValid;
	}

	public String getMeetingNotesText() {
		return meetingNotesText;
	}

	public void setMeetingNotesText(String meetingNotesText) {
		this.meetingNotesText = meetingNotesText;
	}

	
	
	

	public Long getCreateUid() {
		return createUid;
	}

	public void setCreateUid(Long createUid) {
		this.createUid = createUid;
	}

	public Long getMeetingName() {
		return meetingName;
	}

	public void setMeetingName(Long meetingName) {
		this.meetingName = meetingName;
	}

	public static String dateStrformat(String dateStr){  //2016-05-27 16:00:00   19
		int len = dateStr.length();
		if( dateStr.indexOf("/") != -1){
			dateStr = dateStr.replaceAll("/", "-");
		}
	//	String format = "yyyy-MM-dd HH:mm:ss";
		switch (len) {
		/*case 8:
			if(dateStr.indexOf("-")==-1 || dateStr.indexOf("/")==-1 ){
				format = "yyyyMMdd";
			}
			break;*/
		case 10:
			dateStr = dateStr + " 00:00:00";
			break;
		case 13:
			dateStr = dateStr + ":00:00";
			break;
		case 16:
			dateStr = dateStr + ":00";
			break;
		default:
			break;
		}
		return dateStr;
	}

	public String getCreateUName() {
		return createUName;
	}

	public void setCreateUName(String createUName) {
		this.createUName = createUName;
	}

	public String getFileReidsKey() {
		return fileReidsKey;
	}

	public void setFileReidsKey(String fileReidsKey) {
		this.fileReidsKey = fileReidsKey;
	}

	public Byte getFileNum() {
		return fileNum;
	}

	public void setFileNum(Byte fileNum) {
		this.fileNum = fileNum;
	}

	public List<SopFile> getFiles() {
		return files;
	}

	public void setFiles(List<SopFile> files) {
		this.files = files;
	}

	public List<Long> getFileIds() {
		return fileIds;
	}

	public void setFileIds(List<Long> fileIds) {
		this.fileIds = fileIds;
	}

	public String getHasFile() {
		return hasFile;
	}

	public void setHasFile(String hasFile) {
		this.hasFile = hasFile;
	}
    
	
	

}