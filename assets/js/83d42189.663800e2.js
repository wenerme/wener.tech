"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83110],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,f=k["".concat(o,".").concat(c)]||k[c]||m[c]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},40950:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&u(e,a,t[a]);return e};const k={title:"AlpineLinux Awesome",tags:["Awesome"]},c="AlpineLinux Awesome",f={unversionedId:"os/alpine/alpine-awesome",id:"os/alpine/alpine-awesome",title:"AlpineLinux Awesome",description:"Community",source:"@site/../notes/os/alpine/alpine-awesome.md",sourceDirName:"os/alpine",slug:"/os/alpine/awesome",permalink:"/notes/os/alpine/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"AlpineLinux Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"apk",permalink:"/notes/os/alpine/apk"},next:{title:"Alpin Boot",permalink:"/notes/os/alpine/boot"}},g={},h=[{value:"Community",id:"community",level:2},{value:"User",id:"user",level:2},{value:"Devel",id:"devel",level:2},{value:"Derivative OS",id:"derivative-os",level:2},{value:"TBD",id:"tbd",level:2}],d={toc:h};function N(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},d),u),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"alpinelinux-awesome"}),"AlpineLinux Awesome"),(0,n.kt)("h2",m({},{id:"community"}),"Community"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://alpinelinux.org/"}),"Alpine Linux")),(0,n.kt)("li",{parentName:"ul"},"IRC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"irc://irc.oftc.net/alpine-linux"}),"#alpine-linux")," @oftc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"irc://irc.oftc.net/alpine-devel"}),"#alpine-devel")," @oftc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://irclogs.alpinelinux.org/"}),"irclogs")))),(0,n.kt)("li",{parentName:"ul"},"Mailing List\n",(0,n.kt)("a",m({parentName:"li"},{href:"https://lists.alpinelinux.org/lists/~alpine"}),"https://lists.alpinelinux.org/lists/~alpine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://twitter.com/alpinelinux"}),"alpinelinux")," @twitter")),(0,n.kt)("h2",m({},{id:"user"}),"User"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.alpinelinux.org"}),"wiki.alpinelinux.org"),"\nWiki & documents"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/packages"}),"packages"),"\nsearch package by name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents"}),"contents"),"\nsearch package by contents"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://mirrors.alpinelinux.org"}),"mirrors.alpinelinux.org"),"\nOfficial Alpine Linux mirrors"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://security.alpinelinux.org"}),"security.alpinelinux.org"),"\nSecurity Issue Tracker")),(0,n.kt)("h2",m({},{id:"devel"}),"Devel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports"}),"alpine/aports"),"\nPackage repository"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://build.alpinelinux.org"}),"build.alpinelinux.org"),"\nBuild status")),(0,n.kt)("h2",m({},{id:"derivative-os"}),"Derivative OS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/rancher/k3os"}),"rancher/k3os"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for K3S & Kubernetest"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://kubedex.com/kubernetes-operating-systems/"}),"https://kubedex.com/kubernetes-operating-systems/")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/rancher/os"}),"rancher/os"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for Rancher & Kubernetest"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u662f\u5b8c\u5168\u4ece Alpine \u6d3e\u751f"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://postmarketos.org/"}),"postmarketOS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for Mobile"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://gitlab.com/postmarketOS"}),"https://gitlab.com/postmarketOS")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://adelielinux.org/"}),"Ad\xe9lie Linux"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for Desktop"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://git.adelielinux.org/adelie"}),"https://git.adelielinux.org/adelie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.adelielinux.org/download/"}),"https://www.adelielinux.org/download/")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://bell-sw.com/alpaquita-linux/"}),"Alpaquita Linux"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for Java"),(0,n.kt)("li",{parentName:"ul"},"\u6709 GLIBC \u5206\u652f")))),(0,n.kt)("h2",m({},{id:"tbd"}),"TBD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/jirutka/akms"}),"https://github.com/jirutka/akms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/akms"}),"https://pkgs.alpinelinux.org/package/edge/main/x86_64/akms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/jirutka/efi-mkkeys"}),"https://github.com/jirutka/efi-mkkeys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/efi-mkkeys"}),"https://pkgs.alpinelinux.org/package/edge/main/x86_64/efi-mkkeys")),(0,n.kt)("li",{parentName:"ul"},"generate self-signed UEFI keys for Secure Boot"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/secureboot-hook"}),"https://pkgs.alpinelinux.org/package/edge/main/x86_64/secureboot-hook"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kernel hook for generating signed UEFI Unified Kernel Image"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/sbsigntool"}),"https://pkgs.alpinelinux.org/package/edge/main/x86_64/sbsigntool"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Secure Boot signing tools"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/UEFI_Secure_Boot"}),"https://wiki.alpinelinux.org/wiki/UEFI_Secure_Boot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blog.toast.cafe/2018/11/27/the-state-of-btrfs-in-alpine/"}),"https://blog.toast.cafe/2018/11/27/the-state-of-btrfs-in-alpine/"))))}N.isMDXComponent=!0}}]);