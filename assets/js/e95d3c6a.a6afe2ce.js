/*! For license information please see e95d3c6a.a6afe2ce.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86069],{91308:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(11527),t=s(47214);const i={title:"Prometheus FAQ",tags:["FAQ"]},a="Prometheus \u5e38\u89c1\u95ee\u9898",o={id:"service/observability/metrics/prometheus/prometheus-faq",title:"Prometheus FAQ",description:"remote write \u8c03\u4f18",source:"@site/../notes/service/observability/metrics/prometheus/prometheus-faq.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/faq",permalink:"/notes/service/observability/metrics/prometheus/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/prometheus-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Prometheus FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Prometheus API",permalink:"/notes/service/observability/metrics/prometheus/api"},next:{title:"Prometheus \u8054\u90a6",permalink:"/notes/service/observability/metrics/prometheus/federation"}},l={},c=[{value:"remote write \u8c03\u4f18",id:"remote-write-\u8c03\u4f18",level:2},{value:"open /prometheus/queries.active: permission denied",id:"open-prometheusqueriesactive-permission-denied",level:2},{value:"unknown function with name &quot;label_values&quot;",id:"unknown-function-with-name-label_values",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"prometheus-\u5e38\u89c1\u95ee\u9898",children:"Prometheus \u5e38\u89c1\u95ee\u9898"}),"\n",(0,r.jsx)(n.h2,{id:"remote-write-\u8c03\u4f18",children:"remote write \u8c03\u4f18"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://prometheus.io/docs/practices/remote_write/",children:"REMOTE WRITE TUNING"})}),"\n",(0,r.jsx)(n.li,{children:"\u8c03\u4f18\u76ee\u6807 \u5ef6\u65f6\u3001QPS\u3001\u5185\u5b58\u5360\u7528"}),"\n",(0,r.jsxs)(n.li,{children:["\u51cf\u5c11\u5185\u5b58\u5360\u7528\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u964d\u4f4e max_shards, \u589e\u52a0 capacity \u548c max_samples_per_send"}),"\n",(0,r.jsxs)(n.li,{children:["\u5206\u7247\u5185\u5b58\u5360\u7528\u5f71\u54cd\u56e0\u7d20 ",(0,r.jsx)(n.code,{children:"number of shards * (capacity + max_samples_per_send)"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u51cf\u5c11\u5ef6\u65f6\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u51cf\u5c11 batch_send_deadline, \u589e\u52a0 max_samples_per_send"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u51cf\u5c11 QPS\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0 max_samples_per_send, \u589e\u52a0 capacity"}),"\n",(0,r.jsx)(n.li,{children:"\u51cf\u5c11 QPS \u4e5f\u80fd\u51cf\u5c11\u670d\u52a1\u7aef\u538b\u529b"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"shards \u4f1a\u81ea\u52a8\u589e\u51cf - \u901a\u8fc7 min_shards \u548c max_shards \u9650\u5b9a\u8303\u56f4"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# \u9ed8\u8ba4\n# \u4e00\u4e2a\u5206\u7247\u5927\u7ea6 500k\ncapacity: 2500\nmax_samples_per_send: 500\n\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 100\nbatch_send_deadline: 5s\n\n# capacity\n# \u6bcf\u4e2a\u5206\u7247\u961f\u5217\u7684\u5bb9\u91cf\n# \u9700\u8981\u8bbe\u7f6e\u9ad8\u4e00\u70b9\u907f\u514d\u963b\u585e\u8bfb\u53d6 wal\n# \u4e00\u822c 3-10 \u500d\u4e8e max_samples_per_send\ncapacity:\n\n# \u6279\u91cf\u53d1\u9001\u66b4\u529b\u914d\u7f6e\ncapacity: 10000\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 5000\nbatch_send_deadline: 10s\n"})}),"\n",(0,r.jsx)(n.h2,{id:"open-prometheusqueriesactive-permission-denied",children:"open /prometheus/queries.active: permission denied"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"prometheus operator \u90e8\u7f72\u7684\u8bdd\u53ef\u80fd\u5728 volume \u51fa\u73b0\u95ee\u9898\u7684\u65f6\u5019\u51fa\u73b0\u8be5\u9519\u8bef"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 emptyDir \u6302\u8f7d\u53ef\u907f\u514d\uff0c\u6216\u8005\u4fee\u590d volume"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"unknown-function-with-name-label_values",children:'unknown function with name "label_values"'}),"\n",(0,r.jsx)(n.p,{children:"grafana template"})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var r=s(50959),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,i={},c=null,d=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(50959);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);