

//查询个人项目
function queryMeetPerPro(){
	var condition = {};
	
	//模糊查询proName
	var proName = $.trim($("#proName").val());
	if(proName != null && proName != ""){
		condition.nameLike = proName;
	}
	
	/*name 赋值 和 主页面 重了
	 var meetingType=$('input:radio[name="meetingTypeTc"]:checked').val();
	if(meetingType!=null && meetingType!=""){
		condition.meetingType = meetingType;
	}*/
	
	sendGetRequest(platformUrl.getUserPro,condition,setMeetProSelect);
}


//设置项目下拉框
function setMeetProSelect(data){
	var result = data.result.status;
	
	if(result == "ERROR"){ //OK, ERROR
		layer.msg(data.result.message);
		$(".pop").remove();
		$("#popbg").remove();	
		return;
	}
	
	var entityList = data.entityList;
	if(entityList.length == 0 ){
		layer.msg("无相关项目可添加记录");
		$(".pop").remove();
		$("#popbg").remove();	
		return;
	}else{
		for(var i=0;i<data.entityList.length;i++){
	    	$("#projectId").append("<option value='"+data.entityList[i].id+"'>"+data.entityList[i].projectName+"</option>");
	    } 
	}
}



/*<dt>会议类型：</dt>
<dd class="clearfix">
    <label><input type="radio" name="meetingTypeTc" value="meetingType:1"/>内评会</label>
    <label><input type="radio" name="meetingType" value="meetingType:2"/>CEO评审</label>
    <label><input type="radio" name="meetingType" value="meetingType:3"/>立项会</label>
    <label><input type="radio" name="meetingType" value="meetingType:4"/>投决会</label>
</dd>*/

//get meettype radios, parentCode 
// Map<parentCode,Map<code,name>>
function getMeetTypes(){
	sendPostRequestByJsonObj(platformUrl.saveMeet,condition,setMeetTypes);
}
function setMeetTypes(data){
	var result = data.result.status;
	if(result == "ERROR"){ //OK, ERROR
		//alert(data.result.message);
		layer.msg(data.result.message);
		return;
	}
	var mapcodename = data.result.message;
}




//plupload上传对象初始化,   绑定保存
function initMeetUpload() {
	// 定义 上传插件 方法 、  plupload 上传对象初始化
	var meetuploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : $("#file-select-btn")[0], // you can pass in id...
		url : platformUrl.saveMeetFile,
		multipart:true,
		multi_selection:false,
		filters : {
			max_file_size : '25mb',
			mime_types: paramsFilter(1)
		},

		init: {
			//上传按钮点击事件 - 开始上传
			PostInit: function(up) {
				$("#savemeet").click(function(){
					$("#savemeet").addClass("disabled");
					var res = getMeetCondition(null,"projectId", "meetingDateStr", null,"meetingTypeTc", "meetingResult","meetingNotes");
					if(res == false || res == "false"){
						up.stop();
						$("#savemeet").removeClass("disabled");
						return;
					}
					
					var file = $("#fileName").val(); //up.files.length
					if(file.length > 0){
						up.settings.multipart_params = res;
						meetuploader.start();
					}else{
						sendPostRequestByJsonObj(platformUrl.saveMeetFile,res,function(data){
							var result = data.result.status;
							if(result == "ERROR"){ //OK, ERROR
								$("#savemeet").removeClass("disabled");
								layer.msg(data.result.message);
								return;
							}else{
								layer.msg("保存成功", {time : 500});
								var _this = $("#data-table");
								if(_this == null || _this.length == 0 || _this == undefined){
									removePop1();
								}else{
									$("#data-table").bootstrapTable('refresh');
									removePop1();
								}
							}
						});
					}
					return false;
				});
			},
			
			FilesAdded: function(up, files) {
				if(meetuploader.files.length >= 2){
					meetuploader.splice(0, meetuploader.files.length-1)  //解决多次文件选择后，文件都存入upload
				}
				plupload.each(files, function(file) {
					$("#fileName").val(file.name);
				});
			},
			
			UploadProgress: function(up, file) {
			},
			
			
			FileUploaded: function(up, files, rtn) {  //文件上传后回掉
				var response = $.parseJSON(rtn.response);
				var rs = response.result.status;
				if(rs == "ERROR"){ //OK, ERROR
					$("#savemeet").removeClass("disabled");
					$("#fileName").val("");
					meetuploader.splice(0, meetuploader.files.length)
					layer.msg(response.result.message);
					return;
				}else{
					layer.msg("保存成功", {time : 500});
					var _this = $("#data-table");
					if(_this == null || _this.length == 0 || _this == undefined){
						removePop1();
					}else{
						$("#data-table").bootstrapTable('refresh');
						removePop1();
					}
				}
			},
			BeforeUpload:function(up){
			},
			Error: function(up, err) {
				$("#savemeet").removeClass("disabled");
				$("#fileName").val("");
				layer.msg(err.message);
			}
		}
	});

	meetuploader.init();
}






//保存记录
function saveMeet(){
	var	condition = getMeetCondition(null,"projectId", "meetingDateStr", 
			null,"meetingTypeTc", "meetingResult","meetingNotes");
	if(condition == false || condition == "false"){
		//$("#savemeet").removeClass("disabled");
		return;
	}
	sendPostRequestByJsonObj(platformUrl.saveMeet,condition,saveMeetCallBack);
}

//保存成功回调
function saveMeetCallBack(data){
	var result = data.result.status;
	if(result == "ERROR"){ //OK, ERROR
		$("#savemeet").removeClass("disabled");
		layer.msg(data.result.message);
		return;
	}
	layer.msg("保存成功", {time : 500});
	var _this = $("#data-table");
	if(_this == null || _this.length == 0 || _this == undefined){
		removePop1();
	}else{
		$("#data-table").bootstrapTable('refresh');
		removePop1();
	}
	//location.reload(true);
}


