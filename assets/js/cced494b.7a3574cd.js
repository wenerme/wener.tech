"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14717],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=p(n),d=r,c=k["".concat(u,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},18576:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"Windows FAQ",tags:["FAQ"]},u="Windows FAQ",p={unversionedId:"os/windows/windows-faq",id:"os/windows/windows-faq",title:"Windows FAQ",description:"Ports",source:"@site/../notes/os/windows/windows-faq.md",sourceDirName:"os/windows",slug:"/os/windows/windows-faq",permalink:"/notes/os/windows/windows-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/windows/windows-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Windows FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Windows \u73af\u5883",permalink:"/notes/os/windows/windows-env"},next:{title:"Windows FHS",permalink:"/notes/os/windows/windows-fhs"}},s={},m=[{value:"Ports",id:"ports",level:2},{value:"tuntap",id:"tuntap",level:2},{value:"AD vs LDAP",id:"ad-vs-ldap",level:2},{value:"DC vs. AD - Domain Controllers vs. Active Directory",id:"dc-vs-ad---domain-controllers-vs-active-directory",level:2},{value:"Extending Shortcut Menus",id:"extending-shortcut-menus",level:2},{value:"\u65e0 Internet \u8bbf\u95ee",id:"\u65e0-internet-\u8bbf\u95ee",level:2},{value:"\u91cd\u7f6e",id:"\u91cd\u7f6e",level:3},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:3},{value:"Workgroups vs. Domains",id:"workgroups-vs-domains",level:2},{value:"Windows 10 MDM vs Group Policy",id:"windows-10-mdm-vs-group-policy",level:2},{value:"Windows I/O \u6162",id:"windows-io-\u6162",level:2}],k={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows-faq"},"Windows FAQ"),(0,l.kt)("h2",{id:"ports"},"Ports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"service"),(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"protocol"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kerboros"),(0,l.kt)("td",{parentName:"tr",align:null},"88"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP,UDP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LDAP"),(0,l.kt)("td",{parentName:"tr",align:null},"389"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LDAP"),(0,l.kt)("td",{parentName:"tr",align:null},"636"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LDAP"),(0,l.kt)("td",{parentName:"tr",align:null},"3268"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP")))),(0,l.kt)("h2",{id:"tuntap"},"tuntap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"openvpn \u63d0\u4f9b tuntap \u8bbe\u5907",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://build.openvpn.net/downloads/releases/"},"https://build.openvpn.net/downloads/releases/")),(0,l.kt)("li",{parentName:"ul"},"Windows 10 x64 \u53ef\u80fd\u9700\u8981 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/slackhq/nebula/issues/9#issuecomment-761974328"},"\u4fee\u6539\u6ce8\u518c\u8868")))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WireGuard/wintun"},"WireGuard/wintun"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL, wintun.h \u53ef\u4ee5\u662f MIT"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/slackhq/nebula/pull/289"},"#289")," nebula \u652f\u6301 wintun")))),(0,l.kt)("h2",{id:"ad-vs-ldap"},"AD vs LDAP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LDAP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u6807\u51c6\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u76ee\u5f55\u7684\u65b9\u5f0f\u8bbf\u95ee\u5b58\u50a8\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u8d28\u540e\u7aef\u662f\u4e00\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"LDAP \u662f\u4e0e\u6570\u636e\u5e93\u7684\u901a\u4fe1\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},"AD",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u79c1\u6709\u8f6f\u4ef6\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u63d0\u9ad8\u4e86\u8ba4\u8bc1\uff0c\u76ee\u5f55\uff0c\u7b56\u7565\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 LDAP \u7684\u65b9\u5f0f\u8fdb\u884c\u4ea4\u4e92")))),(0,l.kt)("h2",{id:"dc-vs-ad---domain-controllers-vs-active-directory"},"DC vs. AD - Domain Controllers vs. Active Directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DC \u63d0\u4f9b AD \u670d\u52a1")),(0,l.kt)("h2",{id:"extending-shortcut-menus"},"Extending Shortcut Menus"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/shell/context"},"https://docs.microsoft.com/en-us/windows/win32/shell/context")),(0,l.kt)("h2",{id:"\u65e0-internet-\u8bbf\u95ee"},"\u65e0 Internet \u8bbf\u95ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"win10 \u540e\u5927\u91cf\u51fa\u73b0"),(0,l.kt)("li",{parentName:"ul"},"NCSI - Network Connectivity Status Indicator",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"active probing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dns probe"),(0,l.kt)("li",{parentName:"ul"},"http probe"))),(0,l.kt)("li",{parentName:"ul"},"passive probing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684\u5305\u7684 TTL - 8 hops \u8ba4\u4e3a\u8fde\u901a - MinimumInternetHopCount")))))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 \\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\NlaSvc\\Parameters\\Internet \u914d\u7f6e\u7684\u503c\u68c0\u6d4b"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u72b6\u6001 \\HKLM\\Software\\Policies\\Microsoft\\Windows\\NetworkConnectivityStatusIndicator",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NoActiveProvbe = 0"),(0,l.kt)("li",{parentName:"ul"},"DisablePassivePolling = 1")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6d4b\u8bd5 DNSProbe - \u8fd9\u4e2a\u76ee\u524d\u6ca1\u95ee\u9898\nnslookup dns.msftncsi.com\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"Get-NetConnectionProfile\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 EnableActiveProbing \u4e3a 1")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f02\u5e38\u503c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbeContent"),(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Connect Test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbeHost"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.msftconnecttest.com"},"www.msftconnecttest.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbeHostV6"),(0,l.kt)("td",{parentName:"tr",align:null},"ipv6.msftconnecttest.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbePath"),(0,l.kt)("td",{parentName:"tr",align:null},"connecttest.txt")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl www.msftconnecttest.com/connecttest.txt\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4fee\u6539\u4e3a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbeContent"),(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft NCSI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbeHost"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.msftncsi.com"},"www.msftncsi.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbeHostV6"),(0,l.kt)("td",{parentName:"tr",align:null},"ipv6.msftncsi.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProbePath"),(0,l.kt)("td",{parentName:"tr",align:null},"ncsi.txt")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u8ba4\u80fd\u901a\ncurl www.msftncsi.com/ncsi.txt\n")),(0,l.kt)("h3",{id:"\u91cd\u7f6e"},"\u91cd\u7f6e"),(0,l.kt)("p",null,"\u5c1d\u8bd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"netsh winsock reset")),(0,l.kt)("h3",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/crazy-max/WindowsSpyBlocker"},"crazy-max/WindowsSpyBlocker"))),(0,l.kt)("h2",{id:"workgroups-vs-domains"},"Workgroups vs. Domains"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"workgroup",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u672a\u52a0\u5165 domain \u7684\u90fd\u5c5e\u4e8e\u4e00\u4e2a workgroup"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u5730\u5c40\u57df\u7f51\u7684\u4e00\u7ec4\u7535\u8111 - \u6ca1\u6709\u63a7\u5236\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e \u6587\u4ef6 \u548c \u6253\u5370\u673a \u5171\u4eab"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 WORKGROUP"),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728\u4e0d\u9700\u8981\u5173\u5fc3"))),(0,l.kt)("li",{parentName:"ul"},"doamin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57df\u7528\u4e8e\u63a7\u5236\u5927\u91cf\u7684\u7535\u8111"),(0,l.kt)("li",{parentName:"ul"},"\u67d0\u79cd\u5c42\u9762\u9690\u542b\u8d22\u4ea7\u6240\u5c5e\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c MDM")))),(0,l.kt)("h2",{id:"windows-10-mdm-vs-group-policy"},"Windows 10 MDM vs Group Policy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Group Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f20\u7edf"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u63a7\u5236\u52a0\u5165\u57df\u7684\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 Active Directory \u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u66f4\u591a\u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"MDM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cloud first"),(0,l.kt)("li",{parentName:"ul"},"MDM-enrolled \u673a\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e91\u73af\u5883 Microsoft Azure"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u52a0\u5165\u4e5f\u53ef\u4ee5\u4e0d\u52a0\u5165\u57df\u63a7 - Active Directory vs Azure Active Directory"),(0,l.kt)("li",{parentName:"ul"},"Intune GUI \u529f\u80fd\u8584\u5f31 - \u9700\u8981\u81ea\u5b9a\u4e49 Profile")))),(0,l.kt)("h2",{id:"windows-io-\u6162"},"Windows I/O \u6162"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/WSL/issues/873#issuecomment-425272829"},"https://github.com/Microsoft/WSL/issues/873#issuecomment-425272829"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u5c42\u9762")))))}d.isMDXComponent=!0}}]);