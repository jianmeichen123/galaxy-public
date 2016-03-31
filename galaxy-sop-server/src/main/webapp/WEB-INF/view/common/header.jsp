<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="com.galaxyinternet.model.user.User"%>
<%@ page import="com.galaxyinternet.framework.core.constants.Constants"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<% 
	String path = request.getContextPath(); 
    User user = (User)request.getSession().getAttribute(Constants.SESSION_USER_KEY);
    String realName="";
    Long roleId=null;
    if(null != user && null != user.getRealName()){
    	realName=user.getRealName();
    }
     
    if(null != user.getRoleId()){
	   roleId = user.getRoleId();
    }
	
%>
<div class="erwm">
    <span data-btn="close_erwm">关闭</span>
    <a href="<%=path %>/html/installReadme.html" target="_blank">点击查看安装说明</a>
</div>
<div class="header clearfix">
 <div class="warning" id="warning"><i></i>您的浏览器版本过低，繁星系统不提供对IE10以下浏览器的支持，快使用速度更快，体验更好的浏览器吧！&nbsp;<a href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" class="red">IE11</a>&nbsp;&nbsp;<a href="http://rj.baidu.com/soft/detail/14744.html?ald" class="red">谷歌浏览器</a><em id="close" onclick="gb()"></em></div>
	<a href="javascript:;" class="logo null">繁星</a>
    <!--头部中间-->
    <div class="min clearfix">
        <!--用户信息-->
        <c:if test="<%=roleId !=17 %>">
        <div class="usermsg clearfix">
            <span class="light_blue">当前您有：</span>
             <c:if test="<%=roleId !=1 && roleId !=2 && roleId !=3  %>">
                   <a href="<%=path %>/galaxy/soptask" class="work">待办任务<em class="totalUrgent"></em></a>
            </c:if>
            <!-- <a href="<%=path %>/galaxy/soptask" class="work">紧急任务<em class="bubble"></em></a> -->
            <a href="<%=path %>/galaxy/operationMessage/index" class="work">消息提醒<em action="remind">4</em></a> 
        </div>    	
        <!--当日信息-->
        </c:if>
    	<div class="todaymsg clearfix">
        	<span class="weather"><iframe allowtransparency="true" frameborder="0" width="220" height="36" scrolling="no" src="http://tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=1&v=0&d=3&bd=0&k=000000&f=004080&q=1&e=1&a=1&c=54511&w=180&h=36&align=center"></iframe></span>
            <span>
                <em id="sday" style="display:none">
                2014-01-08
                </em>
                <div id="xianhao" class="xianhao">
                <em class="today" id="todayweek"></em>限行尾号为<em class="todaynum" id="todaynum"></em><em>，</em><em class="tomorrow" id="tomorrowweek"></em>为<em class="tomorrownum" id="tomorrownum"></em><em>！</em>　
                </div>            
            </span>              
        </div>
    </div>
     <!-- 头部右边 -->
    <div class="usermsg rit clearfix">
        <span class="ico name">您好，<%=realName%></span>
        <b class="line null">分割线</b>
        <a href="javascript:;" onclick="logout()" class="loginout">退出</a>
    </div>
</div>
<script src="<%=path %>/js/car_limit.js"></script>
<script type="text/javascript">
var warn=document.getElementById('warning');
var close=document.getElementById('close');
    var userAgent = navigator.userAgent,   
rMsie = /(msie\s|trident.*rv:)([\w.]+)/,   
rFirefox = /(firefox)\/([\w.]+)/,   
rOpera = /(opera).+version\/([\w.]+)/,   
rChrome = /(chrome)\/([\w.]+)/,   
rSafari = /version\/([\w.]+).*(safari)/;  
var browser;  
var version;  
var ua = userAgent.toLowerCase();  
function uaMatch(ua){  
  var match = rMsie.exec(ua);  
  if(match != null){  
    return { browser : "IE", version : match[2] || "0" };  
  }  
  var match = rFirefox.exec(ua);  
  if (match != null) {  
    return { browser : match[1] || "", version : match[2] || "0" };  
  }  
  var match = rOpera.exec(ua);  
  if (match != null) {  
    return { browser : match[1] || "", version : match[2] || "0" };  
  }  
  var match = rChrome.exec(ua);  
  if (match != null) {  
    return { browser : match[1] || "", version : match[2] || "0" };  
  }  
  var match = rSafari.exec(ua);  
  if (match != null) {  
    return { browser : match[2] || "", version : match[1] || "0" };  
  }  
  if (match != null) {  
    return { browser : "", version : "0" };  
  }  
}  
var browserMatch = uaMatch(userAgent.toLowerCase());  
if (browserMatch.browser){  
  browser = browserMatch.browser;  
  version = browserMatch.version;  
}  
        var ma=browser+version;
        if (ma=='IE10.0'||ma=='IE11.0'||browser=='chrome'||browser=='safari'){
            warn.style.display='none';
        }
        else{
            warn.style.display='block';
        }
        function gb(){
             warn.style.display='none';
        }
 fillHeaderdata();
 sendPostRequest(platformUrl.operationMessageRemind, remindcbf);
 function remindcbf(data){
	if(data.result.status == "OK"){
		 $(".work em[action='remind']").html(data.entity.count);
	}
 }
 function logout(){
		$.ajax({
			url : platformUrl.logout,
			type : "POST",
			dataType : "json",
			contentType : "application/json; charset=UTF-8",
			async : false,
			beforeSend : function(xhr) {
				if (sessionId) {
					xhr.setRequestHeader("sessionId", sessionId);
				}
				if(userId){
					xhr.setRequestHeader("guserId", userId);
				}
			},
			error : function(request) {
				//alert("connetion error");
			},
			success : function(data) {
				if(data.result.status=="OK"){
					location.href = platformUrl.toLoginPage;
				}
			}
		}); 
} 
 
 /*关闭二维码*/
 $("[data-btn='close_erwm']").on("click",function(){
     $('.erwm').hide();
 })
</script>
