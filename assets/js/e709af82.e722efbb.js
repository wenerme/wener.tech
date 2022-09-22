"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27276],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(96600),o=n(27279),i=(n(59496),n(49613)),a=["components"],c={title:"Github Action"},u="Github Action",s={unversionedId:"service/forge/github-action",id:"service/forge/github-action",title:"Github Action",description:"- actions/virtual-environments",source:"@site/../notes/service/forge/github-action.md",sourceDirName:"service/forge",slug:"/service/forge/github-action",permalink:"/notes/service/forge/github-action",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/forge/github-action.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Github Action"},sidebar:"docs",previous:{title:"Gitea",permalink:"/notes/service/forge/gitea"},next:{title:"Github FAQ",permalink:"/notes/service/forge/github-faq"}},l={},p=[{value:"compile: version does not match go tool version",id:"compile-version-does-not-match-go-tool-version",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-action"},"Github Action"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/actions/virtual-environments"},"actions/virtual-environments"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5141\u8bb8\u9519\u8bef ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/actions/toolkit/issues/399"},"#399")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"golangci-lint-action CI \u8017\u65f6\u975e\u5e38\u957f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/golangci/golangci-lint-action/issues/297"},"#297")))),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"compile-version-does-not-match-go-tool-version"},"compile: version does not match go tool version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run CI\n  run: |\n    export PATH=${GOROOT}/bin:$PATH\n    go version\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/actions/setup-go/issues/107#issuecomment-854071850"},"https://github.com/actions/setup-go/issues/107#issuecomment-854071850"))))}f.isMDXComponent=!0}}]);