"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66466],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,m=d["".concat(o,".").concat(c)]||d[c]||k[c]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={title:"K3S Version",tags:["Version"]},c="K3S Version",m={unversionedId:"devops/kubernetes/distro/k3s-version",id:"devops/kubernetes/distro/k3s-version",title:"K3S Version",description:"- \u8ddf\u968f Kubernetes \u7248\u672c\u53d1\u5e03",source:"@site/../notes/devops/kubernetes/distro/k3s-version.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3s-version",permalink:"/notes/devops/kubernetes/distro/k3s-version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k3s-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645984624,formattedLastUpdatedAt:"Feb 27, 2022",frontMatter:{title:"K3S Version",tags:["Version"]},sidebar:"docs",previous:{title:"K3S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/distro/k3s-faq"},next:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s"}},v={},f=[{value:"1.22",id:"122",level:2},{value:"1.21",id:"121",level:2},{value:"1.20",id:"120",level:2},{value:"1.19",id:"119",level:2},{value:"etcd",id:"etcd",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u5185\u5efa Helm Chart",id:"\u914d\u7f6e\u5185\u5efa-helm-chart",level:3}],g={toc:f};function N(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},g),u),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",k({},{id:"k3s-version"}),"K3S Version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ddf\u968f Kubernetes \u7248\u672c\u53d1\u5e03")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"K3S"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"AlpineLinux"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"1.22"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"3.15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"1.21"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"3.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"1.20"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"3.13")))),(0,r.kt)("h2",k({},{id:"122"}),"1.22"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"etcd-member-management")),(0,r.kt)("h2",k({},{id:"121"}),"1.21"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dual-stack IPv4/IPv6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46 Flannel, ServiceLB, Network Policy Controller \u8fd8\u4e0d\u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u76ee\u5f55 /etc/rancher/k3s/config.yaml.d/"),(0,r.kt)("li",{parentName:"ul"},"airgap \u652f\u6301 zstd \u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Service Account Issuer Discovery"),(0,r.kt)("li",{parentName:"ul"},"Traefik v2"),(0,r.kt)("li",{parentName:"ul"},"ContainerD \u652f\u6301 \u79c1\u6709 \u4ed3\u5e93\u91cd\u5199"),(0,r.kt)("li",{parentName:"ul"},"\u56fa\u5b9a LB \u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"6443, 6444"))),(0,r.kt)("li",{parentName:"ul"},"k3s etcd-snapshot \u67e5\u770b \u5feb\u7167\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"k3s \u652f\u6301 --system-default-registry"),(0,r.kt)("li",{parentName:"ul"},"k3s \u652f\u6301\u5220\u9664\u5feb\u7167")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"component"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"ver"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"CoreDNS"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"v1.8.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Traefik"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"v2.4.8")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"before")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{}),"2379 k3s/rke2 etcd client port on server if running etcd\n     k3s/rke server LB tunnel to etcd client port on server if not running etcd\n2380 k3s/rke2 server etcd peer port if running etcd\n6443 k3s supervisor + external apiserver on server if running apiserver\n     rke2 apiserver on server if running apiserver\n6444 k3s local apiserver if running apiserver\n     k3s LB tunnel to supervisor + external apiserver on server if not running apiserver\n     rke2 LB tunnel to supervisor on server if not running apiserver\n6445 rke2 tunnel to apiserver on server if not running apiserver\n9345 rke2 supervisor on server\nXXXX k3s LB tunnel to supervisor + external apiserver on agent (randomly selected on startup)\n     rke2 LB tunnel to supervisor on agent (randomly selected on startup)\nYYYY rke2 LB tunnel to apiserver on agent (randomly selected on startup)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"after")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{}),"2379 k3s/rke2 etcd client port on server if running etcd\n     k3s/rke2 LB tunnel to etcd client port on server if not running etcd\n2380 k3s/rke2 etcd peer port on server if running etcd\n6443 k3s supervisor + external apiserver on server if running apiserver\n     rke2 apiserver on server if running apiserver\n     rke2 LB tunnel to apiserver on agent, and server if not running apiserver\n6444 k3s local apiserver on server if running apiserver\n     k3s LB tunnel to supervisor + external apiserver on agent, and server if not running apiserver\n     rke2 LB tunnel to supervisor on agent, and server if not running apiserver\n9345 rke2 supervisor on server\n")),(0,r.kt)("h2",k({},{id:"120"}),"1.20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u8282\u70b9\u65f6\u4f1a\u6e05\u9664\u8282\u70b9\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"--data-dir")," \u540e\u4e0d\u4f1a\u518d\u5b58\u50a8\u4efb\u4f55\u6587\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s")),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5f71\u54cd\u4e0d\u5927\u7684\u65e5\u5fd7"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 cgroupv2")),(0,r.kt)("h2",k({},{id:"119"}),"1.19"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5d4c\u5165\u5f0f etcd - \u5b9e\u9a8c\u9636\u6bb5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u7167\u548c\u4ece\u5feb\u7167\u6062\u590d - ",(0,r.kt)("a",k({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/backup-restore/"}),"Backup and Restore Embedded etcd Datastore")))),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664 dqlite"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u53ea\u80fd\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u66f4\u597d\u63a7\u5236\uff0c\u66f4\u5bb9\u6613\u5229\u7528\u5de5\u5177\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config FILE, -c FILE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"K3S_CONFIG_FILE")))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 CRD \u914d\u7f6e\u5185\u5efa\u7684 helm chart"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684 k3s.yaml \u4e0d\u5728\u4f7f\u7528 Basic \u6388\u6743\u800c\u662f\u8bc1\u4e66\u6388\u6743")),(0,r.kt)("h3",k({},{id:"etcd"}),"etcd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Args"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Mean"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"--etcd-disable-snapshots"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u5f00\u542f\u5feb\u7167")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"--etcd-snapshot-schedule-cron"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"0 */12 * * *")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 12 \u5c0f\u65f6\u4e00\u6b21\u5feb\u7167")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"--etcd-snapshot-retention"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"5"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u4fdd\u7559\u7684\u5feb\u7167\u4efd\u6811")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"--etcd-snapshot-dir"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5feb\u7167\u76ee\u5f55")))),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'# etcd \u542f\u52a8\n# ==========\n# serving 0.0.0.0:2379\n# peers 0.0.0.0:2380\n# metrics 0.0.0.0:2381\n# \u9ed8\u8ba4\u76ee\u5f55 ${data-dri}/server/db/etcd -> /var/lib/rancher/k3s/server/db/etcd\nuuidgen > k3s.token\n# \u7b2c\u4e00\u4e2a\u8282\u70b9\u521d\u59cb\u5316\u96c6\u7fa4\nPATH="/usr/libexec/cni/:$PATH" K3S_TOKEN_FILE=$PWD/k3s.token sudo k3s server --cluster-init --docker\n\n# \u5176\u4ed6 master \u8282\u70b9\u52a0\u5165\n# K3S_TOKEN=SECRET k3s server --server https://<ip or hostname of server1>:6443\n\n# \u5b89\u88c5 etcdctl \u6765\u76f4\u63a5\u64cd\u4f5c etcd\napk add etcd-ctl -X https://mirrors.aliyun.com/alpine/edge/testing/\n\n# etcd \u914d\u7f6e\n# /var/lib/rancher/k3s/server/db/etcd/config\nexport ETCDCTL_API=3\nexport ETCDCTL_CACERT=/var/lib/rancher/k3s/server/tls/etcd/server-ca.crt\nexport ETCDCTL_CERT=/var/lib/rancher/k3s/server/tls/etcd/server-client.crt\nexport ETCDCTL_KEY=/var/lib/rancher/k3s/server/tls/etcd/server-client.key\n# \u67e5\u770b\u6210\u5458\u5217\u8868\netcdctl member list\n\n# \u91cd\u7f6e\u96c6\u7fa4 - \u4ece\u5feb\u7167\u6062\u590d\n# \u91cd\u7f6e\u540e\u9700\u8981\u91cd\u542f\n# \u73b0\u6709\u6570\u636e\u4f1a\u88ab\u653e\u5230 ${data-dir}/server/db/etcd-old/\nk3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=\u5feb\u7167\u8def\u5f84\n')),(0,r.kt)("h3",k({},{id:"\u914d\u7f6e\u6587\u4ef6"}),"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"K3S_CONFIG_FILE")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"--config FILE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-c FILE")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f4d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/rancher/k3s/config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),"write-kubeconfig-mode: '0644'\ntls-san:\n  - 'foo.local'\nnode-label:\n  - 'foo=bar'\n  - 'something=amazing'\n")),(0,r.kt)("p",null,"\u7b49\u540c\u4e8e"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"\n')),(0,r.kt)("h3",k({},{id:"\u914d\u7f6e\u5185\u5efa-helm-chart"}),"\u914d\u7f6e\u5185\u5efa Helm Chart"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image: traefik\n    imageTag: v1.7.26-alpine\n    proxyProtocol:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n")))}N.isMDXComponent=!0}}]);