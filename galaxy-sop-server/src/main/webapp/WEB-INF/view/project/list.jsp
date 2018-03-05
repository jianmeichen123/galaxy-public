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
<title>星河投</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/js/validate/lib/tip-yellowsimple/tip-yellowsimple.css" />

<link href="<%=path %>/css/axure.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/css/beautify.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/css/style.css" type="text/css" rel="stylesheet"/>
<link rel="stylesheet" href="<%=path %>/bootstrap/bootstrap-table/bootstrap-table.css"  type="text/css">
<!--[if lt IE 9]><link href="css/lfie8.css" type="text/css" rel="stylesheet"/><![endif]-->
<!-- jsp文件头和头部 -->
<%-- <link id="f" href="<%=path %>/ueditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet"> --%>
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
 	<div class="ritmin prj_all">
    	<%-- <div class="new_tit_a"><a href="#" onclick="backIndex()">工作桌面</a><img alt="" src="<%=path %>/img/arrow-brumd.png" class="arrow"/>创投项目</div> --%>
    	 <input type="hidden" id="project_id" value=""/>
    	 <input type="hidden" id="uid" value=""/>
         <%-- <c:if test="${fx:hasRole(4)}"> --%>
         <!--页眉-->
         <div class="top new_tit_b topBanner clearfix">
        	<!--按钮--> 
        	<div class="commonTab clearfix">
        		<div class="xhtTab active" primary=0>负责的项目</div>
        		<div class="xhtTab" primary=1>协作的项目</div>
        	</div>
        	<div class="btnbox_f btnbox_f1 handover_project">
                <a href="<%=path %>/galaxy/app" class="pubbtn new_blueBtn bluebtn addico c4" style="margin-top:20px;display:none" resource-mark="project_add">添加项目</a> 
            </div>
            <div class="handover_project">
            	<c:if test="${fx:hasPremission('project_batch_transfer')}">	
                      <a href="<%=path %>/galaxy/project/toAssignProject?from=transfer" class="pubbtn bluebtn lightbg new_blueBtn" style="margin-top:20px;" >批量移交</a>
                </c:if>
                 <c:if test="${fx:hasPremission('project_batch_assign')}">	
                      <a href="<%=path %>/galaxy/project/toAssignProject?from=assign" class="pubbtn bluebtn lightbg new_blueBtn" style="margin-top:20px;">批量指派</a>
                </c:if>
            </div>
           
         </div>
         <%-- </c:if> --%>
         <!--tips连接
          <ul class="tipslink tablink">
                <li class="on"><a href="javascript:;" query-by="proType" query-val="1" >我的项目<span></span></a></li>
                <li><a href="javascript:;"  query-by="proType" query-val="2">事业线项目<span></span></a></li>
          </ul>-->
        <!-- 搜索条件 -->
		<div class="top clearfix" id="custom-toolbar">
			<input type="hidden" name="primary" value="0">
          <div class="searchall_prj clearfix">
            <div class="searchall_top" data-btn="box">
                <dl class="fmdl fml fmdll clearfix">
                  <dt>项目类型：</dt>
                  <dd>
                    <select name="projectType">
                      <option index="-1" value="">全部</option>
                    </select>
                  </dd>
                </dl>
                <dl class="fmdl fml fmdll clearfix">
                  <dt>融资状态：</dt>
                  <dd>
                    <select name="financeStatus">
                      <option index="-1" value="">全部</option>
                      <option index="" value="尚未获投">尚未获投</option>
                      <option index="" value="不明确">不明确</option>
                    </select>
                  </dd>
                </dl>
               
                <dl class="fmdl fml fmdll clearfix">
                  <dt>项目状态：</dt>
                  <dd>
                    <select name="projectStatus">
                      <option index="-1" value="">全部</option>
                    </select>
                  </dd>
                </dl>
                  <dl class="fmdl fmdll clearfix">
                  <dt>团队成员：</dt>
                  <dd style="width:135px;">
                    <input type="text" class="txt" name="projectPerson" placeholder="请输入团队成员姓名" onkeyup="onkeyupall(this)" style="margin-left:0">
                  </dd>
                </dl>
                 <dl class="fmdl fml  fmdll clearfix">
              		<dt >项目来源：</dt>
              		<dd class="clearfix">
		                <!-- <label><input type="radio" name="faFlag" value = "1"/>是</label>
		                <label><input type="radio" name="faFlag" value = "0"/>否</label> -->
		                <select name="faFlag" class='new_nputr fl' valType="required" msg="<font color=red>*</font>项目来源不能为空">
	                    	<option value="">--请选择--</option>
	                    	<c:forEach items="${projectSourceList }" var="item">
	                    		<option value="${item.id }">${item.name }</option>
	                    	</c:forEach>
	                    	<option>创业者</option>
	                    	<option>外部独立合伙人</option>
	                    	<option>自开发</option>
	                    </select>
	            	</dd>
         		</dl> 
            </div>
            <div class="searchall_bottom clearfix">
                <dl class="fmdl fml fmdll clearfix">
                  <dt>事业部：</dt>
                  <dd>
                    <select name="projectDepartid">
                      <option value="0">全部</option>
                    </select>
                  </dd>
                </dl>
                <dl class="fmdl fml fmdll clearfix">
                  <dt>投资经理：</dt>
                  <dd>
                    <select name="createUid">
                      <option value="0">全部</option>
                    </select>
                  </dd>
                </dl>
                 <dl class="fmdl fml fmdll clearfix">
                  <dt>项目进度：</dt>
                  <dd>
                    <select name="projectProgress">
                      <option index="-1" value="">全部</option>
                    </select>
                  </dd>
                </dl>  
                <dl class="fmdl fmdll clearfix">
                	<input type="text" class="txt" name="nameCodeLike" placeholder="请输入项目名称" style="margin-left:15px;">
	                <div class="btn fr">
	                    <button type="submit" class="bluebtn cx_prj" action="querySearch">搜索</button>
	                    <input type="hidden" value="0" id="showResetBtn">
	                    <button class="pubbtn bluebtn reset none" id="resetBtn">重置</button>
	                </div>
                </dl>
                
            </div>
            <div class="show_more">
                <a href="#" class="blue open ico1 f4" data-btn="show" style="display: block;">展开</a> <a href="#" class="blue searchbox_hidden hide ico1 f3" data-btn="hide" style="display: none;">收起</a>
            </div>
          </div>
        </div>
		<div class="tab-pane active ctlist" id="view" style="padding-top:55px;">	
			<table id="project-table" data-url="project/search" 
				data-page-list="[10, 20, 30]" data-toolbar="#custom-toolbar" data-show-refresh="true">
				<thead>
				    <tr>
			        	<th data-field="projectName"  class="data-input" data-formatter="projectInfo" data-width="16%">项目名称</th>
			        	<th data-field="project_type" data-formatter="typeFormat"  class="data-input sort" data-sortable="true" data-width="8%">项目类型<span></span></th>
			        	<th data-field="finance_status" data-formatter="financeStatusFormat"  class="data-input sort" data-sortable="true" data-width="8%">融资状态<span></span></th>
			        	<th data-field="project_progress" data-formatter="projectProgress"  class="data-input sort" data-sortable="true" data-width="8%">项目进度<span></span></th>
			        	<th data-field="project_status" data-formatter="projectStatusFormat"  class="data-input sort" data-sortable="true" data-width="8%">项目状态<span></span></th>
			        	<th data-field="faFlag" data-formatter="projectFaFormat"   data-width="8%">项目来源<span></span></th>
			        	<th data-field="projectCareerline"  class="data-input" data-width="12%">事业部</th>
			        	<th data-field="createUname"  class="data-input" data-width="14%">投资经理</th>
			        	<th data-field="created_time" data-formatter="createdFormat"  class="data-input sort" data-sortable="true" data-width="8%">创建日期<span></span></th>
			        	<th data-field="updated_time" data-formatter="updateFormat"  class="data-input sort" data-sortable="true" data-width="5%">最后编辑时间<span></span></th>
         				<c:if test="${fx:hasRole(4)}">
			        	<th  class="col-md-2" data-formatter="editor" data-class="noborder" data-width="6%">操作</th>
 						</c:if>
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
<%-- <script id="d" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.min.js"></script>
<script id="c" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.config.js"></script>
<script id="b" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/dialogs/map/map.js"></script>
<script id="e" type="text/javascript" src="<%=path %>/ueditor/lang/zh-cn/zh-cn.js"></script> --%>




<script type="text/javascript" src="<%=path %>/js/teamSheetNew.js"></script>
<script type="text/javascript" src="<%=path %>/js/filerepository.js"></script>

<script type="text/javascript" src="<%=path %>/js/sop.js"></script>
<script type="text/javascript" src="<%=path %>/js/sop_progress/sop_progress.js"></script>
<script type="text/javascript" src="<%=path %>/js/sop_progress/sop_file.js"></script>
<!--提示验证  -->
<script type="text/javascript" src="<%=path %>/js/validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="<%=path %>/js/validate/fx.validate.js"></script>
<script type="text/javascript">
	createMenus(5);
	/**权限点**/
	if(isContainResourceByMark("project_add")){
	       $('a[resource-mark="project_add"]').css("display","block");
	}
	/**
	 * 分页数据生成操作内容
	 */
	var uid='${galax_session_user.id }';
	function editor(value, row, index){
		var id=row.id;
		var transferingIds = "${fx:getTransferingPids()}".split(",");
		if(uid == row.createUid)
		{
			//var options = "<span class=\"prc\" data-btn='myproject' onclick='info(" + id + ")'>项目流程</span>";
			var options = "<span class=\"prc\" data-btn='myproject' onclick='progress(" + id + ")'>项目流程</span>";
			if(transferingIds.contains(id))
			{
				options = "<span class=\"prc limits_gray\" data-btn='myproject' title=\"项目移交中\"></span>";
			}
		}
		return options;
	}
	
	 function projectInfo(value,row,index){
		    var id=row.id;
			var str=row.projectName;
			if(str.length>10){
				subStr = str.substring(0,10);
				var options = '<a href="#" class="blue" data-btn="myproject" onclick="proInfo(' + id + ')" title="'+str+'">'+subStr+'</a>';
				return options;
			}
			else{
				var options = '<a href="#" class="blue" data-btn="myproject" onclick="proInfo(' + id + ')" title="'+str+'">'+str+'</a>';
				return options;
			}
		}
	
	function proInfo(id){
		//项目详情页返回地址
		setCookie("project_detail_back_path", Constants.sopEndpointURL + 'galaxy/mpl',6,'/');
		//返回附带参数功能代码
		var options = $("#project-table").bootstrapTable('getOptions');
		var tempPageSize = options.pageSize ? options.pageSize : 10;
		var tempPageNum = options.pageNumber ? options.pageNumber : 1;
		var projectType = $("select[name='projectType']").val();
		var financeStatus = $("select[name='financeStatus']").val();
		var projectProgress = $("select[name='projectProgress']").val();
		var projectStatus = $("select[name='projectStatus']").val();
		var projectDepartid = $("select[name='projectDepartid']").val();
		var createUid = $("select[name='createUid']").val();
		var nameCodeLike = $("input[name='nameCodeLike']").val();
		var projectPerson = $("input[name='projectPerson']").val();
		var faFlag = $("select[name='faFlag']").val();
		
		var formdata = {
				_paramKey : 'projectList',
				_url : Constants.sopEndpointURL + "/galaxy/project/detail/" + id,
				_path : "/",
				_param : {
					pageNum : tempPageNum,
	        		pageSize : tempPageSize,
	        		projectType : projectType,
	        		financeStatus : financeStatus,
	        		projectProgress : projectProgress,
	        		projectStatus : projectStatus,
	        		projectDepartid : projectDepartid,
	        		createUid : createUid,
	        		nameCodeLike : nameCodeLike,
	        		projectPerson:projectPerson,
	        		faFlag:faFlag
				}
		}
		var href_url=window.location;
		setCookie("href_url", href_url,24,'/');
		cookieOperator.forwardPushCookie(formdata);
	}
	
	function refreshProjectList(){
		$("#project-table").bootstrapTable('refresh');
	}
	
	$(function(){
		var pid = "${pid}";
		if(!(!pid)){
			info(pid);
		}	
		//项目来源切换
		$("select[name='faFlag']").change(function(){
			var text=$(this).find("option:checked").text();
			if(text=="FA"){
				$(this).siblings(".new_nputr").show();
			}else{
				$(this).siblings(".new_nputr").hide();
			}
		})
	});
	
	/**
	 * 获取融资状态下拉项
	 * @version 2016-06-21
	 */
	sendGetRequest(platformUrl.queryAllTitleValues+'FNO1?reportType=4', null,CallBackB);
	function CallBackB(data){
	    var _dom=$("select[name='financeStatus']");
	    var childNum = _dom.find("option").length;
	    var entity=data.entity.childList[0];
	    if(!childNum || childNum !=0 ){
	    	$.each(entity.valueList,function(){
	    		_dom.append("<option value='"+this.id+"' data-title-id='"+this.titleId+"'>"+this.name+"</option>");
			});
	    }
	}
	/**
	 * 获取项目类型下拉项
	 * @version 2016-06-21
	 */
	createDictionaryOptions(platformUrl.searchDictionaryChildrenItems+"projectType","projectType");
	/**
	 * 获取项目进度下拉项
	 * @version 2016-06-21
	 */
	createDictionaryOptions(platformUrl.searchDictionaryChildrenItems+"projectProgress","projectProgress");
	/**
	 * 获取项目状态下拉项
	 * @version 2016-06-21
	 */
	createDictionaryOptions(platformUrl.searchDictionaryChildrenItems+"projectStatus","projectStatus");
	/**
	 * 查询事业线
	 * @version 2016-06-21
	 */
	createCareelineOptions(platformUrl.getCareerlineList,"projectDepartid");
	/**
	 * 根据事业线查询相应的投资经理
	 * @version 2016-06-21
	 */
    createUserOptions_All(platformUrl.getUserList+$('select[name="projectDepartid"]').val(), "createUid", 0);
    /**
	 * 查询项目来源
	 * @version 2017-09-19
	 */
	 //createDictionaryOptions(platformUrl.searchDictionaryChildrenItems+"projectSource","faFlag");
	$(function(){
		//返回附带参数功能代码
		var initParams,
			pageParams=cookieOperator.getDataNoDelete({_paramKey : 'projectList',_path : "/"}),
			initPageSize = 10; 
		if(typeof(pageParams) !== 'undefined' && pageParams.pageSize !=''){
			initPageSize = pageParams.pageSize;
		}
		$("button[action='querySearch']").click(function(){
			buryPoint("98");
			initParams = cookieOperator.pullCookie({_paramKey : 'projectList',_path : "/"});
			console.log(initParams)
		});
		/**
		 * 初始化项目列表
		 * @version 2016-06-21
		 */
		 function getProjectTable(){
			 $('#project-table').bootstrapTable({
					queryParamsType: 'size|page',
					pageSize:initPageSize,
					showRefresh : false,
					url : $('#project-table').attr("data-url"),
					sidePagination: 'server',
					method : 'post',
					sortOrder : 'desc', 
					sortName : 'updated_time',
					pagination: true,
			        search: false,
			        //返回附带参数功能代码
			        queryParams : function(param){
			        	if(getCookieValue("backProjectList")!=''){
			        		initParams = cookieOperator.pullCookie({_paramKey : 'projectList',_path : "/"});
			        		deleteCookie("backProjectList","/");
			        	}else{
			        		initParams=undefined;
			        	}
			        	if(typeof(initParams) !== 'undefined'){
			    			param.pageNum = initParams.pageNum - 1;
			        		param.pageSize = initParams.pageSize;
			        		if(initParams.projectType != ''){
			        			param.projectType = initParams.projectType;
			        			$("select[name='projectType']").val(initParams.projectType);
			        		}
			        		if(initParams.financeStatus != ''){
			        			param.financeStatus = initParams.financeStatus;
			        			$("select[name='financeStatus']").val(initParams.financeStatus);
			        		}
			        		if(initParams.projectProgress != ''){
			        			param.projectProgress = initParams.projectProgress;
			        			$("select[name='projectProgress']").val(initParams.projectProgress);
			        		}
			        		if(initParams.faFlag != ''){
			        			param.faFlag = initParams.faFlag;
			        			$("select[name='faFlag']").val(initParams.faFlag);
			        		}
			        		if(initParams.financeStatus != ''){
			        			param.financeStatus = initParams.financeStatus;
			        			$("select[name='financeStatus']").val(initParams.financeStatus);
			        		}
			        		param.projectDepartid = initParams.projectDepartid;
			        		$("select[name='projectDepartid']").val(initParams.projectDepartid);
			        		createUserOptions_All(platformUrl.getUserList+initParams.projectDepartid, "createUid", 1);
			        		param.createUid = initParams.createUid;
			        		$("select[name='createUid']").val(initParams.createUid);
			        		if(initParams.nameCodeLike !=''){
		        			 param.nameCodeLike = initParams.nameCodeLike;
		 	        		$("input[name='nameCodeLike']").val(initParams.nameCodeLike); 
		        		}
		        		if(initParams.projectPerson !=''){
		        			param.projectPerson = initParams.projectPerson;
		        			$("input[name='projectPerson']").val(initParams.projectPerson); 
		        		}
		        		var options = $("#data-table").bootstrapTable('getOptions');
		 	        	options.pageNumber = initParams.pageNum - 1; 
		    		}
		        	return param;
		        },
		        onLoadSuccess: function (data) {
		        	if($("#showResetBtn").val() == '1'){
		    			$("#resetBtn").removeClass("none");
		    		}
		        	if($("select[name='faFlag']").val()=="projectSource:1"){
		        		$("input[name='faName']").show();
		        	}
		        	
		        	if(typeof(initParams) !== 'undefined' && initParams.pageNum != ''){
		    			if(initParams.pageNum==1){
		    				return;
		    			}else{
		    				$('.pagination li').removeClass('active');
		    				if($('.pagination .page-number').length< initParams.pageNum)
		    				{
		    					var len = $('.pagination .page-number').length;
		    					var totalPages = $("#project-table").bootstrapTable('getOptions').totalPages;
		    					var end = initParams.pageNum + Math.floor(len/2);
		    					if(end>totalPages)
	    						{
		    						end = totalPages;
	    						}
		    					
		    					for(var i=len-1; i>=0; i--)
		    					{
		    						$('.pagination .page-number').eq(i).html('<a href="javascript:void(0)">'+ end-- +'</a>');
		    					}
		    				}

		    				$('.pagination li').each(function(){
		    	    			if($(this).text()==initParams.pageNum){
		    	    				$(this).click();
		    	    				 return false;
		    	    				//$(this).addClass('active')
		    	    			}
		    				});
		    			}
		    		}
		        	initPageSize=10;
		        }
			});
		}
		 getProjectTable();
		 $(".xhtTab").click(function(){
			 var that=$(this);
			 $(".xhtTab").removeClass("active");
			 that.addClass("active");
			 var primary=$(this).attr("primary");
			 $("input[name='primary']").val(primary);
			 $(".searchall_prj .show_more").remove();
			 $(".searchall_prj .fml").remove(); 
			 $("button[action='querySearch']").click();
		 })
		/**
		 * 改变事业线时获取该事业线下的投资经理
		 * @version 2016-06-21
		 */
		$('select[name="projectDepartid"]').change(function(){
			var did = $('select[name="projectDepartid"]').val();
		    createUserOptions_All(platformUrl.getUserList+did, "createUid", 1);
		});
		/**
		 * 控制"重置"按钮
		 */
		$('button[action="querySearch"]').click(function(){
			$("#showResetBtn").val(1);
		});
		/**
		 * "重置"操作
		 */
		$("#resetBtn").click(function(){
			//clean selected status
			$("select[name='projectType']").find("option[index='-1']").removeAttr("selected");
			$("select[name='financeStatus']").find("option[index='-1']").removeAttr("selected");
			$("select[name='projectProgress']").find("option[index='-1']").removeAttr("selected");
			$("select[name='projectStatus']").find("option[index='-1']").removeAttr("selected");
			$("select[name='projectType']").val("");
			$("select[name='financeStatus']").val("");
			$("select[name='projectProgress']").val("");
			$("select[name='projectStatus']").val("");
			$("select[name='projectDepartid']").val("");
			$("select[name='faFlag']").val("");
			var did = $("select[name='projectDepartid']").find('option[back="link"]').val();
			
			if(typeof(did) == "undefined"){
				$("select[name='projectDepartid']").val(0);
				createUserOptions_All(platformUrl.getUserList+$('select[name="projectDepartid"]').val(), "createUid", 1);
				$("select[name='createUid']").val(0);
			}else{
				$("select[name='projectDepartid']").val(did);
// 				$("select[name='projectDepartid']").find('option[back="link"]').attr("selected",true);
				createUserOptions_All(platformUrl.getUserList+did, "createUid", 1);
				if(($("select[name='createUid']").find("option[value='"+userId+"']")).length == 0){
					$("select[name='createUid']").val(0);
				}else $("select[name='createUid']").val(userId);
				
			}
			$('input[name="nameCodeLike"]').val("");
			$('input[name="projectPerson"]').val("");
			$("#showResetBtn").val(0);
			$("#resetBtn").addClass("none");
		});
	});
	/**
	 * 面包屑
	 * @version 2016-06-21
	 */
	function backIndex(){
	    var url=Constants.sopEndpointURL+"/galaxy/index";
	    window.location.href = url+"?sid="+sessionId+"&guid="+userId+"&_is_menu_=true";
	}
	/**
	 * 创建时间格式化
	 * @version 2016-06-21
	 */
	function createdFormat(value,row,index){
		return row.createDate;
	}
	/**
	 * 更新时间格式化
	 * @version 2016-06-21
	 */
	function updateFormat(value,row,index){
		return row.updateDate;
	}
	/**
	 * 项目状态格式化
	 * @version 2016-06-21
	 */
	function projectStatusFormat(value,row,index){
		return row.projectStatusDs;
	}
	/**
	 * 项目FA格式化
	 * @version 2016-06-21
	 */
		function projectFaFormat(value,row,index){
			var retStr = '-';
			if(!row.faFlag)
			{
				return '-';
			}
			if(row.faName)
			{
				if(row.faName.length>4){
					var faName=row.faName.substring(0,4);
					retStr="<div title='"+row.faFlagStr+'-'+row.faName+"'>"+row.faFlagStr+'-'+faName+"</div>";
				}else{
					retStr="<div title='"+row.faFlagStr+'-'+row.faName+"'>"+row.faFlagStr+'-'+row.faName+"</div>";
				}
				
			}else{
				retStr="<div title='"+row.faFlagStr+"'>"+row.faFlagStr+"</div>";
			}
			return retStr;
			
		}
	/**
	 * 项目进度格式化
	 * @version 2016-06-21
	 */
	 function projectProgress(value,row,index){
		var projectPro = row.projectProgress;
		var num = projectPro.substring(projectPro.lastIndexOf(":")+1,projectPro.length);
		var proStatus = row.projectStatus;
		var pronum = proStatus.substring(proStatus.lastIndexOf(":")+1,proStatus.length);

		return row.progress;
	}
	/**
	 * 融资状态格式化
	 * @version 2016-06-21
	 */
	function financeStatusFormat(value,row,index){
		return row.financeStatusDs;
	}
	/**
	 * 项目类型格式化
	 * @version 2016-06-21
	 */
	function typeFormat(value,row,index){
		return row.type;
	}
	function onkeyupall(ele){
		var s = ele.value
		if(s.length>20){
			ele.value =s.substr(0, 20)
		}
		
	}
</script>
</html>
