"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32790],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return h}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const m={title:"URQL"},d="urql",k={unversionedId:"service/api/urql",id:"service/api/urql",title:"URQL",description:"- FormidableLabs/urql",source:"@site/../notes/service/api/urql.md",sourceDirName:"service/api",slug:"/service/api/urql",permalink:"/notes/service/api/urql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/urql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"URQL"},sidebar:"docs",previous:{title:"twirp",permalink:"/notes/service/api/twirp"},next:{title:"xds",permalink:"/notes/service/api/xds"}},g={},h=[{value:"Note",id:"note",level:2},{value:"@urql/exchange-graphcache",id:"urqlexchange-graphcache",level:2},{value:"relayPagination",id:"relaypagination",level:3},{value:"URQL vs Apollo",id:"urql-vs-apollo",level:2},{value:"production \u6784\u5efa\u540e urql \u8fd4\u56de null",id:"production-\u6784\u5efa\u540e-urql-\u8fd4\u56de-null",level:2},{value:"Cannot update a component while rendering a different component",id:"cannot-update-a-component-while-rendering-a-different-component",level:2}],N={toc:h};function f(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},N),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"urql"}),"urql"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/FormidableLabs/urql"}),"FormidableLabs/urql"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6d41\u5904\u7406\u5b9e\u73b0\u57fa\u4e8e ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/kitten/wonka"}),"kitten/wonka")))),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u5316\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"Schema \u611f\u77e5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542f\u540e\u652f\u6301\u90e8\u5206\u7ed3\u679c\u8fd4\u56de - \u8bf7\u6c42\u7684\u5b57\u6bb5\u672a\u88ab\u7f13\u5b58\u4f46\u662f\u662f nullable \u5219\u5148\u8fd4\u56de - \u56e0\u4e3a\u4e0d\u5f71\u54cd\u8bed\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u5207\u6362\u6570\u636e\u663e\u793a\u66f4\u987a\u7545"))),(0,a.kt)("li",{parentName:"ul"},"stale \u67e5\u8be2 - @urql/exchange-request-policy"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u6846\u67b6 - @urlql/core, urql -> react-urql, preact, next, vue, svelte")))),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"useQuery \u7684 context \u786e\u4fdd\u4e0d\u8981\u53d8 - useMemo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5426\u5219\u4f1a\u5bfc\u81f4\u91cd\u65b0\u8bf7\u6c42 - \u53ef\u80fd\u65e0\u9650\u5faa\u73af\u6e32\u67d3"))),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5168\u5c40 opt-in Suspense",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"createClient \u5f00\u542f suspense \u5219\u9ed8\u8ba4\u8ba4\u4e3a\u5728\u670d\u52a1\u7aef - \u6240\u6709\u67e5\u8be2\u5f00\u542f suspense"),(0,a.kt)("li",{parentName:"ul"},"useURQL \u7684 context \u53ef\u63a7\u5236\u5173\u95ed suspense"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u53ea\u5e0c\u671b\u5355\u6b21\u67e5\u8be2 suspense \u53ea\u80fd\u5c01\u88c5\u73b0\u6709\u63a5\u53e3"))))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm add urql @urql/{core,devtools,exchange-graphcache,exchange-retry,exchange-multipart-fetch}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts",metastring:'title="\u6839\u636e\u540e\u7aef\u5b9e\u73b0\u9009\u62e9"',title:'"\u6839\u636e\u540e\u7aef\u5b9e\u73b0\u9009\u62e9"'}),"import { SubscriptionClient } from 'subscriptions-transport-ws';\nimport { createClient as createSubscriptionClient } from 'graphql-ws';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"type ExchangeIO = (Source<Operation>) => Source<OperationResult>;\ntype Exchange = ExchangeInput => ExchangeIO;\n")),(0,a.kt)("h2",s({},{id:"note"}),"Note"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6709 Document Caching - \u9002\u7528\u4e8e\u9ad8\u5ea6\u4f9d\u8d56\u9759\u6001\u6570\u636e\u7684\u7ad9\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58 key \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"hash(query,variables)")),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e mutation \u8fd4\u56de\u7c7b\u578b\u8fdb\u884c\u5931\u6548"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de\u7a7a list, \u5219\u4e0d\u4f1a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"__typename"),", \u6b64\u65f6\u65e0\u6cd5\u5931\u6548 - \u53ef\u5728\u4e0a\u4e0b\u6587\u6dfb\u52a0 additionalTypenames"))),(0,a.kt)("li",{parentName:"ul"},"exchange - \u6269\u5c55\u70b9 - \u9ed8\u8ba4 dedupExchange, cacheExchange, fetchExchange",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c apollo \u7684 link - \u4f46\u66f4\u901a\u7528")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u7b56\u7565")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"RequestPolicy"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cache-first"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 \u9ed8\u8ba4\u8fd4\u56de cache \u7ed3\u679c\uff0c\u4e0d\u5b58\u5728\u5219\u8bf7\u6c42")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cache-and-network"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5148\u8fd4\u56de cache \u7ed3\u679c\uff0c\u4e5f\u8bf7\u6c42\u66f4\u65b0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"network-only"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5ffd\u7565\u7f13\u5b58\uff0c\u76f4\u63a5\u53d1\u8d77\u8bf7\u6c42")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cache-only"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u7f13\u5b58\u6216\u8005 null")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"exchanges")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"exchange"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-graphcache"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u63d0\u4f9b\u6cdb\u5316\u56fe\u7f13\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-retry"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u91cd\u8bd5\u5931\u8d25\u8bf7\u6c42")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-execute"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u672c\u5730\u6a21\u62df\u6267\u884c\uff0c\u7528\u4e8e\u6d4b\u8bd5\u6216\u670d\u52a1\u7aef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-multipart-fetch"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u6587\u4ef6\u4e0a\u4f20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-persisted-fetch"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u57fa\u4e8e hash \u67e5\u8be2\uff0c\u907f\u514d\u53d1\u9001 query")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-request-policy"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u7f13\u5b58\u5931\u6548\u548c\u66f4\u65b0\uff0c\u5c06 cache-first \u548c cache-only \u4e0a\u5347\u4e3a cache-and-network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-auth"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u6dfb\u52a0\u6388\u6743\u4fe1\u606f\uff0c\u4f8b\u5982 JWT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"@urql/exchange-refocus"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u65f6\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42")))),(0,a.kt)("h2",s({},{id:"urqlexchange-graphcache"}),"@urql/exchange-graphcache"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Normalized Caching - \u6cdb\u5316\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58 key \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"__typename:id")),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u7f13\u5b58\u5b57\u6bb5\u548c\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6839\u636e\u7c7b\u578b\u81ea\u5b9a\u4e49\u7f13\u5b58 key"),(0,a.kt)("li",{parentName:"ul"},"\u65e0 key \u7684\u7ed3\u6784\u4f5c\u4e3a\u5d4c\u5165\u6570\u636e\u4f9d\u9644\u5728\u4e0a\u7ea7\u6587\u6863"))),(0,a.kt)("li",{parentName:"ul"},"Local Resolver - \u672c\u5730\u89e3\u6790",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b resolvers \u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u5904\u7406\u8bf7\u6c42")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"cache.readQuery({ query: Todos, variables: { from: 0, limit: 10 } });\n\n// readFragment \u53ea\u652f\u6301 DocumentNodes\ncache.readFragment(\n  gql`\n    fragment _ on Todo {\n      id\n      text\n    }\n  `,\n  { id: 1 },\n);\n\n// \u68c0\u6d4b\u6240\u6709\u5b57\u6bb5\ncache.inspectFields({\n  __typename: 'Todo',\n  id: args.id,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"// \u57fa\u4e8e offset \u548c limit \u5206\u9875\nimport { simplePagination } from '@urql/exchange-graphcache/extras';\n//\nimport { relayPagination } from '@urql/exchange-graphcache/extras';\n\ncacheExchange({\n  keys: {\n    // \u81ea\u5b9a\u4e49 key\n    Item: (data) => data.uuid,\n    // \u663e\u6027\u79fb\u9664 key\n    Image: () => null,\n  },\n  // \u672c\u5730 resolve\n  // \u9002\u7528\u4e8e\u8f6c\u6362\u5b57\u6bb5\u7c7b\u578b\uff0c\u6a21\u4eff\u670d\u52a1\u7aef\u8bf7\u6c42\uff0c\u51cf\u5c11\u5b9e\u9645\u8bf7\u6c42\n  resolvers: {\n    // \u7c7b\u578b\n    Query: {\n      // \u96c6\u6210\u5206\u9875\u80fd\u529b\n      // mergeMode=inwards\n      todos: relayPagination(),\n\n      // { todo(id: 1) { id } } \u8bfb\u53d6 { todos { id } } \u7684\u7f13\u5b58\n      todo(parent, args, cache, info) {\n        // \u7b49\u540c\u4e8e\u8fd4\u56de\u7f13\u5b58 key\n        // cache.keyOfEntity({ __typename: 'Todo', id: args.id }),\n        return { __typename: 'Todo', id: args.id };\n      },\n    },\n    Todo: {\n      // \u8f6c\u6362\u5b57\u6bb5\u7c7b\u578b\n      updatedAt: (parent, args, cache, info) => {\n        // \u4e5f\u53ef\u4ee5\u8bbf\u95ee\u5f53\u524d\u5bf9\u8c61\u4e0a\u6570\u636e - cache.resolve(info.parentKey)\n        // parent.updatedAt || cache.resolve(parent, \"createdAt\")\n        // new Date(cache.resolve(parent, \"updatedAt\")),\n        return new Date(parent[info.fieldName]);\n      },\n    },\n  },\n    // \u624b\u52a8\u66f4\u65b0\n  updates: {\n    Mutation: {\n      // add \u8fc7\u540e\u5c06\u8fd4\u56de\u7ed3\u679c\u6dfb\u52a0\u5230 \u67e5\u8be2\u5217\u8868\n      addTodo(result, args, cache, info) {\n        const query = gql`\n          {\n            todos {\n              id\n            }\n          }\n        `;\n        cache.updateQuery({ query }, (data) => {\n          data.todos.push(result.addTodo);\n          return data;\n        });\n      },\n\n      // \u79fb\u9664 todo \u540e\u66f4\u65b0\u53d7\u5f71\u54cd\u7684 list \u67e5\u8be2\n      removeTodo(_result, args, cache, _info) {\n        const TodoList = gql`\n          query (skip: $skip) {\n            todos(skip: $skip) { id }\n          }\n        `;\n\n        const fields = cache.inspectFields('Query')\n          .filter(field => field.fieldName === 'todos')\n          .forEach(field => {\n            cache.updateQuery(\n              {\n                query: TodoList,\n                variables: { skip: field.arguments.skip },\n              },\n              data => {\n                data.todos = data.todos.filter(todo => todo.id !== args.id);\n                return data;\n              }\n            });\n          });\n      },\n    },\n  },\n  // \u4e50\u89c2\u66f4\u65b0 - \u6a21\u4eff\u670d\u52a1\u7aef\u66f4\u65b0\u884c\u4e3a\n  // \u5f53\u670d\u52a1\u7aef\u8fd4\u56de\u540e\u66f4\u65b0\u4f1a\u4e22\u5f03\n  optimistic: {\n    favoriteTodo: (variables, cache, info) => ({\n      __typename: 'Todo',\n      id: variables.id,\n      favorite: true,\n    }),\n  },\n});\n")),(0,a.kt)("h3",s({},{id:"relaypagination"}),"relayPagination"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolver"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e relay \u7684 connection \u8fdb\u884c\u5206\u9875\u6570\u636e\u5408\u5e76",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 first+last"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 before, after"))),(0,a.kt)("li",{parentName:"ul"},"mergeMode - \u5408\u5e76\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"inwards - \u9ed8\u8ba4 - \u5f80\u540e\u5408\u5e76"),(0,a.kt)("li",{parentName:"ul"},"outwards - \u5f80\u524d\u5408\u5e76"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u53d8\u5316\u4f1a\u91cd\u7f6e - \u5ffd\u7565 first, last, after, before")),(0,a.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",s({},{id:"urql-vs-apollo"}),"URQL vs Apollo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URLQ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5c0f\u66f4\u7075\u6d3b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u63d0\u4f9b schema \u5b9e\u73b0\u66f4\u591a\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 offline"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 window focus \u89e6\u53d1\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u4e3a\u53ef\u9009\u7ec4\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://formidable.com/open-source/urql/docs/comparison/"}),"vs Apollo"))),(0,a.kt)("h2",s({},{id:"production-\u6784\u5efa\u540e-urql-\u8fd4\u56de-null"}),"production \u6784\u5efa\u540e urql \u8fd4\u56de null"),(0,a.kt)("p",null,"\u8d77\u56e0\u662f gqlgen \u4e0d\u652f\u6301 fragment \u91cc\u5305\u542b alias\uff0c\u4e0d\u4f1a\u8fd4\u56de\u5b57\u6bb5\uff0curql \u68c0\u6d4b\u5c11\u5b57\u6bb5\u8ba4\u4e3a cache miss \u8fd4\u56de null\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/99designs/gqlgen/issues/1271"}),"99designs/gqlgen#1271")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/FormidableLabs/urql/issues/1557"}),"FormidableLabs/urql#1557"))),(0,a.kt)("h2",s({},{id:"cannot-update-a-component-while-rendering-a-different-component"}),"Cannot update a component while rendering a different component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/FormidableLabs/urql/issues/1382#issuecomment-778112684"}),"https://github.com/FormidableLabs/urql/issues/1382#issuecomment-778112684"))))}f.isMDXComponent=!0}}]);