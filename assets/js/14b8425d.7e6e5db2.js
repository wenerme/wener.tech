/*! For license information please see 14b8425d.7e6e5db2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7616],{91642:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(11527),r=i(47214);const l={title:"Service Mesh"},c="Service Mesh",t={id:"devops/service/servicemesh",title:"Service Mesh",description:"- Observability, Security, Reliability",source:"@site/../notes/devops/service/servicemesh.md",sourceDirName:"devops/service",slug:"/devops/service/servicemesh",permalink:"/notes/devops/service/servicemesh",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/service/servicemesh.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633617108,formattedLastUpdatedAt:"Oct 7, 2021",frontMatter:{title:"Service Mesh"},sidebar:"docs",previous:{title:"Service governance",permalink:"/notes/devops/service/governance"},next:{title:"SRE",permalink:"/notes/devops/sre"}},h={},d=[{value:"Notes",id:"notes",level:2},{value:"SMI",id:"smi",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"service-mesh",children:"Service Mesh"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Observability, Security, Reliability"}),"\n",(0,s.jsxs)(n.li,{children:["Why\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7edf\u4e00\u5904\u7406 \u6a2a\u5207\u5173\u6ce8\u70b9/",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cross-cutting_concern",children:"Cross-cutting_concern"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e AOP \u7684\u5207\u9762"}),"\n",(0,s.jsx)(n.li,{children:"Service Mesh \u5904\u7406\u6240\u6709\u670d\u52a1\u4e4b\u95f4\u7684\u5207\u9762"}),"\n",(0,s.jsx)(n.li,{children:"\u6d41\u91cf\u76d1\u63a7, HTTP \u5f02\u5e38\u76d1\u63a7"}),"\n",(0,s.jsx)(n.li,{children:"mTLS"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u5feb\u901f\u8fed\u4ee3 - \u63a5\u53e3/\u670d\u52a1\u4f5c\u4e3a\u4ea7\u54c1\u5feb\u901f\u8fdb\u5165\u5e02\u573a"}),"\n",(0,s.jsxs)(n.li,{children:["\u5904\u7406 ",(0,s.jsx)(n.strong,{children:"\u670d\u52a1\u4e4b\u95f4"})," / ",(0,s.jsx)(n.strong,{children:"\u5916\u90e8"})," \u901a\u4fe1"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Why not\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e26\u6765\u989d\u5916\u7684\u5ef6\u8fdf"}),"\n",(0,s.jsx)(n.li,{children:"\u590d\u6742\u7684\u8fd0\u7ef4\u90e8\u7f72"}),"\n",(0,s.jsx)(n.li,{children:"sidecar \u8017\u8d39\u989d\u5916\u7684\u8d44\u6e90"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["When\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u540c\u6b65\u901a\u4fe1\u573a\u666f"}),"\n",(0,s.jsx)(n.li,{children:"\u4ea7\u54c1\u662f API/\u670d\u52a1/\u63a5\u53e3"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u529f\u80fd/\u76ee\u7684/CCC\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8def\u7531\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,s.jsx)(n.li,{children:"\u767e\u5206\u6bd4\u6d41\u91cf\u5207\u5206"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e \u5934/\u8def\u7531 \u6d41\u91cf\u5207\u5206"}),"\n",(0,s.jsx)(n.li,{children:"\u4ee3\u7406"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6d41\u91cf\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bbf\u95ee\u63a7\u5236"}),"\n",(0,s.jsx)(n.li,{children:"\u6d41\u91cf\u5207\u5206"}),"\n",(0,s.jsx)(n.li,{children:"\u6d41\u91cf\u89c4\u683c\u5b9a\u4e49"}),"\n",(0,s.jsx)(n.li,{children:"\u6d41\u91cf\u6307\u6807"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u76d1\u63a7\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bbf\u95ee\u65e5\u5fd7"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/#xref_monitoring_golden-signals",children:"\u9ec4\u91d1\u6307\u6807"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5ef6\u8fdf\u3001\u6d41\u91cf\u3001\u9519\u8bef\u3001\u9971\u548c"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u8def\u7531\u7ea7\u76d1\u63a7"}),"\n",(0,s.jsxs)(n.li,{children:["\u8ddf\u8e2a\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Jaeger, Zipkin, OpenCensus, OpenTracing"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f39\u6027\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7194\u65ad"}),"\n",(0,s.jsx)(n.li,{children:"\u91cd\u8bd5\u548c\u8d85\u65f6"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e\u8def\u5f84\u7684\u91cd\u8bd5\u548c\u8d85\u65f6"}),"\n",(0,s.jsx)(n.li,{children:"\u9519\u8bef\u6ce8\u5165"}),"\n",(0,s.jsx)(n.li,{children:"\u5ef6\u8fdf\u6ce8\u5165"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5b89\u5168\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"mTLS"}),"\n",(0,s.jsx)(n.li,{children:"CA \u8bc1\u4e66\u7ba1\u7406/\u96c6\u6210"}),"\n",(0,s.jsx)(n.li,{children:"\u9274\u6743\u89c4\u5219"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8fde\u63a5\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u96c6\u7fa4\u3001VM\u3001\u5bb9\u5668"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7ec4\u6210\u90e8\u5206\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"control plane"}),"\n",(0,s.jsx)(n.li,{children:"data plane"}),"\n",(0,s.jsx)(n.li,{children:"proxy"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Traffic Shiffting\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Istio ",(0,s.jsx)(n.a,{href:"https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/",children:"Traffic Shifting"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://layer5.io/service-mesh-landscape/",children:"Service Mesh Landscape"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://servicemesh.es/",children:"Service Mesh Comparison"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://flagger.app/",children:"flagger"})," - Progressive Delivery Operator for Kubernetes\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Canary - progressive traffic shifting"}),"\n",(0,s.jsx)(n.li,{children:"A/B Testing - HTTP headers and cookies traffic routing"}),"\n",(0,s.jsx)(n.li,{children:"Blue/Green - traffic switching and mirroring"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6ce8\u610f \u26a0\ufe0f - \u76ee\u524d=2020\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"istio \u662f\u76ee\u524d\u529f\u80fd\u6700\u4e3a\u5b8c\u5584\u7684 service mesh\uff0c\u4f46\u4f53\u79ef\u548c\u8d44\u6e90\u5360\u7528\u4e5f\u662f\u76f8\u5f53\u53ef\u89c2"}),"\n",(0,s.jsx)(n.li,{children:"linkerd2 \u662f\u76ee\u524d\u6781\u4e3a\u8f7b\u91cf\uff0c\u4fb5\u5165\u6027\u6781\u5c0f\uff0c\u529f\u80fd\u6709\u9650\u4f46\u80fd\u4e0a\u751f\u4ea7\u7684\u7684 service mesh"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5fae\u670d\u52a1\u7684 observability, reliability, security"}),"\n",(0,s.jsx)(n.li,{children:"Service Mesh \u7684\u7ed3\u6784\u90fd\u662f CP+DP"}),"\n",(0,s.jsx)(n.li,{children:"DP \u4e3a\u5e94\u7528\u7684 Sidecar"}),"\n",(0,s.jsxs)(n.li,{children:["Service Mesh \u5c31\u662f\u5c06\u5e94\u7528\u901a\u4fe1\u7f51\u7edc\u5c42\u7684\u57fa\u7840\u529f\u80fd\u62bd\u8c61\u4e3a DP\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u53d1\u73b0 - \u5982\u4f55\u8bf7\u6c42 \u670d\u52a1 A"}),"\n",(0,s.jsx)(n.li,{children:"\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.li,{children:"\u8ddf\u8e2a"}),"\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"\u6307\u6807\u76d1\u63a7"}),"\n",(0,s.jsx)(n.li,{children:"\u4f8b\u5982 dubbo RPC \u4e2d\u5173\u4e8e\u5ba2\u6237\u7aef\u4e0e\u6ce8\u518c\u4e2d\u5fc3\u901a\u4fe1\u8fd9\u90e8\u5206\u529f\u80fd"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u91cd"})," \u5ba2\u6237\u7aef\u5230 \u8f7b\u5ba2\u6237\u7aef\u7684\u8fc7\u7a0b"]}),"\n",(0,s.jsxs)(n.li,{children:["Service Mesh \u7684 Service \u662f\u5e94\u7528\u7eac\u5ea6\uff0c\u4e0d\u662f ",(0,s.jsx)(n.code,{children:"me.wener.test.PingService"})," \u8fd9\u6837\u7684\u63a5\u53e3\u7eac\u5ea6"]}),"\n",(0,s.jsx)(n.li,{children:"\u9762\u5411 Service \u66f4\u50cf\u662f\u9762\u5411 Dataplane"}),"\n",(0,s.jsx)(n.li,{children:"\u8981\u6c42\u5e73\u5766\u7684\u7f51\u7edc\u7ed3\u6784 - \u8282\u70b9\u4e92\u901a"}),"\n",(0,s.jsx)(n.li,{children:"Dataplane \u7c7b\u4f3c\u4e00\u4e2a\u8282\u70b9\u7684\u7f51\u5173\uff0c\u5904\u7406\u6240\u6709\u7684\u51fa\u5165\u6d41\u91cf"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"smi",children:"SMI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://smi-spec.io/",children:"Service Mesh Interface"})," / ",(0,s.jsx)(n.a,{href:"https://github.com/servicemeshinterface/smi-spec",children:"servicemeshinterface/smi-spec"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Traffic Access Control - \u8bbf\u95ee\u63a7\u5236"}),"\n",(0,s.jsx)(n.li,{children:"Traffic Metrics - \u6307\u6807"}),"\n",(0,s.jsx)(n.li,{children:"Traffic Specs"}),"\n",(0,s.jsx)(n.li,{children:"Traffic Split - \u6d41\u91cf\u5207\u5206"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kind: TrafficSplit\nmetadata:\n  name: canary\nspec:\n  # The root service that clients use to connect to the destination application.\n  service: website\n  # Services inside the namespace with their own selectors, endpoints and configuration.\n  backends:\n    - service: website-v1\n      weight: 90\n    - service: website-v2\n      weight: 10\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},3354:(e,n,i)=>{var s=i(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var s,l={},d=null,o=null;for(s in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,s)&&!h.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:o,props:l,_owner:t.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},11527:(e,n,i)=>{e.exports=i(3354)},47214:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>c});var s=i(50959);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);