(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{50318:function(i,e,t){"use strict";t.d(e,{Z:function(){return b}});var r=t(46750),n=t(40431),o=t(86006),a=t(89791),l=t(53832),s=t(47562),c=t(50645),d=t(88930),v=t(18587);function u(i){return(0,v.d6)("MuiDivider",i)}(0,v.sI)("MuiDivider",["root","horizontal","vertical","insetContext","insetNone"]);var m=t(326),h=t(9268);let p=["className","children","component","inset","orientation","role","slots","slotProps"],f=i=>{let{orientation:e,inset:t}=i,r={root:["root",e,t&&`inset${(0,l.Z)(t)}`]};return(0,s.Z)(r,u,{})},g=(0,c.Z)("hr",{name:"JoyDivider",slot:"Root",overridesResolver:(i,e)=>e.root})(({theme:i,ownerState:e})=>(0,n.Z)({"--Divider-thickness":"1px","--Divider-lineColor":i.vars.palette.divider},"none"===e.inset&&{"--_Divider-inset":"0px"},"context"===e.inset&&{"--_Divider-inset":"var(--Divider-inset, 0px)"},{margin:"initial",marginInline:"vertical"===e.orientation?"initial":"var(--_Divider-inset)",marginBlock:"vertical"===e.orientation?"var(--_Divider-inset)":"initial",position:"relative",alignSelf:"stretch",flexShrink:0},e.children?{"--Divider-gap":i.spacing(1),"--Divider-childPosition":"50%",display:"flex",flexDirection:"vertical"===e.orientation?"column":"row",alignItems:"center",whiteSpace:"nowrap",textAlign:"center",border:0,fontFamily:i.vars.fontFamily.body,fontSize:i.vars.fontSize.sm,"&::before, &::after":{position:"relative",inlineSize:"vertical"===e.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===e.orientation?"initial":"var(--Divider-thickness)",backgroundColor:"var(--Divider-lineColor)",content:'""'},"&::before":{marginInlineEnd:"vertical"===e.orientation?"initial":"min(var(--Divider-childPosition) * 999, var(--Divider-gap))",marginBlockEnd:"vertical"===e.orientation?"min(var(--Divider-childPosition) * 999, var(--Divider-gap))":"initial",flexBasis:"var(--Divider-childPosition)"},"&::after":{marginInlineStart:"vertical"===e.orientation?"initial":"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",marginBlockStart:"vertical"===e.orientation?"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))":"initial",flexBasis:"calc(100% - var(--Divider-childPosition))"}}:{border:"none",listStyle:"none",backgroundColor:"var(--Divider-lineColor)",inlineSize:"vertical"===e.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===e.orientation?"initial":"var(--Divider-thickness)"})),x=o.forwardRef(function(i,e){let t=(0,d.Z)({props:i,name:"JoyDivider"}),{className:o,children:l,component:s=null!=l?"div":"hr",inset:c,orientation:v="horizontal",role:u="hr"!==s?"separator":void 0,slots:x={},slotProps:b={}}=t,y=(0,r.Z)(t,p),z=(0,n.Z)({},t,{inset:c,role:u,orientation:v,component:s}),Z=f(z),D=(0,n.Z)({},y,{component:s,slots:x,slotProps:b}),[S,j]=(0,m.Z)("root",{ref:e,className:(0,a.Z)(Z.root,o),elementType:g,externalForwardedProps:D,ownerState:z,additionalProps:(0,n.Z)({as:s,role:u},"separator"===u&&"vertical"===v&&{"aria-orientation":"vertical"})});return(0,h.jsx)(S,(0,n.Z)({},j,{children:l}))});x.muiName="Divider";var b=x},53047:function(i,e,t){"use strict";t.d(e,{ZP:function(){return S}});var r=t(46750),n=t(40431),o=t(86006),a=t(53832),l=t(99179),s=t(73811),c=t(47562),d=t(50645),v=t(88930),u=t(47093),m=t(326),h=t(18587);function p(i){return(0,h.d6)("MuiIconButton",i)}let f=(0,h.sI)("MuiIconButton",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg"]);var g=t(42858),x=t(9268);let b=["children","action","component","color","disabled","variant","size","slots","slotProps"],y=i=>{let{color:e,disabled:t,focusVisible:r,focusVisibleClassName:n,size:o,variant:l}=i,s={root:["root",t&&"disabled",r&&"focusVisible",l&&`variant${(0,a.Z)(l)}`,e&&`color${(0,a.Z)(e)}`,o&&`size${(0,a.Z)(o)}`]},d=(0,c.Z)(s,p,{});return r&&n&&(d.root+=` ${n}`),d},z=(0,d.Z)("button")(({theme:i,ownerState:e})=>{var t,r,o,a;return[(0,n.Z)({"--Icon-margin":"initial"},e.instanceSize&&{"--IconButton-size":({sm:"2rem",md:"2.5rem",lg:"3rem"})[e.instanceSize]},"sm"===e.size&&{"--Icon-fontSize":"calc(var(--IconButton-size, 2rem) / 1.6)","--CircularProgress-size":"20px",minWidth:"var(--IconButton-size, 2rem)",minHeight:"var(--IconButton-size, 2rem)",fontSize:i.vars.fontSize.sm,paddingInline:"2px"},"md"===e.size&&{"--Icon-fontSize":"calc(var(--IconButton-size, 2.5rem) / 1.667)","--CircularProgress-size":"24px",minWidth:"var(--IconButton-size, 2.5rem)",minHeight:"var(--IconButton-size, 2.5rem)",fontSize:i.vars.fontSize.md,paddingInline:"0.25rem"},"lg"===e.size&&{"--Icon-fontSize":"calc(var(--IconButton-size, 3rem) / 1.714)","--CircularProgress-size":"28px",minWidth:"var(--IconButton-size, 3rem)",minHeight:"var(--IconButton-size, 3rem)",fontSize:i.vars.fontSize.lg,paddingInline:"0.375rem"},{WebkitTapHighlightColor:"transparent",paddingBlock:0,fontFamily:i.vars.fontFamily.body,fontWeight:i.vars.fontWeight.md,margin:"var(--IconButton-margin)",borderRadius:`var(--IconButton-radius, ${i.vars.radius.sm})`,border:"none",boxSizing:"border-box",backgroundColor:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",[i.focus.selector]:i.focus.default}),null==(t=i.variants[e.variant])?void 0:t[e.color],{"&:hover":{"@media (hover: hover)":null==(r=i.variants[`${e.variant}Hover`])?void 0:r[e.color]}},{"&:active":null==(o=i.variants[`${e.variant}Active`])?void 0:o[e.color]},{[`&.${f.disabled}`]:null==(a=i.variants[`${e.variant}Disabled`])?void 0:a[e.color]}]}),Z=(0,d.Z)(z,{name:"JoyIconButton",slot:"Root",overridesResolver:(i,e)=>e.root})({}),D=o.forwardRef(function(i,e){var t;let a=(0,v.Z)({props:i,name:"JoyIconButton"}),{children:c,action:d,component:h="button",color:p="primary",disabled:f,variant:z="soft",size:D="md",slots:S={},slotProps:j={}}=a,I=(0,r.Z)(a,b),P=o.useContext(g.Z),k=i.variant||P.variant||z,w=i.size||P.size||D,{getColor:B}=(0,u.VT)(k),C=B(i.color,P.color||p),_=null!=(t=i.disabled)?t:P.disabled||f,N=o.useRef(null),R=(0,l.Z)(N,e),{focusVisible:$,setFocusVisible:O,getRootProps:E}=(0,s.Z)((0,n.Z)({},a,{disabled:_,rootRef:R}));o.useImperativeHandle(d,()=>({focusVisible:()=>{var i;O(!0),null==(i=N.current)||i.focus()}}),[O]);let W=(0,n.Z)({},a,{component:h,color:C,disabled:_,variant:k,size:w,focusVisible:$,instanceSize:i.size}),H=y(W),L=(0,n.Z)({},I,{component:h,slots:S,slotProps:j}),[M,T]=(0,m.Z)("root",{ref:e,className:H.root,elementType:Z,getSlotProps:E,externalForwardedProps:L,ownerState:W});return(0,x.jsx)(M,(0,n.Z)({},T,{children:c}))});D.muiName="IconButton";var S=D},20736:function(i,e,t){Promise.resolve().then(t.bind(t,93768))},93768:function(i,e,t){"use strict";t.r(e);var r=t(9268),n=t(11196),o=t(86006),a=t(50318),l=t(90545),s=t(77614),c=t(53113),d=t(35086),v=t(53047),u=t(54842),m=t(19700),h=t(89749),p=t(56008),f=t(76394),g=t.n(f);e.default=function(){var i;let e=(0,p.useRouter)(),[t,f]=(0,o.useState)(!1),x=(0,m.cI)(),{data:b}=(0,n.Z)(async()=>await (0,h.Kw)("/v1/chat/dialogue/scenes")),y=async i=>{let{query:t}=i;try{var r,n;f(!0),x.reset();let i=await (0,h.Kw)("/v1/chat/dialogue/new",{chat_mode:"chat_normal"});(null==i?void 0:i.success)&&(null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.conv_uid)&&e.push("/chat?id=".concat(null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.conv_uid,"&initMessage=").concat(t))}catch(i){}finally{f(!1)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mx-auto h-full justify-center flex max-w-3xl flex-col gap-8 px-5 pt-6",children:[(0,r.jsx)("div",{className:"my-0 mx-auto",children:(0,r.jsx)(g(),{src:"/LOGO.png",alt:"Revolutionizing Database Interactions with Private LLM Technology",width:856,height:160,className:"w-full",unoptimized:!0})}),(0,r.jsx)("div",{className:"grid gap-8 lg:grid-cols-3",children:(0,r.jsxs)("div",{className:"lg:col-span-3",children:[(0,r.jsx)(a.Z,{className:"text-[#878c93]",children:"Quick Start"}),(0,r.jsx)(l.Z,{className:"grid pt-7 rounded-xl gap-2 lg:grid-cols-3 lg:gap-6",sx:{["& .".concat(s.Z.root)]:{color:"var(--joy-palette-primary-solidColor)",backgroundColor:"var(--joy-palette-primary-solidBg)",height:"52px","&: hover":{backgroundColor:"var(--joy-palette-primary-solidHoverBg)"}},["& .".concat(s.Z.disabled)]:{cursor:"not-allowed",pointerEvents:"unset",color:"var(--joy-palette-primary-plainColor)",backgroundColor:"var(--joy-palette-primary-softDisabledBg)","&: hover":{backgroundColor:"var(--joy-palette-primary-softDisabledBg)"}}},children:null==b?void 0:null===(i=b.data)||void 0===i?void 0:i.map(i=>(0,r.jsx)(c.Z,{disabled:null==i?void 0:i.show_disable,size:"md",variant:"solid",className:"text-base rounded-none",onClick:async()=>{var t,r;let n=await (0,h.Kw)("/v1/chat/dialogue/new",{chat_mode:i.chat_scene});(null==n?void 0:n.success)&&(null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.conv_uid)&&e.push("/chat?id=".concat(null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.conv_uid,"&scene=").concat(i.chat_scene))},children:i.scene_name},i.chat_scene))})]})}),(0,r.jsx)("div",{className:"mt-6 mb-[10%] pointer-events-none inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center max-md:border-t xl:max-w-4xl [&>*]:pointer-events-auto",children:(0,r.jsx)("form",{style:{maxWidth:"100%",width:"100%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",height:"52px"},onSubmit:i=>{x.handleSubmit(y)(i)},children:(0,r.jsx)(d.ZP,{sx:{width:"100%"},variant:"outlined",placeholder:"Ask anything",endDecorator:(0,r.jsx)(v.ZP,{type:"submit",disabled:t,children:(0,r.jsx)(u.Z,{})}),...x.register("query")})})})]})})}},53534:function(i,e,t){"use strict";var r=t(24214),n=t(52040);let o=r.Z.create({baseURL:n.env.API_BASE_URL});o.defaults.timeout=1e4,o.interceptors.response.use(i=>i.data,i=>Promise.reject(i)),e.Z=o},89749:function(i,e,t){"use strict";t.d(e,{Ej:function(){return v},Kw:function(){return c},PR:function(){return d},Tk:function(){return s}});var r=t(21628),n=t(53534),o=t(84835);let a={"content-type":"application/json"},l=i=>{if(!(0,o.isPlainObject)(i))return JSON.stringify(i);let e={...i};for(let i in e){let t=e[i];"string"==typeof t&&(e[i]=t.trim())}return JSON.stringify(e)},s=(i,e)=>{if(e){let t=Object.keys(e).filter(i=>void 0!==e[i]&&""!==e[i]).map(i=>"".concat(i,"=").concat(e[i])).join("&");t&&(i+="?".concat(t))}return n.Z.get("/api"+i,{headers:a}).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})},c=(i,e)=>{let t=l(e);return n.Z.post("/api"+i,{body:t,headers:a}).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})},d=(i,e)=>n.Z.post(i,e,{headers:a}).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)}),v=(i,e)=>n.Z.post(i,e).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})}},function(i){i.O(0,[180,355,932,230,196,86,394,822,253,769,744],function(){return i(i.s=20736)}),_N_E=i.O()}]);