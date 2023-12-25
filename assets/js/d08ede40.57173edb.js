/*! For license information please see d08ede40.57173edb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39976],{37912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(11527),s=t(47214);const i={title:"krew"},d="krew",l={id:"devops/kubernetes/ops/krew",title:"krew",description:"- kubernetes-sigs/krew",source:"@site/../notes/devops/kubernetes/ops/krew.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/krew",permalink:"/notes/devops/kubernetes/ops/krew",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/ops/krew.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"krew"},sidebar:"docs",previous:{title:"kops",permalink:"/notes/devops/kubernetes/ops/kops"},next:{title:"kubectl FAQ",permalink:"/notes/devops/kubernetes/ops/kubectl-faq"}},c={},o=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"krew",children:"krew"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/krew",children:"kubernetes-sigs/krew"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"brew for k8s"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/",children:"\u5b89\u88c5"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://krew.sigs.k8s.io/plugins",children:"https://krew.sigs.k8s.io/plugins"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u5b89\u88c5\n(\n  set -x; cd "$(mktemp -d)" &&\n  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew.{tar.gz,yaml}" &&\n  tar zxvf krew.tar.gz &&\n  KREW=./krew-"$(uname | tr \'[:upper:]\' \'[:lower:]\')_amd64" &&\n  "$KREW" install --manifest=krew.yaml --archive=krew.tar.gz &&\n  "$KREW" update\n)\n\n# \u9ed8\u8ba4\u76ee\u5f55 ~/.krew/bin/\nexport PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"\n\nkubectl krew update\nkubectl krew search whoami\nkubectl krew install whoami\n\nkubectl whoami\nkubectl krew upgrade\n\n# \u670d\u52a1\u7ba1\u7406\nkubectl krew install ingress-nginx\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"plugin"}),(0,r.jsx)(n.th,{children:"desc"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/corneliusweig/rakkess",children:"access-matrix"})}),(0,r.jsx)(n.td,{children:"\u6743\u9650\u68c0\u67e5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://cert-manager.io/docs/usage/kubectl-plugin/",children:"cert-manager"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ctx ns"}),(0,r.jsx)(n.td,{children:"\u4e0a\u4e0b\u6587\u548c\u7a7a\u95f4\u5207\u6362 - \u7c7b\u4f3c kubectx"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"doctor"}),(0,r.jsx)(n.td,{children:"\u626b\u63cf\u96c6\u7fa4\u5f02\u5e38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"konfig"}),(0,r.jsx)(n.td,{children:"\u5408\u5e76\u6216\u5206\u5272\u914d\u7f6e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oidc-login"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"outdated"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"popeye"}),(0,r.jsx)(n.td,{children:"\u626b\u63cf\u96c6\u7fa4\u8d44\u6e90\u95ee\u9898"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rbac-lookup rbac-view"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sniff"}),(0,r.jsx)(n.td,{children:"Start a remote packet capture on pods using tcpdump and wireshark"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tail"}),(0,r.jsx)(n.td,{children:"multiple pods and containers using simple, dynamic source selection."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tree"}),(0,r.jsx)(n.td,{children:"\u67e5\u770b\u8d44\u6e90\u5c42\u7ea7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"view-secret"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,i={},o=null,a=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var r=t(50959);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);