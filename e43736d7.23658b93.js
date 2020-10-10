(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{560:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var c=t(2),a=t(9),r=(t(0),t(618)),i={id:"tinc-get-started",title:"\u5982\u4f55\u90e8\u7f72 TINC \u7f51\u7edc\uff1f",date:new Date("2019-12-08T00:00:00.000Z")},l={id:"howto/network/tinc-get-started",title:"\u5982\u4f55\u90e8\u7f72 TINC \u7f51\u7edc\uff1f",description:"## \u573a\u666f",source:"@site/../tricks/howto/network/tinc-get-started.md",permalink:"/notes/howto/network/tinc-get-started",sidebar:"docs",previous:{title:"\u5982\u4f55\u907f\u514d DNS \u6c61\u67d3\u4e14\u80fd\u6b63\u5e38\u8bbf\u95ee\u56fd\u5185\u57df\u540d\uff1f",permalink:"/notes/howto/network/dns-prevent-spoofing"},next:{title:"\u5982\u4f55\u914d\u7f6e TINC \u5b9e\u73b0\u591a\u8def\u5bb9\u707e\uff1f",permalink:"/notes/howto/network/tinc-multi-path-failover"}},b=[{value:"\u573a\u666f",id:"\u573a\u666f",children:[{value:"\u4e91\u4e0a\u4e91\u4e0b\u7f51\u7edc\u4e92\u901a",id:"\u4e91\u4e0a\u4e91\u4e0b\u7f51\u7edc\u4e92\u901a",children:[]},{value:"\u672c\u5730\u7f51\u7edc\u7a7f\u900f\u5230\u5916\u7f51\u4ee5\u63d0\u4f9b\u670d\u52a1",id:"\u672c\u5730\u7f51\u7edc\u7a7f\u900f\u5230\u5916\u7f51\u4ee5\u63d0\u4f9b\u670d\u52a1",children:[]}]},{value:"\u7ad9\u70b9\u5bf9\u7ad9\u70b9\u79c1\u6709\u7f51\u7edc",id:"\u7ad9\u70b9\u5bf9\u7ad9\u70b9\u79c1\u6709\u7f51\u7edc",children:[{value:"\u508d\u8def\u7531",id:"\u508d\u8def\u7531",children:[]},{value:"\u52a0\u5bc6\u901a\u4fe1",id:"\u52a0\u5bc6\u901a\u4fe1",children:[]}]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[{value:"Docker \u90e8\u7f72 Tinc",id:"docker-\u90e8\u7f72-tinc",children:[]},{value:"AlpineLinux \u90e8\u7f72 Tinc",id:"alpinelinux-\u90e8\u7f72-tinc",children:[]},{value:"Ansible \u90e8\u7f72 Tinc",id:"ansible-\u90e8\u7f72-tinc",children:[]}]}],o={rightToc:b};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),Object(r.b)("h3",{id:"\u4e91\u4e0a\u4e91\u4e0b\u7f51\u7edc\u4e92\u901a"},"\u4e91\u4e0a\u4e91\u4e0b\u7f51\u7edc\u4e92\u901a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u672c\u5730\u76f4\u63a5\u8bbf\u95ee\u4e91\u4e0a\u73af\u5883\uff0c\u4e91\u4e0a\u80fd\u76f4\u63a5\u8bbf\u95ee\u672c\u5730\u673a\u623f\u8d44\u6e90")),Object(r.b)("h3",{id:"\u672c\u5730\u7f51\u7edc\u7a7f\u900f\u5230\u5916\u7f51\u4ee5\u63d0\u4f9b\u670d\u52a1"},"\u672c\u5730\u7f51\u7edc\u7a7f\u900f\u5230\u5916\u7f51\u4ee5\u63d0\u4f9b\u670d\u52a1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u963f\u91cc\u4e91\u4e0a\u8d2d\u4e70\u4e00\u4e2a\u5ec9\u4ef7\u7684 ECS - \u5b9e\u9645\u8ba1\u7b97\u5b58\u50a8\u8d44\u6e90\u4f7f\u7528\u672c\u5730\u673a\u623f - \u901a\u8fc7\u7f51\u7edc\u7a7f\u900f\u63d0\u4f9b\u670d\u52a1")),Object(r.b)("p",null,Object(r.b)("img",Object(c.a)({parentName:"p"},{src:"https://www.plantuml.com/plantuml/svg/VP5FIyCm6CRl_HIXNZlgTCW6RHchgtZnehUnGxTchX2QaEJW7uIA23gGETX5h0TFJjX1Jy9q-cMMLB-5gSN9O0WzbF0ylz_x9bN6VSe3pBKWtAS-wO8jSAn5E80DrlK9j5lum63y446x4o840wED4QOsftx4Y4zXn9jQNcmmWi88CXjJtiK6o20C4hlOrBGs2bMoWVmMHBOb9iDqE5AVl7XnZ8oRG_MLMcspxjLqrI2AugFVncmoaCcLwDsBcv5PTtUj5ZKTguCZ3WWE8rvWuH6qzUAQxiZaKfoFq-b094_YBlv9olZXysmgtfujC-iuYrAtNDzmAvaKuVQVKoPZXPXh_r6AtaZ6fqjyawK-p_CgRacVNmieE21VD_jRc060ygfPAgqxAfmVwNlREoueWFJnuolkgpNJrqJshsVlj_cakdQYLM4KP4_w3G00",alt:"ServiceTunnel"}))),Object(r.b)("h2",{id:"\u7ad9\u70b9\u5bf9\u7ad9\u70b9\u79c1\u6709\u7f51\u7edc"},"\u7ad9\u70b9\u5bf9\u7ad9\u70b9\u79c1\u6709\u7f51\u7edc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Site to Site VPN / \u591a\u7ad9\u70b9\u4e92\u901a")),Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u516c\u53f8\u6709\u4e24\u4e2a\u5730\u5740\uff0c\u5e0c\u671b\u4e24\u4e2a\u5730\u5740\u7684\u7f51\u7edc\u4e92\u901a")),Object(r.b)("p",null,Object(r.b)("img",Object(c.a)({parentName:"p"},{src:"https://www.plantuml.com/plantuml/svg/RT31IiGm40RWUvuYr6kskorITc5JrjPL1F4WtagHn4GR34r9Sb144C63tiIRB3w11wyYFaujleK9hQ2mSnncllcPXR54MwOiOE9CawQ2k_0Ar8hnmbIauPYg2sJifUJuL4Z96JfHKcbiDQbDGpIlRGdwnS8qKjJSOALjfH3qYE4DZX1qm-TCQBn_M080ZB3yc1IIK2xnl7ruQUzUszLRT_k-DQTwd4QpE8oIQHY5at6ycI9_kByQR6JPzd8d2yeUeUkGx1yIhq7owJB9PmuPei1H2WVFfwJALgY70-ZgbveuAafynwyE0qTx1paSmRy1ki_7xcFrTV_qVVCSW6kmu3Lp7_u1",alt:"SiteToSite"}))),Object(r.b)("h3",{id:"\u508d\u8def\u7531"},"\u508d\u8def\u7531"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4e0d\u7ba1\u5728\u54ea\u91cc\uff0c\u53ea\u8981\u8054\u7f51\u5c31\u80fd\u7ba1\u7406\u7f51\u7edc"),Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"IoT \u573a\u666f - \u53ea\u8981\u7f51\u7edc\u63a5\u5165\u5c31\u80fd\u8fdb\u884c\u6570\u636e\u901a\u4fe1"),Object(r.b)("li",{parentName:"ul"},"\u5bb6\u5ead\u7f51\u7edc - \u4efb\u4f55\u5730\u65b9\u90fd\u80fd\u76f4\u63a5\u8bbf\u95ee\u5bb6\u91cc\u7684 NAS")))),Object(r.b)("h3",{id:"\u52a0\u5bc6\u901a\u4fe1"},"\u52a0\u5bc6\u901a\u4fe1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u901a\u9053\u901a\u4fe1\u90fd\u662f\u52a0\u5bc6\u7684"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 HTTP \u6216\u8005\u4e0d\u5b89\u5168\u7684\u7f51\u7edc\uff0c\u4e14\u4e0d\u7528\u62c5\u5fc3\u88ab\u5916\u90e8\u653b\u51fb")),Object(r.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3\u4e3a 655"),Object(r.b)("li",{parentName:"ul"},"Tinc \u5de5\u4f5c\u5728\u7528\u6237\u7a7a\u95f4 - \u4f7f\u7528 tun/tap \u8bbe\u5907"),Object(r.b)("li",{parentName:"ul"},"Tinc \u4ee5 mesh \u7684\u5f62\u5f0f\u8fdb\u884c\u5de5\u4f5c ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u5bf9\u6bcf\u4e2a\u8282\u70b9\u90fd\u8fdb\u884c\u76f4\u63a5\u94fe\u63a5"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u94fe\u63a5\u5931\u8d25\u4f1a\u901a\u8fc7\u8282\u70b9\u8fdb\u884c\u4e2d\u4e13"))),Object(r.b)("li",{parentName:"ul"},"Tinc \u652f\u6301 Route \u6216 Switch \u5de5\u4f5c\u6a21\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 Route"),Object(r.b)("li",{parentName:"ul"},"\u5206\u522b\u5de5\u4f5c\u5728 3 \u5c42\u548c 2 \u5c42"),Object(r.b)("li",{parentName:"ul"},"Switch \u6a21\u5f0f\u6027\u80fd\u6bd4 Route \u6027\u80fd\u5dee\u4e00\u70b9"))),Object(r.b)("li",{parentName:"ul"},"\u5355\u7ebf\u7a0b\u5de5\u4f5c - \u6027\u80fd\u53d7\u9650\u4e8e\u5355\u6838\u5fc3 CPU \u80fd\u529b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u66fe\u6d4b\u8bd5 1.8 GHz 1\u6838 \u80fd\u505a\u5230 300M \u7684\u8f6c\u53d1\u5cf0\u503c"))),Object(r.b)("li",{parentName:"ul"},"Tinc \u7684\u901a\u4fe1\u9ed8\u8ba4\u90fd\u662f ",Object(r.b)("strong",{parentName:"li"},"\u52a0\u5bc6")," \u7684"),Object(r.b)("li",{parentName:"ul"},"CIA Hacking Tools Revealed \u5305\u542b TINC")),Object(r.b)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u6d41\u7a0b",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u7f51\u7edc"),Object(r.b)("li",{parentName:"ol"},"\u914d\u7f6e\u4e3b\u8282\u70b9 - \u8bbe\u7f6e\u8bbf\u95ee IP"),Object(r.b)("li",{parentName:"ol"},"\u9080\u8bf7\u4ece\u8282\u70b9"),Object(r.b)("li",{parentName:"ol"},"\u4ece\u8282\u70b9\u52a0\u5165"),Object(r.b)("li",{parentName:"ol"},"\u914d\u7f6e\u5730\u5740 - \u8bbe\u7f6e tinc \u7684\u5730\u5740")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u6ce8\u610f"),Object(r.b)("p",{parentName:"blockquote"},"\u7531\u4e8e tinc-pre 1.17 \u5728 AlpineLinux 3.10 \u4e0a\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u672a\u901a\u8fc7\uff0c\u56e0\u6b64\u5b98\u65b9\u4ed3\u5e93\u6ca1\u6709\u3002\u4e0b\u9762\u4f7f\u7528 ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/wenerme/repository"}),"wenerme/repository")," \u4ed3\u5e93\u4e2d\u7684 tinc-pre 1.16 \u8fdb\u884c\u90e8\u7f72\u3002")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1\u63d0\u793a "),Object(r.b)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u914d\u7f6e\u4e3a Switch \u6a21\u5f0f\uff0c\u53ea\u9700\u8981\u5728\u6700\u5f00\u59cb\u8282\u70b9\u7684 tinc.conf \u91cc\u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"p"},"Mode=Switch")," \u5373\u53ef")),Object(r.b)("h3",{id:"docker-\u90e8\u7f72-tinc"},"Docker \u90e8\u7f72 Tinc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"mynet - \u7f51\u7edc 10.0.0.0/24",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"mynet \u4e3b\u8282\u70b9 10.0.0.1"),Object(r.b)("li",{parentName:"ul"},"node_1 \u4ece\u8282\u70b9 10.0.0.2")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u901a\u8fc7 Docker \u6765\u5feb\u901f\u4f53\u9a8c tinc \u7684\u80fd\u529b\u719f\u6089\u76f8\u5173\u64cd\u4f5c")),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u6d4b\u8bd5\u7528\u7684\u7f51\u7edc - \u6d4b\u8bd5\u5b8c\u6210\u5373\u53ef\u5220\u9664 - \u81ea\u5b9a\u4e49\u7684\u7f51\u7edc\u624d\u80fd\u4f7f\u7528\u9759\u6001 IP\ndocker network create --subnet 172.18.0.0/24 tinc\n\n# \u542f\u52a8\u4e3b\u8282\u70b9 - \u4f7f\u7528\u56fa\u5b9a IP - \u56e0\u4e3a\u5176\u5b83\u8282\u70b9\u9700\u8981\u8bbf\u95ee\n# \u56e0\u4e3a\u9700\u8981\u521b\u5efa\u7f51\u7edc\u6240\u4ee5\u9700\u8981 NET_ADMIN \u6743\u9650\ndocker run --rm -it -v $PWD/mynet:/etc/tinc/mynet \\\n  --network tinc --ip 172.18.0.100 \\\n  --cap-add NET_ADMIN --device /dev/net/tun \\\n  --name mynet wener/tinc sh\n\n# \u521d\u59cb\u5316\u8282\u70b9\ntinc -n mynet init mynet\n\n# \u914d\u7f6e\u542f\u52a8\u811a\u672c\u8bbe\u7f6e IP\ncat <<'EOF' > /etc/tinc/mynet/tinc-up\n#!/bin/sh\nifconfig $INTERFACE 10.0.0.1 netmask 255.255.255.0\nEOF\n\n# \u914d\u7f6e\u8be5\u8282\u70b9\u7684\u4fe1\u606f\n# Address \u53ea\u6709\u4e3b\u8981\u7684\u4e2d\u7ee7\u8282\u70b9\u624d\u9700\u8981 - \u7528\u4e8e\u751f\u6210\u9080\u8bf7\u5730\u5740\n# - \u8fd9\u91cc\u4f7f\u7528 docker \u5206\u914d\u7684 ip\n# - \u5b9e\u9645\u4f7f\u7528\u65f6\u4f7f\u7528\u5916\u7f51 ip\n# - \u5982\u679c\u6620\u5c04\u4e86 docker \u7684 655 655/udp \u90a3\u4e48\u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4f7f\u7528\u5916\u7f51\u5730\u5740\ncat <<EOF >> /etc/tinc/mynet/hosts/mynet\nPort=655\nSubnet=10.0.0.1/32\nAddress=172.18.0.100\nEOF\n\n# \u524d\u53f0\u542f\u52a8\u8be5\u8282\u70b9 - \u65b9\u4fbf\u89c2\u5bdf\u65e5\u5fd7\ntinc -n mynet start -Dd 5\n")),Object(r.b)("p",null,"\u5728\u4e3b\u673a\u4e0a\u7684\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd\u751f\u6210\u9080\u8bf7\u5730\u5740"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it mynet tinc -n mynet invite node_1\n")),Object(r.b)("p",null,"\u62ff\u5230\u9080\u8bf7\u5730\u5740\u540e\u542f\u52a8\u53e6\u5916\u4e00\u4e2a\u8282\u70b9\u8fdb\u884c\u94fe\u63a5"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -v $PWD/node_1:/etc/tinc/mynet \\\n  --network tinc \\\n  --cap-add NET_ADMIN --device /dev/net/tun \\\n  --name node_1 wener/tinc sh\n\n# \u52a0\u5165\u521a\u624d\u7684\u8981\u6c42\u5730\u5740\ntinc join <\u9080\u8bf7\u5730\u5740>\n\n# \u914d\u7f6e\u5730\u5740\ncat <<'EOF' > /etc/tinc/mynet/tinc-up\n#!/bin/sh\nifconfig $INTERFACE 10.0.0.2 netmask 255.255.255.0\nEOF\n\n# Port 0 \u8868\u793a\u968f\u673a\u9009\u62e9 - \u4e0d\u4f7f\u7528\u56fa\u5b9a\u7aef\u53e3\u907f\u514d\u88ab\u68c0\u6d4b\ncat <<EOF >> /etc/tinc/mynet/hosts/node_1\nPort=0\nSubnet=10.0.0.2/32\nEOF\n\n# \u914d\u7f6e\u5b8c\u6210\u540e\u540e\u53f0\u542f\u52a8\ntinc -n mynet start\n# \u67e5\u770b tinc \u7f51\u5361 - \u56e0\u4e3a\u662f 3 \u5c42 - \u6240\u4ee5\u6ca1\u6709 mac \u5730\u5740\nifconfig mynet\n# mynet     Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00\n#           inet addr:10.0.0.2  P-t-P:10.0.0.2  Mask:255.255.255.0\n#           UP POINTOPOINT RUNNING NOARP MULTICAST  MTU:1500  Metric:1\n#           RX packets:2 errors:0 dropped:0 overruns:0 frame:0\n#           TX packets:2 errors:0 dropped:0 overruns:0 carrier:0\n#           collisions:0 txqueuelen:500\n#           RX bytes:168 (168.0 B)  TX bytes:168 (168.0 B)\n\n# \u6b64\u65f6\u5df2\u7ecf\u80fd\u8bbf\u95ee\u53e6\u5916\u4e00\u4e2a\u8282\u70b9\nping 10.0.0.1\n\n# \u9000\u51fa\u5173\u95ed\u5bb9\u5668\nexit\n")),Object(r.b)("p",null,"\u56e0\u4e3a\u5c06\u914d\u7f6e\u6620\u5c04\u5230\u4e86\u672c\u5730\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u542f\u52a8"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -v $PWD/node_1:/etc/tinc/mynet \\\n  --network tinc \\\n  --cap-add NET_ADMIN --device /dev/net/tun \\\n  --name node_1 wener/tinc tinc -n mynet start -Dd 2\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1\n\u5728\u5b9e\u9645\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u65f6\u4fee\u6539 ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/conf.d/tinc.networks"),", \u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"p"},"NETWORK: mynet")," \u7136\u540e ",Object(r.b)("inlineCode",{parentName:"p"},"service tincd start")," \u5373\u53ef")),Object(r.b)("h3",{id:"alpinelinux-\u90e8\u7f72-tinc"},"AlpineLinux \u90e8\u7f72 Tinc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u751f\u4ea7\u6216\u5b9e\u9645\u673a\u5668\u4e0a\u53ef\u4f7f\u7528 alpine \u81ea\u884c\u914d\u7f6e"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u670d\u52a1\u8fdb\u884c\u542f\u52a8\u7ba1\u63a7"),Object(r.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5c06\u7f51\u5361\u66b4\u9732\u7ed9\u7cfb\u7edf - \u65b9\u4fbf\u4f7f\u7528")),Object(r.b)("h4",{id:"\u4e3b\u8282\u70b9\u914d\u7f6e"},"\u4e3b\u8282\u70b9\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"# \u4ee5\u4e0b\u547d\u4ee4\u9700\u8981 root \u7528\u6237\u64cd\u4f5c\nsudo su\n\n# \u6dfb\u52a0\u4ed3\u5e93\n(cd /etc/apk/keys; curl -LO https://repo.wener.me/alpine/wenermail@gmail.com-5dc8c7cd.rsa.pub )\necho https://repo.wener.me/alpine/v3.10/community | tee -a /etc/apk/repositories\n# \u5b89\u88c5\napk add --no-cache tinc-pre\n\n# \u521d\u59cb\u5316\ntinc -n mynet init mynet\n\n# \u914d\u7f6e\u542f\u52a8\u811a\u672c\u8bbe\u7f6e IP\ncat <<'EOF' > /etc/tinc/mynet/tinc-up\n#!/bin/sh\nifconfig $INTERFACE 10.0.0.1 netmask 255.255.255.0\nEOF\n\n# \u914d\u7f6e\u8be5\u8282\u70b9\u7684\u4fe1\u606f\n# \ud83d\udca1\u8fd9\u91cc\u914d\u7f6e\u7684 Address \u662f\u5916\u7f51\u5730\u5740\ncat <<EOF >> /etc/tinc/mynet/hosts/mynet\nPort=655\nSubnet=10.0.0.1/32\nAddress=$(curl -s icanhazip.com)\nEOF\n\n# \u52a0\u8f7d\u6a21\u5757\nmodprobe tun\necho tun  >> /etc/modules-load.d/tinc.conf\n\n# \u914d\u7f6e\u8981\u542f\u52a8\u7684\u7f51\u7edc\necho 'NETWORK: mynet' >> /etc/conf.d/tinc.networks\n\n# \u542f\u52a8\u670d\u52a1\nservice start tincd\n# \u5f00\u673a\u542f\u52a8\nrc-update add tincd\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u914d\u7f6e\u5b8c\u6210\u540e\u751f\u6210\u9080\u8bf7\u94fe\u63a5")),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"# \u4fdd\u7559\u597d\u94fe\u63a5\ntinc -n mynet invite node_1\n")),Object(r.b)("h4",{id:"\u4ece\u8282\u70b9\u914d\u7f6e"},"\u4ece\u8282\u70b9\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"# \u4ee5\u4e0b\u547d\u4ee4\u9700\u8981 root \u7528\u6237\u64cd\u4f5c\nsudo su\n\n# \u6dfb\u52a0\u4ed3\u5e93\n(cd /etc/apk/keys; curl -LO https://repo.wener.me/alpine/wenermail@gmail.com-5dc8c7cd.rsa.pub )\necho https://repo.wener.me/alpine/v3.10/community | tee -a /etc/apk/repositories\n# \u5b89\u88c5\napk add --no-cache tinc-pre\n\n# \u6709\u533a\u522b\u7b2c\u5730\u65b9\n# --------------------\n# \u52a0\u5165\u7f51\u7edc\ntinc join <\u9080\u8bf7\u5730\u5740>\n\n# \u914d\u7f6e\u542f\u52a8\u811a\u672c\u8bbe\u7f6e IP\ncat <<'EOF' > /etc/tinc/mynet/tinc-up\n#!/bin/sh\nifconfig $INTERFACE 10.0.0.2 netmask 255.255.255.0\nEOF\n\n# \u914d\u7f6e\u8be5\u8282\u70b9\u7684\u4fe1\u606f\n# \ud83d\udca1\u8fd9\u91cc\u914d\u7f6e\u7684 Address \u662f\u5916\u7f51\u5730\u5740\ncat <<EOF >> /etc/tinc/mynet/hosts/node_1\nPort=0\nSubnet=10.0.0.2/32\nEOF\n# --------------------\n\n# \u52a0\u8f7d\u6a21\u5757\nmodprobe tun\necho tun  >> /etc/modules-load.d/tinc.conf\n\n# \u914d\u7f6e\u8981\u542f\u52a8\u7684\u7f51\u7edc\necho 'NETWORK: mynet' >> /etc/conf.d/tinc.networks\n\n# \u542f\u52a8\u670d\u52a1\nservice start tincd\n# \u5f00\u673a\u542f\u52a8\nrc-update add tincd\n")),Object(r.b)("h3",{id:"ansible-\u90e8\u7f72-tinc"},"Ansible \u90e8\u7f72 Tinc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528\u89c4\u6a21\u5316\u7684\u81ea\u52a8\u5316\u90e8\u7f72 - \u4f8b\u5982\u8282\u70b9\u6570\u91cf > 5")),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"# \u514b\u9686 Ansible \u4efb\u52a1\u4ed3\u5e93\ngit clone https://github.com/wenerme/alpine-admin\ncd alpine-admin\n\ncat <<EOF\nall:\n  hosts:\n    node_0: {ansible_host: 192.168.0.1, tinc_address: 10.0.0.1}\n    node_1: {ansible_host: 192.168.0.2, tinc_address: 10.0.0.2}\n    node_2: {ansible_host: 192.168.0.3, tinc_address: 10.0.0.3}\n  children:\n    tinc-nodes:\n      hosts:\n        node_1:\n        node_2:\n  vars:\n    tinc_netname: mynet\n    tinc_master: node_0\n    tinc_subnet: 10.0.0.0/24\nEOF\n\n# \u521d\u59cb\u5316\u7f51\u7edc\nansible-playbook adhoc.yaml -e 'task=tinc-init' -l node_0\n# \u542f\u52a8\u670d\u52a1\nansible-playbook adhoc.yaml -e 'task=tinc-service' -l node_0\n\n# \u52a0\u5165\u7f51\u7edc\nansible-playbook adhoc.yaml -e 'task=tinc-join' -l tinc-nodes\n# \u542f\u52a8\u670d\u52a1\nansible-playbook adhoc.yaml -e 'task=tinc-service' -l tinc-nodes\n")))}p.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var c=t(0),a=t.n(c);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(t),s=c,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||r;return t?a.a.createElement(d,l(l({ref:n},o),{},{components:t})):a.a.createElement(d,l({ref:n},o))}));function d(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:c,i[1]=l;for(var o=2;o<r;o++)i[o]=t[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);