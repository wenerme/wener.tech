"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23157],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=a,d=s["".concat(u,".").concat(k)]||s[k]||c[k]||l;return n?r.createElement(d,i(i({ref:e},m),{},{components:n})):r.createElement(d,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},48724:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"MTU"},u=void 0,p={unversionedId:"os/linux/network/mtu",id:"os/linux/network/mtu",isDocsHomePage:!1,title:"MTU",description:"- MTU - Maximum transmission unit",source:"@site/notes/os/linux/network/mtu.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/mtu",permalink:"/notes/os/linux/network/mtu",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/mtu.md",tags:[],version:"current",frontMatter:{title:"MTU"},sidebar:"docs",previous:{title:"MitmProxy",permalink:"/notes/os/linux/network/mitmproxy"},next:{title:"NFTables",permalink:"/notes/os/linux/network/nftables"}},m=[{value:"PMTU",id:"pmtu",children:[]}],c={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MTU - ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Maximum_transmission_unit"},"Maximum transmission unit"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u4f20\u8f93\u5355\u5143"),(0,l.kt)("li",{parentName:"ul"},"\u8d85\u8fc7 MTU \u4ea7\u751f \u788e\u7247/fragment",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e DF don't fragment"))))),(0,l.kt)("li",{parentName:"ul"},"Tinc \u9ed8\u8ba4 PMTU 1431"),(0,l.kt)("li",{parentName:"ul"},"Ping \u5934 28 = 20 IP + 8 ICMP")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Transport"),(0,l.kt)("th",{parentName:"tr",align:null},"MTU"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ethvernet v2"),(0,l.kt)("td",{parentName:"tr",align:null},"1500"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ethvernet jumbo frames"),(0,l.kt)("td",{parentName:"tr",align:null},"1501-9202+"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PPPoE v2"),(0,l.kt)("td",{parentName:"tr",align:null},"1492"),(0,l.kt)("td",{parentName:"tr",align:null},"PPPoE+8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IEEE 802.11/Wi-Fi"),(0,l.kt)("td",{parentName:"tr",align:null},"2304"),(0,l.kt)("td",{parentName:"tr",align:null},"WEP+8,WPA-TKIP+20,WPA2-CCMP+16")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e00\u822c\u6700\u5927 1464\n# 1500=1464+20+8+8 = Body+IP+ICMP+PPoE\nping -s 1464 baidu.com\n\n# \u4f46\u6709\u4e9b\u652f\u6301\u66f4\u5927\u7684 MTU\nping -s 2000 wener.me\n")),(0,l.kt)("h2",{id:"pmtu"},"PMTU"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PMTUD - Path MTU Discovery - \u81ea\u52a8\u53d1\u73b0\u94fe\u8def MTU",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IPv4 \u53ef\u9009, IPv6 \u5f3a\u5236"))),(0,l.kt)("li",{parentName:"ul"},"socket \u9009\u9879 IP_MTU_DISCOVER - \u9ed8\u8ba4\u5f00\u542f"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u65e0\u8fde\u63a5\uff0c\u4e0d\u7a33\u5b9a\u8fde\u63a5\u4e0d\u4f1a\u5f00\u542f PMTUD")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3a 0 \u8868\u793a\u5f00\u542f pmtu\ncat /proc/sys/net/ipv4/ip_no_pmtu_disc\n\nsudo apk add iputils\n# \u53d1\u4fe1\u606f/probe mtu\ntracepath -n 114.114.114.114\n\n# \u8fd4\u56de\u5f53\u524d\u7684\u8def\u7531\u7f13\u5b58\u548c MTU\nip route get 114.114.114.114\n")))}s.isMDXComponent=!0}}]);