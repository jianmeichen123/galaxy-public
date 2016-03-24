<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<div class="addmentc">
  <form action="" id="stock_form" method="post" type="validate">
  <input type="hidden" value="" name="projectId" id="projectId">
  <div class="form clearfix">
    <div class="left">
      <dl class="fmdl fml">
        <dt>所有权人：</dt>
        <dd><input type="text" name="sharesOwner" value="" class="txt" valType="OTHER" regString="^\S{1,20}[^\d]+$"msg="<font color=red>*</font>只能是汉字或是字符,长度为20"/></dd>
      </dl>
      <dl class="fmdl">
        <dt>占比：</dt>
        <dd><input type="text" name="sharesRatio" value="" class="percentTxt txt" valType="OTHER" regString="^(\d{1,2}(\.\d{1,3})?|100)$" msg="<font color=red>*</font>0-100间数字"/><span>&nbsp;%</span></dd>
      </dl> 
    </div>
    <div class="right">
      <dl class="fmdl">
        <dt>类型：</dt>
        <dd><input type="text" name="sharesType" value="" class="txt" valType="OTHER" regString="^\S{1,30}$"msg="<font color=red>*</font>不能为空且且字符长度最大30"/></dd>
      </dl>  
      <dl class="fmdl">
        <dt>获取方式：</dt>
        <dd><input type="text" name="gainMode" value="" class="txt" valType="OTHER" regString="^\S{1,50}$"msg="<font color=red>*</font>不能为空且且字符长度最大50"/></dd>
      </dl>
    </div>
  </div>
  <div class="form_textarea">
    <dl class="fmdl">
      <dt>备注：</dt>
      <dd><textarea name="remark" valType="requiredDiv" regString="^.{0,2000}$" msg="<font color=red>*</font>不能超过2000字符"></textarea></dd>
    </dl>
  </div>
      <a href="javascript:;" onclick="savaStock();" class="pubbtn bluebtn">保存</a>
  </form>
</div>
<jsp:include page="../common/validateJs.jsp" flush="true"></jsp:include>