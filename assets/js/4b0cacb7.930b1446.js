"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52985],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91740:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&u(e,r,t[r]);return e};const m={title:"grpc-node"},f="gRPC Node",d={unversionedId:"service/api/grpc-node",id:"service/api/grpc-node",title:"grpc-node",description:"- grpc/grpc-node",source:"@site/../notes/service/api/grpc-node.md",sourceDirName:"service/api",slug:"/service/api/grpc-node",permalink:"/notes/service/api/grpc-node",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpc-node.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"grpc-node"},sidebar:"docs",previous:{title:"gRPC Go",permalink:"/notes/service/api/grpc-go"},next:{title:"grpc spec",permalink:"/notes/service/api/grpc-spec"}},g={},b=[],y={toc:b};function h(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),u),o(t,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"grpc-node"}),"gRPC Node"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grpc/grpc-node"}),"grpc/grpc-node")),(0,n.kt)("li",{parentName:"ul"},"@grpc/grpc-js",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7eaf JS \u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 callback - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grpc/grpc-node/issues/54"}),"#54")))),(0,n.kt)("li",{parentName:"ul"},"@grpc/proto-loader",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,n.kt)("a",s({parentName:"li"},{href:"/notes/service/api/protobuf-web"}),"pbjs")," \u7684 loader"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 descriptor"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 pbjs \u4ea7\u51fa\u7684 JSON"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/deeplay-io/nice-grpc"}),"deeplay-io/nice-grpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf1f"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u53cb\u597d\u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 middleware"),(0,n.kt)("li",{parentName:"ul"},"\u6709 health \u548c reflection \u76f8\u5173"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/stephenh/ts-proto"}),"stephenh/ts-proto")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/aperturerobotics/starpc"}),"aperturerobotics/starpc")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grpc/grpc/tree/master/examples/node"}),"https://github.com/grpc/grpc/tree/master/examples/node"))))))}h.isMDXComponent=!0}}]);