"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12435],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(a),d=r,c=k["".concat(p,".").concat(d)]||k[d]||u[d]||l;return a?n.createElement(c,o(o({ref:t},s),{},{components:a})):n.createElement(c,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},80360:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),o=["components"],i={title:"HAProxy \u914d\u7f6e",tags:["Configuration"]},p="HAProxy \u914d\u7f6e",m={unversionedId:"devops/web/haproxy-conf",id:"devops/web/haproxy-conf",title:"HAProxy \u914d\u7f6e",description:"acl",source:"@site/../notes/devops/web/haproxy-conf.md",sourceDirName:"devops/web",slug:"/devops/web/haproxy-conf",permalink:"/notes/devops/web/haproxy-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/web/haproxy-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"HAProxy \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"Caddy",permalink:"/notes/devops/web/caddy"},next:{title:"HAProxy Data Plane",permalink:"/notes/devops/web/haproxy-dataplane"}},s={},u=[{value:"acl",id:"acl",level:2},{value:"balance",id:"balance",level:2},{value:"HAProxy \u900f\u660e\u4ee3\u7406+Traefik",id:"haproxy-\u900f\u660e\u4ee3\u7406traefik",level:2},{value:"\u4fdd\u7559\u72b6\u6001",id:"\u4fdd\u7559\u72b6\u6001",level:2},{value:"\u4ea4\u4e92\u547d\u4ee4",id:"\u4ea4\u4e92\u547d\u4ee4",level:2},{value:"SNI Proxy",id:"sni-proxy",level:2},{value:"Logging",id:"logging",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"\u5b9e\u9a8c",id:"\u5b9e\u9a8c",level:2}],k={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"haproxy-\u914d\u7f6e"},"HAProxy \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"haproxy -c -V -f /etc/haproxy/haproxy.cfg\n")),(0,l.kt)("h2",{id:"acl"},"acl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"named acl",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"acl is_static path -i -m beg /static/")))),(0,l.kt)("li",{parentName:"ul"},"in-line acl",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_backend be_static if { path -i -m beg /static/ }")),(0,l.kt)("li",{parentName:"ul"},"if, unless"))),(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u6761\u4ef6\u9ed8\u8ba4\u4e3a and \u5173\u7cfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http-request deny if { path -i -m beg /api/ } { src 10.0.0.0/16 }")))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u903b\u8f91: || or && and !",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http-request deny if { path -i -m beg /api/ } || !{ src 10.0.0.0/16 }")))),(0,l.kt)("li",{parentName:"ul"},"fetch - \u6307\u5339\u914d\u7684\u6765\u6e90\u4fe1\u606f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982: src, path, hdr \u7b49"))),(0,l.kt)("li",{parentName:"ul"},"converter - \u8f6c\u6362",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982: lower, upper, base64, field, bytes, map"))),(0,l.kt)("li",{parentName:"ul"},"flag - fetch \u64cd\u4f5c\u652f\u6301\u901a\u8fc7 flag \u4fee\u6539\u884c\u4e3a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flag"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-i"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u5927\u5c0f\u5199\uff0c\u5339\u914d\u540e\u7eed\u6240\u6709")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u6587\u4ef6\u5185 patterns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-m"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5339\u914d\u65b9\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62 DNS \u89e3\u6790")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-M"),(0,l.kt)("td",{parentName:"tr",align:null},"load the file pointed by -f like a map file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-u"),(0,l.kt)("td",{parentName:"tr",align:null},"force the unique id of the ACL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"force end of flags. Useful when a string looks like one of the flags.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5339\u914d\u65b9\u6cd5 - -m",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u90e8\u5206 fetch \u6709\u53d8\u79cd ",(0,l.kt)("inlineCode",{parentName:"li"},"path_beg")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"path -m beg"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"-m"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6574\u5339\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sub"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u5934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beg"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed3\u5c3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dir"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/")," \u5206\u9694\uff0c\u8def\u5f84\u5339\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".")," \u5206\u9694\uff0c\u57df\u540d\u5339\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reg"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u5339\u914d - ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f\u6027\u80fd\u95ee\u9898"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"found"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"len"),(0,l.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u5339\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u6570\u636e\u5339\u914d - Hex")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hdr_end(host) .wener.me")," \u4e0d\u4f1a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"wener.me")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hdr_end(host) wener.me")," \u4f1a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"xyzwener.me")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hdr_dom(host) wener.me")," \u4f1a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"wener.me")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"*.wener.me"),", \u4e0d\u4f1a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"xyzwener.me"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u65f6\u5019\u671f\u671b\u7ed3\u679c")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"alias"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base_beg"),(0,l.kt)("td",{parentName:"tr",align:null},"base -m beg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hdr_end"),(0,l.kt)("td",{parentName:"tr",align:null},"hdr -m end")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path_beg"),(0,l.kt)("td",{parentName:"tr",align:null},"path -m beg")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haproxy"},"redirect scheme code 301 https if !{ ssl_fc }\n\n# \u52a8\u6001\u540d\u5b57\nuse_backend be_%[path,map_beg(/etc/haproxy/paths.map, mydefault)]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%[var()]"))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://wtarreau.blogspot.com/2011/12/elastic-binary-trees-ebtree.html"},"ebtree"))))),(0,l.kt)("h2",{id:"balance"},"balance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/documentation/hapee/latest/onepage/#4.2-balance"},"balance")),(0,l.kt)("li",{parentName:"ul"},"hash - 2.6+"),(0,l.kt)("li",{parentName:"ul"},"roundrobin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e weight \u8f6e\u8bad - weight \u53ef\u52a8\u6001\u8c03\u6574"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u591a 4095 server"))),(0,l.kt)("li",{parentName:"ul"},"static-rr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540c roundrobin \u4f46\u4e0d\u652f\u6301\u8c03\u6574 weight\uff0c\u4e0d\u9650\u5236 server \u6570\u91cf"))),(0,l.kt)("li",{parentName:"ul"},"leastconn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6700\u5c11\u8fde\u63a5\u6570\u7684 server"),(0,l.kt)("li",{parentName:"ul"},"\u5728 server \u4e2d\u4f7f\u7528 rr \u5c31\u884c\u9009\u62e9 - \u652f\u6301\u52a8\u6001 weight"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u957f\u94fe\u63a5 \uff08\u4f8b\u5982\uff1aLDAP, SQL, TSE\uff09 \u4e0d\u9002\u7528\u4e8e\u77ed\u94fe\u63a5 \uff08\u4f8b\u5982\uff1a HTTP\uff09"))),(0,l.kt)("li",{parentName:"ul"},"first",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 server id \u987a\u5e8f\u9009\u62e9\u7b2c\u4e00\u4e2a slot - id \u9ed8\u8ba4\u4e3a server \u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 server \u8fbe\u5230 maxconn \u65f6\u9009\u62e9\u4e0b\u4e00\u4e2a - \u4f7f\u7528\u8be5\u7b97\u6cd5\u8981\u8bbe\u7f6e\u4e86 maxconn \u624d\u6709\u610f\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u7b97\u6cd5\u53ef\u4ee5\u4f7f\u540e\u9762\u7684 server \u6309\u9700\u542f\u52a8 - \u914d\u5408\u57fa\u7840\u8bbe\u65bd\u52a8\u6001\u63a7\u5236\u670d\u52a1\u5668\u8d77\u505c"),(0,l.kt)("li",{parentName:"ul"},"\u5ffd\u7565 weight\uff0c\u66f4\u9002\u7528\u4e8e\u957f\u94fe\u63a5"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"http-check send-state")," \u544a\u77e5\u670d\u52a1\u5668\u8d1f\u8f7d"))),(0,l.kt)("li",{parentName:"ul"},"source",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 IP hash \u53d6\u6a21\u9009\u62e9 server"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 server \u6570\u91cf\u4f1a\u5f71\u54cd\u9009\u53d6\u7ed3\u679c - server up\u3001down \u4e5f\u4f1a\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"))),(0,l.kt)("li",{parentName:"ul"},"uri",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"URL hash \u53d6\u6a21\u9009\u62e9 server"),(0,l.kt)("li",{parentName:"ul"},"URL \u4f7f\u7528\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u524d\u9762\u90e8\u5206\uff0c\u53ef\u6307\u5b9a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"whole")," \u4f7f\u7528\u6240\u6709"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u589e\u52a0\u7f13\u5b58\u547d\u4e2d\uff0c\u53ea\u9002\u7528\u4e8e HTTP \u540e\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"len - \u622a\u53d6\u957f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"depth - \u76ee\u5f55\u6df1\u5ea6"))))),(0,l.kt)("li",{parentName:"ul"},"url_param",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 HTTP GET \u8bf7\u6c42\u4e0a\u7684 URL \u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u672a\u627e\u5230\u53c2\u6570\u5219\u4f7f\u7528 rr"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"check_post - \u9488\u5bf9 POST \u4e5f\u68c0\u6d4b"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hdr(<name>)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 HTTP \u5934 ",(0,l.kt)("inlineCode",{parentName:"li"},"<name>")," - \u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u4e0d\u5b58\u5728\u5219\u4f7f\u7528 rr"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"use_domain_only - HASH \u57df\u540d\uff0c\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Host")," \u5934"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"random"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"random(<draws>)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u968f\u673a\u6570\uff0c\u4e00\u81f4\u6027 hash - weight \u52a8\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e server \u6570\u91cf\u591a\u4e14\u9891\u7e41\u52a0\u51cf\u573a\u666f - \u6bd4 roundrobin \u548c leastconn \u5f71\u54cd\u66f4\u5c0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<draws>")," - number of draws before selecting the least loaded of these servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 2"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"hash-balance-factor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u589e\u5f3a\u516c\u5e73\u6027"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.eecs.harvard.edu/~michaelm/postscripts/handbook2001.pdf"},"Power of Two Random Choices")))),(0,l.kt)("li",{parentName:"ul"},"rdp-cookie, ",(0,l.kt)("inlineCode",{parentName:"li"},"rdp-cookie(<name>)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"name \u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"mstshash")),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"tcp-request content accept")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"req_rdp_cookie_cnt")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type")))),(0,l.kt)("h2",{id:"haproxy-\u900f\u660e\u4ee3\u7406traefik"},"HAProxy \u900f\u660e\u4ee3\u7406+Traefik"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/blog/haproxy/proxy-protocol"},"haproxy/proxy-protocol")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt"},"proxy-protocol.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.traefik.io/routing/entrypoints/#proxyprotocol"},"traefik proxy protocol")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/57503161/1870054"},"HAProxy tcp mode source client ip")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yq.aliyun.com/articles/492367"},"Haproxy \u5168\u900f\u660e\u4ee3\u7406"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haproxy"},"global\n  log /dev/log    local0\n  log /dev/log    local1 notice\n  chroot /var/lib/haproxy\n  # \u5e38\u89c1\u4f4d\u7f6e\n  # /run/haproxy/admin.sock\n  # /var/run/haproxy.sock\n  stats socket /var/lib/haproxy/stats mode 660 level admin\n  # stats socket ipv4@192.168.0.1:9999 level admin\n  stats timeout 30s\n  user haproxy\n  group haproxy\n  daemon\n\ndefaults\n  log global\n  retries 2\n  option  dontlognull\n  timeout connect 10000\n  timeout server 600000\n  timeout client 600000\n\nfrontend https\n  bind 0.0.0.0:443\n  default_backend https\n\nbackend https\n  mode tcp\n  balance roundrobin\n  option tcp-check\n  # traefik \u540e\u7aef\u4e5f\u652f\u6301 proxy \u534f\u8bae\n  server traefik 192.168.128.5:9443 check fall 3 rise 2 send-proxy\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -F\niptables -t mangle -N DIVERT\niptables -t mangle -A PREROUTING -p tcp -m socket -j DIVERT\niptables -t mangle -A DIVERT -j MARK --set-mark 222\niptables -t mangle -A DIVERT -j ACCEPT\nip rule add fwmark 222 lookup 100\nip route add local 0.0.0.0/0 dev lo table 100\n\n# \u5141\u8bb8ip\u8f6c\u53d1\necho 1 > /proc/sys/net/ipv4/conf/all/forwarding\n\n# \u8bbe\u7f6e\u677e\u6563\u9006\u5411\u8def\u5f84\u8fc7\u6ee4\necho 2 > /proc/sys/net/ipv4/conf/default/rp_filter\necho 2 > /proc/sys/net/ipv4/conf/all/rp_filter\necho 0 > /proc/sys/net/ipv4/conf/enp0s8/rp_filter\n\n# \u5141\u8bb8ICMP\u91cd\u5b9a\u5411\necho 1 > /proc/sys/net/ipv4/conf/all/send_redirects\necho 1 > /proc/sys/net/ipv4/conf/enp0s8/send_redirects\n")),(0,l.kt)("h2",{id:"\u4fdd\u7559\u72b6\u6001"},"\u4fdd\u7559\u72b6\u6001"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4fdd\u7559\u7edf\u8ba1\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"global\n  # \u72b6\u6001\u6587\u4ef6\n  server-state-file /var/lib/haproxy/server-state\n  stats socket /var/lib/haproxy/stats\n\ndefaults\n  # \u52a0\u8f7d\u7edf\u8ba1\n  load-server-state-from-file global\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4fdd\u7559\u72b6\u6001\necho "show servers state" | socat /var/lib/haproxy/stats stdio > /var/lib/haproxy/server-state\n')),(0,l.kt)("h2",{id:"\u4ea4\u4e92\u547d\u4ee4"},"\u4ea4\u4e92\u547d\u4ee4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cbonte.github.io/haproxy-dconv/2.2/management.html#9.3"},"Unix Socket commands"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u811a\u672c\u4e00\u6b21\u6267\u884c\n# socat \u53ef\u80fd\u9700\u8981 sudo\necho "show info;show stat;show table" | socat /var/lib/haproxy/stats stdio\n# \u4ea4\u4e92\u5f0f\nsocat /var/lib/haproxy/stats readline\n# prompt\n')),(0,l.kt)("h2",{id:"sni-proxy"},"SNI Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://blog.haproxy.com/2012/04/13/enhanced-ssl-load-balancing-with-server-name-indication-sni-tls-extension/"},"http://blog.haproxy.com/2012/04/13/enhanced-ssl-load-balancing-with-server-name-indication-sni-tls-extension/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.liip.ch/en/blog/haproxy-selective-tls-termination"},"HAProxy selective TLS termination"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haproxy"},"backend bk_ssl\n  mode tcp\n  no option checkcache\n  no option httpclose\n  tcp-request inspect-delay 5s\n  tcp-request content accept if { req.ssl_hello_type 1 }\n  tcp-request content reject\n  use-server server1 if { req.ssl_sni -m beg app1. }\n  server server1 server1:8443 check id 1 weight 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haproxy"},"backend https\n  option tcplog\n  bind 0.0.0.0:443\n  tcp-request inspect-delay 5s\n  tcp-request content accept if { req_ssl_hello_type 1 }\n\n  use_backend s1 if { req.ssl_sni -i site1.example.com or site1alias.example.com }\n\n  use_backend s2 if { ssl_fc_sni_end s2.example.com }\n")),(0,l.kt)("p",null,"-m end\nuse_backend apache if { ssl_fc_sni_end domain.com }"),(0,l.kt)("p",null,"hdr(host)\nhdr_end(host) -i .wener.me\nhdr_beg(host) -i .wener.me"),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haproxy"},"global\n  # syslog UNIX socket\n  log /dev/log local0\n\n  # \u672c\u5730 syslog server\n  log 127.0.0.1 local1 notice\n  # log \u5230 hostname \u4e3a rsyslog \u7684\u670d\u52a1\u5668\n  log rsyslog:514 local0\n\n  # stdout - \u7528\u4e8e\u5bb9\u5668\u73af\u5883\n  log stdout format raw local0\n  log stdout format raw daemon debug\n\ndefaults\n  log global\n  mode http\n  option httplog\n\nbackend s1\n  mode tcp\n  option tcplog\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/documentation/hapee/latest/onepage/#8"},"https://www.haproxy.com/documentation/hapee/latest/onepage/#8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/documentation/hapee/latest/observability/logging/overview/"},"https://www.haproxy.com/documentation/hapee/latest/observability/logging/overview/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/blog/introduction-to-haproxy-logging/"},"https://www.haproxy.com/blog/introduction-to-haproxy-logging/"))),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cbonte.github.io/haproxy-dconv/"},"HAProxy Documentation Converter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cbonte.github.io/haproxy-dconv/2.6/configuration.html#4.1"},"Proxy keywords matrix")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/krams915/1269101/62614130ae58a1ae107cef251a82716af3edf95b"},"https://gist.github.com/krams915/1269101/62614130ae58a1ae107cef251a82716af3edf95b"))),(0,l.kt)("h2",{id:"\u5b9e\u9a8c"},"\u5b9e\u9a8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haproxy"},"global\n  log stdout format raw local0\n  log stdout format raw daemon debug\n\ndefaults\n  log global\n  option httplog\n  timeout client 300s\n  timeout server 300s\n  timeout connect 5s\n\n  mode http\n\nfrontend f1\n  bind 0.0.0.0:8088\n\n  use_backend http:b1 if { hdr_dom(host) -i wener.me }\n\nbackend http:b1\n  mode http\n\nbackend tcp:b1\n  mode tcp\n\nlisten stats\n  bind :8084\n  mode http\n\n  http-request use-service prometheus-exporter if { path /metrics }\n\n  stats enable\n  stats hide-version\n  stats uri /\n  stats refresh 5s\n  stats realm Haproxy\\ Statistics\n  # stats auth Username:Password\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"haproxy -c -f haproxy.cfg # Check\nhaproxy -f haproxy.cfg    # Run\n# stats http://127.0.0.1:8083\n\n# \u9a8c\u8bc1\u8def\u7531\ncurl -H 'Host: wener.me' 127.0.0.1:8088\n")))}d.isMDXComponent=!0}}]);