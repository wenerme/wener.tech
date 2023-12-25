/*! For license information please see fd7fdf8a.31d19c4e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48001],{73661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(11527),r=n(47214);const i={title:"tmate"},a="tmate",d={id:"ops/admin/tmate",title:"tmate",description:"- tmate.io - \u7ec8\u7aef\u5171\u4eab",source:"@site/../notes/ops/admin/tmate.md",sourceDirName:"ops/admin",slug:"/ops/admin/tmate",permalink:"/notes/ops/admin/tmate",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/admin/tmate.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"tmate"},sidebar:"docs",previous:{title:"MOSH",permalink:"/notes/ops/admin/mosh"},next:{title:"Tmux",permalink:"/notes/ops/admin/tmux"}},l={},o=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tmate",children:"tmate"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://tmate.io/",children:"tmate.io"})," - \u7ec8\u7aef\u5171\u4eab"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/tmate-io/tmate",children:"tmate-io/tmate"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"BSD"}),"\n",(0,s.jsx)(t.li,{children:"tmux fork"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(t.code,{children:"~/.tmate.conf"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u8bed\u6cd5\u548c tmux \u4e00\u6837"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"apk add -X https://mirrors.aliyun.com/alpine/edge/testing/ tmate\ntmate\n\n# \u6ce8\u518c\u540e\u53ef\u4f7f\u7528\u56fa\u5b9a\u540d\u5b57\ntmate -k API_KEY -n session-name\n# \u56fa\u5b9a URL\nssh username/session-name@nyc1.tmate.io\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ini",children:'# \u6388\u6743\n# tmate -a ~/.ssh/authorized_keys\nset tmate-authorized-keys "~/.ssh/authorized_keys"\n# \u6ce8\u518c\u65f6\u7684 API KEY\n# -k\nset tmate-api-key "API_KEY"\n# \u94fe\u63a5\u65f6\u7528\u7684\u4f1a\u8bdd\u540d\u5b57\n# -n\nset tmate-session-name "session-name"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/tmate-io/tmate-ssh-server",children:"tmate-io/tmate-ssh-server"})}),"\n",(0,s.jsxs)(t.li,{children:["docker ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/tmate/tmate-ssh-server",children:"tmate/tmate-ssh-server"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u9700\u8981 SYS_ADMIN \u6743\u9650\u6765\u521b\u5efa\u5d4c\u5957\u7684\u5bb9\u5668"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/tmate-io/tmate-kube",children:"tmate-io/tmate-kube"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Kubernetes \u90e8\u7f72"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"env"}),(0,s.jsx)(t.th,{children:"value"}),(0,s.jsx)(t.th,{children:"desc"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSH_KEYS_PATH"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"ssh key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HAS_WEBSOCKET"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"tmate-websocket server exists (for HTML5 clients)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"USE_PROXY_PROTOCOL"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"behind a load balancer that uses the proxy protocol enabled. This is useful to get client real IPs."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSH_HOSTNAME"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"configures the SSH hostname to advertise to tmate hosts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSH_PORT_LISTEN"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"port on which the SSH server should listen on."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSH_PORT_ADVERTISE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u9ed8\u8ba4 SSH_PORT_LISTEN"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ini",children:'# \u4fee\u6539 ~/.tmate.conf \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 server\nset -g tmate-server-host "ssh.tmate.io"\nset -g tmate-server-port 22\nset -g tmate-server-rsa-fingerprint     "SHA256:Hthk2T/M/Ivqfk1YYUn5ijC2Att3+UPzD7Rn72P5VWs"\nset -g tmate-server-ed25519-fingerprint "SHA256:jfttvoypkHiQYUqUCwKeqd9d1fJj/ZiQlFOHVl6E9sI"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3354:(e,t,n)=>{var s=n(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var s,i={},o=null,c=null;for(s in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:o,ref:c,props:i,_owner:d.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var s=n(50959);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);