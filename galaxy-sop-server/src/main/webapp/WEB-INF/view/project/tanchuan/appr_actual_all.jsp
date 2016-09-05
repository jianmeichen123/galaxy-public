<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>

<div class="addmentc">
		<div class="title_bj" id="popup_name"></div>
		<form action="" method="post" id="add_form">
	    <div class="form clearfix">
	        <div class="edit_actual" id="info">
	            <dl class="fmdl fl_l  clearfix">
	                <dt>协议名称 ：</dt>
	                <input type="hidden"  name="id" id="totallId" >
	                <dd>
	                	<div>
	                    	<input class="edittxt" type="text" id="grantName" name="grantName"   valType="OTHER" regString="^.{1,20}$" msg="<font color=red>*</font>协议名称只能输入20个字符"/>
	                    </div>
	                </dd>
	            </dl>
                <input type="hidden" name="projectId" value="${projectId}">
                <dl class="fmdl fl_l  clearfix">
	                <dt>计划拨款金额 ：</dt>
	                <dd>	
	                	<div id="setValue">
	                    	<input class=" txt " type="text" id="grantMoney"  name="grantMoney"  valType="OTHER" regString="^(([1-9])|(0\.\d*[1-9])|[1-9][0-9]{1,8}|([1-9]{1,9}\.[0-9]{1,2}))$" msg="<font color=red>*</font>支持9位长度的两位小数">
	                    	<span class='money'>元</span>
	                    </div> 
	                </dd>
	            </dl>
	             
	        </div>
	    </div>

	    <div class="button_affrim">
	        <a href="javascript:;" id="win_ok_btn" onclick="saveAppr()" class="register_all_affrim fl">确认</a>
	        <a href="javascript:;" id="win_cancel_btn" class="register_all_input fr" data-close="close">取消</a>
	    </div> 
	    	    </form> 	
	</div>
	<script>
	var 	formData;
	function saveAppr(){
		if(beforeSubmit()){
			sendPostRequestByJsonStr(platformUrl.addGrantTotal, $("#add_form").serializeObject(), function(data){
				if(!data){
					layer.msg("提交表单过于频繁!");
				}else if(data.result.status=="ERROR"){
					
						layer.msg(data.result.message);
				}else{
					layer.msg(data.result.message);
					forwardWithHeader(Constants.sopEndpointURL + "/galaxy/project/toAppropriation/${projectId}/null");
				}
				
			});
		}
	}
	</script>