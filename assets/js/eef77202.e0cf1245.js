"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70478],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return w}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),w=o,f=d["".concat(c,".").concat(w)]||d[w]||u[w]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return w},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(96600),o=n(27279),i=(n(59496),n(49613)),s=["components"],a={title:"Windows Registry"},c="Windows Registry",p={unversionedId:"os/windows/windows-registry",id:"os/windows/windows-registry",title:"Windows Registry",description:"sip protocol registry",source:"@site/../notes/os/windows/windows-registry.md",sourceDirName:"os/windows",slug:"/os/windows/windows-registry",permalink:"/notes/os/windows/windows-registry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/windows/windows-registry.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Windows Registry"},sidebar:"docs",previous:{title:"Windows Policy",permalink:"/notes/os/windows/windows-policy"},next:{title:"Windows XP",permalink:"/notes/os/windows/windows-xp"}},l={},u=[{value:"sip protocol registry",id:"sip-protocol-registry",level:2}],d={toc:u};function w(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"windows-registry"},"Windows Registry"),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"sip-protocol-registry"},"sip protocol registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206 sip \u4f1a\u81ea\u884c\u6ce8\u518c\uff0c\u4f46\u53ef\u80fd\u9700\u8981\u521d\u6b21\u542f\u52a8\u4f7f\u7528\u7ba1\u7406\u5458\u8eab\u4efd")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-reg"},'Windows Registry Editor Version 5.00\n\n[HKEY_CLASSES_ROOT\\sip]\n@="URL:sip Protocol"\n"EditFlags"="02000000"\n"URL Protocol"=""\n\n[HKEY_CLASSES_ROOT\\sip\\DefaultIcon]\n@="\\"C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\CounterPath\\\\X-Lite\\\\Current\\\\X-Lite.exe\\",32512"\n\n[HKEY_CLASSES_ROOT\\sip\\shell]\n\n[HKEY_CLASSES_ROOT\\sip\\shell\\open]\n\n[HKEY_CLASSES_ROOT\\sip\\shell\\open\\command]\n@="\\"C:\\\\apps\\\\eyeBeam\\\\eyeBeam.exe\\" -dial=\\"%1\\""\n')))}w.isMDXComponent=!0}}]);