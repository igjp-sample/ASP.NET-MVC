/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 21.1.11
*
* Copyright (c) 2011-2021 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.es=$.ig.locale.es||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.es.Barcode={aILength:"El identificador de aplicaciones (AI) debe tener al menos 2 d\xedgitos.",badFormedUCCValue:"Los datos del c\xf3digo de barras UCC no est\xe1n bien formados. Deben tener la estructura (AI)GTIN.",code39_NonNumericError:"El car\xe1cter '{0}' no es v\xe1lido para los datos CODE39. Los caracteres v\xe1lidos son: {1}",countryError:"Error al convertir el c\xf3digo de pa\xeds. Debe ser un valor num\xe9rico.",emptyValueMsg:"El valor de datos est\xe1 vac\xedo.",encodingError:"Error de conversi\xf3n. Consulte la documentaci\xf3n para conocer cu\xe1les son los valores v\xe1lidos para las propiedades.",errorMessageText:"Valor no v\xe1lido. Consulte la documentaci\xf3n para conocer cu\xe1l es la estructura de datos v\xe1lida de los c\xf3digos de barras.",gS1ExMaxAlphanumNumber:"La familia del GS1 DataBar ampliado puede codificar hasta 41 caracteres alfanum\xe9ricos.",gS1ExMaxNumericNumber:"La familia del GS1 DataBar ampliado puede codificar hasta 74 caracteres num\xe9ricos.",gS1Length:"El c\xf3digo de barras GS1 DataBar se utiliza para los c\xf3digos de barras GTIN 8, 12, 13, 14 y su longitud debe ser 7, 11, 12 o 13. El \xfaltimo d\xedgito se reserva para una suma de comprobaci\xf3n.",gS1LimitedFirstChar:"El c\xf3digo del GS1 DataBar limitado debe tener 0 o 1 como primer d\xedgito. Cuando se codifican estructuras de datos GTIN-14 con un valor de indicador superior a 1, es preciso utilizar el tipo de c\xf3digo de barras Omnidirectional, Stacked, Stacked Omnidirectional o Truncated.",i25Length:"El c\xf3digo de barras Interleaved2of5 debe tener un n\xfamero par de d\xedgitos. Si se trata de un n\xfamero impar, puede poner un 0 delante.",intelligentMailLength:"La longitud del valor de datos en el c\xf3digo de barras Intelligent Mail debe ser de 20, 25, 29 o 31 caracteres: c\xf3digo de rastreo de 20 d\xedgitos (2 para el identificador del c\xf3digo de barras, 3 para el identificador del tipo de servicio, 6 o 9 para el identificador de mailer y 9 o 6 para el n\xfamero de serie) y 0, 5, 9 o 11 s\xedmbolos de c\xf3digo postal.",intelligentMailSecondDigit:"El segundo d\xedgito debe encontrarse en el intervalo comprendido entre 0 y 4.",invalidAI:"Cadenas no v\xe1lidas en el elemento del identificador de aplicaciones. Aseg\xfarese de que la cadena del identificador de aplicaciones de los datos est\xe9 bien formada.",invalidCharacter:"El car\xe1cter '{0}'no es v\xe1lido para el tipo de c\xf3digo de barras actual. Los caracteres v\xe1lidos son: {1}",invalidDimension:"Las dimensiones del c\xf3digo de barras no pueden determinarse porque se ha producido una combinaci\xf3n incorrecta de los valores de las propiedades Stretch, BarsFillMode y XDimension.",invalidHeight:"Las l\xedneas de cuadr\xedcula del c\xf3digo de barras (n\xfamero {0}) no puede adaptarse a esta altura ({1} p\xedxeles).",invalidLength:"El valor de datos del c\xf3digo de barras debe tener un n\xfamero {0} de d\xedgitos.",invalidPostalCode:"Valor PostalCode no v\xe1lido: El modo 2 codifica c\xf3digos postales de hasta 9 d\xedgitos (c\xf3digo postal de EE.UU.), mientras que el modo 3 codifica c\xf3digos alfanum\xe9ricos de hasta 6 caracteres.",invalidPropertyValue:"El valor de propiedad {0} debe encontrarse en un intervalo comprendido entre {1} y {2}.",invalidVersion:"El n\xfamero SizeVersion no genera celdas suficientes para codificar los datos con el modo de codificaci\xf3n y el nivel de correcci\xf3n de errores actuales.",invalidWidth:"Las columnas de cuadr\xedcula del c\xf3digo de barras (n\xfamero {0}) no puede adaptarse a esta anchura ({1} p\xedxeles). Chequear el valor de la propiedad XDimension y/o el de WidthToHeightRatio.",invalidXDimensionValue:"El valor XDimension de debe encontrarse en un intervalo comprendido entre {0} y {1} para el tipo de c\xf3digo de barras actual.",maxLength:"La longitud {0} del texto supera el m\xe1ximo codificable para el tipo actual de c\xf3digos de barras. Puede codificar como m\xe1ximo {1} caracteres.",notSupportedEncoding:"La codificaci\xf3n correspondiente bajo {0} {1} no se admite.",pDF417InvalidRowsColumnsCombination:"Las palabras de c\xf3digo (correcci\xf3n de datos y errores) son m\xe1s de las que pueden codificarse en s\xedmbolos con una matriz {0}x{1}.",primaryMessageError:"No se puede extraer el mensaje principal del valor de datos. Consulte la documentaci\xf3n para conocer la estructura.",serviceClassError:"Error al convertir la clase de servicio. Debe ser un valor num\xe9rico.",smallSize:"No es posible ajustar la cuadr\xedcula en Size({0}, {1}) con la configuraci\xf3n Stretch definida.",unencodableCharacter:"El car\xe1cter '{0}' no puede codificarse.",uPCEFirstDigit:"De manera predeterminada, el primer d\xedgito UPCE debe ser siempre cero.",warningString:"Advertencia Barcode: ",wrongCompactionMode:"El mensaje de datos no puede compactarse con el modo {0}.",notLoadedEncoding:"La codificaci\xf3n {0} no se ha cargado."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.es.Barcode;return $.ig.locale.es.Barcode});