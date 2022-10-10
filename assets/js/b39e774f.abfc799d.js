"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96026],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61806:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return f}});var r=t(49613),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&u(e,t,n[t]);return e};const g={title:"Nginx Ingress"},d="Nginx Ingress",m={unversionedId:"devops/kubernetes/network/nginx-ingress",id:"devops/kubernetes/network/nginx-ingress",title:"Nginx Ingress",description:"- kubernetes/ingress-nginx",source:"@site/../notes/devops/kubernetes/network/nginx-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/nginx-ingress",permalink:"/notes/devops/kubernetes/network/nginx-ingress",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/nginx-ingress.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"Nginx Ingress"},sidebar:"docs",previous:{title:"nginx-ingress version",permalink:"/notes/devops/kubernetes/network/nginx-ingress-version"},next:{title:"Traefik Ingress",permalink:"/notes/devops/kubernetes/network/traefik-ingress"}},h={},f=[{value:"config",id:"config",level:2},{value:"\u7c98\u6027\u4f1a\u8bdd",id:"\u7c98\u6027\u4f1a\u8bdd",level:3},{value:"grpc",id:"grpc",level:3},{value:"cors",id:"cors",level:3},{value:"ConfigMap",id:"configmap",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Examples",id:"examples",level:2},{value:"FastCGI",id:"fastcgi",level:2},{value:"\u9ed8\u8ba4 backend",id:"\u9ed8\u8ba4-backend",level:2},{value:"auth",id:"auth",level:2},{value:"basic",id:"basic",level:3},{value:"external basic",id:"external-basic",level:3},{value:"cert",id:"cert",level:3},{value:"controller",id:"controller",level:2}],k={toc:f};function b(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},k),u),i(n,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"nginx-ingress"}),"Nginx Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/kubernetes/ingress-nginx"}),"kubernetes/ingress-nginx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Nginx \u5b9e\u73b0\u7684 Ingress API"))),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u7248\u8def\u5f84 ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/kubernetes/ingress-nginx/blob/master/rootfs/etc/nginx/template/nginx.tmpl"}),"/etc/nginx/template/nginx.tmpl")),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/kubernetes/ingress-nginx/blob/master/rootfs/etc/nginx/lua/plugins/README.md"}),"Lua \u63d2\u4ef6")),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5168\u5c40\u6dfb\u52a0 cert",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"li"},"--default-ssl-certificate")," \u6307\u5411 secret - \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"default/foo-tls")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 self-signed"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#websockets"}),"Websocket"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"proxy-read-timeout \u548c proxy-send-timeout \u9ed8\u8ba4 60s"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e websocket \u5efa\u8bae 3600"))),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/kubectl-plugin/"}),"https://kubernetes.github.io/ingress-nginx/kubectl-plugin/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/"}),"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/"))),(0,r.kt)("admonition",p({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ssl-passthrough \u672a\u5f00\u542f\uff0c\u4e0d\u652f\u6301 SNI",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u542f\u7528\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Gateway API ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/kubernetes/ingress-nginx/issues/7517"}),"kubernetes/ingress-nginx#7517")))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'POD_NAME=$(kubectl get pods --selector "app.kubernetes.io/name=ingress-nginx" --all-namespaces --output=name | head -1)\n# \u67e5\u770b Nginx \u914d\u7f6e\nkubectl exec -n ingress-nginx -it $POD_NAME -- cat /etc/nginx/nginx.conf\n')),(0,r.kt)("h2",p({},{id:"config"}),"config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u524d\u7f00 ",(0,r.kt)("inlineCode",{parentName:"li"},"nginx.ingress.kubernetes.io")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"}),"annotations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/"}),"configmap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/user-guide/cli-arguments/"}),"args"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"annotation"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"value"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"configuration-snippet"),(0,r.kt)("td",p({parentName:"tr"},{align:null})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"server-snippet"),(0,r.kt)("td",p({parentName:"tr"},{align:null})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"service-upstream"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u8bbf\u95ee service \u800c\u4e0d\u662f pod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"upstream-vhost"),(0,r.kt)("td",p({parentName:"tr"},{align:null})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"proxy_set_header Host $host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"proxy-body-size"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"1m"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u63a8\u8350\u8bbe\u7f6e\u7a0d\u5fae\u5927\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"whitelist-source-range"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"CIDR"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"proxy-buffering"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"off"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),'# location \u81ea\u5b9a\u4e49\nnginx.ingress.kubernetes.io/configuration-snippet: |\n  more_set_headers "Request-Id: $req_id";\n# server \u81ea\u5b9a\u4e49\nnginx.ingress.kubernetes.io/server-snippet: |\n  set $agentflag 0;\n\n  if ($http_user_agent ~* "(Mobile)" ){\n    set $agentflag 1;\n  }\n\n  if ( $agentflag = 1 ) {\n    return 301 https://m.example.com;\n  }\n\n# \u522b\u540d\nnginx.ingress.kubernetes.io/server-alias: \'<alias 1>,<alias 2>\'\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"configmap"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"value"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"use-proxy-protocol"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"HAProxy Proxy Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"enable-brotli"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Safari >= 11")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"flag"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"value"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"--enable-ssl-passthrough"),(0,r.kt)("td",p({parentName:"tr"},{align:null})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))))),(0,r.kt)("h3",p({},{id:"\u7c98\u6027\u4f1a\u8bdd"}),"\u7c98\u6027\u4f1a\u8bdd"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"nginx.ingress.kubernetes.io/affinity: cookie\n# \u9ed8\u8ba4 balanced \u6a21\u5f0f - \u6269\u7f29\u5bb9\u7684\u65f6\u5019\u4f1a\u53d8\nnginx.ingress.kubernetes.io/affinity-mode: persistent\n# \u9ed8\u8ba4 INGRESSCOOKIE\nnginx.ingress.kubernetes.io/session-cookie-name: _sticky\n# \u9ed8\u8ba4\u4e3a ingress match \u7684\u8def\u5f84\n# nginx.ingress.kubernetes.io/session-cookie-path: /\n# None, Lax, Strict\n# nginx.ingress.kubernetes.io/session-cookie-samesite: None\n\n# Will omit SameSite=None attribute for older browsers which reject the more-recently defined SameSite=None value\n# nginx.ingress.kubernetes.io/session-cookie-conditional-samesite-none: 'true'\n\n# Expires\nnginx.ingress.kubernetes.io/session-cookie-expires: '172800'\n# Max-Age\nnginx.ingress.kubernetes.io/session-cookie-max-age: '172800'\n\n# \u9ed8\u8ba4 false - \u5f53\u8bf7\u6c42\u4e0a\u6e38\u5931\u8d25\u65f6\u4fee\u6539 cookie\nnginx.ingress.kubernetes.io/session-cookie-change-on-failure: 'true'\n")),(0,r.kt)("h3",p({},{id:"grpc"}),"grpc"),(0,r.kt)("admonition",p({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f body \u9ed8\u8ba4 4MB \u9650\u5236"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"annotations:\n  # GRPCS - \u540e\u7aef\u81ea\u884c\u5904\u7406 TLS\n  nginx.ingress.kubernetes.io/backend-protocol: 'GRPCS'\n  # GRPC - \u7531 nginx \u5904\u7406 TLS\n  nginx.ingress.kubernetes.io/backend-protocol: 'GRPC'\n  nginx.ingress.kubernetes.io/ssl-redirect: 'true'\n\n  # \u5982\u679c\u8981\u4f7f\u7528 stream \u8003\u8651\u8bbe\u7f6e\u957f\u4e00\u70b9\u7684\u8d85\u65f6\n  nginx.ingress.kubernetes.io/server-snippet: |\n    grpc_read_timeout \"1200s\";\n    grpc_send_timeout \"1200s\";\n    client_body_timeout \"1200s\";\n")),(0,r.kt)("h3",p({},{id:"cors"}),"cors"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"nginx.ingress.kubernetes.io/enable-cors: 'true'\n# \u9ed8\u8ba4\u6240\u6709\nnginx.ingress.kubernetes.io/cors-allow-origin: 'https://wener.me'\n")),(0,r.kt)("h3",p({},{id:"configmap"}),"ConfigMap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap"}),"configmap"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"# \u9690\u85cf Proxy \u7684\u5934\n#hide-headers: Server\n# \u9ed8\u8ba4\u4f1a\u8fd4\u56de Server \u5934\nserver-tokens: 'false'\n# \u9ed8\u8ba4 1m\nproxy-body-size: 5m\n\n# \u751f\u6210 RequestID\ngenerate-request-id: 'true'\n\n# \u81ea\u5b9a\u4e49\u811a\u672c\nmain-snippet: ''\nhttp-snippet: ''\nserver-snippet: ''\nlocation-snippet: ''\n\n# \u6765\u6e90\u767d\u540d\u5355\nwhitelist-source-range: ''\n")),(0,r.kt)("h2",p({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# HELM\nhelm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm install my-release ingress-nginx/ingress-nginx\n\n# manifest\nver=$(curl -Ls https://api.github.com/repos/kubernetes/ingress-nginx/releases/latest | jq -r .tag_name)\ncurl -LC- https://raw.githubusercontent.com/kubernetes/ingress-nginx/$ver/deploy/static/provider/baremetal/deploy.yaml -o nginx-ingress-baremetal-$ver.yaml\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-0.32.0/deploy/static/provider/baremetal/deploy.yaml\n\n# wener helm charts\nhelm repo add wener https://charts.wener.tech\nhelm install ingress-nginx wener/ingress-nginx -n ingress-nginx -v nginx.values.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"values.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"config:\n  hide-headers: 'Server'\ncontroller:\n  image:\n    # use mirror\n    # k8s.gcr.io/ingress-nginx/controller\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/ingress-nginx_controller\n    # disable digest\n    digest: ''\n  # \u4ee5 DaemonSet \u5b89\u88c5\n  kind: DaemonSet\n  # 80 \u7aef\u53e3\n  hostPort:\n    enabled: true\n  # \u662f\u5426\u542f\u7528 /metrics\n  metrics:\n    enabled: true\n    # \u662f\u5426\u5b89\u88c5 kube-prometheus\n    serviceMonitor:\n      enabled: false\n  prometheusRule:\n    enabled: false\n  admissionWebhooks:\n    patch:\n      image:\n        repository: registry.cn-hongkong.aliyuncs.com/cmi/jettech_kube-webhook-certgen\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml",metastring:'title="Proxy Protocol"',title:'"Proxy','Protocol"':!0}),"controller:\n  service:\n    annotations:\n      haproxy.org/send-proxy-protocol: proxy\n  config:\n    use-proxy-protocol: 'true'\n")),(0,r.kt)("h2",p({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"# https://github.com/kubernetes/ingress-nginx/blob/master/docs/examples/rewrite/README.md\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\n  name: rewrite\n  namespace: default\nspec:\n  rules:\n    - host: rewrite.bar.com\n      http:\n        paths:\n          - backend:\n              serviceName: http-svc\n              servicePort: 80\n            path: /something(/|$)(.*)\n")),(0,r.kt)("h2",p({},{id:"fastcgi"}),"FastCGI"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: 'nginx'\n    nginx.ingress.kubernetes.io/backend-protocol: 'FCGI'\n    nginx.ingress.kubernetes.io/fastcgi-index: 'index.php'\n    # \u5b58\u653e\u989d\u5916\u53c2\u6570\n    nginx.ingress.kubernetes.io/fastcgi-params-configmap: 'example-cm'\n    # nginx.ingress.kubernetes.io/fastcgi-params-configmap: \"example-namespace/example-configmap\"\n  name: example-app\nspec:\n  rules:\n    - host: app.example.com\n      http:\n        paths:\n          - backend:\n              serviceName: example-service\n              servicePort: fastcgi\n")),(0,r.kt)("h2",p({},{id:"\u9ed8\u8ba4-backend"}),"\u9ed8\u8ba4 backend"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: no-rules-map\nspec:\n  tls:\n    - hosts:\n        - 'wener.me'\n        - '*.wener.me'\n      secretName: wener-me-cert\n  backend:\n    serviceName: def\n    servicePort: 80\n")),(0,r.kt)("h2",p({},{id:"auth"}),"auth"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"}),"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"))),(0,r.kt)("h3",p({},{id:"basic"}),"basic"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\ndata:\n  auth: Zm9vOiRhcHIxJE9GRzNYeWJwJGNrTDBGSERBa29YWUlsSDkuY3lzVDAK\nkind: Secret\nmetadata:\n  name: basic-auth\n  namespace: default\ntype: Opaque\n---\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-with-auth\n  annotations:\n    # \u8ba4\u8bc1\u7c7b\u578b\n    nginx.ingress.kubernetes.io/auth-type: basic\n    # \u5b58\u50a8\u4e86 auth \u7684 secret\n    nginx.ingress.kubernetes.io/auth-secret: basic-auth\n    # \u663e\u793a\u4fe1\u606f\n    nginx.ingress.kubernetes.io/auth-realm: 'Authentication Required - foo'\nspec:\n  rules:\n    - host: foo.bar.com\n      http:\n        paths:\n          - path: /\n            backend:\n              serviceName: http-svc\n              servicePort: 80\n")),(0,r.kt)("h3",p({},{id:"external-basic"}),"external basic"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.ingress.kubernetes.io/auth-url: https://httpbin.org/basic-auth/user/passwd\n  name: external-auth\n  namespace: default\nspec:\n  rules:\n    - host: external-auth-01.sample.com\n      http:\n        paths:\n          - backend:\n              serviceName: http-svc\n              servicePort: 80\n            path: /\n")),(0,r.kt)("h3",p({},{id:"cert"}),"cert"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    # Enable client certificate authentication\n    nginx.ingress.kubernetes.io/auth-tls-verify-client: 'on'\n    # Create the secret containing the trusted ca certificates\n    nginx.ingress.kubernetes.io/auth-tls-secret: 'default/ca-secret'\n    # Specify the verification depth in the client certificates chain\n    nginx.ingress.kubernetes.io/auth-tls-verify-depth: '1'\n    # Specify an error page to be redirected to verification errors\n    nginx.ingress.kubernetes.io/auth-tls-error-page: 'http://www.mysite.com/error-cert.html'\n    # Specify if certificates are passed to upstream server\n    nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream: 'true'\n  name: nginx-test\n  namespace: default\nspec:\n  rules:\n    - host: mydomain.com\n      http:\n        paths:\n          - backend:\n              serviceName: http-svc\n              servicePort: 80\n            path: /\n  tls:\n    - hosts:\n        - mydomain.com\n      secretName: tls-secret\n")),(0,r.kt)("h2",p({},{id:"controller"}),"controller"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"    1 www-data  0:00 /usr/bin/dumb-init -- /nginx-ingress-controller --publish-service=ingress-nginx/ingress-nginx-controller --election-id=ingress-controller-leader --ingress-class=nginx --configmap=ingress-nginx/ingress-nginx-controller --validating-webhook=:8443 --validating-webhook-certificate=/usr/local/certificates/cert --validating-webhook-key=/usr/local/certificates/key\n    6 www-data  0:00 /nginx-ingress-controller --publish-service=ingress-nginx/ingress-nginx-controller --election-id=ingress-controller-leader --ingress-class=nginx --configmap=ingress-nginx/ingress-nginx-controller --validating-webhook=:8443 --validating-webhook-certificate=/usr/local/certificates/cert --validating-webhook-key=/usr/local/certificates/key\n   26 www-data  0:00 nginx: master process /usr/local/nginx/sbin/nginx -c /etc/nginx/nginx.conf\n   37 www-data  2:15 nginx: worker process is shutting down\n  105 www-data  0:00 /wait-shutdown\n  117 root      0:00 bash\n  136 root      0:00 ps aux\n  137 root      0:00 tee\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'/nginx-ingress-controller --help\n-------------------------------------------------------------------------------\nNGINX Ingress controller\n  Release:       v0.35.0\n  Build:         54ad65e32bcab32791ab18531a838d1c0f0811ef\n  Repository:    https://github.com/kubernetes/ingress-nginx\n  nginx version: nginx/1.19.2\n\n-------------------------------------------------------------------------------\n\nUsage of :\n      --add_dir_header                          If true, adds the file directory to the header of the log messages\n      --alsologtostderr                         log to standard error as well as files\n      --annotations-prefix string               Prefix of the Ingress annotations specific to the NGINX controller. (default "nginx.ingress.kubernetes.io")\n      --apiserver-host string                   Address of the Kubernetes API server.\n                                                Takes the form "protocol://address:port". If not specified, it is assumed the\n                                                program runs inside a Kubernetes cluster and local discovery is attempted.\n      --certificate-authority string            Path to a cert file for the certificate authority. This certificate is used\n                                                only when the flag --apiserver-host is specified.\n      --configmap string                        Name of the ConfigMap containing custom global configurations for the controller.\n      --default-backend-service string          Service used to serve HTTP requests not matching any known server name (catch-all).\n                                                Takes the form "namespace/name". The controller configures NGINX to forward\n                                                requests to the first port of this Service.\n      --default-server-port int                 Port to use for exposing the default server (catch-all). (default 8181)\n      --default-ssl-certificate string          Secret containing a SSL certificate to be used by the default HTTPS server (catch-all).\n                                                Takes the form "namespace/name".\n      --disable-catch-all                       Disable support for catch-all Ingresses\n      --election-id string                      Election id to use for Ingress status updates. (default "ingress-controller-leader")\n      --enable-metrics                          Enables the collection of NGINX metrics (default true)\n      --enable-ssl-chain-completion             Autocomplete SSL certificate chains with missing intermediate CA certificates.\n                                                Certificates uploaded to Kubernetes must have the "Authority Information Access" X.509 v3\n                                                extension for this to succeed.\n      --enable-ssl-passthrough                  Enable SSL Passthrough.\n      --health-check-path string                URL path of the health check endpoint.\n                                                Configured inside the NGINX status server. All requests received on the port\n                                                defined by the healthz-port parameter are forwarded internally to this path. (default "/healthz")\n      --health-check-timeout int                Time limit, in seconds, for a probe to health-check-path to succeed. (default 10)\n      --healthz-port int                        Port to use for the healthz endpoint. (default 10254)\n      --http-port int                           Port to use for servicing HTTP traffic. (default 80)\n      --https-port int                          Port to use for servicing HTTPS traffic. (default 443)\n      --ingress-class string                    Name of the ingress class this controller satisfies.\n                                                The class of an Ingress object is set using the field IngressClassName in Kubernetes clusters version v1.18.0 or higher or the annotation "kubernetes.io/ingress.class" (deprecated).\n                                                If this parameter is not set, or set to the default value of "nginx", it will handle ingresses with either an empty or "nginx" class name.\n      --kubeconfig string                       Path to a kubeconfig file containing authorization and API server information.\n      --log_backtrace_at traceLocation          when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                          If non-empty, write log files in this directory\n      --log_file string                         If non-empty, use this log file\n      --log_file_max_size uint                  Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                             log to standard error instead of files (default true)\n      --maxmind-edition-ids string              Maxmind edition ids to download GeoLite2 Databases. (default "GeoLite2-City,GeoLite2-ASN")\n      --maxmind-license-key string              Maxmind license key to download GeoLite2 Databases.\n                                                https://blog.maxmind.com/2019/12/18/significant-changes-to-accessing-and-using-geolite2-databases\n      --metrics-per-host                        Export metrics per-host (default true)\n      --monitor-max-batch-size int              Max batch size of NGINX metrics (default 10000)\n      --profiler-port int                       Port to use for expose the ingress controller Go profiler when it is enabled. (default 10245)\n      --profiling                               Enable profiling via web interface host:port/debug/pprof/ (default true)\n      --publish-service string                  Service fronting the Ingress controller.\n                                                Takes the form "namespace/name". When used together with update-status, the\n                                                controller mirrors the address of this service\'s endpoints to the load-balancer\n                                                status of all Ingress objects it satisfies.\n      --publish-status-address string           Customized address to set as the load-balancer status of Ingress objects this controller satisfies.\n                                                Requires the update-status parameter.\n      --report-node-internal-ip-address         Set the load-balancer status of Ingress objects to internal Node addresses instead of external.\n                                                Requires the update-status parameter.\n      --skip_headers                            If true, avoid header prefixes in the log messages\n      --skip_log_headers                        If true, avoid headers when opening log files\n      --ssl-passthrough-proxy-port int          Port to use internally for SSL Passthrough. (default 442)\n      --status-port int                         Port to use for the lua HTTP endpoint configuration. (default 10246)\n      --status-update-interval int              Time interval in seconds in which the status should check if an update is required. Default is 60 seconds (default 60)\n      --stderrthreshold severity                logs at or above this threshold go to stderr (default 2)\n      --stream-port int                         Port to use for the lua TCP/UDP endpoint configuration. (default 10247)\n      --sync-period duration                    Period at which the controller forces the repopulation of its local object stores. Disabled by default.\n      --sync-rate-limit float32                 Define the sync frequency upper limit (default 0.3)\n      --tcp-services-configmap string           Name of the ConfigMap containing the definition of the TCP services to expose.\n                                                The key in the map indicates the external port to be used. The value is a\n                                                reference to a Service in the form "namespace/name:port", where "port" can\n                                                either be a port number or name. TCP ports 80 and 443 are reserved by the\n                                                controller for servicing HTTP traffic.\n      --udp-services-configmap string           Name of the ConfigMap containing the definition of the UDP services to expose.\n                                                The key in the map indicates the external port to be used. The value is a\n                                                reference to a Service in the form "namespace/name:port", where "port" can\n                                                either be a port name or number.\n      --update-status                           Update the load-balancer status of Ingress objects this controller satisfies.\n                                                Requires setting the publish-service parameter to a valid Service reference. (default true)\n      --update-status-on-shutdown               Update the load-balancer status of Ingress objects when the controller shuts down.\n                                                Requires the update-status parameter. (default true)\n  -v, --v Level                                 number for the log level verbosity\n      --validating-webhook string               The address to start an admission controller on to validate incoming ingresses.\n                                                Takes the form "<host>:port". If not provided, no admission controller is started.\n      --validating-webhook-certificate string   The path of the validating webhook certificate PEM.\n      --validating-webhook-key string           The path of the validating webhook key PEM.\n      --version                                 Show release information about the NGINX Ingress controller and exit.\n      --vmodule moduleSpec                      comma-separated list of pattern=N settings for file-filtered logging\n      --watch-namespace string                  Namespace the controller watches for updates to Kubernetes objects.\n                                                This includes Ingresses, Services and all configuration resources. All\n                                                namespaces are watched if this parameter is left empty.\npflag: help requested\n')))}b.isMDXComponent=!0}}]);