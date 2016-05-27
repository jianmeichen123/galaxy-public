package com.galaxyinternet.model.project;

import java.text.ParseException;
import java.util.Date;

import com.galaxyinternet.framework.core.model.BaseEntity;
import com.galaxyinternet.framework.core.utils.DateUtil;

public class InterviewRecord extends BaseEntity{

	private static final long serialVersionUID = 1L;
	
    private Long projectId;
    
    private Long fileId;

    private Date viewDate;
    private String viewDateStr;
    
    private String viewTarget;

    private String viewNotes;
    private String viewNotesText;
    
    private String fname;
    
    private Long createdId;
    
    
    
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

	
	
	public Date getViewDate() { //2016-05-27 16:00:00   19
		if(viewDate==null && viewDateStr!=null){
			viewDateStr = dateStrformat(viewDateStr);
			try {
				viewDate = DateUtil.convertStringtoD(viewDateStr);
			} catch (ParseException e) {
				viewDate = null;
			}
		}else{
			if(viewDateStr==null && viewDate!=null){
				viewDateStr = DateUtil.convertDateToStringForChina(viewDate);
			}
		}
        return viewDate;
    }
	
    public void setViewDate(Date viewDate) {
    	if(viewDate==null && viewDateStr!=null){
    		viewDateStr = dateStrformat(viewDateStr);
			try {
				viewDate = DateUtil.convertStringtoD(this.viewDateStr);
			} catch (ParseException e) {
				viewDate = null;
			}
		}else{
			if(viewDateStr==null && viewDate!=null){
				viewDateStr = DateUtil.convertDateToStringForChina(viewDate);
			}
		}
        this.viewDate = viewDate;
    }
    

    public String getViewTarget() {
        return viewTarget;
    }

    public void setViewTarget(String viewTarget) {
        this.viewTarget = viewTarget == null ? null : viewTarget.trim();
    }

    public String getViewNotes() {
        return viewNotes;
    }

    public void setViewNotes(String viewNotes) {
        this.viewNotes = viewNotes == null ? null : viewNotes.trim();
    }

    
    
    public String getViewDateStr() {
    	if(viewDateStr==null && viewDate!=null){
			viewDateStr = DateUtil.convertDateToStringForChina(viewDate);
		}
		return viewDateStr;
	}

	public void setViewDateStr(String viewDateStr){
		if(viewDateStr==null && viewDate!=null){
			viewDateStr = DateUtil.convertDateToStringForChina(viewDate);
		}
		this.viewDateStr = viewDateStr;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public Long getCreatedId() {
		return createdId;
	}

	public void setCreatedId(Long createdId) {
		this.createdId = createdId;
	}

	public String getViewNotesText() {
		return viewNotesText;
	}

	public void setViewNotesText(String viewNotesText) {
		this.viewNotesText = viewNotesText;
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
	
	
}