"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35829],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return b}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),b=a,f=s["".concat(p,".").concat(b)]||s[b]||m[b]||i;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70407:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"bramble"},p=void 0,l={unversionedId:"service/api/bramble",id:"service/api/bramble",title:"bramble",description:"- movio/bramble",source:"@site/notes/service/api/bramble.md",sourceDirName:"service/api",slug:"/service/api/bramble",permalink:"/notes/service/api/bramble",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/bramble.md",tags:[],version:"current",frontMatter:{title:"bramble"},sidebar:"docs",previous:{title:"Apollo Federation",permalink:"/notes/service/api/apollo-federation"},next:{title:"buf",permalink:"/notes/service/api/buf"}},u={},m=[],s={toc:m};function b(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/movio/bramble"},"movio/bramble"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,i.kt)("li",{parentName:"ul"},"GraphQL Gateway"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b\u7b80\u5355\u7684 AdminUI")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 subscription"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Service {\n  name: String!\n  version: String!\n  schema: String!\n}\n\ntype Query {\n  # \u8fd4\u56de \u670d\u52a1\u4fe1\u606f\n  service: Service!\n}\n\n# \u8de8\u670d\u52a1 \u7c7b\u578b - \u4f1a\u5408\u5e76\u7c7b\u578b\ndirective @boundary on OBJECT | FIELD_DEFINITION\n\n# \u591a\u4e2a\u670d\u52a1\u53ef\u540c\u65f6\u5728\u76f8\u540c ns \u4e0b\ndirective @namespace on OBJECT\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Gizmo @boundary {\n  id: ID!\n  size: Float!\n}\ntype Query {\n  gizmo(id: ID!): Gizmo @boundary\n}\n\ntype MyNamespaceQuery @namespace {\n  subnamespace: SubNamespaceQuery!\n}\ntype SubNamespaceQuery @namespace {\n  someField: String!\n}\ntype Query {\n  myNamespace: MyNamespaceQuery!\n}\n")))}b.isMDXComponent=!0}}]);