"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6400],{49613:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||g[f]||a;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62500:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&c(e,t,r[t]);return e};const p={title:"goreleaser"},f="goreleaser",m={unversionedId:"languages/go/lib/goreleaser",id:"languages/go/lib/goreleaser",title:"goreleaser",description:"- goreleaser/goreleaser",source:"@site/../notes/languages/go/lib/goreleaser.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/goreleaser",permalink:"/notes/languages/go/lib/goreleaser",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/goreleaser.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634220239,formattedLastUpdatedAt:"Oct 14, 2021",frontMatter:{title:"goreleaser"},sidebar:"docs",previous:{title:"go-zero",permalink:"/notes/languages/go/lib/go-zero"},next:{title:"GORM",permalink:"/notes/languages/go/lib/gorm"}},b={},d=[],y={toc:d};function O(e){var r,t=e,{components:o}=t,c=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=g(g({},y),c),a(r,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",g({},{id:"goreleaser"}),"goreleaser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"https://github.com/goreleaser/goreleaser"}),"goreleaser/goreleaser"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0 cgo \u65f6\u4ea4\u53c9\u7f16\u8bd1"))),(0,n.kt)("li",{parentName:"ul"},"CGO \u95ee\u9898 ",(0,n.kt)("a",g({parentName:"li"},{href:"https://github.com/goreleaser/goreleaser/issues/708"}),"goreleaser/goreleaser#708"))),(0,n.kt)("admonition",g({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"monorepo \u4e3a \u6536\u8d39 \u529f\u80fd"))),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-bash"}),'# go install github.com/goreleaser/goreleaser@latest\nbrew install goreleaser\n\ngoreleaser init\n\ngoreleaser build\ngoreleaser release --snapshot --rm-dist\n\ngoreleaser check\ngoreleaser build --single-target\n\n# \u57fa\u4e8e git tag \u505a github release\n# export GITHUB_TOKEN="YOUR_GH_TOKEN"\n# --skip-publish\ngoreleaser release\n')))}O.isMDXComponent=!0}}]);