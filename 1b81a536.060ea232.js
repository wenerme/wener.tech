(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,b(b({ref:t},d),{},{components:n})):r.a.createElement(m,b({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),i=(n(0),n(1114)),l={id:"chan_dahdi",title:"DAHDi Channel"},b={unversionedId:"voip/asterisk/chan_dahdi",id:"voip/asterisk/chan_dahdi",isDocsHomePage:!1,title:"DAHDi Channel",description:"DAHDi",source:"@site/notes/voip/asterisk/chan_dahdi.md",slug:"/voip/asterisk/chan_dahdi",permalink:"/notes/voip/asterisk/chan_dahdi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/chan_dahdi.md",version:"current",sidebar:"docs",previous:{title:"Asterisk WebRTC",permalink:"/notes/voip/asterisk/asterisk-webrtc"},next:{title:"chan_dongle",permalink:"/notes/voip/asterisk/chan_dongle"}},c=[{value:"Tips",id:"tips",children:[]},{value:"DAHDi Trunk",id:"dahdi-trunk",children:[]}],d={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"dahdi"},"DAHDi"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asterisk/dahdi-linux"},"asterisk/dahdi-linux"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=dahdi/linux.git"},"dahdi/linux")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asterisk/libpri"},"asterisk/libpri"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=libpri.git"},"libpri"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'apk add dahdi-linux-lts\n\ndahdi_genconf modules\ncat /etc/dahdi/modules\nmodprobe <previously listed detected drivers>\ndahdi_genconf system\ndahdi_cfg\n\n\n\n# \u5148\u67e5\u770b\u6240\u6709\u7684\nlspci\n# \u7136\u540e\u53ef\u4ee5\u67e5\u770b\u5355\u4e2a\u7684\u8be6\u60c5, \u53ef\u4ee5\u770b\u5230\u4f7f\u7528\u7684\u6a21\u5757\nlspci -s 09:00.0 -vvvv\n\n# \u67e5\u770b\u6a21\u5757\u4fe1\u606f\nmodinfo dahdi\n# \u67e5\u770b\u5b89\u88c5\u7684\u6a21\u5757\nlsmod\nless /proc/modules\n# \u67e5\u770b\u53ef\u5b89\u88c5\u6a21\u5757\nls -l /lib/modules/$(uname -r)/kernel/drivers/\n# \u6a21\u5757\u5b89\u88c5\nmodprobe dahdi\n# \u79fb\u9664\nmodprobe -r wctdm24xxp\n\n# \u5982\u679c\u6a21\u5757\u662f\u62f7\u8d1d\u8fc7\u53bb\u7684, \u53ef\u80fd\u8981\u5148\u8fdb\u884c\u8be5\u64cd\u4f5c\ndepmod -a\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\ncat /proc/dahdi/1\nls /dev/dahdi/\n\n# pri\xa0show\xa0spans\n\nasterisk -rx "dahdi show version"\nasterisk -rx "pri show version"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"modprobe dahdi"),Object(i.b)("li",{parentName:"ul"},"modprobe wctdm"),Object(i.b)("li",{parentName:"ul"},"/sys/bus/dahdi_devices"),Object(i.b)("li",{parentName:"ul"},"dahdi -> crc_ccitt"),Object(i.b)("li",{parentName:"ul"},"oct612x -> dahdi"),Object(i.b)("li",{parentName:"ul"},"wct4xxp -> oct612x,dahdi")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"cli"),Object(i.b)("th",{parentName:"tr",align:null},"desc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi create channels"),Object(i.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u901a\u9053")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi destroy channels"),Object(i.b)("td",{parentName:"tr",align:null},"\u5220\u9664\u901a\u9053")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi restart"),Object(i.b)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u91cd\u542f\u901a\u9053")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi set dnd"),Object(i.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e/\u91cd\u7f6e\u901a\u9053 \u52ff\u6270\u6a21\u5f0f DND (Do Not Disturb)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"`dahdi set hwgain {rx"),Object(i.b)("td",{parentName:"tr",align:null},"tx}`")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"`dahdi set swgain {rx"),Object(i.b)("td",{parentName:"tr",align:null},"tx}`")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi show cadences"),Object(i.b)("td",{parentName:"tr",align:null},"List cadences")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"`dahdi show channels [group"),Object(i.b)("td",{parentName:"tr",align:null},"context]`")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi show channel"),Object(i.b)("td",{parentName:"tr",align:null},"\u901a\u9053\u4fe1\u606f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi show status"),Object(i.b)("td",{parentName:"tr",align:null},"\u6240\u6709 DAHDI \u5361\u72b6\u6001")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dahdi show version"),Object(i.b)("td",{parentName:"tr",align:null},"DAHDI \u7248\u672c")))),Object(i.b)("h2",{id:"dahdi-trunk"},"DAHDi Trunk"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"TRUNK=DAHDI/G2\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728 chan_dahdi.conf \u5b9a\u4e49\u7684\u5206\u7ec4 2")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"option"),Object(i.b)("th",{parentName:"tr",align:null},"select"),Object(i.b)("th",{parentName:"tr",align:null},"aka"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"g"),Object(i.b)("td",{parentName:"tr",align:null},"lowest-numbered non-busy DAHDI"),Object(i.b)("td",{parentName:"tr",align:null},"ascending sequential hunt group")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"G"),Object(i.b)("td",{parentName:"tr",align:null},"highest-numbered non-busy DAHDI"),Object(i.b)("td",{parentName:"tr",align:null},"descending sequential hunt group")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"r"),Object(i.b)("td",{parentName:"tr",align:null},"round-robin search, starting at the next highest channel than last time"),Object(i.b)("td",{parentName:"tr",align:null},"ascending rotary hunt group")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"R"),Object(i.b)("td",{parentName:"tr",align:null},"round-robin search, starting at the next lowest channel than last time"),Object(i.b)("td",{parentName:"tr",align:null},"descending rotary hunt group")))))}o.isMDXComponent=!0}}]);