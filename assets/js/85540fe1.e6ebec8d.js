"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48435],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,h=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={id:"ssl",title:"SSL"},p=void 0,o={unversionedId:"network/application/ssl",id:"network/application/ssl",title:"SSL",description:"Tips",source:"@site/notes/network/application/ssl.md",sourceDirName:"network/application",slug:"/network/application/ssl",permalink:"/notes/network/application/ssl",editUrl:"https://github.com/wenerme/wener/edit/master/notes/network/application/ssl.md",tags:[],version:"current",frontMatter:{id:"ssl",title:"SSL"}},c=[{value:"Tips",id:"tips",children:[],level:2},{value:"Convert",id:"convert",children:[],level:2},{value:"CA",id:"ca",children:[],level:2},{value:"CFSSL",id:"cfssl",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"SSL/TLS mutual authentication",id:"ssltls-mutual-authentication",children:[],level:3},{value:"Revoke",id:"revoke",children:[],level:3},{value:"Java \u542f\u52a8\u65f6 ssl \u76f8\u5173\u53c2\u6570",id:"java-\u542f\u52a8\u65f6-ssl-\u76f8\u5173\u53c2\u6570",children:[],level:3},{value:"Server Cert vs Client Cert",id:"server-cert-vs-client-cert",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations"},"https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://curl.haxx.se/docs/ssl-compared.html"},"https://curl.haxx.se/docs/ssl-compared.html"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.cyberciti.biz/faq/test-ssl-certificates-diagnosis-ssl-certificate/"},"https://www.cyberciti.biz/faq/test-ssl-certificates-diagnosis-ssl-certificate/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8d2d\u4e70"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.sslshopper.com/certificate-authority-reviews.html"},"https://www.sslshopper.com/certificate-authority-reviews.html")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"FAQ"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java \u662f\u4e0d\u652f\u6301\u6cdb\u57df\u540d\u7684, \u4f46\u662f\u652f\u6301 SAN"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8bc1\u4e66\u4e0d\u80fd\u88ab\u9650\u5236\u5bf9\u54ea\u4e9b\u57df\u540d\u8fdb\u884c\u5206\u53d1\u8bc1\u4e66, \u56e0\u6b64\u53ea\u6709\u771f\u6b63\u503c\u5f97\u4fe1\u4efb\u7684\u673a\u6784\u624d\u4f1a\u6709\u4e2d\u95f4\u8bc1\u4e66"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u7ebf\u68c0\u6d4b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.sslchecker.com/sslchecker"},"https://www.sslchecker.com/sslchecker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.sslshopper.com/ssl-checker.html"},"https://www.sslshopper.com/ssl-checker.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sslanalyzer.comodoca.com"},"https://sslanalyzer.comodoca.com")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet"},"https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java Keystore"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://portecle.sourceforge.net/"},"http://portecle.sourceforge.net/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://keystore-explorer.org/"},"http://keystore-explorer.org/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Let's Encrypt"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://letsencrypt.org/docs/rate-limits/"},"Rate Limits"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SAN \u6700\u591a 100"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5468\u8bc1\u4e66\u6700\u591a\u91cd\u590d 5 \u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u57df\u540d\u8bc1\u4e66, \u7b2c\u4e00\u5468 20, \u7b2c\u4e8c\u5468 40, \u4ee5\u6b64\u7c7b\u63a8"),(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5931\u8d25\u9650\u5236, 5\u6b21 \u6bcf\u8d26\u53f7 \u6bcf\u4e3b\u673a\u540d \u6bcf\u5c0f\u65f6"),(0,l.kt)("li",{parentName:"ul"},"new-reg, new-authz, new-cert \u5171\u4eab 20rps \u7684\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"/directory, /acme \u5171\u4eab 40rps \u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf IP \u6bcf\u5c0f\u65f6 \u6700\u591a\u521b\u5efa 10 \u4e2a\u8d26\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf 3 \u5c0f\u65f6 \u6bcf IP \u6bb5 \u6700\u591a\u521b\u5efa 500 \u4e2a\u8d26\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u53ea\u4f7f\u7528\u4e00\u4e2a\u8d26\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u591a 300 Pending Authorizations"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7533\u8bf7\u63d0\u5347\u9650\u989d"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tools"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://crt.sh/"},"crt.sh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5206\u53d1\u7684\u8bc1\u4e66"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/shred/acme4j"},"shred/acme4j"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java client for ACME (Let's Encrypt)"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Automatic Certificate Management Environment (ACME)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PEM - Privacy Enhanced Mail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DER - Distinguished Encoding Rules,"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-inform der")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SNI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://shansing.com/read/355/"},"https://shansing.com/read/355/")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u663e\u793a\u8bc1\u4e66\nopenssl s_client -showcerts -connect wener.me:443\n# SNI\nopenssl s_client -showcerts -servername wener.me -connect 104.28.26.88:443\n\n# \u622a\u53d6\u8bc1\u4e66\u90e8\u5206\necho "" | openssl s_client -connect dm-101.data.aliyun.com:443 -prexit 2>/dev/null | sed -n -e \'/BEGIN\\ CERTIFICATE/,/END\\ CERTIFICATE/ p\'\n\ncert_fetch(){\n  mkdir -p ~/.cert/$1;cd ~/.cert/$1;\n  echo "" | openssl s_client -connect $1:443 -prexit 2>/dev/null | \\\n    sed -n -e \'/BEGIN\\ CERTIFICATE/,/END\\ CERTIFICATE/ p\' > $1.pem\n}\n\n# https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning\nopenssl s_client -servername www.example.com -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64\n\n# \u4e0b\u8f7d crt\nopenssl x509 -in <(openssl s_client -connect example.com:443 -prexit 2>/dev/null) -out example.crt\n# \u5bfc\u5165 crt\nsudo keytool -importcert -file example.crt -alias example -keystore $(/usr/libexec/java_home)/jre/lib/security/cacerts -storepass changeit\n# \u5bfc\u5165 cer\nkeytool -importcert -file certificate.cer -keystore keystore.jks -alias "Alias"\n\n# \u751f\u6210 CSR\n# https://support.rackspace.com/how-to/generate-a-csr-with-openssl/\n# \u751f\u6210 Key\nopenssl genrsa -out wener.me.key 4096\n# \u751f\u6210\u65b0\u7684 CSR\npenssl req -new -sha256 -key wener.me.key -out wener.me.csr\n# \u7136\u540e\u63d0\u4ea4 wener.me.csr \u5373\u53ef\n# \u62ff\u5230\u5206\u53d1\u7684 x509 \u53ef\u751f\u6210 pem \u4ee5\u4f9b nginx \u4f7f\u7528\nopenssl x509 -in wener.me.x509 -out wener.me.pem -outform PEM\n# \u67e5\u770b\u8bc1\u4e66\u4fe1\u606f\nopenssl x509 -in wener.me.pem -text -noout\n\n# Let\'s Encrypt certbot\nbrew install certbot\ncertbot certonly --standalone --preferred-challenges tls-sni -d example.com --staple-ocsp -m example@example.com --agree-tos --work-dir . --config-dir ./config --logs-dir ./logs\n')),(0,l.kt)("h2",{id:"convert"},"Convert"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/13732826/1870054"},"https://stackoverflow.com/q/13732826/1870054")),(0,l.kt)("h2",{id:"ca"},"CA"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jamielinux.com/docs/openssl-certificate-authority/"},"https://jamielinux.com/docs/openssl-certificate-authority/"))),(0,l.kt)("h2",{id:"cfssl"},"CFSSL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/cfssl"},"https://github.com/cloudflare/cfssl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cfssl.org/scan"},"https://cfssl.org/scan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jason-riddle/generating-certs/wiki"},"https://github.com/jason-riddle/generating-certs/wiki"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\ngo get -u github.com/cloudflare/cfssl/cmd/...\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"ssltls-mutual-authentication"},"SSL/TLS mutual authentication"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u540c\u65f6\u9a8c\u8bc1\u8bc1\u4e66, \u56e0\u6b64\u8981\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e cert \u548c key"),(0,l.kt)("li",{parentName:"ul"},"Golang ClientAuthType",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NoClientCert"),(0,l.kt)("li",{parentName:"ul"},"RequestClientCert"),(0,l.kt)("li",{parentName:"ul"},"RequireAnyClientCert"),(0,l.kt)("li",{parentName:"ul"},"VerifyClientCertIfGiven"),(0,l.kt)("li",{parentName:"ul"},"RequireAndVerifyClientCert")))),(0,l.kt)("h3",{id:"revoke"},"Revoke"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jamielinux.com/docs/openssl-certificate-authority/certificate-revocation-lists.html"},"Certificate revocation lists"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[ server_cert ]\n# \u5728\u670d\u52a1\u914d\u7f6e\u4e2d\u6307\u5b9a crl\ncrlDistributionPoints = URI:http://example.com/intermediate.crl.pem\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 CLR\nopenssl ca -config intermediate/openssl.cnf \\\n      -gencrl -out intermediate/crl/intermediate.crl.pem\n# \u68c0\u67e5 crl \u4e2d\u7684\u5185\u5bb9\nopenssl crl -in intermediate/crl/intermediate.crl.pem -noout -text\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"crl.pem")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"R 160420124740Z 150411125310Z 1001 unknown ... /CN=bob@example.com\n")),(0,l.kt)("h3",{id:"java-\u542f\u52a8\u65f6-ssl-\u76f8\u5173\u53c2\u6570"},"Java \u542f\u52a8\u65f6 ssl \u76f8\u5173\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/1.5.0/docs/guide/security/jsse/JSSERefGuide.html#Debug"},"http://docs.oracle.com/javase/1.5.0/docs/guide/security/jsse/JSSERefGuide.html#Debug")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -Djavax.net.debug=all -Djavax.net.ssl.trustStore=trustStore ...\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"debug \u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"all            turn on all debugging"),(0,l.kt)("li",{parentName:"ul"},"ssl            turn on ssl debugging"))),(0,l.kt)("li",{parentName:"ul"},"ssl \u76f8\u5173\u53c2\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"record       enable per-record tracing\nhandshake    print each handshake message\nkeygen       print key generation data\nsession      print session activity\ndefaultctx   print default SSL initialization\nsslctx       print SSLContext tracing\nsessioncache print session cache tracing\nkeymanager   print key manager tracing\ntrustmanager print trust manager tracing\npluggability print pluggability tracing\n\nhandshake debugging can be widened with:\ndata         hex dump of each handshake message\nverbose      verbose handshake message printing\n\nrecord debugging can be widened with:\nplaintext    hex dump of record plaintext\npacket       print raw SSL/TLS packets\n")),(0,l.kt)("h3",{id:"server-cert-vs-client-cert"},"Server Cert vs Client Cert"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/24752105/1870054"},"https://stackoverflow.com/q/24752105/1870054")),(0,l.kt)("li",{parentName:"ul"},"Server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Signing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u4e2d\u7684\u79d8\u94a5\u80fd\u7528\u4e8e\u6807\u8bc6 CN \u4e2d\u8bf4\u660e\u7684\u670d\u52a1, \u5b9e\u4f53\u8ba4\u8bc1"))),(0,l.kt)("li",{parentName:"ul"},"Key Encipherment",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u4e2d\u7684\u79d8\u94a5\u53ef\u4ee5\u7528\u4e8e\u52a0\u5bc6\u4ece\u4f1a\u8bdd\u4e2d\u884d\u751f\u7684\u4f1a\u8bdd\u79d8\u94a5(\u5bf9\u7b49\u79d8\u94a5)"))))),(0,l.kt)("li",{parentName:"ul"},"Client",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Signing")))))}u.isMDXComponent=!0}}]);