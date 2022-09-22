"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7575],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(a),f=n,h=s["".concat(p,".").concat(f)]||s[f]||u[f]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},58770:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return j},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return N}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&c(e,a,t[a]);return e};const s={title:"JSON"},f="JSON",h={unversionedId:"dev/format/json",id:"dev/format/json",title:"JSON",description:"- rfc6901 - JavaScript Object Notation (JSON) Pointer",source:"@site/../notes/dev/format/json.md",sourceDirName:"dev/format",slug:"/dev/format/json",permalink:"/notes/dev/format/json",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/format/json.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"JSON"},sidebar:"docs",previous:{title:"Format Awesome",permalink:"/notes/dev/format/format-awesome"},next:{title:"JSON Schema Awesome",permalink:"/notes/dev/format/jsonschema-awesome"}},k={},N=[{value:"Schema",id:"schema",level:2},{value:"Patch",id:"patch",level:2},{value:"Diff",id:"diff",level:2},{value:"Command line tools",id:"command-line-tools",level:2},{value:"ETL",id:"etl",level:2},{value:"Misc",id:"misc",level:2},{value:"FAQ",id:"faq",level:2},{value:"JSON Patch and JSON Merge Patch",id:"json-patch-and-json-merge-patch",level:3},{value:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",id:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",level:3}],d={toc:N};function j(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},d),c),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"json"}),"JSON"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6901"}),"rfc6901")," - JavaScript Object Notation (JSON) Pointer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/automerge/automerge"}),"automerge/automerge"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A JSON-like data structure that can be modified concurrently by different users, and merged again automatically.")))),(0,r.kt)("h2",u({},{id:"schema"}),"Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://json-schema.org/"}),"json-schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://www.jsonschema2pojo.org/"}),"jsonschema2pojo"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Json Schema \u751f\u6210 Pojo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://app.quicktype.io"}),"app.quicktype.io"))),(0,r.kt)("h2",u({},{id:"patch"}),"Patch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6902"}),"rfc6902")," - JSON Patch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u64cd\u4f5c - op, path, value - \u66f4\u9002\u7528\u4e8e\u590d\u6742\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},"op = add, remove, replace, move, copy, test"),(0,r.kt)("li",{parentName:"ul"},"test \u7528\u4e8e\u65ad\u8a00\uff0c\u65ad\u8a00\u5931\u8d25\u5219\u64cd\u4f5c\u5931\u8d25",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},'{ "op": "test", "path": "/a/b/c", "value": "foo" }')))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7396"}),"rfc7396")," - JSON Merge Patch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6587\u6863\u5408\u5e76 - ",(0,r.kt)("inlineCode",{parentName:"li"},'{"key":"new value"}')," - \u9002\u7528\u4e8e\u7b80\u5355\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e key \u4e3a null \u8868\u793a\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u53ea\u80fd\u66ff\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u5408\u5e76\u64cd\u4f5c\u4e0d\u4f1a\u51fa\u9519"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://jsonpatch.com/"}),"jsonpatch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://news.ycombinator.com/item?id=31301627"}),"HN")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/flipkart-incubator/zjsonpatch"}),"flipkart-incubator/zjsonpatch"))),(0,r.kt)("h2",u({},{id:"diff"}),"Diff"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/andreyvit/json-diff"}),"https://github.com/andreyvit/json-diff")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://www.jsondiff.com/"}),"http://www.jsondiff.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://json-diff.com/"}),"https://json-diff.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md"}),"https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://benjamine.github.io/jsondiffpatch"}),"https://benjamine.github.io/jsondiffpatch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/google/diff-match-patch"}),"google/diff-match-patch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.sanity.io/blog/mendoza"}),"Mendoza: Use stack machines to compute efficient JSON diffs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://news.ycombinator.com/item?id=24943775"}),"HN")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://extendsclass.com/json-diff.html"}),"https://extendsclass.com/json-diff.html"))),(0,r.kt)("h2",u({},{id:"command-line-tools"}),"Command line tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/antonmedv/fx"}),"antonmedv/fx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jmespath/jp"}),"jmespath/jp"))),(0,r.kt)("h2",u({},{id:"etl"}),"ETL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jsonata-js/jsonata"}),"jsonata-js/jsonata"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JSONata query and transformation language"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/bazaarvoice/jolt"}),"bazaarvoice/jolt"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,r.kt)("li",{parentName:"ul"},"JOLT - JsOn Language for Transform"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://jmespath.org/"}),"jmespath"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jmespath/go-jmespath"}),"jmespath/go-jmespath"))))),(0,r.kt)("h2",u({},{id:"misc"}),"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/WebReflection/JSONH"}),"WebReflection/JSONH"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reducce JSON Size"),(0,r.kt)("li",{parentName:"ul"},"hpack")))),(0,r.kt)("h2",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h3",u({},{id:"json-patch-and-json-merge-patch"}),"JSON Patch and JSON Merge Patch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rfc6902 vs rfc7396"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://erosb.github.io/post/json-patch-vs-merge-patch/"}),"JSON Patch and JSON Merge Patch"))))),(0,r.kt)("h3",u({},{id:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9"}),"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ISO 8601"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new Date().toJSON()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2018-04-16T05:24:53.603Z"))),(0,r.kt)("li",{parentName:"ul"},"Java ",(0,r.kt)("inlineCode",{parentName:"li"},"new SimpleDateFormat(\"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\", Locale.CHINA)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/q/10286204/1870054"}),"The \u201cright\u201d JSON date format"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"new Date().toJSON() === new Date().toISOString();\n")))}j.isMDXComponent=!0}}]);