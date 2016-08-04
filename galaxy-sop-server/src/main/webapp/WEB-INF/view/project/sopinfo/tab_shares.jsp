<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.galaxyinternet.com/fx" prefix="fx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<!--法人信息-->
<div class="legal">
	<div class="show">
		<div class="title">
	        <span class="new_ico_legal icon"></span>
	        <span class="new_color size16">法人信息</span>
	        <c:if test="${fx:isCreatedByUser('project',pid) }">
	        <div class="btn">
	         	<span class="new_fctbox">
	            	<a href="javascript:;" class="ico f1" data-btn="edit">编辑</a>
	         	</span>
	        </div> 
	        </c:if>
	    </div>
	    <table width="100%" cellspacing="0" cellpadding="0" class="new_table new_table_stock table_default" id="company-info">
	        <tr>
	            <td><span class="new_color_gray th">公司名称：</span><span class="new_color_black" id="projectCompany"></span></td>
	            <td><span class="new_color_gray th">组织代码：</span><span class="new_color_black" id="projectCompanyCode"></span></td>
	        </tr>
	        <tr>
	            <td><span class="new_color_gray th">法人：</span><span class="new_color_black" id="companyLegal"></span></td>
	            <td><span class="new_color_gray th">成立日期：</span><span class="new_color_black" id="formationDate"></span></td>
	        </tr>
	    </table>                
	</div>
    <div class="hidden">
      <div class="title">
          <span class="new_ico_legal icon"></span>
          <span class="new_color size16">法人信息</span>
          <div class="btn btnbox">
              <button href="javascript:;" class="pubbtn bluebtn" data-btn="save">保存</button>
              <button href="javascript:;" class="pubbtn fffbtn" data-btn="cancle">取消</button>
          </div> 
      </div>
      <form action="#" id="company-info-form">
      <input type="hidden" name="id" value="${projectId }">
      <table width="100%" cellspacing="0" cellpadding="0" class="new_table new_table_stock">
          <tr>
              <td><span class="new_color_gray th">公司名称：</span><input type="text" placeholder="请输入公司名称" name="projectCompany"></td>
              <td><span class="new_color_gray th">组织代码：</span><input type="text" placeholder="请输入组织机构代码" name="projectCompanyCode"></td>
          </tr>
          <tr>
              <td><span class="new_color_gray th">法人：</span><input type="text" placeholder="请输入法人名称" name="companyLegal"></td>
              <td><span class="new_color_gray th">成立日期：</span><input type="text" class="timeico" name="formationDate"></td>
          </tr>
      </table>                    
      </form>
  </div>
</div>

<!--股权结构-->
<div class="member stock">
    <div class="title">
        <span class="new_ico_stock icon"></span>
        <span class="new_color size16">股权结构</span> 
    </div> 
    <div class="top clearfix">
        <!--按钮-->
        <c:if test="${fx:isCreatedByUser('project',pid) }">
          <div class="btnbox_f btnbox_f1 clearfix">
              <a href="#" id="add_share_bth" class="pubbtn bluebtn ico c4 add_prj add_profile" onclick="addSharesView()">添加</a>
          </div>
         </c:if>
      </div>
    <div id="shares-custom-toolbar">
		<input type="hidden" name="projectId" value="${projectId }">
	</div>	
  	<table id="shares-table" data-height="555" data-page-list="[10, 20, 30]" data-toolbar="#shares-custom-toolbar" data-show-refresh="true" class="commonsize">
   	<thead>
	    <tr>
	    	<th data-field="sharesType" data-align="left" class="data-input sharesType" data-formatter="typeFormatter">类型</th>
        	<th data-field="sharesOwner" data-align="left" class="data-input" data-formatter="sharesOwnerFormatter">所有人</th>
        	<th data-field="sharesRatio" data-align="left" class="data-input">占比(%)</th>
        	<th data-field="gainMode" data-align="left" class="data-input" data-formatter="gainModeFormatter">获取方式</th>
        	<th data-field="remark" data-align="left" class="data-input" data-formatter="remarkFormater">备注</th>
        	<c:if test="${fx:isCreatedByUser('project',pid) }">
        	<th data-align="left" class="col-md-2" data-formatter="shareOperatFormater">操作</th>
        	</c:if>
			</tr>	
		</thead>
	</table>
</div>

<script type="text/javascript">
	var $sharesTable;
	var isTransfering = "${fx:isTransfering(pid) }";
	if(isTransfering == 'true')
	{
		$('.legal [data-btn="edit"]').addClass('limits_gray');
		$('#add_share_bth').addClass('limits_gray');
	}
	refreshCompanyInfo();
	$('.legal [data-btn="edit"]').on('click',function(){
		if($(this).hasClass('limits_gray'))
		{
			return;
		}
		editCompany();
	});
	$('.legal [data-btn="save"]').on('click',function(){
		saveCompany();
	});
	$('.legal [data-btn="cancle"]').on('click',function(){
		$('.bj_hui_on').hide();
	    $('.legal .show').show();
		$('.legal .hidden').hide();
	});
		
	$('#company-info-form [name="formationDate"]').datepicker({
	    format: 'yyyy-mm-dd',
	    language: "zh-CN",
	    autoclose: true,
	    todayHighlight: false,
	    defaultDate : Date,
	    today: "Today",
	    todayBtn:'linked',
	    leftArrow: '<i class="fa fa-long-arrow-left"></i>',
	    rightArrow: '<i class="fa fa-long-arrow-right"></i>',
	    forceParse:false,
	    currentText: 'Now'
	});
	 function remarkFormater(value,row,index){
		    var id=row.id;
			var str=row.remark;
			if(str.length>10){
				subStr = str.substring(0,10);
				var options = "<label title='"+str+"'>"+subStr+"</label>";
				return options;
			}
			else{
				var options = "<label title='"+str+"'>"+str+"</label>";
				return options;
			}
		}
	 function typeFormatter(value,row,index){
		    var id=row.id;
			var str=row.sharesType;
			if(str.length>10){
				subStr = str.substring(0,10);
				var options = "<label title='"+str+"'>"+subStr+"</label>";
				return options;
			}
			else{
				var options = "<label title='"+str+"'>"+str+"</label>";
				return options;
			}
		}
	 function sharesOwnerFormatter(value,row,index){
		    var id=row.id;
			var str=row.sharesOwner;
			if(str.length>10){
				subStr = str.substring(0,10);
				var options = "<label title='"+str+"'>"+subStr+"</label>";
				return options;
			}
			else{
				var options = "<label title='"+str+"'>"+str+"</label>";
				return options;
			}
		}
	 function gainModeFormatter(value,row,index){
		    var id=row.id;
			var str=row.gainMode;
			if(str.length>10){
				subStr = str.substring(0,10);
				var options = "<label title='"+str+"'>"+subStr+"</label>";
				return options;
			}
			else{
				var options = "<label title='"+str+"'>"+str+"</label>";
				return options;
			}
		}
	
	
	function editCompany()
	{
		initCompanyFormData();
    	$('.bj_hui_on').show();
		$('.legal .show').hide();
		$('.legal .hidden').show();
	}
	function saveCompany()
	{
		var url = platformUrl.saveCompanyInfo;
		var data = JSON.parse($("#company-info-form").serializeObject());
		if(data.formationDate != null && data.formationDate != '')
		{
			var val = $('#company-info-form [name="formationDate"]').val();
			var date = new Date(val);
			date.setHours(0);
			data['formationDate'] = date.getTime();
		}
		sendPostRequestByJsonObj(
			url, 
			data, 
			function(data){
				if(data.result.status=='OK')
				{
					layer.msg("保存成功!");
					$('.bj_hui_on').hide();
				    $('.legal .show').show();
					$('.legal .hidden').hide();
					refreshCompanyInfo();
				}
				else
				{
					layer.msg(data.result.message);
				}
		});
	}
	function refreshCompanyInfo()
	{
		var dtd = $.Deferred();
		$.when(top.getProjectInfo(dtd))
		.done(function(){
			$("#company-info #projectCompany").text(getVal(projectInfo.projectCompany,''));
			$("#company-info #projectCompanyCode").text(getVal(projectInfo.projectCompanyCode,''));
			$("#company-info #companyLegal").text(getVal(projectInfo.companyLegal,''));
			var date = '';
			if(!isNaN(projectInfo.formationDate))
			{
				date = new Date(projectInfo.formationDate).format('yyyy-MM-dd');
			}
			$("#company-info #formationDate").text(date);
		});
	}
	//设置公司表单数据
	function initCompanyFormData()
	{
		var $form = $('#company-info-form');
		$form.find('[name="projectCompany"]').val(getVal(projectInfo.projectCompany,''));
		$form.find('[name="projectCompanyCode"]').val(getVal(projectInfo.projectCompanyCode,''));
		$form.find('[name="companyLegal"]').val(getVal(projectInfo.companyLegal,''));
		var date = '';
		if(!isNaN(projectInfo.formationDate))
		{
			date = new Date(projectInfo.formationDate).format('yyyy-MM-dd');
		}
		$form.find('[name="formationDate"]').val(date);
	}
	//股权结构列表
	$sharesTable = $("#shares-table").bootstrapTable({
		queryParamsType: 'size|page', 
		pageSize:10,
		url: platformUrl.projectSharesList,  
		showRefresh : false ,
		sidePagination: 'server',
		method : 'post',
		pagination: true,
        search: false,
        onLoadSuccess: function (data) {
        	if(isTransfering == 'true')
       		{
        		$.each($("#shares-table tr"),function(){
	        		$(this).find("td:last").addClass('limits_gray');
        		});
       		}
        	else
       		{
        		$("#shares-table span.edit").click(function(){
        			editStock($(this).data('id'));
        		});
        		$("#shares-table span.del").click(function(){
        			delStock($(this).data('id'));
        		});
       		}
        }
	});
	
	function shareOperatFormater(val,row,index)
	{
		var e = '<span class="edit" data-id="'+row.id+'">编辑</span> ';  
        var d = '<span class="del" data-id="'+row.id+'">删除</span>';  
        return e+d;  
	}
	function editStock(id){
    	var _url = platformUrl.editStockView+id;
		$.getHtml({
			url:_url,
			okback:function(){
				$("#up_stock_form #projectId").val("${projectId}");
			},
			hideback:function(){
				$sharesTable.bootstrapTable('refresh');
			}
		});
		return false;
    }
	function delStock(id)
	{
		layer.confirm(
			'确定要删除数据？',
			function(index){
				layer.close(index);
				var url = platformUrl.deleteProjectShares+id+"/${projectId}";
				sendGetRequest(
					url,
					{},
					function(data){
						if(data.result.status=="OK")
						{
							layer.msg('删除成功');
							$sharesTable.bootstrapTable('refresh');
						}
						else
						{
							layer.msg(data.result.message);
						}
						
					}
				);
			}
		);
		
	}
	function addSharesView(){
		if(isTransfering == 'true')
		{
			return;
		}
		$.getHtml({
			url:platformUrl.addSharesView,
			okback:function(){
				$("#stock_form #projectId").val("${projectId}");
			},
			hideback:function(){
				$sharesTable.bootstrapTable('refresh');
			}
		});
		return false;
	}
	function updateStock()
	{
		if(beforeSubmit())
		{
			sendPostRequestByJsonObj(
					platformUrl.updateStock, 
				JSON.parse($("#up_stock_form").serializeObject()), 
				function(data){
					if(data.result.status=="OK")
					{
						layer.msg('保存成功');
						console.log($(".pop .close")[0]);
						$("[data-close='close']").click();
						$("#shares-table").bootstrapTable('refresh');
					}
					else
					{
						layer.msg(data.result.message);
					}
				}
			);
		}
	}
	function savaStock(){
		if(beforeSubmit())
		{
			sendPostRequestByJsonObj(
				platformUrl.addStock, 
				JSON.parse($("#stock_form").serializeObject()), 
				function(data){
					if(data.result.status=="OK")
					{
						layer.msg('保存成功');
						console.log($(".pop .close")[0]);
						$("[data-close='close']").click();
						$("#shares-table").bootstrapTable('refresh');
					}
					else
					{
						layer.msg(data.result.message);
					}
				}
			);
		}
	}
	
</script>
