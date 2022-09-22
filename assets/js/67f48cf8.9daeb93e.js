"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51219],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<s;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return p}});var r=n(96600),a=n(27279),s=(n(59496),n(49613)),l=["components"],c={title:"sealed-secrets"},i="sealed-secrets",o={unversionedId:"devops/kubernetes/app/sealed-secrets",id:"devops/kubernetes/app/sealed-secrets",title:"sealed-secrets",description:"- \u6ce8\u610f",source:"@site/../notes/devops/kubernetes/app/sealed-secrets.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/app/sealed-secrets.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"sealed-secrets"},sidebar:"docs",previous:{title:"Reloader",permalink:"/notes/devops/kubernetes/app/reloader"},next:{title:"stolon",permalink:"/notes/devops/kubernetes/app/stolon"}},u={},p=[{value:"already exists and is not managed by SealedSecret",id:"already-exists-and-is-not-managed-by-sealedsecret",level:2},{value:"\u5220\u9664 secret \u91cd\u5efa",id:"\u5220\u9664-secret-\u91cd\u5efa",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sealed-secrets"},"sealed-secrets"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"SealdSecret \u662f\u7ed1\u5b9a namespace\uff0ckubeseal \u7684\u65f6\u5019\u6307\u5b9a\u6216\u539f secret \u5305\u542b\uff0c\u4e0d\u53ef\u4fee\u6539",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u6216\u8005\u6307\u5b9a ",(0,s.kt)("inlineCode",{parentName:"li"},'sealedsecrets.bitnami.com/cluster-wide": "true"')," \u96c6\u7fa4\u5185\u53ef\u7528"))))),(0,s.kt)("li",{parentName:"ul"},"\u6a21\u5f0f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"strict - \u9ed8\u8ba4 - \u540d\u5b57\u548c namespace \u5339\u914d"),(0,s.kt)("li",{parentName:"ul"},"namespace-wide - \u76f8\u540c namespace \u5185\u53ef\u4fee\u6539 name"),(0,s.kt)("li",{parentName:"ul"},"cluster-wide - \u53ef\u4fee\u6539 namespace \u548c name")))),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a yaml \u5305\u542b\u591a\u4e2a secret \u53ea\u6709\u7b2c\u4e00\u4e2a\u4f1a seal - ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/114"},"#114")),(0,s.kt)("li",{parentName:"ul"},"\u5220\u9664 secret \u4e0d\u4f1a\u91cd\u5efa - ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/224"},"bitnami-labs/sealed-secrets#224")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u96c6\u7fa4\u5b89\u88c5\n# \u67e5\u770b\u7248\u672c https://github.com/bitnami-labs/sealed-secrets/releases\nkubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.13.1/controller.yaml\n\nbrew install kubeseal\n\n# \u6b63\u5e38 secret\necho -n bar | kubectl create secret generic mysecret --dry-run=client --from-file=foo=/dev/stdin -o json >mysecret.json\n# seal\nkubeseal <mysecret.json >mysealedsecret.json\n# \u521b\u5efa seal\nkubectl create -f mysealedsecret.json\n# \u751f\u6210 secret\nkubectl get secret mysecret\n\n# \u9650\u5b9a\u8303\u56f4\nkubeseal --scope cluster-wide <secret.yaml >sealed-secret.json\n\n# \u5907\u4efd master.key - \u6062\u590d\u5219\u53ef\u4ee5\u4f7f\u5f97\u4e4b\u524d\u7684\u52a0\u5bc6\u6570\u636e\u751f\u6548\nkubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml >master.key\n\n# \u6062\u590d master.key\nkubectl apply -f master.key\n# \u751f\u6548\nkubectl delete pod -n kube-system -l name=sealed-secrets-controller\n\n# \u79bb\u7ebf\u89e3\u5bc6\nkubeseal --recovery-unseal --recovery-private-key file1.key\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  # \u96c6\u7fa4\u5185\u53ef\u89e3\u5bc6 - \u4e0d\u7ed1\u5b9a namespace\n  sealedsecrets.bitnami.com/cluster-wide\": 'true'\n  # \u4e0d\u7ed1\u5b9a name\n  sealedsecrets.bitnami.com/namespace-wide: 'true'\n")),(0,s.kt)("h1",{id:"faq"},"FAQ"),(0,s.kt)("h2",{id:"already-exists-and-is-not-managed-by-sealedsecret"},"already exists and is not managed by SealedSecret"),(0,s.kt)("p",null,"\u5b58\u5728\u4e8e\u5c06 secret \u8fc1\u79fb\u4e3a sealed-secrets \u7684\u60c5\u51b5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/288"},"bitnami-labs/sealed-secrets#288"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  # \u8bc6\u522b\u65b9\u5f0f\n  sealedsecrets.bitnami.com/managed: 'true'\n")),(0,s.kt)("h2",{id:"\u5220\u9664-secret-\u91cd\u5efa"},"\u5220\u9664 secret \u91cd\u5efa"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301"),(0,s.kt)("li",{parentName:"ul"},"\u91cd\u542f controller \u53ef\u4ee5 - \u4f46\u662f sealedsecrets \u591a\u7684\u65f6\u5019\u975e\u5e38\u6162",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u4e00\u822c 0.7 - 1.2s")))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/224"},"bitnami-labs/sealed-secrets#224"))))}d.isMDXComponent=!0}}]);