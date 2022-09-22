"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88299],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,k=c["".concat(s,".").concat(f)]||c[f]||m[f]||r;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88985:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return N}});var a=t(49613),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&p(e,t,n[t]);return e};const c={title:"fission"},f="fission",k={unversionedId:"devops/kubernetes/platform/fission",id:"devops/kubernetes/platform/fission",title:"fission",description:"- fission/fission",source:"@site/../notes/devops/kubernetes/platform/fission.md",sourceDirName:"devops/kubernetes/platform",slug:"/devops/kubernetes/platform/fission",permalink:"/notes/devops/kubernetes/platform/fission",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/platform/fission.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634945411,formattedLastUpdatedAt:"Oct 22, 2021",frontMatter:{title:"fission"},sidebar:"docs",previous:{title:"K8S \u5e73\u53f0",permalink:"/notes/devops/kubernetes/platform/"},next:{title:"Istio Version",permalink:"/notes/devops/kubernetes/platform/istio-version"}},d={},N=[{value:"Functions",id:"functions",level:2},{value:"HTTP",id:"http",level:2},{value:"Environment",id:"environment",level:2},{value:"CanaryConfig",id:"canaryconfig",level:2},{value:"cli",id:"cli",level:2},{value:"deploy",id:"deploy",level:2}],v={toc:N};function b(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},v),p),r(n,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"fission"}),"fission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/fission/fission"}),"fission/fission"),"\nFast and Simple Serverless Functions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u652f\u6301 NodeJS, Python, Ruby, Go, PHP, Bash, Linux executable"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u64cd\u4f5c\u6e90\u7801\u4e0d\u64cd\u4f5c\u5bb9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u8def\u7531\u57fa\u4e8e gorilla/mux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u547d\u540d\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"/guestbook/{name}/{age:[0-9]+}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Fission-Params-Name: <name>")," - \u6ce8\u610f\u540d\u5b57\u4f1a\u8f6c\u6362"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 WebSocket"),(0,a.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u57fa\u4e8e keda"))),(0,a.kt)("li",{parentName:"ul"},"helm ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/fission/fission-charts"}),"fission/fission-charts"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fission-all - nats, influxdb"),(0,a.kt)("li",{parentName:"ul"},"fission-core"))),(0,a.kt)("li",{parentName:"ul"},"Function",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6e90\u7801 - \u53ef\u6267\u884c\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"Archive - \u53ef\u4ee5\u662f\u6253\u5305\u7684\u5185\u5bb9 - zip"),(0,a.kt)("li",{parentName:"ul"},"Package - fission \u5c06 Archive \u8fdb\u884c\u6253\u5305 - \u5b9e\u9645\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u5206\u8bed\u8a00\u9700\u8981\u7f16\u8bd1 - \u9700\u8981\u521b\u5efa\u73af\u5883",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fission \u8d1f\u8d23\u6784\u5efa"))))),(0,a.kt)("li",{parentName:"ul"},"Environment",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b HTTP \u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c Function"))),(0,a.kt)("li",{parentName:"ul"},"Trigger - \u5165\u53e3/\u89e6\u53d1\u65b9\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP"),(0,a.kt)("li",{parentName:"ul"},"Timer - \u5b9a\u65f6"),(0,a.kt)("li",{parentName:"ul"},"Message Queue - KEDA - Kafka, NATS"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes Watch - \u5f53\u96c6\u7fa4\u53d8\u5316\u65f6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://hub.docker.com/u/fission/"}),"https://hub.docker.com/u/fission/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<lang>-env")," - \u6267\u884c\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<lang>-builder")," - \u6784\u5efa"))),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u8def\u5f84\u6620\u5c04",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/secrets/<namespace>/<name>/<key>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/configs/<namespace>/<name>/<key>")))),(0,a.kt)("li",{parentName:"ul"},"secrets \u548c configs \u9700\u8981\u542f\u52a8\u65f6\u5141\u8bb8\u8bbf\u95ee",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u65f6\u4f1a\u5bfc\u81f4 pod \u91cd\u542f"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5927\u91cf function \u4f7f\u7528\u76f8\u540c\u7684\uff0c\u5219\u4f1a\u77ac\u95f4\u5bfc\u81f4"))),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"poolmgr",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa env \u81ea\u52a8\u521b\u5efa"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 pool 3"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Requests Per Pod - rpp \u9650\u5b9a\u6bcf\u4e2a pod \u8bf7\u6c42\u91cf"),(0,a.kt)("li",{parentName:"ul"},"OnceOnly - \u4e00\u4e2a pod \u53ea\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"Concurrency - \u9650\u5b9a\u8bf7\u6c42\u5e76\u53d1"))),(0,a.kt)("li",{parentName:"ul"},"newdeploy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u52a8\u6269\u7f29\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e min,max"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--minscale 0")," \u53ef\u5b8c\u5168\u7f29\u5bb9 - \u51b7\u542f\u52a8\u4f1a\u6162")))))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 gRPC \u8def\u7531 - ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/fission/fission/issues/250"}),"fission/fission#250")),(0,a.kt)("li",{parentName:"ul"},"NATS \u76ee\u524d\u5c1a\u672a\u4f7f\u7528 JetStream API"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# macOS\ncurl -Lo fission https://github.com/fission/fission/releases/download/1.14.1/fission-1.14.1-darwin-amd64 \\\n    && chmod +x fission && sudo mv fission /usr/local/bin/\n\nfission env create --name nodejs --image fission/node-env\ncurl https://raw.githubusercontent.com/fission/examples/master/nodejs/hello.js > hello.js\nfission function create --name hello --env nodejs --code hello.js\n\n# \u521b\u5efa\u8def\u7531\nfission route create --method GET --url /hello --function hello\n# \u8bf7\u6c42\nfission function test --name hello\n\n\n# \u6dfb\u52a0 Go \u73af\u5883\nfission environment create --name go --image fission/go-env-1.12:1.13.1 --builder fission/go-builder-1.12:1.13.1\n")),(0,a.kt)("h2",m({},{id:"functions"}),"Functions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"websocket.js")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"module.exports = async function (ws, clients) {\n  ws.on('message', function incoming(data) {\n    clients.forEach(function each(client) {\n      client.send(data);\n    });\n  });\n\n  ws.on('close', function close() {\n    return {\n      status: 200,\n      message: 'I am done',\n    };\n  });\n};\n")),(0,a.kt)("h2",m({},{id:"http"}),"HTTP"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"X-Fission-Function-Uid: 82c95606-9afa-11e8-bbd1-08002720b796\nX-Fission-Function-Resourceversion: 480652\nX-Fission-Function-Name: reqpayload\nX-Fission-Function-Namespace: default\n\nX-Fission-Params-Name: Alice\nX-Fission-Params-Age: 23\n")),(0,a.kt)("h2",m({},{id:"environment"}),"Environment"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"apiVersion: fission.io/v1\nkind: Environment\nmetadata:\n  creationTimestamp: null\n  name: nodejs\n  namespace: default\nspec:\n  builder: {}\n  imagepullsecret: ''\n  keeparchive: false\n  poolsize: 3\n  resources: {}\n  runtime:\n    image: fission/node-env:latest\n  version: 2\n")),(0,a.kt)("h2",m({},{id:"canaryconfig"}),"CanaryConfig"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"apiVersion: fission.io/v1\nkind: CanaryConfig\nmetadata:\n  name: canary-1\n  namespace: default\nspec:\n  duration: 1m\n  failureType: status-code\n  failurethreshold: 10\n  newfunction: fn-a-v2\n  oldfunction: fn-a-v1\n  trigger: route-fn-a\n  weightincrement: 30\n")),(0,a.kt)("h2",m({},{id:"cli"}),"cli"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FISSION_NAMESPACE"),(0,a.kt)("li",{parentName:"ul"},"FISSION_ROUTER")),(0,a.kt)("h2",m({},{id:"deploy"}),"deploy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/fission/fission/tree/master/charts/fission-all"}),"https://github.com/fission/fission/tree/master/charts/fission-all"))))}b.isMDXComponent=!0}}]);