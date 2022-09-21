"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41173],{38002:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(96600),l=n(27279),r=(n(59496),n(3905)),i=["components"],o={title:"Ansible Version",tags:["Version"]},s=void 0,p={unversionedId:"ops/infra/ansible/ansible-version",id:"ops/infra/ansible/ansible-version",title:"Ansible Version",description:"- \u53c2\u8003",source:"@site/notes/ops/infra/ansible/ansible-version.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/ansible-version",permalink:"/notes/ops/infra/ansible/ansible-version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible/ansible-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",frontMatter:{title:"Ansible Version",tags:["Version"]},sidebar:"docs",previous:{title:"Ansible \u53c2\u8003",permalink:"/notes/ops/infra/ansible/ansible-ref"},next:{title:"Ansible Windows",permalink:"/notes/ops/infra/ansible/ansible-windows"}},b={},u=[{value:"ansible 4.0",id:"ansible-40",level:2},{value:"ansible-core 2.11",id:"ansible-core-211",level:2},{value:"ansible 3.0",id:"ansible-30",level:2},{value:"ansible-base 2.10",id:"ansible-base-210",level:2},{value:"2.9",id:"29",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ansible.com/blog/thoughts-on-restructuring-the-ansible-project"},"Thoughts on Restructuring the Ansible Project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62c6\u5206 ansible \u548c ansible-base")))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ver"),(0,r.kt)("th",{parentName:"tr",align:null},"date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible 4.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-05-11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible-core 2.11"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-04-27")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ansible 3.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-02-09")))),(0,r.kt)("h2",{id:"ansible-40"},"ansible 4.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ansible-core 2.11"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ansible-community/ansible-build-data/blob/main/4/CHANGELOG-v4.rst"},"CHANGELOG-v4"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u5f53\u524d\u5b89\u88c5\u7248\u672c\npython -c 'from ansible_collections.ansible_release import ansible_version; print(ansible_version)'\n")),(0,r.kt)("h2",{id:"ansible-core-211"},"ansible-core 2.11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ansible-base \u91cd\u547d\u540d\u4e3a ansible-core"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ece collection \u6267\u884c playbooks"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ece\u672c\u5730\u5b89\u88c5 Ansible Collections"),(0,r.kt)("li",{parentName:"ul"},"reinstall collection \u53ef\u5347\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ansible/ansible/blob/stable-2.11/changelogs/CHANGELOG-v2.11.rst"},"CHANGELOG-v2.11"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ece collection \u6267\u884c playbook\nansible-playbook my_namespace.my_collection.playbook1 -i ./myinventory\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# collection \u4e2d\u7684 playbook\n- import_playbook: my_namespace.my_collection.playbookX\n")),(0,r.kt)("h2",{id:"ansible-30"},"ansible 3.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ansible-core 2.10"),(0,r.kt)("li",{parentName:"ul"},"all-in-one",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"core+",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ansible-community/ansible-build-data/blob/main/3/ansible-3.build"},"collections")))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ansible-community/ansible-build-data/blob/main/3/CHANGELOG-v3.rst"},"CHANGELOG-v3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ansible.com/blog/ansible-3.0.0-qa"},"Ansible 3.0.0 QA"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6bcf 3 \u5468\u4e00\u4e2a\u5c0f\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"ansible-core \u53d1\u5e03\u540e\u4f1a\u53d1\u5e03\u5927\u7248\u672c - \u4e00\u822c 6 \u4e2a\u6708")))))),(0,r.kt)("h2",{id:"ansible-base-210"},"ansible-base 2.10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u975e base \u6a21\u5757\u5212\u5206\u4e3a\u5c0f\u7684 collection\uff0c\u7531 galaxy \u5206\u53d1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"collection \u80fd\u591f\u5305\u542b\u51e0\u4e4e\u6240\u6709\u7684 ansible \u6269\u5c55\u70b9 - roles, plugins, modules, playbooks"),(0,r.kt)("li",{parentName:"ul"},"\u66ff\u4ee3\u4e4b\u524d galaxy \u7684 role \u5206\u53d1\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"ansible-base 3 MB \u5b89\u88c5\u540e 14 MB"),(0,r.kt)("li",{parentName:"ul"},"ansible 44 MB \u5b89\u88c5\u540e 334 MB"))),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/2.10/collections/index.html"},"collection")," \u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e ansible-base \u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ansible/ansible/blob/stable-2.10/changelogs/CHANGELOG-v2.10.rst"},"CHANGELOG-v2.10")),(0,r.kt)("li",{parentName:"ul"},"unvault - \u65b0\u589e lookup \u63d2\u4ef6 - \u8bfb\u53d6\u52a0\u5bc6\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 hash_behaviour"),(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u652f\u6301 Windows Server 2008"),(0,r.kt)("li",{parentName:"ul"},"fact \u5305\u542b ansible_processor_nproc")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5c1a\u4e14\u65e0\u6cd5\u6267\u884c collection \u4e2d\u7684 playbooks - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ansible/ansible/pull/67435"},"#67435")))),(0,r.kt)("h2",{id:"29"},"2.9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u547d\u4ee4\u884c\u8865\u5168")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53c2\u6570\u8865\u5168\npython -m pip install argcomplete\n\n# \u542f\u7528\u8865\u5168\nactivate-global-python-argcomplete\n# \u6216\neval $(register-python-argcomplete ansible)\neval $(register-python-argcomplete ansible-config)\neval $(register-python-argcomplete ansible-console)\neval $(register-python-argcomplete ansible-doc)\neval $(register-python-argcomplete ansible-galaxy)\neval $(register-python-argcomplete ansible-inventory)\neval $(register-python-argcomplete ansible-playbook)\neval $(register-python-argcomplete ansible-pull)\neval $(register-python-argcomplete ansible-vault)\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return c}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||b[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);