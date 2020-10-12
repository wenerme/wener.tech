(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{521:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(2),o=r(7),a=(r(0),r(557)),i={id:"privoxy",title:"Privoxy"},c={unversionedId:"ops/network/private/privoxy",id:"ops/network/private/privoxy",isDocsHomePage:!1,title:"Privoxy",description:"Privoxy",source:"@site/contents/notes/ops/network/private/privoxy.md",slug:"/ops/network/private/privoxy",permalink:"/notes/ops/network/private/privoxy",version:"current",sidebar:"docs",previous:{title:"Tinc",permalink:"/notes/ops/network/private/tinc"},next:{title:"Privoxy Action",permalink:"/notes/ops/network/private/privoxy-action"}},p=[{value:"Tips",id:"tips",children:[{value:"privoxy",id:"privoxy-1",children:[]}]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],l={rightToc:p};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"privoxy"},"Privoxy"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63d0\u4f9b HTTP \u4ee3\u7406"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u5c06\u4e8c\u7ea7\u4ee3\u7406",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f8b\u5982\u5c06 SOCKS \u4ee3\u7406\u8f6c\u4e3a HTTP \u4ee3\u7406"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.privoxy.org/"}),"privoxy")),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7\u6d4f\u89c8\u5668\u914d\u7f6e - \u9700\u8981\u5b89\u88c5\u4e86\u6a21\u677f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"http://config.privoxy.org"}),"http://config.privoxy.org")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"http://p.p"}),"http://p.p")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.privoxy.org/user-manual/index.html"}),"https://www.privoxy.org/user-manual/index.html")),Object(a.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 auth\uff0c\u53ef\u4ee5\u8f6c\u53d1 auth",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"enable-proxy-authentication-forwarding"))))))),Object(a.b)("h3",{id:"privoxy-1"},"privoxy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63d0\u4f9b HTTP \u4ee3\u7406"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u5c06\u4e8c\u7ea7\u4ee3\u7406",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f8b\u5982\u5c06 SOCKS \u4ee3\u7406\u8f6c\u4e3a HTTP \u4ee3\u7406"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.privoxy.org/"}),"privoxy"))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# macOS\n# macOS \u4e0b\u7684\u914d\u7f6e\u76ee\u5f55\u4e3a /usr/local/etc/privoxy\nbrew install privoxy\n# AlpineLinux\napk add privoxy\n\n# \u76d1\u542c 7777 \u8f6c\u53d1\u5230 8888 SOCKS \u7aef\u53e3\ncat <<CONF > privoxy.conf\nlisten-address 0.0.0.0:7777\nforward-socks5t / 127.0.0.1:8888 .\nCONF\n\n# \u914d\u7f6e\u6587\u4ef6\u6821\u9a8c\nprivoxy --config-test privoxy.conf\n# \u5728\u524d\u53f0\u8fd0\u884c\nprivoxy --no-daemon privoxy.conf\n\n# Docker \u542f\u52a8\ndocker run -d --restart always \\\n  -p 127.0.0.1:7777:7777 \\\n  --name privoxy wener/privoxy\n")),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.privoxy.org/faq/configuration.html"}),"https://www.privoxy.org/faq/configuration.html"))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-conf"}),"# \u914d\u7f6e\u76ee\u5f55\nconfdir /etc/privoxy\n# \u6a21\u677f\u76ee\u5f55 - \u9ed8\u8ba4\u4e3a confdir/template\n# templdir /etc/privoxy/templates\n# \u4e34\u65f6\u76ee\u5f55\n# temporary-directory /tmp\n# \u65e5\u5fd7\u76ee\u5f55\nlogdir /var/log/privoxy\n\n# \u52a8\u4f5c\u6587\u4ef6 - confdir \u7684\u76f8\u5bf9\u4f4d\u7f6e\nactionsfile default.action\n# \u8fc7\u6ee4\u6587\u4ef6 - confdir \u7684\u76f8\u5bf9\u4f4d\u7f6e\nfilterfile default.filter\n# \u65e5\u5fd7\u6587\u4ef6 - logdir \u76f8\u5bf9\u4f4d\u7f6e\nlogdir logfile\n# \u4fe1\u4efb\u6587\u4ef6 - confdir \u7684\u76f8\u5bf9\u4f4d\u7f6e\n# trustfile trustfile\n\n# \u65e5\u5fd7\u7b49\u7ea7 - bit \u4f4d \u6216 \u5199\u591a\u884c\ndebug 0\n# \u662f\u5426\u5355\u7ebf\u7a0b\u8fd0\u884c\nsingle-threaded 0\n# CGI \u9875\u9762\u663e\u793a\u7684\u4e3b\u673a\u540d\n# hostname example.com\n\n# \u5e2e\u52a9\u6587\u6863\u76ee\u5f55\nuser-manual  /usr/share/doc/privoxy/user-manual\n# \u5f53\u8bbf\u95ee\u4e0d\u4fe1\u4efb\u7f51\u7ad9\u65f6\u663e\u793a\u7684\u5730\u5740\n# trust-info-url http://wener.me\n# \u5728\u9875\u9762\u4e0a\u663e\u793a\u7684\u7ba1\u7406\u5458\u5730\u5740\n# admin-address admin@example.com\n# \u5728\u9875\u9762\u4e0a\u663e\u793a\u7684\u4ee3\u7406\u4fe1\u606f\n# proxy-info-url https://proxy.example.com\n\n\n# \u76d1\u542c\u914d\u7f6e - \u53ef\u5199\u591a\u6b21\nlisten-address 127.0.0.1:8118\n\n# \u4ee3\u7406\u529f\u80fd\u5f00\u5173\u9ed8\u8ba4\u503c - \u5e7f\u544a\u62e6\u622a\u3001\u5185\u5bb9\u8fc7\u6ee4\ntoggle 1\n# \u662f\u5426\u5141\u8bb8\u8fdc\u7a0b\u4fee\u6539 - http://config.privoxy.org/toggle\nenable-remote-toggle 0\n# \u662f\u5426\u8bc6\u522b HTTP \u5934\u6765\u63a7\u5236\u5f00\u5173 - X-Filter: No\nenable-remote-http-toggle 0\n\n# \u662f\u5426\u5141\u8bb8\u7f16\u8f91 action\nenable-edit-actions 0\n\n# \u662f\u5426\u5f3a\u5236\u963b\u585e - \u9ed8\u8ba4\u5728\u963b\u585e\u9875\u9762\u5305\u542b\u7ee7\u7eed\u8bbf\u95ee\u64cd\u4f5c\nenforce-blocks 0\n\n# ACLs\n# ==========\n# \u6765\u6e90-\u76ee\u6807 \n# src_addr[:port][/src_masklen] [dst_addr[:port][/dst_masklen]]\n# \u5141\u8bb8\u8bbf\u95ee \npermit-access 192.168.2.0/24\npermit-access www.privoxy.org/24 www.example.com/32\n\n# \u7981\u6b62\u8bbf\u95ee\ndeny-access 192.168.3.0/24\ndeny-access pornhub.com\n\n# \u5185\u5bb9\u8fc7\u6ee4\u7684\u7f13\u51b2\nbuffer-limit 4096\n# \u662f\u5426\u8f6c\u53d1\u6388\u6743\u4fe1\u606f\nenable-proxy-authentication-forwarding 0\n\n# \u53ef\u4fe1\u4efb\u7684\u7ba1\u7406\u9875 referer \u5730\u5740\n# trusted-cgi-referer wener.me\n\n# \u8f6c\u53d1\n# ==========\n# HTTP \u8f6c\u53d1\n# forward target_pattern http_parent[:port]\n# `.\u2018 \u8868\u793a\u76f4\u63a5\u8bf7\u6c42\n# \u6240\u6709\u7684\u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\nforward   /      external-proxy.example.org:8080\n# 443 \u4e0d\u8f6c\u53d1\nforward   :443   .\n# \u57df\u540d\u63a7\u5236\u8f6c\u53d1\nforward   .google.com   .\n\n# \u672c\u5730\u76f4\u63a5\u8bf7\u6c42\nforward 192.168.*.*/  .\nforward 10.*.*.*/     .\nforward 127.*.*.*/    .\nforward localhost/    .\n\n# \u9ed8\u8ba4\u4e0d\u8f6c\u53d1\uff0c\u53ea\u8f6c\u53d1\u56fa\u5b9a\u683c\u5f0f\u6587\u4ef6\nforward   /                          .\nforward   /.*\\.(exe|com|dll|zip)$    antivir.example.com:8010\n\n# SOCKS \u8f6c\u53d1\n# forward-socks4, forward-socks4a, forward-socks5 and forward-socks5t\n# \u503c\u683c\u5f0f target_pattern socks_proxy[:port] http_parent[:port]\n# \u5c06\u6240\u6709\u8bf7\u6c42\u8f6c\u53d1 127.0.0.1:8888\nforward-socks5t / 127.0.0.1:8888 .\n\n# \u8f6c\u53d1\u94fe\u63a5\u91cd\u8bd5\nforwarded-connect-retries 0\n\n# \u6742\u9879\n# ==========\n# \u63a5\u53d7\u88ab\u62e6\u622a\u7684\u8bf7\u6c42\naccept-intercepted-requests 0\n# \u62e6\u622a\u662f\u5426\u5bf9 CGI \u751f\u6548\nallow-cgi-request-crunching 0\n# GCI \u662f\u5426\u5206\u79bb\u5927\u8868\u5355\nsplit-large-forms 0\n# \u94fe\u63a5\u4fdd\u6d3b\u65f6\u95f4\nkeep-alive-timeout 0\n# \u662f\u5426\u652f\u6301\u7ba1\u9053\u8bf7\u6c42 - \u4e00\u6b21\u8bf7\u6c42\u591a\u4e2a\u8fd4\u56de\ntolerate-pipelining 0\n# \u670d\u52a1\u7aef\u94fe\u63a5\u8d85\u65f6\u65f6\u95f4\ndefault-server-timeout 0\n# \u4fdd\u6d3b\u7684\u94fe\u63a5\u662f\u5426\u5171\u4eab\nconnection-sharing 0\n# Socket \u672a\u63a5\u6536\u5230\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\nsocket-timeout 300\n# \u6700\u5927\u94fe\u63a5\u6570\nmax-client-connections 128\n# \u8bf7\u6c42\u94fe\u63a5\u961f\u5217\u6570\nlisten-backlog 128\n# \u63a5\u6536\u8fc7\u6ee4\nenable-accept-filter 0\n\nhandle-as-empty-doc-returns-ok 0\n# \u542f\u7528\u538b\u7f29\nenable-compression 0\n# \u538b\u7f29\u7ea7\u522b\ncompression-level 1\n# HTTP \u5934\u987a\u5e8f\n# client-header-order Contet-Type,X-Token\n# \u5ba2\u6237\u7aef\u76f8\u5173\u6807\u7b7e - http://config.privoxy.org/client-tags\n# client-specific-tag admin-block \u63a7\u5236\u7ba1\u7406\u5458\u7684\u8bbf\u95ee\n# \u6807\u7b7e\u751f\u547d\u5468\u671f\nclient-tag-lifetime 60\n# \u662f\u5426\u4fe1\u4efb X-Forwarded-For\ntrust-x-forwarded-for 0\n# \u63a5\u6536\u7f13\u5b58\u5927\u5c0f\nreceive-buffer-size 5000\n")))}s.isMDXComponent=!0},557:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=t,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:n},l),{},{components:r})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);