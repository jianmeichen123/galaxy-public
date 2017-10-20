$(function(){
		
		var width_fwb=$('.tabtable_con_on').width();
		$('.width_fwb').css('width',(width_fwb-20));

		/*$("#faNameEdit").keydown(function(){
				if(this.value=="请输入FA名称"){
					this.value = "";
				}
			
		})
		$("#faNameEdit").blur(function(){
				if(this.value==""){
					this.value = "请输入FA名称";
				}
			
		})*/
		
		
		//未上传上传计划书，用于调样式
		if($("#plan_name").text()==''){
			$("#plan_name").parent('li').css("margin-right","0");
		}
		
		//统一显示
		 $('.edui-icon-fullscreen').on('click',function(){
				$('body').css('padding-bottom','300px')
		})
		if(isTransfering == 'true')
		{
			$('[data-on="data-open"]').addClass('limits_gray');
		}
		//统一关
		$('[data-on="close"]').on('click',function(){
			var close=$(this).attr('data-name')
			$('.'+close+'_on').hide();
			$('.'+close+'_center').show();
			$('.bj_hui_on').hide();
			$('.tip-yellowsimple').hide();
			$("label.error").hide();
		})
		
		//项目名称截断
		if(projectInfo.projectName.length>24){
			var str=projectInfo.projectName.substring(0,24);
		}
		$("#project_name").text(str);
		$("#project_name").attr("title",projectInfo.projectName);
		
		
		/**
		 * 组装数据
		 */
		function responseData(){
			var sel_val = $("#financeStatusDs").text();
			if(sel_val!="A+轮"){
				$("#finance_status_sel").find('option[text='+sel_val+']').prop("selected",true);
			}
		}
		
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
			$("#project_name_t").text(projectInfo.projectName);
			$("#project_name").text(projectInfo.projectName);
			$("#project_code").text(projectInfo.projectCode);
			$("#create_date").text(projectInfo.createDate);
			$("#updateDate").text(projectInfo.updateDate);
			$("#createUname").text(projectInfo.createUname);
			$("#projectCareerline").text(projectInfo.projectCareerline);
			$("#projectType").text(projectInfo.type);
			$("#projectProgress").text(projectInfo.progress);
			$("#projectStatusDs").text(projectInfo.projectProgress=="projectProgress:10"?"":projectInfo.projectStatusDs);
			$("#financeStatusDs").text(projectInfo.financeStatusDs==null?"-":projectInfo.financeStatusDs);
			$("#industryOwnDs").text(projectInfo.industryOwnDs);
			$("#faName").text(projectInfo.faFlag=="projectSource:1"?projectInfo.faFlagStr+'-'+projectInfo.faName:projectInfo.faFlagStr);
		    $("#remarkStr").text(projectInfo.remark==""?"无":(projectInfo.remark==null?"无":projectInfo.remark));
			var ht=projectProgress(data)
			//$("#insertImg").html(ht);
			//详情展示投资形式处理
			$("#financeMode").text(typeof(projectInfo.fModeRemark)=="undefined"?"—":(projectInfo.fModeRemark==0?"—":projectInfo.fModeRemark));
			if(projectInfo.financeMode!=undefined&&projectInfo.financeMode!="financeMode:0"){
				jointDeliveryList(projectInfo.jointDeliveryList);
				//列表无数据时不显示表格
				var trLen=$("#jointDelivery").find("tr:gt(0)").length;
				if(trLen==0){
					$("#jointDelivery").hide();
				}else{
					$("#jointDelivery").show();
				}
			}
			
			if(roleId==4){   //投资经理a看投资经理B的项目，团队，法人，股权，融资隐藏
				var roleProject=$('#createUname').text();
				var roleLogin=$('.man_info .name').text();
				if(roleProject==roleLogin){
					$('.role_hide').show();
				}
			}else{
				$('.role_hide').show();
			}
			var p;
			var fs;
			
        $("[data-on='data-open']").click(function (){
        	    isDelete=[];
        	 
				if($(this).hasClass('limits_gray'))
				{
					return;
				}
				var scroll_top=$(this).offset().top;
				 $('html,body').animate({  
				        scrollTop: scroll_top
				    }, 1000);   
				var open=$(this).attr('data-name')
				$('.'+open+'_on').show();
				$('.'+open+'_center').hide();
				$('.bj_hui_on').show();
				var width_fwb=$('.tabtable_con_on').width();
				$('.width_fwb').css('width',(width_fwb-40));
				//投资形式切换
				$(".new_table .mar_left>input").change(function(){
					var val=$(this).val();
					$(".institutionBtn span").css('margin-top','0');
					if(val=="financeMode:0"){
						$(".institution").hide();
					}else if(val=="financeMode:1"){
						$(".institution").show();
						$(".institution .new_color_gray").text("领投机构：");
					}else{
						$(".institution").show();
						$(".institution .new_color_gray").text("合投机构：");
					}
				});
				buildMoneyResult("1915");  //融资计划
				buildShareResult("4","3002");  //实际投资
				buildShareResult("4","3008");  //实际投资
				//基本信息修改
				$("#editImg").html(ht);
				$("#project_name_edit").val(projectInfo.projectName);
				$("#create_date_edit").text(projectInfo.createDate);
				$("#updateDate_edit").text(projectInfo.updateDate);
				$("#createUname_edit").text(projectInfo.createUname);
				$("#projectCareerline_edit").text(projectInfo.projectCareerline);
				$("#projectType_edit").text(projectInfo.type);
				//$("#project_contribution_edit").val(projectInfo.projectContribution==0?"":projectInfo.projectContribution);
				//$("#project_valuations_edit").val(projectInfo.projectValuations==0?"":projectInfo.projectValuations);
				//$("#project_share_ratio_edit").val(projectInfo.projectShareRatio==0?"":projectInfo.projectShareRatio);
				$("#projectProgress_edit").text(projectInfo.progress);
				$("#projectStatusDs_edit").text(projectInfo.projectStatusDs);
				$("#financeStatusDs_edit").text(projectInfo.financeStatusDs);
				//$("#finalValuations_edit").val(projectInfo.finalValuations==0?"":projectInfo.finalValuations);
				//$("#finalContribution_edit").val(projectInfo.finalContribution==0?"":projectInfo.finalContribution);
				//$("#finalShareRatio_edit").val(projectInfo.finalShareRatio==0?"":projectInfo.finalShareRatio);
				//$("#serviceChargeedit").val(projectInfo.serviceCharge==0?"":projectInfo.serviceCharge)
				$("#remark").val(projectInfo.remark==null?"":projectInfo.remark);
				//添加投资形式字段
				if(projectInfo.financeMode!=undefined&&projectInfo.financeMode!=""){
					var financeForms=$("input[name='investForm']");
					for(var i=0;i<financeForms.length;i++){
						if(financeForms[i].value==projectInfo.financeMode){
							financeForms[i].checked=true;
						}
				
				}
					//机构显示
					var investForm= $("input[name='investForm']:checked").val();
					if(investForm=="financeMode:1"){
						$(".institution .new_color_gray").text("领投机构：");
						$(".institution").show();
					}else if(investForm=="financeMode:2"){
						$(".institution .new_color_gray").text("合投机构：");
						$(".institution").show();
					}else{
						$(".institution").hide();
					}
					
					if(projectInfo.financeMode!=undefined&&projectInfo.financeMode!="financeMode:0"){
						jointDeliveryEdit(projectInfo.jointDeliveryList);
					}
				}else{
					$("input[name='investForm']").removeAttr("checked");
					$(".inputsForm").find(".block_inputs").remove();
					$(".institution").hide();
				}
				//详情页无列表，取消再编辑，取消上一步操作
				if($("#jointDelivery").is(":hidden")){
					$(".institutionBtn span").css("margin-top","0")
				}
				//投资形式合投，领头编辑页面投资列表处理
				
				 p=projectInfo.industryOwn;
			    fs=projectInfo.financeStatus;
			    var sectionName = $(this).data('name');
			    if('basic' == sectionName)
		    	{
			    	//融资
			    	sendGetRequest(platformUrl.queryAllTitleValues+'FNO1?reportType=4', null,CallBackB);
			    	sendGetRequest(platformUrl.searchDictionaryChildrenItems+"industryOwn",null,CallBackA);
			    	/**
			    	 * 查询项目来源
			    	 * @version 2017-09-18
			    	 */
			    	$("select[name='projectSource'] option").not(":first").remove();   //项目来源加载前清空
			    	 createDictionaryOptions(platformUrl.searchDictionaryChildrenItems+"projectSource","projectSource");
			    	
			    	//initDialogVal();
		    	}
			    responseData()//数据反显
			    radio_faFlag(projectInfo.faFlag);
				if(typeof(projectInfo.faFlag)!="underfined" && projectInfo.faFlag=="projectSource:1"){
					$("select[name='projectSource']").find("option[value='"+projectInfo.faFlag+"']").prop("selected",true);
					$("#faNameEdit").val(projectInfo.faName);
					$("#faNameEdit").css("display","block");
					$("#faNameEdit").attr('required','required');
				}else{
					$("select[name='projectSource']").find("option[value='"+projectInfo.faFlag+"']").prop("selected",true);
					$("#faNameEdit").css("display","none");
				}
			
			})
				function CallBackB(data){
			    var _dom=$("#finance_status_sel");
			        _dom.html("");
			        _dom.append('<option value="">--请选择--</option>');
			    var childNum = _dom.find("option").length;
			    var valueId=$("#financeStatusDs").attr("value");
			    var resultId=$("#financeStatusDs").attr("data-result-id");
			    var entity=data.entity.childList[0];
			    _dom.attr({"data-title-id":entity.titleId,"data-type":entity.type,"data-result-id":resultId});
			    if(!childNum || childNum !=0 ){
			    	$.each(entity.valueList,function(){ 
			    		_dom.append("<option value='"+this.id+"' data-title-id='"+this.titleId+"' text='"+this.name+"'>"+this.name+"</option>");
						
					});
			    }
			    $("select[data-title-id]").change(function(){
			    	$(this).attr("tochange",true)
			    })
				 
			}
			function CallBackA(data){
			       var _dom=$("#industry_own_sel");
			           _dom.html("");
			           _dom.append('<option value="">--请选择--</option>');
			       var childNum = _dom.find("option").length;
				    if(!childNum || childNum !=0 ){
				    	$.each(data.entityList,function(){
								if(this.code==p){
									_dom.append("<option selected value='"+this.code+"'>"+this.name+"</option>");
								}else{
									_dom.append("<option value='"+this.code+"'>"+this.name+"</option>");
								}
						});
				    }
					 
				}
			
			//表格渲染 
			info_table("NO9_1","融资历史：",$("table.fina_history"));
			info_table("NO9_1","股权结构：",$("#equity"));
			$(".location_show").show();
			$.each($(".member table"),function(){
				var table =$(this);
				check_table_tr_edit(table);
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
				$("#project_valuations_edit").val(valuations).attr("tochange",true);
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
				$("#project_valuations_edit").val(valuations).attr("tochange",true);
			}
		});
		/**
		 * 计算初始估值
		 */
		function calculationValuations(){
			var projectShareRatio = $("#project_share_ratio_edit").val();
			var projectContribution = $("#project_contribution_edit").val();
			if(projectShareRatio > 0 && projectContribution > 0){
				return (projectContribution * (100/projectShareRatio)).toFixed(4);
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
				$("#finalValuations_edit").val(valuations).attr("tochange",true);
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
				$("#finalValuations_edit").val(valuations).attr("tochange",true);
			}
		});
		/**
		 * 计算初始估值
		 */
		function finalValuations(){
			var projectShareRatio = $("#finalShareRatio_edit").val();
			var projectContribution = $("#finalContribution_edit").val();
			if(projectShareRatio > 0 && projectContribution > 0){
				return (projectContribution * (100/projectShareRatio)).toFixed(4);
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
			
			if(!$("#basicForm").validate().form())
			{
				labelPosition();
				return;
			}
			saveBaseInfo("basicForm");
					sendPostRequestByJsonObj(platformUrl.updateProject,data, function(data2){
						//console.log(data1);
						if(data2.result.status=="OK"){
							layer.msg(data2.result.message);
							initTabInfo(data.id);
						}else {
								layer.msg(data2.result.message);
						}
						
//						window.location.reload();
						
					});
				
			
			//typeof(projectInfo.faFlag)!="underfined" && projectInfo.faFlag!=0
			
		})
		
		
		
		
		function getUpdateData(){
			var id=$("#pid").val();
			var pname=$("#project_name_edit").val().trim();
			var industry_own=$("#industry_own_sel").val().trim();
			//var finance_status=$("#finance_status_sel").val().trim();  //本轮融资轮次
			//var project_contribution=$("#project_contribution_edit").val()==""?0:$("#project_contribution_edit").val().trim();
			//var project_valuations=$("#project_valuations_edit").val()==""?0:$("#project_valuations_edit").val().trim();
			//var project_share_ratio=$("#project_share_ratio_edit").val()==""?0:$("#project_share_ratio_edit").val().trim();
			//var finalcontribution=$("#finalContribution_edit").val()==""?0:$("#finalContribution_edit").val().trim();
			//var finalvaluations=$("#finalValuations_edit").val()==""?0:$("#finalValuations_edit").val().trim();
			//var finalshare_ratio=$("#finalShareRatio_edit").val()==""?0:$("#finalShareRatio_edit").val().trim();
			//var serviceCharge=$("#serviceChargeedit").val()==""?0:$("#serviceChargeedit").val().trim();
			var faFlag=$('select[name="projectSource"] option:selected').attr("value");
			var remark=$('#remark').val().trim();
			var faName="";
			if(faFlag=='projectSource:1'){
				faName=$("#faNameEdit").val();
			}else{
				faName="";
			}
			//处理投资形式
			var investForm= $("input[name='investForm']:checked").val();
			var arr=[];
			if(investForm=="financeMode:1"||investForm=="financeMode:2"){
				var jointDeliverys= $(".block_inputs");
				for(var i=0;i<jointDeliverys.length;i++){
					var obj={"deliveryName":"",
							 "deliveryAmount":"",
							 "deliveryCurrency":"",
							 "deliveryShareRatio":"",
						    };
					var jointDelivery=jointDeliverys[i];
					    var isUpdate=jointDelivery.childNodes[0].childNodes[0].getAttribute("data-id");
					    if(isUpdate!=null){
					    	obj.id=isUpdate;
					    }
				        obj.deliveryName=jointDelivery.childNodes[0].childNodes[0].value;
				        obj.deliveryAmount=jointDelivery.childNodes[1].childNodes[0].value;
				        obj.deliveryCurrency=jointDelivery.childNodes[2].childNodes[0].options[jointDelivery.childNodes[2].childNodes[0].selectedIndex].value;
				        obj.deliveryShareRatio=jointDelivery.childNodes[3].childNodes[0].value;
				        arr[i]=obj;
				}
			}
			   console.log(isDelete);
			var formatData={"id":id,
					       "projectName":pname,
					       "industryOwn":industry_own,
					    //   "financeStatus":finance_status,
					    //   "projectValuations":project_valuations,
					    //   "projectContribution" :project_contribution,
					     //  "projectShareRatio":project_share_ratio,
					     //  "finalValuations":finalvaluations,//实际估值
		                 //  "finalContribution":finalcontribution,//实际投资
		  	             //  "finalShareRatio":finalshare_ratio,	//实际股权占比	
		  	            //   "serviceCharge":serviceCharge,
		  	               "faFlag":faFlag,
		  	               "faName":faName,
		  	               "remark":remark,
		  	               "financeMode":investForm,
                           "jointDeliveryList":arr,
                           "isDelete":isDelete
			};
			return formatData;
		}
		function saveSuccess(){
			sendGetRequest(platformUrl.detailProject + pid, {}, function(data){	
				projectInfo = data.entity;
				$.getTabHtml({
					url : platformUrl.toTabProjectInfo +'/'+ pid
				});
			});
		}

});
$("select[name='projectSource']").change(function() {
	// 0 y; 1 n
	var $selectedvalue = $(this).find("option:selected").attr("value");
	radio_faFlag($selectedvalue);
});

//是否为来源于中介
function radio_faFlag(isContactsV){
	console.log(isContactsV);
	var phone = $("input[name='faName']");
	if (isContactsV == 'projectSource:1') {
		$("input[name='faName']").show();
	} else{
		$("input[name='faName']").hide();
		$("#faNameEdit-error").remove();
	} 
}
function jointDeliveryList(list){
	$("#jointDelivery").children().remove(); 
	var html="<tr><th>投资人/投资机构</th><th>投资金额（万元）</th><th>币种</th><th>占股比例（%）</th></tr>";
	var temp=$("#jointDelivery");
	temp.append(html);
	for(var i=0;i<list.length;i++){
		if(list[i].deliveryCurrency=="currency:1"){
			list[i].deliveryCurrency='美元'
		}else if(list[i].deliveryCurrency=="currency:0"){
			list[i].deliveryCurrency='人民币'
		}
	   var html="<tr><td>"+list[i].deliveryName+"</td><td>"+list[i].deliveryAmount+"</td><td>"+list[i].deliveryCurrency+"</td><td>"+list[i].deliveryShareRatio+"</td></tr>";
	   temp.append(html);
	}	
}
var name_opt = new Array()
function jointDeliveryEdit(list){
	$(".inputsForm").children(".block_inputs").remove(); 
	for(var i=0;i<list.length;i++){
		var inputsRow='<div class="block_inputs">'
	        +'<span><input placeholder="填写机构名称" data-id="'+list[i].id+'" value="'+list[i].deliveryName+'" class="name" name="deliveryName'+i+'" required maxLength="50" data-msg-required="<font color=red>*</font><i></i>必填，且不超过50字" data-rule-delivery="true" data-msg-delivery="<font color=red>*</font><i></i>不能为空"/></span>'
	        +'<span><input placeholder="填写投资金额（万元）" value="'+list[i].deliveryAmount+'" name="deliveryAmount'+i+'" required data-rule-amount="true" data-msg-required="<font color=red>*</font><i></i>支持0-1000000的四位小数" data-msg-amount="<font color=red>*</font><i></i>支持0-1000000的四位小数"/></span>'
	        +'<span><select class="money_select"><option value="currency:0">人民币</option><option value="currency:1">美元</option></select></span>'
	        +'<span><input placeholder="填写占股比例（%）"  value="'+list[i].deliveryShareRatio+'" name="deliveryShareRatio'+i+'" required data-rule-share="true" data-msg-required="<font color=red>*</font><i></i>0到100之间的两位小数" data-msg-share="<font color=red>*</font><i></i>0到100之间的两位小数"/></span>'
	          +'<span class="del">删除</span>'
	          +'</div>';
		$(".inputsForm").append(inputsRow);
		 name_opt.push(list[i].deliveryCurrency);
	};
	
	$('.block_inputs').each(function(){
		var index = $(this).index()
		var _this = $(this);
		if(name_opt[index]==='currency:0' || name_opt[index]==='人民币'){
			_this.find('select option:eq(0)').prop('selected',true);
		}else{
			_this.find('select option:eq(1)').prop('selected',true);
		}
	});
	
	
	
	
	//新增按钮显示隐藏
	var inputsLength=$(".block_inputs").length;
	if(inputsLength <10){
		$(".institutionBtn span").show()
	}else{
		$(".institutionBtn span").hide()
	}
	//编辑验证样式调整
	$.each($("#basicForm input"),function(){
		$(this).on("blur",function(){
			labelPosition();
		})
	})
}
//本轮融资轮次
/*sendGetRequest(platformUrl.queryAllTitleValues+'FNO1?reportType=4', null,
		function(data) {
			var result = data.result.status;
			if (result == 'OK') {
				var entityList = data.entity.childList[0];
				var options = [];
				if(entityList.valueList && entityList.valueList.length>0){
					$.each(entityList.valueList, function(i, value){
						console.log(value)
						options.push('<option value="'+value.id+'" data-title-id="'+value.titleId+'">'+value.name+'</option>');
						if(selectIndex && i == selectIndex){
							options.push('<option index="'+i+'" selected="selected" value="'+value.code+'">'+value.name+'</option>');
						}else{
							options.push('<option index="'+i+'" value="'+value.code+'">'+value.name+'</option>');
						}
					});
					$('select[name="financeStatus"]').append(options.join(''));
				}
			} else {

			}
		});*/
buildShareResult("4","5812");
buildShareResult("4","3002");
buildShareResult("4","3008");
buildMoneyResult("1915");
function buildShareResult(reportType,relateId){
	sendGetRequest(platformUrl.getRelateTitleResults +reportType+"/"+relateId+"/"+projectInfo.id, null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK')
				{
					var entityList = data.entityList;
					if(entityList && entityList.length >0)
					{
						$.each(entityList,function(){
							var title = this;
							$("input[data-title-id='"+title.id+"']").attr({"data-type":title.type});	
							if(null!=title.resultList&&title.resultList.length>0){
								var _val =title.resultList[0].contentDescribe1;	
								//这个是公共的 所以需要判断ID
								if ((title.id =="3004"||title.id =="3010"||title.id =="3011"||title.id =="3012")&&_val) {
									if(_val.indexOf('.')>-1){
										var num=_val.split('.');
										if(num[0].length>9){
											_val=_val;
										}else{
											_val=Number(_val).toFixed(4)
										}
									}
									_val = _parsefloat(_val);
								}
								$(".new_color_black[data-title-id='"+title.id+"']").text(_val==undefined ?"—":_val);
								$("input[data-title-id='"+title.id+"']").val(_val).attr({"data-result-id":title.resultList[0].id});	
							}else{
								$(".new_color_black[data-title-id='"+title.id+"']").text("—");
							}
						});
					}
				}
			})
}
function buildMoneyResult(pid){
	sendGetRequest(platformUrl.getTitleResults + pid+'/'+projectInfo.id, null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK')
				{
					var entityList = data.entityList;
					if(entityList && entityList.length >0)
					{
						$.each(entityList,function(){
							var title = this;
							$("input[data-title-id='"+title.id+"']").attr("data-type",title.type);	
							if(null!=title.resultList&&title.resultList.length>0){
								var _val = title.resultList[0].contentDescribe1;
								_val=_parsefloat(_val);
								$(".new_color_black[data-title-id='"+title.id+"']").text(title.resultList[0].contentDescribe1==undefined ?"—":_val);
								$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1==undefined ?"":_val).attr({"data-result-id":title.resultList[0].id});	
							}else{
								$(".new_color_black[data-title-id='"+title.id+"']").text("—")
							}
						});
					}
				}
			})
}
//本轮融资轮次
financeRound();
function financeRound(){   
	var codeArr = ['NO1_1'];
	sendGetRequestTasync(platformUrl.queryProjectAreaInfo + pid +"/", codeArr, 
			function backFun(data){
				var result = data.result.status;
				if (result == 'OK') {
					var entityList = data.entity.childList;
					if(entityList && entityList.length >0)
					{
						$.each(entityList,function(){
							var title = this;
							if(null!=title.resultList&&title.resultList.length>0){
								$(".new_color_black[data-title-id='"+title.id+"']").text(title.resultList[0].valueName==undefined ?"—":title.resultList[0].valueName).attr({"value":title.resultList[0].valueId,"data-result-id":title.resultList[0].id});
								//$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1).attr("resultId",title.resultList[0].id);	
							}
						});
					}
					
				}
			});
}

//给input赋予tochange属性
$("input[data-title-id]").on("input",function(){
	$(this).attr("tochange",true);
})
$("input[data-title-id=\"1816\"]").attr("tochange",true);
