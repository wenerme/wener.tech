(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{523:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),b=(a(0),a(586)),l={id:"fabio",title:"fabio"},c={unversionedId:"devops/service/fabio",id:"devops/service/fabio",isDocsHomePage:!1,title:"fabio",description:"fabio",source:"@site/notes/devops/service/fabio.md",slug:"/devops/service/fabio",permalink:"/notes/devops/service/fabio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/fabio.md",version:"current",sidebar:"docs",previous:{title:"Consule Connect Mesh",permalink:"/notes/devops/service/consul-connect"},next:{title:"Nginx",permalink:"/notes/devops/web/nginx"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Consul Policy",id:"consul-policy",children:[]}],p={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"fabio"},"fabio"),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u76ee\u524d\u8be5\u9879\u76ee\u5f00\u53d1\u4e0d\u592a\u6d3b\u8dc3\uff0c\u4e0d\u5efa\u8bae\u7528\u6765\u505a\u4e3b\u8981\u7684\u8def\u7531\u6216 Ingress \u89d2\u8272"),Object(b.b)("li",{parentName:"ul"},"\u7528\u6765\u5c06 consul \u4e0a\u7684\u670d\u52a1\u5bf9\u5916\u66b4\u9732\u8fd8\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u4e0d\u5efa\u8bae\u4f5c\u4e3a\u552f\u4e00\u4f9d\u8d56"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fabiolb/fabio"}),"fabiolb/fabio")," - Consul \u5185\u7684\u670d\u52a1 Load-Balancing"),Object(b.b)("li",{parentName:"ul"},"\u7279\u6027",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u65e5\u5fd7"),Object(b.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236"),Object(b.b)("li",{parentName:"ul"},"\u8bc1\u4e66\u5b58\u50a8"),Object(b.b)("li",{parentName:"ul"},"\u538b\u7f29"),Object(b.b)("li",{parentName:"ul"},"HTTP \u5934\u6ce8\u5165"),Object(b.b)("li",{parentName:"ul"},"HTTPS \u4e0a\u6e38"),Object(b.b)("li",{parentName:"ul"},"PROXY \u534f\u8bae"),Object(b.b)("li",{parentName:"ul"},"\u8def\u5f84\u5254\u9664 - Path stripping"),Object(b.b)("li",{parentName:"ul"},"SSE"),Object(b.b)("li",{parentName:"ul"},"\u539f\u59cb TCP"),Object(b.b)("li",{parentName:"ul"},"TCP SNI"),Object(b.b)("li",{parentName:"ul"},"HTTPS TCP SNI"),Object(b.b)("li",{parentName:"ul"},"\u6d41\u91cf\u63a7\u5236 - \u8def\u7531 N% \u5230\u4e0d\u540c\u4e0a\u6e38"),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301 Vault \u5b58\u50a8 \u8bc1\u4e66"))),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ea\u4f1a\u5904\u7406\u901a\u8fc7\u76d1\u63a7\u68c0\u67e5\u7684\u670d\u52a1"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 9999"),Object(b.b)("li",{parentName:"ul"},"\u7ba1\u7406\u7aef\u53e3 9998"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fabiolb/fabio/wiki/Routing"}),"\u8def\u7531"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Tags",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"urlprefix-{host}/{path}")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"urlprefix-i.com/static")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"urlprefix-/foo/bar proto=https tlsskipverify=true strip=/foo")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"urlprefix-:3306 proto=tcp")," - TCP \u8def\u7531"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fabiolb/fabio/blob/master/fabio.properties"}),"fabio.properties"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# go\ngo get -u github.com/fabiolb/fabio\n# macOS\nbrew install fabio\n\nconsul agent -dev\n\nconsul kv put fabio/config 'route add wener-me /wener https://wener.me opts \"strip=/wener host=wener.me\"'\n\n# http://localhost:9999/wener\nfabio\n")),Object(b.b)("h2",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u8def\u5f84 ",Object(b.b)("inlineCode",{parentName:"li"},"/fabio/config")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://fabiolb.net/cfg/"}),"Config Language"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Desc"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allow"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip:10.0.0.0/8,ip:fe80::/10"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5141\u8bb8\u8bbf\u95ee\u7684 IP")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deny"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip:10.0.0.0/8,ip:fe80::1234"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e0d\u5141\u8bb8\u8bbf\u95ee\u7684 IP")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strip"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8def\u5f84\u5254\u9664 - ",Object(b.b)("inlineCode",{parentName:"td"},"/path/to/file")," -> ",Object(b.b)("inlineCode",{parentName:"td"},"/to/file"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"proto"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tcp",Object(b.b)("br",null),"https",Object(b.b)("br",null),"tcp+sni"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCP \u7684 dst \u5fc5\u987b\u662f ",Object(b.b)("inlineCode",{parentName:"td"},":<port>"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pxyproto"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROXY")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tlsskipverify"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"host"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wener"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Host \u5934\uff0c\u5982\u679c\u4e3a dst\uff0c\u5219\u4f1a\u4f7f\u7528\u6ce8\u518c\u7684\u4e0a\u6e38\u4e3b\u673a\u540d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"register"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"auth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),'# route add <svc> <src> <dst>[ weight <w>][ tags "<t1>,<t2>,..."][ opts "k1=v1 k2=v2 ..."]\n# \u8f6c\u53d1\u5230 wener.me\nroute add wener-me /wener https://wener.me opts "strip=/wener host=wener.me"\n\n# route del <svc>[ <src>[ <dst>]]\n# route del <svc> tags "<t1>,<t2>,..."\n# route del tags "<t1>,<t2>,..."\n\n# route weight <svc> <src> weight <w> tags "<t1>,<t2>,..."\n# route weight <src> weight <w> tags "<t1>,<t2>,..."\n# route weight <svc> <src> weight <w>\n# route weight service host/path weight w tags "tag1,tag2"\n')),Object(b.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://fabiolb.net/ref/"}),"Reference"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"conf type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"demo"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fabio.properties"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metrics.target=stdout")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"env"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metrics_target=stdout")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"env prefix"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FABIO_metrics_target=stdout")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENV"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FABIO_METRICS_TARGET=stdout")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arg"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-metrics.target stdout")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"# \u591a\u534f\u8bae\u76d1\u542c\nproxy.addr = 172.16.20.11:80;proto=http;rt=60s;wt=30s,\\\n             172.16.20.11:443;proto=https;rt=60s;wt=30s;cs=all;tlsmin=10, \\\n             172.16.20.11:8443;proto=tcp+sni\n")),Object(b.b)("h2",{id:"consul-policy"},"Consul Policy"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-hcl"}),'node_prefix {\n  "" {\n    policy = "read"\n  }\n}\nservice {\n  fabio {\n    policy = "write"\n  }\n  gateway {\n    policy = "write"\n  }\n}\nservice_prefix {\n  "" {\n    policy = "write"\n  }\n}\nkey_prefix {\n  "fabio" {\n    policy = "write"\n  }\n}\nagent {\n  // \u53ef\u9650\u5236\u4e3a fabio\n  "" {\n    policy = "read"\n  }\n}\n')))}o.isMDXComponent=!0},586:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,m=O["".concat(l,".").concat(j)]||O[j]||u[j]||b;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);