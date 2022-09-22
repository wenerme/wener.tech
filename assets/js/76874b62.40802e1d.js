"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48011],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,f=u["".concat(c,".").concat(v)]||u[v]||m[v]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39773:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),i=["components"],l={title:"semver"},c="semver",p={unversionedId:"dev/practice/semver",id:"dev/practice/semver",title:"semver",description:"- semver.org",source:"@site/../notes/dev/practice/semver.md",sourceDirName:"dev/practice",slug:"/dev/practice/semver",permalink:"/notes/dev/practice/semver",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/practice/semver.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"semver"},sidebar:"docs",previous:{title:"\u5c0f\u7c73",permalink:"/notes/dev/platform/xiaomi"},next:{title:"HTTP 2",permalink:"/notes/dev/protocol/http2"}},s={},m=[{value:"Conventional Commits",id:"conventional-commits",level:2}],u={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"semver"},"semver"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://semver.org/"},"semver.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/semver/semver"},"semver/semver"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/semver/semver/master/semver.svg"},"semver.svg")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://0ver.org/"},"0ver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets/changesets"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"([1-9]\\d*|0).([1-9]\\d*|0).([1-9]\\d*|0)\nmajor        minor        patch\n\npre-release:\n-\n0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*\n.\n0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*\n\nbuild:\n+\n[a-zA-Z0-9-]*\n.\n[a-zA-Z0-9-]*\n")),(0,o.kt)("h2",{id:"conventional-commits"},"Conventional Commits"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"fix, feat"),(0,o.kt)("li",{parentName:"ul"},"build, chore, ci, docs, style, refactor, perf, test"),(0,o.kt)("li",{parentName:"ul"},"revert + Refs commit-id"))),(0,o.kt)("li",{parentName:"ul"},"BREAKING CHANGE footer \u63cf\u8ff0\u53d8\u5316 \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"<type>[scope]!"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fix: abc\n\nzyx\n\nReviewed-by: Z\nRefs: #123\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://conventionalcommits.org/"},"conventionalcommits"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/conventional-changelog/standard-version"},"conventional-changelog/standard-version"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u751f\u6210 CHANGELOG")))))))}v.isMDXComponent=!0}}]);