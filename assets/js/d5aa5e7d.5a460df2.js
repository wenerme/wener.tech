"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50416],{62029:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=t(96600),a=t(27279),n=(t(59496),t(3905)),i=["components"],l={title:"Terraform",tags:["FAQ"]},s="Terraform FAQ",c={unversionedId:"ops/infra/terraform/terraform-faq",id:"ops/infra/terraform/terraform-faq",title:"Terraform",description:'This configuration or its associated state refers to the unqualified provider "local"',source:"@site/notes/ops/infra/terraform/terraform-faq.md",sourceDirName:"ops/infra/terraform",slug:"/ops/infra/terraform/terraform-faq",permalink:"/notes/ops/infra/terraform/terraform-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform/terraform-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Terraform",tags:["FAQ"]},sidebar:"docs",previous:{title:"Terraform \u5e38\u7528\u811a\u672c",permalink:"/notes/ops/infra/terraform/terraform-cookbook"},next:{title:"Terraform K8S",permalink:"/notes/ops/infra/terraform/terraform-k8s"}},f={},p=[{value:"This configuration or its associated state refers to the unqualified provider &quot;local&quot;",id:"this-configuration-or-its-associated-state-refers-to-the-unqualified-provider-local",level:2},{value:"Could not retrieve the list of available versions for provider hashicorp/local",id:"could-not-retrieve-the-list-of-available-versions-for-provider-hashicorplocal",level:2},{value:"helm_release: Error: rpc error: code = Unavailable desc = transport is closing",id:"helm_release-error-rpc-error-code--unavailable-desc--transport-is-closing",level:2}],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terraform-faq"},"Terraform FAQ"),(0,n.kt)("h2",{id:"this-configuration-or-its-associated-state-refers-to-the-unqualified-provider-local"},'This configuration or its associated state refers to the unqualified provider "local"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform state replace-provider "registry.terraform.io/-/local" "hashicorp/local"\nterraform init -reconfigure\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discuss.hashicorp.com/t/unqualified-provider-aws/18554/18"},"https://discuss.hashicorp.com/t/unqualified-provider-aws/18554/18"))),(0,n.kt)("h2",{id:"could-not-retrieve-the-list-of-available-versions-for-provider-hashicorplocal"},"Could not retrieve the list of available versions for provider hashicorp/local"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0d\u4f1a\u5c1d\u8bd5\u4e0b\u8f7d\u65b0\u7248\nmv ~/.terraform.d/{plugins,_}\n")),(0,n.kt)("h2",{id:"helm_release-error-rpc-error-code--unavailable-desc--transport-is-closing"},"helm_release: Error: rpc error: code = Unavailable desc = transport is closing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u7531\u4e8e helm lint \u5931\u8d25\u5bfc\u81f4"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u6dfb\u52a0 depends_on \u89e3\u51b3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"depends_on = [ module.helm-metallb-system ]")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-provider-helm/issues/486"},"#486"))))}m.isMDXComponent=!0},3905:function(e,r,t){t.d(r,{kt:function(){return u}});var o=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||n;return t?o.createElement(d,i(i({ref:r},p),{},{components:t})):o.createElement(d,i({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);