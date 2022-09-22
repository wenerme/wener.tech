"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85431],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),g=a,k=s["".concat(i,".").concat(g)]||s[g]||m[g]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},41434:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],u={title:"go-cloud"},i="go-cloud",p={unversionedId:"languages/go/lib/go-cloud",id:"languages/go/lib/go-cloud",title:"go-cloud",description:"- google/go-cloud",source:"@site/../notes/languages/go/lib/go-cloud.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/go-cloud",permalink:"/notes/languages/go/lib/go-cloud",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/go-cloud.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"go-cloud"},sidebar:"docs",previous:{title:"fyne",permalink:"/notes/languages/go/lib/fyne"},next:{title:"go-kit",permalink:"/notes/languages/go/lib/go-kit"}},c={},m=[{value:"\u670d\u52a1",id:"\u670d\u52a1",level:2},{value:"Notes",id:"notes",level:2}],s={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"go-cloud"},"go-cloud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/go-cloud"},"google/go-cloud"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Go Cloud Development Kit")))),(0,l.kt)("h2",{id:"\u670d\u52a1"},"\u670d\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"blob - \u5bf9\u8c61\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Google Cloud Storage"),(0,l.kt)("li",{parentName:"ul"},"S3"),(0,l.kt)("li",{parentName:"ul"},"Azure Blob Storage"),(0,l.kt)("li",{parentName:"ul"},"Local Storage"))),(0,l.kt)("li",{parentName:"ul"},"docstore - \u6587\u6863\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Google Cloud Firestore"),(0,l.kt)("li",{parentName:"ul"},"Amazon DynamoDB"),(0,l.kt)("li",{parentName:"ul"},"Azure Cosmos DB"),(0,l.kt)("li",{parentName:"ul"},"MongoDB"),(0,l.kt)("li",{parentName:"ul"},"In-Memory"))),(0,l.kt)("li",{parentName:"ul"},"connect hosted db - MySQL/PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"pubsub",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Google Cloud Pub/Sub"),(0,l.kt)("li",{parentName:"ul"},"Amazon Simple Notification Service"),(0,l.kt)("li",{parentName:"ul"},"Amazon Simple Queue Service"),(0,l.kt)("li",{parentName:"ul"},"Azure Service Bus"),(0,l.kt)("li",{parentName:"ul"},"RabbitMQ"),(0,l.kt)("li",{parentName:"ul"},"NATS"),(0,l.kt)("li",{parentName:"ul"},"Kafka"),(0,l.kt)("li",{parentName:"ul"},"In-Memory"))),(0,l.kt)("li",{parentName:"ul"},"runtimevar - Runtime Configuration",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GCP Runtime Configurator"),(0,l.kt)("li",{parentName:"ul"},"GCP Secret Manager"),(0,l.kt)("li",{parentName:"ul"},"AWS Parameter Store"),(0,l.kt)("li",{parentName:"ul"},"AWS Secrets Manager"),(0,l.kt)("li",{parentName:"ul"},"etcd"),(0,l.kt)("li",{parentName:"ul"},"HTTP"),(0,l.kt)("li",{parentName:"ul"},"Blob"),(0,l.kt)("li",{parentName:"ul"},"Local"))),(0,l.kt)("li",{parentName:"ul"},"secrets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Google Cloud Key Management Service"),(0,l.kt)("li",{parentName:"ul"},"AWS Key Management Service"),(0,l.kt)("li",{parentName:"ul"},"Azure KeyVault"),(0,l.kt)("li",{parentName:"ul"},"HashiCorp Vault"),(0,l.kt)("li",{parentName:"ul"},"Local Secrets"))),(0,l.kt)("li",{parentName:"ul"},"server - \u901a\u7528 http server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"requestlog"),(0,l.kt)("li",{parentName:"ul"},"\u5e26\u57fa\u7840 endpoints",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/healthz/readiness"),(0,l.kt)("li",{parentName:"ul"},"/healthz/liveness")))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e driver \u6784\u5efa - url schema \u9a71\u52a8")))}g.isMDXComponent=!0}}]);