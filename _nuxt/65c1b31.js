(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(t,e,d){var content=d(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(50).default)("7c4cf400",content,!0,{sourceMap:!1})},362:function(t,e,d){"use strict";d.r(e);d(41);var c=d(58),o=d(315),l=d(328),r=d(320),v=d(314),n=d(345),x=Object(c.b)({name:"YearDisintegrated",setup:function(){var t=Object(c.f)(r.a.get("year")),e=Object(c.f)(r.a.get("percentDisintegrated"));return Object(c.i)((function(){return r.a.state}),(function(d){t.value=d.year,e.value=d.percentDisintegrated}),{deep:!0}),Object(c.i)((function(){return o.a.value}),(function(d){var c,o=l.a.filter((function(t){return t.tabIndex===d}));null!==(c=o[0])&&void 0!==c&&c.year&&(t.value=o[0].year,e.value=Object(n.a)(o[0].year),v.a.set("yearAtCurrentScroll",o[0].year))})),{mutableYear:t,mutableDisintegrated:e}}}),f=(d(369),d(57)),component=Object(f.a)(x,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"row-fixed text-container top"},[d("h1",[d("span",{staticClass:"body-copy",attrs:{"aria-live":"polite"}},[t._v("It’s ")]),t._v(" "),d("span",{staticClass:"number-text",attrs:{id:"year"}},[t._v(t._s(t.mutableYear))]),t._v(" "),d("span",{staticClass:"body-copy"},[t._v("and the bottle is ")]),t._v(" "),d("span",{staticClass:"number-text",attrs:{id:"disintegrated-percent"}},[t._v(t._s((Math.round(100*t.mutableDisintegrated)/100).toFixed(1))+"%")]),t._v(" "),d("span",{staticClass:"body-copy",attrs:{id:"disintegrated-word"}},[t._v("disintegrated")])])])}),[],!1,null,"5c6e823a",null);e.default=component.exports},369:function(t,e,d){"use strict";d(356)},370:function(t,e,d){var c=d(49)(!1);c.push([t.i,'*[data-v-5c6e823a],[data-v-5c6e823a]:after,[data-v-5c6e823a]:before{box-sizing:border-box}@media(prefers-reduced-motion:no-preference){[data-v-5c6e823a]:root{scroll-behavior:smooth}}body[data-v-5c6e823a]{font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr[data-v-5c6e823a]{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr[data-v-5c6e823a]:not([size]){height:1px}h1[data-v-5c6e823a],h2[data-v-5c6e823a],h3[data-v-5c6e823a],h4[data-v-5c6e823a],h5[data-v-5c6e823a],h6[data-v-5c6e823a]{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1[data-v-5c6e823a]{font-size:calc(1.375rem + 1.5vw)}@media(min-width:1200px){h1[data-v-5c6e823a]{font-size:2.5rem}}h2[data-v-5c6e823a]{font-size:calc(1.325rem + .9vw)}@media(min-width:1200px){h2[data-v-5c6e823a]{font-size:2rem}}h3[data-v-5c6e823a]{font-size:calc(1.3rem + .6vw)}@media(min-width:1200px){h3[data-v-5c6e823a]{font-size:1.75rem}}h4[data-v-5c6e823a]{font-size:calc(1.275rem + .3vw)}@media(min-width:1200px){h4[data-v-5c6e823a]{font-size:1.5rem}}h5[data-v-5c6e823a]{font-size:1.25rem}h6[data-v-5c6e823a]{font-size:1rem}p[data-v-5c6e823a]{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title][data-v-5c6e823a],abbr[title][data-v-5c6e823a]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address[data-v-5c6e823a]{margin-bottom:1rem;font-style:normal;line-height:inherit}ol[data-v-5c6e823a],ul[data-v-5c6e823a]{padding-left:2rem}dl[data-v-5c6e823a],ol[data-v-5c6e823a],ul[data-v-5c6e823a]{margin-top:0;margin-bottom:1rem}ol ol[data-v-5c6e823a],ol ul[data-v-5c6e823a],ul ol[data-v-5c6e823a],ul ul[data-v-5c6e823a]{margin-bottom:0}dt[data-v-5c6e823a]{font-weight:700}dd[data-v-5c6e823a]{margin-bottom:.5rem;margin-left:0}blockquote[data-v-5c6e823a]{margin:0 0 1rem}b[data-v-5c6e823a],strong[data-v-5c6e823a]{font-weight:bolder}small[data-v-5c6e823a]{font-size:.875em}mark[data-v-5c6e823a]{padding:.2em;background-color:#fcf8e3}sub[data-v-5c6e823a],sup[data-v-5c6e823a]{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub[data-v-5c6e823a]{bottom:-.25em}sup[data-v-5c6e823a]{top:-.5em}a[data-v-5c6e823a]{color:#0d6efd;text-decoration:underline}a[data-v-5c6e823a]:hover{color:#0a58ca}a[data-v-5c6e823a]:not([href]):not([class]),a[data-v-5c6e823a]:not([href]):not([class]):hover{color:inherit;text-decoration:none}code[data-v-5c6e823a],kbd[data-v-5c6e823a],pre[data-v-5c6e823a],samp[data-v-5c6e823a]{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre[data-v-5c6e823a]{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code[data-v-5c6e823a]{font-size:inherit;color:inherit;word-break:normal}code[data-v-5c6e823a]{font-size:.875em;color:#d63384;word-wrap:break-word}a>code[data-v-5c6e823a]{color:inherit}kbd[data-v-5c6e823a]{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd[data-v-5c6e823a]{padding:0;font-size:1em;font-weight:700}figure[data-v-5c6e823a]{margin:0 0 1rem}img[data-v-5c6e823a],svg[data-v-5c6e823a]{vertical-align:middle}table[data-v-5c6e823a]{caption-side:bottom;border-collapse:collapse}caption[data-v-5c6e823a]{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th[data-v-5c6e823a]{text-align:inherit;text-align:-webkit-match-parent}tbody[data-v-5c6e823a],td[data-v-5c6e823a],tfoot[data-v-5c6e823a],th[data-v-5c6e823a],thead[data-v-5c6e823a],tr[data-v-5c6e823a]{border:0 solid;border-color:inherit}label[data-v-5c6e823a]{display:inline-block}button[data-v-5c6e823a]{border-radius:0}button[data-v-5c6e823a]:focus:not(.focus-visible),button[data-v-5c6e823a]:focus:not(:focus-visible){outline:0}button[data-v-5c6e823a],input[data-v-5c6e823a],optgroup[data-v-5c6e823a],select[data-v-5c6e823a],textarea[data-v-5c6e823a]{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button[data-v-5c6e823a],select[data-v-5c6e823a]{text-transform:none}[role=button][data-v-5c6e823a]{cursor:pointer}select[data-v-5c6e823a]{word-wrap:normal}select[data-v-5c6e823a]:disabled{opacity:1}[list][data-v-5c6e823a]::-webkit-calendar-picker-indicator{display:none}[type=button][data-v-5c6e823a],[type=reset][data-v-5c6e823a],[type=submit][data-v-5c6e823a],button[data-v-5c6e823a]{-webkit-appearance:button}[type=button][data-v-5c6e823a]:not(:disabled),[type=reset][data-v-5c6e823a]:not(:disabled),[type=submit][data-v-5c6e823a]:not(:disabled),button[data-v-5c6e823a]:not(:disabled){cursor:pointer}[data-v-5c6e823a]::-moz-focus-inner{padding:0;border-style:none}textarea[data-v-5c6e823a]{resize:vertical}fieldset[data-v-5c6e823a]{min-width:0;padding:0;margin:0;border:0}legend[data-v-5c6e823a]{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media(min-width:1200px){legend[data-v-5c6e823a]{font-size:1.5rem}}legend+*[data-v-5c6e823a]{clear:left}[data-v-5c6e823a]::-webkit-datetime-edit-day-field,[data-v-5c6e823a]::-webkit-datetime-edit-fields-wrapper,[data-v-5c6e823a]::-webkit-datetime-edit-hour-field,[data-v-5c6e823a]::-webkit-datetime-edit-minute,[data-v-5c6e823a]::-webkit-datetime-edit-month-field,[data-v-5c6e823a]::-webkit-datetime-edit-text,[data-v-5c6e823a]::-webkit-datetime-edit-year-field{padding:0}[data-v-5c6e823a]::-webkit-inner-spin-button{height:auto}[type=search][data-v-5c6e823a]{outline-offset:-2px;-webkit-appearance:textfield}[data-v-5c6e823a]::-webkit-search-decoration{-webkit-appearance:none}[data-v-5c6e823a]::-webkit-color-swatch-wrapper{padding:0}[data-v-5c6e823a]::file-selector-button{font:inherit}[data-v-5c6e823a]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output[data-v-5c6e823a]{display:inline-block}iframe[data-v-5c6e823a]{border:0}summary[data-v-5c6e823a]{display:list-item;cursor:pointer}progress[data-v-5c6e823a]{vertical-align:baseline}[hidden][data-v-5c6e823a]{display:none!important}.row[data-v-5c6e823a]{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-right:calc(var(--bs-gutter-x)*-0.5);margin-left:calc(var(--bs-gutter-x)*-0.5)}.row>*[data-v-5c6e823a]{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*0.5);padding-left:calc(var(--bs-gutter-x)*0.5);margin-top:var(--bs-gutter-y)}.col[data-v-5c6e823a]{flex:1 0 0%}.row-cols-auto>*[data-v-5c6e823a]{flex:0 0 auto;width:auto}.row-cols-1>*[data-v-5c6e823a]{flex:0 0 auto;width:100%}.row-cols-2>*[data-v-5c6e823a]{flex:0 0 auto;width:50%}.row-cols-3>*[data-v-5c6e823a]{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*[data-v-5c6e823a]{flex:0 0 auto;width:25%}.row-cols-5>*[data-v-5c6e823a]{flex:0 0 auto;width:20%}.row-cols-6>*[data-v-5c6e823a]{flex:0 0 auto;width:16.6666666667%}@media(min-width:576px){.col-sm[data-v-5c6e823a]{flex:1 0 0%}.row-cols-sm-auto>*[data-v-5c6e823a]{flex:0 0 auto;width:auto}.row-cols-sm-1>*[data-v-5c6e823a]{flex:0 0 auto;width:100%}.row-cols-sm-2>*[data-v-5c6e823a]{flex:0 0 auto;width:50%}.row-cols-sm-3>*[data-v-5c6e823a]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*[data-v-5c6e823a]{flex:0 0 auto;width:25%}.row-cols-sm-5>*[data-v-5c6e823a]{flex:0 0 auto;width:20%}.row-cols-sm-6>*[data-v-5c6e823a]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:768px){.col-md[data-v-5c6e823a]{flex:1 0 0%}.row-cols-md-auto>*[data-v-5c6e823a]{flex:0 0 auto;width:auto}.row-cols-md-1>*[data-v-5c6e823a]{flex:0 0 auto;width:100%}.row-cols-md-2>*[data-v-5c6e823a]{flex:0 0 auto;width:50%}.row-cols-md-3>*[data-v-5c6e823a]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*[data-v-5c6e823a]{flex:0 0 auto;width:25%}.row-cols-md-5>*[data-v-5c6e823a]{flex:0 0 auto;width:20%}.row-cols-md-6>*[data-v-5c6e823a]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:992px){.col-lg[data-v-5c6e823a]{flex:1 0 0%}.row-cols-lg-auto>*[data-v-5c6e823a]{flex:0 0 auto;width:auto}.row-cols-lg-1>*[data-v-5c6e823a]{flex:0 0 auto;width:100%}.row-cols-lg-2>*[data-v-5c6e823a]{flex:0 0 auto;width:50%}.row-cols-lg-3>*[data-v-5c6e823a]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*[data-v-5c6e823a]{flex:0 0 auto;width:25%}.row-cols-lg-5>*[data-v-5c6e823a]{flex:0 0 auto;width:20%}.row-cols-lg-6>*[data-v-5c6e823a]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1200px){.col-xl[data-v-5c6e823a]{flex:1 0 0%}.row-cols-xl-auto>*[data-v-5c6e823a]{flex:0 0 auto;width:auto}.row-cols-xl-1>*[data-v-5c6e823a]{flex:0 0 auto;width:100%}.row-cols-xl-2>*[data-v-5c6e823a]{flex:0 0 auto;width:50%}.row-cols-xl-3>*[data-v-5c6e823a]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*[data-v-5c6e823a]{flex:0 0 auto;width:25%}.row-cols-xl-5>*[data-v-5c6e823a]{flex:0 0 auto;width:20%}.row-cols-xl-6>*[data-v-5c6e823a]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1400px){.col-xxl[data-v-5c6e823a]{flex:1 0 0%}.row-cols-xxl-auto>*[data-v-5c6e823a]{flex:0 0 auto;width:auto}.row-cols-xxl-1>*[data-v-5c6e823a]{flex:0 0 auto;width:100%}.row-cols-xxl-2>*[data-v-5c6e823a]{flex:0 0 auto;width:50%}.row-cols-xxl-3>*[data-v-5c6e823a]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*[data-v-5c6e823a]{flex:0 0 auto;width:25%}.row-cols-xxl-5>*[data-v-5c6e823a]{flex:0 0 auto;width:20%}.row-cols-xxl-6>*[data-v-5c6e823a]{flex:0 0 auto;width:16.6666666667%}}.col-auto[data-v-5c6e823a]{flex:0 0 auto;width:auto}.col-1[data-v-5c6e823a]{flex:0 0 auto;width:8.33333333%}.col-2[data-v-5c6e823a]{flex:0 0 auto;width:16.66666667%}.col-3[data-v-5c6e823a]{flex:0 0 auto;width:25%}.col-4[data-v-5c6e823a]{flex:0 0 auto;width:33.33333333%}.col-5[data-v-5c6e823a]{flex:0 0 auto;width:41.66666667%}.col-6[data-v-5c6e823a]{flex:0 0 auto;width:50%}.col-7[data-v-5c6e823a]{flex:0 0 auto;width:58.33333333%}.col-8[data-v-5c6e823a]{flex:0 0 auto;width:66.66666667%}.col-9[data-v-5c6e823a]{flex:0 0 auto;width:75%}.col-10[data-v-5c6e823a]{flex:0 0 auto;width:83.33333333%}.col-11[data-v-5c6e823a]{flex:0 0 auto;width:91.66666667%}.col-12[data-v-5c6e823a]{flex:0 0 auto;width:100%}.offset-1[data-v-5c6e823a]{margin-left:8.33333333%}.offset-2[data-v-5c6e823a]{margin-left:16.66666667%}.offset-3[data-v-5c6e823a]{margin-left:25%}.offset-4[data-v-5c6e823a]{margin-left:33.33333333%}.offset-5[data-v-5c6e823a]{margin-left:41.66666667%}.offset-6[data-v-5c6e823a]{margin-left:50%}.offset-7[data-v-5c6e823a]{margin-left:58.33333333%}.offset-8[data-v-5c6e823a]{margin-left:66.66666667%}.offset-9[data-v-5c6e823a]{margin-left:75%}.offset-10[data-v-5c6e823a]{margin-left:83.33333333%}.offset-11[data-v-5c6e823a]{margin-left:91.66666667%}.g-0[data-v-5c6e823a],.gx-0[data-v-5c6e823a]{--bs-gutter-x:0}.g-0[data-v-5c6e823a],.gy-0[data-v-5c6e823a]{--bs-gutter-y:0}.g-1[data-v-5c6e823a],.gx-1[data-v-5c6e823a]{--bs-gutter-x:0.25rem}.g-1[data-v-5c6e823a],.gy-1[data-v-5c6e823a]{--bs-gutter-y:0.25rem}.g-2[data-v-5c6e823a],.gx-2[data-v-5c6e823a]{--bs-gutter-x:0.5rem}.g-2[data-v-5c6e823a],.gy-2[data-v-5c6e823a]{--bs-gutter-y:0.5rem}.g-3[data-v-5c6e823a],.gx-3[data-v-5c6e823a]{--bs-gutter-x:1rem}.g-3[data-v-5c6e823a],.gy-3[data-v-5c6e823a]{--bs-gutter-y:1rem}.g-4[data-v-5c6e823a],.gx-4[data-v-5c6e823a]{--bs-gutter-x:1.5rem}.g-4[data-v-5c6e823a],.gy-4[data-v-5c6e823a]{--bs-gutter-y:1.5rem}.g-5[data-v-5c6e823a],.gx-5[data-v-5c6e823a]{--bs-gutter-x:3rem}.g-5[data-v-5c6e823a],.gy-5[data-v-5c6e823a]{--bs-gutter-y:3rem}@media(min-width:576px){.col-sm-auto[data-v-5c6e823a]{flex:0 0 auto;width:auto}.col-sm-1[data-v-5c6e823a]{flex:0 0 auto;width:8.33333333%}.col-sm-2[data-v-5c6e823a]{flex:0 0 auto;width:16.66666667%}.col-sm-3[data-v-5c6e823a]{flex:0 0 auto;width:25%}.col-sm-4[data-v-5c6e823a]{flex:0 0 auto;width:33.33333333%}.col-sm-5[data-v-5c6e823a]{flex:0 0 auto;width:41.66666667%}.col-sm-6[data-v-5c6e823a]{flex:0 0 auto;width:50%}.col-sm-7[data-v-5c6e823a]{flex:0 0 auto;width:58.33333333%}.col-sm-8[data-v-5c6e823a]{flex:0 0 auto;width:66.66666667%}.col-sm-9[data-v-5c6e823a]{flex:0 0 auto;width:75%}.col-sm-10[data-v-5c6e823a]{flex:0 0 auto;width:83.33333333%}.col-sm-11[data-v-5c6e823a]{flex:0 0 auto;width:91.66666667%}.col-sm-12[data-v-5c6e823a]{flex:0 0 auto;width:100%}.offset-sm-0[data-v-5c6e823a]{margin-left:0}.offset-sm-1[data-v-5c6e823a]{margin-left:8.33333333%}.offset-sm-2[data-v-5c6e823a]{margin-left:16.66666667%}.offset-sm-3[data-v-5c6e823a]{margin-left:25%}.offset-sm-4[data-v-5c6e823a]{margin-left:33.33333333%}.offset-sm-5[data-v-5c6e823a]{margin-left:41.66666667%}.offset-sm-6[data-v-5c6e823a]{margin-left:50%}.offset-sm-7[data-v-5c6e823a]{margin-left:58.33333333%}.offset-sm-8[data-v-5c6e823a]{margin-left:66.66666667%}.offset-sm-9[data-v-5c6e823a]{margin-left:75%}.offset-sm-10[data-v-5c6e823a]{margin-left:83.33333333%}.offset-sm-11[data-v-5c6e823a]{margin-left:91.66666667%}.g-sm-0[data-v-5c6e823a],.gx-sm-0[data-v-5c6e823a]{--bs-gutter-x:0}.g-sm-0[data-v-5c6e823a],.gy-sm-0[data-v-5c6e823a]{--bs-gutter-y:0}.g-sm-1[data-v-5c6e823a],.gx-sm-1[data-v-5c6e823a]{--bs-gutter-x:0.25rem}.g-sm-1[data-v-5c6e823a],.gy-sm-1[data-v-5c6e823a]{--bs-gutter-y:0.25rem}.g-sm-2[data-v-5c6e823a],.gx-sm-2[data-v-5c6e823a]{--bs-gutter-x:0.5rem}.g-sm-2[data-v-5c6e823a],.gy-sm-2[data-v-5c6e823a]{--bs-gutter-y:0.5rem}.g-sm-3[data-v-5c6e823a],.gx-sm-3[data-v-5c6e823a]{--bs-gutter-x:1rem}.g-sm-3[data-v-5c6e823a],.gy-sm-3[data-v-5c6e823a]{--bs-gutter-y:1rem}.g-sm-4[data-v-5c6e823a],.gx-sm-4[data-v-5c6e823a]{--bs-gutter-x:1.5rem}.g-sm-4[data-v-5c6e823a],.gy-sm-4[data-v-5c6e823a]{--bs-gutter-y:1.5rem}.g-sm-5[data-v-5c6e823a],.gx-sm-5[data-v-5c6e823a]{--bs-gutter-x:3rem}.g-sm-5[data-v-5c6e823a],.gy-sm-5[data-v-5c6e823a]{--bs-gutter-y:3rem}}@media(min-width:768px){.col-md-auto[data-v-5c6e823a]{flex:0 0 auto;width:auto}.col-md-1[data-v-5c6e823a]{flex:0 0 auto;width:8.33333333%}.col-md-2[data-v-5c6e823a]{flex:0 0 auto;width:16.66666667%}.col-md-3[data-v-5c6e823a]{flex:0 0 auto;width:25%}.col-md-4[data-v-5c6e823a]{flex:0 0 auto;width:33.33333333%}.col-md-5[data-v-5c6e823a]{flex:0 0 auto;width:41.66666667%}.col-md-6[data-v-5c6e823a]{flex:0 0 auto;width:50%}.col-md-7[data-v-5c6e823a]{flex:0 0 auto;width:58.33333333%}.col-md-8[data-v-5c6e823a]{flex:0 0 auto;width:66.66666667%}.col-md-9[data-v-5c6e823a]{flex:0 0 auto;width:75%}.col-md-10[data-v-5c6e823a]{flex:0 0 auto;width:83.33333333%}.col-md-11[data-v-5c6e823a]{flex:0 0 auto;width:91.66666667%}.col-md-12[data-v-5c6e823a]{flex:0 0 auto;width:100%}.offset-md-0[data-v-5c6e823a]{margin-left:0}.offset-md-1[data-v-5c6e823a]{margin-left:8.33333333%}.offset-md-2[data-v-5c6e823a]{margin-left:16.66666667%}.offset-md-3[data-v-5c6e823a]{margin-left:25%}.offset-md-4[data-v-5c6e823a]{margin-left:33.33333333%}.offset-md-5[data-v-5c6e823a]{margin-left:41.66666667%}.offset-md-6[data-v-5c6e823a]{margin-left:50%}.offset-md-7[data-v-5c6e823a]{margin-left:58.33333333%}.offset-md-8[data-v-5c6e823a]{margin-left:66.66666667%}.offset-md-9[data-v-5c6e823a]{margin-left:75%}.offset-md-10[data-v-5c6e823a]{margin-left:83.33333333%}.offset-md-11[data-v-5c6e823a]{margin-left:91.66666667%}.g-md-0[data-v-5c6e823a],.gx-md-0[data-v-5c6e823a]{--bs-gutter-x:0}.g-md-0[data-v-5c6e823a],.gy-md-0[data-v-5c6e823a]{--bs-gutter-y:0}.g-md-1[data-v-5c6e823a],.gx-md-1[data-v-5c6e823a]{--bs-gutter-x:0.25rem}.g-md-1[data-v-5c6e823a],.gy-md-1[data-v-5c6e823a]{--bs-gutter-y:0.25rem}.g-md-2[data-v-5c6e823a],.gx-md-2[data-v-5c6e823a]{--bs-gutter-x:0.5rem}.g-md-2[data-v-5c6e823a],.gy-md-2[data-v-5c6e823a]{--bs-gutter-y:0.5rem}.g-md-3[data-v-5c6e823a],.gx-md-3[data-v-5c6e823a]{--bs-gutter-x:1rem}.g-md-3[data-v-5c6e823a],.gy-md-3[data-v-5c6e823a]{--bs-gutter-y:1rem}.g-md-4[data-v-5c6e823a],.gx-md-4[data-v-5c6e823a]{--bs-gutter-x:1.5rem}.g-md-4[data-v-5c6e823a],.gy-md-4[data-v-5c6e823a]{--bs-gutter-y:1.5rem}.g-md-5[data-v-5c6e823a],.gx-md-5[data-v-5c6e823a]{--bs-gutter-x:3rem}.g-md-5[data-v-5c6e823a],.gy-md-5[data-v-5c6e823a]{--bs-gutter-y:3rem}}@media(min-width:992px){.col-lg-auto[data-v-5c6e823a]{flex:0 0 auto;width:auto}.col-lg-1[data-v-5c6e823a]{flex:0 0 auto;width:8.33333333%}.col-lg-2[data-v-5c6e823a]{flex:0 0 auto;width:16.66666667%}.col-lg-3[data-v-5c6e823a]{flex:0 0 auto;width:25%}.col-lg-4[data-v-5c6e823a]{flex:0 0 auto;width:33.33333333%}.col-lg-5[data-v-5c6e823a]{flex:0 0 auto;width:41.66666667%}.col-lg-6[data-v-5c6e823a]{flex:0 0 auto;width:50%}.col-lg-7[data-v-5c6e823a]{flex:0 0 auto;width:58.33333333%}.col-lg-8[data-v-5c6e823a]{flex:0 0 auto;width:66.66666667%}.col-lg-9[data-v-5c6e823a]{flex:0 0 auto;width:75%}.col-lg-10[data-v-5c6e823a]{flex:0 0 auto;width:83.33333333%}.col-lg-11[data-v-5c6e823a]{flex:0 0 auto;width:91.66666667%}.col-lg-12[data-v-5c6e823a]{flex:0 0 auto;width:100%}.offset-lg-0[data-v-5c6e823a]{margin-left:0}.offset-lg-1[data-v-5c6e823a]{margin-left:8.33333333%}.offset-lg-2[data-v-5c6e823a]{margin-left:16.66666667%}.offset-lg-3[data-v-5c6e823a]{margin-left:25%}.offset-lg-4[data-v-5c6e823a]{margin-left:33.33333333%}.offset-lg-5[data-v-5c6e823a]{margin-left:41.66666667%}.offset-lg-6[data-v-5c6e823a]{margin-left:50%}.offset-lg-7[data-v-5c6e823a]{margin-left:58.33333333%}.offset-lg-8[data-v-5c6e823a]{margin-left:66.66666667%}.offset-lg-9[data-v-5c6e823a]{margin-left:75%}.offset-lg-10[data-v-5c6e823a]{margin-left:83.33333333%}.offset-lg-11[data-v-5c6e823a]{margin-left:91.66666667%}.g-lg-0[data-v-5c6e823a],.gx-lg-0[data-v-5c6e823a]{--bs-gutter-x:0}.g-lg-0[data-v-5c6e823a],.gy-lg-0[data-v-5c6e823a]{--bs-gutter-y:0}.g-lg-1[data-v-5c6e823a],.gx-lg-1[data-v-5c6e823a]{--bs-gutter-x:0.25rem}.g-lg-1[data-v-5c6e823a],.gy-lg-1[data-v-5c6e823a]{--bs-gutter-y:0.25rem}.g-lg-2[data-v-5c6e823a],.gx-lg-2[data-v-5c6e823a]{--bs-gutter-x:0.5rem}.g-lg-2[data-v-5c6e823a],.gy-lg-2[data-v-5c6e823a]{--bs-gutter-y:0.5rem}.g-lg-3[data-v-5c6e823a],.gx-lg-3[data-v-5c6e823a]{--bs-gutter-x:1rem}.g-lg-3[data-v-5c6e823a],.gy-lg-3[data-v-5c6e823a]{--bs-gutter-y:1rem}.g-lg-4[data-v-5c6e823a],.gx-lg-4[data-v-5c6e823a]{--bs-gutter-x:1.5rem}.g-lg-4[data-v-5c6e823a],.gy-lg-4[data-v-5c6e823a]{--bs-gutter-y:1.5rem}.g-lg-5[data-v-5c6e823a],.gx-lg-5[data-v-5c6e823a]{--bs-gutter-x:3rem}.g-lg-5[data-v-5c6e823a],.gy-lg-5[data-v-5c6e823a]{--bs-gutter-y:3rem}}@media(min-width:1200px){.col-xl-auto[data-v-5c6e823a]{flex:0 0 auto;width:auto}.col-xl-1[data-v-5c6e823a]{flex:0 0 auto;width:8.33333333%}.col-xl-2[data-v-5c6e823a]{flex:0 0 auto;width:16.66666667%}.col-xl-3[data-v-5c6e823a]{flex:0 0 auto;width:25%}.col-xl-4[data-v-5c6e823a]{flex:0 0 auto;width:33.33333333%}.col-xl-5[data-v-5c6e823a]{flex:0 0 auto;width:41.66666667%}.col-xl-6[data-v-5c6e823a]{flex:0 0 auto;width:50%}.col-xl-7[data-v-5c6e823a]{flex:0 0 auto;width:58.33333333%}.col-xl-8[data-v-5c6e823a]{flex:0 0 auto;width:66.66666667%}.col-xl-9[data-v-5c6e823a]{flex:0 0 auto;width:75%}.col-xl-10[data-v-5c6e823a]{flex:0 0 auto;width:83.33333333%}.col-xl-11[data-v-5c6e823a]{flex:0 0 auto;width:91.66666667%}.col-xl-12[data-v-5c6e823a]{flex:0 0 auto;width:100%}.offset-xl-0[data-v-5c6e823a]{margin-left:0}.offset-xl-1[data-v-5c6e823a]{margin-left:8.33333333%}.offset-xl-2[data-v-5c6e823a]{margin-left:16.66666667%}.offset-xl-3[data-v-5c6e823a]{margin-left:25%}.offset-xl-4[data-v-5c6e823a]{margin-left:33.33333333%}.offset-xl-5[data-v-5c6e823a]{margin-left:41.66666667%}.offset-xl-6[data-v-5c6e823a]{margin-left:50%}.offset-xl-7[data-v-5c6e823a]{margin-left:58.33333333%}.offset-xl-8[data-v-5c6e823a]{margin-left:66.66666667%}.offset-xl-9[data-v-5c6e823a]{margin-left:75%}.offset-xl-10[data-v-5c6e823a]{margin-left:83.33333333%}.offset-xl-11[data-v-5c6e823a]{margin-left:91.66666667%}.g-xl-0[data-v-5c6e823a],.gx-xl-0[data-v-5c6e823a]{--bs-gutter-x:0}.g-xl-0[data-v-5c6e823a],.gy-xl-0[data-v-5c6e823a]{--bs-gutter-y:0}.g-xl-1[data-v-5c6e823a],.gx-xl-1[data-v-5c6e823a]{--bs-gutter-x:0.25rem}.g-xl-1[data-v-5c6e823a],.gy-xl-1[data-v-5c6e823a]{--bs-gutter-y:0.25rem}.g-xl-2[data-v-5c6e823a],.gx-xl-2[data-v-5c6e823a]{--bs-gutter-x:0.5rem}.g-xl-2[data-v-5c6e823a],.gy-xl-2[data-v-5c6e823a]{--bs-gutter-y:0.5rem}.g-xl-3[data-v-5c6e823a],.gx-xl-3[data-v-5c6e823a]{--bs-gutter-x:1rem}.g-xl-3[data-v-5c6e823a],.gy-xl-3[data-v-5c6e823a]{--bs-gutter-y:1rem}.g-xl-4[data-v-5c6e823a],.gx-xl-4[data-v-5c6e823a]{--bs-gutter-x:1.5rem}.g-xl-4[data-v-5c6e823a],.gy-xl-4[data-v-5c6e823a]{--bs-gutter-y:1.5rem}.g-xl-5[data-v-5c6e823a],.gx-xl-5[data-v-5c6e823a]{--bs-gutter-x:3rem}.g-xl-5[data-v-5c6e823a],.gy-xl-5[data-v-5c6e823a]{--bs-gutter-y:3rem}}@media(min-width:1400px){.col-xxl-auto[data-v-5c6e823a]{flex:0 0 auto;width:auto}.col-xxl-1[data-v-5c6e823a]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[data-v-5c6e823a]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[data-v-5c6e823a]{flex:0 0 auto;width:25%}.col-xxl-4[data-v-5c6e823a]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[data-v-5c6e823a]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[data-v-5c6e823a]{flex:0 0 auto;width:50%}.col-xxl-7[data-v-5c6e823a]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[data-v-5c6e823a]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[data-v-5c6e823a]{flex:0 0 auto;width:75%}.col-xxl-10[data-v-5c6e823a]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[data-v-5c6e823a]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[data-v-5c6e823a]{flex:0 0 auto;width:100%}.offset-xxl-0[data-v-5c6e823a]{margin-left:0}.offset-xxl-1[data-v-5c6e823a]{margin-left:8.33333333%}.offset-xxl-2[data-v-5c6e823a]{margin-left:16.66666667%}.offset-xxl-3[data-v-5c6e823a]{margin-left:25%}.offset-xxl-4[data-v-5c6e823a]{margin-left:33.33333333%}.offset-xxl-5[data-v-5c6e823a]{margin-left:41.66666667%}.offset-xxl-6[data-v-5c6e823a]{margin-left:50%}.offset-xxl-7[data-v-5c6e823a]{margin-left:58.33333333%}.offset-xxl-8[data-v-5c6e823a]{margin-left:66.66666667%}.offset-xxl-9[data-v-5c6e823a]{margin-left:75%}.offset-xxl-10[data-v-5c6e823a]{margin-left:83.33333333%}.offset-xxl-11[data-v-5c6e823a]{margin-left:91.66666667%}.g-xxl-0[data-v-5c6e823a],.gx-xxl-0[data-v-5c6e823a]{--bs-gutter-x:0}.g-xxl-0[data-v-5c6e823a],.gy-xxl-0[data-v-5c6e823a]{--bs-gutter-y:0}.g-xxl-1[data-v-5c6e823a],.gx-xxl-1[data-v-5c6e823a]{--bs-gutter-x:0.25rem}.g-xxl-1[data-v-5c6e823a],.gy-xxl-1[data-v-5c6e823a]{--bs-gutter-y:0.25rem}.g-xxl-2[data-v-5c6e823a],.gx-xxl-2[data-v-5c6e823a]{--bs-gutter-x:0.5rem}.g-xxl-2[data-v-5c6e823a],.gy-xxl-2[data-v-5c6e823a]{--bs-gutter-y:0.5rem}.g-xxl-3[data-v-5c6e823a],.gx-xxl-3[data-v-5c6e823a]{--bs-gutter-x:1rem}.g-xxl-3[data-v-5c6e823a],.gy-xxl-3[data-v-5c6e823a]{--bs-gutter-y:1rem}.g-xxl-4[data-v-5c6e823a],.gx-xxl-4[data-v-5c6e823a]{--bs-gutter-x:1.5rem}.g-xxl-4[data-v-5c6e823a],.gy-xxl-4[data-v-5c6e823a]{--bs-gutter-y:1.5rem}.g-xxl-5[data-v-5c6e823a],.gx-xxl-5[data-v-5c6e823a]{--bs-gutter-x:3rem}.g-xxl-5[data-v-5c6e823a],.gy-xxl-5[data-v-5c6e823a]{--bs-gutter-y:3rem}}.container[data-v-5c6e823a],.container-fluid[data-v-5c6e823a],.container-lg[data-v-5c6e823a],.container-md[data-v-5c6e823a],.container-sm[data-v-5c6e823a],.container-xl[data-v-5c6e823a],.container-xxl[data-v-5c6e823a]{width:100%;padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media(min-width:576px){.container[data-v-5c6e823a],.container-sm[data-v-5c6e823a]{max-width:540px}}@media(min-width:768px){.container[data-v-5c6e823a],.container-md[data-v-5c6e823a],.container-sm[data-v-5c6e823a]{max-width:720px}}@media(min-width:992px){.container[data-v-5c6e823a],.container-lg[data-v-5c6e823a],.container-md[data-v-5c6e823a],.container-sm[data-v-5c6e823a]{max-width:960px}}@media(min-width:1200px){.container[data-v-5c6e823a],.container-lg[data-v-5c6e823a],.container-md[data-v-5c6e823a],.container-sm[data-v-5c6e823a],.container-xl[data-v-5c6e823a]{max-width:1140px}}@media(min-width:1400px){.container[data-v-5c6e823a],.container-lg[data-v-5c6e823a],.container-md[data-v-5c6e823a],.container-sm[data-v-5c6e823a],.container-xl[data-v-5c6e823a],.container-xxl[data-v-5c6e823a]{max-width:1320px}}body[data-v-5c6e823a],h1[data-v-5c6e823a],h2[data-v-5c6e823a],h3[data-v-5c6e823a],h4[data-v-5c6e823a],h5[data-v-5c6e823a],h6[data-v-5c6e823a],html[data-v-5c6e823a],html>body[data-v-5c6e823a],p[data-v-5c6e823a]{color:#fff;font-family:"Oswald"}@font-face{font-family:monspaceNumbers;src:url(/fonts/monofonto.otf)}body[data-v-5c6e823a]{margin:0}a[data-v-5c6e823a],a[data-v-5c6e823a]:visited{color:#23adff;text-decoration:none}a[data-v-5c6e823a]:hover,a[data-v-5c6e823a]:visited:hover{text-decoration:underline;cursor:default;color:#23adff}.row-fixed[data-v-5c6e823a]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-5c6e823a],.row-fixed.text-container h2[data-v-5c6e823a],.row-fixed.text-container p[data-v-5c6e823a]{text-align:center;text-transform:uppercase}.text-container[data-v-5c6e823a]{font-size:10vw;line-height:0}.text-container .body-copy[data-v-5c6e823a]{-webkit-text-stroke:1px #000;font-size:8vw}@media(min-width:400px){.text-container .body-copy[data-v-5c6e823a]{font-size:8vw}}@media(min-width:576px){.text-container .body-copy[data-v-5c6e823a]{font-size:6vw}}@media(min-width:768px){.text-container .body-copy[data-v-5c6e823a]{font-size:4vw}}@media(min-width:992px){.text-container .body-copy[data-v-5c6e823a]{font-size:2.9vw}}@media(min-width:1200px){.text-container .body-copy[data-v-5c6e823a]{font-size:2.5vw}}.text-container #year[data-v-5c6e823a]{font-size:20vw;line-height:.75em;letter-spacing:-3px;font-size:28vw}@media(min-width:400px){.text-container #year[data-v-5c6e823a]{font-size:28vw}}@media(min-width:576px){.text-container #year[data-v-5c6e823a]{font-size:22vw}}@media(min-width:768px){.text-container #year[data-v-5c6e823a]{font-size:20vw;letter-spacing:-5px}}@media(min-width:992px){.text-container #year[data-v-5c6e823a]{font-size:10vw;letter-spacing:-6px}}@media(min-width:1200px){.text-container #year[data-v-5c6e823a]{font-size:11vw;letter-spacing:-8px}}.text-container #disintegrated-percent[data-v-5c6e823a]{font-size:18vw}@media(min-width:400px){.text-container #disintegrated-percent[data-v-5c6e823a]{font-size:16vw}}@media(min-width:576px){.text-container #disintegrated-percent[data-v-5c6e823a]{font-size:11vw}}@media(min-width:768px){.text-container #disintegrated-percent[data-v-5c6e823a]{font-size:10vw}}@media(min-width:992px){.text-container #disintegrated-percent[data-v-5c6e823a]{font-size:7vw}}@media(min-width:1200px){.text-container #disintegrated-percent[data-v-5c6e823a]{font-size:6vw}}.text-container #disintegrated-word[data-v-5c6e823a]{padding-left:5px}@media(min-width:992px){.text-container #disintegrated-word[data-v-5c6e823a]{padding-left:11px}}.text-container.top[data-v-5c6e823a]{top:5vh;align-items:center}@media(min-width:992px){.text-container.top[data-v-5c6e823a]{top:0}}.text-container .number-text[data-v-5c6e823a]{font-family:monspaceNumbers;display:inline-block}',""]),t.exports=c}}]);