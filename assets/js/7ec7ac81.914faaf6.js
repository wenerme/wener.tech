"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16367],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,b=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return r?n.createElement(b,i(i({ref:t},m),{},{components:r})):n.createElement(b,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},96135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),i=["components"],o={id:"harbor",title:"Harbor"},p="Habor",u={unversionedId:"devops/kubernetes/app/harbor",id:"devops/kubernetes/app/harbor",isDocsHomePage:!1,title:"Harbor",description:"- Habor",source:"@site/notes/devops/kubernetes/app/harbor.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/harbor",permalink:"/notes/devops/kubernetes/app/harbor",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/harbor.md",version:"current",frontMatter:{id:"harbor",title:"Harbor"},sidebar:"docs",previous:{title:"FluxCD",permalink:"/notes/devops/kubernetes/app/flux"},next:{title:"HELM \u5305\u7ba1\u7406\u5668",permalink:"/notes/devops/kubernetes/app/helm"}},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"Helm",id:"helm",children:[]}],s={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"habor"},"Habor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Habor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u4e0a\u7684\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/goharbor/harbor-helm"},"goharbor/harbor-helm")," - trusted cloud native repository for Kubernetes"),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u4e8e CI \u548c CD \u4e4b\u95f4\uff0cNexus \u504f\u5411\u5f00\u53d1\uff0cHarbor \u504f\u5411\u751f\u4ea7\u90e8\u7f72\u4ea4\u4ed8"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"trivy \u5b89\u5168\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u7ba1\u7406\u3001\u591a\u79df\u6237\u3001RBAC"),(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf\u526f\u672c\u3001Harbor \u4e4b\u95f4\u526f\u672c\u590d\u5236"),(0,l.kt)("li",{parentName:"ul"},"WebUI"))),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u90e8\u7f72 ingress"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6307\u5b9a externalURL \u786e\u4fdd\u751f\u6210\u5730\u5740\u6b63\u786e"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed\u5185\u90e8 TLS - internalTLS"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"registry - 5Gi"),(0,l.kt)("li",{parentName:"ul"},"chartmuseum - 5Gi"),(0,l.kt)("li",{parentName:"ul"},"jobservice - 1Gi"),(0,l.kt)("li",{parentName:"ul"},"database - 1Gi - \u53ef\u7528\u5916\u90e8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u5185\u90e8\u6570\u636e\u5e93\u8bb0\u5f97\u4fee\u6539\u8d26\u53f7\u5bc6\u7801"))),(0,l.kt)("li",{parentName:"ul"},"redis - 1Gi - \u53ef\u7528\u5916\u90e8"),(0,l.kt)("li",{parentName:"ul"},"trivy - 2Gi"),(0,l.kt)("li",{parentName:"ul"},"imageChartStorage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 azure,gcs,s3,swift,oss"))))))),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"443"),(0,l.kt)("li",{parentName:"ul"},"80"),(0,l.kt)("li",{parentName:"ul"},"4443",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Notary - Docker Content Trust"))))),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://goharbor.io/docs/2.2.0/install-config/harbor-compatibility-list/"},"Harbor Compatibility List"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Resource"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2 CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"4 CPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mem"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disk"),(0,l.kt)("td",{parentName:"tr",align:null},"40 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"160 GB")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add harbor https://helm.goharbor.io\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"docker \u5b89\u88c5\u8fc7\u7a0b\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"goharbor/prepare")," \u8fdb\u884c\u6784\u5efa\u9700\u8981\u7684 docker compose")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"},"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"))),(0,l.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"postgresql"),(0,l.kt)("li",{parentName:"ul"},"redis"),(0,l.kt)("li",{parentName:"ul"},"clari"),(0,l.kt)("li",{parentName:"ul"},"beego"),(0,l.kt)("li",{parentName:"ul"},"chartmuseum"),(0,l.kt)("li",{parentName:"ul"},"docker/distribution"),(0,l.kt)("li",{parentName:"ul"},"docker/notary"),(0,l.kt)("li",{parentName:"ul"},"helm"),(0,l.kt)("li",{parentName:"ul"},"swagger-ui")),(0,l.kt)("h2",{id:"helm"},"Helm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"harborAdminPassword: 'Harbor12345'\n\n# \u90e8\u7f72\u7ec4\u4ef6\n# =========\n# \u4e0d\u4f7f\u7528 Ingress \u5219\u4f1a\u90e8\u7f72 nginx\nnginx:\nportal:\ncore:\njobservice:\nregistry:\nchartmuseum:\nclair:\ntrivy:\nnotary:\n\ndatabase:\n  # \u8bbe\u7f6e\u4e3a external \u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\n  type: internal\n  # \u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93\n  external:\n    host: '192.168.0.1'\n    port: '5432'\n    username: 'user'\n    password: 'password'\n    # coreDatabase: \"registry\"\n    # clairDatabase: \"clair\"\n    # notaryServerDatabase: \"notary_server\"\n    # notarySignerDatabase: \"notary_signer\"\nredis:\n  type: internal\n")))}c.isMDXComponent=!0}}]);