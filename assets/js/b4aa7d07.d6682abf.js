/*! For license information please see b4aa7d07.d6682abf.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45388],{59924:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=s(2488),r=s(62780);const t={title:"Keycloak JS SDK"},c="Keycloak JS SDK",l={id:"service/auth/keycloak/keycloak-js",title:"Keycloak JS SDK",description:"- adapters/oidc/js/src/main/resources \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/auth/keycloak/keycloak-js.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/js",permalink:"/notes/service/auth/keycloak/js",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/keycloak/keycloak-js.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1635793726,formattedLastUpdatedAt:"Nov 1, 2021",frontMatter:{title:"Keycloak JS SDK"},sidebar:"docs",previous:{title:"Keycloak \u672f\u8bed\u8868",permalink:"/notes/service/auth/keycloak/glossary"},next:{title:"KeyCloak LDAP",permalink:"/notes/service/auth/keycloak/ldap"}},o={},a=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"keycloak-js-sdk",children:"Keycloak JS SDK"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/keycloak/keycloak/tree/master/adapters/oidc/js/src/main/resources",children:"adapters/oidc/js/src/main/resources"})," \u662f\u4ec0\u4e48\uff1f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keycloak \u63d0\u4f9b\u7684 JS SDK"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301\u767b\u9646\u3001\u6ce8\u518c\u3001SSO \u68c0\u6d4b\u3001\u4e2a\u4eba\u4fe1\u606f URL\u3001\u81ea\u52a8\u5237\u65b0\u3001\u9000\u51fa\u767b\u9646\u7b49\u529f\u80fd"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["init \u53c2\u6570 \u7684 Typescript \u5b9a\u4e49\u6ca1\u6709 scope \u53c2\u6570\uff0c\u5b9e\u9645\u652f\u6301\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5fc5\u987b\u5728 init \u4e5f\u4f20\u5165\uff0c\u5426\u5219 checkSsoSilently \u4f1a\u4e22\u5931 scope"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const kc = Keycloak({\n    url: 'https://kc.example.com/auth',\n    realm: 'app',\n    clientId: 'app-web',\n  });\n}\nawait kc.init({\n  // onLoad: 'login-required', //  \u6bcf\u6b21\u8fdb\u884c\u5f3a\u5236\u767b\u9646\n  onLoad: 'check-sso', // iframe \u68c0\u6d4b\u767b\u9646\u72b6\u6001\n  // iframe sso \u91cd\u5b9a\u5411\u5730\u5740 - \u5c06 href postMessage \u5230\u4e3b window\n  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',\n  silentCheckSsoFallback: true, // \u672a\u767b\u9646\u65f6\u8fdb\u884c\u5f3a\u5236\u767b\u9646\n  // useNonce: true,\n  checkLoginIframe: true, // \u4f7f\u7528 iframe \u68c0\u6d4b\n  checkLoginIframeInterval: 30, // \u68c0\u6d4b\u95f4\u9694\n  enableLogging: process.env.NODE_ENV === 'development', // \u65e5\u5fd7\u8bb0\u5f55\n  // redirectUri: '' // \u91cd\u5b9a\u5411\u5730\u5740\n\n  responseMode: 'fragment', // \u901a\u8fc7 # \u8fd4\u56de\u72b6\u6001\n  // responseMode: 'query', // \u901a\u8fc7 ? \u8fd4\u56de\u72b6\u6001\n\n  flow: 'standard', // \u9ed8\u8ba4\n  responseType: 'code',\n  flow: 'implicit',\n  responseType: 'id_token token',\n  flow: 'hybrid',\n  responseType: 'code id_token token',\n\n  // timeSkew: 0 ,// \u5141\u8bb8\u7684\u65f6\u95f4\u503e\u659c\n  pkceMethod: 'S256', // \u5efa\u8bae - \u9ed8\u8ba4\u4e0d\u4f7f\u7528 pkce\n\n  scope: '', // \u5176\u4ed6 scope - \u7a7a\u683c\u5206\u5272\uff0c\u9ed8\u8ba4\u5305\u542b openid\n})\n// \u6388\u6743\u72b6\u6001\nkc.authenticated\n// token \u5982\u679c\u8fd8\u6709 45s \u5931\u6548\u5219\u5237\u65b0 token\nkc.updateToken(45)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="silent-check-sso.html"',children:'<html lang="zh">\n<body>\n<script>\n  parent.postMessage(location.href, location.origin)\n<\/script>\n</body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["check-sso\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["loginIframe.enable == true\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"setup login iframe"}),"\n",(0,i.jsx)(n.li,{children:"check login iframe"}),"\n",(0,i.jsxs)(n.li,{children:["silentCheckSsoRedirectUri\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6709 - checkSsoSilently"}),"\n",(0,i.jsx)(n.li,{children:"\u65e0 - doLogin"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["loginIframe.enable == false\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["silentCheckSsoRedirectUri\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6709 - checkSsoSilently"}),"\n",(0,i.jsx)(n.li,{children:"\u65e0 - doLogin"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["login-required\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"doLogin - kc.login"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["checkSsoSilently\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa iframe"}),"\n",(0,i.jsxs)(n.li,{children:["src=",(0,i.jsx)(n.code,{children:"kc.createLoginUrl({prompt: 'none', redirectUri: kc.silentCheckSsoRedirectUri})"})]}),"\n",(0,i.jsx)(n.li,{children:"\u63a5\u53d7 postMessage - \u5305\u542b\u7ed3\u679c \bhref"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u975e implicit \u53d6\u5230 token \u540e\u4f1a\u8bf7\u6c42 kc \u83b7\u53d6 access_token \u548c refresh_token"}),"\n",(0,i.jsxs)(n.li,{children:["standard\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"code, state, session_state, kc_action_status"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["implicit\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"access_token, token_type, id_token, state, session_state, expires_in, kc_action_status"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["hybrid\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"access_token, id_token, code, state, session_state, kc_action_status"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u5f02\u5e38\u53c2\u6570 - error, error_description, error_uri"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// loadUserProfile\n// token \u4e2d\u672c\u8eab\u643a\u5e26\u4e86\u4e2a\u4eba\u4fe1\u606f - profile \u4f1a\u8bf7\u6c42\u7528\u6237\u7684 account \u4fe1\u606f\ninterface KeycloakProfile {\n  id?: string;\n  username?: string;\n  email?: string;\n  firstName?: string;\n  lastName?: string;\n  enabled?: boolean;\n  emailVerified?: boolean;\n  totp?: boolean;\n  createdTimestamp?: number;\n  // \u6ce8\u610f - \u503c\u662f\u6570\u7ec4\n  attributes?: Record<string, string[]>;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},38088:(e,n,s)=>{var i=s(96651),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,t={},a=null,d=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,i)&&!o.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:a,ref:d,props:t,_owner:l.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>c});var i=s(96651);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);