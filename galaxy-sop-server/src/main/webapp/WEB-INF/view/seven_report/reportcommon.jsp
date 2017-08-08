<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.galaxyinternet.com/fx" prefix="fx" %>
<% 
	String path = request.getContextPath(); 
	response.setHeader("Cache-Control","no-cache"); //HTTP 1.1    
	response.setHeader("Pragma","no-cache"); //HTTP 1.0    
	response.setDateHeader ("Expires", 0); //prevents caching at the proxy server 
%>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/js/validate/lib/tip-yellowsimple/tip-yellowsimple.css" />
<!-- 保存进度条 -->
<link href="<%=path %>/css/showLoading.css" type="text/css" rel="stylesheet"/>
<script src="<%=path %>/js/jquery.showLoading.min.js"></script>
<style type="text/css">
div.tip-yellowsimple {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
.tip-yellowsimple .tip-arrow-left{
position:absolute;
}
</style>
</head>
<script src="<%=path %>/js/projectTransfer.js"></script>
<body>
	<div class="new_tit_a" id="top_menu"><a href="#" onclick="backIndex()">创投项目</a>>
	<span id="project_name_title"></span>><span class="report_type"></span>
	</div>
    	
    	<div class="new_tit_b">
        	<span class="size18 report_type"></span>
        	<!-- <span class="b_span"> 
	        	<a href="#" onclick="back();">返回></a>
			</span> -->
        </div>
</body>
<!-- 高管/投资经理 -->
<c:set var="aclViewProject" value="${fx:hasRole(1) || fx:hasRole(2) || (fx:hasRole(3) && fx:inOwnDepart('project',projectId)) || fx:hasRole(18)||fx:hasRole(19)|| fx:isCreatedByUser('project',projectId)  }" scope="request"/>
<c:set var="isCreatedByUser" value="${fx:isCreatedByUser('project',projectId)  }" scope="request"/>
<c:set var="isEditable" value="${fx:isCreatedByUser('project',projectId) && !fx:isTransfering(projectId)}" scope="request"/>
<c:set var="isThyy" value="${fx:hasRole(20)}" scope="request"/>
<script>

var isCreatedByUser = "${isCreatedByUser}";
var isEditable = "${isEditable}";
var pid='${pid}';
if(null==pid||typeof(pid)=="underfind"||pid==""){
	pid='${projectId}';
}

var projectInfo = '';
sendGetRequest(platformUrl.detailProject + pid, {}, function(data){	
	projectInfo = data.entity;
});

$(function(){
	var _href=window.location.href;
	if(_href.indexOf("toEvalindex")>-1){
		var report_type="评测报告";
	}else if(_href.indexOf("toBaseInfo")>-1){
		var report_type="全息报告";
	}else if(_href.indexOf("investigate")>-1){
		var report_type="尽调报告";
	}else if(_href.indexOf("toDecision")>-1){
		var report_type="决策报告";
	}else if(_href.indexOf("toPreEva")>-1){
		var report_type="初评报告";
	}else if(_href.indexOf("toFinancing")>-1){
		var report_type="融资报告";
	}else if(_href.indexOf("toOperation")>-1){
		var report_type="运营报告";
	}
	var str=projectInfo.projectName;
	if(projectInfo.projectName.length>24){
		str=projectInfo.projectName.substring(0,24);
	}
	$("#project_name_title").text(projectInfo.projectName);
	$(".report_type").text(report_type);
});
/**
 * 面包屑
 * @version 2016-06-21
 */
function backIndex(){
	  var url=Constants.sopEndpointURL+"/galaxy/index";
	  window.location.href = url+"?sid="+sessionId+"&guid="+userId+"&_is_menu_=true";
	
}
function projectList(){
	var url=Constants.sopEndpointURL+"/galaxy/mpl";
	forwardWithHeader(url);
}
</script>

</html>

