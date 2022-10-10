"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28779],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,b=g["".concat(s,".").concat(m)]||g[m]||c[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68809:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return d}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const g={title:"logging-operator",tags:["Kubernetes","Operator"]},m="logging-operator",b={unversionedId:"service/observability/logging/logging-operator",id:"service/observability/logging/logging-operator",title:"logging-operator",description:"- banzaicloud/logging-operator",source:"@site/../notes/service/observability/logging/logging-operator.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/operator",permalink:"/notes/service/observability/logging/operator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/logging/logging-operator.md",tags:[{label:"Kubernetes",permalink:"/notes/tags/kubernetes"},{label:"Operator",permalink:"/notes/tags/operator"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655100912,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{title:"logging-operator",tags:["Kubernetes","Operator"]},sidebar:"docs",previous:{title:"Logging Awesome",permalink:"/notes/service/observability/logging/awesome"},next:{title:"Loki",permalink:"/notes/service/observability/logging/loki"}},f={},d=[{value:"Notes",id:"notes",level:2}],y={toc:d};function k(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"logging-operator"}),"logging-operator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/banzaicloud/logging-operator"}),"banzaicloud/logging-operator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fluentd and Fluentbit"),(0,r.kt)("li",{parentName:"ul"},"Kafka, Loki, Elasticsearch"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[CRDs]",(0,r.kt)("a",c({parentName:"li"},{href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/()"}),"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/()"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Logging\nmetadata:\n  name: default-logging-simple\nspec:\n  fluentd: {}\n  fluentbit: {}\n  controlNamespace: logging\n  #watchNamespaces: ["prod", "test"]\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: Output\nmetadata:\n  name: es-output\nspec:\n  # ES\n  elasticsearch:\n    host: quickstart-es-http.logging.svc.cluster.local\n    port: 9200\n    scheme: https\n    ssl_verify: false\n    ssl_version: TLSv1_2\n    user: elastic\n    password:\n      valueFrom:\n        secretKeyRef:\n          name: quickstart-es-elastic-user\n          key: elastic\n    buffer:\n      timekey: 1m\n      timekey_wait: 30s\n      timekey_use_utc: true\n  # Loki\n  loki:\n    url: http://loki:3100\n    configure_kubernetes_labels: true\n    buffer:\n      timekey: 1m\n      timekey_wait: 30s\n      timekey_use_utc: true\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: es-flow\nspec:\n  filters:\n    - tag_normaliser: {}\n    - parser:\n        remove_key_name_field: true\n        reserve_data: true\n        parse:\n          type: nginx\n  match:\n    - select:\n        labels:\n          app.kubernetes.io/name: log-generator\n  localOutputRefs:\n    - es-output\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: log-generator\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: log-generator\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: log-generator\n    spec:\n      containers:\n        - name: nginx\n          image: banzaicloud/log-generator:0.3.2\n')),(0,r.kt)("h2",c({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fluentd + Fluent-bit"))),(0,r.kt)("li",{parentName:"ul"},"Output"),(0,r.kt)("li",{parentName:"ul"},"Flow",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"filters + outputs"))),(0,r.kt)("li",{parentName:"ul"},"clusteroutput",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9650\u5b9a Namespace \u7684 Output"))),(0,r.kt)("li",{parentName:"ul"},"clusterflow",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9650\u5b9a Namespace \u7684 Flow")))))}k.isMDXComponent=!0}}]);