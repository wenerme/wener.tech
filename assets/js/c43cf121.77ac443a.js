"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65839],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,v=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(v,s(s({ref:t},p),{},{components:r})):n.createElement(v,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77655:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&p(e,r,t[r]);return e};const m={title:"vrl"},f="vrl",v={unversionedId:"service/observability/vrl",id:"service/observability/vrl",title:"vrl",description:"- Vector Remap Language",source:"@site/../notes/service/observability/vrl.md",sourceDirName:"service/observability",slug:"/service/observability/vrl",permalink:"/notes/service/observability/vrl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/vrl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"vrl"},sidebar:"docs",previous:{title:"vector",permalink:"/notes/service/observability/vector"},next:{title:"\u529e\u516c\u5957\u4ef6",permalink:"/notes/service/office/"}},d={},g=[{value:"syslog",id:"syslog",level:2}],y={toc:g};function b(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),l(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"vrl"}),"vrl"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vector Remap Language"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://vector.dev/docs/reference/vrl/"}),"https://vector.dev/docs/reference/vrl/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://playground.vrl.dev/"}),"https://playground.vrl.dev/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://vector.dev/docs/reference/vrl/examples/"}),"https://vector.dev/docs/reference/vrl/examples/"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vector vrl --input input.json --program run.vrl --print-object\n")),(0,n.kt)("h2",u({},{id:"syslog"}),"syslog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"parse_syslog",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"appname"),(0,n.kt)("li",{parentName:"ul"},"hostname"),(0,n.kt)("li",{parentName:"ul"},"message"),(0,n.kt)("li",{parentName:"ul"},"timestamp")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-vrl"}),"structured =\n  parse_syslog(.message) ??\n  parse_common_log(.message) ??\n  parse_regex!(.message, r'^(?P<timestamp>\\d+/\\d+/\\d+ \\d+:\\d+:\\d+) \\[(?P<severity>\\w+)\\] (?P<pid>\\d+)#(?P<tid>\\d+):(?: \\*(?P<connid>\\d+))? (?P<message>.*)$')\n. = merge(., structured)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-vrl"}),"structured = parse_syslog(.message) ?? {}\n. = merge(., structured)\n")),(0,n.kt)("h1",u({},{id:"cookbook"}),"Cookbook"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-vrl"}),'# use node name instead of pod name\n.host = get_env_var("VECTOR_SELF_NODE_NAME") ?? null\n# avoid override, used for routing\n._file = .file\n\n# parsing\nmsg = string!(.message)\nif starts_with(msg,"{") && ends_with(msg,"}") {\n  del(.message)\n  . |= object(parse_json(msg) ?? {}) ?? {}\n} else if starts_with(msg,"time=") {\n  del(.message)\n  . |= parse_key_value(msg) ?? {}\n  if .timestamp == null && .time != null {.timestamp = .time}\n} else if match(msg,r\'^[IWEF]\\d{4}\'){\n  # will override .file\n  . |= parse_klog(msg) ?? {}\n} else {\n  r = parse_syslog(.message) ?? {}\n  if r.appname != null { . |= r }\n}\n\nif .message == null {\n  if .msg != null {\n    .message = .msg\n    del(.msg)\n  }else {\n    .message = ""\n  }\n}\n\n# time for collector\nif ._timestamp == null && .timestamp != null {._timestamp = .timestamp}\n')))}b.isMDXComponent=!0}}]);