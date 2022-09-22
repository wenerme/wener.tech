"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92302],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),k=l,f=m["".concat(s,".").concat(k)]||m[k]||c[k]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90770:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return d}});var a=r(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={title:"Kratos"},k="Kratos",f={unversionedId:"service/auth/kratos",id:"service/auth/kratos",title:"Kratos",description:"- ory/kratos \u662f\u4ec0\u4e48 ?",source:"@site/../notes/service/auth/kratos.md",sourceDirName:"service/auth",slug:"/service/auth/kratos",permalink:"/notes/service/auth/kratos",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/kratos.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"Kratos"},sidebar:"docs",previous:{title:"Louketo Proxy",permalink:"/notes/service/auth/keycloak/louketo-proxy"},next:{title:"LADP",permalink:"/notes/service/auth/ldap/"}},N={},d=[{value:"Flow",id:"flow",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"SDK",id:"sdk",level:2},{value:"Serve",id:"serve",level:2},{value:"Get Started",id:"get-started",level:2}],v={toc:d};function g(e){var t,r=e,{components:l}=r,p=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},v),p),n(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"kratos"}),"Kratos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/ory/kratos"}),"ory/kratos")," \u662f\u4ec0\u4e48 ?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"API first \u7528\u6237\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"Identity Infrastructure Service",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4 Identity and Access Management (IAM), Identity Management (IdM), Identity Provider (IP/IdP), Identity as a Service (IDaaS)"))),(0,a.kt)("li",{parentName:"ul"},"Username + Password -> Cookie, Token"),(0,a.kt)("li",{parentName:"ul"},"Email + Password -> Cookie, Token"),(0,a.kt)("li",{parentName:"ul"},"Passwordless login -> Cookie, Token"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5f53\u4f5c\u5e93\u6765\u4f7f\u7528"))),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u89e3\u51b3\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u51ed\u8bc1\u7ba1\u7406 - \u5bc6\u7801\u3001\u6062\u590d\u90ae\u7bb1\u3001\u5b89\u5168\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1 - \u5b89\u5168\u767b\u5f55\u3001\u4f1a\u8bdd\u3001\u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u4fe1\u606f\u7ba1\u7406 - profile\u3001\u90ae\u7bb1\u3001\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u7ba1\u7406 - CRUD"),(0,a.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u4fe1\u606f\u7ba1\u7406 - \u540d\u5b57\u3001\u7167\u7247\u3001\u751f\u65e5"))),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6d89\u53ca\u7b2c\u4e09\u65b9\u767b\u9646\uff0c\u5e0c\u671b\u767b\u9646\u540e\u62ff\u5230 Token"),(0,a.kt)("li",{parentName:"ul"},"Self-service Login and Registration"),(0,a.kt)("li",{parentName:"ul"},"Multi-Factor Authentication"),(0,a.kt)("li",{parentName:"ul"},"Account Verification"),(0,a.kt)("li",{parentName:"ul"},"Account Recovery"),(0,a.kt)("li",{parentName:"ul"},"Profile and Account Management"),(0,a.kt)("li",{parentName:"ul"},"Admin APIs")))),(0,a.kt)("admonition",c({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u6d4f\u89c8\u5668\u4f7f\u7528 API flow - \u4f7f\u7528 HTML ",(0,a.kt)("strong",{parentName:"li"},"form")),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301 MFA - \u591a\u56e0\u7d20\u9a8c\u8bc1 - \u4e0d\u652f\u6301\u77ed\u4fe1"),(0,a.kt)("li",{parentName:"ul"},"\u524d\u7aef\u9700\u8981\u81ea\u884c\u5b9e\u73b0\uff0c\u4f46\u76f8\u5bf9\u5bb9\u6613"))),(0,a.kt)("h2",c({},{id:"flow"}),"Flow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/registration/browser"))),(0,a.kt)("li",{parentName:"ul"},"\u767b\u9646",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/login/browser"))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u9500"),(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/self-service/verification/methods/link?token=${TOKEN}")))),(0,a.kt)("li",{parentName:"ul"},"User Settings"),(0,a.kt)("li",{parentName:"ul"},"Account Recovery"),(0,a.kt)("li",{parentName:"ul"},"Address Verification"),(0,a.kt)("li",{parentName:"ul"},"User-Facing Error"),(0,a.kt)("li",{parentName:"ul"},"2FA / MFA")),(0,a.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u5bc6\u7801\u53c2\u6570\nkratos hashers argon2 calibrate 1s\n")),(0,a.kt)("h2",c({},{id:"sdk"}),"SDK"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.ory.sh/kratos/docs/reference/api/"}),"REST API")),(0,a.kt)("li",{parentName:"ul"},"Go ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/ory/kratos-client-go"}),"client")),(0,a.kt)("li",{parentName:"ul"},"Admin",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4fe1\u606f\u63a5\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/health/alive"),(0,a.kt)("li",{parentName:"ul"},"/health/ready"),(0,a.kt)("li",{parentName:"ul"},"/metrics/prometheus"))),(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u63a5\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/identities"),(0,a.kt)("li",{parentName:"ul"},"/recovery/link"))))),(0,a.kt)("li",{parentName:"ul"},"Public",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/schemas/{id}"),(0,a.kt)("li",{parentName:"ul"},"/self-service/browser/flows/logout"),(0,a.kt)("li",{parentName:"ul"},"/self-service/browser/flows/registration/strategies/oidc/settings/connections"),(0,a.kt)("li",{parentName:"ul"},"/self-service/errors?error=string"),(0,a.kt)("li",{parentName:"ul"},"/version"),(0,a.kt)("li",{parentName:"ul"},"\u767b\u9646/login \u6d41\u7a0b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/login/browser - \u521d\u59cb\u5316\u6d4f\u89c8\u5668\u767b\u9646\u6d41\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"/self-service/login/api - \u521d\u59cb\u5316 API \u767b\u9646\u6d41\u7a0b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u6d4f\u89c8\u5668\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e \u79fb\u52a8\u8bbe\u5907\uff0c\u667a\u80fd\u7535\u89c6 \u7b49"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/self-service/login/flows?flow=string")," - \u83b7\u53d6\u6ce8\u518c\u6d41\u7a0b\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/self-service/login/methods/password?flow=string")," - \u5b8c\u6210\u5bc6\u7801\u767b\u9646\u6d41\u7a0b"))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c/registration \u6d41\u7a0b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/registration/browser"),(0,a.kt)("li",{parentName:"ul"},"/self-service/registration/api"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/self-service/registration/flows?flow=string")),(0,a.kt)("li",{parentName:"ul"},"/self-service/registration/methods/password"))),(0,a.kt)("li",{parentName:"ul"},"\u6062\u590d/recovery \u6d41\u7a0b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/recovery/browser"),(0,a.kt)("li",{parentName:"ul"},"/self-service/recovery/api"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/self-service/recovery/flows?id=string")),(0,a.kt)("li",{parentName:"ul"},"/self-service/recovery/methods/link"))),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e/setting",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/settings/api"),(0,a.kt)("li",{parentName:"ul"},"/self-service/settings/browser/flows"),(0,a.kt)("li",{parentName:"ul"},"/self-service/settings/flows?id=string"),(0,a.kt)("li",{parentName:"ul"},"/self-service/settings/methods/password - \u4fee\u6539\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"/self-service/settings/methods/profile - \u4fee\u6539\u4fe1\u606f"))),(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1/verification",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/self-service/verification/api"),(0,a.kt)("li",{parentName:"ul"},"/self-service/verification/browser"),(0,a.kt)("li",{parentName:"ul"},"/self-service/verification/flows?id=string"),(0,a.kt)("li",{parentName:"ul"},"/self-service/verification/methods/link"))),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u7ba1\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DELETE /sessions - ",(0,a.kt)("inlineCode",{parentName:"li"},'{"session_token": "string"}')),(0,a.kt)("li",{parentName:"ul"},"GET /sessions/whoami")))))),(0,a.kt)("h2",c({},{id:"serve"}),"Serve"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"export DSN=sqlite:///tmp/kratos.sqlite?_fk=true\n./kratos -c ./contrib/quickstart/kratos/email-password migrate sql -e --yes\nLOG_LEVEL=trace ./kratos serve -c /etc/config/kratos/kratos.yml --dev\n")),(0,a.kt)("h2",c({},{id:"get-started"}),"Get Started"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ory/kratos.git\ncd kratos\n# \u5207\u6362\u5230\u6700\u65b0\u7248\u672c\ngit checkout v0.5.4-alpha.1\n\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\n# 4455 - http://github.com/ory/kratos-selfservice-ui-node\n# 4433 - Kratos Public API\n# 4434 - Kratos Admin API\n# 4436 - https://github.com/mailslurper - \u5f00\u53d1\u7528\u7684 SMTP \u670d\u52a1\u5668\n# \u5165\u53e3 http://127.0.0.1:4455/dashboard\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n\n# \u6e05\u7406\ndocker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -fsv\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/dashboard -> /auth/login",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u672a\u767b\u5f55\u91cd\u5b9a\u5411"))),(0,a.kt)("li",{parentName:"ul"},"/auth/login -> ",(0,a.kt)("a",c({parentName:"li"},{href:"http://127.0.0.1:4433/self-service/login/browser"}),"http://127.0.0.1:4433/self-service/login/browser"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65e0 flowid \u91cd\u5b9a\u5411"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e cookie csrf_token"))),(0,a.kt)("li",{parentName:"ul"},"-> ",(0,a.kt)("inlineCode",{parentName:"li"},"/auth/login?flow=<flow_id>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u663e\u793a\u767b\u9646"))),(0,a.kt)("li",{parentName:"ul"},"-> ",(0,a.kt)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/login/flows?id=<flow_id>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8868\u5355\u63d0\u4ea4")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u767b\u9646\u4fe1\u606f\ncurl -s "http://127.0.0.1:4434/self-service/login/flows?id=<flow_id>" | jq\n\n# \u6ce8\u518c\u4fe1\u606f\ncurl -s "http://127.0.0.1:4434/self-service/registration/flows?id=<flow_id>" | jq\n')))}g.isMDXComponent=!0}}]);