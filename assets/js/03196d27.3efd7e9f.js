"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7558],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?t.createElement(v,o(o({ref:r},u),{},{components:n})):t.createElement(v,o({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27816:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var t=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Apollo Federation"},p=void 0,s={unversionedId:"service/api/apollo-federation",id:"service/api/apollo-federation",title:"Apollo Federation",description:"- Apollo Federation \u5b9a\u4e49\u4e86\u5982\u4f55\u8054\u5408\u591a\u4e2a GraphQL \u670d\u52a1\u7684\u89c4\u5219",source:"@site/notes/service/api/apollo-federation.md",sourceDirName:"service/api",slug:"/service/api/apollo-federation",permalink:"/notes/service/api/apollo-federation",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/apollo-federation.md",tags:[],version:"current",frontMatter:{title:"Apollo Federation"},sidebar:"docs",previous:{title:"API Design",permalink:"/notes/service/api/api-design"},next:{title:"bramble",permalink:"/notes/service/api/bramble"}},u={},c=[{value:"Spec",id:"spec",level:2},{value:"Subgraph",id:"subgraph",level:2},{value:"Rover",id:"rover",level:2},{value:"Apollo Gateway",id:"apollo-gateway",level:2}],d={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apollo Federation \u5b9a\u4e49\u4e86\u5982\u4f55\u8054\u5408\u591a\u4e2a GraphQL \u670d\u52a1\u7684\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Federation \u9700\u8981 GraphQL \u670d\u52a1\u652f\u6301\uff0c\u8fd8\u9700\u8981\u8fd0\u884c\u989d\u5916\u7684 Gateway"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/federation/other-servers/"},"\u652f\u6301\u7684\u5e93"))))),(0,l.kt)("h2",{id:"spec"},"Spec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/federation/federation-spec/"},"Apollo Federation specification"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gql"},"# \u4f9d\u8d56\u7684\u5916\u90e8\u670d\u52a1\u7c7b\u578b - @external\nscalar _Any\nscalar _FieldSet\n\n# \u6240\u6709\u4f7f\u7528 @key \u7684\u7c7b\u578b\u96c6\u5408\nunion _Entity\n\ntype _Service {\n  # \u670d\u52a1\u5bf9\u5e94\u7684 schema\n  sdl: String\n}\n\nextend type Query {\n  # \u57fa\u4e8e\u5916\u90e8\u7c7b\u578b\u521b\u5efa\u6269\u5c55\u7c7b\u578b\n  _entities(representations: [_Any!]!): [_Entity]!\n  # \u670d\u52a1\u5b9e\u73b0\u7684 service\n  _service: _Service!\n}\n\ndirective @external on FIELD_DEFINITION\ndirective @requires(fields: _FieldSet!) on FIELD_DEFINITION\ndirective @provides(fields: _FieldSet!) on FIELD_DEFINITION\n# \u80fd\u591f\u67e5\u8be2\u5bf9\u8c61\u7684\u552f\u4e00\u4e3b\u952e - \u652f\u6301\u591a\u4e2a\u7ec4\u5408\ndirective @key(fields: _FieldSet!) repeatable on OBJECT | INTERFACE\n\n# \u7528\u4e8e\u4e0d\u652f\u6301 extend \u7684\u5b9e\u73b0 - \u4f8b\u5982 graphql-java\ndirective @extends on OBJECT | INTERFACE\n")),(0,l.kt)("h2",{id:"subgraph"},"Subgraph"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  me: User\n}\n\ntype User @key(fields: "id") {\n  id: ID!\n  username: String\n\n  # \u5f53\u591a\u4e2a subgraph \u90fd\u53ef\u4ee5\u89e3\u6790\u90e8\u5206\u5b57\u6bb5\u65f6\u4f7f\u7528 @provides\n  # @provides \u7684\u5b57\u6bb5\u4e5f\u90fd\u662f @external \u7684\n  department: Department @provides(fields: "id name")\n}\n\n# \u6269\u5c55\u5916\u90e8 type\nextend type Department @key(fields: "id") {\n  id: ID! @external\n  name: String! @external\n  leaderUser: User\n\n  parent: Department @external\n  userCount: Int @external\n  # \u5b57\u6bb5\u4f9d\u8d56\u5173\u7cfb\n  userWithoutLeaderCount: Int @requires(fields: "userCount parent { userCount }")\n}\n\n# \u89c4\u8303\u8981\u6c42\nunion _Entity = User\ntype Entity {\n  findUserByID(id: ID!): User!\n}\n\ntype _Service {\n  sdl: String\n}\nextend type Query {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service!\n}\n')),(0,l.kt)("h2",{id:"rover"},"Rover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# npm install -g @apollo/rover\n# macOS\nbrew install rover\n\nrover subgraph introspect https://rover.apollo.dev/quickstart/products/graphql > products.graphql\nrover subgraph introspect https://rover.apollo.dev/quickstart/reviews/graphql > reviews.graphql\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="supergraph-config.yaml"',title:'"supergraph-config.yaml"'},"subgraphs:\n  products:\n    routing_url: https://rover.apollo.dev/quickstart/products/graphql\n    schema:\n      file: ./products.graphql\n  reviews:\n    routing_url: https://rover.apollo.dev/quickstart/reviews/graphql\n    schema:\n      file: ./reviews.graphql\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7ec4\u5408\u751f\u6210 supergraph\nrover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql\n")),(0,l.kt)("h2",{id:"apollo-gateway"},"Apollo Gateway"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { ApolloServer } = require('apollo-server');\nconst { ApolloGateway } = require('@apollo/gateway');\nconst { readFileSync } = require('fs');\n\nconst supergraphSdl = readFileSync('./supergraph.graphql').toString();\n\nconst gateway = new ApolloGateway({\n  // \u672c\u5730 graphqls \u65b9\u5f0f\n  supergraphSdl,\n  // \u5916\u90e8\u670d\u52a1\u65b9\u5f0f\n  serviceList: [\n    // name \u4e0d\u91cd\u8981\uff0c\u53ea\u4f5c\u4e3a\u65e5\u5fd7\u8f93\u51fa\u76f8\u5173\n    { name: 'user', url: 'http://localhost:8081' },\n    { name: 'produce', url: 'http://localhost:8080' },\n  ],\n});\n\nconst server = new ApolloServer({\n  gateway,\n});\n\nserver.listen().then(({ url }) => {\n  console.log(`\ud83d\ude80 Server ready at ${url}`);\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4f7f\u7528 serviceList",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4ec5\u5e94\u7528\u4e8e\u5f00\u53d1\u9636\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u5408 graph \u53ef\u80fd\u5931\u8d25"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u591a\u4e2a gateway \u65f6\uff0c\u53ef\u80fd\u4e0d\u540c\u5b9e\u4f8b\u83b7\u53d6\u5230\u7684 graph \u4e0d\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u5f0f\u53ef\u80fd\u4f1a\u88ab\u5e9f\u5f03")))))}m.isMDXComponent=!0}}]);