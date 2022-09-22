"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79311],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(r),d=a,m=k["".concat(l,".").concat(d)]||k[d]||u[d]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},28113:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),s=["components"],o={title:"Asterisk Debian"},l="Asterisk Debian",c={unversionedId:"voip/asterisk/asterisk-debian",id:"voip/asterisk/asterisk-debian",title:"Asterisk Debian",description:"- Why ?",source:"@site/../notes/voip/asterisk/asterisk-debian.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/asterisk-debian",permalink:"/notes/voip/asterisk/asterisk-debian",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/voip/asterisk/asterisk-debian.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Asterisk Debian"},sidebar:"docs",previous:{title:"Asterisk \u914d\u7f6e",permalink:"/notes/voip/asterisk/asterisk-conf"},next:{title:"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248",permalink:"/notes/voip/asterisk/the-definitive-guide-4th"}},p={},u=[{value:"\u6e90\u7801\u5b89\u88c5",id:"\u6e90\u7801\u5b89\u88c5",level:2}],k={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asterisk-debian"},"Asterisk Debian"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why ?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Asterisk \u5bf9 AlpineLinux musl \u517c\u5bb9\u4e0d\u597d - \u5076\u5c14\u4f1a\u51fa\u73b0 segfault"),(0,i.kt)("li",{parentName:"ul"},"debian glibc, \u5305\u6301\u7eed\u7ef4\u62a4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u70b9 - \u4e0d\u662f\u6700\u65b0 LTS, debian 10 \u548c 11 \u90fd\u662f asterisk 16"))))),(0,i.kt)("li",{parentName:"ul"},"debian asterisk ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.debian.org/pkg/asterisk"},"tracker")),(0,i.kt)("li",{parentName:"ul"},"packages ",(0,i.kt)("a",{parentName:"li",href:"https://packages.debian.org/search?keywords=asterisk"},"asterisk"))),(0,i.kt)("h2",{id:"\u6e90\u7801\u5b89\u88c5"},"\u6e90\u7801\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt upgrade\napt install gcc g++ make patch libedit-dev uuid-dev libxml2-dev libsqlite3-dev libssl-dev\ncd /usr/src/ && wget https://downloads.asterisk.org/pub/telephony/asterisk/asterisk-18-current.tar.gz\ntar -xzf asterisk-18.*\ncd asterisk-18.*\n\n# contrib \u53ef\u9009\n# \u62c9\u53d6 res_mp3 \u6e90\u7801\n# contrib/scripts/get_mp3_source.sh\n# contrib/scripts/install_prereq install\n\n./configure --with-jansson-bundled\nmake menuselect\n\nmake && make all && make install\n# \u53ef\u9009\nmake samples\nmake progdocs\n\n# init \u811a\u672c\nmake config\n\nsystemctl start asterisk\nsystemctl enable asterisk\n\nasterisk -rvvv\n")))}d.isMDXComponent=!0}}]);