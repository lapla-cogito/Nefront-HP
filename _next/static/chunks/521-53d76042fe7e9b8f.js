(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return i},default:function(){return l}});let r=n(8754),a=(n(7294),r._(n(8976)));function o(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let n=a.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let l=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=l?l().then(o):Promise.resolve(o(()=>null))}):(delete r.webpack,delete r.modules,i(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let r=n(8754),a=r._(n(7294)),o=a.default.createContext(null)},8976:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let r=n(8754),a=r._(n(7294)),o=n(2254),i=[],l=[],u=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function i(){if(!r){let t=new c(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!u){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return i()})}function s(e,t){!function(){i();let e=a.default.useContext(o.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let l=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:r.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return s.preload=()=>i(),s.displayName="LoadableComponent",a.default.forwardRef(s)}(s,e)}function f(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return f(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(u=!0,t());f(l,e).then(n,n)})),window.__NEXT_PRELOADREADY=d.preloadReady;let p=d},5152:function(e,t,n){e.exports=n(5677)},9559:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=!(arguments.length>1)||void 0===arguments[1]||arguments[1],o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=r||"";return a&&(i=r.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,r){return t>0&&t+e.length!==r.length&&e.search(n)>-1&&":"!==r.charAt(t-2)&&("-"!==r.charAt(t+e.length)||"-"===r.charAt(t-1))&&0>r.charAt(t-1).search(/[^\s-]/)?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})),o&&(i="string"==typeof(t=e=i)&&-1!==t.indexOf("@")?(console.warn("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e),i};var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},1638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var r=u(n(6161)),a=u(n(9559)),o=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],l=["page","hitType"];function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function _(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}var h=function(){var e,t;function n(){var e=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),_(this,"reset",function(){e.isInitialized=!1,e._testMode=!1,e._currentMeasurementId,e._hasLoadedGA=!1,e._isQueuing=!1,e._queueGtag=[]}),_(this,"_gtag",function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];e._testMode?e._queueGtag.push(n):e._isQueuing?e._queueGtag.push(n):r.default.apply(void 0,n)}),_(this,"_loadGA",function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!=typeof window&&"undefined"!=typeof document&&!e._hasLoadedGA){var a=document.createElement("script");a.async=!0,a.src="".concat(r,"?id=").concat(t),n&&a.setAttribute("nonce",n),document.body.appendChild(a),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},e._hasLoadedGA=!0}}),_(this,"_toGtagOptions",function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce(function(e,n){var r=function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(n,2)||g(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=r[0],o=r[1];return t[a]?e[t[a]]=o:e[a]=o,e},{})}}),_(this,"initialize",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw Error("Require GA_MEASUREMENT_ID");var r="string"==typeof t?[{trackingId:t}]:t;e._currentMeasurementId=r[0].trackingId;var a=n.gaOptions,o=n.gtagOptions,i=n.nonce,l=n.testMode,u=void 0!==l&&l,s=n.gtagUrl;if(e._testMode=u,u||e._loadGA(e._currentMeasurementId,i,s),e.isInitialized||(e._gtag("js",new Date),r.forEach(function(t){var n=p(p(p({},e._toGtagOptions(p(p({},a),t.gaOptions))),o),t.gtagOptions);Object.keys(n).length?e._gtag("config",t.trackingId,n):e._gtag("config",t.trackingId)})),e.isInitialized=!0,!u){var c=d(e._queueGtag);for(e._queueGtag=[],e._isQueuing=!1;c.length;){var f=c.shift();e._gtag.apply(e,d(f)),"get"===f[0]&&(e._isQueuing=!0)}}}),_(this,"set",function(t){if(!t){console.warn("`fieldsObject` is required in .set()");return}if("object"!==c(t)){console.warn("Expected `fieldsObject` arg to be an Object");return}0===Object.keys(t).length&&console.warn("empty `fieldsObject` given to .set()"),e._gaCommand("set",t)}),_(this,"_gaCommandSendEvent",function(t,n,r,a,o){e._gtag("event",n,p(p({event_category:t,event_label:r,value:a},o&&{non_interaction:o.nonInteraction}),e._toGtagOptions(o)))}),_(this,"_gaCommandSendEventParameters",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommandSendEvent.apply(e,d(n.slice(1)));else{var a=n[0],i=a.eventCategory,l=a.eventAction,u=a.eventLabel,c=a.eventValue,f=(a.hitType,s(a,o));e._gaCommandSendEvent(i,l,u,c,f)}}),_(this,"_gaCommandSendTiming",function(t,n,r,a){e._gtag("event","timing_complete",{name:n,value:r,event_category:t,event_label:a})}),_(this,"_gaCommandSendPageview",function(t,n){if(n&&Object.keys(n).length){var r=e._toGtagOptions(n),a=r.title,o=r.location,l=s(r,i);e._gtag("event","page_view",p(p(p(p({},t&&{page_path:t}),a&&{page_title:a}),o&&{page_location:o}),l))}else t?e._gtag("event","page_view",{page_path:t}):e._gtag("event","page_view")}),_(this,"_gaCommandSendPageviewParameters",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommandSendPageview.apply(e,d(n.slice(1)));else{var a=n[0],o=a.page,i=(a.hitType,s(a,l));e._gaCommandSendPageview(o,i)}}),_(this,"_gaCommandSend",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var a="string"==typeof n[0]?n[0]:n[0].hitType;switch(a){case"event":e._gaCommandSendEventParameters.apply(e,n);break;case"pageview":e._gaCommandSendPageviewParameters.apply(e,n);break;case"timing":e._gaCommandSendTiming.apply(e,d(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(a));break;default:console.warn("Send command doesn't exist: ".concat(a))}}),_(this,"_gaCommandSet",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]=_({},n[0],n[1])),e._gtag("set",e._toGtagOptions(n[0]))}),_(this,"_gaCommand",function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];switch(t){case"send":e._gaCommandSend.apply(e,r);break;case"set":e._gaCommandSet.apply(e,r);break;default:console.warn("Command doesn't exist: ".concat(t))}}),_(this,"ga",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommand.apply(e,n);else{var a=n[0];e._gtag("get",e._currentMeasurementId,"client_id",function(t){e._isQueuing=!1;var n=e._queueGtag;for(a({get:function(n){return"clientId"===n?t:"trackingId"===n?e._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var r=n.shift();e._gtag.apply(e,d(r))}}),e._isQueuing=!0}return e.ga}),_(this,"event",function(t,n){if("string"==typeof t)e._gtag("event",t,e._toGtagOptions(n));else{var r=t.action,o=t.category,i=t.label,l=t.value,u=t.nonInteraction,s=t.transport;if(!o||!r){console.warn("args.category AND args.action are required in event()");return}var c={hitType:"event",eventCategory:(0,a.default)(o),eventAction:(0,a.default)(r)};i&&(c.eventLabel=(0,a.default)(i)),void 0!==l&&("number"!=typeof l?console.warn("Expected `args.value` arg to be a Number."):c.eventValue=l),void 0!==u&&("boolean"!=typeof u?console.warn("`args.nonInteraction` must be a boolean."):c.nonInteraction=u),void 0!==s&&("string"!=typeof s?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(s)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),c.transport=s)),e._gaCommand("send",c)}}),_(this,"send",function(t){e._gaCommand("send",t)}),this.reset()}return e=[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}],y(n.prototype,e),t&&y(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}();t.GA4=h;var v=new h;t.default=v},6161:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"undefined"!=typeof window&&(void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(e=window).gtag.apply(e,n))}},9089:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.ZP=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(1638));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}a.GA4;var i=a.default;t.ZP=i},4e3:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(6554),a=n(7030),o=n(3179),i=n(9653),l=n(5432),u=n(5893),s=(0,r.G)(function(e,t){let n=(0,a.mq)("Text",e),{className:r,align:s,decoration:c,casing:d,...f}=(0,o.Lr)(e),p=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(i.m.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...f,__css:n})});s.displayName="Text"},2177:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var r=n(6554),a=n(9653),o=n(5893),i=(0,r.G)(function(e,t){let{templateAreas:n,gap:r,rowGap:i,columnGap:l,column:u,row:s,autoFlow:c,autoRows:d,templateRows:f,autoColumns:p,templateColumns:g,...m}=e;return(0,o.jsx)(a.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:i,gridColumnGap:l,gridAutoColumns:p,gridColumn:u,gridRow:s,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:f,gridTemplateColumns:g},...m})});i.displayName="Grid";var l=n(8940),u=n(7634),s=n(3951),c=(0,r.G)(function(e,t){let{columns:n,spacingX:r,spacingY:a,spacing:c,minChildWidth:d,...f}=e,p=(0,l.F)(),g=d?(0,s.XQ)(d,e=>{let t=(0,u.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(p);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,s.XQ)(n,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,o.jsx)(i,{ref:t,gap:c,columnGap:r,rowGap:a,templateColumns:g,...f})});c.displayName="SimpleGrid"},6725:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(6554),a=n(9653),o=n(5432),i=n(5893);(0,r.G)(function(e,t){let{isExternal:n,target:r,rel:l,className:u,...s}=e;return(0,i.jsx)(a.m.a,{...s,ref:t,className:(0,o.cx)("chakra-linkbox__overlay",u),rel:n?"noopener noreferrer":l,target:n?"_blank":r,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});var l=(0,r.G)(function(e,t){let{className:n,...r}=e;return(0,i.jsx)(a.m.div,{ref:t,position:"relative",...r,className:(0,o.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})})}}]);