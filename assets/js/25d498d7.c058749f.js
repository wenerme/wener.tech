/*! For license information please see 25d498d7.c058749f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83599],{1109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=t(11527),s=t(47214);const l={title:"Ansible Cookbook",tags:["Cookbook"]},r="Ansible Cookbook",a={id:"devops/infra/ansible/ansible-cookbook",title:"Ansible Cookbook",description:"\u52a8\u6001\u53d8\u91cf",source:"@site/../notes/devops/infra/ansible/ansible-cookbook.md",sourceDirName:"devops/infra/ansible",slug:"/devops/infra/ansible/cookbook",permalink:"/notes/devops/infra/ansible/cookbook",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/ansible/ansible-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Ansible Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"Ansible Collection",permalink:"/notes/devops/infra/ansible/collection"},next:{title:"Ansible FAQ",permalink:"/notes/devops/infra/ansible/faq"}},i={},c=[{value:"\u52a8\u6001\u53d8\u91cf",id:"\u52a8\u6001\u53d8\u91cf",level:2},{value:"\u6279\u91cf\u6a21\u7248",id:"\u6279\u91cf\u6a21\u7248",level:2},{value:"\u5bc6\u7801\u751f\u6210",id:"\u5bc6\u7801\u751f\u6210",level:2},{value:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f",id:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f",level:2},{value:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f",id:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ansible-cookbook",children:"Ansible Cookbook"}),"\n",(0,o.jsx)(n.h2,{id:"\u52a8\u6001\u53d8\u91cf",children:"\u52a8\u6001\u53d8\u91cf"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- name: Render deployment templates\n  set_fact:\n    '{{ item }}': \"{{ lookup('template', item + '.yml.j2') }}\"\n  with_items:\n    - 'configmap'\n    - 'secret'\n    - 'deployment'\n    - 'supervisor'\n    - 'launch_awx'\n  no_log: true\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u6279\u91cf\u6a21\u7248",children:"\u6279\u91cf\u6a21\u7248"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- name: create x template\n  template:\n    src: '{{item}}'\n    dest: /tmp/{{ item | basename | regex_replace('\\.j2','') }}\n  with_fileglob:\n    - ../templates/*.j2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5bc6\u7801\u751f\u6210",children:"\u5bc6\u7801\u751f\u6210"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"lookup('password', 'credentials/db.passwd length=8 chars=digits')"})," - \u8bfb\u53d6\u6216\u968f\u673a\u751f\u6210\u5bc6\u7801"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# \u751f\u6210\u5bc6\u7801\u4e14\u4e0d\u8bb0\u5f55\n- name: Generate broadcast websocket secret\n  set_fact:\n    broadcast_websocket_secret: \"{{ lookup('password', '/dev/null length=128') }}\"\n  run_once: true\n  no_log: true\n  when: broadcast_websocket_secret is not defined\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f",children:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- name: Create Temporary Values File (Kubernetes)\n  tempfile:\n    state: file\n    suffix: .yml\n  register: values_file\n\n- name: Populate Temporary Values File (Kubernetes)\n  template:\n    # \u4f1a\u76f4\u63a5\u4f7f\u7528\u6a21\u7248\u76ee\u5f55\u4e0b\u6587\u4ef6\n    src: postgresql-values.yml.j2\n    dest: '{{ values_file.path }}'\n  no_log: true\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f",children:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'- name: Wait for management pod to start\n  shell: |\n    {{ kubectl_or_oc }} -n {{ kubernetes_namespace }} \\\n      get pod ansible-tower-management -o jsonpath="{.status.phase}"\n  register: result\n  # \u6761\u4ef6\n  until: result.stdout == "Running"\n  retries: 60\n  delay: 10\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var o=t(50959),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,l={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!i.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:d,props:l,_owner:a.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(50959);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);