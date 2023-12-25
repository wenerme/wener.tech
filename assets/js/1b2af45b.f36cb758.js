/*! For license information please see 1b2af45b.f36cb758.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35207],{44566:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=i(11527),s=i(47214);const t={title:"airbyte"},l="airbyte",c={id:"service/data/airbyte",title:"airbyte",description:"- airbytehq/airbyte",source:"@site/../notes/service/data/airbyte.md",sourceDirName:"service/data",slug:"/service/data/airbyte",permalink:"/notes/service/data/airbyte",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/data/airbyte.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645033829,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{title:"airbyte"},sidebar:"docs",previous:{title:"\u6570\u636e",permalink:"/notes/service/data/"},next:{title:"Cralwer",permalink:"/notes/service/data/crawler/"}},d={},a=[{value:"Docker",id:"docker",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Notes",id:"notes",level:2},{value:"Integrations",id:"integrations",level:2},{value:"When to use CDC",id:"when-to-use-cdc",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"airbyte",children:"airbyte"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte",children:"airbytehq/airbyte"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MIT+ELv2, Java+Python+TypeScript"}),"\n",(0,r.jsx)(n.li,{children:"ETL"}),"\n",(0,r.jsx)(n.li,{children:"\u5b9e\u73b0\u7528\u5230 temporal \u8fdb\u884c\u8c03\u5ea6"}),"\n",(0,r.jsxs)(n.li,{children:["Source\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"APIs - Github, Gitlab, Notion"}),"\n",(0,r.jsx)(n.li,{children:"Database - PostgreSQL, MySQL, ClickHouse, CockroachDB, MongoDB"}),"\n",(0,r.jsxs)(n.li,{children:["Files\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Format - CSV, JSON, jsonl, excel, parquet, feather"}),"\n",(0,r.jsx)(n.li,{children:"Provider - HTTP, S3, SFTP, SSH SCP"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Queue - Kafka"}),"\n",(0,r.jsx)(n.li,{children:"RESTful"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Destination\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Kafka, MQTT, RabbitMQ, Pulsar, Redis"}),"\n",(0,r.jsx)(n.li,{children:"S3, CSV, JSON, SFTP"}),"\n",(0,r.jsx)(n.li,{children:"MySQL, PostgreSQL, Cassandra, ElasticSearch, MongoDB, MeiliSearch"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["CDC\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"PostgreSQL - wal2json, pgoutput"}),"\n",(0,r.jsx)(n.li,{children:"MySQL"}),"\n",(0,r.jsx)(n.li,{children:"MSSQL"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://demo.airbyte.io/",children:"demo.airbyte.io"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/project-overview/licenses/examples",children:"ELv2 \u4e0d\u80fd\u505a\u7684\u4e8b"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://airbyte-public-api-docs.s3.us-east-2.amazonaws.com/rapidoc-api-docs.html#auth",children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-api/src/main/openapi/config.yaml",children:"airbyte-api/src/main/openapi/config.yaml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mrin9/RapiDoc",children:"mrin9/RapiDoc"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f00\u6e90\u7248\u672c API \u76ee\u524d\u65e0\u8ba4\u8bc1"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/blob/master/docker-compose.yaml",children:"docker-compose.yaml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"airbyte/scheduler"}),"\n",(0,r.jsx)(n.li,{children:"airbyte/webapp"}),"\n",(0,r.jsx)(n.li,{children:"airbyte/server"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-temporal",children:"airbyte/temporal"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u57fa\u4e8e temporal \u5b98\u65b9\u811a\u672c"}),"\n",(0,r.jsx)(n.li,{children:"\u91cd\u65b0\u6784\u5efa\u6dfb\u52a0 M1 \u652f\u6301"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/blob/master/temporal/dynamicconfig/development.yaml",children:"temporal/dynamicconfig/development.yaml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"limit.blobSize.warn=10MB - \u9ed8\u8ba4 512KB"}),"\n",(0,r.jsx)(n.li,{children:"limit.blobSize.error=15MB - \u9ed8\u8ba4 2MB"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"airbyte/worker"}),"\n",(0,r.jsx)(n.li,{children:"airbyte/db - PostgreSQL"}),"\n",(0,r.jsx)(n.li,{children:"airbyte/bootloader"}),"\n",(0,r.jsx)(n.li,{children:"airbyte/init"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/blob/master/docker-compose.debug.yaml",children:"docker-compose.debug.yaml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"temporalio/web"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/deploying-airbyte/on-kubernetes#known-issues",children:"Known Issues"})}),"\n",(0,r.jsxs)(n.li,{children:["Helm ",(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/tree/master/charts/airbyte",children:"charts/airbyte"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["charts\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"bitnami-common"}),"\n",(0,r.jsx)(n.li,{children:"postgresql"}),"\n",(0,r.jsx)(n.li,{children:"minio"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"temporal - \u5185\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Kustomization ",(0,r.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/tree/master/kube",children:"resources"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Scheduler\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"API -> Temporal"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/understanding-airbyte/airbyte-specification",children:"Specification"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/understanding-airbyte/high-level-view",children:"High-level View"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/project-overview/changelog",children:"changelog"})}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"field"}),(0,r.jsx)(n.th,{children:"desc"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_airbyte_ab_id"})}),(0,r.jsx)(n.td,{children:"uuid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_airbyte_emitted_at"})}),(0,r.jsx)(n.td,{children:"timestamp-millis"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_airbyte_additional_properties"})}),(0,r.jsx)(n.td,{children:"map of string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_airbyte_data"})}),(0,r.jsx)(n.td,{children:"\u5b9e\u9645\u6570\u636e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_airbyte_normalized_at"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_ab_cdc_updated_at"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_ab_cdc_deleted_at"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_ab_cdc_lsn"})}),(0,r.jsx)(n.td,{children:"PostgreSQL, MSSQL CDC"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_ab_cdc_log_file"})}),(0,r.jsx)(n.td,{children:"MySQL CDC"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_ab_cdc_log_pos"})}),(0,r.jsx)(n.td,{children:"MySQL CDC"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"integrations",children:"Integrations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources",children:"Source"})}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"when-to-use-cdc",children:"When to use CDC"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5e0c\u671b\u83b7\u53d6\u5230\u5220\u9664\u4fe1\u606f"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u636e\u91cf\u5927"}),"\n",(0,r.jsx)(n.li,{children:"\u8868\u91cc\u6ca1\u6709\u589e\u91cf\u540c\u6b65\u4fe1\u606f - \u4f8b\u5982: updated_at"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3354:(e,n,i)=>{var r=i(50959),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var r,t={},a=null,h=null;for(r in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:h,props:t,_owner:c.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},11527:(e,n,i)=>{e.exports=i(3354)},47214:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var r=i(50959);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);