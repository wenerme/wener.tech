"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67395],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,h=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98363:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return h},metadata:function(){return d},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const h={title:"EVM"},b="EVM",d={unversionedId:"blockchain/eth/evm",id:"blockchain/eth/evm",title:"EVM",description:"Decompile",source:"@site/../notes/blockchain/eth/evm.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/evm",permalink:"/notes/blockchain/eth/evm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/evm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1658491471,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"EVM"},sidebar:"docs",previous:{title:"Ether FAQ",permalink:"/notes/blockchain/eth/ether-faq"},next:{title:"ethersjs",permalink:"/notes/blockchain/eth/lib/ethersjs"}},y={},v=[{value:"Decompile",id:"decompile",level:2}],k={toc:v},w="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(w,s(m(m({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"evm"}),"EVM"),(0,n.kt)("h2",m({},{id:"decompile"}),"Decompile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://ethervm.io/decompile"}),"https://ethervm.io/decompile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.4byte.directory/"}),"https://www.4byte.directory/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ethereum Signature Database"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/beched/abi-decompiler"}),"https://github.com/beched/abi-decompiler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/comaeio/porosity"}),"https://github.com/comaeio/porosity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.contract-library.com/"}),"https://www.contract-library.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/MrLuit/evm"}),"https://github.com/MrLuit/evm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/eveem-org/panoramix"}),"https://github.com/eveem-org/panoramix"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/palkeo/panoramix"}),"https://github.com/palkeo/panoramix"))))))}g.isMDXComponent=!0}}]);