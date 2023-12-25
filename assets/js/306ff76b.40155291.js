/*! For license information please see 306ff76b.40155291.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78381],{25241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(11527),s=t(47214);const i={title:"MitmProxy"},o="mitmproxy",c={id:"service/network/mitmproxy",title:"MitmProxy",description:"- \u8bc1\u4e66\u5b89\u88c5\u8bbf\u95ee http://mitm.it/",source:"@site/../notes/service/network/mitmproxy.md",sourceDirName:"service/network",slug:"/service/network/mitmproxy",permalink:"/notes/service/network/mitmproxy",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/mitmproxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1673427494,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{title:"MitmProxy"},sidebar:"docs",previous:{title:"GFW",permalink:"/notes/service/network/gfw"},next:{title:"NAT",permalink:"/notes/service/network/nat"}},l={},p=[{value:"\u900f\u660e\u4ee3\u7406",id:"\u900f\u660e\u4ee3\u7406",level:2},{value:"\u6dfb\u52a0\u8bc1\u4e66",id:"\u6dfb\u52a0\u8bc1\u4e66",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mitmproxy",children:"mitmproxy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bc1\u4e66\u5b89\u88c5\u8bbf\u95ee ",(0,r.jsx)(n.a,{href:"http://mitm.it/",children:"http://mitm.it/"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://docs.mitmproxy.org/en/stable/",children:"Doc"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.mitmproxy.org/stable/concepts-modes/",children:"\u5de5\u4f5c\u6a21\u5f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Regular Proxy\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668"}),"\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66 - \u8bbf\u95ee mitm.it \u5b89\u88c5\u8bc1\u4e66"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Transparent - \u900f\u660e\u4ee3\u7406\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u65e0\u6cd5\u914d\u7f6e HTTP \u4ee3\u7406\u7684\u573a\u666f"}),"\n",(0,r.jsxs)(n.li,{children:["\u901a\u8fc7\u8def\u7531\u7b49\u624b\u6bb5\u76f4\u63a5\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 mitmproxy\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u914d\u7f6e\u9ed8\u8ba4\u7f51\u5173"}),"\n",(0,r.jsx)(n.li,{children:"\u914d\u7f6e\u4e0b\u4e00\u8df3\u5730\u5740"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Reverse Proxy - \u53cd\u5411\u4ee3\u7406\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u670d\u52a1\u7aef\u914d\u7f6e\uff0c\u4ee3\u7406\u670d\u52a1\u7aef\u6d41\u91cf"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Uptream Proxy - \u4e0a\u6e38\u4ee3\u7406\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f5c\u4e3a\u4e8c\u7ea7\u4ee3\u7406\u4f7f\u7528"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u914d\u7f6e\u4e0b\u4e00\u7ea7\u4ee3\u7406\u5730\u5740"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["SOCKS Proxy\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u57fa\u4e8e SOCKS5 \u7684\u4ee3\u7406\u534f\u8bae - \u9ed8\u8ba4 HTTP \u534f\u8bae"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u670d\u52a1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"mitmproxy - TUI"}),"\n",(0,r.jsx)(n.li,{children:"mitmweb - WebUI"}),"\n",(0,r.jsx)(n.li,{children:"mitmdump - \u5199\u5165\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["frozenpandaman/splatnet2statink - ",(0,r.jsx)(n.a,{href:"https://github.com/frozenpandaman/splatnet2statink/wiki/mitmproxy-instructions",children:"mitmproxy instructions"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mitmweb --mode regular --no-web-open-browser --web-port 8080 --listen-port 8888\n\nopenssl genrsa -out cert.key 2048\nopenssl req -new -x509 -key cert.key -out cert.crt\ncat cert.key cert.crt > cert.pem\n\n# \u9ed8\u8ba4 ~/.mitmproxy/mitmproxy-ca.pem\nmitmweb --certs squid-ca-cert.pem --mode regular --no-web-open-browser --web-port 8080 --listen-port 8888\n\n# UI http://0.0.0.0:8081/\n# HTTP Proxy http://0.0.0.0:8080/\ndocker run --rm -it -v $HOME/.mitmproxy:/home/mitmproxy/.mitmproxy \\\n  -p 8080:8080 \\\n  -p 8081:8081 \\\n  --name mitmproxy mitmproxy/mitmproxy mitmweb --web-host 0.0.0.0\n\ncurl -x 0.0.0.0:8080 wener.me\ncurl -x 0.0.0.0:8080 icanhazip.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u900f\u660e\u4ee3\u7406",children:"\u900f\u660e\u4ee3\u7406"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.mitmproxy.org/stable/howto-transparent/",children:"HowTo Transparent"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u542f\u7528\u8f6c\u53d1\nsysctl -w net.ipv4.ip_forward=1\n# \u7981\u7528 ICMP \u8f6c\u53d1\nsysctl -w net.ipv4.conf.all.send_redirects=0\n\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080\n\n# IPv6\nsysctl -w net.ipv6.conf.all.forwarding=1\nip6tables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080\nip6tables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u52a8"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mitmproxy --mode transparent --showhost\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u8bc1\u4e66",children:"\u6dfb\u52a0\u8bc1\u4e66"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --proxy 127.0.0.1:8080 --cacert ~/.mitmproxy/mitmproxy-ca-cert.pem https://wener.me\n\n# macOS\nsudo security add-trusted-cert -d -p ssl -p basic -k /Library/Keychains/System.keychain ~/.mitmproxy/mitmproxy-ca-cert.pem\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.mitmproxy.org/stable/concepts-certificates/",children:"https://docs.mitmproxy.org/stable/concepts-certificates/"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,i={},p=null,a=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:p,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(50959);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);