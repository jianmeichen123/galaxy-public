<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>

<!-- 校验 -->
<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>

<div class="qualificationstc errortc" id="compete">
	<div class="title_bj" id="complete_title"></div>
	
    <div class="qualifications_all">
    
    	<form action="" id="detail-form">
			
        <input name="index" type="hidden" value="">
    	<input name="id" type="hidden">
    	<input name="titleId" type="hidden">
    	<input name="subCode" type="hidden">
        <div class="info clearfix"> 
            <dl class="fmdl fl">
                <dt>主要竞争对手：</dt>
                <dd class="clearfix">
                    <input name="field1" type="text" class="txt" maxLength="200"/>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>胜算度：</dt>
                <dd class="clearfix">
                    <input name="field2" type="text" class="txt" maxLength="50" data-rule-verify_10_1="true" data-msg-verify_10_1="<font color=red>*</font>0到10之间的一位小数"/>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>威胁系数：</dt>
                <dd class="clearfix">
                    <input name="field3" type="text" class="txt" maxLength="50" data-rule-verify_10_1="true" data-msg-verify_10_1="<font color=red>*</font>0到10之间的一位小数"/>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>应对竞争的最有效措施：</dt>
                <dd>
                   <textarea class="team_textarea" name="field4" id="com_save_field4" oninput='countChar("com_save_field4","label_com_save_field4","200")'></textarea>
                   <div class="font_num_m num_tj"><span for="" id="label_com_save_field4">200</span>/200</div>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>措施的有效性是否验证：</dt>
                <dd class="clearfix" id="field5" data-type="radio">
                </dd>
            </dl>
                        
        </div>
        
        </form>
    </div>
    
    <!-- 查看显示这里 -->
    	<div class="see_block">
    <div class="qualifications_all">
    
    	<form action="" id="detail-form_look_over">
			
       <!--  <input name="index" type="hidden" value="">
    	<input name="id" type="hidden">
    	<input name="titleId" type="hidden">
    	<input name="subCode" type="hidden"> -->
        <div class="info clearfix"> 
            <dl class="fmdl fl">
                <dt>主要竞争对手：</dt>
                <dd class="clearfix oppostie_people">
                 <!--    <input name="field1" type="text" class="txt" maxLength="200"/> -->
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>胜算度：</dt>
                <dd class="clearfix win_degree">
                   <%--  <input name="field2" type="text" class="txt" maxLength="50" data-rule-verify_10_1="true" data-msg-verify_10_1="<font color=red>*</font>0到10之间的一位小数"/> --%>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>威胁系数：</dt>
                <dd class="clearfix danger_degree">
                   <%--  <input name="field3" type="text" class="txt" maxLength="50" data-rule-verify_10_1="true" data-msg-verify_10_1="<font color=red>*</font>0到10之间的一位小数"/> --%>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>应对竞争的最有效措施：</dt>
                <dd class="helpful_method">
                  
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt>措施的有效性是否验证：</dt>
                <dd class="clearfix verfify_orNot"> </dd>
            </dl>
                        
        </div>
        
        </form>
    </div>
    </div>
    
    <div class="button_affrim">
        <a href="javascript:;"  class="register_all_affrim fl" id="save-detail-btn">确定</a>
        <a href="javascript:;"  class="register_all_input fr"  data-close="close">取消</a>
    </div>
</div>
<script>
     $(function(){
        $("#detail-form").validate({});
        $.validator.setDefaults({
        	errorElement:'span'
        });
    })
    
</script>

