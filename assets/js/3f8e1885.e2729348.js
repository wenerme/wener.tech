"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61016],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(a),d=n,s=k["".concat(p,".").concat(d)]||k[d]||c[d]||i;return a?r.createElement(s,l(l({ref:t},u),{},{components:a})):r.createElement(s,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},24332:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"airbyte"},p=void 0,m={unversionedId:"service/data/airbyte",id:"service/data/airbyte",title:"airbyte",description:"- airbytehq/airbyte",source:"@site/notes/service/data/airbyte.md",sourceDirName:"service/data",slug:"/service/data/airbyte",permalink:"/notes/service/data/airbyte",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/data/airbyte.md",tags:[],version:"current",frontMatter:{title:"airbyte"},sidebar:"docs",previous:{title:"wayback-machine-downloader",permalink:"/notes/service/data/crawler/wayback-machine-downloader"},next:{title:"Apache NiFi",permalink:"/notes/service/data/nifi"}},u=[{value:"Docker",id:"docker",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Integrations",id:"integrations",children:[],level:2},{value:"When to use CDC",id:"when-to-use-cdc",children:[],level:2}],c={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"airbytehq/airbyte"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MIT+ELv2, Java+Python+TypeScript"),(0,i.kt)("li",{parentName:"ul"},"ETL"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7528\u5230 temporal \u8fdb\u884c\u8c03\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"Source",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"APIs - Github, Gitlab, Notion"),(0,i.kt)("li",{parentName:"ul"},"Database - PostgreSQL, MySQL, ClickHouse, CockroachDB, MongoDB"),(0,i.kt)("li",{parentName:"ul"},"Files",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Format - CSV, JSON, jsonl, excel, parquet, feather"),(0,i.kt)("li",{parentName:"ul"},"Provider - HTTP, S3, SFTP, SSH SCP"))),(0,i.kt)("li",{parentName:"ul"},"Queue - Kafka"),(0,i.kt)("li",{parentName:"ul"},"RESTful"))),(0,i.kt)("li",{parentName:"ul"},"Destination",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kafka, MQTT, RabbitMQ, Pulsar, Redis"),(0,i.kt)("li",{parentName:"ul"},"S3, CSV, JSON, SFTP"),(0,i.kt)("li",{parentName:"ul"},"MySQL, PostgreSQL, Cassandra, ElasticSearch, MongoDB, MeiliSearch"))))),(0,i.kt)("li",{parentName:"ul"},"CDC",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PostgreSQL - wal2json, pgoutput"),(0,i.kt)("li",{parentName:"ul"},"MySQL"),(0,i.kt)("li",{parentName:"ul"},"MSSQL"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://demo.airbyte.io/"},"demo.airbyte.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/project-overview/licenses/examples"},"ELv2 \u4e0d\u80fd\u505a\u7684\u4e8b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airbyte-public-api-docs.s3.us-east-2.amazonaws.com/rapidoc-api-docs.html#auth"},"API"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-api/src/main/openapi/config.yaml"},"airbyte-api/src/main/openapi/config.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mrin9/RapiDoc"},"mrin9/RapiDoc"))))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u7248\u672c API \u76ee\u524d\u65e0\u8ba4\u8bc1")))),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/docker-compose.yaml"},"docker-compose.yaml"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"airbyte/scheduler"),(0,i.kt)("li",{parentName:"ul"},"airbyte/webapp"),(0,i.kt)("li",{parentName:"ul"},"airbyte/server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-temporal"},"airbyte/temporal"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e temporal \u5b98\u65b9\u811a\u672c"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u6784\u5efa\u6dfb\u52a0 M1 \u652f\u6301"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/temporal/dynamicconfig/development.yaml"},"temporal/dynamicconfig/development.yaml"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"limit.blobSize.warn=10MB - \u9ed8\u8ba4 512KB"),(0,i.kt)("li",{parentName:"ul"},"limit.blobSize.error=15MB - \u9ed8\u8ba4 2MB"))))),(0,i.kt)("li",{parentName:"ul"},"airbyte/worker"),(0,i.kt)("li",{parentName:"ul"},"airbyte/db - PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"airbyte/bootloader"),(0,i.kt)("li",{parentName:"ul"},"airbyte/init"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/docker-compose.debug.yaml"},"docker-compose.debug.yaml"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"temporalio/web")))),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/deploying-airbyte/on-kubernetes#known-issues"},"Known Issues")),(0,i.kt)("li",{parentName:"ul"},"Helm ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/charts/airbyte"},"charts/airbyte"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"charts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"bitnami-common"),(0,i.kt)("li",{parentName:"ul"},"postgresql"),(0,i.kt)("li",{parentName:"ul"},"minio"))),(0,i.kt)("li",{parentName:"ul"},"temporal - \u5185\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},"Kustomization ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/kube"},"resources"))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scheduler",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"API -> Temporal"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/airbyte-specification"},"Specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/high-level-view"},"High-level View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/project-overview/changelog"},"changelog"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"desc"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,i.kt)("td",{parentName:"tr",align:null},"uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,i.kt)("td",{parentName:"tr",align:null},"timestamp-millis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_additional_properties")),(0,i.kt)("td",{parentName:"tr",align:null},"map of string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_data")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u6570\u636e")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_normalized_at")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ab_cdc_updated_at")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ab_cdc_deleted_at")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ab_cdc_lsn")),(0,i.kt)("td",{parentName:"tr",align:null},"PostgreSQL, MSSQL CDC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ab_cdc_log_file")),(0,i.kt)("td",{parentName:"tr",align:null},"MySQL CDC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ab_cdc_log_pos")),(0,i.kt)("td",{parentName:"tr",align:null},"MySQL CDC")))),(0,i.kt)("h2",{id:"integrations"},"Integrations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources"},"Source"))),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"when-to-use-cdc"},"When to use CDC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u83b7\u53d6\u5230\u5220\u9664\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927"),(0,i.kt)("li",{parentName:"ul"},"\u8868\u91cc\u6ca1\u6709\u589e\u91cf\u540c\u6b65\u4fe1\u606f - \u4f8b\u5982: updated_at")))}k.isMDXComponent=!0}}]);