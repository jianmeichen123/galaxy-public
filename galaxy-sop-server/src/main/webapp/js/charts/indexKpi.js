/**
 * 绩效考核
 */

var isGG = true;
if(roleId == '1' || roleId == 1 || roleId == '2' || roleId == 2){
	isGG = true;
}else{
	isGG = false;
}
var kpiurl = platformUrl.deptkpi;
if(!isGG)  kpiurl = platformUrl.userkpi;

$(function() {
	
	$('#platform_jxkh_more').click(function(){
	    window.location.href=path + "/galaxy/kpireport/touserkpi?guid="+userId+"&sid="+sessionId;
	    //$("#platform_jxkh_more").attr('href' , path + "/galaxy/report/kpi?guid="+userId+"&sid="+sessionId +"#gg_jxkh_u");//绩效考核链接
	})
});


function load_data_chart_kpi(){
	var obj = {pageNum:0,pageSize:5};
	sendPostRequestByJsonObj(kpiurl,obj,function(data){
		var result = data.result.status;
		if(result == "ERROR"){ //OK, ERROR
			layer.msg(data.result.message);
			return;
		}else{
			var entityList = data.pageList.content;
			var re = [];
	   		var ghl = [];
	   		var categories = [];
	   		for(var i=0;i<entityList.length;i++){
	   			var rate = entityList[i].ghlRate*100;
	   			re.push(entityList[i].completed);
	   			ghl.push(parseFloat(rate.toFixed(2)));
	   			categories.push(isGG ? entityList[i].departmentName : entityList[i].realName);
	   		}
	   		containerKpiOptions.series[0].data = re;
	   		containerKpiOptions.series[1].data = ghl;
	   		containerKpiOptions.xAxis.categories = categories;
	   		//containerKpiOptions.xAxis.labels.staggerLines = (categories.length>3) ? 2 : 1;
	   		var chart = new Highcharts.Chart(containerKpiOptions);
			if(re==''&& ghl==''){
	   			$('#container_kpi').html('<div  class="no_info_div"><span class="no_info_icon">　没有找到匹配的记录</span></div>');
	   		}
		}
   	});
}



//绩效考核，前5
var containerKpiOptions = {
    chart: {
    	renderTo:'container_kpi',
        zoomType: 'xy',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    title: {
        text: ''
    },
    //去除版权
    credits: {
        enabled:false
    },
    //去除右上角导出图标
    exporting: {
    	enabled:false
    },
    xAxis: {
//    	 plotLines: [{
//             value: -1,
//             width: 1,
//             color: '#808080'
//         }],
        lineWidth: 1,
        lineColor: "#edeff5",
        tickWidth: 0,
        labels: {
            y: 20, //x轴刻度往下移动20px
            staggerLines:1,
            style: {
                color: '#7a8798',//颜色
                fontFamily:'宋体',
            }
        }
        //categories: ['物联网', 'O2O事业部', '互联网服装', '互联网金融', '互联网工业']
    },
    yAxis: [
			{ // Secondary yAxis
			    gridLineColor: '#f6f7fa',
			    gridLineWidth: 1,
			    title: {
			        text: '项目数(个)',
			        style: {
			            color: '#7a8798'
			        }
			    },
			    labels: {
			        style: {
			            color: '#4572A7'
			        }
			    },
			},
            { // Primary yAxis
        gridLineColor: '#f6f7fa',
        gridLineWidth: 1,
        opposite: true,
        min:0,
        max:100,
        //lineColor: "#edeff5",
        //lineWidth: 1,
        labels: {
            format: '{value} %',
            style: {
                color: '#999',//颜色
                fontFamily:'宋体',  //字体
            }
        },
           title: {
                text: '过会率(%)',
                style: {
                    color: '#7a8798'
                }
            }
        }],
            plotOptions: {
        column: {
            pointWidth: 20
        },
    },
    tooltip: {
        shared: true
    },
    legend: {
        itemMarginTop:-10,
        itemMarginBottom:-10,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        borderWidth: 0,
        itemStyle:{
            fontWeight:'normal',
            color:'#7a8798',
        },
    },
    series: [{
        name: '项目数',
        color: '#9dd2fc',
        type: 'column',
        //data: [20, 18, 9, 7, 18],
        tooltip: {
            valueSuffix: '个'
        }
    },{
        lineWidth:3,
        name: '过会率',
        yAxis: 1,
        color: '#88dfd8',
        type: 'spline',
        //data: [10.5, 15.8, 60.1, 50.9, 30.3],
        tooltip: {
            valueSuffix: '%'
        }
    }]
};




