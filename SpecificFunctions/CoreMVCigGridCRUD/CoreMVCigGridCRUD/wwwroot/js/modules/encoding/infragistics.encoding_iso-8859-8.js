/*!@license
* Infragistics.Web.ClientUI infragistics.encoding_iso-8859-8.js 21.1.20211.72
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
*     infragistics.ext_text.js
*     infragistics.encoding.core.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.ext_text","./infragistics.encoding.core"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$bb=$$t;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["Iso8859Dash8:a","SingleByteEncoding:b","Encoding:c","Object:d","Type:e","Boolean:f","ValueType:g","Void:h","IConvertible:i","IFormatProvider:j","Number:k","String:l","IComparable:m","Number:n","IComparable$1:o","IEquatable$1:p","Number:q","Number:r","Number:s","NumberStyles:t","Enum:u","Array:v","IList:w","ICollection:x","IEnumerable:y","IEnumerator:z","Error:aa","Error:ab","Number:ac","String:ad","StringComparison:ae","RegExp:af","CultureInfo:ag","DateTimeFormat:ah","Calendar:ai","Date:aj","Number:ak","DayOfWeek:al","DateTimeKind:am","CalendarWeekRule:an","NumberFormatInfo:ao","CompareInfo:ap","CompareOptions:aq","IEnumerable$1:ar","IEnumerator$1:as","IDisposable:at","StringSplitOptions:au","Number:av","Number:aw","Number:ax","Number:ay","Number:az","Number:a0","Assembly:a1","Stream:a2","SeekOrigin:a3","RuntimeTypeHandle:a4","MethodInfo:a5","MethodBase:a6","MemberInfo:a7","ParameterInfo:a8","TypeCode:a9","ConstructorInfo:ba","PropertyInfo:bb","UTF8Encoding:bc","InvalidOperationException:bd","NotImplementedException:be","Script:bf","Decoder:bg","UnicodeEncoding:bh","Math:bi","AsciiEncoding:bj","ArgumentNullException:bk","DefaultDecoder:bl","ArgumentException:bm","IEncoding:bn","Dictionary$2:bo","IDictionary$2:bp","ICollection$1:bq","KeyValuePair$2:br","IDictionary:bs","IEqualityComparer$1:bt","EqualityComparer$1:bu","IEqualityComparer:bv","DefaultEqualityComparer$1:bw","Thread:bx","ThreadStart:by","MulticastDelegate:bz","IntPtr:b0","StringBuilder:b1","Environment:b2","RuntimeHelpers:b3","RuntimeFieldHandle:b4","AbstractEnumerable:b5","Func$1:b6","AbstractEnumerator:b7","GenericEnumerable$1:b8","GenericEnumerator$1:b9"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t;$c("Iso8859Dash8:a","SingleByteEncoding",{ai:null,ac:function(){return this.ai},init:function(){this.ai=["\0","\x01","\x02","\x03","\x04","\x05","\x06","\x07","\b","\t","\n","\x0B","\f","\r","\x0e","\x0f","\x10","\x11","\x12","\x13","\x14","\x15","\x16","\x17","\x18","\x19","\x1a","\x1b","\x1c","\x1d","\x1e","\x1f"," ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","\x7f","\x80","\x81","\x82","\x83","\x84","\x85","\x86","\x87","\x88","\x89","\x8a","\x8b","\x8c","\x8d","\x8e","\x8f","\x90","\x91","\x92","\x93","\x94","\x95","\x96","\x97","\x98","\x99","\x9a","\x9b","\x9c","\x9d","\x9e","\x9f","\xa0","\uf79c","\xa2","\xa3","\xa4","\xa5","\xa6","\xa7","\xa8","\xa9","\xd7","\xab","\xac","\xad","\xae","\u203e","\xb0","\xb1","\xb2","\xb3","\xb4","\xb5","\xb6","\xb7","\xb8","\xb9","\xf7","\xbb","\xbc","\xbd","\xbe","\uf79d","\uf79e","\uf79f","\uf7a0","\uf7a1","\uf7a2","\uf7a3","\uf7a4","\uf7a5","\uf7a6","\uf7a7","\uf7a8","\uf7a9","\uf7aa","\uf7ab","\uf7ac","\uf7ad","\uf7ae","\uf7af","\uf7b0","\uf7b1","\uf7b2","\uf7b3","\uf7b4","\uf7b5","\uf7b6","\uf7b7","\uf7b8","\uf7b9","\uf7ba","\uf7bb","\uf7bc","\u2017","\u05d0","\u05d1","\u05d2","\u05d3","\u05d4","\u05d5","\u05d6","\u05d7","\u05d8","\u05d9","\u05da","\u05db","\u05dc","\u05dd","\u05de","\u05df","\u05e0","\u05e1","\u05e2","\u05e3","\u05e4","\u05e5","\u05e6","\u05e7","\u05e8","\u05e9","\u05ea","\uf7bd","\uf7be","\uf7bf","\uf7c0","\uf7c1"];$$t.$b.init1.call(this,1,28598,"iso-8859-8")},$type:new $.ig.Type("Iso8859Dash8",$$t.$b.$type)},true)});