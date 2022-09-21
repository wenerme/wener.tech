"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52215],{38034:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(96600),o=r(27279),a=(r(59496),r(3905)),i=["components"],s={title:"skopeo"},c=void 0,p={unversionedId:"devops/container/skopeo",id:"devops/container/skopeo",title:"skopeo",description:"- containers/skopeo",source:"@site/notes/devops/container/skopeo.md",sourceDirName:"devops/container",slug:"/devops/container/skopeo",permalink:"/notes/devops/container/skopeo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/skopeo.md",tags:[],version:"current",frontMatter:{title:"skopeo"},sidebar:"docs",previous:{title:"sinker",permalink:"/notes/devops/container/sinker"},next:{title:"DevOps \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/devops-faq"}},u={},l=[],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containers/skopeo"},"containers/skopeo"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install skopeo\n\nskopeo inspect docker://registry-1.docker.io/wener/base:latest\n\nskopeo copy docker://registry-1.docker.io/wener/base:latest oci-archive:base.tar\n# \u76ee\u5f55\n# skopeo copy docker://registry-1.docker.io/wener/base:latest dir:$PWD/base\ndocker import base.tar\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);