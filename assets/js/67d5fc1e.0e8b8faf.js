/*! For license information please see 67d5fc1e.0e8b8faf.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78311],{30674:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(11527),i=t(47214);const r={title:"NATS Service",tags:["Microservices","RPC"]},o="NATS Service",a={id:"queue/nats/nats-service",title:"NATS Service",description:"- https://github.com/nats-io/nats.deno/blob/main/nats-base-client/service.ts",source:"@site/../notes/queue/nats/nats-service.md",sourceDirName:"queue/nats",slug:"/queue/nats/service",permalink:"/notes/queue/nats/service",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-service.md",tags:[{label:"Microservices",permalink:"/notes/tags/microservices"},{label:"RPC",permalink:"/notes/tags/rpc"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1704307832,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"NATS Service",tags:["Microservices","RPC"]},sidebar:"docs",previous:{title:"nats-server",permalink:"/notes/queue/nats/server"},next:{title:"Nats Version",permalink:"/notes/queue/nats/version"}},c={},d=[];function h(n){const e={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"nats-service",children:"NATS Service"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"$SRV.<operation>\n$SRV.<operation>.<service_name>\n$SRV.<operation>.<service_name>.<service_id>\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats.deno/blob/main/nats-base-client/service.ts",children:"https://github.com/nats-io/nats.deno/blob/main/nats-base-client/service.ts"})}),"\n",(0,s.jsxs)(e.li,{children:["\u6807\u51c6\u64cd\u4f5c\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"$SRV.PING|STATS|INFO"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"operation=method"}),"\n",(0,s.jsx)(e.li,{children:"Group=\u76f8\u540c\u7684\u524d\u7f00"}),"\n",(0,s.jsxs)(e.li,{children:["headers\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Nats-Service-Error - \u5b57\u7b26\u4e32\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.li,{children:"Nats-Service-Error-Code - \u6570\u5b57"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// io.nats.micro.v1.info_response\ntype InfoResponse = {\n  type: string;\n  name: string;\n  id: string;\n  version: string;\n  metadata: Record<string, string>;\n  /**\n   * Description for the service\n   */\n  description: string;\n  /**\n   * An array of info for all service endpoints\n   */\n  endpoints: EndpointInfo[];\n};\ntype EndpointInfo = {\n  /**\n   * The name of the endpoint\n   */\n  name: string;\n  /**\n   * The subject on which the endpoint is listening.\n   */\n  subject: string;\n  /**\n   * Queue group to which this endpoint is assigned to\n   */\n  queue_group: string;\n  /**\n   * Metadata of a specific endpoint\n   */\n  metadata: Record<string, string>;\n};\n\n// io.nats.micro.v1.ping_response\ntype PingResponse = {\n  type: string;\n  name: string;\n  id: string;\n  version: string;\n  metadata: Record<string, string>;\n};\n\n// io.nats.micro.v1.stats_response\ntype StatsResponse = {\n  type: string;\n  name: string;\n  id: string;\n  version: string;\n  metadata: Record<string, string>;\n  /**\n   * Individual endpoint stats\n   */\n  endpoints: EndpointStats[];\n  /**\n   * ISO Date string when the service started in UTC timezone\n   */\n  started: string;\n};\n\ntype EndpointStats = {\n  /**\n   * The name of the endpoint\n   */\n  name: string;\n  /**\n   * The subject on which the endpoint is listening.\n   */\n  subject: string;\n  /**\n   * Queue group to which this endpoint is assigned to\n   */\n  queue_group: string;\n  /**\n   * The number of requests received by the endpoint\n   */\n  num_requests: number;\n  /**\n   * Number of errors that the endpoint has raised\n   */\n  num_errors: number;\n  /**\n   * If set, the last error triggered by the endpoint\n   */\n  last_error?: Error;\n  /**\n   * A field that can be customized with any data as returned by stats handler see {@link ServiceConfig}\n   */\n  data?: unknown;\n  /**\n   * Total processing_time for the service\n   */\n  processing_time: Nanos;\n  /**\n   * Average processing_time is the total processing_time divided by the num_requests\n   */\n  average_processing_time: Nanos;\n};\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Service API ",(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats-architecture-and-design/blob/main/adr/ADR-32.md",children:"ADR-32"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats-architecture-and-design/issues/220",children:"https://github.com/nats-io/nats-architecture-and-design/issues/220"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats-architecture-and-design/issues/206",children:"https://github.com/nats-io/nats-architecture-and-design/issues/206"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats-architecture-and-design/issues/184",children:"https://github.com/nats-io/nats-architecture-and-design/issues/184"})}),"\n",(0,s.jsxs)(e.li,{children:["multiple endpoints on services  ",(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats-architecture-and-design/issues/187",children:"#187"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/nats-io/nats.go/blob/main/micro/README.md",children:"https://github.com/nats-io/nats.go/blob/main/micro/README.md"})}),"\n"]})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},3354:(n,e,t)=>{var s=t(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var s,r={},d=null,h=null;for(s in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(h=e.ref),e)o.call(e,s)&&!c.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:i,type:n,key:d,ref:h,props:r,_owner:a.current}}e.Fragment=r,e.jsx=d,e.jsxs=d},11527:(n,e,t)=>{n.exports=t(3354)},47214:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var s=t(50959);const i={},r=s.createContext(i);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);