<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.galaxyinternet.com/fx" prefix="fx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<% 
	String path = request.getContextPath(); 
	Long projectId = (Long)request.getAttribute("projectId");
%>
<!-- 富文本编辑器 -->
<link id="f" href="<%=path %>/ueditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
<script id="d" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.min.js"></script>
<script id="c" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/umeditor.config.js"></script>
<script id="b" type="text/javascript" charset="utf-8" src="<%=path %>/ueditor/dialogs/map/map.js"></script>
<script id="e" type="text/javascript" src="<%=path %>/ueditor/lang/zh-cn/zh-cn.js"></script>
	<c:set var="isEditable" value="${fx:isCreatedByUser('project',projectId) && !fx:isTransfering(projectId)}" scope="request"/>
   <c:set var="aclViewProject"
	value="${fx:hasRole(1) || fx:hasRole(2) || (fx:hasRole(3) && fx:inOwnDepart('project',projectId)) || fx:hasRole(18)||fx:hasRole(19)|| fx:isCreatedByUser('project',projectId)  }"
	scope="request" />
	
<c:set var="isEditable"
	value="${fx:isCreatedByUser('project',projectId) && !fx:isTransfering(projectId)}"
	scope="request" />
    <!-- 基本信息 -->
	<div class="tabtable_con_jbxx">
	<!-- 默认展示 -->
	<div class="basic_center">
		<div class="new_r_compile_new">
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
				<a href="javascript:;" class="ico f1" data-name="basic" data-on="data-open">编辑</a>
			</span>
		</c:if>
		</div>
		<table width="100%" cellspacing="0" cellpadding="0" class="new_table" id="project_info">
		 <input type="hidden" id="pid" name="id" value="${projectId}"/>
			<tr>
				<td><span class="new_color_gray">项目名称：</span>
					<span class="new_color_black" id="project_name"></span>
				</td>
				<td><span class="new_color_gray">创建时间：</span>
					<span class="new_color_black" id="create_date"></span>
				</td>
			</tr>
			
			<tr>
				<td><span class="new_color_gray" >项目类型：</span><span class="new_color_black" id="projectType"></span></td>
				<td><span class="new_color_gray">最后编辑：</span><span class="new_color_black" id="updateDate"></span></td>
			</tr>
			
			<tr>
				<td><span class="new_color_gray">行业归属：</span><span class="new_color_black" id="industryOwnDs" ></span></td>
				<td><span class="new_color_gray" >投资经理：</span>
					<span class="new_color_black" id="createUname"></span><span class="new_color_gray">(</span><span class="new_color_gray" id="projectCareerline"></span><span class="new_color_gray">)</span></td>
			</tr>
			
		     <tr>
				<td><span class="new_color_gray">本轮融资轮次：</span><span class="new_color_black" id="financeStatusDs"></span></td>
				<td><span class="new_color_gray">项目进度：</span><span class="new_color_black" id="projectProgress"></span>
				<span class="new_color_gray" id="s">(</span>
					<span class="new_color_gray" id="projectStatusDs"></span><span class="new_color_gray" id="end">)</span><span id="insertImg"></span></td>
			</tr>
			     <tr>
				     <td><span class="new_color_gray">项目来源：</span><span class="new_color_black" id="faName"></span></td>
					</tr>
			 <tr>
				     <td colspan="2"><span class="new_color_gray" style="width:60px;text-align:right;">备注：</span><span class="new_color_black" id="remarkStr"></span></td>
					</tr>
		</table>

		<!--融资计划-->
		<div class="new_r_compile new_bottom_color">
			<span class="new_ico_financing"></span> <span class="new_color size16"><em class="red">*</em>融资计划</span>
		</div>
		<table width="100%" cellspacing="0" cellpadding="0" class="new_table">
			<tr>
				<td><span class="new_color_gray">融资金额：</span><span class="new_color_black" id="project_contribution"></span><span class="new_color_black">&nbsp;万元</span></td>
				<td><span class="new_color_gray">出让股份：</span><span class="new_color_black" id="project_share_ratio"></span><span class="new_color_black">&nbsp;%</span></td>
			</tr>
			<tr>
				<td><span class="new_color_gray">项目估值：</span><span class="new_color_black" id="project_valuations"></span><span class="new_color_black">&nbsp;万元</span></td>
			</tr>
		</table>
		
		<!--实际投资-->
		<div class="new_r_compile new_bottom_color">
			<span class="new_ico_practical"></span> <span class="new_color size16">实际投资</span>
		</div>
		<table width="100%" cellspacing="0" cellpadding="0" class="new_table">
			<tr>
				<td><span class="new_color_gray">投资金额：</span><span class="new_color_black" id="finalContribution"></span><span class="new_color_black">&nbsp;万元</span></td>
				<td><span class="new_color_gray">股权占比：</span><span class="new_color_black" id="finalShareRatio"></span><span class="new_color_black">&nbsp;%</span></td>
			</tr>
			<tr>
				<td><span class="new_color_gray">项目估值：</span><span class="new_color_black" id="finalValuations"></span><span class="new_color_black">&nbsp;万元</span></td>
				<td><span class="new_color_gray">加速服务费占比：</span><span class="new_color_black" id="serviceCharge"></span><span class="new_color_black">&nbsp;%</span></td>
	
			</tr>
			<tr>
				<td><span class="new_color_gray">投资形式：</span><span class="new_color_black" id="financeMode"></span></td>
			</tr>
		</table>
		<table width="100%" cellspacing="0" cellpadding="0" id='jointDelivery' >
			
		</table>
	</div>
	<!-- 编辑页面 -->
	<div class="basic_on">
		<div class="title_bj_tzjl">编辑项目基本信息</div>
		<form id="basicForm" onsubmit="return false;">
		<div class="compile_on_center" id="updateProjectInfo">
	        <div class="compile_on_right">
	            <span class="pubbtn bluebtn"  data-on="save">保存</span>
	            <span class="pubbtn fffbtn" data-name="basic" data-on="close">取消</span>
	        </div> 
	       <!--  <div class="new_r_compile new_bottom_color">
				<span class="new_ico_basic"></span> <span class="new_color size16">基本信息</span>
			</div>  -->
	        <table width="100%" cellspacing="0" cellpadding="0" class="new_table">
	            <tr>
	                <td><span class="new_color_gray">项目名称：</span><span><input class="new_nputr"  size="20" maxlength="24"  id="project_name_edit" name="projectName" required data-msg-required="<font color=red>*</font><i></i>项目名称不能为空"></input></span></td>
	                <td><span class="new_color_gray">创建时间：</span><span class="new_color_black" id="create_date_edit"></span></td>
	            </tr>
	            <tr>
	                <td><span class="new_color_gray">项目类型：</span><span class="new_color_black" id="projectType_edit"></span></td>
	                <td><span class="new_color_gray">最后编辑：</span><span class="new_color_black" id="updateDate_edit"></span></td>
	            </tr>
	            <tr>
	                <td><span class="new_color_gray">行业归属：</span><span><select class="new_nputr" id="industry_own_sel" name="industryOwn" required data-msg-required="<font color=red>*</font><i></i>行业归属不能为空">
	                	<option value="">--请选择--</option>
	                </select></span></td>
	                <td><span class="new_color_gray">投资经理：</span><span class="new_color_black" id="createUname_edit"></span><span>(</span><span class="new_color_gray" id="projectCareerline_edit"></span><span>)</span></td>
	            </tr>
	            <tr>
                             <td><span class="new_color_gray">本轮融资轮次：</span><span><select class="new_nputr" id="finance_status_sel" name="financeStatus" required data-msg-required="<font color=red>*</font><i></i>本轮融资轮次不能为空" ></select></span></td>
                              <td><span class="new_color_gray">项目进度：</span><span class="new_color_black" id="projectProgress_edit"></span><span>(</span><span class="new_color_gray" id="projectStatusDs_edit"></span><span>)</span><span id="editImg" class="" style="overflow:hidden;"></span></td>
                         </tr>
                           <tr>
                             <td>
	                             <span class="new_color_gray">项目来源：</span>
	                             <span class="mar_left">
	                             	<select name="projectSource" class='new_nputr fl' valType="required" msg="<font color=red>*</font>项目来源不能为空">
				                    	<option value="">--请选择--</option>
				                    	<option value="">FA</option>
				                    	<option value="">其他</option>
				                    </select>
	                             <input type="text" class="txt new_nputr fl"  placeholder="请输入FA名称"  name="faName"  valType="OTHER" regString="^[^\s](.{0,19})$" id="faName" msg="<font color=red>*</font>不能以空格开头，字符最大长度为20"/>
	                             </span>
                             </td>
                           </tr>

                 <tr>
                      <%-- <td colspan="2"><span class="new_color_gray" style="width:60px;text-align:right;">备注：</span><span><input id="remark" class="new_nputr text"  placeholder="最多输入50字" valType="OTHER" allowNULL="yes" regString="^[^\s](.{0,49})$" msg="<font color=red>*</font><i></i>不能超过50字符"></input></span></td>
                      --%>
                      <td colspan="2"><span class="new_color_gray" style="width:60px;text-align:right;">备注：</span><span><input id="remark" class="new_nputr text"  placeholder="最多输入50字" maxLength = "50"></input></span></td>
                 </tr>
	        </table>  
	        
	        <!--融资计划-->
	        <div class="new_r_compile new_bottom_color">
	            <span class="new_ico_financing"></span>
	            <span class="new_color size16">融资计划</span>
	        </div>  
	       <table width="100%" cellspacing="0" cellpadding="0" class="new_table">
	            <tr>
	                <td><span class="new_color_gray">融资金额：</span><span class="new_color_black"><input class="new_nputr_number" size="20"  id="project_contribution_edit" name="procontribution" data-rule-procontribution="true" data-msg-procontribution="<font color=red>*</font><i></i>支持9位长度的四位小数"/>　&nbsp;万元</span></td>
	                <td><span class="new_color_gray">出让股份：</span><span class="new_color_black"><input class="new_nputr_number" size="20" id="project_share_ratio_edit" name="proshare" data-rule-proshare="true" data-msg-proshare="<font color=red>*</font><i></i>0到100之间的四位小数"/>　&nbsp;%</span></td>
	            </tr>
	            <tr>
	                <td><span class="new_color_gray">项目估值：</span><span class="new_color_black"><input  class="new_nputr_number" id="project_valuations_edit" name="provaluations" data-rule-provaluations="true" data-msg-provaluations="<font color=red>*</font><i></i>支持13位长度的支持四位小数"/>&nbsp;　万元</span></td>
	            </tr>
	              </table>
	        <!--实际投资-->
	        <div class="new_r_compile new_bottom_color">
	            <span class="new_ico_practical"></span>
	            <span class="new_color size16">实际投资</span>
	        </div>  
	        <table width="100%" cellspacing="0" cellpadding="0" class="new_table">
	            <tr>
	                <td><span class="new_color_gray">投资金额：</span><span class="new_color_black"><input class="new_nputr_number" size="20" id="finalContribution_edit" name="finalContribution" data-rule-finalContribution="true" data-msg-finalContribution="<font color=red>*</font><i></i>支持9位长度的支持四位小数"/>&nbsp;　万元</span></td>
	                <td><span class="new_color_gray">股权占比：</span><span class="new_color_black"><input class="new_nputr_number" size="20" id="finalShareRatio_edit" name="finalShareRatio" data-rule-finalShareRatio="true" data-msg-finalShareRatio="<font color=red>*</font><i></i>0到100之间的四位小数"/>&nbsp;　%</span></td>
	            </tr>
	            <tr>
	                <td><span class="new_color_gray">项目估值：</span><span class="new_color_black"><input  class="new_nputr_number" id="finalValuations_edit" name="finalValuations" data-rule-provaluations="true" data-msg-provaluations="<font color=red>*</font><i></i>支持13位长度的支持四位小数"/>&nbsp;　万元</span></td>
	                <td><span class="new_color_gray">加速服务费占比：</span><span class="new_color_black"><input class="new_nputr_number" size="20" id="serviceChargeedit" name="serviceChargeedit" data-rule-serviceChargeedit="true" data-msg-serviceChargeedit="<font color=red>*</font><i></i>0到5之间的四位小数"/>&nbsp;　%</span></td>
	     	
	     		</tr>
	     		<tr>
	                <td><span class="new_color_gray">投资形式：</span>
	                <span class="mar_left">
                        <div class="mar_left"><input type="radio" name="investForm" value="financeMode:0">独投 </div>
                        <div class="mar_left"><input type="radio" name="investForm" value="financeMode:1">领投</div>
                        <div class="mar_left"><input type="radio" name="investForm" value="financeMode:2">合投</div>
                     </span>
	                </td>
	     		</tr>
	        </table>
	        <div class="institution clearfix" >
	        	<div class="fl"><span class='new_color_gray'>合投机构：</span></div>
	        	<div class="fl">
	        		<div class="inputsForm"></div>
	        		<div class="institutionBtn"><span class="pubbtn bluebtn">新增</span></div>
	        	</div>
	        </div>
	    </div>
	    </form>
	</div>
</div>
<!--商业计划书-->
<div class="tabtable_con_on">
	<div class="new_r_compile ">
		<span class="new_ico_book"></span> <span class="new_color size16"><em class="red">*</em>商业计划书</span>
	</div>
	<ul class="new_ul_all new_top_color" id='business_plan'>
		<li></li>
		<li></li>
		<li></li>

		<li class="new_ul_right"><span class="new_fctbox"> <a href="javascript:;" class="ico f2" data-btn="describe">查看</a>
				<a href="javascript:;" class="ico new1" data-btn="edit" id="uploadOperator">更新</a>
				<a href="javascript:;" class="ico new2" data-btn="describe">查看历史</a>
		</span></li>
	</ul>
</div>

<%-- <div class="tabtable_con_on" >
	<div class="project_on" id="updateProjectDescribe" style="height:420px;">
		<div class="title_bj_tzjl">项目描述</div>
		<div class="block_wrap">
			<div class="describe1">
				<span class="basic_span1"><em class="red">*</em>商业模式：</span>
				<!-- <div id="describe_editor" type="text/plain" class='width_fwb'></div>   -->
				<input id="describe_editor" class="new_nputr text" style="border:1px solid #d4d4d4;width:100%;" placeholder="最多输入50字" valType="OTHER" allowNULL="yes" regString="^[^\s](.{0,49})$" msg="<font color=red>*</font><i></i>不能超过50字符"></input>
			</div>
			<div class="describe2">
				<span class="basic_span1"><em class="red">*</em>业务简要概述和项目亮点：</span>
				<div id="describe_editor2" type="text/plain" class='width_fwb'></div>  
			</div>
            <div class="compile_on_center">
                <div class="compile_on_right">
                     <span class="pubbtn bluebtn" id="save_describe">保存</span>
                     <span class="pubbtn fffbtn" data-name="project" data-on="close">取消</span>
                </div>  
          </div>
		</div>
                  
              </div>
              <div class="project_center">
		<div class="new_r_compile ">
			<span class="new_ico_project"></span> <span class="new_color size16"><em class="red">*</em>项目描述</span> <span class="bj_ico" id="descript">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox">
				<a href="javascript:;" class="ico f1" data-name="project" data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color describe_show clearfix" >
			<div id="describe_show_div"><span class="ico_dot ico"></span><span style="font-size:14px;font-family:'微软雅黑';line-height:36px;padding-left:20px;">商业模式</span></div>
			<p style="padding-left:22px" id="describe_show" valiate="required"></p>
			<div id="describe2_show_div"><span class="ico_dot ico"></span><span style="font-size:14px;font-family:'微软雅黑';line-height:36px;padding-left:20px;">业务简要概述和项目亮点</span></div>
			<p style="padding-left:22px" id="describe2_show" valiate="required"></p>
		</div>
	</div>
</div> --%>
<!-- 1.8期隐藏开始  -->

<%-- <!--公司定位-->
<div class="tabtable_con_on">
	<div class='company_center'>
		<div class="new_r_compile ">
			<span class="new_ico_firm"></span> <span class="new_color size16"><em class="red">*</em>公司定位</span> <span class="bj_ico" id="location">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
				<a href="javascript:;" class="ico f1" data-name='company'  data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new location_show">
			<span class="ico_dot ico"></span>
			<p id="location_show" class="clearfix"></p>
		</div>
	</div>
	<div class='company_on'>					
		<div class="title_bj_tzjl">公司定位</div>
		<div class="block_wrap">
			<div id="company_editor" type="text/plain" class='width_fwb'></div>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_location">保存</span>
                        <span class="pubbtn fffbtn" data-name='company' data-on="close">取消</span>
                    </div>  
                </div>
        </div>
	</div>
	
</div>
<!--用户画像-->
<div class="tabtable_con_on">
	<div class='portrayal_center'>
		<div class="new_r_compile ">
			<span class="new_ico_people"></span> <span class="new_color size16"><em class="red">*</em>用户画像</span> <span class="bj_ico" id="portrait">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
			<a href="javascript:;" class="ico f1" data-name='portrayal'  data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new portrait_show">
			<span class="ico_dot ico"></span>
			<p id="portrait_show" class="clearfix"></p>
		</div>
	</div>
	<div class='portrayal_on'>
		<div class="title_bj_tzjl">用户画像</div>
		<div class="block_wrap">
			<div id="portrait_editor" type="text/plain" class='width_fwb'></div>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_portrait">保存</span>
                        <span class="pubbtn fffbtn" data-name='portrayal' data-on="close">取消</span>
                    </div>  
                </div>
         </div>
	</div>
	
</div>


<!--产品服务-->
<div class="tabtable_con_on">
	<div class='product_center'>
		<div class="new_r_compile ">
			<span class="new_ico_product"></span> <span class="new_color size16"><em class="red">*</em>产品服务</span> <span class="bj_ico" id="business_model">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
				<a href="javascript:;" class="ico f1" data-name='product' data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new business_model_show">
			<span class="ico_dot ico"></span>
			<p id="business_model_show" class="clearfix"></p>
		</div>
	</div>
	<div class='product_on'>
		<div class="title_bj_tzjl">产品服务</div>
		<div class="block_wrap">
			<div id="business_editor" type="text/plain" class='width_fwb' ></div>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_business">保存</span>
                        <span class="pubbtn fffbtn" data-name='product' data-on="close">取消</span>
                    </div>  
                </div>
         </div>
	</div>
</div>

<!--运营数据-->
<div class="tabtable_con_on">
	<div class='operation_center'>
		<div class="new_r_compile ">
			<span class="new_ico_run"></span> <span class="new_color size16">运营数据</span> <span class="bj_ico" id="operational_data">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
				<a href="javascript:;" class="ico f1" data-name='operation' data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new operational_data_show">
			<span class="ico_dot ico"></span>
			<p id="operational_data_show" class="clearfix"></p>
		</div>
	</div>
	<div class='operation_on'>
		<div class="title_bj_tzjl">运营数据</div>
		<div class="block_wrap">
			<div id="operation_editor" type="text/plain" class='width_fwb' ></div>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_operation">保存</span>
                        <span class="pubbtn fffbtn" data-name='operation' data-on="close">取消</span>
                    </div>  
                </div>
       </div>
	</div>
	
</div>


<!--行业分析-->
<div class="tabtable_con_on">
	<div class='industry_center'>
		<div class="new_r_compile ">
			<span class="new_ico_industry"></span> <span class="new_color size16"><em class="red">*</em>行业分析</span> <span class="bj_ico" id="industry_analysis">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
				<a href="javascript:;" class="ico f1" data-name='industry' data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new industry_analysis_show">
			<span class="ico_dot ico"></span>
			<p id="industry_analysis_show" class="clearfix"></p>
		</div>
	</div>
	<div class='industry_on'>
		<div class="title_bj_tzjl">行业分析</div>
		<div class="block_wrap">
			<div id="industry_editor" type="text/plain" class='width_fwb' ></div>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_industry">保存</span>
                        <span class="pubbtn fffbtn" data-name='industry' data-on="close">取消</span>
                    </div>  
                </div>
       </div>
	</div>
	
</div>
<!--竞情分析-->
<div class="tabtable_con_on">
	<div class='analysis_center'>
		<div class="new_r_compile ">
			<span class="new_ico_jq"></span> <span class="new_color size16"><em class="red">*</em>竞争分析</span> <span class="bj_ico" id="analysis">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
				<a href="javascript:;" class="ico f1" data-name='analysis' data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new analysis_show">
			<span class="ico_dot ico"></span>
			<p id="analysis_show" class="clearfix"></p>
		</div>
	</div>
	<div class='analysis_on'>
		<div class="title_bj_tzjl">竞争分析</div>
		<div class="block_wrap">
			<div id="analysis_editor" type="text/plain" class='width_fwb'></div>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_analysis">保存</span>
                        <span class="pubbtn fffbtn" data-name='analysis' data-on="close">取消</span>
                    </div>  
                </div>
           </div>
	</div>
</div>

<!--下一轮融资路径-->
<div class="tabtable_con_on">
	<div class='next_financing_center'>
		<div class="new_r_compile ">
			<span class="new_ico_nex"></span> <span class="new_color size16">下一轮融资路径</span> <span class="bj_ico" id="next_financing_source">暂无数据</span>
			<c:if test="${isEditable}">
			<span class="new_fctbox"> 
			<a href="javascript:;" class="ico f1" data-name='next_financing' data-on="data-open">编辑</a>
			</span>
			</c:if>
		</div>
		<div class="new_ul_all new_top_color new_top_color_new next_financing_source_show">
			<span class="ico_dot ico"></span>
			<p id="next_financing_source_show" class="clearfix"></p>
		</div>
	</div>
	<div class='next_financing_on'>
		<div class="title_bj_tzjl">下一轮融资路径</div>
		<div class="block_wrap">
			<script id="next_financing_editor" type="text/plain" class='width_fwb'></script>  
                 <div class="compile_on_center">
                    <div class="compile_on_right">
                        <span class="pubbtn bluebtn" id="save_next_financing">保存</span>
                        <span class="pubbtn fffbtn" data-name='next_financing' data-on="close">取消</span>
                    </div>  
                </div>
        </div>
	</div>
	
</div>
 --%>
<!-- 1.8期隐藏开结束 -->
<div class="tabtable_con_on">
<input type="hidden" id="pid" name="id" value="${pid}" />

<c:if test="${aclViewProject==true}">
	<div class="member">
		<c:if test="${isEditable}">
			<div class="top clearfix">
				<!--按钮-->
				<div class="btnbox_f btnbox_f1 clearfix">
					<a id="add_person_btn" href="javascript:;" onclick="toAddPerson(null,null);" class="pubbtn bluebtn ico c4 add_prj add_profile" data-name="团队成员">添加</a>
					<!--  <a href="javascript:;" class="pubbtn bluebtn edit_profile" onclick="toSureMsg();">完善简历</a> -->
				</div>
			</div>
		</c:if>
		
		<!--表格内容-->
		<div class="tab-pane active commonsize" id="view">
			<table id="tablePerson"  data-method="post" data-page-list="[10,20,30]" data-show-refresh="true" >
			</table>
		</div>

	</div>
</c:if>
</div>









<!--隐藏-->
<div class="bj_hui_on"></div>
<script type="text/javascript">
     //投资机构是否删除字段标示
     var isDelete=[];
	var projectInfo = ${proinfo};
	//项目来源切换
	$("select[name='projectSource']").change(function(){
		var text=$(this).find("option:checked").text();
		if(text=="FA"){
			$(this).siblings(".new_nputr").show();
		}else{
			$(this).siblings(".new_nputr").hide();
		}
	})
	//运营数据分析返回
	if(document.URL.indexOf("back=operateList")>0){
		initTabPostMeeting();
		$(".projectDetail li").eq(7).addClass("on").siblings().removeClass("on");
	}
	//新增添加合投机构
	function addInputsRow(i){
	     var inputsRow='<div class="block_inputs">'
	          +'<span><input placeholder="填写机构名称" class="name" name="deliveryName_'+i+'" required maxLength="50" data-msg-required="<font color=red>*</font><i></i>必填，且不超过50字" data-rule-delivery="true" data-msg-delivery="<font color=red>*</font><i></i>不能为空"/></span>'
	          +'<span><input placeholder="填写投资金额（万元）" name="deliveryAmount_'+i+'" required data-rule-amount="true" data-msg-required="<font color=red>*</font><i></i>支持0-1000000的四位小数" data-msg-amount="<font color=red>*</font><i></i>支持0-1000000的四位小数"/></span>'
	          +'<span><select><option value="">人民币</option><option value="">美元</option></select></span>'
	          +'<span><input placeholder="填写占股比例（%）" name="deliveryShareRatio_'+i+'" required data-rule-share="true" data-msg-required="<font color=red>*</font><i></i>0到100之间的两位小数" data-msg-share="<font color=red>*</font><i></i>0到100之间的两位小数"/></span>'
	            +'<span class="del">删除</span>'
	            +'</div>';
	  	$(".inputsForm").append(inputsRow);
	  };
	  //新增
	  var i=0;
	$(".institutionBtn span").click(function(){
		i++;
		addInputsRow(i-1);
		var inputsLength=$(".block_inputs").length;
		if(inputsLength>0){
			$(this).css("margin-top","50px");
		}else{
			$(this).css("margin-top","0");
		}
		if(inputsLength>=10){
			$(this).hide()
		}else{
			$(this).show()
		}
		//新增验证样式调整
		$.each($("#basicForm input"),function(){
			$(this).on("blur",function(){
				labelPosition();
			})
		})
	})
	//删除
	$(document).on('click','.block_inputs .del',function(){
		var input1=$(this).siblings("span:first").children("input:first").attr("data-id");
		if(null!=input1){
			isDelete.push(input1);
		}
		$(this).closest(".block_inputs").remove();
		var inputsLength=$(".block_inputs").length;
		if(inputsLength <10){
			$(".institutionBtn span").show()
		}else{
			$(".institutionBtn span").hide()
		}
		if(inputsLength>0){
			$(".institutionBtn span").css("margin-top","50px")
		}else{
			$(".institutionBtn span").css("margin-top","0")
		}
	});
</script>
<script src="<%=path %>/js/projectDetail/tabInfo.js" type="text/javascript"></script>

<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/jquery.validate.min.js'></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/projectDetail/tabInfoValidate.js'></script>
