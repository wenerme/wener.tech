"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52615],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(k,s(s({ref:n},p),{},{components:t})):r.createElement(k,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91620:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(96600),a=t(27279),o=(t(59496),t(49613)),s=["components"],l={title:"RKE - \u5b89\u88c5\u5668"},i="RKE",u={unversionedId:"devops/kubernetes/ops/rke",id:"devops/kubernetes/ops/rke",title:"RKE - \u5b89\u88c5\u5668",description:"- \u662f\u4ec0\u4e48",source:"@site/../notes/devops/kubernetes/ops/rke.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/rke",permalink:"/notes/devops/kubernetes/ops/rke",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/ops/rke.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"RKE - \u5b89\u88c5\u5668"},sidebar:"docs",previous:{title:"kustomize",permalink:"/notes/devops/kubernetes/ops/kustomize"},next:{title:"K8S \u5e73\u53f0",permalink:"/notes/devops/kubernetes/platform/"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8fd0\u7ef4",id:"\u8fd0\u7ef4",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"FAQ",id:"faq",level:2},{value:"Error response from daemon: linux mounts: path /var/lib/rancher is mounted on / but it is not a shared mount",id:"error-response-from-daemon-linux-mounts-path-varlibrancher-is-mounted-on--but-it-is-not-a-shared-mount",level:3},{value:"Failed to get job complete status for job rke-network-plugin-deploy-job in namespace kube-system",id:"failed-to-get-job-complete-status-for-job-rke-network-plugin-deploy-job-in-namespace-kube-system",level:3}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rke"},"RKE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"K8S \u96c6\u7fa4\u5b89\u88c5\u5668"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"\u914d\u7f6e\u9879"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"cluster-example.yaml")))),(0,o.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u955c\u50cf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_rke_system_images.go"},"k8s_rke_system_images.go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/release/notes/"},"K8S Release Note"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"RKE2 \u4e0e RKE1 \u533a\u522b\u5f88\u5927"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u975e\u5e38\u5efa\u8bae\u4f7f\u7528\u79c1\u6709\u4ed3\u5e93",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"air-gap \u9700\u8981 g \u7ea7\u522b\u7684\u538b\u7f29\u5305 - \u975e\u5e38\u6162"))),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u5f00\u542f SSH \u7684 AllowTcpForwarding"),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u8282\u70b9\u9700\u8981\u4e00\u4e9b\u63d0\u524d\u914d\u7f6e - \u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wenerme/alpine-admin/blob/master/roles/alpine/tasks/k8s-prepare.yaml"},"k8s-prepare")),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u540e\u9700\u8981\u505a\u7684\u4e8b\u60c5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 PV - \u4f8b\u5982 nfs-client-provisioner",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u6dfb\u52a0\u4f1a\u5bfc\u81f4\u9700\u8981\u6301\u4e45\u5b58\u50a8\u7684\u65e0\u6cd5\u62ff\u5230 PVC"))),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 LoadBalancer \u63a7\u5236\u5668 - \u4f8b\u5982 metallb",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u6dfb\u52a0\u4f1a\u5bfc\u81f4 LoadBalancer \u62ff\u4e0d\u5230 ip - \u4f8b\u5982 istio-ingresgateway (rancher \u53ef\u914d\u7f6e\u4f7f\u7528 NodePort)"))))))),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7d\u6700\u65b0\u7248\nrke_version=$(curl -s https://api.github.com/repos/rancher/rke/releases/latest | jq -r .tag_name)\nfor f in rke_{darwin-amd64,linux-amd64}; do curl -LO https://github.com/rancher/rke/releases/download/${rke_version}/$f; chmod +x $f; done;\n# \u6620\u5c04\u4e3a rke \u547d\u4ee4\nln -fs rke_$(uname -o | grep -qi darwin && echo darwin-amd64 || echo linux-amd64) rke\n# \u67e5\u770b\u5f53\u524d\u7248\u672c\n./rke -v\n# \u522b\u540d\u540e\u5c31\u4e0d\u9700\u8981 ./\nalias rke=$PWD/rke\nrke -v\n\n# \u67e5\u770b\u6240\u6709 rancher \u7248\u672c\nrke config --list-version --all\n# \u7cfb\u7edf\u955c\u50cf\n# \u7cfb\u7edf\u955c\u50cf\u4e0d\u5305\u542b quay \u548c gcr - \u5df2\u7ecf\u6620\u5c04\u4e3a rancher \u4e0b\u7684\u955c\u50cf\nrke config --system-images\n\n# \u5982\u679c\u4f7f\u7528\u79c1\u6709\u4ed3\u5e93\u53ef\u4ee5\u63d0\u524d\u7f13\u5b58\u7cfb\u7edf\u955c\u50cf - \u4f8b\u5982 registry.wener.me\nrke config --system-images | tail -n +2 | xargs -I {} -n 1 docker pull registry.wener.me/{}\n\n# \u914d\u7f6e\u597d clutser.yml\n\n# \u6267\u884c\u5b89\u88c5 - \u53ef\u91cd\u590d\u6267\u884c - \u53ef\u6dfb\u52a0\u8282\u70b9\u540e\u6267\u884c\n# \u9ed8\u8ba4\u4f7f\u7528 clutser.yml \u6587\u4ef6\nrke up --config cluster.yml\n")),(0,o.kt)("h2",{id:"\u8fd0\u7ef4"},"\u8fd0\u7ef4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e00\u6b21\u6027\u5907\u4efd etcd\nrke etcd snapshot-save --name <SNAPSHOT.db> --config rancher-cluster.yml\n# \u4e00\u6b21\u6027\u5907\u4efd\u5230 s3\nrke etcd snapshot-save --config rancher-cluster.yml --name snapshot-name  \\\n--s3 --access-key S3_ACCESS_KEY --secret-key S3_SECRET_KEY \\\n--bucket-name s3-bucket-name  --s3-endpoint  s3.amazonaws.com \\\n--folder folder-name\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u96c6\u7fa4\u540d\u5b57 - \u5efa\u8bae\u66f4\u6539 - \u9ed8\u8ba4 local\ncluster_name: center\n# \u5b89\u88c5\u76ee\u5f55 - \u4f1a\u8bb0\u5f55 etcd \u5feb\u7167 /opt/rke/etcd-snapshots\nprefix_path: /opt/rke\n\n# \u5efa\u8bae\u4f7f\u7528 ssh-agent\nssh_agent_auth: true\n# \u53ef\u9009 - \u5982\u679c\u6709 agent \u53ef\u4ee5\u4e0d\u7528\u914d\u7f6e\n# ssh_key_path: ~/.ssh/rke_rsa\n\n# \u8282\u70b9\u4fe1\u606f\nnodes:\n  - address: 10.0.0.1 # \u5916\u90e8\u5730\u5740\n    # \u5185\u90e8\u5730\u5740 - \u53ef\u9009 - \u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u4f7f\u7528\n    internal_address: 192.168.1.1\n    # \u590d\u5199 hostname \u540e\u5728 rancher \u7ba1\u7406\u9875\u9762\u770b\u5230\u7684\u662f\u540d\u5b57\u800c\u4e0d\u662f ip\n    hostname_override: k8snode1\n    # \u4f7f\u7528\u7684 ssh \u7528\u6237 - \u6ca1\u6709\u5168\u5c40\u914d\u7f6e\u9700\u8981\u6bcf\u4e2a\u914d\u7f6e\n    user: admin\n    # \u8282\u70b9\u7684\u89d2\u8272 - \u57fa\u7840\u8ba1\u7b97\u8282\u70b9\u53ea\u9700\u8981 worker \u5373\u53ef\n    role: [controlplane, etcd, worker]\n\n# \u670d\u52a1\u4fe1\u606f\nservices:\n  etcd:\n    # etcd \u81ea\u52a8\u5907\u4efd - \u53ef\u9009\n    backup_config:\n      # \u542f\u7528\u5feb\u7167\n      enabled: true\n      # \u589e\u91cf\u5907\u4efd\u95f4\u9694\n      interval_hours: 6\n      # \u4fdd\u7559\u5929\u6570\n      retention: 60\n      # \u53ef\u9009\u914d\u7f6e\n      s3backupconfig:\n        access_key: 'myaccesskey'\n        secret_key: 'myaccesssecret'\n        bucket_name: 'my-backup-bucket'\n        folder: 'folder-name'\n        endpoint: 's3.eu-west-1.amazonaws.com'\n        region: 'eu-west-1'\n\n# \u79c1\u6709\u4ed3\u5e93 - \u975e\u5e38\u5efa\u8bae\nprivate_registries:\n  - url: registry.wener.me\n    # \u591a\u4e2a - \u53ef\u8bbe\u7f6e\u9ed8\u8ba4\n    is_default: true\n")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"error-response-from-daemon-linux-mounts-path-varlibrancher-is-mounted-on--but-it-is-not-a-shared-mount"},"Error response from daemon: linux mounts: path /var/lib/rancher is mounted on / but it is not a shared mount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mount --make-rshared /\n\n# \u5f00\u673a\u542f\u52a8\u8bbe\u7f6e\nrc-update add local\ncat <<CONF > /etc/local.d/00-mount-shared-root.start\n#!/bin/sh\nmount --make-rshared /\nCONF\n")),(0,o.kt)("h3",{id:"failed-to-get-job-complete-status-for-job-rke-network-plugin-deploy-job-in-namespace-kube-system"},"Failed to get job complete status for job rke-network-plugin-deploy-job in namespace kube-system"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u518d\u6b21\u6267\u884c\uff0c\u4e00\u822c\u4f1a\u597d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/19713"},"#19713"))))}d.isMDXComponent=!0}}]);