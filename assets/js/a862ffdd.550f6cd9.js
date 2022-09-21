"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90480],{50673:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=t(96600),a=t(27279),i=(t(59496),t(3905)),l=["components"],s={title:"Ansible Windows",tags:["Windows"]},o=void 0,u={unversionedId:"ops/infra/ansible/ansible-windows",id:"ops/infra/ansible/ansible-windows",title:"Ansible Windows",description:"- \u53ef\u7ba1\u7406\u5bf9\u8c61",source:"@site/notes/ops/infra/ansible/ansible-windows.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/ansible-windows",permalink:"/notes/ops/infra/ansible/ansible-windows",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible/ansible-windows.md",tags:[{label:"Windows",permalink:"/notes/tags/windows"}],version:"current",frontMatter:{title:"Ansible Windows",tags:["Windows"]},sidebar:"docs",previous:{title:"Ansible Version",permalink:"/notes/ops/infra/ansible/ansible-version"},next:{title:"Boundary",permalink:"/notes/ops/infra/boundary"}},p={},c=[{value:"Setup",id:"setup",level:2},{value:"Max retries exceeded with url",id:"max-retries-exceeded-with-url",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u7ba1\u7406\u5bf9\u8c61",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5ba1\u8ba1\u7b56\u7565\u3001\u89c4\u5219"),(0,i.kt)("li",{parentName:"ul"},"\u8bc1\u4e66"),(0,i.kt)("li",{parentName:"ul"},"chocolatey - \u5305"),(0,i.kt)("li",{parentName:"ul"},"domain - \u57df"),(0,i.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"Windows \u7279\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u9632\u706b\u5899"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u3001\u7fa4\u7ec4"),(0,i.kt)("li",{parentName:"ul"},"IIS"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6620\u5c04\u9a71\u52a8"),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5305"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u65f6\u4efb\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5168\u7b56\u7565"),(0,i.kt)("li",{parentName:"ul"},"\u5171\u4eab"),(0,i.kt)("li",{parentName:"ul"},"SNMP \u670d\u52a1"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html"},"Setting up a Windows Host")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ansible/ansible/blob/devel/examples/scripts/ConfigureRemotingForAnsible.ps1"},"ConfigureRemotingForAnsible.ps1")),(0,i.kt)("li",{parentName:"ul"},"ansible ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/windows_winrm.html"},"winrm")),(0,i.kt)("li",{parentName:"ul"},"Ansible 2.9 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/2.9/modules/list_of_windows_modules.html"},"Windows modules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/ansible/windows/index.html"},"Windows collection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ansible-collections/ansible.windows"},"ansible-collections/ansible.windows"))))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"winrm get winrm/config\nwinrm enumerate winrm/config/Listener\nwinrm get winrm/config/Service\nwinrm get winrm/config/Winrs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"win:\n  ansible_host: 192.168.1.2\n  ansible_user: LocalUsername\n  ansible_password: Password\n  ansible_connection: winrm\n  # ansible_winrm_transport: basic\n  ansible_winrm_transport: ntlm\n")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html"},"https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ps"},'# Remove all listeners\nRemove-Item -Path WSMan:\\localhost\\Listener\\* -Recurse -Force\n\n# Only remove listeners that are run over HTTPS\nGet-ChildItem -Path WSMan:\\localhost\\Listener | Where-Object { $_.Keys -contains "Transport=HTTPS" } | Remove-Item -Recurse -Force\n')),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"max-retries-exceeded-with-url"},"Max retries exceeded with url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"basic: HTTPSConnectionPool(host='192.168.1.1', port=5986): Max retries exceeded with url: /wsman (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x10d353940>: Failed to establish a new connection: [Errno 61] Connection refused')\n")))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);