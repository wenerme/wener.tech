/*! For license information please see ea4ef190.6bfac0b0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99496],{77104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var s=n(2488),a=n(62780);const l={id:"iptables-rule",title:"iptables \u89c4\u5219"},r="iptables \u89c4\u5219",i={id:"os/linux/network/iptables-rule",title:"iptables \u89c4\u5219",description:"* \u53c2\u8003",source:"@site/../notes/os/linux/network/iptables-rule.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iptables-rule",permalink:"/notes/os/linux/network/iptables-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/iptables-rule.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603205276,formattedLastUpdatedAt:"Oct 20, 2020",frontMatter:{id:"iptables-rule",title:"iptables \u89c4\u5219"},sidebar:"docs",previous:{title:"iptables \u53c2\u8003",permalink:"/notes/os/linux/network/iptables-ref"},next:{title:"IPTables",permalink:"/notes/os/linux/network/iptables"}},o={},p=[{value:"Multi WAN",id:"multi-wan",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"iptables-\u89c4\u5219",children:"iptables \u89c4\u5219"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://making.pusher.com/per-ip-rate-limiting-with-iptables/",children:"Per-IP rate limiting with iptables"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# %50 \u5305\u4e22\u5f03\n-A INPUT -i eth0 -m statistic --mode random --probability 0.5000 -j DROP\n\n# DOCKER\n# https://docs.docker.com/network/iptables/\n# \u4e0d\u5141\u8bb8 eth0 \u6d41\u91cf\u8bbf\u95ee docker \u66b4\u9732\u7684 443\n-I DOCKER-USER -i eth0 -p tcp -m tcp --dport 443 -j DROP\n# \u53ea\u5141\u8bb8 443 \u548c 80\n-I DOCKER-USER 1 -i eth0 -p tcp -m state --state NEW -m multiport ! --dports 443,80 -j DROP;\n\n# syn \u9650\u6d41\n-A INPUT -p tcp  --syn -m limit --limit 30/s --limit-burst 30 -j ACCEPT\n# \u4f7f\u7528 hashlimit \u4f1a\u66f4\u5408\u7406 - \u6bcf\u4e2a ip 15/s\n-A INPUT -p tcp --syn -m hashlimit --hashlimit 15/s --hashlimit-burst 30 --hashlimit-mode srcip --hashlimit-srcmask 32 --hashlimit-name synattack -j ACCEPT\n# \u9ed8\u8ba4\u4e22\u5f03\n-A INPUT -p tcp --syn -j DROP\n\n# \u7acb\u5373 REJECT \u800c\u4e0d\u662f\u7b49\u5f85\u8d85\u65f6\n-A INPUT -p tcp -s 192.168.1.0/24 --dport 443 -j REJECT --reject-with tcp-reset\n\n# \u5982\u679c\u60f3\u8981\u9650\u5b9a forward \u89c4\u5219\uff0c\u53ef\u4ee5\u5728\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a accept \u6765\u5224\u65ad\u662f\u5426\u8fd8\u6709\u672a\u5141\u8bb8\u7684\n-A FORWARD  -j ACCEPT\n"})}),"\n",(0,s.jsx)(t.h2,{id:"multi-wan",children:"Multi WAN"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://unix.stackexchange.com/a/87999/47774",children:"https://unix.stackexchange.com/a/87999/47774"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://unix.stackexchange.com/a/71834/47774",children:"https://unix.stackexchange.com/a/71834/47774"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# reset\niptables -t mangle -F\niptables -t mangle -X\n\n# fwmark\niptables -t mangle -A PREROUTING -j CONNMARK --restore-mark\n# \u5982\u679c\u672a\u8bbe\u7f6e\niptables -t mangle -A PREROUTING -m mark ! --mark 0 -j RETURN\niptables -t mangle -A PREROUTING -i wan      -j MARK --set-mark $MARK_CAVTEL\niptables -t mangle -A PREROUTING -i comcast  -j MARK --set-mark $MARK_COMCAST\niptables -t mangle -A PREROUTING -i vz-dsl   -j MARK --set-mark $MARK_VZDSL\n\niptables -t mangle -A POSTROUTING -o wan     -j MARK --set-mark $MARK_CAVTEL\niptables -t mangle -A POSTROUTING -o comcast -j MARK --set-mark $MARK_COMCAST\niptables -t mangle -A POSTROUTING -o vz-dsl  -j MARK --set-mark $MARK_VZDSL\niptables -t mangle -A POSTROUTING -j CONNMARK --save-mark\n\n##### NAT ######\niptables -t nat -F\niptables -t nat -X\nfor local in \xablist of internal IP/netmask combos\xbb; do\n    iptables -t nat -A POSTROUTING -s $local -o wan     -j SNAT --to-source \xabIP\xbb\n    iptables -t nat -A POSTROUTING -s $local -o comcast -j SNAT --to-source \xabIP\xbb\n    iptables -t nat -A POSTROUTING -s $local -o vz-dsl  -j SNAT --to-source \xabIP\xbb\ndone\n\n# this is an example of what the incoming traffic rules look like\nfor extip in \xablist of external IPs\xbb; do\n    iptables -t nat -A PREROUTING   -p tcp -d $extip --dport \xabport\xbb -j DNAT --to-destination \xabinternal-IP\xbb:443\ndone\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ip rule flush\nip rule add from all               pref 1000  lookup main \nip rule add from A.B.C.D/29        pref 1500  lookup comcast # these IPs are the external ranges (we have multiple IPs on each connection)\nip rule add from E.F.G.H/29        pref 1501  lookup cavtel\nip rule add from I.J.K.L/31        pref 1502  lookup vzdsl\nip rule add from M.N.O.P/31        pref 1502  lookup vzdsl # yes, you can have multiple ranges\nip rule add fwmark $MARK_COMCAST   pref 2000  lookup comcast\nip rule add fwmark $MARK_CAVTEL    pref 2001  lookup cavtel\nip rule add fwmark $MARK_VZDSL     pref 2002  lookup vzdsl\nip rule add                        pref 2500  lookup comcast # the pref order here determines the default\u2014we default to Comcast.\nip rule add                        pref 2501  lookup cavtel\nip rule add                        pref 2502  lookup vzdsl\nip rule add                        pref 32767 lookup default\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"/etc/networking/interfaces"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"iface comcast inet static\n    address A.B.C.Q\n    netmask 255.255.255.248\n    up ip route add table comcast default via A.B.C.R dev comcast\n    down ip route flush table comcast\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},38088:(e,t,n)=>{var s=n(96651),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var s,l={},p=null,c=null;for(s in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,s)&&!o.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:a,type:e,key:p,ref:c,props:l,_owner:i.current}}t.Fragment=l,t.jsx=p,t.jsxs=p},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>r});var s=n(96651);const a={},l=s.createContext(a);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);