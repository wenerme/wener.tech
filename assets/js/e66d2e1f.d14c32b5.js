"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51624],{49613:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return m}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},h=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(d,i(i({ref:e},h),{},{components:n})):r.createElement(d,i({ref:e},h))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56471:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"hardhat"},c="hardhat",p={unversionedId:"blockchain/eth/lib/hardhat",id:"blockchain/eth/lib/hardhat",title:"hardhat",description:"- NomicFoundation/hardhat",source:"@site/../notes/blockchain/eth/lib/hardhat.md",sourceDirName:"blockchain/eth/lib",slug:"/blockchain/eth/lib/hardhat",permalink:"/notes/blockchain/eth/lib/hardhat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/blockchain/eth/lib/hardhat.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"hardhat"},sidebar:"docs",previous:{title:"ethersjs",permalink:"/notes/blockchain/eth/lib/ethersjs"},next:{title:"OpenZeppelin",permalink:"/notes/blockchain/eth/lib/open-zeppelin"}},h={},u=[],s={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hardhat"},"hardhat"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NomicFoundation/hardhat"},"NomicFoundation/hardhat")),(0,o.kt)("li",{parentName:"ul"},"hardhat.config.js"),(0,o.kt)("li",{parentName:"ul"},"localhost",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"chainId: 1337"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8545"},"http://127.0.0.1:8545"))))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"MetaMask \u9700\u8981\u8bbe\u7f6e chainId \u4e3a 1337",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hardhat.org/metamask-issue.html"},"https://hardhat.org/metamask-issue.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-extension/issues/10290"},"https://github.com/MetaMask/metamask-extension/issues/10290")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat\nnpx hardhat compile\nnpx hardhat node\n\nnpx hardhat run scripts/deploy.ts --network localhost\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hardhat.org/config/"},"https://hardhat.org/config/"))))}m.isMDXComponent=!0}}]);