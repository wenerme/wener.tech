"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51572],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(59496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(t),b=l,m=f["".concat(s,".").concat(b)]||f[b]||c[b]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36358:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(96600),l=t(27279),a=(t(59496),t(49613)),i=["components"],o={title:"Ansible Pull"},s=void 0,p={unversionedId:"ops/infra/ansible/ansible-pull",id:"ops/infra/ansible/ansible-pull",title:"Ansible Pull",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/infra/ansible/ansible-pull.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/ansible-pull",permalink:"/notes/ops/infra/ansible/ansible-pull",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible/ansible-pull.md",tags:[],version:"current",frontMatter:{title:"Ansible Pull"},sidebar:"docs",previous:{title:"Ansible Network",permalink:"/notes/ops/infra/ansible/ansible-network"},next:{title:"Ansible \u53c2\u8003",permalink:"/notes/ops/infra/ansible/ansible-ref"}},u={},c=[],f={toc:c};function b(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u62c9\u53d6\u4ed3\u5e93\u6765\u6267\u884c Playbook"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e AWX"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 GitOps"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/cli/ansible-pull.html"},"ansible-pull"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apk add git samurai ansible-base -X https://mirrors.aliyun.com/alpine/edge/main/\n# ~/.ansible/pull/localhost/\nansible-pull --only-if-changed -U https://gitlab.com/wenerme/ansible-pull-demo -i hosts\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"crontab")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# \u6bcf5\u5206\u949f\u6267\u884c\n*/5 * * * * /usr/bin/ansible-pull --only-if-changed -U https://gitlab.com/wenerme/ansible-pull-demo -i hosts\n")))}b.isMDXComponent=!0}}]);