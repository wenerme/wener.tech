"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41539],{49613:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,p(p({ref:t},i),{},{components:r})):n.createElement(g,p({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),p=["components"],l={title:"CrunchyData PGO"},s="CrunchyData PostgreSQL Operator",u={unversionedId:"devops/kubernetes/app/pgo",id:"devops/kubernetes/app/pgo",title:"CrunchyData PGO",description:"- namespace \u6a21\u5f0f",source:"@site/../notes/devops/kubernetes/app/pgo.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/pgo",permalink:"/notes/devops/kubernetes/app/pgo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/app/pgo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633617108,formattedLastUpdatedAt:"Oct 7, 2021",frontMatter:{title:"CrunchyData PGO"},sidebar:"docs",previous:{title:"MinIO Kubernetes Operator",permalink:"/notes/devops/kubernetes/app/minio-operator"},next:{title:"prometheus-config-reloader",permalink:"/notes/devops/kubernetes/app/prometheus-config-reloader"}},i={},c=[{value:"pgo vs zalando postgres-operator",id:"pgo-vs-zalando-postgres-operator",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crunchydata-postgresql-operator"},"CrunchyData PostgreSQL Operator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"namespace \u6a21\u5f0f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"dynamic"),(0,o.kt)("li",{parentName:"ul"},"readonly"),(0,o.kt)("li",{parentName:"ul"},"disabled")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"port"),(0,o.kt)("th",{parentName:"tr",align:null},"desc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8443"),(0,o.kt)("td",{parentName:"tr",align:null},"api server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4151"),(0,o.kt)("td",{parentName:"tr",align:null},"nsqadmin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4150"),(0,o.kt)("td",{parentName:"tr",align:null},"nsqd")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5432"),(0,o.kt)("td",{parentName:"tr",align:null},"pg")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5432"),(0,o.kt)("td",{parentName:"tr",align:null},"pgbouncer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2022"),(0,o.kt)("td",{parentName:"tr",align:null},"pgBackRest")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9187"),(0,o.kt)("td",{parentName:"tr",align:null},"postgres-exporter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"pgbadger")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace pgo\n# \u4f1a\u90e8\u7f72 job pgo-deploy, \u6267\u884c install, pgo-deployer\nkubectl apply -f https://raw.githubusercontent.com/CrunchyData/postgres-operator/v4.7.0/installers/kubectl/postgres-operator.yml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: postgres-operator.crunchydata.com/v1beta1\nkind: PostgresCluster\nmetadata:\n  name: hippo\nspec:\n  image: registry.developers.crunchydata.com/crunchydata/crunchy-postgres:centos8-14.0-0\n  postgresVersion: 14\n  instances:\n    - dataVolumeClaimSpec:\n        accessModes:\n          - 'ReadWriteOnce'\n        resources:\n          requests:\n            storage: 5Gi\n  backups:\n    pgbackrest:\n      image: registry.developers.crunchydata.com/crunchydata/crunchy-pgbackrest:centos8-2.35-0\n      repos:\n        - name: repo1\n          volume:\n            volumeClaimSpec:\n              accessModes:\n                - 'ReadWriteOnce'\n              resources:\n                requests:\n                  storage: 5Gi\n  users:\n    - name: postgres\n")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"pgo-vs-zalando-postgres-operator"},"pgo vs zalando postgres-operator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pgo",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709 pgo \u547d\u4ee4\u884c\u5de5\u5177"))),(0,o.kt)("li",{parentName:"ul"},"zalando",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709 Operator UI - \u4f7f\u7528\u6709\u95ee\u9898"),(0,o.kt)("li",{parentName:"ul"},"team \u76f8\u5173\u9009\u9879\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u662f\u5b9e\u9645\u4e00\u822c\u4e0d\u4f1a\u7528\u5230\uff0c\u589e\u52a0\u590d\u6742\u6027")))),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CrunchyData/postgres-operator/issues/992"},"https://github.com/CrunchyData/postgres-operator/issues/992"))))}d.isMDXComponent=!0}}]);