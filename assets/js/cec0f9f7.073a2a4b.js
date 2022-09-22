"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6400],{49613:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return f}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},g=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return t?n.createElement(m,l(l({ref:r},g),{},{components:t})):n.createElement(m,l({ref:r},g))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96587:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=t(96600),a=t(27279),o=(t(59496),t(49613)),l=["components"],i={title:"goreleaser"},s="goreleaser",u={unversionedId:"languages/go/lib/goreleaser",id:"languages/go/lib/goreleaser",title:"goreleaser",description:"- goreleaser/goreleaser",source:"@site/../notes/languages/go/lib/goreleaser.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/goreleaser",permalink:"/notes/languages/go/lib/goreleaser",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/goreleaser.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"goreleaser"},sidebar:"docs",previous:{title:"go-zero",permalink:"/notes/languages/go/lib/go-zero"},next:{title:"GORM",permalink:"/notes/languages/go/lib/gorm"}},g={},c=[],p={toc:c};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goreleaser"},"goreleaser"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/goreleaser/goreleaser"},"goreleaser/goreleaser"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u65e0 cgo \u65f6\u4ea4\u53c9\u7f16\u8bd1"))),(0,o.kt)("li",{parentName:"ul"},"CGO \u95ee\u9898 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/goreleaser/goreleaser/issues/708"},"goreleaser/goreleaser#708"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"monorepo \u4e3a \u6536\u8d39 \u529f\u80fd"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# go install github.com/goreleaser/goreleaser@latest\nbrew install goreleaser\n\ngoreleaser init\n\ngoreleaser build\ngoreleaser release --snapshot --rm-dist\n\ngoreleaser check\ngoreleaser build --single-target\n\n# \u57fa\u4e8e git tag \u505a github release\n# export GITHUB_TOKEN="YOUR_GH_TOKEN"\n# --skip-publish\ngoreleaser release\n')))}f.isMDXComponent=!0}}]);