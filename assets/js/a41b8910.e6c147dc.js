/*! For license information please see a41b8910.e6c147dc.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57331],{58759:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=s(11527),t=s(47214);const o={tags:["Configuration"]},a="NATS Conf",i={id:"queue/nats/nats-conf",title:"NATS Conf",description:"- https://docs.nats.io/running-a-nats-service/configuration",source:"@site/../notes/queue/nats/nats-conf.md",sourceDirName:"queue/nats",slug:"/queue/nats/conf",permalink:"/notes/queue/nats/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"Client",permalink:"/notes/queue/nats/client"},next:{title:"NATS Design",permalink:"/notes/queue/nats/design"}},c={},u=[{value:"nats-server.conf",id:"nats-serverconf",level:2},{value:"leaf",id:"leaf",level:2},{value:"Auth",id:"auth",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"nats-conf",children:"NATS Conf"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.nats.io/running-a-nats-service/configuration",children:"https://docs.nats.io/running-a-nats-service/configuration"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"nats-serverconf",children:"nats-server.conf"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-conf",children:"# Client port of 4222 on all interfaces\nport: 4222\n\n# HTTP monitoring port\nmonitor_port: 8222\n\n# NSC \u751f\u6210\u7684 Operator JWT\noperator: $HOME/.nsc/nats/O/O.jwt\n# Account Server\nresolver: URL(http://localhost:9090/jwt/v1/accounts/)\n\n# This is for clustering multiple servers together.\ncluster {\n\n  # Route connections to be received on any interface on port 6222\n  port: 6222\n\n  # Routes are protected, so need to use them with --routes flag\n  # e.g. --routes=nats-route://ruser:T0pS3cr3t@otherdockerhost:6222\n  authorization {\n    user: ruser\n    password: T0pS3cr3t\n    timeout: 2\n  }\n\n  # Routes are actively solicited and connected to from this server.\n  # This Docker image has none by default, but you can pass a\n  # flag to the gnatsd docker image to create one to an existing server.\n  routes = []\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"leaf",children:"leaf"}),"\n",(0,r.jsx)(e.h2,{id:"auth",children:"Auth"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"nats \u901a\u8fc7 account \u5b9e\u73b0\u79df\u6237\u9694\u79bb"}),"\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528 account \u9700\u8981\u8bbe\u7f6e auth"}),"\n",(0,r.jsxs)(e.li,{children:["\u8ba4\u8bc1\u65b9\u5f0f\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"token - \u53ef\u4ee5\u914d\u7f6e\u660e\u6587\u6216 bcrypt \u52a0\u5bc6\u7684 token"}),"\n",(0,r.jsx)(e.li,{children:"user+password - \u5bc6\u7801\u652f\u6301 bcrypt \u52a0\u5bc6"}),"\n",(0,r.jsx)(e.li,{children:"tls"}),"\n",(0,r.jsx)(e.li,{children:"nkey"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6388\u6743\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"publish"}),"\n",(0,r.jsx)(e.li,{children:"subscribe"}),"\n",(0,r.jsx)(e.li,{children:"allow_responses - max,expires"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://docs.nats.io/running-a-nats-service/configuration/securing_nats/auth_intro/jwt/resolver",children:"Account lookup using Resolver"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5b9e\u9645\u5904\u7406\u903b\u8f91 ",(0,r.jsx)(e.a,{href:"https://github.com/nats-io/nats-account-server/blob/69cb476d18a0194c6a59866b642fdee295db6a55/server/core/jwthandler.go#L137-L139",children:"https://github.com/nats-io/nats-account-server/blob/69cb476d18a0194c6a59866b642fdee295db6a55/server/core/jwthandler.go#L137-L139"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"nats server passwd -p 123456\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-hcl",children:'authorization {\n  default_permissions = {\n    publish = "SANDBOX.*"\n    subscribe = ["PUBLIC.>", "_INBOX.>"]\n  }\n  ADMIN = {\n    publish = ">"\n    subscribe = ">"\n  }\n  REQUESTOR = {\n    publish = ["req.a", "req.b"]\n    subscribe = "_INBOX.>"\n  }\n  RESPONDER = {\n    subscribe = ["req.a", "req.b"]\n    publish = "_INBOX.>"\n  }\n  users = [\n    {user: admin,   password: $ADMIN_PASS, permissions: $ADMIN}\n    {user: client,  password: $CLIENT_PASS, permissions: $REQUESTOR}\n    {user: service,  password: $SERVICE_PASS, permissions: $RESPONDER}\n    {user: other, password: $OTHER_PASS}\n    {\n      user: test\n      password: test\n      permissions: {\n          publish: {\n              deny: ">"\n          },\n          subscribe: {\n              allow: "client.>"\n          }\n      }\n    }\n    { user: b, password: b, permissions: {subscribe: "q", allow_responses: true } },\n    { user: c, password: c, permissions: {subscribe: "q", allow_responses: { max: 5, expires: "1m" } } }\n  ]\n}\n\naccounts: {\n  A: {\n    users: [\n      {user: a, password: a}\n    ]\n    exports: [\n      {stream: puba.>}\n      {service: pubq.>}\n      {stream: b.>, accounts: [B]}\n      {service: q.b, accounts: [B]}\n    ]\n  },\n  B: {\n    users: [\n      {user: b, password: b}\n    ]\n    imports: [\n      {stream: {account: A, subject: b.>}}\n      {service: {account: A, subject: q.b}}\n    ]\n  },\n  C: {\n    users: [\n      {user: c, password: c}\n    ]\n    imports: [\n      {stream: {account: A, subject: puba.>}, prefix: from_a}\n      {service: {account: A, subject: pubq.C}, to: Q}\n    ]\n  }\n}\nno_auth_user: a\n'})})]})}function d(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},3354:(n,e,s)=>{var r=s(50959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(n,e,s){var r,o={},u=null,l=null;for(r in void 0!==s&&(u=""+s),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)a.call(e,r)&&!c.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:t,type:n,key:u,ref:l,props:o,_owner:i.current}}e.Fragment=o,e.jsx=u,e.jsxs=u},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>a});var r=s(50959);const t={},o=r.createContext(t);function a(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);