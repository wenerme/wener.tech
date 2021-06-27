(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1096:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var c=t(0),r=t.n(c);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=c,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||a;return t?r.a.createElement(d,i(i({ref:n},b),{},{components:t})):r.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var b=2;b<a;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},459:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var c=t(3),r=t(8),a=(t(0),t(1096)),o={id:"tinc-multi-path-failover",title:"\u5982\u4f55\u914d\u7f6e TINC \u5b9e\u73b0\u591a\u8def\u5bb9\u707e\uff1f",date:new Date("2019-12-08T00:00:00.000Z"),updateDate:new Date("2019-12-13T00:00:00.000Z")},i={unversionedId:"howto/network/tinc-multi-path-failover",id:"howto/network/tinc-multi-path-failover",isDocsHomePage:!1,title:"\u5982\u4f55\u914d\u7f6e TINC \u5b9e\u73b0\u591a\u8def\u5bb9\u707e\uff1f",description:"\u573a\u666f",source:"@site/notes/howto/network/tinc-multi-path-failover.md",slug:"/howto/network/tinc-multi-path-failover",permalink:"/notes/howto/network/tinc-multi-path-failover",editUrl:"https://github.com/wenerme/wener/edit/master/notes/howto/network/tinc-multi-path-failover.md",version:"current",sidebar:"docs",previous:{title:"\u5982\u4f55\u90e8\u7f72 TINC \u7f51\u7edc\uff1f",permalink:"/notes/howto/network/tinc-get-started"},next:{title:"\u5982\u4f55\u57fa\u4e8e TINC \u5b9e\u73b0\u900f\u660e\u4ee3\u7406",permalink:"/notes/howto/network/tinc-transparency-proxy"}},l=[{value:"\u573a\u666f",id:"\u573a\u666f",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[]},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[{value:"Docker \u90e8\u7f72\u9a8c\u8bc1",id:"docker-\u90e8\u7f72\u9a8c\u8bc1",children:[]},{value:"Ansible \u90e8\u7f72",id:"ansible-\u90e8\u7f72",children:[]}]}],b={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/svg/ZPDFJzH06CRl_HIJUYrsMuXnmxQ1Tgdnuid4msP3fktWJfoTQJg34Ga9sGX641CIlAqX7j2Bg1nKXEYdsTcktyBfFuYm9AP9_yxx_9xtwJiBNC1Kn4neCNwSmgG7xe5rZR8OTNWF9iW9sJE3YpM2d1LC28gDY16MEYA5b2SmHLHqjRAmmnE2AU8EIqMF6I0NuIXnhAwcyTMmN1IHLIvGkWmL1O0Uus8PTWWC4N5QYwFJy_7mh1McfYktFcM_ze7Lj6ytr66vHeulsVejpsil1Pu-pKib6jQYtisYzd-BAjLrzVp4uR2FvYlR5MZZeWymurRlL1P5P9W-nRmeBzteu-6Ut7altsw3HLtRc99BU9bBLBVWJs_1kjw2VtVfZj_KkzE0NW6yJemgOX_LlEpWs-J5lZb-jQke_mA286ZwSmKWHGIkrIMZq-Fi_EDaPv0DVXO-MokC2f0mJCKCny-HeriDtHtztfKV1a1-_lxdvUl9Zo_PmOdv20UuPURBtQBouVq7Fh0QvHyoP-qR35osgDJasR5AnPGdc_BmKDtfzLV28YVC-nQOHXI9scyE6Ryvabj7jU4hip5xuKKElyftcxKZoxJdhZhossqxTrHEWL7DG7MDygaeijAASpaaVQGfLmk8nchh_GK0",alt:"\u7f51\u7edc\u7ed3\u6784"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u73b0\u6709 3 \u53f0\u670d\u52a1\u5668\u63d0\u4f9b\u76f8\u540c\u7684\u670d\u52a1\uff0c\u5e0c\u671b\u4f7f\u7528\u540c\u4e00\u4e2a IP \u8fdb\u884c\u8bbf\u95ee",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5373\u4e3a A B C \u4e3b\u673a\u63d0\u4f9b VIP/\u865a\u62df IP"))),Object(a.b)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301 2\u5c42 \u8f6c\u53d1 - \u7f51\u6865\u3001\u7f51\u5173",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u9700\u8981 2\u5c42 \u6216\u8005\u4e0d\u9700\u8981\u4efb\u610f\u7aef\u53e3 \u4e5f\u53ef\u4ee5\u8003\u8651 Nginx/HAProxy \u7b49\u8fdb\u884c\u8f6c\u53d1 - \u5bf9\u7aef\u53e3\u8fdb\u884c\u8d1f\u8f7d\u5bb9\u707e"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 mac \u5bfb\u5740"))),Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u8282\u70b9\u5f02\u5e38\u540e\u80fd\u591f\u5feb\u901f\u5207\u6362\u5230\u5176\u5b83\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u4e0d")," \u9700\u8981\u8d1f\u8f7d\u5747\u8861 - \u591a\u8def\u4e0d\u4f1a\u8fdb\u884c\u8d1f\u8f7d")),Object(a.b)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Tinc \u652f\u6301\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f - Route \u548c Switch - \u5206\u522b\u5de5\u4f5c\u5728 3 \u5c42\u548c 2 \u5c42 - \u9ed8\u8ba4\u4f7f\u7528 Route 3 \u5c42\uff0c\u9700\u8981\u914d\u7f6e\u4e3a Switch \u6a21\u5f0f\u5de5\u4f5c\u5728 2 \u5c42"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 Switch \u6a21\u5f0f\u65f6\u6bcf\u4e2a\u8282\u70b9\u4f1a\u751f\u6210 mac \u5730\u5740\u7528\u4e8e\u8def\u7531"),Object(a.b)("li",{parentName:"ul"},"\u8bbf\u95ee IP \u65f6\u4f1a\u901a\u8fc7 arp \u5c06 IP \u8f6c\u6362\u4e3a mac \u5730\u5740"),Object(a.b)("li",{parentName:"ul"},"\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u914d\u7f6e\u76f8\u540c\u7684 IP\uff0c\u5373\u53ef\u4ee5\u505a\u5230\u591a\u8def\u5bb9\u707e")),Object(a.b)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udca1\u63d0\u793a"),Object(a.b)("p",{parentName:"blockquote"},"TINC \u7684\u57fa\u7840\u90e8\u7f72\u6982\u5ff5\u5728\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\uff0c\u8bf7\u53c2\u8003 ",Object(a.b)("a",{parentName:"p",href:"https://wener.me/notes/howto/network/tinc-get-started"},"\u5982\u4f55\u90e8\u7f72 TINC \u7f51\u7edc"),"\u3002")),Object(a.b)("h3",{id:"docker-\u90e8\u7f72\u9a8c\u8bc1"},"Docker \u90e8\u7f72\u9a8c\u8bc1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u6d41\u7a0b",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"\u521b\u5efa Docker \u7f51\u7edc - \u4ee5\u4f7f\u7528\u9759\u6001 IP")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5bb9\u5668\u7f51\u7edc - 172.18.3.0/24 ")),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"\u521b\u5efa 5 \u4e2a\u5bb9\u5668",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"node-1 \u7f51\u7edc\u4e3b\u8282\u70b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"mynet TINC \u7f51\u7edc - 10.1.1.1/24"),Object(a.b)("li",{parentName:"ul"},"\u9759\u6001 IP - 172.18.3.100"))),Object(a.b)("li",{parentName:"ul"},"node-2-4 \u670d\u52a1\u8282\u70b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u670d\u52a1\u63d0\u4f9b\u7edf\u4e00\u7684 VIP - 10.1.1.10"),Object(a.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u76f4\u63a5\u8bbf\u95ee IP - 10.1.1.102-104"))),Object(a.b)("li",{parentName:"ul"},"node-5 \u5ba2\u6237\u7aef\u8282\u70b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u8282\u70b9 IP - 10.1.1.2"),Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7 VIP \u8bbf\u95ee\u670d\u52a1"))))),Object(a.b)("li",{parentName:"ol"},"\u521d\u59cb\u5316 Switch \u6a21\u5f0f\u7684 Tinc \u7f51\u7edc"),Object(a.b)("li",{parentName:"ol"},"\u4ece\u8282\u70b9\u52a0\u5165"),Object(a.b)("li",{parentName:"ol"},"\u9a8c\u8bc1\u8bbf\u95ee"),Object(a.b)("li",{parentName:"ol"},"\u9a8c\u8bc1\u670d\u52a1\u5bb9\u707e\u80fd\u529b")))),Object(a.b)("h4",{id:"\u73af\u5883\u521d\u59cb\u5316"},"\u73af\u5883\u521d\u59cb\u5316"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udca1\u63d0\u793a"),Object(a.b)("p",{parentName:"blockquote"},"\u5b9e\u9645\u90e8\u7f72\u4e0e Docker \u64cd\u4f5c\u6ca1\u6709\u4efb\u4f55\u533a\u522b\uff0c\u53ea\u9700\u8981\u6ce8\u610f\u914d\u7f6e\u63a5\u5165\u70b9\u7684 Address")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u7f51\u7edc\u521d\u59cb\u5316\ndocker network create service --subnet 172.18.3.0/24\n\n# \u5bb9\u5668\u521d\u59cb\u5316 - \u5982\u679c\u9700\u8981\u6301\u4e45\u5316 tinc \u914d\u7f6e\u53ef\u4ee5\u6620\u5c04 /etc/tinc/mynet \u76ee\u5f55\n# node-1 \u8282\u70b9\u4f7f\u7528\u9759\u6001 ip\ndocker run -d --network tinc --ip 172.18.0.100 --cap-add NET_ADMIN --device /dev/net/tun --name node-1 wener/tinc tail -f /dev/null\n# node 2 3 4 5 \u8282\u70b9\u521d\u59cb\u5316\nseq 2 5 | xargs -I {} -n 1 docker run -d --network tinc --cap-add NET_ADMIN --device /dev/net/tun --name node-{} wener/tinc tail -f /dev/null\n")),Object(a.b)("h4",{id:"\u7f51\u7edc\u521d\u59cb\u5316"},"\u7f51\u7edc\u521d\u59cb\u5316"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5728 node-1 \u914d\u7f6e tinc \u7f51\u7edc\ncat <<'EOF' | docker exec -i node-1 sh\nset -x\n# \u7f51\u7edc\u540d\u4e3a mynet\ntinc -n mynet init mynet\n# \u914d\u7f6e Switch \u6a21\u5f0f\necho Mode=Switch >> /etc/tinc/mynet/tinc.conf\n\n# \u914d\u7f6e TINC \u5730\u5740\necho -e '#!/bin/sh\\nifconfig $INTERFACE 10.1.1.1 netmask 255.255.255.0' > /etc/tinc/mynet/tinc-up\n\n# \u76d1\u542c\u7aef\u53e3\necho Port=655 >> /etc/tinc/mynet/hosts/mynet\n# \u5916\u90e8\u5730\u5740\necho Address=172.18.0.100 >> /etc/tinc/mynet/hosts/mynet\nEOF\n\n# \u542f\u52a8\u7f51\u7edc\ndocker exec node-1 tinc -n mynet start\n\n# \u8282\u70b9\u52a0\u5165 - node-1 \u9080\u8bf7\u5176\u5b83\u8282\u70b9 - \u751f\u6210 url \u5176\u5b83\u8282\u70b9\u52a0\u5165\nfor i in $(seq 2 5); \ndo\n  url=$(docker exec node-1 tinc -n mynet invite node_$i)\n  docker exec node-$i tinc join $url\ndone\n\n# \u4e3a node 2 3 4 \u914d\u7f6e\u7edf\u4e00\u7684 IP 10.1.1.10\nseq 2 4 | xargs -I {} -n 1 docker exec node-{} sh -c \"echo 'ifconfig \\$INTERFACE 10.1.1.10 netmask 255.255.255.0' > /etc/tinc/mynet/tinc-up\"\n\n# \u4e3a node 2 3 4 \u914d\u7f6e\u989d\u5916\u7684\u7ba1\u7406 IP 10.1.1.102-104\nseq 2 4 | xargs -I {} -n 1 docker exec node-{} sh -c \"echo 'ip addr add 10.1.1.10{}/24 dev mynet' >> /etc/tinc/mynet/tinc-up\"\n\n# \u4e3a node-5 \u914d\u7f6e 10.1.1.2\ndocker exec node-5 sh -c \"echo 'ifconfig \\$INTERFACE 10.1.1.2 netmask 255.255.255.0' > /etc/tinc/mynet/tinc-up\"\n\n# \u542f\u52a8\u6240\u6709\u8282\u70b9\nseq 2 5 | xargs -I {} -n 1 docker exec node-{} tinc -n mynet start\n\n# \u5728\u4e3b\u8282\u70b9\u67e5\u770b\u94fe\u63a5\u72b6\u6001\n# \u6240\u6709\u8282\u70b9\u90fd\u5728\ndocker exec node-1 tinc -n mynet dump nodes\n")),Object(a.b)("h4",{id:"\u9ad8\u53ef\u7528\u9a8c\u8bc1"},"\u9ad8\u53ef\u7528\u9a8c\u8bc1"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e00\u4e2a\u4f1a\u8bdd\u4e00\u76f4 PING \u670d\u52a1 IP - \u89c2\u5bdf\u94fe\u63a5\u60c5\u51b5\n# \u6ce8\u610f\u662f\u4ece node-5 ping\ndocker exec -it node-5 ping 10.1.1.10\n\n# \u4ee5\u4e0b\u5728 node-5 \u6267\u884c\ndocker exec node-5 sh\n\n# \u83b7\u53d6\u5f53\u524d 10.1.1.10 \u5bf9\u5e94\u7684 mac\nip neigh show 10.1.1.10\n# \u83b7\u53d6 \u8be5 mac \u5bf9\u5e94\u7684 tinc \u8282\u70b9\ntinc -n mynet info $(ip neigh show 10.1.1.10 | egrep -o '..:\\S+')\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5728\u5bbf\u4e3b\u673a\u4e0a\u505c\u6b62\u5f53\u524d\u8282\u70b9")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u5f53\u524d 10.1.1.10 \u7684\u8282\u70b9\u505c\u6b62\nnode=$(docker exec node-5 sh -c \"tinc -n mynet info \\$(ip neigh show 10.1.1.10 | egrep -o '..:\\S+') | grep -o node_. | grep -o '\\d'\")\ndocker stop node-$node\n")),Object(a.b)("p",null,"\u6b64\u65f6\u4f1a\u89c2\u5bdf\u5230 10\u79d2 \u5de6\u53f3\u7684 PING \u4e22\u5305\uff0c\u6211\u770b\u5230\u7684\u65e5\u5fd7\u662f\u8fd9\u6837\u7684"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"64 bytes from 10.1.1.10: seq=411 ttl=64 time=0.617 ms\n64 bytes from 10.1.1.10: seq=412 ttl=64 time=1.033 ms\n64 bytes from 10.1.1.10: seq=420 ttl=64 time=4.084 ms\n64 bytes from 10.1.1.10: seq=421 ttl=64 time=0.796 ms\n")),Object(a.b)("p",null,"\u7136\u540e\u518d\u5728 node-5 \u4e0a\u786e\u8ba4\u5f53\u524d\u65b0\u7684\u8282\u70b9"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"tinc -n mynet info $(ip neigh show 10.1.1.10 | egrep -o '..:\\S+')\n")),Object(a.b)("p",null,"\u81f3\u6b64\uff0c\u5b8c\u6210\u9a8c\u8bc1\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u505c\u6b62\u5f53\u524d\u8282\u70b9\u7136\u540e\u89c2\u5bdf\uff0c\u6216\u8005\u542f\u52a8\u65b0\u7684\u8282\u70b9\u89c2\u5bdf\uff0c\u603b\u4e4b tinc \u7684\u884c\u4e3a\u7b26\u5408\u9884\u671f\uff0c\u8fbe\u5230\u76ee\u7684\u3002"),Object(a.b)("h4",{id:"\u9500\u6bc1\u73af\u5883"},"\u9500\u6bc1\u73af\u5883"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u505c\u6b62\u5bb9\u5668\nseq 1 5 | xargs -I {} -n 1 docker rm -f node-{}\n# \u5220\u9664\u7f51\u7edc\ndocker network rm service\n")),Object(a.b)("h3",{id:"ansible-\u90e8\u7f72"},"Ansible \u90e8\u7f72"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udca1\u63d0\u793a\nAnsible \u6267\u884c\u57fa\u4e8e ",Object(a.b)("a",{parentName:"p",href:"https://github.com/wenerme/alpine-admin"},"wenerme/alpine-admin")," \u63d0\u4f9b\u7684\u4efb\u52a1")),Object(a.b)("p",null,"\u914d\u7f6e\u548c\u4ed3\u5e93\u8282\u70b9\u5982\u4e0b\uff0c\u6309\u9700\u66f4\u6539 IP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"hosts.yaml")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"all:\n  hosts:\n    # \u4e3b\u8282\u70b9\n    mynet:\n      ansible_host: 172.18.3.100\n      tinc_address: 10.1.1.1\n      tinc_conf:\n      - {name: Mode, value: switch}\n      tinc_host_conf:\n      - {name: Port, value: 655}\n      - {name: Address, value: 172.18.3.100}\n    # \u670d\u52a1\u8282\u70b9\n    node-2: {ansible_host: 172.18.3.1, tinc_address: 10.1.1.10}\n    node-3: {ansible_host: 172.18.3.2, tinc_address: 10.1.1.10}\n    node-4: {ansible_host: 172.18.3.3, tinc_address: 10.1.1.10}\n  children:\n    tinc-nodes:\n      hosts:\n        node-[2:4]:\n  vars:\n    tinc_netname: mynet\n    tinc_subnet: 10.1.1.0/24\n    # \u4ece\u8282\u70b9\u4f7f\u7528\u968f\u673a\u7aef\u53e3\u907f\u514d\u68c0\u6d4b\n    tinc_host_conf:\n      - {name: Port, value: 0}\n")),Object(a.b)("p",null,"\u4f7f\u7528 Ansible \u90e8\u7f72"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u7b80\u5316\u64cd\u4f5c - \u4f7f\u7528 -i hosts.yaml \u6307\u5b9a\u4e86\u4ed3\u5e93\nadhoc(){ local task=$1; shift; ansible-playbook $PWD/adhoc.yaml -e task=$task -i hosts.yaml $*; }\n\n# \u4e3a\u6240\u6709\u8282\u70b9\u914d\u7f6e\u4ed3\u5e93 - https://github.com/wenerme/repository\n# \u56e0\u4e3a\u76ee\u524d\u5b98\u65b9\u4ed3\u5e93\u6ca1\u6709\nadhoc wener-repo\n\n# \u5b89\u88c5 tinc\nadhoc tinc-install\n\n# \u521d\u59cb\u5316\u7f51\u8def\nadhoc tinc-init -l mynet\n# \u542f\u52a8\u670d\u52a1\nadhoc tinc-service -l mynet\n\n# \u52a0\u5165 TINC \u7f51\u7edc\nadhoc tinc-join -l tinc-nodes\n# \u542f\u52a8\u670d\u52a1\nadhoc tinc-service -l tinc-nodes\n\n# \u67e5\u770b\u4e3b\u673a\u4fe1\u606f - \u5305\u542b tinc \u7f51\u7edc\nadhoc tinc-service -l host-info\n")),Object(a.b)("p",null,"\u5b8c\u6210\u90e8\u7f72\u3002\u4f7f\u7528 ansible \u80fd\u591f\u5feb\u901f\u90e8\u7f72\u5927\u89c4\u6a21\u7684 tinc \u7f51\u7edc\u3002"))}s.isMDXComponent=!0}}]);