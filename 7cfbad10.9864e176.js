(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1044:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,d=b["".concat(p,".").concat(m)]||b[m]||u[m]||i;return r?n.a.createElement(d,c(c({ref:t},o),{},{components:r})):n.a.createElement(d,c({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var o=2;o<i;o++)p[o]=r[o];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},551:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(8),i=(r(0),r(1044)),p={title:"Strapi"},c={unversionedId:"service/cms/strapi",id:"service/cms/strapi",isDocsHomePage:!1,title:"Strapi",description:"- strapi/strapi",source:"@site/notes/service/cms/strapi.md",slug:"/service/cms/strapi",permalink:"/notes/service/cms/strapi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/cms/strapi.md",version:"current",sidebar:"docs",previous:{title:"Ghost",permalink:"/notes/service/cms/ghost"},next:{title:"Wiki.js",permalink:"/notes/service/cms/wikijs"}},l=[{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]},{value:"GraphQL",id:"graphql",children:[{value:"Swagger",id:"swagger",children:[]}]},{value:"S3",id:"s3",children:[]}],o={toc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/strapi/strapi"},"strapi/strapi"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MIT+",Object(i.b)("a",{parentName:"li",href:"https://github.com/strapi/strapi/blob/86e0cf0f55d58e714a67cf4daee2e59e39974dd9/packages/strapi-admin/ee/LICENSE"},"EE"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"strapi-admin \u5305\u542b\u90e8\u5206 EE \u534f\u8bae - Strapi Enterprise Edition"))),Object(i.b)("li",{parentName:"ul"},"\u534a\u5f00\u53d1\u534a\u53ef\u89c6\u5316\u64cd\u4f5c\u7684 Headless CMS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u534a\u5f00\u53d1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63a5\u53e3\u3001\u6a21\u578b\u3001\u7ec4\u4ef6\u3001\u63d2\u4ef6\u5747\u53ef\u4ee5\u4ee3\u7801\u64cd\u4f5c"),Object(i.b)("li",{parentName:"ul"},"\u9996\u9009\u64cd\u4f5c\u65b9\u5f0f\u662f\u751f\u6210\u9879\u76ee\u800c\u4e0d\u662f\u4f5c\u4e3a\u670d\u52a1\u4f7f\u7528"),Object(i.b)("li",{parentName:"ul"},"\u533a\u5206 \u5f00\u53d1\u3001\u9884\u53d1\u3001\u751f\u4ea7 \u73af\u5883"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u53ea\u6709\u5f00\u53d1\u73af\u5883\u624d\u80fd\u751f\u6210\u6a21\u578b"))),Object(i.b)("li",{parentName:"ul"},"\u534a\u53ef\u89c6\u5316",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6a21\u578b\u5b9a\u4e49\u53ef\u89c6\u5316"),Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u7f16\u5c31\u53ef\u89c6\u5316"),Object(i.b)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5b9a\u4e49"))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration"},"Roadmap")),Object(i.b)("li",{parentName:"ul"},"\u5f00\u53d1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://strapi.io/documentation/3.0.0-beta.x/concepts/file-structure.html"},"\u6587\u4ef6\u7ed3\u6784")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/strapi/strapi-examples"},"strapi/strapi-examples")," - \u96c6\u6210\u53c2\u8003"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@alexdevmotion/1cc852fbf504"},"\u5c06 Strapi \u8f6c\u4e3a Typescript"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn create strapi-app my-strapi --quickstart\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn oudated\nsed '/strapi/s/3.0.0-beta.18.7/3.0.1/g'  package.json -i\nyarn\nyarn build\n")),Object(i.b)("h2",{id:"graphql"},"GraphQL"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# http://localhost:1337/graphql\nyarn strapi install graphql\n")),Object(i.b)("h3",{id:"swagger"},"Swagger"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn strapi install documentation\n")),Object(i.b)("h2",{id:"s3"},"S3"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# https://www.npmjs.com/search?q=strapi-provider-upload-\n# \u914d\u7f6e http://localhost:1337/admin/plugins/upload/configurations/development\nyarn add strapi-provider-upload-aws-s3@beta\n# \u652f\u6301\u81ea\u5b9a\u4e49 Endpoint\nyarn add strapi-provider-upload-amazon-s3-endpoint@beta\n\n# Aliyun OSS strapi-provider-upload-oss\n")))}s.isMDXComponent=!0}}]);