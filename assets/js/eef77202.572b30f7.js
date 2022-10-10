"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70478],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17711:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return m}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={title:"Windows Registry"},f="Windows Registry",y={unversionedId:"os/windows/windows-registry",id:"os/windows/windows-registry",title:"Windows Registry",description:"sip protocol registry",source:"@site/../notes/os/windows/windows-registry.md",sourceDirName:"os/windows",slug:"/os/windows/registry",permalink:"/notes/os/windows/registry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/windows/windows-registry.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627459974,formattedLastUpdatedAt:"Jul 28, 2021",frontMatter:{title:"Windows Registry"},sidebar:"docs",previous:{title:"Windows Policy",permalink:"/notes/os/windows/policy"},next:{title:"Windows Version",permalink:"/notes/os/windows/version"}},w={},m=[{value:"sip protocol registry",id:"sip-protocol-registry",level:2}],O={toc:m};function g(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},O),p),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"windows-registry"}),"Windows Registry"),(0,n.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",u({},{id:"sip-protocol-registry"}),"sip protocol registry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206 sip \u4f1a\u81ea\u884c\u6ce8\u518c\uff0c\u4f46\u53ef\u80fd\u9700\u8981\u521d\u6b21\u542f\u52a8\u4f7f\u7528\u7ba1\u7406\u5458\u8eab\u4efd")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-reg"}),'Windows Registry Editor Version 5.00\n\n[HKEY_CLASSES_ROOT\\sip]\n@="URL:sip Protocol"\n"EditFlags"="02000000"\n"URL Protocol"=""\n\n[HKEY_CLASSES_ROOT\\sip\\DefaultIcon]\n@="\\"C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\CounterPath\\\\X-Lite\\\\Current\\\\X-Lite.exe\\",32512"\n\n[HKEY_CLASSES_ROOT\\sip\\shell]\n\n[HKEY_CLASSES_ROOT\\sip\\shell\\open]\n\n[HKEY_CLASSES_ROOT\\sip\\shell\\open\\command]\n@="\\"C:\\\\apps\\\\eyeBeam\\\\eyeBeam.exe\\" -dial=\\"%1\\""\n')))}g.isMDXComponent=!0}}]);