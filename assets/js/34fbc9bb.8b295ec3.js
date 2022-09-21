"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40299],{3398:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(96600),o=r(27279),a=(r(59496),r(3905)),s=["components"],i={title:"Storybook"},l=void 0,u={unversionedId:"web/ui/storybook",id:"web/ui/storybook",title:"Storybook",description:"- nextjs/examples/with-storybook",source:"@site/notes/web/ui/storybook.md",sourceDirName:"web/ui",slug:"/web/ui/storybook",permalink:"/notes/web/ui/storybook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/ui/storybook.md",tags:[],version:"current",frontMatter:{title:"Storybook"},sidebar:"docs",previous:{title:"Playroom",permalink:"/notes/web/ui/playroom"},next:{title:"svgo",permalink:"/notes/web/ui/svgo"}},c={},p=[{value:"\u914d\u7f6e",id:"configuration",level:2}],m={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/tree/canary/examples/with-storybook"},"nextjs/examples/with-storybook")),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6 - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/tree/next/addons"},"addons"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"actions - \u7eaa\u5f55\u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"links - \u5185\u90e8\u8df3\u8f6c"),(0,a.kt)("li",{parentName:"ul"},"storysource - \u67e5\u770b\u6e90\u7801"),(0,a.kt)("li",{parentName:"ul"},"viewport - \u4e0d\u540c\u8bbe\u5907\u89c6\u56fe"),(0,a.kt)("li",{parentName:"ul"},"toolbars - \u5de5\u5177\u680f\u3001\u4e0a\u4e0b\u6587\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"docs - \u751f\u6210\u6587\u6863",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5916\u90e8\u5e93 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/issues/10034"},"#10034")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reactjs/react-docgen/issues/416"},"reactjs/react-docgen#416")))),(0,a.kt)("li",{parentName:"ul"},"essentials - actions, backgrounds, controls, docs, measure, outline, toolbars, viewport"))),(0,a.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"bundle \u8fc7\u5927 - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/issues/6391#issuecomment-530262331"},"#6391"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"webpack \u62c6\u5206"))),(0,a.kt)("li",{parentName:"ul"},"npm 7+react 17 \u517c\u5bb9\u95ee\u9898 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/issues/14065"},"#14065")))),(0,a.kt)("li",{parentName:"ul"},"Component Story Format (CSF) - Storybook",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://storybook.js.org/docs/react/api/csf"},"https://storybook.js.org/docs/react/api/csf"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316\nnpx sb init\n\n# \u624b\u52a8\u5b89\u88c5\nyarn add --dev @storybook/{react,addons}\nyarn add --dev @storybook/addon-{actions,links,knob}\n")),(0,a.kt)("h2",{id:"configuration"},"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".storybook/manager.js - \u63a7\u5236 StoryBook UI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".storybook/preview.js"',title:'".storybook/preview.js"'},"// \u5168\u5c40\u6837\u5f0f\nimport '../src/styles/globals.css';\n\nexport const parameters = {\n  actions: {argTypesRegex: '^on[A-Z].*'},\n  controls: {\n    matchers: {\n      color: /(background|color)$/i,\n      date: /Date$/,\n    },\n  },\n\n  // \u5168\u5c40\u53c2\u6570\n  backgrounds: {\n    values: [\n      {name: 'red', value: '#f00'},\n      {name: 'green', value: '#0f0'},\n    ],\n  },\n};\n\nimport React from 'react';\n\nexport const decorators = [\n  (Story) => (\n    <div style={{margin: '3em'}}>\n      <Story />\n    </div>\n  ),\n];\n\nexport const globalTypes = {}\n")))}b.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),b=o,k=m["".concat(l,".").concat(b)]||m[b]||c[b]||a;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);