"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40726],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37668:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&u(e,t,n[t]);return e};const d={slug:"ubuntu-new-server",title:"Ubuntu \u65b0\u670d\u52a1\u5668\u914d\u7f6e"},m="Ubuntu \u65b0\u670d\u52a1\u5668\u914d\u7f6e",f={permalink:"/story/ubuntu-new-server",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2016/2016-09-28-ubuntu-new-server.md",source:"@site/../story/2016/2016-09-28-ubuntu-new-server.md",title:"Ubuntu \u65b0\u670d\u52a1\u5668\u914d\u7f6e",description:"* How I spend my first 5 minutes on a server",date:"2016-09-28T00:00:00.000Z",formattedDate:"September 28, 2016",tags:[],readingTime:2.54,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"ubuntu-new-server",title:"Ubuntu \u65b0\u670d\u52a1\u5668\u914d\u7f6e"},prevItem:{title:"\u8fdb\u51fb\u7684\u7a0b\u5e8f\u733f",permalink:"/story/attack-on-programmer"},nextItem:{title:"\u5206\u5e03\u5f0f\u67b6\u6784\u624b\u8bb0",permalink:"/story/learning-dist-arch"}},h={authorsImageUrls:[]},v=[{value:"Tips",id:"tips",level:2},{value:"mosh-dev",id:"mosh-dev",level:3},{value:"fail2ban",id:"fail2ban",level:2},{value:"env",id:"env",level:2},{value:"ipv6",id:"ipv6",level:2}],y={toc:v};function b(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=c(c({},y),u),o(n,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u4fee\u6539\u4e3b\u673a\u540d\nhostnamectl set-hostname myHostName\n# \u5982\u679c\u60f3\u8981\u76f4\u63a5\u4f7f\u7528\u4e3b\u673a\u540d,\u8fd8\u9700\u8981\u5728 /etc/hosts \u91cc\u6dfb\u52a0\u76f8\u5173\u8bb0\u5f55\n# nano /etc/hostname\n# nano /etc/hosts\n\n# \u751f\u6210\u4e2d\u6587\nlocale-gen zh_CN.UTF-8\n# \u57fa\u672c\u66f4\u65b0\napt-get update\napt-get upgrade\n\n# \u51fa\u73b0 The following packages have been kept back \u53ef\u8003\u8651 apt dist-upgrade \u6216 install\n# \u5f53 /etc/apt/sources.list* \u6709\u5176\u4ed6\u4ed3\u5e93\u65f6\u4f7f\u7528 dist-upgrade \u76f8\u5bf9\u6ca1\u90a3\u4e48\u5b89\u5168\n\n# \u4fee\u6539\u5bc6\u7801\npasswd\n\n\n# \u521b\u5efa\u7528\u4e8e\u90e8\u7f72\u7684\u7528\u6237\nuseradd deploy\nmkdir /home/deploy\nmkdir /home/deploy/.ssh\nchmod 700 /home/deploy/.ssh\n# \u5c06\u9700\u8981\u4f7f\u7528\u8be5\u7528\u6237\u7684\u516c\u94a5\u6dfb\u52a0\u8fdb\u53bb\nvim /home/deploy/.ssh/authorized_keys\n\nchmod 400 /home/deploy/.ssh/authorized_keys\nchown deploy:deploy /home/deploy -R\n\n# \u7f16\u8f91 sudoers\nvisudo\n# \u5c06\u9700\u8981 sudo \u7684\u7528\u6237\u6dfb\u52a0\u8fdb\u53bb\n# deploy  ALL=(ALL) ALL\n\n# \u4fee\u6539 sshd \u6743\u9650\nvim /etc/ssh/sshd_config\n# PermitRootLogin no # \u4e0d\u5141\u8bb8\u76f4\u63a5 root \u767b\u9646\n# PasswordAuthentication no # \u4e0d\u5141\u8bb8\u5bc6\u7801\u767b\u9646\n# AllowUsers deploy@(your-ip) deploy@(another-ip-if-any) # \u53ea\u5141\u8bb8\u6307\u5b9a\u5730\u5740\u7684\u4eba\u767b\u9646\n# service ssh restart\n\n# \u9632\u706b\u5899\u8bbe\u7f6e\n# DNS 53\n# mosh allow 60000:61000/udp \u6216 allow mosh\nufw allow 22\nufw allow 80\nufw allow 443\nufw default deny\nufw enable\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://news.ycombinator.com/item?id=5316093"}),"How I spend my first 5 minutes on a server ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.upguard.com/blog/10-essential-steps-for-configuring-a-new-server"}),"10 Essential Steps for Configuring a New Server"))),(0,r.kt)("h2",c({},{id:"tips"}),"Tips"),(0,r.kt)("p",null,"\u5f53\u6709\u591a\u53f0\u4e3b\u673a\u9700\u8981\u90e8\u7f72\u7684\u65f6\u5019,\u5efa\u8bae\u4f7f\u7528 sshrc, tmuxrc, \u8fd9\u6837\u80fd\u5feb\u901f\u7684\u5c06\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5e26\u7ed9\u670d\u52a1\u5668,\u80fd\u591f\u5feb\u901f\u65b9\u4fbf\u7684\u5bf9\u591a\u53f0\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72."),(0,r.kt)("h3",c({},{id:"mosh-dev"}),"mosh-dev"),(0,r.kt)("p",null,"\u7531\u4e8e mosh \u90e8\u5206\u9f20\u6807\u76f8\u5173\u7684\u529f\u80fd\u9700\u8981\u6700\u65b0\u7248,\u6240\u4ee5\u5efa\u8bae\u76f4\u63a5\u5b89\u88c5 dev \u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apt-get install -y software-properties-common\nadd-apt-repository ppa:keithw/mosh-dev\napt-get update\napt install -y mosh\n")),(0,r.kt)("h2",c({},{id:"fail2ban"}),"fail2ban"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apt-get install fail2ban\ncp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local\n# bantime = 3600 # ban 1 \u5c0f\u65f6\n# destemail = admin@admin # \u53d1\u9001\u8b66\u544a\u7684\u90ae\u7bb1\u5730\u5740\n# \u5c06 ssh/ssh-ddos \u7b49\u6bb5\u843d\u4e0b\u7684 enable \u8bbe\u7f6e\u4e3a true \u6253\u5f00\u76f8\u5e94\u7684 filter\n")),(0,r.kt)("h2",c({},{id:"env"}),"env"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apt-get install software-properties-common\n# \u6dfb\u52a0 Oracle Java \u4ed3\u5e93\nadd-apt-repository ppa:webupd8team/java#\napt-get update\n# \u5b89\u88c5 Oracle Java 8 JDK\napt-get install oracle-java8-installer\n# \u5982\u679c\u6709\u591a\u4e2a Java \u73af\u5883\u53ef\u8c03\u6574\u914d\u7f6e\nupdate-alternatives --config java\n")),(0,r.kt)("h2",c({},{id:"ipv6"}),"ipv6"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# https://jiandanxinli.github.io/2016-08-06.html\n\n# /etc/sysctl.conf\n# net.ipv6.conf.all.disable_ipv6=0\n# net.ipv6.conf.default.disable_ipv6=0\n# net.ipv6.conf.lo.disable_ipv6=0\nsysctl -p\n\n# https://www.tunnelbroker.net/\n# \u9009\u62e9 linux route2, \u7136\u540e\u6267\u884c\u811a\u672c\n\n# \u68c0\u6d4b ipv6 \u662f\u5426\u53ef\u7528\n# http://ready.chair6.net/?url=wener.me\n\n# \u5982\u679c\u64cd\u4f5c\u5931\u8d25\u4e86\u5219\u5220\u9664\u901a\u9053\u4ece\u6765\nip tun del he-ipv6\n")))}b.isMDXComponent=!0}}]);