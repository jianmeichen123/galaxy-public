
// 格式化日期
Date.prototype.format = function(format){
	var o = { 
			"M+" : this.getMonth()+1, //month 
			"d+" : this.getDate(),    //day 
			"h+" : this.getHours(),   //hour 
			"m+" : this.getMinutes(), //minute 
			"s+" : this.getSeconds(), //second 
			"q+" : Math.floor((this.getMonth()+3)/3),  //quarter 
			"S" : this.getMilliseconds() //millisecond 
	} 
	if(/(y+)/.test(format)) format=format.replace(RegExp.$1, 
			(this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	for(var k in o)if(new RegExp("("+ k +")").test(format)) 
		format = format.replace(RegExp.$1, 
				RegExp.$1.length==1 ? o[k] : 
					("00"+ o[k]).substr((""+ o[k]).length)); 
	return format; 
}

// 格式化数字
$.extend({
	format : function(str, step, splitor) {
		step = 3;
		splitor = ',';
		str = str.toString();
		var len = str.length;
		if(len > step) {
			 var l1 = len%step, 
				 l2 = parseInt(len/step),
				 arr = [],
				 first = str.substr(0, l1);
			 if(first != '') {
				 arr.push(first);
			 };
			 for(var i=0; i<l2 ; i++) {
				 arr.push(str.substr(l1 + i*step, step));
			 };
			 str = arr.join(splitor);
		 };
		 return str;
	}
});
function GetDateStr(AddDayCount)
{
	var dd = new Date();
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
	var y = dd.getFullYear();
	var m = dd.getMonth()+1;//获取当前月份的日期
	var d = dd.getDate();
	return y+"-"+m+"-"+d;
}
var dateLimit = GetDateStr(1);
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var weekLimitnow = GetDateStr(-(nowTemp.getDay())+7);
var weekLimit = GetDateStr(-(nowTemp.getDay()));

var createTime=$("#projectTime").val();
var projectTime='';
if(createTime !='' || createTime !=null || typeof(createTime) != "undefined"){
	projectTime=createTime;
}

$(function(){
    $('.datetimepickerHour').datetimepicker({
       inline: true,
       sideBySide: true,
       language: "zh-CN",
       autoclose: true,
       todayHighlight: false,
	    today: "Today",
	    todayBtn:'linked',
	    leftArrow: '<i class="fa fa-long-arrow-left"></i>',
	    rightArrow: '<i class="fa fa-long-arrow-right"></i>',
	    forceParse:false,
	    currentText: 'Now',
       startDate: projectTime,
	   endDate: dateLimit,
	   defaultDate : new Date(),
	   todayBtn:  1
    });

});
