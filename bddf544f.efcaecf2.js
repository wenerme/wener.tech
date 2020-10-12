(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{444:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(7),a=(t(0),t(557)),c={id:"powerdns-lua",title:"PowerDNS LUA"},i={unversionedId:"ops/network/tool/powerdns-lua",id:"ops/network/tool/powerdns-lua",isDocsHomePage:!1,title:"PowerDNS LUA",description:"PowerDNS LUA",source:"@site/contents/tricks/ops/network/tool/powerdns-lua.md",slug:"/ops/network/tool/powerdns-lua",permalink:"/notes/ops/network/tool/powerdns-lua",version:"current"},l=[{value:"Tips",id:"tips",children:[]}],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"powerdns-lua"},"PowerDNS LUA"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u81ea 4.2 \u5f00\u59cb\u652f\u6301"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://doc.powerdns.com/authoritative/lua-records/functions.html"}),"\u6240\u6709\u51fd\u6570")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://doc.powerdns.com/authoritative/lua-records/reference/index.html"}),"LUA Reference")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u6ce8\u610f"),"\n0. \u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",Object(a.b)("inlineCode",{parentName:"li"},"return"),"\uff0c\u5982\u679c\u8bed\u53e5\u4e0d\u662f\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",Object(a.b)("inlineCode",{parentName:"li"},";")," \u524d\u7f00\uff0c\u7136\u540e\u81ea\u5df1\u5199 ",Object(a.b)("inlineCode",{parentName:"li"},"return"),"\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"-- \u9488\u5bf9\u57df\u540d\u542f\u7528 LUA\n-- \u6216\u914d\u7f6e\u6dfb\u52a0 enable-lua-records \u8fdb\u884c\u5168\u5c40\u542f\u7528\nINSERT INTO domainmetadata (domain_id, kind, content) VALUES (1, 'ENABLE-LUA-RECORDS', 1);\n\n-- \u6dfb\u52a0 LUA \u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES (\n  1,\n  'www.example.com',\n  'LUA',\n  'A \"pickclosest({''192.0.2.1'',''192.0.2.2'',''198.51.100.1''})',\n  600\n);\n\n-- \u914d\u7f6e\u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'config.example.com', 'LUA',\n  'LUA \"fallbackIp=''192.168.1.1''\"', 600\n);\n-- \u4f7f\u7528\u914d\u7f6e\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'www.example.com', 'LUA',\n  'A \";include(''config'');return fallbackIp\"', 600\n);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),"-- \u8fd4\u56de\u8bf7\u6c42\u65b9 IP\nwho:toString()\n\n-- \u6839\u636e\u8bf7\u6c42\u65b9 IP \u4e0d\u540c\u8fd4\u56de\u4e0d\u540c\u5730\u5740\nview({\n  {{'10.10.0.0/16'}, {'10.10.1.1'}}\n  {{'0.0.0.0/0'}, {'192.0.2.1'}}\n})\n\n-- \u8fd4\u56de\u5b58\u6d3b\u7684 IP\n-- \u5f02\u6b65\u68c0\u6d4b - \u5982\u679c\u90fd\u4e0d\u5b58\u6d3b\u5219\u90fd\u8fd4\u56de\nifportup(443, {'192.0.2.1', '192.0.2.2'})\n-- \u4f7f\u7528 URL \u68c0\u6d4b\u5b58\u6d3b - stringmatch \u4e3a\u53ef\u9009\u7684\u5185\u5bb9\u5339\u914d\u6761\u4ef6\nifurlup(\"example.com/status\", { {\"192.0.2.20\", \"203.0.113.4\"}, {\"203.0.113.2\"} },{stringmatch='ok'})\n\n-- \u57fa\u4e8e\u8bf7\u6c42\u65b9\u7684 HASH(bestwho) \u8fdb\u884c\u8fd4\u56de\npickwhashed({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n-- \u968f\u673a\u8fd4\u56de - \u6709\u5e26\u6743\u91cd\u7248\npickrandom({{'192.168.0.1'},{'192.168.0.2'}})\npickwrandom({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n")))}u.isMDXComponent=!0},557:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);