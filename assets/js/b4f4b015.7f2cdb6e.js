"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39394],{6485:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var s=t(96600),r=t(27279),a=(t(59496),t(3905)),o=["components"],p={title:"Swap"},i=void 0,c={unversionedId:"os/linux/sys/swap",id:"os/linux/sys/swap",title:"Swap",description:"Linux \u4e2d\u7684\u4ea4\u6362\u6587\u4ef6\u79f0\u4e3a  swappiness,swappiness \u7684\u503c\u4e3a\u5f53\u5185\u5b58\u8fbe\u5230\u67d0\u4e2a\u767e\u5206\u6bd4\u65f6\u4f1a\u8fdb\u884c\u4ea4\u6362. 0 \u4e3a\u4e0d\u4f7f\u7528\u4ea4\u6362, 10 \u4e3a \u5f53\u5185\u5b58\u8fbe\u5230 90% \u540e\u4f1a\u4f7f\u7528\u4ea4\u6362.",source:"@site/notes/os/linux/sys/swap.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/swap",permalink:"/notes/os/linux/sys/swap",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/swap.md",tags:[],version:"current",frontMatter:{title:"Swap"},sidebar:"docs",previous:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"},next:{title:"sysctl",permalink:"/notes/os/linux/sys/sysctl"}},l={},u=[{value:"\u6dfb\u52a0 swap",id:"\u6dfb\u52a0-swap",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],w={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Linux \u4e2d\u7684\u4ea4\u6362\u6587\u4ef6\u79f0\u4e3a  ",(0,a.kt)("inlineCode",{parentName:"p"},"swappiness"),",swappiness \u7684\u503c\u4e3a\u5f53\u5185\u5b58\u8fbe\u5230\u67d0\u4e2a\u767e\u5206\u6bd4\u65f6\u4f1a\u8fdb\u884c\u4ea4\u6362. 0 \u4e3a\u4e0d\u4f7f\u7528\u4ea4\u6362, 10 \u4e3a \u5f53\u5185\u5b58\u8fbe\u5230 90% \u540e\u4f1a\u4f7f\u7528\u4ea4\u6362."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be5\u503c\u4fee\u6539\u540e\u9700\u8981\u91cd\u542f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux\n# \u53ef\u76f4\u63a5\u4fee\u6539 /etc/sysctl.conf \u4e2d\u7684\u503c,\u4e4b\u540e\u9700\u8981 sysctl -p \u52a0\u8f7d\u65b0\u7684\u914d\u7f6e\n# \u5728\u7cfb\u7edf\u8fd0\u884c\u65f6\u4fee\u6539\u4ea4\u6362\n# \u9ed8\u8ba4 60\n# \u5f53\u5185\u5b58\u8fd8\u6709\u591a\u5c11\u7a7a\u95f2\u65f6\u4f7f\u7528\u4ea4\u6362\u533a - 10 \u5219\u65f6\u5f53\u5185\u5b58\u8fd8\u6709 10% \u7a7a\u95f2 - \u5373\u5df2\u7ecf\u4f7f\u7528 90% \u7684\u65f6\u5019\u6fc0\u6d3b\u4ea4\u6362\nsysctl vm.swappiness=10\n\n# \u6e05\u9664\u6240\u6709\u4ea4\u6362\nswapoff -a\n# \u542f\u7528\u6240\u6709\u4ea4\u6362.\nswapon -a\n# \u67e5\u770b\u4ea4\u6362\u533a\u7684\u4f7f\u7528\ncat /proc/meminfo\nfree\ntop\n# \u67e5\u770b\u54ea\u4e9b\u8bbe\u5907\u4f5c\u4e3a\u4ea4\u6362\ncat /proc/swaps\n# \u5f53\u524d\u865a\u62df\u5185\u5b58\u7684\u4f7f\u7528\u7edf\u8ba1\nvmstat\n\n# \u67e5\u770b\u5f53\u524d swap\ncat /proc/swaps\n# \u67e5\u770b swap \u8bbe\u5907\u548c\u5927\u5c0f\nswapon -s\n# \u865a\u62df\u5185\u5b58\u7edf\u8ba1\nvmstat\n\n# macOS\n# \u67e5\u770b\u865a\u62df\u5185\u5b58\u4f7f\u7528\u91cf\u5373\u4ea4\u6362\u533a\nvm_stat\n# \u67e5\u770b\u4f7f\u7528\u7684\u4ea4\u6362\u6587\u4ef6\nls -lh /private/var/vm/swapfile*\n\n# AlpineLinux\n# \u81ea\u52a8\u8bbe\u7f6e\u53c2\u6570\necho vm.swappiness=10 > /etc/sysctl.d/swap.conf\n# \u53ef\u4ee5\u91cd\u65b0\u52a0\u8f7d\n/etc/init.d/sysctl rstart\n# \u5f00\u673a\u6302\u8f7d swap\nrc-update add swap\n")),(0,a.kt)("h2",{id:"\u6dfb\u52a0-swap"},"\u6dfb\u52a0 swap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# 4G \u4ea4\u6362\u533a\n# dd if=/dev/zero of=/sysswap count=512 bs=8MiB status=progress\nfallocate -l 4G /sysswap\n\nchmod 600 /sysswap\nmkswap /sysswap\nswapon /sysswap\n# \u5c06 swap \u6dfb\u52a0\u5230 fstab\necho /sysswap   swap    swap    sw  0   0 >> /etc/fstab\n\nsysctl vm.swappiness=10\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7"},"How to add swap on CentOS 7"))))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return w}});var s=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=s.createContext({}),c=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),w=c(t),f=r,m=w["".concat(i,".").concat(f)]||w[f]||l[f]||a;return t?s.createElement(m,o(o({ref:n},u),{},{components:t})):s.createElement(m,o({ref:n},u))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);