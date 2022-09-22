"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68429],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return s}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(r),s=a,k=d["".concat(i,".").concat(s)]||d[s]||c[s]||l;return r?n.createElement(k,o(o({ref:e},m),{},{components:r})):n.createElement(k,o({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16854:function(t,e,r){r.r(e),r.d(e,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))i.call(e,r)&&m(t,r,e[r]);if(p)for(var r of p(e))u.call(e,r)&&m(t,r,e[r]);return t};const d={title:"htop"},s="htop",k={unversionedId:"ops/admin/htop",id:"ops/admin/htop",title:"htop",description:"- htop explained",source:"@site/../notes/ops/admin/htop.md",sourceDirName:"ops/admin",slug:"/ops/admin/htop",permalink:"/notes/ops/admin/htop",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/admin/htop.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645984624,formattedLastUpdatedAt:"Feb 27, 2022",frontMatter:{title:"htop"},sidebar:"docs",previous:{title:"GPG",permalink:"/notes/ops/admin/gpg"},next:{title:"iostat",permalink:"/notes/ops/admin/iostat"}},f={},N=[],b={toc:N};function y(t){var e,r=t,{components:a}=r,m=((t,e)=>{var r={};for(var n in t)i.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=c(c({},b),m),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"htop"}),"htop"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://peteris.rocks/blog/htop/"}),"htop explained")),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VIRT/VSZ - Virtual Image - \u865a\u62df\u955c\u50cf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VIRT = SWAP + RES"),(0,n.kt)("li",{parentName:"ul"},"\u610f\u4e49\u4e0d\u5927"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u7528\u5230\u7684\u865a\u62df\u5185\u5b58\uff0c\u5305\u542b\u6240\u6709\u4ee3\u7801\u3001\u6570\u636e\u3001\u5171\u4eab\u5305\u3001\u4ea4\u6362\u533a\u9875\u3001\u6620\u5c04\u4f46\u672a\u4f7f\u7528\u9875"),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7533\u8bf7 1GB \u4f46\u53ea\u7528 1MB \u4e5f\u4f1a\u8ba1\u7b97\u4e3a 1G\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c mmap 1G \u7684\u6587\u4ef6\uff0c\u4f46\u672a\u4f7f\u7528\uff0c\u4e5f\u7b97 1G\u3002"))),(0,n.kt)("li",{parentName:"ul"},"RES/RSS - Resident size - \u5e38\u9a7b\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RES = CODE + DATA"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u88ab\u4ea4\u6362\u7684\u7269\u7406\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5305\u542b\u5728\u4ea4\u6362\u533a\u7684\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u5185\u5b58\u53ef\u80fd\u4e0e\u5176\u4ed6\u8fdb\u7a0b\u5171\u4eab"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u4e00\u4e2a 1GB \u7684 \u8fdb\u7a0b fork \u540e\uff0c\u65b0\u7684\u8fdb\u7a0b\u4e5f\u4f1a\u5360\u7528 1G\uff0c\u4f46\u5b9e\u9645\u53ea\u7528\u5230\u4e86 1G\u3002Linux \u4f1a\u5bf9\u5185\u5b58 \u5199\u65f6\u590d\u5236\u3002"))),(0,n.kt)("li",{parentName:"ul"},"SHR - Shared Mem size - \u5171\u4eab\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u7528\u5230\u7684\u5171\u4eab\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5b58\u53ef\u80fd\u88ab\u5171\u4eab\uff0c\u4f46\u4e0d\u4e00\u5b9a\u5df2\u7ecf\u88ab\u5176\u4ed6\u8fdb\u7a0b\u5171\u4eab\u4f7f\u7528\u3002"))))),(0,n.kt)("li",{parentName:"ul"},"\u5355\u4f4d\u4e3a kb")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"key"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"tree")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"H"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"user process threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"kernel threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"p"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"program path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"m"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"merged command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"F"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"follow process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"I"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"invert sort")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"e"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"env")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"l"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"lsof")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"file locks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"s"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"strace syscall")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"wrap command")))))}y.isMDXComponent=!0}}]);