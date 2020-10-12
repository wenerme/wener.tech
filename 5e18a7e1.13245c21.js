(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),l=(n(0),n(557)),i={id:"ansible-awx",title:"Ansible AWX"},b={unversionedId:"ops/infra/ansible-awx",id:"ops/infra/ansible-awx",isDocsHomePage:!1,title:"Ansible AWX",description:"Ansible AWX",source:"@site/contents/notes/ops/infra/ansible-awx.md",slug:"/ops/infra/ansible-awx",permalink:"/notes/ops/infra/ansible-awx",version:"current",sidebar:"docs",previous:{title:"Ansible",permalink:"/notes/ops/infra/ansible"},next:{title:"ansible-faq",permalink:"/notes/ops/infra/ansible-faq"}},c=[{value:"awxkit",id:"awxkit",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",children:[{value:"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"ansible-awx"},"Ansible AWX"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ansible ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.redhat.com/en/resources/awx-and-ansible-tower-datasheet"}),"AWX vs Tower"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AWX \u662f\u5feb\u901f\u5f00\u53d1\u7684\u4e0a\u6e38"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible-tower/latest/html/userguide/overview.html"}),"\u7528\u6237\u624b\u518c")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible-tower/latest/html/administration/index.html"}),"\u7ba1\u7406\u6587\u6863")))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ansible \u4e5f\u53ef\u4ee5\u64cd\u4f5c Tower")))),Object(l.b)("h2",{id:"awxkit"},"awxkit"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible-tower/latest/html/towercli/index.html"}),"AWX Command Line Interface")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible-tower/latest/html/towercli/authentication.html"}),"\u6388\u6743"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip3 install awxkit\n\n# \u76f4\u63a5\u4f7f\u7528\u8d26\u53f7\u5bc6\u7801\nawx --conf.host https://awx.example.org \\\n    --conf.username joe --conf.password secret \\\n    --conf.insecure \\\n    users list\n\n# \u767b\u9646\nexport TOWER_HOST=https://awx.example.org\n# \u4f1a\u751f\u6210 token\n$(TOWER_USERNAME=alice TOWER_PASSWORD=secret awx login -f human)\nawx config\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5bfc\u5165 ssh\nawx credentials create --credential_type 'Machine' \\\n    --name 'My SSH Key' --user 'alice' \\\n    --inputs '{\"username\": \"server-login\", \"ssh_key_data\": \"@~/.ssh/id_rsa\"}'\n")),Object(l.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ansible/awx/blob/devel/INSTALL.md"}),"\u5b89\u88c5\u6587\u6863")),Object(l.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"2 CPU 4G \u5185\u5b58 20G \u786c\u76d8"),Object(l.b)("li",{parentName:"ul"},"PostgreSQL 10+"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5b89\u88c5\u65b9\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Docker Compose",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ansible ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ansible/awx/tree/devel/installer"}),"playbook")),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u542f\u52a8 PostgreSQL \u548c Redis"),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u9645\u542f\u52a8\u914d\u7f6e\u6a21\u677f ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ansible/awx/tree/devel/installer/roles/local_docker/templates"}),"local_docker/templates")))),Object(l.b)("li",{parentName:"ul"},"Kubernetes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PG \u4f1a\u90e8\u7f72\u4e3a sts"))),Object(l.b)("li",{parentName:"ul"},"OpenShift"))),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pg_hostname - \u5982\u679c\u4f7f\u7528\u5916\u90e8 pg \u5219\u914d\u7f6e\u5916\u90e8\u4e3b\u673a"),Object(l.b)("li",{parentName:"ul"},"docker_registry - \u81ea\u5b9a\u4e49\u955c\u50cf\u4ed3\u5e93")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"VER=$(curl https://api.github.com/repos/ansible/awx/tags -s | jq '.[0].name' -r)\ncurl -LC- -o ansible-awx-$VER.tar.gz https://github.com/ansible/awx/archive/$VER.tar.gz \ntar xvfz ansible-awx-$VER.tar.gz\n# \u5b89\u88c5\ncd awx-$VER/installer\n\n# \u5b89\u88c5\u6240\u9700\u6a21\u5757\npip3 install docker docker-compose\n\n# \u9700\u8981\u63d0\u524d\u914d\u7f6e\u597d inventory\n# \u9ed8\u8ba4\u4f1a\u5b58\u50a8\u5230 ~/.awx\nansible-playbook -i inventory install.yml\n# \u786e\u8ba4\u5b89\u88c5\u65e5\u5fd7\ndocker logs -f awx_task\n\n# \u547d\u4ee4\u884c\npip3 install awxkit\n")),Object(l.b)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Project - \u9879\u76ee",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5b58\u50a8 - Git\u3001SVN\u3001Mercurial\u3001\u672c\u5730\u76ee\u5f55",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672c\u5730\u76ee\u5f55 ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/awx/projects")))),Object(l.b)("li",{parentName:"ul"},"Playbooks \u7684\u7ec4\u5408"))),Object(l.b)("li",{parentName:"ul"},"Job Template - \u4efb\u52a1\u6a21\u677f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u597d\u7684\u53ef\u6267\u884c\u4efb\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u5305\u542b playbook\u3001inventory\u3001\u53d8\u91cf \u7b49"))),Object(l.b)("li",{parentName:"ul"},"Job - \u4efb\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u6b21\u6267\u884c"))),Object(l.b)("li",{parentName:"ul"},"Inventories - \u4ed3\u5e93",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u4ece\u9879\u76ee git \u5bfc\u5165"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 ansible-inventory \u5de5\u5177"))),Object(l.b)("li",{parentName:"ul"},"Credential - \u51ed\u8bc1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6240\u6709\u6d89\u53ca\u5230\u8ba4\u8bc1\u76f8\u5173\u7684\u4fe1\u606f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible-tower/latest/html/userguide/credential_types.html"}),"Credential Type")," - \u51ed\u8bc1\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u51ed\u8bc1"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u6ce8\u5165\u4e0a\u4e0b\u6587\u4fe1\u606f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),Object(l.b)("li",{parentName:"ul"},"Ansible \u989d\u5916\u53d8\u91cf"),Object(l.b)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u677f - \u4f8b\u5982\u751f\u6210 ",Object(l.b)("inlineCode",{parentName:"li"},".ini")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},".conf")))),Object(l.b)("li",{parentName:"ul"},"\u5355\u4e2a\u4efb\u52a1\u6a21\u7248\u6bcf\u79cd\u51ed\u8bc1\u7c7b\u578b\u53ea\u80fd\u6709 ",Object(l.b)("strong",{parentName:"li"},"\u4e00\u4e2a")))),Object(l.b)("li",{parentName:"ul"},"Orgnization - \u7ec4\u7ec7"),Object(l.b)("li",{parentName:"ul"},"User - \u7528\u6237"),Object(l.b)("li",{parentName:"ul"},"Team - \u56e2\u961f"),Object(l.b)("li",{parentName:"ul"},"Instance - \u5b9e\u4f8b")),Object(l.b)("h3",{id:"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b"},"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5206\u4e3a\u8f93\u5165\u914d\u7f6e\u548c\u6ce8\u5165\u914d\u7f6e")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u8f93\u5165\u914d\u7f6e")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# \u5b57\u6bb5\u5b9a\u4e49\nfields:\n  - type: string\n    id: username\n    label: Username\n  - id: password\n    # \u7c7b\u578b\n    type: string\n    # string \u652f\u6301 choices\n    # "choices": ["A", "B", "C"]\n    label: Password\n    secret: true\n# \u5fc5\u586b\u5b57\u6bb5\nrequired:\n  - username\n  - password\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u5165\u914d\u7f6e")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# \u6587\u4ef6\u6a21\u677f\nfile:\n  template: |-\n    [mycloud]\n    token={{ api_token }}\n# \u73af\u5883\u53d8\u91cf\nenv:\n  THIRD_PARTY_CLOUD_API_TOKEN: "{{ api_token }}"\n  # \u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\n  MY_CLOUD_INI_FILE: "{{ tower.filename }}"\n# Ansible \u53d8\u91cf\nextra_vars:\n  some_extra_var: "{{ username }}:{{ password }}"\n\n---\n# \u591a\u4e2a\u6587\u4ef6\nfile:\n  template.cert_file: |-\n    [mycert]\n    {{ cert }}\n  template.key_file: |-\n    [mykey]\n    {{ key }}\nenv:\n  # \u591a\u4e2a\u6587\u4ef6\u7684\u8def\u5f84\n  MY_CERT_INI_FILE: "{{ tower.filename.cert_file }}"\n  MY_KEY_INI_FILE: "{{ tower.filename.key_file }}"\n\n')),Object(l.b)("h4",{id:"ansible-\u521b\u5efa\u5220\u9664"},"Ansible \u521b\u5efa\u5220\u9664"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip install ansible-tower-cli\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"- tower_credential_type:\n    name: Nexus\n    description: Credentials type for Nexus\n    kind: cloud\n    inputs: \"{{ lookup('file', 'tower_credential_inputs_nexus.json') }}\"\n    injectors: {'extra_vars': {'nexus_credential': 'test' }}\n    state: present\n    validate_certs: false\n\n- tower_credential_type:\n    name: Nexus\n    state: absent\n")))}p.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=p(n),m=a,O=o["".concat(i,".").concat(m)]||o[m]||u[m]||l;return n?r.a.createElement(O,b(b({ref:t},s),{},{components:n})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);