(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{766:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return a?o.a.createElement(f,l(l({ref:t},c),{},{components:a})):o.a.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),o=a(7),r=(a(0),a(766)),i={id:"louketo",title:"Louketo Proxy"},l={unversionedId:"service/auth/louketo",id:"service/auth/louketo",isDocsHomePage:!1,title:"Louketo Proxy",description:"Tips",source:"@site/notes/service/auth/louketo-proxy.md",slug:"/service/auth/louketo",permalink:"/notes/service/auth/louketo",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/louketo-proxy.md",version:"current",sidebar:"docs",previous:{title:"LADP",permalink:"/notes/service/auth/ldap"},next:{title:"OAuth",permalink:"/notes/service/auth/oauth"}},s=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"oidc: JWT claims invalid: invalid claims, &#39;aud&#39; claim and &#39;client_id&#39; do not match, aud=account",id:"oidc-jwt-claims-invalid-invalid-claims-aud-claim-and-client_id-do-not-match-audaccount",children:[]},{value:"no session found in request, redirecting for authorization",id:"no-session-found-in-request-redirecting-for-authorization",children:[]}]},{value:"HELP",id:"help",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy"}),"louketo/louketo-proxy"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u539f\u6765\u7684 keycloak gatekeeper"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/blob/master/docs/user-guide.md"}),"\u4f7f\u7528\u624b\u518c")),Object(r.b)("li",{parentName:"ul"},"\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 - \u4f8b\u5982 Nginx",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e0a\u6e38\u643a\u5e26\u6388\u6743\u4fe1\u606f"))),Object(r.b)("li",{parentName:"ul"},"\u524d\u5411\u4ee3\u7406 - HTTP_PROXY",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5fc5\u987b\u63d0\u4f9b\u8d26\u53f7\u5bc6\u7801"),Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528\u63d0\u4f9b\u7684\u8d26\u53f7\u5bc6\u7801\u8fdb\u884c ",Object(r.b)("inlineCode",{parentName:"li"},"client_credentials")," \u6388\u6743"),Object(r.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u9644\u52a0\u6388\u6743\u4fe1\u606f"),Object(r.b)("li",{parentName:"ul"},"\u7528\u4e8e ",Object(r.b)("strong",{parentName:"li"},"\u670d\u52a1\u4e4b\u95f4")," \u4f7f\u7528 Token \u9274\u6743"))))),Object(r.b)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u7406",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u767d\u540d\u5355"),Object(r.b)("li",{parentName:"ul"},"\u8def\u5f84 + HTTP \u65b9\u6cd5 + \u89d2\u8272"))),Object(r.b)("li",{parentName:"ul"},"\u66b4\u9732\u7aef\u53e3",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/logout?redirect=url")," \u9000\u51fa\u767b\u9646"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/callback")," OpenID \u56de\u8c03"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/authorize")," \u9274\u6743\uff0c\u751f\u6210 OpenID \u91cd\u5b9a\u5411\u5230 provider"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/expired")," \u5224\u65ad Token \u662f\u5426\u8fc7\u671f - \u8fd4\u56de 200 \u6216 401"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/health")," \u68c0\u67e5\u5065\u5eb7\u72b6\u6001\uff0c\u53ef\u901a\u8fc7\u5934 \u83b7\u53d6\u7248\u672c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/login")," \u4e2d\u7ee7\u8d26\u53f7\u5bc6\u7801\u767b\u9646\uff0c\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"grant_type=password"),"\uff0c\u901a\u8fc7 POST username \u548c password"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/token")," \u8fd4\u56de\u5f53\u524d AccessToken"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth/metrics")," Prometheus \u6307\u6807"))),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u914d\u5408 Traefik \u7684 ForwardAuth - ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/issues/672"}),"#672")," Support for Forward Auth/ External Auth"),Object(r.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u914d\u5408 Nginx auth_request \u4f7f\u7528 ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/issues/537"}),"#537"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u56e0\u4e3a oidc \u6d41\u7a0b\u76f8\u5bf9\u590d\u6742\uff0c\u76f4\u63a5\u7684 auth_request \u96be\u4ee5\u5b9e\u73b0"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 /expired ")))))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm quay.io/louketo/louketo-proxy \\\n  --listen 127.0.0.1:8080 \\\n  --upstream-url http://127.0.0.1:80 \\\n  --discovery-url https://keycloak.example.com/auth/realms/<REALM_NAME> \\\n  --client-id <CLIENT_ID>\n")),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("h3",{id:"oidc-jwt-claims-invalid-invalid-claims-aud-claim-and-client_id-do-not-match-audaccount"},"oidc: JWT claims invalid: invalid claims, 'aud' claim and 'client_id' do not match, aud=account"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f9d\u8d56 OIDC \u5ba2\u6237\u7aef\u95ee\u9898 - \u5f85\u5347\u7ea7"),Object(r.b)("li",{parentName:"ul"},"\u76ee\u524d\u89e3\u51b3\u529e\u6cd5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6dfb\u52a0 mapper"),Object(r.b)("li",{parentName:"ul"},"mapper \u7c7b\u578b audience"),Object(r.b)("li",{parentName:"ul"},"\u6dfb\u52a0 \u5ba2\u6237\u7aef"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/issues/567"}),"#567"))),Object(r.b)("h3",{id:"no-session-found-in-request-redirecting-for-authorization"},"no session found in request, redirecting for authorization"),Object(r.b)("p",null,"\u672a\u83b7\u53d6\u5230 token \u4fe1\u606f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f ",Object(r.b)("inlineCode",{parentName:"li"},"secure-cookie=false"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u662f true\uff0c\u5bfc\u81f4 http \u4e0d\u4f1a\u8bb0\u5f55 cookie"))),Object(r.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6392\u67e5\u524d\u6bb5\u662f\u5426\u6709\u5b58\u50a8 cookie \u6765\u89e3\u51b3")),Object(r.b)("h2",{id:"help"},"HELP"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'GLOBAL OPTIONS:\n   --config value                            path the a configuration file [$PROXY_CONFIG_FILE]\n   --listen value                            the interface the service should be listening on [$PROXY_LISTEN]\n   --listen-http value                       interface we should be listening [$PROXY_LISTEN_HTTP]\n   --discovery-url value                     discovery url to retrieve the openid configuration [$PROXY_DISCOVERY_URL]\n   --client-id value                         client id used to authenticate to the oauth service [$PROXY_CLIENT_ID]\n   --client-secret value                     client secret used to authenticate to the oauth service [$PROXY_CLIENT_SECRET]\n   --redirection-url value                   redirection url for the oauth callback url, defaults to host header is absent [$PROXY_REDIRECTION_URL]\n   --revocation-url value                    url for the revocation endpoint to revoke refresh token [$PROXY_REVOCATION_URL]\n   --skip-openid-provider-tls-verify         skip the verification of any TLS communication with the openid provider (default: false)\n   --openid-provider-proxy value             proxy for communication with the openid provider\n   --openid-provider-timeout value           timeout for openid configuration on .well-known/openid-configuration (default: 30s)\n   --base-uri value                          common prefix for all URIs [$PROXY_BASE_URI]\n   --oauth-uri value                         the uri for proxy oauth endpoints (default: "/oauth") [$PROXY_OAUTH_URI]\n   --scopes value                            list of scopes requested when authenticating the user\n   --upstream-url value                      url for the upstream endpoint you wish to proxy [$PROXY_UPSTREAM_URL]\n   --upstream-ca value                       the path to a file container a CA certificate to validate the upstream tls endpoint\n   --resources value                         list of resources \'uri=/admin*|methods=GET,PUT|roles=role1,role2\'\n   --headers value                           custom headers to the upstream request, key=value\n   --preserve-host                           preserve the host header of the proxied request in the upstream request (default: false)\n   --request-id-header value                 the http header name for request id (default: "X-Request-ID") [$PROXY_REQUEST_ID_HEADER]\n   --response-headers value                  custom headers to added to the http response key=value\n   --enable-self-signed-tls                  create self signed certificates for the proxy (default: false) [$PROXY_ENABLE_SELF_SIGNED_TLS]\n   --self-signed-tls-hostnames value         a list of hostnames to place on the self-signed certificate\n   --self-signed-tls-expiration value        the expiration of the certificate before rotation (default: 3h0m0s)\n   --enable-request-id                       indicates we should add a request id if none found (default: false) [$PROXY_ENABLE_REQUEST_ID]\n   --enable-logout-redirect                  indicates we should redirect to the identity provider for logging out (default: false)\n   --enable-default-deny                     enables a default denial on all requests, you have to explicitly say what is permitted (recommended) (default: true)\n   --enable-encrypted-token                  enable encryption for the access tokens (default: false)\n   --force-encrypted-cookie                  force encryption for the access tokens in cookies (default: false)\n   --enable-logging                          enable http logging of the requests (default: false)\n   --enable-json-logging                     switch on json logging rather than text (default: false)\n   --enable-forwarding                       enables the forwarding proxy mode, signing outbound request (default: false)\n   --enable-security-filter                  enables the security filter handler (default: false) [$PROXY_ENABLE_SECURITY_FILTER]\n   --enable-refresh-tokens                   enables the handling of the refresh tokens (default: false) [$PROXY_ENABLE_REFRESH_TOKEN]\n   --enable-session-cookies                  access and refresh tokens are session only i.e. removed browser close (default: true)\n   --enable-login-handler                    enables the handling of the refresh tokens (default: false) [$PROXY_ENABLE_LOGIN_HANDLER]\n   --enable-token-header                     enables the token authentication header X-Auth-Token to upstream (default: true)\n   --enable-authorization-header             adds the authorization header to the proxy request (default: true) [$PROXY_ENABLE_AUTHORIZATION_HEADER]\n   --enable-authorization-cookies            adds the authorization cookies to the uptream proxy request (default: true) [$PROXY_ENABLE_AUTHORIZATION_COOKIES]\n   --enable-https-redirection                enable the http to https redirection on the http service (default: false)\n   --enable-profiling                        switching on the golang profiling via pprof on /debug/pprof, /debug/pprof/heap etc (default: false)\n   --enable-metrics                          enable the prometheus metrics collector on /oauth/metrics (default: false)\n   --filter-browser-xss                      enable the adds the X-XSS-Protection header with mode=block (default: false)\n   --filter-content-nosniff                  adds the X-Content-Type-Options header with the value nosniff (default: false)\n   --filter-frame-deny                       enable to the frame deny header (default: false)\n   --content-security-policy value           specify the content security policy\n   --localhost-metrics                       enforces the metrics page can only been requested from 127.0.0.1 (default: false)\n   --access-token-duration value             fallback cookie duration for the access token when using refresh tokens (default: 720h0m0s)\n   --client-auth-method value                the auth method to use with oauth (secret-basic, secret-body) (default: "secret-basic") [$PROXY_CLIENT_AUTH_METHOD]\n   --cookie-domain value                     domain the access cookie is available to, defaults host header\n   --cookie-access-name value                name of the cookie use to hold the access token (default: "kc-access")\n   --cookie-refresh-name value               name of the cookie used to hold the encrypted refresh token (default: "kc-state")\n   --secure-cookie                           enforces the cookie to be secure (default: true)\n   --http-only-cookie                        enforces the cookie is in http only mode (default: true)\n   --same-site-cookie value                  enforces cookies to be send only to same site requests according to the policy (can be Strict|Lax|None) (default: "Lax")\n   --match-claims value                      keypair values for matching access token claims e.g. aud=myapp, iss=http://example.*\n   --add-claims value                        extra claims from the token and inject into headers, e.g given_name -> X-Auth-Given-Name\n   --tls-cert value                          path to ths TLS certificate\n   --tls-private-key value                   path to the private key for TLS\n   --tls-ca-certificate value                path to the ca certificate used for signing requests\n   --tls-ca-key value                        path the ca private key, used by the forward signing proxy\n   --tls-client-certificate value            path to the client certificate for outbound connections in reverse and forwarding proxy modes\n   --skip-upstream-tls-verify                skip the verification of any upstream TLS (default: true)\n   --cors-origins value                      origins to add to the CORE origins control (Access-Control-Allow-Origin)\n   --cors-methods value                      methods permitted in the access control (Access-Control-Allow-Methods)\n   --cors-headers value                      set of headers to add to the CORS access control (Access-Control-Allow-Headers)\n   --cors-exposed-headers value              expose cors headers access control (Access-Control-Expose-Headers)\n   --cors-credentials                        credentials access control header (Access-Control-Allow-Credentials) (default: false)\n   --cors-max-age value                      max age applied to cors headers (Access-Control-Max-Age) (default: 0s)\n   --hostnames value                         list of hostnames the service will respond to\n   --store-url value                         url for the storage subsystem, e.g redis://127.0.0.1:6379, file:///etc/tokens.file\n   --encryption-key value                    encryption key used to encryption the session state [$PROXY_ENCRYPTION_KEY]\n   --no-redirects                            do not have back redirects when no authentication is present, 401 them (default: false)\n   --skip-token-verification                 TESTING ONLY; bypass token verification, only expiration and roles enforced (default: false)\n   --upstream-keepalives                     enables or disables the keepalive connections for upstream endpoint (default: true)\n   --upstream-timeout value                  maximum amount of time a dial will wait for a connect to complete (default: 10s)\n   --upstream-keepalive-timeout value        specifies the keep-alive period for an active network connection (default: 10s)\n   --upstream-tls-handshake-timeout value    the timeout placed on the tls handshake for upstream (default: 10s)\n   --upstream-response-header-timeout value  the timeout placed on the response header for upstream (default: 10s)\n   --upstream-expect-continue-timeout value  the timeout placed on the expect continue for upstream (default: 10s)\n   --verbose                                 switch on debug / verbose logging (default: false)\n   --enabled-proxy-protocol                  enable proxy protocol (default: false)\n   --max-idle-connections value              max idle upstream / keycloak connections to keep alive, ready for reuse (default: 0)\n   --max-idle-connections-per-host value     limits the number of idle connections maintained per host (default: 0)\n   --server-read-timeout value               the server read timeout on the http server (default: 10s)\n   --server-write-timeout value              the server write timeout on the http server (default: 10s)\n   --server-idle-timeout value               the server idle timeout on the http server (default: 2m0s)\n   --use-letsencrypt                         use letsencrypt for certificates (default: false)\n   --letsencrypt-cache-dir value             path where cached letsencrypt certificates are stored (default: "./cache/")\n   --sign-in-page value                      path to custom template displayed for signin\n   --forbidden-page value                    path to custom template used for access forbidden\n   --tags value                              keypairs passed to the templates at render,e.g title=Page\n   --forwarding-username value               username to use when logging into the openid provider [$PROXY_FORWARDING_USERNAME]\n   --forwarding-password value               password to use when logging into the openid provider [$PROXY_FORWARDING_PASSWORD]\n   --forwarding-domains value                list of domains which should be signed; everything else is relayed unsigned\n   --disable-all-logging                     disables all logging to stdout and stderr (default: false)\n   --help, -h                                show help\n   --version, -v                             print the version\n')))}u.isMDXComponent=!0}}]);