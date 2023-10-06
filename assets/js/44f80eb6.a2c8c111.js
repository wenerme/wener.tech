"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66136],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,g=u["".concat(l,".").concat(h)]||u[h]||f[h]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2150:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return g},metadata:function(){return d},toc:function(){return y}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&p(e,t,n[t]);return e},f=(e,n)=>o(e,s(n)),h=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const g={title:"ssh config",tags:["Configuration"]},m=void 0,d={unversionedId:"os/linux/shell/ssh/ssh-config",id:"os/linux/shell/ssh/ssh-config",title:"ssh config",description:"ssh config",source:"@site/../notes/os/linux/shell/ssh/ssh-config.md",sourceDirName:"os/linux/shell/ssh",slug:"/os/linux/shell/ssh/config",permalink:"/notes/os/linux/shell/ssh/config",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/ssh/ssh-config.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693804740,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{title:"ssh config",tags:["Configuration"]},sidebar:"docs",previous:{title:"ssh-agent",permalink:"/notes/os/linux/shell/ssh/agent"},next:{title:"SSH FAQ",permalink:"/notes/os/linux/shell/ssh/faq"}},b={},y=[{value:"ssh config",id:"ssh-config",level:2},{value:"Match \u672c\u5730\u5730\u5740",id:"match-\u672c\u5730\u5730\u5740",level:2}],k={toc:y},v="wrapper";function O(e){var n=e,{components:t}=n,a=h(n,["components"]);return(0,r.kt)(v,f(u(u({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",u({},{id:"ssh-config"}),"ssh config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237 ~/.ssh/config"),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf /etc/ssh/ssh_config"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/ssh_config.5.html"}),"ssh_config.5"))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\nssh -F /path/to/configfile\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Include",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6 - \u652f\u6301 glob \u548c ~ \u5c55\u5f00")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u7f51\u5173\u670d\u52a1\u5668\nHost my-gate\nUser root\nHostname 1.2.3.4\n\n# \u901a\u8fc7 my-gate \u94fe\u63a5 1.2.3.100\n# busybox \u7684 nc \u6ca1\u6709 -q, \u9700\u8981\nHost my-gate-110\nUser root\nProxyCommand ssh -q qc-sh-1 nc -q0 1.2.3.100 22\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host/Match \u533a\u5206\u6bb5\u843d")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini",metastring:'title="\u901a\u914d Host"',title:'"\u901a\u914d','Host"':!0}),"# \u4e3a\u5339\u914d\u7684 Host \u6307\u5b9a\u9ed8\u8ba4 User\nHost 10.10.*\n    User root\n# \u53ef\u4ee5 \u6392\u9664\nHost !10.10.10.*\n    User admin\n\n# \u8bbe\u7f6e\u6240\u6709\u9ed8\u8ba4\u53c2\u6570\nHost *\n    UseKeychain yes\n    AddKeysToAgent yes\n    IdentityFile ~/.ssh/id_rsa\n    User admin\n    ExitOnForwardFailure yes\n\n# \u76f4\u5230\u4e0b\u4e00\u4e2a Host/Match\nMatch\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Match",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"canonical, final, exec, host, originalhost, user, localuser, all")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u914d Host \u9700\u8981\u653e\u5728\u540e\u9762")),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",u({},{id:"match-\u672c\u5730\u5730\u5740"}),"Match \u672c\u5730\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# macOS\n# grep -v \u53d6\u53cd\nifconfig | grep 'inet ' | grep -Fv 127.0.0.1 | awk '{print $2}' | grep -qF 192.168.0.\n# Linux\nhostname -I | grep -qF 10.10.11.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ssh_config"}),"Match exec \"ifconfig | grep 'inet ' | grep -Fv 127.0.0.1 | awk '{print $2}' | grep -vqF 192.168.0\"\n  # IP is not 192.168.0.*\n  Include ~/.ssh/not-at-home\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"onsubnet")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'#!/usr/bin/env bash\n\nif [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]] || [[ "$1" == "" ]]; then\n  printf "Usage:\\n\\tonsubnet [ --not ] partial-ip-address\\n\\n"\n  printf "Example:\\n\\tonsubnet 10.10.\\n\\tonsubnet --not 192.168.0.\\n\\n"\n  printf "Note:\\n\\tThe partial-ip-address must match starting at the first\\n"\n  printf "\\tcharacter of the ip-address, therefore the first example\\n"\n  printf "\\tabove will match 10.10.10.1 but not 110.10.10.1\\n"\n  exit 0\nfi\n\non=0\noff=1\nif [[ "$1" == "--not" ]]; then\n  shift\n  on=1\n  off=0\nfi\n\nregexp="^$(sed \'s/\\./\\\\./g\' <<< "$1")"\n\nif [[ "$(uname)" == "Darwin" ]]; then\n  ifconfig | grep -F \'inet \' | grep -Fv 127.0.0. | cut -d \' \' -f 2 | grep -Eq "$regexp"\nelse\n  hostname -I | tr -s " " "\\012" | grep -Fv 127.0.0. | grep -Eq "$regexp"\nfi\n\nif [[ $? == 0 ]]; then\n  exit $on\nelse\n  exit $off\nfi\n')))}O.isMDXComponent=!0}}]);