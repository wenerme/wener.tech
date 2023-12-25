/*! For license information please see cace024e.c23fa388.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88415],{94579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=r(11527),n=r(47214);const o={title:"statsd_exporter"},a="statsd_exporter",i={id:"service/observability/metrics/prometheus/exporter/exporter-statsd",title:"statsd_exporter",description:"- prometheus/statsdexporter",source:"@site/../notes/service/observability/metrics/prometheus/exporter/exporter-statsd.md",sourceDirName:"service/observability/metrics/prometheus/exporter",slug:"/service/observability/metrics/prometheus/exporter/statsd",permalink:"/notes/service/observability/metrics/prometheus/exporter/statsd",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/exporter/exporter-statsd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"statsd_exporter"},sidebar:"docs",previous:{title:"Redis",permalink:"/notes/service/observability/metrics/prometheus/exporter/redis"},next:{title:"windows_exporter",permalink:"/notes/service/observability/metrics/prometheus/exporter/windows"}},c={},p=[{value:"asterisk",id:"asterisk",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"statsd_exporter",children:"statsd_exporter"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/prometheus/statsd_exporter",children:"prometheus/statsd_exporter"})}),"\n",(0,s.jsx)(t.li,{children:"statsd \u9ed8\u8ba4\u7aef\u53e3 8125/udp"}),"\n",(0,s.jsx)(t.li,{children:"statsd_exporter metrics 9102, statsd 9125"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'docker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  --name statsd-exporter prom/statsd-exporter\n\ndocker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  -v $PWD/statsd_mapping.yml:/tmp/statsd_mapping.yml \\\n  --name statsd-exporter prom/statsd-exporter --statsd.mapping-config=/tmp/statsd_mapping.yml\n\n# \u6d4b\u8bd5\n# -c close - \u4f46 busybox \u7684 nc \u4e0d\u652f\u6301\necho "deploys.test.myservice:1|c" | nc -w 1 -u 127.0.0.1 8125\necho "deploys.test.myservice:1|c" | socat -t 0 STDIN UDP:127.0.0.1:8125\n'})}),"\n",(0,s.jsx)(t.h2,{id:"asterisk",children:"asterisk"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"statsd.conf"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ini",children:"[general]\nenabled = yes\nserver = 192.168.1.1:8125\nprefix = ast-1\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"asterisk -R -x 'module reload res_statsd.so'\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'<PREFIX>_PJSIP_contacts_<CONTACT>__<ID>_rtt{quantile="0.5"} -0.001\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"mappings:\n  - match: '([^.]+)[.]PJSIP[.]contacts[.]([^;]+)(;[^.]*)?[.]rtt'\nmatch_type: regex\nname: 'pjsip_contacts_rtt'\nlabels:\nasterisk: '$1'\nconact: '$2'\nsummary_options:\nquantiles:\n  - quantile: 0.99\n    error: 0.001\n  - quantile: 0.9\n    error: 0.05\n  - quantile: 0.5\n    error: 0.005\nmax_summary_age: 60s\nsummary_age_buckets: 3\nstream_buffer_size: 1000\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,t,r)=>{var s=r(50959),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var s,o={},p=null,d=null;for(s in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:p,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=p,t.jsxs=p},11527:(e,t,r)=>{e.exports=r(3354)},47214:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var s=r(50959);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);