/*!@license
* Infragistics.Web.ClientUI Grid localization resources 21.1.25
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.es=$.ig.locale.es||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.es.Grid={noSuchWidget:"{featureName}\xa0no se ha reconocido. Compruebe que existe dicha funci\xf3n y que la ortograf\xeda es correcta.",autoGenerateColumnsNoRecords:"autoGenerateColumns est\xe1 habilitado, pero no hay registros en el origen de datos para determinar las columnas",optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",optionChangeNotScrollingGrid:"{optionName} no se puede editar tras la inicializaci\xf3n porque su tabla no se desplaza en el inicio y ser\xe1 necesario volver a hacer una representaci\xf3n completa. Esta opci\xf3n debe establecerse durante la inicializaci\xf3n.",widthChangeFromPixelsToPercentagesNotSupported:"No se puede cambiar de forma din\xe1mica la opci\xf3n del ancho de la cuadr\xedcula de p\xedxeles a porcentajes.",widthChangeFromPercentagesToPixelsNotSupported:"No se puede cambiar de forma din\xe1mica la opci\xf3n del ancho de la cuadr\xedcula de porcentajes a p\xedxeles.",noPrimaryKeyDefined:"No se ha definido una clave principal para la cuadr\xedcula. Para usar funciones como la edici\xf3n de cuadr\xedculas, debe definir una clave principal.",indexOutOfRange:"El \xedndice de filas especificadas est\xe1 fuera de rango. Debe proporcionarse un \xedndice de filas entre {0} y {max}.",noSuchColumnDefined:"La clave de columna especificada no coincide con ninguna de las columnas de cuadr\xedcula definidas.",columnIndexOutOfRange:"\xc9l \xedndice de columnas especificadas est\xe1 fuera de rango. Debe proporcionarse un \xedndice de columnas entre {0} y {max}.",recordNotFound:"No se ha encontrado ning\xfan registro con id {id} en la vista de datos. Compruebe el id que ha utilizado para la b\xfasqueda y aj\xfastelo si es necesario.",columnNotFound:"No se ha encontrado ninguna columna con la clave {key}. Compruebe la clave que ha utilizado para la b\xfasqueda y aj\xfastela si es necesario.",colPrefix:"Columna ",columnVirtualizationRequiresWidth:"La virtualizaci\xf3n / columnVirtualization est\xe1 establecida como Verdadero, pero no se ha podido deducir el ancho para las columnas de cuadr\xedcula. Debe establecer uno de los siguientes par\xe1metros: a) ancho de cuadr\xedcula, b) defaultColumnWidth, c) ancho definido para cada columna",virtualizationRequiresHeight:"La virtualizaci\xf3n est\xe1 establecida como Verdadero; por tanto, tambi\xe9n se debe establecer la altura de la cuadr\xedcula.",colVirtualizationDenied:"columnVirtualization solo es aplicable a la virtualizaci\xf3n fija",noColumnsButAutoGenerateTrue:"autoGenerateColumns est\xe1 establecido como Falso, pero no hay columnas definidas en la cuadr\xedcula. Establezca autoGenerateColumns como Verdadero o especifique las columnas manualmente",templatingEnabledButNoTemplate:"jQueryTemplating est\xe1 establecido como Verdadero, pero no se ha definido ninguna rowTemplate.",expandTooltip:"Expandir fila",collapseTooltip:"Contraer fila",movingNotAllowedOrIncompatible:"No se ha podido desplazar la columna deseada. No se ha encontrado la columna o el resultado no era compatible con el dise\xf1o de columna.",allColumnsHiddenOnInitialization:"No es posible ocultar todas las columnas de cuadr\xedcula. Permita que se muestre al menos una de las columnas.",virtualizationNotSupportedWithAutoSizeCols:"Virtualization requiere una configuraci\xf3n de ancho de columna diferente de '*'. El ancho de columna debe ajustarse como una cantidad en p\xedxeles.",columnVirtualizationNotSupportedWithPercentageWidth:"La virtualizaci\xf3n de columnas no se admite cuando el ancho de la cuadr\xedcula se define en unidades de porcentaje.",mixedWidthsNotSupported:"No se admite la configuraci\xf3n del ancho de columna mezclado/parcial. No se admiten los supuestos en los que algunos anchos de columna se establezcan en porcentajes y otros en p\xedxeles (o no se establezcan).",multiRowLayoutColumnError:"No se ha podido a\xf1adir la columna con la clave: {key1} a la disposici\xf3n de rengl\xf3n m\xfaltiple debido a que su lugar en la disposici\xf3n ya est\xe1 ocupado por la columna con la clave: {key2}.",multiRowLayoutNotComplete:"La disposici\xf3n de rengl\xf3n m\xfaltiple no se ha completado. La definici\xf3n de columna crea una disposici\xf3n con espacios vac\xedos y no se puede representar correctamente.",multiRowLayoutMixedWidths:"Las anchuras mixtas (porcentaje y p\xedxeles) no son compatibles en la disposici\xf3n de rengl\xf3n m\xfaltiple. Defina todos los anchos de columna en p\xedxeles o porcentajes.",multiRowLayoutHidingNotSupported:"La disposici\xf3n de rengl\xf3n m\xfaltiple no admite columnas ocultas. Elimine las columnas ocultas de las definiciones de columnas.",scrollableGridAreaNotVisible:"Las \xe1reas fijas de encabezado y pie de p\xe1gina son m\xe1s grandes que la altura disponible de la cuadr\xedcula. El \xe1rea desplegable no es visible. Configure una altura de cuadr\xedcula m\xe1s grande.",featureNotSupportedWithMRL:"{featureName} no se admite con la disposici\xf3n de rengl\xf3n m\xfaltiple. Elimine la funci\xf3n de la lista de funciones.",editorTypeCannotBeDetermined:"La actualizaci\xf3n no ten\xeda la informaci\xf3n suficiente para determinar el tipo de editor que usar para la columna: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.es.HierarchicalGrid={noPrimaryKey:"Se necesita una clave principal para definir el widget igHierarchicalGrid.",expandTooltip:"Expandir fila",collapseTooltip:"Contraer fila"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.es.GridFeatureChooser={featureChooserTooltip:"Selector de funciones"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.es.GridFiltering={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",startsWithNullText:"Empieza por...",endsWithNullText:"Termina con...",containsNullText:"Contiene...",doesNotContainNullText:"No contiene...",equalsNullText:"Igual a...",doesNotEqualNullText:"No igual a...",greaterThanNullText:"Mayor de...",lessThanNullText:"Menor de...",greaterThanOrEqualToNullText:"Mayor o igual a...",lessThanOrEqualToNullText:"Menor o igual a...",onNullText:"En...",notOnNullText:"No en...",afterNullText:"Despu\xe9s",beforeNullText:"Antes",emptyNullText:"Vac\xedo",notEmptyNullText:"No vac\xedo",nullNullText:"Nulo",notNullNullText:"No nulo",emptyLabel:"Vac\xedo",notEmptyLabel:"No vac\xedo",nullLabel:"Nulo",notNullLabel:"No nulo",startsWithLabel:"Empieza por",endsWithLabel:"Termina con",containsLabel:"Contiene",doesNotContainLabel:"No contiene",equalsLabel:"Igual a",doesNotEqualLabel:"Diferente de",greaterThanLabel:"Mayor de",lessThanLabel:"Menor de",greaterThanOrEqualToLabel:"Mayor o igual a",lessThanOrEqualToLabel:"Menor o igual a",trueLabel:"Verdadero",falseLabel:"Falso",afterLabel:"Despu\xe9s",beforeLabel:"Antes",todayLabel:"Hoy",yesterdayLabel:"Ayer",thisMonthLabel:"Este mes",lastMonthLabel:"El mes pasado",nextMonthLabel:"El mes siguiente",thisYearLabel:"Este a\xf1o",lastYearLabel:"El a\xf1o pasado",nextYearLabel:"El a\xf1o siguiente",atLabel:"At",atNullText:"At...",notAtLabel:"Not at",notAtNullText:"Not at...",atBeforeLabel:"At or before",atBeforeNullText:"At or before...",atAfterLabel:"At or after",atAfterNullText:"At or after...",clearLabel:"Borrar filtro",noFilterLabel:"No",onLabel:"En",notOnLabel:"No en",advancedButtonLabel:"Avanzado",filterDialogCaptionLabel:"Filtro Avanzado",filterDialogConditionLabel1:"Mostrar registros coincidentes ",filterDialogConditionLabel2:" de los siguientes criterios",filterDialogConditionDropDownLabel:"Condici\xf3n de filtrado",filterDialogOkLabel:"Buscar",filterDialogCancelLabel:"Cancelar",filterDialogAnyLabel:"CUALQUIERA",filterDialogAllLabel:"TODOS",filterDialogAddLabel:"Agregar",filterDialogErrorLabel:"Se ha superado el n\xfamero m\xe1ximo de filtros.",filterDialogCloseLabel:"Cerrar cuadro de di\xe1logo de filtrado",filterSummaryTitleLabel:"Resultados de la b\xfasqueda",filterSummaryTemplate:"${matches} registros coincidentes",filterDialogClearAllLabel:"Borrar TODOS",tooltipTemplate:"${condition} filtro aplicado",featureChooserText:"Ocultar filtro",featureChooserTextHide:"Mostrar filtro",featureChooserTextAdvancedFilter:"Filtro avanzado",virtualizationSimpleFilteringNotAllowed:"Cuando est\xe1 habilitada la virtualizaci\xf3n horizontal, no se admite el filtro simple (fila de filtro). Establezca el modo como 'avanzado' y/o no establezca advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"La disposici\xf3n de rengl\xf3n m\xfaltiple necesita un tipo de filtro diferente. Establezca el modo de filtro en 'advanced'",featureChooserNotReferenced:"No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado.",conditionListLengthCannotBeZero:"La matriz conditionList en columnSettings est\xe1 vac\xeda. Debe proporcionarse una matriz apropiada para conditionList.",conditionNotValidForColumnType:"La condici\xf3n '{0}' no es v\xe1lida para la configuraci\xf3n actual. Debe reemplazarse por una condici\xf3n apropiada para el tipo de columna {1}.",defaultConditionContainsInvalidCondition:"defaultExpression para la columna '{0}' contiene una condici\xf3n que no est\xe1 permitida. Debe reemplazarse por una condici\xf3n apropiada para el tipo de columna {0}.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"La condici\xf3n inicial establecida en columnSettings para la columna '{0}' no corresponde a las condiciones predeterminadas (o personalizadas) o no est\xe1 disponible en la matriz conditionList establecida en columnSettings. Establezca una condici\xf3n v\xe1lida."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.es.GridGroupBy={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",emptyGroupByAreaContent:"Arrastre una columna aqu\xed o {0} para Agrupar por",emptyGroupByAreaContentSelectColumns:"seleccione columnas",emptyGroupByAreaContentSelectColumnsCaption:"seleccione columnas",expandTooltip:"Expandir fila agrupada",collapseTooltip:"Contraer fila agrupada",removeButtonTooltip:"Quitar columna agrupada",modalDialogCaptionButtonDesc:"Haga clic para ordenar de forma ascendente",modalDialogCaptionButtonAsc:"Haga clic para ordenar de forma descendente",modalDialogCaptionButtonUngroup:"Haga clic para desagrupar",modalDialogGroupByButtonText:"Agrupar por",modalDialogCaptionText:"Agregar a Agrupar por",modalDialogDropDownLabel:"Mostrando:",modalDialogClearAllButtonLabel:"borrar todos",modalDialogRootLevelHierarchicalGrid:"ra\xedz",modalDialogDropDownButtonCaption:"Haga clic para mostrar/ocultar",modalDialogButtonApplyText:"Aplicar",modalDialogButtonCancelText:"Cancelar",fixedVirualizationNotSupported:"La funci\xf3n GroupBy no funciona si la virtualizaci\xf3n est\xe1 ajustada.",summaryRowTitle:"Fila de resumen de agrupamiento",summaryIconTitle:"Resumen para {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.es.GridHiding={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",columnChooserDisplayText:"Selector de columnas",hiddenColumnIndicatorTooltipText:"Columna(s) oculta(s)",columnHideText:"Ocultar",columnChooserCaptionLabel:"Selector de columnas",columnChooserCheckboxesHeader:"ver",columnChooserColumnsHeader:"columna",columnChooserCloseButtonTooltip:"Cerrar",hideColumnIconTooltip:"Ocultar",featureChooserNotReferenced:"No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado.",columnChooserShowText:"Mostrar",columnChooserHideText:"Ocultar",columnChooserResetButtonLabel:"restablecer",columnChooserButtonApplyText:"Aplicar",columnChooserButtonCancelText:"Cancelar"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.es.GridResizing={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",noSuchVisibleColumn:"No se ha encontrado ninguna columna visible con la clave especificada. Solo puede cambiar el tama\xf1o de las columnas visibles.",resizingAndFixedVirtualizationNotSupported:"La funci\xf3n de cambio de tama\xf1o no funciona cuando la virtualizaci\xf3n o la virtualizaci\xf3n de columnas est\xe1n habilitadas con virtualizationMode ajustado. Para evitar esta excepci\xf3n establezca virtualizationMode en 'continuous' o utilice solo rowVirtualization."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.es.GridPaging={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",pageSizeDropDownLabel:"Mostrar ",pageSizeDropDownTrailingLabel:"registros",nextPageLabelText:"siguiente",prevPageLabelText:"anterior",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"P\xe1g",currentPageDropDownTrailingLabel:"de ${count}",currentPageDropDownTooltip:"Elegir \xedndice de p\xe1ginas",pageSizeDropDownTooltip:"Elegir n\xfamero de registros por p\xe1gina",pagerRecordsLabelTooltip:"Intervalo de registros actuales",prevPageTooltip:"ir a la p\xe1gina anterior",nextPageTooltip:"ir a la p\xe1gina siguiente",firstPageTooltip:"ir a la primera p\xe1gina",lastPageTooltip:"ir a la \xfaltima p\xe1gina",pageTooltipFormat:"p\xe1gina ${index}",pagerRecordsLabelTemplate:"${startRecord} - ${endRecord} de ${recordCount} registros",invalidPageIndex:"\xcdndice de p\xe1gina no v\xe1lido: deber\xeda ser igual o superior a 0 e inferior al n\xfamero de p\xe1gina"};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.es.GridSelection={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",persistenceImpossible:"La selecci\xf3n persistente entre los estados requiere que se defina la opci\xf3n primaryKey de igGrid. Para evitar recibir este error, defina una clave principal o desactive la persistencia."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.es.GridRowSelectors={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",selectionNotLoaded:"igGridSelection no se ha inicializado. Para evitar recibir este mensaje de error, habilite la funci\xf3n de Selecci\xf3n para la cuadr\xedcula o bien establezca la propiedad requireSelection de la funci\xf3n Selectores de Filas como Falso.",columnVirtualizationEnabled:"igGridRowSelectors no se admite cuando la virtualizaci\xf3n de columnas est\xe1 habilitada. Utilice rowVirtualization o ajuste el virtualizationMode a 'continuous'.",selectedRecordsText:"Ha seleccionado los registros ${checked}.",deselectedRecordsText:"Ha anulado la selecci\xf3n de los registros ${unchecked}.",selectAllText:"Seleccionar todos los registros ${totalRecordsCount}",deselectAllText:"Anular la selecci\xf3n de todos los registros ${totalRecordsCount}",requireSelectionWithCheckboxes:"La selecci\xf3n es necesaria cuando hay casillas de verificaci\xf3n habilitadas"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.es.GridSorting={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",sortedColumnTooltip:"ordenado ${direction}",unsortedColumnTooltip:"haga clic para ordenar la columna",ascending:"ascendente",descending:"descendente",modalDialogSortByButtonText:"ordenar por",modalDialogResetButton:"restablecer",modalDialogCaptionButtonDesc:"Haga clic para ordenar de forma descendente",modalDialogCaptionButtonAsc:"Haga clic para ordenar de forma ascendente",modalDialogCaptionButtonUnsort:"Haga clic para quitar criterios de ordenaci\xf3n",featureChooserText:"Ordenar en m\xfaltiples",modalDialogCaptionText:"Ordenar m\xfaltiples",modalDialogButtonApplyText:"Aplicar",modalDialogButtonCancelText:"Cancelar",sortingHiddenColumnNotSupport:"La ordenaci\xf3n de columnas ocultas no se admite",featureChooserSortAsc:"Ordenar de A a Z",featureChooserSortDesc:"Ordenar de Z a A"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.es.GridSummaries={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",featureChooserText:"Ocultar res\xfamenes",featureChooserTextHide:"Mostrar res\xfamenes",dialogButtonOKText:"Aceptar",dialogButtonCancelText:"Cancelar",emptyCellText:"",summariesHeaderButtonTooltip:"Mostrar/ocultar res\xfamenes",defaultSummaryRowDisplayLabelCount:"Recuento",defaultSummaryRowDisplayLabelMin:"M\xedn.",defaultSummaryRowDisplayLabelMax:"M\xe1x.",defaultSummaryRowDisplayLabelSum:"Suma",defaultSummaryRowDisplayLabelAvg:"Prom.",defaultSummaryRowDisplayLabelCustom:"Personalizado",calculateSummaryColumnKeyNotSpecified:"Especifique la clave de columna para calcular el resumen",featureChooserNotReferenced:"No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.es.GridUpdating={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",doneLabel:"Terminado",doneTooltip:"Detener edici\xf3n y actualizar",cancelLabel:"Cancelar",cancelTooltip:"Detener edici\xf3n y no actualizar",addRowLabel:"Agregar fila nueva",addRowTooltip:"Haga clic para agregar una nueva fila",deleteRowLabel:"Borrar fila",deleteRowTooltip:"Borrar fila",igTextEditorException:"En estos momentos no es posible actualizar una cadena de columnas en la tabla. Primero, debe cargarse ui.igTextEditor.",igNumericEditorException:"En estos momentos no es posible actualizar columnas num\xe9ricas en la tabla. Primero, debe cargarse ui.igNumericEditor.",igCheckboxEditorException:"En estos momentos no es posible actualizar columnas de casillas de verificaci\xf3n en la tabla. Primero, debe cargarse ui.igCheckboxEditor.",igCurrencyEditorException:"En estos momentos no es posible actualizar columnas num\xe9ricas con formato de moneda en la tabla. Primero, debe cargarse ui.igCurrencyEditor.",igPercentEditorException:"En estos momentos no es posible actualizar columnas num\xe9ricas con formato de porcentaje en la tabla. Primero, debe cargarse ui.igPercentEditor.",igDateEditorException:"En estos momentos no es posible actualizar columnas de fecha en la tabla. Primero, debe cargarse ui.igDateEditor.",igDatePickerException:"En estos momentos no es posible actualizar columnas de fecha en la tabla. Primero, debe cargarse ui.igDatePicker.",igTimePickerException:"En estos momentos no es posible actualizar columnas de fecha en la tabla. Primero, debe cargarse ui.igTimePicker.",igComboException:"Para usar el tipo combinado para ui.igGrid, ui.igCombo debe estar cargado",igRatingException:"Para usar igRating como editor para ui.igGrid, ui.igRating debe estar cargado",igValidatorException:"Las opciones de validaci\xf3n definidas en igGridUpdating necesitan que ui.igValidator est\xe9 cargado",noPrimaryKeyException:'Para admitir las operaciones de actualizaci\xf3n despu\xe9s de borrar una fila, la aplicaci\xf3n debe definir "primaryKey" en las opciones de igGrid.',hiddenColumnValidationException:"No se puede editar una fila que tiene una columna oculta con validaci\xf3n habilitada.",dataDirtyException:'La cuadr\xedcula tiene transacciones pendientes que pueden afectar a la representaci\xf3n de datos. Para evitar excepciones, la aplicaci\xf3n puede habilitar la opci\xf3n "autoCommit" de igGrid o bien debe procesar el evento "dataDirty" de igGridUpdating y devolver Falso. Al procesar ese evento, la aplicaci\xf3n tambi\xe9n puede efectuar "commit()" datos en igGrid.',recordOrPropertyNotFoundException:"No se ha encontrado el registro o la propiedad especificados. Compruebe los criterios de b\xfasqueda y aj\xfastelos si es necesario.",rowUpdatingNotSupportedWithColumnVirtualization:'Actualizando con editMode: "row" requiere una configuraci\xf3n diferente. columna La virtualizaci\xf3n debe estar deshabilitada.',rowEditDialogCaptionLabel:"Editar datos de fila",excelNavigationNotSupportedWithCurrentEditMode:'ExcelNavigation requiere una configuraci\xf3n diferente. editMode debe ajustarse a "cell" o "row".',columnNotFound:"La clave de la columna especificada no se ha encontrado en la colecci\xf3n de columnas visible o el \xedndice especificado estaba fuera de rango.",rowOrColumnSpecifiedOutOfView:"En estos momentos no es posible editar la fila o columna especificada. Debe mostrarse en la p\xe1gina actual y en el marco de visualizaci\xf3n.",editingInProgress:"En estos momentos se est\xe1 editando una fila o celda. No se puede iniciar otro proceso de actualizaci\xf3n antes de que finalice la edici\xf3n actual.",undefinedCellValue:"No se puede seleccionar Undefined como valor de celda.",addChildTooltip:"A\xf1ada una fija hija",multiRowGridNotSupportedWithCurrentEditMode:"Cuando la cuadr\xedcula tiene una disposici\xf3n de rengl\xf3n m\xfaltiple habilitada, solo es compatible el modo de edici\xf3n de cuadro de di\xe1logo.",virtualizationNotSupportedWithoutAutoCommit:"No se admite habilitar la actualizaci\xf3n ni la visualizaci\xf3n mientras autoCommit est\xe9 establecido como falso. Active la opci\xf3n autoCommit de la cuadr\xedcula."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.es.CellMerging={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",mergeStrategyNotAFunction:"La Estrategia de fusi\xf3n especificada no se reconoce como un valor predefinido v\xe1lido o no se encuentra una funci\xf3n con ese nombre."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.es.ColumnMoving={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",movingDialogButtonApplyText:"Aplicar",movingDialogButtonCancelText:"Cancelar",movingDialogCaptionButtonDesc:"Bajar",movingDialogCaptionButtonAsc:"Subir",movingDialogCaptionText:"Mover columnas",movingDialogDisplayText:"Mover columnas",movingDialogDropTooltipText:"Mover aqu\xed",movingDialogCloseButtonTitle:"Cerrar el cuadro de di\xe1logo m\xf3vil",dropDownMoveLeftText:"Mover a la izquierda",dropDownMoveRightText:"Mover a la derecha",dropDownMoveFirstText:"Mover primero",dropDownMoveLastText:"Mover \xfaltimo",featureChooserNotReferenced:"No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado.",movingToolTipMove:"Mover",featureChooserSubmenuText:"Mover",columnVirtualizationEnabled:"El movimiento de columna requiere un ajuste de virtualizaci\xf3n diferente. Utilice rowVirtualization o ajuste el virtualizationMode a 'continuous'."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.es.ColumnFixing={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",headerFixButtonText:"Haga clic para fijar esta columna",headerUnfixButtonText:"Haga clic para soltar esta columna",featureChooserTextFixedColumn:"Fijar columna",featureChooserTextUnfixedColumn:"Soltar columna",groupByNotSupported:"igGridGroupBy no se admite con ColumnFixing",virtualizationNotSupported:"La virtualizaci\xf3n de la opci\xf3n de cuadr\xedcula permite la virtualizaci\xf3n de filas y columnas. La virtualizaci\xf3n de columnas no se admite con ColumnFixing. Active la opci\xf3n rowVirtualization de cuadr\xedcula",columnVirtualizationNotSupported:"La virtualizaci\xf3n de columnas no se admite con ColumnFixing",columnMovingNotSupported:"igGridColumnMoving no se admite con ColumnFixing",hidingNotSupported:"igGridHiding no se admite con ColumnFixing",hierarchicalGridNotSupported:"igHierarchicalGrid no se admite con ColumnFixing",responsiveNotSupported:"igGridResponsive no se admite con ColumnFixing",noGridWidthNotSupported:"Column Fixing necesita una configuraci\xf3n diferente. El ancho de la cuadr\xedcula debe configurarse en forma de porcentajes o como n\xfamero en p\xedxeles.",gridHeightInPercentageNotSupported:"Column Fixing necesita una configuraci\xf3n diferente. La altura de la cuadr\xedcula se debe configurar en p\xedxeles.",defaultColumnWidthInPercentageNotSupported:"El ancho de columna predeterminado en porcentaje no se admite cuando se utiliza ColumnFixing",columnsWidthShouldBeSetInPixels:"ColumnFixing requiere un ajuste de ancho de columna diferente. El ancho de columna con la clave {key} debe ajustarse en p\xedxeles.",unboundColumnsNotSupported:"ColumnFixing no se admite con columnas sueltas",excelNavigationNotSupportedWithCurrentEditMode:"El modo de navegaci\xf3n Excel solo se admite en los modos de edici\xf3n de celda o de edici\xf3n de fila. Para evitar este error, desactive excelNavigationMode o establezca editMode en celda o fila.",initialFixingNotApplied:"No se ha podido aplicar la acci\xf3n de fijado inicial en la columna con clave: {0}. Motivo: {1}",setOptionGridWidthException:"Valor incorrecto para la anchura de la cuadr\xedcula de opciones. Cuando hay columnas fijas, la anchura del \xe1rea visible de las columnas que no est\xe1n fijas deber\xeda ser m\xe1s grande o igual al valor de minimalVisibleAreaWidth.",noneError:"No hay error",notValidIdentifierError:"No existe ninguna columna con el identificador especificado",fixingRefusedError:"La acci\xf3n de fijar se deniega porque SOLO hay una columna suelta visible",fixingRefusedMinVisibleAreaWidthError:"No se permite fijar una columna debido al ancho m\xednimo del \xe1rea visible de columnas sueltas",alreadyHiddenError:"Est\xe1 intentando fijar/soltar una columna oculta",alreadyUnfixedError:"La columna que est\xe1 intentando soltar ya est\xe1 suelta",alreadyFixedError:"La columna que est\xe1 intentando fijar ya est\xe1 fijada",unfixingRefusedError:"La acci\xf3n de soltar se deniega porque solo hay una columna fijada visible y hay al menos una columna fijada oculta.",targetNotFoundError:"No se ha encontrado la columna con la clave {key}. Compruebe la clave que ha utilizado para la b\xfasqueda y aj\xfastela si es necesario."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.es.GridAppendRowsOnDemand={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",loadMoreDataButtonText:"Cargar m\xe1s datos",appendRowsOnDemandRequiresHeight:"La funci\xf3n AppendRowsOnDemand necesita altura",groupByNotSupported:"igGridGroupBy no se admite con AppendRowsOnDemand",pagingNotSupported:"igGridPaging no se admite con AppendRowsOnDemand",cellMergingNotSupported:"igGridCellMerging no se admite con AppendRowsOnDemand",virtualizationNotSupported:"La virtualizaci\xf3n no se admite con AppendRowsOnDemand"};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.es.igGridResponsive={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",fixedVirualizationNotSupported:"igGridResponsive no se admite con la virtualizaci\xf3n fijada"};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};1;$.ig.locale.es.igGridMultiColumnHeaders={optionChangeNotSupported:"{optionName} no se puede editar tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",multiColumnHeadersNotSupportedWithColumnVirtualization:"La funci\xf3n de encabezados de columnas m\xfaltiples no se admite con columnVirtualization",cannotExpandMultiColumnHeader:"Multi-Column header exceeds the maximum allowed fixed area width and therefore cannot be expanded",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Debe mostrarse al menos una columna cuando expanda o contraiga un encabezado multicolumna.",collapsedColumnIconTooltip:"Expandir",expandedColumnIconTooltip:"Contraer"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.es.Grid;$.ig.GridFeatureChooser.locale=$.ig.GridFeatureChooser.locale||$.ig.locale.es.GridFeatureChooser;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.es.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.es.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.es.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.es.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.es.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.es.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.es.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.es.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.es.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.es.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.es.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.es.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.es.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.es.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.es.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.es.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.es.HierarchicalGrid;return $.ig.locale.es});