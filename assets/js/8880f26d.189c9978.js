"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53963],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),h=o,d=c["".concat(p,".").concat(h)]||c[h]||u[h]||n;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<n;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},38019:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return b}});var a=r(49613),o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&s(e,r,t[r]);return e};const c={title:"Headless"},h="Headless",d={unversionedId:"web/browser/headless",id:"web/browser/headless",title:"Headless",description:"- ChromeDevTools/awesome-chrome-devtools",source:"@site/../notes/web/browser/headless.md",sourceDirName:"web/browser",slug:"/web/browser/headless",permalink:"/notes/web/browser/headless",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/browser/headless.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668620824,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Headless"},sidebar:"docs",previous:{title:"Chromium",permalink:"/notes/web/browser/chrome/chromium"},next:{title:"Puppeteer",permalink:"/notes/web/browser/puppeteer"}},f={},b=[{value:"Awesome",id:"awesome",level:2},{value:"WebDriver",id:"webdriver",level:2},{value:"playwright vs puppeteer",id:"playwright-vs-puppeteer",level:2}],k={toc:b};function g(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},k),s),n(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"headless"}),"Headless"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/ChromeDevTools/awesome-chrome-devtools"}),"ChromeDevTools/awesome-chrome-devtools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"https://chromedevtools.github.io/devtools-protocol/")),(0,a.kt)("li",{parentName:"ul"},"devtools-ws-url",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"--remote-debugging-port=9222",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/json"))))),(0,a.kt)("li",{parentName:"ul"},"flags",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"--user-data-dir=$DIR"),(0,a.kt)("li",{parentName:"ul"},"--blink-settings=imagesEnabled=false"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md"}),"https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://niek.github.io/chrome-features/"}),"https://niek.github.io/chrome-features/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://source.chromium.org/chromium/chromium/src/+/master:out/Debug/gen/third_party/blink/renderer/platform/runtime_enabled_features.cc;l=1559;drc=170473ad887b7990079f1f996b126548569c5902"}),"blink features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/platform/RuntimeEnabledFeatures.md"}),"RuntimeEnabledFeatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://www.chromium.org/developers/design-documents/network-settings/"}),"https://www.chromium.org/developers/design-documents/network-settings/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"--proxy-server")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"--enable-blink-features=SomeNewFeature,SomeOtherNewFeature\n--disable-blink-features=SomeOldFeature\n")),(0,a.kt)("h2",u({},{id:"awesome"}),"Awesome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer"}),"puppeteer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, TS"),(0,a.kt)("li",{parentName:"ul"},"Chrome \u56e2\u961f\u652f\u6301"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/playwright"}),"microsoft/playwright"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 \u591a\u6d4f\u89c8\u5668 - Chromium, Firefox, WebKit"),(0,a.kt)("li",{parentName:"ul"},"patch Firefox, WebKit \u5b9e\u73b0"))),(0,a.kt)("li",{parentName:"ul"},"Golang",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/chromedp/chromedp"}),"chromedp/chromedp"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/chromedp/examples"}),"chromedp/examples")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/sensepost/gowitness"}),"sensepost/gowitness"))))),(0,a.kt)("h2",u({},{id:"webdriver"}),"WebDriver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://w3c.github.io/webdriver/webdriver-spec.html"}),"W3C WebDriver"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u6d4f\u89c8\u5668"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/electron/chromedriver"}),"electron/chromedriver"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,a.kt)("a",u({parentName:"li"},{href:"https://sites.google.com/chromium.org/driver/"}),"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://chromedriver.chromium.org/"}),"https://chromedriver.chromium.org/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://chromedriver.storage.googleapis.com/index.html"}),"https://chromedriver.storage.googleapis.com/index.html")))),(0,a.kt)("li",{parentName:"ul"},"webdriver",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Python ",(0,a.kt)("inlineCode",{parentName:"li"},"from selenium import webdriver"))))),(0,a.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",u({},{id:"playwright-vs-puppeteer"}),"playwright vs puppeteer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://blog.logrocket.com/playwright-vs-puppeteer/"}),"https://blog.logrocket.com/playwright-vs-puppeteer/"))))}g.isMDXComponent=!0}}]);