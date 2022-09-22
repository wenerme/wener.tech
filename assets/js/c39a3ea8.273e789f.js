"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26028],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),b=o,f=m["".concat(s,".").concat(b)]||m[b]||p[b]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),l=["components"],i={title:"Ansible Cookbook",tags:["Cookbook"]},s=void 0,c={unversionedId:"ops/infra/ansible/ansible-cookbook",id:"ops/infra/ansible/ansible-cookbook",title:"Ansible Cookbook",description:"\u52a8\u6001\u53d8\u91cf",source:"@site/notes/ops/infra/ansible/ansible-cookbook.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/ansible-cookbook",permalink:"/notes/ops/infra/ansible/ansible-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible/ansible-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",frontMatter:{title:"Ansible Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"Ansible Collection",permalink:"/notes/ops/infra/ansible/ansible-collection"},next:{title:"Ansible FAQ",permalink:"/notes/ops/infra/ansible/ansible-faq"}},u={},p=[{value:"\u52a8\u6001\u53d8\u91cf",id:"\u52a8\u6001\u53d8\u91cf",level:2},{value:"\u6279\u91cf\u6a21\u7248",id:"\u6279\u91cf\u6a21\u7248",level:2},{value:"\u5bc6\u7801\u751f\u6210",id:"\u5bc6\u7801\u751f\u6210",level:2},{value:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f",id:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f",level:2},{value:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f",id:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f",level:2}],m={toc:p};function b(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u52a8\u6001\u53d8\u91cf"},"\u52a8\u6001\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Render deployment templates\n  set_fact:\n    '{{ item }}': \"{{ lookup('template', item + '.yml.j2') }}\"\n  with_items:\n    - 'configmap'\n    - 'secret'\n    - 'deployment'\n    - 'supervisor'\n    - 'launch_awx'\n  no_log: true\n")),(0,a.kt)("h2",{id:"\u6279\u91cf\u6a21\u7248"},"\u6279\u91cf\u6a21\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: create x template\n  template:\n    src: '{{item}}'\n    dest: /tmp/{{ item | basename | regex_replace('\\.j2','') }}\n  with_fileglob:\n    - ../templates/*.j2\n")),(0,a.kt)("h2",{id:"\u5bc6\u7801\u751f\u6210"},"\u5bc6\u7801\u751f\u6210"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lookup('password', 'credentials/db.passwd length=8 chars=digits')")," - \u8bfb\u53d6\u6216\u968f\u673a\u751f\u6210\u5bc6\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u751f\u6210\u5bc6\u7801\u4e14\u4e0d\u8bb0\u5f55\n- name: Generate broadcast websocket secret\n  set_fact:\n    broadcast_websocket_secret: \"{{ lookup('password', '/dev/null length=128') }}\"\n  run_once: true\n  no_log: true\n  when: broadcast_websocket_secret is not defined\n")),(0,a.kt)("h2",{id:"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f"},"\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Create Temporary Values File (Kubernetes)\n  tempfile:\n    state: file\n    suffix: .yml\n  register: values_file\n\n- name: Populate Temporary Values File (Kubernetes)\n  template:\n    # \u4f1a\u76f4\u63a5\u4f7f\u7528\u6a21\u7248\u76ee\u5f55\u4e0b\u6587\u4ef6\n    src: postgresql-values.yml.j2\n    dest: '{{ values_file.path }}'\n  no_log: true\n")),(0,a.kt)("h2",{id:"\u7b49\u5f85\u547d\u4ee4\u6210\u529f"},"\u7b49\u5f85\u547d\u4ee4\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Wait for management pod to start\n  shell: |\n    {{ kubectl_or_oc }} -n {{ kubernetes_namespace }} \\\n      get pod ansible-tower-management -o jsonpath="{.status.phase}"\n  register: result\n  # \u6761\u4ef6\n  until: result.stdout == "Running"\n  retries: 60\n  delay: 10\n')))}b.isMDXComponent=!0}}]);