"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71746],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=l(r),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return r?t.createElement(m,p(p({ref:n},s),{},{components:r})):t.createElement(m,p({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},14050:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return g}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={title:"graphql-code-generator"},c=void 0,l={unversionedId:"service/api/graphql-code-generator",id:"service/api/graphql-code-generator",title:"graphql-code-generator",description:"- dotansimha/graphql-code-generator \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/api/graphql-code-generator.md",sourceDirName:"service/api",slug:"/service/api/graphql-code-generator",permalink:"/notes/service/api/graphql-code-generator",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/graphql-code-generator.md",tags:[],version:"current",frontMatter:{title:"graphql-code-generator"},sidebar:"docs",previous:{title:"GraphQL Awesome",permalink:"/notes/service/api/graphql-awesome"},next:{title:"GraphQL FAQ",permalink:"/notes/service/api/graphql-faq"}},s=[{value:"near",id:"near",children:[],level:2}],u={toc:s};function g(e){var n=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dotansimha/graphql-code-generator"},"dotansimha/graphql-code-generator")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e GraphQL \u7684\u4ee3\u7801\u751f\u6210\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u524d\u7aef\u6846\u67b6 urql, apollo, react-query, react, vue, svelte"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u540e\u7aef Java Resolver, Kotlin, Java, Java Apollo Android")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 cli - \u4f9d\u8d56\u63d2\u4ef6\u65e0\u6cd5 npx\nnpm add -D @graphql-codegen/cli @graphql-codegen/typescript\nnpx -y graphql-codegen init\n\nnpx -y graphql-codegen download-schema http://localhost:8080/query --output schema.json\n\n# \u5ba2\u6237\u7aef\u76f8\u5173\nnpm add -D @graphql-codegen/typescript-urql\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"overwrite: true\n# \u63a5\u53e3\nschema: 'http://localhost:8080/api/v1/graphql'\n# \u626b\u63cf\u6587\u4ef6\ndocuments: 'src/**/*.graphql'\ngenerates:\n  # \u751f\u6210\u5b9a\u4e49\n  src/generated/graphql.ts:\n    plugins:\n      - typescript:\n      # \u751f\u6210 query / mutation / subscription / fragment\n      - typescript-operations\n      # gql-tag \u7684 document\n      - typescript-document-nodes\n\n      # @graphql-codegen/typed-document-node\n      # https://github.com/dotansimha/graphql-typed-document-node\n      # \u7f16\u8bd1\u540e\u7684 Node - JSON \u5bf9\u8c61 - \u4e0d\u9700\u8981 gql-tag\n      # \u4f53\u79ef\u4f1a\u66f4\u5927 - \u4f46\u4e0d\u9700\u8981\u8fd0\u884c\u65f6 parse\n      - typed-document-node\n      # @graphql-codegen/typescript-urql\n      # URQL \u5ba2\u6237\u7aef - hook\n      - typescript-urql:\n          urqlImportFrom: ../client/urql\n          documentMode: external\n          # in same file - fake import\n          importDocumentNodeExternallyFrom: '../client/urql'\n    config:\n      # URQL \u751f\u6210 useQuery, useMutation\n      withHooks: true\n      useTypeImports: true\n  # \u751f\u6210 introspection\n  ./graphql.schema.json:\n    plugins:\n      - 'introspection'\n  # \u751f\u6210 URQL \u7528\u7684 Schema - \u76f8\u5bf9\u5c0f\u4e00\u70b9\n  src/generated/urql.schema.json:\n    plugins:\n      - 'urql-introspection'\n")),(0,o.kt)("h2",{id:"near"},"near"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm add -D @graphql-codegen/near-operation-file-preset\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n plugins:\n   - typescript-operations\n")))}g.isMDXComponent=!0}}]);