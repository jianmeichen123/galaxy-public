<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/js/validate/lib/tip-yellowsimple/tip-yellowsimple.css" />
<!-- 富文本编辑器 -->
<script type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.min.js"></script>
<script type="text/javascript" src="<%=path %>/ueditor/lang/zh-cn/zh-cn.js"></script>
<!-- time 
<script src="<%=path %>/bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-datepicker/js/rangeDate.js"></script>
-->
<!-- 日历插件 -->
<link href="<%=path %>/bootstrap/bootstrap-datepicker/css/bootstrap-datepicker3.css" type="text/css" rel="stylesheet"/>
<link href="<%=path %>/bootstrap/bootstrap-datepicker/datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
<script type="text/javascript" src="<%=path %>/bootstrap/bootstrap-datepicker/datetimepicker/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=path %>/bootstrap/bootstrap-datepicker/datetimepicker/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=path %>/bootstrap/bootstrap-datepicker/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
<script src="<%=path %>/bootstrap/bootstrap-datepicker/js/rangeDateForHour.js"></script>


<!-- 校验 -->
<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>

<div class="meetingtc">
	<div class="top clearfix">
    	<div class="searchall clearfix">
            <dl>
            	<dt>项目 :</dt>
                <dd>
                	<select id="projectId" name="projectId"  
                	valType="required" msg="<font color=red>*</font>项目不能为空">
                    </select>
               	 <!-- <input type="text" placeholder="请输入关键字查找" class="txt"/> -->
                </dd>
            </dl>
            <!-- <a href="javascript:;" class="searchbtn null">搜索</a> -->
        </div>
        <dl class="fmdl clearfix">
            <dt>会议召开日期：</dt>  <!-- class="form-control"  -->
            <dd>
            	<input type="text" class="datetimepickerHour txt time" readonly  id="meetingDateStr" name = "meetingDateStr"  style="height:23px;width:150px;"
            	valType="required" msg="<font color=red>*</font>会议日期不能为空"  />
            </dd>
        </dl>
    </div>
    <div class="min clearfix">
    	<dl class="fmdl fml clearfix">
            <dt>会议类型：</dt>
            <dd class="clearfix">
                <label><input type="radio" name="meetingTypeTc" value="meetingType:1" checked="checked" />内评会</label>
                <label><input type="radio" name="meetingTypeTc" value="meetingType:2"/>CEO评审</label>
                <label><input type="radio" name="meetingTypeTc" value="meetingType:3"/>立项会</label>
                <label><input type="radio" name="meetingTypeTc" value="meetingType:4"/>投决会</label>
            </dd>
        </dl>
        <dl class="fmdl clearfix">
            <dt>会议结论：</dt>
            <dd class="clearfix">
                <label><input type="radio" name="meetingResult" value="meetingResult:1"/>通过</label>
                <label><input type="radio" name="meetingResult" value="meetingResult:2" checked="checked" />待定</label>
                <label><input type="radio" name="meetingResult" value="meetingResult:3"/>否决</label>
            </dd>
        </dl>
    </div>
    
    <dl class="fmdl clearfix">  <!-- class="um_width" -->
       <dt>会议纪要:</dt>
       <dd>
       	  <%-- <div type="text/plain" id="meetingNotes"  style="width:100%;height:150px;max-height:150px;overflow:auto;" 
       	 	 valType="requiredDiv" regString="^.{0,9000}$" msg="<font color=red>*</font>会议纪要不能超过9000字节" >
       	  </div> --%>
       	  
       	  <div type="text/plain" id="meetingNotes"  style="width:100%;height:150px;max-height:150px;overflow:auto;" 
       	 	 valType="MAXBYTE" regString="9000" msg="<font color=red>*</font>会议纪要不能超过9000字节" >
       	  </div>
       	  
		</dd>
      </dl>
        
    <dl class="fmdl clearfix" id="fileNotBeUse">
        <dt>会议录音：</dt>
        
        <div class="fmload clearfix">
            <dd>
	        	<input type="text" name="fileName" id="fileName" class="txt" readonly="readonly" />
	        </dd>
	        <dd>
	        	<a href="javascript:;" class="pubbtn fffbtn" id="file-select-btn">上传录音</a>
    		</dd>
        </div>
    </dl>
    <div class="btnbox" id="btnNotBeUse">
    	<a href="javascript:;" class="pubbtn bluebtn" id="savemeet">保存</a><a href="javascript:;" class="pubbtn fffbtn"data-close="close">取消</a>
    </div>
</div>

 <script type="text/javascript">
	var meetEditor = UM.getEditor('meetingNotes');
		$("#meetingDateStr").val(new Date().format("yyyy-MM-dd hh:mm"));
</script>

