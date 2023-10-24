"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61599],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),m=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=m(r),c=n,k=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return r?a.createElement(k,i(i({ref:e},u),{},{components:r})):a.createElement(k,i({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},42774:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&u(t,r,e[r]);if(p)for(var r of p(e))m.call(e,r)&&u(t,r,e[r]);return t},d=(t,e)=>l(t,i(e)),c=(t,e)=>{var r={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&m.call(t,a)&&(r[a]=t[a]);return r};const k={title:"Mirrors"},h="\u955c\u50cf",N={unversionedId:"ops/mirrors",id:"ops/mirrors",title:"Mirrors",description:"- Aliyun \u63d0\u4f9b\u975e\u5e38\u591a\u7684\u955c\u50cf\uff0c\u4f46\u8d28\u91cf\u582a\u5fe7",source:"@site/../notes/ops/mirrors.md",sourceDirName:"ops",slug:"/ops/mirrors",permalink:"/notes/ops/mirrors",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/mirrors.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1698118598,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{title:"Mirrors"},sidebar:"docs",previous:{title:"\u4ee5\u592a\u7f51\u4f9b\u7535",permalink:"/notes/ops/hardware/network/cable/poe"},next:{title:"\u8fdc\u7a0b\u684c\u9762",permalink:"/notes/ops/service/remote-desktop"}},g={},b=[{value:"\u955c\u50cf\u7ad9\u70b9",id:"\u955c\u50cf\u7ad9\u70b9",level:2},{value:"Github",id:"github",level:2},{value:"Apache",id:"apache",level:2},{value:"\u955c\u50cf\u5217\u8868",id:"\u955c\u50cf\u5217\u8868",level:2},{value:"NPM",id:"npm",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"HomeBrew",id:"homebrew",level:2},{value:"GOPROXY",id:"goproxy",level:2},{value:"Mirrorss",id:"mirrorss",level:2}],f={toc:b},y="wrapper";function w(t){var e=t,{components:r}=e,n=c(e,["components"]);return(0,a.kt)(y,d(s(s({},f),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"\u955c\u50cf"}),"\u955c\u50cf"),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Aliyun \u63d0\u4f9b\u975e\u5e38\u591a\u7684\u955c\u50cf\uff0c\u4f46\u8d28\u91cf\u582a\u5fe7",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"docker latest tag \u53ef\u80fd\u4e0d\u540c\u6b65\uff0c\u5e76\u4e14\u6ca1\u529e\u6cd5\u89e6\u53d1\u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"linux os \u7684\u5305\u53ef\u80fd\u540c\u6b65\u5ef6\u8fdf\u51e0\u5929"),(0,a.kt)("li",{parentName:"ul"},"npm \u9700\u8981\u624b\u52a8\u540c\u6b65"))),(0,a.kt)("li",{parentName:"ul"},"tuna~=aliyun ~= ustc - \u5927\u591a\u662f\u4e00\u6837\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u56fd\u5185\u5927\u5b66\u955c\u50cf \u53ef\u80fd \u7279\u6b8a\u65f6\u671f ",(0,a.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u5173\u505c"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5076\u5c14\u51fa\u73b0\u7f51\u7edc\u7ef4\u62a4\uff0c\u4e00\u7ef4\u62a4\u5c31\u662f 2-3 \u5929"))))),(0,a.kt)("h2",s({},{id:"\u955c\u50cf\u7ad9\u70b9"}),"\u955c\u50cf\u7ad9\u70b9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"URL"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u5730\u5740"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.aliyun.com"}),"https://mirrors.aliyun.com")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u963f\u91cc\u4e91")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.163.com"}),"https://mirrors.163.com")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u7f51\u6613")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.azure.cn/"}),"https://mirror.azure.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Azure")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.huaweicloud.com"}),"https://mirrors.huaweicloud.com")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u534e\u4e3a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.cloud.tencent.com/"}),"https://mirrors.cloud.tencent.com/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u817e\u8baf\u4e91")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.gitee.com/"}),"https://mirrors.gitee.com/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Gitee")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://fastly.jsdelivr.net"}),"https://fastly.jsdelivr.net")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://cnd.jsdelivr.net"}),"https://cnd.jsdelivr.net"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u6821\u955c\u50cf")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"URL"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u5730\u5740"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u4fe1\u606f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.bjtu.edu.cn/"}),"https://mirror.bjtu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5317\u4eac\u4ea4\u901a\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.cqupt.edu.cn/"}),"https://mirror.cqupt.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u91cd\u5e86\u90ae\u7535\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.dlut.edu.cn/"}),"https://mirror.dlut.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5927\u8fde\u7406\u5de5\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.ihep.ac.cn/"}),"https://mirror.ihep.ac.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u9ad8\u80fd\u7269\u7406\u7814\u7a76\u6240"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.lzu.edu.cn"}),"https://mirror.lzu.edu.cn")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5170\u5dde\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.lzu.edu.cn/"}),"https://mirror.lzu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5170\u5dde\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.neu.edu.cn/"}),"https://mirror.neu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e1c\u5317\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirror.nyist.edu.cn/"}),"https://mirror.nyist.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5357\u9633\u7406\u5de5\u5b66\u9662"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.bfsu.edu.cn/"}),"https://mirrors.bfsu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5317\u4eac\u5916\u56fd\u8bed\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.bfsu.edu.cn/"}),"https://mirrors.bfsu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5317\u4eac\u5916\u56fd\u8bed\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.bit.edu.cn/web/"}),"https://mirrors.bit.edu.cn/web/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5317\u4eac\u7406\u5de5\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.cqu.edu.cn/"}),"https://mirrors.cqu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u91cd\u5e86\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.dgut.edu.cn/"}),"https://mirrors.dgut.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e1c\u839e\u7406\u5de5\u5b66\u9662"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.hit.edu.cn/#/home"}),"https://mirrors.hit.edu.cn/#/home")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u54c8\u5c14\u6ee8\u5de5\u4e1a\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.neusoft.edu.cn/"}),"https://mirrors.neusoft.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5927\u8fde\u4e1c\u8f6f\u4fe1\u606f\u5b66\u9662"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.nju.edu.cn/"}),"https://mirrors.nju.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5357\u4eac\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.nwafu.edu.cn/"}),"https://mirrors.nwafu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u897f\u5317\u519c\u6797\u79d1\u6280\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.pku.edu.cn/"}),"https://mirrors.pku.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5317\u4eac\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.scau.edu.cn/"}),"https://mirrors.scau.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u534e\u5357\u519c\u4e1a\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.sdu.edu.cn/"}),"https://mirrors.sdu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5c71\u4e1c\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.sjtug.sjtu.edu.cn/"}),"https://mirrors.sjtug.sjtu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://sjtug.org/tags/mirror-news/"}),"https://sjtug.org/tags/mirror-news/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.sustech.edu.cn/"}),"https://mirrors.sustech.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5357\u65b9\u79d1\u6280\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.tongji.edu.cn/"}),"https://mirrors.tongji.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u540c\u6d4e\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.tuna.tsinghua.edu.cn/"}),"https://mirrors.tuna.tsinghua.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u6e05\u534e\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.ustc.edu.cn/"}),"https://mirrors.ustc.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e2d\u56fd\u79d1\u5b66\u6280\u672f\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.xjtu.edu.cn"}),"https://mirrors.xjtu.edu.cn")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u897f\u5b89\u4ea4\u5927"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.ynu.edu.cn/"}),"https://mirrors.ynu.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e91\u5357\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.zju.edu.cn/"}),"https://mirrors.zju.edu.cn/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u6d59\u6c5f\u5927\u5b66"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/SUSTech-CRA/chinese-opensource-mirror-site"}),"https://github.com/SUSTech-CRA/chinese-opensource-mirror-site")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.cernet.edu.cn/list"}),"https://mirrors.cernet.edu.cn/list"))),(0,a.kt)("h2",s({},{id:"github"}),"Github"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://gitcode.net"}),"https://gitcode.net"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://gitcode.net/mirrors/protocolbuffers/protobuf/-/releases/v3.19.1"}),"https://gitcode.net/mirrors/protocolbuffers/protobuf/-/releases/v3.19.1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://ghproxy.com"}),"https://ghproxy.com"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/hunshcn/gh-proxy"}),"https://github.com/hunshcn/gh-proxy"))))),(0,a.kt)("h2",s({},{id:"apache"}),"Apache"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirror.sjtu.edu.cn/apache"}),"https://mirror.sjtu.edu.cn/apache"))),(0,a.kt)("h2",s({},{id:"\u955c\u50cf\u5217\u8868"}),"\u955c\u50cf\u5217\u8868"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u540d\u5b57"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u5730\u5740"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Debian"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://www.debian.org/mirror/list.zh-cn.html"}),"https://www.debian.org/mirror/list.zh-cn.html"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Alpine"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://mirrors.alpinelinux.org/"}),"https://mirrors.alpinelinux.org/"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alpine",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://dl-cdn.alpinelinux.org/alpine/"}),"https://dl-cdn.alpinelinux.org/alpine/"))))),(0,a.kt)("h2",s({},{id:"npm"}),"NPM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://registry.npmjs.org"}),"https://registry.npmjs.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"http://r.cnpmjs.org"}),"http://r.cnpmjs.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"http://registry.npm.taobao.org"}),"http://registry.npm.taobao.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.sjtug.sjtu.edu.cn/npm-registry"}),"https://mirrors.sjtug.sjtu.edu.cn/npm-registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://repo.huaweicloud.com/repository/npm"}),"https://repo.huaweicloud.com/repository/npm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.huaweicloud.com/repository/npm"}),"https://mirrors.huaweicloud.com/repository/npm"))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ini"}),"chromedriver_cdnurl=https://repo.huaweicloud.com/chromedriver\ndisturl=https://repo.huaweicloud.com/nodejs\nelectron_mirror=https://repo.huaweicloud.com/electron/\noperadriver_cdnurl=https://repo.huaweicloud.com/operadriver\nphantomjs_cdnurl=https://repo.huaweicloud.com/phantomjs\npython_mirror=https://repo.huaweicloud.com/python\nsass_binary_site=https://repo.huaweicloud.com/node-sass\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ini"}),"chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver\ndisturl=https://npm.taobao.org/dist\nelectron_mirror=http://cdn.npm.taobao.org/dist/electron\nfse_binary_host_mirror=https://npm.taobao.org/mirrors/fsevents\noperadriver_cdnurl=http://cdn.npm.taobao.org/dist/operadriver\nphantomjs_cdnurl=http://cdn.npm.taobao.org/dist/phantomjs\nsass_binary_site=http://cdn.npm.taobao.org/dist/node-sass\n")),(0,a.kt)("h2",s({},{id:"docker-image"}),"Docker Image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker.io",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"docker.m.daocloud.io"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",s({parentName:"del"},{href:"https://fogjl973.mirror.aliyuncs.com"}),"https://fogjl973.mirror.aliyuncs.com"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",s({parentName:"del"},{href:"https://8x40wsit.mirror.aliyuncs.com"}),"https://8x40wsit.mirror.aliyuncs.com"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://registry-1.docker.io"}),"https://registry-1.docker.io"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"production.cloudflare.docker.com",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5076\u5c14\u901a"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://hub-mirror.c.163.com"}),"https://hub-mirror.c.163.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",s({parentName:"del"},{href:"https://docker.mirrors.ustc.edu.cn"}),"https://docker.mirrors.ustc.edu.cn"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",s({parentName:"del"},{href:"https://f1361db2.m.daocloud.io"}),"https://f1361db2.m.daocloud.io"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",s({parentName:"del"},{href:"https://reg-mirror.qiniu.com"}),"https://reg-mirror.qiniu.com"))))),(0,a.kt)("li",{parentName:"ul"},"gcr.io",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gcr.m.daocloud.io"))),(0,a.kt)("li",{parentName:"ul"},"k8s.gcr.io -> gcr.io/google-containers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"k8s-gcr.m.daocloud.io"),(0,a.kt)("li",{parentName:"ul"},"registry.aliyuncs.com/google_containers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"googlecontainersmirror - docker hub")))),(0,a.kt)("li",{parentName:"ul"},"registry.k8s.io",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"k8s.m.daocloud.io"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/kubernetes/registry.k8s.io"}),"https://github.com/kubernetes/registry.k8s.io")))),(0,a.kt)("li",{parentName:"ul"},"quay.io",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"quay.m.daocloud.io"),(0,a.kt)("li",{parentName:"ul"},"quay-mirror.qiniu.com"),(0,a.kt)("li",{parentName:"ul"},"quay.mirrors.ustc.edu.cn"))),(0,a.kt)("li",{parentName:"ul"},"public.ecr.aws")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'docker pull nginx:alpine\n# \u955c\u50cf\ndocker pull docker.mirrors.ustc.edu.cn/library/nginx:alpine\ndocker pull docker.mirrors.ustc.edu.cn/wener/base\n# \u5357\u4eac\u5927\u5b66\ndocker pull docker.nju.edu.cn/wener/base:latest\n\ntee /etc/docker/daemon.json <<- \'EOF\'\n{\n  "registry-mirrors": [\n    "https://docker.m.daocloud.io",\n    "https://dockercr.wener.me",\n    "https://docker.mirrors.ustc.edu.cn"\n  ]\n}\nEOF\n')),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),"mirrors:\n  docker.io:\n    endpoint:\n    - https://dockercr.wener.me\n    - https://docker.m.daocloud.io\n    - https://registry-1.docker.io\n  ghcr.io:\n    endpoint:\n    - https://ghcr.wener.me\n    - https://ghcr.io\n  registry.k8s.io:\n    endpoint:\n    - https://k8scr.wener.me\n    - https://registry.k8s.io\n  gcr.io:\n    endpoint:\n    - https://gcr.wener.me\n    - https://gcr.m.daocloud.io\n    - https://gcr.io\n  quay.io:\n    endpoint:\n    - https://quaycr.wener.me\n    - https://quay.m.daocloud.io\n    - https://quay.io\n")),(0,a.kt)("h2",s({},{id:"homebrew"}),"HomeBrew"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"brew.git - ",(0,a.kt)("inlineCode",{parentName:"li"},"$(brew --repo)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/Homebrew/brew.git"}),"https://github.com/Homebrew/brew.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.aliyun.com/homebrew/brew.git"}),"https://mirrors.aliyun.com/homebrew/brew.git")))),(0,a.kt)("li",{parentName:"ul"},"homebrew-core.git - ",(0,a.kt)("inlineCode",{parentName:"li"},"$(brew --repo)/Library/Taps/homebrew/homebrew-core"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/Homebrew/homebrew-core.git"}),"https://github.com/Homebrew/homebrew-core.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.aliyun.com/homebrew/homebrew-core.git"}),"https://mirrors.aliyun.com/homebrew/homebrew-core.git")))),(0,a.kt)("li",{parentName:"ul"},"HOMEBREW_BOTTLE_DOMAIN",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://homebrew.bintray.com/bottles"}),"https://homebrew.bintray.com/bottles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.sjtug.sjtu.edu.cn/homebrew-bottles"}),"https://mirrors.sjtug.sjtu.edu.cn/homebrew-bottles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.aliyun.com/homebrew/homebrew-bottles"}),"https://mirrors.aliyun.com/homebrew/homebrew-bottles")))),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://ghcr.io/v2/homebrew/core/protobuf/manifests/21.6"}),"https://ghcr.io/v2/homebrew/core/protobuf/manifests/21.6"))))),(0,a.kt)("h2",s({},{id:"goproxy"}),"GOPROXY"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 proxy.golang.org"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://proxy.golang.com.cn"}),"https://proxy.golang.com.cn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://mirrors.aliyun.com/goproxy"}),"https://mirrors.aliyun.com/goproxy"))),(0,a.kt)("h2",s({},{id:"mirrorss"}),"Mirrorss"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/DaoCloud/public-image-mirror"}),"https://github.com/DaoCloud/public-image-mirror"))))}w.isMDXComponent=!0}}]);