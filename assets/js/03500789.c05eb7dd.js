"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27952],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return y}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(l,".").concat(m)]||c[m]||f[m]||s;return r?n.createElement(y,o(o({ref:e},u),{},{components:r})):n.createElement(y,o({ref:e},u))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83850:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))l.call(e,r)&&u(t,r,e[r]);if(i)for(var r of i(e))p.call(e,r)&&u(t,r,e[r]);return t},f=(t,e)=>s(t,o(e)),m=(t,e)=>{var r={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r};const y={title:"sysstat"},d="sysstat",b={unversionedId:"os/linux/stat/sysstat",id:"os/linux/stat/sysstat",title:"sysstat",description:"- http://pagesperso-orange.fr/sebastien.godard/",source:"@site/../notes/os/linux/stat/sysstat.md",sourceDirName:"os/linux/stat",slug:"/os/linux/stat/sysstat",permalink:"/notes/os/linux/stat/sysstat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/stat/sysstat.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"sysstat"},sidebar:"docs",previous:{title:"iostat",permalink:"/notes/os/linux/stat/iostat"},next:{title:"audit",permalink:"/notes/os/linux/sys/audit"}},g={},O=[],k={toc:O},v="wrapper";function h(t){var e=t,{components:r}=e,a=m(e,["components"]);return(0,n.kt)(v,f(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"sysstat"}),"sysstat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://pagesperso-orange.fr/sebastien.godard/"}),"http://pagesperso-orange.fr/sebastien.godard/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=sysstat&arch=x86_64&repo=community"}),"https://pkgs.alpinelinux.org/contents?branch=edge&name=sysstat&arch=x86_64&repo=community"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"iostat"),(0,n.kt)("li",{parentName:"ul"},"cifsiostat"),(0,n.kt)("li",{parentName:"ul"},"mpstat"),(0,n.kt)("li",{parentName:"ul"},"pidstat"),(0,n.kt)("li",{parentName:"ul"},"sadf"),(0,n.kt)("li",{parentName:"ul"},"sar"),(0,n.kt)("li",{parentName:"ul"},"tapestat"),(0,n.kt)("li",{parentName:"ul"},"/etc/sysconfig/sysstat"),(0,n.kt)("li",{parentName:"ul"},"/etc/sysconfig/sysstat.ioconf"),(0,n.kt)("li",{parentName:"ul"},"/usr/lib/sa/sa1, sa2, sadc")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pidstat -C mysql -u -d 1\n")))}h.isMDXComponent=!0}}]);