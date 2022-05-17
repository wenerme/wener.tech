"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81733],{3905:function(e,t,r){r.d(t,{Zo:function(){return k},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},k=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,N=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return r?a.createElement(N,i(i({ref:t},k),{},{components:r})):a.createElement(N,i({ref:t},k))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77014:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],p={id:"kerberos",title:"Kerberos"},o=void 0,u={unversionedId:"service/auth/kerberos/kerberos",id:"service/auth/kerberos/kerberos",title:"Kerberos",description:"Tips",source:"@site/notes/service/auth/kerberos/README.md",sourceDirName:"service/auth/kerberos",slug:"/service/auth/kerberos/",permalink:"/notes/service/auth/kerberos/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/kerberos/README.md",tags:[],version:"current",frontMatter:{id:"kerberos",title:"Kerberos"},sidebar:"docs",previous:{title:"Hydra",permalink:"/notes/service/auth/hydra"},next:{title:"Kerberos Awesome",permalink:"/notes/service/auth/kerberos/kerberos-awesome"}},k={},s=[{value:"Tips",id:"tips",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"Keytab",id:"keytab",level:2},{value:"SSH",id:"ssh",level:2},{value:"NFS",id:"nfs",level:2},{value:"Manual",id:"manual",level:2},{value:"\u8bcd\u6c47",id:"\u8bcd\u6c47",level:2},{value:"KVNO - Key Version Number",id:"kvno---key-version-number",level:3},{value:"GSSAPI - Generic Security Services Application Program Interface",id:"gssapi---generic-security-services-application-program-interface",level:3}],m={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/"},"Kerberos: The Network Authentication Protocol"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/krb5-latest/doc/"},"\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"network authentication protocol"),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u4e0d\u4f1a\u88ab\u4f20\u8f93 - \u4f7f\u7528\u6709 TTL \u7684 Tickets"),(0,l.kt)("li",{parentName:"ul"},"SSO \u4f53\u7cfb - \u5355\u4e2a Tickets \u53ef\u4ee5\u8bbf\u95ee\u8f83\u591a\u7684\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"KDC \u4f5c\u4e3a\u53ef\u4fe1\u7684\u7b2c\u4e09\u65b9 - \u7ba1\u7406\u6240\u6709\u7684\u7528\u6237\u548c\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u53cc\u5411\u9274\u6743\u7cfb\u7edf - \u7c7b\u4f3c mTLS"),(0,l.kt)("li",{parentName:"ul"},"Windows \u73af\u5883\u4e0b\u5927\u91cf\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Samba"),(0,l.kt)("li",{parentName:"ul"},"SSH"),(0,l.kt)("li",{parentName:"ul"},"NFS"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668 - Chrome, Firefox"))),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7aef\u53e3 88/udp/tcp \u548c 464/udp/tcp"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 SVR \u907f\u514d\u6307\u5b9a\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ArchLinux ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Kerberos"},"Kerberos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/kfw-4.1/kfw-4.1/kfw-4.1-help/html/getting_started.htm"},"Getting Started"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"88"),(0,l.kt)("td",{parentName:"tr",align:null},"Kerberos authentication system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"464"),(0,l.kt)("td",{parentName:"tr",align:null},"Kerberos Change/Set password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"543"),(0,l.kt)("td",{parentName:"tr",align:null},"klogin, Kerberos login")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"544"),(0,l.kt)("td",{parentName:"tr",align:null},"kshell, Kerberos Remote shell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"749"),(0,l.kt)("td",{parentName:"tr",align:null},"Kerberos (protocol) administration","[10]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"750"),(0,l.kt)("td",{parentName:"tr",align:null},"kerberos-iv, Kerberos version IV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"751"),(0,l.kt)("td",{parentName:"tr",align:null},"kerberos_master, Kerberos authentication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"752"),(0,l.kt)("td",{parentName:"tr",align:null},"passwd_server, Kerberos password (kpasswd) server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"754"),(0,l.kt)("td",{parentName:"tr",align:null},"krb5_prop, Kerberos v5 slave propagation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"760"),(0,l.kt)("td",{parentName:"tr",align:null},"krbupdate, Kerberos registration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1109"),(0,l.kt)("td",{parentName:"tr",align:null},"Kerberos Post Office Protocol")))),(0,l.kt)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[logging]\n# \u9ed8\u8ba4\u914d\u7f6e\n[libdefaults]\ndns_lookup_realm = false\nticket_lifetime = 24h\nrenew_lifetime = 7d\nforwardable = true\nrdns = false\n# \u9ed8\u8ba4\u57df\ndefault_realm = EXAMPLE.COM\n\n# \u57df\u914d\u7f6e\n[realms]\nEXAMPLE.COM = {\n  kdc = example.com:60088\n  kpasswd_server = example.com:60464\n}\n\n# \u57df\u540d\u6620\u5c04\u57df\n[domain_realm]\n.example.com = EXAMPLE.COM\nexample.com = EXAMPLE.COM\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\nkinit wener\n# \u67e5\u770b\u7f13\u5b58\u6388\u6743\nklist\n# \u4fee\u6539\u5bc6\u7801\nkpasswd\n")),(0,l.kt)("h2",{id:"keytab"},"Keytab"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b principals \u548c encrypted keys",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u5bc6\u94a5\u7531\u5bc6\u7801\u884d\u751f\u800c\u6210 = \u52a0\u5bc6\u7b97\u6cd5(\u5bc6\u7801)"))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 keytab \u8bbf\u95ee\u65e0\u9700\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5bc6\u7801\u65f6\u9700\u8981\u4ece\u65b0\u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u811a\u672c\u81ea\u52a8\u6388\u6743"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"KRB5_KTNAME")," ",(0,l.kt)("inlineCode",{parentName:"li"},"KRB5_CLIENT_KTNAME")," \u6307\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"default_keytab_name")," ",(0,l.kt)("inlineCode",{parentName:"li"},"default_client_keytab_name")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/www/krb5-latest/doc/basic/keytab_def.html"},"keytab")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kb.iu.edu/d/aumh"},"Use a keytab"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 Keytab\nktutil\n# \u9700\u8981\u6ce8\u610f -k \u662f KVNO \u9700\u8981\u4e0e\u5b58\u50a8\u7684\u4e00\u81f4\naddent -password -p wener@EXAMPLE.COM -k 0 -e aes128-cts-hmac-sha1-96\nwkt wener.keytab\nquite\n\nkinit wener@EXAMPLE.COM -k -t wener.keytab\nklist -k wener.keytab\n# \u53ef\u67e5\u770b tab \u5185\u4fe1\u606f\nfile wener.keytab\n")),(0,l.kt)("h2",{id:"ssh"},"SSH"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u524d\u4e3a\u670d\u52a1\u7aef\u751f\u6210 keytab")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/ssh/sshd_config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"# GSSAPI Options\nGSSAPIAuthentication yes\nGSSAPICleanupCredentials yes\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/ssh/ssh_config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Host *\n  GSSAPIAuthentication yes\n  GSSAPIDelegateCredentials yes\n")),(0,l.kt)("h2",{id:"nfs"},"NFS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/exports")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sec=krb5 - \u53ea\u7528\u4e8e\u8ba4\u8bc1\uff0c\u4f20\u8f93\u4e0d\u8ba4\u8bc1\u4e0d\u52a0\u5bc6"),(0,l.kt)("li",{parentName:"ul"},"sec=krb5i - \u7528\u4e8e\u8ba4\u8bc1\u548c\u5b8c\u6574\u6027\uff08integrity\uff09\u68c0\u6d4b\uff0c\u4f20\u8f93\u4e0d\u52a0\u5bc6"),(0,l.kt)("li",{parentName:"ul"},"sec=krb5p - \u7528\u4e8e\u8ba4\u8bc1\u548c\u52a0\u5bc6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/srv/export *(rw,async,no_subtree_check,no_root_squash,sec=krb5p)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u80fd\u9700\u8981 -t nfs4 -o sec=krb5p\n# \u53ef\u52a0 -vv \u8c03\u8bd5\nmount nfsserver:/srv/export /mnt/\n")),(0,l.kt)("h2",{id:"manual"},"Manual"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/krb5-latest/doc/index.html"},"Kerberos Documentation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/krb5-latest/doc/admin/database.html"},"Database administration")))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"db2 - Berkeley database"),(0,l.kt)("li",{parentName:"ul"},"klmdb"),(0,l.kt)("li",{parentName:"ul"},"kldap")))),(0,l.kt)("h2",{id:"\u8bcd\u6c47"},"\u8bcd\u6c47"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"KDC - Key Distribut Center"),(0,l.kt)("li",{parentName:"ul"},"SPNEGO - Simple and Protected GSSAPI Negotiation Mechanism"),(0,l.kt)("li",{parentName:"ul"},"PAC"),(0,l.kt)("li",{parentName:"ul"},"Server <- NTLM Auth -> KDC"),(0,l.kt)("li",{parentName:"ul"},"Client <- Kerberos Auth -> KDC",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"-> AS_REQ"),(0,l.kt)("li",{parentName:"ul"},"<- AS_REP - ticket"),(0,l.kt)("li",{parentName:"ul"},"-> TGS_REQ -> Ticket Granting Server"),(0,l.kt)("li",{parentName:"ul"},"<- TGS_REP - service ticket"),(0,l.kt)("li",{parentName:"ul"},"--\x3e AP_REQ -> Server - service ticket"),(0,l.kt)("li",{parentName:"ul"},"<-- AP_REP <-- Server - UDP, TCP/large ticket"))),(0,l.kt)("li",{parentName:"ul"},"SPN - Service Principal Name",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"svc/name@realm - HTTP/",(0,l.kt)("a",{parentName:"li",href:"http://www.mydomain.org@MYDOMAIN.ORG"},"www.mydomain.org@MYDOMAIN.ORG")))),(0,l.kt)("li",{parentName:"ul"},"TGT - Ticket Granting Ticket"),(0,l.kt)("li",{parentName:"ul"},"Delegation - constrained & proxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"client --\x3e server --\x3e db"),(0,l.kt)("li",{parentName:"ul"},"tgt --\x3e delegate --\x3e db"))),(0,l.kt)("li",{parentName:"ul"},"Protocol Transition",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"validate user"),(0,l.kt)("li",{parentName:"ul"},"kerberos ticket request on user's behalf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"service for user to self"))),(0,l.kt)("li",{parentName:"ul"},"perform constrained delegation"))),(0,l.kt)("li",{parentName:"ul"},"APM - Access Policy Manager"),(0,l.kt)("li",{parentName:"ul"},"BIG-IP APM"),(0,l.kt)("li",{parentName:"ul"},"APM Session"),(0,l.kt)("li",{parentName:"ul"},"VPE")),(0,l.kt)("h3",{id:"kvno---key-version-number"},"KVNO - Key Version Number"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kerberos Pricinple")),(0,l.kt)("h3",{id:"gssapi---generic-security-services-application-program-interface"},"GSSAPI - Generic Security Services Application Program Interface"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5c42\u9762\u7684\u6807\u51c6\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u53ef\u4f7f\u7528\u4e0d\u540c Kerberos \u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface"},"https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface"))))}c.isMDXComponent=!0}}]);