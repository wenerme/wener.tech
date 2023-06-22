"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38014],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,y=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2905:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e};const f={tags:["FAQ"]},m="Proxy FAQ",y={unversionedId:"service/network/proxy/proxy-faq",id:"service/network/proxy/proxy-faq",title:"Proxy FAQ",description:"tunnel vs overlay",source:"@site/../notes/service/network/proxy/proxy-faq.md",sourceDirName:"service/network/proxy",slug:"/service/network/proxy/faq",permalink:"/notes/service/network/proxy/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/proxy-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687429668,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"\u4ee3\u7406",permalink:"/notes/service/network/proxy/awesome"},next:{title:"proxychains-ng",permalink:"/notes/service/network/proxy/proxychain-ng"}},k={},d=[{value:"tunnel vs overlay",id:"tunnel-vs-overlay",level:2},{value:"fake-ip",id:"fake-ip",level:2},{value:"proxy env",id:"proxy-env",level:2},{value:"fakedns",id:"fakedns",level:2}],v={toc:d};function h(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"proxy-faq"}),"Proxy FAQ"),(0,n.kt)("h2",s({},{id:"tunnel-vs-overlay"}),"tunnel vs overlay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tunnel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5355\u7aef\u53e3 - \u7aef\u53e3\u6309\u9700\u6620\u5c04"),(0,n.kt)("li",{parentName:"ul"},"\u5355 IP/\u56fa\u5b9a IP - TCP IP \u5c42 - L4"))),(0,n.kt)("li",{parentName:"ul"},"overlay",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7edc - CIDR"),(0,n.kt)("li",{parentName:"ul"},"mac \u5c42 - L2")))),(0,n.kt)("h2",s({},{id:"fake-ip"}),"fake-ip"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS \u670d\u52a1\u5668\u4e3a\u57df\u540d\u5206\u914d\u5047\u7684 IP\uff0c\u5728\u8bf7\u6c42\u65f6\u5c31\u884c\u6620\u5c04",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42 A google.com"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u8fd4\u56de 192.168.2.1"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u670d\u52a1\u6536\u5230\u8bf7\u6c42 192.168.2.1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u8bf7\u6c42 google.com"))))),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u670d\u52a1\u4f5c\u4e3a\u7f51\u5173\u89d2\u8272"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.rfc-editor.org/rfc/rfc3089"}),"https://www.rfc-editor.org/rfc/rfc3089")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://blog.skk.moe/post/what-happend-to-dns-in-proxy/"}),"https://blog.skk.moe/post/what-happend-to-dns-in-proxy/"))),(0,n.kt)("h2",s({},{id:"proxy-env"}),"proxy env"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[scheme]_proxy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"http_proxy"),(0,n.kt)("li",{parentName:"ul"},"https_proxy"),(0,n.kt)("li",{parentName:"ul"},"ftp_proxy"))),(0,n.kt)("li",{parentName:"ul"},"all_proxy, ALL_PROXY")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://everything.curl.dev/usingcurl/proxies"}),"https://everything.curl.dev/usingcurl/proxies"))),(0,n.kt)("h2",s({},{id:"fakedns"}),"fakedns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fake ip"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://blog.skk.moe/post/what-happend-to-dns-in-proxy/"}),"https://blog.skk.moe/post/what-happend-to-dns-in-proxy/"))))}h.isMDXComponent=!0}}]);