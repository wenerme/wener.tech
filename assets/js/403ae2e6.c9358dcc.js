"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57603],{80218:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var n=r(96600),a=r(27279),l=(r(59496),r(3905)),o=["components"],p={title:"krew"},i=void 0,u={unversionedId:"devops/kubernetes/ops/krew",id:"devops/kubernetes/ops/krew",title:"krew",description:"- kubernetes-sigs/krew",source:"@site/notes/devops/kubernetes/ops/krew.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/krew",permalink:"/notes/devops/kubernetes/ops/krew",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/ops/krew.md",tags:[],version:"current",frontMatter:{title:"krew"},sidebar:"docs",previous:{title:"kops",permalink:"/notes/devops/kubernetes/ops/kops"},next:{title:"kubectl FAQ",permalink:"/notes/devops/kubernetes/ops/kubectl-faq"}},s={},k=[],c={toc:k};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/krew"},"kubernetes-sigs/krew"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"brew for k8s"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"\u5b89\u88c5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/plugins"},"https://krew.sigs.k8s.io/plugins"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5b89\u88c5\n(\n  set -x; cd "$(mktemp -d)" &&\n  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew.{tar.gz,yaml}" &&\n  tar zxvf krew.tar.gz &&\n  KREW=./krew-"$(uname | tr \'[:upper:]\' \'[:lower:]\')_amd64" &&\n  "$KREW" install --manifest=krew.yaml --archive=krew.tar.gz &&\n  "$KREW" update\n)\n\n# \u9ed8\u8ba4\u76ee\u5f55 ~/.krew/bin/\nexport PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"\n\nkubectl krew update\nkubectl krew search whoami\nkubectl krew install whoami\n\nkubectl whoami\nkubectl krew upgrade\n\n# \u670d\u52a1\u7ba1\u7406\nkubectl krew install ingress-nginx\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"plugin"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/corneliusweig/rakkess"},"access-matrix")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u68c0\u67e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cert-manager.io/docs/usage/kubectl-plugin/"},"cert-manager")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ctx ns"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587\u548c\u7a7a\u95f4\u5207\u6362 - \u7c7b\u4f3c kubectx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doctor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u626b\u63cf\u96c6\u7fa4\u5f02\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"konfig"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5408\u5e76\u6216\u5206\u5272\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oidc-login"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outdated"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"popeye"),(0,l.kt)("td",{parentName:"tr",align:null},"\u626b\u63cf\u96c6\u7fa4\u8d44\u6e90\u95ee\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rbac-lookup rbac-view"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sniff"),(0,l.kt)("td",{parentName:"tr",align:null},"Start a remote packet capture on pods using tcpdump and wireshark")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tail"),(0,l.kt)("td",{parentName:"tr",align:null},"multiple pods and containers using simple, dynamic source selection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tree"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u8d44\u6e90\u5c42\u7ea7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"view-secret"),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return c}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,d=c["".concat(i,".").concat(m)]||c[m]||s[m]||l;return r?n.createElement(d,o(o({ref:t},k),{},{components:r})):n.createElement(d,o({ref:t},k))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);