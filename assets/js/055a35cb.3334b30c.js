"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63042],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,h=m(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,k=s["".concat(p,".").concat(c)]||s[c]||o[c]||l;return a?r.createElement(k,i(i({ref:t},h),{},{components:a})):r.createElement(k,i({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},75597:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],m={id:"helm",title:"HELM \u5305\u7ba1\u7406\u5668"},p="Helm",u={unversionedId:"devops/kubernetes/app/helm",id:"devops/kubernetes/app/helm",title:"HELM \u5305\u7ba1\u7406\u5668",description:"- helm/helm \u662f\u4ec0\u4e48",source:"@site/notes/devops/kubernetes/app/helm.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/helm",permalink:"/notes/devops/kubernetes/app/helm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/helm.md",tags:[],version:"current",frontMatter:{id:"helm",title:"HELM \u5305\u7ba1\u7406\u5668"},sidebar:"docs",previous:{title:"Harbor",permalink:"/notes/devops/kubernetes/app/harbor"},next:{title:"HELM2 - \u4e0d\u63a8\u8350",permalink:"/notes/devops/kubernetes/app/helm2"}},h=[{value:"\u8def\u5f84",id:"\u8def\u5f84",children:[],level:2},{value:"\u5e38\u7528\u4ed3\u5e93",id:"\u5e38\u7528\u4ed3\u5e93",children:[],level:2},{value:"\u4ed3\u5e93",id:"\u4ed3\u5e93",children:[{value:"local",id:"local",children:[],level:3},{value:"chartmuseum",id:"chartmuseum",children:[],level:3},{value:"registry",id:"registry",children:[],level:3},{value:"repo",id:"repo",children:[],level:3}],level:2},{value:"Helm \u6a21\u677f",id:"helm-\u6a21\u677f",children:[],level:2},{value:"Helm Operator",id:"helm-operator",children:[],level:2},{value:"oci registry vs chart repository",id:"oci-registry-vs-chart-repository",children:[],level:2}],o={toc:h};function s(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"helm"},"Helm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"helm/helm")," \u662f\u4ec0\u4e48",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u4e0a\u7684\u5305\u7ba1\u7406\u5668"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm.sh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm"},"\u73af\u5883\u53d8\u91cf\u5217\u8868")))),(0,l.kt)("li",{parentName:"ul"},"nexus \u53ef\u901a\u8fc7\u63d2\u4ef6\u652f\u6301 helm ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sonatype-nexus-community/nexus-repository-helm"},"sonatype-nexus-community/nexus-repository-helm")),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"3.0 \u8fc7\u540e\u6ca1\u6709 tiller \u4e86"),(0,l.kt)("li",{parentName:"ul"},"HELM \u53ef\u4ee5\u5355\u7eaf\u7684\u4f5c\u4e3a\u6a21\u677f\u5f15\u64ce\u6765\u4f7f\u7528 - \u4f46\u662f\u5931\u53bb\u4e86 helm \u7ba1\u7406\u6ce8\u518c\u5e94\u7528\u7684\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u4f5c\u6a21\u677f\u5f15\u64ce\uff0c\u90a3\u8fd8\u53ef\u4ee5\u9009\u62e9 Kustomize, k8comp, kdeploy, ktmpl, kuku, jinja, sed, awk, gotpl"),(0,l.kt)("li",{parentName:"ul"},"\u5931\u53bb\u7684\u80fd\u529b\uff1a \u6e05\u5355\u5206\u7ec4\u3001\u5e94\u7528\u6216\u5305\u4f9d\u8d56\u3001\u67e5\u770b\u96c6\u7fa4\u5b89\u88c5\u5e94\u7528\u3001\u6ce8\u518c\u5e94\u7528\u3001\u5e94\u7528\u7248\u672c\u56de\u6eda"))),(0,l.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4e00\u4e2a helm charts \u5c31\u662f\u4e00\u4e2a tgz"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7248\u672c\u53ef\u91cd\u590d\u5b89\u88c5\uff0crevision \u4f1a\u6709\u53d8\u5316\uff0c\u672c\u5730\u5f00\u53d1\u65f6\u7ecf\u5e38\u8fd9\u6837"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jfrog.com/blog/helm-charts-best-practices/"},"Helm Charts Best Practices")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://codefresh.io/docs/docs/new-helm/helm-best-practices/"},"HELM Best practices")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/topics/charts/#the-chartyaml-file"},"Chart.yaml"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install helm\n\n# \u5ba2\u6237\u7aef\u7248\u672c\nhelm version\n\nhelm repo add stable http://mirror.azure.cn/kubernetes/charts/\nhelm search repo stable\n\nhelm show values stable/nextcloud\nhelm pull stable/nextcloud\nhelm pull stable/nextcloud --untar\n\nhelm create my-chart\n")),(0,l.kt)("h2",{id:"\u8def\u5f84"},"\u8def\u5f84"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7cfb\u7edf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7f13\u5b58"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linux"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME/.cache/helm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME/.config/helm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME/.local/share/helm"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"macOS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Caches/helm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Preferences/helm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$HOME/Library/helm"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Windows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%TEMP%\\helm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%APPDATA%\\helm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%APPDATA%\\helm"))))),(0,l.kt)("h2",{id:"\u5e38\u7528\u4ed3\u5e93"},"\u5e38\u7528\u4ed3\u5e93"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wener",(0,l.kt)("br",null),"offcial collection"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://wenerme.github.io/charts"},"https://wenerme.github.io/charts"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://charts.wener.tech/"},"https://charts.wener.tech/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"traefik"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://containous.github.io/traefik-helm-chart"},"https://containous.github.io/traefik-helm-chart"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jetstack"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://charts.jetstack.io"},"https://charts.jetstack.io"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hashicorp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://helm.releases.hashicorp.com"},"https://helm.releases.hashicorp.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harbor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://helm.goharbor.io"},"https://helm.goharbor.io"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deprecaed"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kubernetes-charts.storage.googleapis.com/"},"https://kubernetes-charts.storage.googleapis.com/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"incubator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kubernetes-charts-incubator.storage.googleapis.com"},"https://kubernetes-charts-incubator.storage.googleapis.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stable",(0,l.kt)("br",null),"azure mirror"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://mirror.azure.cn/kubernetes/charts/"},"http://mirror.azure.cn/kubernetes/charts/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"incubator",(0,l.kt)("br",null),"azure mirror"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://mirror.azure.cn/kubernetes/charts-incubator/"},"http://mirror.azure.cn/kubernetes/charts-incubator/"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bitnami/charts"},"bitnami/charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/banzaicloud/banzai-charts"},"banzaicloud/banzai-charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/charts"},"helm/charts"))),(0,l.kt)("h2",{id:"\u4ed3\u5e93"},"\u4ed3\u5e93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/topics/chart_repository"},"The Chart Repository Guide"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HTTP"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b index.yaml \u8bbf\u95ee"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/chartmuseum"},"helm/chartmuseum"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Golang chart \u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f83\u591a\u540e\u7aef - \u4e3b\u8981\u7684\u6709",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"S3"),(0,l.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 OSS"),(0,l.kt)("li",{parentName:"ul"},"Minio"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e0a\u4f20"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/chartmuseum#basic-auth"},"\u652f\u6301\u8ba4\u8bc1")))),(0,l.kt)("li",{parentName:"ul"},"Helm \u652f\u6301 ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/topics/registries/"},"Registry")," \u6765\u5b58\u50a8 charts",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a8\u9001\u9047\u5230\u95ee\u9898 - insufficient_scope: authorization failed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/issues/6214"},"#6214")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u63a8\u9001\u5230 docker hub ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/issues/5861"},"#5861"))))),(0,l.kt)("h3",{id:"local"},"local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo reindex local-repo\n")),(0,l.kt)("h3",{id:"chartmuseum"},"chartmuseum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u672c\u5730\u5b58\u50a8\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -e DEBUG=1 \\\n  -e STORAGE=local \\\n  -e STORAGE_LOCAL_ROOTDIR=/charts \\\n  -v $(pwd)/charts:/charts \\\n  --name chartmuseum chartmuseum/chartmuseum:latest\n\n# UI\n# https://github.com/chartmuseum/ui\ndocker run --rm -it \\\n  -p 80:8080 \\\n  -e CHART_MUSESUM_URL: http://chartmuseum:8080 \\\n  --link chartmuseum:chartmuseum \\\n  --name chartmuseumui idobry/chartmuseumui:latest\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Aliyun OSS\n# ALIBABA_CLOUD_ACCESS_KEY_ID\n# ALIBABA_CLOUD_ACCESS_KEY_SECRET\nchartmuseum --debug --port=8080 \\\n  --storage="alibaba" \\\n  --storage-alibaba-bucket="my-oss-bucket" \\\n  --storage-alibaba-prefix="" \\\n  --storage-alibaba-endpoint="oss-cn-beijing.aliyuncs.com"\n')),(0,l.kt)("h3",{id:"registry"},"registry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export HELM_EXPERIMENTAL_OCI=1\n\nhelm registry login -u myuser index.docker.io\nhelm chart save alpinelinux/ index.docker.io/v1/wcharts/alpinelinux:0.1.0\nhelm chart list\n# \u4f1a\u5bfc\u51fa\u5230 alpinelinux/\nhelm chart export index.docker.io/v1/wcharts/alpinelinux:0.1.0\n\n# \u63a8\u9001\u5230\u670d\u52a1\u5668\nhelm chart push index.docker.io/v1/wcharts/alpinelinux:0.1.0\nhelm chart pull index.docker.io/v1/wcharts/alpinelinux:0.1.0\n")),(0,l.kt)("h3",{id:"repo"},"repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add --username=admin myrepo https://xx.xx.xx.xx\n# helm plugin install https://github.com/chartmuseum/helm-push\nhelm push hello-helm-0.1.0.tgz myrepo\n")),(0,l.kt)("h2",{id:"helm-\u6a21\u677f"},"Helm \u6a21\u677f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pkg.go.dev/text/template"},"https://pkg.go.dev/text/template")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://masterminds.github.io/sprig/"},"https://masterminds.github.io/sprig/"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# https://helm.sh/docs/chart_template_guide/\nhelm install --debug --dry-run goodly-guppy ./mychart\n\n# \u6e32\u67d3\u5355\u4e2a\u6a21\u677f - \u7528\u4e8e\u6d4b\u8bd5\u6392\u67e5\u95ee\u9898\nhelm template ./mychart --show-only templates/values.yaml > values.yaml\n# \u6e32\u67d3\u6574\u4e2a chart\nhelm template ./mychart\n")),(0,l.kt)("h2",{id:"helm-operator"},"Helm Operator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fluxcd/helm-operator"},"fluxcd/helm-operator"))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"oci-registry-vs-chart-repository"},"oci registry vs chart repository"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OCI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u4f7f\u7528\u73b0\u6709 Docker \u4ed3\u5e93\u57fa\u7840\u8bbe\u65bd"),(0,l.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u65b9\u53ef\u80fd\u5bf9 chart \u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u597d - Chart \u5143\u4fe1\u606f\u53ef\u80fd\u5c55\u73b0\u4e0d\u5b8c\u5584"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u5206\u4ed3\u5e93\u8fd8\u4e0d\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"Helm 3+"))),(0,l.kt)("li",{parentName:"ul"},"Repo",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Helm 2+"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7406\u89e3 - HTTP \u9759\u6001\u6587\u4ef6\u670d\u52a1 - \u63d0\u4f9b index.yaml \u4f5c\u4e3a\u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u6709\u4ed3\u5e93\u529f\u80fd\u76f8\u5bf9\u5b8c\u5584")))))}s.isMDXComponent=!0}}]);