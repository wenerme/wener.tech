"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86069],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11839:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={title:"Prometheus FAQ",tags:["FAQ"]},d="Prometheus \u5e38\u89c1\u95ee\u9898",f={unversionedId:"service/observability/metrics/prometheus/prometheus-faq",id:"service/observability/metrics/prometheus/prometheus-faq",title:"Prometheus FAQ",description:"remote write \u8c03\u4f18",source:"@site/../notes/service/observability/metrics/prometheus/prometheus-faq.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/faq",permalink:"/notes/service/observability/metrics/prometheus/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/prometheus-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641638108,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"Prometheus FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Prometheus Exporter",permalink:"/notes/service/observability/metrics/prometheus/exporter"},next:{title:"Prometheus \u8054\u90a6",permalink:"/notes/service/observability/metrics/prometheus/federation"}},b={},y=[{value:"remote write \u8c03\u4f18",id:"remote-write-\u8c03\u4f18",level:2},{value:"open /prometheus/queries.active: permission denied",id:"open-prometheusqueriesactive-permission-denied",level:2}],h={toc:y};function v(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"prometheus-\u5e38\u89c1\u95ee\u9898"}),"Prometheus \u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h2",m({},{id:"remote-write-\u8c03\u4f18"}),"remote write \u8c03\u4f18"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://prometheus.io/docs/practices/remote_write/"}),"REMOTE WRITE TUNING")),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u4f18\u76ee\u6807 \u5ef6\u65f6\u3001QPS\u3001\u5185\u5b58\u5360\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5185\u5b58\u5360\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u964d\u4f4e max_shards, \u589e\u52a0 capacity \u548c max_samples_per_send"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u7247\u5185\u5b58\u5360\u7528\u5f71\u54cd\u56e0\u7d20 ",(0,n.kt)("inlineCode",{parentName:"li"},"number of shards * (capacity + max_samples_per_send)")))),(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5ef6\u65f6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11 batch_send_deadline, \u589e\u52a0 max_samples_per_send"))),(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11 QPS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0 max_samples_per_send, \u589e\u52a0 capacity"),(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11 QPS \u4e5f\u80fd\u51cf\u5c11\u670d\u52a1\u7aef\u538b\u529b"))),(0,n.kt)("li",{parentName:"ul"},"shards \u4f1a\u81ea\u52a8\u589e\u51cf - \u901a\u8fc7 min_shards \u548c max_shards \u9650\u5b9a\u8303\u56f4")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# \u9ed8\u8ba4\n# \u4e00\u4e2a\u5206\u7247\u5927\u7ea6 500k\ncapacity: 2500\nmax_samples_per_send: 500\n\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 100\nbatch_send_deadline: 5s\n\n# capacity\n# \u6bcf\u4e2a\u5206\u7247\u961f\u5217\u7684\u5bb9\u91cf\n# \u9700\u8981\u8bbe\u7f6e\u9ad8\u4e00\u70b9\u907f\u514d\u963b\u585e\u8bfb\u53d6 wal\n# \u4e00\u822c 3-10 \u500d\u4e8e max_samples_per_send\ncapacity:\n\n# \u6279\u91cf\u53d1\u9001\u66b4\u529b\u914d\u7f6e\ncapacity: 10000\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 5000\nbatch_send_deadline: 10s\n")),(0,n.kt)("h2",m({},{id:"open-prometheusqueriesactive-permission-denied"}),"open /prometheus/queries.active: permission denied"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"prometheus operator \u90e8\u7f72\u7684\u8bdd\u53ef\u80fd\u5728 volume \u51fa\u73b0\u95ee\u9898\u7684\u65f6\u5019\u51fa\u73b0\u8be5\u9519\u8bef"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 emptyDir \u6302\u8f7d\u53ef\u907f\u514d\uff0c\u6216\u8005\u4fee\u590d volume")))}v.isMDXComponent=!0}}]);