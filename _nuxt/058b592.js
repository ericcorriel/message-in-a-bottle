(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7,13,14],{313:function(t,e,d){"use strict";d.d(e,"a",(function(){return o})),d.d(e,"d",(function(){return r})),d.d(e,"b",(function(){return n}));d(319);var o=Object.freeze({YEARS_TILL_DISINTEGRATION:450,STOP_AT_PERCENTAGE:100,MOBILE_WIDTH:834,MOVIE_MODE:!1,MOVIE_DURATION:60,VIMEO_ID:"607838921",VIDEO_FILENAME:"shatter.75.01-1080p.mp4"}),r=[{percentDisintegrated:0,speed:.035},{percentDisintegrated:3,speed:.075},{percentDisintegrated:10,speed:.15},{percentDisintegrated:20,speed:.2},{percentDisintegrated:80,speed:.25},{percentDisintegrated:110,speed:.25}],n=Object.freeze({UP:"UP",DOWN:"DOWN"});e.c=o},314:function(t,e,d){"use strict";var o=d(17),r=d(8),n=d(82),l=d(21),m=d(13),f=d(59),v=d(139),c=d(80),x=d(7),h=d(60),w=d(81).f,y=d(35).f,I=d(19).f,S=d(317).trim,k="Number",E=r.Number,N=E.prototype,O=f(h(N))==k,T=function(t){var e,d,o,r,n,l,m,code,f=c(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=S(f)).charCodeAt(0))||45===e){if(88===(d=f.charCodeAt(2))||120===d)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(n=f.slice(2)).length,m=0;m<l;m++)if((code=n.charCodeAt(m))<48||code>r)return NaN;return parseInt(n,o)}return+f};if(n(k,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,j=function(t){var e=arguments.length<1?0:t,d=this;return d instanceof j&&(O?x((function(){N.valueOf.call(d)})):f(d)!=k)?v(new E(T(e)),d,j):T(e)},P=o?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;P.length>_;_++)m(E,A=P[_])&&!m(j,A)&&I(j,A,y(E,A));j.prototype=N,N.constructor=j,l(r,k,j)}},315:function(t,e,d){"use strict";var o=d(58),r=d(313),n=Object(o.e)({scrollValuesFrozen:!1,yearZero:2021,yearAtCurrentScroll:0,yearZeroScrollTop:0,yearEnd:0,previousScrollPosition:0,currentScrollPosition:0,debug:!1,scrollDirection:r.b.DOWN,yearDelta:0,atYearZero:Object(o.a)((function(){return n.yearZero===n.yearAtCurrentScroll})),amountLeftToScroll:Object(o.a)({get:function(){return n.currentScrollPosition-n.yearZeroScrollTop},set:function(){}}),scrollAmountToEndIsLessThanYearDelta:Object(o.a)({get:function(){return n.yearAtCurrentScroll>n.yearZero&&n.scrollDirection===r.b.DOWN&&n.yearEnd-n.yearDelta-n.yearAtCurrentScroll<n.yearDelta},set:function(){}}),isInNormalScrollingRange:Object(o.a)({get:function(){return n.yearAtCurrentScroll<=n.yearEnd&&n.yearAtCurrentScroll-n.yearZero>=0},set:function(){}})});var l={state:n,set:function(t,e){try{n[t]=e}catch(t){console.log("ScrollInterface.set: type error")}},get:function(t){return n[t]}};e.a=l},316:function(t,e,d){"use strict";d.d(e,"b",(function(){return l})),d.d(e,"a",(function(){return r})),d.d(e,"c",(function(){return n}));var o=d(58),r=Object(o.f)(0),n=Object(o.f)(0);function l(t){t.shiftKey&&9===t.keyCode&&r.value<n.value?(r.value>0&&r.value--,t.preventDefault()):9===t.keyCode&&r.value<n.value&&(r.value++,t.preventDefault())}},317:function(t,e,d){var o=d(30),r="["+d(318)+"]",n=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),m=function(t){return function(e){var d=String(o(e));return 1&t&&(d=d.replace(n,"")),2&t&&(d=d.replace(l,"")),d}};t.exports={start:m(1),end:m(2),trim:m(3)}},318:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},319:function(t,e,d){var o=d(1),r=d(203),n=d(7),l=d(12),m=d(83).onFreeze,f=Object.freeze;o({target:"Object",stat:!0,forced:n((function(){f(1)})),sham:!r},{freeze:function(t){return f&&l(t)?f(m(t)):t}})},320:function(t,e,d){"use strict";d(325),d(314);var o=d(58),r=d(315),n=d(313),l=Object(o.e)({year:0,videoTime:Object(o.a)((function(){return parseFloat((60*m.get("percentDisintegrated")/100).toFixed(1))})),percentDisintegrated:Object(o.a)((function(){return(Number(m.get("year"))-Number(r.a.get("yearZero")))/n.a.YEARS_TILL_DISINTEGRATION*100}))});var m={set:function(t,e){l[t]=e},get:function(t){return l[t]},state:l};e.a=m},325:function(t,e,d){"use strict";var o=d(1),r=d(61),n=d(330),l=d(204),m=d(7),f=1..toFixed,v=Math.floor,c=function(t,e,d){return 0===e?d:e%2==1?c(t,e-1,d*t):c(t*t,e/2,d)},x=function(data,t,e){for(var d=-1,o=e;++d<6;)o+=t*data[d],data[d]=o%1e7,o=v(o/1e7)},h=function(data,t){for(var e=6,d=0;--e>=0;)d+=data[e],data[e]=v(d/t),d=d%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!m((function(){f.call({})}))},{toFixed:function(t){var e,d,o,m,f=n(this),v=r(t),data=[0,0,0,0,0,0],y="",I="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(y="-",f=-f),f>1e-21)if(d=(e=function(t){for(var e=0,d=t;d>=4096;)e+=12,d/=4096;for(;d>=2;)e+=1,d/=2;return e}(f*c(2,69,1))-69)<0?f*c(2,-e,1):f/c(2,e,1),d*=4503599627370496,(e=52-e)>0){for(x(data,0,d),o=v;o>=7;)x(data,1e7,0),o-=7;for(x(data,c(10,o,1),0),o=e-1;o>=23;)h(data,1<<23),o-=23;h(data,1<<o),x(data,1,1),h(data,2),I=w(data)}else x(data,0,d),x(data,1<<-e,0),I=w(data)+l.call("0",v);return I=v>0?y+((m=I.length)<=v?"0."+l.call("0",v-m)+I:I.slice(0,m-v)+"."+I.slice(m-v)):y+I}})},328:function(t,e,d){"use strict";d.d(e,"a",(function(){return r})),d.d(e,"b",(function(){return n}));var o=d(316),r=[{year:2021,comment:"~~~Scroll Down~~~",commentSm:"~~~Scroll Down~~~",tabIndex:0},{year:2022,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>14</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>14</span>📱<br />released",tabIndex:0},{year:2023,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>15</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>15</span>📱<br />released",tabIndex:0},{year:2024,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>16</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>16</span>📱<br />released",tabIndex:0},{year:2025,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>17</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>17</span>📱<br />released",tabIndex:0},{year:2026,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>18</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>18</span>📱<br />released",tabIndex:0},{year:2027,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>19</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>19</span>📱<br />released",tabIndex:0},{year:2028,comment:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>20</span> released📱",commentSm:"📱️iPhone <span style='font-family: \"monspaceNumbers\"'>20</span>📱<br />released",tabIndex:0},{year:2029,comment:"You download your first<br />🌬Air Quality Index app🌬",commentSm:"You download<br />your first <br />🌬Air Quality app🌬",tabIndex:0},{year:2035,comment:"Your phone alerts you to<br />⚠️Ration Water⚠️",commentSm:"Your phone<br />alerts you to<br />⚠️Ration Water⚠️",tabIndex:0},{year:2042,comment:"🔫Water Wars🔫<br />start sprouting up",commentSm:"🔫Water Wars🔫<br />start sprouting up",tabIndex:0},{year:2050,comment:"You vote for the candidate who<br />💧promises cheap water💧",commentSm:"You vote for<br />the candidate who<br />💧promises cheap water💧",tabIndex:0},{year:2069,comment:"Californian farmers<br />🚜move to Alaska🚜",commentSm:"Californian<br />farmers move<br />🚜to Alaska🚜",tabIndex:0},{year:2098,comment:"🪦You’re dead🪦",commentSm:"🪦You’re dead🪦",tabIndex:0},{year:2123,comment:"“The Great Migration” displaces<br />🚧40% of the population🚧",commentSm:"“The Great Migration”<br />🚧displaces 40%🚧<br />of the population",tabIndex:0},{year:2150,comment:"Ocean has more plastic than 🐟fish🐟",commentSm:"Ocean has more<br />plastic than<br />🐟fish🐟",tabIndex:0},{year:2160,comment:"🪦Your kids are dead🪦",commentSm:"Your kids<br />🪦are dead🪦",tabIndex:0},{year:2186,comment:"🔥“Fire moat”🔥<br />voted phrase of the century",commentSm:"🔥“Fire moat”🔥<br />voted phrase<br />of the century",tabIndex:0},{year:2214,comment:"Last polar bear dies and<br />😕humanity can’t believe itself😕",commentSm:"Last polar bear dies<br />and humanity<br />😕can’t believe itself😕",tabIndex:0},{year:2237,comment:"🪦Grandkids ➡ Dead🪦",commentSm:"Grandkids ➡<br />🪦Dead🪦",tabIndex:0},{year:2260,comment:"☠️Water War III☠️",commentSm:"☠️Water War☠️<br />III",tabIndex:0},{year:2284,comment:"🚀Top 1% move to Mars🚀<br />to escape climate change on Earth",commentSm:"Top 1%<br />🚀move to Mars🚀<br />to escape climate<br />change on Earth",tabIndex:0},{year:2307,comment:"🌊Sea levels ⤴️ 40 feet🌊",commentSm:"🌊Sea levels🌊<br />⤴️ 40 feet",tabIndex:0},{year:2330,comment:"🦈Sharks swim through downtown Miami🦈",commentSm:"🦈Sharks swim🦈<br />through downtown<br />Miami",tabIndex:0},{year:2354,comment:"🇧🇩Bangladesh🇧🇩 is a body of water",commentSm:"🇧🇩Bangladesh🇧🇩<br />is a<br />body of water",tabIndex:0},{year:2378,comment:"🧊Last glacier melts into the sea🧊",commentSm:"🧊Last glacier🧊<br />melts into the sea",tabIndex:0},{year:2399,comment:"A child asks<br />🤔“What was wildlife?”🤔",commentSm:"A child asks<br />“What was<br />🤔wildlife?”🤔",tabIndex:0},{year:2421,comment:"🌪Hurricane Omega obliterates 🌪<br />Florida, Louisiana, Georgia,<br />South Carolina, North Carolina",commentSm:"🌪Hurricane Omega 🌪<br />obliterates Florida<br />Louisiana, Georgia,<br />South Carolina,<br />North Carolina",tabIndex:0},{year:2453,comment:"Planet plagued by super-storms.<br />👋Last human leaves Earth👋",commentSm:"Planet plagued<br />by super-storms.<br />Last human<br />👋leaves Earth👋",tabIndex:0},{year:2471,comment:"Planet plagued by super-storms.<br />👋Last human leaves Earth👋",commentSm:"Planet plagued<br />by super-storms.<br />Last human<br />👋leaves Earth👋",tabIndex:0}];function n(){var t=0;r.forEach((function(e){e.tabIndex=t,t++})),o.c.value=t-1}},330:function(t,e,d){var o=d(59);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},331:function(t,e,d){var content=d(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("d00e6b28",content,!0,{sourceMap:!1})},332:function(t,e,d){var content=d(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("108846a4",content,!0,{sourceMap:!1})},344:function(t,e,d){"use strict";d.d(e,"a",(function(){return n}));var o=d(315),r=d(313);function n(t){return(t-o.a.state.yearZero)/r.a.YEARS_TILL_DISINTEGRATION*100}},345:function(t,e,d){"use strict";d(331)},346:function(t,e,d){var o=d(49)(!1);o.push([t.i,".row-fixed[data-v-7c970276]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-7c970276],.row-fixed.text-container h2[data-v-7c970276],.row-fixed.text-container p[data-v-7c970276]{text-align:center;text-transform:uppercase}.row-fixed.video-container[data-v-7c970276]{top:25vh;opacity:1;height:50vh}.row-fixed.video-container .col[data-v-7c970276]{margin:0;padding:0;width:100%}",""]),t.exports=o},347:function(t,e,d){"use strict";d(332)},348:function(t,e,d){var o=d(49)(!1);o.push([t.i,"video[data-v-3d9e523b]{width:100%;height:100vh;-o-object-fit:cover;object-fit:cover;opacity:1}",""]),t.exports=o},351:function(t,e,d){"use strict";d.r(e);d(314),d(62);var o=d(58),r=d(140),n=d(313),l=Object(o.b)({name:"VimeoEmbed",components:{vueVimeoPlayer:r.a},props:{videoId:{type:String,default:"0"},currentVideoTime:{type:Number,default:0}},setup:function(t,e){var d=Object(o.f)(),r=Object(o.f)(),l=Object(o.f)(!1);function m(){l.value=!0,window.clearTimeout(r.value),r.value=setTimeout((function(){l.value=!1}),66)}return Object(o.d)((function(){document.addEventListener("scroll",m)})),Object(o.i)((function(){return t.currentVideoTime}),(function(t,e){d.value.setCurrentTime(t),d.value.play(),setTimeout((function(){d.value.pause()}),1e3)})),Object(o.i)((function(){return l}),(function(t,e){!1===t.value&&d.value.pause()})),{player:d,isScrolling:l,APP:n.a}}}),m=(d(345),d(57)),component=Object(m.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("vueVimeoPlayer",{ref:"player",attrs:{"video-id":"APP.VIMEO_ID",options:{muted:1,background:0},autoplay:!1,controls:!1,loop:!0}})],1)}),[],!1,null,"7c970276",null);e.default=component.exports},356:function(t,e,d){var content=d(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("76eddcac",content,!0,{sourceMap:!1})},360:function(t,e,d){"use strict";d.r(e);d(41);var o=d(58),r=d(351),n=d(362),l=d(316);d(325);var m=d(328),f=d(344),v=d(320),c=Object(o.b)({name:"VideoContainer",components:{VimeoEmbed:r.default,HTMLVideoEmbed:n.default},props:{useVimeo:{type:Boolean,default:!1}},setup:function(){var t=Object(o.f)(v.a.get("videoTime"));return Object(o.i)((function(){return v.a.state}),(function(e){t.value=e.videoTime}),{deep:!0}),Object(o.i)((function(){return l.a.value}),(function(e){var d,o=m.a.filter((function(t){return t.tabIndex===e}));if(null!==(d=o[0])&&void 0!==d&&d.year){var r=o[0].year,n=Object(f.a)(r);t.value=function(t){return parseFloat((60*t/100).toFixed(1))}(n)}})),{mutableCurrentVideoTime:t}}}),x=(d(370),d(57)),component=Object(x.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"row-fixed video-container"},[d("div",{staticClass:"col"},[t.useVimeo?d("VimeoEmbed",{attrs:{"current-video-time":t.mutableCurrentVideoTime,"is-scrolling":t.isScrolling}}):d("HTMLVideoEmbed",{attrs:{"current-video-time":t.mutableCurrentVideoTime}})],1)])}),[],!1,null,"a25ad398",null);e.default=component.exports;installComponents(component,{VimeoEmbed:d(351).default})},362:function(t,e,d){"use strict";d.r(e);d(314);var o=d(58),r=d(313),n=Object(o.b)({name:"HtmlVideoEmbed",components:{},props:{currentVideoTime:{type:Number,default:0}},setup:function(t){var e=Object(o.f)();return Object(o.i)((function(){return t.currentVideoTime}),(function(t){e.value.currentTime=t})),{player:e,APP:r.c}}}),l=(d(347),d(57)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("video",{ref:"player",attrs:{muted:"",poster:"/img/placeholder/message-in-a-bottle-placeholder.jpg",preload:"metadata","aria-label":"Silhouetted used plastic water bottle that explodes into a hundred or so shards"},domProps:{muted:!0}},[d("source",{staticClass:"bg-video",attrs:{src:"/video/"+t.APP.VIDEO_FILENAME,type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")])}),[],!1,null,"3d9e523b",null);e.default=component.exports},370:function(t,e,d){"use strict";d(356)},371:function(t,e,d){var o=d(49)(!1);o.push([t.i,"*[data-v-a25ad398],[data-v-a25ad398]:after,[data-v-a25ad398]:before{box-sizing:border-box}@media(prefers-reduced-motion:no-preference){[data-v-a25ad398]:root{scroll-behavior:smooth}}body[data-v-a25ad398]{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr[data-v-a25ad398]{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr[data-v-a25ad398]:not([size]){height:1px}h1[data-v-a25ad398],h2[data-v-a25ad398],h3[data-v-a25ad398],h4[data-v-a25ad398],h5[data-v-a25ad398],h6[data-v-a25ad398]{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1[data-v-a25ad398]{font-size:calc(1.375rem + 1.5vw)}@media(min-width:1200px){h1[data-v-a25ad398]{font-size:2.5rem}}h2[data-v-a25ad398]{font-size:calc(1.325rem + .9vw)}@media(min-width:1200px){h2[data-v-a25ad398]{font-size:2rem}}h3[data-v-a25ad398]{font-size:calc(1.3rem + .6vw)}@media(min-width:1200px){h3[data-v-a25ad398]{font-size:1.75rem}}h4[data-v-a25ad398]{font-size:calc(1.275rem + .3vw)}@media(min-width:1200px){h4[data-v-a25ad398]{font-size:1.5rem}}h5[data-v-a25ad398]{font-size:1.25rem}h6[data-v-a25ad398]{font-size:1rem}p[data-v-a25ad398]{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title][data-v-a25ad398],abbr[title][data-v-a25ad398]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address[data-v-a25ad398]{margin-bottom:1rem;font-style:normal;line-height:inherit}ol[data-v-a25ad398],ul[data-v-a25ad398]{padding-left:2rem}dl[data-v-a25ad398],ol[data-v-a25ad398],ul[data-v-a25ad398]{margin-top:0;margin-bottom:1rem}ol ol[data-v-a25ad398],ol ul[data-v-a25ad398],ul ol[data-v-a25ad398],ul ul[data-v-a25ad398]{margin-bottom:0}dt[data-v-a25ad398]{font-weight:700}dd[data-v-a25ad398]{margin-bottom:.5rem;margin-left:0}blockquote[data-v-a25ad398]{margin:0 0 1rem}b[data-v-a25ad398],strong[data-v-a25ad398]{font-weight:bolder}small[data-v-a25ad398]{font-size:.875em}mark[data-v-a25ad398]{padding:.2em;background-color:#fcf8e3}sub[data-v-a25ad398],sup[data-v-a25ad398]{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub[data-v-a25ad398]{bottom:-.25em}sup[data-v-a25ad398]{top:-.5em}a[data-v-a25ad398]{color:#0d6efd;text-decoration:underline}a[data-v-a25ad398]:hover{color:#0a58ca}a[data-v-a25ad398]:not([href]):not([class]),a[data-v-a25ad398]:not([href]):not([class]):hover{color:inherit;text-decoration:none}code[data-v-a25ad398],kbd[data-v-a25ad398],pre[data-v-a25ad398],samp[data-v-a25ad398]{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre[data-v-a25ad398]{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code[data-v-a25ad398]{font-size:inherit;color:inherit;word-break:normal}code[data-v-a25ad398]{font-size:.875em;color:#d63384;word-wrap:break-word}a>code[data-v-a25ad398]{color:inherit}kbd[data-v-a25ad398]{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd[data-v-a25ad398]{padding:0;font-size:1em;font-weight:700}figure[data-v-a25ad398]{margin:0 0 1rem}img[data-v-a25ad398],svg[data-v-a25ad398]{vertical-align:middle}table[data-v-a25ad398]{caption-side:bottom;border-collapse:collapse}caption[data-v-a25ad398]{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th[data-v-a25ad398]{text-align:inherit;text-align:-webkit-match-parent}tbody[data-v-a25ad398],td[data-v-a25ad398],tfoot[data-v-a25ad398],th[data-v-a25ad398],thead[data-v-a25ad398],tr[data-v-a25ad398]{border:0 solid;border-color:inherit}label[data-v-a25ad398]{display:inline-block}button[data-v-a25ad398]{border-radius:0}button[data-v-a25ad398]:focus:not(.focus-visible),button[data-v-a25ad398]:focus:not(:focus-visible){outline:0}button[data-v-a25ad398],input[data-v-a25ad398],optgroup[data-v-a25ad398],select[data-v-a25ad398],textarea[data-v-a25ad398]{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button[data-v-a25ad398],select[data-v-a25ad398]{text-transform:none}[role=button][data-v-a25ad398]{cursor:pointer}select[data-v-a25ad398]{word-wrap:normal}select[data-v-a25ad398]:disabled{opacity:1}[list][data-v-a25ad398]::-webkit-calendar-picker-indicator{display:none}[type=button][data-v-a25ad398],[type=reset][data-v-a25ad398],[type=submit][data-v-a25ad398],button[data-v-a25ad398]{-webkit-appearance:button}[type=button][data-v-a25ad398]:not(:disabled),[type=reset][data-v-a25ad398]:not(:disabled),[type=submit][data-v-a25ad398]:not(:disabled),button[data-v-a25ad398]:not(:disabled){cursor:pointer}[data-v-a25ad398]::-moz-focus-inner{padding:0;border-style:none}textarea[data-v-a25ad398]{resize:vertical}fieldset[data-v-a25ad398]{min-width:0;padding:0;margin:0;border:0}legend[data-v-a25ad398]{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media(min-width:1200px){legend[data-v-a25ad398]{font-size:1.5rem}}legend+*[data-v-a25ad398]{clear:left}[data-v-a25ad398]::-webkit-datetime-edit-day-field,[data-v-a25ad398]::-webkit-datetime-edit-fields-wrapper,[data-v-a25ad398]::-webkit-datetime-edit-hour-field,[data-v-a25ad398]::-webkit-datetime-edit-minute,[data-v-a25ad398]::-webkit-datetime-edit-month-field,[data-v-a25ad398]::-webkit-datetime-edit-text,[data-v-a25ad398]::-webkit-datetime-edit-year-field{padding:0}[data-v-a25ad398]::-webkit-inner-spin-button{height:auto}[type=search][data-v-a25ad398]{outline-offset:-2px;-webkit-appearance:textfield}[data-v-a25ad398]::-webkit-search-decoration{-webkit-appearance:none}[data-v-a25ad398]::-webkit-color-swatch-wrapper{padding:0}[data-v-a25ad398]::file-selector-button{font:inherit}[data-v-a25ad398]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output[data-v-a25ad398]{display:inline-block}iframe[data-v-a25ad398]{border:0}summary[data-v-a25ad398]{display:list-item;cursor:pointer}progress[data-v-a25ad398]{vertical-align:baseline}[hidden][data-v-a25ad398]{display:none!important}.row[data-v-a25ad398]{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-right:calc(var(--bs-gutter-x)*-0.5);margin-left:calc(var(--bs-gutter-x)*-0.5)}.row>*[data-v-a25ad398]{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*0.5);padding-left:calc(var(--bs-gutter-x)*0.5);margin-top:var(--bs-gutter-y)}.col[data-v-a25ad398]{flex:1 0 0%}.row-cols-auto>*[data-v-a25ad398]{flex:0 0 auto;width:auto}.row-cols-1>*[data-v-a25ad398]{flex:0 0 auto;width:100%}.row-cols-2>*[data-v-a25ad398]{flex:0 0 auto;width:50%}.row-cols-3>*[data-v-a25ad398]{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*[data-v-a25ad398]{flex:0 0 auto;width:25%}.row-cols-5>*[data-v-a25ad398]{flex:0 0 auto;width:20%}.row-cols-6>*[data-v-a25ad398]{flex:0 0 auto;width:16.6666666667%}@media(min-width:576px){.col-sm[data-v-a25ad398]{flex:1 0 0%}.row-cols-sm-auto>*[data-v-a25ad398]{flex:0 0 auto;width:auto}.row-cols-sm-1>*[data-v-a25ad398]{flex:0 0 auto;width:100%}.row-cols-sm-2>*[data-v-a25ad398]{flex:0 0 auto;width:50%}.row-cols-sm-3>*[data-v-a25ad398]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*[data-v-a25ad398]{flex:0 0 auto;width:25%}.row-cols-sm-5>*[data-v-a25ad398]{flex:0 0 auto;width:20%}.row-cols-sm-6>*[data-v-a25ad398]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:768px){.col-md[data-v-a25ad398]{flex:1 0 0%}.row-cols-md-auto>*[data-v-a25ad398]{flex:0 0 auto;width:auto}.row-cols-md-1>*[data-v-a25ad398]{flex:0 0 auto;width:100%}.row-cols-md-2>*[data-v-a25ad398]{flex:0 0 auto;width:50%}.row-cols-md-3>*[data-v-a25ad398]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*[data-v-a25ad398]{flex:0 0 auto;width:25%}.row-cols-md-5>*[data-v-a25ad398]{flex:0 0 auto;width:20%}.row-cols-md-6>*[data-v-a25ad398]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:992px){.col-lg[data-v-a25ad398]{flex:1 0 0%}.row-cols-lg-auto>*[data-v-a25ad398]{flex:0 0 auto;width:auto}.row-cols-lg-1>*[data-v-a25ad398]{flex:0 0 auto;width:100%}.row-cols-lg-2>*[data-v-a25ad398]{flex:0 0 auto;width:50%}.row-cols-lg-3>*[data-v-a25ad398]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*[data-v-a25ad398]{flex:0 0 auto;width:25%}.row-cols-lg-5>*[data-v-a25ad398]{flex:0 0 auto;width:20%}.row-cols-lg-6>*[data-v-a25ad398]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1200px){.col-xl[data-v-a25ad398]{flex:1 0 0%}.row-cols-xl-auto>*[data-v-a25ad398]{flex:0 0 auto;width:auto}.row-cols-xl-1>*[data-v-a25ad398]{flex:0 0 auto;width:100%}.row-cols-xl-2>*[data-v-a25ad398]{flex:0 0 auto;width:50%}.row-cols-xl-3>*[data-v-a25ad398]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*[data-v-a25ad398]{flex:0 0 auto;width:25%}.row-cols-xl-5>*[data-v-a25ad398]{flex:0 0 auto;width:20%}.row-cols-xl-6>*[data-v-a25ad398]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1400px){.col-xxl[data-v-a25ad398]{flex:1 0 0%}.row-cols-xxl-auto>*[data-v-a25ad398]{flex:0 0 auto;width:auto}.row-cols-xxl-1>*[data-v-a25ad398]{flex:0 0 auto;width:100%}.row-cols-xxl-2>*[data-v-a25ad398]{flex:0 0 auto;width:50%}.row-cols-xxl-3>*[data-v-a25ad398]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*[data-v-a25ad398]{flex:0 0 auto;width:25%}.row-cols-xxl-5>*[data-v-a25ad398]{flex:0 0 auto;width:20%}.row-cols-xxl-6>*[data-v-a25ad398]{flex:0 0 auto;width:16.6666666667%}}.col-auto[data-v-a25ad398]{flex:0 0 auto;width:auto}.col-1[data-v-a25ad398]{flex:0 0 auto;width:8.33333333%}.col-2[data-v-a25ad398]{flex:0 0 auto;width:16.66666667%}.col-3[data-v-a25ad398]{flex:0 0 auto;width:25%}.col-4[data-v-a25ad398]{flex:0 0 auto;width:33.33333333%}.col-5[data-v-a25ad398]{flex:0 0 auto;width:41.66666667%}.col-6[data-v-a25ad398]{flex:0 0 auto;width:50%}.col-7[data-v-a25ad398]{flex:0 0 auto;width:58.33333333%}.col-8[data-v-a25ad398]{flex:0 0 auto;width:66.66666667%}.col-9[data-v-a25ad398]{flex:0 0 auto;width:75%}.col-10[data-v-a25ad398]{flex:0 0 auto;width:83.33333333%}.col-11[data-v-a25ad398]{flex:0 0 auto;width:91.66666667%}.col-12[data-v-a25ad398]{flex:0 0 auto;width:100%}.offset-1[data-v-a25ad398]{margin-left:8.33333333%}.offset-2[data-v-a25ad398]{margin-left:16.66666667%}.offset-3[data-v-a25ad398]{margin-left:25%}.offset-4[data-v-a25ad398]{margin-left:33.33333333%}.offset-5[data-v-a25ad398]{margin-left:41.66666667%}.offset-6[data-v-a25ad398]{margin-left:50%}.offset-7[data-v-a25ad398]{margin-left:58.33333333%}.offset-8[data-v-a25ad398]{margin-left:66.66666667%}.offset-9[data-v-a25ad398]{margin-left:75%}.offset-10[data-v-a25ad398]{margin-left:83.33333333%}.offset-11[data-v-a25ad398]{margin-left:91.66666667%}.g-0[data-v-a25ad398],.gx-0[data-v-a25ad398]{--bs-gutter-x:0}.g-0[data-v-a25ad398],.gy-0[data-v-a25ad398]{--bs-gutter-y:0}.g-1[data-v-a25ad398],.gx-1[data-v-a25ad398]{--bs-gutter-x:0.25rem}.g-1[data-v-a25ad398],.gy-1[data-v-a25ad398]{--bs-gutter-y:0.25rem}.g-2[data-v-a25ad398],.gx-2[data-v-a25ad398]{--bs-gutter-x:0.5rem}.g-2[data-v-a25ad398],.gy-2[data-v-a25ad398]{--bs-gutter-y:0.5rem}.g-3[data-v-a25ad398],.gx-3[data-v-a25ad398]{--bs-gutter-x:1rem}.g-3[data-v-a25ad398],.gy-3[data-v-a25ad398]{--bs-gutter-y:1rem}.g-4[data-v-a25ad398],.gx-4[data-v-a25ad398]{--bs-gutter-x:1.5rem}.g-4[data-v-a25ad398],.gy-4[data-v-a25ad398]{--bs-gutter-y:1.5rem}.g-5[data-v-a25ad398],.gx-5[data-v-a25ad398]{--bs-gutter-x:3rem}.g-5[data-v-a25ad398],.gy-5[data-v-a25ad398]{--bs-gutter-y:3rem}@media(min-width:576px){.col-sm-auto[data-v-a25ad398]{flex:0 0 auto;width:auto}.col-sm-1[data-v-a25ad398]{flex:0 0 auto;width:8.33333333%}.col-sm-2[data-v-a25ad398]{flex:0 0 auto;width:16.66666667%}.col-sm-3[data-v-a25ad398]{flex:0 0 auto;width:25%}.col-sm-4[data-v-a25ad398]{flex:0 0 auto;width:33.33333333%}.col-sm-5[data-v-a25ad398]{flex:0 0 auto;width:41.66666667%}.col-sm-6[data-v-a25ad398]{flex:0 0 auto;width:50%}.col-sm-7[data-v-a25ad398]{flex:0 0 auto;width:58.33333333%}.col-sm-8[data-v-a25ad398]{flex:0 0 auto;width:66.66666667%}.col-sm-9[data-v-a25ad398]{flex:0 0 auto;width:75%}.col-sm-10[data-v-a25ad398]{flex:0 0 auto;width:83.33333333%}.col-sm-11[data-v-a25ad398]{flex:0 0 auto;width:91.66666667%}.col-sm-12[data-v-a25ad398]{flex:0 0 auto;width:100%}.offset-sm-0[data-v-a25ad398]{margin-left:0}.offset-sm-1[data-v-a25ad398]{margin-left:8.33333333%}.offset-sm-2[data-v-a25ad398]{margin-left:16.66666667%}.offset-sm-3[data-v-a25ad398]{margin-left:25%}.offset-sm-4[data-v-a25ad398]{margin-left:33.33333333%}.offset-sm-5[data-v-a25ad398]{margin-left:41.66666667%}.offset-sm-6[data-v-a25ad398]{margin-left:50%}.offset-sm-7[data-v-a25ad398]{margin-left:58.33333333%}.offset-sm-8[data-v-a25ad398]{margin-left:66.66666667%}.offset-sm-9[data-v-a25ad398]{margin-left:75%}.offset-sm-10[data-v-a25ad398]{margin-left:83.33333333%}.offset-sm-11[data-v-a25ad398]{margin-left:91.66666667%}.g-sm-0[data-v-a25ad398],.gx-sm-0[data-v-a25ad398]{--bs-gutter-x:0}.g-sm-0[data-v-a25ad398],.gy-sm-0[data-v-a25ad398]{--bs-gutter-y:0}.g-sm-1[data-v-a25ad398],.gx-sm-1[data-v-a25ad398]{--bs-gutter-x:0.25rem}.g-sm-1[data-v-a25ad398],.gy-sm-1[data-v-a25ad398]{--bs-gutter-y:0.25rem}.g-sm-2[data-v-a25ad398],.gx-sm-2[data-v-a25ad398]{--bs-gutter-x:0.5rem}.g-sm-2[data-v-a25ad398],.gy-sm-2[data-v-a25ad398]{--bs-gutter-y:0.5rem}.g-sm-3[data-v-a25ad398],.gx-sm-3[data-v-a25ad398]{--bs-gutter-x:1rem}.g-sm-3[data-v-a25ad398],.gy-sm-3[data-v-a25ad398]{--bs-gutter-y:1rem}.g-sm-4[data-v-a25ad398],.gx-sm-4[data-v-a25ad398]{--bs-gutter-x:1.5rem}.g-sm-4[data-v-a25ad398],.gy-sm-4[data-v-a25ad398]{--bs-gutter-y:1.5rem}.g-sm-5[data-v-a25ad398],.gx-sm-5[data-v-a25ad398]{--bs-gutter-x:3rem}.g-sm-5[data-v-a25ad398],.gy-sm-5[data-v-a25ad398]{--bs-gutter-y:3rem}}@media(min-width:768px){.col-md-auto[data-v-a25ad398]{flex:0 0 auto;width:auto}.col-md-1[data-v-a25ad398]{flex:0 0 auto;width:8.33333333%}.col-md-2[data-v-a25ad398]{flex:0 0 auto;width:16.66666667%}.col-md-3[data-v-a25ad398]{flex:0 0 auto;width:25%}.col-md-4[data-v-a25ad398]{flex:0 0 auto;width:33.33333333%}.col-md-5[data-v-a25ad398]{flex:0 0 auto;width:41.66666667%}.col-md-6[data-v-a25ad398]{flex:0 0 auto;width:50%}.col-md-7[data-v-a25ad398]{flex:0 0 auto;width:58.33333333%}.col-md-8[data-v-a25ad398]{flex:0 0 auto;width:66.66666667%}.col-md-9[data-v-a25ad398]{flex:0 0 auto;width:75%}.col-md-10[data-v-a25ad398]{flex:0 0 auto;width:83.33333333%}.col-md-11[data-v-a25ad398]{flex:0 0 auto;width:91.66666667%}.col-md-12[data-v-a25ad398]{flex:0 0 auto;width:100%}.offset-md-0[data-v-a25ad398]{margin-left:0}.offset-md-1[data-v-a25ad398]{margin-left:8.33333333%}.offset-md-2[data-v-a25ad398]{margin-left:16.66666667%}.offset-md-3[data-v-a25ad398]{margin-left:25%}.offset-md-4[data-v-a25ad398]{margin-left:33.33333333%}.offset-md-5[data-v-a25ad398]{margin-left:41.66666667%}.offset-md-6[data-v-a25ad398]{margin-left:50%}.offset-md-7[data-v-a25ad398]{margin-left:58.33333333%}.offset-md-8[data-v-a25ad398]{margin-left:66.66666667%}.offset-md-9[data-v-a25ad398]{margin-left:75%}.offset-md-10[data-v-a25ad398]{margin-left:83.33333333%}.offset-md-11[data-v-a25ad398]{margin-left:91.66666667%}.g-md-0[data-v-a25ad398],.gx-md-0[data-v-a25ad398]{--bs-gutter-x:0}.g-md-0[data-v-a25ad398],.gy-md-0[data-v-a25ad398]{--bs-gutter-y:0}.g-md-1[data-v-a25ad398],.gx-md-1[data-v-a25ad398]{--bs-gutter-x:0.25rem}.g-md-1[data-v-a25ad398],.gy-md-1[data-v-a25ad398]{--bs-gutter-y:0.25rem}.g-md-2[data-v-a25ad398],.gx-md-2[data-v-a25ad398]{--bs-gutter-x:0.5rem}.g-md-2[data-v-a25ad398],.gy-md-2[data-v-a25ad398]{--bs-gutter-y:0.5rem}.g-md-3[data-v-a25ad398],.gx-md-3[data-v-a25ad398]{--bs-gutter-x:1rem}.g-md-3[data-v-a25ad398],.gy-md-3[data-v-a25ad398]{--bs-gutter-y:1rem}.g-md-4[data-v-a25ad398],.gx-md-4[data-v-a25ad398]{--bs-gutter-x:1.5rem}.g-md-4[data-v-a25ad398],.gy-md-4[data-v-a25ad398]{--bs-gutter-y:1.5rem}.g-md-5[data-v-a25ad398],.gx-md-5[data-v-a25ad398]{--bs-gutter-x:3rem}.g-md-5[data-v-a25ad398],.gy-md-5[data-v-a25ad398]{--bs-gutter-y:3rem}}@media(min-width:992px){.col-lg-auto[data-v-a25ad398]{flex:0 0 auto;width:auto}.col-lg-1[data-v-a25ad398]{flex:0 0 auto;width:8.33333333%}.col-lg-2[data-v-a25ad398]{flex:0 0 auto;width:16.66666667%}.col-lg-3[data-v-a25ad398]{flex:0 0 auto;width:25%}.col-lg-4[data-v-a25ad398]{flex:0 0 auto;width:33.33333333%}.col-lg-5[data-v-a25ad398]{flex:0 0 auto;width:41.66666667%}.col-lg-6[data-v-a25ad398]{flex:0 0 auto;width:50%}.col-lg-7[data-v-a25ad398]{flex:0 0 auto;width:58.33333333%}.col-lg-8[data-v-a25ad398]{flex:0 0 auto;width:66.66666667%}.col-lg-9[data-v-a25ad398]{flex:0 0 auto;width:75%}.col-lg-10[data-v-a25ad398]{flex:0 0 auto;width:83.33333333%}.col-lg-11[data-v-a25ad398]{flex:0 0 auto;width:91.66666667%}.col-lg-12[data-v-a25ad398]{flex:0 0 auto;width:100%}.offset-lg-0[data-v-a25ad398]{margin-left:0}.offset-lg-1[data-v-a25ad398]{margin-left:8.33333333%}.offset-lg-2[data-v-a25ad398]{margin-left:16.66666667%}.offset-lg-3[data-v-a25ad398]{margin-left:25%}.offset-lg-4[data-v-a25ad398]{margin-left:33.33333333%}.offset-lg-5[data-v-a25ad398]{margin-left:41.66666667%}.offset-lg-6[data-v-a25ad398]{margin-left:50%}.offset-lg-7[data-v-a25ad398]{margin-left:58.33333333%}.offset-lg-8[data-v-a25ad398]{margin-left:66.66666667%}.offset-lg-9[data-v-a25ad398]{margin-left:75%}.offset-lg-10[data-v-a25ad398]{margin-left:83.33333333%}.offset-lg-11[data-v-a25ad398]{margin-left:91.66666667%}.g-lg-0[data-v-a25ad398],.gx-lg-0[data-v-a25ad398]{--bs-gutter-x:0}.g-lg-0[data-v-a25ad398],.gy-lg-0[data-v-a25ad398]{--bs-gutter-y:0}.g-lg-1[data-v-a25ad398],.gx-lg-1[data-v-a25ad398]{--bs-gutter-x:0.25rem}.g-lg-1[data-v-a25ad398],.gy-lg-1[data-v-a25ad398]{--bs-gutter-y:0.25rem}.g-lg-2[data-v-a25ad398],.gx-lg-2[data-v-a25ad398]{--bs-gutter-x:0.5rem}.g-lg-2[data-v-a25ad398],.gy-lg-2[data-v-a25ad398]{--bs-gutter-y:0.5rem}.g-lg-3[data-v-a25ad398],.gx-lg-3[data-v-a25ad398]{--bs-gutter-x:1rem}.g-lg-3[data-v-a25ad398],.gy-lg-3[data-v-a25ad398]{--bs-gutter-y:1rem}.g-lg-4[data-v-a25ad398],.gx-lg-4[data-v-a25ad398]{--bs-gutter-x:1.5rem}.g-lg-4[data-v-a25ad398],.gy-lg-4[data-v-a25ad398]{--bs-gutter-y:1.5rem}.g-lg-5[data-v-a25ad398],.gx-lg-5[data-v-a25ad398]{--bs-gutter-x:3rem}.g-lg-5[data-v-a25ad398],.gy-lg-5[data-v-a25ad398]{--bs-gutter-y:3rem}}@media(min-width:1200px){.col-xl-auto[data-v-a25ad398]{flex:0 0 auto;width:auto}.col-xl-1[data-v-a25ad398]{flex:0 0 auto;width:8.33333333%}.col-xl-2[data-v-a25ad398]{flex:0 0 auto;width:16.66666667%}.col-xl-3[data-v-a25ad398]{flex:0 0 auto;width:25%}.col-xl-4[data-v-a25ad398]{flex:0 0 auto;width:33.33333333%}.col-xl-5[data-v-a25ad398]{flex:0 0 auto;width:41.66666667%}.col-xl-6[data-v-a25ad398]{flex:0 0 auto;width:50%}.col-xl-7[data-v-a25ad398]{flex:0 0 auto;width:58.33333333%}.col-xl-8[data-v-a25ad398]{flex:0 0 auto;width:66.66666667%}.col-xl-9[data-v-a25ad398]{flex:0 0 auto;width:75%}.col-xl-10[data-v-a25ad398]{flex:0 0 auto;width:83.33333333%}.col-xl-11[data-v-a25ad398]{flex:0 0 auto;width:91.66666667%}.col-xl-12[data-v-a25ad398]{flex:0 0 auto;width:100%}.offset-xl-0[data-v-a25ad398]{margin-left:0}.offset-xl-1[data-v-a25ad398]{margin-left:8.33333333%}.offset-xl-2[data-v-a25ad398]{margin-left:16.66666667%}.offset-xl-3[data-v-a25ad398]{margin-left:25%}.offset-xl-4[data-v-a25ad398]{margin-left:33.33333333%}.offset-xl-5[data-v-a25ad398]{margin-left:41.66666667%}.offset-xl-6[data-v-a25ad398]{margin-left:50%}.offset-xl-7[data-v-a25ad398]{margin-left:58.33333333%}.offset-xl-8[data-v-a25ad398]{margin-left:66.66666667%}.offset-xl-9[data-v-a25ad398]{margin-left:75%}.offset-xl-10[data-v-a25ad398]{margin-left:83.33333333%}.offset-xl-11[data-v-a25ad398]{margin-left:91.66666667%}.g-xl-0[data-v-a25ad398],.gx-xl-0[data-v-a25ad398]{--bs-gutter-x:0}.g-xl-0[data-v-a25ad398],.gy-xl-0[data-v-a25ad398]{--bs-gutter-y:0}.g-xl-1[data-v-a25ad398],.gx-xl-1[data-v-a25ad398]{--bs-gutter-x:0.25rem}.g-xl-1[data-v-a25ad398],.gy-xl-1[data-v-a25ad398]{--bs-gutter-y:0.25rem}.g-xl-2[data-v-a25ad398],.gx-xl-2[data-v-a25ad398]{--bs-gutter-x:0.5rem}.g-xl-2[data-v-a25ad398],.gy-xl-2[data-v-a25ad398]{--bs-gutter-y:0.5rem}.g-xl-3[data-v-a25ad398],.gx-xl-3[data-v-a25ad398]{--bs-gutter-x:1rem}.g-xl-3[data-v-a25ad398],.gy-xl-3[data-v-a25ad398]{--bs-gutter-y:1rem}.g-xl-4[data-v-a25ad398],.gx-xl-4[data-v-a25ad398]{--bs-gutter-x:1.5rem}.g-xl-4[data-v-a25ad398],.gy-xl-4[data-v-a25ad398]{--bs-gutter-y:1.5rem}.g-xl-5[data-v-a25ad398],.gx-xl-5[data-v-a25ad398]{--bs-gutter-x:3rem}.g-xl-5[data-v-a25ad398],.gy-xl-5[data-v-a25ad398]{--bs-gutter-y:3rem}}@media(min-width:1400px){.col-xxl-auto[data-v-a25ad398]{flex:0 0 auto;width:auto}.col-xxl-1[data-v-a25ad398]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[data-v-a25ad398]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[data-v-a25ad398]{flex:0 0 auto;width:25%}.col-xxl-4[data-v-a25ad398]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[data-v-a25ad398]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[data-v-a25ad398]{flex:0 0 auto;width:50%}.col-xxl-7[data-v-a25ad398]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[data-v-a25ad398]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[data-v-a25ad398]{flex:0 0 auto;width:75%}.col-xxl-10[data-v-a25ad398]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[data-v-a25ad398]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[data-v-a25ad398]{flex:0 0 auto;width:100%}.offset-xxl-0[data-v-a25ad398]{margin-left:0}.offset-xxl-1[data-v-a25ad398]{margin-left:8.33333333%}.offset-xxl-2[data-v-a25ad398]{margin-left:16.66666667%}.offset-xxl-3[data-v-a25ad398]{margin-left:25%}.offset-xxl-4[data-v-a25ad398]{margin-left:33.33333333%}.offset-xxl-5[data-v-a25ad398]{margin-left:41.66666667%}.offset-xxl-6[data-v-a25ad398]{margin-left:50%}.offset-xxl-7[data-v-a25ad398]{margin-left:58.33333333%}.offset-xxl-8[data-v-a25ad398]{margin-left:66.66666667%}.offset-xxl-9[data-v-a25ad398]{margin-left:75%}.offset-xxl-10[data-v-a25ad398]{margin-left:83.33333333%}.offset-xxl-11[data-v-a25ad398]{margin-left:91.66666667%}.g-xxl-0[data-v-a25ad398],.gx-xxl-0[data-v-a25ad398]{--bs-gutter-x:0}.g-xxl-0[data-v-a25ad398],.gy-xxl-0[data-v-a25ad398]{--bs-gutter-y:0}.g-xxl-1[data-v-a25ad398],.gx-xxl-1[data-v-a25ad398]{--bs-gutter-x:0.25rem}.g-xxl-1[data-v-a25ad398],.gy-xxl-1[data-v-a25ad398]{--bs-gutter-y:0.25rem}.g-xxl-2[data-v-a25ad398],.gx-xxl-2[data-v-a25ad398]{--bs-gutter-x:0.5rem}.g-xxl-2[data-v-a25ad398],.gy-xxl-2[data-v-a25ad398]{--bs-gutter-y:0.5rem}.g-xxl-3[data-v-a25ad398],.gx-xxl-3[data-v-a25ad398]{--bs-gutter-x:1rem}.g-xxl-3[data-v-a25ad398],.gy-xxl-3[data-v-a25ad398]{--bs-gutter-y:1rem}.g-xxl-4[data-v-a25ad398],.gx-xxl-4[data-v-a25ad398]{--bs-gutter-x:1.5rem}.g-xxl-4[data-v-a25ad398],.gy-xxl-4[data-v-a25ad398]{--bs-gutter-y:1.5rem}.g-xxl-5[data-v-a25ad398],.gx-xxl-5[data-v-a25ad398]{--bs-gutter-x:3rem}.g-xxl-5[data-v-a25ad398],.gy-xxl-5[data-v-a25ad398]{--bs-gutter-y:3rem}}.container[data-v-a25ad398],.container-fluid[data-v-a25ad398],.container-lg[data-v-a25ad398],.container-md[data-v-a25ad398],.container-sm[data-v-a25ad398],.container-xl[data-v-a25ad398],.container-xxl[data-v-a25ad398]{width:100%;padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media(min-width:576px){.container[data-v-a25ad398],.container-sm[data-v-a25ad398]{max-width:540px}}@media(min-width:768px){.container[data-v-a25ad398],.container-md[data-v-a25ad398],.container-sm[data-v-a25ad398]{max-width:720px}}@media(min-width:992px){.container[data-v-a25ad398],.container-lg[data-v-a25ad398],.container-md[data-v-a25ad398],.container-sm[data-v-a25ad398]{max-width:960px}}@media(min-width:1200px){.container[data-v-a25ad398],.container-lg[data-v-a25ad398],.container-md[data-v-a25ad398],.container-sm[data-v-a25ad398],.container-xl[data-v-a25ad398]{max-width:1140px}}@media(min-width:1400px){.container[data-v-a25ad398],.container-lg[data-v-a25ad398],.container-md[data-v-a25ad398],.container-sm[data-v-a25ad398],.container-xl[data-v-a25ad398],.container-xxl[data-v-a25ad398]{max-width:1320px}}.row-fixed[data-v-a25ad398]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-a25ad398],.row-fixed.text-container h2[data-v-a25ad398],.row-fixed.text-container p[data-v-a25ad398]{text-align:center;text-transform:uppercase}.row-fixed.video-container[data-v-a25ad398]{top:5vh;opacity:1;height:100vh;z-index:0}@media(min-width:768px){.row-fixed.video-container[data-v-a25ad398]{top:0}}.row-fixed.video-container .col[data-v-a25ad398]{margin:0;padding:0;width:100%;height:100%}",""]),t.exports=o}}]);