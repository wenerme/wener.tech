"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52876],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,v=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"onedev"},l=void 0,u={unversionedId:"service/forge/onedev",id:"service/forge/onedev",title:"onedev",description:"- https://code.onedev.io/projects/160",source:"@site/notes/service/forge/onedev.md",sourceDirName:"service/forge",slug:"/service/forge/onedev",permalink:"/notes/service/forge/onedev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/onedev.md",tags:[],version:"current",frontMatter:{title:"onedev"},sidebar:"docs",previous:{title:"Gitlab SAST",permalink:"/notes/service/forge/gitlab/gitlab-sast"},next:{title:"Forum Awesome",permalink:"/notes/service/forum/forum-awesome"}},p={},s=[],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.onedev.io/projects/160"},"https://code.onedev.io/projects/160")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/theonedev/onedev"},"theonedev/onedev"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT, Java"),(0,a.kt)("li",{parentName:"ul"},"Kanban"),(0,a.kt)("li",{parentName:"ul"},"CI/CD"),(0,a.kt)("li",{parentName:"ul"},"Code Search"),(0,a.kt)("li",{parentName:"ul"},"Service Desk"))),(0,a.kt)("li",{parentName:"ul"},"manual ",(0,a.kt)("a",{parentName:"li",href:"https://code.onedev.io/projects/162"},"https://code.onedev.io/projects/162"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# http://localhost:6610\ndocker run -it --rm \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v $(pwd)/onedev:/opt/onedev \\\n  -p 6610:6610 -p 6611:6611 \\\n  1dev/server\n")))}d.isMDXComponent=!0}}]);