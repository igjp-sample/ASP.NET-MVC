/*!@license
* Infragistics.Web.ClientUI infragistics.categorychart.js 21.1.20211.147
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*     infragistics.dv_dataseriesadapter.js
*     infragistics.datachart_category.js
*     infragistics.datachart_categorycore.js
*     infragistics.datachart_domainChart.js
*     infragistics.datachart_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_dataseriesadapter","./infragistics.datachart_category","./infragistics.datachart_categorycore","./infragistics.datachart_domainChart","./infragistics.datachart_core","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ad=$$t;var $$0=$.ig.globalDefs.$$0;var $$4=$.ig.globalDefs.$$4;var $$1=$.ig.globalDefs.$$1;var $$w=$.ig.globalDefs.$$w;var $$x=$.ig.globalDefs.$$x;var $$f=$.ig.globalDefs.$$f;var $$g=$.ig.globalDefs.$$g;var $$dc=$.ig.globalDefs.$$dc;var $$j=$.ig.globalDefs.$$j;var $$6=$.ig.globalDefs.$$6;var $$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine([]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber,$2=$.ig.util.compare,$3=$.ig.util.replace,$4=$.ig.util.stringFormat,$5=$.ig.util.stringFormat1,$6=$.ig.util.stringFormat2,$7=$.ig.util.stringCompare1,$8=$.ig.util.stringCompare2,$9=$.ig.util.stringCompare3;$d("CategoryChartType:d",false,false,{Line:0,Area:1,Column:2,Point:3,StepLine:4,StepArea:5,Spline:6,SplineArea:7,Waterfall:8,Auto:9});$c("CategoryChart:a","XYChart",{ic:function(){$.ig.XYChart.prototype.ic.call(this);if(this.dataChart()==null){return}var a=this.dataChart()._b8._j.e();this.negativeBrushes(a._d);this.negativeOutlines(a._e);if(this.xAxisLabelTextColor()==null){this.xAxisLabelTextColor(a._k)}if(this.yAxisLabelTextColor()==null){this.yAxisLabelTextColor(a._k)}},ie:function(a,b){$.ig.XYChart.prototype.ie.call(this,a,b);a.transitionInDuration(this.transitionInDuration());a.transitionInEasingFunction(this.transitionInEasingFunction())},i0:function(a,b,c){var $self=this;$.ig.XYChart.prototype.i0.call(this,a,b,c);switch(a){case"TransitionInDuration":this.tc(function(d){d.transitionInDuration($self.transitionInDuration())});break;case"TransitionInEasingFunction":this.tc(function(d){d.transitionInEasingFunction($self.transitionInEasingFunction())});break}},sl:0,transitionInDuration:function(a){if(arguments.length===1){var b=this.transitionInDuration();if(a!=b){this.sl=a;this.iz("TransitionInDuration",b,this.transitionInDuration())}return a}else{return this.sl}},rk:null,transitionInEasingFunction:function(a){if(arguments.length===1){var b=this.transitionInEasingFunction();if(a!=b){this.rk=a;this.iz("TransitionInEasingFunction",b,this.transitionInEasingFunction())}return a}else{return this.rk}},exportSerializedVisualData:function(){var cvd_=this.exportVisualData();cvd_.scaleByViewport();return cvd_.serialize()},h7:function(a){$.ig.XYChart.prototype.h7.call(this,a);a.animateSeriesWhenAxisRangeChanges(this.animateSeriesWhenAxisRangeChanges())},id:function(a,b){$.ig.XYChart.prototype.id.call(this,a,b);var c=$b($.ig.HorizontalAnchoredCategorySeries.prototype.$type,a);if(c==null){return}c.markerCollisionAvoidance(this.markerCollisionAvoidance());c.isTransitionInEnabled(this.isTransitionInEnabled());c.transitionInMode(this.transitionInMode());c.transitionInSpeedType(this.transitionInSpeedType());c.trendLineBrush($.ig.ArrayUtil.prototype.a($$a.$at.$type,this.trendLineBrushes(),b));c.trendLineType(this.trendLineType());c.trendLineThickness(this.trendLineThickness());c.markerType(this.av(a,b));if(a.isNegativeColorSupported()){a.setNegativeColors($.ig.ArrayUtil.prototype.a($$a.$at.$type,this.negativeBrushes(),b),$.ig.ArrayUtil.prototype.a($$a.$at.$type,this.negativeOutlines(),b))}},ra:function(){return new $.ig.CategoryXAxis},re:function(){return new $.ig.NumericYAxis},hw:function(){this.xAxis(this.ra());this.xAxis().name("xAxis");var a=this.xAxis();a.propertyChanged=$.ig.Delegate.prototype.combine(a.propertyChanged,this.te.runOn(this));this.yAxis(this.re());this.yAxis().name("yAxis");var b=this.yAxis();b.propertyChanged=$.ig.Delegate.prototype.combine(b.propertyChanged,this.tf.runOn(this));if(this.xAxis().labelSettings()==null){this.xAxis().labelSettings(new $.ig.AxisLabelSettings)}if(this.yAxis().labelSettings()==null){this.yAxis().labelSettings(new $.ig.AxisLabelSettings)}},pe:function(a){$.ig.XYChart.prototype.pe.call(this,a);a.abbreviateLargeNumbers(this.yAxisAbbreviateLargeNumbers())},q4:0,chartType:function(a){if(arguments.length===1){if(a!=this.q4){var b=this.chartType();this.q4=a;this.iz("ChartType",$$t.$d.getBox(b),$$t.$d.getBox(this.chartType()))}return a}else{return this.q4}},q6:0,markerCollisionAvoidance:function(a){if(arguments.length===1){var b=this.markerCollisionAvoidance();if(a!=b){this.q6=a;this.iz("MarkerCollisionAvoidance",$.ig.CategorySeriesMarkerCollisionAvoidance.prototype.getBox(b),$.ig.CategorySeriesMarkerCollisionAvoidance.prototype.getBox(this.markerCollisionAvoidance()))}return a}else{return this.q6}},ro:false,isTransitionInEnabled:function(a){if(arguments.length===1){var b=this.isTransitionInEnabled();if(a!=b){this.ro=a;this.iz("IsTransitionInEnabled",b,this.isTransitionInEnabled())}return a}else{return this.ro}},q8:0,transitionInMode:function(a){if(arguments.length===1){var b=this.transitionInMode();if(a!=b){this.q8=a;this.iz("TransitionInMode",$.ig.CategoryTransitionInMode.prototype.getBox(b),$.ig.CategoryTransitionInMode.prototype.getBox(this.transitionInMode()))}return a}else{return this.q8}},ri:0,transitionInSpeedType:function(a){if(arguments.length===1){var b=this.transitionInSpeedType();if(a!=b){this.ri=a;this.iz("TransitionInSpeedType",$.ig.TransitionInSpeedType.prototype.getBox(b),$.ig.TransitionInSpeedType.prototype.getBox(this.transitionInSpeedType()))}return a}else{return this.ri}},ry:0,xAxisInterval:function(a){if(arguments.length===1){var b=this.xAxisInterval();if(a!=b){this.ry=a;this.iz("XAxisInterval",b,this.xAxisInterval())}return a}else{return this.ry}},rz:0,xAxisMinorInterval:function(a){if(arguments.length===1){var b=this.xAxisMinorInterval();if(a!=b){this.rz=a;this.iz("XAxisMinorInterval",b,this.xAxisMinorInterval())}return a}else{return this.rz}},rx:0,xAxisGap:function(a){if(arguments.length===1){var b=this.xAxisGap();if(a!=b){this.rx=a;this.iz("XAxisGap",b,this.xAxisGap())}return a}else{return this.rx}},r0:0,xAxisOverlap:function(a){if(arguments.length===1){var b=this.xAxisOverlap();if(a!=b){this.r0=a;this.iz("XAxisOverlap",b,this.xAxisOverlap())}return a}else{return this.r0}},r1:0,yAxisInterval:function(a){if(arguments.length===1){var b=this.yAxisInterval();if(a!=b){this.r1=a;this.iz("YAxisInterval",b,this.yAxisInterval())}return a}else{return this.r1}},rq:false,yAxisIsLogarithmic:function(a){if(arguments.length===1){var b=this.yAxisIsLogarithmic();if(a!=b){this.rq=a;this.iz("YAxisIsLogarithmic",b,this.yAxisIsLogarithmic())}return a}else{return this.rq}},sm:0,yAxisLogarithmBase:function(a){if(arguments.length===1){var b=this.yAxisLogarithmBase();if(a!=b){this.sm=a;this.iz("YAxisLogarithmBase",b,this.yAxisLogarithmBase())}return a}else{return this.sm}},r3:0,yAxisMinimumValue:function(a){if(arguments.length===1){var b=this.yAxisMinimumValue();if(a!=b){this.r3=a;this.iz("YAxisMinimumValue",b,this.yAxisMinimumValue())}return a}else{return this.r3}},r2:0,yAxisMaximumValue:function(a){if(arguments.length===1){var b=this.yAxisMaximumValue();if(a!=b){this.r2=a;this.iz("YAxisMaximumValue",b,this.yAxisMaximumValue())}return a}else{return this.r2}},r4:0,yAxisMinorInterval:function(a){if(arguments.length===1){var b=this.yAxisMinorInterval();if(a!=b){this.r4=a;this.iz("YAxisMinorInterval",b,this.yAxisMinorInterval())}return a}else{return this.r4}},xAxisActualMinimum:function(){return this.xAxis().lk()},xAxisActualMaximum:function(){return this.xAxis().lj()},getCurrentXAxisActualMinimum:function(){return this.xAxisActualMinimum()},getCurrentYAxisActualMinimum:function(){return this.yAxisActualMinimum()},getCurrentXAxisActualMaximum:function(){return this.xAxisActualMaximum()},getCurrentYAxisActualMaximum:function(){return this.yAxisActualMaximum()},yAxisActualMinimum:function(){return this.yAxis().actualMinimumValue()},yAxisActualMaximum:function(){return this.yAxis().actualMaximumValue()},q0:null,negativeBrushes:function(a){if(arguments.length===1){var b=this.negativeBrushes();if(a!=b){this.q0=a;this.iz("NegativeBrushes",b,this.negativeBrushes())}return a}else{return this.q0}},q1:null,negativeOutlines:function(a){if(arguments.length===1){var b=this.negativeOutlines();if(a!=b){this.q1=a;this.iz("NegativeOutlines",b,this.negativeOutlines())}return a}else{return this.q1}},rp:false,yAxisAbbreviateLargeNumbers:function(a){if(arguments.length===1){var b=this.yAxisAbbreviateLargeNumbers();if(a!=b){this.rp=a;this.iz("YAxisAbbreviateLargeNumbers",b,this.yAxisAbbreviateLargeNumbers())}return a}else{return this.rp}},rm:false,isCategoryHighlightingEnabled:function(a){if(arguments.length===1){var b=this.isCategoryHighlightingEnabled();if(a!=b){this.rm=a;this.iz("IsCategoryHighlightingEnabled",b,this.isCategoryHighlightingEnabled())}return a}else{return this.rm}},rn:false,isItemHighlightingEnabled:function(a){if(arguments.length===1){var b=this.isItemHighlightingEnabled();if(a!=b){this.rn=a;this.iz("IsItemHighlightingEnabled",b,this.isItemHighlightingEnabled())}return a}else{return this.rn}},init:function(){this.sl=1e3;this.q4=9;this.q6=1;this.r1=NaN;this.sm=10;this.r3=NaN;this.r2=NaN;this.rp=true;this.rm=false;this.rn=false;this.rw=null;$.ig.XYChart.prototype.init.call(this);this.hz()},cv:function(){return function(){var $ret=new $$4.x($.ig.DataSeriesType.prototype.$type,0);$ret.add(2);$ret.add(1);$ret.add(0);$ret.add(10);$ret.add(6);$ret.add(7);$ret.add(5);$ret.add(4);$ret.add(8);return $ret}()},rw:null,c4:function(){if(this.rw==null){this.rw=$$t.$b.a()}return this.rw},te:function(a,b){switch(b.propertyName()){case"ActualMinimum":this.i6("XAxisActualMinimum");break;case"ActualMaximum":this.i6("XAxisActualMaximum");break}},tf:function(a,b){switch(b.propertyName()){case"ActualMinimumValue":this.i6("YAxisActualMinimum");break;case"ActualMaximumValue":this.i6("YAxisActualMaximum");break}},jh:function(){$.ig.XYChart.prototype.jh.call(this);this.xAxis().label(this.xAxisLabel()==null?$.ig.XYChart.prototype.m0(this.xAxis(),this._ac.dataSeries()):this.xAxisLabel());this.xAxis().itemsSource(this.dataChart()!=null&&this.dataChart().series().count()>0?this.dataChart().series().__inner[0].itemsSource():null)},_xAxis:null,xAxis:function(a){if(arguments.length===1){this._xAxis=a;return a}else{return this._xAxis}},_yAxis:null,yAxis:function(a){if(arguments.length===1){this._yAxis=a;return a}else{return this._yAxis}},rd:function(a,b){switch(a){case 2:return this.a4(1);case 3:return this.a4(10);case 0:return this.a4(0);case 1:return this.a4(2);case 6:return this.a4(6);case 7:return this.a4(7);case 4:return this.a4(4);case 5:return this.a4(5);case 8:return this.a4(8);case 9:return this.rc(b);default:return this.a4(1)}},rc:function(a){return this.a4(a)},ab:function(a){switch(this.chartType()){case 1:return 2;case 0:return 0;case 3:return 10;case 6:return 6;case 7:return 7;case 5:return 5;case 4:return 4;case 8:return 8;case 9:return a.suggestedSeries();default:case 2:return 1}},a3:function(a,b){var c=this.rd(this.chartType(),a.suggestedSeries());c.valueMemberPath(a.findMatchingHint(0).path());c.xAxis(this.xAxis());c.yAxis(this.yAxis());return c},jf:function(a){if(a.suggestedSecondaryAxis()==2){this.yAxis().isLogarithmic(true);this.yAxis().logarithmBase(10)}},ji:function(){this.yAxis().isLogarithmic(this.yAxisIsLogarithmic());this.yAxis().logarithmBase(this.yAxisLogarithmBase())},cu:function(){return function(){var $ret=new $$4.x($.ig.IDataSeriesAdapterRule.prototype.$type,0);$ret.add(new $.ig.SimpleCategorySeriesRule);$ret.add(new $.ig.SubCollectionsRule);return $ret}()},hu:function(a,b){var c=$b($.ig.HorizontalAnchoredCategorySeries.prototype.$type,a);if(c!=null){c.markerCollisionAvoidance(this.markerCollisionAvoidance());c.markerType(this.av(a,b))}},tc:function(a){this.td(function(b,c){a(b)})},td:function(a){if(this.dataChart()==null){return}for(var b=0;b<this.dataChart().series().count();b++){var c=$b($.ig.HorizontalAnchoredCategorySeries.prototype.$type,this.dataChart().series().__inner[b]);if(c==null){continue}a(c,b)}},ka:function(){return this.xAxis()},kb:function(){return this.yAxis()},rg:function(){return this.a4(30)},rh:function(){return this.a4(31)},cr:function(a,b){var c=$.ig.XYChart.prototype.cr.call(this,a,b);if(c!=null){var d=new $$4.x($.ig.Series.prototype.$type,0);if(this.rm){d.add(this.rg())}if(this.rn){d.add(this.rh())}for(var e=0;e<d.count();e++){var f=d.__inner[e];f.name(a+f.getType().typeName());c.add(f)}}return c},jm:function(a,b,c){$.ig.XYChart.prototype.jm.call(this,a,b,c);if(this._ac.dataSeries().count()>0){if(String.isNullOrEmpty(this.calloutsXMemberPath())){this.aj().setXMemberPath(a,c.getMemberPathFor(16))}if(String.isNullOrEmpty(this.calloutsYMemberPath())){this.aj().setYMemberPath(a,c.getMemberPathFor(0))}if(String.isNullOrEmpty(this.calloutsLabelMemberPath())){this.aj().setLabelMemberPath(a,c.getMemberPathFor(0))}if(String.isNullOrEmpty(this.calloutsContentMemberPath())){this.aj().setContentMemberPath(a,c.getMemberPathFor(0))}}},iz:function(a,b,c){var $self=this;$.ig.XYChart.prototype.iz.call(this,a,b,c);switch(a){case"ChartType":this.jh();break;case"MarkerCollisionAvoidance":this.tc(function(d){d.markerCollisionAvoidance($self.markerCollisionAvoidance())});break;case"IsTransitionInEnabled":this.tc(function(d){d.isTransitionInEnabled($self.isTransitionInEnabled())});break;case"TransitionInMode":this.tc(function(d){d.transitionInMode($self.transitionInMode())});break;case"TransitionInSpeedType":this.tc(function(d){d.transitionInSpeedType($self.transitionInSpeedType())});break;case"XAxisInterval":this.xAxis().interval(this.xAxisInterval());break;case"XAxisMinorInterval":this.xAxis().minorInterval(this.xAxisMinorInterval());break;case"XAxisGap":this.xAxis().gap(this.xAxisGap());break;case"XAxisOverlap":this.xAxis().overlap(this.xAxisOverlap());break;case"YAxisInterval":this.yAxis().interval(this.yAxisInterval());break;case"YAxisIsLogarithmic":this.yAxis().isLogarithmic(this.yAxisIsLogarithmic());break;case"YAxisLogarithmBase":this.yAxis().logarithmBase(this.yAxisLogarithmBase());break;case"YAxisMinimumValue":this.yAxis().minimumValue(this.yAxisMinimumValue());break;case"YAxisMaximumValue":this.yAxis().maximumValue(this.yAxisMaximumValue());break;case"YAxisMinorInterval":this.yAxis().minorInterval(this.yAxisMinorInterval());break;case"NegativeBrushes":case"NegativeOutlines":this.td(function(d,e){if(d.isNegativeColorSupported()){d.setNegativeColors($.ig.ArrayUtil.prototype.a($$a.$at.$type,$self.negativeBrushes(),e),$.ig.ArrayUtil.prototype.a($$a.$at.$type,$self.negativeOutlines(),e))}});break;case"YAxisAbbreviateLargeNumbers":this.pk(function(d){d.abbreviateLargeNumbers($self.yAxisAbbreviateLargeNumbers())});break;case"IsCategoryHighlightingEnabled":case"IsItemHighlightingEnabled":this.jh();break}},$type:new $.ig.Type("CategoryChart",$.ig.XYChart.prototype.$type)},true);$c("CategoryChartMockDataGenerator:b","Object",{init:function(){$.ig.$op.init.call(this)},a:function(){var a=new $$4.x($$t.$c.$type,0);a.add(function(){var $ret=new $$t.c;$ret.label("Item A");$ret.series1(3);$ret.series2(4);$ret.series3(7);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item B");$ret.series1(4);$ret.series2(3);$ret.series3(6);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item C");$ret.series1(7);$ret.series2(2);$ret.series3(5);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item D");$ret.series1(6);$ret.series2(4);$ret.series3(7);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item E");$ret.series1(5);$ret.series2(5);$ret.series3(8);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item F");$ret.series1(4);$ret.series2(8);$ret.series3(9);return $ret}());var arr_=a.toArray();return arr_},$type:new $.ig.Type("CategoryChartMockDataGenerator",$.ig.$ot)},true);$c("CategoryChartMockDataItem:c","Object",{init:function(){$.ig.$op.init.call(this)},_label:null,label:function(a){if(arguments.length===1){this._label=a;return a}else{return this._label}},_series1:0,series1:function(a){if(arguments.length===1){this._series1=a;return a}else{return this._series1}},_series2:0,series2:function(a){if(arguments.length===1){this._series2=a;return a}else{return this._series2}},_series3:0,series3:function(a){if(arguments.length===1){this._series3=a;return a}else{return this._series3}},$type:new $.ig.Type("CategoryChartMockDataItem",$.ig.$ot)},true)});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});