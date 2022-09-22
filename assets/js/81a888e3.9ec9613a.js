"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34855],{49613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return v}});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),v=i,f=d["".concat(c,".").concat(v)]||d[v]||u[v]||a;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97159:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(96600),i=t(27279),a=(t(59496),t(49613)),s=["components"],o={title:"IKEv2"},c="IKEv2",p={unversionedId:"service/network/ikev2",id:"service/network/ikev2",title:"IKEv2",description:"IKEv2 \u670d\u52a1\u7aef",source:"@site/../notes/service/network/ikev2.md",sourceDirName:"service/network",slug:"/service/network/ikev2",permalink:"/notes/service/network/ikev2",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/network/ikev2.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"IKEv2"},sidebar:"docs",previous:{title:"Headscale",permalink:"/notes/service/network/headscale"},next:{title:"inlets \u901a\u9053",permalink:"/notes/service/network/inlets"}},l={},u=[{value:"IKEv2 \u670d\u52a1\u7aef",id:"ikev2-\u670d\u52a1\u7aef",level:2},{value:"\u542f\u52a8\u811a\u672c",id:"\u542f\u52a8\u811a\u672c",level:3},{value:"IKEv2 Linux \u5ba2\u6237\u7aef",id:"ikev2-linux-\u5ba2\u6237\u7aef",level:2},{value:"\u9ed8\u8ba4 ipsec.conf",id:"\u9ed8\u8ba4-ipsecconf",level:2}],d={toc:u};function v(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ikev2"},"IKEv2"),(0,a.kt)("h2",{id:"ikev2-\u670d\u52a1\u7aef"},"IKEv2 \u670d\u52a1\u7aef"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 strongSwan \u63d0\u4f9b IKEv2"),(0,a.kt)("li",{parentName:"ul"},"DockerHub ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/gaomd/ikev2-vpn-server"},"ikev2-vpn-server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gaomd/docker-ikev2-vpn-server"},"aomd/docker-ikev2-vpn-server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gaomd/docker-ikev2-vpn-server/blob/master/bin/start-vpn"},"bin/start-vpn"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"10.8.0.0/16"))))))),(0,a.kt)("li",{parentName:"ul"},"PSK"),(0,a.kt)("li",{parentName:"ul"},"500/udp 4500/udp")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --restart always --privileged \\\n  -p 500:500/udp -p 4500:4500/udp \\\n  --name ikev2-vpn-server gaomd/ikev2-vpn-server:0.3.0\n\n# \u5c06 vpn1.example.com \u4fee\u6539\u4e3a\u673a\u5668\u7684 IP \u5730\u5740\ndocker run -i -t --rm --volumes-from ikev2-vpn-server -e "HOST=vpn1.example.com" gaomd/ikev2-vpn-server:0.3.0 generate-mobileconfig > ikev2-vpn.mobileconfig\n\n# \u751f\u6210\u7684\u79d8\u94a5\u4f4d\u4e8e /etc/ipsec.secrets\n# \u5982\u679c\u8fd8\u60f3\u4e8c\u6b21\u4f7f\u7528, \u53ef\u4ee5\u62f7\u8d1d\u51fa\u6765\ndocker cp ikev2-vpn-server:/etc/ipsec.secrets .\n# \u5982\u679c\u5df2\u7ecf\u6709\u4e86 PKI\necho ": PSK \\"$IKEV2_PKI\\"" > ipsec.secrets\n# \u4f7f\u7528\u73b0\u6709\u7684 PKI \u542f\u52a8\ndocker run -d --restart always --privileged \\\n  -p 500:500/udp -p 4500:4500/udp -v $PWD/ipsec.secrets:/etc/ipsec.secrets  \\\n  --name ikev2-vpn-server gaomd/ikev2-vpn-server:0.3.0\n')),(0,a.kt)("h3",{id:"\u542f\u52a8\u811a\u672c"},"\u542f\u52a8\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# https://wiki.strongswan.org/projects/strongswan/wiki/ForwardingAndSplitTunneling\n# Continue reading: https://wiki.strongswan.org/projects/strongswan/wiki/VirtualIP\nsysctl net.ipv4.ip_forward=1\nsysctl net.ipv6.conf.all.forwarding=1\nsysctl net.ipv6.conf.eth0.proxy_ndp=1\niptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT\niptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -j MASQUERADE\nip6tables -t nat -A POSTROUTING -s fd6a:6ce3:c8d8:7caa::/64 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT\nip6tables -t nat -A POSTROUTING -s fd6a:6ce3:c8d8:7caa::/64 -o eth0 -j MASQUERADE\n\n# hotfix for openssl `unable to write \'random state\'` stderr\nSHARED_SECRET="123$(openssl rand -base64 32 2>/dev/null)"\n[ -f /etc/ipsec.secrets ] || echo ": PSK \\"${SHARED_SECRET}\\"" > /etc/ipsec.secrets\n\n# hotfix for https://github.com/gaomd/docker-ikev2-vpn-server/issues/7\nrm -f /var/run/starter.charon.pid\n\nservice ndppd start\n# http://wiki.loopop.net/doku.php?id=server:vpn:strongswanonopenvz\n/usr/sbin/ipsec start --nofork\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/etc/ipsec.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# /etc/ipsec.conf - strongSwan IPsec configuration file\n#\n# Based on http://www.strongswan.org/uml/testresults/ikev2/rw-psk-ipv4/\n\nconfig setup\n\nconn %default\n    left=%defaultroute\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn rw\n    # http://wiki.loopop.net/doku.php?id=server:vpn:strongswanonopenvz\n    # https://wiki.strongswan.org/projects/strongswan/wiki/ForwardingAndSplitTunneling\n    leftsubnet=0.0.0.0/0,::/0\n    # end ref\n    leftfirewall=yes\n    right=%any\n    rightsourceip=10.8.0.0/16,fd6a:6ce3:c8d8:7caa::/64\n    auto=add\n")),(0,a.kt)("h2",{id:"ikev2-linux-\u5ba2\u6237\u7aef"},"IKEv2 Linux \u5ba2\u6237\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apk add strongswan\nservice strongswan start\nrc-update add strongswan\n\ncat <<CONF >> /etc/ipsec.conf\nconn %default\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn pri\n  left=%defaultroute\n  leftsourceip=%config\n  # \u670d\u52a1\u7aef\u5730\u5740\n  right=192.168.1.1\n  rightsubnet=0.0.0.0/0\n  type=tunnel\n  auto=add\nCONF\n# sed -i \'s/load = yes/load = no/g\' /etc/strongswan.d/charon/constraints.conf\necho ":PSK \\"${IKEV2_PKI}\\"" >> /etc/ipsec.secrets\nipsec restart\nipsec up pri\n\nipsec statusall\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ipsec rereadsecrets\nipsec reload\nipsec restart\n")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4-ipsecconf"},"\u9ed8\u8ba4 ipsec.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},'# ipsec.conf - strongSwan IPsec configuration file\n\n# basic configuration\n\nconfig setup\n    # strictcrlpolicy=yes\n    # uniqueids = no\n\n# Add connections here.\n\n# Sample VPN connections\n\n#conn sample-self-signed\n#      leftsubnet=10.1.0.0/16\n#      leftcert=selfCert.der\n#      leftsendcert=never\n#      right=192.168.0.2\n#      rightsubnet=10.2.0.0/16\n#      rightcert=peerCert.der\n#      auto=start\n\n#conn sample-with-ca-cert\n#      leftsubnet=10.1.0.0/16\n#      leftcert=myCert.pem\n#      right=192.168.0.2\n#      rightsubnet=10.2.0.0/16\n#      rightid="C=CH, O=Linux strongSwan CN=peer name"\n#      auto=start\n')))}v.isMDXComponent=!0}}]);