<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<div class="qualificationstc">
	<div class="title_bj" id="qualifications_popup_name"></div>
	
	
    <div class="qualifications_all" id="learning">
    
    	<form action="" id="add_person_learning" method="post">
    	
    	<!-- 学习--项目的成员 id -->
    	<input type="hidden" name="personId" id="learn_person_Id" value="" />
    	
    	<!-- 学习-- id -->
    	<input type="hidden" name="id" id="learn_id" value="" />
    	
        <div class="info clearfix">
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;时间：</dt>
                <dd>
                	<input name="beginDateStr" type="text" class="datetimepickerHour txt time fl" readonly valType="required" msg="<font color=red>*</font>开始时间不能为空"/>
                	<span class="fl">&nbsp;至&nbsp;</span>
                	<input name="overDateStr" type="text" class="datetimepickerHour txt time fl" readonly valType="required" msg="<font color=red>*</font>结束时间不能为空"/>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;毕业院校：</dt>
                <dd class="clearfix">
                    <input name="school" type="text" class="txt" valType="required" msg="<font color=red>*</font>毕业院校不能为空"/>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;专业：</dt>
                <dd><input name="major" type="text" class="txt" valType="required" msg="<font color=red>*</font>专业不能为空"/></dd>
            </dl>
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;学历：</dt>
                <dd>
                   <select name="degree" msg="<font color=red>*</font>最高学历不能为空" >
                       <option value="">请选择</option>
                       <option value="高中">高中</option>
                       <option value="大专">大专</option>
                       <option value="本科">本科</option>
                       <option value="硕士">硕士</option>
                       <option value="MBA">MBA</option>
                       <option value="博士">博士</option>
                       <option value="其他">其他</option>
                   </select>
                </dd>
            </dl>
        </div>
        
        </form>
    </div>
    
    <div class="button_affrim">
        <a href="javascript:;"  class="register_all_affrim fl" id="save_person_learning" >确定</a>
        <a href="javascript:;"  class="register_all_input fr"  data-close="close">取消</a>
    </div>
</div>
<jsp:include page="../../common/validateJs.jsp" flush="true"></jsp:include>
<script>
$('input[name="beginDateStr"], input[name="overDateStr"]').datepicker({
    format: 'yyyy-mm-dd',
    language: "zh-CN",
    autoclose: true,
    todayHighlight: false,
    defaultDate : Date,
    today: "Today",
    todayBtn:'linked',
    leftArrow: '<i class="fa fa-long-arrow-left"></i>',
    rightArrow: '<i class="fa fa-long-arrow-right"></i>',
    forceParse:false,
    currentText: 'Now'
});

$(function(){
	
	initDialogValstr("learning");
	
	$("#save_person_learning").click(function(){
		if(beforeSubmitById("learning")){
			savePersonLearning();
		}
	});
});


</script>

