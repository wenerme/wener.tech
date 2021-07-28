(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1172:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),s=a,g=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return r?n.a.createElement(g,c(c({ref:t},b),{},{components:r})):n.a.createElement(g,c({ref:t},b))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),l=(r(0),r(1172)),i={title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898"},c={unversionedId:"languages/go/lib/go-lib-faq",id:"languages/go/lib/go-lib-faq",isDocsHomePage:!1,title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",description:"graphql-go/graphql vs 99designs/gqlgen",source:"@site/notes/languages/go/lib/go-lib-faq.md",slug:"/languages/go/lib/go-lib-faq",permalink:"/notes/languages/go/lib/go-lib-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/go-lib-faq.md",version:"current",sidebar:"docs",previous:{title:"fyne",permalink:"/notes/languages/go/lib/fyne"},next:{title:"Golang GORM \u89e3\u6790",permalink:"/notes/languages/go/lib/gorm"}},o=[{value:"graphql-go/graphql vs 99designs/gqlgen",id:"graphql-gographql-vs-99designsgqlgen",children:[]},{value:"urfave vs cobra",id:"urfave-vs-cobra",children:[]},{value:"go-micro vs micro",id:"go-micro-vs-micro",children:[]}],b={toc:o};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"graphql-gographql-vs-99designsgqlgen"},"graphql-go/graphql vs 99designs/gqlgen"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Code First vs Schema First"),Object(l.b)("li",{parentName:"ul"},"Reflection vs Hard Code",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u900f\u660e\u4ee3\u7801 vs \u900f\u660e\u903b\u8f91"),Object(l.b)("li",{parentName:"ul"},"\u7edf\u4e00\u903b\u8f91 vs \u72ec\u7acb\u903b\u8f91",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7edf\u4e00\u903b\u8f91\u53ef\u52a8\u6001\u8c03\u6574"),Object(l.b)("li",{parentName:"ul"},"\u72ec\u7acb\u903b\u8f91\u66f4\u6613\u4e8e\u505a\u7279\u6b8a Case"))),Object(l.b)("li",{parentName:"ul"},"\u4ee3\u7801\u5c11 vs \u4ee3\u7801\u591a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ee3\u7801\u5c11 - \u9009\u62e9\u624b\u5199"),Object(l.b)("li",{parentName:"ul"},"\u4ee3\u7801\u591a - \u9009\u62e9\u751f\u6210")))))),Object(l.b)("p",null,"\u5982\u4f55\u9009\u62e9\u548c\u51b3\u5b9a\u66f4\u591a\u8fd8\u8981\u770b\u6570\u636e\u5c42\u7684\u5b9e\u73b0\u903b\u8f91\u3002"),Object(l.b)("p",null,"\u5982\u679c\u6570\u636e\u5c42\u4e5f\u6709\u5f88\u597d\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u90a3\u4e48 GraphQL Schema \u4e5f\u53ef\u4ee5\u751f\u6210\uff0c\u5904\u7406\u7684\u903b\u8f91\u4ee3\u7801\u4e5f\u53ef\u4ee5\u751f\u6210\uff0c\u5982\u4f55\u9009\u62e9\u5c31\u4f1a\u66f4\u52a0\u7075\u6d3b\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 gorm \u914d\u5408 graphql-go/graphql",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u90fd\u57fa\u4e8e\u53cd\u5c04"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u751f\u6210\u5173\u7cfb - \u52a8\u6001"))),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ent \u914d\u5408 99designs/gqlgen",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u90fd\u57fa\u4e8e\u751f\u6210"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u524d\u751f\u6210 schema \u548c\u5904\u7406\u903b\u8f91 - \u9759\u6001")))),Object(l.b)("h2",{id:"urfave-vs-cobra"},"urfave vs cobra"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"urfave",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u504f\u6846\u67b6\u6027\u8d28"),Object(l.b)("li",{parentName:"ul"},"opinionated"))),Object(l.b)("li",{parentName:"ul"},"cobra",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5de5\u5177\u96c6 - \u66f4\u52a0\u7075\u6d3b"),Object(l.b)("li",{parentName:"ul"},"pflag \u5904\u7406 flag, viper \u5904\u7406\u914d\u7f6e")))),Object(l.b)("h2",{id:"go-micro-vs-micro"},"go-micro vs micro"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u4f5c\u8005"),Object(l.b)("li",{parentName:"ul"},"\u5148\u6709 go-micro \u518d\u6709 micro")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"go-micro",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Apache-2.0"),Object(l.b)("li",{parentName:"ul"},"library - \u9762\u5411\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1 - RPC, \u4e8b\u4ef6\u9a71\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c Spring for Java \u548c Rails for Ruby \u89d2\u8272"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/micro/micro"},"micro"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"License \u4e25\u683c"),Object(l.b)("li",{parentName:"ul"},"CLI-based cloud native development framework - sane defaults with a pluggable architecture"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 CLI \u5feb\u901f\u63d0\u4f9b go-micro \u6240\u9700\u7684\u5e73\u53f0\u670d\u52a1 - dashboard, API gateway"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.infoq.com/podcasts/microservices-go-micro-paas3/"},"Asim Aslam on Microservices, go-micro, and PaaS 3.0"))))))}u.isMDXComponent=!0}}]);