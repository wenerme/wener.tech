"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29669],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17212:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),i=["components"],l={title:"bing"},c="Bing",p={unversionedId:"platform/bing",id:"platform/bing",title:"bing",description:"\u663e\u793a\u9690\u85cf\u7ed3\u679c",source:"@site/../notes/platform/bing.md",sourceDirName:"platform",slug:"/platform/bing",permalink:"/notes/platform/bing",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/platform/bing.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"bing"},sidebar:"docs",previous:{title:"AWS",permalink:"/notes/platform/aws"},next:{title:"Cloudflare Team",permalink:"/notes/platform/cloudflare-team"}},u={},f=[{value:"\u663e\u793a\u9690\u85cf\u7ed3\u679c",id:"\u663e\u793a\u9690\u85cf\u7ed3\u679c",level:2}],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bing"},"Bing"),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"\u663e\u793a\u9690\u85cf\u7ed3\u679c"},"\u663e\u793a\u9690\u85cf\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u539f\u56e0\n$$('.b_algo').map((v) => v.style.display);\n// \u663e\u793a\nif($$('.b_algo').map((v) => v.style.display).find(v=>v === 'none')){\n  r = $('#b_results').cloneNode(true);\n  Array.from(r.querySelectorAll('.b_algo')).map((v) => v.style.display = 'block');\n  $('#b_results').remove()\n  $('#b_content').append(r);\n}\n")))}m.isMDXComponent=!0}}]);