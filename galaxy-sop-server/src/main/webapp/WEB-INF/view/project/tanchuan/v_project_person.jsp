<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<script type="text/javascript" src="<%=path %>/bootstrap/bootstrap-datepicker/js/datepicker-init.js" charset="UTF-8"></script>
<style>
.bars {display:none;}
.basic_table{border:1px solid #e9ebf2 !important;margin:0;}
</style>
<div class="addPersontc">
	<div class="title_bj" id="popup_name"></div>
	
	
    <div class="addPerson_all" id="addPerson_all">
    
<!--     
type  name="personName"  name="personDuties"  name="personBirthdayStr"  name="personTelephone"

radio name="personSex"   
    --> 
        <div class="info clearfix">
        	<form id="person_form">
        	
        	<!-- 项目id -->
        	<input type="hidden" name="projectId" id="person_project_id" value="" />
        	
        	<!-- 项目的成员   人力资源id -->
        	<input type="hidden" name="id" id="person_pool_id" value="" />
        	
            <h3>基本信息</h3>
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;姓名：</dt>
                <dd>
                	<input type="text" class="txt" name="personName" valtype1="OTHER" regstring="^[^\s](.{0,49})$"/>
                	<div id="personName_valiate" class="tip-yellowsimple">
						<div class="tip-inner tip-bg-image">
							<font color="red">*</font>不能为空且字符长度最大50
						</div>
						<div class="tip-arrow tip-arrow-left" style="visibility: inherit;"></div>
					</div>
                </dd>
            </dl>
            
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;性别：</dt>
                <dd class="clearfix">
                    <label><input type="radio" name="personSex" value="0" checked="checked" />男</label>
                    <label><input type="radio" name="personSex" value="1" />女</label>
                </dd>
            </dl>
            
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;当前职务：</dt>
                <dd>
                	<!-- <input type="text" class="txt" name="personDuties" valtype1="required" /> -->
                	<select name="personDuties"  valType1="required" style="width:140px;">
                       <option value="">请选择</option>
                      <!--  <option value="CEO">首席执行官</option>
                       <option value="COO">首席运营官</option>
                       <option value="CFO">首席财务官</option>
                       <option value="CIO">首席信息官</option>
                       <option value="CTO">首席技术官</option>
                       <option value="CDO">首席数据官</option>
                       <option value="CMO">首席市场官</option>
                       <option value="CBO">首席商务官</option>
                       <option value="GM">总经理</option>
                       <option value="VP">副总裁</option>
                       <option value="Expert Consultant">专家顾问</option>
                       <option value="Others">其他</option> -->
                       <option value="CEO首席执行官">CEO首席执行官</option>
                       <option value="COO首席运营官">COO首席运营官</option>
                       <option value="CFO首席财务官">CFO首席财务官</option>
                       <option value="CIO首席信息官">CIO首席信息官</option>
                       <option value="CTO首席技术官">CTO首席技术官</option>
                       <option value="CDO首席数据官">CDO首席数据官</option>
                       <option value="CMO首席市场官">CMO首席市场官</option>
                       <option value="CBO首席商务官">CBO首席商务官</option>
                       <option value="GM总经理">GM总经理</option>
                       <option value="VP副总裁">VP副总裁</option>
                       <option value="Expert Consultant专家顾问">Expert Consultant专家顾问</option>
                       <option value="Others其他">Others其他</option>
                   </select>
                   
                	<div id="personDuties_valiate" class="tip-yellowsimple">
						<div class="tip-inner tip-bg-image">
							<font color="red">*</font>当前职务不能为空
						</div>
						<div class="tip-arrow tip-arrow-left" style="visibility: inherit;"></div>
					</div>
                </dd>
            </dl>
            
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;出生年份：</dt>
                <dd>
                    <input type="text" class="datepicker-year-text txt time" name="personBirthdayStr"
                    	readonly  value=""  valType1="required"/>
                    	
                    <div id="personBirthdayStr_valiate" class="tip-yellowsimple">
						<div class="tip-inner tip-bg-image">
							<font color="red">*</font>出生日期不能为空
						</div>
						<div class="tip-arrow tip-arrow-left" style="visibility: inherit;"></div>
					</div>
                </dd>
            </dl>
            <dl class="fmdl fl">
                <dt><em class="red">*</em>&nbsp;是否为联系人：</dt>
                <dd class="clearfix">
                    <label><input type="radio" name="isContacts" value="0" checked="checked" />是</label>
                    <label><input type="radio" name="isContacts" value="1" />否</label>
                </dd>
            </dl>
             <dl class="fmdl fl">
                <dt><em  id="show1"  class="red">*</em>电话号码：</dt>
                <dd>
                	<input type="text" class="txt" name="personTelephone" 
                		placeholder="请输入电话号码" valtype1="OTHER" regstring="^[-0-9]{1,15}$"/>
                	<div id="personTelephone_valiate" class="tip-yellowsimple">
						<div class="tip-inner tip-bg-image">
							<font color="red">*</font>电话号码格式不正确
						</div>
						<div class="tip-arrow tip-arrow-left" style="visibility: inherit;"></div>
					</div>
                </dd>
            </dl>
            <dl class="fmdl fl block">
                <dt>备注：</dt>
                <dd><textarea maxlength="50" name="remark" placeholder="50字以内"></textarea></dd>
            </dl>
            
            </form>
        </div>
        
        
        <div class="qualifications">
	        <div class="tip-yellowsimple-wrap">
	            <h3>学历背景</h3>
	            <div id="learn-tip" class="tip-yellowsimple">
					<div class="tip-inner tip-bg-image">
						<font color="red">*</font>学历背景不能为空
					</div>
					<div class="tip-arrow tip-arrow-left" style="visibility: inherit;"></div>
				</div>
	        </div>
            <span onclick="toAddPersonLearning(null);" class="blue fr add"  data-name="添加学历背景">添加</span>
            
            <div id="learning_table_custom_toolbar">
				<input type="hidden" name="personId" value="" />
			</div>
			<div style="border:1px solid #e9ebf2 !important;width:94% !important;margin:20px 20px;border-radius:6px;">
	            <table  id="per_learning_table" class="basic_table learning-table"
	               	data-url="<%=path %>/galaxy/project/queryProPerLearn" data-method="post" 
		       		data-toolbar="#learning_table_custom_toolbar" data-id-field="deleteIndex" data-unique-id="deleteIndex" >
					<thead>
						<tr>
							<th data-field="deleteIndex"  data-align="left" data-formatter="deleteIndex_Format"></th>
							<th data-field="school"  data-align="left" data-formatter="school" data-width="20%">毕业院校</th>
			                <th data-field="major"  data-align="left" data-formatter="major" data-width="20%">专业</th>
		                     
		                     <!--  beginDate overDate beginDateStr overDateStr -->
		                     <th data-field="BE_time"  data-align="left" data-formatter="learn_TimeFormat" data-width="20%">时间</th>
		                     <th data-field="degree"  data-align="left" data-width="20%" data-formatter="degree_Format">学历</th>
		                     <th data-field="learn_op" data-formatter="pro_learning_format" data-width="20%">操作</th>
						</tr>
					</thead>
				</table> 
			</div>
        </div>
        
        
        
        <div class="qualifications">
	        <div class="tip-yellowsimple-wrap">
	        	<h3>工作履历</h3>
		        <div id="work-tip" class="tip-yellowsimple">
					<div class="tip-inner tip-bg-image">
						<font color="red">*</font>工作履历不能为空
					</div>
					<div class="tip-arrow tip-arrow-left" style="visibility: inherit;"></div>
				</div>
	        </div>
            <span  onclick="toAddPersonWork(null);" class="blue fr add"  data-name="工作履历" >添加</span>
            
            <div id="work_table_custom_toolbar">
				<input type="hidden" name="personId" value="" />
			</div>
			<div style="border:1px solid #e9ebf2 !important;width:94% !important;margin:20px 20px;border-radius:6px;">
			<table id="per_work_table" class="basic_table learning-table" 
               	data-url="<%=path %>/galaxy/project/queryProPerWork" data-method="post" 
	       		data-toolbar="#work_table_custom_toolbar" data-id-field="deleteIndex" data-unique-id="deleteIndex" >
				<!-- <colgroup >
					<col style="width:0;">
					<col style="width:30%;">
					<col style="width:30%;">
					<col style="width:20%;">
					<col style="width:20%;">
				</colgroup> -->
				<thead>
					<tr>
						<th data-field="deleteIndex"  data-align="left" data-formatter="work_deleteIndex_Format" ></th>
						<!--  beginWork overWork beginWorkStr overWorkStr -->
						<th data-field="BE_time"  data-align="left" data-formatter="work_TimeFormat" data-width="25%">时间</th>
						
						<th data-field="companyName"  data-align="left" data-formatter="companyName" data-width="25%">任职公司</th>
		                <th data-field="workPosition"  data-align="left" data-formatter="workPosition" data-width="25%">职位</th>
	                    <th data-field="work_op" data-formatter="pro_work_format" data-width="25%">操作</th>
					</tr>
				</thead>
			</table>
			</div>
             
        </div>
        
    </div>
    
        
    <div class="button_affrim">
        <a href="javascript:;"  class="register_all_affrim fl"  onclick="savePerson()">确定</a>
        <a href="javascript:;"  class="register_all_input fr"  data-close="close">取消</a>
    </div>
</div>





<jsp:include page="../../common/validateJs.jsp" flush="true"></jsp:include>

<script>
$("input:radio[name='isContacts']").change(function() {
	// 0 y; 1 n
	var $selectedvalue = $("input:radio[name='isContacts']:checked").val();
	radio_isContacts_tel($selectedvalue);
});



/* 
//验证输入框内不能输入特殊字符,输入就立刻清除
function cleanSpelChar(th){
    if(/["'<>%;)(&+]/.test(th.value)){
          $(th).val(th.value.replace(/["'<>%;)(&+]/,""));
    }
} */
$(function(){
	
	//$('input[name="personBirthdayStr"]').val(new Date().format("yyyy-MM-dd"));
	$('input[name="personBirthdayStr"]').val("1900");
	
	$.locksCreenOpen();
	$("#learn-tip").css("display","none");
	$("#work-tip").css("display","none");
	
})
 

</script>