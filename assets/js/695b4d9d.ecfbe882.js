"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60252],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,k=s["".concat(o,".").concat(f)]||s[f]||c[f]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},79956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&m(e,r,t[r]);return e};const s={title:"MiniQuery"},f="MiniQuery",k={unversionedId:"languages/miniquery",id:"languages/miniquery",title:"MiniQuery",description:"SQL Where like safe filter expression for ORM.",source:"@site/../notes/languages/miniquery.md",sourceDirName:"languages",slug:"/languages/miniquery",permalink:"/notes/languages/miniquery",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/miniquery.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1661163540,formattedLastUpdatedAt:"Aug 22, 2022",frontMatter:{title:"MiniQuery"},sidebar:"docs",previous:{title:"luau",permalink:"/notes/languages/lua/luau"},next:{title:"Object C",permalink:"/notes/languages/objc"}},y={},g=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3}],d={toc:g};function N(e){var t,r=e,{components:a}=r,m=((e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},d),m),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"miniquery"}),"MiniQuery"),(0,n.kt)("p",null,"SQL Where like ",(0,n.kt)("strong",{parentName:"p"},"safe")," filter expression for ORM."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u76ee\u6807")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c SQL \u7684 Where \u8bed\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u6210\u672c\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u53cb\u597d\u76f4\u89c2 - \u5bf9\u6bd4 GraphQL \u548c Mongo"))),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5b89\u5168\u7684\u67e5\u8be2 - \u62bd\u53d6\u503c\u4f5c\u4e3a binding \u53c2\u6570\uff0c\u907f\u514d\u6ce8\u5165"),(0,n.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u6cdb\u5316\u5173\u8054\u5173\u7cfb\u7684\u5904\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},'profile.name = "wener"'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"profile \u53ef\u80fd\u4e3a\u5916\u90e8\u5173\u8054\u53ef\u80fd\u4e3a JSON \u5b57\u6bb5")))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Raodmap")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5229\u7528 schema \u9884\u5148\u6821\u9a8c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},'profile.name = "wener"'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b9e\u73b0\u652f\u6301\u83b7\u53d6 Scheme\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u67e5\u8be2\u4e4b\u524d\u63d0\u524d\u68c0\u6d4b\u662f\u5426\u53ef\u4ee5\u6267\u884c"))))),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ACL \u63a7\u5236",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540c schema \u6821\u9a8c\u903b\u8f91\uff0c\u4f46\u5229\u7528 acl \u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53ef\u7528\u67e5\u8be2 - \u4f8b\u5982: \u9650\u5236\u8017\u65f6\u9ad8\u7684\u67e5\u8be2")))),(0,n.kt)("h3",c({},{id:"\u5b9e\u73b0"}),"\u5b9e\u73b0"),(0,n.kt)("p",null,"miniquery \u8bed\u6cd5\u5c42\u677e\u6563\uff0c\u5177\u4f53\u5b9e\u73b0\u4f1a\u52a0\u9650\u5236\uff0c\u4f8b\u5982 column \u5fc5\u987b\u5728\u5de6\u8fb9\uff0c\u54ea\u4e9b\u51fd\u6570\u53ef\u4ee5\u7528\u7b49\u3002\n\u6839\u636e\u5b9e\u73b0\u7684\u5e93\u4e0d\u540c\uff0c\u4e0d\u4e00\u5b9a\u6240\u6709\u903b\u8f91\u90fd\u80fd\u66b4\u9732\u51fa\u6765\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"java-miniquery",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"nutz - \u6700\u65e9\u5b9e\u73b0\uff0c\u7528\u4e8e\u5185\u90e8\u7cfb\u7edf"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/wenerme/go-miniquery"}),"go-miniquery"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gorm"),(0,n.kt)("li",{parentName:"ul"},"ent - entsql, entql"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/wenerme/js-miniquery"}),"js-miniquery"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sequelize"),(0,n.kt)("li",{parentName:"ul"},"NPM ohm-grammar-miniquery")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://google.aip.dev/160"}),"AIP-160")," filter",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u5fc5\u987b\u5728\u5de6\u8fb9")))))))}N.isMDXComponent=!0}}]);