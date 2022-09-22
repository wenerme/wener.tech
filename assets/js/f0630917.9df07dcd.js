"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41920],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(n),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71413:function(t,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return k}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&c(t,n,e[n]);return t};const s={title:"Cloud Init"},d="cloud-init",f={unversionedId:"ops/infra/cloud-init",id:"ops/infra/cloud-init",title:"Cloud Init",description:"- cloud-init.io / cloud-init",source:"@site/../notes/ops/infra/cloud-init.md",sourceDirName:"ops/infra",slug:"/ops/infra/cloud-init",permalink:"/notes/ops/infra/cloud-init",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/infra/cloud-init.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"Cloud Init"},sidebar:"docs",previous:{title:"Boundary",permalink:"/notes/ops/infra/boundary"},next:{title:"Nomad",permalink:"/notes/ops/infra/nomad"}},b={},k=[],h={toc:k};function y(t){var e,n=t,{components:i}=n,c=((t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},h),c),a(e,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"cloud-init"}),"cloud-init"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://cloud-init.io/"}),"cloud-init.io")," / ",(0,r.kt)("a",m({parentName:"li"},{href:"https://launchpad.net/cloud-init/"}),"cloud-init"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apply user data to your instances automatically"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://cloudinit.readthedocs.io/en/latest/index.html"}),"Document")),(0,r.kt)("li",{parentName:"ul"},"GitHub mirror ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/cloud-init/cloud-init"}),"cloud-init/cloud-init")))),(0,r.kt)("li",{parentName:"ul"},"AlpineLinux",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/packages?name=cloud-init&branch=edge"}),"cloud-init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://git.alpinelinux.org/cgit/aports/tree/testing/cloud-init/APKBUILD"}),"testing/cloud-init/APKBUILD")))),(0,r.kt)("li",{parentName:"ul"},"Ubuntu",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://help.ubuntu.com/community/CloudInit"}),"CloudInit")))),(0,r.kt)("li",{parentName:"ul"},"ArchLinux",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Cloud-init"}),"Cloud-init")))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u81ea\u5b9a\u4e49 locale"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e hostname"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210 SSH \u5bc6\u94a5"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e34\u65f6\u6302\u8f7d\u70b9"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"terraform-provider-libvirt ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/dmacvicar/terraform-provider-libvirt/blob/master/website/docs/r/cloudinit.html.markdown"}),"libvirt_cloudinit_disk")),(0,r.kt)("li",{parentName:"ul"},"Ansible ",(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/modules/cloud_init_data_facts_module.html"}),"cloud_init_data_facts_module"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6 cloud init \u914d\u7f6e\u4fe1\u606f")))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# < 3.13\n# ifupdown-ng\napk add ifupdown-ng iproute2-minimal -X https://mirrors.aliyun.com/alpine/edge/main/\napk add cloud-init -X https://mirrors.aliyun.com/alpine/edge/community/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://gist.github.com/syntaqx/9dd3ff11fb3d48b032c84f3e31af9163"}),"cloud init to install docker on ubuntu"))))}y.isMDXComponent=!0}}]);