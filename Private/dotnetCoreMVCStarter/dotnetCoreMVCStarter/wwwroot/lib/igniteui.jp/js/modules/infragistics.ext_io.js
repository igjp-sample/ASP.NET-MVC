/*!@license
* Infragistics.Web.ClientUI infragistics.ext_io.js 21.1.20211.147
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
*     infragistics.ext_text.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_text"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$7=$$t;var $$0=$.ig.globalDefs.$$0;var $$1=$.ig.globalDefs.$$1;var $$6=$.ig.globalDefs.$$6;var $$8=$.ig.globalDefs.$$8;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["TextReader:g","SynchronizedReader:h","TextReader_NullTextReader:i"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber,$2=$.ig.util.compare,$3=$.ig.util.replace,$4=$.ig.util.stringFormat,$5=$.ig.util.stringFormat1,$6=$.ig.util.stringFormat2,$7=$.ig.util.stringCompare1,$8=$.ig.util.stringCompare2,$9=$.ig.util.stringCompare3;$c("BitConverter:a","Object",{init:function(){$.ig.$op.init.call(this)},r:function(a){throw new $$6.q(0)},a:function(a){return[a?1:0]},b:function(a){throw new $$6.q(0)},c:function(a){var b=0;var c=0;if(a==Number.POSITIVE_INFINITY){b=2146435072}else if(a==Number.NEGATIVE_INFINITY){b=4293918720}else if(a==0){if(1/a==1/0){b=0}else{b=2147483648}}else if($.ig.util.isNaN(a)){b=4294443008}else{if(a<-0){b=2147483648;a=-a}var d=Math.floor(Math.log(a)/Math.log(2));var e=$.ig.truncate(Math.floor(a/Math.pow(2,d)*Math.pow(2,52)));c=$o(e,4294967295);e=$a(e,$.ig.truncate(Math.pow(2,32)));d+=1023;if(d>=2047){d=2047;e=0}else if(d<0){d=0}b=$p(b,$r($.ig.truncate(d),20));b=$p(b,$o(e,~(-1<<20)))}return[c&255,c>>>8&255,c>>>16&255,c>>>24&255,b&255,b>>>8&255,b>>>16&255,b>>>24&255]},g:function(a){throw new $$6.q(0)},e:function(a){return $$t.$a.i($i(a))},f:function(a){return $$t.$a.j(a)},d:function(a){return $$t.$a.h(a)},i:function(a){return[a&255,a>>>8&255,a>>>16&255,a>>>24&255]},j:function(a){var b=a|0;var c=$p($.ig.truncate(a/Math.pow(2,32)),0);return[b&255,b>>>8&255,b>>>16&255,b>>>24&255,c&255,c>>>8&255,c>>>16&255,c>>>24&255]},h:function(a){return[a&255,a>>>8&255]},n:function(a){throw new $$6.q(0)},l:function(a,b){return a[b]!=0},m:function(a,b){throw new $$6.q(0)},o:function(a,b){var c=(a[b+7]&1<<7)>>7;var d=(a[b+7]&127)<<4|(a[b+6]&15<<4)>>4;if(d==0){return c==0?0:-0}if(d==2047){if((a[b+6]&8)!=0){return NaN}return c==0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY}var e=Math.pow(2,d-1023-52);var f=a[b]+a[b+1]*Math.pow(2,8*1)+a[b+2]*Math.pow(2,8*2)+a[b+3]*Math.pow(2,8*3)+a[b+4]*Math.pow(2,8*4)+a[b+5]*Math.pow(2,8*5)+(a[b+6]&15)*Math.pow(2,8*6)+Math.pow(2,52);return Math.pow(-1,c)*f*e},p:function(a,b){var c=$$t.$a.w(a,b);if(c>32767){c-=65535+1}return c},q:function(a,b){return a[b]|a[b+1]<<8|a[b+2]<<16|a[b+3]<<24},s:function(a,b){throw new $$6.q(0)},t:function(a){throw new $$6.q(0)},u:function(a,b){throw new $$6.q(0)},v:function(a,b,c){throw new $$6.q(0)},w:function(a,b){return a[b]|a[b+1]<<8},x:function(a,b){return $i($$t.$a.q(a,b))},$type:new $.ig.Type("BitConverter",$.ig.$ot)},true);$c("IOPath:b","Object",{init:function(){$.ig.$op.init.call(this)},getExtension:function(a){var b=a.lastIndexOf(".");if(b<0){return String.empty()}return a.substr(b)},getDirectoryName:function(a){var b=a.lastIndexOfAny(["\\","/"]);if(b<0){return String.empty()}return a.substr(0,b)},getFileName:function(a){var b=a.lastIndexOfAny(["\\","/"]);if(b<0){return a}return a.substr(b+1)},combine1:function(a,b){if(a==null||a.length==0){return b}if(b==null||b.length==0){return a}if(a.charAt(a.length-1)=="\\"||a.charAt(a.length-1)=="/"||b.charAt(0)=="\\"||b.charAt(0)=="/"){return a+b}return a+"\\"+b},isPathRooted:function(a){if(a==null){return false}if(a.length>=1&&(a.charAt(0)=="/"||a.charAt(0)=="\\")){return true}if(a.length>=2&&a.charAt(1)==":"){return true}return false},changeExtension:function(a,b){throw new $$6.q(0)},combine:function(a){throw new $$6.q(0)},combine2:function(a,b,c){throw new $$6.q(0)},getFileNameWithoutExtension:function(a){throw new $$6.q(0)},getFullPath:function(a){throw new $$6.q(0)},getInvalidPathChars:function(){throw new $$6.q(0)},getPathRoot:function(a){if(a==null){return null}return String.empty()},getTempFileName:function(){throw new $$6.q(0)},getTempPath:function(){throw new $$6.q(0)},hasExtension:function(a){throw new $$6.q(0)},$type:new $.ig.Type("IOPath",$.ig.$ot)},true);$c("BinaryReader:c","Object",{__data:null,d:false,n:0,canRead:function(){return this.n<this.__data.length},currentPosition:function(){return this.n},length:function(){if(this.f){return this.__stream.length()}return this.__data.length},e:false,f:false,init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.__data=null;this.d=false;this.n=0;this.e=false;this.f=false;$.ig.$op.init.call(this);this.__data=b;this.d=c;var data_=this.__data;if(typeof Uint8Array!="undefined"&&data_ instanceof Uint8Array){this.e=true}},i:function(offset_){if(this.f){this.__stream.position(offset_);return this.__stream.readByte()}else if(this.e){return this.__data[offset_]&255}else{return this.__data.charCodeAt(offset_)&255}},a:function(offset_,a){var b=new Array(a);if(this.f){this.__stream.position(offset_);this.__stream.read(b,0,a)}else if(this.e){for(var i_=0;i_<a;i_++){b[i_]=this.__data[offset_+i_]&255}}else{for(var i_=0;i_<a;i_++){b[i_]=this.__data.charCodeAt(offset_+i_)&255}}return b},b:function(offset_,length_){var a=new Array(length_);if(this.f){this.__stream.position(offset_);this.__stream.read(a,0,length_);$$0.$an.reverse(a)}else if(this.e){for(var i_=0;i_<length_;i_++){a[i_]=this.__data[offset_+(length_-1-i_)]&255}}else{for(var i_=0;i_<length_;i_++){a[i_]=this.__data.charCodeAt(offset_+(length_-1-i_))&255}}return a},readByte:function(){if(this.f){this.n=this.__stream.position()}var a=this.i(this.n);this.n=this.n+1;return a},readBytes:function(a){if(this.f){this.n=this.__stream.position()}var b=this.a(this.n,a);this.n=this.n+a;return b},readUInt32:function(){if(this.f){this.n=this.__stream.position()}var a=0;if(this.d){a=a+(this.i(this.n)<<24);this.n=this.n+1;a=a+(this.i(this.n)<<16);this.n=this.n+1;a=a+(this.i(this.n)<<8);this.n=this.n+1;a=a+this.i(this.n);this.n=this.n+1}else{a=a+this.i(this.n);this.n=this.n+1;a=a+(this.i(this.n)<<8);this.n=this.n+1;a=a+(this.i(this.n)<<16);this.n=this.n+1;a=a+(this.i(this.n)<<24);this.n=this.n+1}if(a<0){a=a+4294967295+1}return a},readUInt16:function(){if(this.f){this.n=this.__stream.position()}var a=0;if(this.d){a=a+(this.i(this.n)<<8);this.n=this.n+1;a=a+this.i(this.n);this.n=this.n+1}else{a=a+this.i(this.n);this.n=this.n+1;a=a+(this.i(this.n)<<8);this.n=this.n+1}return a},readInt32:function(){if(this.f){this.n=this.__stream.position()}var a=0;if(this.d){a=a+(this.i(this.n)<<24);this.n=this.n+1;a=a+(this.i(this.n)<<16);this.n=this.n+1;a=a+(this.i(this.n)<<8);this.n=this.n+1;a=a+this.i(this.n);this.n=this.n+1}else{a=a+this.i(this.n);this.n=this.n+1;a=a+(this.i(this.n)<<8);this.n=this.n+1;a=a+(this.i(this.n)<<16);this.n=this.n+1;a=a+(this.i(this.n)<<24);this.n=this.n+1}if(a>2147483647){a=a-4294967295-1}return a},readDouble:function(){if(this.f){this.n=this.__stream.position()}var a=this.b(this.n,8);this.n=this.n+8;var b=a[0]>>>7;var c=0;c=c+(a[1]>>>4);c=c+((a[0]&127)<<4);var d=1;var e=a[1];var f=1/2;var g=0;var h=false;for(g=5;g<=8;g++){if((e&1<<8-g)>0){d=d+f;h=true}f=f/2}for(var i=2;i<8;i++){e=a[i];for(g=1;g<=8;g++){if((e&1<<8-g)>0){d=d+f;h=true}f=f/2}}if(c==0&&!h){return 0}if(c==0&&h){c=1;d=d-1}if(c==1860&&!h){if(b==1){return Number.NEGATIVE_INFINITY}else{return Number.POSITIVE_INFINITY}}if(c==1860&&h){return NaN}var j=c-1023;return Math.pow(-1,b)*Math.pow(2,j)*d},readSingle:function(){if(this.f){this.n=this.__stream.position()}var a=this.b(this.n,4);this.n=this.n+4;var b=a[0]>>>7;var c=0;c=c+(a[1]>>>7);c=c+((a[0]&127)<<1);var d=1;var e=a[1];var f=1/2;var g=0;var h=false;for(g=2;g<=8;g++){if((e&1<<8-g)>0){d=d+f;h=true}f=f/2}for(var i=2;i<4;i++){e=a[i];for(g=1;g<=8;g++){if((e&1<<8-g)>0){d=d+f;h=true}f=f/2}}if(c==0&&!h){return 0}if(c==0&&h){c=1;d=d-1}if(c==255&&!h){if(b==1){return 0}else{return 0}}if(c==255&&h){return NaN}var j=c-127;return Math.pow(-1,b)*Math.pow(2,j)*d},__stream:null,init1:function(a,b){this.__data=null;this.d=false;this.n=0;this.e=false;this.f=false;$.ig.$op.init.call(this);this.__stream=b;this.f=true},baseStream:function(){return this.__stream},readBoolean:function(){if(this.f){this.n=this.__stream.position()}var a=this.i(this.n);this.n=this.n+1;return a!=0},readInt16:function(){if(this.f){this.n=this.__stream.position()}var a=0;if(this.d){a=a+(this.i(this.n)<<8);this.n=this.n+1;a=a+this.i(this.n);this.n=this.n+1}else{a=a+this.i(this.n);this.n=this.n+1;a=a+(this.i(this.n)<<8);this.n=this.n+1}if(a>32767){a-=65535+1}return a},readSByte:function(){if(this.f){this.n=this.__stream.position()}var a=this.i(this.n);this.n=this.n+1;if(a>127){return a-255+1}return a},close:function(){this.dispose()},dispose:function(){if(this.f){this.__stream.dispose()}},$type:new $.ig.Type("BinaryReader",$.ig.$ot,[$$0.$au.$type])},true);$c("BinaryWriter:d","Object",{b:null,d:null,init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$.ig.$op.init.call(this)},init1:function(a,b){$$t.$d.init2.call(this,2,b,new $$8.c(0,false,true))},init2:function(a,b,c){$.ig.$op.init.call(this);this.b=b;this.d=c},baseStream:function(){return this.b},close:function(){this.disposeCore(true)},dispose:function(){this.disposeCore(true)},disposeCore:function(a){if(a){this.b.close()}},flush:function(){this.b.flush()},seek:function(a,b){return this.b.seek(a,b)},write4:function(a){this.b.write($$t.$a.a(a),0,1)},write5:function(a){this.b.write($$t.$a.d(a),0,1)},write:function(a){this.b.write(a,0,a.length)},write6:function(a){},write1:function(a){},write7:function(a){this.b.write($$t.$a.c(a),0,8)},write12:function(a){this.b.write($$t.$a.g(a),0,4)},write9:function(a){this.b.write($$t.$a.e(a),0,4)},write10:function(a){this.b.write($$t.$a.f(a),0,8)},write11:function(a){this.b.write($$t.$a.d(a),0,2)},write8:function(a){this.b.write($$t.$a.d(a),0,2)},write13:function(a){},write15:function(a){this.b.write($$t.$a.i(a),0,4)},write16:function(a){this.b.write($$t.$a.j(a),0,8)},write14:function(a){this.b.write($$t.$a.h(a),0,2)},write2:function(a,b,c){},write3:function(a,b,c){},y:function(a){},$type:new $.ig.Type("BinaryWriter",$.ig.$ot,[$$0.$au.$type])},true);$c("MemoryStream:e","Stream",{o:null,t:0,s:0,r:false,init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$t.$e.init1.call(this,1,0)},init1:function(a,b){$$0.$dc.init.call(this);this.o=new Array(b);for(var c=0;c<b;c++){this.o[c]=0}},init2:function(a,b){$$0.$dc.init.call(this);this.o=b;this.s=b.length;this.r=this.s!=0&&typeof this.o[0]==="string"},canRead:function(){return true},canSeek:function(){return true},canWrite:function(){return true},capacity:function(a){if(arguments.length===1){if(this.o.length==a){return}for(var b=this.s;b<a;b++){this.o[b]=0}return a}else{return this.o.length}},length:function(){return this.s},position:function(a){if(arguments.length===1){if(this.t==a){return}this.t=a;if(this.capacity()<=this.t){this.capacity(this.t+1)}return a}else{return this.t}},disposeCore:function(a){},flush:function(){},getBuffer:function(){return this.o},read:function(a,b,c){var d=Math.min(this.s-this.t,c);if(this.r){for(var e=0;e<d;e++){a[b++]=this.o[this.t++].charCodeAt(0)&255}}else{for(var f=0;f<d;f++){a[b++]=this.o[this.t++]}}return d},readByte:function(){if(this.s<=this.t){return-1}if(this.r){return this.o[this.t++].charCodeAt(0)&255}return this.o[this.t++]},seek:function(a,b){switch(b){case 0:this.t=a;break;case 1:this.t+=a;break;case 2:this.t=this.s+a;break}return this.t},setLength:function(a){if(this.capacity()<a){this.capacity(Math.max(a,this.capacity()*2))}this.s=a;if(this.s<this.t){this.t=this.s}},toArray:function(){if(this.r){var a=new Array(this.s);var b=this.position();this.position(0);this.read(a,0,a.length);this.position(b);return a}return this.o.slice(0,this.s)},write:function(a,b,c){var d=this.t+c;if(this.length()<d){this.setLength(d)}var e=c!=0&&typeof a[b]==="string";if(e==this.r){for(var f=0;f<c;f++){this.o[this.t++]=a[b++]}}else if(e){for(var g=0;g<c;g++){this.o[this.t++]=a.charCodeAt(b++)&255}}else{for(var h=0;h<c;h++){this.o[this.t++]=String.fromCharCode(a[b++])}}},writeByte:function(a){var b=typeof a==="string";if(b==this.r){this.o[this.t++]=a}else if(b){this.o[this.t++]=a.charCodeAt(0)&255}else{this.o[this.t++]=String.fromCharCode(a)}if(this.s<this.t){this.s=this.t}},writeTo:function(a){a.write(this.o,0,this.s)},$type:new $.ig.Type("MemoryStream",$$0.$dc.$type)},true);$c("TextReader:g","Object",{staticInit:function(){$$t.$g.$null=new $$t.i},init:function(){$.ig.$op.init.call(this)},close:function(){this.dispose1(true)},dispose:function(){this.dispose1(true)},dispose1:function(a){if(a){}return},peek:function(){return-1},read:function(){return-1},read1:function(a,b,c){var d,e;for(e=0;e<c;e++){if((d=this.read())==-1){return e}a[b+e]=$u(d)}return e},readBlock:function(a,b,c){var d=0;var e=0;do{e=this.read1(a,b,c);b+=e;d+=e;c-=e}while(e!=0&&c>0);return d},readLine:function(){return String.empty()},readToEnd:function(){return String.empty()},synched:function(a){if(a==null){throw new $$6.e(0,"reader is null")}if($b($$t.$h.$type,a)!==null){return a}return new $$t.h(a)},$type:new $.ig.Type("TextReader",$.ig.$ot,[$$0.$au.$type])},true);$c("StreamReader:f","TextReader",{o:null,q:null,p:null,k:null,l:0,m:0,init:function(a){$$t.$g.init.call(this);this.o=a;this.q=$$8.$a.uTF8();this.p=this.q.getDecoder();this.k=new Array(this.q.getMaxCharCount(1024))},r:function(){var a=new Array(1024);var b=this.o.read(a,0,a.length);this.l=this.p.c(a,0,b,this.k,0);this.m=0},peek:function(){if(this.m==this.l){this.r();if(this.m==this.l){return-1}}return this.k[this.m].charCodeAt(0)},read:function(){if(this.m==this.l){this.r();if(this.m==this.l){return-1}}return this.k[this.m++].charCodeAt(0)},read1:function(a,b,c){var d=0;while(c>0){var e=Math.min(c,this.l-this.m);if(e==0){this.r();e=Math.min(c,this.l-this.m);if(e==0){break}}$.ig.util.arrayCopy1(this.k,this.m,a,b,e);d+=e;c-=e;this.m+=e}return d},readLine:function(){throw new $$6.q(0)},readToEnd:function(){var a=new $$6.aj(0);while(true){var b=this.l-this.m;if(b==0){this.r();b=this.l-this.m;if(b==0){break}}a.g(this.k,this.m,b);this.m=this.l}return a.toString()},$type:new $.ig.Type("StreamReader",$$t.$g.$type)},true);$c("TextReader_NullTextReader:i","TextReader",{init:function(){$$t.$g.init.call(this)},readLine:function(){return null},$type:new $.ig.Type("TextReader_NullTextReader",$$t.$g.$type)},true);$c("SynchronizedReader:h","TextReader",{k:null,init:function(a){$$t.$g.init.call(this);this.k=a},close:function(){this.k.close()},peek:function(){return this.k.peek()},readBlock:function(a,b,c){return this.k.readBlock(a,b,c)},readLine:function(){return this.k.readLine()},readToEnd:function(){return this.k.readToEnd()},read:function(){return this.k.read()},read1:function(a,b,c){return this.k.read1(a,b,c)},$type:new $.ig.Type("SynchronizedReader",$$t.$g.$type)},true);$$t.$a.k=false;$$t.$b.altDirectorySeparatorChar="/";$$t.$b.directorySeparatorChar="\\";$$t.$b.pathSeparator=";";$$t.$b.volumeSeparatorChar=":";$$t.$g.$null=null;if($$t.$g.staticInit&&!$$t.$g.textReaderStaticInitCalled){$$t.$g.staticInit();$$t.$g.textReaderStaticInitCalled=true}});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});