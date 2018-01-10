<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.galaxyinternet.com/fx" prefix="fx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   

<script src="<%=request.getContextPath() %>/bootstrap/bootstrap-table/bootstrap-table-xhhl.js"></script>
<script src="<%=request.getContextPath() %>/bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"></script>

<!--点击编辑例子 -->
<script id="ifelse" type="text/x-jquery-tmpl">
<form id="b_\${relateCode}" onsubmit="return false;">
		<div class="h_edit section">
			<div class="h_btnbox">
				<span class="h_save_btn" attr-save="\${relateCode}">保存</span>
				<span class="h_cancel_btn" data-on="h_cancel" attr-hide="\${relateCode}" attr-session="\${titleId}">取消</span>
			</div>
			<div class="h_title">\${name}</div>
			{{each(i,childList) childList}}
				
			{{if sign=="3"}}
				<div class="sign_title">\${name}</div>
				{{each(i,childList) childList}}
					<div class="mb_16">
					    <dl class="h_edit_txt clearfix">
							<dt data-type="\${type}"  data-title-id="\${titleId}" data-id="\${id}" data-code="\${relateCode}" data-parentId="\${parentId}" data-must="\${isMust}">\${name}</dt>
							{{if type=="1"}}
							<dd><input type="text" data-title-id="\${titleId}" data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" data-must="\${isMust}"/></dd>

							{{else type=="2"}}
							<dd class="fl_none">
							<ul class="h_radios clearfix">
								{{each(i,valueList) valueList}}
								<li><input type="radio" value="\${id}" data-title-id="\${titleId}" data-type="\${type}" name="\${titleId}" data-must="\${isMust}"/>\${name}</li>
								{{/each}}
							  </ul>
							</dd>

							{{else type=="3"}}
							<dd class="fl_none">
							<ul class="h_edit_checkbox clearfix" data-type="\${type}">
								{{each(i,valueList) valueList}}
								<li class="check_label" data-value="\${value}" data-title-id="\${titleId}" value="\${id}" data-id="\${id}" data-code="\${relateCode}" data-type="\${type}">\${name}</li>
								{{/each}}
							  </ul>
							</dd>

							{{else type=="4"}}
								{{each(i,valueList) valueList}}
								<dd>
								  <select name="" id="" data-must="\${isMust}">
									<option value="">\${name}</option>
								  </select>
								</dd>
								{{/each}}

							{{else type=="5"}}
							<dd class="fl_none">
							<ul class="h_radios clearfix">
								{{each(i,valueList) valueList}}
								<li><input type="radio" value="\${id}" data-value="\${value}" name="\${titleId}" data-id="\${id}" data-code="\${relateCode}" data-must="\${isMust}"/>\${name}</li>
								{{/each}}
							  </ul>
							</dd>
							<dd class="fl_none">
								<textarea class="textarea_h" data-title-id="\${titleId}" id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" onInput='countChar("\${titleId}","label_\${id}","\${valRuleMark}");'></textarea>
								<p class="num_tj">
									<label for="" id="label_\${id}">500</label>/500
								</p>
							</dd>


							{{else type=="6"}}
							{{each(i,valueList) valueList}}
							<dd class="check_label" data-value="\${value}" data-id="\${id}" data-code="\${relateCode}">\${name}</dd>
							{{/each}}
								<dd class="fl_none">
									<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");'></textarea>
									<p class="num_tj">
										<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
									</p>
								</dd>
							{{else type=="7"}}
								<dd class="fl_none clearfix">
								 <ul class="h_imgs" id="edit-\${titleId}">

								 </ul>
								 <ul class="h_imgs">
									<li class="h_imgs_add" id="h_imgs_add_\${titleId}"><input type="file" file-title-id="\${titleId}" id="selected_file_\${titleId}"></li>
								</ul>
								</dd>
								<dd class="fl_none red img_prompt">最多支持5张图片，最大上传大小2M，格式限定为jpg、png、gif、bmp</dd>
							{{else type=="8"}}
								<dd class="fl_none">
									<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");' data-must="\${isMust}"  name="\${titleId}"></textarea>
									<p class="num_tj">
										<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
									</p>
								</dd>
							{{else type=="9"}}
								<dd class="fl_none">
								<table>
									<tr>
									<th></th>
									<th colspan="2">\${$data.childList[3].childList[0].name}</th>
									<th>\${$data.childList[3].childList[1].name}</th>
									</tr>
									<tr>
									 <th class="fixed_table_td">上游</th>
									 <td class="fixed_table_td">供应商</td>
									{{each(i,childList) childList}}
									 <td>
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
											<li><input type="radio"/>\${name}</li>
										{{/each}}

										 </ul>
									</td>
									{{/each}} 
									</tr>
									<tr>
									 	<th rowspan="2" class="fixed_table_td">下游</th>
									 	<td class="fixed_table_td">主要渠道</td>
										{{each(i,childList) childList}}
										 	<td>
												<ul class="h_radios clearfix">
													{{each(i,valueList) valueList}}
										      		<li><input type="radio"/>\${name}</li>
													{{/each}}

										   		</ul>
											</td>
										{{/each}} 
									</tr>
									<tr>
									 	<td class="fixed_table_td">主要客户</td>
										{{each(i,childList) childList}}
											<td>
											<ul class="h_radios clearfix">
											{{each(i,valueList) valueList}}
												<li><input type="radio"/>\${name}</li>
											{{/each}}

											</ul>
											</td>
										{{/each}} 
									</tr>
								</table>
								</dd>
							{{else type=="10"}}
								<dd class="fl_none">
									<table data-title-id="\{titleId}" class="editable"></table>
									<span id="add_row" class="pubbtn bluebtn margin_btn" onclick="addRow(this)">新增</span>
								</dd>

							{{else type=="11"}}
								<dd>项目带过来的数据</dd>
							
							{{else type=="12"}}
								<dd class="fl_none">
								<ul class="h_radios clearfix">
									{{each(i,valueList) valueList}}
									<li><input type="radio" value="\${id}" data-value="\${value}" name="\${titleId}" data-id="\${id}" data-code="\${relateCode}" data-must="\${isMust}"/>\${name}</li>
									{{/each}}
									<li class="text_li"><input type="text" data-value="\${value}" disabled="true" name="\${titleId}" data-id="\${id}" data-code="\${relateCode}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" maxlength="\${valRuleMark}"/></li>
								  </ul>
								</dd>
							{{else type=="13"}}
								<dd class="fl_none">
									<ul class="h_radios h_edit_checkbox  clearfix" data-type="\${type}">
										{{each(i,valueList) valueList}}
										<li class="check_label" data-value="\${value}" data-title-id="\${titleId}" value="\${id}" data-id="\${id}" data-code="\${code}" data-type="\${type}">\${name}</li>
										{{/each}}
										<li class="text_li text_li_13"><input data-type="\${type}" type="text" data-value="\${value}" disabled="true" name="\${titleId}" data-id="\${id}" data-code="\${code}"  placeholder="\${placeholder}" data-valrulemark="\${valRuleMark}" maxlength="\${valRuleMark}"/></li>
								 	 </ul>
								</dd>

							{{else type=="14"}}
								<select data-id="\${id}" data-must="\${isMust}" data-title-id="\${titleId}">
								<option data-value="" data-type="\${type}" data-id="" data-title-id="\${titleId}" value="1" data-code="">请选择</option>
								{{each(i,valueList) valueList}}
									<option data-value="\${value}" data-type="\${type}" data-id="\${id}" data-title-id="\${titleId}" value="\${id}" data-code="\${relateCode}">\${name}</option>
								{{/each}}
							</select>
							{{else type=="15"}}

								<dt data-type="\${type}">\${name}</dt>
								<dd class="fl_none">
									<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");' data-must="\${isMust}" name="\${titleId}"></textarea>
									<p class="num_tj">
										<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
									</p>
								</dd>
									<dd class="fl_none">
									<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${content}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");' data-must="\${isMust}" name="\${titleId}"></textarea>
									<p class="num_tj">
										<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
									</p>
								</dd>
							{{else type=="16"}}
								<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
								{{each(i,childList) childList}}
								<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
								{{each placeholder.split('&')}}
								<dd class="fl_none"><input type="text" data-title-id="\${titleId}" data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder.split('&')[$index]}" /></dd>
								{{/each}}
								{{/each}}
							{{else type=="19"}}
						<dd><input type="text" data-title-id="\${titleId}"  data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" data-valRuleFormula="\${valRuleFormula}" data-must="\${isMust}" data-content="\${content}"/></dd>
						<dd>\${content}</dd>
					{{else type=="20"}}
						<dd><input type="text" data-title-id="\${titleId}"  data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}"  data-must="\${isMust}"/></dd>
						<dd class="tmpl_con">\${content}</dd>
						<dd>
							<select id="\${titleId}_select" class="valuationInfo_20_select">
							{{each(i,valueList) valueList}}
								<option data-value="\${value}" data-type="\${type}" data-id="\${id}" data-title-id="\${titleId}" value="\${id}" data-code="\${relateCode}">\${name}</option>
							{{/each}}
							</select>
						</dd>

							{{/if}}
					    </dl>
					</div>
				{{/each}}
			{{else}}
				{{if 1==1}}
				<div class="mb_16">
				   <dl class="h_edit_txt clearfix">		
					{{if type=="1"}}
					<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
					<dd><input type="text" data-title-id="\${titleId}" data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}"  data-must="\${isMust}"/></dd>

					{{else type=="2"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_radios clearfix">
							{{each(i,valueList) valueList}}
							<li><input type="radio" name="\${titleId}" value="\${id}" data-title-id="\${titleId}" data-type="\${type}"  data-must="\${isMust}"/>\${name}</li>
							{{/each}}
						  </ul>
						</dd>

					{{else type=="3"}}
						<dt data-type="\${type}"  data-id="\${titleId}" data-code="\${relateCode}" data-parentId="\${parentId}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_edit_checkbox clearfix" data-type="\${type}">
							{{each(i,valueList) valueList}}
							<li class="check_label" data-value="\${value}" data-title-id="\${titleId}" value="\${id}" data-id="\${id}" data-code="\${relateCode}" data-type="\${type}">\${name}</li>
							{{/each}}
						  </ul>
						</dd>

					{{else type=="4"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						{{each(i,valueList) valueList}}
						<dd>
						  <select name="" id="" data-must="\${isMust}">
							<option value="">\${name}</option>
						  </select>
						</dd>
						{{/each}}

					{{else type=="5"}}
						<dt  data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_radios clearfix">
							{{each(i,valueList) valueList}}
							<li><input type="radio" value="\${id}" name="radio" data-title-id="\${titleId}" data-value="\${value}" data-type="\${type}" placeholder="\${placeholder}"/>\${name}</li>
							{{/each}}
						  </ul>
						</dd>
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");'></textarea>
							<p class="num_tj">
								<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>

					{{else type=="6"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						{{each(i,valueList) valueList}}
							<dd class="check_label" data-value="\${value}" data-id="\${id}" data-code="\${relateCode}">\${name}</dd>
						{{/each}}
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");'></textarea>
							<p class="num_tj">
								<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>

					{{else type=="7"}}
						<dt data-type="\${type}" data-must="\${isMust}" data-title-id="\${titleId}">\${name}</dt>
				        <dd class="fl_none clearfix">
				        <ul class="h_imgs mgedit"  id="edit-\${titleId}"></ul>
				        <ul class="h_imgs" id="edit-\${titleId}">
				        <li class="h_imgs_add" id="h_imgs_add_\${titleId}"><input type="file" file-title-id="\${titleId}" id="selected_file_\${titleId}"></li>
				        </ul>
				        </dd>
				        <dd class="fl_none red img_prompt">最多支持5张图片，最大上传大小2M，格式限定为jpg、png、gif、bmp</dd>

					{{else type=="8"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");'  data-must="\${isMust}" name="\${titleId}"></textarea>
							<p class="num_tj">
								<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>
			        {{else type=="9"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
			                <table data-type="\${type}" data-test="\${titleId}" class="fixed_table">
			                  <tr>
			                    <th></th>
			                     <th colspan="2">\${$data.childList[3].childList[0].name}</th>
								<th>\${$data.childList[3].childList[1].name}</th>
			                  </tr>
			                   <tr>
			                 	 <th class="fixed_table_td">上游</th>
			                 	 <td class="fixed_table_td">供应商</td>
								{{each(i,childList) childList}}
			                 	 <td  data-flag="\${i+1}">
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
			                      		<li><input type="radio" data-title-id="\${titleId}" data-row="row1" name="row1_\${titleId}" value="\${id}" data-type="9"/>\${name}</li>
										{{/each}}

			                   		 </ul>
								</td>
								{{/each}} 
			               	 </tr>
									<tr>
			                 	 <th rowspan="2" class="fixed_table_td">下游</th>
			                 	 <td class="fixed_table_td">主要渠道</td>
								{{each(i,childList) childList}}
			                 	 <td data-flag="\${i+1}">
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
			                      		<li><input type="radio" data-title-id="\${titleId}" data-row="row2" name="row2_\${titleId}" value="\${id}" data-type="9"/>\${name}</li>
										{{/each}}

			                   		 </ul>
								</td>
								{{/each}} 
			               	 </tr>
							<tr>
			                 	 <td class="fixed_table_td">主要客户</td>
								{{each(i,childList) childList}}
			                 	 <td data-flag="\${i+1}">
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
			                      		<li><input type="radio" data-title-id="\${titleId}" data-row="row3" name='row3_\${titleId}' value="\${id}" data-type="9"/>\${name}</li>
										{{/each}}

			                   		 </ul>
								</td>
								{{/each}} 
			               	 </tr>
			   
							

			                </table>
			              </dd>
					{{else type=="10"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<table data-title-id="\${titleId}"  class="editable">

							</table>
							<span id="add_row" class="pubbtn bluebtn margin_btn" onclick="addRow(this)">新增</span>
						  </dd>

					{{else type=="11"}}
					<dd>项目带过来的数据</dd>

					{{else type=="12"}}
						<dt data-type="\${type}" data-must="\${isMust}" data-title-id = "\${titleId}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_radios clearfix">
							{{each(i,valueList) valueList}}
							<li><input type="radio" value="\${id}" data-value="\${value}" name="\${titleId}" data-title-id = "\${titleId}"  data-id="\${id}" data-code="\${relateCode}" data-must="\${isMust}"/>\${name}</li>
							{{/each}}
							<li class="text_li"><input type="text" data-value="\${value}" disabled="true" name="\${titleId}" data-id="\${id}" data-code="\${relateCode}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" maxlength="\${valRuleMark}"/></li>
						  </ul>
						</dd>
					{{else type=="13"}}
						<dt data-type="\${type}"  data-title-id="\${titleId}" data-id="\${titleId}" data-code="\${relateCode}" data-parentId="\${parentId}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<ul class="h_radios h_edit_checkbox  clearfix" data-type="\${type}">
								{{each(i,valueList) valueList}}
								<li class="check_label" data-value="\${value}" data-title-id="\${titleId}" value="\${id}" data-id="\${id}" data-code="\${code}" data-type="\${type}">\${name}</li>
								{{/each}}
								<li class="text_li text_li_13"><input type="text" data-value="\${value}" disabled="true" name="\${titleId}" data-id="\${id}" data-code="\${code}"  placeholder="\${placeholder}" data-valrulemark="\${valRuleMark}" maxlength="\${valRuleMark}"/></li>
						 	 </ul>
						</dd>	
				
					{{else type=="14"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<select data-id="\${id}" data-must="\${isMust}" data-title-id="\${titleId}">
				       <option data-value="" data-type="\${type}" data-id="" data-title-id="\${titleId}" value="" data-code="">请选择</option>
						{{each(i,valueList) valueList}}
						<option data-value="\${value}" data-type="\${type}" data-id="\${id}" data-title-id="\${titleId}" value="\${id}" data-code="\${relateCode}">\${name}</option>
						{{/each}}
						</select>
					{{else type=="15"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${placeholder}" id="\${titleId}" onInput='countChar("\${titleId}","label_\${titleId}","\${valRuleMark}");'  data-must="\${isMust}" name="\${titleId}"></textarea>
							<p class="num_tj">
								<label for="" id="label_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>
							<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" placeholder="\${content}" id="\${titleId}_2" onInput='countChar("\${titleId}_2","label2_\${titleId}","\${valRuleMark}");'  data-must="\${isMust}" name="\${titleId}"></textarea>
							<p class="num_tj">
								<label for="" id="label2_\${titleId}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>
					{{else type=="16"}}
						<dt data-type="\${type}" data-must="\${isMust}" class="inputs_block">\${name}</dt>
						<br/>
						<input data-type="\${type}" data-must="\${isMust}" class="hidden" data-title-id="\${titleId}" type="text"/>
						{{each(i,childList) childList}}
							<dt class="title_dt" data-type="\${type}" data-must="\${isMust}">\${name}</dt>
							{{each placeholder.split('&')}}
							<dd class="fl_none"><input class="big_input" data-title-id="\${titleId}" data-index="\${titleId}_\${$index+1}" data-valrule="\${valRule}" placeholder="\${placeholder.split('&')[$index]}" maxlength="\${valRuleMark}"/></dd>
							{{/each}}
						{{/each}}
					{{else type=="19"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd><input type="text" data-title-id="\${titleId}"  data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" data-valRuleFormula="\${valRuleFormula}" data-must="\${isMust}" data-content="\${content}"/></dd>
						<dd>\${content}</dd>
					{{else type=="20"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd><input type="text" data-title-id="\${titleId}"  data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}"  data-must="\${isMust}"/></dd>
						<dd class="tmpl_con">\${content}</dd>
						<dd>
							<select id="\${titleId}_select" class="valuationInfo_20_select">
							{{each(i,valueList) valueList}}
								<option data-value="\${value}" data-type="\${type}" data-id="\${id}" data-title-id="\${titleId}" value="\${id}" data-code="\${relateCode}">\${name}</option>
							{{/each}}
							</select>
						</dd>

					{{/if}}
				  </dl>
				</div>

				{{/if}}
			{{/if}}

			{{/each}}
			<div class="h_edit_btnbox clearfix">
			  <span class="pubbtn bluebtn h_save_btn fl" data-on="save" attr-save="\${relateCode}">保存</span>
			  <span class="pubbtn fffbtn fl h_cancel_btn" data-name="basic" data-on="h_cancel" attr-hide="\${relateCode}" attr-session="\${titleId}">取消</span>
			</div>

		</div>
</form>
	
</script>









<!--页面例子 -->
<script id="page_list" type="text/x-jquery-tmpl">
{{each(i,childList) childList}}
<div class="h radius section" id="a_\${relateCode}" data-section-id="\${titleId}" data-relate-id="\${id}">
  <div class="h_look h_team_look clearfix" id="\${relateCode}">
	<c:if test="${isEditable}">		
		<div class="h_btnbox put_box">
			<span class="blue_btn put_away">收起</span>
			{{if danaoInfo}}
				{{if projectInfo.danaoProjCode }}   
					<span onclick="infoDPop(this)" class="infoReport" urlcode="/galaxy/infoDanao/infoDJsp/" dncode="\${danaoInfo}">参考信息</span>
					{{else}}
					<span onclick="pagePop(this)" class="infoReport" urlcode="/galaxy/infoDanao/infoJsp/" dncode="\${danaoInfo}">参考信息</span>
				{{/if}}	
			{{/if}}
			<span class="h_edit_btn" attr-id="\${relateCode}">编辑</span></div>
		<div class="h_btnbox out_box"><span class="spread_out">展开</span></div>
	</c:if>
	<div class="h_title">\${name}<span>（如果该项目涉及此项内容，请进行填写，反之可略过）</span></div>
	{{each(i,childList) childList}}                    
		{{if sign=="3"}}
			<div class="sign_box">
				<div class="sign_title" data-title-id="\${titleId}" data-code="\${relateCode}">\${name}</div>
				{{each(i,childList) childList}}
					<div class="mb_24 clearfix">
					    <dl class="clearfix" data-parent-id="\${parentId}">
							<dt data-type="\${type}" data-id="\${titleId}" data-title-id="\${titleId}" data-code="\${relateCode}" data-parentId="\${parentId}">\${name}</dt>

							{{if type=="1"}} 
                                  <dd class="field" data-title-id="\${titleId}">未填写</dd>
							{{else type=="5"}}                             
								<dd data-value="\${value}" data-id="\${titleId}" data-code="\${relateCode}">未选择</dd>
								<dd>备注</dd>

							{{else type=="2"}}
								<dd class="field" data-value="\${value}" data-title-id="\${titleId}" data-code="\${relateCode}">未选择</dd>

							{{else type=="3"}}
								<div class="checked_div clearfix">
									{{each(i,valueList) valueList}}
									<dd class="border_dd" data-value="\${value}" data-type="3" value="\${id}" data-title-id="\${titleId}" data-id="\${id}" data-code="\${relateCode}">未选择</dd>
									{{/each}}
								</div>

							{{else type=="6"}}
								{{each(i,valueList) valueList}}
								<dd data-value="\${value}" data-id="\${titleId}" data-code="\${relateCode}">未选择</dd>
								{{/each}}
								<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>

							{{else type=="7"}}
								<dd class="mglook" id="look-\${titleId}" ata-value="\${value}" data-id="\${titleId}" data-code="\${relateCode}">未添加</dd>

							{{else type=="8"}}
								<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>
					        {{else type=="9"}}
								<dd class="fl_none">
					                <table>
					                  <tr>
					                    <th></th>
					                    <th colspan="2">\${$data.childList[3].childList[3].childList[0].name}</th>
										<th>\${$data.childList[3].childList[3].childList[1].name}</th>
					                  </tr>
					                   <tr>
					                 	 <th>上游</th>
					                 	 <td style="width:100px">供应商</td>
					                 	 <td data-format='1_1' style="width:100px"></td>
					                 	 <td data-format='1_2'></td>
					               	 </tr>
									<tr>
					                  <th rowspan='2'>下游</th>
					                  <td style="width:100px">供应商</td>
					                  <td data-format='2_1' style="width:100px"></td>
					                  <td data-format='2_2'></td>
					                </tr>
					                <tr>
					                  <td style="width:100px">供应商</td>
					                  <td data-format='3_1' style="width:100px"></td>
					                  <td data-format='3_2'></td>
					                </tr>

					                </table>
									<span class="pubbtn bluebtn">新增</span>
					              </dd>
							{{else type=="4"}}
								{{each(i,valueList) valueList}}
								<dd>未选择</dd>
								{{/each}}
							
							{{else type=="10"}}
								<dd class="fl_none"><table data-title-id="\${titleId}"></table></dd>

							{{else type=="11"}}
								<dd>项目带过来的数据</dd>

							{{else type=="12"}}
								<dd class="field" data-title-id="\${titleId}">未选择</dd>
							{{else type=="13"}}
								<div class="checked_div clearfix">
									{{each(i,valueList) valueList}}
										<dd class="border_dd" data-value="\${value}" data-type="13" value="\${id}" data-title-id="\${titleId}" data-id="\${id}" data-code="\${code}" style="display:none;"></dd>
									{{/each}}
									<dd class="field">未选择</dd>
								</div>
							
							{{else type=="14"}}
								<dd class="field" data-title-id="\${titleId}">未选择</dd>
							{{else type=="15"}}
								<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>
								<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>
							{{else type=="16"}}
								<dd class="fl_none field division_dd" data-title-id="\${titleId}" data-content="\${content}">未填写</dd>
							{{else type=="19"}}
								<dd class="field" data-title-id="\${titleId}">未填写</dd>
								<dd class="field news_table">\${content}</dd>
							{{else type=="20"}}
								<dd class="field" data-title-id="\${titleId}">未填写</dd>
								<dd class="field news_table">\${content}</dd>
								<dd class="field news_table"></dd>
						{{/if}}                     
						</dl>		
					</div>
				{{/each}}
			</div>
		{{else}}
			{{if 1==1}}
				<div class="mb_24 clearfix">
				  <dl class="clearfix">
					{{if type=="1"}}
					  <dt  data-type="\${type}" >\${name}</dt>  
                             <dd class="field" data-title-id="\${titleId}">未填写</dd>
					{{else type=="5"}}       
					<dt  data-type="\${type}">\${name}</dt>                 
					<dd class="type_radio" data-value="\${value}" data-id="\${titleId}" data-code="\${relateCode}">未选择</dd>
					<br/>
					<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>

					{{else type=="2"}}
					<dt  data-type="\${type}">\${name}</dt>
					<dd class="field" data-value="\${value}" data-title-id="\${titleId}" data-code="\${relateCode}">未选择</dd>

					{{else type=="3"}}
					<dt  data-type="\${type}" data-title-id="\${titleId}" >\${name}</dt>
					<div class="checked_div clearfix">
					{{each(i,valueList) valueList}}
					 <dd class="border_dd"  data-value="\${value}" data-type="3" value="\${id}" data-title-id="\${titleId}" data-id="\${id}" data-code="\${relateCode}">未选择</dd>
					{{/each}}
					</div>

					{{else type=="6"}}
					<dt  data-type="\${type}" title-id="\${titleId}">\${name}</dt>
					{{each(i,valueList) valueList}}
					<dd data-value="\${value}" data-id="\${titleId}" data-code="\${relateCode}">未选择</dd>
					{{/each}}
					<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>

					{{else type=="7"}}
					<dt data-type="\${type}">\${name}</dt>
					<dd class="mglook" id="look-\${titleId}" ata-value="\${value}" data-id="\${titleId}" data-code="\${relateCode}">未添加
						</dd>

					{{else type=="8"}}
					<dt data-type="\${type}">\${name}</dt>
					<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>
			         {{else type=="9"}}
					<dt data-type="\${type}">\${name}</dt>
						<dd class="fl_none">
			                <table>
			                  <tr>
			                    <th></th>
			                    <th colspan="2">\${$data.childList[3].childList[3].childList[0].name}</th>
								<th>\${$data.childList[3].childList[3].childList[1].name}</th>
			                  </tr>
			                  <tr>
			                 	 <th>上游</th>
			                 	 <td style="width:100px">供应商</td>
			                 	 <td data-format='1_1' style="width:100px"></td>
			                 	 <td data-format='1_2'></td>
			               	 </tr>
							<tr>
			                  <th rowspan='2'>下游</th>
			                  <td style="width:100px">主要渠道</td>
			                  <td data-format='2_1' style="width:100px"></td>
			                  <td data-format='2_2'></td>
			                </tr>
			                <tr>
			                  <td style="width:100px">主要客户</td>
			                  <td data-format='3_1' style="width:100px"></td>
			                  <td data-format='3_2'></td>
			                </tr>

			                </table>
			              </dd>

					{{else type=="4"}}
					<dt data-type="\${type}">\${name}</dt>
					{{each(i,valueList) valueList}}
					<dd>未选择</dd>
					{{/each}}

					{{else type=="10"}}
					<dt data-type="\${type}">\${name}</dt>			 
						<dd class="fl_none"><table data-title-id="\${titleId}"></table></dd>
					{{else type=="11"}}
					<dd>项目带过来的数据</dd>

					{{else type=="12"}}
						<dt  data-type="\${type}" data-title-id="\${titleId}">\${name}</dt>
						<dd class="field" data-title-id="\${titleId}">未选择</dd>
					{{else type=="13"}}
						<dt data-type="\${type}" data-id="\${titleId}" data-title-id="\${titleId}" data-code="\${relateCode}" data-parentId="\${parentId}">\${name}</dt>
						<div class="checked_div clearfix">
						{{each(i,valueList) valueList}}
							<dd class="border_dd" data-value="\${value}" data-type="13" value="\${id}" data-title-id="\${id}" data-id="\${id}" data-code="\${code}" style="display:none;"></dd>
						{{/each}}
						<dd class="field">未选择</dd>
						</div>
					{{else type=="14"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${titleId}">未选择</dd>
					{{else type=="15"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>
						<dd class="fl_none field division_dd" data-title-id="\${titleId}">未填写</dd>
					{{else type=="16"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="fl_none field division_dd" data-title-id="\${titleId}" data-content="\${content}">未填写</dd>
					{{else type=="19"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${titleId}">未填写</dd>
						<dd class="field news_table">\${content}</dd>
					{{else type=="20"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${titleId}">未填写</dd>
						<dd class="field news_table">\${content}</dd>
						<dd class="field news_table"></dd>
					{{/if}}                      
					</dl>		
				</div>
			{{/if}}
		{{/if}}
	{{/each}}
  </div>
</div>
{{/each}}
</script>
<!-- 竞争编辑弹窗 -->
<script id="page_list_compete_edit" type="text/x-jquery-tmpl">
  <form id="b_\${code}" onsubmit="return false;">
<div class="h_edit section h_edit_competition">
	<input name="index" type="hidden" value="">
	<input name="id" type="hidden">
    <input name="titleId" type="hidden" value='\${id}'>
    <input name="subCode" type="hidden">
			<div class="h_btnbox">
				<span class="save-competeInfo-btn" attr-save="\${code}">保存</span>
				<span class="h_cancel_competeInfo_btn" data-on="h_cancel" attr-hide="\${code}" attr-session="\${id}">取消</span>
			</div>
			<div class="h_title h_title_conpetition">添加显在竞争对手</div>
			{{each(j,childList) childList}}
				{{if isShow=="f"}}
				<div class="mb_16">
				   <dl class="h_edit_txt clearfix">		
					{{if type=="1"}}
					<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
					<dd><input type="text" data-title-id="\${id}" name="field\${j+1}" data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" maxlength="\${valRuleMark}" placeholder="\${placeholder}"  data-must="\${isMust}"/></dd>

					{{else type=="2"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_radios clearfix">
							{{each(i,valueList) valueList}}
							<li><input type="radio" name="field\${j+1}" value="\${id}" data-title-id="\${titleId}" data-type="\${type}"  data-must="\${isMust}"/>\${name}</li>
							{{/each}}
						  </ul>
						</dd>

					{{else type=="3"}}
						<dt data-type="\${type}"  data-id="\${id}" data-code="\${code}" data-parentId="\${parentId}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_edit_checkbox clearfix" data-type="\${type}">
							{{each(i,valueList) valueList}}
							<li class="check_label" data-value="\${value}" data-title-id="\${titleId}" value="\${id}" data-id="\${id}" data-code="\${code}" data-type="\${type}">\${name}</li>
							{{/each}}
						  </ul>
						</dd>

					{{else type=="4"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						{{each(i,valueList) valueList}}
						<dd>
						  <select name="" id="" data-must="\${isMust}">
							<option value="">\${name}</option>
						  </select>
						</dd>
						{{/each}}

					{{else type=="5"}}
						<dt  data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd>
						<ul class="h_radios clearfix">
							{{each(i,valueList) valueList}}
							<li><input type="radio" data-value="\${value}" data-type="\${type}" placeholder="\${placeholder}"/>\${name}</li>
							{{/each}}
						  </ul>
						</dd>
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${titleId}" data-type="\${type}" data-parentId="\${parentId}" placeholder="\${placeholder}"></textarea>
							<p class="num_tj">
								<label for="">500</label>/500
							</p>
						</dd>

					{{else type=="6"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						{{each(i,valueList) valueList}}
							<dd class="check_label" data-value="\${value}" data-id="\${id}" data-code="\${code}">\${name}</dd>
						{{/each}}
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${id}" data-type="\${type}" placeholder="\${placeholder}" id="\${id}" onInput='countChar("\${id}","label_\${id}","\${valRuleMark}");'></textarea>
							<p class="num_tj">
								<label for="" id="label_\${id}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>

					{{else type=="7"}}
						<dt data-type="\${type}" data-must="\${isMust}" data-title-id="\${id}">\${name}</dt>
				        <dd class="fl_none clearfix">
				        <ul class="h_imgs mgedit"  id="edit-\${id}"></ul>
				        <ul class="h_imgs" id="edit-\${id}">
				        <li class="h_imgs_add" id="h_imgs_add_\${id}"><input type="file" file-title-id="\${id}" id="selected_file_\${id}"></li>
				        </ul>
				        </dd>
				        <dd class="fl_none red img_prompt">最多支持5张图片，最大上传大小2M，格式限定为jpg、png、gif、bmp</dd>

					{{else type=="8"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<textarea class="textarea_h" name="field\${j+1}" data-title-id="\${id}" data-type="\${type}" placeholder="\${placeholder}" id="\${id}" onInput='countChar("\${id}","label_\${id}","\${valRuleMark}");'  data-must="\${isMust}" name="\${id}"></textarea>
							<p class="num_tj">
								<label for="" id="label_\${id}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>
			        {{else type=="9"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
			                <table data-type="\${type}" data-test="\${id}" class="fixed_table">
			                  <tr>
			                    <th></th>
			                     <th colspan="2">\${$data.childList[4].childList[0].name}</th>
								<th>\${$data.childList[4].childList[1].name}</th>
			                  </tr>
			                   <tr>
			                 	 <th class="fixed_table_td">上游</th>
			                 	 <td class="fixed_table_td">供应商</td>
								{{each(i,childList) childList}}
			                 	 <td  data-flag="\${i+1}">
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
			                      		<li><input type="radio" data-title-id="\${id}" data-row="row1" name="row1_\${titleId}" value="\${id}" data-type="9"/>\${name}</li>
										{{/each}}

			                   		 </ul>
								</td>
								{{/each}} 
			               	 </tr>
									<tr>
			                 	 <th rowspan="2" class="fixed_table_td">下游</th>
			                 	 <td class="fixed_table_td">主要渠道</td>
								{{each(i,childList) childList}}
			                 	 <td data-flag="\${i+1}">
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
			                      		<li><input type="radio" data-title-id="\${id}" data-row="row2" name="row2_\${titleId}" value="\${id}" data-type="9"/>\${name}</li>
										{{/each}}

			                   		 </ul>
								</td>
								{{/each}} 
			               	 </tr>
							<tr>
			                 	 <td class="fixed_table_td">主要客户</td>
								{{each(i,childList) childList}}
			                 	 <td data-flag="\${i+1}">
									<ul class="h_radios clearfix">
										{{each(i,valueList) valueList}}
			                      		<li><input type="radio" data-title-id="\${id}" data-row="row3" name='row3_\${titleId}' value="\${id}" data-type="9"/>\${name}</li>
										{{/each}}

			                   		 </ul>
								</td>
								{{/each}} 
			               	 </tr>
			   
							

			                </table>
			              </dd>
					{{else type=="10"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<table data-title-id="\${id}"  class="editable">

							</table>
							<span class="pubbtn bluebtn margin_btn" onclick="addRow(this)">新增</span>
						  </dd>

					{{else type=="11"}}
					<dd>项目带过来的数据</dd>

					{{else type=="12"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
						<ul class="h_radios clearfix">
							{{each(i,valueList) valueList}}
							<li><input type="radio" value="\${id}" data-value="\${value}" name="\${titleId}" data-id="\${id}" data-code="\${code}" data-must="\${isMust}"/>\${name}</li>
							{{/each}}
							<li class="text_li"><input type="text" data-value="\${value}" disabled="true" name="\${id}" data-id="\${id}" data-code="\${code}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" maxlength="\${valRuleMark}"/></li>
						  </ul>
						</dd>
					{{else type=="13"}}
						<dt data-type="\${type}"  data-title-id="\${id}" data-id="\${id}" data-code="\${code}" data-parentId="\${parentId}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<ul class="h_radios h_edit_checkbox  clearfix" data-type="\${type}">
								{{each(i,valueList) valueList}}
								<li class="check_label" data-value="\${value}" data-title-id="\${titleId}" value="\${id}" data-id="\${id}" data-code="\${code}" data-type="\${type}">\${name}</li>
								{{/each}}
								<li class="text_li text_li_13"><input type="text" data-value="\${value}" disabled="true" name="\${id}" data-id="\${id}" data-code="\${code}"  placeholder="\${placeholder}" data-valrulemark="\${valRuleMark}" maxlength="\${valRuleMark}"/></li>
						 	 </ul>
						</dd>	
				
					{{else type=="14"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<select data-id="\${id}" data-must="\${isMust}" data-title-id="\${id}">
				       <option data-value="" data-type="\${type}" data-id="" data-title-id="\${id}" value="" data-code="">请选择</option>
						{{each(i,valueList) valueList}}
						<option data-value="\${value}" data-type="\${type}" data-id="\${id}" data-title-id="\${titleId}" value="\${id}" data-code="\${code}">\${name}</option>
						{{/each}}
						</select>
					{{else type=="15"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${id}" data-type="\${type}" placeholder="\${placeholder}" id="\${id}" onInput='countChar("\${id}","label_\${id}","\${valRuleMark}");'  data-must="\${isMust}" name="\${id}"></textarea>
							<p class="num_tj">
								<label for="" id="label_\${id}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>
							<dd class="fl_none">
							<textarea class="textarea_h" data-title-id="\${id}" data-type="\${type}" placeholder="\${content}" id="\${id}_2" onInput='countChar("\${id}_2","label2_\${id}","\${valRuleMark}");'  data-must="\${isMust}" name="\${id}"></textarea>
							<p class="num_tj">
								<label for="" id="label2_\${id}">\${valRuleMark}</label>/\${valRuleMark}
							</p>
						</dd>
					{{else type=="16"}}
						<dt data-type="\${type}" data-must="\${isMust}" class="inputs_block">\${name}</dt>
						<br/>
						<input data-type="\${type}" data-must="\${isMust}" class="hidden" data-title-id="\${id}" type="text"/>
						{{each(i,childList) childList}}
							<dt class="title_dt" data-type="\${type}" data-must="\${isMust}">\${name}</dt>
							{{each placeholder.split('&')}}
							<dd class="fl_none"><input class="big_input" data-title-id="\${id}" data-index="\${id}_\${$index+1}" data-valrule="\${valRule}" placeholder="\${placeholder.split('&')[$index]}" maxlength="\${valRuleMark}"/></dd>
							{{/each}}
						{{/each}}
					{{else type=="19"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd><input type="text" data-title-id="\${id}"  data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}" data-valRuleFormula="\${valRuleFormula}" data-must="\${isMust}" data-content="\${content}"/></dd>
						<dd>\${content}</dd>
					{{else type=="20"}}
						<dt data-type="\${type}" data-must="\${isMust}">\${name}</dt>
						<dd><input type="text" data-title-id="\${id}"  data-type="\${type}" data-valrule="\${valRule}" data-valrulemark="\${valRuleMark}" placeholder="\${placeholder}"  data-must="\${isMust}"/></dd>
						<dd class="tmpl_con">\${content}</dd>
						<dd>
							<select id="\${id}_select" class="valuationInfo_20_select">
							{{each(i,valueList) valueList}}
								<option data-value="\${value}" data-type="\${type}" data-id="\${id}" data-title-id="\${titleId}" value="\${id}" data-code="\${code}">\${name}</option>
							{{/each}}
							</select>
						</dd>

					{{/if}}
				  </dl>
				</div>
				{{/if}}
			{{/each}}
			<div class="h_edit_btnbox clearfix">
			  <span class="pubbtn bluebtn fl save-competeInfo-btn" data-on="save" attr-save="\${code}">保存</span>
			  <span class="pubbtn fffbtn fl h_cancel_competeInfo_btn" data-name="basic" data-on="h_cancel" attr-hide="\${code}" attr-session="\${id}">取消</span>
			</div>
		</div>
</form>
</script>
<!-- 竞争查看弹窗 -->
<script id="page_list_compete" type="text/x-jquery-tmpl">
  <div class="h_look h_team_look h_compete_look clearfix" id="\${code}">
{{if code=='NO5_4_1' || code=='NO5_5_1'}}
	<div class="h_title h_title_conpetition">查看显在竞争对手</div>
		<div class="h_btnbox">
			<span class="h_cancel_competeInfo_btn" data-on="h_cancel" attr-hide="\${code}" attr-session="\${id}">取消</span>
		</div>
	{{each(j,childList) childList}}   
			{{if isShow=="f"}}
				<div class="mb_24 clearfix">
				  <dl class="clearfix">
					{{if type=="1"}}
					<dt  data-type="\${type}" >\${name}</dt>  
                           <dd class="field" data-title-id="\${id}" name="field\${j+1}">未填写</dd>
					{{else type=="5"}}       
					<dt  data-type="\${type}">\${name}</dt>                 
					<dd data-value="\${value}" data-id="\${id}" data-code="\${code}">未选择</dd>
					<dd>备注</dd>

					{{else type=="2"}}
					<dt  data-type="\${type}">\${name}</dt>
					<dd class="field" data-value="\${value}" data-title-id="\${id}" data-code="\${code}" name="field\${j+1}">未选择</dd>

					{{else type=="3"}}
					<dt  data-type="\${type}" data-title-id="\${id}" >\${name}</dt>
					<div class="checked_div clearfix">
					{{each(i,valueList) valueList}}
					 <dd class="border_dd"  data-value="\${value}" data-type="3" value="\${id}" data-title-id="\${id}" data-id="\${id}" data-code="\${code}">未选择</dd>
					{{/each}}
					</div>

					{{else type=="6"}}
					<dt  data-type="\${type}" title-id="\${id}">\${name}</dt>
					{{each(i,valueList) valueList}}
					<dd data-value="\${value}" data-id="\${id}" data-code="\${code}">未选择</dd>
					{{/each}}
					<dd class="fl_none field division_dd" data-title-id="\${id}">未填写</dd>

					{{else type=="7"}}
					<dt data-type="\${type}">\${name}</dt>
					<dd class="mglook" id="look-\${id}" ata-value="\${value}" data-id="\${id}" data-code="\${code}">未添加
						</dd>

					{{else type=="8"}}
					<dt data-type="\${type}">\${name}</dt>
					<dd class="fl_none field division_dd" data-title-id="\${id}" name="field\${j+1}">未填写</dd>
			         {{else type=="9"}}
					<dt data-type="\${type}">\${name}</dt>
						<dd class="fl_none">
			                <table>
			                  <tr>
			                    <th></th>
			                    <th colspan="2">\${$data.childList[3].childList[4].childList[0].name}</th>
								<th>\${$data.childList[3].childList[4].childList[1].name}</th>
			                  </tr>
			                  <tr>
			                 	 <th>上游</th>
			                 	 <td style="width:100px">供应商</td>
			                 	 <td data-format='1_1' style="width:100px"></td>
			                 	 <td data-format='1_2'></td>
			               	 </tr>
							<tr>
			                  <th rowspan='2'>下游</th>
			                  <td style="width:100px">主要渠道</td>
			                  <td data-format='2_1' style="width:100px"></td>
			                  <td data-format='2_2'></td>
			                </tr>
			                <tr>
			                  <td style="width:100px">主要客户</td>
			                  <td data-format='3_1' style="width:100px"></td>
			                  <td data-format='3_2'></td>
			                </tr>

			                </table>
			              </dd>

					{{else type=="4"}}
					<dt data-type="\${type}">\${name}</dt>
					{{each(i,valueList) valueList}}
					<dd>未选择</dd>
					{{/each}}

					{{else type=="10"}}
					<dt data-type="\${type}">\${name}</dt>			 
						<dd class="fl_none"><table data-title-id="\${id}"></table></dd>
					{{else type=="11"}}
					<dd>项目带过来的数据</dd>

					{{else type=="12"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${id}">未选择</dd>
					{{else type=="13"}}
						<dt data-type="\${type}" data-id="\${id}" data-title-id="\${id}" data-code="\${code}" data-parentId="\${parentId}">\${name}</dt>
						<div class="checked_div clearfix">
						{{each(i,valueList) valueList}}
							<dd class="border_dd" data-value="\${value}" data-type="13" value="\${id}" data-title-id="\${id}" data-id="\${id}" data-code="\${code}" style="display:none;"></dd>
						{{/each}}
						<dd class="field">未选择</dd>
						</div>
					{{else type=="14"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${id}">未选择</dd>
					{{else type=="15"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="fl_none field division_dd" data-title-id="\${id}">未填写</dd>
						<dd class="fl_none field division_dd" data-title-id="\${id}">未填写</dd>
					{{else type=="16"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="fl_none field division_dd" data-title-id="\${id}" data-content="\${content}">未填写</dd>
					{{else type=="19"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${id}">未填写</dd>
						<dd class="field news_table">\${content}</dd>
					{{else type=="20"}}
						<dt  data-type="\${type}">\${name}</dt>
						<dd class="field" data-title-id="\${id}">未填写</dd>
						<dd class="field news_table">\${content}</dd>
						<dd class="field news_table"></dd>
					{{/if}}                      
					</dl>		
				</div>
			{{/if}}
	{{/each}}
		{{/if}}
  </div>
</script>

