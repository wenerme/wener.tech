"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26848],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=o,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5649:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),l=["components"],i={title:"Docker FAQ",tags:["FAQ"]},c=void 0,s={unversionedId:"devops/docker/docker-faq",id:"devops/docker/docker-faq",title:"Docker FAQ",description:"- Docker Best Practices",source:"@site/notes/devops/docker/docker-faq.md",sourceDirName:"devops/docker",slug:"/devops/docker/docker-faq",permalink:"/notes/devops/docker/docker-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Docker FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Docker \u5e38\u7528\u670d\u52a1",permalink:"/notes/devops/docker/docker-cookbook"},next:{title:"Docker \u7f51\u7edc",permalink:"/notes/devops/docker/docker-network"}},d={},p=[{value:"\u5728 docker \u4e2d\u4f7f\u7528 docker",id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker",level:2},{value:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",level:2},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",level:2},{value:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",level:2},{value:"No swap limit support",id:"no-swap-limit-support",level:2},{value:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",level:2},{value:"upper fs does not support RENAME_WHITEOUT",id:"upper-fs-does-not-support-rename_whiteout",level:2},{value:"docker zfs vol",id:"docker-zfs-vol",level:2},{value:"driver &quot;zfs&quot; failed to remove root filesystem",id:"driver-zfs-failed-to-remove-root-filesystem",level:2},{value:"\u6ca1\u6743\u9650",id:"\u6ca1\u6743\u9650",level:2}],u={toc:p};function k(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/StevenACoffman/41fee08e8782b411a4a26b9700ad7af5"},"Docker Best Practices"))),(0,a.kt)("h1",{id:"volume-bind-\u6587\u4ef6\u4e0d\u4f1a\u66f4\u65b0"},"volume bind \u6587\u4ef6\u4e0d\u4f1a\u66f4\u65b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5 bind \u76ee\u5f55\uff0c\u4e0d\u8981 bind \u6587\u4ef6")),(0,a.kt)("h2",{id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker"},"\u5728 docker \u4e2d\u4f7f\u7528 docker"),(0,a.kt)("p",null,"\u76f4\u63a5\u6620\u5c04 /var/run/docker.sock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock --name box wener/demo:test\n")),(0,a.kt)("h2",{id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"},"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bf4\u6dfb\u52a0 CAP_NET_BIND_SERVICE \u5373\u53ef\uff0c\u4f46\u662f\u5bf9\u975e root \u65e0\u6548"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e sysctl ",(0,a.kt)("inlineCode",{parentName:"li"},"net.ipv4.ip_unprivileged_port_start=0")," \u5373\u53ef",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981 kernel 4.11+"),(0,a.kt)("li",{parentName:"ul"},"ubuntu 18+")))),(0,a.kt)("h2",{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"},"\u505c\u6b62\u6240\u6709\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop $(docker ps -aq)\n")),(0,a.kt)("h2",{id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"},"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/var/lib/docker \u5bf9 docker \u6027\u80fd\u5f71\u54cd\u8f83\u5927")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u505c\u6b62\u670d\u52a1\u8fc1\u79fb\u6570\u636e\nservice docker stop\nmkdir -p /data/docker\nsudo rsync -aP /var/lib/docker/ /data/docker/\n\n# \u6dfb\u52a0 data-root \u914d\u7f6e\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\n\n# \u542f\u52a8\nservice docker start\n# \u67e5\u770b\u65b0\u7684\u914d\u7f6e\ndocker info | grep \'Root Dir\'\n')),(0,a.kt)("h2",{id:"no-swap-limit-support"},"No swap limit support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5185\u6838\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"cgroup_enable=memory swapaccount=1")),(0,a.kt)("li",{parentName:"ul"},"\u727a\u7272 1% \u7684\u5185\u5bb9\uff0c10% \u6027\u80fd\u6765\u652f\u6301\u5185\u5b58\u548c\u4ea4\u6362\u533a\u5ba1\u8ba1"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c ",(0,a.kt)("inlineCode",{parentName:"li"},"cgroup_enable=memory")," \u4f1a\u5f00\u542f\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"li"},"swapaccount")," \u4e0d\u5f00"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/containers/resource_constraints/"},"Runtime options with Memory, CPUs, and GPUs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#your-kernel-does-not-support-cgroup-swap-limit-capabilities"},"Your kernel does not support cgroup swap limit capabilities"))))),(0,a.kt)("h2",{id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"},"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HOSTPORT=80\nCONTAINERIP=172.16.0.2\n\niptables -t nat -A DOCKER -p tcp --dport ${HOSTPORT} -j DNAT --to-destination ${CONTAINERIP}:${HOSTPORT}\niptables -t nat -A POSTROUTING -j MASQUERADE -p tcp --source ${CONTAINERIP} --destination ${CONTAINERIP} --dport ${HOSTPORT}\niptables -A DOCKER -j ACCEPT -p tcp --destination ${CONTAINERIP} --dport ${HOSTPORT}\n")),(0,a.kt)("h2",{id:"upper-fs-does-not-support-rename_whiteout"},"upper fs does not support RENAME_WHITEOUT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zfs \u65e0\u6cd5\u8fd0\u884c docker overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openzfs/zfs/issues/8648"},"openzfs/zfs#8648"))),(0,a.kt)("h2",{id:"docker-zfs-vol"},"docker zfs vol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker \u652f\u6301 zfs driver"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u662f\u6709\u4e9b\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/moby/moby/issues/41055"},"moby/moby#41055")))),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u5728\u9700\u8981\u53ef\u4ee5\u8003\u8651 zvol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir -p /data/docker\n# -s sparse volume \u4e0d\u4fdd\u7559\u7a7a\u95f4\nzfs create -s -V 100GB main/docker-vol\nmkfs.ext4 /dev/zvol/tmain/docker-vol\nmount /dev/zvol/main/docker-vol /data/docker\n# \u6301\u4e45\u5316 mount\ntail -1 /proc/mounts | sudo tee -a /etc/fstab\n\n# \u505c\u670d\u52a1\u8fc1\u79fb\nservice docker stop\nsudo rsync -aP /var/lib/docker/ /data/docker/\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\nservice docker start\n')),(0,a.kt)("h2",{id:"driver-zfs-failed-to-remove-root-filesystem"},'driver "zfs" failed to remove root filesystem'),(0,a.kt)("p",null,"\u4e00\u8fb9\u9000\u51fa\uff0c\u53e6\u5916\u4e00\u8fb9\u8fd8\u5728\u64cd\u4f5c\u65f6\u53ef\u80fd\u51fa\u73b0\uff0c\u4e4b\u540e\u518d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker rm")," \u5373\u53ef\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker rm")," \u8fd8\u51fa\u73b0\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Error response from daemon: container 2736566eac14027e7bf708c2babe894f1978249fc4a674886e158d6aa886479a: driver "zfs" failed to remove root filesystem: exit status 1: "/usr/sbin/zfs fs destroy -r main/docker/9d56a9bde13e6a1d37c6af5a55057cc4a9fb8b684ff454ac25f415b70bc55d0d" => cannot open \'main/docker/9d56a9bde13e6a1d37c6af5a55057cc4a9fb8b684ff454ac25f415b70bc55d0d\': dataset does not exist\n')),(0,a.kt)("p",null,"\u5219\u53ef\u4ee5\u5148\u521b\u5efa\u518d\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zfs create main/docker/9d56a9bde13e6a1d37c6af5a55057cc4a9fb8b684ff454ac25f415b70bc55d0d\ndocker rm container\n")),(0,a.kt)("h2",{id:"\u6ca1\u6743\u9650"},"\u6ca1\u6743\u9650"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser $USER docker\n")))}k.isMDXComponent=!0}}]);