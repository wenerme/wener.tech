"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82008],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return s}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),s=o,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71936:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return w}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&p(e,t,r[t]);return e};const d={title:"workerd"},s="workerd",m={unversionedId:"web/dev/workerd",id:"web/dev/workerd",title:"workerd",description:"- cloudflare/workerd",source:"@site/../notes/web/dev/workerd.md",sourceDirName:"web/dev",slug:"/web/dev/workerd",permalink:"/notes/web/dev/workerd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/workerd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"workerd"},sidebar:"docs",previous:{title:"Web Dev FAQ",permalink:"/notes/web/dev/faq"},next:{title:"DOM FAQ",permalink:"/notes/web/dom-faq"}},b={},w=[],y={toc:w};function v(e){var r,t=e,{components:o}=t,p=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=f(f({},y),p),a(r,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"workerd"}),"workerd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/cloudflare/workerd"}),"cloudflare/workerd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, C++, Bazel"),(0,n.kt)("li",{parentName:"ul"},"Cloudflare's JavaScript/Wasm Runtime"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32994723"}),"HN"))))),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"npx wrangler dev --experimental-local\n")))}v.isMDXComponent=!0}}]);