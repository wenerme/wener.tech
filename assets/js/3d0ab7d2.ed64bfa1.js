"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6339],{79978:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(96600),i=r(27279),a=(r(59496),r(3905)),p=["components"],o={title:"twirp"},l=void 0,c={unversionedId:"service/api/twirp",id:"service/api/twirp",title:"twirp",description:"- twitchtv/twirp",source:"@site/notes/service/api/twirp.md",sourceDirName:"service/api",slug:"/service/api/twirp",permalink:"/notes/service/api/twirp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/twirp.md",tags:[],version:"current",frontMatter:{title:"twirp"},sidebar:"docs",previous:{title:"smithy",permalink:"/notes/service/api/smithy"},next:{title:"URQL",permalink:"/notes/service/api/urql"}},u={},s=[{value:"Twirp Go",id:"twirp-go",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/twitchtv/twirp"},"twitchtv/twirp"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"unary RPC"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 JSON \u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 GRPC \u5b9a\u4e49\uff0c\u8d70 HTTP \u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u6d3b\u8dc3"))),(0,a.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u652f\u6301\u8bed\u8a00: PHP, Ruby, Go"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitchtv.github.io/twirp/docs/spec_v7.html"},"SpecV7"))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 streaming ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/twitchtv/twirp/issues/3"},"#3")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST [<prefix>]/[<package>.]<Service>/<Method>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefix \u9ed8\u8ba4 /twirp - twirp.WithServerPathPrefix")),(0,a.kt)("h2",{id:"twirp-go"},"Twirp Go"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f1a\u751f\u6210 JSON \u548c PB \u7248",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"New{{Service}}ProtobufClient"),(0,a.kt)("li",{parentName:"ul"},"New{{Service}}JSONClient")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/twitchtv/twirp/protoc-gen-twirp@latest\n")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,w=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(w,p(p({ref:t},s),{},{components:r})):n.createElement(w,p({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);