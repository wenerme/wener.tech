"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28116],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const f={title:"Windows Policy"},m="Windows Policy",d={unversionedId:"os/windows/windows-policy",id:"os/windows/windows-policy",title:"Windows Policy",description:"- Computer Configuration",source:"@site/../notes/os/windows/windows-policy.md",sourceDirName:"os/windows",slug:"/os/windows/policy",permalink:"/notes/os/windows/policy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/windows/windows-policy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633940899,formattedLastUpdatedAt:"Oct 11, 2021",frontMatter:{title:"Windows Policy"},sidebar:"docs",previous:{title:"nvm",permalink:"/notes/os/windows/nvm"},next:{title:"Windows Registry",permalink:"/notes/os/windows/registry"}},w={},y=[],b={toc:y};function O(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),u),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"windows-policy"}),"Windows Policy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Computer Configuration"),(0,r.kt)("li",{parentName:"ul"},"User Configuration"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u7c7b\u5305\u542b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Software Settings"),(0,r.kt)("li",{parentName:"ul"},"Windows Settings"),(0,r.kt)("li",{parentName:"ul"},"Administrative Templates"))),(0,r.kt)("li",{parentName:"ul"},"C:\\Windows\\System32\\GroupPolicy\\",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User\\",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Scripts\\",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Logoff\\"),(0,r.kt)("li",{parentName:"ul"},"Logon\\"))))),(0,r.kt)("li",{parentName:"ul"},"Machine\\",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Scripts\\",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Shutdown\\"),(0,r.kt)("li",{parentName:"ul"},"Startup\\")))))))))}O.isMDXComponent=!0}}]);