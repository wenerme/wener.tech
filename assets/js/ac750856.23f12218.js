/*! For license information please see ac750856.23f12218.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19208],{53756:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(2488),t=s(62780);const i={title:"Traefik V1"},l="Traefik V1",c={id:"devops/web/traefik-v1",title:"Traefik V1",description:"Notes",source:"@site/../notes/devops/web/traefik-v1.md",sourceDirName:"devops/web",slug:"/devops/web/traefik-v1",permalink:"/notes/devops/web/traefik-v1",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/traefik-v1.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627904182,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"Traefik V1"},sidebar:"docs",previous:{title:"Proxy FAQ",permalink:"/notes/devops/web/proxy-faq"},next:{title:"Traefik",permalink:"/notes/devops/web/traefik"}},d={},o=[{value:"Notes",id:"notes",level:2},{value:"Docker",id:"docker",level:3},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"admin",id:"admin",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"traefik-v1",children:"Traefik V1"}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u7b80\u5355\u542f\u52a8\ndocker run --rm -it -p 443:443 -p 80:80 -p 8080:8080 traefik --accesslog -l INFO --web\n# \u4f7f\u7528 consul\ndocker run --rm -it -p 443:443 -p 80:80 -p 8080:8080 traefik --accesslog -l INFO --web --consul.endpoint=consul:8500\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5165\u53e3\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"http"}),"\n",(0,r.jsx)(n.li,{children:"https"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u524d\u7aef\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b9a\u4e49\u4ece\u5165\u53e3\u8fdb\u5165\u7684\u8bf7\u6c42\u5982\u4f55\u8f6c\u53d1\u5230\u540e\u7aef"}),"\n",(0,r.jsxs)(n.li,{children:["\u6ce8\u610f, \u6b63\u5219\u91cc\u7684\u540d\u5b57\u5e76\u6ca1\u6709\u4efb\u4f55\u610f\u4e49, \u53ea\u662f\u56e0\u4e3a\u4f9d\u8d56\u7684 ",(0,r.jsx)(n.a,{href:"https://github.com/gorilla/mux",children:"gorilla/mux"})," \u8981\u6c42\u5fc5\u987b\u8981\u6709"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"passHostHeader"})," \u5c06\u5934\u5b8c\u5168\u4f20\u9012\u5230\u540e\u7aef"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"passTLSCert"})," \u5c06\u5ba2\u6237\u7aef\u8bc1\u4e66\u4e5f\u8f6c\u53d1\u5230\u540e\u7aef"]}),"\n",(0,r.jsxs)(n.li,{children:["\u9ed8\u8ba4\u4f18\u5148\u7ea7\u4e3a\u89c4\u5219\u957f\u5ea6\u7684\u53cd\u5e8f, \u907f\u514d\u8def\u5f84\u91cd\u53e0, \u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"priority"})," \u4fee\u6539"]}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5934"}),"\n",(0,r.jsxs)(n.li,{children:["\u5b89\u5168\u76f8\u5173\u7684\u5934\u53ef\u4ee5\u4f7f\u7528\u7b80\u5316\u7684\u65b9\u5f0f\u542f\u7528\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/unrolled/secure#available-options",children:"unrolled/secure#available-options"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Modifiers\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e0d\u7ba1\u987a\u5e8f\u600e\u4e48\u6837, \u4f1a\u5728 ",(0,r.jsx)(n.code,{children:"Matchers"})," \u4e4b\u540e\u6267\u884c"]}),"\n",(0,r.jsx)(n.li,{children:"\u4fee\u6539\u8bf7\u6c42, \u4e0d\u5f71\u54cd\u8def\u7531"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"AddPrefix: /products"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ReplacePath: /serverless-path"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u66ff\u6362\u8def\u5f84\u5e76\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"X-Replaced-Path"})," \u5934"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Matchers\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b9a\u4e49\u8bf7\u6c42\u5982\u4f55\u8f6c\u53d1\u5230\u540e\u7aef"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:","})," \u5206\u9694\u7b26\u7528\u4e8e\u5b9a\u4e49\u591a\u4e2a ",(0,r.jsx)(n.code,{children:"\u6216"})," \u6761\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:";"})," \u5b9a\u4e49\u591a\u4e2a ",(0,r.jsx)(n.code,{children:"\u4e0e"})," \u6761\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Headers: Content-Type, application/json"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5934\u5339\u914d, \u63a5\u53d7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:","})," \u5206\u5272\u7684 kv \u503c"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"HeadersRegexp: Content-Type, application/(text/json)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5934\u5339\u914d, \u63a5\u53d7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:","})," \u5206\u5272\u7684 kv \u503c"]}),"\n",(0,r.jsx)(n.li,{children:"\u503c\u53ef\u4ee5\u4e3a\u6b63\u5219"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Host: traefik.io, www.traefik.io"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"HostRegexp: traefik.io, {subdomain:[a-z]+}.traefik.io"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Method: GET, POST, PUT"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Path: /products/, /articles/{category}/{id:[0-9]+}"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PathStrip: /products/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8def\u5f84\u5b8c\u5168\u5339\u914d, \u8f6c\u53d1\u5230\u540e\u7aef\u7684\u65f6\u5019\u4f1a\u53bb\u6389\u8def\u5f84"}),"\n",(0,r.jsxs)(n.li,{children:["\u4f1a\u5c06\u539f\u8def\u5f84\u4fdd\u5b58\u5230 ",(0,r.jsx)(n.code,{children:"X-Forwarded-Prefix"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"PathStripRegex: /articles/{category}/{id:[0-9]+}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"PathPrefix: /products/, /articles/{category}/{id:[0-9]+}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"PathPrefixStrip: /products/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"PathPrefixStripRegex: /articles/{category}/{id:[0-9]+}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Query: foo=bar, bar=baz"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u540e\u7aef\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5c06\u524d\u7aef\u7684\u8bf7\u6c42\u8d1f\u8f7d\u5230\u4e00\u7ec4\u670d\u52a1\u5668"}),"\n",(0,r.jsxs)(n.li,{children:["\u8d1f\u8f7d\u65b9\u5f0f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"wrr \u57fa\u4e8e\u6743\u91cd\u7684\u8f6e\u8be2"}),"\n",(0,r.jsx)(n.li,{children:"drr \u52a8\u6001\u8f6e\u8be2"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u7194\u65ad\u673a\u5236\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65b9\u6cd5: LatencyAtQuantileMS, NetworkErrorRatio, ResponseCodeRatio"}),"\n",(0,r.jsx)(n.li,{children:"\u64cd\u4f5c: AND, OR, EQ, NEQ, LT, LE, GT, GE"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6700\u5927\u8fde\u63a5\u6570\u63a7\u5236\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5bf9\u94fe\u63a5\u5206\u7ec4\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"request.host"})," , ",(0,r.jsx)(n.code,{children:"client.ip"}),", ",(0,r.jsx)(n.code,{children:"request.header.ANY_HEADER"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fbe\u5230\u9600\u503c\u4f1a\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"429 Too Many Requests"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7c98\u6027\u4f1a\u8bdd, \u9700\u8981\u6307\u5b9a ",(0,r.jsx)(n.code,{children:"cookieName"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5065\u5eb7\u68c0\u67e5\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ef\u6307\u5b9a\u8def\u5f84, \u95f4\u9694, \u7aef\u53e3, \u8981\u6c42\u662f http"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u670d\u52a1\u5b9a\u4e49\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3b\u8981\u4e3a url, \u8def\u5f84\u53ef\u4ee5\u5728 Modifier \u4e2d\u6307\u5b9a"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u6307\u5b9a weight"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'# \u5165\u53e3\u5b9a\u4e49\n[entryPoints]\n  [entryPoints.http]\n  address = ":80"\n    # \u5f3a\u5236\u8df3\u8f6c\u5230 https\n    [entryPoints.http.redirect]\n    entryPoint = "https"\n    # url \u91cd\u5199\n    [entryPoints.http.redirect]\n    regex = "^http://localhost/(.*)"\n    replacement = "http://mydomain/$1"\n\n  [entryPoints.https]\n  address = ":443"\n  [entryPoints.https.tls]\n  clientCAFiles = ["tests/clientca1.crt", "tests/clientca2.crt"]\n    [entryPoints.https.tls]\n      [[entryPoints.https.tls.certificates]]\n      certFile = "tests/traefik.crt"\n      keyFile = "tests/traefik.key"\n\n# \u524d\u7aef\n[frontends]\n  # \u5b9a\u4e49\u4e00\u4e2a\u524d\u7aef\n  [frontends.frontend1]\n  # \u6307\u5b9a\u540e\u7aef\n  backend = "backend2"\n    # \u5b9a\u4e49\u8def\u7531\u89c4\u5219\n    [frontends.frontend1.routes.test_1]\n    rule = "Host:test.localhost,test2.localhost"\n    # \u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u5934\n    [frontends.frontend1.headers.customresponseheaders]\n    X-Custom-Response-Header = "True"\n    [frontends.frontend1.headers.customrequestheaders]\n    X-Script-Name = "test"\n  # \u5b9a\u4e49\u4e86\u4e00\u4e2a\u524d\u7aef\n  [frontends.frontend2]\n  # \u5747\u76f4\u63a5\u8f6c\u53d1\n  backend = "backend1"\n  passHostHeader = true\n  passTLSCert = true\n  # \u6307\u5b9a\u4f18\u5148\u7ea7\n  priority = 10\n  entrypoints = ["https"] # overrides defaultEntryPoints\n    [frontends.frontend2.routes.test_1]\n    rule = "HostRegexp:localhost,{subdomain:[a-z]+}.localhost"\n  [frontends.frontend3]\n  backend = "backend2"\n    # \u89c4\u5219\u53ef\u4ee5\u5199\u5728\u4e00\u8d77\u4e5f\u53ef\u4ee5\u5206\u5f00\u5199\n    [frontends.frontend3.routes.test_1]\n    rule = "Host:test3.localhost;Path:/test"\n    [frontends.frontend3.routes.test_2]\n    rule = "Query: test=1"\n\n# \u540e\u7aef\n[backends]\n  [backends.backend1]\n    # \u5b9a\u4e49\u7194\u65ad\u673a\u5236\n    [backends.backend1.circuitbreaker]\n    expression = "NetworkErrorRatio() > 0.5"\n    # \u8bbe\u7f6e\u6700\u5927\u8fde\u63a5\u6570\n    [backends.backend1.maxconn]\n    amount = 10\n    extractorfunc = "request.host"\n    # \u5b9a\u4e49\u540e\u7aef\u670d\u52a1\n    [backends.backend1.servers.server1]\n    url = "http://172.17.0.2:80"\n    weight = 10\n    [backends.backend1.servers.server2]\n    url = "http://172.17.0.3:80"\n    weight = 1\n    # \u5b9a\u4e49\u5065\u5eb7\u68c0\u67e5\n    [backends.backend1.healthcheck]\n    path = "/health"\n    interval = "10s"\n    port = 8080\n  [backends.backend2]\n    # \u8bbe\u7f6e\u8d1f\u8f7d\u65b9\u5f0f\n    [backends.backend2.LoadBalancer]\n    method = "drr"\n    [backends.backend2.loadbalancer.stickiness]\n    # \u5b9a\u4e49\u7c98\u6027\u4f1a\u8bdd\n    # \u53ef\u9009, \u9ed8\u8ba4\u4e3a sha1 \u516d\u4f4d\u5b57\u7b26\n    cookieName = "my_cookie"\n    [backends.backend2.servers.server1]\n    url = "http://172.17.0.4:80"\n    weight = 1\n    [backends.backend2.servers.server2]\n    url = "http://172.17.0.5:80"\n    weight = 2\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u914d\u7f6e\u8def\u5f84\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/traefik/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"$HOME/.traefik/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'# \u5168\u5c40\u914d\u7f6e\ndebug=false\n# "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "PANIC"\nlogLevel = "ERROR"\n# \u524d\u7aef\u672a\u6307\u5b9a entrypoint \u7684\u9ed8\u8ba4\u503c\ndefaultEntryPoints = ["http"]\n\n# \u5b89\u5168\u505c\u6b62\u7684\u8d85\u65f6\u65f6\u95f4\ngraceTimeOut = "10s"\n\n# \u95f4\u9694\u68c0\u6d4b\u65b0\u7248\u672c\ncheckNewVersion = false\n\n# Backends throttle duration.\nProvidersThrottleDuration = "2s"\n\n# Controls the maximum idle (keep-alive) connections to keep per-host.\nMaxIdleConnsPerHost = 200\n\n# If set to true invalid SSL certificates are accepted for backends.\n# This disables detection of man-in-the-middle attacks so should only be used on secure backend networks.\nInsecureSkipVerify = true\n\n# Register Certificates in the RootCA.\nRootCAs = [ "/mycert.cert" ]\n\n# \u65e5\u5fd7\u914d\u7f6e\n[traefikLog]\n# \u9ed8\u8ba4\u4e3a os.Stdout\n# \u5982\u679c\u8def\u5f84\u4e0d\u5b58\u5728\u4f1a\u521b\u5efa\nfilePath = "log/traefik.log"\n# \u683c\u5f0f\u53ef\u4ee5\u4e3a json \u548c common\nformat = "common"\n\n\n# \u8bbf\u95ee\u65e5\u5fd7\n[accessLog]\n# \u9ed8\u8ba4\u4e3a os.Stdout\nfilePath = "/path/to/log/log.txt"\n# \u9ed8\u8ba4\u4e3a common log format - clf\nformat = "common"\n\n# \u6587\u4ef6\u914d\u7f6e\n[file]\n# \u6587\u4ef6\u5f15\u5165\nfilename = "rules.toml"\n# \u914d\u7f6e\u76ee\u5f55\ndirectory = "/path/to/config/"\n# \u68c0\u6d4b\u6539\u53d8\nwatch=true\n\n\n# \u6700\u5c0f\u5316\u914d\u7f6e\n[entryPoints]\n  [entryPoints.http]\n  address = ":8080"\n[web]\naddress=":8081"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"admin",children:"admin"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5065\u5eb7\u68c0\u67e5\n# \u53ef\u4ee5\u4f7f\u7528 -c \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\ntraefik healthcheck\n# \u5c06\u5f02\u5e38\u63d0\u4ea4\u5230 github\ntraefik bug\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,s)=>{var r=s(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,i={},o=null,a=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>l});var r=s(96651);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);