/*! For license information please see bf3833bd.76753e77.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15836],{48104:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(11527),c=s(47214);const t={title:"\u53cd\u5411\u4ee3\u7406\u7f13\u5b58"},i="Reverse proxy cache",l={id:"devops/web/proxy-cache",title:"\u53cd\u5411\u4ee3\u7406\u7f13\u5b58",description:"\u63a8\u8350 nginx - poor man's cdn.",source:"@site/../notes/devops/web/proxy-cache.md",sourceDirName:"devops/web",slug:"/devops/web/proxy-cache",permalink:"/notes/devops/web/proxy-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/proxy-cache.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680629704,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{title:"\u53cd\u5411\u4ee3\u7406\u7f13\u5b58"},sidebar:"docs",previous:{title:"openresty",permalink:"/notes/devops/web/nginx/openresty"},next:{title:"Proxy FAQ",permalink:"/notes/devops/web/proxy-faq"}},h={},a=[{value:"Varnish",id:"varnish",level:2},{value:"NGINX",id:"nginx",level:2},{value:"HAProxy",id:"haproxy",level:2},{value:"HTTP Cache \u7c7b\u578b",id:"http-cache-types",level:2},{value:"Caching",id:"caching",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"reverse-proxy-cache",children:"Reverse proxy cache"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u63a8\u8350 nginx - poor man's cdn."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["varnish\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u5185\u5b58\u7f13\u5b58"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef mmap \u4e3a\u6587\u4ef6 - \u6240\u6709\u7f13\u5b58\u5728\u4e00\u8d77 - \u91cd\u542f\u4f1a\u5931\u6548"}),"\n",(0,r.jsx)(n.li,{children:"pro \u7248\u672c\u66f4\u591a\u5b58\u50a8\u9009\u9879"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["nginx\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"proxy_cache_path"}),"\n",(0,r.jsx)(n.li,{children:"\u9010\u6587\u4ef6\u7f13\u5b58 - \u91cd\u542f\u540e\u8fd8\u662f\u6709\u6548"}),"\n",(0,r.jsx)(n.li,{children:"\u6587\u4ef6\u540d\u4e3a md5(cache_key)"}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4 levels=3"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["haproxy - cache\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u7f13\u5b58"}),"\n",(0,r.jsx)(n.li,{children:"total-max-size"}),"\n",(0,r.jsx)(n.li,{children:"max-object-size"}),"\n",(0,r.jsx)(n.li,{children:"max-age"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http-request cache-use mycache"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http-response cache-store mycache"})}),"\n",(0,r.jsxs)(n.li,{children:["Cache \u8981\u6c42\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP 1.1 GET 200"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["HTTP cache improvements ",(0,r.jsx)(n.a,{href:"https://github.com/haproxy/haproxy/issues/214",children:"haproxy#214"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/jiangwenyuan/nuster",children:"jiangwenyuan/nuster"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"varnish",children:"Varnish"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"varnishd -a 127.0.0.1:8080 -b 185.199.109.153:80 -T 127.0.0.1:6082 -d -S $PWD/varnish-secret\n# \u56e0\u4e3a -d \u6240\u4ee5\u9700\u8981\u624b\u52a8\u542f\u52a8\nvarnishadm -S $PWD/varnish-secret -T 127.0.0.1:6082 start\n\ncurl -H 'Host: wener.me' 127.0.0.1:8080\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nginx",children:"NGINX"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"user nginx;\n\nworker_processes auto;\npcre_jit on;\nerror_log /dev/stdout warn;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n  # https://serverfault.com/a/912897\n  # HIT, MISS, BYPASS, EXPIRED\n  log_format cache_st '$remote_addr - $upstream_cache_status [$time_local]  '\n                    '\"$request\" $status $body_bytes_sent '\n                    '\"$http_referer\" \"$http_user_agent\"';\n  access_log /dev/stdout cache_st;\n\n  proxy_cache_path  /tmp/nginx-cache levels=1:2 keys_zone=static:8m max_size=1000m inactive=600m;\n  proxy_temp_path /tmp/nginx-cache-tmp;\n\n\n  server {\n    listen 8080;\n\n    location / {\n      proxy_pass http://185.199.109.153;\n      proxy_set_header Host $host;\n      proxy_cache static;\n      proxy_cache_valid  200 302  60m;\n      proxy_cache_valid  404      1m;\n    }\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nginx -c $PWD/nginx.conf -g 'daemon off;'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.sheshbabu.com/posts/nginx-caching-proxy/",children:"https://www.sheshbabu.com/posts/nginx-caching-proxy/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"haproxy",children:"HAProxy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haproxy",children:"frontend http\n  mode http\n  bind 0.0.0.0:8080 name v4\n  default_backend gh\nbackend gh\n  http-request cache-use mycache\n  http-response cache-store mycache\n  server svr 185.199.109.153:80 check\n\ncache mycache\n  total-max-size 4095   # MB\n  max-object-size 10000 # bytes\n  max-age 30            # seconds\n"})}),"\n",(0,r.jsx)(n.h2,{id:"http-cache-types",children:"HTTP Cache \u7c7b\u578b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Page cache - \u901a\u5e38\u4e3a HTML"}),"\n",(0,r.jsx)(n.li,{children:"Browser cache - \u8d44\u6e90"}),"\n",(0,r.jsx)(n.li,{children:"Object cache - \u6570\u636e\u5e93\u67e5\u8be2"}),"\n",(0,r.jsx)(n.li,{children:"Bytecode cache - PHP, JS"}),"\n",(0,r.jsx)(n.li,{children:"CDN cache - HTML, Image, CSS, JS"}),"\n",(0,r.jsx)(n.li,{children:"Reverse proxy cache - \u53d1\u751f\u5728\u53cd\u5411\u4ee3\u7406\u5c42"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"caching",children:"Caching"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cloudflare\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u57fa\u4e8e extension \u7f13\u5b58\u800c\u4e0d\u662f mime\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u4e0d\u7f13\u5b58 html"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53ef\u901a\u8fc7 Page Rule \u6dfb\u52a0\u7f13\u5b58\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7f13\u5b58\u6240\u6709 - Page Rule\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"charts.wener.tech/*"})}),"\n",(0,r.jsx)(n.li,{children:"Cache Level: Cache Everything"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u4f1a\u7f13\u5b58 robots.txt"}),"\n",(0,r.jsxs)(n.li,{children:["CF-Cache-Status\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DYNAMIC - \u8ba4\u4e3a\u662f\u52a8\u6001\u5185\u5bb9\uff0c\u4e0d\u4f1a\u7f13\u5b58"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -I -H 'Host: charts.wener.tech' 185.199.108.153/wener/index.yaml\ncurl -I https://charts.wener.tech/wener/index.yaml\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Github Pages\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"CacheControl: max-age=600"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://gtmetrix.com/",children:"https://gtmetrix.com/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://web.dev/measure/",children:"https://web.dev/measure/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pagespeed.web.dev/",children:"https://pagespeed.web.dev/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.cloudflare.com/cache/about/default-cache-behavior/",children:"https://developers.cloudflare.com/cache/about/default-cache-behavior/"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},3354:(e,n,s)=>{var r=s(50959),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,t={},a=null,o=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,r)&&!h.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:c,type:e,key:a,ref:o,props:t,_owner:l.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var r=s(50959);const c={},t=r.createContext(c);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);