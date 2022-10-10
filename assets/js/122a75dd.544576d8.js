"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95233],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21492:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e};const c={title:"emissary-ingress"},d="emissary-ingress",k={unversionedId:"devops/kubernetes/network/emissary-ingress",id:"devops/kubernetes/network/emissary-ingress",title:"emissary-ingress",description:"- emissary-ingress/emissary",source:"@site/../notes/devops/kubernetes/network/emissary-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/emissary-ingress",permalink:"/notes/devops/kubernetes/network/emissary-ingress",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/emissary-ingress.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{title:"emissary-ingress"},sidebar:"docs",previous:{title:"cilium",permalink:"/notes/devops/kubernetes/network/cilium"},next:{title:"Flannel",permalink:"/notes/devops/kubernetes/network/flannel"}},f={},b=[{value:"CDR",id:"cdr",level:2},{value:"Module",id:"module",level:2}],y={toc:b};function h(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),m),s(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"emissary-ingress"}),"emissary-ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/emissary-ingress/emissary"}),"emissary-ingress/emissary"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Go+Python"),(0,r.kt)("li",{parentName:"ul"},"API Gateway + Layer 7 LB + Kubernetes Ingress"),(0,r.kt)("li",{parentName:"ul"},"Envoy Proxy"),(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4e3a Ambassador API Gateway"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Kubernetest Ingress \u548c Gateway API"),(0,r.kt)("li",{parentName:"ul"},"\u5f88\u591a CDR \u4f9b\u81ea\u5b9a\u4e49\u670d\u52a1"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.getambassador.io/docs/emissary/latest/about/alternatives/"}),"vs. Others")),(0,r.kt)("li",{parentName:"ul"},"vs. Ambassador Edge Stack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Edge Stack \u7684\u6838\u5fc3 - \u4f5c\u4e3a\u4e86 CNCF \u5b75\u5316\u9879\u76ee"))))),(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8def\u7531 - Ingress, Gateway API"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168 - AuthService, RateLimitService"),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u63a7 - TracingService",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"tracing"))),(0,r.kt)("li",{parentName:"ul"},"\u7edf\u8ba1 - statd, /metrics"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u6210 - Knative, Istio, Linkerd2, Consul")))),(0,r.kt)("h2",u({},{id:"cdr"}),"CDR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getambassador.io/v3alpha1"),(0,r.kt)("li",{parentName:"ul"},"Host - \u53ef\u8bbf\u95ee\u5165\u53e3 Hostname"),(0,r.kt)("li",{parentName:"ul"},"Listener - \u5b9a\u4e49\u76d1\u542c\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"Mapping - HTTP \u6620\u5c04\u5230 Host"),(0,r.kt)("li",{parentName:"ul"},"TCPMappings"),(0,r.kt)("li",{parentName:"ul"},"Module - \u7cfb\u7edf\u7eac\u5ea6\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"KubernetesServiceResolver"),(0,r.kt)("li",{parentName:"ul"},"KubernetesEndpointResolver"),(0,r.kt)("li",{parentName:"ul"},"ConsulResolver"))),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AuthService - \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ambassador \u5185\u4f7f\u7528 External, Filter"))),(0,r.kt)("li",{parentName:"ul"},"LogService"),(0,r.kt)("li",{parentName:"ul"},"RateLimitService"),(0,r.kt)("li",{parentName:"ul"},"TracingService",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"lightstep, zipkin, datadog")))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: getambassador.io/v3alpha1\nkind: Host\nmetadata:\n  name: minimal-host\nspec:\n  # \u652f\u6301 *.example.com, host.example.*\n  hostname: host.example.com\n  # \u9009\u62e9 Mapping\n  mappingSelector:\n    matchLabels:\n      examplehost: host\n  acmeProvider:\n    authority: none\n    email: julian@example.com\n  tlsSecret:\n    name: tls-cert\n  requestPolicy:\n    insecure:\n      # Redirect, Route, Reject\n      # \u9ed8\u8ba4 HTTP \u4f1a\u8df3\u8f6c HTTPS\n      action: Redirect\n      additionalPort: 8080\n---\napiVersion: getambassador.io/v3alpha1\nkind: TLSContext\nmetadata:\n  name: upstream-context\nspec:\n  hosts: []\n  secret: upstream-certs\n  # self-signed\n  # secret: self-signed-cert\n  min_tls_version: v1.3\n  sni: some-sni-hostname\n---\napiVersion: getambassador.io/v3alpha1\nkind: Mapping\nmetadata:\n  name: mapping-with-label-match\n  labels:\n    examplehost: host\nspec:\n  # \u53ef\u4ee5\u914d\u7f6e hostname \u9009\u62e9 Host\n  hostname: '*.example.com'\n  prefix: /httpbin/\n  service: http://httpbin.org\n  host_rewrite: httpbin.org\n  tls: upstream-context\n\n---\napiVersion: getambassador.io/v3alpha1\nkind: Listener\nmetadata:\n  name: example-listener\nspec:\n  port: 8080\n  protocol: HTTPS # HTTP, HTTPS, HTTPPROXY, HTTPSPROXY, TCP\n  protocolStack: [HTTP, TCP]\n  securityModel: XFP # XFP (for X-Forwarded-Proto), SECURE, INSECURE\n  statsPrefix: example-listener # default depends on protocol\n  l7Depth: 0\n  hostBinding:\n    namespace:\n      from: SELF # SELF, ALL\n    selector: ... # Kubernetes label selector\n\n---\napiVersion: getambassador.io/v3alpha1\nkind: AuthService\nmetadata:\n  name: authentication\nspec:\n  ambassador_id: ['ambassador-1']\n  auth_service: 'example-auth.authentication:3000'\n  tls: true\n  proto: http\n  timeout_ms: 5000\n  include_body:\n    max_bytes: 4096\n    allow_partial: true\n  status_on_error:\n    code: 403\n  failure_mode_allow: false\n\n  # proto: grpc only\n  protocol_version: v2\n\n  # proto: http only\n  path_prefix: '/path'\n  allowed_request_headers:\n    - 'x-example-header'\n  allowed_authorization_headers:\n    - 'x-qotm-session'\n  add_auth_headers:\n    x-added-auth: auth-added\n  add_linkerd_headers: false\n")),(0,r.kt)("h2",u({},{id:"module"}),"Module"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: getambassador.io/v3alpha1\nkind: Module\nmetadata:\n  name: ambassador\nspec:\n  config:\n    grpc_stats:\n      upstream_stats: true\n      services:\n        - name: <package>.<service>\n          method_names: [<method>]\n")))}h.isMDXComponent=!0}}]);