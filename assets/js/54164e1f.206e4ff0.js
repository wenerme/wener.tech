"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35428],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},90856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e};const s={title:"\u76f2\u6c34\u5370"},f="\u76f2\u6c34\u5370",d={unversionedId:"algorithm/cv/blind-watermark",id:"algorithm/cv/blind-watermark",title:"\u76f2\u6c34\u5370",description:"- LSB",source:"@site/../notes/algorithm/cv/blind-watermark.md",sourceDirName:"algorithm/cv",slug:"/algorithm/cv/blind-watermark",permalink:"/notes/algorithm/cv/blind-watermark",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/cv/blind-watermark.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"\u76f2\u6c34\u5370"},sidebar:"docs",previous:{title:"\u8ba1\u7b97\u673a\u89c6\u89c9",permalink:"/notes/algorithm/cv/"},next:{title:"CV Awesome",permalink:"/notes/algorithm/cv/awesome"}},b={},v=[{value:"\u77e5\u4e4e\u6c34\u5370",id:"\u77e5\u4e4e\u6c34\u5370",level:2}],y={toc:v};function g(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"\u76f2\u6c34\u5370"}),"\u76f2\u6c34\u5370"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LSB"),(0,n.kt)("li",{parentName:"ul"},"StegSolve"),(0,n.kt)("li",{parentName:"ul"},"R/G/B/A Plane 0/1/2"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fire-keeper/BlindWatermark"}),"fire-keeper/BlindWatermark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://stegonline.iculture.cc/"}),"https://stegonline.iculture.cc/")),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 archive \u907f\u514d ",(0,n.kt)("a",m({parentName:"li"},{href:"https://archive.ph/"}),"https://archive.ph/"))))),(0,n.kt)("h2",m({},{id:"\u77e5\u4e4e\u6c34\u5370"}),"\u77e5\u4e4e\u6c34\u5370"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"Array.from(document.querySelectorAll('#root > div > div')).filter(ele=>getComputedStyle(ele).backgroundImage.startsWith(`url(\"data:image/svg+xml;`))\nArray.from(document.querySelectorAll('[class*=\"css-\"]')).filter(ele=>getComputedStyle(ele).backgroundImage.startsWith(`url(\"data:image/svg+xml;`))\n")))}g.isMDXComponent=!0}}]);