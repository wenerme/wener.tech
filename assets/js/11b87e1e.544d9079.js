"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54666],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4188:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"iostat"},p=void 0,u={unversionedId:"ops/admin/iostat",id:"ops/admin/iostat",title:"iostat",description:"- iostat.1",source:"@site/notes/ops/admin/iostat.md",sourceDirName:"ops/admin",slug:"/ops/admin/iostat",permalink:"/notes/ops/admin/iostat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/iostat.md",tags:[],version:"current",frontMatter:{title:"iostat"},sidebar:"docs",previous:{title:"htop",permalink:"/notes/ops/admin/htop"},next:{title:"MOSH",permalink:"/notes/ops/admin/mosh"}},s={},m=[],d={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/iostat.1.html"},"iostat.1"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"iostat -cdxy 2\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"column"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%user"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU usage at the normal user level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%nice"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU usage at the user level with priorities")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%system"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU utilization that occurred while executing at the system level (kernel)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%iowait"),(0,l.kt)("td",{parentName:"tr",align:null},"CPUs were idle and the system received I/O requests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%steal"),(0,l.kt)("td",{parentName:"tr",align:null},"involuntary wait by the virtual CPU or CPUs while the hypervisor was servicing another virtual processor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%idle"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU or CPUs were idle and the system did not have an outstanding disk I/O request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tps"),(0,l.kt)("td",{parentName:"tr",align:null},"r/s+w/s+d/s+f/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r/s"),(0,l.kt)("td",{parentName:"tr",align:null},"read/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w/s"),(0,l.kt)("td",{parentName:"tr",align:null},"write/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d/s"),(0,l.kt)("td",{parentName:"tr",align:null},"discard/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"f/s"),(0,l.kt)("td",{parentName:"tr",align:null},"flush/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%rrqm"),(0,l.kt)("td",{parentName:"tr",align:null},"read requests merged")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%util"),(0,l.kt)("td",{parentName:"tr",align:null},"Percentage of elapsed time during which I/O requests were issued to the device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avgqu-sz"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svctm"),(0,l.kt)("td",{parentName:"tr",align:null},"average amount of time an operation takes")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e32\u884c\u548c\u5e76\u884c \u5b58\u50a8\u8bbe\u5907\u53c2\u8003\u903b\u8f91\u4e0a\u6709\u5dee\u5f02"),(0,l.kt)("li",{parentName:"ul"},"\u5e76\u884c\u8bbe\u5907\u65e0\u53c2\u8003\u4ef7\u503c\u7684\u4fe1\u606f: svctm, %util"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brooker.co.za/blog/2014/07/04/iostat-pct.html"},"Two traps in iostat: %util and svctm"))))))}c.isMDXComponent=!0}}]);