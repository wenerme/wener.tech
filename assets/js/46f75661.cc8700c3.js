"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67224],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(n),s=a,N=c["".concat(u,".").concat(s)]||c[s]||k[s]||l;return n?r.createElement(N,i(i({ref:t},m),{},{components:n})):r.createElement(N,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"Vue"},u=void 0,o={unversionedId:"web/framework/vue",id:"web/framework/vue",title:"Vue",description:"\u751f\u547d\u5468\u671f",source:"@site/notes/web/framework/vue.md",sourceDirName:"web/framework",slug:"/web/framework/vue",permalink:"/notes/web/framework/vue",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/vue.md",tags:[],version:"current",frontMatter:{title:"Vue"},sidebar:"docs",previous:{title:"svelte",permalink:"/notes/web/framework/svelte"},next:{title:"React",permalink:"/notes/web/react/"}},m=[{value:"Server Render",id:"server-render",children:[],level:2},{value:"Tips",id:"tips",children:[],level:2}],k={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://vuejs.org/images/lifecycle.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://mint-ui.github.io/"},"http://mint-ui.github.io/"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e4b\u6240\u4ee5\u4f7f\u7528 yarn \u662f\u56e0\u4e3a yran \u66f4\u5feb\u66f4\u65b9\u4fbf\n# npm i -g yarn # \u5982\u679c\u6ca1\u6709 yarn \u53ef\u5148\u5b89\u88c5 yarn\nyarn global add vue@latest\n# \u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u76ee\u5f55\nmkdir my-project\ncd my-project\n# \u521d\u59cb\u5316 vue \u9879\u76ee\nvue init webpack .\n# \u6ce8\u610f\u5173\u6389\u6240\u6709\u6d4b\u8bd5 \u548c lint\n\n# \u5e38\u7528\u7684\u4f9d\u8d56\nyarn add font-awesome ionicons moment vue-router\nmkdir -p src/{api,pages}\ntouch src/{api,pages}/index.js src/{router,base,conf}.js\n")),(0,l.kt)("h2",{id:"server-render"},"Server Render"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nuxt/nuxt.js"},"https://github.com/nuxt/nuxt.js"))),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vue \u57fa\u672c\u5143\u7d20",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u76d1\u89c6 (watch)"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"\u6307\u4ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"li"},'\u6307\u4ee4:\u53c2\u6570.\u4fee\u9970\u7b26="\u7ed1\u5b9a\u503c"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"v-bind")," \u6570\u636e\u7ed1\u5b9a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"li"},'v-bind:\u5c5e\u6027="\u5c5e\u6027\u5b57\u6bb5"')),(0,l.kt)("li",{parentName:"ul"},"\u5355\u5411"),(0,l.kt)("li",{parentName:"ul"},"\u7f29\u5199 ",(0,l.kt)("inlineCode",{parentName:"li"},":\u5c5e\u6027")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"v-model")," \u6a21\u578b\u7ed1\u5b9a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53cc\u5411\u7ed1\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u8868\u5355\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u9970\u7b26\u5305\u62ec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".lazy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".trim")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"v-on")," \u4e8b\u4ef6\u7ed1\u5b9a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"li"},'v-on:\u4e8b\u4ef6\u7c7b\u578b.\u4fee\u9970\u7b26="\u4ee3\u7801 | \u65b9\u6cd5\u540d | \u65b9\u6cd5\u8c03\u7528"')),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u8c03\u7528\u65f6\u53ef\u4f7f\u7528 $event \u6765\u8bbf\u95ee\u539f event \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u7f29\u5199 ",(0,l.kt)("inlineCode",{parentName:"li"},"@\u4e8b\u4ef6\u540d.\u4fee\u9970\u7b26")),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u9970\u7b26\u5305\u62ec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".stop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".prevent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".capture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".self")))),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5904\u7406\u6309\u952e\u4e8b\u4ef6\u65f6\u53ef\u4f7f\u7528\u7684\u4fee\u9970\u7b26\u8fd8\u5305\u62ec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tab")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delete"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u540c\u65f6\u6355\u83b7\u5220\u9664\u548c\u5012\u9000\u952e(Backspace)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"esc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"space")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"up")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"down")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"left")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"right")))),(0,l.kt)("li",{parentName:"ul"},"\u6309\u952e\u4e8b\u4ef6\u53ef\u4f7f\u7528\u8bed\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"li"},"@\u6309\u952e\u4e8b\u4ef6.\u952e\u503c"))))))))}c.isMDXComponent=!0}}]);