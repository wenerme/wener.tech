"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38960],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"LXD",hide_title:!0},c="LXD",u={unversionedId:"devops/container/lxd",id:"devops/container/lxd",title:"LXD",description:"- \u662f\u4ec0\u4e48",source:"@site/../notes/devops/container/lxd.md",sourceDirName:"devops/container",slug:"/devops/container/lxd",permalink:"/notes/devops/container/lxd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/container/lxd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"LXD",hide_title:!0},sidebar:"docs",previous:{title:"Linux Container",permalink:"/notes/devops/container/lxc"},next:{title:"neuvector",permalink:"/notes/devops/container/neuvector"}},p={},s=[{value:"KVM in LXC/LXD",id:"kvm-in-lxclxd",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lxd"},"LXD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9 LXC \u7684\u5c01\u88c5 - \u7ba1\u7406\u5bb9\u5668\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c daemon \u66b4\u9732 rest \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 kvm"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u7ba1\u7406 LXC \u548c QEMU"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lxc/lxd"},"lxc/lxd")),(0,l.kt)("li",{parentName:"ul"},"lxd package ",(0,l.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxd&arch=x86_64&repo=testing"},"content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://images.linuxcontainers.org/"},"images.linuxcontainers.org")," - Image server for LXC and LXD"),(0,l.kt)("li",{parentName:"ul"},"vs LXC",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u6709\u4e86 daemon \u56e0\u6b64\u66f4\u65b9\u4fbf\u7ba1\u7406\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Go \u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"lxc \u547d\u4ee4\u5305\u542b\u4e86\u5f88\u591a\u529f\u80fd\u800c\u4e0d\u662f\u4e4b\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"lxc-*")," \u4e4b\u7c7b\u7684\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"lxd \u5b89\u88c5\u540e 150MB\uff0clxc \u5b89\u88c5\u540e 15 MB")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"lxd \u7684\u6838\u5fc3\u547d\u4ee4\u662f ",(0,l.kt)("strong",{parentName:"li"},"lxc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210\u4e86\u4e4b\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"lxc-*")," \u7684\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e 2.0"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7b49\u540c\u4e8e root \u6743\u9650\nusermod -a -G lxd $USER\n\n# tuna \u955c\u50cf\nlxc remote add tuna-images https://mirrors.tuna.tsinghua.edu.cn/lxc-images/ --protocol=simplestreams --public\nlxc image list tuna-images:\n")),(0,l.kt)("h2",{id:"kvm-in-lxclxd"},"KVM in LXC/LXD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discourse.ubuntu.com/t/15222"},"LXD 4.0 quick recipe: LXC and KVM coexisting"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"# /dev/kvm\nlxc.cgroup.devices.allow = c 10:232 rwm\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lxc config device add CONTAINER kvm unix-char path=/dev/kvm\n")))}d.isMDXComponent=!0}}]);