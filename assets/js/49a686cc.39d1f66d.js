"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78570],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=s,f=m["".concat(o,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5273:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(22122),s=n(19756),a=(n(67294),n(3905)),c=["components"],i={title:"smallstep"},o=void 0,p={unversionedId:"security/smallstep",id:"security/smallstep",isDocsHomePage:!1,title:"smallstep",description:"- smallstep/certificates",source:"@site/notes/security/smallstep.md",sourceDirName:"security",slug:"/security/smallstep",permalink:"/notes/security/smallstep",editUrl:"https://github.com/wenerme/wener/edit/master/notes/security/smallstep.md",version:"current",frontMatter:{title:"smallstep"}},l=[{value:"ssh",id:"ssh",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,s.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/smallstep/certificates"},"smallstep/certificates"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CA, ACME server"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/smallstep/cli"},"smallstep/cli")),(0,a.kt)("li",{parentName:"ul"},"kubernetes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"step-certificates ",(0,a.kt)("a",{parentName:"li",href:"https://hub.helm.sh/charts/smallstep/step-certificates"},"https://hub.helm.sh/charts/smallstep/step-certificates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/smallstep/autocert"},"smallstep/autocert"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u5165 TLS/HTTPS \u8bc1\u4e66\u5230\u5bb9\u5668"))))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://smallstep.com/blog/everything-pki"},"Everything you should know about certificates and PKI but are too afraid to ask")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://smallstep.com/blog/use-tls"},"The case for using TLS everywhere")))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93 Badger, BoltDB, MySQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6b63\u5728\u5c06 NoSQL \u8c03\u6574\u4e3a SQL \u903b\u8f91 - \u4f1a\u652f\u6301\u66f4\u591a DB ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/smallstep/certificates/issues/282"},"smallstep/certificates#282")))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u8fd0\u884c\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u79bb\u7ebf - \u4e0d\u542f\u52a8\u670d\u52a1\uff0c\u79bb\u7ebf\u7ba1\u7406\u8bc1\u4e66"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u7ebf - \u542f\u52a8 step-ca\uff0c\u63d0\u4f9b\u63a5\u53e3\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"RA - Registration Authority",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RA \u4f5c\u4e3a CA \u7684\u524d\u7aef"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u4e3a Vault \u63d0\u4f9b ACMEv2 server \u7684\u80fd\u529b")))))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"vault \u4e0d\u652f\u6301\u4f5c\u4e3a acme server\uff0c\u5982\u679c\u9700\u8981\u79c1\u6709\u5316 acme \u53ef\u4ee5\u8003\u8651 step-ca",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/vault/issues/8690"},"hashicorp/vault#8690")),(0,a.kt)("li",{parentName:"ul"},"step-ca \u652f\u6301\u5c06 vault \u4f5c\u4e3a RA/registration authority"),(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/letsencrypt/boulder"},"letsencrypt/boulder"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# macOS\nbrew install step\n# AlpineLinux\napk add step-cli step-certificates -X http://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing/\n\n# \u751f\u6210 CA $HOME/.step/certs/root_ca.crt $HOME/.step/secrets/root_ca_key\nstep ca init --name "Local CA" --provisioner admin --dns localhost --address ":443"\nstep ca certificate --offline foo.smallstep.com foo.crt foo.key\n\nstep-ca $(step path)/config/ca.json\n# \u83b7\u53d6\u5f53\u524d\u7684 root fingerprint\nstep certificate fingerprint $(step path)/certs/root_ca.crt\n# \u53e6\u5916\u4e00\u4e2a\u8282\u70b9\nstep ca bootstrap --ca-url 127.0.0.1:443 --fingerprint <root fingerprint>\n\n# \u751f\u6210\u8bc1\u4e66\nstep ca certificate localhost srv.crt srv.key\n# \u4fdd\u6301 root ca - \u6709\u4e9b\u573a\u666f\u9700\u8981\u7528\u4e8e\u8ba4\u8bc1\nstep ca root root.crt\n\n# \u67e5\u770b\u8bc1\u4e66\u4fe1\u606f\nstep certificate inspect srv.crt --short\n\n# \u751f\u6210 CSR\nstep certificate create --csr foo.example.com foo.csr foo.key\n# \u5bf9 CSR \u7b7e\u540d\nstep ca sign foo.csr foo.crt\n# renew \u8bc1\u4e66\nstep ca renew foo.crt foo.key\n# \u56de\u6536\u8bc1\u4e66\nstep ca revoke --cert svc.crt --key svc.key\n\n\n# \u5f53\u524d\u652f\u6301 provisioner\nstep ca provisioner list\n# \u6dfb\u52a0\u540e\u9700\u8981\u91cd\u542f ca \u751f\u6548\nstep ca provisioner add you@example.com --create\n\n# step \u5305\u542b jwt \u89e3\u7801\u903b\u8f91\necho $TOKEN | step crypto jwe decrypt  | jq\n\n# \u751f\u6210\u8bc1\u4e66\u4f1a\u8981\u6c42\u9009\u62e9 provisioner\nstep ca certificate mike@example.com mike.crt mike.key\n\nstep certificate inspect --short mike.crt\n\n# \u6dfb\u52a0 google \u4f5c\u4e3a IdP\nstep ca provisioner add Google --type oidc --ca-config $(step path)/config/ca.json \\\n  --client-id 650445034027-jsjdrkiskeq9ke99ud2rqkst82ft8uch.apps.googleusercontent.com \\\n  --client-secret 6Q7lGMua_Oox4nA92QBXYypT \\\n  --configuration-endpoint https://accounts.google.com/.well-known/openid-configuration \\\n  --domain smallstep.com --domain gmail.com\n\n\n# X5C - \u53ef\u4ee5\u518d\u7528\u4e8e\u751f\u6210\u8bc1\u4e66\nstep ca provisioner add x5c-smallstep --type X5C --x5c-root $(step path)/certs/root_ca.crt\n# SSHPOP - renew, revoke, rekey an SSH certificate\nstep ca provisioner add sshpop --type SSHPOP\n# ACME - https://smallstep.com/docs/tutorials/acme-challenge\n# \u4f5c\u4e3a ACMEv2 server\n# https://{ca-host}/acme/{provisioner-name}/directory\nstep ca provisioner add acme --type ACME\n# step certificate install\n\n# K8sSA\nstep ca provisioner add my-kube-provisioner --type K8sSA --pem-keys key.pub\n')),(0,a.kt)("h2",{id:"ssh"},"ssh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316 CA \u5e26 ssh \u8bc1\u4e66\u652f\u6301\nstep ca init --ssh\n# \u751f\u6210\u914d\u7f6e\nstep ssh config --roots > /path/to/ssh_user_key.pub\n# \u914d\u7f6e CA\ncat <<EOF >> /etc/ssh/sshd_config\n# This is the CA's public key for authenticating user certificates:\nTrustedUserCAKeys /path/to/ssh_user_key.pub\nEOF\n# \u751f\u6210\u8bc1\u4e66\nstep ssh certificate alice@smallstep.com id_ecdsa\n# \u67e5\u770b\u751f\u6210\u7684\u8bc1\u4e66\u4fe1\u606f\ncat id_ecdsa-cert.pub | tail -1 | step ssh inspect\n\n# \u751f\u6210 host key\nstep ssh certificate --host internal.example.com ssh_host_ecdsa_key\ncat ssh_host_ecdsa_key-cert.pub | step ssh inspect\n# \u914d\u7f6e host key\nmv ssh_host_ecdsa_key ssh_host_ecdsa_key-cert.pub /etc/ssh\ncat <<EOF >> /etc/ssh/sshd_config\n# This is our host private key and certificate:\nHostKey /etc/ssh/ssh_host_ecdsa_key\nHostCertificate /etc/ssh/ssh_host_ecdsa_key-cert.pub\nEOF\n\n# \u81ea\u52a8\u66f4\u65b0 host key\ncat <<EOF > /etc/cron.weekly/rotate-ssh-certificate\n#!/bin/sh\nexport STEPPATH=/root/.step\ncd /etc/ssh && step ssh renew ssh_host_ecdsa_key-cert.pub ssh_host_ecdsa_key --force 2> /dev/null\nexit 0\nEOF\nchmod 755 /etc/cron.weekly/rotate-ssh-certificate\n\n# \u6dfb\u52a0\u5230 known_hosts \u4fe1\u4efb\u4e3b\u673a\nstep ssh config --host --roots\n")))}m.isMDXComponent=!0}}]);