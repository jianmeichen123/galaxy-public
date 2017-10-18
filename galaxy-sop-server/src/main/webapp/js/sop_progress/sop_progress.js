// JavaScript Document
var projectId;
var i = $(".next_box").attr("data-progress");
function  progress(id,type){
	projectId = id;
	$.getHtml({
		url:Constants.sopEndpointURL + "/galaxy/progress/index",//模版请求地址
		data:{"projectId":projectId},//传递参数
		okback:function(){
			$(".close").addClass("progress_close");
			if(type=="detail"){
				//详情点击关闭页面刷新
				$(".progress_close").click(function(){  //关闭弹窗刷新列表
					$(".tablinks.projectDetail li.on").click();
				})
			}else{
				$(".progress_close").click(function(){  //关闭弹窗刷新列表
					refreshProjectList();
				})
			}
			
			/*goToProgress();*/
		}
	});
}
//因为太长放不下所以页码pageList改成不可选  如果产品需要就再改过来。
function interviewList(){
	$('#projectProgress_1_table').bootstrapTable('destroy');
	$("#sop_projectId").val(projectId);
	$('#projectProgress_1_table').bootstrapTable({
		queryParamsType: 'size|page', // undefined
		pageSize:5,
		pageList : [5],
		showRefresh : false ,
		sidePagination: 'server',
		method : 'post',
		pagination: true,
		uniqueId: "id", 
		idField : "id",
		clickToSelect: true,
	    search: false,
	    columns: [
                  {
                      title: '时间',
                      field: 'viewDateStr',
                      valign: 'left',
                      formatter:'dateStr'
                  },
                  {
                      title: '结论',
                      field: 'interviewResultStr',
                      valign: 'left',
                  }, {
                      title: '结论原因',
                      field: 'resultReasonStr',
                      formatter:'result',
                      valign: 'left',
                  },
                    {
                        title: '操作',
                        field: 'oper',
                        valign: 'left',
                        formatter:'viewOperFormat'
                     }
              ],
	    onLoadSuccess:function(data){
	    	if(data.pageList.total>0)
	   		{
	    		$.each($('#projectProgress_1_table tr'),function(){
	    			var $this = $(this);
	    			$this.find('td:last').addClass('limits_gray');
	    			$this.find('td:last .edit').removeAttr('onclick');
	    		});	
	   		}
	   		powerPosition(i);
	    }
	});
}
function meetList(type){
	$('#projectProgress_1_table').bootstrapTable('destroy');
	$("#meetingType").val(type);
	$("#sop_projectId").val(projectId);
	$('#projectProgress_1_table').bootstrapTable({
		url:Constants.sopEndpointURL+'/galaxy/progress/p/queryMeet',
		queryParamsType: 'size|page', // undefined
		pageSize:5,
		pageList : [5],
		showRefresh : false ,
		sidePagination: 'server',
		method : 'post',
		pagination: true,
		uniqueId: "id", 
		idField : "id",
		clickToSelect: true,
	    search: false,
	    columns: [
                  {
                      title: '时间',
                      field: 'meetingDateStr',
                      valign: 'left',
                      formatter:'dateStr'
                  },
                  {
                      title: '结论',
                      field: 'meetingResultStr',
                      valign: 'left'
                  },
                  {
                      title: '结论原因',
                      field: 'resultReasonStr',
                      valign: 'left',
                      formatter:'result'
                  },
                    {
                        title: '操作',
                        field: 'oper',
                        valign: 'left',
                        formatter:'viewOperFormat'
                     }
              ],
	    onLoadSuccess:function(data){
	    	if(data.pageList.total>0)
	   		{
	    		$.each($('#projectProgress_1_table tr'),function(){
	    			var $this = $(this);
	    			$this.find('td:last').addClass('limits_gray');
	    			$this.find('td:last .edit').removeAttr('onclick');
	    		});
	   		}
	   		powerPosition(i);
	    }
	});
}
/**
 * 过阶段编辑和添加控制
 * @param i
 */
function powerPosition(i){
	var pg = 1;
	if(i < 5){
		pg = i;
	}else if( i > 5){
		pg = parseInt(i) - parseInt(1);
	}else{
		pg = 11;
	}
	if((!currentProgress("projectProgress:"+pg) && pg != 1)|| ('projectStatus:0' != _project_.projectStatus && 'projectStatus:1' != _project_.projectStatus))
{
		$(".editButton").hide();
		$("#add_button").hide();
	}else{
		$("#add_button").show();
	}
}
/*列表原因处理*/
function result(value,row,index){
	if(row.resultReasonStr && row.resultReasonStr == '其他原因'){
		return row.reasonOther;
	}
	if(!row.resultReasonStr){
		return "-";
	}
	return row.resultReasonStr;
}

/*列表时间格式化*/
function dateStr(value,row,index){
	if(row.viewDateStr){
		var date=row.viewDateStr;
	}else if(row.meetingDateStr){
		var date=row.meetingDateStr;
	}
	return date.split(" ")[0];
}
/**
 *  查看  or 编辑  
 */
function viewOperFormat(value,row,index){ 
	var meetingType = undefined;
	var title = $(".tabtitle h3").text();
	if(title == '接触访谈'){
		title = title + "记录";
	}else{
		title = title + "会议记录";
	}
    if(row){
    	meetingType = row.meetingType;
	}
	var info = "<span class=\"add see blue\"  onclick=\"notesInfoEdit('"+row.id+"','v','"+meetingType+"','"+"查看"+title+"')\" >查看</span>";
	var edit = " <span class=\"add see blue editButton\"  onclick=\"notesInfoEdit('"+row.id+"','e','"+meetingType+"','"+"编辑"+title+"')\" >编辑</span>";
	return info + edit;
}
function notesInfoEdit(selectRowId,type,meetingType,title){
	interviewSelectRow = $('#projectProgress_1_table').bootstrapTable('getRowByUniqueId', selectRowId);
	var _url = Constants.sopEndpointURL+"/galaxy/progress/p1/view"+"/"+type;
	var res = {};
	//立项会特殊类名
	var sp_class="";
	var spbtn_class="";
	if(title=="编辑立项会会议记录"||title=="编辑内部评审会议记录"||title=="编辑投决会会议记录"){
		sp_class="spresult";
		spbtn_class="spsave_button"		
	}
	if(title=="编辑会后商务谈判会议记录"){
			sp_class="spresults"
		}
	res.projectId = projectId;
	res.id = selectRowId;
	$.getHtml({
		url:_url,
		data:"",
		okback:function(){
			var url = Constants.sopEndpointURL + "/galaxy/progress/p1/queryInterview";
			$("#tabtitle").text(title);
			//判断是新增页面还是编辑页面
			if(type=="e"){
				var arrName=[];
				switch(meetingType){
				//编辑访谈时候的会议类型为undefined
				  case "undefined":
					  //访谈结论radio
					  //接触访谈
					  radioSearch(platformUrl.searchDictionaryChildrenItems+"meetingResult");
					  arrName.push("meetingUndeterminedReason");
					  arrName.push("meetingVetoReason");
					  $("#targetView").attr("style","display:block");
					  break;
				  case "meetingType:3":
					  res.meetingType = meetingType;
					  url = Constants.sopEndpointURL + "/galaxy/progress/p/queryMeet";
					  //会议结论radio
					  radioSearch(platformUrl.searchDictionaryChildrenItems+"meeting3Result");
					  arrName.push("meetingVetoReason");
					  meetingColumns();
					  break;
				  case "meetingType:5":
					  res.meetingType = meetingType;
					  url = Constants.sopEndpointURL + "/galaxy/progress/p/queryMeet";
					  //会议结论radio
					  radioSearch(platformUrl.searchDictionaryChildrenItems+"meeting5Result");
					  arrName.push("meetingVetoReason");
					  arrName.push("meetingFollowingReason");
					  meetingColumns();
					  break;
				  case "meetingType:1":
					  res.meetingType = meetingType;
					  url = Constants.sopEndpointURL + "/galaxy/progress/p/queryMeet";
					  //会议结论radio
					  radioSearch(platformUrl.searchDictionaryChildrenItems+"meeting1Result");
					  arrName.push("meetingVetoReason");
					  meetingColumns();
					  break;
				  case "meetingType:4":
					  res.meetingType = meetingType;
					  url = Constants.sopEndpointURL + "/galaxy/progress/p/queryMeet";
					  //会议结论radio
					  radioSearch(platformUrl.searchDictionaryChildrenItems+"meeting4Result");
					  arrName.push("meetingVetoReason");
					  meetingColumns();
					  break;
				  default:
					 radioSearch(platformUrl.searchDictionaryChildrenItems+"meetingResult");
					 arrName.push("meetingUndeterminedReason");
				     arrName.push("meetingVetoReason");
					meetingColumns();
					res.meetingType = meetingType;
					url = Constants.sopEndpointURL + "/galaxy/progress/p/queryMeet";
				}
				selectDict(arrName);
			}else{
				if(meetingType && meetingType != 'undefined'){
					url = Constants.sopEndpointURL + "/galaxy/progress/p/queryMeet";
					meetingColumns();
				}
			}
			//渲染数据|待后续加
			sendPostRequestByJsonObj(url,res,function(data){
				var result = data.result.status;
				if(result == "OK"){
					var res = data.pageList.content;
					var time;
					var target;
					var content;
					var result;
					var resultReason;
					var reasonOther;
					var recordId;
					recordId= res[0].id;
					var resultJudge="";
					if(meetingType&&meetingType!="undefined"){
						resultJudge=res[0].meetingResult;
						time = res[0].meetingDateStr;
						content = res[0].meetingNotes;
						result = res[0].meetingResultStr;
						resultReason = res[0].resultReasonStr;
						reasonOther = res[0].reasonOther;
						type=="e" ? $("input[name='interviewResult'][value='"+res[0].meetingResult+"']").attr("checked",true) : $("#interviewResult").html(result);
					}else{
						resultJudge=res[0].interviewResult;
						time = res[0].viewDateStr;
						target = res[0].viewTarget;
						content = res[0].viewNotes;
						result = res[0].interviewResultStr;
						resultReason = res[0].resultReasonStr;
						reasonOther = res[0].reasonOther;
						type=="e" ? $("input[name='interviewResult'][value='"+res[0].interviewResult+"']").attr("checked",true) : $("#interviewResult").html(result);
					
					}
					$("#recordId").val(recordId);
					type=="e" ? $("#viewDate").val(time) : $("#viewDate").text(time);
					type=="e" ? $("#viewTarget").val(target): $("#viewTarget").text(target).attr("title",target);
					if(type=="e"){
						$("input[name='interviewResult'][value='"+resultJudge+"']").closest("div").find("#reasonOther").val(reasonOther);
					}else{
						$("#viewTarget").attr("title",target);
						$("#reasonOther").text(reasonOther);
					}
					if(content==""){
						if(type=="e"){
							
						}else{
							content= (meetingType!="undefined" ? "暂无会议纪要" :"暂无访谈纪要");
						}
						
					}
					type=="e" ? $("#viewNotes").val(content) : $("#viewNotes").html(content);
					type=="e" ? '' : $("#interviewResult").html(result);
					if(meetingType == "undefined" && type == "e"){
						 var viewDate = $("#viewDate").val();
						  $("#viewDate").parent("dd").append(viewDate);
						  $("#viewDate").hide();
						  var viewTarget = $("#viewTarget").val();
						  $("#viewTarget").parent("dd").append("<span>"+viewTarget+"</span>");
						  $("#viewTarget").hide();
					}
					var reason=res[0].resultReason;
					//结论原因回显
					//选择的情况下移除disabled
	                 switch(resultJudge){
	                 case "meeting5Result:1":
	                	 $("select[name='meetingFollowingReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingFollowingReason']").find("option[value='"+reason+"']").attr("selected",true);
	                	 
	                	 break;
	                 case "meetingResult:2":
	                	 $("select[name='meetingUndeterminedReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingUndeterminedReason']").find("option[value='"+reason+"']").attr("selected",true)
	                	 break;
	                 case "meetingResult:3":
	                	 $("select[name='meetingVetoReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingVetoReason']").find("option[value='"+reason+"']").attr("selected",true)
	                	 break;
	                 case "meeting3Result:6":
	                	 $("select[name='meetingVetoReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingVetoReason']").find("option[value='"+reason+"']").attr("selected",true)
	                	 break;
	                 case "meeting5Result:2":
	                	 $("select[name='meetingVetoReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingVetoReason']").find("option[value='"+reason+"']").attr("selected",true)
	                	 break;
	                 case "meeting1Result:4":
	                	 $("select[name='meetingVetoReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingVetoReason']").find("option[value='"+reason+"']").attr("selected",true)
	                	 break;
	                 case "meeting4Result:3":
	                	 $("select[name='meetingVetoReason']").removeClass("disabled").removeAttr("disabled");
	                	 $("select[name='meetingVetoReason']").find("option[value='"+reason+"']").attr("selected",true)
	                	 break;
	                	 
	                 default:
	                	 
	                 }
					var other=reasonOther==null||reasonOther==""?"":"("+reasonOther+")";
					if(resultReason==""&&other==""){
						type=="e" ? '' : $("#resultReason").html(resultReason+other);
					}else{	
						if(type!="e"){  //会议结论为通过，去掉原因
							if($("#interviewResult").text()=="通过"){
								$("#resultReason").html("");
							}else{
								$("#resultReason").html("原因："+resultReason+other);
							}
						}
					}			
					if(res[0].fileId){
						if(res[0].fname==""||res[0].fname==undefined){							
							$("#file_object").addClass("no_bg");
							$("#file").addClass("no_bg");
							type=="e" ? $("#file_object").html(""): $("#file").html("<blockquote>暂无录音</blockquote>");
							$("#select_btn").text("选择文件");
						}else{
						type=="e" ? $("#file_object").html("<a href=\"javascript:filedown("+res[0].fileId+","+res[0].fkey+");\" class=\"blue\" >"+res[0].fname+"</a>"): $("#file").html("<a href=\"javascript:filedown("+res[0].fileId+","+res[0].fkey+");\" class=\"blue\" >"+res[0].fname+"</a>");
						$("#select_btn").text("更新");
						}
						$("#file_object").text(res[0].fname);
						$("#file_object").addClass("audio_name")
					}else{
						$("#file_object").addClass("no_bg");
						$("#file").addClass("no_bg");
						type=="e" ? $("#file_object").html(""): $("#file").html("<blockquote style='color:#000;'>暂无录音</blockquote>");
						$("#select_btn").text("选择文件");
					}
					 $("#resultRadion").addClass(sp_class);
					 $(".save_button").addClass(spbtn_class);
					 $("#resultRadion input[type='radio']").click(function(){
						 $("#resultRadion label.error").remove();
					 })
				}
				
			});
			//判断是否选择其他原因  			
			reason('select[name="meetingUndeterminedReason"]','meetingUndeterminedReason:2');
			reason('select[name="meetingVetoReason"]','meetingVetoReason:5');
			reason('select[name="meetingFollowingReason"]','meetingFollowingReason:2');
			var val=$("select[name=\"meetingUndeterminedReason\"]").val();
			var val1=$("select[name=\"meetingVetoReason\"]").val();
			var val2=$("select[name=\"meetingFollowingReason\"]").val();
			if(val=="meetingUndeterminedReason:2"){				
				$("select[name=\"meetingUndeterminedReason\"]").parent().next().find("input").attr("required","true").removeAttr("disabled").removeClass("disabled");
			}
			if(val1=="meetingVetoReason:5"){
				$("select[name=\"meetingVetoReason\"]").parent().next().find("input").attr("required","true").removeAttr("disabled").removeClass("disabled");
			}
			if(val2=="meetingFollowingReason:2"){				
				$("select[name=\"meetingFollowingReason\"]").parent().next().find("input").attr("required","true").removeAttr("disabled").removeClass("disabled");
			}
		}
	});
	return false;
}

/**
 * 添加访谈记录弹窗
 * @param id
 */
function  p1(id){
	$.getHtml({
		url:Constants.sopEndpointURL + "/galaxy/progress/p1",//模版请求地址
		data:"",//传递参数
		okback:function(){

		}
	});
}

/**
 * 获取 访谈表格数据，返回 jsonObj 对象
 * 
 * @param hasProid
 *            是否传入项目id值，'y':是
 * @param projectId
 *            传入项目id值， 或选择器id
 * @param viewDateId
 *            时间id
 * @param viewTargetId
 *            目标id
 * @param viewNotesId
 *            记录id
 */
function getInterViewParams(hasProid,projectId,
		viewDateId,
		viewNotesId){
	
	var	condition = {};
	
	if(hasProid == "y" ){
		var projectId = $.trim(projectId);
	}else{
		var projectId = $("#"+projectId).val();
	}
	var viewDateStr = $("#"+viewDateId).val();
	
	if(viewDateStr == null ||  viewDateStr == ""){
		layer.msg("会议日期不能为空");
		return false;
	}else{
		var clock = getNowFormatDate();
		if((new Date(Date.parse(viewDateStr.replace(/-/g, "/"))).getTime()) > (new Date(Date.parse(clock.replace(/-/g, "/"))).getTime())){
			layer.msg("会议时间不能超过当前时间");
			return false;
         }
	 }
	
	var viewNotes = $.trim(CKEDITOR.instances.viewNotes.getData());
	if(projectId == null || projectId == ""){
		layer.msg("项目不能为空");
		return false;
	}
	if(viewNotes != null && viewNotes.length > 0){
		if(delHtmlTag(viewNotes).length > 5000){
			layer.msg("访谈记录长度最大5000字");
			return false;
		}
	}
	condition.projectId = projectId;
	condition.viewDateStr = viewDateStr;
	condition.viewNotes = viewNotes;
	
	return condition;
}
