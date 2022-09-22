"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37191],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=p(t),f=o,m=v["".concat(l,".").concat(f)]||v[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},17354:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return v},metadata:function(){return m},toc:function(){return b}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e};const v={title:"Service governance"},f="Service governance",m={unversionedId:"devops/service/service-governance",id:"devops/service/service-governance",title:"Service governance",description:"\u670d\u52a1\u6cbb\u7406\u662f\u6307\u8ba9\u4f01\u4e1a\u5185\u90e8\u670d\u52a1\u4e4b\u95f4\u8fbe\u6210\u534f\u4f5c\u80fd\u529b\u3002",source:"@site/../notes/devops/service/service-governance.md",sourceDirName:"devops/service",slug:"/devops/service/governance",permalink:"/notes/devops/service/governance",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/service/service-governance.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1654595483,formattedLastUpdatedAt:"Jun 7, 2022",frontMatter:{title:"Service governance"},sidebar:"docs",previous:{title:"Service Awesome",permalink:"/notes/devops/service/awesome"},next:{title:"Service Mesh",permalink:"/notes/devops/service/servicemesh"}},d={},b=[],y={toc:b};function g(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},y),u),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"service-governance"}),"Service governance"),(0,n.kt)("p",null,"\u670d\u52a1\u6cbb\u7406\u662f\u6307\u8ba9\u4f01\u4e1a\u5185\u90e8\u670d\u52a1\u4e4b\u95f4\u8fbe\u6210\u534f\u4f5c\u80fd\u529b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"governance as a service - \u6cbb\u7406\u5373\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a IT \u548c \u4e1a\u52a1\u90e8\u5206 \u4e4b\u95f4\u7684\u8c03\u548c"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u80fd\u529b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u6807\u51c6,\u7b56\u7565"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u4f73\u5b9e\u8df5"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0 - \u670d\u52a1\u4ed3\u5e93, \u670d\u52a1\u590d\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237/\u56e2\u961f \u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"API"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8\u7cfb\u7edf\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u76d1\u63a7,\u5ba1\u8ba1"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://medium.com/microservices-learning/introduction-to-microservices-governance-part-ii-5bdb4d2cfb5b"}),"Introduction to Microservices Governance \u2014 Part II"))))))}g.isMDXComponent=!0}}]);