<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<!-- 校验 -->
<script type="text/javascript" src="<%=request.getContextPath() %>/js/validate/lib/jquery.poshytip.js"></script>
<script type='text/javascript' src='<%=request.getContextPath() %>/js/validate/lib/jq.validate.js'></script>

<!-- 分页二css+四js -->
<link rel="stylesheet" href="<%=path %>/bootstrap/bootstrap-table/bootstrap-table.css"  type="text/css">
<script src="<%=path %>/bootstrap/bootstrap-table/bootstrap-table-xhhl.js"></script>
<script src="<%=path %>/bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"></script>
<style>
.bars{display:none;}
.bootstrap-table #actual-table>tbody>tr>td{padding:0 5px !important;}
</style>
<div class="addmentc" style="max-height:350px;">
	<div class="title_bj" id="popup_name">实际注资信息列表</div>
     
    <div class="addbutton btnbox_f1 clearfix margin_45">                        	
        <span id="btn_add_appr_actual" data-btn="actual_win" style="display: none"  data-id="" data-type="add" resource-mark="add_appr_actual" class="pbtn bluebtn h_bluebtn">添加实际注资信息</span>        
    </div>
    <div class="form clearfix">
        <div class="actual_all">
        	<input type="hidden" value="" name="partGrantId">
        	<input type="hidden" value="" id="partFlag">
        	<table id="actual-table" data-page-list="[5,10]" 
        		data-toolbar="#custom-toolbar" data-show-refresh="true">
				<thead>
				    <tr>
			        	<!-- <th data-field="field1" data-formatter="grantMoneyFormat"  class="data-input" >实际注资金额（万元）</th>
			        	<th data-field="field2" data-formatter="createDateFormat" class="data-input"  >实际注资日期<span></span></th> -->
			        	<th data-field="field1" class="data-input" >实际注资金额（万元）</th>
			        	<th data-field="field2" class="data-input"  >实际注资日期<span></span></th>
			        	<th data-field="createUserName" class="data-input">注资人<span></span></th>
			        	<th class="col-md-2" data-formatter="operatorFormat" data-events="operatorEvent" data-class="noborder">操作</th>
 					</tr>	
 				</thead>
			</table>
        </div>
    </div>
    <script type="text/javascript">
    	if(isContainResourceByMark('add_appr_actual') && isTransfering != 'true')
		{
			$('[resource-mark="add_appr_actual"]').css("display","inline-block");
		}
	    function createDateFormat(value, row, index){
	    	if(value && value != ''){
	    		return value;
	    		/* return time_zh(value, "年", "月", "日"); */
	    	}else return '';
	    }
	    function grantMoneyFormat(value, row, index){
	    	return fixSizeDecimal(value,4);
	    }
	    function operatorFormat(value, row, index){
	    	var opts = '';
	    	
	    	opts += '<label class="showActualLink blue">查看</label>';
	    	
	    	if(isContainResourceByMark('edit_appr_actual') && isTransfering != 'true')
    		{
	    		opts += '<span class="blue"  data-btn="actual_win" data-type="edit">编辑</span>';
    		}
	    	if(isContainResourceByMark('delete_appr_actual') && isTransfering != 'true')
    		{
	    		opts += '<label class="deleteActualLink blue"  href="javascript:void(0)">删除</label>';
    		}
	    	/* if(row.fileNum && row.fileNum > 0){
	    		opts += '<label class="downfile blue" href="javascript:void(0)">下载附件</label>';
	    	} */
	    	
		    return opts;
		 }
	    var operatorEvent = {
	    		'click .downfile' : function(e, value, row, index){
	    			try {
	    				var url = Constants.sopEndpointURL + '/galaxy/grant/actual/downActualFile'+"/"+row.id;
	    				layer.msg('正在下载，请稍后...',{time:2000});
	    				window.location.href=url+"?sid="+sessionId+"&guid="+userId;
	    			} catch (e) {
	    				layer.msg("下载失败");
	    			}
	    		},
	    		'click .editActualLink' : function(e, value, row, index){
	    			var formdata = {
	    					parentId :	${partId},
	    					actualId : row.id,
	    					operatorFlag : 2,
	    					callFuc : function(data){
		    					 $('#actual-table').bootstrapTable('refresh',function(param){
		    				        	param.partGrantId = ${partId};
		    				        	return param;
		    				        });
		    					 flushData(${partId});
		    					}
	    			}
	    			editApprActualDialog.init(formdata);
	    		},
	    		'click .deleteActualLink'  : function(e, value, row, index){
	    			layer.confirm('是否删除实际注资信息?', {
		        		  btn: ['确定', '取消'], //可以无限个按钮
		        		  title:"提示",
		        		}, function(index, layero){
		        			
		        			
		        			sendGetRequest(platformUrl.deleteApprActual + "/" + row.id ,null,function(data){
		    	        		if(data.result.status=="OK"){
		    	        			layer.msg("删除成功");
	    	                		flushData(${partId});
	    	                		//reference('${projectId}');
		    	        			var options = $('#actual-table').bootstrapTable('getOptions');
		    	                	var data = options.data;
		    	                	var pageNum_ = options.pageNumber; 
		    	                	
		    	                	var toPageNum = 1;
		    	                	if(pageNum_ != 1 &&　data.length != 1){
		    	                		toPageNum = pageNum_;
	                	        	}else if(pageNum_ != 1 &&　data.length == 1){
		    	                		toPageNum = pageNum_ - 1;
	                	        	}else
	                	        		toPageNum = pageNum_;
		    	                	
		    	        			$('#actual-table').bootstrapTable('destroy');
	    	                		$('#actual-table').bootstrapTable({
	    	                	    	queryParamsType: 'size|page',
	    	                			pageSize:5,
	    	                			pageNumber:toPageNum,
	    	                			showRefresh : false ,
	    	                			url : Constants.sopEndpointURL+"/galaxy/grant/actual/searchActualList",
	    	                			sidePagination: 'server',
	    	                			method : 'post',
	    	                			sortOrder : 'desc',
	    	                			sortName : 'updated_time',
	    	                			pagination: true,
	    	                	        search: false,
	    	                	        queryParams:function(param){
	    	                	        	param.partGrantId = ${partId};
	    	                	        	return param;
	    	                	        },
	    	                	        onLoadSuccess: function (data) {
	    	                	        	 $.each(allResourceToUser, function(index, element){
	    	                	        		 console.log(element.resourceMark)
	    	                	     			 $('[resource-mark="' + element.resourceMark + '"]').css("display","inline-block");
	    	                	     			 
	    	                	     		});
	    	                	        }
	    	                	    });
		    	        			}else{
		    						layer.msg(data.result.errorCode);
		    					}
		    	        	});
		        		  //按钮【按钮一】的回调
		        		}, function(index){
		        		  //按钮【按钮二】的回调
		        		});
	    		},
				'click .showActualLink'  : function(e, value, row, index){
					var formdata = {
	    					parentId　:	${partId},
	    					actualId : row.id,
	    					operatorFlag : 3
	    			}
	    			editApprActualDialog.init(formdata);
	    		}
	    };
	    $('#actual-table').bootstrapTable({
	    	queryParamsType: 'size|page',
			pageSize:5,
			showRefresh : false ,
			url : Constants.sopEndpointURL+"/galaxy/grant/actual/searchActualList",
			sidePagination: 'server',
			method : 'post',
			//sortOrder : 'desc',
			//sortName : 'updated_time',
			pagination: true,
	        search: false,
	        queryParams:function(param){
	        	param.parentId = ${partId};
	        	param.projectId = pId;
	        	return param;
	        },
	        onLoadSuccess: function (data) {
	        	
	        }
	    });
	    
	    function actualLook(actualId){
	    	$.getHtml({
				url:Constants.sopEndpointURL+"/galaxy/grant/actual/lookActual/"+actualId,
				data:"",
				okback:function(){
					
				}	
			});
	    }
    </script>
    <script type="text/javascript">
    var key = Date.parse(new Date());
    var keyJSON={};
    var deleteJSON={};
	    function init(){
	    	$("[data-btn='actual_win']").on("click",function(){ 	
	    	//$("#btn_add_appr_actual").click(function(){
	    		   
	    			var $self = $(this);
	    			var _id = $self.attr("data-id");
	    			var _url=  platformUrl.toEditApprActual;
	    			var _data_type = "";
	    			/* var _name= $self.attr("data-name");
	    			var _total_name = $self.attr("data-total-name");
	    			//查看分期计划
	    			if(_data_type == "info"){
	    				_url = Constants.sopEndpointURL+'/galaxy/grant/part/toApprPartAgingInfo';
	    			} */
	    			$.getHtml({
	    					url:_url,//模版请求地址
	    					data:"",//传递参数
	    					okback:function(){
	    						key = Date.parse(new Date());
	    						delete deleteJSON.partDelFile;
	    						
	    						$("#projectId").val(pId);
	    						$("#parentId").val(_id);
	    						 keyJSON["b_part"]=key;
	    						 var params = {};
	    						 params.fileReidsKey = key;
	    						 params.projectId =  pId;
	    						 params.titleId = "3022";
	    						if(_data_type == "edit" || _data_type == "info"){
	    							var _part_id = $self.attr("data-part-id");
	    							_url = Constants.sopEndpointURL + '/galaxy/grant/part/selectGrantPart/'+_part_id;
	    							sendGetRequest(_url, {}, function(data){
	    								var result = data.result.status;
	    								if(result == "OK"){
	    									var grantPartInfo = data.entity;
	    									if(_data_type == "edit"){
	    										$("#actual_aging_container [data-name='id']").val(grantPartInfo.id);
	    										$("#actual_aging_container [data-name='field1']").val(grantPartInfo.field1);
	    										$("#actual_aging_container [data-name='field2']").val(grantPartInfo.field2);
	    										$("#actual_aging_container [data-name='field3']").val(grantPartInfo.field3);
	    										$("#actual_aging_container [data-name='field4']").val(grantPartInfo.field4);
	    									}else{
	    										$("#grantName").html(grantPartInfo.field1);
	    										$("#grantDetail").html(grantPartInfo.field2);
	    										$("#grantMoney").html(grantPartInfo.field3);
	    										$("#payCondition").html(grantPartInfo.field4);
	    									}
	    									$.each(data.entity.fileList,function(){
	    										var but = "<button type='button' id='"+this.id+"btn' onclick=delPart('"+this.id+"','"+this.fileName+"','textarea2','partDelFile')>删除</button>" ;
	    										var htm = "<tr id='"+this.id+"tr'>"+
	    														"<td>"+this.fileName+"."+this.fileSuffix+
	    															"<input type=\"hidden\" name=\"oldfileids\" value='"+this.id+"' />"+
	    														"</td>"+
	    														"<td>"+plupload.formatSize(this.fileLength)+"</td>";
	    											if(_data_type == "edit"){
	    												htm+=	"<td>"+ but +"</td><td>100%</td>";
	    											}			
	    											htm+= "</tr>";
	    										$("#filelist").append(htm);
	    									});
	    									var fileLen=$("#filelist tr:gt(0)").length;
	    									if(fileLen==0){
	    										$("#filelist").css("display","none");
	    									}
	    									 toBachPartUpload(Constants.sopEndpointURL+'galaxy/informationFile/sendInformationByRedis',
	    												null,"textarea2","select_btn","win_ok_btn","actual_aging_container","filelist",
	    												params,"actual_aging_form",null,null);
	    									
	    								}else{
	    									layer.msg(data.result.message);
	    								}
	    							});
	    						
	    						}else{
	    							$("#partId").remove();
	    							 toBachPartUpload(Constants.sopEndpointURL+'galaxy/informationFile/sendInformationByRedis',
	    										null,"textarea2","select_btn","win_ok_btn","actual_aging_container","filelist",
	    										params,"actual_aging_form",null,null);
	    						
	    						
	    						
	    						} 
	    					}//模版反回成功执行	
	    				});
	    			
	    		    return false;
	    		
	    	});
	    }
	    $(document).ready(init());
    	
    </script>
  	
</div>