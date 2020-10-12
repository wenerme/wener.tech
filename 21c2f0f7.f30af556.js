(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{127:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return r})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return o}));var n=t(2),l=t(7),b=(t(0),t(557)),i={id:"ansible-faq",titleL:"Ansible FAQ"},r={unversionedId:"ops/infra/ansible-faq",id:"ops/infra/ansible-faq",isDocsHomePage:!1,title:"ansible-faq",description:"Ansible FAQ",source:"@site/contents/tricks/ops/infra/ansible-faq.md",slug:"/ops/infra/ansible-faq",permalink:"/notes/ops/infra/ansible-faq",version:"current",sidebar:"docs",previous:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible-awx"},next:{title:"Terraform",permalink:"/notes/ops/infra/terraform"}},c=[{value:"include_task vs import_task",id:"include_task-vs-import_task",children:[]},{value:"raw vs command vs shell",id:"raw-vs-command-vs-shell",children:[]},{value:"\u5e38\u7528\u4f9d\u8d56\u7ec4\u4ef6",id:"\u5e38\u7528\u4f9d\u8d56\u7ec4\u4ef6",children:[]},{value:"psycopg2 ld: library not found for -lssl",id:"psycopg2-ld-library-not-found-for--lssl",children:[]},{value:"winrm",id:"winrm",children:[]},{value:"synchronize \u4e0d\u652f\u6301 ProxyCommand",id:"synchronize-\u4e0d\u652f\u6301-proxycommand",children:[]},{value:"\u4f7f\u7528 dotenv",id:"\u4f7f\u7528-dotenv",children:[]},{value:"\u83b7\u53d6\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55",id:"\u83b7\u53d6\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55",children:[]},{value:"json \u6587\u4ef6\u4f5c\u4e3a\u53d8\u91cf",id:"json-\u6587\u4ef6\u4f5c\u4e3a\u53d8\u91cf",children:[]},{value:"gitlab - got an unexpected keyword argument &#39;email&#39;",id:"gitlab---got-an-unexpected-keyword-argument-email",children:[]},{value:"\u6d4b\u8bd5 docker \u6a21\u5757",id:"\u6d4b\u8bd5-docker-\u6a21\u5757",children:[]},{value:"macOS \u4f7f\u7528 hasi_vault \u5b89\u88c5 hvac \u95ee\u9898",id:"macos-\u4f7f\u7528-hasi_vault-\u5b89\u88c5-hvac-\u95ee\u9898",children:[]},{value:"2.9.0 \u4f7f\u7528 hashi_vault \u8fd4\u56de\u7ed3\u679c\u7ed3\u6784\u4e0d\u5bf9",id:"290-\u4f7f\u7528-hashi_vault-\u8fd4\u56de\u7ed3\u679c\u7ed3\u6784\u4e0d\u5bf9",children:[]},{value:"objc37519: +__NSCFConstantString initialize may have been in progress in another thread when fork() was called.",id:"objc37519-__nscfconstantstring-initialize-may-have-been-in-progress-in-another-thread-when-fork-was-called",children:[]},{value:"\u751f\u6210 UUID",id:"\u751f\u6210-uuid",children:[]},{value:"\u5feb\u901f\u83b7\u53d6\u5730\u5740",id:"\u5feb\u901f\u83b7\u53d6\u5730\u5740",children:[]},{value:"has no attribute &#39;ansible_default_ipv4&#39;, &#39;address&#39;",id:"has-no-attribute-ansible_default_ipv4-address",children:[]},{value:"Java \u73af\u5883\u4e0d\u6b63\u786e\u6216\u6ca1\u6709",id:"java-\u73af\u5883\u4e0d\u6b63\u786e\u6216\u6ca1\u6709",children:[]},{value:"Aborting, target uses selinux but python bindings aren&#39;t installed!",id:"aborting-target-uses-selinux-but-python-bindings-arent-installed",children:[]},{value:"env &#39;python&#39; no such file",id:"env-python-no-such-file",children:[]},{value:"\u62c6\u5206\u4e3b\u673a\u5230\u591a\u4e2a\u6587\u4ef6",id:"\u62c6\u5206\u4e3b\u673a\u5230\u591a\u4e2a\u6587\u4ef6",children:[]}],s={rightToc:c};function o(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"ansible-faq"},"Ansible FAQ"),Object(b.b)("h2",{id:"include_task-vs-import_task"},"include_task vs import_task"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5efa\u8bae"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9700\u8981 ",Object(b.b)("inlineCode",{parentName:"li"},"when")," \u3001\u5faa\u73af\u3001\u540d\u5b57\u65f6\u662f\u53d8\u91cf \u4f7f\u7528 include"),Object(b.b)("li",{parentName:"ul"},"\u9664\u6b64\u4e4b\u5916\u90fd\u4f7f\u7528 import"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"import"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728\u89e3\u6790\u65f6\u5904\u7406 - \u9759\u6001"),Object(b.b)("li",{parentName:"ul"},"\u5efa\u8bae\u7528\u4e8e\u903b\u8f91\u5355\u5143 - \u4f8b\u5982\u62c6\u5206\u957f playbook"),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u5faa\u73af"),Object(b.b)("li",{parentName:"ul"},"\u80fd\u591f ",Object(b.b)("inlineCode",{parentName:"li"},"--list-tags")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"--list-tasks")),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bfc\u5165 playbook"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"when")," \u6761\u4ef6\u4f1a\u88ab\u5e94\u7528\u5230\u6240\u6709\u5bfc\u5165\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"tasks"),"\uff0c\u5927\u591a\u6570\u65f6\u5019\u90fd\u662f\u4e0d\u671f\u671b\u7684\uff0c\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"include")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"include"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728\u6267\u884c\u65f6\u5904\u7406 - \u52a8\u6001"),Object(b.b)("li",{parentName:"ul"},"\u7528\u4e8e\u5e26\u6761\u4ef6\u7684\u60c5\u51b5"),Object(b.b)("li",{parentName:"ul"},"\u53ea\u6709 include \u624d\u53ef\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"include_tasks: prerequisites_{{ ansible_os_family | lower }}.yml")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_includes.html"}),"Reuse includes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/devel/user_guide/playbooks_reuse.html#dynamic-vs-static"}),"dynamic vs. static")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_conditionals.html#applying-when-to-roles-imports-and-includes"}),"Applying \u2018when\u2019 to roles, imports, and includes"))))),Object(b.b)("h2",{id:"raw-vs-command-vs-shell"},"raw vs command vs shell"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"shell - \u7531 ",Object(b.b)("inlineCode",{parentName:"li"},"/bin/sh")," \u6267\u884c - \u56e0\u6b64\u80fd\u4f7f\u7528\u53d8\u91cf\u548c\u4e00\u4e9b\u8bed\u6cd5"),Object(b.b)("li",{parentName:"ul"},"command - \u76f4\u63a5\u6267\u884c - \u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"<"),",",Object(b.b)("inlineCode",{parentName:"li"},">"),",",Object(b.b)("inlineCode",{parentName:"li"},"|"),",",Object(b.b)("inlineCode",{parentName:"li"},";")," \u7b49"),Object(b.b)("li",{parentName:"ul"},"raw - \u7531 ssh \u76f4\u63a5\u6267\u884c\uff0c\u4e0d\u4f9d\u8d56 python")),Object(b.b)("h2",{id:"\u5e38\u7528\u4f9d\u8d56\u7ec4\u4ef6"},"\u5e38\u7528\u4f9d\u8d56\u7ec4\u4ef6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"module"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"pip"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"postgres"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psycopg2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vault"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hvac")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"docker"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"docker")))),Object(b.b)("h2",{id:"psycopg2-ld-library-not-found-for--lssl"},"psycopg2 ld: library not found for -lssl"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8def\u5f84\u6765\u81ea\u4e8e ",Object(b.b)("inlineCode",{parentName:"li"},"pg_config --ldflags"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"env LDFLAGS='-L/usr/local/lib -L/usr/local/opt/openssl/lib -L/usr/local/opt/readline/lib' $(brew --prefix ansible)/libexec/bin/pip install psycopg2\n")),Object(b.b)("h2",{id:"winrm"},"winrm"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'$(brew --prefix ansible)/libexec/bin/pip install "pywinrm>=0.3.0"\n')),Object(b.b)("h2",{id:"synchronize-\u4e0d\u652f\u6301-proxycommand"},"synchronize \u4e0d\u652f\u6301 ProxyCommand"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"rsync \u4f7f\u7528 jumphost \u4f1a\u6709\u95ee\u9898\uff0c\u53ef\u5c1d\u8bd5 sshuttle \u6216\u8005\u4f7f\u7528 copy"),Object(b.b)("li",{parentName:"ul"},"copy \u6bd4 rsync \u6162 - \u4e0d\u4f1a\u505a\u5dee\u5206")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"rsync -azv -e 'ssh -o \"ProxyCommand ssh -A PROXYHOST -W %h:%p\"' foo/ dest:./foo/\n# ssh 7.4+\nrsync -azv -e 'ssh -A -J USER@PROXYHOST:PORT' foo/ dest:./foo/\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"rsync_opts: '-e XXXXX'\n")),Object(b.b)("h2",{id:"\u4f7f\u7528-dotenv"},"\u4f7f\u7528 dotenv"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u66f4\u63a8\u8350\u4f7f\u7528\u53d8\u91cf\u6216 vault")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'cat <<CONF > .env\nexport TENANT_NAME=test\nCONF\n# \u6ce8\u610f\u4f7f\u7528 dotenv\n# https://github.com/bkeepers/dotenv\ndotenv ansible -m debug -a \'msg={{lookup("env","TENANT_NAME")}}\' localhost\n')),Object(b.b)("h2",{id:"\u83b7\u53d6\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55"},"\u83b7\u53d6\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\b\u89d2\u8272\u7b49\u76f8\u5173\u7684\u76ee\u5f55\u90fd\u662f\u76f8\u5bf9\u4e8e playbook \u7684")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- set_fact:\n    # \u5982\u679c\u662f git\n    awd: \"{{ lookup('pipe', 'git rev-parse --show-toplevel') }}\"\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/issues/38771"}),"38771"))),Object(b.b)("h2",{id:"json-\u6587\u4ef6\u4f5c\u4e3a\u53d8\u91cf"},"json \u6587\u4ef6\u4f5c\u4e3a\u53d8\u91cf"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- hosts: your_host\n  vars:\n    jsonVar: "{{ lookup(\'file\', \'var.json\') | from_json }}"\n  tasks:\n    - name: test loop\n      with_dict: "{{ jsonVar[\'queue\'] }}"\n      shell: |\n        if echo "blue" | grep -q "{{ item.value.color }}" ; then\n            echo "success"\n        fi\n')),Object(b.b)("h2",{id:"gitlab---got-an-unexpected-keyword-argument-email"},"gitlab - got an unexpected keyword argument 'email'"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/issues/65189"}),"#65189"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$(brew --prefix ansible)/libexec/bin/pip uninstall python-gitlab\n# \u9700\u8981\u4f4e\u7248\u672c\n$(brew --prefix ansible)/libexec/bin/pip install -U 'python-gitlab<1.13'\n")),Object(b.b)("h2",{id:"\u6d4b\u8bd5-docker-\u6a21\u5757"},"\u6d4b\u8bd5 docker \u6a21\u5757"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ansible -m docker_container -a 'name=test image=busybox' localhost\n\n# \u5e38\u89c4\u64cd\u4f5c\npip uninstall docker-py\npip3 uninstall docker\n\npip3 install docker\n")),Object(b.b)("h2",{id:"macos-\u4f7f\u7528-hasi_vault-\u5b89\u88c5-hvac-\u95ee\u9898"},"macOS \u4f7f\u7528 hasi_vault \u5b89\u88c5 hvac \u95ee\u9898"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5176\u4ed6\u5305\u4e5f\u662f\u4e00\u6837 - \u4f8b\u5982 docker")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# \u5f53\u524d\u4f7f\u7528\u7684 python\nansible -m debug -a \'var=ansible_playbook_python\' localhost\n# \u4f7f\u7528 ansible \u4e0b\u7684 pip \u5b89\u88c5\n$(brew --prefix ansible)/libexec/bin/pip install hvac\n\n# localhost | SUCCESS => {\n#     "ansible_playbook_python": "/usr/local/Cellar/ansible/2.6.0/libexec/bin/python2.7"\n# }\n# source $(brew --prefix ansible)/libexec/bin/activate\n# pip install hvac\n')),Object(b.b)("h2",{id:"290-\u4f7f\u7528-hashi_vault-\u8fd4\u56de\u7ed3\u679c\u7ed3\u6784\u4e0d\u5bf9"},"2.9.0 \u4f7f\u7528 hashi_vault \u8fd4\u56de\u7ed3\u679c\u7ed3\u6784\u4e0d\u5bf9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/pull/41132"}),"#41132"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u56e0\u4e3a\u8fd4\u56de\u4e86 metadata \u548c data \u8fd8\u9700\u8981\u53d6\u9700\u8981\u7684\u5b57\u6bb5\nansible -m debug -a \"msg={{lookup('hashi_vault', 'secret=secret/data/app:data').db_password}}\" localhost\n# consul \u7684 token\nansible -m debug -a \"msg={{lookup('hashi_vault', 'secret=consul/creds/reader:token')}}\" localhost\n")),Object(b.b)("h2",{id:"objc37519-__nscfconstantstring-initialize-may-have-been-in-progress-in-another-thread-when-fork-was-called"},"objc","[37519]",": +","[__NSCFConstantString initialize]"," may have been in progress in another thread when fork() was called."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES\n")),Object(b.b)("h2",{id:"\u751f\u6210-uuid"},"\u751f\u6210 UUID"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ansible localhost -m shell -a 'uuidgen'\nansible localhost -m debug -a 'msg=\"{{ansible_date_time.iso8601_micro | to_uuid}}\"'\n")),Object(b.b)("h2",{id:"\u5feb\u901f\u83b7\u53d6\u5730\u5740"},"\u5feb\u901f\u83b7\u53d6\u5730\u5740"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ansible -i hosts all -m setup\nansible -i k8s all -m debug -a 'msg={{ansible_default_ipv4.address}}'\n")),Object(b.b)("h2",{id:"has-no-attribute-ansible_default_ipv4-address"},"has no attribute 'ansible_default_ipv4', 'address'"),Object(b.b)("p",null,"\u6b64\u65f6\u9700\u8981\u4ece\u65b0\u6536\u96c6\u4e3b\u673a\u4fe1\u606f,\u7136\u540e\u518d\u7ee7\u7eed\u4e4b\u524d\u64cd\u4f5c"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ansible -i hosts -m setup all\n")),Object(b.b)("p",null,"\u786e\u4fdd\u8be5\u64cd\u4f5c\u6210\u529f,\u5982\u679c\u4ecd\u7136\u8fd8\u662f\u51fa\u73b0\u6ca1\u6709",Object(b.b)("inlineCode",{parentName:"p"},"address")," \u7684\u9519\u8bef,\u90a3\u53ef\u80fd\u662f\u7531\u4e8e ansible \u65e0\u6cd5\u6536\u96c6\u5230\u9ed8\u8ba4\u5730\u5740,\u4e5f\u9700\u8981\u786e\u4fdd ",Object(b.b)("inlineCode",{parentName:"p"},"ifconfig")," \u6709\u5730\u5740."),Object(b.b)("p",null,"Ansible \u662f\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"ip -4 route get 8.8.8.8")," (\u53c2\u8003",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ansible/ansible/blob/837f3dd24d2a3f6acdfcd6184d4b1830af551100/lib/ansible/module_utils/facts.py#L1939"}),"\u8fd9\u91cc"),")"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u89e3\u51b3\u529e\u6cd5 \u53c2\u8003 ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/a/29496135/1870054"}),"\u8fd9\u91cc"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7\u624b\u52a8\u6dfb\u52a0\u8def\u7531\u6765\u5c1d\u8bd5\u4fee\u6539\u8fd9\u4e2a\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7 set_facts \u6765\u8986\u76d6\u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7\u5b9a\u5236 facts \u6765\u5b9e\u73b0\u8be5\u914d\u7f6e")))),Object(b.b)("h2",{id:"java-\u73af\u5883\u4e0d\u6b63\u786e\u6216\u6ca1\u6709"},"Java \u73af\u5883\u4e0d\u6b63\u786e\u6216\u6ca1\u6709"),Object(b.b)("p",null,"\u56e0\u4e3a\u5b89\u88c5\u90e8\u7f72\u662f\u901a\u8fc7 SSH \u8fdb\u884c\u64cd\u4f5c,\u662f\u975e\u4ea4\u4e92\u5f0f\u7684 SHELL, \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1\u73af\u5883\u662f\u5426\u6b63\u786e,"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ssh user@host 'java -version'\n")),Object(b.b)("p",null,"\u53ef\u5c06\u6240\u9700\u7684 JAVA \u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"~/.bashrc")," \u7684 ",Object(b.b)("strong",{parentName:"p"},"\u6700\u4e0a\u9762"),". \u56e0\u4e3a\u975e\u4ea4\u4e92\u5f0f\u7684\u542f\u52a8\u811a\u672c\u6267\u884c\u8def\u5f84\u53ef\u80fd\u6709\u6240\u4e0d\u540c."),Object(b.b)("h2",{id:"aborting-target-uses-selinux-but-python-bindings-arent-installed"},"Aborting, target uses selinux but python bindings aren't installed!"),Object(b.b)("p",null,"\u5728\u6267\u884c\u65f6\u53ef\u80fd\u9047\u5230\u4ee5\u4e0b\u9519\u8bef"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'TASK [es : My Task] *****************************************\nfatal: [host-1]: FAILED! => {"changed": false, "checksum": "4bd3ef681e70faefe3a66c6eb3419b5d4a0e2714", "failed": true, "msg": "Aborting, target uses selinux but python bindings (libselinux-python) aren\'t installed!"}\n')),Object(b.b)("p",null,"\u662f\u7531\u4e8e\u5f00\u542f\u4e86 SELinux, \u4f46\u6ca1\u6709\u5b89\u88c5 Python \u7ed1\u5b9a\u5e93\u5bfc\u81f4\u7684, \u53ea\u9700\u8981\u5b89\u88c5\u8be5\u5e93\u5373\u53ef."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"yum install libselinux-python\n")),Object(b.b)("h2",{id:"env-python-no-such-file"},"env 'python' no such file"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u662f\u56e0\u4e3a\u627e\u4e0d\u5230 python - \u53ef\u80fd\u662f\u56e0\u4e3a\u4f7f\u7528\u7684 python3\nenv python\n# \u786e\u4fdd python3 \u5b58\u5728\nenv python3\n# \u521b\u5efa\u8f6f\u94fe\u63a5\nln -s `which python3` /usr/bin/python\n")),Object(b.b)("h2",{id:"\u62c6\u5206\u4e3b\u673a\u5230\u591a\u4e2a\u6587\u4ef6"},"\u62c6\u5206\u4e3b\u673a\u5230\u591a\u4e2a\u6587\u4ef6"),Object(b.b)("p",null,"\u76ee\u5f55\u7ed3\u6784\u53ef\u4ee5\u4e3a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"inventories/\n  a.yaml\n  b.yaml\n  c.yaml\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u6307\u5411 inventories/ \u4f5c\u4e3a\u4ed3\u5e93\u5373\u53ef\nansible -i inventories/ all --list-hosts\n# \u9700\u8981\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u5355\u4e2a\u6307\u5b9a\nansible -i inventories/a.yaml -i inventories/b.yaml all --list-hosts\n")),Object(b.b)("p",null,"\u76ee\u5f55\u7ed3\u6784\u4e5f\u53ef\u4ee5\u4e3a - \u9002\u7528\u4e8e\u4e0d\u540c\u73af\u5883\u533a\u522b\u8f83\u5927\u7684\u65f6\u5019"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"inventories/\n  a/\n    hosts\n  b/\n    hosts\n")))}o.isMDXComponent=!0},557:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),l=t.n(n);function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){b(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),o=function(e){var a=l.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=o(e.components);return l.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},d=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=o(t),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||b;return t?l.a.createElement(m,r(r({ref:a},s),{},{components:t})):l.a.createElement(m,r({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var b=t.length,i=new Array(b);i[0]=d;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var s=2;s<b;s++)i[s]=t[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);