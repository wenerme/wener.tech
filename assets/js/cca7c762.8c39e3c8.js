"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96984],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69025:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),i=["components"],l={title:"history"},c="history",u={unversionedId:"web/react/history",id:"web/react/history",title:"history",description:"- remix-run/history",source:"@site/../notes/web/react/history.md",sourceDirName:"web/react",slug:"/web/react/history",permalink:"/notes/web/react/history",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/react/history.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639484090,formattedLastUpdatedAt:"Dec 14, 2021",frontMatter:{title:"history"},sidebar:"docs",previous:{title:"formik",permalink:"/notes/web/react/formik"},next:{title:"Jotai",permalink:"/notes/web/react/jotai"}},p={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"history"},"history"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/remix-run/history"},"remix-run/history"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 router \u7684\u57fa\u7840"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u5e94 window.",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/History"},"history")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/remix-run/history/blob/main/docs/api-reference.md"},"api-reference"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"createPath,parsePath - url <-> location"),(0,o.kt)("li",{parentName:"ul"},"createBrowserHistory, createHashHistory, createMemoryHistory",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e09\u79cd\u4e0d\u540c\u7684\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f"))),(0,o.kt)("li",{parentName:"ul"},"history",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"createHref - browser \u4f1a\u8003\u8651 ",(0,o.kt)("inlineCode",{parentName:"li"},"<base/>")),(0,o.kt)("li",{parentName:"ul"},"back,go"),(0,o.kt)("li",{parentName:"ul"},"forward - ",(0,o.kt)("inlineCode",{parentName:"li"},"go(1)")),(0,o.kt)("li",{parentName:"ul"},"location - \u5f53\u524d location"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"listen(({ action, location })=>{})")),(0,o.kt)("li",{parentName:"ul"},"push, replace"),(0,o.kt)("li",{parentName:"ul"},"block"))),(0,o.kt)("li",{parentName:"ul"},"location - pathname,search,hash,state,key",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"key - \u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u81ea\u52a8\u751f\u6210"))))),(0,o.kt)("li",{parentName:"ul"},"\u914d\u5408 ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URLPattern"},"URLPattern")," \u53ef\u5b9e\u73b0\u7b80\u5355\u7684\u8def\u7531\u529f\u80fd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Chrome 95+")))))}f.isMDXComponent=!0}}]);