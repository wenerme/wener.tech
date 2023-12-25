/*! For license information please see adc55e6d.e75e6b23.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1900],{35375:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(11527),t=n(47214);const s={title:"grafana-operator",tags:["Kubernetes","Operator"]},o="grafana-operator",i={id:"service/observability/grafana/grafana-operator",title:"grafana-operator",description:"- grafana-operator",source:"@site/../notes/service/observability/grafana/grafana-operator.md",sourceDirName:"service/observability/grafana",slug:"/service/observability/grafana/operator",permalink:"/notes/service/observability/grafana/operator",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/grafana/grafana-operator.md",tags:[{label:"Kubernetes",permalink:"/notes/tags/kubernetes"},{label:"Operator",permalink:"/notes/tags/operator"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684666307,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{title:"grafana-operator",tags:["Kubernetes","Operator"]},sidebar:"docs",previous:{title:"Grafana \u914d\u7f6e",permalink:"/notes/service/observability/grafana/conf"},next:{title:"Grafana Prometheus",permalink:"/notes/service/observability/grafana/prometheus"}},l={},c=[{value:"error getting folders, expected status 200 but got 401",id:"error-getting-folders-expected-status-200-but-got-401",level:2},{value:"cannot list resource &quot;namespaces&quot; in API group &quot;&quot; at the cluster scope",id:"cannot-list-resource-namespaces-in-api-group--at-the-cluster-scope",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"grafana-operator",children:"grafana-operator"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/grafana-operator/grafana-operator",children:"grafana-operator"})}),"\n",(0,r.jsxs)(a.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/grafana-operator/grafana-operator/blob/master/documentation/api.md",children:"api"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["API\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"GrafanaDashboard"}),"\n",(0,r.jsx)(a.li,{children:"GrafanaDataSource"}),"\n",(0,r.jsx)(a.li,{children:"GrafanaNotificationChannel"}),"\n",(0,r.jsx)(a.li,{children:"Grafana"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\u652f\u6301\u7684 grafana \u7248\u672c\u76f8\u5bf9\u65e7 - ",(0,r.jsx)(a.a,{href:"https://github.com/grafana-operator/grafana-operator/blob/master/controllers/constants/constants.go#L5",children:"constants.go#L5"})]}),"\n",(0,r.jsxs)(a.li,{children:["grafana 8 Unified Alerting ",(0,r.jsx)(a.a,{href:"https://github.com/grafana-operator/grafana-operator/issues/564",children:"#564"})]}),"\n",(0,r.jsxs)(a.li,{children:["manage organizations ",(0,r.jsx)(a.a,{href:"https://github.com/grafana-operator/grafana-operator/pull/615",children:"#615"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Organisations provisioning ",(0,r.jsx)(a.a,{href:"https://github.com/grafana/grafana/issues/12119",children:"grafana/grafana#12119"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["orgId for GrafanaDashboard ",(0,r.jsx)(a.a,{href:"https://github.com/grafana-operator/grafana-operator/issues/525",children:"#525"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\u53ea\u80fd\u7ba1\u7406 orgId=1 \u7684 dashboard"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"apiVersion: integreatly.org/v1alpha1\nkind: Grafana\nmetadata:\n  name: cluster\nspec:\n  client:\n    preferService: true\n  deployment:\n    envFrom:\n      - secretRef:\n          name: cluster-grafana-env\n  config:\n    server:\n      root_url: https://grafana.example.com\n    log:\n      mode: console\n      level: info\n    log.frontend:\n      enabled: true\n    auth:\n      # default 10m\n      token_rotation_interval_minutes: 600\n    auth.anonymous:\n      enabled: false\n    analytics:\n      reporting_enabled: false\n      check_for_updates: false\n  ingress:\n    enabled: true\n    hostname: grafana.example.com\n    path: /\n    pathType: Prefix\n  service:\n    name: grafana-cluster\n  # \u6ca1\u6709 selector \u4e0d\u4f1a\u5339\u914d\u4efb\u4f55 dashboard\n  dashboardLabelSelector:\n    - matchExpressions:\n        - { key: category, operator: In, values: [plugin] }\n  # empty match All, null match nothing\n  dashboardNamespaceSelector: {}\n  resources:\n    requests:\n      cpu: 100m\n      memory: 100Mi\n"})}),"\n",(0,r.jsx)(a.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(a.h2,{id:"error-getting-folders-expected-status-200-but-got-401",children:"error getting folders, expected status 200 but got 401"}),"\n",(0,r.jsx)(a.p,{children:"\u5982\u679c\u4f7f\u7528\u4e86 envFrom\uff0c\u786e\u4fdd secret \u91cc\u5305\u542b GF_SECURITY_ADMIN_PASSWORD, GF_SECURITY_ADMIN_USER\uff0c\u4e14"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"spec:\n  deployment:\n    # \u662f\u5426\u521b\u5efa grafana-admin-credentials\n    skipCreateAdminAccount: true\n    envFrom:\n      - secretRef:\n          # \u5305\u542b GF_SECURITY_ADMIN_PASSWORD \u548c GF_SECURITY_ADMIN_USER\uff0c\u4e14\n          name: grafana-env\n"})}),"\n",(0,r.jsx)(a.p,{children:"\u9ed8\u8ba4\u6dfb\u52a0 security admin \u7684\u65b9\u5f0f"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"env:\n  - name: GF_SECURITY_ADMIN_USER\n    valueFrom:\n      secretKeyRef:\n        key: GF_SECURITY_ADMIN_USER\n        name: grafana-admin-credentials\n  - name: GF_SECURITY_ADMIN_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        key: GF_SECURITY_ADMIN_PASSWORD\n        name: grafana-admin-credentials\n"})}),"\n",(0,r.jsx)(a.h2,{id:"cannot-list-resource-namespaces-in-api-group--at-the-cluster-scope",children:'cannot list resource "namespaces" in API group "" at the cluster scope'}),"\n",(0,r.jsx)(a.p,{children:"\u5f00\u542f dashboardNamespaceSelector \u540e\uff0crabc \u9700\u8981\u7ed9\u6743\u9650 list namespace"})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,a,n)=>{var r=n(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)o.call(a,r)&&!l.hasOwnProperty(r)&&(s[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:t,type:e,key:c,ref:d,props:s,_owner:i.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},11527:(e,a,n)=>{e.exports=n(3354)},47214:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>o});var r=n(50959);const t={},s=r.createContext(t);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);