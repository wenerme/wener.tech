"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2898],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39409:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return h}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};const f={title:"sshuttle"},d="sshuttle",m={unversionedId:"service/network/sshuttle",id:"service/network/sshuttle",title:"sshuttle",description:"- \u7c7b\u4f3c\u4e8e\u6309\u9700\u7aef\u53e3\u8f6c\u53d1",source:"@site/../notes/service/network/sshuttle.md",sourceDirName:"service/network",slug:"/service/network/sshuttle",permalink:"/notes/service/network/sshuttle",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/sshuttle.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"sshuttle"},sidebar:"docs",previous:{title:"Squid",permalink:"/notes/service/network/squid"},next:{title:"strongSwan \u914d\u7f6e",permalink:"/notes/service/network/strongswan-conf"}},y={},h=[{value:"FAQ",id:"faq",level:2},{value:"OSError: Errno 88 Not a socket",id:"oserror-errno-88-not-a-socket",level:3}],b={toc:h};function k(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),c),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"sshuttle"}),"sshuttle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u6309\u9700\u7aef\u53e3\u8f6c\u53d1")),(0,n.kt)("admonition",p({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDP"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd PING"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"sshuttle -r 192.168.66.0/24 host\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash",metastring:'title="tproxy"',title:'"tproxy"'}),"# linux \u4e0b tproxy \u652f\u6301 udp\n# https://sshuttle.readthedocs.io/en/stable/tproxy.html\n\nip route add local default dev lo table 100\nip rule add fwmark 1 lookup 100\nip -6 route add local default dev lo table 100\nip -6 rule add fwmark 1 lookup 100\n\nsshuttle --method=tproxy\n")),(0,n.kt)("h2",p({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",p({},{id:"oserror-errno-88-not-a-socket"}),"OSError: ","[Errno 88]"," Not a socket"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u65b0\u7248 sshuttle \u5df2\u7ecf\u652f\u6301 3.8"),(0,n.kt)("li",{parentName:"ul"},"Python 3.8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/sshuttle/sshuttle/issues/381"}),"#381")," Fails to connect to endpoints with Python 3.8"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e3a py2 \u53ef\u89e3\u51b3 ",(0,n.kt)("inlineCode",{parentName:"li"},"--python /usr/bin/python2"))))}k.isMDXComponent=!0}}]);