"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29669],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,b=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},76771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const s={title:"bing"},m="Bing",b={unversionedId:"platform/bing",id:"platform/bing",title:"bing",description:"\u663e\u793a\u9690\u85cf\u7ed3\u679c",source:"@site/../notes/platform/bing.md",sourceDirName:"platform",slug:"/platform/bing",permalink:"/notes/platform/bing",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/bing.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"bing"},sidebar:"docs",previous:{title:"AWS",permalink:"/notes/platform/aws"},next:{title:"Cloudflare Team",permalink:"/notes/platform/cloudflare-team"}},d={},y=[{value:"\u663e\u793a\u9690\u85cf\u7ed3\u679c",id:"\u663e\u793a\u9690\u85cf\u7ed3\u679c",level:2}],v={toc:y};function g(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"bing"}),"Bing"),(0,n.kt)("h1",f({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",f({},{id:"\u663e\u793a\u9690\u85cf\u7ed3\u679c"}),"\u663e\u793a\u9690\u85cf\u7ed3\u679c"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// \u539f\u56e0\n$$('.b_algo').map((v) => v.style.display);\n// \u663e\u793a\nif($$('.b_algo').map((v) => v.style.display).find(v=>v === 'none')){\n  r = $('#b_results').cloneNode(true);\n  Array.from(r.querySelectorAll('.b_algo')).map((v) => v.style.display = 'block');\n  $('#b_results').remove()\n  $('#b_content').append(r);\n}\n")))}g.isMDXComponent=!0}}]);