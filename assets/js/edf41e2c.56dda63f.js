"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65807],{49613:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return m}});var t=r(59496);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),p=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,g=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?t.createElement(g,i(i({ref:a},c),{},{components:r})):t.createElement(g,i({ref:a},c))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4484:function(e,a,r){r.r(a),r.d(a,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return b}});var t=r(49613),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,r)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,u=(e,a)=>{for(var r in a||(a={}))s.call(a,r)&&c(e,r,a[r]);if(l)for(var r of l(a))p.call(a,r)&&c(e,r,a[r]);return e};const f={title:"grafana-operator",tags:["Kubernetes","Operator"]},m="grafana-operator",g={unversionedId:"service/observability/grafana-operator",id:"service/observability/grafana-operator",title:"grafana-operator",description:"- grafana-operator",source:"@site/../notes/service/observability/grafana-operator.md",sourceDirName:"service/observability",slug:"/service/observability/grafana-operator",permalink:"/notes/service/observability/grafana-operator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/grafana-operator.md",tags:[{label:"Kubernetes",permalink:"/notes/tags/kubernetes"},{label:"Operator",permalink:"/notes/tags/operator"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"grafana-operator",tags:["Kubernetes","Operator"]},sidebar:"docs",previous:{title:"Grafana \u914d\u7f6e",permalink:"/notes/service/observability/grafana-conf"},next:{title:"Grafana Prometheus",permalink:"/notes/service/observability/grafana-prometheus"}},d={},b=[{value:"error getting folders, expected status 200 but got 401",id:"error-getting-folders-expected-status-200-but-got-401",level:2},{value:"cannot list resource &quot;namespaces&quot; in API group &quot;&quot; at the cluster scope",id:"cannot-list-resource-namespaces-in-api-group--at-the-cluster-scope",level:2}],y={toc:b};function v(e){var a,r=e,{components:n}=r,c=((e,a)=>{var r={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&p.call(e,t)&&(r[t]=e[t]);return r})(r,["components"]);return(0,t.kt)("wrapper",(a=u(u({},y),c),o(a,i({components:n,mdxType:"MDXLayout"}))),(0,t.kt)("h1",u({},{id:"grafana-operator"}),"grafana-operator"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana-operator/grafana-operator"}),"grafana-operator")),(0,t.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana-operator/grafana-operator/blob/master/documentation/api.md"}),"api")))),(0,t.kt)("li",{parentName:"ul"},"API",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"GrafanaDashboard"),(0,t.kt)("li",{parentName:"ul"},"GrafanaDataSource"),(0,t.kt)("li",{parentName:"ul"},"GrafanaNotificationChannel"),(0,t.kt)("li",{parentName:"ul"},"Grafana")))),(0,t.kt)("admonition",u({},{type:"tip"}),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684 grafana \u7248\u672c\u76f8\u5bf9\u65e7 - ",(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana-operator/grafana-operator/blob/master/controllers/constants/constants.go#L5"}),"constants.go#L5")),(0,t.kt)("li",{parentName:"ul"},"grafana 8 Unified Alerting ",(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana-operator/grafana-operator/issues/564"}),"#564")),(0,t.kt)("li",{parentName:"ul"},"manage organizations ",(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana-operator/grafana-operator/pull/615"}),"#615"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Organisations provisioning ",(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana/grafana/issues/12119"}),"grafana/grafana#12119")))),(0,t.kt)("li",{parentName:"ul"},"orgId for GrafanaDashboard ",(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana-operator/grafana-operator/issues/525"}),"#525"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7ba1\u7406 orgId=1 \u7684 dashboard"))))),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: integreatly.org/v1alpha1\nkind: Grafana\nmetadata:\n  name: cluster\nspec:\n  client:\n    preferService: true\n  deployment:\n    envFrom:\n      - secretRef:\n          name: cluster-grafana-env\n  config:\n    server:\n      root_url: https://grafana.example.com\n    log:\n      mode: console\n      level: info\n    log.frontend:\n      enabled: true\n    auth:\n      # default 10m\n      token_rotation_interval_minutes: 600\n    auth.anonymous:\n      enabled: false\n    analytics:\n      reporting_enabled: false\n      check_for_updates: false\n  ingress:\n    enabled: true\n    hostname: grafana.example.com\n    path: /\n    pathType: Prefix\n  service:\n    name: grafana-cluster\n  # \u6ca1\u6709 selector \u4e0d\u4f1a\u5339\u914d\u4efb\u4f55 dashboard\n  dashboardLabelSelector:\n    - matchExpressions:\n        - { key: category, operator: In, values: [plugin] }\n  # empty match All, null match nothing\n  dashboardNamespaceSelector: {}\n  resources:\n    requests:\n      cpu: 100m\n      memory: 100Mi\n")),(0,t.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,t.kt)("h2",u({},{id:"error-getting-folders-expected-status-200-but-got-401"}),"error getting folders, expected status 200 but got 401"),(0,t.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86 envFrom\uff0c\u786e\u4fdd secret \u91cc\u5305\u542b GF_SECURITY_ADMIN_PASSWORD, GF_SECURITY_ADMIN_USER\uff0c\u4e14"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"spec:\n  deployment:\n    # \u662f\u5426\u521b\u5efa grafana-admin-credentials\n    skipCreateAdminAccount: true\n    envFrom:\n      - secretRef:\n          # \u5305\u542b GF_SECURITY_ADMIN_PASSWORD \u548c GF_SECURITY_ADMIN_USER\uff0c\u4e14\n          name: grafana-env\n")),(0,t.kt)("p",null,"\u9ed8\u8ba4\u6dfb\u52a0 security admin \u7684\u65b9\u5f0f"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"env:\n  - name: GF_SECURITY_ADMIN_USER\n    valueFrom:\n      secretKeyRef:\n        key: GF_SECURITY_ADMIN_USER\n        name: grafana-admin-credentials\n  - name: GF_SECURITY_ADMIN_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        key: GF_SECURITY_ADMIN_PASSWORD\n        name: grafana-admin-credentials\n")),(0,t.kt)("h2",u({},{id:"cannot-list-resource-namespaces-in-api-group--at-the-cluster-scope"}),'cannot list resource "namespaces" in API group "" at the cluster scope'),(0,t.kt)("p",null,"\u5f00\u542f dashboardNamespaceSelector \u540e\uff0crabc \u9700\u8981\u7ed9\u6743\u9650 list namespace"))}v.isMDXComponent=!0}}]);