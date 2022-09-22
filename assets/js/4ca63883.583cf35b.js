"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41e3],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},32810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return d}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e};const s={id:"container",title:"\u5bb9\u5668",hide_title:!0},k="\u5bb9\u5668",f={unversionedId:"devops/container/container",id:"devops/container/container",title:"\u5bb9\u5668",description:"Tips",source:"@site/../notes/devops/container/README.md",sourceDirName:"devops/container",slug:"/devops/container/",permalink:"/notes/devops/container/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603358678,formattedLastUpdatedAt:"Oct 22, 2020",frontMatter:{id:"container",title:"\u5bb9\u5668",hide_title:!0},sidebar:"docs",previous:{title:"\u5ef6\u8fdf\u6570",permalink:"/notes/devops/concept/latency"},next:{title:"apko",permalink:"/notes/devops/container/apko"}},N={},d=[{value:"Tips",id:"tips",level:2},{value:"\u96c6\u7fa4\u8c03\u5ea6",id:"\u96c6\u7fa4\u8c03\u5ea6",level:2}],h={toc:d};function b(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"\u5bb9\u5668"}),"\u5bb9\u5668"),(0,r.kt)("h2",m({},{id:"tips"}),"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRI - Container Runtime Interface - \u8fd0\u884c\u65f6\u62bd\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/kubernetes/cri-api"}),"kubernetes/cri-api")),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u5bb9\u5668\u8fd0\u884c\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u5148\u662f\u7528\u4e8e ",(0,r.kt)("a",m({parentName:"li"},{href:"https://kubernetes.io/blog/2016/12/container-runtime-interface-cri-in-kubernetes/"}),"Kubernetes")," - 2016-12 v1.5"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"docker"),(0,r.kt)("li",{parentName:"ul"},"containerd"))))),(0,r.kt)("li",{parentName:"ul"},"OCI - Open Container Initiative - \u5f00\u53d1\u5bb9\u5668\u7ec4\u7ec7 - \u5b9a\u4e49\u5bb9\u5668\u6807\u51c6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/opencontainers/image-spec"}),"opencontainers/image-spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/opencontainers/runtime-spec"}),"opencontainers/runtime-spec"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/opencontainers/runc"}),"opencontainers/runc")),(0,r.kt)("li",{parentName:"ul"},"kata-container"))))),(0,r.kt)("li",{parentName:"ul"},"CNI - Container Network Interface - \u7f51\u7edc\u5c42\u62bd\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/containernetworking/cni"}),"containernetworking/cni")))),(0,r.kt)("li",{parentName:"ul"},"CSI - Container Storage Interface - \u5b58\u50a8\u5c42\u62bd\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/container-storage-interface/spec"}),"container-storage-interface/spec")))),(0,r.kt)("li",{parentName:"ul"},"CRI-O - OCI-based implementation of Kubernetes Container Runtime Interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/cri-o/cri-o"}),"cri-o/cri-o")))),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8fd0\u884c\u65f6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rkt - Rocket - 2020 \u5e9f\u5f03"),(0,r.kt)("li",{parentName:"ul"},"lxc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/hpcng/singularity"}),"hpcng/singularity")))),(0,r.kt)("li",{parentName:"ul"},"\u7c7b VM \u5bb9\u5668",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kata Containers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6e90\u81ea OpenStack"),(0,r.kt)("li",{parentName:"ul"},"\u5e95\u5c42 QEMU"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/kata-containers/documentation/blob/master/design/architecture.md"}),"\u67b6\u6784")))),(0,r.kt)("li",{parentName:"ul"},"Nabla",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6e90\u81ea IBM"),(0,r.kt)("li",{parentName:"ul"},"Unikernel"))),(0,r.kt)("li",{parentName:"ul"},"Firecracker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Virtual Machine Manager - \u7c7b\u4f3c QEMU"))),(0,r.kt)("li",{parentName:"ul"},"gVisor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6e90\u81ea Google"),(0,r.kt)("li",{parentName:"ul"},"syscall \u62e6\u622a\u6a21\u62df"))))),(0,r.kt)("li",{parentName:"ul"},"containerd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e runc \u5b9e\u73b0 cri"),(0,r.kt)("li",{parentName:"ul"},"ctr \u76ee\u5f55"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://insujang.github.io/2019-10-31/container-runtime"}),"Container Runtime"))))),(0,r.kt)("h2",m({},{id:"\u96c6\u7fa4\u8c03\u5ea6"}),"\u96c6\u7fa4\u8c03\u5ea6"),(0,r.kt)("p",null,(0,r.kt)("img",m({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1600/1*x6-_NFEL4HhVIEelzrEQnw.png",alt:null}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monolithic scheduling",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache Hadoop YARN denote by Yahoo"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u9ad8\u6027\u80fd\u8ba1\u7b97"),(0,r.kt)("li",{parentName:"ul"},"an architecture that enforces capacity, fairness and deadlines."),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u5927\u91cf\u77ed\u671f\u8ba1\u7b97\u4efb\u52a1"))),(0,r.kt)("li",{parentName:"ul"},"Two-level scheduling",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mesos"))),(0,r.kt)("li",{parentName:"ul"},"Shared-state scheduling",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Google Omega"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"an architecture that gives control to the developers, assuming that they respect the rules concerning the priority of their jobs in the cluster"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u5c11\u91cf\u957f\u671f\u8fd0\u884c\u670d\u52a1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://medium.com/@ArmandGrillet/comparison-of-container-schedulers-c427f4f7421"}),"Comparison of Container Schedulers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://coreos.com/blog/improving-kubernetes-scheduler-performance.html"}),"Inproving kubernetes schedulers performance"))))}b.isMDXComponent=!0}}]);