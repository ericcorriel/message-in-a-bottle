(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{314:function(e,t,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("c211631e",content,!0,{sourceMap:!1})},322:function(e,t,n){"use strict";n.r(t);var r=function(e){if(e){var t=function(e){return[].slice.call(e)},n=3,a=[],r=null,u="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(r),r=e.requestAnimationFrame((function(){return s(a.filter((function(e){return e.dirty&&e.active})))}))}:function(){},o=function(e){return function(){a.forEach((function(t){return t.dirty=e})),u()}},s=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=f(e)})),e.filter(d).forEach(m);var t=e.filter(p);t.forEach(c),t.forEach((function(e){m(e),l(e)})),t.forEach(y)},l=function(e){return e.dirty=0},c=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},p=function(e){return 2!==e.dirty||2===e.dirty&&e.element.parentNode.clientWidth!==e.availableWidth},f=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},d=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},m=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},y=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},v=function(e,t){return function(){e.dirty=t,e.active&&u()}},h=function(e){return function(){a=a.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},b=function(e){return function(){e.active||(e.active=!0,u())}},S=function(e){return function(){return e.active=!1}},w=function(e){e.observeMutations&&(e.observer=new MutationObserver(v(e,1)),e.observer.observe(e.element,e.observeMutations))},g={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},z=null,F=function(){e.clearTimeout(z),z=e.setTimeout(o(2),M.observeWindowDelay)},W=["resize","orientationchange"];return Object.defineProperty(M,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");W.forEach((function(t){e[n](t,F)}))}}),M.observeWindow=!0,M.observeWindowDelay=100,M.fitAll=o(n),M}function E(e,t){var r=Object.assign({},g,t),i=e.map((function(e){var t=Object.assign({},r,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},w(e),e.newbie=!0,e.dirty=!0,a.push(e)}(t),{element:e,fit:v(t,n),unfreeze:b(t),freeze:S(t),unsubscribe:h(t)}}));return u(),i}function M(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?E(t(document.querySelectorAll(e)),n):E([e],n)[0]}}("undefined"==typeof window?null:window),o={name:"FitText",components:{fitty:r},props:{options:{type:Object,required:!1,default:function(){return{minSize:16,maxSize:512,multiLine:!0}}}},data:function(){return{$_fitty:void 0}},destroyed:function(){this.$_fitty.unsubscribe()},mounted:function(){this.$_fitty=r(this.$el,this.options)}},l=(n(326),n(57)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"fit"},[e._t("default")],2)}),[],!1,null,"bfde5660",null);t.default=component.exports},326:function(e,t,n){"use strict";n(314)},327:function(e,t,n){var r=n(49)(!1);r.push([e.i,".fit[data-v-bfde5660]{display:inline-block;white-space:nowrap}",""]),e.exports=r}}]);