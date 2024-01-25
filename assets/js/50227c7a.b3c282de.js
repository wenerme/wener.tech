/*! For license information please see 50227c7a.b3c282de.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98616],{66121:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(11527),a=r(47214);const o={title:"graphql-code-generator"},s="graphql-code-generator",l={id:"service/api/graphql/graphql-code-generator",title:"graphql-code-generator",description:"- dotansimha/graphql-code-generator \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/api/graphql/graphql-code-generator.md",sourceDirName:"service/api/graphql",slug:"/service/api/graphql/code-generator",permalink:"/notes/service/api/graphql/code-generator",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/graphql/graphql-code-generator.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"graphql-code-generator"},sidebar:"docs",previous:{title:"GraphQL Awesome",permalink:"/notes/service/api/graphql/awesome"},next:{title:"graphql config",permalink:"/notes/service/api/graphql/config"}},c={},i=[{value:"near",id:"near",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"graphql-code-generator",children:"graphql-code-generator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/dotansimha/graphql-code-generator",children:"dotansimha/graphql-code-generator"})," \u662f\u4ec0\u4e48\uff1f\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e GraphQL \u7684\u4ee3\u7801\u751f\u6210\u5de5\u5177"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u7684\u524d\u7aef\u6846\u67b6 urql, apollo, react-query, react, vue, svelte"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u7684\u540e\u7aef Java Resolver, Kotlin, Java, Java Apollo Android"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://the-guild.dev/graphql/codegen",children:"https://the-guild.dev/graphql/codegen"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u5b89\u88c5 cli - \u4f9d\u8d56\u63d2\u4ef6\u65e0\u6cd5 npx\nnpm add -D @graphql-codegen/cli @graphql-codegen/typescript\nnpx -y graphql-codegen init\n\nnpx -y graphql-codegen download-schema http://localhost:8080/graphql --output schema.json\n\n# \u5ba2\u6237\u7aef\u76f8\u5173\nnpm add -D @graphql-codegen/typescript-urql\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"overwrite: true\n# \u63a5\u53e3\nschema: 'http://localhost:8080/api/v1/graphql'\n# \u626b\u63cf\u6587\u4ef6\ndocuments: 'src/**/*.graphql'\ngenerates:\n  # \u751f\u6210\u5b9a\u4e49\n  src/generated/graphql.ts:\n    plugins:\n      - typescript:\n      # \u751f\u6210 query / mutation / subscription / fragment\n      - typescript-operations\n      # gql-tag \u7684 document\n      - typescript-document-nodes\n\n      # @graphql-codegen/typed-document-node\n      # https://github.com/dotansimha/graphql-typed-document-node\n      # \u7f16\u8bd1\u540e\u7684 Node - JSON \u5bf9\u8c61 - \u4e0d\u9700\u8981 gql-tag\n      # \u4f53\u79ef\u4f1a\u66f4\u5927 - \u4f46\u4e0d\u9700\u8981\u8fd0\u884c\u65f6 parse\n      - typed-document-node\n      # @graphql-codegen/typescript-urql\n      # URQL \u5ba2\u6237\u7aef - hook\n      - typescript-urql:\n          urqlImportFrom: ../client/urql\n          documentMode: external\n          # in same file - fake import\n          importDocumentNodeExternallyFrom: '../client/urql'\n    config:\n      # URQL \u751f\u6210 useQuery, useMutation\n      withHooks: true\n      useTypeImports: true\n  # \u751f\u6210 introspection\n  ./graphql.schema.json:\n    plugins:\n      - 'introspection'\n  # \u751f\u6210 URQL \u7528\u7684 Schema - \u76f8\u5bf9\u5c0f\u4e00\u70b9\n  src/generated/urql.schema.json:\n    plugins:\n      - 'urql-introspection'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"near",children:"near"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm add -D @graphql-codegen/near-operation-file-preset\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'generates:\nsrc/:\n  preset: near-operation-file\n  presetConfig:\n    extension: .generated.tsx\n    # baseTypesPath: types.ts\n    baseTypesPath: "~@src/generated/graphql"\n  plugins:\n    - typescript-operations\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},3354:(e,n,r)=>{var t=r(50959),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,o={},i=null,p=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:a,type:e,key:i,ref:p,props:o,_owner:l.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(50959);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);