"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16279],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,d=s["".concat(o,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"intro",title:"\u786c\u4ef6\u8bbe\u5907"},o="VoIP Hardware",u={unversionedId:"voip/hardware/intro",id:"voip/hardware/intro",title:"\u786c\u4ef6\u8bbe\u5907",description:"Tips",source:"@site/notes/voip/hardware/README.md",sourceDirName:"voip/hardware",slug:"/voip/hardware/",permalink:"/notes/voip/hardware/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/hardware/README.md",tags:[],version:"current",frontMatter:{id:"intro",title:"\u786c\u4ef6\u8bbe\u5907"}},m={},k=[{value:"Tips",id:"tips",level:2},{value:"\u8bed\u97f3\u5361",id:"\u8bed\u97f3\u5361",level:2},{value:"\u4e3b\u677f",id:"\u4e3b\u677f",level:2},{value:"\u786c\u4ef6\u63d0\u4f9b\u5546",id:"\u786c\u4ef6\u63d0\u4f9b\u5546",level:2},{value:"Digium",id:"digium",level:3},{value:"\u8baf\u65f6",id:"\u8baf\u65f6",level:2},{value:"\u4e09\u6c47/Synway",id:"\u4e09\u6c47synway",level:3},{value:"\u9f0e\u4fe1\u901a\u8fbe",id:"\u9f0e\u4fe1\u901a\u8fbe",level:3}],s={toc:k};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"voip-hardware"},"VoIP Hardware"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.freepbx.org/display/PC/Telephony+Card+Hardware+Overview"},"https://wiki.freepbx.org/display/PC/Telephony+Card+Hardware+Overview")),(0,l.kt)("li",{parentName:"ul"},"PSTN(E1) -> \u6570\u5b57 -> Asterisk -> \u6a21\u62df -> FXS -> \u5ea7\u673a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://store.digium.com/boards"},"Digium Board selector")),(0,l.kt)("li",{parentName:"ul"},"\u7535\u4fe1\u5149\u7ea4 -> ?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7535\u4fe1\u5149\u7ea4\u662f\u600e\u4e48\u8f6c\u6210\u7535\u8bdd\u7684,\u662f\u8f6c\u7684\u6570\u5b57\u8fd8\u662f\u6a21\u62df"),(0,l.kt)("li",{parentName:"ul"},"\u600e\u4e48\u5728\u540c\u4e00\u4e2a\u5149\u7ea4\u4e2d\u652f\u6301\u591a\u4e2a\u901a\u9053"))),(0,l.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u5668\u63a5\u53e3\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PCI"),(0,l.kt)("li",{parentName:"ul"},"PCIe"),(0,l.kt)("li",{parentName:"ul"},"USB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f83\u5c11"))))),(0,l.kt)("li",{parentName:"ul"},"OpenVox"),(0,l.kt)("li",{parentName:"ul"},"\u56de\u97f3\u6d88\u9664/EC/Echo Cancelation"),(0,l.kt)("li",{parentName:"ul"},"RJ48"),(0,l.kt)("li",{parentName:"ul"},"RJ45")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.voip-info.org/wiki/view/Analog+Telephone+Adapters"},"https://www.voip-info.org/wiki/view/Analog+Telephone+Adapters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"30B+D",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"30 \u8def\u5e76\u53d1, \u53f7\u7801\u4e0d\u53d7\u5f71\u54cd, \u53ef\u4ee5\u662f 100 \u6216\u8005 200 \u4e2a\u53f7\u7801"),(0,l.kt)("li",{parentName:"ul"},"D \u662f\u6570\u5b57\u7ebf\u8def")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u5173\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5a92\u4f53\u7f51\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SIP"),(0,l.kt)("li",{parentName:"ul"},"FXO"),(0,l.kt)("li",{parentName:"ul"},"FOS"))),(0,l.kt)("li",{parentName:"ul"},"\u878d\u5408\u7f51\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"E1/T1"),(0,l.kt)("li",{parentName:"ul"},"SS7"))),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7ebf\u878d\u5408\u7f51\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GSM"))),(0,l.kt)("li",{parentName:"ul"},"\u4e91\u901a\u8baf")))),(0,l.kt)("h2",{id:"\u8bed\u97f3\u5361"},"\u8bed\u97f3\u5361"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.freepbx.org/display/PC/Telephony+Card+Hardware+Overview"},"https://wiki.freepbx.org/display/PC/Telephony+Card+Hardware+Overview"))),(0,l.kt)("h2",{id:"\u4e3b\u677f"},"\u4e3b\u677f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u8003\u8651 PCI \u69fd\u6570, \u8003\u8651 PCIe \u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"ASROCK/\u534e\u64ce\u79d1\u6280 H110 PRO BTC+",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"14xPCIe"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u6392\u7ebf")))),(0,l.kt)("h2",{id:"\u786c\u4ef6\u63d0\u4f9b\u5546"},"\u786c\u4ef6\u63d0\u4f9b\u5546"),(0,l.kt)("h3",{id:"digium"},"Digium"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digium"},"Digium:wikipedia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://store.digium.com/boards/"},"store.digium.com"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u9009\u578b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://dtasia.net/"},"dtasia"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e9a\u6d32\u5206\u9500\u5546"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.digium.com/sites/digium/files/telephony-cards-datasheet.pdf"},"Telephony Cards Datasheet")),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u578b\u89c4\u8303",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A4A/A4B, \u5355\u53e3, PCI/PCIe"),(0,l.kt)("li",{parentName:"ul"},"A8A/A8B, \u53cc\u53e3, PCI/PCIe"),(0,l.kt)("li",{parentName:"ul"},"B -  Echo Cancellation"),(0,l.kt)("li",{parentName:"ul"},"TMD/AEX - \u56db\u53e3, PCI/PCIe"),(0,l.kt)("li",{parentName:"ul"},"TE \u6570\u5b57\u5361",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f16\u53f7 ABC, A \u4e3a\u7aef\u53e3\u6570, B \u4e3a\u7248\u672c\u53f7, C \u5982\u679c\u4e3a\u5355\u6570\u62160\u5219\u662f PCIe"))),(0,l.kt)("li",{parentName:"ul"},"VPM \u56de\u58f0\u6d88\u9664"),(0,l.kt)("li",{parentName:"ul"},"TC \u8bed\u8a00\u5904\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7528\u4e8e\u5904\u7406 G.729a, G.723.1")))))),(0,l.kt)("h2",{id:"\u8baf\u65f6"},"\u8baf\u65f6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mx60",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux MX60-VoIP-AG 2.6.27 #1 Tue Oct 9 05:52:56 MDT 2012 armv5tejl unknown"))),(0,l.kt)("li",{parentName:"ul"},"GSM/20,G729A/20,PCMU/20,G723/30,PCMA/20,iLBC/30")),(0,l.kt)("h3",{id:"\u4e09\u6c47synway"},"\u4e09\u6c47/Synway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.synway.cn/"},"\u4e09\u6c47"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.synway.cn/index.php/product/product-list/14"},"http://www.synway.cn/index.php/product/product-list/14")),(0,l.kt)("p",null,"\u4e09\u6c47CTI\u8bed\u97f3\u4ea7\u54c1\u5206\u4e3aSHT\u6a21\u62df\u8bed\u97f3\u5361\u3001SHD\u6570\u5b57\u4e2d\u7ee7\u5361\u3001SHN VOIP\u8bed\u97f3\u5361\u3001SHF\u7cfb\u5217\u4f20\u771f\u5361"),(0,l.kt)("p",null,"SHD-30C-CT/PCI\nSHD\u7cfb\u5217\u6570\u5b57\u4e2d\u7ee7\u5361\uff0c\u53ef\u5206\u4e3aC\u578b\u3001D\u578b\u53f7\u3001E\u578b\u53f7\u3001CAS\u5361\uff0c\u56db\u79cd\u7c7b\u578b\u3002C\u578b/D\u578b\u6570\u5b57\u5361\uff0c\u662f\u4e00\u79cd\u91c7\u7528PCI\u603b\u7ebf\u7684\u6570\u5b57\u4e2d\u7ee7\u7ebf\u8bed\u97f3\u5361\uff0c\u8be5\u7cfb\u5217\u8bed\u97f3\u5361\u53ef\u4ee5\u5b9e\u73b0\u91c7\u7528E1/T1\u6570\u5b57\u4e2d\u7ee7\u7ebf\u63a5 \u5165\u7684\u7535\u8bdd\u8bed\u97f3\u5904\u7406\u7cfb\u7edf\u6240\u9700\u7684\u7edd\u5927\u90e8\u5206\u529f\u80fd\u3002D\u578b\u6570\u5b57\u5361\u589e\u5f3a\u4e86\u56de\u6ce2\u62b5\u6d88\u7684\u80fd\u529b\uff1b\u540c\u65f6\uff0c\u91c7\u7528\u7684DMA\u6570\u636e\u8bfb\u5199\u65b9\u5f0f\u5177\u6709\u4f20\u8f93\u901f\u7387\u9ad8\u548cCPU\u5360\u7528\u7387\u5c0f\u7684\u4f18\u70b9\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u4e86\u7cfb\u7edf\u6027\u80fd\u3002E\u578b\u6570\u5b57\u4e2d\u7ee7\u5361\uff0c\u662f\u91c7\u7528PCIe\u603b\u7ebf\uff0cCAS\u8bed\u97f3\u5361\u5305\u542bSHD-120D-CT/PCI/CAS\u3001SHD-240D-CT/PCI /CAS\u7b492\u79cd\u8bed\u97f3\u5361\uff0c\u662f\u4e00\u79cd\u91c7\u7528PCI\u603b\u7ebf\u7684\u6570\u5b57\u4e2d\u7ee7\u7ebf\u8bed\u97f3\u5361\uff0c\u652f\u6301E1\u6a21\u5f0f\u4e0b1\u53f7\u4fe1\u4ee4\u7684\u547c\u53eb\u63a5\u7eed\u3002 - See more at: "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.synway.cn/index.php/product/product-content/14/203#sthash.oi5mAdNR.dpuf"},"http://www.synway.cn/index.php/product/product-content/14/203#sthash.oi5mAdNR.dpuf")),(0,l.kt)("h3",{id:"\u9f0e\u4fe1\u901a\u8fbe"},"\u9f0e\u4fe1\u901a\u8fbe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.dinstar.cn"},"\u9f0e\u4fe1\u901a\u8fbe")),(0,l.kt)("li",{parentName:"ul"},"\u4ea7\u54c1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6a21\u62df\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u5a92\u4f53\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u878d\u5408\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7ebf\u878d\u5408\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u4e91\u901a\u8baf")))),(0,l.kt)("p",null,"\u4f20\u7edf PSTN \u7ebf\u8def: \u6a21\u62df\u548c\u6570\u5b57\n\u6a21\u62df\u6280\u672f\n\u6ca1\u6709\u4fe1\u53f7\u901a\u9053,\u5927\u591a\u6570\u4fe1\u53f7\u901a\u9053\u662f\u7535\u5b50\u7684\n\u65ad\u5f00\u8fde\u63a5\u901a\u5e38\u9700\u8981\u51e0\u79d2,\u5e76\u4e14\u4e0d\u7a33\u5b9a\nFar-end supervision is minimal\n\u4e0d\u540c\u7684\u7535\u8def\u5c31\u610f\u5473\u7740\u4e0d\u540c\u7684\u97f3\u9891\u7279\u6027,\u9700\u8981\u8fdb\u884c\u8c03\u6574\n\u8fde\u63a5\u5230 Asterisk \u7684\u6a21\u62df\u7ebf\u8def\u9700\u8981\u901a\u8fc7 FOX(Foreign eXchange Office) \u7aef\u53e3\n\u5982\u679c\u60f3\u8981\u5c06\u4f20\u7edf\u7535\u8bdd\u8fde\u63a5\u5230 Asterisk \u4e5f\u9700\u8981\u540c\u6837\u7684\u8f6c\u63a5\u5361"),(0,l.kt)("p",null,"\u6570\u5b57\u7ebf\u8def\nT1,24\u8def\n\u52a0\u62ff\u5927\u6216\u7f8e\u56fd,ISDN-PRI\nE1,32\u8def\n\u4e16\u754c\u5176\u4ed6\u56fd\u5bb6,ISDN-PRI \u6216 MFC/R2\n\u4e2d\u56fd\nBRI,2\u8def\nISDN-BRI, Euro-ISDN"),(0,l.kt)("p",null,"PRI ISDN Primary Rate Interface ISDN (\u4e00\u822c\u79f0\u4e3aPRI) \u534f\u8bae\u4e3b\u8981\u8fd0\u884c\u4e8e DS1(T1/E1)\u7ebf\u8def\nMFC/R2 \u62c9\u4e01\u7f8e\u6d32\u548c\u4e9a\u6d32 (E1)"),(0,l.kt)("p",null,"Phone numbers as used for the purpose of origination are commonly called direct inward dialing numbers (DIDs)\nHistorically, a DID referred to a phone number associated with a trunk connected to customer premise equipment (CPE).\nThe number that was dialed is commonly referred to as the Dialed Number Identification Service (DNIS) number"),(0,l.kt)("p",null,"CAS-based protocol (like R2).\nPRI terminated in an RJ45 will be an ISDN connection,\nBNC Connector"),(0,l.kt)("p",null,"VoIP \u9002\u914d\u7c7b\u578b\nSingle FXS \u2013 A single FXS VoIP adapter allows you to connect one telephone. Single FXS VoIP adapters come with either one or two Ethernet ports.\nDual FXS \u2013 A dual FXS VoIP adapter allows you to connect up to two telephones. Dual FXS VoIP adapters come with either one or two Ethernet ports.\nFXO / FXS \u2013 A FXO / FXS VoIP adapter allows you to connect a single telephone and a single POTS line. These combination adapters are typically used to provide fail-over or life-line capabilities."),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u8d85\u8fc7\u4e24\u4e2a\u7ebf,\u5219\u9700\u8981\u4f7f\u7528 VoIP \u7f51\u5173"))}c.isMDXComponent=!0}}]);