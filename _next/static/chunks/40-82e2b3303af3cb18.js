(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{8693:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6512:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,l=n(o(7294)),u=o(5509),a=o(4514),f=o(4130),c=o(146),i=o(4318),s=o(6514),d=o(8681),p=o(6675),h=o(8693),v=o(6085);let y=new Set;function b(e,t,o,n,r){if(r||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:f.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let o,n;let{href:f,as:y,children:m,prefetch:_,passHref:C,replace:x,shallow:M,scroll:k,locale:j,onClick:E,onMouseEnter:O,onTouchStart:P,legacyBehavior:L=!1}=e,T=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,L&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let w=!1!==_,R=l.default.useContext(s.RouterContext),I=l.default.useContext(d.AppRouterContext),S=null!=R?R:I,N=!R,{href:A,as:D}=l.default.useMemo(()=>{if(!R){let e=g(f);return{href:e,as:y?g(y):e}}let[e,t]=u.resolveHref(R,f,!0);return{href:e,as:y?u.resolveHref(R,y):t||e}},[R,f,y]),U=l.default.useRef(A),K=l.default.useRef(D);L&&(n=l.default.Children.only(o));let H=L?n&&"object"==typeof n&&n.ref:t,[q,B,Z]=p.useIntersection({rootMargin:"200px"}),z=l.default.useCallback(e=>{(K.current!==D||U.current!==A)&&(Z(),K.current=D,U.current=A),q(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[D,H,A,Z,q]);l.default.useEffect(()=>{S&&B&&w&&b(S,A,D,{locale:j},N)},[D,A,B,j,w,null==R?void 0:R.locale,S,N]);let G={ref:z,onClick(e){L||"function"!=typeof E||E(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,o,n,r,u,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!a.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:u,locale:c,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,S,A,D,x,M,k,j,N,w)},onMouseEnter(e){L||"function"!=typeof O||O(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(w||!N)&&b(S,A,D,{locale:j,priority:!0,bypassPrefetchedCheck:!0},N)},onTouchStart(e){L||"function"!=typeof P||P(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(w||!N)&&b(S,A,D,{locale:j,priority:!0,bypassPrefetchedCheck:!0},N)}};if(c.isAbsoluteUrl(D))G.href=D;else if(!L||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(D,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||v.addBasePath(i.addLocale(D,e,null==R?void 0:R.defaultLocale))}return L?l.default.cloneElement(n,G):l.default.createElement("a",Object.assign({},T,G),o)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6675:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function({rootRef:e,rootMargin:t,disabled:o}){let f=o||!l,[c,i]=n.useState(!1),s=n.useRef(null),d=n.useCallback(e=>{s.current=e},[]);n.useEffect(()=>{if(l){if(f||c)return;let o=s.current;if(o&&o.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(o,e=>e&&i(e),{root:null==e?void 0:e.current,rootMargin:t});return n}}else if(!c){let e=r.requestIdleCallback(()=>i(!0));return()=>r.cancelIdleCallback(e)}},[f,t,e,c,s.current]);let p=n.useCallback(()=>{i(!1)},[]);return[d,c,p]};var n=o(7294),r=o(6682);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(6512)},8911:function(e,t,o){"use strict";o.d(t,{x:function(){return i}});var n=o(5059),r=o(6670),l=o(3179),u=o(4579),a=o(5432),f=o(888),c=o(5893),i=(0,n.G)(function(e,t){let o=(0,r.mq)("Text",e),{className:n,align:i,decoration:s,casing:d,...p}=(0,l.Lr)(e),h=(0,f.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(u.m.p,{ref:t,className:(0,a.cx)("chakra-text",e.className),...h,...p,__css:o})});i.displayName="Text"}}]);