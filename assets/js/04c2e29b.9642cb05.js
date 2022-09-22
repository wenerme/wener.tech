"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35649],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,f=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={title:"API"},k="API",f={unversionedId:"blockchain/eth/api",id:"blockchain/eth/api",title:"API",description:"OKX",source:"@site/../notes/blockchain/eth/api.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/api",permalink:"/notes/blockchain/eth/api",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/api.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"API"},sidebar:"docs",previous:{title:"Ethereum",permalink:"/notes/blockchain/eth/"},next:{title:"Avalanche",permalink:"/notes/blockchain/eth/avalanche"}},h={},b=[{value:"OKX",id:"okx",level:2},{value:"Binance",id:"binance",level:2}],d={toc:b};function w(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},d),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"api"}),"API"),(0,r.kt)("h2",s({},{id:"okx"}),"OKX"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.okx.com/docs-v5/en/"}),"https://www.okx.com/docs-v5/en/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.okx.com/"}),"https://www.okx.com/")),(0,r.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MARGIN\uff1a\u5e01\u5e01\u6760\u6746"),(0,r.kt)("li",{parentName:"ul"},"SWAP\uff1a\u6c38\u7eed\u5408\u7ea6"),(0,r.kt)("li",{parentName:"ul"},"FUTURES\uff1a\u4ea4\u5272\u5408\u7ea6"),(0,r.kt)("li",{parentName:"ul"},"OPTION\uff1a\u671f\u6743")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5355\u4e2a\u4ea7\u54c1\u884c\u60c5\u4fe1\u606f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20/2s")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http"}),"GET https://www.okx.com/api/v5/market/ticker?instId=BTC-USDT-SWAP\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u6307\u6570\u884c\u60c5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20/2s")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http"}),"GET https://www.okx.com/api/v5/market/index-tickers?instId=BTC-USDT\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6cd5\u5e01\u6c47\u7387")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http"}),"GET https://www.okx.com/api/v5/market/exchange-rate\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"usd -> cny")),(0,r.kt)("h2",s({},{id:"binance"}),"Binance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://binance-docs.github.io/apidocs/spot/en/"}),"https://binance-docs.github.io/apidocs/spot/en/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.binance.com/en/binance-api"}),"https://www.binance.com/en/binance-api")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://api.binance.com"}),"https://api.binance.com"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://api1.binance.com"}),"https://api1.binance.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://api2.binance.com"}),"https://api2.binance.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://api3.binance.com"}),"https://api3.binance.com"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http"}),'### \u5168\u90e8\u4ef7\u683c\nGET https://api.binance.com/api/v3/ticker/price\n### \u5355\u4e2a Symbol \u4ef7\u683c\nGET https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDC\n### \u591a\u4e2a Symbols \u4ef7\u683c\nGET https://api.binance.com/api/v3/ticker/price?symbols=["ETHUSDC","ETHUSDT"]\n')))}w.isMDXComponent=!0}}]);