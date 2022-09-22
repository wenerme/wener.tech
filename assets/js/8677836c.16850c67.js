"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6872],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,b=p["".concat(a,".").concat(y)]||p[y]||g[y]||l;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return p},metadata:function(){return b},toc:function(){return m}});var r=n(49613),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const p={title:"Syslog"},y="Syslog",b={unversionedId:"service/observability/logging/syslog",id:"service/observability/logging/syslog",title:"Syslog",description:"- \u5b9e\u73b0",source:"@site/../notes/service/observability/logging/syslog.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/syslog",permalink:"/notes/service/observability/logging/syslog",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/logging/syslog.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"Syslog"},sidebar:"docs",previous:{title:"Loki",permalink:"/notes/service/observability/logging/loki"},next:{title:"\u6307\u6807",permalink:"/notes/service/observability/metrics/"}},f={},m=[{value:"busybox syslog",id:"busybox-syslog",level:2},{value:"rsyslog",id:"rsyslog",level:2},{value:"syslog-ng",id:"syslog-ng",level:2}],d={toc:m};function v(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)a.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},d),u),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",g({},{id:"syslog"}),"Syslog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"busybox syslog"),(0,r.kt)("li",{parentName:"ul"},"rsyslog"),(0,r.kt)("li",{parentName:"ul"},"syslog-ng"),(0,r.kt)("li",{parentName:"ul"},"fluentbit"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 514"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 UNIX Socket /dev/log"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://serverfault.com/questions/692309"}),"What is the difference between syslog, rsyslog and syslog-ng?"))))),(0,r.kt)("admonition",g({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"AlpineLinux \u9ed8\u8ba4 busybox syslog"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u4f7f\u7528\u66f4\u591a\u529f\u80fd\uff0c\u5efa\u8bae\u9009\u62e9 rsyslog"))),(0,r.kt)("h2",g({},{id:"busybox-syslog"}),"busybox syslog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"syslogd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://git.busybox.net/busybox/tree/docs/syslog.conf.txt"}),"/etc/syslog.conf"))),(0,r.kt)("h2",g({},{id:"rsyslog"}),"rsyslog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rsyslog ",(0,r.kt)("a",g({parentName:"li"},{href:"http://www.rsyslog.com/rsyslog-configuration-builder/"}),"Configuration Wizard"))),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"brew install rsyslog\n")),(0,r.kt)("h2",g({},{id:"syslog-ng"}),"syslog-ng"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://github.com/balabit/syslog-ng/blob/master/contrib/syslog-ng.conf.doc"}),"syslog-ng.conf.doc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://github.com/balabit/syslog-ng/blob/master/contrib/rhel-packaging/syslog-ng.conf"}),"syslog-ng.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://www.syslog-ng.com/technical-documents/doc/syslog-ng-open-source-edition/3.22/administration-guide/12"}),"Administration Guide"))),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-conf"}),'@version: 3.9\n\ndestination d_general {\n  file("/data/log/general.log");\n};\n\nsource s_remote {\n    tcp(ip(0.0.0.0) port(10514));\n    udp(ip(0.0.0.0) port(10514));\n};\n\nlog {\n  source(s_remote);\n  destination(d_general);\n};\n')))}v.isMDXComponent=!0}}]);