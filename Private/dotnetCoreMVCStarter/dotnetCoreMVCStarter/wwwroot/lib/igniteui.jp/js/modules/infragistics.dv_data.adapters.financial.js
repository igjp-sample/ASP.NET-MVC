/*!@license
* Infragistics.Web.ClientUI infragistics.dv_data.adapters.financial.js 21.1.20211.147
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
*     infragistics.dv_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$z=$$t;var $$0=$.ig.globalDefs.$$0;var $$4=$.ig.globalDefs.$$4;var $$1=$.ig.globalDefs.$$1;var $$w=$.ig.globalDefs.$$w;var $$6=$.ig.globalDefs.$$6;var $$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["PopulateStockPositionEventHandler:b","PopulateStockPricesEventHandler:c","StockChangedEventHandler:d"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.compare,$y=$.ig.util.replace,$z=$.ig.util.stringFormat,$0=$.ig.util.stringFormat1,$1=$.ig.util.stringFormat2,$2=$.ig.util.stringCompare1,$3=$.ig.util.stringCompare2,$4=$.ig.util.stringCompare3,$5=$.ig.util.tryParseNumber,$6=$.ig.util.tryParseNumber1,$7=$.ig.util.numberToString,$8=$.ig.util.numberToString1,$9=$.ig.util.parseNumber;$c("FinancialDataAdapter:a","Object",{e:null,stockSymbols:function(a){if(arguments.length===1){this.a1(this.e,a,false);return a}else{return this.e}},c:null,stockPrices:function(a){if(arguments.length===1){var b=this.c;this.c=a;if(b!=this.c){this.ap("StockPrices",b,this.c)}return a}else{return this.c}},d:null,stockPricesMemberPaths:function(){return this.d},b:null,stockPositions:function(a){if(arguments.length===1){var b=this.b;this.b=a;if(b!=this.b){this.ap("StockPositions",b,this.b)}return a}else{return this.b}},a:null,stockDetails:function(a){if(arguments.length===1){var b=this.a;this.a=a;if(b!=this.a){this.ap("StockDetails",b,this.a)}return a}else{return this.a}},aa:0,ac:function(a){if(arguments.length===1){var b=this.aa;this.aa=a;if(b!=this.aa){this.ap("StockPricesTimeRange",b,this.aa)}return a}else{return this.aa}},z:0,ab:function(a){if(arguments.length===1){var b=this.z;this.z=a;if(b!=this.z){this.ap("StockPricesTimeInterval",b,this.z)}return a}else{return this.z}},r:false,u:function(a){if(arguments.length===1){var b=this.r;this.r=a;if(b!=this.r){this.ap("StockPricesTradeAfterHours",b,this.r)}return a}else{return this.r}},propertyChanged:null,ap:function(a,b,c){this.aq(a,b,c);if(this.propertyChanged!=null){this.propertyChanged(this,new $$0.b7(a))}},aq:function(a,b,c){switch(a){case"StockPricesTimeRange":case"StockPricesTimeInterval":case"StockPricesTradeAfterHours":this.az();break;case"StockSymbols":this.ay(b,c);break}},populateStockPosition:null,populateStockPrices:null,stockSymbolsChanged:null,au:function(a,b){if(a==null){a=new Array(0)}if(b==null){b=new Array(0)}this.log("OnStockChanged "+a.length+" -> "+b.length);if(this.stockSymbolsChanged!=null){this.stockSymbolsChanged(this,new $$t.e(a,b))}},init:function(){this.e=new Array(0);this.c=new Array(0);this.d=["*.open","*.high","*.low","*.close","*.volume","*.date"];this.b=new Array(0);this.aa=6;this.z=10;this.r=true;this.v=new $$4.h(String,$$t.$j.$type,0);this.x=new $$4.x($$t.$k.$type,0);this.w=new $$4.h(String,String,0);this.o=new $$t.f;$.ig.$op.init.call(this);this.o=new $$t.f;this.a=this.o.generateDetails()},log:function(message_){},clearData:function(){this.e=new Array(0);this.v.clear();this.x.clear();this.stockPrices().clear();this.stockPositions().clear()},removeStockPosition:function(a){this.ar(a)},removeStockPrices:function(a){this.as(a,0)},ax:function(a,b){var e=this.stockSymbols();for(var d=0;d<e.length;d++){var c=e[d];if(!this.w.containsKey(c)){this.w.add(c,"")}}if(this.w.containsKey(a)){this.w.item(a,b)}else{this.w.add(a,b)}var f=this.y(String,this.stockSymbols());if(!f.contains(a)){f.add(a)}this.stockSymbols(this.f(String,f))},a0:function(a){if(this.v.containsKey(a)){var b=this.y(String,this.stockSymbols());if(this.w.containsKey(a)){this.w.remove(a)}var c=this.y(String,this.stockSymbols());if(c.contains(a)){c.remove(a)}this.e=this.f(String,c);this.ay(this.f(String,b),this.f(String,c))}},ad:function(a){if(String.isNullOrEmpty(a)){return""}if(this.w.containsKey(a)){return this.w.item(a)}return""},v:null,x:null,w:null,o:null,q:function(a){this.o.dateRange(this.ac());this.o.dateInterval(this.ab());this.o.skipAfterHours(!this.u());var b=this.ad(a);var c;if(this.populateStockPrices==null){this.log("OnGeneratingPrices "+a);c=this.o.generateStockPrices(a,b)}else{this.log("OnPopulatePrices "+a);c=this.populateStockPrices(a)}return c},p:function(a){this.o.dateRange(this.ac());this.o.dateInterval(this.ab());this.o.skipAfterHours(!this.u());var b=this.ad(a);var c;if(this.populateStockPosition==null){this.log("OnGeneratingPosition "+a);c=this.o.generatePosition(a,b)}else{this.log("OnPopulatePosition "+a);c=this.populateStockPosition(a)}return c},an:function(a,b){if(String.isNullOrEmpty(a)){return}if(b==null){return}b.index(this.x.count());this.x.add(b);this.stockPositions(this.f($$t.$k.$type,this.x))},ao:function(a,b){if(String.isNullOrEmpty(a)){return}if(b==null){return}this.log("OnAddingPrices "+a);if(!this.v.containsKey(a)){this.v.add(a,b)}else{return}this.stockPrices(this.f($$t.$j.$type,this.v.values()))},as:function(a,b){if(String.isNullOrEmpty(a)){return}this.log("OnRemovingPrices "+a);if(this.v.containsKey(a)){this.v.remove(a)}else{return}this.stockPrices(this.f($$t.$j.$type,this.v.values()))},ar:function(a){this.log("OnRemovingPosition "+a);if(this.x.count()>a){this.x.removeAt(a)}else{return}for(var b=0;b<this.x.count();b++){this.x.__inner[b].index(b)}this.stockPositions(this.f($$t.$k.$type,this.x))},at:function(){this.log("OnStockClearing ");this.a1(this.stockSymbols(),new Array(0),true)},a1:function(a,b,c){if(this.t(a,b)){return}var d=this.y(String,a);for(var f=0;f<b.length;f++){var e=b[f];if(!d.contains(e)){d.add(e)}}this.e=this.f(String,d);this.ap("StockSymbols",null,this.e);this.au(a,this.e)},ay:function(a,b){if(a==b){return}this.log("StockGenerate ");if(a!=null&&a.length!=0){for(var c=a.length-1;c>=0;c--){var d=a[c];if(this.v.containsKey(d)){this.as(d,c)}}}if(b!=null&&b.length!=0){for(var e=0;e<b.length;e++){var f=b[e];if(!this.v.containsKey(f)){var g=this.p(f);var h=this.q(f);this.ao(f,h);this.an(f,g)}}}},az:function(){this.o.dateRange(this.ac());this.o.dateInterval(this.ab());this.o.skipAfterHours(!this.u());if(this.stockSymbols()==null||this.stockSymbols().length==0){this.v.clear();this.x.clear();this.stockPrices().clear();this.stockPositions().clear()}else{this.v.clear();this.x.clear();this.stockPrices().clear();this.stockPositions().clear();for(var a=0;a<this.stockSymbols().length;a++){var b=this.stockSymbols()[a];var c=this.p(b);var d=this.q(b);this.ao(b,d);this.an(b,c)}}},s:function(a,b){if(a==null||a.length==0){return false}for(var d=0;d<a.length;d++){var c=a[d];if(b==c){return true}}return false},f:function($t,a){if(a==null||a.count()==0){return new Array(0)}var b=new Array(a.count());var c=0;var e=a.getEnumerator();while(e.moveNext()){var d=e.current();b[c]=d;c++}return b},y:function($t,a){if(a==null||a.length==0){return new $$4.x($t,0)}var b=new $$4.x($t,0);for(var c=0;c<a.length;c++){b.add(a[c])}return b},t:function(a,b){if(a==null||b==null){return false}if(a.length!=b.length){return false}for(var c=0;c<a.length;c++){if(a[c]!=b[c]){return false}}return true},$type:new $.ig.Type("FinancialDataAdapter",$.ig.$ot,[$$0.$b6.$type])},true);$c("StockChangedEventArgs:e","Object",{init:function(a,b){$.ig.$op.init.call(this);this.addedSymbols(a);this.removedSymbols(b)},_addedSymbols:null,addedSymbols:function(a){if(arguments.length===1){this._addedSymbols=a;return a}else{return this._addedSymbols}},_removedSymbols:null,removedSymbols:function(a){if(arguments.length===1){this._removedSymbols=a;return a}else{return this._removedSymbols}},$type:new $.ig.Type("StockChangedEventArgs",$.ig.$ot)},true);$c("StockDataGenerator:f","Object",{init:function(){this._stockInterval=new $$0.bb;this.q=new $$6.s(0);$.ig.$op.init.call(this);this.skipAfterHours(false);this.priceStart(0);this.priceRange(NaN);this.priceMinimum(NaN);this.priceMaximum(NaN);this.volumeStart(0);this.volumeRange(NaN);this.dateRange(12);this.dateInterval(24*60)},_priceStart:0,priceStart:function(a){if(arguments.length===1){this._priceStart=a;return a}else{return this._priceStart}},_priceRange:0,priceRange:function(a){if(arguments.length===1){this._priceRange=a;return a}else{return this._priceRange}},_priceMinimum:0,priceMinimum:function(a){if(arguments.length===1){this._priceMinimum=a;return a}else{return this._priceMinimum}},_priceMaximum:0,priceMaximum:function(a){if(arguments.length===1){this._priceMaximum=a;return a}else{return this._priceMaximum}},_volumeStart:0,volumeStart:function(a){if(arguments.length===1){this._volumeStart=a;return a}else{return this._volumeStart}},_volumeRange:0,volumeRange:function(a){if(arguments.length===1){this._volumeRange=a;return a}else{return this._volumeRange}},_dateRange:0,dateRange:function(a){if(arguments.length===1){this._dateRange=a;return a}else{return this._dateRange}},_dateInterval:0,dateInterval:function(a){if(arguments.length===1){this._dateInterval=a;return a}else{return this._dateInterval}},_stockInterval:null,stockInterval:function(a){if(arguments.length===1){this._stockInterval=a;return a}else{return this._stockInterval}},_skipAfterHours:false,skipAfterHours:function(a){if(arguments.length===1){this._skipAfterHours=a;return a}else{return this._skipAfterHours}},g:new Date,h:new Date,q:null,generatePosition:function(a,b){var c=$$t.$g.get(a);var d=$a(this.q.next2(1,10),100);var e=new $$t.k;e.symbol(c.symbol());e.company(c.company());e.sector(c.sector());e.costPerShare(c.close()-c.open()*d);e.marketPrice(c.close());e.tradeDate($$0.$s.now());return e},generateDetails:function(){var a=new $$4.x($$t.$l.$type,0);var c=$$t.$g.b.values().getEnumerator();while(c.moveNext()){var b=c.current();var d=$a(this.q.next2(10,30),100);var e=new $$t.l;e.company(b.company());e.symbol(b.symbol());e.sector(b.sector());e.marketPrice(b.close());e.marketShares($a(b.volume()*this.q.next2(15,20),1e6));e.annualLow(b.close()-b.open()*d);e.annualHigh(b.close()+b.open()*d);a.add(e)}return a.toArray()},generateStockPrices:function(a,b){var c=$$0.$s.now();this.g=$.ig.Date.prototype.fromValues(c.getFullYear(),$.ig.Date.prototype.getMonth(c),c.getDate(),16,30,0,0);this.h=$.ig.Date.prototype.addMonths(this.g,-this.dateRange());var d=Math.ceil($.ig.util.timeSpanTotalMinutes(this.g-this.h)/this.dateInterval());var e=d*this.dateInterval();this.s(d+" steps, "+e+" range");if(d>1e5){d=1e5;e=d*this.dateInterval();this.s(d+"^steps, "+e+" range")}var f=$.ig.Date.prototype.addMinutes(this.g,-e);if(this.h.getTime()>f.getTime()){this.h=f}var g=$$t.$g.get(a);g.date(this.h);var h=g.sector();if(this.priceStart()>0){g.open(this.priceStart())}if(this.volumeStart()>0){g.volume(this.volumeStart())}this.volumeRange(g.volume()*.05);this.priceRange(g.open()*.025);this.priceMinimum(g.open()-g.open()*.75);this.priceMaximum(g.open()+g.open()*.75);g.high(g.open()+g.open()*.02);g.low(g.open()-g.open()*.02);g.close(g.open()+(this.q.nextDouble()-.5)*this.priceRange());var i=new $$t.j;i.symbol(a);if(!String.isNullOrEmpty(b)){g.company(b);i.company(b)}else if(!String.isNullOrEmpty(g.company())){i.company(g.company())}do{if(this.skipAfterHours()){if(!this.e(g.date())){i.add(g)}}else{i.add(g)}g=this.generateStockPricePoint(g)}while(g.date().getTime()<=this.g.getTime());this.s(" "+i.count()+" items");return i},e:function(a){if(a.getDay()==6){return true}if(a.getDay()==0){return true}var b=$.ig.util.timeSpanInit1(9,30,0);var c=$.ig.util.timeSpanInit1(16,30,0);var d=$.ig.Date.prototype.getTimeOfDay(a);if(d<b||d>c){return true}return false},generateStockPricePoint:function(a){var $self=this;var b=(this.q.nextDouble()-.499)*this.priceRange();var c=a.close();var d=a.close()+b;if(d<this.priceMinimum()){d=this.priceMinimum()+b}if(d>this.priceMaximum()){d=this.priceMaximum()-b}var e=this.q.nextDouble()*1.5*Math.abs(b);var f=this.q.nextDouble()*1.5*Math.abs(b);if(d>c){e=d+e;f=c-f}else{e=c+e;f=d-f}var g=(this.q.nextDouble()-.49)*this.volumeRange();var h=$.ig.truncate(Math.abs(a.volume()+g));var i=$.ig.Date.prototype.addMinutes(a.date(),this.dateInterval());if(i.getTime()>this.g.getTime()){i=this.g}var j=function(){var $ret=new $$t.i;$ret.date($.ig.Date.prototype.addMinutes(a.date(),$self.dateInterval()));$ret.symbol(a.symbol());$ret.company(a.company());$ret.sector(a.sector());$ret.close(Math.round10N(d,2));$ret.open(Math.round10N(c,2));$ret.high(Math.round10N(e,2));$ret.low(Math.round10N(f,2));$ret.volume(h);return $ret}();return j},s:function(message_){},$type:new $.ig.Type("StockDataGenerator",$.ig.$ot)},true);$c("StockInfo:h","Object",{init:function(){$.ig.$op.init.call(this)},_company:null,company:function(a){if(arguments.length===1){this._company=a;return a}else{return this._company}},_symbol:null,symbol:function(a){if(arguments.length===1){this._symbol=a;return a}else{return this._symbol}},_sector:null,sector:function(a){if(arguments.length===1){this._sector=a;return a}else{return this._sector}},$type:new $.ig.Type("StockInfo",$.ig.$ot)},true);$c("StockPricePoint:i","StockInfo",{init:function(){$$t.$h.init.call(this)},_open:0,open:function(a){if(arguments.length===1){this._open=a;return a}else{return this._open}},_high:0,high:function(a){if(arguments.length===1){this._high=a;return a}else{return this._high}},_low:0,low:function(a){if(arguments.length===1){this._low=a;return a}else{return this._low}},_close:0,close:function(a){if(arguments.length===1){this._close=a;return a}else{return this._close}},_volume:0,volume:function(a){if(arguments.length===1){this._volume=a;return a}else{return this._volume}},_date:new Date,date:function(a){if(arguments.length===1){this._date=a;return a}else{return this._date}},$type:new $.ig.Type("StockPricePoint",$$t.$h.$type)},true);$c("StockDataLookup:g","Object",{init:function(){$.ig.$op.init.call(this)},d:function(a,b,c,d,e){if($$t.$g.b.containsKey(a)){}else{var f=new $$t.i;f.symbol(a);f.company(b);f.open(c);f.close(c);f.volume(d);f.sector(e);$$t.$g.b.add(a,f)}},get:function(a){if($$t.$g.b.containsKey(a)){return $$t.$g.b.item(a)}else{var b=new $$t.i;b.symbol(a);b.open($$t.$g.c.next2(100,500));b.volume($$t.$g.c.next2(1e5,5e5));$$t.$g.b.add(a,b);return b}},staticInit:function(){var a=$$0.$s.now();$$t.$g.b=new $$4.h(String,$$t.$i.$type,0);$$t.$g.d("TSLA","Tesla Inc",332.01,10834796,"Transportation");$$t.$g.d("UBER","Uber Technologies Inc",38.79,79442420,"Transportation");$$t.$g.d("NVDA","Nvidia Corp",163.5,16422819,"Technology");$$t.$g.d("GOOG","Alphabet Inc",1204.11,43944923,"Technology");$$t.$g.d("QCOM","Qualcomm Inc",83.24,16689039,"Technology");$$t.$g.d("ROKU","Roku Inc",80.76,22878291,"Technology");$$t.$g.d("CSCO","Cisco Systems Inc",51.83,28869931,"Technology");$$t.$g.d("INTC","Intel Corp",45.33,39091928,"Technology");$$t.$g.d("ADBE","Adobe Systems Inc",270.565,2698322,"Technology");$$t.$g.d("AVGO","Broadcom Inc",293.82,3786434,"Technology");$$t.$g.d("LYFT","Lyft Inc",50,10007408,"Transportation");$$t.$g.d("PYPL","PayPal Holdings Inc",107.6,5657900,"Financial");$$t.$g.d("ORCL","Oracle Corp",53.72,10664674,"Technology");$$t.$g.d("SBUX","Starbucks Corp",77.25,9778829,"Consumer Goods");$$t.$g.d("TWTR","Twitter Inc",37.5,16829698,"Communication");$$t.$g.d("AMAT","Applied Materials Inc",39.26,10725058,"Materials");$$t.$g.d("ATVI","Activision Blizzard Inc",44.73,9803138,"Technology");$$t.$g.d("SNAP","Snap Inc",10.05,15911862,"Communication");$$t.$g.d("TMUS","T-Mobile US Inc",74.38,3477107,"Communication");$$t.$g.d("AMZN","Amazon.com Inc",1836.56,5783410,"Technology");$$t.$g.d("AAPL","Apple Inc",223.55,957369,"Technology");$$t.$g.d("MSFT","Microsoft Corp",124.11,33944923,"Technology");$$t.$g.d("NFLX","Netflix Inc",361.95,16833347,"Communication");$$t.$g.d("BABA","Alibaba Group Holding Ltd",169.79,22330737,"Technology");$$t.$g.d("BAC","Bank of America Corp",28.53,5783410,"Financial");$$t.$g.d("AMJ","JP Morgan Chase & Co",25.34,1350492,"Financial");$$t.$g.d("TXN","Texas Instruments Inc",109.17,7867589,"Technology");$$t.$g.d("CAT","Caterpillar Inc",127.51,8580682,"Industrial");$$t.$g.d("MMM","3M Co",173.935,5916911,"Materials");$$t.$g.d("DIS","Walt Disney Co",131.5,11389896,"Communication");$$t.$g.d("AMD","Advanced Micro Devices Inc",26.98,99017893,"Technology");$$t.$g.d("HON","Honeywell Intl. Inc",168.48,3705165,"Materials");$$t.$g.d("IBM","Intl. Business Machines",133.28,4958021,"Technology");$$t.$g.d("UTX","United Technologies Corp",134.03,4119212,"Technology");$$t.$g.d("CVS","CVS Health Corp",54.3,11183821,"Consumer Goods");$$t.$g.d("DAL","Delta Air Lines Inc",55.44,5223811,"Transportation");$$t.$g.d("CCZ","Comcast Corp",55.5,410,"Communication");$$t.$g.d("BBY","Best Buy Co Inc",70.3,5408468,"Consumer Goods");$$t.$g.d("AAL","American Airlines Group Inc",33.16,7040853,"Transportation");$$t.$g.d("CRM","Salesforce.Com Inc",154.92,5694582,"Financial");$$t.$g.d("C","Citigroup Inc",66.13,23494395,"Financial");$$t.$g.d("F","Ford Motor Co",10.17,51102054,"Transportation");$$t.$g.d("T","AT&T Inc",30.35,27713285,"Communication");$$t.$g.d("V","Visa Inc",157.19,9729964,"Financial");$$t.$g.d("GE","General Electric Co",9.85,60136022,"Energy");$$t.$g.d("MU","Micron Technology Inc",37.36,33092081,"Technology");$$t.$g.d("MA","Mastercard Inc",241.51,4137245,"Financial");$$t.$g.d("HD","Home Depot Inc",191,3326028,"Materials");$$t.$g.d("VZ","Verizon Comm Inc",56.72,13759350,"Communication");$$t.$g.d("EA","Electronic Arts Inc",92.01,3685460,"Communication");$$t.$g.d("FB","Facebook Inc",183.5,16833347,"Technology");$$t.$g.d("GM","General Motors Company",36.85,19454839,"Transportation")},$type:new $.ig.Type("StockDataLookup",$.ig.$ot)},true);$c("StockPriceHistory:j","List$1",{init:function(){$$4.$x.init.call(this,$$t.$i.$type,0);this.symbol("");this.company("")},title:function(){var a=String.isNullOrEmpty(this.company())?"":" - "+this.company();return this.symbol()+a},_symbol:null,symbol:function(a){if(arguments.length===1){this._symbol=a;return a}else{return this._symbol}},_company:null,company:function(a){if(arguments.length===1){this._company=a;return a}else{return this._company}},toString:function(){return this.symbol()},$type:new $.ig.Type("StockPriceHistory",$$4.$x.$type.specialize($$t.$i.$type))},true);$c("StockPosition:k","StockInfo",{init:function(){$$t.$h.init.call(this)},_index:0,index:function(a){if(arguments.length===1){this._index=a;return a}else{return this._index}},_tradeDate:new Date,tradeDate:function(a){if(arguments.length===1){this._tradeDate=a;return a}else{return this._tradeDate}},_shares:0,shares:function(a){if(arguments.length===1){this._shares=a;return a}else{return this._shares}},_costPerShare:0,costPerShare:function(a){if(arguments.length===1){this._costPerShare=a;return a}else{return this._costPerShare}},costTotal:function(){return Math.round(this.shares()*this.costPerShare())},marketValue:function(){return Math.round(this.shares()*this.marketPrice())},_marketPrice:0,marketPrice:function(a){if(arguments.length===1){this._marketPrice=a;return a}else{return this._marketPrice}},gainValue:function(){return Math.round(this.marketValue()-this.costTotal())},gainPercentage:function(){return this.gainValue()/this.costTotal()*100},_data:null,data:function(a){if(arguments.length===1){this._data=a;return a}else{return this._data}},_action:null,action:function(a){if(arguments.length===1){this._action=a;return a}else{return this._action}},$type:new $.ig.Type("StockPosition",$$t.$h.$type)},true);$c("StockDetails:l","StockInfo",{init:function(){$$t.$h.init.call(this)},_annualLow:0,annualLow:function(a){if(arguments.length===1){this._annualLow=a;return a}else{return this._annualLow}},_annualHigh:0,annualHigh:function(a){if(arguments.length===1){this._annualHigh=a;return a}else{return this._annualHigh}},_marketPrice:0,marketPrice:function(a){if(arguments.length===1){this._marketPrice=a;return a}else{return this._marketPrice}},_marketShares:0,marketShares:function(a){if(arguments.length===1){this._marketShares=a;return a}else{return this._marketShares}},marketCap:function(){return Math.round10N(this.marketPrice()*this.marketShares()/1e3,1)},_volatility:0,volatility:function(a){if(arguments.length===1){this._volatility=a;return a}else{return this._volatility}},$type:new $.ig.Type("StockDetails",$$t.$h.$type)},true);$$t.$g.b=null;$$t.$g.c=new $$6.s(0);if($$t.$g.staticInit&&!$$t.$g.stockDataLookupStaticInitCalled){$$t.$g.staticInit();$$t.$g.stockDataLookupStaticInitCalled=true}});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});