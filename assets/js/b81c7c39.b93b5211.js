"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81443],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,w=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(w,o(o({ref:t},u),{},{components:r})):n.createElement(w,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66650:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return d}});var n=r(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&u(e,r,t[r]);return e};const f={title:"twirp"},m="twirp",w={unversionedId:"service/api/twirp",id:"service/api/twirp",title:"twirp",description:"- twitchtv/twirp",source:"@site/../notes/service/api/twirp.md",sourceDirName:"service/api",slug:"/service/api/twirp",permalink:"/notes/service/api/twirp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/twirp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1654595483,formattedLastUpdatedAt:"Jun 7, 2022",frontMatter:{title:"twirp"},sidebar:"docs",previous:{title:"smithy",permalink:"/notes/service/api/smithy"},next:{title:"URQL",permalink:"/notes/service/api/urql"}},v={},d=[{value:"Twirp Go",id:"twirp-go",level:2}],y={toc:d};function b(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"twirp"}),"twirp"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/twitchtv/twirp"}),"twitchtv/twirp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"unary RPC"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 JSON \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 GRPC \u5b9a\u4e49\uff0c\u8d70 HTTP \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u6d3b\u8dc3"))),(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u652f\u6301\u8bed\u8a00: PHP, Ruby, Go"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://twitchtv.github.io/twirp/docs/spec_v7.html"}),"SpecV7"))))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 streaming ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/twitchtv/twirp/issues/3"}),"#3")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"POST [<prefix>]/[<package>.]<Service>/<Method>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"prefix \u9ed8\u8ba4 /twirp - twirp.WithServerPathPrefix")),(0,n.kt)("h2",s({},{id:"twirp-go"}),"Twirp Go"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f1a\u751f\u6210 JSON \u548c PB \u7248",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New{{Service}}ProtobufClient"),(0,n.kt)("li",{parentName:"ul"},"New{{Service}}JSONClient")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"go install github.com/twitchtv/twirp/protoc-gen-twirp@latest\n")))}b.isMDXComponent=!0}}]);