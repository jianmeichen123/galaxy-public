	var i=$(".next_box").attr("data-progress")  //获取阶段值
	progressBtnToggle();
	//上一步、下一步显示隐藏
	function progressBtnToggle(){
		if(i==1){
			$(".pre_box").hide();
		}else if(i==11){
			$(".next_box").hide();
		}else{
			$(".next_box").show();
			$(".pre_box").show();
		}
	}
	//阶段加载
	function goToProgress(){
		progressBtnToggle()		
		if(i==1){
			interviewList();
			$(".tabtitle h3").text("接触访谈");
			$("#add_button a").text("添加访谈记录");
			$("#pop_button").attr("data-name","添加访谈记录");
			$("#pop_button").attr("data-type","");
			$("#meetingType").val("");
		}else if(i==2){
			meetList("meetingType:1");
			$(".tabtitle h3").text("内部评审");
			$("#add_button a").text("添加内部评审");
			$("#meetingType").val("meetingType:1");
			$("#pop_button").attr("data-name","添加内部评审");
			$("#pop_button").attr("data-type","meetingType:1");
		}else if(i==3){
			meetList("meetingType:2");
			$(".tabtitle h3").text("CEO评审");
			$("#add_button a").text("添加CEO评审");
			$("#meetingType").val("meetingType:2");
			$("#pop_button").attr("data-name","添加CEO评审");
			$("#pop_button").attr("data-type","meetingType:2");
		}else if(i==4){
			meetList("meetingType:3");
			$(".tabtitle h3").text("立项会");
			$("#add_button a").text("添加立项会");
			$("#meetingType").val("meetingType:3");
			$("#pop_button").attr("data-name","添加立项会");
			$("#pop_button").attr("data-type","meetingType:3");
		}else if(i==5){
			$(".tabtitle h3").text("会后商务谈判");
		}else if(i==6){
			$(".tabtitle h3").text("投资意向书");
		}else if(i==7){
			$(".tabtitle h3").text("尽职调查");
			//尽职调查  上传附件
		}else if(i==8){
			meetList("meetingType:4");
			$(".tabtitle h3").text("投决会");
			$("#add_button a").text("添加投决会");
			$("#meetingType").val("meetingType:4");
			$("#pop_button").attr("data-name","添加投决会");
			$("#pop_button").attr("data-type","meetingType:4");
		}else if(i==9){
			$(".tabtitle h3").text("投资协议");
			//投资协议  上传附件
		}else if(i==10){
			$(".tabtitle h3").text("股权交割");
			//股权交割   上传附件
		}else if(i==11){
			//静态页
			$(".tabtitle h3").text("投后运营");
			
		}								
	}
	//点击下一步
	$(".next_box").click(function(){
		i++;
		$(".next_box").attr("data-progress",i);
		goToProgress();
		
	})
	//点击上一步
	$(".pre_box").click(function(){
		i--;
		goToProgress();

	})
function selectFile(input){
	var fileName = input.val();
	if(fileName.length> 1 && fileName){
		var ldot = fileName.lastIndexOf("."); 
	var type = fileName.substr(Number(ldot + 1)); 
	if (type=="pdf") {
		input.siblings('.file_box').find('img').removeClass("add_img")
		input.siblings('.file_box').find('img').attr(
			"src", '../img/sop_progress/pdf.png');
	}else{
		input.siblings('.file_box').find('img').removeClass("add_img")
		input.siblings('.file_box').find('img').attr(
		"src", '../img/sop_progress/image.png');
	}
	input.siblings('.file_box').find('.cover_box').show();
	}else{
		input.siblings('.file_box').find('img').addClass("add_img")
		input.siblings('.file_box').find('img').attr(
		"src", '../img/sop_progress/plus_icon.png');
		input.siblings('.file_box').find('.cover_box').hide();
	}
}
$(".file_list input[type='file']").change(function(event) {
	selectFile($(this));
});
//文件上传与取消
$(".file_box .cover_box .cancel").click(function(event) {
	$(this).parents(".cover_box").hide();
	$(this).parents(".cover_box").siblings('img').addClass("add_img").attr(
		"src", '../img/sop_progress/plus_icon.png');
	$(this).parents("li").find("input").val("");
});
$(".file_box .cover_box .up_load").click(function(event) {
	$(this).parents(".cover_box").find("span").hide();
	$(this).siblings('p').show();
});
//tab点击事件
$(".tab_2").click(function(event) {
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	$('.file_list').show();
	$(".new_poptxt .bootstrap-table").next().hide();
	$(".new_poptxt .bootstrap-table").hide();
	$(".add_list").hide();
});
$(".tab_1").click(function(event) {
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	$('.file_list').hide();
	$(".new_poptxt .bootstrap-table").show();
	$(".new_poptxt .bootstrap-table").next().show()
	$(".add_list").show();
});
// 添加访谈记录
 
$(".new_poppage").on("click",function(){ 
	var $self = $(this);
	var _url = $self.attr("href");
	var _name=$self.attr("data-name");
	var _type = $self.attr("data-type");
	$.getHtml({
		url:_url,//模版请求地址
		data:"",//传递参数
		okback:function(){
			$("#popup_name").text(_name);
			switch(_type){
			  case "":
				  $("#targetView").attr("style","display:block");
				  break;
			  default:
				  $("#targetView").attr("style","display:none");
			}
			/*
			$("[data-btn='add_rzzx']").on("click",function(){ 
				var $self = $(this);
				var _url = $self.attr("href");
				var _name=$self.attr("data-name")
				$.getHtml({
					url:_url,//模版请求地址
					data:"",//传递参数
					okback:function(){
						$("#popup_name1").text(_name);							
					}//模版反回成功执行	
				});
				return false;
			});*/
			
		}//模版反回成功执行	
	});
	return false;
});
