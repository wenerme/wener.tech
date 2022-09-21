"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18408],{90404:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=r(96600),n=r(27279),i=(r(59496),r(3905)),l=["components"],o={title:"Ambassador"},s=void 0,u={unversionedId:"devops/service/ambassador",id:"devops/service/ambassador",title:"Ambassador",description:"- API Gateway + Layer 7 load balancer + Kubernetes Ingress",source:"@site/notes/devops/service/ambassador.md",sourceDirName:"devops/service",slug:"/devops/service/ambassador",permalink:"/notes/devops/service/ambassador",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/ambassador.md",tags:[],version:"current",frontMatter:{title:"Ambassador"},sidebar:"docs",previous:{title:"\u670d\u52a1",permalink:"/notes/devops/service/"},next:{title:"Consul \u914d\u7f6e",permalink:"/notes/devops/service/consul-conf"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Gateway + Layer 7 load balancer + Kubernetes Ingress"),(0,i.kt)("li",{parentName:"ul"},"aes = Ambassador Edge Stack"),(0,i.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u914d\u5408 Service Mesh - Consul, Linkerd, Istio"),(0,i.kt)("li",{parentName:"ul"},"Ingress Controller for Kubernetes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"K8S \u96c6\u6210 - Ingress, RBAC, CRD"),(0,i.kt)("li",{parentName:"ul"},"\u534f\u8bae - HTTP/1.0 and HTTP/1.1, HTTP/2, WebSockets, gRPC, gRPC-Web, TCP"),(0,i.kt)("li",{parentName:"ul"},"TLS - V 1.1, v 1.2 (lookup), Server Name Indication (SNI), Set minimum TLS version"),(0,i.kt)("li",{parentName:"ul"},"CORS"))),(0,i.kt)("li",{parentName:"ul"},"Edge Management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Self-Service Edge Policies - Global policies, Edge policy console UI, CRD-based configuration"),(0,i.kt)("li",{parentName:"ul"},"Observability - Prometheus, StatsD"),(0,i.kt)("li",{parentName:"ul"},"Tracing - Zipkin, Lightstep, Jaeger, Datadog APM"))),(0,i.kt)("li",{parentName:"ul"},"Traffic Management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LB - Round robin, Sticky sessions, Least request"),(0,i.kt)("li",{parentName:"ul"},"Availability - Load shedding, Circuit breaking, Timeouts, Automatic retries"),(0,i.kt)("li",{parentName:"ul"},"Progressive Delivery - Canary releases, Traffic shadowing"))),(0,i.kt)("li",{parentName:"ul"},"Service Mesh",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Integrations - Istio, Linkerd, Consul"),(0,i.kt)("li",{parentName:"ul"},"Multi-cluster - Linkerd"))))),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u7248\u7f3a\u5931\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5168\u548c\u8ba4\u8bc1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OAuth/OpenID\u3001JWT"),(0,i.kt)("li",{parentName:"ul"},"Rate Limiting"),(0,i.kt)("li",{parentName:"ul"},"Custom Request Filters"),(0,i.kt)("li",{parentName:"ul"},"External Filters"),(0,i.kt)("li",{parentName:"ul"},"Automatic HTTPS (ACME support)"))),(0,i.kt)("li",{parentName:"ul"},"Delivery Acceleration- CI/CD",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MicroCD Pipeline"),(0,i.kt)("li",{parentName:"ul"},"Jenkins X"))),(0,i.kt)("li",{parentName:"ul"},"Delivery Acceleration- Service Preview"),(0,i.kt)("li",{parentName:"ul"},"Developer Portal")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\ncurl -fL https://metriton.datawire.io/downloads/darwin/edgectl \\\n  -o edgectl && \\\nchmod a+x ./edgectl\n./edgectl install\n\n# HELM3\nhelm repo add datawire https://www.getambassador.io\nkubectl create namespace ambassador && helm install ambassador --namespace ambassador datawire/ambassador\n\n# Docker demo\ndocker run -it -p 8080:8080 --name=ambassador --rm datawire/aes:1.6.2 --demo\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);