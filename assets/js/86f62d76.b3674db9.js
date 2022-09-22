"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99964],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(r),k=n,g=m["".concat(c,".").concat(k)]||m[k]||s[k]||i;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var a=r(96600),n=r(27279),i=(r(59496),r(49613)),l=["components"],p={title:"Tracing Awesome",tags:["Awesome"]},c=void 0,o={unversionedId:"service/observability/tracing/tracing-awesome",id:"service/observability/tracing/tracing-awesome",title:"Tracing Awesome",description:"- \u4e3b\u6d41 Jaeger\u3001Zipkin\u3001Apache SkyWalking\u3001CAT\u3001Pinpoint\u3001Elastic APM",source:"@site/notes/service/observability/tracing/tracing-awesome.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/tracing-awesome",permalink:"/notes/service/observability/tracing/tracing-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/tracing/tracing-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Tracing Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"SkyWalking",permalink:"/notes/service/observability/tracing/skywalking"},next:{title:"Zipkin",permalink:"/notes/service/observability/tracing/zipkin"}},u={},s=[{value:"Service",id:"service",level:2},{value:"Integration",id:"integration",level:2},{value:"Spec",id:"spec",level:2},{value:"Reference",id:"reference",level:2},{value:"Jaeger vs Zipkin",id:"jaeger-vs-zipkin",level:2}],m={toc:s};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u6d41 Jaeger\u3001Zipkin\u3001Apache SkyWalking\u3001CAT\u3001Pinpoint\u3001Elastic APM")),(0,i.kt)("h2",{id:"service"},"Service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openzipkin/zipkin"},"openzipkin/zipkin"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Java"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jaegertracing/jaeger"},"jaegertracing/jaeger"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Golang"),(0,i.kt)("li",{parentName:"ul"},"Thrift"),(0,i.kt)("li",{parentName:"ul"},"CNCF Jaeger, a Distributed Tracing System"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jaegertracing.io/"},"https://jaegertracing.io/")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-skywalking"},"apache/skywalking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Java"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/uptrace/uptrace"},"uptrace/uptrace"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BSL, Golang"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4f7f\u7528 ClickHouse"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lmangani/cLoki"},"lmangani/cLoki"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AGPL-3.0, JS"),(0,i.kt)("li",{parentName:"ul"},"Loki+ClickHouse")))),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-cloud-sleuth"},"Spring Cloud Sleuth"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.spring.io/spring-cloud-sleuth/reference/html/"},"\u53c2\u8003\u624b\u518c")),(0,i.kt)("li",{parentName:"ul"},"spring-cloud-sleuth-zipkin \u652f\u6301\u96c6\u6210 Zipkin\uff0c\u9ed8\u8ba4\u53d1\u9001\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:9411"),"\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.zipkin.baseUrl")," \u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u4f1a\u8bb0\u5f55 trace \u4fe1\u606f\u5230 Slf4J MDC"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openzipkin-contrib/brave-opentracing"},"openzipkin-contrib/brave-opentracing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenTracing \u9002\u914d Zipkin")))),(0,i.kt)("h2",{id:"spec"},"Spec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://opentracing.io/"},"opentracing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Vendor-neutral APIs and instrumentation for distributed tracing"))),(0,i.kt)("li",{parentName:"ul"},"W3C ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3c/trace-context"},"trace-context"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HTTP \u6dfb\u52a0 trace \u5934 traceparent,traceparent"),(0,i.kt)("li",{parentName:"ul"},"\u5934\u4e2d\u4fe1\u606f\u5305\u542b version\u3001trace-id\u3001parent-id\u3001trace-flags")))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Tracing_(software)"},"Tracing")),(0,i.kt)("li",{parentName:"ul"},"Google ",(0,i.kt)("a",{parentName:"li",href:"https://research.google.com/pubs/pub36356.html"},"Dapper"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a Large-Scale Distributed Systems Tracing Infrastructure"))),(0,i.kt)("li",{parentName:"ul"},"APM - application performance monitor")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"jaeger-vs-zipkin"},"Jaeger vs Zipkin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jaeger",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Golang, CNCF \u9879\u76ee"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u9002\u7528\u4e8e Kubernates \u73af\u5883"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u4e3a agent\u3001collector\u3001query \u7b49\u89d2\u8272"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 0.1% \u91c7\u6837"))),(0,i.kt)("li",{parentName:"ul"},"Zipkin",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Java"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5bb9\u5668\u5316\u6f6e\u6d41\u524d\u4fbf\u5df2\u5b58\u5728"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u670d\u52a1\uff0c\u62a5\u8868\u3001\u91c7\u96c6"),(0,i.kt)("li",{parentName:"ul"},"Spring Cloud Sleuth \u6709\u96c6\u6210")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"jaeger"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.12/architecture/"},(0,i.kt)("img",{parentName:"a",src:"https://www.jaegertracing.io/img/architecture-v1.png",alt:"jaeger architecture"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"zipkin"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/architecture.html"},(0,i.kt)("img",{parentName:"a",src:"https://zipkin.io/public/img/architecture-1.png",alt:"zipkin architecture"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bizety.com/2019/01/14/distributed-tracing-for-microservices-jaeger-vs-zipkin/"},"Distributed Tracing for Microservices: Jaeger vs. Zipkin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://logz.io/blog/zipkin-vs-jaeger/"},"Zipkin vs Jaeger: Getting Started With Tracing"))))))}k.isMDXComponent=!0}}]);