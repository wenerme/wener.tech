/*! For license information please see c7049bbd.0cc8959d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7100],{66873:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=r(11527),o=r(47214);const c={title:"crane"},a="crane",s={id:"devops/container/crane",title:"crane",description:"- google/go-containerregistry/cmd/crane",source:"@site/../notes/devops/container/crane.md",sourceDirName:"devops/container",slug:"/devops/container/crane",permalink:"/notes/devops/container/crane",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/crane.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702440128,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"crane"},sidebar:"docs",previous:{title:"cosign",permalink:"/notes/devops/container/cosign"},next:{title:"ctr",permalink:"/notes/devops/container/ctr"}},i={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"crane",children:"crane"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane",children:"google/go-containerregistry/cmd/crane"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane/recipes.md",children:"recipes.md"})}),"\n",(0,t.jsxs)(n.li,{children:["config\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"arch, os, rootfs, env, cmd, label, created, history"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["manifest\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"layers, size"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"layer"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# macOS\nbrew install crane\n# install from source\ngo install github.com/google/go-containerregistry/cmd/crane@latest\n# \u624b\u52a8\u4e0b\u8f7d\n# https://github.com/google/go-containerregistry/releases\ncurl -LO https://github.com/google/go-containerregistry/releases/download/v0.13.0/go-containerregistry_Linux_arm64.tar.gz\n\n\necho quay.io | crane auth get # \u4ece keychain \u83b7\u53d6 auth \u4fe1\u606f\ncrane copy quay.io/keycloak/keycloak:17.0.0 registry.cn-hongkong.aliyuncs.com/cmi/keycloak_keycloak\n\ncrane pull docker.io/wener/base:v3.15 base-v3.15.tar\ncrane push base-v3.15.tar registry.cn-hongkong.aliyuncs.com/cmi/wener_base:v3.15\n\ncrane tag wener/node:20 20.10 # tag 20.10 \u4e3a 20\n\n# \u67e5\u770b tag\ncrane ls docker.io/wener/base\n\n# \u8ba1\u7b97\u955c\u50cf\u5927\u5c0f\ncrane manifest docker.io/wener/base:v3.15 | jq '.config.size + ([.layers[].size] | add)'\n# \u683c\u5f0f\u5316\u663e\u793a\ncrane manifest docker.io/wener/base:v3.15 | jq '.config.size + ([.layers[].size] | add)' | numfmt --to=iec\n\n# diff config\ndiff <(crane config busybox:1.32 | jq) <(crane config busybox:1.33 | jq)\n# diff manifest\ndiff <(crane manifest busybox:1.32 | jq) <(crane manifest busybox:1.33 | jq)\n# diff \u5185\u5bb9\ndiff \\\n  <(crane export docker.io/wener/base:v3.14 - | tar -tvf - | sort) \\\n  <(crane export docker.io/wener/base:v3.15 - | tar -tvf - | sort)\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,n,r)=>{var t=r(50959),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,c={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:d,props:c,_owner:s.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>a});var t=r(50959);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);