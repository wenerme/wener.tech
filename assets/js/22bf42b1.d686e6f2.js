"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3729],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43341:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={id:"oauth2-proxy",title:"oauth2-proxy"},h="oauth2-proxy",d={unversionedId:"service/auth/oauth2-proxy",id:"service/auth/oauth2-proxy",title:"oauth2-proxy",description:"- oauth2-proxy/oauth2-proxy",source:"@site/../notes/service/auth/oauth2-proxy.md",sourceDirName:"service/auth",slug:"/service/auth/oauth2-proxy",permalink:"/notes/service/auth/oauth2-proxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/oauth2-proxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{id:"oauth2-proxy",title:"oauth2-proxy"},sidebar:"docs",previous:{title:"PKCE",permalink:"/notes/service/auth/oauth/pkce"},next:{title:"Ory",permalink:"/notes/service/auth/ory"}},k={},g=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Ingress",id:"ingress",level:2}],y={toc:g};function f(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"oauth2-proxy"}),"oauth2-proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/oauth2-proxy/oauth2-proxy"}),"oauth2-proxy/oauth2-proxy")),(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf + ",(0,r.kt)("inlineCode",{parentName:"li"},"OAUTH2_PROXY_")," \u524d\u7f00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://oauth2-proxy.github.io/oauth2-proxy/configuration/sessions"}),"\u4f1a\u8bdd")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"--session-store-type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cookie - \u9ed8\u8ba4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u65e0\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"cookie-secret")," \u52a0\u5bc6 cookie"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u64cd\u4f5c\u53ef\u80fd\u4f1a\u51b2\u7a81\u5bfc\u81f4\u9700\u8981\u4ece\u65b0\u8ba4\u8bc1"))),(0,r.kt)("li",{parentName:"ul"},"redis",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cookie \u8bb0\u5f55 ticket"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{CookieName}-{ticketID}.{secret}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CookieName \u9ed8\u8ba4 ","_","oauth2_proxy"),(0,r.kt)("li",{parentName:"ul"},"ticketID - 128 bit, hex"),(0,r.kt)("li",{parentName:"ul"},"secret - 128 bit, base64url, no padding"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--session-store-type=redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--redis-connection-url=redis://host[:port][/db-number]")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://oauth2-proxy.github.io/oauth2-proxy/endpoints"}),"Endpoints"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/robots.txt"),(0,r.kt)("li",{parentName:"ul"},"/ping - \u5065\u5eb7\u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"/oauth2/sign_in"),(0,r.kt)("li",{parentName:"ul"},"/oauth2/sign_out",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rd \u53c2\u6570\u91cd\u5b9a\u5411 \u6216\u8005 \u5934 ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Auth-Request-Redirect")))),(0,r.kt)("li",{parentName:"ul"},"/oauth2/start - \u5f00\u59cb OAuth\uff0crd \u53c2\u6570\u4e3a\u91cd\u5b9a\u5411\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"/oauth2/callback - OAuth2 \u56de\u8c03\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"/oauth2/userinfo - \u8fd4\u56de\u7528\u6237\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"/oauth2/auth - \u8fd4\u56de 202 Accepted \u6216 401 Unauthorized\uff1b\u7528\u4e8e nginx auth_request"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ingress-nginx ",(0,r.kt)("a",c({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"}),"oauth external auth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.syseleven.de/metakube/de/tutorials/setup-ingress-auth-to-use-keycloak-oauth"}),"Setup ingress auth to use keycloak oauth"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# Keycloak\n- args:\n    - --provider=keycloak\n    - --email-domain=*\n    - --upstream=file:///dev/null\n    - --http-address=0.0.0.0:4180\n    - --login-url=https://my.domain.com/auth/realms/authentication/protocol/openid-connect/auth\n    - --redeem-url=https://my.domain.com/auth/realms/authentication/protocol/openid-connect/token\n    - --validate-url=https://my.domain.com/auth/realms/authentication/protocol/openid-connect/userinfo\n    - --whitelist-domain=.my.domain.com\n    - --cookie-domain=.my.domain.com\n    - --oidc-issuer-url=https://my.domain.com/auth/realms/authentication\n    - --keycloak-group=/admin\n    - --cookie-name=keycloak\n    - --proxy-prefix=/second-oauth2\n")),(0,r.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini"}),'## <addr>:<port> to listen on for HTTP/HTTPS clients\n# http_address = "127.0.0.1:4180"\n# https_address = ":443"\n\n## Are we running behind a reverse proxy? Will not accept headers like X-Real-Ip unless this is set.\n# reverse_proxy = true\n\n## TLS Settings\n# tls_cert_file = ""\n# tls_key_file = ""\n\n## the OAuth Redirect URL.\n# defaults to the "https://" + requested host header + "/oauth2/callback"\n# redirect_url = "https://internalapp.yourcompany.com/oauth2/callback"\n\n## the http url(s) of the upstream endpoint. If multiple, routing is based on path\n# upstreams = [\n#     "http://127.0.0.1:8080/"\n# ]\n\n## Logging configuration\n#logging_filename = ""\n#logging_max_size = 100\n#logging_max_age = 7\n#logging_local_time = true\n#logging_compress = false\n#standard_logging = true\n#standard_logging_format = "[{{.Timestamp}}] [{{.File}}] {{.Message}}"\n#request_logging = true\n#request_logging_format = "{{.Client}} - {{.Username}} [{{.Timestamp}}] {{.Host}} {{.RequestMethod}} {{.Upstream}} {{.RequestURI}} {{.Protocol}} {{.UserAgent}} {{.StatusCode}} {{.ResponseSize}} {{.RequestDuration}}"\n#auth_logging = true\n#auth_logging_format = "{{.Client}} - {{.Username}} [{{.Timestamp}}] [{{.Status}}] {{.Message}}"\n\n## pass HTTP Basic Auth, X-Forwarded-User and X-Forwarded-Email information to upstream\n# pass_basic_auth = true\n# pass_user_headers = true\n## pass the request Host Header to upstream\n## when disabled the upstream Host is used as the Host Header\n# pass_host_header = true\n\n## Email Domains to allow authentication for (this authorizes any email on this domain)\n## for more granular authorization use `authenticated_emails_file`\n## To authorize any email addresses use "*"\n# email_domains = [\n#     "yourcompany.com"\n# ]\n\n## The OAuth Client ID, Secret\n# client_id = "123456.apps.googleusercontent.com"\n# client_secret = ""\n\n## Pass OAuth Access token to upstream via "X-Forwarded-Access-Token"\n# pass_access_token = false\n\n## Authenticated Email Addresses File (one email per line)\n# authenticated_emails_file = ""\n\n## Htpasswd File (optional)\n## Additionally authenticate against a htpasswd file. Entries must be created with "htpasswd -s" for SHA encryption\n## enabling exposes a username/login signin form\n# htpasswd_file = ""\n\n## Templates\n## optional directory with custom sign_in.html and error.html\n# custom_templates_dir = ""\n\n## skip SSL checking for HTTPS requests\n# ssl_insecure_skip_verify = false\n\n\n## Cookie Settings\n## Name     - the cookie name\n## Secret   - the seed string for secure cookies; should be 16, 24, or 32 bytes\n##            for use with an AES cipher when cookie_refresh or pass_access_token\n##            is set\n## Domain   - (optional) cookie domain to force cookies to (ie: .yourcompany.com)\n## Expire   - (duration) expire timeframe for cookie\n## Refresh  - (duration) refresh the cookie when duration has elapsed after cookie was initially set.\n##            Should be less than cookie_expire; set to 0 to disable.\n##            On refresh, OAuth token is re-validated.\n##            (ie: 1h means tokens are refreshed on request 1hr+ after it was set)\n## Secure   - secure cookies are only sent by the browser of a HTTPS connection (recommended)\n## HttpOnly - httponly cookies are not readable by javascript (recommended)\n# cookie_name = "_oauth2_proxy"\n# cookie_secret = ""\n# cookie_domains = ""\n# cookie_expire = "168h"\n# cookie_refresh = ""\n# cookie_secure = true\n# cookie_httponly = true\n')),(0,r.kt)("h2",c({},{id:"ingress"}),"Ingress"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# \u539f\u59cb Ingress\nkind: Ingress\nmetdata:\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/auth-url: 'https://$host/oauth2/auth'\n    nginx.ingress.kubernetes.io/auth-signin: 'https://$host/oauth2/start?rd=$escaped_request_uri'\n    # \u9700\u8981 set-xauthrequest: true\n    nginx.ingress.kubernetes.io/auth-response-headers: 'x-auth-request-user, x-auth-request-email'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6620\u5c04\u5230\u5176\u4ed6\u7a7a\u95f4")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"kind: Service\napiVersion: v1\nmetadata:\n  name: oauth2-proxy\n  namespace: longhorn-system\nspec:\n  type: ExternalName\n  externalName: oauth2-proxy.auth.svc.cluster.local\n  ports:\n    - port: 80\n      name: http\n      targetPort: 80\n---\n# \u4f8b\u5982 \u4e3a Longhorn UI \u6dfb\u52a0\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: longhorn-oauth2-ingress\n  namespace: longhorn-system\nspec:\n  tls:\n    - hosts:\n        - longhorn.example.com\n      secretName: longhorn-example-com-cert\n  rules:\n    - host: longhorn.example.com\n      http:\n        paths:\n          - backend:\n              service:\n                name: oauth2-proxy\n                port:\n                  name: http\n            path: /oauth2\n            pathType: ImplementationSpecific\n")))}f.isMDXComponent=!0}}]);