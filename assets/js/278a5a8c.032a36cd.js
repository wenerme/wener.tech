"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78010],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31056:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&s(t,n,e[n]);if(d)for(var n of d(e))p.call(e,n)&&s(t,n,e[n]);return t};const c={id:"chan_dahdi",title:"DAHDi Channel"},m="DAHDi",k={unversionedId:"voip/asterisk/chan_dahdi",id:"voip/asterisk/chan_dahdi",title:"DAHDi Channel",description:"Tips",source:"@site/../notes/voip/asterisk/chan_dahdi.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/chan_dahdi",permalink:"/notes/voip/asterisk/chan_dahdi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/chan_dahdi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623313312,formattedLastUpdatedAt:"Jun 10, 2021",frontMatter:{id:"chan_dahdi",title:"DAHDi Channel"},sidebar:"docs",previous:{title:"Asterisk WebRTC",permalink:"/notes/voip/asterisk/webrtc"},next:{title:"chan_dongle",permalink:"/notes/voip/asterisk/chan_dongle"}},h={},g=[{value:"Tips",id:"tips",level:2},{value:"DAHDi Trunk",id:"dahdi-trunk",level:2}],b={toc:g};function N(t){var e,n=t,{components:r}=n,s=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},b),s),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"dahdi"}),"DAHDi"),(0,a.kt)("h2",u({},{id:"tips"}),"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/asterisk/dahdi-linux"}),"asterisk/dahdi-linux"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"http://git.asterisk.org/gitweb/?p=dahdi/linux.git"}),"dahdi/linux")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/asterisk/libpri"}),"asterisk/libpri"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"http://git.asterisk.org/gitweb/?p=libpri.git"}),"libpri"))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'apk add dahdi-linux-lts\n\ndahdi_genconf modules\ncat /etc/dahdi/modules\nmodprobe <previously listed detected drivers>\ndahdi_genconf system\ndahdi_cfg\n\n\n\n# \u5148\u67e5\u770b\u6240\u6709\u7684\nlspci\n# \u7136\u540e\u53ef\u4ee5\u67e5\u770b\u5355\u4e2a\u7684\u8be6\u60c5, \u53ef\u4ee5\u770b\u5230\u4f7f\u7528\u7684\u6a21\u5757\nlspci -s 09:00.0 -vvvv\n\n# \u67e5\u770b\u6a21\u5757\u4fe1\u606f\nmodinfo dahdi\n# \u67e5\u770b\u5b89\u88c5\u7684\u6a21\u5757\nlsmod\nless /proc/modules\n# \u67e5\u770b\u53ef\u5b89\u88c5\u6a21\u5757\nls -l /lib/modules/$(uname -r)/kernel/drivers/\n# \u6a21\u5757\u5b89\u88c5\nmodprobe dahdi\n# \u79fb\u9664\nmodprobe -r wctdm24xxp\n\n# \u5982\u679c\u6a21\u5757\u662f\u62f7\u8d1d\u8fc7\u53bb\u7684, \u53ef\u80fd\u8981\u5148\u8fdb\u884c\u8be5\u64cd\u4f5c\ndepmod -a\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\ncat /proc/dahdi/1\nls /dev/dahdi/\n\n# pri\xa0show\xa0spans\n\nasterisk -rx "dahdi show version"\nasterisk -rx "pri show version"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modprobe dahdi"),(0,a.kt)("li",{parentName:"ul"},"modprobe wctdm"),(0,a.kt)("li",{parentName:"ul"},"/sys/bus/dahdi_devices"),(0,a.kt)("li",{parentName:"ul"},"dahdi -> crc_ccitt"),(0,a.kt)("li",{parentName:"ul"},"oct612x -> dahdi"),(0,a.kt)("li",{parentName:"ul"},"wct4xxp -> oct612x,dahdi")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"cli"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi create channels"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u521b\u5efa\u901a\u9053")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi destroy channels"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5220\u9664\u901a\u9053")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi restart"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5b8c\u5168\u91cd\u542f\u901a\u9053")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi set dnd"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8bbe\u7f6e/\u91cd\u7f6e\u901a\u9053 \u52ff\u6270\u6a21\u5f0f DND (Do Not Disturb)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"`dahdi set hwgain {rx"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"tx}`")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"`dahdi set swgain {rx"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"tx}`")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi show cadences"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"List cadences")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"`dahdi show channels [group"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"context]`")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi show channel"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u901a\u9053\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi show status"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u6240\u6709 DAHDI \u5361\u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dahdi show version"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"DAHDI \u7248\u672c")))),(0,a.kt)("h2",u({},{id:"dahdi-trunk"}),"DAHDi Trunk"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-conf"}),"TRUNK=DAHDI/G2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 chan_dahdi.conf \u5b9a\u4e49\u7684\u5206\u7ec4 2")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"option"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"select"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"aka"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"g"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"lowest-numbered non-busy DAHDI"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ascending sequential hunt group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"G"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"highest-numbered non-busy DAHDI"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"descending sequential hunt group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"r"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"round-robin search, starting at the next highest channel than last time"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ascending rotary hunt group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"R"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"round-robin search, starting at the next lowest channel than last time"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"descending rotary hunt group")))))}N.isMDXComponent=!0}}]);