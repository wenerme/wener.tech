/*! For license information please see 29a64f14.f798eb52.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46108],{75264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(2488),s=t(62780);const i={title:"Kubernetes"},l="Kubernetes",c={id:"devops/kubernetes/README",title:"Kubernetes",description:"- Awesome",source:"@site/../notes/devops/kubernetes/README.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/",permalink:"/notes/devops/kubernetes/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664421654,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Kubernetes"},sidebar:"docs",previous:{title:"terraformer",permalink:"/notes/devops/infra/terraform/terraformer"},next:{title:"K8S Apps",permalink:"/notes/devops/kubernetes/app/cookbook"}},o={},a=[{value:"Install",id:"install",level:2},{value:"kubeadm",id:"kubeadm",level:3},{value:"Tips",id:"tips",level:4},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"FAQ",id:"faq",level:4},{value:"\u5b89\u88c5\u597d\u540e\u65e0\u6cd5\u4f7f\u7528 kubectl, \u63d0\u793a\u8bf4\u5730\u5740\u9519\u8bef",id:"\u5b89\u88c5\u597d\u540e\u65e0\u6cd5\u4f7f\u7528-kubectl-\u63d0\u793a\u8bf4\u5730\u5740\u9519\u8bef",level:5},{value:"\u963b\u585e\u5728 Waiting for &#39;control plane to become ready&#39;",id:"\u963b\u585e\u5728-waiting-for-control-plane-to-become-ready",level:5},{value:"\u9650\u5236",id:"\u9650\u5236",level:5},{value:"docker-multinode",id:"docker-multinode",level:3},{value:"kube-up - Ubuntu",id:"kube-up---ubuntu",level:3},{value:"Tips",id:"tips-1",level:2},{value:"\u5e38\u7528 Label",id:"\u5e38\u7528-label",level:3},{value:"kubectl",id:"kubectl",level:2},{value:"run",id:"run",level:3},{value:"Help",id:"help",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/notes/devops/kubernetes/awesome",children:"Awesome"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/notes/devops/kubernetes/faq",children:"\u5e38\u89c1\u95ee\u9898"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/notes/devops/kubernetes/version",children:"\u7248\u672c"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/notes/devops/kubernetes/distro/",children:"\u53d1\u884c\u7248"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs/user-guide",children:"Reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs",children:"Guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/kelseyhightower/kubernetes-the-hard-way",children:"Kubernetes the hard way"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://blog.netsil.com/kubernetes-vs-openshift-vs-tectonic-comparing-enterprise-options-e3a34dc60519",children:"Kubernetes vs Openshift vs Tectonic"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/ramitsurana/awesome-kubernetes",children:"ramitsurana/awesome-kubernetes"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u5df2\u8fc7\u65f6"})}),"\n",(0,r.jsx)(n.h3,{id:"kubeadm",children:"kubeadm"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece 1.4 \u5f00\u59cb, Kubernetes \u63d0\u4f9b\u4e86 kubeadm \u7684\u6d4b\u8bd5\u7248,\u7b80\u5355\u7684",(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs/getting-started-guides/kubeadm/",children:"\u4f7f\u7528\u8bf4\u660e"})," \u63cf\u8ff0\u4e86\u5982\u4f55\u4ee5\u7c7b\u4f3c\u4e8e docker swarm \u521d\u59cb\u5316\u96c6\u7fa4\u7684\u65b9\u5f0f\u6765\u90e8\u7f72 Kubernetes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5982\u679c\u4f60\u6709\u4ee3\u7406,\u5219\u5148\u8bbe\u7f6e\u597d\u4ee3\u7406\nproxy_host=10.1.1.1\nexport https_proxy=http://$proxy_host:7777\nexport http_proxy=http://$proxy_host:7777\n\ncurl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -\ncat <<EOF > /etc/apt/sources.list.d/kubernetes.list\ndeb http://apt.kubernetes.io/ kubernetes-xenial main\nEOF\napt-get update\napt-get install -y docker.io kubelet kubeadm kubectl kubernetes-cni\n\n# \u6ce8\u610f\n# \u7531\u4e8e kubeadm \u4f7f\u7528\u7684\u5927\u591a\u670d\u52a1\u90fd\u662f\u5728\u5bb9\u5668\u4e2d\u7684,\u56e0\u6b64\u4e00\u5b9a\u8981\u8bb0\u5f97\u4e3a docker \u8bbe\u7f6e\u597d\u4ee3\u7406\n\n# \u542f\u52a8 Master \u8282\u70b9\n# \u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361,\u901a\u8fc7  --api-advertise-addresses=<\u5730\u5740> \u6307\u5b9a\nkubeadm init\n# \u5141\u8bb8 Master \u8282\u70b9\u6267\u884c POD, \u4e5f\u53ef\u7528\u4e8e\u5355\u8282\u70b9\u6d4b\u8bd5\nkubelet taint nodes --all dedicated-\n\n# \u5728\u5176\u4ed6\u8282\u70b9\u4e0a\u6267\u884c,\u52a0\u5165\u5230\u96c6\u7fa4\nkubeadm join --token <\u4e0a\u9762\u751f\u6210\u7684 Token> <\u4e0a\u9762\u7ed9\u51fa\u7684\u5730\u5740>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6e05\u7406\u96c6\u7fa4"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"systemctl stop kubelet\ndocker rm -f $(docker ps -q)\nmount | grep \"/var/lib/kubelet/*\" | awk '{print $3}' | xargs umount 1> /dev/null 2> /dev/null\nrm -rf /var/lib/kubelet /etc/kubernetes /var/lib/etcd /etc/cni\nip link set cbr0 down\nip link del cbr0\nip link set cni0 down\nip link del cni0\nsystemctl start kubelet\n"})}),"\n",(0,r.jsx)(n.h4,{id:"tips",children:"Tips"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 kubeadm \u65f6\u4f1a\u5728 /etc/systemd/system/kubelet.service.d \u751f\u6210\u76f8\u5e94\u7684\u914d\u7f6e,\u4f8b\u5982 10-kubeadm.conf."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"10-kubeadm.conf"})}),"\n",(0,r.jsxs)(n.p,{children:["kubelet \u53c2\u6570\u53ef\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs/admin/kubelet/",children:"http://kubernetes.io/docs/admin/kubelet/"}),"\ncni \u53ef\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs/admin/network-plugins/",children:"http://kubernetes.io/docs/admin/network-plugins/"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[Service]\nEnvironment="KUBELET_KUBECONFIG_ARGS=--kubeconfig=/etc/kubernetes/kubelet.conf --require-kubeconfig=true"\nEnvironment="KUBELET_SYSTEM_PODS_ARGS=--pod-manifest-path=/etc/kubernetes/manifests --allow-privileged=true"\nEnvironment="KUBELET_NETWORK_ARGS=--network-plugin=cni --cni-conf-dir=/etc/cni/net.d --cni-bin-dir=/opt/cni/bin"\nEnvironment="KUBELET_DNS_ARGS=--cluster-dns=100.64.0.10 --cluster-domain=cluster.local"\nEnvironment="KUBELET_EXTRA_ARGS=--v=4"\nExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_SYSTEM_PODS_ARGS $KUBELET_NETWORK_ARGS $KUBELET_DNS_ARGS $KUBELET_EXTRA_ARGS\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/best-practices/",children:"https://kubernetes.io/docs/setup/best-practices/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rancher.com/blog/2019/2019-01-17-101-more-kubernetes-security-best-practices/",children:"https://rancher.com/blog/2019/2019-01-17-101-more-kubernetes-security-best-practices/"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h5,{id:"\u5b89\u88c5\u597d\u540e\u65e0\u6cd5\u4f7f\u7528-kubectl-\u63d0\u793a\u8bf4\u5730\u5740\u9519\u8bef",children:"\u5b89\u88c5\u597d\u540e\u65e0\u6cd5\u4f7f\u7528 kubectl, \u63d0\u793a\u8bf4\u5730\u5740\u9519\u8bef"}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u624b\u52a8\u6307\u5b9a\u5730\u5740 ",(0,r.jsx)(n.code,{children:"kubectl --server=127.0.0.1:8080 get nodes"}),", \u56e0\u4e3a\u542f\u52a8\u65f6\u7684 API \u670d\u52a1\u5668\u5730\u5740\u4e3a ",(0,r.jsx)(n.code,{children:"127.0.0.1:8080"}),",\u5177\u4f53\u6307\u5b9a\u4f4d\u7f6e\u5728 ",(0,r.jsx)(n.code,{children:"cat /etc/kubernetes/manifests/kube-apiserver.json"}),", \u8be5\u5730\u5740\u6682\u65f6\u65e0\u6cd5\u66f4\u6539."]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u7ed1\u5b9a\u7684\u5730\u5740\u662f ",(0,r.jsx)(n.code,{children:"127.0.0.1"}),", \u6240\u4ee5\u5982\u679c\u60f3\u8981\u5728\u672c\u5730\u4f7f\u7528,\u5219\u5efa\u8bae\u5728\u672c\u5730\u901a\u8fc7\u8f6c\u53d1\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ssh -vNL 8082:127.0.0.1:8080 \u4e3b\u673a\u5730\u5740"}),", \u7136\u540e\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"kubectl -s 127.0.0.1:8082 get nodes"})," \u8fdb\u884c\u64cd\u4f5c\u4e86."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["TIPS:\n\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:'alias k="kubectl -s 127.0.0.1:8082"'})," \u7b80\u5316\u64cd\u4f5c"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"\u963b\u585e\u5728-waiting-for-control-plane-to-become-ready",children:"\u963b\u585e\u5728 Waiting for 'control plane to become ready'"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u6709\u522b\u4eba\u9047\u5230\u8fc7\u8be5\u95ee\u9898 ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/33544",children:"https://github.com/kubernetes/kubernetes/issues/33544"})," ,\u6211\u4e5f\u9047\u5230,\u4f46\u4e3a Docker \u6dfb\u52a0\u4ee3\u7406\u540e\u5c31\u6ca1\u95ee\u9898\u4e86,\u5e94\u8be5\u662f\u62c9\u53d6\u5bb9\u5668\u9020\u6210\u7684."]}),"\n",(0,r.jsx)(n.h5,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e kubeadm \u8fd8\u5904\u4e8e beta \u7248,\u56e0\u6b64\u8fd8\u4f1a\u6709\u5f88\u591a\u95ee\u9898"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa\u7684\u96c6\u7fa4\u4e0d\u80fd\u548c\u4e91\u63d0\u4f9b\u5546\u8fdb\u884c\u96c6\u6210,\u4e5f\u5c31\u662f\u8bf4\u7528\u4e0d\u4e86 GCE \u548c AWS \u7684\u8d1f\u8f7d\u5747\u8861\u548c\u6301\u4e45\u5316\u5b58\u50a8.\u5efa\u8bae\u4f7f\u7528 NodePort \u6765\u89c4\u907f\u6539\u95ee\u9898."}),"\n",(0,r.jsx)(n.li,{children:"\u96c6\u7fa4\u53ea\u80fd\u6709\u4e00\u4e2a Master, \u591a\u4e2a Master \u7684\u5b9e\u73b0\u8fd8\u5728\u8fdb\u884c\u4e2d.\u5efa\u8bae\u5b9a\u4e49\u5907\u4efd etcd \u6570\u636e(/var/lib/etcd) \u6765\u907f\u514d\u6570\u636e\u4e22\u5931\u7684\u95ee\u9898.\u5982\u679c\u6570\u636e\u4e22\u5931,\u6574\u4e2a\u96c6\u7fa4\u5fc5\u987b\u4ece\u5934\u5f00\u59cb\u6784\u5efa."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubectl logs"})," \u65e0\u6cd5\u4f7f\u7528,\u53ef\u8ffd\u8e2a\u8be5\u95ee\u9898 #22770.\u53ef\u901a\u8fc7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"docker logs"})," \u6765\u67e5\u770b\u65e5\u5fd7."]}),"\n",(0,r.jsxs)(n.li,{children:["\u76ee\u524d\u8fd8\u6ca1\u6709\u5f88\u597d\u7684\u529e\u6cd5\u751f\u6210 kubeconfig \u914d\u7f6e\u7528\u4e8e\u8fdc\u7a0b\u6388\u6743.\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"scp root@<master>:/etc/kubernetes/admin.conf"})," \u6765\u62c9\u53d6\u4e3b\u914d\u7f6e,\u7136\u540e\u5728\u8fdc\u7a0b\u4f7f\u7528\u65f6\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"kubectl --kubeconfig ./admin.conf"})," \u7684\u5f62\u5f0f\u6765\u4f7f\u7528."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"docker-multinode",children:"docker-multinode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone --depth=1 https://github.com/kubernetes/kube-deploy\ncd kube-deploy/docker-multinode/\n# \u4f7f\u7528 docker \u5b89\u88c5\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355,\u9700\u8981\u4e0b\u8f7d\u7684\u53ea\u6709\u955c\u50cf\n# \u4f7f\u7528 docker \u4e00\u5b9a\u8981\u505a\u597d\u4ee3\u7406,\u5426\u5219\u4e0b\u8f7d gcr \u7684\u5185\u5bb9\u4f1a\u4e0b\u8f7d\u5931\u8d25\n# \u505a docker \u7684\u955c\u50cf\u65f6,\u4e0d\u53ea\u662f\u5bf9\u7cfb\u7edf\u7684 docker \u505a\u955c\u50cf,\u8fd8\u9700\u8981\u4fee\u6539 docker-bootstrap \u4e2d, bootstrap \u4f7f\u7528\u5230\u7684 daemon \u7684\u4ee3\u7406\n\nsu root\n./master.sh\n# \u542f\u52a8\u4f7f\u7528\u7684\u955c\u50cf https://github.com/kubernetes/kubernetes/tree/master/cluster/images/hyperkube\n# \u67e5\u770b\u542f\u52a8\u8fd0\u884c\u7684\u670d\u52a1,\u53ef\u4fee\u6539\u53c2\u6570\n# docker run --rm -it gcr.io/google_containers/hyperkube-amd64:v1.3.6 ls /etc/kubernetes/manifests-multi\n# \u53ef\u8bbe\u7f6e\u7684\u53c2\u6570\u53ef\u53c2\u8003 http://kubernetes.io/docs/admin/kube-apiserver/\n\n# \u68c0\u67e5 Bootstrap \u542f\u52a8\u7684\u7a0b\u5e8f\u662f\u5426\u6b63\u786e\ndocker -H unix:///var/run/docker-bootstrap.sock ps\n# \u68c0\u67e5\u76f8\u5173\u7684\u8fdb\u7a0b\u662f\u5426\u542f\u52a8\ndocker ps\n# \u4e3b\u8282\u70b9\u542f\u52a8\u6210\u529f\u540e\u518d\u4ece\u8282\u70b9\u4e0a\u6267\u884c\n# MASTER_IP=\u4e3b\u8282\u70b9\u5730\u5740 ./worker.sh\n\n# \u5b89\u88c5 kubectl\n# 1.3.6\ncurl -sSL https://storage.googleapis.com/kubernetes-release/release/v[KUBECTL_VERSION]/bin/linux/amd64/kubectl > /usr/local/bin/kubectl\nchmod +x /usr/local/bin/kubectl\n\n# \u5b89\u88c5 Helm\ncurl -s https://get.helm.sh | bash\nmv $PWD/helmc /usr/local/bin/helmc\n# \u5b89\u88c5 Deis\nhelmc repo add deis https://github.com/deis/charts\n\n# \u5177\u4f53\u7248\u672c\u53ef\u67e5\u770b https://github.com/deis/charts\n# fetches the chart into a local workspace\nhelmc fetch deis/workflow-v2.4.1\n# generates various secrets\nhelmc generate -x manifests workflow-v2.4.1\n# injects resources into  your cluster\nhelmc install workflow-v2.4.1\n# \u68c0\u67e5\u5b89\u88c5\u72b6\u6001\nkubectl --namespace=deis get pods\n\n# \u5b89\u88c5 Deis \u547d\u4ee4\u884c\ncurl -sSL http://deis.io/deis-cli/install-v2.sh | bash\nmv $PWD/deis /usr/local/bin/deis\nkubectl --namespace=deis get svc deis-router\n# \u4f7f\u7528\u4e0a\u4e2a\u547d\u4ee4\u4e2d\u7684 ExternalIP\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:":8080/ui \u7ba1\u7406\u9762\u677f"}),"\n",(0,r.jsx)(n.li,{children:":4194 cAdvisor"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kube-up---ubuntu",children:"kube-up - Ubuntu"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs/getting-started-guides/ubuntu/",children:"http://kubernetes.io/docs/getting-started-guides/ubuntu/"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git clone --depth 1 https://github.com/kubernetes/kubernetes.git\n\nexport nodes="root@10.25.30.127 root@10.25.17.232 root@10.25.24.116"\nexport role="ai i i"\nexport NUM_NODES=${NUM_NODES:-3}\nexport SERVICE_CLUSTER_IP_RANGE=192.168.3.0/24\nexport FLANNEL_NET=172.16.0.0/16\nexport PROXY_SETTING="http_proxy=10.25.30.127:7777 https_proxy=10.25.30.127:7777"\n\n# \u4e0b\u8f7d\u7684\u6587\u4ef6\u4f1a\u5b58\u653e\u4e8e kubernetes/cluster/ubuntu/binaries directory\nKUBERNETES_PROVIDER=ubuntu ./kube-up.sh\n'})}),"\n",(0,r.jsx)(n.h2,{id:"tips-1",children:"Tips"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8be5 PR ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/pull/30360",children:"#30360"})," \u6b63\u5728\u5b9e\u73b0\u4e00\u4e2a kubeadm \u547d\u4ee4,\u4f7f\u5f97 Kubernetes \u7684\u96c6\u7fa4\u6784\u5efa\u548c swarm \u4e00\u6837\u7b80\u5355."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5f53\u5173\u95ed k8s \u540e,\u5bf9\u5e94\u7684 pods \u4e0d\u4f1a\u88ab umount\ncat /proc/mounts | sed -nre 's#.*?(/var\\S*)\\s.*#\\1#p' | xargs -n 1 umount\n\n# \u5220\u9664 veth \u865a\u62df\u7f51\u5361\nifconfig | sed -nre 's/(veth\\S*)\\s.*/\\1/p' | xargs -n 1 ip link delete\n\n# \u5982\u679c\u4fee\u6539\u4e86 CNI \u7684\u5730\u5740,\u9700\u8981\u5148\u5220\u9664\u539f\u6765\u7684 cni0\nip link delete cni0\n\nkubectl run -it --rm bb --image=busybox --restart=Never\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u79c1\u6709 IP v4 \u5730\u5740"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"10.0.0.0/8 (255.0.0.0)\n172.16.0.0/12 (255.240.0.0)\n192.168.0.0/16 (255.255.0.0)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5e38\u7528-label",children:"\u5e38\u7528 Label"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["release\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"stable, canary"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["environment\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"dev, qa, production"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["tier\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"frontend, backend, cache"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["partition\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"customerA, customerB"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["track\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"daily, weekly"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["role\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"master, slave"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kubectl",children:"kubectl"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://kubernetes.io/docs/user-guide/kubectl-overview/",children:"kubectl-overview"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"run",children:"run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Create and run a particular image, possibly replicated.\n# Creates a deployment or job to manage the created container(s).\n\n# Start a single instance of nginx.\nkubectl run nginx --image=nginx\n\n# Start a single instance of hazelcast and let the container expose port 5701 .\nkubectl run hazelcast --image=hazelcast --port=5701\n\n# Start a single instance of hazelcast and set environment variables "DNS_DOMAIN=cluster" and "POD_NAMESPACE=default" in the container.\nkubectl run hazelcast --image=hazelcast --env="DNS_DOMAIN=cluster" --env="POD_NAMESPACE=default"\n\n# Start a replicated instance of nginx.\nkubectl run nginx --image=nginx --replicas=5\n\n# Dry run. Print the corresponding API objects without creating them.\nkubectl run nginx --image=nginx --dry-run\n\n# Start a single instance of nginx, but overload the spec of the deployment with a partial set of values parsed from JSON.\nkubectl run nginx --image=nginx --overrides=\'{ "apiVersion": "v1", "spec": { ... } }\'\n\n# Start a pod of busybox and keep it in the foreground, don\'t restart it if it exits.\nkubectl run -i -t busybox --image=busybox --restart=Never\n\n# Start the nginx container using the default command, but use custom arguments (arg1 .. argN) for that command.\nkubectl run nginx --image=nginx -- <arg1> <arg2> ... <argN>\n\n# Start the nginx container using a different command and custom arguments.\nkubectl run nginx --image=nginx --command -- <cmd> <arg1> ... <argN>\n\n# Start the perl container to compute \u03c0 to 2000 places and print it out.\nkubectl run pi --image=perl --restart=OnFailure -- perl -Mbignum=bpi -wle \'print bpi(2000)\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ kubeadm init -h\nRun this in order to set up the Kubernetes master.\n\nUsage:\n  kubeadm init [flags]\n\nFlags:\n      --api-advertise-addresses value   The IP addresses to advertise, in case autodetection fails (default [])\n      --api-external-dns-names value    The DNS names to advertise, in case you have configured them yourself (default [])\n      --cloud-provider string           Enable cloud provider features (external load-balancers, storage, etc), e.g. "gce"\n      --external-etcd-cafile string     etcd certificate authority certificate file. Note: The path must be in /etc/ssl/certs\n      --external-etcd-certfile string   etcd client certificate file. Note: The path must be in /etc/ssl/certs\n      --external-etcd-endpoints value   etcd endpoints to use, in case you have an external cluster (default [])\n      --external-etcd-keyfile string    etcd client key file. Note: The path must be in /etc/ssl/certs\n      --pod-network-cidr value          Specify range of IP addresses for the pod network; if set, the control plane will automatically allocate CIDRs for every node\n      --service-cidr value              Use alterantive range of IP address for service VIPs, defaults to 100.64.0.0/12 (default 100.64.0.0/12)\n      --service-dns-domain string       Use alternative domain for services, e.g. "myorg.internal" (default "cluster.local")\n      --token string                    Shared secret used to secure cluster bootstrap; if none is provided, one will be generated for you\n      --use-kubernetes-version string   Choose a specific Kubernetes version for the control plane (default "v1.4.0")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,d=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>l});var r=t(96651);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);