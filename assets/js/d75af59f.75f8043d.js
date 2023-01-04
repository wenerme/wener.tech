"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87484],{49613:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(i,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89718:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return c}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))i.call(e,n)&&m(t,n,e[n]);if(p)for(var n of p(e))u.call(e,n)&&m(t,n,e[n]);return t};const s={title:"syslog"},d="syslog",g={unversionedId:"os/busybox/syslog",id:"os/busybox/syslog",title:"syslog",description:"- syslog",source:"@site/../notes/os/busybox/syslog.md",sourceDirName:"os/busybox",slug:"/os/busybox/syslog",permalink:"/notes/os/busybox/syslog",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/busybox/syslog.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672817159,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"syslog"},sidebar:"docs",previous:{title:"mdev",permalink:"/notes/os/busybox/mdev"},next:{title:"toybox",permalink:"/notes/os/busybox/toybox"}},N={},c=[{value:"conf",id:"conf",level:2}],y={toc:c};function b(t){var e,n=t,{components:r}=n,m=((t,e)=>{var n={};for(var a in t)i.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=k(k({},y),m),l(e,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",k({},{id:"syslog"}),"syslog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"syslog",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/dev/log"))),(0,a.kt)("li",{parentName:"ul"},"klogd"),(0,a.kt)("li",{parentName:"ul"},"logger - log \u5230 syslog"),(0,a.kt)("li",{parentName:"ul"},"logread - \u4ece\u5171\u4eab\u5185\u5b58\u8bfb\u53d6 log"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://sourcegraph.com/github.com/mirror/busybox/-/blob/sysklogd/syslogd.c"}),"sysklogd/syslogd.c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://www.cnblogs.com/arnoldlu/p/10583233.html"}),"Busybox \u7684 syslogd \u8ba4\u8bc6\u4e0e\u4f7f\u7528"))))),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"syslogd -n -O -\n\n# -s \u540c\u65f6 log \u5230 stderr\n# -t TAG \u9ed8\u8ba4\u4e3a\u7528\u6237\u540d\n# -p PRIO \u6570\u5b57\u6216 FACILITY.LEVEL\nlogger Log Works\n\nsudo killall -HUP syslogd\n")),(0,a.kt)("h2",k({},{id:"conf"}),"conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/syslog.conf"),(0,a.kt)("li",{parentName:"ul"},"selector",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"facility.level"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u5b57"),(0,a.kt)("li",{parentName:"ul"},"err/warn \u4efb\u610f\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," \u4efb\u610f"),(0,a.kt)("li",{parentName:"ul"},"= \u5339\u914d"),(0,a.kt)("li",{parentName:"ul"},"! \u6392\u9664"),(0,a.kt)("li",{parentName:"ul"},"none \u4e0d\u5b58\u50a8"))),(0,a.kt)("li",{parentName:"ul"},"action",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c4\u6587\u4ef6 - /var/log/xxx.log"),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u9053\u6587\u4ef6 - |filename"),(0,a.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u8f6c\u53d1 - @hostname")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"facility"),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kern"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"0<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"user"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"1<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"mail"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"2<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"daemon"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"3<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"auth"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"4<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"syslog"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"5<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"lpr"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"6<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"news"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"7<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"uucp"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"8<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"cron"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"9<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"authpriv"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"10<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"ftp"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"11<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"16<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local1"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"17<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local2"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"18<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local3"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"19<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local4"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"20<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local5"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"21<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local6"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"22<<3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"local7"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"23<<3")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"security -> auth")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"level"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"emerg"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"alert"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"crit"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"err"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"warning"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"notice"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"info"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"debug"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"7")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"error -> err"),(0,a.kt)("li",{parentName:"ul"},"panic -> emerg"),(0,a.kt)("li",{parentName:"ul"},"warn -> wanring")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-conf"}),"# selector                                  action\nlocal2.*                                    /var/log/haproxy.log\n\nkern,user.*                                 /var/log/messages\nkern.!err                                   /var/log/critical\n*.*;auth,authpriv.none                      /var/log/noauth\nkern,user.*;kern.!=notice;*.err;syslog.none /var/log/OMG\n*.*                                         /dev/null\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"openlog"),(0,a.kt)("li",{parentName:"ul"},"syslog"),(0,a.kt)("li",{parentName:"ul"},"stelogmask"),(0,a.kt)("li",{parentName:"ul"},"closelog")))))}b.isMDXComponent=!0}}]);