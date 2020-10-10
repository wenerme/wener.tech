(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(618)),s={id:"traefik-ingress",title:"Traefik Ingress"},o={id:"devops/kubernetes/network/traefik-ingress",title:"Traefik Ingress",description:"# Traefik Ingress",source:"@site/../tricks/devops/kubernetes/network/traefik-ingress.md",permalink:"/notes/devops/kubernetes/network/traefik-ingress",sidebar:"docs",previous:{title:"Nginx Ingress",permalink:"/notes/devops/kubernetes/network/nginx-ingress"},next:{title:"MetalLB",permalink:"/notes/devops/kubernetes/network/metallb"}},c=[{value:"Tips",id:"tips",children:[]},{value:"CRD",id:"crd",children:[]},{value:"Ingress",id:"ingress",children:[]},{value:"Cert Manager",id:"cert-manager",children:[]},{value:"FAQ",id:"faq",children:[{value:"Cannot create service: subset not found",id:"cannot-create-service-subset-not-found",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"traefik-ingress"},"Traefik Ingress"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Traefik \u7684 K8S \u5206\u4e3a CRD \u65b9\u5f0f\u548c\u6807\u51c6\u7684 IngressController",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CRD \u652f\u6301\u66f4\u591a\u529f\u80fd - Helm \u5b89\u88c5"))),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ea\u6709 repilca \u4e3a 1 \u624d\u652f\u6301 acme")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# \u8f6c\u53d1 9000\nkubectl port-forward $(kubectl get pods --selector "app.kubernetes.io/name=traefik" -n traefik --output=name) 9000:9000 -n traefik\n')),Object(i.b)("h2",{id:"crd"},"CRD"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/containous/traefik/tree/v2.2/pkg/provider/kubernetes/crd/fixtures"}),"\u793a\u4f8b\u8d44\u6e90\u914d\u7f6e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u542f\u52a8\u53c2\u6570"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--global.checknewversion")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--global.sendanonymoususage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--entryPoints.traefik.address=:9000")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--entryPoints.web.address=:8000")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--entryPoints.websecure.address=:8443")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--api.dashboard=true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--ping=true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--providers.kubernetescrd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--providers.kubernetesingress"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'helm repo add traefik https://containous.github.io/traefik-helm-chart\nhelm repo update\nhelm install traefik traefik/traefik\n\n# \u53ef\u5b89\u88c5\u5728\u72ec\u7acb\u547d\u540d\u7a7a\u95f4\nkubectl create ns traefik\nhelm install --namespace=traefik \\\n    traefik traefik/traefik\n\n# \u8f6c\u53d1 dashboard \u5230\u672c\u5730 9000\n# \u7136\u540e\u8bbf\u95ee http://localhost:9000/dashboard/\nkubectl port-forward -n traefik $(kubectl get pods -n traefik --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000\n\n# \u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a Ingress \u7136\u540e\u5373\u53ef\u901a\u8fc7\u57df\u540d\u8bbf\u95ee\ncat <<YAML\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: traefik-dashboard\n  namespace: traefik\nspec:\n  entryPoints:\n    - web\n    - traefik\n  routes:\n    - match: Host(`traefik.localhost`) && (PathPrefix(`/dashboard`) || PathPrefix(`/api`))\n      kind: Rule\n      services:\n        - name: api@internal\n          kind: TraefikService\nYAML\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: foo\n  namespace: bar\nspec:\n  # \u5165\u53e3\n  entryPoints:\n  - foo\n  # \u8def\u7531\u914d\u7f6e\n  routes:\n  - kind: Rule\n    # \u8def\u7531\u5339\u914d\u89c4\u5219\n    match: Host(`test.example.com`)\n    # \u5339\u914d\u6538\u53bf\u9152\n    priority: 10\n    # \u5f15\u7528\u4e2d\u95f4\u4ef6\n    middlewares:\n    - name: middleware1\n      namespace: default\n    # \u540e\u7aef\u670d\u52a1\n    services:\n    - kind: Service\n      name: foo\n      namespace: default\n      # \u900f\u4f20\u5934\u4fe1\u606f\n      passHostHeader: true\n      port: 80\n      responseForwarding:\n        flushInterval: 1ms\n      scheme: https\n      # \u7c98\u6027\u914d\u7f6e\n      sticky:\n        cookie:\n          httpOnly: true\n          name: cookie\n          secure: true\n          sameSite: none\n      # \u8d1f\u8f7d\u7b56\u7565\n      strategy: RoundRobin\n      weight: 10\n  # TLS\n  tls:\n    # \u5bc6\u94a5\u4fe1\u606f\n    secretName: supersecret\n    # TLSOption\n    options:\n      name: opt\n      namespace: default\n    certResolver: foo               # CertResolver\n    domains:                        # TLS \u57df\u540d\n    - main: example.net\n      sans:\n      - a.example.net\n      - b.example.net\n")),Object(i.b)("h2",{id:"ingress"},"Ingress"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/containous/traefik/tree/v2.2/pkg/provider/kubernetes/ingress/fixtures"}),"\u793a\u4f8b\u8d44\u6e90\u914d\u7f6e")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.traefik.io/routing/providers/kubernetes-ingress/"}),"Kubernetes Ingress Controller"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# \u5168\u5c40\u9ed8\u8ba4\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n name: cheese\nspec:\n backend:\n   serviceName: stilton\n   servicePort: 80\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami\n  annotations:\n    # \u4fee\u6539 schema\uff1a http h2c https\n    traefik.ingress.kubernetes.io/service.serversscheme: https\n    # \u900f\u4f20 \u5934\n    traefik.ingress.kubernetes.io/service.passhostheader: "true"\n    # \u7c98\u6027\u914d\u7f6e\n    traefik.ingress.kubernetes.io/service.sticky: "true"\n    traefik.ingress.kubernetes.io/service.sticky.cookie.name: foobar\n    traefik.ingress.kubernetes.io/service.sticky.cookie.secure: "true"\n    traefik.ingress.kubernetes.io/service.sticky.cookie.samesite: "none"\n    traefik.ingress.kubernetes.io/service.sticky.cookie.httponly: "true"\nspec:\n  type: LoadBalancer\n  selector:\n    app: whoami\n  ports:\n    - protocol: TCP\n      port: 80\n      name: web\n      targetPort: 80\n\n---\nkind: Ingress\napiVersion: networking.k8s.io/v1beta1\nmetadata:\n  name: myingress\n  annotations:\n    # \u7ec8\u7aef\n    traefik.ingress.kubernetes.io/router.entrypoints: web,websecure\n    # \u4e2d\u95f4\u4ef6\n    traefik.ingress.kubernetes.io/router.middlewares: <namespace>-<name>@kubernetescrd,cb@file\n    # \u4f18\u5148\u7ea7\n    traefik.ingress.kubernetes.io/router.priority: "42"\n    # \u8def\u5f84\u5339\u914d\u65b9\u5f0f Path, PathPrefix\n    traefik.ingress.kubernetes.io/router.pathmatcher: PathPrefix\n\n    # \u662f\u5426 TLS\n    traefik.ingress.kubernetes.io/router.tls: "true"\n    # \u89e3\u6790 TLS \u65b9\u5f0f\n    traefik.ingress.kubernetes.io/router.tls.certresolver: myresolver\n    # TLS \u7684 SNI \u57df\u540d\n    traefik.ingress.kubernetes.io/router.tls.domains.0.main: example.org\n    traefik.ingress.kubernetes.io/router.tls.domains.0.sans: test.example.org,dev.example.org\n    traefik.ingress.kubernetes.io/router.tls.options: foobar\n\nspec:\n  # \u8bc1\u4e66\n  tls:\n  - secretName: supersecret\n  rules:\n  - host: example.com\n    http:\n      paths:\n      - path: /bar\n        backend:\n          serviceName: whoami\n          servicePort: 80\n')),Object(i.b)("h2",{id:"cert-manager"},"Cert Manager"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mmatur/traefik-cert-manager"}),"https://github.com/mmatur/traefik-cert-manager"))),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"cannot-create-service-subset-not-found"},"Cannot create service: subset not found"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.traefik.io/routing/providers/kubernetes-ingress/"}),"https://docs.traefik.io/routing/providers/kubernetes-ingress/")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rancher/k3s/issues/1141"}),"https://github.com/rancher/k3s/issues/1141")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/containous/traefik-helm-chart"}),"https://github.com/containous/traefik-helm-chart")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.traefik.io/getting-started/install-traefik/#use-the-helm-chart"}),"https://docs.traefik.io/getting-started/install-traefik/#use-the-helm-chart")),Object(i.b)("p",null,'kubectl port-forward $(kubectl get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000'),Object(i.b)("p",null,"ClusterRoleBinding"),Object(i.b)("p",null,"error syncing 'traefik/traefik'\nhandler svccontroller: Operation cannot be fulfilled on  \"svccontroller\": delaying object set, requeuing"),Object(i.b)("p",null,"INOTIFY_USR"))}b.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);