<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
%>

<div class="addmentc">
	<div class="title_bj" id="popup_name"></div>
	
    <div class="form clearfix" id="container">
        <div class="conference_all">
        	<form id="deliver_form" >
        	<input type="hidden" name="projectId" value="" />
        	<input type="hidden" name="id" value="" />
            <dl class="fmdl clearfix">
                <dt>事项简述：</dt>
                <dd>
                    <input type="text" class="txt"  id="delDescribe" name="delDescribe"  maxlength="24"/>
                </dd>
            </dl>
            
            <dl class="fmdl fl_l">
                 <dt>详细内容：</dt>
                 <dd><textarea class="area" name="details" id="details" cols="45" rows="5" maxlength="100"></textarea></dd>
            </dl>
            
            <dl class="fmdl fl_l">
                 <dt>完成情况：</dt>
                 <dd><label for=""><input type="radio" name="delStatus" value="0" checked="checked" >未完成</label></dd>
                 <dd><label for=""><input type="radio" name="delStatus" value="1">已完成</label></dd>
            </dl>
            
            </form>
            
            <div class="affrim_line"></div>
            
            
            <dl class="fmdl fl_l" id="choose_up_file">
                 <dt>上传附件 ：</dt>
                 <div class="fmload clearfix">
		            <dd>
			        	<input  type="text"  class="txt" name="textarea2" id="textarea2" ></input>
			        </dd>
			        <dd>
			        	<a href="javascript:;"  class="register_all_affrim fl" id="select_btn">选择附件</a>
		    		</dd>
		        </div>
            </dl>  
            <dl class="fmdl fl_l" id="show_up_file">
                 <table style="width:90%;border: 1px;margin: auto;" id="filelist">
                    <tr>
                      <td style="width:50%;">文件名称</td>
                      <td style="width:20%" align="center">文件大小</td>
                      <td style="width:15%" align="center">操作</td>
                      <td style="width:15%" align="center">进度</td>
                    </tr>
                 </table> 
            </dl>
        </div>
    </div>
    
    
    <div class="button_affrim" id="choose_oper">
        <a href="javascript:;"  class="register_all_affrim fl" id="save_file" >确认</a>
        <a href="javascript:;"  class="register_all_input fr"  data-close="close">取消</a>
    </div>
  	
</div>