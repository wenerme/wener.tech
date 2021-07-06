(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||a;return t?i.a.createElement(d,o(o({ref:n},c),{},{components:t})):i.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(8),a=(t(0),t(1114)),s={id:"ansible-windows",title:"Ansible Windows"},o={unversionedId:"ops/infra/ansible-windows",id:"ops/infra/ansible-windows",isDocsHomePage:!1,title:"Ansible Windows",description:"Tips",source:"@site/notes/ops/infra/ansible-windows.md",slug:"/ops/infra/ansible-windows",permalink:"/notes/ops/infra/ansible-windows",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-windows.md",version:"current",sidebar:"docs",previous:{title:"Ansible Version",permalink:"/notes/ops/infra/ansible-version"},next:{title:"Ansible",permalink:"/notes/ops/infra/ansible"}},l=[{value:"Tips",id:"tips",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ansible ",Object(a.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/windows_winrm.html"},"winrm")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/modules/list_of_windows_modules.html"},"Windows modules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/ansible/ansible/blob/devel/examples/scripts/ConfigureRemotingForAnsible.ps1"},"https://github.com/ansible/ansible/blob/devel/examples/scripts/ConfigureRemotingForAnsible.ps1")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html#winrm-setup"},"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html#winrm-setup"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"win:\n  ansible_host: 192.168.1.2\n  ansible_user: LocalUsername\n  ansible_password: Password\n  ansible_connection: winrm\n  # ansible_winrm_transport: basic\n  ansible_winrm_transport: ntlm\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"")))}p.isMDXComponent=!0}}]);