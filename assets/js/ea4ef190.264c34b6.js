"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38590],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const m={id:"iptables-rule",title:"iptables \u89c4\u5219"},f="iptables \u89c4\u5219",d={unversionedId:"os/linux/network/iptables-rule",id:"os/linux/network/iptables-rule",title:"iptables \u89c4\u5219",description:"* \u53c2\u8003",source:"@site/../notes/os/linux/network/iptables-rule.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iptables-rule",permalink:"/notes/os/linux/network/iptables-rule",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/iptables-rule.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603205276,formattedLastUpdatedAt:"Oct 20, 2020",frontMatter:{id:"iptables-rule",title:"iptables \u89c4\u5219"},sidebar:"docs",previous:{title:"iptables \u53c2\u8003",permalink:"/notes/os/linux/network/iptables-ref"},next:{title:"IPTables",permalink:"/notes/os/linux/network/iptables"}},b={},k=[{value:"Multi WAN",id:"multi-wan",level:2}],O={toc:k};function h(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},O),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"iptables-\u89c4\u5219"}),"iptables \u89c4\u5219"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://making.pusher.com/per-ip-rate-limiting-with-iptables/"}),"Per-IP rate limiting with iptables"))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# %50 \u5305\u4e22\u5f03\n-A INPUT -i eth0 -m statistic --mode random --probability 0.5000 -j DROP\n\n# DOCKER\n# https://docs.docker.com/network/iptables/\n# \u4e0d\u5141\u8bb8 eth0 \u6d41\u91cf\u8bbf\u95ee docker \u66b4\u9732\u7684 443\n-I DOCKER-USER -i eth0 -p tcp -m tcp --dport 443 -j DROP\n# \u53ea\u5141\u8bb8 443 \u548c 80\n-I DOCKER-USER 1 -i eth0 -p tcp -m state --state NEW -m multiport ! --dports 443,80 -j DROP;\n\n# syn \u9650\u6d41\n-A INPUT -p tcp  --syn -m limit --limit 30/s --limit-burst 30 -j ACCEPT\n# \u4f7f\u7528 hashlimit \u4f1a\u66f4\u5408\u7406 - \u6bcf\u4e2a ip 15/s\n-A INPUT -p tcp --syn -m hashlimit --hashlimit 15/s --hashlimit-burst 30 --hashlimit-mode srcip --hashlimit-srcmask 32 --hashlimit-name synattack -j ACCEPT\n# \u9ed8\u8ba4\u4e22\u5f03\n-A INPUT -p tcp --syn -j DROP\n\n# \u7acb\u5373 REJECT \u800c\u4e0d\u662f\u7b49\u5f85\u8d85\u65f6\n-A INPUT -p tcp -s 192.168.1.0/24 --dport 443 -j REJECT --reject-with tcp-reset\n\n# \u5982\u679c\u60f3\u8981\u9650\u5b9a forward \u89c4\u5219\uff0c\u53ef\u4ee5\u5728\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a accept \u6765\u5224\u65ad\u662f\u5426\u8fd8\u6709\u672a\u5141\u8bb8\u7684\n-A FORWARD  -j ACCEPT\n")),(0,r.kt)("h2",u({},{id:"multi-wan"}),"Multi WAN"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://unix.stackexchange.com/a/87999/47774"}),"https://unix.stackexchange.com/a/87999/47774")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://unix.stackexchange.com/a/71834/47774"}),"https://unix.stackexchange.com/a/71834/47774"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# reset\niptables -t mangle -F\niptables -t mangle -X\n\n# fwmark\niptables -t mangle -A PREROUTING -j CONNMARK --restore-mark\n# \u5982\u679c\u672a\u8bbe\u7f6e\niptables -t mangle -A PREROUTING -m mark ! --mark 0 -j RETURN\niptables -t mangle -A PREROUTING -i wan      -j MARK --set-mark $MARK_CAVTEL\niptables -t mangle -A PREROUTING -i comcast  -j MARK --set-mark $MARK_COMCAST\niptables -t mangle -A PREROUTING -i vz-dsl   -j MARK --set-mark $MARK_VZDSL\n\niptables -t mangle -A POSTROUTING -o wan     -j MARK --set-mark $MARK_CAVTEL\niptables -t mangle -A POSTROUTING -o comcast -j MARK --set-mark $MARK_COMCAST\niptables -t mangle -A POSTROUTING -o vz-dsl  -j MARK --set-mark $MARK_VZDSL\niptables -t mangle -A POSTROUTING -j CONNMARK --save-mark\n\n##### NAT ######\niptables -t nat -F\niptables -t nat -X\nfor local in \xablist of internal IP/netmask combos\xbb; do\n    iptables -t nat -A POSTROUTING -s $local -o wan     -j SNAT --to-source \xabIP\xbb\n    iptables -t nat -A POSTROUTING -s $local -o comcast -j SNAT --to-source \xabIP\xbb\n    iptables -t nat -A POSTROUTING -s $local -o vz-dsl  -j SNAT --to-source \xabIP\xbb\ndone\n\n# this is an example of what the incoming traffic rules look like\nfor extip in \xablist of external IPs\xbb; do\n    iptables -t nat -A PREROUTING   -p tcp -d $extip --dport \xabport\xbb -j DNAT --to-destination \xabinternal-IP\xbb:443\ndone\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"ip rule flush\nip rule add from all               pref 1000  lookup main \nip rule add from A.B.C.D/29        pref 1500  lookup comcast # these IPs are the external ranges (we have multiple IPs on each connection)\nip rule add from E.F.G.H/29        pref 1501  lookup cavtel\nip rule add from I.J.K.L/31        pref 1502  lookup vzdsl\nip rule add from M.N.O.P/31        pref 1502  lookup vzdsl # yes, you can have multiple ranges\nip rule add fwmark $MARK_COMCAST   pref 2000  lookup comcast\nip rule add fwmark $MARK_CAVTEL    pref 2001  lookup cavtel\nip rule add fwmark $MARK_VZDSL     pref 2002  lookup vzdsl\nip rule add                        pref 2500  lookup comcast # the pref order here determines the default\u2014we default to Comcast.\nip rule add                        pref 2501  lookup cavtel\nip rule add                        pref 2502  lookup vzdsl\nip rule add                        pref 32767 lookup default\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/networking/interfaces")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"iface comcast inet static\n    address A.B.C.Q\n    netmask 255.255.255.248\n    up ip route add table comcast default via A.B.C.R dev comcast\n    down ip route flush table comcast\n")))}h.isMDXComponent=!0}}]);