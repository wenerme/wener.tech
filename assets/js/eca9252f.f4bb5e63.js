/*! For license information please see eca9252f.f4bb5e63.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62851],{82264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(2488),s=t(62780);const o={title:"juju"},a="juju",i={id:"devops/container/juju",title:"juju",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/container/juju.md",sourceDirName:"devops/container",slug:"/devops/container/juju",permalink:"/notes/devops/container/juju",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/juju.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"juju"},sidebar:"docs",previous:{title:"ctr",permalink:"/notes/devops/container/ctr"},next:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"}},u={},l=[{value:"Install",id:"install",level:2},{value:"Tips",id:"tips",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"juju",children:"juju"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Operator Lifecycle Manager (OLM) that provides model-driven application management and next-generation infrastructure-as-code"}),"\n",(0,r.jsx)(n.li,{children:"\u7531 Canonical \u5f00\u53d1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jujucharms.com/docs/stable/",children:"Document"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Ubuntu 16\napt update\napt install juju zfsutils-linux\n\n# Other\nadd-apt-repository ppa:juju/devel\napt update\napt install juju\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["juju \u4e2d\u4f7f\u7528\u5230\u7684\u8def\u5f84 ",(0,r.jsx)(n.a,{href:"https://github.com/juju/juju/blob/master/juju/paths/paths.go",children:"juju/paths/paths.go"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8\n# \u53ef\u4f7f\u7528 --show-log \u548c --debug \u67e5\u770b\u65e5\u5fd7\njuju bootstrap testcloud manual/10.25.30.1\n# \u6dfb\u52a0\u5176\u4ed6\u673a\u5668\njuju add-machine ssh:root@10.25.30.2\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!u.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:c,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>a});var r=t(96651);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);