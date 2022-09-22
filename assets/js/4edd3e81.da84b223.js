"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71136],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),c=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(a),k=n,N=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return a?r.createElement(N,i(i({ref:t},o),{},{components:a})):r.createElement(N,i({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3381:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return u},metadata:function(){return N},toc:function(){return h}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&o(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&o(e,a,t[a]);return e};const u={title:"ACME",tags:["Awesome"]},k="ACME",N={unversionedId:"security/acme-awesome",id:"security/acme-awesome",title:"ACME",description:"Provider",source:"@site/../notes/security/acme-awesome.md",sourceDirName:"security",slug:"/security/acme-awesome",permalink:"/notes/security/acme-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/acme-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"ACME",tags:["Awesome"]},sidebar:"docs",previous:{title:"\u8bcd\u6c47\u5bf9\u6bd4",permalink:"/notes/reference/words"},next:{title:"Crypto",permalink:"/notes/security/crypto"}},d={},h=[{value:"Provider",id:"provider",level:2},{value:"Challenge Types",id:"challenge-types",level:2},{value:"Client",id:"client",level:2}],f={toc:h};function y(e){var t,a=e,{components:n}=a,o=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},f),o),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"acme"}),"ACME"),(0,r.kt)("h2",s({},{id:"provider"}),"Provider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"letsencrypt",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9891\u7387")," 50 domain/week, 5 duplicate certificates/week"),(0,r.kt)("li",{parentName:"ul"},"K8S cert-manager \u914d\u7f6e\u7684\u65f6\u5019\u6ce8\u610f\uff0c\u5982\u679c\u914d\u7f6e\u7684 secret \u8986\u76d6\uff0c\u4f1a\u5bfc\u81f4"),(0,r.kt)("li",{parentName:"ul"},"\u95ee\u9898\u6392\u67e5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://crt.sh/?q=baidu.com"}),"https://crt.sh/?q=baidu.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://letsdebug.net/"}),"https://letsdebug.net/")))))),(0,r.kt)("li",{parentName:"ul"},"ZeroSSL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ACME \u8d26\u53f7\u81ea\u52a8\u7533\u8bf7 - \u9700\u8981\u6ce8\u518c\u8d26\u53f7, \u5ba2\u6237\u7aef\u8981\u652f\u6301 EAB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65e0\u9891\u7387\u9650\u5236")),(0,r.kt)("li",{parentName:"ul"},"Maximum NIST P-384"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 certificate revocation"))),(0,r.kt)("li",{parentName:"ul"},"BuyPass",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u5bf9 ACME \u8d26\u53f7\u63d0\u4f9b RSA \u8bc1\u4e66"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u52a8 ACME account \u7533\u8bf7"),(0,r.kt)("li",{parentName:"ul"},"Maximum NIST P256 certs"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 certificate revocation"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8bc1\u4e66 6 \u4e2a\u6708 - \u5bf9\u4e8e ACME \u81ea\u52a8\u5316\u6765\u8bf4\u5e76\u4e0d\u662f\u7279\u522b\u597d"),(0,r.kt)("li",{parentName:"ul"},"20 domain/week, 5 duplicate certificates/week"))),(0,r.kt)("li",{parentName:"ul"},"sslcom",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u8d26\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u8bc1\u4e66 500 \u57df\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u57df\u540d\u8bc1\u4e66\u4e0d\u9650"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/letsencrypt/boulder"}),"letsencrypt/boulder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ACME CA"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/letsencrypt/pebble"}),"letsencrypt/pebble"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"small RFC 8555 ACME test server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://crt.sh/"}),"crt.sh"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u8bb0\u5f55\u67e5\u8be2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/hashicorp/vault/issues/8690"}),"hashicorp/vault#8690"),"\nVault as an ACME-based CA"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/acmesh-official/acme.sh/wiki/Server"}),"acmesh-official/acme.sh/wiki/Server"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Provider"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"wildcard"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"ACME server URL"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Doc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"letsencrypt"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://acme-v02.api.letsencrypt.org/directory"}),"https://acme-v02.api.letsencrypt.org/directory")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://letsencrypt.org/docs/rate-limits/"}),"https://letsencrypt.org/docs/rate-limits/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"letsencrypt_test"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://acme-staging-v02.api.letsencrypt.org/directory"}),"https://acme-staging-v02.api.letsencrypt.org/directory")),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"buypass"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u274c"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://api.buypass.com/acme/directory"}),"https://api.buypass.com/acme/directory")),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"buypass_test"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://api.test4.buypass.no/acme/directory"}),"https://api.test4.buypass.no/acme/directory")),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"zerossl"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://acme.zerossl.com/v2/DV90"}),"https://acme.zerossl.com/v2/DV90")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://zerossl.com/documentation/acme/"}),"https://zerossl.com/documentation/acme/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"sslcom"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://acme.ssl.com/sslcom-dv-rsa"}),"https://acme.ssl.com/sslcom-dv-rsa"),", ",(0,r.kt)("a",s({parentName:"td"},{href:"https://acme.ssl.com/sslcom-dv-ecc"}),"https://acme.ssl.com/sslcom-dv-ecc")),(0,r.kt)("td",s({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",s({},{id:"challenge-types"}),"Challenge Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP-01",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://example.com/.well-known/acme-challenge/<challenge>")),(0,r.kt)("li",{parentName:"ul"},"\u8981\u6c42 80 \u80fd\u88ab\u5916\u90e8\u8bbf\u95ee"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u4e00\u4e2a\u57df\u540d"))),(0,r.kt)("li",{parentName:"ul"},"DNS-01",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TXT _acme-challenge.example.com <challenge>")),(0,r.kt)("li",{parentName:"ul"},"\u8981\u6c42\u80fd\u4fee\u6539 DNS"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u57df\u540d\u8bc1\u4e66"))),(0,r.kt)("li",{parentName:"ul"},"TLS-ALPN-01",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0e HTTP-01 \u7c7b\u4f3c"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e34\u65f6 cert"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 80 \u7aef\u53e3\uff0c\u4f46\u8981\u6c42 443 \u7aef\u53e3\u80fd\u88ab\u5916\u90e8\u8bbf\u95ee"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e TLS-terminating reverse proxies"))),(0,r.kt)("li",{parentName:"ul"},"TLS-SNI-01",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e9f\u5f03")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://letsencrypt.org/docs/challenge-types/"}),"Challenge Types"))),(0,r.kt)("h2",s({},{id:"client"}),"Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/acmesh-official/acme.sh"}),"acmesh-official/acme.sh"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPL-3.0, Shell"))),(0,r.kt)("li",{parentName:"ul"},"Caddy Server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/certbot/certbot"}),"certbot/certbot"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Python")))))}y.isMDXComponent=!0}}]);