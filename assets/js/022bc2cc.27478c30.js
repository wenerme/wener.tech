"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43675],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var i=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return n?i.createElement(d,l(l({ref:t},s),{},{components:n})):i.createElement(d,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var i=n(96600),r=n(27279),a=(n(59496),n(49613)),l=["components"],o={title:"Init Awesome",tags:["Awesome"]},p="Init Awesome",u={unversionedId:"os/linux/init/init-awesome",id:"os/linux/init/init-awesome",title:"Init Awesome",description:"supervisor",source:"@site/../notes/os/linux/init/init-awesome.md",sourceDirName:"os/linux/init",slug:"/os/linux/init/init-awesome",permalink:"/notes/os/linux/init/init-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/init/init-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Init Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Trusted Platform Module",permalink:"/notes/os/linux/hardware/tpm"},next:{title:"OpenRC",permalink:"/notes/os/linux/init/openrc"}},s={},m=[{value:"supervisor",id:"supervisor",level:2},{value:"Pure Init",id:"pure-init",level:2},{value:"docker",id:"docker",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"init-awesome"},"Init Awesome"),(0,a.kt)("h2",{id:"supervisor"},"supervisor"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7ea7 supervisor",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6709 init \u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u9664\u4e86\u8fdb\u7a0b\u53ef\u80fd\u8fd8\u4f1a\u7ef4\u62a4\u5176\u4ed6\u8d44\u6e90 - \u4f8b\u5982: socket"))),(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u7ea7 supervisor",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u5173\u5fc3\u8fdb\u7a0b\u6b7b\u6d3b"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supervisor/supervisor"},"supervisor"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"size: 4161536"),(0,a.kt)("li",{parentName:"ul"},"Python"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/supervisor"},"https://pkgs.alpinelinux.org/package/edge/main/x86_64/supervisor")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://smarden.org/runit/"},"runit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/community/x86_64/runit"},"https://pkgs.alpinelinux.org/package/edge/community/x86_64/runit")),(0,a.kt)("li",{parentName:"ul"},"size: 258048"))),(0,a.kt)("li",{parentName:"ul"},"systemd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Python"))),(0,a.kt)("li",{parentName:"ul"},"initd"),(0,a.kt)("li",{parentName:"ul"},"upstart"),(0,a.kt)("li",{parentName:"ul"},"tini",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/krallin/tini"},"https://github.com/krallin/tini")),(0,a.kt)("li",{parentName:"ul"},"size: 40960"),(0,a.kt)("li",{parentName:"ul"},"docker 1.13 \u540e\u5185\u5efa"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u50f5\u5c38\u96c6\u6210\u548c\u4fe1\u53f7\u91cf\u5904\u7406"))),(0,a.kt)("li",{parentName:"ul"},"dump-init",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/community/x86_64/dumb-init"},"https://pkgs.alpinelinux.org/package/edge/community/x86_64/dumb-init")))),(0,a.kt)("li",{parentName:"ul"},"openrc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"C+Shell"))),(0,a.kt)("li",{parentName:"ul"},"Gentoo ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Comparison_of_init_systems"},"Comparison of init systems")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/OpenRC_to_systemd_Cheatsheet"},"OpenRC to systemd Cheatsheet"))),(0,a.kt)("h2",{id:"pure-init"},"Pure Init"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tinit"),(0,a.kt)("li",{parentName:"ul"},"dump-init"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/troglobit/finit"},"troglobit/finit"))),(0,a.kt)("h2",{id:"docker"},"docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tinit - \u5982\u679c\u4f7f\u7528\u5355\u4e2a\u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u5141\u8bb8\u591a\u4e2a\u670d\u52a1\uff0c\u9009\u62e9 s6 \u6216 runit"),(0,a.kt)("li",{parentName:"ul"},"docker \u5185\u7f6e tini - ",(0,a.kt)("inlineCode",{parentName:"li"},"--init")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yelp/dumb-init"},"Yelp/dumb-init")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/krallin/tini"},"krallin/tini")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahmet.im/blog/minimal-init-process-for-containers/"},"Choosing init for multi-process containers"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apk add dumb-init\n/usr/bin/dumb-init --\n\napk add tini\n/sbin/tini --\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6700\u7b80\u5355\u7684 \u591a\u8fdb\u7a0b init")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="entrypoint.sh"',title:'"entrypoint.sh"'},"#!/usr/bin/env bash\nset -e\n\nprogram1 &\nprogram2 &\nwait -n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'ENTRYPOINT ["/bin/tini", "--", "entrypoint.sh"]\n')))}k.isMDXComponent=!0}}]);