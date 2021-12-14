"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15112],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),h=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=h(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),s=h(a),c=l,g=s["".concat(o,".").concat(c)]||s[c]||u[c]||p;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,i=new Array(p);i[0]=s;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:l,i[1]=n;for(var h=2;h<p;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},92204:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return o},metadata:function(){return h},toc:function(){return m},default:function(){return s}});var r=a(87462),l=a(63366),p=(a(67294),a(3905)),i=["components"],n={title:"GraphQL Awesome",tags:["Awesome"]},o=void 0,h={unversionedId:"service/api/graphql-awesome",id:"service/api/graphql-awesome",isDocsHomePage:!1,title:"GraphQL Awesome",description:"\u5b66\u4e60",source:"@site/notes/service/api/graphql-awesome.md",sourceDirName:"service/api",slug:"/service/api/graphql-awesome",permalink:"/notes/service/api/graphql-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/graphql-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"GraphQL Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"GraphQL",permalink:"/notes/service/api/graphql"},next:{title:"graphql-code-generator",permalink:"/notes/service/api/graphql-code-generator"}},m=[{value:"\u5b66\u4e60",id:"\u5b66\u4e60",children:[]},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",children:[]},{value:"Gateway",id:"gateway",children:[]},{value:"Library",id:"library",children:[]},{value:"Server",id:"server",children:[]},{value:"Tool",id:"tool",children:[]},{value:"Client",id:"client",children:[]},{value:"Public GraphQL",id:"public-graphql",children:[{value:"GitLab",id:"gitlab",children:[]},{value:"Github",id:"github",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],u={toc:m};function s(e){var t=e.components,a=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u5b66\u4e60"},"\u5b66\u4e60"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://spec.graphql.org/October2021/"},"https://spec.graphql.org/October2021/")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://engineering.fb.com/2013/06/25/core-data/tao-the-power-of-the-graph/"},"TAO: The power of the graph")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/howtographql/howtographql"},"howtographql"))),(0,p.kt)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://graphql.org/learn/best-practices"},"GraphQL \u6700\u4f73\u5b9e\u8df5"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},"\u901a\u8fc7 HTTP \u63d0\u4f9b\u670d\u52a1"),(0,p.kt)("li",{parentName:"ol"},"JSON+Gzip \u8fd4\u56de"),(0,p.kt)("li",{parentName:"ol"},"\u5bf9\u63a5\u53e3\u8fdb\u884c\u7248\u672c\u63a7\u5236 - \u5229\u7528 deprecated \u548c \u989d\u5916\u5b57\u6bb5\u80fd"),(0,p.kt)("li",{parentName:"ol"},"\u5b57\u6bb5\u9ed8\u8ba4 null - \u5229\u7528 \u975e null \u8bbe\u8ba1\u66f4\u597d\u7684\u63a5\u53e3"),(0,p.kt)("li",{parentName:"ol"},"\u5206\u9875\u4f7f\u7528 Connection - \u901a\u8fc7 first, last, before, after \u5b9e\u73b0\u57fa\u4e8e cursor \u5206\u9875"),(0,p.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u6279\u5904\u7406\u548c\u7f13\u5b58 - \u907f\u514d N+1 \u95ee\u9898 - \u5229\u7528 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"graphql/dataloader")," \u5904\u7406"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://principledgraphql.com"},"Principled GraphQL"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},"One Graph"),(0,p.kt)("li",{parentName:"ol"},"Federated Implementation"),(0,p.kt)("li",{parentName:"ol"},"Track the Schema in a Registry"),(0,p.kt)("li",{parentName:"ol"},"Abstract, Demand-Oriented Schema"),(0,p.kt)("li",{parentName:"ol"},"Use an Agile Approach to Schema Development"),(0,p.kt)("li",{parentName:"ol"},"Iteratively Improve Performance"),(0,p.kt)("li",{parentName:"ol"},"Use Graph Metadata to Empower Developers"),(0,p.kt)("li",{parentName:"ol"},"Access and Demand Control"),(0,p.kt)("li",{parentName:"ol"},"Structured Logging"),(0,p.kt)("li",{parentName:"ol"},"Separate the GraphQL Layer from the Service Layer"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/development/api_graphql_styleguide.html"},"Gitlab GraphQL API \u89c4\u8303\u6587\u6863"))),(0,p.kt)("h2",{id:"gateway"},"Gateway"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"apollo gateway",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u914d\u5408 Apollo Studio \u4f53\u9a8c\u4f1a\u5f88\u597d - \u4f46\u662f\u4e00\u822c\u4e0d\u4f1a\u4f7f\u7528 Apollo Studio"),(0,p.kt)("li",{parentName:"ul"},"federation \u529f\u80fd\u5f3a",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u4f46\u63a8\u8350\u4f7f\u7528\u9884\u5148\u751f\u6210\u7684 schema"),(0,p.kt)("li",{parentName:"ul"},"\u903b\u8f91\u76f8\u5bf9\u590d\u6742"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/movio/bramble"},"movio/bramble"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Golang"),(0,p.kt)("li",{parentName:"ul"},"\u6bd4 apollo \u7b80\u5355\u4f46\u529f\u80fd\u66f4\u5f31"),(0,p.kt)("li",{parentName:"ul"},"\u57fa\u4e8e service \u5408\u6210 - \u652f\u6301\u90e8\u5206\u7b80\u5355 directive"),(0,p.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 subscriptions"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://movio.co/blog/building-a-new-api-platform-for-movio/"},"Introducing Bramble: A Federated GraphQL Gateway Implemented In Go")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/nautilus/gateway"},"nautilus/gateway"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,p.kt)("li",{parentName:"ul"},"Introspect schema\uff0c\u81ea\u52a8\u5408\u5e76 - \u4e0d\u9700\u8981 directive"),(0,p.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 subscriptions"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://itnext.io/a-guide-to-graphql-schema-federation-part-1-995b639ac035"},"A Guide to GraphQL Schema Federation, Part 1"))))),(0,p.kt)("h2",{id:"library"},"Library"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/APIs-guru/graphql-faker"},"APIs-guru/graphql-faker"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"mock graphql"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graphql-go/graphql"},"graphql-go/graphql"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c graphql-js \u63a5\u53e3"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen"},"99designs/gqlgen"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Golang, GraphQL Schema \u751f\u6210 Resolver"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graph-gophers/graphql-go"},"graph-gophers/graphql-go"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u53cd\u5c04\u81ea\u52a8\u7ed1\u5b9a"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graph-gophers/dataloader"},"graph-gophers/dataloader")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/Khan/genqlient"},"Khan/genqlient"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"type-safe Go GraphQL client"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/MichalLytek/type-graphql"},"MichalLytek/type-graphql")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/enisdenjo/graphql-ws"},"enisdenjo/graphql-ws"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md"},"PROTOCOL")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/1430"},"99designs/gqlgen#1430")," \u4e0d\u652f\u6301 graph-transport-ws"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/apollographql/subscriptions-transport-ws"},"apollographql/subscriptions-transport-ws"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u4e0d\u6d3b\u8dc3\uff0c\u6ca1\u600e\u4e48\u7ef4\u62a4"),(0,p.kt)("li",{parentName:"ul"},"\u63a8\u8350 graphql-ws"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/supabase/pg_graphql"},"supabase/pg_graphql")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/dosco/graphjin"},"dosco/graphjin"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"GraphQL to SQL compiler")))),(0,p.kt)("h2",{id:"server"},"Server"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Server, Federation, Gateway, Adapter")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/movio/bramble"},"movio/bramble"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u53d7 nautilus \u542f\u53d1"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/nautilus/gateway"},"nautilus/gateway"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u6d3b\u8dc3"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/urigo/graphql-mesh"},"urigo/graphql-mesh"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"GraphQL Adapter"),(0,p.kt)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 GraphQL, JSON Schema, gRPC, Swagger, OpenAPI, SOAP, Postgres, Mongo, OData, Thrift, SQLite, MySQL, Neo4j"),(0,p.kt)("li",{parentName:"ul"},"REST,DB,RPC \u6620\u5c04\u4e3a GraphQL"),(0,p.kt)("li",{parentName:"ul"},"\u6536\u96c6 API \u63a5\u53e3\u89c4\u8303\u3001\u751f\u6210 SDK\u3001\u751f\u6210 GraphQL Schema\u3001\u751f\u6210\u63a5\u53e3\u6620\u5c04"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/ent/ent"},"ent/ent")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/federation/federation-spec/"},"Apollo Federation specification")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graphile/postgraphile"},"graphile/postgraphile")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine"},"hasura/graphql-engine")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/parse-community/parse-server"},"parse-community/parse-server")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/dgraph-io/dgraph"},"dgraph-io/dgraph")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/directus/directus"},"directus/directus")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/reactioncommerce/reaction"},"reactioncommerce/reaction")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/spree/spree"},"spree/spree")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/redwoodjs/redwood"},"redwoodjs/redwood")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/VulcanJS/Vulcan"},"VulcanJS/Vulcan")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/api-platform/api-platform"},"api-platform/api-platform")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/semi-technologies/weaviate"},"semi-technologies/weaviate")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/daptin/daptin"},"daptin/daptin"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Backend As A Service"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/dosco/graphjin"},"dosco/graphjin")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/keystonejs/keystone"},"keystonejs/keystone"))),(0,p.kt)("h2",{id:"tool"},"Tool"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/dotansimha/graphql-code-generator"},"dotansimha/graphql-code-generator"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u57fa\u4e8e GraphQL \u751f\u6210\u5404\u79cd\u5ba2\u6237\u7aef\u670d\u52a1\u7aef\u4ee3\u7801"),(0,p.kt)("li",{parentName:"ul"},"\u5bf9 TypeScript \u652f\u6301\u975e\u5e38\u597d"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/jensneuse/graphql-go-tools"},"jensneuse/graphql-go-tools"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 federation"),(0,p.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u5b9e\u73b0 graphql \u670d\u52a1\u5e94\u7528"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/anvilco/spectaql"},"anvilco/spectaql"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u6587\u6863\u751f\u6210"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/APIs-guru/graphql-voyager"},"APIs-guru/graphql-voyager")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphiql"},"graphql/graphiql")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/quicktype/quicktype"},"quicktype/quicktype")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graphql-editor/graphql-editor"},"graphql-editor/graphql-editor")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/graphql-editor/graphql-zeus"},"graphql-editor/graphql-zeus"))),(0,p.kt)("h2",{id:"client"},"Client"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"apollo"),(0,p.kt)("li",{parentName:"ul"},"urql"),(0,p.kt)("li",{parentName:"ul"},"graphql-request",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"fetch + gql"))),(0,p.kt)("li",{parentName:"ul"},"react-query+graphql-request")),(0,p.kt)("h2",{id:"public-graphql"},"Public GraphQL"),(0,p.kt)("h3",{id:"gitlab"},"GitLab"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://gitlab.com/-/graphql-explorer"},"GraphQL Explorer")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/graphql"},"\u6587\u6863")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/development/api_graphql_styleguide.html"},"GraphQL API \u89c4\u8303\u6587\u6863")),(0,p.kt)("li",{parentName:"ul"},"\u5168\u5c40 ID \u683c\u5f0f ",(0,p.kt)("inlineCode",{parentName:"li"},"gid://gitlab/MyObject/123")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/development/fe_guide/graphql.html"},"\u524d\u7aef GraphQL \u5f00\u53d1\u6587\u6863"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 schema\nbundle exec rake gitlab:graphql:schema:dump\n")),(0,p.kt)("h3",{id:"github"},"Github"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.github.com/public/schema.docs.graphql"},"schema.docs.graphql")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://developer.github.com/v4/explorer"},"GraphQL Explorer"))),(0,p.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/chentsulin/awesome-graphql"},"chentsulin/awesome-graphql")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/APIs-guru/graphql-apis"},"APIs-guru/graphql-apis"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u516c\u5171 GraphQL API \u5217\u8868")))))}s.isMDXComponent=!0}}]);