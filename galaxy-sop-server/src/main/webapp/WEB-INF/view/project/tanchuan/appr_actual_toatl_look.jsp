<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<% 
	String path = request.getContextPath(); 
%>


<div class="addmentc">
		<div class="title_bj" id="popup_name_look">查看总注资计划</div>
		
	    <div class="form clearfix">
	        <div class="edit_actual">
	            
	            <dl class="fmdl fl_l  clearfix">
	                <dt>星河投资方主体 ：</dt>
	                <dd>
	                	<span>${value3020}</span>
	                </dd>
	            </dl>
	             <dl class="fmdl fl_l  clearfix">
	                <dt>计划总注资金额：</dt>
	                <dd>
	                	<div><span><fmt:formatNumber value="${value3004}" pattern="#.######" maxFractionDigits="6" > </fmt:formatNumber>万元</span></div> 
	                </dd>
	            </dl>
                
	            <dl class="fmdl fl_l  clearfix">
	                <dt>股权占比：</dt>
	                <dd>
	                	<div><span><fmt:formatNumber value="${value3010}" pattern="#.#####" maxFractionDigits="5" > </fmt:formatNumber>%</span></div> 
	                </dd>
	            </dl>
	            <dl class="fmdl fl_l  clearfix">
	                <dt>加速服务费占比：</dt>
	                <dd>
	                	<div><span><fmt:formatNumber value="${value3011}" pattern="#.####" maxFractionDigits="4" > </fmt:formatNumber>%</span></div> 
	                </dd>
	            </dl>
	            
	            <dl class="fmdl fl_l  clearfix">
	                <dt>项目估值：</dt>
	                <dd>
	                	<div><span class='value3012'>万元</span></div> 
	                </dd>
	            </dl>
	            
	        </div>
	        
	    </div>
	    
	</div>
	<script>
	//格式化项目估值
	var _val='${value3012}';
	if(_val.indexOf('.')>-1){
		debugger;
		var num=_val.split('.');
		if(num[0].length>9){
			_val=_val;
		}else{
			//_val=Number(_val).toFixed(4) 
			_val=finalFloat(_val,6)
			debugger;
		}
	}
	_val = _parsefloat(_val);
	$('span.value3012').text(_val+'万元');
	</script>