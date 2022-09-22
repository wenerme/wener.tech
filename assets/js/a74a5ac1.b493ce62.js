"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9742],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),s=["components"],o={title:"styled-jsx"},i="styled-jsx",c={unversionedId:"web/react/styled-jsx",id:"web/react/styled-jsx",title:"styled-jsx",description:"- vercel/styled-jsx",source:"@site/../notes/web/react/styled-jsx.md",sourceDirName:"web/react",slug:"/web/react/styled-jsx",permalink:"/notes/web/react/styled-jsx",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/react/styled-jsx.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"styled-jsx"},sidebar:"docs",previous:{title:"react-window",permalink:"/notes/web/react/react-window"},next:{title:"umijs",permalink:"/notes/web/react/umijs"}},u={},p=[{value:"tailwind",id:"tailwind",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"styled-jsx"},"styled-jsx"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/styled-jsx"},"vercel/styled-jsx"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u652f\u6301\u4f20\u9012\u6837\u5f0f\u5230 children ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/styled-jsx/issues/573"},"#573"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".ment-item > a")," \u5982\u679c a \u662f\u5728\u4e00\u4e2a\u7ec4\u4ef6\u91cc\uff0c\u65e0\u6cd5\u5f71\u54cd\u5230"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},".menu-item > :global(a)")),(0,l.kt)("li",{parentName:"ul"},"\u6216\u8005\u4f20\u9012 css.resolve \u8fd4\u56de\u7684 className \u5230\u5b50\u7ec4\u4ef6"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import css from 'styled-jsx/css';\n\n// \u5168\u5c40\u6837\u5f0f - \u4e0d\u4f7f\u7528 className \u9650\u5b9a\nconst body = css.global`\n  body {\n    margin: 0;\n  }\n`;\n\n// babel-plugin-macros \u53ef\u4f5c\u4e3a babel macros\nconst { className, styles } = css.resolve`\n  a {\n    color: green;\n  }\n`;\nexport default () => (\n  <div>\n    <style jsx>{`\n      /* \u901a\u8fc7\u4e0d\u4fee\u9970 a \u5f71\u54cd\u5b50\u7ec4\u4ef6 */\n      div > :global(a) {\n        // \u901a\u8fc7 styled-jsx-plugin-postcss \u4f7f\u7528 postcss - \u4f7f\u7528 tailwind\n        @apply text-red;\n      }\n    `}</style>\n\n    {/* \u901a\u8fc7\u4f20\u9012 className \u5f71\u54cd\u5b50\u7ec4\u4ef6 */}\n    <Link className={className}>About</Link>\n    {styles}\n\n    {/* \u6e32\u67d3 global */}\n    <style jsx global>\n      {body}\n    </style>\n  </div>\n);\n")),(0,l.kt)("h2",{id:"tailwind"},"tailwind"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528\u540e\u4e0d\u4f1a\u4f7f\u7528 SWC \u7f16\u8bd1 - \u63a8\u8350\u4f7f\u7528 css module")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc"',title:'".babelrc"'},'{\n  "presets": [\n    [\n      "next/babel",\n      {\n        "styled-jsx": {\n          "plugins": ["styled-jsx-plugin-postcss"]\n        }\n      }\n    ]\n  ]\n}\n')))}m.isMDXComponent=!0}}]);