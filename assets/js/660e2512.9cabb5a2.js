"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91738],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var l=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,d=c["".concat(u,".").concat(m)]||c[m]||k[m]||a;return r?l.createElement(d,o(o({ref:t},s),{},{components:r})):l.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},32138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var l=r(96600),n=r(27279),a=(r(59496),r(49613)),o=["components"],i={title:"K8S \u8bcd\u6c47\u8868",tags:["Glossary"]},u="K8S \u8bcd\u6c47\u8868",p={unversionedId:"devops/kubernetes/k8s-glossary",id:"devops/kubernetes/k8s-glossary",title:"K8S \u8bcd\u6c47\u8868",description:"- \u6807\u51c6\u5316\u8bcd\u6c47\u8868",source:"@site/../notes/devops/kubernetes/k8s-glossary.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-glossary",permalink:"/notes/devops/kubernetes/k8s-glossary",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/k8s-glossary.md",tags:[{label:"Glossary",permalink:"/notes/tags/glossary"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637655206,formattedLastUpdatedAt:"Nov 23, 2021",frontMatter:{title:"K8S \u8bcd\u6c47\u8868",tags:["Glossary"]},sidebar:"docs",previous:{title:"K8S Features",permalink:"/notes/devops/kubernetes/k8s-features"},next:{title:"\u6211\u7684 K8S \u5b9e\u8df5",permalink:"/notes/devops/kubernetes/k8s-my-practice"}},s={},k=[{value:"IaC",id:"iac",level:2},{value:"Operator",id:"operator",level:2},{value:"ConfigMap",id:"configmap",level:2},{value:"Controller",id:"controller",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Pod",id:"pod",level:2},{value:"Rollback",id:"rollback",level:2},{value:"Rollout",id:"rollout",level:2},{value:"Workload",id:"workload",level:2},{value:"Service",id:"service",level:2},{value:"Zone",id:"zone",level:2}],c={toc:k};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k8s-\u8bcd\u6c47\u8868"},"K8S \u8bcd\u6c47\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/reference/glossary"},"\u6807\u51c6\u5316\u8bcd\u6c47\u8868"))),(0,a.kt)("h2",{id:"iac"},"IaC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Infrastructure as Code"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4ee3\u7801\u6765\u5b9a\u4e49\u57fa\u7840\u8bbe\u65bd"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a CDR \u5b9a\u4e49\u90e8\u7f72\u4e00\u4e2a prometheus\uff0cCDR \u5b9a\u4e49 dns \u89e3\u6790")),(0,a.kt)("h2",{id:"operator"},"Operator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Software Bot App"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u673a\u5668\u4eba")),(0,a.kt)("h2",{id:"configmap"},"ConfigMap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API \u5bf9\u8c61 - \u4ee5 KV \u5b58\u50a8\u975e\u79c1\u5bc6\u6027\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4f5c\u73af\u5883\u53d8\u91cf\u3001\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6302\u8f7d\u4e3a\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/configmap/"},"ConfigMaps"))),(0,a.kt)("h2",{id:"controller"},"Controller"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5668"),(0,a.kt)("li",{parentName:"ul"},"ReplicaSet - \u526f\u672c\u96c6"),(0,a.kt)("li",{parentName:"ul"},"ReplicationController - \u526f\u672c\u63a7\u5236\u5668"),(0,a.kt)("li",{parentName:"ul"},"Deployments - \u90e8\u7f72"),(0,a.kt)("li",{parentName:"ul"},"StatefulSets - \u72b6\u6001\u96c6"),(0,a.kt)("li",{parentName:"ul"},"DaemonSet - \u5b88\u62a4\u96c6"),(0,a.kt)("li",{parentName:"ul"},"Garbage Collection - \u5783\u573e\u6536\u96c6"),(0,a.kt)("li",{parentName:"ul"},"TTL Controller for Finished Resources - \u5b8c\u6210\u8d44\u6e90\u7684 TTL \u63a7\u5236\u5668"),(0,a.kt)("li",{parentName:"ul"},"Jobs - \u5355\u6b21\u6267\u884c\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ul"},"CronJob - \u5468\u671f\u6267\u884c\u4efb\u52a1")),(0,a.kt)("h1",{id:"daemonset"},"DaemonSet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90fd\u6267\u884c\u4e86 Pod"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u90e8\u7f72\u7cfb\u7edf\u5b88\u62a4\u8fdb\u7a0b\uff08\u4f8b\u5982 \u65e5\u5fd7\u91c7\u96c6\uff0c\u76d1\u63a7\uff09")),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API \u5bf9\u8c61 - \u58f0\u660e Pods \u548c ReplicaSets \u7684\u66f4\u65b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u671f\u671b\u72b6\u6001\uff0c\u63a7\u5236\u5668\u4f1a\u4fee\u6539\u5b9e\u9645\u72b6\u6001\u4ee5\u8fbe\u5230\u671f\u671b\u503c"))),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5e94\u7528\u526f\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u8fd0\u884c Pods \u4e14\u6ca1\u6709\u672c\u5730\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u526f\u672c\u4e3a\u4e00\u4e2a Pod")),(0,a.kt)("h2",{id:"pod"},"Pod"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u6700\u7b80\u5355\u7684\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Pod \u6807\u793a\u4e00\u7ec4\u8fd0\u884c\u7684\u5bb9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u8fd0\u884c sidecar \u6765\u6dfb\u52a0\u989d\u5916\u7279\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7531 Deployment \u7ba1\u7406")),(0,a.kt)("h2",{id:"rollback"},"Rollback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56de\u6eda")),(0,a.kt)("h2",{id:"rollout"},"Rollout"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d1\u5e03")),(0,a.kt)("h2",{id:"workload"},"Workload"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8d1f\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u9700\u8981\u6267\u884c\u7684\u8d44\u6e90\u5bf9\u8c61",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u670d\u52a1\u5b9a\u4e49\uff0c\u662f\u4e0d\u9700\u8981\u6267\u884c\u7684"))),(0,a.kt)("li",{parentName:"ul"},"= Pod + Controller")),(0,a.kt)("h2",{id:"service"},"Service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u7ec4 Pod \u62bd\u8c61\u4e3a\u4e00\u4e2a\u7f51\u7edc\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 selector \u6765\u9009\u62e9\u76ee\u6807 Pods"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u786e\u4fdd\u7f51\u7edc\u80fd\u6307\u5411\u5230\u5de5\u4f5c\u7684 Pods"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4f1a\u6709 ClusterIP"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u670d\u52a1\u6ca1\u6709\u6307\u5b9a selector \u5219\u53ef\u4ee5\u624b\u52a8\u6307\u5b9a Endpoint",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Endpoint \u4e3a IP+Port"))),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u670d\u52a1\u540e\u652f\u6301\u670d\u52a1\u53d1\u73b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"DNS"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#service-v1-core"},"\u89c4\u8303"))),(0,a.kt)("h2",{id:"zone"},"Zone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u533a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/best-practices/multiple-zones/"},"https://kubernetes.io/docs/setup/best-practices/multiple-zones/"))))}m.isMDXComponent=!0}}]);