"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78381],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(r),f=a,y=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4867:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return u},metadata:function(){return y},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&c(e,r,t[r]);return e};const u={title:"MitmProxy"},f="mitmproxy",y={unversionedId:"service/network/mitmproxy",id:"service/network/mitmproxy",title:"MitmProxy",description:"- \u8bc1\u4e66\u5b89\u88c5\u8bbf\u95ee http://mitm.it/",source:"@site/../notes/service/network/mitmproxy.md",sourceDirName:"service/network",slug:"/service/network/mitmproxy",permalink:"/notes/service/network/mitmproxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/mitmproxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"MitmProxy"},sidebar:"docs",previous:{title:"IPSec",permalink:"/notes/service/network/ipsec"},next:{title:"n2n version",permalink:"/notes/service/network/n2n-version"}},k={},d=[{value:"\u900f\u660e\u4ee3\u7406",id:"\u900f\u660e\u4ee3\u7406",level:2}],b={toc:d};function w(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"mitmproxy"}),"mitmproxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u5b89\u88c5\u8bbf\u95ee ",(0,n.kt)("a",s({parentName:"li"},{href:"http://mitm.it/"}),"http://mitm.it/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"http://docs.mitmproxy.org/en/stable/"}),"Doc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.mitmproxy.org/stable/concepts-modes/"}),"\u5de5\u4f5c\u6a21\u5f0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Regular Proxy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66 - \u8bbf\u95ee mitm.it \u5b89\u88c5\u8bc1\u4e66"))),(0,n.kt)("li",{parentName:"ul"},"Transparent - \u900f\u660e\u4ee3\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u65e0\u6cd5\u914d\u7f6e HTTP \u4ee3\u7406\u7684\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8def\u7531\u7b49\u624b\u6bb5\u76f4\u63a5\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 mitmproxy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9ed8\u8ba4\u7f51\u5173"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0b\u4e00\u8df3\u5730\u5740"))))),(0,n.kt)("li",{parentName:"ul"},"Reverse Proxy - \u53cd\u5411\u4ee3\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u914d\u7f6e\uff0c\u4ee3\u7406\u670d\u52a1\u7aef\u6d41\u91cf"))),(0,n.kt)("li",{parentName:"ul"},"Uptream Proxy - \u4e0a\u6e38\u4ee3\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4e8c\u7ea7\u4ee3\u7406\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u4e0b\u4e00\u7ea7\u4ee3\u7406\u5730\u5740"))),(0,n.kt)("li",{parentName:"ul"},"SOCKS Proxy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e SOCKS5 \u7684\u4ee3\u7406\u534f\u8bae - \u9ed8\u8ba4 HTTP \u534f\u8bae"))))),(0,n.kt)("li",{parentName:"ul"},"frozenpandaman/splatnet2statink - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/frozenpandaman/splatnet2statink/wiki/mitmproxy-instructions"}),"mitmproxy instructions"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"mitmweb --mode regular --no-web-open-browser --web-port 8080 --listen-port 8888\n\nopenssl genrsa -out cert.key 2048\nopenssl req -new -x509 -key cert.key -out cert.crt\ncat cert.key cert.crt > cert.pem\n\n# \u9ed8\u8ba4 ~/.mitmproxy/mitmproxy-ca.pem\nmitmweb --certs squid-ca-cert.pem --mode regular --no-web-open-browser --web-port 8080 --listen-port 8888\n\ndocker run --rm -it mitmproxy/mitmproxy\n")),(0,n.kt)("h2",s({},{id:"\u900f\u660e\u4ee3\u7406"}),"\u900f\u660e\u4ee3\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.mitmproxy.org/stable/howto-transparent/"}),"HowTo Transparent"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u542f\u7528\u8f6c\u53d1\nsysctl -w net.ipv4.ip_forward=1\n# \u7981\u7528 ICMP \u8f6c\u53d1\nsysctl -w net.ipv4.conf.all.send_redirects=0\n\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080\n\n# IPv6\nsysctl -w net.ipv6.conf.all.forwarding=1\nip6tables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080\nip6tables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u542f\u52a8")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"mitmproxy --mode transparent --showhost\n")))}w.isMDXComponent=!0}}]);