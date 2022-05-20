/*!@license
* Infragistics.Web.ClientUI Grid localization resources 21.1.11
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale["zh-Hans"]=$.ig.locale["zh-Hans"]||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale["zh-Hans"].Grid={noSuchWidget:"\u65e0\u6cd5\u8bc6\u522b {featureName}\u3002\u786e\u8ba4\u5b58\u5728\u8fd9\u6837\u7684\u529f\u80fd\u5e76\u4e14\u62fc\u5199\u6b63\u786e\u3002",autoGenerateColumnsNoRecords:"\u5df2\u542f\u7528 autoGenerateColumns\uff0c\u4f46\u6570\u636e\u6e90\u4e2d\u65e0\u8bb0\u5f55\u3002\u52a0\u8f7d\u5e26\u6709\u8bb0\u5f55\u7684\u6570\u636e\u6e90\uff0c\u4ee5\u4fbf\u786e\u5b9a\u5217\u3002",optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",optionChangeNotScrollingGrid:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\uff0c\u56e0\u4e3a\u60a8\u7684\u7f51\u683c\u6700\u521d\u4e0d\u80fd\u6eda\u52a8\uff0c\u9700\u8981\u5168\u90e8\u91cd\u65b0\u6e32\u67d3\u3002\u5e94\u5728\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u8be5\u9009\u9879\u3002",widthChangeFromPixelsToPercentagesNotSupported:"\u65e0\u6cd5\u5c06\u7f51\u683c\u7684\u9009\u9879\u5bbd\u5ea6\u4ece\u50cf\u7d20\u52a8\u6001\u66f4\u6539\u4e3a\u767e\u5206\u6bd4\u3002",widthChangeFromPercentagesToPixelsNotSupported:"\u65e0\u6cd5\u5c06\u7f51\u683c\u7684\u9009\u9879\u5bbd\u5ea6\u4ece\u767e\u5206\u6bd4\u52a8\u6001\u66f4\u6539\u4e3a\u50cf\u7d20\u3002",noPrimaryKeyDefined:"\u6ca1\u6709\u4e3a\u7f51\u683c\u5b9a\u4e49\u4e3b\u952e\u3002\u5b9a\u4e49\u4e3b\u952e\u4ee5\u4f7f\u7528\u8bf8\u5982\u7f51\u683c\u7f16\u8f91\u4e4b\u7c7b\u7684\u529f\u80fd\u3002",indexOutOfRange:"\u6307\u5b9a\u7684\u884c\u7d22\u5f15\u8d85\u51fa\u8303\u56f4\u3002\u5e94\u63d0\u4f9b\u4ecb\u4e8e 0 \u548c {max} \u4e4b\u95f4\u7684\u884c\u7d22\u5f15\u3002",noSuchColumnDefined:"\u6307\u5b9a\u7684\u5217\u952e\u65e0\u6548\u3002\u5e94\u63d0\u4f9b\u4e0e\u5df2\u5b9a\u4e49\u7684\u5176\u4e2d\u4e00\u4e2a\u7f51\u683c\u5217\u7684\u952e\u5339\u914d\u7684\u5217\u952e\u3002",columnIndexOutOfRange:"\u6307\u5b9a\u7684\u5217\u7d22\u5f15\u8d85\u51fa\u8303\u56f4\u3002\u5e94\u63d0\u4f9b 0 \u5230 {max} \u4e4b\u95f4\u7684\u5217\u7d22\u5f15\u3002",recordNotFound:"\u5728\u6570\u636e\u89c6\u56fe\u4e2d\u627e\u4e0d\u5230 ID \u4e3a {id} \u7684\u8bb0\u5f55\u3002\u9a8c\u8bc1\u7528\u4e8e\u641c\u7d22\u7684 ID\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u8c03\u6574\u3002",columnNotFound:"\u627e\u4e0d\u5230\u5305\u542b\u952e {key} \u7684\u5217\u3002\u9a8c\u8bc1\u7528\u4e8e\u641c\u7d22\u7684\u5bc6\u94a5\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u8c03\u6574\u3002",colPrefix:"\u5217 ",columnVirtualizationRequiresWidth:"\u865a\u62df\u5316\u548c\u5217\u865a\u62df\u5316\u8981\u6c42\u8bbe\u7f6e\u7f51\u683c\u6216\u5176\u5217\u7684\u5bbd\u5ea6\u3002\u63d0\u4f9b\u7f51\u683c\u5bbd\u5ea6\uff0cdefaultColumnWidth \u6216\u6bcf\u5217\u5bbd\u5ea6\u7684\u503c\u3002",virtualizationRequiresHeight:"\u865a\u62df\u5316\u8981\u6c42\u8bbe\u7f6e\u7f51\u683c\u7684\u9ad8\u5ea6\u3002\u5e94\u63d0\u4f9b\u7f51\u683c\u9ad8\u5ea6\u7684\u503c\u3002",colVirtualizationDenied:"columnVirtualization \u9700\u8981\u4e0d\u540c\u7684 virtualizationMode \u8bbe\u7f6e\u3002\u865a\u62df\u5316\u6a21\u5f0f\u5e94\u8bbe\u7f6e\u4e3a 'fixed'\u3002",noColumnsButAutoGenerateTrue:"autoGenerateColumns \u5df2\u7981\u7528\uff0c\u5e76\u4e14\u672a\u4e3a\u7f51\u683c\u5b9a\u4e49\u4efb\u4f55\u5217\u3002\u542f\u7528 autoGenerateColumns \u6216\u624b\u52a8\u6307\u5b9a\u5217\u3002",expandTooltip:"\u5c55\u5f00\u884c",collapseTooltip:"\u6298\u53e0\u884c",movingNotAllowedOrIncompatible:"\u6307\u5b9a\u7684\u5217\u65e0\u6cd5\u79fb\u52a8\u3002\u9a8c\u8bc1\u662f\u5426\u5b58\u5728\u8fd9\u6837\u7684\u5217\uff0c\u5e76\u4e14\u5176\u7ed3\u675f\u4f4d\u7f6e\u4e0d\u4f1a\u7834\u574f\u5217\u5e03\u5c40\u3002",allColumnsHiddenOnInitialization:"\u521d\u59cb\u5316\u671f\u95f4\u4e0d\u80fd\u9690\u85cf\u6240\u6709\u5217\u3002\u81f3\u5c11\u4e00\u5217\u5e94\u914d\u7f6e\u4e3a\u53ef\u89c1\u3002",virtualizationNotSupportedWithAutoSizeCols:"\u865a\u62df\u5316\u8981\u6c42\u7684\u5217\u5bbd\u914d\u7f6e\u4e0e '*' \u4e0d\u540c\u3002\u5217\u5bbd\u5e94\u8bbe\u7f6e\u4e3a\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u7684\u6570\u503c\u3002",columnVirtualizationNotSupportedWithPercentageWidth:"\u5217\u865a\u62df\u5316\u9700\u8981\u4e0d\u540c\u7684\u7f51\u683c\u5bbd\u5ea6\u914d\u7f6e\u3002\u5217\u5bbd\u5e94\u8bbe\u7f6e\u4e3a\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u7684\u6570\u503c\u3002",mixedWidthsNotSupported:"\u8981\u6c42\u6240\u6709\u5217\u7684\u5bbd\u5ea6\u8bbe\u7f6e\u76f8\u540c\u3002\u5c06\u6240\u6709\u5217\u5bbd\u8bbe\u7f6e\u4e3a\u767e\u5206\u6bd4\u6216\u50cf\u7d20\u6570\u3002",multiRowLayoutColumnError:"\u65e0\u6cd5\u5c06\u952e\u4e3a {key1} \u7684\u5217\u6dfb\u52a0\u5230\u591a\u884c\u5e03\u5c40\u4e2d\uff0c\u56e0\u4e3a\u952e\u4e3a {key2} \u7684\u5217\u5df2\u7ecf\u5360\u636e\u4e86\u5176\u5728\u5e03\u5c40\u4e2d\u7684\u4f4d\u7f6e\u3002",multiRowLayoutNotComplete:"\u591a\u884c\u5e03\u5c40\u4e0d\u5b8c\u6574\u3002\u5217\u5b9a\u4e49\u521b\u5efa\u7684\u5e03\u5c40\u6709\u7a7a\u767d\u4e14\u65e0\u6cd5\u6b63\u786e\u5448\u73b0\u3002",multiRowLayoutMixedWidths:"\u591a\u884c\u5e03\u5c40\u4e0d\u652f\u6301\u6df7\u5408\u5bbd\u5ea6 (\u767e\u5206\u6bd4\u548c\u50cf\u7d20)\u3002\u8bf7\u4ee5\u50cf\u7d20\u6216\u767e\u5206\u6bd4\u5b9a\u4e49\u6240\u6709\u5217\u5bbd\u3002 ",multiRowLayoutHidingNotSupported:"\u591a\u884c\u5e03\u5c40\u4e0d\u652f\u6301\u9690\u85cf\u5217\u3002\u8bf7\u4ece\u5217\u5b9a\u4e49\u4e2d\u5220\u9664\u9690\u85cf\u7684\u5217\u3002",scrollableGridAreaNotVisible:"\u56fa\u5b9a\u7684\u9875\u7709\u548c\u9875\u811a\u533a\u57df\u5927\u4e8e\u53ef\u7528\u7684\u7f51\u683c\u9ad8\u5ea6\u3002\u6eda\u52a8\u533a\u57df\u4e0d\u53ef\u89c1\u3002\u8bf7\u8bbe\u7f6e\u66f4\u5927\u7684\u7f51\u683c\u9ad8\u5ea6\u3002",featureNotSupportedWithMRL:"\u591a\u884c\u5e03\u5c40\u4e0d\u652f\u6301 {featureName}\u3002\u8bf7\u4ece\u529f\u80fd\u5217\u8868\u4e2d\u5220\u9664\u8be5\u529f\u80fd\u3002",editorTypeCannotBeDetermined:"\u6b63\u5728\u66f4\u65b0\uff0c\u6ca1\u6709\u8db3\u591f\u7684\u4fe1\u606f\u6765\u6b63\u786e\u786e\u5b9a\u7528\u4e8e\u5217\u7684\u7f16\u8f91\u5668\u7c7b\u578b: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale["zh-Hans"].HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid \u9700\u8981\u5b9a\u4e49\u4e3b\u952e\u3002\u5e94\u63d0\u4f9b\u4e3b\u952e\u3002",expandTooltip:"\u5c55\u5f00\u884c",collapseTooltip:"\u6298\u53e0\u884c"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale["zh-Hans"].GridFeatureChooser={featureChooserTooltip:"\u529f\u80fd\u9009\u62e9\u5668"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale["zh-Hans"].GridFiltering={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",startsWithNullText:"\u5f00\u59cb\u6761\u4ef6...",endsWithNullText:"\u7ed3\u675f\u6761\u4ef6...",containsNullText:"\u5305\u542b...",doesNotContainNullText:"\u4e0d\u5305\u542b...",equalsNullText:"\u7b49\u4e8e...",doesNotEqualNullText:"\u4e0d\u7b49\u4e8e...",greaterThanNullText:"\u5927\u4e8e...",lessThanNullText:"\u5c0f\u4e8e...",greaterThanOrEqualToNullText:"\u5927\u4e8e\u6216\u7b49\u4e8e...",lessThanOrEqualToNullText:"\u5c0f\u4e8e\u6216\u7b49\u4e8e...",onNullText:"\u5728...",notOnNullText:"\u4e0d\u5728...",afterNullText:"\u4e4b\u540e",beforeNullText:"\u4e4b\u524d",emptyNullText:"\u7a7a\u767d",notEmptyNullText:"\u975e\u7a7a\u767d",nullNullText:"Null",notNullNullText:"\u975e Null",emptyLabel:"\u7a7a\u767d",notEmptyLabel:"\u975e\u7a7a\u767d",nullLabel:"Null",notNullLabel:"\u975e Null",startsWithLabel:"\u5f00\u59cb\u6761\u4ef6\uff1a",endsWithLabel:"\u7ed3\u675f\u6761\u4ef6\uff1a",containsLabel:"\u5305\u542b",doesNotContainLabel:"\u4e0d\u5305\u542b",equalsLabel:"\u7b49\u4e8e",doesNotEqualLabel:"\u4e0d\u7b49\u4e8e",greaterThanLabel:"\u5927\u4e8e",lessThanLabel:"\u5c0f\u4e8e",greaterThanOrEqualToLabel:"\u5927\u4e8e\u6216\u7b49\u4e8e",lessThanOrEqualToLabel:"\u5c0f\u4e8e\u6216\u7b49\u4e8e",trueLabel:"True",falseLabel:"False",afterLabel:"\u4e4b\u540e",beforeLabel:"\u4e4b\u524d",todayLabel:"\u4eca\u5929",yesterdayLabel:"\u6628\u5929",thisMonthLabel:"\u672c\u6708",lastMonthLabel:"\u4e0a\u6708",nextMonthLabel:"\u4e0b\u4e2a\u6708",thisYearLabel:"\u4eca\u5e74",lastYearLabel:"\u53bb\u5e74",nextYearLabel:"\u660e\u5e74",atLabel:"\u5728",atNullText:"\u5728...",notAtLabel:"\u4e0d\u5728",notAtNullText:"\u4e0d\u5728...",atBeforeLabel:"\u4e0d\u665a\u4e8e",atBeforeNullText:"\u4e0d\u665a\u4e8e...",atAfterLabel:"\u4e0d\u65e9\u4e8e",atAfterNullText:"\u4e0d\u65e9\u4e8e...",clearLabel:"\u6e05\u9664\u7b5b\u9009\u5668",noFilterLabel:"\u5426",onLabel:"\u6253\u5f00",notOnLabel:"\u4e0d\u5728",advancedButtonLabel:"\u9ad8\u7ea7",filterDialogCaptionLabel:"\u9ad8\u7ea7\u7b5b\u9009\u5668",filterDialogConditionLabel1:"\u663e\u793a\u5339\u914d\u7684\u8bb0\u5f55 ",filterDialogConditionLabel2:" \u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00",filterDialogConditionDropDownLabel:"\u7b5b\u9009\u6761\u4ef6",filterDialogOkLabel:"\u641c\u7d22",filterDialogCancelLabel:"\u53d6\u6d88",filterDialogAnyLabel:"\u4efb\u4f55",filterDialogAllLabel:"\u5168\u90e8",filterDialogAddLabel:"\u6dfb\u52a0",filterDialogErrorLabel:"\u5df2\u8fbe\u5230\u652f\u6301\u7684\u6700\u5927\u7b5b\u9009\u5668\u6570\u91cf\u3002",filterDialogCloseLabel:"\u5173\u95ed\u7b5b\u9009\u5bf9\u8bdd\u6846",filterSummaryTitleLabel:"\u641c\u7d22\u7ed3\u679c",filterSummaryTemplate:"${matches} \u4e2a\u5339\u914d\u8bb0\u5f55",filterDialogClearAllLabel:"\u6e05\u9664\u5168\u90e8",tooltipTemplate:"${condition} \u7b5b\u9009\u5668\u5df2\u5e94\u7528",featureChooserText:"\u9690\u85cf\u7b5b\u9009\u5668",featureChooserTextHide:"\u663e\u793a\u7b5b\u9009\u5668",featureChooserTextAdvancedFilter:"\u9ad8\u7ea7\u7b5b\u9009\u5668",virtualizationSimpleFilteringNotAllowed:"\u5217\u865a\u62df\u5316\u9700\u8981\u4e0d\u540c\u7c7b\u578b\u7684\u7b5b\u9009\u3002\u5c06\u7b5b\u9009\u6a21\u5f0f\u8bbe\u7f6e\u4e3a 'advanced' \u6216\u7981\u7528 advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"\u591a\u884c\u5e03\u5c40\u9700\u8981\u4e0d\u540c\u7c7b\u578b\u7684\u7b5b\u9009\u3002\u5c06\u7b5b\u9009\u6a21\u5f0f\u8bbe\u7f6e\u4e3a 'advanced'",featureChooserNotReferenced:"\u7f3a\u5c11\u5bf9\u529f\u80fd\u9009\u62e9\u5668\u7684\u5f15\u7528\u3002\u5728\u9879\u76ee\u4e2d\u5305\u542b infragistics.ui.grid.featurechooser.js\uff0c\u4f7f\u7528\u52a0\u8f7d\u7a0b\u5e8f\u6216\u7ec4\u5408\u811a\u672c\u6587\u4ef6\u4e4b\u4e00\u3002",conditionListLengthCannotBeZero:"columnSettings \u4e2d\u7684 conditionList \u6570\u7ec4\u4e3a\u7a7a\u3002\u5e94\u4e3a conditionList \u63d0\u4f9b\u5408\u9002\u7684\u6570\u7ec4\u3002",conditionNotValidForColumnType:"\u6761\u4ef6 '{0}' \u4e0d\u9002\u7528\u4e8e\u5f53\u524d\u914d\u7f6e\u3002\u5e94\u5c06\u5176\u66ff\u6362\u4e3a\u9002\u5408 {1} \u5217\u7c7b\u578b\u7684\u6761\u4ef6\u3002",defaultConditionContainsInvalidCondition:"'{0}' \u5217\u7684 defaultExpression \u5305\u542b\u4e0d\u5141\u8bb8\u7684\u6761\u4ef6\u3002\u5e94\u5c06\u5176\u66ff\u6362\u4e3a\u9002\u5408 {0} \u5217\u7c7b\u578b\u7684\u6761\u4ef6\u3002",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"\u5728\u5217 '{0}' \u7684 columnSettings \u4e2d\u8bbe\u7f6e\u7684\u521d\u59cb\u6761\u4ef6\u4e0d\u662f\u9ed8\u8ba4\u503c (\u6216\u81ea\u5b9a\u4e49\u6761\u4ef6)\uff0c\u6216\u8005\u5728 columnSettins \u4e2d\u8bbe\u7f6e\u7684 conditionList \u6570\u7ec4\u4e2d\u4e0d\u53ef\u7528\u3002\u8bf7\u5e94\u7528\u6709\u6548\u6761\u4ef6\u3002"};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale["zh-Hans"].GridGroupBy={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",emptyGroupByAreaContent:"\u5c06\u5217\u62d6\u5230\u6b64\u5904\u6216 {0} \u4ee5\u5206\u7ec4",emptyGroupByAreaContentSelectColumns:"\u9009\u62e9\u5217",emptyGroupByAreaContentSelectColumnsCaption:"\u9009\u62e9\u5217",expandTooltip:"\u5c55\u5f00\u5df2\u5206\u7ec4\u7684\u884c",collapseTooltip:"\u6298\u53e0\u5206\u7ec4\u884c",removeButtonTooltip:"\u79fb\u9664\u5206\u7ec4\u5217",modalDialogCaptionButtonDesc:"\u5347\u5e8f\u6392\u5217",modalDialogCaptionButtonAsc:"\u964d\u5e8f\u6392\u5e8f",modalDialogCaptionButtonUngroup:"\u53d6\u6d88\u5206\u7ec4",modalDialogGroupByButtonText:"\u5206\u7ec4\u4f9d\u636e",modalDialogCaptionText:"\u6dfb\u52a0\u81f3\u5206\u7ec4\u7684\u4f9d\u636e",modalDialogDropDownLabel:"\u663e\u793a:",modalDialogClearAllButtonLabel:"\u6e05\u9664\u5168\u90e8",modalDialogRootLevelHierarchicalGrid:"\u6839",modalDialogDropDownButtonCaption:"\u663e\u793a/\u9690\u85cf",modalDialogButtonApplyText:"\u5e94\u7528",modalDialogButtonCancelText:"\u53d6\u6d88",fixedVirualizationNotSupported:"\u5206\u7ec4\u4f9d\u636e\u9700\u8981\u53e6\u4e00\u4e2a\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u865a\u62df\u5316\u6a21\u5f0f\u5e94\u8bbe\u7f6e\u4e3a 'continuous'\u3002",summaryRowTitle:"\u5206\u7ec4\u6c47\u603b\u884c",summaryIconTitle:"{0} \u7684\u6458\u8981: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale["zh-Hans"].GridHiding={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",columnChooserDisplayText:"\u5217\u9009\u62e9\u5668",hiddenColumnIndicatorTooltipText:"\u9690\u85cf\u5217",columnHideText:"\u9690\u85cf",columnChooserCaptionLabel:"\u5217\u9009\u62e9\u5668",columnChooserCloseButtonTooltip:"\u6536\u76d8",hideColumnIconTooltip:"\u9690\u85cf",featureChooserNotReferenced:"\u7f3a\u5c11\u5bf9\u529f\u80fd\u9009\u62e9\u5668\u7684\u5f15\u7528\u3002\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5305\u542b infragistics.ui.grid.featurechooser.js \u6216\u4f7f\u7528\u7ec4\u5408\u811a\u672c\u6587\u4ef6\u4e4b\u4e00\u3002",columnChooserShowText:"\u663e\u793a",columnChooserHideText:"\u9690\u85cf",columnChooserResetButtonLabel:"\u91cd\u7f6e",columnChooserButtonApplyText:"\u5e94\u7528",columnChooserButtonCancelText:"\u53d6\u6d88"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale["zh-Hans"].GridResizing={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",noSuchVisibleColumn:"\u6307\u5b9a\u7684\u952e\u6ca1\u6709\u53ef\u89c1\u7684\u5217\u3002\u5728\u5c1d\u8bd5\u8c03\u6574\u5217\u5927\u5c0f\u4e4b\u524d\uff0c\u5e94\u5728\u5217\u4e0a\u4f7f\u7528 showColumn() \u65b9\u6cd5\u3002",resizingAndFixedVirtualizationNotSupported:"\u8c03\u6574\u5217\u5927\u5c0f\u9700\u8981\u4e0d\u540c\u7684\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u4f7f\u7528 rowVirtualization \u5e76\u5c06\u865a\u62df\u5316\u6a21\u5f0f\u8bbe\u7f6e\u4e3a 'continuous'\u3002"};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale["zh-Hans"].GridPaging={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",pageSizeDropDownLabel:"\u663e\u793a ",pageSizeDropDownTrailingLabel:"\u8bb0\u5f55",nextPageLabelText:"\u4e0b\u4e00\u6b65",prevPageLabelText:"\u4e0a\u4e00\u4e2a",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"\u9875\u7801",currentPageDropDownTrailingLabel:"\u7684 ${count}",currentPageDropDownTooltip:"\u9009\u62e9\u9875\u9762\u7d22\u5f15",pageSizeDropDownTooltip:"\u9009\u62e9\u6bcf\u9875\u8bb0\u5f55\u6570",pagerRecordsLabelTooltip:"\u5f53\u524d\u8bb0\u5f55\u8303\u56f4",prevPageTooltip:"\u4e0a\u4e00\u9875",nextPageTooltip:"\u4e0b\u4e00\u9875",firstPageTooltip:"\u7b2c\u4e00\u9875",lastPageTooltip:"\u6700\u540e\u4e00\u9875",pageTooltipFormat:"\u7b2c ${index} \u9875",pagerRecordsLabelTemplate:"${recordCount} \u6761\u8bb0\u5f55\u4e2d\u7684 ${startRecord} - ${endRecord} \u6761",invalidPageIndex:"\u6307\u5b9a\u7684\u9875\u9762\u7d22\u5f15\u65e0\u6548\u3002\u63d0\u4f9b\u5927\u4e8e\u6216\u7b49\u4e8e 0 \u4e14\u5c0f\u4e8e\u9875\u9762\u603b\u6570\u7684\u9875\u9762\u7d22\u5f15\u3002"};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale["zh-Hans"].GridSelection={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",persistenceImpossible:"\u6301\u7eed\u9009\u62e9\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u914d\u7f6e\u7f51\u683c\u7684\u4e3b\u952e\u9009\u9879\u3002"};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale["zh-Hans"].GridRowSelectors={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",selectionNotLoaded:"igGridSelection \u5c1a\u672a\u521d\u59cb\u5316\u3002\u5e94\u8be5\u4e3a\u7f51\u683c\u542f\u7528\u9009\u62e9\u3002",columnVirtualizationEnabled:"\u884c\u9009\u62e9\u5668\u8981\u6c42\u4e0d\u540c\u7684\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u4f7f\u7528 rowVirtualization \u6216\u5c06 virtualizationMode \u8bbe\u7f6e\u4e3a 'continuous'\u3002",selectedRecordsText:"\u60a8\u5df2\u9009\u62e9 ${checked} \u6761\u8bb0\u5f55\u3002",deselectedRecordsText:"\u60a8\u5df2\u53d6\u6d88\u9009\u62e9 ${unchecked} \u6761\u8bb0\u5f55\u3002",selectAllText:"\u9009\u62e9\u6240\u6709 ${totalRecordsCount} \u6761\u8bb0\u5f55",deselectAllText:"\u53d6\u6d88\u9009\u62e9\u6240\u6709 ${totalRecordsCount} \u6761\u8bb0\u5f55",requireSelectionWithCheckboxes:"\u542f\u7528\u590d\u9009\u6846\u65f6\uff0c\u9700\u8981\u8fdb\u884c\u9009\u62e9"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale["zh-Hans"].GridSorting={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",sortedColumnTooltip:"\u5df2 ${direction} \u6392\u5e8f",unsortedColumnTooltip:"\u6392\u5e8f\u5217",ascending:"\u5347\u5e8f",descending:"\u964d\u5e8f",modalDialogSortByButtonText:"\u6392\u5e8f\u4f9d\u636e",modalDialogResetButton:"\u91cd\u7f6e",modalDialogCaptionButtonDesc:"\u5355\u51fb\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f",modalDialogCaptionButtonAsc:"\u5355\u51fb\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f",modalDialogCaptionButtonUnsort:"\u5355\u51fb\u4ee5\u5220\u9664\u6392\u5e8f",featureChooserText:"\u6309\u591a\u4e2a\u6392\u5e8f",modalDialogCaptionText:"\u6309\u591a\u4e2a\u6392\u5e8f",modalDialogButtonApplyText:"\u5e94\u7528",modalDialogButtonCancelText:"\u53d6\u6d88",sortingHiddenColumnNotSupport:"\u6307\u5b9a\u7684\u5217\u5df2\u9690\u85cf\uff0c\u56e0\u6b64\u65e0\u6cd5\u6392\u5e8f\u3002\u5728\u5c1d\u8bd5\u6392\u5e8f\u4e4b\u524d\uff0c\u5728\u5176\u4e0a\u4f7f\u7528 showColumn() \u65b9\u6cd5\u3002",featureChooserSortAsc:"\u5347\u5e8f\u6392\u5217",featureChooserSortDesc:"\u964d\u5e8f\u6392\u5e8f"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale["zh-Hans"].GridSummaries={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",featureChooserText:"\u9690\u85cf\u6458\u8981",featureChooserTextHide:"\u663e\u793a\u6458\u8981",dialogButtonOKText:"\u786e\u5b9a",dialogButtonCancelText:"\u53d6\u6d88",emptyCellText:"",summariesHeaderButtonTooltip:"\u663e\u793a/\u9690\u85cf\u6458\u8981",defaultSummaryRowDisplayLabelCount:"\u8ba1\u7b97",defaultSummaryRowDisplayLabelMin:"\u6700\u5c0f",defaultSummaryRowDisplayLabelMax:"\u6700\u5927",defaultSummaryRowDisplayLabelSum:"\u5408\u8ba1",defaultSummaryRowDisplayLabelAvg:"\u5e73\u5747",defaultSummaryRowDisplayLabelCustom:"\u81ea\u5b9a\u4e49",calculateSummaryColumnKeyNotSpecified:"\u7f3a\u5c11\u5217\u5173\u952e\u5b57\u3002\u5e94\u6307\u5b9a\u5217\u952e\u4ee5\u8ba1\u7b97\u6c47\u603b\u3002",featureChooserNotReferenced:"\u7f3a\u5c11\u5bf9\u529f\u80fd\u9009\u62e9\u5668\u7684\u5f15\u7528\u3002\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5305\u542b infragistics.ui.grid.featurechooser.js \u6216\u4f7f\u7528\u7ec4\u5408\u811a\u672c\u6587\u4ef6\u4e4b\u4e00\u3002"};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale["zh-Hans"].GridUpdating={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",doneLabel:"\u5b8c\u6210",doneTooltip:"\u505c\u6b62\u7f16\u8f91\u548c\u66f4\u65b0",cancelLabel:"\u53d6\u6d88",cancelTooltip:"\u505c\u6b62\u7f16\u8f91\u800c\u4e0d\u66f4\u65b0",addRowLabel:"\u6dfb\u52a0\u65b0\u884c",addRowTooltip:"\u5f00\u59cb\u6dfb\u52a0\u65b0\u884c",deleteRowLabel:"\u5220\u9664\u884c",deleteRowTooltip:"\u5220\u9664\u884c",igTextEditorException:"\u5f53\u524d\u65e0\u6cd5\u66f4\u65b0\u7f51\u683c\u4e2d\u7684\u5b57\u7b26\u4e32\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igTextEditor\u3002",igNumericEditorException:"\u5f53\u524d\u65e0\u6cd5\u66f4\u65b0\u7f51\u683c\u4e2d\u7684\u6570\u5b57\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igNumericEditor\u3002",igCheckboxEditorException:"\u5f53\u524d\u65e0\u6cd5\u66f4\u65b0\u7f51\u683c\u4e2d\u7684\u590d\u9009\u6846\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igCheckboxEditor\u3002",igCurrencyEditorException:"\u5f53\u524d\u65e0\u6cd5\u5728\u7f51\u683c\u4e2d\u7528\u8d27\u5e01\u683c\u5f0f\u66f4\u65b0\u6570\u5b57\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igCurrencyEditor\u3002",igPercentEditorException:"\u5f53\u524d\u65e0\u6cd5\u5728\u7f51\u683c\u4e2d\u7528\u767e\u5206\u6bd4\u683c\u5f0f\u66f4\u65b0\u6570\u5b57\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igPercentEditor\u3002",igDateEditorException:"\u5f53\u524d\u65e0\u6cd5\u66f4\u65b0\u7f51\u683c\u4e2d\u7684\u65e5\u671f\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igDateEditor\u3002",igDatePickerException:"\u5f53\u524d\u65e0\u6cd5\u66f4\u65b0\u7f51\u683c\u4e2d\u7684\u65e5\u671f\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igDatePicker\u3002",igTimePickerException:"\u5f53\u524d\u65e0\u6cd5\u66f4\u65b0\u7f51\u683c\u4e2d\u7684\u65e5\u671f\u5217\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igTimePicker\u3002",igComboException:"\u5f53\u524d\u65e0\u6cd5\u5728\u7f51\u683c\u4e2d\u4f7f\u7528\u7ec4\u5408\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igCombo\u3002",igRatingException:"\u5f53\u524d\u65e0\u6cd5\u5728\u7f51\u683c\u4e2d\u4f7f\u7528 igRating \u4f5c\u4e3a\u7f16\u8f91\u5668\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igRating\u3002",igValidatorException:"\u5f53\u524d\u4e0d\u652f\u6301 igGridUpdating \u4e2d\u5b9a\u4e49\u7684\u9009\u9879\u7684\u9a8c\u8bc1\u3002\u5e94\u8be5\u9996\u5148\u52a0\u8f7d ui.igValidator\u3002",noPrimaryKeyException:"\u4e3a\u4e86\u652f\u6301\u5220\u9664\u884c\u4e4b\u540e\u7684\u66f4\u65b0\u64cd\u4f5c\uff0c\u5e94\u7528\u7a0b\u5e8f\u5e94\u5728 igGrid \u7684\u9009\u9879\u4e2d\u5b9a\u4e49 primaryKey\u3002",hiddenColumnValidationException:"\u65e0\u6cd5\u7f16\u8f91\u5177\u6709\u9690\u85cf\u5217 (\u5df2\u542f\u7528\u9a8c\u8bc1) \u7684\u884c\u3002",dataDirtyException:"\u7f51\u683c\u5177\u6709\u6302\u8d77\u7684\u4e8b\u52a1\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd\u6570\u636e\u7684\u5448\u73b0\u3002\u4e3a\u4e86\u9632\u6b62\u5f02\u5e38\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u542f\u7528 igGrid \u7684 autoCommit \u9009\u9879\uff0c\u6216\u8005\u5e94\u5904\u7406 igGridUpdating \u7684 dataDirty \u4e8b\u4ef6\u5e76\u8fd4\u56de false\u3002\u5728\u5904\u7406\u8be5\u4e8b\u4ef6\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u8fd8\u53ef\u4ee5\u5728 igGrid \u4e2d\u6267\u884c commit() \u6570\u636e\u3002",recordOrPropertyNotFoundException:"\u672a\u627e\u5230\u6307\u5b9a\u7684\u8bb0\u5f55\u6216\u5c5e\u6027\u3002\u9a8c\u8bc1\u641c\u7d22\u6761\u4ef6\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u8c03\u6574\u3002",rowUpdatingNotSupportedWithColumnVirtualization:'\u4f7f\u7528 editMode: "row" \u66f4\u65b0\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u8be5\u7981\u7528 columnVirtualization\u3002',rowEditDialogCaptionLabel:"\u7f16\u8f91\u884c\u6570\u636e",excelNavigationNotSupportedWithCurrentEditMode:"Excel \u5bfc\u822a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002editMode \u5e94\u8bbe\u7f6e\u4e3a 'cell' \u6216 'row'\u3002",columnNotFound:"\u5728\u53ef\u89c1\u5217\u7684\u96c6\u5408\u4e2d\u672a\u627e\u5230\u6307\u5b9a\u7684\u5217\u5173\u952e\u5b57\u6216\u6307\u5b9a\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4\u3002",rowOrColumnSpecifiedOutOfView:"\u5f53\u524d\u65e0\u6cd5\u7f16\u8f91\u6307\u5b9a\u7684\u884c\u6216\u5217\u3002\u5b83\u5e94\u663e\u793a\u5728\u5f53\u524d\u9875\u9762\u548c\u865a\u62df\u5316\u6846\u67b6\u4e2d\u3002",editingInProgress:"\u5f53\u524d\u6b63\u5728\u7f16\u8f91\u884c\u6216\u5355\u5143\u683c\u3002\u5f53\u524d\u7f16\u8f91\u5b8c\u6210\u4e4b\u524d\uff0c\u65e0\u6cd5\u542f\u52a8\u5176\u4ed6\u66f4\u65b0\u7a0b\u5e8f\u3002",undefinedCellValue:"\u65e0\u6cd5\u5c06\u672a\u5b9a\u4e49\u503c\u8bbe\u7f6e\u4e3a\u5355\u5143\u683c\u503c\u3002",addChildTooltip:"\u6dfb\u52a0\u5b50\u884c",multiRowGridNotSupportedWithCurrentEditMode:"\u5f53\u7f51\u683c\u542f\u7528\u591a\u884c\u5e03\u5c40\u65f6\uff0c\u4ec5\u652f\u6301\u5bf9\u8bdd\u6846\u7f16\u8f91\u6a21\u5f0f\u3002",virtualizationNotSupportedWithoutAutoCommit:"\u5f53 autoCommit \u8bbe\u7f6e\u4e3a false \u65f6\uff0c\u4e0d\u652f\u6301\u542f\u7528\u66f4\u65b0\u548c\u865a\u62df\u5316\u3002\u8bf7\u5c06\u8868\u683c\u7684 autoCommit \u9009\u9879\u8bbe\u7f6e\u4e3a true\u3002"};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale["zh-Hans"].CellMerging={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",mergeStrategyNotAFunction:"\u6307\u5b9a\u7684 mergeStrategy \u65e0\u6cd5\u8bc6\u522b\u4e3a\u6709\u6548\u7684\u9884\u5b9a\u4e49\u503c\uff0c\u6216\u672a\u627e\u5230\u5177\u6709\u8be5\u540d\u79f0\u7684\u51fd\u6570\u3002"};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale["zh-Hans"].ColumnMoving={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",movingDialogButtonApplyText:"\u5e94\u7528",movingDialogButtonCancelText:"\u53d6\u6d88",movingDialogCaptionButtonDesc:"\u4e0b\u79fb",movingDialogCaptionButtonAsc:"\u4e0a\u79fb",movingDialogCaptionText:"\u79fb\u52a8\u5217",movingDialogDisplayText:"\u79fb\u52a8\u5217",movingDialogDropTooltipText:"\u79fb\u52a8\u5230\u8fd9\u91cc",movingDialogCloseButtonTitle:"\u5173\u95ed\u79fb\u52a8\u5bf9\u8bdd\u6846",dropDownMoveLeftText:"\u5411\u5de6\u79fb\u52a8",dropDownMoveRightText:"\u5411\u53f3\u79fb\u52a8",dropDownMoveFirstText:"\u5148\u79fb\u52a8",dropDownMoveLastText:"\u6700\u540e\u79fb\u52a8",featureChooserNotReferenced:"\u7f3a\u5c11\u5bf9\u529f\u80fd\u9009\u62e9\u5668\u7684\u5f15\u7528\u3002\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5305\u542b infragistics.ui.grid.featurechooser.js \u6216\u4f7f\u7528\u7ec4\u5408\u811a\u672c\u6587\u4ef6\u4e4b\u4e00\u3002",movingToolTipMove:"\u79fb\u52a8",featureChooserSubmenuText:"\u79fb\u81f3",columnVirtualizationEnabled:"\u5217\u79fb\u52a8\u9700\u8981\u4e0d\u540c\u7684\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u4f7f\u7528 rowVirtualization \u6216\u5c06 virtualizationMode \u8bbe\u7f6e\u4e3a 'continuous'\u3002"};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale["zh-Hans"].ColumnFixing={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",headerFixButtonText:"\u56fa\u5b9a\u6b64\u5217",headerUnfixButtonText:"\u53d6\u6d88\u56fa\u5b9a\u6b64\u5217",featureChooserTextFixedColumn:"\u56fa\u5b9a\u5217",featureChooserTextUnfixedColumn:"\u53d6\u6d88\u56fa\u5b9a\u5217",groupByNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u5206\u7ec4\u4f9d\u636e\u529f\u80fd\u3002",virtualizationNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u5e94\u8be5\u4f7f\u7528 rowVirtualization\u3002",columnVirtualizationNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u5e94\u7981\u7528 columnVirtualization\u3002",columnMovingNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u5217\u79fb\u52a8\u3002",hidingNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u9690\u85cf\u529f\u80fd\u3002",hierarchicalGridNotSupported:"igHierarchicalGrid \u4e0d\u652f\u6301\u5217\u56fa\u5b9a\u3002\u5e94\u7981\u7528\u5217\u56fa\u5b9a\u3002",responsiveNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u54cd\u5e94\u529f\u80fd\u3002",noGridWidthNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u7f51\u683c\u5bbd\u5ea6\u5e94\u8bbe\u7f6e\u4e3a\u767e\u5206\u6bd4\u6216\u50cf\u7d20\u6570\u3002",gridHeightInPercentageNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u8bbe\u7f6e\u7f51\u683c\u9ad8\u5ea6\u3002",defaultColumnWidthInPercentageNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u9ed8\u8ba4\u5217\u5bbd\u5e94\u8bbe\u7f6e\u4e3a\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u7684\u6570\u503c\u3002",columnsWidthShouldBeSetInPixels:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u5217\u5bbd\u8bbe\u7f6e\u3002\u5e26\u6709\u952e {key} \u7684\u5217\u7684\u5bbd\u5ea6\u5e94\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u8fdb\u884c\u8bbe\u7f6e\u3002",unboundColumnsNotSupported:"\u5217\u56fa\u5b9a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u672a\u7ed1\u5b9a\u5217\u3002",excelNavigationNotSupportedWithCurrentEditMode:"Excel \u5bfc\u822a\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002 editMode \u5e94\u8bbe\u7f6e\u4e3a 'cell' \u6216 'row'\u3002",initialFixingNotApplied:"\u521d\u59cb\u56fa\u5b9a\u4e0d\u9002\u7528\u4e8e\u5e26\u952e\u7684\u5217: {0}. \u539f\u56e0: {1}",setOptionGridWidthException:"\u9009\u9879\u7f51\u683c\u5bbd\u5ea6\u7684\u503c\u4e0d\u6b63\u786e\u3002\u5f53\u56fa\u5b9a\u5217\u5b58\u5728\u65f6\uff0c\u672a\u56fa\u5b9a\u5217\u7684\u53ef\u89c1\u533a\u57df\u7684\u5bbd\u5ea6\u5e94\u5927\u4e8e\u6216\u7b49\u4e8e minimumVisibleAreaWidth \u7684\u503c\u3002",noneError:"\u60a8\u7684\u7f51\u683c\u914d\u7f6e\u6210\u529f\uff01",notValidIdentifierError:"\u6307\u5b9a\u7684\u5217\u952e\u65e0\u6548\u3002\u63d0\u4f9b\u4e0e\u5176\u4e2d\u4e00\u4e2a\u5df2\u5b9a\u4e49\u7f51\u683c\u5217\u7684\u952e\u5339\u914d\u7684\u5217\u952e\u3002",fixingRefusedError:"\u5f53\u524d\u4e0d\u652f\u6301\u56fa\u5b9a\u6b64\u5217\u3002\u53d6\u6d88\u56fa\u5b9a\u53e6\u4e00\u4e2a\u53ef\u89c1\u5217\uff0c\u6216\u5148\u5bf9\u4efb\u4f55\u9690\u85cf\u7684\u672a\u56fa\u5b9a\u5217\u4f7f\u7528 showColumn() \u65b9\u6cd5\u3002",fixingRefusedMinVisibleAreaWidthError:"\u65e0\u6cd5\u56fa\u5b9a\u6b64\u5217\u3002\u5176\u5bbd\u5ea6\u8d85\u8fc7\u4e86\u7528\u4e8e\u5728\u7f51\u683c\u4e2d\u56fa\u5b9a\u5217\u7684\u53ef\u7528\u7a7a\u95f4\u3002",alreadyHiddenError:"\u5f53\u524d\u65e0\u6cd5\u56fa\u5b9a/\u53d6\u6d88\u56fa\u5b9a\u6b64\u5217\u3002\u5e94\u9996\u5148\u5728\u5217\u4e0a\u4f7f\u7528 showColumn() \u65b9\u6cd5\u3002",alreadyUnfixedError:"\u5df2\u53d6\u6d88\u56fa\u5b9a\u6b64\u5217\u3002",alreadyFixedError:"\u5df2\u56fa\u5b9a\u6b64\u5217\u3002",unfixingRefusedError:"\u5f53\u524d\u65e0\u6cd5\u53d6\u6d88\u56fa\u5b9a\u6b64\u5217\u3002\u5e94\u9996\u5148\u5728\u4efb\u4f55\u9690\u85cf\u7684\u56fa\u5b9a\u5217\u4e0a\u4f7f\u7528 showColumn() \u65b9\u6cd5\u3002",targetNotFoundError:"\u627e\u4e0d\u5230\u952e\u4e3a {key} \u7684\u76ee\u6807\u5217\u3002\u9a8c\u8bc1\u7528\u4e8e\u641c\u7d22\u7684\u5bc6\u94a5\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u8c03\u6574\u3002"};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale["zh-Hans"].GridAppendRowsOnDemand={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",loadMoreDataButtonText:"\u52a0\u8f7d\u66f4\u591a\u6570\u636e",appendRowsOnDemandRequiresHeight:"AppendRowsOnDemand \u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u8bbe\u7f6e\u7f51\u683c\u9ad8\u5ea6\u3002",
groupByNotSupported:"AppendRowsOnDemand \u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5206\u7ec4\u4f9d\u636e\u5e94\u7981\u7528\u3002",pagingNotSupported:"AppendRowsOnDemand \u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u5206\u9875\u3002",cellMergingNotSupported:"AppendRowsOnDemand \u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u5355\u5143\u683c\u5408\u5e76\u3002",virtualizationNotSupported:"AppendRowsOnDemand \u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u7981\u7528\u865a\u62df\u5316\u3002"};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale["zh-Hans"].igGridResponsive={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",fixedVirualizationNotSupported:'\u54cd\u5e94\u529f\u80fd\u9700\u8981\u4e0d\u540c\u7684\u865a\u62df\u5316\u8bbe\u7f6e\u3002\u865a\u62df\u5316\u6a21\u5f0f\u5e94\u8bbe\u7f6e\u4e3a "continuous"\u3002'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale["zh-Hans"].igGridMultiColumnHeaders={optionChangeNotSupported:"\u521d\u59cb\u5316\u540e\u65e0\u6cd5\u7f16\u8f91 {optionName}\u3002\u5176\u503c\u5e94\u5728\u521d\u59cb\u5316\u671f\u95f4\u8bbe\u7f6e\u3002",multiColumnHeadersNotSupportedWithColumnVirtualization:"\u591a\u5217\u6807\u9898\u8981\u6c42\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5e94\u8be5\u7981\u7528 columnVirtualization\u3002",cannotExpandMultiColumnHeader:"\u591a\u5217\u6807\u9898\u8d85\u51fa\u4e86\u5141\u8bb8\u7684\u6700\u5927\u56fa\u5b9a\u533a\u57df\u5bbd\u5ea6\uff0c\u56e0\u6b64\u65e0\u6cd5\u6269\u5c55",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"\u5c55\u5f00\u6216\u6298\u53e0\u591a\u5217\u6807\u9898\u65f6\uff0c\u81f3\u5c11\u5e94\u663e\u793a\u4e00\u5217\u3002",collapsedColumnIconTooltip:"\u5c55\u5f00",expandedColumnIconTooltip:"\u6298\u53e0"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale["zh-Hans"].Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale["zh-Hans"].GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale["zh-Hans"].GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale["zh-Hans"].GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale["zh-Hans"].GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale["zh-Hans"].GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale["zh-Hans"].GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale["zh-Hans"].GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale["zh-Hans"].GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale["zh-Hans"].GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale["zh-Hans"].GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale["zh-Hans"].CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale["zh-Hans"].ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale["zh-Hans"].ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale["zh-Hans"].GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale["zh-Hans"].igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale["zh-Hans"].igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale["zh-Hans"].HierarchicalGrid;return $.ig.locale["zh-Hans"]});