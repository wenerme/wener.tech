"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51093],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4357:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))i.call(e,n)&&p(t,n,e[n]);if(c)for(var n of c(e))s.call(e,n)&&p(t,n,e[n]);return t};const d={title:"socat"},m="socat",k={unversionedId:"os/linux/network/socat",id:"os/linux/network/socat",title:"socat",description:"- man page",source:"@site/../notes/os/linux/network/socat.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/socat",permalink:"/notes/os/linux/network/socat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/socat.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625926581,formattedLastUpdatedAt:"Jul 10, 2021",frontMatter:{title:"socat"},sidebar:"docs",previous:{title:"NMap",permalink:"/notes/os/linux/network/nmap"},next:{title:"tcpdump",permalink:"/notes/os/linux/network/tcpdump"}},f={},b=[],g={toc:b};function y(t){var e,n=t,{components:a}=n,p=((t,e)=>{var n={};for(var r in t)i.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&c)for(var r of c(t))e.indexOf(r)<0&&s.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=u(u({},g),p),o(e,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"socat"}),"socat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://www.dest-unreach.org/socat/doc/socat.html"}),"man page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/craSH/socat/blob/master/EXAMPLES"}),"EXAMPLES"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u8f6c\u53d1\u672c\u5730\u7684 8080 \u5230 \u767e\u5ea6\n# -d \u7528\u4e8e\u6253\u5f00\u65e5\u5fd7\nsocat -v -d TCP-LISTEN:8080,fork,reuseaddr TCP:baidu.com:80\n\n# \u6d4b\u8bd5\ncurl -H 'Host: baidu.com' 127.0.0.1:8080\n\n# \u8f6c\u53d1\u672c\u5730 1053 \u5230\u963f\u91cc\u516c\u7f51 dns\nsocat TCP-LISTEN:1053,fork,reuseaddr TCP:223.5.5.5:53\nsocat UDP-RECVFROM:1053,fork,reuseaddr UDP:223.5.5.5:53\n\n# \u6d4b\u8bd5\ndig -p 1053 baidu.com @127.0.0.1\n\n# \u8f6c\u53d1\u672c\u5730\u5230\u8c37\u6b4c DNS\nsocat TCP-LISTEN:53,fork,reuseaddr TCP:8.8.8.8:53\nsocat UDP-RECVFROM:53,fork,reuseaddr UDP:8.8.8.8:53\n\n# \u5e38\u7528\u547d\u4ee4\n# \u907f\u514d\u540e\u9762 SUDO \u8981\u6c42\u5bc6\u7801\nsudo ls\nsudo `which socat` TCP-LISTEN:53,fork,reuseaddr TCP:8.8.8.8:53 > socat.tcp.53.log &\nsudo `which socat` UDP-RECVFROM:53,fork,reuseaddr UDP:8.8.8.8:53 > socat.udp.53.log &\n\n# \u4f46 \"\u9632\u706b\u5899\" \u4f1a\u68c0\u6d4b\u51fa\u6765,\u4e00\u4f1a\u513f\u8f6c\u53d1\u7684 DNS \u5c31\u4e0d\u80fd\u7528\u4e86\n\n# \u76d1\u542c UDP, \u5c06\u5185\u5bb9\u8f93\u51fa\u5230 stdio\nsocat -u udp4-recv:8123 -\n# \u5ba2\u6237\u7aef\u53d1\u9001\necho \"test\" | socat - udp4-sendto:127.0.0.1:8123\n\n# \u8fde\u63a5\u540e\u542f\u52a8\u7a0b\u5e8f\nsocat -u udp-l:8123,fork exec:/bin/cat\n# tcp\nsocat -u tcp-l:80,fork exec:/bin/cat\n\n# \u8f93\u51fa\u5230\u6587\u4ef6\nsocat -u TCP-LISTEN:12456,keepalive,reuseaddr,rcvbuf=131071 STDOUT\n\n# server\nsocat exec:'bash -li',pty,stderr,setsid  tcp-listen:8999,reuseaddr\n# cli\nsocat tcp-connect:127.0.0.1:8999 file:`tty`,raw,echo=0\n\n# over socks\n# socks 10.10.1.1:1080\nsocat TCP-LISTEN:8080 SOCKS:10.10.1.1:216.58.200.238:80,socksport=1080\ncurl localhost:8080\n\n# dns udp\nsocat -v UDP-LISTEN:15353,fork,reuseaddr SOCKS:10.10.1.1:8.8.8.8:53,socksport=1080\n\n# \u914d\u5408 SSH \u4f7f\u7528\n# ProxyCommand socat - socks:127.0.0.1:%h:%p,socksport=3333\n\n# \u53ef\u4ee5\u6307\u5b9a\u672c\u5730\u5730\u5740\nSOCAT_SOCKADDR=x.y.z.t socat TCP-LISTEN:80,reuseaddr,fork,su=nobody TCP:a.b.c.d:80\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"right"}),"opt"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-d"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"fatal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-dd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"notice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-ddd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-dddd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"debug")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-D"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"log file descriptors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-u"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u53cc\u5411\u6a21\u5f0f - \u7b2c\u4e00\u4e2a\u8bfb\uff0c\u7b2c\u4e8c\u4e2a\u5199")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-U"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u53cc\u5411\u6a21\u5f0f - \u7b2c\u4e00\u4e2a\u5199\uff0c\u7b2c\u4e8c\u4e2a\u8bfb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-4"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IPv4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"-6"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IPv6")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"address type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"short"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"tcp-connect"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"tcp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"tcp-listen"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"tcp-l")))))}y.isMDXComponent=!0}}]);