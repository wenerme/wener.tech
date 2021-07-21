(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=u(r),g=n,s=b["".concat(c,".").concat(g)]||b[g]||m[g]||o;return r?a.a.createElement(s,l(l({ref:t},i),{},{components:r})):a.a.createElement(s,l({ref:t},i))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},875:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(1151)),c={id:"go-pkg-net-rpc",title:"Go net/rpc"},l={unversionedId:"languages/go/go-pkg-net-rpc",id:"languages/go/go-pkg-net-rpc",isDocsHomePage:!1,title:"Go net/rpc",description:"net/rpc",source:"@site/notes/languages/go/go-net-rpc.md",slug:"/languages/go/go-pkg-net-rpc",permalink:"/notes/languages/go/go-pkg-net-rpc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-net-rpc.md",version:"current",sidebar:"docs",previous:{title:"Golang \u6a21\u5757",permalink:"/notes/languages/go/go-module"},next:{title:"Go \u6a21\u677f",permalink:"/notes/languages/go/go-template"}},p=[],i={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"netrpc"},"net/rpc"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://golang.org/pkg/net/rpc/"},"net/rpc")),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u65b9\u6cd5 - ",Object(o.b)("inlineCode",{parentName:"li"},"func (t *T) MethodName(argType T1, replyType *T2) error"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u7c7b\u578b\u5df2\u5bfc\u51fa"),Object(o.b)("li",{parentName:"ul"},"\u5bfc\u51fa\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u6709\u4e24\u4e2a\u53c2\u6570 - \u652f\u6301\u5bfc\u51fa\u7c7b\u578b\u548c\u5185\u5efa\u7c7b\u578b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 encoding/gob \u5e8f\u5217\u5316"))),Object(o.b)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u6307\u9488"),Object(o.b)("li",{parentName:"ul"},"\u8fd4\u56de error"))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5904\u7406 RPC \u8def\u5f84 ",Object(o.b)("inlineCode",{parentName:"li"},"/_goRPC_")),Object(o.b)("li",{parentName:"ul"},"Debug \u8def\u5f84 ",Object(o.b)("inlineCode",{parentName:"li"},"/debug/rpc")),Object(o.b)("li",{parentName:"ul"},"Server",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"hijack \u94fe\u63a5\u8fdb\u5165 rpc \u903b\u8f91"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 gob \u5e8f\u5217\u5316"),Object(o.b)("li",{parentName:"ul"},"Request\u3001Response \u590d\u7528"),Object(o.b)("li",{parentName:"ul"},"Request ServerMethod\uff0cSeq",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ServiceMethod \u4e3a Service.Method \u683c\u5f0f"),Object(o.b)("li",{parentName:"ul"},"\u8bfb\u53d6\u5230 Request \u540e\u4fbf\u8bfb\u53d6\u8bf7\u6c42\u5bf9\u8c61"))),Object(o.b)("li",{parentName:"ul"},"Response ServiceMethod\uff0cSeq\uff0cError"))),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 jsonrpc \u5c31\u884c\u7f16\u7801"),Object(o.b)("li",{parentName:"ul"},"HTTP CONNECT \u8bf7\u6c42",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7136\u540e\u8f6c\u6362\u4e3a Codec - \u8bfb\u5199\u8bf7\u6c42\u548c\u54cd\u5e94",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"gob \u548c json \u5b9e\u73b0"))),Object(o.b)("li",{parentName:"ul"},"\u8bfb\u53d6 Reuqest\u3001\u8bfb\u53d6 Arg"),Object(o.b)("li",{parentName:"ul"},"\u5199\u5165 Response\uff0c\u5199\u5165 Body")))))}u.isMDXComponent=!0}}]);