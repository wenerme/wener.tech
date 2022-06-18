"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49621],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(r),c=n,d=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},96049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],p={title:"Proxy FAQ",tags:["FAQ"]},o="Web Server FAQ",u={unversionedId:"devops/web/proxy-faq",id:"devops/web/proxy-faq",title:"Proxy FAQ",description:"WebServer vs Proxy",source:"@site/notes/devops/web/proxy-faq.md",sourceDirName:"devops/web",slug:"/devops/web/proxy-faq",permalink:"/notes/devops/web/proxy-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/proxy-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Proxy FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Proxy Awesome",permalink:"/notes/devops/web/proxy-awesome"},next:{title:"Traefik V1",permalink:"/notes/devops/web/traefik-v1"}},m={},s=[{value:"WebServer vs Proxy",id:"webserver-vs-proxy",level:2},{value:"HAProxy vs Varnish",id:"haproxy-vs-varnish",level:2},{value:"Caddy vs Traefik",id:"caddy-vs-traefik",level:2},{value:"Nginx vs HAProxy",id:"nginx-vs-haproxy",level:3},{value:"Caddy v1 vs Caddy v2",id:"caddy-v1-vs-caddy-v2",level:2},{value:"HAProxy vs Keepalived",id:"haproxy-vs-keepalived",level:2}],k={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"web-server-faq"},"Web Server FAQ"),(0,l.kt)("h2",{id:"webserver-vs-proxy"},"WebServer vs Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WebServer - nginx, apache",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u9759\u6001\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 cgi, fastcgi \u7b49\u5e94\u7528\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},"Proxy - haproxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 HTTP, HTTPS"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 TCP, UDP")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"WebServer \u4e5f\u53ef\u4ee5\u662f Proxy"),(0,l.kt)("h2",{id:"haproxy-vs-varnish"},"HAProxy vs Varnish"),(0,l.kt)("p",null,"\u4e24\u8005\u9700\u8981\u914d\u5408\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u529f\u80fd\u4e1a\u4f59"))),(0,l.kt)("li",{parentName:"ul"},"Varnish",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e13\u4e1a\u7f13\u5b58")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/blog/haproxys-load-balancing-algorithm-for-static-content-delivery-with-varnish/"},"HAProxy\u2019s Load-Balancing Algorithm for Static Content Delivery with Varnish")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/blog/haproxy-and-varnish-comparison/"},"HAProxy and Varnish Comparison"))),(0,l.kt)("h2",{id:"caddy-vs-traefik"},"Caddy vs Traefik"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Caddy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u662f Web \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u70b9\u662f HTTP2\u3001\u81ea\u52a8 HTTPS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"V2 \u7248\u672c\u8fd8\u5728\u5f00\u53d1\u4e2d - \u53d8\u5316\u5f88\u5927")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a acme \u670d\u52a1\u5546"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f5c\u4e3a acme \u670d\u52a1\u5546"))),(0,l.kt)("li",{parentName:"ul"},"Traefik",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u662f\u5fae\u670d\u52a1\u4e0b\u7684\u8d1f\u8f7d\u5747\u8861\u3001\u8fb9\u754c\u8def\u7531\u3001\u53cd\u5411\u4ee3\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u504f\u5411 Cloud Native"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9 K8S \u652f\u6301\u8f83\u597d - \u652f\u6301\u4f5c\u4e3a Ingress"),(0,l.kt)("li",{parentName:"ul"},"V2 \u7248\u672c\u8c03\u6574\u4e86\u524d\u540e\u7aef\u6982\u5ff5 - \u7ed3\u6784\u66f4\u52a0\u6e05\u6670\u6613\u4e8e\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c SNI \u8d1f\u8f7d\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"acme \u4e0d\u652f\u6301\u5206\u5e03\u5f0f - \u4ed8\u8d39")))),(0,l.kt)("h3",{id:"nginx-vs-haproxy"},"Nginx vs HAProxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nginx",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u64c5\u957f\u5e94\u7528\u5c42\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Web Hosting"),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u9650\u6d41\u80fd\u529b\u8f83\u5f31"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u6307\u6807\u5c11"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c UDP"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a\u5e94\u7528\u5c42\u9762\u7684\u611f\u77e5 - 7 \u5c42"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6a21\u5757\u63d0\u4f9b\u5404\u79cd\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u6536\u8d39\u7248 ",(0,l.kt)("a",{parentName:"li",href:"https://www.nginx.com/products/nginx/#compare-versions"},"Nginx Plus")),(0,l.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u793e\u533a\u7248 upstream \u7684 host \u4e0d\u4f1a\u53d8 - \u4e0d\u4f1a\u968f dns \u53d8\u5316 - \u5bf9\u4e8e LB \u6765\u8bf4\u6bd4\u8f83\u81f4\u547d"))),(0,l.kt)("li",{parentName:"ul"},"HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u64c5\u957f\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f5c\u4e3a Web \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4 Nginx \u66f4\u64c5\u957f SSL offload / SSL terminate"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u89d2\u8272\u662f\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u9650\u6d41\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u7edf\u8ba1\u6307\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDP ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxy/haproxy/issues/62"},"#62"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f DNS \u8d1f\u8f7d\u63a8\u8350\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://dnsdist.org"},"dnsdist")),(0,l.kt)("li",{parentName:"ul"},"2.3 \u5f00\u59cb\u652f\u6301 QUIC \u652f\u6301\u90e8\u5206 UDP \u8d1f\u8f7d"))),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u91cf\u548c\u903b\u8f91\u6bd4 Nginx \u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u6536\u8d39\u7248 - ",(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/products/community-vs-enterprise-edition/"},"HAProxy EE")))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9 HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"SSL Offload"),(0,l.kt)("li",{parentName:"ul"},"\u5165\u53e3 - SNI\u3001\u53cd\u5411\u4ee3\u7406\u3001SSL Offload"),(0,l.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u770b\u5230\u72b6\u6001\u548c\u76d1\u63a7"))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9 Nginx",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u6258\u7ba1\u7f51\u7ad9"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5e94\u7528\u5c42\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0\u5e94\u7528\u7f51\u5173")))),(0,l.kt)("h2",{id:"caddy-v1-vs-caddy-v2"},"Caddy v1 vs Caddy v2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Caddy v1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e - \u7b80\u5355/\u529f\u80fd\u6709\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u91cf reload"))),(0,l.kt)("li",{parentName:"ul"},"Caddy v2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u63a5\u53e3\u914d\u7f6e - \u66f4\u52a0\u7075\u6d3b/\u590d\u6742"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u62d3\u5c55"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 API \u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u7ec6\u7c92\u5ea6\u52a8\u6001\u914d\u7f6e")))),(0,l.kt)("h2",{id:"haproxy-vs-keepalived"},"HAProxy vs Keepalived"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 4 \u5c42 TCP \u548c 7 \u5c42 HTTP"),(0,l.kt)("li",{parentName:"ul"},"\u611f\u77e5\u90e8\u5206 4 \u5c42\u534f\u8bae - \u4f8b\u5982 syslog"))),(0,l.kt)("li",{parentName:"ul"},"Keepalived",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 4 \u5c42 TCP\u3001UDP \u8d1f\u8f7d")))),(0,l.kt)("p",null,"\u4e24\u8005\u9762\u5411\u4e0d\u540c\u573a\u666f\uff0c\u5927\u90e8\u5206\u4f7f\u7528\u4f7f\u7528 haproxy\uff0c\u5982\u679c\u9700\u8981 udp \u8003\u8651 keepalived \u6216\u8005 nginx\u3002"))}c.isMDXComponent=!0}}]);