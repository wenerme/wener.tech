/*! For license information please see b09a777e.d2227d55.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65977],{50216:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=r(11527),i=r(47214);const s={title:"Docker FAQ",tags:["FAQ"]},t="Docker FAQ",d={id:"devops/docker/docker-faq",title:"Docker FAQ",description:"- Docker Best Practices",source:"@site/../notes/devops/docker/docker-faq.md",sourceDirName:"devops/docker",slug:"/devops/docker/faq",permalink:"/notes/devops/docker/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/docker/docker-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"Docker FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Dockerfile",permalink:"/notes/devops/docker/dockerfile"},next:{title:"DockerHub",permalink:"/notes/devops/docker/hub"}},l={},c=[{value:"env",id:"env",level:2},{value:"\u5728 docker \u4e2d\u4f7f\u7528 docker",id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker",level:2},{value:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",level:2},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",level:2},{value:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",level:2},{value:"No swap limit support",id:"no-swap-limit-support",level:2},{value:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",level:2},{value:"upper fs does not support RENAME_WHITEOUT",id:"upper-fs-does-not-support-rename_whiteout",level:2},{value:"docker zfs vol",id:"docker-zfs-vol",level:2},{value:"driver &quot;zfs&quot; failed to remove root filesystem",id:"driver-zfs-failed-to-remove-root-filesystem",level:2},{value:"\u6ca1\u6743\u9650",id:"\u6ca1\u6743\u9650",level:2},{value:"bridge-nf-call-iptables",id:"bridge-nf-call-iptables",level:2},{value:"Cannot link to a non running container",id:"cannot-link-to-a-non-running-container",level:2},{value:"docker exporter does not currently support exporting manifest lists",id:"docker-exporter-does-not-currently-support-exporting-manifest-lists",level:2},{value:"could not create a builder instance with TLS data loaded from environment",id:"could-not-create-a-builder-instance-with-tls-data-loaded-from-environment",level:2},{value:"DOCKER_HOST environment variable overrides the active context. To use a context, either set the global --context flag, or unset DOCKER_HOST environment variable.",id:"docker_host-environment-variable-overrides-the-active-context-to-use-a-context-either-set-the-global---context-flag-or-unset-docker_host-environment-variable",level:2},{value:"failed to solve with frontend dockerfile.v0: failed to create LLB definition: unexpected status code [manifests latest]: 403 Forbidden",id:"failed-to-solve-with-frontend-dockerfilev0-failed-to-create-llb-definition-unexpected-status-code-manifests-latest-403-forbidden",level:2},{value:"OpenTelemetry",id:"opentelemetry",level:2},{value:"error from daemon in stream: Error grabbing logs: invalid character &#39;\\x00&#39; looking for beginning of valu",id:"error-from-daemon-in-stream-error-grabbing-logs-invalid-character-x00-looking-for-beginning-of-valu",level:2},{value:"Error running exec in container: failed to open stdout fifo: error creating fifo",id:"error-running-exec-in-container-failed-to-open-stdout-fifo-error-creating-fifo",level:2},{value:"overlayfs: upper fs does not support RENAME_WHITEOUT",id:"overlayfs-upper-fs-does-not-support-rename_whiteout",level:2},{value:"listing workers: failed to list workers: Unavailable: connection closed before server preface received",id:"listing-workers-failed-to-list-workers-unavailable-connection-closed-before-server-preface-received",level:2},{value:"multiple platforms feature is currently not supported for docker driver. Please switch to a different driver",id:"multiple-platforms-feature-is-currently-not-supported-for-docker-driver-please-switch-to-a-different-driver",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"docker-faq",children:"Docker FAQ"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://gist.github.com/StevenACoffman/41fee08e8782b411a4a26b9700ad7af5",children:"Docker Best Practices"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"env",children:"env"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["DOCKER_REGISTRY_URL\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["jenkins ",(0,o.jsx)(n.code,{children:"docker.withRegistry"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"DOCKER_REGISTRY_CREDENTIALS_ID"}),"\n",(0,o.jsx)(n.li,{children:"DOCKER_CONFIG=~/.docker"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/cli/#environment-variables",children:"https://docs.docker.com/engine/reference/commandline/cli/#environment-variables"})}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"volume-bind-\u6587\u4ef6\u4e0d\u4f1a\u66f4\u65b0",children:"volume bind \u6587\u4ef6\u4e0d\u4f1a\u66f4\u65b0"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5c1d\u8bd5 bind \u76ee\u5f55\uff0c\u4e0d\u8981 bind \u6587\u4ef6"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker",children:"\u5728 docker \u4e2d\u4f7f\u7528 docker"}),"\n",(0,o.jsx)(n.p,{children:"\u76f4\u63a5\u6620\u5c04 /var/run/docker.sock"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock --name box wener/demo:test\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",children:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4e00\u822c\u6765\u8bf4\u6dfb\u52a0 CAP_NET_BIND_SERVICE \u5373\u53ef\uff0c\u4f46\u662f\u5bf9\u975e root \u65e0\u6548"}),"\n",(0,o.jsxs)(n.li,{children:["\u8bbe\u7f6e sysctl ",(0,o.jsx)(n.code,{children:"net.ipv4.ip_unprivileged_port_start=0"})," \u5373\u53ef\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u9700\u8981 kernel 4.11+"}),"\n",(0,o.jsx)(n.li,{children:"ubuntu 18+"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",children:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker stop $(docker ps -aq)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",children:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"/var/lib/docker \u5bf9 docker \u6027\u80fd\u5f71\u54cd\u8f83\u5927"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# \u505c\u6b62\u670d\u52a1\u8fc1\u79fb\u6570\u636e\nservice docker stop\nmkdir -p /data/docker\nsudo rsync -aP /var/lib/docker/ /data/docker/\n\n# \u6dfb\u52a0 data-root \u914d\u7f6e\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\n\n# \u542f\u52a8\nservice docker start\n# \u67e5\u770b\u65b0\u7684\u914d\u7f6e\ndocker info | grep \'Root Dir\'\n\n# \u786e\u8ba4\u65e7\u7684\u76ee\u5f55\u6ca1\u6709\u88ab\u4f7f\u7528\napk add lsof\nlsof +D /var/lib/docker\n'})}),"\n",(0,o.jsx)(n.h2,{id:"no-swap-limit-support",children:"No swap limit support"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u6dfb\u52a0\u5185\u6838\u53c2\u6570 ",(0,o.jsx)(n.code,{children:"cgroup_enable=memory swapaccount=1"})]}),"\n",(0,o.jsx)(n.li,{children:"\u727a\u7272 1% \u7684\u5185\u5bb9\uff0c10% \u6027\u80fd\u6765\u652f\u6301\u5185\u5b58\u548c\u4ea4\u6362\u533a\u5ba1\u8ba1"}),"\n",(0,o.jsxs)(n.li,{children:["\u4e00\u822c ",(0,o.jsx)(n.code,{children:"cgroup_enable=memory"})," \u4f1a\u5f00\u542f\uff0c\u4f46 ",(0,o.jsx)(n.code,{children:"swapaccount"})," \u4e0d\u5f00"]}),"\n",(0,o.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/config/containers/resource_constraints/",children:"Runtime options with Memory, CPUs, and GPUs"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/#your-kernel-does-not-support-cgroup-swap-limit-capabilities",children:"Your kernel does not support cgroup swap limit capabilities"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",children:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"HOSTPORT=80\nCONTAINERIP=172.16.0.2\n\niptables -t nat -A DOCKER -p tcp --dport ${HOSTPORT} -j DNAT --to-destination ${CONTAINERIP}:${HOSTPORT}\niptables -t nat -A POSTROUTING -j MASQUERADE -p tcp --source ${CONTAINERIP} --destination ${CONTAINERIP} --dport ${HOSTPORT}\niptables -A DOCKER -j ACCEPT -p tcp --destination ${CONTAINERIP} --dport ${HOSTPORT}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"upper-fs-does-not-support-rename_whiteout",children:"upper fs does not support RENAME_WHITEOUT"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"zfs \u65e0\u6cd5\u8fd0\u884c docker overlay"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/openzfs/zfs/issues/8648",children:"openzfs/zfs#8648"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"docker-zfs-vol",children:"docker zfs vol"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"docker \u652f\u6301 zfs driver"}),"\n",(0,o.jsxs)(n.li,{children:["\u4f46\u662f\u6709\u4e9b\u95ee\u9898\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/moby/moby/issues/41055",children:"moby/moby#41055"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"\u5b9e\u5728\u9700\u8981\u53ef\u4ee5\u8003\u8651 zvol"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'mkdir -p /data/docker\n# -s sparse volume \u4e0d\u4fdd\u7559\u7a7a\u95f4\nzfs create -s -V 100GB main/docker-vol\nmkfs.ext4 /dev/zvol/main/docker-vol\nmount /dev/zvol/main/docker-vol /data/docker\n# \u6301\u4e45\u5316 mount\ntail -1 /proc/mounts | sudo tee -a /etc/fstab\n\n# \u505c\u670d\u52a1\u8fc1\u79fb\nservice docker stop\nsudo rsync -aP /var/lib/docker/ /data/docker/\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\nservice docker start\n\n# \u67e5\u770b\u65b0\u7684\u914d\u7f6e\ndocker info | grep \'Root Dir\'\n\n# \u786e\u8ba4\u65e7\u7684\u76ee\u5f55\u6ca1\u6709\u88ab\u4f7f\u7528\napk add lsof\nlsof +D /var/lib/docker\n'})}),"\n",(0,o.jsx)(n.h2,{id:"driver-zfs-failed-to-remove-root-filesystem",children:'driver "zfs" failed to remove root filesystem'}),"\n",(0,o.jsxs)(n.p,{children:["\u4e00\u8fb9\u9000\u51fa\uff0c\u53e6\u5916\u4e00\u8fb9\u8fd8\u5728\u64cd\u4f5c\u65f6\u53ef\u80fd\u51fa\u73b0\uff0c\u4e4b\u540e\u518d\u6267\u884c ",(0,o.jsx)(n.code,{children:"docker rm"})," \u5373\u53ef\u3002"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c ",(0,o.jsx)(n.code,{children:"docker rm"})," \u8fd8\u51fa\u73b0\u5f02\u5e38"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Error response from daemon: container 2736566eac14027e7bf708c2babe894f1978249fc4a674886e158d6aa886479a: driver "zfs" failed to remove root filesystem: exit status 1: "/usr/sbin/zfs fs destroy -r main/docker/9d56a9bde13e6a1d37c6af5a55057cc4a9fb8b684ff454ac25f415b70bc55d0d" => cannot open \'main/docker/9d56a9bde13e6a1d37c6af5a55057cc4a9fb8b684ff454ac25f415b70bc55d0d\': dataset does not exist\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u5219\u53ef\u4ee5\u5148\u521b\u5efa\u518d\u6267\u884c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"zfs create main/docker/9d56a9bde13e6a1d37c6af5a55057cc4a9fb8b684ff454ac25f415b70bc55d0d\ndocker rm container\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u6ca1\u6743\u9650",children:"\u6ca1\u6743\u9650"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo adduser $USER docker\n"})}),"\n",(0,o.jsx)(n.h2,{id:"bridge-nf-call-iptables",children:"bridge-nf-call-iptables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/sysctl.d/99-br_netfilter.conf"',children:"net.bridge.bridge-nf-call-iptables=1\nnet.bridge.bridge-nf-call-ip6tables=1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo sysctl -p /etc/sysctl.d/99-br_netfilter.conf\n"})}),"\n",(0,o.jsx)(n.h2,{id:"cannot-link-to-a-non-running-container",children:"Cannot link to a non running container"}),"\n",(0,o.jsx)(n.h2,{id:"docker-exporter-does-not-currently-support-exporting-manifest-lists",children:"docker exporter does not currently support exporting manifest lists"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u53ea\u80fd --push ",(0,o.jsx)(n.a,{href:"https://github.com/docker/buildx/issues/59",children:"docker/buildx#59"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"could-not-create-a-builder-instance-with-tls-data-loaded-from-environment",children:"could not create a builder instance with TLS data loaded from environment"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u53ea\u8981\u4e0d\u662f\u9ed8\u8ba4\u7684\u5c31\u884c\ndocker context create tls\ndocker buildx create --name multiarch-builder --driver docker-container --use tls\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/docker/buildx/issues/413",children:"https://github.com/docker/buildx/issues/413"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"docker_host-environment-variable-overrides-the-active-context-to-use-a-context-either-set-the-global---context-flag-or-unset-docker_host-environment-variable",children:"DOCKER_HOST environment variable overrides the active context. To use a context, either set the global --context flag, or unset DOCKER_HOST environment variable."}),"\n",(0,o.jsx)(n.h2,{id:"failed-to-solve-with-frontend-dockerfilev0-failed-to-create-llb-definition-unexpected-status-code-manifests-latest-403-forbidden",children:"failed to solve with frontend dockerfile.v0: failed to create LLB definition: unexpected status code [manifests latest]: 403 Forbidden"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export DOCKER_BUILDKIT=0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"opentelemetry",children:"OpenTelemetry"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"io.containerd.tracing.processor.v1.otlp"}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"docker_host-\u683c\u5f0f",children:"DOCKER_HOST \u683c\u5f0f"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["DOCKER_HOST\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"tcp://1.2.3.4:2375"}),"\n",(0,o.jsx)(n.li,{children:"unix:///var/run/docker.sock"}),"\n",(0,o.jsxs)(n.li,{children:["npipe:///./pipe/docker_engine\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Named Pipe"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"fd://1.2.3.4:5678"}),"\n",(0,o.jsx)(n.li,{children:"ssh://1.2.3.4:22"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"//host:port"})," -> ",(0,o.jsx)(n.code,{children:"tpc://"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"error-from-daemon-in-stream-error-grabbing-logs-invalid-character-x00-looking-for-beginning-of-valu",children:"error from daemon in stream: Error grabbing logs: invalid character '\\x00' looking for beginning of valu"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"for cont in $(docker container ps | cut -f1 -d\\  | grep -v CONTAINER); do\n  sudo truncate -s0 $(docker container inspect --format='{{.LogPath}}' $cont)\ndone\n\nsudo sh -c \"grep -Pa '\\x00' /var/lib/docker/containers/**/*json.log\"\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/docker/for-linux/issues/140",children:"https://github.com/docker/for-linux/issues/140"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"error-running-exec-in-container-failed-to-open-stdout-fifo-error-creating-fifo",children:"Error running exec in container: failed to open stdout fifo: error creating fifo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Error running exec XXX in container: failed to open stdin fifo: error creating fifo /var/run/docker/containerd/XXX/XXX-stdin: no such file or directory\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/docker/for-linux/issues/1091",children:"https://github.com/docker/for-linux/issues/1091"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"overlayfs-upper-fs-does-not-support-rename_whiteout",children:"overlayfs: upper fs does not support RENAME_WHITEOUT"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4fee\u6539 /var/lib/docker \u6302\u5728\u4f4d\u7f6e"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"listing-workers-failed-to-list-workers-unavailable-connection-closed-before-server-preface-received",children:"listing workers: failed to list workers: Unavailable: connection closed before server preface received"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker buildx ls\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u91cd\u542f dind \u540e\u6062\u590d"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"multiple-platforms-feature-is-currently-not-supported-for-docker-driver-please-switch-to-a-different-driver",children:"multiple platforms feature is currently not supported for docker driver. Please switch to a different driver"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'multiple platforms feature is currently not supported for docker driver. Please switch to a different driver (eg. "docker buildx create --use")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker buildx create --name multiarch-builder --driver docker-container\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var o=r(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var o,s={},c=null,a=null;for(o in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var o=r(50959);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);