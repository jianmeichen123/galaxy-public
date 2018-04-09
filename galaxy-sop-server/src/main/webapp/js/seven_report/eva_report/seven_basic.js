
//单选点击事件
	$('div').delegate(".h_radios input[type='radio']","click",function(){
		var val = $(this).parent().text();
		if(val=="其他"){
			var other_input = $(this).parent().next().find("input");
			other_input.attr("disabled",false);
			other_input.attr("required",true);
		}else{
			$(this).closest(".h_radios").find(".text_li input").attr("disabled",true);
			$(this).closest(".h_radios").find(".text_li input").attr("required",false);
		}
	})
//多选点击事件
	$('div').delegate(".h_radios .check_label","click",function(event){
			 $(this).toggleClass('active');
		  var par_ul = $(this).parent("ul");
		  if(par_ul.children(".check_label").last().hasClass("active")){
			  par_ul.children(".text_li").find("input").attr("disabled",false);
			  par_ul.children(".text_li").find("input").attr("required",true);
		  }else{
			  par_ul.children(".text_li").find("input").attr("disabled",true);
			  par_ul.children(".text_li").find("input").attr("required",false);
		  }
		  event.stopPropagation();
	});
	
	//编辑按钮
	function typeEdit(obj){
		//只可以编辑一个
		$(obj).parents('td').addClass('edit_true');
		var status = 0;
		var thisTr = $(obj).parents('tr');
		var targetTd = thisTr.siblings().find('.condition');
		if(targetTd.hasClass('edit_true')){
			var status = 1;
		};
		if(status==1){
			layer.msg("正在编辑其他模块");
			return false;			
		}
		
		//编辑类型
		var _this=$(obj);
		var id_code=$(obj).attr("attr-id")
		var _td = _this.closest('td');
		var e_type = _this.attr("e-type");
		var radioShow = _td.find('.radioShow');
		$(obj).removeAttr("parent_dom");
		if(e_type=="inside"){
			//内部编辑
			//编辑数据请求
			//请求成功，数据添加
			get_result(id_code,1,radioShow);
			_td.closest(".table_inner").find(".heightL input").addClass("disabled");
			_td.closest(".table_inner").find(".heightL select").addClass("disabled").attr("disabled",true);
			var pText = $(obj).parent().find('p');
			var pSpan = $(obj).parent().find('span');
			_this.hide();
			_td.data('edit','true');
			pText.hide();	
			pSpan.hide();
			//对号，×号显示
			$(obj).closest('td').find('.Button').show();
			$(obj).closest('td').find('.radioShow').show();
			iCheck();
		}else if(e_type=="small_pop"){
			//$("body").css("overflow", "hidden");
			$('.gapPopup').show();
			$(obj).attr("parent_dom","show");
			var  leftNum = _this.offset().left-26;
			var  topNum = _this.offset().top-$(".gapPopup").height()-197;
			//请求成功，数据渲染模板edit_tmpl1
			get_result(id_code,2,$(".gapPopup"));
			$('.gapPopup').css('left',leftNum).css('top',topNum);
			$('.mashLayer').css('opacity','0.1');
			$('.mashLayer').show();			
			$(obj).hide();
			//对号，×号显示
			$(obj).closest('td').find('.Button').show();
			$(obj).closest('td').find('.radioShow').show();
			
		}else if(e_type=="cover_pop"){
			$(obj).attr("parent_dom","show");
			$('.mashLayer').css('opacity','0.5');
			$('.mashLayer').show();
			//请求数据
			//数据渲染模板edit_tmpl2
			get_result(id_code,3,$(".ch_opration"));			
			$('.ch_opration').show();
		}
		//特殊处理项目评测内的刚需和痛点
		if(id_code=="ENO1_1_4"||id_code=="CNO1_1_4"){
		var sp_input = $(".section").find("input[data-title-id='9173'],input[data-title-id='9174'],input[data-title-id='9175'],input[data-title-id='1173'],input[data-title-id='1174'],input[data-title-id='1175']")
		sp_input.parent().hide();
		sp_input.closest(".mb_16").find("dt").hide();
		sp_input.closest(".mb_16").find("dt").last().show();
		}else if(id_code='ENO2_4_4'){   //解决的方法和时间表提示语特殊处理
			var subId=$(obj).siblings(".align_left").find("p").attr("data-sub-id");
			if(subId=="2"){
				var content=$("#myTextarea").attr("data-content");
				$("#myTextarea").attr("placeholder",content);
			}
		}
		editResult(obj);
		validate();
		img_fun();	
		$(".pagebox").attr("data-result",true);
	}
	//编辑回显
	function editResult(obj){
		var e_type=$(obj).attr("e-type");
		var id_code=$(obj).attr("attr-id")
		var p_box=$(obj).siblings(".align_left").find("p");
		var titleVal=p_box.attr("data-title-value");
		var tableTr = $(obj).closest(".table_inner").find(".title-value")
		var radioShow=$(obj).closest("td").find(".radioShow")
		$.each(p_box,function(){
			var p_this=$(this);
			var val=$(this).html();
			var type=$(this).attr("data-type");
			if(e_type!="cover_pop"){  //inside和小弹窗编辑回显
				if(type==1){
					var relateId=p_box.attr("data-relate-id");
					if(val!="未填写"){
						//空格换行 去除HTML标签
						val=val.replace(/<.*?>/g,"")
						val= val.replace(/\<br\>/g,'\n');
						val= val.replace(/&nbsp;/g," ");						
						$(".condition").find("input[data-id='"+relateId+"']").val(val);
					}			
				}else if(type==2){
					var dom=$(obj).siblings(".radioShow").find("input[value='"+titleVal+"']").parent(".iradio_flat-blue");
					dom.addClass("checked");
					dom.children("input").attr("checked",true);
				}else if(type==8 || type==15){
					var relateId=p_box.attr("data-relate-id");
					val= val.replace(/\<br\>/g,'\n').replace(/&nbsp;/g," ").replace(/<.*?>/g,"").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<");
					var textarea=$(".div_tmpl").find("textarea[data-id='"+relateId+"']");
					(val !="未填写") ? textarea.val(val):textarea.val() ;		
				}else if(type==18){
					var relateId=p_box.attr("data-relate-id");
					if(val!="未选择"){
						$(".input_select").attr("value",val);
						$(".input_select").val(val);
					}			
				}else if(type==13 || type==3 ){
					if(titleVal){
						titleVal=titleVal+","
						var titleValList=titleVal.split(",");
						var valList=val.split("、");
						for(var i=0;i<titleValList.length;i++){
							var _parents = $(radioShow).find("input[value='"+titleValList[i]+"']").parent(".icheckbox_flat-blue");
							_parents.addClass("checked");
							var text = _parents.find("label");
							if(text=="其他"){
								_parents.find(".others_text").show();			
							}
							$(radioShow).find("input[value='"+titleValList[i]+"']").parent(".icheckbox_flat-blue").children("input").attr("checked",true);
						}
						var last_id=$(radioShow).children(".icheck:last").find('.icheckbox_flat-blue').hasClass("checked");
						if(last_id){
							$(radioShow).find(".others_text").show();
							$(radioShow).find(".others_text").val(p_box.attr("data-remark"))
						}
					}				
				}else if(type==22 ){
					if(tableTr.length==1&&tableTr.eq(0).hasClass(".black")){
					}else{
						if($(radioShow).find("input").length<=0){
							$(radioShow).html("<p style='margin-left:10px; color:#b2b2b2;'>暂无数据</p>");
							return false;
						}
						$.each(tableTr,function(){
							var heightL=$(this).closest("tr").find(".heightL");
							var _sel=heightL.find("select").val();
							var _inp=heightL.find("input").val();
							var val = $(this).attr("contentc");
							var _parents = $(radioShow).find("input[value='"+val+"']").parent(".icheckbox_flat-blue");
							_parents.addClass("checked").attr({
								"selScore":_sel,
								"inpScore":_inp
							});
							$(radioShow).find("input[value='"+val+"']").attr("checked",true);
							
							
						})
					}
					
				}else if(type==14){
					$(radioShow).find(".input_select").attr("id",titleVal);
					if(val!="未选择"){
						$(radioShow).find(".input_select").attr("value",val);
						$(radioShow).find(".input_select").val(val);
					}
				
					
				}
			}else{  //大弹窗编辑回显
				if(type!=16 && type!=7){
					var data=[];
					var dom=p_this.find("span");
					$(dom).each(function(){
						var span_this=$(this);
						var data_list={};
						var relateId=p_this.data("relateId");
						var titleValue=p_this.attr("data-title-value");
						var val=span_this.html();
						var d_type=p_this.attr("data-type");
						data_list.relateId=relateId;
						data_list.val=val;
						data_list.d_type=d_type;
						if(type==10){
							var table_list=[];
							p_box.find(".income_table").each(function(){
								table_list.push($(this).data("tr"))
							})
							data_list.val=table_list;
						}else if(type==12 || type==14){
							var code=$(this).parent("p").attr("data-code");
							data_list.code=code;
							data_list.titleValue=titleValue;
						}else if(type==13 || type==2){
							data_list.titleValue=titleValue;
						}else if(type==20){
							data_list.val=span_this.attr("value");
						}
						data.push(data_list);
					});
					
					$(data).each(function(){ 
						var n=$(this)[0];
						var d_type=n.d_type;
						if(d_type==1 || d_type==20){
							if(n.val!="未填写"){
								if(d_type==20){
									$("#"+n.relateId+"_select").find("option[data-code='currency1']").attr("selected",true);
									if(n.val.indexOf("美元")!=-1){
										$("#"+n.relateId+"_select").find("option[data-code='currency2']").attr("selected",true);
									}
									n.val=n.val.replace("万人民币","");
									n.val=n.val.replace("万美元","");
								}								
								$("input[data-title-id='"+n.relateId+"']").val(n.val);								
							}
						}else if(d_type==8){
							if(n.val!="未填写"){
								var val= n.val;
								val= val.replace(/\<br\>/g,'\n').replace(/&nbsp;/g," ").replace(/<.*?>/g,"");
								$("textarea[data-title-id='"+n.relateId+"']").val(val);								
							}
						}else if(d_type==2){
							if(n.val!="未选择"){
								if(n.titleValue){
									$(".h_edit_txt dt[data-id='"+n.relateId+"']").siblings("dd").find("input[value='"+n.titleValue+"']").attr("checked","checked");
								}
							}							
						}else if(d_type==10){
							var td_l = n.val;
							if(td_l!="未填写"){														
								if(td_l.length<=0){
									return;
								} 
								$("table[data-title-id='"+n.relateId+"']").show();		
								var judgeId = n.relateId;
								var tr_html="";
								if(td_l!="[表格]"){
								$.each(td_l[0],function(i,n){
									if($(this)[0].id==undefined){
										$(this)[0].id="";
									}  
									//1144 团队重要成员是否拥有足够、合理的股权
									if(judgeId=='1144'){$(this)[0].field2=_parsefloat($(this)[0].field2)}
									var td_html="<td data-field-name=\"field1\">"+$(this)[0].field1+"</td><td data-field-name=\"field2\">"+$(this)[0].field2+"</td><td data-field-name=\"opt\"><span class=\"blue\" data-btn=\"btn\" onclick=\"s_editRow(this)\">编辑</span><span class=\"blue\" data-btn=\"btn\" onclick=\"delRow(this)\">删除</span></td>";
									tr_html+="<tr data-id=\""+$(this)[0].id+"\" class=\"\">"+td_html+"</tr>"	;								
								})
								}
								$("table[data-title-id='"+n.relateId+"']").append(tr_html);
							}
							check_table_tr_edit();
						}else if(d_type==12){
							if(n.val!="未选择"){
								$(".h_edit_txt dt[data-code='"+n.code+"']").siblings("dd").find("li input[type='radio'][value='"+n.titleValue+"']").attr("checked","checked");
								var  lastId=$(".h_edit_txt dt[data-code='"+n.code+"']").siblings("dd").find("li").last().prev().find("input").attr("value");
								if(n.titleValue==lastId){
									$(".h_edit_txt dt[data-code='"+n.code+"']").siblings("dd").find("li").last().find("input").removeAttr("disabled");
									$(".h_edit_txt dt[data-code='"+n.code+"']").siblings("dd").find("li").last().find("input").val(n.val);
								}
							}
						}else if(d_type==14){
							if(n.val!="未选择"){
								$(".h_edit_txt select[data-title-id='"+n.relateId+"']").val(n.titleValue);
							}
							
						}else if(d_type==13){
							if(n.val!="未选择"){
								if(n.titleValue){
									n.titleValue=n.titleValue+",";
									var titleValList=n.titleValue.split(",");
									var valList=n.val.split("、");
									var lastId=$(".h_edit_txt").find("dt[data-title-id='"+n.relateId+"']").siblings("dd").find(".check_label:last").attr("value");
									var _dt=$(".h_edit_txt").find("dt[data-title-id='"+n.relateId+"']");
									_dt.siblings("dd").find(".text_li input").val("").attr("disabled",true).removeAttr("required");
									//_dt.siblings("dd").find(".text_li input").val("");
									for(var i=0;i<titleValList.length;i++){
										
										_dt.siblings("dd").find(".check_label[value='"+titleValList[i]+"']").addClass("active");										
										if(titleValList[i]==lastId){
											_dt.siblings("dd").find(".text_li input").val(valList[valList.length-1]).attr("disabled",false).attr("required",true);
											//_dt.siblings("dd").find(".text_li input").val(valList[valList.length-1]);
										}
									}
								}
							}
						}
										
					})
				}else if(type==16){//商业模式特殊情况
					var data=[];
					var dom=p_this;
					$(dom).each(function(){
						var data_list={};
						var relateId=$(this).attr("data-relate-id");
						var str=$(this).attr("data-remark");
						if(str !=undefined && str.indexOf("<sitg>")>-1){
							var str=str.split("<sitg>");
							var inputsValueList=[];
						   for(var i=0;i<str.length;i++){
								if(str[i].indexOf("</sitg>")>-1){
									var inputsValue=str[i].substring(0,str[i].indexOf("</sitg>"));
									inputsValueList.push(inputsValue);
								}
							}
						   var div=$(".h_edit_txt");
						   for(var j=0;j<div.children("dd").length;j++){
							   div.children("dd").eq(j).find("input").val(inputsValueList[j].trim());
							   
						   }
						}
					});
				}else if(type==7){
					var dataList=[];
					var dom=p_this.find("em.income_pic");
					$(dom).each(function(){
						var data={
								url:"",
								list:""
						};
						var _url=$(this).attr("data-file-url");
						var _durl=$(this).attr("data-url");
						var _list=$(this).attr("data-list");
						var _id=$(this).attr("data-file-id");
						data.url=_url;
						data.durl=_durl;
						data.list=_list;
						if(_id!=undefined||_id!=""){
							data.id=_id;
						}						
						dataList.push(data);
					})
					var html="";
					if(dataList.length>0){
						for(var i=0;i<dataList.length;i++){
							if(dataList[i].url==undefined){
								html +=  '<li class="pic_list fl" >'
						              +'<a href="javascript:;" class="h_img_del"></a>' +'<img  src="' + dataList[i].durl + '" data-list="'+dataList[i].list+'"/></li>';
								
							
							}else{
								html +=  '<li class="pic_list fl" >'
						              +'<a href="javascript:;" class="h_img_del"></a>' +'<img  src="' + dataList[i].url + '" data-id="'+dataList[i].id+'" data-list="'+dataList[i].list+'"/></li>';
								
							}
						}
						$(".h_edit_txt .h_imgs").first().html(html);						
					}
					if(dataList.length>4){
						$(".h_edit_txt .h_imgs").last().hide();
					}
				}
				var text = $(".textarea_h");
				for(var i = 0;i<text.length;i++){
					var id=$(text[i]).attr("id");
					var parent=$(text[i]).closest(".ch_opration").attr("id");
					if(parent){
						autoTextarea_eva(id,parent);
					}
					//autoTextarea_eva(text[i]);
				}
				adjust(".ch_opration");
			}
		}) 
		//表单验证
		validate();
		$(".ch_opration form").validate();
		
		
	}
//code--第几道题的code    e_type--1-inside-在td里面编辑    2-small_pop-在小浮层里面编辑    3-cover_pop-在打弹窗里面编辑
function get_result(code,e_type,dom){
		if(code=="ENO4_4_2" || code=="ENO4_4_5"||code=="CNO4_4_5" || code=="CNO4_4_2" || code=="ENO4_4_3" || code=="ENO4_4_4" || code=="CNO4_4_3" || code=="CNO4_4_4"){
			sendGetRequest(platformUrl.queryAllTitleValues+code+"?reportType="+reportType+"&proId="+projectInfo.id,null,function(data){
				var result = data.result.status;
				 if(result == 'OK'){
					 var entity = data.entity;
					 var valueList = data.entity.valueList;
					 var type=entity.type;
					 edit_box_page(e_type,dom,type,valueList,entity);
					//插件回调方法						
				 }
			 })
		}else{
			sendGetRequest(platformUrl.queryAllTitleValues+code+"?reportType="+reportType,null,function(data){
				 var result = data.result.status;
				 if(result == 'OK'){ 
					 var entity = data.entity;
					 var valueList = data.entity.valueList;
					 var type=entity.type;
					 edit_box_page(e_type,dom,type,valueList,entity);
					//插件回调方法
						
				 }
			 })
		}
		   

	}
//编辑显示
function edit_box_page(e_type,dom,type,valueList,entity){
	if(e_type==1){
		 var result_html = ""
		 if(type==2||type==5||type==6||type==12){
			 $.each(valueList,function(i,n){
				 if(n.name=="其他"){
				 result_html += "<div class=\"icheck\"><input type=\"radio\" class=\"others\" name="+n.titleId+" value="+n.id+" data-title-id="+n.titleId+" value="+n.code+"/><label>"+n.name+"</label><input type=\"text\" name=\"\" class=\"others_text\" value=\"\" data-valrule="+entity.valRule+" data-valrulemark="+entity.valRuleMark+" ></div>"	 
				 }else{
				 result_html += "<div class=\"icheck\"><input type=\"radio\" name="+n.titleId+" value="+n.id+" data-title-id="+n.titleId+" value="+n.code+"/><label>"+n.name+"</label></div>"	 
				 }
			 })
		}else if(type==1){
			result_html ="<div class=\"icheck\"><input type=\"text\" data-id="+entity.id+" placeholder="+entity.placeholder+" data-valrule="+entity.valRule+" data-valrulemark="+entity.valRuleMark+" ></div>";
		}else if(type==13||type==3){
			 $.each(valueList,function(i,n){						 
				 if(n.name=="其他"){
				 result_html += "<div class=\"icheck\"><input type=\"checkbox\" class=\"others\" name="+n.titleId+" value="+n.id+" data-title-id="+n.titleId+" value="+n.code+"/><label>"+n.name+"</label><input type=\"text\" name=\"\" class=\"others_text\" value=\"\"  required data-valrule="+entity.valRule+" data-valrulemark="+entity.valRuleMark+"></div>"	 
				 }else{
				 result_html += "<div class=\"icheck\"><input type=\"checkbox\" name="+n.titleId+" value="+n.id+" data-title-id="+n.titleId+" value="+n.code+"/><label>"+n.name+"</label></div>"	 
				 }
			 })
		}else if(type==22){
			 $.each(valueList,function(i,n){
				 result_html += "<div class=\"icheck\"><input type=\"checkbox\"  value="+n.value+"><label>"+n.name+"</label></div>"	 
			 })
		}
		else if(type==18){
			var result_li='';
			
			$.each(valueList,function(i,n){
				if(n.content1==undefined){
					n.content1="未知"
				}
				if(n.content2==undefined){
					n.content2="未知"
				}
				result_li += "<li><a href=\"javascript:;\" data-value-code=\"code_"+i+"\" id=\""+n.content1+' '+n.content2+"\"><label class=\"select_1\">"+n.content1+"</label> <label class=\"select_2\">"+n.content2+"</label></a></li> "
			})
			if(valueList.length<=0){
				result_html="<div class=\"dropdown\"> <input class=\"input_select\" type=\"text\" value=\"请选择\"/><ul style=\"border:0;height:0px;margin:0;\"></ul></div>"
			}else{
				result_html="<div class=\"dropdown\"> <input class=\"input_select\" type=\"text\" value=\"请选择\"/><ul class=\"select_list\"><li>请选择</li>"+result_li+"</ul></div>"				
			}
			
		}else if(type==14){
			var result_li='';
			$.each(valueList,function(i,n){
				result_li += "<li><a href=\"javascript:;\" data-code="+n.code+" id="+n.id+">"+n.name+"</a></li> "
			})
			result_html="<div class=\"dropdown\"> <input class=\"input_select\" type=\"text\" value=\"请选择\"/><ul class=\"select_list\"><li>请选择</li>"+result_li+"</ul></div>"
		} 
		 dom.html(result_html);
		 divSelect();
	 }else if(e_type==2){
		 $("#edit_tmpl1").tmpl(entity).appendTo(dom);
	 }else if(e_type==3){
		$("#edit_tmpl2").tmpl(entity).appendTo(dom);
			 $(".ch_opration").css('width',$(".new_left").width())
			 check_table();
			 check_table_tr_edit();
	 }
	
}
	
//小弹窗关闭按钮
function closeX(obj){
	$('.condition').removeClass('edit_true');
	$('body').css('overflow', 'auto');
	$(obj).closest(".table_inner").find(".heightL input").removeClass("disabled")
	$(obj).closest(".table_inner").find(".heightL select").removeClass("disabled").removeAttr("disabled")
	//对号,x号消失
	$(obj).parent().hide();
	//radio 消失
	$(obj).parent().parent().find('.radioShow').hide();
	//p内容展示
	$(obj).parent().parent().find('p').show();	
	$(obj).closest('td').data('edit','false');	
	//select下拉框消失
	$(obj).closest('td').find('.selectTips').hide();
	//弹窗消失
	//$(obj).parent().parent().hide();	
	$(obj).parents(".gapPopup").find(".div_tmpl").remove();
	$(obj).parents(".gapPopup").css({
		top:"auto",
		left:"auto"
	})
	$(obj).closest('.gapPopup').hide();
	$('.mashLayer').hide();
	$("span[parent_dom='show']").removeAttr("parent_dom");
	$(".img_inner").attr("src","");
	font_color($(".condition"));
	//calcScore();
	$(".pagebox").attr("data-result",true);
	$("#save-rpt-btn").removeAttr("disabled"); 
	$("#save-rpt-btn em").removeClass("disabled")
}	
	
//保存方法
function right(obj,type){
	$('.condition').removeClass('edit_true');
	$('body').css('overflow', 'auto');
	//验证
	$(obj).closest(".table_inner").find(".heightL input").removeClass("disabled")
	$(obj).closest(".table_inner").find(".heightL select").removeClass("disabled").removeAttr("disabled")
	if(type=="checkbox" || type=="radio"){
		var form = $(obj).closest("form");
		if(!form.validate().form())
		{
			return false;
		}
	}
	//raido消失
	var other =$(obj).parent().siblings(".radioShow").find(".others");
	var align_left = $(obj).parent().parent().find(".align_left");
	//取值判断
	if(type=="radio"){
		var val_id = $(obj).parent().parent().find('input[type="radio"]:checked').val();
		var val = $(obj).parent().parent().find('input[type="radio"]:checked').parent(".iradio_flat-blue").next("label").html();
		var p = align_left.find('p');
		if(typeof val_id == 'undefined')
		{
			p.text('未选择');
			p.attr("data-title-value",'');
		}
		else
		{
			p.attr("data-title-value",val_id);
			p.text(val);
		}
	}else if(type=="checkbox"){		
		var val_checkbox = $(obj).parent().parent().find('input[type="checkbox"]:checked');

		var p = align_left.find('p');
		var relateId=p.attr("data-title-id");
		var relateId_p= $(".new_left").find("p[data-title-id='" + relateId + "']");
		if(val_checkbox.length==0){
			relateId_p.text('未选择');
			relateId_p.attr("data-title-value",'');		
		}
		else
		{
			var content = new Array();
			var values = new Array();
			$.each(val_checkbox,function(){
				var radio_label = $(this).parent(".icheckbox_flat-blue").next("label");
				var val_text = radio_label.html();				
				var val_id =$(this).val();
				values.push(val_id);
				if(val_text=="其他"){
					val_text=radio_label.next().val();
					relateId_p.attr("data-remark",val_text);
					content.push(val_text);}else{content.push(val_text);}
			});
			relateId_p.html(content.join('、'));
			relateId_p.attr("data-title-value",values.join(','));
			
			
		}
			
	}else if(type=="textarea"){
		var align_left = $("span[parent_dom='show']").parent().find(".align_left");
		p = align_left.find('p');
		var val = $(obj).parent().parent().find("textarea").val();
		val=val.replace(/\n|\r\n/g,"<br>")
		val=val.replace(/\s/g,"&nbsp;");
		if(val == null || val.length == 0 || textarea_show(val)==0)
		{
			val='未填写';
		}
		p.html(val);
		Tfun_8(p);
		
	}else if(type=="input"){
		var input = $(obj).closest("tr").find("input")
		var val = input.val();
		var verify = /^(?!.{201}|^\s*$)/;
		var accord=verify.test(val);
		if(!accord&&val!=''){
			input.focus();
			input.blur();
			var error=input.next(".error");
			(error.length<1||(error.length==1&&error.is(':hidden')))?input.after("<span id=\"-error\" class=\"error\">最多可以输入 200 个字符且不能全为空格</span>"):error.html("最多可以输入 200 个字符且不能全为空格");
			return false;
		}
		var p = align_left.find('p');
		if(val == null || val.length == 0)
		{
			val='未填写';
		}
		p.text(val);
	}else if(type=="select"){
		var p = align_left.find('p');
		var _select = $(obj).closest('td').find('.dropdown').find("input");
		var selectVal = _select.attr("value");
		var selectId = _select.attr("id");
		var selectCode = _select.data("code");
		if(selectVal == '请选择')
		{
			p.text('未选择');
			p.attr("data-title-value",'');
		}
		else
		{
			p.attr("data-title-value",selectId);
			p.text(selectVal);
		}
	}else if(type=="checkSp"){
		var val_checkbox = $(obj).parent().parent().find('input[type="checkbox"]:checked');
		var table = align_left.closest('.table_inner');
		$(obj).parent().hide();
		$(obj).parent().parent().find('.radioShow').hide();		
		if(val_checkbox.length==0){
			var resString = table.find("tr:first-child").clone();
			resString.find(".title-value").text("未选择").attr("contentc","").show().removeClass("black");
			resString.find(".score-div").hide();
			table.empty();
			table.append(resString); 
		}else{
				var resString = table.find("tr:first-child").clone(); 
				resString.find(".result-weight").show();
				if(val_checkbox.length==1){
					resString.find(".score-div").hide();
				}else{
					resString.find(".score-div").show();					
				}
				table.empty();
				resString.find(".score-div").prev().removeAttr("disabled").removeClass("disabled");
				resString.find(".score-div input").removeAttr("disabled").removeClass("disabled");
			var iNum = 0;
			$.each(val_checkbox,function(){
				var res =resString.clone();
				res.find(".title-value").text($(this).parent().next("label").text()).attr("contentc",this.value).show().addClass("black");				
				res.find(".score-div input").attr("name","scor_"+iNum).removeAttr("aria-describedby").val($(this).parent().attr("inpscore"));
				var selscore=$(this).parent().attr("selscore");
				if(selscore==""||!selscore){
					selscore="请选择"
				}
				res.find("select").val(selscore);
				if(val_checkbox.length==1){res.find(".score-div input").val(100).hide()}
				res.find("span.error").remove();
				table.append(res);
				iNum+=1;
			})
		}
		 $(".score-column select,input").change(function(){
				calcScore();
		 });
		 $(".score-column select,input").click(function(){ 
				$(".pagebox").attr("data-result",true);
				$("#save-rpt-btn").removeAttr("disabled"); 
				$("#save-rpt-btn em").removeClass("disabled")
			})
			saveGrade()
	}
	//判断选中其他
	if(other.attr("checked") == "checked"){
		var input_text = other.parents(".radioShow").find(".others_text").val();
	}
	$(obj).parent().parent().find('.radioShow').hide();
	//填充结果
	if(val=="其他"){
		align_left.html(input_text);
	}else{
	}
	//对号，x号消失
	$(obj).parent().hide();
	$(obj).parent().parent().find('p').show();
	$(obj).closest('td').data('edit','false');
	//新添加，弹窗中的
	$(obj).parents(".gapPopup").find(".div_tmpl").remove();
	$(obj).closest('.gapPopup').hide();
	$('.mashLayer').hide();
	$("span[parent_dom='show']").removeAttr("parent_dom");
	if(typeof afterTitleSaved == 'function')
	{
		afterTitleSaved();
	}
	$("span[parent_dom='show']").removeAttr("parent_dom");
	font_color($(".condition"));
	$(".pagebox").attr("data-result",true);
	$("#save-rpt-btn").removeAttr("disabled"); 
	$("#save-rpt-btn em").removeClass("disabled")
}



//大弹窗 取消方法
$('div').delegate(".h_cancel_btn","click",function(event){
	$('.condition').removeClass('edit_true');
	$('body').css('overflow', 'auto');
	$("span[parent_dom='show']").removeAttr("parent_dom");
	var _this = $(this).parents(".ch_opration");
	_this.find("form").remove();
	_this.hide();
	$(".mashLayer").hide();
	$(".pagebox").attr("data-result",true);
	$("#save-rpt-btn").removeAttr("disabled"); 
	$("#save-rpt-btn em").removeClass("disabled")
	event.stopPropagation();
});
//大弹窗 保存方法
$('div').delegate(".h_save_btn","click",function(event){
	$('.condition').removeClass('edit_true');
	$('body').css('overflow', 'auto');
	var align_left = $("span[parent_dom='show']").parent().find(".align_left");
	var array_p = align_left.find("p");
	var form = $(this).parents(".ch_opration").find("form");
	var data=[];
	var data_initial=align_left.text();
	if(!form.validate().form())
	{
		return false;
	}
	//获取保存的的数据
	$.each(form.find(".mb_16"),function(i,n){
		var data_list={};
		var _dt = $(this).find("dt");
		var _resultId=null;
		data_list.code=_dt.data("code");
		data_list.id=_dt.data("id");
		data_type=_dt.data("type");
		data_list.type=data_type;
		if(data_type==1||data_type==8 ){
			var c_val = $(this).find("dd").children().val();
			c_val=c_val.replace(/\n|\r\n/g,"<br>")
			c_val=c_val.replace(/\s/g,"&nbsp;");
			data_list.value=c_val;
			if(data_list.value==""||data_list.value==undefined){
				data_list.value="未填写";
			}
		}else if(data_type==20){
			var val = $(this).find("dd input").val();
			var currency_id = $(this).find("dd select").val();
			var currency=$(this).find("dd select").find("option[data-id='"+currency_id+"']").text();
			data_list.currency=currency+"p"+currency_id;
			data_list.value=_parsefloat(val)+"万"+currency;	
			var res = change_number(val);
			data_list.Tvalue=_parsefloat(val)+currency 
			//data_list.Tvalue=_parsefloat(res[0])+res[1]+currency
			if(val==""||val==undefined){
				data_list.value="未填写";
				data_list.Tvalue="未填写";
				data_list.currency="";
			}
		}else if(data_type==14){
			data_list.value=$(this).find("select").find("option:selected").text();
			data_list.value_id=$(this).find("select").val();
			if(data_list.value==""||data_list.value==undefined){
				data_list.value="未选择";
			}
		}else if(data_type==2||data_type==12){
			var h_radios = $(this).find(".h_radios");
			var value_check = h_radios.find('input[type="radio"]:checked');
			data_list.value=value_check.parent().text();
			data_list.value_id=value_check.val();
			if(data_list.value=="其他"){
				/*other_input.attr("disabled")*/
				data_list.remark1=value_check.parent().next().find("input").val();
			}
			if(data_list.value==""||!data_list.value){
				data_list.value="未选择";
				data_list.value_id="";
			}
		}else if(data_type==7){
			//图片
			var imgUrl=[];
			var img_list = $(this).find(".h_imgs:first-child").find("li");
			$.each(img_list,function(){
				var _this = $(this);
				var img_obj={};
				var _src = _this.find("img").attr("src");
				var _id = _this.find("img").data("id");
				if(_src!=undefined){
					img_obj.url=_src
				}
				if(_id!=undefined||_id!=""){
					img_obj.id=_id;
				}
				imgUrl.push(img_obj);
			})
			data_list.valueList=imgUrl;
		}else if(data_type==16){
			var relateId=$(".mb_16").find("input.hidden").attr("data-title-id");
			data_list.code=$(".mb_16").find("input.hidden").data("code");
			 var div =  $(".mb_16").find(".h_edit_txt");
             var dds=div.find('dd');
             var inputsValueList=[];
             data_list.relateId=relateId;
            for(var i=0;i<dds.length;i++){
             	_resultId = dds.eq(i).children("input").attr("resultId");
             	if(_resultId && _resultId != undefined){
             		data_list.resultId = _resultId;
             	}
             	var field=dds.eq(i).children("input").val();
             	inputsValueList.push(field);
             }
             var content='该项目是一个通过或基于<sitg>'+inputsValueList[0]+'</sitg>的<sitg>'+inputsValueList[1]+'</sitg>的<sitg>'+inputsValueList[2]+'</sitg>，连接<sitg>'+inputsValueList[3]+'</sitg>和<sitg>'+inputsValueList[4]+'</sitg>，为<sitg>'+inputsValueList[5]+'</sitg>提供<sitg>'+inputsValueList[6]+'</sitg>的产品或服务，满足了<sitg>'+inputsValueList[7]+'</sitg>的刚需或解决了<sitg>'+inputsValueList[8]+'</sitg>。'
             data_list.remark1 = content;
		}else if(data_type==10){
			var tableTr=[];
			var tr_list = $(this).find("tr");
			tr_list.splice(0,1);			
			var tab_lengthaf=tr_list.length;
			if (tab_lengthaf.length<1){return;}
			var tab_lengthbf=0;
			//判断表格是否更改过开始
			if(align_left.find("em.income_table").data("tr")!=undefined){
				var tr_data=align_left.find("em.income_table").data("tr")
				tab_lengthbf=tr_data.length;
			}
			if(tab_lengthaf!=tab_lengthbf){
				$(".pagebox").data("result",true);
				$("#save-rpt-btn").removeAttr("disabled"); 
				$("#save-rpt-btn em").removeClass("disabled")
			}else{
				$.each(tr_list,function(){
					var tr_this = $(this);
					var id_a=tr_this.data("id");
					var a_field1=tr_this.find("td[data-field-name='field1']").text();
					var a_field2=tr_this.find("td[data-field-name='field2']").text();
					$.each(tr_data,function(){
						var trd_this = $(this);
						var id_b=trd_this[0].id;
						var b_field1=trd_this[0].field1;
						var b_field2=trd_this[0].field2;
						if(id_b==""||id_b==undefined){
							$(".pagebox").data("result",true);
							$("#save-rpt-btn").removeAttr("disabled"); 
							$("#save-rpt-btn em").removeClass("disabled")
							return false;
						}
						 if(id_a==id_b){
							 if(a_field1!=b_field1||a_field2!=b_field2){
								$(".pagebox").data("result",true);
								$("#save-rpt-btn").removeAttr("disabled"); 
								$("#save-rpt-btn em").removeClass("disabled")
								return false;
							 }
						 }
					})
				})
			}
			//判断表格是否更改过结束
			$.each(tr_list,function(){  
				var _this = $(this);
				var _data={};
				_data.field1=_this.find("td[data-field-name='field1']").text();
				_data.field2=_this.find("td[data-field-name='field2']").text();
				if(_this.data("id")!=""&&_this.data("id")!=undefined){
					_data.id=_this.data("id");
				}
				
				tableTr.push(_data);
			})
			data_list.tableList=tableTr;
		}else if(data_type==13){
			var infoList=[];
			var lis=$("dt[data-title-id='"+data_list.id+"']").siblings("dd").find(".check_label.active");
			var lisId=$("dt[data-title-id='"+data_list.id+"']").siblings("dd").find(".check_label").last().attr("data-id");
			$(lis).each(function(){
				var _this=$(this);
				var info = {
						titleId : _this.attr('data-title-id'),
						value : _this.attr('data-id'),
						remark:_this.text()
					};
				
				if(lisId==info.value){
					info.remark1 =$("dt[data-title-id='"+data_list.id+"']").siblings("dd").find("input[type='text']").val();
				}
				infoList.push(info);
			})
			data_list.infoMOdeList=infoList;
		}
		data.push(data_list);
	})
	//填充保存的的数据
	var align_p = align_left.find("p");
	$.each(align_p,function(){
		var _this=$(this);
		var _code = _this.data("code");
		var titleId=_this.attr("data-relate-id");
		$.each(data,function(){
			var d_this = $(this)[0];
			var dcode = d_this.code;
			var _type =d_this.type;
			var drelateId=d_this.relateId;
			if(_code==dcode){
				if(_type==1||_type==20||_type==8){	
					if(_type==20){
						
						_this.find("span").attr("currency",d_this.currency);
						_this.find("span").attr("value",d_this.value);
						_this.find("span").html(d_this.Tvalue)
					}else if(_type==1){
						_this.find("span").html(_parsefloat(d_this.value));
					}else{
						if(textarea_show(d_this.value)>0){
							_this.find("span").html(d_this.value);
						}
					}
					
					Tfun_8(_this);
				}else if(_type==14||_type==2||_type==12){
					if(d_this.value!="请选择"){
						if(d_this.value == '其他')
						{
							_this.find("span").html(d_this.remark1);
							_this.attr("data-remark",d_this.remark1);
						}
						else
						{
							_this.find("span").html(d_this.value);
							_this.attr("data-remark",'');
						}
						_this.attr("data-title-value",d_this.value_id);
					}else{
						_this.find("span").html(d_this.value);
						_this.attr("data-remark",'');
						_this.attr("data-title-value",d_this.value_id);
					}
				}else if(_type==7){
					_this.find("span").html("");
					if(d_this.valueList.length<=0){
						_this.find("span").html("未添加");
					}else{
						$.each(d_this.valueList,function(i,n){
							if(n.id==undefined){
								var a_img="<em class=\"income_pic\" data-url="+n.url+" data-list="+i+">[图片]</em>";
								
							}else{
								var a_img="<em class=\"income_pic\" data-file-url="+n.url+" data-file-id="+n.id+" data-list="+i+">[图片]</em>";
								
							}
							_this.find("span").append(a_img);
						})
					}
				}else if(_type==16){
					var relateId=d_this.relateId;
					var code=d_this.code;
					var str=d_this.remark1;
					var dds = $(".content_16 p[data-code='" + code + "']");
					var sp_dds = $(".content_16 p[data-relate-id='1006'],.content_16 p[data-relate-id='9006']");
					/*str=str.replace(/\n|\r\n/g,"<br>")
					str=str.replace(/\s/g,"&nbsp;");*/
					if(str !=undefined && str.indexOf("<sitg>")>-1){
						var conStr=str.split("<sitg>");
						var sum=0;
					   for(var i=0;i<conStr.length;i++){
							if(conStr[i].indexOf("</sitg>")>-1){
								var inputsValueLen=conStr[i].substring(0,conStr[i].indexOf("</sitg>")).trim().length;
								sum +=inputsValueLen
							}
						}
					}
					if(str){
						str1=str.replace(/<sitg>/g,'（<sitg>');
						str1=str1.replace(/<\/sitg>/g,'<\/sitg>）');						
					} 
					sp_str1=str1.split("</sitg>）的产品或服务，");
					sp_str1=sp_str1[1];					
					dds.html((d_this.remark1==undefined || sum==0 )?"未填写":str1);
					sp_dds.html((d_this.remark1==undefined || sum==0 )?"未填写":sp_str1);
					dds.attr("data-remark",str);
					Tfun_8(dds)
				}else if(_type==10){
					_this.find("span").html("");
					if(d_this.tableList.length<=0){
						_this.find("span").html("未填写");
					}else{
						var _data = JSON.stringify(d_this.tableList);
						var a_tr="<em class=\"income_table\" data-tr=\'"+_data+"\'>[表格]</em>"
						_this.find("span").append(a_tr);
					}
					income_table();
				}else if(_type==13){
					var valList=[];
					var titleIdList=[];
					$(d_this.infoMOdeList).each(function(i,n){
						var val=n.remark;
						var titleId=n.value;
						if(n.remark=="其他"){
							val=n.remark1;
							_this.attr("data-remark",n.remark1);
						}
						valList.push(val);
						titleIdList.push(titleId);
					})
					_this.find("span").html(valList.join("、"));
					if(valList.join("、")==""){
						_this.find("span").html("未选择");
					}
					
					_this.attr("data-title-value",titleIdList.join(","));
				}
				
			}
		})
	})	
	var _this = $(this).parents(".ch_opration");
	_this.find("form").remove();
	_this.hide();
	$(".mashLayer").hide();
	event.stopPropagation();
	$("span[parent_dom='show']").removeAttr("parent_dom");
	font_color($(".condition"));
	//calcScore();
	$(".pagebox").attr("data-result",true);
	$("#save-rpt-btn").removeAttr("disabled"); 
	$("#save-rpt-btn em").removeClass("disabled")
});
	
//div模拟select下拉框
function divSelect(){
	$(".input_select").unbind("click");
	$(".input_select").attr("readonly",true)
	$(".input_select").click(function(){ 
		var _this = $(this);
		var ul = _this.next("ul"); 		
		if(ul.css("display")=="none"){
			_this.addClass('up');
			ul.slideDown("fast"); 
		}else{ 
			ul.slideUp("fast");
			_this.removeClass('up');
			_this.addClass('input_select')
		} 
	}); 
	$(".dropdown ul li").click(function(){ 
		var target = $(this).closest('.dropdown').find('input');
		var _a=$(this).find('a');
		target.removeClass('up')
		var txt = _a.text(); 
		var _id=_a.attr("id");
		var _code=_a.data("code");
		if($(this).text()=="请选择"){
			target.val("请选择");
			target.attr("value","请选择"); 
			target.attr("id","");
			target.attr("data-code","");
		}else{
			target.val(txt)
			target.attr("value",txt); 
			target.attr("id",_id);
			target.attr("data-code",_code);
		}
		$(".dropdown ul").hide(); 
}); 
}



window.onresize = function(){
	//遮罩层
	$(".ch_opration").css('width',$(".new_left").width());
	function pageHeight(){
		return document.body.scrollHeight;
	}
	function pageWidth(){
		return document.body.scrollWidth;
	}
	$('.mashLayer').height(pageHeight());
	$('.mashLayer').width(pageWidth());	
	adjust(".ch_opration");
}
	//遮罩层
	function pageHeight(){
		return document.body.scrollHeight;
	}
	function pageWidth(){
		return document.body.scrollWidth;
	}
	$('.mashLayer').height(pageHeight());
	$('.mashLayer').width(pageWidth());
	
	//弹窗

	/* 定位到页面中心 */
	function adjust(id) {
	    var w = $(id).width();
	    var h = $(id).height();
	    var t = scrollY() + (windowHeight()/2) - (h/2);
	    if(t < 0) t = 0;
	    $(id).css('top',t+'px');
	}
    
	
	//浏览器视口的高度
	function windowHeight() {
	    var de = document.documentElement;
	    return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
	}

	//浏览器视口的宽度
	function windowWidth() {
	    var de = document.documentElement;
	    return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth
	}

	/* 浏览器垂直滚动位置 */
	function scrollY() {
	    var de = document.documentElement;
	    return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
	}

	/* 浏览器水平滚动位置 */
	function scrollX() {
	    var de = document.documentElement;
	    return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
	}
	
	
	

	
	
	//===================================================新添加
	//填空题的点击编辑按钮弹窗
		$('.editPic1111').click(function(){
			if($(this).hasClass('choose_question')){
				return false;
			}
			//股权结构
			if($(this).hasClass('several_question'))
			{
				$('.ch_stock').show();
				$('.mashLayer').show();
				var _target = $(this).closest('td');
				var  leftNum = _target.offset().left-230;
				var  topNum = _target.offset().top-200;
				$('.ch_stock').css('left',leftNum).css('top',topNum);
				return false;
			}
			//收入模式测评
			if($(this).hasClass('ch_income_multiple'))
			{
				$('.ch_income_evaluation').show();
				$('.mashLayer').show();
				var _target = $(this).closest('td');
				var  leftNum = _target.offset().left-230;
				var  topNum = _target.offset().top-200;
				$('.ch_income_evaluation').css('left',leftNum).css('top',topNum);
				return false;
			}

			//收入结构
			if($(this).hasClass('income_struct')){
				$('.ch_opration').show();
				$('.mashLayer').show();
				var _target = $(this).closest('td');
				var  leftNum = _target.offset().left-230;
				var  topNum = _target.offset().top-200;
				$('.ch_opration').css('left',leftNum).css('top',topNum);
				return false;

			}

			$('.gapPopup').show();
			var _target = $(this).closest('td');
			var  leftNum = _target.offset().left+220;
			var  topNum = _target.offset().top-122;
			$('.gapPopup').css('left',leftNum).css('top',topNum);
			$('.mashLayer').show();



		})

		//股权表格点击弹窗
		$('.content_show').click(function(){
			$('.reasonable_stock').show();
			var _target = $(this).closest('td');
			var  leftNum = _target.offset().left+220;
			var  topNum = _target.offset().top-148;
			$('.reasonable_stock').css('left',leftNum).css('top',topNum);
			$('.mashLayer').show();
		});

		
	 

//弹窗消失按钮
$('.h_cancel_btn').click(function(){
	$('.mashLayer').hide();
	$('.ch_stock').hide();
	$('.ch_opration').hide();
	$('.reasonable_stock').hide();
	$('.customer_income').hide();
	$('.ch_income_evaluation').hide();
	deletedRowIds=[];
	deleteFileIds=[]; 
})
//radio checkbox 插件 渲染方法
function iCheck(){
	$('input').iCheck({
		checkboxClass: 'icheckbox_flat-blue',
		radioClass: 'iradio_flat-blue'
	})
	$('.others').on('ifChecked',function(event){
		 $(this).parents('.radioShow').find('.others_text').show();
		 $(this).parents('.radioShow').find('.others_text').attr("required",true);
		 $(this).attr("checked",true);
	});
	$('.others').on('ifUnchecked',function(event){
		$(this).parents('.radioShow').find('.others_text').hide();
		 $(this).parents('.radioShow').find('.others_text').attr("required",false);
	})
}
function countGrade(data){
	var _this = $(data);
	var tables = _this.closest(".table_inner");
	var inputs = tables.find(".score-div input[type='text']");
	var error_input = tables.find(".score-div input[type='text'].error");
	var num=0;
	if(error_input.length>0){
		tables.find("span.oError").hide();
		return false;
	}
	$.each(inputs,function(){
		var _input = $(this);
		var _val =_input.val();
		if(_val==""){
			//_val=0;
			return;
		}else if(parseInt(_val)>100){
			return false;
		}
		if(_input.hasClass("error")){
			return false;
		}else{
			num+=parseInt(_val);
		}
	}) 
	;
	//alert(num);
	if(num>100){
//		手动加红字
		tables.find("span.oError").hide();
		if(_this.closest("table").closest("td").prev("td").text()=="主要的潜在竞争对手"){
			var errorSpan = "<span class='error oError'>主要的潜在竞争对手的权重之和不能大于100</span>";
		} else{			
			var errorSpan = "<span class='error oError'>主要竞争对手的权重之和不能大于100</span>";
		}
		if(_this.val()!=""){
			_this.after(errorSpan);
		}else {
			$.each(inputs,function(){
				var Ival =$(this).val();
				if(Ival!=""){
					$(this).after(errorSpan);
					return false;
				}
			})
		}
	}else{
		tables.find("span.oError").hide();
	}
}
function saveGrade(){
	var tables = $("table[data-type=22]");
	$.each(tables,function(){
		$.each($(this).find("input.result-weight"),function(){  
			var that=$(this);
			that.focus();
			that.blur();  
			var reg=/(^[1-9][0-9]$|^[0-9]$|^100$)/; 
			if(that.val()!=""&&!reg.test(that.val())){   
				var name=that.attr("name")+"-error";
				that.addClass("error").attr({
					"aria-invalid":true,
					"aria-describedby":name
				}) 
				that.next(".error").show().text("只允许输入数字0~100整数")
			} 
			if($(this).next(".error").length||$(this).hasClass("error")){ 
				return false;
			}
		})
	})
}