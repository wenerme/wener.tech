"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22859],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"LXD",hide_title:!0},c="LXD",p={unversionedId:"devops/container/lxd",id:"devops/container/lxd",isDocsHomePage:!1,title:"LXD",description:"* \u662f\u4ec0\u4e48",source:"@site/notes/devops/container/lxd.md",sourceDirName:"devops/container",slug:"/devops/container/lxd",permalink:"/notes/devops/container/lxd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/lxd.md",tags:[],version:"current",frontMatter:{title:"LXD",hide_title:!0},sidebar:"docs",previous:{title:"Linux Container",permalink:"/notes/devops/container/lxc"},next:{title:"podman",permalink:"/notes/devops/container/podman"}},u=[{value:"KVM in LXC/LXD",id:"kvm-in-lxclxd",children:[]}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lxd"},"LXD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5bf9 LXC \u7684\u5c01\u88c5 - \u7ba1\u7406\u5bb9\u5668\u8fd0\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u8fd0\u884c daemon \u66b4\u9732 rest \u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 kvm"),(0,i.kt)("li",{parentName:"ul"},"\u80fd\u7ba1\u7406 LXC \u548c QEMU"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lxc/lxd"},"lxc/lxd")),(0,i.kt)("li",{parentName:"ul"},"lxd package ",(0,i.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxd&arch=x86_64&repo=testing"},"content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://images.linuxcontainers.org/"},"images.linuxcontainers.org")," - Image server for LXC and LXD"),(0,i.kt)("li",{parentName:"ul"},"vs LXC",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u6709\u4e86 daemon \u56e0\u6b64\u66f4\u65b9\u4fbf\u7ba1\u7406\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Go \u5b9e\u73b0"),(0,i.kt)("li",{parentName:"ul"},"lxc \u547d\u4ee4\u5305\u542b\u4e86\u5f88\u591a\u529f\u80fd\u800c\u4e0d\u662f\u4e4b\u524d ",(0,i.kt)("inlineCode",{parentName:"li"},"lxc-*")," \u4e4b\u7c7b\u7684\u547d\u4ee4"),(0,i.kt)("li",{parentName:"ul"},"lxd \u5b89\u88c5\u540e 150MB\uff0clxc \u5b89\u88c5\u540e 15 MB")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"lxd \u7684\u6838\u5fc3\u547d\u4ee4\u662f ",(0,i.kt)("strong",{parentName:"li"},"lxc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u96c6\u6210\u4e86\u4e4b\u524d ",(0,i.kt)("inlineCode",{parentName:"li"},"lxc-*")," \u7684\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e 2.0")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7b49\u540c\u4e8e root \u6743\u9650\nusermod -a -G lxd $USER\n\n# tuna \u955c\u50cf\nlxc remote add tuna-images https://mirrors.tuna.tsinghua.edu.cn/lxc-images/ --protocol=simplestreams --public\nlxc image list tuna-images:\n")),(0,i.kt)("h2",{id:"kvm-in-lxclxd"},"KVM in LXC/LXD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discourse.ubuntu.com/t/15222"},"LXD 4.0 quick recipe: LXC and KVM coexisting"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# /dev/kvm\nlxc.cgroup.devices.allow = c 10:232 rwm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lxc config device add CONTAINER kvm unix-char path=/dev/kvm\n")))}s.isMDXComponent=!0}}]);