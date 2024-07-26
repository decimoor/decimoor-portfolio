(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{7728:function(e,t,r){Promise.resolve().then(r.bind(r,336))},336:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ec}});var n=r(7437),a=r(4733),o=r(2265),i=r(8324),l=r(976),s=r(1584),c=r(8149),d=r(1715),u=r(5171),f=r(1336),p=r(1383),m=r(3201),x="Collapsible",[h,v]=(0,i.b)(x),[b,w]=h(x),y=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:i,disabled:l,onOpenChange:s,...c}=e,[f=!1,p]=(0,d.T)({prop:a,defaultProp:i,onChange:s});return(0,n.jsx)(b,{scope:r,disabled:l,contentId:(0,m.M)(),open:f,onOpenToggle:o.useCallback(()=>p(e=>!e),[p]),children:(0,n.jsx)(u.WV.div,{"data-state":A(f),"data-disabled":l?"":void 0,...c,ref:t})})});y.displayName=x;var j="CollapsibleTrigger",g=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,...a}=e,o=w(j,r);return(0,n.jsx)(u.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":A(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...a,ref:t,onClick:(0,c.M)(e.onClick,o.onOpenToggle)})});g.displayName=j;var N="CollapsibleContent",R=o.forwardRef((e,t)=>{let{forceMount:r,...a}=e,o=w(N,e.__scopeCollapsible);return(0,n.jsx)(p.z,{present:r||o.open,children:e=>{let{present:r}=e;return(0,n.jsx)(C,{...a,ref:t,present:r})}})});R.displayName=N;var C=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:a,children:i,...l}=e,c=w(N,r),[d,p]=o.useState(a),m=o.useRef(null),x=(0,s.e)(t,m),h=o.useRef(0),v=h.current,b=o.useRef(0),y=b.current,j=c.open||d,g=o.useRef(j),R=o.useRef();return o.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,f.b)(()=>{let e=m.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,b.current=t.width,g.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),p(a)}},[c.open,a]),(0,n.jsx)(u.WV.div,{"data-state":A(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!j,...l,ref:x,style:{"--radix-collapsible-content-height":v?"".concat(v,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:j&&i})});function A(e){return e?"open":"closed"}var k=r(7513),I="Accordion",S=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[_,M,E]=(0,l.B)(I),[O,D]=(0,i.b)(I,[E,v]),T=v(),W=o.forwardRef((e,t)=>{let{type:r,...a}=e;return(0,n.jsx)(_.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,n.jsx)(K,{...a,ref:t}):(0,n.jsx)(z,{...a,ref:t})})});W.displayName=I;var[P,B]=O(I),[L,V]=O(I,{collapsible:!1}),z=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:i=()=>{},collapsible:l=!1,...s}=e,[c,u]=(0,d.T)({prop:r,defaultProp:a,onChange:i});return(0,n.jsx)(P,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:u,onItemClose:o.useCallback(()=>l&&u(""),[l,u]),children:(0,n.jsx)(L,{scope:e.__scopeAccordion,collapsible:l,children:(0,n.jsx)(q,{...s,ref:t})})})}),K=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:i=()=>{},...l}=e,[s=[],c]=(0,d.T)({prop:r,defaultProp:a,onChange:i}),u=o.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[c]),f=o.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[c]);return(0,n.jsx)(P,{scope:e.__scopeAccordion,value:s,onItemOpen:u,onItemClose:f,children:(0,n.jsx)(L,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(q,{...l,ref:t})})})}),[U,Z]=O(I),q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:a,dir:i,orientation:l="vertical",...d}=e,f=o.useRef(null),p=(0,s.e)(f,t),m=M(r),x="ltr"===(0,k.gm)(i),h=(0,c.M)(e.onKeyDown,e=>{var t;if(!S.includes(e.key))return;let r=e.target,n=m().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),a=n.findIndex(e=>e.ref.current===r),o=n.length;if(-1===a)return;e.preventDefault();let i=a,s=o-1,c=()=>{(i=a+1)>s&&(i=0)},d=()=>{(i=a-1)<0&&(i=s)};switch(e.key){case"Home":i=0;break;case"End":i=s;break;case"ArrowRight":"horizontal"===l&&(x?c():d());break;case"ArrowDown":"vertical"===l&&c();break;case"ArrowLeft":"horizontal"===l&&(x?d():c());break;case"ArrowUp":"vertical"===l&&d()}null===(t=n[i%o].ref.current)||void 0===t||t.focus()});return(0,n.jsx)(U,{scope:r,disabled:a,direction:i,orientation:l,children:(0,n.jsx)(_.Slot,{scope:r,children:(0,n.jsx)(u.WV.div,{...d,"data-orientation":l,ref:p,onKeyDown:a?void 0:h})})})}),H="AccordionItem",[F,$]=O(H),Q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:a,...o}=e,i=Z(H,r),l=B(H,r),s=T(r),c=(0,m.M)(),d=a&&l.value.includes(a)||!1,u=i.disabled||e.disabled;return(0,n.jsx)(F,{scope:r,open:d,disabled:u,triggerId:c,children:(0,n.jsx)(y,{"data-orientation":i.orientation,"data-state":er(d),...s,...o,ref:t,disabled:u,open:d,onOpenChange:e=>{e?l.onItemOpen(a):l.onItemClose(a)}})})});Q.displayName=H;var X="AccordionHeader",G=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,o=Z(I,r),i=$(X,r);return(0,n.jsx)(u.WV.h3,{"data-orientation":o.orientation,"data-state":er(i.open),"data-disabled":i.disabled?"":void 0,...a,ref:t})});G.displayName=X;var J="AccordionTrigger",Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,o=Z(I,r),i=$(J,r),l=V(J,r),s=T(r);return(0,n.jsx)(_.ItemSlot,{scope:r,children:(0,n.jsx)(g,{"aria-disabled":i.open&&!l.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...s,...a,ref:t})})});Y.displayName=J;var ee="AccordionContent",et=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,o=Z(I,r),i=$(ee,r),l=T(r);return(0,n.jsx)(R,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...l,...a,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function er(e){return e?"open":"closed"}et.displayName=ee;/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let en=(0,r(8030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var ea=r(7440);let eo=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(Q,{ref:t,className:(0,ea.cn)("border-b",r),...a})});eo.displayName="AccordionItem";let ei=o.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsx)(G,{className:"flex",children:(0,n.jsxs)(Y,{ref:t,className:(0,ea.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...o,children:[a,(0,n.jsx)(en,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});ei.displayName=Y.displayName;let el=o.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsx)(et,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:(0,n.jsx)("div",{className:(0,ea.cn)("pb-4 pt-0",r),children:a})})});el.displayName=et.displayName;let es=[{num:"01",title:"Библиотеки для создания интерфейсов",description:"Я глубоко знаком с библиотекой React, что позволяет мне эффективно разрабатывать компоненты, управлять состоянием приложения и использовать hooks для улучшения функциональности.Также я использую Next.js для создания SSR приложений, что обеспечивает быструю загрузку страниц и улучшенную производительность SEO.",href:""},{num:"02",title:"Стилизация",description:"Уверенное владение чистым CSS, а также препроцессорами для создания модульного и поддерживаемого кода. Работаю с популярными CSS-фреймворками, такими как Bootstrap и Tailwind CSS, для быстрой и эффективной разработки адаптивных интерфейсов. В практике пользовался современными UI-библиотеками, такими как Material-UI и Shadcn/ui, для создания компонентов с готовыми стилями, что ускоряет процесс разработки и улучшает визуальное качество приложений.",href:""},{num:"03",title:"Стейт-менеджеры",description:"Я обладаю обширным опытом работы с различными стейт-менеджерами для управления состоянием в React-приложениях. В своей практике я использовал Redux и его упрощенную версию Redux Toolkit (RTK) для структурирования состояния и написания более лаконичного кода. RTK Query позволил мне эффективно управлять асинхронными запросами и кэшированием данных. Для более легких и гибких случаев я применял Zustand, который обеспечивает простое и прямолинейное управление состоянием. Также я знаком с MobX, который предлагает реактивный подход к управлению состоянием и позволяет создавать высокоэффективные приложения с минимальными усилиями.",href:""}];function ec(){let[e,t]=(0,o.useState)(null);return(0,n.jsx)("section",{className:"min-h-[80vh] flex flex-col justify-center py-12 xl:py-0",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:2.4,duration:.4,ease:"easeIn"}},className:"gap-[60px] transition-al duration-300",children:(0,n.jsx)(W,{type:"single",collapsible:!0,children:es.map((t,r)=>(0,n.jsx)(eo,{value:t.num,className:"mb-2",children:(0,n.jsxs)("div",{className:"flex-1 mb-5  flex flex-col  justify-center gap-6 group ".concat(e!==t.num&&e&&"animate-disappear"," transition-all duration-300"),children:[(0,n.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,n.jsx)("div",{className:"text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500",children:t.num}),(0,n.jsx)(ei,{className:"w-[70px] h-[70px] rounded-full bg-white text-primary group-hover:bg-accent transition-all duration-500 flex justify-center items-center"})]}),(0,n.jsx)("h2",{className:"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500",children:t.title}),(0,n.jsx)(el,{children:(0,n.jsx)("p",{className:"text-white/60",children:t.description})})]},r)},r))})})})})}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(4839),a=r(6164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265);/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...f}=e;return(0,n.createElement)("svg",{ref:t,...i,width:a,height:a,stroke:r,strokeWidth:s?24*Number(l)/Number(a):l,className:o("lucide",c),...f},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:s,...c}=r;return(0,n.createElement)(l,{ref:i,iconNode:t,className:o("lucide-".concat(a(e)),s),...c})});return r.displayName="".concat(e),r}},976:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var n=r(2265),a=r(8324),o=r(1584),i=r(1538),l=r(7437);function s(e){let t=e+"CollectionProvider",[r,s]=(0,a.b)(t),[c,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:t,children:r}=e,a=n.useRef(null),o=n.useRef(new Map).current;return(0,l.jsx)(c,{scope:t,itemMap:o,collectionRef:a,children:r})};u.displayName=t;let f=e+"CollectionSlot",p=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=d(f,r),s=(0,o.e)(t,a.collectionRef);return(0,l.jsx)(i.g7,{ref:s,children:n})});p.displayName=f;let m=e+"CollectionItemSlot",x="data-radix-collection-item",h=n.forwardRef((e,t)=>{let{scope:r,children:a,...s}=e,c=n.useRef(null),u=(0,o.e)(t,c),f=d(m,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...s}),()=>void f.itemMap.delete(c))),(0,l.jsx)(i.g7,{[x]:"",ref:u,children:a})});return h.displayName=m,[{Provider:u,Slot:p,ItemSlot:h},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(x,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},s]}},7513:function(e,t,r){"use strict";r.d(t,{gm:function(){return o}});var n=r(2265);r(7437);var a=n.createContext(void 0);function o(e){let t=n.useContext(a);return e||t||"ltr"}}},function(e){e.O(0,[674,971,23,744],function(){return e(e.s=7728)}),_N_E=e.O()}]);