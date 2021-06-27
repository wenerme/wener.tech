(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{1096:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},769:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1096)),o={title:"K8S Secrets"},i={unversionedId:"devops/kubernetes/app/k8s-secret",id:"devops/kubernetes/app/k8s-secret",isDocsHomePage:!1,title:"K8S Secrets",description:"Kubernetes Secrets",source:"@site/notes/devops/kubernetes/app/k8s-secret.md",slug:"/devops/kubernetes/app/k8s-secret",permalink:"/notes/devops/kubernetes/app/k8s-secret",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/k8s-secret.md",version:"current",sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/notes/devops/kubernetes/app/k8s-postgres"},next:{title:"kubed",permalink:"/notes/devops/kubernetes/app/kubed"}},s=[{value:"\u5bc6\u94a5\u65b9\u6848",id:"\u5bc6\u94a5\u65b9\u6848",children:[]},{value:"docker",id:"docker",children:[]},{value:"GitOps \u5bc6\u94a5",id:"gitops-\u5bc6\u94a5",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"kubernetes-secrets"},"Kubernetes Secrets"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"secret \u4f7f\u7528 subPath \u4e0d\u4f1a\u63a5\u6536\u66f4\u65b0")))),Object(c.b)("h2",{id:"\u5bc6\u94a5\u65b9\u6848"},"\u5bc6\u94a5\u65b9\u6848"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets"},"bitnami-labs/sealed-secrets"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u751f\u6210\u4e0d\u53ef\u9006\u7684\u5bc6\u94a5\u5b58\u50a8\u5728\u4ed3\u5e93\uff0c\u63a7\u5236\u5668\u751f\u6210\u5bf9\u5e94 Secret - \u975e\u5bf9\u79f0\u52a0\u5bc6"),Object(c.b)("li",{parentName:"ul"},"\u6700\u7b80\u5355\u5b9e\u7528"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/banzaicloud/bank-vaults"},"banzaicloud/bank-vaults")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hashicorp/vault"},"hashicorp/vault"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Secret as a Service, Encryption as a Servic"),Object(c.b)("li",{parentName:"ul"},"\u5982\u4f55\u4e0e K8S \u96c6\u6210\u662f\u4e2a\u95ee\u9898"))),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/secret-management/"},"Secret Management"))))),Object(c.b)("h2",{id:"docker"},"docker"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u4ece docker \u751f\u6210\u7684\u914d\u7f6e\u521b\u5efa\nkubectl create secret generic regcred \\\n    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \\\n    --type=kubernetes.io/dockerconfigjson\n# \u76f4\u63a5\u63d0\u4f9b\u6388\u6743\u4fe1\u606f\nkubectl create secret docker-registry regcred \\\n  --docker-server=<your-registry-server> \\\n  --docker-username=<your-name> \\\n  --docker-password=<your-pword> \\\n  --docker-email=<your-email>\n")),Object(c.b)("h2",{id:"gitops-\u5bc6\u94a5"},"GitOps \u5bc6\u94a5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u56e0\u4e3a GitOps \u8981\u6c42\u6240\u6709\u5185\u5bb9\u90fd\u5728\u4ed3\u5e93\uff0c\u56e0\u6b64\u5bc6\u94a5\u4e5f\u9700\u8981\u5b58\u50a8\u5728\u4ed3\u5e93"),Object(c.b)("li",{parentName:"ul"},"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4e0d\u80fd\u76f4\u63a5\u653e\u660e\u6587\u7684 Secret\uff0c\u56e0\u6b64\u9700\u8981\u66f2\u7ebf\u63d0\u4f9b Secret"),Object(c.b)("li",{parentName:"ul"},"\u90e8\u5206\u8981\u6c42\u5728 helm values.yaml \u63d0\u4f9b\u5bc6\u94a5\u7684\u8fd8\u9700\u8981\u5148\u751f\u6210 chart \u7136\u540e\u4fee\u6539\u4e3a\u53e6\u5916\u7684\u65b9\u5f0f\u63d0\u4f9b\u5bc6\u94a5")))}p.isMDXComponent=!0}}]);