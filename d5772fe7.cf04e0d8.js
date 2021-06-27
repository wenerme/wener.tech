(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,O=b["".concat(l,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(O,p(p({ref:t},c),{},{components:n})):a.a.createElement(O,p({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},935:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1096)),l={title:"AlpineLinux Setup"},p={unversionedId:"os/alpine/alpine-setup",id:"os/alpine/alpine-setup",isDocsHomePage:!1,title:"AlpineLinux Setup",description:"* \u53c2\u8003",source:"@site/notes/os/alpine/alpine-setup.md",slug:"/os/alpine/alpine-setup",permalink:"/notes/os/alpine/alpine-setup",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-setup.md",version:"current",sidebar:"docs",previous:{title:"Alpine \u5305\u7ef4\u62a4",permalink:"/notes/os/alpine/alpine-pkgs"},next:{title:"\u7248\u672c\u5386\u53f2",permalink:"/notes/os/alpine/alpine-version"}},o=[{value:"setup-disk",id:"setup-disk",children:[]}],c={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/alpine-conf"},"alpinelinux/alpine-conf")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Alpine_setup_scripts"},"Alpine setup scripts"))))),Object(i.b)("h2",{id:"setup-disk"},"setup-disk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5c06\u7cfb\u7edf\u5199\u5165\u5b58\u50a8\u4ecb\u8d28")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/alpinelinux/alpine-conf/blob/master/setup-disk.in"},"setup-disk"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"diskmode"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sys - \u6b63\u5e38\u6a21\u5f0f\uff0cboot \u5206\u533a\u548c root \u5206\u533a - \u9002\u7528\u4e8e \u5f00\u53d1\u73af\u5883\uff0c\u684c\u9762\uff0c\u865a\u62df\u673a"),Object(i.b)("li",{parentName:"ul"},"data - OS \u901a\u8fc7\u5185\u5b58\u542f\u52a8 tmpfs\uff0c\u65e0 boot \u5206\u533a"),Object(i.b)("li",{parentName:"ul"},"lvm"),Object(i.b)("li",{parentName:"ul"},"lvmsys"),Object(i.b)("li",{parentName:"ul"},"lvmdata")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"bootloader")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ARCH=s390x -> s390-tools"),Object(i.b)("li",{parentName:"ul"},"ARCH=ppc64le -> grub-ieee1275"),Object(i.b)("li",{parentName:"ul"},"USE_EFI - grub-efi"),Object(i.b)("li",{parentName:"ul"},"BOOTLOADER",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"grub -> grub-bios"),Object(i.b)("li",{parentName:"ul"},"syslinux"),Object(i.b)("li",{parentName:"ul"},"zipl"),Object(i.b)("li",{parentName:"ul"},"raspberrypi-bootloader")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"")))}u.isMDXComponent=!0}}]);