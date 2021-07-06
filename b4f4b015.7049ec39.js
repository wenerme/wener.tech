(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),l=function(e){var n=s.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return s.a.createElement(i.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,b=u["".concat(o,".").concat(m)]||u[m]||w[m]||a;return t?s.a.createElement(b,p(p({ref:n},i),{},{components:t})):s.a.createElement(b,p({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<a;i++)o[i]=t[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},832:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),s=t(8),a=(t(0),t(1114)),o={title:"Swap"},p={unversionedId:"os/linux/sys/swap",id:"os/linux/sys/swap",isDocsHomePage:!1,title:"Swap",description:"Linux \u4e2d\u7684\u4ea4\u6362\u6587\u4ef6\u79f0\u4e3a  swappiness,swappiness \u7684\u503c\u4e3a\u5f53\u5185\u5b58\u8fbe\u5230\u67d0\u4e2a\u767e\u5206\u6bd4\u65f6\u4f1a\u8fdb\u884c\u4ea4\u6362. 0 \u4e3a\u4e0d\u4f7f\u7528\u4ea4\u6362, 10 \u4e3a \u5f53\u5185\u5b58\u8fbe\u5230 90% \u540e\u4f1a\u4f7f\u7528\u4ea4\u6362.",source:"@site/notes/os/linux/sys/swap.md",slug:"/os/linux/sys/swap",permalink:"/notes/os/linux/sys/swap",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/swap.md",version:"current",sidebar:"docs",previous:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"},next:{title:"\u865a\u62df\u5316",permalink:"/notes/os/virt/virt"}},c=[{value:"\u6dfb\u52a0 swap",id:"\u6dfb\u52a0-swap",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],i={toc:c};function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Linux \u4e2d\u7684\u4ea4\u6362\u6587\u4ef6\u79f0\u4e3a  ",Object(a.b)("inlineCode",{parentName:"p"},"swappiness"),",swappiness \u7684\u503c\u4e3a\u5f53\u5185\u5b58\u8fbe\u5230\u67d0\u4e2a\u767e\u5206\u6bd4\u65f6\u4f1a\u8fdb\u884c\u4ea4\u6362. 0 \u4e3a\u4e0d\u4f7f\u7528\u4ea4\u6362, 10 \u4e3a \u5f53\u5185\u5b58\u8fbe\u5230 90% \u540e\u4f1a\u4f7f\u7528\u4ea4\u6362."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8be5\u503c\u4fee\u6539\u540e\u9700\u8981\u91cd\u542f")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# Linux\n# \u53ef\u76f4\u63a5\u4fee\u6539 /etc/sysctl.conf \u4e2d\u7684\u503c,\u4e4b\u540e\u9700\u8981 sysctl -p \u52a0\u8f7d\u65b0\u7684\u914d\u7f6e\n# \u5728\u7cfb\u7edf\u8fd0\u884c\u65f6\u4fee\u6539\u4ea4\u6362\n# \u9ed8\u8ba4 60\n# \u5f53\u5185\u5b58\u8fd8\u6709\u591a\u5c11\u7a7a\u95f2\u65f6\u4f7f\u7528\u4ea4\u6362\u533a - 10 \u5219\u65f6\u5f53\u5185\u5b58\u8fd8\u6709 10% \u7a7a\u95f2 - \u5373\u5df2\u7ecf\u4f7f\u7528 90% \u7684\u65f6\u5019\u6fc0\u6d3b\u4ea4\u6362\nsysctl vm.swappiness=10\n\n# \u6e05\u9664\u6240\u6709\u4ea4\u6362\nswapoff -a\n# \u542f\u7528\u6240\u6709\u4ea4\u6362.\nswapon -a\n# \u67e5\u770b\u4ea4\u6362\u533a\u7684\u4f7f\u7528\ncat /proc/meminfo\nfree\ntop\n# \u67e5\u770b\u54ea\u4e9b\u8bbe\u5907\u4f5c\u4e3a\u4ea4\u6362\ncat /proc/swaps\n# \u5f53\u524d\u865a\u62df\u5185\u5b58\u7684\u4f7f\u7528\u7edf\u8ba1\nvmstat\n\n# \u67e5\u770b\u5f53\u524d swap\ncat /proc/swaps\n# \u67e5\u770b swap \u8bbe\u5907\u548c\u5927\u5c0f\nswapon -s\n# \u865a\u62df\u5185\u5b58\u7edf\u8ba1\nvmstat\n\n# macOS\n# \u67e5\u770b\u865a\u62df\u5185\u5b58\u4f7f\u7528\u91cf\u5373\u4ea4\u6362\u533a\nvm_stat\n# \u67e5\u770b\u4f7f\u7528\u7684\u4ea4\u6362\u6587\u4ef6\nls -lh /private/var/vm/swapfile*\n\n# AlpineLinux\n# \u81ea\u52a8\u8bbe\u7f6e\u53c2\u6570\necho vm.swappiness=10 > /etc/sysctl.d/swap.conf\n# \u53ef\u4ee5\u91cd\u65b0\u52a0\u8f7d\n/etc/init.d/sysctl rstart\n# \u5f00\u673a\u6302\u8f7d swap\nrc-update add swap\n")),Object(a.b)("h2",{id:"\u6dfb\u52a0-swap"},"\u6dfb\u52a0 swap"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# 4G \u4ea4\u6362\u533a\n# dd if=/dev/zero of=/sysswap count=512 bs=8MiB status=progress\nfallocate -l 4G /sysswap\n\nchmod 600 /sysswap\nmkswap /sysswap\nswapon /sysswap\n# \u5c06 swap \u6dfb\u52a0\u5230 fstab\necho /sysswap   swap    swap    sw  0   0 >> /etc/fstab\n\nsysctl vm.swappiness=10\n")),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7"},"How to add swap on CentOS 7"))))}l.isMDXComponent=!0}}]);