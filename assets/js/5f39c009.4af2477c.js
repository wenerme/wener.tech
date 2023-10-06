"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61503],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=o,f=c["".concat(i,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},395:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),h=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"sshuttle"},m="sshuttle",k={unversionedId:"service/network/vpn/sshuttle",id:"service/network/vpn/sshuttle",title:"sshuttle",description:"- sshuttle/sshuttle",source:"@site/../notes/service/network/vpn/sshuttle.md",sourceDirName:"service/network/vpn",slug:"/service/network/vpn/sshuttle",permalink:"/notes/service/network/vpn/sshuttle",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/sshuttle.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"sshuttle"},sidebar:"docs",previous:{title:"netbird",permalink:"/notes/service/network/vpn/netbird"},next:{title:"strongSwan",permalink:"/notes/service/network/vpn/strongswan/"}},v={},b=[{value:"Windows",id:"windows",level:2},{value:"OSError: Errno 88 Not a socket",id:"oserror-errno-88-not-a-socket",level:2},{value:"cleanup pfctl anchor",id:"cleanup-pfctl-anchor",level:2}],y={toc:b},w="wrapper";function O(e){var t=e,{components:r}=t,o=h(t,["components"]);return(0,n.kt)(w,d(c(c({},y),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"sshuttle"}),"sshuttle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/sshuttle/sshuttle"}),"sshuttle/sshuttle"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LGPL-2.1, Python"),(0,n.kt)("li",{parentName:"ul"},"VPN over SSH"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Linux, macOS"))),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u6309\u9700\u7aef\u53e3\u8f6c\u53d1")),(0,n.kt)("admonition",c({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDP"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd PING"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sshuttle -r 192.168.66.0/24 host\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash",metastring:'title="tproxy"',title:'"tproxy"'}),"# linux \u4e0b tproxy \u652f\u6301 udp\n# https://sshuttle.readthedocs.io/en/stable/tproxy.html\n\nip route add local default dev lo table 100\nip rule add fwmark 1 lookup 100\nip -6 route add local default dev lo table 100\nip -6 rule add fwmark 1 lookup 100\n\nsshuttle --method=tproxy\n")),(0,n.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",c({},{id:"windows"}),"Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://sshuttle.readthedocs.io/en/stable/windows.html"}),"https://sshuttle.readthedocs.io/en/stable/windows.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/sshuttle/sshuttle/issues/794"}),"https://github.com/sshuttle/sshuttle/issues/794"))),(0,n.kt)("h2",c({},{id:"oserror-errno-88-not-a-socket"}),"OSError: ","[Errno 88]"," Not a socket"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u65b0\u7248 sshuttle \u5df2\u7ecf\u652f\u6301 3.8"),(0,n.kt)("li",{parentName:"ul"},"Python 3.8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/sshuttle/sshuttle/issues/381"}),"#381")," Fails to connect to endpoints with Python 3.8"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e3a py2 \u53ef\u89e3\u51b3 ",(0,n.kt)("inlineCode",{parentName:"li"},"--python /usr/bin/python2"))),(0,n.kt)("h2",c({},{id:"cleanup-pfctl-anchor"}),"cleanup pfctl anchor"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sudo pfctl -sr | grep -o -E 'sshuttle[^\"]+' | xargs -i sudo pfctl -a {} -F  all\n")))}O.isMDXComponent=!0}}]);