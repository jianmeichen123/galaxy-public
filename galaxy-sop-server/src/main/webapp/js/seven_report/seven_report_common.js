function editOpen(){
	$(".h_edit_btn").click(function(){
		/*var part=$(this).parent().parent(".h_look").parent(".radius").attr("id").split('_');
		var edit_id='h_edit_'+part[1];
		$(this).attr("id",edit_id)*/
	    $(this).parent().parent(".h_look").hide();
	    $(this).parent().parent(".h_look").siblings(".h_edit").show();
	    $(this).parent().parent().parent(".h").css("background","#fbfbfb")
	  })
	/*取消*/
	$('span[data-on="h_cancel"]').click(function(){
	  $(this).parent().parent(".h_edit").hide();
	  $(this).parent().parent(".h_edit").siblings(".h_look").show();
	  $(this).parent().parent().parent(".h").css("background","#fff");
	})
}

/**
 字典缓存
*/
function dictCache(titleId,subCode,filed){
    var map = {};
    map["undefined"] = ""
    map[""] = ""
	sendGetRequest(platformUrl.getDirectory+titleId+'/'+subCode+"/"+filed,null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK')
				{
					var dataMap = data.userData;
				    var list=dataMap[filed];
				    var name=""
					$.each(list, function(i, value){
					     map[value.id]=value.name;
					});
				}
			})
			return map;
}
function edit_bsaicfun(data){
//	check_12
	$("dt[data-type='12']").parent('dl').find("dd").find("input").click(function(){
		 var par_ul = $(this).parents("ul");
		 if(!par_ul.find('li').eq(par_ul.find("li").length-2).find("input").checked){
				// 没有选择了其他
			  par_ul.find("span.error").remove();
		  }
	})
	//change标识
	if(data=="base"){
		$("input").change(function(){
			var _target=$(this).closest("div").find("dt");
			_target.attr("tochange",true);
			
		})
		$("textarea").on("input",function(){
			var _target=$(this).closest("div").find("dt");
			_target.attr("tochange",true);
			
		})
		$("select").change(function(){
			var _target=$(this).closest("div").find("dt");
			_target.attr("tochange",true);
			
		})
	}else{
		$("input").change(function(){
			var _target=$(this).parents("dl.h_edit_txt").find("dt");
			_target.attr("tochange",true);
			
		})
		$("textarea").on("input",function(){
			var _target=$(this).parents("dl.h_edit_txt").find("dt");
			_target.attr("tochange",true);
			
		})
		$("select").change(function(){
			var _target=$(this).parents("dl.h_edit_txt").find("dt");
			_target.attr("tochange",true);
			
		})
	}
	
	//多选标签
	$(".check_label").click(function(event){
		var _target=$(this).parents("dd").prev();
		_target.attr("tochange",true);
		  $(this).toggleClass('active');
		  //团队三个核心亮点与核心团队具有的能力联动
		  var titleId=$(this).attr("data-title-id");
			if(titleId=="1364"){
					var value=$(this).attr("value");
					$(this).closest(".mb_16").siblings().find(".check_label[data-title-id='"+titleId+"'][value='"+value+"']").toggleClass("active");
			}
		  var par_ul = $(this).parent("ul");
		  if(par_ul.hasClass("pro_innovation")){
			  // 基本信息页面
			  if(!par_ul.children().eq(par_ul.children().length-3).hasClass("active")){
				  par_ul.find("span.error").hide();
			  }
		  }else{
			  if(!par_ul.children().eq(par_ul.children().length-2).hasClass("active")){
				  // 没有选择了其他
				  par_ul.find("span.error").remove();
			  }
		  }
		  
		  event.stopPropagation();
	});
}

	$.fn.showResults = function(readonly){
		var sec = $(this);
		var pid = $(this).data('sectionId');
		var relateId= $(this).attr('data-relate-id');
        var id = $(this).attr('id');
        var str=id.substring(2);
    	var type=str.split("NO")[0];
    	var reportType="";
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
		if(pid == 1302){
		     sendGetRequest(platformUrl.queryMemberList+pid+"/"+projectInfo.id,null,function(data){
		        var result = data.result.status;
                if (result == 'OK')
                {
                   var entityList = data.entityList;
                    $(entityList).each(function(){
                        if($(this)[0]["tableHeader"]){
                            data = $(this)[0]
                        }
                    })
                    
                    buildMemberTable(sec,data);
                }
		     })
		}else{
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
        						buildResults(sec,title,readonly);
        						buildTable(sec,title);
        						buildfinxedTable(sec,title,readonly);
        						dtWidth();
        					});
        				}
        			}
        		})
		}
};
function dtWidth(){
	//获取类型为3、13时题干的宽度
	$.each($(".checked_div"),function(){
		var dt_w=$(this).siblings("dt").width();
		$(this).css("margin-left",dt_w+10);
	})
}
function buildResults(sec,title,readonly)
{
	//普通字段
	if(null!=title.resultList&&title.resultList.length>0)
	{
		if(title.type == 1)
		{
			if(readonly == true)
			{
				if(title.id=='1814' || title.id=='1815'){
					$(".field[data-title-id='"+title.id+"']").text(title.resultList[0].contentDescribe1==undefined ?"未填写":title.resultList[0].contentDescribe1);
				}else{
					$(".field[data-title-id='"+title.id+"']").text(_parsefloat(title.resultList[0].contentDescribe1)==undefined ?"未填写":_parsefloat(title.resultList[0].contentDescribe1));
				}
			}
			else
			{	
				var result_id = title.resultList[0].id;		
				if(title.id=='1814' || title.id=='1815'){
					$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1==undefined ?"":title.resultList[0].contentDescribe1).attr("resultId",result_id);		
				}else{
					$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1==undefined ?"":_parsefloat(title.resultList[0].contentDescribe1)).attr("resultId",result_id);		
				}
			}
		}
		if(title.type == 2)
		{
			if(readonly == true)
			{
				$(".field[data-title-id='"+title.id+"']").text(title.resultList[0].valueName);
			}
			else
			{	
				var result_id = title.resultList[0].id;
				$("input[data-title-id='"+title.id+"'][value='"+title.resultList[0].contentChoose+"']").attr('checked','true');
				$("input[data-title-id='"+title.id+"']").attr("resultId",result_id);
			}
		}
		else if(title.type == 3)
		{
			$.each(title.resultList,function(i,n)
			{
				if(readonly == true)
				{
					$("dd[data-id='"+n.contentChoose+"']").text(n.valueName).show();
				}
				else
				{	
					$("dt[data-id='"+ title.id +"']").next('dd').find("li[data-id='"+ n.contentChoose +"']").addClass('active');
				}
			});

			if (readonly == true)
			{
				var dds = $("dt[data-type='3'][data-title-id='"+ title.id +"']").siblings().children();
				$.each(dds,function(i,n)
				{
					if ($(this).text() == '未选择')
					{
						$(this).hide();
					}
				});
			}
		}
		else if(title.type == 5)
		{
			$.each(title.resultList,function(i,n){
				if(readonly == true){
					if(n.contentChoose!=null){
						//单选按钮回显
						$(".type_radio[data-id='"+title.id+"']").text(n.valueName);
						
					}else{
						$(".field[data-title-id='"+n.titleId+"']").html((n.contentDescribe1==undefined || textarea_show(n.contentDescribe1)==0)?"未填写":n.contentDescribe1);
					}
				}else{
					var str=n.contentDescribe1;
					var result_id = n.id;
					if(str){
						str=str.replace(/<br\/>/g,'\n');
						str=str.replace(/<br>/g,'\n');
						str=str.replace(/&nbsp;/g," ");
					}

						
					if(n.contentChoose!=null){
						//单选按钮回显
						$("input[data-title-id='"+n.titleId+"'][value='"+n.contentChoose+"']").attr('checked','true').siblings().removeAttr("checked");
						$("input[data-title-id='"+n.titleId+"']").attr("resultId",result_id);
					}else{
						$("textarea[data-title-id='"+n.titleId+"']").val((n.contentDescribe1==undefined || textarea_show(n.contentDescribe1)==0 )?"":str).attr("resultId",result_id);
					}
				
					
					
				}
			});
		}
		else if(title.type == 12)
		{
			var dd = $("dt[data-type='12'][data-title-id='"+ title.id +"']").siblings('dd').eq(0);
			var n = title.resultList[0];
			var result_id = n.id;
			$("input[name='"+title.id+"']").attr("resultId",result_id) ;
			if (n.contentDescribe1)
			{
				if(readonly == true)
				{
					dd.text(n.contentDescribe1);
				}
				else
				{
					
					$("input[data-id='"+title.relateId+"']").val(n.contentDescribe1==undefined ?"":n.contentDescribe1);
				}
			}
			
			if(n.contentChoose)
			{
				if(readonly == true)
				{
					if ( n.contentDescribe1 == undefined )
					{
						dd.text(n.valueName);
					}
				}
				else
				{
					var result_id = n.id;
					$("dt[data-title-id='"+ title.id +"']").next('dd').find("input[type='radio'][data-id='"+ n.contentChoose +"']").attr('checked','true').attr("resultId",result_id);
				}
			}

			if(readonly != true)
			{
				var dt = $("dt[data-type='12'][data-title-id='"+ title.id +"']");
				var dl = dt.parent();
				var radios = dl.find('input[type="radio"]');
				var last_id = dl.find('input[type="radio"]:last').attr('data-id');
				var inputText = dl.find('input[type="text"]:last');
				if ( n.contentChoose == last_id ){
					inputText.attr('disabled',false);
				}
				$.each(radios , function ( i ,n )
				{
					$(this).unbind('change').bind('change',function(){
						if ( $(this).attr('data-id') == last_id )
						{
							inputText.attr('disabled',false);
							inputText.attr('required' , true);
							/*inputText.bind('blur',function () {
								var inputTextVlue = $.trim(inputText.val())
								if(inputTextVlue=='')
								{
									layer.msg('不能为空!');
									inputText.focus();
								}
							});*/
						}
						else
						{
							inputText.attr('disabled',true);
							inputText.attr('required' , false);
						}
					});
				});
			}
		}
		else if(title.type == 13)
		{
			var dt = $("dt[data-type='13'][data-title-id='"+ title.id +"']");
			var dl = dt.parent();
			var inputText = dl.find('input[type="text"]:last');
			if(readonly == true){
				$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find("dd[data-code]").text("");
				$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find("dd[data-code]").hide();
				$.each(title.resultList,function(i,n){
					$("dd[data-id='"+n.contentChoose+"']").text(n.valueName).show();
					if(n.contentDescribe1){
						$("dd[data-id='"+n.contentChoose+"']").text(n.valueName).hide();
						$("dd[data-id='"+n.contentChoose+"']").text(n.contentDescribe1).show();
					}
					$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find(".field").hide();
				})
				//判断是否选择
				var i=0;
				if($("dt[data-id='"+ title.id +"']").siblings(".checked_div").find("dd[data-code]").is(":visible")){
					i++;
				}
				if(i==0){
					$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find(".field").show();
				}else{
					$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find(".field").hide();
				}
			}else{
				var dt = $("dt[data-type='13'][data-title-id='"+ title.id +"']");
				var dd = dt.siblings();
				var last_id = dd.find('li.check_label:last').attr('data-id');
				var inputText = dd.find('input[type="text"]:last');
				if ( title.resultList[0].contentChoose == last_id ){
					inputText.attr('disabled',false);
				}
				$.each(title.resultList,function(i,n){
					var result_id= n.id;
					$("dt[data-title-id='"+ title.id +"']").next('dd').find("li[data-id='"+ n.contentChoose +"']").addClass('active').attr("resultId",result_id);
					if(n.contentDescribe1){
						$("dt[data-title-id='"+ title.id +"']").next('dd').find("input[type='text']").val(n.contentDescribe1).attr("resultId",result_id);
						inputText.attr('disabled',false);
						inputText.attr('required' , true);
					}
				})
			}
			/*$.each(title.resultList,function(i,n)
					{
						if(readonly == true)
						{

							$("dd[data-id='"+n.contentChoose+"']").text(n.valueName).show();
							if(n.contentDescribe1){
								$("dd[data-id='"+n.contentChoose+"']").text(n.valueName).hide();
								$("dd[data-id='"+n.contentChoose+"']").text(n.contentDescribe1).show();
							}
							$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find(".field").hide();
						}
						else
						{
							$("dt[data-id='"+ title.id +"']").next('dd').find("li[data-id='"+ n.contentChoose +"']").addClass('active');
							if(n.contentDescribe1){
								$("dt[data-id='"+ title.id +"']").next('dd').find("input[type='text']").val(n.contentDescribe1);
								inputText.attr('disabled',false);
								inputText.attr('required' , true);
							}
						}
					});*/
			/*if (readonly == true)
			{
				var dds = $("dt[data-type='13'][data-title-id='"+ title.id +"']").siblings().children();
				$.each(dds,function(i,n)
				{
					if ($(this).text() == '未选择')
					{
						$(this).hide();
					}
				});

			}*/
		}
		else if(title.type == 15)
		{
			if(readonly == true)
			{
				var dds = $("dd[data-title-id='" + title.id + "']");
				var contentDescribe1=title.resultList[0].contentDescribe1;
				var contentDescribe2=title.resultList[0].contentDescribe2;
				dds.eq(0).html((contentDescribe1==undefined || textarea_show(contentDescribe1)==0)?"未填写":contentDescribe1);
				dds.eq(1).html((contentDescribe2==undefined || textarea_show(contentDescribe2)==0)?"未填写":contentDescribe2);
			}
			else
			{
				var str=title.resultList[0].contentDescribe1;
				if(str){
					str=str.replace(/<br\/>/g,'\n');
					str=str.replace(/<br>/g,'\n');
					str=str.replace(/&nbsp;/g," ");
				}
				var str2=title.resultList[0].contentDescribe2;
				if(str2){
					str2=str2.replace(/<br\/>/g,'\n');
					str2=str2.replace(/<br>/g,'\n');
					str2=str2.replace(/&nbsp;/g," ");
				}
				var textareas = $("textarea[data-title-id='" + title.id + "'][data-type='15']");
				var result_id = title.resultList[0].id;
				textareas.eq(0).val((title.resultList[0].contentDescribe1==undefined || textarea_show(title.resultList[0].contentDescribe1)==0)?"":str).attr("resultId",result_id);
				textareas.eq(1).val((title.resultList[0].contentDescribe2==undefined || textarea_show(title.resultList[0].contentDescribe2)==0)?"":str2).attr("resultId",result_id);
			}
		}
		else if(title.type == 16)
		{
			if(readonly == true)
			{
				var dds = $("dd[data-title-id='" + title.id + "']");
				var str=title.resultList[0].contentDescribe1;
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
					str=str.replace(/<sitg>/g,'（');
					str=str.replace(/<\/sitg>/g,'）');
				}
				dds.html((title.resultList[0].contentDescribe1==undefined || sum==0) ?"未填写":str);
			}
			else{
				var str=title.resultList[0].contentDescribe1;
				var result_id=title.resultList[0].id;
				var div=$(".inputs_block").closest(".h_edit_txt");
				if(str !=undefined){
					 div.children("dd").find("input").attr("resultId",result_id);
				}
				if(str !=undefined && str.indexOf("<sitg>")>-1){
					var str=str.split("<sitg>");
					var inputsValueList=[];
				   for(var i=0;i<str.length;i++){
						if(str[i].indexOf("</sitg>")>-1){
							var inputsValue=str[i].substring(0,str[i].indexOf("</sitg>"));
							inputsValueList.push(inputsValue);
						}
					}
				   for(var j=0;j<div.children("dd").length;j++){
					   div.children("dd").eq(j).find("input").val(inputsValueList[j].trim());
					   
				   }
				}
			}
		}
		else if(title.type == 8)
		{
			if(readonly == true)
			{
				var contentDescribe=title.resultList[0].contentDescribe1;
				//处理商业模式历史数据处理
				if(contentDescribe && (contentDescribe.indexOf('<sitg>')>-1 || contentDescribe.indexOf('</sitg>')>-1) ){
					contentDescribe=contentDescribe.replace(/<sitg>/g,"（");
					contentDescribe=contentDescribe.replace(/<\/sitg>/g,"）");
				}
				$(".field[data-title-id='"+title.id+"']").html((contentDescribe==undefined || textarea_show(contentDescribe)==0) ?"未填写":contentDescribe);
			}
			else
			{
				var str=title.resultList[0].contentDescribe1;
				var result_id = title.resultList[0].id;
				if(str){
					str=str.replace(/<br\/>/g,'\n');
					str=str.replace(/<br>/g,'\n');
					str=str.replace(/&nbsp;/g," ");
				}
				//处理商业模式历史数据处理
				if(str && (str.indexOf('<sitg>')>-1 || str.indexOf('</sitg>')>-1) ){
					str=str.replace(/<sitg>/g,"（");
					str=str.replace(/<\/sitg>/g,"）");
				}
				if(title.id==1203){
					$("textarea[data-title-id='"+title.id+"']").closest('dl').find('img').css("display","block");
					$("textarea[data-title-id='"+title.id+"']").removeAttr('placeholder');
				}
				$("textarea[data-title-id='"+title.id+"']").val((title.resultList[0].contentDescribe1==undefined || textarea_show(title.resultList[0].contentDescribe1)==0)?"":str).attr("resultId",result_id);
			}
		}
		else if(title.type == 14)
		{
			if(readonly == true)
			{
				$("dd[class='field'][data-title-id='"+ title.id +"']").text(title.resultList[0].valueName==undefined ?"未选择":title.resultList[0].valueName);
				//$(".field[data-title-id='"+title.id+"']").text(title.resultList[0].valueName);
			}
			else
			{
				var result_id = title.resultList[0].id;
				//$('select[data-id="' + title.id + '"]').val( title.resultList[0].contentChoose ).attr("resultId",result_id);
				$('select[data-id="' + title.relateId + '"]').val( title.resultList[0].contentChoose ).attr("resultId",result_id);;
			}
		}
		if(title.type == 19 )
		{
			if(title.id=="3012"){
				var num =title.resultList[0].contentDescribe1;
				if(num!=undefined && num!="" && num.indexOf(".")>-1){
					var nums=String(num).split(".");
					if(nums[0].length>9){
						num=num;
					}else{ 
						num=Number(num);
					}
				}
			}
			if(readonly == true)
			{ 
					var _val = title.resultList[0].contentDescribe1;
					var test_num = $(".field[data-title-id='"+title.id+"']").next().text();
					if(test_num.indexOf("元")<0){
						if(_val==undefined){	
							_val="未填写"
						}else{
							_val = _parsefloat(_val);
							var moneyT =test_num;
						}
					}else{
						if(_val==undefined){	
							_val="未填写"
						}else{
							_val = _parsefloat(_val);
								// var res = change_number(_val);
							// _val = _parsefloat(res[0]); 
							var moneyT ='万元';
						}
					}
					
					$(".field[data-title-id='"+title.id+"']").text(_val);
				/*}*/
				if($(".field[data-title-id='"+title.id+"']").text() !='未填写'){
					$(".field[data-title-id='"+title.id+"']").next().text(moneyT).show();
				}
				if(title.resultList[0].contentDescribe1=='' || title.resultList[0].contentDescribe1==undefined){
					$(".field[data-title-id='"+title.id+"']").siblings(".news_table").hide();
				}
			}
			else
			{
				var result_id = title.resultList[0].id;
				if(title.id=="3012"){
					if(title.resultList[0].contentDescribe1){ 
						$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1==undefined ?"":_parsefloat(num)).attr("resultId",result_id);
					}else{
						$("input[data-title-id='"+title.id+"']").val('').attr("resultId",result_id);
					}
					
				}else{
					$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1==undefined ?"":_parsefloat(title.resultList[0].contentDescribe1)).attr("resultId",result_id);
				}
			}
		}
		if( title.type == 20)
		{
			if(readonly == true)
			{
				var str = title.resultList[0].contentDescribe2

				var strs= new Array();
				if(str!=null || str!=undefined){
					strs=str.split("p")
				}
				var _val = title.resultList[0].contentDescribe1;
				if(_val==undefined){
					_val="未填写"
				}else{
					_val = _parsefloat(_val);
					// var res = change_number(_val);
					// _val = _parsefloat(res[0]); 
					var moneyT ='万元';
				}
				$(".field[data-title-id='"+title.id+"']").text(_val);
				if($(".field[data-title-id='"+title.id+"']").text() !='未填写'){
                    if (title.id == '1939' ){
                        $(".field[data-title-id='1939']").text(_val+moneyT+strs[0]);
                    }else{
                        $(".field[data-title-id='"+title.id+"']").next().text(moneyT).show();
                        $(".field[data-title-id='"+title.id+"']").next().next().text(strs[0]).show();

                    }

                }else{
                    if (title.id == '1939' ){
                        $(".field[data-title-id='1939']").text('未填写')
                            //title.resultList[0].contentDescribe1 =
                    }else{
                        $(".field[data-title-id='"+title.id+"']").next().hide();
                        $(".field[data-title-id='"+title.id+"']").next().next().text(strs[0]).hide();

                    }

                }

			}
			else
			{
				var result_id = title.resultList[0].id;
				var result_parentId = title.resultList[0].titleId
				$("input[data-title-id='"+title.id+"']").val(title.resultList[0].contentDescribe1==undefined ?"":_parsefloat(title.resultList[0].contentDescribe1)).attr("resultId",result_id);
				var str = title.resultList[0].contentDescribe2
				var strs= new Array();
				if(str!=null || str!=undefined){
					strs=str.split("p")
				}
				var value=strs[1];
				$('#'+result_parentId+'_select').val(value);
			}
		}
	//最外部else
	}else{
		if(title.type == 3){
			if (readonly == true)
			{
				var dds = $("dt[data-type='3'][data-title-id='"+ title.id +"']").siblings().children();
				$.each(dds,function(i,n)
				{
					if ($(this).text() == '未选择')
					{
						$(this).hide();
					}
				});
				var dd='<dd>未选择</dd>';
				$("dt[data-type='3'][data-title-id='"+ title.id +"']").siblings().append(dd);
			}
		}else if(title.type == 13){
			if (readonly == true)
			{
				$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find("dd[data-code]").text("");
				$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find("dd[data-code]").hide();
				$("dt[data-id='"+ title.id +"']").siblings(".checked_div").find(".field").show();
			}
		}else if(title.type == 8){
			if(readonly !=true){
				//特殊处理商业模式
				if(title.id==1203){
					var defalutText="";
					defalutText=title.placeholder;
					$("textarea[data-title-id='"+title.id+"']").val(defalutText);
					$("textarea[data-title-id='"+title.id+"']").closest('dl').find('img').css("display","block");
					$("textarea[data-title-id='"+title.id+"']").removeAttr('placeholder');
				}
			}
		}
	}
}
function buildMemberTable(sec,title){
        //列表Header

    	if(title.tableHeader)
    	{
    		var header = title.tableHeader;
    		var tables = $("table[data-title-id='"+header.titleId+"']");
    		$.each(tables,function(){
    			var table = $(this);
    			table.attr('data-code',header.code);
    			table.empty();
    			var tr="<tr>";
    			for(var key in header)
    			{   //过滤掉电话字段
                    if(key.indexOf('field')>-1 && key != "field4"&& key != "field6")
                    {
                        tr +='<th data-field-name="'+key+'">'+header[key]+'</th>';
                    }
                }
    			//var editable = table.hasClass('editable');
                tr +='<th data-field-name="opt">操作</th>';
                tr+="</tr>"; 
    			table.append(tr);
				table.closest("dd").prev("dd").show();
				table.hide();
    		});
    	}
    	//列表Row
    	if(title.dataList)
    	{
    	    var list = title.dataList;
    		$.each(list,function(){
    			var row = this;
    			var tables = $("table[data-title-id='"+row.titleId+"']");

    			$.each(tables,function(){
    				var table = $(this);
    				var headerList = table.find('tbody').find('tr:eq(0)').find("th[data-field-name!='opt']");
    				var tr = buildMemberRow(headerList,row,table.hasClass('editable'));
    				table.closest("dd").prev("dd").hide();
    				table.append(tr);
        			table.show();
    			});
    		});
    	}
}
function buildMemberRow(headerList,row,showOpts)
{
	var tr=$("<tr data-row-id='"+row.id+"'></tr>");
	tr.data("person",row);
	if(row.other && row.other!=''){
		row.field2=row.field2+"-"+row.other;
	}else{
		row.field2=row.field2;
	}
    for(var key in row)
   	{
    	//设置data
   		tr.data(key,row[key]);
   	}
    $(headerList).each(function(){
        var key = $(this).attr("data-field-name");
        tr.data(key,row[key]);
        if(key.indexOf('field')>-1)
        {
            if(row[key]){
                //select字段在页面缓存根据id取value
            	 if(key == "field2"){
                 	if(row[key].indexOf("1363")>-1){
                 		var field=row.field2.split("-");
                 		if(field.length>1){
                 			map_edu[row[key]]=row.field2.substring(5,row.field2.length);
                 		}else{
                    		map_edu[row[key]]="";
                    	}
                 	}
                 	if(map_edu[row[key]]==""||map_edu[row[key]]==undefined||map_edu[row[key]]=="undefined"){
                 		map_edu[row[key]]="未知";
                 	}
                      tr.append('<td data-field-name="'+key+'">'+map_edu[row[key]]+'</td>');
                      return;
                 }else if(key == "field5"){
                     tr.append('<td data-field-name="'+key+'">'+map_pos[row[key]]+'</td>');
                     return;
                }else if(key == "field3"){
                    tr.append('<td data-field-name="'+key+'">'+map_sex[row[key]]+'</td>');
                    return;
               }else{
                     tr.append('<td data-field-name="'+key+'">'+row[key]+'</td>');
                }
            }else{
                tr.data(key,"未知");
                tr.append('<td data-field-name="'+key+'">未知</td>');
            }
        }

    })

	var td = $('<td data-field-name="opt"></td>');
    if(showOpts == true)
    {
        td.append('<span class="blue" data-btn="btn" onclick="showMemberRow(this)">查看</span>');
        td.append('<span class="blue" data-btn="btn" onclick="editMemberRow(this)">编辑</span>');
        td.append('<span class="blue" data-btn="btn" onclick="delRow(this)">删除</span>');
        tr.append(td);
    }else{
        td.append('<span class="blue" data-btn="btn" onclick="showMemberRow(this)">查看</span>');
        tr.append(td);
    }
	return tr;
}
function buildTable(sec,title)
{
	//列表Header

	if(title.tableHeader)
	{
		var header = title.tableHeader;
		var tables = $("table[data-title-id='"+header.titleId+"']");
		$.each(tables,function(){
			var table = $(this);
			table.attr('data-code',header.code);
			table.attr('data-funFlag',header.funFlag);
			table.empty();
			var tr="<tr>";
			for(var key in header)
			{
				if(key.indexOf('field')>-1)
				{
					if((header.titleId == '1810'||header.titleId == '1811') && key == 'field2'){
						continue;
					}
					if(header.code=='finance-history'&&(key == 'field8'||key == 'field9'||key == 'field10')){
						continue;
					}
					if((header.code=='delivery-before' || header.code=='delivery-after') && (key == 'field3')){
						continue;
					}
					if(header.code=='competitor_obvious'&&(key != 'field1')){
						continue;
					}
					if(header.code=='competitor_potential'&&(key != 'field1')){
						continue;
					}
					if(key!="opt"){
					    tr +='<th data-field-name="'+key+'">'+header[key]+'</th>';
					}
				}
			}
			if(header.titleId =='1810'||header.titleId =='1811')
			{
				tr +='<th data-field-name="updateUserName">编辑人</th>';
				tr +='<th data-field-name="updateTimeStr">编辑日期</th>';
			}
			
			var editable = table.hasClass('editable');
			if(editable == true||header.funFlag=="1")
			{
				tr +='<th data-field-name="opt">操作</th>';
			}
			tr+="</tr>";
			table.append(tr);
		});
	}
	//列表Row
	if(title.dataList)
	{
		//分期注资计划进行排序
		var tableList = title.dataList;
		if(title.parentId == '3021' || title.parentId == '10095'){
			tableList.sort(function(a,b){
	            return parseInt(Date.parse(new Date(a.field2)))-parseInt(Date.parse(new Date(b.field2)))});
		
		}
		$.each(tableList,function(){
			var row = this;
			var tables = $("table[data-title-id='"+row.titleId+"']");
			tables.show();  //有数据表格显示
			$.each(tables,function(){
				var table = $(this);
				var tr = buildRow(row,table.hasClass('editable'),row.titleId);
				table.append(tr);
				//增加显示字段限制，，市场同类公司估值参考
				var dataCode = table.attr('data-code');
				if(dataCode === 'valuation-reference'){
					var targetTd = table.find('tr').find('td:eq(0)');
					targetTd.addClass('limit-number');
					$('.limit-number').each(function(){
						var _this = $(this);
						var tdText = _this.text();
						_this.attr('title',tdText);
						//_this.setAttribute('title',"tdText");
					})
				};
				//股权结构合理性
				if(dataCode === 'share-holding'|| dataCode === "equity-structure"){
					var targetTd = table.find('tr').find('td:eq(0)');
					targetTd.addClass('limit-number');
					$('.limit-number').each(function(){
						var _this = $(this);
						var tdText = _this.text();
						_this.attr('title',tdText);
							
					})
				}
				//主要战略投资人/财务投资人；
				if(dataCode === "investor-situation" ){
					var targetTd = table.find('tr').find('td:eq(1)');
					targetTd.addClass('limit-number');
					targetTd.css({width:'14.28%',overflow:"hidden"});
					targetTd.css('text-overflow','ellipsis');
					targetTd.css('white-space','nowrap');
					$('.limit-number').each(function(){
						var _this = $(this);
						var tdText = _this.text();
						_this.attr('title',tdText);
							
					})
				};
			});
		});
	}
}
function buildRow(row,showOpts,titleId)
{ 
	var table =$('table[data-title-id="'+titleId+'"]:eq(0)');
	var ths = $('table[data-title-id="'+titleId+'"]:eq(0) th');
	var tr=$("<tr data-row-id='"+row.id+"'></tr>");
	var titleId = table.attr('data-title-id');
	for(var key in row)
	{
		//设置data
		tr.data(key,row[key]);
	}
	$.each(ths,function()
	{
		var $this = $(this);
		var k  = $this.data('fieldName');
		if(k!="opt"){
			if(row[k]!=undefined && row[k]!=null){
				if(titleId=="1906"||titleId=="1920"||titleId=="1325"||titleId=="1144"||titleId=="9144"){	 
					if(k=="field2"){
						row[k] = _parsefloat(row[k])
					}
				}
				if(titleId=="1548"||titleId=="3022"){					
					if(k=="field3"){
						row[k] = _parsefloat(row[k])
					}
				}
				if(titleId=="1903"||titleId=="1908"){
					if(k=="field3"||k=="field4"||k=="field5")
					row[k] = _parsefloat(row[k])
				}
				
				tr.append('<td data-field-name="'+k+'">'+row[k]+'</td>');
			}else{
				tr.append('<td data-field-name="'+k+'"></td>');
			}
			
			//新增的时候添加title
			if(titleId==='1325'){//股权结构合理性
				var targetTd = tr.find('td[data-field-name="field1"]');
				targetTd.attr('title',targetTd.text());
			}else if(titleId==='1908'){//主要战略投资人，财务投资人投资情况
				var targetTd = tr.find('td[data-field-name="field2"]');
				targetTd.attr('title',targetTd.text());
			}else if(titleId==='1920'){//市场同类公司估值参考
				var targetTd = tr.find('td[data-field-name="field1"]');
				targetTd.attr('title',targetTd.text());
			}else if(titleId==='1906'){//市场同类公司估值参考
				var targetTd = tr.find('td[data-field-name="field1"]');
				targetTd.attr('title',targetTd.text());
			}
			
			
		}

	});
	var funFlg=$('table[data-title-id="'+titleId+'"]').attr("data-funFlag");
	var td = $('<td data-field-name="opt"></td>'); 
	if(showOpts == true)
	{
		if(funFlg=="1"){
			td.append('<span class="blue" data-btn="btn" onclick="editRow(this)">查看</span>');
		}
		td.append('<span class="blue" data-btn="btn" onclick="editRow(this)">编辑</span>');
		td.append('<span class="blue" data-btn="btn" onclick="delRow(this)">删除</span>');
		tr.append(td);
	}else{
		if(funFlg=="1"){
			td.append('<span class="blue" data-btn="btn" onclick="editRow(this)">查看</span>');
		    tr.append(td);
		}
	}
	
	/*var tdNumber = tr.children().length;
	var td = tr.children();
	//console.log(tdNumber);
	console.log(td);
	if(tdNumber===6){
		for(var i=0;i<td.length;i++){
			td.css({width:'16.6%',overflow:"hidden"});
			td.css('text-overflow','ellipsis');
			td.css('white-space','nowrap');
			
		}
	}else if(tdNumber===5){
		for(var i=0;i<td.length;i++){
			td.css({width:'20%',overflow:"hidden"});
			td.css('text-overflow','ellipsis');
			td.css('white-space','nowrap');
		}
	}else if(tdNumber===4){
		for(var i=0;i<td.length;i++){
			td.css({width:'25%',overflow:"hidden"});
			td.css('text-overflow','ellipsis');
			td.css('white-space','nowrap');
			
		}
	}else if(tdNumber===3){
		for(var i=0;i<td.length;i++){
			td.css({width:'33.3%',overflow:"hidden"});
			td.css('text-overflow','ellipsis');
			td.css('white-space','nowrap');
			
		}
	}else if(tdNumber===2){
		for(var i=0;i<td.length;i++){
			td.css({width:'50%',overflow:"hidden"});
			td.css('text-overflow','ellipsis');
			td.css('white-space','nowrap');
			
		}
	}else if(tdNumber===8){
		for(var i=0;i<td.length;i++){
			td.css({width:'12.5%',overflow:"hidden"});
			td.css('text-overflow','ellipsis');
			td.css('white-space','nowrap');
			
		}
	}*/
	
	return tr;

}
function buildfinxedTable(sec,title,readonly){
	if(null!=title.fixedTableList&&title.fixedTableList.length>0){
	  if(readonly == true)
		{
		  $.each(title.fixedTableList,function(i,n){
				$("td[data-format='"+n.rowNo+"_"+n.colNo+"']").text(n.valueName);
			});
		}else
		{
			$.each(title.fixedTableList,function(i,n){
				$("td[data-flag='"+n.colNo+"']").find("input[data-row='row"+n.rowNo+"'][value="+n.content+"]").attr('checked','true');
				$("td[data-flag='"+n.colNo+"']").find("input[data-row='row"+n.rowNo+"']").attr('data-value-id',n.id);

			});
		}
	}
}
function setDate(pid, readonly) {
	sendGetRequest(platformUrl.getTitleResults + pid + '/' + projectInfo.id,
			null, function(data) {
				var result = data.result.status;
				if (result == 'OK') {
					var entityList = data.entityList;
					if (entityList && entityList.length > 0) {
						$.each(entityList, function() {
							var title = this;
							buildResults(null, title, readonly);
							buildfinxedTable(null, title, readonly);
						});
					}
				}
			})

}
/*文件刷新*/
function picData(pid){
	var fileids = $(".mglook");
	var infoFileids = "";
	var data={};
	for(var i = 0;i < fileids.length; i++) {
		  fileids.html("未添加");
		  infoFileids += ","+fileids.eq(i).attr("id").replace("look-","");
	}
	data.projectId = pid;
	data.infoFileids = infoFileids;
	sendPostRequestByJsonObjNoCache(
				Constants.sopEndpointURL+'galaxy/informationFile/getFileByProjectByType' ,
				data,
				false,
				function(data) {

					var result = data.result.status;
					if (result == 'OK') {
						var files = data.entity.commonFileList;
						if(files != null && files != ""){
							$.each(files, function (key, value) {
								var fl = value;
								var html="";
								for(var i = 0;i < fl.length; i++){
									html +='<img src="'+fl[i].fileUrl+'" alt="">';
								}
								$('#'+"look-"+key).html(html);
								if($('#'+"look-"+key).parents(".radius").find('.h_edit_btn').is(":visible")){
									$('#'+"look-"+key).parents(".mb_24").show();
									$('#'+"look-"+key).parents(".sign_box").show();
								}
							});
//							if(status == 1){
//								//mustData(pid,0);
//							}else if(status==2){
//								toggle_btn($('.anchor_btn span'),0,save_this);
//							}
						}

					} else {

					}
	});
}
/*文本域字数统计*/
function countChar(textareaName,spanName,maxLimit){
	//var maxLimit=10;
	var textArea=document.getElementById(textareaName);
	var spanCount=document.getElementById(spanName);
	if (textArea.value.length>maxLimit){
		spanCount.innerHTML='0';
		textArea.value = textArea.value.substring(0, maxLimit);
	}else{
		spanCount.innerHTML =maxLimit-textArea.value.length;
	}
}
/**
 * 文本框根据输入内容自适应高度
 * @param                {HTMLElement}        输入框元素
 * @param                {Number}                设置光标与输入框保持的距离(默认0)
 * @param                {Number}                设置最大高度(可选)
 */
var autoTextarea = function(elem, extra, maxHeight) {
    extra = extra || 0;
    var elem=document.getElementById(elem);
    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function(type, callback) {
            elem.addEventListener ?
                elem.addEventListener(type, callback, false) :
                elem.attachEvent('on' + type, callback);
        },
        getStyle = elem.currentStyle ? function(name) {
            var val = elem.currentStyle[name];
            if (name === 'height' && val.search(/px/i) !== 1) {
                var rect = elem.getBoundingClientRect();
                return rect.bottom - rect.top -
                    parseFloat(getStyle('paddingTop')) -
                    parseFloat(getStyle('paddingBottom')) + 'px';
            };
            return val;
        } : function(name) {
            return getComputedStyle(elem, null)[name];
        },
        minHeight = parseFloat(getStyle('height'));
    elem.style.resize = 'none';
    var change = function() {
        var scrollTop, height,
            padding = 0,
            style = elem.style;
        if (elem._length === elem.value.length) return;
        elem._length = elem.value.length;
        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
        };
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        elem.style.height = minHeight + 'px';
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight+10;
                style.overflowY = 'auto';
            } else {
                height = elem.scrollHeight+10;
                style.overflowY = 'hidden';
            };
            style.height = height + extra + 'px';
           if(elem.currHeight!=undefined){
        	   scrollTop += parseInt(style.height) - elem.currHeight;
           }
             document.body.scrollTop = scrollTop;
             document.documentElement.scrollTop = scrollTop;
             elem.currHeight = parseInt(style.height);
        };
    };
    addEvent('propertychange', change);
    addEvent('input', change);
    addEvent('focus', change);
    change();
};
/* 通用验证 */
function validate(){
	 var inputs=$("input[type='text']");
	 for(var i=0;i<inputs.length;i++){
		 	var inputValRule=inputs.eq(i).attr("data-valrule");
			var inputValRuleMark=inputs.eq(i).attr("data-valrulemark");
			//var inputDataId = inputs.eq(i).attr('data-title-id'); 
			if(inputValRule=="2" && inputValRuleMark=="3"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_2":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_2":"<font color=red>*</font>支持0～999的整数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="2" && inputValRuleMark=="2"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_1":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_1":"<font color=red>*</font>支持0～99的整数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="3" && inputValRuleMark=="3"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_3":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_3":"<font color=red>*</font>0到100之间的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="3" && inputValRuleMark=="3,2,0"){   //包含0 
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_3_0":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_3_0":"<font color=red>*</font>支持0～100的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="3" && inputValRuleMark=="ok"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_3":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_3":"<br/><font color=red>*</font>0到100之间的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="10,2"){
				var validate={
						"data-rule-verify_102":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_102":"<font color=red>*</font>支持10位长度的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="8,2"){
				var validate={
						"data-rule-verify_82":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_82":"<font color=red>*</font>支持0～99999999的整数和两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="9,4"){
				var validate={
						"data-rule-verify_94":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_94":"<font color=red>*</font>支持9位长度的四位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="9,2"){
				var validate={
						"data-rule-verify_92":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_92":"<font color=red>*</font>支持9位长度的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="9,6"){
				var validate={
						"data-rule-verify_96":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_96":"<font color=red>*</font>金额最大允许输入9位整数和6位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="13,4"){
				var validate={
						"data-rule-verify_134":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_134":"<font color=red>*</font>金额最大允许输入13位整数和6位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="13,6"){
				var validate={
						"data-rule-verify_136":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_136":"<font color=red>*</font>支持13位长度的6位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="13"){
				var validate={
						"data-rule-verify_13":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_13":"<font color=red>*</font>支持13位长度的整数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="3,2"){
				var validate={
						"data-rule-verify_32":"true",
						//"required":"required",
						"name":i,
						//"msg":"^(?:[1-9][0-9]?|1[01][0-9]|100)$",
						"data-msg-verify_32":"<font color=red>*</font>0到100之间的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="3,5"){
				var validate={
						"data-rule-verify_35":"true",
						//"required":"required",
						"name":i,
						//"msg":"^(?:[1-9][0-9]?|1[01][0-9]|100)$",
						"data-msg-verify_35":"<font color=red>*</font>0到100之间的5位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="5,2"){
				var validate={
						"data-rule-verify_52":"true",
						//"required":"required",
						"name":i,
						//"regString":"^(([1-9][0-9]{0,4})|([0-9]{1,5}\.[1-9]{1,2})|([0-9]{1,5}\.[0][1-9]{1})|([0-9]{1,5}\.[1-9]{1}[0])|([1-9][0-9]{0,4}\.[0][0]))$",
						"data-msg-verify_52":"<font color=red>*</font>支持0～99999的整数和两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="40"){
				var validate={
						"data-rule-verify_40":"true",
						"name":i,
						"data-msg-verify_40":"<font color=red>*</font>不能超过40字且不能全为空格"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="100"){
				var validate={
						"data-rule-verify_100":"true",
						"name":i,
						"data-msg-verify_100":"<font color=red>*</font>不能超过100字且不能全为空格"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="1" && inputValRuleMark=="200"){
				var validate={
						//"maxlength":inputValRuleMark,
						"data-rule-verify_200":"true",
						"name":i,
						"data-msg-verify_200":"<font color=red>*</font>不能超过200字且不能全为空格"	
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="4" && inputValRuleMark=="3,1"){
				var validate={
						"data-rule-vinputValRule_4":"true",
						//"required":"required",
						"name":i,
						//"regString":"^(([1-9][0-9]{0,4})|([0-9]{1,5}\.[1-9]{1,2})|([0-9]{1,5}\.[0][1-9]{1})|([0-9]{1,5}\.[1-9]{1}[0])|([1-9][0-9]{0,4}\.[0][0]))$",
						"data-msg-vinputValRule_4":"<font color=red>*</font>只允许输入数字0~168整数和一位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="4" && inputValRuleMark=="1,4"){
				var validate={
						"data-rule-vinputValRule_54":"true",
						//"required":"required",
						"name":i,
						//"regString":"^(([1-9][0-9]{0,4})|([0-9]{1,5}\.[1-9]{1,2})|([0-9]{1,5}\.[0][1-9]{1})|([0-9]{1,5}\.[1-9]{1}[0])|([1-9][0-9]{0,4}\.[0][0]))$",
						"data-msg-vinputValRule_54":"<font color=red>*</font>0到5之间的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="4" && inputValRuleMark=="1,2"){
				var validate={
						"data-rule-vinputValRule_52":"true",
						//"required":"required",
						"name":i,
						//"regString":"^(([1-9][0-9]{0,4})|([0-9]{1,5}\.[1-9]{1,2})|([0-9]{1,5}\.[0][1-9]{1})|([0-9]{1,5}\.[1-9]{1}[0])|([1-9][0-9]{0,4}\.[0][0]))$",
						"data-msg-vinputValRule_52":"<font color=red>*</font>0到5之间的两位小数"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="1" && inputValRuleMark=="50"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-verify_50_font":"true",
						//"required":"required",
						"name":i,
						"maxlength":"50",
						"data-msg-verify_50_font":"<font color=red>*</font>不能超过50字"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="1" && inputValRuleMark=="30"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-verify_30_font":"true",
						//"required":"required",
						"name":i,
						"maxlength":"30",
						"data-msg-verify_30_font":"<font color=red>*</font>不能超过30字"
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="5"){
				var add_time =i+"_time";
				var validate={
						"class":"time",
						"data-time":add_time
				}
				inputs.eq(i).attr(validate);
				
				if(i=="4"){
					$("[data-time="+add_time+"]").datepicker({
						language:  'zh-CN',
				        format: 'yyyy-mm-dd',
				        autoclose: true,
				        todayBtn: false,
				        startView: 'day',
				        minView:'day',
		                minViewMode: 0,
		                maxView:'decade',
		                todayHighlight: false
			    	});
				}else{
					$("[data-time="+add_time+"]").datepicker({
						language:  'zh-CN',
				        format: 'yyyy-mm',
				        autoclose: true,
				        todayBtn: false,
				        startView: 'year',
				        minView:'year',
		                minViewMode: 1,
		                maxView:'decade',
		                todayHighlight: false
			    	});
				}
				
			}
	 }

}
//配置错误提示的节点，默认为label，这里配置成 span （errorElement:'span'）
$.validator.setDefaults({
	errorElement:'span'
});
//inputValRuleMark=="10,2"
jQuery.validator.addMethod("verify_102", function(value, element) {
	var verify_102 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,9})(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_102.test(value));
}, "不能超过9999999999");
jQuery.validator.addMethod("verify_136", function(value, element) {
	var verify_n4 = /^(\d(\.\d{1,6})?|([1-9][0-9]{1,12})(\.\d{1,6})?)$/;
	return this.optional(element) || (verify_n4.test(value));
}, "支持13位长度的6位小数");
jQuery.validator.addMethod("verify_134", function(value, element) {
	var verify_n4 = /^(\d(\.\d{1,4})?|([1-9][0-9]{1,12})(\.\d{1,4})?)$/;
	return this.optional(element) || (verify_n4.test(value));
}, "不能超过999999999");
jQuery.validator.addMethod("verify_13", function(value, element) {
	var verify_13 = /^([1-9][0-9]{0,12}|0)$/;
	return this.optional(element) || (verify_13.test(value));
}, "不能超过9999999999999");
//inputValRuleMark=="8,2"
jQuery.validator.addMethod("verify_82", function(value, element) {
	var verify_82 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,7})(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_82.test(value));
}, "不能超过99999999");
jQuery.validator.addMethod("verify_92", function(value, element) {   
	var verify_92 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,8})(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_92.test(value));
}, "");
//inputValRuleMark=="9,4"
jQuery.validator.addMethod("verify_94", function(value, element) {
	var verify_94 = /^(\d(\.\d{1,4})?|([1-9][0-9]{1,8})(\.\d{1,4})?)$/;
	return this.optional(element) || (verify_94.test(value));
}, "支持9位长度的四位小数");

jQuery.validator.addMethod("verify_96", function(value, element) {
	var verify_96 = /^(\d(\.\d{1,6})?|([1-9][0-9]{1,8})(\.\d{1,6})?)$/;
	return this.optional(element) || (verify_96.test(value));
}, "金额最大允许输入9位整数和6位小数");
//支持13位长度的四位小数
jQuery.validator.addMethod("verify_3012", function(value, element) {
	var verify_3012 = /^(\d(\.\d{1,4})?|([1-9][0-9]{1,12})(\.\d{1,4})?)$/;
	return this.optional(element) || (verify_3012.test(value));
}, "金额最大允许输入13位整数和6位小数"); 
//支持0到100之间的四位小数
jQuery.validator.addMethod("verify_3010", function(value, element) {
	var verify_3010 = /^([1-9]\d?(\.\d{1,2})?|0\.[1-9]0?|0\.\d[1-9]|100(\.[0]{1,2})?)$/;
	return this.optional(element) || (verify_3010.test(value));
}, "支持0到100之间的两位小数");
//支持0到5之间的四位小数
jQuery.validator.addMethod("verify_3011", function(value, element) {
	var verify_3011 = /^([1-4](\.\d{1,2})?)$|^(5(\.[0]{0,2})?|0\.[1-9]0?|0\.\d[1-9])$/;
	return this.optional(element) || (verify_3011.test(value));
}, "0到5之间的两位小数");

//vinputValRule=="2"
jQuery.validator.addMethod("vinputValRule_2", function(value, element) {
	var vinputValRule_2 = /^([1-9]{1}[0-9]{0,2}|0)$/;
	return this.optional(element) || (vinputValRule_2.test(value));
}, "不能超过100");
jQuery.validator.addMethod("vinputValRule_1", function(value, element) {
	var vinputValRule_1 = /^([1-9]{1}[0-9]{0,1}|0)$/;
	return this.optional(element) || (vinputValRule_1.test(value));
}, "不能超过100")
//vinputValRule=="3"
jQuery.validator.addMethod("vinputValRule_3", function(value, element) {
	var vinputValRule_3 = /^([1-9]|[1-9]\d?(\.\d{1,2})?|0\.\d{1,2}|100|100\.0{1,2})$/;
	return this.optional(element) || (vinputValRule_3.test(value));
}, "不能超过100");
jQuery.validator.addMethod("vinputValRule_3_0", function(value, element) {   
	var vinputValRule_3 = /^([1-9]|[1-9]\d?(\.\d{1,2})?|0\.\d{1,2}|0|100|100\.0{1,2})$/;
	return this.optional(element) || (vinputValRule_3.test(value));
}, "不能超过100"); 
jQuery.validator.addMethod("verify_32_0", function(value, element) {   
	var verify_32_0 =/^([1-9]\d?(\.\d{1,2})?|0\.[1-9]0?|0\.\d[1-9]|100(\.[0]{1,2})?)$/;
	return this.optional(element) || (verify_32_0.test(value));
}, "支持0-100之间的两位小数"); 
//inputValRuleMark=="3,2"

jQuery.validator.addMethod("verify_35", function(value, element) {    
	if(_parsefloat(value)=='0'){value=0;}
	var verify_35 =/^([1-9]\d?(\.\d{1,5})?|0+(?:\.\d{1,5})|100(\.[0]{1,5})?)$/
	return this.optional(element) || (verify_35.test(value));
}, "支持0-100之间的5位小数"); 
jQuery.validator.addMethod("verify_32", function(value, element) {
	var verify_32 = /^([1-9]|[1-9]\d?(\.\d{1,2})?|0\.\d{1,2}|100|100\.0{1,2})$/;
	return this.optional(element) || (verify_32.test(value));
}, "不能超过100");
//inputValRuleMark=="5,2"
jQuery.validator.addMethod("verify_52", function(value, element) {
	var verify_52 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,4})?(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_52.test(value));
}, "不能超过99999");
//inputValRuleMark=="40"
jQuery.validator.addMethod("verify_40", function(value, element) {
	var verify_40 = /^(?!.{41}|^\s*$)/;
	return this.optional(element) || (verify_40.test(value));
}, "不能超过40字");
//inputValRuleMark=="100"
jQuery.validator.addMethod("verify_100", function(value, element) {
	var verify_100 = /^(?!.{101}|^\s*$)/;
	return this.optional(element) || (verify_100.test(value));
}, "不能超过100字");
jQuery.validator.addMethod("verify_200", function(value, element) {  
	var verify_200 = /^(?!.{201}|^\s*$)/;
	return this.optional(element) || (verify_200.test(value));
}, "不能超过200字");
//inputValRule=="4"
jQuery.validator.addMethod("vinputValRule_4", function(value, element) {
	var vinputValRule_4 = /^(((([1-9]{1}[0-9]{0,1}|0)|([1][0-5][0-9])|([1][6][0-7]))(\.\d{1})?)|168|168.0)$/;
	return this.optional(element) || (vinputValRule_4.test(value));
}, "不能超过168");
//inputValRule=="4" && inputValRuleMark="1,4"
jQuery.validator.addMethod("vinputValRule_54", function(value, element) {
	var vinputValRule_54 = /^([0-5]{1}|[0-5]{1}\.\d{1,4}|[0-5]{1}\.0{1,4})$/;
	return this.optional(element) || (vinputValRule_54.test(value));
}, "不能超过5");
//inputValRule=="4" && inputValRuleMark="1,2"
jQuery.validator.addMethod("vinputValRule_52", function(value, element) {
	var vinputValRule_52 = /^([1-4](\.\d{1,2})?)$|^(5(\.[0]{0,2})?|0\.[1-9]0?|0\.\d[1-9])$/;
	return this.optional(element) || (vinputValRule_52.test(value));
}, "不能超过5");
//不能超过50个字
jQuery.validator.addMethod("verify_50_font", function(value, element) { 
	var verify_50_font = /^[^\s](.{0,49})$/;
	return this.optional(element) || (verify_50_font.test(value));
}, "不能超过50个字"); 
//不能超过30个字
jQuery.validator.addMethod("verify_30_font", function(value, element) { 
	var verify_30_font = /^[^\s](.{0,29})$/;
	return this.optional(element) || (verify_30_font.test(value));
}, "不能超过30个字");
//0到10之间的一位小数
jQuery.validator.addMethod("verify_10_1", function(value, element) { 
	var verify_10_1 = /^([0-9]|10)$/;
	return this.optional(element) || (verify_10_1.test(value));
}, "0到10之间的整数"); 
//0到10之间的一位小数
jQuery.validator.addMethod("verify_10_01", function(value, element) { 
	var verify_10_01 = /^([0-9](\.\d{0,1})|\d{0,1}|10|10.0|0)$/;
	return this.optional(element) || (verify_10_01.test(value));
}, "0到10之间的一位小数"); 
//百分数
//百分数
jQuery.validator.addMethod("percentage", function(value, element) {
	var percentage = /^\d+(\.\d{2})?$/;
	return this.optional(element) || (percentage.test(value) && value>0 && value <=100);
}, "只能是0～100的整数和两位小数");
//更新时间
function updateInforTime(projectId,type){
	var test={};
	test.projectId = projectId;
	test.reflect = type;
	sendPostRequestByJsonObj(
				Constants.sopEndpointURL+'/galaxy/InformationOperationTime/updateOperateTime' ,
				test,
				null);
}
//检查table表格是否有数据
function check_table(){
	$.each($('table.editable'),function(){
		if($(this).find('tr').length<=1){
			$(this).hide();
		}
		else{
			$(this).show();
		}
	})
}
//检查是否10条tr
function check_table_tr_edit(){
	$.each($("table.editable"),function(){
		var code = $(this).data('code');
		var limit = getTableRowLimit(code);
		var trs=$(this).find("tr").length-1;
		if(trs>=limit){
			$(this).siblings(".bluebtn").hide();
		}else{
			$(this).siblings(".bluebtn").show();
		}
	})
}
//运营报告中【融资估值中分期添加按钮隐藏】
function check_add_button_hide(reportType,titleId){
	$.each($("table.editable"),function(){
		if(titleId=="3022"&&reportType=="7"){
			$(this).siblings(".bluebtn").hide();
		}else{
			$(this).siblings(".bluebtn").show();
		}
	})
}
//设置10限制
function getTableRowLimit(code)
{
	var num=0;
	switch(code){
		case "equity-structure":
	       num=200; 
	       break;
	   case "investor-situation":
	       num=20; 
	       break;
	   case "operation-indices":
	       num=20; 
	       break;
	   case "competitor_obvious":
	       num=20; 
	       break;
	   case "competitor_potential":
	       num=20; 
	       break;
	   case "grant-part":
	       num=Infinity; 
	       break;
	   default:
		  num=10; 
	}
	return num;
}

//编辑的时候右侧导航隐藏不可用
//data==1的时候为编辑否则为取消、保存
function btn_disable(data){
	if (data == 1){
		$('.anchor_btn span').addClass('unabled');
		$('.anchor_btn p').css({
			
			'cursor':'not-allowed'
		});
	}else{
		if($('.h_save_btn.bluebtn').length>0){
			$('.anchor_btn span').addClass('unabled');
			$('.anchor_btn p').css({
				
				'cursor':'not-allowed'
			});
		}else{
			$('.anchor_btn span').removeClass('unabled');
			$('.anchor_btn p').css({
				
				'cursor':'auto'
			});
		}
	}
}
//显示隐藏
///status==1全部        ==0局部
function toggle_btn(data,status,dom_this){
	//初始化下全部显示dd
	if(status==1){
		$('.radius').show();
		$('dd').parents('.mb_24').show();
		$("dt[data-type=5]").siblings('dd').show();
		$("dt[data-type=15]").siblings('dd').show();
		$('.sign_box').show();
	}else{};
	//判断右侧是否点击了隐藏，是就走下面代码 不是走1003行
	if(data.hasClass('invisible')){
		//全局      否969
		if(status==1){
			$('.radius dd').each(function(){
				if($(this).is(":hidden")){
					return;
				}
				dd_type($(this));
			});
			//多选
			check_labels($('.radius .checked_div'));
			//小标题
			second_title(status);
			//全局判断显示隐藏$('.radius')
			check_radius($('.radius'));
			//局部
			hideAll();
		}else{			
			//.mb_24 dd:eq(0)
			$(dom_this).find("dd").each(function(){
				if($(this).parents('.radius').hasClass('unable')){
					$(this).parents('.radius').hide();
				}else{
					dd_type($(this));
				}
			});
			//多选
			check_labels($(dom_this).find('.checked_div'));
			//小标题
			second_title(status,dom_this);
			//判断显示隐藏整个模块
			check_radius($(dom_this));
		}
		//循环使   展开的模块进行子元素dd隐藏
		$('.radius').each(function(){
			if($(this).find('.spread_out').is(":visible")){
				$(this).find('.mb_24').hide();
				$(this).find('.sign_box').hide();

			}
		});
	//右侧锚点按钮是展示
	}else{

		//全局
		if(status ==1){
			$('.radius').each(function(){
				var _this = $(this);
				//禁用
				if(_this.hasClass('unable')){
					var _thisid = _this.attr('id');
					$("#nav_ul li."+_thisid).hide();
					_this.hide();
				}else{
					var _thisid = _this.attr('id');
					$("#nav_ul li."+_thisid).show();
					//判断是否试展开按钮在显示
					if(_this.find('.spread_out').is(":visible")){
						_this.show();
						_this.find('.mb_24').hide();
						_this.find('.sign_box').hide();
					}else{
						_this.show();
						_this.find('.sign_box').show();
						_this.find('dd').parents('.mb_24').show();
						_this.find("dt[data-type=5]").siblings('dd').show();
						_this.find("dt[data-type=15]").siblings('dd').show();
						if($(".nocon")){
							$(".nocon").remove();
						}
					}
				}
			});
			$('.anchor_nav li').removeClass("active");
			$('.anchor_nav li').eq(0).addClass("active");
			$('html, body').scrollTop(0);

		}else{
			//局部
			$(dom_this).find('.mb_24').show();
			$(dom_this).find('.sign_box').show();
		}
	}
	//全部隐藏状态
	hideAll();
	hideNav();
}
//全部隐藏状态
function hideAll(){
	$("#page_all .nocon").remove();
	var num=$("#page_all .radius").length;
	var n=0;
	$('#page_all .radius').each(function(){
		if($(this).is(':hidden')){
			n++;
		}
		if(n>=num){
			var html="<div class='nocon'>空白页面</div>";
			$("#page_all").append(html)
		}
	})
}
//多选判断显示隐藏
function check_labels(data){
	data.each(function(){
		$(this).find('dd').each(function(){
			if($(this).html()!= '未选择' && $(this).hasClass('border_dd')&&$(this).css('display')=="block"){
				$(this).parents('.mb_24').show();
				 return false;
			}else{
				$(this).parents('.mb_24').hide();
			}
		})
	})
}

//radius模块判断 _锚点刷新
function check_radius(data){
	data.each(function(){
		var sec_this = $(this);
		var i = 0;
		sec_this.find('.mb_24').each(function(){
			if($(this).is(":hidden")){
				i++;
			}
		})
		if(i>=sec_this.find('.mb_24').length || sec_this.hasClass("unable")){
			sec_this.hide();
			var nav_class =sec_this.attr('id');
			$('nav .'+nav_class+'').hide();
		}else{
			var nav_class =sec_this.attr('id');
			$('nav .'+nav_class+'').show();
			//处理图片
		}
	})
}
//小标题 0全局
function second_title(status,dom_this){
	if(status==0){
		$(dom_this).find('.sign_box').each(function(){
			var _this = $(this);
			var len = _this.find('.mb_24').length
			var l = 0;
			$(this).find('.mb_24').each(function(){
				if($(this).is(':visible')){
					_this.show();
					return false;
				}else{
					l++;
				}
				if(l>=len){
					_this.hide();
				}
			})
		})
	}else{
	$('.sign_box').each(function(){
		var _this = $(this);
		var len = _this.find('.mb_24').length
		var l = 0;
		$(this).find('.mb_24').each(function(){
			if($(this).is(':visible')){
				_this.show();
				return false;
			}else{
				l++;
			}
			if(l>=len){
				_this.hide();
			}
		})
	})
	}
	//竞争小标题
		$('.mb_24.sign_title').each(function(){
			if($(this).next().is(':hidden')){
				$(this).hide();
			}
		})
}
//dd_type
function dd_type(_this){
	if(_this.hasClass("news_table")){
		return;
	}
	//动态表格
	if(_this.html() == '未验证'||_this.html() == '未选择'||_this.html() == '未填写'||$.trim(_this.html()) == '未添加'||_this.find("table").css("display")=="none"){
		_this.parents('.mb_24').hide();
		return ;
	}else{
		_this.parents('.mb_24').show();
	}
	//图片
	if(_this.hasClass("mglook")){

	}
	//固定表格1
	if(_this.siblings('dt').attr('data-type') == '9'){
		var i = 0;
		 _this.find("td[data-format]").each(function(){
			 if($(this).html() == ''){
				 i++
			 }
		 })
		 if(i>=6){
			 _this.parents('.mb_24').hide();
		 }else{
			 _this.parents('.mb_24').show();
		 }
	}
	if(_this.siblings('dt').attr('data-type') == '5'||_this.siblings('dt').attr('data-type') == '15'){
		if(_this.html()=="未选择"||_this.html()=="未填写"){
			_this.hide();
		}
		if((_this.html()=="未验证"||_this.html()=="未选择"||_this.html()=="未填写")&&(_this.siblings("dd").html()=="未选择"||_this.siblings("dd").html()=="未填写")){
			 _this.parents('.mb_24').hide();
		}else{
			 _this.parents('.mb_24').show();
		}
	}
	//固定表格2
	if(_this.hasClass('dd_field')&& _this.find('td').eq(0).html()=='未填写'&&_this.find('td').eq(1).html()=='未填写'){
		_this.parents('.sign_box').hide();
	}else{
		_this.parents('.sign_box').show();
	}
}
//展开显示按钮显示
//status 1是展示显示，0是收起显示
function show_btn(_this,status){
	if(status == 0){
		_this.find('.put_box').show();
		_this.find('.put_box .put_away').show();
		_this.find('.out_box').hide();
	}else{
		_this.find('.put_box').hide();
		_this.find('.out_box').show();
	}
}
//status 1有红字，0无红字（都是局部）
function save_cancel_show(data,status){
	var _this = data;
	_this.find('dd').each(function(){
		var d_this = $(this);
		dd_type(d_this);
		//多选
		_this.find('.checked_div').each(function(){
			$(this).find('dd').each(function(){
				if($(this).html()!= '未选择' && $(this).hasClass('border_dd')){
					$(this).parents('.mb_24').show();
					 return false;
				}else{
					$(this).parents('.mb_24').hide();
				}
			})
		})
	});
	//判断是否有数据
	var i = 0;
	_this.find('.mb_24').each(function(){
		if($(this).is(':hidden')){
			i++;
		}
	})
	//1有红字
	if(status==1){
		if(i>=_this.find('.mb_24').length){
			show_btn(_this,1)
			_this.find('.sign_box').hide();
		}else{
			show_btn(_this,0)
			_this.find('.mb_24').show();
			_this.find('.sign_box').show();
		}
		//无红字
	}else{
		if(i>=_this.find('.mb_24').length){
			$('.sign_box').hide();
			i=0;
		}else{
			_this.find('.mb_24').show();
			_this.find('.sign_box').show();
		}
	}
}
//必填项添加必填字段
function setReqiured(){  //必填添加required
	$("*[data-must]").each(function(){
		var data=$(this).attr("data-must");
		if(data==0){
			//$(this).attr("required","required");
		}
	})
}
//status==0整体 ==1局部
function mustData(projectId,status){
	if(status==0){
		if(projectId){
			sendGetRequest(Constants.sopEndpointURL+'/galaxy/infomation/queryMustInfo/' + projectId, null,
				function(data) {
				    var result = data.result.status;
				    if (result == 'OK') {
				    	if(data.entity.resultIds){
				    		setMustIds(data.entity.resultIds);
				    	}
				    }

				});
		}
	}else{
		//当前模块 projectId
		var id =projectId.attr('id');
		//如果有红字
		if($('#'+id).find('.h_title').find('span').is(":visible")){
			save_cancel_show($('#'+id),1);
		}
		/*else{save_cancel_show($('#'+id),1);}*/

	}
}
function setMustIds(mustids){
	$(".unable").show();
	$(".unable").removeClass('unable');
	$('.compete_tab-content .h_edit').find("dt").find('span').remove();
	var result=mustids.split(",");
	for(var i=0;i<result.length;i++){
		//禁用
		if(result[i].indexOf("a_")==0){
			var a_id=result[i];
			var id= result[i].substring(2,result[i].length);
			//普通页面
			if($("#"+a_id).hasClass("radius")){
				$("#"+a_id).addClass("unable");
				$("#"+a_id).find(".h_edit").remove();
				$("#"+a_id).find(".h_look").show();
				$("#"+a_id).css("background","#fff");
				$("#"+id).hide();
				//竞争页面
			}else{
				$("#"+id).addClass("unable");
				$("#"+id).find(".h_edit").remove();
				$("#"+id).find(".h_look").show();
				$("#"+id).css("background","#fff");
				$("#"+id).hide();
				}
		//展开收起
		}else if(result[i].indexOf("display")==0){
			var id=result[i].substring(10,result[i].length);
			if(roleId != '1' && roleId != 1 && roleId != '2' && roleId != 2){
			$("#"+id ).addClass('limit_sec');
			$("#"+id ).find('.h_title span').show();
			save_cancel_show($("#"+id),1);
			}
		}else{
			var str ="<span style='color:#ff8181'>（如果该项目涉及此项内容，请进行填写，反之可略过）</span>";
			$('.h_edit').find("dt[data-tid='"+result[i]+"']").append(str);
		}
	}
}
function hideNav(){
	$('#page_all .radius').each(function(){
		if($(this).is(':hidden')){
			var id=$(this).attr("id");
			$("#nav_ul a[href='#"+id+"']").parent().hide();
		}
		var i = 0;
		$('#nav_ul li').each(function(){
			if($(this).is(':hidden')&&$(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).next().addClass('active');
			}
			if($(this).hasClass('active')){
				i++;
			}
		})
		////如果next全是隐藏，则往上查找显示  变蓝目前显示的最后一个
		if(i==0){
			var l = 0;
			$('#nav_ul li').each(function(){
				if($(this).is(':visible')){
					l=$(this).index();
				}
			})
			$('#nav_ul li').eq(l).addClass('active');
		}
	})
}

function fun_click(){
	//展开
	//0收起展示
	$('.spread_out').click(function(){
		if($('.anchor_btn span').hasClass('invisible')){
			show_btn($(this).parents(".radius"),0);
			$(this).parents('.limit_sec').find('dd').each(function(){
				var _this =$(this);
				if((_this.html() == '未验证'||_this.html() == '未选择'||$.trim(_this.html()) == '未填写'||$.trim(_this.html()) == '未添加'||_this.find("table").css("display")=="none")&&_this.css("display")=="block"){
					_this.parents('.mb_24').hide();
				}else{
					//小标题右侧隐藏的情况下展示
					_this.parents('.mb_24').show();
					if(_this.parents('.sign_box').find('.sign_title').html()!=undefined){
						_this.parents('.sign_box').show();
						_this.parents('.sign_box').find('.sign_title').show();
					}
				}
			})
			event.stopPropagation();
		}else{
			show_btn($(this).parents(".radius"),0);
			$(this).parents('.limit_sec').find('.mb_24').show();
			$(this).parent().siblings('.sign_box').show();
			event.stopPropagation();
		}
	})
	//收起
	$('.put_away').click(function(){
		show_btn($(this).parents(".radius"),1);
		$(this).parents('.limit_sec').find('.mb_24').hide();
		$(this).parent().siblings('.sign_box').hide();
		event.stopPropagation();
	})
}
//保存 题目change事件
function type_change(){
	//check_12
	$("dt[data-type='12']").parent('dl').find("dd").find("input").click(function(){
		 var par_ul = $(this).parents("ul");
		 if(!par_ul.find('li').eq(par_ul.find("li").length-2).find("input").checked){
				// 没有选择了其他
			  par_ul.find("span.error").remove();
		  }
	})
	//change标识
	$("input").change(function(){
		var _target=$(this).parents("dd").prev();
		_target.attr("tochange",true);

	})
	$("textarea").on("input",function(){
		var _target=$(this).parents("dd").prev();
		_target.attr("tochange",true);

	})
	$("select").change(function(){
		var _target=$(this).parents("dd").prev();
		_target.attr("tochange",true);

	})
}
/**
 * 数据字典加载请求
 */
function selectDirect(tittleId,subCode,filed){
	sendGetRequest(platformUrl.getDirectory+ tittleId+'/'+subCode+"/"+filed,null,
			function(data) {
				var result = data.result.status;
				if (result == 'OK')
				{
					var dataMap = data.userData;
				    var $filed=$("[id='"+filed+"']");
				    var list=dataMap[filed];
				    var name=""
				    $filed.children().remove();
				    if($filed[0].tagName=="SELECT"){
				    	$filed.append("<option value='' name='"+filed+"' data-name='请选择'>请选择</option>");
				    }
					$.each(list, function(i, value){
                        if($filed[0].tagName=="SELECT"){
                        	var code=value.code; 
                        	if(code.indexOf("currency")>-1){   //币种的请选择移除
                        		$filed.find("option[data-name]").remove();
                        	}
                        	$filed.append("<option value="+value.id+"  name='"+filed+"'>"+value.name+"</option>");
				    	}else if($filed[0].tagName=="DD"&&$filed.attr("data-type")=="radio"){
				    			$filed.append("<label><input type='radio' value='"+value.id+"' data-remark='"+value.name+"' name='"+filed+"'>"+value.name+"</label>")
				    	}
					});
				}
			})
	}
/**
 * 调用此方法渲染下拉框，需要注意几点：
 * 1，<dd class="clearfix" id="field5" data-type="radio">如果是单选需要在dd标签上面加上两个属性（id="field5" ，data-type="radio"）
 * 2，下拉框需要添加id属性，id的属性值跟name的值一样
 * 数据字典加载页面渲染
 */

function selectContext(formId){

	 var $fileds=$("#"+formId).find("select,dd[data-type='radio']");
	 $.each($fileds,function(){
		var field = $(this);
		var titleId=$("#"+formId+" input[name='titleId']").val();
		var subCode=$("#"+formId+" input[name='subCode']").val();
		var filedName;
	    if(field[0].tagName=="DD"){
	    	filedName=field.attr("id");
		}else if(field[0].tagName=="select" || field[0].tagName=="SELECT"){
			filedName=field.attr("name");
		}
	    selectDirect(titleId,subCode,filedName);
	})
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
function resizetable(table){ 
    var dict_map = {}
    var title_id = table.attr("data-title-id")
    var  code = table.attr("data-code")
    var fields_json=tableDictColumn(code);
    console.log(fields_json);
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














