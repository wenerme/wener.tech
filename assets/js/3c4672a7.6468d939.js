"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95037],{71556:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(96600),s=r(27279),a=(r(59496),r(3905)),o=["components"],i={title:"statsd_exporter"},p=void 0,c={unversionedId:"service/observability/metrics/prometheus/statsd_exporter",id:"service/observability/metrics/prometheus/statsd_exporter",title:"statsd_exporter",description:"- prometheus/statsdexporter",source:"@site/notes/service/observability/metrics/prometheus/statsd_exporter.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/statsd_exporter",permalink:"/notes/service/observability/metrics/prometheus/statsd_exporter",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/statsd_exporter.md",tags:[],version:"current",frontMatter:{title:"statsd_exporter"},sidebar:"docs",previous:{title:"PromQL",permalink:"/notes/service/observability/metrics/prometheus/promql"},next:{title:"windows_exporter",permalink:"/notes/service/observability/metrics/prometheus/windows_exporter"}},l={},u=[{value:"asterisk",id:"asterisk",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/prometheus/statsd_exporter"},"prometheus/statsd_exporter")),(0,a.kt)("li",{parentName:"ul"},"statsd \u9ed8\u8ba4\u7aef\u53e3 8125/udp"),(0,a.kt)("li",{parentName:"ul"},"statsd_exporter \u7aef\u53e3 9102")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  --name statsd-exporter prom/statsd-exporter\n\ndocker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  -v $PWD/statsd_mapping.yml:/tmp/statsd_mapping.yml \\\n  --name statsd-exporter prom/statsd-exporter --statsd.mapping-config=/tmp/statsd_mapping.yml\n\n# \u6d4b\u8bd5\n# -c close - \u4f46 busybox \u7684 nc \u4e0d\u652f\u6301\necho "deploys.test.myservice:1|c" | nc -w 1 -u 127.0.0.1 8125\necho "deploys.test.myservice:1|c" | socat -t 0 STDIN UDP:127.0.0.1:8125\n')),(0,a.kt)("h2",{id:"asterisk"},"asterisk"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"statsd.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[general]\nenabled = yes\nserver = 192.168.1.1:8125\nprefix = ast-1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"asterisk -R -x 'module reload res_statsd.so'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<PREFIX>_PJSIP_contacts_<CONTACT>__<ID>_rtt{quantile="0.5"} -0.001\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"mappings:\n  - match: '([^.]+)[.]PJSIP[.]contacts[.]([^;]+)(;[^.]*)?[.]rtt'\nmatch_type: regex\nname: 'pjsip_contacts_rtt'\nlabels:\nasterisk: '$1'\nconact: '$2'\nsummary_options:\nquantiles:\n  - quantile: 0.99\n    error: 0.001\n  - quantile: 0.9\n    error: 0.05\n  - quantile: 0.5\n    error: 0.005\nmax_summary_age: 60s\nsummary_age_buckets: 3\nstream_buffer_size: 1000\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);