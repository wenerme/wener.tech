"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83859],{38158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(96600),a=n(27279),l=(n(59496),n(3905)),i=["components"],u={title:"MiniQuery"},o=void 0,p={unversionedId:"languages/miniquery",id:"languages/miniquery",title:"MiniQuery",description:"SQL Where like safe filter expression for ORM.",source:"@site/notes/languages/miniquery.md",sourceDirName:"languages",slug:"/languages/miniquery",permalink:"/notes/languages/miniquery",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/miniquery.md",tags:[],version:"current",frontMatter:{title:"MiniQuery"},sidebar:"docs",previous:{title:"luau",permalink:"/notes/languages/lua/luau"},next:{title:"Object C",permalink:"/notes/languages/objc"}},m={},c=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3}],s={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"SQL Where like ",(0,l.kt)("strong",{parentName:"p"},"safe")," filter expression for ORM."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76ee\u6807")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c SQL \u7684 Where \u8bed\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u6210\u672c\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u53cb\u597d\u76f4\u89c2 - \u5bf9\u6bd4 GraphQL \u548c Mongo"))),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5b89\u5168\u7684\u67e5\u8be2 - \u62bd\u53d6\u503c\u4f5c\u4e3a binding \u53c2\u6570\uff0c\u907f\u514d\u6ce8\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u6cdb\u5316\u5173\u8054\u5173\u7cfb\u7684\u5904\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},'profile.name = "wener"'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"profile \u53ef\u80fd\u4e3a\u5916\u90e8\u5173\u8054\u53ef\u80fd\u4e3a JSON \u5b57\u6bb5")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raodmap")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528 schema \u9884\u5148\u6821\u9a8c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},'profile.name = "wener"'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b9e\u73b0\u652f\u6301\u83b7\u53d6 Scheme\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u67e5\u8be2\u4e4b\u524d\u63d0\u524d\u68c0\u6d4b\u662f\u5426\u53ef\u4ee5\u6267\u884c"))))),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ACL \u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540c schema \u6821\u9a8c\u903b\u8f91\uff0c\u4f46\u5229\u7528 acl \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53ef\u7528\u67e5\u8be2 - \u4f8b\u5982: \u9650\u5236\u8017\u65f6\u9ad8\u7684\u67e5\u8be2")))),(0,l.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,l.kt)("p",null,"miniquery \u8bed\u6cd5\u5c42\u677e\u6563\uff0c\u5177\u4f53\u5b9e\u73b0\u4f1a\u52a0\u9650\u5236\uff0c\u4f8b\u5982 column \u5fc5\u987b\u5728\u5de6\u8fb9\uff0c\u54ea\u4e9b\u51fd\u6570\u53ef\u4ee5\u7528\u7b49\u3002\n\u6839\u636e\u5b9e\u73b0\u7684\u5e93\u4e0d\u540c\uff0c\u4e0d\u4e00\u5b9a\u6240\u6709\u903b\u8f91\u90fd\u80fd\u66b4\u9732\u51fa\u6765\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"java-miniquery",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nutz - \u6700\u65e9\u5b9e\u73b0\uff0c\u7528\u4e8e\u5185\u90e8\u7cfb\u7edf"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wenerme/go-miniquery"},"go-miniquery"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gorm"),(0,l.kt)("li",{parentName:"ul"},"ent - entsql, entql"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wenerme/js-miniquery"},"js-miniquery"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sequelize"),(0,l.kt)("li",{parentName:"ul"},"NPM ohm-grammar-miniquery")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://google.aip.dev/160"},"AIP-160")," filter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u5fc5\u987b\u5728\u5de6\u8fb9")))))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,k=s["".concat(o,".").concat(f)]||s[f]||m[f]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);