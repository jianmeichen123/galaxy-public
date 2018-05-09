<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="com.galaxyinternet.framework.core.constants.Constants,
	com.galaxyinternet.framework.core.oss.OSSConstant,
	com.galaxyinternet.model.user.User,
	java.util.List,
	com.galaxyinternet.model.resource.PlatformResource"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ page import="com.galaxyinternet.model.user.User"%>
<%@ page import="com.galaxyinternet.framework.core.constants.Constants"%>
<%
User user = (User)request.getSession().getAttribute(Constants.SESSION_USER_KEY);
String sessionId = "";
String realName = "";
Long departmentId=null;
Long userId=null;
Long roleId=null;
if(null != user) {
	sessionId = user.getSessionId();
	if(null != user.getRealName()){
		realName = user.getRealName();
	}
    if(null != user.getRoleId()){
	   roleId = user.getRoleId();
    }
	userId = user.getId();
	departmentId = user.getDepartmentId();
}
String endpoint = (String)application.getAttribute(OSSConstant.GALAXYINTERNET_FX_ENDPOINT);
%> 
<!-- 这里写js和css文件 start -->
<script src="<%=request.getContextPath() %>/js/fx_ext.js" type="text/javascript"></script>
<script src="<%=request.getContextPath() %>/js/jquery-1.12.2.min.js" type="text/javascript"></script>
<script src="<%=request.getContextPath() %>/js/jquery-validate.js" type="text/javascript"></script>
<script src="<%=request.getContextPath() %>/js/json2.js" type="text/javascript"></script>
<!-- end -->

<script type="text/javascript">
	var contextEndPoint = '<%=endpoint%>';
	endpointObj = JSON.parse(contextEndPoint);
	var sessionId = '<%=sessionId%>';
	var realName = '<%=realName%>';
	var userId = '<%=userId%>';
	var departmentId='<%=departmentId%>';
	var roleId = '<%=roleId%>';
</script>
<script src="<%=request.getContextPath() %>/js/base64.js" type="text/javascript"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/jquery.cookie.js"></script>
<script src="<%=request.getContextPath() %>/js/common.js" type="text/javascript"></script> 
<script src="<%=request.getContextPath() %>/js/axure.js" type="text/javascript"></script>
<script src="<%=request.getContextPath() %>/js/platformUrl.js" type="text/javascript"></script>
<script src="<%=request.getContextPath() %>/js/buryPoint.js" type="text/javascript"></script> 

<script type="text/javascript" src="<%=request.getContextPath() %>/js/layer/layer.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/layer/extend/layer.ext.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/my.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/my_ext.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/utils.js"></script>
<link rel="shortcut icon" href="<%=request.getContextPath() %>/img/favicon.ico" />