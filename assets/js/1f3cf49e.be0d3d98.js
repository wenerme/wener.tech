"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51404],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61489:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return w}});var n=t(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e};const f={title:"WARC"},m="WARC",d={unversionedId:"service/data/crawler/warc",id:"service/data/crawler/warc",title:"WARC",description:"- Web ARChive",source:"@site/../notes/service/data/crawler/warc.md",sourceDirName:"service/data/crawler",slug:"/service/data/crawler/warc",permalink:"/notes/service/data/crawler/warc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/data/crawler/warc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629271390,formattedLastUpdatedAt:"Aug 18, 2021",frontMatter:{title:"WARC"},sidebar:"docs",previous:{title:"till",permalink:"/notes/service/data/crawler/till"},next:{title:"wayback-machine-downloader",permalink:"/notes/service/data/crawler/wayback-machine-downloader"}},b={},w=[],y={toc:w};function v(e){var r,t=e,{components:a}=t,u=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},y),u),i(r,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"warc"}),"WARC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web ARChive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Web_ARChive"}),"https://en.wikipedia.org/wiki/Web_ARChive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/topics/warc"}),"https://github.com/topics/warc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/ikreymer/webarchiveplayer"}),"https://github.com/ikreymer/webarchiveplayer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/webrecorder/replayweb.page"}),"https://github.com/webrecorder/replayweb.page"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"p7zip -d web-archive.warc\n")))}v.isMDXComponent=!0}}]);