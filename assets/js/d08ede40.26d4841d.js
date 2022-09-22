"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39976],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,d=c["".concat(p,".").concat(m)]||c[m]||k[m]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25567:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e};const c={title:"krew"},m="krew",d={unversionedId:"devops/kubernetes/ops/krew",id:"devops/kubernetes/ops/krew",title:"krew",description:"- kubernetes-sigs/krew",source:"@site/../notes/devops/kubernetes/ops/krew.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/krew",permalink:"/notes/devops/kubernetes/ops/krew",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/ops/krew.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"krew"},sidebar:"docs",previous:{title:"kops",permalink:"/notes/devops/kubernetes/ops/kops"},next:{title:"kubectl FAQ",permalink:"/notes/devops/kubernetes/ops/kubectl-faq"}},b={},f=[],g={toc:f};function w(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=k(k({},g),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"krew"}),"krew"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/kubernetes-sigs/krew"}),"kubernetes-sigs/krew"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"brew for k8s"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"}),"\u5b89\u88c5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://krew.sigs.k8s.io/plugins"}),"https://krew.sigs.k8s.io/plugins"))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'# \u5b89\u88c5\n(\n  set -x; cd "$(mktemp -d)" &&\n  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew.{tar.gz,yaml}" &&\n  tar zxvf krew.tar.gz &&\n  KREW=./krew-"$(uname | tr \'[:upper:]\' \'[:lower:]\')_amd64" &&\n  "$KREW" install --manifest=krew.yaml --archive=krew.tar.gz &&\n  "$KREW" update\n)\n\n# \u9ed8\u8ba4\u76ee\u5f55 ~/.krew/bin/\nexport PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"\n\nkubectl krew update\nkubectl krew search whoami\nkubectl krew install whoami\n\nkubectl whoami\nkubectl krew upgrade\n\n# \u670d\u52a1\u7ba1\u7406\nkubectl krew install ingress-nginx\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"plugin"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://github.com/corneliusweig/rakkess"}),"access-matrix")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6743\u9650\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"https://cert-manager.io/docs/usage/kubectl-plugin/"}),"cert-manager")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ctx ns"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u4e0a\u4e0b\u6587\u548c\u7a7a\u95f4\u5207\u6362 - \u7c7b\u4f3c kubectx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"doctor"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u626b\u63cf\u96c6\u7fa4\u5f02\u5e38")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"konfig"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5408\u5e76\u6216\u5206\u5272\u914d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"oidc-login"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"outdated"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"popeye"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u626b\u63cf\u96c6\u7fa4\u8d44\u6e90\u95ee\u9898")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rbac-lookup rbac-view"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sniff"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Start a remote packet capture on pods using tcpdump and wireshark")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"tail"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"multiple pods and containers using simple, dynamic source selection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"tree"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u67e5\u770b\u8d44\u6e90\u5c42\u7ea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"view-secret"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))))}w.isMDXComponent=!0}}]);