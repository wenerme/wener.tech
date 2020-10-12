(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{510:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(2),o=t(7),i=(t(0),t(557)),s={id:"tinyproxy",title:"tinyproxy"},a={unversionedId:"ops/network/private/tinyproxy",id:"ops/network/private/tinyproxy",isDocsHomePage:!1,title:"tinyproxy",description:"tinyproxy",source:"@site/contents/tricks/ops/network/private/tinyproxy.md",slug:"/ops/network/private/tinyproxy",permalink:"/notes/ops/network/private/tinyproxy",version:"current"},l=[{value:"Tips",id:"tips",children:[]}],p={rightToc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tinyproxy"},"tinyproxy"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://tinyproxy.github.io/"}),"tinyproxy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tinyproxy/tinyproxy/blob/master/etc/tinyproxy.conf.in"}),"tinyproxy.conf")),Object(i.b)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7\u7684 HTTP/HTTPS \u4ee3\u7406")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# macOS \u5b89\u88c5\nbrew info tinyproxy\n\n# AlpineLinux\napk add tinyproxy\n\n# \u6700\u7b80\u914d\u7f6e\ncat <<CONF > tinyproxy.conf\nUser nobody\nGroup nobody\nPort 8888\nMaxClients 100\nStartServers 10\nAllow 127.0.0.1\nBasicAuth admin password\nCONF\ntinyproxy -dc ./tinyproxy.conf\n\ncurl -x admin:password@127.0.0.1:8888 icanhazip.com\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u914d\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ini"}),'User tinyproxy\nGroup tinyproxy\nPort 8888\nTimeout 600\nDefaultErrorFile "/usr/share/tinyproxy/default.html"\nStatFile "/usr/share/tinyproxy/stats.html"\nLogLevel Info\nMaxClients 100\nMinSpareServers 5\nMaxSpareServers 20\nStartServers 10\nMaxRequestsPerChild 0\nAllow 127.0.0.1\nViaProxyName "tinyproxy"\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ini"}),'# \u8fdb\u7a0b UID GID\nUser tinyproxy\nGroup tinyproxy\n\n# \u76d1\u542c\u7aef\u53e3\nPort 8888\n\n# \u76d1\u542c\u5730\u5740\n#Listen 192.168.0.1\n\n# \u7ed1\u5b9a\u7684\u7f51\u5361 - \u51fa\u53bb\u7684\u8fde\u63a5\n#Bind 192.168.0.1\n\n# \u8fdb\u51fa\u94fe\u63a5\u4f7f\u7528\u76f8\u540c\u5730\u5740\n#BindSame yes\n\n#\n# Timeout: The maximum number of seconds of inactivity a connection is\n# allowed to have before it is closed by tinyproxy.\n# \u8d85\u65f6\u65f6\u95f4\nTimeout 600\n\n#\n# ErrorFile: Defines the HTML file to send when a given HTTP error\n# occurs.  You will probably need to customize the location to your\n# particular install.  The usual locations to check are:\n#   /usr/local/share/tinyproxy\n#   /usr/share/tinyproxy\n#   /etc/tinyproxy\n#\n#ErrorFile 404 "/usr/share/tinyproxy/404.html"\n#ErrorFile 400 "/usr/share/tinyproxy/400.html"\n#ErrorFile 503 "/usr/share/tinyproxy/503.html"\n#ErrorFile 403 "/usr/share/tinyproxy/403.html"\n#ErrorFile 408 "/usr/share/tinyproxy/408.html"\n\n#\n# DefaultErrorFile: The HTML file that gets sent if there is no\n# HTML file defined with an ErrorFile keyword for the HTTP error\n# that has occured.\n#\nDefaultErrorFile "/usr/share/tinyproxy/default.html"\n\n#\n# StatHost: This configures the host name or IP address that is treated\n# as the stat host: Whenever a request for this host is received,\n# Tinyproxy will return an internal statistics page instead of\n# forwarding the request to that host.  The default value of StatHost is\n# tinyproxy.stats.\n#\n#StatHost "tinyproxy.stats"\n#\n\n#\n# StatFile: The HTML file that gets sent when a request is made\n# for the stathost.  If this file doesn\'t exist a basic page is\n# hardcoded in tinyproxy.\n#\nStatFile "/usr/share/tinyproxy/stats.html"\n\n#\n# LogFile: Allows you to specify the location where information should\n# be logged to.  If you would prefer to log to syslog, then disable this\n# and enable the Syslog directive.  These directives are mutually\n# exclusive. If neither Syslog nor LogFile are specified, output goes\n# to stdout.\n#\n#LogFile "/var/log/tinyproxy/tinyproxy.log"\n\n#\n# Syslog: Tell tinyproxy to use syslog instead of a logfile.  This\n# option must not be enabled if the Logfile directive is being used.\n# These two directives are mutually exclusive.\n#\n#Syslog On\n\n#\n# LogLevel: Warning\n#\n# Set the logging level. Allowed settings are:\n#   Critical    (least verbose)\n#   Error\n#   Warning\n#   Notice\n#   Connect     (to log connections without Info\'s noise)\n#   Info        (most verbose)\n#\n# The LogLevel logs from the set level and above. For example, if the\n# LogLevel was set to Warning, then all log messages from Warning to\n# Critical would be output, but Notice and below would be suppressed.\n#\nLogLevel Info\n\n#\n# PidFile: Write the PID of the main tinyproxy thread to this file so it\n# can be used for signalling purposes.\n# If not specified, no pidfile will be written.\n#\n#PidFile "/var/run/tinyproxy/tinyproxy.pid"\n\n#\n# XTinyproxy: Tell Tinyproxy to include the X-Tinyproxy header, which\n# contains the client\'s IP address.\n#\n#XTinyproxy Yes\n\n#\n# Upstream:\n#\n# Turns on upstream proxy support.\n#\n# The upstream rules allow you to selectively route upstream connections\n# based on the host/domain of the site being accessed.\n#\n# Syntax: upstream type (user:pass@)ip:port ("domain")\n# Or:     upstream none "domain"\n# The parts in parens are optional.\n# Possible types are http, socks4, socks5, none\n#\n# For example:\n#  # connection to test domain goes through testproxy\n#  upstream http testproxy:8008 ".test.domain.invalid"\n#  upstream http testproxy:8008 ".our_testbed.example.com"\n#  upstream http testproxy:8008 "192.168.128.0/255.255.254.0"\n#\n#  # upstream proxy using basic authentication\n#  upstream http user:pass@testproxy:8008 ".test.domain.invalid"\n#\n#  # no upstream proxy for internal websites and unqualified hosts\n#  upstream none ".internal.example.com"\n#  upstream none "www.example.com"\n#  upstream none "10.0.0.0/8"\n#  upstream none "192.168.0.0/255.255.254.0"\n#  upstream none "."\n#\n#  # connection to these boxes go through their DMZ firewalls\n#  upstream http cust1_firewall:8008 "testbed_for_cust1"\n#  upstream http cust2_firewall:8008 "testbed_for_cust2"\n#\n#  # default upstream is internet firewall\n#  upstream http firewall.internal.example.com:80\n#\n# You may also use SOCKS4/SOCKS5 upstream proxies:\n#  upstream socks4 127.0.0.1:9050\n#  upstream socks5 socksproxy:1080\n#\n# The LAST matching rule wins the route decision.  As you can see, you\n# can use a host, or a domain:\n#  name     matches host exactly\n#  .name    matches any host in domain "name"\n#  .        matches any host with no domain (in \'empty\' domain)\n#  IP/bits  matches network/mask\n#  IP/mask  matches network/mask\n#\n#Upstream http some.remote.proxy:port\n\n#\n# MaxClients: This is the absolute highest number of threads which will\n# be created. In other words, only MaxClients number of clients can be\n# connected at the same time.\n#\nMaxClients 100\n\n#\n# MinSpareServers/MaxSpareServers: These settings set the upper and\n# lower limit for the number of spare servers which should be available.\n#\n# If the number of spare servers falls below MinSpareServers then new\n# server processes will be spawned.  If the number of servers exceeds\n# MaxSpareServers then the extras will be killed off.\n#\nMinSpareServers 5\nMaxSpareServers 20\n\n#\n# StartServers: The number of servers to start initially.\n#\nStartServers 10\n\n#\n# MaxRequestsPerChild: The number of connections a thread will handle\n# before it is killed. In practise this should be set to 0, which\n# disables thread reaping. If you do notice problems with memory\n# leakage, then set this to something like 10000.\n#\nMaxRequestsPerChild 0\n\n# \u5141\u8bb8\u901a\u8fc7\u7684\u767d\u540d\u5355 - \u4e0d\u8bbe\u7f6e\u5141\u8bb8\u6240\u6709\nAllow 127.0.0.1\n\n# \u57fa\u7840\u8ba4\u8bc1\n#BasicAuth user password\n\n# \u6dfb\u52a0\u81ea\u5b9a\u4e49\u5934 - HTTPS \u4e0d\u751f\u6548\n#AddHeader "X-My-Header" "Powered by Tinyproxy"\n\n# Via \u5934\u5185\u5bb9\nViaProxyName "tinyproxy"\n\n# \u7981\u7528 Via \u5934\n#DisableViaHeader Yes\n\n# \u8fc7\u6ee4\u89c4\u5219\n#Filter "/etc/tinyproxy/filter"\n\n# \u8fc7\u6ee4 URL \u800c\u4e0d\u53ea\u662f\u57df\u540d\n#FilterURLs On\n\n# POSIX \u6269\u5c55\u6b63\u5219\n#FilterExtended On\n\n# \u8fc7\u6ee4\u6b63\u5219\u5927\u5c0f\u5199\u654f\u611f\n#FilterCaseSensitive On\n\n# \u8fc7\u6ee4\u9ed8\u8ba4\u62d2\u7edd - \u9ed8\u8ba4\u4e3a\u901a\u8fc7\n#FilterDefaultDeny Yes\n\n# \u533f\u540d\u4ee3\u7406 - \u53ea\u6709\u5728\u8fd9\u91cc\u5236\u5b9a\u4e86\u7684 Header \u624d\u5141\u8bb8\u901a\u8fc7\n#Anonymous "Host"\n#Anonymous "Authorization"\n#Anonymous "Cookie"\n\n# \u5141\u8bb8 HTTP CONNECT \u65b9\u6cd5\u7684\u7aef\u53e3\uff0c\u8bbe\u7f6e\u4e3a 0 \u7981\u7528\uff0c\u4e0d\u8bbe\u7f6e\u5141\u8bb8\u6240\u6709\n#ConnectPort 443\n#ConnectPort 563\n\n# \u53cd\u5411\u4ee3\u7406\u5730\u5740\u91cd\u5199\n# http://localhost:8888/google/ => http://www.google.com/\n#ReversePath "/google/" "http://www.google.com/"\n#ReversePath "/wired/"  "http://www.wired.com/"\n\n# \u53ea\u5141\u8bb8\u53cd\u5411\u4ee3\u7406\n#ReverseOnly Yes\n\n# \u4f7f\u7528 cookie \u8ddf\u8e2a\u53cd\u5411\u4ee3\u7406\n#ReverseMagic Yes\n\n# \u53cd\u54cd\u4ee3\u7406\u57fa\u7840\u5730\u5740 - \u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u91cd\u5199\n#ReverseBaseURL "http://localhost:8888/"\n')))}c.isMDXComponent=!0},557:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),c=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},h=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(s,".").concat(h)]||u[h]||y[h]||i;return t?o.a.createElement(m,a(a({ref:n},p),{},{components:t})):o.a.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);