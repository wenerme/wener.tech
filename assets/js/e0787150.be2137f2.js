/*! For license information please see e0787150.be2137f2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87611],{81025:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var l=i(11527),s=i(47214);const r={title:"Loki"},t="Loki",c={id:"service/observability/logging/loki",title:"Loki",description:"- grafana/loki \u662f\u4ec0\u4e48 ?",source:"@site/../notes/service/observability/logging/loki.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/loki",permalink:"/notes/service/observability/logging/loki",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/logging/loki.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646204158,formattedLastUpdatedAt:"Mar 2, 2022",frontMatter:{title:"Loki"},sidebar:"docs",previous:{title:"logging-operator",permalink:"/notes/service/observability/logging/operator"},next:{title:"qryn",permalink:"/notes/service/observability/logging/qryn"}},o={},h=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"collector",id:"collector",level:2},{value:"fluentbit",id:"fluentbit",level:3},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2}];function a(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"loki",children:"Loki"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/grafana/loki",children:"grafana/loki"})," \u662f\u4ec0\u4e48 ?\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"AGPL-3.0, Go"}),"\n",(0,l.jsx)(e.li,{children:"\u65e5\u5fd7\u754c\u7684 Prometheus"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/architecture/",children:"Architecture"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u65e5\u5199\u5165 < 100GB \u8003\u8651\u90e8\u7f72\u5355\u4f53\u670d\u52a1\u5373\u53ef"}),"\n",(0,l.jsx)(e.li,{children:"\u5355\u4f53\u670d\u52a1\u4e5f\u53ef\u4ee5\u591a\u63a5\u70b9\u6269\u5bb9"}),"\n",(0,l.jsx)(e.li,{children:"\u5fae\u670d\u52a1\u6a21\u5f0f\u7ef4\u62a4\u8d77\u6765\u66f4\u9ebb\u70e6"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/overview/comparisons/",children:"vs. EFK"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/blog/2020/05/12/an-only-slightly-technical-introduction-to-loki-the-prometheus-inspired-open-source-logging-system/",children:"An introduction to Loki, the Prometheus-inspired open source logging system"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/overview/comparisons/",children:"Loki compared to other log systems"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/configuration/",children:"https://grafana.com/docs/loki/latest/configuration/"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"collector",children:"collector"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/clients/",children:"https://grafana.com/docs/loki/latest/clients/"})}),"\n",(0,l.jsx)(e.li,{children:"Promtail"}),"\n",(0,l.jsx)(e.li,{children:"FluentD & Fluent-bit"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"fluentbit",children:"fluentbit"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/clients/fluentbit/",children:"out_loki"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/grafana/loki/tree/master/cmd/fluent-bit",children:"https://github.com/grafana/loki/tree/master/cmd/fluent-bit"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5b58\u50a8",children:"\u5b58\u50a8"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6cbf\u7528 cortex \u903b\u8f91\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f5c\u8005\u90fd\u662f tomwilkie"}),"\n",(0,l.jsx)(e.li,{children:"distributor, ingester, querier, chunk"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/operations/storage/",children:"Loki Storage"})}),"\n",(0,l.jsx)(e.li,{children:"writes a chunk per stream"}),"\n",(0,l.jsx)(e.li,{children:"chunk_target_size (around 1MB), max_chunk_age (increase beyond 1h), chunk_idle_period (increase to match max_chunk_age)"}),"\n",(0,l.jsxs)(e.li,{children:["index - range -> chunkids\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["BoltDB Shipper - \u672c\u5730\u548c\u8fdc\u7a0b\u540c\u6b65 - \u4f9d\u8d56\u5bf9\u8c61\u5b58\u50a8\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"24h \u5468\u671f\u7d22\u5f15\u65f6\u5de5\u4f5c\u6700\u597d"}),"\n",(0,l.jsx)(e.li,{children:"\u7c7b\u4f3c\u4e8e Thanos"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"Apache Cassandra - \u517c\u5bb9 scylladb"}),"\n",(0,l.jsx)(e.li,{children:"Amazon DynamoDB"}),"\n",(0,l.jsx)(e.li,{children:"Google Bigtable"}),"\n",(0,l.jsx)(e.li,{children:"BoltDB - \u5355\u673a"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["chunk - chunkid -> blob\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Apache Cassandra"}),"\n",(0,l.jsxs)(e.li,{children:["Amazon S3\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6743\u9650\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"s3:ListBucket"}),"\n",(0,l.jsx)(e.li,{children:"s3:PutObject"}),"\n",(0,l.jsx)(e.li,{children:"s3:GetObject"}),"\n",(0,l.jsx)(e.li,{children:"s3:DeleteObject - Single Store (boltdb-shipper) compactor"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Filesystem - \u5355\u673a\uff0c\u9664\u975e NFS - NFS \u4f53\u9a8c\u4e0d\u597d\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5355\u76ee\u5f55\u6700\u591a 5.5m ",(0,l.jsx)(e.a,{href:"https://github.com/grafana/loki/issues/1502",children:"#1502"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"Amazon DynamoDB"}),"\n",(0,l.jsx)(e.li,{children:"Google Bigtable"}),"\n",(0,l.jsx)(e.li,{children:"Google Cloud Storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7ec4\u4ef6",children:"\u7ec4\u4ef6"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://grafana.com/docs/loki/latest/architecture/#components",children:"Components"})}),"\n",(0,l.jsxs)(e.li,{children:["Distributor\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Hashing\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Consul"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"Quorum consistency"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Ingester\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u72b6\u6001 - PENDING, JOINING, ACTIVE, LEAVING, UNHEALTHY"}),"\n",(0,l.jsx)(e.li,{children:"Handoff"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Query frontend\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53ef\u9009\uff0c\u65e0\u72b6\u6001\u67e5\u8be2\u7f13\u5b58"}),"\n",(0,l.jsx)(e.li,{children:"\u961f\u5217"}),"\n",(0,l.jsx)(e.li,{children:"\u62c6\u5206"}),"\n",(0,l.jsx)(e.li,{children:"\u7f13\u5b58"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Querier\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5904\u7406 LogQL - \u67e5\u8be2\u5206\u53d1"}),"\n",(0,l.jsx)(e.li,{children:"\u53bb\u91cd"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u8bfb\u53d6\u8def\u5f84\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"querier \u63a5\u6536\u5230 HTTP \u8bf7\u6c42"}),"\n",(0,l.jsx)(e.li,{children:"querier \u5c06\u67e5\u8be2\u4f20\u9012\u7ed9 ingesters \u5904\u7406\u5185\u5b58\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"ingesters \u63a5\u6536\u5230\u8bfb\u53d6\u8bf7\u6c42\u8fd4\u56de\u5339\u914d\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"querier \u4ece backing store \u61d2\u52a0\u8f7d\u6570\u636e - \u5982\u679c ingesters \u672a\u8fd4\u56de\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"querier \u4fbf\u5229\u63a5\u6536\u5230\u7684\u6570\u636e\u5c31\u884c\u53bb\u91cd\uff0c\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5199\u5165\u8def\u5f84\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"distributor \u63a5\u6536\u5230\u5199\u5165\u8bf7\u6c42 \u6d41"}),"\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7 hash ring \u5bf9 \u6d41 \u5c31\u884c hash \u9009\u53d6 ingesters"}),"\n",(0,l.jsx)(e.li,{children:"distributor \u5c06\u6bcf\u4e2a\u6d41\u8f6c\u53d1\u7ed9\u5bf9\u5e94\u7684 ingesters \u548c \u526f\u672c"}),"\n",(0,l.jsx)(e.li,{children:"ingester \u4f1a\u5c06\u6d41\u5199\u5165 chunk - chunk \u5728\u79df\u6237\u7684 labelset \u4e0b\u552f\u4e00"}),"\n",(0,l.jsx)(e.li,{children:"distributor \u8fd4\u56de\u6210\u529f"}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},3354:(n,e,i)=>{var l=i(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,i){var l,r={},h=null,a=null;for(l in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(a=e.ref),e)t.call(e,l)&&!o.hasOwnProperty(l)&&(r[l]=e[l]);if(n&&n.defaultProps)for(l in e=n.defaultProps)void 0===r[l]&&(r[l]=e[l]);return{$$typeof:s,type:n,key:h,ref:a,props:r,_owner:c.current}}e.Fragment=r,e.jsx=h,e.jsxs=h},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>t});var l=i(50959);const s={},r=l.createContext(s);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);