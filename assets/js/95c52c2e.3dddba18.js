"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95050],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(r),m=a,y=k["".concat(p,".").concat(m)]||k[m]||s[m]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},52944:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};const k={title:"Tyk"},m="Tyk",y={unversionedId:"devops/web/tyk",id:"devops/web/tyk",title:"Tyk",description:"- TykTechnologies/tyk \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/web/tyk.md",sourceDirName:"devops/web",slug:"/devops/web/tyk",permalink:"/notes/devops/web/tyk",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/tyk.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1631511501,formattedLastUpdatedAt:"Sep 13, 2021",frontMatter:{title:"Tyk"},sidebar:"docs",previous:{title:"Traefik",permalink:"/notes/devops/web/traefik"},next:{title:"varnish",permalink:"/notes/devops/web/varnish"}},f={},d=[],b={toc:d};function g(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"tyk"}),"Tyk"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/TykTechnologies/tyk"}),"TykTechnologies/tyk")," \u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MPL+MIT+BSD, GO"),(0,n.kt)("li",{parentName:"ul"},"API \u7f51\u5173"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 REST, GraphQL, TCP, gRPC"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 OIDC, JWT, bearer Tokens, Basic Auth, Client Certificate"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Swagger \u5b9a\u4e49\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bf7\u6c42\u54cd\u5e94\u8f6c\u6362 - SOAP, GraphQL"),(0,n.kt)("li",{parentName:"ul"},"\u9650\u6d41\u914d\u989d"),(0,n.kt)("li",{parentName:"ul"},"API \u7248\u672c\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u7ec6\u7c92\u5ea6\u8bbf\u95ee\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"Blocklist/Allowlist/Ignored \u7ec8\u7aef\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u6790\u65e5\u5fd7"),(0,n.kt)("li",{parentName:"ul"},"CORS"),(0,n.kt)("li",{parentName:"ul"},"WebSocket"),(0,n.kt)("li",{parentName:"ul"},"IP AllowListing"),(0,n.kt)("li",{parentName:"ul"},"Hitless reloads - \u52a8\u6001\u91cd\u8f7d"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes Tyk Operator"))),(0,n.kt)("li",{parentName:"ul"},"\u5546\u4e1a\u90e8\u5206",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dashboard"),(0,n.kt)("li",{parentName:"ul"},"API Developer Portal"),(0,n.kt)("li",{parentName:"ul"},"API Documentation"),(0,n.kt)("li",{parentName:"ul"},"Developer Onboarding"))),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7f51\u5173\u662f\u5f00\u6e90\u7684 - \u6ca1\u6709\u5546\u4e1a\u7248"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://tyk.io/alternatives-kong"}),"vs kong")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://tyk.io/alternatives-apigee"}),"vs apigee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/TykTechnologies/tyk-pump"}),"TykTechnologies/tyk-pump"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5206\u6790\u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u540e\u7aef ElasticSearch, Prometheus"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/TykTechnologies/tyk-operator"}),"TykTechnologies/tyk-operator"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"k8s ingress")))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker network create tyk\ndocker run -itd --rm --name redis --network tyk -p 127.0.0.1:6379:6379 redis:5.0-alpine\nwget https://raw.githubusercontent.com/TykTechnologies/tyk-gateway-docker/master/tyk.standalone.conf\ndocker run \\\n  --name tyk_gateway \\\n  --network tyk \\\n  -p 8080:8080 \\\n  -v $(pwd)/tyk.standalone.conf:/opt/tyk-gateway/tyk.conf \\\n  -v $(pwd)/apps:/opt/tyk-gateway/apps \\\n  docker.tyk.io/tyk-gateway/tyk-gateway:latest\n\ncurl localhost:8080/hello\n")))}g.isMDXComponent=!0}}]);