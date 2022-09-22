"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93270],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,N=m["".concat(o,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91069:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],p={title:"Asterisk Network"},o=void 0,s={unversionedId:"voip/asterisk/asterisk-network",id:"voip/asterisk/asterisk-network",title:"Asterisk Network",description:"Asterisk 11+ \u652f\u6301 ICE",source:"@site/notes/voip/asterisk/asterisk-network.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/asterisk-network",permalink:"/notes/voip/asterisk/asterisk-network",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-network.md",tags:[],version:"current",frontMatter:{title:"Asterisk Network"},sidebar:"docs",previous:{title:"Asterisk Modules",permalink:"/notes/voip/asterisk/asterisk-moduels"},next:{title:"Asterisk QMI",permalink:"/notes/voip/asterisk/asterisk-qmi"}},u={},k=[{value:"sip.conf",id:"sipconf",level:2},{value:"nat",id:"nat-1",level:3},{value:"tcpdump",id:"tcpdump",level:2},{value:"wireshark",id:"wireshark",level:2},{value:"nftables \u8f6c\u53d1",id:"nftables-\u8f6c\u53d1",level:2},{value:"IPTables \u8f6c\u53d1",id:"iptables-\u8f6c\u53d1",level:2}],m={toc:k};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Asterisk 11+ \u652f\u6301 ICE")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Asterisk \u662f B2BUA back-to-back user agent - \u4e0d\u662f SIP Proxy"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.voip-info.org/asterisk-sip-nat"},"Asterisk sip nat")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.voip-info.org/asterisk-firewall-rules"},"Asterisk Firewall Rules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/PJSIP+with+Proxies"},"PJSIP with Proxies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.asteriskguru.com/tutorials/sip_nat_oneway_or_no_audio_asterisk.html"},"SIP with NAT or Firewalls")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.asterisk.org/sip-and-rtp-routing/"},"SIP and RTP Routing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/SUKHOI27SMK/article/details/40107553"},"https://blog.csdn.net/SUKHOI27SMK/article/details/40107553"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5060/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"sip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5060/tcp"),(0,l.kt)("td",{parentName:"tr",align:null},"sip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4569/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"IAX2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5036/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"IAX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10000-20000/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"RTP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2727/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"MGCP")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nmap 192.168.1.1 -P0 -p 5060 -sU\n")),(0,l.kt)("h1",{id:"nat"},"NAT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.voip-info.org/asterisk-sip-nat-solutions/"},"Asterisk SIP NAT solutions"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"case"),(0,l.kt)("th",{parentName:"tr",align:null},"asterisk role"),(0,l.kt)("th",{parentName:"tr",align:null},"other"),(0,l.kt)("th",{parentName:"tr",align:null},"nat"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#1"),(0,l.kt)("td",{parentName:"tr",align:null},"client nat"),(0,l.kt)("td",{parentName:"tr",align:null},"outside sip"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#2"),(0,l.kt)("td",{parentName:"tr",align:null},"client nat"),(0,l.kt)("td",{parentName:"tr",align:null},"inside sip"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#3"),(0,l.kt)("td",{parentName:"tr",align:null},"server nat"),(0,l.kt)("td",{parentName:"tr",align:null},"outside client"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#4"),(0,l.kt)("td",{parentName:"tr",align:null},"server nat"),(0,l.kt)("td",{parentName:"tr",align:null},"outside client nat"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#5"),(0,l.kt)("td",{parentName:"tr",align:null},"server nat"),(0,l.kt)("td",{parentName:"tr",align:null},"inside client"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#6"),(0,l.kt)("td",{parentName:"tr",align:null},"client"),(0,l.kt)("td",{parentName:"tr",align:null},"outside sip"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#7"),(0,l.kt)("td",{parentName:"tr",align:null},"client"),(0,l.kt)("td",{parentName:"tr",align:null},"inside sip"),(0,l.kt)("td",{parentName:"tr",align:null},"yes - #3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#8"),(0,l.kt)("td",{parentName:"tr",align:null},"server nat"),(0,l.kt)("td",{parentName:"tr",align:null},"outside client"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#9"),(0,l.kt)("td",{parentName:"tr",align:null},"server nat"),(0,l.kt)("td",{parentName:"tr",align:null},"inside client"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"SIP outside proxy"),(0,l.kt)("li",{parentName:"ol"},"OK"),(0,l.kt)("li",{parentName:"ol"},"1:1 \u7aef\u53e3\u8f6c\u53d1"),(0,l.kt)("li",{parentName:"ol"},"\u7aef\u53e3\u8f6c\u53d1 + \u5ba2\u6237\u7aef STUN"),(0,l.kt)("li",{parentName:"ol"},"OK"),(0,l.kt)("li",{parentName:"ol"},"OK"),(0,l.kt)("li",{parentName:"ol"},"\u540c #3"),(0,l.kt)("li",{parentName:"ol"},"OK"),(0,l.kt)("li",{parentName:"ol"},"nat=yes, qualify=xxx, \u5ba2\u6237\u7aef\u53ef\u4ee5 stun \u8f85\u52a9")),(0,l.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h2",{id:"sipconf"},"sip.conf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"asterisk ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/master/configs/samples/sip.conf.sample#L869"},"nat support")),(0,l.kt)("li",{parentName:"ul"},"asterisk 1.8 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/1.8/configs/sip.conf.sample#L761"},"nat support")),(0,l.kt)("li",{parentName:"ul"},"symmetric RTP"),(0,l.kt)("li",{parentName:"ul"},"Asterisk will always send RTP packets from the same port number it expects to receive them on.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u53ea\u5728 general \u914d\u7f6e nat \u76f8\u5173\u9009\u9879",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684 nat \u914d\u7f6e\u53ef\u80fd\u76f8\u4e92\u5f71\u54cd"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57fa\u7840\u670d\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[general]\nport = 5060\nbindaddr = 0.0.0.0\ncontext = error\nqualify = no\nsrvlookup = yes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[general]\n; \u533a\u5206 inside \u548c outside\n; \u5224\u65ad\u662f\u5426 NAT\nlocalnet=192.168.0.0/255.255.0.0\n; SIP \u548c SDP \u4f7f\u7528\u7684\u9759\u6001\u5730\u5740 - \u7aef\u53e3\u9ed8\u8ba4\u4e3a udpbindaddr\n; hostname \u542f\u52a8\u65f6\u67e5\u8be2\u4e00\u6b21\n; externip\nexternaddr = 12.34.56.78:9900\n; externtcpport = 9900\n; externtlsport = 12600\n\n; \u540c externaddr - \u6bcf\u9694 externrefresh(\u9ed8\u8ba4 10s) \u67e5\u8be2\u4e00\u6b21 hostname\nexternhost = hostname[:port]\nexternrefresh = 10\n\n; no - use rport if remote request\n; force_rport - \u5f3a\u5236 rport - \u9ed8\u8ba4\n; yes - force_rport + comedia RTP\n; comedia - no + comedia RTP\n; comedia - connection-oriented media\nnat = force_rport\n\n; \u4fee\u6539 audio, video, text \u7b49 SDP \u5730\u5740\nmedia_address =\n")),(0,l.kt)("h3",{id:"nat-1"},"nat"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nat=yes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Asterisk \u5ffd\u7565 SIP, SDP \u5934\u4e2d\u7684\u5730\u5740\u4fe1\u606f, \u76f4\u63a5\u8fd4\u56de\u7ed9\u53d1\u9001\u8005\u7684 IP \u5730\u5740\u548c\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236 RFC 3581\uff0c \u5f00\u542f ",(0,l.kt)("a",{parentName:"li",href:"https://www.voip-info.org/rtp-symmetric"},"\u5bf9\u79f0 RTP")))),(0,l.kt)("li",{parentName:"ul"},"net=never - 2004 \u5e74 7 \u6708 29 \u6dfb\u52a0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e UA/\u5ba2\u6237\u7aef \u4e0d\u652f\u6301 rport \u5e38\u89c1"),(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u540e\u6dfb\u52a0 route \u9009\u9879 - \u6dfb\u52a0\u53c2\u6570\u63a7\u5236\u662f\u5426\u652f\u6301")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"nat"),(0,l.kt)("th",{parentName:"tr",align:null},"rfc3581"),(0,l.kt)("th",{parentName:"tr",align:null},"Symmetric RTP"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"force"),(0,l.kt)("td",{parentName:"tr",align:null},"enable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"disable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_rport"),(0,l.kt)("td",{parentName:"tr",align:null},"force"),(0,l.kt)("td",{parentName:"tr",align:null},"disable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comedia"),(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"enable")))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"tcpdump"},"tcpdump"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# UDP\ntcpdump -n dst portrange 10000-11000\n\ntcpdump -i bond3 udp port 5060 or udp portrange 10000-20000\n")),(0,l.kt)("h2",{id:"wireshark"},"wireshark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh 192.168.1.2 sudo tcpdump -U -s0 'port 5060 or udp portrange 10000-20000' -i eth0 -w - | wireshark -k -i -\n")),(0,l.kt)("h2",{id:"nftables-\u8f6c\u53d1"},"nftables \u8f6c\u53d1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# SIP\niifname "wan0" udp dport 5060 counter dnat to 192.168.1.2\niifname "wan0" tcp dport 5060 counter dnat to 192.168.1.2\n# RTP\niifname "wan0" udp dport 10000-20000 counter dnat to 192.168.1.2\n# IAX\niifname "wan0" udp dport 4569 counter dnat to 192.168.1.2\niifname "wan0" udp dport 5036 counter dnat to 192.168.1.2\n# MGCP\niifname "wan0" udp dport 2727 counter dnat to 192.168.1.2\n')),(0,l.kt)("h2",{id:"iptables-\u8f6c\u53d1"},"IPTables \u8f6c\u53d1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# SIP\niptables -A INPUT -p udp -m udp --dport 5060 -j ACCEPT\niptables -A INPUT -p tcp -m tcp --dport 5060 -j ACCEPT\n\n# IAX2- the IAX protocol\niptables -A INPUT -p udp -m udp --dport 4569 -j ACCEPT\n# IAX\niptables -A INPUT -p udp -m udp --dport 5036 -j ACCEPT\n# RTP\niptables -A INPUT -p udp -m udp --dport 10000:20000 -j ACCEPT\n# MGCP\niptables -A INPUT -p udp -m udp --dport 2727 -j ACCEPT\n")))}d.isMDXComponent=!0}}]);