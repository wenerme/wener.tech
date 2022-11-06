"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99531],{49613:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(t),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return t?n.createElement(m,p(p({ref:r},s),{},{components:t})):n.createElement(m,p({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23268:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return h}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e};const d={title:"graphql-code-generator"},g="graphql-code-generator",m={unversionedId:"service/api/graphql-code-generator",id:"service/api/graphql-code-generator",title:"graphql-code-generator",description:"- dotansimha/graphql-code-generator \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/api/graphql-code-generator.md",sourceDirName:"service/api",slug:"/service/api/graphql-code-generator",permalink:"/notes/service/api/graphql-code-generator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/graphql-code-generator.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"graphql-code-generator"},sidebar:"docs",previous:{title:"GraphQL Awesome",permalink:"/notes/service/api/graphql-awesome"},next:{title:"GraphQL FAQ",permalink:"/notes/service/api/graphql-faq"}},f={},h=[{value:"near",id:"near",level:2}],y={toc:h};function v(e){var r,t=e,{components:a}=t,s=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},y),s),o(r,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"graphql-code-generator"}),"graphql-code-generator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/dotansimha/graphql-code-generator"}),"dotansimha/graphql-code-generator")," \u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e GraphQL \u7684\u4ee3\u7801\u751f\u6210\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u524d\u7aef\u6846\u67b6 urql, apollo, react-query, react, vue, svelte"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u540e\u7aef Java Resolver, Kotlin, Java, Java Apollo Android")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 cli - \u4f9d\u8d56\u63d2\u4ef6\u65e0\u6cd5 npx\nnpm add -D @graphql-codegen/cli @graphql-codegen/typescript\nnpx -y graphql-codegen init\n\nnpx -y graphql-codegen download-schema http://localhost:8080/graphql --output schema.json\n\n# \u5ba2\u6237\u7aef\u76f8\u5173\nnpm add -D @graphql-codegen/typescript-urql\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"overwrite: true\n# \u63a5\u53e3\nschema: 'http://localhost:8080/api/v1/graphql'\n# \u626b\u63cf\u6587\u4ef6\ndocuments: 'src/**/*.graphql'\ngenerates:\n  # \u751f\u6210\u5b9a\u4e49\n  src/generated/graphql.ts:\n    plugins:\n      - typescript:\n      # \u751f\u6210 query / mutation / subscription / fragment\n      - typescript-operations\n      # gql-tag \u7684 document\n      - typescript-document-nodes\n\n      # @graphql-codegen/typed-document-node\n      # https://github.com/dotansimha/graphql-typed-document-node\n      # \u7f16\u8bd1\u540e\u7684 Node - JSON \u5bf9\u8c61 - \u4e0d\u9700\u8981 gql-tag\n      # \u4f53\u79ef\u4f1a\u66f4\u5927 - \u4f46\u4e0d\u9700\u8981\u8fd0\u884c\u65f6 parse\n      - typed-document-node\n      # @graphql-codegen/typescript-urql\n      # URQL \u5ba2\u6237\u7aef - hook\n      - typescript-urql:\n          urqlImportFrom: ../client/urql\n          documentMode: external\n          # in same file - fake import\n          importDocumentNodeExternallyFrom: '../client/urql'\n    config:\n      # URQL \u751f\u6210 useQuery, useMutation\n      withHooks: true\n      useTypeImports: true\n  # \u751f\u6210 introspection\n  ./graphql.schema.json:\n    plugins:\n      - 'introspection'\n  # \u751f\u6210 URQL \u7528\u7684 Schema - \u76f8\u5bf9\u5c0f\u4e00\u70b9\n  src/generated/urql.schema.json:\n    plugins:\n      - 'urql-introspection'\n")),(0,n.kt)("h2",u({},{id:"near"}),"near"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm add -D @graphql-codegen/near-operation-file-preset\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),'generates:\nsrc/:\n  preset: near-operation-file\n  presetConfig:\n    extension: .generated.tsx\n    # baseTypesPath: types.ts\n    baseTypesPath: "~@src/generated/graphql"\n  plugins:\n    - typescript-operations\n')))}v.isMDXComponent=!0}}]);