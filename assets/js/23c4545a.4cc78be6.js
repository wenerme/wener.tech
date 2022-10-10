"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32753],{49613:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return d}});var t=n(59496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,v=f["".concat(i,".").concat(d)]||f[d]||p[d]||s;return n?t.createElement(v,a(a({ref:r},c),{},{components:n})):t.createElement(v,a({ref:r},c))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<s;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82884:function(e,r,n){n.r(r),n.d(r,{assets:function(){return b},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return m}});var t=n(49613),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,p=(e,r)=>{for(var n in r||(r={}))i.call(r,n)&&c(e,n,r[n]);if(u)for(var n of u(r))l.call(r,n)&&c(e,n,r[n]);return e};const f={title:"res_resolver_unbound"},d="res_resolver_unbound",v={unversionedId:"voip/asterisk/res_resolver_unbound",id:"voip/asterisk/res_resolver_unbound",title:"res_resolver_unbound",description:"- \u5b9e\u73b0 astdnsresolver",source:"@site/../notes/voip/asterisk/res_resolver_unbound.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/res_resolver_unbound",permalink:"/notes/voip/asterisk/res_resolver_unbound",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/res_resolver_unbound.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625032306,formattedLastUpdatedAt:"Jun 30, 2021",frontMatter:{title:"res_resolver_unbound"},sidebar:"docs",previous:{title:"phoneprov",permalink:"/notes/voip/asterisk/res_phoneprov"},next:{title:"res_sorcery",permalink:"/notes/voip/asterisk/res_sorcery"}},b={},m=[{value:"resolver_unbound.conf",id:"resolver_unboundconf",level:2}],y={toc:m};function O(e){var r,n=e,{components:o}=n,c=((e,r)=>{var n={};for(var t in e)i.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&u)for(var t of u(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=p(p({},y),c),s(r,a({components:o,mdxType:"MDXLayout"}))),(0,t.kt)("h1",p({},{id:"res_resolver_unbound"}),"res_resolver_unbound"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ast_dns_resolver")),(0,t.kt)("h2",p({},{id:"resolver_unboundconf"}),"resolver_unbound.conf"),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-conf"}),"[general]\n; \u9ed8\u8ba4 system\n;hosts = /etc/hosts\n; \u9ed8\u8ba4 system\n;resolv = /etc/resolv.conf\n; \u53ef\u6307\u5b9a\u591a\u6b21\uff0c\u7b2c\u4e00\u4e2a\u4e3a\u4e3b\u8981\n;nameserver = 127.0.0.1\n;debug = 99\n; DNSSEC trusted anchors key\n;ta_file = /etc/asterisk/dnssec_keys\n")))}O.isMDXComponent=!0}}]);