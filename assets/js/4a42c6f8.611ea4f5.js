"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14990],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const c={title:"OpenVox Asterisk"},d="OpenVox Asterisk",k={unversionedId:"voip/openvox-asterisk",id:"voip/openvox-asterisk",title:"OpenVox Asterisk",description:"- \u53c2\u8003",source:"@site/../notes/voip/openvox-asterisk.md",sourceDirName:"voip",slug:"/voip/openvox-asterisk",permalink:"/notes/voip/openvox-asterisk",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/openvox-asterisk.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1624798319,formattedLastUpdatedAt:"Jun 27, 2021",frontMatter:{title:"OpenVox Asterisk"},sidebar:"docs",previous:{title:"\u786c\u4ef6\u8bbe\u5907",permalink:"/notes/voip/hardware/"},next:{title:"OpenVox",permalink:"/notes/voip/openvox"}},N={},f=[{value:"macro",id:"macro",level:2}],g={toc:f};function b(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"openvox-asterisk"}),"OpenVox Asterisk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://openvoxwiki.atlassian.net/wiki/spaces/VG/pages/2473082832/GSM+Gateways+APP+Note"}),"GSM Gateways APP Note"))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u53d1\u8d77\u547c\u53eb\nchannel originate SIP/6003 extension 10086@sip-6003\nchannel originate IAX2/dev/6003 extension 10086@iax-dev\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"conf"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"val"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astetcdir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/etc/asterisk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astmoddir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/usr/lib/asterisk/modules")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astvarlibdir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/usr/lib/asterisk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astagidir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/usr/lib/asterisk/agi-bin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astspooldir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/tmp/media/spool/asterisk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astrundir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/var/run")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astlogdir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/tmp/log/asterisk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"astdatadir"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/etc/asterisk")))),(0,a.kt)("admonition",m({},{title:"\ud83d\udca1",type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"spool \u4e3a /tmp/media/spool/asterisk"),(0,a.kt)("li",{parentName:"ul"},"\u5f55\u97f3\u5b58\u50a8\u5728 /tmp/media/spool/asterisk/monitor"),(0,a.kt)("li",{parentName:"ul"},"tmpfs \u6839\u636e\u5185\u5b58\u4e0d\u4e00\u6837\u5927\u5c0f\u4e0d\u4e00\u6837 - \u5c0f\u7684\u53ef\u80fd\u53ea\u6709 30MB \u5de6\u53f3 free \u5185\u5b58"))),(0,a.kt)("admonition",m({},{title:"\u26a0\ufe0f",type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"wg \u7cfb\u5217\u6ca1\u6709 app_stack",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Debian 8, Linux 4.19.81, asterisk 1.8.20"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rtg - \u8def\u7531\u5206\u7ec4"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8def\u7531\u89c4\u5219\u4f1a\u57fa\u4e8e\u76ee\u6807\u751f\u6210 N \u4e2a context - ",(0,a.kt)("inlineCode",{parentName:"li"},"rtg-test-1")),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u76ee\u6807 include \u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},"sounds - \u53ea\u6709\u90e8\u5206 sounds \u53ef\u7528\u4e8e\u6d4b\u8bd5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"agent-pass.gsm"),(0,a.kt)("li",{parentName:"ul"},"auth-incorrect.gsm"),(0,a.kt)("li",{parentName:"ul"},"auth-thankyou.gsm"),(0,a.kt)("li",{parentName:"ul"},"vm-goodbye.gsm")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),'; \u81ea\u5b9a\u4e49\u8def\u7531 \u76ee\u6807 channel \u8bbe\u7f6e\u4e3a custom \u652f\u6301\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\n; Macro(my-inside) -> macro-my-inside\n[rtg-test-1]\nexten => _[*#+0-9].,1,NoOp(_[*#+0-9]. matches Rule rtg-test-1)\nexten => _[*#+0-9].,n,Set(CDR_CALLEEID=${EXTEN})\nexten => _[*#+0-9].,n,Macro(my-inside)\nexten => _[*#+0-9].,n(nochannel),ChannelHangup("${CDR_TOCHAN}")\nexten => _[*#+0-9].,n,Goto(nocdr,s,1)\nexten => _[*#+0-9].,n,Hangup()\n\n[nothingtodo]\nexten => _[*#+0-9].,1,NoOp(Nothing to do, Not setting out channel)\nexten => _[*#+0-9].,n,Hangup(42)\n\n# SIP \u5185\u7ebf\n[internalsip]\nexten => _9X.,1,NoOp(SIP Internal Call)\nexten => _9X.,n,Set(CDR_CALLEEID=${EXTEN:1})\nexten => _9X.,n,Set(CDR_TOCHAN=${EXTEN:1})\nexten => _9X.,n,Set(CDR_TOCHAN=${SHELL(/my_tools/get_sipendpointname "${CDR_TOCHAN}")})\nexten => _9X.,n,Dial(SIP/${EXTEN:1})\nexten => _9X.,n,Hangup(42)\n\n# SIP \u51fa\u5c40\u903b\u8f91\n[sipinbound]\nexten => _[*#+0-9].,1,NoOp(SIP Inbound)\nexten => _[*#+0-9].,n,GotoIf(${DIALPLAN_EXISTS(${SIPROUTE},${EXTEN},1)}?:nocdr)\nexten => _[*#+0-9].,n,Goto(${SIPROUTE},${EXTEN},1)\nexten => _[*#+0-9].,n(nocdr),Goto(nocdr,s,1)\n\n[iaxinbound]\nexten => _[*#+0-9].,1,NoOp(IAX Inbound)\nexten => _[*#+0-9].,n,GotoIf(${DIALPLAN_EXISTS(${IAXROUTE},${EXTEN},1)}?:nocdr)\nexten => _[*#+0-9].,n,Goto(${IAXROUTE},${EXTEN},1)\nexten => _[*#+0-9].,n(nocdr),Goto(nocdr,s,1)\n\n[nocdr]\nexten => s,1,ChannelHangup("${CDR_TOCHAN}")\nexten => s,n,Hangup(42)\n\n[globals]\n# \u9ed8\u8ba4 SIP \u8def\u7531\nSIPROUTE=sipdefault\n')),(0,a.kt)("h2",m({},{id:"macro"}),"macro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dial-failover",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gsm",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Macro(dial-failover,,${EXTEN},${POLICY_GROUP-RND-OUT},RET)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},'Macro("SIP/6003-0000000c", "dial-failover,,10086,extra/7,0,gsm-4,RET")')))),(0,a.kt)("li",{parentName:"ul"},"ARG1 forward callee id"),(0,a.kt)("li",{parentName:"ul"},"ARG2 dial extension"),(0,a.kt)("li",{parentName:"ul"},"ARG3 \u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"ARG4 extension flag"),(0,a.kt)("li",{parentName:"ul"},"ARG5 CDR_TOCHAN"))),(0,a.kt)("li",{parentName:"ul"},"wg - ",(0,a.kt)("inlineCode",{parentName:"li"},"Macro(dial-failover,,${CDR_CALLEEID},RET,extra/r1,0,0)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ARG1 \u547c\u8f6c\u53f7\u7801"),(0,a.kt)("li",{parentName:"ul"},"ARG2 \u8865\u53eb\u53f7"),(0,a.kt)("li",{parentName:"ul"},"ARG3 \u8fd4\u56de - nocarrier, hangup, congestion"),(0,a.kt)("li",{parentName:"ul"},"ARG4 \u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"ARG5 \u989d\u5916\u6807\u8bc6"),(0,a.kt)("li",{parentName:"ul"},"ARG6 CDR \u4e2d\u7684 TO"),(0,a.kt)("li",{parentName:"ul"},"4\uff0c5\uff0c6 \u53d8\u91cf\u5728\u6bcf\u4e00\u6b21 failover \u4f1a\u9012\u589e")))))))}b.isMDXComponent=!0}}]);