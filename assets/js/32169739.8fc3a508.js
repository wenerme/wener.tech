"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92637],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||c;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={title:"mCaptcha"},f="mCaptcha",h={unversionedId:"service/selfhost/mcaptcha",id:"service/selfhost/mcaptcha",title:"mCaptcha",description:"- mCaptcha/mCaptcha",source:"@site/../notes/service/selfhost/mcaptcha.md",sourceDirName:"service/selfhost",slug:"/service/selfhost/mcaptcha",permalink:"/notes/service/selfhost/mcaptcha",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/selfhost/mcaptcha.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"mCaptcha"},sidebar:"docs",previous:{title:"SelfHost",permalink:"/notes/service/selfhost/"},next:{title:"PhotoPrism",permalink:"/notes/service/selfhost/photoprism"}},d={},b=[{value:"Client",id:"client",level:2}],y={toc:b};function v(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),s),c(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"mcaptcha"}),"mCaptcha"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/mCaptcha/mCaptcha"}),"mCaptcha/mCaptcha"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AGPL-3.0, Rust"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 postgres, redis"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u7ad9\u70b9")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# https://github.com/mCaptcha/mCaptcha/blob/master/config/default.toml\n# -e MCAPTCHA_SERVER_COOKIE_SECRET=\ndocker run --rm -it \\\n  -p 7000:7000 \\\n  -e DATABASE_URL=postgres://mcaptcha:password@postgres:5432/mcaptcha \\\n  -e MCAPTCHA_REDIS_URL=redis://redis/ \\\n  -e RUST_LOG=debug \\\n  -e MCAPTCHA_DEBUG=true \\\n  -e PORT=7000 \\\n  --name mcaptcha mcaptcha/mcaptcha\n")),(0,n.kt)("h2",u({},{id:"client"}),"Client"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@mcaptcha/core-glue"),(0,n.kt)("li",{parentName:"ul"},"React",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/mCaptcha/glue/blob/master/packages/react/src/index.tsx"}),"https://github.com/mCaptcha/glue/blob/master/packages/react/src/index.tsx")))),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 iframe \u5d4c\u5165"),(0,n.kt)("li",{parentName:"ul"},"\u6210\u529f\u540e\u62ff\u5230\u4e00\u4e2a token\uff0c\u901a\u8fc7 form \u63d0\u4ea4\u7ed9\u670d\u52a1\u7aef")))}v.isMDXComponent=!0}}]);