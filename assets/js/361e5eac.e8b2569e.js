"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9705],{68697:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a=r(96600),n=r(27279),l=(r(59496),r(3905)),i=["components"],p={title:"NestJS"},o=void 0,m={unversionedId:"web/framework/nestjs",id:"web/framework/nestjs",title:"NestJS",description:"- \u8bbe\u8ba1\u6765\u81ea Angular + SpringFramework",source:"@site/notes/web/framework/nestjs.md",sourceDirName:"web/framework",slug:"/web/framework/nestjs",permalink:"/notes/web/framework/nestjs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nestjs.md",tags:[],version:"current",frontMatter:{title:"NestJS"},sidebar:"docs",previous:{title:"mocha",permalink:"/notes/web/framework/mocha"},next:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs-cookbook"}},u={},s=[],c={toc:s};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u6765\u81ea Angular + SpringFramework"),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6982\u5ff5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module"),(0,l.kt)("li",{parentName:"ul"},"Controller"),(0,l.kt)("li",{parentName:"ul"},"Provider"),(0,l.kt)("li",{parentName:"ul"},"Middleware"),(0,l.kt)("li",{parentName:"ul"},"Exception filter"),(0,l.kt)("li",{parentName:"ul"},"Pipe"),(0,l.kt)("li",{parentName:"ul"},"Guard"),(0,l.kt)("li",{parentName:"ul"},"Interceptor"),(0,l.kt)("li",{parentName:"ul"},"decorator"))),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u5e73\u53f0\u65e0\u5173 - \u9ed8\u8ba4 Express\uff0c\u53ef\u7528 Fastify"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 GraphQL\u3001WebSocket"),(0,l.kt)("li",{parentName:"ul"},"combine your config and your code seamlessly by making use of TypeScript decorators"))),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NextJS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nestjs/nest/issues/1122"},"nestjs/nest#1122")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kyle-mccarthy/nest-next"},"kyle-mccarthy/nest-next")),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a Next \u53ef\u80fd\u5728\u6784\u5efa\u65f6\u6709\u4e00\u4e9b\u8bf7\u6c42\uff0c\u4e24\u8005\u5171\u5b58\u53ef\u80fd\u4f1a\u6709\u4e9b\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u524d\u540e\u7aef\u5206\u79bb\u66f4\u597d"))),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@nestjs/typeorm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@nestjs/sequelize")))),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@nestjs/config")," - dotenv"))),(0,l.kt)("li",{parentName:"ul"},"\u6821\u9a8c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/class-validator"},"class-validator")))),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/cache-manager"},"cache-manager")," - Flexible NodeJS cache module"))),(0,l.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/class-transformer"},"class-transformer")))),(0,l.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u8c03\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@nestjs/schedule")," - ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/node-cron"},"node-cron")))),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5168",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/helmet"},"helmet")),(0,l.kt)("li",{parentName:"ul"},"CSRF ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/csurf"},"csurf")),(0,l.kt)("li",{parentName:"ul"},"\u9650\u6d41 ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/express-rate-limit"},"express-rate-limit")))),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5217",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@nestjs/bull")," - bull"))),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/winstonjs/winston"},"winstonjs/winston")))),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4e0a\u4f20",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/expressjs/multer"},"expressjs/multer")))),(0,l.kt)("li",{parentName:"ul"},"HTTP \u5ba2\u6237\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"axios"))),(0,l.kt)("li",{parentName:"ul"},"GraphQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@nestjs/graphql")," apollo-server-express")))))))}k.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return c}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),k=n,N=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return r?a.createElement(N,i(i({ref:t},s),{},{components:r})):a.createElement(N,i({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);