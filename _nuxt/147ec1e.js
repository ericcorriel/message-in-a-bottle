(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14],{313:function(e,t,n){"use strict";var r=n(17),o=n(8),c=n(82),f=n(21),l=n(13),d=n(59),v=n(139),h=n(80),x=n(7),m=n(60),I=n(81).f,N=n(35).f,w=n(19).f,y=n(318).trim,E="Number",_=o.Number,A=_.prototype,S=d(m(A))==E,T=function(e){var t,n,r,o,c,f,l,code,d=h(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=y(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(f=(c=d.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(E,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var j,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(S?x((function(){A.valueOf.call(n)})):d(n)!=E)?v(new _(T(t)),n,O):T(t)},V=r?I(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;V.length>F;F++)l(_,j=V[F])&&!l(O,j)&&w(O,j,N(_,j));O.prototype=A,A.constructor=O,f(o,E,O)}},318:function(e,t,n){var r=n(30),o="["+n(319)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(f,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},319:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},324:function(e,t,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("7240f500",content,!0,{sourceMap:!1})},336:function(e,t,n){"use strict";n(324)},337:function(e,t,n){var r=n(49)(!1);r.push([e.i,".row-fixed[data-v-7080512d]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-7080512d],.row-fixed.text-container h2[data-v-7080512d],.row-fixed.text-container p[data-v-7080512d]{text-align:center;text-transform:uppercase}.row-fixed.video-container[data-v-7080512d]{top:25vh;opacity:1;height:50vh}.row-fixed.video-container .col[data-v-7080512d]{margin:0;padding:0;width:100%}",""]),e.exports=r},342:function(e,t,n){"use strict";n.r(t);n(313),n(61);var r=n(58),o=n(140),c=Object(r.b)({name:"VimeoEmbed",components:{vueVimeoPlayer:o.a},props:{videoId:{type:String,default:"0"},currentVideoTime:{type:Number,default:0},isScrolling:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(r.g)();return Object(r.e)((function(){})),Object(r.j)((function(){return e.currentVideoTime}),(function(e,t){n.value.setCurrentTime(e),n.value.play(),setTimeout((function(){n.value.pause()}),1e3)})),Object(r.j)((function(){return e.isScrolling}),(function(e,t){!1===e&&n.value.pause()})),{player:n}}}),f=(n(336),n(57)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("vueVimeoPlayer",{ref:"player",attrs:{"video-id":e.videoId,options:{muted:1,background:0},autoplay:!1,controls:!1,loop:!0}})],1)}),[],!1,null,"7080512d",null);t.default=component.exports}}]);