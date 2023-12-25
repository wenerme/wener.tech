/*! For license information please see c1a278e0.cb814e5a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63718],{30698:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=s(11527),l=s(47214);const i={title:"HAProxy Version",tags:["Version"]},c="HAProxy Version",d={id:"devops/web/haproxy/haproxy-version",title:"HAProxy Version",description:"| version       | date       |",source:"@site/../notes/devops/web/haproxy/haproxy-version.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/version",permalink:"/notes/devops/web/haproxy/version",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/haproxy-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"HAProxy Version",tags:["Version"]},sidebar:"docs",previous:{title:"HAProxy Tuning",permalink:"/notes/devops/web/haproxy/tuning"},next:{title:"Apache HTTPD",permalink:"/notes/devops/web/httpd"}},h={},o=[{value:"HAProxy 2.8",id:"haproxy-28",level:2},{value:"HAProxy 2.7",id:"haproxy-27",level:2},{value:"HAProxy 2.6",id:"haproxy-26",level:2},{value:"HAProxy 2.5",id:"haproxy-25",level:2},{value:"HAProxy 2.4",id:"haproxy-24",level:2},{value:"HAProxy 2.3",id:"haproxy-23",level:2}];function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"haproxy-version",children:"HAProxy Version"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"version"}),(0,r.jsx)(e.th,{children:"date"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"[HAProxy 2.8]"}),(0,r.jsx)(e.td,{children:"2023-05-31"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"[HAProxy 2.7]"}),(0,r.jsx)(e.td,{children:"2022-12-01"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#haproxy-26",children:"HAProxy 2.6"})}),(0,r.jsx)(e.td,{children:"2022-05-31"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#haproxy-25",children:"HAProxy 2.5"})}),(0,r.jsx)(e.td,{children:"2021-11-23"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#haproxy-24",children:"HAProxy 2.4"})}),(0,r.jsx)(e.td,{children:"2021-05-13"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#haproxy-23",children:"HAProxy 2.3"})}),(0,r.jsx)(e.td,{children:"2020-11-05"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"haproxy-28",children:"HAProxy 2.8"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["OCSP Stapling\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4ee5\u524d ",(0,r.jsx)(e.code,{children:"set ssl ocsp-response"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u73b0\u5728\u5185\u7f6e\u652f\u6301 ",(0,r.jsx)(e.code,{children:"ocs-update on"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u5168\u5c40\u914d\u7f6e\u53c2\u6570\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"tune.ssl.ocsp-update.mindelay"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"tune.ssl.ocsp-update.maxdelay"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u65b0 Command\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"update ssl ocsp-response"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"show ssl ocsp-updates"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"HTTP \u538b\u7f29\u540e\u7aef Request & Response"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"backend webservers\n  balance roundrobin\n  server web1 192.168.56.10:8080 check maxconn 30\n\n  filter compression\n  compression direction both\n  compression offload\n  compression algo-req gzip\n  compression type-req application/json\n  compression algo-res gzip\n  compression type-res text/css text/html text/javascript text/plain\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["HTTP Forwarded Header\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5728 ",(0,r.jsx)(e.code,{children:"option forwarde"})," \u4e4b\u4e0a\u63a7\u5236"]}),"\n",(0,r.jsx)(e.li,{children:"rfc7239_is_valid"}),"\n",(0,r.jsx)(e.li,{children:"rfc7239_field"}),"\n",(0,r.jsx)(e.li,{children:"rfc7239_n2nn"}),"\n",(0,r.jsx)(e.li,{children:"rfc7239_n2np"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"HTTP Actions"}),"\n",(0,r.jsxs)(e.li,{children:["Tuning HTTP/2 Performance\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"tune.h2.be.initial-window-size"}),"\n",(0,r.jsx)(e.li,{children:"tune.h2.be.max-concurrent-streams"}),"\n",(0,r.jsx)(e.li,{children:"tune.h2.fe.initial-window-size"}),"\n",(0,r.jsx)(e.li,{children:"tune.h2.fe.max-concurrent-streams"}),"\n",(0,r.jsx)(e.li,{children:"tune.h2.initial-window-size"}),"\n",(0,r.jsx)(e.li,{children:"tune.h2.max-concurrent-streams"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Defaults for Listener Sharding\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"tune.listener.default-shards"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Default ALPN Values\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u9ed8\u8ba4 ",(0,r.jsx)(e.code,{children:"h2,http/1.1"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u914d\u7f6e\u4e86 QUIC \u4f1a\u589e\u52a0 ",(0,r.jsx)(e.code,{children:"h3"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Fetch Method\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"bc_rtt, bc_rttver"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u96c6\u6210 acme.sh\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"add the deploy script for acme.sh in admin directory"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u76f4\u63a5\u9881\u53d1\u8bc1\u4e66"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Signing Algorithms for TLS\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"ssl-default-bind-client-sigalgs"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"ssl-default-bind-sigalgs"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u4f7f\u7528 WolfSSL \u7f16\u8bd1"}),"\n",(0,r.jsxs)(e.li,{children:["Lua\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"mailers - \u4e4b\u524d\u4e3a C \u73b0\u5728\u4e3a Lua \u6a21\u5757"}),"\n",(0,r.jsxs)(e.li,{children:["New Event Framework in Lua\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"core.event_sub()"}),", ",(0,r.jsx)(e.code,{children:"Server.event_sub()"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Queues in Lua - ",(0,r.jsx)(e.code,{children:"core.queue()"})]}),"\n",(0,r.jsx)(e.li,{children:"Lua Functions for Server Information"}),"\n",(0,r.jsx)(e.li,{children:"Timeout for Lua execution"}),"\n",(0,r.jsxs)(e.li,{children:["Disable the Default Resolvers Section for the HTTP Client\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["global ",(0,r.jsx)(e.code,{children:"httpclient.resolvers.disabled on"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"global\n  lua-load /etc/haproxy/mailers.lua\n\ndefaults\n  email-alert mailers smtp_servers\n  email-alert from haproxy@example.com\n  email-alert to helpdesk@example.com\n  email-alert level info\n\nmailers smtp_servers\n  mailer mailserver1 mailserver1.example.com:25\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/rnwood/smtp4dev",children:"https://github.com/rnwood/smtp4dev"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Email \u6d4b\u8bd5\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.haproxy.com/blog/announcing-haproxy-2-8",children:"https://www.haproxy.com/blog/announcing-haproxy-2-8"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"haproxy-27",children:"HAProxy 2.7"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Traffic shaping\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4e0b\u8f7d\u901f\u5ea6\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"filter bwlim-out"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"http-response set-bandwidth-limit"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4e0a\u4f20\u901f\u5ea6\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"filter bwlim-in"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"http-request set-bandwidth-limit"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"thread-group"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4e4b\u524d\u6700\u591a 64 \u4e2a\u7ebf\u7a0b - ",(0,r.jsx)(e.code,{children:"thread-group 1 threads 64"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u73b0\u5728\u53ef\u4ee5 64*64=4096 \u4e2a\u7ebf\u7a0b - ",(0,r.jsx)(e.code,{children:"thread-group 64 threads 64"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"QUICv2"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'echo "reload" | sudo socat -t300 /run/haproxy-master.sock -\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"show startup-logs"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"haproxy-26",children:"HAProxy 2.6"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"HTTP/3 over QUIC"}),"\n",(0,r.jsxs)(e.li,{children:["Generic hash load balancing algorithm\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"balance hash pathq"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 OpenSSL 3.0"}),"\n",(0,r.jsxs)(e.li,{children:["Master CLI\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"HAProxy worker processes"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"socat /run/haproxy-master.sock -"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"http-request set-var"}),", ",(0,r.jsx)(e.code,{children:"tcp-request content set-var"})," \u652f\u6301 \u9009\u9879\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"ifexists, ifnotexists, ifempty, ifnotempty, ifset, ifnotset, ifgt, iflt"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# \u663e\u793a\u6240\u6709\u914d\u7f6e\nhaproxy -dKhelp -q -c -f /dev/null\n# \u67d0\u4e2a\u4e3b\u9898\u4e0b\u7684\u914d\u7f6e\u9879\nhaproxy -dKacl -q -c -f /dev/null\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-haproxy",children:"frontend mysite\n  # enables HTTP/3 over QUIC\n  bind quic4@:443 ssl crt /etc/haproxy/certs/foo.com/cert.pem alpn h3\n  # \u652f\u6301 stateless reset packets https://tools.ietf.org/id/draft-ietf-quic-transport-29.html#name-stateless-reset\n  #cluster-secret\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Reload"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-haproxy",children:"global\n  stats socket /var/run/haproxy/api.sock mode 660 level admin expose-fd listeners\n"})}),"\n",(0,r.jsx)(e.h2,{id:"haproxy-25",children:"HAProxy 2.5"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"QUIC, HTTP/3 - \u5b9e\u9a8c\u652f\u6301"}),"\n",(0,r.jsxs)(e.li,{children:["\u5b8c\u6574\u52a8\u6001\u670d\u52a1\u652f\u6301\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"2.4 \u52a8\u6001\u670d\u52a1\u4e0d\u652f\u6301 check, track, slowstart, error-limit, ssl, observe"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u5728 defaults \u914d\u7f6e tcp-request \u548c http-request \u89c4\u5219"}),"\n",(0,r.jsxs)(e.li,{children:["Lua\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u65b0\u589e httpclient - \u53ef\u53d1\u8d77\u8bf7\u6c42"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.haproxy.com/blog/announcing-haproxy-2-5/",children:"Announcing HAProxy 2.5"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# \u7279\u6027\u68c0\u67e5\nhaproxy -cc 'feature(PROMEX)' || echo not supported\n\n# runtime api shell\nsocat stdio tcp4-connect:127.0.0.1:9999\n\nexperimental-mode on\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-haproxy",children:"global\n  nbthread 40\n\ndefaults frontend-defaults\n  log global\n  mode http\n  option httplog\n  option dontlognull\n  timeout client  10m\n  # \u65b0\u589e\n  http-request redirect scheme https unless { ssl_fc }\n\nfrontend mysite from frontend-defaults\n  mode http\n  # \u5e9f\u5f03 process \u4f7f\u7528 thread\n  # \u65b0\u589e shards \u53c2\u6570 - \u7b49\u540c\u4e8e\u591a\u6b21 bind\n  bind :80 thread 1-20 shards 2 name website\n  bind :443 ssl crt /etc/haproxy/ssl/cert.pem\n  default_backend webservers\n"})}),"\n",(0,r.jsx)(e.h2,{id:"haproxy-24",children:"HAProxy 2.4"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u53d8\u5316\u975e\u5e38\u5927"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u534f\u8bae\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["HTTP2/WebSocket\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc8441",children:"rfc8441"})," HTTP CONNECT"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"FIX - Financial Information eXchange"}),"\n",(0,r.jsxs)(e.li,{children:["MQTT\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5305\u6709\u6548\u6027\u6821\u9a8c"}),"\n",(0,r.jsx)(e.li,{children:"\u57fa\u4e8e\u5ba2\u6237\u7aef\u6807\u8bc6\u8def\u7531"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u8d1f\u8f7d\u5747\u8861\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 TCP DNS"}),"\n",(0,r.jsx)(e.li,{children:"\u7194\u65ad\u589e\u5f3a - http_fail_cnt, http_fail_rate"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["SSL/TLS\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u52a8\u6001 SSL \u8bc1\u4e66\u5b58\u50a8 - \u4e0d\u518d\u9700\u8981\u91cd\u542f"}),"\n",(0,r.jsxs)(e.li,{children:["\u5141\u8bb8\u52a8\u6001 SNI \u94fe\u63a5\u590d\u7528 - ",(0,r.jsx)(e.code,{children:"sni req.hdr(host)"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Observability\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5185\u7f6e ",(0,r.jsx)(e.strong,{children:"OpenTracing"})]}),"\n",(0,r.jsx)(e.li,{children:"Prometheus \u589e\u52a0\u6307\u6807"}),"\n",(0,r.jsxs)(e.li,{children:["\u7edf\u8ba1\u589e\u52a0 SSL/TLS \u6a21\u5757\u76f8\u5173 - ",(0,r.jsx)(e.code,{children:"stats show-modules"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u7f13\u5b58\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u652f\u6301 Vary \u5934 - ",(0,r.jsx)(e.code,{children:"process-vary on"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u6700\u5927\u7f13\u5b58\u6761\u76ee\u63a7\u5236 - ",(0,r.jsx)(e.code,{children:"max-secondary-entries 10"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u914d\u7f6e\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u652f\u6301\u9884\u5904\u7406\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:".if <condition> ... .elif <condition> ... .else ... .endif"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:".diag"}),", ",(0,r.jsx)(e.code,{children:".notice"}),", ",(0,r.jsx)(e.code,{children:".warning"}),", ",(0,r.jsx)(e.code,{children:".alert"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"-dD \u663e\u793a\u8bca\u65ad\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6761\u4ef6\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"defined(<name>)"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"feature(<name>)"})," - ",(0,r.jsx)(e.code,{children:"haproxy -vv"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"OT - OpenTracing"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"streq(<str1>,<str2>)"}),", ",(0,r.jsx)(e.code,{children:"strneq(<str1>,<str2>)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"version_atleast(<ver>)"}),", ",(0,r.jsx)(e.code,{children:"version_before(<ver>)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u9ed8\u8ba4\u8def\u5f84 - ",(0,r.jsx)(e.code,{children:"default-path"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u9ed8\u8ba4\u547d\u540d - ",(0,r.jsx)(e.code,{children:"default http-defaults from tcp-defaults"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u52a8\u6001\u8d85\u65f6 - ",(0,r.jsx)(e.code,{children:"http-request set-timeout"})]}),"\n",(0,r.jsxs)(e.li,{children:["TCP \u5347\u7ea7 HTTP - fe tcp, be http - ",(0,r.jsx)(e.code,{children:"tcp-request content switch-mode"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u5339\u914d\u5220\u9664 HTTP \u5934 - ",(0,r.jsx)(e.code,{children:"http-request del-header X-Forwarded -m beg"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u65b0\u589e\u5b9e\u9a8c\u6a21\u5f0f - \u5f00\u542f\u5b9e\u9a8c\u529f\u80fd\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u52a8\u6001\u670d\u52a1\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u8fc7 runtime api \u65b0\u589e\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u53d8\u91cf\u4fee\u6539"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Lua\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u591a\u7ebf\u7a0b - ",(0,r.jsx)(e.code,{children:"lua-load-per-thread"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.haproxy.com/blog/announcing-haproxy-2-4",children:"Announcing HAProxy 2.4"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'# runtime api\necho "help add" | socat /var/run/haproxy/api.sock -\necho "show state" | socat /var/run/haproxy/api.sock -\n\n# \u670d\u52a1\necho "experimental-mode on; add server be_app/app4 192.168.1.22:80" | socat /var/run/haproxy/api.sock -\necho "experimental-mode on; del server be_app/app4" | socat /var/run/haproxy/api.sock -\n# \u53d8\u91cf\necho "experimental-mode on; get var proc.myapp_version" | socat /var/run/haproxy/api.sock -\necho "experimental-mode on; set var proc.myapp_version str(green)" | socat /var/run/haproxy/api.sock -\necho "experimental-mode on; get var proc.myapp_version" | socat /var/run/haproxy/api.sock -\n'})}),"\n",(0,r.jsx)(e.h2,{id:"haproxy-23",children:"HAProxy 2.3"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u94fe\u63a5\u589e\u5f3a - \u4e3a\u652f\u6301 QUIC \u548c UDP \u505a\u51c6\u5907\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b8c\u5584 Linux keepalive - \u652f\u6301 sysctl \u4fee\u6539\u53c2\u6570"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u534f\u8bae - Syslog TCP/UDP"}),"\n",(0,r.jsxs)(e.li,{children:["\u8d1f\u8f7d\u5747\u8861\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"balance uri path-only - \u89e3\u51b3 HTTP1 \u548c HTTP2 \u5730\u5740\u4e0d\u4e00\u6837\u95ee\u9898"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["SSL/TLS\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5141\u8bb8\u9759\u6001 SNI \u94fe\u63a5\u590d\u7528 - ",(0,r.jsx)(e.code,{children:"sni str(example.local)"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Observability\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["stats HTTP 2 \u4fe1\u606f - ",(0,r.jsx)(e.code,{children:"stats show-modules"})]}),"\n",(0,r.jsx)(e.li,{children:"\u57fa\u4e8e SPOE \u96c6\u6210 OpenTracing"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Lua 5.4"}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.haproxy.com/blog/announcing-haproxy-2-3",children:"Announcing HAProxy 2.3"})}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}},3354:(n,e,s)=>{var r=s(50959),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var r,i={},o=null,t=null;for(r in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(t=e.ref),e)c.call(e,r)&&!h.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:l,type:n,key:o,ref:t,props:i,_owner:d.current}}e.Fragment=i,e.jsx=o,e.jsxs=o},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>c});var r=s(50959);const l={},i=r.createContext(l);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);