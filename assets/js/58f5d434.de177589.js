/*! For license information please see 58f5d434.de177589.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[521],{33343:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=t(11527),r=t(47214);const o={tags:["Upgrade"]},a="K3S \u5347\u7ea7 {#upgrade}",d={id:"devops/kubernetes/distro/k3s/k3s-upgrade",title:"K3S \u5347\u7ea7",description:"upgrade}",source:"@site/../notes/devops/kubernetes/distro/k3s/k3s-upgrade.md",sourceDirName:"devops/kubernetes/distro/k3s",slug:"/devops/kubernetes/distro/k3s/upgrade",permalink:"/notes/devops/kubernetes/distro/k3s/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k3s/k3s-upgrade.md",tags:[{label:"Upgrade",permalink:"/notes/tags/upgrade"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1704697347,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{tags:["Upgrade"]},sidebar:"docs",previous:{title:"Install",permalink:"/notes/devops/kubernetes/distro/k3s/install"},next:{title:"K3S Version",permalink:"/notes/devops/kubernetes/distro/k3s/version"}},i={},c=[];function u(e){const s={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"upgrade",children:"K3S \u5347\u7ea7"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"v1.27 \u524d\u9762\u7248\u672c containerd \u65e0 zfs snapshotter"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'# \u51c6\u5907\nrc-update del k3s\nreboot\n\n# \u5347\u7ea7\nk3s -v                   # \u5f53\u524d\u7248\u672c\ncp $(which k3s) k3s.last # backup\n\nsudo apk add jq\n\n# ARCH=arm64\n# SUFFIX=-${ARCH}\nARCH=amd64\nSUFFIX=\n\nVERSION_K3S=$(curl -sf https://update.k3s.io/v1-release/channels | jq -r \'.data[] | select(.id == "stable") | .latest\')\necho Upgrade $VERSION_K3S\n# GITHUB_URL=https://github.com/k3s-io/k3s/releases\n# \u8d70\u4ee3\u7406\nGITHUB_URL=https://mirror.ghproxy.com/github.com/k3s-io/k3s/releases\nGITHUB_URL=https://github.com/k3s-io/k3s/releases\ncurl --remote-name-all -L "${GITHUB_URL}/download/${VERSION_K3S}/sha256sum-${ARCH}.txt" "${GITHUB_URL}/download/${VERSION_K3S}/k3s${SUFFIX}"\n\nsha256sum -c sha256sum-${ARCH}.txt --ignore-missing\n\ncp k3s$SUFFIX k3s.$VERSION_K3S\nchmod +x k3s.$VERSION_K3S\nsudo cp k3s.$VERSION_K3S $(which k3s)\n\nsudo k3s check-config\nk3s -v\n\n# \u542f\u52a8\nservice k3s restart\nrc-update add k3s\n\nk3s kubectl get nodes\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3354:(e,s,t)=>{var n=t(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var n,o={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(u=s.ref),s)a.call(s,n)&&!i.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:r,type:e,key:c,ref:u,props:o,_owner:d.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},11527:(e,s,t)=>{e.exports=t(3354)},47214:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>a});var n=t(50959);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);