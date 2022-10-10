"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59375],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),y=a,m=f["".concat(l,".").concat(y)]||f[y]||p[y]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2632:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e};const f={title:"Security FAQ",tags:["FAQ"]},y="Security FAQ",m={unversionedId:"security/security-faq",id:"security/security-faq",title:"Security FAQ",description:"X.509 vs PEM",source:"@site/../notes/security/security-faq.md",sourceDirName:"security",slug:"/security/faq",permalink:"/notes/security/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/security-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634220239,formattedLastUpdatedAt:"Oct 14, 2021",frontMatter:{title:"Security FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Security Awesome",permalink:"/notes/security/awesome"},next:{title:"Security Glossary",permalink:"/notes/security/glossary"}},d={},b=[{value:"X.509 vs PEM",id:"x509-vs-pem",level:2}],v={toc:b};function O(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},v),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"security-faq"}),"Security FAQ"),(0,n.kt)("h2",p({},{id:"x509-vs-pem"}),"X.509 vs PEM"),(0,n.kt)("p",null,"\u90fd\u7528\u4e8e\u5bf9\u8bc1\u4e66\u8fdb\u884c\u7f16\u7801"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"X.509",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u5217\u5b89\u5168\u76f8\u5173\u6807\u51c6"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6709 X.509 object presentation \u4e0e PEM \u76f8\u5173"),(0,n.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u65f6\u57fa\u4e8e ASN.1 \u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u5206\u6790\u5185\u5bb9\u624d\u77e5\u9053\u7f16\u7801\u7684\u662f\u4ec0\u4e48"),(0,n.kt)("li",{parentName:"ul"},"bytes - \u9762\u5411\u673a\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7f00\u4e00\u822c\u4e3a .der"),(0,n.kt)("li",{parentName:"ul"},".cer \u548c .crt \u90fd\u662f ASN.1 \u7f16\u7801 - \u540e\u7f00\u7528\u4e8e\u6807\u8bc6\u4f5c\u7528\uff0c\u4fbf\u4e8e\u7cfb\u7edf\u533a\u5206"))),(0,n.kt)("li",{parentName:"ul"},"PEM - Privacy Enhanced Mail - RFC1421",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u989d\u5916\u5d4c\u5957\u5bf9\u8c61\u6807\u8bc6\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u672c\u683c\u5f0f - \u9762\u5411\u4eba"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7f00\u4e00\u822c\u4e3a .pem")))))}O.isMDXComponent=!0}}]);