"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75769],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,m=p["".concat(a,".").concat(y)]||p[y]||g[y]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],s={title:"Syslog"},a=void 0,u={unversionedId:"service/observability/logging/syslog",id:"service/observability/logging/syslog",title:"Syslog",description:"- \u5b9e\u73b0",source:"@site/notes/service/observability/logging/syslog.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/syslog",permalink:"/notes/service/observability/logging/syslog",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/syslog.md",tags:[],version:"current",frontMatter:{title:"Syslog"},sidebar:"docs",previous:{title:"Loki",permalink:"/notes/service/observability/logging/loki"},next:{title:"\u6307\u6807",permalink:"/notes/service/observability/metrics/"}},c={},g=[{value:"busybox syslog",id:"busybox-syslog",level:2},{value:"rsyslog",id:"rsyslog",level:2},{value:"syslog-ng",id:"syslog-ng",level:2}],p={toc:g};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"busybox syslog"),(0,l.kt)("li",{parentName:"ul"},"rsyslog"),(0,l.kt)("li",{parentName:"ul"},"syslog-ng"),(0,l.kt)("li",{parentName:"ul"},"fluentbit"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 514"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 UNIX Socket /dev/log"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/692309"},"What is the difference between syslog, rsyslog and syslog-ng?"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"AlpineLinux \u9ed8\u8ba4 busybox syslog"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u4f7f\u7528\u66f4\u591a\u529f\u80fd\uff0c\u5efa\u8bae\u9009\u62e9 rsyslog"))),(0,l.kt)("h2",{id:"busybox-syslog"},"busybox syslog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"syslogd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git.busybox.net/busybox/tree/docs/syslog.conf.txt"},"/etc/syslog.conf"))),(0,l.kt)("h2",{id:"rsyslog"},"rsyslog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"rsyslog ",(0,l.kt)("a",{parentName:"li",href:"http://www.rsyslog.com/rsyslog-configuration-builder/"},"Configuration Wizard"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rsyslog\n")),(0,l.kt)("h2",{id:"syslog-ng"},"syslog-ng"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/balabit/syslog-ng/blob/master/contrib/syslog-ng.conf.doc"},"syslog-ng.conf.doc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/balabit/syslog-ng/blob/master/contrib/rhel-packaging/syslog-ng.conf"},"syslog-ng.conf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.syslog-ng.com/technical-documents/doc/syslog-ng-open-source-edition/3.22/administration-guide/12"},"Administration Guide"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'@version: 3.9\n\ndestination d_general {\n  file("/data/log/general.log");\n};\n\nsource s_remote {\n    tcp(ip(0.0.0.0) port(10514));\n    udp(ip(0.0.0.0) port(10514));\n};\n\nlog {\n  source(s_remote);\n  destination(d_general);\n};\n')))}y.isMDXComponent=!0}}]);