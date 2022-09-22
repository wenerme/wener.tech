"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41461],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),k=p(r),b=a,m=k["".concat(i,".").concat(b)]||k[b]||c[b]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},40765:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return k},metadata:function(){return m},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&s(e,r,t[r]);return e};const k={title:"kube-router"},b="kube-router",m={unversionedId:"devops/kubernetes/network/kube-router",id:"devops/kubernetes/network/kube-router",title:"kube-router",description:"- cloudnativelabs/kube-router",source:"@site/../notes/devops/kubernetes/network/kube-router.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/kube-router",permalink:"/notes/devops/kubernetes/network/kube-router",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/kube-router.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656388638,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{title:"kube-router"},sidebar:"docs",previous:{title:"Kong Ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress"},next:{title:"MetalLB",permalink:"/notes/devops/kubernetes/network/metallb"}},d={},f=[],v={toc:f};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),s),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"kube-router"}),"kube-router"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/cloudnativelabs/kube-router"}),"cloudnativelabs/kube-router"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LVS/IPVS service proxy - IPVS+IPTables"),(0,n.kt)("li",{parentName:"ul"},"Pod Networking - Router Controller - GoBGP+routing"),(0,n.kt)("li",{parentName:"ul"},"Network Policy Controller - IPTables+IPSet"),(0,n.kt)("li",{parentName:"ul"},"BGP"))),(0,n.kt)("li",{parentName:"ul"},"--run-firewall"),(0,n.kt)("li",{parentName:"ul"},"--run-router"),(0,n.kt)("li",{parentName:"ul"},"--run-service-proxy"),(0,n.kt)("li",{parentName:"ul"},"kube-bridge"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/cloudnativelabs/kube-router/blob/master/docs/user-guide.md"}),"user-guide.md"))))),(0,n.kt)("admonition",c({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 DualStack - \u4e0d\u652f\u6301 IPv6"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Windows"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u66ff\u4ee3 kube-proxy\nkube-router --master=http://192.168.1.99:8080/ --run-service-proxy=true --run-firewall=false --run-router=false\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"annotation"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"values"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"kube-router.io/service.scheduler"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"lc,rr,sh,dh"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u8c03\u5ea6\u7b97\u6cd5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"kube-router.io/service.skiplbips"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u4e0d\u5e7f\u64ad lb \u5730\u5740")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://kb.linuxvirtualserver.org/wiki/IPVS#Job_Scheduling_Algorithms"}),"IPVS \u8c03\u5ea6\u7b97\u6cd5"))))}y.isMDXComponent=!0}}]);