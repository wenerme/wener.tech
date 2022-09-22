"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96130],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],u={title:"Boundary"},p="Boundary",l={unversionedId:"ops/infra/boundary",id:"ops/infra/boundary",title:"Boundary",description:"- hashicorp/boundary \u662f\u4ec0\u4e48?",source:"@site/../notes/ops/infra/boundary.md",sourceDirName:"ops/infra",slug:"/ops/infra/boundary",permalink:"/notes/ops/infra/boundary",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/infra/boundary.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Boundary"},sidebar:"docs",previous:{title:"Ansible Windows",permalink:"/notes/ops/infra/ansible/ansible-windows"},next:{title:"Cloud Init",permalink:"/notes/ops/infra/cloud-init"}},s={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"boundary"},"Boundary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/boundary"},"hashicorp/boundary")," \u662f\u4ec0\u4e48?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MPL-2.0, Go"),(0,o.kt)("li",{parentName:"ul"},"identity-based access management for dynamic infrastructure"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u8bbf\u95ee\u63a7\u5236"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae ssh, postgres, rdp, http, kube"))),(0,o.kt)("li",{parentName:"ul"},"controller",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"API"),(0,o.kt)("li",{parentName:"ul"},"session \u8c03\u5ea6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:9200"},"http://127.0.0.1:9200")))),(0,o.kt)("li",{parentName:"ul"},"worker",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"session"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:9202"},"http://127.0.0.1:9202")))),(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56: SQL \u6570\u636e\u5e93, KMSes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Postgres 11+"),(0,o.kt)("li",{parentName:"ul"},"KMS / Vault Transit Secrets Engine"))),(0,o.kt)("li",{parentName:"ul"},"boundary-desktop",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u684c\u9762\u5e94\u7528 - \u76ee\u524d\u53ea\u652f\u6301 macOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://releases.hashicorp.com/boundary-desktop/"},"\u4e0b\u8f7d"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f00\u53d1\u73af\u5883 - \u4f9d\u8d56 docker \u542f\u52a8 postgres\n# KSM \u4e3a\u5185\u90e8\u4e34\u65f6\u5b58\u50a8\nboundary dev\n\n# \u547d\u4ee4\u884c\u6388\u6743\nboundary authenticate password -auth-method-id ampw_1234567890 -login-name admin -password password\n# \u8fde\u63a5 target - \u6620\u5c04 22 \u5230\u672c\u5730\nboundary connect -target-id ttcp_1234567890\n# \u8fde\u63a5 ssh\nboundary connect ssh -target-id ttcp_1234567890\n# \u4f7f\u7528 admin \u767b\u9646\nboundary connect ssh -target-id ttcp_1234567890 -- -l admin\n\n# \u7aef\u53e3\u4fee\u6539\nboundary targets update tcp -default-port 443 -id ttcp_1234567890\n# windows \u4f7f\u7528 putty\nboundary connect ssh -style putty -exec putty.exe -target-id ttcp_1234567890\n")))}m.isMDXComponent=!0}}]);