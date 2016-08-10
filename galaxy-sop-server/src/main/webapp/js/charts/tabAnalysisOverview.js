var searchOverviewPanel = {
		init : function(){
			//初始化日期
			datePickerInitByHandler("search_overview_form");
			$("#search_overview_form").find("#search_start_time").datepicker("setDate",DateUtils.getYearFirstDay());
			//初始化投资事业线
			sendGetRequest(platformUrl.getDepartMentDict + "/" + departmentId,null,function(data){
				var _dom;
				_dom = $("#search_overview_form").find("#search_department_id");
				utils.each(data,_dom,"all");
				var forwardProgress = getProjectProgress();
				if(forwardProgress){
					$("#search_overview_form").find("#search_project_progress").val("projectProgress:" +　forwardProgress);
				}else{
					$("#search_overview_form").find("#search_project_progress").val("all");
				}
				
				//项目总览图表
				var formdata = {
				}
				chartOverviewUtils.init(formdata);
				//项目总览表格
				var formdata = {
						domid : "grid_overview"
				}
				projectGrid.init(formdata);
				
				$("#search_overview_form").find("#search_btn").click(function(){
					queryOverviewUtils.query();
				})
				
				
				
			});
		}
}

var queryOverviewUtils = {
		getQuery : function(){
			var form = $("#search_overview_form").serializeObject();
			form = jQuery.parseJSON(form);
			
			if(form.departmentId=='all'){
				form.departmentId = undefined; 
			}
			if(form.projectType=='all'){
				form.projectType = undefined; 
			}
			if(form.projectProgress=='all'){
				form.projectProgress = undefined; 
			}
			if(form.startTime && form.startTime.trim() != ''){
				form.startTime = DateUtils.getTime(form.startTime+' 00:00:00');
			}else{
				form.startTime = undefined;
			}
			if(form.endTime && form.endTime.trim() != ''){
				form.endTime = DateUtils.getTime(form.endTime+' 23:59:59');
			}else{
				form.endTime = undefined;
			}
			return form;
		},
		query : function(){
			projectGrid.research = true;
			$("#search_overview_form").find("#search_project_progress").val("all");
			chartOverviewUtils.init();
			$('#grid_overview').bootstrapTable('refresh',projectGrid.queryParams);
		},
		queryGrid : function(projectProgress){
			$("#search_overview_form").find("#search_project_progress").val("projectProgress:" + projectProgress);
			$('#grid_overview').bootstrapTable('refresh',projectGrid.queryParams);
		}
}

var projectGrid = {
		init : function(formdata){
			if(!formdata.domid){
				layer.msg("参数domid不能为空");
				return;
			}
			$('#'+formdata.domid).bootstrapTable({
			      url : platformUrl.searchProjectByCharts,     //请求后台的URL（*）
			      queryParamsType: 'size|page', // undefined
			      showRefresh : false ,
			      search: false,
			      method : 'post',           //请求方式（*）
//			      toolbar: '#toolbar',        //工具按钮用哪个容器
//			      striped: true,           //是否显示行间隔色
			      cache: false,            //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			      pagination: true,          //是否显示分页（*）
			      sortable: false,           //是否启用排序
			      sortOrder: "asc",          //排序方式
			      queryParams: projectGrid.queryParams,//传递参数（*）
			      sidePagination: "server",      //分页方式：client客户端分页，server服务端分页（*）
			      pageNumber:1,            //初始化加载第一页，默认第一页
			      pageSize: 10,            //每页的记录行数（*）
			      pageList: [10, 20],    //可供选择的每页的行数（*）
			      strictSearch: true,
			      clickToSelect: true,        //是否启用点击选中行
//			      height: 460,            //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
			      uniqueId: "id",           //每一行的唯一标识，一般为主键列
			      cardView: false,          //是否显示详细视图
			      detailView: false,          //是否显示父子表
			      columns: [
					{
			        field: 'projectCode',
			        title: '项目编号'
			      },{
				    field: 'projectName',
				    title: '项目名称',
				    events : projectGrid.nameEvents,
				    formatter: projectGrid.nameFormatter
				  },{
			        field: 'departmentName',
			        title: '投资事业线'	
			      }, {
			        field: 'progress',
			        title: '项目进度'
			      }, {
			        field: 'hhrName',
			        title: '合伙人'
			      }, {
			        field: 'createUname',
			        title: '投资经理'
			      }, {
			        field: 'type',
			        title: '项目类型'
			      }, {
				    field: 'projectContribution',
				    title: '投资金额(万)',
				    formatter : function(value, row, index){
			        	if(value==undefined){
			        		value = 0;
			        	}
			        	return value;
			        }
				  }, {
			        field: 'currencyUnit',
			        title: '资金单位',
			        formatter : function(value, row, index){
			        	var retStr = "";
			        	switch (value) {
						case 0:
							retStr = "人民币";
							break;
						case 1:
							retStr = "美元";
							break;
						case 2:
							retStr = "英镑";
							break;
						case 3:
							retStr = "欧元";
							break;
						default:
							retStr = "人民币";
							break;
						}
			        	return retStr;
			        }
			      }, {
			        field: 'createDate',
			        title: '创建时间'
			      },{
				    field: 'updateDate',
				    title: '最后修改时间'
				  }]
			    });
		},
		queryParams : function(params){
			if(projectGrid.research){
				params.pageNum = 0;
				projectGrid.research = false;
			}
			var form = queryOverviewUtils.getQuery();
			params.projectDepartid = form.departmentId;
			params.projectProgress = form.projectProgress;
			params.projectType = form.projectType;
			
			params.startTime = form.startTime;
			params.endTime = form.endTime;	
			return params;
			
		},
		nameFormatter : function(value, row, index){
			return ['<a class="projectNameLink blue" id="projectName" href="javascript:void(0)">',
			        value,
			        '</a>  '
			        ].join('');
		},
		nameEvents : {
			'click .projectNameLink': function (e, value, row, index) {
				window.location.href = platformUrl.projectDetail + "/" + row.id;
			}
		},
		research : false
}
var chartOverviewUtils = {
		chartOverviewOptions : {
			chart: {
				renderTo :'chart_overview',
		        type: 'column',
		        margin: [ 50, 50, 100, 80]
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
		    plotOptions: {
		    	 column: {
		             pointWidth:20//设置柱状图宽度
		         },
		        series: {
		            cursor: 'pointer',
		            events: {
		                click: function (event) {
		                    console.log(event.point.category);
		                    var temp = event.point.category.split('-');
		                    if(temp!=null && temp!='' && temp!='undefind'){
		                    	var dict_code = temp[1].split(':');
		                    	queryOverviewUtils.queryGrid(dict_code[1]);                   	
		                    }
		                }
		            }
		        }
		    },
		    xAxis: {
		    	lineWidth: 1,
		        lineColor: "#e9ebf2",
		        tickWidth: 0,
		        allowDecimals:false, //不显示小数
		        //categories: ['<a href="http://wwww.baidu.com" target="_blank">Jan</a>','朱玟','牟敏','关屿','赵广智','陈丛翀','王飞韵','蔡燕','王晓宇'],
		    	labels: {
		    		useHTML:true,
		    		/*formatter:function(){
		    			var temp = new Array();
		    			temp = this.value.split('-');
		    			return '<a href="javascript:;" onclick="showDetails("'+temp[1]+'");">' + temp[0] + '</a>';
		    		},*/
		            rotation: 0,
		            align: 'center',
		            style: {
		                fontSize: '13px',
		                fontFamily: '宋体'
		            },
		        }
		    },
		    yAxis: {
		        gridLineColor: '#e9ebf2',
		        gridLineWidth: 1,
		        min: 0,
		        allowDecimals:false, //不显示小数
		        title: {
		            //text: '项目数 (个)'
		            text:''
		        }
		    },
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		    	useHTML: true,
		    	formatter: function(){
		    		var temp = this.x.split('-');
		    		return temp[0] +'<br/>项目数:'+ this.y +'个';
		    	}
		    },
		    series: [{
		        name: 'Population',
		        color:'#587edd',
		        //data: [9,8,5,4,3,3,2,2,2,2],
		        dataLabels: {
		            enabled: true,
		            rotation: 0,
		            color: '#6b799f',
		            align: 'center',
		            x: 0,
		            y: 0,
		            style: {
//		                fontSize: '13px',
//		                fontFamily: '宋体',
//		                textShadow: '0 0 3px black'
		            	fontSize: '12px',
		                fontFamily: 'Verdana, sans-serif',
		                textShadow: '0 0 0px #fff',
		                fontWeight:'normal',
		            },
		            formatter:function(){
		     			return this.point.y;
					},
		        }
		    }]
		},
		/*
		 * 项目总览图表初始化
		 * params formdata 当前无用 后期会加入 图表的响应配置及位置(domid)
		 * 
		 * 
		 * */
		init : function(formdata){
			//departmentId,projectType,startTime,endTime
			var form = queryOverviewUtils.getQuery();
			form.projectProgress = undefined;
			//获取数据
			sendPostRequestByJsonObj(platformUrl.searchOverView,form,function(data){
				if(data.result.status=='OK'){
					console.log("项目总览");
					//查询前有初始化参数，在调用出需要做此步骤操作
					if(data.entityList){
						var projectProgressArr = new Array();
						var projectCountArr = new Array();
						$.each(data.entityList,function(){
							projectProgressArr.push(this.projectProgressName + "-" + this.projectProgress);
							projectCountArr.push(this.projectCount);
						});
						//console.log(categories);
						
						chartOverviewUtils.chartOverviewOptions.series[0].data = projectCountArr;
						chartOverviewUtils.chartOverviewOptions.xAxis.categories = projectProgressArr;
						chartOverviewUtils.chartOverviewOptions.xAxis.labels.useHTML = true;
						chartOverviewUtils.chartOverviewOptions.xAxis.labels.formatter = function(){
							var temp = new Array();
							temp = this.value.split('-');
							switch(temp[1]){
								case "projectProgress:1": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(1);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:2": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(2);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:3": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(3);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:4": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(4);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:5": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(5);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:6": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(6);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:7": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(7);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:8": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(8);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:9": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(9);' class='blue'>" + temp[0] + "</a>";
									break;
								case "projectProgress:10": 
									return "<a href='javascript:;' onclick='queryOverviewUtils.queryGrid(10);' class='blue'>" + temp[0] + "</a>";
									break;
							}
						};
						var chart = new Highcharts.Chart(chartOverviewUtils.chartOverviewOptions);
					}else{
						layer.msg("后端获取数据为空");
					}
				}else{
					layer.msg(data.result.errorCode);
				}
				
			});
			
				
		}
}

