
function backFun(data){
	var result = data.result.status;
	if (result == 'OK') {
		var entity = data.entity;
		var html = toGetHtmlByMark(entity,'s');
		var s_div = toShowTitleHtml(entity, html);
		$("#"+entity.code).html(s_div);
		dtWidth();
		mustData(projectInfo.id,0);
		toggle_btn($('.anchor_btn span'),1);
		resouceShow('s');
	}
}
function resouceShow(mark){
	//项目来源特殊处理
	var dts=$('#NO1_1').find('.mb_24 dt');
	var valruleformula=dts.attr('data-valruleformula');
	$.each(dts,function(i,n){
		var _id=$(n).attr('data-tid');
		if(_id=='1120'){
			if(mark=='s'){
				var valueId=$('#NO1_1').find('.mb_24 dt[data-tid="'+_id+'"]').next('dd').attr('data-value');
				resourceBranchShow(_id,valueId,'s');
			}
			if(mark=='e'){
				var val=$('#NO1_1').find('.mb_24 dt[data-tid="'+_id+'"]').next('dd').find('select option:selected').val();
				resourceBranchShow(_id,val,'e');
				$('div').delegate('select[data-title-id="'+_id+'"]', "change", function(event){
					$('.resource_branch').hide();
					var _val=$(this).find("option:selected").val();
					var isMust=$('#NO1_1').find('dt[data-valruleformula="'+_id+','+_val+'"]').next('input').attr('data-must');
					if(isMust=='0'){
						$('#NO1_1').find('dt[data-valruleformula="'+_id+','+_val+'"]').next('input[data-must="'+isMust+'"]').attr({'required':true,'data-msg-required':'<font color=red>*</font>不能超过20字且不能全为空格'});
					}
					if(_val){
						var resource_branch=$('#NO1_1').find('.resource_branch');
						$.each(resource_branch,function(i,o){
							var valruleformula=$(o).find('dt').attr('data-valruleformula');
							if(valruleformula.indexOf(_val)>-1){
								$(o).show();
							}
						})
					}
					event.stopPropagation();
				})
			}
			
		}
	});
	
}
function resourceBranchShow(_id,val,mark){  //控制项目来源关联题目的显示隐藏
	if(val){
		var resource_branch=$('#NO1_1').find('.resource_branch');
		var valruleformulaList=[];
		$.each(resource_branch,function(i,o){
			var valruleformula=$(o).find('dt').attr('data-valruleformula');
			valruleformulaList.push(valruleformula.split(',')[1]);
			if(valruleformula.indexOf(val)>-1){   //关联题目的
				$('.resource_branch').hide();
				if(mark=='e'){
					$('#NO1_1').find('dt[data-valruleformula="'+_id+','+val+'"]').closest('.resource_branch').show();
					var isMust=$('#NO1_1').find('dt[data-valruleformula="'+_id+','+val+'"]').next('input').attr('data-must');
					if(isMust=='0'){
						$('#NO1_1').find('dt[data-valruleformula="'+_id+','+val+'"]').next('input[data-must="'+isMust+'"]').attr({'required':true,'data-msg-required':'<font color=red>*</font>不能超过20字且不能全为空格'});
					}
				}
			}
		});
		if(valruleformulaList.indexOf(val)==-1){   //为关联题目的
			$('.resource_branch').hide();
		}
	}else{
		$('.resource_branch').hide();
	}
}
//其它 +备注 
function other_beizhu(obj,typ){
	var _this = $(obj);
	var nextText = _this.next();
	var disabled = $(nextText).attr("disabled");
	
	if(disabled && (disabled == true || disabled == "disabled")){
		$(nextText).removeAttr("disabled"); 
		$(nextText).removeClass("disabled");
	}else{
		$(nextText).attr("disabled","disabled").addClass("disabled");
	}
}

//区域显示
function showArea(code){
	sendGetRequest(platformUrl.queryProjectAreaInfo + pid +"/" + code, null, function(data) {
		var result = data.result.status;
		if (result == 'OK') {
			var entity = data.entity;
			var html = toGetHtmlByMark(entity,'s');
			var s_div = toShowTitleHtml(entity, html);
			$("#"+code).html(s_div);
		}
	});
}


function toShowTitleHtml(title,html){
	
	var editHtm = "";
	if(isEditable && isEditable == 'true') {
		editHtm = "<span class=\"h_edit_btn\" attr-id='" + title.code + "'>编辑</span>"
	}
	var titleDiv = "" ;
	if(title.name){
		titleDiv = "<div class=\"h_title sec_box\">" + title.name + "</div>" ;
	}
	
	var s_div = 
		"<div class=\"h_look h_team_look clearfix\" id=\"a_"+title.code+"\" >" +
			"<div class=\"h_btnbox\">" +
				editHtm +
		    "</div>" +
		    titleDiv +
			html +
		"</div>";
		
	return s_div;
}

function toEditTitleHtml(title,html){
	var titleDiv = "" ;
	if(title.name){
		titleDiv = "<div class=\"h_title\">" + title.name + "</div>" ;
	}
	var s_div = 
		"<div class=\"h_edit h_team_look base_team_look clearfix\" id=\"b_"+title.code+"\" >" +
		"<form id=\"c_"+title.code+"\">"+
		"<div class=\"history_block\">您有一份<span class='history_time'>2017/11/11 12:12</span>的历史记录，<span class='btn'>点击恢复</span></div>"+
			"<div class=\"h_btnbox\">" +
		    	"<span class=\"h_save_btn\" data-on=\"save\" attr-save=\""+title.code+"\">保存</span>" +
		    	"<span class=\"h_cancel_btn\" data-on=\"h_cancel\" attr-hide=\""+title.code+"\" >取消</span>" +
		    "</div>" +
		    titleDiv +
			html +
			"<div class=\"h_edit_btnbox clearfix\">" +
		    	"<span class=\"pubbtn bluebtn h_save_btn fl\" data-on=\"save\" attr-save=\""+title.code+"\" >保存</span>" +
		    	"<span class=\"pubbtn fffbtn fl h_cancel_btn\" data-on=\"h_cancel\" attr-hide=\""+title.code+"\" >取消</span>" +
		    "</div>" +
		    "</form>"+
		"</div>";
	return s_div;
}

function toGetHtmlByMark(title,mark){
	var html = "";
	if(title.type){
		html += switchTypeByMark(title,mark);
	}
	
	var tilelist = title.childList;
	$.each(tilelist,function(i,o){
		if(this.sign  && this.sign == 3){
			html += "<div class=\"mb_24 clearfix sign_title\">" + this.name + "</div>";
			sendGetRequest(platformUrl.queryProjectAreaInfo + pid +"/" + this.code, null, function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var sign_title = data.entity;
					html += toGetHtmlByMark(sign_title,mark);
				}
			});
		}else{
			html += switchTypeByMark(title,this,mark);
		}
	});
	return html;
}
//title_指每一个题
function switchTypeByMark(entity,title,mark){
	var html = "";
	switch (title.type) {
        case 1:  
        	html += type_1_html(title,mark);
            break;
        case 2:  
        	html += type_2_html(title,mark);
            break;
        case 3:   
        	html += type_3_html(title,mark);
            break;
        case 4:   
        	html += type_4_html(title,mark);
            break;
        case 5:  
        	html += type_5_html(title,mark);
            break;
        case 6:  
        	html += type_6_html(title,mark);
            break;
        case 7:   
        	html += type_7_html(title,mark);
            break;
        case 8:   
        	html += type_8_html(title,mark);
            break;
        case 9:  
        	//html += type_9_html(title);
            break;
        case 10:  
        	html += type_10_html(title,mark);
            break;
        case 11:   
        	html += type_11_html(title,mark);
            break;
        case 12:   
        	html += type_12_html(title,mark);
            break;
        case 13:   
        	html += type_13_html(title,mark);
            break;
        case 14:   
        	html += type_14_html(entity,title,mark);
            break;
        case 15:   
        	html += type_15_html(title,mark);
            break;
        case 21:   
        	html += type_21_html(title,mark);
            break;
        case 23:   
        	html += type_23_html(title,mark);
            break;
        default:
            break;
    }
	return html;
}



//1:文本、2:单选（Radio）、3:复选、4:级联选择、5:单选带备注(textarea)、6:复选带备注(textarea)、
//7:附件、8:文本域、9:固定表格、10:动态表格、11:静态数据、12:单选带备注(input)、13:复选带备注(input)、14单选（select）
//15:一个标题带两个文本域

// 1:文本 
function type_1_html(title,mark){
	var htitle = "<dt data-tid='"+title.id+"' style='margin-bottom:10px;'  data-must='"+title.isMust+"' data-type='"+title.type+"' data-valRuleFormula='"+title.valRuleFormula+"' data-valRuleMark='"+title.valRuleMark+"'>"+title.name+"</dt>";
		
	var results = title.resultList;
	
	if(mark == 's'){
		var hresult = "<dd>未填写</dd>";
		if(results && results[0] && results[0].contentDescribe1){
			hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
		}
		if(title.valRuleFormula.indexOf('1120')>-1){
			return  "<div class=\"mb_24 resource_branch clearfix\" style='margin-bottom:14px;'>" + htitle + hresult + "</div>";
		}else{
			return  "<div class=\"mb_24 clearfix\" style='margin-bottom:14px;'>" + htitle + hresult + "</div>";
		}
	}else{
		var value = '';
		if(results && results[0] && results[0].contentDescribe1) value = results[0].contentDescribe1;
		var placeholder = '';
		if(title.placeholder) placeholder = title.placeholder;		
		if(title.resultList){
			var result_id=title.resultList[0].id;		
			
		}
		eresult = "<input type=\"text\" class=\"txt\" value='"+ value +"' " +
				"data-title-id='"+title.id+"' resultId='"+result_id+"' data-type='"+title.type+"' placeholder='"+placeholder+"' maxlength='"+title.valRuleMark+"' data-must='"+title.isMust+"' name='"+title.id+"' data-valrulemark='"+title.valRuleMark+"'/>";
		if(title.valRuleFormula.indexOf('1120')>-1){
			return  "<div class=\"mb_24 resource_branch clearfix\" style='margin-bottom:14px;'>" + htitle + eresult + "</div>";
		}else{
			return  "<div class=\"mb_24 clearfix\" style='margin-bottom:14px;'>" + htitle + eresult + "</div>";
		}

		}
	
}


//type 循环 
function one_select_edit(title,inputtype,type){
	var eresult = "";
	var values = title.valueList; 
	if(inputtype == 'radio'){
		var li = "";
		$.each(values,function(i,o){
			if(this.checked){
				li +=  "<li><input type=\"radio\"  value='"+this.id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' checked=\"true\" data-must='"+title.isMust+"'/>" + this.name  + "</li>";
			}else
				li +=  "<li><input type=\"radio\"   value='"+this.id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' data-must='"+title.isMust+"' />" + this.name  + "</li>";
		});
		

		if(type=='2'){
            var ddStr = "<dd class='fl_none'>" ;
            if(title.resultList!=undefined){
                ddStr = "<dd class='fl_none' resultId='"+title.resultList[0].id+"'>" ;
            }

			eresult = 
				ddStr +
					"<ul class=\"h_radios clearfix\">" +
						li + 
					"</ul>" +
				"</dd>";	
		}else if(type=='5'){
            var ddStr = "<dd class='fl_none'>" ;
            if(title.resultList!=undefined){
            	if(title.resultList.length == 1){
            		if(!title.resultList[0].valueId){
            			ddStr = "<dd class='fl_none'>" ;
					}else{
						ddStr = "<dd class='fl_none' resultId='"+title.resultList[0].id+"'>" ;
					}
				}else{
                    for(var i = 0;  i < title.resultList.length; i++ ){
                        if(title.resultList[i].valueId){
                        	ddStr = "<dd class='fl_none' resultId='"+title.resultList[i].id+"'>" ;
                            break;
                        }
                    }
				}
            }

			eresult = 
				ddStr +
					"<ul class=\"h_radios clearfix\">" +
						li + 
					"</ul>" +
				"</dd>";
		}
		
	}else{
		/*if(title.id=='1108'){
			var li = "<option data-title-id='"+title.id+"' data-type='"+title.type+"' value='' class='none'>请选择</option>";
		}else{
			var li = "<option data-title-id='"+title.id+"' data-type='"+title.type+"' value='' >请选择</option>";
		}*/
		var li = "<option data-title-id='"+title.id+"' data-type='"+title.type+"' value='' >请选择</option>";
    	$.each(values,function(i,o){
			if(this.checked){
				li +=  "<option value='"+this.id+ "' data-title-id='"+title.id+"' data-type='"+title.type+"' selected=\"selected\" >"  + this.name + "</option>";
			}else{
				li +=  "<option value='"+this.id+ "' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</option>";}
		});
    	if(title.resultList!=undefined){
    		if(title.isMust=='0'){
    			if(title.type=='23'){
    				eresult = 
                		"<dd>" +
            		    	"<select class=\"selectpicker\" multiple data-live-search=\"true\" resultId='"+title.resultList[0].id+"' data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' required data-msg-required=\"<font color=red>*</font>必填\">" +
            					li +
            				"</select>" +
            	    	"</dd>";
    			}else{
    				eresult = 
                		"<dd>" +
            		    	"<select resultId='"+title.resultList[0].id+"' data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' required data-msg-required=\"<font color=red>*</font>必填\">" +
            					li +
            				"</select>" +
            	    	"</dd>";
    			}
    			
    		}else{
    			eresult = 
            		"<dd>" +
        		    	"<select resultId='"+title.resultList[0].id+"' data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"'>" +
        					li +
        				"</select>" +
        	    	"</dd>";
    		}
    		
    	}else{
    		if(title.isMust=='0'){
    			if(title.type=='23'){
    				console.log(title)
    				eresult = 
                		"<dd>" +
            		    	"<select class=\"selectpicker\" multiple data-live-search=\"true\" data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' required data-msg-required=\"<font color=red>*</font>必填\">" +
            					li +
            				"</select>" +
            	    	"</dd>";
    			}else{
    				eresult = 
                		"<dd>" +
            		    	"<select data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' required data-msg-required=\"<font color=red>*</font>必填\">" +
            					li +
            				"</select>" +
            	    	"</dd>";
    			}
    			
    		}else{
    			eresult = 
            		"<dd>" +
        		    	"<select data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"'>" +
        					li +
        				"</select>" +
        	    	"</dd>";
    		}
    		
    	}
    	
	}
	
	return eresult;
}
// 2:单选
function type_2_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			hresult = "<dd>"+results[0].valueName+"</dd>";
		}
		return  "<div class=\"mb_24 division_dd clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = one_select_edit(title,'radio','2');
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}




// 3:复选
function type_3_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			hresult = "";
			$.each(results,function(i,o){
				hresult +=  "<dd class=\"border_dd\">"+this.valueName+"</dd>";
			});
		}
		return  "<div class=\"mb_24 clearfix\">" + htitle +"<div class=\"checked_div clearfix\">"+ hresult + "</div></div>";
	}else{
		htitle = "<dt data-title-id='"+title.id+"' data-type='"+title.type+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
		
		var li = "";
		var values = title.valueList;
		$.each(values,function(i,o){
			if(this.checked){
				li +=  "<li class=\"check_label active\" resultId='"+this.id+"' data-value='"+this.id+"'  data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
			}else
				li +=  "<li class=\"check_label\"  data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
		});
		var eresult = 
			"<dd class=\"fl_none\">" +
				"<ul class=\"h_edit_checkbox pro_innovation  select_strategy clearfix\">" +
					li +
				"</ul>" +
			"</dd>";
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}
function getNextSelect(title,cid,i){
	var rselect = {};
	sendGetRequest(platformUrl.queryProNvaluesInfo + pid + "/"+ title.id  +"/"+cid ,null, function(data) {
		var result = data.result.status;
		if (result == 'OK') {
			var entitys = data.entityList;
			rselect = nselectHtml(entitys,title,cid,i);
		}
	});
	return rselect;
}
function nselectHtml(values,title,cid,l_i){
	//var results = title.resultList;
	
	var has_checked = false;
	var li = "<option data-title-id='"+title.id+"' data-type='"+title.type+"' value='' >请选择</option>";
	
	$.each(values,function(i,o){
		if(this.checked){
			has_checked = true;
			cid = this.id;
			li +=  "<option value='"+this.id+ "' data-title-id='"+title.id+"' data-type='"+title.type+"' selected=\"selected\" >"  + this.name + "</option>";
		}else{
			li +=  "<option value='"+this.id+ "' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</option>";
		}
	});
	if(!has_checked){
		cid = null;
	}
	/*$.each(title.resultList,function(){
		
	})*/
	if(title.resultList!=undefined && title.resultList[l_i-1]){
		if (title.resultList[l_i-1].id){
			var relu_ht =
				"<select resultId='"+title.resultList[l_i-1].id+"' onchange=\"showConstarct(this,'"+title.id+ "','" + title.type + "')\" data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"'>" +
					li +
				"</select>" ;
		}
	}else{
		var relu_ht =
			"<select  onchange=\"showConstarct(this,'"+title.id+ "','" + title.type + "')\" data-must='"+title.isMust+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"'>" +
				li +
			"</select>" ;
	}
	
	var return_re = {
			htm : relu_ht,
			vpid : cid
	}
	return return_re;
    	
}
// 4:级联选择
function type_4_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		var r_value1 = '';
		var results = title.resultList;
		if(results && results[0] && results[0].id){
			$.each(results,function(i,o){
				if(this.valueName){
					r_value1 += "<dd>"+this.valueName+" &nbsp;&nbsp;</dd>";
				}
			});
		}
		if(r_value1){
			hresult = r_value1;
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = "";
		
		var checked_cid;
		
		for(var i = 1; i <6; i++){
			if(i == 1){
				var values = title.valueList;
				var return_j = nselectHtml(values,title,checked_cid,i);
				checked_cid = return_j.vpid;
				eresult += return_j.htm;
			}else{
				if(checked_cid){
					var return_j = getNextSelect(title,checked_cid,i);
					checked_cid = return_j.vpid;
					eresult += return_j.htm;
				}else{
					var return_j = nselectHtml({},title,checked_cid,i);
					eresult += return_j.htm;
				}
			}
		}
		
		return  "<div class=\"mb_24 select_box clearfix\">" + htitle +"<dd>"+eresult +"</dd></div>";
	}
}
function showConstarct(thisSelect,tid,type){
	var li = "<option data-title-id='"+tid+"' data-type='"+type+"' value='' >请选择</option>";
	
	var _this = $(thisSelect);
	var nextSelect = _this.next();
	
	if(nextSelect && nextSelect.length == 1){
		
		var vid = _this.find("option:selected").val();
		
		if(vid){
			var li_htm = li;
			sendGetRequest(platformUrl.queryValuesByVpid + vid, null, function(data) {
	    		var result = data.result.status;
	    		if (result == 'OK') {
	    			var entitys = data.entityList;
	    			
	    			$.each(entitys,function(i,o){
	    				li_htm +=  "<option value='"+this.id+ "' data-title-id='"+tid+"' data-type='"+type+"' >"  + this.name + "</option>";
	    			});
	    		}
	    		
	    		$(nextSelect).html(li_htm);
	    	});
		}else{
			$(nextSelect).html(li);
		}
		
		for(var i = 0; i<5; i ++){
			nextSelect = $(nextSelect).next();
			if(nextSelect && nextSelect.length == 1){
				$(nextSelect).html(li);
			}else{
				break;
			}
		}
	}
} 
  



//5:单选带备注 (textarea)
function type_5_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	var results = title.resultList;
	
	if(mark == 's'){
		var hresult_1 = "<dd>未选择</dd>";
		var hresult_2 = "<dd class=\"fl_none division_dd\">未填写</dd>";
		
		if(results && results[0] && results[0].id){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					if(textarea_show(results[i].contentDescribe1)==0){    //全为空格、回车
						hresult_2 =  "<dd class=\"fl_none division_dd\">未填写</dd>";
					}else{
						hresult_2 =  "<dd class=\"fl_none division_dd\">"+results[i].contentDescribe1+"</dd>";
					}
				}else if(results[i].valueName){
					hresult_1 =  "<dd>"+results[i].valueName+"</dd>";
				}
			}
		}
		
		return  "<div class=\"mb_24  clearfix\">" + htitle + hresult_1 + "<br/>" + hresult_2 + "</div>";
	}else{
		var eresult_1 = one_select_edit(title,'radio','5');
		
		var r_value = '';
		if(results && results.length > 0){
			for(var i = 0;  i < results.length; i++ ){
				if(!results[i].valueId){
					if(results[i].contentDescribe1){
						if(textarea_show(results[i].contentDescribe1)==0){  //全为空格、回车
							r_value = '';
						}else{
							r_value = results[i].contentDescribe1;
						}
					}
					var result_id = results[i].id;
					break;
				}
			}
		}
		var eresult_2 = 
			"<dd class=\"fl_none\">" +
				"<textarea resultId='"+result_id+"' class=\"textarea_h\" " +
					"data-title-id='"+title.id+"'  id ='"+title.id+"' data-type='"+title.type+"' oninput=countChar('"+title.id+"','"+title.id+"_lable',"+title.valRuleMark+")  placeholder='"+title.placeholder+"' data-must='"+title.isMust+"' name='"+title.id+"'>" +
					 	r_value +
				"</textarea>" +
				"<p class=\"num_tj\"><label id="+title.id+"_lable>"+title.valRuleMark+"</label><span>/"+title.valRuleMark+"</span></p>" +
			"</dd>";	
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult_1 + "<br/>" + eresult_2 + "</div>";
	}
	
}


//6:复选带备注(textarea)
function type_6_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	var results = title.resultList;
	
	if(mark == 's'){
		var hresult_1 = "<dd>未选择</dd>";
		var hresult_2 = "<dd class=\"fl_none division_dd\">未填写</dd>";
		
		if(results && results[0] && results[0].id){
			
			var hasC = false;
			var cr = "";
			$.each(results,function(i,o){
				if(this.valueName){
					hasC = true;
					cr +=  "<dd >"+this.valueName+"</dd> &nbsp;&nbsp;";
				}else if(this.contentDescribe1){
					hresult_2 = "<dd class=\"fl_none division_dd\">"+this.contentDescribe1+"</dd>";
				}
			});
			
			if(hasC == true){
				hresult_1 = cr;
			}
		}

		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult_1 + "<br/>" + hresult_2 + "</div>";
	}else{
		htitle = "<dt class=\"fl_none\" data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
		
		var li = "";
		var values = title.valueList;
		$.each(results,function(i,o){
			if(this.checked){
				li +=  "<li class=\"check_label active\" data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
			}else{
				li +=  "<li class=\"check_label\" data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
			}
		});
		var eresult_1 = 
			"<dd class=\"fl_none\">" +
				"<ul class=\"h_edit_checkbox clearfix\">" +
					li +
				"</ul>" +
			"</dd>";	
		
		
		var r_value = '';
		if(results && results.length > 0){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					r_value = results[i].contentDescribe1;
					break;
				}
			}
		}
		var eresult_2 = 
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\" " +
					"data-title-id='"+title.id+"' data-type='"+title.type+"' id ='"+title.id+"' oninput=countChar('"+title.id+"','"+title.id+"_lable',"+title.valRuleMark+")  placeholder='"+title.placeholder+"' data-must='"+title.isMust+"' name='"+title.id+"'>" +
					 	r_value +
				"</textarea>" +
				"<p class=\"num_tj\"><label id="+title.id+"_lable>"+title.valRuleMark+"</label><span>/"+title.valRuleMark+"</span></p>" +
			"</dd>";	
		
		return  "<div class=\"mb_24 clearfix\">" + htitle  + eresult_1 + "<br/>" + eresult_2 + "</div>";
	}
	
}




// 7:附件
function type_7_html(title){
	
	return  "<dt class=\"fl_none\" data-must='"+title.isMust+"'  data-type='"+title.type+"'> 除去非主营业务外，运营数据曲线变化（细分项目、拆分到年度、月度、周、日）：</dt>" +
			"<dd class=\"fl_none\">" +
				"<img src=\"img/loginbg.gif\" alt=''>" +
				"<img src=\"img/loginbg.gif\" alt=''>" +
			"</dd>";
}



// 8:文本域
function type_8_html(title,mark){
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	var results = title.resultList;
	
	if(mark == 's'){
		var hresult = "<dd class=\"fl_none division_dd\">未填写</dd>";
		if(results && results[0] && results[0].contentDescribe1){
			hresult = "<dd class=\"fl_none division_dd \" >"+results[0].contentDescribe1+"</dd>";
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + "<br/>" + hresult + "</div>";
	}else{
		htitle = "<dt class=\"fl_none\" data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";

		var r_value = '';
		if(results && results[0] && results[0].contentDescribe1) r_value = results[0].contentDescribe1;
		if(title.resultList){
			var result_id=title.resultList[0].id;
		}
		var eresult =
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\" resultId='"+result_id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' id ='"+title.id+"' oninput=countChar('"+title.id+"','"+title.id+"_lable',"+title.valRuleMark+")  placeholder='"+title.placeholder+"' data-must='"+title.isMust+"' name='"+title.id+"'>" +
					r_value +
				"</textarea>" +
				"<p class=\"num_tj\"><label id="+title.id+"_lable>"+title.valRuleMark+"</label><span>/"+title.valRuleMark+"</span></p>" +
			"</dd>";
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + "<br/>" + eresult + "</div>";
	}
}



//10:表格
function type_10_html(title,mark){
	table_delComArr[title.id] = [];
	table_toedit_Value[title.id] = {};
	table_tosave_Value[title.id] = {};
	
	var htitle = "<dt data-tid='"+title.id+"' data-type='"+title.type+"' data-must='"+title.isMust+"'>"+title.name+"</dt>";
	 
	var tableHeader = title.tableHeader;
	var dataList = title.dataList;
	
	if(mark == 's'){
		
		var filed_sort = [];
		if(title.code == 'NO5_7_1'){   //综合竞争比较
			filed_sort = ['field1','field2','field3','field4','field5'];
			table_filed[title.id] = filed_sort;
		}
		
		var hresult = "<dd>未填写</dd>";
		if(dataList != null && dataList.length != 0){
			
			table_value(title.id,dataList);
			
			hresult = "<dd class=\"fl_none\"><table data-talbe-tid='"+title.id+"' ><thead><tr>"
			
			var th = "";
			for(var i = 0 ; i < filed_sort.length; i++){
				th +='<th>'+tableHeader[filed_sort[i]]+'</th>';
			}
			
			hresult += th + "</tr></thead><tbody>";
			
			var tr = "";
			$.each(dataList,function(){
				tr += '<tr>';
				for(var i = 0 ; i < filed_sort.length; i++){
					tr +='<td>'+this[filed_sort[i]]+'</td>';
				}
				tr += "</tr>";
			});
			hresult += (tr + "</tbody></table></dd>");
		}
		return  "<div class=\"mb_24 clearfix\"><dl class=\"clearfix\">" + htitle + hresult + "</dl></div>";
	}else{
		var to_add = "<a href='javascript:;' class=\"blue pubbtn bluebtn btn_compet\" onclick=\"add_"+title.code+"(this,'"+title.id+"','"+title.code+"')\" >新增</a>";
		
		var filed_sort = table_filed[title.id];
		
		var eresult = "<dd class=\"fl_none\"><table><thead>";
		
		var th = "<tr>";
		for(var i = 0 ; i < filed_sort.length; i++){
			var filed  = filed_sort[i];
			th +='<th>'+tableHeader[filed]+'</th>';
		}
		th +='<th>操作</th>';
		
		eresult += th + "</tr></thead><tbody data-tbody-tid='"+title.id+"' data-tbody-tcode='"+title.code+"' >";
		
		if(dataList != null && dataList.length != 0){
			if(dataList.length >= 10){
				to_add = "<a href='javascript:;' class=\"blue pubbtn bluebtn btn_compet\" onclick=\"add_"+title.code+"(this,'"+title.id+"','"+title.code+"')\" style=\"display:none;\" >新增</a>";
			}
			var tr = "";
			$.each(dataList,function(i,o){
				tr += '<tr data-opt="old" data-result-id="'+o.id+'" >';
				for(var i = 0 ; i < filed_sort.length; i++){
					tr +='<td>'+o[filed_sort[i]]+'</td>';
				}
				
				var edit = "<a href='javascript:;' class=\"blue\" onclick=\"edit_"+title.code+"(this,'"+title.id+"','"+o.id+"')\" >编辑</a>";
				var del = "&nbsp;<a href='javascript:;' class=\"blue\" onclick=\"del_"+title.code+"(this,'"+title.id+"','"+o.id+"')\" >删除</a>";
				tr += ('<td>' + edit + del + '</td>');
				
				tr += "</tr>";
			});
			eresult += tr ;
		}
		
		eresult += "</tbody></table></dd>";
		return  "<div class=\"mb_24 clearfix\">" + htitle  + "<br/>" + eresult + to_add + "</div>";
	}
}





// 11:静态数据
function type_11_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	var hresult = "<dd> - </dd>";
	
	switch (title.code) {
        case "NO1_1_1":  //项目编号
        	var results = title.resultList;
        	if(mark == 's'){
        		if(results && results[0] && results[0].contentDescribe1){
        			hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
        		}else{
        			hresult = "<dd>"+ projectInfo.projectCode +"</dd>";
        		}
        	}else{
        		if(results && results[0] && results[0].contentDescribe1){
        			hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
        		}else{
        			hresult = "<dd>"+ projectInfo.projectCode +"</dd>";
        		}
        	}
            break;
        case "NO1_1_2":  //项目负责人
        	hresult = "<dd>"+ projectInfo.createUname +"</dd>";
            break;
        case "NO1_1_3":   //项目合伙人
        	if(projectInfo.hhrName){
        		hresult = "<dd>"+ projectInfo.hhrName +"</dd>";
        	}
            break;
        case "NO1_1_4":   //隶属事业部
        	hresult = "<dd>"+ projectInfo.projectCareerline +"</dd>";
            break;
        default:
            break;
    }
	
	return  "<div class=\"mb_24 base_half clearfix\">" + htitle + hresult + "</div>";
}





//12:单选带备注（input）
function type_12_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	var results = title.resultList;
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		if(results && results[0] && results[0].id){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
					break;
				}else if(results[i].valueName){
					hresult = "<dd>"+results[0].valueName+"</dd>";
				}
			}
		}
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		var li = "";
		var values = title.valueList;
		var has_beizhu = false;
		for(var i = 0;  i < values.length; i++ ){
			if(i+1 == values.length){
				if(values[i].checked){
					has_beizhu = true;
					li +=  "<li> <input type=\"radio\" value='"+values[i].id+"' name='"+title.id+"' onclick=\"other_beizhu(this,'radio')\" data-title-id='"+title.id+"' data-type='"+title.type+"' checked=\"true\" data-must='"+title.isMust+"' name='"+title.id+"'/>" + values[i].name + "</li>";
				}else{
					li +=  "<li> <input type=\"radio\" value='"+values[i].id+"' name='"+title.id+"' onclick=\"other_beizhu(this,'radio')\" data-title-id='"+title.id+"' data-type='"+title.type+"' data-must='"+title.isMust+"' name='"+title.id+"'/>" + values[i].name + "</li>";
				}
			}else{
				if(values[i].checked){
					li +=  "<li> <input type=\"radio\" value='"+values[i].id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' checked=\"true\" data-must='"+title.isMust+"' name='"+title.id+"'/>" + values[i].name + "</li>";
				}else{
					li +=  "<li> <input type=\"radio\" value='"+values[i].id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' data-must='"+title.isMust+"' name='"+title.id+"'/>" + values[i].name + "</li>";
				}
			}
		}
		
		var toadd_li = "";
		var r_value = '';
		if(has_beizhu == true){
			if(results && results.length > 0){
				for(var i = 0;  i < results.length; i++ ){
					if(results[i].contentDescribe1){
						r_value = results[i].contentDescribe1;
						break;
					}
				}
			}
			toadd_li = "<input type=\"text\" class=\"txt\" value='"+ r_value +"'  data-rule-required=\"true\" data-msg-required=\"<font color=red>*</font>不能为空\"  data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' data-must='"+title.isMust+"' name='"+title.id+"'/>";
			
		}else{
			toadd_li = "<input type=\"text\" class=\"txt disabled\" value='"+ r_value +"' disabled='disabled' " +
							"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' data-must='"+title.isMust+"' name='"+title.id+"'/>";
		}
		//var err = "<span class=\"error\" style=\"display:none;\"><font color=\"red\">*</font>其他项内容不能为空</span>";
		var eresult = 
			"<dd>" +
				"<ul class=\"h_radios clearfix\">" +
					li + toadd_li +
				"</ul>" +
			"</dd>";	
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult+"</div>";
	}
}




//13:复选带备注（input）
function type_13_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	
	var results = title.resultList;
	
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		if(results && results[0] && results[0].id){
			var hasC = false;
			var cr = "";
			var cr1 = "";
			
			$.each(results,function(i,o){
				if(this.valueName && this.valueName != '其他'){
					hasC = true;
					cr +=  "<dd  class=\"border_dd\">"+this.valueName+"</dd>";
				}else if(this.contentDescribe1){
					hasC = true;
					cr1 =  "<dd class=\"border_dd\">"+this.contentDescribe1+"</dd>";
				}
			});
			
			if(hasC == true){
				hresult = cr + cr1;
			}
		}

		return  "<div class=\"mb_24 clearfix\">" + htitle +"<div class=\"checked_div clearfix\">"+ hresult + "</div></div>";
	}else{
		var li = "<li> ";
		var values = title.valueList;
		var has_beizhu = false;
		for(var i = 0;  i < values.length; i++ ){
			if(i+1 == values.length){
				if(values[i].checked){
					has_beizhu = true;
					li +=  "<li class=\"check_label active\" data-value='"+values[i].id+"' data-id='"+values[i].id+"' onclick=\"other_beizhu(this,'active')\" data-title-id='"+title.id+"' data-type='"+title.type+"'>"  + values[i].name + "</li>";
				}else{
					li +=  "<li class=\"check_label\" data-value='"+values[i].id+"' data-id='"+values[i].id+"' onclick=\"other_beizhu(this,'active')\" data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + values[i].name + "</li>";
				}
			}else{
				if(values[i].checked){
					li +=  "<li class=\"check_label active\" data-value='"+values[i].id+"' data-id='"+values[i].id+"' data-title-id='"+title.id+"' data-type='"+title.type+"'>"  + values[i].name + "</li>";
				}else{
					li +=  "<li class=\"check_label\" data-value='"+values[i].id+"' data-id='"+values[i].id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + values[i].name + "</li>";
				}
			}
		}
		
		var toadd_li = "";
		var r_value = '';
		if(has_beizhu == true){
			
			if(results && results.length > 0){
				for(var i = 0;  i < results.length; i++ ){
					if(results[i].contentDescribe1){
						r_value = results[i].contentDescribe1;
						var result_id = results[i].id;
						break;
					}
				}
			}
			toadd_li = "<input type=\"text\" resultId='"+result_id+"' required data-valrulemark='"+title.valRuleMark+"' data-msg-required=\"<font color=red>*</font>不能为空\"  class=\"txt\" value='"+ r_value +"'" +
										"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' maxlength='"+title.valRuleMark+"' data-must='"+title.isMust+"' name='"+title.id+"'/>";
		}else{
			toadd_li = "<input type=\"text\" class=\"txt disabled\" required data-valrulemark='"+title.valRuleMark+"' data-msg-required=\"<font color=red>*</font>不能为空\" value='"+ r_value +"' disabled='disabled'" +
							"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' maxlength='"+title.valRuleMark+"' data-must='"+title.isMust+"' name='"+title.id+"'/>";
		}
		//var err = "<span class=\"error\" style=\"display:none;\"><font color=\"red\">*</font>不能为空</span>";
		var eresult = 
			"<dd>" +
				"<ul class=\"h_radios h_edit_checkbox pro_innovation clearfix\">" +
					li + toadd_li + "</li>"
				"</ul>" +
			"</dd>";	
			
		return  "<div class=\"mb_24 clearfix h_edit_txt\">" + htitle  + eresult+"</div>";
	}
}




//14:单选
function type_14_html(entity,title,mark){
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			if(title.id=='1120'){
				var valRuleFormula='';
				var contentDescribe1='';
					$.each(entity.childList,function(i,n){
						if(n.type==1){
							valRuleFormula=n.valRuleFormula;
							if(valRuleFormula && valRuleFormula.indexOf(results[0].valueId)>-1){
								if(n.resultList){
									contentDescribe1=n.resultList[0].contentDescribe1;
								}
							}
						}
					});
					if(contentDescribe1 && contentDescribe1!=""){
						hresult = "<dd data-value='"+results[0].valueId+"'>"+results[0].valueName+'-'+contentDescribe1+"</dd>";
					}else{
						hresult = "<dd data-value='"+results[0].valueId+"'>"+results[0].valueName+"</dd>";
					}
			}else{
				hresult = "<dd>"+results[0].valueName+"</dd>";
			}
		}
		return  "<div class=\"mb_24 base_half division_dd clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = one_select_edit(title,'select','radio');
		return  "<div class=\"mb_24  clearfix\">" + htitle + eresult + "</div>";
	}
}



//15:一个标题带两个文本域
function type_15_html(title,mark){
	var r_value1 = '';
	var r_value2 = '';
	var results = title.resultList;
	
	if(results && results[0] && results[0].id){
		$.each(results,function(i,o){
			if(this.contentDescribe1){
				r_value1 = this.contentDescribe1;
			}
			if(this.contentDescribe2){
				r_value2 = this.contentDescribe2;
			}
		});
	}
	
	var htitle = "<dt data-tid='"+title.id+"' data-must='"+title.isMust+"'>"+title.name+"</dt>";
	
	if(mark == 's'){
		if(!r_value1) r_value1 = '未填写';
		if(!r_value2) r_value2 = '未填写';
		
		var hresult1 = "<dd class=\"fl_none division_dd\">"+r_value1+"</dd>";
		var hresult2 = "<dd class=\"fl_none division_dd\">"+r_value2+"</dd>";
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + "<br/>" + hresult1 + hresult2 + "</div>";
	}else{
		htitle = "<dt class=\"fl_none\" data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
		
		var eresult =
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\" data-title-id='"+title.id+"' data-type='"+title.type+"' id ='"+title.id+"' data-name='remark1' oninput=countChar('"+title.id+"','"+title.id+"_lable',"+title.valRuleMark+")  placeholder='"+title.placeholder+"' data-must='"+title.isMust+"' name='"+title.id+"'>" +
					r_value1 +
				"</textarea>" +
				"<p class=\"num_tj\"><label id="+title.id+"_lable>"+title.valRuleMark+"</label><span>/"+title.valRuleMark+"</span></p>" +
			"</dd>" +
			
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\" data-title-id='"+title.id+"' data-type='"+title.type+"' id ='"+title.id+"_2' data-name='remark2' oninput=countChar('"+title.id+"_2','"+title.id+"_lable2',"+title.valRuleMark+")  placeholder='"+title.content+"' data-must='"+title.isMust+"' name='"+title.id+"'>" +
					r_value2 +
				"</textarea>" +
				"<p class=\"num_tj\"><label id="+title.id+"_lable2>"+title.valRuleMark+"</label><span>/"+title.valRuleMark+"</span></p>" +
			"</dd>";
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + "<br/>" + eresult + "</div>";
	}
}
function type_21_html(title,mark){
	var htitle = "<dt class='select_21' data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"'>"+title.name+"</dt>";
	var has_beizhu = false;
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			if(results[0].valueName=="其他"){
				hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
			}else{
				hresult = "<dd>"+results[0].valueName+"</dd>";
			}
			
		}
		return  "<div class=\"mb_24 base_half division_dd clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = one_select_edit(title,'select','select');
		var res = "" ;		
		if(title.resultList==undefined||(title.resultList!=undefined&&title.resultList[0].valueName!="其他")){
			res="<input type=\"text\" class=\"txt input_21 disabled\"  disabled=\"disabled\" value=''  placeholder='"+title.placeholder+"' data-valrulemark='"+title.valRuleMark+"' required data-msg-required=\"<font color=red>*</font>不能为空\"  data-type='"+title.type+"' maxlength='"+title.valRuleMark+"' data-must='"+title.isMust+"' name='"+title.id+"' >"
		}else{
			var i_val= title.resultList[0].contentDescribe1;
			res="<input type=\"text\" class=\"txt input_21\" placeholder='"+title.placeholder+"' value='"+i_val+"' data-valrulemark='"+title.valRuleMark+"' required data-msg-required=\"<font color=red>*</font>不能为空\"  data-type='"+title.type+"' maxlength='"+title.valRuleMark+"' value='"+title.contentDescribe1+"' data-must='"+title.isMust+"' name='"+title.id+"' >"	
		}
		eresult+=res;
		return  "<div class=\"mb_24  clearfix\">" + htitle + eresult + "</div>";
	}
	
}
function type_23_html(title,mark){
	var htitle = "<dt class='select_21' data-tid='"+title.id+"' data-must='"+title.isMust+"'  data-type='"+title.type+"' data-valRuleFormula='"+title.valRuleFormula+"' data-valRuleMark='"+title.valRuleMark+"'>"+title.name+"</dt>";
	var has_beizhu = false;
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			if(results[0].valueName=="其他"){
				hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
			}else{
				hresult = "<dd>"+results[0].valueName+"</dd>";
			}
			
		}
		return  "<div class=\"mb_24 division_dd resource_branch clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = one_select_edit(title,'select','23');
		var res = "" ;		
		if(title.resultList==undefined||(title.resultList!=undefined&&title.resultList[0].valueName!="其他")){
			res="<input type=\"text\" class=\"txt input_21 disabled\"  disabled=\"disabled\" value=''  placeholder='"+title.placeholder+"' data-valrulemark='"+title.valRuleMark+"' required data-msg-required=\"<font color=red>*</font>不能为空\"  data-type='"+title.type+"' maxlength='"+title.valRuleMark+"' data-must='"+title.isMust+"' name='"+title.id+"' >"
		}else{
			var i_val= title.resultList[0].contentDescribe1;
			res="<input type=\"text\" class=\"txt input_21\" placeholder='"+title.placeholder+"' value='"+i_val+"' data-valrulemark='"+title.valRuleMark+"' required data-msg-required=\"<font color=red>*</font>不能为空\"  data-type='"+title.type+"' maxlength='"+title.valRuleMark+"' value='"+title.contentDescribe1+"' data-must='"+title.isMust+"' name='"+title.id+"' >"	
		}
		eresult+=res;
		return  "<div class=\"mb_24 resource_branch clearfix\">" + htitle + eresult + "</div>";
	}
	
}
//下方保存按钮点击

