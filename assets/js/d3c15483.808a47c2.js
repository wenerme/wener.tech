"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37556],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=a,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(c,o(o({ref:e},d),{},{components:n})):r.createElement(c,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46770:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"udhcpc"},p=void 0,u={unversionedId:"os/busybox/udhcpc",id:"os/busybox/udhcpc",title:"udhcpc",description:"- \u9ed8\u8ba4\u914d\u7f6e /etc/udhcpc/udhcpc.conf",source:"@site/notes/os/busybox/udhcpc.md",sourceDirName:"os/busybox",slug:"/os/busybox/udhcpc",permalink:"/notes/os/busybox/udhcpc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/udhcpc.md",tags:[],version:"current",frontMatter:{title:"udhcpc"},sidebar:"docs",previous:{title:"toybox",permalink:"/notes/os/busybox/toybox"},next:{title:"CentOS",permalink:"/notes/os/centos/"}},d={},m=[{value:"default.script",id:"defaultscript",level:2}],s={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e /etc/udhcpc/udhcpc.conf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RESOLV_CONF=no - \u4e0d\u4fee\u6539 resolve.conf"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u811a\u672c /usr/share/udhcpc/default.script",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u914d\u7f6e\u540e\uff0c\u8c03\u7528\u811a\u672c\u8fdb\u884c\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"udhcpc.conf \u5185\u53d8\u91cf\u5f71\u54cd\u914d\u7f6e\u903b\u8f91"))),(0,l.kt)("li",{parentName:"ul"},"signals",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SIGUSR1 - \u5237\u65b0\u72b6\u6001\uff0c\u4f1a\u4ece\u65b0\u83b7\u53d6 IP"),(0,l.kt)("li",{parentName:"ul"},"SIGUSR2 - \u91ca\u653e\u5f53\u524d\u79df\u7ea6\uff0c\u8fdb\u5165\u4e0d\u6d3b\u8dc3\u72b6\u6001\uff0c\u53d1\u9001 SIGUSR1 \u4fe1\u53f7\u53ef\u6fc0\u6d3b"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://udhcp.busybox.net/README.udhcpc"},"https://udhcp.busybox.net/README.udhcpc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Udhcpc"},"https://wiki.alpinelinux.org/wiki/Udhcpc"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u624b\u52a8\u7533\u8bf7\u5730\u5740\nudhcpc -i eth1 -q\n")),(0,l.kt)("h2",{id:"defaultscript"},"default.script"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u811a\u672c\u53d8\u91cf")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME"),' \u53d8\u91cf\u6216 "/"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$PATH")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$PATH"),' \u53d8\u91cf\u6216 "/bin:/usr/bin:/sbin:/usr/sbin"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1")),(0,l.kt)("td",{parentName:"tr",align:null},"action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interface"),(0,l.kt)("td",{parentName:"tr",align:null},"interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"ip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"siaddr"),(0,l.kt)("td",{parentName:"tr",align:null},"bootp next server option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sname"),(0,l.kt)("td",{parentName:"tr",align:null},"bootp server name option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boot_file"),(0,l.kt)("td",{parentName:"tr",align:null},"bootp boot file option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subnet"),(0,l.kt)("td",{parentName:"tr",align:null},"subnet mask")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timezone"),(0,l.kt)("td",{parentName:"tr",align:null},"Offset in seconds from UTC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"router"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of routers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timesvr"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of time servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namesvr"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of IEN 116 name servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dns"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of DNS server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logsvr"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of MIT LCS UDP log servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookiesvr"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of RFC 865 cookie servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lprsvr"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of LPR servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"The assigned hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootsize"),(0,l.kt)("td",{parentName:"tr",align:null},"The length in 512 octect blocks of the bootfile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},"The domain name of the network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"swapsvr"),(0,l.kt)("td",{parentName:"tr",align:null},"The IP address of the client's swap server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rootpath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path name of the client's root disk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ipttl"),(0,l.kt)("td",{parentName:"tr",align:null},"The TTL to use for this network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mtu"),(0,l.kt)("td",{parentName:"tr",align:null},"The MTU to use for this network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broadcast"),(0,l.kt)("td",{parentName:"tr",align:null},"The broadcast address for this network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ntpsrv"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of NTP servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wins"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of WINS servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lease"),(0,l.kt)("td",{parentName:"tr",align:null},"The lease time, in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dhcptype"),(0,l.kt)("td",{parentName:"tr",align:null},"DHCP message type (safely ignored)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serverid"),(0,l.kt)("td",{parentName:"tr",align:null},"The IP of the server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Reason for a DHCPNAK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tftp"),(0,l.kt)("td",{parentName:"tr",align:null},"The TFTP server name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootfile"),(0,l.kt)("td",{parentName:"tr",align:null},"The bootfile name")))))}k.isMDXComponent=!0}}]);