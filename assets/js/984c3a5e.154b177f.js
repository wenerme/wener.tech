"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36355],{49613:function(e,t,l){l.d(t,{Zo:function(){return m},kt:function(){return N}});var n=l(59496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(l),N=a,s=c["".concat(p,".").concat(N)]||c[N]||k[N]||i;return l?n.createElement(s,r(r({ref:t},m),{},{components:l})):n.createElement(s,r({ref:t},m))}));function N(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var o=2;o<i;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},29033:function(e,t,l){l.r(t),l.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return k}});var n=l(96600),a=l(27279),i=(l(59496),l(49613)),r=["components"],u={id:"cloud",title:"Spring Cloud"},p="Spring Cloud",o={unversionedId:"java/spring/cloud",id:"java/spring/cloud",title:"Spring Cloud",description:"* Spring Cloud",source:"@site/../notes/java/spring/spring-cloud.md",sourceDirName:"java/spring",slug:"/java/spring/cloud",permalink:"/notes/java/spring/cloud",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/java/spring/spring-cloud.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"cloud",title:"Spring Cloud"},sidebar:"docs",previous:{title:"Spring Boot",permalink:"/notes/java/spring/boot"},next:{title:"Spring Data REST",permalink:"/notes/java/spring/data-rest"}},m={},k=[{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u5e94\u7528\u4e0a\u4e0b\u6587",id:"\u5e94\u7528\u4e0a\u4e0b\u6587",level:2},{value:"Reference",id:"reference",level:2},{value:"Spring Cloud Netflix Eureka",id:"spring-cloud-netflix-eureka",level:2},{value:"zuul",id:"zuul",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:4},{value:"\u65e0\u6cd5\u53cd\u5411\u4ee3\u7406 WebSockets",id:"\u65e0\u6cd5\u53cd\u5411\u4ee3\u7406-websockets",level:5},{value:"\u65e0\u6cd5\u57fa\u4e8e\u57df\u540d\u53cd\u5411\u4ee3\u7406",id:"\u65e0\u6cd5\u57fa\u4e8e\u57df\u540d\u53cd\u5411\u4ee3\u7406",level:5},{value:"Spring Cloud Netflix Zuul",id:"spring-cloud-netflix-zuul",level:3},{value:"FAQ",id:"faq",level:4},{value:"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e",id:"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e",level:5},{value:"spring-cloud-config",id:"spring-cloud-config",level:2},{value:"spring-cloud-config-client",id:"spring-cloud-config-client",level:3},{value:"spring-cloud-config-server",id:"spring-cloud-config-server",level:3}],c={toc:k};function N(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spring-cloud"},"Spring Cloud"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://projects.spring.io/spring-cloud/"},"Spring Cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://cloud.spring.io/spring-cloud-static/Dalston.RELEASE"},"Dalston.RELEASE Docs"))),(0,i.kt)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f/\u7248\u672c\u5316 \u914d\u7f6e\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u76f4\u63a5\u8c03\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,i.kt)("li",{parentName:"ul"},"Circuit Breakers"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u5c40\u9501"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8282\u70b9\u9009\u4e3e\u548c\u96c6\u7fa4\u72b6\u6001\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u6d88\u606f\u4f20\u9012")),(0,i.kt)("h2",{id:"\u5e94\u7528\u4e0a\u4e0b\u6587"},"\u5e94\u7528\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u8be5\u6a21\u5757\u4f1a\u5728 SpringApplication \u6216 SpringApplicationBuilder \u4e0a\u6dfb\u52a0\u4e00\u4e2a\u542f\u52a8\u5c42,"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String Cloud \u4f1a\u5728\u7a0b\u5e8f\u4e0a\u6dfb\u52a0\u4e00\u4e2a\u542f\u52a8\u5c42,\u4f7f\u7528 boostrap.yml \u6765\u63a7\u5236\u542f\u52a8\u5c42\u7684\u884c\u4e3a"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u7a0b\u5e8f\u76f8\u5173\u7684\u914d\u7f6e,\u5efa\u8bae\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.application.name"),"."),(0,i.kt)("li",{parentName:"ul"},"\u5728\u542f\u52a8\u65f6\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.cloud.bootstrap.enabled=false")," \u53ef\u7981\u7528\u8be5\u542f\u52a8\u5c42."),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5c42\u8d1f\u8d23\u62ff\u5230\u5177\u4f53\u7684\u7a0b\u5e8f\u914d\u7f6e,\u5177\u4f53\u914d\u7f6e\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6e90."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://cloud.spring.io/spring-cloud-static/Dalston.RELEASE/#_appendix_compendium_of_configuration_properties"},"Appendix: Compendium of Configuration Properties"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"bootstrap.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  application:\n    name: foo\n  cloud:\n    config:\n      uri: ${SPRING_CONFIG_URI:http://localhost:8888}\n")),(0,i.kt)("h2",{id:"spring-cloud-netflix-eureka"},"Spring Cloud Netflix Eureka"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance"},"Eureka at a glance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://blog.abhijitsarkar.org/technical/netflix-eureka/"},"Spring Cloud Netflix Eureka - The Hidden Manual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.itmuch.com/spring-cloud-sum-eureka/"},"Spring Cloud\u4e2d\uff0cEureka\u5e38\u89c1\u95ee\u9898\u603b\u7ed3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud/spring-cloud-netflix/issues/203"},"Eureka Clustering documentation and best practices#203"))),(0,i.kt)("h2",{id:"zuul"},"zuul"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/zuul"},"Netflix/zuul"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZuulServlet"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5165\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u8d1f\u8d23\u521d\u59cb\u5316 RequestContext",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61"))),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u8bf7\u6c42\u4ee3\u7406\u7ed9\u8fc7\u6ee4\u5668\u5904\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u6587\u524d\u4e2d\u540e\u548c\u5f02\u5e38\u6b65\u9aa4"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5f00\u542f buffer-requests, \u5c06\u8bf7\u6c42\u4f53\u7f13\u5b58\u8d77\u6765"),(0,i.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u4e5f\u662f\u4f1a\u7f13\u51b2\u8d77\u6765"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RequestContext.getCurrentContext()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u76f8\u5173"),(0,i.kt)("li",{parentName:"ul"},"\u96c6\u6210\u81ea ConcurrentHashMap ,\u7528\u4e8e\u5b58\u50a8\u989d\u5916\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FilterProcessor.getInstance()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7684\u8fc7\u6ee4\u5904\u7406"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FilterLoader.getInstance()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u548c\u7f16\u8bd1\u8fc7\u6ee4\u5668 ",(0,i.kt)("inlineCode",{parentName:"li"},"ZuulFilter")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZuulFilter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u5904\u7406\u7684\u8fc7\u6ee4\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u5c5e\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"error, post, pre, route"))),(0,i.kt)("li",{parentName:"ul"},"\u987a\u5e8f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZuulFilterResult")," \u6267\u884c\u7ed3\u679c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExecutionStatus")," \u7ed3\u679c\u72b6\u6001",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SUCCESS(1), SKIPPED(-1), DISABLED(-2), FAILED(-3);"))),(0,i.kt)("li",{parentName:"ul"},"\u5f02\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u7ed3\u679c"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TracerFactory"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a\u8c03\u7528\u94fe"))),(0,i.kt)("li",{parentName:"ul"},"\u6269\u5c55")),(0,i.kt)("h4",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h5",{id:"\u65e0\u6cd5\u53cd\u5411\u4ee3\u7406-websockets"},"\u65e0\u6cd5\u53cd\u5411\u4ee3\u7406 WebSockets"),(0,i.kt)("h5",{id:"\u65e0\u6cd5\u57fa\u4e8e\u57df\u540d\u53cd\u5411\u4ee3\u7406"},"\u65e0\u6cd5\u57fa\u4e8e\u57df\u540d\u53cd\u5411\u4ee3\u7406"),(0,i.kt)("h3",{id:"spring-cloud-netflix-zuul"},"Spring Cloud Netflix Zuul"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u96c6\u6210 Zuul"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u53cd\u5411\u4ee3\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5316\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u5f88\u591a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZuulFilter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@EnableZuulProxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u53cd\u5411\u4ee3\u7406"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZuulProxyConfiguration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Zuul (Discovery)")," \u7279\u6027"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@EnableZuulServer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u7528\u7684 Zuul \u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Zuul (Simple)")," \u7279\u6027"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServiceRouteMapper"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06 ServiceId \u8f6c\u4e3a\u8def\u7531\u540d"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RouteLocator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7684\u8def\u7531\u5b9a\u4f4d\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DiscoveryClientRouteLocator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5b9e\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"DiscoveryClient")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProxyRequestHelper"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406\u7684\u8f85\u52a9\u5de5\u5177\u7c7b"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u6784\u5efa\u53cd\u5411\u4ee3\u7406\u7684\u8bf7\u6c42"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FilterConstants"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e3b\u8981\u7528\u5230\u7684\u5e38\u91cf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZuulFilter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PreDecorationFilter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u524d\u8fc7\u6ee4\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4ee3\u7406\u76f8\u5173\u7684\u5934"))),(0,i.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u4ee3\u7406\u7684\u76ee\u6807"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RibbonRoutingFilter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ServiceId \u53cd\u5411\u4ee3\u7406\u7684\u8def\u8fc7\u6700\u7ec8\u4f1a\u7531\u8be5\u8fc7\u6ee4\u5668\u5904\u7406, \u4f1a\u6784\u5efa\u4e00\u4e2a RibbonCommand \u8fdb\u884c\u6267\u884c\u8bf7\u6c42")))))),(0,i.kt)("h4",{id:"faq"},"FAQ"),(0,i.kt)("h5",{id:"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e"},"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud/spring-cloud-netflix/issues/706"},"#706"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \u901a\u8fc7\u5237\u65b0\u6765\u83b7\u53d6\u65b0\u7684\u914d\u7f6e\u4f7f\u5f97\u914d\u7f6e\u751f\u6548\n// \u53ea\u80fd\u4f7f\u5f97\u4fee\u6539\u751f\u6548,\u4e0d\u80fd\u4f7f\u5f97\u65b0\u589e\u548c\u5220\u9664\u751f\u6548\n// \u4fee\u6539\u5982\u679c\u4ece url \u4fee\u6539\u4e3a serviceid \u4e5f\u662f\u4e0d\u4f1a\u751f\u6548\u7684\n@Bean(name="zuul.CONFIGURATION_PROPERTIES")\n@RefreshScope\n@ConfigurationProperties("zuul")\npublic ZuulProperties zuulProperties() {\n   return new ZuulProperties();\n}\n')),(0,i.kt)("h2",{id:"spring-cloud-config"},"spring-cloud-config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5206\u4e3a client \u7aef\u548c server \u7aef"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5206\u4e3a: env, resource"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u914d\u7f6e\u9700\u8981: application, profile, label"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7684\u9ed8\u8ba4\u503c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"profile: default"),(0,i.kt)("li",{parentName:"ul"},"application: ${spring.application.name}"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RefreshEndpoint"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5237\u65b0\u62c9\u53d6\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RefreshAutoConfiguration"))),(0,i.kt)("h3",{id:"spring-cloud-config-client"},"spring-cloud-config-client"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ConfigClientAutoConfiguration")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConfigClientWatch"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u76d1\u63a7\u5237\u65b0, \u9ed8\u8ba4\u672a\u5f00\u542f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring.cloud.config.watch.enabled")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u521d\u59cb\u5ef6\u65f6 ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.cloud.config.watch.initialDelay")," \u4e3a 180s"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u95f4\u9694 ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.cloud.config.watch.delay")," \u4e3a 500ms"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.client.state"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u72b6\u6001\u662f\u5426\u53d1\u751f\u53d8\u5316\u7684\u4f9d\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u7531 ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfigServicePropertySourceLocator")," \u653e\u5165"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5bf9\u8c61: ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigServiceBootstrapConfiguration"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DiscoveryClientConfigServiceBootstrapConfiguration")))),(0,i.kt)("h3",{id:"spring-cloud-config-server"},"spring-cloud-config-server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4f1a\u66b4\u9732\u51fa\u6765\u76f8\u5e94\u7684\u6570\u636e\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u52a0\u5bc6\u7684\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u914d\u7f6e\u652f\u6301: \u6587\u4ef6\u7cfb\u7edf \u548c Git, SVN \u7b49 VCS ",(0,i.kt)("inlineCode",{parentName:"li"},"AbstractScmAccessor")),(0,i.kt)("li",{parentName:"ul"},"\u73af\u5883",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EnvironmentRepository#findOne(String application, String profile, String label)")))),(0,i.kt)("li",{parentName:"ul"},"\u8d44\u6e90",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResourceRepository#findOne(String name, String profile, String label, String path)")))),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u63a5\u53e3\u524d\u7f00\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.cloud.config.server.prefix")," \u914d\u7f6e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6700\u597d\u914d\u7f6e\u4e00\u4e2a\u524d\u7f00, \u5426\u5219\u9759\u6001\u8d44\u6e90\u90fd\u65e0\u6cd5\u8bbf\u95ee"))),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b config-server \u662f\u4e0d\u4f1a\u542f\u52a8 config-client \u7684, \u9700\u8981\u624b\u52a8\u6307\u5b9a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring.cloud.config.enabled: true"))))))}N.isMDXComponent=!0}}]);