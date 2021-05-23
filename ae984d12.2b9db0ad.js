(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1021:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},723:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(1021)),c={title:"NBD"},i={unversionedId:"ops/storage/block/nbd",id:"ops/storage/block/nbd",isDocsHomePage:!1,title:"NBD",description:"* Network block device",source:"@site/notes/ops/storage/block/nbd.md",slug:"/ops/storage/block/nbd",permalink:"/notes/ops/storage/block/nbd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/block/nbd.md",version:"current",sidebar:"docs",previous:{title:"mdadm",permalink:"/notes/ops/storage/block/mdadm"},next:{title:"RAID",permalink:"/notes/ops/storage/block/raid"}},p=[],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_block_device"},"Network block device")),Object(a.b)("li",{parentName:"ul"},"Linux 2.1.55 and released in 1997"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.reddit.com/r/HomeServer/comments/954ns2/choice_of_san_iscsi_vs_nbd_vs_aoe/"},"Choice of SAN: iSCSI vs NBD vs AOE"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# https://gist.github.com/shamil/62935d9b456a6f9877b5\n# setup\n# \u9ed8\u8ba4 16\n# modprobe nbd max_part=8\nmodprobe nbd\nqemu-img create -f qcow2 alpine.qcow2 40G\nqemu-nbd --connect=/dev/nbd0 alpine.qcow2\n\n# \u78c1\u76d8\u4fe1\u606f\nfdisk /dev/nbd0 -l\nmount /dev/nbd0p1 /mnt\n\n# cleanup\numount /mnt/somepoint/\nqemu-nbd --disconnect /dev/nbd0\n\n#\nrmmod nbd\n")))}l.isMDXComponent=!0}}]);