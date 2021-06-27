(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return n?a.a.createElement(m,i(i({ref:t},o),{},{components:n})):a.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},447:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),l=(n(0),n(1096)),c={title:"K3S Version"},i={unversionedId:"devops/kubernetes/distro/k3s-version",id:"devops/kubernetes/distro/k3s-version",isDocsHomePage:!1,title:"K3S Version",description:"1.20",source:"@site/notes/devops/kubernetes/distro/k3s-version.md",slug:"/devops/kubernetes/distro/k3s-version",permalink:"/notes/devops/kubernetes/distro/k3s-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s-version.md",version:"current",sidebar:"docs",previous:{title:"K3S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/distro/k3s-faq"},next:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s"}},b=[{value:"1.20",id:"120",children:[]},{value:"1.19",id:"119",children:[{value:"etcd",id:"etcd",children:[]},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u914d\u7f6e\u5185\u5efa Helm Chart",id:"\u914d\u7f6e\u5185\u5efa-helm-chart",children:[]}]}],o={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"120"},"1.20"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5220\u9664\u8282\u70b9\u65f6\u4f1a\u6e05\u9664\u8282\u70b9\u5bc6\u7801"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"--data-dir")," \u540e\u4e0d\u4f1a\u518d\u5b58\u50a8\u4efb\u4f55\u6587\u4ef6\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s")),Object(l.b)("li",{parentName:"ul"},"\u51cf\u5c11\u5f71\u54cd\u4e0d\u5927\u7684\u65e5\u5fd7")),Object(l.b)("h2",{id:"119"},"1.19"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5d4c\u5165\u5f0f etcd - \u5b9e\u9a8c\u9636\u6bb5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u7167\u548c\u4ece\u5feb\u7167\u6062\u590d - ",Object(l.b)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/backup-restore/"},"Backup and Restore Embedded etcd Datastore")))),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664 dqlite"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u6587\u4ef6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e4b\u524d\u53ea\u80fd\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u66f4\u597d\u63a7\u5236\uff0c\u66f4\u5bb9\u6613\u5229\u7528\u5de5\u5177\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--config FILE, -c FILE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"K3S_CONFIG_FILE")))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 CRD \u914d\u7f6e\u5185\u5efa\u7684 helm chart"),Object(l.b)("li",{parentName:"ul"},"\u751f\u6210\u7684 k3s.yaml \u4e0d\u5728\u4f7f\u7528 Basic \u6388\u6743\u800c\u662f\u8bc1\u4e66\u6388\u6743")),Object(l.b)("h3",{id:"etcd"},"etcd"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Args"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Mean"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--etcd-disable-snapshots"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5f00\u542f\u5feb\u7167")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--etcd-snapshot-schedule-cron"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0 */12 * * *")),Object(l.b)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 12 \u5c0f\u65f6\u4e00\u6b21\u5feb\u7167")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--etcd-snapshot-retention"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u7684\u5feb\u7167\u4efd\u6811")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--etcd-snapshot-dir"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots")),Object(l.b)("td",{parentName:"tr",align:null},"\u5feb\u7167\u76ee\u5f55")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# etcd \u542f\u52a8\n# ==========\n# serving 0.0.0.0:2379\n# peers 0.0.0.0:2380\n# metrics 0.0.0.0:2381\n# \u9ed8\u8ba4\u76ee\u5f55 ${data-dri}/server/db/etcd -> /var/lib/rancher/k3s/server/db/etcd\nuuidgen > k3s.token\n# \u7b2c\u4e00\u4e2a\u8282\u70b9\u521d\u59cb\u5316\u96c6\u7fa4\nPATH="/usr/libexec/cni/:$PATH" K3S_TOKEN_FILE=$PWD/k3s.token sudo k3s server --cluster-init --docker\n\n# \u5176\u4ed6 master \u8282\u70b9\u52a0\u5165\n# K3S_TOKEN=SECRET k3s server --server https://<ip or hostname of server1>:6443\n\n# \u5b89\u88c5 etcdctl \u6765\u76f4\u63a5\u64cd\u4f5c etcd\napk add etcd-ctl -X https://mirrors.aliyun.com/alpine/edge/testing/\n\n# etcd \u914d\u7f6e\n# /var/lib/rancher/k3s/server/db/etcd/config\nexport ETCDCTL_API=3\nexport ETCDCTL_CACERT=/var/lib/rancher/k3s/server/tls/etcd/server-ca.crt\nexport ETCDCTL_CERT=/var/lib/rancher/k3s/server/tls/etcd/server-client.crt\nexport ETCDCTL_KEY=/var/lib/rancher/k3s/server/tls/etcd/server-client.key\n# \u67e5\u770b\u6210\u5458\u5217\u8868\netcdctl member list\n\n# \u91cd\u7f6e\u96c6\u7fa4 - \u4ece\u5feb\u7167\u6062\u590d\n# \u91cd\u7f6e\u540e\u9700\u8981\u91cd\u542f\n# \u73b0\u6709\u6570\u636e\u4f1a\u88ab\u653e\u5230 ${data-dir}/server/db/etcd-old/\nk3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=\u5feb\u7167\u8def\u5f84\n')),Object(l.b)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u6307\u5b9a ",Object(l.b)("inlineCode",{parentName:"li"},"K3S_CONFIG_FILE")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u6570\u6307\u5b9a ",Object(l.b)("inlineCode",{parentName:"li"},"--config FILE"),", ",Object(l.b)("inlineCode",{parentName:"li"},"-c FILE")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f4d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/rancher/k3s/config.yaml")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"write-kubeconfig-mode: '0644'\ntls-san:\n  - 'foo.local'\nnode-label:\n  - 'foo=bar'\n  - 'something=amazing'\n")),Object(l.b)("p",null,"\u7b49\u540c\u4e8e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"\n')),Object(l.b)("h3",{id:"\u914d\u7f6e\u5185\u5efa-helm-chart"},"\u914d\u7f6e\u5185\u5efa Helm Chart"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image: traefik\n    imageTag: v1.7.26-alpine\n    proxyProtocol:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n")))}s.isMDXComponent=!0}}]);