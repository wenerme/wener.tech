(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1083:function(e,n,l){"use strict";l.d(n,"a",(function(){return p})),l.d(n,"b",(function(){return y}));var t=l(0),a=l.n(t);function o(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){o(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function c(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(l),u=t,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return l?a.a.createElement(y,r(r({ref:n},s),{},{components:l})):a.a.createElement(y,r({ref:n},s))}));function y(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=l.length,i=new Array(o);i[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:t,i[1]=r;for(var s=2;s<o;s++)i[s]=l[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,l)}u.displayName="MDXCreateElement"},339:function(e,n,l){"use strict";l.r(n),l.d(n,"frontMatter",(function(){return i})),l.d(n,"metadata",(function(){return r})),l.d(n,"toc",(function(){return c})),l.d(n,"default",(function(){return b}));var t=l(3),a=l(8),o=(l(0),l(1083)),i={id:"ansible-collection",title:"Ansible Collection"},r={unversionedId:"ops/infra/ansible-collection",id:"ops/infra/ansible-collection",isDocsHomePage:!1,title:"Ansible Collection",description:"* Collection \u662f Ansible Galaxy Role \u7684\u7ee7\u627f\u8005",source:"@site/notes/ops/infra/ansible-collection.md",slug:"/ops/infra/ansible-collection",permalink:"/notes/ops/infra/ansible-collection",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-collection.md",version:"current",sidebar:"docs",previous:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible-awx"},next:{title:"ansible-faq",permalink:"/notes/ops/infra/ansible-faq"}},c=[{value:"playbook",id:"playbook",children:[]},{value:"requirements.yml",id:"requirementsyml",children:[]},{value:"ansible.cfg",id:"ansiblecfg",children:[]},{value:"\u5185\u7f6e",id:"\u5185\u7f6e",children:[]}],s={toc:c};function b(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,l,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Collection \u662f Ansible Galaxy Role \u7684\u7ee7\u627f\u8005"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u53ea\u80fd\u5305\u542b role\uff0c\u8fd8\u80fd\u5305\u542b\u5404\u79cd\u63d2\u4ef6\uff0c\u6587\u6863\uff0c\u4efb\u52a1\u7b49"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/devel/user_guide/collections_using.html"},"\u4f7f\u7528\u6587\u6863")))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55 ",Object(o.b)("inlineCode",{parentName:"li"},"~/.ansible/collections")," - COLLECTIONS_PATHS,"),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u670d\u52a1\u5668 ",Object(o.b)("a",{parentName:"li",href:"https://galaxy.ansible.com"},"https://galaxy.ansible.com")," - GALAXY_SERVER"),Object(o.b)("li",{parentName:"ul"},"server_list \u6216 GALAXY_SERVER_LIST \u53ef\u6307\u5b9a\u4e00\u7ec4\u670d\u52a1"),Object(o.b)("li",{parentName:"ul"},"\u5185\u5efa collections \u5b89\u88c5\u4f4d\u7f6e ",Object(o.b)("inlineCode",{parentName:"li"},"/usr/lib/python3.8/site-packages/ansible_collections"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# namespace.collection\nansible-galaxy collection install wenerme.alpine\n# \u53ef\u4ee5\u4e0b\u8f7d\u79bb\u7ebf\u4f7f\u7528\nansible-galaxy collection download wenerme.alpine\n\n# \u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5 tar\uff0c\u53ef\u4ee5\u6307\u5b9a\u76ee\u5f55\n# \u76ee\u5f55\u4f1a\u6dfb\u52a0 ansible_collections\nansible-galaxy collection install my_namespace-my_collection-1.0.0.tar.gz -p ./collections\n\n# \u53ef\u4ee5\u9650\u5b9a\u7248\u672c\nansible-galaxy collection install 'my_namespace.my_collection:>=1.0.0,<2.0.0'\n\n# \u80fd\u4ece\u4ed3\u5e93\u5b89\u88c5\n# \u4e5f\u65b9\u4fbf\u4f7f\u7528\u79c1\u6709 collection\nansible-galaxy collection install git+https://github.com/organization/repo_name.git,devel\nansible-galaxy collection install git@github.com:organization/repo_name.git\nansible-galaxy collection install git+file:///home/user/path/to/repo/.git\n\n# \u5b89\u88c5\u4f9d\u8d56\n# \u7b49\u540c\u4e8e ansible-galaxy role install -r + ansible-galaxy collection install -r\nansible-galaxy install -r requirements.yml\n# \u53ef\u4ee5\u4e0b\u8f7d\u6240\u6709\u4f9d\u8d56\nansible-galaxy collection download -r requirements.yml\n\n# \u67e5\u770b\u5df2\u5b89\u88c5\nansible-galaxy collection list\n# \b\u67e5\u770b\u76ee\u5f55\u4e0b\u5185\u5bb9\nansible-galaxy collection list -p '/opt/ansible/collections:/etc/ansible/collections'\n# \u9a8c\u8bc1\nansible-galaxy collection verify wenerme.alpine -vvv\n")),Object(o.b)("h2",{id:"playbook"},"playbook"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# FQDN\n- hosts: all\n  tasks:\n  - my_namespace.my_collection.mymodule:\n      option1: value\n  - import_role:\n      name: my_namespace.my_collection.role1\n  - debug:\n      msg: '{{ lookup(\"my_namespace.my_collection.lookup1\", 'param1')| my_namespace.my_collection.filter1 }}'\n---\n# use collections\n- hosts: all\n  collections:\n  - my_namespace.my_collection\n  tasks:\n  - import_role:\n      name: role1\n  - mymodule:\n      option1: value\n  - debug:\n      msg: '{{ lookup(\"my_namespace.my_collection.lookup1\", 'param1')| my_namespace.my_collection.filter1 }}'\n")),Object(o.b)("h2",{id:"requirementsyml"},"requirements.yml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# Ansible Galaxy \u89d2\u8272\nroles:\n- name: geerlingguy.java\n  version: 1.9.6\n\ncollections:\n# \u540d\u5b57\n- wenerme.alpine\n# \u8be6\u7ec6\u4fe1\u606f\n- name: https://github.com/organization/repo_name.git\n  type: git\n  version: devel\n\n- name: geerlingguy.php_roles\n  version: 0.9.3\n  source: https://galaxy.ansible.com\n")),Object(o.b)("h2",{id:"ansiblecfg"},"ansible.cfg"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"[default]\n# \u5b89\u88c5\u5230\u5f53\u524d\u76ee\u5f55\n# ./ansible_collections/<namespace>/<collection>\ncollections_paths = ./\n# ./roles/<namespace>.<collection>\nroles_path = ./roles\n\n# \u5b9a\u4e49\u670d\u52a1\u7aef\n[galaxy]\nserver_list = automation_hub, my_org_hub, release_galaxy, test_galaxy\n\n[galaxy_server.automation_hub]\n# url, token, username, password, auth_url\n# ANSIBLE_GALAXY_SERVER_{{ id }}_{{ key }}\nurl=https://cloud.redhat.com/api/automation-hub/\nauth_url=https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token\ntoken=my_ah_token\n\n[galaxy_server.my_org_hub]\nurl=https://automation.my_org/\nusername=my_user\npassword=my_pass\n\n[galaxy_server.release_galaxy]\nurl=https://galaxy.ansible.com/\ntoken=my_token\n\n[galaxy_server.test_galaxy]\nurl=https://galaxy-dev.ansible.com/\ntoken=my_test_token\n")),Object(o.b)("h2",{id:"\u5185\u7f6e"},"\u5185\u7f6e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/index.html"},"Collection Index"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html"},"ansible.builtin"))))))}b.isMDXComponent=!0}}]);