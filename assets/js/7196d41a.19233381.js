/*! For license information please see 7196d41a.19233381.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85682],{62367:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(11527),l=s(47214);const r={title:"Ansible Windows",tags:["Windows"]},t="Ansible Windows",o={id:"devops/infra/ansible/ansible-windows",title:"Ansible Windows",description:"- \u53ef\u7ba1\u7406\u5bf9\u8c61",source:"@site/../notes/devops/infra/ansible/ansible-windows.md",sourceDirName:"devops/infra/ansible",slug:"/devops/infra/ansible/windows",permalink:"/notes/devops/infra/ansible/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/ansible/ansible-windows.md",tags:[{label:"Windows",permalink:"/notes/tags/windows"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Ansible Windows",tags:["Windows"]},sidebar:"docs",previous:{title:"Ansible Version",permalink:"/notes/devops/infra/ansible/version"},next:{title:"Boundary",permalink:"/notes/devops/infra/boundary"}},a={},d=[{value:"Setup",id:"setup",level:2},{value:"Max retries exceeded with url",id:"max-retries-exceeded-with-url",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ansible-windows",children:"Ansible Windows"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u7ba1\u7406\u5bf9\u8c61\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5ba1\u8ba1\u7b56\u7565\u3001\u89c4\u5219"}),"\n",(0,i.jsx)(n.li,{children:"\u8bc1\u4e66"}),"\n",(0,i.jsx)(n.li,{children:"chocolatey - \u5305"}),"\n",(0,i.jsx)(n.li,{children:"domain - \u57df"}),"\n",(0,i.jsx)(n.li,{children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,i.jsx)(n.li,{children:"\u4e8b\u4ef6\u65e5\u5fd7"}),"\n",(0,i.jsx)(n.li,{children:"Windows \u7279\u6027"}),"\n",(0,i.jsx)(n.li,{children:"\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u9632\u706b\u5899"}),"\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u3001\u7fa4\u7ec4"}),"\n",(0,i.jsx)(n.li,{children:"IIS"}),"\n",(0,i.jsx)(n.li,{children:"\u7f51\u7edc\u6620\u5c04\u9a71\u52a8"}),"\n",(0,i.jsx)(n.li,{children:"\u5b89\u88c5\u5305"}),"\n",(0,i.jsx)(n.li,{children:"\u6ce8\u518c\u8868"}),"\n",(0,i.jsx)(n.li,{children:"\u9759\u6001\u8def\u7531"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,i.jsx)(n.li,{children:"\u5b89\u5168\u7b56\u7565"}),"\n",(0,i.jsx)(n.li,{children:"\u5171\u4eab"}),"\n",(0,i.jsx)(n.li,{children:"SNMP \u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html",children:"Setting up a Windows Host"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ansible/ansible/blob/devel/examples/scripts/ConfigureRemotingForAnsible.ps1",children:"ConfigureRemotingForAnsible.ps1"})}),"\n",(0,i.jsxs)(n.li,{children:["ansible ",(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/user_guide/windows_winrm.html",children:"winrm"})]}),"\n",(0,i.jsxs)(n.li,{children:["Ansible 2.9 ",(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/2.9/modules/list_of_windows_modules.html",children:"Windows modules"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/collections/ansible/windows/index.html",children:"Windows collection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ansible-collections/ansible.windows",children:"ansible-collections/ansible.windows"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"winrm get winrm/config\nwinrm enumerate winrm/config/Listener\nwinrm get winrm/config/Service\nwinrm get winrm/config/Winrs\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"win:\n  ansible_host: 192.168.1.2\n  ansible_user: LocalUsername\n  ansible_password: Password\n  ansible_connection: winrm\n  # ansible_winrm_transport: basic\n  ansible_winrm_transport: ntlm\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html",children:"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ps",children:'# Remove all listeners\nRemove-Item -Path WSMan:\\localhost\\Listener\\* -Recurse -Force\n\n# Only remove listeners that are run over HTTPS\nGet-ChildItem -Path WSMan:\\localhost\\Listener | Where-Object { $_.Keys -contains "Transport=HTTPS" } | Remove-Item -Recurse -Force\n'})}),"\n",(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"max-retries-exceeded-with-url",children:"Max retries exceeded with url"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"basic: HTTPSConnectionPool(host='192.168.1.1', port=5986): Max retries exceeded with url: /wsman (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x10d353940>: Failed to establish a new connection: [Errno 61] Connection refused')\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3354:(e,n,s)=>{var i=s(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,r={},d=null,c=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)t.call(n,i)&&!a.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:l,type:e,key:d,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(50959);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);