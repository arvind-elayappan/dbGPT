(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{27547:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(64938)),s=n(85893),a=(0,o.default)((0,s.jsx)("path",{d:"M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"}),"Groups");t.Z=a},15398:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(64938)),s=n(85893),a=(0,o.default)((0,s.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.Z=a},64938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(52869)},52869:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return s},createSvgIcon:function(){return a.Z},debounce:function(){return c},deprecatedPropType:function(){return i},isMuiElement:function(){return u},ownerDocument:function(){return l},ownerWindow:function(){return d},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return v},unstable_useEnhancedEffect:function(){return f},unstable_useId:function(){return _},unsupportedProp:function(){return h},useControlled:function(){return P},useEventCallback:function(){return x},useForkRef:function(){return Z},useIsFocusVisible:function(){return j}});var r=n(37078),o=n(98216),s=function(...e){return e.reduce((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})},a=n(34678),c=n(39336).Z,i=function(e,t){return()=>null},u=n(18719).Z,l=n(82690).Z,d=n(74161).Z;n(87462);var p=function(e,t){return()=>null},m=n(7960).Z,f=n(73546).Z,_=n(92996).Z,h=function(e,t,n,r,o){return null},P=n(19032).Z,x=n(59948).Z,Z=n(33703).Z,j=n(99962).Z;let v={configure:e=>{r.Z.configure(e)}}},57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294);function o(){let[,e]=r.useReducer(e=>e+1,0);return e}},40534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prompt",function(){return n(88120)}])},88120:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(85893),o=n(67294),s=n(83062),a=n(42075),c=n(2453),i=n(82610),u=n(71577),l=n(61607),d=n(39479),p=n(12069),m=n(75081),f=n(59566),_=n(30119),h=n(67421),P=e=>{let{children:t,prompt_type:n,item:s,mutate:a,setTableParams:i,pageSize:l}=e,{t:P}=(0,h.$G)(),[x,Z]=(0,o.useState)(!1),[j,v]=(0,o.useState)(!1),[g]=d.Z.useForm(),b=()=>{Z(!1),g.resetFields()},I=async()=>{try{let e=g.getFieldsValue(),t={prompt_type:n,...e};if(v(!0),s){let n=await (0,_.PR)("/prompt/update",t);n.success?(a(t=>{let{data:n}=t;return{data:n.map(t=>t.prompt_name===s.prompt_name?{...t,...e}:t)}}),c.ZP.success(P("Edit_Success")),v(!1),Z(!1)):(v(!1),c.ZP.error(null==n?void 0:n.err_msg))}else{let e=await (0,_.PR)("/prompt/add",t);e.success?(a(e=>{let{data:n}=e,r=n.length>=l?n.slice(0,-1):n;return{data:[t,...r]}}),i(e=>({...e,pagination:{...e.pagination,total:e.pagination.total+1}})),c.ZP.success(P("Add_Success")),v(!1),Z(!1)):(v(!1),c.ZP.error(null==e?void 0:e.err_msg))}}catch(e){v(!1),console.error(e),c.ZP.error(P("Error_Message"))}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"inline-block",onClick:()=>{Z(!0),s&&g.setFieldsValue(s)},children:t}),(0,r.jsx)(p.default,{title:s?P("Edit")+" Prompts":P("Add")+" Prompts",open:x,onCancel:b,footer:null,children:(0,r.jsx)(m.Z,{spinning:j,children:(0,r.jsxs)(d.Z,{form:g,name:"prompt-item-".concat((null==s?void 0:s.prompt_name)||"new"),labelCol:{span:4},wrapperCol:{span:20},onFinish:I,children:[(0,r.jsx)(d.Z.Item,{name:"chat_scene",label:P("Prompt_Info_Scene"),rules:[{required:!0,message:P("Please_Input")+P("Prompt_Info_Scene")}],children:(0,r.jsx)(f.default,{})}),(0,r.jsx)(d.Z.Item,{name:"sub_chat_scene",label:P("Prompt_Info_Sub_Scene"),rules:[{required:!0,message:P("Please_Input")+P("Prompt_Info_Sub_Scene")}],children:(0,r.jsx)(f.default,{})}),(0,r.jsx)(d.Z.Item,{name:"prompt_name",label:P("Prompt_Info_Name"),rules:[{required:!0,message:P("Please_Input")+P("Prompt_Info_Name")}],children:(0,r.jsx)(f.default,{disabled:!!s})}),(0,r.jsx)(d.Z.Item,{name:"content",label:P("Prompt_Info_Content"),rules:[{required:!0,message:P("Please_Input")+P("Prompt_Info_Content")}],children:(0,r.jsx)(f.default.TextArea,{rows:6})}),(0,r.jsxs)(d.Z.Item,{wrapperCol:{offset:15,span:10},children:[(0,r.jsx)(u.ZP,{onClick:b,className:"mr-2",children:P("cancel")}),(0,r.jsx)(u.ZP,{type:"primary",htmlType:"submit",children:P("submit")})]})]})})})]})},x=n(24969),Z=n(27547),j=n(15398),v=n(577),g=()=>{let{t:e}=(0,h.$G)(),t=[{label:e("Public")+" Prompts",key:"common",icon:(0,r.jsx)(Z.Z,{})},{label:e("Private")+" Prompts",key:"private",icon:(0,r.jsx)(j.Z,{})}],n=(t,n)=>[{title:e("Prompt_Info_Name"),dataIndex:"prompt_name",key:"prompt_name"},{title:e("Prompt_Info_Scene"),dataIndex:"chat_scene",key:"chat_scene"},{title:e("Prompt_Info_Sub_Scene"),dataIndex:"sub_chat_scene",key:"sub_chat_scene"},{title:e("Prompt_Info_Content"),dataIndex:"content",key:"content",render:e=>(0,r.jsx)(s.Z,{placement:"topLeft",title:e,children:e})},{title:e("Operation"),dataIndex:"operate",key:"operate",render:(o,s)=>(0,r.jsx)(a.Z,{size:"middle",children:(0,r.jsx)(P,{prompt_type:t,item:s,mutate:n,children:(0,r.jsx)("a",{children:e("Edit")})})})}],[d,p]=(0,o.useState)("common"),[m,f]=(0,o.useState)({pagination:{current:1,pageSize:1e3,hideOnSinglePage:!0,showQuickJumper:!0,showTotal:(e,t)=>"第 ".concat(t[0],"-").concat(t[1]," 条，共 ").concat(e," 条")}}),{data:g,loading:b,run:I,mutate:y}=(0,v.Z)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n={prompt_type:t,...e.pagination};return(0,_.PR)("/prompt/list",n)},{onSuccess:e=>{f(t=>{var n;return{...t,pagination:{...t.pagination,total:(null==e?void 0:e.totalCount)||(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.length)}}})},onError:e=>{c.ZP.error(null==e?void 0:e.message)}}),S=(0,o.useMemo)(()=>n(d,y),[d,y]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{onClick:e=>{let t=e.key;p(t),I(m,t)},selectedKeys:[d],mode:"horizontal",items:t}),(0,r.jsxs)("div",{className:"px-6 py-4",children:[(0,r.jsxs)("div",{className:"flex flex-row-reverse mb-4",children:[(0,r.jsx)(P,{prompt_type:d,mutate:y,setTableParams:f,pageSize:m.pagination.pageSize,children:(0,r.jsxs)(u.ZP,{className:"flex items-center",children:[(0,r.jsx)(x.Z,{}),e("Add")," Prompts"]})}),"common"===d&&(0,r.jsxs)(u.ZP,{className:"mr-2 flex items-center",disabled:!0,children:[(0,r.jsx)(x.Z,{}),e("Add")," Prompts ",e("template")]})]}),(0,r.jsx)(l.Z,{columns:S,dataSource:null==g?void 0:g.data,loading:b,rowKey:e=>e.prompt_name,pagination:m.pagination,onChange:e=>{let t={...m,pagination:{...m.pagination,...e}};f(t),I(t,d)},scroll:{y:600}})]})]})}},30119:function(e,t,n){"use strict";n.d(t,{Tk:function(){return c},PR:function(){return i}});var r=n(2453),o=n(6154);let s=o.Z.create({baseURL:"http://30.183.153.13:5000"});s.defaults.timeout=1e4,s.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),n(96486);let a={"content-type":"application/json"},c=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return s.get("/api"+e,{headers:a}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},i=(e,t)=>s.post(e,t,{headers:a}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[662,64,479,9,947,837,719,607,774,888,179],function(){return e(e.s=40534)}),_N_E=e.O()}]);