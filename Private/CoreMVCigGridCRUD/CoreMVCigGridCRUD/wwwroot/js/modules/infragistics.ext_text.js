/*!@license
* Infragistics.Web.ClientUI infragistics.ext_text.js 21.1.20211.72
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
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$8=$$t;$$0=$.ig.globalDefs.$$0;$$1=$.ig.globalDefs.$$1;$$6=$.ig.globalDefs.$$6;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["Encoding:a","UnicodeEncoding:b","UTF8Encoding:c","AsciiEncoding:d","DefaultDecoder:f","UTF8Encoding_UTF8Decoder:g","GroupCollection:j","Match:k","Regex:l"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.equalsSimple,$x=$.ig.util.compareSimple,$y=$.ig.util.numberToString,$z=$.ig.util.tryParseInt32_1,$0=$.ig.util.tryParseInt32_2,$1=$.ig.util.intToString1,$2=$.ig.util.parseInt32_1,$3=$.ig.util.parseInt32_2,$4=$.ig.util.compare,$5=$.ig.util.replace,$6=$.ig.util.stringFormat,$7=$.ig.util.stringFormat1,$8=$.ig.util.stringFormat2,$9=$.ig.util.stringCompare1,$aa=$.ig.util.stringCompare2,$ab=$.ig.util.stringCompare3,$ac=$.ig.util.isDigit,$ad=$.ig.util.isDigit1,$ae=$.ig.util.isLetter,$af=$.ig.util.isNumber,$ag=$.ig.util.isLetterOrDigit,$ah=$.ig.util.isLower,$ai=$.ig.util.toLowerCase,$aj=$.ig.util.toUpperCase;$d("RegexOptions:m",false,false,{None:0,IgnoreCase:1,Multiline:2,ExplicitCapture:4,Compiled:8,Singleline:16,IgnorePatternWhitespace:32,RightToLeft:64,ECMAScript:256,CultureInvariant:512});$c("Encoding:a","Object",{init:function(){$.ig.$op.init.call(this)},uTF8:function(){if($$t.$a.t==null){$$t.$a.t=new $$t.c(1)}return $$t.$a.t},uTF8Unmarked:function(){if($$t.$a.s==null){$$t.$a.s=new $$t.c(1)}return $$t.$a.s},unicode:function(){if($$t.$a.r==null){$$t.$a.r=new $$t.b(0)}return $$t.$a.r},getString1:function(a,b,c){return""},getBytes2:function(a,b,c,d,e){},getBytes:function(a,b,c){var d=new Array(this.getByteCount(a,b,c));this.getBytes2(a,b,c,d,0);return d},getBytes1:function(a){if(a==null){throw new $$6.e(0,"input")}var b=new Array(a.length);for(var c=0;c<a.length;c++){b[c]=a.charAt(c)}return this.getBytes(b,0,b.length)},getByteCount:function(a,b,c){},getString:function(a){return this.getString1(a,0,a.length)},getCharCount:function(a){if(a==null){throw new $$6.e(0,"bytes")}return this.getCharCount1(a,0,a.length)},getCharCount1:function(a,b,c){throw new $$6.q(0)},getChars:function(a,b,c,d,e){throw new $$6.q(0)},aSCII:function(){if($$t.$a.p==null){$$t.$a.p=new $$t.d(1)}return $$t.$a.p},getDecoder:function(){return new $$t.f(this)},getBytes3:function(a,b,c,d,e){return this.getBytes2($.ig.util.toCharArray(a),b,c,d,e)},getMaxCharCount:function(a){return a},getMaxByteCount:function(a){return a+1},getPreamble:function(){return new Array(0)},bigEndianUnicode:function(){if($$t.$a.q==null){$$t.$a.q=new $$t.b(1,true,false)}return $$t.$a.q},defaultValue:function(){return $$t.$a.aSCII()},getEncoding:function(a){switch(a.toUpperCase()){case"ASCII":return $$t.$a.aSCII();case"UNICODE":return $$t.$a.unicode();case"UTF-8":return $$t.$a.uTF8();default:throw new $$6.d(1,"'"+a+"' is not a valid encoding name.")}},webName:function(){throw new $$6.q(0)},$type:new $.ig.Type("Encoding",$.ig.$ot)},true);$c("UnicodeEncoding:b","Encoding",{ab:false,getString1:function(bytes_,a,b){var c="";var d=a+b;for(var i_=a;i_<d;i_=i_+2){if(i_+1>=d){c=c+"\ufffd"}else{var e;var f;if(this.ab){e=bytes_[i_+1].toString(16);f=bytes_[i_].toString(16)}else{e=bytes_[i_].toString(16);f=bytes_[i_+1].toString(16)}if(e.length==1){e="0"+e}if(f.length==1){f="0"+f}var g=$$0.$aw.parseInt(f+e,16);c=c+String.fromCharCode(g)}}return c},getCharCount1:function(a,b,c){return $a(c,2)},getBytes:function(a,b,c){return $$t.$a.getBytes.call(this,a,b,c)},getBytes1:function(a){var b=new Array(a.length*2);this.getBytes3(a,0,a.length,b,0);return b},init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$a.init.call(this)},init1:function(a,b,c){$$t.$a.init.call(this);this.ab=b},getMaxByteCount:function(a){return(a+1)*2},getMaxCharCount:function(a){return $.ig.truncate(Math.ceil(a/2))+1},getBytes3:function(a,b,c,d,e){for(var f=b;f<b+c;f++){var g=a.charCodeAt(f);var h=g&255;var i=g>>8&255;if(this.ab){d[e++]=i;d[e++]=h}else{d[e++]=h;d[e++]=i}}return c*2},getByteCount:function(a,b,c){throw new $$6.q(0)},getBytes2:function(a,b,c,d,e){throw new $$6.q(0)},getChars:function(a,b,c,d,e){throw new $$6.q(0)},$type:new $.ig.Type("UnicodeEncoding",$$t.$a.$type)},true);$c("UTF8Encoding:c","Encoding",{init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$a.init.call(this)},init1:function(a){$$t.$a.init.call(this)},getString1:function(a,b,c){var d="";var e=b;var f=0;var g=0;var h=0;var i=0;while(e<b+c){f=a[e++];if(f<128){d+=$u(f)}else if(f>191&&f<224){if(e>=b+c){throw new $$6.p(1,"UTF-8 decoding error.")}g=a[e++];d+=$u((f&31)<<6|g&63)}else if(f>223&&f<240){if(e+1>=b+c){throw new $$6.p(1,"UTF-8 decoding error.")}g=a[e++];h=a[e++];d+=$u((f&15)<<12|(g&63)<<6|h&63)}else{if(e+2>=b+c){throw new $$6.p(1,"UTF-8 decoding error.")}g=a[e++];h=a[e++];i=a[e++];var j=(f&7)<<18|(g&63)<<12|(h&63)<<6|i&63;if(j<65535){d+=$u(j)}else{j-=65536;d+=$u(j>>10|55296);d+=$u(j&1023|56320)}}}return d},getCharCount1:function(a,b,c){return c},getByteCount:function(a,b,c){throw new $$6.q(0)},getBytes2:function(chars_,charIndex_,charCount_,a,b){var inputUTF8_=unescape(encodeURIComponent(chars_.slice(charIndex_,charIndex_+charCount_).join("")));for(var i_=0;i_<inputUTF8_.length;i_++){a[b+i_]=inputUTF8_.charCodeAt(i_)}return inputUTF8_.length},getBytes:function(a,b,c){return $$t.$a.getBytes.call(this,a,b,c)},getBytes1:function(input_){var a=new Array(input_.length);var inputUTF8_=unescape(encodeURIComponent(input_));for(var i_=0;i_<inputUTF8_.length;i_++){a[i_]=inputUTF8_.charCodeAt(i_)}return a},getChars:function(a,b,c,d,e){var f=e;var g=b;var h=0;var i=0;var j=0;var k=0;while(g<b+c){h=a[g++];if(h<128){d[e++]=$u(h)}else if(h>191&&h<224){if(g>=b+c){throw new $$6.p(1,"UTF-8 decoding error.")}i=a[g++];d[e++]=$u((h&31)<<6|i&63)}else if(h>223&&h<240){if(g+1>=b+c){throw new $$6.p(1,"UTF-8 decoding error.")}i=a[g++];j=a[g++];d[e++]=$u((h&15)<<12|(i&63)<<6|j&63)}else{if(g+2>=b+c){throw new $$6.p(1,"UTF-8 decoding error.")}i=a[g++];j=a[g++];k=a[g++];var l=(h&7)<<18|(i&63)<<12|(j&63)<<6|k&63;if(l<65535){d[e++]=$u(l)}else{l-=65536;d[e++]=$u(l>>10|55296);d[e++]=$u(l&1023|56320)}}}return e-f},getDecoder:function(){return new $$t.g(this)},getMaxByteCount:function(a){return(a+1)*3},getMaxCharCount:function(a){return a+1},$type:new $.ig.Type("UTF8Encoding",$$t.$a.$type)},true);$c("Decoder:e","Object",{init:function(){$.ig.$op.init.call(this)},e:function(a,b,c,d,e,f,g,h,i,j){throw new $$6.q(0);return{p7:h,p8:i,p9:j}},a:function(a,b,c){},b:function(a,b,c,d){throw new $$6.q(0)},c:function(a,b,c,d,e){},d:function(a,b,c,d,e,f){throw new $$6.q(0)},f:function(){throw new $$6.q(0)},$type:new $.ig.Type("Decoder",$.ig.$ot)},true);$c("UTF8Encoding_UTF8Decoder:g","Decoder",{g:0,h:0,i:0,j:0,k:null,init:function(a){$$t.$e.init.call(this);this.k=a},a:function(a,b,c){return this.b(a,b,c,false)},b:function(a,b,c,d){var e=0;var f=b;while(f<b+c){if(this.g==0){this.g=a[f++]}if(this.g<128){e++}else{if(f>=b+c){break}if(this.h==0){this.h=a[f++]}if(this.g>191&&this.g<224){e++}else{if(f>=b+c){break}if(this.i==0){this.i=a[f++]}if(this.g>223&&this.g<240){e++}else{if(f>=b+c){break}if(this.j==0){this.j=a[f++]}var g=(this.g&7)<<18|(this.h&63)<<12|(this.i&63)<<6|this.j&63;if(g<65535){e++}else{e+=2}this.j=0}this.i=0}this.h=0}this.g=0}if(d){this.g=0;this.h=0;this.i=0;this.j=0}return e},c:function(a,b,c,d,e){return this.d(a,b,c,d,e,false)},d:function(a,b,c,d,e,f){var g=e;var h=b;while(h<b+c){if(this.g==0){this.g=a[h++]}if(this.g<128){d[e++]=$u(this.g)}else{if(h>=b+c){break}if(this.h==0){this.h=a[h++]}if(this.g>191&&this.g<224){d[e++]=$u((this.g&31)<<6|this.h&63)}else{if(h>=b+c){break}if(this.i==0){this.i=a[h++]}if(this.g>223&&this.g<240){d[e++]=$u((this.g&15)<<12|(this.h&63)<<6|this.i&63)}else{if(h>=b+c){break}if(this.j==0){this.j=a[h++]}var i=(this.g&7)<<18|(this.h&63)<<12|(this.i&63)<<6|this.j&63;if(i<65535){d[e++]=$u(i)}else{i-=65536;d[e++]=$u(i>>10|55296);d[e++]=$u(i&1023|56320)}this.j=0}this.i=0}this.h=0}this.g=0}if(f){this.g=0;this.h=0;this.i=0;this.j=0}return e-g},$type:new $.ig.Type("UTF8Encoding_UTF8Decoder",$$t.$e.$type)},true);$c("AsciiEncoding:d","Encoding",{init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$a.init.call(this)},init1:function(a){$$t.$a.init.call(this)},getString1:function(bytes_,a,b){var ret_="";for(var i_=a;i_<a+b;i_++){if(bytes_[i_]==0){break}ret_=ret_+String.fromCharCode(bytes_[i_])}return ret_},getCharCount1:function(a,b,c){return c},getByteCount:function(a,b,c){return c},getBytes2:function(a,b,c,d,e){throw new $$6.q(0)},getBytes:function(a,b,c){return $$t.$a.getBytes.call(this,a,b,c)},getBytes1:function(input_){var a=new Array(input_.length);for(var i_=0;i_<input_.length;i_++){a[i_]=input_.charCodeAt(i_)}return a},getChars:function(bytes_,byteIndex_,a,b,c){var d=c;for(var i_=0;i_<a;i_++){if(bytes_[i_]==0){break}b[c++]=String.fromCharCode(bytes_[byteIndex_++])}return c-d},$type:new $.ig.Type("AsciiEncoding",$$t.$a.$type)},true);$c("DefaultDecoder:f","Decoder",{g:null,init:function(a){$$t.$e.init.call(this);this.g=a},a:function(a,b,c){return this.b(a,b,c,false)},b:function(a,b,c,d){return this.g.getCharCount1(a,b,c)},c:function(a,b,c,d,e){return this.d(a,b,c,d,e,false)},d:function(a,b,c,d,e,f){return this.g.getChars(a,b,c,d,e)},$type:new $.ig.Type("DefaultDecoder",$$t.$e.$type)},true);$c("Capture:h","Object",{a:0,c:0,f:null,init:function(a,b,c){$.ig.$op.init.call(this);this.a=a;this.c=b;this.f=c},b:function(){if(this.a<0){throw new $$0.r(1,"Cannot get the index of regex groups")}return this.a},d:function(){return this.c},g:function(){return this.f},toString:function(){return this.f},$type:new $.ig.Type("Capture",$.ig.$ot)},true);$c("Group:i","Capture",{h:false,init:function(a,b,c,d){$$t.$h.init.call(this,b,c,d);this.h=a},i:function(){return this.h},$type:new $.ig.Type("Group",$$t.$h.$type)},true);$c("GroupCollection:j","Object",{f:null,a:null,init:function(a){$.ig.$op.init.call(this);this.f=a;var b=this.f.j;var c=this.f.p.a;this.a=new Array(c.length);for(var d=0;d<this.a.length;d++){var e=c[d];for(var f=0;f<e.length;f++){var g=b[e[f]];if(g!=null){this.a[d]=new $$t.i(true,(-1),g.length,g)}}}},count:function(){return this.a.length},isReadOnly:function(){return true},isSynchronized:function(){return false},syncRoot:function(){return null},item:function(a){return this.a[a]||$$t.$j.c},item1:function(a){return this.item(this.f.p.e[a])},copyTo:function(a,b){$.ig.util.arrayCopyTo(this.a,a,b)},getEnumerator:function(){return this.a.getEnumerator()},$type:new $.ig.Type("GroupCollection",$.ig.$ot,[$$0.$bk.$type,$$0.$bt.$type])},true);$c("Match:k","Group",{j:null,p:null,k:null,l:null,init:function(a,b,c){$$t.$i.init.call(this,c!=null,c==null?0:c.index,c==null?0:c[0].length,c==null?"":c[0]);this.j=c;this.p=a;this.k=b},n:function(){return new $$t.k(null,null,null)},m:function(){if(this.l==null){this.l=new $$t.j(this)}return this.l},o:function(){if(this.i()==false){return this}return this.p.j(this.k,this.b()+this.d())},$type:new $.ig.Type("Match",$$t.$i.$type)},true);$c("Regex:l","Object",{d:null,e:null,a:null,c:false,init:function(a,b){$.ig.$op.init.call(this);var c="g";if((b&1)!=0){c+="i"}if((b&2)!=0){c+="m"}if((b&32)!=0){a=a.replace(/\s/g,"")}if((b&4)!=0){var d=a.indexOf("(");while(d>=0&&d<a.length){var e=d>0&&a.charAt(d-1)=="\\"||d<a.length-1&&a.charAt(d+1)=="?";if(!e){a=a.substr(0,d)+"(?:"+a.substr(d+1)}d=a.indexOf("(",d+1)}}var f=$.ig.util.netRegexToJS(a);this.e=f.nameToNetGroupIndexMap;this.a=f.netToJSGroupIndexMap;this.c=f.matchMustStartAtCurrentPosition;this.d=new RegExp(f.pattern,c)},f:function(a){for(var b=0;b<a.length;b++){if($$t.$l.b(a.charAt(b))==false){continue}var c=new $$6.aj(0);var d=a.charAt(b);c.m(a,0,b);do{c.h("\\");switch(d){case"\t":d="t";break;case"\n":d="n";break;case"\f":d="f";break;case"\r":d="r";break}c.h(d);b++;var e=b;while(b<a.length){d=a.charAt(b);if($$t.$l.b(d)){break}b++}c.m(a,e,b-e)}while(b<a.length);return c.toString()}return a},b:function(a){switch(a.charCodeAt(0)){case 9:case 10:case 12:case 13:case 32:case 35:case 36:case 40:case 41:case 42:case 43:case 46:case 63:case 91:case 92:case 94:case 123:case 124:return true;default:return false}},i:function(a){return this.j(a,0)},j:function(a,b){this.d.lastIndex=b;var c=this.d.exec(a);if(c!=null&&this.c&&b!=c.index){c=null}return new $$t.k(this,a,c)},g:function(a,b){return a.replace(this.d,b)},h:function(a,b,c,d){var e=new $$t.l(b,d);return e.g(a,c)},$type:new $.ig.Type("Regex",$.ig.$ot)},true);$$t.$a.t=null;$$t.$a.s=null;$$t.$a.r=null;$$t.$a.p=null;$$t.$a.q=null;$$t.$j.c=new $$t.i(false,(-1),0,"")});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});