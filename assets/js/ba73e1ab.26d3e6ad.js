"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69701],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=l,y=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46442:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return O}});var n=r(49613),l=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={title:"OpenSSL"},f="OpenSSL",y={unversionedId:"security/openssl",id:"security/openssl",title:"OpenSSL",description:"- openssl/openssl",source:"@site/../notes/security/openssl.md",sourceDirName:"security",slug:"/security/openssl",permalink:"/notes/security/openssl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/openssl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"OpenSSL"},sidebar:"docs",previous:{title:"Let's Encrypt",permalink:"/notes/security/letsencrypt"},next:{title:"Security Awesome",permalink:"/notes/security/security-awesome"}},d={},O=[{value:"OpenSSL 3.0",id:"openssl-30",level:2},{value:"OpenSSL 1.1.1",id:"openssl-111",level:2}],b={toc:O};function k(e){var t,r=e,{components:l}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),o(t,a({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"openssl"}),"OpenSSL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/openssl/openssl"}),"openssl/openssl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, C, Perl"))),(0,n.kt)("li",{parentName:"ul"},"libssl, libcrypto, openssl"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.openssl.org/docs/manmaster/"}),"https://www.openssl.org/docs/manmaster/"))))),(0,n.kt)("h1",c({},{id:"version"}),"Version"),(0,n.kt)("h2",c({},{id:"openssl-30"}),"OpenSSL 3.0"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"AlpineLinux 3.17, RHEL 9 \u5e76\u5b58")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2021-09-07"),(0,n.kt)("li",{parentName:"ul"},"FIPS 140"),(0,n.kt)("li",{parentName:"ul"},"Apache 2.0"),(0,n.kt)("li",{parentName:"ul"},"Supporting Kernel TLS - Linux 4.13 - 2017"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://wiki.openssl.org/index.php/OpenSSL_3.0"}),"OpenSSL 3.0"))),(0,n.kt)("h2",c({},{id:"openssl-111"}),"OpenSSL 1.1.1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2018-09-11"),(0,n.kt)("li",{parentName:"ul"},"TLS1.3"),(0,n.kt)("li",{parentName:"ul"},"SHA-3"),(0,n.kt)("li",{parentName:"ul"},"X448, Ed448 - RFC 7748"),(0,n.kt)("li",{parentName:"ul"},"SipHash"),(0,n.kt)("li",{parentName:"ul"},"ARIA"),(0,n.kt)("li",{parentName:"ul"},"multi-prime RSA (RFC 8017)"),(0,n.kt)("li",{parentName:"ul"},"SM2, SM3, SM4"),(0,n.kt)("li",{parentName:"ul"},"Heartbleed,QNX removed")))}k.isMDXComponent=!0}}]);