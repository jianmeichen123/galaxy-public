/* 通用验证 */
function validate(){
	 var inputs=$("input[type='text']");
	 for(var i=0;i<inputs.length;i++){
		 	var inputValRule=inputs.eq(i).attr("data-valrule");
			var inputValRuleMark=inputs.eq(i).attr("data-valrulemark");
			if(inputValRule=="2" && inputValRuleMark=="3"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_2":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_2":"<font color=red>*</font>支持0～999的整数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="2" && inputValRuleMark=="2"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_1":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_1":"<font color=red>*</font>支持0～99的整数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="3" && inputValRuleMark=="3"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_3":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_3":"<font color=red>*</font>支持0～100的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="3" && inputValRuleMark=="ok"){
				var validate={
						//"regString":"^[0-9]{1,3}$",
						"data-rule-vinputValRule_3":"true",
						//"required":"required",
						"name":i,
						"data-msg-vinputValRule_3":"<br/><font color=red>*</font>支持0～100的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="10,2"){
				var validate={
						"data-rule-verify_102":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_102":"<font color=red>*</font>支持0～9999999999的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="8,2"){
				var validate={
						"data-rule-verify_82":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_82":"<font color=red>*</font>支持0～99999999的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="9,4"){
				var validate={
						"data-rule-verify_82":"true",
						"name":i,
						//"required":"required",
						//"regString":"^(([1-9][0-9]{0,9})|([0-9]{1,10}\.[1-9]{1,2})|([0-9]{1,10}\.[0][1-9]{1})|([0-9]{1,10}\.[1-9]{1}[0])|([1-9][0-9]{0,9}\.[0][0]))$",
						"data-msg-verify_82":"<br><font color=red>*</font>支持0～99999999的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="3,2"){
				var validate={
						"data-rule-verify_32":"true",
						//"required":"required",	
						"name":i,
						//"msg":"^(?:[1-9][0-9]?|1[01][0-9]|100)$",
						"data-msg-verify_32":"<font color=red>*</font>支持0～100的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="5,2"){
				var validate={
						"data-rule-verify_52":"true",
						//"required":"required",
						"name":i,
						//"regString":"^(([1-9][0-9]{0,4})|([0-9]{1,5}\.[1-9]{1,2})|([0-9]{1,5}\.[0][1-9]{1})|([0-9]{1,5}\.[1-9]{1}[0])|([1-9][0-9]{0,4}\.[0][0]))$",
						"data-msg-verify_52":"<font color=red>*</font>支持0～99999的整数和两位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="40"){
				var validate={
						"data-rule-verify_40":"true",
						"name":i,
						"data-msg-verify_40":"<font color=red>*</font>不能为空"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRuleMark=="100"){
				var validate={
						"data-rule-verify_100":"true",
						"name":i,
						"data-msg-verify_100":"<font color=red>*</font>不能为空"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="4"){
				var validate={
						"data-rule-vinputValRule_4":"true",
						//"required":"required",
						"name":i,
						//"regString":"^(([1-9][0-9]{0,4})|([0-9]{1,5}\.[1-9]{1,2})|([0-9]{1,5}\.[0][1-9]{1})|([0-9]{1,5}\.[1-9]{1}[0])|([1-9][0-9]{0,4}\.[0][0]))$",
						"data-msg-vinputValRule_4":"<font color=red>*</font>只允许输入数字0~168整数和一位小数"			
				}
				inputs.eq(i).attr(validate);
			}else if(inputValRule=="5"){
				var add_time =i+"_time";
				var validate={
						"class":"time",	
						"data-time":add_time
				}
				inputs.eq(i).attr(validate);
				$("[data-time="+add_time+"]").datepicker({
					language:  'zh-CN',
			        format: 'yyyy-mm',
			        autoclose: true,
			        todayBtn: false,
			        startView: 'year',
			        minView:'year',
	                minViewMode: 1,
	                maxView:'decade',
	                todayHighlight: false
		    	});
			}
	 }
	
	
}
//配置错误提示的节点，默认为label，这里配置成 span （errorElement:'span'）
$.validator.setDefaults({
	errorElement:'span'
});
//inputValRuleMark=="10,2"
jQuery.validator.addMethod("verify_102", function(value, element) {   
	var verify_102 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,9})(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_102.test(value));
}, "不能超过9999999999");
//inputValRuleMark=="8,2"
jQuery.validator.addMethod("verify_82", function(value, element) {   
	var verify_82 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,7})(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_82.test(value));
}, "不能超过99999999");
//vinputValRule=="2"
jQuery.validator.addMethod("vinputValRule_2", function(value, element) {   
	var vinputValRule_2 = /^([1-9]{1}[0-9]{0,2})$/;;
	return this.optional(element) || (vinputValRule_2.test(value));
}, "不能超过100"); 
jQuery.validator.addMethod("vinputValRule_1", function(value, element) {   
	var vinputValRule_1 = /^([1-9]{1}[0-9]{0,1}|0)$/;;
	return this.optional(element) || (vinputValRule_1.test(value));
}, "不能超过100")
//vinputValRule=="3"
jQuery.validator.addMethod("vinputValRule_3", function(value, element) {   
	var vinputValRule_3 = /^(\d|[1-9]\d?(\.\d{1,2})?|0\.\d{1,2}|100|100\.0{1,2})$/;
	return this.optional(element) || (vinputValRule_3.test(value));
}, "不能超过100"); 
//inputValRuleMark=="3,2"
jQuery.validator.addMethod("verify_32", function(value, element) {   
	var verify_32 = /^(\d|[1-9]\d?(\.\d{1,2})?|0\.\d{1,2}|100|100\.0{1,2})$/;
	return this.optional(element) || (verify_32.test(value));
}, "不能超过100"); 
//inputValRuleMark=="5,2"
jQuery.validator.addMethod("verify_52", function(value, element) {   
	var verify_52 = /^(\d(\.\d{1,2})?|([1-9][0-9]{1,4})?(\.\d{1,2})?)$/;
	return this.optional(element) || (verify_52.test(value));
}, "不能超过99999"); 
//inputValRuleMark=="40"
jQuery.validator.addMethod("verify_40", function(value, element) {   
	var verify_40 = /^(?!.{41}|^\s*$)/;
	return this.optional(element) || (verify_40.test(value));
}, "不能全为空格"); 
//inputValRuleMark=="100"
jQuery.validator.addMethod("verify_100", function(value, element) {   
	var verify_100 = /^(?!.{101}|^\s*$)/;
	return this.optional(element) || (verify_100.test(value));
}, "不能全为空格");
//inputValRule=="4"
jQuery.validator.addMethod("vinputValRule_4", function(value, element) { 
	var vinputValRule_4 = /^(((([1-9]{1}[0-9]{0,1}|0)|([1][0-5][0-9])|([1][6][0-7]))(\.\d{1})?)|168|168.0)$/;
	return this.optional(element) || (vinputValRule_4.test(value));
}, "不能超过168"); 
//百分数
jQuery.validator.addMethod("percentage", function(value, element) {   
	var percentage = /^\d+(\.\d{2})?$/;
	return this.optional(element) || (percentage.test(value) && value>0 && value <=100);
}, "只能是0～100的整数和两位小数"); 