"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54138],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,v=p["".concat(s,".").concat(f)]||p[f]||b[f]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23220:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},b=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const v={title:"Observability FAQ",tags:["FAQ"]},m="Observability FAQ",y={unversionedId:"service/observability/observability-faq",id:"service/observability/observability-faq",title:"Observability FAQ",description:"- \u57fa\u7840\u8bbe\u65bd - Operational",source:"@site/../notes/service/observability/observability-faq.md",sourceDirName:"service/observability",slug:"/service/observability/faq",permalink:"/notes/service/observability/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/observability-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"Observability FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Observability Awesome",permalink:"/notes/service/observability/awesome"},next:{title:"OpenObserve",permalink:"/notes/service/observability/openobserve"}},d={},k=[{value:"\u6570\u636e\u89c4\u6a21",id:"\u6570\u636e\u89c4\u6a21",level:2},{value:"\u957f\u671f\u5b58\u50a8",id:"\u957f\u671f\u5b58\u50a8",level:2},{value:"fluent vs filebeat",id:"fluent-vs-filebeat",level:2},{value:"Grafana vs Kibana",id:"grafana-vs-kibana",level:2}],O={toc:k},g="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,b(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"observability-faq"}),"Observability FAQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd - Operational"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u4e1a\u52a1")),(0,n.kt)("h2",p({},{id:"\u6570\u636e\u89c4\u6a21"}),"\u6570\u636e\u89c4\u6a21"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u89c4\u6a21"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u91cf\u7ea7"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u5c0f\u89c4\u6a21"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"< GB/\u5929")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u4e2d\u89c4\u6a21"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"GB/\u5929 < TB/\u5929")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u5927\u89c4\u6a21"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"TB/\u5929, PB/\u5929")))),(0,n.kt)("h2",p({},{id:"\u957f\u671f\u5b58\u50a8"}),"\u957f\u671f\u5b58\u50a8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u81f3\u5c11 \u5927\u4e8e 6\u4e2a\u6708"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u505a\u4e0b\u91c7\u6837")),(0,n.kt)("h2",p({},{id:"fluent-vs-filebeat"}),"fluent vs filebeat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://gist.github.com/StevenACoffman/4e267f0f60c8e7fcb3f77b9e504f3bd7"}),"fluent-filebeat-comparison.md"))),(0,n.kt)("h2",p({},{id:"grafana-vs-kibana"}),"Grafana vs Kibana"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://logz.io/blog/grafana-vs-kibana/"}),"Grafana vs. Kibana: The Key Differences to Know"))))))}h.isMDXComponent=!0}}]);