/*! For license information please see f3a213e6.b433c09f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48649],{1265:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(11527),s=i(47214);const r={title:"infisical"},c="infisical",o={id:"service/security/infisical",title:"infisical",description:"- infisical",source:"@site/../notes/service/security/infisical.md",sourceDirName:"service/security",slug:"/service/security/infisical",permalink:"/notes/service/security/infisical",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/security/infisical.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"infisical"},sidebar:"docs",previous:{title:"RealTime Awesome",permalink:"/notes/service/realtime/awesome"},next:{title:"Vault",permalink:"/notes/service/security/vault/"}},a={},l=[];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"infisical",children:"infisical"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Infisical/infisical",children:"infisical"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MIT, NextJS, ",(0,t.jsx)(n.strong,{children:"MongoDB"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u76ee\u524d\u5b58\u50a8\u53ea\u80fd MongoDB"}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export TELEMETRY_ENABLED=false\n\n# SelfHost\nwget -O .env https://raw.githubusercontent.com/Infisical/infisical/main/.env.example\nwget -O docker-compose.yml https://raw.githubusercontent.com/Infisical/infisical/main/docker-compose.yml\nmkdir nginx && cd nginx && wget -O default.conf https://raw.githubusercontent.com/Infisical/infisical/main/nginx/default.dev.conf\ncd ..\n\nnano .env\n\ndocker-compose -f docker-compose.yml up -d\n\n# \u547d\u4ee4\u884c\nbrew install infisical/get-cli/infisical\n\n# \u5728\u4e0d login \u7684\u65b9\u5f0f\u4e0b\u4f7f\u7528\nexport INFISICAL_TOKEN\n\ninfisical export > .env\n\ndocker run -p 80:80 \\\n  -e ENCRYPTION_KEY= \\\n  -e JWT_SIGNUP_SECRET= \\\n  -e JWT_REFRESH_SECRET= \\\n  -e JWT_AUTH_SECRET= \\\n  -e JWT_SERVICE_SECRET= \\\n  -e MONGO_URL= \\\n  -e REDIS_URL= \\\n  infisical/infisical:latest\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},3354:(e,n,i)=>{var t=i(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var t,r={},l=null,f=null;for(t in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:f,props:r,_owner:o.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},11527:(e,n,i)=>{e.exports=i(3354)},47214:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var t=i(50959);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);