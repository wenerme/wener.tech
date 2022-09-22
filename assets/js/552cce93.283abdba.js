"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38896],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,g=f["".concat(p,".").concat(m)]||f[m]||s[m]||c;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92270:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var n=t(49613),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&u(e,t,r[t]);return e};const f={title:"grpcurl"},m="grpcurl",g={unversionedId:"service/api/grpcurl",id:"service/api/grpcurl",title:"grpcurl",description:"grpcui",source:"@site/../notes/service/api/grpcurl.md",sourceDirName:"service/api",slug:"/service/api/grpcurl",permalink:"/notes/service/api/grpcurl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpcurl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"grpcurl"},sidebar:"docs",previous:{title:"gRPC",permalink:"/notes/service/api/grpc"},next:{title:"OpenAPI",permalink:"/notes/service/api/openapi"}},d={},y=[{value:"grpcui",id:"grpcui",level:2}],v={toc:y};function b(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},v),u),c(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"grpcurl"}),"grpcurl"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# macOS\nbrew install grpcurl\n\n# -plaintext\ngrpcurl grpc.server.com:443 -d \'{"name":"Wener"}\' my.custom.server.Service/Method\n\ngrpcurl localhost:8787 list\ngrpcurl -protoset my-protos.bin list\ngrpcurl -import-path ../protos -proto my-stuff.proto list\ngrpcurl localhost:8787 list my.custom.server.Service\n')),(0,n.kt)("h2",s({},{id:"grpcui"}),"grpcui"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"grpcui -use-reflection -plaintext 127.0.0.1:18088\ngrpcui -use-reflection -base-path / -plaintext localhost:18088\n")))}b.isMDXComponent=!0}}]);