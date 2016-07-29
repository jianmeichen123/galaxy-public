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
	   				if(selected=='177'||selected=='180'||selected=='183'||selected=='186'||selected=='189'||selected=='192'){
	   					selected='168'
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
	         });
	});
}
</script>

<script type="text/javascript" src="<%=request.getContextPath() %>/js/cookie.js"></script>