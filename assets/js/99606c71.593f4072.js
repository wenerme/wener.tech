/*! For license information please see 99606c71.593f4072.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69102],{29490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(11527),o=t(47214);const i={title:"docker buildx bake"},c="docker buildx bake",s={id:"devops/container/bake",title:"docker buildx bake",description:"- \u914d\u7f6e\u5408\u5e76",source:"@site/../notes/devops/container/bake.md",sourceDirName:"devops/container",slug:"/devops/container/bake",permalink:"/notes/devops/container/bake",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/bake.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"docker buildx bake"},sidebar:"docs",previous:{title:"apko",permalink:"/notes/devops/container/apko"},next:{title:"Buildah",permalink:"/notes/devops/container/buildah"}},a={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docker-buildx-bake",children:"docker buildx bake"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u914d\u7f6e\u5408\u5e76\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"docker-compose.yml"}),"\n",(0,r.jsx)(n.li,{children:"docker-compose.yaml"}),"\n",(0,r.jsx)(n.li,{children:"docker-bake.json"}),"\n",(0,r.jsx)(n.li,{children:"docker-bake.override.json"}),"\n",(0,r.jsx)(n.li,{children:"docker-bake.hcl"}),"\n",(0,r.jsx)(n.li,{children:"docker-bake.override.hcl"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.docker.com/build/bake/file-definition/",children:"https://docs.docker.com/build/bake/file-definition/"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cat <<EOF > Dockerfile\nFROM wener/base\nRUN touch test\nEOF\ncat <<HCL > docker-bake.hcl\ntarget "default" {\n  dockerfile = "Dockerfile"\n  platforms = ["linux/amd64", "linux/arm64"]\n  pull = true\n}\nHCL\n\n# moby/buildkit:buildx-stable-1\ndocker context create --use\n\ndocker buildx bake\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,n,t)=>{var r=t(50959),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:s.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var r=t(50959);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);