(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(e,t,r){"use strict";var n=r(17),o=r(8),c=r(82),f=r(21),l=r(13),d=r(59),v=r(139),h=r(80),m=r(7),N=r(60),I=r(81).f,E=r(35).f,_=r(19).f,w=r(315).trim,A="Number",y=o.Number,x=y.prototype,S=d(N(x))==A,T=function(e){var t,r,n,o,c,f,l,code,d=h(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=w(d)).charCodeAt(0))||45===t){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=d.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(A,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var j,O=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof O&&(S?m((function(){x.valueOf.call(r)})):d(r)!=A)?v(new y(T(t)),r,O):T(t)},V=n?I(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;V.length>F;F++)l(y,j=V[F])&&!l(O,j)&&_(O,j,E(y,j));O.prototype=x,x.constructor=O,f(o,A,O)}},315:function(e,t,r){var n=r(30),o="["+r(316)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(f,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},316:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},326:function(e,t,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("33d5f5f4",content,!0,{sourceMap:!1})},340:function(e,t,r){"use strict";r(326)},341:function(e,t,r){var n=r(49)(!1);n.push([e.i,"video[data-v-5fd262d0]{width:100%;height:100vh;-o-object-fit:cover;object-fit:cover;opacity:.75}",""]),e.exports=n},354:function(e,t,r){"use strict";r.r(t);r(313);var n=r(58),o=Object(n.b)({name:"HtmlVideoEmbed",components:{},props:{filename:{type:String,default:""},currentVideoTime:{type:Number,default:0}},setup:function(e,t){var r=Object(n.f)();return Object(n.i)((function(){return e.currentVideoTime}),(function(e,t){r.value.currentTime=e})),{player:r}}}),c=(r(340),r(57)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("video",{ref:"player",attrs:{muted:"",poster:"/img/placeholder/bottle.placeholder.jpg",preload:"metadata","aria-label":"Silhouetted used plastic water bottle that explodes into a hundred or so shards"},domProps:{muted:!0}},[r("source",{staticClass:"bg-video",attrs:{src:"/video/"+e.filename,type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")])}),[],!1,null,"5fd262d0",null);t.default=component.exports}}]);