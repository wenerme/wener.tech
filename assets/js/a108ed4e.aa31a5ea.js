"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18362],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),h=a,g=s["".concat(l,".").concat(h)]||s[h]||d[h]||o;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},37353:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),p=["components"],i={title:"dgraph"},l="dgraph",c={unversionedId:"db/graph/dgraph",id:"db/graph/dgraph",title:"dgraph",description:"- \u5e95\u5c42\u5b58\u50a8 dgraph-io/badger",source:"@site/../notes/db/graph/dgraph.md",sourceDirName:"db/graph",slug:"/db/graph/dgraph",permalink:"/notes/db/graph/dgraph",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/graph/dgraph.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628617278,formattedLastUpdatedAt:"Aug 10, 2021",frontMatter:{title:"dgraph"},sidebar:"docs",previous:{title:"Cayley",permalink:"/notes/db/graph/cayley"},next:{title:"GraphDB Awesome",permalink:"/notes/db/graph/graph-awesome"}},u={},d=[],s={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dgraph"},"dgraph"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u5b58\u50a8 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dgraph-io/badger"},"dgraph-io/badger")),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dgraph.io/docs/migration/dgraph-compared-to-other-databases/"},"Dgraph Compared to Other Databases")))),(0,o.kt)("li",{parentName:"ul"},"application/dql - \u6269\u5c55\u540e\u7684 GraphQL"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Dgraph Zero - dgraph zero - \u63a7\u5236\u6570\u636e\u5e93\u96c6\u7fa4"),(0,o.kt)("li",{parentName:"ul"},"Dgraph Alpha - dgraph alpha - \u63d0\u4f9b\u6570\u636e\u63a5\u53e3\u548c\u7ba1\u7406\u63a5\u53e3"),(0,o.kt)("li",{parentName:"ul"},"Ratel - dgraph-ratel")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# standalone \u7528\u4e8e\u6d4b\u8bd5 - \u521d\u6b21\u5c1d\u8bd5\u5931\u8d25\n# Ratel UI http://localhost:8000\n# API http://localhost:8080\ndocker run --rm -it \\\n  -p "8080:8080" -p "9080:9080" -p "8000:8000" \\\n  -v $PWD/dgraph:/dgraph \\\n  dgraph/standalone\n')))}h.isMDXComponent=!0}}]);