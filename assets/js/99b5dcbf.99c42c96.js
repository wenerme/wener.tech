"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11698],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return o}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),k=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=k(a),o=r,g=d["".concat(m,".").concat(o)]||d[o]||N[o]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6990:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return o},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return N}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],p={title:"SATA"},m="SATA",k={unversionedId:"hardware/interface/sata",id:"hardware/interface/sata",title:"SATA",description:"- SATA",source:"@site/../notes/hardware/interface/sata.md",sourceDirName:"hardware/interface",slug:"/hardware/interface/sata",permalink:"/notes/hardware/interface/sata",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/hardware/interface/sata.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"SATA"},sidebar:"docs",previous:{title:"HDMI",permalink:"/notes/hardware/interface/hdmi"},next:{title:"USB",permalink:"/notes/hardware/interface/usb"}},u={},N=[{value:"M.2",id:"m2",level:2},{value:"iSCSI",id:"iscsi",level:2},{value:"SAN",id:"san",level:2},{value:"SAS vs SATA",id:"sas-vs-sata",level:2}],d={toc:N};function o(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sata"},"SATA"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Serial_ATA"},"SATA"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Serial ATA"))),(0,l.kt)("li",{parentName:"ul"},"ATA",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AT Attachment"))),(0,l.kt)("li",{parentName:"ul"},"2003 1.0 1.5 Gbit/s 150 MB/s"),(0,l.kt)("li",{parentName:"ul"},"2004 2.0 3 Gbit/s 300 MB/s"),(0,l.kt)("li",{parentName:"ul"},"2008 3.0 6 Gbit/s 600 MB/s"),(0,l.kt)("li",{parentName:"ul"},"2013 3.2 16 Gbit/s 1969 MB/s"),(0,l.kt)("li",{parentName:"ul"},"AHCI - Advanced Host Controller Interface"),(0,l.kt)("li",{parentName:"ul"},"OHCI - Open",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"USB 1.1"))),(0,l.kt)("li",{parentName:"ul"},"EHCI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"USB 2.0"))),(0,l.kt)("li",{parentName:"ul"},"UHCI - Universal"),(0,l.kt)("li",{parentName:"ul"},"XHCI - Extensible",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"USB 3.0"))),(0,l.kt)("li",{parentName:"ul"},"WHCI - Wireless")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spec"),(0,l.kt)("th",{parentName:"tr",align:"right"},"BW"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Rate"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Encoding"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAS-1"),(0,l.kt)("td",{parentName:"tr",align:"right"},"3.0 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"2004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAS-2"),(0,l.kt)("td",{parentName:"tr",align:"right"},"6.0 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"2009-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAS-3"),(0,l.kt)("td",{parentName:"tr",align:"right"},"12.0 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"2013-03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAS-4"),(0,l.kt)("td",{parentName:"tr",align:"right"},"22.5 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"2017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAS-5"),(0,l.kt)("td",{parentName:"tr",align:"right"},"45 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SATA 1.0"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1.5 Gb/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"150MB/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8b/10b"),(0,l.kt)("td",{parentName:"tr",align:null},"2003-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SATA 2.0"),(0,l.kt)("td",{parentName:"tr",align:"right"},"3 Gb/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"300MB/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8b/10b"),(0,l.kt)("td",{parentName:"tr",align:null},"2004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SATA 3.0"),(0,l.kt)("td",{parentName:"tr",align:"right"},"6 Gb/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"600MB/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8b/10b"),(0,l.kt)("td",{parentName:"tr",align:null},"2009-05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SATA Express"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 Gb/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1969MB/s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"128b/130b"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("admonition",{title:"Spec vs Connector",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Spec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u7269\u7406\u5c42\u3001\u94fe\u8def\u5c42\u3001\u7aef\u53e3\u5c42\u3001\u4f20\u8f93\u5c42\u3001\u5e94\u7528\u5c42"))),(0,l.kt)("li",{parentName:"ul"},"Connector",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u7269\u7406\u63a5\u53e3"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Host"),(0,l.kt)("th",{parentName:"tr",align:null},"Pins"),(0,l.kt)("th",{parentName:"tr",align:null},"#"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SFF-8087"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e38\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SFF-8088"),(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"external iPass,iSAS,mSAS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SFF-8482"),(0,l.kt)("td",{parentName:"tr",align:null},"29"),(0,l.kt)("td",{parentName:"tr",align:null},"2 lanes"),(0,l.kt)("td",{parentName:"tr",align:null},"SATA, SAS - \u6700\u5e38\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SFF-8484"),(0,l.kt)("td",{parentName:"tr",align:null},"32,19"),(0,l.kt)("td",{parentName:"tr",align:null},"4,2"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connector"),(0,l.kt)("th",{parentName:"tr",align:null},"Pin"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SATA"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mSATA"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u540c mini PCI-E, \u7535\u4fe1\u53f7\u4e0d\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eSATA"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USB 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eSATAp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Power over eSATA,eSATA+USB")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SFF-8087",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PCie \u5361\u4e0a 1 \u5206 4 \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"SFF-8087 -> 4 SFF-8482"))),(0,l.kt)("li",{parentName:"ul"},"SFF-8482")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"abbr."),(0,l.kt)("th",{parentName:"tr",align:null},"stand for"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SGPIO"),(0,l.kt)("td",{parentName:"tr",align:null},"Serial general purpose input/output"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e32\u884c\u901a\u7528\u578b\u8f93\u5165\u8f93\u51fa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NVMe"),(0,l.kt)("td",{parentName:"tr",align:null},"NVM Express, Non-Volatile Memory Host Controller Interface Specification"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAS"),(0,l.kt)("td",{parentName:"tr",align:null},"Serial Attached SCSI"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"m2"},"M.2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/M.2"},"M.2")," - NGFF - Next Generation Form Factor"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u66ff\u6362 mSATA"),(0,l.kt)("li",{parentName:"ul"},"\u7269\u7406\u786c\u4ef6\u4f7f\u7528 pcie-mini \u7684\u5e03\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u9002\u5408\u4e8e SSD")),(0,l.kt)("h2",{id:"iscsi"},"iSCSI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISCSI"},"iSCSI")," Internet Small Computer System Interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.linux-iscsi.org"},"Linux iSCSI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.howtoforge.com/using-iscsi-on-ubuntu-10.04-initiator-and-target"},"Using iSCSI On Ubuntu 10.04 (Initiator And Target)")),(0,l.kt)("li",{parentName:"ul"},"SCSI commands over network")),(0,l.kt)("h2",{id:"san"},"SAN"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Storage_area_network"},"SAN")," Storage Area Network")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"sas-vs-sata"},"SAS vs SATA"),(0,l.kt)("p",null,"\u76ee\u524d\u529f\u80fd\u4e0a\u5df2\u7ecf\u6ca1\u6709\u592a\u5927\u533a\u522b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SATA",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bb6\u7528\u3001\u6d88\u8d39\u7ea7\u4ea7\u54c1"))),(0,l.kt)("li",{parentName:"ul"},"SAS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SATA \u8d85\u96c6 - SAS \u517c\u5bb9 SATA"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u3001\u5de5\u4f5c\u7ad9\u3001\u4f01\u4e1a\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8981\u6c42\u9ad8\u4e8e SATA")))))}o.isMDXComponent=!0}}]);