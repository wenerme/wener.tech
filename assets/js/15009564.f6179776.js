"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98818],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(a),k=l,N=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62113:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(96600),l=a(27279),r=(a(59496),a(49613)),i=["components"],o={title:"Ansible \u53c2\u8003",tags:["Reference"]},s="Ansible \u53c2\u8003",p={unversionedId:"ops/infra/ansible/ansible-ref",id:"ops/infra/ansible/ansible-ref",title:"Ansible \u53c2\u8003",description:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",source:"@site/../notes/ops/infra/ansible/ansible-ref.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/ansible-ref",permalink:"/notes/ops/infra/ansible/ansible-ref",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/infra/ansible/ansible-ref.md",tags:[{label:"Reference",permalink:"/notes/tags/reference"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645033829,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{title:"Ansible \u53c2\u8003",tags:["Reference"]},sidebar:"docs",previous:{title:"Ansible Pull",permalink:"/notes/ops/infra/ansible/ansible-pull"},next:{title:"Ansible Version",permalink:"/notes/ops/infra/ansible/ansible-version"}},m={},u=[{value:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",id:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784",id:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784",level:2},{value:"Generate ansible directories",id:"generate-ansible-directories",level:2},{value:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f",id:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f",level:2},{value:"Name Default Description",id:"name-default-description",level:2},{value:"ansible-vault \u547d\u4ee4",id:"ansible-vault-\u547d\u4ee4",level:3},{value:"SSH \u591a\u64ad\u9009\u9879",id:"ssh-\u591a\u64ad\u9009\u9879",level:3},{value:"AnsibleModule \u53c2\u6570\u5c5e\u6027",id:"ansiblemodule-\u53c2\u6570\u5c5e\u6027",level:3},{value:"AnsibleModule \u521d\u59cb\u5316\u53c2\u6570",id:"ansiblemodule-\u521d\u59cb\u5316\u53c2\u6570",level:3},{value:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4",id:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4",level:3},{value:"Documentation markup",id:"documentation-markup",level:3},{value:"functions",id:"functions",level:2},{value:"Tests",id:"tests",level:2}],d={toc:u};function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ansible-\u53c2\u8003"},"Ansible \u53c2\u8003"),(0,r.kt)("h2",{id:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784"},"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'production                # \u6b63\u5f0f\u73af\u5883\u4ed3\u5e93\nstaging                   # \u9884\u53d1\u73af\u5883\u4ed3\u5e93\n\ngroup_vars/\n    all.yml               # \u5168\u5c40\u53d8\u91cf\n    group1.yml            # \u5206\u7ec4\u53d8\u91cf\n    group2.yml\nhost_vars/\n    hostname1.yml          # \u4e3b\u673a\u53d8\u91cf\n    hostname2.yml\n\nlibrary/                  # \u81ea\u5b9a\u4e49\u6a21\u5757\nmodule_utils/             # \u7528\u4e8e\u652f\u6301\u6a21\u5757\u7684\u6a21\u5757\u5de5\u5177\nfilter_plugins/           # \u81ea\u5b9a\u4e49\u8fc7\u6ee4\u63d2\u4ef6\n\nsite.yml                  # \u4e3b playbook\nwebservers.yml            # playbook for webserver tier\ndbservers.yml             # playbook for dbserver tier\n\nroles/\n    common/               # \u89d2\u8272\u7ed3\u6784\n        tasks/            #\n            main.yml      #  <-- tasks file can include smaller files if warranted\n        handlers/         #\n            main.yml      #  <-- handlers file\n        templates/        #  <-- files for use with the template resource\n            ntp.conf.j2   #  <------- templates end in .j2\n        files/            #\n            bar.txt       #  <-- files for use with the copy resource\n            foo.sh        #  <-- script files for use with the script resource\n        vars/             #\n            main.yml      #  <-- variables associated with this role\n        defaults/         #\n            main.yml      #  <-- default lower priority variables for this role\n        meta/             #\n            main.yml      #  <-- role dependencies\n        library/          # roles can also include custom modules\n        module_utils/     # roles can also include custom module_utils\n        lookup_plugins/   # or other types of plugins, like lookup in this case\n\n    webtier/              # same kind of structure as "common" was above, done for the webtier role\n    monitoring/           # ""\n    fooapp/               # ""\n')),(0,r.kt)("h2",{id:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784"},"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"\u5982\u679c\u4ed3\u5e93\u533a\u522b\u8f83\u5927\uff0c\u53ef\u91c7\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"inventories/\n   production/\n      hosts               # production \u4ed3\u5e93\u4e3b\u673a\u5b9a\u4e49\n      group_vars/\n          all.yml         # production \u5168\u5c40\u53d8\u91cf\n          group1.yml      # \u5206\u7ec4\u53d8\u91cf\n          group2.yml\n      host_vars/\n          hostname1.yml   # \u4e3b\u673a\u53d8\u91cf\n          hostname2.yml\n\n   staging/\n      hosts               # staging \u4ed3\u5e93\u4e3b\u673a\u5b9a\u4e49\n      group_vars/\n          group1.yml       # here we assign variables to particular groups\n          group2.yml\n      host_vars/\n          stagehost1.yml   # here we assign variables to particular systems\n          stagehost2.yml\n\nlibrary/\nmodule_utils/\nfilter_plugins/\n\nsite.yml\nwebservers.yml\ndbservers.yml\n\nroles/\n    common/\n    webtier/\n    monitoring/\n    fooapp/\n")),(0,r.kt)("h2",{id:"generate-ansible-directories"},"Generate ansible directories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mkdir gourp_vars host_vars\nfor ROLE in "apache" "web";do mkdir -p roles/${ROLE}/{files,handlers,tasks}; done\n')),(0,r.kt)("h2",{id:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f"},"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"role defaults"),(0,r.kt)("li",{parentName:"ul"},"inventory vars"),(0,r.kt)("li",{parentName:"ul"},"inventory group_vars"),(0,r.kt)("li",{parentName:"ul"},"inventory host_vars"),(0,r.kt)("li",{parentName:"ul"},"playbook group_vars"),(0,r.kt)("li",{parentName:"ul"},"playbook host_vars"),(0,r.kt)("li",{parentName:"ul"},"host facts"),(0,r.kt)("li",{parentName:"ul"},"registered vars"),(0,r.kt)("li",{parentName:"ul"},"set_facts"),(0,r.kt)("li",{parentName:"ul"},"play vars"),(0,r.kt)("li",{parentName:"ul"},"play vars_prompt"),(0,r.kt)("li",{parentName:"ul"},"play vars_files"),(0,r.kt)("li",{parentName:"ul"},"role and include vars"),(0,r.kt)("li",{parentName:"ul"},"block vars (only for tasks in block)"),(0,r.kt)("li",{parentName:"ul"},"task vars (only for the task)"),(0,r.kt)("li",{parentName:"ul"},"extra vars (always win precedence)")),(0,r.kt)("h2",{id:"name-default-description"},"Name Default Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Inventory Vars"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_host"),(0,r.kt)("td",{parentName:"tr",align:null},"name of host Hostname or IP address to SSH to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_port"),(0,r.kt)("td",{parentName:"tr",align:null},"22 Port to SSH to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_user"),(0,r.kt)("td",{parentName:"tr",align:null},"root User to SSH as")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_pass"),(0,r.kt)("td",{parentName:"tr",align:null},"none Password to use for SSH authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_connection"),(0,r.kt)("td",{parentName:"tr",align:null},"smart How Ansible will connect to host (see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_private_key_file"),(0,r.kt)("td",{parentName:"tr",align:null},"none SSH private key to use for SSH authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_shell_type"),(0,r.kt)("td",{parentName:"tr",align:null},"sh Shell to use for commands (see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_python_interpreter"),(0,r.kt)("td",{parentName:"tr",align:null},"/usr/bin/python Python interpreter on host (see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ansible_*_interpreter")),(0,r.kt)("td",{parentName:"tr",align:null},"none Like ansible_python_interpreter for other languages (see below)")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u65b0\u7248\u672c\u4e2d,\u53d8\u91cf\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," \u5df2\u7ecf\u53bb\u6389\u4e86")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Behavioral inventory parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"ansible.cfg option"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_port"),(0,r.kt)("td",{parentName:"tr",align:null},"remote_port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_user"),(0,r.kt)("td",{parentName:"tr",align:null},"remote_user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_ssh_private_key_file"),(0,r.kt)("td",{parentName:"tr",align:null},"private_key_file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible_shell_type"),(0,r.kt)("td",{parentName:"tr",align:null},"executable (see the following paragraph)")))),(0,r.kt)("h3",{id:"ansible-vault-\u547d\u4ee4"},"ansible-vault \u547d\u4ee4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-vault encrypt file.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"Encrypt the plaintext file.yml file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-vault decrypt file.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"Decrypt the encrypted file.yml file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-vault view file.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"Print the contents of the encrypted file.yml file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-vault create file.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new encrypted file.yml file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-vault edit file.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit an encrypted file.yml file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-vault rekey file.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"Change the password on an encrypted file.yml file")))),(0,r.kt)("h3",{id:"ssh-\u591a\u64ad\u9009\u9879"},"SSH \u591a\u64ad\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ControlMaster"),(0,r.kt)("td",{parentName:"tr",align:null},"auto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ControlPath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$HOME/.ansible/cp/ansible-ssh-%h-%p-%r"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ControlPersist"),(0,r.kt)("td",{parentName:"tr",align:null},"60s")))),(0,r.kt)("h3",{id:"ansiblemodule-\u53c2\u6570\u5c5e\u6027"},"AnsibleModule \u53c2\u6570\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"If True, argument is required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value if argument is not required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"choices"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of possible values for the argument")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aliases"),(0,r.kt)("td",{parentName:"tr",align:null},"Other names you can use as an alias for this argument")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Argument type. Allowed values: 'str', 'list', 'dict', 'bool', 'int', 'float'")))),(0,r.kt)("h3",{id:"ansiblemodule-\u521d\u59cb\u5316\u53c2\u6570"},"AnsibleModule \u521d\u59cb\u5316\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"argument_spec (none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary that contains information about arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bypass_checks"),(0,r.kt)("td",{parentName:"tr",align:null},"False If true, don\u2019t check any of the parameter constrains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no_log"),(0,r.kt)("td",{parentName:"tr",align:null},"False If true, don\u2019t log the behavior of this module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check_invalid_arguments"),(0,r.kt)("td",{parentName:"tr",align:null},"True If true, return error if user passed an unknown argument")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutually_exclusive"),(0,r.kt)("td",{parentName:"tr",align:null},"None List of mutually exclusive arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required_together"),(0,r.kt)("td",{parentName:"tr",align:null},"None List of arguments that must appear together")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required_one_of"),(0,r.kt)("td",{parentName:"tr",align:null},"None List of arguments where at least one must be present")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"add_file_common_args"),(0,r.kt)("td",{parentName:"tr",align:null},"False Supports the arguments of the file module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supports_check_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"False If true, indicates module supports check mode")))),(0,r.kt)("h3",{id:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4"},"\u8c03\u7528\u5916\u90e8\u547d\u4ee4"),(0,r.kt)("p",null,"\u5728 Ansible \u6a21\u5757\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"run_command")," \u8c03\u7528\u5916\u90e8\u547d\u4ee4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args (default)"),(0,r.kt)("td",{parentName:"tr",align:null},"string or list of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"(none) The command to be executed (see the following section)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check_rc"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, will call fail_json if command returns a non-zero value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close_fds"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Passes as close_fds argument to subprocess.Popen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executable"),(0,r.kt)("td",{parentName:"tr",align:null},"string (path to program)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Passes as executable argument to subprocess.Popen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Send to stdin if child process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"binary_data"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If false and data is present, Ansible will send a newline to stdin after sending data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path_prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"string (list of paths)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Colon-delimited list of paths to prepend to PATH environment variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cwd"),(0,r.kt)("td",{parentName:"tr",align:null},"string (directory path)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"If specified, Ansible will change to this directory before executing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_unsafe_shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"See the following section")))),(0,r.kt)("h3",{id:"documentation-markup"},"Documentation markup"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax with example"),(0,r.kt)("th",{parentName:"tr",align:null},"When to use"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"U(",(0,r.kt)("a",{parentName:"td",href:"http://www.example.com"},"http://www.example.com"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"URLs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Module"),(0,r.kt)("td",{parentName:"tr",align:null},"M(apt)"),(0,r.kt)("td",{parentName:"tr",align:null},"Module names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Italics"),(0,r.kt)("td",{parentName:"tr",align:null},"I(port)"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Constant-width"),(0,r.kt)("td",{parentName:"tr",align:null},"C(/bin/bash)"),(0,r.kt)("td",{parentName:"tr",align:null},"File and option names")))),(0,r.kt)("h2",{id:"functions"},"functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"fn"),(0,r.kt)("th",{parentName:"tr",align:null},"args"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"def,when_empty_or_false=false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ternary"),(0,r.kt)("td",{parentName:"tr",align:null},"true,false,null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type_debug"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"human_readable"),(0,r.kt)("td",{parentName:"tr",align:null},"isbites,unit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"human_to_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"isbits")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# omit \u53ef\u9009\nmode: "{{ item.mode | default(omit) }}"\n# \u5982\u679c\u8981 chain \u5219\u4f7f\u7528 None\nmode: "{{ foo | default(None) | some_filter or omit }}"\n# \u5fc5\u987b\u8981\u7684\u53d8\u91cf\nrequired: "{{ variable | mandatory }}"\n')),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_tests.html"},"Tests"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"test"),(0,r.kt)("th",{parentName:"tr",align:null},"args/meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"convert_bool=True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"convert_bool=True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is version"),(0,r.kt)("td",{parentName:"tr",align:null},"(str,operator,strict='False',version_type='semver')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is superset"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is subset"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is all"),(0,r.kt)("td",{parentName:"tr",align:null},"all true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is any"),(0,r.kt)("td",{parentName:"tr",align:null},"any true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is failed"),(0,r.kt)("td",{parentName:"tr",align:null},"test result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is changed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is succeeded"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is success"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is skipped"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u68c0\u6d4b\u63a7\u5236\u5668\u4e0a\u6587\u4ef6\u5b58\u5728\u60c5\u51b5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is directory,file,link,exists,same_file(path),mount,abs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vars:\n  lacp_groups:\n    - master: lacp0\n      network: 10.65.100.0/24\n      gateway: 10.65.100.1\n      dns4:\n        - 10.65.100.10\n        - 10.65.100.11\n      interfaces:\n        - em1\n        - em2\n\n    - master: lacp1\n      network: 10.65.120.0/24\n      gateway: 10.65.120.1\n      dns4:\n        - 10.65.100.10\n        - 10.65.100.11\n      interfaces:\n        - em3\n        - em4\n\n# Test list contains value\ntasks:\n  - debug:\n      msg: \"{{ (lacp_groups|selectattr('interfaces', 'contains', 'em1')|first).master }}\"\n")))}k.isMDXComponent=!0}}]);