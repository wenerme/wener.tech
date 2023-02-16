"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79555],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},metadata:function(){return y},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={title:"Caddy"},m="Caddy",y={unversionedId:"devops/web/caddy",id:"devops/web/caddy",title:"Caddy",description:"- mholt/caddy",source:"@site/../notes/devops/web/caddy.md",sourceDirName:"devops/web",slug:"/devops/web/caddy",permalink:"/notes/devops/web/caddy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/caddy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1676531612,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"Caddy"},sidebar:"docs",previous:{title:"Caddy V1",permalink:"/notes/devops/web/caddy-v1"},next:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy-conf"}},f={},k=[{value:"Caddyfile",id:"caddyfile",level:2},{value:"Docker reload",id:"docker-reload",level:2}],b={toc:k};function h(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"caddy"}),"Caddy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/mholt/caddy"}),"mholt/caddy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Golang")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"brew install caddy # macOS - /usr/local/etc/Caddyfile\n\n# \u542f\u52a8 \u5e76\u76d1\u542c\u914d\u7f6e\u53d8\u5316\ncaddy run --watch --config Caddyfile --adapter caddyfile\n# caddy start # \u540e\u53f0\u542f\u52a8\n\ncaddy build-info\ncaddy list-modules\n\ncaddy reload\n\n# Caddyfile -> JSON\n# --validate --pretty\ncaddy adapt --config Caddyfile | jq\ncaddy validate Caddyfile\ncaddy fmt --overwrite Caddyfile\n\ncaddy trust # \u5b89\u88c5\u8bc1\u4e66\ncaddy untrust\n\n# \u5feb\u901f\u542f\u52a8\u670d\u52a1\n# ==========\n# --root $PWD --listen :80 --templates\ncaddy file-server --access-log # \u6587\u4ef6\u670d\u52a1\ncaddy respond --status 401     # \u8fd4\u56de\u76f8\u540c\u54cd\u5e94 - \u7528\u4e8e\u6d4b\u8bd5\n\ncaddy reverse-proxy --to https://wener.me --internal-certs --from :8081 --change-host-header # \u53cd\u5411\u4ee3\u7406 http://127.0.0.1:8081/\n\n# \u5305\u7ba1\u7406\n# ==========\ncaddy add-package github.com/caddy-dns/cloudflare\n# caddy remove-package\n")),(0,r.kt)("h2",s({},{id:"caddyfile"}),"Caddyfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"li"},"{$SITE_ADDRESS}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{env.HOME}")))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"{$DOMAIN:localhost}")),(0,r.kt)("li",{parentName:"ul"},"\u5360\u4f4d/\u53d8\u91cf - ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"env."),(0,r.kt)("li",{parentName:"ul"},"system.{hostname,slash,os,arch,wd}"),(0,r.kt)("li",{parentName:"ul"},"time.now, time.now.{unix,unix_ms,common_log,year}"))),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4f4d\u7f6e $XDG_DATA_HOME/caddy"),(0,r.kt)("li",{parentName:"ul"},"Named matchers - ",(0,r.kt)("inlineCode",{parentName:"li"},"@name")),(0,r.kt)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f \u5339\u914d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/google/cel-spec"}),"https://github.com/google/cel-spec"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),'@mutable `{method}.startsWith("P")`\nexpression {method}.startsWith("P")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-caddyfile"}),"example.com {\n  gzip\n  reverse_proxy / 127.0.0.1:9000 {\n    transport fastcgi\n    }\n}\n\nexample.com {\n    root * /var/www\n    file_server\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-caddyfile"}),'# \u5b9a\u4e49\u7247\u6bb5\n(redirect) {\n    @http {\n        protocol http\n    }\n    redir @http https://{host}{uri}\n}\n(snippet) {\n  respond "Yahaha! You found {args.0}!"\n}\n\n# \u5f15\u7528\u7247\u6bb5\nimport redirect\na.example.com {\n    import snippet "Example A"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"rewrite * {path}?{query}&host={host}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u5199 header \u5230 path")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abc-dev.domain.co")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"abc/def/{uri}"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"@parseHost header_regexp parsedHost Host ^([a-z0-9]+)-([a-z0-9]+)\\.domain\\.co$\nroot @parseHost /opt/serve/{re.parsedHost.2}/stages/{re.parsedHost.1}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abc.builds.wener.me")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"abc/{uri}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http.request.host.labels")," \u4ece 0 \u5f00\u59cb")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"*.builds.wener.me {\n  root * /opt/serve/builds/{http.request.host.labels.3}\n  try_files {path} /index.html\n  file_server\n}\n\n\n")),(0,r.kt)("h2",s({},{id:"docker-reload"}),"Docker reload"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker exec -w /etc/caddy caddy caddy reload\n")))}h.isMDXComponent=!0}}]);