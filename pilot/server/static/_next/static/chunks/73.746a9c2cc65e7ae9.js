"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{85958:function(e,l,t){t.r(l),t.d(l,{default:function(){return ej}});var a=t(85893),r=t(67294),s=t(2093),n=t(1375),o=t(2453),i=t(58989),c=e=>{let{queryAgentURL:l="/api/v1/chat/completions"}=e,t=(0,r.useMemo)(()=>new AbortController,[]),a=(0,r.useCallback)(async e=>{let{context:a,data:r,chatId:s,onMessage:c,onClose:d,onDone:u,onError:x}=e;if(!a){o.ZP.warning(i.Z.t("NoContextTip"));return}let m={...r,conv_uid:s,user_input:a};if(!m.conv_uid){o.ZP.error("conv_uid 不存在，请刷新后重试");return}try{var h;await (0,n.L)("".concat((h="http://30.183.153.13:5000",void 0!==h)?h:"").concat(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m),signal:t.signal,openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===n.a)return},onclose(){t.abort(),null==d||d()},onerror(e){throw Error(e)},onmessage:e=>{var l;let t=null===(l=e.data)||void 0===l?void 0:l.replaceAll("\\n","\n");"[DONE]"===t?null==u||u():(null==t?void 0:t.startsWith("[ERROR]"))?null==x||x(null==t?void 0:t.replace("[ERROR]","")):null==c||c(t)}})}catch(e){t.abort(),null==x||x("Sorry, We meet some error, please try agin later.",e)}},[l]);return(0,r.useEffect)(()=>()=>{t.abort()},[]),a},d=t(39332),u=t(99513),x=t(24019),m=t(50888),h=t(97937),p=t(63606),g=t(50228),v=t(87547),f=t(89035),b=t(33035),j=t(12767),y=t(94184),w=t.n(y),Z=t(66309),_=t(81799),N=t(41468),k=t(44442),C=t(29158),S=t(98165),P=t(38426),R=t(61607),E=t(36782),O=t(31482),D=t(71577),M=t(57132),I=t(79166),L=t(93179),q=t(20640),A=t.n(q);function T(e){let{code:l,language:t}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(D.ZP,{className:"absolute right-3 top-2 text-gray-300 hover:!text-gray-200 bg-gray-700",type:"text",icon:(0,a.jsx)(M.Z,{}),onClick:()=>{let e=A()(l);o.ZP[e?"success":"error"](e?"Copy success":"Copy failed")}}),(0,a.jsx)(L.Z,{language:t,style:I.Z,children:l})]})}let z={code(e){var l;let{inline:t,node:r,className:s,children:n,style:o,...i}=e,c=/language-(\w+)/.exec(s||"");return!t&&c?(0,a.jsx)(T,{code:n,language:null!==(l=null==c?void 0:c[1])&&void 0!==l?l:"javascript"}):(0,a.jsx)("code",{...i,style:o,className:"px-[6px] py-[2px] rounded bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-800 text-sm",children:n})},ul(e){let{children:l}=e;return(0,a.jsx)("ul",{className:"py-1",children:l})},ol(e){let{children:l}=e;return(0,a.jsx)("ol",{className:"py-1",children:l})},li(e){let{children:l,ordered:t}=e;return(0,a.jsx)("li",{className:"text-sm leading-7 ml-5 pl-2 text-gray-600 dark:text-gray-300 ".concat(t?"list-decimal":"list-disc"),children:l})},table(e){let{children:l}=e;return(0,a.jsx)("table",{className:"my-2 rounded-tl-md rounded-tr-md max-w-full bg-white dark:bg-gray-900 text-sm rounded-lg overflow-hidden",children:l})},thead(e){let{children:l}=e;return(0,a.jsx)("thead",{className:"bg-[#fafafa] dark:bg-black font-semibold",children:l})},th(e){let{children:l}=e;return(0,a.jsx)("th",{className:"!text-left p-4",children:l})},td(e){let{children:l}=e;return(0,a.jsx)("td",{className:"p-4 border-t border-[#f0f0f0] dark:border-gray-700",children:l})},h1(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-2xl font-bold my-4 border-b border-slate-300 pb-4",children:l})},h2(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-xl font-bold my-3",children:l})},h3(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-lg font-semibold my-2",children:l})},h4(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-base font-semibold my-1",children:l})},a(e){let{children:l,href:t}=e;return(0,a.jsxs)("div",{className:"inline-block text-blue-600 dark:text-blue-400",children:[(0,a.jsx)(C.Z,{className:"mr-1"}),(0,a.jsx)("a",{href:t,target:"_blank",children:l})]})},img(e){let{src:l,alt:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(P.Z,{className:"min-h-[1rem] max-w-full max-h-full border rounded",src:l,alt:t,placeholder:(0,a.jsx)(Z.Z,{icon:(0,a.jsx)(S.Z,{spin:!0}),color:"processing",children:"Image Loading..."}),fallback:"/images/fallback.png"})})},blockquote(e){let{children:l}=e;return(0,a.jsx)("blockquote",{className:"py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm",children:l})},"chart-view":function(e){var l,t,r;let s,{children:n}=e,[o]=n;try{s=JSON.parse(o)}catch(e){console.log(e,o),s={type:"response_table",sql:"",data:[]}}let i=(null==s?void 0:null===(l=s.data)||void 0===l?void 0:l[0])?null===(t=Object.keys(null==s?void 0:null===(r=s.data)||void 0===r?void 0:r[0]))||void 0===t?void 0:t.map(e=>({title:e,dataIndex:e,key:e})):[],c={key:"chart",label:"Chart",children:(0,a.jsx)(O._z,{data:null==s?void 0:s.data,chartType:(0,O.aG)(null==s?void 0:s.type)})},d={key:"sql",label:"SQL",children:(0,a.jsx)(T,{code:(0,E.WU)(null==s?void 0:s.sql,{language:"mysql"}),language:"sql"})},u={key:"data",label:"Data",children:(0,a.jsx)(R.Z,{dataSource:null==s?void 0:s.data,columns:i})},x=(null==s?void 0:s.type)==="response_table"?[u,d]:[c,d,u];return(0,a.jsx)("div",{children:(0,a.jsx)(k.Z,{defaultActiveKey:(null==s?void 0:s.type)==="response_table"?"data":"chart",items:x,size:"small"})})}},F={todo:{bgClass:"bg-gray-500",icon:(0,a.jsx)(x.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,a.jsx)(m.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,a.jsx)(h.Z,{className:"ml-2"})},completed:{bgClass:"bg-green-500",icon:(0,a.jsx)(p.Z,{className:"ml-2"})}};function H(e){return e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>")}var J=(0,r.memo)(function(e){let{children:l,content:t,isChartChat:s,onLinkClick:n}=e,{scene:o}=(0,r.useContext)(N.p),{context:i,model_name:c,role:d}=t,u="view"===d,{relations:x,value:m,cachePlguinContext:h}=(0,r.useMemo)(()=>{if("string"!=typeof i)return{relations:[],value:"",cachePlguinContext:[]};let[e,l]=i.split("	relations:"),t=l?l.split(","):[],a=[],r=0,s=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var l;console.log(e);let t=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),s=JSON.parse(t),n="<custom-view>".concat(r,"</custom-view>");return a.push({...s,result:H(null!==(l=s.result)&&void 0!==l?l:"")}),r++,n}catch(l){return console.log(l.message,l),e}});return{relations:t,cachePlguinContext:a,value:s}},[i]),p=(0,r.useMemo)(()=>({"custom-view"(e){var l;let{children:t}=e,r=+t.toString();if(!h[r])return t;let{name:s,status:n,err_msg:o,result:i}=h[r],{bgClass:c,icon:d}=null!==(l=F[n])&&void 0!==l?l:{};return(0,a.jsxs)("div",{className:"bg-white dark:bg-[#212121] rounded-lg overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,a.jsxs)("div",{className:w()("flex px-4 md:px-6 py-2 items-center text-white text-sm",c),children:[s,d]}),i?(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:(0,a.jsx)(b.D,{components:z,rehypePlugins:[j.Z],children:null!=i?i:""})}):(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:o})]})}}),[i,h]);return(0,a.jsxs)("div",{className:w()("relative flex flex-wrap w-full px-2 sm:px-4 py-2 sm:py-6 rounded-xl break-words",{"bg-slate-100 dark:bg-[#353539]":u,"lg:w-full xl:w-full pl-0":["chat_with_db_execute","chat_dashboard"].includes(o)}),children:[(0,a.jsx)("div",{className:"mr-2 flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full text-lg sm:mr-4",children:u?(0,_.A)(c)||(0,a.jsx)(g.Z,{}):(0,a.jsx)(v.Z,{})}),(0,a.jsxs)("div",{className:"flex-1 overflow-hidden items-center text-md leading-8",children:[!u&&"string"==typeof i&&i,u&&s&&"object"==typeof i&&(0,a.jsxs)("div",{children:["[".concat(i.template_name,"]: "),(0,a.jsxs)("span",{className:"text-[#1677ff] cursor-pointer",onClick:n,children:[(0,a.jsx)(f.Z,{className:"mr-1"}),i.template_introduce||"More Details"]})]}),u&&"string"==typeof i&&(0,a.jsx)(b.D,{components:{...z,...p},rehypePlugins:[j.Z],children:H(m)}),!!(null==x?void 0:x.length)&&(0,a.jsx)("div",{className:"flex flex-wrap mt-2",children:null==x?void 0:x.map((e,l)=>(0,a.jsx)(Z.Z,{color:"#108ee9",children:e},e+l))})]}),l]})}),V=t(59301),W=t(41132),$=t(74312),G=t(3414),B=t(72868),K=t(59562),Q=t(14553),U=t(25359),X=t(7203),Y=t(48665),ee=t(26047),el=t(99056),et=t(57814),ea=t(63955),er=t(33028),es=t(40911),en=t(66478),eo=t(83062),ei=t(50489),ec=t(67421),ed=e=>{var l;let{conv_index:t,question:s,knowledge_space:n}=e,{t:i}=(0,ec.$G)(),{chatId:c}=(0,r.useContext)(N.p),[d,u]=(0,r.useState)(""),[x,m]=(0,r.useState)(4),[h,p]=(0,r.useState)(""),g=(0,r.useRef)(null),[v,f]=o.ZP.useMessage(),[b,j]=(0,r.useState)({});(0,r.useEffect)(()=>{(0,ei.Vx)((0,ei.Lu)()).then(e=>{var l;console.log(e),j(null!==(l=e[1])&&void 0!==l?l:{})}).catch(e=>{console.log(e)})},[]);let y=(0,r.useCallback)((e,l)=>{l?(0,ei.Vx)((0,ei.Eb)(c,t)).then(e=>{var l,t,a,r;let s=null!==(l=e[1])&&void 0!==l?l:{};u(null!==(t=s.ques_type)&&void 0!==t?t:""),m(parseInt(null!==(a=s.score)&&void 0!==a?a:"4")),p(null!==(r=s.messages)&&void 0!==r?r:"")}).catch(e=>{console.log(e)}):(u(""),m(4),p(""))},[c,t]),w=(0,$.Z)(G.Z)(e=>{let{theme:l}=e;return{backgroundColor:"dark"===l.palette.mode?"#FBFCFD":"#0E0E10",...l.typography["body-sm"],padding:l.spacing(1),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,width:"100%",height:"100%"}});return(0,a.jsxs)(B.L,{onOpenChange:y,children:[f,(0,a.jsx)(eo.Z,{title:i("Rating"),children:(0,a.jsx)(K.Z,{slots:{root:Q.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,a.jsx)(V.Z,{})})}),(0,a.jsxs)(U.Z,{children:[(0,a.jsx)(X.Z,{disabled:!0,sx:{minHeight:0}}),(0,a.jsx)(Y.Z,{sx:{width:"100%",maxWidth:350,display:"grid",gap:3,padding:1},children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault();let l={conv_uid:c,conv_index:t,question:s,knowledge_space:n,score:x,ques_type:d,messages:h};console.log(l),(0,ei.Vx)((0,ei.VC)({data:l})).then(e=>{v.open({type:"success",content:"save success"})}).catch(e=>{v.open({type:"error",content:"save error"})})},children:(0,a.jsxs)(ee.Z,{container:!0,spacing:.5,columns:13,sx:{flexGrow:1},children:[(0,a.jsx)(ee.Z,{xs:3,children:(0,a.jsx)(w,{children:i("Q_A_Category")})}),(0,a.jsx)(ee.Z,{xs:10,children:(0,a.jsx)(el.Z,{action:g,value:d,placeholder:"Choose one…",onChange:(e,l)=>u(null!=l?l:""),...d&&{endDecorator:(0,a.jsx)(Q.ZP,{size:"sm",variant:"plain",color:"neutral",onMouseDown:e=>{e.stopPropagation()},onClick:()=>{var e;u(""),null===(e=g.current)||void 0===e||e.focusVisible()},children:(0,a.jsx)(W.Z,{})}),indicator:null},sx:{width:"100%"},children:null===(l=Object.keys(b))||void 0===l?void 0:l.map(e=>(0,a.jsx)(et.Z,{value:e,children:b[e]},e))})}),(0,a.jsx)(ee.Z,{xs:3,children:(0,a.jsx)(w,{children:(0,a.jsx)(eo.Z,{title:(0,a.jsx)(Y.Z,{children:(0,a.jsx)("div",{children:i("feed_back_desc")})}),variant:"solid",placement:"left",children:i("Q_A_Rating")})})}),(0,a.jsx)(ee.Z,{xs:10,sx:{pl:0,ml:0},children:(0,a.jsx)(ea.Z,{"aria-label":"Custom",step:1,min:0,max:5,valueLabelFormat:function(e){return({0:i("Lowest"),1:i("Missed"),2:i("Lost"),3:i("Incorrect"),4:i("Verbose"),5:i("Best")})[e]},valueLabelDisplay:"on",marks:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],sx:{width:"90%",pt:3,m:2,ml:1},onChange:e=>{var l;return m(null===(l=e.target)||void 0===l?void 0:l.value)},value:x})}),(0,a.jsx)(ee.Z,{xs:13,children:(0,a.jsx)(er.Z,{placeholder:i("Please_input_the_text"),value:h,onChange:e=>p(e.target.value),minRows:2,maxRows:4,endDecorator:(0,a.jsx)(es.ZP,{level:"body-xs",sx:{ml:"auto"},children:i("input_count")+h.length+i("input_unit")}),sx:{width:"100%",fontSize:14}})}),(0,a.jsx)(ee.Z,{xs:13,children:(0,a.jsx)(en.Z,{type:"submit",variant:"outlined",sx:{width:"100%",height:"100%"},children:i("submit")})})]})})})]})]})},eu=t(32983),ex=t(12069),em=t(96486),eh=t.n(em),ep=t(38954),eg=t(98399),ev=e=>{var l;let{messages:t,onSubmit:n}=e,{dbParam:i,currentDialogue:c,scene:x,model:m,refreshDialogList:h,chatId:p,agentList:g}=(0,r.useContext)(N.p),{t:v}=(0,ec.$G)(),f=(0,d.useSearchParams)(),b=null!==(l=f&&f.get("spaceNameOriginal"))&&void 0!==l?l:"",[j,y]=(0,r.useState)(!1),[Z,k]=(0,r.useState)(!1),[C,S]=(0,r.useState)(t),[P,R]=(0,r.useState)(""),E=(0,r.useRef)(null),O=(0,r.useMemo)(()=>"chat_dashboard"===x,[x]),D=(0,r.useMemo)(()=>{switch(x){case"chat_agent":return g.join(",");case"chat_excel":return null==c?void 0:c.select_param;default:return b||i}},[x,g,c,i,b]),I=async e=>{if(!j&&e.trim())try{y(!0),await n(e,{select_param:null!=D?D:""})}finally{y(!1)}},L=e=>{try{return JSON.parse(e)}catch(l){return e}},[q,T]=o.ZP.useMessage(),z=async e=>{let l=null==e?void 0:e.replace(/\trelations:.*/g,""),t=A()(l);t?l?q.open({type:"success",content:v("Copy_success")}):q.open({type:"warning",content:v("Copy_nothing")}):q.open({type:"error",content:v("Copry_error")})};return(0,s.Z)(async()=>{let e=(0,eg.a_)();e&&e.id===p&&(await I(e.message),h(),localStorage.removeItem(eg.rU))},[p]),(0,r.useEffect)(()=>{let e=t;O&&(e=eh().cloneDeep(t).map(e=>((null==e?void 0:e.role)==="view"&&"string"==typeof(null==e?void 0:e.context)&&(e.context=L(null==e?void 0:e.context)),e))),S(e.filter(e=>["view","human"].includes(e.role)))},[O,t]),(0,r.useEffect)(()=>{setTimeout(()=>{var e;null===(e=E.current)||void 0===e||e.scrollTo(0,E.current.scrollHeight)},50)},[t]),(0,a.jsxs)(a.Fragment,{children:[T,(0,a.jsx)("div",{ref:E,className:"flex flex-1 overflow-y-auto pb-8 w-full flex-col",children:(0,a.jsx)("div",{className:"flex items-center flex-1 flex-col text-sm leading-6 text-slate-900 dark:text-slate-300 sm:text-base sm:leading-7",children:C.length?C.map((e,l)=>{var t;return(0,a.jsx)(J,{content:e,isChartChat:O,onLinkClick:()=>{k(!0),R(JSON.stringify(null==e?void 0:e.context,null,2))},children:"view"===e.role&&(0,a.jsxs)("div",{className:"flex w-full flex-row-reverse pt-2 md:pt-4 border-t border-gray-200 mt-2 md:mt-4",children:[(0,a.jsx)(ed,{conv_index:Math.ceil((l+1)/2),question:null===(t=null==C?void 0:C.filter(l=>(null==l?void 0:l.role)==="human"&&(null==l?void 0:l.order)===e.order)[0])||void 0===t?void 0:t.context,knowledge_space:b||i||""}),(0,a.jsx)(eo.Z,{title:v("Copy"),children:(0,a.jsx)(en.Z,{onClick:()=>z(null==e?void 0:e.context),slots:{root:Q.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,a.jsx)(M.Z,{})})})]})},l)}):(0,a.jsx)(eu.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"flex items-center justify-center flex-col h-full w-full",description:"Start a conversation"})})}),(0,a.jsx)("div",{className:w()("relative after:absolute after:-top-8 after:h-8 after:w-full after:bg-gradient-to-t after:from-white after:to-transparent dark:after:from-[#212121]",{"cursor-not-allowed":"chat_excel"===x&&!(null==c?void 0:c.select_param)}),children:(0,a.jsxs)("div",{className:"flex flex-wrap w-full py-2 sm:pt-6 sm:pb-10",children:[m&&(0,a.jsx)("div",{className:"mr-2 flex items-center h-10",children:(0,_.A)(m)}),(0,a.jsx)(ep.Z,{loading:j,onSubmit:I})]})}),(0,a.jsx)(ex.default,{title:"JSON Editor",open:Z,width:"60%",cancelButtonProps:{hidden:!0},onOk:()=>{k(!1)},onCancel:()=>{k(!1)},children:(0,a.jsx)(u.Z,{className:"w-full h-[500px]",language:"json",value:P})})]})},ef=t(70803),eb=t(45247),ej=()=>{var e;let l=(0,d.useSearchParams)(),{scene:t,chatId:n,model:o,setModel:i}=(0,r.useContext)(N.p),u=c({}),x=null!==(e=l&&l.get("initMessage"))&&void 0!==e?e:"",[m,h]=(0,r.useState)(!1),[p,g]=(0,r.useState)(),[v,f]=(0,r.useState)([]),b=async()=>{h(!0);let[,e]=await (0,ei.Vx)((0,ei.$i)(n));f(null!=e?e:[]),h(!1)},j=e=>{var l;let t=null===(l=e[e.length-1])||void 0===l?void 0:l.context;if(t)try{let e=JSON.parse(t);g((null==e?void 0:e.template_name)==="report"?null==e?void 0:e.charts:void 0)}catch(e){g(void 0)}};(0,s.Z)(async()=>{let e=(0,eg.a_)();e&&e.id===n||await b()},[x,n]),(0,r.useEffect)(()=>{var e,l;if(!v.length)return;let t=null===(e=null===(l=v.filter(e=>"view"===e.role))||void 0===l?void 0:l.slice(-1))||void 0===e?void 0:e[0];(null==t?void 0:t.model_name)&&i(t.model_name),j(v)},[v.length]);let y=(0,r.useCallback)((e,l)=>new Promise(a=>{let r=[...v,{role:"human",context:e,model_name:o,order:0,time_stamp:0},{role:"view",context:"",model_name:o,order:0,time_stamp:0}],s=r.length-1;f([...r]),u({context:e,data:{...l,chat_mode:t||"chat_normal",model_name:o},chatId:n,onMessage:e=>{r[s].context=e,f([...r])},onDone:()=>{j(r),a()},onClose:()=>{j(r),a()},onError:e=>{r[s].context=e,f([...r]),a()}})}),[v,u,o]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eb.Z,{visible:m}),(0,a.jsx)(ef.Z,{refreshHistory:b,modelChange:e=>{i(e)}}),(0,a.jsxs)("div",{className:"px-4 flex flex-1 flex-wrap overflow-hidden relative",children:[!!(null==p?void 0:p.length)&&(0,a.jsx)("div",{className:"w-full xl:w-3/4 h-3/5 xl:pr-4 xl:h-full overflow-y-auto",children:(0,a.jsx)(O.ZP,{chartsData:p})}),!(null==p?void 0:p.length)&&"chat_dashboard"===t&&(0,a.jsx)(eu.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"w-full xl:w-3/4 h-3/5 xl:h-full pt-0 md:pt-10"}),(0,a.jsx)("div",{className:w()("flex flex-1 flex-col overflow-hidden",{"px-0 xl:pl-4 h-2/5 xl:h-full border-t xl:border-t-0 xl:border-l":"chat_dashboard"===t,"h-full lg:px-8":"chat_dashboard"!==t}),children:(0,a.jsx)(ev,{messages:v,onSubmit:y})})]})]})}},38954:function(e,l,t){t.d(l,{Z:function(){return j}});var a=t(85893),r=t(27496),s=t(59566),n=t(71577),o=t(67294),i=t(2487),c=t(83062),d=t(2453),u=t(74627),x=t(39479),m=t(51009),h=t(58299),p=t(577),g=t(30119),v=t(67421);let f=e=>{let{data:l,loading:t,submit:r,close:s}=e,{t:n}=(0,v.$G)(),o=e=>()=>{r(e),s()};return(0,a.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:(0,a.jsx)(i.Z,{dataSource:null==l?void 0:l.data,loading:t,rowKey:e=>e.prompt_name,renderItem:e=>(0,a.jsx)(i.Z.Item,{onClick:o(e.content),children:(0,a.jsx)(c.Z,{title:e.content,children:(0,a.jsx)(i.Z.Item.Meta,{style:{cursor:"copy"},title:e.prompt_name,description:n("Prompt_Info_Scene")+"：".concat(e.chat_scene,"，")+n("Prompt_Info_Sub_Scene")+"：".concat(e.sub_chat_scene)})})},e.prompt_name)})})};var b=e=>{let{submit:l}=e,{t}=(0,v.$G)(),[r,s]=(0,o.useState)(!1),[n,i]=(0,o.useState)("common"),{data:b,loading:j}=(0,p.Z)(()=>(0,g.PR)("/prompt/list",{prompt_type:n}),{refreshDeps:[n],onError:e=>{d.ZP.error(null==e?void 0:e.message)}});return(0,a.jsx)(u.Z,{title:(0,a.jsx)(x.Z.Item,{label:"Prompt "+t("Type"),children:(0,a.jsx)(m.default,{style:{width:130},value:n,onChange:e=>{i(e)},options:[{label:t("Public")+" Prompts",value:"common"},{label:t("Private")+" Prompts",value:"private"}]})}),content:(0,a.jsx)(f,{data:b,loading:j,submit:l,close:()=>{s(!1)}}),placement:"topRight",trigger:"click",open:r,onOpenChange:e=>{s(e)},children:(0,a.jsx)(c.Z,{title:t("Click_Select")+" Prompt",children:(0,a.jsx)(h.Z,{className:"bottom-32"})})})},j=function(e){let{children:l,loading:t,onSubmit:i,...c}=e,[d,u]=(0,o.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default.TextArea,{className:"flex-1",size:"large",value:d,autoSize:{minRows:1,maxRows:4},...c,onPressEnter:e=>{if(d.trim()&&13===e.keyCode){if(e.shiftKey){u(e=>e+"\n");return}i(d),setTimeout(()=>{u("")},0)}},onChange:e=>{if("number"==typeof c.maxLength){u(e.target.value.substring(0,c.maxLength));return}u(e.target.value)}}),(0,a.jsx)(n.ZP,{className:"ml-2 flex items-center justify-center",size:"large",type:"text",loading:t,icon:(0,a.jsx)(r.Z,{}),onClick:()=>{i(d)}}),(0,a.jsx)(b,{submit:e=>{u(d+e)}}),l]})}},45247:function(e,l,t){var a=t(85893),r=t(50888);l.Z=function(e){let{visible:l}=e;return l?(0,a.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,a.jsx)(r.Z,{})}):null}}}]);