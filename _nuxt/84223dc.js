(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7,15],{313:function(t,e,d){"use strict";var c=d(17),o=d(8),l=d(82),r=d(21),v=d(13),n=d(59),f=d(139),m=d(80),x=d(7),h=d(60),w=d(81).f,y=d(35).f,k=d(19).f,z=d(315).trim,E="Number",I=o.Number,N=I.prototype,V=n(h(N))==E,_=function(t){var e,d,c,o,l,r,v,code,n=m(t,!1);if("string"==typeof n&&n.length>2)if(43===(e=(n=z(n)).charCodeAt(0))||45===e){if(88===(d=n.charCodeAt(2))||120===d)return NaN}else if(48===e){switch(n.charCodeAt(1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+n}for(r=(l=n.slice(2)).length,v=0;v<r;v++)if((code=l.charCodeAt(v))<48||code>o)return NaN;return parseInt(l,c)}return+n};if(l(E,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var j,T=function(t){var e=arguments.length<1?0:t,d=this;return d instanceof T&&(V?x((function(){N.valueOf.call(d)})):n(d)!=E)?f(new I(_(e)),d,T):_(e)},O=c?w(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;O.length>S;S++)v(I,j=O[S])&&!v(T,j)&&k(T,j,y(I,j));T.prototype=N,N.constructor=T,r(o,E,T)}},315:function(t,e,d){var c=d(30),o="["+d(316)+"]",l=RegExp("^"+o+o+"*"),r=RegExp(o+o+"*$"),v=function(t){return function(e){var d=String(c(e));return 1&t&&(d=d.replace(l,"")),2&t&&(d=d.replace(r,"")),d}};t.exports={start:v(1),end:v(2),trim:v(3)}},316:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},325:function(t,e,d){var content=d(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("4a8fcf5e",content,!0,{sourceMap:!1})},326:function(t,e,d){var content=d(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("33d5f5f4",content,!0,{sourceMap:!1})},338:function(t,e,d){"use strict";d(325)},339:function(t,e,d){var c=d(49)(!1);c.push([t.i,".row-fixed[data-v-63e6df44]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-63e6df44],.row-fixed.text-container h2[data-v-63e6df44],.row-fixed.text-container p[data-v-63e6df44]{text-align:center;text-transform:uppercase}.row-fixed.video-container[data-v-63e6df44]{top:25vh;opacity:1;height:50vh}.row-fixed.video-container .col[data-v-63e6df44]{margin:0;padding:0;width:100%}",""]),t.exports=c},340:function(t,e,d){"use strict";d(326)},341:function(t,e,d){var c=d(49)(!1);c.push([t.i,"video[data-v-5fd262d0]{width:100%;height:100vh;-o-object-fit:cover;object-fit:cover;opacity:.75}",""]),t.exports=c},343:function(t,e,d){"use strict";d.r(e);d(313),d(61);var c=d(58),o=d(140),l=Object(c.b)({name:"VimeoEmbed",components:{vueVimeoPlayer:o.a},props:{videoId:{type:String,default:"0"},currentVideoTime:{type:Number,default:0}},setup:function(t,e){var d=Object(c.f)(),o=Object(c.f)(),l=Object(c.f)(!1);function r(){l.value=!0,window.clearTimeout(o.value),o.value=setTimeout((function(){l.value=!1}),66)}return Object(c.d)((function(){document.addEventListener("scroll",r)})),Object(c.i)((function(){return t.currentVideoTime}),(function(t,e){d.value.setCurrentTime(t),d.value.play(),setTimeout((function(){d.value.pause()}),1e3)})),Object(c.i)((function(){return l}),(function(t,e){!1===t.value&&d.value.pause()})),{player:d,isScrolling:l}}}),r=(d(338),d(57)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("client-only",[d("vueVimeoPlayer",{ref:"player",attrs:{"video-id":t.videoId,options:{muted:1,background:0},autoplay:!1,controls:!1,loop:!0}})],1)}),[],!1,null,"63e6df44",null);e.default=component.exports},346:function(t,e,d){var content=d(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("38e15ca2",content,!0,{sourceMap:!1})},353:function(t,e,d){"use strict";d.r(e);d(313);var c=d(58),o=d(343),l=d(354),r=Object(c.b)({name:"VideoContainer",components:{VimeoEmbed:o.default,HTMLVideoEmbed:l.default},props:{useVimeo:{type:Boolean,default:!1},currentVideoTime:{type:Number,default:0},filename:{type:String,default:""},vimeoId:{type:String,default:""}},setup:function(){}}),v=(d(361),d(57)),component=Object(v.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"row-fixed video-container"},[d("div",{staticClass:"col"},[t.useVimeo?d("VimeoEmbed",{attrs:{"video-id":t.vimeoId,"current-video-time":t.currentVideoTime,"is-scrolling":t.isScrolling}}):d("HTMLVideoEmbed",{attrs:{filename:t.filename,"current-video-time":t.currentVideoTime}})],1)])}),[],!1,null,"5c179278",null);e.default=component.exports;installComponents(component,{VimeoEmbed:d(343).default})},354:function(t,e,d){"use strict";d.r(e);d(313);var c=d(58),o=Object(c.b)({name:"HtmlVideoEmbed",components:{},props:{filename:{type:String,default:""},currentVideoTime:{type:Number,default:0}},setup:function(t,e){var d=Object(c.f)();return Object(c.i)((function(){return t.currentVideoTime}),(function(t,e){d.value.currentTime=t})),{player:d}}}),l=(d(340),d(57)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("video",{ref:"player",attrs:{muted:"",poster:"/img/placeholder/bottle.placeholder.jpg",preload:"metadata","aria-label":"Silhouetted used plastic water bottle that explodes into a hundred or so shards"},domProps:{muted:!0}},[d("source",{staticClass:"bg-video",attrs:{src:"/video/"+t.filename,type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")])}),[],!1,null,"5fd262d0",null);e.default=component.exports},361:function(t,e,d){"use strict";d(346)},362:function(t,e,d){var c=d(49)(!1);c.push([t.i,"*[data-v-5c179278],[data-v-5c179278]:after,[data-v-5c179278]:before{box-sizing:border-box}@media(prefers-reduced-motion:no-preference){[data-v-5c179278]:root{scroll-behavior:smooth}}body[data-v-5c179278]{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr[data-v-5c179278]{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr[data-v-5c179278]:not([size]){height:1px}h1[data-v-5c179278],h2[data-v-5c179278],h3[data-v-5c179278],h4[data-v-5c179278],h5[data-v-5c179278],h6[data-v-5c179278]{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1[data-v-5c179278]{font-size:calc(1.375rem + 1.5vw)}@media(min-width:1200px){h1[data-v-5c179278]{font-size:2.5rem}}h2[data-v-5c179278]{font-size:calc(1.325rem + .9vw)}@media(min-width:1200px){h2[data-v-5c179278]{font-size:2rem}}h3[data-v-5c179278]{font-size:calc(1.3rem + .6vw)}@media(min-width:1200px){h3[data-v-5c179278]{font-size:1.75rem}}h4[data-v-5c179278]{font-size:calc(1.275rem + .3vw)}@media(min-width:1200px){h4[data-v-5c179278]{font-size:1.5rem}}h5[data-v-5c179278]{font-size:1.25rem}h6[data-v-5c179278]{font-size:1rem}p[data-v-5c179278]{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title][data-v-5c179278],abbr[title][data-v-5c179278]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address[data-v-5c179278]{margin-bottom:1rem;font-style:normal;line-height:inherit}ol[data-v-5c179278],ul[data-v-5c179278]{padding-left:2rem}dl[data-v-5c179278],ol[data-v-5c179278],ul[data-v-5c179278]{margin-top:0;margin-bottom:1rem}ol ol[data-v-5c179278],ol ul[data-v-5c179278],ul ol[data-v-5c179278],ul ul[data-v-5c179278]{margin-bottom:0}dt[data-v-5c179278]{font-weight:700}dd[data-v-5c179278]{margin-bottom:.5rem;margin-left:0}blockquote[data-v-5c179278]{margin:0 0 1rem}b[data-v-5c179278],strong[data-v-5c179278]{font-weight:bolder}small[data-v-5c179278]{font-size:.875em}mark[data-v-5c179278]{padding:.2em;background-color:#fcf8e3}sub[data-v-5c179278],sup[data-v-5c179278]{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub[data-v-5c179278]{bottom:-.25em}sup[data-v-5c179278]{top:-.5em}a[data-v-5c179278]{color:#0d6efd;text-decoration:underline}a[data-v-5c179278]:hover{color:#0a58ca}a[data-v-5c179278]:not([href]):not([class]),a[data-v-5c179278]:not([href]):not([class]):hover{color:inherit;text-decoration:none}code[data-v-5c179278],kbd[data-v-5c179278],pre[data-v-5c179278],samp[data-v-5c179278]{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre[data-v-5c179278]{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code[data-v-5c179278]{font-size:inherit;color:inherit;word-break:normal}code[data-v-5c179278]{font-size:.875em;color:#d63384;word-wrap:break-word}a>code[data-v-5c179278]{color:inherit}kbd[data-v-5c179278]{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd[data-v-5c179278]{padding:0;font-size:1em;font-weight:700}figure[data-v-5c179278]{margin:0 0 1rem}img[data-v-5c179278],svg[data-v-5c179278]{vertical-align:middle}table[data-v-5c179278]{caption-side:bottom;border-collapse:collapse}caption[data-v-5c179278]{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th[data-v-5c179278]{text-align:inherit;text-align:-webkit-match-parent}tbody[data-v-5c179278],td[data-v-5c179278],tfoot[data-v-5c179278],th[data-v-5c179278],thead[data-v-5c179278],tr[data-v-5c179278]{border:0 solid;border-color:inherit}label[data-v-5c179278]{display:inline-block}button[data-v-5c179278]{border-radius:0}button[data-v-5c179278]:focus:not(.focus-visible),button[data-v-5c179278]:focus:not(:focus-visible){outline:0}button[data-v-5c179278],input[data-v-5c179278],optgroup[data-v-5c179278],select[data-v-5c179278],textarea[data-v-5c179278]{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button[data-v-5c179278],select[data-v-5c179278]{text-transform:none}[role=button][data-v-5c179278]{cursor:pointer}select[data-v-5c179278]{word-wrap:normal}select[data-v-5c179278]:disabled{opacity:1}[list][data-v-5c179278]::-webkit-calendar-picker-indicator{display:none}[type=button][data-v-5c179278],[type=reset][data-v-5c179278],[type=submit][data-v-5c179278],button[data-v-5c179278]{-webkit-appearance:button}[type=button][data-v-5c179278]:not(:disabled),[type=reset][data-v-5c179278]:not(:disabled),[type=submit][data-v-5c179278]:not(:disabled),button[data-v-5c179278]:not(:disabled){cursor:pointer}[data-v-5c179278]::-moz-focus-inner{padding:0;border-style:none}textarea[data-v-5c179278]{resize:vertical}fieldset[data-v-5c179278]{min-width:0;padding:0;margin:0;border:0}legend[data-v-5c179278]{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media(min-width:1200px){legend[data-v-5c179278]{font-size:1.5rem}}legend+*[data-v-5c179278]{clear:left}[data-v-5c179278]::-webkit-datetime-edit-day-field,[data-v-5c179278]::-webkit-datetime-edit-fields-wrapper,[data-v-5c179278]::-webkit-datetime-edit-hour-field,[data-v-5c179278]::-webkit-datetime-edit-minute,[data-v-5c179278]::-webkit-datetime-edit-month-field,[data-v-5c179278]::-webkit-datetime-edit-text,[data-v-5c179278]::-webkit-datetime-edit-year-field{padding:0}[data-v-5c179278]::-webkit-inner-spin-button{height:auto}[type=search][data-v-5c179278]{outline-offset:-2px;-webkit-appearance:textfield}[data-v-5c179278]::-webkit-search-decoration{-webkit-appearance:none}[data-v-5c179278]::-webkit-color-swatch-wrapper{padding:0}[data-v-5c179278]::file-selector-button{font:inherit}[data-v-5c179278]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output[data-v-5c179278]{display:inline-block}iframe[data-v-5c179278]{border:0}summary[data-v-5c179278]{display:list-item;cursor:pointer}progress[data-v-5c179278]{vertical-align:baseline}[hidden][data-v-5c179278]{display:none!important}.row[data-v-5c179278]{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-right:calc(var(--bs-gutter-x)*-0.5);margin-left:calc(var(--bs-gutter-x)*-0.5)}.row>*[data-v-5c179278]{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*0.5);padding-left:calc(var(--bs-gutter-x)*0.5);margin-top:var(--bs-gutter-y)}.col[data-v-5c179278]{flex:1 0 0%}.row-cols-auto>*[data-v-5c179278]{flex:0 0 auto;width:auto}.row-cols-1>*[data-v-5c179278]{flex:0 0 auto;width:100%}.row-cols-2>*[data-v-5c179278]{flex:0 0 auto;width:50%}.row-cols-3>*[data-v-5c179278]{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*[data-v-5c179278]{flex:0 0 auto;width:25%}.row-cols-5>*[data-v-5c179278]{flex:0 0 auto;width:20%}.row-cols-6>*[data-v-5c179278]{flex:0 0 auto;width:16.6666666667%}@media(min-width:576px){.col-sm[data-v-5c179278]{flex:1 0 0%}.row-cols-sm-auto>*[data-v-5c179278]{flex:0 0 auto;width:auto}.row-cols-sm-1>*[data-v-5c179278]{flex:0 0 auto;width:100%}.row-cols-sm-2>*[data-v-5c179278]{flex:0 0 auto;width:50%}.row-cols-sm-3>*[data-v-5c179278]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*[data-v-5c179278]{flex:0 0 auto;width:25%}.row-cols-sm-5>*[data-v-5c179278]{flex:0 0 auto;width:20%}.row-cols-sm-6>*[data-v-5c179278]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:768px){.col-md[data-v-5c179278]{flex:1 0 0%}.row-cols-md-auto>*[data-v-5c179278]{flex:0 0 auto;width:auto}.row-cols-md-1>*[data-v-5c179278]{flex:0 0 auto;width:100%}.row-cols-md-2>*[data-v-5c179278]{flex:0 0 auto;width:50%}.row-cols-md-3>*[data-v-5c179278]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*[data-v-5c179278]{flex:0 0 auto;width:25%}.row-cols-md-5>*[data-v-5c179278]{flex:0 0 auto;width:20%}.row-cols-md-6>*[data-v-5c179278]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:992px){.col-lg[data-v-5c179278]{flex:1 0 0%}.row-cols-lg-auto>*[data-v-5c179278]{flex:0 0 auto;width:auto}.row-cols-lg-1>*[data-v-5c179278]{flex:0 0 auto;width:100%}.row-cols-lg-2>*[data-v-5c179278]{flex:0 0 auto;width:50%}.row-cols-lg-3>*[data-v-5c179278]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*[data-v-5c179278]{flex:0 0 auto;width:25%}.row-cols-lg-5>*[data-v-5c179278]{flex:0 0 auto;width:20%}.row-cols-lg-6>*[data-v-5c179278]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1200px){.col-xl[data-v-5c179278]{flex:1 0 0%}.row-cols-xl-auto>*[data-v-5c179278]{flex:0 0 auto;width:auto}.row-cols-xl-1>*[data-v-5c179278]{flex:0 0 auto;width:100%}.row-cols-xl-2>*[data-v-5c179278]{flex:0 0 auto;width:50%}.row-cols-xl-3>*[data-v-5c179278]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*[data-v-5c179278]{flex:0 0 auto;width:25%}.row-cols-xl-5>*[data-v-5c179278]{flex:0 0 auto;width:20%}.row-cols-xl-6>*[data-v-5c179278]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1400px){.col-xxl[data-v-5c179278]{flex:1 0 0%}.row-cols-xxl-auto>*[data-v-5c179278]{flex:0 0 auto;width:auto}.row-cols-xxl-1>*[data-v-5c179278]{flex:0 0 auto;width:100%}.row-cols-xxl-2>*[data-v-5c179278]{flex:0 0 auto;width:50%}.row-cols-xxl-3>*[data-v-5c179278]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*[data-v-5c179278]{flex:0 0 auto;width:25%}.row-cols-xxl-5>*[data-v-5c179278]{flex:0 0 auto;width:20%}.row-cols-xxl-6>*[data-v-5c179278]{flex:0 0 auto;width:16.6666666667%}}.col-auto[data-v-5c179278]{flex:0 0 auto;width:auto}.col-1[data-v-5c179278]{flex:0 0 auto;width:8.33333333%}.col-2[data-v-5c179278]{flex:0 0 auto;width:16.66666667%}.col-3[data-v-5c179278]{flex:0 0 auto;width:25%}.col-4[data-v-5c179278]{flex:0 0 auto;width:33.33333333%}.col-5[data-v-5c179278]{flex:0 0 auto;width:41.66666667%}.col-6[data-v-5c179278]{flex:0 0 auto;width:50%}.col-7[data-v-5c179278]{flex:0 0 auto;width:58.33333333%}.col-8[data-v-5c179278]{flex:0 0 auto;width:66.66666667%}.col-9[data-v-5c179278]{flex:0 0 auto;width:75%}.col-10[data-v-5c179278]{flex:0 0 auto;width:83.33333333%}.col-11[data-v-5c179278]{flex:0 0 auto;width:91.66666667%}.col-12[data-v-5c179278]{flex:0 0 auto;width:100%}.offset-1[data-v-5c179278]{margin-left:8.33333333%}.offset-2[data-v-5c179278]{margin-left:16.66666667%}.offset-3[data-v-5c179278]{margin-left:25%}.offset-4[data-v-5c179278]{margin-left:33.33333333%}.offset-5[data-v-5c179278]{margin-left:41.66666667%}.offset-6[data-v-5c179278]{margin-left:50%}.offset-7[data-v-5c179278]{margin-left:58.33333333%}.offset-8[data-v-5c179278]{margin-left:66.66666667%}.offset-9[data-v-5c179278]{margin-left:75%}.offset-10[data-v-5c179278]{margin-left:83.33333333%}.offset-11[data-v-5c179278]{margin-left:91.66666667%}.g-0[data-v-5c179278],.gx-0[data-v-5c179278]{--bs-gutter-x:0}.g-0[data-v-5c179278],.gy-0[data-v-5c179278]{--bs-gutter-y:0}.g-1[data-v-5c179278],.gx-1[data-v-5c179278]{--bs-gutter-x:0.25rem}.g-1[data-v-5c179278],.gy-1[data-v-5c179278]{--bs-gutter-y:0.25rem}.g-2[data-v-5c179278],.gx-2[data-v-5c179278]{--bs-gutter-x:0.5rem}.g-2[data-v-5c179278],.gy-2[data-v-5c179278]{--bs-gutter-y:0.5rem}.g-3[data-v-5c179278],.gx-3[data-v-5c179278]{--bs-gutter-x:1rem}.g-3[data-v-5c179278],.gy-3[data-v-5c179278]{--bs-gutter-y:1rem}.g-4[data-v-5c179278],.gx-4[data-v-5c179278]{--bs-gutter-x:1.5rem}.g-4[data-v-5c179278],.gy-4[data-v-5c179278]{--bs-gutter-y:1.5rem}.g-5[data-v-5c179278],.gx-5[data-v-5c179278]{--bs-gutter-x:3rem}.g-5[data-v-5c179278],.gy-5[data-v-5c179278]{--bs-gutter-y:3rem}@media(min-width:576px){.col-sm-auto[data-v-5c179278]{flex:0 0 auto;width:auto}.col-sm-1[data-v-5c179278]{flex:0 0 auto;width:8.33333333%}.col-sm-2[data-v-5c179278]{flex:0 0 auto;width:16.66666667%}.col-sm-3[data-v-5c179278]{flex:0 0 auto;width:25%}.col-sm-4[data-v-5c179278]{flex:0 0 auto;width:33.33333333%}.col-sm-5[data-v-5c179278]{flex:0 0 auto;width:41.66666667%}.col-sm-6[data-v-5c179278]{flex:0 0 auto;width:50%}.col-sm-7[data-v-5c179278]{flex:0 0 auto;width:58.33333333%}.col-sm-8[data-v-5c179278]{flex:0 0 auto;width:66.66666667%}.col-sm-9[data-v-5c179278]{flex:0 0 auto;width:75%}.col-sm-10[data-v-5c179278]{flex:0 0 auto;width:83.33333333%}.col-sm-11[data-v-5c179278]{flex:0 0 auto;width:91.66666667%}.col-sm-12[data-v-5c179278]{flex:0 0 auto;width:100%}.offset-sm-0[data-v-5c179278]{margin-left:0}.offset-sm-1[data-v-5c179278]{margin-left:8.33333333%}.offset-sm-2[data-v-5c179278]{margin-left:16.66666667%}.offset-sm-3[data-v-5c179278]{margin-left:25%}.offset-sm-4[data-v-5c179278]{margin-left:33.33333333%}.offset-sm-5[data-v-5c179278]{margin-left:41.66666667%}.offset-sm-6[data-v-5c179278]{margin-left:50%}.offset-sm-7[data-v-5c179278]{margin-left:58.33333333%}.offset-sm-8[data-v-5c179278]{margin-left:66.66666667%}.offset-sm-9[data-v-5c179278]{margin-left:75%}.offset-sm-10[data-v-5c179278]{margin-left:83.33333333%}.offset-sm-11[data-v-5c179278]{margin-left:91.66666667%}.g-sm-0[data-v-5c179278],.gx-sm-0[data-v-5c179278]{--bs-gutter-x:0}.g-sm-0[data-v-5c179278],.gy-sm-0[data-v-5c179278]{--bs-gutter-y:0}.g-sm-1[data-v-5c179278],.gx-sm-1[data-v-5c179278]{--bs-gutter-x:0.25rem}.g-sm-1[data-v-5c179278],.gy-sm-1[data-v-5c179278]{--bs-gutter-y:0.25rem}.g-sm-2[data-v-5c179278],.gx-sm-2[data-v-5c179278]{--bs-gutter-x:0.5rem}.g-sm-2[data-v-5c179278],.gy-sm-2[data-v-5c179278]{--bs-gutter-y:0.5rem}.g-sm-3[data-v-5c179278],.gx-sm-3[data-v-5c179278]{--bs-gutter-x:1rem}.g-sm-3[data-v-5c179278],.gy-sm-3[data-v-5c179278]{--bs-gutter-y:1rem}.g-sm-4[data-v-5c179278],.gx-sm-4[data-v-5c179278]{--bs-gutter-x:1.5rem}.g-sm-4[data-v-5c179278],.gy-sm-4[data-v-5c179278]{--bs-gutter-y:1.5rem}.g-sm-5[data-v-5c179278],.gx-sm-5[data-v-5c179278]{--bs-gutter-x:3rem}.g-sm-5[data-v-5c179278],.gy-sm-5[data-v-5c179278]{--bs-gutter-y:3rem}}@media(min-width:768px){.col-md-auto[data-v-5c179278]{flex:0 0 auto;width:auto}.col-md-1[data-v-5c179278]{flex:0 0 auto;width:8.33333333%}.col-md-2[data-v-5c179278]{flex:0 0 auto;width:16.66666667%}.col-md-3[data-v-5c179278]{flex:0 0 auto;width:25%}.col-md-4[data-v-5c179278]{flex:0 0 auto;width:33.33333333%}.col-md-5[data-v-5c179278]{flex:0 0 auto;width:41.66666667%}.col-md-6[data-v-5c179278]{flex:0 0 auto;width:50%}.col-md-7[data-v-5c179278]{flex:0 0 auto;width:58.33333333%}.col-md-8[data-v-5c179278]{flex:0 0 auto;width:66.66666667%}.col-md-9[data-v-5c179278]{flex:0 0 auto;width:75%}.col-md-10[data-v-5c179278]{flex:0 0 auto;width:83.33333333%}.col-md-11[data-v-5c179278]{flex:0 0 auto;width:91.66666667%}.col-md-12[data-v-5c179278]{flex:0 0 auto;width:100%}.offset-md-0[data-v-5c179278]{margin-left:0}.offset-md-1[data-v-5c179278]{margin-left:8.33333333%}.offset-md-2[data-v-5c179278]{margin-left:16.66666667%}.offset-md-3[data-v-5c179278]{margin-left:25%}.offset-md-4[data-v-5c179278]{margin-left:33.33333333%}.offset-md-5[data-v-5c179278]{margin-left:41.66666667%}.offset-md-6[data-v-5c179278]{margin-left:50%}.offset-md-7[data-v-5c179278]{margin-left:58.33333333%}.offset-md-8[data-v-5c179278]{margin-left:66.66666667%}.offset-md-9[data-v-5c179278]{margin-left:75%}.offset-md-10[data-v-5c179278]{margin-left:83.33333333%}.offset-md-11[data-v-5c179278]{margin-left:91.66666667%}.g-md-0[data-v-5c179278],.gx-md-0[data-v-5c179278]{--bs-gutter-x:0}.g-md-0[data-v-5c179278],.gy-md-0[data-v-5c179278]{--bs-gutter-y:0}.g-md-1[data-v-5c179278],.gx-md-1[data-v-5c179278]{--bs-gutter-x:0.25rem}.g-md-1[data-v-5c179278],.gy-md-1[data-v-5c179278]{--bs-gutter-y:0.25rem}.g-md-2[data-v-5c179278],.gx-md-2[data-v-5c179278]{--bs-gutter-x:0.5rem}.g-md-2[data-v-5c179278],.gy-md-2[data-v-5c179278]{--bs-gutter-y:0.5rem}.g-md-3[data-v-5c179278],.gx-md-3[data-v-5c179278]{--bs-gutter-x:1rem}.g-md-3[data-v-5c179278],.gy-md-3[data-v-5c179278]{--bs-gutter-y:1rem}.g-md-4[data-v-5c179278],.gx-md-4[data-v-5c179278]{--bs-gutter-x:1.5rem}.g-md-4[data-v-5c179278],.gy-md-4[data-v-5c179278]{--bs-gutter-y:1.5rem}.g-md-5[data-v-5c179278],.gx-md-5[data-v-5c179278]{--bs-gutter-x:3rem}.g-md-5[data-v-5c179278],.gy-md-5[data-v-5c179278]{--bs-gutter-y:3rem}}@media(min-width:992px){.col-lg-auto[data-v-5c179278]{flex:0 0 auto;width:auto}.col-lg-1[data-v-5c179278]{flex:0 0 auto;width:8.33333333%}.col-lg-2[data-v-5c179278]{flex:0 0 auto;width:16.66666667%}.col-lg-3[data-v-5c179278]{flex:0 0 auto;width:25%}.col-lg-4[data-v-5c179278]{flex:0 0 auto;width:33.33333333%}.col-lg-5[data-v-5c179278]{flex:0 0 auto;width:41.66666667%}.col-lg-6[data-v-5c179278]{flex:0 0 auto;width:50%}.col-lg-7[data-v-5c179278]{flex:0 0 auto;width:58.33333333%}.col-lg-8[data-v-5c179278]{flex:0 0 auto;width:66.66666667%}.col-lg-9[data-v-5c179278]{flex:0 0 auto;width:75%}.col-lg-10[data-v-5c179278]{flex:0 0 auto;width:83.33333333%}.col-lg-11[data-v-5c179278]{flex:0 0 auto;width:91.66666667%}.col-lg-12[data-v-5c179278]{flex:0 0 auto;width:100%}.offset-lg-0[data-v-5c179278]{margin-left:0}.offset-lg-1[data-v-5c179278]{margin-left:8.33333333%}.offset-lg-2[data-v-5c179278]{margin-left:16.66666667%}.offset-lg-3[data-v-5c179278]{margin-left:25%}.offset-lg-4[data-v-5c179278]{margin-left:33.33333333%}.offset-lg-5[data-v-5c179278]{margin-left:41.66666667%}.offset-lg-6[data-v-5c179278]{margin-left:50%}.offset-lg-7[data-v-5c179278]{margin-left:58.33333333%}.offset-lg-8[data-v-5c179278]{margin-left:66.66666667%}.offset-lg-9[data-v-5c179278]{margin-left:75%}.offset-lg-10[data-v-5c179278]{margin-left:83.33333333%}.offset-lg-11[data-v-5c179278]{margin-left:91.66666667%}.g-lg-0[data-v-5c179278],.gx-lg-0[data-v-5c179278]{--bs-gutter-x:0}.g-lg-0[data-v-5c179278],.gy-lg-0[data-v-5c179278]{--bs-gutter-y:0}.g-lg-1[data-v-5c179278],.gx-lg-1[data-v-5c179278]{--bs-gutter-x:0.25rem}.g-lg-1[data-v-5c179278],.gy-lg-1[data-v-5c179278]{--bs-gutter-y:0.25rem}.g-lg-2[data-v-5c179278],.gx-lg-2[data-v-5c179278]{--bs-gutter-x:0.5rem}.g-lg-2[data-v-5c179278],.gy-lg-2[data-v-5c179278]{--bs-gutter-y:0.5rem}.g-lg-3[data-v-5c179278],.gx-lg-3[data-v-5c179278]{--bs-gutter-x:1rem}.g-lg-3[data-v-5c179278],.gy-lg-3[data-v-5c179278]{--bs-gutter-y:1rem}.g-lg-4[data-v-5c179278],.gx-lg-4[data-v-5c179278]{--bs-gutter-x:1.5rem}.g-lg-4[data-v-5c179278],.gy-lg-4[data-v-5c179278]{--bs-gutter-y:1.5rem}.g-lg-5[data-v-5c179278],.gx-lg-5[data-v-5c179278]{--bs-gutter-x:3rem}.g-lg-5[data-v-5c179278],.gy-lg-5[data-v-5c179278]{--bs-gutter-y:3rem}}@media(min-width:1200px){.col-xl-auto[data-v-5c179278]{flex:0 0 auto;width:auto}.col-xl-1[data-v-5c179278]{flex:0 0 auto;width:8.33333333%}.col-xl-2[data-v-5c179278]{flex:0 0 auto;width:16.66666667%}.col-xl-3[data-v-5c179278]{flex:0 0 auto;width:25%}.col-xl-4[data-v-5c179278]{flex:0 0 auto;width:33.33333333%}.col-xl-5[data-v-5c179278]{flex:0 0 auto;width:41.66666667%}.col-xl-6[data-v-5c179278]{flex:0 0 auto;width:50%}.col-xl-7[data-v-5c179278]{flex:0 0 auto;width:58.33333333%}.col-xl-8[data-v-5c179278]{flex:0 0 auto;width:66.66666667%}.col-xl-9[data-v-5c179278]{flex:0 0 auto;width:75%}.col-xl-10[data-v-5c179278]{flex:0 0 auto;width:83.33333333%}.col-xl-11[data-v-5c179278]{flex:0 0 auto;width:91.66666667%}.col-xl-12[data-v-5c179278]{flex:0 0 auto;width:100%}.offset-xl-0[data-v-5c179278]{margin-left:0}.offset-xl-1[data-v-5c179278]{margin-left:8.33333333%}.offset-xl-2[data-v-5c179278]{margin-left:16.66666667%}.offset-xl-3[data-v-5c179278]{margin-left:25%}.offset-xl-4[data-v-5c179278]{margin-left:33.33333333%}.offset-xl-5[data-v-5c179278]{margin-left:41.66666667%}.offset-xl-6[data-v-5c179278]{margin-left:50%}.offset-xl-7[data-v-5c179278]{margin-left:58.33333333%}.offset-xl-8[data-v-5c179278]{margin-left:66.66666667%}.offset-xl-9[data-v-5c179278]{margin-left:75%}.offset-xl-10[data-v-5c179278]{margin-left:83.33333333%}.offset-xl-11[data-v-5c179278]{margin-left:91.66666667%}.g-xl-0[data-v-5c179278],.gx-xl-0[data-v-5c179278]{--bs-gutter-x:0}.g-xl-0[data-v-5c179278],.gy-xl-0[data-v-5c179278]{--bs-gutter-y:0}.g-xl-1[data-v-5c179278],.gx-xl-1[data-v-5c179278]{--bs-gutter-x:0.25rem}.g-xl-1[data-v-5c179278],.gy-xl-1[data-v-5c179278]{--bs-gutter-y:0.25rem}.g-xl-2[data-v-5c179278],.gx-xl-2[data-v-5c179278]{--bs-gutter-x:0.5rem}.g-xl-2[data-v-5c179278],.gy-xl-2[data-v-5c179278]{--bs-gutter-y:0.5rem}.g-xl-3[data-v-5c179278],.gx-xl-3[data-v-5c179278]{--bs-gutter-x:1rem}.g-xl-3[data-v-5c179278],.gy-xl-3[data-v-5c179278]{--bs-gutter-y:1rem}.g-xl-4[data-v-5c179278],.gx-xl-4[data-v-5c179278]{--bs-gutter-x:1.5rem}.g-xl-4[data-v-5c179278],.gy-xl-4[data-v-5c179278]{--bs-gutter-y:1.5rem}.g-xl-5[data-v-5c179278],.gx-xl-5[data-v-5c179278]{--bs-gutter-x:3rem}.g-xl-5[data-v-5c179278],.gy-xl-5[data-v-5c179278]{--bs-gutter-y:3rem}}@media(min-width:1400px){.col-xxl-auto[data-v-5c179278]{flex:0 0 auto;width:auto}.col-xxl-1[data-v-5c179278]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[data-v-5c179278]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[data-v-5c179278]{flex:0 0 auto;width:25%}.col-xxl-4[data-v-5c179278]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[data-v-5c179278]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[data-v-5c179278]{flex:0 0 auto;width:50%}.col-xxl-7[data-v-5c179278]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[data-v-5c179278]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[data-v-5c179278]{flex:0 0 auto;width:75%}.col-xxl-10[data-v-5c179278]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[data-v-5c179278]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[data-v-5c179278]{flex:0 0 auto;width:100%}.offset-xxl-0[data-v-5c179278]{margin-left:0}.offset-xxl-1[data-v-5c179278]{margin-left:8.33333333%}.offset-xxl-2[data-v-5c179278]{margin-left:16.66666667%}.offset-xxl-3[data-v-5c179278]{margin-left:25%}.offset-xxl-4[data-v-5c179278]{margin-left:33.33333333%}.offset-xxl-5[data-v-5c179278]{margin-left:41.66666667%}.offset-xxl-6[data-v-5c179278]{margin-left:50%}.offset-xxl-7[data-v-5c179278]{margin-left:58.33333333%}.offset-xxl-8[data-v-5c179278]{margin-left:66.66666667%}.offset-xxl-9[data-v-5c179278]{margin-left:75%}.offset-xxl-10[data-v-5c179278]{margin-left:83.33333333%}.offset-xxl-11[data-v-5c179278]{margin-left:91.66666667%}.g-xxl-0[data-v-5c179278],.gx-xxl-0[data-v-5c179278]{--bs-gutter-x:0}.g-xxl-0[data-v-5c179278],.gy-xxl-0[data-v-5c179278]{--bs-gutter-y:0}.g-xxl-1[data-v-5c179278],.gx-xxl-1[data-v-5c179278]{--bs-gutter-x:0.25rem}.g-xxl-1[data-v-5c179278],.gy-xxl-1[data-v-5c179278]{--bs-gutter-y:0.25rem}.g-xxl-2[data-v-5c179278],.gx-xxl-2[data-v-5c179278]{--bs-gutter-x:0.5rem}.g-xxl-2[data-v-5c179278],.gy-xxl-2[data-v-5c179278]{--bs-gutter-y:0.5rem}.g-xxl-3[data-v-5c179278],.gx-xxl-3[data-v-5c179278]{--bs-gutter-x:1rem}.g-xxl-3[data-v-5c179278],.gy-xxl-3[data-v-5c179278]{--bs-gutter-y:1rem}.g-xxl-4[data-v-5c179278],.gx-xxl-4[data-v-5c179278]{--bs-gutter-x:1.5rem}.g-xxl-4[data-v-5c179278],.gy-xxl-4[data-v-5c179278]{--bs-gutter-y:1.5rem}.g-xxl-5[data-v-5c179278],.gx-xxl-5[data-v-5c179278]{--bs-gutter-x:3rem}.g-xxl-5[data-v-5c179278],.gy-xxl-5[data-v-5c179278]{--bs-gutter-y:3rem}}.container[data-v-5c179278],.container-fluid[data-v-5c179278],.container-lg[data-v-5c179278],.container-md[data-v-5c179278],.container-sm[data-v-5c179278],.container-xl[data-v-5c179278],.container-xxl[data-v-5c179278]{width:100%;padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media(min-width:576px){.container[data-v-5c179278],.container-sm[data-v-5c179278]{max-width:540px}}@media(min-width:768px){.container[data-v-5c179278],.container-md[data-v-5c179278],.container-sm[data-v-5c179278]{max-width:720px}}@media(min-width:992px){.container[data-v-5c179278],.container-lg[data-v-5c179278],.container-md[data-v-5c179278],.container-sm[data-v-5c179278]{max-width:960px}}@media(min-width:1200px){.container[data-v-5c179278],.container-lg[data-v-5c179278],.container-md[data-v-5c179278],.container-sm[data-v-5c179278],.container-xl[data-v-5c179278]{max-width:1140px}}@media(min-width:1400px){.container[data-v-5c179278],.container-lg[data-v-5c179278],.container-md[data-v-5c179278],.container-sm[data-v-5c179278],.container-xl[data-v-5c179278],.container-xxl[data-v-5c179278]{max-width:1320px}}.row-fixed[data-v-5c179278]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-5c179278],.row-fixed.text-container h2[data-v-5c179278],.row-fixed.text-container p[data-v-5c179278]{text-align:center;text-transform:uppercase}.row-fixed.video-container[data-v-5c179278]{top:5vh;opacity:1;height:100vh;z-index:0}@media(min-width:768px){.row-fixed.video-container[data-v-5c179278]{top:0}}.row-fixed.video-container .col[data-v-5c179278]{margin:0;padding:0;width:100%;height:100%}",""]),t.exports=c}}]);