(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{315:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o}));n(321);var r=Object.freeze({YEARS_TILL_DISINTEGRATION:450,STOP_AT_PERCENTAGE:100,MOBILE_WIDTH:834,MOVIE_MODE:!0,MOVIE_DURATION:60,VIMEO_ID:"607838921",VIDEO_FILENAME:"shatter.75.01-1080p.mp4",YEAR_THIS_WEBSITE_CREATED:2021}),c=[{percentDisintegrated:0,speed:.045},{percentDisintegrated:3,speed:.085},{percentDisintegrated:10,speed:.15},{percentDisintegrated:20,speed:.2},{percentDisintegrated:80,speed:.25},{percentDisintegrated:110,speed:.25}],o=Object.freeze({UP:"UP",DOWN:"DOWN"});t.c=r},318:function(e,t,n){"use strict";var r=n(17),c=n(8),o=n(82),f=n(21),d=n(13),l=n(59),v=n(139),I=n(80),E=n(7),N=n(60),h=n(81).f,m=n(35).f,O=n(19).f,_=n(319).trim,x="Number",T=c.Number,w=T.prototype,A=l(N(w))==x,y=function(e){var t,n,r,c,o,f,d,code,l=I(e,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=_(l)).charCodeAt(0))||45===t){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+l}for(f=(o=l.slice(2)).length,d=0;d<f;d++)if((code=o.charCodeAt(d))<48||code>c)return NaN;return parseInt(o,r)}return+l};if(o(x,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var D,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(A?E((function(){w.valueOf.call(n)})):l(n)!=x)?v(new T(y(t)),n,S):y(t)},V=r?h(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;V.length>j;j++)d(T,D=V[j])&&!d(S,D)&&O(S,D,m(T,D));S.prototype=w,w.constructor=S,f(c,x,S)}},319:function(e,t,n){var r=n(30),c="["+n(320)+"]",o=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),d=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(f,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},320:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},321:function(e,t,n){var r=n(1),c=n(203),o=n(7),f=n(12),d=n(83).onFreeze,l=Object.freeze;r({target:"Object",stat:!0,forced:o((function(){l(1)})),sham:!c},{freeze:function(e){return l&&f(e)?l(d(e)):e}})},333:function(e,t,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("d00e6b28",content,!0,{sourceMap:!1})},350:function(e,t,n){"use strict";n(333)},351:function(e,t,n){var r=n(44)(!1);r.push([e.i,".row-fixed[data-v-7c970276]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-7c970276],.row-fixed.text-container h2[data-v-7c970276],.row-fixed.text-container p[data-v-7c970276]{text-align:center;text-transform:uppercase}.caps[data-v-7c970276]{text-transform:uppercase}.center[data-v-7c970276]{text-align:center}.row-fixed.video-container[data-v-7c970276]{top:25vh;opacity:1;height:50vh}.row-fixed.video-container .col[data-v-7c970276]{margin:0;padding:0;width:100%}",""]),e.exports=r},357:function(e,t,n){"use strict";n.r(t);n(318),n(61);var r=n(57),c=n(140),o=n(315),f=Object(r.b)({name:"VimeoEmbed",components:{vueVimeoPlayer:c.a},props:{videoId:{type:String,default:"0"},currentVideoTime:{type:Number,default:0}},setup:function(e,t){var n=Object(r.f)(),c=Object(r.f)(),f=Object(r.f)(!1);function d(){f.value=!0,window.clearTimeout(c.value),c.value=setTimeout((function(){f.value=!1}),66)}return Object(r.d)((function(){document.addEventListener("scroll",d)})),Object(r.i)((function(){return e.currentVideoTime}),(function(e,t){n.value.setCurrentTime(e),n.value.play(),setTimeout((function(){n.value.pause()}),1e3)})),Object(r.i)((function(){return f}),(function(e,t){!1===e.value&&n.value.pause()})),{player:n,isScrolling:f,APP:o.a}}}),d=(n(350),n(58)),component=Object(d.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("client-only",[t("vueVimeoPlayer",{ref:"player",attrs:{"video-id":"APP.VIMEO_ID",options:{muted:1,background:0},autoplay:!1,controls:!1,loop:!0}})],1)}),[],!1,null,"7c970276",null);t.default=component.exports}}]);