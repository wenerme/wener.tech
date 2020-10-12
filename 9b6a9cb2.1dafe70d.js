(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{362:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(557)),c={id:"ip",title:"IP"},l={unversionedId:"ops/network/internet/ip",id:"ops/network/internet/ip",isDocsHomePage:!1,title:"IP",description:"TCP/IP",source:"@site/contents/tricks/ops/network/internet/ip.md",slug:"/ops/network/internet/ip",permalink:"/notes/ops/network/internet/ip",version:"current"},b=[{value:"Tips",id:"tips",children:[]},{value:"Google",id:"google",children:[]},{value:"Tiwtter",id:"tiwtter",children:[]},{value:"ipcalc",id:"ipcalc",children:[]},{value:"FAQ",id:"faq",children:[{value:"IP-address ending with zero?",id:"ip-address-ending-with-zero",children:[]},{value:"Tools",id:"tools",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tcpip"},"TCP/IP"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IP_address"}),"https://en.wikipedia.org/wiki/IP_address")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Reserved_IP_addresses"}),"https://en.wikipedia.org/wiki/Reserved_IP_addresses")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://ip.taobao.com/"}),"http://ip.taobao.com/"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u83b7\u53d6 IP\ncurl checkip.amazonaws.com\ncurl ipinfo.io/ip\ncurl ifconfig.co\ncurl ipecho.net/plain\ncurl icanhazip.com\ncurl ipv4.icanhazip.com\n\n# \u4f7f\u7528 DNS \u7684\u65b9\u5f0f\u83b7\u53d6\ndig +short myip.opendns.com @resolver1.opendns.com\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Start"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"End"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Count"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Class"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"CIDR"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10.0.0.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10.255.255.255"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16777216"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10.0.0.0/8")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"172.16.0.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"172.31.255.255"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1048576"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"B"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"172.16.0.0/12")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.0.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.255.255"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"65536"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"B"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.0.0/16")))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.cloudflare.com/ips/"}),"https://www.cloudflare.com/ips/")),Object(i.b)("h2",{id:"google"},"Google"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://md5calc.com/google/ip"}),"https://md5calc.com/google/ip"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"copy($$('table tr td:first-child').map(v=>v.innerText).join(','))")),Object(i.b)("li",{parentName:"ul"},"35.190.247.0/24,35.191.0.0/16,64.233.160.0/19,66.102.0.0/20,66.249.80.0/20,72.14.192.0/18,74.125.0.0/16,108.177.8.0/21,108.177.96.0/19,130.211.0.0/22,172.217.0.0/19,172.217.32.0/20,172.217.128.0/19,172.217.160.0/20,172.217.192.0/19,173.194.0.0/16,209.85.128.0/17,216.239.32.0/19,216.58.192.0/19"))),Object(i.b)("li",{parentName:"ul"},"Googlebot",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"64.68.90.1 \u2013 64.68.90.255"),Object(i.b)("li",{parentName:"ul"},"64.233.173.193 \u2013 64.233.173.255"),Object(i.b)("li",{parentName:"ul"},"66.249.64.1 \u2013 66.249.79.255"),Object(i.b)("li",{parentName:"ul"},"216.239.33.96 \u2013 216.239.59.128")))),Object(i.b)("h2",{id:"tiwtter"},"Tiwtter"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IP Range ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://ipinfo.io/AS13414"}),"https://ipinfo.io/AS13414")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"copy($$('#ipv4-data table tr td:first-child').map(v=>v.innerText).join(','))")),Object(i.b)("li",{parentName:"ul"},"103.252.112.0/23,103.252.114.0/23,104.244.40.0/24,104.244.41.0/24,104.244.42.0/24,104.244.44.0/24,104.244.45.0/24,104.244.46.0/24,104.244.47.0/24,185.45.5.0/24,185.45.6.0/23,192.133.76.0/22,192.133.76.0/23,192.44.69.0/24,199.16.156.0/22,199.16.156.0/23,199.59.148.0/22,199.96.56.0/23,199.96.56.0/24,199.96.57.0/24,199.96.58.0/23,199.96.60.0/23,199.96.60.0/24,199.96.61.0/24,199.96.62.0/23,202.160.128.0/24,202.160.129.0/24,202.160.130.0/24,202.160.131.0/24,209.237.192.0/24,209.237.193.0/24,209.237.194.0/24,209.237.195.0/24,209.237.196.0/24,209.237.197.0/24,209.237.198.0/24,209.237.199.0/24,209.237.200.0/24,209.237.201.0/24,209.237.204.0/24,209.237.205.0/24,209.237.206.0/24,209.237.207.0/24,209.237.208.0/24,209.237.209.0/24,209.237.210.0/24,209.237.211.0/24,209.237.212.0/24,209.237.213.0/24,209.237.214.0/24,209.237.215.0/24,209.237.216.0/24,209.237.217.0/24,209.237.218.0/24,209.237.219.0/24,209.237.220.0/24,209.237.221.0/24,209.237.222.0/24,209.237.223.0/24,64.63.0.0/18,69.195.160.0/24,69.195.162.0/24,69.195.163.0/24,69.195.164.0/24,69.195.165.0/24,69.195.166.0/24,69.195.168.0/24,69.195.169.0/24,69.195.171.0/24,69.195.172.0/24,69.195.174.0/24,69.195.175.0/24,69.195.176.0/24,69.195.177.0/24,69.195.178.0/24,69.195.179.0/24,69.195.180.0/24,69.195.181.0/24,69.195.182.0/24,69.195.184.0/24,69.195.185.0/24,69.195.186.0/24,69.195.187.0/24,69.195.188.0/24,69.195.189.0/24,69.195.190.0/24,69.195.191.0/24")),Object(i.b)("h2",{id:"ipcalc"},"ipcalc"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Usage: ipcalc [options] <ADDRESS>[[/]<NETMASK>] [NETMASK]\n\nipcalc takes an IP address and netmask and calculates the resulting broadcast,\nnetwork, Cisco wildcard mask, and host range. By giving a second netmask, you\ncan design sub- and supernetworks. It is also intended to be a teaching tool\nand presents the results as easy-to-understand binary values.\n\n -n --nocolor  Don't display ANSI color codes.\n -b --nobinary Suppress the bitwise output.\n -c --class    Just print bit-count-mask of given address.\n -h --html     Display results as HTML (not finished in this version).\n -v --version  Print Version.\n -s --split n1 n2 n3\n               Split into networks of size n1, n2, n3.\n -r --range    Deaggregate address range.\n    --help     Longer help text.\n\nExamples:\n\nipcalc 192.168.0.1/24\nipcalc 192.168.0.1/255.255.128.0\nipcalc 192.168.0.1 255.255.128.0 255.255.192.0\nipcalc 192.168.0.1 0.0.63.255\n\n\nipcalc <ADDRESS1> - <ADDRESS2>  deaggregate address range\n\nipcalc <ADDRESS>/<NETMASK> --s a b c\n                                split network to subnets\n                where a b c fits in.\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"ip-address-ending-with-zero"},"IP-address ending with zero?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/14915188"}),"IP-address ending with zero?")),Object(i.b)("li",{parentName:"ul"},"\u73b0\u5728\u6765\u8bf4\u662f\u6ca1\u95ee\u9898\u7684, 20\u5e74\u524d\u6709\u9690\u6027\u7684\u5b50\u7f51\u7ea6\u5b9a, .0 \u4ee3\u8868\u7f51\u7edc, .255 \u4ee3\u8868\u5e7f\u64ad, \u8bb8\u591a\u786c\u4ef6\u8bbe\u5907\u548c\u8f6f\u4ef6\u89c4\u5219\u6709\u57fa\u4e8e\u8fd9\u6837\u7684\u5047\u8bbe, \u73b0\u5728\u90fd\u662f\u4ee5 CIDR \u4e3a\u6807\u51c6, \u56e0\u6b64 .0 \u548c .255 \u90fd\u662f\u6709\u6548\u7684\u5730\u5740")),Object(i.b)("h3",{id:"tools"},"Tools"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ipjisuanqi.com/"}),"https://ipjisuanqi.com/"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://dnsdaquan.com/"}),"https://dnsdaquan.com/"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ipchaxun.com/"}),"https://ipchaxun.com/"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://icplishi.com/jiashule.com/"}),"https://icplishi.com/jiashule.com/")))}p.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,O=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(O,l(l({ref:t},o),{},{components:n})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);