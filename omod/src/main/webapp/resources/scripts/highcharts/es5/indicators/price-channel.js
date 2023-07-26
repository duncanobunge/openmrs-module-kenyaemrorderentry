/*
 Highstock JS v11.1.0 (2023-06-28)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/price-channel",["highcharts","highcharts/modules/stock"],function(l){a(l);a.Highcharts=l;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function l(a,e,g,f){a.hasOwnProperty(e)||(a[e]=f.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,
module:a[e]}})))}a=a?a._modules:{};l(a,"Stock/Indicators/ArrayUtilities.js",[],function(){return{getArrayExtremes:function(a,e,g){return a.reduce(function(a,k){return[Math.min(a[0],k[e]),Math.max(a[1],k[g])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});l(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var g=a.seriesTypes.sma.prototype,l=e.defined,k=e.error,v=e.merge,h;(function(a){function m(b){return"plot"+b.charAt(0).toUpperCase()+
b.slice(1)}function w(b,a){var p=[];(b.pointArrayMap||[]).forEach(function(b){b!==a&&p.push(m(b))});return p}function u(){var b=this,a=b.linesApiNames,n=b.areaLinesNames,c=b.points,d=b.options,e=b.graph,u={options:{gapSize:d.gapSize}},q=[],h=w(b,b.pointValKey),r=c.length,f;h.forEach(function(b,a){for(q[a]=[];r--;)f=c[r],q[a].push({x:f.x,plotX:f.plotX,plotY:f[b],isNull:!l(f[b])});r=c.length});if(b.userOptions.fillColor&&n.length){var t=h.indexOf(m(n[0]));t=q[t];n=1===n.length?c:q[h.indexOf(m(n[1]))];
h=b.color;b.points=n;b.nextPoints=t;b.color=b.userOptions.fillColor;b.options=v(c,u);b.graph=b.area;b.fillGraph=!0;g.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=h}a.forEach(function(a,p){q[p]?(b.points=q[p],d[a]?b.options=v(d[a].styles,u):k('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),b.graph=b["graph"+a],g.drawGraph.call(b),b["graph"+a]=b.graph):k('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});
b.points=c;b.options=d;b.graph=e;g.drawGraph.call(b)}function c(b){var a,c=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((a=g.getGraphPath.call(this,this.nextPoints))&&a.length){a[0][0]="L";c=g.getGraphPath.call(this,b);a=a.slice(0,c.length);for(var d=a.length-1;0<=d;d--)c.push(a[d])}}else c=g.getGraphPath.apply(this,arguments);return c}function d(b){var a=[];(this.pointArrayMap||[]).forEach(function(c){a.push(b[c])});return a}function q(){var b=this,a=this.pointArrayMap,c=[],d;c=w(this);
g.translate.apply(this,arguments);this.points.forEach(function(p){a.forEach(function(a,q){d=p[a];b.dataModify&&(d=b.dataModify.modifyValue(d));null!==d&&(p[c[q]]=b.yAxis.toPixels(d,!0))})})}var r=[],h=["bottomLine"],f=["top","bottom"],t=["top"];a.compose=function(b){if(e.pushUnique(r,b)){var a=b.prototype;a.linesApiNames=a.linesApiNames||h.slice();a.pointArrayMap=a.pointArrayMap||f.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||t.slice();a.drawGraph=u;a.getGraphPath=
c;a.toYData=d;a.translate=q}return b}})(h||(h={}));return h});l(a,"Stock/Indicators/PC/PCIndicator.js",[a["Stock/Indicators/ArrayUtilities.js"],a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Color/Palettes.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,g,f,k){var l=this&&this.__extends||function(){var a=function(e,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)Object.prototype.hasOwnProperty.call(c,
d)&&(a[d]=c[d])};return a(e,c)};return function(e,c){function d(){this.constructor=e}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");a(e,c);e.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),h=f.seriesTypes.sma,x=k.merge;k=k.extend;var m=function(e){function f(){var a=null!==e&&e.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}l(f,e);f.prototype.getValues=function(c,
d){d=d.period;var e=c.xData,f=(c=c.yData)?c.length:0,g=[],h=[],l=[],b;if(!(f<d)){for(b=d;b<=f;b++){var p=e[b-1];var n=c.slice(b-d,b);var k=a.getArrayExtremes(n,2,1);n=k[1];var m=k[0];k=(n+m)/2;g.push([p,n,k,m]);h.push(p);l.push([n,k,m])}return{values:g,xData:h,yData:l}}};f.defaultOptions=x(h.defaultOptions,{params:{index:void 0,period:20},lineWidth:1,topLine:{styles:{lineColor:g.colors[2],lineWidth:1}},bottomLine:{styles:{lineColor:g.colors[8],lineWidth:1}},dataGrouping:{approximation:"averages"}});
return f}(h);k(m.prototype,{areaLinesNames:["top","bottom"],nameBase:"Price Channel",nameComponents:["period"],linesApiNames:["topLine","bottomLine"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"});e.compose(m);f.registerSeriesType("pc",m);"";return m});l(a,"masters/indicators/price-channel.src.js",[],function(){})});
//# sourceMappingURL=price-channel.js.map