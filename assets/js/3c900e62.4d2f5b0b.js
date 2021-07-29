"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26444],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=c(n),s=r,d=k["".concat(u,".").concat(s)]||k[s]||p[s]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},35113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],o={title:"Cadence"},u=void 0,c={unversionedId:"service/workflow/cadance",id:"service/workflow/cadance",isDocsHomePage:!1,title:"Cadence",description:"- uber/cadence \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/workflow/cadance.md",sourceDirName:"service/workflow",slug:"/service/workflow/cadance",permalink:"/notes/service/workflow/cadance",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/workflow/cadance.md",version:"current",frontMatter:{title:"Cadence"},sidebar:"docs",previous:{title:"Torrent \u8bcd\u6c47",permalink:"/notes/service/torrent/glossary"},next:{title:"flogo",permalink:"/notes/service/workflow/flogo"}},m=[{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]},{value:"Golang",id:"golang",children:[]},{value:"Java",id:"java",children:[]},{value:"Activity",id:"activity",children:[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}]},{value:"Workflow",id:"workflow",children:[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0-1",children:[]},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]}]}],p={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/uber/cadence"},"uber/cadence")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\uff0c\u5927\u89c4\u6a21\uff0c\u6301\u4e45\u5316\uff0c\u9ad8\u53ef\u7528\u7684\u5f02\u6784\u8c03\u5ea6\u5f15\u64ce"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5f02\u6b65\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4e1a\u52a1\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"Fault Tolerant Actor Framework"),(0,l.kt)("li",{parentName:"ul"},"fault-oblivious stateful workflow"),(0,l.kt)("li",{parentName:"ul"},"Golang \u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b Java SDK\u3001Go SDK"),(0,l.kt)("li",{parentName:"ul"},"Cadence \u66f4\u50cf\u662f\u4e00\u4e2a\u6267\u884c\u5e73\u53f0 - \u4f8b\u5982 BNMP\u3001Airflow DAG \u53ef\u4ee5\u5728\u5176\u4e4b\u4e0a\u8fd0\u884c"))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5468\u671f\u6267\u884c / \u5206\u5e03\u5f0f CRON"),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u7f16\u6392"),(0,l.kt)("li",{parentName:"ul"},"Polling - \u4f8b\u5982 \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d\u3001\u7f51\u7edc\u670d\u52a1\u5065\u5eb7\u3001\u7b49\u5f85\u5916\u90e8\u670d\u52a1\u751f\u6548"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u9a71\u52a8\u7f16\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u626b\u63cf - \u4f8b\u5982 \u89c4\u6574 OSS \u4e2d\u6587\u4ef6\u5143\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u6279\u5904\u7406 - \u4f8b\u5982 \u62a5\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u5f00\u901a / Infrastructure provisioning - \u4f8b\u5982 \u5f00\u901a\u963f\u91cc\u4e91 ECS"),(0,l.kt)("li",{parentName:"ul"},"CI/CD \u548c \u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u7ba1\u7406 - \u4f8b\u5982 DB \u7ef4\u62a4\u3001\u5f00\u901a\u8d26\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u5e94\u7528 - \u4f8b\u5982 \u5728\u7528\u6237\u4e0b\u5355\u7684\u540c\u65f6\u540e\u53f0\u8fdb\u884c\u6b3a\u8bc8\u68c0\u6d4b"),(0,l.kt)("li",{parentName:"ul"},"DSL \u5de5\u4f5c\u6d41 - BPMN, Apache Airflow, AWS Step Functions"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e \u548c \u673a\u5668\u5b66\u4e60"))),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5904\u7406\uff1a Microservices\u3001Serverless\u3001Actors"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\uff1a \u6570\u636e\u3001\u7f13\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cassandra / MySQL / Postgres"),(0,l.kt)("li",{parentName:"ul"},"metric - Prometheus - \u53ef\u9009"),(0,l.kt)("li",{parentName:"ul"},"ElastiCache+Kafka - \u9ad8\u7ea7\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"S3 - archival"))),(0,l.kt)("li",{parentName:"ul"},"Queues"),(0,l.kt)("li",{parentName:"ul"},"Job Schedulers"),(0,l.kt)("li",{parentName:"ul"},"Consensus\uff1a Leader Election\u3001Sharding\u3001Distributed Locks"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Frontend"),(0,l.kt)("li",{parentName:"ul"},"Matching"),(0,l.kt)("li",{parentName:"ul"},"History",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b Cross DC replication"))),(0,l.kt)("li",{parentName:"ul"},"Worker"))))),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\u53ef\u89c6\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6d41\u5f52\u6863"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u6570\u636e\u4e2d\u5fc3\u590d\u5236"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/uber/cadence-web"},"uber/cadence-web"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u8fd0\u884c\u7684\u6d41\u7a0b")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install cadence-workflow\n# Docker\ndocker run --rm ubercadence/cli:master\n")),(0,l.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 postgres\ncurl -o docker-compose.yml https://raw.githubusercontent.com/uber/cadence/master/docker/docker-compose-postgres.yml\ncurl -O https://raw.githubusercontent.com/uber/cadence/master/docker/prometheus_config.yml\n# UI localhost:8088\n# postgres :5432,prometheus :9090,grafana :3000,cadence 8000-8003,7933-3935,7939,cadence-web :8088\ndocker-compose up\n\n# \u6ce8\u518c domain\ndocker run --network=host --rm ubercadence/cli:master --do test-domain domain register -rd 1\n# domian \u4fe1\u606f\ndocker run --network=host --rm ubercadence/cli:master --do test-domain domain describe\n")),(0,l.kt)("h2",{id:"golang"},"Golang"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/uber-common/cadence-samples/blob/master/cmd/samples/recipes/helloworld/main.go"},"helloworld/main.go"))),(0,l.kt)("h2",{id:"java"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \u6d41\u7a0b\u63a5\u53e3\npublic interface TransferWorkflow {\n  @WorkflowMethod(executionStartToCloseTimeoutSeconds = WEEK_SECOND)\n  void execute(String fromAccountId, String toAccountId, Money amount);\n\n  @SignalMethod // \u4fe1\u53f7\u65b9\u6cd5\n  void doCount(int n);\n  @QueryMethod // \u67e5\u8be2\u65b9\u6cd5\n  int void getCount();\n}\n// \u4e8b\u4ef6\u63a5\u53e3\npublic interface Account {\n  @ActivityMethod(scheduleToCloseTimeoutSeconds = 300)\n  void debit(String fromAccountId, Money amount);\n  @ActivityMethod(scheduleToCloseTimeoutSeconds = 300)\n  void credit(String toAccountId, Money amount);\n}\npublic interface TransferWorkflowImpl implements TransferWorkflow {\n  // \u652f\u6301\u914d\u7f6e\u81ea\u52a8\u91cd\u8bd5\n  private final Account account = Workflow.newActivityStub(Account.class);\n  @Override\n  public void execute(String fromAccountId, String toAccountId, Money amount){\n    // \u89e6\u53d1\u4e8b\u4ef6 - \u963b\u585e\u8be5\u6d41\u7a0b\n    // \u4e8b\u4ef6\u53ef\u80fd\u6267\u884c\u975e\u5e38\u4e45 - \u4f8b\u5982\u51e0\u5929\n    account.debit(fromAccountId,amount);\n    try {\n      account.credit(toAccountId,amount);\n    } catch (IllegalArgumentException e){\n      // \u4e1a\u52a1\u8865\u507f\u903b\u8f91\n      account.credit(fromAccountId,amount);\n    }\n\n    // \u53ef\u624b\u52a8\u963b\u585e\n    Workflow.sleep(Duration.ofDays(7));\n  }\n\n  // \u672c\u5730\u72b6\u6001 - \u6301\u4e45\u5316\u7684\n  private int counter;\n  @Override\n  public void doCount(int n){\n    counter += n;\n  }\n  @QueryMethod\n  public int void getCount(){\n    return counter;\n  }\n}\n")),(0,l.kt)("h1",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("h2",{id:"activity"},"Activity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u957f\u65f6\u95f4\u8fd0\u884c\u7684 - \u5fc3\u8df3"),(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u7b56\u7565\u91cd\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u5230\u4e3b\u673a\u548c\u8fdb\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u961f\u5217\u5206\u53d1"),(0,l.kt)("li",{parentName:"ul"},"Worker \u901f\u7387\u548c\u5175\u6cd5\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5217\u901f\u7387\u9650\u5236")),(0,l.kt)("p",null,"\u6982\u5ff5\u7c7b\u4f3c\u4e8e Queue"),(0,l.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u65f6\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ScheduleToStart"),(0,l.kt)("li",{parentName:"ul"},"StartToClose"),(0,l.kt)("li",{parentName:"ul"},"ScheduleToClose"),(0,l.kt)("li",{parentName:"ul"},"Heartbeat"))),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u8bd5\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"InitialInterval"),(0,l.kt)("li",{parentName:"ul"},"BackoffCoefficient"),(0,l.kt)("li",{parentName:"ul"},"MaximumInterval"),(0,l.kt)("li",{parentName:"ul"},"MaximumAttempts"),(0,l.kt)("li",{parentName:"ul"},"ExpirationInterval"),(0,l.kt)("li",{parentName:"ul"},"NonRetryableErrorReasons")))),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u5bf9\u8c61 - Java\u3001Go",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u7528\u6237\u3001\u64cd\u4f5c\u76ee\u6807 - \u652f\u6301\u67e5\u8be2\u548c\u76f8\u5173\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u865a\u62df\u5bf9\u8c61\u90fd\u6709\u81ea\u5df1\u7684\u72b6\u6001 - \u56e0\u6b64\u7cfb\u7edf\u4e2d\u7684 Entity \u90fd\u4f1a\u6620\u5c04\u5230 Workflow"))),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u6392 Activities"),(0,l.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5916\u90e8\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u72b6\u6001 - \u672c\u5730\u53d8\u91cf\u548c\u6808"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u957f\u65f6\u95f4\u5b58\u5728"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u8ba1\u65f6\u5668")),(0,l.kt)("h3",{id:"\u5b9e\u73b0-1"},"\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u57df\u4e0b \u6bcf\u4e2a Workflow \u6709\u4e00\u4e2a\u552f\u4e00 ID - \u901a\u5e38\u662f\u4e1a\u52a1\u5bf9\u8c61 ID - \u4f8b\u5982\u8ba2\u5355\u3001\u5ba2\u6237\u7684 ID",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Domain Name, Workflow ID, Run ID"))),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u6267\u884c\u6709 Run ID"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u7528\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AllowDuplicateFailedOnly - \u9ed8\u8ba4 - \u5141\u8bb8\u5931\u8d25\u7684\u6d41\u7a0b\u91cd\u590d\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"AllowDuplicate"),(0,l.kt)("li",{parentName:"ul"},"RejectDuplicate - \u4e0d\u5141\u8bb8\u91cd\u590d\u6267\u884c")))),(0,l.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u76f4\u63a5\u7684 API \u64cd\u4f5c\uff0c\u901a\u8fc7 Activity \u8fdb\u884c\u54cd\u5e94"),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u662f\u7f16\u6392 Activity"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7406\u89e3\u4e3a\u5355\u7ebf\u7a0b\u7684\u5e94\u7528\u903b\u8f91 - \u4f46\u5b9e\u9645\u4f1a\u8fc1\u79fb\u5230\u4e0d\u540c\u4e3b\u673a\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u4f20\u7edf\u610f\u4e49 Workflow \u4e0d\u540c - orchestrator\u3001",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview"},"durable function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u610f\u4e49 Workflow",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ece\u67d0\u4e2a\u5730\u65b9\u5f00\u59cb\uff0c\u5230\u67d0\u4e2a\u5730\u65b9\u7ed3\u675f"),(0,l.kt)("li",{parentName:"ul"},"LCDP / \u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0 - \u56fe\u5f62\u5316\u66ff\u4ee3\u7f16\u7801"))))),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"UI \u7684\u6d41\u7a0b\u6784\u5efa\u6700\u7ec8\u4e5f\u662f\u6620\u5c04\u4e3a\u4ee3\u7801\u5c42\u9762\u7684\u6267\u884c - workflow \u662f code first",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Workflow \u518d\u53bb\u652f\u6301 UI \u7684 graph"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06\u591a\u4e2a Task \u6620\u5c04\u4e3a\u5355\u4e2a Workflow - \u53ef\u901a\u8fc7\u53d8\u91cf\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u903b\u8f91\u5904\u7406\u66f4\u52a0\u6e05\u6670"),(0,l.kt)("li",{parentName:"ul"},"\u51cf\u5c11 DB Load"),(0,l.kt)("li",{parentName:"ul"},"\u601d\u8003\u65b9\u5f0f\u4f1a\u6709\u6240\u4e0d\u540c"))),(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6784\u548c LongRun \u7684\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4e8e\u7ba1\u7406\u5176\u4ed6\u5e73\u53f0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406 CI\u3001CD \u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406 Flink\u3001Spark \u4efb\u52a1"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6267\u884c\u5468\u671f\u6027\u4efb\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6708\u62a5\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u5404\u79cd\u957f\u77ed\u5468\u671f\u4efb\u52a1")))))))}k.isMDXComponent=!0}}]);