"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35316],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(a),c=r,N=k["".concat(u,".").concat(c)]||k[c]||m[c]||i;return a?n.createElement(N,l(l({ref:t},s),{},{components:a})):n.createElement(N,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},11765:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return s},default:function(){return k}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={title:"Asterisk AMI"},u=void 0,o={unversionedId:"voip/asterisk/asterisk-ami",id:"voip/asterisk/asterisk-ami",title:"Asterisk AMI",description:"- AMI - Asterisk Manager Interface",source:"@site/notes/voip/asterisk/asterisk-ami.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/asterisk-ami",permalink:"/notes/voip/asterisk/asterisk-ami",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-ami.md",tags:[],version:"current",frontMatter:{title:"Asterisk AMI"},sidebar:"docs",previous:{title:"Asterisk AGI",permalink:"/notes/voip/asterisk/asterisk-agi"},next:{title:"Asterisk Awesome",permalink:"/notes/voip/asterisk/asterisk-awesome"}},s=[{value:"AMI \u534f\u8bae",id:"ami-\u534f\u8bae",children:[],level:2},{value:"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6",id:"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6",children:[],level:2}],m={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AMI - Asterisk Manager Interface"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},"manager.conf")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 5038"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4f1a\u4e3b\u52a8\u53d1\u9001\u5934 ",(0,i.kt)("inlineCode",{parentName:"li"},"Asterisk Call Manager/3.2.0")),(0,i.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5747\u4e3a\u5f02\u6b65\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u7c7b\u578b\u5206\u4e3a: \u4e8b\u4ef6, \u54cd\u5e94, \u548c\u53d1\u9001\u7684\u64cd\u4f5c"),(0,i.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u7c7b\u4f3c\u4e8e HTTP \u5934"),(0,i.kt)("li",{parentName:"ul"},"Action,Response,Event \u5fc5\u987b\u5728\u7b2c\u4e00\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u901a\u8fc7 ActionID, \u670d\u52a1\u7aef\u8fd4\u56de ActionID \u6765\u8bc6\u522b\u54cd\u5e94"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u8bf7\u6c42\u9664\u4e86\u4f1a\u8fd4\u56de\u4e00\u4e2a\u54cd\u5e94\u4ee5\u5916, \u53ef\u80fd\u8fd8\u4f1a\u8303\u56f4\u4e00\u5217\u6570\u636e, \u6b64\u65f6\u5217\u6570\u636e\u662f\u901a\u8fc7\u4e8b\u4ef6\u53d1\u9001\u7684, \u6ca1\u6709 ActionID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"EndpointDetail")," \u5f00\u59cb, \u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"EndpointDetailComplete")," \u7ed3\u675f"))),(0,i.kt)("li",{parentName:"ul"},"Action",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CLIENT -> Asterisk"))),(0,i.kt)("li",{parentName:"ul"},"Response",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CLIENT -> Asterisk -Response-> CLIENT"))),(0,i.kt)("li",{parentName:"ul"},"Event",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Asterisk -> CLIENT"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/AMI+v2+Specification"},"AMI v2 Specification"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"asterisk 12+"),(0,i.kt)("li",{parentName:"ul"},"\u7248\u672c\u53f7\u4e3a 2.0.0 - asterisk 1.8 \u662f 1.1")))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"AMI v1 \u53ef\u80fd\u5185\u5bb9\u5305\u542b\u6362\u884c"),(0,i.kt)("li",{parentName:"ul"},"UTF8 \u5305\u542b BOM - EF BB BF")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u547d\u4ee4\u6587\u6863\nasterisk -rx 'manager show commands'\n# \u4e8b\u4ef6\u6587\u6863\nasterisk -rx 'manager show events'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"manager.conf")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/1.8/configs/manager.conf.sample"},"1.8/configs/manager.conf.sample"))),(0,i.kt)("h2",{id:"ami-\u534f\u8bae"},"AMI \u534f\u8bae"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521d\u59cb\u670d\u52a1\u7aef\u4f1a\u53d1\u9001\u4e00\u6761\u4fe1\u606f\u5305\u542b\u7248\u672c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Asterisk Call Manager/1.1")))),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f1a\u63a5\u6536\u5230 FullyBooted \u8868\u793a\u542f\u52a8\u5b8c\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u65b0\u7248\u672c\u4f1a\u8fd4\u56de SuccessfulAuth - \u5305\u542b\u8d26\u53f7\u6743\u9650\u3001\u94fe\u63a5\u7b49\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u9000\u51fa\u6216\u91cd\u542f\u4f1a\u53d1\u9001 Shutdown"),(0,i.kt)("li",{parentName:"ul"},"Newchannel - \u901a\u9053\u5efa\u7acb",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b Uniqueid \u53ef\u7528\u4e8e\u6301\u7eed\u8ddf\u8e2a\u901a\u9053"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e\u4f1a\u6709\u5f88\u591a VarSet - SIPURI")))),(0,i.kt)("h2",{id:"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6"},"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Event: Newchannel\nPrivilege: call,all\nChannelState: 0\nCallerIDNum: 6003\nAccountCode:\nChannel: SIP/6003-000000de\nChannelStateDesc: Down\nCallerIDName:\nExten: 10085\nContext: sipinbound\nUniqueid: 1621433208.393\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SIPURI=sip:",(0,i.kt)("a",{parentName:"li",href:"mailto:6003@192.168.1.2"},"6003@192.168.1.2")),(0,i.kt)("li",{parentName:"ul"},"SIPDOMAIN=192.168.1.2"),(0,i.kt)("li",{parentName:"ul"},"SIPCALLID=NKEVsn22tE"),(0,i.kt)("li",{parentName:"ul"},"SIPROUTE=sip-6003 - \u5e94\u7528\u81ea\u5b9a\u4e49"),(0,i.kt)("li",{parentName:"ul"},"Newstate - Ring"),(0,i.kt)("li",{parentName:"ul"},"Newexten - \u6267\u884c\u7684 extension \u5e8f\u5217"),(0,i.kt)("li",{parentName:"ul"},"Macro \u5305\u542b\u7684\u53d8\u91cf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MACRO_EXTEN"),(0,i.kt)("li",{parentName:"ul"},"MACRO_CONTEXT"),(0,i.kt)("li",{parentName:"ul"},"MACRO_PRIORITY"),(0,i.kt)("li",{parentName:"ul"},"MACRO_DEPTH"))),(0,i.kt)("li",{parentName:"ul"},"Newchannel - EXTRA/7-1 \u5bf9\u65b9\u901a\u9053",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DIALEDPEERNUMBER=7/10086"),(0,i.kt)("li",{parentName:"ul"},"NewCallerid EXTRA/7-1"))),(0,i.kt)("li",{parentName:"ul"},"Newstate - Dialing"),(0,i.kt)("li",{parentName:"ul"},"Dial"),(0,i.kt)("li",{parentName:"ul"},"RTCPReceived"),(0,i.kt)("li",{parentName:"ul"},"RTCPSent"),(0,i.kt)("li",{parentName:"ul"},"Newstate - Up"),(0,i.kt)("li",{parentName:"ul"},"DIALSTATUS=ANSWER"),(0,i.kt)("li",{parentName:"ul"},"DIALEDPEERNAME=EXTRA/7-1"),(0,i.kt)("li",{parentName:"ul"},"BRIDGEPEER=EXTRA/7-1 - \u4e24\u4e2a\u901a\u8fbe\u8bbe\u7f6e\u5bf9\u65b9\u4e3a peer"),(0,i.kt)("li",{parentName:"ul"},"BRIDGEPEER=SIP/6003-000000de"),(0,i.kt)("li",{parentName:"ul"},"Bridge"),(0,i.kt)("li",{parentName:"ul"},"BRIDGEPVTCALLID=NKEVsn22tE"),(0,i.kt)("li",{parentName:"ul"},"Unlink - \u65ad\u5f00 bridge"),(0,i.kt)("li",{parentName:"ul"},"ANSWEREDTIME=16"),(0,i.kt)("li",{parentName:"ul"},"ExtraUp - \u677f\u5361 Board=1"),(0,i.kt)("li",{parentName:"ul"},"Hangup - EXTRA/7-1"),(0,i.kt)("li",{parentName:"ul"},"RTPAUDIOQOS=ssrc=1662980482;themssrc=2301022491;lp=0;rxjitter=0.014852;rxcount=1238;txjitter=0.000000;txcount=1238;rlp=0;rtt=0.005000",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RTP QOS \u4fe1\u606f"))),(0,i.kt)("li",{parentName:"ul"},"Hangup - SIP/6003-000000de",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CallerIDNum: 6003"),(0,i.kt)("li",{parentName:"ul"},"Uniqueid: 1621433208.393")))))}k.isMDXComponent=!0}}]);