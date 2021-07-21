(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),l=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=l.a.createContext({}),c=function(e){var t=l.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=c(r),s=n,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||a;return r?l.a.createElement(O,o(o({ref:t},u),{},{components:r})):l.a.createElement(O,o({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},849:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return c}));var n=r(3),l=r(8),a=(r(0),r(1151)),i={id:"flux",title:"FluxCD"},o={unversionedId:"devops/kubernetes/app/flux",id:"devops/kubernetes/app/flux",isDocsHomePage:!1,title:"FluxCD",description:"Flux",source:"@site/notes/devops/kubernetes/app/flux.md",slug:"/devops/kubernetes/app/flux",permalink:"/notes/devops/kubernetes/app/flux",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/flux.md",version:"current",sidebar:"docs",previous:{title:"FleetCD",permalink:"/notes/devops/kubernetes/app/fleet"},next:{title:"Harbor",permalink:"/notes/devops/kubernetes/app/harbor"}},b=[{value:"Tips",id:"tips",children:[]},{value:"Toolkits",id:"toolkits",children:[]}],u={toc:b};function c(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"flux"},"Flux"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/fluxcd/flux2"},"fluxcd/flux2"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Flux v1 \u5df2\u7ecf\u8fdb\u5165\u7ef4\u62a4\u6a21\u5f0f\uff0cv2 \u8c03\u6574\u4e3a\u4e86\u5de5\u5177\u96c6\u6a21\u5f0f"))),Object(a.b)("li",{parentName:"ul"},"\u573a\u666f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u8fd0\u7ef4\u4eba\u5458",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u81ea\u52a8\u914d\u7f6e"))),Object(a.b)("li",{parentName:"ul"},"\u5e73\u53f0\u5de5\u7a0b\u5e08",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"CD"))),Object(a.b)("li",{parentName:"ul"},"\u5e94\u7528\u5f00\u53d1\u8005",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"CD"))))),Object(a.b)("li",{parentName:"ul"},"\u7279\u6027",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 Git\u3001Helm\u3001S3 \u4f5c\u4e3a\u4ed3\u5e93"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 Kustomize\u3001Helm"),Object(a.b)("li",{parentName:"ul"},"\u65f6\u95f4\u9a71\u52a8\uff0c\u5468\u671f\u89e6\u53d1"),Object(a.b)("li",{parentName:"ul"},"K8S RBAC \u96c6\u6210"),Object(a.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u5065\u5eb7\u72b6\u6001\u8bc4\u4f30"),Object(a.b)("li",{parentName:"ul"},"\u4f9d\u8d56\u7ba1\u7406 - \u57fa\u7840\u8bbe\u65bd\u548c\u5de5\u4f5c\u8d1f\u8f7d"),Object(a.b)("li",{parentName:"ul"},"Webhook \u5916\u90e8\u544a\u8b66"),Object(a.b)("li",{parentName:"ul"},"Webhook \u5916\u90e8\u4e8b\u4ef6\u5904\u7406"),Object(a.b)("li",{parentName:"ul"},"\u81ea\u52a8\u66f4\u65b0"),Object(a.b)("li",{parentName:"ul"},"\u7b56\u7565\u9a71\u52a8\u9a8c\u8bc1 - OPA, admission controllers"),Object(a.b)("li",{parentName:"ul"},"Git \u96c6\u6210 - GitHub, GitLab, Bitbucket"),Object(a.b)("li",{parentName:"ul"},"Workflow \u4ea4\u4e92 - GitHub Actions, Tekton, Argo"),Object(a.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u63a5\u53e3\u4ea4\u4e92 - CAPI")))),Object(a.b)("h2",{id:"toolkits"},"Toolkits"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Source Controller",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"GitRepository CRD"),Object(a.b)("li",{parentName:"ul"},"HelmRepository CRD"),Object(a.b)("li",{parentName:"ul"},"HelmChart CRD"),Object(a.b)("li",{parentName:"ul"},"Bucket CRD"))),Object(a.b)("li",{parentName:"ul"},"Kustomize Controller",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Kustomization CRD"))),Object(a.b)("li",{parentName:"ul"},"Helm Controller",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"HelmRelease CRD"))),Object(a.b)("li",{parentName:"ul"},"Notification Controller",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Provider CRD"),Object(a.b)("li",{parentName:"ul"},"Alert CRD"),Object(a.b)("li",{parentName:"ul"},"Receiver CRD")))))}c.isMDXComponent=!0}}]);