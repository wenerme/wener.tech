"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26848],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=o,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33219:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c=["components"],i={title:"Docker FAQ"},l=void 0,p={unversionedId:"devops/docker/docker-faq",id:"devops/docker/docker-faq",isDocsHomePage:!1,title:"Docker FAQ",description:"\u5728 docker \u4e2d\u4f7f\u7528 docker",source:"@site/notes/devops/docker/docker-faq.md",sourceDirName:"devops/docker",slug:"/devops/docker/docker-faq",permalink:"/notes/devops/docker/docker-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-faq.md",version:"current",frontMatter:{title:"Docker FAQ"},sidebar:"docs",previous:{title:"Docker \u5e38\u7528\u670d\u52a1",permalink:"/notes/devops/docker/docker-cookbook"},next:{title:"Docker \u7f51\u7edc",permalink:"/notes/devops/docker/docker-network"}},s=[{value:"\u5728 docker \u4e2d\u4f7f\u7528 docker",id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker",children:[]},{value:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",children:[]},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",children:[]},{value:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",children:[]},{value:"No swap limit support",id:"no-swap-limit-support",children:[]},{value:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",children:[]},{value:"upper fs does not support RENAME_WHITEOUT",id:"upper-fs-does-not-support-rename_whiteout",children:[]},{value:"docker zfs",id:"docker-zfs",children:[]}],d={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker"},"\u5728 docker \u4e2d\u4f7f\u7528 docker"),(0,a.kt)("p",null,"\u76f4\u63a5\u6620\u5c04 /var/run/docker.sock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock --name box wener/demo:test\n")),(0,a.kt)("h2",{id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"},"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bf4\u6dfb\u52a0 CAP_NET_BIND_SERVICE \u5373\u53ef\uff0c\u4f46\u662f\u5bf9\u975e root \u65e0\u6548"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e sysctl ",(0,a.kt)("inlineCode",{parentName:"li"},"net.ipv4.ip_unprivileged_port_start=0")," \u5373\u53ef",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981 kernel 4.11+"),(0,a.kt)("li",{parentName:"ul"},"ubuntu 18+")))),(0,a.kt)("h2",{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"},"\u505c\u6b62\u6240\u6709\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop $(docker ps -aq)\n")),(0,a.kt)("h2",{id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"},"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/var/lib/docker \u5bf9 docker \u6027\u80fd\u5f71\u54cd\u8f83\u5927")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u505c\u6b62\u670d\u52a1\u8fc1\u79fb\u6570\u636e\nservice docker stop\nmkdir -p /data/docker\nsudo rsync -aP /var/lib/docker/ /data/docker/\n\n# \u6dfb\u52a0 data-root \u914d\u7f6e\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\n\n# \u542f\u52a8\nservice docker start\n# \u67e5\u770b\u65b0\u7684\u914d\u7f6e\ndocker info | grep \'Root Dir\'\n')),(0,a.kt)("h2",{id:"no-swap-limit-support"},"No swap limit support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5185\u6838\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"cgroup_enable=memory swapaccount=1")),(0,a.kt)("li",{parentName:"ul"},"\u727a\u7272 1% \u7684\u5185\u5bb9\uff0c10% \u6027\u80fd\u6765\u652f\u6301\u5185\u5b58\u548c\u4ea4\u6362\u533a\u5ba1\u8ba1"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c ",(0,a.kt)("inlineCode",{parentName:"li"},"cgroup_enable=memory")," \u4f1a\u5f00\u542f\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"li"},"swapaccount")," \u4e0d\u5f00"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/containers/resource_constraints/"},"Runtime options with Memory, CPUs, and GPUs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#your-kernel-does-not-support-cgroup-swap-limit-capabilities"},"Your kernel does not support cgroup swap limit capabilities"))))),(0,a.kt)("h2",{id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"},"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HOSTPORT=80\nCONTAINERIP=172.16.0.2\n\niptables -t nat -A DOCKER -p tcp --dport ${HOSTPORT} -j DNAT --to-destination ${CONTAINERIP}:${HOSTPORT}\niptables -t nat -A POSTROUTING -j MASQUERADE -p tcp --source ${CONTAINERIP} --destination ${CONTAINERIP} --dport ${HOSTPORT}\niptables -A DOCKER -j ACCEPT -p tcp --destination ${CONTAINERIP} --dport ${HOSTPORT}\n")),(0,a.kt)("h2",{id:"upper-fs-does-not-support-rename_whiteout"},"upper fs does not support RENAME_WHITEOUT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zfs \u65e0\u6cd5\u8fd0\u884c docker overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openzfs/zfs/issues/8648"},"openzfs/zfs#8648"))),(0,a.kt)("h2",{id:"docker-zfs"},"docker zfs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker \u652f\u6301 zfs driver"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u662f\u6709\u4e9b\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/moby/moby/issues/41055"},"moby/moby#41055")))),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5728\u9700\u8981\u53ef\u4ee5\u8003\u8651 zvol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir -p /data/docker\n# -s sparse volume \u4e0d\u4fdd\u7559\u7a7a\u95f4\nzfs create -s -V 100GB main/docker-vol\nmkfs.ext4 /dev/zvol/tmain/docker-vol\nmount /dev/zvol/main/docker-vol /data/docker\n\n# \u505c\u670d\u52a1\u8fc1\u79fb\nservice docker stop\nsudo rsync -aP /var/lib/docker/ /data/docker/\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\nservice docker start\n')))}u.isMDXComponent=!0}}]);