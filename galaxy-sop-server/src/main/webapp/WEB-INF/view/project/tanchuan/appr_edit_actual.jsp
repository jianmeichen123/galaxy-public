<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<!-- 校验 -->
<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>

<div class="addmentc">
		<div class="title_bj popup_name_edit"></div>
	    <div class="form clearfix">
	        <div class="edit_actual">
	            <dl class="fmdl fl_l  clearfix">
	                <dt>协议名称 ：</dt>
	                <dd>
	                	<span>创业服务协议</span>
	                </dd>
	            </dl>
                <dl class="fmdl fl_l  clearfix">
	                <dt>计划拨款时间 ：</dt>
	                <dd>
	                	<div>完成条款4后15个工作日内</div> 
	                </dd>
	            </dl>
                <dl class="fmdl fl_l  clearfix">
	                <dt>实际拨款金额 ：</dt>
	                <dd>
	                	
	                	<div>
	                    	<input class=" txt " type="text">
	                    </div> 
                        <div class="gray">剩余金额14,000,000元</div> 
	                </dd>
	            </dl>
	             
	        </div>
	    </div>
	    <div class="button_affrim">
	        <a href="javascript:;" id="win_ok_btn" class="register_all_affrim fl">确认</a>
	        <a href="javascript:;" id="win_cancel_btn" class="register_all_input fr">取消</a>
	    </div>  	
	</div>