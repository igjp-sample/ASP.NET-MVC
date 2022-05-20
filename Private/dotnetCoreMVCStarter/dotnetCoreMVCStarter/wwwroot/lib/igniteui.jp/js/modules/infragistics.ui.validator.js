/*!@license
* Infragistics.Web.ClientUI Editors 21.1.25
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
* Depends on:
* jquery-1.9.1.js
* jquery.ui.core.js
* jquery.ui.widget.js
* infragistics.util.js
* infragistics.util.jquery.js
* infragistics.ui.widget.js
* infragistics.ui.popover.js
* infragistics.ui.notifier.js

* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$('#text1').igValidator({ minLength: 3 });
*	});
*	</script>
*	<input id="text1" type="text" />
*/
"use strict";(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.widget","./infragistics.ui.notifier"],factory)}else{return factory(jQuery)}})(function($){/*!@license
* Infragistics.Web.ClientUI Validator localization resources 21.1.25
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};$.ig.Validator=$.ig.Validator||{};$.ig.locale=$.ig.locale||{};$.ig.locale.ja=$.ig.locale.ja||{};$.ig.locale.ja.Validator={defaultMessage:"\u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u7121\u52b9\u3067\u3059",selectMessage:"\u5024\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",rangeSelectMessage:"{0} \u4ee5\u4e0a\u3067 {1} \u4ee5\u4e0b\u306e\u9805\u76ee\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",minSelectMessage:"{0} \u9805\u76ee\u4ee5\u4e0a\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",maxSelectMessage:"{0} \u9805\u76ee\u4ee5\u4e0b\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",rangeLengthMessage:"\u5165\u529b\u306e\u9577\u3055\u306f {0} \uff5e {1} \u306e\u9593\u306e\u6587\u5b57\u6570\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",minLengthMessage:"\u5165\u529b\u306e\u9577\u3055\u306f\u5c11\u306a\u304f\u3068\u3082 {0} \u6587\u5b57\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",maxLengthMessage:"\u5165\u529b\u306e\u9577\u3055\u306f {0} \u6587\u5b57\u4ee5\u4e0b\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",requiredMessage:"\u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u5fc5\u9808\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u3059\u3002",patternMessage:"\u5165\u529b\u304c\u6240\u5b9a\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u4e00\u81f4\u3057\u307e\u305b\u3093",maskMessage:"\u3059\u3079\u3066\u306e\u5fc5\u9808\u306a\u6587\u5b57\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",dateFieldsMessage:"\u65e5\u4ed8\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",invalidDayMessage:"\u6708\u306e\u6709\u52b9\u306a\u65e5\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",dateMessage:"\u6709\u52b9\u306a\u65e5\u4ed8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",numberMessage:"\u6709\u52b9\u306a\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",rangeValueMessage:"{0} ~ {1} \u306e\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",minValueMessage:"{0} \u4ee5\u4e0a\u306e\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",maxValueMessage:"{0} \u4ee5\u4e0b\u306e\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",emailMessage:"\u6709\u52b9\u306a\u30e1\u30fc\u30eb \u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",creditCardMessage:"\u6709\u52b9\u306a\u30af\u30ec\u30b8\u30c3\u30c8 \u30ab\u30fc\u30c9\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",equalToMessage:"2 \u3064\u306e\u5024\u306f\u4e00\u81f4\u3057\u307e\u305b\u3093",optionalString:"(\u30aa\u30d7\u30b7\u30e7\u30f3)"};$.ig.Validator.locale=$.ig.Validator.locale||$.ig.locale.ja.Validator;return $.ig.locale.ja.Validator})($);$.widget("ui.igValidator",$.ui.igWidget,{options:{onchange:false,onblur:true,onsubmit:true,required:false,number:false,date:false,email:false,lengthRange:null,valueRange:null,creditCard:false,pattern:null,executeAllRules:false,messageTarget:null,errorMessage:null,successMessage:null,threshold:-1,equalTo:null,custom:null,fields:[{selector:null}],notificationOptions:null,requiredIndication:false,optionalIndication:false},css:{target:"ui-igvalidator-target",requiredIndication:"ui-igvalidator-required-indication",optionalIndication:"ui-igvalidator-optional-indication"},events:{validating:"validating",validated:"validated",success:"success",error:"error",errorShowing:"errorShowing",errorHiding:"errorHiding",errorShown:"errorShown",errorHidden:"errorHidden",successShowing:"successShowing",successHiding:"successHiding",successShown:"successShown",successHidden:"successHidden",formValidating:"formValidating",formValidated:"formValidated",formError:"formError",formSuccess:"formSuccess"},notifierDefaults:{state:"error"},rules:[],summaryResult:false,_createWidget:function(){delete this.options.fields;$.Widget.prototype._createWidget.apply(this,arguments)},_create:function(){this._formHandleCounter=0;this._fieldOptions=this.options.fields?$.extend([],this.options.fields):null;var shouldHandleForm=false;if(this.options.fields){for(var i=0;i<this.options.fields.length;i++){var options=this.options.fields[i];this._initializeField($(options.selector),options);if(options.onsubmit!==undefined?options.onsubmit:this.options.onsubmit){shouldHandleForm=true;this._formHandleCounter++}}}else{this._initializeField(this.element,this.options)}this._attachToForm(shouldHandleForm||this.options.onsubmit);this._initializeRules()},_setOption:function(option,value){var i;switch(option){case"notificationOptions":this.options.notificationOptions=value;this._updateNotifiers();break;case"onchange":case"onblur":if(!this.options.fields&&!this.options._control){this.element.unbind(".validator");this._attachFieldEvents(this.element)}break;case"onsubmit":if(this.options.onsubmit===value){break}if(this.options.fields){for(i=0;i<this.options.fields.length;i++){if(this.options.fields[i].onsubmit===undefined){if(value){if(!this._formHandleCounter){this._attachToForm(true)}this._formHandleCounter++}else if(!--this._formHandleCounter){this._detachFromForm()}}}}break;case"messageTarget":var oldVisible=this._fieldMessageVisible(this.options);this._clearMessageTarget(this.options);this._hideSuccess(this.options);this._hideError(this.options);this.options.messageTarget=value;this._evalMessageTarget(this.options);if(oldVisible){if(this.options.isValid){this._showSuccess(this.options,{message:this.options._currentMessages[0]})}else{this._showError(this.options,{messages:this.options._currentMessages})}}break;case"errorMessage":case"successMessage":this._hideError(this.options);this._hideSuccess(this.options);break;case"requiredIndication":case"optionalIndication":if(this.options.fields){for(i=0;i<this.options.fields.length;i++){this._removeFieldIndications(this.options.fields[i]);this.options[option]=value;this._addFieldIndications(this.options.fields[i])}}else{this._removeFieldIndications(this.options);this.options[option]=value;this._addFieldIndications(this.options)}break;case"fields":return;default:break}this._super(option,value)},_initializeRules:function(){this.rules=[];this.rules.push(new $.ig.igValidatorRequiredRule(this));this.rules.push(new $.ig.igValidatorControlRule(this));this.rules.push(new $.ig.igValidatorNumberRule(this));this.rules.push(new $.ig.igValidatorDateRule(this));this.rules.push(new $.ig.igValidatorLengthRule(this));this.rules.push(new $.ig.igValidatorValueRule(this));this.rules.push(new $.ig.igValidatorEqualToRule(this));this.rules.push(new $.ig.igValidatorEmailRule(this));this.rules.push(new $.ig.igValidatorCreditCardRule(this));this.rules.push(new $.ig.igValidatorPatternRule(this));this.rules.push(new $.ig.igValidatorCustomRule(this))},_initializeField:function(element,options){var target=element;if(!target.length){options._ignored=true;return}options._control=this._getEditor(target);if(options._control){this._form=this._form||target.closest("form").get(0);if(options._control.widgetName==="igCombo"){options._type="selectrange"}else if(options._control.widgetName==="igRating"){options._type="select"}if(options._control._options){options._control._options.validator=this}else{options._control._validator=this}}else{var elemType=target[0].tagName;switch(elemType){case"INPUT":if(target[0].type==="checkbox"){options._group=this._findGroupTargets(target);options._type=options._group.length>1?"checkboxrange":"checkbox";target=options._group}else if(target[0].type==="radio"){options._group=this._findGroupTargets(target);options._type="radio";target=options._group}else{options._type="input"}break;case"TEXTAREA":options._type="textarea";break;case"SELECT":if(target[0].multiple){options._type="selectrange"}else{options._type="select"}break;case"FORM":this._form=this._form||target[0];options._ignored=true;return;default:this._form=this._form||target.closest("form").get(0);options._ignored=true;return}this._attachFieldEvents(target)}options._ignored=false;target.addClass(this.css.target);target.data("igValidatorField",options);options.notifyTarget=this._targetFromOptions(options,true);this._evalMessageTarget(options);this._ensureNotifier(options,true);this._addFieldIndications(options)},_findGroupTargets:function(target){if(target[0].name){return $("[name="+target[0].name+"]",target[0].form||document)}return target},_attachFieldEvents:function(element){var self=this,evts={"keyup.validator":function(e){if(e.keyCode!==9&&e.keyCode<15||e.keyCode>20){self._validateInternal(element,e)}},"change.validator":function(e){self._validateInternal(element,e)},"cut.validator":function(e){setTimeout(function(){self._validateInternal(element,e)},10)},"paste.validator":function(e){setTimeout(function(){self._validateInternal(element,e)},10)},"drop.validator":function(e){setTimeout(function(){self._validateInternal(element,e)},10)},"dragend.validator":function(e){setTimeout(function(){self._validateInternal(element,e)},10)},"blur.validator":function(e){self._validateInternal(element,e,true)}};element.bind(evts)},_ensureNotifier:function(options,reinit){if(reinit&&options.notifyTarget.data("igNotifier")){options.notifyTarget.igNotifier("destroy").unbind(".validator")}if(!options.notifyTarget.data("igNotifier")){var args={owner:this,target:options.notifyTarget,fieldOptions:options===this.options?null:options};options.notifyTarget.igNotifier($.extend({},this.notifierDefaults,this.options.notificationOptions,options.notificationOptions)).bind({"ignotifiershowing.validator":function(evt,ui){return args.owner._handleNotifierEvent(evt,ui,"Showing",args)},"ignotifiershown.validator":function(evt,ui){return args.owner._handleNotifierEvent(evt,ui,"Shown",args)},"ignotifierhiding.validator":function(evt,ui){return args.owner._handleNotifierEvent(evt,ui,"Hiding",args)},"ignotifierhidden.validator":function(evt,ui){return args.owner._handleNotifierEvent(evt,ui,"Hidden",args)}})}},_updateNotifiers:function(){if(this.options.fields){for(var i=0;i<this.options.fields.length;i++){this._ensureNotifier(this.options.fields[i],true)}}else{this._ensureNotifier(this.options,true)}},_clearMessageTarget:function(options){if(options._$messageTarget){options._$messageTarget.removeClass("field-validation-valid field-validation-error").empty().css("display","")}},_evalMessageTarget:function(options){options._$messageTarget=options.messageTarget;if(typeof options._$messageTarget==="string"){var target=$("[data-valmsg-for='"+options._$messageTarget+"']");options._$messageTarget=target.length?target:$(options._$messageTarget)}if(options._$messageTarget instanceof $){if(options._$messageTarget.length){options._$messageTarget.hide()}else{options._$messageTarget=null}}},_addFieldIndications:function(options){var ops,target=options.notifyTarget;if(options._group&&options._group.length>1||options._control&&options._control.widgetName==="igRating"){return}if(options._control!==null&&options._control.widgetName==="igCombo"){target=target.parent()}ops=this._addGlobalSettings(options);if(ops.required&&ops.requiredIndication){options._$indicator=target.after("<span title='"+this._getLocalizedMessage("required")+"' class='"+this.css.requiredIndication+"'>*</span>").next()}if(!ops.required&&ops.optionalIndication){options._$indicator=target.after("<span class='"+this.css.optionalIndication+"'>"+this._getLocalizedMessage("optional","String")+"</span>").next()}},_removeFieldIndications:function(options){if(options._$indicator){options._$indicator.hide();options._$indicator.remove();delete options._$indicator}},_attachToForm:function(shouldHandleForm){this._form=this._form||this.element[0].form||this.element.closest("form").get(0);if(!this._form||!shouldHandleForm){return}if(!this._form._igValidators||!this._form._igValidators.length){this._form._igValidators=[];$(this._form).bind("submit.validator",function(e){this._igErrorShown=false;var summaryResult=true,current;for(var i=0;i<this._igValidators.length;i++){current=this._igValidators[i]._validateForm(e);summaryResult=summaryResult?current:summaryResult}if(!summaryResult){e.preventDefault();e.stopPropagation()}delete this._igErrorShown})}this._form._igValidators.push(this)},_detachFromForm:function(){var index;if(this._form&&(index=$.inArray(this,this._form._igValidators))>-1){this._form._igValidators.splice(index,1);if(!this._form._igValidators.length){$(this._form).unbind("submit.validator")}}},_validate:function(field,evt,isSubmitting){var current,i,valid=true;if(this.options.fields){if(field!==undefined&&(i=this._fieldIndexOf(field))>-1){field=this.options.fields[i];valid=field.isValid=this._validateField(field,evt,isSubmitting)}else{for(i=0;i<this.options.fields.length;i++){field=this.options.fields[i];current=field.isValid=this._validateField(field,evt,isSubmitting);valid=valid?current:valid}}}else{valid=this._validateField(this.options,evt,isSubmitting);this.options.isValid=valid}return valid},_validateForm:function(evt){var valid=true,args={owner:this,target:$(evt.target)};if(this._trigger(this.events.formValidating,evt,args)){args.valid=valid=this._validate(null,evt,true);this._trigger(this.events.formValidated,evt,args);this._trigger(valid?this.events.formSuccess:this.events.formError,evt,args)}return valid},_errorOnSubmitAllowed:function(){if(!$.ui.igValidator.defaults.showAllErrorsOnSubmit&&this._form&&this._form._igErrorShown!==undefined){return!this._form._igErrorShown}return true},_addErrorOnSubmit:function(){if(!$.ui.igValidator.defaults.showAllErrorsOnSubmit&&this._form&&this._form._igErrorShown!==undefined){this._form._igErrorShown=true}},_validateInternal:function(element,evt,blur,value){element=element||evt&&(element=$(evt.target).closest("."+this.css.target)).length||this.element;var field=element.data("igValidatorField");if(field){field.isValid=this._validateField(field,evt||{},false,value,blur);return field.isValid}if(value!==undefined){this.options.isValid=this._validateField(this.options,evt||{},false,value,blur);return this.options.isValid}else{return this._validate(null,evt||{})}},_validateField:function(opts,evt,isSubmitting,value,blur){if(opts._ignored){return true}var options=this._addGlobalSettings(opts),valueString,hasLength,args,result=true,rule,ruleResult,ruleMessage;value=value!==undefined?value:this._getTargetValue(options);valueString=value!==0?value&&value.toString():value.toString();hasLength=valueString&&value.length!==undefined;if(isSubmitting&&!options.onsubmit){return true}if(!this._forceValidation&&!isSubmitting){if(blur&&!options.onblur||!blur&&!options.onchange){return true}if(options.hasOwnProperty("threshold")&&hasLength&&value.length<=options.threshold){return true}}args={value:value,owner:this,fieldOptions:options===this.options?null:opts};if(evt&&!this._trigger(this.events.validating,evt,args)){return true}args.messages=opts._currentMessages=[];args.rules=[];for(var i=0;i<this.rules.length;i++){rule=this.rules[i];if(!rule.shouldRun(options,valueString)){if(rule.name==="required"&&!valueString&&!options.executeAllRules){break}continue}ruleResult=rule.isValid(options,value);result=result?ruleResult:result;if(!ruleResult){ruleMessage=rule.getRuleMessage(options)||this._getLocalizedMessage(rule.getMessageType(options));ruleMessage=rule.formatMessage(ruleMessage);args.messages.push(ruleMessage);args.rules.push(rule.name);if(!options.executeAllRules){break}}}if(result){if(options.successMessage){args.messages.push(options.successMessage)}delete args.rules;this._success(options,args,evt);return true}else{args.rule=args.rules[0];this._showError(options,args,evt);return false}},_success:function(options,args,evt){args.valid=true;args.message=args.messages[0]||null;if(evt){this._trigger(this.events.validated,evt,args);this._trigger(this.events.success,evt,args)}this._showSuccess(options,args,evt)},_showError:function(options,args,evt){args.valid=false;if(args.messages.length&&options.executeAllRules){args.message="<ul><li>"+args.messages.join("</li><li>")+"</li></ul>"}else{args.message=args.messages[0]||null}if(evt){this._trigger(this.events.validated,evt,args);this._trigger(this.events.error,evt,args)}if(this._skipMessages||!this._errorOnSubmitAllowed()){return}this._hideSuccess(options,evt);args={owner:this,message:args.message,target:options._$messageTarget?options._$messageTarget:options.notifyTarget,fieldOptions:args.fieldOptions};if(evt&&!this._trigger(this.events.errorShowing,evt,args)){return}this._ensureNotifier(options);if(options._$messageTarget){options._$messageTarget.removeClass("field-validation-valid").addClass("field-validation-error").html(args.message).show();options.notifyTarget.data("igNotifier")._setOption("state","error");options.notifyTarget.data("igNotifier")._setTargetState()}else{options.notifyTarget.igNotifier("notify","error",args.message)}if(evt){this._trigger(this.events.errorShown,evt,args)}this._addErrorOnSubmit()},_hideError:function(options,evt){var notifier=options._$messageTarget||options.notifyTarget.data("igNotifier"),args={owner:this,target:options._$messageTarget||options.notifyTarget,message:notifier._currentText||options._$messageTarget&&options._$messageTarget.text(),fieldOptions:options===this.options?null:options};if(this._hasVisibleError(options)){if(evt&&!this._trigger(this.events.errorHiding,evt,args)){return}notifier.hide();options.notifyTarget.data("igNotifier")._setTargetState(true);if(evt){this._trigger(this.events.errorHidden,evt,args)}}},_showSuccess:function(options,args,evt){if(this._skipMessages){return}this._hideError(options,evt);if(args.message){args={owner:this,message:args.message,target:options._$messageTarget?options._$messageTarget:options.notifyTarget,fieldOptions:args.fieldOptions};if(evt&&!this._trigger(this.events.successShowing,evt,args)){return}this._ensureNotifier(options);if(options._$messageTarget){options._$messageTarget.removeClass("field-validation-error").addClass("field-validation-valid").html(args.message).show();options.notifyTarget.data("igNotifier")._setOption("state","success");options.notifyTarget.data("igNotifier")._setTargetState()}else{options.notifyTarget.igNotifier("notify","success",args.message)}if(evt){this._trigger(this.events.successShown,evt,args)}}},_hideSuccess:function(options,evt){var notifier=options._$messageTarget||options.notifyTarget.data("igNotifier"),args={owner:this,target:options._$messageTarget||options.notifyTarget,message:notifier._currentText||options._$messageTarget&&options._$messageTarget.text(),fieldOptions:options===this.options?null:options};if(this._hasVisibleSuccess(options)){if(evt&&!this._trigger(this.events.successHiding,evt,args)){return}notifier.hide();if(evt){this._trigger(this.events.successHidden,evt,args)}}},_handleNotifierEvent:function(evt,ui,type,args){var state=ui.owner.options.state;args.message=ui.owner._currentText;if(state==="error"){return args.owner._trigger(this.events["error"+type],evt,args)}else if(state==="success"){return args.owner._trigger(this.events["success"+type],evt,args)}return true},_getTargetValue:function(options){if(options._control){if(options._control.options.checked!==undefined){return options._control.options.checked}else if(options._control.refreshValue&&options._control.options.allowCustomValue){options._control.refreshValue()}return options._control.value()}var $target=this._targetFromOptions(options);if(!$target.length){return null}switch(options._type){case"textarea":return $target.val().replace(/\r?\n/g,"\r\n");case"checkbox":return $target[0].checked;case"radio":case"checkboxrange":return options._group.filter(":checked").map(function(){return this.value}).get();case"input":case"select":case"selectrange":return $target.val()}return $target.val&&$target.val()},_getLocalizedMessage:function(key,postfix){key+=postfix||"Message";var message=this._getLocaleValue(key);if(!message&&$.ig&&$.ig.Validator&&$.ig.Validator.locale){message=this._getLocaleValue(key)}return message||""},_targetFromOptions:function(options,outer){if(outer&&options._control){if(options._control.editorContainer){return options._control.editorContainer()}else if(options._control.comboWrapper){return options._control.comboWrapper().children().first()}}if(options.selector){return options.selector instanceof $?options.selector:$(options.selector)}else{return this.element}},_getEditor:function(elem){var widgets=elem.data(),controls=["Editor","Combo","Rating","DatePicker","TimePicker"],regEx=new RegExp("ig.*?("+controls.join("|")+")");for(var i in widgets){if(widgets[i].widgetName&&regEx.test(widgets[i].widgetName)){return widgets[i]}}return null},_cleanupField:function(options){var element=this._targetFromOptions(options||this.options);element.unbind(".validator");if(options.notifyTarget&&options.notifyTarget.data("igNotifier")){options.notifyTarget.igNotifier("destroy").unbind(".validator")}this._clearMessageTarget(options);if(element.data("igValidatorField")){element.removeData("igValidatorField")}this._removeFieldIndications(options);if(options._control){if(options._control._options){options._control._options.validator=null}else{options._control._validator=null}}element.removeClass(this.css.target)},_addGlobalSettings:function(options){if(options===this.options){return options}var properties=["required","threshold","number","date","lengthRange","valueRange","email","creditCard","custom","onblur","onchange","onsubmit","successMessage","errorMessage","requiredIndication","optionalIndication","executeAllRules"],extendedOptions=$.extend({},options);for(var i=0;i<properties.length;i++){if(!options.hasOwnProperty(properties[i])&&this.options[properties[i]]!==null){extendedOptions[properties[i]]=this.options[properties[i]]}}return extendedOptions},_indexOfByProperty:function(array,property,value){for(var i=0;i<array.length;i++){if(array[i][property]&&array[i][property]===value){return i}}return-1},_hasVisibleSuccess:function(options){if(this._fieldMessageVisible(options)){if(options._$messageTarget&&options._$messageTarget.hasClass("field-validation-valid")){return true}else{return options.notifyTarget.data("igNotifier").options.state==="success"}}return false},_hasVisibleError:function(options){if(this._fieldMessageVisible(options)){if(options._$messageTarget&&options._$messageTarget.hasClass("field-validation-error")){return true}else{return options.notifyTarget.data("igNotifier").options.state==="error"}}return false},_fieldMessageVisible:function(options){if(options._$messageTarget){return options._$messageTarget.is(":visible")}if(options.notifyTarget.data("igNotifier")){return options.notifyTarget.data("igNotifier").isVisible()}return false},_fieldIndexOf:function(fieldParam){var index=-1;if(typeof fieldParam==="number"&&this.options.fields[fieldParam]){return fieldParam}if(typeof fieldParam==="string"){index=this._indexOfByProperty(this.options.fields,"selector",fieldParam)}if(typeof fieldParam==="object"){index=$.inArray(fieldParam,this.options.fields)}if(index>=this.options.fields.length){return-1}return index},validate:function(field){var valid;this._forceValidation=true;valid=this._validate(field);this._forceValidation=false;return valid},isValid:function(field){this._skipMessages=true;var valid=this.validate(field);this._skipMessages=false;return valid},hide:function(field){var i;if(this.options.fields){if(field!==undefined){if((i=this._fieldIndexOf(field))>-1){this._hideError(this.options.fields[i]);this._hideSuccess(this.options.fields[i])}return}for(i=0;i<this.options.fields.length;i++){if(this.options.fields[i].isValid!==undefined){this._hideError(this.options.fields[i]);this._hideSuccess(this.options.fields[i])}}}else{this._hideError(this.options);this._hideSuccess(this.options)}},getErrorMessages:function(field){var result=[],i;if(this.options.fields){if(field!==undefined){if((i=this._fieldIndexOf(field))>-1&&this.options.fields[i].isValid!==undefined&&!this.options.fields[i].isValid){Array.prototype.push.apply(result,this.options.fields[i]._currentMessages)}return result}for(i=0;i<this.options.fields.length;i++){if(this.options.fields[i].isValid!==undefined&&!this.options.fields[i].isValid){Array.prototype.push.apply(result,this.options.fields[i]._currentMessages)}}}else if(this.options.isValid!==undefined&&!this.options.isValid){Array.prototype.push.apply(result,this.options._currentMessages)}return result},isMessageDisplayed:function(field){var result=false,i;if(this.options.fields){if(field!==undefined){if((i=this._fieldIndexOf(field))>-1){result=!result?this._fieldMessageVisible(this.options.fields[i]):result}return result}for(i=0;i<this.options.fields.length;i++){result=!result?this._fieldMessageVisible(this.options.fields[i]):result}}else{result=this._fieldMessageVisible(this.options)}return result},notifier:function(field){var i,notifier;if(field!==undefined&&this.options.fields&&(i=this._fieldIndexOf(field))>-1){notifier=this.options.fields[i].notifyTarget&&this.options.fields[i].notifyTarget.data("igNotifier")}else{notifier=this.options.notifyTarget&&this.options.notifyTarget.data("igNotifier")}return notifier||null},addField:function(field){if(!this.options.fields){return}this.options.fields.push(field);this._initializeField($(field.selector),field);var options=this._addGlobalSettings(field);if(options.onsubmit){if(!this._formHandleCounter){this._attachToForm(true)}this._formHandleCounter++}},removeField:function(field){if(!this.options.fields){return}var index=this._fieldIndexOf(field);if(index>-1){var removed=this.options.fields.splice(index,1)[0],options=this._addGlobalSettings(removed);this._cleanupField(removed);if(options.onsubmit&&!--this._formHandleCounter){this._detachFromForm()}}},updateField:function(field,fieldOptions){if(!this.options.fields){return}var index=this._fieldIndexOf(field);if(index>-1){if(!fieldOptions){this._cleanupField(this.options.fields[index]);this._initializeField($(this.options.fields[index].selector),this.options.fields[index]);return}fieldOptions=$.extend({},this.options.fields[index],fieldOptions);var current=this._addGlobalSettings(this.options.fields[index]),options=this._addGlobalSettings(fieldOptions);this._cleanupField(current);this._initializeField($(fieldOptions.selector),fieldOptions);if(current.onsubmit&&!--this._formHandleCounter){this._detachFromForm()}if(options.onsubmit){if(!this._formHandleCounter){this._attachToForm(true)}this._formHandleCounter++}this.options.fields.splice(index,1,fieldOptions)}},destroy:function(){if(!this.options.fields){this._cleanupField(this.options)}else{for(var i=0;i<this.options.fields.length;i++){this._cleanupField(this.options.fields[i])}}this._detachFromForm();this._superApply(arguments)}});$.extend($.ui.igValidator,{version:"21.1.25"});$.ui.igValidator.defaults={showAllErrorsOnSubmit:true,decimalSeparator:".",thousandsSeparator:",",emailRegEx:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/};$.ig.igValidatorBaseRule=$.ig.igValidatorBaseRule||Class.extend({name:"base",formatItems:[],getMessageType:function(options){return this.name},getRuleMessage:function(options){if(options[this.name].errorMessage){return options[this.name].errorMessage}else if(options.errorMessage){return options.errorMessage}return""},formatMessage:function(message){for(var i=0;i<this.formatItems.length;i++){message=message.replace("{"+i+"}",this.formatItems[i])}return message},shouldRun:function(options,value){return options[this.name]&&value},isValid:function(options,value){return true},init:function(validator){this.validator=validator}});$.ig.igValidatorRequiredRule=$.ig.igValidatorRequiredRule||$.ig.igValidatorBaseRule.extend({name:"required",groupTypes:["checkboxrange","radio","select","selectrange"],groupMessageName:"select",getMessageType:function(options){if($.inArray(options._type,this.groupTypes)>-1){return this.groupMessageName}else{return this.name}},shouldRun:function(options){return options[this.name]},isValid:function(options,value){var internalValue=!isNaN(parseFloat(value))?value.toString():value;if(!internalValue||value.length===0){return false}return true}});$.ig.igValidatorControlRule=$.ig.igValidatorControlRule||$.ig.igValidatorBaseRule.extend({name:"control",getMessageType:function(){return"default"},getRuleMessage:function(options){return options.errorMessage||options._control._currentMessage||""},shouldRun:function(options,value){return options._control&&typeof options._control.isValid==="function"&&value},isValid:function(options){return options._control.isValid()}});$.ig.igValidatorNumberRule=$.ig.igValidatorNumberRule||$.ig.igValidatorBaseRule.extend({name:"number",_isNumber:function(options,value){if(typeof value==="number"){return true}else if(typeof value==="string"){return this._parseNumber(value,options)!==null}return false},_parseNumber:function(value,options){if(typeof value==="number"){return value}var decimalSeparator=options.number&&options.number.decimalSeparator,thousandsSeparator=options.number&&options.number.thousandsSeparator,thousandsRegEx,result;decimalSeparator=decimalSeparator||$.ui.igValidator.defaults.decimalSeparator;thousandsSeparator=thousandsSeparator||$.ui.igValidator.defaults.thousandsSeparator;thousandsRegEx=new RegExp("\\"+thousandsSeparator,"g");value=value.split(decimalSeparator);value[0]=value[0].replace(thousandsRegEx,"");result=value.join(".");if(result.length&&!isNaN(result)){return parseFloat(result)}return null},isValid:function(options,value){var internalValue=""+value;if(internalValue){return this._isNumber(options,value)}return true}});$.ig.igValidatorDateRule=$.ig.igValidatorDateRule||$.ig.igValidatorBaseRule.extend({name:"date",isValid:function(options,value){return value instanceof Date||!isNaN(new Date(value).getSeconds())}});$.ig.igValidatorLengthRule=$.ig.igValidatorLengthRule||$.ig.igValidatorBaseRule.extend({name:"lengthRange",_lastMessageType:"rangeLength",getMessageType:function(){return this._lastMessageType},isValid:function(options,value){if(value&&value.length){var min,max,messageSuffix=value.push?"Select":"Length",minLength=options.lengthRange.push?options.lengthRange[0]:options.lengthRange.min,maxLength=options.lengthRange.push?options.lengthRange[1]:options.lengthRange.max;min=minLength&&value.length<minLength;max=maxLength&&value.length>maxLength;if(minLength&&maxLength&&(min||max)){this._lastMessageType="range"+messageSuffix;this.formatItems=[minLength,maxLength]}else if(min){this._lastMessageType="min"+messageSuffix;this.formatItems=[minLength]}else if(max){this._lastMessageType="max"+messageSuffix;this.formatItems=[maxLength]}if(min||max){return false}}return true}});$.ig.igValidatorValueRule=$.ig.igValidatorValueRule||$.ig.igValidatorNumberRule.extend({name:"valueRange",_lastMessageType:"rangeValue",getMessageType:function(){return this._lastMessageType},isValid:function(options,value){var min=false,max=false,minValue,maxValue,hasMin,hasMax,isNumber=this._isNumber(options,value),isDateParsable=!isNaN(new Date(value).getSeconds());if(!isDateParsable&&!isNumber){return true}minValue=options.valueRange.push?options.valueRange[0]:options.valueRange.min;maxValue=options.valueRange.push?options.valueRange[1]:options.valueRange.max;hasMin=typeof minValue==="number"||minValue;hasMax=typeof maxValue==="number"||maxValue;if(!hasMin&&!hasMax){return true}if(isNumber&&!options.date){value=this._parseNumber(value,options);if(hasMin){min=value<minValue}if(hasMax){max=value>maxValue}}else if(isDateParsable&&!options.number){value=new Date(value);if(hasMin){minValue=new Date(minValue);min=value<minValue;minValue=minValue.toLocaleString()}if(hasMax){maxValue=new Date(maxValue);max=value>maxValue;maxValue=maxValue.toLocaleString()}}if(hasMin&&hasMax&&(min||max)){this._lastMessageType="rangeValue";this.formatItems=[minValue,maxValue]}else if(min){this._lastMessageType="minValue";this.formatItems=[minValue]}else if(max){this._lastMessageType="maxValue";this.formatItems=[maxValue]}return!(min||max)}});$.ig.igValidatorEqualToRule=$.ig.igValidatorEqualToRule||$.ig.igValidatorBaseRule.extend({
name:"equalTo",isValid:function(options,value){var selector=options.equalTo.selector||options.equalTo,targetValue=this.validator._getTargetValue({_control:this.validator._getEditor($(selector)),selector:selector});if($.ig.util.compare(value,targetValue)){return false}return true}});$.ig.igValidatorEmailRule=$.ig.igValidatorEmailRule||$.ig.igValidatorBaseRule.extend({name:"email",isValid:function(options,value){return $.ui.igValidator.defaults.emailRegEx.test(value)}});$.ig.igValidatorPatternRule=$.ig.igValidatorPatternRule||$.ig.igValidatorBaseRule.extend({name:"pattern",isValid:function(options,value){var regEx=options.pattern.expresion||options.pattern.expression||options.pattern;regEx=regEx.test?regEx:new RegExp(regEx.toString());return regEx.test(value)}});$.ig.igValidatorCustomRule=$.ig.igValidatorCustomRule||$.ig.igValidatorBaseRule.extend({name:"custom",getMessageType:function(){return"default"},shouldRun:function(options){return options[this.name]},isValid:function(options,value){var fieldOptions=options===this.validator.options?null:options,func=options.custom.method||options.custom;if(typeof func==="string"&&typeof window[func]==="function"){func=window[func]}if(typeof func==="function"&&!func.apply(this.validator,[value,fieldOptions])){return false}return true}});$.ig.igValidatorCreditCardRule=$.ig.igValidatorCreditCardRule||$.ig.igValidatorBaseRule.extend({name:"creditCard",isValid:function(options,value){var val=value&&""+value,evenDigit=false,checksum=0;if(val){val=val.replace(/-/g,"");val=val.replace(/ /g,"");val=val.reverse();for(var i=0;i<val.length;i++){if(!$.ig.String.prototype.isDigit(val[i])){return false}var digitValue=+val[i]*(evenDigit?2:1);evenDigit=!evenDigit;while(digitValue>0){checksum+=digitValue%10;digitValue=Math.floor(digitValue/10)}}return checksum%10===0}return true}});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});