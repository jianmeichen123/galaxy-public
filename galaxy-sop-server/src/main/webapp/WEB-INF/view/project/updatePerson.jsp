<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<% 
	String path = request.getContextPath(); 
%>
<div class="addmentc">
  <div class="form clearfix">
  <form action="" id="up_person_form" method="post">
  	<input type="hidden" name="projectId" value="" id="projectId">
  	<input type="hidden" name="id" value="${person.id }">
    <div class="left">
      <dl class="fmdl fml">
        <dt>姓名：</dt>
        <dd><input type="text" id="personName" name="personName" value="${person.personName }" class="txt" placeholder="姓名"/></dd>
      </dl>
       <dl class="fmdl">
        <dt>年龄：</dt>
        <dd><input type="text" id="personAge" name="personAge" value="${person.personAge }" class="txt" placeholder="年龄"/></dd>
      </dl>
      <dl class="fmdl">
        <dt>电话号码：</dt>
        <dd><input type="text" id="personTelephone" name="personTelephone" value="${person.personTelephone }" class="txt" placeholder="电话号码"/></dd>
      </dl> 
      <dl class="fmdl">
        <dt>最高学历：</dt>
        <dd><input type="text" id="highestDegree" name="highestDegree" value="${person.highestDegree }" class="txt" placeholder="最高学历"/></dd>
      </dl>
    </div>
    <div class="right">
      <dl class="fmdl">
        <dt>性别：</dt>
        <dd>
			<label><input id="personSex0" name="personSex" type="radio" value="0"  <c:if test="${person.personSex eq '0'}">checked</c:if>>男</label>
            <label><input id="personSex1" name="personSex" type="radio" value="1" <c:if test="${person.personSex eq '1'}">checked</c:if>>女</label>
		</dd>
      </dl>  
      <dl class="fmdl">
        <dt>工龄：</dt>
        <dd><input type="text" id="workTime" name="workTime" value="${person.workTime }" class="txt" placeholder="工龄"/></dd>
      </dl>
      <dl class="fmdl">
        <dt>身份证号码：</dt>
        <dd><input type="text" id="personIdcard" name="personIdcard" value="${person.personIdcard }" class="txt" placeholder="身份证号码"/></dd>
      </dl>
      <dl class="fmdl">
        <dt>职位：</dt>
        <dd><input type="text" id="personDuties" name="personDuties" value="${person.personDuties }" class="txt" placeholder="职位"/></dd>
      </dl>
    </div>
    </form>
  </div>
      <a href="javascript:updatePerson();" class="pubbtn bluebtn">保存</a>
</div>