(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{461:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),i=(r(0),r(586)),o={id:"zerotier",title:"Zerotier"},l={unversionedId:"ops/network/private/zerotier",id:"ops/network/private/zerotier",isDocsHomePage:!1,title:"Zerotier",description:"Zerotier",source:"@site/notes/ops/network/private/zerotier.md",slug:"/ops/network/private/zerotier",permalink:"/notes/ops/network/private/zerotier",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/private/zerotier.md",version:"current"},c=[{value:"Tips",id:"tips",children:[]},{value:"controller",id:"controller",children:[]},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u8df3\u8fc7 ZeroTier \u670d\u52a1\u5668",id:"\u8df3\u8fc7-zerotier-\u670d\u52a1\u5668",children:[]},{value:"REQUESTING_CONFIGURATION",id:"requesting_configuration",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"zerotier"},"Zerotier"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.zerotier.com/manual"}),"Manual")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips"}),"Router Configuration Tips")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 9993"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 uPnP \u6216 NAT-PMP \u76f4\u63a5\u6620\u5c04\u7aef\u53e3\u80fd\u66f4\u5bb9\u6613\u76f4\u8fde"),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5927\u91cf\u4f20\u8f93\u6570\u636e\u53ef\u80fd\u5bfc\u81f4\u88ab\u5b98\u65b9 ZTC block\uff0c\u72b6\u6001\u4e00\u76f4\u5904\u4e8e REQUESTING_CONFIGURATION",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5220\u9664\u672c\u5730 ID \u91cd\u8fde\u5e94\u8be5\u53ef\u4ee5\u89e3\u51b3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/zerotier-one/identity.*"))))))),Object(i.b)("h2",{id:"controller"},"controller"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"zerotier-one ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zerotier/ZeroTierOne/blob/master/one.cpp"}),"one.cpp"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"idtool \u548c cli \u662f\u516c\u7528\u540c\u4e00\u4e2a bin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zerotier/ZeroTierOne/blob/master/controller/EmbeddedNetworkController.cpp"}),"EmbeddedNetworkController.cpp")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zerotier/ZeroTierOne/blob/db813db7e875c257e42c41ab8091c3df1e9300a5/osdep/OSUtils.cpp#L382"}),"platformDefaultHomePath"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"macOS ",Object(i.b)("inlineCode",{parentName:"li"},"/Library/Application Support/ZeroTier/One")),Object(i.b)("li",{parentName:"ul"},"linux ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/zerotier-one")),Object(i.b)("li",{parentName:"ul"},"windows ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\ProgramData\\ZeroTier\\One"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# macOS controller\n# \u4f7f\u7528 $PWD/controller \u4f5c\u4e3a HOME\nsudo /Library/Application\\ Support/ZeroTier/One/zerotier-one $PWD/controller\n\n\n# docker controller\ndocker run --rm -it -p 9993:9993 wener:edge\napk update && apk add zerotier-one\n# controller \u9ed8\u8ba4\u7aef\u53e3 9993\nzerotier-one -p9993\n")),Object(i.b)("h2",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"V1 \u7f51\u7edc\u5c42",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"P2P"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6839\u670d\u52a1\u7ec4\u7f51"),Object(i.b)("li",{parentName:"ul"},"0 \u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"1 \u4e2a earth \u6839\u670d\u52a1\u5668\uff0c\u7531 ZeroTier \u8fd0\u8425\uff1b12 \u4e2a\u6839\u670d\u52a1\u5668"),Object(i.b)("li",{parentName:"ul"},"\u56f4\u7ed5 earth \u7684\u4e3a moon\uff1b \u7528\u4e8e\u6dfb\u52a0\u7528\u6237\u5b9a\u4e49\u7684\u6839\u670d\u52a1\uff1b\u4f7f\u7528 moon \u8282\u70b9\u53ef\u907f\u514d\u4f9d\u8d56 ZeroTier \u7684\u57fa\u7840\u8bbe\u65bd\uff1b\u53ef\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd"),Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u51e0\u70b9\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 40\u4f4d\uff0810\u4f4d16\u8fdb\u5236\u5b57\u7b26\uff09 \u7684\u6807\u8bc6\u7b26\uff1b\u901a\u8fc7\u516c\u94a5\u548c\u79c1\u94a5\u8ba1\u7b97\uff1b")))),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"\u8df3\u8fc7-zerotier-\u670d\u52a1\u5668"},"\u8df3\u8fc7 ZeroTier \u670d\u52a1\u5668"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zerotier/ZeroTierOne/issues/610"}),"#610"))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zerotier/ZeroTierOne/blob/master/attic/world/mkworld.cpp"}),"mkworld.cpp")," \u521d\u59cb\u5316\u57fa\u7840\u4fe1\u606f\uff0c\u5305\u542b\u6240\u6709\u7684 root \u670d\u52a1\u5668\uff0c\u9700\u8981\u8df3\u8fc7\u8fd9\u4e9b\u670d\u52a1\u5668\u5219\u9700\u8981\u4fee\u6539\u4ece\u65b0\u751f\u6210\u3002"),Object(i.b)("h3",{id:"requesting_configuration"},"REQUESTING_CONFIGURATION"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zerotier/ZeroTierOne/issues/1214"}),"#1214")),Object(i.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u51cf\u5c11 network \u540e\u6062\u590d\u4e86",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u975e\u5e38\u9ebb\u70e6\uff0c\u4e0d\u597d\u6062\u590d")))))}p.isMDXComponent=!0},586:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,s=u["".concat(o,".").concat(m)]||u[m]||O[m]||i;return r?a.a.createElement(s,l(l({ref:t},b),{},{components:r})):a.a.createElement(s,l({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);