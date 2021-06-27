(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{1096:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=m(a),o=n,d=u["".concat(b,".").concat(o)]||u[o]||O[o]||l;return a?r.a.createElement(d,i(i({ref:t},p),{},{components:a})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=o;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},991:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),l=(a(0),a(1096)),b={title:"Asterisk AGI"},i={unversionedId:"voip/asterisk/asterisk-agi",id:"voip/asterisk/asterisk-agi",isDocsHomePage:!1,title:"Asterisk AGI",description:"- AGI - Asterisk Gateway Interface - CGI",source:"@site/notes/voip/asterisk/asterisk-agi.md",slug:"/voip/asterisk/asterisk-agi",permalink:"/notes/voip/asterisk/asterisk-agi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-agi.md",version:"current",sidebar:"docs",previous:{title:"Asterisk",permalink:"/notes/voip/asterisk/asterisk"},next:{title:"Asterisk AMI",permalink:"/notes/voip/asterisk/asterisk-ami"}},c=[{value:"Notes",id:"notes",children:[]},{value:"res_agi.c",id:"res_agic",children:[]}],p={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AGI - Asterisk Gateway Interface - CGI"),Object(l.b)("li",{parentName:"ul"},"Async AGI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Asterisk 1.6+"),Object(l.b)("li",{parentName:"ul"},"\u5f02\u6b65 CGI \u811a\u672c - \u76f8\u5bf9\u4f7f\u7528\u5c11 - \u53ef\u4ee5\u4f7f\u7528 AMI\u3001ARI\u3001WebSocket \u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"agi:async")))),Object(l.b)("li",{parentName:"ul"},"FastAGI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"tcp \u4ea4\u4e92"),Object(l.b)("li",{parentName:"ul"},"\u8fdc\u7a0b\u811a\u672c"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 4573"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"agi://host.domain[:port][/script/name]")),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 HA - DNS Lookup - \u9ad8\u53ef\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u524d\u7f00 ",Object(l.b)("inlineCode",{parentName:"li"},"_agi._tcp.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hagi://agi.example.com/foo.agi")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"_agi._tcp.agi.example.com")))))),Object(l.b)("li",{parentName:"ul"},"agi-bin",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"exec \u6267\u884c - \u57fa\u4e8e io \u4ea4\u4e92"),Object(l.b)("li",{parentName:"ul"},"eagi \u652f\u6301\u97f3\u9891\u901a\u9053 - \u4e0d\u53ef\u4ee5\u8fd0\u884c\u5728\u6302\u65ad\u7684\u901a\u9053"),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"AGI(test.bash)")," -> /var/lib/asterisk/agi-bin/test.bash"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"1.8 ",Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/AGI+Commands"},"AGI Commands")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://marcelog.github.io/articles/agi.html"},"The Asterisk Gateway Protocol: A practical introduction and tutorial to agi applications"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"extensions.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},"[default]\nexten => 1000,1,AGI(agi://localhost:3000)\n# \u8c03\u7528 PHP \u5904\u7406\nexten => 1,1,AGI(myApplication.php)\n")),Object(l.b)("h2",{id:"notes"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AGI \u901a\u8fc7 stdin stdout \u4ea4\u4e92"),Object(l.b)("li",{parentName:"ul"},"AMI AGI \u4e8b\u4ef6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AGIExecStart"),Object(l.b)("li",{parentName:"ul"},"AGIExecEnd"),Object(l.b)("li",{parentName:"ul"},"AsyncAGIStart"),Object(l.b)("li",{parentName:"ul"},"AsyncAGIExec"),Object(l.b)("li",{parentName:"ul"},"AsyncAGIEnd")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u73af\u5883\u53d8\u91cf\u4f20\u9012\u914d\u7f6e")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"env"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_CONFIG_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astetcdir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_CONFIG_FILE"),Object(l.b)("td",{parentName:"tr",align:null},"asterisk.conf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_MODULE_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astmoddir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_SPOOL_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astspooldir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_MONITOR_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 AST_SPOOL_DIR/monitor")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_VAR_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astvarlibdir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_DATA_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astdbdir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_LOG_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astlogdir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_AGI_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astagidir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_KEY_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astkeydir")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AST_RUN_DIR"),Object(l.b)("td",{parentName:"tr",align:null},"astrundir")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f20\u9012 asterisk.conf \u914d\u7f6e\u7684\u76ee\u5f55\u53c2\u6570")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53d8\u91cf\u4f20\u9012\u4e0a\u4e0b\u6587\u4fe1\u606f")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"var"),Object(l.b)("th",{parentName:"tr",align:null},"demo"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_request"),Object(l.b)("td",{parentName:"tr",align:null},"test.bash"),Object(l.b)("td",{parentName:"tr",align:null},"filename of script")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_channel"),Object(l.b)("td",{parentName:"tr",align:null},"SIP/6001-00000004"),Object(l.b)("td",{parentName:"tr",align:null},"originating channel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_language"),Object(l.b)("td",{parentName:"tr",align:null},"en"),Object(l.b)("td",{parentName:"tr",align:null},"language code")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_type"),Object(l.b)("td",{parentName:"tr",align:null},"SIP"),Object(l.b)("td",{parentName:"tr",align:null},"originating channel type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_uniqueid"),Object(l.b)("td",{parentName:"tr",align:null},"1621099875.4"),Object(l.b)("td",{parentName:"tr",align:null},"unique ID for call")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_version"),Object(l.b)("td",{parentName:"tr",align:null},"18.2.1"),Object(l.b)("td",{parentName:"tr",align:null},"version of Asterisk (since Asterisk 1.6)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_callerid"),Object(l.b)("td",{parentName:"tr",align:null},"unknown"),Object(l.b)("td",{parentName:"tr",align:null},'caller ID number (or "unknown").')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_calleridname"),Object(l.b)("td",{parentName:"tr",align:null},"unknown"),Object(l.b)("td",{parentName:"tr",align:null},'caller ID name (or "unknown").')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_callingpres"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"presentation of callerid.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_callingani2"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"PRI Channels ani2 variable.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_callington"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"The type of number used in PRI Channels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_callingtns"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"An optional 4 digit number (Transit Network Selector).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_dnid"),Object(l.b)("td",{parentName:"tr",align:null},"unknown"),Object(l.b)("td",{parentName:"tr",align:null},'The dialed number id (or "unknown").')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_rdnis"),Object(l.b)("td",{parentName:"tr",align:null},"unknown"),Object(l.b)("td",{parentName:"tr",align:null},'The referring DNIS number (or "unknown").')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_context"),Object(l.b)("td",{parentName:"tr",align:null},"test"),Object(l.b)("td",{parentName:"tr",align:null},"Origin context in extensions.conf.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_extension"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"The called number (dnis).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_priority"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"The priority it was executed as in the dial plan.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_enhanced"),Object(l.b)("td",{parentName:"tr",align:null},"0.0"),Object(l.b)("td",{parentName:"tr",align:null},"The flag value is 1.0 if started as an EAGI script, 0.0 otherwise.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_accountcode"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Account code of the origin channel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"agi_threadid"),Object(l.b)("td",{parentName:"tr",align:null},"140092630592288"),Object(l.b)("td",{parentName:"tr",align:null},"Thread ID of the AGI script.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53d8\u91cf\u683c\u5f0f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"agi_arg_<N>")," \u4e3a AGI \u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"AGI(/tmp/agi.sh,arg1,arg2)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"agi_arg_1: arg1"),Object(l.b)("li",{parentName:"ul"},"agi_arg_2: arg2")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},'# \u63a5\u6536\u53d8\u91cf\n<variable_name>:<space><variable_value>\nagi_context: default\nagi_arg_1: abc\n\n# FastAGI \u811a\u672c\u53c2\u6570\n# AGI(agi://192.168.0.2/CallerWantsCustomerService,${EXTEN},${UNIQUEID},${CALLERID(name)})\nagi_network: yes\nagi_network_script: CallerWantsCustomerService\n\n# \u53d1\u9001\u547d\u4ee4\nVERBOSE "message" 3\n# \u63a5\u6536\u54cd\u5e94\n<error_code><space>result=<result_data><space>[additional_data]\n200 result=1\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"resp"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"error_code"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"result_data"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"additional_data"),Object(l.b)("td",{parentName:"tr",align:null},"result_data \u4e4b\u5916\u7684\u989d\u5916\u6570\u636e")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"error_code"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"Operation was completed successfully.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"510"),Object(l.b)("td",{parentName:"tr",align:null},"Invalid or unknown command.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"511"),Object(l.b)("td",{parentName:"tr",align:null},"The command cant be executed on a dead (closed, terminated, hung up) channel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"520"),Object(l.b)("td",{parentName:"tr",align:null},"End of proper usage, when the command returns its syntax.")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AGISTATUS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SUCCESS"),Object(l.b)("li",{parentName:"ul"},"FAILURE"),Object(l.b)("li",{parentName:"ul"},"NOTFOUND"),Object(l.b)("li",{parentName:"ul"},"HANGUP")))),Object(l.b)("h2",{id:"res_agic"},"res_agi.c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/master/res/res_agi.c"},"res/res_agi.c")),Object(l.b)("li",{parentName:"ul"},"run_agi - \u5b9e\u9645\u5904\u7406\u6d41\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"agi_handle_command - \u5904\u7406\u8bfb\u53d6\u547d\u4ee4\uff0c\u8fd4\u56de cmd_status",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"find_command \u5339\u914d\u547d\u4ee4"))))),Object(l.b)("li",{parentName:"ul"},"setup_env - \u53d1\u9001\u53d8\u91cf\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"agi_command - \u6ce8\u518c\u7684\u547d\u4ee4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cmda - \u547d\u4ee4 - \u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},'{"get","data"}')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int (* const handler)(struct ast_channel *chan, AGI *agi, int argc, const char * const argv[])")),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u547d\u4ee4\u5185\u90e8\u81ea\u884c\u89e3\u6790\u53c2\u6570")))))}m.isMDXComponent=!0}}]);