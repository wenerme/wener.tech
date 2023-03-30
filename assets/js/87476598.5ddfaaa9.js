"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3834],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7109:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var r=t(49613),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))i.call(n,t)&&u(e,t,n[t]);return e};const m={tags:["Configuration"]},d="Clash \u914d\u7f6e",h={unversionedId:"service/network/proxy/clash/clash-conf",id:"service/network/proxy/clash/clash-conf",title:"Clash \u914d\u7f6e",description:"- config.yaml",source:"@site/../notes/service/network/proxy/clash/clash-conf.md",sourceDirName:"service/network/proxy/clash",slug:"/service/network/proxy/clash/conf",permalink:"/notes/service/network/proxy/clash/conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/clash/clash-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680154821,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"clash",permalink:"/notes/service/network/proxy/clash/"},next:{title:"Clash FAQ",permalink:"/notes/service/network/proxy/clash/faq"}},k={},f=[{value:"Rule",id:"rule",level:2}],v={toc:f};function y(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&i.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=c(c({},v),u),l(n,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"clash-\u914d\u7f6e"}),"Clash \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"config.yaml"),(0,r.kt)("li",{parentName:"ul"},"mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rule - \u57fa\u4e8e\u89c4\u5219\u8def\u7531"),(0,r.kt)("li",{parentName:"ul"},"global - \u5168\u5c40\u8def\u7531\u5230\u5355\u4e2a\u51fa\u53e3"),(0,r.kt)("li",{parentName:"ul"},"direct - \u4e0d\u8def\u7531\u76f4\u63a5\u8bbf\u95ee"))),(0,r.kt)("li",{parentName:"ul"},"proxies - \u4e0a\u6e38\u4ee3\u7406",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ss"),(0,r.kt)("li",{parentName:"ul"},"ssr - ShadowsocksR"),(0,r.kt)("li",{parentName:"ul"},"vmess"),(0,r.kt)("li",{parentName:"ul"},"socks5"),(0,r.kt)("li",{parentName:"ul"},"http"),(0,r.kt)("li",{parentName:"ul"},"snell"),(0,r.kt)("li",{parentName:"ul"},"trojan"))))),(0,r.kt)("li",{parentName:"ul"},"proxy-groups - \u4ee3\u7406\u5206\u7ec4 - LB \u7b56\u7565",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"select - \u624b\u52a8\u9009\u62e9"),(0,r.kt)("li",{parentName:"ul"},"url-test - \u4f7f\u7528 url \u6d4b\u901f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"url ",(0,r.kt)("a",c({parentName:"li"},{href:"http://www.gstatic.com/generate_204"}),"http://www.gstatic.com/generate_204")),(0,r.kt)("li",{parentName:"ul"},"interval 300"))),(0,r.kt)("li",{parentName:"ul"},"relay - \u4e32\u8054\u6240\u6709\u4ee3\u7406"),(0,r.kt)("li",{parentName:"ul"},"fallback - \u57fa\u4e8e URL \u68c0\u6d4b\u8fdb\u884c\u56de\u6eda"),(0,r.kt)("li",{parentName:"ul"},"load-balance - \u57fa\u4e8e eTLD+1 \u8fdb\u884c\u8d1f\u8f7d"))))),(0,r.kt)("li",{parentName:"ul"},"proxy-providers - \u6307\u5411 yaml \u914d\u7f6e - \u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"proxies: []"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type http,file"))),(0,r.kt)("li",{parentName:"ul"},"rules",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DOMAIN"),(0,r.kt)("li",{parentName:"ul"},"DOMAIN-SUFFIX"),(0,r.kt)("li",{parentName:"ul"},"DOMAIN-KEYWORD"),(0,r.kt)("li",{parentName:"ul"},"GEOIP"),(0,r.kt)("li",{parentName:"ul"},"IP-CIDR"),(0,r.kt)("li",{parentName:"ul"},"IP-CIDR6"),(0,r.kt)("li",{parentName:"ul"},"SRC-IP-CIDR"),(0,r.kt)("li",{parentName:"ul"},"SRC-PORT"),(0,r.kt)("li",{parentName:"ul"},"DST-PORT"),(0,r.kt)("li",{parentName:"ul"},"PROCESS-NAME"),(0,r.kt)("li",{parentName:"ul"},"MATCH - \u9ed8\u8ba4\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 no-resolve \u53ef\u907f\u514d resolve \u57df\u540d \u53bb\u5339\u914d cidr"),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u7b56\u7565 DIRECT, REJECT")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'clash -t -f config.yaml                        # test\ncurl -X PUT 127.0.0.1:9090/configs --json "{}" # reload\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# HTTP(S) \u4ee3\u7406\u7aef\u53e3\nport: 7890\n# SOCKS5 \u4ee3\u7406\u7aef\u53e3\nsocks-port: 7891\n\n# Linux, macOS \u8f6c\u53d1\u900f\u660e\u4ee3\u7406\u7aef\u53e3 (Redirect TCP and TProxy UDP)\n# redir-port: 7892\n\n# Linux TProxy \u900f\u660e\u4ee3\u7406\u7aef\u53e3 (TProxy TCP and TProxy UDP)\n# tproxy-port: 7893\n\n# HTTP(S), SOCKS4(A)/SOCKS5 \u591a\u534f\u8bae\u7aef\u53e3\n# mixed-port: 7890\n\n# SOCKS5/HTTP(S) \u4ee3\u7406\u8ba4\u8bc1\n# authentication:\n#  - \"user1:pass1\"\n#  - \"user2:pass2\"\n\n# \u5141\u8bb8 Lan \u8fde\u63a5\u5230\u672c\u5730\u7aef\u53e3\nallow-lan: false\n# allow-lan=true \u65f6\u7684\u76d1\u542c\u7ed1\u5b9a\u5730\u5740\nbind-address: '*'\n\n# \u8def\u7531\u6a21\u5f0f\n# rule - \u57fa\u4e8e\u89c4\u5219\u7684\u5305\u8f6c\u53d1\n# global - \u5168\u5c40\u5355\u51fa\u53e3\n# direct - \u76f4\u63a5\u8bbf\u95ee\nmode: rule\n\n# \u65e5\u5fd7\u7ea7\u522b\n# info / warning / error / debug / silent\nlog-level: info\n\nipv6: false\n\n# \u5916\u90e8 REST API \u63a5\u53e3 \u76d1\u542c\u5730\u5740\nexternal-controller: 127.0.0.1:9090\n# UI \u76ee\u5f55\n# \u8bbf\u95ee\u5730\u5740 http://{{external-controller}}/ui\nexternal-ui: folder\n# REST \u7684 \u5bc6\u94a5\n# Authorization: Bearer ${secret}\n# secret: \"\"\n\n# Outbound interface name\ninterface-name: en0\n\n# Linux fwmark\nrouting-mark: 6666\n\n# Static hosts for DNS server and connection establishment (like /etc/hosts)\n#\n# Wildcard hostnames are supported (e.g. *.clash.dev, *.foo.*.example.com)\n# Non-wildcard domain names have a higher priority than wildcard domain names\n# e.g. foo.example.com > *.example.com > .example.com\n# P.S. +.foo.com equals to .foo.com and foo.com\nhosts:\n  # '*.clash.dev': 127.0.0.1\n  # '.dev': 127.0.0.1\n  # 'alpha.clash.dev': '::1'\n\nprofile:\n  # Store the `select` results in $HOME/.config/clash/.cache\n  # set false If you don't want this behavior\n  # when two different configurations have groups with the same name, the selected values are shared\n  store-selected: false\n\n  # persistence fakeip\n  store-fake-ip: true\n\ndns:\n  enable: false\n  listen: 0.0.0.0:53\n  # ipv6: false # \u662f\u5426\u54cd\u5e94 AAAA\n\n  # \u9ed8\u8ba4\u4e0a\u6e38 NS\n  default-nameserver:\n    - 114.114.114.114\n    - 8.8.8.8\n  enhanced-mode: redir-host # or fake-ip\n  fake-ip-range: 198.18.0.1/16 # Fake IP addresses pool CIDR\n  # use-hosts: true # lookup hosts and return IP record\n\n  # Hostnames in this list will not be resolved with fake IPs\n  # i.e. questions to these domain names will always be answered with their\n  # real IP addresses\n  # fake-ip-filter:\n  #   - '*.lan'\n  #   - localhost.ptlogin2.qq.com\n\n  # \u652f\u6301 UDP, TCP, DoT, DoH\n  # \u652f\u6301\u6307\u5b9a\u7aef\u53e3\n  # \u8fd4\u56de\u7b2c\u4e00\u4e2a\u54cd\u5e94\n  # \u4e0d\u4f1a\u8d70\u4ee3\u7406\n  nameserver:\n    - 114.114.114.114 # default value\n    - 8.8.8.8 # default value\n    - tls://dns.rubyfish.cn:853 # DNS over TLS\n    - https://1.1.1.1/dns-query # DNS over HTTPS\n    - dhcp://en0 # dns from dhcp\n\n  # \u5728 nameservers \u4e4b\u5916\u5e76\u53d1\u8bf7\u6c42 DNS\n  # \u7528\u4e8e GEOIP \u975e CN \u65f6\n  # fallback:\n  #   - tcp://1.1.1.1\n\n  # If IP addresses resolved with servers in `nameservers` are in the specified\n  # subnets below, they are considered invalid and results from `fallback`\n  # servers are used instead.\n  #\n  # IP address resolved with servers in `nameserver` is used when\n  # `fallback-filter.geoip` is true and when GEOIP of the IP address is `CN`.\n  #\n  # If `fallback-filter.geoip` is false, results from `nameserver` nameservers\n  # are always used if not match `fallback-filter.ipcidr`.\n  #\n  # This is a countermeasure against DNS pollution attacks.\n  # fallback-filter:\n  #   geoip: true\n  #   geoip-code: CN\n  #   ipcidr:\n  #     - 240.0.0.0/4\n  #   domain:\n  #     - '+.google.com'\n  #     - '+.facebook.com'\n  #     - '+.youtube.com'\n\n  # \u9488\u5bf9\u57df\u540d\u914d\u7f6e NS\n  # nameserver-policy:\n  #   'www.baidu.com': '114.114.114.114'\n  #   '+.internal.crop.com': '10.0.0.1'\n\n# \u4ee3\u7406\u8bbe\u7f6e\nproxies:\n  # Shadowsocks\n  # The supported ciphers (encryption methods):\n  #   aes-128-gcm aes-192-gcm aes-256-gcm\n  #   aes-128-cfb aes-192-cfb aes-256-cfb\n  #   aes-128-ctr aes-192-ctr aes-256-ctr\n  #   rc4-md5 chacha20-ietf xchacha20\n  #   chacha20-ietf-poly1305 xchacha20-ietf-poly1305\n  - name: 'ss1'\n    type: ss\n    server: server\n    port: 443\n    cipher: chacha20-ietf-poly1305\n    password: 'password'\n    # udp: true\n    # \u63d2\u4ef6\u914d\u7f6e\n    plugin: obfs # obfs, v2ray-plugin\n    plugin-opts:\n      # obfs - tls,http\n      # v2ray-plugin - websocket - \u6682\u4e0d\u652f\u6301 QUIC\n      mode: tls\n      # host: bing.com\n\n      # v2ray-plugin \u914d\u7f6e\n      # tls: true # wss\n      # skip-cert-verify: true\n      # host: bing.com\n      # path: \"/\"\n      # mux: true\n      # headers:\n      #   custom: value\n\n  # vmess\n  # cipher - auto/aes-128-gcm/chacha20-poly1305/none\n  - name: 'vmess'\n    type: vmess\n    server: server\n    port: 443\n    uuid: uuid\n    alterId: 32\n    cipher: auto\n    # udp: true\n    # tls: true\n    # skip-cert-verify: true\n    # servername: example.com # priority over wss host\n    # network: ws\n    # ws-opts:\n    #   path: /path\n    #   headers:\n    #     Host: v2ray.com\n    #   max-early-data: 2048\n    #   early-data-header-name: Sec-WebSocket-Protocol\n\n  - name: 'vmess-h2'\n    type: vmess\n    server: server\n    port: 443\n    uuid: uuid\n    alterId: 32\n    cipher: auto\n    network: h2\n    tls: true\n    h2-opts:\n      host:\n        - http.example.com\n        - http-alt.example.com\n      path: /\n\n  - name: 'vmess-http'\n    type: vmess\n    server: server\n    port: 443\n    uuid: uuid\n    alterId: 32\n    cipher: auto\n    # udp: true\n    # network: http\n    # http-opts:\n    #   # method: \"GET\"\n    #   # path:\n    #   #   - '/'\n    #   #   - '/video'\n    #   # headers:\n    #   #   Connection:\n    #   #     - keep-alive\n\n  - name: vmess-grpc\n    server: server\n    port: 443\n    type: vmess\n    uuid: uuid\n    alterId: 32\n    cipher: auto\n    network: grpc\n    tls: true\n    servername: example.com\n    # skip-cert-verify: true\n    grpc-opts:\n      grpc-service-name: 'example'\n\n  # socks5\n  - name: 'socks'\n    type: socks5\n    server: server\n    port: 443\n    # username: username\n    # password: password\n    # tls: true\n    # skip-cert-verify: true\n    # udp: true\n\n  # http\n  - name: 'http'\n    type: http\n    server: server\n    port: 443\n    # username: username\n    # password: password\n    # tls: true # https\n    # skip-cert-verify: true\n    # sni: custom.com\n\n  # Snell\n  # Beware that there's currently no UDP support yet\n  - name: 'snell'\n    type: snell\n    server: server\n    port: 44046\n    psk: yourpsk\n    # version: 2\n    # obfs-opts:\n    # mode: http # or tls\n    # host: bing.com\n\n  # Trojan\n  - name: 'trojan'\n    type: trojan\n    server: server\n    port: 443\n    password: yourpsk\n    # udp: true\n    # sni: example.com # aka server name\n    # alpn:\n    #   - h2\n    #   - http/1.1\n    # skip-cert-verify: true\n\n  - name: trojan-grpc\n    server: server\n    port: 443\n    type: trojan\n    password: 'example'\n    network: grpc\n    sni: example.com\n    # skip-cert-verify: true\n    udp: true\n    grpc-opts:\n      grpc-service-name: 'example'\n\n  - name: trojan-ws\n    server: server\n    port: 443\n    type: trojan\n    password: 'example'\n    network: ws\n    sni: example.com\n    # skip-cert-verify: true\n    udp: true\n    # ws-opts:\n    # path: /path\n    # headers:\n    #   Host: example.com\n\n  # ShadowsocksR\n  # The supported ciphers (encryption methods): all stream ciphers in ss\n  # The supported obfses:\n  #   plain http_simple http_post\n  #   random_head tls1.2_ticket_auth tls1.2_ticket_fastauth\n  # The supported supported protocols:\n  #   origin auth_sha1_v4 auth_aes128_md5\n  #   auth_aes128_sha1 auth_chain_a auth_chain_b\n  - name: 'ssr'\n    type: ssr\n    server: server\n    port: 443\n    cipher: chacha20-ietf\n    password: 'password'\n    obfs: tls1.2_ticket_auth\n    protocol: auth_sha1_v4\n    # obfs-param: domain.tld\n    # protocol-param: \"#\"\n    # udp: true\n\n# \u4ee3\u7406\u5206\u7ec4 - LB \u7b56\u7565\nproxy-groups:\n  # \u4e2d\u7ee7 - \u4f1a\u7ecf\u8fc7\u7ed9\u5b9a\u7684\u6240\u6709\u4ee3\u7406\n  # \u4e0d\u652f\u6301 UDP\n  # clash <-> http <-> vmess <-> ss1 <-> ss2 <-> Internet\n  - name: 'relay'\n    type: relay\n    proxies:\n      - http\n      - vmess\n      - ss1\n      - ss2\n\n  # \u57fa\u4e8e\u8bf7\u6c42 URL \u7684\u901f\u5ea6\u6765\u9009\u62e9\n  - name: 'auto'\n    type: url-test\n    proxies:\n      - ss1\n      - ss2\n    # tolerance: 150\n    # lazy: true\n    url: 'http://www.gstatic.com/generate_204'\n    interval: 300\n\n  # \u57fa\u4e8e\u4f18\u5148\u7ea7\u9009\u62e9\u4e00\u4e2a\u53ef\u7528\u7684\u4ee3\u7406\n  # \u7c7b\u4f3c\u4e00\u4e2a url-test \u81ea\u52a8\u5206\u7ec4\n  - name: 'fallback-auto'\n    type: fallback\n    proxies:\n      - ss1\n      - ss2\n    url: 'http://www.gstatic.com/generate_204'\n    interval: 300\n\n  # \u57fa\u4e8e eTLD+1 \u8fdb\u884c\u8d1f\u8f7d\n  - name: 'load-balance'\n    type: load-balance\n    proxies:\n      - ss1\n      - ss2\n    url: 'http://www.gstatic.com/generate_204'\n    interval: 300\n    # strategy: consistent-hashing # round-robin\n\n  # \u9009\u62e9 proxy \u6216 proxy group\n  # \u53ef\u901a\u8fc7 RESTful API \u6765\u5207\u6362\n  - name: Proxy\n    type: select\n    # disable-udp: true\n    proxies:\n      - auto\n      - DIRECT # \u53ef\u4ee5\u6307\u5b9a \u76f4\u63a5\n    # DIRECT \u914d\u7f6e\n    interface-name: en1\n    routing-mark: 6667\n    #\n    use:\n      - provider1\n\nproxy-providers:\n  provider1:\n    type: http\n    url: 'url'\n    interval: 3600\n    path: ./provider1.yaml\n    health-check:\n      enable: true\n      interval: 600\n      # lazy: true\n      url: http://www.gstatic.com/generate_204\n  test:\n    type: file\n    path: /test.yaml\n    health-check:\n      enable: true\n      interval: 36000\n      url: http://www.gstatic.com/generate_204\n\nrules:\n  - IP-CIDR,127.0.0.0/8,DIRECT\n  - IP-CIDR,127.0.0.0/8,DIRECT\n  - DOMAIN-SUFFIX,google.com,auto\n  - DOMAIN,google.com,auto\n  - DOMAIN-KEYWORD,google,auto\n  - DOMAIN-SUFFIX,ad.com,REJECT\n  - SRC-IP-CIDR,192.168.1.201/32,DIRECT\n  # optional param \"no-resolve\" for IP rules (GEOIP, IP-CIDR, IP-CIDR6)\n  - GEOIP,CN,DIRECT\n  - DST-PORT,80,DIRECT\n  - SRC-PORT,7777,DIRECT\n  - RULE-SET,apple,REJECT # Premium only\n  - MATCH,auto\n")),(0,r.kt)("h2",c({},{id:"rule"}),"Rule"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# \u5df2\u77e5 IP \u6bb5\n- IP-CIDR,127.0.0.0/8,REJECT\n- IP-CIDR,0.0.0.0/8,REJECT\n- GEOIP,LAN,DIRECT\n\n# \u56fd\u5185\u5e38\u89c1\n- DOMAIN-SUFFIX,taobao.com,DIRECT\n- DOMAIN-SUFFIX,qq.com,DIRECT\n- DOMAIN-SUFFIX,jdapi.com,DIRECT\n\n# \u56fd\u5916\u5e38\u89c1\n- DOMAIN-SUFFIX,google.com,auto\n\n- GEOIP,CN,DIRECT\n\n#- RULE-SET,China,DIRECT\n\n- MATCH,auto\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"DOMAIN-SUFFIX"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u57df\u540d\u540e\u7f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"DOMAIN"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u57df\u540d\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"DOMAIN-KEYWORD"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u57df\u540d\u5173\u952e\u5b57\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IP-CIDR"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IP \u6bb5\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SRC-IP-CIDR"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u6e90 IP \u6bb5\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"GEOIP"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"GEOIP \u6570\u636e\u5e93\uff08\u56fd\u5bb6\u4ee3\u7801\uff09\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"DST-PORT"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u76ee\u6807\u7aef\u53e3\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SRC-PORT"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u6e90\u7aef\u53e3\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"PROCESS-NAME"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u6e90\u8fdb\u7a0b\u540d\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"RULE-SET"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Rule Provider \u89c4\u5219\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"MATCH"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5168\u5339\u914d")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RULE-SET",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/Loyalsoldier/clash-rules"}),"https://github.com/Loyalsoldier/clash-rules")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/DivineEngine/Profiles/tree/master"}),"https://github.com/DivineEngine/Profiles/tree/master"))))}y.isMDXComponent=!0}}]);