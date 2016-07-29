<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>
<script>
function createMenus(current){
	sendGetRequest(platformUrl.createMenus + current, {}, function(data){
		 var selected = data.header.attachment;
	   	 var html = "";
	   	 $.each(data.entityList, function(i,o){
	   		 if(typeof(o.nodes) == "undefined"){
	   			if(selected == o.id){
	   				if(o.url.indexOf("?flag") > -1){
	   					o.id='168';
	   					o.menuName="待办任务";
	   				}
		   			html += '<li class="on"><a href="' + o.url + '" data-menueid="' + o.id + '" ><span class="navbar nav'+o.id+'"></span>' + o.menuName + '</a></li>';
		   		}else{
		   			html += '<li><a href="' + o.url + '"  data-menueid="' + o.id + '"><span class="navbar nav'+o.id+'"></span>' + o.menuName + '</a></li>';
		   		}
	   		 }else{
	   			var innerHtml ="";
	   			var isExend = false;
	   			 $.each(o.nodes, function(i,obj){
	   				 if(selected == obj.id){
	   					isExend = true;
	   					innerHtml += '<li class="on"><a href="' + obj.url + '" data-menueid="' + o.id + '">' + obj.menuName + '</a></li>';
			   		 }else{
			   			innerHtml += '<li><a href="' + obj.url + '" data-menueid="' + o.id + '">' + obj.menuName + '</a></li>';
			   		 }
	   			 });
	   			 
	   			 if(isExend){
	   				html += '<li class="toggle_li on"><a href="javascript:;"><span class="navbar nav'+o.id+'"></span>'+o.menuName+'</a><ul style="display:block;">';
	   			 }else{
	   				html +='<li class="toggle_li"><a href="javascript:;"><span class="navbar nav'+o.id+'"></span>'+o.menuName+'</a><ul>';
	   			 }
	   			 html += innerHtml;
	   			 html += '</ul></li>';
	   		 }
	   	 });
	   	 $("#menus").html(html);
	   //投后菜单显示隐藏    
	     $(".pagebox .lft .toggle_li").click(function(event) {
	           $(this).children('ul').stop().slideToggle();
	