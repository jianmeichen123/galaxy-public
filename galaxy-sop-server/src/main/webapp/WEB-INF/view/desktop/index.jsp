<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="com.galaxyinternet.model.user.User"%>
<%@ page import="com.galaxyinternet.framework.core.oss.OSSConstant"%>
<%@ page import="com.galaxyinternet.framework.core.constants.Constants"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<%@ taglib uri="http://www.galaxyinternet.com/fx" prefix="fx" %>
<% 
String path = request.getContextPath();
String endpoint = (String)application.getAttribute(OSSConstant.GALAXYINTERNET_FX_ENDPOINT);
java.util.Map<String, String> map = new com.google.gson.Gson().fromJson(endpoint,new com.google.gson.reflect.TypeToken<java.util.Map<String, String>>() {}.getType());
String reportEndpoint = map.get("galaxy.project.report.endpoint");
%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>繁星</title>
<jsp:include page="../common/taglib.jsp" flush="true"></jsp:include>
<link href="<%=path %>/css/axure.css" type="text/css" rel="stylesheet"/>
<!--[if lt IE 9]><link href="css/lfie8.css" type="text/css" rel="stylesheet"/><![endif]-->

<script src="<%=path%>/js/bootstrap-v3.3.6.js"></script>
<script src="<%=path%>/bootstrap/bootstrap-table/bootstrap-table-xhhl.js"></script>
<script src="<%=path%>/bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"></script>

<!-- 富文本编辑器 -->
<script id="d" type="text/javascript" charset="utf-8" src="<%=map.get("galaxy.project.sop.endpoint") %>ueditor/umeditor.min.js"></script>
<script id="c" type="text/javascript" charset="utf-8" src="<%=map.get("galaxy.project.sop.endpoint") %>ueditor/umeditor.config.js"></script>
<script id="b" type="text/javascript" charset="utf-8" src="<%=map.get("galaxy.project.sop.endpoint") %>ueditor/dialogs/map/map.js"></script>
<script id="e" type="text/javascript" src="<%=map.get("galaxy.project.sop.endpoint") %>ueditor/lang/zh-cn/zh-cn.js"></script>

<script src="<%=map.get("galaxy.project.sop.endpoint") %>js/plupload.full.min.js" type="text/javascript"></script>
<script src="<%=map.get("galaxy.project.sop.endpoint") %>js/plupload/zh_CN.js" type="text/javascript"></script>

<script src="<%=path %>/js/highcharts.js" type="text/javascript"></script>
<script src="<%=path %>/js/highcharts_ext.js" type="text/javascript"></script>
<script src="<%=path %>/js/echarts.js" type="text/javascript"></script>
<script src="<%=path%>/js/sopUserSchedule.js" type="text/javascript"></script>
<script src="<%=path %>/js/meeting.js" type="text/javascript"></script>
<script src="<%=path %>/js/interview.js" type="text/javascript"></script>
</head>
<body>
<jsp:include page="../common/header.jsp" flush="true"></jsp:include>
<div class="pagebox clearfix">
  <!--右侧-->
  <!-- 收起 -->
    <div class="rit small">
        <div class="sico"></div>
        <!--时间-->
        <div class="top_small">
          <a href="<%=path %>/html/shecudle_list.html" data-btn="shecudle_list" class="add blue">添加日程</a>
           <span id="today_now"><b class="b1 null">点</b>今日日程</span>
        </div>
        <!--立项排期会-->
        <div class="bottom_small">
          <ul>
            <li><a href="<%=path %>/html/projectMeeting.html" data-btn="project" ><span class="ico_small lxh"></span><span>立项会</span></a></li>
            <li><a href="<%=path %>/html/voteMeeting.html" data-btn="vote" ><span class="ico_small tjh"></span><span>投决会</span></a></li>
            <li><a href="<%=path %>/html/ceopsMeeting.html" data-btn="ceops" ><span class="ico_small psh"></span><span>CEO评审</span></a></li>
            <li><span class="ico_small tool"></span><span>常用工具</span></li>
          </ul>
        </div>
    </div>
    
    
    <!-- 展开 -->
    <div class="rit big">
      <div class="bico"></div>
      <div class="big_con">
      
        <!--时间-->
        <div class="top">
            <div class="tody ico">
              <div class="month_box fl">
                <p class="month"><span></span>月</p>
                <p class="month_box_date"></p>
              </div>
              <p class="time time_moment fl"></p>
              <a href="<%=path %>/html/shecudle_list.html" data-btn="shecudle_list" class="bluebtn btn fr">添加日程</a>
            </div>
            <div id="top">
            </div>
        </div>
        
        
        <!--立项排期会-->
        <dl>
          <dt>
            <a href="javascript:;" class="blue" onclick="paiqidate('meetingType:3');">排期时间</a>
            <a href="<%=path %>/html/projectMeeting.html" data-btn="project" class="more"></a>
          </dt>
            <!-- <dd class='no_content'>暂无内容</dd> -->
		 <dd class='clearfix'> 
		    <div class="ico_index lxh fl"></div>
		    <div class="table fr">
		      <table width="100%"  id="projectMeeting"  cellspacing="0" cellpadding="0" class="index">
		        <tbody id="tlbody">
		        </tbody>
		    </table>
		    </div>    
		</dd>
        </dl>
        
        
        <!--投决会排期-->
         <dl>
          <dt>
            <a href="javascript:;" class="blue" onclick="paiqidate('meetingType:4');">排期时间</a>
            <a href="<%=path %>/html/voteMeeting.html" data-btn="vote"  class="more"></a>
          </dt>
            <!-- <dd class='no_content'>暂无内容</dd> -->
		 <dd class='clearfix'> 
		    <div class="ico_index tjh fl"></div>
		    <div class="table fr">
		      <table width="100%" cellspacing="0" cellpadding="0" class="index">
		        <tbody  id="tbody">
		        </tbody>
		    </table>
		    </div>    
		</dd>
        </dl>
        
        
        <!-- ceo评审 -->
         <dl>
          <dt>
            <a href="javascript:;" class="blue" onclick="paiqidate('meetingType:2');">排期时间</a>
            <a href="<%=path %>/html/ceopsMeeting.html" data-btn="ceops" class="more"></a>
          </dt>
            <!-- <dd class='no_content'>暂无内容</dd> -->
			 <dd class='clearfix'> 
			    <div class="ico_index psh fl"></div>
			    <div class="table fr">
			      <table id="ceopsMeeting" width="100%" cellspacing="0" cellpadding="0" class="index">
			        <tbody  id="ceopsbodytop">
			        </tbody>
			    </table>
			    </div>    
			</dd>
        </dl>
        
        
        
        <!-- 常用工具 -->
        <dl  class="tool_radius">
            <dd class="tool">
              <a href="javascript:;" class="light_gray"><b class="b1 ico null">ico</b>通讯录</a>
                <a href="javascript:;" class="light_gray"><b class="b2 ico null">ico</b>估值计算</a>
                
                <c:choose>
		        	<c:when test="${fx:hasRole(20)}">
                   	<a href="javascript:;" class="light_gray"><b class="b3 ico null">ico</b>新增会议</a>
					<a href="javascript:;" class="light_gray "><b class="b4 ico null">ico</b>新增访谈</a>
		        	
		        	</c:when>
		        	<c:otherwise>
		        	
                       <a href="<%=path %>/galaxy/project/progress/interViewAdd" data-btn="interview"><b class="b4 ico null">ico</b>新增访谈</a>
                   	<a href="<%=path %>/galaxy/project/progress/meetAddView" data-btn="meeting"><b class="b3 ico null">ico</b>新增会议</a>
		        	</c:otherwise>
	        	</c:choose>
		        	
                <a href="javascript:;" class="light_gray"><b class="b5 ico null">ico</b>发邮件</a>
                <a href="javascript:;" class="add ico">&nbsp;</a>
            </dd>
        </dl>
      </div>
      
      
    </div>
	<!--左侧导航-->
  <jsp:include page="../common/menu.jsp" flush="true"></jsp:include>
    <!--内容显示区域-->
 	<div class="ritmin clearfix">
 	<c:forEach var="module" items="${modules }">
 		<div class="floatBox fl" data-url="${module.resourceUrl }"></div>
 	</c:forEach>
  </div>
  
<!--内容显示区域结束-->


</div>
<jsp:include page="../common/footer.jsp" flush="true"></jsp:include>
<script>
  /*展开/收起按钮定位*/
  $(function(){
	  createMenus(1);
    var w_h=$(window).height();
        s_h=$(".sico").height();
    $(".sico").css({"top":(w_h-s_h)/2-80,"left":"-16px"});
    $(".bico").css({"top":(w_h-s_h)/2-80,"left":"-13px"});
    //获取当前日期
    var myDate = new Date();
    $(".month_box .month span").text(myDate.getMonth()+1);
    $(".month_box_date").text(myDate.getDate());

    //首页获取ritmin的宽度
    disposedWidth();
    function disposedWidth(){
      var w_win=$(window).width();
          display =$('.small').css('display');
          if(display == 'none'){
            w_rit=$(".big").outerWidth()+20;
          }else{
            w_rit=$(".small").outerWidth()+20;
          }
        w_lft=$(".lft").width();
        w_ritmin=w_win-w_rit-w_lft;
        $(".floatBox").css("width",w_ritmin/2-20);
        $(".pagebox .ritmin").css("margin","70px 0 0 9.375%");
    }
    //右侧展开收起
    $(".sico").click(function(){
      $(".small").hide();
      $(".big").show();
      disposedWidth();
      $.getScript("<%=path %>/js/echarts_health.js");
      $.getScript("<%=path %>/js/charts/projectPostAnalysis.js");
      $.getScript("<%=path %>/js/indexProjectProgress.js");
      $.getScript("<%=path %>/js/charts/projectProgress.js");
    });
    $(".bico").click(function(){
      $(".small").show();
      $(".big").hide();
      disposedWidth();
      $.getScript("<%=path %>/js/echarts_health.js");
      $.getScript("<%=path %>/js/charts/projectPostAnalysis.js");
      $.getScript("<%=path %>/js/indexProjectProgress.js");
      $.getScript("<%=path %>/js/charts/projectProgress.js");
    })
    //下拉框
    $(".man_info .name").hover(function(){
      $(".man_info ul").show();
    });
    $(".man_info ul").closeDom();
	
   $(".floatBox").each(function(){
	   var _this = this;
	   var opts = {
		   url : "/"+$(this).data('url'),
		   type:'POST'
	   };
	   $(_this).loadHtml(opts);
   });
   
  
    
  })
  
  
  
  
  
  
  
  
  //=====
	$(function(){
		loadAjaxSopUserSchedule(platformUrl.sheduleMoreThree); 
		top5ProjectMeeting();
		ProjectVoteWill();
		top5CeoPsMeeting();
	});
  
  
	//排期时间  
	function paiqidate(type){
		forwardWithHeader(platformUrl.popupMeetingList + type);
	}

	

	// top3立项排期
	function top5ProjectMeeting() {
		sendGetRequest(platformUrl.top5ProjectMeeting, null, top5ProjectMeetingCallback);
	}
	function top5ProjectMeetingCallback(data) {
		var list = data.entityList;
		if (list.length < 3) {
			$("#tlbody").parent().parent().siblings().children('.more').css("display", "none");
		};
		if (list != null && list != "" && typeof (list) != 'undefined' && list.length != 0) {
			var tbodyList = $("#tlbody");
			var i = 0;
			$(list).each(function() {
				var templ = $(this)[0];
				i = i + 1;
				
				var _td;
				sendGetRequest(platformUrl.judgeRole + "/"+ templ.projectId,null,
					function(data) {
						if (data.result.status != "OK") {
							return false;
						}
						if (data.result.message == "show") {
							_td = '<td  title="'+ getValue(templ.projectName)+ '">'
									+ '<a class="blue cutstr" href="javascript:void(0)" onclick="to_pro_info('+ templ.projectId+ ')">'
									+ getValue(templ.projectName)
									+ '</a>' 
									+ '</td>';
						} else {
							_td = '<td title="'+ getValue(templ.projectName)+ '" class="cutstr">'
									+ getValue(templ.projectName)
									+ '</td>';
						}

						var tr = '<tr>'
								+ _td
								+ '<td>'+ getDateValue(templ.meetingDate)+ '</td>'
								+ ' </tr>';
								
						tbodyList.append(tr);
					});
			});
		} else {
			var tbodyList = $("#tlbody");
			var noData = '<tr>'
					+ '<td colspan="4" class="no_info no_info01"><span class="no_info_icon">没有找到匹配的记录</span></td>'
					+ ' </tr>';
			tbodyList.append(noData);
		}
		cutStr(5, 'cutstr');
	}
	
	// 所有立项排期
	function showList() {
		moreProjectMeeting();
	}
	function moreProjectMeeting() {
		sendGetRequest(Constants.sopEndpointURL+"/galaxy/home/moreProjectMeeting", null, moreProjectMeetingCallback);
	}
	function moreProjectMeetingCallback(data) {
		var list = data.entityList;
		if (list != null && list != "" && typeof (list) != 'undefined' && list.length != 0) {
			var tbodyList = $("#tcbody");
			tbodyList.empty();
			var i = 0;
			$(list).each(
					function() {
						var templ = $(this)[0];
						i = i + 1;
						var tr = '<tr>' 
								+ '<td>' + i + '</td>' 
								+ '<td>' + getValue(templ.projectName) + '</td>'
								+ '<td>' + getIntegerValue(templ.meetingCount) + '</td>' 
								+ '<td>' + getDateValue(templ.meetingDate) + '</td>'
								+ '<td>' + getValue(templ.projectCareerline) + '</td>' 
								+ '<td>' + getValue(templ.createUname) + '</td>'
								+ '<td>' + getValue(templ.remark) + '</td>'
								+ ' </tr>';
						tbodyList.append(tr);
					});
			if (list.length < 3) {
				$("#tcbody").parent().parent().siblings().children('.more').css("display", "none");
			}
		} else {
			var tbodyList = $("#tcbody");
			var noData = '<tr>'
					+ '<td colspan="4" class="no_info no_info01"><span class="no_info_icon">没有找到匹配的记录</span></td>'
					+ ' </tr>';
			tbodyList.append(noData);
		}
	}
	
	
	
	
	
	//top3投决排期
	function ProjectVoteWill() {
		sendGetRequest(platformUrl.ProjectVoteWill, null, ProjectVoteWillCallback);
	}
	function ProjectVoteWillCallback(data) {
		//根据id判断类型（组装json数据）
		var list = data.entityList;
		if (list.length < 3) {
			$("#tbody").parent().parent().siblings().children('.more').css("display", "none");
		};
		if (list != null && list != "" && typeof (list) != 'undefined' && list.length != 0) {
			var tbodyList = $("#tbody");
			var i = 0;
			$(list).each(function() {
				var temp = $(this)[0];
				i = i + 1;
				
				var _td;
				sendGetRequest(platformUrl.judgeRole + "/"+ temp.projectId,null,
						function(data) {
							if (data.result.status != "OK") {
								return false;
							}
							if (data.result.message == "show") {
								_td = '<td title="'+ getValue(temp.projectName)+ '">'
										+ '<a class="cutstr blue" href="javascript:void(0)" onclick="to_pro_info('+ temp.projectId+ ')">'
										+ getValue(temp.projectName)
										+ '</a>' 
										+ '</td>';
							} else {
								_td = '<td class="cutstr" title="'+ getValue(temp.projectName)+ '">'
										+ getValue(temp.projectName)
										+ '</td>';
							}
	
							var tr = '<tr>'
									+ _td
									+ '<td>'+ getDateValue(temp.meetingDate)+ '</td>'
									+ ' </tr>';
							tbodyList.append(tr);
						});
			});
			cutStr(5, 'cutstr');
		} else {
			var tbodyList = $("#tbody");
			var noData = '<tr>'
					+ '<td colspan="4" class="no_info"><span class="no_info_icon">没有找到匹配的记录</span></td>'
					+ ' </tr>';
			tbodyList.append(noData);
		}

	}
	
	//所有投决会
	function showList1() {
		moreProjectVoteWill();
	}
	function moreProjectVoteWill() {
		sendGetRequest(platformUrl.moreProjectVoteWill, null, moreVotebodyMeetingCallback);
	}
	function moreVotebodyMeetingCallback(data) {
		var list = data.entityList;
		if (list != null && list != "" && typeof (list) != 'undefined'
				&& list.length != 0) {
			var tbodyList = $("#votebody");
			tbodyList.empty();
			var i = 0;
			$(list).each(
					function() {
						var templ = $(this)[0];
						i = i + 1;
						var tr = '<tr>' + '<td>' + i + '</td>' + '<td>'
								+ getValue(templ.projectName) + '</td>'
								+ '<td>' + getIntegerValue(templ.meetingCount)
								+ '</td>' + '<td>'
								+ getDateValue(templ.meetingDate) + '</td>'
								+ '<td>' + getValue(templ.projectCareerline)
								+ '</td>' + '<td>'
								+ getValue(templ.createUname) + '</td>'
								+ '<td>' + getValue(templ.remark) + '</td>'
								+ ' </tr>';
						tbodyList.append(tr);
					});
			if (list.length < 3) {
				$("#votebody").parent().parent().siblings().children('.more')
						.css("display", "none");
			}
		} else {
			var tbodyList = $("#votebody");
			var noData = '<tr>'
					+ '<td colspan="4" class="no_info no_info01"><span class="no_info_icon">没有找到匹配的记录</span></td>'
					+ ' </tr>';
			tbodyList.append(noData);
		}
	}
	
	
	
	
	// top3ceo评审
	function top5CeoPsMeeting() {
		sendGetRequest(platformUrl.top5CeoPsMeeting, null, top5CeoPsMeetingCallback);
	}
	function top5CeoPsMeetingCallback(data) {		
		var list = data.entityList;
		if(list != "" || list != undefined || list != null){
			var tbodyList = $("#ceopsbodytop"); 
			tbodyList.empty();
			var i=0;
			$(list).each(function(){
				 var templ = $(this)[0];
				 i = i + 1;
				 
				 var _td;
				 sendGetRequest(platformUrl.judgeRole + "/" + templ.projectId, null,function(data){
					if(data.result.status!="OK"){
						return false;
					}
					if(data.result.message=="show"){
						_td = '<td  title="'+ getValue(templ.projectName)+'">'+ '<a class="blue cutstr" href="javascript:void(0)" onclick="to_pro_info(' + templ.projectId + ')">' + getValue(templ.projectName)+ '</a>' +'</td>';
					}else{
						_td = '<td  title="'+ getValue(templ.projectName)+'" class="cutstr">'+ getValue(templ.projectName) +'</td>';
					}
				 });
				 var tr='<tr>'+
					 _td+
					 '<td>'+ getDateValue(templ.meetingDate)+'</td>'+
					' </tr>'; 
				 tbodyList.append(tr);
				 
			  });
			cutStr(5,'cutstr');
		}		
		if (list.length==0) {
			
			var tbodyList = $("#ceopsbodytop"); 
			var noData =
				'<tr>'+
				 '<td colspan="4" class="no_info no_info01"><span class="no_info_icon">没有找到匹配的记录</span></td>'+
				' </tr>'; 			
			tbodyList.append(noData);
	   }
		if(list.length<3){
			$("#ceo_p .position").css("display","none");
		}
	}
	
	//所有CEO评审
	function showList2() {
		moreProjectCeoPsWill();
	}
	function moreProjectCeoPsWill() {
		sendGetRequest(platformUrl.moreProjectCeoPsWill, null, moreCeoPsbodyMeetingCallback);
	}
	function moreCeoPsbodyMeetingCallback(data) {
		var list = data.entityList;
		if(list != "" || list != undefined || list != null){
			var tbodyList = $("#ceopsbody"); 
			tbodyList.empty();
			var i=0;
			$(list).each(function(){
				 var templ = $(this)[0];
				 i=i+1;
				 var tr='<tr>'+
					 '<td>'+i+'</td>'+
					 '<td>'+ getValue(templ.projectName)+'</td>'+
					 //'<td>'+ getStatusValue(templ.status)+'</td>'+
					 '<td>'+getIntegerValue(templ.meetingCount)+'</td>'+
					 '<td>'+ getDateValue(templ.meetingDate)+'</td>'+
					 '<td>'+getValue(templ.projectCareerline)+'</td>'+
					 '<td>'+getValue(templ.createUname)+'</td>'+
					 '<td>'+getValue(templ.remark)+'</td>'+
					' </tr>'; 
				 tbodyList.append(tr);
			  });
		}
	}


	
	function getValue(str) {
		if (typeof (str) == "undefined") {
			return "-";
		} else {
			return str;
		}
	}
	
	function getDateValue(str) {
		if (str == null || typeof (str) == "undefined") {
			return " ";
		} else {
			return formatDate(str);
		}
	}

	function getStatusValue(str) {
		if (typeof (str) == "undefined" || str == null) {
			return "-";
		} else if (str == "meetingResult:2") {
			return "待完成";
		} else if (str == "meetingResult:1") {
			return "待认领";
		} else if (str == "meetingResult:3") {
			return "已完成";
		}
	}
	

	function getIntegerValue(str) {
		if (str == null) {
			return 0
		} else {
			return str
		}
	}
	function formatDate(date, format) {
		if (!date)
			return null;
		if (!format)
			format = "yyyy-MM-dd";
		switch (typeof date) {
		case "string":
			date = new Date(date.replace(/-/, "/"));
			break;
		case "number":
			date = new Date(date);
			break;
		}
		if (!date instanceof Date)
			return;
		var dict = {
			"yyyy" : date.getFullYear(),
			"M" : date.getMonth() + 1,
			"d" : date.getDate(),
			"H" : date.getHours(),
			"m" : date.getMinutes(),
			"s" : date.getSeconds(),
			"MM" : ("" + (date.getMonth() + 101)).substr(1),
			"dd" : ("" + (date.getDate() + 100)).substr(1),
			"HH" : ("" + (date.getHours() + 100)).substr(1),
			"mm" : ("" + (date.getMinutes() + 100)).substr(1),
			"ss" : ("" + (date.getSeconds() + 100)).substr(1)
		};
		return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
			return dict[arguments[0]];
		});
	}
	
	
	
</script>


</html>


