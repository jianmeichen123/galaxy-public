/**
 * 
 */
var chartPostAnalysisUtils = {
		postAnalysisOptions : {
			tooltip : {
				trigger: 'axis',
				axisPointer:{  //删除中轴线
	              	type:'none'
	              },
	              //tooltip样式
	              backgroundColor:'rgba(255,255,255,0.9)',
	              borderColor:'#9dd2fc',
	              borderWidth:1,
	              borderRadius:1,
	              textStyle:{
	            	  color:'#333',
	            	  fontFamily:'宋体',
	            	  fontSize:'12'
	              }
					},
		    dataZoom: {
		        show: true,
		        start : 0,
		        end : 80,
		       // handleSize:"5",
		        handleColor:"#539be2",
		        dataBackgroundColor:'#e9f3fb',
		        fillerColor:'#e9f3fb',
		        handleSize:5,
		        height:10,
		        y:145,
		        zoomLock:true,
		        showDetail:false
		    },
		    calculable : true,
		    /*legend:{
		        show:true,
		        y:-5,
		        orient:'horizontal',
		        textStyle:{
		        	 fontFamily:'宋体'
		        },
		        itemWidth:16,
		        itemHeight:12,
		        itemGap:20,
		        data:[
		            {
		                name:'创建',
		                textStyle:{
		                    color:'#7a8798'
		                },
		                icon:'stack'
		            },
		            {
		                name:'投资',
		                textStyle:{
		                    color:'#7a8798'
		                },
		                icon:'stack'
		            }
		        ]
		    },*/
		    grid: {
             borderWidth: 0,
             y : 20,
             y2 : 65,
             x : 50,
             x2 : 15
             },
		    xAxis : [
		        {
		        	type : 'category',
		        	data : ["数字娱乐","互联网金融","互联网餐饮","云计算大数据","互联网医疗","互联网旅游","互联网教育"],
		        	axisLabel: {
		        		show: true,
		        		interval:0,
		        		textStyle: {
		        			color: '#7a8798',
		        			fontFamily:'宋体'
		        				}
		        },
                  axisLine:{
                  	show:true,
                  	lineStyle:{
                  		color : '#f6f7fa',
                  	    width : 1,
                  	    type : 'solid'
                  	}
                  },
                  axisTick:{
                  	show:false
                  },
                  splitLine:{   //去网格线
		                            　　　　show:false
		                            　　}
		        }
		    ],
		    yAxis : [
		             {
		            //name样式
		             name:'项目数（个）',
		             position:'left',
		             nameLocation:'middle',
		             nameGap:30,
		             nameTextStyle:{
		             color:"#7a8798",
		            	fontFamily:'宋体'
		            },
                      type : 'value',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#7a8798'
                          }
                      },
                      axisLine:{
                      	show:false
                      },
                      axisTick:{
                      	show:false
                      },
                      splitLine:{   
			                            　　　　lineStyle:{  //网格线样式
		                        color: '#f6f7fa',
		                        width: 1,
		                        type: 'solid'
		                      }
			                            　　}
                  }
		    ],
		    series : [
		        {
		            name:'创建',
		            type:'bar',
		            stack:"项目数",
		            "barWidth":"18",//柱图宽度
		            data:[60,50,40,30,20,10,5],
		            itemStyle: {
                     normal: {
                         color: '#9dd2fc',
                         label: {  
                             show: false,
                         }
                     }
                 }
		        }
		        /*,
		        {
		            name:'投资',
		            type:'bar',
		            stack:"项目数",
		            "barWidth":"18",//柱图宽度
		            data:[90,70,50,40,30,20,10],
		            itemStyle: {
                     normal: {
                         color: '#51d7cc',
                         label: {  
                             show: false,
                             /!*position: 'top',
                             formatter: function (params) {
                                 for (var i = 0, l =chartPostAnalysisUtils.postAnalysisOptions.xAxis[0].data.length; i < l; i++) {
                                     if (chartPostAnalysisUtils.postAnalysisOptions.xAxis[0].data[i] == params.name) {
                                         return chartPostAnalysisUtils.postAnalysisOptions.series[0].data[i] + params.value;
                                     }
                                 }
                             },*!/
                             textStyle: {
                                 color: '#999'
                             }
                         }
                     }
                 	},
		        }*/
		    ]
		},
		/**
		 * echarts头后项目分析图表
		 * params
		 * 	domid : 需渲染的ID
		 * 	belongType : 业务线分类 1:联合创业 2：融快 3：创宝联
		 */
		init : function(formdata){
			var form = {
					belongType : formdata.belongType
			}

            sendPostRequestByJsonObj(platformUrl.searchProjOverView,form,function(data)
			{
                var myChart = echarts.init($('#' + formdata.domid)[0]);

                if(data.result.status=='OK') {
                    var belongType = form.belongType;

                    var xArray =data.userData.data2.xValue;
                    var dataNum = xArray.length;

                    debugger;
					if(dataNum && dataNum>0){
                        chartPostAnalysisUtils.postAnalysisOptions.xAxis[0].data = data.userData.data2.xValue;

                        var chargeProjectArr = new Array(); //负责的项目数
                        chargeProjectArr.push(data.userData.data2.dataValue[0].data);
                        chartPostAnalysisUtils.postAnalysisOptions.series[0].data = data.userData.data2.dataValue[0].data;

                        switch (belongType) {
                            case 1:
                                chartPostAnalysisUtils.postAnalysisOptions.series[0].name = "项目总数";
                                break;
                            case 2 :
                                chartPostAnalysisUtils.postAnalysisOptions.series[0].name = "负责项目";
                                break;
                            case 3 :
                                chartPostAnalysisUtils.postAnalysisOptions.series[0].name = "协作项目";
                                break;
                            default:
                                break;
                        }

                        window.onresize = myChart.resize;
                        myChart.setOption(chartPostAnalysisUtils.postAnalysisOptions);
					}else{
                        //无数据显示
                        $('#' + formdata.domid).html('<div  class="no_info_div"><span class="no_info_icon">　没有找到匹配的记录</span></div>');
					}

                }else{
                    layer.msg(data.result.errorCode);
                }
            });


/*

			sendPostRequestByJsonObj(platformUrl.searchPostAnalysis,form,function(data){
				if(data.result.status=="OK"){
					
				            	var myChart = echarts.init($('#' + formdata.domid)[0]); 
				            	var departmentArr = new Array();
				            	var nbCountArr = new Array();
				            	var wbCountArr = new Array();
				            	$.each(data.entityList,function(){
//				            		var departmentName=this.departmentName.replace(/(^(融快\-))|(^(创保联\-))/g, "");  //融快、创保联去掉前缀
				            		departmentArr.push(this.departmentName ? this.departmentName : this.createUname);
				            		nbCountArr.push(parseFloat(this.nbCount));
				            		wbCountArr.push(parseFloat(this.wbCount));
				            		//console.log(this.nbCount)
				            	})
				            	chartPostAnalysisUtils.postAnalysisOptions.xAxis[0].data = departmentArr;
				            	var departmentArrNum=departmentArr.length
				            	
				            	
				            	//默认显示5条数据，不足5条，显示全部
				            	if(departmentArrNum>5){
				            		chartPostAnalysisUtils.postAnalysisOptions.dataZoom.end=4/departmentArrNum*100;
				            	}else{
				            		chartPostAnalysisUtils.postAnalysisOptions.dataZoom.end=100;
				            	}
					            //内部
					            chartPostAnalysisUtils.postAnalysisOptions.series[0].data = nbCountArr;
					            var sum_nb=0;
					            for(var i=0;i<nbCountArr.length;i++){
					            	sum_nb+=nbCountArr[i];
					            }
					            //外部
					            chartPostAnalysisUtils.postAnalysisOptions.series[1].data = wbCountArr;
					            var sum_wb=0;
					            for(var i=0;i<wbCountArr.length;i++){
					            	sum_wb+=wbCountArr[i];
					            }
					            //无数据显示
					            if(sum_nb==0 && sum_wb==0){
					            	$('#' + formdata.domid).html('<div  class="no_info_div"><span class="no_info_icon">　没有找到匹配的记录</span></div>');
					            }
					            window.onresize = myChart.resize; 
					            myChart.setOption(chartPostAnalysisUtils.postAnalysisOptions);
				           
				
				}else{
					layer.msg(data.result.errorCode);
				}
			});*/
		}
}

function init(){
	$(".ytxm_block").tabchange2({
		onchangeSuccess:function(index){
			var formdata;
			switch (index) {
			case 0:
				formdata = {
					domid : 'charts_Joint',
					belongType : 1
				};
				chartPostAnalysisUtils.init(formdata);
				break;
			case 1 :
				formdata = {
					domid : 'charts_rk',
					belongType : 2
					
				};
				chartPostAnalysisUtils.init(formdata);
				break;
			case 2 : 
				var formdata = {
					domid : 'charts_cbl',
					belongType : 3
					
				};
				chartPostAnalysisUtils.init(formdata);
				break;
			default:
				console.log("错误");
				break;
			}
		}
	});
	
	var formdata = {
			domid : 'charts_Joint',
			belongType : 1
		};
	chartPostAnalysisUtils.init(formdata);

}

$(function(){init()});

