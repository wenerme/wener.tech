"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25426],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58925:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),o=["components"],s={id:"consul",title:"Consul"},i=void 0,c={unversionedId:"devops/service/consul",id:"devops/service/consul",isDocsHomePage:!1,title:"Consul",description:"- Consul \u624b\u518c",source:"@site/notes/devops/service/consul.md",sourceDirName:"devops/service",slug:"/devops/service/consul",permalink:"/notes/devops/service/consul",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/consul.md",version:"current",frontMatter:{id:"consul",title:"Consul"},sidebar:"docs",previous:{title:"Ambassador",permalink:"/notes/devops/service/ambassador"},next:{title:"Consul \u914d\u7f6e",permalink:"/notes/devops/service/consul-conf"}},u=[{value:"Catalog",id:"catalog",children:[]},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]},{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e",id:"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e",children:[]},{value:"\u670d\u52a1\u5b9a\u4e49",id:"\u670d\u52a1\u5b9a\u4e49",children:[]}]},{value:"ACL",id:"acl",children:[{value:"DNS",id:"dns",children:[]},{value:"Config",id:"config",children:[]}]},{value:"consul cluster",id:"consul-cluster",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1",id:"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1",children:[]},{value:"dropping node &quot;consul&quot; from result due to ACLs",id:"dropping-node-consul-from-result-due-to-acls",children:[]},{value:"autopilot: Failed to remove dead servers: too many dead servers: 1/1",id:"autopilot-failed-to-remove-dead-servers-too-many-dead-servers-11",children:[]},{value:"\u5c06 docker \u66b4\u9732\u5230 consul",id:"\u5c06-docker-\u66b4\u9732\u5230-consul",children:[]}]}],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/guides/"},"Consul \u624b\u518c")),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HTTP 8500"),(0,l.kt)("li",{parentName:"ul"},"HTTPS 8501 - \u9ed8\u8ba4\u6ca1\u5f00\u542f"),(0,l.kt)("li",{parentName:"ul"},"gRPC 8502"),(0,l.kt)("li",{parentName:"ul"},"DNS 8600"),(0,l.kt)("li",{parentName:"ul"},"RPC 8400"))),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a dc \u4e0d\u8d85\u8fc7 5 \u4e2a\u670d\u52a1\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u4e0e raft \u4e00\u81f4\u6027\u4e8b\u52a1\u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u5176\u4ed6 dc \u7684\u7f51\u5173\u8fdb\u884c WAN gossip \u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8f6c\u53d1 dc \u6d41\u91cf"))),(0,l.kt)("li",{parentName:"ul"},"agent",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6bcf\u4e2a\u8282\u70b9\u90fd\u4f1a\u542f\u52a8"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e server \u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7f13\u5b58\u3001\u4ee3\u7406\u3001\u8282\u70b9\u76d1\u63a7"))),(0,l.kt)("li",{parentName:"ul"},"bootstrap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a dc \u5e94\u8be5\u53ea\u6709\u4e00\u4e2a server \u8282\u70b9\u4ee5\u8be5\u6a21\u5f0f\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u9009\u4e3e\u81ea\u5df1\u4e3a\u4e3b\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u542f\u52a8\u540e\u5219\u4e0d\u9700\u8981\u4f7f\u7528\u8be5\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"bootstrap_expect")," \u4e3a 1"))))),(0,l.kt)("li",{parentName:"ul"},"Watch",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"consul \u4f7f\u7528 http blocking query \u5b9e\u73b0 watch"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 index \u6216 content hash \u6765\u5224\u65ad\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/consul-template/issues/1065"},"#1065")," - When watching all services, consul-template is DOSing the Consul agent"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u76d1\u63a7\u91cf\u5927\u7684\u65f6\u5019\u8003\u8651\u5ba2\u6237\u7aef\u53bb\u91cd\uff0c\u95f4\u9694\u67e5\u8be2\uff0c\u907f\u514d\u957f\u94fe\u63a5"),(0,l.kt)("li",{parentName:"ul"},"\u53ef Watch \u7684\u7c7b\u578b - key\u3001keyprefix\u3001services\u3001nodes\u3001service\u3001checks\u3001event"))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value \u6700\u5927 512KB - \u4e0d\u8981\u5c06 KV \u7528\u4e8e\u901a\u7528\u5b58\u50a8\uff0c\u7528\u4e8e\u5b58\u50a8\u57fa\u672c\u72b6\u6001\u548c\u914d\u7f6e\u8db3\u4ee5"),(0,l.kt)("li",{parentName:"ul"},"meta \u6700\u591a 64 \u4e2a KV\uff0ckey \u53ea\u80fd\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"[-_a-zA-Z0-9]{,128}"),",\u503c\u6700\u957f 512"),(0,l.kt)("li",{parentName:"ul"},"\u533a\u522b\u4f7f\u7528 tag \u548c meta",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tags \u4f8b\u5982\uff1a primary\u3001secondary"),(0,l.kt)("li",{parentName:"ul"},"metas \u4f8b\u5982\uff1a version\u3001name"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/troubleshoot/faq"},"FAQ"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_HTTP_ADDR"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:5800"},"http://127.0.0.1:5800")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_HTTP_TOKEN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_HTTP_TOKEN_FILE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Basic auth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_HTTP_AUTH"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"user:pass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_HTTP_SSL"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_CACERT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_CAPATH"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_CLIENT_CERT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_CLIENT_KEY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_TLS_SERVER_NAME"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_HTTP_SSL_VERIFY"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSUL_GRPC_ADDR"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:8502"),(0,l.kt)("td",{parentName:"tr",align:null},"envoy \u96c6\u6210\u9700\u8981")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# alpine install\n# 3.12 \u8fd8\u6ca1\u6709\uff0c\u9700\u8981\u4ece edge \u5b89\u88c5\napk add -X https://mirrors.aliyun.com/alpine/edge/community/ consul\n\n# macOS install\nbrew install consul\n\n# \u542f\u52a8\nconsul agent -bootstrap -server -data-dir $PWD/data -bind 0.0.0.0 -advertise 127.0.0.1 -ui\n\n# \u7ed1\u5b9a\u52a8\u6001\u5730\u5740\n# {{ GetPrivateInterfaces | include "network" "10.0.0.0/8" | attr "address" }}\n# {{ GetAllInterfaces | include "name" "^eth" | include "flags" "forwardable|up" | attr "address" }}\nconsul agent -bind \'{{ GetInterfaceIP "eth0" }}\' -server -dev\n\n# Debug\nconsul monitor --log-level=debug\n\n# \u6ce8\u9500\u670d\u52a1\ncurl -v -X PUT http://localhost:8500/v1/agent/service/deregister/web-test\nconsul services deregister -id web-test\n')),(0,l.kt)("h2",{id:"catalog"},"Catalog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Service"),(0,l.kt)("li",{parentName:"ul"},"Node"),(0,l.kt)("li",{parentName:"ul"},"Datacenter")),(0,l.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u542f\u52a8\u4e00\u4e2a\u4e09\u4e2a\u8282\u70b9\u7684\u96c6\u7fa4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u9ed8\u8ba4\u914d\u7f6e\u76ee\u5f55\u4e3a /etc/consul\ncd /etc/consul\n# \u57fa\u7840\u670d\u52a1\u914d\u7f6e\ncat <<CONF > server.json\n{\n    "client_addr": "0.0.0.0",\n    "data_dir": "/var/consul",\n    "domain": "consul",\n    "enable_script_checks": true,\n    "dns_config": {\n        "enable_truncate": true,\n        "only_passing": true\n    },\n    "enable_syslog": true,\n    "leave_on_terminate": true,\n    "log_level": "INFO",\n    "rejoin_after_leave": true,\n    "server": true\n}\nCONF\n# \u542f\u52a8\u8fde\u63a5 - \u6570\u636e\u4e2d\u5fc3\necho \'{"start_join":["10.10.1.1","10.10.1.2","10.10.1.3"],"bootstrap_expect": 3,"datacenter":"center"}\' > join.json\n# \u751f\u6210\u5bc6\u94a5\necho \'{"encrypt":"\'$(consul keygen)\'"}\' > encrypt.json\n\n# \u5982\u679c\u89c9\u5f97\u914d\u7f6e\u6587\u4ef6\u8fc7\u591a\u53ef\u5408\u5e76\u4e3a\u4e00\u4e2a\n# jq -s add consul.d/*.json > config.json\n\n# \u542f\u52a8\nconsul agent -config-dir /etc/consul\n')),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/agent/options"},"https://www.consul.io/docs/agent/options"))),(0,l.kt)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u65b0\u52a0\u8f7d\u914d\u7f6e\nconsul reload\nkillall -HUP consul\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e"},"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data_dir": "/var/consul",\n  "server": true,\n  "bootstrap_expect": 1,\n  "disable_update_check": true,\n  "disable_remote_exec": true,\n  "enable_syslog": true\n}\n')),(0,l.kt)("h3",{id:"\u670d\u52a1\u5b9a\u4e49"},"\u670d\u52a1\u5b9a\u4e49"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/agent/services.html"},"Services"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u5355\u4e2a\u670d\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "name": "portal",\n    "tags": ["primary"],\n    "address": "10.66.1.1",\n    "meta": {\n      "meta": "for my service"\n    },\n    "port": 80,\n    "enable_tag_override": false\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u591a\u4e2a\u670d\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [{ "name": "svc-a" }, { "name": "svc-b" }]\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u5355\u8282\u70b9\n# \u5f00\u53d1\u6a21\u5f0f\nconsul agent -dev -client 0.0.0.0\n\nconsul agent -bootstrap -server -data-dir $PWD/data -advertise 127.0.0.1 -ui\n# ==> WARNING: Bootstrap mode enabled! Do not enable unless necessary\n# ==> Starting Consul agent...\n# ==> Starting Consul agent RPC...\n# ==> Consul agent running!\n#            Version: \'v0.7.3\'\n#            Node ID: \'f5bdf8b9-3e67-8b88-ddce-4052a5ae6bec\'\n#          Node name: \'wener\'\n#         Datacenter: \'dc1\'\n#             Server: true (bootstrap: true)\n#        Client Addr: 127.0.0.1 (HTTP: 8500, HTTPS: -1, DNS: 8600, RPC: 8400)\n#       Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)\n#     Gossip encrypt: false, RPC-TLS: false, TLS-Incoming: false\n#              Atlas: <disabled>\n\n\n# \u5728\u5bb9\u5668\u4e2d\u542f\u52a8\u96c6\u7fa4, \u6307\u5b9a\u7f51\u5361\u662f\u5173\u952e\ndocker run --rm -it \\\n  --networ service \\\n  -e CONSUL_CLIENT_INTERFACE=eth0 \\\n  -e CONSUL_BIND_INTERFACE=eth0 \\\n  consule agent -server -bootstrap-expect 3 \\\n  -retry-join consul_consul_1 -retry-join consul_consul_2 -retry-join consul_consul_3\n\n# \u67e5\u770b\u6210\u5458\u4fe1\u606f\ndocker exec -it consul_consul_3 consul members -http-addr=http://consul_consul_3:8500\n\n# \u518d\u542f\u52a8\u4e00\u4e2a\u7528\u4e8e\u505a\u5bf9\u5916\u66b4\u9732, \u542f\u52a8 ui, \u5141\u8bb8\u6240\u6709\u6765\u6e90\u5ba2\u6237\u7aef\u8bbf\u95ee\ndocker run -it --rm --network multi-host-network \\\n  -e CONSUL_BIND_INTERFACE=eth0 -p 8500:8500 \\\n  --name consul consul agent -server -retry-join consul_consul_1 -ui\n\n\n\n# \u542f\u7528 ACL\ndocker run -it --rm -p 8500:8500  -v $PWD/consul/data:/consul/data \\\n  -e \'CONSUL_LOCAL_CONFIG={"datacenter":"dc1","acl_datacenter": "dc1","acl_master_token": "b1gs33cr3t","acl_default_policy": "deny","acl_down_policy": "extend-cache"}\' \\\n  -e CONSUL_CLIENT_INTERFACE=eth0 \\\n  -e CONSUL_BIND_INTERFACE=eth0 \\\n  --name consul consul agent -server -bootstrap-expect 1 -ui\n\n# \u5ba2\u6237\u7aef\u6307\u5b9a Token\nconsul members -token b1gs33cr3t\nCONSUL_HTTP_TOKEN=b1gs33cr3t consul members\n\ncurl -v --request PUT http://127.0.0.1:8500/v1/acl/bootstrap\n\ndocker run -d --name=dev-consul consul\ndocker run -d consul agent -dev -join=172.17.0.2\ndocker exec -t dev-consul consul members\n\ndocker run -d --net=host consul agent -server -bind=<external ip> -retry-join=<root agent ip> -bootstrap-expect=<number of server agents>\n\n# Start cluster server\ndocker run -d --name=node0 consul agent -server -client=0.0.0.0 -node=node0 -bootstrap-expect=1 -bind=172.17.0.2 -data-dir=/tmp/consul\n\n# Start client\ndocker run -d --name=node1 consul agent -client=0.0.0.0 -node=node1 -bind=172.17.0.3 -data-dir=/tmp/consul -join=172.17.0.2\n')),(0,l.kt)("h2",{id:"acl"},"ACL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/consul/security-networking/production-acls"},"https://learn.hashicorp.com/consul/security-networking/production-acls")),(0,l.kt)("li",{parentName:"ul"},"ACL \u53ef\u63a7\u5236\u7684\u8d44\u6e90\u4e3b\u8981\u6709",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"agent Utility operations in the Agent API, other than service and check registration"),(0,l.kt)("li",{parentName:"ul"},"event Listing and firing events in the Event API"),(0,l.kt)("li",{parentName:"ul"},"key Key/value store operations in the KV Store API"),(0,l.kt)("li",{parentName:"ul"},"keyring Keyring operations in the Keyring API"),(0,l.kt)("li",{parentName:"ul"},"node Node-level catalog operations in the Catalog API, Health API, Prepared Query API, Network Coordinate API, and Agent API"),(0,l.kt)("li",{parentName:"ul"},"operator Cluster-level operations in the Operator API, other than the Keyring API"),(0,l.kt)("li",{parentName:"ul"},"query Prepared query operations in the Prepared Query API"),(0,l.kt)("li",{parentName:"ul"},"service Service-level catalog operations in the Catalog API, Health API, Prepared Query API, and Agent API"),(0,l.kt)("li",{parentName:"ul"},"session Session operations in the Session API"))),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5efa\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"global-management",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5168\u5c40\u7ba1\u7406"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/consul/security-networking/managing-acl-policies#required-privileges-for-datacenter-operations"},"\u64cd\u4f5c\u9700\u8981\u7684\u6743\u9650"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"consul acl bootstrap\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "acl": {\n    // \u542f\u7528 ACL\n    "enabled": true,\n    // \u9ed8\u8ba4\u7b56\u7565 - \u9ed8\u8ba4\u4e3a allow\n    "default_policy": "deny",\n    "tokens": {\n      // \u5728 primary_datacenter \u96c6\u7fa4\u7684\u670d\u52a1\u4f1a\u4f7f\u7528\n      // \u7ba1\u7406\u7ea7\u522b\u7684\u6743\u9650\n      // \u7528\u4e8e\u7533\u8bf7\u96c6\u7fa4 leadership \u65f6\u4f7f\u7528\n      "master": "",\n      // \u9ed8\u8ba4 TOKEN - \u5728 agent \u8bf7\u6c42 \u670d\u52a1\u65f6\u4f7f\u7528\n      // \u5982\u679c\u4e3a\u7a7a\u5219\u4e3a anonymous \u7684 ACL\n      "default": "",\n      // \u7528\u4e8e\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5904\u7406\u5185\u90e8\u64cd\u4f5c - \u5982\u679c\u6ca1\u6307\u5b9a\uff0c\u4f7f\u7528 default\n      // \u8be5 TOKEN \u81f3\u5c11\u9700\u8981\u6709\u5f53\u524d\u8282\u70b9\u7684\u5199\u6743\u9650\n      "agent": "",\n      // \u7528\u4e8e\u8bbf\u95ee agent \u63a5\u53e3 - \u9700\u8981 agent \u8bfb\u5199\u6743\u9650\u6216\u8282\u70b9\u7684\u8bfb\u6743\u9650\n      "agent_master": "",\n      "replication": ""\n    }\n  }\n}\n')),(0,l.kt)("h4",{id:"agent"},"agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'node_prefix "" {\n   policy = "write"\n}\nservice_prefix "" {\n   policy = "read"\n}\n')),(0,l.kt)("h4",{id:"\u53ea\u8bfb\u7b56\u7565"},"\u53ea\u8bfb\u7b56\u7565"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'node_prefix "" {\n  policy = "read"\n}\nservice_prefix "" {\n  policy = "read"\n}\nquery_prefix "" {\n  policy = "read"\n}\nkey_prefix "" {\n  policy = "read"\n}\n')),(0,l.kt)("h4",{id:"registrator"},"registrator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'service_prefix "" {\n  policy = "write"\n}\n')),(0,l.kt)("h4",{id:"anonymous"},"anonymous"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'namespace "default" {\n  policy = "read"\n}\nagent {\n  policy = "read"\n}\nnode {\n  policy = "read"\n}\n')),(0,l.kt)("h3",{id:"dns"},"DNS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"<node>.node[.datacenter].<domain>")),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1 ",(0,l.kt)("inlineCode",{parentName:"li"},"[tag.]<service>.service[.datacenter].<domain>")),(0,l.kt)("li",{parentName:"ul"},"RFC 2782 ",(0,l.kt)("inlineCode",{parentName:"li"},"_<service>._<protocol>[.service][.datacenter][.domain]")),(0,l.kt)("li",{parentName:"ul"},"\u9884\u5b9a\u4e49\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"li"},"<query or name>.query[.datacenter].<domain>"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dig @127.0.0.1 -p 8600 consul.service.consul SRV\n")),(0,l.kt)("h3",{id:"config"},"Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "datacenter": "east-aws",\n  "data_dir": "/opt/consul",\n  "log_level": "INFO",\n  "node_name": "foobar",\n  "server": true,\n  "watches": [\n    {\n        "type": "checks",\n        "handler": "/usr/bin/health-check-handler.sh"\n    }\n  ],\n  "telemetry": {\n     "statsite_address": "127.0.0.1:2180"\n  }\n}\n')),(0,l.kt)("h2",{id:"consul-cluster"},"consul cluster"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e09\u4e2a server\uff0c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"consul.auto.tfvars.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "consul": {\n    "datacenter": "wener",\n    "master_token": "<UUID>"\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"consul.tf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "docker" {}\n\nresource "docker_network" "service" {\n  name = "service"\n  check_duplicate = true\n}\n\nresource "docker_image" "consul" {\n  name = "consul:latest"\n  keep_locally = true\n}\n\nvariable "consul" {}\n\nlocals {\n  server_conf = {\n    datacenter: var.consul.datacenter\n    disable_update_check: true\n    disable_remote_exec: true\n    discard_check_output: true\n    acl: {\n      enabled: true\n      default_policy: "deny"\n      enable_token_persistence: true\n      tokens: {\n        master: var.consul.master_token\n      }\n    },\n    connect: {\n      enabled: true\n      enable_mesh_gateway_wan_federation: true\n    }\n  }\n}\n\n# config-dir /consul/config/\n# data-dir /consul/data/\nresource "docker_container" "consul_1" {\n  name  = "consul_1"\n  hostname  = "consul_1"\n  image = docker_image.consul.latest\n\n  upload {\n    file = "/consul/config/server.json"\n    content = jsonencode(local.server_conf)\n    source_hash = sha256(jsonencode(local.server_conf))\n  }\n\n  command = [\n    "agent", "-server",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-bootstrap-expect", "3",\n    "-ui",\n  ]\n  ports {\n    internal = 8500\n    external = 8500\n  }\n\n  networks_advanced {\n    name = "service"\n  }\n}\n\nresource "docker_container" "consul_2" {\n  name  = "consul_2"\n  hostname  = "consul_2"\n  image = docker_image.consul.latest\n  upload {\n    file = "/consul/config/server.json"\n    content = jsonencode(local.server_conf)\n    source_hash = sha256(jsonencode(local.server_conf))\n  }\n  command = [\n    "agent", "-server",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-retry-join","consul_1"\n  ]\n\n  networks_advanced {\n    name = "service"\n  }\n}\n\nresource "docker_container" "consul_3" {\n  name  = "consul_3"\n  hostname  = "consul_3"\n  image = docker_image.consul.latest\n  upload {\n    file = "/consul/config/server.json"\n    content = jsonencode(local.server_conf)\n    source_hash = sha256(jsonencode(local.server_conf))\n  }\n  command = [\n    "agent", "-server",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-retry-join","consul_1",\n    "-retry-join","consul_2",\n  ]\n\n  networks_advanced {\n    name = "service"\n  }\n}\n\n# agent\nresource "docker_container" "consul_4" {\n  name  = "consul_4"\n  hostname  = "consul_4"\n  image = docker_image.consul.latest\n  command = [\n    "agent",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-retry-join","consul_1",\n    "-retry-join","consul_2",\n    "-retry-join","consul_3",\n  ]\n\n  networks_advanced {\n    name = "service"\n  }\n}\n')),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1"},"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'go get -u github.com/hashicorp/go-sockaddr/cmd/sockaddr\n~/go/bin/sockaddr eval \'GetPrivateInterfaces |  include "network" "10.0.0.0/8" | attr "address"\'\n')),(0,l.kt)("h3",{id:"dropping-node-consul-from-result-due-to-acls"},'dropping node "consul" from result due to ACLs'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DNS \u67e5\u8be2\u65f6\u51fa\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u533f\u540d\u8bbf\u95ee service")),(0,l.kt)("h3",{id:"autopilot-failed-to-remove-dead-servers-too-many-dead-servers-11"},"autopilot: Failed to remove dead servers: too many dead servers: 1/1"),(0,l.kt)("h3",{id:"\u5c06-docker-\u66b4\u9732\u5230-consul"},"\u5c06 docker \u66b4\u9732\u5230 consul"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gliderlabs/registrator"},"gliderlabs/registrator")),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6807\u793a SERVICE_ID - \u9ed8\u8ba4\u662f \u4e3b\u673a\u540d:\u670d\u52a1\u540d:\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u540d\u5b57 SERVICE_NAME"),(0,l.kt)("li",{parentName:"ul"},"\u5ffd\u7565 SERVICE_IGNORE"),(0,l.kt)("li",{parentName:"ul"},"\u6807\u7b7e SERVICE_TAGS=master,backups"),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u6027 SERVICE_xxoo=abc \u4f1a\u8bb0\u5f55\u5230\u670d\u52a1\u5c5e\u6027")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# master \u4e3a\u6700\u65b0 - latest \u4e3a 4 \u5e74\u524d\u6700\u540e\u7248\u672c\ndocker run gliderlabs/registrator:master --help\n\n# -explicit \u53ea\u6709\u5b9a\u4e49\u4e86 SERVICE_NAME \u7684\u624d\u66b4\u9732\n# -ip \u66b4\u9732\u7684 IP - \u4f7f\u7528\u4e86\u8be5\u53c2\u6570\u5219\u4e0d\u9700\u8981 net=host\n# -internal \u4f7f\u7528\u5185\u90e8\u5730\u5740\u548c\u7aef\u53e3 - \u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u7edc\u7684\u65f6\u5019\u5f88\u65b9\u4fbf\ndocker run -d --name=registrator \\\n  --volume=/var/run/docker.sock:/tmp/docker.sock \\\n  gliderlabs/registrator:master -explicit -ip 192.168.1.2 consul://192.168.1.2:8500\n\ndocker run -d --name web -l SERVICE_NAME=web -P nginx\n# \u5f53\u66b4\u9732\u4e86\u591a\u4e2a\u7aef\u53e3\u65f6\u9690\u85cf\u67d0\u4e2a\u7aef\u53e3\ndocker run -d --name web -l SERVICE_NAME=web -l SERVICE_443_IGNORE=true -P nginx\n# \u5982\u679c\u66b4\u9732\u4e86\u591a\u4e2a\u7aef\u53e3\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u53ea\u66b4\u9732\u67d0\u4e2a\u7aef\u53e3\u4f5c\u4e3a\u670d\u52a1\ndocker run -d --name web -l SERVICE_8080_NAME=web -P nginx\n")))}p.isMDXComponent=!0}}]);