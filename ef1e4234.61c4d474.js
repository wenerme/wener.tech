(window.webpackJsonp=window.webpackJsonp||[]).push([[995],{1068:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(1129)),l={title:"gqlgen"},o={unversionedId:"languages/go/lib/gqlgen",id:"languages/go/lib/gqlgen",isDocsHomePage:!1,title:"gqlgen",description:"- 99designs/gqlgen \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/languages/go/lib/gqlgen.md",slug:"/languages/go/lib/gqlgen",permalink:"/notes/languages/go/lib/gqlgen",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/gqlgen.md",version:"current",sidebar:"docs",previous:{title:"Golang GORM \u89e3\u6790",permalink:"/notes/languages/go/lib/gorm"},next:{title:"graphql",permalink:"/notes/languages/go/lib/graphql"}},c=[{value:"Note",id:"note",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen"},"99designs/gqlgen")," \u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u751f\u6210\u7684 GraphQL \u5f15\u64ce"),Object(i.b)("li",{parentName:"ul"},"Schema first - \u9700\u8981 DSL \u5b9a\u4e49 GraphQL Schema"),Object(i.b)("li",{parentName:"ul"},"\u7c7b\u578b\u5b89\u5168"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 Plugin - \u4fee\u6539\u914d\u7f6e, \u751f\u6210\u4ee3\u7801"))),Object(i.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5e93\u4ee3\u7801\u8d28\u91cf\u4e00\u822c"),Object(i.b)("li",{parentName:"ul"},"\u6587\u6863\u5c11"),Object(i.b)("li",{parentName:"ul"},"\u63d2\u4ef6\u80fd\u529b\u5f31\uff0c\u4e14\u6ca1\u4ec0\u4e48 Demo"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gqlgen.com/feature-comparison/"},"gqlgen vs gophers vs graphql-go vs thunder")),Object(i.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/1516"},"99designs/gqlgen#1516"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u517c\u5bb9 gqlparser 2.2 - \u5347\u7ea7\u7684\u65f6\u5019\u6ce8\u610f")))))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u26a0\ufe0f fragment \u5185\u7684 alias \u4e0d\u4f1a\u5904\u7406 - \u975e\u5e38\u4e25\u91cd\u4e14\u96be\u6392\u67e5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/1271"},"99designs/gqlgen#1271")))),Object(i.b)("li",{parentName:"ul"},"embeded \u76f8\u540c struct \u9700\u8981\u91cd\u590d\u5199 resolver",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/592"},"99designs/gqlgen#592")," - resolve \u903b\u8f91\u4e0d\u80fd\u5b9a\u4e49\u5728 interface \u4e0a"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/626"},"99designs/gqlgen#626")," - \u751f\u6210\u7c7b\u578b\u4e0d\u652f\u6301 embedded"))),Object(i.b)("li",{parentName:"ul"},"enum \u4e0d\u652f\u6301 int - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/99designs/gqlgen/issues/366"},"99designs/gqlgen#366"))))),Object(i.b)("h2",{id:"note"},"Note"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},"type HandlerExtension interface {\n  // ExtensionName should be a CamelCase string version of the extension which may be shown in stats and logging.\n  ExtensionName() string\n  // Validate is called when adding an extension to the server, it allows validation against the servers schema.\n  Validate(schema ExecutableSchema) error\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'+--- REQUEST   POST /graphql --------------------------------------------+\n| +- OPERATION query OpName { viewer { name } } -----------------------+ |\n| |  RESPONSE  { "data": { "viewer": { "name": "bob" } } }             | |\n| +- OPERATION subscription OpName2 { chat { message } } --------------+ |\n| |  RESPONSE  { "data": { "chat": { "message": "hello" } } }          | |\n| |  RESPONSE  { "data": { "chat": { "message": "byee" } } }           | |\n| +--------------------------------------------------------------------+ |\n+------------------------------------------------------------------------+\n')))}b.isMDXComponent=!0},1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=b(n),u=a,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);