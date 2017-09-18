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
		
//		UM.getEditor('editor');
		var describeUm2 = UM.getEditor('describe_editor2');
		var companyUm = UM.getEditor('company_editor');
		var portraitUm = UM.getEditor('portrait_editor');
		var operationUm = UM.getEditor('operation_editor');
		var businessUm = UM.getEditor('business_editor');
		var industryUm = UM.getEditor('industry_editor');
		var analysisUm = UM.getEditor('analysis_editor');
		var nextFinancingUm = UM.getEditor('next_financing_editor');
		//统一显示
		 $('.edui-icon-fullscreen').on('click',function(){
				$('body').css('padding-bottom','300px')
		})
		if(isTransfering == 'true')
		{
			$('[data-on="data-open"]').addClass('limits_gray');
		}
		$('[data-on="data-open"]').on('click',function(){
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
			responseData();   //反显数据
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
		})
		//统一关
		$('[data-on="close"]').on('click',function(){
			var close=$(this).attr('data-name')
			$('.'+close+'_on').hide();
			$('.'+close+'_center').show();
			$('.bj_hui_on').hide();
			$('.tip-yellowsimple').hide();
			$("label.error").remove();
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
			$("#describe_editor").val($("#describe_show").text());
			$("#describe_editor2").html($("#describe2_show").html());
			$("#company_editor").html($("#location_show").html());
			$("#portrait_editor").html($("#portrait_show").html());
			$("#business_editor").html($("#business_model_show").html());
			$("#operation_editor").html($("#operational_data_show").html());
			$("#industry_editor").html($("#industry_analysis_show").html());
			$("#analysis_editor").html($("#analysis_show").html());
			$("#next_financing_editor").html($("#next_financing_source_show").html());
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
			$("#project_contribution").text(typeof(projectInfo.projectContribution)=="undefined"?"--":(projectInfo.projectContribution==0?"--":projectInfo.projectContribution));
			$("#project_valuations").text(typeof(projectInfo.projectValuations)=="undefined"?"--":(projectInfo.projectValuations==0?"--":projectInfo.projectValuations));
			$("#project_share_ratio").text(typeof(projectInfo.projectShareRatio)=="undefined"?"--":(projectInfo.projectShareRatio==0?"--":projectInfo.projectShareRatio));
			$("#projectProgress").text(projectInfo.progress);
			$("#projectStatusDs").text(projectInfo.projectProgress=="projectProgress:10"?"":projectInfo.projectStatusDs);
			$("#financeStatusDs").text(projectInfo.financeStatusDs==null?"不明确":projectInfo.financeStatusDs);
			$("#finalValuations").text(typeof(projectInfo.finalValuations)=="undefined"?"--":(projectInfo.finalValuations==0?"--":projectInfo.finalValuations));
			$("#finalContribution").text(typeof(projectInfo.finalContribution)=="undefined"?"--":(projectInfo.finalContribution==0?"--":projectInfo.finalContribution));
			$("#finalShareRatio").text(typeof(projectInfo.finalShareRatio)=="undefined"?"--":(projectInfo.finalShareRatio==0?"--":projectInfo.finalShareRatio));
			$("#serviceCharge").text(typeof(projectInfo.serviceCharge)=="undefined"?"--":(projectInfo.serviceCharge==0?"--":projectInfo.serviceCharge));
			$("#industryOwnDs").text(projectInfo.industryOwnDs);
			$("#faName").text(projectInfo.faFlag==0?"无":projectInfo.faName);
		    $("#remarkStr").text(projectInfo.remark==""?"无":(projectInfo.remark==null?"无":projectInfo.remark));
			var ht=projectProgress(data)
			//$("#insertImg").html(ht);
			//详情展示投资形式处理
			$("#financeMode").text(typeof(projectInfo.fModeRemark)=="undefined"?"--":(projectInfo.fModeRemark==0?"--":projectInfo.fModeRemark));
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
			var p;
			var fs;
			
        $("[data-on='data-open']").click(function (){
        	    isDelete=[];
        	 
				if($(this).hasClass('limits_gray'))
				{
					return;
				}
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
				
				
			     radio_faFlag(projectInfo.faFlag);
				if(typeof(projectInfo.faFlag)!="underfined" && projectInfo.faFlag!=0){
					$('#faFlagEdit').prop("checked","true");
					$("#faNameEdit").val(projectInfo.faName);
					$("#faNameEdit").css("display","block");
				}else{
					$("#faFlag").prop("checked","true")
					$("#faNameEdit").val(projectInfo.faName);
					$("#faNameEdit").css("display","none");
				}
				 p=projectInfo.industryOwn;
			    fs=projectInfo.financeStatus;
			    var sectionName = $(this).data('name');
			    if('basic' == sectionName)
		    	{
			    	//融资
			    	sendGetRequest(platformUrl.getFinanceStatusByParent+"/getFinanceStatusByParent",null,CallBackB);
			    	sendGetRequest(platformUrl.searchDictionaryChildrenItems+"industryOwn",null,CallBackA);
			    	
			    	//initDialogVal();
		    	}
			
			})
				function CallBackB(data){
			    var _dom=$("#finance_status_sel");
			        _dom.html("");
			        _dom.append('<option value="">--请选择--</option>');
			    var childNum = _dom.find("option").length;
			    if(!childNum || childNum !=0 ){
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
			if(projectInfo.projectDescribeFinancing){
				console.log();
				$("#describe_editor").val(delHtmlTag(projectInfo.projectDescribeFinancing));
				$("#describe_show").html(projectInfo.projectDescribeFinancing);
				$("#descript").hide();
				$('.describe_show').show();
				display_show("describe_show");
			}else{
				$('.describe_show').hide();
				$("#describe_show").html('');
			}
			//业务亮点
			if(projectInfo.projectDescribe){
				$("#describe2_show").html(projectInfo.projectDescribe);
				describeUm2.setContent(projectInfo.projectDescribe);
				$("#descript").hide();
				$('.describe_show').show();
				display_show("describe2_show");
				//单独控制展开收起
				$("#describe2_show").css('height','70px');
				var PH1=$("#describe_show").height();
				var PH2=$("#describe2_show").height();
				$(".describe_show").css('height',PH1+PH2+92);
				$('.describe_show').delegate(".f4","click",function(){
					$(this).hide();
					$(this).siblings('.f3').show();
					$('#describe2_show').css('height','auto');
					var H1=$('#describe2_show').height();
					$('.describe_show').css('height',PH1+H1+92);
				}) 
				$('.describe_show').delegate(".f3","click",function(){
					$(this).hide();
					$(this).siblings('.f4').show();
					$("#describe_show").css('height',PH1);
					$('#describe2_show').css('height','70px');
					$('.describe_show').css('height',PH1+PH2+92);
				}) 
				
				
				//兼容历史数据-为空
				if(!projectInfo.projectDescribe){
					//$("#describe_show_div").hide();
					$("#describe2_show").html('');
					$("#describe_show").html(projectInfo.projectDescribeFinancing);
				}
				
				
			}else{
				//历史数据-为空
				if(!projectInfo.projectDescribeFinancing){
					$('.describe_show').hide();
					$("#describe2_show").html('');
				}else{
					//$("#describe2_show_div").hide();
					$("#describe2_show").html('');
				}
				
				
			}
			
			if(projectInfo.projectBusinessModel){
//				var um = UM.getEditor('business_editor');
				businessUm.setContent(projectInfo.projectBusinessModel);
				$("#business_model_show").html(projectInfo.projectBusinessModel)
				$("#business_model").hide();
				$('.business_model_show').show();
				display_show("business_model_show");
			}else{
				$("#business_model_show").html('')
				$('.business_model_show').hide();
			}
		  if(projectInfo.companyLocation){
//				var um = UM.getEditor('company_editor');
				companyUm.setContent(projectInfo.companyLocation);
				$("#location_show").html(projectInfo.companyLocation)
				$("#location").hide();
				$('.location_show').show();
				display_show("location_show");
			}else{
				$("#location_show").html('')
				$('.location_show').hide();
			}
			if(projectInfo.userPortrait){
//				var um = UM.getEditor('portrait_editor');
				portraitUm.setContent(projectInfo.userPortrait);
				$("#portrait_show").html(projectInfo.userPortrait);
				$("#portrait").hide();
				$(".portrait_show").show();
				display_show("portrait_show");
			}else{
				$("#portrait_show").html('')
				$(".portrait_show").hide();
			}
			if(projectInfo.prospectAnalysis){
//				var um = UM.getEditor('analysis_editor');
				analysisUm.setContent(projectInfo.prospectAnalysis);
				$("#analysis_show").html(projectInfo.prospectAnalysis)
				$("#analysis").hide();
				$(".analysis_show").show();
				display_show("analysis_show");
			}else{
				$("#analysis_show").html('');
				$(".analysis_show").hide();
			}
			if(projectInfo.operationalData){
//				var um = UM.getEditor('operation_editor');
				operationUm.setContent(projectInfo.operationalData);
				$("#operational_data_show").html(projectInfo.operationalData);
				$("#operational_data").hide();
				$(".operational_data_show").show();
				display_show("operational_data_show");
			}else{
				$("#operational_data_show").html('');
				$(".operational_data_show").hide();
			}
			if(projectInfo.industryAnalysis){
//				var um = UM.getEditor('industry_editor');
				industryUm.setContent(projectInfo.industryAnalysis);
				$("#industry_analysis_show").html(projectInfo.industryAnalysis);
				$("#industry_analysis").hide();
				$(".industry_analysis_show").show();
				display_show("industry_analysis_show");
			}else{
				$("#industry_analysis_show").html('');
				$(".industry_analysis_show").hide();
			}
			if(projectInfo.nextFinancingSource){
//				var um = UM.getEditor('next_financing_editor');
				nextFinancingUm.setContent(projectInfo.nextFinancingSource);
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
					$('#'+obj).parent().append(str);
					$('#'+obj).css({'height':'100px','overflow':'hidden'});
					$('#'+obj).parent().css('height','120px')
				}
			}
			$('.new_top_color_new').delegate(".f4","click",function(){
				$(this).hide();
				$(this).parent().children('.f3').show();
				$(this).parent().siblings('p').css('height','auto');
				var H1=$(this).parent().siblings('p').height();
				$(this).parent().parent().css('height',H1+20)
			}) 
			$('.new_top_color_new').delegate(".f3","click",function(){
				$(this).hide();
				$(this).parent().children('.f4').show();
				$(this).parent().siblings('p').css('height','100px');
				$(this).parent().parent().css('height','120px');
			}) 
			
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
			var finance_status=$("#finance_status_sel").val().trim();
			//var project_contribution=$("#project_contribution_edit").val()==""?0:$("#project_contribution_edit").val().trim();
			//var project_valuations=$("#project_valuations_edit").val()==""?0:$("#project_valuations_edit").val().trim();
			//var project_share_ratio=$("#project_share_ratio_edit").val()==""?0:$("#project_share_ratio_edit").val().trim();
			var finalcontribution=$("#finalContribution_edit").val()==""?0:$("#finalContribution_edit").val().trim();
			var finalvaluations=$("#finalValuations_edit").val()==""?0:$("#finalValuations_edit").val().trim();
			var finalshare_ratio=$("#finalShareRatio_edit").val()==""?0:$("#finalShareRatio_edit").val().trim();
			var serviceCharge=$("#serviceChargeedit").val()==""?0:$("#serviceChargeedit").val().trim();
			var faFlag=$('input:radio[name="faFlag"]:checked').val();
			var remark=$('#remark').val().trim();
			var faName="";
			if(faFlag=='0'){
				faName="";
			}else{
				faName=$("#faNameEdit").val();
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
				        obj.deliveryCurrency=jointDelivery.childNodes[2].childNodes[0].options[jointDelivery.childNodes[2].childNodes[0].selectedIndex].text;
				        obj.deliveryShareRatio=jointDelivery.childNodes[3].childNodes[0].value;
				        arr[i]=obj;
				}
			}
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
		  	               "serviceCharge":serviceCharge,
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


		/**
		 * 保存项目描述
		 */
		$("#save_describe").click(function(){
//			var um = UM.getEditor('describe_editor');
			var projectDescribe = describeUm2.getContent();
			var projectDescribeFinancing=$("#describe_editor");
			var textarea=projectDescribeFinancing.val();
			//var projectDescribeFinancing = describeUm2.getContent();
			if(pid != '' && beforeSubmitById("updateProjectDescribe")){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "projectDescribe" : projectDescribe,"projectDescribeFinancing":textarea}, saveSuccess);
			}
		});


		/**
		 * 保存项目描述
		 */
		$("#save_location").click(function(){
//			var um = UM.getEditor('company_editor');
			var companyLocation = companyUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject,{"id" : pid, "companyLocation" : companyLocation}, saveSuccess);
			}
		});

		/**
		 * 保存项目描述
		 */
		$("#save_portrait").click(function(){
//			var um = UM.getEditor('portrait_editor');
			var userPortrait = portraitUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "userPortrait" : userPortrait}, saveSuccess);
			}
		});
		/**
		 * 保存项目描述
		 */
		$("#save_business").click(function(){
//			var um = UM.getEditor('business_editor');
			var projectBusinessModel = businessUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "projectBusinessModel" : projectBusinessModel}, saveSuccess);
			}
		});
		/**
		 * 保存项目描述
		 */
		$("#save_operation").click(function(){
//			var um = UM.getEditor('operation_editor');
			var operationalData = operationUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "operationalData" : operationalData}, saveSuccess);
			}
		});


		/**
		 * 保存项目描述
		 */
		$("#save_industry").click(function(){
//			var um = UM.getEditor('industry_editor');
			var industryAnalysis = industryUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "industryAnalysis" : industryAnalysis}, saveSuccess);
			}
		});

		/**
		 * 保存项目描述
		 */
		$("#save_analysis").click(function(){
//			var um = UM.getEditor('analysis_editor');
			var prospectAnalysis = analysisUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "prospectAnalysis" : prospectAnalysis}, saveSuccess);
			}
		});
		/**
		 * 保存项目描述
		 */
		$("#save_next_financing").click(function(){
//			var um = UM.getEditor('next_financing_editor');
			var nextFinancingSource = nextFinancingUm.getContent();
			if(pid != ''){
				sendPostRequestByJsonObj(platformUrl.updateProject, {"id" : pid, "nextFinancingSource" : nextFinancingSource}, saveSuccess);
			}
			
			
		});
});
$("input:radio[name='faFlag']").change(function() {
	// 0 y; 1 n
	var $selectedvalue = $("input:radio[name='faFlag']:checked").val();
	radio_faFlag($selectedvalue);
});

//是否为来源于中介
function radio_faFlag(isContactsV){
	console.log(isContactsV);
	var phone = $("input[name='faName']");
	if (isContactsV == 0 || isContactsV == '0') {
		$("input[name='faName']").hide();
		$("#faNameEdit-error").remove();
	} else if (isContactsV == 1 || isContactsV == '1') {
		$("input[name='faName']").show();
	} 
}
function jointDeliveryList(list){
	$("#jointDelivery").children().remove(); 
	var html="<tr><th>投资人/投资机构</th><th>投资金额（万元）</th><th>币种</th><th>占股比例（%）</th></tr>";
	var temp=$("#jointDelivery");
	temp.append(html);
	for(var i=0;i<list.length;i++){
	   var html="<tr><td>"+list[i].deliveryName+"</td><td>"+list[i].deliveryAmount+"</td><td>"+list[i].deliveryCurrency+"</td><td>"+list[i].deliveryShareRatio+"</td></tr>";
	   temp.append(html);
	}	
}
function jointDeliveryEdit(list){
	$(".inputsForm").children(".block_inputs").remove(); 
	for(var i=0;i<list.length;i++){
		var inputsRow='<div class="block_inputs">'
	        +'<span><input placeholder="填写机构名称" data-id="'+list[i].id+'" value="'+list[i].deliveryName+'" class="name" name="deliveryName'+i+'" required maxLength="50" data-msg-required="<font color=red>*</font><i></i>必填，且不超过50字" data-rule-delivery="true" data-msg-delivery="<font color=red>*</font><i></i>不能为空"/></span>'
	        +'<span><input placeholder="填写投资金额（万元）" value="'+list[i].deliveryAmount+'" name="deliveryAmount'+i+'" required data-rule-amount="true" data-msg-required="<font color=red>*</font><i></i>支持0-1000000的四位小数" data-msg-amount="<font color=red>*</font><i></i>支持0-1000000的四位小数"/></span>'
	        +'<span><select><option value="">人民币</option><option value="">美元</option></select></span>'
	        +'<span><input placeholder="填写占股比例（%）"  value="'+list[i].deliveryShareRatio+'" name="deliveryShareRatio'+i+'" required data-rule-share="true" data-msg-required="<font color=red>*</font><i></i>0到100之间的两位小数" data-msg-share="<font color=red>*</font><i></i>0到100之间的两位小数"/></span>'
	          +'<span class="del">删除</span>'
	          +'</div>';
		$(".inputsForm").append(inputsRow);
	}
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
//法人信息

/*sendGetRequest(platformUrl.queryAllTitleValues+'FNO5?reportType=4', null,
		function(data) {
			var result = data.result.status;
			if (result == 'OK') {
				var entity = data.entity;
				console.log("111111111111")
				console.log(entity);
				console.log("111111111111")
				$("#page_list").tmpl(entity).appendTo('#page_all5');
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
							if(null!=title.resultList&&title.resultList.length>0){
								$(".new_color_black[data-title-id='"+title.id+"']").text(title.resultList[0].contentDescribe1==undefined ?"未填写":title.resultList[0].contentDescribe1);
								$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1).attr("resultId",title.resultList[0].id);	
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
							console.log(title);
							if(null!=title.resultList&&title.resultList.length>0){
								$(".new_color_black[data-title-id='"+title.id+"']").text(title.resultList[0].contentDescribe1==undefined ?"未填写":title.resultList[0].contentDescribe1);
								$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1).attr("resultId",title.resultList[0].id);	
							}
						});
					}
				}
			})
}
	
