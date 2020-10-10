(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{391:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),c=(n(0),n(618)),o={id:"caddy",title:"Caddy"},l={id:"devops/web/caddy",title:"Caddy",description:"# Caddy",source:"@site/../tricks/devops/web/caddy.md",permalink:"/notes/devops/web/caddy",sidebar:"docs",previous:{title:"Nginx",permalink:"/notes/devops/web/nginx"},next:{title:"Traefik",permalink:"/notes/devops/web/traefik"}},i=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u4fe1\u53f7\u91cf\u5904\u7406",id:"\u4fe1\u53f7\u91cf\u5904\u7406",children:[]},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",children:[]},{value:"Example",id:"example",children:[]},{value:"CHANGELOG",id:"changelog",children:[{value:"0.10.12",id:"01012",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u7981\u7528\u91cd\u5b9a\u5411 http \u5230 https",id:"\u7981\u7528\u91cd\u5b9a\u5411-http-\u5230-https",children:[]},{value:"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26",id:"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26",children:[]}]}],b={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"caddy"},"Caddy"),Object(c.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mholt/caddy/issues/1806"}),"#1806")," - Watch Caddyfile for changes")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# macOS \u5b89\u88c5\n# \u4e0d\u4f1a\u5b89\u88c5\u63d2\u4ef6\nbrew install caddy\n\n# \u76f4\u63a5\u542f\u52a8, \u4f1a\u4f7f\u7528\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 Caddyfile \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\ncaddy\n# \u67e5\u770b\u5b89\u88c5\u7684\u63d2\u4ef6\ncaddy -plugins\n# \u9a8c\u8bc1\u914d\u7f6e\ncaddy -validate -conf Caddyfile\n\n# Docker \u542f\u52a8\n# \u914d\u7f6e /etc/Caddyfile \n# root /srv\n# cert /root/.caddy \u6216 CADDYPATH\n# \u8be5\u955c\u50cf\u4e0d\u5305\u542b\u63d2\u4ef6, \u63d2\u4ef6\u9700\u8981\u81ea\u5df1\u6784\u5efa\ndocker run --rm -it -v $PWD:/srv -p 2015:2015 abiosoft/caddy\n# \u5305\u542b\u6240\u6709\u63d2\u4ef6\n# \u5176\u4ed6\u6807\u7b7e: latest \u57fa\u4e8e Alpine, php \u6dfb\u52a0\u4e86 PHP \u652f\u6301\ndocker run --rm -it -v $PWD:/srv -p 2015:2015 wener/caddy:full\n# \u9a8c\u8bc1\u914d\u7f6e\ndocker exec web caddy -validate -conf /caddy/Caddyfile\n\n# \u4ece\u547d\u4ee4\u884c\u76f4\u63a5\u6dfb\u52a0\u914d\u7f6e\ncaddy -port 8080 browse markdown "log access.log"\n# \u91cd\u8f7d\u914d\u7f6e\nkill -USR1 PID\n# \u4f7f\u7528 Docker \u91cd\u8f7d\ndocker kill -s USR1 web\n\n# \u5e38\u7528\u7684\u914d\u7f6e\nmkdir root\ncaddy -conf Caddyfile\n')),Object(c.b)("h2",{id:"\u4fe1\u53f7\u91cf\u5904\u7406"},"\u4fe1\u53f7\u91cf\u5904\u7406"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Signal"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Behavior"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TERM"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Forcefully exits the process without executing shutdown hooks.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'Forcefully exits the process after executing shutdown hooks. This is the only "signal" that works on Windows (Ctrl+C). A second SIGINT forces immediate termination, even if shutdown hooks are still running.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"HUP"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Gracefully stops the server, but does not execute shutdown hooks.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QUIT"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Gracefully stops the server after executing shutdown hooks.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"USR1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Reloads the configuration file, then gracefully restarts the server. This spins up a process with a different process ID.")))),Object(c.b)("h2",{id:"\u65e5\u5fd7\u914d\u7f6e"},"\u65e5\u5fd7\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u683c\u5f0f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"{common}")," - ",Object(c.b)("inlineCode",{parentName:"li"},'{remote} - {user} [{when}] \\"{method} {uri} {proto}\\" {status} {size}')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"{combined}")," - ",Object(c.b)("inlineCode",{parentName:"li"},'{common} \\"{>Referer}\\" \\"{>User-Agent}\\"'))))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"log requests.log {\n    rotate_size 50  # Rotate after 50 MB\n    rotate_age  90  # Keep rotated files for 90 days\n    rotate_keep 20  # Keep at most 20 log files\n    rotate_compress # Compress rotated log files in gzip format\n}\n")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'# \u5185\u90e8\u6587\u4ef6\u6587\u6863\u670d\u52a1\nlocalhost:2016 {\n  gzip\n  log internal/access-2016.log\n  errors visible\n  browse\n  hugo\n  root files\n  bind 127.0.0.1\n  ext .html .htm .md\n}\n\n:80 {\n  # startup echo started > start\n  gzip\n  internal /internal\n  log internal/access-8080.log\n\n  # \u5728 localhost:9180/metrics \u67e5\u770b\n  prometheus\n\n  tls {\n    max_certs 10\n  }\n\n  # \u6388\u6743\n  basicauth /files wener wener\n  # \u8f6c\u53d1\u5230 /files\n  proxy /files http://localhost:2016 {\n    # policy round_robin\n    # health_check /health\n    without /files\n    # proxy_header X-Real-IP {remote}\n    proxy_header X-Forwarded-Proto {scheme}\n    proxy_header X-Forwarded-For {host}\n    proxy_header Host {host}\n  }\n\n  # \u8f6c\u53d1\u8fdc\u7a0b\u670d\u52a1\u5230\u672c\u5730\n  proxy /api api.wener.me {\n    without /api\n  }\n  header /api {\n    # Access-Control-Allow-Origin  *\n    # Access-Control-Allow-Methods "GET, POST, OPTIONS"\n    X-Do-Proxy "true"\n    -Server\n  }\n  # \u5141\u8bb8 CORS \u907f\u8fc7\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u8fdc\u7a0b\u7684\u95ee\u9898\n  cors /api http://editor.swagger.io\n  jsonp /api\n\n  # \u9700\u8981\u901a\u8fc7 JWT_SECRET \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\n  jwt {\n    path /secret.md\n    allow role user\n  }\n}\n\n')),Object(c.b)("h2",{id:"changelog"},"CHANGELOG"),Object(c.b)("h3",{id:"01012"},"0.10.12"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://caddyserver.com/blog/caddy-0_10_12-released"}),"Caddy 0.10.12 Released with ACMEv2 and Wildcard Certificates")),Object(c.b)("li",{parentName:"ul"},"ACMEv2 \u901a\u914d\u7b26"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u5171\u4eab\u6302\u8f7d ",Object(c.b)("inlineCode",{parentName:"li"},"~/.caddy/acme")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"{labelN}")," \u5360\u4f4d\u7b26")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// 1.\n*.example.com\ntls {\n    dns provider\n}\n\n// 2. \u4f7f\u7528 macro\n(wildcard_cert) {\n    tls {\n        dns provider\n        wildcard\n    }\n}\nsub1.example.com {\n    import wildcard_cert\n    ...\n}\n\nsub1000000.example.com {\n    import wildcard_cert\n    ...\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*.example.com\nrewrite {\n    to /{label1}{uri}\n}\n")),Object(c.b)("p",null,"PDNS_API_KEY\nPDNS_API_URL \u5730\u5740\u8981\u4ee5 / \u7ed3\u5c3e"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/xenolf/lego/blob/master/providers/dns/pdns/pdns.go"}),"https://github.com/xenolf/lego/blob/master/providers/dns/pdns/pdns.go")),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"\u7981\u7528\u91cd\u5b9a\u5411-http-\u5230-https"},"\u7981\u7528\u91cd\u5b9a\u5411 http \u5230 https"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mholt/caddy/issues/504"}),"#504")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://caddyserver.com/docs/automatic-https"}),"https://caddyserver.com/docs/automatic-https")),Object(c.b)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u80fd\u7528\u914d\u7f6e\u4e24\u4e2a\u7684\u65b9\u5f0f\u6765\u907f\u514d")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"http://yousite.com {\n  log logs www.chinazs.gov.cn.log\n  proxy / upstream\n}\n\nhttps://yousite.com {\n  proxy / localhost {\n    transparent\n  }\n}\n")),Object(c.b)("h3",{id:"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26"},"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mholt/caddy/issues/1396"}),"https://github.com/mholt/caddy/issues/1396"))))}d.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||s[u]||c;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);