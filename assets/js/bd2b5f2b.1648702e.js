/*! For license information please see bd2b5f2b.1648702e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87610],{85340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(2488),l=t(62780);const i={title:"keycloak-config-cli"},o="keycloak-config-cli",c={id:"service/auth/keycloak/keycloak-config-cli",title:"keycloak-config-cli",description:"- adorsys/keycloak-config-cli \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/auth/keycloak/keycloak-config-cli.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/config-cli",permalink:"/notes/service/auth/keycloak/config-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/keycloak/keycloak-config-cli.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634945411,formattedLastUpdatedAt:"Oct 22, 2021",frontMatter:{title:"keycloak-config-cli"},sidebar:"docs",previous:{title:"Client",permalink:"/notes/service/auth/keycloak/client"},next:{title:"Keycloak \u5f00\u53d1",permalink:"/notes/service/auth/keycloak/dev"}},s={},a=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"keycloak-config-cli",children:"keycloak-config-cli"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/adorsys/keycloak-config-cli",children:"adorsys/keycloak-config-cli"})," \u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keycloak \u547d\u4ee4\u884c\u914d\u7f6e\u5bfc\u5165"}),"\n",(0,r.jsx)(n.li,{children:"Apache-2.0, Java"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://github.com/adorsys/keycloak-config-cli/tree/main/src/test/resources/import-files",children:"import-files"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56e0\u4e3a Keycloak \u53ef\u4ee5\u7ba1\u7406\u8d26\u6237\uff0c\u4f46\u8d26\u6237\u901a\u5e38\u4f1a\u5141\u8bb8\u4fee\u6539\uff0c\u4e00\u6b21\u4e0d\u9002\u5408\u4f7f\u7528\u7c7b\u4f3c terraform \u4e4b\u7c7b\u7684\u7ba1\u7406\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5bfc\u5165\u529f\u80fd\u975e\u5e38\u9002\u5408 realm \u521d\u59cb\u5316 \u6216 \u4e00\u6b21\u6027\u5bfc\u5165"}),"\n",(0,r.jsx)(n.li,{children:"docker \u955c\u50cf\u63d0\u4f9b\u5339\u914d kc \u7684\u7248\u672c - \u4f8b\u5982 v4.2.0-15.0.1 \u6216\u8005 latest-15.0.1"}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  -e KEYCLOAK_AVAILABILITYCHECK_ENABLED=true \\\n  -e KEYCLOAK_AVAILABILITYCHECK_TIMEOUT=120s \\\n  -e IMPORT_PATH=/config \\\n  -e IMPORT_FORCE=false \\\n  --env-file kc.env \\\n  -v $PWD/keycloak-conf:/config \\\n  adorsys/keycloak-config-cli:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"kc.env"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"KEYCLOAK_URL=https://kc.example.com/auth\nKEYCLOAK_USER=admin\nKEYCLOAK_PASSWORD=password\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'#\nenabled: true\n\n# \u57df\u57fa\u672c\u4fe1\u606f\nrealm: demo\n\ndisplayName: Demo\ndisplayNameHtml: "<h2>DemoSSO</h2>"\n\nsslRequired: "external"\nloginWithEmailAllowed: true\n\ninternationalizationEnabled: true\nsupportedLocales:\n- zh-CN\n- en\ndefaultLocale: zh-CN\n\n\n# \u89d2\u8272\nroles:\n  # \u57df\u89d2\u8272\n  realm:\n    - name: admin\n      description: \u7ba1\u7406\n      attributes:\n        \'example.com/admin\':\n          - true\n\n# \u7528\u6237\nusers:\n  - username: wener\n    firstName: Chen\n    lastName: Wener\n    email: example@example.com\n    enabled: true\n    emailVerified: true\n    attributes:\n      jobNumber: 1000\n    credentials:\n      - type: password\n        value: 123456\n        temporary: true\n        # \u652f\u6301\u8bbe\u7f6e\u521d\u59cb\u5bc6\u7801\n        userLabel: initial\n    # \u89d2\u8272\n    realmRoles:\n      - admin\n\nclientScopes:\n\nclients:\n- clientId: demo-web\n\ndefaultDefaultClientScopes:\n- role_list\n- profile\n- email\n- roles\n- web-origins\n\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var r=t(96651),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,d=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:l,type:e,key:a,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var r=t(96651);const l={},i=r.createContext(l);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);