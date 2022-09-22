"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55309],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61944:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={title:"Docker"},m="Docker",k={unversionedId:"devops/docker/README",id:"devops/docker/README",title:"Docker",description:"- Compatibility Matrix",source:"@site/../notes/devops/docker/README.md",sourceDirName:"devops/docker",slug:"/devops/docker/",permalink:"/notes/devops/docker/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/docker/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645984624,formattedLastUpdatedAt:"Feb 27, 2022",frontMatter:{title:"Docker"},sidebar:"docs",previous:{title:"DevOps \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/faq"},next:{title:"Docker \u5e38\u7528\u670d\u52a1",permalink:"/notes/devops/docker/cookbook"}},h={},f=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"SSHD service",id:"sshd-service",level:2},{value:"\u4fee\u6539\u955c\u50cf",id:"\u4fee\u6539\u955c\u50cf",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Tips",id:"tips",level:2},{value:"INCLUDE",id:"include",level:3},{value:"\u4ee3\u7406",id:"\u4ee3\u7406",level:3},{value:"\u65f6\u533a",id:"\u65f6\u533a",level:3},{value:"macOS",id:"macos",level:2},{value:"baseimage",id:"baseimage",level:2},{value:"Refernece",id:"refernece",level:2}],g={toc:f};function N(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"docker"}),"Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://success.docker.com/article/compatibility-matrix"}),"Compatibility Matrix"))),(0,n.kt)("h2",p({},{id:"\u76ee\u5f55\u7ed3\u6784"}),"\u76ee\u5f55\u7ed3\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/var/lib/docker - \u6570\u636e\u76ee\u5f55 - ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/docker/daemon.json")," data-root \u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"image/ - \u955c\u50cf"),(0,n.kt)("li",{parentName:"ul"},"volumes/ - \u4e34\u65f6 volume"),(0,n.kt)("li",{parentName:"ul"},"builder/"),(0,n.kt)("li",{parentName:"ul"},"buildkit/"),(0,n.kt)("li",{parentName:"ul"},"containers/SHA/ - \u5bb9\u5668\u4fe1\u606f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SHA-json.log"),(0,n.kt)("li",{parentName:"ul"},"checkpoints"),(0,n.kt)("li",{parentName:"ul"},"config.v2.json"),(0,n.kt)("li",{parentName:"ul"},"hostconfig.json"),(0,n.kt)("li",{parentName:"ul"},"hostname"),(0,n.kt)("li",{parentName:"ul"},"hosts"),(0,n.kt)("li",{parentName:"ul"},"mounts"),(0,n.kt)("li",{parentName:"ul"},"resolv.conf"),(0,n.kt)("li",{parentName:"ul"},"resolv.conf.hash"))),(0,n.kt)("li",{parentName:"ul"},"network/files/local-kv.db"),(0,n.kt)("li",{parentName:"ul"},"overlay2/SHA/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"committed"),(0,n.kt)("li",{parentName:"ul"},"diff"),(0,n.kt)("li",{parentName:"ul"},"link"),(0,n.kt)("li",{parentName:"ul"},"lower"),(0,n.kt)("li",{parentName:"ul"},"work"))),(0,n.kt)("li",{parentName:"ul"},"trust/"),(0,n.kt)("li",{parentName:"ul"},"plugins/"))),(0,n.kt)("li",{parentName:"ul"},"/var/lib/docker/containerd/daemon - ContainerD \u76ee\u5f55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u6ca1\u6709\u4f7f\u7528 containerd \u5b58\u50a8")))),(0,n.kt)("h2",p({},{id:"sshd-service"}),"SSHD service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dockerfile"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-Dockerfile"}),'FROM java:8\nMAINTAINER Wener <wener@wener.me>\n\nRUN apt-get update && apt-get install -y openssh-server\nRUN mkdir /var/run/sshd\nRUN echo \'root:screencast\' | chpasswd\nRUN sed -i \'s/PermitRootLogin without-password/PermitRootLogin yes/\' /etc/ssh/sshd_config\n\n# SSH login fix. Otherwise user is kicked off after login\nRUN sed \'s@session\\s*required\\s*pam_loginuid.so@session optional pam_loginuid.so@g\' -i /etc/pam.d/sshd\n\nENV NOTVISIBLE "in users profile"\nRUN echo "export VISIBLE=now" >> /etc/profile\n\nEXPOSE 22\nCMD ["/usr/sbin/sshd", "-D"]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker build -t local-sshd .\ndocker run -d -p 2331:22 --name dock-1 local-sshd\n\n# Run a lot\nNUM=5\nVOLUME=~/opt/volume\nfor i in $(seq 1 $NUM); do\n  mkdir -p $VOLUME/dock-$i\n  docker run -d -v $VOLUME/dock-$i:/opt -p 233$i:22 --name dock-$i local-sshd\ndone\n\n# Cleanup\nfor i in $(seq 1 $NUM); do docker stop dock-$i;docker rm dock-$i; done\n\n# Generate ansible inventory\n\n# \u4e0d\u4e00\u6837\u7684\u5de5\u5177,\u83b7\u53d6\u7684 IP \u4e0d\u540c,\u5982\u679c ansible \u4e5f\u662f\u5728 docker \u4e2d,\u5219\u53ef\u7528\u540e\u8005\n# \u4f7f\u7528\u524d\u8005\u53ea\u80fd\u7528\u4e8e SSH, \u4e0d\u80fd\u7528\u4e8e\u5bb9\u5668\u5185\u90e8\u670d\u52a1\u901a\u4fe1\u5730\u5740\n# docker-machine ip default\n# docker inspect --format '{{ .NetworkSettings.IPAddress }}' dock-my\n\nfor i in $(seq 1 $NUM); do\n  echo \"dock-$i ansible_host=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' dock-$i) ansible_port=233$i ansible_user=root ansible_ssh_pass=screencast\";\ndone\n\n\ndocker run --rm -it -v ~:/host williamyeh/ansible:ubuntu14.04-onbuild bash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.docker.com/engine/examples/running_ssh_service/"}),"Dockerizing an SSH daemon service"))),(0,n.kt)("h2",p({},{id:"\u4fee\u6539\u955c\u50cf"}),"\u4fee\u6539\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u6807\u51c6\u914d\u7f6e\u4f4d\u4e8e /etc/sysconfig/docker\n# Boot2docker \u4f4d\u4e8e /var/lib/boot2docker/profile\n# \u914d\u7f6e\u53c2\u6570\u683c\u5f0f\u4e3a --registry-mirror=\u955c\u50cf\u5730\u5740\n# \u57fa\u4e8e https://docs.docker.com/engine/installation/linux/centos/ \u5728 CentOS 7 \u4e0a\u5b89\u88c5\u65f6\n# \u9700\u8981\u4fee\u6539 service \u542f\u52a8\u53c2\u6570 /usr/lib/systemd/system/docker.service\n# \u7136\u540e\u52a0\u8f7d\u914d\u7f6e\u5e76\u91cd\u542f\u670d\u52a1\nsudo systemctl daemon-reload\nsudo service docker restart\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 daocloud \u63d0\u4f9b\u7684\u955c\u50cf\u670d\u52a1 ",(0,n.kt)("a",p({parentName:"li"},{href:"https://www.daocloud.io/mirror"}),"https://www.daocloud.io/mirror")),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5728 Linux \u4e0b\u4fee\u6539\u955c\u50cf\u7684\u811a\u672c curl -sSL ",(0,n.kt)("a",p({parentName:"li"},{href:"https://get.daocloud.io/daotools/set_mirror.sh"}),"https://get.daocloud.io/daotools/set_mirror.sh")," | sh -s \u955c\u50cf\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u5728 /etc/default/docker \u4e2d\u6dfb\u52a0 HTTP_PROXY \u6765\u62c9\u53d6\u955c\u50cf"),(0,n.kt)("li",{parentName:"ul"},"\u963f\u91cc\u955c\u50cf ",(0,n.kt)("a",p({parentName:"li"},{href:"http://mirrors.aliyun.com/"}),"http://mirrors.aliyun.com/")),(0,n.kt)("li",{parentName:"ul"},"\u963f\u91cc\u5bb9\u5668\u7ba1\u7406\u63a5\u53e3\u6709\u52a0\u901f\u670d\u52a1")),(0,n.kt)("h2",p({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://yq.aliyun.com/articles/110806"}),"https://yq.aliyun.com/articles/110806"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5b89\u88c5\ncurl -sSL https://get.docker.com/ | sh\n\n# \u4e8c\u8fdb\u5236\u5b89\u88c5\n# \u5b98\u65b9\u6587\u6863 http://docs.master.dockerproject.org/engine/installation/binaries/\n# init \u811a\u672c https://github.com/docker/docker/tree/master/contrib/init\n\n# \u5b89\u88c5\u6700\u65b0\u6784\u5efa\u7684 dev \u7248\ncurl -LOk https://master.dockerproject.org/linux/amd64/docker-1.13.0-dev.tgz\ntar -xvzf docker-*.tgz\nmv docker/* /usr/bin/\ncurl -LOk https://raw.githubusercontent.com/docker/docker/master/contrib/init/systemd/docker.service\ncurl -LOk https://raw.githubusercontent.com/docker/docker/master/contrib/init/systemd/docker.socket\nmv docker.{service,socket} /lib/systemd/system/\n\nsystemctl daemon-reload\nsystemctl restart docker\n\n# \u5982\u679c\u6709\u65e7\u7684 sysv \u542f\u52a8\u811a\u672c /etc/init.d/docker \u542f\u52a8\u65f6\u53ef\u80fd\u4f1a\u4f7f\u7528\u8be5\u811a\u672c\n")),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"https://www.daocloud.io/mirror"}),"https://www.daocloud.io/mirror")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"http://mirrors.aliyun.com/help/docker-engine"}),"http://mirrors.aliyun.com/help/docker-engine")),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u4ed3\u5e93 ",(0,n.kt)("a",p({parentName:"li"},{href:"https://dev.aliyun.com/search.html"}),"https://dev.aliyun.com/search.html")),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u52a0\u901f\u5668 ",(0,n.kt)("a",p({parentName:"li"},{href:"https://cr.console.aliyun.com/#/accelerator"}),"https://cr.console.aliyun.com/#/accelerator"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u963f\u91cc\u63d0\u4f9b\u7684\u4ed3\u5e93\u8fdb\u884c\u5b89\u88c5\u4f1a\u975e\u5e38\u5feb\ncurl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -\n# \u5b89\u88c5\u5b8c\u6bd5\u540e\u4e3a\u5f53\u524d\u7528\u6237\u6dfb\u52a0\u6743\u9650,\u9700\u8981\u9000\u51fa\u91cd\u65b0\u767b\u5f55\u624d\u80fd\u751f\u6548\nsudo usermod -aG docker $USER\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ubuntu")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apt-get update\napt-get install apt-transport-https ca-certificates\napt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D\n# \u6dfb\u52a0 Docker \u4ed3\u5e93\nnano /etc/apt/sources.list.d/docker.list\n# 14.04 LTS\n# deb https://apt.dockerproject.org/repo ubuntu-trusty main\n# 16.04 LTS\n# deb https://apt.dockerproject.org/repo ubuntu-xenial main\n# \u66f4\u65b0 APT \u5305\u7d22\u5f15\n# \u5728\u56fd\u5185\u53ef\u4f7f\u7528\u963f\u91cc\u955c\u50cf\u4ed3\u5e93 http://mirrors.aliyun.com/docker-engine\napt-get update\n# \u5220\u9664\u65e7\u7684\u5305\napt-get purge lxc-docker\n# \u9a8c\u8bc1 APT \u662f\u4ece\u6b63\u786e\u7684\u4ed3\u5e93\u62c9\u53d6\u7684\napt-cache policy docker-engine\n# \u5b89\u88c5\u57fa\u7840\u5185\u5bb9\napt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual\napt-get install docker-engine\nservice docker start\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.docker.com/engine/installation/linux/ubuntulinux/"}),"Ubuntu Install Docker"))),(0,n.kt)("h2",p({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker machine root \u5bc6\u7801\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"tcuser")),(0,n.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo su root")," \u5207\u6362\u4e3a root"),(0,n.kt)("li",{parentName:"ul"},"Linux \u4e0b\u7684\u914d\u7f6e\u6587\u4ef6 /etc/default/docker")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# stats \u4e2d\u663e\u793a\u5bb9\u5668\u540d\u5b57\ndocker stats $(docker ps --format={{.Names}})\n\n# \u53ef\u901a\u8fc7 JSON \u6587\u4ef6\u6765\u914d\u7f6e docker daemon, \u4f46\u76ee\u524d\u6ca1\u6709\u529e\u6cd5\u68c0\u6d4b\u914d\u7f6e\u662f\u5426\u6210\u529f https://github.com/docker/docker/issues/21559\n# /etc/docker/daemon.json\n\n# Boot2docker\n# \u914d\u7f6e\u6587\u4ef6\nvi /var/lib/boot2docker/profile\n# \u91cd\u542f\u670d\u52a1\n/etc/init.d/docker restart\n\n# \u79fb\u9664\u505c\u6b62\u5bb9\u5668\ndocker rm `docker ps --no-trunc -aq`\n# \u6570\u636e\u6e05\u7406\ndocker images --no-trunc | grep '<none>' | awk '{ print $3 }' | xargs -r docker rmi\ndocker volume ls -qf dangling=true | xargs -r docker volume rm\n\n# \u56de\u6536\u65e7\u6570\u636e\napt-get autoclean\napt-get autoremove\ncd /var/discourse\n./launcher cleanup\n\n# https://github.com/spotify/docker-gc\n# \u53ef\u4ee5\u76f4\u63a5 Docker \u8fd0\u884c\ndocker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v /etc:/etc spotify/docker-gc\n\n# \u4f7f\u7528 Docker Machine \u542f\u52a8\ndocker-machine start default\neval $(docker-machine env default)\ndocker pull java:8\n\n# Docker machine \u53ea\u4f1a\u5c06 home \u4e0b\u7684\u76ee\u5f55\u6302\u8f7d\u5230\u865a\u62df\u673a\u4e2d,\u5982\u679c\u8981\u6302\u8f7d\u5176\u4ed6\u7684\u76ee\u5f55\u9700\u8981\u81ea\u5df1\u6dfb\u52a0\ndocker-machine stop\nVBoxManage sharedfolder add default --name /hetc --hostpath /etc --automount\ndocker-machine start\ndocker-machine ssh default 'sudo mkdir --parents /hetc'\ndocker-machine ssh default 'sudo mount -t vboxsf hetc /hetc'\ndocker run --rm -v /hetc:/hetc ubuntu\n\n\n# \u5c06\u4e00\u4e2a\u5df2\u7ecf\u542f\u52a8\u7684\u5bb9\u5668\u4fee\u6539\u4e3a\u81ea\u52a8\u91cd\u542f\n# https://docs.docker.com/engine/reference/commandline/update/\ndocker update --restart=always web\n\n# \u6e05\u7a7a\u65e5\u5fd7\necho \"\" > $(docker inspect --format='{{.LogPath}}' web)\n")),(0,n.kt)("h3",p({},{id:"include"}),"INCLUDE"),(0,n.kt)("p",null,"\u7531\u4e8e Dockerfile \u4e0d\u652f\u6301 INCLUDE, \u53ef\u4ee5\u8003\u8651\u4f7f\u7528 cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-Makefile"}),"Dockerfile: Dockerfile.in *.docker\n  cpp -o Dockerfile Dockerfile.in\n\nbuild: Dockerfile\n  docker build -rm -t my/image .\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-Dockerfile"}),'FROM ubuntu:latest\nMAINTAINER me\n\n#include "imagemagick.docker"\n#include "redis.docker"\n')),(0,n.kt)("h3",p({},{id:"\u4ee3\u7406"}),"\u4ee3\u7406"),(0,n.kt)("p",null,"Docker \u4f1a\u4f7f\u7528 HTTP_PROXY \u4f5c\u4e3a\u4ee3\u7406,\u4ee3\u7406\u914d\u7f6e\u6210\u529f\u540e\u53ef\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker info")," \u770b\u5230\u4ee3\u7406\u914d\u7f6e"),(0,n.kt)("p",null,"\u4ee3\u7406\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/default/docker"))),(0,n.kt)("p",null,"\u5982\u679c\u4ee3\u7406\u914d\u7f6e\u4e0d\u751f\u6548,\u53ef\u76f4\u63a5\u4fee\u6539 systemd \u5b9a\u4e49\u6587\u4ef6,\u4f8b\u5982\u5728 Ubuntu 16.04 \u4e0b\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"/lib/systemd/system/docker.service"),",\u5728 Service \u8282\u4e0b\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},"Environment=HTTP_PROXY=http://10.0.0.1:7777"),", \u7136\u540e ",(0,n.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")," \u518d\u91cd\u542f docker \u5373\u53ef,\u914d\u7f6e\u53ef\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"systemctl show --property=Environment docker")," \u67e5\u770b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.docker.com/engine/admin/systemd/"}),"Control and configure Docker with systemd"))),(0,n.kt)("h3",p({},{id:"\u65f6\u533a"}),"\u65f6\u533a"),(0,n.kt)("p",null,"\u542f\u52a8\u65f6\u4fee\u6539\u65f6\u533a"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'$ docker run --rm busybox date\nThu Mar 20 04:42:02 UTC 2014\n$ docker run --rm -v /etc/localtime:/etc/localtime  busybox date\nThu Mar 20 14:42:20 EST 2014\n$ FILE=$(mktemp) ; echo $FILE ; echo -e "Europe/Brussels" > $FILE ; docker run --rm -v $FILE:/etc/timezone -v /usr/share/zoneinfo/Europe/Brussels:/etc/localtime busybox date\n/tmp/tmp.JwL2A9c50i\nThu Mar 20 05:42:26 CET 2014\n$ docker run -t -i --rm -e TZ=Europe/London busybox date\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," \u4fee\u6539\u65f6\u533a"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"RUN echo America/New_York | sudo tee /etc/timezone && sudo dpkg-reconfigure --frontend noninteractive tzdata\n")),(0,n.kt)("p",null,"\u4fee\u6539 MySQL \u7684\u65f6\u533a"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u65b9\u6cd5\u4e00 \u4fee\u6539\u5bb9\u5668\u65f6\u533a,\u91cd\u542f mysql\ndocker exec -it MySQL bash\n# \u65f6\u533a\u4fe1\u606f /usr/share/zoneinfo\n# \u76f4\u63a5\u4fee\u6539 echo Asia/Shanghai > /etc/timezone\n# \u83b7\u53d6\u6240\u6709\u65f6\u533a timedatectl list-timezones\n# \u76f4\u63a5\u4fee\u6539\u65f6\u533a timedatectl set-timezone Europe/Athens\n# \u5728\u5bb9\u5668\u91cc\u53ef\u80fd timedatectl \u65e0\u6cd5\u4f7f\u7528\n\n# \u4ea4\u4e92\u5f0f\u9009\u62e9\u65f6\u533a\ndpkg-reconfigure tzdata\n/etc/init.d/mysql restart\n\n# \u65b9\u6cd5\u4e8c SET GLOBAL time_zone = 'Asia/Shanghai';\n# \u65b9\u6cd5\u4e09 my.cnf [mysqld] default-time-zone='Asia/Shanghai'\n")),(0,n.kt)("h2",p({},{id:"macos"}),"macOS"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u8fdb\u5165 docker for mac \u7684\u865a\u62df\u673a\ndocker run -it --privileged --pid=host debian nsenter -t 1 -m -u -n -i sh\n")),(0,n.kt)("h2",p({},{id:"baseimage"}),"baseimage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.docker.com/develop/develop-images/baseimages"}),"https://docs.docker.com/develop/develop-images/baseimages"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"")),(0,n.kt)("h2",p({},{id:"refernece"}),"Refernece"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://master.dockerproject.org/"}),"Docker Master Binaries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"http://docs.master.dockerproject.org/"}),"Docker Master Document")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/shipyard/shipyard"}),"Shipyard")," Composable Docker Management",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7ba1\u7406 Container,Image,Registry,Auth,Node,Log \u7b49"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u7f51\u9875\u7aef\u7684 Console"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301 1.12 Docker Swarm"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/tsuru/tsuru"}),"Tsuru")," is an extensible and open source Platform as a Service software."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/netvarun/docket"}),"Docket")," Custom docker registry that allows for lightning fast deploys through bittorrent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/jfrazelle/dockerfiles"}),"dockerfiles")," Various Dockerfiles"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/kevana/ui-for-docker"}),"ui-for-docker")," An unofficial web interface for Docker, formerly known as DockerUI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/wsargent/docker-cheat-sheet"}),"https://github.com/wsargent/docker-cheat-sheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/veggiemonk/awesome-docker"}),"https://github.com/veggiemonk/awesome-docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/SUSE/Portus"}),"Portus")," Authorization service and frontend for Docker registry (v2)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/manomarks/docker-swarm-visualizer"}),"docker-swarm-visualizer")," A visualizer for Docker Swarm using the Docker Remote API, Node.JS, and D3"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/gliderlabs/logspout"}),"logspout")," Log routing for Docker container logs")))}N.isMDXComponent=!0}}]);