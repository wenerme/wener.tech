"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29024],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),b=o,y=s["".concat(l,".").concat(b)]||s[b]||f[b]||a;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return y},metadata:function(){return d},toc:function(){return O}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>a(e,c(t)),b=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"typechain"},h="typechain",d={unversionedId:"blockchain/eth/lib/typechain",id:"blockchain/eth/lib/typechain",title:"typechain",description:"",source:"@site/../notes/blockchain/eth/lib/typechain.md",sourceDirName:"blockchain/eth/lib",slug:"/blockchain/eth/lib/typechain",permalink:"/notes/blockchain/eth/lib/typechain",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/lib/typechain.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1658491471,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"typechain"},sidebar:"docs",previous:{title:"OpenZeppelin",permalink:"/notes/blockchain/eth/lib/open-zeppelin"},next:{title:"NFT",permalink:"/notes/blockchain/eth/nft/"}},m={},O=[],v={toc:O},g="wrapper";function w(e){var t=e,{components:n}=t,o=b(t,["components"]);return(0,r.kt)(g,f(s(s({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"typechain"}),"typechain"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm add -D typechain\n# target: ethers-v5|truffle-v4|truffle-v5|web3-v1\nnpm add @typechain/ethers-v5\n\nnpx typechain --target=ethers-v5 --discriminate-types --out-dir src/contracts contracts/**/*.json\n")))}w.isMDXComponent=!0}}]);