<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<div class="addmentc margin_45">
<div class="title_bj">编辑股权结构</div>
  <form action="" id="up_stock_form" method="post" type="validate">
  <input type="hidden" value="" name="projectId" id="projectId">
  <input type="hidden" name="id" id="id" >
  <div class="form clearfix" id="edit_share">
    
      <dl class="fmdl fml">
        <dt>股东：</dt>
        <dd><input type="text" id="sharesOwner" name="sharesOwner" value="${share.sharesOwner }" class="txt" valType="OTHER" allowNULL="yes" regString="^[^\s](.{0,19})$"msg="<font color=red>*</font>只能是汉字或是字符,最长度为20"/></dd>
      </dl>
      <dl class="fmdl">
        <dt>股东类型：</dt>
        <dd>
					<select name='sharesType' id="sharesType">
						<option value="">请选择</option>
						<option value="自然人">自然人</option>
						<option value="法人">法人</option>
						<option value="其他">其他</option>
					</select>
				</dd>
      </dl>
      <dl class="fmdl">
        <dt>股权占比：</dt>
        <dd><input type="text" name="sharesRatio" id="sharesRatio" value="${share.sharesRatio }" class="txt fl" valType="OTHER" allowNULL="yes" regString="^(\d{1,2}(\.\d{1,2})?|100(\.[0]{1,2}))$" msg="<font color=red>*</font>0-100之间的两位小数"/><span>&nbsp;%</span></dd>
      </dl> 
      <%-- <dl class="fmdl">
        <dt>获取方式：</dt>
        <dd><input type="text" name="gainMode" value="${share.gainMode }" class="txt" valType="OTHER" regString="^\S{1,50}$"msg="<font color=red>*</font>不能为空且字符长度最大50"/></dd>
      </dl> --%>
    
  </div>
  <div class="form_textarea">
    <dl class="fmdl">
      <dt>备注：</dt>
      <dd><textarea name="remark" id="remark" maxLength="50">${share.remark }</textarea></dd>
    </dl>
  </div>
  <div class="btnbox clearfix">
    	<a href="javascript:;" onclick="updateStock()" class="pubbtn bluebtn fl">确定</a>
    	<a href="javascript:;" class="pubbtn fffbtn fl" data-close="close">取消</a>
    </div>
      
  </form>
</div>
<jsp:include page="../common/validateJs.jsp" flush="true"></jsp:include>
<script>


</script>