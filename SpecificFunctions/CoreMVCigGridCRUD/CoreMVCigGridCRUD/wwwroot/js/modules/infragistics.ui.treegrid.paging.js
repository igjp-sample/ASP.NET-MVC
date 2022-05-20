/*!@license
 * Infragistics.Web.ClientUI Tree Grid 21.1.11
 *
 * Copyright (c) 2011-2021 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.ui.treegrid.js
 *	infragistics.util.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.grid.paging.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.treegrid","./infragistics.ui.grid.paging"],factory)}else{return factory(jQuery)}})(function($){$.widget("ui.igTreeGridPaging",$.ui.igGridPaging,{css:{contextRow:"ui-igtreegrid-contextrow",contextRowIcon:"ui-igtreegrid-contextrow-icon ui-icon ui-icon-bookmark",contextRowContent:"ui-igtreegrid-contextrow-content",contextRowTextContainer:"ui-igtreegrid-contextrow-container"},rowsToShowLoadingMessage:3e5,events:{contextRowRendering:"contextRowRendering",contextRowRendered:"contextRowRendered"},options:{mode:"rootLevelOnly",contextRowMode:"none",contextRowLoadingText:null,contextRowRootText:null,breadcrumbKey:null,breadcrumbDelimiter:" &gt; ",renderContextRowFunc:null,locale:{contextRowLoadingText:undefined,contextRowRootText:undefined},inherit:false},_create:function(){this.element.data($.ui.igGridPaging.prototype.widgetName,this.element.data($.ui.igTreeGridPaging.prototype.widgetName));$.ui.igGridPaging.prototype._create.apply(this,arguments)},changeLocale:function(){this._super(this.grid.container().find("[data-treegrid-contextrow-content]"));this._renderContextRow(this.options.contextRowMode)},_getDSLocalRecordsCount:function(){if(this.grid.dataSource._filter&&this.options.mode==="allLevels"){return this.grid.dataSource.totalLocalRecordsCount()}return $.ui.igGridPaging.prototype._getDSLocalRecordsCount.apply(this,arguments)},destroy:function(){this._superApply(arguments);this.element.removeData($.ui.igGridPaging.prototype.widgetName)},_dataRendered:function(){var $tr;$.ui.igGridPaging.prototype._dataRendered.apply(this,arguments);switch(this.options.contextRowMode){case"breadcrumb":case"parent":this._renderContextRow(this.options.contextRowMode);break;default:$tr=this.getContextRow();if($tr.length){$tr.remove();this.grid._initializeHeights()}break}},_renderContextRow:function(mode){var grid=this.grid,dv=grid.dataSource.flatDataView(),dataRow,noCancel,eArgs,self=this;if(dv&&dv[0]){dataRow=dv[0]}eArgs={owner:this,dataRow:dataRow,currentPageIndex:this.options.currentPageIndex,contextRowMode:mode};noCancel=this._trigger(this.events.contextRowRendering,null,eArgs);if(noCancel){this._renderLoading(dataRow);setTimeout(function(){if(mode==="breadcrumb"){self._renderBreadcrumb(dataRow)}else if(mode==="parent"){self._renderParentRow(dataRow)}},10)}},getContextRow:function(){var $thead=this.grid.headersTable().children("thead"),$row=this.grid.headersTable().find(">thead>tr[data-treegrid-contextrow]");if($row.length){return $row}$row=$('<tr data-treegrid-contextrow="true" data-skip="true"></tr>').appendTo($thead);$row.addClass(this.css.contextRow);return $row},getContextRowTextArea:function(){var $thead=this.grid.headersTable().children("thead"),$tr,$td,$container,$colspan,colspan=0;$container=$thead.find("[data-treegrid-contextrow-content]");if($container.length){return $container}$tr=this.getContextRow();$tr.empty();$colspan=$thead.closest("table").children("colgroup");$colspan.find("col").each(function(){var $col=$(this),cs;cs=parseInt($col.attr("colspan"),10);if(isNaN(cs)){cs=1}colspan+=cs});$td=$("<td></td>").attr("colspan",colspan).appendTo($tr);$container=$('<div class="'+this.css.contextRowTextContainer+'" data-treegrid-contextrow-container="1">'+'<span class="'+this.css.contextRowIcon+'"></span>'+'<span class="'+this.css.contextRowContent+'" data-treegrid-contextrow-content'+" title='"+this._getLocaleValue("contextRowRootText")+"'"+" "+"data-localeid=contextRowRootText"+" "+"data-localeattr='title'>"+"</span>"+"</div>").appendTo($td);return this.getContextRowTextArea()},_callRenderContextRowFunc:function(dataRow,$textArea,parents,mode){var func=this.options.renderContextRowFunc,f;if($.type(func)==="function"){f=func}else if(window[func]&&typeof window[func]==="function"){f=window[func]}if(f){return f(dataRow,$textArea,parents,mode)}},_renderLoading:function(dataRow){var self=this,$textArea,o=this.options,grid=this.grid,html;if(o.renderContextRowFunc){$textArea=self.getContextRowTextArea();html=self._callRenderContextRowFunc(dataRow,$textArea,null,"loading");if(!html){return}}if(grid.dataSource._flatVisibleData&&grid.dataSource._flatVisibleData.length>=this.rowsToShowLoadingMessage){if(!html){if(!$textArea){$textArea=self.getContextRowTextArea()}$textArea.html(this._getLocaleValue("contextRowLoadingText"))}self.grid._initializeHeights()}},_renderRootRecord:function(){this.getContextRowTextArea().html(this._getLocaleValue("contextRowRootText"))},_renderBreadcrumb:function(dataRow){var i,$text,ds=this.grid.dataSource,parents,parentsLen,row,o=this.options,eArgs,breadcrumbKey=o.breadcrumbKey,html="";parents=ds.getParentRowsForRow(dataRow);$text=this.getContextRowTextArea();if(o.renderContextRowFunc){html=this._callRenderContextRowFunc(dataRow,$text,parents,"breadcrumb");if(!html){return}}if(html){$text.html(html)}else{if($.type(parents)==="array"){parentsLen=parents.length;if(breadcrumbKey===null||breadcrumbKey===undefined){breadcrumbKey=this.grid.options.primaryKey}if(parentsLen<=1){this._renderRootRecord()}else{for(i=0;i<parentsLen;i++){row=parents[i].row;if(row[breadcrumbKey]===undefined){continue}if(i){html+=o.breadcrumbDelimiter}html+=row[breadcrumbKey]}$text.html(html)}}else{this._renderRootRecord()}}eArgs={owner:this,dataRow:dataRow,currentPageIndex:this.options.currentPageIndex,parentRows:parents,contextRowMode:"breadcrumb"};this.grid._initializeHeights();this._trigger(this.events.contextRowRendered,null,eArgs)},_renderParentRow:function(dataRow){var parentsLen,$span,eArgs,html,parents,lastRec,$tr=this.getContextRow(),ds=this.grid.dataSource,o=this.options;parents=ds.getParentRowsForRow(dataRow);if(o.renderContextRowFunc){html=this._callRenderContextRowFunc(dataRow,$tr,parents,"parent");if(!html){return}}if(html){$tr.html(html)}else{if($.type(parents)==="array"||!parents.length){parentsLen=parents.length;if(parentsLen===1){this._renderRootRecord()}else{lastRec=parents[parentsLen-2];lastRec=$.extend(true,{},parents[parentsLen-2]);if(lastRec&&lastRec.row){lastRec.row.childData=null;lastRec.row[this.grid.options.dataSourceSettings.propertyDataLevel]=0;html=this.grid._renderRecord(lastRec.row);html=html.substr(html.indexOf(">")+1);html=html.substr(0,html.lastIndexOf("</tr"));$tr.html(html);$tr.find("td:not([aria-describedby]),th:not([aria-describedby])").empty();$span=$tr.find("[data-expandcell-indicator],[data-shift-container]");if($span.length){$span.attr("class",this.css.contextRowIcon)}}}}else{this._renderRootRecord()}}eArgs={owner:this,dataRow:dataRow,currentPageIndex:this.options.currentPageIndex,parentRows:parents,contextRowMode:"parent"};this.grid._initializeHeights();this._trigger(this.events.contextRowRendered,null,eArgs)},_rowAdded:function(row){if(!row||$.type(row)==="string"){return}var isChildRow=parseInt(row.attr("aria-level"))>0,id,index,pageSize,targetPage;if(this.options.type==="remote"||this.options.mode!=="allLevels"&&isChildRow||!this.grid.options.autoCommit){return}else if(this.options.mode!=="allLevels"&&!isChildRow){this._super(row);return}id=this.grid._normalizedKey(row.attr("data-id"));index=this.grid._recordIndexInFlatView(id);pageSize=this.options.pageSize;if(index===undefined||index<0){return}targetPage=Math.floor(index/pageSize);this.pageIndex(targetPage)},_injectGrid:function(){var ds,i;$.ui.igGridPaging.prototype._injectGrid.apply(this,arguments);ds=this.grid.dataSource;if(ds&&ds.settings&&ds.settings.treeDS){ds.settings.treeDS.paging.mode=this.options.mode;ds.settings.treeDS.paging.contextRowMode=this.options.contextRowMode;if(this.options.type==="remote"&&this.options.mode==="allLevels"){ds.settings.treeDS.persistExpansionStates=true}}if(this.options.contextRowMode!=="none"){for(i=0;i<this.grid.options.features.length;i++){if(this.grid.options.features[i].name==="ColumnFixing"){throw new Error(this._getLocaleValue("columnFixingWithContextRowNotSupported"))}}}}});$.extend($.ui.igTreeGridPaging,{version:"21.1.11"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});