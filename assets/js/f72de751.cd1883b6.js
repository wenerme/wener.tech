/*! For license information please see f72de751.cd1883b6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74700],{61164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(2488),r=t(62780);const o={title:"SNI Reverse Proxy"},i="SNI Reverse Proxy",c={id:"service/network/proxy/sni-rev-proxy",title:"SNI Reverse Proxy",description:"- mashirozx/Pixiv-Nginx",source:"@site/../notes/service/network/proxy/sni-rev-proxy.md",sourceDirName:"service/network/proxy",slug:"/service/network/proxy/sni-rev-proxy",permalink:"/notes/service/network/proxy/sni-rev-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/sni-rev-proxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"SNI Reverse Proxy"},sidebar:"docs",previous:{title:"sing-box",permalink:"/notes/service/network/proxy/sing-box"},next:{title:"Stash",permalink:"/notes/service/network/proxy/stash"}},p={},l=[{value:"HAProxy SNI Proxy",id:"haproxy-sni-proxy",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sni-reverse-proxy",children:"SNI Reverse Proxy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/mashirozx/Pixiv-Nginx",children:"mashirozx/Pixiv-Nginx"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://south-plus.net/read.php?tid-1032029.html",children:"https://south-plus.net/read.php?tid-1032029.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/dlundquist/sniproxy",children:"dlundquist/sniproxy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/notes/service/network/proxy/gost",children:"gost"})}),"\n",(0,s.jsx)(n.li,{children:"clash premium \u652f\u6301 Sniff TLS SNI"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gost -L sni://:80 -L sni://:443 -F socks5://192.168.1.1:1080\n"})}),"\n",(0,s.jsx)(n.h2,{id:"haproxy-sni-proxy",children:"HAProxy SNI Proxy"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ef\u90e8\u7f72\u5728\u5185\u90e8\u73af\u5883\u4f7f\u7528"}),"\n",(0,s.jsx)(n.li,{children:"\u4ee3\u7406\u8303\u56f4\u53ef\u63a7"}),"\n",(0,s.jsx)(n.li,{children:"\u5ba2\u6237\u7aef 0 \u914d\u7f6e"}),"\n"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# haproxy -c -V -f haproxy.conf\nglobal\n  log stdout format raw local0\n\ndefaults\n  log global\n\n  mode tcp\n  option tcplog\n  option dontlognull\n\n  timeout http-request    10s\n  timeout queue           1m\n  timeout connect         10s\n  timeout client          1m\n  timeout server          1m\n  timeout http-keep-alive 10s\n  timeout check           10s\n  timeout tunnel          1h\n  maxconn                 10000\n\nfrontend http\n  mode http\n  bind *:80\n  use_backend registry.k8s.io.http if { hdr(host) -m end registry.k8s.io }\n\nfrontend https\n  mode tcp\n  bind *:443\n\n  tcp-request inspect-delay 5s\n  tcp-request content accept if { req.ssl_hello_type 1 }\n\n  use_backend registry.k8s.io.https if { req_ssl_sni -m end -i registry.k8s.io }\n  use_backend pkg.dev.https if { req_ssl_sni -m end -i pkg.dev }\n\nbackend registry.k8s.io.https\n  mode tcp\n  server s1 34.96.108.209:443 check check-via-socks4 socks4 127.0.0.1:7890\n\nbackend registry.k8s.io.http\n  mode http\n  server s1 34.96.108.209:80 check check-via-socks4 socks4 127.0.0.1:7890\n\nbackend pkg.dev.https\n  mode tcp\n  server s1 216.239.32.27:443 check check-via-socks4 socks4 127.0.0.1:7890\n\nlisten stats\n  bind :8404\n  mode http\n\n  #option http-use-htx\n  #http-request use-service prometheus-exporter if { path /metrics }\n\n  stats enable\n  stats hide-version\n  stats uri /\n  stats refresh 5s\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"haproxy -f haproxy.conf\n# \u5982\u679c\u5728\u5185\u7f51\u90e8\u7f72\u4e86 adguard \u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\n# registry.k8s.io -> pkg.dev\necho '127.0.0.1 registry.k8s.io' >> /etc/hosts\necho '127.0.0.1 asia-east1-docker.pkg.dev' >> /etc/hosts\necho '127.0.0.1 us-south1-docker.pkg.dev' >> /etc/hosts\n\n# https://explore.ggcr.dev/?repo=registry.k8s.io\ncurl -sL \"https://registry.k8s.io/v2/tags/list\" | jq .\ndocker pull registry.k8s.io/pause:3.8\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},38088:(e,n,t)=>{var s=t(96651),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,o={},l=null,a=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,s)&&!p.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>i});var s=t(96651);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);