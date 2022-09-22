"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39979],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(59496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),o=p(n),s=l,N=o["".concat(u,".").concat(s)]||o[s]||k[s]||r;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=o;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=t,m.mdxType="string"==typeof t?t:l,i[1]=m;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},31304:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var a=n(96600),l=n(27279),r=(n(59496),n(49613)),i=["components"],m={title:"limits"},u="LIMIT",p={unversionedId:"os/linux/sys/limits",id:"os/linux/sys/limits",title:"limits",description:"- /etc/security/limits.conf - \u5168\u5c40\u914d\u7f6e",source:"@site/../notes/os/linux/sys/limits.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/limits",permalink:"/notes/os/linux/sys/limits",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/sys/limits.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"limits"},sidebar:"docs",previous:{title:"Linux Kernel",permalink:"/notes/os/linux/sys/kernel"},next:{title:"LSM",permalink:"/notes/os/linux/sys/lsm"}},d={},k=[{value:"limits.conf",id:"limitsconf",level:2}],o={toc:k};function s(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"limit"},"LIMIT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/etc/security/limits.conf - \u5168\u5c40\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"/etc/security/limits.d/ - \u901a\u5e38\u7528\u4e8e\u914d\u7f6e\u5355\u4e2a\u8fdb\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.man7.org/linux/man-pages/man5/limits.conf.5.html"},"limits.conf.5"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"limits \u9488\u5bf9\u6bcf\u4e2a\u8fdb\u7a0b\u751f\u6548 - \u8fdb\u7a0b\u53ef\u4fee\u6539 soft \u503c\uff0c\u4f46\u5c0f\u4e8e hard \u503c"),(0,r.kt)("li",{parentName:"ul"},"open files \u9ed8\u8ba4 1024/4096 - \u5bf9\u4e8e\u670d\u52a1\u7aef\u5e94\u7528\u6765\u8bf4\u592a\u5c0f\u4e86"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5176\u4ed6\u8fdb\u7a0b\u7684 limits\ncat /proc/1/limits\n\n# \u4fee\u6539\u5176\u4ed6\u7ebf\u7a0b\nprlimit --pid $(pidof prometheus) --nofile=65535:65535\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"conf/item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"unit"),(0,r.kt)("th",{parentName:"tr",align:null},"flag"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"flavor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"real-time non-blocking time"),(0,r.kt)("td",{parentName:"tr",align:null},"microseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"-R"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"core file size"),(0,r.kt)("td",{parentName:"tr",align:null},"blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"-c"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"data seg size"),(0,r.kt)("td",{parentName:"tr",align:null},"kbytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-d"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nice"),(0,r.kt)("td",{parentName:"tr",align:null},"scheduling priority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-e"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fsize"),(0,r.kt)("td",{parentName:"tr",align:null},"file size"),(0,r.kt)("td",{parentName:"tr",align:null},"blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"-f"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sigpending"),(0,r.kt)("td",{parentName:"tr",align:null},"pending signals"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-i"),(0,r.kt)("td",{parentName:"tr",align:null},"63510"),(0,r.kt)("td",{parentName:"tr",align:null},"linux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memlock"),(0,r.kt)("td",{parentName:"tr",align:null},"max locked memory"),(0,r.kt)("td",{parentName:"tr",align:null},"kbytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-l"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"max memory size"),(0,r.kt)("td",{parentName:"tr",align:null},"kbytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-m"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nofile"),(0,r.kt)("td",{parentName:"tr",align:null},"open files"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-n"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"pipe size"),(0,r.kt)("td",{parentName:"tr",align:null},"512 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-p"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgqueue"),(0,r.kt)("td",{parentName:"tr",align:null},"POSIX message queues"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-q"),(0,r.kt)("td",{parentName:"tr",align:null},"819200"),(0,r.kt)("td",{parentName:"tr",align:null},"linux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rtprio"),(0,r.kt)("td",{parentName:"tr",align:null},"real-time priority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-r"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"linux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stack"),(0,r.kt)("td",{parentName:"tr",align:null},"stack size"),(0,r.kt)("td",{parentName:"tr",align:null},"kbytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-s"),(0,r.kt)("td",{parentName:"tr",align:null},"8192"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"cpu time"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"-t"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nproc"),(0,r.kt)("td",{parentName:"tr",align:null},"max user processes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-u"),(0,r.kt)("td",{parentName:"tr",align:null},"63510"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"virtual memory"),(0,r.kt)("td",{parentName:"tr",align:null},"kbytes"),(0,r.kt)("td",{parentName:"tr",align:null},"-v"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locks"),(0,r.kt)("td",{parentName:"tr",align:null},"file locks"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x"),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null},"linux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxlogins"),(0,r.kt)("td",{parentName:"tr",align:null},"logins for user"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxsyslogins"),(0,r.kt)("td",{parentName:"tr",align:null},"all logins on system"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rss"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"linux < 2.4.30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"as"),(0,r.kt)("td",{parentName:"tr",align:null},"address space limit"),(0,r.kt)("td",{parentName:"tr",align:null},"kbytes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/proc/1/limits")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Limit                     Soft Limit           Hard Limit           Units\nMax cpu time              unlimited            unlimited            seconds\nMax file size             unlimited            unlimited            bytes\nMax data size             unlimited            unlimited            bytes\nMax stack size            8388608              unlimited            bytes\nMax core file size        0                    unlimited            bytes\nMax resident set          unlimited            unlimited            bytes\nMax processes             30464                30464                processes\nMax open files            1024                 4096                 files\nMax locked memory         65536                65536                bytes\nMax address space         unlimited            unlimited            bytes\nMax file locks            unlimited            unlimited            locks\nMax pending signals       30464                30464                signals\nMax msgqueue size         819200               819200               bytes\nMax nice priority         0                    0\nMax realtime priority     0                    0\nMax realtime timeout      unlimited            unlimited            us\n")),(0,r.kt)("h2",{id:"limitsconf"},"limits.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<domain><type><item><value>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="limits.conf"',title:'"limits.conf"'},"*               soft    core            0\n*               hard    nofile          512\n@student        hard    nproc           20\n@faculty        soft    nproc           20\n@faculty        hard    nproc           50\nftp             hard    nproc           0\n@student        -       maxlogins       4\n:123            hard    cpu             5000\n@500:           soft    cpu             10000\n600:700         hard    locks           10\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"domain",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"username"),(0,r.kt)("li",{parentName:"ul"},"@group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," - \u9ed8\u8ba4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%")," - maxlogins"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<min_uid>:<max_uid>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@<min_gid>:<max_gid>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%:<gid>")))),(0,r.kt)("li",{parentName:"ul"},"type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hard"),(0,r.kt)("li",{parentName:"ul"},"soft"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," - soft+hard"))),(0,r.kt)("li",{parentName:"ul"},"value",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"-1, unlimited, infinity - \u65e0\u9650\u5236")))))}s.isMDXComponent=!0}}]);