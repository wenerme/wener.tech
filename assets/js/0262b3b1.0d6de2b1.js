"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52146],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),b=l,k=c["".concat(o,".").concat(b)]||c[b]||m[b]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return N}});var a=n(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={title:"Ansible"},b="Ansible",k={unversionedId:"ops/infra/ansible/README",id:"ops/infra/ansible/README",title:"Ansible",description:"- ansible \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/ops/infra/ansible/README.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/",permalink:"/notes/ops/infra/ansible/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/infra/ansible/README.md",tags:[],version:"current",lastUpdatedBy:"Mariusz Michalowski",lastUpdatedAt:1649939297,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"Ansible"},sidebar:"docs",previous:{title:"\u57fa\u7840\u8bbe\u65bd",permalink:"/notes/ops/infra/"},next:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible/ansible-awx"}},d={},N=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"ansible.cfg",id:"ansiblecfg",level:2},{value:"\u53d8\u91cf\u67e5\u627e\u8def\u5f84",id:"\u53d8\u91cf\u67e5\u627e\u8def\u5f84",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"Tips",id:"tips",level:2}],f={toc:N};function h(e){var t,n=e,{components:l}=n,u=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},f),u),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"ansible"}),"Ansible"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ansible/ansible"}),"ansible")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GPL-3.0, Python"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5316 \u670d\u52a1\u5f00\u901a\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u5e94\u7528\u90e8\u7f72 \u5de5\u5177"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 Infrastructure as code - \u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Linux\u3001Windows \u53ca \u7f51\u7edc\u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"\u5305\u542b\u5927\u91cf\u7684\u63d2\u4ef6\u548c\u4e09\u65b9\u96c6\u6210"))),(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u8981\u6c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u8282\u70b9 - python linix/windows"),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u8282\u70b9 - python sftp/scp"))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u7ec4\u540d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," \u4f1a\u544a\u8b66",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"force_valid_group_names=ignore")," \u53ef\u5173\u95ed"))),(0,a.kt)("li",{parentName:"ul"},"docker_container \u6a21\u5757\u7f51\u7edc\u6709\u6240\u8c03\u6574 - \u4e4b\u540e\u9ed8\u8ba4\u4e0d\u4f1a\u6dfb\u52a0 default \u7f51\u7edc - \u4e0e docker \u4fdd\u6301\u4e00\u76f4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae ",(0,a.kt)("inlineCode",{parentName:"li"},"networks_cli_compatible=yes")," \u63d0\u524d\u4e0e docker \u7f51\u7edc\u4fdd\u6301\u4e00\u81f4"))),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 yaml \u5199 inventory - \u6bd4 ini \u7684\u6a21\u5f0f\u597d\u7ba1\u7406 - \u7ed3\u6784\u4e5f\u66f4\u52a0\u6e05\u6670"),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c set_fact \u4e0d\u80fd\u4e92\u76f8\u4f9d\u8d56 ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ansible/ansible/issues/40239"}),"#40239")))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/leucos/ansible-tuto"}),"Ansible tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/collections/index.html"}),"List all modules"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"collection ",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html"}),"ansible.builtin")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg"}),"ansible.cfg")," \u53ef\u7528\u7684 ansible.cfg \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u73af\u5883\u53d8\u91cf",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ansible/ansible/blob/devel/lib/ansible/constants.py"}),"\u5217\u8868")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html"}),"YAML Syntax")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/community/other_tools_and_programs.html"}),"Other Tools and Programs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/apenella/go-ansible"}),"apenella/go-ansible")))),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/geerlingguy/ansible-for-devops"}),"geerlingguy/ansible-for-devops")))),(0,a.kt)("li",{parentName:"ul"},"\u754c\u9762",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ansible-semaphore/semaphore"}),"ansible-semaphore/semaphore"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go \u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u6709 Web \u754c\u9762 \u548c ",(0,a.kt)("a",m({parentName:"li"},{href:"https://ansible-semaphore.github.io/semaphore/"}),"API")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ansible/awx"}),"ansible/awx")," - Ansible Tower \u4e0a\u6e38\u5f00\u6e90\u9879\u76ee",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef Docker Compose \u542f\u52a8"))))),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ANSIBLE_INVENTORY")," - \u9017\u53f7\u5206\u9694\u7684\u4ed3\u5e93\u6e90"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT_HOST_LIST")," - \u9ed8\u8ba4\u4ed3\u5e93\u6e90 - ",(0,a.kt)("inlineCode",{parentName:"li"},"inventory")," \u914d\u7f6e")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# ping \u6240\u6709\u8282\u70b9\nansible all -m ping\n# -i \u6307\u5b9a\u4ed3\u5e93\nansible all -m ping -i hosts\n# ping \u672c\u5730 - \u6307\u5b9a\u89e3\u91ca\u5668\nansible localhost -m ping -e 'ansible_python_interpreter=/usr/bin/python3'\n# \u6267\u884c\u547d\u4ee4\nansible all -a date -i hosts\n\n# ansible_facts \u5185\u5bb9\nansible localhost -m setup\n\n# \u8282\u70b9\u4e0a\u672c\u5730\u8bbe\u7f6e\u7684\u5185\u5bb9 - \u6587\u4ef6\u4e3a ini \u683c\u5f0f\n# /etc/ansible/facts.d/preferences.fact\nansible hostname -m setup -a \"filter=ansible_local\"\n\n# docker \u542f\u52a8\u73af\u5883\ndocker run --rm -it \\\n  -e TZ=Asia/Shanghai \\\n  -v $HOME/.ansible:/root/.ansible \\\n  -v $PWD:/host -w /host \\\n  --name ansible wener/ansible\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Command"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6267\u884c AdHoc \u547d\u4ee4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-config"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u67e5\u770b\u5f53\u524d\u6240\u6709\u914d\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-connection"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u8fde\u63a5\u5230\u8fdc\u7a0b\u8bbe\u5907")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-console"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"REPL \u65b9\u5f0f\u6267\u884c Ansible Task")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-doc"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6587\u6863\u67e5\u8be2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-galaxy"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Role \u548c Collection \u4f9d\u8d56\u7ba1\u7406")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-inventory"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u67e5\u8be2\u673a\u5668\u6e05\u5355")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-playbook"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6267\u884c Playbook")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-pull"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u914d\u5408 cron \u4ece VSC \u62c9\u53d6 playbook \u7136\u540e\u672c\u5730\u6267\u884c - \u9002\u7528\u4e8e\u5927\u89c4\u6a21\u5468\u671f\u6027\u4efb\u52a1\u6267\u884c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-test"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Role \u548c Collection \u5f00\u53d1\u7684\u6d4b\u8bd5\u5de5\u5177")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ansible-vault"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Ansible \u52a0\u5bc6\u6570\u636e\u64cd\u4f5c")))),(0,a.kt)("h2",m({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2.10 \u9700\u8981\u5148\u5378\u8f7d ansible \u518d\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"}),"Installing Ansible"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# macOS\nCFLAGS=-Qunused-arguments CPPFLAGS=-Qunused-arguments pip install --user ansible\n\n# 2.10\npip uninstall ansible\npip install ansible\n")),(0,a.kt)("h2",m({},{id:"ansiblecfg"}),"ansible.cfg"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/reference_appendices/config.html"}),"Ansible Configuration Settings")),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u627e\u987a\u5e8f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ANSIBLE_CONFIG"),(0,a.kt)("li",{parentName:"ul"},"ansible.cfg"),(0,a.kt)("li",{parentName:"ul"},"~/.ansible.cfg"),(0,a.kt)("li",{parentName:"ul"},"/etc/ansible/ansible.cfg")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"# \u7f13\u5b58 facts\n[defaults]\ngathering = smart\n# \u7f13\u5b58\u65f6\u95f4 - \u79d2\nfact_caching_timeout = 86400\n# \u7f13\u5b58\u5230 redis\n# pip install redis\nfact_caching = redis\n# \u7f13\u5b58\u5230 json \u6587\u4ef6\nfact_caching = jsonfile\nfact_caching_connection = /path/to/cachedir\n\n# \u517c\u5bb9 docker network - \u5982\u679c\u6307\u5b9a\u4e86\u7f51\u7edc\u4e0d\u6dfb\u52a0\u9ed8\u8ba4\u7f51\u7edc\nnetworks_cli_compatible=yes\n# \u4e0d\u6821\u9a8c\u5206\u7ec4\u540d\u5b57 \u5141\u8bb8\u5305\u542b `-'\nforce_valid_group_names=ignore\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ansible_sudo_pass")),(0,a.kt)("h2",m({},{id:"\u53d8\u91cf\u67e5\u627e\u8def\u5f84"}),"\u53d8\u91cf\u67e5\u627e\u8def\u5f84"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable"}),"Variable precedence: Where should I put a variable?"))),(0,a.kt)("h2",m({},{id:"\u6700\u4f73\u5b9e\u8df5"}),"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html"}),"Best Practices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://spacelift.io/blog/ansible-playbooks"}),"Working with Ansible Playbooks \u2013 Tips & Tricks with Examples"))),(0,a.kt)("h2",m({},{id:"tips"}),"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 merge ",(0,a.kt)("a",m({parentName:"li"},{href:"http://docs.ansible.com/ansible/intro_configuration.html#hash-behaviour"}),"hash_behaviour")," \u53ef\u5408\u5e76\u5bf9\u8c61\u914d\u7f6e")))}h.isMDXComponent=!0}}]);