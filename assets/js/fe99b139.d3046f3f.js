"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27155],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25263:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e};const m={title:"Kerberos FAQ",tags:["FAQ"]},f="Kerberos FAQ",b={unversionedId:"service/auth/kerberos/kerberos-faq",id:"service/auth/kerberos/kerberos-faq",title:"Kerberos FAQ",description:"Cannot set GSSAPI authentication names, aborting",source:"@site/../notes/service/auth/kerberos/kerberos-faq.md",sourceDirName:"service/auth/kerberos",slug:"/service/auth/kerberos/faq",permalink:"/notes/service/auth/kerberos/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/kerberos/kerberos-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639029574,formattedLastUpdatedAt:"Dec 9, 2021",frontMatter:{title:"Kerberos FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Kerberos Awesome",permalink:"/notes/service/auth/kerberos/awesome"},next:{title:"Kerberos Glossary",permalink:"/notes/service/auth/kerberos/glossary"}},d={},k=[{value:"Cannot set GSSAPI authentication names, aborting",id:"cannot-set-gssapi-authentication-names-aborting",level:2},{value:"ntlm vs kerberos",id:"ntlm-vs-kerberos",level:2}],y={toc:k};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"kerberos-faq"}),"Kerberos FAQ"),(0,n.kt)("h2",p({},{id:"cannot-set-gssapi-authentication-names-aborting"}),"Cannot set GSSAPI authentication names, aborting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57df\u7f3a\u5c11 ",(0,n.kt)("inlineCode",{parentName:"li"},"kadmin/admin")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"kadmin/changepw")," principal")),(0,n.kt)("h2",p({},{id:"ntlm-vs-kerberos"}),"ntlm vs kerberos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NTLM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"three-way handshake"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"password hashing")))),(0,n.kt)("li",{parentName:"ul"},"Kerberos",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"two-part process",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ticket granting service / key distribution center."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"encryption")))),(0,n.kt)("li",{parentName:"ul"},"Kerberos NTLM as the default authentication tool on Windows 2000"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.crowdstrike.com/cybersecurity-101/ntlm-windows-new-technology-lan-manager/"}),"https://www.crowdstrike.com/cybersecurity-101/ntlm-windows-new-technology-lan-manager/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://answers.microsoft.com/en-us/msoffice/forum/all/ntlm-vs-kerberos/d8b139bf-6b5a-4a53-9a00-bb75d4e219eb"}),"NTLM vs KERBEROS"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"WWW-Authenticate: Negotiate\nWWW-Authenticate: NTLM\n")))}v.isMDXComponent=!0}}]);