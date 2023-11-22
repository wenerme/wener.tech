"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15669],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||s;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},47719:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&l(e,r,t[r]);return e},m=(e,t)=>s(e,i(t)),y=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"SNI Reverse Proxy"},f="SNI Reverse Proxy",h={unversionedId:"service/network/proxy/sni-rev-proxy",id:"service/network/proxy/sni-rev-proxy",title:"SNI Reverse Proxy",description:"- mashirozx/Pixiv-Nginx",source:"@site/../notes/service/network/proxy/sni-rev-proxy.md",sourceDirName:"service/network/proxy",slug:"/service/network/proxy/sni-rev-proxy",permalink:"/notes/service/network/proxy/sni-rev-proxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/sni-rev-proxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"SNI Reverse Proxy"},sidebar:"docs",previous:{title:"sing-box",permalink:"/notes/service/network/proxy/sing-box"},next:{title:"tinyproxy",permalink:"/notes/service/network/proxy/tinyproxy"}},k={},v=[{value:"HAProxy SNI Proxy",id:"haproxy-sni-proxy",level:2}],g={toc:v},x="wrapper";function b(e){var t=e,{components:r}=t,o=y(t,["components"]);return(0,n.kt)(x,m(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"sni-reverse-proxy"}),"SNI Reverse Proxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/mashirozx/Pixiv-Nginx"}),"mashirozx/Pixiv-Nginx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://south-plus.net/read.php?tid-1032029.html"}),"https://south-plus.net/read.php?tid-1032029.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/dlundquist/sniproxy"}),"dlundquist/sniproxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/notes/service/network/proxy/gost"}),"gost")),(0,n.kt)("li",{parentName:"ul"},"clash premium \u652f\u6301 Sniff TLS SNI")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"gost -L sni://:80 -L sni://:443 -F socks5://192.168.1.1:1080\n")),(0,n.kt)("h2",u({},{id:"haproxy-sni-proxy"}),"HAProxy SNI Proxy"),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u90e8\u7f72\u5728\u5185\u90e8\u73af\u5883\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u8303\u56f4\u53ef\u63a7"),(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef 0 \u914d\u7f6e"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# haproxy -c -V -f haproxy.conf\nglobal\n  log stdout format raw local0\n\ndefaults\n  log global\n\n  mode tcp\n  option tcplog\n  option dontlognull\n\n  timeout http-request    10s\n  timeout queue           1m\n  timeout connect         10s\n  timeout client          1m\n  timeout server          1m\n  timeout http-keep-alive 10s\n  timeout check           10s\n  timeout tunnel          1h\n  maxconn                 10000\n\nfrontend http\n  mode http\n  bind *:80\n  use_backend registry.k8s.io.http if { hdr(host) -m end registry.k8s.io }\n\nfrontend https\n  mode tcp\n  bind *:443\n\n  tcp-request inspect-delay 5s\n  tcp-request content accept if { req.ssl_hello_type 1 }\n\n  use_backend registry.k8s.io.https if { req_ssl_sni -m end -i registry.k8s.io }\n  use_backend pkg.dev.https if { req_ssl_sni -m end -i pkg.dev }\n\nbackend registry.k8s.io.https\n  mode tcp\n  server s1 34.96.108.209:443 check check-via-socks4 socks4 127.0.0.1:7890\n\nbackend registry.k8s.io.http\n  mode http\n  server s1 34.96.108.209:80 check check-via-socks4 socks4 127.0.0.1:7890\n\nbackend pkg.dev.https\n  mode tcp\n  server s1 216.239.32.27:443 check check-via-socks4 socks4 127.0.0.1:7890\n\nlisten stats\n  bind :8404\n  mode http\n\n  #option http-use-htx\n  #http-request use-service prometheus-exporter if { path /metrics }\n\n  stats enable\n  stats hide-version\n  stats uri /\n  stats refresh 5s\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"haproxy -f haproxy.conf\n# \u5982\u679c\u5728\u5185\u7f51\u90e8\u7f72\u4e86 adguard \u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\n# registry.k8s.io -> pkg.dev\necho '127.0.0.1 registry.k8s.io' >> /etc/hosts\necho '127.0.0.1 asia-east1-docker.pkg.dev' >> /etc/hosts\necho '127.0.0.1 us-south1-docker.pkg.dev' >> /etc/hosts\n\n# https://explore.ggcr.dev/?repo=registry.k8s.io\ncurl -sL \"https://registry.k8s.io/v2/tags/list\" | jq .\ndocker pull registry.k8s.io/pause:3.8\n")))}b.isMDXComponent=!0}}]);