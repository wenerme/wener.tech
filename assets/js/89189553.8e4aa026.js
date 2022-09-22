"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51811],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,f=m["".concat(u,".").concat(g)]||m[g]||s[g]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"graphql"},u=void 0,p={unversionedId:"languages/go/lib/graphql",id:"languages/go/lib/graphql",title:"graphql",description:"graphql-go/graphql",source:"@site/../notes/languages/go/lib/graphql.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/graphql",permalink:"/notes/languages/go/lib/graphql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/graphql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"graphql"},sidebar:"docs",previous:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"},next:{title:"ko",permalink:"/notes/languages/go/lib/ko"}},c={},s=[{value:"graphql-go/graphql",id:"graphql-gographql",level:2}],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"graphql-gographql"},"graphql-go/graphql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/graphql-go/graphql"},"graphql-go/graphql")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Golang GraphQL \u89e3\u6790\u3001\u6267\u884c\u5e93"),(0,l.kt)("li",{parentName:"ul"},"Code First - \u5148 Go \u4ee3\u7801\uff0c\u7136\u540e\u751f\u6210 GraphQL"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 struct \u6784\u5efa\u5185\u5bb9\u751f\u6210 graphql schema"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 struct \u6784\u5efa resolver \u548c\u7c7b\u578b\u5b57\u6bb5\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u6784\u5efa\u8fc7\u7a0b\u548c\u6267\u884c\u8fc7\u7a0b\u53ef\u4ee5\u4f7f\u7528 thunk \u6a21\u5f0f - \u8fd4\u56de\u51fd\u6570\uff0c\u7528\u5230\u7684\u65f6\u5019\u518d\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5b58\u5728\u5faa\u73af\u4f9d\u8d56\uff0c\u5ef6\u8fdf\u6267\u884c\u4e5f\u80fd\u8fdb\u884c\u5176\u4ed6\u4f18\u5316"))),(0,l.kt)("li",{parentName:"ul"},"resolve - ",(0,l.kt)("inlineCode",{parentName:"li"},"func(p ResolveParams) (interface{}, error)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DefaultResolveFn - field \u9ed8\u8ba4 resolve",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 map \u548c struct - \u4e0d\u652f\u6301 Embed struct"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u6bd4\u8f83\u5ffd\u7565\u5927\u5c0f\u5199"))),(0,l.kt)("li",{parentName:"ul"},"source \u4e5f\u53ef\u4ee5\u5b9e\u73b0 FieldResolver - \u8fd9\u6837\u53ef\u4ee5\u4ea4\u7531\u8fd4\u56de\u7ed3\u679c\u5224\u65ad\u5982\u4f55 resolve"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u8fc7\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6536\u96c6\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"resolve \u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u503c - \u5904\u7406 promise\u3001\u5e8f\u5217\u5316 scalars\u3001\u6267\u884c\u4e0b\u7ea7\u5b57\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"thunk \u5ef6\u8fdf"),(0,l.kt)("li",{parentName:"ul"},"null \u68c0\u67e5"),(0,l.kt)("li",{parentName:"ul"},"list \u5c55\u5f00"),(0,l.kt)("li",{parentName:"ul"},"union \u548c interface \u5b9e\u9645\u7c7b\u578b\u68c0\u6d4b"),(0,l.kt)("li",{parentName:"ul"},"object \u5c55\u5f00 - \u5411\u4e0b\u6c42\u503c"))))))),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ParseDidStart(context.Context) (context.Context, ParseFinishFunc)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValidationDidStart(context.Context) (context.Context, ValidationFinishFunc)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExecutionDidStart(context.Context) (context.Context, ExecutionFinishFunc)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ResolveFieldDidStart(context.Context, *ResolveInfo) (context.Context, ResolveFieldFinishFunc)"))))))}g.isMDXComponent=!0}}]);