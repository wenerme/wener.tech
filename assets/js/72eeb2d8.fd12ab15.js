"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80472],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(a),k=l,N=c["".concat(p,".").concat(k)]||c[k]||s[k]||n;return a?r.createElement(N,i(i({ref:t},u),{},{components:a})):r.createElement(N,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31374:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var r=a(96600),l=a(27279),n=(a(59496),a(49613)),i=["components"],o={title:"temporal"},p="temporal",m={unversionedId:"service/workflow/temporal",id:"service/workflow/temporal",title:"temporal",description:"- temporalio/temporal",source:"@site/../notes/service/workflow/temporal.md",sourceDirName:"service/workflow",slug:"/service/workflow/temporal",permalink:"/notes/service/workflow/temporal",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/workflow/temporal.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"temporal"},sidebar:"docs",previous:{title:"Temporal FAQ",permalink:"/notes/service/workflow/temporal-faq"},next:{title:"Workflow Awesome",permalink:"/notes/service/workflow/workflow-awesome"}},u={},s=[{value:"tctl",id:"tctl",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"Server",id:"server",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"Auth",id:"auth",level:2},{value:"Bootstrap",id:"bootstrap",level:2},{value:"temporal-web",id:"temporal-web",level:2}],c={toc:s};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"temporal"},"temporal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/temporal"},"temporalio/temporal"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cadence fork, \u5305\u542b\u539f\u59cb\u56e2\u961f\u4eba\u5458"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u9002\u5408\u4e2d\u5c0f\u89c4\u6a21",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u66f4\u65b9\u4fbf"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a SDK - Go, Java, PHP, Typescript"),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709 uber \u5305\u88b1 - \u73af\u5883\u3001rpc\u3001\u5386\u53f2\u5b9e\u73b0")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# https://github.com/temporalio/docker-compose\n# Elasticsearch + PostgreSQL + Web + UI\n# temporal-web http://localhost:8088/namespaces\n# temporal-ui http://localhost:8080/\n# temporal :7233\n# postgresql :5432\n# elasticsearch :9200\ncurl -o docker-compose.yml https://raw.githubusercontent.com/temporalio/docker-compose/main/docker-compose-ui-experimental.yml\ncurl --create-dirs -LO --output-dir dynamicconfig https://raw.githubusercontent.com/temporalio/docker-compose/main/dynamicconfig/development_es.yaml\ncurl -O --output-dir dynamicconfig https://raw.githubusercontent.com/temporalio/docker-compose/main/dynamicconfig/development.yaml\ndocker-compose up\n\n# tctl in docker\nalias tctl="docker exec --env TEMPORAL_CLI_ADDRESS=host.docker.internal:7233 temporal-admin-tools tctl"\ntctl namespace describe\n')),(0,n.kt)("h2",{id:"tctl"},"tctl"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/tctl"},"https://github.com/temporalio/tctl"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"env"),(0,n.kt)("th",{parentName:"tr",align:null},"default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TEMPORAL_CLI_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:null},"127.0.0.1:7233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TEMPORAL_CLI_NAMESPACE"),(0,n.kt)("td",{parentName:"tr",align:null},"default")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# install on Host\nbrew install tctl\n# run in Docker\ndocker run --rm -it --entrypoint tctl --env TEMPORAL_CLI_ADDRESS=host.docker.internal:7233 temporalio/admin-tools\n\n# \u5065\u5eb7\u72b6\u6001 - \u6b63\u5e38\u4e3a SERVING\ntctl cluster health\ntctl --ns default namespace register --rd 7 --desc "Default namespace for Temporal Server."\n# \u53ef\u80fd\u9700\u8981\u7b49\u4e00\u4f1a\u513f\ntctl --ns default namespace describe\n\n# \u7ba1\u7406: workflow/wf, shard/shar, history_host/hist, taskqueue/tq, membership, cluster/cl, dlq, db, decode\ntctl admin\n# \u96c6\u7fa4\u7ba1\u7406 - \u641c\u7d22\u5c5e\u6027\u3001remote-cluster\ntctl admin cluster\n')),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Persistence",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cassandra, PostgreSQL, MySQL"),(0,n.kt)("li",{parentName:"ul"},"SQLite WIP"))),(0,n.kt)("li",{parentName:"ul"},"Workflow search",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Elasticsearch v6.8+"))),(0,n.kt)("li",{parentName:"ul"},"Helm ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/helm-charts"},"https://github.com/temporalio/helm-charts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u4e0d\u63a8\u8350\u751f\u4ea7\u76f4\u63a5\u4f7f\u7528 Helm \u90e8\u7f72"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/blog/temporal-and-kubernetes/"},"https://docs.temporal.io/blog/temporal-and-kubernetes/")))),(0,n.kt)("li",{parentName:"ul"},"\u9650\u5236 - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/docs/server/production-deployment/#server-limits"},"Server limits"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gRPC 4MB"),(0,n.kt)("li",{parentName:"ul"},"TransactionSizeLimit 4MB - \u4e8b\u52a1\u5927\u5c0f\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"Blob size limit - \u8bf7\u6c42\u5305\u5927\u5c0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BlobSizeLimitWarn 512KB"),(0,n.kt)("li",{parentName:"ul"},"BlobSizeLimitError 2MB"))),(0,n.kt)("li",{parentName:"ul"},"History total size limit - \u5386\u53f2\u5927\u5c0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HistorySizeLimitWarn 10MB"),(0,n.kt)("li",{parentName:"ul"},"HistorySizeLimitError 50MB"))),(0,n.kt)("li",{parentName:"ul"},"History total count limit - \u5386\u53f2\u4e8b\u4ef6\u6570\u91cf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HistoryCountLimitWarn 10000"),(0,n.kt)("li",{parentName:"ul"},"HistoryCountLimitError ",(0,n.kt)("strong",{parentName:"li"},"50000")))),(0,n.kt)("li",{parentName:"ul"},"Search Attributes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SearchAttributesNumberOfKeysLimit 100 - \u6570\u91cf"),(0,n.kt)("li",{parentName:"ul"},"SearchAttributesTotalSizeLimit 2KB - \u5355\u4e2a\u5c5e\u6027\u5927\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"SearchAttributesSizeOfValueLimit 40KB - \u4e2d\u5927\u5c0f"))),(0,n.kt)("li",{parentName:"ul"},"Child Workflow - History \u72ec\u7acb\u4e8e Parent - \u53ef\u7528\u4e8e Partition History \u538b\u529b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a Workflow \u6700\u591a 1000 Child Workflow",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Child Workflow \u7684 Child Workflow \u4e0d\u53d7\u5f71\u54cd"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u591a\u5c42\u7ea7"))),(0,n.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u5728\u5355\u5c42 Workflow History \u6709\u538b\u529b\u7684\u65f6\u5019\u518d\u4f7f\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c3d\u91cf Activities \u90fd\u5728\u4e00\u5c42 Workflow"))))),(0,n.kt)("li",{parentName:"ul"},"ContinueAsNew - \u4ece\u65b0\u8ba1 History - \u7528\u4e8e\u51cf\u7f13 History \u538b\u529b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/docs/server/production-deployment#further-things-to-consider"},"Antipatterns & Best practices"))),(0,n.kt)("h2",{id:"server"},"Server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/docs/server/options"},"Temporal Server options")),(0,n.kt)("li",{parentName:"ul"},"authorization.Authorizer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u6709\u6743\u9650\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5f53\u524d Claim \u7684 Role"))),(0,n.kt)("li",{parentName:"ul"},"authorization.ClaimMapper",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AuthInfo -> Claims -> Namespace&Role"))),(0,n.kt)("li",{parentName:"ul"},"authorization.TokenKeyProvider",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"alg+kid -> Key"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u83b7\u53d6\u5230\u5f53\u524d Claim \u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e RefreshInterval \u66f4\u65b0"))),(0,n.kt)("li",{parentName:"ul"},"fx - temporal \u4f7f\u7528 fx \u505a IoC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a Service \u6709\u81ea\u5df1\u7684 fx \u4e0a\u4e0b\u6587"),(0,n.kt)("li",{parentName:"ul"},"ServerFx - root fx.App - Bootstrap"),(0,n.kt)("li",{parentName:"ul"},"ServerImpl.Start \u4f1a\u542f\u52a8\u6240\u6709\u7684 ServicesMetadata"),(0,n.kt)("li",{parentName:"ul"},"resource.BootstrapParams Service \u542f\u52a8\u4e0a\u4e0b\u6587"))),(0,n.kt)("li",{parentName:"ul"},"Workflow",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workflow Task Timeout - 10s"),(0,n.kt)("li",{parentName:"ul"},"ChildWorkflow",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ParentClosePolicy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ABANDON - Parent \u7ed3\u675f, Child \u4e0d\u53d7\u5f71\u54cd"),(0,n.kt)("li",{parentName:"ul"},"TERMINATE - \u7acb\u5373\u7ec8\u6b62"),(0,n.kt)("li",{parentName:"ul"},"REQUEST_CANCEL - \u8bf7\u6c42\u53d6\u6d88"))))))),(0,n.kt)("li",{parentName:"ul"},"Activity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u72b6\u6001",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Scheduled -> Started -> Completed"),(0,n.kt)("li",{parentName:"ul"},"Scheduled -> Started -> Retry Backoff -> Scheduled"))),(0,n.kt)("li",{parentName:"ul"},"\u8d85\u65f6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ScheduleToStart - \u9ed8\u8ba4 \u221e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u6b21 Scheduled -> Started"))),(0,n.kt)("li",{parentName:"ul"},"StartToClose - \u9ed8\u8ba4=ScheduleToStart",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u6b21 Started -> Completed"))),(0,n.kt)("li",{parentName:"ul"},"ScheduleToClose - \u9ed8\u8ba4 \u221e - \u603b\u4f53\u7edd\u5bf9\u65f6\u95f4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Scheduled -> ","*"," -> Completed"))))),(0,n.kt)("li",{parentName:"ul"},"LocalActivity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u672c\u5730\u5feb\u901f\u6267\u884c\u7684\u51fd\u6570 - < 10s"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u66f4\u5c11\u7684 Temporal \u670d\u52a1\u8d44\u6e90 - \u4e0d\u8bb0\u5f55"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u6267\u884c - \u65e0 \u961f\u5217\u3001\u6d41\u63a7\u3001\u9650\u6d41\u3001\u8def\u7531 \u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 Heartbeating"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u4f4e\u5ef6\u65f6"),(0,n.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4f7f\u7528 \u6b63\u5e38 Activity - ",(0,n.kt)("a",{parentName:"li",href:"https://community.temporal.io/t/local-activity-vs-activity/290/3"},"LocalActivity vs Activity")))))),(0,n.kt)("li",{parentName:"ul"},"TaskQueue",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sticky Execution - \u9ed8\u8ba4\u5f00\u542f - DisableStickyExecution",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worker \u5b8c\u6210\u4e86 Workflow \u7684\u7b2c\u4e00\u4e2a\u4efb\u52a1\uff0c\u5219\u4f1a\u5f00\u59cb\u62c9\u53d6\u4e4b\u540e\u7684\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6682\u65f6\u4e0d\u9700\u8981\u8fdb\u884c\u8c03\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"StickyScheduleToStartTimeout=5s - \u5f53\u7c98\u6027 \u6267\u884c/Pull \u8d85\u65f6\u540e\uff0c\u96c6\u7fa4\u6062\u590d\u8c03\u5ea6 Workflow"),(0,n.kt)("li",{parentName:"ul"},"StickyWorkflowCacheSize=10,000"))))),(0,n.kt)("li",{parentName:"ul"},"Signal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Recipient - WorkflowExecution=Namespace + Workflow Id"),(0,n.kt)("li",{parentName:"ul"},"Id"),(0,n.kt)("li",{parentName:"ul"},"Name - queue"))),(0,n.kt)("li",{parentName:"ul"},"AdvancedVisibility",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/docs/content/what-is-a-list-filter/"},"ListFilter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/docs/temporal-explained/visibility#default-search-attributes"},"\u9ed8\u8ba4\u641c\u7d22\u5c5e\u6027")))),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"frontend - \u7f51\u5173",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9650\u6d41\u3001\u8def\u7531\u3001\u8ba4\u8bc1"))),(0,n.kt)("li",{parentName:"ul"},"history",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u6570\u636e - \u72b6\u6001\u3001\u961f\u5217\u3001\u8ba1\u65f6\u5668"))),(0,n.kt)("li",{parentName:"ul"},"matching",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5206\u53d1\u4efb\u52a1"))),(0,n.kt)("li",{parentName:"ul"},"worker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u5185\u90e8\u540e\u53f0\u4efb\u52a1"))))),(0,n.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"temporal-system - \u5185\u90e8\u547d\u540d\u7a7a\u95f4 - retention=7d"),(0,n.kt)("li",{parentName:"ul"},"defaulr - \u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4"))),(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8be2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"__stack_trace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"__open_sessions")))),(0,n.kt)("li",{parentName:"ul"},"\u6388\u6743",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Claim ",(0,n.kt)("inlineCode",{parentName:"li"},'{"permission":["<namespace>:"permission""]}')),(0,n.kt)("li",{parentName:"ul"},"namespace=system - \u7279\u6b8a namespace"),(0,n.kt)("li",{parentName:"ul"},"permission <-> role",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"read - Reader"),(0,n.kt)("li",{parentName:"ul"},"write - Writer"),(0,n.kt)("li",{parentName:"ul"},"admin - Admin"),(0,n.kt)("li",{parentName:"ul"},"worker - Worker"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6 - Undefined"))),(0,n.kt)("li",{parentName:"ul"},"role \u6709\u7ee7\u627f\u903b\u8f91")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b9e\u9645\u4f1a\u8fd0\u884c\u7684\u670d\u52a1\ntemporal-server start --service=history\ntemporal-server start --service=frontend\ntemporal-server start --service=matching\ntemporal-server start --service=worker\n# \u53ef\u4ee5\u4e00\u6b21\u6027\u542f\u52a8\ntemporal-server start --service=history --service=frontend --service=matching --service=worker\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76ee\u5f55\u7ed3\u6784",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"./ - $PWD - $TEMPORAL_ROOT - \u6839\u76ee\u5f55"),(0,n.kt)("li",{parentName:"ul"},"config/ - $TEMPORAL_CONFIG_DIR - \u914d\u7f6e\u76ee\u5f55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"development.yaml - $TEMPORAL_ENVIRONMENT.yaml - \u73af\u5883\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"dynamicconfig/ - \u52a8\u6001\u914d\u7f6e - dynamicConfigClient.dynamicconfig")))))),(0,n.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/docs/server/configuration/"},"https://docs.temporal.io/docs/server/configuration/")),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5bf9\u8c61 ",(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.temporal.io/server/common/config#Config"},"go.temporal.io/server/common/config#Config"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"log:\n  stdout: true\n  # debug, info, warn, error or fatal, info.\n  level: info\n  outputFile:\n# \u6301\u4e45\u5316\u914d\u7f6e\npersistence:\n  numHistoryShards: 1000\n  defaultStore: default\n  visibilityStore: visibility\n  advancedVisibilityStore: es-visibility\n  datastores:\n    default:\n      sql:\n        pluginName: postgres\n        databaseName:\n        connectAddr: 127.0.0.1:5432\n        # tcp,unix\n        connectProtocol: tcp\n        user:\n        password:\n        maxConns:\n        maxIdleConns:\n        maxConnLifetime: 1h\n        tls:\n          enabled: true\n          enableHostVerification: false\n        connectAttributes:\n          search_path: temporal\n\n# \u5168\u5c40\u914d\u7f6e\nglobal:\n  membership:\n    maxJoinDuration: 30s\n  authorization:\n    jwtKeyProvider:\n      keySourceURIs: []\n      refreshInterval: 1m\n    permissionsClaimName: permissions\n    authorizer:\n    claimMapper:\n\n# \u96c6\u7fa4\u5143\u6570\u636e - \u7528\u4e8e\u591a\u96c6\u7fa4\u590d\u5236\nclusterMetadata:\n  # \u662f\u5426\u5141\u8bb8\u5168\u5c40\u547d\u540d\u7a7a\u95f4\n  enableGlobalNamespace: false\n  failoverVersionIncrement: 10\n  masterClusterName: 'active'\n  # \u96c6\u7fa4\u540d\u5b57 - \u542f\u52a8\u540e\u4fbf\u4e0d\u53ef\u53d8\n  currentClusterName: 'active'\n  clusterInformation:\n    active:\n      enabled: true\n      initialFailoverVersion: 0\n      # \u652f\u6301 DNS dns:///\n      rpcAddress: '127.0.0.1:7233'\n  replicationConsumer:\n    # kafka,rpc\n    type: rpc\n")),(0,n.kt)("h2",{id:"auth"},"Auth"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/samples-server"},"https://github.com/temporalio/samples-server"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Authorizer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684 auth \u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u5c01\u88c5 temporal.NewServer")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": ["namespace:permission"]\n}\n')),(0,n.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"install schema",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/temporal/blob/v1.4.2/Makefile#L367-L383"},"https://github.com/temporalio/temporal/blob/v1.4.2/Makefile#L367-L383")))),(0,n.kt)("li",{parentName:"ul"},"docker \u542f\u52a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/temporal/blob/master/docker/auto-setup.sh"},"docker/auto-setup.sh")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/temporal/blob/master/docker/entrypoint.sh"},"docker/entrypoint.sh"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jwilder/dockerize"},"dockerize")," \u751f\u6210\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"/etc/temporal/config/config_template.yaml -> /etc/temporal/config/docker.yaml",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/temporal/blob/master/docker/config_template.yaml"},"config_template.yaml")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/temporal/blob/master/docker/start-temporal.sh"},"docker/start-temporal.sh")))),(0,n.kt)("li",{parentName:"ul"},"auto-setup",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.temporal.io/blog/auto-setup/"},"https://docs.temporal.io/blog/auto-setup/"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -e DB=postgresql \\\n  -e DB_PORT=5432 \\\n  -e POSTGRES_USER=temporal \\\n  -e POSTGRES_PWD=temporal \\\n  -e POSTGRES_SEEDS=postgresql \\\n  --entrypoint bash \\\n  temporalio/auto-setup:1.14.2\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PostgresSQL \u652f\u6301 search_path, tls",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"--ca search_path=visibility --tls --tls-disable-host-verification")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"temporal-sql-tool --ep 127.0.0.1 -p 5432 -u temporal -pw temporal --pl postgres create --db temporal\ntemporal-sql-tool --ep 127.0.0.1 -p 5432 -u temporal -pw temporal --pl postgres --db temporal setup -v 0.0\ntemporal-sql-tool --ep 127.0.0.1 -p 5432 -u temporal -pw temporal --pl postgres --db temporal update-schema -d ./schema/postgresql/v96/temporal/versioned\ntemporal-sql-tool --ep 127.0.0.1 -p 5432 -u temporal -pw temporal --pl postgres create --db temporal_visibility\ntemporal-sql-tool --ep 127.0.0.1 -p 5432 -u temporal -pw temporal --pl postgres --db temporal_visibility setup-schema -v 0.0\ntemporal-sql-tool --ep 127.0.0.1 -p 5432 -u temporal -pw temporal --pl postgres --db temporal_visibility update-schema -d ./schema/postgresql/v96/visibility/versioned\n")),(0,n.kt)("h2",{id:"temporal-web"},"temporal-web"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/temporalio/web"},"temporalio/web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JS+Vue")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v $PWD/config.yml:/usr/app/server/config.yml \\\n  -p 8088:8088 \\\n  temporalio/web:latest\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml"',title:'"config.yml"'},"auth:\n  enabled: true # Temporal Web checks this first before reading your provider config\n  providers:\n    - label: 'Auth0 oidc' # for internal use; in future may expose as button text\n      type: oidc # for futureproofing; only oidc is supported today\n      issuer: https://myorg.us.auth0.com\n      client_id: xxxxxxxxxxxxxxxxxxxx\n      client_secret: xxxxxxxxxxxxxxxxxxxx\n      scope: openid profile email\n      audience: # identifier of the audience for an issued token (optional)\n      callback_base_uri: http://localhost:8088\n      pass_id_token: false # adds ID token as 'authorization-extras' header with every request to server\n")))}k.isMDXComponent=!0}}]);