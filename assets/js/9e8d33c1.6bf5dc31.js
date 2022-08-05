"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41809],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(n),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},83865:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={title:"Cloud Init"},u="cloud-init",p={unversionedId:"ops/infra/cloud-init",id:"ops/infra/cloud-init",title:"Cloud Init",description:"- cloud-init.io / cloud-init",source:"@site/notes/ops/infra/cloud-init.md",sourceDirName:"ops/infra",slug:"/ops/infra/cloud-init",permalink:"/notes/ops/infra/cloud-init",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/cloud-init.md",tags:[],version:"current",frontMatter:{title:"Cloud Init"},sidebar:"docs",previous:{title:"Boundary",permalink:"/notes/ops/infra/boundary"},next:{title:"Nomad",permalink:"/notes/ops/infra/nomad"}},c={},m=[],s={toc:m};function d(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloud-init"},"cloud-init"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud-init.io/"},"cloud-init.io")," / ",(0,a.kt)("a",{parentName:"li",href:"https://launchpad.net/cloud-init/"},"cloud-init"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apply user data to your instances automatically"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://cloudinit.readthedocs.io/en/latest/index.html"},"Document")),(0,a.kt)("li",{parentName:"ul"},"GitHub mirror ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cloud-init/cloud-init"},"cloud-init/cloud-init")))),(0,a.kt)("li",{parentName:"ul"},"AlpineLinux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages?name=cloud-init&branch=edge"},"cloud-init")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git.alpinelinux.org/cgit/aports/tree/testing/cloud-init/APKBUILD"},"testing/cloud-init/APKBUILD")))),(0,a.kt)("li",{parentName:"ul"},"Ubuntu",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/CloudInit"},"CloudInit")))),(0,a.kt)("li",{parentName:"ul"},"ArchLinux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Cloud-init"},"Cloud-init")))),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u81ea\u5b9a\u4e49 locale"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e hostname"),(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210 SSH \u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e34\u65f6\u6302\u8f7d\u70b9"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"terraform-provider-libvirt ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dmacvicar/terraform-provider-libvirt/blob/master/website/docs/r/cloudinit.html.markdown"},"libvirt_cloudinit_disk")),(0,a.kt)("li",{parentName:"ul"},"Ansible ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/modules/cloud_init_data_facts_module.html"},"cloud_init_data_facts_module"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6 cloud init \u914d\u7f6e\u4fe1\u606f")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# < 3.13\n# ifupdown-ng\napk add ifupdown-ng iproute2-minimal -X https://mirrors.aliyun.com/alpine/edge/main/\napk add cloud-init -X https://mirrors.aliyun.com/alpine/edge/community/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/syntaqx/9dd3ff11fb3d48b032c84f3e31af9163"},"cloud init to install docker on ubuntu"))))}d.isMDXComponent=!0}}]);