"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32779],{49613:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return c}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=u(n),c=r,s=k["".concat(d,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(s,i(i({ref:e},o),{},{components:n})):a.createElement(s,i({ref:e},o))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63583:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&o(t,n,e[n]);if(p)for(var n of p(e))u.call(e,n)&&o(t,n,e[n]);return t};const k={title:"IP"},c="TCP/IP",s={unversionedId:"network/internet/ip",id:"network/internet/ip",title:"IP",description:"- https://en.wikipedia.org/wiki/IP_address",source:"@site/../notes/network/internet/ip.md",sourceDirName:"network/internet",slug:"/network/internet/ip",permalink:"/notes/network/internet/ip",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/network/internet/ip.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693804740,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{title:"IP"},sidebar:"docs",previous:{title:"IEEE 802",permalink:"/notes/network/ieee-802"},next:{title:"IP \u5730\u5740\u5e93",permalink:"/notes/network/internet/ipdb"}},N={},g=[{value:"Private",id:"private",level:2},{value:"Welknown Private",id:"welknown-private",level:2},{value:"FAQ",id:"faq",level:2},{value:"IP-address ending with zero?",id:"ip-address-ending-with-zero",level:3},{value:"Tools",id:"tools",level:3},{value:"apnic",id:"apnic",level:2}],f={toc:g};function h(t){var e,n=t,{components:r}=n,o=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},f),o),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"tcpip"}),"TCP/IP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IP_address"}),"https://en.wikipedia.org/wiki/IP_address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Reserved_IP_addresses"}),"https://en.wikipedia.org/wiki/Reserved_IP_addresses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://ip.taobao.com/"}),"http://ip.taobao.com/"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u83b7\u53d6 IP\ncurl checkip.amazonaws.com\ncurl ipinfo.io/ip\ncurl ifconfig.co\ncurl ipecho.net/plain\ncurl icanhazip.com\ncurl ipv4.icanhazip.com\n\n# \u4f7f\u7528 DNS \u7684\u65b9\u5f0f\u83b7\u53d6\ndig +short myip.opendns.com @resolver1.opendns.com\n")),(0,a.kt)("h2",m({},{id:"private"}),"Private"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"CIDR"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Start"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"End"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Count"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Class"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"0.0.0.0/8"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"127.0.0.0/8"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.0.0.0/8"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.0.0.0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.255.255.255"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"16777216"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100.64.0.0/10"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100.64.0.0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100.127.255.255"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"169.254.0.0/16"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"172.16.0.0/12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"172.16.0.0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"172.31.255.255"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1048576"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"192.0.0.0/24"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"192.0.2.0/24"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"192.168.0.0/16"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"192.168.0.0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"192.168.255.255"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"65536"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"192.88.99.0/24"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"198.18.0.0/15"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"198.51.100.0/24"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"203.0.113.0/24"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"224.0.0.0/3"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"224.0.0.0/4"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"::1/128"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fc00::/7"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fe80::/10"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16\n")),(0,a.kt)("h2",m({},{id:"welknown-private"}),"Welknown Private"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"CIDR"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.42.0.0/16"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"k3s cluster-cidr")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.43.0.0/16"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"k3s service-cidr")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.244.0.0/16"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"k0s cluster-cidr")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.96.0.0/12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"k0s service-cidr")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10.96.0.10"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"k0s dns")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100.64.0.0/10"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"tailscale")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100.100.100.100"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"tailscale dns")))),(0,a.kt)("h2",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",m({},{id:"ip-address-ending-with-zero"}),"IP-address ending with zero?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u73b0\u5728\u6765\u8bf4\u662f\u6ca1\u95ee\u9898\u7684, 20 \u5e74\u524d\u6709\u9690\u6027\u7684\u5b50\u7f51\u7ea6\u5b9a, .0 \u4ee3\u8868\u7f51\u7edc, .255 \u4ee3\u8868\u5e7f\u64ad, \u8bb8\u591a\u786c\u4ef6\u8bbe\u5907\u548c\u8f6f\u4ef6\u89c4\u5219\u6709\u57fa\u4e8e\u8fd9\u6837\u7684\u5047\u8bbe, \u73b0\u5728\u90fd\u662f\u4ee5 CIDR \u4e3a\u6807\u51c6, \u56e0\u6b64 .0 \u548c .255 \u90fd\u662f\u6709\u6548\u7684\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://stackoverflow.com/questions/14915188"}),"IP-address ending with zero?"))),(0,a.kt)("h3",m({},{id:"tools"}),"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://ipjisuanqi.com/"}),"https://ipjisuanqi.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://dnsdaquan.com/"}),"https://dnsdaquan.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://ipchaxun.com/"}),"https://ipchaxun.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://icplishi.com/jiashule.com/"}),"https://icplishi.com/jiashule.com/")),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",m({},{id:"apnic"}),"apnic"),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"https://www.apnic.net/about-apnic/corporate-documents/documents/resource-guidelines/rir-statistics-exchange-format/"}),"https://www.apnic.net/about-apnic/corporate-documents/documents/resource-guidelines/rir-statistics-exchange-format/")),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/DanielPLSH/apnic"}),"https://github.com/DanielPLSH/apnic"),"\n\u6839\u636e apnic \u53d1\u5e03\u7684\u6700\u65b0 IP \u5730\u5740\uff0c\u5206\u6790\u7535\u4fe1\u3001\u8054\u901a\u3001\u79fb\u52a8\u7b49 IP \u5730\u5740\u6bb5"),(0,a.kt)("p",null,"version|registry|serial|records|startdate|enddate|UTCoffset\n",(0,a.kt)("a",m({parentName:"p"},{href:"http://ftp.apnic.net/apnic/stats/apnic/delegated-apnic-latest"}),"http://ftp.apnic.net/apnic/stats/apnic/delegated-apnic-latest")))}h.isMDXComponent=!0}}]);