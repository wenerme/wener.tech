/*! For license information please see 48b9a7f6.ba1259e9.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84540],{9759:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(11527),i=t(47214);const r={tags:["Configuration"]},s="Nginx",l={id:"devops/web/nginx/nginx-conf",title:"Nginx",description:"- https://www.digitalocean.com/community/tools/nginx",source:"@site/../notes/devops/web/nginx/nginx-conf.md",sourceDirName:"devops/web/nginx",slug:"/devops/web/nginx/conf",permalink:"/notes/devops/web/nginx/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/nginx/nginx-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1692169664,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"NGINX Cache",permalink:"/notes/devops/web/nginx/cache"},next:{title:"Nginx \u5e38\u7528\u914d\u7f6e",permalink:"/notes/devops/web/nginx/cookbook"}},c={},d=[{value:"ngx_http_core_module",id:"ngx_http_core_module",level:2},{value:"ngx_http_rewrite_module",id:"ngx_http_rewrite_module",level:2},{value:"ngx_http_proxy_module",id:"ngx_http_proxy_module",level:2},{value:"ngx_http_log_module",id:"ngx_http_log_module",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"nginx",children:"Nginx"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"# \u68c0\u67e5\u914d\u7f6e\nnginx -c nginx.conf\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-nginx",children:"rewrite ^(.*)/$ $1/index.html permanent;\n\nrewrite ^(.*)/index.html$ $1 permanent;\n\nlocation = /index.html {\n  rewrite  ^ / permanent;\n  try_files /index.html =404;\n}\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.digitalocean.com/community/tools/nginx",children:"https://www.digitalocean.com/community/tools/nginx"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/digitalocean/nginxconfig.io",children:"digitalocean/nginxconfig.io"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/",children:"https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://stackoverflow.com/questions/44639182/nginx-proxy-amazon-s3-resources",children:"https://stackoverflow.com/questions/44639182/nginx-proxy-amazon-s3-resources"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-nginx",children:"# root \u652f\u6301\u4f7f\u7528 http_host \u5b9e\u73b0\u52a8\u6001\u7ad9\u70b9\u76ee\u5f55\nroot /data/sites/$http_host;\n\n# alias \u53ef\u4ee5\u4fee\u6539\u76ee\u5f55 - \u76f8\u5f53\u4e8e\u4fee\u6539 root\nlocation /i/ {\n    alias /data/w3/images/;\n}\n\nerror_page 404 /dist/$http_host/404.html;\nlocation = /404.html {\n    internal;\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"ngx_http_core_module",children:"ngx_http_core_module"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html",children:"http://nginx.org/en/docs/http/ngx_http_core_module.html"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"location [ = | ~ | ~* | ^~ ] uri"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u9ed8\u8ba4\u524d\u7f00\u5339\u914d"}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"="})," \u5b8c\u5168\u5339\u914d"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"~"})," \u5927\u5c0f\u5199\u654f\u611f\u6b63\u5219"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"~*"})," \u5927\u5c0f\u5199\u4e0d\u654f\u611f\u6b63\u5219"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"^~"})," \u4e0d\u5339\u914d"]}),"\n",(0,o.jsx)(e.li,{children:"\u4f1a\u9009\u62e9\u6700\u957f\u5339\u914d\u89c4\u5219"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"resolver address ... [valid=time] [ipv6=on|off] [status_zone=zone];"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"ngx_http_rewrite_module",children:"ngx_http_rewrite_module"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"http://nginx.org/en/docs/http/ngx_http_rewrite_module.html",children:"http://nginx.org/en/docs/http/ngx_http_rewrite_module.html"})}),"\n",(0,o.jsx)(e.h2,{id:"ngx_http_proxy_module",children:"ngx_http_proxy_module"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html",children:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html"})}),"\n",(0,o.jsx)(e.h2,{id:"ngx_http_log_module",children:"ngx_http_log_module"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"http://nginx.org/en/docs/http/ngx_http_log_module.html",children:"http://nginx.org/en/docs/http/ngx_http_log_module.html"})})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},3354:(n,e,t)=>{var o=t(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var o,r={},d=null,h=null;for(o in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(h=e.ref),e)s.call(e,o)&&!c.hasOwnProperty(o)&&(r[o]=e[o]);if(n&&n.defaultProps)for(o in e=n.defaultProps)void 0===r[o]&&(r[o]=e[o]);return{$$typeof:i,type:n,key:d,ref:h,props:r,_owner:l.current}}e.Fragment=r,e.jsx=d,e.jsxs=d},11527:(n,e,t)=>{n.exports=t(3354)},47214:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>s});var o=t(50959);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);