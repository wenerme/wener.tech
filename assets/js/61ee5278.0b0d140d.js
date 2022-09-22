"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91125],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"FedCM"},c="FedCM",p={unversionedId:"web/spec/fedcm",id:"web/spec/fedcm",title:"FedCM",description:"- https://fedidcg.github.io/FedCM/",source:"@site/../notes/web/spec/fedcm.md",sourceDirName:"web/spec",slug:"/web/spec/fedcm",permalink:"/notes/web/spec/fedcm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/spec/fedcm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"FedCM"},sidebar:"docs",previous:{title:"ESM",permalink:"/notes/web/spec/esm"},next:{title:"HTML",permalink:"/notes/web/spec/html"}},u={},s=[],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fedcm"},"FedCM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fedidcg.github.io/FedCM/"},"https://fedidcg.github.io/FedCM/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Chrome 105"),(0,o.kt)("li",{parentName:"ul"},"WebID"),(0,o.kt)("li",{parentName:"ul"},"\u7531\u6d4f\u89c8\u5668\u8fdb\u884c oauth \u64cd\u4f5c"),(0,o.kt)("li",{parentName:"ul"},"/.well-known/web-identity -> provider_urls"),(0,o.kt)("li",{parentName:"ul"},"IdentityCredential"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials"},"navigator.credentials"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://w3c.github.io/webappsec-credential-management"},"Credential Management")),(0,o.kt)("li",{parentName:"ul"},"Chrome 51+, Safari 13"),(0,o.kt)("li",{parentName:"ul"},"mdn ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential"},"FederatedCredential"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    <title>Welcome to my Website</title>\n  </head>\n  <body>\n    <button onclick=\"login()\">Login with idp.example</button>\n\n    <script>\n      async function login() {\n        // IdentityCredential\n        // <code data-opaque bs-autolink-syntax='`token`'>token</code>\n        return await navigator.credentials.get({\n          mediation: 'optional', // \u9ed8\u8ba4\u4e3a optional\n          // \u65b0\u589e\n          identity: {\n            providers: [\n              {\n                configURL: 'https://idp.example/manifest.json',\n                clientId: '123',\n                nonce: random(), //\n              },\n            ],\n          },\n        });\n      }\n    <\/script>\n  </body>\n</html>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accounts_endpoint": "",\n  "client_metadata_endpoint": "",\n  "id_token_endpoint": "",\n  "branding": {\n    "background_color": "",\n    "color": "",\n    "icons": [{"url": "", "size": 32}]\n  }\n}\n')),(0,o.kt)("p",null,"Accounts List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accounts": [\n    {\n      "id": "",\n      "name": "",\n      "email": "",\n      "given_name": "",\n      "picture": "",\n      "approved_clients": [""]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Client Metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "privacy_policy_url": "https://rp.example/clientmetadata/privacy_policy.html",\n  "terms_of_service_url": "https://rp.example/clientmetadata/terms_of_service.html"\n}\n')),(0,o.kt)("p",null,"ID Token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"POST /fedcm_token_endpoint HTTP/1.1\nHost: idp.example\nReferer: https://rp.example/\nContent-Type: application/x-www-form-urlencoded\nCookie: 0x23223\nSec-FedCM-CSRF: ?1\naccount_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u6d4f\u89c8\u5668\u53d1\u8d77\u7684\u8bf7\u6c42\u90fd\u4f1a\u5e26\u4e0a Sec-FedCM-CSRF")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token" : "JWT"\n}\n')))}m.isMDXComponent=!0}}]);