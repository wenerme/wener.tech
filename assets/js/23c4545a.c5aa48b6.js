"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32753],{49613:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(59496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,v=f["".concat(i,".").concat(d)]||f[d]||p[d]||s;return n?t.createElement(v,u(u({ref:r},l),{},{components:n})):t.createElement(v,u({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,u=new Array(s);u[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<s;c++)u[c]=n[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37465:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var t=n(96600),o=n(27279),s=(n(59496),n(49613)),u=["components"],a={title:"res_resolver_unbound"},i="res_resolver_unbound",c={unversionedId:"voip/asterisk/res_resolver_unbound",id:"voip/asterisk/res_resolver_unbound",title:"res_resolver_unbound",description:"- \u5b9e\u73b0 astdnsresolver",source:"@site/../notes/voip/asterisk/res_resolver_unbound.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/res_resolver_unbound",permalink:"/notes/voip/asterisk/res_resolver_unbound",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/voip/asterisk/res_resolver_unbound.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"res_resolver_unbound"},sidebar:"docs",previous:{title:"phoneprov",permalink:"/notes/voip/asterisk/res_phoneprov"},next:{title:"res_sorcery",permalink:"/notes/voip/asterisk/res_sorcery"}},l={},p=[{value:"resolver_unbound.conf",id:"resolver_unboundconf",level:2}],f={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"res_resolver_unbound"},"res_resolver_unbound"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ast_dns_resolver")),(0,s.kt)("h2",{id:"resolver_unboundconf"},"resolver_unbound.conf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-conf"},"[general]\n; \u9ed8\u8ba4 system\n;hosts = /etc/hosts\n; \u9ed8\u8ba4 system\n;resolv = /etc/resolv.conf\n; \u53ef\u6307\u5b9a\u591a\u6b21\uff0c\u7b2c\u4e00\u4e2a\u4e3a\u4e3b\u8981\n;nameserver = 127.0.0.1\n;debug = 99\n; DNSSEC trusted anchors key\n;ta_file = /etc/asterisk/dnssec_keys\n")))}d.isMDXComponent=!0}}]);