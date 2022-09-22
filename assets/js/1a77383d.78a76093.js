"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21771],{49613:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(n),k=a,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return n?r.createElement(N,i(i({ref:e},m),{},{components:n})):r.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46174:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],p={title:"SNMP"},o="SNMP",u={unversionedId:"network/application/snmp",id:"network/application/snmp",title:"SNMP",description:"Tips",source:"@site/../notes/network/application/snmp.md",sourceDirName:"network/application",slug:"/network/application/snmp",permalink:"/notes/network/application/snmp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/network/application/snmp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"SNMP"},sidebar:"docs",previous:{title:"HTTP",permalink:"/notes/network/application/http"},next:{title:"SSL",permalink:"/notes/network/application/ssl"}},m={},c=[{value:"Tips",id:"tips",level:2},{value:"printer",id:"printer",level:2}],s={toc:c};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snmp"},"SNMP"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol"},"Simple Network Management Protocol"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7f51\u7edc\u7ba1\u7406\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7528\u4e8e\u7ba1\u7406\u548c\u76d1\u63a7\u7f51\u7edc\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"UDP 161")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u626b\u63cf\u6709 SNMP \u7684\u8bbe\u5907\nsudo apk add nmap nmap-scripts\nsudo nmap -sU -p 161 --script default,snmp-sysdescr 192.169.1.0/24\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"abbr"),(0,l.kt)("th",{parentName:"tr",align:null},"full"),(0,l.kt)("th",{parentName:"tr",align:null},"chinese"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OID"),(0,l.kt)("td",{parentName:"tr",align:null},"Object Identifiers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIB"),(0,l.kt)("td",{parentName:"tr",align:null},"Management Infomation Base"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u4fe1\u606f\u57fa\u7840"),(0,l.kt)("td",{parentName:"tr",align:null},"OID \u6620\u5c04\u63cf\u8ff0\u6027\u6587\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NMS"),(0,l.kt)("td",{parentName:"tr",align:null},"Network Management System"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u7ba1\u7406\u7cfb\u7edf"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SNMPv1 - rfc1155, rfc1157, rfc1212",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"community based management"))),(0,l.kt)("li",{parentName:"ul"},"SNMPv2 - \u884d\u751f\u81ea v1\uff0c\u6ca1\u6709\u6d88\u606f\u5b9a\u4e49",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6570\u636e\u7c7b\u578b - Counter32, Counter64, Gauge32, UInteger32, NsapAdress, BIT STRING"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u5f3a OID \u8868 \u548c \u503c"))),(0,l.kt)("li",{parentName:"ul"},"SNMPv2c - rfc1901-rfc1908"),(0,l.kt)("li",{parentName:"ul"},"SNMPv3 - rfc3411-rfc3418",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b0\u7684\u6d88\u606f\u683c\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 ACL \u548c\u4e00\u4e9b\u5b89\u5168\u76f8\u5173\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u8fdc\u7a0b\u53c2\u6570\u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"rfc3584 - \u591a\u7248\u672c\u5171\u5b58")),(0,l.kt)("h2",{id:"printer"},"printer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prtMarkerSuppliesType",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://oidref.com/1.3.6.1.2.1.43.11.1.1.5"},"https://oidref.com/1.3.6.1.2.1.43.11.1.1.5")),(0,l.kt)("li",{parentName:"ul"},"other(1),"),(0,l.kt)("li",{parentName:"ul"},"unknown(2),"),(0,l.kt)("li",{parentName:"ul"},"toner(3),"),(0,l.kt)("li",{parentName:"ul"},"wasteToner(4),"),(0,l.kt)("li",{parentName:"ul"},"ink(5),"),(0,l.kt)("li",{parentName:"ul"},"inkCartridge(6),"),(0,l.kt)("li",{parentName:"ul"},"inkRibbon(7),"),(0,l.kt)("li",{parentName:"ul"},"wasteInk(8),"),(0,l.kt)("li",{parentName:"ul"},"opc(9),"),(0,l.kt)("li",{parentName:"ul"},"developer(10),"),(0,l.kt)("li",{parentName:"ul"},"fuserOil(11),"),(0,l.kt)("li",{parentName:"ul"},"solidWax(12),"),(0,l.kt)("li",{parentName:"ul"},"ribbonWax(13),"),(0,l.kt)("li",{parentName:"ul"},"wasteWax(14)")))))}k.isMDXComponent=!0}}]);