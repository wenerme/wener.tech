(window.webpackJsonp=window.webpackJsonp||[]).push([[1020],{1093:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),i=(a(0),a(1152)),l={title:"Asterisk AMI"},b={unversionedId:"voip/asterisk/asterisk-ami",id:"voip/asterisk/asterisk-ami",isDocsHomePage:!1,title:"Asterisk AMI",description:"- AMI - Asterisk Manager Interface",source:"@site/notes/voip/asterisk/asterisk-ami.md",slug:"/voip/asterisk/asterisk-ami",permalink:"/notes/voip/asterisk/asterisk-ami",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-ami.md",version:"current",sidebar:"docs",previous:{title:"Asterisk AGI",permalink:"/notes/voip/asterisk/asterisk-agi"},next:{title:"ARI",permalink:"/notes/voip/asterisk/air"}},c=[{value:"AMI \u534f\u8bae",id:"ami-\u534f\u8bae",children:[]},{value:"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6",id:"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6",children:[]}],p={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AMI - Asterisk Manager Interface"),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 ",Object(i.b)("inlineCode",{parentName:"li"},"manager.conf")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 5038"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4f1a\u4e3b\u52a8\u53d1\u9001\u5934 ",Object(i.b)("inlineCode",{parentName:"li"},"Asterisk Call Manager/3.2.0")),Object(i.b)("li",{parentName:"ul"},"\u54cd\u5e94\u5747\u4e3a\u5f02\u6b65\u4e8b\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u5305\u7c7b\u578b\u5206\u4e3a: \u4e8b\u4ef6, \u54cd\u5e94, \u548c\u53d1\u9001\u7684\u64cd\u4f5c"),Object(i.b)("li",{parentName:"ul"},"\u683c\u5f0f\u7c7b\u4f3c\u4e8e HTTP \u5934"),Object(i.b)("li",{parentName:"ul"},"Action,Response,Event \u5fc5\u987b\u5728\u7b2c\u4e00\u884c"),Object(i.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u901a\u8fc7 ActionID, \u670d\u52a1\u7aef\u8fd4\u56de ActionID \u6765\u8bc6\u522b\u54cd\u5e94"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u6b21\u8bf7\u6c42\u9664\u4e86\u4f1a\u8fd4\u56de\u4e00\u4e2a\u54cd\u5e94\u4ee5\u5916, \u53ef\u80fd\u8fd8\u4f1a\u8303\u56f4\u4e00\u5217\u6570\u636e, \u6b64\u65f6\u5217\u6570\u636e\u662f\u901a\u8fc7\u4e8b\u4ef6\u53d1\u9001\u7684, \u6ca1\u6709 ActionID",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982: \u4ee5 ",Object(i.b)("inlineCode",{parentName:"li"},"EndpointDetail")," \u5f00\u59cb, \u4ee5 ",Object(i.b)("inlineCode",{parentName:"li"},"EndpointDetailComplete")," \u7ed3\u675f"))),Object(i.b)("li",{parentName:"ul"},"Action",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CLIENT -> Asterisk"))),Object(i.b)("li",{parentName:"ul"},"Response",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CLIENT -> Asterisk -Response-> CLIENT"))),Object(i.b)("li",{parentName:"ul"},"Event",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Asterisk -> CLIENT"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/AMI+v2+Specification"},"AMI v2 Specification"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"asterisk 12+"),Object(i.b)("li",{parentName:"ul"},"\u7248\u672c\u53f7\u4e3a 2.0.0 - asterisk 1.8 \u662f 1.1")))))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"AMI v1 \u53ef\u80fd\u5185\u5bb9\u5305\u542b\u6362\u884c"),Object(i.b)("li",{parentName:"ul"},"UTF8 \u5305\u542b BOM - EF BB BF")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u547d\u4ee4\u6587\u6863\nasterisk -rx 'manager show commands'\n# \u4e8b\u4ef6\u6587\u6863\nasterisk -rx 'manager show events'\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"manager.conf")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/1.8/configs/manager.conf.sample"},"1.8/configs/manager.conf.sample"))),Object(i.b)("h2",{id:"ami-\u534f\u8bae"},"AMI \u534f\u8bae"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u521d\u59cb\u670d\u52a1\u7aef\u4f1a\u53d1\u9001\u4e00\u6761\u4fe1\u606f\u5305\u542b\u7248\u672c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Asterisk Call Manager/1.1")))),Object(i.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f1a\u63a5\u6536\u5230 FullyBooted \u8868\u793a\u542f\u52a8\u5b8c\u6210"),Object(i.b)("li",{parentName:"ul"},"\u65b0\u7248\u672c\u4f1a\u8fd4\u56de SuccessfulAuth - \u5305\u542b\u8d26\u53f7\u6743\u9650\u3001\u94fe\u63a5\u7b49\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u9000\u51fa\u6216\u91cd\u542f\u4f1a\u53d1\u9001 Shutdown"),Object(i.b)("li",{parentName:"ul"},"Newchannel - \u901a\u9053\u5efa\u7acb",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5305\u542b Uniqueid \u53ef\u7528\u4e8e\u6301\u7eed\u8ddf\u8e2a\u901a\u9053"),Object(i.b)("li",{parentName:"ul"},"\u7136\u540e\u4f1a\u6709\u5f88\u591a VarSet - SIPURI")))),Object(i.b)("h2",{id:"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6"},"\u4e00\u6b21\u547c\u53eb\u8fc7\u7a0b\u4ea7\u751f\u7684\u4e8b\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Event: Newchannel\nPrivilege: call,all\nChannelState: 0\nCallerIDNum: 6003\nAccountCode:\nChannel: SIP/6003-000000de\nChannelStateDesc: Down\nCallerIDName:\nExten: 10085\nContext: sipinbound\nUniqueid: 1621433208.393\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SIPURI=sip:",Object(i.b)("a",{parentName:"li",href:"mailto:6003@192.168.1.2"},"6003@192.168.1.2")),Object(i.b)("li",{parentName:"ul"},"SIPDOMAIN=192.168.1.2"),Object(i.b)("li",{parentName:"ul"},"SIPCALLID=NKEVsn22tE"),Object(i.b)("li",{parentName:"ul"},"SIPROUTE=sip-6003 - \u5e94\u7528\u81ea\u5b9a\u4e49"),Object(i.b)("li",{parentName:"ul"},"Newstate - Ring"),Object(i.b)("li",{parentName:"ul"},"Newexten - \u6267\u884c\u7684 extension \u5e8f\u5217"),Object(i.b)("li",{parentName:"ul"},"Macro \u5305\u542b\u7684\u53d8\u91cf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MACRO_EXTEN"),Object(i.b)("li",{parentName:"ul"},"MACRO_CONTEXT"),Object(i.b)("li",{parentName:"ul"},"MACRO_PRIORITY"),Object(i.b)("li",{parentName:"ul"},"MACRO_DEPTH"))),Object(i.b)("li",{parentName:"ul"},"Newchannel - EXTRA/7-1 \u5bf9\u65b9\u901a\u9053",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"DIALEDPEERNUMBER=7/10086"),Object(i.b)("li",{parentName:"ul"},"NewCallerid EXTRA/7-1"))),Object(i.b)("li",{parentName:"ul"},"Newstate - Dialing"),Object(i.b)("li",{parentName:"ul"},"Dial"),Object(i.b)("li",{parentName:"ul"},"RTCPReceived"),Object(i.b)("li",{parentName:"ul"},"RTCPSent"),Object(i.b)("li",{parentName:"ul"},"Newstate - Up"),Object(i.b)("li",{parentName:"ul"},"DIALSTATUS=ANSWER"),Object(i.b)("li",{parentName:"ul"},"DIALEDPEERNAME=EXTRA/7-1"),Object(i.b)("li",{parentName:"ul"},"BRIDGEPEER=EXTRA/7-1 - \u4e24\u4e2a\u901a\u8fbe\u8bbe\u7f6e\u5bf9\u65b9\u4e3a peer"),Object(i.b)("li",{parentName:"ul"},"BRIDGEPEER=SIP/6003-000000de"),Object(i.b)("li",{parentName:"ul"},"Bridge"),Object(i.b)("li",{parentName:"ul"},"BRIDGEPVTCALLID=NKEVsn22tE"),Object(i.b)("li",{parentName:"ul"},"Unlink - \u65ad\u5f00 bridge"),Object(i.b)("li",{parentName:"ul"},"ANSWEREDTIME=16"),Object(i.b)("li",{parentName:"ul"},"ExtraUp - \u677f\u5361 Board=1"),Object(i.b)("li",{parentName:"ul"},"Hangup - EXTRA/7-1"),Object(i.b)("li",{parentName:"ul"},"RTPAUDIOQOS=ssrc=1662980482;themssrc=2301022491;lp=0;rxjitter=0.014852;rxcount=1238;txjitter=0.000000;txcount=1238;rlp=0;rtt=0.005000",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"RTP QOS \u4fe1\u606f"))),Object(i.b)("li",{parentName:"ul"},"Hangup - SIP/6003-000000de",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CallerIDNum: 6003"),Object(i.b)("li",{parentName:"ul"},"Uniqueid: 1621433208.393")))))}u.isMDXComponent=!0},1152:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(a),s=n,O=o["".concat(l,".").concat(s)]||o[s]||m[s]||i;return a?r.a.createElement(O,b(b({ref:t},p),{},{components:a})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);