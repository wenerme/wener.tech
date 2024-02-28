/*! For license information please see f57c011d.6c9b634d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5548],{72364:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=s(2488),l=s(62780);const i={slug:"sni-proxy",title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",tags:["\u4ee3\u7406","\u8fd0\u7ef4"]},t="\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",d={permalink:"/story/sni-proxy",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2023/2023-06-21-sni-proxy.md",source:"@site/../story/2023/2023-06-21-sni-proxy.md",title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",description:"\u57fa\u672c\u7ed3\u6784",date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[{label:"\u4ee3\u7406",permalink:"/story/tags/\u4ee3\u7406"},{label:"\u8fd0\u7ef4",permalink:"/story/tags/\u8fd0\u7ef4"}],readingTime:3.835,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"sni-proxy",title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",tags:["\u4ee3\u7406","\u8fd0\u7ef4"]},unlisted:!1,nextItem:{title:"\u6062\u590d\u7fa4\u6656\u6570\u636e\u76d8",permalink:"/story/recover-synology"}},c={authorsImageUrls:[]},o=[{value:"\u624b\u52a8\u914d\u7f6e\u8282\u70b9",id:"\u624b\u52a8\u914d\u7f6e\u8282\u70b9",level:2},{value:"Docker \u542f\u52a8\u670d\u52a1",id:"docker-\u542f\u52a8\u670d\u52a1",level:2},{value:"\u65e0\u6cd5\u4fee\u6539\u8def\u7531\u5668",id:"\u65e0\u6cd5\u4fee\u6539\u8def\u7531\u5668",level:2},{value:"\u4e3a\u4ec0\u4e48\u7528 172.32.1.1",id:"\u4e3a\u4ec0\u4e48\u7528-1723211",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 DNS+SNI \u4f5c\u4e3a\u5168\u5c40\u4ee3\u7406",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-dnssni-\u4f5c\u4e3a\u5168\u5c40\u4ee3\u7406",level:2},{value:"\u80fd\u4e0d\u80fd\u4e0d\u9650\u5236\u57df\u540d\u6240\u6709\u90fd\u4ee3\u7406",id:"\u80fd\u4e0d\u80fd\u4e0d\u9650\u5236\u57df\u540d\u6240\u6709\u90fd\u4ee3\u7406",level:2},{value:"\u5173\u4e8e\u4e0a\u6e38 DNS",id:"\u5173\u4e8e\u4e0a\u6e38-dns",level:2},{value:"\u5176\u4ed6\u65e0\u611f\u5168\u5c40\u4ee3\u7406\u7684\u65b9\u5f0f",id:"\u5176\u4ed6\u65e0\u611f\u5168\u5c40\u4ee3\u7406\u7684\u65b9\u5f0f",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u57fa\u672c\u7ed3\u6784"})}),"\n",(0,r.jsx)(e.mermaid,{value:"flowchart TD\n    Router[\u8def\u7531] --\x3e |DNS| Lan[\u4ee3\u7406\u8282\u70b9<br/>dnsmasq]\n    Lan --\x3e |172.32.1.1| SNI[SNI \u4ee3\u7406<br/>gost] --\x3e |\u4e0a\u6e38\u4ee3\u7406| Proxy[clash/socket/http]"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8def\u7531\u5668\u4e0a\u914d\u7f6e DNS \u4e3a\u5c40\u57df\u7f51\u5185\u7684\u4e00\u4e2a\u8282\u70b9"}),"\n",(0,r.jsx)(e.li,{children:"\u8def\u7531\u5668\u4e0a\u914d\u7f6e \u8def\u7531 172.32.1.1 \u5230\u5185\u7f51\u7684\u4e00\u4e2a IP"}),"\n",(0,r.jsx)(e.li,{children:"DNS \u5339\u914d\u9700\u8981\u4ee3\u7406\u7684\u8def\u7531\u8fd4\u56de 172.32.1.1"}),"\n",(0,r.jsx)(e.li,{children:"172.32.1.1 \u4e0a\u90e8\u7f72 sni \u4ee3\u7406\uff0c\u76d1\u542c 80\u3001443"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u524d\u7f6e\u6761\u4ef6"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5df2\u6709\u76f8\u5173\u4ee3\u7406\u670d\u52a1"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u540e\u7f6e\u6761\u4ef6"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4fee\u6539\u8def\u7531\u5668\u914d\u7f6e"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5e94\u7528\u573a\u666f"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5bb6\u5ead\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u65e0\u611f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u670d\u52a1\u5668\u8fd0\u7ef4 - \u4e91\u670d\u52a1\u5668\u3001\u7269\u7406\u670d\u52a1\u5668\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u65e0\u611f"}),"\n",(0,r.jsx)(e.li,{children:"\u80fd\u652f\u6301\u4efb\u610f\u573a\u666f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u516c\u53f8\u5c40\u57df\u7f51\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u80fd\u9650\u5236\u8303\u56f4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u624b\u52a8\u914d\u7f6e\u8282\u70b9",children:"\u624b\u52a8\u914d\u7f6e\u8282\u70b9"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ip addr add 172.32.1.1/32 dev eth0 # \u589e\u52a0 IP\n\n# \u5b89\u88c5\u90e8\u7f72 gost - \u63d0\u4f9b SNI \u4ee3\u7406\n# ===============\ncurl -LO https://github.com/go-gost/gost/releases/download/v3.0.0-rc8/gost_3.0.0-rc8_linux_amd64.tar.gz\ntar zxvf gost*.tar.gz\n# \u76d1\u542c 80, 443 - \u4e0a\u6e38\u4ee3\u7406\u4e3a 192.168.1.2:7890\uff0c\u5982\u679c\u5728\u5f53\u524d\u8282\u70b9\u4e5f\u53ef\u4ee5 127.0.0.1:7890\n./gost -L sni://:80 -L sni://:443 -F socks5://192.168.1.2:7890\n# \u6d4b\u8bd5 gost \u4ee3\u7406\u662f\u5426\u6210\u529f\ncurl -H 'Host: google.com' 127.0.0.1\n\n# \u5b89\u88c5\u90e8\u7f72 dnsmasq\n# ===============\napk add dnsmasq\n# \u4e0a\u6e38\u914d\u7f6e\ncat << EOF > /etc/dnsmasq.d/main.conf\nserver=223.5.5.5\nlog-queries=extra\nEOF\n\n# \u914d\u7f6e\u4ee3\u7406\u5e38\u7528\u7684\u57df\u540d\ncurl -L https://ghproxy.com/raw.githubusercontent.com/wenerme/wener/master/notes/service/dns/gfwlist.txt \\\n  | sed -E 's#.+#address=/&/172.32.1.1#' > /etc/dnsmasq.d/gfwlist.conf\n\n# \u6d4b\u8bd5\u542f\u52a8\ndnsmasq -d\n# \u6d4b\u8bd5\uff0c\u8fd4\u56de 172.32.1.1 \u4e3a\u6b63\u5e38\u7ed3\u679c\nnslookup google.com 127.0.0.1\n\n# service dnsmasq start # \u670d\u52a1\u542f\u52a8\n# rc-update add dnsmasq # \u5f00\u673a\u81ea\u52a8\u542f\u52a8\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u914d\u7f6e\u8def\u7531\u5668\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"DNS"}),"\n",(0,r.jsx)(e.li,{children:"\u8def\u7531 172.32.1.1 \u5230\u5185\u7f51\u8282\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"docker-\u542f\u52a8\u670d\u52a1",children:"Docker \u542f\u52a8\u670d\u52a1"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# --network=host or -p 80:80 -p 443:443 -p 53:53/udp\n# -e FAKEIP=172.32.1.1\ndocker run --rm -it -e PROXY=socks5://192.168.66.1:7890 -p 80:80 -p 443:443 -p 53:53/udp --name proxy wener/sni-rev-proxy\n\nnslookup google.com 127.0.0.1\ncurl --resolve google.com:80:127.0.0.1 google.com\n\n# \u6dfb\u52a0 FAKEIP\nip addr add 172.32.1.1/32 dev eth0\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u914d\u7f6e\u8def\u7531\u5668\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"DNS"}),"\n",(0,r.jsx)(e.li,{children:"\u8def\u7531 172.32.1.1 \u5230\u5185\u7f51\u8282\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(e.h2,{id:"\u65e0\u6cd5\u4fee\u6539\u8def\u7531\u5668",children:"\u65e0\u6cd5\u4fee\u6539\u8def\u7531\u5668"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u5730\u4f7f\u7528\u76f4\u63a5\u4fee\u6539 resolv.conf \u6216\u8005 hosts"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",metastring:'title="/etc/resolv.conf"',children:"nameserver 127.0.0.1\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u90e8\u7f72 DNS \u7684\u8282\u70b9 IP"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",metastring:'title="/etc/hosts"',children:"172.32.1.1 docker.io\n172.32.1.1 registry-1.docker.io\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u76f4\u63a5\u6620\u5c04\u5355\u4e2a\u57df\u540d"}),"\n",(0,r.jsx)(e.li,{children:"\u6ce8\u610f\uff1a CNAME \u7684\u57df\u540d\u4e5f\u9700\u8981\u6620\u5c04"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u7528-1723211",children:"\u4e3a\u4ec0\u4e48\u7528 172.32.1.1"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"172.32.1.1 \u4e3a\u516c\u7f51 IP \u5730\u5740\uff0c\u4f46\u8fd9\u4e2a\u5730\u5740\u88ab\u4f7f\u7528\u7684\u6982\u7387\u975e\u5e38\u4f4e"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u7ed9\u4ee3\u7406\u8282\u70b9\u4e00\u4e2a\u516c\u7f51\u5730\u5740\u800c\u662f\u4f7f\u7528\u5185\u7f51\u5730\u5740\uff0c\u90a3\u4e48 iOS \u8bbf\u95ee\u7f51\u7edc\u65f6\u4f1a\u63d0\u793a \u201c\u662f\u5426\u5141\u8bb8\u5e94\u7528\u8bbf\u95ee\u672c\u5730\u7f51\u7edc\u201d\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-dnssni-\u4f5c\u4e3a\u5168\u5c40\u4ee3\u7406",children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 DNS+SNI \u4f5c\u4e3a\u5168\u5c40\u4ee3\u7406"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u65e0\u611f\uff0c\u4e0d\u9700\u8981\u6539\u4efb\u4f55\u914d\u7f6e"}),"\n",(0,r.jsx)(e.li,{children:"\u80fd\u5b9e\u73b0\u5168\u5c40 - \u4f8b\u5982 docker \u4e0d\u9700\u8981\u5c31\u884c\u914d\u7f6e\uff0ck8s \u4e0d\u9700\u8981\u5c31\u884c\u914d\u7f6e \u5c31\u80fd\u62c9\u53d6\u955c\u50cf"}),"\n",(0,r.jsx)(e.li,{children:"\u4ee3\u7406\u8303\u56f4\u6613\u4e8e\u63a7\u5236 - DNS \u5c42\u63a7\u5236"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u80fd\u4e0d\u80fd\u4e0d\u9650\u5236\u57df\u540d\u6240\u6709\u90fd\u4ee3\u7406",children:"\u80fd\u4e0d\u80fd\u4e0d\u9650\u5236\u57df\u540d\u6240\u6709\u90fd\u4ee3\u7406"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u53ef\u4ee5\uff0cdnsmasq \u9ed8\u8ba4\u5168\u90e8\u8fd4\u56de\u56fa\u5b9a ip"}),"\n",(0,r.jsx)(e.li,{children:"\u786e\u4fdd\u4e0a\u6e38\u4ee3\u7406\u652f\u6301\u7b56\u7565\u63a7\u5236\u5373\u53ef\uff0c\u4f8b\u5982 clash"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5173\u4e8e\u4e0a\u6e38-dns",children:"\u5173\u4e8e\u4e0a\u6e38 DNS"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u53ef\u4ee5\u9009\u62e9\u516c\u5171\u7684\uff0c\u4f8b\u5982 223.5.5.5"}),"\n",(0,r.jsxs)(e.li,{children:["\u4e5f\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u90e8\u7f72\u7684 adguard \u4e4b\u7c7b\u7684\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u62e6\u622a\u9690\u79c1\u76f8\u5173\u57df\u540d"}),"\n",(0,r.jsx)(e.li,{children:"\u907f\u514d DNS \u6c61\u67d3"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5176\u4ed6\u65e0\u611f\u5168\u5c40\u4ee3\u7406\u7684\u65b9\u5f0f",children:"\u5176\u4ed6\u65e0\u611f\u5168\u5c40\u4ee3\u7406\u7684\u65b9\u5f0f"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u4fee\u6539\u7f51\u5173\uff0ctproxy - \u65e0\u611f\uff0c\u4f46\u662f\u91cd\u65b0\u90e8\u7f72 dhcp\uff0c\u66ff\u4ee3\u8def\u7531\u4f5c\u4e3a\u7f51\u5173"}),"\n",(0,r.jsx)(e.li,{children:"\u5728 WiFi+Lan \u7684\u8282\u70b9\u4e0a\uff0c\u5c06 WiFi \u914d\u7f6e\u4e3a\u8d70\u4ee3\u7406\uff0c\u8fde WiFi \u5219\u8d70\u4ee3\u7406\uff0c\u589e\u52a0\u4e00\u4e2a lan \u4e0d\u4fee\u6539\u73b0\u6709\u3002"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},38088:(n,e,s)=>{var r=s(96651),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var r,i={},o=null,a=null;for(r in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)t.call(e,r)&&!c.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:l,type:n,key:o,ref:a,props:i,_owner:d.current}}e.Fragment=i,e.jsx=o,e.jsxs=o},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>d,M:()=>t});var r=s(96651);const l={},i=r.createContext(l);function t(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);