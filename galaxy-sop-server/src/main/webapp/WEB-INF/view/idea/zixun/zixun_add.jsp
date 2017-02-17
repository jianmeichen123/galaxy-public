<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>

<!-- 校验 -->
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/js/validate/lib/tip-yellowsimple/tip-yellowsimple.css" />

<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>


<div class="addmentc creative_edit1 zixuntc">

	<div class="title_bj" id="popup_name"></div>
	
	<form id="zixunForm" > 
	<div class="zx_name">
		创意资讯编码<span id="code" >16251627</span>
		<input type="hidden" name="code" value="" />
	</div>
	
	<div class="block">
		<div class="form clearfix">
			<h3>公司信息</h3>
			<div class="left">
				<dl class="fmdl fml">
					<dt>公司名称：</dt>
					<dd>
						<input type="text" class="txt" name="companyName" maxlength="100"  
							valType="required" msg="<font color=red>*</font>公司名称不能为空" />
					</dd>
				</dl>
				<dl class="fmdl">
					<dt>细分领域：</dt>
					<dd>
						<input type="text" class="txt" name="companyField" maxlength="50" />
					</dd>
				</dl>
				<dl class="fmdl">
					<dt>创始人：</dt>
					<dd>
						<input type="text" class="txt" name="companyCuser" maxlength="100" />
					</dd>
				</dl>
				<dl class="fmdl">
					<dt>网址：</dt>
					<dd>
						<input type="text" value="" class="txt" name="companyUrl" maxlength="200"/>
					</dd>
				</dl>
			</div>
			<div class="right">
				<dl class="fmdl">
					<dt>成立日期：</dt>
					<dd>
						<input type="text" class="txt"  name="companyBtime"  maxlength="50" />
					</dd>
				</dl>
				<dl class="fmdl">
					<dt>归属部门：</dt>
					<dd>
						<select name="departmentId" >
						</select>
					</dd>
				</dl>
				<dl class="fmdl">
					<dt>所在地：</dt>
					<dd>
						<input type="text" value="" class="txt"  name="companyAddress" maxlength="100" />
					</dd>
				</dl>
			</div>
		</div>
		<div>
			<h3>创意信息</h3>
			<dl class="fmdl">
				<dt>简介：</dt>
				<dd>
					<textarea maxlength="500" name="remark"></textarea>
				</dd>
			</dl>
			<dl class="fmdl">
				<dt>详细描述：</dt>
				<dd>
					<textarea maxlength="1000" name="detailInfo"></textarea>
				</dd>
			</dl>
		</div>
		</form>
		
		<div class="rz_info">
			<h3>融资信息</h3>
			<label class="blue add" data-btn="add_rzzx" data-name="添加融资信息">添加</label>
			<table class="health_case table" style="width: 700px; margin: 10px auto 0;">
				<thead>
					<tr>
						<th>融资时间</th>
						<th>金额</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="rzBody">
					<tr><td colspan="3" style="text-align:center !important;color:#bbb;border:0;line-height:32px !important" class="noinfo"><label class="no_info_icon_xhhl">没有找到匹配的记录</label></td></tr>
				</tbody>
			</table>
		</div>

	</div>
    
    
	<div class="btnbox">
		<a href="javascript:;" class="pubbtn bluebtn" onclick="saveAdd()">确定</a>
		<a href="javascript:;" class="pubbtn fffbtn" data-close="close">取消</a>
	</div>
</div>


