<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>繁星</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/js/validate/lib/tip-yellowsimple/tip-yellowsimple.css" />

<link href="<%=path %>/css/axure.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/css/beautify.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/css/style.css" type="text/css" rel="stylesheet"/>
<!--[if lt IE 9]><link href="css/lfie8.css" type="text/css" rel="stylesheet"/><![endif]-->
<!-- jsp文件头和头部 -->
<link id="f" href="<%=path %>/ueditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
<jsp:include page="../common/taglib.jsp" flush="true"></jsp:include>

<!-- 校验 -->
<script src="<%=path %>/js/bootstrap-v3.3.6.js"></script>
<script type="text/javascript" src="<%=path %>/js/validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="<%=path %>/js/validate/messages_zh.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type="text/javascript" src="<%=path %>/js/validate/fx.validate.js"></script>
<script type="text/javascript" src="<%=path %>/js/validate/fx.validate-ext.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>


	<link rel="stylesheet" type="text/css" href="<%=path %>/js/validate/fx.validate.css" />

</head>

<body>

<jsp:include page="../common/header.jsp" flush="true"></jsp:include>
<div class="pagebox clearfix">
	<jsp:include page="../common/menu.jsp" flush="true"></jsp:include>
	<!--右中部内容-->
 	<div class="ritmin">
    	<h2>我的项目</h2>
    	 <input type="hidden" id="project_id" value=""/>
    	 <input type="hidden" id="uid" value=""/>
    	 
        <!--页眉-->
        <div class="top clearfix">
        	<!--按钮-->
            <div class="btnbox_f btnbox_f1 clearfix">
                <a href="<%=path %>/galaxy/app" class="pubbtn bluebtn ico c4">添加项目</a>
                <!-- <a href="编辑项目.html" class="pubbtn bluebtn ico c5">编辑</a> -->
            </div>
        </div>
         <!--tips连接
          <ul class="tipslink tablink">
                <li class="on"><a href="javascript:;" query-by="proType" query-val="1" >我的项目<span></span></a></li>
                <li><a href="javascript:;"  query-by="proType" query-val="2">事业线项目<span></span></a></li>
          </ul>-->
        <!-- 搜索条件 -->
		<div class="top clearfix" id="custom-toolbar">
          <div class="searchall_prj clearfix">
            <div class="searchall_top" data-btn="box">
                <dl class="fmdl fml fmdll clearfix">
                  <dt>项目类型：</dt>
                  <dd>
                    <select>
                      <option>全部</option>
                    </select>
                  </dd>
                </dl>
                <dl class="fmdl fml fmdll clearfix">
                  <dt>融资状态：</dt>
                  <dd>
                    <select>
                      <option>全部</option>
                    </select>
                  </dd>
                </dl>
                <dl class="fmdl fml fmdll clearfix">
                  <dt>项目进度：</dt>
                  <dd>
                    <select>
                      <option>全部</option>
                    </select>
                  </dd>
                </dl>
                <dl class="fmdl fml fmdll clearfix">
                  <dt>项目状态：</dt>
                  <dd>
                    <select>
                      <option>全部</option>
                    </select>
                  </dd>
                </dl>
            </div>
            <div class="searchall_bottom clearfix">
                <dl class="fmdl fml fmdll clearfix">
                  <dt>事业部：</dt>
                  <dd>
                    <select>
                      <option>全部</option>
                    </select>
                  </dd>
                </dl>
                <dl class="fmdl fml fmdll clearfix">
                  <dt>投资经理：</dt>
                  <dd>
                    <select>
                      <option>全部</option>
                    </select>
                  </dd>
                </dl>
                <input type="text" class="txt" placeholder="请输入项目名称或编号">
                <div class="btn fr">
                    <button class="bluebtn cx_prj">搜索</button>
                    <button class="pubbtn bluebtn reset none">重置</button>
                </div>
            </div>
            <div class="show_more">
                <a href="#" class="blue open ico1 f4" data-btn="show" style="display: block;">展开</a> <a href="#" class="blue searchbox_hidden hide ico1 f3" data-btn="hide" style="display: none;">收起</a>
            </div>
          </div>
        </div>
		<div class="tab-pane active" id="view">	
			<table id="data-table" data-url="project/search" data-height="555" 
				data-page-list="[10, 20, 30]" data-toolbar="#custom-toolbar" data-show-refresh="true">
				<thead>
				    <tr>
			        	<th data-field="projectName" data-align="left" class="data-input" data-formatter="projectInfo">项目名称</th>
			        	<th data-field="type" data-align="left" class="data-input">项目类型</th>
			        	<th data-field="financeStatusDs" data-align="left" class="data-input">融资状态</th>
			        	<th data-field="progress" data-align="left" class="data-input">项目进度</th>
			        	<th data-field="projectStatusDs" data-align="left" class="data-input">项目状态</th>
			        	<th data-field="projectCareerline" data-align="left" class="data-input">事业部</th>
			        	<th data-field="createUname" data-align="left" class="data-input">投资经理</th>
			        	<th data-field="createDate" data-align="left" class="data-input" data-sortable="true">创建日期<span class="caret1"></span></th>
			        	<th data-field="updateDate" data-align="left" class="data-input" data-sortable="true">最后编辑时间<span class="caret1"></span></th>
			        	<th data-align="left" class="col-md-2" data-formatter="editor">操作</th>
 					</tr>	
 				</thead>
			</table>
           </div>
    </div>
</div>
<jsp:include page="../common/uploadwin.jsp" flush="true"></jsp:include>
<jsp:include page="/galaxy/sopFile/showMailDialog" flush="true"></jsp:include>
<jsp:include page="../common/footer.jsp" flush="true"></jsp:include></body>
<script src="<%=request.getContextPath() %>/js/operationMessage.js" type="text/javascript"></script>
<script id="a" src="<%=path %>/js/plupload.full.min.js" type="text/javascript"></script>
<script src="<%=path %>/js/plupload/zh_CN.js" type="text/javascript"></script>
<script src="<%=path %>/js/fx.upload.js" type="text/javascript"></script>
<script src="<%=request.getContextPath() %>/js/axure.js" type="text/javascript"></script>
<script src="<%=path %>/js/my_ext.js"></script>
<script src="<%=path %>/js/my.js"></script>
<!-- 分页二css+四js -->
<link rel="stylesheet" href="<%=path %>/bootstrap/bootstrap-table/bootstrap-table.css"  type="text/css">

<script src="<%=path %>/bootstrap/bootstrap-table/bootstrap-table-xhhl.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"></script>
<script src="<%=path %>/js/init.js"></script>

<!-- 富文本编辑器 -->
<script id="d" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.min.js"></script>
<script id="c" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.config.js"></script>
<script id="b" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/dialogs/map/map.js"></script>
<script id="e" type="text/javascript" src="<%=path %>/ueditor/lang/zh-cn/zh-cn.js"></script>




<script type="text/javascript" src="<%=path %>/js/teamSheetNew.js"></script>
<script type="text/javascript" src="<%=path %>/js/filerepository.js"></script>

<script type="text/javascript" src="<%=path %>/js/sop.js"></script>

<script type="text/javascript">
	createMenus(5);
	/**
	 * 分页数据生成操作内容
	 */
	var uid='${galax_session_user.id }';
	function editor(value, row, index){
		var id=row.id;
		var options = "<a href='#' class='blue' data-btn='myproject' onclick='info(" + id + ")'>项目流程</a>";
		if(row.projectStatus != 'meetingResult:3' && parseInt(row.createUid) == parseInt(userId)){
			options += "<a href='<%=path%>/galaxy/upp/"+id+"' class=\'blue\'>编辑项目</a>";
		}
		return options;
	}
	
	function projectInfo(value,row,index){
		var id=row.id;
		var options = "<a href='#' class='blue' data-btn='myproject' onclick='proInfo(" + id + ")'>"+row.projectName+"</a>";
		return options;
	}
	
	function proInfo(id){
		forwardWithHeader(Constants.sopEndpointURL + "/galaxy/project/detail/" + id);
	}
	
	function refreshProjectList()
	{
		$("#data-table").bootstrapTable('refresh');
	}
	
	$(function(){
		var pid = "${pid}";
		if(!(!pid)){
			info(pid);
		}	
	});
</script>

</html>
