//获取参数
  
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
//去除小数点末尾无用0  
function _parsefloat(date){
	if(date!=undefined){
		if(parseInt(date)!=NaN||parseInt(date)!=undefined){
			var dd =  String(date).split("."); 
			if(dd.length>=2){
				var aa =Number("0."+dd[1]);
				aa=parseFloat(aa);
				aa=String(aa).split(".")[1];
			}
			dd=dd[0];
			var res=dd;
			if(aa!=undefined){
				aa="."+aa
				res = dd+aa
			}
			return res;
		}else{
			return date;
		}
	}
}
//亿元——万亿转换
function change_number(date){
	if(date!=undefined){
		var dd =  String(date).split(".")[0];
		var leng = dd.length;
		var text="万";
		if(leng>4&&leng<8){
			var dd1=dd.substring(0,leng-4);
			var dd2=dd.substring(leng-4,leng).substring(0,2);
			dd=dd1+"."+dd2;
			text="亿";
		}else if(leng==8){
			var dd2=dd.substring(0,2);
			dd="0."+dd2;
			text="万亿";
		}else if(leng>8){
			var dd1=dd.substring(0,leng-8);
			var dd2=dd.substring(leng-8,leng).substring(0,2);
			dd=dd1+"."+dd2;
			text="万亿";
		}else{
			dd=date;
		}
		var rarry=[dd,text]
		return rarry;
	}
}
//七大报告文本框全为空格处理
function textarea_show(contentDescribe){
	var len=0;
	if(contentDescribe){
		contentDescribe=contentDescribe.replace(/<br\/>/g,'');
		contentDescribe=contentDescribe.replace(/<br>/g,'');
		contentDescribe=contentDescribe.replace(/&nbsp;/g,"");
		len=contentDescribe.length;
	}else{
		len=0;
	}
	return len;
}
/**
 * 加密Ajax请求 jsonStr:json字符串 jsonObj:json对象
 */
function sendPostRequestBySignJsonStr(reqUrl, jsonStr, callbackFun, TOKEN) {
	sendPostRequestBySignJsonObj(reqUrl, JSON.parse(jsonStr), callbackFun, TOKEN);
}
function sendPostRequestBySignJsonObj(reqUrl, jsonObj, callbackFun, TOKEN) {
	var b = new Base64();
	$.ajax({
		url : reqUrl,
		type : "POST",
		data : b.encode(JSON.stringify(jsonObj)),
		dataType : "text",
		cache : false,
		contentType : "application/json; charset=UTF-8",
		beforeSend : function(xhr) {
			/**清楚浏览器缓存**/
			xhr.setRequestHeader("If-Modified-Since","0"); 
			xhr.setRequestHeader("Cache-Control","no-cache");

			if (sessionId) {
				xhr.setRequestHeader("sessionId", sessionId);
			}
			if(userId){
				xhr.setRequestHeader("guserId", userId);
			}
			if(TOKEN){
				xhr.setRequestHeader("TOKEN", TOKEN);
			}
		},
		async : false,
		error : function(request) {},
		success : function(data) {
			if(data){
				data = JSON.parse(b.decode(data));
			}
			if (callbackFun) {
				callbackFun(data);
			}
		}
	});
}

/**
 * 非加密Ajax请求
 * jsonStr:json字符串
 * jsonObj:json对象
 */
function sendPostRequestByJsonStr(reqUrl, jsonStr, callbackFun) {
	sendPostRequestByJsonObj(reqUrl, JSON.parse(jsonStr), callbackFun);
}
function sendPostRequestByJsonObj(reqUrl, jsonObj, callbackFun) {
	$.ajax({
		url : reqUrl,
		type : "POST",
		data : JSON.stringify(jsonObj),
		dataType : "json",
		cache : false,
		contentType : "application/json; charset=UTF-8",
		beforeSend : function(xhr) {
			/**清楚浏览器缓存**/
			xhr.setRequestHeader("If-Modified-Since","0"); 
			xhr.setRequestHeader("Cache-Control","no-cache");
			if (sessionId) {
				xhr.setRequestHeader("sessionId", sessionId);
			}
			if(userId){
				xhr.setRequestHeader("guserId", userId);
			}
		},
		async : false,
		error : function(request) {},
		success : function(data) {
			if(data){
				var type =typeof(data);
				if(type=='string'){
					if(data.indexOf("<!DOCTYPE html>")){
						location.href = platformUrl.toLoginPage;
					}
				}
			}
			if (callbackFun) {
				callbackFun(data);
			}
		}
	});
}
function sendPostRequestByJsonObjNoCache(reqUrl, jsonObj,async_status,callbackFun) {
	$.ajax({
		url : reqUrl,
		type : "POST",
		data : JSON.stringify(jsonObj),
		dataType : "json",
		cache : false,
		contentType : "application/json; charset=UTF-8",
		beforeSend : function(xhr) {
			/**清楚浏览器缓存**/
			xhr.setRequestHeader("If-Modified-Since","0"); 
			xhr.setRequestHeader("Cache-Control","no-cache");
           
			if (sessionId) {
				xhr.setRequestHeader("sessionId", sessionId);
			}
			if(userId){
				xhr.setRequestHeader("guserId", userId);
			}
		},
		async : async_status,
		error : function(request) {},
		success : function(data) {
			if(data){
				var type =typeof(data);
				if(type=='string'){
					if(data.indexOf("<!DOCTYPE html>")){
						location.href = platformUrl.toLoginPage;
					}
				}
			}
			if (callbackFun) {
				callbackFun(data);
			}
		}
	});
}

/**
 * 加密Ajax请求
 * jsonObj:json对象
 */
function sendGetRequestByJsonObj(reqUrl, jsonObj, callbackFun) {
	$.ajax({
		url : reqUrl,
		type : "GET",
		data : b.encode(JSON.stringify(jsonObj)),
		dataType : "text",
		cache : false,
		contentType : "application/json; charset=UTF-8",
		beforeSend : function(xhr) {
			/**清楚浏览器缓存**/
			xhr.setRequestHeader("If-Modified-Since","0"); 
			xhr.setRequestHeader("Cache-Control","no-cache");
			if (sessionId) {
				xhr.setRequestHeader("sessionId", sessionId);
			}
			if(userId){
				xhr.setRequestHeader("guserId", userId);
			}
		},
		async : false,
		error : function(request) {},
		success : function(data) {
			data = JSON.parse(b.decode(data));
			if (callbackFun) {
				callbackFun(data);
			}
		}
	});
}

/**
 * 非加密Ajax请求
 * jsonObj:json对象
 */
function sendGetRequest(reqUrl, jsonObj, callbackFun) {
	$.ajax({
		url : reqUrl,
		type : "GET",
		data : jsonObj,
		dataType : "json",
		cache : false,
		contentType : "application/json; charset=UTF-8",
		beforeSend : function(xhr) {
			/**清楚浏览器缓存**/
			xhr.setRequestHeader("If-Modified-Since","0"); 
			xhr.setRequestHeader("Cache-Control","no-cache");
			if (sessionId) {
				xhr.setRequestHeader("sessionId", sessionId);
			}
			if(userId){
				xhr.setRequestHeader("guserId", userId);
			}
		},
		async : false,
		error : function(request) {},
		success : function(data) {
			if(data){
				var type =typeof(data);
				if(type=='string'){
					if(data.indexOf("<!DOCTYPE html>")){
						location.href = platformUrl.toLoginPage;
					}
				}
			}
			if (callbackFun) {
				callbackFun(data);
			}
		}
	});
}
function sendGetRequestTasync(reqUrl, codeArr, callbackFun) {
	
	$.each(codeArr,function(){
		$.ajax({
			url : reqUrl+this,
			type : "GET",
			data : null,
			dataType : "json",
			cache : false,
			contentType : "application/json; charset=UTF-8",
			beforeSend : function(xhr) {
				/**清楚浏览器缓存**/
				xhr.setRequestHeader("If-Modified-Since","0"); 
				xhr.setRequestHeader("Cache-Control","no-cache");
				if (sessionId) {
					xhr.setRequestHeader("sessionId", sessionId);
				}
				if(userId){
					xhr.setRequestHeader("guserId", userId);
				}
			},
			async : true,
			error : function(request) {},
			success : function(data) {
				if(data){
					var type =typeof(data);
					if(type=='string'){
						if(data.indexOf("<!DOCTYPE html>")){
							location.href = platformUrl.toLoginPage;
						}
					}
				}
				if (callbackFun) {
					callbackFun(data);
				}
			}
		});
	});
}


/**
 * 发送post请求,不带json数据
 * 
 * @param reqUrl
 *            请求地址
 * @param sessionId
 *            请求头中需携带的sessionid
 * @param callbackFun
 *            处理成功后的回调方法
 */
function sendPostRequest(reqUrl, callbackFun) {
	$.ajax({
		url : reqUrl,
		type : "POST",
		cache : false,
		contentType : "application/json; charset=UTF-8",
		beforeSend : function(xhr) {
		/**清楚浏览器缓存**/
	    xhr.setRequestHeader("If-Modified-Since","0"); 
	    xhr.setRequestHeader("Cache-Control","no-cache");
			if (sessionId) {
				xhr.setRequestHeader("sessionId", sessionId);
			}
			if(userId){
				xhr.setRequestHeader("guserId", userId);
			}
		},
		async : false,
		error : function(request) {
		},
		success : function(data) {
			if(data){
				var type =typeof(data);
				if(type=='string'){
					if(data.indexOf("<!DOCTYPE html>")){
						location.href = platformUrl.toLoginPage;
					}
				}
			}
			/*if(data.hasOwnProperty("result")&&data.result.errorCode=="3"){
				location.href = platformUrl.toLoginPage;
			}*/
			if (callbackFun) {
				callbackFun(data);
			}
		}
	});
}



/**
 * url:统一跳转url  
 * 
 */
function forwardWithHeader(url){
	if(url.indexOf("?")==-1){
		window.location.href = url+"?sid="+sessionId+"&guid="+userId;
	}else{
		window.location.href = url+"&sid="+sessionId+"&guid="+userId;
	}
}


function forwardIndexWithHeader(url, sessionId, userId) {
	if (url.indexOf("?") == -1) {
		window.location.href = url + "?sid=" + sessionId + "&guid=" + userId;
	} else {
		window.location.href = url + "&sid=" + sessionId + "&guid=" + userId;
	}
}


/**
 * 将序列化参数字符串转为json格式
 */
$.fn.serializeObject = function(){
    var obj = {};
    var count = 0;
    $.each( this.serializeArray(), function(i,o){
        var n = o.name, v = o.value;
        count++;
        obj[n] = obj[n] === undefined ? v
        : $.isArray( obj[n] ) ? obj[n].concat( v )
        : [ obj[n], v ];
    });
    obj.nameCounts = count + "";//表单name个数
    return JSON.stringify(obj);
};

$.fn.serializeObjectIsNotNull = function() {  
	 var obj = {};
	    var count = 0;
	    $.each( this.serializeArray(), function(i,o){
	    	var n = o.name, v = o.value;
	    	if(v){
	    		count++;
	 	        obj[n] = obj[n] === undefined ? v
	 	        : $.isArray( obj[n] ) ? obj[n].concat( v )
	 	        : [ obj[n], v ];
	    	}
	    });
	    obj.nameCounts = count + "";//表单name个数
	    return JSON.stringify(obj);
}

/**
 * 使用localstage存储数据 <br/>
 * 注意：IE、Firefox测试的时候需要把文件上传到服务器上（或者localhost），直接点开本地的HTML文件，是不行的。
 * 
 * DataStrore.
 */
DataStrore = {
	storage : window.localStorage,
	checkBrowerSupport : function() {
		if (window.localStorage) {
			return true;
		} else {
			return false;
		}
	},
	addElement : function(key, value) {
		dataStrore.stroage.setItem(key, value);
	},
	getElement : function(key) {
		dataStrore.stroage.getItem(key);
	},
	removeElement : function(key) {
		dataStrore.stroage.removeItem(key);
	},
	removeAll : function() {
		dataStrore.stroage.clear();
	},
	showKeysAndValues : function() {
		for (var i = 0; i < dataStrore.storage.length; i++) {
			document.write(storage.key(i) + " : "
					+ storage.getItem(storage.key(i)) + "<br>");
		}
	}
}
Number.prototype.toDate = function(){
	return new Date(this);
}

Date.prototype.format = function(fmt){
	var o = {
			"M+" : this.getMonth()+1,
			"d+" : this.getDate(),
			"h+" : this.getHours(),
			"m+" : this.getMinutes(),
			"s+" : this.getSeconds(),
			"q+" : Math.floor((this.getMonth()+3)/3),
			"S"  : this.getMilliseconds()
		  };   
		  if(/(y+)/.test(fmt))
		  {
			  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
		  }
		  for(var k in o)
		  {
			  if(new RegExp("("+ k +")").test(fmt))
			  {
				  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
			  }
		  }
		  return fmt;   
}


/**
 * 文件上传
 * 参数：
 * fileurl-上传文件的后台接口地址
 * selectBtnId-选择文件的button的id
 * fileInputId-type="file"的input的id
 * submitBtnId-点击上传的按钮的id
 * paramsFunction-获取其他表单值得函数
 * fileType-存儲類型select的id
 * 注意：
 * 1.再引入plupload.full.min.js后，一定要在页面加载时就初始化调用该函数
 */
//文档
var fileType_1 = {title : "fileType:1", extensions : "doc,docx,ppt,pptx,pps,xls,xlsx,pdf,txt,pages,key,numbers,DOC,DOCX,PPT,PPTX,PPS,XLS,XLSX,PDF,TXT,PAGES,KEY,NUMBER"};
//音频
var fileType_2 = {title : "fileType:2", extensions : "mp3,mp4,avi,wav,wma,aac,m4a,m4r,MP3,MP4,AVI,WAV,WMA,AAC,M4A,M4R"};
//视频
var fileType_3 = {title : "fileType:3", extensions : "avi,AVI"};
//图片
var fileType_4 = {title : "fileType:4", extensions : "bmp,jpg,gif,png,jpeg,BMP,JPG,GIF,PNG,JPEG"};
//zip
var fileType_5 = {title : "Zip files", extensions : "zip,rar,ZIP,RAR"};
//图片和pdf
var fileType_6 = {title : "fileType:6", extensions : "bmp,jpg,gif,png,jpeg,BMP,JPG,GIF,PNG,JPEG,pdf,PDF"};

function paramsFilter(indexNum){
	var filtersparams= new Array();
	if(indexNum!=null){
		//1\2\3\4\7  访谈、会议
		if(indexNum == 1 || indexNum == '1' || indexNum == 2 || indexNum == '2' || indexNum == 3 || indexNum == '3' 
			|| indexNum == 4 || indexNum == '4' || indexNum == 7 || indexNum == '7'){
			filtersparams.push(fileType_2);
		}
		if(indexNum == 6 || indexNum == '6'){
			filtersparams.push(fileType_6);
		}
	}else{
		filtersparams= new Array(fileType_1,fileType_2,fileType_3,fileType_4);
	}
	return filtersparams;
}

/**
 * 
 * @param file-文件
 * @param fileType-存储类型id
 */
function attrFileType(fileType,file){
	
	var type=getFileExt(file.name);
	var filtersparams=paramsFilter(null);
	for(var i=0;i<filtersparams.length;i++){
		var value=filtersparams[i];
		var valueExt=value.extensions;
		if(valueExt.indexOf(type) >= 0 ){
			var myvalue=value.title;
			//$("#"+fileType+" option[value='"+myvalue+"']").attr("selected",true);
			if(fileType instanceof jQuery){
				fileType.val(myvalue);
			}else{
				$("#"+fileType).val(myvalue);
			}
			
			break;
			
		}
	}
}
/**
 * 获取后缀名
 * @param fileName
 * @returns {String}
 */
function getFileExt(fileName)
{
	var type="";
	var dotIndex = fileName.lastIndexOf(".");
	if(dotIndex >- 1)
	{
		type = fileName.substr(dotIndex+1);
		type = type.toLowerCase()
	}
	return type;
}

/**
 * 根据后缀名确定文档类型
 * @param ext
 * @returns {String}
 */
function getFileTypeByExt(ext)
{
	var type = "";
	var filtersparams = paramsFilter(null);
	for(var i=0;i<filtersparams.length;i++)
	{
		var value = filtersparams[i];
		var valueExt=value.extensions;
		if(valueExt.indexOf(ext) >= 0 ){
			type=value.title;
			break;
		}
	}
	return type;
}
function getFileTypeByName(fileName)
{
	var type = "";
	var ext = getFileExt(fileName);
	if(ext != null && ext != "")
	{
		type = getFileTypeByExt(ext);
	}
	return type;
}

function toinitUpload(fileurl,pid,selectBtnId,fileInputId,submitBtnId,fileType,paramsFunction,indexNum,success,_this) {
	

	
	//上传对象初始化
	var uploader = new plupload.Uploader({
		runtimes : 'html5,html4,flash,silverlight',
		browse_button : $("#" + selectBtnId)[0], // you can pass in id...
		url : fileurl,
		multipart:true,
		multi_selection:false,
		filters : {
			max_file_size : '25mb',
			mime_types: paramsFilter(indexNum)
		},
		init: {
			//上传按钮点击事件 - 开始上传
			PostInit: function(up) {
				$("#" + submitBtnId).click(function(){
					/**添加验证**/
					
						var file = $("#" + fileInputId).val();
						var param = paramsFunction();
					if(beforeSubmit()){
						if(up.files.length == 0){
							sendPostRequestByJsonObj(platformUrl.stageChange,param,function(data){
								var result = data.result.status;
								if(result == "OK"){
									if($.isFunction(success))
									{
										success.call();
									}
									layer.msg(data.result.message);
									$("#powindow,#popbg").remove();
									$("#popbg01").remove();
									info(pid);
								}else{
									layer.msg(data.result.message);
								}
								
								//contentType:"multipart/form-data"
							});
						}else{
							up.settings.multipart_params = param;
							uploader.start();
						}
						return false;
					}
				});
			},
			//添加上传文件后，把文件名 赋值 给 input
			FilesAdded: function(up, files) {
				//解决多次文件选择后，文件都存入upload
				if(uploader.files.length >= 1){
					uploader.splice(0, uploader.files.length-1)
				}
				plupload.each(files, function(file) {
					/*document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';*/
					$("#" + fileInputId).val(file.name);
					/***存储类型被选中***/
					if(fileType){
						attrFileType(fileType,file);//定位选中存储类型
					}
					
					
				});
			},
			//上传进度
			UploadProgress: function(up, file) {},
			//文件上传后， 返回值  赋值,  再ajax 保存入库
			FileUploaded: function(up, files, rtn) {
				$(_this.id).hideLoading();
				var response = $.parseJSON(rtn.response);
				var rs = response.result.status;
				if(rs == "ERROR"){ //OK, ERROR
					layer.msg(response.result.message);
					$("div[data-id='popid1']").remove();
					return false;
				}else{
					$.popupTwoClose();
				}
				if($.isFunction(success))
				{
					success.call();
				}
				layer.msg(response.result.message);
				$("#powindow,#popbg").remove();
				$.popupTwoClose();
				info(pid);
				
				//location.reload(true);
				
				/*$("#popTxt input[name='fileKey']").val(result.fileKey);
				$("#popTxt input[name='fileLength']").val(result.fileLength);
				$form = $("#popTxt #upload-form");
				//表单数据 json 格式化
				var data = JSON.parse($form .serializeObject());
				var url = ""+platformUrl.tempSave
				sendPostRequestByJsonObj( url, data, function(data){ alert("上传成功."); loadTempList(); } );*/
			},
			BeforeUpload:function(up){
				//表单函数提交
				$(_this.id).showLoading(
						 {
						    'addClass': 'loading-indicator'						
						 });
			},
			Error: function(up, err) {
				layer.msg("上传格式等错误,请重新选择文件!");
				$(_this.id).hideLoading();
			}
		}
	});
	uploader.init();
}

//紧急任务
function totalUrgent() {
	sendGetRequest(platformUrl.totalUrgent, null, totalUrgentCallback);
}
//待办任务
function totalMission() {
	sendGetRequest(platformUrl.totalMission, null, totalMissionCallback);
}
function totalUrgentCallback(data) {
	var total = 0 ;
	if (data.total != null) {
		total =data.total;
	}	
	$('.bubble').html(total);
}

function totalMissionCallback(data) {
	var total = 0 ;
	if (data.total != null) {
		total =data.total;
	}
	if(total>99){
		$('.totalUrgent').html('<span style="line-height:12px;">99<sup>+</sup></span>')
	}else{
		$('.totalUrgent').html(total)
	}
	
}

function fillHeaderdata() {
	   // totalUrgent();
	    totalMission();
}


//附件点击下载
function filedown(fileid , filekey, type){
	try {
		var url = platformUrl.downLoadFile+"/"+fileid;
		var typeparam = "";
		if(typeof(type) != 'undefined')
		{
			typeparam = "&type="+type;
		}
		layer.msg('正在下载，请稍后...',{time:2000});
		window.location.href=url+"?sid="+sessionId+"&guid="+userId+typeparam;
	} catch (e) {
		layer.msg("下载失败");
	}
}




//移除第一层弹框
function removePop1(){
	$(".pop").remove();
	$("#popbg ").remove();
	$(document.body).css({
	   "overflow-x":"auto",
	   "overflow-y":"auto"
	 });
}


//移除第二层弹框
function removePop2(){
	$(".popzx").remove();
}


//检查录入数据 字节 长度
function getLength(val){
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		if (val.charCodeAt(i) >= 0x4e00 && val.charCodeAt(i) <= 0x9fa5){ 
			len += 2;
		}else {
			len++;
		}
	}
	return len;
}



/**
 * 获取 访谈表格数据，返回 jsonObj 对象
 * 
 * @param hasProid
 *            是否传入项目id值，'y':是
 * @param projectId
 *            传入项目id值， 或选择器id
 * @param viewDateId
 *            时间id
 * @param viewTargetId
 *            目标id
 * @param viewNotesId
 *            记录id
 */
function getInterViewCondition(hasProid,projectId,
		viewDateId,
		viewTargetId,
		viewNotesId){
	var	condition = {};
	
	if(!beforeSubmit()){
		return false;
	}
	if(hasProid == "y" ){
		var projectId = $.trim(projectId);
	}else{
		var projectId = $("#"+projectId).val();
	}
	var viewDateStr = $("#"+viewDateId).val();
	var viewTarget = $.trim($("#"+viewTargetId).val());
	var um = UM.getEditor(viewNotesId);
	var viewNotes = $.trim(um.getContent());
	//var notes = $("#"+viewNotesId).text();
	
	if(projectId == null || projectId == ""){
		layer.msg("项目不能为空");
		return false;
	}
	/*if(viewDateStr == null ||  viewDateStr == ""){
		layer.msg("访谈日期不能为空");
		return false;
	}
	else{
		var clock = getNowDay("-");
		if((new Date(viewDateStr)) > (new Date(clock))){
			layer.msg("访谈日期不能超过今天");
			return false;
         }
	 }*/
	
	if(viewTarget == null ||  viewTarget == ""){
		layer.msg("对象不能为空");
		return false;
	}else{
		if(getLength(viewTarget) > 100){
			layer.msg("对象长度最大100字节");
			return false;
		}
	}
	
	if(viewNotes != null && viewNotes.length > 0){
		if(getLength(viewNotes) > 9000){
			layer.msg("访谈记录长度最大9000字符");
			return false;
		}
	}
	
	condition.projectId = projectId;
	condition.viewDateStr = viewDateStr;
	condition.viewTarget = viewTarget;
	condition.viewNotes = viewNotes;
	
	return condition;
}




/**
 * 获取 会议表格数据，返回 jsonObj 对象
 * 
 * @param hasProid
 *            是否传入项目id值，'y':是
 * @param projectId
 *            传入项目id值， 或选择器id
 * @param meetDateId
 *            时间id
 * @param hasMeetType
 *            是否传入会议类型值，'y':是
 * @param meetTypeName
 *            传入会议类型值， 或radio name    
 * @param meetResultName
 *            结果radio name
 * @param meetNotesId
 *            记录id
 */
//验证获取参数
function getMeetCondition(hasProid,projectId,
		meetDateId,
		hasMeetType,meetTypeName,
		meetResultName,
		meetNotesId
		){
	
	meetTypeValChangeFun();
	
	var	condition = {};
	if(!beforeSubmit("add_meet_tc")){
		return false;
	}
	/*if(!beforeSubmitScroll("add_meet_tc")){
		return false;
	}*/
	
	var projectIdVal = null;
	if(hasProid == "y" ){
		projectIdVal = $.trim(projectId);
	}else{
		projectIdVal = $("#"+projectId).val();
	}
	
	var meetingDateStr = $.trim($("#"+meetDateId).val());
	
	var meetingTypeVal = null;
	if(hasMeetType == "y" ){
		meetingTypeVal = $.trim(meetTypeName);
	}else{
		meetingTypeVal = $.trim($('input:radio[name="'+meetTypeName+'"]:checked').val());
	}
	
	var meetingResult = $.trim($('input:radio[name="'+meetResultName+'"]:checked').val());
	
	var um = UM.getEditor(meetNotesId);
	var meetingNotes = $.trim(um.getContent());
	
	if(projectIdVal == null || projectIdVal == ""){
		layer.msg("项目不能为空");
		return false;
	}
	
	/*if(meetingDateStr == null ||  meetingDateStr == ""){
		layer.msg("会议日期不能为空");
		return false;
	}else{
		var clock = getNowDay("-");
		if((new Date(meetingDateStr)) > (new Date(clock))){
			layer.msg("会议日期不能超过今天");
			return false;
         }
	 }*/
	
	if(meetingTypeVal == null ||  meetingTypeVal == ""){
		layer.msg("类型不能为空");
		return false;
	}
	
	if(meetingResult == null ||  meetingResult == ""){
		layer.msg("结果不能为空");
		return false;
	}
	
	if(meetingNotes != null && meetingNotes.length > 0){
		if(getLength(meetingNotes) > 9000){
			layer.msg("会议记录长度最大9000字节");
			return false;
		}
	}
	
	if(meetingTypeVal =='meetingType:4' && meetingResult =='meetingResult:1'){
		condition.finalValuations = $.trim($("#finalValuations").val());
		condition.finalContribution = $.trim($("#finalContribution").val());
		condition.finalShareRatio = $.trim($("#finalShareRatio").val());
		condition.serviceCharge = $.trim($("#serviceCharge").val());
	}
	
	condition.projectId = projectIdVal;
	condition.meetingDateStr = meetingDateStr;
	condition.meetingType = meetingTypeVal;
	condition.meetingResult = meetingResult;
	condition.meetingNotes = meetingNotes;
	return condition;
}



/**
 * sopinfo  访谈页面
 * 访谈概况 , 访谈对象-长度控制
 */
function intervierInfoFormat(value, row, index){
	var fileinfo = "" ;
	var rc = "";
	if( row.fname!=null && row.fname!=undefined && row.fname!="undefined" ){
		fileinfo = "<a href=\"javascript:filedown("+row.fileId+","+row.fkey+");\" class=\"blue\" >"+row.fname+"</a>"
	}
	
	var targetStr = row.viewTarget;
	var subStr = "";
	var targerHtml="";
	if(targetStr.length>8){
		subStr = targetStr.substring(0,8)+"...";
		targerHtml = "</br>访谈对象：<label title="+targetStr+">"+subStr+"</label>";
	}else{
		targerHtml = "</br>访谈对象："+targetStr;
	}
	rc = "<div style=\"text-align:left;padding:10px 0 10px 25px;\">"+
				"访谈时间："+row.viewDateStr+
				targerHtml+
				"</br>访谈录音："+fileinfo+
			"</div>" ;
	return rc;
}


//meet table format
function meetProInfoFormat(value, row, index){
	return row.proName+"</br>"+row.meetingTypeStr;
}

/**
 * sopinfo  会议页面
 * 会议概况
 */
function metcolumnFormat(value, row, index){
	var fileinfo = "";
	var rc = "";
	if(row.fname!=null && row.fname!=undefined && row.fname!="undefined" ){
		fileinfo = "<a href=\"javascript:filedown("+row.fileId+","+row.fkey+");\" class=\"blue\" >"+row.fname+"</a>"
		}
	var str="<label class=\"meeting_result\">"+row.meetingResultStr+"</label>"
	rc = "<div style=\"text-align:left;padding:10px 0 10px 25px;\">"+
				"会议日期："+row.meetingDateStr+
				"</br>会议结论："+str+
				"</br>会议录音："+fileinfo+
			"</div>" ;
	return rc;
}

/**
 * 格式化富文本，记录中附加详情,不附加 title
 */	
function viewNotesFormat(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str!="" && typeof(str)!="undefined"){
		//len = getLength(str);
		len = str.length;
	}
	if(len>120){
		var subValue =str.substring(0,120); 
		var rc = "<div id=\"log\" style=\"text-align:left;\" class=\"text-overflow1\">"+
					subValue+ "..."+
					"<a href=\"javascript:;\" class=\"blue option_item_mark\"  onclick=\"showLogdetail("+row.id+")\" >详情<a>"+    
				'</div>';
		return rc;
	}else {
		return str+"<a href=\"javascript:;\" class=\"blue option_item_mark\"  onclick=\"showLogdetail("+row.id+")\" >详情<a>";
	}
	
}
function tc_viewNotesFormat(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str!="" && typeof(str)!="undefined"){
		len = str.length;
	}
	if(len>90){
		var subValue =str.substring(0,90); 
		var rc = "<div id=\"log\" style=\"text-align:left;\" class=\"text-overflow1\">"+
					subValue+ "..."+
					"<a href=\"javascript:;\" class=\"blue option_item_mark\"  onclick=\"showLogdetail("+row.id+")\" >详情<a>"+    
				'</div>';
		return rc;
	}else {
		return str+"<a href=\"javascript:;\" class=\"blue option_item_mark\"  onclick=\"showLogdetail("+row.id+")\" >详情<a>";
	}
	
}

/**
 * 格式化富文本，记录中不附加详情,不附加 title
 */	
function viewNotesFormat_noinfo(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str!="" && typeof(str)!="undefined"){
		len = str.length;
	}
	if(len>120){
		var subValue =str.substring(0,120); 
		var rc = "<div id=\"log\" style=\"text-align:left;\" class=\"text-overflow1\">"+
					subValue+ "..."+
				'</div>';
		return rc;
	}else {
		return str;
	}
}
function tc_viewNotesFormat_noinfo(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str!="" && typeof(str)!="undefined"){
		len = str.length;
	}
	if(len>90){
		var subValue =str.substring(0,90); 
		var rc = "<div id=\"log\" style=\"text-align:left;\" class=\"text-overflow1\">"+
					subValue+ "..."+
				'</div>';
		return rc;
	}else {
		return str;
	}
}

/**
 * 格式化富文本 只附加 title
 */	
function formatLog(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str!="" && typeof(str)!="undefined"){
		len = str.length;
	}
	
	if(len>120){
		var subValue1 = str.substring(0,120);
		var rc = "<div id=\"log\" style=\"text-align:left;padding:10px 0;\" class=\"text-overflow1\" title='"+str+"'>" +
					subValue1+'...' +
				'</div>';
		return rc;
	}else{
		return str;
	}
}
function tc_formatLog(value,row,index){
	var len=0;
	var str= "";
	if(!(!value)){
		str=delHtmlTag($.trim(value))
	}
	if(str!="" && typeof(str)!="undefined"){
		len = str.length;
	}
	
	if(len>90){
		var subValue1 = str.substring(0,90);
		var rc = "<div id=\"log\" style=\"text-align:left;padding:10px 0;\" class=\"text-overflow1\" title='"+str+"'>" +
					subValue1+'...' +
				'</div>';
		return rc;
	}else{
		return str;
	}
}





//LONG time format
function longTimeFormat(value, row, index){
	return Number(value).toDate().format("yyyy/MM/dd")
}
function longTime_Format(value, row, index){
	if(value){
		return Number(value).toDate().format("yyyy-MM-dd")
	}else
		return "-";
	
}
function longTimeFormatChines(value, row, index){
	return Number(value).toDate().format("yyyy年MM月dd日 hh:mm:ss")
}
function longTimeFormat_Chines(value, row, index){
	return Number(value).toDate().format("yyyy-MM-dd hh:mm")
}
function getVal(val,defaultValIfNull)
{
	if(val == "" || val == null || val == 'undefined')
	{
		return defaultValIfNull;
	}
	return val;
}

function projectNameLineFormat(value, row, index){
	var content = value;
	var title = value.replace(/<[^>]*>|<\/[^>]*>/gm,"");
	//外部项目
	if('1.1.4' == row.type)
	{
		content = content.replace('"<pname>',"<a href='"+Constants.ctdnURL+"project_qy.html?projCode="+row.remarkId+"' target='_blank' class='blue project_name'>").replace('name"',"");
	}
	else if('1.2.5' == row.type || '1.2.6' == row.type)
	{
		//尽职调查、股权交割
		content = content.replace('"<pname>',"<a href='#' onclick='toTaskList()' class='blue project_name'>").replace('name"',"");
	}
	else
	{
		var projectId = row.projectId;
		if(typeof(row.projectId) == 'undefined')
		{
			projectId = row.remarkId;
		}
		content = content.replace('"<pname>',"<a href=\'" + Constants.sopEndpointURL + "/galaxy/project/detail/" +projectId + "?mark=m\' class='blue project_name'>").replace('name"',"");
	}
	content = content.replace('</pname>"',"</a>");
	content = "<span title='"+title+"'>"+content+"</span>";
	return content;
}
function toTaskList()
{
	var url = $("#menus a[data-menueid='1071']").attr('href');
	window.location=url;
}
function replaceStr(str){
	if(str){
		var result=str.replace(/(\n)/g, "");
		result = result.replace(/(\t)/g, "");
		result = result.replace(/(\r)/g, "");
		result = result.replace(/<\/?[^>]*>/g, "");
		result = result.replace(/\s*/g, "");
		return result;
	}

}

function delHtmlTag(str)
{
	if(str){
		return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
	}else{
		return "";
	}
}

function getNowDay(fg){
	var now = new Date();
	var year = now.getFullYear();       //年
	var month = now.getMonth() + 1;     //月
	var day = now.getDate();
	var clock = year + fg;
	if(month < 10) clock += "0";
	clock += month + fg;
	if(day < 10) clock += "0";
	clock += day;
	return clock;
}
//获取当前时间精确到分
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes();
    return currentdate;
}
function getFileSize(size)
{
	if(size>1000000)
	{
		return size/1000000 + 'M';
	}
	else 
	{
		return size/1000 + 'K';
	}
}
//批量截取 td内字符长度
function cutStr(len,target){
    var obj=$('.'+target);
        for (i=0;i<obj.length;i++){
                //obj[i].innerHTML=obj[i].innerHTML.substring(0,len)+'…';
                    	obj[i].innerHTML=obj[i].innerHTML.substring(0,len);
         }
}

if (!Array.prototype.indexOf){
		Array.prototype.indexOf = function(elt /*, from*/){
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

function initTcVal(){
	$("#projectId").val(interviewSelectRow.projectId).attr("disabled","desabled");
	$("#viewDate").val(interviewSelectRow.viewDateStr).attr("disabled","desabled");
	$("#viewTarget").val(interviewSelectRow.viewTarget).attr("readonly","readonly");
	interviewEditor.setContent(interviewSelectRow.viewNotes); 
	
	var fileinfo = "";
	if(interviewSelectRow.fname!=null && interviewSelectRow.fname!=undefined && interviewSelectRow.fname!="undefined" ){
	fileinfo = "<a href=\"javascript:;\" onclick=\"filedown("+interviewSelectRow.fileId+","+interviewSelectRow.fkey+");\" class=\"blue\" >"+interviewSelectRow.fname+"</a>"
			
		
	}
	$("#fileNotBeUse").html("");
	$("#fileNotBeUse").html("访谈录音："+fileinfo);
	
	$("#btnNotBeUse").html("");
	$("#btnNotBeUse").html("<a href=\"javascript:;\" class=\"pubbtn fffbtn\" data-close=\"close\">关闭</a>");
	
}

/**
 * 根据parentCode获取数据字典的子项集
 * @param url   请求地址
 * @param name  select的name属性值
 */
function createDictionaryOptions(url, name, selectIndex){
	sendGetRequest(url,null, function(data){
		var options = [];
		$.each(data.entityList, function(i, value){
			if(selectIndex && i == selectIndex){
				options.push('<option index="'+i+'" selected="selected" value="'+value.code+'">'+value.name+'</option>');
			}else{
				options.push('<option index="'+i+'" value="'+value.code+'">'+value.name+'</option>');
			}
		});
		$('select[name="'+name+'"]').append(options.join(''));
		
	});
}

/**
 * 查询事业线
 * @param url   请求地址
 * @param name  select的name属性值
 */
function createCareelineOptions(url, name, selectStatus){
	sendGetRequest(url,null, function(data){
		var options = [];
		$.each(data.entityList, function(i, value){
			options.push('<option value="'+value.id+'" '+(value.isCurrentUser ? 'back="link"' : '') +'>'+value.name+'</option>');
		});
		$('select[name="'+name+'"]').append(options.join(''));
		if(!selectStatus){
			$('select[name="'+name+'"]').find('option[back="link"]').attr("selected",true);
		}
		var op=$('select[name="'+name+'"] option');
		if(op.length<=2 && op.length!=1){
			$('select[name="'+name+'"]').find(":first").remove();
		}
	});
}
/**
 * 查询事业线
 * @param url   请求地址
 * @param name  select的name属性值
 */
function createCareelinePartShow(url, name,selectStatus,showId){
	sendGetRequest(url,null, function(data){
		var options = [];
		$.each(data.entityList, function(i, value){
			if(showId.contains(value.id)==true){
				options.push('<option value="'+value.id+'" '+(value.isCurrentUser ? 'back="link"' : '') +'>'+value.name+'</option>');
			}
		});
		$('select[name="'+name+'"]').append(options.join(''));
		if(!selectStatus){
			$('select[name="'+name+'"]').find('option[back="link"]').attr("selected",true);
		}
		/*
		var op=$('select[name="'+name+'"] option');
		if(op.length<=2 && op.length!=1){
			$('select[name="'+name+'"]').find(":first").remove();
		}*/
	});
}
/**
 * 根据事业线查询相应的投资经理
 * @param url   请求地址
 * @param name  select的name属性值
 */
function createUserOptions(url, name, mark){
	sendGetRequest(url, null, function(data){
		var options = [];
		if(mark == 1){
			options.push('<option value="0">请选择</option>');
		}
		$.each(data.entityList, function(i, value){
			options.push('<option value="'+value.idstr+'" '+(value.isCurrentUser ? 'back="link"' : '')+'>'+value.realName+'</option>');
		});
		if(mark == 1){
	     	$('select[name="'+name+'"]').html(options.join(''));
		}else{
			$('select[name="'+name+'"]').append(options.join(''));
			$('select[name="'+name+'"]').find('option[back="link"]').attr("selected",true);	
				
		}
	});
}



/**
 * 根据事业线查询相应的投资经理
 * @param url   请求地址
 * @param name  select的name属性值
 */
function createUserOptions_All(url, name, mark){
	sendGetRequest(url, null, function(data){
		var options = [];
		if(mark == 1){
			options.push('<option value="0">全部</option>');
		}
		$.each(data.entityList, function(i, value){
			options.push('<option value="'+value.idstr+'" '+(value.isCurrentUser ? 'back="link"' : '')+'>'+value.realName+'</option>');
		});
		if(mark == 1){
	     	$('select[name="'+name+'"]').html(options.join(''));
		}else{
			$('select[name="'+name+'"]').append(options.join(''));
			$('select[name="'+name+'"]').find('option[back="link"]').attr("selected",true);	
				
		}
	});
}


/*
 * 
 * 判断对象是否为数组
 * */
function isArray(obj) {    
	return Object.prototype.toString.call(obj) === '[object Array]';     
} 




function setCookie(name,value,hours,path){
	var name = escape(name);
	var value = escape(value);
	var expires = new Date();
	expires.setTime(expires.getTime() + hours * 60*60*1000);
	path = path =="" ? "":";path=" + path;
	_expires = (typeof hours) == "string" ? "": ";expires=" + expires.toUTCString();
	document.cookie = name + "=" + value + _expires + path;
}
function getCookieValue(name){
	var name = escape(name);
	var allcookies = document.cookie;
	name += "=";
	var pos = allcookies.indexOf(name);
	if(pos != -1){
		var start = pos + name.length;
		var end = allcookies.indexOf(";",start);
		if(end == -1){
			end = allcookies.length;
		}
		var value = allcookies.substring(start,end);
		return unescape(value);
	} else{
		return "";
	}
}
function deleteCookie(name,path){
	var name = escape(name);
	var expires = new Date(0);
	path = path == "" ? "" : ";path=" + path;
	document.cookie = name + "=" + ";expires=" + expires.toUTCString() + path;
}
var cookieOperator = {
	paramKey : 'parameter',
	/*
	 * 将信息保存到cookie然后提交
	 * param : 
	 * 		_paramKey : 参数键 (默认：parameter)
	 * 		_url : url
	 * 		_path : path
	 * 		_param : 参数值
	 * 
	 * */
	forwardPushCookie : function(formdata){
		var tempParamKey;
		if(formdata._paramKey){
			tempParamKey = formdata._paramKey;
		}else{
			tempParamKey = cookieOperator.paramKey;
		}
		setCookie(tempParamKey,JSON.stringify(formdata._param),6,formdata._path);
		//$.cookie(tempParamKey, JSON.stringify(formdata._param),{expires:cookietime,path:formdata._path});
		forwardWithHeader(formdata._url);
	},
	getDataNoDelete:function(formdata){
		var tempParamKey;
		if(formdata._paramKey){
			tempParamKey = formdata._paramKey;
		}else{
			tempParamKey = cookieOperator.paramKey;
		}
		var retStr = getCookieValue(tempParamKey);
		if(retStr){
			return jQuery.parseJSON(retStr);
		}
		return;
	},
	pullCookie : function(formdata){
		var tempParamKey;
		if(formdata._paramKey){
			tempParamKey = formdata._paramKey;
		}else{
			tempParamKey = cookieOperator.paramKey;
		}
		var retStr = getCookieValue(tempParamKey);
		//var retStr = $.cookie(tempParamKey);
		if(retStr){
			deleteCookie(tempParamKey,formdata._path);
			//$.removeCookie(tempParamKey);
			return jQuery.parseJSON(retStr);
		}
		return;
		
	}
}

function init_bootstrapTable(table_id,page_size){
	$('#'+table_id).bootstrapTable({
		queryParamsType: 'size|page', // undefined
		pageSize:page_size,
		showRefresh : false ,
		sidePagination: 'server',
		method : 'post',
		pagination: true,
		uniqueId: "id", 
		idField : "id",
		clickToSelect: true,
        search: false
	});
}

function setting(value,row,index){
	var settingHtml="";
	if(row.taskStatus=='待完工'){
		settingHtml="<a href='javascript:void(0)' class='blue'  id='doclaim' onclick='doSoptask("+row.id+")' >处理</a>";
	}else if(row.taskStatus=='待认领'){
		settingHtml="<a id='dai' href='javascript:void(0)' resource-mark='' onclick='claimSopTask("+row.id +","+row.projectId+")' class='blue' data-btn='claim' >认领</a>"
	}else{
		settingHtml="<a href='javascript:void(0)'>完成</a>"
		
	}
		return settingHtml;
}

/*
 * 日期计算工具
 * author : zhongliangzhang
 * 
 * */
var DateUtils = {
		/*获取当年第一天*/
		getYearFirstDay : function(){
			var date = new Date();  
			var year = date.getFullYear();  
//			var month = date.getMonth() + 1;  
//			var firstdateStr = year + '-01' + '-01';
			return new Date(year,"0","1");
		},
		getTime : function(date){
//			var dateCurson = date.split(' ');
			if(typeof(date) == 'string'){
				var dateCurson = date.split(' ');
				var datePart = dateCurson[0].split('-');
				var timePart = dateCurson[1].split(':');
				return new Date(datePart[0],datePart[1]-1,datePart[2],timePart[0],timePart[1],timePart[2]).getTime();
			}else{
				return date.getTime();
			}
			
			
		},
		/*
		 * 获取月份第一天 params
		 * year : 指定年份
		 * month : 指定月份
		 * retType : 返回形式 (date:date类型返回,int:int形式返回(返回天数 ))
		 * 
		 * exam :
		 * var params = {
		 *			year : 2016,
		 *			month : 7,
		 *			retType : 'int'
		 *	}
		 *	var ddd = DateUtils.getYearFirstDay(params);
		 * 
		 * 
		 * 
		 * */
		getFirstDayByMonth : function(params){
			var year;
			var month;
			if(params && params.year && params.month){
				year = params.year;
				month = params.month - 1;
			}else{
				var date = new Date();  
				year = date.getFullYear();
				month = date.getMonth();
			}
			while(month > 12){
				month -= 12;
				year ++;
			}
            if(params && params.retType){
            	if(params.retType=='date'){
            		return new Date(year,month,1); 
            	}else if(params.retType=='int'){
            		return new Date(year,month,1).getDate();
            	}
            }
            return new Date(year,month,1);                //取当年当月中的第一天          
          
		},
		/*
		 * 获取月份最后一天params
		 * year : 指定年份
		 * month : 指定月份
		 * retType : 返回形式 (date:date类型返回,int:int形式返回(返回天数 ))
		 * 
		 * exam :
		 * var params = {
		 *			year : 2016,
		 *			month : 7,
		 *			retType : 'int'
		 *	}
		 *	var ddd = DateUtils.getLastDayByMonth(params);
		 * 
		 * 
		 * 
		 * */
		getLastDayByMonth : function(params){
			var year;
			var month;
			if(params && params.year && params.month){
				year = params.year;
				month = params.month - 1;
			}else{
				var date = new Date();  
				year = date.getFullYear();
				month = date.getMonth();
			}
			while(month > 12){
				month -= 12;
				year ++;
			}
			var nextMonthFirstDay = new Date(year,month+1,1);
            if(params && params.retType){
            	if(params.retType=='date'){
            		return new Date(nextMonthFirstDay.getTime()-1000); 
            	}else if(params.retType=='int'){
            		return new Date(nextMonthFirstDay.getTime()-1000).getDate(); 
            	}
            }
            return new Date(nextMonthFirstDay.getTime()-1000); 
		},
		/*
		 * 获取当天最早些时候
		 * year : 指定年份
		 * month : 指定月份
		 * day : 指定天
		 * retType : 返回形式 (date:date类型返回,int:int形式返回(返回天数 ))
		 * 
		 * exam :
		 * var params = {
		 *			year : 2016,
		 *			month : 7,
		 *			retType : 'int'
		 *	}
		 *	var ddd = DateUtils.getLastDayByMonth(params);
		 * 
		 * 
		 * 
		 * */
		getEarliestDay : function(params){
			var year;
			var month;
			if(params && params.year && params.month){
				year = params.year;
				month = params.month - 1;
				day = params.day;
			}else{
				var date = new Date();  
				year = date.getFullYear();
				month = date.getMonth();
				day = date.getDate();
			}
			while(month > 12){
				month -= 12;
				year ++;
			}
            if(params && params.retType){
            	if(params.retType=='date'){
            		return new Date(year,month,day); 
            	}else if(params.retType=='int'){
            		return new Date(year,month,day).getDate(); 
            	}
            }
            return new Date(year,month,day); 
		}
}




//根据toobar id 获取表单参数
function getToobarQueryParams(ToolbarId){
	var toolbar = $("#"+ToolbarId);
	var query = {};
	toolbar.find("input[name][type!='radio']").each(function(){
		var input = $(this);
		var name = input.attr("name");
		var val = input.val();
		if(val!=''){
			query[name]=val;
		}
	});
	toolbar.find("input[type='radio']").each(function(){
		var input = $(this);
		var name = input.attr("name");
		if(input.attr("checked")=="checked"||input.prop("checked")==true){
			var val = input.val();
    		if(val!=''){
    			query[name]=val;
    		}
		}
	});
	toolbar.find("select[name]").each(function(){
		var select = $(this);
		var name = select.attr("name");
		var val = select.val();
		if(val!=''){
			query[name]=val;
		}
	});
	console.log(query);
	return query;
}


function json_2_1(json1,json2){
	var json = {};
	json = eval('('+(JSON.stringify(json1)+JSON.stringify(json2)).replace(/}{/,',')+')');
	return json;
}
if (!Array.prototype.contains)
{
	Array.prototype.contains = function(ele){
		for(i in this)
		{
			if(this[i] == ele)
			{
				return true;
			}
		}
		return false;
	}
}
/**
 * 通用弹出层列表，结合分页插件
 * @param obj
 * obj.url  非必需，弹出层的html路径
 * obj.datatable 非必需，弹出层的datatable标识（id）
 * obj.toolbar  非必需，table插件参数区
 * obj.serverUrl  必需，请求数据的url
 * obj.params  非必需，table插件筛选参数
 * obj.columns  必需，table插件列表项,例如columns: [{field:'project_code',align:'center',class:'"data-input"',title:'项目编号'},{field:'project_contribution',align:'center',class:'"data-input"',title:'投资金额（万）',formatter:'money_format'}],
 * @returns {Boolean}
 */
function ajaxPopup(obj,tite_mame){
	var url = obj.url || platformUrl.popList;
	var divid = obj.datatable || "data-table-ajax-popup"; 
	var toolbar = obj.toolbar || "#custom-toolbasr-ajax-popup";
	var serverUrl = obj.serverUrl;
	var params = obj.params || {};
	var columns = obj.columns || {};
	$.getHtml({
 		url: obj.url || (platformUrl.popList),
 		data:"",
 		okback:function(){
 			$('.title_bj').html(tite_mame)
 			$('#'+ divid).bootstrapTable('destroy');
 		    $('#'+ divid).bootstrapTable({
	    	queryParamsType: 'size|page',
			pageSize:20,
			showRefresh : false ,
			sidePagination: 'server',
	    	url: serverUrl,
		    dataType: "json",
		    pagination: true, //分页
		    search: false, //显示搜索框
		    queryParamsType: 'size|page',
		    method : 'post',
		    //height:350,
		    queryParams: function(params){params.meetingType=obj.params.meetingType;params.scheduleStatus=obj.params.scheduleStatus;params.type=obj.params.type;return params;},
		    pageSize:20,
		    pagination: true,
			pageList: [10, 20, 50],
		    toolbar: toolbar,
		    columns:columns,
		    undefinedText:' ',
		    onLoadSuccess:function(result){
		    	//$(toolbar).html("");
		    }
 			});
 		}
 	});
 	return false;
}
//查看项目详情
function to_pro_info(id){
	var href_url=window.location
	//ie兼容
	setCookie("href_url", href_url,24,'/');
	forwardWithHeader(Constants.sopEndpointURL + "/galaxy/project/detail/" + id);
}

function setData(sumPlanMoney,sumActualMoney){
	 //注资进度
	  $("#bar_m").css("width","0px");  //初始化进度条宽度；
	    var moneyComplete=sumActualMoney;
	        moneyTotal=sumPlanMoney;
	        m_width=$(".progressBar").width();
	        if(moneyComplete==0){
	        	barWidth=0+"px";
	        }else{
	        	barWidth=parseInt(moneyComplete/moneyTotal*m_width)+"px";
	        }
	        
	    $("#bar_m").css("width",barWidth)
	    //获取表格除第一行，第二行之外的元素
	    var tr_n=$(".moneyAgreement tbody tr")
	    var tr_s=$(".moneyAgreement tbody tr").eq(1).nextAll();
	    tr_s.css("display","none");
	    if(tr_n.length>2){
	      $(".agreement .show_more").show();
	      $(".agreement .show_more").click(function(){
	        $(this).hide();
	        $(".agreement .show_hide").show();
	        tr_n.show();
	      })
	       $(".agreement .show_hide").click(function(){
	        $(this).hide();
	        $(".agreement .show_more").show();
	        tr_s.css("display","none");
	      })
	    }

}

function cut(cutelement, cutlength) {
 
    
    var cutelement = $(cutelement);
    $.each(cutelement, function (i, item) {
        if (item.innerText.length > cutlength) {//循环判断cutelement中含有的字数
            item.innerText = item.innerText.substring(0, cutlength) + "...";//如果字数超过，则截取内容，拼接上“...”显示
        }

    })

}
//创投大脑弹窗页面统一方法

function filter(str){
	return str==undefined?"":str
}
function filterData(data){
	return data==undefined?"":data
}
///status  判断是弹窗还是页面
function initTable(url,data,status,code) { 
    $('#dataTable').bootstrapTable({
        method: 'post',
        toolbar: '#toolbar',    //工具按钮用哪个容器
        striped: false,      //是否显示行间隔色
        cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,     //是否显示分页（*）
        sortable: true,      //是否启用排序
        sortOrder: "desc",     //排序方式
        pageNumber: 1,      //初始化加载第一页，默认第一页
        pageSize: 10,      //每页的记录行数（*）
        pageList: [],  //可供选择的每页的行数（*）
        url: url,//这个接口需要处理bootstrap table传递的固定参数
        queryParamsType: '', //默认值为 'limit' ,在默认情况下 传给服务端的参数为：offset,limit,sort
        // 设置为 '' 在这种情况下传给服务器的参数为：pageSize,pageNumber 
        queryParams: function (params) {
        	var paramData=data;
        	paramData.pageNo=params.pageNumber-1;              
        	paramData.pageSize=params.pageSize;
        	paramData.order=params.sortOrder; 
			return paramData;
		} ,//前端调用服务时，会默认传递上边提到的参数，如果需要添加自定义参数，可以自定义一个函数返回请求参数
        sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
        //search: true, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        //showColumns: true, //是否显示所有的列
        //showRefresh: true, //是否显示刷新按钮
        minimumCountColumns: 2,    //最少允许的列数
        clickToSelect:false,  //是否启用点击选中行
        searchOnEnterKey: true,
        search:false,
        columns: [
         {
            title: "项目信息",
            field: "Name",
            align: "left",
            valign: "middle",
            formatter: function (value, row, index) {  
                //通过formatter可以自定义列显示的内容
                //value：当前field的值，即id
                //row：当前行的数据
            	if(row.industryName){ 
                	var b = '<span class="industryName">'+filter(row.industryName)+'</span>'
            	}else{

                	var b = ''
            	}
                var a = '<img class="comImg" src='+filter(row.projImage)+' alt="">'
						+'<div class="conInfo">'
						+'<p class="DN_name">'+row.projTitle+'</p>'
						+'<p class="textBotm">'
						+b
						+'<span class="districtSubName">'+filter(row.districtSubName)+'</span>'
						+'</p>'
						+'</div>';
                return a;
            }
        },
        {
            title: "工商信息",
            field: "busInfor",
            align: "left",
            valign: "middle",
            formatter: function (value, row, index) {
                //通过formatter可以自定义列显示的内容
                //value：当前field的值，即id
                //row：当前行的数据
                var a ='<div class="conInfo">'
						+'<p class="rightText">'+filter(row.projCompanyName)+'</p>'
						+'<p class="textBotm">'
							+'<span>成立时间：'+filter(row.setupDTEs)+'</span>'
						+'</p>'
					+'</div>'
                return a;
            }

        },
        {
            title: "操作",
            field: "ProductName",
            align: "left",
            valign: "middle",
            formatter: function (value, row, index) {
                //通过formatter可以自定义列显示的内容
                //value：当前field的值，即id
                //row：当前行的数据
            	if(status==0){
            		//页面
            		var a ='<button type="button" onclick="infoDetail(this)" class="enterIn blueBtn"  projCode='+row.projCode+'>引用</button>'
                    
            	}else{  
            		var a ='<button type="button" onclick="infoDPop(this,1)" dncode='+code+' urlcode="/galaxy/infoDanao/infoDJsp/" class="enterIn blueBtn"  projCode='+row.projCode+'>引用</button>'
                    
            	}
                return a;
            }
        }, 

        ],
        onLoadSuccess: function (data) {
        	if(data.pageList.content.length<=0){
        		$(".infoTop p:first").remove();
        		$(".infoTop p i").css("color","#666");
        		$(".tableBox").hide();
        		$(".emptyInfo").show().css("margin-bottom",0); 
        	}
        	$(".pagination-info").css({"color":"#5A626D","overflow":"hidden"});
			$(".pagination-info").append("<span style=color:#999;padding-left:18px;>（数据来源：创投大脑）</span>");
			$(".bootstrap-table").next().hide(); 
			$(".infoTopS").show();
			return false;
        },
        pagination: true
    });
}
  
/**
 * html之间传递参数
 * @param name
 * @returns
 */
function getHrefParamter(name){
      var url=decodeURI(location.search);
      var q = url.substr(1);
      var qs = q.split("&");
      if (qs) {
          for (var i = 0; i < qs.length; i++) {
              if (qs[i].substring(0, qs[i].indexOf("=")) == name) {
                  var ss = qs[i].substring(qs[i].indexOf("=") + 1)
                  return ss;
              }
          }
      }
}

