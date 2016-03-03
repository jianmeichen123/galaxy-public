package com.galaxyinternet.model.sopfile;

import com.galaxyinternet.framework.core.model.BaseEntity;

public class SopFile extends BaseEntity {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
   
    /**
     * 项目ID
     */
    private Long projectId;

    
    /**
     * 项目进程
     * 1、接触访谈; 2、内部评审;3、立项会; 4、投资意向书; 5、尽职调查;6、投资决策会;7、投资协议; 8、投后运营
     */
    private String projectProgress;

    
    /**
     * 业务分类
     */
    private Integer fileWorktype;

    
    /**
     * 所属事业线
     */
    private Long careerLine;

    
    /**
     * 档案来源 
     * 1:内部 2:外部
     */
    private Integer fileSource;

    
    /**
     * 存储类型 
     * 1:文档 2:图片 3:音视频
     */
    private Integer fileType;

    
    /**
     * 档案摘要
     */
    private String remark;
    
    /**
     * 档案状态
     * 缺失，已上传，已审核
     */
    private Integer fileStatus;
  
    /**
     * 上传人/起草者
     */
    private Long fileUid;
    
    /**
     * 存储地址
     */
    private String filUri;
        
    /**
     * 文件大小
     */
    private Long fileLength;
  
    /**
     * 档案阿里云存储KEY
     */
    private String fileKey;

    
    /**
     * 档案BackName
     */
    private String bucketName;

    
    public Long getProjectId() {
        return projectId;
    }

    
    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    
    public String getProjectProgress() {
        return projectProgress;
    }

    
    public void setProjectProgress(String projectProgress) {
        this.projectProgress = projectProgress;
    }

    
    public Integer getFileWorktype() {
        return fileWorktype;
    }

    
    public void setFileWorktype(Integer fileWorktype) {
        this.fileWorktype = fileWorktype;
    }

    
    public Long getCareerLine() {
        return careerLine;
    }

    
    public void setCareerLine(Long careerLine) {
        this.careerLine = careerLine;
    }

    
    public Integer getFileSource() {
        return fileSource;
    }

    
    public void setFileSource(Integer fileSource) {
        this.fileSource = fileSource;
    }

    
    public Integer getFileType() {
        return fileType;
    }

    
    public void setFileType(Integer fileType) {
        this.fileType = fileType;
    }

    
    public String getRemark() {
        return remark;
    }

    
    public void setRemark(String remark) {
        this.remark = remark;
    }

    
    public Integer getFileStatus() {
        return fileStatus;
    }

    
    public void setFileStatus(Integer fileStatus) {
        this.fileStatus = fileStatus;
    }

    
    public Long getFileUid() {
        return fileUid;
    }

    
    public void setFileUid(Long fileUid) {
        this.fileUid = fileUid;
    }

    
    public String getFilUri() {
        return filUri;
    }

    
    public void setFilUri(String filUri) {
        this.filUri = filUri;
    }


	public Long getFileLength() {
		return fileLength;
	}


	public void setFileLength(Long fileLength) {
		this.fileLength = fileLength;
	}


	public String getFileKey() {
		return fileKey;
	}


	public void setFileKey(String fileKey) {
		this.fileKey = fileKey;
	}


	public String getBucketName() {
		return bucketName;
	}


	public void setBucketName(String bucketName) {
		this.bucketName = bucketName;
	}

    

}