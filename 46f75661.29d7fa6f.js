(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(n),O=r,j=o["".concat(l,".").concat(O)]||o[O]||m[O]||i;return n?a.a.createElement(j,b(b({ref:t},p),{},{components:n})):a.a.createElement(j,b({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},376:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1172)),l={id:"vue",title:"Vue"},b={unversionedId:"web/framework/vue",id:"web/framework/vue",isDocsHomePage:!1,title:"Vue",description:"\u751f\u547d\u5468\u671f",source:"@site/notes/web/framework/vue.md",slug:"/web/framework/vue",permalink:"/notes/web/framework/vue",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/vue.md",version:"current",sidebar:"docs",previous:{title:"Riot",permalink:"/notes/web/framework/riot"},next:{title:"React",permalink:"/notes/web/react/react"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Server Render",id:"server-render",children:[]},{value:"Tips",id:"tips-1",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://vuejs.org/images/lifecycle.png",alt:null})),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://mint-ui.github.io/"},"http://mint-ui.github.io/"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e4b\u6240\u4ee5\u4f7f\u7528 yarn \u662f\u56e0\u4e3a yran \u66f4\u5feb\u66f4\u65b9\u4fbf\n# npm i -g yarn # \u5982\u679c\u6ca1\u6709 yarn \u53ef\u5148\u5b89\u88c5 yarn\nyarn global add vue@latest\n# \u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u76ee\u5f55\nmkdir my-project\ncd my-project\n# \u521d\u59cb\u5316 vue \u9879\u76ee\nvue init webpack .\n# \u6ce8\u610f\u5173\u6389\u6240\u6709\u6d4b\u8bd5 \u548c lint\n\n# \u5e38\u7528\u7684\u4f9d\u8d56\nyarn add font-awesome ionicons moment vue-router\nmkdir -p src/{api,pages}\ntouch src/{api,pages}/index.js src/{router,base,conf}.js\n")),Object(i.b)("h2",{id:"server-render"},"Server Render"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/nuxt/nuxt.js"},"https://github.com/nuxt/nuxt.js"))),Object(i.b)("h2",{id:"tips-1"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vue \u57fa\u672c\u5143\u7d20",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6307\u4ee4"),Object(i.b)("li",{parentName:"ul"},"\u5c5e\u6027"),Object(i.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c5e\u6027"),Object(i.b)("li",{parentName:"ul"},"\u8fc7\u6ee4\u5668"),Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},"\u76d1\u89c6 (watch)"),Object(i.b)("li",{parentName:"ul"},"\u7ec4\u4ef6"))),Object(i.b)("li",{parentName:"ul"},"\u6307\u4ee4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bed\u6cd5 ",Object(i.b)("inlineCode",{parentName:"li"},'\u6307\u4ee4:\u53c2\u6570.\u4fee\u9970\u7b26="\u7ed1\u5b9a\u503c"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"v-bind")," \u6570\u636e\u7ed1\u5b9a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bed\u6cd5 ",Object(i.b)("inlineCode",{parentName:"li"},'v-bind:\u5c5e\u6027="\u5c5e\u6027\u5b57\u6bb5"')),Object(i.b)("li",{parentName:"ul"},"\u5355\u5411"),Object(i.b)("li",{parentName:"ul"},"\u7f29\u5199 ",Object(i.b)("inlineCode",{parentName:"li"},":\u5c5e\u6027")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"v-model")," \u6a21\u578b\u7ed1\u5b9a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53cc\u5411\u7ed1\u5b9a"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u8868\u5355\u5143\u7d20"),Object(i.b)("li",{parentName:"ul"},"\u4fee\u9970\u7b26\u5305\u62ec",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".lazy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".number")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".trim")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"v-on")," \u4e8b\u4ef6\u7ed1\u5b9a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bed\u6cd5 ",Object(i.b)("inlineCode",{parentName:"li"},'v-on:\u4e8b\u4ef6\u7c7b\u578b.\u4fee\u9970\u7b26="\u4ee3\u7801 | \u65b9\u6cd5\u540d | \u65b9\u6cd5\u8c03\u7528"')),Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u8c03\u7528\u65f6\u53ef\u4f7f\u7528 $event \u6765\u8bbf\u95ee\u539f event \u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"\u7f29\u5199 ",Object(i.b)("inlineCode",{parentName:"li"},"@\u4e8b\u4ef6\u540d.\u4fee\u9970\u7b26")),Object(i.b)("li",{parentName:"ul"},"\u4fee\u9970\u7b26\u5305\u62ec",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".stop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".prevent")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".capture")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".self")))),Object(i.b)("li",{parentName:"ul"},"\u5728\u5904\u7406\u6309\u952e\u4e8b\u4ef6\u65f6\u53ef\u4f7f\u7528\u7684\u4fee\u9970\u7b26\u8fd8\u5305\u62ec",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tab")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delete"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f1a\u540c\u65f6\u6355\u83b7\u5220\u9664\u548c\u5012\u9000\u952e(Backspace)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"esc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"space")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"up")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"down")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"left")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"right")))),Object(i.b)("li",{parentName:"ul"},"\u6309\u952e\u4e8b\u4ef6\u53ef\u4f7f\u7528\u8bed\u6cd5 ",Object(i.b)("inlineCode",{parentName:"li"},"@\u6309\u952e\u4e8b\u4ef6.\u952e\u503c"))))))))}u.isMDXComponent=!0}}]);