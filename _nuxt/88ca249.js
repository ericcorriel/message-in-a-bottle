(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{312:function(t,d,e){"use strict";var o=e(17),l=e(8),r=e(82),v=e(22),n=e(13),f=e(60),x=e(138),m=e(80),c=e(7),w=e(61),h=e(81).f,y=e(36).f,k=e(19).f,z=e(319).trim,_="Number",I=l.Number,N=I.prototype,E=f(w(N))==_,A=function(t){var d,e,o,l,r,v,n,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(d=(f=z(f)).charCodeAt(0))||45===d){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===d){switch(f.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+f}for(v=(r=f.slice(2)).length,n=0;n<v;n++)if((code=r.charCodeAt(n))<48||code>l)return NaN;return parseInt(r,o)}return+f};if(r(_,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var C,F=function(t){var d=arguments.length<1?0:t,e=this;return e instanceof F&&(E?c((function(){N.valueOf.call(e)})):f(e)!=_)?x(new I(A(d)),e,F):A(d)},M=o?h(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;M.length>S;S++)n(I,C=M[S])&&!n(F,C)&&k(F,C,y(I,C));F.prototype=N,N.constructor=F,v(l,_,F)}},319:function(t,d,e){var o=e(31),l="["+e(320)+"]",r=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),n=function(t){return function(d){var e=String(o(d));return 1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(v,"")),e}};t.exports={start:n(1),end:n(2),trim:n(3)}},320:function(t,d){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},350:function(t,d,e){var content=e(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("a6b7dbf0",content,!0,{sourceMap:!1})},354:function(t,d,e){"use strict";e.r(d);e(312);var o=e(59),l=Object(o.b)({name:"YearDisintegrated",props:{yearAsInt:{type:Number,default:(new Date).getFullYear()},disintegrated:{type:Number,default:0}}}),r=(e(359),e(58)),component=Object(r.a)(l,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",{staticClass:"row-fixed text-container top"},[e("h1",[e("span",{staticClass:"body-copy"},[t._v("It’s ")]),t._v(" "),e("span",{staticClass:"number-text",attrs:{id:"year"}},[t._v(t._s(t.yearAsInt))]),t._v(" "),e("span",{staticClass:"body-copy"},[t._v("and this bottle is")]),t._v(" "),e("span",{staticClass:"number-text",attrs:{id:"disintegrated"}},[t._v(t._s((Math.round(100*t.disintegrated)/100).toFixed(2))+"%")]),t._v(" "),e("span",{staticClass:"body-copy"},[t._v("disintegrated")])])])}),[],!1,null,"701a077d",null);d.default=component.exports},359:function(t,d,e){"use strict";e(350)},360:function(t,d,e){var o=e(51)(!1);o.push([t.i,'body[data-v-701a077d],h1[data-v-701a077d],h2[data-v-701a077d],h3[data-v-701a077d],h4[data-v-701a077d],h5[data-v-701a077d],h6[data-v-701a077d],html[data-v-701a077d],html>body[data-v-701a077d],p[data-v-701a077d]{color:#fff;font-family:"Oswald"}a[data-v-701a077d],a[data-v-701a077d]:visited{color:#23adff;text-decoration:none}a[data-v-701a077d]:hover,a[data-v-701a077d]:visited:hover{text-decoration:underline;cursor:default;color:#23adff}.row-fixed[data-v-701a077d]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-701a077d],.row-fixed.text-container h2[data-v-701a077d],.row-fixed.text-container p[data-v-701a077d]{text-align:center;text-transform:uppercase}*[data-v-701a077d],[data-v-701a077d]:after,[data-v-701a077d]:before{box-sizing:border-box}@media(prefers-reduced-motion:no-preference){[data-v-701a077d]:root{scroll-behavior:smooth}}body[data-v-701a077d]{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr[data-v-701a077d]{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr[data-v-701a077d]:not([size]){height:1px}h1[data-v-701a077d],h2[data-v-701a077d],h3[data-v-701a077d],h4[data-v-701a077d],h5[data-v-701a077d],h6[data-v-701a077d]{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1[data-v-701a077d]{font-size:calc(1.375rem + 1.5vw)}@media(min-width:1200px){h1[data-v-701a077d]{font-size:2.5rem}}h2[data-v-701a077d]{font-size:calc(1.325rem + .9vw)}@media(min-width:1200px){h2[data-v-701a077d]{font-size:2rem}}h3[data-v-701a077d]{font-size:calc(1.3rem + .6vw)}@media(min-width:1200px){h3[data-v-701a077d]{font-size:1.75rem}}h4[data-v-701a077d]{font-size:calc(1.275rem + .3vw)}@media(min-width:1200px){h4[data-v-701a077d]{font-size:1.5rem}}h5[data-v-701a077d]{font-size:1.25rem}h6[data-v-701a077d]{font-size:1rem}p[data-v-701a077d]{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title][data-v-701a077d],abbr[title][data-v-701a077d]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address[data-v-701a077d]{margin-bottom:1rem;font-style:normal;line-height:inherit}ol[data-v-701a077d],ul[data-v-701a077d]{padding-left:2rem}dl[data-v-701a077d],ol[data-v-701a077d],ul[data-v-701a077d]{margin-top:0;margin-bottom:1rem}ol ol[data-v-701a077d],ol ul[data-v-701a077d],ul ol[data-v-701a077d],ul ul[data-v-701a077d]{margin-bottom:0}dt[data-v-701a077d]{font-weight:700}dd[data-v-701a077d]{margin-bottom:.5rem;margin-left:0}blockquote[data-v-701a077d]{margin:0 0 1rem}b[data-v-701a077d],strong[data-v-701a077d]{font-weight:bolder}small[data-v-701a077d]{font-size:.875em}mark[data-v-701a077d]{padding:.2em;background-color:#fcf8e3}sub[data-v-701a077d],sup[data-v-701a077d]{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub[data-v-701a077d]{bottom:-.25em}sup[data-v-701a077d]{top:-.5em}a[data-v-701a077d]{color:#0d6efd;text-decoration:underline}a[data-v-701a077d]:hover{color:#0a58ca}a[data-v-701a077d]:not([href]):not([class]),a[data-v-701a077d]:not([href]):not([class]):hover{color:inherit;text-decoration:none}code[data-v-701a077d],kbd[data-v-701a077d],pre[data-v-701a077d],samp[data-v-701a077d]{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre[data-v-701a077d]{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code[data-v-701a077d]{font-size:inherit;color:inherit;word-break:normal}code[data-v-701a077d]{font-size:.875em;color:#d63384;word-wrap:break-word}a>code[data-v-701a077d]{color:inherit}kbd[data-v-701a077d]{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd[data-v-701a077d]{padding:0;font-size:1em;font-weight:700}figure[data-v-701a077d]{margin:0 0 1rem}img[data-v-701a077d],svg[data-v-701a077d]{vertical-align:middle}table[data-v-701a077d]{caption-side:bottom;border-collapse:collapse}caption[data-v-701a077d]{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th[data-v-701a077d]{text-align:inherit;text-align:-webkit-match-parent}tbody[data-v-701a077d],td[data-v-701a077d],tfoot[data-v-701a077d],th[data-v-701a077d],thead[data-v-701a077d],tr[data-v-701a077d]{border:0 solid;border-color:inherit}label[data-v-701a077d]{display:inline-block}button[data-v-701a077d]{border-radius:0}button[data-v-701a077d]:focus:not(.focus-visible),button[data-v-701a077d]:focus:not(:focus-visible){outline:0}button[data-v-701a077d],input[data-v-701a077d],optgroup[data-v-701a077d],select[data-v-701a077d],textarea[data-v-701a077d]{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button[data-v-701a077d],select[data-v-701a077d]{text-transform:none}[role=button][data-v-701a077d]{cursor:pointer}select[data-v-701a077d]{word-wrap:normal}select[data-v-701a077d]:disabled{opacity:1}[list][data-v-701a077d]::-webkit-calendar-picker-indicator{display:none}[type=button][data-v-701a077d],[type=reset][data-v-701a077d],[type=submit][data-v-701a077d],button[data-v-701a077d]{-webkit-appearance:button}[type=button][data-v-701a077d]:not(:disabled),[type=reset][data-v-701a077d]:not(:disabled),[type=submit][data-v-701a077d]:not(:disabled),button[data-v-701a077d]:not(:disabled){cursor:pointer}[data-v-701a077d]::-moz-focus-inner{padding:0;border-style:none}textarea[data-v-701a077d]{resize:vertical}fieldset[data-v-701a077d]{min-width:0;padding:0;margin:0;border:0}legend[data-v-701a077d]{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media(min-width:1200px){legend[data-v-701a077d]{font-size:1.5rem}}legend+*[data-v-701a077d]{clear:left}[data-v-701a077d]::-webkit-datetime-edit-day-field,[data-v-701a077d]::-webkit-datetime-edit-fields-wrapper,[data-v-701a077d]::-webkit-datetime-edit-hour-field,[data-v-701a077d]::-webkit-datetime-edit-minute,[data-v-701a077d]::-webkit-datetime-edit-month-field,[data-v-701a077d]::-webkit-datetime-edit-text,[data-v-701a077d]::-webkit-datetime-edit-year-field{padding:0}[data-v-701a077d]::-webkit-inner-spin-button{height:auto}[type=search][data-v-701a077d]{outline-offset:-2px;-webkit-appearance:textfield}[data-v-701a077d]::-webkit-search-decoration{-webkit-appearance:none}[data-v-701a077d]::-webkit-color-swatch-wrapper{padding:0}[data-v-701a077d]::file-selector-button{font:inherit}[data-v-701a077d]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output[data-v-701a077d]{display:inline-block}iframe[data-v-701a077d]{border:0}summary[data-v-701a077d]{display:list-item;cursor:pointer}progress[data-v-701a077d]{vertical-align:baseline}[hidden][data-v-701a077d]{display:none!important}.row[data-v-701a077d]{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-right:calc(var(--bs-gutter-x)*-0.5);margin-left:calc(var(--bs-gutter-x)*-0.5)}.row>*[data-v-701a077d]{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*0.5);padding-left:calc(var(--bs-gutter-x)*0.5);margin-top:var(--bs-gutter-y)}.col[data-v-701a077d]{flex:1 0 0%}.row-cols-auto>*[data-v-701a077d]{flex:0 0 auto;width:auto}.row-cols-1>*[data-v-701a077d]{flex:0 0 auto;width:100%}.row-cols-2>*[data-v-701a077d]{flex:0 0 auto;width:50%}.row-cols-3>*[data-v-701a077d]{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*[data-v-701a077d]{flex:0 0 auto;width:25%}.row-cols-5>*[data-v-701a077d]{flex:0 0 auto;width:20%}.row-cols-6>*[data-v-701a077d]{flex:0 0 auto;width:16.6666666667%}@media(min-width:576px){.col-sm[data-v-701a077d]{flex:1 0 0%}.row-cols-sm-auto>*[data-v-701a077d]{flex:0 0 auto;width:auto}.row-cols-sm-1>*[data-v-701a077d]{flex:0 0 auto;width:100%}.row-cols-sm-2>*[data-v-701a077d]{flex:0 0 auto;width:50%}.row-cols-sm-3>*[data-v-701a077d]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*[data-v-701a077d]{flex:0 0 auto;width:25%}.row-cols-sm-5>*[data-v-701a077d]{flex:0 0 auto;width:20%}.row-cols-sm-6>*[data-v-701a077d]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:768px){.col-md[data-v-701a077d]{flex:1 0 0%}.row-cols-md-auto>*[data-v-701a077d]{flex:0 0 auto;width:auto}.row-cols-md-1>*[data-v-701a077d]{flex:0 0 auto;width:100%}.row-cols-md-2>*[data-v-701a077d]{flex:0 0 auto;width:50%}.row-cols-md-3>*[data-v-701a077d]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*[data-v-701a077d]{flex:0 0 auto;width:25%}.row-cols-md-5>*[data-v-701a077d]{flex:0 0 auto;width:20%}.row-cols-md-6>*[data-v-701a077d]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:992px){.col-lg[data-v-701a077d]{flex:1 0 0%}.row-cols-lg-auto>*[data-v-701a077d]{flex:0 0 auto;width:auto}.row-cols-lg-1>*[data-v-701a077d]{flex:0 0 auto;width:100%}.row-cols-lg-2>*[data-v-701a077d]{flex:0 0 auto;width:50%}.row-cols-lg-3>*[data-v-701a077d]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*[data-v-701a077d]{flex:0 0 auto;width:25%}.row-cols-lg-5>*[data-v-701a077d]{flex:0 0 auto;width:20%}.row-cols-lg-6>*[data-v-701a077d]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1200px){.col-xl[data-v-701a077d]{flex:1 0 0%}.row-cols-xl-auto>*[data-v-701a077d]{flex:0 0 auto;width:auto}.row-cols-xl-1>*[data-v-701a077d]{flex:0 0 auto;width:100%}.row-cols-xl-2>*[data-v-701a077d]{flex:0 0 auto;width:50%}.row-cols-xl-3>*[data-v-701a077d]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*[data-v-701a077d]{flex:0 0 auto;width:25%}.row-cols-xl-5>*[data-v-701a077d]{flex:0 0 auto;width:20%}.row-cols-xl-6>*[data-v-701a077d]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1400px){.col-xxl[data-v-701a077d]{flex:1 0 0%}.row-cols-xxl-auto>*[data-v-701a077d]{flex:0 0 auto;width:auto}.row-cols-xxl-1>*[data-v-701a077d]{flex:0 0 auto;width:100%}.row-cols-xxl-2>*[data-v-701a077d]{flex:0 0 auto;width:50%}.row-cols-xxl-3>*[data-v-701a077d]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*[data-v-701a077d]{flex:0 0 auto;width:25%}.row-cols-xxl-5>*[data-v-701a077d]{flex:0 0 auto;width:20%}.row-cols-xxl-6>*[data-v-701a077d]{flex:0 0 auto;width:16.6666666667%}}.col-auto[data-v-701a077d]{flex:0 0 auto;width:auto}.col-1[data-v-701a077d]{flex:0 0 auto;width:8.33333333%}.col-2[data-v-701a077d]{flex:0 0 auto;width:16.66666667%}.col-3[data-v-701a077d]{flex:0 0 auto;width:25%}.col-4[data-v-701a077d]{flex:0 0 auto;width:33.33333333%}.col-5[data-v-701a077d]{flex:0 0 auto;width:41.66666667%}.col-6[data-v-701a077d]{flex:0 0 auto;width:50%}.col-7[data-v-701a077d]{flex:0 0 auto;width:58.33333333%}.col-8[data-v-701a077d]{flex:0 0 auto;width:66.66666667%}.col-9[data-v-701a077d]{flex:0 0 auto;width:75%}.col-10[data-v-701a077d]{flex:0 0 auto;width:83.33333333%}.col-11[data-v-701a077d]{flex:0 0 auto;width:91.66666667%}.col-12[data-v-701a077d]{flex:0 0 auto;width:100%}.offset-1[data-v-701a077d]{margin-left:8.33333333%}.offset-2[data-v-701a077d]{margin-left:16.66666667%}.offset-3[data-v-701a077d]{margin-left:25%}.offset-4[data-v-701a077d]{margin-left:33.33333333%}.offset-5[data-v-701a077d]{margin-left:41.66666667%}.offset-6[data-v-701a077d]{margin-left:50%}.offset-7[data-v-701a077d]{margin-left:58.33333333%}.offset-8[data-v-701a077d]{margin-left:66.66666667%}.offset-9[data-v-701a077d]{margin-left:75%}.offset-10[data-v-701a077d]{margin-left:83.33333333%}.offset-11[data-v-701a077d]{margin-left:91.66666667%}.g-0[data-v-701a077d],.gx-0[data-v-701a077d]{--bs-gutter-x:0}.g-0[data-v-701a077d],.gy-0[data-v-701a077d]{--bs-gutter-y:0}.g-1[data-v-701a077d],.gx-1[data-v-701a077d]{--bs-gutter-x:0.25rem}.g-1[data-v-701a077d],.gy-1[data-v-701a077d]{--bs-gutter-y:0.25rem}.g-2[data-v-701a077d],.gx-2[data-v-701a077d]{--bs-gutter-x:0.5rem}.g-2[data-v-701a077d],.gy-2[data-v-701a077d]{--bs-gutter-y:0.5rem}.g-3[data-v-701a077d],.gx-3[data-v-701a077d]{--bs-gutter-x:1rem}.g-3[data-v-701a077d],.gy-3[data-v-701a077d]{--bs-gutter-y:1rem}.g-4[data-v-701a077d],.gx-4[data-v-701a077d]{--bs-gutter-x:1.5rem}.g-4[data-v-701a077d],.gy-4[data-v-701a077d]{--bs-gutter-y:1.5rem}.g-5[data-v-701a077d],.gx-5[data-v-701a077d]{--bs-gutter-x:3rem}.g-5[data-v-701a077d],.gy-5[data-v-701a077d]{--bs-gutter-y:3rem}@media(min-width:576px){.col-sm-auto[data-v-701a077d]{flex:0 0 auto;width:auto}.col-sm-1[data-v-701a077d]{flex:0 0 auto;width:8.33333333%}.col-sm-2[data-v-701a077d]{flex:0 0 auto;width:16.66666667%}.col-sm-3[data-v-701a077d]{flex:0 0 auto;width:25%}.col-sm-4[data-v-701a077d]{flex:0 0 auto;width:33.33333333%}.col-sm-5[data-v-701a077d]{flex:0 0 auto;width:41.66666667%}.col-sm-6[data-v-701a077d]{flex:0 0 auto;width:50%}.col-sm-7[data-v-701a077d]{flex:0 0 auto;width:58.33333333%}.col-sm-8[data-v-701a077d]{flex:0 0 auto;width:66.66666667%}.col-sm-9[data-v-701a077d]{flex:0 0 auto;width:75%}.col-sm-10[data-v-701a077d]{flex:0 0 auto;width:83.33333333%}.col-sm-11[data-v-701a077d]{flex:0 0 auto;width:91.66666667%}.col-sm-12[data-v-701a077d]{flex:0 0 auto;width:100%}.offset-sm-0[data-v-701a077d]{margin-left:0}.offset-sm-1[data-v-701a077d]{margin-left:8.33333333%}.offset-sm-2[data-v-701a077d]{margin-left:16.66666667%}.offset-sm-3[data-v-701a077d]{margin-left:25%}.offset-sm-4[data-v-701a077d]{margin-left:33.33333333%}.offset-sm-5[data-v-701a077d]{margin-left:41.66666667%}.offset-sm-6[data-v-701a077d]{margin-left:50%}.offset-sm-7[data-v-701a077d]{margin-left:58.33333333%}.offset-sm-8[data-v-701a077d]{margin-left:66.66666667%}.offset-sm-9[data-v-701a077d]{margin-left:75%}.offset-sm-10[data-v-701a077d]{margin-left:83.33333333%}.offset-sm-11[data-v-701a077d]{margin-left:91.66666667%}.g-sm-0[data-v-701a077d],.gx-sm-0[data-v-701a077d]{--bs-gutter-x:0}.g-sm-0[data-v-701a077d],.gy-sm-0[data-v-701a077d]{--bs-gutter-y:0}.g-sm-1[data-v-701a077d],.gx-sm-1[data-v-701a077d]{--bs-gutter-x:0.25rem}.g-sm-1[data-v-701a077d],.gy-sm-1[data-v-701a077d]{--bs-gutter-y:0.25rem}.g-sm-2[data-v-701a077d],.gx-sm-2[data-v-701a077d]{--bs-gutter-x:0.5rem}.g-sm-2[data-v-701a077d],.gy-sm-2[data-v-701a077d]{--bs-gutter-y:0.5rem}.g-sm-3[data-v-701a077d],.gx-sm-3[data-v-701a077d]{--bs-gutter-x:1rem}.g-sm-3[data-v-701a077d],.gy-sm-3[data-v-701a077d]{--bs-gutter-y:1rem}.g-sm-4[data-v-701a077d],.gx-sm-4[data-v-701a077d]{--bs-gutter-x:1.5rem}.g-sm-4[data-v-701a077d],.gy-sm-4[data-v-701a077d]{--bs-gutter-y:1.5rem}.g-sm-5[data-v-701a077d],.gx-sm-5[data-v-701a077d]{--bs-gutter-x:3rem}.g-sm-5[data-v-701a077d],.gy-sm-5[data-v-701a077d]{--bs-gutter-y:3rem}}@media(min-width:768px){.col-md-auto[data-v-701a077d]{flex:0 0 auto;width:auto}.col-md-1[data-v-701a077d]{flex:0 0 auto;width:8.33333333%}.col-md-2[data-v-701a077d]{flex:0 0 auto;width:16.66666667%}.col-md-3[data-v-701a077d]{flex:0 0 auto;width:25%}.col-md-4[data-v-701a077d]{flex:0 0 auto;width:33.33333333%}.col-md-5[data-v-701a077d]{flex:0 0 auto;width:41.66666667%}.col-md-6[data-v-701a077d]{flex:0 0 auto;width:50%}.col-md-7[data-v-701a077d]{flex:0 0 auto;width:58.33333333%}.col-md-8[data-v-701a077d]{flex:0 0 auto;width:66.66666667%}.col-md-9[data-v-701a077d]{flex:0 0 auto;width:75%}.col-md-10[data-v-701a077d]{flex:0 0 auto;width:83.33333333%}.col-md-11[data-v-701a077d]{flex:0 0 auto;width:91.66666667%}.col-md-12[data-v-701a077d]{flex:0 0 auto;width:100%}.offset-md-0[data-v-701a077d]{margin-left:0}.offset-md-1[data-v-701a077d]{margin-left:8.33333333%}.offset-md-2[data-v-701a077d]{margin-left:16.66666667%}.offset-md-3[data-v-701a077d]{margin-left:25%}.offset-md-4[data-v-701a077d]{margin-left:33.33333333%}.offset-md-5[data-v-701a077d]{margin-left:41.66666667%}.offset-md-6[data-v-701a077d]{margin-left:50%}.offset-md-7[data-v-701a077d]{margin-left:58.33333333%}.offset-md-8[data-v-701a077d]{margin-left:66.66666667%}.offset-md-9[data-v-701a077d]{margin-left:75%}.offset-md-10[data-v-701a077d]{margin-left:83.33333333%}.offset-md-11[data-v-701a077d]{margin-left:91.66666667%}.g-md-0[data-v-701a077d],.gx-md-0[data-v-701a077d]{--bs-gutter-x:0}.g-md-0[data-v-701a077d],.gy-md-0[data-v-701a077d]{--bs-gutter-y:0}.g-md-1[data-v-701a077d],.gx-md-1[data-v-701a077d]{--bs-gutter-x:0.25rem}.g-md-1[data-v-701a077d],.gy-md-1[data-v-701a077d]{--bs-gutter-y:0.25rem}.g-md-2[data-v-701a077d],.gx-md-2[data-v-701a077d]{--bs-gutter-x:0.5rem}.g-md-2[data-v-701a077d],.gy-md-2[data-v-701a077d]{--bs-gutter-y:0.5rem}.g-md-3[data-v-701a077d],.gx-md-3[data-v-701a077d]{--bs-gutter-x:1rem}.g-md-3[data-v-701a077d],.gy-md-3[data-v-701a077d]{--bs-gutter-y:1rem}.g-md-4[data-v-701a077d],.gx-md-4[data-v-701a077d]{--bs-gutter-x:1.5rem}.g-md-4[data-v-701a077d],.gy-md-4[data-v-701a077d]{--bs-gutter-y:1.5rem}.g-md-5[data-v-701a077d],.gx-md-5[data-v-701a077d]{--bs-gutter-x:3rem}.g-md-5[data-v-701a077d],.gy-md-5[data-v-701a077d]{--bs-gutter-y:3rem}}@media(min-width:992px){.col-lg-auto[data-v-701a077d]{flex:0 0 auto;width:auto}.col-lg-1[data-v-701a077d]{flex:0 0 auto;width:8.33333333%}.col-lg-2[data-v-701a077d]{flex:0 0 auto;width:16.66666667%}.col-lg-3[data-v-701a077d]{flex:0 0 auto;width:25%}.col-lg-4[data-v-701a077d]{flex:0 0 auto;width:33.33333333%}.col-lg-5[data-v-701a077d]{flex:0 0 auto;width:41.66666667%}.col-lg-6[data-v-701a077d]{flex:0 0 auto;width:50%}.col-lg-7[data-v-701a077d]{flex:0 0 auto;width:58.33333333%}.col-lg-8[data-v-701a077d]{flex:0 0 auto;width:66.66666667%}.col-lg-9[data-v-701a077d]{flex:0 0 auto;width:75%}.col-lg-10[data-v-701a077d]{flex:0 0 auto;width:83.33333333%}.col-lg-11[data-v-701a077d]{flex:0 0 auto;width:91.66666667%}.col-lg-12[data-v-701a077d]{flex:0 0 auto;width:100%}.offset-lg-0[data-v-701a077d]{margin-left:0}.offset-lg-1[data-v-701a077d]{margin-left:8.33333333%}.offset-lg-2[data-v-701a077d]{margin-left:16.66666667%}.offset-lg-3[data-v-701a077d]{margin-left:25%}.offset-lg-4[data-v-701a077d]{margin-left:33.33333333%}.offset-lg-5[data-v-701a077d]{margin-left:41.66666667%}.offset-lg-6[data-v-701a077d]{margin-left:50%}.offset-lg-7[data-v-701a077d]{margin-left:58.33333333%}.offset-lg-8[data-v-701a077d]{margin-left:66.66666667%}.offset-lg-9[data-v-701a077d]{margin-left:75%}.offset-lg-10[data-v-701a077d]{margin-left:83.33333333%}.offset-lg-11[data-v-701a077d]{margin-left:91.66666667%}.g-lg-0[data-v-701a077d],.gx-lg-0[data-v-701a077d]{--bs-gutter-x:0}.g-lg-0[data-v-701a077d],.gy-lg-0[data-v-701a077d]{--bs-gutter-y:0}.g-lg-1[data-v-701a077d],.gx-lg-1[data-v-701a077d]{--bs-gutter-x:0.25rem}.g-lg-1[data-v-701a077d],.gy-lg-1[data-v-701a077d]{--bs-gutter-y:0.25rem}.g-lg-2[data-v-701a077d],.gx-lg-2[data-v-701a077d]{--bs-gutter-x:0.5rem}.g-lg-2[data-v-701a077d],.gy-lg-2[data-v-701a077d]{--bs-gutter-y:0.5rem}.g-lg-3[data-v-701a077d],.gx-lg-3[data-v-701a077d]{--bs-gutter-x:1rem}.g-lg-3[data-v-701a077d],.gy-lg-3[data-v-701a077d]{--bs-gutter-y:1rem}.g-lg-4[data-v-701a077d],.gx-lg-4[data-v-701a077d]{--bs-gutter-x:1.5rem}.g-lg-4[data-v-701a077d],.gy-lg-4[data-v-701a077d]{--bs-gutter-y:1.5rem}.g-lg-5[data-v-701a077d],.gx-lg-5[data-v-701a077d]{--bs-gutter-x:3rem}.g-lg-5[data-v-701a077d],.gy-lg-5[data-v-701a077d]{--bs-gutter-y:3rem}}@media(min-width:1200px){.col-xl-auto[data-v-701a077d]{flex:0 0 auto;width:auto}.col-xl-1[data-v-701a077d]{flex:0 0 auto;width:8.33333333%}.col-xl-2[data-v-701a077d]{flex:0 0 auto;width:16.66666667%}.col-xl-3[data-v-701a077d]{flex:0 0 auto;width:25%}.col-xl-4[data-v-701a077d]{flex:0 0 auto;width:33.33333333%}.col-xl-5[data-v-701a077d]{flex:0 0 auto;width:41.66666667%}.col-xl-6[data-v-701a077d]{flex:0 0 auto;width:50%}.col-xl-7[data-v-701a077d]{flex:0 0 auto;width:58.33333333%}.col-xl-8[data-v-701a077d]{flex:0 0 auto;width:66.66666667%}.col-xl-9[data-v-701a077d]{flex:0 0 auto;width:75%}.col-xl-10[data-v-701a077d]{flex:0 0 auto;width:83.33333333%}.col-xl-11[data-v-701a077d]{flex:0 0 auto;width:91.66666667%}.col-xl-12[data-v-701a077d]{flex:0 0 auto;width:100%}.offset-xl-0[data-v-701a077d]{margin-left:0}.offset-xl-1[data-v-701a077d]{margin-left:8.33333333%}.offset-xl-2[data-v-701a077d]{margin-left:16.66666667%}.offset-xl-3[data-v-701a077d]{margin-left:25%}.offset-xl-4[data-v-701a077d]{margin-left:33.33333333%}.offset-xl-5[data-v-701a077d]{margin-left:41.66666667%}.offset-xl-6[data-v-701a077d]{margin-left:50%}.offset-xl-7[data-v-701a077d]{margin-left:58.33333333%}.offset-xl-8[data-v-701a077d]{margin-left:66.66666667%}.offset-xl-9[data-v-701a077d]{margin-left:75%}.offset-xl-10[data-v-701a077d]{margin-left:83.33333333%}.offset-xl-11[data-v-701a077d]{margin-left:91.66666667%}.g-xl-0[data-v-701a077d],.gx-xl-0[data-v-701a077d]{--bs-gutter-x:0}.g-xl-0[data-v-701a077d],.gy-xl-0[data-v-701a077d]{--bs-gutter-y:0}.g-xl-1[data-v-701a077d],.gx-xl-1[data-v-701a077d]{--bs-gutter-x:0.25rem}.g-xl-1[data-v-701a077d],.gy-xl-1[data-v-701a077d]{--bs-gutter-y:0.25rem}.g-xl-2[data-v-701a077d],.gx-xl-2[data-v-701a077d]{--bs-gutter-x:0.5rem}.g-xl-2[data-v-701a077d],.gy-xl-2[data-v-701a077d]{--bs-gutter-y:0.5rem}.g-xl-3[data-v-701a077d],.gx-xl-3[data-v-701a077d]{--bs-gutter-x:1rem}.g-xl-3[data-v-701a077d],.gy-xl-3[data-v-701a077d]{--bs-gutter-y:1rem}.g-xl-4[data-v-701a077d],.gx-xl-4[data-v-701a077d]{--bs-gutter-x:1.5rem}.g-xl-4[data-v-701a077d],.gy-xl-4[data-v-701a077d]{--bs-gutter-y:1.5rem}.g-xl-5[data-v-701a077d],.gx-xl-5[data-v-701a077d]{--bs-gutter-x:3rem}.g-xl-5[data-v-701a077d],.gy-xl-5[data-v-701a077d]{--bs-gutter-y:3rem}}@media(min-width:1400px){.col-xxl-auto[data-v-701a077d]{flex:0 0 auto;width:auto}.col-xxl-1[data-v-701a077d]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[data-v-701a077d]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[data-v-701a077d]{flex:0 0 auto;width:25%}.col-xxl-4[data-v-701a077d]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[data-v-701a077d]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[data-v-701a077d]{flex:0 0 auto;width:50%}.col-xxl-7[data-v-701a077d]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[data-v-701a077d]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[data-v-701a077d]{flex:0 0 auto;width:75%}.col-xxl-10[data-v-701a077d]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[data-v-701a077d]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[data-v-701a077d]{flex:0 0 auto;width:100%}.offset-xxl-0[data-v-701a077d]{margin-left:0}.offset-xxl-1[data-v-701a077d]{margin-left:8.33333333%}.offset-xxl-2[data-v-701a077d]{margin-left:16.66666667%}.offset-xxl-3[data-v-701a077d]{margin-left:25%}.offset-xxl-4[data-v-701a077d]{margin-left:33.33333333%}.offset-xxl-5[data-v-701a077d]{margin-left:41.66666667%}.offset-xxl-6[data-v-701a077d]{margin-left:50%}.offset-xxl-7[data-v-701a077d]{margin-left:58.33333333%}.offset-xxl-8[data-v-701a077d]{margin-left:66.66666667%}.offset-xxl-9[data-v-701a077d]{margin-left:75%}.offset-xxl-10[data-v-701a077d]{margin-left:83.33333333%}.offset-xxl-11[data-v-701a077d]{margin-left:91.66666667%}.g-xxl-0[data-v-701a077d],.gx-xxl-0[data-v-701a077d]{--bs-gutter-x:0}.g-xxl-0[data-v-701a077d],.gy-xxl-0[data-v-701a077d]{--bs-gutter-y:0}.g-xxl-1[data-v-701a077d],.gx-xxl-1[data-v-701a077d]{--bs-gutter-x:0.25rem}.g-xxl-1[data-v-701a077d],.gy-xxl-1[data-v-701a077d]{--bs-gutter-y:0.25rem}.g-xxl-2[data-v-701a077d],.gx-xxl-2[data-v-701a077d]{--bs-gutter-x:0.5rem}.g-xxl-2[data-v-701a077d],.gy-xxl-2[data-v-701a077d]{--bs-gutter-y:0.5rem}.g-xxl-3[data-v-701a077d],.gx-xxl-3[data-v-701a077d]{--bs-gutter-x:1rem}.g-xxl-3[data-v-701a077d],.gy-xxl-3[data-v-701a077d]{--bs-gutter-y:1rem}.g-xxl-4[data-v-701a077d],.gx-xxl-4[data-v-701a077d]{--bs-gutter-x:1.5rem}.g-xxl-4[data-v-701a077d],.gy-xxl-4[data-v-701a077d]{--bs-gutter-y:1.5rem}.g-xxl-5[data-v-701a077d],.gx-xxl-5[data-v-701a077d]{--bs-gutter-x:3rem}.g-xxl-5[data-v-701a077d],.gy-xxl-5[data-v-701a077d]{--bs-gutter-y:3rem}}.container[data-v-701a077d],.container-fluid[data-v-701a077d],.container-lg[data-v-701a077d],.container-md[data-v-701a077d],.container-sm[data-v-701a077d],.container-xl[data-v-701a077d],.container-xxl[data-v-701a077d]{width:100%;padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media(min-width:576px){.container[data-v-701a077d],.container-sm[data-v-701a077d]{max-width:540px}}@media(min-width:768px){.container[data-v-701a077d],.container-md[data-v-701a077d],.container-sm[data-v-701a077d]{max-width:720px}}@media(min-width:992px){.container[data-v-701a077d],.container-lg[data-v-701a077d],.container-md[data-v-701a077d],.container-sm[data-v-701a077d]{max-width:960px}}@media(min-width:1200px){.container[data-v-701a077d],.container-lg[data-v-701a077d],.container-md[data-v-701a077d],.container-sm[data-v-701a077d],.container-xl[data-v-701a077d]{max-width:1140px}}@media(min-width:1400px){.container[data-v-701a077d],.container-lg[data-v-701a077d],.container-md[data-v-701a077d],.container-sm[data-v-701a077d],.container-xl[data-v-701a077d],.container-xxl[data-v-701a077d]{max-width:1320px}}.text-container[data-v-701a077d]{font-size:10vw;line-height:0}.text-container .body-copy[data-v-701a077d]{-webkit-text-stroke:1px #000;font-size:8vw}@media(min-width:400px){.text-container .body-copy[data-v-701a077d]{font-size:8vw}}@media(min-width:576px){.text-container .body-copy[data-v-701a077d]{font-size:6vw}}@media(min-width:768px){.text-container .body-copy[data-v-701a077d]{font-size:4vw}}@media(min-width:992px){.text-container .body-copy[data-v-701a077d]{font-size:2.9vw}}@media(min-width:1200px){.text-container .body-copy[data-v-701a077d]{font-size:2.5vw}}.text-container #year[data-v-701a077d]{font-size:20vw;line-height:0;font-size:28vw}@media(min-width:400px){.text-container #year[data-v-701a077d]{font-size:28vw}}@media(min-width:576px){.text-container #year[data-v-701a077d]{font-size:22vw}}@media(min-width:768px){.text-container #year[data-v-701a077d]{font-size:20vw}}@media(min-width:992px){.text-container #year[data-v-701a077d]{font-size:10vw}}@media(min-width:1200px){.text-container #year[data-v-701a077d]{font-size:11vw}}.text-container #disintegrated[data-v-701a077d]{font-size:18vw}@media(min-width:400px){.text-container #disintegrated[data-v-701a077d]{font-size:16vw}}@media(min-width:576px){.text-container #disintegrated[data-v-701a077d]{font-size:11vw}}@media(min-width:768px){.text-container #disintegrated[data-v-701a077d]{font-size:10vw}}@media(min-width:992px){.text-container #disintegrated[data-v-701a077d]{font-size:7vw}}@media(min-width:1200px){.text-container #disintegrated[data-v-701a077d]{font-size:6vw}}.text-container.top[data-v-701a077d]{top:4vh;top:10vh;align-items:center}@media(min-width:768px){.text-container.top[data-v-701a077d]{top:4vh}}.text-container .number-text[data-v-701a077d]{font-family:"Azeret Mono"}',""]),t.exports=o}}]);