/*! For license information please see 2df96dec.2a6836a3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92552],{59728:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(2488),i=t(62780);const r={tags:["Tuning"]},l="Tuning",o={id:"os/linux/sys/sys-tuning",title:"Tuning",description:"Swap",source:"@site/../notes/os/linux/sys/sys-tuning.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/tuning",permalink:"/notes/os/linux/sys/tuning",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/sys-tuning.md",tags:[{label:"Tuning",permalink:"/notes/tags/tuning"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688543048,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{tags:["Tuning"]},sidebar:"docs",previous:{title:"Swap",permalink:"/notes/os/linux/sys/swap"},next:{title:"syscall",permalink:"/notes/os/linux/sys/syscall"}},c={},a=[{value:"Swap",id:"swap",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"haproxy",id:"haproxy",level:2},{value:"nginx",id:"nginx",level:2},{value:"default.conf",id:"defaultconf",level:2},{value:"limits",id:"limits",level:2}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"tuning",children:"Tuning"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"getconf PAGE_SIZE\n"})}),"\n",(0,s.jsx)(e.h2,{id:"swap",children:"Swap"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sysctl vm.swappiness vm.overcommit_memory vm.overcommit_ratio\n\nsysctl vm.dirty_background_ratio vm.dirty_background_bytes\nsysctl vm.dirty_ratio vm.dirty_bytes\n"})}),"\n",(0,s.jsx)(e.h2,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Shared Memory\n# =============\nipcs -l\nipcs -lm # Shared Memory Limits\n# ipcs -M # macOS\n\nsysctl kernel.shmmax kernel.shmall\n\n# HugePage\n# =============\ncat /proc/meminfo | grep -i huge\n# HugePages_Total\nsysctl vm.nr_hugepages\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:"title='hpsizeof.sh'",children:'#!/bin/bash\npid=`head -1 $PGDATA/postmaster.pid`\necho "Pid:            $pid"\npeak=`grep ^VmPeak /proc/$pid/status | awk \'{ print $2 }\'`\necho "VmPeak:            $peak kB"\nhps=`grep ^Hugepagesize /proc/meminfo | awk \'{ print $2 }\'`\necho "Hugepagesize:   $hps kB"\nhp=$((peak/hps))\necho Set Huge Pages:     $hp\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["postgresql.conf\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"huge_pages"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.percona.com/blog/tune-linux-kernel-parameters-for-postgresql-optimization/",children:"https://www.percona.com/blog/tune-linux-kernel-parameters-for-postgresql-optimization/"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.tibco.com/pub/ast/2.5.11/doc/html/tuningguide/ch04s06.html",children:"https://docs.tibco.com/pub/ast/2.5.11/doc/html/tuningguide/ch04s06.html"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"haproxy",children:"haproxy"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",metastring:'title="/etc/sysctl.d/30-haproxy.conf"',children:"net.ipv4.tcp_rmem             = 4096 16060 262144 # \u51cf\u5c11\u9ed8\u8ba4 receive/send buffers\nnet.ipv4.tcp_wmem             = 4096 16384 262144 #\nnet.ipv4.tcp_tw_reuse         = 1                 # early reuse of a same source port for outgoing connections\nnet.ipv4.ip_local_port_range  = 1024 65023        # \u589e\u52a0\u53ef\u7528\u7aef\u53e3\nnet.ipv4.tcp_max_syn_backlog  = 60000             # \u589e\u52a0 syn backlog\n#net.ipv4.tcp_fin_timeout     = 30                # \u66f4\u65e9 timeout FIN_WAIT\uff0c\u66f4\u5feb\u91ca\u653e dead conn\nnet.ipv4.tcp_synack_retries   = 3                 # \u51cf\u5c11 SYN-ACK \u91cd\u8bd5\nnet.ipv4.ip_nonlocal_bind     = 1                 # \u5141\u8bb8 bind \u8fd8\u4e0d\u5b58\u5728\u7684 ip\nnet.core.somaxconn            = 60000             # \u81f3\u5c11 tcp_max_syn_backlog\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.haproxy.com/documentation/hapee/latest/getting-started/system-tuning/",children:"https://www.haproxy.com/documentation/hapee/latest/getting-started/system-tuning/"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"nginx",children:"nginx"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["net.core.somaxconn\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5339\u914d ",(0,s.jsx)(e.a,{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#listen",children:"listen backlog=N"})]}),"\n",(0,s.jsx)(e.li,{children:"\u7cfb\u7edf\u9ed8\u8ba4 512\uff0cnginx \u9ed8\u8ba4 511"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"net.core.netdev_max_backlog"}),"\n",(0,s.jsx)(e.li,{children:"net.ipv4.ip_local_port_range"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.nginx.com/blog/tuning-nginx/",children:"https://www.nginx.com/blog/tuning-nginx/"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"defaultconf",children:"default.conf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"net.ipv4.tcp_rmem           =4096 87380 4194304\nnet.ipv4.tcp_wmem           =4096 87380 4194304\nnet.ipv4.tcp_tw_reuse       =0\nnet.ipv4.ip_local_port_range=32768 61000\nnet.ipv4.tcp_max_syn_backlog=1024\nnet.ipv4.tcp_fin_timeout    =60\nnet.ipv4.tcp_synack_retries =5\nnet.ipv4.ip_nonlocal_bind   =1\nnet.core.somaxconn          =128\n"})}),"\n",(0,s.jsx)(e.h2,{id:"limits",children:"limits"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"/etc/security/limits.conf"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},38088:(n,e,t)=>{var s=t(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,t){var s,r={},a=null,p=null;for(s in void 0!==t&&(a=""+t),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(p=e.ref),e)l.call(e,s)&&!c.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:i,type:n,key:a,ref:p,props:r,_owner:o.current}}e.Fragment=r,e.jsx=a,e.jsxs=a},2488:(n,e,t)=>{n.exports=t(38088)},62780:(n,e,t)=>{t.d(e,{I:()=>o,M:()=>l});var s=t(96651);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);