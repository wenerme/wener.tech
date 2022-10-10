"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5666],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=u(a),g=r,N=o["".concat(s,".").concat(g)]||o[g]||k[g]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},43197:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return o},metadata:function(){return N},toc:function(){return c}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&m(t,a,e[a]);return t};const o={title:"Kubernetes Networking Awesome",tags:["Awesome"]},g="Kubernetes Networking Awesome",N={unversionedId:"devops/kubernetes/network/k8s-network-awesome",id:"devops/kubernetes/network/k8s-network-awesome",title:"Kubernetes Networking Awesome",description:"- kube-router",source:"@site/../notes/devops/kubernetes/network/k8s-network-awesome.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-network-awesome",permalink:"/notes/devops/kubernetes/network/k8s-network-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/k8s-network-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649946978,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"Kubernetes Networking Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"},next:{title:"K8S Network FAQ",permalink:"/notes/devops/kubernetes/network/k8s-network-faq"}},d={},c=[{value:"Ingress &amp; Gateway",id:"ingress--gateway",level:2},{value:"CNI",id:"cni",level:2},{value:"Overlay",id:"overlay",level:2}],h={toc:c};function b(t){var e,a=t,{components:r}=a,m=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},h),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"kubernetes-networking-awesome"}),"Kubernetes Networking Awesome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"kube-router"),(0,n.kt)("li",{parentName:"ul"},"metallb"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/k8snetworkplumbingwg"}),"k8snetworkplumbingwg"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/k8snetworkplumbingwg/multus-cni"}),"multus-cni")))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://rancher.com/blog/2019/2019-03-21-comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/"}),"Comparing Kubernetes CNI Providers: Flannel, Calico, Canal, and Weave"))))),(0,n.kt)("h2",k({},{id:"ingress--gateway"}),"Ingress & Gateway"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ingress V2 -> Gateway"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/#additional-controllers"}),"Ingress Controller")," \u5b9e\u73b0")),(0,n.kt)("admonition",k({},{title:"Ingress \u5b9e\u73b0\u60c5\u51b5",type:"tip"}),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u9488\u5bf9\u5b9e\u73b0 Ingress API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4e0d\u66b4\u9732\u989d\u5916\u7684 CDR"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ingress-nginx"))),(0,n.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u73b0\u6709 Web \u670d\u52a1\u652f\u6301 Ingress",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u652f\u6301\u81ea\u5b9a\u4e49 CDR"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 traefik"))),(0,n.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u73b0\u6709 \u5e73\u53f0 \u652f\u6301 Ingress",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u652f\u6301 \u63a5\u53e3 \u64cd\u4f5c\u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6709\u72b6\u6001"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 kong, apisix"))))),(0,n.kt)("admonition",k({},{title:"Ingress \u9009\u62e9",type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6700\u597d\u9009\u62e9\u7b80\u5355\u5b9e\u7528\u719f\u6089\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5df2\u77e5\u600e\u4e48\u5b9a\u4e49\u4e00\u4e9b\u7279\u6b8a\u89c4\u5219"))),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8f7b\u91cf\uff0c\u529f\u80fd\u5355\u4e00\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u8bc1\u4e66\u5c3d\u91cf\u914d\u5408 cert-manager \u4f7f\u7528"))),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u590d\u6742 API \u7f51\u5173\u573a\u666f\u6700\u597d\u5229\u7528\u591a IngressClass \u6216 \u901a\u8fc7\u670d\u52a1 \u8fdb\u884c\u7ee7\u627f\u4f7f\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4f7f\u7528 kong \u6216 apisix \u7edf\u4e00\u7ba1\u7406 API - ingress \u6267\u884c \u7f51\u5173\u670d\u52a1"))),(0,n.kt)("li",{parentName:"ul"},"\u5c06 Ingress \u770b\u4f5c\u662f\u53cd\u5411\u4ee3\u7406\u7684\u66ff\u4ee3"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350 - ingress-nginx"),(0,n.kt)("li",{parentName:"ul"},"IngressClass \u53ef\u914d\u5408\u4f7f\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HAProxy \u64c5\u957f TLS\u3001SNI\u3001LB"),(0,n.kt)("li",{parentName:"ul"},"Nginx \u64c5\u957f \u53cd\u5411\u4ee3\u7406"),(0,n.kt)("li",{parentName:"ul"},"Envoy \u64c5\u957f \u534f\u8bae\u611f\u77e5\u3001\u5b9a\u5236\u6027\u9ad8"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7f51\u5173 \u64c5\u957f API \u7ba1\u7406\u3001\u96c6\u6210\u3001Web \u53ef\u89c6\u5316\u7ba1\u7406"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"ingress"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"stars"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"based on"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"ingress"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"gateway"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"governance"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/nginx-ingress"}),"ingress-nginx")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/kubernetes/ingress-nginx",alt:"ingress-nginx-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nginx"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udd34"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/haproxy-ingress"}),"haproxy-ingress")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/jcmoraisjr/haproxy-ingress",alt:"haproxy-ingress-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"haproxy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/haproxytech/kubernetes-ingress"}),"haproxytech-ingress")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/haproxytech/kubernetes-ingress",alt:"haproxytech-ingress-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"haproxy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udd34"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"haproxytech")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"istio"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"envoy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"CNCF/google")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/projectcontour/contour"}),"contour")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"envoy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"CNCF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/traefik-ingress"}),"traefik")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"traefik"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/solo-io/gloo"}),"gloo")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"envoy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/emissary-ingress/emissary"}),"Emissary-Ingress")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/emissary-ingress/emissary",alt:"emissary-ingress-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"envoy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/Kong/kubernetes-ingress-controller"}),"kong")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nginx/kong"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Kong")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/apache/apisix-ingress-controller"}),"apisix")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nginx/apisix"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Apache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/citrix/citrix-k8s-ingress-controller"}),"citrix")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Citrix ADC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/saarasio/enroute"}),"enroute")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"envoy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"CNCF/saarasio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/megaease/easegress"}),"easegress")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/megaease/easegress",alt:"easegress-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"easegress"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"megaease")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/voyagermesh/voyager"}),"voyager")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"haproxy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AppsCode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/TykTechnologies/tyk-operator"}),"tyk")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"typ"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/zalando/skipper"}),"skipper")),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"skipper"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\ud83d\udfe2"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ingress-nginx",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ssl passthrough \u6027\u80fd\u95ee\u9898 ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/kubernetes/ingress-nginx/issues/7827"}),"ingress-nginx#7827")))),(0,n.kt)("li",{parentName:"ul"},"haproxy-ingress",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5916\u90e8 HAProxy")))),(0,n.kt)("h2",k({},{id:"cni"}),"CNI"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"vs."),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"starts"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"IPv6"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Windows"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Policy"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/calico"}),"calico")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/projectcalico/calico",alt:"calico-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/kube-router"}),"kube-router")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/cloudnativelabs/kube-router",alt:"kube-router-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/flannel"}),"flannel")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/flannel-io/flannel",alt:"flannel-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/notes/devops/kubernetes/network/cilium"}),"cilium")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("img",k({parentName:"td"},{src:"https://img.shields.io/github/stars/cilium/cilium",alt:"cilium-stars"}))),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u274c"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2705")))),(0,n.kt)("admonition",k({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 IPv6 \u4e5f\u4e0d\u652f\u6301 DualStack"),(0,n.kt)("li",{parentName:"ul"},"NetworkPolicy \u652f\u6301\u63a7\u5236 Ingress \u548c Egress \u7f51\u7edc"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"kube-router",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"layer 3, lvs/ipvs"))),(0,n.kt)("li",{parentName:"ul"},"flannel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"overlay"),(0,n.kt)("li",{parentName:"ul"},"\u8f7b\u91cf, \u4e13\u6ce8\u7f51\u7edc\u5c42"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7aef: vxlan, host-gw, udp, ipip, ipsec, wireguard"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e: etcd, k8s api"))),(0,n.kt)("li",{parentName:"ul"},"calico",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"layer 3, overlay, BGP,"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7aef: vxlan, pip, eBPF, WindowsHNS"),(0,n.kt)("li",{parentName:"ul"},"IPv6 \u4e0d\u652f\u6301 IPIP/VXLAN ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/projectcalico/calico/issues/5206"}),"calico#5206")))),(0,n.kt)("li",{parentName:"ul"},"cilium",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"layer 3/4/7, eBPF"),(0,n.kt)("li",{parentName:"ul"},"IPv6 ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/cilium/cilium/issues/13891"}),"cilium#13891")))),(0,n.kt)("li",{parentName:"ul"},"weave",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IPsec ESP"))),(0,n.kt)("li",{parentName:"ul"},"canal - \u505c\u6b62 - calico+flannel - \u76ee\u524d calico \u5185\u7f6e vxlan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u7ec4\u4ef6\u529f\u80fd\u9009\u9879")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Policy"),(0,n.kt)("li",{parentName:"ul"},"IPAM"),(0,n.kt)("li",{parentName:"ul"},"CNI"),(0,n.kt)("li",{parentName:"ul"},"Overlay - VXLAN, IPIP, WG, IPIP, IPSec"),(0,n.kt)("li",{parentName:"ul"},"Routing - BGP, VPC")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"}),"https://kubernetes.io/docs/concepts/cluster-administration/networking/"))),(0,n.kt)("h2",k({},{id:"overlay"}),"Overlay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tinc"),(0,n.kt)("li",{parentName:"ul"},"n2n")))}b.isMDXComponent=!0}}]);