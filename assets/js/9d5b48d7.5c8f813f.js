"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36100],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var l=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=p(a),k=r,c=h["".concat(u,".").concat(k)]||h[k]||s[k]||n;return a?l.createElement(c,i(i({ref:t},m),{},{components:a})):l.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5814:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var l=a(96600),r=a(27279),n=(a(59496),a(49613)),i=["components"],o={title:"Shell Awesome",tags:["Awesome"]},u=void 0,p={unversionedId:"os/linux/shell/shell-awesome",id:"os/linux/shell/shell-awesome",title:"Shell Awesome",description:"- bash - Bourne shell",source:"@site/notes/os/linux/shell/shell-awesome.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/shell-awesome",permalink:"/notes/os/linux/shell/shell-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/shell/shell-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Shell Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"sed",permalink:"/notes/os/linux/shell/sed"},next:{title:"Shell FAQ",permalink:"/notes/os/linux/shell/shell-faq"}},m={},s=[{value:"Shell",id:"shell",level:2},{value:"Share",id:"share",level:2},{value:"Network",id:"network",level:2},{value:"Utils",id:"utils",level:2},{value:"Editor",id:"editor",level:2},{value:"root",id:"root",level:2}],h={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"bash - Bourne shell"),(0,n.kt)("li",{parentName:"ul"},"ash - Almquist shell - 1989 NetBSD"),(0,n.kt)("li",{parentName:"ul"},"Dash - bin \u8fd8\u662f\u53eb ash - Debian Almquist shell - 1997 Debian Linux",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Debian,Ubuntu /bin/sh"),(0,n.kt)("li",{parentName:"ul"},"BusyBox, AlpineLinux, TinyCoreLinux, OpenWrt, Tomato, DD-WRT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://git.kernel.org/pub/scm/utils/dash/dash.git"},"https://git.kernel.org/pub/scm/utils/dash/dash.git")),(0,n.kt)("li",{parentName:"ul"},"macOS ",(0,n.kt)("inlineCode",{parentName:"li"},"brew install dash")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6d4b\u8bd5 shell \u517c\u5bb9\u6027"))),(0,n.kt)("li",{parentName:"ul"},"zsh"),(0,n.kt)("li",{parentName:"ul"},"Terminal UI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kitty"),(0,n.kt)("li",{parentName:"ul"},"hyper"),(0,n.kt)("li",{parentName:"ul"},"Tabby"),(0,n.kt)("li",{parentName:"ul"},"iTerm2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/withfig/autocomplete"},"withfig/autocomplete")),(0,n.kt)("li",{parentName:"ul"},"for bash, zsh, fish"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_command_shells"},"Comparison of command shells")),(0,n.kt)("li",{parentName:"ul"},"Online",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://replit.com/languages/bash"},"https://replit.com/languages/bash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.onlinegdb.com/online_bash_shell"},"https://www.onlinegdb.com/online_bash_shell"))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ibraheemdev/modern-Unix"},"ibraheemdev/modern-Unix")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://explainshell.com/"},"explainshell")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shellinabox/shellinabox"},"shellinabox/shellinabox")),(0,n.kt)("li",{parentName:"ul"},"awk",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Awk: The Power and Promise of a 40-Year-Old Language ",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28441887"},"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/benhoyt/prig"},"benhoyt/prig"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Prig is for Processing Records In Go. Like AWK"))))),(0,n.kt)("li",{parentName:"ul"},"temporary privilege escalation tool",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sudo-project/sudo"},"sudo")),(0,n.kt)("li",{parentName:"ul"},"doas",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenBSD 5.8 - 2015-10"),(0,n.kt)("li",{parentName:"ul"},"AlpineLinux 3.15 - 2021-11"))),(0,n.kt)("li",{parentName:"ul"},"runas"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bats-core/bats-core"},"bats-core/bats-core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bash Automated Testing System")))),(0,n.kt)("h2",{id:"shell"},"Shell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/warpdotdev/Warp"},"warpdotdev/Warp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rust based GPU-accelerated termina"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/janmojzis/tinyssh"},"janmojzis/tinyssh"))),(0,n.kt)("h2",{id:"share"},"Share"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tmate-io/tmate"},"tmate-io/tmate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"web terminal"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/owenthereal/upterm"},"owenthereal/upterm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elisescu/tty-share"},"elisescu/tty-share")),(0,n.kt)("li",{parentName:"ul"},"Foundation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tsl0922/ttyd"},"tsl0922/ttyd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/butlerx/wetty"},"butlerx/wetty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yudai/gotty"},"yudai/gotty"))))),(0,n.kt)("h2",{id:"network"},"Network"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"curl"),(0,n.kt)("li",{parentName:"ul"},"httpie"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rs/curlie"},"rs/curlie"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u66f4\u53cb\u597d\uff0c\u5b9e\u9645\u8c03\u7528 curl")))),(0,n.kt)("h2",{id:"utils"},"Utils"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/muesli/duf"},"muesli/duf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a better df"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wader/fq"},"wader/fq"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jq for binary formats"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/junegunn/fzf"},"junegunn/fzf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"fuzzy finder"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"BurntSushi/ripgrep"))),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"nano"),(0,n.kt)("li",{parentName:"ul"},"vim"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zyedidia/micro"},"zyedidia/micro")),(0,n.kt)("li",{parentName:"ul"},"joe")),(0,n.kt)("h2",{id:"root"},"root"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/proot-me/proot"},"proot-me/proot"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"user-space implementation of chroot, mount --bind, binfmt_misc")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# bind\n# -R \u81ea\u52a8\u7ed1\u5b9a\n# -0 ROOT\n# -q qemu-arm\n# -q "qemu-arm -g 1234"\nproot -b /tmp/alternate_opt:/opt -b /proc\n')))}k.isMDXComponent=!0}}]);