(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(7),i=(n(0),n(557)),l={id:"prisma",title:"Prisma"},c={unversionedId:"web/framework/prisma",id:"web/framework/prisma",isDocsHomePage:!1,title:"Prisma",description:"Prisma",source:"@site/contents/notes/web/framework/prisma.md",slug:"/web/framework/prisma",permalink:"/notes/web/framework/prisma",version:"current",sidebar:"docs",previous:{title:"Riot",permalink:"/notes/web/framework/riot"},next:{title:"\u8bed\u8a00",permalink:"/notes/languages/languages"}},s=[{value:"Tips",id:"tips",children:[]},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[]},{value:"prisma.yml",id:"prismayml",children:[]},{value:"\u5bfc\u5165\u5bfc\u51fa",id:"\u5bfc\u5165\u5bfc\u51fa",children:[]},{value:"DSL",id:"dsl",children:[{value:"\u7b80\u5355\u6a21\u578b",id:"\u7b80\u5355\u6a21\u578b",children:[]}]}],p={rightToc:s};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"prisma"},"Prisma"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u751f\u6210\u7684\u5ba2\u6237\u7aef\u53ea\u80fd\u670d\u52a1\u7aef\u6267\u884c ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prisma/prisma/issues/3142"}),"#3142"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7aef\u53ea\u80fd\u901a\u8fc7 GraphQL \u4f7f\u7528"))))),Object(i.b)("li",{parentName:"ul"},"Prisma \u4ecb\u4e8e ORM \u548c CMS \u4e4b\u95f4 - \u5b9a\u4f4d\u7c7b\u4f3c\u4e8e RoR \u7684\u6570\u636e\u6a21\u5757"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7279\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 GraphQL \u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.prisma.io/features/databases"}),"\u652f\u6301\u591a\u6570\u636e\u5e93")," - PostgreSQL MySQL"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210\u5ba2\u6237\u7aef - TS JS GO",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u5b9e\u65f6\u8ba2\u9605"))),Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u6a21\u578b\u901a\u8fc7 DSL \u5b9a\u4e49 - \u652f\u6301\u81ea\u52a8\u8fc1\u79fb"))),Object(i.b)("li",{parentName:"ul"},"\u67b6\u6784: \u5e94\u7528 -> Prisma Client -> Prisma Server -> Database"),Object(i.b)("li",{parentName:"ul"},"\u73b0\u6709\u7684\u4e00\u4e9b\u95ee\u9898",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.reddit.com/r/graphql/comments/ah27k1/postgraphile_vs_hasura_vs_prisma_vs_appsync/"}),"Postgraphile vs Hasura vs Prisma vs AppSync experiences?")),Object(i.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u62bd\u8c61\u4e86 DB \u5c42 - \u56e0\u6b64\u4e0e\u5177\u4f53\u7684\u67d0\u4e2a DB \u7ed3\u5408\u7684\u6ca1\u90a3\u4e48\u597d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6bd4\u5982\u4e0e Postgre \u6ca1\u6709 Hasura \u7ed3\u5408\u7684\u597d - \u6027\u80fd\u548c\u529f\u80fd")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177\nnpm install -g prisma\n# \u5f15\u5bfc\u521d\u59cb\u5316\n# \u751f\u6210 datamodel.prisma docker-compose.yml prisma.yml\nprisma init my-web\n# \u542f\u52a8 prisma\ncd my-web\n# GQL\u63a7\u5236\u53f0 http://localhost:4466/\n# \u7ba1\u7406\u63a7\u5236\u53f0 http://localhost:4466/_admin\n# \u7ba1\u7406\u63a5\u53e3 http://localhost:4466/management\n# \u4f1a\u5728\u6570\u636e\u5e93\u521b\u5efa management \u5e93\u8fdb\u884c\u7ba1\u7406\ndocker-compose up\n# \u90e8\u7f72\u65b0\u7684\u6a21\u578b\nprisma deploy\n")),Object(i.b)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u901a\u8fc7\u6570\u636e\u5e93\u751f\u6210\u6a21\u578b\nprisma introspect\n")),Object(i.b)("h2",{id:"prismayml"},"prisma.yml"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.prisma.io/docs/prisma-cli-and-configuration/prisma-yml-5cy7/"}),"prisma.yml")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prisma/prisma-json-schema/blob/master/src/schema.json"}),"schema.json"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# prisma \u7684\u670d\u52a1\u7aef\u5730\u5740 - \u683c\u5f0f https|https://<\u5730\u5740>/<\u670d\u52a1>/<\u73af\u5883/stage>\n# \u9ed8\u8ba4\u670d\u52a1\u540d\u5b57\u4e3a default - \u7b49\u540c\u4e8e\u8def\u5f84 http://localhost:4466/default/default\n# http://localhost:4466/my-service - \u670d\u52a1\u540d\u5b57\u4e3a my-service\n# http://localhost:4466/my-service/dev - \u73af\u5883\u4e3a dev\nendpoint: http://localhost:4466\n# schema \u6587\u4ef6\n# \u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u6307\u5b9a\u591a\u4e2a\ndatamodel: datamodel.prisma\n# \u5bc6\u94a5\n# secret: mysecret42\n# \u652f\u6301\u4f7f\u7528\u73af\u5883\u53d8\u91cf\nsecret: ${env:PRISMA_SECRET}\n\n# \u751f\u6210\u914d\u7f6e\ngenerate:\n  # \u751f\u6210\u5668\n  # \u53ef\u9009\u7c7b\u578b javascript-client typescript-client flow-client go-client graphql-schema\n  - generator: typescript-client\n    output: ./generated/prisma-client/\n\n# \u4e8b\u4ef6\u94a9\u5b50\nhooks:\n  post-deploy:\n    - prisma generate\n\n# \u57fa\u7840\u6570\u636e\nseed:\n  # \u6267\u884c\u811a\u672c\u521b\u5efa\n  run: node data/seed.js\n  # \u5bfc\u5165\u5907\u4efd\u6570\u636e\u521b\u5efa\n  import: database/backup.zip\n\n# \u4efb\u610f\u53d8\u91cf\u5b9a\u4e49\n# \u901a\u8fc7 ${self:custom.datamodelPath} \u5f15\u7528\ncustom:\n  datamodelPath: myDatamodel\n")),Object(i.b)("h2",{id:"\u5bfc\u5165\u5bfc\u51fa"},"\u5bfc\u5165\u5bfc\u51fa"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5bfc\u5165\u63a5\u53e3 ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:4466/my-app/dev/import")),Object(i.b)("li",{parentName:"ul"},"\u5bfc\u51fa\u63a5\u53e3 ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:4466/my-app/dev/export"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u5bfc\u5165\ncurl \'__SERVICE_ENDPOINT__/import\' -H \'Content-Type: application/json\' -H \'Authorization: Bearer __JWT_AUTH_TOKEN__\' -d \'{"valueType":"__NDF_TYPE__","values": __DATA__ }\' -sSv\n\n# \u5bfc\u51fa\ncurl \'__SERVICE_ENDPOINT__/export\' -H \'Content-Type: application/json\' -H \'Authorization: Bearer __JWT_AUTH_TOKEN__\' -d \'{"fileType":"__NDF_TYPE__","cursor": {"table":__TABLE__,"row":__ROW__,"field":__FIELD__,"array":__ARRAY__}} }\' -sSv\n')),Object(i.b)("h2",{id:"dsl"},"DSL"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8bed\u6cd5\u7c7b\u4f3c\u4e8e GraphQL")),Object(i.b)("h3",{id:"\u7b80\u5355\u6a21\u578b"},"\u7b80\u5355\u6a21\u578b"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-prisma"}),'type User {\n  id: ID! @id\n  name: String!\n  // \u552f\u4e00\u7ea6\u675f\n  email: String! @unique\n  // \u4e00\u5bf9\u591a\n  addresses: [Address!]!\n  // \u9ed8\u8ba4\u503c\n  isAdmin: Boolean @default(value: "false")\n  role: UserRole @default(value: "USER")\n  \n  // \u4f1a\u521b\u5efa\u4e00\u4e2a\u4e2d\u95f4\u8868 _UserLikedPosts{A,B}\n  likedPost: [Post!]!  @relation(name: "UserLikedPosts")\n\n  // \u5143\u6570\u636e\u5b57\u6bb5\n  createdAt: DateTime! @createdAt\n  updatedAt: DateTime! @updatedAt\n  \n  // JSON \u5b57\u6bb5 - \u9ed8\u8ba4 256K\n  data: Json\n}\n\ntype Address {\n  id: ID! @id\n\n  raw: String\n  city: String\n  country: String\n  zip: String\n  // \u53cd\u5411\u5173\u8054\n  user: User @relation(link: INLINE)\n}\n\n// \u5982\u679c\u4e0d\u60f3\u4f7f\u7528\u521b\u5efa\u7684\u4e2d\u95f4\u8868\u53ef\u4ee5\u624b\u52a8\u6307\u5b9a\ntype UserLikedPosts @relationTable {\n  user: User!\n  post: Post!\n}\n\n// \u679a\u4e3e\nenum UserRole {\n  USER\n  ADMIN\n  VISITOR\n}\n')))}o.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);