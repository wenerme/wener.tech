"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24869],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(a),k=n,d=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40275:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"Dev FAQ",tags:["FAQ"]},o=void 0,u={unversionedId:"dev/dev-faq",id:"dev/dev-faq",title:"Dev FAQ",description:"Framework vs. Library",source:"@site/notes/dev/dev-faq.md",sourceDirName:"dev",slug:"/dev/dev-faq",permalink:"/notes/dev/dev-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/dev-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Dev FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"\u5f00\u53d1\u76f8\u5173\u6982\u5ff5",permalink:"/notes/dev/dev-concept"},next:{title:"Dev Glossary",permalink:"/notes/dev/dev-glossary"}},m={},s=[{value:"Framework vs. Library",id:"framework-vs-library",level:2},{value:"Private Cloud vs. On-Premise",id:"private-cloud-vs-on-premise",level:2},{value:"health vs. healthz",id:"health-vs-healthz",level:2},{value:"\u4ec0\u4e48\u662f\u8fb9\u7f18\u8ba1\u7b97",id:"\u4ec0\u4e48\u662f\u8fb9\u7f18\u8ba1\u7b97",level:2},{value:"API URL",id:"api-url",level:2},{value:"Orchestration vs Choreography",id:"orchestration-vs-choreography",level:2},{value:"\u5f00\u53d1\u7f13\u5b58",id:"\u5f00\u53d1\u7f13\u5b58",level:2}],c={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"framework-vs-library"},"Framework vs. Library"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Framework",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6846\u67b6 - \u84dd\u56fe - \u7ed3\u6784 - \u6309\u7167\u7ed9\u5b9a\u7684\u65b9\u5f0f\u8fbe\u6210\u76ee\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u6613\u66ff\u6362 - \u66ff\u6362\u7b49\u4e8e\u662f\u65b0\u7684\u7ed3\u6784",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"React -> Angular"))))),(0,l.kt)("li",{parentName:"ul"},"Library",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e93 - \u5de5\u5177 - \u8f85\u52a9\u8f85\u52a9\u5b8c\u6210\u76ee\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u66ff\u4ee3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"React -> Preact")))))),(0,l.kt)("h2",{id:"private-cloud-vs-on-premise"},"Private Cloud vs. On-Premise"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Private Cloud",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u7269\u7406\u8bbe\u65bd\u672c\u5730\u5316"))),(0,l.kt)("li",{parentName:"ul"},"On-Premise",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u3001\u8f6f\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u670d\u52a1\u529f\u80fd\u672c\u5730\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u516c\u6709\u4e91\u4e0a\u4e5f\u53ef\u4ee5 On-Premise")))),(0,l.kt)("h2",{id:"health-vs-healthz"},"health vs. healthz"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7684 readyz, varz, statusz, rpcz, livez"),(0,l.kt)("li",{parentName:"ul"},"\u6765\u81ea\u4e8e\u8c37\u6b4c\u5185\u90e8\u5b9e\u8df5 - z-pages"),(0,l.kt)("li",{parentName:"ul"},"z \u662f\u4e3a\u4e86\u907f\u514d\u548c\u73b0\u6709 endpoint \u51b2\u7a81"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u7528\u5e26 z \u7684\u540d\u5b57\uff0c\u7cfb\u7edf\u5e38\u7528\uff0c\u7c7b\u4f3c /metrics\uff0c\u4e0e\u4e1a\u52a1\u65e0\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/43381061/1870054"},"https://stackoverflow.com/a/43381061/1870054")))),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/health/live"),(0,l.kt)("li",{parentName:"ul"},"/health/ready")))),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u8fb9\u7f18\u8ba1\u7b97"},"\u4ec0\u4e48\u662f\u8fb9\u7f18\u8ba1\u7b97"),(0,l.kt)("p",null,"\u4e2a\u4eba\u7b80\u5355\u7406\u89e3\uff0cEdge \u5c31\u662f DataCenter \u7684\u53cd\u4e49\u8bcd\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e9\u671f\u8ba1\u7b97\uff1a\u96c6\u4e2d\u5f0f\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ec5\u5728\u4e00\u53f0\u5b64\u7acb\u7684\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u8ba1\u7b97\uff1a\u672c\u5730\u8fd0\u884c\u7684\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u4e91\u8ba1\u7b97\uff1a\u5728\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\u7684\u96c6\u4e2d\u5f0f\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u8fb9\u7f18\u8ba1\u7b97\uff1a\u5728\u9760\u8fd1\u7528\u6237\u7684\u5730\u65b9\u2014\u2014\u8bbe\u5907\u672c\u8eab\u6216\u8005\u7f51\u7edc\u8fb9\u7f18\u2014\u2014\u8fd0\u884c\u7684\u96c6\u4e2d\u5f0f\u5e94\u7528\u7a0b\u5e8f")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/zh-cn/learning/serverless/glossary/what-is-edge-computing/"},"https://www.cloudflare.com/zh-cn/learning/serverless/glossary/what-is-edge-computing/"))),(0,l.kt)("h2",{id:"api-url"},"API URL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ods.opinsights.azure.com/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/otherResourceGroup/providers/Microsoft.Storage/storageAccounts/examplestorage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Azure Monitor Logs"))),(0,l.kt)("li",{parentName:"ul"},"Datadog - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/logs/log_collection/"},"https://docs.datadoghq.com/logs/log_collection/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"http-intake.logs.datadoghq.com"))),(0,l.kt)("li",{parentName:"ul"},"GCP - googleapis.com",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://<region>-<svc>.googleapis.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://appengine.googleapis.com/$discovery/rest?version=v1"},"https://appengine.googleapis.com/$discovery/rest?version=v1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://run.googleapis.com"},"https://run.googleapis.com"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0 ",(0,l.kt)("a",{parentName:"li",href:"https://run.googleapis.com/$discovery/rest?version=v1"},"https://run.googleapis.com/$discovery/rest?version=v1"))))))),(0,l.kt)("h2",{id:"orchestration-vs-choreography"},"Orchestration vs Choreography"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Orchestration",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f16\u6392 - \u53ef\u540c\u6b65\u3001\u53ef\u5f02\u6b65"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u603b\u89c8\u670d\u52a1\u6d41\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u670d\u52a1\u53ef\u80fd\u4f1a\u91cd\u3001\u590d\u6742"),(0,l.kt)("li",{parentName:"ul"},"temporal \u8fd9\u6837\u7684\u670d\u52a1\u8ba9\u5f02\u6b65\u590d\u6742\u7f16\u6392\u53d8\u5f97\u7b80\u5355"))),(0,l.kt)("li",{parentName:"ul"},"Choreography",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u603b\u7ebf - \u5f02\u6b65"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u66f4\u89e3\u5076"),(0,l.kt)("li",{parentName:"ul"},"\u5931\u53bb\u4e1a\u52a1\u5168\u5c40\u89c2")))),(0,l.kt)("h2",{id:"\u5f00\u53d1\u7f13\u5b58"},"\u5f00\u53d1\u7f13\u5b58"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"dir"),(0,l.kt)("th",{parentName:"tr",align:null},"macOS"),(0,l.kt)("th",{parentName:"tr",align:null},"for"),(0,l.kt)("th",{parentName:"tr",align:null},"clean"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/.m2/repository/"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Maven"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/.npm/"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NPM"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/.cache/zig/"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/.cache/prisma/"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/.cache/buf/"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/go/pkg/mod"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"go env GOMODCACHE")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"- ~/.cache/go-build"),(0,l.kt)("td",{parentName:"tr",align:null},"~/Library/Caches/go-build/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"go env GOCACHE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"go clean --cache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"~/Library/Caches/Homebrew"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"brew --cache")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~/.pnpm-store"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/JetBrains"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/Yarn"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/electron"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/esbuild"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/golangci-lint"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/hardhat-nodejs"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/helm"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/pip"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/pnpm"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/typescript"),(0,l.kt)("li",{parentName:"ul"},"~/Library/Caches/turbo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Maven\nmvn dependency:purge-local-repository -DactTransitively=false -DreResolve=false --fail-at-end\n\n# Maven Dir\nmvn help:evaluate -Dexpression=settings.localRepository -q -DforceStdout\n")))}k.isMDXComponent=!0}}]);