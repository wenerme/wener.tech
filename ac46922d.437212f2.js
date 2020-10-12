(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{411:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),l=a(7),b=(a(0),a(557)),r={id:"ansible",title:"Ansible"},c={unversionedId:"ops/infra/ansible",id:"ops/infra/ansible",isDocsHomePage:!1,title:"Ansible",description:"Ansible",source:"@site/contents/tricks/ops/infra/ansible.md",slug:"/ops/infra/ansible",permalink:"/notes/ops/infra/ansible",version:"current",sidebar:"docs",previous:{title:"\u57fa\u7840\u8bbe\u65bd",permalink:"/notes/ops/infra/infra"},next:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible-awx"}},i=[{value:"Tips",id:"tips",children:[]},{value:"ansible.cfg",id:"ansiblecfg",children:[]},{value:"\u53d8\u91cf\u67e5\u627e\u8def\u5f84",id:"\u53d8\u91cf\u67e5\u627e\u8def\u5f84",children:[]},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[{value:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",id:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784",id:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784",children:[]}]},{value:"Generate ansible directories",id:"generate-ansible-directories",children:[]},{value:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f",id:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f",children:[]},{value:"Name Default Description",id:"name-default-description",children:[{value:"ansible-vault \u547d\u4ee4",id:"ansible-vault-\u547d\u4ee4",children:[]},{value:"SSH \u591a\u64ad\u9009\u9879",id:"ssh-\u591a\u64ad\u9009\u9879",children:[]},{value:"AnsibleModule \u53c2\u6570\u5c5e\u6027",id:"ansiblemodule-\u53c2\u6570\u5c5e\u6027",children:[]},{value:"AnsibleModule \u521d\u59cb\u5316\u53c2\u6570",id:"ansiblemodule-\u521d\u59cb\u5316\u53c2\u6570",children:[]},{value:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4",id:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4",children:[]},{value:"Documentation markup",id:"documentation-markup",children:[]}]},{value:"Tips",id:"tips-1",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"ansible"},"Ansible"),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u8981\u6c42",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u63a7\u5236\u8282\u70b9 - python ","*","nix"),Object(b.b)("li",{parentName:"ul"},"\u7ba1\u7406\u8282\u70b9 - python sftp/scp"))),Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5206\u7ec4\u540d\u5305\u542b ",Object(b.b)("inlineCode",{parentName:"li"},"-")," \u4f1a\u544a\u8b66",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"force_valid_group_names=ignore")," \u53ef\u5173\u95ed"))),Object(b.b)("li",{parentName:"ul"},"docker_container \u6a21\u5757\u7f51\u7edc\u6709\u6240\u8c03\u6574 - \u4e4b\u540e\u9ed8\u8ba4\u4e0d\u4f1a\u6dfb\u52a0 default \u7f51\u7edc - \u4e0e docker \u4fdd\u6301\u4e00\u76f4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5efa\u8bae ",Object(b.b)("inlineCode",{parentName:"li"},"networks_cli_compatible=yes")," \u63d0\u524d\u4e0e docker \u7f51\u7edc\u4fdd\u6301\u4e00\u81f4"))),Object(b.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 yaml \u5199 inventory - \u6bd4 ini \u7684\u6a21\u5f0f\u597d\u7ba1\u7406 - \u7ed3\u6784\u4e5f\u66f4\u52a0\u6e05\u6670"),Object(b.b)("li",{parentName:"ul"},"\u76f8\u540c set_fact \u4e0d\u80fd\u4e92\u76f8\u4f9d\u8d56 ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/issues/40239"}),"#40239")))),Object(b.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/leucos/ansible-tuto"}),"Ansible tutorial")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://docs.ansible.com/ansible/list_of_all_modules.html"}),"List all modules")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg"}),"ansible.cfg")," \u53ef\u7528\u7684 ansible.cfg \u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u7528\u73af\u5883\u53d8\u91cf",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/blob/devel/lib/ansible/constants.py"}),"\u5217\u8868")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html"}),"YAML Syntax")))),Object(b.b)("li",{parentName:"ul"},"\u5b66\u4e60",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/geerlingguy/ansible-for-devops"}),"geerlingguy/ansible-for-devops")))),Object(b.b)("li",{parentName:"ul"},"\u754c\u9762",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible-semaphore/semaphore"}),"ansible-semaphore/semaphore"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Go \u5b9e\u73b0"),Object(b.b)("li",{parentName:"ul"},"\u6709 Web\u754c\u9762 \u548c ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://ansible-semaphore.github.io/semaphore/"}),"API")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible/awx"}),"ansible/awx")," - Ansible Tower \u4e0a\u6e38\u5f00\u6e90\u9879\u76ee",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ef Docker Compose \u542f\u52a8"))))),Object(b.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"ANSIBLE_INVENTORY")," - \u9017\u53f7\u5206\u9694\u7684\u4ed3\u5e93\u6e90"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"DEFAULT_HOST_LIST")," - \u9ed8\u8ba4\u4ed3\u5e93\u6e90 - ",Object(b.b)("inlineCode",{parentName:"li"},"inventory")," \u914d\u7f6e")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# ping \u6240\u6709\u8282\u70b9\nansible all -m ping\n# -i \u6307\u5b9a\u4ed3\u5e93\nansible all -m ping -i hosts\n# ping \u672c\u5730 - \u6307\u5b9a\u89e3\u91ca\u5668\nansible localhost -m ping -e 'ansible_python_interpreter=/usr/bin/python3'\n# \u6267\u884c\u547d\u4ee4\nansible all -a date -i hosts\n\n# ansible_facts \u5185\u5bb9\nansible localhost -m setup\n\n# \u8282\u70b9\u4e0a\u672c\u5730\u8bbe\u7f6e\u7684\u5185\u5bb9 - \u6587\u4ef6\u4e3a ini \u683c\u5f0f\n# /etc/ansible/facts.d/preferences.fact\nansible hostname -m setup -a \"filter=ansible_local\"\n")),Object(b.b)("h2",{id:"ansiblecfg"},"ansible.cfg"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/reference_appendices/config.html"}),"Ansible Configuration Settings")),Object(b.b)("li",{parentName:"ul"},"\u67e5\u627e\u987a\u5e8f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"ANSIBLE_CONFIG"),Object(b.b)("li",{parentName:"ul"},"ansible.cfg"),Object(b.b)("li",{parentName:"ul"},"~/.ansible.cfg"),Object(b.b)("li",{parentName:"ul"},"/etc/ansible/ansible.cfg")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"# \u7f13\u5b58 facts\n[defaults]\ngathering = smart\n# \u7f13\u5b58\u65f6\u95f4 - \u79d2\nfact_caching_timeout = 86400\n# \u7f13\u5b58\u5230 redis\n# pip install redis\nfact_caching = redis\n# \u7f13\u5b58\u5230 json \u6587\u4ef6\nfact_caching = jsonfile\nfact_caching_connection = /path/to/cachedir\n\n# \u517c\u5bb9 docker network - \u5982\u679c\u6307\u5b9a\u4e86\u7f51\u7edc\u4e0d\u6dfb\u52a0\u9ed8\u8ba4\u7f51\u7edc\nnetworks_cli_compatible=yes\n# \u4e0d\u6821\u9a8c\u5206\u7ec4\u540d\u5b57 \u5141\u8bb8\u5305\u542b `-'\nforce_valid_group_names=ignore\n")),Object(b.b)("h2",{id:"\u53d8\u91cf\u67e5\u627e\u8def\u5f84"},"\u53d8\u91cf\u67e5\u627e\u8def\u5f84"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable"}),"Variable precedence: Where should I put a variable?"))),Object(b.b)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html"}),"Best Practices"))),Object(b.b)("h3",{id:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784"},"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'production                # \u6b63\u5f0f\u73af\u5883\u4ed3\u5e93\nstaging                   # \u9884\u53d1\u73af\u5883\u4ed3\u5e93\n\ngroup_vars/\n    all.yml               # \u5168\u5c40\u53d8\u91cf\n    group1.yml            # \u5206\u7ec4\u53d8\u91cf\n    group2.yml\nhost_vars/\n    hostname1.yml          # \u4e3b\u673a\u53d8\u91cf\n    hostname2.yml\n\nlibrary/                  # \u81ea\u5b9a\u4e49\u6a21\u5757\nmodule_utils/             # \u7528\u4e8e\u652f\u6301\u6a21\u5757\u7684\u6a21\u5757\u5de5\u5177\nfilter_plugins/           # \u81ea\u5b9a\u4e49\u8fc7\u6ee4\u63d2\u4ef6\n\nsite.yml                  # \u4e3b playbook\nwebservers.yml            # playbook for webserver tier\ndbservers.yml             # playbook for dbserver tier\n\nroles/\n    common/               # \u89d2\u8272\u7ed3\u6784\n        tasks/            #\n            main.yml      #  <-- tasks file can include smaller files if warranted\n        handlers/         #\n            main.yml      #  <-- handlers file\n        templates/        #  <-- files for use with the template resource\n            ntp.conf.j2   #  <------- templates end in .j2\n        files/            #\n            bar.txt       #  <-- files for use with the copy resource\n            foo.sh        #  <-- script files for use with the script resource\n        vars/             #\n            main.yml      #  <-- variables associated with this role\n        defaults/         #\n            main.yml      #  <-- default lower priority variables for this role\n        meta/             #\n            main.yml      #  <-- role dependencies\n        library/          # roles can also include custom modules\n        module_utils/     # roles can also include custom module_utils\n        lookup_plugins/   # or other types of plugins, like lookup in this case\n\n    webtier/              # same kind of structure as "common" was above, done for the webtier role\n    monitoring/           # ""\n    fooapp/               # ""\n')),Object(b.b)("h3",{id:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784"},"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784"),Object(b.b)("p",null,"\u5982\u679c\u4ed3\u5e93\u533a\u522b\u8f83\u5927\uff0c\u53ef\u91c7\u7528"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"inventories/\n   production/\n      hosts               # production \u4ed3\u5e93\u4e3b\u673a\u5b9a\u4e49\n      group_vars/\n          all.yml         # production \u5168\u5c40\u53d8\u91cf\n          group1.yml      # \u5206\u7ec4\u53d8\u91cf\n          group2.yml\n      host_vars/\n          hostname1.yml   # \u4e3b\u673a\u53d8\u91cf\n          hostname2.yml\n\n   staging/\n      hosts               # staging \u4ed3\u5e93\u4e3b\u673a\u5b9a\u4e49\n      group_vars/\n          group1.yml       # here we assign variables to particular groups\n          group2.yml\n      host_vars/\n          stagehost1.yml   # here we assign variables to particular systems\n          stagehost2.yml\n\nlibrary/\nmodule_utils/\nfilter_plugins/\n\nsite.yml\nwebservers.yml\ndbservers.yml\n\nroles/\n    common/\n    webtier/\n    monitoring/\n    fooapp/\n")),Object(b.b)("h2",{id:"generate-ansible-directories"},"Generate ansible directories"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'mkdir gourp_vars host_vars\nfor ROLE in "apache" "web";do mkdir -p roles/${ROLE}/{files,handlers,tasks}; done\n')),Object(b.b)("h2",{id:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f"},"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"role defaults"),Object(b.b)("li",{parentName:"ul"},"inventory vars"),Object(b.b)("li",{parentName:"ul"},"inventory group_vars"),Object(b.b)("li",{parentName:"ul"},"inventory host_vars"),Object(b.b)("li",{parentName:"ul"},"playbook group_vars"),Object(b.b)("li",{parentName:"ul"},"playbook host_vars"),Object(b.b)("li",{parentName:"ul"},"host facts"),Object(b.b)("li",{parentName:"ul"},"registered vars"),Object(b.b)("li",{parentName:"ul"},"set_facts"),Object(b.b)("li",{parentName:"ul"},"play vars"),Object(b.b)("li",{parentName:"ul"},"play vars_prompt"),Object(b.b)("li",{parentName:"ul"},"play vars_files"),Object(b.b)("li",{parentName:"ul"},"role and include vars"),Object(b.b)("li",{parentName:"ul"},"block vars (only for tasks in block)"),Object(b.b)("li",{parentName:"ul"},"task vars (only for the task)"),Object(b.b)("li",{parentName:"ul"},"extra vars (always win precedence)")),Object(b.b)("h2",{id:"name-default-description"},"Name Default Description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Inventory Vars"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_host"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of host Hostname or IP address to SSH to")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"22 Port to SSH to")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"root User to SSH as")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_pass"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none Password to use for SSH authentication")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_connection"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"smart How Ansible will connect to host (see below)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_private_key_file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none SSH private key to use for SSH authentication")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_shell_type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sh Shell to use for commands (see below)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_python_interpreter"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/usr/bin/python Python interpreter on host (see below)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ansible_*_interpreter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none Like ansible_python_interpreter for other languages (see below)")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5728\u65b0\u7248\u672c\u4e2d,\u53d8\u91cf\u4e2d\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"ssh")," \u5df2\u7ecf\u53bb\u6389\u4e86")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Behavioral inventory parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ansible.cfg option"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remote_port")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remote_user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_ssh_private_key_file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"private_key_file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible_shell_type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"executable (see the following paragraph)")))),Object(b.b)("h3",{id:"ansible-vault-\u547d\u4ee4"},"ansible-vault \u547d\u4ee4"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Command"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible-vault encrypt file.yml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Encrypt the plaintext file.yml file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible-vault decrypt file.yml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decrypt the encrypted file.yml file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible-vault view file.yml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print the contents of the encrypted file.yml file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible-vault create file.yml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create a new encrypted file.yml file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible-vault edit file.yml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit an encrypted file.yml file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ansible-vault rekey file.yml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Change the password on an encrypted file.yml file")))),Object(b.b)("h3",{id:"ssh-\u591a\u64ad\u9009\u9879"},"SSH \u591a\u64ad\u9009\u9879"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ControlMaster"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"auto")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ControlPath"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$HOME/.ansible/cp/ansible-ssh-%h-%p-%r")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ControlPersist"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"60s")))),Object(b.b)("h3",{id:"ansiblemodule-\u53c2\u6570\u5c5e\u6027"},"AnsibleModule \u53c2\u6570\u5c5e\u6027"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If True, argument is required")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value if argument is not required")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"choices"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of possible values for the argument")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aliases"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Other names you can use as an alias for this argument")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argument type. Allowed values: 'str', 'list', 'dict', 'bool', 'int', 'float'")))),Object(b.b)("h3",{id:"ansiblemodule-\u521d\u59cb\u5316\u53c2\u6570"},"AnsibleModule \u521d\u59cb\u5316\u53c2\u6570"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"argument_spec (none)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dictionary that contains information about arguments")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bypass_checks"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False If true, don\u2019t check any of the parameter constrains")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no_log"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False If true, don\u2019t log the behavior of this module")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"check_invalid_arguments"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True If true, return error if user passed an unknown argument")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mutually_exclusive"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None List of mutually exclusive arguments")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required_together"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None List of arguments that must appear together")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required_one_of"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None List of arguments where at least one must be present")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"add_file_common_args"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False Supports the arguments of the file module")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"supports_check_mode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False If true, indicates module supports check mode")))),Object(b.b)("h3",{id:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4"},"\u8c03\u7528\u5916\u90e8\u547d\u4ee4"),Object(b.b)("p",null,"\u5728 Ansible \u6a21\u5757\u4e2d\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"run_command")," \u8c03\u7528\u5916\u90e8\u547d\u4ee4"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Argument"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"args (default)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string or list of strings"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(none) The command to be executed (see the following section)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"check_rc"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, will call fail_json if command returns a non-zero value.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"close_fds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Passes as close_fds argument to subprocess.Popen")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"executable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string (path to program)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Passes as executable argument to subprocess.Popen")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Send to stdin if child process")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"binary_data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If false and data is present, Ansible will send a newline to stdin after sending data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path_prefix"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string (list of paths)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Colon-delimited list of paths to prepend to PATH environment variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cwd"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string (directory path)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If specified, Ansible will change to this directory before executing")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"use_unsafe_shell"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See the following section")))),Object(b.b)("h3",{id:"documentation-markup"},"Documentation markup"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Syntax with example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"When to use"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"U(",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.example.com"}),"http://www.example.com"),")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URLs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Module"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"M(apt)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Module names")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Italics"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I(port)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Parameter names")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Constant-width"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C(/bin/bash)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File and option names")))),Object(b.b)("h2",{id:"tips-1"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 merge ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://docs.ansible.com/ansible/intro_configuration.html#hash-behaviour"}),"hash_behaviour")," \u53ef\u5408\u5e76\u5bf9\u8c61\u914d\u7f6e")))}p.isMDXComponent=!0},557:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),l=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,j=s["".concat(r,".").concat(m)]||s[m]||O[m]||b;return a?l.a.createElement(j,c(c({ref:t},o),{},{components:a})):l.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<b;o++)r[o]=a[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);