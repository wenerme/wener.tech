"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41339],{10041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return m}});var r=n(96600),a=n(27279),l=(n(59496),n(3905)),i=["components"],u={title:"sequelize"},s=void 0,o={unversionedId:"web/nodejs/sequelize",id:"web/nodejs/sequelize",title:"sequelize",description:"- sequelize/sequelize",source:"@site/notes/web/nodejs/sequelize.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/sequelize",permalink:"/notes/web/nodejs/sequelize",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/nodejs/sequelize.md",tags:[],version:"current",frontMatter:{title:"sequelize"},sidebar:"docs",previous:{title:"pnpm",permalink:"/notes/web/nodejs/pnpm"},next:{title:"ts-node",permalink:"/notes/web/nodejs/ts-node"}},p={},m=[{value:"sequelize-cli",id:"sequelize-cli",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/sequelize"},"sequelize/sequelize")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/sequelize/blob/main/src/query-types.ts"},"src/query-types.ts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://deps.dev/npm/sequelize"},"\u4f9d\u8d56"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mickhansen/dottie.js"},"dottie"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u8def\u5f84"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/validatorjs/validator.js"},"validator"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1"))),(0,l.kt)("li",{parentName:"ul"},"inflection, lodash, moment"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"v7",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sequelize -> @sequelize/core"),(0,l.kt)("li",{parentName:"ul"},"nodejs 14+, ts 4.4+"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/demopark/sequelize-docs-Zh-CN"},"demopark/sequelize-docs-Zh-CN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://demopark.github.io/sequelize-docs-Zh-CN/"},"https://demopark.github.io/sequelize-docs-Zh-CN/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/umzug"},"umzug"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"migration"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/sequelize-auto"},"sequelize-auto"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"db schema -> sequelize schema"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/cli"},"sequelize-cli")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sequelize.org/docs/v7/other-topics/resources/"},"https://sequelize.org/docs/v7/other-topics/resources/")))),(0,l.kt)("li",{parentName:"ul"},"used by",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nocobase/nocobase"},"nocobase")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/atulmy/crate"},"atulmy/crate"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export enum QueryTypes {\n  SELECT = 'SELECT',\n  INSERT = 'INSERT',\n  UPDATE = 'UPDATE',\n  BULKUPDATE = 'BULKUPDATE',\n  BULKDELETE = 'BULKDELETE',\n  DELETE = 'DELETE',\n  UPSERT = 'UPSERT',\n  VERSION = 'VERSION',\n  SHOWTABLES = 'SHOWTABLES',\n  SHOWINDEXES = 'SHOWINDEXES',\n  DESCRIBE = 'DESCRIBE',\n  RAW = 'RAW',\n  FOREIGNKEYS = 'FOREIGNKEYS',\n  SHOWCONSTRAINTS = 'SHOWCONSTRAINTS',\n}\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Ability to get raw sql query ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/sequelize/issues/2325"},"#2325")))),(0,l.kt)("h2",{id:"sequelize-cli"},"sequelize-cli"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 typescript\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/cli/issues/328"},"https://github.com/sequelize/cli/issues/328"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm add sequelize\nnpm add -D sequelize-cli\n\n# config/config.json\n# models\n# migrations\n# seeders\nnpx sequelize init\n\n# \u751f\u6210\u6a21\u578b\n# \u4f1a\u751f\u6210 migrations\nnpx sequelize model:create --name User --attributes name:string,state:boolean,birth:date,card:integer,role:enum:'{Admin,Guest}'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config/config.json"',title:'"config/config.json"'},'{\n  "development": {\n    "username": "root",\n    "password": null,\n    "database": "database_development",\n    "host": "127.0.0.1",\n    "dialect": "mysql"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"--env",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"development"),(0,l.kt)("li",{parentName:"ul"},"test"),(0,l.kt)("li",{parentName:"ul"},"production"))),(0,l.kt)("li",{parentName:"ul"},"--url")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return c}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);