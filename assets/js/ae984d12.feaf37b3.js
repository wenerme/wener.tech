"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88958],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(b,c(c({ref:n},p),{},{components:t})):r.createElement(b,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38233:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={title:"NBD"},l=void 0,s={unversionedId:"ops/storage/block/nbd",id:"ops/storage/block/nbd",title:"NBD",description:"- Network block device",source:"@site/notes/ops/storage/block/nbd.md",sourceDirName:"ops/storage/block",slug:"/ops/storage/block/nbd",permalink:"/notes/ops/storage/block/nbd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/block/nbd.md",tags:[],version:"current",frontMatter:{title:"NBD"},sidebar:"docs",previous:{title:"mdadm",permalink:"/notes/ops/storage/block/mdadm"},next:{title:"RAID",permalink:"/notes/ops/storage/block/raid"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_block_device"},"Network block device")),(0,a.kt)("li",{parentName:"ul"},"Linux 2.1.55 and released in 1997"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/HomeServer/comments/954ns2/choice_of_san_iscsi_vs_nbd_vs_aoe/"},"Choice of SAN: iSCSI vs NBD vs AOE"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# https://gist.github.com/shamil/62935d9b456a6f9877b5\n# setup\n# \u9ed8\u8ba4 16\n# modprobe nbd max_part=8\nmodprobe nbd\nqemu-img create -f qcow2 alpine.qcow2 40G\nqemu-nbd --connect=/dev/nbd0 alpine.qcow2\n\n# \u78c1\u76d8\u4fe1\u606f\nfdisk /dev/nbd0 -l\nmount /dev/nbd0p1 /mnt\n\n# cleanup\numount /mnt/somepoint/\nqemu-nbd --disconnect /dev/nbd0\n\n#\nrmmod nbd\n")))}d.isMDXComponent=!0}}]);