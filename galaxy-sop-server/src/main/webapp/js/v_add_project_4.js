


// todo 新增访谈记录

//新增访谈记录弹窗
$("[data-btn='pro_interview']").on("click",function(){
	var $self = $(this);
	var _url = $self.attr("href");
	$.getHtml({
		url:_url,//模版请求地址
		data:"",//传递参数
		okback:function(){
			initViewUpload();
			initNullPro();
			$('.edui-container').show();
		}//模版反回成功执行	
	});
	return false;
});
	

//访谈记录-项目
function initNullPro(){
	$("#div_pro").remove();
}

//plupload上传对象初始化,   绑定保存
function initViewUpload() {
	var viewuploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : $("#file-select-btn")[0], 
		
		url : Constants.sopEndpointURL+"/galaxy/project/savePreProViewAndFile/"+pid,
		
		multipart:true,
		multi_selection:false,
		filters : {
			max_file_size : '25mb',
			mime_types: paramsFilter(1)
		},

		init: {
			//上传按钮点击事件 - 开始上传
			PostInit: function(up) {
				$("#saveInterView").click(function(){
					$("#saveInterView").addClass("disabled");
					var res = getPreViewCondition("viewDate", "viewTarget", "viewNotes");
					if(res == false || res == "false"){
						up.stop();
						$("#saveInterView").removeClass("disabled");
						return;
					}
					
					//var file = $("#fileName").val();
					if(up.files.length != 0){
						up.settings.multipart_params = res;  //viewuploader.multipart_params = { id : "12345" };
						viewuploader.start();
					}else{
						sendPostRequestByJsonObj(Constants.sopEndpointURL+"/galaxy/project/savePreProViewAndFile/"+pid,res,function(data){
							var result = data.result.status;
							if(result == "ERROR"){ //OK, ERROR
								$("#saveInterView").removeClass("disabled");
								layer.msg(data.result.message);
								return;
							}else{
								layer.msg("保存成功", {time : 500});
								$("#pre_pro_view_table").bootstrapTable('refresh');
								removePop1();
							}
						});
					}
					return false;
				});
			},
			
			FilesAdded: function(up, files) {
				if(viewuploader.files.length >= 2){
					viewuploader.splice(0, viewuploader.files.length-1)
				}
				plupload.each(files, function(file) {
					$("#fileName").val(file.name);
				});
			},
			
			UploadProgress: function(up, file) { 
			},
			
			FileUploaded: function(up, files, rtn) {  //上传回调
				$("#powindow").hideLoading();
				var response = $.parseJSON(rtn.response);
				var rs = response.result.status;
				if(rs == "ERROR"){ 
					$("#saveInterView").removeClass("disabled");
					$("#fileName").val("");
					viewuploader.splice(0, meetuploader.files.length)
					layer.msg(response.result.message);
					return false;
				}else{
					layer.msg("保存成功", {time : 500});
					$("#pre_pro_view_table").bootstrapTable('refresh');
					removePop1();
				}
			},
			
			BeforeUpload:function(up){
				$("#powindow").showLoading({
						    'addClass': 'loading-indicator'						
						 });
			},
			
			Error: function(up, err) {
				$("#powindow").hideLoading();
				$("#saveInterView").removeClass("disabled");
				$("#fileName").val("");
				layer.msg(err.message);
			}
		}
	});

	viewuploader.init();
}





//todo 访谈记录   -- table 回显

function viewTableRefresh(pid){
	$("input[name='pid']").val(pid);
	
	//$('#pre_pro_view_table').bootstrapTable('destroy');
	$('#pre_pro_view_table').bootstrapTable({
		queryParamsType: 'size|page', // undefined
		showRefresh : false ,
		method : 'post',
		pagination: false,
		clickToSelect: true,
        search: false,
	});
}

/**
* 访谈概况 , 访谈对象-长度控制
*/
function pro_viewInfo_format(value,row,index){
	var targerHtml = "";
	var fileinfo = "" ;
	var rc = "";
	//访谈对象
	var targetStr = row.viewTarget;
	if(targetStr.length>8){
		targerHtml = "</br>访谈对象：<label class='meeting_result color_pass' title="+targetStr+">" + cutStr(8,targetStr) + "</label>";
	}else{
		targerHtml = "</br>访谈对象：<label class='meeting_result color_pass'>" + targetStr + "</label>";
	}
	
	//访谈录音
	if( row.fileName!=null && row.fileName!=undefined && row.fileName!="undefined" && fileKey !=null ){
		fileinfo = "<a href=\"javascript:filedown("+row.fileId+","+row.fkey+");\" class=\"blue\" >"+row.fname+"</a>"
	}
	
	rc = "<div style=\"text-align:left;padding:10px 0 10px 25px;\">"+
				"访谈时间："+row.viewDateStr+
				targerHtml+
				"</br>访谈录音："+fileinfo+
			"</div>" ;
	
	return rc;
}
/**
* 格式化富文本，
*/	
function pro_viewNote_format(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str.length && str.length>120){
		var rc = "<div id=\"log\" style=\"text-align:left;\" class=\"text-overflow1\">"+
					cutStr(120,str)+
				'</div>';
		return rc;
	}else {
		return str;
	}
	/*if(str!="" && typeof(str)!="undefined"){
		len = str.length;
	}
	if(len>120){
		var rc = "<div id=\"log\" style=\"text-align:left;\" class=\"text-overflow1\">"+
					cutStr(120,str)+
				'</div>';
		return rc;
	}else {
		return str;
	}*/
}

/**
* 查看  编辑  删除
*/
function pro_viewOp_format(value,row,index){  
	var view_detail = "<a href=\"javascript:;\" class=\"meet_see blue\" onclick=\"showviewdetail("+row.id+",'v')\" >查看</a> &nbsp ";
	var view_edit = "<a href=\"javascript:;\" class=\"meet_edit blue\" onclick=\"showviewdetail("+row.id+",'e')\" >编辑</a>";
	return view_detail+view_edit;
}




//todo 访谈记录   操作

var interviewSelectRow = null;
var viewSelectRowId = null;


function showLogdetail(selectRowId,type){
	viewSelectRowId = selectRowId;
	interviewSelectRow = $('#pre_pro_view_table').bootstrapTable('getRowByUniqueId', selectRowId);
	var _url = Constants.sopEndpointURL+"/galaxy/project/progress/interViewLog";
	$.getHtml({
		url:_url,//模版请求地址
		data:"",//传递参数
		okback:function(){
			var um=UM.getEditor('viewNotes');
			um.setContent(interviewSelectRow.viewNotes);
			if(type=='v'){
				$("#interviewsave").hide();
				um.setDisabled();
			}
			$("#vid").val(selectRowId);
		}//模版反回成功执行	
	});
	return false;
}
function interviewsave(){  
	var um = UM.getEditor('viewNotes');
	var log = um.getContent();
	var pid=$("#vid").val();
	if(pid != ''){
		sendPostRequestByJsonObj(platformUrl.updateInterview, {"id" : pid, "viewNotes" : log}, function(data){
			if (data.result.status=="OK") {
				$("#hint_all").css("display","none");
				layer.msg("保存成功");
				$(".meetingtc").find("[data-close='close']").click();
				
				
				interviewSelectRow.viewNotes = log;
				$('#pre_pro_view_table').bootstrapTable('updateByUniqueId', {id: pid, row: interviewSelectRow});
				
				
				//$("#data-table").bootstrapTable('refresh');
			} else {
				layer.msg(data.result.message);
				$("#hint_all").css("display","block");
			}
			
		});
	}
}





//todo 基础方法


function cutStr(theNum,theOldStr){
	var leaveStr = "";
	var leng = getLength(theOldStr);
	if(theNum >= leng){
		return theOldStr;
	}else{
		var cont = 0;
		for (var i = 0; i < theOldStr.length; i++) {
			if (theOldStr.charCodeAt(i) >= 0x4e00 && theOldStr.charCodeAt(i) <= 0x9fa5){ 
				cont += 2;
			}else {
				cont++;
			}
			if(cont >= theNum){
				break;
			}
			leaveStr += theOldStr.charAt(i);
		}
		return leaveStr + "...";
	}
	return theOldStr;
}





