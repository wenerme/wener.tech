"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16094],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return s}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),u=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(r),s=a,d=k["".concat(o,".").concat(s)]||k[s]||c[s]||l;return r?n.createElement(d,i(i({ref:e},m),{},{components:r})):n.createElement(d,i({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},82556:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&m(t,r,e[r]);if(p)for(var r of p(e))u.call(e,r)&&m(t,r,e[r]);return t};const k={title:"nx"},s="NX",d={unversionedId:"web/dev/nx",id:"web/dev/nx",title:"nx",description:"- nrwl/nx",source:"@site/../notes/web/dev/nx.md",sourceDirName:"web/dev",slug:"/web/dev/nx",permalink:"/notes/web/dev/nx",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/nx.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1636785414,formattedLastUpdatedAt:"Nov 13, 2021",frontMatter:{title:"nx"},sidebar:"docs",previous:{title:"Lerna",permalink:"/notes/web/dev/lerna"},next:{title:"pnpm",permalink:"/notes/web/dev/pnpm"}},g={},N=[{value:"plugins",id:"plugins",level:2}],b={toc:N};function f(t){var e,r=t,{components:a}=r,m=((t,e)=>{var r={};for(var n in t)o.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=c(c({},b),m),l(e,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"nx"}),"NX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/nrwl/nx"}),"nrwl/nx"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5927\u578b\u4ed3\u5e93\u6784\u5efa\u6846\u67b6"))),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a workspace \u4e3a\u4e00\u4e2a\u5927\u9879\u76ee - ",(0,n.kt)("inlineCode",{parentName:"li"},"@project"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4e0b\u5305\u542b\u591a\u4e2a app\u3001lib\u3001tool \u4e3a project"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u63d2\u4ef6\u63d0\u4f9b\u751f\u6210\u548c\u6784\u5efa\u6267\u884c\u80fd\u529b"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/nrwl/nx/issues/4620"}),"nrwl/nx#4620"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u597d\u53d1\u5e03\u5305")))))),(0,n.kt)("admonition",c({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5168\u5c40\u4e00\u4e2a package.json \u800c\u4e0d\u662f\u6bcf\u4e2a\u4e00\u4e2a ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/nrwl/nx/issues/1777"}),"#1777")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npx create-nx-workspace --name demo --preset empty --packageManager npm --nx-cloud false\n\n# \u6240\u6709\u63d2\u4ef6\nnx list\n\nnpm add -D @nrwl/next @nrwl/react\nnpx nx g @nrwl/next:app demo\n\n# import {} from '@myproject/mylibrary'\nnpx nx generate @nrwl/react:library mylibrary --style styled-component --component false\n\nnpx nx g @nrwl/react:storybook-configuration project-name\nnpx nx run project-name:storybook\n")),(0,n.kt)("h2",c({},{id:"plugins"}),"plugins"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"plugin"),(0,n.kt)("th",c({parentName:"tr"},{align:"right"}),"include"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/web"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Web Component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/react"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/nest"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"executors,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/angular"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/node"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"executors,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/express"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"executors,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/next"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/storybook"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/cypress"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/jest"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/linter"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/workspace"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"builders,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"@nrwl/nx-plugin"),(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"executors,generators"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"generator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"app,application"),(0,n.kt)("li",{parentName:"ul"},"c,component"),(0,n.kt)("li",{parentName:"ul"},"component-story"),(0,n.kt)("li",{parentName:"ul"},"lib,library"),(0,n.kt)("li",{parentName:"ul"},"redux"),(0,n.kt)("li",{parentName:"ul"},"stories"),(0,n.kt)("li",{parentName:"ul"},"storybook-configuration"),(0,n.kt)("li",{parentName:"ul"},"configuration",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"storybook"))),(0,n.kt)("li",{parentName:"ul"},"page",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"next"))))),(0,n.kt)("li",{parentName:"ul"},"executor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"build"),(0,n.kt)("li",{parentName:"ul"},"server"),(0,n.kt)("li",{parentName:"ul"},"export"),(0,n.kt)("li",{parentName:"ul"},"dev-server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"web"))),(0,n.kt)("li",{parentName:"ul"},"file-server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"web"))),(0,n.kt)("li",{parentName:"ul"},"package",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"web")))))))}f.isMDXComponent=!0}}]);