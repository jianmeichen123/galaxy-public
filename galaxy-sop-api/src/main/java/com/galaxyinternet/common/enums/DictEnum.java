package com.galaxyinternet.common.enums;

import java.util.Map;


public enum DictEnum {
	
	项目类型("项目类型","projectType"),
	项目进度("项目进度","projectProgress"),
	
	会议类型("会议类型","meetingType"),
	
	会议结论("会议结论","meetingResult"),
	
	任务类型("任务类型","taskType"),
	任务状态("任务状态","taskStatus"),
	
	档案状态("档案状态","fileStatus"),
	档案业务分类("档案业务分类","fileWorktype"),
	档案存储类型("档案存储类型","fileType"),
	档案来源("档案来源","fileSource"),
	学历("学历","degree");
	private String name;

	private String code;

	private DictEnum(String name, String code) {
		this.name = name;
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public String getCode() {
		return code;
	}

    /**
     * 根据code get name
     * @param reslut
     * @return
     */
    public static String getNameByCode(String code) {
        
        if (code != null && !code.trim().equals("")) {
            
        	DictEnum[] values = DictEnum.values();
            for (int i = 0;i < values.length;i++) {
                if (code.equals(values[i].getCode())) {
                    return values[i].getName();
                }                
            }
        }
        return null;
    }
    
	//项目类型
	public enum projectType {
		外部投资("外部投资","projectType:1"),
		内部创建("内部创建","projectType:2");
		private String name;

		private String code;

		private projectType(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	projectType[] values = projectType.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}	
	
	//项目进度
	public enum projectProgress {
		接触访谈("接触访谈","projectProgress:1"),
		内部评审("内部评审","projectProgress:2"),
		CEO评审("CEO评审","projectProgress:3"),
		立项会("立项会","projectProgress:4"),
		投资意向书("投资意向书","projectProgress:5"),
		尽职调查("尽职调查","projectProgress:6"),
		投资决策会("投资决策会","projectProgress:7"),
		投资协议("投资协议","projectProgress:8"),
		股权交割("股权交割","projectProgress:9"),
		投后运营("投后运营","projectProgress:10");
		private String name;

		private String code;

		private projectProgress(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	projectProgress[] values = projectProgress.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
		
	//会议类型
	public enum meetingType {
		内评会("内评会","meetingType:1"),
		CEO评审("CEO评审","meetingType:2"),
		立项会("立项会","meetingType:3"),
		投决会("投决会","meetingType:4");
		private String name;

		private String code;

		private meetingType(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	meetingType[] values = meetingType.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
	
	//会议结论
	public enum meetingResult {
		通过("通过","meetingResult:1"),
		待定("待定","meetingResult:2"),
		否决("否决","meetingResult:3");
		private String name;

		private String code;

		private meetingResult(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	meetingResult[] values = meetingResult.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
	
	//会议状态
	public enum meetingSheduleResult {
		待排期("待排期",0),
		已排期("已排期",1),
		已通过("已通过",2),
		已否决("已否决",3);
		private String name;
		private int code;
		private meetingSheduleResult(String name, int code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public int getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(int code) {
	        meetingSheduleResult[] values = meetingSheduleResult.values();
            for (int i = 0;i < values.length;i++) {
                if (code == values[i].getCode()) {
                    return values[i].getName();
                }                
            }
	        return null;
	    }
	}		
	
	//任务类型
	public enum taskType {
		审批流程("审批流程领","taskType:1"),
		协同办公("协同办公","taskType:2");
		private String name;

		private String code;

		private taskType(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	taskType[] values = taskType.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
	
	//任务状态
	public enum taskStatus {
		待认领("待认领","taskStatus:1"),
		待完工("待完工","taskStatus:2"),
		已完成("已完成","taskStatus:3");
		private String name;

		private String code;

		private taskStatus(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	taskStatus[] values = taskStatus.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }

	}
			
	
	
	//档案类型
	public enum dalx {
		缺失("缺失","dalx:1"),
		已上传("任务类型","dalx:2"),
		已签署("已签署","dalx:3");
		private String name;

		private String code;

		private dalx(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}

	}	
	
	
	//档案状态
	public enum fileStatus{
		缺失("缺失","fileStatus:1"),
		已上传("已上传","fileStatus:2"),
		已签署("已签署","fileStatus:3");
		
		private String name;
		private String code;
		private fileStatus(String name, String code) {
			this.name = name;
			this.code = code;
		}
		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		
		public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	fileStatus[] values = fileStatus.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
	
	//档案业务分类
	public enum fileWorktype {
		业务尽职调查报告("业务尽职调查报告","fileWorktype:1"),
		人力资源尽职调查报告("人力资源尽职调查报告","fileWorktype:2"),
		法务尽职调查报告("法务尽职调查报告","fileWorktype:3"),
		财务尽职调查报告("财务尽职调查报告","fileWorktype:4"),
		投资意向书("投资意向书","fileWorktype:5"),
		投资协议("投资协议","fileWorktype:6"),
		股权转让协议("股权转让协议","fileWorktype:7"),
		工商转让凭证("工商转让凭证","fileWorktype:8"),
		资金拨付凭证("资金拨付凭证","fileWorktype:9"),
		公司资料("公司资料","fileWorktype:10"),
		财务预测报告("财务预测报告","fileWorktype:11"),
		商业计划("商业计划","fileWorktype:12");
		
		private String name;

		private String code;

		private fileWorktype(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	fileWorktype[] values = fileWorktype.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
	
	
	//档案存储类型
	public enum fileType {
		文档("文档","fileType:1"),
		音频文件("音频文件","fileType:2"),
		视频文件("视频文件","fileType:3"),
		图片("图片","fileType:4");
		private String name;

		private String code;

		private fileType(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}
		/**
	     * 根据code get name
	     * @param reslut
	     * @return
	     */
	    public static String getNameByCode(String code) {
	        
	        if (code != null && !code.trim().equals("")) {
	            
	        	fileType[] values = fileType.values();
	            for (int i = 0;i < values.length;i++) {
	                if (code.equals(values[i].getCode())) {
	                    return values[i].getName();
	                }                
	            }
	        }
	        return null;
	    }
	}
	
	// 档案来源
	public enum fileSource {
		内部("内部", "1"), 外部("外部", "2");
		private String name;
		private String code;

		private fileSource(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public String getCode() {
			return code;
		}

		/**
		 * 根据code get name
		 * 
		 * @param reslut
		 * @return
		 */
		public static String getNameByCode(String code) {

			if (code != null && !code.trim().equals("")) {

				fileSource[] values = fileSource.values();
				for (int i = 0; i < values.length; i++) {
					if (code.equals(values[i].getCode())) {
						return values[i].getName();
					}
				}
			}
			return null;
		}
	}
	
	public enum TemplateType
	{
		TZYXS("投资意向书"			,"templateType:1"),
		TZXY("投资协议"			,"templateType:2"),
		YWJD("业务尽职调查清单"		,"templateType:3"),
		RSJD("人力资源尽职调查清单"		,"templateType:4"),
		FWJD("法务尽职调查清单"		,"templateType:5"),
		CWJD("财务尽职调查清单"		,"templateType:6"),
		GQZR("股权转让协议"			,"templateType:7");
		private String name;
		private String code;
		
		private TemplateType(String name, String code)
		{
			this.name = name;
			this.code = code;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getCode() {
			return code;
		}

		public void setCode(String code) {
			this.code = code;
		}
		
		public static String getNameByCode(String code) {
			if (code != null && !code.trim().equals("")) 
			{
				TemplateType[] values = TemplateType.values();
				for (int i = 0; i < values.length; i++) 
				{
					if (code.equals(values[i].getCode())) 
					{
						return values[i].getName();
					}
				}
			}
			return null;
		}
	}

	public enum RecordType {

		PROJECT((byte) 0, "项目"), IDEAS((byte) 1, "创意");

		private byte type;
		private String name;

		private RecordType(byte type, String name) {
			this.type = type;
			this.name = name;
		}

		public byte getType() {
			return type;
		}

		public String getName() {
			return name;
		}

		public static String getName(byte type) {
			RecordType[] rtypes = RecordType.values();
			String result = "";
			for (RecordType rtype : rtypes) {
				if (type == rtype.getType()) {
					result = rtype.getName();
					break;
				}
			}
			return result;
		}
	}
	
	
	
	public enum IdeaProgress {

		CYCJ("创意已创建/待认领","ideaProgress:1"),
		CYDY("调研","ideaProgress:2"),
		CYLXH("创建立项会","ideaProgress:3"),
		CYLGZ("搁置","ideaProgress:4"),
		CYXM("创建项目","ideaProgress:5");

		private String name;
		private String code;

		private IdeaProgress(String name, String code) {
			this.name = name;
			this.code = code;
		}

		public String getCode() {
			return code;
		}

		public String getName() {
			return name;
		}

		public static String getName(String code) {
			IdeaProgress[] ideaP = IdeaProgress.values();
			String name = "";
			for (IdeaProgress aidea : ideaP) {
				if (code == aidea.getCode()) {
					name = aidea.getName();
					break;
				}
			}
			return name;
		}
	}
	
	
	
	
	
	// 档案来源
		public enum degree {
			高中("高中", "1"), 大专("大专", "2"),本科("本科", "3"),硕士("硕士", "4"),MBA("MBA", "5"),博士("博士", "6"),其他("其他", "7");
			private String name;
			private String code;

			private degree(String name, String code) {
				this.name = name;
				this.code = code;
			}

			public String getName() {
				return name;
			}

			public String getCode() {
				return code;
			}

			/**
			 * 根据code get name
			 * 
			 * @param reslut
			 * @return
			 */
			public static String getNameByCode(String code) {

				if (code != null && !code.trim().equals("")) {

					fileSource[] values = fileSource.values();
					for (int i = 0; i < values.length; i++) {
						if (code.equals(values[i].getCode())) {
							return values[i].getName();
						}
					}
				}
				return null;
			}
			
			
		}
}

