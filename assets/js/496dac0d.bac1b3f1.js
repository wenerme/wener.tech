/*! For license information please see 496dac0d.bac1b3f1.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60199],{44564:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=c(11527),l=c(47214);const r={title:"Linux Container",sidebar_title:"LXC",hide_title:!0},s="Linux Container",i={id:"devops/container/lxc",title:"Linux Container",description:"- lxc package content",source:"@site/../notes/devops/container/lxc.md",sourceDirName:"devops/container",slug:"/devops/container/lxc",permalink:"/notes/devops/container/lxc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/lxc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"Linux Container",sidebar_title:"LXC",hide_title:!0},sidebar:"docs",previous:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"},next:{title:"LXD",permalink:"/notes/devops/container/lxd"}},d={},a=[{value:"\u975e\u7279\u6743 LXC \u914d\u7f6e",id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"lxc",id:"lxc",level:2},{value:"Docker in LXC",id:"docker-in-lxc",level:2},{value:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"linux-container",children:"Linux Container"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["lxc package ",(0,t.jsx)(e.a,{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxc&arch=x86_64&repo=main",children:"content"})]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/lxc/lxc",children:"lxc/lxc"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"~/.config/lxc/default.conf"})}),"\n",(0,t.jsxs)(e.li,{children:["\u5b58\u50a8\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["dir - \u9ed8\u8ba4\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"/var/lib/lxc/container/rootfs"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"~/.local/share/lxc/<name>/rootfs"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"lvm"}),"\n",(0,t.jsx)(e.li,{children:"loop"}),"\n",(0,t.jsx)(e.li,{children:"btrfs"}),"\n",(0,t.jsx)(e.li,{children:"zfs"}),"\n",(0,t.jsx)(e.li,{children:"rbd"}),"\n",(0,t.jsx)(e.li,{children:"best"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["man ",(0,t.jsx)(e.a,{href:"https://linuxcontainers.org/lxc/manpages//man1/lxc-create.1.html",children:"lxc-create.1"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["archlinux ",(0,t.jsx)(e.a,{href:"https://wiki.archlinux.org/index.php/Linux_Containers",children:"lxc"})]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://gist.github.com/hack3d/8a3982329e1df77f380878ff7bbc7b03",children:"armhf lxc"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u53ef\u4ee5 poweroff \u9000\u51fa init"}),"\n",(0,t.jsx)(e.li,{children:"lxc \u53ef\u4ee5\u5d4c\u5957"}),"\n"]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# /usr/share/lxc/templates/lxc-download\n# /lib/security/pam_cgfs.so\napk add lxc shadow-uidmap lxc-bridge lxc-pam lxc-download lxc-templates lxc-templates-oci\n\n# \u542f\u52a8 lxcbr0 - \u9ed8\u8ba4\u7f51\u6bb5\nservice dnsmasq.lxcbr0 start\n\n# \u5df2\u5b89\u88c5 template\nls /usr/share/lxc/templates/\n# \u67e5\u770b\u53c2\u6570\n/usr/share/lxc/templates/lxc-download -h\n\n# https://images.linuxcontainers.org\n# \u4f7f\u7528 tuna \u955c\u50cf\nlxc-create -t download -n alpine-amd64 -- -d alpine -r 3.12 -a amd64 --server mirrors.tuna.tsinghua.edu.cn/lxc-images\n# \u524d\u53f0\u542f\u52a8\n# -d \u540e\u53f0\u542f\u52a8\nlxc-start -n alpine-amd64 -F\n# \u542f\u52a8\u4e00\u4e2a shell\nlxc-attach -n alpine-amd64\n\n# \u67e5\u770b\u8fd0\u884c\u7684\u5bb9\u5668\nlxc-ls --fancy\n# \u505c\u6b62\u5bb9\u5668\nlxc-stop -n alpine-amd64\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"command"}),(0,t.jsx)(e.th,{children:"desc"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-attach"}),(0,t.jsx)(e.td,{children:"start a process inside a running container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-autostart"}),(0,t.jsx)(e.td,{children:"start/stop/kill auto-started containers"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-cgroup"}),(0,t.jsx)(e.td,{children:"manage the control group associated with a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-checkconfig"}),(0,t.jsx)(e.td,{children:"check the current kernel for lxc support"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-checkpoint"}),(0,t.jsx)(e.td,{children:"checkpoints and restores containers"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-config"}),(0,t.jsx)(e.td,{children:"query LXC system configuration"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-console"}),(0,t.jsx)(e.td,{children:"Launch a console for the specified container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-copy"}),(0,t.jsx)(e.td,{children:"copy an existing container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-create"}),(0,t.jsx)(e.td,{children:"creates a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-destroy"}),(0,t.jsx)(e.td,{children:"destroy a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-device"}),(0,t.jsx)(e.td,{children:"manage devices of running containers"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-execute"}),(0,t.jsx)(e.td,{children:"run an application inside a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-freeze"}),(0,t.jsx)(e.td,{children:"freeze all the container's processes"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-info"}),(0,t.jsx)(e.td,{children:"query information about a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-ls"}),(0,t.jsx)(e.td,{children:"list the containers existing on the system"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-monitor"}),(0,t.jsx)(e.td,{children:"monitor the container state"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-snapshot"}),(0,t.jsx)(e.td,{children:"Snapshot an existing container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-start"}),(0,t.jsx)(e.td,{children:"run an application inside a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-stop"}),(0,t.jsx)(e.td,{children:"stop the application running inside a container"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-top"}),(0,t.jsx)(e.td,{children:"monitor container statistics"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-unfreeze"}),(0,t.jsx)(e.td,{children:"thaw all the container's processes"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-unshare"}),(0,t.jsx)(e.td,{children:"Run a task in a new set of namespaces"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-update-config"}),(0,t.jsx)(e.td,{children:"update a legacy pre LXC 2.1 configuration file"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-usernsexec"}),(0,t.jsx)(e.td,{children:"Run a task as root in a new user namespace"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lxc-wait"}),(0,t.jsx)(e.td,{children:"wait for a specific container state"})]})]})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"modprobe configs\nlxc-checkconfig\n# \u68c0\u6d4b\u5176\u4ed6 kernel \u914d\u7f6e\nCONFIG=/boot/config-lts /usr/bin/lxc-checkconfig\n\n# \u6240\u6709\u914d\u7f6e\nlxc-config -l\n# \u9ed8\u8ba4\u914d\u7f6e\n# $HOME/.config/lxc/default.conf\nlxc-config lxc.default_config\n# \u8def\u5f84\u4f4d\u7f6e\n# $HOME/.local/share/lxc\nlxc-config lxc.lxcpath\n\nlxc-attach -n container -- /etc/init.d/cron restart\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e",children:"\u975e\u7279\u6743 LXC \u914d\u7f6e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# sudo usermod -v 100000-200000 -w 100000-200000 $USER\necho "session    optional   pam_cgfs.so -c freezer,memory,name=systemd,unified" >> /etc/pam.d/system-login\n# echo "lxc.idmap = u 0 100000 65536" >> /etc/lxc/default.conf\n# echo "lxc.idmap = g 0 100000 65536" >> /etc/lxc/default.conf\n\necho root:100000:65536 | sudo tee -a /etc/subuid\necho root:100000:65536 | sudo tee -a /etc/subgid\n\nmkdir -p ~/.config/lxc\n\n# \u5305\u542b\u5168\u5c40\u914d\u7f6e\u53ef\u4ee5\u5c11\u914d\u7f6e\u4e00\u4e9b\necho "lxc.include = /etc/lxc/default.conf" > ~/.config/lxc/default.conf\n\necho "lxc.idmap = u 0 100000 65536" > ~/.config/lxc/default.conf\necho "lxc.idmap = g 0 100000 65536" >> ~/.config/lxc/default.conf\necho "lxc.net.0.type = veth" >> ~/.config/lxc/default.conf\necho "lxc.net.0.link = lxcbr0" >> ~/.config/lxc/default.conf\n\necho "$USER veth lxcbr0 2" | sudo tee -a /etc/lxc/lxc-usernet\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.conf.5.html",children:"lxc.conf.5"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.container.conf.5.html",children:"lxc.container.conf.5"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://linuxcontainers.org/lxc/manpages//man5/lxc.system.conf.5.html",children:"lxc.system.conf.5"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc-usernet.5.html",children:"lxc-usernet.5"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"lxc",children:"lxc"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://linuxcontainers.org/lxc/manpages/man7/lxc.7.html",children:"lxc.7"})}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(e.h2,{id:"docker-in-lxc",children:"Docker in LXC"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://stackoverflow.com/a/25885682/1870054",children:"https://stackoverflow.com/a/25885682/1870054"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"lxc.apparmor.profile = lxc-container-default-with-nesting\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",children:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \u5347\u7ea7\u914d\u7f6e\nlxc-update-config -c ~/.local/share/lxc/alpine-amd64/config\n"})})]})}function x(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},3354:(n,e,c)=>{var t=c(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,c){var t,r={},a=null,o=null;for(t in void 0!==c&&(a=""+c),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(o=e.ref),e)s.call(e,t)&&!d.hasOwnProperty(t)&&(r[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===r[t]&&(r[t]=e[t]);return{$$typeof:l,type:n,key:a,ref:o,props:r,_owner:i.current}}e.Fragment=r,e.jsx=a,e.jsxs=a},11527:(n,e,c)=>{n.exports=c(3354)},47214:(n,e,c)=>{c.d(e,{Z:()=>i,a:()=>s});var t=c(50959);const l={},r=t.createContext(l);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);