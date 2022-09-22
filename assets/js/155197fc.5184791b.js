"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76494],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),y=l(n),d=o,m=y["".concat(c,".").concat(d)]||y[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},82561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(96600),o=n(27279),i=(n(59496),n(49613)),s=["components"],a={title:"cygwin"},c="cygwin",l={unversionedId:"os/windows/cygwin",id:"os/windows/cygwin",title:"cygwin",description:"- \u5728 Windows \u4e0b \u63d0\u4f9b POSIX \u73af\u5883",source:"@site/../notes/os/windows/cygwin.md",sourceDirName:"os/windows",slug:"/os/windows/cygwin",permalink:"/notes/os/windows/cygwin",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/windows/cygwin.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627207978,formattedLastUpdatedAt:"Jul 25, 2021",frontMatter:{title:"cygwin"},sidebar:"docs",previous:{title:"Batch",permalink:"/notes/os/windows/batch"},next:{title:"msys2",permalink:"/notes/os/windows/msys2"}},u={},p=[{value:"Tools",id:"tools",level:2}],y={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cygwin"},"cygwin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 Windows \u4e0b \u63d0\u4f9b POSIX \u73af\u5883")),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cygcheck"),(0,i.kt)("li",{parentName:"ul"},"cygpath - \u6a21\u62df\u73af\u5883\u8def\u5f84\u8f6c Windows \u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},"cygrunsrv - \u6ce8\u518c\u7ba1\u7406 windows \u670d\u52a1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"-I \u5b89\u88c5 -R \u79fb\u9664 -S \u542f\u52a8 -E \u505c\u6b62 -Q \u641c\u7d22 -L \u663e\u793a\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u672c\u5730\u670d\u52a1\u548c\u8fdc\u7a0b\u670d\u52a1 - \u8fdc\u7a0b server/svc_name"))),(0,i.kt)("li",{parentName:"ul"},"cygstart"),(0,i.kt)("li",{parentName:"ul"},"cygwin-console-helper")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# -R \u5220\u9664 service\ncygrunsrv -R msys2_sshd\n# -I \u5b89\u88c5 service\n# -d \u663e\u793a\u540d\u5b57 -p \u5e94\u7528\u8def\u5f84 -a \u53c2\u6570 -y \u4f9d\u8d56\ncygrunsrv -I msys2_sshd -d "MSYS2 sshd" -p /usr/bin/sshd.exe -a "-D -e" -y tcpip\n\ncygrunsrv -L\ncygrunsrv -Q msys2_sshd\n')))}d.isMDXComponent=!0}}]);