/*! For license information please see faa2a445.20b7deb5.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7575],{94414:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(11527),t=s(47214);const l={title:"JSON"},r="JSON",c={id:"dev/format/json",title:"JSON",description:"- rfc6901 - JavaScript Object Notation (JSON) Pointer",source:"@site/../notes/dev/format/json.md",sourceDirName:"dev/format",slug:"/dev/format/json",permalink:"/notes/dev/format/json",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/format/json.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706956646,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{title:"JSON"},sidebar:"docs",previous:{title:"HTTP Archive format",permalink:"/notes/dev/format/har"},next:{title:"JSON Schema",permalink:"/notes/dev/format/jsonschema/"}},h={},a=[{value:"Schema",id:"schema",level:2},{value:"Patch",id:"patch",level:2},{value:"Diff",id:"diff",level:2},{value:"Command line tools",id:"command-line-tools",level:2},{value:"ETL",id:"etl",level:2},{value:"Misc",id:"misc",level:2},{value:"FAQ",id:"faq",level:2},{value:"JSON Patch and JSON Merge Patch",id:"json-patch-and-json-merge-patch",level:3},{value:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",id:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",level:3}];function o(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"json",children:"JSON"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"rfc6901"})," - JavaScript Object Notation (JSON) Pointer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/automerge/automerge",children:"automerge/automerge"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A JSON-like data structure that can be modified concurrently by different users, and merged again automatically."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Extension\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"geojson"}),"\n",(0,i.jsx)(n.li,{children:"hljson"}),"\n",(0,i.jsx)(n.li,{children:"json5"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Variants\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"yaml"}),"\n",(0,i.jsx)(n.li,{children:"toml"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://json-schema.org/",children:"json-schema"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://www.jsonschema2pojo.org/",children:"jsonschema2pojo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Json Schema \u751f\u6210 Pojo"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://app.quicktype.io",children:"app.quicktype.io"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"patch",children:"Patch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6902",children:"rfc6902"})," - JSON Patch\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/json-patch+json"})}),"\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e\u64cd\u4f5c - op, path, value - \u66f4\u9002\u7528\u4e8e\u590d\u6742\u573a\u666f"}),"\n",(0,i.jsx)(n.li,{children:"op = add, remove, replace, move, copy, test"}),"\n",(0,i.jsxs)(n.li,{children:["test \u7528\u4e8e\u65ad\u8a00\uff0c\u65ad\u8a00\u5931\u8d25\u5219\u64cd\u4f5c\u5931\u8d25\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:'{ "op": "test", "path": "/a/b/c", "value": "foo" }'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7396",children:"rfc7396"})," - JSON Merge Patch\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/merge-patch+json"})}),"\n",(0,i.jsxs)(n.li,{children:["\u57fa\u4e8e\u6587\u6863\u5408\u5e76 - ",(0,i.jsx)(n.code,{children:'{"key":"new value"}'})," - \u9002\u7528\u4e8e\u7b80\u5355\u573a\u666f"]}),"\n",(0,i.jsx)(n.li,{children:"\u8bbe\u7f6e key \u4e3a null \u8868\u793a\u5220\u9664"}),"\n",(0,i.jsx)(n.li,{children:"\u6570\u7ec4\u53ea\u80fd\u66ff\u6362"}),"\n",(0,i.jsx)(n.li,{children:"\u5408\u5e76\u64cd\u4f5c\u4e0d\u4f1a\u51fa\u9519"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.del,{children:"rfc7386"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://jsonpatch.com/",children:"jsonpatch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=31301627",children:"HN"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/flipkart-incubator/zjsonpatch",children:"flipkart-incubator/zjsonpatch"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#patch-operations",children:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#patch-operations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"application/strategic-merge-patch+json"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e Merge Patch"}),"\n",(0,i.jsxs)(n.li,{children:["list \u5408\u5e76\u57fa\u4e8e name \u53bb\u91cd\u5408\u5e76\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u66ff\u6362\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"patchStrategy"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$patch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"replace, delete"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-api-machinery/strategic-merge-patch.md",children:"Strategic Merge Patch"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"diff",children:"Diff"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/andreyvit/json-diff",children:"https://github.com/andreyvit/json-diff"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://www.jsondiff.com/",children:"http://www.jsondiff.com/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://json-diff.com/",children:"https://json-diff.com/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md",children:"https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://benjamine.github.io/jsondiffpatch",children:"https://benjamine.github.io/jsondiffpatch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/google/diff-match-patch",children:"google/diff-match-patch"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.sanity.io/blog/mendoza",children:"Mendoza: Use stack machines to compute efficient JSON diffs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=24943775",children:"HN"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://extendsclass.com/json-diff.html",children:"https://extendsclass.com/json-diff.html"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"command-line-tools",children:"Command line tools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/antonmedv/fx",children:"antonmedv/fx"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/jmespath/jp",children:"jmespath/jp"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"etl",children:"ETL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jsonata-js/jsonata",children:"jsonata-js/jsonata"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JSONata query and transformation language"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/bazaarvoice/jolt",children:"bazaarvoice/jolt"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Apache-2.0, Java"}),"\n",(0,i.jsx)(n.li,{children:"JOLT - JsOn Language for Transform"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://jmespath.org/",children:"jmespath"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/jmespath/go-jmespath",children:"jmespath/go-jmespath"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/WebReflection/JSONH",children:"WebReflection/JSONH"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reducce JSON Size"}),"\n",(0,i.jsx)(n.li,{children:"hpack"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h3,{id:"json-patch-and-json-merge-patch",children:"JSON Patch and JSON Merge Patch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"rfc6902 vs rfc7396"}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://erosb.github.io/post/json-patch-vs-merge-patch/",children:"JSON Patch and JSON Merge Patch"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",children:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ISO 8601"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"new Date().toJSON()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2018-04-16T05:24:53.603Z"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Java ",(0,i.jsx)(n.code,{children:"new SimpleDateFormat(\"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\", Locale.CHINA)"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/q/10286204/1870054",children:"The \u201cright\u201d JSON date format"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"new Date().toJSON() === new Date().toISOString();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3354:(e,n,s)=>{var i=s(50959),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,l={},a=null,o=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)r.call(n,i)&&!h.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:t,type:e,key:a,ref:o,props:l,_owner:c.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(50959);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);