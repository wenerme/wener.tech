"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34672],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73369:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&m(e,r,t[r]);return e};const s={title:"Lit"},f="Lit",d={unversionedId:"web/framework/lit",id:"web/framework/lit",title:"Lit",description:"- lit/lit",source:"@site/../notes/web/framework/lit.md",sourceDirName:"web/framework",slug:"/web/framework/lit",permalink:"/notes/web/framework/lit",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/lit.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"Lit"},sidebar:"docs",previous:{title:"Ionic",permalink:"/notes/web/framework/ionic"},next:{title:"mocha",permalink:"/notes/web/framework/mocha"}},b={},y=[{value:"react",id:"react",level:2}],k={toc:y};function v(e){var t,r=e,{components:a}=r,m=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),m),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"lit"}),"Lit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/lit/lit"}),"lit/lit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Web Components"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://lit.dev/playground"}),"https://lit.dev/playground")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://lit.dev/docs/tools/production/#modern-only-build"}),"rollup.config.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://modern-web.dev/docs/dev-server/overview/"}),"@web/dev-server"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883"),(0,n.kt)("li",{parentName:"ul"},"esbuild + rollup")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import { html, css, LitElement } from 'lit';\nimport { customElement, property } from 'lit/decorators.js';\n\n@customElement('simple-greeting')\nexport class SimpleGreeting extends LitElement {\n  static styles = css`\n    p {\n      color: blue;\n    }\n  `;\n\n  @property()\n  name = 'Somebody';\n\n  render() {\n    return html`<p>Hello, ${this.name}!</p>`;\n  }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-html"}),'<body>\n  <simple-greeting name="World"></simple-greeting>\n</body>\n')),(0,n.kt)("h2",u({},{id:"react"}),"react"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/lit/lit/tree/main/packages/labs/react"}),"@lit-labs/react"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"createComponent - WebComponent -> React"),(0,n.kt)("li",{parentName:"ul"},"useController")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { createComponent } from '@lit-labs/react';\nimport { MyElement } from './my-element.js';\n\nexport const MyElementComponent = createComponent(React, 'my-element', MyElement, {\n  onactivate: 'activate',\n  onchange: 'change',\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<MyElementComponent active={isActive} onactivate={(e) => (isActive = e.active)} />\n")))}v.isMDXComponent=!0}}]);