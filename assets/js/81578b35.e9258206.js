"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58086],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return c}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),h=u(a),c=l,k=h["".concat(p,".").concat(c)]||h[c]||s[c]||n;return a?r.createElement(k,i(i({ref:t},o),{},{components:a})):r.createElement(k,i({ref:t},o))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=h;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:l,i[1]=m;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49816:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return N}});var r=a(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&o(e,a,t[a]);if(m)for(var a of m(t))u.call(t,a)&&o(e,a,t[a]);return e};const h={title:"HELM \u5305\u7ba1\u7406\u5668"},c="Helm",k={unversionedId:"devops/kubernetes/ops/helm",id:"devops/kubernetes/ops/helm",title:"HELM \u5305\u7ba1\u7406\u5668",description:"- helm/helm \u662f\u4ec0\u4e48",source:"@site/../notes/devops/kubernetes/ops/helm.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/helm",permalink:"/notes/devops/kubernetes/ops/helm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/ops/helm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664927783,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"HELM \u5305\u7ba1\u7406\u5668"},sidebar:"docs",previous:{title:"Traefik Ingress",permalink:"/notes/devops/kubernetes/network/traefik-ingress"},next:{title:"HELM2 - \u4e0d\u63a8\u8350",permalink:"/notes/devops/kubernetes/ops/helm2"}},d={},N=[{value:"\u8def\u5f84",id:"\u8def\u5f84",level:2},{value:"\u5e38\u7528\u4ed3\u5e93",id:"\u5e38\u7528\u4ed3\u5e93",level:2},{value:"\u4ed3\u5e93",id:"\u4ed3\u5e93",level:2},{value:"index.yaml",id:"indexyaml",level:2},{value:"local",id:"local",level:3},{value:"chartmuseum",id:"chartmuseum",level:3},{value:"registry",id:"registry",level:3},{value:"repo",id:"repo",level:3},{value:"Helm \u6a21\u677f",id:"helm-\u6a21\u677f",level:2},{value:"Helm Operator",id:"helm-operator",level:2},{value:"oci registry vs chart repository",id:"oci-registry-vs-chart-repository",level:2},{value:"helm repo index merge",id:"helm-repo-index-merge",level:2}],b={toc:N};function g(e){var t,a=e,{components:l}=a,o=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),o),n(t,i({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"helm"}),"Helm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/helm"}),"helm/helm")," \u662f\u4ec0\u4e48",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u4e0a\u7684\u5305\u7ba1\u7406\u5668"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://helm.sh/"}),"helm.sh"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://helm.sh/docs/helm/helm"}),"\u73af\u5883\u53d8\u91cf\u5217\u8868")))),(0,r.kt)("li",{parentName:"ul"},"nexus \u53ef\u901a\u8fc7\u63d2\u4ef6\u652f\u6301 helm ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/sonatype-nexus-community/nexus-repository-helm"}),"sonatype-nexus-community/nexus-repository-helm")),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3.0 \u8fc7\u540e\u6ca1\u6709 tiller \u4e86"),(0,r.kt)("li",{parentName:"ul"},"HELM \u53ef\u4ee5\u5355\u7eaf\u7684\u4f5c\u4e3a\u6a21\u677f\u5f15\u64ce\u6765\u4f7f\u7528 - \u4f46\u662f\u5931\u53bb\u4e86 helm \u7ba1\u7406\u6ce8\u518c\u5e94\u7528\u7684\u80fd\u529b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u4f5c\u6a21\u677f\u5f15\u64ce\uff0c\u90a3\u8fd8\u53ef\u4ee5\u9009\u62e9 Kustomize, k8comp, kdeploy, ktmpl, kuku, jinja, sed, awk, gotpl"),(0,r.kt)("li",{parentName:"ul"},"\u5931\u53bb\u7684\u80fd\u529b\uff1a \u6e05\u5355\u5206\u7ec4\u3001\u5e94\u7528\u6216\u5305\u4f9d\u8d56\u3001\u67e5\u770b\u96c6\u7fa4\u5b89\u88c5\u5e94\u7528\u3001\u6ce8\u518c\u5e94\u7528\u3001\u5e94\u7528\u7248\u672c\u56de\u6eda"))),(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4e00\u4e2a helm charts \u5c31\u662f\u4e00\u4e2a tgz"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7248\u672c\u53ef\u91cd\u590d\u5b89\u88c5\uff0crevision \u4f1a\u6709\u53d8\u5316\uff0c\u672c\u5730\u5f00\u53d1\u65f6\u7ecf\u5e38\u8fd9\u6837"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://jfrog.com/blog/helm-charts-best-practices/"}),"Helm Charts Best Practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://codefresh.io/docs/docs/new-helm/helm-best-practices/"}),"HELM Best practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://helm.sh/docs/topics/charts/#the-chartyaml-file"}),"Chart.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/arttor/helmify"}),"arttor/helmify"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"brew install helm\n\n# \u5ba2\u6237\u7aef\u7248\u672c\nhelm version\n\nhelm repo add stable http://mirror.azure.cn/kubernetes/charts/\nhelm search repo stable\n\nhelm show values stable/nextcloud\nhelm pull stable/nextcloud\nhelm pull stable/nextcloud --untar\n\n# \u5b89\u88c5\u672c\u5730 chart\nhelm install --namespace apisix -f values.yaml apisix ./\n\nhelm create my-chart\n")),(0,r.kt)("h2",s({},{id:"\u8def\u5f84"}),"\u8def\u5f84"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7cfb\u7edf"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7f13\u5b58"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u914d\u7f6e"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u6570\u636e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Linux"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/.cache/helm")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/.config/helm")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/.local/share/helm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"macOS"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Caches/helm")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Preferences/helm")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/Library/helm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Windows"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"%TEMP%\\helm")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"%APPDATA%\\helm")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"%APPDATA%\\helm"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cache/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"archive/"))),(0,r.kt)("li",{parentName:"ul"},"plugins/"),(0,r.kt)("li",{parentName:"ul"},"repository/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"repositories.lock"),(0,r.kt)("li",{parentName:"ul"},"repositories.yaml"),(0,r.kt)("li",{parentName:"ul"},"cache/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"${NAME}-index.yaml"))),(0,r.kt)("li",{parentName:"ul"},"local/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"index.yaml"))))),(0,r.kt)("li",{parentName:"ul"},"starters/")))),(0,r.kt)("h2",s({},{id:"\u5e38\u7528\u4ed3\u5e93"}),"\u5e38\u7528\u4ed3\u5e93"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"NAME"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"wener",(0,r.kt)("br",null),"offcial collection"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://wenerme.github.io/charts"}),"https://wenerme.github.io/charts"),(0,r.kt)("br",null),(0,r.kt)("a",s({parentName:"td"},{href:"https://charts.wener.tech/"}),"https://charts.wener.tech/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"traefik"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://containous.github.io/traefik-helm-chart"}),"https://containous.github.io/traefik-helm-chart"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"jetstack"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://charts.jetstack.io"}),"https://charts.jetstack.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"hashicorp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://helm.releases.hashicorp.com"}),"https://helm.releases.hashicorp.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"harbor"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://helm.goharbor.io"}),"https://helm.goharbor.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"bitnami"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://charts.bitnami.com/bitnami"}),"https://charts.bitnami.com/bitnami"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Deprecaed"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u26a0\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"stable"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://kubernetes-charts.storage.googleapis.com/"}),"https://kubernetes-charts.storage.googleapis.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"incubator"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://kubernetes-charts-incubator.storage.googleapis.com"}),"https://kubernetes-charts-incubator.storage.googleapis.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"stable",(0,r.kt)("br",null),"azure mirror"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"http://mirror.azure.cn/kubernetes/charts/"}),"http://mirror.azure.cn/kubernetes/charts/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"incubator",(0,r.kt)("br",null),"azure mirror"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"http://mirror.azure.cn/kubernetes/charts-incubator/"}),"http://mirror.azure.cn/kubernetes/charts-incubator/"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/bitnami/charts"}),"bitnami/charts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/banzaicloud/banzai-charts"}),"banzaicloud/banzai-charts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/charts"}),"helm/charts"))),(0,r.kt)("h2",s({},{id:"\u4ed3\u5e93"}),"\u4ed3\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://helm.sh/docs/topics/chart_repository"}),"The Chart Repository Guide"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTTP"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b index.yaml \u8bbf\u95ee"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/chartmuseum"}),"helm/chartmuseum"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Golang chart \u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f83\u591a\u540e\u7aef - \u4e3b\u8981\u7684\u6709",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"S3"),(0,r.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 OSS"),(0,r.kt)("li",{parentName:"ul"},"Minio"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e0a\u4f20"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/chartmuseum#basic-auth"}),"\u652f\u6301\u8ba4\u8bc1")))),(0,r.kt)("li",{parentName:"ul"},"Helm \u652f\u6301 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://helm.sh/docs/topics/registries/"}),"Registry")," \u6765\u5b58\u50a8 charts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a8\u9001\u9047\u5230\u95ee\u9898 - insufficient_scope: authorization failed ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/helm/issues/6214"}),"#6214")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u63a8\u9001\u5230 docker hub ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/helm/issues/5861"}),"#5861"))))),(0,r.kt)("h2",s({},{id:"indexyaml"}),"index.yaml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://helm.sh/docs/topics/chart_repository/"}),"https://helm.sh/docs/topics/chart_repository/"))),(0,r.kt)("h3",s({},{id:"local"}),"local"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"helm repo reindex local-repo\n")),(0,r.kt)("h3",s({},{id:"chartmuseum"}),"chartmuseum"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u672c\u5730\u5b58\u50a8\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -e DEBUG=1 \\\n  -e STORAGE=local \\\n  -e STORAGE_LOCAL_ROOTDIR=/charts \\\n  -v $(pwd)/charts:/charts \\\n  --name chartmuseum chartmuseum/chartmuseum:latest\n\n# UI\n# https://github.com/chartmuseum/ui\ndocker run --rm -it \\\n  -p 80:8080 \\\n  -e CHART_MUSESUM_URL: http://chartmuseum:8080 \\\n  --link chartmuseum:chartmuseum \\\n  --name chartmuseumui idobry/chartmuseumui:latest\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# Aliyun OSS\n# ALIBABA_CLOUD_ACCESS_KEY_ID\n# ALIBABA_CLOUD_ACCESS_KEY_SECRET\nchartmuseum --debug --port=8080 \\\n  --storage="alibaba" \\\n  --storage-alibaba-bucket="my-oss-bucket" \\\n  --storage-alibaba-prefix="" \\\n  --storage-alibaba-endpoint="oss-cn-beijing.aliyuncs.com"\n')),(0,r.kt)("h3",s({},{id:"registry"}),"registry"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"export HELM_EXPERIMENTAL_OCI=1\n\nhelm registry login -u myuser index.docker.io\nhelm chart save alpinelinux/ index.docker.io/v1/wcharts/alpinelinux:0.1.0\nhelm chart list\n# \u4f1a\u5bfc\u51fa\u5230 alpinelinux/\nhelm chart export index.docker.io/v1/wcharts/alpinelinux:0.1.0\n\n# \u63a8\u9001\u5230\u670d\u52a1\u5668\nhelm chart push index.docker.io/v1/wcharts/alpinelinux:0.1.0\nhelm chart pull index.docker.io/v1/wcharts/alpinelinux:0.1.0\n")),(0,r.kt)("h3",s({},{id:"repo"}),"repo"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"helm repo add --username=admin myrepo https://xx.xx.xx.xx\n# helm plugin install https://github.com/chartmuseum/helm-push\nhelm push hello-helm-0.1.0.tgz myrepo\n")),(0,r.kt)("h2",s({},{id:"helm-\u6a21\u677f"}),"Helm \u6a21\u677f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://pkg.go.dev/text/template"}),"https://pkg.go.dev/text/template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://masterminds.github.io/sprig/"}),"https://masterminds.github.io/sprig/"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# https://helm.sh/docs/chart_template_guide/\nhelm install --debug --dry-run goodly-guppy ./mychart\n\n# \u6e32\u67d3\u5355\u4e2a\u6a21\u677f - \u7528\u4e8e\u6d4b\u8bd5\u6392\u67e5\u95ee\u9898\nhelm template ./mychart --show-only templates/values.yaml > values.yaml\n# \u6e32\u67d3\u6574\u4e2a chart\nhelm template ./mychart\n")),(0,r.kt)("h2",s({},{id:"helm-operator"}),"Helm Operator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/fluxcd/helm-operator"}),"fluxcd/helm-operator"))),(0,r.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",s({},{id:"oci-registry-vs-chart-repository"}),"oci registry vs chart repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OCI",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u4f7f\u7528\u73b0\u6709 Docker \u4ed3\u5e93\u57fa\u7840\u8bbe\u65bd"),(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u65b9\u53ef\u80fd\u5bf9 chart \u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u597d - Chart \u5143\u4fe1\u606f\u53ef\u80fd\u5c55\u73b0\u4e0d\u5b8c\u5584"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206\u4ed3\u5e93\u8fd8\u4e0d\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"Helm 3+"))),(0,r.kt)("li",{parentName:"ul"},"Repo",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Helm 2+"),(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7406\u89e3 - HTTP \u9759\u6001\u6587\u4ef6\u670d\u52a1 - \u63d0\u4f9b index.yaml \u4f5c\u4e3a\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u73b0\u6709\u4ed3\u5e93\u529f\u80fd\u76f8\u5bf9\u5b8c\u5584")))),(0,r.kt)("h2",s({},{id:"helm-repo-index-merge"}),"helm repo index merge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"helm repo index --merge \u9700\u8981\u4e0d\u540c\u7684\u76ee\u5f55\u624d\u80fd\u751f\u6548",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/helm/helm/issues/4482"}),"#4482"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u65b9\u6848A: copy \u76ee\u5f55\ncp -r charts last\n# update charts\nhelm repo index --merge last/index.yaml charts\n\n# \u65b9\u6848B: \u5b58\u50a8\u5728\u522b\u7684\u4f4d\u7f6e\nhelm repo index --merge charts/index.yaml newer\nrsync newer/ charts/\n")))}g.isMDXComponent=!0}}]);