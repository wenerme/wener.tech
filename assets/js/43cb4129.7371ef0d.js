"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47904],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),y=o,m=f["".concat(c,".").concat(y)]||f[y]||s[y]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),i=["components"],p={id:"encryption"},c="Encryption",l={unversionedId:"ops/storage/encryption/encryption",id:"ops/storage/encryption/encryption",title:"Encryption",description:"- \u5757\u7ea7\u522b",source:"@site/../notes/ops/storage/encryption/README.md",sourceDirName:"ops/storage/encryption",slug:"/ops/storage/encryption/",permalink:"/notes/ops/storage/encryption/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/storage/encryption/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"encryption"},sidebar:"docs",previous:{title:"RAID",permalink:"/notes/ops/storage/block/raid"},next:{title:"LUKS",permalink:"/notes/ops/storage/encryption/luks"}},u={},s=[],f={toc:s};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encryption"},"Encryption"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5757\u7ea7\u522b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea Linux \u9009\u62e9 LUKS"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8de8\u5e73\u53f0\u9009\u62e9 VeraCrypt"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Data-at-rest_encryption"},"Data-at-rest encryption"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u5757\u8bbe\u5907\u3001\u78c1\u76d8\u5206\u533a\u3001\u76ee\u5f55\u65f6\u5b9e\u65f6\u52a0\u5bc6"))),(0,a.kt)("li",{parentName:"ul"},"Full-disk encryption (FDE)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6574\u4e2a\u78c1\u76d8\u52a0\u5bc6"))),(0,a.kt)("li",{parentName:"ul"},"on-the-fly encryption (OTFE)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_disk_encryption_software"},"Comparison of disk encryption software"))))}y.isMDXComponent=!0}}]);