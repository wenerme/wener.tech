"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63622],{49613:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(59496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,k=p["".concat(c,".").concat(f)]||p[f]||u[f]||l;return t?n.createElement(k,a(a({ref:r},d),{},{components:t})):n.createElement(k,a({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65500:function(e,r,t){t.r(r),t.d(r,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return m}});var n=t(49613),i=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(o)for(var t of o(r))s.call(r,t)&&d(e,t,r[t]);return e};const p={title:"Linkerd \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},f="Linkerd \u5e38\u89c1\u95ee\u9898",k={unversionedId:"devops/service/linkerd-faq",id:"devops/service/linkerd-faq",title:"Linkerd \u5e38\u89c1\u95ee\u9898",description:"\u95ee\u9898\u6392\u67e5",source:"@site/../notes/devops/service/linkerd-faq.md",sourceDirName:"devops/service",slug:"/devops/service/linkerd-faq",permalink:"/notes/devops/service/linkerd-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/service/linkerd-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{title:"Linkerd \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Kuma",permalink:"/notes/devops/service/kuma"},next:{title:"Linkerd Version",permalink:"/notes/devops/service/linkerd-version"}},v={},m=[{value:"\u95ee\u9898\u6392\u67e5",id:"\u95ee\u9898\u6392\u67e5",level:2},{value:"error: unable to retrieve the complete list of server APIs: tap.linkerd.io/v1alpha1: the server is currently unable to handle the request",id:"error-unable-to-retrieve-the-complete-list-of-server-apis-taplinkerdiov1alpha1-the-server-is-currently-unable-to-handle-the-request",level:2},{value:"linkerd-proxy-injector - remote error: tls: bad certificate",id:"linkerd-proxy-injector---remote-error-tls-bad-certificate",level:2},{value:"cni",id:"cni",level:2},{value:"Failed to initialize identity service",id:"failed-to-initialize-identity-service",level:2}],b={toc:m};function y(e){var r,t=e,{components:i}=t,d=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},b),d),l(r,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"linkerd-\u5e38\u89c1\u95ee\u9898"}),"Linkerd \u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h2",u({},{id:"\u95ee\u9898\u6392\u67e5"}),"\u95ee\u9898\u6392\u67e5"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u67e5 proxy \u662f\u5426\u6b63\u5e38\n# --context default \u6307\u5b9a\u5176\u4ed6\u4e0a\u4e0b\u6587\n# \u786e\u4fdd linkerd \u662f\u6b63\u5e38\u7684\nlinkerd check --proxy -n linkerd\n# \u68c0\u67e5\u5176\u4ed6\u7a7a\u95f4\nlinkerd check --proxy -n ingress-nginx\n\n# config.linkerd.io/enable-debug-sidecar=true\n# --enable-debug-sidecar\nlinkerd inject --enable-debug-sidecar whoami.deploy.yaml | kubectl -n default apply -f -\n")),(0,n.kt)("h2",u({},{id:"error-unable-to-retrieve-the-complete-list-of-server-apis-taplinkerdiov1alpha1-the-server-is-currently-unable-to-handle-the-request"}),"error: unable to retrieve the complete list of server APIs: tap.linkerd.io/v1alpha1: the server is currently unable to handle the request"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u9a8c\u8bc1\u670d\u52a1\u6b63\u5e38\nkubectl get apiservices\nkubectl get pods -n kube-system\n\n# hook \u5b58\u5728\nkubectl get validatingwebhookconfigurations\nkubectl get mutatingwebhookconfigurations\n\nlinkerd -n linkerd tap deploy/web\n# Error: HTTP error, status Code [503] (unexpected API response: Error trying to reach service: 'x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0')\n\n# \u91cd\u542f linkerd\nkubectl rollout restart -n linkerd deployment\n\n# \u67e5\u770b\u4e8b\u4ef6\nkubectl get events --field-selector reason=IssuerUpdated -n linkerd\n")),(0,n.kt)("h2",u({},{id:"linkerd-proxy-injector---remote-error-tls-bad-certificate"}),"linkerd-proxy-injector - remote error: tls: bad certificate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/linkerd/linkerd2/issues/3754"}),"#3754"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"linkerd upgrade --identity-trust-anchors-file=./ca.crt\n")),(0,n.kt)("h2",u({},{id:"cni"}),"cni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u91cd\u5199 Pod \u7684 iptables \u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u540e\u5219\u4e0d\u518d\u9700\u8981 init - \u8be5 Container \u9700\u8981 NET_ADMIN \u6743\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u96c6\u7fa4\u5bf9\u6743\u9650\u9650\u5236\u7684\u6bd4\u8f83\u4e25\u8c28\u7684\u573a\u666f")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 CNI\nlinkerd install-cni | kubectl apply -f -\n# \u5b89\u88c5\u540e\nlinkerd install --linkerd-cni-enabled | kubectl apply -f -\n\n# HELM \u5b89\u88c5 CNI\nhelm install linkerd2-cni linkerd2/linkerd2-cni\n# check\nlinkerd check --pre --linkerd-cni-enabled\n")),(0,n.kt)("h2",u({},{id:"failed-to-initialize-identity-service"}),"Failed to initialize identity service"))}y.isMDXComponent=!0}}]);