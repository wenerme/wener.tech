"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83728],{49613:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return k}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(k,i(i({ref:e},p),{},{components:r})):n.createElement(k,i({ref:e},p))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},43125:function(t,e,r){r.r(e),r.d(e,{assets:function(){return y},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&p(t,r,e[r]);if(o)for(var r of o(e))u.call(e,r)&&p(t,r,e[r]);return t},d=(t,e)=>l(t,i(e)),c=(t,e)=>{var r={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r};const k={title:"iostat"},f="iostat",g={unversionedId:"os/linux/stat/iostat",id:"os/linux/stat/iostat",title:"iostat",description:"- iostat.1",source:"@site/../notes/os/linux/stat/iostat.md",sourceDirName:"os/linux/stat",slug:"/os/linux/stat/iostat",permalink:"/notes/os/linux/stat/iostat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/stat/iostat.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685890478,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{title:"iostat"},sidebar:"docs",previous:{title:"htop",permalink:"/notes/os/linux/stat/htop"},next:{title:"sysstat",permalink:"/notes/os/linux/stat/sysstat"}},y={},b=[],N={toc:b},h="wrapper";function v(t){var e=t,{components:r}=e,a=c(e,["components"]);return(0,n.kt)(h,d(m(m({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"iostat"}),"iostat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://man7.org/linux/man-pages/man1/iostat.1.html"}),"iostat.1"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"iostat -d -x 1\niostat -cdxy 2\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"column"),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%user"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"CPU usage at the normal user level")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%nice"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"CPU usage at the user level with priorities")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%system"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"CPU utilization that occurred while executing at the system level (kernel)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%iowait"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"CPUs were idle and the system received I/O requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%steal"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"involuntary wait by the virtual CPU or CPUs while the hypervisor was servicing another virtual processor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%idle"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"CPU or CPUs were idle and the system did not have an outstanding disk I/O request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tps"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"r/s+w/s+d/s+f/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"r/s"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"read/second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"w/s"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"write/second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"d/s"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"discard/second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"f/s"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"flush/second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%rrqm"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"read requests merged")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"%util"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Percentage of elapsed time during which I/O requests were issued to the device")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"avgqu-sz"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"svctm"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"average amount of time an operation takes")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e32\u884c\u548c\u5e76\u884c \u5b58\u50a8\u8bbe\u5907\u53c2\u8003\u903b\u8f91\u4e0a\u6709\u5dee\u5f02"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u884c\u8bbe\u5907\u65e0\u53c2\u8003\u4ef7\u503c\u7684\u4fe1\u606f: svctm, %util"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://brooker.co.za/blog/2014/07/04/iostat-pct.html"}),"Two traps in iostat: %util and svctm"))))))}v.isMDXComponent=!0}}]);