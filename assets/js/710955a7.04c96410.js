"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94469],{51092:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(3905)),p=["components"],i={title:"HAProxy Ingress"},o=void 0,s={unversionedId:"devops/kubernetes/network/haproxy-ingress",id:"devops/kubernetes/network/haproxy-ingress",title:"HAProxy Ingress",description:"- jcmoraisjr/haproxy-ingress",source:"@site/notes/devops/kubernetes/network/haproxy-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/haproxy-ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/haproxy-ingress.md",tags:[],version:"current",frontMatter:{title:"HAProxy Ingress"},sidebar:"docs",previous:{title:"Flannel",permalink:"/notes/devops/kubernetes/network/flannel"},next:{title:"Gateway",permalink:"/notes/devops/kubernetes/network/k8s-gateway"}},u={},m=[{value:"haproxytech ingress",id:"haproxytech-ingress",level:2},{value:"Trouableshooting",id:"trouableshooting",level:2}],k={toc:m};function c(t){var e=t.components,r=(0,a.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress"},"jcmoraisjr/haproxy-ingress"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://haproxy-ingress.github.io/docs/"},"\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress/blob/05afbb6cedb7fd76cb5618e1c9156905eae75de8/rootfs/etc/templates/haproxy/haproxy.tmpl"},"\u6a21\u677f"),"\u751f\u6210\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76f4\u89c2"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709\u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},"HAProxy \u7248\u672c\u65e7\u4e00\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 acme"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5f88\u591a\u8f85\u52a9\u914d\u7f6e\u80fd\u591f\u4f7f\u5f97\u914d\u7f6e\u66f4\u52a0\u65b9\u4fbf"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 modsecurity"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 \u5916\u90e8 HAProxy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress"},"haproxytech/kubernetes-ingress"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/tree/master/documentation"},"\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/client-native"},"haproxytech/client-native"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 RuntimeAPI"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u914d\u7f6e\u6a21\u578b"))),(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf ",(0,l.kt)("inlineCode",{parentName:"li"},"haproxytech/kubernetes-ingress")," \u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"haproxytech/haproxy-alpine")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 configmap\u3001ingress\u3001service \u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 \u5916\u90e8 \u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ExternalName ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/issues/100"},"#100")),(0,l.kt)("li",{parentName:"ul"},"HTTP \u538b\u7f29 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/issues/196"},"#196")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/dataplaneapi"},"haproxytech/dataplaneapi"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u63a5\u53e3\u52a8\u6001\u914d\u7f6e HAProxy")))),(0,l.kt)("h2",{id:"haproxytech-ingress"},"haproxytech ingress"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u524d\u7f00: ingress.kubernetes.io, haproxy.org, haproxy.com"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7ee7\u627f\u5173\u7cfb: default <- Configmap <- Ingress <- Service"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/blob/master/documentation/annotations.md"},"annotation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/blog/logging-with-the-haproxy-kubernetes-ingress-controller"},"logging"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"annotation"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl-passthrough"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u900f\u4f20 SSL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl-redirect"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP -> HTTPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-ssl"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef HTTPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forwarded-for"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backend-config-snippet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path-rewrite"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"send-proxy-protocol"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"proxy,proxy-v1,proxy-v2,proxy-v2-ssl,proxy-v2-ssl-cn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u7b49\u540c\u4e8e nginx-ingress backend-protocol HTTPS\n# \u7b49\u540c\u4e8e nginx proxy_ssl_verify off;\n# HAProxy ssl verify none\nserver-ssl: true\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"configmap"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scale-server-slots"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684 server \u4e2a\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"global-config-snippet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"frontend-config-snippet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stats-config-snippet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy-protocol"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IPs or CIDRs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"syslog-server"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"proxy-protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u7684 PROXY \u5ba2\u6237\u7aef\u6765\u6e90"),(0,l.kt)("li",{parentName:"ul"},"0.0.0.0/0 \u5141\u8bb8\u6240\u6709")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"controller"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--default-backend-service"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"nginx-ingress"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--default-ssl-certificate"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/blob/master/documentation/controller.md"},"documentation/controller"))),(0,l.kt)("h2",{id:"trouableshooting"},"Trouableshooting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/haproxy/haproxy.cfg | grep -v disabled\n\nls /etc/haproxy/maps\n# host.map path-exact.map path-prefix.map sni.map\n")))}c.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{kt:function(){return k}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=s(r),c=a,g=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return r?n.createElement(g,p(p({ref:e},m),{},{components:r})):n.createElement(g,p({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,p=new Array(l);p[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);