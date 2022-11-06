"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80284],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,k=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},99939:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return N}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e};const s={title:"GraphQL FAQ",tags:["FAQ"]},f="GraphQL FAQ",k={unversionedId:"service/api/graphql-faq",id:"service/api/graphql-faq",title:"GraphQL FAQ",description:"Apollo vs Relay vs URQL",source:"@site/../notes/service/api/graphql-faq.md",sourceDirName:"service/api",slug:"/service/api/graphql-faq",permalink:"/notes/service/api/graphql-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/graphql-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"GraphQL FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"graphql-code-generator",permalink:"/notes/service/api/graphql-code-generator"},next:{title:"GraphQL",permalink:"/notes/service/api/graphql"}},d={},N=[{value:"Apollo vs Relay vs URQL",id:"apollo-vs-relay-vs-urql",level:2}],h={toc:N};function y(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),c),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"graphql-faq"}),"GraphQL FAQ"),(0,a.kt)("h2",m({},{id:"apollo-vs-relay-vs-urql"}),"Apollo vs Relay vs URQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/FormidableLabs/urql"}),"URQL"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bundle \u5c0f - 5.9kB + React = 7.1kB + cache 6.5kB = 13.6kB"),(0,a.kt)("li",{parentName:"ul"},"\u2705",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u79bb\u7ebf - \u672c\u5730 resolve\u3001\u672c\u5730\u6570\u636e\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"Focus Refetching"),(0,a.kt)("li",{parentName:"ul"},"@urql/exchange-multipart-fetch \u652f\u6301\u6587\u4ef6\u4e0a\u4f20"))),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4eba\u6570\u5c11 - \u793e\u533a\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"suspense ",(0,a.kt)("strong",{parentName:"li"},"\u5168\u5c40 opt-in")))),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udfe1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 wonka \u505a\u6d41\u5904\u7406 - \u5185\u90e8\u5f02\u5e38\u8c03\u8bd5\u5f88\u9ebb\u70e6"))),(0,a.kt)("li",{parentName:"ul"},"\ud83d\uded1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 cacheExchange \u4e4b\u5916\u64cd\u4f5c\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u672c\u5730\u72b6\u6001\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Batched Queries"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/relay"}),"Relay"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bundle - 27.7kB + React = 34.1kB"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9 Schema \u6709\u8981\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u2705",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Schema \u89c4\u8303"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u9875"),(0,a.kt)("li",{parentName:"ul"},"Defer & Stream"),(0,a.kt)("li",{parentName:"ul"},"Live Queries"))),(0,a.kt)("li",{parentName:"ul"},"\ud83d\uded1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u672c\u5730 Resolve"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8fd4\u56de\u90e8\u5206\u7ed3\u679c"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/apollographql/apollo-client"}),"Apollo"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bundle - 32.9kB"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"urql ",(0,a.kt)("a",m({parentName:"li"},{href:"https://formidable.com/open-source/urql/docs/comparison/"}),"vs Apollo vs Relay"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Symbol"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Good at")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\ud83d\udd36"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Not Good Enough")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\ud83d\udfe1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Bad at")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\ud83d\uded1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sorry for")))))}y.isMDXComponent=!0}}]);