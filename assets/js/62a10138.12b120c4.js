/*! For license information please see 62a10138.12b120c4.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27497],{36377:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=n(11527),o=n(47214);const c={title:"coder"},s="coder",d={id:"dev/ide/coder",title:"coder",description:"- coder/coder",source:"@site/../notes/dev/ide/coder.md",sourceDirName:"dev/ide",slug:"/dev/ide/coder",permalink:"/notes/dev/ide/coder",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/ide/coder.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"coder"},sidebar:"docs",previous:{title:"Che",permalink:"/notes/dev/ide/che"},next:{title:"Jetbrain IDE",permalink:"/notes/dev/ide/jetbrain/"}},i={},a=[{value:"code-server",id:"code-server",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"coder",children:"coder"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/coder/coder",children:"coder/coder"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"AGPLv3, Golang"}),"\n",(0,t.jsx)(r.li,{children:"provisions remote development environments via Terraform"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/coder/code-server",children:"coder/code-server"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/coder/code-marketplace",children:"coder/code-marketplace"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"code-server",children:"code-server"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# https://hub.docker.com/r/linuxserver/code-server\n# lscr.io/linuxserver/code-server:latest\ndocker run --rm -it \\\n  -v $PWD/data:/config \\\n  -p 8443:8443 \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Asia/Shanghai \\\n  -e PASSWORD=password \\\n  -e HASHED_PASSWORD= \\\n  -e SUDO_PASSWORD=password \\\n  -e SUDO_PASSWORD_HASH= \\\n  -e PROXY_DOMAIN=code-server.my.domain \\\n  -e DEFAULT_WORKSPACE=/config/workspace \\\n  --name code-server linuxserver/code-server\n\n# https://hub.docker.com/r/codercom/code-server\n# https://github.com/coder/code-server/blob/main/ci/release-image/Dockerfile\n"})})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3354:(e,r,n)=>{var t=n(50959),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,c={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:l,props:c,_owner:d.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},11527:(e,r,n)=>{e.exports=n(3354)},47214:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>s});var t=n(50959);const o={},c=t.createContext(o);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);