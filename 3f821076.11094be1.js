(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,y=u["".concat(i,".").concat(p)]||u[p]||g[p]||l;return n?o.a.createElement(y,s(s({ref:t},c),{},{components:n})):o.a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},336:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(8),l=(n(0),n(1129)),i={title:"Syslog"},s={unversionedId:"service/observability/logging/syslog",id:"service/observability/logging/syslog",isDocsHomePage:!1,title:"Syslog",description:"Tips",source:"@site/notes/service/observability/logging/syslog.md",slug:"/service/observability/logging/syslog",permalink:"/notes/service/observability/logging/syslog",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/syslog.md",version:"current",sidebar:"docs",previous:{title:"Loki",permalink:"/notes/service/observability/logging/loki"},next:{title:"\u6307\u6807\u76d1\u63a7",permalink:"/notes/service/observability/metrics/metrics"}},a=[{value:"Tips",id:"tips",children:[]},{value:"busybox syslog",id:"busybox-syslog",children:[]},{value:"rsyslog",id:"rsyslog",children:[]},{value:"syslog-ng",id:"syslog-ng",children:[]}],c={toc:a};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"busybox syslog"),Object(l.b)("li",{parentName:"ul"},"rsyslog"),Object(l.b)("li",{parentName:"ul"},"syslog-ng"),Object(l.b)("li",{parentName:"ul"},"fluentbit"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://serverfault.com/questions/692309"},"What is the difference between syslog, rsyslog and syslog-ng?"))))),Object(l.b)("h2",{id:"busybox-syslog"},"busybox syslog"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"syslogd"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://git.busybox.net/busybox/tree/docs/syslog.conf.txt"},"/etc/syslog.conf"))),Object(l.b)("h2",{id:"rsyslog"},"rsyslog"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"rsyslog ",Object(l.b)("a",{parentName:"li",href:"http://www.rsyslog.com/rsyslog-configuration-builder/"},"Configuration Wizard"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"brew install rsyslog\n")),Object(l.b)("h2",{id:"syslog-ng"},"syslog-ng"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/balabit/syslog-ng/blob/master/contrib/syslog-ng.conf.doc"},"syslog-ng.conf.doc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/balabit/syslog-ng/blob/master/contrib/rhel-packaging/syslog-ng.conf"},"syslog-ng.conf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.syslog-ng.com/technical-documents/doc/syslog-ng-open-source-edition/3.22/administration-guide/12"},"Administration Guide"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},'@version: 3.9\n\ndestination d_general {\n  file("/data/log/general.log");\n};\n\nsource s_remote {\n    tcp(ip(0.0.0.0) port(10514));\n    udp(ip(0.0.0.0) port(10514));\n};\n\nlog {\n  source(s_remote);\n  destination(d_general);\n};\n')))}b.isMDXComponent=!0}}]);