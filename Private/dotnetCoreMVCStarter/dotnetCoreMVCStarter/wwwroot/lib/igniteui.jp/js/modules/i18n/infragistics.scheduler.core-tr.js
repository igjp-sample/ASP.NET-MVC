/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 21.1.20211.147
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.tr=$.ig.locale.tr||{};$.ig.locale.tr.schedulerCore=$.ig.locale.tr.schedulerCore||{};var l=$.ig.locale.tr.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Bir yinelemenin \xfcyesi oldu\u011fu i\xe7in {0} \xf6zelli\u011finin de\u011feri bu {1} \xf6rne\u011finde de\u011fi\u015ftirilemez.";l["LE_ActivityBase_DisassociatedResource"]="Belirtilen kaynak, bu etkinlikle ayn\u0131 veri kayna\u011f\u0131yla ili\u015fkili de\u011fil.";l["LE_AppointmentItemsSource_CannotEdit"]="Randevu \xf6\u011fesi kayna\u011f\u0131, i\xe7eri\u011finin de\u011fi\u015ftirilmesini desteklemiyor.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Belirtilen de\u011fer bir JSON dizisi veya bir $ .ig.DataSource \xf6rne\u011fi olmal\u0131d\u0131r.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource, i\xe7eri\u011finin de\u011fi\u015ftirilmesini desteklemez. \xd6\u011fe kayna\u011f\u0131, de\u011fi\u015fiklikleri desteklemek i\xe7in System.Collections.IList uygulamal\u0131d\u0131r.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="RecurrenceRoot \xf6zelli\u011fi ba\u011flanamaz ve e\u015flenemez. Bunun yerine RecurrenceId \xf6zelli\u011fi i\xe7in bir e\u015fleme olu\u015fturun.";l["LE_AppointmentPropertyMapping_Resource"]="Kaynak \xf6zelli\u011fi ba\u011flanamaz ve e\u015flenemez. Bunun yerine ResourceId \xf6zelli\u011fi i\xe7in bir e\u015fleme olu\u015fturun.";l["LE_BeginEdit_CreatePending"]="Bekleyen bir 'Olu\u015fturma' i\u015flemi oldu\u011fundan, belirtilen aktivite d\xfczenlenemez.";l["LE_CannotCreateDataObject_DOTNET"]="Yeni veri nesnesi \xf6rne\u011fi olu\u015fturulamad\u0131. Veri nesnesi t\xfcr\xfcn\xfcz\xfcn parametresiz bir kurucuya sahip oldu\u011fundan emin olun. Aksi takdirde, bu t\xfcr\xfcn yeni \xf6rneklerini olu\u015fturan CreateAppointmentDataObjectCallback \xf6zelli\u011fine bir temsilci atay\u0131n.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="DataSource kullan\u0131mdayken i\u015flem ge\xe7erli de\u011fil. \xd6\u011felere bunun yerine Scheduler.DataSource ile eri\u015fin ve de\u011fi\u015ftirin.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="DataSource kullan\u0131lmadan \xf6nce randevu koleksiyonu bo\u015f olmal\u0131d\u0131r.";l["LE_CouldNotConvertColorScheme"]="'{0}' de\u011feri, ScheduleResourceColorScheme de\u011ferine d\xf6n\xfc\u015ft\xfcr\xfclemedi.";l["LE_CouldNotConvertValue"]="'{0}' de\u011feri, {1} t\xfcr\xfcne d\xf6n\xfc\u015ft\xfcr\xfclemedi.";l["LE_CreateDataObjectFailed"]="Yeni veri nesnesi \xf6rne\u011fi olu\u015fturulamad\u0131.";l["LE_DataObjectNotAssociated"]="Belirtilen veri nesnesi bir Randevu ile ili\u015fkili de\u011fil.";l["LE_DuplicateIdentifier"]="'{0}' tan\u0131mlay\u0131c\u0131s\u0131 zaten kullan\u0131l\u0131yor. Etkinlik / Kaynak tan\u0131mlay\u0131c\u0131lar\u0131 benzersiz olmal\u0131d\u0131r.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Bu veri nesnesi zaten bir etkinlikle ili\u015fkilendirilmi\u015f.";l["LE_EndEdit_NotInEditMode"]="EndEdit, d\xfczenleme modunda olmad\u0131\u011f\u0131 i\xe7in belirtilen etkinlikte \xe7a\u011fr\u0131lamaz. Bir etkinlik d\xfczenleme i\u015fleminin ger\xe7ekle\u015ftirilebilmesi i\xe7in \xf6nce BeginEdit \xe7a\u011fr\u0131lmal\u0131d\u0131r.";l["LE_InvalidDayOfWeekRule"]="Belirtilen haftan\u0131n g\xfcn\xfc kural\u0131 ge\xe7ersiz.";l["LE_MissingIdentifier"]="Eksik tan\u0131mlay\u0131c\u0131.";l["LE_NoAppointmentItemsSource"]="AppointmentItemsSource atanmam\u0131\u015f.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="Yeni bir veri nesnesi \xf6rne\u011fi olu\u015fturulamad\u0131. CreateAppointmentDataObjectCallback \xf6zelli\u011fi i\xe7in bir de\u011fer belirtmelisiniz.";l["LE_NoDataObject"]="Belirtilen etkinli\u011fin temelindeki veri nesnesi, \xf6\u011fe kayna\u011f\u0131nda mevcut de\u011fil.";l["LE_NoPropertyMapping_Appointment"]="Randevu \xf6zelli\u011fi '{0}' i\xe7in \xf6zellik e\u015flemesi yok.";l["LE_RecurrenceParsing"]="Yineleme ayr\u0131\u015ft\u0131r\u0131l\u0131rken hata olu\u015ftu, i\xe7erik: {0}";l["LE_RecurrenceSerializing"]="Yineleme serile\u015ftirme hatas\u0131, ba\u011flam: {0}";l["LE_SchedulePropertyMap_Missing"]="A\u015fa\u011f\u0131daki gerekli \xf6zellik e\u015flemeleri tan\u0131mlanmad\u0131:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Temel veri nesnesinde '{0}' adl\u0131 bir genel \xf6zellik bulunamad\u0131.";l["LIT_AgendaDayHeader_Today"]="Bug\xfcn";l["LIT_AgendaNoEventsMessage"]="Olay yok";l["LIT_AgendaStartTime_AllDay"]="t\xfcm g\xfcn";l["LIT_AgendaStartTime_Ends"]="Biter";l["RD_And"]="ve";l["RD_AtTime"]="saat {0}";l["RD_Effective1"]="ge\xe7erlilik {0}";l["RD_Effective2"]="{0} tarihinden {1} tarihine kadar ge\xe7erlidir";l["RD_Effective3"]="{1} tarihinden {2} tarihine kadar ge\xe7erli olan {0}";l["RD_Effective4"]="{0}, {1} itibar\u0131yla ge\xe7erli";l["RD_Effective5"]="{0} tarihinden {1} tarihine kadar, {2} itibar\u0131yla ge\xe7erlidir";l["RD_Effective6"]="{2} tarihinden {3} tarihine kadar {0} tarihinden {1} tarihine kadar ge\xe7erlidir";l["RD_Every"]="her {0} {1}";l["RD_FrequencyLiterals"]="y\u0131l,ay,hafta, g\xfcn, saat,dakika,saniye";l["RD_FrequencyLiterals2"]="y\u0131ll\u0131k,ayl\u0131k,haftal\u0131k,g\xfcnl\xfck,saatlik,dakikal\u0131k,saniyelik";l["RD_FrequencyLiteralsPlural"]="y\u0131l,ay,hafta, g\xfcn, saat,dakika,saniye";l["RD_InMonth"]="{0} i\xe7inde";l["RD_Last"]="son";l["RD_NumberSuffix_nd"]=".";l["RD_NumberSuffix_rd"]=".";l["RD_NumberSuffix_st"]=".";l["RD_NumberSuffix_th"]=".";l["RD_OccurrenceOfThe"]="olu\u015fumu";l["RD_OfEveryMinuteOrHour"]="her {0}";l["RD_OfTheMonthOrYear"]="{0}";l["RD_OfTheNthMinuteOrHour"]="/ {0} {1}";l["RD_OnEach"]="her";l["RD_OnEverySecond"]="her saniye";l["RD_OnThe"]="zaman:";l["RD_OnTheNthSecond"]="{0} saniyede";l["RD_Or"]="veya";l["RD_OrdinalDayOfMonthUsesSuffix"]="do\u011fru";l["RD_OrdinalNumberWithSuffix"]="{0} {1}";l["RD_RecurrenceDescriptionOverallStructure"]="{0} {1} {2} olu\u015fur";l["RD_RepeatingMultipleTimes"]="{0} kez yinelenir";l["RD_RepeatingOneTime"]="bir kez yinelenir";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="sonuna kadar";l["RD_Weekday"]="Hafta i\xe7i";l["RD_WeekendDay"]="Hafta sonu g\xfcn\xfc";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="'{0}' de\u011feri ba\u015far\u0131yla ayr\u0131\u015ft\u0131r\u0131lamad\u0131.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Bu \xf6rnek zaten bir WorkingHours koleksiyonuna eklendi\u011finden {0} \xf6zelli\u011fi de\u011fi\u015ftirilemez.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});