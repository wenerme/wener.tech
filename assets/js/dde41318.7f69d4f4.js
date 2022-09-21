"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45096],{90266:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=n(96600),r=n(27279),l=(n(59496),n(3905)),i=["components"],o={id:"fabio",title:"fabio"},p=void 0,u={unversionedId:"devops/service/fabio",id:"devops/service/fabio",title:"fabio",description:"- \u76ee\u524d\u8be5\u9879\u76ee\u5f00\u53d1\u4e0d\u592a\u6d3b\u8dc3\uff0c\u4e0d\u5efa\u8bae\u7528\u6765\u505a\u4e3b\u8981\u7684\u8def\u7531\u6216 Ingress \u89d2\u8272",source:"@site/notes/devops/service/fabio.md",sourceDirName:"devops/service",slug:"/devops/service/fabio",permalink:"/notes/devops/service/fabio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/fabio.md",tags:[],version:"current",frontMatter:{id:"fabio",title:"fabio"},sidebar:"docs",previous:{title:"Consul",permalink:"/notes/devops/service/consul"},next:{title:"Istio",permalink:"/notes/devops/service/istio"}},m={},s=[{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Consul Policy",id:"consul-policy",level:2}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u6ce8\u610f \u26a0\ufe0f",type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u8be5\u9879\u76ee\u5f00\u53d1\u4e0d\u592a\u6d3b\u8dc3\uff0c\u4e0d\u5efa\u8bae\u7528\u6765\u505a\u4e3b\u8981\u7684\u8def\u7531\u6216 Ingress \u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6765\u5c06 consul \u4e0a\u7684\u670d\u52a1\u5bf9\u5916\u66b4\u9732\u8fd8\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u4e0d\u5efa\u8bae\u4f5c\u4e3a\u552f\u4e00\u4f9d\u8d56"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fabiolb/fabio"},"fabiolb/fabio")," - Consul \u5185\u7684\u670d\u52a1 Load-Balancing"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u65e5\u5fd7"),(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29"),(0,l.kt)("li",{parentName:"ul"},"HTTP \u5934\u6ce8\u5165"),(0,l.kt)("li",{parentName:"ul"},"HTTPS \u4e0a\u6e38"),(0,l.kt)("li",{parentName:"ul"},"PROXY \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u8def\u5f84\u5254\u9664 - Path stripping"),(0,l.kt)("li",{parentName:"ul"},"SSE"),(0,l.kt)("li",{parentName:"ul"},"\u539f\u59cb TCP"),(0,l.kt)("li",{parentName:"ul"},"TCP SNI"),(0,l.kt)("li",{parentName:"ul"},"HTTPS TCP SNI"),(0,l.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u63a7\u5236 - \u8def\u7531 N% \u5230\u4e0d\u540c\u4e0a\u6e38"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Vault \u5b58\u50a8 \u8bc1\u4e66"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ea\u4f1a\u5904\u7406\u901a\u8fc7\u76d1\u63a7\u68c0\u67e5\u7684\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 9999"),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u7aef\u53e3 9998"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fabiolb/fabio/wiki/Routing"},"\u8def\u7531"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Tags",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"urlprefix-{host}/{path}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"urlprefix-i.com/static")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"urlprefix-/foo/bar proto=https tlsskipverify=true strip=/foo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"urlprefix-:3306 proto=tcp")," - TCP \u8def\u7531"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fabiolb/fabio/blob/master/fabio.properties"},"fabio.properties")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/weibocom/nginx-upsync-module"},"weibocom/nginx-upsync-module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"consul \u751f\u6210 nginx \u914d\u7f6e")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# go\ngo get -u github.com/fabiolb/fabio\n# macOS\nbrew install fabio\n\nconsul agent -dev\n\nconsul kv put fabio/config 'route add wener-me /wener https://wener.me opts \"strip=/wener host=wener.me\"'\n\n# http://localhost:9999/wener\nfabio\n")),(0,l.kt)("h2",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"li"},"/fabio/config")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fabiolb.net/cfg/"},"Config Language"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow"),(0,l.kt)("td",{parentName:"tr",align:null},"ip:10.0.0.0/8,ip:fe80::/10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8bbf\u95ee\u7684 IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deny"),(0,l.kt)("td",{parentName:"tr",align:null},"ip:10.0.0.0/8,ip:fe80::1234"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5141\u8bb8\u8bbf\u95ee\u7684 IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strip"),(0,l.kt)("td",{parentName:"tr",align:null},"/path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84\u5254\u9664 - ",(0,l.kt)("inlineCode",{parentName:"td"},"/path/to/file")," -> ",(0,l.kt)("inlineCode",{parentName:"td"},"/to/file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proto"),(0,l.kt)("td",{parentName:"tr",align:null},"tcp",(0,l.kt)("br",null),"https",(0,l.kt)("br",null),"tcp+sni"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP \u7684 dst \u5fc5\u987b\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},":<port>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pxyproto"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"PROXY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tlsskipverify"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"wener"),(0,l.kt)("td",{parentName:"tr",align:null},"Host \u5934\uff0c\u5982\u679c\u4e3a dst\uff0c\u5219\u4f1a\u4f7f\u7528\u6ce8\u518c\u7684\u4e0a\u6e38\u4e3b\u673a\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"register"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'# route add <svc> <src> <dst>[ weight <w>][ tags "<t1>,<t2>,..."][ opts "k1=v1 k2=v2 ..."]\n# \u8f6c\u53d1\u5230 wener.me\nroute add wener-me /wener https://wener.me opts "strip=/wener host=wener.me"\n\n# route del <svc>[ <src>[ <dst>]]\n# route del <svc> tags "<t1>,<t2>,..."\n# route del tags "<t1>,<t2>,..."\n\n# route weight <svc> <src> weight <w> tags "<t1>,<t2>,..."\n# route weight <src> weight <w> tags "<t1>,<t2>,..."\n# route weight <svc> <src> weight <w>\n# route weight service host/path weight w tags "tag1,tag2"\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fabiolb.net/ref/"},"Reference"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"conf type"),(0,l.kt)("th",{parentName:"tr",align:null},"demo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fabio.properties"),(0,l.kt)("td",{parentName:"tr",align:null},"metrics.target=stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null},"metrics_target=stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"FABIO_metrics_target=stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"FABIO_METRICS_TARGET=stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg"),(0,l.kt)("td",{parentName:"tr",align:null},"-metrics.target stdout")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u591a\u534f\u8bae\u76d1\u542c\nproxy.addr = 172.16.20.11:80;proto=http;rt=60s;wt=30s,\\\n             172.16.20.11:443;proto=https;rt=60s;wt=30s;cs=all;tlsmin=10, \\\n             172.16.20.11:8443;proto=tcp+sni\n")),(0,l.kt)("h2",{id:"consul-policy"},"Consul Policy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'node_prefix {\n  "" {\n    policy = "read"\n  }\n}\nservice {\n  fabio {\n    policy = "write"\n  }\n  gateway {\n    policy = "write"\n  }\n}\nservice_prefix {\n  "" {\n    policy = "write"\n  }\n}\nkey_prefix {\n  "fabio" {\n    policy = "write"\n  }\n}\nagent {\n  // \u53ef\u9650\u5236\u4e3a fabio\n  "" {\n    policy = "read"\n  }\n}\n')))}k.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{kt:function(){return c}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(d,i(i({ref:e},s),{},{components:n})):a.createElement(d,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);