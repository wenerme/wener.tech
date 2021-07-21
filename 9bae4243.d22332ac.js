(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1151:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return t?o.a.createElement(d,c(c({ref:n},l),{},{components:t})):o.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},725:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(1151)),i={id:"nginx-cookbook",title:"Nginx \u5e38\u7528\u914d\u7f6e"},c={unversionedId:"devops/web/nginx-cookbook",id:"devops/web/nginx-cookbook",isDocsHomePage:!1,title:"Nginx \u5e38\u7528\u914d\u7f6e",description:"\u6ce8\u610f",source:"@site/notes/devops/web/nginx-cookbook.md",slug:"/devops/web/nginx-cookbook",permalink:"/notes/devops/web/nginx-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/nginx-cookbook.md",version:"current",sidebar:"docs",previous:{title:"HAProxy",permalink:"/notes/devops/web/haproxy"},next:{title:"nginx-faq",permalink:"/notes/devops/web/nginx-faq"}},p=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]},{value:"\u4e3b\u673a\u6620\u5c04",id:"\u4e3b\u673a\u6620\u5c04",children:[]},{value:"\u5b50\u57df\u540d\u91cd\u5199",id:"\u5b50\u57df\u540d\u91cd\u5199",children:[]},{value:"\u66ff\u4ee3\u57df\u540d",id:"\u66ff\u4ee3\u57df\u540d",children:[]},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[]},{value:"\u6d41\u914d\u7f6e",id:"\u6d41\u914d\u7f6e",children:[]},{value:"Nginx \u5e38\u7528\u914d\u7f6e",id:"nginx-\u5e38\u7528\u914d\u7f6e",children:[]}],l={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://wiki.nginx.org/HttpRewriteModule#rewrite"},"rewrite"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u66ff\u4ee3\u5b57\u7b26\u4e32\u662f ",Object(a.b)("inlineCode",{parentName:"li"},"http://")," \u6253\u5934\uff0c\u90a3\u4e48\u5ba2\u6237\u7aef\u4f1a\u88ab\u91cd\u5b9a\u5411\uff0c\u4e4b\u540e\u7684 rewrite \u90fd\u4f1a\u88ab\u4e2d\u6b62"))),Object(a.b)("li",{parentName:"ul"},"auth",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://oauth2-proxy.github.io/oauth2-proxy/configuration#configuring-for-use-with-the-nginx-auth_request-directive"},"https://oauth2-proxy.github.io/oauth2-proxy/configuration#configuring-for-use-with-the-nginx-auth_request-directive"))))),Object(a.b)("h2",{id:"\u4e3b\u673a\u6620\u5c04"},"\u4e3b\u673a\u6620\u5c04"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_map_module.html#map"},"map"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"map $http_host $served_host {\n    default $http_host;\n    beta.example.com www.example.com;\n}\n\nserver {\n    # [...]\n\n    location / {\n        proxy_pass http://rubyapp.com;\n        proxy_set_header Host $served_host;\n    }\n}\n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"map $request_uri $redirect_uri {\n  ~/(?<lang>(en|de|fr))/oldname    /$lang/newname;\n}\nmap $http_host $served_host {\n    default $http_host;\n    ~(?<name>[^.]+).example.com $name.example.net;\n}\n")),Object(a.b)("h2",{id:"\u5b50\u57df\u540d\u91cd\u5199"},"\u5b50\u57df\u540d\u91cd\u5199"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"http://www.*.domain.com")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"http://*.domain.com"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"#1")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"if ($host ~* www\\.(.*)) {\n  set $host_without_www $1;\n  rewrite ^(.*)$ http://$host_without_www$1 permanent; # $1 contains '/foo', not 'www.mydomain.com/foo'\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"#2")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"server {\n  server_name www.domain.com;\n  rewrite ^ http://domain.com$request_uri permanent;\n}\n")),Object(a.b)("h2",{id:"\u66ff\u4ee3\u57df\u540d"},"\u66ff\u4ee3\u57df\u540d"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"server\n{\n  listen 80; \n  server_name a.com b.com c.com;\n\n  location ~* ^/comment/(.*) {\n    proxy_set_header HOST shared.com;\n    # $1 - stores capture from the location on top\n    # $is_args will return ? if there are query params\n    # $args stores query params\n    proxy_pass http://comment/$1$is_args$args;\n  }\n\n}\n\nserver {\n  listen 80;\n  server shared.com;\n\n  location / {\n    # Proxy to some app handler\n  }\n}\n\nupstream comment {\n  server localhost; # or any other host essentially\n}\n")),Object(a.b)("h2",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"user nginx;\n\nworker_processes auto;\npcre_jit on;\nerror_log /var/log/nginx/error.log warn;\ninclude /etc/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\n# \u8def\u5f84\u91cd\u5b9a\u5411\u4e3a\u53c2\u6570\nrewrite ^/article/(.*)$ /article.php?id=$1 last;\n")),Object(a.b)("h2",{id:"\u6d41\u914d\u7f6e"},"\u6d41\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"stream {\n    upstream quic_upstreams {\n        server 10.66.2.1:443;\n    }\n\n    upstream http_upstreams {\n        server 10.66.2.1:80;\n    }\n\n    upstream https_upstreams {\n        server 10.66.2.1:443;\n    }\n\n    server {\n        listen 443 udp;\n        proxy_pass quic_upstreams;\n        proxy_timeout 1s;\n        proxy_responses 1;\n        error_log logs/udp.log;\n    }\n    server {\n        listen 80;\n        proxy_pass http_upstreams;\n        error_log logs/http.log;\n    }\n    server {\n        listen 443;\n        proxy_pass https_upstreams;\n        error_log logs/https.log;\n    }\n}\n")),Object(a.b)("h2",{id:"nginx-\u5e38\u7528\u914d\u7f6e"},"Nginx \u5e38\u7528\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nginx"},"location / {\n  add_header Content-Type text/html;\n  return 200 'Glad you are here!';\n}\n")))}s.isMDXComponent=!0}}]);