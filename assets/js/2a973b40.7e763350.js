"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79555],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"Caddy"},d="Caddy",s={unversionedId:"devops/web/caddy",id:"devops/web/caddy",title:"Caddy",description:"\u6982\u8ff0",source:"@site/../notes/devops/web/caddy.md",sourceDirName:"devops/web",slug:"/devops/web/caddy",permalink:"/notes/devops/web/caddy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/web/caddy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Caddy"},sidebar:"docs",previous:{title:"Apache APISIX",permalink:"/notes/devops/web/apisix"},next:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy-conf"}},p={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4fe1\u53f7\u91cf\u5904\u7406",id:"\u4fe1\u53f7\u91cf\u5904\u7406",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"Example",id:"example",level:2},{value:"CHANGELOG",id:"changelog",level:2},{value:"0.10.12",id:"01012",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u7981\u7528\u91cd\u5b9a\u5411 http \u5230 https",id:"\u7981\u7528\u91cd\u5b9a\u5411-http-\u5230-https",level:3},{value:"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26",id:"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"caddy"},"Caddy"),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mholt/caddy/issues/1806"},"#1806")," - Watch Caddyfile for changes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# macOS \u5b89\u88c5\n# \u4e0d\u4f1a\u5b89\u88c5\u63d2\u4ef6\nbrew install caddy\n\n# \u76f4\u63a5\u542f\u52a8, \u4f1a\u4f7f\u7528\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 Caddyfile \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\ncaddy\n# \u67e5\u770b\u5b89\u88c5\u7684\u63d2\u4ef6\ncaddy -plugins\n# \u9a8c\u8bc1\u914d\u7f6e\ncaddy -validate -conf Caddyfile\n\n# Docker \u542f\u52a8\n# \u914d\u7f6e /etc/Caddyfile\n# root /srv\n# cert /root/.caddy \u6216 CADDYPATH\n# \u8be5\u955c\u50cf\u4e0d\u5305\u542b\u63d2\u4ef6, \u63d2\u4ef6\u9700\u8981\u81ea\u5df1\u6784\u5efa\ndocker run --rm -it -v $PWD:/srv -p 2015:2015 abiosoft/caddy\n# \u5305\u542b\u6240\u6709\u63d2\u4ef6\n# \u5176\u4ed6\u6807\u7b7e: latest \u57fa\u4e8e Alpine, php \u6dfb\u52a0\u4e86 PHP \u652f\u6301\ndocker run --rm -it -v $PWD:/srv -p 2015:2015 wener/caddy:full\n# \u9a8c\u8bc1\u914d\u7f6e\ndocker exec web caddy -validate -conf /caddy/Caddyfile\n\n# \u4ece\u547d\u4ee4\u884c\u76f4\u63a5\u6dfb\u52a0\u914d\u7f6e\ncaddy -port 8080 browse markdown "log access.log"\n# \u91cd\u8f7d\u914d\u7f6e\nkill -USR1 PID\n# \u4f7f\u7528 Docker \u91cd\u8f7d\ndocker kill -s USR1 web\n\n# \u5e38\u7528\u7684\u914d\u7f6e\nmkdir root\ncaddy -conf Caddyfile\n')),(0,l.kt)("h2",{id:"\u4fe1\u53f7\u91cf\u5904\u7406"},"\u4fe1\u53f7\u91cf\u5904\u7406"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TERM"),(0,l.kt)("td",{parentName:"tr",align:null},"Forcefully exits the process without executing shutdown hooks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},'Forcefully exits the process after executing shutdown hooks. This is the only "signal" that works on Windows (Ctrl+C). A second SIGINT forces immediate termination, even if shutdown hooks are still running.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HUP"),(0,l.kt)("td",{parentName:"tr",align:null},"Gracefully stops the server, but does not execute shutdown hooks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUIT"),(0,l.kt)("td",{parentName:"tr",align:null},"Gracefully stops the server after executing shutdown hooks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USR1"),(0,l.kt)("td",{parentName:"tr",align:null},"Reloads the configuration file, then gracefully restarts the server. This spins up a process with a different process ID.")))),(0,l.kt)("h2",{id:"\u65e5\u5fd7\u914d\u7f6e"},"\u65e5\u5fd7\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{common}")," - ",(0,l.kt)("inlineCode",{parentName:"li"},'{remote} - {user} [{when}] \\"{method} {uri} {proto}\\" {status} {size}')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{combined}")," - ",(0,l.kt)("inlineCode",{parentName:"li"},'{common} \\"{>Referer}\\" \\"{>User-Agent}\\"'))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log requests.log {\n    rotate_size 50  # Rotate after 50 MB\n    rotate_age  90  # Keep rotated files for 90 days\n    rotate_keep 20  # Keep at most 20 log files\n    rotate_compress # Compress rotated log files in gzip format\n}\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u5185\u90e8\u6587\u4ef6\u6587\u6863\u670d\u52a1\nlocalhost:2016 {\n  gzip\n  log internal/access-2016.log\n  errors visible\n  browse\n  hugo\n  root files\n  bind 127.0.0.1\n  ext .html .htm .md\n}\n\n:80 {\n  # startup echo started > start\n  gzip\n  internal /internal\n  log internal/access-8080.log\n\n  # \u5728 localhost:9180/metrics \u67e5\u770b\n  prometheus\n\n  tls {\n    max_certs 10\n  }\n\n  # \u6388\u6743\n  basicauth /files wener wener\n  # \u8f6c\u53d1\u5230 /files\n  proxy /files http://localhost:2016 {\n    # policy round_robin\n    # health_check /health\n    without /files\n    # proxy_header X-Real-IP {remote}\n    proxy_header X-Forwarded-Proto {scheme}\n    proxy_header X-Forwarded-For {host}\n    proxy_header Host {host}\n  }\n\n  # \u8f6c\u53d1\u8fdc\u7a0b\u670d\u52a1\u5230\u672c\u5730\n  proxy /api api.wener.me {\n    without /api\n  }\n  header /api {\n    # Access-Control-Allow-Origin  *\n    # Access-Control-Allow-Methods "GET, POST, OPTIONS"\n    X-Do-Proxy "true"\n    -Server\n  }\n  # \u5141\u8bb8 CORS \u907f\u8fc7\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u8fdc\u7a0b\u7684\u95ee\u9898\n  cors /api http://editor.swagger.io\n  jsonp /api\n\n  # \u9700\u8981\u901a\u8fc7 JWT_SECRET \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\n  jwt {\n    path /secret.md\n    allow role user\n  }\n}\n\n')),(0,l.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,l.kt)("h3",{id:"01012"},"0.10.12"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://caddyserver.com/blog/caddy-0_10_12-released"},"Caddy 0.10.12 Released with ACMEv2 and Wildcard Certificates")),(0,l.kt)("li",{parentName:"ul"},"ACMEv2 \u901a\u914d\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5171\u4eab\u6302\u8f7d ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.caddy/acme")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{labelN}")," \u5360\u4f4d\u7b26")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// 1.\n*.example.com\ntls {\n    dns provider\n}\n\n// 2. \u4f7f\u7528 macro\n(wildcard_cert) {\n    tls {\n        dns provider\n        wildcard\n    }\n}\nsub1.example.com {\n    import wildcard_cert\n    ...\n}\n\nsub1000000.example.com {\n    import wildcard_cert\n    ...\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*.example.com\nrewrite {\n    to /{label1}{uri}\n}\n")),(0,l.kt)("p",null,"PDNS_API_KEY\nPDNS_API_URL \u5730\u5740\u8981\u4ee5 / \u7ed3\u5c3e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/xenolf/lego/blob/master/providers/dns/pdns/pdns.go"},"https://github.com/xenolf/lego/blob/master/providers/dns/pdns/pdns.go")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u7981\u7528\u91cd\u5b9a\u5411-http-\u5230-https"},"\u7981\u7528\u91cd\u5b9a\u5411 http \u5230 https"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mholt/caddy/issues/504"},"#504")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://caddyserver.com/docs/automatic-https"},"https://caddyserver.com/docs/automatic-https")),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u80fd\u7528\u914d\u7f6e\u4e24\u4e2a\u7684\u65b9\u5f0f\u6765\u907f\u514d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://yousite.com {\n  log logs www.chinazs.gov.cn.log\n  proxy / upstream\n}\n\nhttps://yousite.com {\n  proxy / localhost {\n    transparent\n  }\n}\n")),(0,l.kt)("h3",{id:"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26"},"\u5728\u65e5\u5fd7\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mholt/caddy/issues/1396"},"https://github.com/mholt/caddy/issues/1396"))))}m.isMDXComponent=!0}}]);