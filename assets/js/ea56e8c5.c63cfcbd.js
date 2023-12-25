/*! For license information please see ea56e8c5.c63cfcbd.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12426],{57102:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>x});var s=i(11527),l=i(47214);const r={title:"Proxy FAQ",tags:["FAQ"]},d="Web Server FAQ",h={id:"devops/web/proxy-faq",title:"Proxy FAQ",description:"- \u5e94\u7528\u670d\u52a1\u5668 - nginx, caddy, traefik",source:"@site/../notes/devops/web/proxy-faq.md",sourceDirName:"devops/web",slug:"/devops/web/proxy-faq",permalink:"/notes/devops/web/proxy-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/proxy-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1692169664,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{title:"Proxy FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"\u53cd\u5411\u4ee3\u7406\u7f13\u5b58",permalink:"/notes/devops/web/proxy-cache"},next:{title:"Traefik V1",permalink:"/notes/devops/web/traefik-v1"}},c={},x=[{value:"Perf",id:"perf",level:2},{value:"SOCKS vs HTTP vs HTTPS",id:"socks-vs-http-vs-https",level:2},{value:"WebServer vs Proxy",id:"webserver-vs-proxy",level:2},{value:"Caddy vs Traefik",id:"caddy-vs-traefik",level:2},{value:"Nginx vs HAProxy",id:"nginx-vs-haproxy",level:3},{value:"Caddy v1 vs Caddy v2",id:"caddy-v1-vs-caddy-v2",level:2},{value:"HAProxy vs Keepalived",id:"haproxy-vs-keepalived",level:2},{value:"Varnish vs Squid vs HAProxy",id:"varnish-vs-squid-vs-haproxy",level:2},{value:"httping",id:"httping",level:2}];function t(n){const e={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"web-server-faq",children:"Web Server FAQ"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5e94\u7528\u670d\u52a1\u5668 - nginx, caddy, traefik\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u529f\u80fd\u4e3a\u4e3b"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668 - haproxy, keepalived\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6027\u80fd\u4e3a\u4e3b"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["VIP - \u8def\u7531\u5230\u5355\u4e00\u8282\u70b9 - HA\u3001floating IP\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u57fa\u4e8e\u5197\u4f59\u8def\u7531 \u6216 BGP"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u8d1f\u8f7d\u5747\u8861 - \u6839\u636e\u7b97\u6cd5\u8def\u7531\u5230\u591a\u4e2a\u8282\u70b9"}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"perf",children:"Perf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://blog.tjll.net/reverse-proxy-hot-dog-eating-contest-caddy-vs-nginx/",children:"https://blog.tjll.net/reverse-proxy-hot-dog-eating-contest-caddy-vs-nginx/"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://news.ycombinator.com/item?id=32865497",children:"https://news.ycombinator.com/item?id=32865497"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"socks-vs-http-vs-https",children:"SOCKS vs HTTP vs HTTPS"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["HTTP\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u6700\u5e7f\u6cdb\u7684\u534f\u8bae"}),"\n",(0,s.jsx)(e.li,{children:"\u57fa\u4e8e HTTP \u7684 CONNECT \u65b9\u6cd5 - 7 \u5c42\u534f\u8bae"}),"\n",(0,s.jsx)(e.li,{children:"wget \u53ea\u652f\u6301 http"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u652f\u6301 Basic \u9274\u6743"}),"\n",(0,s.jsx)(e.li,{children:"\u8bf7\u6c42\u662f\u660e\u6587\u611f\u77e5\u66f4\u591a\u7ec6\u8282"}),"\n",(0,s.jsxs)(e.li,{children:["\u652f\u6301\u590d\u6742\u8f6c\u53d1\u903b\u8f91 - privoxy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8def\u5f84, \u57df\u540d, \u5934"}),"\n",(0,s.jsx)(e.li,{children:"\u66f4\u52a0\u667a\u80fd\u7684\u8f6c\u53d1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53ef\u4ee5\u914d\u5408\u7f13\u5b58\u670d\u52a1\u4f7f\u7528\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f8b\u5982 squid - \u9700\u7ed3\u5408 tls \u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u4ee5\u505a TCP \u901a\u9053"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["SOCKS\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u7a0b\u5ea6\u4ec5\u6b21\u4e8e HTTP"}),"\n",(0,s.jsx)(e.li,{children:"TCP \u534f\u8bae - 5 \u5c42\u534f\u8bae"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 UDP"}),"\n",(0,s.jsxs)(e.li,{children:["\u6700\u5bb9\u6613\u7684\u534f\u8bae - ",(0,s.jsx)(e.code,{children:"ssh -d 1080"})]}),"\n",(0,s.jsx)(e.li,{children:"\u57fa\u4e8e\u63e1\u624b\u8fdb\u884c\u534f\u5546\uff0c\u4e00\u4e2a\u5730\u5740\u4e00\u4e2a\u7aef\u53e3\u8fdb\u884c\u6620\u5c04"}),"\n",(0,s.jsx)(e.li,{children:"DNS \u5728\u8fdc\u7a0b\u8fdb\u884c\u89e3\u6790"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["HTTPS\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u5c11"}),"\n",(0,s.jsx)(e.li,{children:"HTTP + TLS"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"webserver-vs-proxy",children:"WebServer vs Proxy"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["WebServer - nginx, apache\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u9759\u6001\u6587\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 cgi, fastcgi \u7b49\u5e94\u7528\u534f\u8bae"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Proxy - haproxy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 HTTP, HTTPS"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 TCP, UDP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"WebServer \u4e5f\u53ef\u4ee5\u662f Proxy"}),"\n",(0,s.jsx)(e.h2,{id:"caddy-vs-traefik",children:"Caddy vs Traefik"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Caddy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5b9a\u4f4d\u662f Web \u670d\u52a1\u5668"}),"\n",(0,s.jsx)(e.li,{children:"\u7279\u70b9\u662f HTTP2\u3001\u81ea\u52a8 HTTPS"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.del,{children:"V2 \u7248\u672c\u8fd8\u5728\u5f00\u53d1\u4e2d - \u53d8\u5316\u5f88\u5927"})}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u591a acme \u670d\u52a1\u5546"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u4f5c\u4e3a acme \u670d\u52a1\u5546"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Traefik\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5b9a\u4f4d\u662f\u5fae\u670d\u52a1\u4e0b\u7684\u8d1f\u8f7d\u5747\u8861\u3001\u8fb9\u754c\u8def\u7531\u3001\u53cd\u5411\u4ee3\u7406"}),"\n",(0,s.jsx)(e.li,{children:"\u504f\u5411 Cloud Native"}),"\n",(0,s.jsx)(e.li,{children:"\u5bf9 K8S \u652f\u6301\u8f83\u597d - \u652f\u6301\u4f5c\u4e3a Ingress"}),"\n",(0,s.jsx)(e.li,{children:"V2 \u7248\u672c\u8c03\u6574\u4e86\u524d\u540e\u7aef\u6982\u5ff5 - \u7ed3\u6784\u66f4\u52a0\u6e05\u6670\u6613\u4e8e\u914d\u7f6e"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 TCP \u548c SNI \u8d1f\u8f7d\u8def\u7531"}),"\n",(0,s.jsx)(e.li,{children:"acme \u4e0d\u652f\u6301\u5206\u5e03\u5f0f - \u4ed8\u8d39"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"nginx-vs-haproxy",children:"Nginx vs HAProxy"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nginx\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u64c5\u957f\u5e94\u7528\u5c42\u63a7\u5236"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 Web Hosting"}),"\n",(0,s.jsx)(e.li,{children:"\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u9650\u6d41\u80fd\u529b\u8f83\u5f31"}),"\n",(0,s.jsx)(e.li,{children:"\u7edf\u8ba1\u6307\u6807\u5c11"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 TCP \u548c UDP"}),"\n",(0,s.jsx)(e.li,{children:"\u66f4\u591a\u5e94\u7528\u5c42\u9762\u7684\u611f\u77e5 - 7 \u5c42"}),"\n",(0,s.jsx)(e.li,{children:"\u901a\u8fc7\u6a21\u5757\u63d0\u4f9b\u5404\u79cd\u529f\u80fd"}),"\n",(0,s.jsxs)(e.li,{children:["\u6536\u8d39\u7248 ",(0,s.jsx)(e.a,{href:"https://www.nginx.com/products/nginx/#compare-versions",children:"Nginx Plus"})]}),"\n",(0,s.jsx)(e.li,{children:"\u26a0\ufe0f \u793e\u533a\u7248 upstream \u7684 host \u4e0d\u4f1a\u53d8 - \u4e0d\u4f1a\u968f dns \u53d8\u5316 - \u5bf9\u4e8e LB \u6765\u8bf4\u6bd4\u8f83\u81f4\u547d"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["HAProxy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u64c5\u957f\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a Web \u670d\u52a1\u5668"}),"\n",(0,s.jsx)(e.li,{children:"\u6bd4 Nginx \u66f4\u64c5\u957f SSL offload / SSL terminate"}),"\n",(0,s.jsx)(e.li,{children:"\u4e3b\u8981\u89d2\u8272\u662f\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u975e\u5e38\u591a\u7684\u9650\u6d41\u7b56\u7565"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u975e\u5e38\u591a\u7684\u7edf\u8ba1\u6307\u6807"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e0d\u652f\u6301 UDP ",(0,s.jsx)(e.a,{href:"https://github.com/haproxy/haproxy/issues/62",children:"#62"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5982\u679c\u662f DNS \u8d1f\u8f7d\u63a8\u8350\u7528 ",(0,s.jsx)(e.a,{href:"https://dnsdist.org",children:"dnsdist"})]}),"\n",(0,s.jsx)(e.li,{children:"2.3 \u5f00\u59cb\u652f\u6301 QUIC \u652f\u6301\u90e8\u5206 UDP \u8d1f\u8f7d"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u4ee3\u7801\u91cf\u548c\u903b\u8f91\u6bd4 Nginx \u7b80\u5355"}),"\n",(0,s.jsxs)(e.li,{children:["\u6536\u8d39\u7248 - ",(0,s.jsx)(e.a,{href:"https://www.haproxy.com/products/community-vs-enterprise-edition/",children:"HAProxy EE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u9009\u62e9 HAProxy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,s.jsx)(e.li,{children:"SSL Offload"}),"\n",(0,s.jsx)(e.li,{children:"\u5165\u53e3 - SNI\u3001\u53cd\u5411\u4ee3\u7406\u3001SSL Offload"}),"\n",(0,s.jsx)(e.li,{children:"\u5e0c\u671b\u770b\u5230\u72b6\u6001\u548c\u76d1\u63a7"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u9009\u62e9 Nginx\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u6258\u7ba1\u7f51\u7ad9"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u5e94\u7528\u5c42\u63a7\u5236"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u5b9e\u73b0\u5e94\u7528\u7f51\u5173"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"caddy-v1-vs-caddy-v2",children:"Caddy v1 vs Caddy v2"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Caddy v1\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e - \u7b80\u5355/\u529f\u80fd\u6709\u9650"}),"\n",(0,s.jsx)(e.li,{children:"\u5168\u91cf reload"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Caddy v2\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u901a\u8fc7\u63a5\u53e3\u914d\u7f6e - \u66f4\u52a0\u7075\u6d3b/\u590d\u6742"}),"\n",(0,s.jsx)(e.li,{children:"\u65b9\u4fbf\u62d3\u5c55"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u4ee5 API \u63a7\u5236"}),"\n",(0,s.jsx)(e.li,{children:"\u7ec6\u7c92\u5ea6\u52a8\u6001\u914d\u7f6e"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"haproxy-vs-keepalived",children:"HAProxy vs Keepalived"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["HAProxy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 4 \u5c42 TCP \u548c 7 \u5c42 HTTP"}),"\n",(0,s.jsx)(e.li,{children:"\u611f\u77e5\u90e8\u5206 4 \u5c42\u534f\u8bae - \u4f8b\u5982 syslog"}),"\n",(0,s.jsx)(e.li,{children:"\u53cd\u5411\u4ee3\u7406"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Keepalived\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 4 \u5c42 TCP\u3001UDP \u8d1f\u8f7d"}),"\n",(0,s.jsx)(e.li,{children:"\u7528\u4e8e\u5b9e\u73b0 VIP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e24\u8005\u9762\u5411\u4e0d\u540c\u573a\u666f\uff0c\u5927\u90e8\u5206\u4f7f\u7528\u4f7f\u7528 haproxy\uff0c\u5982\u679c\u9700\u8981 udp \u8003\u8651 keepalived \u6216\u8005 nginx\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"varnish-vs-squid-vs-haproxy",children:"Varnish vs Squid vs HAProxy"}),"\n",(0,s.jsx)(e.p,{children:"\u90fd\u662f HTTP \u7f13\u5b58\u670d\u52a1"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/notes/devops/web/varnish",children:"varnish"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ingress"}),"\n",(0,s.jsx)(e.li,{children:"\u63d0\u4f9b\u670d\u52a1 - \u670d\u52a1\u7aef - \u4e0a\u6e38\u4e00\u822c\u4e3a\u5185\u90e8\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/notes/service/network/squid",children:"squid"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"egress"}),"\n",(0,s.jsx)(e.li,{children:"\u6d88\u8d39\u670d\u52a1 - \u4f7f\u7528\u7aef - \u4e0a\u6e38\u4e00\u822c\u4e3a\u5916\u90e8\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["HAProxy\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ingress"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u7f13\u5b58"}),"\n",(0,s.jsx)(e.li,{children:"\u7f13\u5b58\u529f\u80fd\u4e1a\u4f59"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u914d\u5408 varnish \u4f7f\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.haproxy.com/blog/haproxys-load-balancing-algorithm-for-static-content-delivery-with-varnish/",children:"HAProxy\u2019s Load-Balancing Algorithm for Static Content Delivery with Varnish"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.haproxy.com/blog/haproxy-and-varnish-comparison/",children:"HAProxy and Varnish Comparison"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"httping",children:"httping"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'alias httping="curl --silent --max-time 1 --output /dev/null --fail --head"\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/pjperez/httping",children:"https://github.com/pjperez/httping"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},3354:(n,e,i)=>{var s=i(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function x(n,e,i){var s,r={},x=null,t=null;for(s in void 0!==i&&(x=""+i),void 0!==e.key&&(x=""+e.key),void 0!==e.ref&&(t=e.ref),e)d.call(e,s)&&!c.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:l,type:n,key:x,ref:t,props:r,_owner:h.current}}e.Fragment=r,e.jsx=x,e.jsxs=x},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>h,a:()=>d});var s=i(50959);const l={},r=s.createContext(l);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);