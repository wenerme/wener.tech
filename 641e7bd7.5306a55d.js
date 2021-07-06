(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{1114:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,b=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return t?a.a.createElement(b,c(c({ref:r},l),{},{components:t})):a.a.createElement(b,c({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},478:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(8),o=(t(0),t(1114)),i={title:"Terraform K8S"},c={unversionedId:"ops/infra/terraform-k8s",id:"ops/infra/terraform-k8s",isDocsHomePage:!1,title:"Terraform K8S",description:"Tips",source:"@site/notes/ops/infra/terraform-k8s.md",slug:"/ops/infra/terraform-k8s",permalink:"/notes/ops/infra/terraform-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform-k8s.md",version:"current",sidebar:"docs",previous:{title:"Terraform \u5e38\u7528\u811a\u672c",permalink:"/notes/ops/infra/terraform-cookbook"},next:{title:"Terraform Provider",permalink:"/notes/ops/infra/terraform-provider"}},p=[{value:"Tips",id:"tips",children:[]}],l={toc:p};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-provider-helm/issues/509"},"#509"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6a21\u5757\u540d\u5b57\u4e0d\u80fd\u4e0e helm \u53d1\u5e03\u7684\u540d\u5b57\u4e00\u6837"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-provider-kubernetes-alpha/issues/58"},"hashicorp/terraform-provider-kubernetes-alpha#58"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u8be5 provider \u652f\u6301 crd"),Object(o.b)("li",{parentName:"ul"},"\u4f46\u8fd8\u6ca1\u53d1\u5e03\u5230 registry"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/jrhouston/tfk8s"},"jrhouston/tfk8s"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"k8s yaml \u8f6c tf \u5b9a\u4e49")))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# YAML \u8f6c HCL\necho 'yamldecode(file(\"test.yaml\"))' | terraform console\n")))}s.isMDXComponent=!0}}]);