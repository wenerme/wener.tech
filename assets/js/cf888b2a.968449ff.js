"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39296],{49613:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return u}});var n=t(59496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(t),u=r,c=k["".concat(i,".").concat(u)]||k[u]||N[u]||m;return t?n.createElement(c,l(l({ref:a},o),{},{components:t})):n.createElement(c,l({ref:a},o))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,l=new Array(m);l[0]=k;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<m;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},67866:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return h}});var n=t(49613),r=Object.defineProperty,m=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,N=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&o(e,t,a[t]);if(p)for(var t of p(a))s.call(a,t)&&o(e,t,a[t]);return e};const k={title:"JSON Schema"},u="JSON Schema",c={unversionedId:"dev/format/jsonschema",id:"dev/format/jsonschema",title:"JSON Schema",description:"- \u81ea\u5b9a\u4e49\u5c5e\u6027\u6700\u597d\u4f7f\u7528 x- \u524d\u7f00",source:"@site/../notes/dev/format/jsonschema.md",sourceDirName:"dev/format",slug:"/dev/format/jsonschema",permalink:"/notes/dev/format/jsonschema",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/format/jsonschema.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1662344272,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{title:"JSON Schema"},sidebar:"docs",previous:{title:"JSON Schema Awesome",permalink:"/notes/dev/format/jsonschema-awesome"},next:{title:"MIME",permalink:"/notes/dev/format/mime"}},d={},h=[{value:"Keyword",id:"keyword",level:2},{value:"ajv formats",id:"ajv-formats",level:2},{value:"JSON Schema vs JSON Type Definition",id:"json-schema-vs-json-type-definition",level:2},{value:"int64",id:"int64",level:2}],f={toc:h};function g(e){var a,t=e,{components:r}=t,o=((e,a)=>{var t={};for(var n in e)i.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=N(N({},f),o),m(a,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",N({},{id:"json-schema"}),"JSON Schema"),(0,n.kt)("admonition",N({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5c5e\u6027\u6700\u597d\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"x-")," \u524d\u7f00"),(0,n.kt)("li",{parentName:"ul"},"enum \u901a\u8fc7\u6570\u7ec4\u5b9a\u4e49\uff0c\u65e0\u6cd5\u6307\u5b9a title ",(0,n.kt)("inlineCode",{parentName:"li"},"[1,2,3]")," - \u53ef\u4ee5\u4f7f\u7528 oneOf"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 2020-12 \u6216 draft-07"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",N({parentName:"tr"},{align:null}),"version"),(0,n.kt)("th",N({parentName:"tr"},{align:null}),"$schema"),(0,n.kt)("th",N({parentName:"tr"},{align:null}),"adopted by"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("a",N({parentName:"td"},{href:"https://json-schema.org/draft/2020-12/schema"}),"2020-12")),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"OpenAPI 3.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("a",N({parentName:"td"},{href:"https://json-schema.org/draft/2019-09/schema"}),"2019-09")),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("a",N({parentName:"td"},{href:"https://json-schema.org/draft-07/schema"}),"draft-07")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("a",N({parentName:"td"},{href:"http://json-schema.org/draft-07/schema"}),"http://json-schema.org/draft-07/schema")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ajv default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("a",N({parentName:"td"},{href:"https://json-schema.org/draft-06/schema"}),"draft-06")),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("a",N({parentName:"td"},{href:"https://json-schema.org/draft-04/schema"}),"draft-04")),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"draft-00"),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"OpenAPI 3.0")))),(0,n.kt)("admonition",N({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$schema")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"http://")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2020-12 - \u4e0d\u517c\u5bb9 draft-07",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"prefixItems"),(0,n.kt)("li",{parentName:"ul"},"items \u884c\u4e3a\u53d8\u5316"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",N({parentName:"li"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"R"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",N({parentName:"mrow"},{separator:"true"}),",")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"recursiveRef,")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"rec"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"u"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"rs"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"i"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"v"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"e"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.00773em"}}),"R"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"e"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),(0,n.kt)("span",N({parentName:"span"},{className:"mpunct"}),","))))),"recursiveAnchor -> ",(0,n.kt)("span",N({parentName:"li"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"R"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",N({parentName:"mrow"},{separator:"true"}),",")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"dynamicRef,")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"d"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"y"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"nami"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"c"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.00773em"}}),"R"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"e"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),(0,n.kt)("span",N({parentName:"span"},{className:"mpunct"}),","))))),"dynamicAnchor"),(0,n.kt)("li",{parentName:"ul"},"contains+unevaluatedItems \u884c\u4e3a\u53d8\u5316"),(0,n.kt)("li",{parentName:"ul"},"application/schema+json, application/schema-instance+json"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 $defs \u6765 bundle schema"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://json-schema.org/draft/2020-12/release-notes.html"}),"JSON Schema 2020-12 Release Notes")))),(0,n.kt)("li",{parentName:"ul"},"draft 2019-09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",N({parentName:"li"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"A"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"h"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",N({parentName:"mrow"},{mathvariant:"normal"}),"/")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"recursiveAnchor/")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"rec"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"u"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"rs"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"i"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"v"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"e"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"A"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"n"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"c"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"h"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"or"),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"/"))))),"recursiveRef"),(0,n.kt)("li",{parentName:"ul"},"unevaluatedProperties"),(0,n.kt)("li",{parentName:"ul"},"unevaluatedItems"),(0,n.kt)("li",{parentName:"ul"},"dependentRequired"),(0,n.kt)("li",{parentName:"ul"},"dependentSchemas"),(0,n.kt)("li",{parentName:"ul"},"maxContains/minContains"))),(0,n.kt)("li",{parentName:"ul"},"draft-07 - ",(0,n.kt)("a",N({parentName:"li"},{href:"https://json-schema.org/draft-07/schema"}),"https://json-schema.org/draft-07/schema"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",N({parentName:"li"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"R"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",N({parentName:"mrow"},{mathvariant:"normal"}),"/")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"recursiveRef/")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"rec"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"u"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"rs"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"i"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03588em"}}),"v"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"e"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.00773em"}}),"R"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"e"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"/"))))),"recursiveAnchor, unevaluatedProperties/unevaluatedItems"))),(0,n.kt)("li",{parentName:"ul"},"draft-06"),(0,n.kt)("li",{parentName:"ul"},"draft-04"),(0,n.kt)("li",{parentName:"ul"},"OpenAPI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"nullable"),(0,n.kt)("li",{parentName:"ul"},"discriminator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cd\u6821\u9a8c")))))),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-json"}),'{\n  "type": "string",\n  "nullable": true\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-json"}),'{\n  "type": ["string", "null"]\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://github.com/json-schema-org/json-schema-spec"}),"json-schema-org/json-schema-spec"))),(0,n.kt)("h2",N({},{id:"keyword"}),"Keyword"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/product.schema.json",\n  "title": "Product",\n  "description": "A product in the catalog",\n  "type": "object",\n  "properties": {\n    "uints": {\n      "type": "array",\n      "items": {\n        // \u76f8\u5bf9\u5f15\u7528\n        "$ref": "#/$defs/positiveInteger"\n      }\n    },\n\n    "objs": {\n      "type": "array",\n      "items": {\n        // \u7edd\u5bf9\u5f15\u7528\n        "$id": "https://example.com/bar",\n        "additionalProperties": {}\n      }\n    },\n    // null or string\n    "nullable": {"type": ["string", "null"]}\n  },\n  "required": [],\n  "$defs": {\n    "positiveInteger": {\n      "type": "integer",\n      "exclusiveMinimum": 0\n    },\n    "single": {\n      "$anchor": "item",\n      "type": "object",\n      "additionalProperties": {"$ref": "other.json"}\n    }\n  },\n  "$comment": ""\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4efb\u610f\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"enum"),(0,n.kt)("li",{parentName:"ul"},"const"),(0,n.kt)("li",{parentName:"ul"},"$data - \u5f15\u7528\u6570\u636e"))),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u903b\u8f91",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"not"),(0,n.kt)("li",{parentName:"ul"},"oneOf"),(0,n.kt)("li",{parentName:"ul"},"anyOf"),(0,n.kt)("li",{parentName:"ul"},"allOf"),(0,n.kt)("li",{parentName:"ul"},"if/then/else"))),(0,n.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"title, description"),(0,n.kt)("li",{parentName:"ul"},"$comment"),(0,n.kt)("li",{parentName:"ul"},"default"),(0,n.kt)("li",{parentName:"ul"},"examples"),(0,n.kt)("li",{parentName:"ul"},"readOnly, writeOnly"),(0,n.kt)("li",{parentName:"ul"},"contentEncoding - \u4f8b\u5982: base64 ",(0,n.kt)("a",N({parentName:"li"},{href:"https://www.rfc-editor.org/rfc/rfc2045#section-6.1"}),"https://www.rfc-editor.org/rfc/rfc2045#section-6.1")),(0,n.kt)("li",{parentName:"ul"},"contentMediaType - \u4f8b\u5982: image/png ",(0,n.kt)("a",N({parentName:"li"},{href:"https://datatracker.ietf.org/doc/rfc2046/"}),"https://datatracker.ietf.org/doc/rfc2046/")))),(0,n.kt)("li",{parentName:"ul"},"number",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"format",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"float"),(0,n.kt)("li",{parentName:"ul"},"double"))),(0,n.kt)("li",{parentName:"ul"},"keyword",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"minimum - >="),(0,n.kt)("li",{parentName:"ul"},"maximum - <="),(0,n.kt)("li",{parentName:"ul"},"exclusiveMinimum - >"),(0,n.kt)("li",{parentName:"ul"},"exclusiveMaximum - <"),(0,n.kt)("li",{parentName:"ul"},"multipleOf"))))),(0,n.kt)("li",{parentName:"ul"},"integer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"format",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"int32"),(0,n.kt)("li",{parentName:"ul"},"int64"))))),(0,n.kt)("li",{parentName:"ul"},"string",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"format",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email - RFC 5321"),(0,n.kt)("li",{parentName:"ul"},"idn-email - RFC 6531"),(0,n.kt)("li",{parentName:"ul"},"uuid"),(0,n.kt)("li",{parentName:"ul"},"uri"),(0,n.kt)("li",{parentName:"ul"},"uri-reference"),(0,n.kt)("li",{parentName:"ul"},"iri"),(0,n.kt)("li",{parentName:"ul"},"iri-reference"),(0,n.kt)("li",{parentName:"ul"},"uri-template"),(0,n.kt)("li",{parentName:"ul"},"json-pointer"),(0,n.kt)("li",{parentName:"ul"},"relarive-json-pointer"),(0,n.kt)("li",{parentName:"ul"},"hostname"),(0,n.kt)("li",{parentName:"ul"},"idn-hostname - RFC5890, section 2.3.2.3."),(0,n.kt)("li",{parentName:"ul"},"ipv4"),(0,n.kt)("li",{parentName:"ul"},"ipv6"),(0,n.kt)("li",{parentName:"ul"},"password - \u9488\u5bf9\u524d\u7aef\u7684\u63d0\u793a"),(0,n.kt)("li",{parentName:"ul"},"byte - Base64 \u7f16\u7801\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"binary - \u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u7528\u4e8e\u914d\u5408\u6587\u4ef6\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"date-time - RFC 3339, 5.6, ",(0,n.kt)("inlineCode",{parentName:"li"},"2017-07-21T17:32:28Z")),(0,n.kt)("li",{parentName:"ul"},"date - RFC 3339, 5.6, ",(0,n.kt)("inlineCode",{parentName:"li"},"2017-07-21")),(0,n.kt)("li",{parentName:"ul"},"time"),(0,n.kt)("li",{parentName:"ul"},"duration - draft 2019-09 - ISO 8601 ABNF for \u201cduration\u201d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"P3D"))))),(0,n.kt)("li",{parentName:"ul"},"keyword",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pattern - \u6b63\u5219\u5339\u914d"),(0,n.kt)("li",{parentName:"ul"},"minLength, maxLength"))))),(0,n.kt)("li",{parentName:"ul"},"boolean"),(0,n.kt)("li",{parentName:"ul"},"null - \u7a7a\u503c"),(0,n.kt)("li",{parentName:"ul"},"array",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"minItems, maxItems"),(0,n.kt)("li",{parentName:"ul"},"uniqueItems"),(0,n.kt)("li",{parentName:"ul"},"items"),(0,n.kt)("li",{parentName:"ul"},"contains"),(0,n.kt)("li",{parentName:"ul"},"draft 2019-09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"maxContains\uff0c minContains"),(0,n.kt)("li",{parentName:"ul"},"unevaluatedItems"))),(0,n.kt)("li",{parentName:"ul"},"draft-2020-12",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"items - \u8981\u6c42\u4e3a schema"),(0,n.kt)("li",{parentName:"ul"},"prefixItems - \u524d\u7f6e items \u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"additionalItems - \u662f\u5426\u5141\u8bb8\u989d\u5916 items"))))),(0,n.kt)("li",{parentName:"ul"},"object",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"minProperties\uff0c maxProperties"),(0,n.kt)("li",{parentName:"ul"},"required - \u5fc5\u987b\u7684\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"properties - \u5b57\u6bb5\u5b9a\u4e49"),(0,n.kt)("li",{parentName:"ul"},"patternProperties - \u6839\u636e key \u9650\u5b9a\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"additionalProperties - \u5141\u8bb8\u989d\u5916\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"propertyNames - \u9650\u5b9a key \u7684 schema"),(0,n.kt)("li",{parentName:"ul"},"draft 2019-09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"dependencies")),(0,n.kt)("li",{parentName:"ul"},"dependentRequired - \u5b57\u6bb5\u4e4b\u95f4\u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ul"},"dependentSchemas"),(0,n.kt)("li",{parentName:"ul"},"unevaluatedProperties"))),(0,n.kt)("li",{parentName:"ul"},"OpenAPI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"discriminator")))))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"decimal \u7cbe\u5ea6")),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-json"}),'{"type": "number", "multipleOf": 0.01}\n')),(0,n.kt)("h2",N({},{id:"ajv-formats"}),"ajv formats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://ajv.js.org/packages/ajv-formats.html"}),"https://ajv.js.org/packages/ajv-formats.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://ajv.js.org/guide/formats.html"}),"https://ajv.js.org/guide/formats.html"))),(0,n.kt)("h1",N({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",N({},{id:"json-schema-vs-json-type-definition"}),"JSON Schema vs JSON Type Definition"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JSON Schema",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e7f"),(0,n.kt)("li",{parentName:"ul"},"OpenAPI \u91c7\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u590d\u6742\u6821\u9a8c\u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u9650\u5236\u800c\u975e\u7c7b\u578b\u7ed3\u6784"))),(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u590d\u6742"),(0,n.kt)("li",{parentName:"ul"},"\u975e RFC\uff0c\u6807\u51c6\u5904\u4e8e draft \u72b6\u6001"))))),(0,n.kt)("li",{parentName:"ul"},"JSON Type Definition",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5355"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355"),(0,n.kt)("li",{parentName:"ul"},"RFC8927"))),(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5f15\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u65e0 meta-schema"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u6807\u51c6 - 2021-01")))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://ajv.js.org/guide/schema-language.html"}),"https://ajv.js.org/guide/schema-language.html"))),(0,n.kt)("h2",N({},{id:"int64"}),"int64"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-json"}),'{\n  "type": "integer",\n  "format": "int64"\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"protobufjs \u4f7f\u7528 long \u5305")))}g.isMDXComponent=!0}}]);