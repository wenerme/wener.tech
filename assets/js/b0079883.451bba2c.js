"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2005],{93023:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return o}});var l=a(96600),n=a(27279),r=(a(59496),a(3905)),i=["components"],s={title:"musl"},u=void 0,p={unversionedId:"os/linux/lib/musl",id:"os/linux/lib/musl",title:"musl",description:"- malloc \u5927\u573a\u666f\u6027\u80fd\u5f31 - \u6027\u80fd\u8981\u6c42\u9ad8\u7684\u573a\u666f\u4f7f\u7528 jemalloc \u6216 mimaloc",source:"@site/notes/os/linux/lib/musl.md",sourceDirName:"os/linux/lib",slug:"/os/linux/lib/musl",permalink:"/notes/os/linux/lib/musl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/lib/musl.md",tags:[],version:"current",frontMatter:{title:"musl"},sidebar:"docs",previous:{title:"malloc",permalink:"/notes/os/linux/lib/malloc"},next:{title:"Linux Awesome",permalink:"/notes/os/linux/linux-awesome"}},m={},o=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"DNS \u95ee\u9898",id:"dns-\u95ee\u9898",level:2},{value:"musl issues",id:"musl-issues",level:2},{value:"malloc performance",id:"malloc-performance",level:2}],k={toc:o};function N(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"malloc \u5927\u573a\u666f\u6027\u80fd\u5f31 - \u6027\u80fd\u8981\u6c42\u9ad8\u7684\u573a\u666f\u4f7f\u7528 jemalloc \u6216 mimaloc"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 utmp/wtmp - last,who,users \u547d\u4ee4\u90e8\u5206\u529f\u80fd\u4e0d\u53ef\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\u8003\u8651\u3001\u9690\u79c1\u8003\u8651"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0 suid/sgid \u4fee\u6539 \u8bb0\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/faq.html"},"https://wiki.musl-libc.org/faq.html")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://musl.libc.org/"},"musl")," - MIT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.musl-libc.org/faq.html"},"FAQ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/functional-differences-from-glibc.html"},"\u4e0e glibc \u7684\u4e0d\u540c\u70b9"))),(0,r.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Env"),(0,r.kt)("th",{parentName:"tr",align:null},"Used by"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"execvp, execlp, posix_spawnp"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TZ"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stdoffset[dst[offset][,start[/time],end[/time]]")," \u6216 \u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATEMSK"),(0,r.kt)("td",{parentName:"tr",align:null},"getdate"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PWD"),(0,r.kt)("td",{parentName:"tr",align:null},"get_current_dir_name, getcwd"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOGNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"getlogin"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LD_PRELOAD"),(0,r.kt)("td",{parentName:"tr",align:null},"setuid, setgid \u5ffd\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},"dl \u9884\u52a0\u8f7d\u52a8\u6001\u5e93\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LD_LIBRARY_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"setuid, setgid \u5ffd\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u5e93\u641c\u7d22\u76ee\u5f55\u5217\u8868")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TZ \u641c\u7d22\u76ee\u5f55",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/usr/share/zoneinfo"),(0,r.kt)("li",{parentName:"ul"},"/share/zoneinfo"),(0,r.kt)("li",{parentName:"ul"},"/etc/zoneinfo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/environment-variables.html"},"Environment Variables"))),(0,r.kt)("h2",{id:"dns-\u95ee\u9898"},"DNS \u95ee\u9898"),(0,r.kt)("p",null,"resolv \u4e0d\u652f\u6301 dns over tcp/edns, \u56e0\u6b64\u4e00\u6b21 resolve \u6700\u591a\u8fd4\u56de \u4e00\u4e2a\u5305\uff0c512 bytes\uff0c\u6709\u65f6\u5019\u89e3\u6790\u4f1a\u56e0\u6b64\u51fa\u73b0\u95ee\u9898\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/issues/9734"},"alpine/aports#9734")," - DNS resolver patch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AAAA \u4e0d\u8bc6\u522b NotImp \u5bfc\u81f4\u7b49\u5f85\u8d85\u65f6"))),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u540c\u65f6\u53d1\u8d77 A \u548c AAAA \u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"glibc's DNS resolver only generates AAAA queries if it can create an IPv6 socket."),(0,r.kt)("li",{parentName:"ul"},"5s \u8d85\u65f6\u91cd\u8bd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options single-request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options timeout:1")))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave/issues/3287"},"weaveworks/weave#3287")," DNS lookup timeouts due to races in conntrack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gliderlabs/docker-alpine/issues/255"},"gliderlabs/docker-alpine#255")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/56903#issuecomment-462252499"},"kubernetes/kubernetes#56903")," - DNS intermittent delays of 5s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/techmindtickle/e9de8239e2fa"},"Intermittent delays in Kubernetes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"resolve.conf \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"options single-request-reopen")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dzone.com/articles/racy-conntrack-and-dns-lookup-timeouts"},"Racy conntrack and DNS Lookup Timeouts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a A \u548c AAAA \u901a\u8fc7\u540c\u4e00\u4e2a\u7aef\u53e3\u53d1\u8d77\u8bf7\u6c42\u5bfc\u81f4\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"disable parallel lookups, disable IPv6 to avoid AAAA lookups, use TCP for lookups"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.openwall.com/lists/musl/2018/03/30/4"},"resolver: only exit the search path loop there are a positive number of results give")," - DNS \u670d\u52a1\u5f02\u5e38\u5bfc\u81f4 musl \u884c\u4e3a\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.openwall.com/lists/musl/2017/10/04/6"},"DNS resolution happenning only after timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a AAAA \u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u6cd5\u7981\u6b62"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/632665"},"How to disable AAAA lookups?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6ca1\u6709\u597d\u7684\u65b9\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.math.tamu.edu/~comech/tools/linux-slow-dns-lookup/"},"Linux slow dns lookup (delay = 5 seconds)")),(0,r.kt)("li",{parentName:"ul"},"dnsmasq \u4e5f\u6ca1\u6709\u76f4\u63a5\u9488\u5bf9 aaaa \u8fd4\u56de nx \u7684\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2005q2/000229.html"},'Is there a way to "block" IPv6 address queries?')),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u51cf\u5c11 DNS \u5916\u90e8\u67e5\u8be2\u4ee5\u8fbe\u5230\u7c7b\u4f3c\u76ee\u7684"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cache-size=65535")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"min-cache-ttl=300")," \u589e\u52a0\u7f13\u5b58"))),(0,r.kt)("li",{parentName:"ul"},"iptables \u7981\u7528 aaaa \u8bb0\u5f55\u67e5\u8be2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oskar456/xt_dns"},"oskar456/xt_dns")," \u6a21\u5757\u53ef\u4ee5\u5b9e\u73b0 dns \u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.v2ex.com/t/242793"},"https://www.v2ex.com/t/242793")))),(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u53d1\u5904\u7406 AAAA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/shawn1m/overture"},"shawn1m/overture")," - \u652f\u6301 reject qtype - \u4f46\u662f\u8fd4\u56de ServFail"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u8fd4\u56de NXDOMAIN ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave/issues/2244"},"weaveworks/weave#2244"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u76d1\u63a7 DNS \u8bf7\u6c42\ntcpdump -ni eth0 port 53\n\n# \u5b8c\u6574\u67e5\u8be2\u5185\u5bb9\u4f8b\u5982 |03|www|07|example|03|com\n# \u4f7f\u7528 match-set \u7981\u7528 AAAA\niptables -N AAAA\n# iptables -I FORWARD 1 -p udp -s 192.168.0.0/16 --dport 53 -j AAAA\niptables -I OUTPUT 1 -p udp --dport 53 -j AAAA\n# drop \u4f1a\u5bfc\u81f4\u8d85\u65f6 - \u6700\u597d\u662f\u8fd4\u56de NXDATA \u6216\u8005 NXDOMAIN\niptables -A AAAA -m string --algo bm --from 40 --hex-string '|001c|' -j DROP\n")),(0,r.kt)("h2",{id:"musl-issues"},"musl issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/open-issues.html"},"Open Issues"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 LC_TIME"),(0,r.kt)("li",{parentName:"ul"},"\u65e0 ucontext.h - obsolescent in POSIX.1-2001",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pubs.opengroup.org/onlinepubs/009695399/functions/makecontext.html#tag_03_356_08"},"makecontext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gluster/glusterfs/issues/268"},"glusterfs#268"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"glusterfs \u4e0d\u652f\u6301 musl"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openssl/openssl/issues/7406"},"openssl#7406"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 no-async \u7ed5\u8fc7"))))))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 nsswitch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pikhq/musl-nscd"},"pikhq/musl-nscd")))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 res_uinit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"asterisk \u65e0\u6cd5\u83b7\u53d6 nameserver"))),(0,r.kt)("li",{parentName:"ul"},"\u65e0 fts"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8f6f\u4ef6\u517c\u5bb9\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Golang runtime: c-shared builds fail with musllibc\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/13492"},"golang/go#13492"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u83b7\u53d6 argc, argv - \u57fa\u4e8e glibc \u6269\u5c55"),(0,r.kt)("li",{parentName:"ul"},"\u5bfc\u81f4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FluentBit \u63d2\u4ef6\u4e0d\u652f\u6301 AlpineLinux"))))),(0,r.kt)("li",{parentName:"ul"},"libasan \u4e0d\u652f\u6301 musl\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/sanitizers/issues/1080"},"google/sanitizers#1080")),(0,r.kt)("li",{parentName:"ul"},"glusterfs \u4e0d\u652f\u6301 musl ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gluster/glusterfs/issues/268"},"glusterfs#268")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/bugs-found-by-musl.html"},"bugs-found-by-musl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8f6f\u4ef6\u5df2\u77e5\u56e0\u4e3a musl \u5bfc\u81f4\u7684 bug")))),(0,r.kt)("h2",{id:"malloc-performance"},"malloc performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"musl 1.2.1 \u542f\u7528\u4e86\u91cd\u5199\u7684 malloc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2020-06"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://andygrove.io/2020/05/why-musl-extremely-slow/"},"https://andygrove.io/2020/05/why-musl-extremely-slow/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pythonspeed.com/articles/alpine-docker-python/"},"https://pythonspeed.com/articles/alpine-docker-python/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/"},"https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/"))))))}N.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{kt:function(){return k}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},o=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=p(a),N=n,c=k["".concat(u,".").concat(N)]||k[N]||m[N]||r;return a?l.createElement(c,i(i({ref:t},o),{},{components:a})):l.createElement(c,i({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=o;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);