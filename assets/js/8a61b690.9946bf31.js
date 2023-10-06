"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20900],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,f=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},97539:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return b}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const f={id:"istio",title:"Istio \u670d\u52a1\u7f51\u683c"},d="Istio",N={unversionedId:"devops/kubernetes/platform/istio",id:"devops/kubernetes/platform/istio",title:"Istio \u670d\u52a1\u7f51\u683c",description:"- istio/istio",source:"@site/../notes/devops/kubernetes/platform/istio.md",sourceDirName:"devops/kubernetes/platform",slug:"/devops/kubernetes/platform/istio",permalink:"/notes/devops/kubernetes/platform/istio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/platform/istio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{id:"istio",title:"Istio \u670d\u52a1\u7f51\u683c"},sidebar:"docs",previous:{title:"Istio Version",permalink:"/notes/devops/kubernetes/platform/istio-version"},next:{title:"KEDA",permalink:"/notes/devops/kubernetes/platform/keda"}},y={},b=[{value:"\u5e38\u7528\u914d\u7f6e\u9879",id:"\u5e38\u7528\u914d\u7f6e\u9879",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u81ea\u5b9a\u4e49\u5b89\u88c5",id:"\u81ea\u5b9a\u4e49\u5b89\u88c5",level:2}],v={toc:b},g="wrapper";function h(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(g,c(m(m({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"istio"}),"Istio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/istio/istio"}),"istio/istio"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"connect, manage, and secure microservices by Google, IBM, and Lyft"))),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ingressgateway \u9ed8\u8ba4\u9700\u8981 LoadBalaner - \u56e0\u6b64\u9700\u8981\u96c6\u7fa4\u80fd\u83b7\u53d6\u5230 IP - \u5728\u4e0d\u66f4\u6539\u914d\u7f6e\u7684\u524d\u63d0\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",m({parentName:"li"},{href:"../network/metallb"}),"metallb")))),(0,n.kt)("li",{parentName:"ul"},"\u67b6\u6784",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u670d\u52a1\u4e4b\u95f4\u7684\u7f51\u7edc\u901a\u4fe1"))),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u914d\u7f6e\u8def\u7531"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7b56\u7565\u548c\u91c7\u96c6"))))),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Envoy \u4ee3\u7406/Sidecar",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,n.kt)("li",{parentName:"ul"},"TLS \u7ec8\u6b62"),(0,n.kt)("li",{parentName:"ul"},"HTTP/2 gRPC \u4ee3\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u7194\u65ad"),(0,n.kt)("li",{parentName:"ul"},"\u5065\u5eb7\u68c0\u67e5"),(0,n.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u53d1\u5e03 - \u767e\u5206\u6bd4\u6d41\u91cf\u5207\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u9519\u8bef\u6ce8\u5165"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u6807\u76d1\u63a7"))),(0,n.kt)("li",{parentName:"ul"},"Mixer - \u7b56\u7565\u548c\u8fdc\u7a0b\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"Pilot - \u914d\u5408 Envoy \u5de5\u4f5c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u7ba1\u7406 - A/B \u6d4b\u8bd5\u3001\u7070\u5ea6\u53d1\u5e03"),(0,n.kt)("li",{parentName:"ul"},"\u5f39\u6027 - \u8d85\u65f6\u63a7\u5236\u3001\u91cd\u8bd5\u3001\u7194\u65ad"))),(0,n.kt)("li",{parentName:"ul"},"Citadel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5230\u670d\u52a1\u3001\u670d\u52a1\u5230\u7528\u6237 \u9274\u6743"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u5c06\u7f51\u683c\u670d\u52a1\u5185\u7684\u672a\u52a0\u5bc6\u901a\u4fe1\u5347\u7ea7\u4e3a\u52a0\u5bc6\u901a\u4fe1"),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u8c01\u80fd\u8bbf\u95ee\u4ec0\u4e48 - \u800c\u4e0d\u662f\u7b80\u5355\u7684\u4f9d\u8d56\u5e95\u5c42\u7684 IP \u9650\u5236"))),(0,n.kt)("li",{parentName:"ul"},"Galley",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6821\u9a8c\u3001\u8bfb\u53d6\u3001\u5904\u7406\u5206\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u5e95\u5c42\u7cfb\u7edf\u7684\u914d\u7f6e(\u4f8b\u5982 k8s)\u5e94\u7528\u5230 istio \u4f53\u7cfb\u4e2d"))))),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u76ee\u6807",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6700\u5927\u7684\u900f\u660e\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u643a\u6027 - \u964d\u4f4e\u5bf9\u5e95\u5c42\u7684\u611f\u77e5\u3001\u8fd0\u884c\u5728\u4efb\u4f55\u4e91\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u7684\u7b56\u7565\u63a7\u5236"))),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"base"),(0,n.kt)("li",{parentName:"ul"},"pilot"),(0,n.kt)("li",{parentName:"ul"},"proxy"),(0,n.kt)("li",{parentName:"ul"},"telemetry"),(0,n.kt)("li",{parentName:"ul"},"policy"),(0,n.kt)("li",{parentName:"ul"},"ingressGateways"),(0,n.kt)("li",{parentName:"ul"},"egressGateways"),(0,n.kt)("li",{parentName:"ul"},"cni"),(0,n.kt)("li",{parentName:"ul"},"istiod",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"pilot citadel galley"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://istio.io/latest/docs/ops/deployment/architecture/"}),"\u67b6\u6784")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://istio.io/latest/docs/ops/deployment/performance-and-scalability/"}),"Performance and Scalability"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"envoy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0.35 vCPU, 40 MB / 1000 rps"),(0,n.kt)("li",{parentName:"ul"},"+2.65 ms 90% latency"))),(0,n.kt)("li",{parentName:"ul"},"istio-telemetry - 0.6 vCPU / 1000 mesh-wide requests / second for deployments that use Mixer."),(0,n.kt)("li",{parentName:"ul"},"pilot - 1 vCPU, 1.5 GB"),(0,n.kt)("li",{parentName:"ul"},"istiod - 1 vCPU, 1.5 GB - 1000 services, 2000 sidecars"))),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u51c6\u5907 4 CPU 8G"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://engineering.hellofresh.com/ff4c26844bfb"}),"Everything We Learned Running Istio In Production \u2014 Part 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.giantswarm.io/guides/deploying-istio/"}),"How to deploy Istio in your Cluster"))))),(0,n.kt)("h2",m({},{id:"\u5e38\u7528\u914d\u7f6e\u9879"}),"\u5e38\u7528\u914d\u7f6e\u9879"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u914d\u7f6e"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"values.global.mtls.enabled"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"mTLS - \u4e0d\u5efa\u8bae\u5f00\u542f")))),(0,n.kt)("h2",m({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u914d\u7f6e\u5217\u8868\n# demo empty minimal preview remote default\n# https://istio.io/latest/docs/setup/additional-setup/config-profiles/\nistioctl profile list\n\n# \u67e5\u770b\u914d\u7f6e\u7684\u5185\u5bb9\n# \u6240\u6709\u7684\u9009\u9879\u53ef\u4ee5\u5728 apply \u7684\u65f6\u5019\u4f7f\u7528 set \u4fee\u6539\nistioctl profile dump demo\n# \u67e5\u770b\u67d0\u9879\u914d\u7f6e\nistioctl profile dump --config-path trafficManagement.components.pilot demo\n\n# \u5b89\u88c5 demo \u914d\u7f6e\n# \u53ef\u9009 default    demo    minimal sds remote\n# https://istio.io/docs/setup/additional-setup/config-profiles/\nistioctl manifest apply --set profile=demo\n\n# \u67e5\u770b\u5b89\u88c5\u7684\u670d\u52a1\nkubectl get svc -n istio-system\n\n# \u4e3a\u7a7a\u95f4\u5f00\u542f\u6ce8\u5165\nkubectl label namespace default istio-injection=enabled\n# \u6216\u8005\u5728\u521b\u5efa\u5e94\u7528\u7684\u65f6\u5019\u914d\u7f6e\u6ce8\u5165\nkubectl create -n <namespace> -f <app-spec>.yaml\n\n# \u624b\u52a8\u6ce8\u5165\nistioctl kube-inject -f <app-spec>.yaml | kubectl apply -f -\n\n# \u5378\u8f7d\nistioctl manifest generate --set profile=demo | kubectl delete -f -\n# \u5220\u9664\u7a7a\u95f4\nkubectl delete namespace istio-system\n")),(0,n.kt)("h2",m({},{id:"\u81ea\u5b9a\u4e49\u5b89\u88c5"}),"\u81ea\u5b9a\u4e49\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u4ee5\u751f\u6210 Manifest \u7136\u540e kubectk \u5b89\u88c5 - \u4e5f\u53ef\u4ee5\u770b\u5230\u505a\u4e86\u4ec0\u4e48\nistioctl manifest generate\n\nistioctl manifest generate > istio-manifest.yaml\n# \u53ef\u4ee5\u9a8c\u8bc1\u914d\u7f6e\nistioctl verify-install -f istio-manifest.yaml\n")))}h.isMDXComponent=!0}}]);