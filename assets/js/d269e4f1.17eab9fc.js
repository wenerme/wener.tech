/*! For license information please see d269e4f1.17eab9fc.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62281],{32398:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=r(11527),t=r(47214);const s={title:"HAProxy"},i="HAProxy",a={id:"devops/web/haproxy/README",title:"HAProxy",description:"- haproxy.com - The #1 Open Source Software Load Balancer and Application Delivery Controller",source:"@site/../notes/devops/web/haproxy/README.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/",permalink:"/notes/devops/web/haproxy/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702440128,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"HAProxy"},sidebar:"docs",previous:{title:"Caddy",permalink:"/notes/devops/web/caddy"},next:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy/conf"}},l={},c=[{value:"metrics",id:"metrics",level:2},{value:"Runtime API",id:"runtime-api",level:2},{value:"Connect() failed for backend : no free ports",id:"connect-failed-for-backend--no-free-ports",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"haproxy",children:"HAProxy"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://www.haproxy.com/",children:"haproxy.com"})," - The #1 Open Source Software Load Balancer and Application Delivery Controller"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/haproxy/haproxy",children:"haproxy/haproxy"})}),"\n",(0,o.jsxs)(n.li,{children:["\u6700\u64c5\u957f ",(0,o.jsx)(n.strong,{children:"\u8d1f\u8f7d\u5747\u8861"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u7279\u6027\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"L4(TCP) L7(HTTP) \u8d1f\u8f7d\u5747\u8861"}),"\n",(0,o.jsx)(n.li,{children:"URL \u91cd\u5199"}),"\n",(0,o.jsx)(n.li,{children:"\u9650\u6d41"}),"\n",(0,o.jsx)(n.li,{children:"SSL/TLS termination/offload"}),"\n",(0,o.jsx)(n.li,{children:"Gzip"}),"\n",(0,o.jsx)(n.li,{children:"\u652f\u6301 HTTP \u4ee3\u7406\u534f\u8bae"}),"\n",(0,o.jsx)(n.li,{children:"\u76d1\u63a7\u68c0\u67e5"}),"\n",(0,o.jsx)(n.li,{children:"\u94fe\u63a5\u548c HTTP \u65e5\u5fd7"}),"\n",(0,o.jsx)(n.li,{children:"HTTP/2"}),"\n",(0,o.jsx)(n.li,{children:"\u591a\u7ebf\u7a0b"}),"\n",(0,o.jsx)(n.li,{children:"\u65e0\u7f1d\u91cd\u8f7d"}),"\n",(0,o.jsx)(n.li,{children:"gRPC"}),"\n",(0,o.jsx)(n.li,{children:"Lua \u548c SPOE \u652f\u6301"}),"\n",(0,o.jsx)(n.li,{children:"L4 \u91cd\u8bd5"}),"\n",(0,o.jsx)(n.li,{children:"\u7b80\u5355\u7194\u65ad\u673a\u5236"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["HAproxy ",(0,o.jsx)(n.a,{href:"https://cbonte.github.io/haproxy-dconv/2.3/intro.html",children:"Starter Guide"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.haproxy.com/user-spotlight-series/inside-the-github-load-balancer/",children:"HAProxy at GitHub"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.haproxy.com/blog/5-ways-to-extend-haproxy-with-lua/",children:"5 Ways to Extend HAProxy with Lua"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.haproxy.com/blog/using-haproxy-as-an-api-gateway-part-3-health-checks/",children:"Using HAProxy as an API Gateway"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/haproxytech/client-native",children:"haproxytech/client-native"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Go client for HAProxy configuration and runtime API"}),"\n",(0,o.jsxs)(n.li,{children:["\u914d\u7f6e\u6a21\u578b ",(0,o.jsx)(n.a,{href:"https://github.com/haproxytech/client-native/tree/master/models",children:"models"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4e0d\u80fd\u8f6c\u53d1\u4efb\u610f UDP - Nginx \u53ef\u4ee5\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"2.3+ \u652f\u6301 syslog UDP"}),"\n",(0,o.jsx)(n.li,{children:"2.5+ \u652f\u6301 QUIC, HTTP/3"}),"\n",(0,o.jsx)(n.li,{children:"\u672a\u6765\u53ef\u80fd\u652f\u6301 DNS"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"haproxy -c -f haproxy.cfg # \u68c0\u67e5\u914d\u7f6e\u662f\u5426\u6b63\u786e\nhaproxy -f  haproxy.cfg # \u542f\u52a8\n# master-worker mode - reload\n# \u672c\u8d28\u4e5f\u662f -sf \u542f\u65b0\u7684\u8fdb\u7a0b\nkill -USR2 $(cat /var/run/haproxy.pid)\n\n# \u91cd\u542f\u65b0\u7684 haproxy - reload\nhaproxy -D -f /etc/haproxy/haproxy.cfg -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="docker"',children:"docker run --rm -it \\\n  -v /path/to/etc/haproxy:/usr/local/etc/haproxy:ro \\\n  --sysctl net.ipv4.ip_unprivileged_port_start=0 \\\n  --name haproxy haproxy:2.5\n\n# reload\ndocker kill -s HUP haproxy\n"})}),"\n",(0,o.jsx)(n.h2,{id:"metrics",children:"metrics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/",children:"https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/",children:"https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"runtime-api",children:"Runtime API"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-haproxy",children:"global\n  stats socket ipv4@127.0.0.1:9999 level admin\n  stats socket /run/haproxy-runtime-api.sock mode 666 level admin\n  stats timeout 2m\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'echo "help" | socat stdio tcp4-connect:127.0.0.1:9999\necho "show acl" | socat stdio /run/haproxy-runtime-api.sock\nsocat readline /run/haproxy-runtime-api.sock\nhelp\n'})}),"\n",(0,o.jsx)(n.h2,{id:"connect-failed-for-backend--no-free-ports",children:"Connect() failed for backend : no free ports"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'cat /proc/sys/net/ipv4/ip_local_port_range\n\necho "2000 60999" | sudo tee /proc/sys/net/ipv4/ip_local_port_range\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5c1d\u8bd5\u6dfb\u52a0 ",(0,o.jsx)(n.code,{children:"resolve-prefer ipv4"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3354:(e,n,r)=>{var o=r(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var o,s={},c=null,h=null;for(o in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:c,ref:h,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var o=r(50959);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);