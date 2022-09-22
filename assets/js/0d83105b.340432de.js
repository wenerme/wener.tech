"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25687],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},28761:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),s=["components"],i={id:"dex"},l="Dex",c={unversionedId:"service/auth/dex",id:"service/auth/dex",title:"Dex",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/auth/dex.md",sourceDirName:"service/auth",slug:"/service/auth/dex",permalink:"/notes/service/auth/dex",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/auth/dex.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"dex"},sidebar:"docs",previous:{title:"spicedb",permalink:"/notes/service/auth/authz/spicedb"},next:{title:"Hydra",permalink:"/notes/service/auth/hydra"}},p={},d=[],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dex"},"Dex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"OIDC, OAuth2 Provider - IdP"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u63d2\u4ef6\u5f0f\u7684 Connector"))),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sqlite3, mysql, postgres"),(0,a.kt)("li",{parentName:"ul"},"etcd"),(0,a.kt)("li",{parentName:"ul"},"kubernetes - CRD",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u65e0\u72b6\u6001\u90e8\u7f72"))))),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f5c\u4e3a\u5d4c\u5165\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,a.kt)("a",{parentName:"li",href:"https://dexidp.io/docs/kubernetes/"},"Kubernetes \u6388\u6743")," \u662f\u6838\u5fc3\u573a\u666f"),(0,a.kt)("li",{parentName:"ul"},"Connector",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LDAP, GitHub, SAML2.0, Gitlab, OpenID Connect, Google, LinkedIn, Microsoft, AuthProxy, Gitea")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/dexidp/dex/cmd/dex\n\ndex serve config-dev.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config-dev.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# dex \u670d\u52a1\u5730\u5740\nissuer: http://127.0.0.1:5556/dex\n\n# \u5b58\u50a8\u914d\u7f6e\nstorage:\n  type: sqlite3\n  config:\n    file: examples/dex.db\n\n  # type: mysql\n  # config:\n  #   host: localhost\n  #   port: 3306\n  #   database: dex\n  #   user: mysql\n  #   password: mysql\n  #   ssl:\n  #     mode: "false"\n\n  # type: postgres\n  # config:\n  #   host: localhost\n  #   port: 5432\n  #   database: dex\n  #   user: postgres\n  #   password: postgres\n  #   ssl:\n  #     mode: disable\n\n  # type: etcd\n  # config:\n  #   endpoints:\n  #     - http://localhost:2379\n  #   namespace: dex/\n\n  # type: kubernetes\n  # config:\n  #   kubeConfigFile: $HOME/.kube/config\n\n# HTTP \u5730\u5740\nweb:\n  http: 0.0.0.0:5556\n  # Uncomment for HTTPS options.\n  # https: 127.0.0.1:5554\n  # tlsCert: /etc/dex/tls.crt\n  # tlsKey: /etc/dex/tls.key\n\n# Configuration for telemetry\ntelemetry:\n  http: 0.0.0.0:5558\n\n# GRPC \u63a5\u53e3\n# grpc:\n#   addr: 127.0.0.1:5557\n#  tlsCert: examples/grpc-client/server.crt\n#  tlsKey: examples/grpc-client/server.key\n#  tlsClientCA: /etc/dex/client.crt\n\n# \u5931\u6548\u63a7\u5236\n# expiry:\n#   deviceRequests: "5m"\n#   signingKeys: "6h"\n#   idTokens: "24h"\n\n# Options for controlling the logger.\n# logger:\n#   level: "debug"\n#   format: "text" # can also be "json"\n\n# Default values shown below\n# oauth2:\n# use ["code", "token", "id_token"] to enable implicit flow for web-only clients\n#   responseTypes: [ "code" ] # also allowed are "token" and "id_token"\n# By default, Dex will ask for approval to share data with application\n# (approval for sharing data from connected IdP to Dex is separate process on IdP)\n#   skipApprovalScreen: false\n# If only one authentication method is enabled, the default behavior is to\n# go directly to it. For connected IdPs, this redirects the browser away\n# from application to upstream provider such as the Google login page\n#   alwaysShowLoginScreen: false\n# Uncommend the passwordConnector to use a specific connector for password grants\n#   passwordConnector: local\n\n# Instead of reading from an external storage, use this list of clients.\n#\n# If this option isn\'t chosen clients may be added through the gRPC API.\nstaticClients:\n  - id: example-app\n    redirectURIs:\n      - \'http://127.0.0.1:5555/callback\'\n    name: \'Example App\'\n    secret: ZXhhbXBsZS1hcHAtc2VjcmV0\n#  - id: example-device-client\n#    redirectURIs:\n#      - /device/callback\n#    name: \'Static Client for Device Flow\'\n#    public: true\nconnectors:\n  - type: mockCallback\n    id: mock\n    name: Example\n# - type: google\n#   id: google\n#   name: Google\n#   config:\n#     issuer: https://accounts.google.com\n#     # Connector config values starting with a "$" will read from the environment.\n#     clientID: $GOOGLE_CLIENT_ID\n#     clientSecret: $GOOGLE_CLIENT_SECRET\n#     redirectURI: http://127.0.0.1:5556/dex/callback\n#     hostedDomains:\n#     - $GOOGLE_HOSTED_DOMAIN\n\n# Let dex keep a list of passwords which can be used to login to dex.\nenablePasswordDB: true\n\n# A static list of passwords to login the end user. By identifying here, dex\n# won\'t look in its underlying storage for passwords.\n#\n# If this option isn\'t chosen users may be added through the gRPC API.\nstaticPasswords:\n  - email: \'admin@example.com\'\n    # bcrypt hash of the string "password"\n    hash: \'$2a$10$2b2cU8CPhOTaGrs1HRQuAueS7JTT5ZHsHSzYiFPm1leZck7Mc8T4W\'\n    username: \'admin\'\n    userID: \'08a8684b-db88-4b73-90a9-3cd1661f5466\'\n')))}m.isMDXComponent=!0}}]);