(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{447:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),o=(n(0),n(586)),p={id:"nginx",title:"Nginx"},i={unversionedId:"devops/web/nginx",id:"devops/web/nginx",isDocsHomePage:!1,title:"Nginx",description:"NGINX",source:"@site/notes/devops/web/nginx.md",slug:"/devops/web/nginx",permalink:"/notes/devops/web/nginx",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/nginx.md",version:"current",sidebar:"docs",previous:{title:"fabio",permalink:"/notes/devops/service/fabio"},next:{title:"Caddy",permalink:"/notes/devops/web/caddy"}},c=[{value:"Tips",id:"tips",children:[{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",children:[]},{value:"Websocket \u53cd\u5411\u4ee3\u7406",id:"websocket-\u53cd\u5411\u4ee3\u7406",children:[]}]},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e-1",children:[{value:"proxy.nginx",id:"proxynginx",children:[]},{value:"proxy_ws.nginx",id:"proxy_wsnginx",children:[]},{value:"conf/proxy_ssl.nginx",id:"confproxy_sslnginx",children:[]},{value:"proxy_elb.nginx",id:"proxy_elbnginx",children:[]}]},{value:"pagespeed",id:"pagespeed",children:[]},{value:"\u4e3b\u8981\u5185\u5bb9",id:"\u4e3b\u8981\u5185\u5bb9",children:[{value:"\u7ba1\u7406",id:"\u7ba1\u7406",children:[]},{value:"\u4ee3\u7406\u548c\u7f13\u5b58",id:"\u4ee3\u7406\u548c\u7f13\u5b58",children:[]},{value:"\u91cd\u5199\u548c\u8bbf\u95ee\u63a7\u5236",id:"\u91cd\u5199\u548c\u8bbf\u95ee\u63a7\u5236",children:[]},{value:"\u7ba1\u7406\u51fa\u5165\u6d41",id:"\u7ba1\u7406\u51fa\u5165\u6d41",children:[]},{value:"\u6027\u80fd\u8c03\u4f18",id:"\u6027\u80fd\u8c03\u4f18",children:[]}]},{value:"listen",id:"listen",children:[]},{value:"stream",id:"stream",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"nginx"},"NGINX"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"/usr/share/nginx/html")," \u9759\u6001\u6587\u4ef6\u76ee\u5f55")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," \u914d\u7f6e\u76ee\u5f55")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/*.conf")," \u5176\u4ed6\u7684\u914d\u7f6e\u76ee\u5f55")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"/var/log/nginx/access.log")," \u65e5\u5fd7")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#variables"}),"\u6838\u5fc3\u53d8\u91cf"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u53ef\u5728\u65e5\u5fd7\u4e2d\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"$request_time $upstream_response_time")," \u6765\u8bb0\u5f55\u8bbf\u95ee\u4f7f\u7528\u65f6\u95f4")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_auth_request_module.html"}),"ngx_http_auth_request_module")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u53ef\u5c06\u6388\u6743\u4ea4\u7531\u5176\u4ed6\u8bf7\u6c42\u5904\u7406"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.shopware.com/blog/2015/03/02/sso-with-nginx-authrequest-module/"}),"\u6559\u7a0b")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Reference"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://openresty.org/download/agentzh-nginx-tutorials-en.html"}),"agentzh's Nginx Tutorials ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/"}),"Full Example Configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/modules/"}),"\u7b2c\u4e09\u65b9\u6a21\u5757\u5217\u8868")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://ngxpagespeed.com/"}),"Ngx PageSpeed")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://nginx.org/en/docs/"}),"Doc")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nginx.com/resources/admin-guide/reverse-proxy/"}),"NGINX Reverse Proxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/nbs-system/naxsi"}),"NAXSI"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"is an open-source, high performance, low rules maintenance WAF for NGINX"),Object(o.b)("li",{parentName:"ul"},"NAXSI means Nginx Anti XSS & SQL Injection."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/denji/homebrew-nginx"}),"denji/homebrew-nginx"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/soheilhy/8b94347ff8336d971ad0"}),"Virtual Hosts on nginx")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# brew \u5b89\u88c5\nbrew install nginx\n# \u67e5\u770b\u5df2\u5b89\u88c5\u6a21\u5757\nnginx -V 2>&1 | tr -- - '\\n' | grep 'module[^a-z=]'\n\n# \u57fa\u4e8e\u5f53\u524d\u76ee\u5f55\u542f\u52a8\nnginx -p $PWD -c nginx.conf -g 'daemon off;'\n")),Object(o.b)("h3",{id:"\u5e38\u7528\u914d\u7f6e"},"\u5e38\u7528\u914d\u7f6e"),Object(o.b)("h3",{id:"websocket-\u53cd\u5411\u4ee3\u7406"},"Websocket \u53cd\u5411\u4ee3\u7406"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),'location /chat/ {\n    proxy_pass http://backend;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n}\n')),Object(o.b)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5ba2\u6237\u7aef\u7684\u53c2\u6570"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"http {\n    map $http_upgrade $connection_upgrade {\n        default upgrade;\n        ''      close;\n    }\n\n    server {\n        # ...\n\n        location /chat/ {\n            proxy_pass http://backend;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n        }\n    }\n}\n")),Object(o.b)("p",null,"\u7b80\u5355\u66b4\u529b\u7684\u6620\u5c04"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"sites.conf")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"server {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    server_name $http_host;\n    root /sites/$http_host;\n    access_log logs/$http_host;\n    gzip on;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -v $PWD:/sites -v $PWD/sites.conf:/etc/nginx/conf.d/default.conf -p 8080:80 --name web wener/nginx\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),'# \u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\nlog_format combined \'$remote_addr - $remote_user [$time_local] \'\n                    \'"$request" $status $body_bytes_sent \'\n                    \'"$http_referer" "$http_user_agent"\';\n\n# \u6dfb\u52a0\u4e86\u538b\u7f29\u4fe1\u606f\u7684\u65e5\u5fd7\nlog_format compression \'$remote_addr - $remote_user [$time_local] \'\n                       \'"$request" $status $bytes_sent \'\n                       \'"$http_referer" "$http_user_agent" "$gzip_ratio"\';\n\n# \u6dfb\u52a0\u4e86\u54cd\u5e94\u65f6\u95f4\u7684\u65e5\u5fd7\nlog_format timed  \'$remote_addr - $remote_user [$time_local] \'\n                  \'"$request" $status $body_bytes_sent \'\n                  \'"$http_referer" "$http_user_agent"\'\n                  \'"$http_x_forwarded_for" $request_time $upstream_response_time\';\n\n')),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nginx.com/resources/admin-guide/logging-and-monitoring/"}),"https://www.nginx.com/resources/admin-guide/logging-and-monitoring/")),Object(o.b)("p",null,"$upstream_connect_time \u2013 The time spent on establishing a connection with an upstream server\n$upstream_header_time \u2013 The time between establishing a connection and receiving the first byte of the response header from the upstream server\n$upstream_response_time \u2013 The time between establishing a connection and receiving the last byte of the response body from the upstream server\n$request_time \u2013 The total time spent processing a request"),Object(o.b)("h2",{id:"\u5e38\u7528\u914d\u7f6e-1"},"\u5e38\u7528\u914d\u7f6e"),Object(o.b)("h3",{id:"proxynginx"},"proxy.nginx"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"proxy_redirect          off;\nproxy_set_header        Host                $host;\nproxy_set_header        X-Real-IP           $remote_addr;\nproxy_set_header        X-Forwarded-For     $proxy_add_x_forwarded_for;\nproxy_set_header        X-Forwarded-Proto   $scheme;\n# client_max_body_size    200m;\n# client_body_buffer_size 128k;\nproxy_connect_timeout   90;\nproxy_send_timeout      90;\nproxy_read_timeout      90;\nproxy_buffers           32 4k;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"location / {\n    proxy_pass http://mysvr;\n    include conf/proxy.nginx;\n}\n")),Object(o.b)("h3",{id:"proxy_wsnginx"},"proxy_ws.nginx"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 websocket")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"proxy_http_version 1.1;\nproxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection $connection_upgrade;\n\nproxy_set_header        Host                $host;\nproxy_set_header        X-Real-IP           $remote_addr;\nproxy_set_header        X-Forwarded-For     $proxy_add_x_forwarded_for;\nproxy_set_header        X-Forwarded-Proto   $scheme;\n\nproxy_buffering off;\nproxy_redirect  off;\nchunked_transfer_encoding off;\n\n# \u56e0\u4e3a\u662f ws, \u6240\u4ee5\u5c06\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\u7684\u957f\u4e00\u70b9\nproxy_read_timeout 600s;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"location /socket.io/ {\n    proxy_pass http://mysvr/socket.io/;\n    include conf/proxy_ws.nginx;\n}\n")),Object(o.b)("h3",{id:"confproxy_sslnginx"},"conf/proxy_ssl.nginx"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 SSL"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.nginx.com/nginx/admin-guide/security-controls/securing-http-traffic-upstream/"}),"Securing HTTP Traffic to Upstream Servers")),Object(o.b)("li",{parentName:"ul"},"\u8fd8\u662f\u9700\u8981\u8bc1\u4e66\u4fe1\u606f, \u56e0\u4e3a SNI")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"ssl_session_cache    shared:SSL:1m;\nssl_session_timeout  10m;\nssl_certificate /etc/nginx/ssl/example.com.crt;\nssl_certificate_key /etc/nginx/ssl/example.com.key;\nssl_verify_client off;\nssl_protocols        SSLv3 TLSv1 TLSv1.1 TLSv1.2;\nssl_ciphers RC4:HIGH:!aNULL:!MD5;\nssl_prefer_server_ciphers on;\n")),Object(o.b)("h3",{id:"proxy_elbnginx"},"proxy_elb.nginx"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/start/topics/examples/forwarded/"}),"https://www.nginx.com/resources/wiki/start/topics/examples/forwarded/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://scottwb.com/blog/2013/10/28/always-on-https-with-nginx-behind-an-elb/"}),"http://scottwb.com/blog/2013/10/28/always-on-https-with-nginx-behind-an-elb/"))),Object(o.b)("h2",{id:"pagespeed"},"pagespeed"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-pagespeed-ngx"}),"https://github.com/apache/incubator-pagespeed-ngx")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sitespeedio/sitespeed.io"}),"https://github.com/sitespeedio/sitespeed.io")),Object(o.b)("p",null,"Build ngx_pagespeed From Source\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.modpagespeed.com/doc/build_ngx_pagespeed_from_source"}),"https://www.modpagespeed.com/doc/build_ngx_pagespeed_from_source")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Google_PageSpeed_Tools"}),"https://en.wikipedia.org/wiki/Google_PageSpeed_Tools")),Object(o.b)("h2",{id:"\u4e3b\u8981\u5185\u5bb9"},"\u4e3b\u8981\u5185\u5bb9"),Object(o.b)("h3",{id:"\u7ba1\u7406"},"\u7ba1\u7406"),Object(o.b)("h3",{id:"\u4ee3\u7406\u548c\u7f13\u5b58"},"\u4ee3\u7406\u548c\u7f13\u5b58"),Object(o.b)("h3",{id:"\u91cd\u5199\u548c\u8bbf\u95ee\u63a7\u5236"},"\u91cd\u5199\u548c\u8bbf\u95ee\u63a7\u5236"),Object(o.b)("h3",{id:"\u7ba1\u7406\u51fa\u5165\u6d41"},"\u7ba1\u7406\u51fa\u5165\u6d41"),Object(o.b)("h3",{id:"\u6027\u80fd\u8c03\u4f18"},"\u6027\u80fd\u8c03\u4f18"),Object(o.b)("h2",{id:"listen"},"listen"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#listen"}),"http://nginx.org/en/docs/http/ngx_http_core_module.html#listen")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"listen address[:port] [default_server] [ssl] [http2 | spdy] [proxy_protocol] [setfib=number] [fastopen=number] [backlog=number] [rcvbuf=size] [sndbuf=size] [accept_filter=filter] [deferred] [bind] [ipv6only=on|off] [reuseport] [so_keepalive=on|off|[keepidle]:[keepintvl]:[keepcnt]];\nlisten port [default_server] [ssl] [http2 | spdy] [proxy_protocol] [setfib=number] [fastopen=number] [backlog=number] [rcvbuf=size] [sndbuf=size] [accept_filter=filter] [deferred] [bind] [ipv6only=on|off] [reuseport] [so_keepalive=on|off|[keepidle]:[keepintvl]:[keepcnt]];\nlisten unix:path [default_server] [ssl] [http2 | spdy] [proxy_protocol] [backlog=number] [rcvbuf=size] [sndbuf=size] [accept_filter=filter] [deferred] [bind] [so_keepalive=on|off|[keepidle]:[keepintvl]:[keepcnt]];\n")),Object(o.b)("h2",{id:"stream"},"stream"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://nginx.org/en/docs/stream/ngx_stream_core_module.html"}),"ngx_stream_core_module")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u81ea 1.9.0"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html"}),"ngx_stream_proxy_module")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"allows proxying data streams over TCP, UDP and UNIX-domain sockets."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nginx.com/blog/tcp-load-balancing-udp-load-balancing-nginx-tips-tricks/"}),"TCP/UDP Load Balancing with NGINX: Overview, Tips, and Tricks")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nginx.com/blog/announcing-udp-load-balancing/"}),"Announcing UDP Load Balancing in NGINX"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"March 15, 2016")))))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"# Load balance UDP-based DNS traffic across two servers\nstream {\n    upstream dns_upstreams {\n        server 192.168.136.130:53;\n        server 192.168.136.131:53;\n    }\n\n    server {\n        listen 53 udp;\n        proxy_pass dns_upstreams;\n        proxy_timeout 1s;\n        proxy_responses 1;\n        error_log logs/dns.log;\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ngx_stream_core_module\nngx_stream_access_module\nngx_stream_geo_module\nngx_stream_geoip_module\nngx_stream_js_module\nngx_stream_limit_conn_module\nngx_stream_log_module\nngx_stream_map_module\nngx_stream_proxy_module\nngx_stream_realip_module\nngx_stream_return_module\nngx_stream_split_clients_module\nngx_stream_ssl_module\nngx_stream_ssl_preread_module\nngx_stream_upstream_module\nngx_stream_upstream_hc_module\n")),Object(o.b)("p",null,"Choosing an NGINX Plus Load\u2011Balancing Technique\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nginx.com/blog/choosing-nginx-plus-load-balancing-techniques/"}),"https://www.nginx.com/blog/choosing-nginx-plus-load-balancing-techniques/")),Object(o.b)("p",null,"proxy_responses\n\u63a7\u5236 Nginx \u5e94\u8be5\u7b49\u5f85\u4e0a\u6e38\u8fd4\u56de\u591a\u5c11\u4fe1\u606f"),Object(o.b)("p",null,"\u5bf9\u4e8e\u5355 udp \u4f1a\u8bdd, \u4e0d\u505a\u7279\u6b8a\u5904\u7406\u65f6, nginx \u80fd\u591f\u4ece\u4e0a\u6e38\u63a5\u6536\u5230\u591a\u4e2a\u5305, \u4f46\u53ea\u4f1a\u4ece\u4e0b\u6e38\u63a5\u6536\u5230\u4e00\u4e2a\u5305.\n\u56e0\u4e3a\u4e0b\u4e00\u6b21\u4ece\u4e0b\u6e38\u63a5\u6536\u5230\u7684\u5305\u4f1a\u8ba4\u4e3a\u662f\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd. \u5bfc\u81f4 udp \u9002\u7528\u4e8e\u4e0b\u8f7d\u4f46\u4e0d\u9002\u7528\u4e8e\u4e0a\u4f20."),Object(o.b)("p",null,"10 Tips for 10x Application Performance\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nginx.com/blog/10-tips-for-10x-application-performance/"}),"https://www.nginx.com/blog/10-tips-for-10x-application-performance/")),Object(o.b)("p",null,"IP Transparency and Direct Server Return with NGINX and NGINX Plus as Transparent Proxy\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nginx.com/blog/ip-transparency-direct-server-return-nginx-plus-transparent-proxy/"}),"https://www.nginx.com/blog/ip-transparency-direct-server-return-nginx-plus-transparent-proxy/")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kernel.org/doc/Documentation/networking/tproxy.txt"}),"https://www.kernel.org/doc/Documentation/networking/tproxy.txt"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/benoitc/tproxy"}),"https://github.com/benoitc/tproxy")),Object(o.b)("p",null,"tproxy \u8981\u6c42 upstream \u4fee\u6539\u9ed8\u8ba4\u8def\u7531, \u4fdd\u8bc1\u6240\u6709\u8bf7\u6c42\u90fd\u80fd\u88ab\u8def\u7531\u56de\u53bb. \u56e0\u6b64\u5728 VPN \u7684\u60c5\u51b5\u4e0b\u4f1a\u6709\u70b9\u5c34\u5c2c"),Object(o.b)("p",null,"PROXY 10.0.1.1, 172.16.0.1"),Object(o.b)("p",null,"SERVER 10.0.2.1, 192.168.1.2"),Object(o.b)("p",null,"\u4ee3\u7406\u670d\u52a1\u5668\u901a\u8fc7 10.0.0.0/16 \u548c\u540e\u7aef\u670d\u52a1\u5668\u901a\u8baf, SERVER LAN \u5730\u5740\u4e3a 192.168.1.0/24, \u8981\u6c42 SERVER \u80fd\u6b63\u786e\u628a\u5305\u5bfc\u56de\u9700\u4fee\u6539\u9ed8\u8ba4\u8def\u7531\u4e3a 10.0.1.1, \u56e0\u6b64\u53ea\u80fd\u6709\u4e00\u4e2a\u524d\u7aef\u7684\u53cd\u5411\u4ee3\u7406, \u8fd8\u662f\u975e\u5e38\u7684\u4e0d\u65b9\u4fbf\u4f7f\u7528"),Object(o.b)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361, \u8fd8\u9700\u8981\u5f00\u542f\u8f6c\u53d1."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# server\nroute del default gw 172.16.0.1\nroute add default gw 10.0.1.1\nroute -n\n\n# \u6216\u8005\u4f7f\u7528 ip \u547d\u4ee4\nip ro del default via 172.16.0.1 dev eth0\n\n# proxy\nip rule add fwmark 1 lookup 100\nip route add local 0.0.0.0/0 dev lo table 100\n# \u9488\u5bf9 80 \u7aef\u53e3\niptables -t mangle -A PREROUTING -p tcp -s 10.0.0.0/16 --sport 80 -j MARK --set-xmark 0x1/0xffffffff\n\niptables -t mangle -L\n")))}s.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(p,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);