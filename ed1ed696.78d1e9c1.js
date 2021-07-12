(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{1061:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),i=(r(0),r(1129)),a={title:"Golang \u5fae\u670d\u52a1"},c={unversionedId:"languages/go/go-microservice",id:"languages/go/go-microservice",isDocsHomePage:!1,title:"Golang \u5fae\u670d\u52a1",description:"Tips",source:"@site/notes/languages/go/go-microservice.md",slug:"/languages/go/go-microservice",permalink:"/notes/languages/go/go-microservice",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-microservice.md",version:"current",sidebar:"docs",previous:{title:"go-kit",permalink:"/notes/languages/go/go-kit"},next:{title:"Golang \u6a21\u5757",permalink:"/notes/languages/go/go-module"}},l=[{value:"Tips",id:"tips",children:[]},{value:"go-micro vs micro",id:"go-micro-vs-micro",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/go-kit/kit"},"go-kit/kit"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u5de5\u5177\u96c6"),Object(i.b)("li",{parentName:"ul"},"Unopinioned"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6784\u5efa\u4e00\u5957\u9002\u5408\u81ea\u5df1\u7684 go-micro"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asim/go-micro"},"asim/go-micro"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e go-kit"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/micro/micro"},"micro/micro"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Server/Client/Framework"),Object(i.b)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u6846\u67b6\u3001\u751f\u6001\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},"Opinioned")))),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"go-micro-vs-micro"},"go-micro vs micro"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u76f8\u540c\u4f5c\u8005"),Object(i.b)("li",{parentName:"ul"},"micro",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Cloud Native \u5f00\u53d1\u5e73\u53f0"),Object(i.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u7aef\u3001\u6846\u67b6"))),Object(i.b)("li",{parentName:"ul"},"go-micro",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5f00\u53d1\u63d2\u4ef6\u96c6"),Object(i.b)("li",{parentName:"ul"},"\u975e\u5546\u4e1a Free Licence")))))}p.isMDXComponent=!0},1129:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,g=b["".concat(a,".").concat(s)]||b[s]||m[s]||i;return r?o.a.createElement(g,c(c({ref:t},u),{},{components:r})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);