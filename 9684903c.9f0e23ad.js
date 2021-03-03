(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{461:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(7),c=(n(0),n(766)),i={id:"kubernetes",title:"Kubernetes"},b={unversionedId:"devops/kubernetes/kubernetes",id:"devops/kubernetes/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"* Reference",source:"@site/notes/devops/kubernetes/README.md",slug:"/devops/kubernetes/kubernetes",permalink:"/notes/devops/kubernetes/kubernetes",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/README.md",version:"current",sidebar:"docs",previous:{title:"Watchtower",permalink:"/notes/devops/docker/watchtower"},next:{title:"K8S Awesome",permalink:"/notes/devops/kubernetes/k8s-awesome"}},s=[{value:"Install",id:"install",children:[{value:"kubeadm",id:"kubeadm",children:[]}]},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[{value:"docker-multinode",id:"docker-multinode",children:[]},{value:"kube-up - Ubuntu",id:"kube-up---ubuntu",children:[]}]},{value:"Tips",id:"tips-1",children:[{value:"\u5e38\u7528 Label",id:"\u5e38\u7528-label",children:[]}]},{value:"kubectl",id:"kubectl",children:[{value:"run",id:"run",children:[]},{value:"Help",id:"help",children:[]}]}],l={rightToc:s};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://kubernetes.io/docs/user-guide"}),"Reference")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://kubernetes.io/docs"}),"Guide")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kelseyhightower/kubernetes-the-hard-way"}),"Kubernetes the hard way")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://blog.netsil.com/kubernetes-vs-openshift-vs-tectonic-comparing-enterprise-options-e3a34dc60519"}),"Kubernetes vs Openshift vs Tectonic")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ramitsurana/awesome-kubernetes"}),"ramitsurana/awesome-kubernetes"))),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("h3",{id:"kubeadm"},"kubeadm"),Object(c.b)("p",null,"\u4ece 1.4 \u5f00\u59cb, Kubernetes \u63d0\u4f9b\u4e86 kubeadm \u7684\u6d4b\u8bd5\u7248,\u7b80\u5355\u7684",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://kubernetes.io/docs/getting-started-guides/kubeadm/"}),"\u4f7f\u7528\u8bf4\u660e")," \u63cf\u8ff0\u4e86\u5982\u4f55\u4ee5\u7c7b\u4f3c\u4e8e docker swarm \u521d\u59cb\u5316\u96c6\u7fa4\u7684\u65b9\u5f0f\u6765\u90e8\u7f72 Kubernetes."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u4f60\u6709\u4ee3\u7406,\u5219\u5148\u8bbe\u7f6e\u597d\u4ee3\u7406\nproxy_host=10.1.1.1\nexport https_proxy=http://$proxy_host:7777\nexport http_proxy=http://$proxy_host:7777\n\ncurl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -\ncat <<EOF > /etc/apt/sources.list.d/kubernetes.list\ndeb http://apt.kubernetes.io/ kubernetes-xenial main\nEOF\napt-get update\napt-get install -y docker.io kubelet kubeadm kubectl kubernetes-cni\n\n# \u6ce8\u610f\n# \u7531\u4e8e kubeadm \u4f7f\u7528\u7684\u5927\u591a\u670d\u52a1\u90fd\u662f\u5728\u5bb9\u5668\u4e2d\u7684,\u56e0\u6b64\u4e00\u5b9a\u8981\u8bb0\u5f97\u4e3a docker \u8bbe\u7f6e\u597d\u4ee3\u7406\n\n# \u542f\u52a8 Master \u8282\u70b9\n# \u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361,\u901a\u8fc7  --api-advertise-addresses=<\u5730\u5740> \u6307\u5b9a\nkubeadm init\n# \u5141\u8bb8 Master \u8282\u70b9\u6267\u884c POD, \u4e5f\u53ef\u7528\u4e8e\u5355\u8282\u70b9\u6d4b\u8bd5\nkubelet taint nodes --all dedicated-\n\n# \u5728\u5176\u4ed6\u8282\u70b9\u4e0a\u6267\u884c,\u52a0\u5165\u5230\u96c6\u7fa4\nkubeadm join --token <\u4e0a\u9762\u751f\u6210\u7684 Token> <\u4e0a\u9762\u7ed9\u51fa\u7684\u5730\u5740>\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6e05\u7406\u96c6\u7fa4")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"systemctl stop kubelet;\ndocker rm -f $(docker ps -q); mount | grep \"/var/lib/kubelet/*\" | awk '{print $3}' | xargs umount 1>/dev/null 2>/dev/null;\nrm -rf /var/lib/kubelet /etc/kubernetes /var/lib/etcd /etc/cni;\nip link set cbr0 down; ip link del cbr0;\nip link set cni0 down; ip link del cni0;\nsystemctl start kubelet\n")),Object(c.b)("h4",{id:"tips"},"Tips"),Object(c.b)("p",null,"\u4f7f\u7528 kubeadm \u65f6\u4f1a\u5728 /etc/systemd/system/kubelet.service.d \u751f\u6210\u76f8\u5e94\u7684\u914d\u7f6e,\u4f8b\u5982 10-kubeadm.conf."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"10-kubeadm.conf")),Object(c.b)("p",null,"kubelet \u53c2\u6570\u53ef\u53c2\u8003 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://kubernetes.io/docs/admin/kubelet/"}),"http://kubernetes.io/docs/admin/kubelet/"),"\ncni \u53ef\u53c2\u8003 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://kubernetes.io/docs/admin/network-plugins/"}),"http://kubernetes.io/docs/admin/network-plugins/")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'[Service]\nEnvironment="KUBELET_KUBECONFIG_ARGS=--kubeconfig=/etc/kubernetes/kubelet.conf --require-kubeconfig=true"\nEnvironment="KUBELET_SYSTEM_PODS_ARGS=--pod-manifest-path=/etc/kubernetes/manifests --allow-privileged=true"\nEnvironment="KUBELET_NETWORK_ARGS=--network-plugin=cni --cni-conf-dir=/etc/cni/net.d --cni-bin-dir=/opt/cni/bin"\nEnvironment="KUBELET_DNS_ARGS=--cluster-dns=100.64.0.10 --cluster-domain=cluster.local"\nEnvironment="KUBELET_EXTRA_ARGS=--v=4"\nExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_SYSTEM_PODS_ARGS $KUBELET_NETWORK_ARGS $KUBELET_DNS_ARGS $KUBELET_EXTRA_ARGS\n')),Object(c.b)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/setup/best-practices/"}),"https://kubernetes.io/docs/setup/best-practices/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://rancher.com/blog/2019/2019-01-17-101-more-kubernetes-security-best-practices/"}),"https://rancher.com/blog/2019/2019-01-17-101-more-kubernetes-security-best-practices/"))),Object(c.b)("h4",{id:"faq"},"FAQ"),Object(c.b)("h5",{id:"\u5b89\u88c5\u597d\u540e\u65e0\u6cd5\u4f7f\u7528-kubectl-\u63d0\u793a\u8bf4\u5730\u5740\u9519\u8bef"},"\u5b89\u88c5\u597d\u540e\u65e0\u6cd5\u4f7f\u7528 kubectl, \u63d0\u793a\u8bf4\u5730\u5740\u9519\u8bef"),Object(c.b)("p",null,"\u9700\u8981\u624b\u52a8\u6307\u5b9a\u5730\u5740 ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl --server=127.0.0.1:8080 get nodes"),", \u56e0\u4e3a\u542f\u52a8\u65f6\u7684API \u670d\u52a1\u5668\u5730\u5740\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"127.0.0.1:8080"),",\u5177\u4f53\u6307\u5b9a\u4f4d\u7f6e\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"cat /etc/kubernetes/manifests/kube-apiserver.json"),", \u8be5\u5730\u5740\u6682\u65f6\u65e0\u6cd5\u66f4\u6539."),Object(c.b)("p",null,"\u7531\u4e8e\u7ed1\u5b9a\u7684\u5730\u5740\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"127.0.0.1"),", \u6240\u4ee5\u5982\u679c\u60f3\u8981\u5728\u672c\u5730\u4f7f\u7528,\u5219\u5efa\u8bae\u5728\u672c\u5730\u901a\u8fc7\u8f6c\u53d1\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"ssh -vNL 8082:127.0.0.1:8080 \u4e3b\u673a\u5730\u5740"),", \u7136\u540e\u5219\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl -s 127.0.0.1:8082 get nodes")," \u8fdb\u884c\u64cd\u4f5c\u4e86."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"TIPS:\n\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},'alias k="kubectl -s 127.0.0.1:8082"')," \u7b80\u5316\u64cd\u4f5c")),Object(c.b)("h5",{id:"\u963b\u585e\u5728-waiting-for-control-plane-to-become-ready"},"\u963b\u585e\u5728 Waiting for 'control plane to become ready'"),Object(c.b)("p",null,"\u4e5f\u6709\u522b\u4eba\u9047\u5230\u8fc7\u8be5\u95ee\u9898 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes/kubernetes/issues/33544"}),"https://github.com/kubernetes/kubernetes/issues/33544")," ,\u6211\u4e5f\u9047\u5230,\u4f46\u4e3a Docker \u6dfb\u52a0\u4ee3\u7406\u540e\u5c31\u6ca1\u95ee\u9898\u4e86,\u5e94\u8be5\u662f\u62c9\u53d6\u5bb9\u5668\u9020\u6210\u7684."),Object(c.b)("h5",{id:"\u9650\u5236"},"\u9650\u5236"),Object(c.b)("p",null,"\u7531\u4e8e kubeadm \u8fd8\u5904\u4e8e beta \u7248,\u56e0\u6b64\u8fd8\u4f1a\u6709\u5f88\u591a\u95ee\u9898"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u521b\u5efa\u7684\u96c6\u7fa4\u4e0d\u80fd\u548c\u4e91\u63d0\u4f9b\u5546\u8fdb\u884c\u96c6\u6210,\u4e5f\u5c31\u662f\u8bf4\u7528\u4e0d\u4e86 GCE \u548c AWS \u7684\u8d1f\u8f7d\u5747\u8861\u548c\u6301\u4e45\u5316\u5b58\u50a8.\u5efa\u8bae\u4f7f\u7528 NodePort \u6765\u89c4\u907f\u6539\u95ee\u9898."),Object(c.b)("li",{parentName:"ol"},"\u96c6\u7fa4\u53ea\u80fd\u6709\u4e00\u4e2a Master, \u591a\u4e2a Master \u7684\u5b9e\u73b0\u8fd8\u5728\u8fdb\u884c\u4e2d.\u5efa\u8bae\u5b9a\u4e49\u5907\u4efd etcd \u6570\u636e(/var/lib/etcd) \u6765\u907f\u514d\u6570\u636e\u4e22\u5931\u7684\u95ee\u9898.\u5982\u679c\u6570\u636e\u4e22\u5931,\u6574\u4e2a\u96c6\u7fa4\u5fc5\u987b\u4ece\u5934\u5f00\u59cb\u6784\u5efa."),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"kubectl logs")," \u65e0\u6cd5\u4f7f\u7528,\u53ef\u8ffd\u8e2a\u8be5\u95ee\u9898 #22770.\u53ef\u901a\u8fc7\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"docker logs")," \u6765\u67e5\u770b\u65e5\u5fd7."),Object(c.b)("li",{parentName:"ol"},"\u76ee\u524d\u8fd8\u6ca1\u6709\u5f88\u597d\u7684\u529e\u6cd5\u751f\u6210 kubeconfig \u914d\u7f6e\u7528\u4e8e\u8fdc\u7a0b\u6388\u6743.\u53ef\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"scp root@<master>:/etc/kubernetes/admin.conf")," \u6765\u62c9\u53d6\u4e3b\u914d\u7f6e,\u7136\u540e\u5728\u8fdc\u7a0b\u4f7f\u7528\u65f6\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"kubectl --kubeconfig ./admin.conf")," \u7684\u5f62\u5f0f\u6765\u4f7f\u7528.")),Object(c.b)("h3",{id:"docker-multinode"},"docker-multinode"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone --depth=1 https://github.com/kubernetes/kube-deploy\ncd kube-deploy/docker-multinode/\n# \u4f7f\u7528 docker \u5b89\u88c5\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355,\u9700\u8981\u4e0b\u8f7d\u7684\u53ea\u6709\u955c\u50cf\n# \u4f7f\u7528 docker \u4e00\u5b9a\u8981\u505a\u597d\u4ee3\u7406,\u5426\u5219\u4e0b\u8f7d gcr \u7684\u5185\u5bb9\u4f1a\u4e0b\u8f7d\u5931\u8d25\n# \u505a docker \u7684\u955c\u50cf\u65f6,\u4e0d\u53ea\u662f\u5bf9\u7cfb\u7edf\u7684 docker \u505a\u955c\u50cf,\u8fd8\u9700\u8981\u4fee\u6539 docker-bootstrap \u4e2d, bootstrap \u4f7f\u7528\u5230\u7684 daemon \u7684\u4ee3\u7406\n\nsu root\n./master.sh\n# \u542f\u52a8\u4f7f\u7528\u7684\u955c\u50cf https://github.com/kubernetes/kubernetes/tree/master/cluster/images/hyperkube\n# \u67e5\u770b\u542f\u52a8\u8fd0\u884c\u7684\u670d\u52a1,\u53ef\u4fee\u6539\u53c2\u6570\n# docker run --rm -it gcr.io/google_containers/hyperkube-amd64:v1.3.6 ls /etc/kubernetes/manifests-multi\n# \u53ef\u8bbe\u7f6e\u7684\u53c2\u6570\u53ef\u53c2\u8003 http://kubernetes.io/docs/admin/kube-apiserver/\n\n# \u68c0\u67e5 Bootstrap \u542f\u52a8\u7684\u7a0b\u5e8f\u662f\u5426\u6b63\u786e\ndocker -H unix:///var/run/docker-bootstrap.sock ps\n# \u68c0\u67e5\u76f8\u5173\u7684\u8fdb\u7a0b\u662f\u5426\u542f\u52a8\ndocker ps\n# \u4e3b\u8282\u70b9\u542f\u52a8\u6210\u529f\u540e\u518d\u4ece\u8282\u70b9\u4e0a\u6267\u884c\n# MASTER_IP=\u4e3b\u8282\u70b9\u5730\u5740 ./worker.sh\n\n# \u5b89\u88c5 kubectl\n# 1.3.6\ncurl -sSL https://storage.googleapis.com/kubernetes-release/release/v[KUBECTL_VERSION]/bin/linux/amd64/kubectl > /usr/local/bin/kubectl\nchmod +x /usr/local/bin/kubectl\n\n# \u5b89\u88c5 Helm\ncurl -s https://get.helm.sh | bash\nmv $PWD/helmc /usr/local/bin/helmc\n# \u5b89\u88c5 Deis\nhelmc repo add deis https://github.com/deis/charts\n\n# \u5177\u4f53\u7248\u672c\u53ef\u67e5\u770b https://github.com/deis/charts\n# fetches the chart into a local workspace\nhelmc fetch deis/workflow-v2.4.1\n# generates various secrets\nhelmc generate -x manifests workflow-v2.4.1\n# injects resources into  your cluster\nhelmc install workflow-v2.4.1\n# \u68c0\u67e5\u5b89\u88c5\u72b6\u6001\nkubectl --namespace=deis get pods\n\n# \u5b89\u88c5 Deis \u547d\u4ee4\u884c\ncurl -sSL http://deis.io/deis-cli/install-v2.sh | bash\nmv $PWD/deis /usr/local/bin/deis\nkubectl --namespace=deis get svc deis-router\n# \u4f7f\u7528\u4e0a\u4e2a\u547d\u4ee4\u4e2d\u7684 ExternalIP\n\n\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},":8080/ui \u7ba1\u7406\u9762\u677f"),Object(c.b)("li",{parentName:"ul"},":4194 cAdvisor")),Object(c.b)("h3",{id:"kube-up---ubuntu"},"kube-up - Ubuntu"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://kubernetes.io/docs/getting-started-guides/ubuntu/"}),"http://kubernetes.io/docs/getting-started-guides/ubuntu/")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git clone --depth 1 https://github.com/kubernetes/kubernetes.git\n\n\nexport nodes="root@10.25.30.127 root@10.25.17.232 root@10.25.24.116"\nexport role="ai i i"\nexport NUM_NODES=${NUM_NODES:-3}\nexport SERVICE_CLUSTER_IP_RANGE=192.168.3.0/24\nexport FLANNEL_NET=172.16.0.0/16\nexport PROXY_SETTING="http_proxy=10.25.30.127:7777 https_proxy=10.25.30.127:7777"\n\n# \u4e0b\u8f7d\u7684\u6587\u4ef6\u4f1a\u5b58\u653e\u4e8e kubernetes/cluster/ubuntu/binaries directory\nKUBERNETES_PROVIDER=ubuntu ./kube-up.sh\n')),Object(c.b)("h2",{id:"tips-1"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8be5 PR ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kubernetes/kubernetes/pull/30360"}),"#30360")," \u6b63\u5728\u5b9e\u73b0\u4e00\u4e2a kubeadm \u547d\u4ee4,\u4f7f\u5f97 Kubernetes \u7684\u96c6\u7fa4\u6784\u5efa\u548c swarm \u4e00\u6837\u7b80\u5355.")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u5f53\u5173\u95ed k8s \u540e,\u5bf9\u5e94\u7684 pods \u4e0d\u4f1a\u88ab umount\ncat /proc/mounts |sed -nre 's#.*?(/var\\S*)\\s.*#\\1#p' | xargs -n 1 umount\n\n# \u5220\u9664 veth \u865a\u62df\u7f51\u5361\nifconfig | sed -nre 's/(veth\\S*)\\s.*/\\1/p' | xargs -n 1 ip link delete\n\n# \u5982\u679c\u4fee\u6539\u4e86 CNI \u7684\u5730\u5740,\u9700\u8981\u5148\u5220\u9664\u539f\u6765\u7684 cni0\nip link delete cni0\n\nkubectl run -it --rm bb --image=busybox --restart=Never\n\n\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u79c1\u6709 IP v4 \u5730\u5740")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"10.0.0.0/8 (255.0.0.0)\n172.16.0.0/12 (255.240.0.0)\n192.168.0.0/16 (255.255.0.0)\n")),Object(c.b)("h3",{id:"\u5e38\u7528-label"},"\u5e38\u7528 Label"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"release",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"stable, canary"))),Object(c.b)("li",{parentName:"ul"},"environment",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"dev, qa, production"))),Object(c.b)("li",{parentName:"ul"},"tier",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"frontend, backend, cache"))),Object(c.b)("li",{parentName:"ul"},"partition",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"customerA, customerB"))),Object(c.b)("li",{parentName:"ul"},"track",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"daily, weekly"))),Object(c.b)("li",{parentName:"ul"},"role",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"master, slave")))),Object(c.b)("h2",{id:"kubectl"},"kubectl"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://kubernetes.io/docs/user-guide/kubectl-overview/"}),"kubectl-overview"))),Object(c.b)("h3",{id:"run"},"run"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# Create and run a particular image, possibly replicated.\n# Creates a deployment or job to manage the created container(s).\n\n# Start a single instance of nginx.\nkubectl run nginx --image=nginx\n\n# Start a single instance of hazelcast and let the container expose port 5701 .\nkubectl run hazelcast --image=hazelcast --port=5701\n\n# Start a single instance of hazelcast and set environment variables "DNS_DOMAIN=cluster" and "POD_NAMESPACE=default" in the container.\nkubectl run hazelcast --image=hazelcast --env="DNS_DOMAIN=cluster" --env="POD_NAMESPACE=default"\n\n# Start a replicated instance of nginx.\nkubectl run nginx --image=nginx --replicas=5\n\n# Dry run. Print the corresponding API objects without creating them.\nkubectl run nginx --image=nginx --dry-run\n\n# Start a single instance of nginx, but overload the spec of the deployment with a partial set of values parsed from JSON.\nkubectl run nginx --image=nginx --overrides=\'{ "apiVersion": "v1", "spec": { ... } }\'\n\n# Start a pod of busybox and keep it in the foreground, don\'t restart it if it exits.\nkubectl run -i -t busybox --image=busybox --restart=Never\n\n# Start the nginx container using the default command, but use custom arguments (arg1 .. argN) for that command.\nkubectl run nginx --image=nginx -- <arg1> <arg2> ... <argN>\n\n# Start the nginx container using a different command and custom arguments.\nkubectl run nginx --image=nginx --command -- <cmd> <arg1> ... <argN>\n\n# Start the perl container to compute \u03c0 to 2000 places and print it out.\nkubectl run pi --image=perl --restart=OnFailure -- perl -Mbignum=bpi -wle \'print bpi(2000)\'\n')),Object(c.b)("h3",{id:"help"},"Help"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'$ kubeadm init -h\nRun this in order to set up the Kubernetes master.\n\nUsage:\n  kubeadm init [flags]\n\nFlags:\n      --api-advertise-addresses value   The IP addresses to advertise, in case autodetection fails (default [])\n      --api-external-dns-names value    The DNS names to advertise, in case you have configured them yourself (default [])\n      --cloud-provider string           Enable cloud provider features (external load-balancers, storage, etc), e.g. "gce"\n      --external-etcd-cafile string     etcd certificate authority certificate file. Note: The path must be in /etc/ssl/certs\n      --external-etcd-certfile string   etcd client certificate file. Note: The path must be in /etc/ssl/certs\n      --external-etcd-endpoints value   etcd endpoints to use, in case you have an external cluster (default [])\n      --external-etcd-keyfile string    etcd client key file. Note: The path must be in /etc/ssl/certs\n      --pod-network-cidr value          Specify range of IP addresses for the pod network; if set, the control plane will automatically allocate CIDRs for every node\n      --service-cidr value              Use alterantive range of IP address for service VIPs, defaults to 100.64.0.0/12 (default 100.64.0.0/12)\n      --service-dns-domain string       Use alternative domain for services, e.g. "myorg.internal" (default "cluster.local")\n      --token string                    Shared secret used to secure cluster bootstrap; if none is provided, one will be generated for you\n      --use-kubernetes-version string   Choose a specific Kubernetes version for the control plane (default "v1.4.0")\n')))}o.isMDXComponent=!0},766:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return n?a.a.createElement(m,b(b({ref:t},l),{},{components:n})):a.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);