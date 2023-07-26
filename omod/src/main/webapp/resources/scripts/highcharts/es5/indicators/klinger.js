/*
 Highcharts Stock JS v11.1.0 (2023-06-28)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Karol Kolodziej

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/klinger",["highcharts","highcharts/modules/stock"],function(k){a(k);a.Highcharts=k;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function k(a,h,g,k){a.hasOwnProperty(h)||(a[h]=k.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,
module:a[h]}})))}a=a?a._modules:{};k(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,h){var g=a.seriesTypes.sma.prototype,k=h.defined,m=h.error,p=h.merge,l;(function(a){function l(c){return"plot"+c.charAt(0).toUpperCase()+c.slice(1)}function q(c,b){var d=[];(c.pointArrayMap||[]).forEach(function(c){c!==b&&d.push(l(c))});return d}function n(){var c=this,b=c.linesApiNames,d=c.areaLinesNames,f=c.points,a=c.options,v=c.graph,e={options:{gapSize:a.gapSize}},
t=[],h=q(c,c.pointValKey),r=f.length,u;h.forEach(function(c,b){for(t[b]=[];r--;)u=f[r],t[b].push({x:u.x,plotX:u.plotX,plotY:u[c],isNull:!k(u[c])});r=f.length});if(c.userOptions.fillColor&&d.length){var n=h.indexOf(l(d[0]));n=t[n];d=1===d.length?f:t[h.indexOf(l(d[1]))];h=c.color;c.points=d;c.nextPoints=n;c.color=c.userOptions.fillColor;c.options=p(f,e);c.graph=c.area;c.fillGraph=!0;g.drawGraph.call(c);c.area=c.graph;delete c.nextPoints;delete c.fillGraph;c.color=h}b.forEach(function(b,d){t[d]?(c.points=
t[d],a[b]?c.options=p(a[b].styles,e):m('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),c.graph=c["graph"+b],g.drawGraph.call(c),c["graph"+b]=c.graph):m('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});c.points=f;c.options=a;c.graph=v;g.drawGraph.call(c)}function r(c){var b,d=[];c=c||this.points;if(this.fillGraph&&this.nextPoints){if((b=g.getGraphPath.call(this,
this.nextPoints))&&b.length){b[0][0]="L";d=g.getGraphPath.call(this,c);b=b.slice(0,d.length);for(var f=b.length-1;0<=f;f--)d.push(b[f])}}else d=g.getGraphPath.apply(this,arguments);return d}function e(b){var c=[];(this.pointArrayMap||[]).forEach(function(d){c.push(b[d])});return c}function b(){var b=this,d=this.pointArrayMap,f=[],a;f=q(this);g.translate.apply(this,arguments);this.points.forEach(function(c){d.forEach(function(d,v){a=c[d];b.dataModify&&(a=b.dataModify.modifyValue(a));null!==a&&(c[f[v]]=
b.yAxis.toPixels(a,!0))})})}var d=[],f=["bottomLine"],v=["top","bottom"],t=["top"];a.compose=function(c){if(h.pushUnique(d,c)){var a=c.prototype;a.linesApiNames=a.linesApiNames||f.slice();a.pointArrayMap=a.pointArrayMap||v.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||t.slice();a.drawGraph=n;a.getGraphPath=r;a.toYData=e;a.translate=b}return c}})(l||(l={}));return l});k(a,"Stock/Indicators/Klinger/KlingerIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,h,g){var k=this&&this.__extends||function(){var a=function(e,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(b[d]=a[d])};return a(e,b)};return function(e,b){function d(){this.constructor=e}if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");a(e,b);
e.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}}(),m=h.seriesTypes,p=m.ema,l=m.sma,n=g.correctFloat,x=g.error;m=g.extend;var q=g.isArray,y=g.merge;g=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;b.volumeSeries=void 0;return b}k(e,a);e.prototype.calculateTrend=function(b,a){return b[a][1]+b[a][2]+b[a][3]>b[a-1][1]+b[a-1][2]+b[a-1][3]?1:-1};e.prototype.isValidData=function(b){var a=this.chart,f=this.options,
e=this.linkedParent;b=q(b)&&4===b.length;(a=this.volumeSeries||(this.volumeSeries=a.get(f.params.volumeSeriesID)))||x("Series "+f.params.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);return!(![e,a].every(function(b){return b&&b.xData&&b.xData.length>=f.params.slowAvgPeriod})||!b)};e.prototype.getCM=function(b,a,f,e,g){return n(a+(f===e?b:g))};e.prototype.getDM=function(b,a){return n(b-a)};e.prototype.getVolumeForce=function(b){var a=[],f=1;var e=0;var g=b[0][1]-b[0][2];var c=0;
for(f;f<b.length;f++){var h=this.calculateTrend(b,f);var k=this.getDM(b[f][1],b[f][2]);e=this.getCM(e,k,h,c,g);c=this.volumeSeries.yData[f]*h*Math.abs(2*(k/e-1))*100;a.push([c]);c=h;g=k}return a};e.prototype.getEMA=function(b,a,f,e,g,c,h){return p.prototype.calculateEma(h||[],b,"undefined"===typeof c?1:c,e,a,"undefined"===typeof g?-1:g,f)};e.prototype.getSMA=function(b,a,f){return p.prototype.accumulatePeriodPoints(b,a,f)/b};e.prototype.getValues=function(a,d){var b=[],e=a.xData;a=a.yData;var g=[],
c=[],h=[],k,l=0,m=0,p=void 0,r=void 0,q=null;if(this.isValidData(a[0])){var w=this.getVolumeForce(a),x=this.getSMA(d.fastAvgPeriod,0,w),u=this.getSMA(d.slowAvgPeriod,0,w),y=2/(d.fastAvgPeriod+1),z=2/(d.slowAvgPeriod+1);for(l;l<a.length;l++)l>=d.fastAvgPeriod&&(p=m=this.getEMA(w,p,x,y,0,l,e)[1]),l>=d.slowAvgPeriod&&(r=k=this.getEMA(w,r,u,z,0,l,e)[1],k=n(m-k),h.push(k),h.length>=d.signalPeriod&&(q=h.slice(-d.signalPeriod).reduce(function(a,b){return a+b})/d.signalPeriod),b.push([e[l],k,q]),g.push(e[l]),
c.push([k,q]));return{values:b,xData:g,yData:c}}};e.defaultOptions=y(l.defaultOptions,{params:{fastAvgPeriod:34,slowAvgPeriod:55,signalPeriod:13,volumeSeriesID:"volume"},signalLine:{styles:{lineWidth:1,lineColor:"#ff0000"}},dataGrouping:{approximation:"averages"},tooltip:{pointFormat:'<span style="color: {point.color}">\u25cf</span><b> {series.name}</b><br/><span style="color: {point.color}">Klinger</span>: {point.y}<br/><span style="color: {point.series.options.signalLine.styles.lineColor}">Signal</span>: {point.signal}<br/>'}});
return e}(l);m(g.prototype,{areaLinesNames:[],linesApiNames:["signalLine"],nameBase:"Klinger",nameComponents:["fastAvgPeriod","slowAvgPeriod"],pointArrayMap:["y","signal"],parallelArrays:["x","y","signal"],pointValKey:"y"});a.compose(g);h.registerSeriesType("klinger",g);"";return g});k(a,"masters/indicators/klinger.src.js",[],function(){})});
//# sourceMappingURL=klinger.js.map