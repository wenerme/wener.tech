(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1083:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),o=r,h=m["".concat(c,".").concat(o)]||m[o]||u[o]||l;return a?n.a.createElement(h,b(b({ref:t},p),{},{components:a})):n.a.createElement(h,b({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=o;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<l;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},318:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),l=(a(0),a(1083)),c={id:"rancher",title:"Rancher UI"},b={unversionedId:"devops/kubernetes/platform/rancher",id:"devops/kubernetes/platform/rancher",isDocsHomePage:!1,title:"Rancher UI",description:"Rancher",source:"@site/notes/devops/kubernetes/platform/rancher.md",slug:"/devops/kubernetes/platform/rancher",permalink:"/notes/devops/kubernetes/platform/rancher",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/platform/rancher.md",version:"current",sidebar:"docs",previous:{title:"Kubesphere",permalink:"/notes/devops/kubernetes/platform/kubesphere"},next:{title:"K8S Apps",permalink:"/notes/devops/kubernetes/app/app-cookbook"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"Docker \u5355\u673a",id:"docker-\u5355\u673a",children:[]},{value:"K3S \u96c6\u7fa4",id:"k3s-\u96c6\u7fa4",children:[]},{value:"RKE",id:"rke",children:[]}]},{value:"K8S \u8fd0\u884c Rancher",id:"k8s-\u8fd0\u884c-rancher",children:[]},{value:"\u96c6\u7fa4\u5bfc\u5165",id:"\u96c6\u7fa4\u5bfc\u5165",children:[]},{value:"FAQ",id:"faq",children:[{value:"Waiting for server-url setting to be set",id:"waiting-for-server-url-setting-to-be-set",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"rancher"},"Rancher"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kubernetes \u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0 - \u504f\u8fd0\u7ef4"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://rancher.com/"},"Rancher")," - \u5b9a\u4f4d\u4e8e K8S \u7684 UI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"rancher/rancher")))),Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("del",{parentName:"li"},"\u652f\u6301 Helm 3 ",Object(l.b)("a",{parentName:"del",href:"https://github.com/rancher/rancher/issues/20596"},"#20596"))))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c rancher \u662f\u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8fd0\u884c\u5728 k8s \u96c6\u7fa4\uff0c\u90a3\u4e48\u96c6\u7fa4\u540d\u5b57\u9ed8\u8ba4\u5c31\u4e3a local"),Object(l.b)("li",{parentName:"ul"},"HA \u90e8\u7f72\u662f\u901a\u8fc7 Helm \u90e8\u7f72\u5728 k8s \u96c6\u7fa4"),Object(l.b)("li",{parentName:"ul"},"rancher \u7684\u76d1\u63a7\u9ed8\u8ba4\u662f\u6eda\u52a8\u7684 12h - \u4e0d\u4f1a\u843d\u76d8 - \u56e0\u6b64 rancher \u5b89\u88c5\u4e0d\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"\u542f\u7528\u4e86 istio \u4f1a\u6709",Object(l.b)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-admin/tools/istio/"},"\u4e24\u4e2a Ingress")),Object(l.b)("li",{parentName:"ul"},"Rancher \u9ed8\u8ba4\u4f1a\u8df3\u8f6c https - \u5982\u679c\u901a\u8fc7\u53cd\u5411\u4ee3\u7406\uff0c\u4e14\u4f7f\u7528\u7684\u81ea\u5df1\u9881\u53d1\u8bc1\u4e66\u9700\u8981\u53cd\u5411\u4ee3\u7406\u4e0d\u9a8c\u8bc1\u540e\u7aef\u8bc1\u4e66\u624d\u80fd\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u7684 Helm \u5e94\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cluster-istio",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kali ",Object(l.b)("inlineCode",{parentName:"li"},"https://rancher.wener.me/k8s/clusters/local/api/v1/namespaces/istio-system/services/kiali-http:80/proxy/")),Object(l.b)("li",{parentName:"ul"},"Jeager ",Object(l.b)("inlineCode",{parentName:"li"},"https://rancher.wener.me/k8s/clusters/local/api/v1/namespaces/istio-system/services/tracing:80/proxy/")))),Object(l.b)("li",{parentName:"ul"},"monitoring-operator",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf ",Object(l.b)("inlineCode",{parentName:"li"},"rancher/coreos-prometheus-operator")))),Object(l.b)("li",{parentName:"ul"},"cluster-monitoring",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Grafana ",Object(l.b)("inlineCode",{parentName:"li"},"https://rancher.wener.me/k8s/clusters/local/api/v1/namespaces/cattle-prometheus/services/http:access-grafana:80/proxy/")),Object(l.b)("li",{parentName:"ul"},"Prometheus ",Object(l.b)("inlineCode",{parentName:"li"},"https://rancher.wener.me/k8s/clusters/local/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/graph")),Object(l.b)("li",{parentName:"ul"},"Prometheus \u7aef\u53e3\u6620\u5c04\u7684\u662f 9796"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/"},"Setting up Kubernetes Clusters in Rancher"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Rancher \u542f\u52a8\u7684"),Object(l.b)("li",{parentName:"ul"},"\u6258\u7ba1\u7684"),Object(l.b)("li",{parentName:"ul"},"\u5bfc\u5165\u7684"))),Object(l.b)("li",{parentName:"ul"},"Rancher \u955c\u50cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://mirror.cnrancher.com"},"http://mirror.cnrancher.com")),Object(l.b)("li",{parentName:"ul"},"Docker \u955c\u50cf registry.cn-hangzhou.aliyuncs.com/rancher")))))),Object(l.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.x/en/installation/requirements/"},"\u5b89\u88c5\u8981\u6c42")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.x/en/installation/k8s-install/create-nodes-lb/"},"\u96c6\u7fa4\u5b89\u88c5\u8981\u6c42"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"K3S \u4e24\u4e2a\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"RKE \u4e09\u4e2a\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u4f1a\u521b\u5efa Ingress"))),Object(l.b)("li",{parentName:"ul"},"DNS")))),Object(l.b)("h3",{id:"docker-\u5355\u673a"},"Docker \u5355\u673a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5c06 ",Object(l.b)("inlineCode",{parentName:"li"},"rancher/rancher")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"rancher/rancher-agent")," \u8fd0\u884c\u5728\u540c\u4e00\u4e2a\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u6301\u4e45\u5316\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u5668\u5185\u4f1a\u542f\u52a8 K3S")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u89c4\u6a21"),Object(l.b)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),Object(l.b)("th",{parentName:"tr",align:null},"\u8282\u70b9"),Object(l.b)("th",{parentName:"tr",align:null},"vCPU"),Object(l.b)("th",{parentName:"tr",align:null},"RAM"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Small"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"4 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Medium"),Object(l.b)("td",{parentName:"tr",align:null},"15"),Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"8 GB")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"docker pull rancher/rancher:stable\n\n# Rancher \u5355\u8282\u70b9\u542f\u52a8\n# \u5b58\u50a8\u4f7f\u7528 etcd\n# \u5982\u679c\u4e0d\u9700\u8981\u8bc1\u4e66\u53ef\u4ee5\u4f7f\u7528 --no-cacerts \u7136\u540e\u5728\u5916\u9762\u53cd\u5411\u4ee3\u7406\u5230 80 \u5373\u53ef\n# \u5982\u679c\u5e26\u8bc1\u4e66 X-Forwarded-Proto \u9700\u8981\u8bbe\u7f6e\u4e3a https \u5426\u5219 websocket \u53ef\u80fd\u4f1a\u6709\u95ee\u9898\ndocker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v $PWD/rancher/data:/var/lib/rancher \\\n  -v $PWD/rancher/auditlog:/var/log/auditlog \\\n  -e AUDIT_LEVEL=1 \\\n  --name rancher rancher/rancher:stable --no-cacerts\n\n# \u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u8bc1\u4e66\n# \u4f8b\u5982\u4f7f\u7528 lego \u7533\u8bf7\u7684\u8bc1\u4e66 - \u6ce8\u610f\u9700\u8981 --no-cacerts \u53c2\u6570 - \u56e0\u4e3a\u662f\u5df2\u77e5 CA\n# \u4e0d\u9700\u8981 ca /etc/rancher/ssl/cacerts.pem\ncat $LEGO_PATH/certificates/$DOMAIN.crt $LEGO_PATH/certificates/$DOMAIN.key > $LEGO_PATH/certificates/$DOMAIN.pem\n\nLEGO_PATH=$PWD/.lego\nDOMAIN=wener.me\ndocker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v $PWD/rancher/data:/var/lib/rancher \\\n  -v $PWD/rancher/auditlog:/var/log/auditlog \\\n  -e AUDIT_LEVEL=1 \\\n  -v $LEGO_PATH/certificates/$DOMAIN.crt:/etc/rancher/ssl/cert.pem \\\n  -v $LEGO_PATH/certificates/$DOMAIN.key:/etc/rancher/ssl/key.pem \\\n  --name rancher rancher/rancher:latest --no-cacerts\n")),Object(l.b)("h3",{id:"k3s-\u96c6\u7fa4"},"K3S \u96c6\u7fa4"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u89c4\u6a21"),Object(l.b)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),Object(l.b)("th",{parentName:"tr",align:null},"\u8282\u70b9"),Object(l.b)("th",{parentName:"tr",align:null},"vCPU"),Object(l.b)("th",{parentName:"tr",align:null},"RAM"),Object(l.b)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Small"),Object(l.b)("td",{parentName:"tr",align:null},"150"),Object(l.b)("td",{parentName:"tr",align:null},"1500"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"8 GB"),Object(l.b)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Medium"),Object(l.b)("td",{parentName:"tr",align:null},"300"),Object(l.b)("td",{parentName:"tr",align:null},"3000"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"16 GB"),Object(l.b)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\nkubectl create namespace cattle-system\n\n\n# ingress.tls.source\n#   rancher \u4f7f\u7528\u81ea\u5df1\u5206\u53d1\u7684 - \u9700\u8981\u5b89\u88c5 cert-manager - \u9ed8\u8ba4\n#   secret \u81ea\u884c\u63d0\u4f9b - \u4e4b\u540e\u6dfb\u52a0 tls - https://rancher.com/docs/rancher/v2.x/en/installation/options/tls-secrets/\nhelm install rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret\n\n# \u6dfb\u52a0\u5df2\u6709\u7684 TLS \u8bc1\u4e66\u548c Key\nkubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n\n# \u9a8c\u8bc1\u5b89\u88c5\u72b6\u6001\nkubectl -n cattle-system rollout status deploy/rancher\nkubectl -n cattle-system get deploy rancher\n")),Object(l.b)("h3",{id:"rke"},"RKE"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u89c4\u6a21"),Object(l.b)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),Object(l.b)("th",{parentName:"tr",align:null},"\u8282\u70b9"),Object(l.b)("th",{parentName:"tr",align:null},"vCPU"),Object(l.b)("th",{parentName:"tr",align:null},"RAM"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Small"),Object(l.b)("td",{parentName:"tr",align:null},"150"),Object(l.b)("td",{parentName:"tr",align:null},"1500"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"8 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Medium"),Object(l.b)("td",{parentName:"tr",align:null},"300"),Object(l.b)("td",{parentName:"tr",align:null},"3000"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"16 GB")))),Object(l.b)("h2",{id:"k8s-\u8fd0\u884c-rancher"},"K8S \u8fd0\u884c Rancher"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.x/en/installation/ha/helm-rancher/"},"Helm Rancher"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Helm 3 \u540e\u4e0d\u9700\u8981\u5b89\u88c5 Tiller")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# HA \u5b89\u88c5 - Helm \u5b89\u88c5 Rancher\nhelm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n# \u8bc1\u4e66\u6a21\u5f0f\n# ingress.tls.source=rancher \u81ea\u5df1\u9881\u53d1 - \u9ed8\u8ba4 - \u63a8\u8350\u8be5\u6a21\u5f0f\n# ingress.tls.source=letsEncrypt ACME\n# ingress.tls.source=secret \u4f7f\u7528\u5df2\u6709\u7684\n\n# \u5b89\u88c5 cert-manager\nkubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.9/deploy/manifests/00-crds.yaml\nkubectl create namespace cert-manager\nkubectl label namespace cert-manager certmanager.k8s.io/disable-validation=true\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install \\\n  --name cert-manager \\\n  --namespace cert-manager \\\n  --version v0.9.1 \\\n  jetstack/cert-manager\n\n# \u5b89\u88c5\u5b8c\u6210\nkubectl get pods --namespace cert-manager\n\n# \u5b89\u88c5 rancher\n# hostname \u9700\u8981\u4fee\u6539\u4e3a\u8bbf\u95ee\u7684\u57df\u540d\n# \u672c\u5730\u8bbf\u95ee\u53ef\u4ee5\u4fee\u6539 hosts \u6216\u8005\u901a\u8fc7\u53cd\u5411\u4ee3\u7406\u8bbf\u95ee\nhelm install rancher-stable/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.wener.me\n\n# \u90e8\u7f72\u8fdb\u5ea6\nkubectl -n cattle-system rollout status deploy/rancher\n# \u90e8\u7f72\u60c5\u51b5\nkubectl -n cattle-system get deploy rancher\n")),Object(l.b)("h2",{id:"\u96c6\u7fa4\u5bfc\u5165"},"\u96c6\u7fa4\u5bfc\u5165"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u96c6\u7fa4\u89d2\u8272 ",Object(l.b)("inlineCode",{parentName:"li"},"proxy-clusterrole-kubeapiserver"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u64cd\u4f5c ",Object(l.b)("inlineCode",{parentName:"li"},"kube-apiserver")))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u547d\u540d\u7a7a\u95f4 ",Object(l.b)("inlineCode",{parentName:"li"},"cattle-system")),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1\u8d26\u53f7 ",Object(l.b)("inlineCode",{parentName:"li"},"cattle")," \u7ba1\u7406 ",Object(l.b)("inlineCode",{parentName:"li"},"cattle-system"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(l.b)("inlineCode",{parentName:"li"},"cattle-admin")," \u89d2\u8272"))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u5bc6\u94a5\u5305\u542b URL \u548c TOKEN"),Object(l.b)("li",{parentName:"ul"},"\u6388\u6743 ",Object(l.b)("inlineCode",{parentName:"li"},"cattle-admin")," \u64cd\u4f5c\u6240\u6709 API \u548c \u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72 ",Object(l.b)("inlineCode",{parentName:"li"},"cattle-cluster-agent"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cluster-register \u955c\u50cf\u4e3a ",Object(l.b)("a",{parentName:"li",href:"https://hub.docker.com/r/rancher/rancher-agent"},"rancher/rancher-agent")),Object(l.b)("li",{parentName:"ul"},"\u6302\u8f7d\u4e4b\u524d\u7684\u6388\u6743\u4fe1\u606f"))),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72\u8282\u70b9\u5b88\u62a4\u8fdb\u7a0b ",Object(l.b)("inlineCode",{parentName:"li"},"cattle-node-agent"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"agent \u955c\u50cf\u4e3a ",Object(l.b)("a",{parentName:"li",href:"https://hub.docker.com/r/rancher/rancher-agent"},"rancher/rancher-agent"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"curl --insecure -sfL -o import.yaml https://rancher.example.com/v3/import/<TOKEN>.yaml\nkubectl apply -f import.yaml\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"waiting-for-server-url-setting-to-be-set"},"Waiting for server-url setting to be set"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7b49\u4e00\u4f1a\u513f\u5c31\u597d\u4e86"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/16213"},"rancher/rancher#16213"))))}s.isMDXComponent=!0}}]);