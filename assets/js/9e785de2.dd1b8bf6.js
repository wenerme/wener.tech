"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92518],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||k[p]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={title:"K3S \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},p="K3S \u5e38\u89c1\u95ee\u9898",m={unversionedId:"devops/kubernetes/distro/k3s/k3s-faq",id:"devops/kubernetes/distro/k3s/k3s-faq",title:"K3S \u5e38\u89c1\u95ee\u9898",description:"K3S \u7f51\u7edc\u7ed3\u6784",source:"@site/../notes/devops/kubernetes/distro/k3s/k3s-faq.md",sourceDirName:"devops/kubernetes/distro/k3s",slug:"/devops/kubernetes/distro/k3s/faq",permalink:"/notes/devops/kubernetes/distro/k3s/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k3s/k3s-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"K3S \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"K3S Cookbook",permalink:"/notes/devops/kubernetes/distro/k3s/cookbook"},next:{title:"Install",permalink:"/notes/devops/kubernetes/distro/k3s/install"}},h={},f=[{value:"K3S \u7f51\u7edc\u7ed3\u6784",id:"k3s-\u7f51\u7edc\u7ed3\u6784",level:2},{value:"\u8bbf\u95ee K3S \u7684 ETCD",id:"\u8bbf\u95ee-k3s-\u7684-etcd",level:2},{value:"containerd \u914d\u7f6e",id:"containerd-\u914d\u7f6e",level:2},{value:"docker vs containerd",id:"docker-vs-containerd",level:2},{value:"k3s \u6bcf\u6708\u91cd\u542f",id:"k3s-\u6bcf\u6708\u91cd\u542f",level:2},{value:"k3s \u72b6\u6001\u6e05\u7406",id:"k3s-\u72b6\u6001\u6e05\u7406",level:2},{value:"K3S \u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790",id:"k3s-\u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790",level:2},{value:"\u533a\u5206 worker \u548c cp",id:"\u533a\u5206-worker-\u548c-cp",level:2},{value:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d",id:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d",level:2},{value:"x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0",id:"x509-certificate-relies-on-legacy-common-name-field-use-sans-or-temporarily-enable-common-name-matching-with-godebugx509ignorecn0",level:2},{value:"k3s etcd \u5907\u4efd",id:"k3s-etcd-\u5907\u4efd",level:2},{value:"\u8fc1\u79fb k3s data-dir",id:"\u8fc1\u79fb-k3s-data-dir",level:2},{value:"ContainerStatus from runtime service failed: rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial unix: missing address&quot;",id:"containerstatus-from-runtime-service-failed-rpc-error-code--unavailable-desc--connection-error-desc--transport-error-while-dialing-dial-unix-missing-address",level:2},{value:"\u51fa\u73b0\u5f88\u5947\u602a\u7684 probe \u5931\u8d25\uff0c\u770b\u4e0d\u5230\u65e5\u5fd7\uff0c\u91cd\u542f pod \u4e5f\u65e0\u6cd5\u4fee\u590d",id:"\u51fa\u73b0\u5f88\u5947\u602a\u7684-probe-\u5931\u8d25\u770b\u4e0d\u5230\u65e5\u5fd7\u91cd\u542f-pod-\u4e5f\u65e0\u6cd5\u4fee\u590d",level:2},{value:"k3s \u5360\u7528\u5927\u91cf\u5e26\u5bbd",id:"k3s-\u5360\u7528\u5927\u91cf\u5e26\u5bbd",level:2},{value:"k3s check-config",id:"k3s-check-config",level:2},{value:"log rotate",id:"log-rotate",level:2},{value:"Failed to authenticate request from",id:"failed-to-authenticate-request-from",level:2},{value:"x509: certificate has expired or is not yet valid",id:"x509-certificate-has-expired-or-is-not-yet-valid",level:2},{value:"Unable to authenticate the request err=&quot;invalid bearer token&quot;",id:"unable-to-authenticate-the-request-errinvalid-bearer-token",level:2},{value:"etcdserver: mvcc: required revision has been compacted",id:"etcdserver-mvcc-required-revision-has-been-compacted",level:2},{value:"transport: Error while dialing dial tcp 127.0.0.1:2379: connect: connection refused",id:"transport-error-while-dialing-dial-tcp-1270012379-connect-connection-refused",level:2},{value:"Failed to reconcile with temporary etcd: walpb: crc mismatch",id:"failed-to-reconcile-with-temporary-etcd-walpb-crc-mismatch",level:2},{value:"cluster ID mismatch",id:"cluster-id-mismatch",level:2},{value:"invalid bearer token, Token has been invalidated",id:"invalid-bearer-token-token-has-been-invalidated",level:2},{value:"User &quot;k3s-cloud-controller-manager&quot; cannot get resource &quot;leases&quot; in API group &quot;coordination.k8s.io&quot; in the namespace &quot;kube-system&quot;",id:"user-k3s-cloud-controller-manager-cannot-get-resource-leases-in-api-group-coordinationk8sio-in-the-namespace-kube-system",level:2},{value:"ulimit",id:"ulimit",level:2},{value:"\u5355\u8282\u70b9\u8f6c\u591a\u8282\u70b9",id:"\u5355\u8282\u70b9\u8f6c\u591a\u8282\u70b9",level:2},{value:"max-pods",id:"max-pods",level:2},{value:"Waiting for containerd startup: rpc error: code = Unimplemented desc = unknown service runtime.v1.RuntimeService",id:"waiting-for-containerd-startup-rpc-error-code--unimplemented-desc--unknown-service-runtimev1runtimeservice",level:2},{value:"failed to get network &quot;cbr0&quot; cached result: decoding version from network config: unexpected end of JSON input&quot;",id:"failed-to-get-network-cbr0-cached-result-decoding-version-from-network-config-unexpected-end-of-json-input",level:2},{value:"k3s: unable to apply RC_ULIMIT settings",id:"k3s-unable-to-apply-rc_ulimit-settings",level:2},{value:"Cluster CA certificate is not trusted by the host CA bundle, but the token does not include a CA hash. Use the full token from the server&#39;s node-token file to enable Cluster CA validation.",id:"cluster-ca-certificate-is-not-trusted-by-the-host-ca-bundle-but-the-token-does-not-include-a-ca-hash-use-the-full-token-from-the-servers-node-token-file-to-enable-cluster-ca-validation",level:2},{value:"starting kubernetes: preparing server: token CA hash does not match the Cluster CA certificate hash",id:"starting-kubernetes-preparing-server-token-ca-hash-does-not-match-the-cluster-ca-certificate-hash",level:2},{value:"etcd cluster join failed: cannot fetch cluster info from peer urls: could not retrieve cluster information from the given URLs",id:"etcd-cluster-join-failed-cannot-fetch-cluster-info-from-peer-urls-could-not-retrieve-cluster-information-from-the-given-urls",level:2}],g={toc:f};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},g),u),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",k({},{id:"k3s-\u5e38\u89c1\u95ee\u9898"}),"K3S \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h2",k({},{id:"k3s-\u7f51\u7edc\u7ed3\u6784"}),"K3S \u7f51\u7edc\u7ed3\u6784"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u5668 10.42.0.0/16 - \u53ef\u4ee5 ping \u901a"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1 10.43.0.0/16 - \u4e0d\u53ef\u4ee5 ping"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u4e00\u4e2a /24 \u7f51\u7edc - \u4e5f\u5c31\u662f\u8bf4\u6700\u591a 255 \u4e2a\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6700\u591a\u83b7\u53d6\u5230 255 \u4e2a \u5bb9\u5668 IP \u548c \u670d\u52a1 IP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9650\u5236\u6bcf\u4e2a\u8282\u70b9 110 \u4e2a Pod - \u4e00\u822c\u6765\u8bf4\u662f\u8db3\u591f\u7684")))),(0,r.kt)("admonition",k({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 host-gw, \u91cd\u542f/\u91cd\u5efa tun \u8bbe\u5907\u540e\u8def\u7531\u4e22\u5931\uff0c\u76ee\u524d\u901a\u8fc7\u91cd\u542f k3s \u670d\u52a1\u89e3\u51b3\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/flannel-io/flannel/issues/1070"}),"flannel-io/flannel#1070")))))),(0,r.kt)("h2",k({},{id:"\u8bbf\u95ee-k3s-\u7684-etcd"}),"\u8bbf\u95ee K3S \u7684 ETCD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u90e8\u5206\u63a5\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# kine \u4e0d\u652f\u6301 --keys-only\nETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get /registry/clusterrolebindings/system:kube-dns\n# \u6240\u6709\n# ETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get / --prefix\n")),(0,r.kt)("h2",k({},{id:"containerd-\u914d\u7f6e"}),"containerd \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/var/lib/rancher/k3s/agent/etc/containerd/config.toml"),(0,r.kt)("li",{parentName:"ul"},"config.toml.tmpl"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/blob/master/pkg/agent/templates/templates_linux.go"}),"https://github.com/k3s-io/k3s/blob/master/pkg/agent/templates/templates_linux.go"))),(0,r.kt)("h2",k({},{id:"docker-vs-containerd"}),"docker vs containerd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u8fd0\u7ef4\u719f\u6089"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"docker \u547d\u4ee4\u597d\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u955c\u50cf\u3001\u7f13\u5b58\u4f1a\u66f4\u52a0\u53cb\u597d - \u867d\u7136 containerd \u6709 docker shim"))),(0,r.kt)("li",{parentName:"ul"},"containerd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"docker \u5e95\u5c42\u4e5f\u662f\u4f7f\u7528\u7684 containerd"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u4f7f\u7528 docker \u4f1a\u989d\u5916\u6d88\u8017\u4e00\u4e9b\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u4e13\u7528\u7684 cli - crictl \u4e3b\u8981\u7528\u4e8e\u8c03\u8bd5")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u8fd0\u884c\u4e86 docker \u5efa\u8bae\u4f7f\u7528 docker\uff0c\u5426\u5219\u6ca1\u5fc5\u8981\u989d\u5916\u5b89\u88c5\uff0c\u76f4\u63a5\u4f7f\u7528\u5185\u7f6e containerd\u3002"),(0,r.kt)("h2",k({},{id:"k3s-\u6bcf\u6708\u91cd\u542f"}),"k3s \u6bcf\u6708\u91cd\u542f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"90 \u5929 renew"),(0,r.kt)("li",{parentName:"ul"},"\u968f\u673a sleep 0-99 \u5206\u949f")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"echo '#!/bin/sh -\nsleep ${RANDOM:0:2}m\n\nrc-service k3s restart --ifstarted\nrc-service k0scontroller restart --ifstarted\n' | sudo tee /etc/periodic/monthly/kube-restart\nsudo chmod +x /etc/periodic/monthly/kube-restart\n\nsudo rc-service crond start --ifstopped\nsudo rc-update add crond\n")),(0,r.kt)("h2",k({},{id:"k3s-\u72b6\u6001\u6e05\u7406"}),"k3s \u72b6\u6001\u6e05\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"K3S \u8282\u70b9\u91cd\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"cni0 \u548c flannel.1 \u4e0d\u4e00\u5b9a\u5b58\u5728",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d6\u51b3\u4e8e\u5b89\u88c5\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"/var/lib/cni")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u811a\u672c\u6e05\u7406")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u901a\u8fc7 get.k3s.io \u5b89\u88c5\u4f1a\u6709\u8be5\u811a\u672c\n/usr/local/bin/k3s-killall.sh\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6e05\u7406")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# \u6e05\u7406 iptables \u89c4\u5219\niptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore\niptables-save | grep -v 10.4[2,3] | iptables-restore\n\n# \u5bb9\u5668\u955c\u50cf\u6e05\u7406\n# \u505c\u6b62\u6240\u6709 pod\uff0c\u6e05\u9664\u505c\u6b62\u5bb9\u5668\uff0c\u6e05\u9664 volume\uff0c\u4f46\u4fdd\u7559\u4e0b\u8f7d\u7684\u955c\u50cf\ndocker stop $(docker ps -aq)\ndocker system prune --volumes -f\ndocker system prune -f\n# \u5982\u679c\u4e0d\u60f3\u4fdd\u7559\u955c\u50cf\n# docker system prune -a\n# \u53d6\u6d88\u6240\u6709\u6302\u8f7d\nsudo umount $(mount -v | grep '/var/lib/kubelet' | awk '{print $3}')\n# k3s \u548c kubelet \u72b6\u6001\nsudo rm -rf /var/lib/rancher\nsudo rm -rf /var/lib/kubelet\n# kubeconf\nsudo rm -f /etc/rancher/k3s/k3s.yaml\n# \u65e5\u5fd7\u6e05\u7406\nsudo rm -rf /var/log/containers/*\nsudo rm -rf /var/log/pods/*\nsudo rm -f /var/log/k3s.log\n\n# \u5982\u679c\u7528\u4e86\u6570\u636e\u5e93\necho drop table if exists kine | psql -d $DATABASE_URL\n\n# \u5982\u679c\u6709\u65e5\u5fd7\u6587\u4ef6\uff0c\u4f8b\u5982 --log k3s-server.log --alsologtostderr\nrm k3s{,-server,-agent}.log -f\n\nip li del cni0\nip li del flannel.1\nrm -rf /var/lib/cni/*\n")),(0,r.kt)("h2",k({},{id:"k3s-\u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790"}),"K3S \u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AlpineLinux - 50M",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u663e\u5b58 32M"),(0,r.kt)("li",{parentName:"ul"},"sshd,tincd,dbus"))),(0,r.kt)("li",{parentName:"ul"},"dockerd - 97M + shim/8M"),(0,r.kt)("li",{parentName:"ul"},"containerd - 50M + shim/11M",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"docker \u4e5f\u4f9d\u8d56 containerd"))),(0,r.kt)("li",{parentName:"ul"},"server 550M",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--disable=traefik\uff0cservicelb")),(0,r.kt)("li",{parentName:"ul"},"server \u4e5f\u4f1a\u542f\u52a8 agent"),(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u5668",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"metrics-server"),(0,r.kt)("li",{parentName:"ul"},"coredns"),(0,r.kt)("li",{parentName:"ul"},"local-path-provisioner"))))),(0,r.kt)("li",{parentName:"ul"},"agent 180M"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u57fa\u7840\u670d\u52a1 - ingress-nginx, metallb, cert-manager, kubernetes-dashboard",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"server - 1G"),(0,r.kt)("li",{parentName:"ul"},"agent - 450M"),(0,r.kt)("li",{parentName:"ul"},"+linkerd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"server 1.55G"),(0,r.kt)("li",{parentName:"ul"},"agent 920M"))))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/resource-profiling/"}),"K3s Resource Profiling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"http://ceur-ws.org/Vol-2839/paper11.pdf"}),"Profiling Lightweight Container Platforms: MicroK8s and K3s in Comparison to Kubernetes"))))),(0,r.kt)("h2",k({},{id:"\u533a\u5206-worker-\u548c-cp"}),"\u533a\u5206 worker \u548c cp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--node-taint k3s-controlplane=true:NoExecute"))),(0,r.kt)("h2",k({},{id:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d"}),"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tls-san YOUR_IP_OR_HOSTNAME_HERE"))),(0,r.kt)("h2",k({},{id:"x509-certificate-relies-on-legacy-common-name-field-use-sans-or-temporarily-enable-common-name-matching-with-godebugx509ignorecn0"}),"x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{}),"E0905 23:03:57.992668   12600 controller.go:114] loading OpenAPI spec for \"v1alpha1.tap.linkerd.io\" failed with: failed to retrieve openAPI spec, http error: ResponseCode: 503, Body: Error trying to reach service: 'x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0', Header: map[Content-Type:[text/plain; charset=utf-8] X-Content-Type-Options:[nosniff]]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8\u65f6\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\nGODEBUG=x509ignoreCN=0\n")),(0,r.kt)("h2",k({},{id:"k3s-etcd-\u5907\u4efd"}),"k3s etcd \u5907\u4efd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5feb\u7167\u76ee\u5f55 /server/db/snapshots")),(0,r.kt)("h2",k({},{id:"\u8fc1\u79fb-k3s-data-dir"}),"\u8fc1\u79fb k3s data-dir"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"data-dir \u5305\u542b etc, local-path StorageClass, longhorn \u5b58\u50a8 - \u5f71\u54cd\u6027\u80fd")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"service k3s stop\n# \u5982\u679c\u6ca1\u6709 k3s-killal \u53ef\u4ee5\u8003\u8651\u5173\u95ed k3s \u5f00\u673a\u81ea\u52a8\u542f\u52a8\u7136\u540e\u91cd\u542f\nk3s-killall\n\nmkdir -p /data/k3s\nrsync -aP /var/lib/rancher/k3s/ /data/k3s/\n\n# \u4fee\u6539 data-dir \u542f\u52a8\u670d\u52a1\necho 'data-dir: /data/k3s' >> /etc/rancher/k3s/config.yaml\nservice k3s start\n\n# busybox \u7684 lsof \u4e0d\u652f\u6301\u8fc7\u6ee4\u8def\u5f84\napk search lsof\nlsof +D /data/k3s | wc -l\n# \u8f93\u51fa 0 \u5219\u8fc1\u79fb\u5b8c\u6210\nlsof +D /var/lib/rancher/k3s | wc -l\n\n# \u6e05\u9664\nrm -rf /var/lib/rancher/k3s\n")),(0,r.kt)("h2",k({},{id:"containerstatus-from-runtime-service-failed-rpc-error-code--unavailable-desc--connection-error-desc--transport-error-while-dialing-dial-unix-missing-address"}),'ContainerStatus from runtime service failed: rpc error: code = Unavailable desc = connection error: desc = "transport: Error while dialing dial unix: missing address"'),(0,r.kt)("p",null,"\u4f3c\u4e4e\u662f containerd \u7684\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/1901"}),"https://github.com/k3s-io/k3s/issues/1901"))),(0,r.kt)("h2",k({},{id:"\u51fa\u73b0\u5f88\u5947\u602a\u7684-probe-\u5931\u8d25\u770b\u4e0d\u5230\u65e5\u5fd7\u91cd\u542f-pod-\u4e5f\u65e0\u6cd5\u4fee\u590d"}),"\u51fa\u73b0\u5f88\u5947\u602a\u7684 probe \u5931\u8d25\uff0c\u770b\u4e0d\u5230\u65e5\u5fd7\uff0c\u91cd\u542f pod \u4e5f\u65e0\u6cd5\u4fee\u590d"),(0,r.kt)("p",null,"\u53ef\u80fd\u662f\u662f k3s \u7f51\u7edc proxy \u5f02\u5e38\u4e86\uff0c\u5c1d\u8bd5\u91cd\u542f k3s \u670d\u52a1\u3002"),(0,r.kt)("h2",k({},{id:"k3s-\u5360\u7528\u5927\u91cf\u5e26\u5bbd"}),"k3s \u5360\u7528\u5927\u91cf\u5e26\u5bbd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master \u4e4b\u95f4\u4ea4\u4e92\u8dd1\u5b8c\u4e86 50M \u5e26\u5bbd")),(0,r.kt)("p",null,"\u91cd\u542f k3s \u89e3\u51b3"),(0,r.kt)("h2",k({},{id:"k3s-check-config"}),"k3s check-config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cgroups V1/Hybrid on non-Systemd init - ",(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/tianon/cgroupfs-mount"}),"https://github.com/tianon/cgroupfs-mount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://raw.githubusercontent.com/k3s-io/k3s/master/contrib/util/check-config.sh"}),"https://raw.githubusercontent.com/k3s-io/k3s/master/contrib/util/check-config.sh"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd8\u4e0d\u652f\u6301 cgroupv2 ",(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/3897"}),"#3897")))),(0,r.kt)("li",{parentName:"ul"},"cgroupv2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/900"}),"https://github.com/k3s-io/k3s/issues/900"))))),(0,r.kt)("h2",k({},{id:"log-rotate"}),"log rotate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5 truncate \u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/rancher/k3os/issues/433#issuecomment-749216549"}),"https://github.com/rancher/k3os/issues/433#issuecomment-749216549"))))),(0,r.kt)("h2",k({},{id:"failed-to-authenticate-request-from"}),"Failed to authenticate request from"),(0,r.kt)("p",null,"\u901a\u5e38\u662f worker \u8bc1\u4e66\u5931\u6548\u4e86"),(0,r.kt)("h2",k({},{id:"x509-certificate-has-expired-or-is-not-yet-valid"}),"x509: certificate has expired or is not yet valid"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u533a\u5206\u662f worker \u8bc1\u4e66\u5931\u6548\u8fd8\u662f server \u8bc1\u4e66\u5931\u6548")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{}),"x509: certificate has expired or is not yet valid: current time 2022-03-28T15:55:27+08:00 is after 2022-02-20T13:44:47Z\n")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash",metastring:'title="\u68c0\u67e5\u5931\u6548\u65f6\u95f4"',title:'"\u68c0\u67e5\u5931\u6548\u65f6\u95f4"'}),"# \u5f53\u524d\u8bc1\u4e66 \u5931\u6548\u65f6\u95f4\ncurl -v -k https://localhost:6443 -s 2>&1 | grep date\nopenssl s_client -connect localhost:6443 -showcerts < /dev/null 2>&1 | openssl x509 -noout -enddate\n\nfor i in $(ls /var/lib/rancher/k3s/server/tls/*.crt); do\n  echo $i\n  openssl x509 -enddate -noout -in $i\ndone\n\nkubectl get secret -n kube-system k3s-serving -o jsonpath='{.data.tls\\.crt}' | base64 -d | openssl x509 -noout -text | grep Not\n")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash",metastring:'title="\u89e6\u53d1 rotate"',title:'"\u89e6\u53d1','rotate"':!0}),"openssl s_client -connect localhost:6443 -showcerts < /dev/null 2>&1 | openssl x509 -noout -startdate -enddate\n\n# \u8bbe\u7f6e\u4e3a < 90 \u5929\ndate -s 20210514\n# sudo hwclock -w\n\nservice k3s restart\n\n# sudo chronyc -a makestep\n")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u4ee5\u5c1d\u8bd5\nkubectl --insecure-skip-tls-verify delete secret -n kube-system k3s-serving\nrm -f /var/lib/rancher/k3s/server/tls/dynamic-cert.json\n# \u91cd\u542f k3s\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://www.ibm.com/support/pages/node/6444205"}),"https://www.ibm.com/support/pages/node/6444205")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/1621"}),"https://github.com/k3s-io/k3s/issues/1621"))),(0,r.kt)("h2",k({},{id:"unable-to-authenticate-the-request-errinvalid-bearer-token"}),'Unable to authenticate the request err="invalid bearer token"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"server \u7248\u672c\u4e0d\u4e00\u81f4 \u5bfc\u81f4\u8fc7\u95ee\u9898 - v1.20, v1.22")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u5c1d\u8bd5\uff0c\u4e0d\u4e00\u5b9a\u80fd\u89e3\u51b3")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'kubectl -n kube-system get secrets | grep "coredns"\n\nkubectl -n kube-system delete secret coredns-token-lkt4c\nkubectl -n kube-system delete pod coredns-66c464876b-25kl9\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/2788"}),"https://github.com/k3s-io/k3s/issues/2788"))),(0,r.kt)("h2",k({},{id:"etcdserver-mvcc-required-revision-has-been-compacted"}),"etcdserver: mvcc: required revision has been compacted"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/4419#issuecomment-962897354"}),"https://github.com/k3s-io/k3s/issues/4419#issuecomment-962897354"))),(0,r.kt)("h2",k({},{id:"transport-error-while-dialing-dial-tcp-1270012379-connect-connection-refused"}),"transport: Error while dialing dial tcp 127.0.0.1:2379: connect: connection refused"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/4728"}),"https://github.com/k3s-io/k3s/issues/4728"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53cc\u8282\u70b9 HA Matser \u91cd\u542f\u540e\u51fa\u73b0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/pull/5254"}),"#5254")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/2345"}),"https://github.com/k3s-io/k3s/issues/2345"))),(0,r.kt)("h2",k({},{id:"failed-to-reconcile-with-temporary-etcd-walpb-crc-mismatch"}),"Failed to reconcile with temporary etcd: walpb: crc mismatch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"k3s restore \u65e7\u7684\u4f1a\u653e\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"${data-dir}/server/db/etcd-old/")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672c\u5730\u5feb\u7167 ",(0,r.kt)("inlineCode",{parentName:"li"},"${data-dir}/server/db/snapshots")),(0,r.kt)("li",{parentName:"ul"},"data-dir=/var/lib/rancher/k3s")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"k3s etcd-snapshot list\n# \u5c1d\u8bd5\u6062\u590d\nk3s server --cluster-reset --cluster-reset-restore-path=/var/lib/rancher/k3s/server/db/snapshots/XXX\n\n# mv /var/lib/rancher/k3s/server/db/etcd/ etcd.bk\n# k3s etcd-snapshot prune --snapshot-retention 10\n")),(0,r.kt)("h2",k({},{id:"cluster-id-mismatch"}),"cluster ID mismatch"),(0,r.kt)("p",null,"\u90e8\u5206 master \u6062\u590d\u540e\u53ef\u80fd\u51fa\u73b0\uff0c\u5176\u4ed6\u8282\u70b9\u9700\u8981 reset \u6216 restore"),(0,r.kt)("h2",k({},{id:"invalid-bearer-token-token-has-been-invalidated"}),"invalid bearer token, Token has been invalidated"),(0,r.kt)("p",null,"renew \u540e\u51fa\u73b0"),(0,r.kt)("h2",k({},{id:"user-k3s-cloud-controller-manager-cannot-get-resource-leases-in-api-group-coordinationk8sio-in-the-namespace-kube-system"}),'User "k3s-cloud-controller-manager" cannot get resource "leases" in API group "coordination.k8s.io" in the namespace "kube-system"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/6119"}),"https://github.com/k3s-io/k3s/issues/6119"))),(0,r.kt)("h2",k({},{id:"ulimit"}),"ulimit"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# openrc\necho 'rc_ulimit=\"-n 1048576\"' >> /etc/rancher/k3s/k3s.env\n")),(0,r.kt)("h2",k({},{id:"\u5355\u8282\u70b9\u8f6c\u591a\u8282\u70b9"}),"\u5355\u8282\u70b9\u8f6c\u591a\u8282\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9 -> HA"),(0,r.kt)("li",{parentName:"ul"},"SQLite -> ETCD"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5b58\u50a8\u7136\u540e\u91cd\u542f\u5373\u53ef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8\u7684\u65f6\u5019\u6dfb\u52a0 cluster-init \u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u672c\u5730\u5df2\u7ecf\u53d1\u73b0 etcd \u6570\u636e\u5e93\u65f6\uff0c--cluster-init, --server, --datastore-endpoint \u4f1a\u88ab\u5ffd\u7565"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://docs.k3s.io/datastore/ha-embedded#existing-clusters"}),"https://docs.k3s.io/datastore/ha-embedded#existing-clusters"))),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"echo 'cluster-init: true' >> /etc/rancher/k3s/config.yaml\n\n# \u8fc1\u79fb\u540e\u4f1a\u8bb0\u5f55 state.db.migrated\nservice k3s restart\ndu -sh /var/lib/rancher/k3s/server/db/etcd\n\n# etcd \u652f\u6301\u5feb\u7167\nk3s etcd-snapshot save\nk3s etcd-snapshot list\n# \u5feb\u7167\u76ee\u5f55\nls /var/lib/rancher/k3s/server/db/snapshots\n\n# \u5224\u65ad\nlsof -f -- /var/lib/rancher/k3s/server/db/state.db-wal\n")),(0,r.kt)("h2",k({},{id:"max-pods"}),"max-pods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 110")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"by config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),'kubelet-arg:\n  - config=/etc/rancher/k3s/kubelet.config\n#  - \'maxPods=250\'\n#  - "kube-reserved=cpu=500m,memory=1Gi,ephemeral-storage=2Gi"\n#  - "system-reserved=cpu=500m, memory=1Gi,ephemeral-storage=2Gi"\n#  - "eviction-hard=memory.available<500Mi,nodefs.available<10%"\n')),(0,r.kt)("ol",k({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"by config file")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{}),"--kubelet-arg=config=/etc/rancher/k3s/kubelet.config\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/rancher/k3s/kubelet.config")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),"apiVersion: kubelet.config.k8s.io/v1beta1\nkind: KubeletConfiguration\nmaxPods: 250\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/"}),"https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/"}),"https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://docs.k3s.io/cli/agent#customized-flags"}),"https://docs.k3s.io/cli/agent#customized-flags"))),(0,r.kt)("h2",k({},{id:"waiting-for-containerd-startup-rpc-error-code--unimplemented-desc--unknown-service-runtimev1runtimeservice"}),"Waiting for containerd startup: rpc error: code = Unimplemented desc = unknown service runtime.v1.RuntimeService"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"k3s/agent/containerd/containerd.log"),(0,r.kt)("li",{parentName:"ul"},"k3s v1.25 -> v1.26")),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{}),'time="2023-06-04T16:17:14.398351570+08:00" level=info msg="Connect containerd service"\ntime="2023-06-04T16:17:14.398408099+08:00" level=info msg="using legacy CRI server"\ntime="2023-06-04T16:17:14.398418537+08:00" level=info msg="using experimental NRI integration - disable nri plugin to prevent this"\ntime="2023-06-04T16:17:14.398549887+08:00" level=warning msg="failed to load plugin io.containerd.grpc.v1.cri" error="failed to create CRI service: failed to find snapshotter \\"zfs\\""\ntime="2023-06-04T16:17:14.398913047+08:00" level=info msg=serving... address=/run/k3s/containerd/containerd.sock.ttrpc\ntime="2023-06-04T16:17:14.398971211+08:00" level=info msg=serving... address=/run/k3s/containerd/containerd.sock\ntime="2023-06-04T16:17:14.398989382+08:00" level=info msg="containerd successfully booted in 0.430664s"\n')),(0,r.kt)("p",null,"\u662f\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'failed to find snapshotter "zfs"')," \u5bfc\u81f4"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"k3s ctr plugin ls\n")),(0,r.kt)("h2",k({},{id:"failed-to-get-network-cbr0-cached-result-decoding-version-from-network-config-unexpected-end-of-json-input"}),'failed to get network \\"cbr0\\" cached result: decoding version from network config: unexpected end of JSON input"'),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"grep 'failed to get network' /var/log/k3s.log\nls -s /var/lib/cni/flannel/ # size=0 \u7684\u6587\u4ef6\n\nk3s ctr container rm $(find /var/lib/cni/flannel/ -size 0 | xargs -n1 basename)\n\nfind /var/lib/cni/flannel/ -size 0 -delete\nfind /var/lib/cni/results/ -size 0 -delete # cached result\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/k3s-io/k3s/issues/6185#issuecomment-1399502450"}),"https://github.com/k3s-io/k3s/issues/6185#issuecomment-1399502450"))),(0,r.kt)("h2",k({},{id:"k3s-unable-to-apply-rc_ulimit-settings"}),"k3s: unable to apply RC_ULIMIT settings"),(0,r.kt)("h2",k({},{id:"cluster-ca-certificate-is-not-trusted-by-the-host-ca-bundle-but-the-token-does-not-include-a-ca-hash-use-the-full-token-from-the-servers-node-token-file-to-enable-cluster-ca-validation"}),"Cluster CA certificate is not trusted by the host CA bundle, but the token does not include a CA hash. Use the full token from the server's node-token file to enable Cluster CA validation."),(0,r.kt)("h2",k({},{id:"starting-kubernetes-preparing-server-token-ca-hash-does-not-match-the-cluster-ca-certificate-hash"}),"starting kubernetes: preparing server: token CA hash does not match the Cluster CA certificate hash"),(0,r.kt)("h2",k({},{id:"etcd-cluster-join-failed-cannot-fetch-cluster-info-from-peer-urls-could-not-retrieve-cluster-information-from-the-given-urls"}),"etcd cluster join failed: cannot fetch cluster info from peer urls: could not retrieve cluster information from the given URLs"))}v.isMDXComponent=!0}}]);