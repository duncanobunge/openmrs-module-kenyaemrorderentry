/*
 Highcharts JS v11.1.0 (2023-06-28)

 (c) 2016-2021 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
'use strict';(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/wordcloud",["highcharts"],function(k){c(k);c.Highcharts=k;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function k(c,g,w,e){c.hasOwnProperty(g)||(c[g]=e.apply(null,w),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:c[g]}})))}c=c?c._modules:
{};k(c,"Series/DrawPointUtilities.js",[c["Core/Utilities.js"]],function(c){var g=this&&this.__assign||function(){g=Object.assign||function(c){for(var e,m=1,h=arguments.length;m<h;m++){e=arguments[m];for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(c[f]=e[f])}return c};return g.apply(this,arguments)};return{draw:function(c,e){var m=e.animatableAttribs,h=e.onComplete,f=e.css,q=e.renderer,l=c.series&&c.series.chart.hasRendered?void 0:c.series&&c.series.options.animation,p=c.graphic;e.attribs=
g(g({},e.attribs),{"class":c.getClassName()})||{};if(c.shouldDraw())p||(c.graphic=p="text"===e.shapeType?q.text():q[e.shapeType](e.shapeArgs||{}),p.add(e.group)),f&&p.css(f),p.attr(e.attribs).animate(m,e.isNew?!1:l,h);else if(p){var r=function(){c.graphic=p=p&&p.destroy();"function"===typeof h&&h()};Object.keys(m).length?p.animate(m,void 0,function(){return r()}):r()}}}});k(c,"Series/Wordcloud/WordcloudPoint.js",[c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(c,g){var k=this&&
this.__extends||function(){var c=function(e,h){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(c[f]=e[f])};return c(e,h)};return function(e,h){function f(){this.constructor=e}if("function"!==typeof h&&null!==h)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");c(e,h);e.prototype=null===h?Object.create(h):(f.prototype=h.prototype,new f)}}();g=g.extend;c=
function(c){function e(){var e=null!==c&&c.apply(this,arguments)||this;e.dimensions=void 0;e.options=void 0;e.polygon=void 0;e.rect=void 0;e.series=void 0;return e}k(e,c);e.prototype.isValid=function(){return!0};return e}(c.seriesTypes.column.prototype.pointClass);g(c.prototype,{weight:1});return c});k(c,"Series/Wordcloud/WordcloudUtils.js",[c["Core/Globals.js"],c["Core/Utilities.js"]],function(c,g){function k(a,b){return!(b.left>a.right||b.right<a.left||b.top>a.bottom||b.bottom<a.top)}function e(a,
b){var d=b[0]-a[0];a=b[1]-a[1];return[[-a,d],[a,-d]]}function m(a){var b=a.axes||[];if(!b.length){b=[];var d=d=a.concat([a[0]]);d.reduce(function(a,d){var c=e(a,d)[0];B(b,function(a){return a[0]===c[0]&&a[1]===c[1]})||b.push(c);return d});a.axes=b}return b}function h(a,b){a=a.map(function(a){return a[0]*b[0]+a[1]*b[1]});return{min:Math.min.apply(this,a),max:Math.max.apply(this,a)}}function f(a,b){var d=m(a),c=m(b);d=d.concat(c);return!B(d,function(d){var c=h(a,d);d=h(b,d);return!!(d.min>c.max||d.max<
c.min)})}function q(a,b){var d=!1,c=a.rect,e=a.polygon,x=a.lastCollidedWith,g=function(b){var d=k(c,b.rect);d&&(a.rotation%90||b.rotation%90)&&(d=f(e,b.polygon));return d};x&&((d=g(x))||delete a.lastCollidedWith);d||(d=!!B(b,function(b){var d=g(b);d&&(a.lastCollidedWith=b);return d}));return d}function l(a,b){b=4*a;var d=Math.ceil((Math.sqrt(b)-1)/2),c=2*d+1,e=Math.pow(c,2),f=!1;--c;1E4>=a&&("boolean"===typeof f&&b>=e-c&&(f={x:d-(e-b),y:-d}),e-=c,"boolean"===typeof f&&b>=e-c&&(f={x:-d,y:-d+(e-b)}),
e-=c,"boolean"===typeof f&&(f=b>=e-c?{x:-d+(e-b),y:d}:{x:d,y:d-(e-b-c)}),f.x*=5,f.y*=5);return f}function p(a,b){var d=b.width/2,c=-(b.height/2),e=b.height/2;return!(-(b.width/2)<a.left&&d>a.right&&c<a.top&&e>a.bottom)}function r(a,b,d){return d.map(function(d){return[d[0]+a,d[1]+b]})}function y(a,b){b=n(b)?b:14;b=Math.pow(10,b);return Math.round(a*b)/b}function v(a,b){var d=a[0];a=a[1];var c=z*-b;b=Math.cos(c);c=Math.sin(c);return[y(d*b-a*c),y(d*c+a*b)]}function C(a,b,d){a=v([a[0]-b[0],a[1]-b[1]],
d);return[a[0]+b[0],a[1]+b[1]]}var z=c.deg2rad,E=g.extend,B=g.find,n=g.isNumber,D=g.isObject,A=g.merge;return{archimedeanSpiral:function(a,b){var d=b.field;b=!1;d=d.width*d.width+d.height*d.height;var c=.8*a;1E4>=a&&(b={x:c*Math.cos(c),y:c*Math.sin(c)},Math.min(Math.abs(b.x),Math.abs(b.y))<d||(b=!1));return b},extendPlayingField:function(a,b){if(D(a)&&D(b)){var d=b.bottom-b.top;var c=b.right-b.left;b=a.ratioX;var e=a.ratioY;d=c*b>d*e?c:d;a=A(a,{width:a.width+d*b*2,height:a.height+d*e*2})}return a},
getBoundingBoxFromPolygon:function(a){return a.reduce(function(a,d){var b=d[0];d=d[1];a.left=Math.min(b,a.left);a.right=Math.max(b,a.right);a.bottom=Math.max(d,a.bottom);a.top=Math.min(d,a.top);return a},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPlayingField:function(a,b,d){d=d.reduce(function(a,b){b=b.dimensions;var d=Math.max(b.width,b.height);a.maxHeight=Math.max(a.maxHeight,b.height);a.maxWidth=Math.max(a.maxWidth,b.width);a.area+=d*d;return a},
{maxHeight:0,maxWidth:0,area:0});d=Math.max(d.maxHeight,d.maxWidth,.85*Math.sqrt(d.area));var c=a>b?a/b:1;a=b>a?b/a:1;return{width:d*c,height:d*a,ratioX:c,ratioY:a}},getPolygon:function(a,b,d,c,e){var f=[a,b],g=a-d/2;a+=d/2;d=b-c/2;b+=c/2;return[[g,d],[a,d],[a,b],[g,b]].map(function(a){return C(a,f,-e)})},getRandomPosition:function(a){return Math.round(a*(Math.random()+.5)/2)},getRotation:function(a,b,d,c){var e=!1;n(a)&&n(b)&&n(d)&&n(c)&&0<a&&-1<b&&c>d&&(e=d+b%a*((c-d)/(a-1||1)));return e},getScale:function(a,
b,c){var d=2*Math.max(Math.abs(c.top),Math.abs(c.bottom));c=2*Math.max(Math.abs(c.left),Math.abs(c.right));return Math.min(0<c?1/c*a:1,0<d?1/d*b:1)},getSpiral:function(a,b){var c,e=[];for(c=1;1E4>c;c++)e.push(a(c,b));return function(a){return 1E4>=a?e[a-1]:!1}},intersectionTesting:function(a,b){var c=b.placed,e=b.field,f=b.rectangle,g=b.polygon,h=b.spiral,m=1,k={x:0,y:0},n=a.rect=E({},f);a.polygon=g;for(a.rotation=b.rotation;!1!==k&&(q(a,c)||p(n,e));)k=h(m),D(k)&&(n.left=f.left+k.x,n.right=f.right+
k.x,n.top=f.top+k.y,n.bottom=f.bottom+k.y,a.polygon=r(k.x,k.y,g)),m++;return k},isPolygonsColliding:f,isRectanglesIntersecting:k,rectangularSpiral:function(a,b){a=l(a,b);b=b.field;a&&(a.x*=b.ratioX,a.y*=b.ratioY);return a},rotate2DToOrigin:v,rotate2DToPoint:C,squareSpiral:l,updateFieldBoundaries:function(a,b){if(!n(a.left)||a.left>b.left)a.left=b.left;if(!n(a.right)||a.right<b.right)a.right=b.right;if(!n(a.top)||a.top>b.top)a.top=b.top;if(!n(a.bottom)||a.bottom<b.bottom)a.bottom=b.bottom;return a}}});
k(c,"Series/Wordcloud/WordcloudSeries.js",[c["Series/DrawPointUtilities.js"],c["Core/Globals.js"],c["Core/Series/Series.js"],c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"],c["Series/Wordcloud/WordcloudPoint.js"],c["Series/Wordcloud/WordcloudUtils.js"]],function(c,g,k,e,m,h,f){var q=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,
c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),l=g.noop,p=e.seriesTypes.column,r=m.extend,y=m.isArray,v=m.isNumber,C=m.isObject,z=m.merge;m=f.archimedeanSpiral;var E=f.extendPlayingField,B=f.getBoundingBoxFromPolygon,n=f.getPlayingField,D=f.getPolygon,A=f.getRandomPosition,
a=f.getRotation,b=f.getScale,d=f.getSpiral,G=f.intersectionTesting,w=f.isPolygonsColliding,x=f.rectangularSpiral,I=f.rotate2DToOrigin,J=f.rotate2DToPoint,K=f.squareSpiral,L=f.updateFieldBoundaries;f=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}q(e,a);e.prototype.bindAxes=function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]};k.prototype.bindAxes.call(this);
r(this.yAxis.options,a);r(this.xAxis.options,a)};e.prototype.pointAttribs=function(a,b){a=g.seriesTypes.column.prototype.pointAttribs.call(this,a,b);delete a.stroke;delete a["stroke-width"];return a};e.prototype.deriveFontSize=function(a,b,c){a=v(a)?a:0;b=v(b)?b:1;c=v(c)?c:1;return Math.floor(Math.max(c,a*b))};e.prototype.drawPoints=function(){var a=this,e=a.hasRendered,f=a.xAxis,g=a.yAxis,k=a.group,h=a.options,m=h.animation,p=h.allowExtendPlayingField,H=a.chart.renderer,l=H.text().add(k),q=[],x=
a.placementStrategy[h.placementStrategy],y=h.rotation,A=a.points.map(function(a){return a.weight}),w=Math.max.apply(null,A),F=a.points.concat().sort(function(a,b){return b.weight-a.weight});a.group.attr({scaleX:1,scaleY:1});F.forEach(function(b){var c=a.deriveFontSize(1/w*b.weight,h.maxFontSize,h.minFontSize);c=r({fontSize:c+"px"},h.style);l.css(c).attr({x:0,y:0,text:b.name});c=l.getBBox(!0);b.dimensions={height:c.height,width:c.width}});var u=n(f.len,g.len,F);var z=d(a.spirals[h.spiral],{field:u});
F.forEach(function(b){var d=a.deriveFontSize(1/w*b.weight,h.maxFontSize,h.minFontSize);d=r({fontSize:d+"px"},h.style);var f=x(b,{data:F,field:u,placed:q,rotation:y}),g=r(a.pointAttribs(b,b.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:f.x,y:f.y,text:b.name,rotation:v(f.rotation)?f.rotation:void 0}),n=D(f.x,f.y,b.dimensions.width,b.dimensions.height,f.rotation),l=B(n),t=G(b,{rectangle:l,polygon:n,field:u,placed:q,spiral:z,rotation:f.rotation});!t&&
p&&(u=E(u,l),t=G(b,{rectangle:l,polygon:n,field:u,placed:q,spiral:z,rotation:f.rotation}));C(t)?(g.x=(g.x||0)+t.x,g.y=(g.y||0)+t.y,l.left+=t.x,l.right+=t.x,l.top+=t.y,l.bottom+=t.y,u=L(u,l),q.push(b),b.isNull=!1,b.isInside=!0):b.isNull=!0;if(m){var M={x:g.x,y:g.y};e?(delete g.x,delete g.y):(g.x=0,g.y=0)}c.draw(b,{animatableAttribs:M,attribs:g,css:d,group:k,renderer:H,shapeArgs:void 0,shapeType:"text"})});l=l.destroy();f=b(f.len,g.len,u);a.group.attr({scaleX:f,scaleY:f})};e.prototype.hasData=function(){return C(this)&&
!0===this.visible&&y(this.points)&&0<this.points.length};e.prototype.getPlotBox=function(){var a=this.chart,b=a.inverted,c=this[b?"yAxis":"xAxis"];b=this[b?"xAxis":"yAxis"];return{translateX:(c?c.left:a.plotLeft)+(c?c.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}};e.defaultOptions=z(p.defaultOptions,{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,cropThreshold:Infinity,minFontSize:1,maxFontSize:25,placementStrategy:"center",
rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}});return e}(p);r(f.prototype,{animate:l,animateDrilldown:l,animateDrillupFrom:l,pointClass:h,setClip:l,placementStrategy:{random:function(b,c){var d=c.field;c=c.rotation;return{x:A(d.width)-d.width/2,y:A(d.height)-d.height/2,
rotation:a(c.orientations,b.index,c.from,c.to)}},center:function(b,c){c=c.rotation;return{x:0,y:0,rotation:a(c.orientations,b.index,c.from,c.to)}}},pointArrayMap:["weight"],spirals:{archimedean:m,rectangular:x,square:K},utils:{extendPlayingField:E,getRotation:a,isPolygonsColliding:w,rotate2DToOrigin:I,rotate2DToPoint:J}});e.registerSeriesType("wordcloud",f);"";return f});k(c,"masters/modules/wordcloud.src.js",[],function(){})});
//# sourceMappingURL=wordcloud.js.map