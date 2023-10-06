"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51070],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(o,".").concat(h)]||u[h]||m[h]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>s(e,i(t)),h=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"smallstep"},k="smallstep",d={unversionedId:"security/cert/smallstep",id:"security/cert/smallstep",title:"smallstep",description:"- smallstep/certificates",source:"@site/../notes/security/cert/smallstep.md",sourceDirName:"security/cert",slug:"/security/cert/smallstep",permalink:"/notes/security/cert/smallstep",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/cert/smallstep.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"smallstep"},sidebar:"docs",previous:{title:"Let's Encrypt",permalink:"/notes/security/cert/letsencrypt"},next:{title:"cfssl",permalink:"/notes/security/cfssl"}},y={},N=[{value:"ssh",id:"ssh",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],b={toc:N},g="wrapper";function v(e){var t=e,{components:n}=t,r=h(t,["components"]);return(0,a.kt)(g,m(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"smallstep"}),"smallstep"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/smallstep/certificates"}),"smallstep/certificates"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CA, ACME server"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/smallstep/cli"}),"smallstep/cli")),(0,a.kt)("li",{parentName:"ul"},"kubernetes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"step-certificates ",(0,a.kt)("a",u({parentName:"li"},{href:"https://hub.helm.sh/charts/smallstep/step-certificates"}),"https://hub.helm.sh/charts/smallstep/step-certificates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/smallstep/autocert"}),"smallstep/autocert"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u5165 TLS/HTTPS \u8bc1\u4e66\u5230\u5bb9\u5668"))))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://smallstep.com/blog/everything-pki"}),"Everything you should know about certificates and PKI but are too afraid to ask")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://smallstep.com/blog/use-tls"}),"The case for using TLS everywhere")))),(0,a.kt)("li",{parentName:"ul"},"step-ca",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93 Badger, BoltDB, MySQL, PostgreSQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6b63\u5728\u5c06 NoSQL \u8c03\u6574\u4e3a SQL \u903b\u8f91 - \u4f1a\u652f\u6301\u66f4\u591a DB ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/smallstep/certificates/issues/282"}),"smallstep/certificates#282")))))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u8fd0\u884c\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u79bb\u7ebf - \u4e0d\u542f\u52a8\u670d\u52a1\uff0c\u79bb\u7ebf\u7ba1\u7406\u8bc1\u4e66"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u7ebf - \u542f\u52a8 step-ca\uff0c\u63d0\u4f9b\u63a5\u53e3\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"RA - Registration Authority",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RA \u4f5c\u4e3a CA \u7684\u524d\u7aef"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u4e3a Vault \u63d0\u4f9b ACMEv2 server \u7684\u80fd\u529b")))))),(0,a.kt)("admonition",u({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"vault \u4e0d\u652f\u6301\u4f5c\u4e3a acme server\uff0c\u5982\u679c\u9700\u8981\u79c1\u6709\u5316 acme \u53ef\u4ee5\u8003\u8651 step-ca",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/hashicorp/vault/issues/8690"}),"hashicorp/vault#8690")),(0,a.kt)("li",{parentName:"ul"},"step-ca \u652f\u6301\u5c06 vault \u4f5c\u4e3a RA/registration authority"),(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/letsencrypt/boulder"}),"letsencrypt/boulder")))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# macOS\nbrew install step\n# AlpineLinux\napk add step-cli step-certificates -X http://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing/\n\nstep path # \u6570\u636e\u76ee\u5f55\nSTEPPATH=/tmp/step step path\n# \u914d\u7f6e $(step path)/config/ca.json\n\n\n# \u751f\u6210 CA $HOME/.step/certs/root_ca.crt $HOME/.step/secrets/root_ca_key\ncat /dev/urandom | env LC_CTYPE=C tr -dc \'a-zA-Z0-9\' | head -c 32 > ./passwd\nstep ca init --name "Local CA" --provisioner admin --dns localhost --address ":443" --deployment-type=standalone --password-file=./passwd\nstep ca certificate --offline foo.smallstep.com foo.crt foo.key\n\nstep-ca $(step path)/config/ca.json\n# \u83b7\u53d6\u5f53\u524d\u7684 root fingerprint\nstep certificate fingerprint $(step path)/certs/root_ca.crt\n# \u53e6\u5916\u4e00\u4e2a\u8282\u70b9\nstep ca bootstrap --ca-url 127.0.0.1:443 --fingerprint <root fingerprint>\n\n# \u751f\u6210\u8bc1\u4e66\nstep ca certificate localhost srv.crt srv.key\n# \u4fdd\u6301 root ca - \u6709\u4e9b\u573a\u666f\u9700\u8981\u7528\u4e8e\u8ba4\u8bc1\nstep ca root root.crt\n\n# \u67e5\u770b\u8bc1\u4e66\u4fe1\u606f\nstep certificate inspect srv.crt --short\n\n# \u751f\u6210 CSR\nstep certificate create --csr foo.example.com foo.csr foo.key\n# \u5bf9 CSR \u7b7e\u540d\nstep ca sign foo.csr foo.crt\n# renew \u8bc1\u4e66\nstep ca renew foo.crt foo.key\n# \u56de\u6536\u8bc1\u4e66\nstep ca revoke --cert svc.crt --key svc.key\n\n\n# \u5f53\u524d\u652f\u6301 provisioner\nstep ca provisioner list\n# \u6dfb\u52a0\u540e\u9700\u8981\u91cd\u542f ca \u751f\u6548\nstep ca provisioner add you@example.com --create\n\n# step \u5305\u542b jwt \u89e3\u7801\u903b\u8f91\necho $TOKEN | step crypto jwe decrypt  | jq\n\n# \u751f\u6210\u8bc1\u4e66\u4f1a\u8981\u6c42\u9009\u62e9 provisioner\nstep ca certificate mike@example.com mike.crt mike.key\n\nstep certificate inspect --short mike.crt\n\n# \u6dfb\u52a0 google \u4f5c\u4e3a IdP\nstep ca provisioner add Google --type oidc --ca-config $(step path)/config/ca.json \\\n  --client-id 650445034027-jsjdrkiskeq9ke99ud2rqkst82ft8uch.apps.googleusercontent.com \\\n  --client-secret 6Q7lGMua_Oox4nA92QBXYypT \\\n  --configuration-endpoint https://accounts.google.com/.well-known/openid-configuration \\\n  --domain smallstep.com --domain gmail.com\n\n\n# X5C - \u53ef\u4ee5\u518d\u7528\u4e8e\u751f\u6210\u8bc1\u4e66\nstep ca provisioner add x5c-smallstep --type X5C --x5c-root $(step path)/certs/root_ca.crt\n# SSHPOP - renew, revoke, rekey an SSH certificate\nstep ca provisioner add sshpop --type SSHPOP\n# ACME - https://smallstep.com/docs/tutorials/acme-challenge\n# \u4f5c\u4e3a ACMEv2 server\n# https://{ca-host}/acme/{provisioner-name}/directory\nstep ca provisioner add acme --type ACME\n# step certificate install\n\n# K8S SA\nstep ca provisioner add my-kube-provisioner --type K8sSA --pem-keys key.pub\n')),(0,a.kt)("h2",u({},{id:"ssh"}),"ssh"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u521d\u59cb\u5316 CA \u5e26 ssh \u8bc1\u4e66\u652f\u6301\nstep ca init --ssh\n# \u751f\u6210\u914d\u7f6e\nstep ssh config --roots > /path/to/ssh_user_key.pub\n# \u914d\u7f6e CA\ncat << EOF >> /etc/ssh/sshd_config\n# This is the CA's public key for authenticating user certificates:\nTrustedUserCAKeys /path/to/ssh_user_key.pub\nEOF\n# \u751f\u6210\u8bc1\u4e66\nstep ssh certificate alice@smallstep.com id_ecdsa\n# \u67e5\u770b\u751f\u6210\u7684\u8bc1\u4e66\u4fe1\u606f\ncat id_ecdsa-cert.pub | tail -1 | step ssh inspect\n\n# \u751f\u6210 host key\nstep ssh certificate --host internal.example.com ssh_host_ecdsa_key\ncat ssh_host_ecdsa_key-cert.pub | step ssh inspect\n# \u914d\u7f6e host key\nmv ssh_host_ecdsa_key ssh_host_ecdsa_key-cert.pub /etc/ssh\ncat << EOF >> /etc/ssh/sshd_config\n# This is our host private key and certificate:\nHostKey /etc/ssh/ssh_host_ecdsa_key\nHostCertificate /etc/ssh/ssh_host_ecdsa_key-cert.pub\nEOF\n\n# \u81ea\u52a8\u66f4\u65b0 host key\ncat << EOF > /etc/cron.weekly/rotate-ssh-certificate\n#!/bin/sh\nexport STEPPATH=/root/.step\ncd /etc/ssh && step ssh renew ssh_host_ecdsa_key-cert.pub ssh_host_ecdsa_key --force 2> /dev/null\nexit 0\nEOF\nchmod 755 /etc/cron.weekly/rotate-ssh-certificate\n\n# \u6dfb\u52a0\u5230 known_hosts \u4fe1\u4efb\u4e3b\u673a\nstep ssh config --host --roots\n")),(0,a.kt)("h2",u({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"STEPPATH"),(0,a.kt)("li",{parentName:"ul"},"$(step path --base)/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"contexts.json"),(0,a.kt)("li",{parentName:"ul"},"current-context.json"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authorities/<AUTHORITY>/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profiles/<PROFILE>/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"config/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"defaults.json"),(0,a.kt)("li",{parentName:"ul"},"ca.json"))))))),(0,a.kt)("li",{parentName:"ul"},"AUTHORITY/ - \u5982\u679c\u6ca1\u6709 context \u5219\u76ee\u5f55\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"$(step path --base)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"certs/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"intermediate_ca.crt"),(0,a.kt)("li",{parentName:"ul"},"root_ca.crt"))),(0,a.kt)("li",{parentName:"ul"},"config/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ca.json"),(0,a.kt)("li",{parentName:"ul"},"defaults.json"))),(0,a.kt)("li",{parentName:"ul"},"db"),(0,a.kt)("li",{parentName:"ul"},"secrets",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"intermediate_ca_key"),(0,a.kt)("li",{parentName:"ul"},"root_ca_key"))),(0,a.kt)("li",{parentName:"ul"},"templates")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'tite="contexts.json"',tite:'"contexts.json"'}),'{\n  "alpha-one": {\n    "authority": "alpha-one.ca.smallstep.com",\n    "profile": "alpha-one"\n  },\n  "alpha-two": {\n    "authority": "alpha-two.ca.smallstep.com",\n    "profile": "alpha-two"\n  },\n  "beta": {\n    "authority": "beta.ca.smallstep.com",\n    "profile": "beta"\n  }\n}\n')))}v.isMDXComponent=!0}}]);