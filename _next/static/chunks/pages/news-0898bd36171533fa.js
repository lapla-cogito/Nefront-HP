(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(1470)}])},7961:function(e,t,n){"use strict";n.d(t,{G:function(){return o},P:function(){return x}});var r=n(5893),s=n(8033),i=n(7747),l=n(6725),a=n(4e3),c=n(917);let o=e=>{let{children:t,title:n,nefposition:c,thumbnail:o}=e;return(0,r.jsx)(i.xu,{w:"100%",children:(0,r.jsxs)(l.f,{children:[(0,r.jsx)("img",{src:(0,s.H)(o),alt:n,className:"grid-item-thumbnail"}),(0,r.jsx)(a.x,{fontSize:25,textAlign:"center",children:n}),(0,r.jsx)(a.x,{fontSize:18,textAlign:"center",color:"gray",children:c}),(0,r.jsx)(a.x,{fontSize:14,children:t})]})})},x=()=>(0,r.jsx)(c.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 50%;\n        width:  180px;\n        height: 180px;\n        margin:auto;\n        display:flex;\n      }\n    "})},5716:function(e,t,n){"use strict";var r=n(5893),s=n(7745),i=n(9008),l=n.n(i);n(7294);var a=n(7961);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};t.Z=e=>{let{children:t,title:n}=e,i="".concat(n," - Nefront Inc.");return(0,r.jsx)(s.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"twitter:title",content:i}),(0,r.jsx)("meta",{property:"og:title",content:i})]}),t,(0,r.jsx)(a.P,{})]})})}},5863:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=n(1664),i=n.n(s),l=n(7294),a=e=>{let{isHome:t,post:n}=e,[s,a]=(0,l.useState)(10),[c,o]=(0,l.useState)(!1),[x,d]=(0,l.useState)(n.postArray);return(0,l.useEffect)(()=>{!t&&n.postArray.length<=10?o(!0):!t&&n.postArray.length>10&&d(n.postArray.slice(0,s-1))},[]),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{children:[x.map(e=>{let{date:t,title:n,slug:s}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("li",{className:"news_list_item",children:(0,r.jsxs)(i(),{as:"/news/".concat(s),href:"/news/[...slug]",scroll:!1,children:[(0,r.jsx)("div",{className:"news_list_date",children:(0,r.jsx)("p",{className:"news_item",children:(0,r.jsx)("time",{children:t})})}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("span",{className:"arrow"})]})})},s)}),t?(0,r.jsx)(r.Fragment,{children:n.postsLength>5&&(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsxs)(i(),{href:"/news",className:"more",scroll:!1,children:[(0,r.jsxs)("svg",{width:"300",height:"62",children:[(0,r.jsxs)("linearGradient",{id:"grad3",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#3054d6"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#3054d6"})]}),(0,r.jsx)("rect",{x:"5",y:"5",rx:"25",fill:"none",stroke:"url(#grad3)",width:"266",height:"50"})]}),(0,r.jsx)("span",{children:" More"})]})})}):(0,r.jsx)(r.Fragment,{children:!c&&(0,r.jsx)("button",{onClick:()=>{s+5>=n.postArray.length?(o(!0),d(n.postArray)):(a(s+5),d(n.postArray.slice(0,s-1)))},className:"more",children:"More"})})]})})}},1470:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x}});var r=n(2729),s=n(5893),i=n(6829),l=n(5716),a=n(5863);function c(){let e=(0,r._)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    padding: 50px 0;\n"]);return c=function(){return e},e}let o=i.Z.ul(c());var x=!0;t.default=e=>{let{allPosts:t}=e;return(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("div",{className:"np",children:"All news"}),(0,s.jsx)(o,{children:(0,s.jsx)(a.Z,{isHome:!1,post:t})})]})}},4e3:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var r=n(6554),s=n(7030),i=n(3179),l=n(9653),a=n(5432),c=n(5893),o=(0,r.G)(function(e,t){let n=(0,s.mq)("Text",e),{className:r,align:o,decoration:x,casing:d,...u}=(0,i.Lr)(e),h=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(l.m.p,{ref:t,className:(0,a.cx)("chakra-text",e.className),...h,...u,__css:n})});o.displayName="Text"},6725:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(6554),s=n(9653),i=n(5432),l=n(5893);(0,r.G)(function(e,t){let{isExternal:n,target:r,rel:a,className:c,...o}=e;return(0,l.jsx)(s.m.a,{...o,ref:t,className:(0,i.cx)("chakra-linkbox__overlay",c),rel:n?"noopener noreferrer":a,target:n?"_blank":r,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});var a=(0,r.G)(function(e,t){let{className:n,...r}=e;return(0,l.jsx)(s.m.div,{ref:t,position:"relative",...r,className:(0,i.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=830)}),_N_E=e.O()}]);