(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1169:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return _}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,_=u["".concat(o,".").concat(d)]||u[d]||b[d]||p;return t?a.a.createElement(_,i(i({ref:n},l),{},{components:t})):a.a.createElement(_,i({ref:n},l))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),p=(t(0),t(1169)),o={title:"FRP"},i={unversionedId:"service/network/frp",id:"service/network/frp",isDocsHomePage:!1,title:"FRP",description:"frp",source:"@site/notes/service/network/frp.md",slug:"/service/network/frp",permalink:"/notes/service/network/frp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/frp.md",version:"current",sidebar:"docs",previous:{title:"DNSCrypt",permalink:"/notes/service/network/dnscrypt"},next:{title:"IKEv2",permalink:"/notes/service/network/ikev2"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"frps.ini",id:"frpsini",children:[]},{value:"frpc.ini",id:"frpcini",children:[]}]},{value:"cookbook",id:"cookbook",children:[{value:"Kubernetes",id:"kubernetes",children:[]},{value:"https",id:"https",children:[]},{value:"auto reload",id:"auto-reload",children:[]}]},{value:"get sid from visitor error",id:"get-sid-from-visitor-error",children:[]},{value:"start new visitor connection error: custom listener for [] doesn&#39;t exist",id:"start-new-visitor-connection-error-custom-listener-for--doesnt-exist",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"frp"},"frp"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u7aef\u53e3\u7684 4 \u5c42\u53cd\u5411\u4ee3\u7406"),Object(p.b)("li",{parentName:"ul"},"\u57fa\u4e8e vhost \u7684 7 \u5c42\u53cd\u5411\u4ee3\u7406"),Object(p.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u652f\u6301 http, tcp, udp, kcp"),Object(p.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u652f\u6301 ws \u66b4\u9732 - TCP over Websocket"),Object(p.b)("li",{parentName:"ul"},"\u4ee3\u7406\u652f\u6301 tcp,udp,http,https,stcp,xtcp",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"stcp - \u4e24\u4e2a\u5ba2\u6237\u7aef\u901a\u8fc7\u5171\u4eab\u5bc6\u94a5\u4e92\u901a"),Object(p.b)("li",{parentName:"ul"},"xtcp - NAT \u7a7f\u900f P2P - \u6210\u529f\u7387\u4f4e, \u57fa\u672c\u65e0\u610f\u4e49"))),Object(p.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u652f\u6301\u7b80\u5355 dashboard"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://gofrp.org/docs/"},"\u6587\u6863")),Object(p.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 7000"),Object(p.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"frps - \u670d\u52a1\u7aef - \u4e00\u822c\u6709\u5916\u7f51 IP"),Object(p.b)("li",{parentName:"ul"},"frpc - \u5ba2\u6237\u7aef - \u4e00\u822c\u4f4d\u4e8e\u5185\u7f51, \u671f\u671b\u88ab\u5916\u7f51\u8bbf\u95ee, A -> frps -> frpc"))),Object(p.b)("li",{parentName:"ul"},"\u7f3a\u9677",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"xtcp \u70b9\u5230\u70b9\u7a7f\u900f\u7387\u4f4e, \u57fa\u672c\u5931\u8d25, \u5982\u679c\u9700\u8981 p2p \u53ef\u9009\u62e9 tinc.")))),Object(p.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4f1a\u901a\u8fc7 tpl \u6e32\u67d3"),Object(p.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 Envs \u8bbf\u95ee\u73af\u5883\u53d8\u91cf - \u4f8b\u5982 ",Object(p.b)("inlineCode",{parentName:"li"},"server_addr = {{.Envs.SERVER_ADDR}}")),Object(p.b)("li",{parentName:"ul"},"https \u901a\u8fc7 SNI \u8def\u7531")),Object(p.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(p.b)("div",{parentName:"div",className:"admonition-heading"},Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",{parentName:"h5",className:"admonition-icon"},Object(p.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(p.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(p.b)("div",{parentName:"div",className:"admonition-content"},Object(p.b)("ul",{parentName:"div"},Object(p.b)("li",{parentName:"ul"},"custom_domains \u4e0d\u80fd\u662f subdomain_host \u5b50\u57df\u540d",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u4f46 a.b.c.com \u4e5f\u4f1a\u8ba4\u4e3a\u662f c.com \u5b50\u57df\u540d"))),Object(p.b)("li",{parentName:"ul"},"subdomain \u4e0d\u80fd\u5305\u542b ",Object(p.b)("inlineCode",{parentName:"li"},".")," \u548c ",Object(p.b)("inlineCode",{parentName:"li"},"*")),Object(p.b)("li",{parentName:"ul"},"frps \u6ca1\u6709 reload \u56e0\u6b64\u4fee\u6539\u914d\u7f6e\u9700\u8981\u91cd\u542f"),Object(p.b)("li",{parentName:"ul"},"visitor \u7aef\u9700\u8981\u914d\u7f6e server_name")))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"https2https"),Object(p.b)("li",{parentName:"ul"},"https2http"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/fatedier/frp/blob/master/pkg/plugin/client/http2https.go"},"http2https"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u8bc1\u4e66 - \u5c06 https \u66b4\u9732\u4e3a http - type=http"),Object(p.b)("li",{parentName:"ul"},"plugin_local_addr"),Object(p.b)("li",{parentName:"ul"},"plugin_host_header_rewrite"),Object(p.b)("li",{parentName:"ul"},"plugin",Object(p.b)("em",{parentName:"li"},"header"))))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"frps.ini")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},"[common]\nbind_port = 7000\nkcp_bind_port = 7000\n# \u8bbe\u7f6e\u4e86 udp \u7aef\u53e3 udp \u76f8\u5173\u534f\u8bae\u624d\u80fd\u5de5\u4f5c\nbind_udp_port = 7001\n\n# \u5efa\u8bae\u4fee\u6539 Token - \u5426\u5219\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5728\u8be5\u8282\u70b9\u66b4\u9732\u7aef\u53e3\n# token=$(uuidgen)\n\n# \u652f\u6301 http \u548c https vhost \u7684\u5fc5\u987b\u914d\u7f6e\nsubdomain_host = example.local\nvhost_http_port = 8080\nvhost_https_port = 8443\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"frpc.ini")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},"[common]\n# frps \u5730\u5740\n# server_addr = x.x.x.x\nserver_port = 7000\n\n# \u9700\u8981\u66b4\u9732\u7684\u7aef\u53e3\n[ssh]\n# tcp, udp, http, https, stcp, sudp, xtcp, tcpmux\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\n# frps \u66b4\u9732\u7aef\u53e3\nremote_port = 6000\n")),Object(p.b)("h3",{id:"frpsini"},"frps.ini"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},'[common]\n# IPv6 \u683c\u5f0f "[::1]:80", "[ipv6-host]:http", "[ipv6-host%zone]:80"\nbind_addr = 0.0.0.0\nbind_port = 7000\n\n# \u7528\u4e8e\u8f85\u52a9\u6253\u901a NAT\nbind_udp_port = 7001\n\n# kcp udp \u7aef\u53e3 - \u672a\u8bbe\u7f6e\u5219\u4e0d\u5f00\u542f kcp\nkcp_bind_port = 7000\n\n# \b\u4ee3\u7406\u76d1\u542c\u7aef\u53e3 - \u9ed8\u8ba4\u4e3a bind_addr\n# proxy_bind_addr = 127.0.0.1\n\n# http \u865a\u62df\u4e3b\u673a\u7aef\u53e3 - \u53ef\u4ee5\u4e0e bind_port \u76f8\u540c\nvhost_http_port = 80\nvhost_https_port = 443\n\n# \u865a\u62df\u4e3b\u673a\u8d85\u65f6\u65f6\u95f4 - \u9ed8\u8ba4 60 \u79d2\n# vhost_http_timeout = 60\n\n# HTTP CONNECT \u7aef\u53e3 - \u9ed8\u8ba4 0\n# \u8bbe\u7f6e\u4e3a 0 \u5219\u4e0d\u4f1a\u505a\u591a\u8def\n# tcpmux_httpconnect_port = 1337\n\n# \u7ba1\u7406\u9762\u677f\ndashboard_addr = 0.0.0.0\ndashboard_port = 7500\n\n# \u9ed8\u8ba4 admin admin\ndashboard_user = admin\ndashboard_pwd = admin\n\n# \u662f\u5426\u5f00\u542f {dashboard_addr}:{dashboard_port}/metrics\nenable_prometheus = true\n\n# debug \u7528 - \u524d\u7aef assets \u76ee\u5f55\n# assets_dir = ./static\n\n# console \u6216\u65e5\u5fd7\u6587\u4ef6\nlog_file = ./frps.log\n\n# trace, debug, info, warn, error\nlog_level = info\n\nlog_max_days = 3\ndisable_log_color = false\n\n# \u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u5230 frpc\ndetailed_errors_to_client = true\n\n# frpc \u548c frps \u6388\u6743\u65b9\u5f0f - token, oidc\nauthentication_method = token\n\n# \u662f\u5426\u5bf9\u5fc3\u8df3\u9274\u6743\nauthenticate_heartbeats = false\n\n# frps \u65b0\u94fe\u63a5\u662f\u5426\u9274\u6743\nauthenticate_new_work_conns = false\n\n# auth token\ntoken = 12345678\n\n# jwt iss\noidc_issuer =\n# jwt aud\noidc_audience =\n# \u4e0d\u6821\u9a8c\u8fc7\u671f\noidc_skip_expiry_check = false\n# \u4e0d\u6821\u9a8c iss\noidc_skip_issuer_check = false\n\n# \u5fc3\u8df3\u8d85\u65f6 - \u9ed8\u8ba4 90 \u4e0d\u5efa\u8bae\u4fee\u6539\n# heartbeat_timeout = 90\n# \u7528\u6237\u94fe\u63a5\u8d85\u65f6 - \u9ed8\u8ba4 90 \u4e0d\u5efa\u8bae\u4fee\u6539\n# user_conn_timeout = 10\n\n# frpc \u5141\u8bb8\u7684\u7aef\u53e3\u8303\u56f4\n# allow_ports = 2000-3000,3001,3003,4000-50000\n\n# \u6700\u5927\u94fe\u63a5\u6c60\nmax_pool_count = 5\n# \u6bcf\u4e2a\u5ba2\u6237\u7aef\u5141\u8bb8\u7684\u7aef\u53e3\u6570 - 0 \u4e0d\u9650\u5236\nmax_ports_per_client = 0\n\n# \u5f3a\u5236 TLS \u94fe\u63a5\ntls_only = false\n# tls_cert_file = server.crt\n# tls_key_file = server.key\n# tls_trusted_ca_file = ca.crt\n\n# \u5982\u679c\u8bbe\u7f6e\u4e86\u5b50\u57df\u540d\uff0c\u7c7b\u578b\u4e3a http \u6216 https \u7684\u914d\u7f6e\u53ef\u4ee5\u901a\u8fc7 name.frps.com\n# subdomain_host = frps.com\n\n# tcp \u6d41\u591a\u8def\ntcp_mux = true\n\n# 404 \u9875\n# custom_404_page = /path/to/404.html\n\n# udp \u5305\u5927\u5c0f\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5e94\u8be5\u4fdd\u6301\u4e00\u81f4 - \u5f71\u54cd sudp \u4ee3\u7406\nudp_packet_size = 1500\n\n[plugin.user-manager]\naddr = 127.0.0.1:9000\npath = /handler\nops = Login\n\n[plugin.port-manager]\naddr = 127.0.0.1:9001\npath = /handler\nops = NewProxy\n')),Object(p.b)("h3",{id:"frpcini"},"frpc.ini"),Object(p.b)("h4",{id:"common"},"common"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},"[common]\nserver_addr = 0.0.0.0\nserver_port = 7000\n\n# \u901a\u8fc7 http,socks,ntlm \u4ee3\u7406\u8fde\u63a5 frps\n# \u652f\u6301\u73af\u5883\u53d8\u91cf, \u53ea\u652f\u6301 tcp \u7c7b\u578b\u534f\u8bae\n# http_proxy = http://user:passwd@192.168.1.128:8080\n# http_proxy = socks5://user:passwd@192.168.1.128:1080\n# http_proxy = ntlm://user:passwd@192.168.1.128:2080\n\nlog_file = ./frpc.log\nlog_level = info\nlog_max_days = 3\ndisable_log_color = false\n\nauthenticate_heartbeats = false\nauthenticate_new_work_conns = false\n\ntoken = 12345678\n\n# OIDC \u5ba2\u6237\u7aef\u914d\u7f6e\noidc_client_id =\noidc_client_secret =\n# OIDC Token Endpoint\noidc_token_endpoint_url =\n\n# jwt aud\noidc_audience =\n\n# frpc \u63a7\u5236\u7aef\u8bbf\u95ee\u9274\u6743 - \u652f\u6301 reload \u7b49\u64cd\u4f5c\nadmin_addr = 127.0.0.1\nadmin_port = 7400\nadmin_user = admin\nadmin_pwd = admin\n# assets_dir = ./static\n\n# \u94fe\u63a5\u6c60 - \u9884\u5148\u5efa\u7acb\u7684\u94fe\u63a5\u6570\npool_count = 0\n\ntcp_mux = true\n\n# \u4ee3\u7406\u540d\u5b57 - {user}.{proxy}\n# user = your_name\n\n# \u767b\u9646\u5931\u8d25\u9000\u51fa\nlogin_fail_exit = true\n\n# frps \u901a\u8baf\u534f\u8bae - tcp, kcp, websocket\nprotocol = tcp\n\n# \u5ba2\u6237\u7aef tls \u914d\u7f6e\ntls_enable = true\n# tls_cert_file = client.crt\n# tls_key_file = client.key\n# tls_trusted_ca_file = ca.crt\n\n# \u4fee\u6539 dns\n# dns_server = 8.8.8.8\n\n# \u751f\u6548\u914d\u7f6e - \u9ed8\u8ba4\u5168\u90e8\n# start = ssh,dns\n\n# heartbeat_interval = 30\n# heartbeat_timeout = 90\n\n# \u5ba2\u6237\u7aef\u989d\u5916\u5143\u4fe1\u606f\nmeta_var1 = 123\nmeta_var2 = 234\n\nudp_packet_size = 1500\n")),Object(p.b)("h4",{id:"proxy"},"proxy"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u6bcf\u4e2a section \u4e3a\u4e00\u4e2a\u4ee3\u7406\u914d\u7f6e"),Object(p.b)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u4e86 user \u5219\u540d\u5b57\u4e3a ",Object(p.b)("inlineCode",{parentName:"li"},"{user}.{proxy}"))),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"var"),Object(p.b)("th",{parentName:"tr",align:null},"default"),Object(p.b)("th",{parentName:"tr",align:null},"values"),Object(p.b)("th",{parentName:"tr",align:null},"desc"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"type"),Object(p.b)("td",{parentName:"tr",align:null},"tcp"),Object(p.b)("td",{parentName:"tr",align:null},"tcp,udp,http,https,stcp,xtcp"),Object(p.b)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u534f\u8bae\u7c7b\u578b")))),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},"[ssh]\ntype = tcp\n# \u88ab\u4ee3\u7406\u76ee\u6807\nlocal_ip = 127.0.0.1\nlocal_port = 22\n# \u5e26\u5bbd\u9650\u5236 - \u5355\u4f4d\u652f\u6301 KB, MB\nbandwidth_limit = 1MB\n# frps \u901a\u8baf\u52a0\u5bc6\nuse_encryption = false\n# \u534f\u8bae\u538b\u7f29\nuse_compression = false\n# frps \u66b4\u9732\u7aef\u53e3\n# 0 \u4e3a\u968f\u673a\u7aef\u53e3\nremote_port = 6001\n# \u76f8\u540c\u7ec4\u4f1a\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\ngroup = test_group\n# \u76f8\u540c\u7ec4 key \u76f8\u540c\ngroup_key = 123456\n# \u76d1\u63a7\u68c0\u67e5 - \u652f\u6301 tcp, http\nhealth_check_type = tcp\nhealth_check_timeout_s = 3\n# \u68c0\u67e5\u5931\u8d25 3 \u6b21 frps \u79fb\u9664\u4ee3\u7406\nhealth_check_max_failed = 3\nhealth_check_interval_s = 10\n# \u989d\u5916\u5143\u4fe1\u606f\u914d\u7f6e\nmeta_var1 = 123\nmeta_var2 = 234\n\n# range: \u751f\u6210\u6279\u91cf\u7aef\u53e3\n# \u751f\u6210 tcp_port_6010,tcp_port_6011\n[range:tcp_port]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 6010-6020,6022,6024-6028\nremote_port = 6010-6020,6022,6024-6028\nuse_encryption = false\nuse_compression = false\n\n# http \u652f\u6301\u901a\u8fc7\u5b50\u57df\u540d\u8bbf\u95ee\n# http://web01.subdomain.com\n[web01]\ntype = http\nlocal_ip = 127.0.0.1\nlocal_port = 80\nuse_encryption = false\nuse_compression = true\n# Basic auth\nhttp_user = admin\nhttp_pwd = admin\n# \u4fee\u6539\u57df\u540d\u540d\u5b57\nsubdomain = web01\n# \u81ea\u5b9a\u4e49\u57df\u540d\ncustom_domains = web02.yourdomain.com\n# http \u53ef\u4ee5\u6307\u5b9a\u5141\u8bb8\u7684 location\nlocations = /,/pic\n# \u4fee\u6539 Host\nhost_header_rewrite = example.com\n# \u81ea\u5b9a\u4e49 Header - \u4ee5\u4e0b\u914d\u7f6e\u53d1\u9001 X-From-Where: frp\nheader_X-From-Where = frp\nhealth_check_type = http\n# \u81ea\u5b9a\u4e49 http \u5065\u5eb7\u68c0\u67e5\u53c2\u6570\nhealth_check_url = /status\nhealth_check_interval_s = 10\nhealth_check_max_failed = 3\nhealth_check_timeout_s = 3\n\n# https \u4ee3\u7406\u534f\u8bae\u7248\u672c - v1, v2 \u6216\u4e0d\u6307\u5b9a\n# Proxy \u534f\u8bae\u80fd\u4f20\u8f93\u5ba2\u6237\u7aef\u4fe1\u606f\u4f46\u662f\u9700\u8981\u76ee\u6807\u7aef\u652f\u6301\n# proxy_protocol_version = v2\n\n# unix socket\n[plugin_unix_domain_socket]\ntype = tcp\nremote_port = 6003\n# \u5b9a\u4e49\u63d2\u4ef6\u540e local_ip \u548c local_port \u65e0\u610f\u4e49\n# \u7531\u63d2\u4ef6\u5904\u7406\u521b\u5efa\u7684\u94fe\u63a5\nplugin = unix_domain_socket\n# \u63d2\u4ef6\u53c2\u6570\nplugin_unix_path = /var/run/docker.sock\n\n[plugin_http_proxy]\ntype = tcp\nremote_port = 6004\nplugin = http_proxy\nplugin_http_user = abc\nplugin_http_passwd = abc\n\n[plugin_socks5]\ntype = tcp\nremote_port = 6005\nplugin = socks5\nplugin_user = abc\nplugin_passwd = abc\n\n[plugin_static_file]\ntype = tcp\nremote_port = 6006\nplugin = static_file\nplugin_local_path = /var/www/blog\nplugin_strip_prefix = static\nplugin_http_user = abc\nplugin_http_passwd = abc\n\n[plugin_https2http]\ntype = https\ncustom_domains = test.yourdomain.com\nplugin = https2http\nplugin_local_addr = 127.0.0.1:80\nplugin_crt_path = ./server.crt\nplugin_key_path = ./server.key\nplugin_host_header_rewrite = 127.0.0.1\nplugin_header_X-From-Where = frp\n\n[plugin_https2https]\ntype = https\ncustom_domains = test.yourdomain.com\nplugin = https2https\nplugin_local_addr = 127.0.0.1:443\nplugin_crt_path = ./server.crt\nplugin_key_path = ./server.key\nplugin_host_header_rewrite = 127.0.0.1\nplugin_header_X-From-Where = frp\n\n[plugin_http2https]\ntype = http\ncustom_domains = test.yourdomain.com\nplugin = http2https\nplugin_local_addr = 127.0.0.1:443\nplugin_host_header_rewrite = 127.0.0.1\nplugin_header_X-From-Where = frp\n\n[secret_tcp]\n# If the type is secret tcp, remote_port is useless\n# Who want to connect local port should deploy another frpc with stcp proxy and role is visitor\ntype = stcp\n# sk used for authentication for visitors\nsk = abcdefg\nlocal_ip = 127.0.0.1\nlocal_port = 22\nuse_encryption = false\nuse_compression = false\n\n# user of frpc should be same in both stcp server and stcp visitor\n[secret_tcp_visitor]\n# frpc role visitor -> frps -> frpc role server\nrole = visitor\ntype = stcp\n# the server name you want to visitor\nserver_name = secret_tcp\nsk = abcdefg\n# connect this address to visitor stcp server\nbind_addr = 127.0.0.1\nbind_port = 9000\nuse_encryption = false\nuse_compression = false\n\n[p2p_tcp]\ntype = xtcp\nsk = abcdefg\nlocal_ip = 127.0.0.1\nlocal_port = 22\nuse_encryption = false\nuse_compression = false\n\n[p2p_tcp_visitor]\nrole = visitor\ntype = xtcp\nserver_name = p2p_tcp\nsk = abcdefg\nbind_addr = 127.0.0.1\nbind_port = 9001\nuse_encryption = false\nuse_compression = false\n\n[tcpmuxhttpconnect]\ntype = tcpmux\nmultiplexer = httpconnect\nlocal_ip = 127.0.0.1\nlocal_port = 10701\ncustom_domains = tunnel1\n")),Object(p.b)("h2",{id:"cookbook"},"cookbook"),Object(p.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},"[kubernetes]\nlocal_ip = {{.Envs.KUBERNETES_SERVICE_HOST}}\nlocal_port = {{.Envs.KUBERNETES_SERVICE_PORT}}\n")),Object(p.b)("h3",{id:"https"},"https"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ini"},"[https]\ntype = https\nlocal_ip = example.com\nlocal_port = 443\ncustom_domains = example.com\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"curl -vik --resolve example.com:8443:127.0.0.1 https://example.com:8443/\n")),Object(p.b)("h3",{id:"auto-reload"},"auto reload"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},'# \u81ea\u52a8\u91cd\u8f7d - \u9700\u8981\u5f00\u542f admin \u7aef\u53e3\n# -e close_write \u53ea\u76d1\u542c\u5355\u4e2a\u4e8b\u4ef6 - k8s mount \u4e0d\u89e6\u53d1 close_write - \u56e0\u4e3a\u4e0d\u662f\u5199\u6587\u4ef6\n# \u4f1a\u89e6\u53d1 delete\n\nwhile inotifywait -e attrib /etc/frp/frpc.ini; do frpc -c /etc/frp/frpc.ini reload ; done\nwhile inotifywait -e attrib /etc/frp/frpc.ini; do echo frpc.ini changed ; done\n# \u76d1\u542c\u76ee\u5f55\ninotifywait -r -m --format "%e %f" /etc/frp\n\ninotifywait -e attrib -m --format "%e %f" /etc/frp/frpc.ini\n')),Object(p.b)("h1",{id:"faq"},"FAQ"),Object(p.b)("h2",{id:"get-sid-from-visitor-error"},"get sid from visitor error"),Object(p.b)("p",null,"nat \u7a7f\u900f\u7387\u4f4e, \u76ee\u524d\u6ca1\u6709\u89e3\u51b3\u65b9\u6848. \u5982\u679c\u9700\u8981 p2p \u5efa\u8bae\u9009\u62e9\u5176\u4ed6\u65b9\u6848, \u4f8b\u5982 tinc."),Object(p.b)("h2",{id:"start-new-visitor-connection-error-custom-listener-for--doesnt-exist"},"start new visitor connection error: custom listener for [] doesn't exist"),Object(p.b)("p",null,"visitor \u7aef\u51fa\u73b0, \u5e94\u8be5\u662f\u6ca1\u6709\u914d\u7f6e server_name"))}s.isMDXComponent=!0}}]);