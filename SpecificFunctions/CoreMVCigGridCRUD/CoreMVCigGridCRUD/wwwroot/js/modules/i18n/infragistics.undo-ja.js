/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 21.1.20211.72
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.ja=$.ig.locale.ja||{};$.ig.locale.ja.undo=$.ig.locale.ja.undo||{};var l=$.ig.locale.ja.undo;l["AddItemDescription"]="'{1}' \u306e\u8ffd\u52a0";l["AddItemDescriptionDetailed"]="'{1}' \u306e\u8ffd\u52a0";l["AddRangeDescription"]="{1} {2}\u306e\u8ffd\u52a0";l["AddRangeDescriptionDetailed"]="{1} {2}\u306e\u8ffd\u52a0";l["FallbackTransactionDescription"]="";l["LE_AddOpenTransaction"]="\u958b\u304b\u308c\u305f\u3053\u3068\u304c\u306a\u3044\u3001\u307e\u305f\u306f\u958b\u3044\u3066\u3044\u308b UndoTransaction \u306f\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_AddTransactionDirect"]="UndoTransaction \u306f\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3002RootTransaction \u306f\u81ea\u52d5\u7684\u306b Commit \u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002";l["LE_AddUnitWhileTransactionOpen"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u5165\u308c\u5b50\u306b\u306a\u3063\u305f\u958b\u3044\u3066\u3044\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 '{0}' \u3092\u542b\u3080\u5834\u5408\u3001UndoUnit \u3092\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_ArgumentIsNegative"]=" '{0}' \u306f 0 \u4ee5\u4e0a\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u73fe\u5728\u5024: '{1}'";l["LE_CannotExecuteOpenTransaction"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 '{0}' \u304c\u958b\u3044\u3066\u3044\u308b\u9593\u306b Execute \u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_ChangeHistoryInMerge"]="Merge \u304c\u547c\u3073\u51fa\u3055\u308c\u3066\u3044\u308b\u9593\u306f Undo/Redo \u5c65\u6b74\u3092\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_ChangeHistoryInRemoveAll"]="RemoveAll \u304c\u547c\u3073\u51fa\u3055\u308c\u3066\u3044\u308b\u9593\u306f Undo/Redo \u5c65\u6b74\u3092\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_ChildTransactionNotInUnits"]="\u6307\u5b9a\u3057\u305f\u5b50\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 '{0}' \u306f\u3001\u3053\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 \u30e6\u30cb\u30c3\u30c8\u306e\u4e00\u90e8\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002";l["LE_ClosingOtherTransaction"]="\u6307\u5b9a\u3057\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 '{0}' \u306f\u73fe\u5728\u958b\u3044\u3066\u3044\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 '{1}' \u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 ";l["LE_EndTransactionWhileSuspended"]="UndoManager \u304c\u4e2d\u65ad\u3057\u3066\u3044\u308b\u9593\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9589\u3058\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_EnumEnded"]="\u5217\u6319\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002";l["LE_EnumFailedVersion"]="\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306f\u5217\u6319\u5b50\u306e\u958b\u59cb\u5f8c\u306b\u5909\u66f4\u3055\u308c\u307e\u3057\u305f\u3002";l["LE_EnumNotStarted"]="\u5217\u6319\u5b50\u306f\u958b\u59cb\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u3002MoveNext \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002";l["LE_FactoryNullTransaction"]="UndoUnitFactory \u306f null Undo \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002";l["LE_HasOpenTransaction"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u3059\u3067\u306b\u958b\u3044\u3066\u3044\u307e\u3059\u3002";l["LE_HistoryItemNotInCurrentHistory"]="UndoManager \u3067\u3001\u95a2\u9023\u3065\u3051\u3089\u308c\u305f\u5143\u306b\u623b\u3059\u307e\u305f\u306f\u3084\u308a\u76f4\u3057\u306e\u5c65\u6b74\u5185\u306bUndoHistoryItem \u304c\u5b58\u5728\u3057\u307e\u305b\u3093\u3002";l["LE_InvalidTransactionOwner"]="\u6307\u5b9a\u3057\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e Owner \u306f\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002";l["LE_NeedAddRemoveAction"]="\u6307\u5b9a\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u306f 'Add' or 'Remove' \u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002";l["LE_NewTransactionWhileSuspended"]="UndoManager \u304c\u4e2d\u65ad\u3057\u3066\u3044\u308b\u9593\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_RangeCollectionAction"]="Range \u30a2\u30af\u30b7\u30e7\u30f3\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u305b\u3093\u3002";l["LE_ReferenceNotRegistered"]="\u6307\u5b9a\u3057\u305f\u53c2\u7167 '{0}' \u306f UndoManager \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002 \r\nRegisterReference \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066 UndoManager \u3068\u53c2\u7167\u3092\u767b\u9332\u3057\u307e\u3059\u3002\u307e\u305f\u306f\u3001UndoManager.Current thread \u9759\u7684/\u5171\u6709\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u53c2\u7167\u3068\u3057\u3066 null \u3092\u6e21\u3057\u307e\u3059\u3002";l["LE_ReferenceRegisteredToOther"]="\u6307\u5b9a\u3057\u305f\u53c2\u7167 '{0}' \u306f\u3001\u7570\u306a\u308bUndoManager \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u767b\u9332\u3055\u308c\u307e\u3059\u3002";l["LE_RemoveAllFailedVersion"]="\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306f RemoveAll \u3078\u306e\u547c\u3073\u51fa\u3057\u4e2d\u306b\u5909\u66f4\u3055\u308c\u307e\u3057\u305f\u3002";l["LE_ResetCollectionAction"]="Reset \u30a2\u30af\u30b7\u30e7\u30f3\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u305b\u3093\u3002";l["LE_TargetCollectionIsReadOnly"]="\u6307\u5b9a\u3057\u305f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3 '{0}' \u306f\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3067\u3059\u3002";l["LE_TransactionAlreadyOpened"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u3059\u3067\u306b\u958b\u3044\u3066\u3044\u307e\u3059\u3002";l["LE_TransactionClosed"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u9589\u3058\u3089\u308c\u308b\u307e\u3067\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_TransactionNotOpened"]="\u6307\u5b9a\u3057\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 '{0}' \u306f\u958b\u3044\u3066\u3044\u307e\u305b\u3093\u3002";l["LE_TransactionNotStarted"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u958b\u59cb\u3055\u308c\u308b\u307e\u3067\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_UndoManagerAsReference"]="'UndoManager' \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u53c2\u7167\u306b\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_UndoRedoInRollback"]="Rollback \u51e6\u7406\u4e2d\u306f Undo/Redo \u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_UndoRedoInTransaction"]="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u958b\u3044\u3066\u3044\u308b\u3068\u304d\u306f Undo/Redo \u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_UndoRedoInUndoRedo"]="Undo/Redo \u51e6\u7406\u4e2d\u306f Undo/Redo \u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002";l["LE_UndoRedoWhileSuspended"]="UndoManager \u51e6\u7406\u4e2d\u306f Undo/Redo \u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002";l["MoveItemDescription"]="\u9805\u76ee\u306e\u79fb\u52d5";l["MoveItemDescriptionDetailed"]="'{1}' \u3092 '{2}' \u304b\u3089 '{3}' \u3078\u79fb\u52d5\u3059\u308b";l["PropertyChangeDescription"]="'{1}' \u306e '{0}' \u3092\u5909\u66f4";l["PropertyChangeDescriptionDetailed"]="'{1}' \u306e '{0}' \u3092 '{3}' \u3078\u5909\u66f4";l["ReinitializeCollectionDescription"]="'{2}' \u306e\u4e00\u62ec\u5909\u66f4";l["ReinitializeCollectionDescriptionDetailed"]="'{2}' \u306e\u4e00\u62ec\u5909\u66f4";l["RemoveItemDescription"]="'{1}' \u306e\u79fb\u52d5";l["RemoveItemDescriptionDetailed"]="'{1}' \u306e\u524a\u9664";l["RemoveRangeDescription"]="{1} {2} \u306e\u524a\u9664";l["RemoveRangeDescriptionDetailed"]="{1} {2} \u306e\u524a\u9664";l["ReplaceItemDescription"]="'{1}' \u306e\u7f6e\u304d\u63db\u3048";l["ReplaceItemDescriptionDetailed"]="'{1}' \u3092 '{2}' \u3068\u7f6e\u304d\u63db\u3048\u308b";$.ig.undo=$.ig.undo||{};$.ig.undo.locale=$.ig.undo.locale||l;return l});