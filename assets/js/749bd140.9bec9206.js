"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69381],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4916:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),i=["components"],l={title:"Nginx \u5e38\u7528\u914d\u7f6e",tags:["Cookbook"]},p="Nginx \u5e38\u7528\u914d\u7f6e",s={unversionedId:"devops/web/nginx-cookbook",id:"devops/web/nginx-cookbook",title:"Nginx \u5e38\u7528\u914d\u7f6e",description:"\u6ce8\u610f",source:"@site/../notes/devops/web/nginx-cookbook.md",sourceDirName:"devops/web",slug:"/devops/web/nginx-cookbook",permalink:"/notes/devops/web/nginx-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/web/nginx-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Nginx \u5e38\u7528\u914d\u7f6e",tags:["Cookbook"]},sidebar:"docs",previous:{title:"lighttpd",permalink:"/notes/devops/web/lighttpd"},next:{title:"Nginx FAQ",permalink:"/notes/devops/web/nginx-faq"}},u={},c=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2},{value:"\u4e3b\u673a\u6620\u5c04",id:"\u4e3b\u673a\u6620\u5c04",level:2},{value:"\u5b50\u57df\u540d\u91cd\u5199",id:"\u5b50\u57df\u540d\u91cd\u5199",level:2},{value:"\u66ff\u4ee3\u57df\u540d",id:"\u66ff\u4ee3\u57df\u540d",level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:2},{value:"\u6d41\u914d\u7f6e",id:"\u6d41\u914d\u7f6e",level:2},{value:"Nginx \u5e38\u7528\u914d\u7f6e",id:"nginx-\u5e38\u7528\u914d\u7f6e-1",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx-\u5e38\u7528\u914d\u7f6e"},"Nginx \u5e38\u7528\u914d\u7f6e"),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://wiki.nginx.org/HttpRewriteModule#rewrite"},"rewrite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u66ff\u4ee3\u5b57\u7b26\u4e32\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"http://")," \u6253\u5934\uff0c\u90a3\u4e48\u5ba2\u6237\u7aef\u4f1a\u88ab\u91cd\u5b9a\u5411\uff0c\u4e4b\u540e\u7684 rewrite \u90fd\u4f1a\u88ab\u4e2d\u6b62"))),(0,a.kt)("li",{parentName:"ul"},"auth",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://oauth2-proxy.github.io/oauth2-proxy/configuration#configuring-for-use-with-the-nginx-auth_request-directive"},"https://oauth2-proxy.github.io/oauth2-proxy/configuration#configuring-for-use-with-the-nginx-auth_request-directive"))))),(0,a.kt)("h2",{id:"\u4e3b\u673a\u6620\u5c04"},"\u4e3b\u673a\u6620\u5c04"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_map_module.html#map"},"map"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"map $http_host $served_host {\n    default $http_host;\n    beta.example.com www.example.com;\n}\n\nserver {\n    # [...]\n\n    location / {\n        proxy_pass http://rubyapp.com;\n        proxy_set_header Host $served_host;\n    }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"map $request_uri $redirect_uri {\n  ~/(?<lang>(en|de|fr))/oldname    /$lang/newname;\n}\nmap $http_host $served_host {\n    default $http_host;\n    ~(?<name>[^.]+).example.com $name.example.net;\n}\n")),(0,a.kt)("h2",{id:"\u5b50\u57df\u540d\u91cd\u5199"},"\u5b50\u57df\u540d\u91cd\u5199"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://www.*.domain.com")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"http://*.domain.com"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"#1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"if ($host ~* www\\.(.*)) {\n  set $host_without_www $1;\n  rewrite ^(.*)$ http://$host_without_www$1 permanent; # $1 contains '/foo', not 'www.mydomain.com/foo'\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"#2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  server_name www.domain.com;\n  rewrite ^ http://domain.com$request_uri permanent;\n}\n")),(0,a.kt)("h2",{id:"\u66ff\u4ee3\u57df\u540d"},"\u66ff\u4ee3\u57df\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server\n{\n  listen 80;\n  server_name a.com b.com c.com;\n\n  location ~* ^/comment/(.*) {\n    proxy_set_header HOST shared.com;\n    # $1 - stores capture from the location on top\n    # $is_args will return ? if there are query params\n    # $args stores query params\n    proxy_pass http://comment/$1$is_args$args;\n  }\n\n}\n\nserver {\n  listen 80;\n  server shared.com;\n\n  location / {\n    # Proxy to some app handler\n  }\n}\n\nupstream comment {\n  server localhost; # or any other host essentially\n}\n")),(0,a.kt)("h2",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"user nginx;\n\nworker_processes auto;\npcre_jit on;\nerror_log /var/log/nginx/error.log warn;\ninclude /etc/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\n# \u8def\u5f84\u91cd\u5b9a\u5411\u4e3a\u53c2\u6570\nrewrite ^/article/(.*)$ /article.php?id=$1 last;\n")),(0,a.kt)("h2",{id:"\u6d41\u914d\u7f6e"},"\u6d41\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"stream {\n    upstream quic_upstreams {\n        server 10.66.2.1:443;\n    }\n\n    upstream http_upstreams {\n        server 10.66.2.1:80;\n    }\n\n    upstream https_upstreams {\n        server 10.66.2.1:443;\n    }\n\n    server {\n        listen 443 udp;\n        proxy_pass quic_upstreams;\n        proxy_timeout 1s;\n        proxy_responses 1;\n        error_log logs/udp.log;\n    }\n    server {\n        listen 80;\n        proxy_pass http_upstreams;\n        error_log logs/http.log;\n    }\n    server {\n        listen 443;\n        proxy_pass https_upstreams;\n        error_log logs/https.log;\n    }\n}\n")),(0,a.kt)("h2",{id:"nginx-\u5e38\u7528\u914d\u7f6e-1"},"Nginx \u5e38\u7528\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n  add_header Content-Type text/html;\n  return 200 'Glad you are here!';\n}\n")))}d.isMDXComponent=!0}}]);