"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93864],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),f=p,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60070:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return b}});var n=r(49613),p=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e};const m={tags:["FAQ"]},f="Typescript FAQ",y={unversionedId:"web/script/typescript/typescript-faq",id:"web/script/typescript/typescript-faq",title:"Typescript FAQ",description:"- monorepo \u7c7b\u578b\u95ee\u9898 TypeScript#25376",source:"@site/../notes/web/script/typescript/typescript-faq.md",sourceDirName:"web/script/typescript",slug:"/web/script/typescript/faq",permalink:"/notes/web/script/typescript/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/typescript/typescript-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1665234509,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Typescript",permalink:"/notes/web/script/typescript/"},next:{title:"tsconfig.json",permalink:"/notes/web/script/typescript/tsconfig"}},d={},b=[{value:"Path alias",id:"path-alias",level:2},{value:"I \u63a5\u53e3\u547d\u540d\u524d\u7f00",id:"i-\u63a5\u53e3\u547d\u540d\u524d\u7f00",level:2},{value:"DEV",id:"dev",level:2},{value:"\u4f7f\u7528 pnpm \u5b89\u88c5\uff0cTypescript \u62a5\u7c7b\u578b\u9519\u8bef",id:"\u4f7f\u7528-pnpm-\u5b89\u88c5typescript-\u62a5\u7c7b\u578b\u9519\u8bef",level:2},{value:"Types of property &#39;propTypes&#39; are incompatible",id:"types-of-property-proptypes-are-incompatible",level:2},{value:"method-signature-style",id:"method-signature-style",level:2}],v={toc:b};function g(e){var t,r=e,{components:p}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),c),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"typescript-faq"}),"Typescript FAQ"),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"monorepo \u7c7b\u578b\u95ee\u9898 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/issues/25376"}),"TypeScript#25376"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5c31 npm monorepo \u5de5\u4f5c\u76f8\u5bf9\u6b63\u5e38"))))),(0,n.kt)("h2",u({},{id:"path-alias"}),"Path alias"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"]\n    }\n  }\n}\n')),(0,n.kt)("h2",u({},{id:"i-\u63a5\u53e3\u547d\u540d\u524d\u7f00"}),"I \u63a5\u53e3\u547d\u540d\u524d\u7f00"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u89c9\u5f97\u9700\u8981\u7528\u7684\u65f6\u5019\u5c31\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u548c\u63a5\u53e3\u540c\u65f6\u5b58\u5728"))),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u6709\u63a5\u53e3\u6ca1\u6709\u5b9e\u73b0\u65f6\uff0c\u4e0d\u8981\u52a0\u524d\u7f00")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// user.ts\n// IUserService \u4ec5\u63d0\u4f9b\u7ed9\u4f7f\u7528\u65b9\nexport class UserService implements IUserService {}\nexport interface IUserService {}\n\n// index.ts\n// \u5bf9\u5916\u53ea\u66b4\u9732\u63a5\u53e3\uff0c\u907f\u514d import \u7684\u65f6\u5019\u5bfc\u5165\u6e90\u7801\u589e\u52a0 bundle\nexport {type IUserService} from 'user.ts';\n\n// client.ts\nimport type {IUserService} from 'server';\n// \u5ba2\u6237\u7aef\u4e0d\u9700\u8981 bundle \u6e90\u7801\nconst svc = getService<IUserService>('user');\n")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/41967120/1870054"}),"https://stackoverflow.com/a/41967120/1870054"))),(0,n.kt)("h2",u({},{id:"dev"}),"DEV"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title="types.d.ts"',title:'"types.d.ts"'}),"declare var __DEV__: boolean;\n")),(0,n.kt)("h2",u({},{id:"\u4f7f\u7528-pnpm-\u5b89\u88c5typescript-\u62a5\u7c7b\u578b\u9519\u8bef"}),"\u4f7f\u7528 pnpm \u5b89\u88c5\uff0cTypescript \u62a5\u7c7b\u578b\u9519\u8bef"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5 preserveSymlinks")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "preserveSymlinks": true\n  }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/issues/29808"}),"https://github.com/microsoft/TypeScript/issues/29808"))),(0,n.kt)("h2",u({},{id:"types-of-property-proptypes-are-incompatible"}),"Types of property 'propTypes' are incompatible"),(0,n.kt)("h2",u({},{id:"method-signature-style"}),"method-signature-style"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"interface Example {\n  // method shorthand syntax\n  func(arg: string): number;\n\n  // regular property with function type\n  func: (arg: string) => number;\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method args - bivariant"),(0,n.kt)("li",{parentName:"ul"},"function args - contravariant"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/pull/18654"}),"https://github.com/microsoft/TypeScript/pull/18654"))))}g.isMDXComponent=!0}}]);