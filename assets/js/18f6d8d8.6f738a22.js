"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79383],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),o=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=o(a),c=n,N=k["".concat(m,".").concat(c)]||k[c]||s[c]||l;return a?r.createElement(N,i(i({ref:t},u),{},{components:a})):r.createElement(N,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},45073:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return f}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&u(e,a,t[a]);return e};const k={title:"\u5fae\u524d\u7aef",tags:["Web"]},c="\u5fae\u524d\u7aef",N={unversionedId:"dev/theory/microfrontend",id:"dev/theory/microfrontend",title:"\u5fae\u524d\u7aef",description:"- \u76ee\u7684/\u6838\u5fc3 - \u5e76\u4e0d\u662f\u8981\u8fbe\u5230\u6240\u6709 - \u9700\u8981\u6743\u8861",source:"@site/../notes/dev/theory/microfrontend.md",sourceDirName:"dev/theory",slug:"/dev/theory/microfrontend",permalink:"/notes/dev/theory/microfrontend",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/theory/microfrontend.md",tags:[{label:"Web",permalink:"/notes/tags/web"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"\u5fae\u524d\u7aef",tags:["Web"]},sidebar:"docs",previous:{title:"\u5f00\u53d1\u76f8\u5173\u8bcd\u6c47",permalink:"/notes/dev/theory/glossary"},next:{title:"Pattern FAQ",permalink:"/notes/dev/theory/pattern-faq"}},d={},f=[{value:"\u5fae\u524d\u7aef\u5212\u5206\u70b9",id:"\u5fae\u524d\u7aef\u5212\u5206\u70b9",level:2},{value:"\u5b9e\u73b0\u65b9\u6848",id:"\u5b9e\u73b0\u65b9\u6848",level:2},{value:"importmap",id:"importmap",level:2},{value:"ShadowDom \u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd",id:"shadowdom-\u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd",level:2},{value:"microservice vs microfrontend",id:"microservice-vs-microfrontend",level:2}],h={toc:f};function y(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},h),u),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"\u5fae\u524d\u7aef"}),"\u5fae\u524d\u7aef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u7684/\u6838\u5fc3 - \u5e76\u4e0d\u662f\u8981\u8fbe\u5230\u6240\u6709 - \u9700\u8981\u6743\u8861",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5782\u76f4\u5207\u5206\u524d\u7aef"),(0,r.kt)("li",{parentName:"ul"},"\u6280\u672f\u65e0\u5173 - \u53ef\u6df7\u5408\u591a\u79cd\u6846\u67b6"),(0,r.kt)("li",{parentName:"ul"},"\u56e2\u961f\u5207\u5206 - \u72ec\u7acb"),(0,r.kt)("li",{parentName:"ul"},"\u5916\u90e8\u4f9d\u8d56\u5171\u4eab - React - Import Map"),(0,r.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u90e8\u7f72 - \u80fd\u90e8\u7f72\u67d0\u4e2a\u7ec4\u4ef6\u6216\u9875\u9762"))),(0,r.kt)("li",{parentName:"ul"},"\u9644\u52a0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SSR \u652f\u6301 - \u6309\u7167\u8def\u7531\u5207\u5206\u662f\u53ef\u80fd\u7684"))),(0,r.kt)("li",{parentName:"ul"},"\u53cd\u5e94 microservice \u6982\u5ff5 - isolation"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Web Component"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://micro-frontends.org"}),"micro-frontends.org"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u601d\u60f3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6280\u672f\u4e0d\u53ef\u77e5"),(0,r.kt)("li",{parentName:"ul"},"\u9694\u79bb\u56e2\u961f\u4e4b\u95f4\u7684\u4ee3\u7801",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5171\u4eab\u8fd0\u884c\u65f6\u73af\u5883"))),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u56e2\u961f\u81ea\u5df1\u7684\u524d\u7f00"),(0,r.kt)("li",{parentName:"ul"},"\u539f\u751f\u6d4f\u89c8\u5668\u6807\u51c6\u4f18\u5148\u4e8e\u6846\u67b6\u5c01\u88c5\u7684 API"),(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u9ad8\u53ef\u7528\u7684\u7f51\u7edc\u5e94\u7528"))))),(0,r.kt)("li",{parentName:"ul"},"single-spa ",(0,r.kt)("a",s({parentName:"li"},{href:"https://single-spa.js.org/docs/recommended-setup/"}),"Recommended Setup")),(0,r.kt)("li",{parentName:"ul"},"qiankun",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e single-spa")))))),(0,r.kt)("admonition",s({},{title:"\u8003\u8651\u7684\u95ee\u9898\u70b9",type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5fae\u524d\u7aef\u7684\u76ee\u7684",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u65e7\u9879\u76ee\u67b6\u6784\u8fc1\u79fb - \u65b0\u7684\u9010\u6b65\u53d6\u4ee3\u65e7\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u914d\u7f6e\u90e8\u7f72"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u3001outsource \u90e8\u5206\u5e94\u7528\u6a21\u5757\u5f00\u53d1"))),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u591a\u6846\u67b6/\u8bed\u8a00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8baf\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u66f4\u65b0\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u95ee\u9898"))),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u6837\u5f0f\u9694\u79bb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CSS \u91cd\u590d - bundle \u5927"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u6837\u5f0f\u4e0d\u7edf\u4e00"),(0,r.kt)("li",{parentName:"ul"},"\u9694\u79bb\u7a0b\u5ea6"))))),(0,r.kt)("admonition",s({},{title:"\u5efa\u8bae",type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u597d\u662f\u5355\u4e00\u8bed\u8a00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rollup \u5171\u4eab\u6838\u5fc3\u5305",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 react\u3001zustand\u3001UI \u5e93"))),(0,r.kt)("li",{parentName:"ul"},"bundle \u975e\u6838\u5fc3\u5c0f\u5305"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u63d0\u4f9b\u57fa\u7840\u652f\u6491 - \u8def\u7531\u3001\u901a\u8baf\u3001\u57fa\u7840\u6846\u67b6\u3001\u72b6\u6001"))),(0,r.kt)("li",{parentName:"ul"},"\u6700\u597d\u57fa\u7840 CSS \u5171\u4eab",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u7840\u4f7f\u7528 ulti \u7c7b CSS \u5e93 - \u4f8b\u5982 tailwind css",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5199 CSS"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ef\u4ee5\u4f7f\u7528\u7684 CSS \u6846\u67b6"))),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236 CSS \u4f5c\u7528\u57df - \u4f8b\u5982 css module\u3001styled\u3001emotion\u3001shadowdom"))))),(0,r.kt)("admonition",s({},{title:"\u53c2\u8003\u95ee\u9898",type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/single-spa/single-spa/issues/103"}),"single-spa/single-spa#103")," - RFC: Server Rendering"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/vercel/next.js/issues/6040"}),"vercel/next.js#6040")," - Feasibility of micro frontends",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 multi-zone \u57fa\u4e8e url \u5212\u5206"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/webpack/webpack/issues/10352"}),"webpack/webpack#10352")," - Module federation and code sharing between bundles. Many builds act as one"))),(0,r.kt)("h2",s({},{id:"\u5fae\u524d\u7aef\u5212\u5206\u70b9"}),"\u5fae\u524d\u7aef\u5212\u5206\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8def\u7531 - \u8425\u9500\u7f51\u7ad9 - NextJS"),(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u5e03\u5c40 - \u540e\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 iframe - \u5212\u5206\u591a\u533a\u57df"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u6bcf\u4e2a\u533a\u57df mount \u4e00\u4e2a webcomponent"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 react \u6bcf\u4e2a\u533a\u57df switch \u4e00\u4e2a sub path - \u57fa\u4e8e\u5185\u90e8\u8def\u7531"))),(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6a21\u5757 - \u9ad8\u5ea6\u5b9a\u5236\u573a\u666f - \u4f8b\u5982 \u5355\u9875\u591a App",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6ce8\u518c\u4fe1\u606f\u8bc6\u522b ",(0,r.kt)("inlineCode",{parentName:"li"},"registry({name:'',load:()=>{}})")))),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6a21\u5757 - \u81ea\u5b9a\u4e49\u573a\u666f\uff0c\u4f7f\u7528 systemjs \u6784\u5efa\u5e94\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 import ",(0,r.kt)("inlineCode",{parentName:"li"},"@my-sys/module")," \u8bc6\u522b")))),(0,r.kt)("h2",s({},{id:"\u5b9e\u73b0\u65b9\u6848"}),"\u5b9e\u73b0\u65b9\u6848"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iframe"),(0,r.kt)("li",{parentName:"ul"},"NextJS ",(0,r.kt)("a",s({parentName:"li"},{href:"https://nextjs.org/docs/advanced-features/multi-zones"}),"multi-zone"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"url \u5207\u5206"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 SSR - \u9002\u7528\u4e8e\u8425\u9500\u573a\u666f"))),(0,r.kt)("li",{parentName:"ul"},"single-spa",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL \u5207\u5206\u3001layout \u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"bootstrap\u3001mount\u3001unmount \u94a9\u5b50"),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u542c url \u53d8\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u65e0\u5173"))),(0,r.kt)("li",{parentName:"ul"},"qiankun",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e single-spa \u5c01\u88c5"),(0,r.kt)("li",{parentName:"ul"},"Proxy \u6c99\u7bb1\u9694\u79bb\u8bbf\u95ee\u5168\u5c40\u5bf9\u8c61"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/systemjs/systemjs"}),"systemjs/systemjs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u884c\u6620\u5c04\u6a21\u5757\u5b9e\u73b0\uff0csystemjs \u7528\u4e8e\u7cfb\u7edf\u7ef4\u5ea6\u534f\u8c03"))),(0,r.kt)("li",{parentName:"ul"},"webpack federation ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/webpack/webpack/issues/10352"}),"#10352")),(0,r.kt)("li",{parentName:"ul"},"import map - ",(0,r.kt)("a",s({parentName:"li"},{href:"https://developers.google.com/web/updates/2019/03/kv-storage#import_maps"}),"Import maps")),(0,r.kt)("li",{parentName:"ul"},"bundle \u5916\u90e8\u4f9d\u8d56",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"webpack ",(0,r.kt)("a",s({parentName:"li"},{href:"https://webpack.js.org/configuration/externals/#root"}),"external")),(0,r.kt)("li",{parentName:"ul"},"rollup ",(0,r.kt)("a",s({parentName:"li"},{href:"https://rollupjs.org/guide/en/#external"}),"external")))),(0,r.kt)("li",{parentName:"ul"},"WebComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u7ec4\u4ef6\u3001\u8bed\u8a00\u65e0\u5173"),(0,r.kt)("li",{parentName:"ul"},"ShadowDom \u6311\u5b9e\u73b0\u6846\u67b6"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u6837\u5f0f\u662f\u5426\u9700\u8981\u9694\u79bb\u5f85\u5546\u69b7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/opencomponents/oc"}),"opencomponents/oc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/micro-zoe/micro-app"}),"micro-zoe/micro-app"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4eac\u4e1c"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e CustomElement\uff0c\u7c7b\u4f3c iframe \u8bbe\u8ba1\u4f53\u9a8c"),(0,r.kt)("li",{parentName:"ul"},"connectedCallback")))),(0,r.kt)("h2",s({},{id:"importmap"}),"importmap"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-html"}),'\x3c!-- The import map is inlined into your page --\x3e\n<script type="importmap">\n  {\n    "imports": {\n      "/path/to/kv-storage-polyfill.mjs": ["std:kv-storage", "/path/to/kv-storage-polyfill.mjs"]\n    }\n  }\n<\/script>\n\n\x3c!-- Then any module scripts with import statements use the above map --\x3e\n<script type="module">\n  import storage from \'/path/to/kv-storage-polyfill.mjs\';\n\n  // Use `storage` ...\n<\/script>\n')),(0,r.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",s({},{id:"shadowdom-\u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd"}),"ShadowDom \u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6837\u5f0f\u4f7f\u7528 rem",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d7 html font-size \u5f71\u54cd"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 16px"))),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae ShadowDom \u7684\u65f6\u5019\u6700\u597d\u4f7f\u7528 px"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u81ea\u5df1\u7684\u73af\u5883\uff0c\u53ef\u4fdd\u7559\u4f7f\u7528 rem - \u65b9\u4fbf user-agent \u63a7\u5236\u5b57\u4f53\u5927\u5c0f")),(0,r.kt)("h2",s({},{id:"microservice-vs-microfrontend"}),"microservice vs microfrontend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1 vs \u5fae\u524d\u7aef"),(0,r.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6027\u670d\u52a1\u3001\u805a\u5408\u6027\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 rpc/http/\u53cd\u5411\u4ee3\u7406 \u65b9\u5f0f\u8def\u7531"),(0,r.kt)("li",{parentName:"ul"},"rpc - version+service name+method name"),(0,r.kt)("li",{parentName:"ul"},"http - host+path"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5e8f\u5217\u5316\u7684\u8bf7\u6c42\u6c9f\u901a - \u4f20\u9012\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"service mesh - Observability, Security, Reliability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u524d\u7aef\u4e0d\u9700\u8981\u5173\u5fc3 - \u7c7b\u4f3c sentry"))))),(0,r.kt)("li",{parentName:"ul"},"\u5fae\u524d\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u9875\u9762",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62c6\u5206\u4ee3\u7801\u903b\u8f91\u7ed3\u6784"))),(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u7f51\u7ad9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e URL \u8def\u7531"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u90e8\u5206\u903b\u8f91\u5171\u4eab"),(0,r.kt)("li",{parentName:"ul"},"SAP"),(0,r.kt)("li",{parentName:"ul"},"SSR"))),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u5fae\u670d\u52a1\u66f4\u590d\u6742 - \u4ea4\u4e92\u3001\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u5fae\u670d\u52a1\u66f4\u7b80\u5355 - \u6cbb\u7406")))))}y.isMDXComponent=!0}}]);