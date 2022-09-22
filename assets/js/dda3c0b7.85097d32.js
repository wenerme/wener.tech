"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96269],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return x}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&d(e,n,t[n]);return e};const m={title:"\u54cd\u5e94\u5f0f\u65ad\u70b9"},u="\u54cd\u5e94\u5f0f\u65ad\u70b9",f={unversionedId:"dev/design/design-breakpoint",id:"dev/design/design-breakpoint",title:"\u54cd\u5e94\u5f0f\u65ad\u70b9",description:"- breakpoints",source:"@site/../notes/dev/design/design-breakpoint.md",sourceDirName:"dev/design",slug:"/dev/design/design-breakpoint",permalink:"/notes/dev/design/design-breakpoint",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/design/design-breakpoint.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637943795,formattedLastUpdatedAt:"Nov 26, 2021",frontMatter:{title:"\u54cd\u5e94\u5f0f\u65ad\u70b9"},sidebar:"docs",previous:{title:"Code FAQ",permalink:"/notes/dev/code-faq"},next:{title:"Design Builder",permalink:"/notes/dev/design/design-builder"}},g={},x=[{value:"tailwindcss",id:"tailwindcss",level:2},{value:"bootstrap",id:"bootstrap",level:2}],b={toc:x};function v(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),d),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"\u54cd\u5e94\u5f0f\u65ad\u70b9"}),"\u54cd\u5e94\u5f0f\u65ad\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"breakpoints")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'title="react grid - my prefer"',title:'"react',grid:!0,"-":!0,my:!0,'prefer"':!0}),'{\n  "breakpoints": { "lg": 1200, "md": 996, "sm": 768, "xs": 480, "xxs": 0 },\n  "columns": { "lg": 24, "md": 12, "sm": 6, "xs": 4, "xxs": 2 }\n}\n')),(0,r.kt)("h2",c({},{id:"tailwindcss"}),"tailwindcss"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://tailwindcss.com/docs/breakpoints"}),"https://tailwindcss.com/docs/breakpoints"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'}),"module.exports = {\n  theme: {\n    screens: {\n      // default\n      // ==========\n      sm: '640px',\n      // => @media (min-width: 640px) { ... }\n\n      md: '768px',\n      // => @media (min-width: 768px) { ... }\n\n      lg: '1024px',\n      // => @media (min-width: 1024px) { ... }\n\n      xl: '1280px',\n      // => @media (min-width: 1280px) { ... }\n\n      '2xl': '1536px',\n      // => @media (min-width: 1536px) { ... }\n\n      // can do\n      // ==========\n      tablet: '640px',\n      // => @media (min-width: 640px) { ... }\n\n      laptop: '1024px',\n      // => @media (min-width: 1024px) { ... }\n\n      desktop: '1280px',\n      // => @media (min-width: 1280px) { ... }\n    },\n  },\n};\n")),(0,r.kt)("h2",c({},{id:"bootstrap"}),"bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"xs, sm, md, lg, xl"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints"}),"https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-scss",metastring:'title="min"',title:'"min"'}),"// Extra small devices (portrait phones, less than 576px)\n// No media query for `xs` since this is the default in Bootstrap\n\n// Small devices (landscape phones, 576px and up)\n@media (min-width: 576px) {\n}\n\n// Medium devices (tablets, 768px and up)\n@media (min-width: 768px) {\n}\n\n// Large devices (desktops, 992px and up)\n@media (min-width: 992px) {\n}\n\n// Extra large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) {\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-scss",metastring:'title="max"',title:'"max"'}),"// Extra small devices (portrait phones, less than 576px)\n@media (max-width: 575.98px) {\n}\n\n// Small devices (landscape phones, less than 768px)\n@media (max-width: 767.98px) {\n}\n\n// Medium devices (tablets, less than 992px)\n@media (max-width: 991.98px) {\n}\n\n// Large devices (desktops, less than 1200px)\n@media (max-width: 1199.98px) {\n}\n// Extra large devices (large desktops)\n// No media query since the extra-large breakpoint has no upper bound on its width\n")))}v.isMDXComponent=!0}}]);