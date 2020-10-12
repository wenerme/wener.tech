(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{515:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(7),c=(a(0),a(557)),s={id:"cert-manager",title:"Cert Manager"},l={unversionedId:"devops/kubernetes/app/cert-manager",id:"devops/kubernetes/app/cert-manager",isDocsHomePage:!1,title:"Cert Manager",description:"cert-manager",source:"@site/contents/tricks/devops/kubernetes/app/cert-manager.md",slug:"/devops/kubernetes/app/cert-manager",permalink:"/notes/devops/kubernetes/app/cert-manager",version:"current",sidebar:"docs",previous:{title:"Istio \u670d\u52a1\u7f51\u683c",permalink:"/notes/devops/kubernetes/platform/istio-intro"},next:{title:"Consol",permalink:"/notes/devops/kubernetes/app/k8s-consul"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Ingress",id:"ingress",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"ACME",id:"acme",children:[]}],o={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cert-manager"},"cert-manager"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jetstack/cert-manager"}),"jetstack/cert-manager")),Object(c.b)("li",{parentName:"ul"},"crds",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"issuers.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"orders.acme.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"certificaterequests.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"certificates.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"challenges.acme.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"clusterissuers.cert-manager.io"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/"}),"\u914d\u7f6e")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/usage/ingress/"}),"Ingress")),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DNS01 \u652f\u6301\u7684 Provider \u975e\u5e38\u5c11 - \u548c LEGO \u76f8\u6bd4",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"ACMEDNS"),Object(c.b)("li",{parentName:"ul"},"Akamai"),Object(c.b)("li",{parentName:"ul"},"AzureDNS"),Object(c.b)("li",{parentName:"ul"},"CloudFlare"),Object(c.b)("li",{parentName:"ul"},"DigitalOcean"),Object(c.b)("li",{parentName:"ul"},"Google CloudDNS"),Object(c.b)("li",{parentName:"ul"},"RFC-2136"),Object(c.b)("li",{parentName:"ul"},"Route53"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/acme/dns01/webhook/"}),"Webhook"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/pragkent/alidns-webhook"}),"pragkent/alidns-webhook"))))))))),Object(c.b)("h2",{id:"ingress"},"Ingress"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/usage/ingress/#supported-annotations"}),"Supported Annotations"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"annotation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"desc"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cert-manager.io/issuer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Issuser")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cert-manager.io/cluster-issuer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClusterIssuer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cert-manager.io/issuer-kind"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5916\u90e8 Issuers")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cert-manager.io/issuer-group"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5916\u90e8 Issuers")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'kubernetes.io/tls-acme: "true"'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5982\u679c\u5b89\u88c5\u65f6\u8bbe\u7f6e\u4e86 ",Object(c.b)("inlineCode",{parentName:"td"},"ingressShim.defaultIssuer")," \u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4 Issuser")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"acme.cert-manager.io/http01-ingress-class"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7528\u4e8e resolve \u7684 Ingress")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"acme.cert-manager.io/http01-edit-in-place:"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u521b\u5efa\u65b0\u7684 Ingress \u914d\u7f6e\u8fd8\u662f\u4fee\u6539\u73b0\u6709\u7684 Ingress\uff0c\u4f1a\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"td"},'"cert-manager.io/issue-temporary-certificate": "true"')," \u7528\u4e8e\u533a\u5206")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: kuard\n  annotations:\n    kubernetes.io/ingress.class: 'nginx'\n    # \u53ef\u76f4\u63a5\u4f7f\u7528\u6307\u5b9a\u7684 issuser\n    cert-manager.io/issuer: 'letsencrypt-staging'\n\nspec:\n  tls:\n    - hosts:\n        - example.example.com\n      secretName: quickstart-example-tls\n  rules:\n    - host: example.example.com\n      http:\n        paths:\n          - path: /\n            backend:\n              serviceName: kuard\n              servicePort: 80\n")),Object(c.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ver=$(curl -Ls https://api.github.com/repos/jetstack/cert-manager/releases/latest | jq -r .tag_name)\n# \u5b89\u88c5\u81ea\u5b9a\u4e49\u8d44\u6e90\ncurl -sfLO https://github.com/jetstack/cert-manager/releases/download/$ver/cert-manager.crds.yaml\nkubectl apply -f cert-manager.crds.yaml\n\n# \u521b\u5efa NS\nkubectl create namespace cert-manager\n\n# Helm \u5b89\u88c5\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\nhelm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version $ver\n")),Object(c.b)("h2",{id:"acme"},"ACME"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Cloudflare \u63a5\u53e3 Token \u7684 Secret\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-token-secret\ntype: Opaque\nstringData:\n  api-token: <API Token>\n\n---\n# Cloudflare \u63a5\u53e3 Key \u7684 Secret\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-key-secret\ntype: Opaque\nstringData:\n  api-key: <API Key>\n\n---\n# letsencrypt staging \u73af\u5883\napiVersion: cert-manager.io/v1alpha2\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-staging\n  namespace: default\nspec:\n  acme:\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    # \u751f\u4ea7\u5730\u5740\n    # server: https://acme-v02.api.letsencrypt.org/directory\n    # \u8d26\u53f7\n    email: user@example.com\n    # \u5b58\u50a8 ACME \u8d26\u53f7\u79c1\u94a5\u7684 secret \u540d\u5b57\n    privateKeySecretRef:\n      name: letsencrypt-staging\n\n    # DNS-01\n    solvers:\n      # selector \u4e3a\u7a7a\u5339\u914d\u6240\u6709\u57df\u540d\n      - selector: {}\n        dns01:\n          clouddns:\n            # The ID of the GCP project\n            # reference: https://docs.cert-manager.io/en/latest/tasks/issuers/setup-acme/dns01/google.html\n            project: $PROJECT_ID\n            # This is the secret used to access the service account\n            serviceAccountSecretRef:\n              name: clouddns-dns01-solver-svc-acct\n              key: key.json\n\n      # \u4e3a foo.com \u4f7f\u7528\u8be5 provider\n      # \u8fd8\u53ef\u4ee5\u4f7f\u7528 matchLabels \u548c dnsZones\n      - selector:\n          dnsNames:\n            - foo.com\n        dns01:\n          cloudflare:\n            email: my-cloudflare-acc@example.com\n            # \u9700\u8981\u5148\u521b\u5efa secret\n            # kubectl create secret generic cloudflare-api-key-secret\n            # CF \u652f\u6301 API Token \u548c API Key\n            apiKeySecretRef:\n              name: cloudflare-api-key-secret\n              key: api-key\n")))}b.isMDXComponent=!0},557:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(d,l(l({ref:t},o),{},{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,s=new Array(c);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<c;o++)s[o]=a[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);