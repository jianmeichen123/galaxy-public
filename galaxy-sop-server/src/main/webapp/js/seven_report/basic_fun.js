var key = Date.parse(new Date());
var keyJSON={};
var deleteJSON={};
var totalMoney;
var remainMoney;


function toBachUpload(fileurl,sendFileUrl,fieInputId,selectBtnId,submitBtnId,containerId,fileListId,paramsFunction,deliver_form,callBackFun,id_code) {
	var params = {};
	var uploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : selectBtnId, // you can pass an id...
		//container: containerId, // ... or DOM Element itself
		multi_selection:false,
		url : fileurl,
		rename : true,
		unique_names:true,
		filters : {
			max_file_size : '2mb',
			mime_types: [
					{title : "Image files", extensions : "jpg,png,gif,bmp"}
			]
		},
		init: {
			PostInit: function(up) {
				params = paramsFunction;
			},
			BeforeUpload:function(up,file){
				var name = file.name.replace(/\s+/g,"");
				params["fileName"] = name;
			},
			FileUploaded:function(up,file,rtn){
             }, 
			FilesAdded: function(up, files) {
				params = paramsFunction;
				var imglength = $('#'+fieInputId).children("li").length;
				
				if(imglength == 4){
					//layer.msg("不能超过5张照片!");
					var typeid = fieInputId.replace("edit-","");
					$("#h_imgs_add_"+typeid).hide();
					//return;
				}
				for(var i = 0, len = files.length; i<len; i++){
					var file_name = files[i].name; //文件名
					//构造html来更新UI
					!function(i){
						 previewImage(files[i], function (imgsrc) {
		                                $('#'+fieInputId).html($('#'+fieInputId).html() +
		                                    '<li class="pic_list fl" id="' + files[i].id + '">'
		                                    +'<a href="javascript:;" class="h_img_del"  code="'+"delete_"+id_code+'" data-val=' + files[i].id +
							              ' data-title-val=' + fieInputId.replace("edit-","") +
							              '></a>' +'<img src="' + imgsrc + '" name="' + files[i].name + '" /></li>');
		                            })
				    }(i);
				    params.newFileName = files[i].id;
				    up.settings.multipart_params = params;
					uploader.start();
				}
				
			},
			UploadProgress: function(up, file) {
			},
			UploadComplete: function(up, files){//所有都上传完成
				
		    },
			Error: function(up, err) {
				if(err.code==-600){
					layer.msg("图片不能大于2M");
				}
			}
			
		}
	});
	uploader.init();
}
  $(document).on('click', '.pic_list a.h_img_del', function () {
      $(this).parent().remove();
      var _this = $(this);
      var toremove = '';
      var id = $(this).attr("data-val");
      var deleteCode = $(this).attr("code");
      if(deleteJSON[deleteCode]){
          deleteJSON[deleteCode] = deleteJSON[deleteCode] +","+id;
      }else{
          deleteJSON[deleteCode] = id;
      }
  	  var params = {};
	  params.projectId =  projectInfo.id;
	  params.fileReidsKey = key;
	  params.newFileName = id;
      //文件id
      sendPostRequestByJsonObj(Constants.sopEndpointURL+'galaxy/informationFile/deleteRedisFile',params,function(data){
			//进行上传
			var result = data.status;
			if(result == "OK"){
			   //删除
			   var titleId = _this.attr("data-title-val");
	           var imglength = $('#edit-'+titleId).children("li").length;
	           if(imglength == 4){
	             $("#h_imgs_add_"+titleId).show();
	           }
			}else{
				layer.msg("删除失败!");
			}
	  });
      
   
  });
  
  function previewImage(file,callback){//file为plupload事件监听函数参数中的file对象,callback为预览图片准备完成的回调函数
		if(!file || !/^image/.test(file.type)) return; //确保文件是图片
		var fr = new mOxie.FileReader();
		fr.onload = function(){
			callback(fr.result);
			//fr.destroy();
			fr = null;
		}
		fr.readAsDataURL(file.getSource());
	}  
//通用取消编辑
$('div').delegate(".h_cancel_btn","click",function(event){
	event.stopPropagation();
	var _this = $(this).parents(".radius");
	var id_code = $(this).attr('attr-hide');
	var session_id = $(this).attr('attr-session')
	$('#'+id_code).show();
	$('#b_'+id_code).remove();
	$(".bj_hui_on").hide();
	btn_disable(0);
	$(".h#a_"+id_code).css("background","#fff");
	deletedRowIds = new Array();
	deleteJSON={};
	toggle_btn($('.anchor_btn span'),0,_this);
	//团队
	dtWidth();
	//判断团队-股权合理性
    if (session_id=='1324')
    {
        deletedRowIdsGq = new Array();
    }
    $.each(_this.find("table"),function(){
    	var code=$(this).attr("data-code");
    	 resizetable($("table[data-code='"+code+"']"));
    })
    
   
});

//通用编辑显示
var reportType="";
$('div').delegate(".h_edit_btn","click",function(event){
    key = Date.parse(new Date());
	var section = $(this).parents('.section');
	var id_code = $(this).attr('attr-id');
	var str ="";
	if($(this).parents(".h_btnbox").siblings(".h_title").find("span").is(":visible")){
		str =" <span style='color:#ff8181;display:inline'>（如果该项目涉及此项内容，请进行填写，反之可略过）</span>";
	}else{
		str ="";
	}
	//特殊处理决策报告-投决会结果>投资金额
	var len=$(".pagebox table[data-code=\"grant-part\"]").find("tr").length;   //获取分期注资表格的长度
	$(this).attr("data-table-len",len);
	var lenn=$(this).attr("data-table-len");
	var type=id_code.split("NO")[0];
	switch(type){
	   case "D":
		  reportType="2";
		  break;
	   case "O":
			  reportType="7";
			  break;
	   case "G":
			  reportType="5";
			  break;
	   case "P":
			  reportType="3";
			  break;
	   default:
		   reportType="";	  
	} 
	if(reportType=="3"){   //获取股权占比值
		var stockPencent=$("dd[data-title-id=\"3010\"]").text();
		var tz_money=$("dd[data-title-id=\"3004\"]").text();
		var res_money=$("dd[data-title-id=\"3012\"]").text()=="未填写"?"":$("dd[data-title-id=\"3012\"]").text();
	}
	keyJSON["b_"+id_code]=key;
	var sec = $(this).closest('.section');
	var sTop=$(window).scrollTop();
	event.stopPropagation();
	 sendGetRequest(platformUrl.queryAllTitleValues + id_code+"?reportType="+reportType, null,
		function(data) {
			var result = data.result.status;
			if (result == 'OK') {
				var entity = data.entity;
				$("#ifelse").tmpl(entity).appendTo("#a_"+id_code); 
				tips("12",$(".tips12")) 
				if(id_code=="DNO5_1" || id_code=="GNO5_1" ){   //竞争俩字
					$("#b_"+id_code).closest(".section").find(".h_title").text("竞争");
				}
				sec.showResults();
				bindChange();
				bindChangeType13();
				$(".h#a_"+id_code).css("background","#fafafa");
				$("#"+id_code).hide();
				$(".bj_hui_on").show();
				validate();
				//特殊处理决策报告-投决会结果>投资金额
				if(lenn>1){
					$("input[data-title-id=\"3004\"]").addClass("disabled").attr("readonly","readonly");
				}
				//调整表格
				$("table").css({"width":"80%","table-layout":"fixed"});
				$(".h_edit .sign_title").css("margin-bottom","20px");
				//团队核心亮点与团队核心能力联动修改其他值
				$("input").on("input",function(){
					var titleId=$(this).parent("li").prev("li").attr("data-title-id");
					var val=$(this).val();
					if(titleId=="1364"){
						var inputText=$(this).closest(".mb_16").siblings().find("dt[data-title-id='"+titleId+"']").siblings("dd").find("input[type='text']");
						$(inputText).val(val);
					}
				})
				//编辑显示隐藏按钮不可用
				btn_disable(1);
				setReqiured();
				//isMust("#b_"+id_code);	
				$("#b_"+id_code).validate();
				$(".bj_hui_on").show();
				check_table_tr_edit();
				section.find(".h_title span").remove();
				section.find(".h_title").append(str);
				
				//运营报告中【融资估值中分期添加按钮隐藏】
				if(reportType=="7" && id_code=="ONO9_2"){
					$("#add_row").remove();
				}
				if(res_money){ 
					$("input[data-title-id=3012]").val(finalFloat(res_money,6)); 
				}
				//计算项目估值
				if(reportType=="3"){ 
					$(".tz_money").val(tz_money);  //投资金额;
					$.each($("input[data-type='19']"),function(){
						var valRuleFormula=$(this).attr("data-valruleformula");
						if(valRuleFormula){
							var valRule=valRuleFormula.split("=");
							var valRule1="";
							if(null!=valRule[1]){
								valRule1=valRule[1].split("/");
							}
							var result=valRule[0];
							var parent=valRule1[0];
							var children=valRule1[1];
						}
						function calculationValuations(){  //编辑股权占比
							var projectParent = $("dd[data-title-id='"+parent+"']").text();
							var projectChildren = $("input[data-title-id='"+children+"']").val();
							if(projectParent !="未填写" && projectChildren !="未填写" && projectParent > 0 && projectChildren > 0){
								return finalValue(projectParent,projectChildren); 
							}else{
								return null;
							}
						}
						function calculationValuationsParent(){  //编辑投资金额
							var projectParent = $("input[data-title-id='"+parent+"']").val();
							var projectChildren = $("dd[data-title-id='"+children+"']").text();
							if(projectParent > 0 && projectChildren > 0){
								return finalValue(projectParent,projectChildren) 
							}else{
								return null;
							}
							
						}
						$("input[data-title-id='"+result+"']").attr("guzhi", calculationValuations());
					   $("div").delegate("input[data-title-id='"+parent+"']","blur",function(){   	
							var valuations = calculationValuationsParent();
							if(valuations != null){
								$("input[data-title-id='"+result+"']").val(valuations).attr("guzhi",valuations);
								$("input[data-title-id='"+result+"']").parents("dd").prev().attr("tochange",true);
								$("input[type='hidden'].money").val(valuations);
							}else{ 
							}
						});
						$("div").delegate("input[data-title-id='"+children+"']","blur",function(){ 
							var val=$(this).val();
							var valuations = calculationValuations();
							if(stockPencent!="未填写" && val=="" || tz_money=="未填写"){
								$("input[data-title-id='"+result+"']").val("");
								$("input[data-title-id='"+result+"']").parents("dd").prev().attr("tochange",true);
								$("input[type='hidden'].money").val("");
							}else{
								if(valuations != null){
									$("input[data-title-id='"+result+"']").val(valuations).attr("guzhi",valuations);
									$("input[data-title-id='"+result+"']").parents("dd").prev().attr("tochange",true);
									$("input[type='hidden'].money").val(Number(valuations).toFixed(4));
								}else{ 
								}
							}
						})
					})
				}else{
					$.each($("input[data-type='19']"),function(){
						var valRuleFormula=$(this).attr("data-valruleformula");
						if(valRuleFormula){
							var valRule=valRuleFormula.split("=");
							var valRule1="";
							if(null!=valRule[1]){
								valRule1=valRule[1].split("/");
							}
						
							var result=valRule[0];
							var parent=valRule1[0];
							var children=valRule1[1];
						}
						function calculationValuations(){ 
							var projectParent = $("input[data-title-id='"+parent+"']").val();
							var projectChildren = $("input[data-title-id='"+children+"']").val();
							var cell=$("input[data-title-id='"+children+"']").attr("data-content");
							if(projectParent > 0 && projectChildren > 0){ 
								return finalValue(projectParent,projectChildren) 
							}else{
								return null;
							}
							
						}
						$("input[data-title-id='"+result+"']").attr('guzhi',calculationValuations()); 
						$("div").delegate("input[data-title-id='"+parent+"']","blur",function(){ 
							var valuations = calculationValuations(); 
							if(valuations != null){
								$("input[data-title-id='"+result+"']").val(valuations).attr('guzhi',valuations);
								$("input[data-title-id='"+result+"']").parents("dd").prev().attr("tochange",true); 
							}else{ 
								$("input[data-title-id='"+result+"']").removeAttr('guzhi');
							}
						});
						$("div").delegate("input[data-title-id='"+children+"']","blur",function(){ 
							var valuations = calculationValuations();
							if(valuations != null){
									$("input[data-title-id='"+result+"']").val(valuations).attr('guzhi',valuations);
									$("input[data-title-id='"+result+"']").parents("dd").prev().attr("tochange",true);
							}else{  
								$("input[data-title-id='"+result+"']").removeAttr('guzhi');
							}
						})
					})
				} 
				//文本域剩余字符数
				var textarea_h = section.find('.textarea_h');
				for(var i=0;i<textarea_h.length;i++){
					var len=textarea_h.eq(i).val().length;
					var initNum=textarea_h.parent('dd').find(".num_tj").eq(i).find("label").text();
					textarea_h.parent('dd').find(".num_tj").eq(i).find("label").text(initNum-len);
				}
				 //文本域自适应高度 
				for(var i=0;i<$("textarea").length;i++){
					var textareaId=$("textarea").eq(i).attr("id");
					autoTextarea(textareaId);
				}
				var files = $("#"+id_code).nextAll().find("input[type='file']");
				var selectids = [];
				
				for(var i = 0;i < files.length; i++) {
					  var select_id = files.eq(i).attr("id");
					  var title_id = $("#"+select_id).attr("file-title-id");
						
						var params = {};
						params.fileReidsKey = key;
						params.projectId =  projectInfo.id;
						params.titleId = title_id;
						toBachUpload(Constants.sopEndpointURL+'galaxy/informationFile/sendInformationByRedis',Constants.sopEndpointURL+'galaxy/informationFile/operInformationFile','edit-'+title_id,select_id,"h_save_btn","",null,params,null,null,id_code);
						
						var data={};
						data.projectId = projectInfo.id;
						data.titleId = title_id;
						//打开显示历史图片记录
						sendPostRequestByJsonObj(
						Constants.sopEndpointURL+'galaxy/informationFile/getFileByProject' , 
						data,
						function(data) {
							var result = data.result.status;
							if (result == 'OK') {
								var files = data.entityList;
								var html = $('#'+'edit-'+title_id).html();
								if(files.length > 0){
									for(var i = 0;i < files.length; i++){
										html +=  '<li class="pic_list fl" id="' + files[i].id + '">'
							              +'<a href="javascript:;" class="h_img_del" code="'+"delete_"+id_code+'" data-val=' + files[i].id +
							              ' data-title-val=' + title_id +
							              '></a>' +'<img src="' + files[i].fileUrl + '" name="' + files[i].fileName + '" /></li>';
									       if(i == 4){
							            	  $("#h_imgs_add_"+title_id).hide();
							              }
									}
								}
								$('#'+'edit-'+title_id).html(html);
								
							} else {

							}
			          }); 
						
						
				}
				edit_bsaicfun();
			}else{
				
			}
	}) 
    $(".editable").each(function(){resizetable($(this))})
	//编辑表格显示隐藏
	 check_table();
});
//
function resizetable(table){
    var dict_map = {}
  /*  var fields_json = {
        "finance-history":["field6","field7","field8"],
        "equity-structure":["field3","field4"],
        "investor-situation":["field1","field6"]
    }*/
    var title_id = table.attr("data-title-id")
    var  code = table.attr("data-code")
    var fields_json=tableDictColumn(code);
    if (fields_json && code in fields_json){
        var fields = fields_json[code]
        for(var i=0;i<fields.length;i++){
            var v = fields[i]
            var dict = dictCache(title_id,code,v)
            dict_map[title_id+"-"+code+"-"+v] = dict
            table.find('td[data-field-name="'+v+'"]').each(function(){
                var o = $(this)
                o.text(dict[o.text()])
            })
        }
    }
}
//隔轮融资的估值及时间表
function customBuilder()
{
	var div = $("div[data-title-id='1938']");
	var titleId = div.data('titleId');
	var dd_box =$("<dd class='dd_field'></dd>")
	var table = $("<table data-title-id='"+titleId+"'></table>")
	var header = $("<tr></tr>");
	var row = $("<tr></tr>");
	
	var dls = $("dl[data-parent-id='"+titleId+"']");
	$.each(dls,function(){
		var dl = $(this);
		var name = dl.find('dt').text();
		var dd = dl.find('dd');
		header.append("<th>"+name.replace('：','')+"</th>");
		row.append("<td class='field' data-title-id='"+dd.data('titleId')+"'>未填写</td>")
	});
	dls.remove();
	table.append(header);
	table.append(row);
	dd_box.append(table);
	div.after(dd_box);
	
}
/**
 * 团队相关页面
 * 
 * 
 */

function editRow(ele)
{
	var code = $(ele).closest('table').data('code');
	var row = $(ele).closest('tr');
	var txt= $(ele).text();
	var valtr=row.find("td[data-field-name='field3']").text(); // 当前编辑的金额
	var id_code=$(ele).closest('form').siblings('.h_look').attr('id') || $(ele).closest('.h_look').attr('id');
	var id_code_new='';
	if(id_code=='DNO5_5' || id_code=='GNO5_5'){
		id_code_new='NO5_5';
	}
	if(id_code=='DNO5_4' || id_code=='GNO5_4'){
		id_code_new='NO5_4';
	}
	if(id_code_new=='NO5_5' || id_code_new=='NO5_4'){   //显在竞争对手||潜在竞争对手表格特殊处理
		if(txt=='查看'){
			var flag=false;
			var formObj=$(ele).closest('table');
			if(formObj.is('.editable')){
				flag=true;
			}
			showRowCompete(ele,id_code,id_code_new,row,code,flag);
		}else{
			editRowCompete(ele,id_code,id_code_new,row,code);
		}
	}else{
		if(code == 'grant-part' || code == 'grant-actual'){
			 //获取表格上的计划金额之和
			 var trs=$(ele).closest("table[data-code='"+code+"']").find("tr");
			 var sum=0;
			 $.each(trs,function(){ 
				 //sum+=Number($(this).find("td[data-field-name='field3']").text());
				 sum=accAdd(sum,Number($(this).find("td[data-field-name='field3']").text()));
			 })
		}
		//分期注资验证
		if(txt == '编辑')
		{
			if(code == 'grant-part' && !getTotalAppr(projectInfo.id, true))
			{
				$.getHtml({
					url:'../../html/beforeSave.html',  
					data:"",//传递参数
					okback:function(){
						$(".before_save_tc").addClass("stag_plan")
						$(".before_save_btn").remove();
						$(".deltc").html("<b class=\"null tips_d\">ico</b><span>无法添加分期注资计划,需要补全以下信息:投决会结果中的投资金额、股权占比、项目估值、星河投资方主体</span>");
					}//模版反回成功执行	
				});
				return false;
			}
		}
		
		$.getHtml({
			url:getDetailUrl(code),//模版请求地址
			data:"",//传递参数
			okback:function(){
				var title = $("#pop-title");
				 if(txt=="查看"){
						$("#detail-form").hide();
						$(".button_affrim").hide();
						$('#detail-form_look_over').show();
						$("#delivery_popup_name").text("查看交割事项");
						 $('#grant_popup_name').html('查看分期注资计划');
						 $('#finace_popup_name').html('查看融资历史');
						 $("#complete_title").html('查看综合竞争比较');
						 $("#pop-title-gs").text('查看同类公司');
						 $("#pop-title-time").text('查看里程碑和时间节点');
						 $("#pop-title").text('查看分期注资计划');
						 $("#pop-title-yy").html('查看运营指标');
						  $(".appr_part_add").hide();   //添加实际注资计划按钮
					}else{
						$(".see_block").hide();
						$('#detail-form_look_over').hide();
						$("#delivery_popup_name").text("编辑交割事项");
						 $('#grant_popup_name').html('编辑分期注资计划');
						 $('#finace_popup_name').html('编辑融资历史');
						 $("#complete_title").html('编辑综合竞争比较');
						 $("#pop-title-tz").html('编辑投资人');
						 $("#pop-title-share").html('编辑股东');
						 $("#pop-title-yy").html('编辑运营指标');
						 $("#pop-title-gs").text('编辑同类公司');
						 $("#pop-title-time").text('编辑里程碑和时间节点');
						 $("#pop-title").text('编辑分期注资计划');
						 
					}
				$("#detail-form input[name='subCode']").val(code);
				$("#detail-form input[name='titleId']").val(row.parent().parent().attr("data-title-id"));
				//计算剩余金额
				getTotalAppr(projectInfo.id);
				
				var totalMoneyPart=$("#totalMoneyPart").val();  
				$("#formatRemainMoney").text(_parsefloat(accSub(totalMoneyPart,sum)));
				$(".moeny_all input").on("blur",function(){ 
	            	var val=$(this).val();
	            	var errorTips=$(this).siblings(".error");
	            	if(errorTips.is(":visible")){
	            		val=0;
	            		var swich = accSub(totalMoneyPart,sum)
                		var formatRemainMoneyVal=accSub(swich,val);
                		formatRemainMoneyVal = accSub(formatRemainMoneyVal,val);
                		$("#formatRemainMoney").text(_parsefloat(formatRemainMoneyVal)); 
	            	}else{
	            		if(Number(totalMoneyPart)-(sum-Number(valtr))-val>0){ 
							var swich = accSub(totalMoneyPart,sum)
	                		var formatRemainMoneyVal=accAdd(swich,valtr);
	                		formatRemainMoneyVal = accSub(formatRemainMoneyVal,val);
	                		 $("#formatRemainMoney").text(_parsefloat(formatRemainMoneyVal));
	                	}else{
	                		$("#formatRemainMoney").text(0);
	                	}
	            	}
	            }) 
	            $(".remainMoney span").text(finalFloat(accSub(totalMoneyPart,sum),6));  //查看时的剩余金额
				selectContext("detail-form");
				$.each($("#detail-form").find("input[type='text'],input[type='radio'],input[type='checkbox'],input[type='hidden'],select, textarea"),function(){
					var ele = $(this);
					var name = ele.attr('name');
					var type=ele.attr('type');
					var idVal=ele.attr('id');
					var val_text =row.data(name);
					if(type=="radio"){
						if(ele.val()==row.data(name)){
							ele.attr("checked","chedcked");
						}
					}else if (type=="text"){
						if(code=="equity-structure"||code=="valuation-reference"||code=="share-holding"){
							if(name=="field2"){
								val_text = _parsefloat(val_text)
							}					
						}
						if(code=="competition-comparison"||code=="grant-part"){					
							if(name=="field3"){
								val_text = _parsefloat(val_text)
							}
						}
						if(code=="finance-history"||code=="investor-situation"){
							if(name=="field3"||name=="field4"||name=="field5")
							val_text = _parsefloat(val_text);
						}
						ele.val((row.data(name)==undefined || row.data(name)=="undefined")?"":val_text);
					}else{
						ele.val((row.data(name)==undefined || row.data(name)=="undefined")?"":val_text);
					}
					
				});
				//查看显示
				$.each($(".see_block").find("dd[name]"),function(){
					var ele = $(this);
					var name = ele.attr('name');
					var val_text=  row.data(name);				
					if(code=="equity-structure"||code=="valuation-reference"||code=="share-holding"){
						if(name=="field2"){
							val_text = _parsefloat(val_text)
						}					
					}
					if(code=="competition-comparison"||code=="grant-part"){					
						if(name=="field3"){
							val_text = _parsefloat(val_text)
						}
					}
					if(code=="finance-history"||code=="investor-situation"){
						if(name=="field3"||name=="field4"||name=="field5")
						val_text = _parsefloat(val_text)
					}
					ele.text(val_text);
					//历史融资特殊处理select,radio
					$.each($("#financeDetail select"),function(){
						var selectId=$(this).val();
						var selectVal=$("#financeDetail select").find("option[value='"+selectId+"']").text();
						if(row.data(name)==selectId && selectId!=""){
							ele.text(selectVal);
						}
						var val=$(".see_block").find("dd[name='field6']").text();
						if(row.data('field3')==""){
							$(".see_block").find("dd[name='field3']").text(_parsefloat(row.data('field3')));
						}else if(row.data('field3')==undefined || row.data('field3')==null){
							$(".see_block").find("dd[name='field3']").text('');
						}else{
							$(".see_block").find("dd[name='field3']").text(_parsefloat(row.data('field3'))+'万'+val);
						}
						if(row.data('field5')==""){
							$(".see_block").find("dd[name='field5']").text(_parsefloat(row.data('field5')));
						}else if(row.data('field5')==undefined || row.data('field5')==null){
							$(".see_block").find("dd[name='field5']").text('');
						}else{
							$(".see_block").find("dd[name='field5']").text(_parsefloat(row.data('field5'))+'万'+val);
						}
						
						
					});
					$.each($("#financeDetail input[type='radio']"),function(){
						var selectId=$(this).val();
						var selectVal=$("#financeDetail").find("input[type='radio'][value='"+selectId+"']").parent().text();
						if(row.data(name)==selectId){
							ele.text(selectVal);
						}
					});
					
				})
				//估值显示guzhi属性融资历史
				if($("#detail-form").hasClass("guzhi_pop")){ 
					var projectParent = $("input[name='field3']").val();
					var projectChildren = $("input[name='field4']").val();
					var valuations = finalValue(projectParent,projectChildren);
					if(projectParent!=''&&projectChildren!=''){
						$("input[name='field5']").attr("guzhi",valuations);
					}
				}
				//特殊处理带万元单位的查看
				$.each($(".see_block").find("dd.money[name]"),function(){
					var ele = $(this);
					var name = ele.attr('name');
					if(row.data(name)==""){
						ele.text(_parsefloat(row.data(name)));
					}else if(row.data(name)==undefined || row.data(name)==null){
						ele.text("");
					}else{
						ele.text(_parsefloat(row.data(name))+'万元');
					}
				})
				//特殊处理带%单位的查看
				$.each($(".see_block").find("dd.percent[name]"),function(){
					var ele = $(this);
					var name = ele.attr('name');
					if(row.data(name)==""){
						ele.text(_parsefloat(row.data(name)));
					}else if(row.data(name)==undefined || row.data(name)==null){
						ele.text("");
					}else{
						ele.text(_parsefloat(row.data(name))+'%');
					}
				})
				//融资查看弹窗-付款条件特殊处理
				var h=$(".see_block dd[name='field4']").height();
				if(h>40){
					$(".injection").find(".see_more").show();
					$(".injection .fmdl dd[name=\"field4\"]").css({"height":"22px","overflow":"hidden","margin-right":'0'});
					var span='<span>...</span>';
					$(".injection .fmdl dd[name=\"field4\"]").after(span);
					$(".see_more .show").click(function(){
						$(this).hide();
						$(this).siblings().show();
						$(".injection .fmdl dd[name=\"field4\"]").css({"height":"auto"});
						$(".injection .fmdl dd[name=\"field4\"]").next("span").hide();
					});
					$(".see_more .hide").click(function(){
						$(this).hide();
						$(this).siblings().show();
						$(".injection .fmdl dd[name=\"field4\"]").css({"height":"22px"});
						$(".injection .fmdl dd[name=\"field4\"]").next("span").show();
					})
				}else{
					$(".injection").find(".see_more").hide();
				}
				var height=$(".see_block dd[name='field4']").height();
				if(height>60){
					
				}
				//运营报告和决策报告分期拨款有注资计划不能编辑
				if(reportType == 3 || reportType == 7){
					if(row.data("dataList"))
					{
						if(row.data("dataList").length > 0){
							$("#field3").attr("readonly","readonly");
							$("#field3").addClass("disabled");
							$("#editMoney").attr("display","block");
						}
					}
				}
				//运营 报告嵌套表格处理
				if(reportType == 7){
					if(row.data("dataList"))
					{
						var tableList = row.data("dataList");
						tableList.sort(function(a,b){
				            return parseInt(Date.parse(new Date(a.field2)))-parseInt(Date.parse(new Date(b.field2)))});
						$.ajaxSettings.async = false; 
						$.each(tableList,function(){
							 var row = this;
							 $.get("/sop/html/operation_appr_actual_table.html", row,function(data){
								   //新增数据
								   var o = $(data);
								   if(row.id){
									   o.find("[name='id']").text(row.id);
								   }
								   o.find("[name='field1']").text(row.field1);
								   o.find("[name='field2']").text(row.field2);
								   o.find("[name='field3']").text(_parsefloat(row.field3));
								   o.find("[name='code']").text(row.code);
								   $("#appr_part").append(o);
								   if(txt=="查看"){   //查看时隐藏编辑，删除按钮
									   $("#appr_part").find(".team_click").hide();
								   }
							   });
						});
						$("#save_appr_part").click(function(){
							//运营验证分期计划拨款金额是否大于剩余金额
			                var valInput=$(".moeny_all input").val();
			                if(Number(valInput)>((Number(totalMoneyPart)*10000-(sum-Number(valtr))*10000)/10000).toFixed(4)){
			                	layer.msg("分期注资金额之和大于总注资金额");
			 				   return;
			                }
							var obj=$(this).closest(".poptxt");
							var data = getData($("#detail-form"));
		        		    var dataList = getDataList($("#appr_part"));
		        		    console.log(dataList);
		    	            var tr = $('table[data-title-id="'+data['titleId']+'"].editable').find('tr:eq('+data['index']+')');
		    	    		tr.data("dataList",dataList);
		        	        saveForm($("#detail-form"));
					    });
						
					}
				}
				//文本框剩余字数
				$.each($("textarea"),function(){
					var len=$(this).val().length;
					var initNum=$(this).siblings('.num_tj').find("span").text();
					$(this).siblings('.num_tj').find("span").text(initNum-len);
				});
				//竞争对手的展示;
				var myRow = $(ele).closest('tr');
				var oppoPerson = myRow.find('td:eq(0)').text();
				var degress = myRow.find('td:eq(1)').text();
				var dangerRation = myRow.find('td:eq(2)').text();
				var helpfullMethod = myRow.find('td:eq(3)').text();
				var vervifyHas = myRow.find('td:eq(4)').text();
				$('.oppostie_people').text(oppoPerson);
				$('.win_degree').text(degress);
				$('.danger_degree').text(dangerRation);
				$('.helpful_method').text(helpfullMethod);
				$('.verfify_orNot').text(vervifyHas);
				//上一轮融资后关键运营指标变化
				$('.index-name').text(oppoPerson);
				$('.index-value').text(degress);
				$('.current-value').text(dangerRation);
				//融资的里程碑和时间点
				$('.finicial-number').text(oppoPerson);
				$('.milestone').text(degress);
				$('.finicial-time').text(dangerRation);
				
				
				$("#detail-form input[name='index']").val(row.index());
				$("#save-detail-btn").click(function(){
					//验证分期计划拨款金额是否大于剩余金额
	                var valInput=$(".moeny_all input").val();
	                if(Number(valInput)>((Number(totalMoneyPart)*10000-(sum-Number(valtr))*10000)/10000).toFixed(4)){
	                	layer.msg("分期注资金额之和大于总注资金额");
	 				   return;
	                }
					saveForm($("#detail-form"));
				});
			}//模版反回成功执行
		});
		
	}
}
//竞争对手编辑
function editRowCompete(ele,id_code,id_code_new,row,code){   //ele指代this,id_code是模块code值,code是table的data-code,row是表格tr
	var formBox=$(ele).closest('form');
	sendGetRequest(Constants.sopEndpointURL +'/galaxy/tvalue/queryAllTitleForTable/'+id_code_new+'_1', null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var entity = data.entity;
					$("#page_list_compete_edit").tmpl(entity).appendTo("#a_"+id_code);
					if(id_code_new=='NO5_4'){
						$('.h_title_conpetition').text('编辑显在竞争对手')
					}else{
						$('.h_title_conpetition').text('编辑潜在竞争对手')
					}
					$(ele).closest('form').hide();
					var _val=$('table.editable').attr('data-code');
					$(ele).closest('.radius').find('input[name="subCode"]').val(_val);
					//编辑回显
					$.each($("#b_"+id_code+"").siblings('form').find("input, select, textarea"),function(){
						var ele = $(this);
						var name = ele.attr('name');
						var type=ele.attr('type');
						var idVal=ele.attr('id');
						var dataType=ele.attr('data-type');
						var val_text =row.data(name);
						if(type=="radio"){
							if(ele.val()==row.data(name)){
								ele.attr("checked","chedcked");
							}
						}else if (type=="text"){
							if(code=="equity-structure"||code=="valuation-reference"||code=="share-holding"){
								if(name=="field2"){
									val_text = _parsefloat(val_text)
								}					
							}
							if(code=="competition-comparison"||code=="grant-part"){	
								if(name=="field3"){	
									val_text = _parsefloat(val_text)
								}
							}
							if(code=="finance-history"||code=="investor-situation"){
								if(name=="field3"||name=="field4"||name=="field5")
								val_text = _parsefloat(val_text);
							}
							if(code=="competitor_obvious" || code=="competitor_potential"){
								if(name=="field1"){
									if(val_text){
										val_text=val_text.replace(/<br\/>/g,' ');
										val_text=val_text.replace(/<br>/g,' ');
										val_text=val_text.replace(/&nbsp;/g," ");
									}
								}
							}
							ele.val((row.data(name)==undefined || row.data(name)=="undefined")?"":val_text);
							
						}else{
							if(dataType=="8"){
								if(val_text){
									val_text=val_text.replace(/<br\/>/g,'\n');
									val_text=val_text.replace(/<br>/g,'\n');
									val_text=val_text.replace(/&nbsp;/g," ");
								}
								if(row.data(name)){
									len=textarea_show(row.data(name));
								}
							}
							ele.val((row.data(name)==undefined || row.data(name)=="undefined")?"":val_text);
						}
					});
					//文本域剩余字符数
					var section=$(ele).closest('.radius');
					var textarea_h = section.find('.textarea_h');
					for(var i=0;i<textarea_h.length;i++){
						var len=textarea_h.eq(i).val().length;
						var initNum=textarea_h.parent('dd').find(".num_tj").eq(i).find("label").text();
						textarea_h.parent('dd').find(".num_tj").eq(i).find("label").text(initNum-len);
					}
					/* 文本域自适应高度 */
					for(var i=0;i<$("textarea").length;i++){
						var textareaId=$("textarea").eq(i).attr("id");
						autoTextarea(textareaId);
					}
					$("#b_"+id_code+"").siblings('form').find("input[name='index']").val(row.index());
					//保存
					$('div').delegate(".save-competeInfo-btn","click",function(event){
						var form=$(this).closest('form')
						saveForm($(form));
						formBox.attr('tochange',true);    //表格内容变化时，添加tochange属性
						$(form).remove();
						$(ele).closest('form').show();		
						 check_table();
			             check_table_tr_edit();
					})
					//取消
					$('div').delegate(".h_cancel_competeInfo_btn","click",function(event){
						$(ele).closest('form').show();
						var form=$(this).closest('form')
						$(form).remove();							
					})
				} else {

				}
		}) 
}
//查看竞争对手
function showRowCompete(ele,id_code,id_code_new,row,code,flag){  //ele指代this,id_code是模块code值,code是table的data-code,row是表格tr,flag是否编辑状态下查看
	sendGetRequest(Constants.sopEndpointURL +'/galaxy/tvalue/queryAllTitleForTable/'+id_code_new+'_1', null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var entity = data.entity;
					$("#page_list_compete").tmpl(entity).appendTo("#a_"+id_code);
					/*var divId=$('.h_compete_look').find('dd').attr('data-title-id');
					if(divId=='1524' || divId=='1512'){
						$('dd[data-title-id="'+divId+'"]').closest('.mb_24').hide();
					}*/
					if(id_code_new=='NO5_4'){
						$('.h_title_conpetition').text('查看显在竞争对手')
					}else{
						$('.h_title_conpetition').text('查看潜在竞争对手')
					}
					if(flag==true){  //编辑状态
						$(ele).closest('form').hide();
					}else{   //显示状态
						$('.bj_hui_on').show();
						$(ele).closest('.section>.h_team_look').hide();
					}
					
					var sec = $(ele).closest('.section').attr('class');
					var _val=$('table.editable').attr('data-code');
					$(ele).closest('.radius').find('input[name="subCode"]').val(_val);
					//答案显示
					$.each($(".h_compete_look ").find("dd"),function(){
						var obj = $(this);
						var name = obj.attr('name');
						var type=obj.siblings('dt').attr('data-type');
						var val_text =row.data(name);
						if(type==2){
							var titleId=$(ele).closest('table').attr('data-title-id');
							var subCode=$(ele).closest('table').attr('data-code');
							var filed=obj.attr('name');
							var map=dictCache(titleId,subCode,filed);
							obj.text((row.data(name)==undefined || row.data(name)=="undefined" || row.data(name)=="")?"未选择":map[val_text]);
						}else if(type==8){
							obj.html((row.data(name)==undefined || row.data(name)=="undefined" || row.data(name)=="" || row.data(name).replace(/ /g,'').length==0 || textarea_show(row.data(name))==0)?"未填写":val_text);
						}else if(type==1){
							obj.html((row.data(name)==undefined || row.data(name)=="undefined" || row.data(name)=="" || row.data(name).replace(/ /g,'').length==0 || textarea_show(row.data(name))==0)?"未填写":val_text);
						}
					});
					/*var name=$('dd[name="field1"]').text();  //竞争对手名称
					if(id_code=='NO5_4'){
						$('.h_title_conpetition').text('查看显在竞争对手-'+name)
					}else{
						$('.h_title_conpetition').text('查看潜在竞争对手-'+name)
					}*/
					//取消
					$('div').delegate(".h_cancel_competeInfo_btn","click",function(event){
						if(flag==true){  //编辑状态
							$(ele).closest('form').show();
						}else{   //显示状态
							$('.bj_hui_on').hide();
							$(ele).closest('.section>.h_team_look').show();
						}
						var form=$(this).closest('.h_compete_look')
						$(form).remove();							
					})
				} else {

				}
		}) 
}

function delRow(ele)
{
	//判断是否可以删除分期注资计划
	var code = $(ele).closest('table').data('code');
	if(code == 'grant-part' || code == 'grant-actual'){
		var tr = $(ele).closest('tr');
		if(tr.data('dataList')){
			var data = tr.data('dataList').length;
			if(data > 0){
				layer.open({
					  type: 1,
					  skin: 'layui-layer layui-anim layui-layer-dialog', //加上边框
					  area: ['420px', '240px'], //宽高
					  content: '有实际注资计划,无法删除分期注资计划'
					});
			    return;
			}
		}
	}
	layer.confirm('是否删除?', {
		btn : [ '确定', '取消' ],
		title:'提示'
	}, function(index, layero){
		var tr = $(ele).closest('tr');
		var table=$(ele).closest('table');
		var id = tr.data('id');
       	var sectionId =$(ele).closest('.radius').attr("data-section-id");
        if(typeof id != 'undefined' && id>0)
        {
           //股权合理性
           if (sectionId ==1324){
              deletedRowIdsGq.push(id);
           }else{
              deletedRowIds.push(id);
           }
        }
		tr.remove();
		check_table();   
		//运营报告中【融资估值中分期添加按钮隐藏】
		check_add_button_hide(reportType,table.attr("data-title-id"));
		check_table_tr_edit();
		$(".layui-layer-close1").click();
	},function(index) {
	});
 

}
function addRow(ele)
{
   /*  if ( validateCGR() ) { */
        var code = $(ele).prev().data('code');
        var id_code=$(ele).closest('form').siblings('.h_look').attr('id');
        var id_code_new='';
        if(id_code=='DNO5_5' || id_code=='DNO5_4' || id_code=='GNO5_4' || id_code=='GNO5_5'){   //显在竞争对手||潜在竞争对手表格特殊处理
        	 if(id_code=='DNO5_5' || id_code=='GNO5_5' ){   //拥有查询全息报告的接口
             	id_code_new='NO5_5'
             }
             if(id_code=='DNO5_4' || id_code=='GNO5_4'){
            	 id_code_new='NO5_4'
             }
    		addRowCompete(ele,id_code,id_code_new);
    	}else{
    		//总注资校验
    		if(code == 'grant-part' || code == 'grant-actual'){
    			 //获取表格上的计划金额之和
    			 var trs=$("table.editable[data-code='"+code+"']").find("tr");
    			 var sum=0;
    			 $.each(trs,function(){ 
				 	//sum+=Number($(this).find("td[data-field-name='field3']").text());
				 	sum=accAdd(sum,Number($(this).find("td[data-field-name='field3']").text()))
    			 })
    			
    		}
    		if(code == 'grant-part' && !getTotalAppr(projectInfo.id, true))
    		{
    			$.getHtml({
    				url:'../../html/beforeSave.html',  
    				data:"",//传递参数
    				okback:function(){
    					$(".before_save_tc").addClass("stag_plan")
    					$(".before_save_btn").remove();
    					$(".deltc").html("<b class=\"null tips_d\">ico</b><span>无法添加分期注资计划,需要补全以下信息:投决会结果中的投资金额、股权占比、项目估值、星河投资方主体</span>");
    				}//模版反回成功执行	
    			});
    			return false;
    		}
            $.getHtml({
                url:getDetailUrl(code),//模版请求地址
                data:"",//传递参数
                okback:function(){
    				$('#qualifications_popup_name').html('添加简历');
    				$('#qualifications_popup_name1').html('添加持股人');
    				 $('#grant_popup_name').html('添加分期注资计划');
    				 $("#complete_title").html('添加综合竞争比较');
    				//交割前事项
    				$("#delivery_popup_name").text("添加交割事项");
    				$(".see_block").hide();
    				$('#finace_popup_name').html('添加融资历史');
                    $("#detail-form input[name='projectId']").val(projectInfo.id);
                    $("#detail-form input[name='titleId']").val($(ele).prev().data('titleId'));
                    $("#detail-form input[name='subCode']").val($(ele).prev().data('code'));
                    $("input[name=updateTimeStr]").val(new Date().format("yyyy-MM-dd"));
                    getTotalAppr(projectInfo.id);
                    selectContext("detail-form");
                    //计算剩余金额
                    var totalMoneyInit=$("#totalMoneyPart").val(); 
                    $("#formatRemainMoney").text(_parsefloat(accSub(totalMoneyInit,sum)));
                    $(".moeny_all input").on("blur",function(){
                    	var val=$(this).val();
                    	var errorTips=$(this).siblings(".error");
                    	if(errorTips.is(":visible")){
                    		val=0;
                    		var swith = accSub(totalMoneyInit,sum)
                    		var formatRemainMoneyVal = accSub(swith,val)
                    		 $("#formatRemainMoney").text(_parsefloat(formatRemainMoneyVal));
                    	}else{
                    		if(Number(totalMoneyInit)-sum-val>0){ 
                    			var swith = accSub(totalMoneyInit,sum)
                    			var formatRemainMoneyVal = accSub(swith,val)
                        		 $("#formatRemainMoney").text(_parsefloat(formatRemainMoneyVal));
                        	}else{
                        		$("#formatRemainMoney").text(0);
                        	}
                    	}
                    })
                    $("#save-detail-btn").click(function(){
                    	//验证分期计划拨款金额是否大于剩余金额
                        var valInput=$(".moeny_all input").val();
                        if(Number(valInput)>((Number(totalMoneyInit)*10000-sum*10000)/10000).toFixed(4)){
                        	layer.msg("分期注资金额之和大于总注资金额");
         				   return;
                        }
                        saveForm($("#detail-form"));
                        check_table();
                        check_table_tr_edit();
                    });
                    $("#save_person_learning").click(function(){
                    	check_table();
                    	check_table_tr_edit();
                    });
                }//模版反回成功执行
            });
    	}
        
}
//竞争表格新增
function addRowCompete(ele,id_code,id_code_new){
	var formBox=$(ele).closest('form');
	sendGetRequest(Constants.sopEndpointURL +'/galaxy/tvalue/queryAllTitleForTable/'+id_code_new+'_1', null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var entity = data.entity;
					$("#page_list_compete_edit").tmpl(entity).appendTo("#a_"+id_code);
					if(id_code_new=='NO5_4'){
						$('.h_title_conpetition').text('添加显在竞争对手')
					}else{
						$('.h_title_conpetition').text('添加潜在竞争对手')
					}
					$(ele).closest('form').hide();
					var _val=$('table.editable').attr('data-code');
					$(ele).closest('.radius').find('input[name="subCode"]').val(_val);
					$('div').delegate(".save-competeInfo-btn","click",function(event){
						var form=$(this).closest('form')
						saveForm($(form));
						formBox.attr('tochange',true);    //表格内容变化时，添加tochange属性
						$(form).remove();
						$(ele).closest('form').show();		
						 check_table();
			             check_table_tr_edit();
					})
					//取消
					$('div').delegate(".h_cancel_competeInfo_btn","click",function(event){
						$(ele).closest('form').show();
						var form=$(this).closest('form')
						$(form).remove();							
					})
					/* 文本域自适应高度 */
					for(var i=0;i<$("textarea").length;i++){
						var textareaId=$("textarea").eq(i).attr("id");
						autoTextarea(textareaId);
					}
				} else {

				}
		}) 
}

function saveForm(form)
{
	if(form.hasClass("guzhi_pop")){ 
      var val1 = $("input[name='field5']").val();
	  val2=$("input[name='field5']").attr('guzhi'), 
		val3=accSub(val1,val2); 
		if(val3>10||val3<-10){
			layer.msg('项目估值的修改结果超出自动计算得出结论的 +/-10万');
			return;
		}
	}
    if($(form).validate().form())
    {
        var data = $(form).serializeObject();
        if($(form).is('.actual_aging_container_form')){
        	data = JSON.parse(data);
        	 if(data.field1=="" || !(data.field1)){
             	data.field1="分拨注资"
             }
             data=JSON.stringify(data);
        }
        saveRow(data);
    }
}

/**
 * 保存至到tr标签data属性
 */
function saveRow(data)
{ 
	data = JSON.parse(data);
	if(data.subCode=="competitor_obvious" || data.subCode=="competitor_potential"){   //显在、潜在竞争对手特殊textarera处理空格回车
		for(var key in data){
			if(key.indexOf('field')>-1 && key!="field1"){
				data[key]=data[key].replace(/\n|\r\n/g,"<br>");
				data[key]=data[key].replace(/\s/g,"&nbsp;");
			}
		}
	}
	var titleId = data.titleId;
	var index = data.index;
	if(typeof index == 'undefined' || index == null || index == '')
	{
		var tr = buildRow(data,true,titleId);
		$('table[data-title-id="'+titleId+'"].editable').append(tr);
		
	}
	else
	{
		var tr = $('table[data-title-id="'+titleId+'"].editable').find('tr:eq('+index+')');
		for(var key in data)
		{
			if(titleId=="1582" || titleId=="1583"){   //竞争对手特殊处理
				if(key.indexOf('field')>-1 && key!="field1"){     
					data[key]=data[key].replace(/\n|\r\n/g,"<br>");
					data[key]=data[key].replace(/\s/g,"&nbsp;");
				}
			}
			if(key.indexOf('field')>-1 || key == "updateTimeStr" || key == "updateUserName" || key == "updateTimeSign")
			{
				tr.data(key,data[key]);
				var val_text = data[key];
				if(titleId=="1906"||titleId=="1920"||titleId=="1325"||titleId=="1144"){					
					if(key=="field2"){
						val_text = _parsefloat(val_text)
					}
				}
				if(titleId=="1548"||titleId=="3022"){					
					if(key=="field3"){
						val_text = _parsefloat(val_text)
					}
				}
				if(titleId=="1903"||titleId=="1908"){
					if(key=="field3"||key=="field4"||key=="field5"){
						val_text = _parsefloat(val_text)
					}
				}

				tr.find('td[data-field-name="'+key+'"]').text(val_text);
				//编辑的时候添加title显示
				if(titleId=="1908"){//主要战略投资人，财务投资人投资情况
					tr.find('td[data-field-name=field2]').attr('title',data["field2"]);
				}else if(titleId=="1920"){//市场同类公司估值参考
					tr.find('td[data-field-name=field1]').attr('title',data["field1"]);
				}else if(titleId=='1325'){//股权结构合理性
					tr.find('td[data-field-name=field1]').attr('title',data["field1"])
				}else if(titleId=='1906'){//股权结构
					tr.find('td[data-field-name=field1]').attr('title',data["field1"])
				}
				
			}
		}
		
	}
	resizetable($('table[data-title-id="'+titleId+'"].editable'))
	$("a[data-close='close']").click();
}

function refreshSection(id)
{ 
	var sec = $(".section[data-section-id='"+id+"']");
    sec.find("dd[data-type='3']").text('未选择');
	sec.showResults(true);
	btn_disable(0);
	var trLength = $("table[data-code=team-members] tbody tr").length-1;  
	if(trLength>=10){
		$(".infoReport[dncode=teamInfo]").hide();
	}else{
		$(".infoReport[dncode=teamInfo]").show();
	}
	var financeLength = $("table[data-code=finance-history] tbody tr").length-1;  
	var equityLength = $("table[data-code=equity-structure] tbody tr").length-1;  
	if(financeLength>=10&&equityLength>=200){
		$(".infoReport[dncode='financeInfo,equityInfo']").hide();
	}else{
		$(".infoReport[dncode='financeInfo,equityInfo']").show();
	}
	
}
/**
* 页面加载时，给类型12的题目，绑定change方法，用于第一次没有返回结果的情况
*/
function bindChange(){
    var dts = $("dt[data-type='12']");
    $.each(dts, function (i,n) {
        var dl = $(this).parent();
        var radios = dl.find('input[type="radio"]');
        var last_id = dl.find('input[type="radio"]:last').attr('data-id');
        var inputText = dl.find('input[type="text"]:last');
		if(dl.find('input[type="radio"]:last:checked')){
			 inputText.attr('required' , true);
		}
        $.each(radios , function ( i ,n )
        {
            $(this).unbind('change').bind('change',function(){
                if ( $(this).attr('data-id') == last_id )
                {
                    inputText.attr('disabled',false);
                    inputText.attr('required' , true);
                }
                else
                {
                    inputText.attr('disabled',true);
                    inputText.attr('required' , false);
                }
            });
        });
    });
}

function bindChangeType13(){
    var dts = $("dt[data-type='13']");
    $.each(dts, function (i,n) {
        var dl = $(this).parent();
        var lis = dl.find('li.check_label');
        var last_id = dl.find('li.check_label:last').attr('data-id');
        var inputText = dl.find('input[type="text"]:last');
		if(dl.find('li.check_label:last').hasClass("active")){
			 inputText.attr('required' , true);
		}
        $.each(lis, function ( i ,n )
        {
        	$(this).click(function(){
        		if ( $(this).attr('data-id') == last_id ){
        			  //团队三个核心亮点与核心团队具有的能力联动
        			var titleId=$(this).attr("data-title-id");
            		if(titleId=="1364"){
            			var inputText1=$(this).closest(".mb_16").siblings().find("dt[data-title-id='"+titleId+"']").siblings().find("input[type=\"text\"]:last");
            			if(inputText1.attr("disabled")=="disabled"){
           				  inputText1.attr('disabled',false);
                          inputText1.attr('required' , true);
	           			}else{
	           				inputText1.attr('disabled',true);
	                        inputText1.attr('required' , false);
	           			}
            			$(inputText).on("input",function(){
            				var val=$(this).val();
            				$(inputText1).val(val);
            			});
            			$(inputText1).on("input",function(){
            				var val=$(this).val();
            				$(inputText).val(val);
            			})
            		}
        			if(inputText.attr("disabled")=="disabled"){
        				 inputText.attr('disabled',false);
                         inputText.attr('required' , true);
        			}else{
        				inputText.attr('disabled',true);
                        inputText.attr('required' , false);
        			}
        		}        		 
        	})
        	
        });


    });
}



function getDetailUrl(code)
{
	if(code == 'equity-structure')
	{
		return path+'/html/funcing_add_gd.html';
	}
	else if(code == 'investor-situation')
	{
		return path+'/html/funcing_add_tz.html';
	}
	else if(code =='operation-indices')
	{
		return path+'/html/fincing_add_yx.html';
	}
	else if(code == 'valuation-reference')
	{
		return path+'/html/fincing_add_tl.html';
	}
	else if(code == 'financing-milestone')
	{
		return path+'/html/fincing_add_jd.html';
	}
	else if(code == 'finance-history')
	{
		return path+'/html/finace_history.jsp';
	}
	else if (code =='team-members'){

	    return path+'/html/team_compile.html';
	}else if(code == 'share-holding')
    {
        return path+'/html/team_add_cgr.html';
    }else if(code == 'competition-comparison')
	{
		return path+'/html/compete_save.jsp';
	}else if(code == 'delivery-before')
	{
		return path+'/html/delivery_matter.jsp';
	}else if(code == 'delivery-after')
	{
		return path+'/html/delivery_matter.jsp';
	}else if(code == 'grant-part' || code == 'grant-actual')
	{
	    if(reportType == 7){
	    	return path+'/html/operation_appr_part.html';
	    }
		return path+'/html/grant-part.jsp';
	}
	else if(code == 'competitor_obvious')
	{
		return path+'/html/addRow.jsp';
	}
	return "";
}



function tableDictColumn(code){
	var json;
	var arr=[];
	if(code == 'competition-comparison')
	{
        return json={"competition-comparison":["field5"]};
	}else if(code == 'finance-history'){
		return json={"finance-history":["field6","field7","field8"]};
	}else if(code=="equity-structure"){
		return json={"equity-structure":["field3","field4"]};
	}else if(code=="investor-situation"){
		return json={"investor-situation":["field1","field6"]};
	}
}

/*function dealTableDict(table){
    var dict_map = {}
    var title_id = table.attr("data-title-id")
    var  code = table.attr("data-code")
    var fields_json=tableDictColumn(code);
    if (code in fields_json){
        var fields = fields_json[code]
        for(var i=0;i<fields.length;i++){
            var v = fields[i]
            var dict = dictCache(title_id,code,v)
            dict_map[title_id+"-"+code+"-"+v] = dict
            table.find('td[data-field-name="'+v+'"]').each(function(){
                var o = $(this)
                o.text(dict[o.text()])
            })
        }
    }
}*/


/**
 * 获取总注资计划并校验
 * @param projectId
 * @returns {Boolean}
 */
function getTotalAppr(projectId,validate){
	var flag = false;
	var params={};
	if(typeof(validate) == 'undefined')
	{
		validate = false;
	}
	params.projectId = projectId;
	sendPostRequestByJsonObj(
				Constants.sopEndpointURL+'/galaxy/infoProject/getTotalAppr?validate='+validate , 
				params,
				function(data){
					if(data.result.status == "OK"){
						if(typeof(data.userData) == "object"){
							if(data.userData.totalMoney || data.userData.remainMoney){
								flag = true;
								totalMoney = data.userData.totalMoney;
								remainMoney = data.userData.remainMoney == null ? 0 : data.userData.remainMoney;
								$("#remainMoneyPart").val(remainMoney);
								$("#totalMoneyPart").val(totalMoney);
							}
						}
					}
				});

	return flag;
}

/**
 * 获取总注资计划并校验
 * @param projectId
 * @returns {Boolean}
 */
function getTotalApprActual(id){
	var flag = false;
	var params={};
	var dataMoney={};
	params.id = id;
	sendPostRequestByJsonObj(
				Constants.sopEndpointURL+'/galaxy/infoProject/getTotalApprActual' , 
				params,
				function(data){
					if(data.result.status == "OK"){
						if(typeof(data.userData) == "object"){
							if(data.userData.totalMoney || data.userData.remainMoney){
								flag = true;
								totalMoney = data.userData.totalMoney;
								remainMoney = data.userData.remainMoney == null ? 0 : data.userData.remainMoney;
								dataMoney.totalMoney=totalMoney;
								dataMoney.remainMoney=remainMoney;
							}
						}
					}
				});

	return dataMoney;
}

