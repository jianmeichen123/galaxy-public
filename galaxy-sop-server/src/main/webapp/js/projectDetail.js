$(function(){
	var pid = $("#pid").val();
   /**
	 * 加载项目详情数据
	 */
	var projectPro = projectInfo.projectProgress;
	if(projectPro=="projectProgress:10"){
		$("#end").hide();
		$("#s").hide();
		
	}
	var num = projectPro.substring(projectPro.lastIndexOf(":")+1,projectPro.length);

		$("#project_name_title").text(projectInfo.projectName);
		$("#project_name").text(projectInfo.projectName);
		$("#project_code").text(projectInfo.projectCode);
		$("#create_date").text(projectInfo.createDate);
		$("#updateDate").text(projectInfo.updateDate);
		$("#createUname").text(projectInfo.createUname);
		$("#projectCareerline").text(projectInfo.projectCareerline);
		$("#projectType").text(projectInfo.type);
		$("#project_contribution").text(typeof(projectInfo.projectContribution)=="undefined"?"--":projectInfo.projectContribution);
		$("#project_valuations").text(typeof(projectInfo.projectValuations)=="undefined"?"--":projectInfo.projectValuations);
		$("#project_share_ratio").text(typeof(projectInfo.projectShareRatio)=="undefined"?"--":projectInfo.projectShareRatio);
		$("#projectProgress").text(projectInfo.progress);
		$("#projectStatusDs").text(projectInfo.projectProgress=="projectProgress:10"?"":projectInfo.projectStatusDs);
		$("#financeStatusDs").text(projectInfo.financeStatusDs==null?"不明确":projectInfo.financeStatusDs);
		$("#finalValuations").text(typeof(projectInfo.finalValuations)=="undefined"?"--":projectInfo.finalValuations);
		$("#finalContribution").text(typeof(projectInfo.finalContribution)=="undefined"?"--":projectInfo.finalContribution);
		$("#finalShareRatio").text(typeof(projectInfo.finalShareRatio)=="undefined"?"--":projectInfo.finalShareRatio);
		$("#serviceCharge").text(typeof(projectInfo.serviceCharge)=="undefined"?"--":projectInfo.serviceCharge);
		$("#industryOwnDs").text(projectInfo.industryOwnDs);
		$("#faName").text(typeof(projectInfo.faFlag)=="undefined"?"无":projectInfo.serviceCharge);
		var ht=projectProgress(data)
		$("#insertImg").html(ht);
		var p;
		var fs;
		$("[data-on='data-open']").click(function (){
			if($(this).hasClass('limits_gray'))
			{
				return;
			}
			//基本信息修改
			$("#editImg").html(ht);
			$("#project_name_edit").val(projectInfo.projectName);
			$("#create_date_edit").text(projectInfo.createDate);
			$("#updateDate_edit").text(projectInfo.updateDate);
			$("#createUname_edit").text(projectInfo.createUname);
			$("#projectCareerline_edit").text(projectInfo.projectCareerline);
			$("#projectType_edit").text(projectInfo.type);
			$("#project_contribution_edit").val(projectInfo.projectContribution==0?0:projectInfo.projectContribution);
			$("#project_valuations_edit").val(projectInfo.projectValuations==0?0:projectInfo.projectValuations);
			$("#project_share_ratio_edit").val(projectInfo.projectShareRatio==0?0:projectInfo.projectShareRatio);
			$("#projectProgress_edit").text(projectInfo.progress);
			$("#projectStatusDs_edit").text(projectInfo.projectStatusDs);
			$("#financeStatusDs_edit").text(projectInfo.financeStatusDs);
			$("#finalValuations_edit").val(projectInfo.finalValuations==0?0:projectInfo.finalValuations);
			$("#finalContribution_edit").val(projectInfo.finalContribution==0?0:projectInfo.finalContribution);
			$("#finalShareRatio_edit").val(projectInfo.finalShareRatio==0?0:projectInfo.finalShareRatio);
			$("#serviceChargeedit").val(projectInfo.serviceCharge==0?0:projectInfo.serviceCharge)
			 p=projectInfo.industryOwn;
		    fs=projectInfo.financeStatus;
			//融资
			sendGetRequest(platformUrl.getFinanceStatusByParent+"/getFinanceStatusByParent",null,CallBackB);
			sendGetRequest(platformUrl.getDepartMentDict+"/all",null,CallBackA);
			
			initDialogVal();
		
		})
			function CallBackB(data){
		    var _dom=$("#finance_status_sel");
		    var childNum = _dom.find("option").length;
		    if(!childNum || childNum ==0 ){
		    	$.each(data.entityList,function(){
					if(this.code){
						if(this.code==fs){
							_dom.append("<option selected value='"+this.code+"'>"+this.name+"</option>");
						}else{
							_dom.append("<option value='"+this.code+"'>"+this.name+"</option>");
						}
						
					}else{
						_dom.append("<option value='"+this.id+"'>"+this.name+"</option>");
					}
					
				});
		    }
			 
		}
		function CallBackA(data){
		       var _dom=$("#industry_own_sel");
		       var childNum = _dom.find("option").length;
			    if(!childNum || childNum ==0 ){
			    	$.each(data.entityList,function(){
						if(this.code){
							_dom.append("<option value='"+this.code+"'>"+this.name+"</option>");
						}else{
							if(this.id==p){
								_dom.append("<option selected value='"+this.id+"'>"+this.name+"</option>");
							}else{
								_dom.append("<option value='"+this.id+"'>"+this.name+"</option>");
							}
						}
						
					});
			    }
				 
			}
		if(projectInfo.projectDescribe){
			var um = UM.getEditor('describe_editor');
			$("#describe_show").html(projectInfo.projectDescribe);
			um.setContent(projectInfo.projectDescribe);
			$("#descript").hide();
			$('.describe_show').show();
			display_show("describe_show");
		}else{
			$('.describe_show').hide();
			$("#describe_show").html('');
		}
		if(projectInfo.projectBusinessModel){
			var um = UM.getEditor('business_editor');
			um.setContent(projectInfo.projectBusinessModel);
			$("#business_model_show").html(projectInfo.projectBusinessModel)
			$("#business_model").hide();
			$('.business_model_show').show();
			display_show("business_model_show");
		}else{
			$("#business_model_show").html('')
			$('.business_model_show').hide();
		}
		if(projectInfo.companyLocation){
			var um = UM.getEditor('company_editor');
			um.setContent(projectInfo.companyLocation);
			$("#location_show").html(projectInfo.companyLocation)
			$("#location").hide();
			$('.location_show').show();
			display_show("location_show");
		}else{
			$("#location_show").html('')
			$('.location_show').hide();
		}
		if(projectInfo.userPortrait){
			var um = UM.getEditor('portrait_editor');
			um.setContent(projectInfo.userPortrait);
			$("#portrait_show").html(projectInfo.userPortrait);
			$("#portrait").hide();
			$(".portrait_show").show();
			display_show("portrait_show");
		}else{
			$("#portrait_show").html('')
			$(".portrait_show").hide();
		}
		if(projectInfo.prospectAnalysis){
			var um = UM.getEditor('analysis_editor');
			um.setContent(projectInfo.prospectAnalysis);
			$("#analysis_show").html(projectInfo.prospectAnalysis)
			$("#analysis").hide();
			$(".analysis_show").show();
			display_show("analysis_show");
		}else{
			$("#analysis_show").html('');
			$(".analysis_show").hide();
		}

		if(projectInfo.operationalData){
			var um = UM.getEditor('operation_editor');
			um.setContent(projectInfo.operationalData);
			$("#operational_data_show").html(projectInfo.operationalData);
			$("#operational_data").hide();
			$(".operational_data_show").show();
			display_show("operational_data_show");
		}else{
			$("#operational_data_show").html('');
			$(".operational_data_show").hide();
		}
		if(projectInfo.industryAnalysis){
			var um = UM.getEditor('industry_editor');
			um.setContent(projectInfo.industryAnalysis);
			$("#industry_analysis_show").html(projectInfo.industryAnalysis);
			$("#industry_analysis").hide();
			$(".industry_analysis_show").show();
			display_show("industry_analysis_show");
		}else{
			$("#industry_analysis_show").html('');
			$(".industry_analysis_show").hide();
		}
		if(projectInfo.nextFinancingSource){
			var um = UM.getEditor('next_financing_editor');
			um.setContent(projectInfo.nextFinancingSource);
			$("#next_financing_source_show").html(projectInfo.nextFinancingSource);
			$("#next_financing_source").hide();
			$(".next_financing_source_show").show();
			display_show("next_financing_source_show");
		}else{
			$("#next_financing_source_show").html('');
			$(".next_financing_source_show").hide();
		}

		function  display_show(obj){
			
			var height=$('#'+obj).outerHeight();
			if(height>100){
				var str='';
				str+='<span class="show_more">',
				str+='<span style="display: block;"  class="blue open ico1 f4" >展开</span> <span style="display: none;" href="#" class="blue searchbox_hidden hide ico1 f3" >收起</span>',
				str+='</span>';
				$('#'+obj).append(str);
				$('#'+obj).parent().css('height','100px')
			}
		}
		$('.new_top_color').delegate(".f4","click",function(){
			$(this).hide();
			$(this).parent().children('.f3').show();
			$(this).parent().parent().parent().css('height','auto')
		}) 
		$('.new_top_color').delegate(".f3","click",function(){
			$(this).hide();
			$(this).parent().children('.f4').show();
			$(this).parent().parent().parent().css('height','100px')
		}) 
		/**
		 * 商业计划
		 */
		var data = {
				_projectId : pid,
				_projectName : projectInfo.projectName,
				_domId :'business_plan'			
		}
		initPage.init(data);
		/**
	 * 计算初始估值
	 */
	$("#project_share_ratio_edit").blur(function(){
		var valuations = calculationValuations();
		$("#project_valuations_edit").val("");
		if(valuations){
			$("#project_valuations_edit").val(valuations);
		}
	});
	/**
	 * 计算初始估值
	 * project_contribution_edit
	 * project_valuations_edit
	 * project_share_ratio_edit
	 */
	$("#project_contribution_edit").blur(function(){
		var valuations = calculationValuations();
		$("#project_valuations_edit").val("");
		if(valuations){
			$("#project_valuations_edit").val(valuations);
		}
	});
	/**
	 * 计算初始估值
	 */
	function calculationValuations(){
		var projectShareRatio = $("#project_share_ratio_edit").val();
		var projectContribution = $("#project_contribution_edit").val();
		if(projectShareRatio > 0 && projectContribution > 0){
			return (projectContribution * (100/projectShareRatio)).toFixed(2);
		}
		return null;
	}
	//实际值计算************************************************************
	/**
	 * 计算实际估值
	 */
	$("#finalShareRatio_edit").blur(function(){
		var valuations = finalValuations();
		$("finalValuations_edit").val("");
		if(valuations){
			$("#finalValuations_edit").val(valuations);
		}
	});
	/**
	 * 计算实际投资
	 * project_contribution_edit
	 * project_valuations_edit
	 * project_share_ratio_edit
	 */
	$("#finalContribution_edit").blur(function(){
		var valuations = finalValuations();
		$("#finalValuations_edit").val("");
		if(valuations){
			$("#finalValuations_edit").val(valuations);
		}
	});
	/**
	 * 计算初始估值
	 */
	function finalValuations(){
		var projectShareRatio = $("#finalShareRatio_edit").val();
		var projectContribution = $("#finalContribution_edit").val();
		if(projectShareRatio > 0 && projectContribution > 0){
			return (projectContribution * (100/projectShareRatio)).toFixed(2);
		}
		return null;
	}

	function projectProgress(data){
		var projectPro = projectInfo.projectProgress;
		var num = projectPro.substring(projectPro.lastIndexOf(":")+1,projectPro.length);
		var proStatus = projectInfo.projectStatus;
		var pronum = proStatus.substring(proStatus.lastIndexOf(":")+1,proStatus.length);
		if(pronum == 0 || pronum == 1){
			return "<img src='"+Constants.sopEndpointURL+"img/process/p"+num+".gif' >";
		}else{
			return "<img src='"+Constants.sopEndpointURL+"img/process/pd"+num+".gif'>";
		}
	}
	$("[data-on='save']").click(function(){
		var data=getUpdateData();
		if(beforeSubmit()){
			sendPostRequestByJsonObj(platformUrl.updateProject,data, function(){
				layer.msg("修改项目基本信息项目成功!");
				window.location.reload();
			});
		}
	})

});
function getUpdateData(){
	var id=$("#pid").val();
	var pname=$("#project_name_edit").val().trim();
	var industry_own=$("#industry_own_sel").val().trim();
	var finance_status=$("#finance_status_sel").val().trim();
	
	var project_contribution=$("#project_contribution_edit").val()==""?0:$("#project_contribution_edit").val().trim();
	var project_valuations=$("#project_valuations_edit").val()==""?0:$("#project_valuations_edit").val().trim();
	var project_share_ratio=$("#project_share_ratio_edit").val()==""?0:$("#project_share_ratio_edit").val().trim();
	var finalcontribution=$("#finalContribution_edit").val()==""?0:$("#finalContribution_edit").val().trim();
	var finalvaluations=$("#finalValuations_edit").val()==""?0:$("#finalValuations_edit").val().trim();
	var finalshare_ratio=$("#finalShareRatio_edit").val()==""?0:$("#finalShareRatio_edit").val().trim();
	var serviceCharge=$("#serviceChargeedit").val()==""?0:$("#serviceChargeedit").val().trim();
	
	var formatData={"id":id,
			       "projectName":pname,
			        "industryOwn":industry_own,
			        "financeStatus":finance_status,
			       "projectValuations":project_valuations,
			       "projectContribution" :project_contribution,
			       "projectShareRatio":project_share_ratio,
			       "finalValuations":finalvaluations,//实际估值
                   "finalContribution":finalcontribution,//实际投资
  	               "finalShareRatio":finalshare_ratio,	//实际股权占比	
  	               "serviceCharge":serviceCharge
	};
	return formatData;
}

function saveSuccess(){
	$(".project_on").css("display","none");
	window.location.reload();
}
/**
 * 保存项目描述
 */
$("#save_describe").click(function(){
	var um = UM.getEditor('describe_editor');
	var projectDescribe = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "projectDescribe" : projectDescribe}, saveSuccess());
	}
});
/**
 * 保存项目描述
 */
$("#save_location").click(function(){
	var um = UM.getEditor('company_editor');
	var companyLocation = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "companyLocation" : companyLocation}, saveSuccess());
	}
});
/**
 * 保存项目描述
 */
$("#save_portrait").click(function(){
	var um = UM.getEditor('portrait_editor');
	var userPortrait = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "userPortrait" : userPortrait}, saveSuccess());
	}
});
/**
 * 保存项目描述
 */
$("#save_business").click(function(){
	var um = UM.getEditor('business_editor');
	var projectBusinessModel = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "projectBusinessModel" : projectBusinessModel}, saveSuccess());
	}
});
/**
 * 保存项目描述
 */
$("#save_operation").click(function(){
	var um = UM.getEditor('operation_editor');
	var operationalData = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "operationalData" : operationalData}, saveSuccess());
	}
});

/**
 * 保存项目描述
 */
$("#save_industry").click(function(){
	var um = UM.getEditor('industry_editor');
	var industryAnalysis = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "industryAnalysis" : industryAnalysis}, saveSuccess());
	}
});

/**
 * 保存项目描述
 */
$("#save_analysis").click(function(){
	var um = UM.getEditor('analysis_editor');
	var prospectAnalysis = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "prospectAnalysis" : prospectAnalysis}, saveSuccess());
	}
});
/**
 * 保存项目描述
 */
$("#save_next_financing").click(function(){
	var um = UM.getEditor('next_financing_editor');
	var nextFinancingSource = um.getContent();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "nextFinancingSource" : nextFinancingSource}, saveSuccess());
	}
	
	
});
function doSumbit(projectId){
	/**
	 * 查询事业线
	 * @version 2016-08-03
	 */
	createCareelineOptions(platformUrl.getCareerlineList,"afterDepartmentId",1);
	/**
	 * 根据事业线查询相应的投资经理
	 * @version 2016-08-03
	 */
	if(null==$('select[name="afterDepartmentId"]').val()||$('select[name="afterDepartmentId"]').val()==""){
          createUserOptions(platformUrl.getUserList+"0", "afterUid",1);
	}else{
		  createUserOptions(platformUrl.getUserList+$('select[name="afterDepartmentId"]').val(), "afterUid",1);
			
	}
	/**
	 * 改变事业线时获取该事业线下的投资经理
	 * @version 2016-06-21
	 */
	$('select[name="afterDepartmentId"]').change(function(){
		var did = $('select[name="afterDepartmentId"]').val();
	    createUserOptions(platformUrl.getUserList+did, "afterUid", 1);
	});
	$(".poptxt").on("click","a[action='save']",function() {
						var pop = $(".pop");
						var json = {};
                      if (pop.find('select[name="afterDepartmentId"] option:selected').val() == null
								|| pop.find('select[name="afterDepartmentId"] option:selected')
										.val() == "") {
							layer.msg("请选择移交部门");
							return;
						}
                      if (pop.find('select[name="afterUid"] option:selected').val() == null
								|| $('select[name="afterUid"] option:selected').val() == ""||
								$('select[name="afterUid"] option:selected').val()==0) {
							layer.msg("请选择移交人");
							return;
						}
                  	var depId = $('select[name="afterDepartmentId"] option:selected').val();
					var userId = $("select[name='afterUid'] option:selected").val();
					json['projectId']=projectId;
					json['afterDepartmentId'] = depId;
					json['afterUid'] = userId;
                     var transferReason=pop.find("[name='transferReason']").val();
          	     	if ( transferReason!= ""){
          	     		if (transferReason.length>100) {
          					layer.msg("角色描述最多输入100个字符");

          					return;
          				}else{
          					json['transferReason']=transferReason;
          				}
          	      	}
          	     	var reqUrl=platformUrl.applyTransfer;
          	     	sendPostRequestByJsonObj(reqUrl, json, callbackFun);
		});
}
function callbackFun(data){
	if (data.result.status != "OK") {
			layer.msg("提交失败");
	} else {
		layer.msg("提交成功")
			history.go(0);
		
	}

}
function revokeTransfer(projectId){
	$(".poptxt").on("click","a[action='revokeTransfer']",function() {
		var pop = $(".pop");
		var json = {};
     var undoReason=pop.find("[name='undoReason']").val();
   	if ( undoReason== ""){
   		layer.msg("撤销原因不能为空");
		return;
   	}else{
   		if (undoReason.length>100) {
			layer.msg("撤销原因最多输入100个字符");
			return;
		}else{
			json['undoReason']=undoReason;
		}
	}
   	json['projectId']=projectId;
   	var reqUrl=platformUrl.undoTransfer;
   	sendPostRequestByJsonObj(reqUrl, json, callbackFunRevoke);
    });
	
}
function callbackFunRevoke(data){
	if (data.result.status != "OK") {
		layer.msg("项目撤销移交失败");
} else {
	layer.msg("项目撤销移交成功")
	history.go(0);
	
}

}
