"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53232],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92951:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const d={title:"K8S Secrets"},k="Kubernetes Secrets",m={unversionedId:"devops/kubernetes/app/k8s-secret",id:"devops/kubernetes/app/k8s-secret",title:"K8S Secrets",description:"- https://kubernetes.io/docs/concepts/configuration/secret/",source:"@site/../notes/devops/kubernetes/app/k8s-secret.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/k8s-secret",permalink:"/notes/devops/kubernetes/app/k8s-secret",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/k8s-secret.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"K8S Secrets"},sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/notes/devops/kubernetes/app/k8s-postgres"},next:{title:"kubed",permalink:"/notes/devops/kubernetes/app/kubed"}},f={},b=[{value:"docker",id:"docker",level:2},{value:"GitOps \u5bc6\u94a5",id:"gitops-\u5bc6\u94a5",level:2}],g={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},g),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"kubernetes-secrets"}),"Kubernetes Secrets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/"}),"https://kubernetes.io/docs/concepts/configuration/secret/"))),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"secret \u4f7f\u7528 subPath \u4e0d\u4f1a\u63a5\u6536\u66f4\u65b0"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"fields"),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Opaque"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5bb9\u6613\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kubernetes.io/service-account-token"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u670d\u52a1\u8d26\u53f7\u4ee4\u724c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kubernetes.io/dockercfg"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),".dockercfg"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"~/.dockercfg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kubernetes.io/dockerconfigjson"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),".dockerconfigjson"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"~/.docker/config.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kubernetes.io/basic-auth"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"username,password"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kubernetes.io/ssh-auth"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ssh-privatekey"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kubernetes.io/tls"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"tls.crt,tls.key"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"TLS client or server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bootstrap.kubernetes.io/token"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bootstrap token data")))),(0,n.kt)("h2",u({},{id:"docker"}),"docker"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u4ece docker \u751f\u6210\u7684\u914d\u7f6e\u521b\u5efa\nkubectl create secret generic regcred \\\n    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \\\n    --type=kubernetes.io/dockerconfigjson\n# \u76f4\u63a5\u63d0\u4f9b\u6388\u6743\u4fe1\u606f\nkubectl create secret docker-registry regcred \\\n  --docker-server=<your-registry-server> \\\n  --docker-username=<your-name> \\\n  --docker-password=<your-pword> \\\n  --docker-email=<your-email>\n")),(0,n.kt)("h2",u({},{id:"gitops-\u5bc6\u94a5"}),"GitOps \u5bc6\u94a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a GitOps \u8981\u6c42\u6240\u6709\u5185\u5bb9\u90fd\u5728\u4ed3\u5e93\uff0c\u56e0\u6b64\u5bc6\u94a5\u4e5f\u9700\u8981\u5b58\u50a8\u5728\u4ed3\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4e0d\u80fd\u76f4\u63a5\u653e\u660e\u6587\u7684 Secret\uff0c\u56e0\u6b64\u9700\u8981\u66f2\u7ebf\u63d0\u4f9b Secret"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u8981\u6c42\u5728 helm values.yaml \u63d0\u4f9b\u5bc6\u94a5\u7684\u8fd8\u9700\u8981\u5148\u751f\u6210 chart \u7136\u540e\u4fee\u6539\u4e3a\u53e6\u5916\u7684\u65b9\u5f0f\u63d0\u4f9b\u5bc6\u94a5")))}y.isMDXComponent=!0}}]);