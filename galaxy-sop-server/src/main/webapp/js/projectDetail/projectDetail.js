
//function init(){
//	
//}

//文档加载结束
//$(document).ready(init());
//所有资源加载结束

$(function(){
	var defaultnum=0;
	var flag=false;
	if(getCookieValue('backListOperation')=='7'){   //运营分析返回后切换
		defaultnum=7;
		flag=true;
		deleteCookie("backListOperation",'/');
	}
	$('.projectDetail').tabLazyChange({
		defaultnum:defaultnum,
		onchangeSuccess:function(index){
			switch(index){
				case 0: initTabInfo(projectId);  break;  //标签0:基本信息
				case 1: initTabProjectTeam(); break;  //标签1:团队成员
				case 2: initTabEquity(); break;  //标签2: 股权结构
				case 3: initTabInterview();buryPoint("100");   break;  //标签3:访谈记录
				case 4: initTabMeeting(projectId);buryPoint("101");   break;  //标签4:会议记录
				case 5: initTabDelivery();  buryPoint("102"); break;  //标签5:交割前事项
				case 6: initTabAppropriation(projectId);buryPoint("103");   break;  //标签6:注资信息
				case 7: initTabPostMeeting();
				if(!flag){
					buryPoint("104");
				}
				  break;  //标签7:运营分析
				case 8: initTabSopFile(projectId);  buryPoint("105"); break;  //标签8:项目文档
				case 9: initTabOperLog(); buryPoint("107");  break;  //标签9:操作日志
				case 10:writeStand(); break;//填写标准 
				default: return false;
			}
			
			//右侧刷新	
			if(index == 10){
				return;
			}else{
			$.getDivHtml({
				domid : "new_right",
				url : platformUrl.toRight + "/" + projectId,//模版请求地址
				data:"",//传递参数				
			})
			}
			
		}
});
	
})


//老板测试
function laobanTest(){
	var url = Constants.sopEndpointURL+"/galaxy/test/laobanTest/";
	$.getTabHtml({
		url : url
	});
}


//基本信息
function initTabInfo(projectId){
	//tabInfo.init(projectId);
	$.getTabHtml({
		url : platformUrl.toTabProjectInfo +'/'+ projectId
	});
}

//团队成员
function initTabProjectTeam(){
	$.getTabHtml({
		url : platformUrl.showPersonDetail +'/'+ projectId
	});
}
//股权结构
function initTabEquity(){
	$.getTabHtml({
		url : platformUrl.showShareDetail,
		data:{'id':projectId}
	});
}
//访谈记录
function initTabInterview(){
	//buryPoint("100");
	$.getTabHtml({
		url : Constants.sopEndpointURL+"/galaxy/project/proview/" + projectId
	});
}
//会议纪要
function initTabMeeting(Id){
	//buryPoint("101");
	$.getTabHtml({
		url : Constants.sopEndpointURL+"/galaxy/project/promeet/" + projectId
	});
}
//交割前事项
function initTabDelivery(){
	//buryPoint("102");
	$.getTabHtml({
		url : Constants.sopEndpointURL+"/galaxy/delivery/toprodeliver/" + projectId
	});
}
//注资信息
function initTabAppropriation(projectId){
	//buryPoint("103");
	$.getTabHtml({
		url : Constants.sopEndpointURL+"/galaxy/project/toAppropriation/null/"+projectId
	});
}
//运营分析
function initTabPostMeeting(){
	//buryPoint("104");
	$.getTabHtml({
		url : platformUrl.showOperationsAnalysis +'/'+ projectId
	});
}
//填写标准
function writeStand(){ 
	debugger;
	$.getTabHtml({
		url : platformUrl.writeStand 
	});
}
//项目文档
function initTabSopFile(){
	//buryPoint("105");
	tabFile.init(projectId);
	
}
//操作日志
function initTabOperLog(){
	//buryPoint("107");
	var url = Constants.sopEndpointURL+"/galaxy/project/toprolog/" + projectId;
	$.getTabHtml({
		url : url
	});
}
//全息图
function initTabInfomation(){
	$.getTabHtml({
		url : platformUrl.toBaseInfo,
		okback:function(data){
			right_anchor("NO1");
		}
		/*okback:function(){
			 $('.h_navbar').tabLazyChange({
         		onchangeSuccess:function(index){
         			switch(index){
         				case 0: initBaseInfo();  break;  //标签0:基本信息
         				case 1: initProjectInfo(); break;  //标签1:项目
         				case 2: alert("11");initTeamInfo(); break;  //标签2: 团队
         				case 3: initOperateInfo();   break;  //标签3:运营数据
         				case 4: initCompeteInfo();   break;  //标签4:竞争
         				case 5: initPlanInfo();   break;  //标签5:战略及策略
         				case 6: initFinanceInfo();   break;  //标签6:财务
         				case 7: initJusticeInfo();   break;  //标签7:法务
         				case 8: initValuationInfo();   break;  //标签8:融资及估值
         				default: return false;
         			}
         			
         		}
         });
		}*/
	});
}
/*//基本信息
function initBaseInfo(){
	$.getTabHtml({
		url : platformUrl.toBaseInfo
	});
}
   //项目
	function initProjectInfo(){
		alert("11")
		$.getTabHtml({
			url : platformUrl.toProjectInfo 
		});
	}
	 //团队
	function initTeamInfo(){
		$.getTabHtml({
			url : platformUrl.toTeamInfo 
		});
	}
	 //运营数据
	function initOperateInfo(){
		$.getTabHtml({
			url : platformUrl.toOperateInfo 
		});
	}
	//竞争
	function initCompeteInfo(){
		$.getTabHtml({
			url : platformUrl.toCompeteInfo 
		});
	}
	//战略以及策略
	function initPlanInfo(){
		$.getTabHtml({
			url : platformUrl.toPlanInfo 
		});
	}
	//财务
	function initFinanceInfo(){
		$.getTabHtml({
			url : platformUrl.toFinanceInfo 
		});
	}
	//法务
	function initJusticeInfo(){
		$.getTabHtml({
			url : platformUrl.toJusticeInfo 
		});
	}
	//融资及估值
	function initValuationInfo(){
		$.getTabHtml({
			url : platformUrl.toValuationInfo 
		});
	}*/
	
function reference(projectId){
	//右侧刷新	
	$.getDivHtml({
		domid : "new_right",
		url : platformUrl.toRight + "/" + projectId,//模版请求地址
		data:"",//传递参数
		okback:function(){
			console.log("right completed");
		}
	})
}
//i--code,type--全息和其他六大报告区分,right--评分类别报告右侧多出来一个内容区域，show/hide
function right_anchor(i,type,right){
	var _url = '/sop/html/right_anchor.html';
	if(type=="seven"){
		_url = '/sop/html/seven_right_anchor.html'
	}else if(type=="hologram"){
		_url = '/sop/html/right_anchor.html'
	}
	
	//右侧刷新	
	$.getDivHtml({
		domid : "new_right",
		url :_url ,//模版请求地址
		data:"",//传递参数
		okback:function(){
			sendGetRequest(platformUrl.queryAllTitleValues+i, null,
					function(data) {
						var result = data.result.status;
						if (result == 'OK') {
							var entity = data.entity;
							 $('#nav_tmpl').tmpl(entity).appendTo('#nav_ul');
							 setTimeout(function(){$(window).scrollTop(0)},1);
							 var anchor_width=$("#new_right").css("width").replace("px","");
							 var  anchor_nav=$("#div-content").contents().find(".anchor_nav");
							 anchor_nav.css("width",Number(anchor_width));
							 //点击锚点
							$('.anchor_nav a[href^="#"]').click(function(event) {
								$(".to_top").fadeIn(100);
								$(".anchor_nav").css("top","60px");			
								var _this=$(this);
								var id = $(this).attr("href");
								var target = $(id).offset().top-50;
								$(".anchor_navs").removeClass("anchor_nav");
								$('html, body').animate({scrollTop:target}, 0);
								$(".anchor_navs").addClass("anchor_nav");
								$('.anchor_nav li').removeClass('active');
								_this.parents('li').addClass('active');
													
								event.preventDefault();
							});
							//滑动高亮
							$(window).scroll(function(event) {
								var scrollTop = $(this).scrollTop();
								var scrollHeight = $(document).height()-2;
								var windowHeight = $(this).height();
								if(scrollTop>10){
									$(".anchor_nav").css("top","60px");
									$(".to_top").fadeIn(100);
								}else{
									$(".anchor_nav").css("top","140px");
									$(".to_top").fadeOut(100);
								}
								$('.anchor_nav a[href^="#"]').each(function() {
									var _this =$(this);
									if(_this.is(":hidden")){}else{
										var id = $(this).attr("href");
										var top= $(id).offset().top - scrollTop;
										if(top<=100){
											_this.parent().addClass('active');
											_this.parent().siblings().removeClass('active');
										}
									}
								});
								//滑动到顶部
								if(scrollTop ==0){
									$('.anchor_nav li').each(function() {
										var _this =$(this);
										if(_this.is(":hidden")){}else{
											_this.addClass('active');
											_this.siblings().removeClass('active');
											return false;
										}
									});
								}
								
							});
							hideNav();
							$(".to_top").click(function(){
								$('body,html').animate({scrollTop:0},300);
							})
							
						} else {

						}
						//右侧隐藏显示
						$('.anchor_btn span').click(function(){
							var _this = $(this);
							_this.toggleClass('invisible');
							 toggle_btn(_this,1);
						})
					})
					if(right=="show"){
						$(".anchor_btn").remove();
					}else if(!right||right=="hide"){
						$(".right_bom").remove();
					}
		}
	})
}

