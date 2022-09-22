"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28457],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),l=["components"],i={title:"Lit"},c=void 0,p={unversionedId:"web/framework/lit",id:"web/framework/lit",title:"Lit",description:"- lit/lit",source:"@site/notes/web/framework/lit.md",sourceDirName:"web/framework",slug:"/web/framework/lit",permalink:"/notes/web/framework/lit",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/lit.md",tags:[],version:"current",frontMatter:{title:"Lit"},sidebar:"docs",previous:{title:"jest",permalink:"/notes/web/framework/jest"},next:{title:"mocha",permalink:"/notes/web/framework/mocha"}},m={},u=[{value:"react",id:"react",level:2}],s={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lit/lit"},"lit/lit"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Web Components"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lit.dev/playground"},"https://lit.dev/playground")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lit.dev/docs/tools/production/#modern-only-build"},"rollup.config.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://modern-web.dev/docs/dev-server/overview/"},"@web/dev-server"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883"),(0,o.kt)("li",{parentName:"ul"},"esbuild + rollup")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { html, css, LitElement } from 'lit';\nimport { customElement, property } from 'lit/decorators.js';\n\n@customElement('simple-greeting')\nexport class SimpleGreeting extends LitElement {\n  static styles = css`\n    p {\n      color: blue;\n    }\n  `;\n\n  @property()\n  name = 'Somebody';\n\n  render() {\n    return html`<p>Hello, ${this.name}!</p>`;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <simple-greeting name="World"></simple-greeting>\n</body>\n')),(0,o.kt)("h2",{id:"react"},"react"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lit/lit/tree/main/packages/labs/react"},"@lit-labs/react"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"createComponent - WebComponent -> React"),(0,o.kt)("li",{parentName:"ul"},"useController")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { createComponent } from '@lit-labs/react';\nimport { MyElement } from './my-element.js';\n\nexport const MyElementComponent = createComponent(React, 'my-element', MyElement, {\n  onactivate: 'activate',\n  onchange: 'change',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<MyElementComponent active={isActive} onactivate={(e) => (isActive = e.active)} />\n")))}f.isMDXComponent=!0}}]);