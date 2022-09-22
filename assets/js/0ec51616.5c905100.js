"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16946],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(r),s=a,k=g["".concat(o,".").concat(s)]||g[s]||m[s]||l;return r?n.createElement(k,p(p({ref:t},u),{},{components:r})):n.createElement(k,p({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99670:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e};const g={title:"grpc web"},s="grpc web",k={unversionedId:"service/api/grpc-web",id:"service/api/grpc-web",title:"grpc web",description:"- gRPC Web",source:"@site/../notes/service/api/grpc-web.md",sourceDirName:"service/api",slug:"/service/api/grpc-web",permalink:"/notes/service/api/grpc-web",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpc-web.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"grpc web"},sidebar:"docs",previous:{title:"grpc spec",permalink:"/notes/service/api/grpc-spec"},next:{title:"gRPC",permalink:"/notes/service/api/grpc"}},b={},N=[{value:"Awesome",id:"awesome",level:2},{value:"Protocol",id:"protocol",level:2}],f={toc:N};function d(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},f),u),l(t,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"grpc-web"}),"grpc web"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md"}),"gRPC Web")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/grpc/grpc-web"}),"grpc/grpc-web")),(0,n.kt)("li",{parentName:"ul"},"nginx",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://nginx.org/en/docs/http/ngx_http_grpc_module.html"}),"ngx_http_grpc_module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.nginx.com/blog/nginx-1-13-10-grpc/"}),"Introducing gRPC Support with NGINX 1.13.10")))),(0,n.kt)("li",{parentName:"ul"},"envoy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/improbable-eng/grpc-web"}),"improbable-eng/grpc-web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528 go \u4f5c\u4e3a\u4ee3\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 unary \u548c server stream"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-web"}),"nice-grpc-web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e @improbable-eng/grpc-web"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u66f4\u52a0\u53cb\u597d"))))),(0,n.kt)("li",{parentName:"ul"},"kong ",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.konghq.com/hub/kong-inc/grpc-web/"}),"grpc-web")," \u63d2\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u539f\u59cb proto \u53ea\u80fd\u652f\u6301\u4e8c\u8fdb\u5236\u7f16\u7801",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpw-web+proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web-text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web-text+proto")))),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u539f\u59cb\u7f16\u7801\uff0c\u5219\u53ef\u4ee5\u652f\u6301\u8f6c\u7801",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web+json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web-text+json")))),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c kong \u662f\u901a\u8fc7\u6570\u636e\u5e93\u591a\u8282\u70b9\u90e8\u7f72\u7684\uff0c\u90a3\u6bd4\u8f83\u96be\u6709 proto \u6587\u4ef6")))),(0,n.kt)("h2",m({},{id:"awesome"}),"Awesome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"web pkg",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"google-protobuf - 230kB/46kB"),(0,n.kt)("li",{parentName:"ul"},"grpc-web - 35kB/13kB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"new MyService()")),(0,n.kt)("li",{parentName:"ul"},"xhr"))),(0,n.kt)("li",{parentName:"ul"},"@improbable-eng/grpc-web - 24kB/7kB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grpc.{unary,invoke,client}")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/protobufjs/protobuf.js"}),"protobufjs/protobuf.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/thesayyn/protoc-gen-ts"}),"thesayyn/protoc-gen-ts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 grpc-web"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/improbable-eng/ts-protoc-gen"}),"improbable-eng/ts-protoc-gen"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 grpc-web\uff0c\u5f00\u53d1\u4e0d\u6d3b\u8dc3"),(0,n.kt)("li",{parentName:"ul"},"fetch"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/bufbuild/protobuf-es"}),"bufbuild/protobuf-es"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u672a\u6765\u4f1a\u652f\u6301 RPC"))),(0,n.kt)("li",{parentName:"ul"},"@bufbuild/protobuf"))),(0,n.kt)("li",{parentName:"ul"},"nodejs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@grpc/grpc-js"),(0,n.kt)("li",{parentName:"ul"},"@grpc/proto-loader")))),(0,n.kt)("h2",m({},{id:"protocol"}),"Protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode=grpcwebtext"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Content-type: application/grpc-web-text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web-text+[proto,thrift]")),(0,n.kt)("li",{parentName:"ul"},"Base64 \u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 unary \u548c server streaming"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode=grpcweb"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Content-type: application/grpc-web+proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/grpc-web+[proto,json,thrift]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 +proto"))),(0,n.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 unary")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml",metastring:'title="buf.gen.yaml"',title:'"buf.gen.yaml"'}),"plugins:\n  - name: grpc-web\n    out: gen/web\n    opt: mode=grpcwebtext\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"import_style - closure,commonjs,commonjs+dts,typescript"),(0,n.kt)("li",{parentName:"ul"},"mode - grpcwebtext,grpcweb")))}d.isMDXComponent=!0}}]);