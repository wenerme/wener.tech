"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3347],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(96600),i=n(27279),o=(n(59496),n(49613)),c=["components"],a={title:"PCI"},u="PCI",l={unversionedId:"os/linux/dev/pci",id:"os/linux/dev/pci",title:"PCI",description:"- https://github.com/pciutils/pciutils",source:"@site/../notes/os/linux/dev/pci.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/pci",permalink:"/notes/os/linux/dev/pci",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/dev/pci.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653188491,formattedLastUpdatedAt:"May 22, 2022",frontMatter:{title:"PCI"},sidebar:"docs",previous:{title:"mtd",permalink:"/notes/os/linux/dev/mtd"},next:{title:"udev",permalink:"/notes/os/linux/dev/udev"}},p={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pci"},"PCI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pciutils/pciutils"},"https://github.com/pciutils/pciutils")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.debian.org/HowToIdentifyADevice/PCI"},"https://wiki.debian.org/HowToIdentifyADevice/PCI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://elixir.free-electrons.com/linux/latest/source/include/linux/pci.h"},"http://elixir.free-electrons.com/linux/latest/source/include/linux/pci.h"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lspci -s 02:00.0 -vv\n")))}d.isMDXComponent=!0}}]);