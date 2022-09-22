"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60199],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(k,c(c({ref:e},u),{},{components:n})):a.createElement(k,c({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37362:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),c=["components"],i={title:"Linux Container",sidebar_title:"LXC",hide_title:!0},o="Linux Container",p={unversionedId:"devops/container/lxc",id:"devops/container/lxc",title:"Linux Container",description:"- lxc package content",source:"@site/../notes/devops/container/lxc.md",sourceDirName:"devops/container",slug:"/devops/container/lxc",permalink:"/notes/devops/container/lxc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/container/lxc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Linux Container",sidebar_title:"LXC",hide_title:!0},sidebar:"docs",previous:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"},next:{title:"LXD",permalink:"/notes/devops/container/lxd"}},u={},m=[{value:"\u975e\u7279\u6743 LXC \u914d\u7f6e",id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"lxc",id:"lxc",level:2},{value:"Docker in LXC",id:"docker-in-lxc",level:2},{value:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",level:2}],s={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,c);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"linux-container"},"Linux Container"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"lxc package ",(0,l.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxc&arch=x86_64&repo=main"},"content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lxc/lxc"},"lxc/lxc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.config/lxc/default.conf")),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dir - \u9ed8\u8ba4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/var/lib/lxc/container/rootfs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.local/share/lxc/<name>/rootfs")))),(0,l.kt)("li",{parentName:"ul"},"lvm"),(0,l.kt)("li",{parentName:"ul"},"loop"),(0,l.kt)("li",{parentName:"ul"},"btrfs"),(0,l.kt)("li",{parentName:"ul"},"zfs"),(0,l.kt)("li",{parentName:"ul"},"rbd"),(0,l.kt)("li",{parentName:"ul"},"best"))),(0,l.kt)("li",{parentName:"ul"},"man ",(0,l.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages//man1/lxc-create.1.html"},"lxc-create.1")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"archlinux ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Linux_Containers"},"lxc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/hack3d/8a3982329e1df77f380878ff7bbc7b03"},"armhf lxc"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 poweroff \u9000\u51fa init"),(0,l.kt)("li",{parentName:"ul"},"lxc \u53ef\u4ee5\u5d4c\u5957"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# /usr/share/lxc/templates/lxc-download\n# /lib/security/pam_cgfs.so\napk add lxc shadow-uidmap lxc-bridge lxc-pam lxc-download lxc-templates lxc-templates-oci\n\n# \u542f\u52a8 lxcbr0 - \u9ed8\u8ba4\u7f51\u6bb5\nservice dnsmasq.lxcbr0 start\n\n# \u5df2\u5b89\u88c5 template\nls /usr/share/lxc/templates/\n# \u67e5\u770b\u53c2\u6570\n/usr/share/lxc/templates/lxc-download -h\n\n# https://images.linuxcontainers.org\n# \u4f7f\u7528 tuna \u955c\u50cf\nlxc-create -t download -n alpine-amd64 -- -d alpine -r 3.12 -a amd64 --server mirrors.tuna.tsinghua.edu.cn/lxc-images\n# \u524d\u53f0\u542f\u52a8\n# -d \u540e\u53f0\u542f\u52a8\nlxc-start -n alpine-amd64 -F\n# \u542f\u52a8\u4e00\u4e2a shell\nlxc-attach -n alpine-amd64\n\n# \u67e5\u770b\u8fd0\u884c\u7684\u5bb9\u5668\nlxc-ls --fancy\n# \u505c\u6b62\u5bb9\u5668\nlxc-stop -n alpine-amd64\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"command"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-attach"),(0,l.kt)("td",{parentName:"tr",align:null},"start a process inside a running container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-autostart"),(0,l.kt)("td",{parentName:"tr",align:null},"start/stop/kill auto-started containers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-cgroup"),(0,l.kt)("td",{parentName:"tr",align:null},"manage the control group associated with a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-checkconfig"),(0,l.kt)("td",{parentName:"tr",align:null},"check the current kernel for lxc support")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-checkpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"checkpoints and restores containers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-config"),(0,l.kt)("td",{parentName:"tr",align:null},"query LXC system configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-console"),(0,l.kt)("td",{parentName:"tr",align:null},"Launch a console for the specified container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-copy"),(0,l.kt)("td",{parentName:"tr",align:null},"copy an existing container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-create"),(0,l.kt)("td",{parentName:"tr",align:null},"creates a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-destroy"),(0,l.kt)("td",{parentName:"tr",align:null},"destroy a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-device"),(0,l.kt)("td",{parentName:"tr",align:null},"manage devices of running containers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-execute"),(0,l.kt)("td",{parentName:"tr",align:null},"run an application inside a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-freeze"),(0,l.kt)("td",{parentName:"tr",align:null},"freeze all the container's processes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-info"),(0,l.kt)("td",{parentName:"tr",align:null},"query information about a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-ls"),(0,l.kt)("td",{parentName:"tr",align:null},"list the containers existing on the system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-monitor"),(0,l.kt)("td",{parentName:"tr",align:null},"monitor the container state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-snapshot"),(0,l.kt)("td",{parentName:"tr",align:null},"Snapshot an existing container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-start"),(0,l.kt)("td",{parentName:"tr",align:null},"run an application inside a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-stop"),(0,l.kt)("td",{parentName:"tr",align:null},"stop the application running inside a container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-top"),(0,l.kt)("td",{parentName:"tr",align:null},"monitor container statistics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-unfreeze"),(0,l.kt)("td",{parentName:"tr",align:null},"thaw all the container's processes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-unshare"),(0,l.kt)("td",{parentName:"tr",align:null},"Run a task in a new set of namespaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-update-config"),(0,l.kt)("td",{parentName:"tr",align:null},"update a legacy pre LXC 2.1 configuration file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-usernsexec"),(0,l.kt)("td",{parentName:"tr",align:null},"Run a task as root in a new user namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lxc-wait"),(0,l.kt)("td",{parentName:"tr",align:null},"wait for a specific container state")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe configs\nlxc-checkconfig\n# \u68c0\u6d4b\u5176\u4ed6 kernel \u914d\u7f6e\nCONFIG=/boot/config-lts /usr/bin/lxc-checkconfig\n\n# \u6240\u6709\u914d\u7f6e\nlxc-config -l\n# \u9ed8\u8ba4\u914d\u7f6e\n# $HOME/.config/lxc/default.conf\nlxc-config lxc.default_config\n# \u8def\u5f84\u4f4d\u7f6e\n# $HOME/.local/share/lxc\nlxc-config lxc.lxcpath\n\nlxc-attach -n container -- /etc/init.d/cron restart\n")),(0,l.kt)("h2",{id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e"},"\u975e\u7279\u6743 LXC \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# sudo usermod -v 100000-200000 -w 100000-200000 $USER\necho "session    optional   pam_cgfs.so -c freezer,memory,name=systemd,unified" >> /etc/pam.d/system-login\n# echo "lxc.idmap = u 0 100000 65536" >> /etc/lxc/default.conf\n# echo "lxc.idmap = g 0 100000 65536" >> /etc/lxc/default.conf\n\necho root:100000:65536 | sudo tee -a /etc/subuid\necho root:100000:65536 | sudo tee -a /etc/subgid\n\nmkdir -p ~/.config/lxc\n\n# \u5305\u542b\u5168\u5c40\u914d\u7f6e\u53ef\u4ee5\u5c11\u914d\u7f6e\u4e00\u4e9b\necho "lxc.include = /etc/lxc/default.conf" > ~/.config/lxc/default.conf\n\necho "lxc.idmap = u 0 100000 65536" > ~/.config/lxc/default.conf\necho "lxc.idmap = g 0 100000 65536" >> ~/.config/lxc/default.conf\necho "lxc.net.0.type = veth" >> ~/.config/lxc/default.conf\necho "lxc.net.0.link = lxcbr0" >> ~/.config/lxc/default.conf\n\necho "$USER veth lxcbr0 2" | sudo tee -a /etc/lxc/lxc-usernet\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.conf.5.html"},"lxc.conf.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.container.conf.5.html"},"lxc.container.conf.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages//man5/lxc.system.conf.5.html"},"lxc.system.conf.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man5/lxc-usernet.5.html"},"lxc-usernet.5"))),(0,l.kt)("h2",{id:"lxc"},"lxc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man7/lxc.7.html"},"lxc.7"))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"docker-in-lxc"},"Docker in LXC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/25885682/1870054"},"https://stackoverflow.com/a/25885682/1870054"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"lxc.apparmor.profile = lxc-container-default-with-nesting\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"},"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5347\u7ea7\u914d\u7f6e\nlxc-update-config -c ~/.local/share/lxc/alpine-amd64/config\n")))}d.isMDXComponent=!0}}]);