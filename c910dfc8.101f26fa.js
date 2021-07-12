(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,d=u["".concat(c,".").concat(s)]||u[s]||m[s]||l;return n?r.a.createElement(d,i(i({ref:t},o),{},{components:n})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},928:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1129)),c={title:"Linux Container",sidebar_title:"LXC",hide_title:!0},i={unversionedId:"devops/container/lxc",id:"devops/container/lxc",isDocsHomePage:!1,title:"Linux Container",description:"Linux Container",source:"@site/notes/devops/container/lxc.md",slug:"/devops/container/lxc",permalink:"/notes/devops/container/lxc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/lxc.md",version:"current",sidebar:"docs",previous:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"},next:{title:"LXD",permalink:"/notes/devops/container/lxd"}},b=[{value:"\u975e\u7279\u6743 LXC \u914d\u7f6e",id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"lxc",id:"lxc",children:[]},{value:"Docker in LXC",id:"docker-in-lxc",children:[]},{value:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"linux-container"},"Linux Container"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"lxc package ",Object(l.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxc&arch=x86_64&repo=main"},"content")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lxc/lxc"},"lxc/lxc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"~/.config/lxc/default.conf")),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"dir - \u9ed8\u8ba4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/var/lib/lxc/container/rootfs"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"~/.local/share/lxc/<name>/rootfs")))),Object(l.b)("li",{parentName:"ul"},"lvm"),Object(l.b)("li",{parentName:"ul"},"loop"),Object(l.b)("li",{parentName:"ul"},"btrfs"),Object(l.b)("li",{parentName:"ul"},"zfs"),Object(l.b)("li",{parentName:"ul"},"rbd"),Object(l.b)("li",{parentName:"ul"},"best"))),Object(l.b)("li",{parentName:"ul"},"man ",Object(l.b)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages//man1/lxc-create.1.html"},"lxc-create.1")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"archlinux ",Object(l.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Linux_Containers"},"lxc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://gist.github.com/hack3d/8a3982329e1df77f380878ff7bbc7b03"},"armhf lxc")))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5 poweroff \u9000\u51fa init"),Object(l.b)("li",{parentName:"ul"},"lxc \u53ef\u4ee5\u5d4c\u5957")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# /usr/share/lxc/templates/lxc-download\n# /lib/security/pam_cgfs.so\napk add lxc shadow-uidmap lxc-bridge lxc-pam lxc-download lxc-templates lxc-templates-oci\n\n# \u542f\u52a8 lxcbr0 - \u9ed8\u8ba4\u7f51\u6bb5\nservice dnsmasq.lxcbr0 start\n\n# \u5df2\u5b89\u88c5 template\nls /usr/share/lxc/templates/\n# \u67e5\u770b\u53c2\u6570\n/usr/share/lxc/templates/lxc-download -h\n\n# https://images.linuxcontainers.org\n# \u4f7f\u7528 tuna \u955c\u50cf\nlxc-create -t download -n alpine-amd64 -- -d alpine -r 3.12 -a amd64 --server mirrors.tuna.tsinghua.edu.cn/lxc-images\n# \u524d\u53f0\u542f\u52a8\n# -d \u540e\u53f0\u542f\u52a8\nlxc-start -n alpine-amd64 -F\n# \u542f\u52a8\u4e00\u4e2a shell\nlxc-attach -n alpine-amd64\n\n# \u67e5\u770b\u8fd0\u884c\u7684\u5bb9\u5668\nlxc-ls --fancy\n# \u505c\u6b62\u5bb9\u5668\nlxc-stop -n alpine-amd64\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"command"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-attach"),Object(l.b)("td",{parentName:"tr",align:null},"start a process inside a running container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-autostart"),Object(l.b)("td",{parentName:"tr",align:null},"start/stop/kill auto-started containers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-cgroup"),Object(l.b)("td",{parentName:"tr",align:null},"manage the control group associated with a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-checkconfig"),Object(l.b)("td",{parentName:"tr",align:null},"check the current kernel for lxc support")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-checkpoint"),Object(l.b)("td",{parentName:"tr",align:null},"checkpoints and restores containers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-config"),Object(l.b)("td",{parentName:"tr",align:null},"query LXC system configuration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-console"),Object(l.b)("td",{parentName:"tr",align:null},"Launch a console for the specified container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-copy"),Object(l.b)("td",{parentName:"tr",align:null},"copy an existing container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-create"),Object(l.b)("td",{parentName:"tr",align:null},"creates a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-destroy"),Object(l.b)("td",{parentName:"tr",align:null},"destroy a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-device"),Object(l.b)("td",{parentName:"tr",align:null},"manage devices of running containers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-execute"),Object(l.b)("td",{parentName:"tr",align:null},"run an application inside a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-freeze"),Object(l.b)("td",{parentName:"tr",align:null},"freeze all the container's processes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-info"),Object(l.b)("td",{parentName:"tr",align:null},"query information about a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-ls"),Object(l.b)("td",{parentName:"tr",align:null},"list the containers existing on the system")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-monitor"),Object(l.b)("td",{parentName:"tr",align:null},"monitor the container state")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-snapshot"),Object(l.b)("td",{parentName:"tr",align:null},"Snapshot an existing container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-start"),Object(l.b)("td",{parentName:"tr",align:null},"run an application inside a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-stop"),Object(l.b)("td",{parentName:"tr",align:null},"stop the application running inside a container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-top"),Object(l.b)("td",{parentName:"tr",align:null},"monitor container statistics")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-unfreeze"),Object(l.b)("td",{parentName:"tr",align:null},"thaw all the container's processes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-unshare"),Object(l.b)("td",{parentName:"tr",align:null},"Run a task in a new set of namespaces")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-update-config"),Object(l.b)("td",{parentName:"tr",align:null},"update a legacy pre LXC 2.1 configuration file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-usernsexec"),Object(l.b)("td",{parentName:"tr",align:null},"Run a task as root in a new user namespace")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lxc-wait"),Object(l.b)("td",{parentName:"tr",align:null},"wait for a specific container state")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"modprobe configs\nlxc-checkconfig\n# \u68c0\u6d4b\u5176\u4ed6 kernel \u914d\u7f6e\nCONFIG=/boot/config-lts /usr/bin/lxc-checkconfig\n\n# \u6240\u6709\u914d\u7f6e\nlxc-config -l\n# \u9ed8\u8ba4\u914d\u7f6e\n# $HOME/.config/lxc/default.conf\nlxc-config lxc.default_config\n# \u8def\u5f84\u4f4d\u7f6e\n# $HOME/.local/share/lxc\nlxc-config lxc.lxcpath\n\nlxc-attach -n container -- /etc/init.d/cron restart\n")),Object(l.b)("h2",{id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e"},"\u975e\u7279\u6743 LXC \u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# sudo usermod -v 100000-200000 -w 100000-200000 $USER\necho "session    optional   pam_cgfs.so -c freezer,memory,name=systemd,unified" >> /etc/pam.d/system-login\n# echo "lxc.idmap = u 0 100000 65536" >> /etc/lxc/default.conf\n# echo "lxc.idmap = g 0 100000 65536" >> /etc/lxc/default.conf\n\necho root:100000:65536 | sudo tee -a /etc/subuid\necho root:100000:65536 | sudo tee -a /etc/subgid\n\nmkdir -p ~/.config/lxc\n\n# \u5305\u542b\u5168\u5c40\u914d\u7f6e\u53ef\u4ee5\u5c11\u914d\u7f6e\u4e00\u4e9b\necho "lxc.include = /etc/lxc/default.conf" > ~/.config/lxc/default.conf\n\necho "lxc.idmap = u 0 100000 65536" > ~/.config/lxc/default.conf\necho "lxc.idmap = g 0 100000 65536" >> ~/.config/lxc/default.conf\necho "lxc.net.0.type = veth" >> ~/.config/lxc/default.conf\necho "lxc.net.0.link = lxcbr0" >> ~/.config/lxc/default.conf\n\necho "$USER veth lxcbr0 2" | sudo tee -a /etc/lxc/lxc-usernet\n')),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.conf.5.html"},"lxc.conf.5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.container.conf.5.html"},"lxc.container.conf.5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages//man5/lxc.system.conf.5.html"},"lxc.system.conf.5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man5/lxc-usernet.5.html"},"lxc-usernet.5"))),Object(l.b)("h2",{id:"lxc"},"lxc"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://linuxcontainers.org/lxc/manpages/man7/lxc.7.html"},"lxc.7"))),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"docker-in-lxc"},"Docker in LXC"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/25885682/1870054"},"https://stackoverflow.com/a/25885682/1870054"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"lxc.apparmor.profile = lxc-container-default-with-nesting\n")),Object(l.b)("h2",{id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"},"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5347\u7ea7\u914d\u7f6e\nlxc-update-config -c ~/.local/share/lxc/alpine-amd64/config\n")))}p.isMDXComponent=!0}}]);