<%@ page language="java" pageEncoding="UTF-8"%>

<div class="xmstjtc">
	<div id="custom-toolbasr_xmstj_projectlist">
		<input type="hidden" name="deptid" id="xmstj_projectlist_deptid" value="">
		<input type="hidden" name="userid" id="xmstj_projectlist_userid" value="">
		<input type="hidden" name="sdate" id="xmstj_projectlist_sdate" value="">
		<input type="hidden" name="edate" id="xmstj_projectlist_edate" value="">
		<input type="hidden" name="projectType" id="xmstj_projectlist_projectType" value="">
	</div>
	<table id="data-table-xmstj-projectlist"
		data-url="<%=request.getContextPath()%>/galaxy/report/projectlist"
		data-page-list="[10, 20, 50]" width="100%" width="100%"
		cellspacing="0" cellpadding="0"
		data-toolbar="#custom-toolbasr_xmstj_projectlist">
		<thead>
			<tr>
				<th data-field="project_name"  class="data-input">项目名称</th>
				<th data-field="partner"  class="data-input">合伙人</th>
				<th data-field="user_name"  class="data-input">投资经理</th>
				<th data-field="project_careerline"  class="data-input">投资事业线</th>
				<th data-field="project_type"  class="data-input">项目类型</th>
				<th data-field="created_time"  class="data-input">创建时间</th>
				<th data-field="project_progress_name"  class="data-input">项目进度</th>				
				<th data-field="duration_day"  class="data-input">总历时(天)</th>				
			</tr>
		</thead>
	</table>
</div>
<script>
	$(function() {

	});
</script>

