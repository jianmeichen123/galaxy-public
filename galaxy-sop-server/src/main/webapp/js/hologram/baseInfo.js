
$(function(){
	//通用取消编辑
	$('div').delegate(".h_cancel_btn","click",function(event){
		var id_code = $(this).attr('attr-hide');
		
		$('#a_'+id_code).show();
		$('#b_'+id_code).remove();
		
		event.stopPropagation();
	});
	
	
	//通用编辑显示
	$('div').delegate(".h_edit_btn","click",function(event){
		var id_code = $(this).attr('attr-id');
		
		event.stopPropagation();
		
		 sendGetRequest(platformUrl.editProjectAreaInfo + pid +"/"+id_code, null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var entity = data.entity;
					var html = toGetHtmlByMark(entity,'e');
					var s_div = toEditTitleHtml(entity, html);
					
					$("#a_"+id_code).hide();
					$("#"+id_code).append(s_div);
				}
		}) 
	});
	
	
	
	
	
	//通用保存
	$('div').delegate(".h_save_btn","click",function(event){
		alert("to save");
		event.stopPropagation();
		
		var id_code = $(this).attr('attr-save');
		
		var fields_value = $("#b_"+id_code).find("input:checked,option:selected");
		var fields_remark1 = $("#b_"+id_code).find("input[type='text'],textarea");
		var fields_value1 = $("#b_"+id_code).find(".active");
		
		
		//1:文本、2:单选、3:复选、4:级联选择、5:单选带备注(textarea)、6:复选带备注(textarea)、
		//7:附件、8:文本域、9:固定表格、10:动态表格、11:静态数据、12:单选带备注(input)、13:复选带备注(input)
		
		var data = {
			projectId : projectInfo.id
		};
		var infoModeList = new Array();
		$.each(fields_value,function(){
			var field = $(this);
			if(field.val() && field.val().length > 0){
				var infoMode = {
						titleId	: field.data('titleId'),
						type : field.data('type'),
						value : field.val()
					};
					infoModeList.push(infoMode);
			}
		});
		$.each(fields_value1,function(){
			var field = $(this);
			var infoMode = {
				titleId	: field.data('titleId'),
				type : field.data('type'),
				value : field.data('value')
			};
			infoModeList.push(infoMode);
		});
		$.each(fields_remark1,function(){
			var field = $(this);
			var infoMode = {
				titleId	: field.data('titleId'),
				type : field.data('type'),
				remark1 : field.val()
			};
			infoModeList.push(infoMode);
		});
		data.infoModeList = infoModeList;
		
		
		sendPostRequestByJsonObj(platformUrl.saveOrUpdateInfo , data, function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					layer.msg('保存成功');
					showArea(id_code);
				} else {
					layer.msg('保存失败');
				}
		}); 
	});
	
	
	
});


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
	var s_div = 
		"<div class=\"h_look h_team_look clearfix\" id=\"a_"+title.code+"\" >" +
			"<div class=\"h_btnbox\">" +
		    	"<span class=\"h_edit_btn\" attr-id='" + title.code + "'>编辑</span>" +
		    "</div>" +
			"<div class=\"h_title\">" + title.name + "</div>" +
			html +
		"</div>";
		
	return s_div;
}

function toEditTitleHtml(title,html){
	var s_div = 
		"<div class=\"h_edit h_team_look clearfix\" id=\"b_"+title.code+"\" >" +
			"<div class=\"h_btnbox\">" +
		    	"<span class=\"h_save_btn\" data-on=\"save\" attr-save=\""+title.code+"\">保存</span>" +
		    	"<span class=\"h_cancel_btn\" data-on=\"h_cancel\" attr-hide=\""+title.code+"\" >取消</span>" +
		    "</div>" +
			"<div class=\"h_title\">" + title.name + "</div>" +
			html +
			"<div class=\"h_edit_btnbox clearfix\">" +
		    	"<span class=\"pubbtn bluebtn h_save_btn fl\" data-on=\"save\" attr-save=\""+title.code+"\" >保存</span>" +
		    	"<span class=\"pubbtn fffbtn fl h_cancel_btn\" data-on=\"h_cancel\" attr-hide=\""+title.code+"\" >取消</span>" +
		    "</div>" +
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
			html += "<div class=\"mb_24 clearfix\">" + this.name + "</div>";
			sendGetRequest(platformUrl.queryProjectAreaInfo + pid +"/" + this.code, null, function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var sign_title = data.entity;
					html += switchTypeByMark(sign_title,mark);
				}
			});
		}else{
			html += switchTypeByMark(this,mark);
		}
	});
	return html;
}

function switchTypeByMark(title,mark){
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
        	//html += type_10_html(title);
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
        default:
            break;
    }
	return html;
}



//1:文本、2:单选、3:复选、4:级联选择、5:单选带备注(textarea)、6:复选带备注(textarea)、
//7:附件、8:文本域、9:固定表格、10:动态表格、11:静态数据、12:单选带备注(input)、13:复选带备注(input)

// 1:文本 
function type_1_html(title,mark){
	var htitle = "<dt>"+title.name+"</dt>";
	
	var results = title.resultList;
	
	if(mark == 's'){
		var hresult = "<dd>未填写</dd>";
		if(results && results[0] && results[0].contentDescribe1){
			hresult = "<dd>"+results[0].contentDescribe1+"</dd>";
		}
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = "<input type=\"text\" class=\"txt\" " +
						"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' />";
		if(results && results[0] && results[0].contentDescribe1){
			eresult = "<input type=\"text\" class=\"txt\" value='"+results[0].contentDescribe1+"' " +
						"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' />";
		}
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}



function one_select_edit(title){
	var eresult = "";
	var values = title.valueList;
	
	if(values.length < 6){
		var li = "";
		$.each(values,function(i,o){
			if(this.checked){
				li +=  "<li><input type=\"radio\" value='"+this.id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' checked=\"true\" />" + this.name  + "</li>";
			}else
				li +=  "<li><input type=\"radio\" value='"+this.id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' />" + this.name  + "</li>";
		});
		eresult = 
			"<dd>" +
				"<ul class=\"h_radios clearfix\">" +
					li + 
				"</ul>" +
			"</dd>";	
	}else{
		var li = "<option data-title-id='"+title.id+"' data-type='"+title.type+"' value='' >请选择</option>";
    	$.each(values,function(i,o){
			if(this.checked){
				li +=  "<option value='"+this.id+ "' data-title-id='"+title.id+"' data-type='"+title.type+"' selected=\"selected\" >"  + this.name + "</option>";
			}else
				li +=  "<option value='"+this.id+ "' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</option>";
		});
    	eresult = 
    		"<dd>" +
		    	"<select>" +
					li +
				"</select>" ;
	    	"</dd>";
	}
	
	return eresult;
}
// 2:单选
function type_2_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			hresult = "<dd>"+results[0].valueName+"</dd>";
		}
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = one_select_edit(title);
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}




// 3:复选
function type_3_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"'>"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		var results = title.resultList;
		if(results && results[0] && results[0].valueName){
			hresult = "";
			$.each(results,function(i,o){
				hresult +=  "<dd>"+this.valueName+" &nbsp;&nbsp;</dd>";
			});
		}
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		htitle = "<dt class=\"fl_none\">"+title.name+"</dt>";
		
		var li = "";
		var values = title.valueList;
		$.each(values,function(i,o){
			if(this.checked){
				li +=  "<li class=\"check_label active\" data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
			}else
				li +=  "<li class=\"check_label\" data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
		});
		var eresult = 
			"<dd class=\"fl_none\">" +
				"<ul class=\"h_edit_checkbox clearfix\">" +
					li +
				"</ul>" +
			"</dd>";
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}


 

function getNextSelect(title,cid){
	var rselect = {};
	sendGetRequest(platformUrl.queryProNvaluesInfo + pid + "/"+ title.id  +"/"+cid ,null, function(data) {
		var result = data.result.status;
		if (result == 'OK') {
			var entitys = data.entityList;
			rselect = nselectHtml(entitys,title,cid);
		}
	});
	return rselect;
}
function nselectHtml(values,title,cid){
	var results = title.resultList;
	
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
	
	var relu_ht =
			"<select onchange=\"showConstarct(this,'"+title.id+ "','" + title.type + "')\" >" +
				li +
			"</select>" ;
	var return_re = {
			htm : relu_ht,
			vpid : cid
	}
	return return_re;
    	
}
// 4:级联选择
function type_4_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"'>"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		var results = title.resultList;
		if(results && results.length > 0 ){
			hresult = "";
			$.each(results,function(i,o){
				if(this.valueName){
					hresult +=  "<dd>"+this.valueName+" &nbsp;&nbsp;</dd>";
				}
			});
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		var eresult = "";
		
		var checked_cid;
		for(var i = 1; i <5; i++){
			if(i == 1){
				var values = title.valueList;
				var return_j = nselectHtml(values,title,checked_cid);
				checked_cid = return_j.vpid;
				eresult += return_j.htm;
			}else{
				if(checked_cid){
					var return_j = getNextSelect(title,checked_cid);
					checked_cid = return_j.vpid;
					eresult += return_j.htm;
				}else{
					eresult += 
						"<select onchange=\"showConstarct(this,'"+title.id+ "','" + title.type + "')\" >" +
							"<option data-title-id='"+title.id+"' data-type='"+title.type+"' value='' >请选择</option>" +
						"</select>" ;
				}
			}
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}
function showConstarct(thisSelect,tid,type){
	var _this = $(thisSelect);
	var vid = _this.find("option:selected").val();
	if(vid){
		var nextSelect = _this.next();
		if(nextSelect && nextSelect.length == 1){
			
			var li = "<option data-title-id='"+tid+"' data-type='"+type+"' value='' >请选择</option>";
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
	    		
	    		for(var i = 0; i<4; i ++){
	    			nextSelect = $(nextSelect).next();
    				if(nextSelect && nextSelect.length == 1){
    					$(nextSelect).html(li);
    				}else{
    					break;
    				}
    			}
	    	});
		}
	}
} 
  



//5:单选带备注 (textarea)
function type_5_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult_1 = "<dd>未选择</dd>";
		var hresult_2 = "<dd>未填写</dd>";
		
		var results = title.resultList;
		if(results && results[0] && results[0].id){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					hresult_2 =  "<dd>"+results[i].contentDescribe1+"</dd>";
				}else if(results[i].valueName){
					hresult_1 =  "<dd>"+results[i].valueName+"</dd>";
				}
			}
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult_1 + "<br/>" + hresult_2 + "</div>";
	}else{
		var eresult_1 = one_select_edit(title);
					
		var eresult_2 = 
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\" " +
					"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' ></textarea>" +
				"<p class=\"num_tj\"><label>0</label>/2000</p>" +
			"</dd>";	
		var results = title.resultList;
		if(results && results.length > 0){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					eresult_2 = 
						"<dd class=\"fl_none\">" +
							"<textarea class=\"textarea_h\" " +
								"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' >" +
								results[i].contentDescribe1 +
							"</textarea>" +
							"<p class=\"num_tj\"><label>500</label>/2000</p>" +
						"</dd>";	
					break;
				}
			}
		}
		
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult_1 + "<br/>" + eresult_2 + "</div>";
	}
	
}


//6:复选带备注(textarea)
function type_6_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult_1 = "<dd>未选择</dd>";
		var hresult_2 = "<dd>未填写</dd>";
		
		var results = title.resultList;
		if(results && results[0] && results[0].id){
			
			var hasC = false;
			var cr = "";
			$.each(results,function(i,o){
				if(this.valueName){
					hasC = true;
					cr +=  "<dd >"+this.valueName+"</dd> &nbsp;&nbsp;";
				}else if(this.contentDescribe1){
					hresult_2 = "<dd >"+this.contentDescribe1+"</dd>";
				}
			});
			
			if(hasC == true){
				hresult_1 = cr;
			}
		}

		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult_1 + "<br/>" + hresult_2 + "</div>";
	}else{
		var eresult_1 = "";
		var eresult_2 = "";
		
		htitle = "<dt class=\"fl_none\">"+title.name+"</dt>";
		
		var li = "";
		var values = title.valueList;
		$.each(results,function(i,o){
			if(this.checked){
				li +=  "<li class=\"check_label active\" data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
			}else{
				li +=  "<li class=\"check_label\" data-value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' >"  + this.name + "</li>";
			}
		});
		eresult_1 = 
			"<dd class=\"fl_none\">" +
				"<ul class=\"h_edit_checkbox clearfix\">" +
					li +
				"</ul>" +
			"</dd>";	
		
		
		eresult_2 = 
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\" data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"'></textarea>" +
				"<p class=\"num_tj\"><label>500</label>/2000</p>" +
			"</dd>";
		var results = title.resultList;
		if(results && results.length > 0){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					eresult2 = 
						"<dd class=\"fl_none\">" +
							"<textarea class=\"textarea_h\" data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"'>" +
								results[i].contentDescribe1 +
							"</textarea>" +
							"<p class=\"num_tj\"><label>500</label>/2000</p>" +
						"</dd>";	
					break;
				}
			}
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle  + eresult_1 + "<br/>" + eresult_2 + "</div>";
	}
	
}




// 7:附件
function type_7_html(title){
	
	return  "<dt class=\"fl_none\"> 除去非主营业务外，运营数据曲线变化（细分项目、拆分到年度、月度、周、日）：</dt>" +
			"<dd class=\"fl_none\">" +
				"<img src=\"img/loginbg.gif\" alt=''>" +
				"<img src=\"img/loginbg.gif\" alt=''>" +
			"</dd>";
}



// 8:文本域
function type_8_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	if(mark == 's'){
		var hresult = "<dd>未填写</dd>";
		
		var results = title.resultList;
		if(results && results[0] && results[0].contentDescribe1){
			hresult = "<dd class=\"fl_none\" >"+results[0].contentDescribe1+"</dd>";
		}
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + "<br/>" + hresult + "</div>";
	}else{
		htitle = "<dt class=\"fl_none\">"+title.name+"</dt>";
		var results = title.resultList;
		var eresult =
			"<dd class=\"fl_none\">" +
				"<textarea class=\"textarea_h\"  data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"'></textarea>" +
				"<p class=\"num_tj\"><label>0</label>/2000</p>" +
			"</dd>";
		if(results && results[0] && results[0].contentDescribe1){
			eresult =
				"<dd class=\"fl_none\">" +
					"<textarea class=\"textarea_h\" data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"'>" +
						results[0].contentDescribe1 +
					"</textarea>" +
					"<p class=\"num_tj\"><label>0</label>/2000</p>" +
				"</dd>";
		}
		
			
		return  "<div class=\"mb_24 clearfix\">" + htitle + "<br/>" + eresult + "</div>";
	}
}


// 11:静态数据
function type_11_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	var hresult = "<dd></dd>";
	
	console.log("projectInfo: " + projectInfo);
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
        			hresult = "<input type=\"text\" class=\"txt\" value='"+results[0].contentDescribe1+"' data-title-id='"+title.id+"' data-type='"+title.type+"' />";
        		}else{
        			hresult = "<input type=\"text\" class=\"txt\" value='"+projectInfo.projectCode+"' data-title-id='"+title.id+"' data-type='"+title.type+"' />";
        		}
        	}
            break;
        case "NO1_1_2":  //项目负责人
        	hresult = "<dd>"+ projectInfo.createUname +"</dd>";
            break;
        case "NO1_1_3":   //项目合伙人
        	hresult = "<dd>"+ projectInfo.projectDepartid +"</dd>";
            break;
        case "NO1_1_4":   //隶属事业部
        	hresult = "<dd>"+ projectInfo.projectCareerline +"</dd>";
            break;
        default:
            break;
    }
	
	return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
}





//12:单选带备注（input）
function type_12_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	
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
		$.each(values,function(i,o){
			if(this.checked){
				li +=  "<li> <input type=\"radio\" value='"+this.id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' checked=\"true\" />" + this.name + "</li>";
			}else
				li +=  "<li> <input type=\"radio\" value='"+this.id+"' name='"+title.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' />" + this.name + "</li>";
		});
		
		var toadd_li = "<input type=\"text\" class=\"txt\" " +
							"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' />";
		var results = title.resultList;
		if(results && results.length > 0){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					toadd_li = "<input type=\"text\" class=\"txt\" value='"+results[0].contentDescribe1+"' " +
									"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' />";
					break;
				}
			}
		}
		
		var eresult = 
			"<dd>" +
				"<ul class=\"h_radios clearfix\">" +
					li + toadd_li +
				"</ul>" +
			"</dd>";	
		
		return  "<div class=\"mb_24 clearfix\">" + htitle + eresult + "</div>";
	}
}



//13:复选带备注（input）
function type_13_html(title,mark){
	
	var htitle = "<dt data-tid='"+title.id+"' >"+title.name+"</dt>";
	
	if(mark == 's'){
		var hresult = "<dd>未选择</dd>";
		
		var results = title.resultList;
		if(results && results[0] && results[0].id){
			hresult = "";
			
			$.each(results,function(i,o){
				if(this.valueName){
					hresult +=  "<dd >"+this.valueName+"&nbsp;&nbsp;</dd>";
				}else if(this.contentDescribe1){
					hresult +=  "<dd >"+this.contentDescribe1+"&nbsp;&nbsp;</dd>";
				}
			});
		}

		return  "<div class=\"mb_24 clearfix\">" + htitle + hresult + "</div>";
	}else{
		var li = "<li> ";
		var values = title.valueList;
		$.each(values,function(i,o){
			if(this.checked){
				li +=  "<input type=\"checkbox\" value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' checked=\"checked\" />" + this.name ;
			}else
				li +=  "<input type=\"checkbox\" value='"+this.id+"' data-title-id='"+title.id+"' data-type='"+title.type+"' />" + this.name ;
		});
		
		var toadd_li = "<input type=\"text\" class=\"txt\" " +
							"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' />";
		var results = title.resultList;
		if(results && results.length > 0){
			for(var i = 0;  i < results.length; i++ ){
				if(results[i].contentDescribe1){
					toadd_li = "<input type=\"text\" class=\"txt\" value='"+results[i].contentDescribe1+"' " +
									"data-title-id='"+title.id+"' data-type='"+title.type+"' placeholder='"+title.placeholder+"' />";
					break;
				}
			}
		}
		
		var eresult = 
			"<dd>" +
				"<ul class=\"h_radios clearfix\">" +
					li + toadd_li + "</li>"
				"</ul>" +
			"</dd>";	
			
		return  "<div class=\"mb_24 clearfix\">" + htitle  + eresult + "</div>";
	}
}























