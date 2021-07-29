"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36972],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,d=c["".concat(s,".").concat(m)]||c[m]||k[m]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},23837:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),i=["components"],o={title:"k0s"},s=void 0,u={unversionedId:"devops/kubernetes/distro/k0s",id:"devops/kubernetes/distro/k0s",isDocsHomePage:!1,title:"k0s",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/distro/k0s.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k0s",permalink:"/notes/devops/kubernetes/distro/k0s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k0s.md",version:"current",frontMatter:{title:"k0s"},sidebar:"docs",previous:{title:"autok3s",permalink:"/notes/devops/kubernetes/distro/autok3s"},next:{title:"K3S in Docker",permalink:"/notes/devops/kubernetes/distro/k3d"}},p=[{value:"k0s vs k3s",id:"k0s-vs-k3s",children:[]}],k={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c k3s \u7684\u7cbe\u7b80 k8s"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u9ed8\u8ba4 calico"),(0,l.kt)("li",{parentName:"ul"},"etcd \u5c42\u4f7f\u7528 k3s \u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/kine"},"k3s-io/kine")),(0,l.kt)("li",{parentName:"ul"},"\u80cc\u540e\u7531 Mirants \u516c\u53f8\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"bin \u5305\u542b\u4e86 containerd"),(0,l.kt)("li",{parentName:"ul"},"\u81ea 2020 \u5e74 - \u76f8\u6bd4 k3s \u8981\u5e74\u8f7b\u5f88\u591a")))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"k0s-vs-k3s"},"k0s vs k3s"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"k0s",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CIS security benchmark"),(0,l.kt)("li",{parentName:"ul"},"FIPS 140-2"))),(0,l.kt)("li",{parentName:"ul"},"k3s",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CNCF \u9879\u76ee - \u8131\u79bb\u4e86 rancher"),(0,l.kt)("li",{parentName:"ul"},"\u989d\u5916\u9ed8\u8ba4\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"helm-controller - \u652f\u6301\u90e8\u7f72 helm chart, CDR \u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"traefik v1 - \u63d0\u4f9b ingress \u80fd\u529b - \u901a\u8fc7 helm \u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"local-path-provisioner - \u63d0\u4f9b\u57fa\u4e8e\u672c\u5730\u76ee\u5f55\u7684\u5b58\u50a8\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"klipper-lb - \u57fa\u4e8e iptable \u8f6c\u53d1\u7684\u8d1f\u8f7d\u5747\u8861")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"vs."),(0,l.kt)("th",{parentName:"tr",align:null},"k0s"),(0,l.kt)("th",{parentName:"tr",align:null},"k3s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u7248\u672c \u4f8b\u5982 v1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u57fa\u4e8e k8s - \u4f8b\u5982 1.19.1+k3s1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default CNi"),(0,l.kt)("td",{parentName:"tr",align:null},"calico"),(0,l.kt)("td",{parentName:"tr",align:null},"flannel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5546\u4e1a\u516c\u53f8"),(0,l.kt)("td",{parentName:"tr",align:null},"Mirants"),(0,l.kt)("td",{parentName:"tr",align:null},"Rancher/SUSE")))))}c.isMDXComponent=!0}}]);