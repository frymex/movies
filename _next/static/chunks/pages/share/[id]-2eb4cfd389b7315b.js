(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{6316:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share/[id]",function(){return n(9321)}])},9321:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h}});var r=n(5893),i=n(5555),o=n(7350),a=n(7073),s=n(7754),l=n(3100),c=n(6367),u=n(4418),d=n(9222),m=n(9008),p=n.n(m),f=n(7294),h=!0;t.default=function(e){let{movie:t}=e;(0,o.p)();let n="".concat(t.movie_title),m="Купить билеты на фильм ".concat(t.movie_title," в ").concat(t.position," (").concat(t.date,")"),[h,x]=f.useState("");f.useEffect(()=>{x(window.location.href)},[]);let g=h+t.cache_id,j=t.picture_url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:m}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:g}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:m}),(0,r.jsx)("meta",{property:"og:image",content:j}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:g}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:m}),(0,r.jsx)("meta",{property:"twitter:image",content:j})]}),(0,r.jsx)(a.K,{w:"full",paddingTop:10,direction:"column",spacing:5,children:(0,r.jsx)(s.M,{w:"full",children:(0,r.jsxs)(l.xu,{position:"relative",w:"18em",overflow:"hidden",borderRadius:"lg",bgColor:"#595757",textAlign:"center",alignItems:"center",children:[(0,r.jsx)(a.K,{position:"absolute",w:"full",direction:"row",justifyContent:"space-between",children:(0,r.jsx)(l.xu,{})}),(0,r.jsx)(c.E,{minHeight:"400px",alt:t.movie_title,src:t.picture_url}),(0,r.jsxs)(l.xu,{p:"1rem",children:[(0,r.jsx)(u.X,{fontWeight:700,size:"md",children:t.movie_title}),(0,r.jsxs)(u.X,{mt:"1rem",size:"sm",children:["Кинотеатр: ",t.position]}),(0,r.jsxs)(u.X,{mt:0,size:"sm",children:["Дата: ",t.date]}),(0,r.jsx)(d.z,{mt:"1rem",onClick:()=>window.open(t.buy_url,"mv_0","left=100,top=100,width=800,height=800"),colorScheme:"blue",leftIcon:(0,r.jsx)(i.h,{}),children:"Купить"})]})]})})})]})}},9222:function(e,t,n){"use strict";n.d(t,{z:function(){return x}});var r=n(7294),[i,o]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=n(9282),s=n(5432),l=n(5893);function c(e){let{children:t,className:n,...i}=e,o=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,s.cx)("chakra-button__icon",n);return(0,l.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:c,children:o})}c.displayName="ButtonIcon";var u=n(295);function d(e){let{label:t,placement:n,spacing:i="0.5rem",children:o=(0,l.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:d,...m}=e,p=(0,s.cx)("chakra-button__spinner",c),f="start"===n?"marginEnd":"marginStart",h=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[f]:t?i:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,f,i]);return(0,l.jsx)(a.m.div,{className:p,...m,__css:h,children:o})}d.displayName="ButtonSpinner";var m=n(1103),p=n(5059),f=n(1639),h=n(3179),x=(0,p.G)((e,t)=>{let n=o(),i=(0,f.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:u,isActive:p,children:x,leftIcon:j,rightIcon:_,loadingText:y,iconSpacing:v="0.5rem",type:b,spinner:w,spinnerPlacement:N="start",className:k,as:E,...C}=(0,h.Lr)(e),S=(0,r.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:e}}},[i,n]),{ref:I,type:z}=function(e){let[t,n]=(0,r.useState)(!e),i=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:i,type:t?"button":void 0}}(E),B={rightIcon:_,leftIcon:j,iconSpacing:v,children:x};return(0,l.jsxs)(a.m.button,{ref:(0,m.qq)(t,I),as:E,type:null!=b?b:z,"data-active":(0,s.PB)(p),"data-loading":(0,s.PB)(u),__css:S,className:(0,s.cx)("chakra-button",k),...C,disabled:c||u,children:[u&&"start"===N&&(0,l.jsx)(d,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:v,children:w}),u?y||(0,l.jsx)(a.m.span,{opacity:0,children:(0,l.jsx)(g,{...B})}):(0,l.jsx)(g,{...B}),u&&"end"===N&&(0,l.jsx)(d,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:v,children:w})]})});function g(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:i}=e;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(c,{marginEnd:i,children:t}),r,n&&(0,l.jsx)(c,{marginStart:i,children:n})]})}x.displayName="Button"},78:function(e,t,n){"use strict";n.d(t,{I:function(){return s}});var r=n(6877),i=n(5059),o=n(7294),a=n(5893);function s(e){let{viewBox:t="0 0 24 24",d:n,displayName:s,defaultProps:l={}}=e,c=o.Children.toArray(e.path),u=(0,i.G)((e,i)=>(0,a.jsx)(r.J,{ref:i,viewBox:t,...l,...e,children:c.length?c:(0,a.jsx)("path",{fill:"currentColor",d:n})}));return u.displayName=s,u}},5555:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(78),i=n(5893),o=(0,r.I)({displayName:"ExternalLinkIcon",path:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,i.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,i.jsx)("path",{d:"M15 3h6v6"}),(0,i.jsx)("path",{d:"M10 14L21 3"})]})})},6367:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(5059),i=n(5893),o=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:o,...a}=e;return(0,i.jsx)("img",{width:n,height:r,ref:t,alt:o,...a})});o.displayName="NativeImage";var a=n(6245),s=n(7294),l=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,c=n(9282),u=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:u,srcSet:d,align:m,fit:p,loading:f,ignoreFallback:h,crossOrigin:x,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:j,..._}=e,y=null!=f||h||!(void 0!==n||void 0!==r),v=function(e){let{loading:t,src:n,srcSet:r,onLoad:i,onError:o,crossOrigin:l,sizes:c,ignoreFallback:u}=e,[d,m]=(0,s.useState)("pending");(0,s.useEffect)(()=>{m(n?"loading":"pending")},[n]);let p=(0,s.useRef)(),f=(0,s.useCallback)(()=>{if(!n)return;h();let e=new Image;e.src=n,l&&(e.crossOrigin=l),r&&(e.srcset=r),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{h(),m("loaded"),null==i||i(e)},e.onerror=e=>{h(),m("failed"),null==o||o(e)},p.current=e},[n,l,r,c,i,o,t]),h=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,a.G)(()=>{if(!u)return"loading"===d&&f(),()=>{h()}},[d,f,u]),u?"loaded":d}({...e,ignoreFallback:y}),b=l(v,g),w={ref:t,objectFit:p,objectPosition:m,...y?_:function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(_,["onError","onLoad"])};return b?r||(0,i.jsx)(c.m.img,{as:o,className:"chakra-image__placeholder",src:n,...w}):(0,i.jsx)(c.m.img,{as:o,src:u,srcSet:d,crossOrigin:x,loading:f,referrerPolicy:j,className:"chakra-image",...w})});u.displayName="Image"},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(5059),i=n(1639),o=n(3179),a=n(9282),s=n(5432),l=n(5893),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Heading",e),{className:r,...c}=(0,o.Lr)(e);return(0,l.jsx)(a.m.h2,{ref:t,className:(0,s.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},1103:function(e,t,n){"use strict";n.d(t,{lq:function(){return i},qq:function(){return o}});var r=n(7294);function i(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function o(...e){return(0,r.useMemo)(()=>i(...e),e)}},7350:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});var r=n(803),i=n(3237),o=n(1204),a=n(7294);function s(e){let{theme:t}=(0,o.uP)(),n=(0,r.OX)();return(0,a.useMemo)(()=>(0,i.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6316)}),_N_E=e.O()}]);