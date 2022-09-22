"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94360],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52683:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e};const f={title:"NTLM"},m="NTLM",d={unversionedId:"os/windows/ntlm",id:"os/windows/ntlm",title:"NTLM",description:"- NTLM \u662f\u5f88\u8001\u7684\u6280\u672f",source:"@site/../notes/os/windows/ntlm.md",sourceDirName:"os/windows",slug:"/os/windows/ntlm",permalink:"/notes/os/windows/ntlm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/windows/ntlm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639029574,formattedLastUpdatedAt:"Dec 9, 2021",frontMatter:{title:"NTLM"},sidebar:"docs",previous:{title:"Nano Server",permalink:"/notes/os/windows/nano-server"},next:{title:"\u8fdc\u7a0b\u684c\u9762",permalink:"/notes/os/windows/windows-rdp"}},w={},y=[],b={toc:y};function O(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"ntlm"}),"NTLM"),(0,n.kt)("admonition",u({},{title:"\u4f7f\u7528 Kerberos",type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"NTLM \u662f\u5f88\u8001\u7684\u6280\u672f"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u7684 Windows \u9ed8\u8ba4 Kerberos\uff0c\u4f46 fallback \u4e3a NLTM"),(0,n.kt)("li",{parentName:"ul"},"Kerberos \u66f4\u5b89\u5168\u66f4\u901a\u7528"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NT LAN Manager"),(0,n.kt)("li",{parentName:"ul"},"wiikipedia ",(0,n.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/NT_LAN_Manager"}),"NTLM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/Azure/go-ntlmssp"}),"Azure/go-ntlmssp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.crowdstrike.com/cybersecurity-101/ntlm-windows-new-technology-lan-manager/"}),"NTLM EXPLAINED"))))}O.isMDXComponent=!0}}]);