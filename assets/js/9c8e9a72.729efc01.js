"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45692],{49613:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return s}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),o=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=o(r),s=a,k=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(k,i(i({ref:e},d),{},{components:r})):n.createElement(k,i({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},61465:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),i=["components"],p={title:"USB"},u="USB",o={unversionedId:"hardware/interface/usb",id:"hardware/interface/usb",title:"USB",description:"- \u7cfb\u7edf\u7ed3\u6784",source:"@site/../notes/hardware/interface/usb.md",sourceDirName:"hardware/interface",slug:"/hardware/interface/usb",permalink:"/notes/hardware/interface/usb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/hardware/interface/usb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"USB"},sidebar:"docs",previous:{title:"SATA",permalink:"/notes/hardware/interface/sata"},next:{title:"IoT",permalink:"/notes/hardware/iot/"}},d={},m=[{value:"\u901f\u5ea6",id:"\u901f\u5ea6",level:2}],c={toc:m};function s(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usb"},"USB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/USB#System_design"},"\u7cfb\u7edf\u7ed3\u6784"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Host + one or more downstream ports + multiple peripherals"),(0,l.kt)("li",{parentName:"ul"},"Hubs - \u6700\u591a 5 \u5c42"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a host \u53ef\u4ee5\u6709\u591a\u4e2a\u63a7\u5236\u5668\uff0c\u6bcf\u4e2a\u63a7\u5236\u5668\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a host \u6700\u591a 127 \u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bbe\u5907\u53ef\u4ee5\u6709\u591a\u4e2a\u903b\u8f91\u8bbe\u5907 - device functions"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u8bbe\u5907\u53ef\u63d0\u4f9b\u591a\u4e2a\u529f\u80fd - webcam + microphone"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u5408\u8bbe\u5907\u8fde\u63a5\u903b\u8f91\u8bbe\u5907\u5230\u5185\u5efa Hub"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fabiensanglard.net/usbcheat/index.html"},"https://fabiensanglard.net/usbcheat/index.html"))))),(0,l.kt)("h2",{id:"\u901f\u5ea6"},"\u901f\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Standard"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u4f20\u8f93\u901f\u7387"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB 1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"August 1998"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Speed (12 Mbit/s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"April 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"High Speed (480 Mbit/s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB 3.0"),(0,l.kt)("td",{parentName:"tr",align:null},"November 2008"),(0,l.kt)("td",{parentName:"tr",align:null},"SuperSpeed (5 Gbit/s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thunderbolt"),(0,l.kt)("td",{parentName:"tr",align:null},"2011"),(0,l.kt)("td",{parentName:"tr",align:null},"10 Gbps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB 3.1"),(0,l.kt)("td",{parentName:"tr",align:null},"July 2013"),(0,l.kt)("td",{parentName:"tr",align:null},"SuperSpeed+ (10 Gbit/s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thunderbolt 2"),(0,l.kt)("td",{parentName:"tr",align:null},"2013"),(0,l.kt)("td",{parentName:"tr",align:null},"20 Gbps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB Type-C"),(0,l.kt)("td",{parentName:"tr",align:null},"2014"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thunderbolt 3"),(0,l.kt)("td",{parentName:"tr",align:null},"2015"),(0,l.kt)("td",{parentName:"tr",align:null},"40 Gbps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB 3.2 Gen 1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);