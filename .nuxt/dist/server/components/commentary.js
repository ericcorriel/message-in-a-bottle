exports.ids = [1,3];
exports.modules = {

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("c211631e", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FitText_vue_vue_type_style_index_0_id_bfde5660_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FitText_vue_vue_type_style_index_0_id_bfde5660_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FitText_vue_vue_type_style_index_0_id_bfde5660_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FitText_vue_vue_type_style_index_0_id_bfde5660_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_FitText_vue_vue_type_style_index_0_id_bfde5660_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fit[data-v-bfde5660]{display:inline-block;white-space:nowrap}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6512b9a9", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/vendor/FitText.vue?vue&type=template&id=bfde5660&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"fit"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/vendor/FitText.vue?vue&type=template&id=bfde5660&scoped=true&

// CONCATENATED MODULE: ./node_modules/fitty/dist/fitty.module.js
/**
 * fitty v2.3.5 - Snugly resizes text to fit its parent container
 * Copyright (c) 2021 Rik Schennink <rik@pqina.nl> (https://pqina.nl/)
 */

var e=function(e){if(e){var t=function(e){return[].slice.call(e)},n=0,i=1,r=2,o=3,a=[],l=null,u="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(l),l=e.requestAnimationFrame((function(){return s(a.filter((function(e){return e.dirty&&e.active})))}))}:function(){},c=function(e){return function(){a.forEach((function(t){return t.dirty=e})),u()}},s=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=m(e)})),e.filter(y).forEach(v);var t=e.filter(p);t.forEach(d),t.forEach((function(e){v(e),f(e)})),t.forEach(S)},f=function(e){return e.dirty=n},d=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},p=function(e){return e.dirty!==r||e.dirty===r&&e.element.parentNode.clientWidth!==e.availableWidth},m=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},y=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},v=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},S=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},h=function(e,t){return function(){e.dirty=t,e.active&&u()}},w=function(e){return function(){a=a.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},b=function(e){return function(){e.active||(e.active=!0,u())}},z=function(e){return function(){return e.active=!1}},F=function(e){e.observeMutations&&(e.observer=new MutationObserver(h(e,i)),e.observer.observe(e.element,e.observeMutations))},g={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},W=null,E=function(){e.clearTimeout(W),W=e.setTimeout(c(r),x.observeWindowDelay)},M=["resize","orientationchange"];return Object.defineProperty(x,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");M.forEach((function(t){e[n](t,E)}))}}),x.observeWindow=!0,x.observeWindowDelay=100,x.fitAll=c(o),x}function C(e,t){var n=Object.assign({},g,t),i=e.map((function(e){var t=Object.assign({},n,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},F(e),e.newbie=!0,e.dirty=!0,a.push(e)}(t),{element:e,fit:h(t,o),unfreeze:b(t),freeze:z(t),unsubscribe:w(t)}}));return u(),i}function x(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?C(t(document.querySelectorAll(e)),n):C([e],n)[0]}}("undefined"==typeof window?null:window);/* harmony default export */ var fitty_module = (e);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/vendor/FitText.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var FitTextvue_type_script_lang_js_ = ({
  name: "FitText",
  components: {
    fitty: fitty_module
  },
  props: {
    options: {
      type: Object,
      required: false,

      default() {
        return {
          minSize: 16,
          maxSize: 512,
          multiLine: true
        };
      }

    }
  },

  data() {
    return {
      $_fitty: undefined
    };
  },

  destroyed() {
    this.$_fitty.unsubscribe();
  },

  mounted() {
    this.$_fitty = fitty_module(this.$el, this.options);
  }

});
// CONCATENATED MODULE: ./components/vendor/FitText.vue?vue&type=script&lang=js&
 /* harmony default export */ var vendor_FitTextvue_type_script_lang_js_ = (FitTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/vendor/FitText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vendor_FitTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bfde5660",
  "4217e830"
  
)

/* harmony default export */ var FitText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_commentary_vue_vue_type_style_index_0_id_6be42bef_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_commentary_vue_vue_type_style_index_0_id_6be42bef_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_commentary_vue_vue_type_style_index_0_id_6be42bef_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_commentary_vue_vue_type_style_index_0_id_6be42bef_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_commentary_vue_vue_type_style_index_0_id_6be42bef_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-6be42bef],h2[data-v-6be42bef],h3[data-v-6be42bef],h4[data-v-6be42bef],h5[data-v-6be42bef],h6[data-v-6be42bef],html[data-v-6be42bef],p[data-v-6be42bef]{color:#fff;font-family:\"Oswald\"}.container[data-v-6be42bef]{background-color:#000}.row-fixed[data-v-6be42bef]{position:fixed;display:flex;width:100vw;height:25vh;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.row-fixed.text-container h1[data-v-6be42bef],.row-fixed.text-container h2[data-v-6be42bef],.row-fixed.text-container p[data-v-6be42bef]{text-align:center;text-transform:uppercase}*[data-v-6be42bef],[data-v-6be42bef]:after,[data-v-6be42bef]:before{box-sizing:border-box}@media(prefers-reduced-motion:no-preference){[data-v-6be42bef]:root{scroll-behavior:smooth}}body[data-v-6be42bef]{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr[data-v-6be42bef]{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr[data-v-6be42bef]:not([size]){height:1px}h1[data-v-6be42bef],h2[data-v-6be42bef],h3[data-v-6be42bef],h4[data-v-6be42bef],h5[data-v-6be42bef],h6[data-v-6be42bef]{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1[data-v-6be42bef]{font-size:calc(1.375rem + 1.5vw)}@media(min-width:1200px){h1[data-v-6be42bef]{font-size:2.5rem}}h2[data-v-6be42bef]{font-size:calc(1.325rem + .9vw)}@media(min-width:1200px){h2[data-v-6be42bef]{font-size:2rem}}h3[data-v-6be42bef]{font-size:calc(1.3rem + .6vw)}@media(min-width:1200px){h3[data-v-6be42bef]{font-size:1.75rem}}h4[data-v-6be42bef]{font-size:calc(1.275rem + .3vw)}@media(min-width:1200px){h4[data-v-6be42bef]{font-size:1.5rem}}h5[data-v-6be42bef]{font-size:1.25rem}h6[data-v-6be42bef]{font-size:1rem}p[data-v-6be42bef]{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title][data-v-6be42bef],abbr[title][data-v-6be42bef]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address[data-v-6be42bef]{margin-bottom:1rem;font-style:normal;line-height:inherit}ol[data-v-6be42bef],ul[data-v-6be42bef]{padding-left:2rem}dl[data-v-6be42bef],ol[data-v-6be42bef],ul[data-v-6be42bef]{margin-top:0;margin-bottom:1rem}ol ol[data-v-6be42bef],ol ul[data-v-6be42bef],ul ol[data-v-6be42bef],ul ul[data-v-6be42bef]{margin-bottom:0}dt[data-v-6be42bef]{font-weight:700}dd[data-v-6be42bef]{margin-bottom:.5rem;margin-left:0}blockquote[data-v-6be42bef]{margin:0 0 1rem}b[data-v-6be42bef],strong[data-v-6be42bef]{font-weight:bolder}small[data-v-6be42bef]{font-size:.875em}mark[data-v-6be42bef]{padding:.2em;background-color:#fcf8e3}sub[data-v-6be42bef],sup[data-v-6be42bef]{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub[data-v-6be42bef]{bottom:-.25em}sup[data-v-6be42bef]{top:-.5em}a[data-v-6be42bef]{color:#0d6efd;text-decoration:underline}a[data-v-6be42bef]:hover{color:#0a58ca}a[data-v-6be42bef]:not([href]):not([class]),a[data-v-6be42bef]:not([href]):not([class]):hover{color:inherit;text-decoration:none}code[data-v-6be42bef],kbd[data-v-6be42bef],pre[data-v-6be42bef],samp[data-v-6be42bef]{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre[data-v-6be42bef]{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code[data-v-6be42bef]{font-size:inherit;color:inherit;word-break:normal}code[data-v-6be42bef]{font-size:.875em;color:#d63384;word-wrap:break-word}a>code[data-v-6be42bef]{color:inherit}kbd[data-v-6be42bef]{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd[data-v-6be42bef]{padding:0;font-size:1em;font-weight:700}figure[data-v-6be42bef]{margin:0 0 1rem}img[data-v-6be42bef],svg[data-v-6be42bef]{vertical-align:middle}table[data-v-6be42bef]{caption-side:bottom;border-collapse:collapse}caption[data-v-6be42bef]{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th[data-v-6be42bef]{text-align:inherit;text-align:-webkit-match-parent}tbody[data-v-6be42bef],td[data-v-6be42bef],tfoot[data-v-6be42bef],th[data-v-6be42bef],thead[data-v-6be42bef],tr[data-v-6be42bef]{border:0 solid;border-color:inherit}label[data-v-6be42bef]{display:inline-block}button[data-v-6be42bef]{border-radius:0}button[data-v-6be42bef]:focus:not(.focus-visible),button[data-v-6be42bef]:focus:not(:focus-visible){outline:0}button[data-v-6be42bef],input[data-v-6be42bef],optgroup[data-v-6be42bef],select[data-v-6be42bef],textarea[data-v-6be42bef]{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button[data-v-6be42bef],select[data-v-6be42bef]{text-transform:none}[role=button][data-v-6be42bef]{cursor:pointer}select[data-v-6be42bef]{word-wrap:normal}select[data-v-6be42bef]:disabled{opacity:1}[list][data-v-6be42bef]::-webkit-calendar-picker-indicator{display:none}[type=button][data-v-6be42bef],[type=reset][data-v-6be42bef],[type=submit][data-v-6be42bef],button[data-v-6be42bef]{-webkit-appearance:button}[type=button][data-v-6be42bef]:not(:disabled),[type=reset][data-v-6be42bef]:not(:disabled),[type=submit][data-v-6be42bef]:not(:disabled),button[data-v-6be42bef]:not(:disabled){cursor:pointer}[data-v-6be42bef]::-moz-focus-inner{padding:0;border-style:none}textarea[data-v-6be42bef]{resize:vertical}fieldset[data-v-6be42bef]{min-width:0;padding:0;margin:0;border:0}legend[data-v-6be42bef]{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media(min-width:1200px){legend[data-v-6be42bef]{font-size:1.5rem}}legend+*[data-v-6be42bef]{clear:left}[data-v-6be42bef]::-webkit-datetime-edit-day-field,[data-v-6be42bef]::-webkit-datetime-edit-fields-wrapper,[data-v-6be42bef]::-webkit-datetime-edit-hour-field,[data-v-6be42bef]::-webkit-datetime-edit-minute,[data-v-6be42bef]::-webkit-datetime-edit-month-field,[data-v-6be42bef]::-webkit-datetime-edit-text,[data-v-6be42bef]::-webkit-datetime-edit-year-field{padding:0}[data-v-6be42bef]::-webkit-inner-spin-button{height:auto}[type=search][data-v-6be42bef]{outline-offset:-2px;-webkit-appearance:textfield}[data-v-6be42bef]::-webkit-search-decoration{-webkit-appearance:none}[data-v-6be42bef]::-webkit-color-swatch-wrapper{padding:0}[data-v-6be42bef]::file-selector-button{font:inherit}[data-v-6be42bef]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output[data-v-6be42bef]{display:inline-block}iframe[data-v-6be42bef]{border:0}summary[data-v-6be42bef]{display:list-item;cursor:pointer}progress[data-v-6be42bef]{vertical-align:baseline}[hidden][data-v-6be42bef]{display:none!important}.row[data-v-6be42bef]{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-right:calc(var(--bs-gutter-x)*-0.5);margin-left:calc(var(--bs-gutter-x)*-0.5)}.row>*[data-v-6be42bef]{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*0.5);padding-left:calc(var(--bs-gutter-x)*0.5);margin-top:var(--bs-gutter-y)}.col[data-v-6be42bef]{flex:1 0 0%}.row-cols-auto>*[data-v-6be42bef]{flex:0 0 auto;width:auto}.row-cols-1>*[data-v-6be42bef]{flex:0 0 auto;width:100%}.row-cols-2>*[data-v-6be42bef]{flex:0 0 auto;width:50%}.row-cols-3>*[data-v-6be42bef]{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*[data-v-6be42bef]{flex:0 0 auto;width:25%}.row-cols-5>*[data-v-6be42bef]{flex:0 0 auto;width:20%}.row-cols-6>*[data-v-6be42bef]{flex:0 0 auto;width:16.6666666667%}@media(min-width:576px){.col-sm[data-v-6be42bef]{flex:1 0 0%}.row-cols-sm-auto>*[data-v-6be42bef]{flex:0 0 auto;width:auto}.row-cols-sm-1>*[data-v-6be42bef]{flex:0 0 auto;width:100%}.row-cols-sm-2>*[data-v-6be42bef]{flex:0 0 auto;width:50%}.row-cols-sm-3>*[data-v-6be42bef]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*[data-v-6be42bef]{flex:0 0 auto;width:25%}.row-cols-sm-5>*[data-v-6be42bef]{flex:0 0 auto;width:20%}.row-cols-sm-6>*[data-v-6be42bef]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:768px){.col-md[data-v-6be42bef]{flex:1 0 0%}.row-cols-md-auto>*[data-v-6be42bef]{flex:0 0 auto;width:auto}.row-cols-md-1>*[data-v-6be42bef]{flex:0 0 auto;width:100%}.row-cols-md-2>*[data-v-6be42bef]{flex:0 0 auto;width:50%}.row-cols-md-3>*[data-v-6be42bef]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*[data-v-6be42bef]{flex:0 0 auto;width:25%}.row-cols-md-5>*[data-v-6be42bef]{flex:0 0 auto;width:20%}.row-cols-md-6>*[data-v-6be42bef]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:992px){.col-lg[data-v-6be42bef]{flex:1 0 0%}.row-cols-lg-auto>*[data-v-6be42bef]{flex:0 0 auto;width:auto}.row-cols-lg-1>*[data-v-6be42bef]{flex:0 0 auto;width:100%}.row-cols-lg-2>*[data-v-6be42bef]{flex:0 0 auto;width:50%}.row-cols-lg-3>*[data-v-6be42bef]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*[data-v-6be42bef]{flex:0 0 auto;width:25%}.row-cols-lg-5>*[data-v-6be42bef]{flex:0 0 auto;width:20%}.row-cols-lg-6>*[data-v-6be42bef]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1200px){.col-xl[data-v-6be42bef]{flex:1 0 0%}.row-cols-xl-auto>*[data-v-6be42bef]{flex:0 0 auto;width:auto}.row-cols-xl-1>*[data-v-6be42bef]{flex:0 0 auto;width:100%}.row-cols-xl-2>*[data-v-6be42bef]{flex:0 0 auto;width:50%}.row-cols-xl-3>*[data-v-6be42bef]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*[data-v-6be42bef]{flex:0 0 auto;width:25%}.row-cols-xl-5>*[data-v-6be42bef]{flex:0 0 auto;width:20%}.row-cols-xl-6>*[data-v-6be42bef]{flex:0 0 auto;width:16.6666666667%}}@media(min-width:1400px){.col-xxl[data-v-6be42bef]{flex:1 0 0%}.row-cols-xxl-auto>*[data-v-6be42bef]{flex:0 0 auto;width:auto}.row-cols-xxl-1>*[data-v-6be42bef]{flex:0 0 auto;width:100%}.row-cols-xxl-2>*[data-v-6be42bef]{flex:0 0 auto;width:50%}.row-cols-xxl-3>*[data-v-6be42bef]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*[data-v-6be42bef]{flex:0 0 auto;width:25%}.row-cols-xxl-5>*[data-v-6be42bef]{flex:0 0 auto;width:20%}.row-cols-xxl-6>*[data-v-6be42bef]{flex:0 0 auto;width:16.6666666667%}}.col-auto[data-v-6be42bef]{flex:0 0 auto;width:auto}.col-1[data-v-6be42bef]{flex:0 0 auto;width:8.33333333%}.col-2[data-v-6be42bef]{flex:0 0 auto;width:16.66666667%}.col-3[data-v-6be42bef]{flex:0 0 auto;width:25%}.col-4[data-v-6be42bef]{flex:0 0 auto;width:33.33333333%}.col-5[data-v-6be42bef]{flex:0 0 auto;width:41.66666667%}.col-6[data-v-6be42bef]{flex:0 0 auto;width:50%}.col-7[data-v-6be42bef]{flex:0 0 auto;width:58.33333333%}.col-8[data-v-6be42bef]{flex:0 0 auto;width:66.66666667%}.col-9[data-v-6be42bef]{flex:0 0 auto;width:75%}.col-10[data-v-6be42bef]{flex:0 0 auto;width:83.33333333%}.col-11[data-v-6be42bef]{flex:0 0 auto;width:91.66666667%}.col-12[data-v-6be42bef]{flex:0 0 auto;width:100%}.offset-1[data-v-6be42bef]{margin-left:8.33333333%}.offset-2[data-v-6be42bef]{margin-left:16.66666667%}.offset-3[data-v-6be42bef]{margin-left:25%}.offset-4[data-v-6be42bef]{margin-left:33.33333333%}.offset-5[data-v-6be42bef]{margin-left:41.66666667%}.offset-6[data-v-6be42bef]{margin-left:50%}.offset-7[data-v-6be42bef]{margin-left:58.33333333%}.offset-8[data-v-6be42bef]{margin-left:66.66666667%}.offset-9[data-v-6be42bef]{margin-left:75%}.offset-10[data-v-6be42bef]{margin-left:83.33333333%}.offset-11[data-v-6be42bef]{margin-left:91.66666667%}.g-0[data-v-6be42bef],.gx-0[data-v-6be42bef]{--bs-gutter-x:0}.g-0[data-v-6be42bef],.gy-0[data-v-6be42bef]{--bs-gutter-y:0}.g-1[data-v-6be42bef],.gx-1[data-v-6be42bef]{--bs-gutter-x:0.25rem}.g-1[data-v-6be42bef],.gy-1[data-v-6be42bef]{--bs-gutter-y:0.25rem}.g-2[data-v-6be42bef],.gx-2[data-v-6be42bef]{--bs-gutter-x:0.5rem}.g-2[data-v-6be42bef],.gy-2[data-v-6be42bef]{--bs-gutter-y:0.5rem}.g-3[data-v-6be42bef],.gx-3[data-v-6be42bef]{--bs-gutter-x:1rem}.g-3[data-v-6be42bef],.gy-3[data-v-6be42bef]{--bs-gutter-y:1rem}.g-4[data-v-6be42bef],.gx-4[data-v-6be42bef]{--bs-gutter-x:1.5rem}.g-4[data-v-6be42bef],.gy-4[data-v-6be42bef]{--bs-gutter-y:1.5rem}.g-5[data-v-6be42bef],.gx-5[data-v-6be42bef]{--bs-gutter-x:3rem}.g-5[data-v-6be42bef],.gy-5[data-v-6be42bef]{--bs-gutter-y:3rem}@media(min-width:576px){.col-sm-auto[data-v-6be42bef]{flex:0 0 auto;width:auto}.col-sm-1[data-v-6be42bef]{flex:0 0 auto;width:8.33333333%}.col-sm-2[data-v-6be42bef]{flex:0 0 auto;width:16.66666667%}.col-sm-3[data-v-6be42bef]{flex:0 0 auto;width:25%}.col-sm-4[data-v-6be42bef]{flex:0 0 auto;width:33.33333333%}.col-sm-5[data-v-6be42bef]{flex:0 0 auto;width:41.66666667%}.col-sm-6[data-v-6be42bef]{flex:0 0 auto;width:50%}.col-sm-7[data-v-6be42bef]{flex:0 0 auto;width:58.33333333%}.col-sm-8[data-v-6be42bef]{flex:0 0 auto;width:66.66666667%}.col-sm-9[data-v-6be42bef]{flex:0 0 auto;width:75%}.col-sm-10[data-v-6be42bef]{flex:0 0 auto;width:83.33333333%}.col-sm-11[data-v-6be42bef]{flex:0 0 auto;width:91.66666667%}.col-sm-12[data-v-6be42bef]{flex:0 0 auto;width:100%}.offset-sm-0[data-v-6be42bef]{margin-left:0}.offset-sm-1[data-v-6be42bef]{margin-left:8.33333333%}.offset-sm-2[data-v-6be42bef]{margin-left:16.66666667%}.offset-sm-3[data-v-6be42bef]{margin-left:25%}.offset-sm-4[data-v-6be42bef]{margin-left:33.33333333%}.offset-sm-5[data-v-6be42bef]{margin-left:41.66666667%}.offset-sm-6[data-v-6be42bef]{margin-left:50%}.offset-sm-7[data-v-6be42bef]{margin-left:58.33333333%}.offset-sm-8[data-v-6be42bef]{margin-left:66.66666667%}.offset-sm-9[data-v-6be42bef]{margin-left:75%}.offset-sm-10[data-v-6be42bef]{margin-left:83.33333333%}.offset-sm-11[data-v-6be42bef]{margin-left:91.66666667%}.g-sm-0[data-v-6be42bef],.gx-sm-0[data-v-6be42bef]{--bs-gutter-x:0}.g-sm-0[data-v-6be42bef],.gy-sm-0[data-v-6be42bef]{--bs-gutter-y:0}.g-sm-1[data-v-6be42bef],.gx-sm-1[data-v-6be42bef]{--bs-gutter-x:0.25rem}.g-sm-1[data-v-6be42bef],.gy-sm-1[data-v-6be42bef]{--bs-gutter-y:0.25rem}.g-sm-2[data-v-6be42bef],.gx-sm-2[data-v-6be42bef]{--bs-gutter-x:0.5rem}.g-sm-2[data-v-6be42bef],.gy-sm-2[data-v-6be42bef]{--bs-gutter-y:0.5rem}.g-sm-3[data-v-6be42bef],.gx-sm-3[data-v-6be42bef]{--bs-gutter-x:1rem}.g-sm-3[data-v-6be42bef],.gy-sm-3[data-v-6be42bef]{--bs-gutter-y:1rem}.g-sm-4[data-v-6be42bef],.gx-sm-4[data-v-6be42bef]{--bs-gutter-x:1.5rem}.g-sm-4[data-v-6be42bef],.gy-sm-4[data-v-6be42bef]{--bs-gutter-y:1.5rem}.g-sm-5[data-v-6be42bef],.gx-sm-5[data-v-6be42bef]{--bs-gutter-x:3rem}.g-sm-5[data-v-6be42bef],.gy-sm-5[data-v-6be42bef]{--bs-gutter-y:3rem}}@media(min-width:768px){.col-md-auto[data-v-6be42bef]{flex:0 0 auto;width:auto}.col-md-1[data-v-6be42bef]{flex:0 0 auto;width:8.33333333%}.col-md-2[data-v-6be42bef]{flex:0 0 auto;width:16.66666667%}.col-md-3[data-v-6be42bef]{flex:0 0 auto;width:25%}.col-md-4[data-v-6be42bef]{flex:0 0 auto;width:33.33333333%}.col-md-5[data-v-6be42bef]{flex:0 0 auto;width:41.66666667%}.col-md-6[data-v-6be42bef]{flex:0 0 auto;width:50%}.col-md-7[data-v-6be42bef]{flex:0 0 auto;width:58.33333333%}.col-md-8[data-v-6be42bef]{flex:0 0 auto;width:66.66666667%}.col-md-9[data-v-6be42bef]{flex:0 0 auto;width:75%}.col-md-10[data-v-6be42bef]{flex:0 0 auto;width:83.33333333%}.col-md-11[data-v-6be42bef]{flex:0 0 auto;width:91.66666667%}.col-md-12[data-v-6be42bef]{flex:0 0 auto;width:100%}.offset-md-0[data-v-6be42bef]{margin-left:0}.offset-md-1[data-v-6be42bef]{margin-left:8.33333333%}.offset-md-2[data-v-6be42bef]{margin-left:16.66666667%}.offset-md-3[data-v-6be42bef]{margin-left:25%}.offset-md-4[data-v-6be42bef]{margin-left:33.33333333%}.offset-md-5[data-v-6be42bef]{margin-left:41.66666667%}.offset-md-6[data-v-6be42bef]{margin-left:50%}.offset-md-7[data-v-6be42bef]{margin-left:58.33333333%}.offset-md-8[data-v-6be42bef]{margin-left:66.66666667%}.offset-md-9[data-v-6be42bef]{margin-left:75%}.offset-md-10[data-v-6be42bef]{margin-left:83.33333333%}.offset-md-11[data-v-6be42bef]{margin-left:91.66666667%}.g-md-0[data-v-6be42bef],.gx-md-0[data-v-6be42bef]{--bs-gutter-x:0}.g-md-0[data-v-6be42bef],.gy-md-0[data-v-6be42bef]{--bs-gutter-y:0}.g-md-1[data-v-6be42bef],.gx-md-1[data-v-6be42bef]{--bs-gutter-x:0.25rem}.g-md-1[data-v-6be42bef],.gy-md-1[data-v-6be42bef]{--bs-gutter-y:0.25rem}.g-md-2[data-v-6be42bef],.gx-md-2[data-v-6be42bef]{--bs-gutter-x:0.5rem}.g-md-2[data-v-6be42bef],.gy-md-2[data-v-6be42bef]{--bs-gutter-y:0.5rem}.g-md-3[data-v-6be42bef],.gx-md-3[data-v-6be42bef]{--bs-gutter-x:1rem}.g-md-3[data-v-6be42bef],.gy-md-3[data-v-6be42bef]{--bs-gutter-y:1rem}.g-md-4[data-v-6be42bef],.gx-md-4[data-v-6be42bef]{--bs-gutter-x:1.5rem}.g-md-4[data-v-6be42bef],.gy-md-4[data-v-6be42bef]{--bs-gutter-y:1.5rem}.g-md-5[data-v-6be42bef],.gx-md-5[data-v-6be42bef]{--bs-gutter-x:3rem}.g-md-5[data-v-6be42bef],.gy-md-5[data-v-6be42bef]{--bs-gutter-y:3rem}}@media(min-width:992px){.col-lg-auto[data-v-6be42bef]{flex:0 0 auto;width:auto}.col-lg-1[data-v-6be42bef]{flex:0 0 auto;width:8.33333333%}.col-lg-2[data-v-6be42bef]{flex:0 0 auto;width:16.66666667%}.col-lg-3[data-v-6be42bef]{flex:0 0 auto;width:25%}.col-lg-4[data-v-6be42bef]{flex:0 0 auto;width:33.33333333%}.col-lg-5[data-v-6be42bef]{flex:0 0 auto;width:41.66666667%}.col-lg-6[data-v-6be42bef]{flex:0 0 auto;width:50%}.col-lg-7[data-v-6be42bef]{flex:0 0 auto;width:58.33333333%}.col-lg-8[data-v-6be42bef]{flex:0 0 auto;width:66.66666667%}.col-lg-9[data-v-6be42bef]{flex:0 0 auto;width:75%}.col-lg-10[data-v-6be42bef]{flex:0 0 auto;width:83.33333333%}.col-lg-11[data-v-6be42bef]{flex:0 0 auto;width:91.66666667%}.col-lg-12[data-v-6be42bef]{flex:0 0 auto;width:100%}.offset-lg-0[data-v-6be42bef]{margin-left:0}.offset-lg-1[data-v-6be42bef]{margin-left:8.33333333%}.offset-lg-2[data-v-6be42bef]{margin-left:16.66666667%}.offset-lg-3[data-v-6be42bef]{margin-left:25%}.offset-lg-4[data-v-6be42bef]{margin-left:33.33333333%}.offset-lg-5[data-v-6be42bef]{margin-left:41.66666667%}.offset-lg-6[data-v-6be42bef]{margin-left:50%}.offset-lg-7[data-v-6be42bef]{margin-left:58.33333333%}.offset-lg-8[data-v-6be42bef]{margin-left:66.66666667%}.offset-lg-9[data-v-6be42bef]{margin-left:75%}.offset-lg-10[data-v-6be42bef]{margin-left:83.33333333%}.offset-lg-11[data-v-6be42bef]{margin-left:91.66666667%}.g-lg-0[data-v-6be42bef],.gx-lg-0[data-v-6be42bef]{--bs-gutter-x:0}.g-lg-0[data-v-6be42bef],.gy-lg-0[data-v-6be42bef]{--bs-gutter-y:0}.g-lg-1[data-v-6be42bef],.gx-lg-1[data-v-6be42bef]{--bs-gutter-x:0.25rem}.g-lg-1[data-v-6be42bef],.gy-lg-1[data-v-6be42bef]{--bs-gutter-y:0.25rem}.g-lg-2[data-v-6be42bef],.gx-lg-2[data-v-6be42bef]{--bs-gutter-x:0.5rem}.g-lg-2[data-v-6be42bef],.gy-lg-2[data-v-6be42bef]{--bs-gutter-y:0.5rem}.g-lg-3[data-v-6be42bef],.gx-lg-3[data-v-6be42bef]{--bs-gutter-x:1rem}.g-lg-3[data-v-6be42bef],.gy-lg-3[data-v-6be42bef]{--bs-gutter-y:1rem}.g-lg-4[data-v-6be42bef],.gx-lg-4[data-v-6be42bef]{--bs-gutter-x:1.5rem}.g-lg-4[data-v-6be42bef],.gy-lg-4[data-v-6be42bef]{--bs-gutter-y:1.5rem}.g-lg-5[data-v-6be42bef],.gx-lg-5[data-v-6be42bef]{--bs-gutter-x:3rem}.g-lg-5[data-v-6be42bef],.gy-lg-5[data-v-6be42bef]{--bs-gutter-y:3rem}}@media(min-width:1200px){.col-xl-auto[data-v-6be42bef]{flex:0 0 auto;width:auto}.col-xl-1[data-v-6be42bef]{flex:0 0 auto;width:8.33333333%}.col-xl-2[data-v-6be42bef]{flex:0 0 auto;width:16.66666667%}.col-xl-3[data-v-6be42bef]{flex:0 0 auto;width:25%}.col-xl-4[data-v-6be42bef]{flex:0 0 auto;width:33.33333333%}.col-xl-5[data-v-6be42bef]{flex:0 0 auto;width:41.66666667%}.col-xl-6[data-v-6be42bef]{flex:0 0 auto;width:50%}.col-xl-7[data-v-6be42bef]{flex:0 0 auto;width:58.33333333%}.col-xl-8[data-v-6be42bef]{flex:0 0 auto;width:66.66666667%}.col-xl-9[data-v-6be42bef]{flex:0 0 auto;width:75%}.col-xl-10[data-v-6be42bef]{flex:0 0 auto;width:83.33333333%}.col-xl-11[data-v-6be42bef]{flex:0 0 auto;width:91.66666667%}.col-xl-12[data-v-6be42bef]{flex:0 0 auto;width:100%}.offset-xl-0[data-v-6be42bef]{margin-left:0}.offset-xl-1[data-v-6be42bef]{margin-left:8.33333333%}.offset-xl-2[data-v-6be42bef]{margin-left:16.66666667%}.offset-xl-3[data-v-6be42bef]{margin-left:25%}.offset-xl-4[data-v-6be42bef]{margin-left:33.33333333%}.offset-xl-5[data-v-6be42bef]{margin-left:41.66666667%}.offset-xl-6[data-v-6be42bef]{margin-left:50%}.offset-xl-7[data-v-6be42bef]{margin-left:58.33333333%}.offset-xl-8[data-v-6be42bef]{margin-left:66.66666667%}.offset-xl-9[data-v-6be42bef]{margin-left:75%}.offset-xl-10[data-v-6be42bef]{margin-left:83.33333333%}.offset-xl-11[data-v-6be42bef]{margin-left:91.66666667%}.g-xl-0[data-v-6be42bef],.gx-xl-0[data-v-6be42bef]{--bs-gutter-x:0}.g-xl-0[data-v-6be42bef],.gy-xl-0[data-v-6be42bef]{--bs-gutter-y:0}.g-xl-1[data-v-6be42bef],.gx-xl-1[data-v-6be42bef]{--bs-gutter-x:0.25rem}.g-xl-1[data-v-6be42bef],.gy-xl-1[data-v-6be42bef]{--bs-gutter-y:0.25rem}.g-xl-2[data-v-6be42bef],.gx-xl-2[data-v-6be42bef]{--bs-gutter-x:0.5rem}.g-xl-2[data-v-6be42bef],.gy-xl-2[data-v-6be42bef]{--bs-gutter-y:0.5rem}.g-xl-3[data-v-6be42bef],.gx-xl-3[data-v-6be42bef]{--bs-gutter-x:1rem}.g-xl-3[data-v-6be42bef],.gy-xl-3[data-v-6be42bef]{--bs-gutter-y:1rem}.g-xl-4[data-v-6be42bef],.gx-xl-4[data-v-6be42bef]{--bs-gutter-x:1.5rem}.g-xl-4[data-v-6be42bef],.gy-xl-4[data-v-6be42bef]{--bs-gutter-y:1.5rem}.g-xl-5[data-v-6be42bef],.gx-xl-5[data-v-6be42bef]{--bs-gutter-x:3rem}.g-xl-5[data-v-6be42bef],.gy-xl-5[data-v-6be42bef]{--bs-gutter-y:3rem}}@media(min-width:1400px){.col-xxl-auto[data-v-6be42bef]{flex:0 0 auto;width:auto}.col-xxl-1[data-v-6be42bef]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[data-v-6be42bef]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[data-v-6be42bef]{flex:0 0 auto;width:25%}.col-xxl-4[data-v-6be42bef]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[data-v-6be42bef]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[data-v-6be42bef]{flex:0 0 auto;width:50%}.col-xxl-7[data-v-6be42bef]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[data-v-6be42bef]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[data-v-6be42bef]{flex:0 0 auto;width:75%}.col-xxl-10[data-v-6be42bef]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[data-v-6be42bef]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[data-v-6be42bef]{flex:0 0 auto;width:100%}.offset-xxl-0[data-v-6be42bef]{margin-left:0}.offset-xxl-1[data-v-6be42bef]{margin-left:8.33333333%}.offset-xxl-2[data-v-6be42bef]{margin-left:16.66666667%}.offset-xxl-3[data-v-6be42bef]{margin-left:25%}.offset-xxl-4[data-v-6be42bef]{margin-left:33.33333333%}.offset-xxl-5[data-v-6be42bef]{margin-left:41.66666667%}.offset-xxl-6[data-v-6be42bef]{margin-left:50%}.offset-xxl-7[data-v-6be42bef]{margin-left:58.33333333%}.offset-xxl-8[data-v-6be42bef]{margin-left:66.66666667%}.offset-xxl-9[data-v-6be42bef]{margin-left:75%}.offset-xxl-10[data-v-6be42bef]{margin-left:83.33333333%}.offset-xxl-11[data-v-6be42bef]{margin-left:91.66666667%}.g-xxl-0[data-v-6be42bef],.gx-xxl-0[data-v-6be42bef]{--bs-gutter-x:0}.g-xxl-0[data-v-6be42bef],.gy-xxl-0[data-v-6be42bef]{--bs-gutter-y:0}.g-xxl-1[data-v-6be42bef],.gx-xxl-1[data-v-6be42bef]{--bs-gutter-x:0.25rem}.g-xxl-1[data-v-6be42bef],.gy-xxl-1[data-v-6be42bef]{--bs-gutter-y:0.25rem}.g-xxl-2[data-v-6be42bef],.gx-xxl-2[data-v-6be42bef]{--bs-gutter-x:0.5rem}.g-xxl-2[data-v-6be42bef],.gy-xxl-2[data-v-6be42bef]{--bs-gutter-y:0.5rem}.g-xxl-3[data-v-6be42bef],.gx-xxl-3[data-v-6be42bef]{--bs-gutter-x:1rem}.g-xxl-3[data-v-6be42bef],.gy-xxl-3[data-v-6be42bef]{--bs-gutter-y:1rem}.g-xxl-4[data-v-6be42bef],.gx-xxl-4[data-v-6be42bef]{--bs-gutter-x:1.5rem}.g-xxl-4[data-v-6be42bef],.gy-xxl-4[data-v-6be42bef]{--bs-gutter-y:1.5rem}.g-xxl-5[data-v-6be42bef],.gx-xxl-5[data-v-6be42bef]{--bs-gutter-x:3rem}.g-xxl-5[data-v-6be42bef],.gy-xxl-5[data-v-6be42bef]{--bs-gutter-y:3rem}}.container[data-v-6be42bef],.container-fluid[data-v-6be42bef],.container-lg[data-v-6be42bef],.container-md[data-v-6be42bef],.container-sm[data-v-6be42bef],.container-xl[data-v-6be42bef],.container-xxl[data-v-6be42bef]{width:100%;padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media(min-width:576px){.container[data-v-6be42bef],.container-sm[data-v-6be42bef]{max-width:540px}}@media(min-width:768px){.container[data-v-6be42bef],.container-md[data-v-6be42bef],.container-sm[data-v-6be42bef]{max-width:720px}}@media(min-width:992px){.container[data-v-6be42bef],.container-lg[data-v-6be42bef],.container-md[data-v-6be42bef],.container-sm[data-v-6be42bef]{max-width:960px}}@media(min-width:1200px){.container[data-v-6be42bef],.container-lg[data-v-6be42bef],.container-md[data-v-6be42bef],.container-sm[data-v-6be42bef],.container-xl[data-v-6be42bef]{max-width:1140px}}@media(min-width:1400px){.container[data-v-6be42bef],.container-lg[data-v-6be42bef],.container-md[data-v-6be42bef],.container-sm[data-v-6be42bef],.container-xl[data-v-6be42bef],.container-xxl[data-v-6be42bef]{max-width:1320px}}.row-fixed.text-container.bottom[data-v-6be42bef]{top:75vh;align-items:baseline}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/commentary.vue?vue&type=template&id=6be42bef&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row-fixed text-container bottom"},[_c('FitText',[_vm._v(_vm._s(_vm.commentary))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/commentary.vue?vue&type=template&id=6be42bef&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./components/vendor/FitText.vue + 5 modules
var FitText = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/commentary.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var commentaryvue_type_script_lang_js_ = (Object(runtime["a" /* defineComponent */])({
  name: "Commentary",
  components: {
    FitText: FitText["default"]
  },
  props: {
    commentary: {
      type: String,
      default: ""
    }
  }
}));
// CONCATENATED MODULE: ./components/commentary.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commentaryvue_type_script_lang_js_ = (commentaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/commentary.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_commentaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6be42bef",
  "4939ac1a"
  
)

/* harmony default export */ var commentary = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=commentary.js.map