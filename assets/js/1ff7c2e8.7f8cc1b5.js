"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63622],{49613:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return k}});var n=t(59496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),k=i,f=p["".concat(c,".").concat(k)]||p[k]||u[k]||l;return t?n.createElement(f,a(a({ref:r},d),{},{components:t})):n.createElement(f,a({ref:r},d))}));function k(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63818:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=t(96600),i=t(27279),l=(t(59496),t(49613)),a=["components"],o={title:"Linkerd \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},c="Linkerd \u5e38\u89c1\u95ee\u9898",s={unversionedId:"devops/service/linkerd-faq",id:"devops/service/linkerd-faq",title:"Linkerd \u5e38\u89c1\u95ee\u9898",description:"\u95ee\u9898\u6392\u67e5",source:"@site/../notes/devops/service/linkerd-faq.md",sourceDirName:"devops/service",slug:"/devops/service/linkerd-faq",permalink:"/notes/devops/service/linkerd-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/service/linkerd-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{title:"Linkerd \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Kuma",permalink:"/notes/devops/service/kuma"},next:{title:"Linkerd Version",permalink:"/notes/devops/service/linkerd-version"}},d={},u=[{value:"\u95ee\u9898\u6392\u67e5",id:"\u95ee\u9898\u6392\u67e5",level:2},{value:"error: unable to retrieve the complete list of server APIs: tap.linkerd.io/v1alpha1: the server is currently unable to handle the request",id:"error-unable-to-retrieve-the-complete-list-of-server-apis-taplinkerdiov1alpha1-the-server-is-currently-unable-to-handle-the-request",level:2},{value:"linkerd-proxy-injector - remote error: tls: bad certificate",id:"linkerd-proxy-injector---remote-error-tls-bad-certificate",level:2},{value:"cni",id:"cni",level:2},{value:"Failed to initialize identity service",id:"failed-to-initialize-identity-service",level:2}],p={toc:u};function k(e){var r=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"linkerd-\u5e38\u89c1\u95ee\u9898"},"Linkerd \u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h2",{id:"\u95ee\u9898\u6392\u67e5"},"\u95ee\u9898\u6392\u67e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u68c0\u67e5 proxy \u662f\u5426\u6b63\u5e38\n# --context default \u6307\u5b9a\u5176\u4ed6\u4e0a\u4e0b\u6587\n# \u786e\u4fdd linkerd \u662f\u6b63\u5e38\u7684\nlinkerd check --proxy -n linkerd\n# \u68c0\u67e5\u5176\u4ed6\u7a7a\u95f4\nlinkerd check --proxy -n ingress-nginx\n\n# config.linkerd.io/enable-debug-sidecar=true\n# --enable-debug-sidecar\nlinkerd inject --enable-debug-sidecar whoami.deploy.yaml | kubectl -n default apply -f -\n")),(0,l.kt)("h2",{id:"error-unable-to-retrieve-the-complete-list-of-server-apis-taplinkerdiov1alpha1-the-server-is-currently-unable-to-handle-the-request"},"error: unable to retrieve the complete list of server APIs: tap.linkerd.io/v1alpha1: the server is currently unable to handle the request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9a8c\u8bc1\u670d\u52a1\u6b63\u5e38\nkubectl get apiservices\nkubectl get pods -n kube-system\n\n# hook \u5b58\u5728\nkubectl get validatingwebhookconfigurations\nkubectl get mutatingwebhookconfigurations\n\nlinkerd -n linkerd tap deploy/web\n# Error: HTTP error, status Code [503] (unexpected API response: Error trying to reach service: 'x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0')\n\n# \u91cd\u542f linkerd\nkubectl rollout restart -n linkerd deployment\n\n# \u67e5\u770b\u4e8b\u4ef6\nkubectl get events --field-selector reason=IssuerUpdated -n linkerd\n")),(0,l.kt)("h2",{id:"linkerd-proxy-injector---remote-error-tls-bad-certificate"},"linkerd-proxy-injector - remote error: tls: bad certificate"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/3754"},"#3754"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"linkerd upgrade --identity-trust-anchors-file=./ca.crt\n")),(0,l.kt)("h2",{id:"cni"},"cni"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u91cd\u5199 Pod \u7684 iptables \u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u540e\u5219\u4e0d\u518d\u9700\u8981 init - \u8be5 Container \u9700\u8981 NET_ADMIN \u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u96c6\u7fa4\u5bf9\u6743\u9650\u9650\u5236\u7684\u6bd4\u8f83\u4e25\u8c28\u7684\u573a\u666f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 CNI\nlinkerd install-cni | kubectl apply -f -\n# \u5b89\u88c5\u540e\nlinkerd install --linkerd-cni-enabled | kubectl apply -f -\n\n# HELM \u5b89\u88c5 CNI\nhelm install linkerd2-cni linkerd2/linkerd2-cni\n# check\nlinkerd check --pre --linkerd-cni-enabled\n")),(0,l.kt)("h2",{id:"failed-to-initialize-identity-service"},"Failed to initialize identity service"))}k.isMDXComponent=!0}}]);