package com.galaxyinternet.model.HR;

import com.galaxyinternet.framework.core.model.BaseEntity;

public class personInvest extends BaseEntity {

	/**
	 * gxc
	 */
	private static final long serialVersionUID = 1L;

		private Long id; //人力_投资经历id 
		private Long personId;//关联人力资源id
		private String companyName;//公司名称
		private Double inverstmentAmount;//投资金额
		private Double shareRation;//股权占比
		private String projectDirector;//项目负责人;
		private String emceedPosition;//担任职位
		private String telephone;//联系方式
		
		
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Long getPersonId() {
			return personId;
		}
		public void setPersonId(Long personId) {
			this.personId = personId;
		}
		public String getCompanyName() {
			return companyName;
		}
		public void setCompanyName(String companyName) {
			this.companyName = companyName;
		}
		public Double getInverstmentAmount() {
			return inverstmentAmount;
		}
		public void setInverstmentAmount(Double inverstmentAmount) {
			this.inverstmentAmount = inverstmentAmount;
		}
		public Double getShareRation() {
			return shareRation;
		}
		public void setShareRation(Double shareRation) {
			this.shareRation = shareRation;
		}
		public String getProjectDirector() {
			return projectDirector;
		}
		public void setProjectDirector(String projectDirector) {
			this.projectDirector = projectDirector;
		}
		public String getEmceedPosition() {
			return emceedPosition;
		}
		public void setEmceedPosition(String emceedPosition) {
			this.emceedPosition = emceedPosition;
		}
		public String getTelephone() {
			return telephone;
		}
		public void setTelephone(String telephone) {
			this.telephone = telephone;
		}
	
		
		
		
		
	
	
}
