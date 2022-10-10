"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3034],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,y=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21595:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const m={title:"Container Query"},f="Container Query",y={unversionedId:"web/style/container-query",id:"web/style/container-query",title:"Container Query",description:"- Chrome 105+ - LayoutNG M105",source:"@site/../notes/web/style/container-query.md",sourceDirName:"web/style",slug:"/web/style/container-query",permalink:"/notes/web/style/container-query",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/container-query.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Container Query"},sidebar:"docs",previous:{title:"Style",permalink:"/notes/web/style/"},next:{title:"CSS Awesome",permalink:"/notes/web/style/css-awesome"}},b={},d=[],k={toc:d};function w(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},k),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"container-query"}),"Container Query"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrome 105+ - LayoutNG M105"),(0,n.kt)("li",{parentName:"ul"},"mdn ",(0,n.kt)("a",s({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries"}),"CSS Container Queries"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bb9\u5668",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"container: <type> <name>")),(0,n.kt)("li",{parentName:"ul"},"container-type:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"size - inline-size + block-size"),(0,n.kt)("li",{parentName:"ul"},"inline-size - \u5bbd"),(0,n.kt)("li",{parentName:"ul"},"block-size - \u9ad8"),(0,n.kt)("li",{parentName:"ul"},"style"),(0,n.kt)("li",{parentName:"ul"},"state"))),(0,n.kt)("li",{parentName:"ul"},"container-name - \u81ea\u5b9a\u4e49\u540d\u5b57"))),(0,n.kt)("li",{parentName:"ul"},"\u5143\u7d20",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@container (<query>)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"min-width - inline-size"))))))),(0,n.kt)("li",{parentName:"ul"},"caniuse ",(0,n.kt)("a",s({parentName:"li"},{href:"https://caniuse.com/css-container-queries"}),"CSS Container Queries")),(0,n.kt)("li",{parentName:"ul"},"Chrome ",(0,n.kt)("a",s({parentName:"li"},{href:"https://www.chromestatus.com/feature/6525308435955712"}),"Feature: Container Queries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/GoogleChromeLabs/container-query-polyfill"}),"GoogleChromeLabs/container-query-polyfill"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u91cd\u5199 \u73b0\u5728\u7684 CSS - \u4e0d\u597d\u7528")))))}w.isMDXComponent=!0}}]);