"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80993],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,f=m["".concat(i,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85758:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={id:"go-pkg-net-rpc",title:"Go net/rpc"},g="net/rpc",f={unversionedId:"languages/go/go-pkg-net-rpc",id:"languages/go/go-pkg-net-rpc",title:"Go net/rpc",description:"- net/rpc",source:"@site/../notes/languages/go/go-net-rpc.md",sourceDirName:"languages/go",slug:"/languages/go/pkg-net-rpc",permalink:"/notes/languages/go/pkg-net-rpc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-net-rpc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1636785414,formattedLastUpdatedAt:"Nov 13, 2021",frontMatter:{id:"go-pkg-net-rpc",title:"Go net/rpc"},sidebar:"docs",previous:{title:"Golang \u6a21\u5757",permalink:"/notes/languages/go/module"},next:{title:"Golang Spec",permalink:"/notes/languages/go/spec"}},d={},k=[],y={toc:k};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"netrpc"}),"net/rpc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://golang.org/pkg/net/rpc/"}),"net/rpc")),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u65b9\u6cd5 - ",(0,n.kt)("inlineCode",{parentName:"li"},"func (t *T) MethodName(argType T1, replyType *T2) error"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u7c7b\u578b\u5df2\u5bfc\u51fa"),(0,n.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u65b9\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u6709\u4e24\u4e2a\u53c2\u6570 - \u652f\u6301\u5bfc\u51fa\u7c7b\u578b\u548c\u5185\u5efa\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 encoding/gob \u5e8f\u5217\u5316"))),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u6307\u9488"),(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de error"))),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5904\u7406 RPC \u8def\u5f84 ",(0,n.kt)("inlineCode",{parentName:"li"},"/_goRPC_")),(0,n.kt)("li",{parentName:"ul"},"Debug \u8def\u5f84 ",(0,n.kt)("inlineCode",{parentName:"li"},"/debug/rpc")),(0,n.kt)("li",{parentName:"ul"},"Server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hijack \u94fe\u63a5\u8fdb\u5165 rpc \u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 gob \u5e8f\u5217\u5316"),(0,n.kt)("li",{parentName:"ul"},"Request\u3001Response \u590d\u7528"),(0,n.kt)("li",{parentName:"ul"},"Request ServerMethod\uff0cSeq",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ServiceMethod \u4e3a Service.Method \u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u5230 Request \u540e\u4fbf\u8bfb\u53d6\u8bf7\u6c42\u5bf9\u8c61"))),(0,n.kt)("li",{parentName:"ul"},"Response ServiceMethod\uff0cSeq\uff0cError"))),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 jsonrpc \u8fdb\u884c\u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"HTTP CONNECT \u8bf7\u6c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7136\u540e\u8f6c\u6362\u4e3a Codec - \u8bfb\u5199\u8bf7\u6c42\u548c\u54cd\u5e94",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gob \u548c json \u5b9e\u73b0"))),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6 Reuqest\u3001\u8bfb\u53d6 Arg"),(0,n.kt)("li",{parentName:"ul"},"\u5199\u5165 Response\uff0c\u5199\u5165 Body")))))}b.isMDXComponent=!0}}]);