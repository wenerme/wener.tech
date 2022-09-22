"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23561],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12686:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],p={title:"chan_sip"},o=void 0,s={unversionedId:"voip/asterisk/chan_sip",id:"voip/asterisk/chan_sip",title:"chan_sip",description:"- chan_sip \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/voip/asterisk/chan_sip.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/chan_sip",permalink:"/notes/voip/asterisk/chan_sip",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/chan_sip.md",tags:[],version:"current",frontMatter:{title:"chan_sip"},sidebar:"docs",previous:{title:"chan_pjsip",permalink:"/notes/voip/asterisk/chan_pjsip"},next:{title:"DAHDI",permalink:"/notes/voip/asterisk/dahdi"}},u={},m=[{value:"Dial \u8bed\u6cd5",id:"dial-\u8bed\u6cd5",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"sip.conf",id:"sipconf",level:2},{value:"\u8bbe\u5907\u914d\u7f6e",id:"\u8bbe\u5907\u914d\u7f6e",level:3},{value:"\u901a\u7528\u914d\u7f6e",id:"\u901a\u7528\u914d\u7f6e",level:3},{value:"nat",id:"nat",level:2},{value:"chan_sip nat vs chan_pjsip",id:"chan_sip-nat-vs-chan_pjsip",level:3}],d={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chan_sip \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pjsip \u4e4b\u524d\u7684 sip \u901a\u9053\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6ee1\u8db3 VoIP"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u73b0\u4ee3\u5316\u901a\u8baf - WebRTC, Websocket \u7b49")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"chan_sip \u5df2\u7ecf\u5e9f\u5f03\uff0c\u5c3d\u91cf\u4f7f\u7528 chan_pjsip"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"modules.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"autoload => no\nload => chan_sip\n\n# \u81ea\u52a8\u52a0\u8f7d\nautoload => yes\n# \u6392\u9664 pjsip\nnoload => chan_pjsip\nnoload => res_pjsip\nnoload => res_pjsip_exten_state\nnoload => res_pjsip_log_forwarder\nnoload => res_pjsip_pubsub\nnoload => res_pjsip_session\n")),(0,l.kt)("h2",{id:"dial-\u8bed\u6cd5"},"Dial \u8bed\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SIP/devicename"),(0,l.kt)("li",{parentName:"ul"},"SIP/username@domain - SIP uri"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SIP/username[:password[:md5secret[:authname[:transport]]]]@host[:port]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5b9a\u4e49\u5b8c\u6574\u4fe1\u606f"))),(0,l.kt)("li",{parentName:"ul"},"SIP/devicename/extension"),(0,l.kt)("li",{parentName:"ul"},"SIP/devicename/extension/IPorHost"),(0,l.kt)("li",{parentName:"ul"},"SIP/username@domain//IPorHost"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"[![touser[@todomain]][![fromuser][@fromdomain]]]")," \u4fee\u6539 To: \u548c From:")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"devicename - \u5b9a\u4e49\u7684 peer \u540d\u5b57"),(0,l.kt)("li",{parentName:"ul"},"username@domain - \u4e92\u8054\u7f51\u4e0a\u7684 SIP \u7528\u6237 - \u5efa\u8bae\u5f00\u542f DNS SRV"),(0,l.kt)("li",{parentName:"ul"},"devicename/extension - \u7528\u4e8e\u4ee3\u7406\u573a\u666f\u3001Trunk \u7ebf\u8def",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SIP/proxyhostname/user")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"SIP/user@proxyhostname")," \u76f8\u540c")))),(0,l.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"cli"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip notify"),(0,l.kt)("td",{parentName:"tr",align:null},"Send a notify packet to a SIP peer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"`sip prune realtime [peer [< name >"),(0,l.kt)("td",{parentName:"tr",align:null},"all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip qualify peer"),(0,l.kt)("td",{parentName:"tr",align:null},"Send an OPTIONS packet to a peer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip reload"),(0,l.kt)("td",{parentName:"tr",align:null},"Reload SIP configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"`sip set debug {on"),(0,l.kt)("td",{parentName:"tr",align:null},"off")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"`sip set history {on"),(0,l.kt)("td",{parentName:"tr",align:null},"off}`")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"`sip show {channels"),(0,l.kt)("td",{parentName:"tr",align:null},"subscriptions}`")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show bridged"),(0,l.kt)("td",{parentName:"tr",align:null},"List all SIP bridges")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show channelstats"),(0,l.kt)("td",{parentName:"tr",align:null},"List statistics for active SIP channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show channel"),(0,l.kt)("td",{parentName:"tr",align:null},"Show detailed SIP channel info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show domains"),(0,l.kt)("td",{parentName:"tr",align:null},"List our local SIP domains")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show history"),(0,l.kt)("td",{parentName:"tr",align:null},"Show SIP dialog history")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show inuse"),(0,l.kt)("td",{parentName:"tr",align:null},"List all inuse/limits")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show mwi"),(0,l.kt)("td",{parentName:"tr",align:null},"Show MWI subscriptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show objects"),(0,l.kt)("td",{parentName:"tr",align:null},"List all SIP object allocations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show peers"),(0,l.kt)("td",{parentName:"tr",align:null},"List defined SIP peers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show peer"),(0,l.kt)("td",{parentName:"tr",align:null},"Show details on specific SIP peer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show registry"),(0,l.kt)("td",{parentName:"tr",align:null},"List SIP registration status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show sched"),(0,l.kt)("td",{parentName:"tr",align:null},"Present a report on the status of the scheduler queue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show settings"),(0,l.kt)("td",{parentName:"tr",align:null},"Show SIP global settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show tcp"),(0,l.kt)("td",{parentName:"tr",align:null},"List TCP Connections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show users"),(0,l.kt)("td",{parentName:"tr",align:null},"List defined SIP users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip show user"),(0,l.kt)("td",{parentName:"tr",align:null},"Show details on specific SIP user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip unregister"),(0,l.kt)("td",{parentName:"tr",align:null},"Unregister (force expiration) a SIP peer from the registry")))),(0,l.kt)("h2",{id:"sipconf"},"sip.conf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/master/configs/samples/sip.conf.sample"},"configs/samples/sip.conf.sample"))),(0,l.kt)("h3",{id:"\u8bbe\u5907\u914d\u7f6e"},"\u8bbe\u5907\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type=peer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u547c\u5165\u547c\u51fa\uff0c ip/port \u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"host=dynamic"))),(0,l.kt)("li",{parentName:"ul"},"type=user",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u547c\u5165 - user \u80fd\u547c\u53eb asterisk, asterisk \u4e0d\u80fd\u547c\u53eb user"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6ce8\u518c\u4fe1\u606f\u5339\u914d - authname, secret"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 IP \u4fe1\u606f\uff0c\u4e0d\u5173\u5fc3 host \u8bbe\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"type=friend",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u521b\u5efa friend \u548c user"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u672c\u5730\u7535\u8bdd\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"remotesecret \u547c\u51fa\u8ba4\u8bc1, secret \u547c\u5165\u8ba4\u8bc1")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u8bbe\u5907\u540d\u5b57 ",(0,l.kt)("inlineCode",{parentName:"li"},"[0-9a-z_]")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u5230\u4e86 nat \u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"li"},"qualify=yes")))),(0,l.kt)("h3",{id:"\u901a\u7528\u914d\u7f6e"},"\u901a\u7528\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5168\u76f8\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"allowguest - \u9ed8\u8ba4\u5f00\u542f"),(0,l.kt)("li",{parentName:"ul"},"permit/deny/acl - IP address filters"),(0,l.kt)("li",{parentName:"ul"},"contactpermit/contactdeny/contactacl - IP address filters for registrations"),(0,l.kt)("li",{parentName:"ul"},"context - Which set of services you offer various users")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[general]\n; \u9ed8\u8ba4 context - \u9ed8\u8ba4\u4e3a default\ncontext=public\n; \u662f\u5426\u5141\u8bb8\u533f\u540d\u547c\u53eb\n;allowguest=no\n; \u5c1d\u8bd5\u4f7f\u7528\u6388\u6743\u4fe1\u606f\u91cc\u7684 username \u5339\u914d\u800c\u4e0d\u662f From \u5934\n;match_auth_username=yes\n\n; overlap dialing - use the Incomplete application to collect the needed digits from an ambiguous dialplan match.\n; \u9ed8\u8ba4 yes\n; yes - RFC3578 overlap dialing\n; dtmf - inband, RFC2833, SIP INFO\nallowoverlap=no\n\n; \u7981\u6b62 transfer\n;allowtransfer=no\n\n; digest \u6388\u6743 realm\n; \u9ed8\u8ba4 asterisk - \u5982\u679c asterisk.conf \u8bbe\u7f6e\u4e86\u7cfb\u7edf\u540d\u5219\u9ed8\u8ba4\u4e3a\u7cfb\u7edf\u540d\u5b57 - \u9700\u8981\u5168\u5c40\u552f\u4e00\n;realm=mydomain.tld\n; \u4f7f\u7528\u57df\u540d\u5217\u8868\u4f5c\u4e3a\u57df\n;domainsasrealm=no\n\n; \u5904\u7406 'Record: on' \u5934\u903b\u8f91 - \u9ed8\u8ba4 automon, \u8bbe\u7f6e\u4e3a \u7a7a \u7981\u7528\n;recordonfeature=automixmon\n; \u5904\u7406 'Record: off' \u5934\u903b\u8f91 - \u9ed8\u8ba4 automon, \u8bbe\u7f6e\u4e3a \u7a7a \u7981\u7528\n;recordofffeature=automixmon\n\nudpbindaddr=0.0.0.0\n;rtpbindaddr=172.16.42.1\n; disallowed_methods = UPDATE\n\ntcpenable=no\ntcpbindaddr=0.0.0.0\n\ntlsenable=no\ntlsbindaddr=0.0.0.0\n\n;tcpauthtimeout = 30\n; unauthenticated sessions limit\n;tcpauthlimit = 100\n\n; \u4e0e res_pjsip_transport_websockets \u51b2\u7a81\n;websocket_enabled = true\n; \u5355\u4f4d ms\n;websocket_write_timeout = 100\n\n\ntransport=udp\n; DNS SRV lookups on outbound\n; \u53ea\u4f1a\u7528 SRV \u8bb0\u5f55 - \u7981\u7528\u540e\u5916\u547c\u65e0\u6cd5\u53ea\u4f7f\u7528\u57df\u540d\nsrvlookup=yes\n\n;pedantic=yes\n\n\n; https://wiki.asterisk.org/wiki/display/AST/IP+Quality+of+Service\n\n\n; \u5168\u5c40 outbound \u6388\u6743\u4fe1\u606f\n[authentication]\n; <user>:<secret>@<realm>\n; <user>#<md5secret>@<realm>\n;auth=mark:topsecret@digium.com\n")),(0,l.kt)("h2",{id:"nat"},"nat"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"conf"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e NAT \u5904\u7406\u903b\u8f91")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qualify=yes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u6301 NAT \u4f1a\u8bdd\u5f00\u542f")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Asterisk \u4e0d\u540c\u7248\u672c nat \u7684\u9009\u9879")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"asterisk"),(0,l.kt)("th",{parentName:"tr",align:null},"nat"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">= 1.8")),(0,l.kt)("td",{parentName:"tr",align:null},"no, force_rport, comedia, auto_force_rport, auto_comedia")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"< 1.8")),(0,l.kt)("td",{parentName:"tr",align:null},"no, yes, never, route")))),(0,l.kt)("h3",{id:"chan_sip-nat-vs-chan_pjsip"},"chan_sip nat vs chan_pjsip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"chan_sip/nat"),(0,l.kt)("th",{parentName:"tr",align:null},"chan_pjsip/rtp_symmetric"),(0,l.kt)("th",{parentName:"tr",align:null},"chan_pjsip/force_rport"),(0,l.kt)("th",{parentName:"tr",align:null},"chan_pjsip/rewrite_contact"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nat=yes"),(0,l.kt)("td",{parentName:"tr",align:null},"rtp_symmetric=yes"),(0,l.kt)("td",{parentName:"tr",align:null},"force_rport=yes"),(0,l.kt)("td",{parentName:"tr",align:null},"rewrite_contact=yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nat=no"),(0,l.kt)("td",{parentName:"tr",align:null},"rtp_symmetric=no"),(0,l.kt)("td",{parentName:"tr",align:null},"force_rport=no"),(0,l.kt)("td",{parentName:"tr",align:null},"rewrite_contact=no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nat=never"),(0,l.kt)("td",{parentName:"tr",align:null},"rtp_symmetric=no"),(0,l.kt)("td",{parentName:"tr",align:null},"force_rport=no"),(0,l.kt)("td",{parentName:"tr",align:null},"rewrite_contact=no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nat=route"),(0,l.kt)("td",{parentName:"tr",align:null},"rtp_symmetric=no"),(0,l.kt)("td",{parentName:"tr",align:null},"force_rport=yes"),(0,l.kt)("td",{parentName:"tr",align:null},"rewrite_contact=yes")))))}k.isMDXComponent=!0}}]);