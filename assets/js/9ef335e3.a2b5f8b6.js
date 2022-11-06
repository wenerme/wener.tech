"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54138],{49613:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return p}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,v=u["".concat(s,".").concat(p)]||u[p]||b[p]||i;return r?n.createElement(v,o(o({ref:t},f),{},{components:r})):n.createElement(v,o({ref:t},f))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5806:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return p},default:function(){return O},frontMatter:function(){return u},metadata:function(){return v},toc:function(){return m}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&f(e,r,t[r]);return e};const u={title:"Observability FAQ",tags:["FAQ"]},p="Observability FAQ",v={unversionedId:"service/observability/observability-faq",id:"service/observability/observability-faq",title:"Observability FAQ",description:"fluent vs filebeat",source:"@site/../notes/service/observability/observability-faq.md",sourceDirName:"service/observability",slug:"/service/observability/faq",permalink:"/notes/service/observability/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/observability-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"Observability FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Observability Awesome",permalink:"/notes/service/observability/awesome"},next:{title:"Jaeger Operator",permalink:"/notes/service/observability/tracing/jaeger-operator"}},y={},m=[{value:"fluent vs filebeat",id:"fluent-vs-filebeat",level:2},{value:"Grafana vs Kibana",id:"grafana-vs-kibana",level:2}],d={toc:m};function O(e){var t,r=e,{components:a}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=b(b({},d),f),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",b({},{id:"observability-faq"}),"Observability FAQ"),(0,n.kt)("h2",b({},{id:"fluent-vs-filebeat"}),"fluent vs filebeat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",b({parentName:"li"},{href:"https://gist.github.com/StevenACoffman/4e267f0f60c8e7fcb3f77b9e504f3bd7"}),"fluent-filebeat-comparison.md"))),(0,n.kt)("h2",b({},{id:"grafana-vs-kibana"}),"Grafana vs Kibana"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",b({parentName:"li"},{href:"https://logz.io/blog/grafana-vs-kibana/"}),"Grafana vs. Kibana: The Key Differences to Know"))))))}O.isMDXComponent=!0}}]);