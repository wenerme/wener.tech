"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92269],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>a(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const d={title:"logrotate"},g="logrotate",y={unversionedId:"os/linux/admin/logrotate",id:"os/linux/admin/logrotate",title:"logrotate",description:"- logrotate/logrotate",source:"@site/../notes/os/linux/admin/logrotate.md",sourceDirName:"os/linux/admin",slug:"/os/linux/admin/logrotate",permalink:"/notes/os/linux/admin/logrotate",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/admin/logrotate.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"logrotate"},sidebar:"docs",previous:{title:"Logging",permalink:"/notes/os/linux/admin/log"},next:{title:"man",permalink:"/notes/os/linux/admin/man"}},b={},v=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],O={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(k,m(s(s({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"logrotate"}),"logrotate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/logrotate/logrotate"}),"logrotate/logrotate")),(0,r.kt)("li",{parentName:"ul"},"/etc/logrotate.conf"),(0,r.kt)("li",{parentName:"ul"},"/etc/logrotate.d/"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 cron \u6267\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u914d\u7f6e /etc/logrotate.conf\n# \u4efb\u52a1 /etc/periodic/daily/logrotate\napk add logrotate\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ini",metastring:'title="logrotate.conf"',title:'"logrotate.conf"'}),"include /etc/logrotate.d\n")),(0,r.kt)("h2",s({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?file=&path=%2Fetc%2Flogrotate.d&name=&branch=edge&arch=x86_64"}),"/etc/logrotate.d"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-conf"}),"/var/log/apache2/* {\n    weekly\n    rotate 3\n    size 10M\n    compress\n    delaycompress\n}\n\n/var/log/squid/access.log {\n    monthly\n    create 0644 root root\n    rotate 5\n    size=1M\n    dateext\n    dateformat -%d%m%Y\n    notifempty\n    # mail gabriel@mydomain.com\n}\n\n/var/log/k3s.log {\n        missingok\n        notifempty\n        sharedscripts\n        postrotate\n                /etc/init.d/k3s --quiet --ifstarted restart || true\n        endscript\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# -d debug - \u4e0d\u4f1a\u6267\u884c\nlogrotate -d /etc/logrotate.d/apache2.conf\n# -v verbose - \u4f1a\u6267\u884c\nlogrotate -v /etc/logrotate.d/apache2.conf\n")))}h.isMDXComponent=!0}}]);