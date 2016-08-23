<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>

<!-- 校验 -->
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/js/validate/lib/tip-yellowsimple/tip-yellowsimple.css" />

<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>
<script src="<%=path %>/js/utils.js"></script>
<link rel="stylesheet" href="<%=path %>/css/showLoading.css"  type="text/css">
<div class="addmentc">
		<div class="title_bj" id="popup_name">编辑会议纪要</div>
	    <div class="form clearfix" id="actual_aging_container">
	        <div class="conference_all">
	           <form id="actual_aging_form">
		            <dl class="fmdl fl_l  clearfix">
		                <dt>协议名称 ：</dt>
		                <dd>
		                	<span id="totalName">创业服务协议</span>
		                	<input name="totalGrantId" id=totalGrantId type="hidden" value="${totalGrantId}"/>
		                	<input name="id" id="partId" type="hidden" value=""/>
		                	<input type="hidden" id="remainMoney" value="${remainMoney }"/>
		                	<input type="hidden" id="totalMoney" value="${totalMoney }"/>
		                </dd>
		            </dl>
	                <dl class="fmdl fl_l  clearfix">
		                <dt>拨款时间 ：</dt>
		                <dd>
		                	<div>
		                    	<input class="edittxt" name="grantDetail" type="text" value="" valType="OTHER" regString="^.{1,20}$" msg="<font color=red>*</font>姓名只能是汉字或是字符,长度为20" />
		                    </div> 
		                </dd>
		            </dl>
	                 <dl class="fmdl fl_l  clearfix">
		                <dt>拨款金额 ：</dt>
		                <dd>
		                	
		                	<div>
		                    	<input class=" txt " id="grantMoney" name="grantMoney" type="text" value=""/>
		                    </div> 
	                        <div class="gray">剩余金额<span id="formatRemainMoney"></span>元</div> 
		                </dd>
		            </dl>
                 </form>
	            <div class="affrim_line"></div>
	             <dl class="fmdl fl_l" id="choose_up_file">
		                 <dt>上传附件 ：</dt>
		                 <div class="fmload clearfix">
				            <dd>
					        	<input  type="text"  class="txt" name="textarea2" id="textarea2" readonly="readonly"></input>
					        </dd>
					        <dd>
					        	<a href="javascript:;"  class="register_all_affrim fl" id="select_btn">选择附件</a>
				    		</dd>
				        </div>
		            </dl>  
		            <dl class="fmdl fl_l" id="show_up_file">
		                 <table style="width:90%;margin: auto;" id="filelist"  cellspacing="0" cellpadding="0">
		                 <thead>
		                    <tr>
		                      <th style="width:50%;">文件名称</th>
		                      <th style="width:20%" align="center">文件大小</th>
		                      <th style="width:15%" align="center">操作</th>
		                      <th style="width:15%" align="center">进度</th>
		                    </tr>
		                 </thead>
		                 </table> 
		            </dl>
         
	            
	             
	        </div>
	    </div>
	    <div class="button_affrim">
	        <a href="javascript:;" id="win_ok_btn" class="register_all_affrim fl">确认</a>
	        <a href="javascript:;" id="win_cancel_btn" class="register_all_input fr" data-close="close">取消</a>
	    </div>  	
	</div>
	<script>
	   $(function(){
		  var remainMoney = '${remainMoney}';
		      remainMoney = addCommas(fixSizeDecimal(parseFloat(remainMoney)));
           $("#formatRemainMoney").html(remainMoney);
	   });
	
	</script>