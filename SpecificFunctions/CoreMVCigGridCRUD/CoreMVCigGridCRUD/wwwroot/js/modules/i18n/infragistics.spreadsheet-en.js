/*!@license
* Infragistics.Web.ClientUI infragistics.spreadsheet.js resources 21.1.20211.72
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.en=$.ig.locale.en||{};$.ig.locale.en.spreadsheet=$.ig.locale.en.spreadsheet||{};var l=$.ig.locale.en.spreadsheet;l["CellBorderLineStyle_DashDot"]="DashDot";l["CellBorderLineStyle_DashDotDot"]="DashDotDot";l["CellBorderLineStyle_Dashed"]="Dashed";l["CellBorderLineStyle_Default"]="Default";l["CellBorderLineStyle_Dotted"]="Dotted";l["CellBorderLineStyle_Double"]="Double";l["CellBorderLineStyle_Hair"]="Hair";l["CellBorderLineStyle_Medium"]="Medium";l["CellBorderLineStyle_MediumDashDot"]="MediumDashDot";l["CellBorderLineStyle_MediumDashDotDot"]="MediumDashDotDot";l["CellBorderLineStyle_MediumDashed"]="MediumDashed";l["CellBorderLineStyle_None"]="None";l["CellBorderLineStyle_SlantedDashDot"]="SlantedDashDot";l["CellBorderLineStyle_Thick"]="Thick";l["CellBorderLineStyle_Thin"]="Thin";l["CopyError_InvalidSelection_Message"]="The operation cannot be performed on the current selection. If there are multiple selections ensure they form a rectangular region and do not overlap.";l["CustomValidationInformationMessage"]="{0}";l["CustomValidationStopMessage"]="{0}";l["CustomValidationWarningMessage"]="{0}\r\n\r\nContinue?";l["DefaultAutoFilterToolTip"]="(Showing All)";l["DefaultChartTitle"]="Chart Title";l["DefaultHyperlinkToolTip"]="{0} - Click once to follow. Click and hold to select this cell.";l["DefaultValidationInformationMessage"]="The value you entered is not valid.\r\n\r\nA user has restricted values that can be entered into this cell.";l["DefaultValidationStopMessage"]="The value you entered is not valid.\r\n\r\nA user has restricted values that can be entered into this cell.";l["DefaultValidationWarningMessage"]="The value you entered is not valid.\r\n\r\nA user has restricted values that can be entered into this cell.\r\n\r\nContinue?";l["DeleteWorksheets_Message"]="Deleting a worksheet cannot be undone and you may be removing some data. If you don't need it then click Ok.";l["Error_ChangePartOfDataTableError_Message"]="Cannot change part of a data table.";l["Error_DeletingLockedColumnCells_Message"]="You are trying to delete a column that contains a locked cell. Locked cells cannot be deleted while the worksheet is protected.";l["Error_DeletingLockedRowCells_Message"]="You are trying to delete a row that contains a locked cell. Locked cells cannot be deleted while the worksheet is protected.";l["Error_IntersectsMergedCells_Message"]="The operation cannot be performed because the selection intersects with a merged cell.";l["Error_InvalidArrayFormulaLockedState_Message"]="Cannot enter an array formula into a range of cells which are not all locked or unlocked.";l["Error_InvalidHyperlinkAddress_Message"]="Cannot open the specified file.";l["Error_InvalidHyperlinkReference_Message"]="Reference is not valid.";l["Error_InvalidProtectedWorksheetChange_Message"]="The cell you're trying to change is on a protected sheet.";l["Error_InvalidSortOrFilterRange_Message"]="This operation cannot be performed on the selected range. The selection should be within an area with data and/or formatting and should not contain table and non-table cells.";l["Error_LargeOperation_Message"]="The operation you are about to perform affects a large number of cells and may take a significant amount of time to complete. Are you sure you want to continue?";l["Error_LargePasteOperation_Message"]="The operation you are about to perform affects a large number of cells and may take a significant amount of time to complete. Are you sure you want to continue?";l["Error_NoSingleAllowedEditRange_Message"]="Some of the cells you are trying to change are password protected but no single password will allow access to all of the cells.";l["ExcelComparisonOperator_BeginsWith_DisplayText"]="begins with";l["ExcelComparisonOperator_Contains_DisplayText"]="contains";l["ExcelComparisonOperator_DoesNotBeginWith_DisplayText"]="does not begin with";l["ExcelComparisonOperator_DoesNotContain_DisplayText"]="does not contain";l["ExcelComparisonOperator_DoesNotEndWith_DisplayText"]="does not end with";l["ExcelComparisonOperator_EndsWith_DisplayText"]="ends with";l["ExcelComparisonOperator_Equals_DisplayText"]="equals";l["ExcelComparisonOperator_GreaterThan_DisplayText"]="is greater than";l["ExcelComparisonOperator_GreaterThanOrEqual_DisplayText"]="is greater than or equal to";l["ExcelComparisonOperator_LessThan_DisplayText"]="is less than";l["ExcelComparisonOperator_LessThanOrEqual_DisplayText"]="is less than or equal to";l["ExcelComparisonOperator_NotEqual_DisplayText"]="does not equal";l["ExcelTopOrBottomFilterDirection_Bottom_DisplayText"]="Bottom";l["ExcelTopOrBottomFilterDirection_Top_DisplayText"]="Top";l["ExcelTopOrBottomFilterTypes_Items_DisplayText"]="Items";l["ExcelTopOrBottomFilterTypes_Percent_DisplayText"]="Percent";l["FillPatternStyle_DiagonalCrosshatch"]="DiagonalCrosshatch";l["FillPatternStyle_DiagonalStripe"]="DiagonalStripe";l["FillPatternStyle_Gray12percent"]="Gray12percent";l["FillPatternStyle_Gray25percent"]="Gray25percent";l["FillPatternStyle_Gray50percent"]="Gray50percent";l["FillPatternStyle_Gray6percent"]="Gray6percent";l["FillPatternStyle_Gray75percent"]="Gray75percent";l["FillPatternStyle_HorizontalStripe"]="HorizontalStripe";l["FillPatternStyle_None"]="None";l["FillPatternStyle_ReverseDiagonalStripe"]="ReverseDiagonalStripe";l["FillPatternStyle_Solid"]="Solid";l["FillPatternStyle_ThickDiagonalCrosshatch"]="ThickDiagonalCrosshatch";l["FillPatternStyle_ThinDiagonalCrosshatch"]="ThinDiagonalCrosshatch";l["FillPatternStyle_ThinDiagonalStripe"]="ThinDiagonalStripe";l["FillPatternStyle_ThinHorizontalCrosshatch"]="ThinHorizontalCrosshatch";l["FillPatternStyle_ThinHorizontalStripe"]="ThinHorizontalStripe";l["FillPatternStyle_ThinReverseDiagonalStripe"]="ThinReverseDiagonalStripe";l["FillPatternStyle_ThinVerticalStripe"]="ThinVerticalStripe";l["FillPatternStyle_VerticalStripe"]="VerticalStripe";l["FilterDescription_AboveAverage"]="Above Average";l["FilterDescription_BelowAverage"]="Below Average";l["FilterDescription_BottomItems"]="Bottom {0} Items";l["FilterDescription_BottomPercent"]="Bottom {0} Percent";l["FilterDescription_CellFill_Named"]="Equals a {0} cell color";l["FilterDescription_CellFill_NoFill"]="Equals a cell color (No Fill)";l["FilterDescription_CellFill_Unknown"]="Equals a cell color";l["FilterDescription_ComparisonItem_BeginsWith"]='Begins with "{0}"';l["FilterDescription_ComparisonItem_Contains"]='Contains "{0}"';l["FilterDescription_ComparisonItem_DoesNotBeginWith"]='Does not begin with "{0}"';l["FilterDescription_ComparisonItem_DoesNotContain"]='Does not contain "{0}"';l["FilterDescription_ComparisonItem_DoesNotEndWith"]='Does not end with "{0}"';l["FilterDescription_ComparisonItem_EndsWith"]='Ends with "{0}"';l["FilterDescription_ComparisonItem_Equals"]='Equals "{0}"';l["FilterDescription_ComparisonItem_GreaterThan"]='Greater than "{0}"';l["FilterDescription_ComparisonItem_GreaterThanOrEqual"]='Greater than or equal to "{0}"';l["FilterDescription_ComparisonItem_LessThan"]='Less than "{0}"';l["FilterDescription_ComparisonItem_LessThanOrEqual"]='Less than or equal to "{0}"';l["FilterDescription_ComparisonItem_NotEqual"]='Does not equal "{0}"';l["FilterDescription_Custom_And"]="{0} and {1}";l["FilterDescription_Custom_Or"]="{0} or {1}";l["FilterDescription_FixedValues"]='Equals "{0}"';l["FilterDescription_FixedValues_Blanks"]="(Blanks)";l["FilterDescription_FixedValues_Day"]='"{0:MMMM dd yyyy}"';l["FilterDescription_FixedValues_Hour"]='"{0:MMMM dd yyyy h tt}"';l["FilterDescription_FixedValues_Minute"]='"{0:MMMM dd yyyy h:mm tt}"';l["FilterDescription_FixedValues_Month"]="{0:MMMM yyyy}";l["FilterDescription_FixedValues_Second"]='"{0:MMMM dd yyyy h:mm:ss tt}"';l["FilterDescription_FixedValues_Year"]="All of {0:yyyy}";l["FilterDescription_FontColor_Automatic"]="Equals a font color (Automatic)";l["FilterDescription_FontColor_Named"]="Equals a {0} font color";l["FilterDescription_FontColor_Unknown"]="Equals a font color";l["FilterDescription_MonthNumber"]='Equals "{0}"';l["FilterDescription_NoCellIcon"]="Equals a cell icon (No Cell Icon)";l["FilterDescription_QuarterNumber"]='Equals "Quarter {0}"';l["FilterDescription_RelativeDate_CurrentDay"]='Equals "Today"';l["FilterDescription_RelativeDate_CurrentMonth"]='Equals "This Month"';l["FilterDescription_RelativeDate_CurrentQuarter"]='Equals "This Quarter"';l["FilterDescription_RelativeDate_CurrentWeek"]='Equals "This Week"';l["FilterDescription_RelativeDate_CurrentYear"]='Equals "This Year"';l["FilterDescription_RelativeDate_NextDay"]='Equals "Tomorrow"';l["FilterDescription_RelativeDate_NextMonth"]='Equals "Next Month"';l["FilterDescription_RelativeDate_NextQuarter"]='Equals "Next Quarter"';l["FilterDescription_RelativeDate_NextWeek"]='Equals "Next Week"';l["FilterDescription_RelativeDate_NextYear"]='Equals "Next Year"';l["FilterDescription_RelativeDate_PreviousDay"]='Equals "Yesterday"';l["FilterDescription_RelativeDate_PreviousMonth"]='Equals "Last Month"';l["FilterDescription_RelativeDate_PreviousQuarter"]='Equals "Last Quarter"';l["FilterDescription_RelativeDate_PreviousWeek"]='Equals "Last Week"';l["FilterDescription_RelativeDate_PreviousYear"]='Equals "Last Year"';l["FilterDescription_TopItems"]="Top {0} Items";l["FilterDescription_TopPercent"]="Top {0} Percent";l["FilterDescription_WithCellIcon"]="Equals a {0}";l["FilterDescription_YearToDate"]='Equals "Year to Date"';l["FilterDialog_And"]="_And";l["FilterDialog_AsteriskHint"]="Use * to represent any series of characters";l["FilterDialog_Cancel"]="Cancel";l["FilterDialog_OK"]="OK";l["FilterDialog_Or"]="_Or";l["FilterDialog_QuestionMarkHint"]="Use ? to represent any single character";l["FilterDialog_ShowRowsWhere"]="Show rows where:";l["FilterDialog_Title"]="Custom AutoFilter";l["FormatCellsDialog_AlignmentTab_Text_Horizontal"]="_Horizontal";l["FormatCellsDialog_AlignmentTab_Text_Indent"]="Indent";l["FormatCellsDialog_AlignmentTab_Text_JustifyDistributed"]="Justify distributed";l["FormatCellsDialog_AlignmentTab_Text_MergeCells"]="_Merge cells";l["FormatCellsDialog_AlignmentTab_Text_RightToLeft"]="Right-to-left";l["FormatCellsDialog_AlignmentTab_Text_ShrinkToFit"]="Shrin_k to fit";l["FormatCellsDialog_AlignmentTab_Text_TextAlignment"]="Text alignment";l["FormatCellsDialog_AlignmentTab_Text_TextControl"]="Text control";l["FormatCellsDialog_AlignmentTab_Text_TextDirection"]="_Text direction";l["FormatCellsDialog_AlignmentTab_Text_Vertical"]="_Vertical";l["FormatCellsDialog_AlignmentTab_Text_WrapText"]="_Wrap Text";l["FormatCellsDialog_AlignmentTabCaption"]="Alignment";l["FormatCellsDialog_BorderTab_Text_Border"]="Border";l["FormatCellsDialog_BorderTab_Text_Color"]="_Color";l["FormatCellsDialog_BorderTab_Text_Description"]="The selected border style can be applied by clicking the presets or the buttons around the preview diagram.";l["FormatCellsDialog_BorderTab_Text_Line"]="Line";l["FormatCellsDialog_BorderTab_Text_PresetInside"]="_Inside";l["FormatCellsDialog_BorderTab_Text_PresetNone"]="_None";l["FormatCellsDialog_BorderTab_Text_PresetOutline"]="_Outline";l["FormatCellsDialog_BorderTab_Text_Presets"]="Presets";l["FormatCellsDialog_BorderTab_Text_SampleText"]="Text";l["FormatCellsDialog_BorderTab_Text_Style"]="_Style";l["FormatCellsDialog_BorderTabCaption"]="Border";l["FormatCellsDialog_Cancel"]="Cancel";l["FormatCellsDialog_FillTab_Text_BackgroundColor"]="Background _Color";l["FormatCellsDialog_FillTab_Text_PatternColor"]="P_attern Color";l["FormatCellsDialog_FillTab_Text_PatternStyle"]="_Pattern Style:";l["FormatCellsDialog_FillTab_Text_Sample"]="Sample";l["FormatCellsDialog_FillTabCaption"]="Fill";l["FormatCellsDialog_FontTabCaption"]="Font";l["FormatCellsDialog_NumberTab_CategoryLabel"]="_Category";l["FormatCellsDialog_NumberTab_DateFormatMasks"]="m/d/yyyy\r\n[$-F800]dddd, mmmm dd, yyyy\r\nm/d;@\r\nm/d/yy;@\r\nmm/dd/yy;@\r\n[$-409]d-mmm;@";l["FormatCellsDialog_NumberTab_DecimalPlaces"]="_Decimal Places:";l["FormatCellsDialog_NumberTab_SampleLabel"]="Sample";l["FormatCellsDialog_NumberTab_TimeFormatMasks"]="[$-F400]h:mm:ss AM/PM\r\nh:mm;@\r\n[$-409]h:mm AM/PM;@\r\nh:mm:ss;@\r\n[$-409]h:mm:ss AM/PM;@";l["FormatCellsDialog_NumberTabCaption"]="Number";l["FormatCellsDialog_NumberTabInvalidMaskError"]="The specified format mask '{0}' is not valid.";l["FormatCellsDialog_OK"]="OK";l["FormatCellsDialog_ProtectionTab_Text_Locked"]="_Locked";l["FormatCellsDialog_ProtectionTab_Text_Summary"]="Locking cells has no effect until you protect the worksheet.";l["FormatCellsDialog_ProtectionTabCaption"]="Protection";l["FormatCellsDialog_Title"]="Format Cells";l["FormatInfo_Accounting"]="Accounting";l["FormatInfo_Accounting_NumberFormat_Description"]="Accounting formats line up the currency symbols and decimal points in a column.";l["FormatInfo_BlankDocument"]="Blank Document";l["FormatInfo_Currency"]="Currency";l["FormatInfo_Currency_NumberFormat_Description"]="Currency formats are used for general monetary values.  Use Accounting formats to align decimal points in a column.";l["FormatInfo_Custom"]="Custom";l["FormatInfo_Custom_NumberFormat_Description"]="Type the number format code, using one of the existing codes as a starting point.";l["FormatInfo_Date"]="Date";l["FormatInfo_Date_NumberFormat_Description"]="Date formats display date and time serial numbers as date values.  Date formats that begin with an asterisk (*) respond to changes in regional date and time settings that are specified for the operating system. Formats without an asterisk are not affected by operating system settings.";l["FormatInfo_FormatHeader_NegativeNumbers"]="Negative numbers:";l["FormatInfo_FormatHeader_Type"]="Type:";l["FormatInfo_Fraction"]="Fraction";l["FormatInfo_Fraction_Eighths"]="As eighths (4/8)";l["FormatInfo_Fraction_Halves"]="As halves (1/2)";l["FormatInfo_Fraction_Hundreths"]="As hundreths (30/100)";l["FormatInfo_Fraction_OneDigit"]="Up to one digit (1/4)";l["FormatInfo_Fraction_Quarters"]="As quarters (2/4)";l["FormatInfo_Fraction_Sixteenths"]="As sixteenths (8/16)";l["FormatInfo_Fraction_Tenths"]="As tenths (3/10)";l["FormatInfo_Fraction_ThreeDigits"]="Up to three digits (312/943)";l["FormatInfo_Fraction_TwoDigits"]="Up to two digits (21/25)";l["FormatInfo_General"]="General";l["FormatInfo_General_NumberFormat_Description"]="General format cells have no specific number format.";l["FormatInfo_Number"]="Number";l["FormatInfo_Number_NumberFormat_Description"]="Number is used for general display of numbers.  Currency and Accounting offer specialized formatting for monetary value.";l["FormatInfo_Percentage"]="Percentage";l["FormatInfo_Percentage_NumberFormat_Description"]="Percentage formats multiply the cell value by 100 and displays the result with a percent symbol.";l["FormatInfo_ProjectBudget"]="Project Budget";l["FormatInfo_Scientific"]="Scientific";l["FormatInfo_Special"]="Special";l["FormatInfo_Special_NumberFormat_Description"]="Special formats are useful for tracking list and database values.";l["FormatInfo_Special_PhoneNumber"]="Phone Number";l["FormatInfo_Special_SocialSecurityNumber"]="Social Security Number";l["FormatInfo_Special_ZipCode"]="Zip Code";l["FormatInfo_Special_ZipCodePlus4"]="Zip Code + 4";l["FormatInfo_Text"]="Text";l["FormatInfo_Text_NumberFormat_Description"]="Text format cells are treated as text even when a number is in the cell.  The cell is displayed exactly as entered.";l["FormatInfo_Time"]="Time";l["FormatInfo_Time_NumberFormat_Description"]="Time formats display date and time serial numbers as date values.  Time formats that begin with an asterisk (*) respond to changes in regional date and time settings that are specified for the operating system. Formats without an asterisk are not affected by operating system settings.";l["HorizontalCellAlignment_Center"]="Center";l["HorizontalCellAlignment_CenterAcrossSelection"]="CenterAcrossSelection";l["HorizontalCellAlignment_Default"]="Default";l["HorizontalCellAlignment_Distributed"]="Distributed";l["HorizontalCellAlignment_Fill"]="Fill";l["HorizontalCellAlignment_General"]="General";l["HorizontalCellAlignment_Justify"]="Justify";l["HorizontalCellAlignment_Left"]="Left";l["HorizontalCellAlignment_Right"]="Right";l["Icon_BlackCircle"]="Black Circle";l["Icon_BlackCircleWithBorder"]="Black Circle With Border";l["Icon_CircleWithOneWhiteQuarter"]="Circle With One White Quarter";l["Icon_CircleWithThreeWhiteQuarters"]="Circle With Three White Quarters";l["Icon_CircleWithTwoWhiteQuarters"]="Circle With Two White Quarters";l["Icon_FourBars"]="Signal Meter With Four Filled Bars";l["Icon_FourFilledBoxes"]="Four Filled Boxes";l["Icon_GoldStar"]="Gold Star";l["Icon_GrayCircle"]="Gray Circle";l["Icon_GrayDownArrow"]="Gray Down Arrow";l["Icon_GrayDownInclineArrow"]="Gray Down Incline Arrow";l["Icon_GraySideArrow"]="Gray Side Arrow";l["Icon_GrayUpArrow"]="Gray Up Arrow";l["Icon_GrayUpInclineArrow"]="Gray Up Incline Arrow";l["Icon_GreenCheck"]="Green Check";l["Icon_GreenCheckSymbol"]="Green Check Symbol";l["Icon_GreenCircle"]="Green Circle";l["Icon_GreenFlag"]="Green Flag";l["Icon_GreenTrafficLight"]="Green Traffic Light";l["Icon_GreenUpArrow"]="Green Up Arrow";l["Icon_GreenUpTriangle"]="Green Up Triangle";l["Icon_HalfGoldStar"]="Half Gold Star";l["Icon_OneBar"]="Signal Meter With One Filled Bar";l["Icon_OneFilledBox"]="One Filled Box";l["Icon_PinkCircle"]="Pink Circle";l["Icon_RedCircle"]="Red Circle";l["Icon_RedCircleWithBorder"]="Red Circle With Border";l["Icon_RedCross"]="Red Cross";l["Icon_RedCrossSymbol"]="Red Cross Symbol";l["Icon_RedDiamond"]="Red Diamond";l["Icon_RedDownArrow"]="Red Down Arrow";l["Icon_RedDownTriangle"]="Red Down Triangle";l["Icon_RedFlag"]="Red Flag";l["Icon_RedTrafficLight"]="Red Traffic Light";l["Icon_SilverStar"]="Silver Star";l["Icon_ThreeBars"]="Signal Meter With Three Filled Bars";l["Icon_ThreeFilledBoxes"]="Three Filled Boxes";l["Icon_TwoBars"]="Signal Meter With Two Filled Bars";l["Icon_TwoFilledBoxes"]="Two Filled Boxes";l["Icon_WhiteCircleAllWhiteQuarters"]="White Circle (All White Quarters)";l["Icon_YellowCircle"]="Yellow Circle";l["Icon_YellowDash"]="Yellow Dash";l["Icon_YellowDownInclineArrow"]="Yellow Down Incline Arrow";l["Icon_YellowExclamation"]="Yellow Exclamation";l["Icon_YellowExclamationSymbol"]="Yellow Exclamation Symbol";l["Icon_YellowFlag"]="Yellow Flag";l["Icon_YellowSideArrow"]="Yellow Side Arrow";l["Icon_YellowTrafficLight"]="Yellow Traffic Light";l["Icon_YellowTriangle"]="Yellow Triangle";l["Icon_YellowUpInclineArrow"]="Yellow Up Incline Arrow";l["Icon_ZeroBars"]="Signal Meter With No Filled Bars";l["Icon_ZeroFilledBoxes"]="Zero Filled Boxes";l["InvalidCommand_MixedSelection_Message"]="That command cannot be used with selections that contain a mix of entire rows/columns with other cells. Try selecting only entire rows, only entire columns or just groups of cells.";l["InvalidCommand_MultipleSelection_Message"]="That command cannot be used with multiple selections.\r\nSelect a single range and invoke the command again.";l["InvalidCommand_OverlappingSelection_Message"]="Cannot use that command on overlapping selections.";l["InvalidCommand_TableChangeWithMultipleSheetSelection_Message"]="Cannot make changes to a table when multiple sheets are selected.";l["InvalidDateTimeToolTip"]="Dates and times that are negative or too large display as #####.";l["InvalidNameBoxValue_Message"]="You must enter a valid reference you want to go to or type a valid name for the selection.";l["LE_MissingTemplatePart"]="A template part with a name of '{0}' and type '{1}' is required in the '{2}' template.";l["MenuItem_AllDatesInPeriod"]="All Dates in the _Period";l["MenuItem_AutoFit_Columns"]="_AutoFit Column Width";l["MenuItem_AutoFit_Rows"]="_AutoFit Row Height";l["MenuItem_Automatic"]="Automatic";l["MenuItem_ClearContents"]="Clear Co_ntents";l["MenuItem_ClearFilterEmpty"]="Cl_ear Filter";l["MenuItem_ClearFilterForColumn"]='Cl_ear Filter From "{0}"';l["MenuItem_ColorValue"]="RGB({0}, {1}, {2})";l["MenuItem_ConvertTableToRange"]="Con_vert to Range";l["MenuItem_Copy"]="_Copy";l["MenuItem_Cut"]="Cu_t";l["MenuItem_DateFilters"]="Date _Filters";l["MenuItem_Delete"]="_Delete";l["MenuItem_DeleteCells"]="_Delete";l["MenuItem_DeleteCells_Column"]="Entire _column";l["MenuItem_DeleteCells_DeleteTableColumns"]="Table _Columns";l["MenuItem_DeleteCells_DeleteTableRows"]="Table _Rows";l["MenuItem_DeleteCells_Row"]="Entire _row";l["MenuItem_DeleteCells_ShiftLeft"]="Shift cells _left";l["MenuItem_DeleteCells_ShiftUp"]="Shift cells _up";l["MenuItem_DeleteWorksheets"]="_Delete";l["MenuItem_Filter"]="Filt_er";l["MenuItem_Filter_AboveAverage"]="_Above Average";l["MenuItem_Filter_After"]="_After...";l["MenuItem_Filter_Before"]="_Before...";l["MenuItem_Filter_BeginsWith"]="Begins W_ith...";l["MenuItem_Filter_BelowAverage"]="Bel_ow Average";l["MenuItem_Filter_Between"]="Bet_ween...";l["MenuItem_Filter_Contains"]="Cont_ains...";l["MenuItem_Filter_Custom"]="Custom _Filter...";l["MenuItem_Filter_Day_Current"]="T_oday";l["MenuItem_Filter_Day_Next"]="_Tomorrow";l["MenuItem_Filter_Day_Previous"]="Yester_day";l["MenuItem_Filter_DoesNotContain"]="_Does Not Contain...";l["MenuItem_Filter_EndsWith"]="Ends Wi_th...";l["MenuItem_Filter_Equals"]="Equals...";l["MenuItem_Filter_GreaterThan"]="_Greater Than...";l["MenuItem_Filter_GreaterThanOrEqual"]="Greater Than _Or Equal To...";l["MenuItem_Filter_LessThan"]="_Less Than...";l["MenuItem_Filter_LessThanOrEqual"]="Less Than Or E_qual To...";l["MenuItem_Filter_Month_Current"]="Thi_s Month";l["MenuItem_Filter_Month_Next"]="Next _Month";l["MenuItem_Filter_Month_Previous"]="Last Mo_nth";l["MenuItem_Filter_NotEqual"]="Does _Not Equal...";l["MenuItem_Filter_Quarter_Current"]="This Q_uarter";l["MenuItem_Filter_Quarter_Next"]="Next _Quarter";l["MenuItem_Filter_Quarter_Previous"]="Last Qua_rter";l["MenuItem_Filter_QuarterNumber"]="Quarter _{0}";l["MenuItem_Filter_Top10"]="_Top 10...";l["MenuItem_Filter_Week_Current"]="T_his Week";l["MenuItem_Filter_Week_Next"]="Next Wee_k";l["MenuItem_Filter_Week_Previous"]="_Last Week";l["MenuItem_Filter_Year_Current"]="Th_is Year";l["MenuItem_Filter_Year_Next"]="Ne_xt Year";l["MenuItem_Filter_Year_Previous"]="Last _Year";l["MenuItem_Filter_YearToDate"]="Year to D_ate";l["MenuItem_FilterByCellColor"]="Filter by _Cell Color";l["MenuItem_FilterByCellFontColor"]="Filter by Selected Cell's _Font Color";l["MenuItem_FilterByCellIcon"]="Filter by Selected Cell's _Icon";l["MenuItem_FilterByCellValue"]="Filter by Selected Cell's _Value";l["MenuItem_FilterByColor"]="F_ilter by Color";l["MenuItem_FilterByFontColor"]="Filter by _Font Color";l["MenuItem_FilterByIcon"]="Filter by Conditional Formatting _Icon";l["MenuItem_GradientFill"]="Gradient";l["MenuItem_Hide"]="_Hide";l["MenuItem_Insert"]="_Insert";l["MenuItem_InsertCells"]="_Insert";l["MenuItem_InsertCells_AddTableColumn"]="Table Column to the _Right";l["MenuItem_InsertCells_AddTableRow"]="Table Row _Below";l["MenuItem_InsertCells_Column"]="Entire _column";l["MenuItem_InsertCells_InsertTableColumns"]="Table Columns to the _Left";l["MenuItem_InsertCells_InsertTableRows"]="Table Rows _Above";l["MenuItem_InsertCells_Row"]="Entire _row";l["MenuItem_InsertCells_ShiftDown"]="Shift cells _down";l["MenuItem_InsertCells_ShiftRight"]="Shift cells r_ight";l["MenuItem_InsertWorksheets"]="_Insert";l["MenuItem_NoFill"]="No Fill";l["MenuItem_NoIcon"]="No Icon";l["MenuItem_NumberFilters"]="Number _Filters";l["MenuItem_OpenHyperlink"]="_Open Hyperlink";l["MenuItem_Paste"]="_Paste";l["MenuItem_PickFromDropDownList"]="Pic_k From Drop-down List...";l["MenuItem_ReapplyFilter"]="_Reapply";l["MenuItem_RemoveHyperlink"]="_Remove Hyperlink";l["MenuItem_RemoveHyperlinks"]="_Remove Hyperlinks";l["MenuItem_RenameWorksheet"]="_Rename";l["MenuItem_Select"]="Se_lect";l["MenuItem_Select_SelectEntireTableColumn"]="_Entire Table Column";l["MenuItem_Select_SelectTableColumnData"]="Table _Column Data";l["MenuItem_Select_SelectTableRow"]="Table _Row";l["MenuItem_SelectAllWorksheets"]="_Select All Sheets";l["MenuItem_ShowFormatCellsDialog"]="_Format Cells...";l["MenuItem_Sort"]="S_ort";l["MenuItem_Sort_Custom"]="C_ustom Sort...";l["MenuItem_SortAscending_Date"]="_Sort Oldest to Newest";l["MenuItem_SortAscending_Number"]="_Sort Smallest to Largest";l["MenuItem_SortAscending_Text"]="_Sort A to Z";l["MenuItem_SortByCellColor"]="Put Selected _Cell Color On Top";l["MenuItem_SortByCellColorHeader"]="Sort by _Cell Color";l["MenuItem_SortByCellFontColor"]="Put Selected _Font Color On Top";l["MenuItem_SortByCellIcon"]="Put Selected _Icon On Top";l["MenuItem_SortByColor"]="Sor_t by Color";l["MenuItem_SortByFontColor"]="Sort by _Font Color";l["MenuItem_SortByIcon"]="Sort by Conditional Formatting _Icon";l["MenuItem_SortDescending_Date"]="S_ort Newest to Oldest";l["MenuItem_SortDescending_Number"]="S_ort Largest to Smallest";l["MenuItem_SortDescending_Text"]="S_ort Z to A";l["MenuItem_Table"]="Ta_ble";l["MenuItem_TextFilters"]="Text _Filters";l["MenuItem_ToggleTableTotalRow"]="_Totals Row";l["MenuItem_Unhide"]="_Unhide";l["MenuItem_UnselectWorksheets"]="_Ungroup Sheets";l["NewSheetName"]="Sheet{0}";l["PasteError_CellRangeSize_Message"]="The paste operation cannot be performed because the copy area and paste area are not the same size.\r\nTry one of the following:\r\n* Click one cell, then paste\r\n* Select a rectangle that's the same size, then paste.";l["PasteError_General_Message"]="An error occurred during the paste operation:\r\n{0}";l["PasteError_IntersectsMergedCells_Message"]="The paste operation cannot be performed because the paste area intersects with a merged cell.";l["PasteError_InvalidSelectedSheetCount_Message"]="The paste operation cannot be performed because the number of worksheets in the copy and paste areas are not the same size.";l["PasteError_InvalidSourceRanges_Message"]="The paste operation cannot be performed on the copy areas provided.";l["PasteError_MultipleSheetTables_Message"]="The paste operation cannot be performed because the source had multiple worksheets and there are tables in the source selection.";l["PasteError_MultipleSourceAndTargetRanges_Message"]="The paste operation cannot be performed because there are multiple selections in the source and target worksheets.";l["SheetNameError_Message_Invalid"]="You entered an invalid name '{0}' for the sheet. Make sure that:\r\n* The name is not blank.\r\n* There are no more than 31 characters in the name.\r\n* The name does not start or end with a single quote (').\r\n* The name does not contain any of the following characters: : \\ / ? * [ ]";l["SheetNameError_Message_NameIsUsed"]="A worksheet with the name '{0}' already exists in the workbook.";l["SortDialog_AddLevel"]="_Add Level";l["SortDialog_Cancel"]="Cancel";l["SortDialog_CellFill_Gradient"]="Gradient";l["SortDialog_CellFill_NoColor"]="No Color";l["SortDialog_Color_RGB"]="RGB ({0}, {1}, {2})";l["SortDialog_Column_ColumnHeader"]="Column";l["SortDialog_ColumnName"]="Column {0}";l["SortDialog_ConditionalFormatIcon_NoCellIcon"]="No Cell Icon";l["SortDialog_CopyLevel"]="_Copy Level";l["SortDialog_DeleteLevel"]="_Delete Level";l["SortDialog_MoveDown"]="Move Down";l["SortDialog_MoveUp"]="Move Up";l["SortDialog_MyDataHasHeaders"]="My data has _headers";l["SortDialog_OK"]="OK";l["SortDialog_Options"]="_Options...";l["SortDialog_Order_ColumnHeader"]="Order";l["SortDialog_Row_ColumnHeader"]="Row";l["SortDialog_RowName"]="Row {0}";l["SortDialog_SortBy_Label"]="Sort By";l["SortDialog_SortConditionError_DuplicateItemSorted"]="Duplicate sort conditions detected.";l["SortDialog_SortConditionError_FieldCannotBeNull"]="Sort condition field: '{0}' cannot be null";l["SortDialog_SortDirection_CustomList"]="Custom List...";l["SortDialog_SortDirection_Date_Ascending"]="Oldest to Newest";l["SortDialog_SortDirection_Date_Descending"]="Newest to Oldest";l["SortDialog_SortDirection_Number_Ascending"]="Smallest to Largest";l["SortDialog_SortDirection_Number_Descending"]="Largest to Smallest";l["SortDialog_SortDirection_Text_Ascending"]="A to Z";l["SortDialog_SortDirection_Text_Descending"]="Z to A";l["SortDialog_SortDirectionLeftOrRight_Ascending"]="On Left";l["SortDialog_SortDirectionLeftOrRight_Descending"]="On Right";l["SortDialog_SortDirectionTopOrBottom_Ascending"]="On Top";l["SortDialog_SortDirectionTopOrBottom_Descending"]="On Bottom";l["SortDialog_SortOn_ColumnHeader"]="Sort On";l["SortDialog_Text_Automatic"]="Automatic";l["SortDialog_ThenBy_Label"]="Then By";l["SortDialog_Title"]="Sort";l["SortOptionsDialog_Cancel"]="Cancel";l["SortOptionsDialog_CaseSensitive"]="_Case sensitive";l["SortOptionsDialog_OK"]="OK";l["SortOptionsDialog_Orientation"]="Orientation";l["SortOptionsDialog_SortLeftToRight"]="Sort _left to right";l["SortOptionsDialog_SortTopToBottom"]="Sort _top to bottom";l["SortOptionsDialog_Title"]="Sort Options";l["SpreadsheetFontControl_ColorLabel"]="_Color:";l["SpreadsheetFontControl_FontLabel"]="_Font:";l["SpreadsheetFontControl_FontStyle_Bold"]="Bold";l["SpreadsheetFontControl_FontStyle_BoldItalic"]="Bold Italic";l["SpreadsheetFontControl_FontStyle_Italic"]="Italic";l["SpreadsheetFontControl_FontStyle_Regular"]="Regular";l["SpreadsheetFontControl_FontStyleLabel"]="F_ont style:";l["SpreadsheetFontControl_NormalFontLabel"]="_Normal font";l["SpreadsheetFontControl_SizeLabel"]="_Size:";l["SpreadsheetFontControl_StrikethroughLabel"]="Stri_kethrough";l["SpreadsheetFontControl_SubscriptLabel"]="Su_bscript";l["SpreadsheetFontControl_SuperscriptLabel"]="Su_perscript";l["SpreadsheetFontControl_Text_Automatic"]="Automatic";l["SpreadsheetFontControl_Text_Effects"]="Effects";l["SpreadsheetFontControl_Text_NoColor"]="No Color";l["SpreadsheetFontControl_Text_Preview"]="Preview";l["SpreadsheetFontControl_UnderlineLabel"]="_Underline:";l["SpreadsheetSortDialogConditionTypes_CustomListSortCondition_DisplayText"]="Custom List";l["SpreadsheetSortDialogConditionTypes_FillSortCondition_DisplayText"]="Cell Color";l["SpreadsheetSortDialogConditionTypes_FontColorSortCondition_DisplayText"]="Font Color";l["SpreadsheetSortDialogConditionTypes_IconSortCondition_DisplayText"]="Conditional Formatting Icon";l["SpreadsheetSortDialogConditionTypes_OrderedSortCondition_DisplayText"]="Cell Values";l["SpreadsheetThemeColorPickerControl_Text_Automatic"]="Automatic";l["SpreadsheetThemeColorPickerControl_Text_NoColor"]="No Color";l["SpreadsheetThemeColorPickerControl_Text_StandardColors"]="Standard Colors";l["SpreadsheetThemeColorPickerControl_Text_ThemeColors"]="Theme Colors";l["ToolTip_FormulaBarCancelButton"]="Cancel";l["ToolTip_FormulaBarEnterButton"]="Enter";l["ToolTip_FormulaBarNameBox"]="Name Box";l["ToolTip_FormulaBarTextEditor"]="Formula Bar";l["TopOrBottomDialog_Cancel"]="Cancel";l["TopOrBottomDialog_OK"]="OK";l["TopOrBottomDialog_Show"]="Show";l["TopOrBottomDialog_Title"]="Top 10 AutoFilter";l["TotalRow_Average"]="Average";l["TotalRow_Count"]="Count";l["TotalRow_CountNumbers"]="Count Numbers";l["TotalRow_Max"]="Max";l["TotalRow_Min"]="Min";l["TotalRow_None"]="None";l["TotalRow_StdDev"]="StdDev";l["TotalRow_Sum"]="Sum";l["TotalRow_Var"]="Var";l["Undo_AddTableColumn"]="Add Table Column";l["Undo_AddTableRow"]="Add Table Row";l["Undo_AutoFilterOff"]="AutoFilter Off";l["Undo_AutoFilterOn"]="AutoFilter On";l["Undo_Bold"]="Bold";l["Undo_Borders"]="Borders";l["Undo_BottomAlignment"]="Bottom Alignment";l["Undo_CenterAlignment"]="Center Alignment";l["Undo_ChangeTotalRowFormula"]="Change Total Row Formula";l["Undo_ChartAdd"]="Insert Chart";l["Undo_ChartModify"]="Modify Chart";l["Undo_ChartRemove"]="Remove Chart";l["Undo_ClearCellContents"]="Clear {0}";l["Undo_ClearCellFormats"]="Clear";l["Undo_ClearHyperlinks"]="Clear Hyperlinks";l["Undo_ClearShapes"]="Clear Shapes";l["Undo_ClearTables"]="Clear Tables";l["Undo_ConditionalFormat"]="Conditional Formatting";l["Undo_ConvertTableToRange"]="Convert Table to Range";l["Undo_CreateNamedReference"]="Define Name";l["Undo_CreateTable"]="Create Table";
l["Undo_Cut"]="Cut";l["Undo_Delete"]="Delete";l["Undo_DeleteTableColumn"]="Delete Column";l["Undo_DeleteTableRow"]="Delete Row";l["Undo_EditCell"]="Typing '{1}' in {0}";l["Undo_Entry"]="Entry";l["Undo_Filter"]="Filter";l["Undo_Font"]="Font";l["Undo_FontSize"]="Font Size";l["Undo_FormatCells"]="Format Cells";l["Undo_Group"]="Group";l["Undo_Hyperlink"]="Hyperlink";l["Undo_InsertCells"]="Insert Cells";l["Undo_InsertColumns"]="Insert Columns";l["Undo_InsertRows"]="Insert Rows";l["Undo_InsertTableColumns"]="Insert Columns";l["Undo_InsertTableRows"]="Insert Rows";l["Undo_Italic"]="Italic";l["Undo_JustifyAlignment"]="Justify Alignment";l["Undo_LeftAlignment"]="Left Alignment";l["Undo_MergeCells"]="Merge Cells";l["Undo_MiddleAlignment"]="Center Vertically Alignment";l["Undo_Paste"]="Paste";l["Undo_Reapply"]="Reapply";l["Undo_RemoveHyperlinks"]="Remove Hyperlinks";l["Undo_RemoveTable"]="Remove Table";l["Undo_ResetOptions"]="Reset Options";l["Undo_ResizeColumn"]="Column Width";l["Undo_ResizeRow"]="Row Height";l["Undo_RightAlignment"]="Right Alignment";l["Undo_Shape"]="Shape";l["Undo_ShapeAdd"]="Insert Shape";l["Undo_ShapeRemove"]="Remove Shape";l["Undo_ShowAll"]="Show All";l["Undo_Sort"]="Sort";l["Undo_SparklineAdd"]="Insert Sparkline";l["Undo_SparklineColorChange"]="Sparkline Color Change";l["Undo_SparklineDataChange"]="Sparkline Data Change";l["Undo_SparklineRemove"]="Clear Sparklines";l["Undo_SparklineStyleChange"]="Sparkline Style Change";l["Undo_SparklineTypeChange"]="Sparkline Type Change";l["Undo_Strikethrough"]="Strikethrough";l["Undo_Style"]="Style";l["Undo_TabColor"]="Tab Color";l["Undo_TableAutoExpansion"]="Table AutoExpansion";l["Undo_ToggleTotalRow"]="Toggle Total Row";l["Undo_TopAlignment"]="Top Alignment";l["Undo_Underline"]="Underline";l["Undo_View"]="View Change";l["Undo_WrapText"]="Wrap Text";l["Undo_Zoom"]="Zoom";l["VerticalCellAlignment_Bottom"]="Bottom";l["VerticalCellAlignment_Center"]="Center";l["VerticalCellAlignment_Default"]="Default";l["VerticalCellAlignment_Distributed"]="Distributed";l["VerticalCellAlignment_Justify"]="Justify";l["VerticalCellAlignment_Top"]="Top";$.ig.spreadsheet=$.ig.spreadsheet||{};$.ig.spreadsheet.locale=$.ig.spreadsheet.locale||l;return l});