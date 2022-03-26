"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4944],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99631:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"PowerDNS LUA"},s=void 0,l={unversionedId:"service/dns/powerdns/powerdns-lua",id:"service/dns/powerdns/powerdns-lua",title:"PowerDNS LUA",description:"- \u81ea 4.2 \u5f00\u59cb\u652f\u6301",source:"@site/notes/service/dns/powerdns/powerdns-lua.md",sourceDirName:"service/dns/powerdns",slug:"/service/dns/powerdns/powerdns-lua",permalink:"/notes/service/dns/powerdns/powerdns-lua",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/powerdns/powerdns-lua.md",tags:[],version:"current",frontMatter:{title:"PowerDNS LUA"},sidebar:"docs",previous:{title:"PowerDNS FAQ",permalink:"/notes/service/dns/powerdns/powerdns-faq"},next:{title:"PowerDNS Recursor",permalink:"/notes/service/dns/powerdns/powerdns-rec"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea 4.2 \u5f00\u59cb\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.powerdns.com/authoritative/lua-records/functions.html"},"\u6240\u6709\u51fd\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.powerdns.com/authoritative/lua-records/reference/index.html"},"LUA Reference"))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"return"),"\uff0c\u5982\u679c\u8bed\u53e5\u4e0d\u662f\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},";")," \u524d\u7f00\uff0c\u7136\u540e\u81ea\u5df1\u5199 ",(0,a.kt)("inlineCode",{parentName:"li"},"return"),"\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u9488\u5bf9\u57df\u540d\u542f\u7528 LUA\n-- \u6216\u914d\u7f6e\u6dfb\u52a0 enable-lua-records \u8fdb\u884c\u5168\u5c40\u542f\u7528\nINSERT INTO domainmetadata (domain_id, kind, content) VALUES (1, 'ENABLE-LUA-RECORDS', 1);\n\n-- \u6dfb\u52a0 LUA \u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES (\n  1,\n  'www.example.com',\n  'LUA',\n  'A \"pickclosest({''192.0.2.1'',''192.0.2.2'',''198.51.100.1''})',\n  600\n);\n\n-- \u914d\u7f6e\u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'config.example.com', 'LUA',\n  'LUA \"fallbackIp=''192.168.1.1''\"', 600\n);\n-- \u4f7f\u7528\u914d\u7f6e\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'www.example.com', 'LUA',\n  'A \";include(''config'');return fallbackIp\"', 600\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- \u8fd4\u56de\u8bf7\u6c42\u65b9 IP\nwho:toString()\n\n-- \u6839\u636e\u8bf7\u6c42\u65b9 IP \u4e0d\u540c\u8fd4\u56de\u4e0d\u540c\u5730\u5740\nview({\n  {{'10.10.0.0/16'}, {'10.10.1.1'}}\n  {{'0.0.0.0/0'}, {'192.0.2.1'}}\n})\n\n-- \u8fd4\u56de\u5b58\u6d3b\u7684 IP\n-- \u5f02\u6b65\u68c0\u6d4b - \u5982\u679c\u90fd\u4e0d\u5b58\u6d3b\u5219\u90fd\u8fd4\u56de\nifportup(443, {'192.0.2.1', '192.0.2.2'})\n-- \u4f7f\u7528 URL \u68c0\u6d4b\u5b58\u6d3b - stringmatch \u4e3a\u53ef\u9009\u7684\u5185\u5bb9\u5339\u914d\u6761\u4ef6\nifurlup(\"example.com/status\", { {\"192.0.2.20\", \"203.0.113.4\"}, {\"203.0.113.2\"} },{stringmatch='ok'})\n\n-- \u57fa\u4e8e\u8bf7\u6c42\u65b9\u7684 HASH(bestwho) \u8fdb\u884c\u8fd4\u56de\npickwhashed({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n-- \u968f\u673a\u8fd4\u56de - \u6709\u5e26\u6743\u91cd\u7248\npickrandom({{'192.168.0.1'},{'192.168.0.2'}})\npickwrandom({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n")))}d.isMDXComponent=!0}}]);