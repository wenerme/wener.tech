(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{1037:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return i})),l.d(t,"metadata",(function(){return c})),l.d(t,"toc",(function(){return b})),l.d(t,"default",(function(){return p}));var n=l(3),r=l(8),a=(l(0),l(1152)),i={id:"helm2",title:"HELM2 - \u4e0d\u63a8\u8350"},c={unversionedId:"devops/kubernetes/app/helm2",id:"devops/kubernetes/app/helm2",isDocsHomePage:!1,title:"HELM2 - \u4e0d\u63a8\u8350",description:"Helm 2 - \u4e0d\u63a8\u8350\u4f7f\u7528",source:"@site/notes/devops/kubernetes/app/helm2.md",slug:"/devops/kubernetes/app/helm2",permalink:"/notes/devops/kubernetes/app/helm2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/helm2.md",version:"current",sidebar:"docs",previous:{title:"HELM \u5305\u7ba1\u7406\u5668",permalink:"/notes/devops/kubernetes/app/helm"},next:{title:"Consol",permalink:"/notes/devops/kubernetes/app/k8s-consul"}},b=[{value:"V2 - V3",id:"v2---v3",children:[]},{value:"Tiller \u5b89\u88c5",id:"tiller-\u5b89\u88c5",children:[]},{value:"Helm 2 Tiller",id:"helm-2-tiller",children:[]},{value:"FAQ",id:"faq",children:[{value:"Error: could not find a ready tiller pod",id:"error-could-not-find-a-ready-tiller-pod",children:[]},{value:"Helm \u547d\u4ee4 Hang \u4f4f",id:"helm-\u547d\u4ee4-hang-\u4f4f",children:[]}]}],o={toc:b};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"helm-2---\u4e0d\u63a8\u8350\u4f7f\u7528"},"Helm 2 - \u4e0d\u63a8\u8350\u4f7f\u7528"),Object(a.b)("h2",{id:"v2---v3"},"V2 - V3"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u79fb\u9664 Tiller - \u9700\u8981\u5b89\u88c5\u5230\u96c6\u7fa4\u91cc\u7684\u90e8\u5206"),Object(a.b)("li",{parentName:"ul"},"\u4e09\u8def\u5408\u5e76\u66f4\u65b0\u7684\u5347\u7ea7\u7b56\u7565"),Object(a.b)("li",{parentName:"ul"},"\u53d1\u5e03\u540d\u5728\u547d\u540d\u7a7a\u95f4\u4e0b\u800c\u4e0d\u662f\u5168\u5c40"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 secret \u4f5c\u4e3a\u9ed8\u8ba4\u5b58\u50a8"),Object(a.b)("li",{parentName:"ul"},"Go \u5bfc\u5165\u8def\u5f84\u53d8\u5316 ",Object(a.b)("inlineCode",{parentName:"li"},"k8s.io/helm")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"helm.sh/helm/v3")),Object(a.b)("li",{parentName:"ul"},"\u65b0\u589e ",Object(a.b)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/builtin_objects/"},".Capabilities")," \u5185\u5efa\u5bf9\u8c61 - \u7528\u4e8e\u68c0\u6d4b\u96c6\u7fa4\u73af\u5883"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 JSONSchema \u9a8c\u8bc1 Chart"),Object(a.b)("li",{parentName:"ul"},"\u5c06 requirements.yaml \u5408\u5e76\u5230 Chart.yaml - \u4f9d\u8d56\u5b9a\u4e49"),Object(a.b)("li",{parentName:"ul"},"\u5b89\u88c5\u65f6\u5fc5\u987b\u6307\u5b9a\u540d\u5b57\u6216 ",Object(a.b)("inlineCode",{parentName:"li"},"--generate-name")),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 OCI ",Object(a.b)("a",{parentName:"li",href:"https://helm.sh/docs/topics/registries/"},"\u6ce8\u518c\u4e2d\u5fc3")," - docker \u6ce8\u518c\u4e2d\u5fc3",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5 ",Object(a.b)("inlineCode",{parentName:"li"},"HELM_EXPERIMENTAL_OCI=1")))),Object(a.b)("li",{parentName:"ul"},"\u79fb\u9664 ",Object(a.b)("inlineCode",{parentName:"li"},"helm serve")),Object(a.b)("li",{parentName:"ul"},"\u547d\u4ee4\u4fee\u6539",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"inspect")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"show")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fetch")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"pull")))),Object(a.b)("li",{parentName:"ul"},"\u5b89\u88c5\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"li"},"--create-namespace")," \u521b\u5efa\u547d\u540d\u7a7a\u95f4"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://helm.sh/docs/faq/#changes-since-helm-2"},"Changes since Helm 2"))))),Object(a.b)("h2",{id:"tiller-\u5b89\u88c5"},"Tiller \u5b89\u88c5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u90e8\u5206\u7cfb\u7edf\u8fd8\u4f9d\u8d56 Tiller"),Object(a.b)("li",{parentName:"ul"},"\u76ee\u524d\u7248\u672c v2.16.1 - 20191129"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 tiller \u9700\u8981\u4f7f\u7528\u65e7\u7248\u672c helm - \u4f8b\u5982 ",Object(a.b)("a",{parentName:"li",href:"https://get.helm.sh/helm-v2.16.1-darwin-amd64.tar.gz"},"https://get.helm.sh/helm-v2.16.1-darwin-amd64.tar.gz"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kube-system create serviceaccount tiller\n\nkubectl create clusterrolebinding tiller \\\n  --clusterrole=cluster-admin \\\n  --serviceaccount=kube-system:tiller\n\nhelm init --service-account tiller\n\n# \u53ef\u4ee5\u4fee\u6539\u955c\u50cf\u4ed3\u5e93 - \u907f\u514d\u65e0\u6cd5\u5b89\u88c5\n# helm init --service-account tiller --tiller-image registry.wener.me/kubernetes-helm/tiller:v2.16.1\n\n# \u83b7\u53d6\u90e8\u7f72\u72b6\u6001\nkubectl -n kube-system rollout status deploy/tiller-deploy\n# \u5982\u679c\u5931\u8d25\u53ef\u4ee5\u8003\u8651\u91cd\u8bd5\nkubectl -n kube-system rollout restart deploy/tiller-deploy\n\n# \u5f53\u524d\u7248\u672c - \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef - \u5982\u679c\u90fd\u6709\u8f93\u51fa\u5219\u8bf4\u660e\u90e8\u7f72\u6210\u529f\nhelm version\n")),Object(a.b)("h2",{id:"helm-2-tiller"},"Helm 2 Tiller"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"v2 ",Object(a.b)("a",{parentName:"li",href:"https://v2.helm.sh/"},"\u6587\u6863")),Object(a.b)("li",{parentName:"ul"},"\u6709\u4e9b\u73af\u5883\u8fd8\u662f\u4f7f\u7528\u7684 Tiller"),Object(a.b)("li",{parentName:"ul"},"\u5168\u5c40\u53c2\u6570",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--debug")," \u8f93\u51fa\u66f4\u591a\u4fe1\u606f"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--home")," HELM_HOME \u9ed8\u8ba4 ",Object(a.b)("inlineCode",{parentName:"li"},"$HOME/.helm/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--host")," HELM_HOST \u4f8b\u5982 \u4f7f\u7528\u672c\u5730 export HELM_HOST=:44134"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--kube-context")," Kube \u7684\u4e0a\u4e0b\u6587"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--kubeconfig")," \u914d\u7f6e\u8def\u5f84 KUBECONFIG \u9ed8\u8ba4 ",Object(a.b)("inlineCode",{parentName:"li"},"$HOME/.kube/config")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--tiller-namespace")," \u4f7f\u7528\u7684\u7a7a\u95f4 - \u9ed8\u8ba4 kube-system - \u53ef\u4f7f\u7528\u73af\u5883\u53d8\u91cf TILLER_NAMESPACE")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# helm init - \u521d\u59cb\u5316\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\n# -c --client-only \u53ea\u521d\u59cb\u5316\u5ba2\u6237\u7aef\n\n# \u5b89\u88c5\u53ef\u6307\u5b9a\u8d26\u53f7 - \u9700\u8981 cluster-admin \u6743\u9650\nhelm init --service-account $tiller_account\n\n# TLS \u5b89\u88c5\n# gitlab \u7684\u5b89\u88c5\u547d\u4ee4\nhelm init --tiller-tls --tiller-tls-verify --tls-ca-cert /data/helm/helm/config/ca.pem --tiller-tls-cert /data/helm/helm/config/cert.pem --tiller-tls-key /data/helm/helm/config/key.pem --service-account tiller\n\n# \u67e5\u770b helm \u76f8\u5173\u8d44\u6e90\nkubetcl get all -l app=helm\n\n# \u5220\u9664/\u5378\u8f7d\nhelm reset\n# \u66b4\u529b\nkubetcl delete all -l app=helm\n")),Object(a.b)("h2",{id:"faq"},"FAQ"),Object(a.b)("h3",{id:"error-could-not-find-a-ready-tiller-pod"},"Error: could not find a ready tiller pod"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u4fdd\u6709\u5de5\u4f5c\u7684 tiller-deploy\n# \u4e5f\u53ef\u80fd\u4e0d\u662f\u4f7f\u7528\u7684 kube-system \u4e0b\u7684 tiller \u9700\u8981\u6ce8\u610f\nkubectl -n kube-system get po \uff5c grep tiller-deploy\n")),Object(a.b)("h3",{id:"helm-\u547d\u4ee4-hang-\u4f4f"},"Helm \u547d\u4ee4 Hang \u4f4f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e00\u822c\u662f\u7f51\u7edc\u6216\u8005 CA \u7684\u95ee\u9898\u6216\u8005\u8d26\u53f7\u95ee\u9898"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u96c6\u7fa4\u90e8\u7f72\u4e86\u591a\u4e2a tiller \u53ef\u80fd\u4f1a\u6709\u95ee\u9898"),Object(a.b)("li",{parentName:"ul"},"44134/44135")))}p.isMDXComponent=!0},1152:function(e,t,l){"use strict";l.d(t,"a",(function(){return m})),l.d(t,"b",(function(){return d}));var n=l(0),r=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function b(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):c(c({},t),e)),l},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=p(l),s=n,d=m["".concat(i,".").concat(s)]||m[s]||u[s]||a;return l?r.a.createElement(d,c(c({ref:t},o),{},{components:l})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<a;o++)i[o]=l[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,l)}s.displayName="MDXCreateElement"}}]);