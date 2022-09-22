"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41461],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(r),m=a,b=k["".concat(i,".").concat(m)]||k[m]||c[m]||o;return r?n.createElement(b,u(u({ref:t},s),{},{components:r})):n.createElement(b,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},17929:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),u=["components"],l={title:"kube-router"},i="kube-router",p={unversionedId:"devops/kubernetes/network/kube-router",id:"devops/kubernetes/network/kube-router",title:"kube-router",description:"- cloudnativelabs/kube-router",source:"@site/../notes/devops/kubernetes/network/kube-router.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/kube-router",permalink:"/notes/devops/kubernetes/network/kube-router",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/network/kube-router.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"kube-router"},sidebar:"docs",previous:{title:"Kong Ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress"},next:{title:"MetalLB",permalink:"/notes/devops/kubernetes/network/metallb"}},s={},c=[],k={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kube-router"},"kube-router"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloudnativelabs/kube-router"},"cloudnativelabs/kube-router"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LVS/IPVS service proxy - IPVS+IPTables"),(0,o.kt)("li",{parentName:"ul"},"Pod Networking - Router Controller - GoBGP+routing"),(0,o.kt)("li",{parentName:"ul"},"Network Policy Controller - IPTables+IPSet"),(0,o.kt)("li",{parentName:"ul"},"BGP"))),(0,o.kt)("li",{parentName:"ul"},"--run-firewall"),(0,o.kt)("li",{parentName:"ul"},"--run-router"),(0,o.kt)("li",{parentName:"ul"},"--run-service-proxy"),(0,o.kt)("li",{parentName:"ul"},"kube-bridge"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloudnativelabs/kube-router/blob/master/docs/user-guide.md"},"user-guide.md"))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 DualStack - \u4e0d\u652f\u6301 IPv6"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Windows"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u66ff\u4ee3 kube-proxy\nkube-router --master=http://192.168.1.99:8080/ --run-service-proxy=true --run-firewall=false --run-router=false\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"annotation"),(0,o.kt)("th",{parentName:"tr",align:null},"values"),(0,o.kt)("th",{parentName:"tr",align:null},"note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-router.io/service.scheduler"),(0,o.kt)("td",{parentName:"tr",align:null},"lc,rr,sh,dh"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8c03\u5ea6\u7b97\u6cd5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-router.io/service.skiplbips"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5e7f\u64ad lb \u5730\u5740")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://kb.linuxvirtualserver.org/wiki/IPVS#Job_Scheduling_Algorithms"},"IPVS \u8c03\u5ea6\u7b97\u6cd5"))))}m.isMDXComponent=!0}}]);