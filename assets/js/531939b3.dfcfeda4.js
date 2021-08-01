"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79995],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16256:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={title:"PowerDNS FAQ"},c=void 0,u={unversionedId:"service/dns/powerdns-faq",id:"service/dns/powerdns-faq",isDocsHomePage:!1,title:"PowerDNS FAQ",description:"Attempt to bind more parameters than query has",source:"@site/notes/service/dns/powerdns-faq.md",sourceDirName:"service/dns",slug:"/service/dns/powerdns-faq",permalink:"/notes/service/dns/powerdns-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/powerdns-faq.md",version:"current",frontMatter:{title:"PowerDNS FAQ"},sidebar:"docs",previous:{title:"Domain",permalink:"/notes/service/dns/domain"},next:{title:"PowerDNS LUA",permalink:"/notes/service/dns/powerdns-lua"}},p=[{value:"Attempt to bind more parameters than query has",id:"attempt-to-bind-more-parameters-than-query-has",children:[]},{value:"\u5c55\u5f00 CNAME",id:"\u5c55\u5f00-cname",children:[{value:"TSIG is provided, but domain is not secured with TSIG. Processing continues",id:"tsig-is-provided-but-domain-is-not-secured-with-tsig-processing-continues",children:[]}]},{value:"validates as Bogus",id:"validates-as-bogus",children:[]}],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"attempt-to-bind-more-parameters-than-query-has"},"Attempt to bind more parameters than query has"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Backend reported permanent error which prevented lookup (GSQLBackend unable to lookup 'example.com|ANY':Attempt to bind more parameters than query has: SELECT content,ttl,prio,type,domain_id,disabled::int,name,auth::int\n")),(0,a.kt)("p",null,"\u53ef\u80fd\u662f schema \u4e0d\u5bf9\u5bfc\u81f4\u7684,\u6240\u6709\u7684 schema \u4f4d\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PowerDNS/pdns/tree/master/modules"},"PowerDNS/pdns/modules"),"."),(0,a.kt)("h2",{id:"\u5c55\u5f00-cname"},"\u5c55\u5f00 CNAME"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v4.1.0+"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://doc.powerdns.com/authoritative/guides/alias.html"},"ALIAS")," \u8bb0\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5141\u8bb8\u5c55\u5f00\u548c resolver")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"resolver=[::1]:5300\nexpand-alias=yes\n")),(0,a.kt)("h3",{id:"tsig-is-provided-but-domain-is-not-secured-with-tsig-processing-continues"},"TSIG is provided, but domain is not secured with TSIG. Processing continues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 nsupdate \u4fee\u6539 - \u64cd\u4f5c\u4f1a\u6210\u529f"),(0,a.kt)("li",{parentName:"ul"},"zone \u5141\u8bb8 tsig - \u4f46\u672a\u901a\u8fc7 tsig \u52a0\u5bc6")),(0,a.kt)("h2",{id:"validates-as-bogus"},"validates as Bogus"),(0,a.kt)("p",null,"DNSSEC \u9a8c\u8bc1\u5931\u8d25 - DNS \u6c61\u67d3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Dec 04 16:00:22 Answer to google.com|A for 127.0.0.1:50371 validates as Bogus\n")))}d.isMDXComponent=!0}}]);