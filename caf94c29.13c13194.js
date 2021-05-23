(window.webpackJsonp=window.webpackJsonp||[]).push([[772],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(b,".").concat(u)]||s[u]||m[u]||l;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},846:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1021)),b={title:"Ansible \u53c2\u8003"},i={unversionedId:"ops/infra/ansible-ref",id:"ops/infra/ansible-ref",isDocsHomePage:!1,title:"Ansible \u53c2\u8003",description:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",source:"@site/notes/ops/infra/ansible-ref.md",slug:"/ops/infra/ansible-ref",permalink:"/notes/ops/infra/ansible-ref",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-ref.md",version:"current",sidebar:"docs",previous:{title:"Ansible Pull",permalink:"/notes/ops/infra/ansible-pull"},next:{title:"ansible-task",permalink:"/notes/ops/infra/ansible-task"}},o=[{value:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",id:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784",id:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"Generate ansible directories",id:"generate-ansible-directories",children:[]},{value:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f",id:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f",children:[]},{value:"Name Default Description",id:"name-default-description",children:[{value:"ansible-vault \u547d\u4ee4",id:"ansible-vault-\u547d\u4ee4",children:[]},{value:"SSH \u591a\u64ad\u9009\u9879",id:"ssh-\u591a\u64ad\u9009\u9879",children:[]},{value:"AnsibleModule \u53c2\u6570\u5c5e\u6027",id:"ansiblemodule-\u53c2\u6570\u5c5e\u6027",children:[]},{value:"AnsibleModule \u521d\u59cb\u5316\u53c2\u6570",id:"ansiblemodule-\u521d\u59cb\u5316\u53c2\u6570",children:[]},{value:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4",id:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4",children:[]},{value:"Documentation markup",id:"documentation-markup",children:[]}]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784"},"\u5e38\u7528\u76ee\u5f55\u7ed3\u6784"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'production                # \u6b63\u5f0f\u73af\u5883\u4ed3\u5e93\nstaging                   # \u9884\u53d1\u73af\u5883\u4ed3\u5e93\n\ngroup_vars/\n    all.yml               # \u5168\u5c40\u53d8\u91cf\n    group1.yml            # \u5206\u7ec4\u53d8\u91cf\n    group2.yml\nhost_vars/\n    hostname1.yml          # \u4e3b\u673a\u53d8\u91cf\n    hostname2.yml\n\nlibrary/                  # \u81ea\u5b9a\u4e49\u6a21\u5757\nmodule_utils/             # \u7528\u4e8e\u652f\u6301\u6a21\u5757\u7684\u6a21\u5757\u5de5\u5177\nfilter_plugins/           # \u81ea\u5b9a\u4e49\u8fc7\u6ee4\u63d2\u4ef6\n\nsite.yml                  # \u4e3b playbook\nwebservers.yml            # playbook for webserver tier\ndbservers.yml             # playbook for dbserver tier\n\nroles/\n    common/               # \u89d2\u8272\u7ed3\u6784\n        tasks/            #\n            main.yml      #  <-- tasks file can include smaller files if warranted\n        handlers/         #\n            main.yml      #  <-- handlers file\n        templates/        #  <-- files for use with the template resource\n            ntp.conf.j2   #  <------- templates end in .j2\n        files/            #\n            bar.txt       #  <-- files for use with the copy resource\n            foo.sh        #  <-- script files for use with the script resource\n        vars/             #\n            main.yml      #  <-- variables associated with this role\n        defaults/         #\n            main.yml      #  <-- default lower priority variables for this role\n        meta/             #\n            main.yml      #  <-- role dependencies\n        library/          # roles can also include custom modules\n        module_utils/     # roles can also include custom module_utils\n        lookup_plugins/   # or other types of plugins, like lookup in this case\n\n    webtier/              # same kind of structure as "common" was above, done for the webtier role\n    monitoring/           # ""\n    fooapp/               # ""\n')),Object(l.b)("h2",{id:"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784"},"\u72ec\u7acb\u4ed3\u5e93\u76ee\u5f55\u7ed3\u6784"),Object(l.b)("p",null,"\u5982\u679c\u4ed3\u5e93\u533a\u522b\u8f83\u5927\uff0c\u53ef\u91c7\u7528"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"inventories/\n   production/\n      hosts               # production \u4ed3\u5e93\u4e3b\u673a\u5b9a\u4e49\n      group_vars/\n          all.yml         # production \u5168\u5c40\u53d8\u91cf\n          group1.yml      # \u5206\u7ec4\u53d8\u91cf\n          group2.yml\n      host_vars/\n          hostname1.yml   # \u4e3b\u673a\u53d8\u91cf\n          hostname2.yml\n\n   staging/\n      hosts               # staging \u4ed3\u5e93\u4e3b\u673a\u5b9a\u4e49\n      group_vars/\n          group1.yml       # here we assign variables to particular groups\n          group2.yml\n      host_vars/\n          stagehost1.yml   # here we assign variables to particular systems\n          stagehost2.yml\n\nlibrary/\nmodule_utils/\nfilter_plugins/\n\nsite.yml\nwebservers.yml\ndbservers.yml\n\nroles/\n    common/\n    webtier/\n    monitoring/\n    fooapp/\n")),Object(l.b)("h2",{id:"generate-ansible-directories"},"Generate ansible directories"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'mkdir gourp_vars host_vars\nfor ROLE in "apache" "web";do mkdir -p roles/${ROLE}/{files,handlers,tasks}; done\n')),Object(l.b)("h2",{id:"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f"},"\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"role defaults"),Object(l.b)("li",{parentName:"ul"},"inventory vars"),Object(l.b)("li",{parentName:"ul"},"inventory group_vars"),Object(l.b)("li",{parentName:"ul"},"inventory host_vars"),Object(l.b)("li",{parentName:"ul"},"playbook group_vars"),Object(l.b)("li",{parentName:"ul"},"playbook host_vars"),Object(l.b)("li",{parentName:"ul"},"host facts"),Object(l.b)("li",{parentName:"ul"},"registered vars"),Object(l.b)("li",{parentName:"ul"},"set_facts"),Object(l.b)("li",{parentName:"ul"},"play vars"),Object(l.b)("li",{parentName:"ul"},"play vars_prompt"),Object(l.b)("li",{parentName:"ul"},"play vars_files"),Object(l.b)("li",{parentName:"ul"},"role and include vars"),Object(l.b)("li",{parentName:"ul"},"block vars (only for tasks in block)"),Object(l.b)("li",{parentName:"ul"},"task vars (only for the task)"),Object(l.b)("li",{parentName:"ul"},"extra vars (always win precedence)")),Object(l.b)("h2",{id:"name-default-description"},"Name Default Description"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Inventory Vars"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_host"),Object(l.b)("td",{parentName:"tr",align:null},"name of host Hostname or IP address to SSH to")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_port"),Object(l.b)("td",{parentName:"tr",align:null},"22 Port to SSH to")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_user"),Object(l.b)("td",{parentName:"tr",align:null},"root User to SSH as")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_pass"),Object(l.b)("td",{parentName:"tr",align:null},"none Password to use for SSH authentication")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_connection"),Object(l.b)("td",{parentName:"tr",align:null},"smart How Ansible will connect to host (see below)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_private_key_file"),Object(l.b)("td",{parentName:"tr",align:null},"none SSH private key to use for SSH authentication")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_shell_type"),Object(l.b)("td",{parentName:"tr",align:null},"sh Shell to use for commands (see below)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_python_interpreter"),Object(l.b)("td",{parentName:"tr",align:null},"/usr/bin/python Python interpreter on host (see below)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ansible_*_interpreter")),Object(l.b)("td",{parentName:"tr",align:null},"none Like ansible_python_interpreter for other languages (see below)")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5728\u65b0\u7248\u672c\u4e2d,\u53d8\u91cf\u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"ssh")," \u5df2\u7ecf\u53bb\u6389\u4e86")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Behavioral inventory parameter"),Object(l.b)("th",{parentName:"tr",align:null},"ansible.cfg option"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_port"),Object(l.b)("td",{parentName:"tr",align:null},"remote_port")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_user"),Object(l.b)("td",{parentName:"tr",align:null},"remote_user")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_ssh_private_key_file"),Object(l.b)("td",{parentName:"tr",align:null},"private_key_file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible_shell_type"),Object(l.b)("td",{parentName:"tr",align:null},"executable (see the following paragraph)")))),Object(l.b)("h3",{id:"ansible-vault-\u547d\u4ee4"},"ansible-vault \u547d\u4ee4"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Command"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible-vault encrypt file.yml"),Object(l.b)("td",{parentName:"tr",align:null},"Encrypt the plaintext file.yml file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible-vault decrypt file.yml"),Object(l.b)("td",{parentName:"tr",align:null},"Decrypt the encrypted file.yml file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible-vault view file.yml"),Object(l.b)("td",{parentName:"tr",align:null},"Print the contents of the encrypted file.yml file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible-vault create file.yml"),Object(l.b)("td",{parentName:"tr",align:null},"Create a new encrypted file.yml file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible-vault edit file.yml"),Object(l.b)("td",{parentName:"tr",align:null},"Edit an encrypted file.yml file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ansible-vault rekey file.yml"),Object(l.b)("td",{parentName:"tr",align:null},"Change the password on an encrypted file.yml file")))),Object(l.b)("h3",{id:"ssh-\u591a\u64ad\u9009\u9879"},"SSH \u591a\u64ad\u9009\u9879"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Option"),Object(l.b)("th",{parentName:"tr",align:null},"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ControlMaster"),Object(l.b)("td",{parentName:"tr",align:null},"auto")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ControlPath"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/.ansible/cp/ansible-ssh-%h-%p-%r"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ControlPersist"),Object(l.b)("td",{parentName:"tr",align:null},"60s")))),Object(l.b)("h3",{id:"ansiblemodule-\u53c2\u6570\u5c5e\u6027"},"AnsibleModule \u53c2\u6570\u5c5e\u6027"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Option"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null},"If True, argument is required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"Default value if argument is not required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"choices"),Object(l.b)("td",{parentName:"tr",align:null},"A list of possible values for the argument")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"aliases"),Object(l.b)("td",{parentName:"tr",align:null},"Other names you can use as an alias for this argument")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"Argument type. Allowed values: 'str', 'list', 'dict', 'bool', 'int', 'float'")))),Object(l.b)("h3",{id:"ansiblemodule-\u521d\u59cb\u5316\u53c2\u6570"},"AnsibleModule \u521d\u59cb\u5316\u53c2\u6570"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"argument_spec (none)"),Object(l.b)("td",{parentName:"tr",align:null},"Dictionary that contains information about arguments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bypass_checks"),Object(l.b)("td",{parentName:"tr",align:null},"False If true, don\u2019t check any of the parameter constrains")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no_log"),Object(l.b)("td",{parentName:"tr",align:null},"False If true, don\u2019t log the behavior of this module")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"check_invalid_arguments"),Object(l.b)("td",{parentName:"tr",align:null},"True If true, return error if user passed an unknown argument")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mutually_exclusive"),Object(l.b)("td",{parentName:"tr",align:null},"None List of mutually exclusive arguments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"required_together"),Object(l.b)("td",{parentName:"tr",align:null},"None List of arguments that must appear together")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"required_one_of"),Object(l.b)("td",{parentName:"tr",align:null},"None List of arguments where at least one must be present")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"add_file_common_args"),Object(l.b)("td",{parentName:"tr",align:null},"False Supports the arguments of the file module")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"supports_check_mode"),Object(l.b)("td",{parentName:"tr",align:null},"False If true, indicates module supports check mode")))),Object(l.b)("h3",{id:"\u8c03\u7528\u5916\u90e8\u547d\u4ee4"},"\u8c03\u7528\u5916\u90e8\u547d\u4ee4"),Object(l.b)("p",null,"\u5728 Ansible \u6a21\u5757\u4e2d\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"run_command")," \u8c03\u7528\u5916\u90e8\u547d\u4ee4"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Argument"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args (default)"),Object(l.b)("td",{parentName:"tr",align:null},"string or list of strings"),Object(l.b)("td",{parentName:"tr",align:null},"(none) The command to be executed (see the following section)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"check_rc"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"False"),Object(l.b)("td",{parentName:"tr",align:null},"If true, will call fail_json if command returns a non-zero value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"close_fds"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"True"),Object(l.b)("td",{parentName:"tr",align:null},"Passes as close_fds argument to subprocess.Popen")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"executable"),Object(l.b)("td",{parentName:"tr",align:null},"string (path to program)"),Object(l.b)("td",{parentName:"tr",align:null},"None"),Object(l.b)("td",{parentName:"tr",align:null},"Passes as executable argument to subprocess.Popen")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"None"),Object(l.b)("td",{parentName:"tr",align:null},"Send to stdin if child process")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"binary_data"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"False"),Object(l.b)("td",{parentName:"tr",align:null},"If false and data is present, Ansible will send a newline to stdin after sending data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"path_prefix"),Object(l.b)("td",{parentName:"tr",align:null},"string (list of paths)"),Object(l.b)("td",{parentName:"tr",align:null},"None"),Object(l.b)("td",{parentName:"tr",align:null},"Colon-delimited list of paths to prepend to PATH environment variable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cwd"),Object(l.b)("td",{parentName:"tr",align:null},"string (directory path)"),Object(l.b)("td",{parentName:"tr",align:null},"None"),Object(l.b)("td",{parentName:"tr",align:null},"If specified, Ansible will change to this directory before executing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"use_unsafe_shell"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"False"),Object(l.b)("td",{parentName:"tr",align:null},"See the following section")))),Object(l.b)("h3",{id:"documentation-markup"},"Documentation markup"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Syntax with example"),Object(l.b)("th",{parentName:"tr",align:null},"When to use"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"URL"),Object(l.b)("td",{parentName:"tr",align:null},"U(",Object(l.b)("a",{parentName:"td",href:"http://www.example.com"},"http://www.example.com"),")"),Object(l.b)("td",{parentName:"tr",align:null},"URLs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Module"),Object(l.b)("td",{parentName:"tr",align:null},"M(apt)"),Object(l.b)("td",{parentName:"tr",align:null},"Module names")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Italics"),Object(l.b)("td",{parentName:"tr",align:null},"I(port)"),Object(l.b)("td",{parentName:"tr",align:null},"Parameter names")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Constant-width"),Object(l.b)("td",{parentName:"tr",align:null},"C(/bin/bash)"),Object(l.b)("td",{parentName:"tr",align:null},"File and option names")))))}p.isMDXComponent=!0}}]);