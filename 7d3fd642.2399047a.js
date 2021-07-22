(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{1152:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),s=function(e){var a=n.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||c;return t?n.a.createElement(m,i(i({ref:a},b),{},{components:t})):n.a.createElement(m,i({ref:a},b))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=t[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},601:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return s}));var r=t(3),n=t(8),c=(t(0),t(1152)),l={id:"apacheds-kerberos",title:"ApacheDS Kerberos"},i={unversionedId:"service/auth/apacheds-kerberos",id:"service/auth/apacheds-kerberos",isDocsHomePage:!1,title:"ApacheDS Kerberos",description:"Tips",source:"@site/notes/service/auth/apacheds-kerberos.md",slug:"/service/auth/apacheds-kerberos",permalink:"/notes/service/auth/apacheds-kerberos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/apacheds-kerberos.md",version:"current",sidebar:"docs",previous:{title:"Auth \u6982\u5ff5",permalink:"/notes/service/auth/auth"},next:{title:"ApacheDS \u8fd0\u7ef4",permalink:"/notes/service/auth/apacheds-ops"}},o=[{value:"Tips",id:"tips",children:[]},{value:"kerby",id:"kerby",children:[]},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]},{value:"\u521d\u59cb\u914d\u7f6e",id:"\u521d\u59cb\u914d\u7f6e",children:[]},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[]},{value:"FAQ",id:"faq",children:[{value:"Server not found in Kerberos database while getting initial credentials",id:"server-not-found-in-kerberos-database-while-getting-initial-credentials",children:[]}]}],b={toc:o};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://directory.apache.org/apacheds/kerberos-user-guide.html"},"ApacheDS 2.0 Kerberos User Guide"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"KDC (Key DIstribution Center)"),Object(c.b)("li",{parentName:"ul"},"TGS (Ticket Granting Server)"),Object(c.b)("li",{parentName:"ul"},"AS (Authentication Server)"))),Object(c.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 Kerberos V5"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u52a0\u5bc6 - des-cbc-md5, des3-cbc-sha1-kd, aes128-cts-hmac-sha1-96, aes256-cts-hmac-sha1-96, rc4-hmac encryption"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301 UDP TCP"),Object(c.b)("li",{parentName:"ul"},"\u6bcf\u6b21\u4fee\u6539\u5bc6\u7801 version \u4f1a\u589e\u52a0"),Object(c.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u7684 RFC ",Object(c.b)("a",{parentName:"li",href:"https://directory.apache.org/apacheds/kerberos-ug/1.2.3-standards.html"},"\u6807\u51c6")),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5fc5\u987b\u8981\u660e\u6587\u5bc6\u7801\u751f\u6210 krb5 key",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5bc6\u7801\u6700\u7ec8\u4e5f\u4f1a\u4ee5 SHA")))))),Object(c.b)("h2",{id:"kerby"},"kerby"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://directory.apache.org/kerby/user-guide.html"},"Kerby User Guide")),Object(c.b)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8\u652f\u6301",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5185\u5b58"),Object(c.b)("li",{parentName:"ul"},"Json"),Object(c.b)("li",{parentName:"ul"},"Zookeeper"),Object(c.b)("li",{parentName:"ul"},"LDAP"),Object(c.b)("li",{parentName:"ul"},"Mavibot"))),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u52a0\u5bc6",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"des, des3, rc4, aes, camellia"),Object(c.b)("li",{parentName:"ul"},"\u90e8\u5206\u4f9d\u8d56 JCE - \u9700\u8981\u989d\u5916\u5b89\u88c5",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"OpenJDK \u6216\u65b0\u7248\u6709\u81ea\u5e26")))))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Encryption Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des-cbc-crc"),Object(c.b)("td",{parentName:"tr",align:null},"DES cbc mode with CRC-32 (weak)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des-cbc-md4"),Object(c.b)("td",{parentName:"tr",align:null},"DES cbc mode with RSA-MD4 (weak)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des-cbc-md5"),Object(c.b)("td",{parentName:"tr",align:null},"DES cbc mode with RSA-MD5 (weak)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des3-cbc-sha1 des3-hmac-sha1 des3-cbc-sha1-kd"),Object(c.b)("td",{parentName:"tr",align:null},"Triple DES cbc mode with HMAC/sha1")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des-hmac-sha1"),Object(c.b)("td",{parentName:"tr",align:null},"DES with HMAC/sha1 (weak)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"aes256-cts-hmac-sha1-96 aes256-cts AES-256"),Object(c.b)("td",{parentName:"tr",align:null},"CTS mode with 96-bit SHA-1 HMAC")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"aes128-cts-hmac-sha1-96 aes128-cts AES-128"),Object(c.b)("td",{parentName:"tr",align:null},"CTS mode with 96-bit SHA-1 HMAC")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"arcfour-hmac rc4-hmac arcfour-hmac-md5"),Object(c.b)("td",{parentName:"tr",align:null},"RC4 with HMAC/MD5")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"arcfour-hmac-exp rc4-hmac-exp arcfour-hmac-md5-exp"),Object(c.b)("td",{parentName:"tr",align:null},"Exportable RC4 with HMAC/MD5 (weak)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"camellia256-cts-cmac camellia256-cts"),Object(c.b)("td",{parentName:"tr",align:null},"Camellia-256 CTS mode with CMAC")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"camellia128-cts-cmac camellia128-cts"),Object(c.b)("td",{parentName:"tr",align:null},"Camellia-128 CTS mode with CMAC")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des"),Object(c.b)("td",{parentName:"tr",align:null},"The DES family: des-cbc-crc, des-cbc-md5, and des-cbc-md4 (weak)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"des3"),Object(c.b)("td",{parentName:"tr",align:null},"The triple DES family: des3-cbc-sha1")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"aes"),Object(c.b)("td",{parentName:"tr",align:null},"The AES family: aes256-cts-hmac-sha1-96 and aes128-cts-hmac-sha1-96")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"rc4"),Object(c.b)("td",{parentName:"tr",align:null},"The RC4 family: arcfour-hmac")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"camellia"),Object(c.b)("td",{parentName:"tr",align:null},"The Camellia family: camellia256-cts-cmac and camellia128-cts-cmac")))),Object(c.b)("h1",{id:"\u672c\u5730\u5b9e\u9a8c"},"\u672c\u5730\u5b9e\u9a8c"),Object(c.b)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u6620\u5c04\u76ee\u5f55\u540e\u672c\u5730\u4e5f\u53ef\u4ee5\u4f7f\u7528\ndocker run --rm -it -e TZ=Asia/Shanghai \\\n  -p 10389:10389 -p 10636:10636 \\\n  -p 60088:60088 -p 60464:60464  -p 60088:60088/udp -p 60464:60464/udp \\\n  -v $PWD/apacheds:/opt/apacheds/instances \\\n  --name apacheds wener/apacheds\n")),Object(c.b)("h2",{id:"\u521d\u59cb\u914d\u7f6e"},"\u521d\u59cb\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://directory.apache.org/apacheds/kerberos-ug/4-using-kerberos.html"},"http://directory.apache.org/apacheds/kerberos-ug/4-using-kerberos.html"))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ldif"},"# \u57fa\u7840\u9876\u5c42\u67b6\u6784\ndn: dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: domain\ndc: security\n\ndn: ou=services,dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: organizationalUnit\nou: services\n\ndn: ou=users,dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: organizationalUnit\nou: users\n\n# \u521b\u5efa\u7528\u6237 wener\ndn: uid=wener,ou=users,dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: krb5KDCEntry\nobjectClass: inetOrgPerson\nobjectClass: krb5Principal\nobjectClass: person\nobjectClass: organizationalPerson\ncn: Wener Chen\nkrb5KeyVersionNumber: 1\nkrb5PrincipalName: wener@EXAMPLE.COM\nsn: Wener\nuid: wener\nuserPassword: secret\n\n# \u521b\u5efa\u670d\u52a1\ndn: uid=ldap,ou=services,dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: organizationalUnit\nobjectClass: krb5KDCEntry\nobjectClass: uidObject\nobjectClass: krb5Principal\nkrb5KeyVersionNumber: 0\nkrb5PrincipalName: ldap/example.net@EXAMPLE.COM\nuid: ldap\nuserPassword: randomKey\nou: LDAP\n\ndn: uid=krbtgt,ou=services,dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: organizationalUnit\nobjectClass: krb5KDCEntry\nobjectClass: uidObject\nobjectClass: krb5Principal\nkrb5KeyVersionNumber: 0\nkrb5PrincipalName: krbtgt/EXAMPLE.COM@EXAMPLE.COM\nuid: krbtgt\nuserPassword:: randomkey\nou: TGT\n\ndn: uid=kpasswd,ou=services,dc=security,dc=example,dc=com\nobjectClass: top\nobjectClass: organizationalUnit\nobjectClass: krb5KDCEntry\nobjectClass: uidObject\nobjectClass: krb5Principal\nkrb5KeyVersionNumber: 0\nkrb5PrincipalName: kadmin/changepw@EXAMPLE.COM\nuid: kpasswd\nuserPassword:: randomkey\nou: KPasswd\n")),Object(c.b)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),Object(c.b)("p",null,"\u76f8\u540c\u8282\u70b9\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u4fee\u6539 hosts ",Object(c.b)("inlineCode",{parentName:"p"},"example.com")," \u6307\u5411\u672c\u5730"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"/etc/krb5.conf")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"}," [logging]\n default = FILE:/var/log/krb5libs.log\n kdc = FILE:/var/log/krb5kdc.log\n admin_server = FILE:/var/log/kadmind.log\n\n[libdefaults]\ndebug = true\ndefault_realm = EXAMPLE.COM\ndns_lookup_realm = false\ndns_lookup_kdc = false\nticket_lifetime = 24h\nrenew_lifetime = 7d\nrdns = false\nforwardable = true\nallow_weak_crypto = yes\n\n[realms]\n EXAMPLE.COM = {\n  kdc = 127.0.0.1:60088\n  chpasswd_server = 127.0.0.1:60464\n  kpasswd_server = 127.0.0.1:60464\n  default_domain = EXAMPLE.COM\n }\n\n\n[domain_realm]\n.EXAMPLE.COM = EXAMPLE.COM\nEXAMPLE.COM = EXAMPLE.COM\n")),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"server-not-found-in-kerberos-database-while-getting-initial-credentials"},"Server not found in Kerberos database while getting initial credentials"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u52a0\u5bc6\u7b97\u6cd5\u9700\u8981\u5b89\u5168\u6269\u5c55\uff0c\u5c1d\u8bd5\u8c03\u6574"),Object(c.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u6ca1\u6709\u521b\u5efa\u76f8\u5e94\u7684\u670d\u52a1")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"[21:35:42] ERROR [org.apache.directory.server.KERBEROS_LOG] - ERR_152 Unexpected exception: null\njava.lang.NullPointerException\n    at org.apache.directory.server.kerberos.kdc.authentication.AuthenticationService.verifyEncryptedTimestamp(AuthenticationService.java:335)\n    at org.apache.directory.server.kerberos.kdc.authentication.AuthenticationService.execute(AuthenticationService.java:129)\n    at org.apache.directory.server.kerberos.protocol.KerberosProtocolHandler.messageReceived(KerberosProtocolHandler.java:217)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain$TailFilter.messageReceived(DefaultIoFilterChain.java:1015)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:650)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:49)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1128)\n    at org.apache.mina.filter.codec.ProtocolCodecFilter$ProtocolDecoderOutputImpl.flush(ProtocolCodecFilter.java:413)\n    at org.apache.mina.filter.codec.ProtocolCodecFilter.messageReceived(ProtocolCodecFilter.java:257)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:650)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:49)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1128)\n    at org.apache.mina.core.filterchain.IoFilterAdapter.messageReceived(IoFilterAdapter.java:122)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:650)\n    at org.apache.mina.core.filterchain.DefaultIoFilterChain.fireMessageReceived(DefaultIoFilterChain.java:643)\n    at org.apache.mina.transport.socket.nio.NioDatagramAcceptor.readHandle(NioDatagramAcceptor.java:314)\n    at org.apache.mina.transport.socket.nio.NioDatagramAcceptor.processReadySessions(NioDatagramAcceptor.java:270)\n    at org.apache.mina.transport.socket.nio.NioDatagramAcceptor.access$700(NioDatagramAcceptor.java:68)\n    at org.apache.mina.transport.socket.nio.NioDatagramAcceptor$Acceptor.run(NioDatagramAcceptor.java:181)\n    at org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:64)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\n")))}s.isMDXComponent=!0}}]);