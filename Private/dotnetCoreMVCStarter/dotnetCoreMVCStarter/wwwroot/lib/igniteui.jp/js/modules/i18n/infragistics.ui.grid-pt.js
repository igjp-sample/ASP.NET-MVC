/*!@license
* Infragistics.Web.ClientUI Grid localization resources 21.1.25
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.pt=$.ig.locale.pt||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.pt.Grid={noSuchWidget:"{featureName} n\xe3o foi reconhecido. Verifique se esse recurso existe e se a ortografia est\xe1 correta.",autoGenerateColumnsNoRecords:"gera\xe7\xe3oAutom\xe1ticaDeColunas est\xe1 ativado, mas n\xe3o h\xe1 registros na fonte de dados. Carregar uma origem de dados com registos para poder determinar as colunas.",optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",optionChangeNotScrollingGrid:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o, porque a grelha n\xe3o se desloca inicialmente e \xe9 necess\xe1ria uma recomposi\xe7\xe3o completa. Esta op\xe7\xe3o deve ser definida durante a inicializa\xe7\xe3o.",widthChangeFromPixelsToPercentagesNotSupported:"N\xe3o \xe9 poss\xedvel alterar dinamicamente a largura da op\xe7\xe3o da grelha de pixels para percentagens.",widthChangeFromPercentagesToPixelsNotSupported:"N\xe3o \xe9 poss\xedvel alterar dinamicamente a largura da op\xe7\xe3o da grelha de percentagens para pixels.",noPrimaryKeyDefined:"N\xe3o h\xe1 chave prim\xe1ria definida para a grelha. Defina uma chave prim\xe1ria para poder utilizar funcionalidades como Edi\xe7\xe3o em grelha.",indexOutOfRange:"O \xedndice da linha especificado est\xe1 fora do intervalo. Um \xedndice de linha entre 0 e {max} deve ser fornecido.",noSuchColumnDefined:"A chave da coluna especificada n\xe3o \xe9 v\xe1lida. Uma chave de coluna que corresponda \xe0 chave de uma das colunas de grelhas definidas deve ser fornecida.",columnIndexOutOfRange:"O \xedndice da coluna especificado est\xe1 fora do intervalo. Um \xedndice de coluna entre 0 e {max} deve ser fornecido.",recordNotFound:"N\xe3o foi poss\xedvel encontrar um registo com o ID {id} na vista de dados. Verifique o ID utilizado para a pesquisa e ajuste-o, se necess\xe1rio.",columnNotFound:"N\xe3o foi poss\xedvel encontrar uma coluna com a chave {key}. Verifique a chave utilizada para a pesquisa e ajuste-a, se necess\xe1rio.",colPrefix:"Coluna ",columnVirtualizationRequiresWidth:"A virtualiza\xe7\xe3o e a columnVirtualization exigem que a largura da grelha ou de suas colunas seja definida. Forne\xe7a um valor para a largura da grelha, larguraDaColunaPredefinida ou a largura de cada coluna.",virtualizationRequiresHeight:"A virtualiza\xe7\xe3o exige que a altura da grelha seja definida. Deve ser fornecido um valor para a altura da grelha.",colVirtualizationDenied:"a columnVirtualization requer uma configura\xe7\xe3o de um modoDeVirtualiza\xe7\xe3o diferente. O virtualizationMode  deve ser definido como 'fixed'.",noColumnsButAutoGenerateTrue:"Gera\xe7\xe3oAutom\xe1ticaDeColunas est\xe1 desativado e nenhuma coluna \xe9 definida para a grelha. Ative gera\xe7\xe3oAutom\xe1ticaDeColunas ou especifique manualmente as colunas.",expandTooltip:"Expandir linha",collapseTooltip:"Recolher linha",movingNotAllowedOrIncompatible:"A coluna especificada n\xe3o p\xf4de ser movida. Verifique se essa coluna existe e se a sua posi\xe7\xe3o final n\xe3o danificaria o esquema da coluna.",allColumnsHiddenOnInitialization:"Todas as colunas n\xe3o podem ser ocultadas durante a inicializa\xe7\xe3o. Pelo menos uma coluna deve ser configurada como vis\xedvel.",virtualizationNotSupportedWithAutoSizeCols:"A virtualiza\xe7\xe3o requer uma configura\xe7\xe3o de largura de coluna diferente de '*'. A largura da coluna deve ser definida como um n\xfamero em pixels.",columnVirtualizationNotSupportedWithPercentageWidth:"A virtualiza\xe7\xe3o de colunas requer uma configura\xe7\xe3o de largura da grelha diferente. A largura da coluna deve ser definida como um n\xfamero em pixels.",mixedWidthsNotSupported:"\xc9 necess\xe1rio que todas as colunas tenham a largura definida da mesma forma. Defina todas as larguras da coluna como percentagens ou como n\xfamero em pixels.",multiRowLayoutColumnError:"A coluna com chave: {key1} n\xe3o p\xf4de ser adicionada ao esquema com v\xe1rias linhas porque o seu lugar no esquema j\xe1 foi ocupado pela coluna com chave: {key2}.",multiRowLayoutNotComplete:"O esquema de v\xe1rias linhas n\xe3o est\xe1 completo. A defini\xe7\xe3o da coluna cria um esquema que tem espa\xe7os vazios e n\xe3o pode ser composto corretamente.",multiRowLayoutMixedWidths:"Larguras mistas (percentagem e pixels) n\xe3o s\xe3o suportadas no esquema multilinha. Defina todas as larguras da coluna em pixels ou percentagem. ",multiRowLayoutHidingNotSupported:"O esquema de v\xe1rias linhas n\xe3o suporta colunas ocultas. Remova as colunas ocultas das defini\xe7\xf5es de coluna.",scrollableGridAreaNotVisible:"As \xe1reas fixas de cabe\xe7alho e rodap\xe9 s\xe3o maiores que a altura da grelha dispon\xedvel. A \xe1rea de desloca\xe7\xe3o n\xe3o \xe9 vis\xedvel. Defina uma altura de grelha maior.",featureNotSupportedWithMRL:"{featureName} n\xe3o \xe9 suportado com esquema multilinha. Remova a funcionalidade da lista de funcionalidades.",editorTypeCannotBeDetermined:"A atualiza\xe7\xe3o n\xe3o possui informa\xe7\xf5es suficientes para determinar adequadamente o tipo de editor a ser usado na coluna: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.pt.HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid exige que uma chave prim\xe1ria seja definida. Uma chave prim\xe1ria deve ser fornecida.",expandTooltip:"Expandir linha",collapseTooltip:"Recolher linha"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.pt.GridFeatureChooser={featureChooserTooltip:"Seletor de recursos"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.pt.GridFiltering={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",startsWithNullText:"Come\xe7a com...",endsWithNullText:"Termina com...",containsNullText:"Cont\xe9m...",doesNotContainNullText:"N\xe3o cont\xe9m...",equalsNullText:"Igual a...",doesNotEqualNullText:"N\xe3o \xe9 igual a...",greaterThanNullText:"Maior que...",lessThanNullText:"Menor que...",greaterThanOrEqualToNullText:"Maior ou igual a...",lessThanOrEqualToNullText:"Menor ou igual a...",onNullText:"A...",notOnNullText:"N\xe3o a...",afterNullText:"Ap\xf3s",beforeNullText:"Antes",emptyNullText:"Vazio",notEmptyNullText:"N\xe3o vazio",nullNullText:"Nulo",notNullNullText:"N\xe3o nulo",emptyLabel:"Vazio",notEmptyLabel:"N\xe3o vazio",nullLabel:"Nulo",notNullLabel:"N\xe3o nulo",startsWithLabel:"Come\xe7a com",endsWithLabel:"Termina com",containsLabel:"Cont\xe9m",doesNotContainLabel:"N\xe3o cont\xe9m",equalsLabel:"Igual a",doesNotEqualLabel:"N\xe3o \xe9 igual",greaterThanLabel:"Maior que",lessThanLabel:"Menor que",greaterThanOrEqualToLabel:"Maior ou igual a",lessThanOrEqualToLabel:"Menor ou igual a",trueLabel:"True",falseLabel:"False",afterLabel:"Ap\xf3s",beforeLabel:"Antes",todayLabel:"Hoje",yesterdayLabel:"Ontem",thisMonthLabel:"Este m\xeas",lastMonthLabel:"M\xeas passado",nextMonthLabel:"M\xeas seguinte",thisYearLabel:"Este ano",lastYearLabel:"No ano passado",nextYearLabel:"No pr\xf3ximo ano",atLabel:"Em",atNullText:"Em\u2026",notAtLabel:"N\xe3o em",notAtNullText:"N\xe3o em...",atBeforeLabel:"Em ou antes",atBeforeNullText:"Em ou antes...",atAfterLabel:"Em ou depois",atAfterNullText:"Em ou depois...",clearLabel:"Limpar filtro",noFilterLabel:"N\xe3o",onLabel:"Ligado",notOnLabel:"N\xe3o est\xe1 ligado",advancedButtonLabel:"Avan\xe7ado",filterDialogCaptionLabel:"Filtro avan\xe7ado",filterDialogConditionLabel1:"Mostrar registos correspondentes ",filterDialogConditionLabel2:" dos seguintes crit\xe9rios",filterDialogConditionDropDownLabel:"Condi\xe7\xe3o de filtragem",filterDialogOkLabel:"Pesquisar",filterDialogCancelLabel:"Cancelar",filterDialogAnyLabel:"QUALQUER",filterDialogAllLabel:"TUDO",filterDialogAddLabel:"Adicionar",filterDialogErrorLabel:"Atingiu o n\xfamero m\xe1ximo de filtros suportados.",filterDialogCloseLabel:"Fechar caixa de di\xe1logo de filtragem",filterSummaryTitleLabel:"Resultados da pesquisa",filterSummaryTemplate:"${matches} registos correspondentes",filterDialogClearAllLabel:"Limpar tudo",tooltipTemplate:"Filtro ${condition} aplicado",featureChooserText:"Ocultar filtro",featureChooserTextHide:"Mostrar filtro",featureChooserTextAdvancedFilter:"Filtro avan\xe7ado",virtualizationSimpleFilteringNotAllowed:"A virtualiza\xe7\xe3o de colunas requer um tipo diferente de filtragem. Defina o modo de filtragem para 'advanced' ou desative advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"O esquema multilinha exige um tipo diferente de filtragem. Definir modo de filtragem para 'advanced'",featureChooserNotReferenced:"Uma refer\xeancia ao Seletor de Funcionalidades est\xe1 ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto, use um carregador ou um dos ficheiros de script combinados.",conditionListLengthCannotBeZero:"A matriz listaDeCondi\xe7\xf5es em defini\xe7\xf5esDeColunas est\xe1 vazia. Deve ser fornecida uma matriz adequada para a conditionList.",conditionNotValidForColumnType:"A condi\xe7\xe3o '{0}' n\xe3o \xe9 v\xe1lida para a configura\xe7\xe3o atual. Deve ser substitu\xeddo por uma condi\xe7\xe3o adequada para o tipo de coluna {1}.",defaultConditionContainsInvalidCondition:"defaultExpression para a coluna '{0}' cont\xe9m uma condi\xe7\xe3o que n\xe3o \xe9 permitida. Deve ser substitu\xeddo por uma condi\xe7\xe3o adequada para o tipo de coluna {0}.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"A condi\xe7\xe3o inicial definida em columnSettings para a coluna '{0}' n\xe3o \xe9 predefinida (ou de condi\xe7\xf5es personalizadas) ou n\xe3o est\xe1 dispon\xedvel na matriz conditionList definida em columnSettings. Aplique uma condi\xe7\xe3o v\xe1lida."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.pt.GridGroupBy={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",emptyGroupByAreaContent:"Arraste uma coluna aqui ou {0} para Agrupar por",emptyGroupByAreaContentSelectColumns:"selecionar colunas",emptyGroupByAreaContentSelectColumnsCaption:"selecionar colunas",expandTooltip:"Expandir linha agrupada",collapseTooltip:"Fechar linha agrupada",removeButtonTooltip:"Remover coluna agrupada",modalDialogCaptionButtonDesc:"Ordena\xe7\xe3o ascendente",modalDialogCaptionButtonAsc:"Ordena\xe7\xe3o descendente",modalDialogCaptionButtonUngroup:"Desagrupar",modalDialogGroupByButtonText:"Agrupar por",modalDialogCaptionText:"Adicionar ao grupo por",modalDialogDropDownLabel:"A mostrar:",modalDialogClearAllButtonLabel:"Limpar tudo",modalDialogRootLevelHierarchicalGrid:"Raiz",modalDialogDropDownButtonCaption:"Mostrar/Ocultar",modalDialogButtonApplyText:"Aplicar",modalDialogButtonCancelText:"Cancelar",fixedVirualizationNotSupported:"Agrupar Por requer outra configura\xe7\xe3o de virtualiza\xe7\xe3o. O virtualizationMode deve ser definido como 'continuous'.",summaryRowTitle:"A agrupar linha de resumo",summaryIconTitle:"Resumo para {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.pt.GridHiding={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",columnChooserDisplayText:"Seletor de coluna",hiddenColumnIndicatorTooltipText:"Coluna(s) oculta(s)",columnHideText:"Ocultar",columnChooserCaptionLabel:"Seletor de coluna",columnChooserCloseButtonTooltip:"Fechar",hideColumnIconTooltip:"Ocultar",featureChooserNotReferenced:"Uma refer\xeancia ao Seletor de Funcionalidades est\xe1 ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto ou use um dos ficheiros de script combinados.",columnChooserShowText:"Mostrar",columnChooserHideText:"Ocultar",columnChooserResetButtonLabel:"Reiniciar",columnChooserButtonApplyText:"Aplicar",columnChooserButtonCancelText:"Cancelar"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.pt.GridResizing={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",noSuchVisibleColumn:"N\xe3o existe coluna vis\xedvel para a chave especificada. O m\xe9todo showColumn() deve ser utilizado na coluna antes de tentar redimension\xe1-lo.",resizingAndFixedVirtualizationNotSupported:"O redimensionamento das colunas requer uma configura\xe7\xe3o de virtualiza\xe7\xe3o diferente. Use virtualiza\xe7\xe3oDeFilas e defina o virtualizationMode como 'continuous'."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.pt.GridPaging={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",pageSizeDropDownLabel:"Mostrar ",pageSizeDropDownTrailingLabel:"registos",nextPageLabelText:"Seguinte",prevPageLabelText:"Anterior",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"P\xe1g.",currentPageDropDownTrailingLabel:"de ${count}",currentPageDropDownTooltip:"Escolher \xedndice da p\xe1gina",pageSizeDropDownTooltip:"Escolha o n\xfamero de registos por p\xe1gina",pagerRecordsLabelTooltip:"Intervalo de registos atual",prevPageTooltip:"P\xe1gina anterior",nextPageTooltip:"P\xe1gina seguinte",firstPageTooltip:"Primeira p\xe1gina",lastPageTooltip:"\xdaltima p\xe1gina",pageTooltipFormat:"P\xe1gina ${index}",pagerRecordsLabelTemplate:"${startRecord} - ${endRecord} de ${recordCount} registos",invalidPageIndex:"O \xedndice da p\xe1gina especificado n\xe3o \xe9 v\xe1lido. Forne\xe7a um \xedndice da p\xe1gina maior ou igual a 0 e menor que o n\xfamero total de p\xe1ginas."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.pt.GridSelection={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",persistenceImpossible:"A sele\xe7\xe3o persistente requer uma configura\xe7\xe3o diferente. A op\xe7\xe3o de chave prim\xe1ria da grelha deve ser configurada."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.pt.GridRowSelectors={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",selectionNotLoaded:"igGridSelection n\xe3o foi inicializado. A sele\xe7\xe3o deve estar ativada para a grelha.",columnVirtualizationEnabled:"Os Seletores de Linha exigem uma configura\xe7\xe3o de virtualiza\xe7\xe3o diferente. Use rowVirtualization ou defina o virtualizationMode como 'continuous'.",selectedRecordsText:"Marcou ${checked} registos.",deselectedRecordsText:"Desmarcou ${unchecked} registos.",selectAllText:"Selecionar todos os ${totalRecordsCount} registos",deselectAllText:"Desselecionar todos os ${totalRecordsCount} registos",requireSelectionWithCheckboxes:"A sele\xe7\xe3o \xe9 necess\xe1ria quando h\xe1 caixas de sele\xe7\xe3o ativadas"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.pt.GridSorting={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",sortedColumnTooltip:"Ordenado ${direction}",unsortedColumnTooltip:"Ordenar coluna",ascending:"ascendente",descending:"descendente",modalDialogSortByButtonText:"Ordenar por",modalDialogResetButton:"Reiniciar",modalDialogCaptionButtonDesc:"Clique para ordenar por ordem descendente",modalDialogCaptionButtonAsc:"Clique para ordenar ascendente",modalDialogCaptionButtonUnsort:"Clique para remover a ordena\xe7\xe3o",featureChooserText:"Ordenar por M\xfaltiplos",modalDialogCaptionText:"Ordenar por M\xfaltiplos",modalDialogButtonApplyText:"Aplicar",modalDialogButtonCancelText:"Cancelar",sortingHiddenColumnNotSupport:"A coluna especificada n\xe3o p\xf4de ser ordenada porque est\xe1 oculta. Use o m\xe9todo showColumn() antes de tentar ordenar.",featureChooserSortAsc:"Ordena\xe7\xe3o ascendente",featureChooserSortDesc:"Ordena\xe7\xe3o descendente"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.pt.GridSummaries={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",featureChooserText:"Ocultar resumos",featureChooserTextHide:"Mostrar resumos",dialogButtonOKText:"OK",dialogButtonCancelText:"Cancelar",emptyCellText:"",summariesHeaderButtonTooltip:"Mostrar/ocultar resumos",defaultSummaryRowDisplayLabelCount:"Contagem",defaultSummaryRowDisplayLabelMin:"M\xedn.",defaultSummaryRowDisplayLabelMax:"M\xe1x.",defaultSummaryRowDisplayLabelSum:"Soma",defaultSummaryRowDisplayLabelAvg:"M\xe9dia",defaultSummaryRowDisplayLabelCustom:"Personalizado",calculateSummaryColumnKeyNotSpecified:"A chave da coluna est\xe1 em falta. Uma chave de coluna deve ser especificada para calcular resumos.",featureChooserNotReferenced:"Uma refer\xeancia ao Seletor de Funcionalidades est\xe1 ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto ou use um dos ficheiros de script combinados."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.pt.GridUpdating={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",doneLabel:"Conclu\xeddo",doneTooltip:"Parar de editar e atualizar",cancelLabel:"Cancelar",cancelTooltip:"Parar de editar sem atualizar",addRowLabel:"Adicionar nova linha",addRowTooltip:"Comece a adicionar uma nova linha",deleteRowLabel:"Eliminar linha",deleteRowTooltip:"Eliminar linha",igTextEditorException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas de cadeia em grid. ui.igTextEditor deve ser carregado primeiro.",igNumericEditorException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas num\xe9ricas em grid. ui.igNumericEditor deve ser carregado primeiro.",igCheckboxEditorException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas da caixa de verifica\xe7\xe3o em grid. ui.igCheckboxEditor deve ser carregado primeiro.",igCurrencyEditorException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas num\xe9ricas com formato de moeda em grid. ui.igCurrencyEditor deve ser carregado primeiro.",igPercentEditorException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas num\xe9ricas com formato percentual em grid. ui.igPercentEditor deve ser carregado primeiro.",igDateEditorException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas da data na grelha. ui.igDateEditor deve ser carregado primeiro.",igDatePickerException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas da data na grelha. ui.igDatePicker deve ser carregado primeiro.",igTimePickerException:"De momento, n\xe3o \xe9 poss\xedvel atualizar as colunas da data na grelha. ui.igTimePicker deve ser carregado primeiro.",igComboException:"De momento, n\xe3o \xe9 poss\xedvel utilizar uma combina\xe7\xe3o na grelha. ui.igCombo deve ser carregado primeiro.",igRatingException:"De momento, n\xe3o \xe9 poss\xedvel utilizar a igRating como editor na grelha. ui.igRating deve ser carregado primeiro.",igValidatorException:"De momento, n\xe3o \xe9 poss\xedvel suportar a valida\xe7\xe3o com as op\xe7\xf5es definidas em igGridUpdating. ui.igValidator deve ser carregado primeiro.",noPrimaryKeyException:"Para dar suporte \xe0s opera\xe7\xf5es de atualiza\xe7\xe3o ap\xf3s a elimina\xe7\xe3o de uma linha, a aplica\xe7\xe3o deve definir a chavePrim\xe1ria nas op\xe7\xf5es de igGrid.",hiddenColumnValidationException:"N\xe3o \xe9 poss\xedvel editar a linha que tem uma coluna oculta com a valida\xe7\xe3o ativada.",dataDirtyException:"A grade tem transa\xe7\xf5es pendentes que podem afetar a composi\xe7\xe3o de dados. Para evitar exce\xe7\xf5es, a aplica\xe7\xe3o pode ativar a op\xe7\xe3o consolida\xe7\xe3oAutom\xe1tica de igGrid ou deve processar o evento dataDirty de igGridUpdating e devolver falso. Durante o processamento desse evento, a aplica\xe7\xe3o tamb\xe9m pode commit() dados em igGrid.",recordOrPropertyNotFoundException:"O registo ou propriedade especificado n\xe3o foi encontrado. Verifique os crit\xe9rios para a sua pesquisa e ajuste-os, se necess\xe1rio.",rowUpdatingNotSupportedWithColumnVirtualization:'A atualiza\xe7\xe3o com modoDeEdi\xe7\xe3o: "fila" requer uma configura\xe7\xe3o diferente. columnVirtualization deve estar desativado.',rowEditDialogCaptionLabel:"Editar dados da linha",excelNavigationNotSupportedWithCurrentEditMode:"A Navega\xe7\xe3o do Excel requer uma configura\xe7\xe3o diferente. O editMode deve estar definido para 'c\xe9lula' ou 'linha'",columnNotFound:"A chave da coluna especificada n\xe3o foi encontrada na cole\xe7\xe3o das colunas vis\xedveis ou o \xedndice especificado estava fora do intervalo.",rowOrColumnSpecifiedOutOfView:"A edi\xe7\xe3o da linha ou coluna especificada n\xe3o \xe9 atualmente poss\xedvel. Deve aparecer na p\xe1gina atual e no quadro de virtualiza\xe7\xe3o.",editingInProgress:"Uma linha ou c\xe9lula est\xe1 a ser editada. Outro procedimento de atualiza\xe7\xe3o n\xe3o pode ser iniciado antes de terminar a edi\xe7\xe3o atual.",undefinedCellValue:"Indefinido n\xe3o pode ser definido como um valor de c\xe9lula.",addChildTooltip:"Adicionar uma linha subordinada",multiRowGridNotSupportedWithCurrentEditMode:"Quando a grelha tem o Esquema Multilinhas ativado, s\xf3 o modo de edi\xe7\xe3o de di\xe1logo \xe9 suportado.",virtualizationNotSupportedWithoutAutoCommit:" A ativa\xe7\xe3o da Atualiza\xe7\xe3o e da Virtualiza\xe7\xe3o enquanto o autoCommit est\xe1 definido como falso n\xe3o \xe9 suportada. Defina a op\xe7\xe3o consolida\xe7\xe3oAutom\xe1tica da grelha como verdadeira."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.pt.CellMerging={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",mergeStrategyNotAFunction:"A estrat\xe9giaDeUni\xe3o especificada n\xe3o \xe9 reconhecida como um valor predefinido v\xe1lido ou uma fun\xe7\xe3o com este nome n\xe3o foi encontrada."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.pt.ColumnMoving={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",movingDialogButtonApplyText:"Aplicar",movingDialogButtonCancelText:"Cancelar",movingDialogCaptionButtonDesc:"Mover para baixo",movingDialogCaptionButtonAsc:"Mover para cima",movingDialogCaptionText:"Mover colunas",movingDialogDisplayText:"Mover colunas",movingDialogDropTooltipText:"Mover para aqui",movingDialogCloseButtonTitle:"Fechar caixa de di\xe1logo em movimento",dropDownMoveLeftText:"Mover para a esquerda",dropDownMoveRightText:"Mover para a direita",dropDownMoveFirstText:"Mover primeiro",dropDownMoveLastText:"Mover por \xfaltimo",featureChooserNotReferenced:"Uma refer\xeancia ao Seletor de Funcionalidades est\xe1 ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto ou use um dos ficheiros de script combinados.",movingToolTipMove:"Mover",featureChooserSubmenuText:"Mover para",columnVirtualizationEnabled:"A movimenta\xe7\xe3o da coluna requer uma configura\xe7\xe3o de virtualiza\xe7\xe3o diferente. Use rowVirtualization ou defina o virtualizationMode como 'continuous'."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.pt.ColumnFixing={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",headerFixButtonText:"Corrigir esta coluna",headerUnfixButtonText:"Desmarcar esta coluna",featureChooserTextFixedColumn:"Fixar coluna",featureChooserTextUnfixedColumn:"Desafixar coluna",groupByNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A funcionalidade Agrupar Por deve estar desativada.",virtualizationNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o de virtualiza\xe7\xe3o diferente. rowVirtualization deve ser usada.",columnVirtualizationNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o de virtualiza\xe7\xe3o diferente. columnVirtualization deve ser desativada.",columnMovingNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A movimenta\xe7\xe3o da coluna deve estar desativada.",hidingNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A funcionalidade Ocultar deve estar desativada.",hierarchicalGridNotSupported:"igHierarchicalGrid n\xe3o suporta a fixa\xe7\xe3o de colunas. A fixa\xe7\xe3o da coluna deve estar desativada.",responsiveNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A funcionalidade reativa deve ser desativada.",noGridWidthNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A largura da grelha deve ser definida como percentagem ou como n\xfamero em pixels.",gridHeightInPercentageNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A altura da grelha deve ser definida em pixels.",defaultColumnWidthInPercentageNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. A largura predefinida da coluna deve ser definida como um n\xfamero em pixels.",columnsWidthShouldBeSetInPixels:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o de largura da coluna diferente. A largura da coluna com a tecla {key} deve ser definida em pixels.",unboundColumnsNotSupported:"A fixa\xe7\xe3o da coluna requer uma configura\xe7\xe3o diferente. As colunas n\xe3o ligadas devem estar desativadas.",excelNavigationNotSupportedWithCurrentEditMode:"A Navega\xe7\xe3o do Excel requer uma configura\xe7\xe3o diferente. editMode deve ser definido como 'cell' ou 'row'.",initialFixingNotApplied:"A fixa\xe7\xe3o inicial n\xe3o p\xf4de ser aplicada para a coluna com a chave: {0}. Motivo: {1}",setOptionGridWidthException:"Valor incorreto para a largura da grelha. Quando houver colunas fixas, a largura da \xe1rea vis\xedvel das colunas n\xe3o fixadas deve ser maior ou igual ao valor da minimalVisibleAreaWidth.",noneError:"A sua configura\xe7\xe3o de rede foi bem sucedida!",notValidIdentifierError:"A chave da coluna especificada n\xe3o \xe9 v\xe1lida. Forne\xe7a uma chave de coluna que corresponda \xe0 chave de uma das colunas de grelha definidas.",fixingRefusedError:"A corre\xe7\xe3o desta coluna n\xe3o \xe9 suportada no momento. Desmarque outra coluna vis\xedvel ou utilize primeiro o m\xe9todo showColumn() em qualquer coluna oculta n\xe3o fixada.",fixingRefusedMinVisibleAreaWidthError:"Esta coluna n\xe3o pode ser fixada. A sua largura excede o espa\xe7o dispon\xedvel para a fixa\xe7\xe3o de uma coluna na grelha.",alreadyHiddenError:"N\xe3o \xe9 poss\xedvel fixar/desafixar esta coluna. O m\xe9todo showColumn() deve ser utilizado primeiro na coluna.",alreadyUnfixedError:"Esta coluna j\xe1 n\xe3o est\xe1 fixada.",alreadyFixedError:"Esta coluna j\xe1 est\xe1 fixada.",unfixingRefusedError:"N\xe3o \xe9 poss\xedvel desafixar esta coluna neste momento. O m\xe9todo showColumn() deve ser usado primeiro em qualquer coluna oculta fixada.",targetNotFoundError:"N\xe3o foi poss\xedvel encontrar a coluna de destino com a chave {key}. Verifique a chave utilizada para a pesquisa e ajuste-a, se necess\xe1rio."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.pt.GridAppendRowsOnDemand={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",loadMoreDataButtonText:"Carregar mais dados",appendRowsOnDemandRequiresHeight:"Anexar linhas a pedido requer uma configura\xe7\xe3o diferente. A altura da grelha deve ser definida.",groupByNotSupported:"Anexar linhas a pedido requer uma configura\xe7\xe3o diferente. Agrupar Por deve estar desativado.",pagingNotSupported:"Anexar linhas a pedido requer uma configura\xe7\xe3o diferente. A pagina\xe7\xe3o deve estar desativada.",cellMergingNotSupported:"Anexar linhas a pedido requer uma configura\xe7\xe3o diferente. A uni\xe3o de c\xe9lulas deve estar desativada.",virtualizationNotSupported:"Anexar linhas a pedido requer uma configura\xe7\xe3o diferente. A virtualiza\xe7\xe3o deve estar desativada."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.pt.igGridResponsive={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",fixedVirualizationNotSupported:'A funcionalidade reativa requer uma configura\xe7\xe3o de virtualiza\xe7\xe3o diferente. virtualizationMode deve ser definido como "continuous".'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.pt.igGridMultiColumnHeaders={optionChangeNotSupported:"{optionName} n\xe3o pode ser editado ap\xf3s a inicializa\xe7\xe3o. O seu valor deve ser definido durante a inicializa\xe7\xe3o.",multiColumnHeadersNotSupportedWithColumnVirtualization:"Os cabe\xe7alhos de v\xe1rias colunas requerem uma configura\xe7\xe3o diferente. A columnVirtualization deve estar desativada.",cannotExpandMultiColumnHeader:"O cabe\xe7alho multicoluna excede a largura m\xe1xima permitida da \xe1rea fixa e, portanto, n\xe3o pode ser expandido",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Deve ter pelo menos uma coluna exibida ao expandir ou fechar um cabe\xe7alho multicoluna.",collapsedColumnIconTooltip:"Expandir",expandedColumnIconTooltip:"Fechar"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.pt.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.pt.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.pt.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.pt.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.pt.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.pt.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.pt.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.pt.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.pt.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.pt.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.pt.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.pt.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.pt.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.pt.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.pt.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.pt.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.pt.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.pt.HierarchicalGrid;return $.ig.locale.pt});