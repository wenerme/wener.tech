"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69701],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=l,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(96600),l=n(27279),a=(n(59496),n(49613)),o=["components"],i={title:"OpenSSL"},p="OpenSSL",s={unversionedId:"security/openssl",id:"security/openssl",title:"OpenSSL",description:"- openssl/openssl",source:"@site/../notes/security/openssl.md",sourceDirName:"security",slug:"/security/openssl",permalink:"/notes/security/openssl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/security/openssl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"OpenSSL"},sidebar:"docs",previous:{title:"Let's Encrypt",permalink:"/notes/security/letsencrypt"},next:{title:"Security Awesome",permalink:"/notes/security/security-awesome"}},u={},c=[{value:"OpenSSL 3.0",id:"openssl-30",level:2},{value:"OpenSSL 1.1.1",id:"openssl-111",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openssl"},"OpenSSL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openssl/openssl"},"openssl/openssl"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, C, Perl"))),(0,a.kt)("li",{parentName:"ul"},"libssl, libcrypto, openssl"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openssl.org/docs/manmaster/"},"https://www.openssl.org/docs/manmaster/"))))),(0,a.kt)("h1",{id:"version"},"Version"),(0,a.kt)("h2",{id:"openssl-30"},"OpenSSL 3.0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"AlpineLinux 3.17, RHEL 9 \u5e76\u5b58")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2021-09-07"),(0,a.kt)("li",{parentName:"ul"},"FIPS 140"),(0,a.kt)("li",{parentName:"ul"},"Apache 2.0"),(0,a.kt)("li",{parentName:"ul"},"Supporting Kernel TLS - Linux 4.13 - 2017"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.openssl.org/index.php/OpenSSL_3.0"},"OpenSSL 3.0"))),(0,a.kt)("h2",{id:"openssl-111"},"OpenSSL 1.1.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2018-09-11"),(0,a.kt)("li",{parentName:"ul"},"TLS1.3"),(0,a.kt)("li",{parentName:"ul"},"SHA-3"),(0,a.kt)("li",{parentName:"ul"},"X448, Ed448 - RFC 7748"),(0,a.kt)("li",{parentName:"ul"},"SipHash"),(0,a.kt)("li",{parentName:"ul"},"ARIA"),(0,a.kt)("li",{parentName:"ul"},"multi-prime RSA (RFC 8017)"),(0,a.kt)("li",{parentName:"ul"},"SM2, SM3, SM4"),(0,a.kt)("li",{parentName:"ul"},"Heartbleed,QNX removed")))}f.isMDXComponent=!0}}]);