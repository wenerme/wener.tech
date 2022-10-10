"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79312],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92668:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const f={title:"gl"},m="gl",d={unversionedId:"dev/gui/gl",id:"dev/gui/gl",title:"gl",description:"- \u53c2\u8003",source:"@site/../notes/dev/gui/gl.md",sourceDirName:"dev/gui",slug:"/dev/gui/gl",permalink:"/notes/dev/gui/gl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/gui/gl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649946978,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"gl"},sidebar:"docs",previous:{title:"GameDev Awesome",permalink:"/notes/dev/game/gamedev-awesome"},next:{title:"GUI Awesome",permalink:"/notes/dev/gui/awedome"}},g={},y=[{value:"shader",id:"shader",level:2}],v={toc:y};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"gl"}),"gl"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.khronos.org/opengl/wiki"}),"https://www.khronos.org/opengl/wiki")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://learnopengl.com"}),"https://learnopengl.com"))))),(0,n.kt)("h2",s({},{id:"shader"}),"shader"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"shader",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f4d\u4e8e GPU \u7684\u7a0b\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 GLSL \u4e66\u5199"))),(0,n.kt)("li",{parentName:"ul"},"vertex shader"),(0,n.kt)("li",{parentName:"ul"},"fragment shader"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://learnopengl.com/Getting-started/Shaders"}),"https://learnopengl.com/Getting-started/Shaders"))))),(0,n.kt)("h1",s({},{id:"glossary"}),"Glossary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GLAD")))}b.isMDXComponent=!0}}]);