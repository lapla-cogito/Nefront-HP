(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{4184:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&t.push(l)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0!==(n=(function(){return o}).apply(e,[]))&&(t.exports=n)}()},993:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[...slug]",function(){return n(4122)}])},7961:function(t,e,n){"use strict";n.d(e,{G:function(){return s},P:function(){return u}});var r=n(5893),o=n(8033),i=n(7747),a=n(6725),l=n(4e3),c=n(917);let s=t=>{let{children:e,title:n,nefposition:c,thumbnail:s}=t;return(0,r.jsx)(i.xu,{w:"100%",children:(0,r.jsxs)(a.f,{children:[(0,r.jsx)("img",{src:(0,o.H)(s),alt:n,className:"grid-item-thumbnail"}),(0,r.jsx)(l.x,{fontSize:25,textAlign:"center",children:n}),(0,r.jsx)(l.x,{fontSize:18,textAlign:"center",color:"gray",children:c}),(0,r.jsx)(l.x,{fontSize:14,children:e})]})})},u=()=>(0,r.jsx)(c.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 50%;\n        width:  180px;\n        height: 180px;\n        margin:auto;\n        display:flex;\n      }\n    "})},5716:function(t,e,n){"use strict";var r=n(5893),o=n(7745),i=n(9008),a=n.n(i);n(7294);var l=n(7961);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};e.Z=t=>{let{children:e,title:n}=t,i="".concat(n," - Nefront Inc.");return(0,r.jsx)(o.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"twitter:title",content:i}),(0,r.jsx)("meta",{property:"og:title",content:i})]}),e,(0,r.jsx)(l.P,{})]})})}},4122:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return I},default:function(){return H}});var r,o,i=n(5893),a=n(5716),l=n(6611),c=t=>{let{content:e}=t;return(0,i.jsx)("div",{className:"znc my-8 px-6 text-left",children:(0,i.jsx)("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e}})})},s=n(8033),u=n(7294),h=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return h(e,t),e}(Error);function d(t,e){if(!t)throw new f(e)}function p(t){var e=Object.entries(t).filter(function(t){return null!=t[1]}).map(function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n)))});return e.length>0?"?".concat(e.join("&")):""}var w=n(4184),y=n.n(w),v=(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},x=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},g=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,l=void 0===a?"windowCenter":a,c=n.windowWidth,s=void 0===c?550:c;!function(t,e,n){var r=e.height,o=e.width,i=g(e,["height","width"]),a=b({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(t,"",Object.keys(a).map(function(t){return"".concat(t,"=").concat(a[t])}).join(", "));if(n)var c=window.setInterval(function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(t){console.error(t)}},1e3)}(t,b({height:i,width:s},"windowCenter"===l?{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-s/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-i/2}:{top:(window.screen.height-i)/2,left:(window.screen.width-s)/2}),r)},e.handleClick=function(t){var n,r,o;return n=void 0,r=void 0,o=function(){var e,n,r,o,i,a,l,c,s;return x(this,function(u){switch(u.label){case 0:var h;if(n=(e=this.props).beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,l=e.openShareDialogOnClick,c=o(a,e.opts),r)return[2];if(t.preventDefault(),!n||!((h=s=n())&&("object"==typeof h||"function"==typeof h)&&"function"==typeof h.then))return[3,2];return[4,s];case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(c),i&&i(t,c),[2]}})},new(r||(r=Promise))(function(t,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function l(t){try{c(o.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):((n=e.value)instanceof r?n:new r(function(t){t(n)})).then(a,l)}c((o=o.apply(e,n||[])).next())})},e}return v(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,o=t.disabledStyle,i=t.forwardedRef,a=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),c=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,g(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=y()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),f=l?b(b({backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"},c),r&&o):b(b({},c),r&&o);return u.createElement("button",b({},s,{"aria-label":s["aria-label"]||a,className:h,onClick:this.handleClick,ref:i,style:f}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(u.Component),j=function(){return(j=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},O=function(t,e,n,r){function o(o,i){var a=n(o),l=j({},o);return Object.keys(a).forEach(function(t){delete l[t]}),u.createElement(m,j({},r,l,{forwardedRef:i,networkName:t,networkLink:e,opts:n(o)}))}return o.displayName="ShareButton-".concat(t),(0,u.forwardRef)(o)},_=O("twitter",function(t,e){var n=e.title,r=e.via,o=e.hashtags,i=void 0===o?[]:o,a=e.related,l=void 0===a?[]:a;return d(t,"twitter.url"),d(Array.isArray(i),"twitter.hashtags is not an array"),d(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+p({url:t,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})},function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}},{windowWidth:550,windowHeight:400}),k=function(){return(k=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},S=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};function N(t){var e=function(e){var n=e.bgStyle,r=e.borderRadius,o=e.iconFillColor,i=e.round,a=e.size,l=S(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return u.createElement("svg",k({viewBox:"0 0 64 64",width:a,height:a},l),i?u.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):u.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:t.color,style:n}),u.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var C=N({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"}),P=O("line",function(t,e){var n=e.title;return d(t,"line.url"),"https://social-plugins.line.me/lineit/share"+p({url:t,text:n})},function(t){return{title:t.title}},{windowWidth:500,windowHeight:500}),E=N({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"}),z=t=>{let{title:e,date:n}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"ptitle",children:e}),(0,i.jsx)("p",{className:"pdate",children:n})]})},A=t=>{let{post:e}=t,[n,r]=(0,u.useState)("");return(0,u.useEffect)(()=>{let t=new URL(window.location.href);r(t.origin)},[]),(0,i.jsxs)("section",{className:"mt-14 mb-8",children:[void 0!==e.thumbnail&&(0,i.jsx)("img",{src:(0,s.H)(e.thumbnail),style:{display:"block",margin:"0 auto",textAlign:"center",verticalAlign:"middle"}}),(0,i.jsx)(z,{title:e.title,date:e.date}),(0,i.jsxs)("div",{className:"shr",children:[(0,i.jsx)(_,{title:e.title,url:n+"/news/"+e.slug,via:"NefrontInc",className:"m2",children:(0,i.jsx)(C,{size:40,round:!0})}),(0,i.jsx)(P,{title:e.title,url:n+"/news/"+e.slug,className:"m2",children:(0,i.jsx)(E,{size:40,round:!0})})]})]})},I=!0,H=t=>{let{post:e}=t;return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)("div",{className:"h-16"}),(0,i.jsx)(A,{post:e}),(0,i.jsx)(c,{content:e.content})]})}},4e3:function(t,e,n){"use strict";n.d(e,{x:function(){return s}});var r=n(6554),o=n(7030),i=n(3179),a=n(9653),l=n(5432),c=n(5893),s=(0,r.G)(function(t,e){let n=(0,o.mq)("Text",t),{className:r,align:s,decoration:u,casing:h,...f}=(0,i.Lr)(t),d=function(t){let e=Object.assign({},t);for(let t in e)void 0===e[t]&&delete e[t];return e}({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return(0,c.jsx)(a.m.p,{ref:e,className:(0,l.cx)("chakra-text",t.className),...d,...f,__css:n})});s.displayName="Text"},6725:function(t,e,n){"use strict";n.d(e,{f:function(){return l}});var r=n(6554),o=n(9653),i=n(5432),a=n(5893);(0,r.G)(function(t,e){let{isExternal:n,target:r,rel:l,className:c,...s}=t;return(0,a.jsx)(o.m.a,{...s,ref:e,className:(0,i.cx)("chakra-linkbox__overlay",c),rel:n?"noopener noreferrer":l,target:n?"_blank":r,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});var l=(0,r.G)(function(t,e){let{className:n,...r}=t;return(0,a.jsx)(o.m.div,{ref:e,position:"relative",...r,className:(0,i.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})})}},function(t){t.O(0,[774,888,179],function(){return t(t.s=993)}),_N_E=t.O()}]);