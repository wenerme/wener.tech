/*! For license information please see 1d317ced.3f0bb73e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30132],{3624:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(2488),t=s(62780);const o={title:"PromQL"},i="PromQL",a={id:"service/observability/metrics/prometheus/promql",title:"PromQL",description:"- PromQL",source:"@site/../notes/service/observability/metrics/prometheus/promql.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/promql",permalink:"/notes/service/observability/metrics/prometheus/promql",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/promql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"PromQL"},sidebar:"docs",previous:{title:"TSDB",permalink:"/notes/service/observability/metrics/prometheus/tsdb"},next:{title:"promxy",permalink:"/notes/service/observability/metrics/promxy"}},l={},c=[{value:"\u5e38\u7528",id:"\u5e38\u7528",level:2},{value:"irate vs rate",id:"irate-vs-rate",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"promql",children:"PromQL"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/querying/basics/",children:"PromQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/querying/examples/",children:"QUERY EXAMPLES"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@valyala/9ab455142085",children:"PromQL tutorial for beginners and humans"})}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301 PromQL \u7684\u5e94\u7528\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/VictoriaMetrics/VictoriaMetrics",children:"VictoriaMetrics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"long-term remote storage for Prometheus"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.robustperception.io/rate-then-sum-never-sum-then-rate",children:"Rate then sum, never sum then rate"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-promql",children:'# \u6307\u6807\nnode_cpu_seconds_total\n# \u6807\u7b7e\u8fc7\u6ee4\uff0c\u652f\u6301\u64cd\u4f5c\u7b26\u53f7 = != \u5339\u914d =~ \u4e0d\u5339\u914d !~\nnode_cpu_seconds_total{mode="user"}\n# 5 \u5206\u949f\u5747\u503c\nrate(node_cpu_seconds_total{mode="user"}[5m])\n# \u805a\u5408\u7ed3\u679c\nsum(rate(node_cpu_seconds_total{mode="user"}[5m]))\n# \u6309\u7167 mode \u5206\u7ec4\nsum(rate(node_cpu_seconds_total[5m])) by (mode)\n# \u4e0d\u770b idle \u548c nice\nsum(rate(node_cpu_seconds_total{mode!~"idle|nice"}[5m])) by (mode)\n# \u53ea\u770b user \u548c system\nsum(rate(node_cpu_seconds_total{mode=~"user|system"}[5m])) by (mode)\n# \u5206\u522b\u8fd4\u56de\n# by (mode) \u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4e22\u5931\u4e86 label\uff0c\u5219\u4f1a\u8ba4\u4e3a\u662f\u540c\u6837\u7684\u6307\u6807\uff0c\u4f1a\u88ab\u4e22\u5f03\nsum(rate(node_cpu_seconds_total{mode="user"}[5m])) by (mode) or sum(rate(node_cpu_seconds_total{mode="system"}[5m])) by (mode)\n# \u7ed3\u679c\u52a0\u4e0a\u53e6\u5916\u4e00\u4e2a\u6307\u6807\nsum(rate(node_cpu_seconds_total{mode=~"user|system"}[5m])) by (mode) or node_load15\n\n# unifiVapNumStations \u7ed3\u679c join unifiVapEssId label\nsum(unifiVapNumStations * on(unifiVapIndex,instance) group_left(unifiVapEssId) unifiVapEssId{}) by (unifiVapEssId)\n\n# \u66ff\u6362\u6807\u7b7e\n# grafana \u91cc\u80fd\u8ba9\u4e00\u5217\u51fa\u73b0\u4e24\u6b21\n# \u4f46 grafana \u4e0d\u80fd\u5168\u6587\u5339\u914d https://github.com/grafana/grafana/issues/11418\nlabel_replace(unifiIfMac, "unifiLabel", "$0", "unifiIfMac", ".+")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e38\u7528",children:"\u5e38\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-promql",children:'# \u67e5\u8be2\u5728\u7ebf\u8282\u70b9\n{__name__=~"probe_success|up"}\n# \u6210\u529f\u7387\nsum({__name__=~"probe_success|up"})/count({__name__=~"probe_success|up"})*100\n# \u5168\u8282\u70b9\u4fe1\u606f\nlabel_replace({__name__=~"probe_success|up"}, "instance_ip", "$2", "instance", "(192[.]168[.]|http?://)?([0-9.+]+|.*).*")\n\n# \u6392\u9664 kube \u5185\u7f6e\u7ec4\u4ef6\n{job!~"apiserver|kubelet"}\n'})}),"\n",(0,r.jsx)(n.p,{children:"| metric              |\n| ------------------- | ------------------------------------------------- |\n| node_uname_info     | Linux \u8282\u70b9\u4fe1\u606f                                    |\n| windows_os_info     | Windows \u8282\u70b9\u4fe1\u606f                                  |\n| windows_cs_hostname | ComputerSystem.DNSHostName, ComputerSystem.Domain |"}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"irate-vs-rate",children:"irate vs rate"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ea\u7528\u4e8e counter - \u589e\u957f\u503c"}),"\n",(0,r.jsx)(n.li,{children:"\u5c3d\u91cf\u4f7f\u7528 rate - irate \u4e0d\u6bd4 rate \u5feb\uff0c\u65e0\u6cd5\u6355\u83b7\u5cf0\u503c"}),"\n",(0,r.jsxs)(n.li,{children:["irate\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ea\u4f7f\u7528\u8303\u56f4\u5185\u6700\u8fd1\u4e24\u4e2a\u65f6\u95f4\u70b9\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["rate\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6240\u6709\u95f4\u9694\u8fdb\u884c\u6c42\u5e73\u5747\u6bcf\u79d2"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@valyala/why-irate-from-prometheus-doesnt-capture-spikes-45f9896d7832",children:"Why irate from Prometheus doesn't capture spikes"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},38088:(e,n,s)=>{var r=s(96651),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,o={},c=null,m=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(m=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:m,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>i});var r=s(96651);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);