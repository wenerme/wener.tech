"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93429],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,k=m["".concat(o,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],l={title:"OpenAPI"},o=void 0,c={unversionedId:"service/api/openapi",id:"service/api/openapi",title:"OpenAPI",description:"- OAI/OpenAPI-Specification",source:"@site/notes/service/api/openapi.md",sourceDirName:"service/api",slug:"/service/api/openapi",permalink:"/notes/service/api/openapi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/openapi.md",tags:[],version:"current",frontMatter:{title:"OpenAPI"},sidebar:"docs",previous:{title:"gRPC",permalink:"/notes/service/api/grpc"},next:{title:"Protobuf",permalink:"/notes/service/api/protobuf-faq"}},u={},s=[{value:"Version",id:"version",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification"},"OAI/OpenAPI-Specification"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/grpc-gateway/issues/441"},"grpc-ecosystem/grpc-gateway#441"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenAPIv3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/gnostic"},"google/gnostic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenAPI <-> gRPC"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 OpenAPIv3")))))),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OpenAPI v3.1 - 2020-06-18"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"100% JSON Schema \u652f\u6301"),(0,i.kt)("li",{parentName:"ul"},"paths \u5fc5\u8981 -> \u53ef\u9009",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u66f4\u597d\u63cf\u8ff0 \u56de\u6389\u3001\u5f02\u6b65\u4e8b\u4ef6"))),(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709 null \u7c7b\u578b\uff0c\u65b0\u589e nullable \u5c5e\u6027"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OpenAPI v3.0 - 2017-07-26"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"v2 -> v2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"securityDefinitions, definitions, parameters, responses -> components"),(0,i.kt)("li",{parentName:"ul"},"body, formData -> requestBody"),(0,i.kt)("li",{parentName:"ul"},"oauth2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"application -> clientCredentials"),(0,i.kt)("li",{parentName:"ul"},"accessCode -> authorizationCode"))))),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684 JSON Schema \u652f\u6301",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"oneOf"),(0,i.kt)("li",{parentName:"ul"},"anyOf"),(0,i.kt)("li",{parentName:"ul"},"allOf"))),(0,i.kt)("li",{parentName:"ul"},"http, basic"),(0,i.kt)("li",{parentName:"ul"},"openIdConnect - oidc discovery"),(0,i.kt)("li",{parentName:"ul"},"cookie"),(0,i.kt)("li",{parentName:"ul"},"callbacks"),(0,i.kt)("li",{parentName:"ul"},"link"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OpenAPI v2.0 - 2014-09-08")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/news/blogs/2016/10/tdc-structural-improvements-explaining-30-spec-part-2"},"https://www.openapis.org/news/blogs/2016/10/tdc-structural-improvements-explaining-30-spec-part-2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.stoplight.io/difference-between-open-v2-v3-v31"},"https://blog.stoplight.io/difference-between-open-v2-v3-v31")))),(0,i.kt)("h1",{id:"faq"},"FAQ"))}f.isMDXComponent=!0}}]);