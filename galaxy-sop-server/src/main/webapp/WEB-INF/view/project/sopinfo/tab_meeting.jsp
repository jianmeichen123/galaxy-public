<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.galaxyinternet.com/fx" prefix="fx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<% 
	String path = request.getContextPath(); 
%>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>项目详情</title>

<link href="<%=path %>/css/axure.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/css/beautify.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/css/style.css" type="text/css" rel="stylesheet"/>
<!--[if lt IE 9]><link href="css/lfie8.css" type="text/css" rel="stylesheet"/><![endif]-->

<!-- bootstrap-table -->
<link rel="stylesheet" href="<%=path %>/bootstrap/bootstrap-table/bootstrap-table.css"  type="text/css">
<!-- 日历插件 -->
<link href="<%=path %>/bootstrap/bootstrap-datepicker/css/bootstrap-datepicker3.css" type="text/css" rel="stylesheet"/>
<!-- 富文本编辑器 -->
<link href="<%=path %>/ueditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">

<jsp:include page="../../common/taglib.jsp" flush="true"></jsp:include>
<script src="<%=path %>/js/sopinfo.js"></script>
</head>



<body>

<jsp:include page="../../common/header.jsp" flush="true"></jsp:include>

<div class="pagebox clearfix">
	<!--左侧导航-->
	<jsp:include page="../../common/menu.jsp" flush="true"></jsp:include>
     
    <!--右中部内容-->
 	<div class="ritmin">
 	
    	<jsp:include page="sopcommon.jsp" flush="true"></jsp:include>
        
        
        <div class="new_left">
        	<div class="tabtable assessment label_static">
          	<!-- tab标签 -->
            <ul class="tablink">
                <li><a href="javascript:;" onclick="showTabs('${pid}',0)">基本信息</a></li>
                <c:choose>
	            <c:when test="${fx:hasRole(1) || fx:hasRole(2) || fx:hasRole(3)|| fx:isCreatedByUser('project',pid) }">
                <li><a href="javascript:;" onclick="showTabs('${pid}',1)">团队成员</a></li>
                <li><a href="javascript:;" onclick="showTabs('${pid}',2)">股权结构</a></li>
                <li><a href="javascript:;" onclick="showTabs('${pid}',3)">访谈记录</a></li>
                <li class="on"><a href="javascript:;" onclick="showTabs('${pid}',4)">会议纪要</a></li>
                <li><a href="javascript:;" onclick="showTabs('${pid}',5)">项目文档</a></li>
                <li><a href="javascript:;" onclick="showTabs(${pid},6)">操作日志</a></li>
                </c:when>
                <c:otherwise>
                <li><a href="javascript:;" class="disabled">团队成员</a></li>
                <li><a href="javascript:;" class="disabled">股权结构</a></li>
                <li><a href="javascript:;" class="disabled">访谈记录</a></li>
                <li><a href="javascript:;" class="disabled">会议纪要</a></li>
				<li><a href="javascript:;" class="disabled">项目文档</a></li>
                <li><a href="javascript:;" class="disabled">操作日志</a></li> 
                </c:otherwise>
             	</c:choose>
            </ul>

            
             <!-- 会议纪要
            <div data-tab="con" > 
               -->
            	<div class="member interview">
            	    <c:if test="${fx:hasRole(1) || fx:hasRole(2) || fx:hasRole(3)|| fx:isCreatedByUser('project',pid) }">
                   <!--按钮-->
					<div class="top clearfix">
						<div class="btnbox_f btnbox_f1 clearfix">   <!-- pubbtn bluebtn ico c4 add_prj add_interview  添加会议纪要-->
							<a href="#" onclick="toAddProMeet();" data-type="" class="pubbtn fffbtn lpubbtn option_item_mark" id="proMeetBut" style="display: none;"></a>
						</div>
					</div>

					<!-- 会议信息 -->
					<div class="min_document clearfix" id="custom-toolbar">
					<div class="bottom searchall clearfix">
						<input type="hidden" id="projectId" name="projectId" value="">   <!-- 项目id -->
						
						<dl class="fmdl fmmr fmdll clearfix">
							<dt>会议类型：</dt>
							<dd class="clearfix">
								<select id="meetingType" name="meetingType" >
									<option value="">全部</option>
									<option value="meetingType:1">内评会</option>
									<option value="meetingType:2">CEO评审</option>
									<option value="meetingType:3">立项会</option>
									<option value="meetingType:4">投决会</option>
                    			</select>
							</dd>
						</dl>

						<dl class="fmdl fmmr fmdll clearfix">
							<dt>会议日期：</dt>
							<dd>
								<input type="text" class="datepicker txt time" readonly id="startTime" name="startTime" style="height: 23px;" /> 
								<span>至</span>
								<input type="text" class="datepicker txt time" readonly id="endTime" name="endTime" style="height: 23px;" />
							</dd>
							<dd>
								<a href="javascript:;" class="search_icon" action="querySearch">查询</a>
							</dd>
						</dl>
					</div>
					</div>
					<table id="data-table"
						data-url="<%=path%>/galaxy/project/progress/queryMeet" 
						data-id-field="id" 
						data-toolbar="#custom-toolbar">
						<thead>
							<tr>
								<th data-field="meetinfo" data-align="left" data-formatter="metcolumnFormat" data-class="no1_1">会议概况</th>
								<th data-field="meetingTypeStr" data-align="left" data-class="no1_2">会议类型</th>
								<th data-field="meetingNotes" data-align="left" data-formatter="tc_viewNotesFormat_noinfo" data-class="no1_3">会议纪要</th>
								<th data-field="oper" data-align="left" data-formatter="meetOperFormat">操作</th>
							</tr>
						</thead>
					</table>
					</c:if>	
                </div>                 
           <!--  </div>
           tab end-->
            
          </div>
        </div>
        
        <!--右边-->
        <jsp:include page="./includeRight.jsp" flush="true"></jsp:include>
       
    </div>
 
</div>

<jsp:include page="../../common/footer.jsp" flush="true"></jsp:include>


<!-- 分页二css+四js -->
<script src="<%=path %>/js/bootstrap-v3.3.6.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-table/bootstrap-table-xhhl.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"></script>
<!-- file -->
<script src="<%=path %>/js/plupload.full.min.js" type="text/javascript"></script>
<script src="<%=path %>/js/plupload/zh_CN.js" type="text/javascript"></script>
<!-- time -->
<script src="<%=path %>/bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-datepicker/js/datepicker-init.js"></script>
<!-- 富文本编辑器 -->
<script id="d" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.min.js"></script>
<script id="c" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.config.js"></script>
<script id="b" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/dialogs/map/map.js"></script>
<script id="e" type="text/javascript" src="<%=path %>/ueditor/lang/zh-cn/zh-cn.js"></script>



<script>

	var proinfo = '${proinfo}';
	//proinfo = JSON.parse(proinfo);
	var proid = '${pid}';
	var pname = '${pname}';
	var selectRow = null;
	var admin = "${fx:isCreatedByUser('project',pid) }";

$(function(){
	createMenus(5);
	
	$("#projectId").val(proid);
	
	$('#data-table').bootstrapTable({
		queryParamsType: 'size|page', // undefined
		pageSize:5,
		pageList : [5, 10, 20 ],
		showRefresh : false ,
		sidePagination: 'server',
		method : 'post',
		pagination: true,
		uniqueId: "id", 
		idField : "id",
		clickToSelect: true,
        search: false,
	});
	
	//初始化按钮，是 添加会议，or 申请排期
	if(projectInfo.projectStatus == 'projectStatus:2' || projectInfo.projectStatus == 'projectStatus:3' || projectInfo.projectStatus == 'meetingResult:3' || admin != "true"){
		//$("#proMeetBut").remove();
		$('#proMeetBut').removeAttr("onclick");
	}else if(index == 2 || index == 3 || index == 4 || index == 7 ){
		$('#proMeetBut').show();
		button_init(); 
	}
	
});	
	
	

/**
 * 初始化按钮，是 添加会议，or 申请排期
 */
function button_init(){
	sendGetRequest(Constants.sopEndpointURL+"/galaxy/project/initpromeetbut/" + proid,null,button_init_callback);
}
function button_init_callback(data){
	var result = data.result.status;
	if(result == "ERROR"){ //OK, ERROR
		layer.msg(data.result.message);
		return;
	}else{
		/* 
		<a href="#" onclick="toAddProMeet();"  class="pubbtn bluebtn ico c4 add_prj add_interview" id="proMeetBut">添加会议纪要</a>
		map.add = y/n/k 
		 * 				y:可添加会议
		 * 				n:不可以添加，需要排期
		 * 				k:不允许添加
		 * 		  map.meettype = meetingType:2
		 * 		  map.butname = '添加立项会会议记录' / '申请立项会排期'
		  */
		 
		var add = data.userData.add;
		var meettype = data.userData.meettype;
		var butname = data.userData.butname;
		if(add == 'y'){
			$("#proMeetBut").text(butname);
			$("#proMeetBut").data("type",meettype);
		}else if(add == 'n'){
			$("#proMeetBut").text(butname);
			$("#proMeetBut").removeAttr("onclick");
			$("#proMeetBut").on("click", function(){
				toMeetPool(meettype);
			});
		}else if(add == 'k'){
			$("#proMeetBut").remove();
		}else if(add == 'v'){
			$("#proMeetBut").removeAttr("onclick");
			$("#proMeetBut").text(butname);
		}
		
	}
}



/**
 * 添加接触访谈纪要弹出层
 */
function toAddProMeet(){
	var _url=Constants.sopEndpointURL + '/galaxy/project/progress/meetAddView';
	$.getHtml({
		url:_url,
		data:"",
		okback:function(){
			var type = $("#proMeetBut").data("type");
			if(type){ 
				$("input[name='meetingTypeTc'][value ='"+type+"']").attr("checked","checked");
				$("input[name='meetingTypeTc']").attr("disabled","disabled").addClass("disabled");
				
				/* $("input[name='meetingTypeTc']").each(function(){
					if(this.value != type){
						this.parentNode.remove();
					}
				}); */
			}
			$("#proselect").remove();
			initMeetUpload();
			//$('.edui-container').show();
		}
	});
	return false;
}
//plupload 上传对象初始化, 绑定保存saveMeetFile
function initMeetUpload() {
	// 定义 上传插件 方法 、  plupload 上传对象初始化
	var meetuploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : $("#file-select-btn")[0], // you can pass in id...
		url : platformUrl.stageChange,
		multipart:true,
		multi_selection:false,
		filters : {
			max_file_size : '25mb',
			mime_types: paramsFilter(1)
		},

		init: {
			//上传按钮点击事件 - 开始上传
			PostInit: function(up) {
				$("#savemeet").click(function(){
					$("#savemeet").addClass("disabled");
					var res = getMeetCondition("y",proid, "meetingDateStr", null,"meetingTypeTc", "meetingResult","meetingNotes");
					if(res == false || res == "false"){
						up.stop();
						$("#savemeet").removeClass("disabled");
						return;
					}
					if(res.meetingType == 'meetingType:1'){
						res.stage = "projectProgress:2";
					}else if(res.meetingType == 'meetingType:2'){
						res.stage = "projectProgress:3";
					}else if(res.meetingType == 'meetingType:3'){
						res.stage = "projectProgress:4";
					}else if(res.meetingType == 'meetingType:4'){
						res.stage = "projectProgress:7";
					}
					res.pid = proid;
					res.createDate = res.meetingDateStr;
					res.result=res.meetingResult;
					res.content = res.meetingNotes;
					var file = $("#fileName").val(); //up.files.length
					if(file.length > 0){
						up.settings.multipart_params = res;
						meetuploader.start();
					}else{
						sendPostRequestByJsonObj(platformUrl.stageChange,res,function(data){
							var result = data.result.status;
							if(result == "ERROR"){ //OK, ERROR
								$("#savemeet").removeClass("disabled");
								layer.msg(data.result.message);
								return;
							}else{
								layer.msg("保存成功", {time : 500});
								window.location.reload();
							}
						});
					}
					return false;
				});
			},
			
			FilesAdded: function(up, files) {
				if(meetuploader.files.length >= 2){
					meetuploader.splice(0, meetuploader.files.length-1)  //解决多次文件选择后，文件都存入upload
				}
				plupload.each(files, function(file) {
					$("#fileName").val(file.name);
				});
			},
			
			UploadProgress: function(up, file) {
			},
			
			
			FileUploaded: function(up, files, rtn) {  //文件上传后回掉
				var response = $.parseJSON(rtn.response);
				var rs = response.result.status;
				if(rs == "ERROR"){ //OK, ERROR
					$("#savemeet").removeClass("disabled");
					$("#fileName").val("");
					meetuploader.splice(0, meetuploader.files.length)
					layer.msg(response.result.message);
					return;
				}else{
					layer.msg("保存成功", {time : 500});
					window.location.reload();
				}
			},
			BeforeUpload:function(up){
			},
			Error: function(up, err) {
				$("#savemeet").removeClass("disabled");
				$("#fileName").val("");
				layer.msg(err.message);
			}
		}
	});

	meetuploader.init();
}



//查看 or 编辑 会议纪要
function meetOperFormat(value,row,index){
	var info = "<span  class=\"see blue\"  onclick=\"notesInfoEdit('"+row.id+"','v')\" >查看</span>";
	var edit = "";
	
	if(userId==row.uid){
		edit = " <span  class=\"edit blue\"  onclick=\"notesInfoEdit('"+row.id+"','e')\" >编辑</span>";
	}
	return info + edit;
}


function notesInfoEdit(selectRowId,type){
	selectRow = $('#data-table').bootstrapTable('getRowByUniqueId', selectRowId);
	var _url = Constants.sopEndpointURL+"/galaxy/project/progress/interViewLog";
	$.getHtml({
		url:_url,
		data:"",
		okback:function(){
			var um=UM.getEditor('viewNotes');
			um.setContent(selectRow.meetingNotes);
			if(type == 'v'){
				$("#interviewsave").remove();
			}
		}
	});
	return false;
}

function interviewsave(){  
	var um = UM.getEditor('viewNotes');
	var log = um.getContent();
	var id= selectRow.id;
	if(id != ''){
		sendPostRequestByJsonObj(platformUrl.updateMeet, {"id" : id, "meetingNotes" : log}, function(data){
			if (data.result.status=="OK") {
				layer.msg("保存成功");
				removePop1();
				$("#data-table").bootstrapTable('refresh');
			} else {
				layer.msg(data.result.message);
			}
			
		});
	}
}


	


//会议排期
function toMeetPool(meetType){
	var returnKey = '';
	if(meetType == "meetingType:2"){
		returnKey = applyCeoMeeting();
	}else if(meetType == "p_meetingType:2"){
		returnKey = toEstablishStage();
	}else if(meetType == "meetingType:3"){
		returnKey = toLxmeetingPool();
	}else if(meetType == "meetingType:4"){
		returnKey = inSureMeetingPool();
	}
	if(returnKey && returnKey == 'OK'){
		$("#proMeetBut").text("待排期");
		$("#proMeetBut").removeAttr("onclick");
		$("#proMeetBut").off();
	}
}
 /**
  * CEO评审阶段申请立项会排期
  */
function toEstablishStage(){
	var pid = proid;
	var result = '';
	if(pid != '' && pid != null && pid != undefined){
		sendGetRequest(platformUrl.toEstablishStage + pid, {}, function(data){
			result = data.result.status;
			if(result == "OK"){ 
				layer.msg("申请立项会成功!");
			}else{
				layer.msg(data.result.message);
			}
		});
	}
	return result;
}
/**
 * 申请CEO评审排期
 */
function applyCeoMeeting(){
	var pid = proid;
	var result = '';
	if(pid != '' && pid != null && pid != undefined){
		sendGetRequest(platformUrl.inCeoMeetingPool + pid, {}, function(data){
			result = data.result.status;
			if(result == "OK"){ 
				layer.msg("申请CEO评审会成功!");
			}else{
				layer.msg(data.result.message);
			}
		});
	}
	return result;
}
/**
 * 立项会阶段申请立项会排期
 */
function toLxmeetingPool(){
	var pid = proid;
	var result = '';
	if(pid != '' && pid != null && pid != undefined){
		sendGetRequest(platformUrl.inLxmeetingPool + pid, {}, function(data){
			result = data.result.status;
			if(result == "OK"){ 
				layer.msg("申请立项会成功!");
			}else{
				layer.msg(data.result.message);
			}
		});
	}
	return result;
}
/**
 * 投决会--点击申请投决会按钮
 */
function inSureMeetingPool(){
	var pid = proid;
	var result = '';
	if(pid != '' && pid != null && pid != undefined){
		sendGetRequest(
				platformUrl.inSureMeetingPool + pid,
				null,
				function(data){
					result = data.result.status;
					if(result == "OK"){ 
						layer.msg("申请成功!");
					}else{
						layer.msg(data.result.message);
					}
				});
	}
	return result;
}


	
	
</script>
</html>


