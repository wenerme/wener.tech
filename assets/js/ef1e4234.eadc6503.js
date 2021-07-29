"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9241],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=g(n),c=r,d=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19190:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=["components"],o={title:"gqlgen"},s=void 0,g={unversionedId:"languages/go/lib/gqlgen",id:"languages/go/lib/gqlgen",isDocsHomePage:!1,title:"gqlgen",description:"- 99designs/gqlgen \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/languages/go/lib/gqlgen.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/gqlgen",permalink:"/notes/languages/go/lib/gqlgen",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/gqlgen.md",version:"current",frontMatter:{title:"gqlgen"},sidebar:"docs",previous:{title:"Golang GORM \u89e3\u6790",permalink:"/notes/languages/go/lib/gorm"},next:{title:"graphql",permalink:"/notes/languages/go/lib/graphql"}},u=[{value:"Note",id:"note",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen"},"99designs/gqlgen")," \u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u751f\u6210\u7684 GraphQL \u5f15\u64ce"),(0,i.kt)("li",{parentName:"ul"},"Schema first - \u9700\u8981 DSL \u5b9a\u4e49 GraphQL Schema"),(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u5b89\u5168"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 Plugin - \u4fee\u6539\u914d\u7f6e, \u751f\u6210\u4ee3\u7801"))),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5e93\u4ee3\u7801\u8d28\u91cf\u4e00\u822c"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863\u5c11"),(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u80fd\u529b\u5f31\uff0c\u4e14\u6ca1\u4ec0\u4e48 Demo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gqlgen.com/feature-comparison/"},"gqlgen vs gophers vs graphql-go vs thunder")),(0,i.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/1516"},"99designs/gqlgen#1516"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u517c\u5bb9 gqlparser 2.2 - \u5347\u7ea7\u7684\u65f6\u5019\u6ce8\u610f")))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u26a0\ufe0f fragment \u5185\u7684 alias \u4e0d\u4f1a\u5904\u7406 - \u975e\u5e38\u4e25\u91cd\u4e14\u96be\u6392\u67e5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/1271"},"99designs/gqlgen#1271")))),(0,i.kt)("li",{parentName:"ul"},"embeded \u76f8\u540c struct \u9700\u8981\u91cd\u590d\u5199 resolver",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/592"},"99designs/gqlgen#592")," - resolve \u903b\u8f91\u4e0d\u80fd\u5b9a\u4e49\u5728 interface \u4e0a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/626"},"99designs/gqlgen#626")," - \u751f\u6210\u7c7b\u578b\u4e0d\u652f\u6301 embedded"))),(0,i.kt)("li",{parentName:"ul"},"enum \u4e0d\u652f\u6301 int - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/366"},"99designs/gqlgen#366"))))),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type HandlerExtension interface {\n  // ExtensionName should be a CamelCase string version of the extension which may be shown in stats and logging.\n  ExtensionName() string\n  // Validate is called when adding an extension to the server, it allows validation against the servers schema.\n  Validate(schema ExecutableSchema) error\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+--- REQUEST   POST /graphql --------------------------------------------+\n| +- OPERATION query OpName { viewer { name } } -----------------------+ |\n| |  RESPONSE  { "data": { "viewer": { "name": "bob" } } }             | |\n| +- OPERATION subscription OpName2 { chat { message } } --------------+ |\n| |  RESPONSE  { "data": { "chat": { "message": "hello" } } }          | |\n| |  RESPONSE  { "data": { "chat": { "message": "byee" } } }           | |\n| +--------------------------------------------------------------------+ |\n+------------------------------------------------------------------------+\n')))}m.isMDXComponent=!0}}]);