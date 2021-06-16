(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||c;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},967:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),c=(n(0),n(1083)),i={title:"Squid"},l={unversionedId:"service/network/squid",id:"service/network/squid",isDocsHomePage:!1,title:"Squid",description:"Tips",source:"@site/notes/service/network/squid.md",slug:"/service/network/squid",permalink:"/notes/service/network/squid",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/squid.md",version:"current",sidebar:"docs",previous:{title:"SNMP MIB",permalink:"/notes/service/network/snmp-mib"},next:{title:"sshuttle",permalink:"/notes/service/network/sshuttle"}},s=[{value:"Tips",id:"tips",children:[]},{value:"HTTPS",id:"https",children:[{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",children:[]}]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[]},{value:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e",id:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e",children:[]},{value:"\u63a8\u8350\u914d\u7f6e",id:"\u63a8\u8350\u914d\u7f6e",children:[]}]},{value:"refresh_pattern",id:"refresh_pattern",children:[{value:"\u955c\u50cf\u7ad9\u70b9",id:"\u955c\u50cf\u7ad9\u70b9",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"Your cache is running out of filedescriptors",id:"your-cache-is-running-out-of-filedescriptors",children:[]},{value:"SSL_CTX_use_certificate:passed a null parameter",id:"ssl_ctx_use_certificatepassed-a-null-parameter",children:[]}]}],p={toc:s};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Web \u7f13\u5b58\u670d\u52a1\u5668 - \u7528\u4e8e\u7f13\u5b58\u7f51\u9875\u5185\u5bb9\u4ee5\u4fbf\u4e8e\u5feb\u901f\u8fd4\u56de",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u52a8\u6001\u5185\u5bb9\u4f1a\u76f8\u5bf9\u8f83\u6162"),Object(c.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u53cd\u5411\u4ee3\u7406 - \u51fa\u7f51\u7f13\u5b58 - \u670d\u52a1\u7aef",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4f8b\u5982\u7f13\u5b58\u9759\u6001\u7ad9\u70b9\uff0c\u7c7b\u4f3c\u4e8e Vanish \u89d2\u8272"))),Object(c.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8f6c\u53d1\u4ee3\u7406 - \u5165\u7f51\u7f13\u5b58 - \u5ba2\u6237\u7aef",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4f8b\u5982\u7f13\u5b58 Windows \u66f4\u65b0"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u7ec8\u7aef\u591a\u65f6\u53ef\u52a0\u901f\u9759\u6001\u5185\u5bb9\u8bbf\u95ee"))))),Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 3128"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.monitis.com/blog/how-to-monitor-squid-proxy-server/"},"How to monitor Squid proxy server")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Setting_up_Explicit_Squid_Proxy"},"Setting up Explicit Squid Proxy")))),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u652f\u6301 HTTPS \u7684\u7f13\u5b58 ",Object(c.b)("a",{parentName:"li",href:"https://wiki.squid-cache.org/Features/HTTPS"},"Features/HTTPS"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTPS \u4f1a\u4f7f\u7528 CONNECT \u7684\u65b9\u5f0f\u8fdb\u884c TUNNEL \u4ee3\u7406"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301 HTTPS \u9700\u8981\u5ba2\u6237\u7aef\u5b89\u88c5 CA \u8bc1\u4e66"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u5b89\u88c5\u4e86 CA \u8bc1\u4e66\u4e5f\u80fd\u5b9e\u73b0\u900f\u660e\u4ee3\u7406"))),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u5e0c\u671b\u7528\u4e8e \u5165\u7f51\u7f13\u5b58\uff0c\u4e0d\u914d\u7f6e CA \u5219\u6ca1\u610f\u4e49")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cat <<CONF > squid.conf\nhttp_port 3128\nacl localnet src 127.0.0.0/24\n\nhttp_access allow localhost manager\nhttp_access deny manager\n\ncache_dir ufs .cache 500 16 256\nminimum_object_size 0 bytes\n\naccess_log      access.log\ncache_log       cache.log\ncache_store_log store.log\nCONF\n# \u6821\u9a8c\u914d\u7f6e\nsquid -k parse -f squid.conf\n# \u51c6\u5907\u7f13\u5b58\u76ee\u5f55\nsquid -z -f squid.conf\n# \u542f\u52a8\nsquid --foreground -f squid.conf\n\n# \u4ece\u65b0\u914d\u7f6e\nsquid -k reconfigure\n\nsquidclient -h 127.0.0.1 mgr:info\nsquidclient -h 127.0.0.1 mgr:utilization\n\n# \u6d4b\u8bd5\u7f13\u5b58\ncurl -x 127.0.0.1:3128 https://www.baidu.com/favicon.ico -v > /dev/null\n\n# \u4f7f\u7528\u60c5\u51b5\nsquidclient -h 127.0.0.1 -p 3128 cache_object://www.baidu.com/favicon.ico mgr:utilization \uff5c grep server.all\n# \u547d\u4e2d\u60c5\u51b5\nsquidclient -h 127.0.0.1 -p 3128 cache_object://www.baidu.com/favicon.ico mgr:info\n")),Object(c.b)("h2",{id:"https"},"HTTPS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8bc1\u4e66\u53ef\u5b58\u653e\u4e8e - /etc/squid/certs/"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://elatov.github.io/2019/01/using-squid-to-proxy-ssl-sites/"},"Using Squid to Proxy SSL Sites")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wiki.squid-cache.org/ConfigExamples/Intercept/SslBumpExplicit"},"Intercept HTTPS CONNECT messages with SSL-Bump")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wiki.squid-cache.org/Features/SslPeekAndSplice"},"SslBump Peek and Splice"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u521d\u59cb\u5316")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# macOS \u9700\u8981\u4f7f\u7528\u989d\u5916\u5b89\u88c5\u7684 openssl\nbrew --prefix openssl\n\n# \u751f\u6210\u8bc1\u4e66\nopenssl req -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -extensions v3_ca -keyout squid-ca-key.pem -out squid-ca-cert.pem\n# \u5408\u5e76 chain\ncat squid-ca-cert.pem squid-ca-key.pem >> squid-ca-cert-key.pem\n\n# macOS \u6ce8\u610f\u5b89\u88c5\u8def\u5f84\n# /usr/local/opt/squid\nbrew --prefix squid\n\n# \u521d\u59cb\u5316 ssl_db\n/usr/local/opt/squid/libexec/security_file_certgen -c -s ssl_db -M 16 MB\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u914d\u7f6e")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# \u76d1\u542c\u914d\u7f6e\nhttp_port 3128 ssl-bump \\\n  cert=squid-ca-cert-key.pem \\\n  generate-host-certificates=on dynamic_cert_mem_cache_size=16MB\nhttps_port 3129 intercept ssl-bump \\\n  cert=squid-ca-cert-key.pem \\\n  generate-host-certificates=on dynamic_cert_mem_cache_size=16MB\nsslcrtd_program /usr/local/opt/squid/libexec/security_file_certgen -s ssl_db -M 16MB\n\n# \u5168\u91cf - \u53ef\u914d\u7f6e\u4e3a\u90e8\u5206\nacl step1 at_step SslBump1\nssl_bump peek step1\nssl_bump bump all\nssl_bump splice all\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6821\u9a8c")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u5931\u8d25\ncurl -x 127.0.0.1:3128 https://mirrors.ustc.edu.cn\n# \u6210\u529f\ncurl --cacert squid-ca-cert.pem -x 127.0.0.1:3128 https://mirrors.ustc.edu.cn\n")),Object(c.b)("h3",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# \u6b63\u5219\u5339\u914d SNI\nacl api_google_ssl ssl::server_name_regex .*\\.googleapis\\.com\nacl api_google_ssl ssl::server_name_regex .*\\.google\\.com\nacl api_google_ssl ssl::server_name_regex .*\\.cloud\\.google\\.com\n")),Object(c.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://www.squid-cache.org/Doc/config/"},"http://www.squid-cache.org/Doc/config/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://gist.github.com/kipyegonmark/ef54ea4fb7a11f4d0470"},"https://gist.github.com/kipyegonmark/ef54ea4fb7a11f4d0470")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.netgate.com/pfsense/en/latest/cache-proxy/squid-package-tuning.html"},"https://docs.netgate.com/pfsense/en/latest/cache-proxy/squid-package-tuning.html")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://filterlists.com/"},"https://filterlists.com/"))))),Object(c.b)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"# \u76d1\u542c\u7aef\u53e3\nhttp_port 7777\n\n# \u5b9a\u4e49\u672c\u5730\u7f51\u7edc\nacl localnet src 127.0.0.0/24\nacl localnet src 192.168.0.0/16\nacl localnet src 10.0.0.0/8\nhttp_access allow localnet\n\n# \u7f13\u5b58\u76ee\u5f55 - 500MB - \u7b2c\u4e00\u7ea7 16 - \u7b2c\u4e8c\u7ea7 256\ncache_dir ufs .caache 500 16 256\n")),Object(c.b)("h3",{id:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e"},"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"# \u4e0a\u7ea7\u7f13\u5b58\ncache_peer 127.0.0.1 parent 7777 7 no-query\n\n# FTP \u4e0d\u8f6c\u53d1 - \u76f4\u63a5\u8bbf\u95ee\nacl ftp proto FTP\nalways_direct allow ftp\n\n# \u5168\u90e8\u8d70 cache_peer\nnever_direct allow all\n")),Object(c.b)("h3",{id:"\u63a8\u8350\u914d\u7f6e"},"\u63a8\u8350\u914d\u7f6e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"# \u6700\u5c0f\u7f13\u5b58\u5bf9\u8c61\nmaximum_object_size 1 MB\n# \u4e0d\u53d1\u9001\u7248\u672c\u4fe1\u606f\nhttpd_suppress_version_string on\n\n# \u5b9a\u4e49\u672c\u5730\u7f51\u7edc\nacl localnet src 10.0.0.0/8\nacl localnet src 172.16.0.0/12\nacl localnet src 192.168.0.0/16\nacl localnet src fc00::/7\nacl localnet src fe80::/10\n\n# acl localnet src all\n\n# \u5b9a\u4e49\u5b89\u5168\u7aef\u53e3\nacl SSL_ports port 443\nacl Safe_ports port 80      # http\nacl Safe_ports port 21      # ftp\nacl Safe_ports port 443     # https\nacl Safe_ports port 70      # gopher\nacl Safe_ports port 210     # waiss\nacl Safe_ports port 1025-65535  # unregistered ports\nacl Safe_ports port 280     # http-mgmt\nacl Safe_ports port 488     # gss-http\nacl Safe_ports port 591     # filemaker\nacl Safe_ports port 777     # multiling http\n\n# \u8bc6\u522b CONNECT \u65b9\u6cd5\nacl CONNECT method CONNECT\n# \u8bc6\u522b\u67e5\u8be2\u53c2\u6570\nacl QUERY urlpath_regex cgi-bin \\? asp aspx jsp\n# \u5e26\u53c2\u6570\u4e0d\u7f13\u5b58\ncache deny QUERY\n\n# \u53ea\u5141\u8bb8\u5b89\u5168\u7aef\u53e3\nhttp_access deny !Safe_ports\n\n# \u53ea\u5141\u8bb8 CONNECT SSL \u7aef\u53e3\nhttp_access deny CONNECT !SSL_ports\n\n# \u53ea\u5141\u8bb8\u672c\u5730\u8bbf\u95ee cachemgr\nhttp_access allow localhost manager\nhttp_access deny manager\n\n# \u4e0d\u5141\u8bb8\u8bbf\u95ee\u672c\u5730\nhttp_access deny to_localhost\n\n# \u5141\u8bb8\u672c\u5730\u8bbf\u95ee\nhttp_access allow localnet\nhttp_access allow localhost\nhttp_access deny all\n")),Object(c.b)("h2",{id:"refresh_pattern"},"refresh_pattern"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://www.squid-cache.org/Doc/config/refresh_pattern/"},"refresh_pattern"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"refresh_pattern [-i] regex min percent max [options]"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"-i")," \u5927\u5c0f\u5199\u4e0d\u654f\u611f"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"min")," \u9ed8\u8ba4\u6700\u5c0f\u5931\u6548\u65f6\u95f4 - \u5206\u949f"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"percent")," \u5931\u6548\u65f6\u95f4\u6bd4\u4f8b - \u4f8b\u5982\u867d\u7136\u6307\u5b9a 1h \u4f46\u8fbe\u5230 50% \u7684\u65f6\u5019\u5c31\u5931\u6548"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"max")," \u6700\u5927\u5931\u6548\u65f6\u95f4")))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# windows \u66f4\u65b0\nrefresh_pattern -i windowsupdate.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i microsoft.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i windows.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i microsoft.com.akadns.net/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i deploy.akamaitechnologies.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrange_offset_limit none\n\n# mac \u66f4\u65b0\nrefresh_pattern ([^.]+.|)(download|adcdownload).(apple.|)com/.*\\.(pkg|dmg) 4320 100% 43200 reload-into-ims\n\n# avg \u66f4\u65b0\nrefresh_pattern ([^.]+.|)avg.com/.*\\.(bin) 4320 100% 43200 reload-into-ims\nrefresh_pattern ([^.]+.|)spywareblaster.net/.*\\.(dtb) 4320 100% 64800 reload-into-ims\nrefresh_pattern ([^.]+.|)symantecliveupdate.com/.*\\.(zip|exe) 43200 100% 43200 reload-into-ims\nrefresh_pattern ([^.]+.|)avast.com/.*\\.(vpu|vpaa) 4320 100% 43200 reload-into-ims\n")),Object(c.b)("h3",{id:"\u955c\u50cf\u7ad9\u70b9"},"\u955c\u50cf\u7ad9\u70b9"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"# \u7f13\u5b58\u7b56\u7565\ncache_replacement_policy heap LFUDA\n\n# \u4f8b\u5982 http://mirrors.ustc.edu.cn/alpine/v3.10/main\nrefresh_pattern mirrors.ustc.edu.cn/.*\\.(apk|iso|deb|rpm) 4320 100% 43200 refresh-ims override-expire\n\n# \u6216\u8005\u5355\u72ec\u914d\u7f6e\nrefresh_pattern -i .rpm$ 129600 100% 129600 refresh-ims override-expire\nrefresh_pattern -i .iso$ 129600 100% 129600 refresh-ims override-expire\nrefresh_pattern -i .deb$ 129600 100% 129600 refresh-ims override-expire\n")),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"your-cache-is-running-out-of-filedescriptors"},"Your cache is running out of filedescriptors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"max_filedescriptors 65535")," \u53ef\u6307\u5b9a\u6700\u5927 fd")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u73af\u5883\u4e0b\u7684\u9650\u5236\nulimit -n\n# \u4fee\u6539\u540e\u91cd\u542f\u670d\u52a1\u7aef - \u6216\u5728 linux \u4e0b\u5168\u5c40\u4fee\u6539(\u4e0d\u63a8\u8350)\nulimit -n 65535\n\n# macOS \u4e0b\u67e5\u770b\nlaunchctl limit maxfiles\n# \u4fee\u6539\u5f53\u524d\u4f1a\u8bdd\nsudo launchctl limit maxfiles 65536 200000\nulimit -n 65535\n\n# \u542f\u52a8\u4f1a\u8f93\u51fa fd \u6570\u91cf\ngrep 'file descriptors available' cache.log\n\n# \u670d\u52a1\u7aef\u5f53\u524d\u60c5\u51b5\nsquidclient mgr:info | grep 'File descriptor' -A 7\n")),Object(c.b)("h3",{id:"ssl_ctx_use_certificatepassed-a-null-parameter"},"SSL_CTX_use_certificate:passed a null parameter"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.spinics.net/lists/squid/msg90936.html"},"https://www.spinics.net/lists/squid/msg90936.html"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"2020/05/17 20:08:00 kid1| TLS error: failed to allocate handle: error:140AB043:SSL routines:SSL_CTX_use_certificate:passed a null parameter\n2020/05/17 20:08:00 kid1| ERROR: client https start failed to allocate handle: error:140AB043:SSL routines:SSL_CTX_use_certificate:passed a null parameter\n2020/05/17 20:08:00 kid1| ERROR: could not create TLS server context for local=127.0.0.1:3130 remote=127.0.0.1:55424 FD 16 flags=1\n")))}o.isMDXComponent=!0}}]);