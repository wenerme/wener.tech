"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96130],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90613:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e};const d={title:"Boundary"},f="Boundary",m={unversionedId:"ops/infra/boundary",id:"ops/infra/boundary",title:"Boundary",description:"- hashicorp/boundary \u662f\u4ec0\u4e48?",source:"@site/../notes/ops/infra/boundary.md",sourceDirName:"ops/infra",slug:"/ops/infra/boundary",permalink:"/notes/ops/infra/boundary",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/infra/boundary.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634658458,formattedLastUpdatedAt:"Oct 19, 2021",frontMatter:{title:"Boundary"},sidebar:"docs",previous:{title:"Ansible Windows",permalink:"/notes/ops/infra/ansible/windows"},next:{title:"Cloud Init",permalink:"/notes/ops/infra/cloud-init"}},y={},b=[],k={toc:b};function h(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"boundary"}),"Boundary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/hashicorp/boundary"}),"hashicorp/boundary")," \u662f\u4ec0\u4e48?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MPL-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"identity-based access management for dynamic infrastructure"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u8bbf\u95ee\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae ssh, postgres, rdp, http, kube"))),(0,n.kt)("li",{parentName:"ul"},"controller",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"API"),(0,n.kt)("li",{parentName:"ul"},"session \u8c03\u5ea6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://127.0.0.1:9200"}),"http://127.0.0.1:9200")))),(0,n.kt)("li",{parentName:"ul"},"worker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"session"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://127.0.0.1:9202"}),"http://127.0.0.1:9202")))),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56: SQL \u6570\u636e\u5e93, KMSes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Postgres 11+"),(0,n.kt)("li",{parentName:"ul"},"KMS / Vault Transit Secrets Engine"))),(0,n.kt)("li",{parentName:"ul"},"boundary-desktop",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u684c\u9762\u5e94\u7528 - \u76ee\u524d\u53ea\u652f\u6301 macOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://releases.hashicorp.com/boundary-desktop/"}),"\u4e0b\u8f7d"))))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u5f00\u53d1\u73af\u5883 - \u4f9d\u8d56 docker \u542f\u52a8 postgres\n# KSM \u4e3a\u5185\u90e8\u4e34\u65f6\u5b58\u50a8\nboundary dev\n\n# \u547d\u4ee4\u884c\u6388\u6743\nboundary authenticate password -auth-method-id ampw_1234567890 -login-name admin -password password\n# \u8fde\u63a5 target - \u6620\u5c04 22 \u5230\u672c\u5730\nboundary connect -target-id ttcp_1234567890\n# \u8fde\u63a5 ssh\nboundary connect ssh -target-id ttcp_1234567890\n# \u4f7f\u7528 admin \u767b\u9646\nboundary connect ssh -target-id ttcp_1234567890 -- -l admin\n\n# \u7aef\u53e3\u4fee\u6539\nboundary targets update tcp -default-port 443 -id ttcp_1234567890\n# windows \u4f7f\u7528 putty\nboundary connect ssh -style putty -exec putty.exe -target-id ttcp_1234567890\n")))}h.isMDXComponent=!0}}]);