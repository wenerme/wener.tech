/*! For license information please see ed983a97.ecaf5d7e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46960],{28896:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var t=n(2488),s=n(62780);const c={title:"DNSCrypt"},o="DNSCrypt",d={id:"service/dns/dnscrypt",title:"DNSCrypt",description:"- DNSCrypt/dnscrypt-proxy \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/dns/dnscrypt.md",sourceDirName:"service/dns",slug:"/service/dns/dnscrypt",permalink:"/notes/service/dns/dnscrypt",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/dnscrypt.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"DNSCrypt"},sidebar:"docs",previous:{title:"DNS Records",permalink:"/notes/service/dns/rr"},next:{title:"Dnsmasq FAQ",permalink:"/notes/service/dns/dnsmasq-faq"}},p={},i=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"dnscrypt",children:"DNSCrypt"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/DNSCrypt/dnscrypt-proxy",children:"DNSCrypt/dnscrypt-proxy"})," \u662f\u4ec0\u4e48\uff1f\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"DNS \u5ba2\u6237\u7aef\u548c Resolver \u4e4b\u95f4\u7684\u901a\u4fe1\u534f\u8bae"}),"\n",(0,t.jsx)(r.li,{children:"\u652f\u6301\u52a0\u5bc6\uff0c\u8ba4\u8bc1\uff0c\u533f\u540d"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://dnscrypt.info/",children:"dnscrypt.info"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://dnscrypt.info/public-servers",children:"\u5728\u7ebf\u670d\u52a1\u5217\u8868"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/dnscrypt/dnscrypt-resolvers",children:"dnscrypt/dnscrypt-resolvers"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Lists of public DNSCrypt and DoH servers"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://dnscrypt.info/protocol",children:"Protocol"})}),"\n"]}),"\n",(0,t.jsx)(r.h1,{id:"dnscrypt-proxy",children:"dnscrypt-proxy"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"apk add dnscrypt-proxy\ndnscrypt-proxy -config /etc/dnscrypt-proxy/dnscrypt-proxy.toml\n\n# docker\ndocker run -d --restart always \\\n  -p 5353:53 \\\n  --name dnscrypt wener/dnscrypt\n\n# docker network create svc\n# docker run -d --restart always \\\n#   -p 5353:53 \\\n#   --net svc --ip 172.18.0.153 \\\n#   --name dnscrypt wener/dnscrypt\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u9ed8\u8ba4\u914d\u7f6e ",(0,t.jsx)(r.a,{href:"https://github.com/DNSCrypt/dnscrypt-proxy/blob/master/dnscrypt-proxy/example-dnscrypt-proxy.toml",children:"example-dnscrypt-proxy.toml"})]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},38088:(e,r,n)=>{var t=n(96651),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,c={},i=null,l=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!p.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:i,ref:l,props:c,_owner:d.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},2488:(e,r,n)=>{e.exports=n(38088)},62780:(e,r,n)=>{n.d(r,{I:()=>d,M:()=>o});var t=n(96651);const s={},c=t.createContext(s);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);