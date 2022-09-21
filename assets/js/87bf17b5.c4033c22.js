"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7554],{20376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s}});var a=n(96600),r=n(27279),i=(n(59496),n(3905)),p=["components"],c={title:"API"},l=void 0,o={unversionedId:"blockchain/eth/api",id:"blockchain/eth/api",title:"API",description:"OKX",source:"@site/notes/blockchain/eth/api.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/api",permalink:"/notes/blockchain/eth/api",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/blockchain/eth/api.md",tags:[],version:"current",frontMatter:{title:"API"},sidebar:"docs",previous:{title:"Ethereum",permalink:"/notes/blockchain/eth/"},next:{title:"Avalanche",permalink:"/notes/blockchain/eth/avalanche"}},u={},s=[{value:"OKX",id:"okx",level:2},{value:"Binance",id:"binance",level:2}],m={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okx"},"OKX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.okx.com/docs-v5/en/"},"https://www.okx.com/docs-v5/en/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.okx.com/"},"https://www.okx.com/")),(0,i.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u7c7b\u578b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MARGIN\uff1a\u5e01\u5e01\u6760\u6746"),(0,i.kt)("li",{parentName:"ul"},"SWAP\uff1a\u6c38\u7eed\u5408\u7ea6"),(0,i.kt)("li",{parentName:"ul"},"FUTURES\uff1a\u4ea4\u5272\u5408\u7ea6"),(0,i.kt)("li",{parentName:"ul"},"OPTION\uff1a\u671f\u6743")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5355\u4e2a\u4ea7\u54c1\u884c\u60c5\u4fe1\u606f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"20/2s")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"GET https://www.okx.com/api/v5/market/ticker?instId=BTC-USDT-SWAP\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u6307\u6570\u884c\u60c5")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"20/2s")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"GET https://www.okx.com/api/v5/market/index-tickers?instId=BTC-USDT\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6cd5\u5e01\u6c47\u7387")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"GET https://www.okx.com/api/v5/market/exchange-rate\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"usd -> cny")),(0,i.kt)("h2",{id:"binance"},"Binance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://binance-docs.github.io/apidocs/spot/en/"},"https://binance-docs.github.io/apidocs/spot/en/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.binance.com/en/binance-api"},"https://www.binance.com/en/binance-api")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.binance.com"},"https://api.binance.com"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api1.binance.com"},"https://api1.binance.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api2.binance.com"},"https://api2.binance.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api3.binance.com"},"https://api3.binance.com"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'### \u5168\u90e8\u4ef7\u683c\nGET https://api.binance.com/api/v3/ticker/price\n### \u5355\u4e2a Symbol \u4ef7\u683c\nGET https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDC\n### \u591a\u4e2a Symbols \u4ef7\u683c\nGET https://api.binance.com/api/v3/ticker/price?symbols=["ETHUSDC","ETHUSDT"]\n')))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,h=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(h,p(p({ref:t},s),{},{components:n})):a.createElement(h,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<i;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);