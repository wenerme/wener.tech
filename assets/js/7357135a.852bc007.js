"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7128],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),b=l,m=c["".concat(s,".").concat(b)]||c[b]||f[b]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},27243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return O}});var r=n(49613),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),b=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"Ansible Pull"},d="Ansible Pull",y={unversionedId:"devops/infra/ansible/ansible-pull",id:"devops/infra/ansible/ansible-pull",title:"Ansible Pull",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/infra/ansible/ansible-pull.md",sourceDirName:"devops/infra/ansible",slug:"/devops/infra/ansible/pull",permalink:"/notes/devops/infra/ansible/pull",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/ansible/ansible-pull.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Ansible Pull"},sidebar:"docs",previous:{title:"Ansible Network",permalink:"/notes/devops/infra/ansible/network"},next:{title:"Ansible \u53c2\u8003",permalink:"/notes/devops/infra/ansible/ref"}},v={},O=[],g={toc:O},w="wrapper";function k(e){var t=e,{components:n}=t,l=b(t,["components"]);return(0,r.kt)(w,f(c(c({},g),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"ansible-pull"}),"Ansible Pull"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u62c9\u53d6\u4ed3\u5e93\u6765\u6267\u884c Playbook"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e AWX"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 GitOps"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/cli/ansible-pull.html"}),"ansible-pull"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apk add git samurai ansible-base -X https://mirrors.aliyun.com/alpine/edge/main/\n# ~/.ansible/pull/localhost/\nansible-pull --only-if-changed -U https://gitlab.com/wenerme/ansible-pull-demo -i hosts\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"crontab")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-conf"}),"# \u6bcf5\u5206\u949f\u6267\u884c\n*/5 * * * * /usr/bin/ansible-pull --only-if-changed -U https://gitlab.com/wenerme/ansible-pull-demo -i hosts\n")))}k.isMDXComponent=!0}}]);