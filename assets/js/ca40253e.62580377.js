"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23582],{62721:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var r=n(96600),a=n(27279),l=(n(59496),n(3905)),i=["components"],p={title:"nx"},o="NX",u={unversionedId:"web/dev/nx",id:"web/dev/nx",title:"nx",description:"- nrwl/nx",source:"@site/notes/web/dev/nx.md",sourceDirName:"web/dev",slug:"/web/dev/nx",permalink:"/notes/web/dev/nx",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/dev/nx.md",tags:[],version:"current",frontMatter:{title:"nx"},sidebar:"docs",previous:{title:"Lerna",permalink:"/notes/web/dev/lerna"},next:{title:"prettier",permalink:"/notes/web/dev/prettier"}},m={},k=[{value:"plugins",id:"plugins",level:2}],s={toc:k};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nx"},"NX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nrwl/nx"},"nrwl/nx"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u578b\u4ed3\u5e93\u6784\u5efa\u6846\u67b6"))),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a workspace \u4e3a\u4e00\u4e2a\u5927\u9879\u76ee - ",(0,l.kt)("inlineCode",{parentName:"li"},"@project"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4e0b\u5305\u542b\u591a\u4e2a app\u3001lib\u3001tool \u4e3a project"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u63d2\u4ef6\u63d0\u4f9b\u751f\u6210\u548c\u6784\u5efa\u6267\u884c\u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nrwl/nx/issues/4620"},"nrwl/nx#4620"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u597d\u53d1\u5e03\u5305")))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5168\u5c40\u4e00\u4e2a package.json \u800c\u4e0d\u662f\u6bcf\u4e2a\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nrwl/nx/issues/1777"},"#1777")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-nx-workspace --name demo --preset empty --packageManager npm --nx-cloud false\n\n# \u6240\u6709\u63d2\u4ef6\nnx list\n\nnpm add -D @nrwl/next @nrwl/react\nnpx nx g @nrwl/next:app demo\n\n# import {} from '@myproject/mylibrary'\nnpx nx generate @nrwl/react:library mylibrary --style styled-component --component false\n\nnpx nx g @nrwl/react:storybook-configuration project-name\nnpx nx run project-name:storybook\n")),(0,l.kt)("h2",{id:"plugins"},"plugins"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"plugin"),(0,l.kt)("th",{parentName:"tr",align:"right"},"include"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/web"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders,generators"),(0,l.kt)("td",{parentName:"tr",align:null},"Web Component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/react"),(0,l.kt)("td",{parentName:"tr",align:"right"},"generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/nest"),(0,l.kt)("td",{parentName:"tr",align:"right"},"executors,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/angular"),(0,l.kt)("td",{parentName:"tr",align:"right"},"generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/node"),(0,l.kt)("td",{parentName:"tr",align:"right"},"executors,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/express"),(0,l.kt)("td",{parentName:"tr",align:"right"},"executors,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/next"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/storybook"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/cypress"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/jest"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/linter"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/workspace"),(0,l.kt)("td",{parentName:"tr",align:"right"},"builders,generators"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@nrwl/nx-plugin"),(0,l.kt)("td",{parentName:"tr",align:"right"},"executors,generators"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"generator",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"app,application"),(0,l.kt)("li",{parentName:"ul"},"c,component"),(0,l.kt)("li",{parentName:"ul"},"component-story"),(0,l.kt)("li",{parentName:"ul"},"lib,library"),(0,l.kt)("li",{parentName:"ul"},"redux"),(0,l.kt)("li",{parentName:"ul"},"stories"),(0,l.kt)("li",{parentName:"ul"},"storybook-configuration"),(0,l.kt)("li",{parentName:"ul"},"configuration",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"storybook"))),(0,l.kt)("li",{parentName:"ul"},"page",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"next"))))),(0,l.kt)("li",{parentName:"ul"},"executor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"build"),(0,l.kt)("li",{parentName:"ul"},"server"),(0,l.kt)("li",{parentName:"ul"},"export"),(0,l.kt)("li",{parentName:"ul"},"dev-server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"web"))),(0,l.kt)("li",{parentName:"ul"},"file-server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"web"))),(0,l.kt)("li",{parentName:"ul"},"package",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"web")))))))}d.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{kt:function(){return s}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,c=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(c,i(i({ref:e},k),{},{components:n})):r.createElement(c,i({ref:e},k))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"}}]);