"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47779],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(96600),r=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"netdata"},s="netdata",c={unversionedId:"service/observability/netdata",id:"service/observability/netdata",title:"netdata",description:"- netdata/netdata \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/observability/netdata.md",sourceDirName:"service/observability",slug:"/service/observability/netdata",permalink:"/notes/service/observability/netdata",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/observability/netdata.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"netdata"},sidebar:"docs",previous:{title:"VictoriaMetrics",permalink:"/notes/service/observability/metrics/victoria-metrics"},next:{title:"Observability Awesome",permalink:"/notes/service/observability/observability-awesome"}},p={},d=[{value:"conf",id:"conf",level:2},{value:"registry",id:"registry",level:2},{value:"Preventing more logs from process &#39;netdata&#39; for 1199 seconds",id:"preventing-more-logs-from-process-netdata-for-1199-seconds",level:2},{value:"This agent doesn&#39;t have ACLK. (errno 22, Invalid argument)",id:"this-agent-doesnt-have-aclk-errno-22-invalid-argument",level:2},{value:"system.clock_sync_state",id:"systemclock_sync_state",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"netdata"},"netdata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/netdata/netdata"},"netdata/netdata")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GPL-3.0, C"),(0,o.kt)("li",{parentName:"ul"},"\u7f8e\u89c2\u7b80\u5355\u7684\u5355\u673a\u5b9e\u65f6\u76d1\u63a7\u53ef\u89c6\u5316\u670d\u52a1"))),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7cbe\u5ea6 1s, \u4fdd\u5b58 1h")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# docker \u542f\u52a8\u7f3a\u5c11\u90e8\u5206\u4e3b\u673a\u4fe1\u606f\ndocker run -d \\\n  -p 19999:19999 \\\n  -v netdataconfig:/etc/netdata \\\n  -v netdatalib:/var/lib/netdata \\\n  -v netdatacache:/var/cache/netdata \\\n  -v /etc/passwd:/host/etc/passwd:ro \\\n  -v /etc/group:/host/etc/group:ro \\\n  -v /proc:/host/proc:ro \\\n  -v /sys:/host/sys:ro \\\n  -v /etc/os-release:/host/etc/os-release:ro \\\n  -e DO_NOT_TRACK=1 \\\n  --restart unless-stopped \\\n  --cap-add SYS_PTRACE \\\n  --security-opt apparmor=unconfined \\\n  --name=netdata netdata/netdata\n\n# AlpineLinux \u542f\u52a8\n# < 3.13 -X https://mirrors.aliyun.com/alpine/edge/community/\napk add netdata\ntouch /etc/netdata/.opt-out-from-anonymous-statistics\nservice netdata start\n\n# \u542f\u52a8\u540e\u53ef\u4fdd\u5b58\u5b8c\u6574\u914d\u7f6e\ncurl -o /etc/netdata/netdata.conf http://localhost:19999/netdata.conf\n")),(0,o.kt)("h2",{id:"conf"},"conf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/etc/netdata/netdata.conf"),(0,o.kt)("li",{parentName:"ul"},"/var/lib/netdata/"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.netdata.cloud/docs/agent/daemon/config"},"Daemon configuration"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"[global]\n  # dbengine \u9ed8\u8ba4 - \u901a\u8fc7 page cache size \u548c dbengine disk space \u8fdb\u4e00\u6b65\u63a7\u5236\n  # save \u9000\u51fa\u4fdd\u5b58\uff0c\u542f\u52a8\u52a0\u8f7d\n  # map \u5b9e\u65f6\u66f4\u65b0\u7f13\u5b58\n  # ram \u5185\u5b58\n  # none \u7981\u7528\u76d1\u63a7\n  # alloc \u7c7b\u4f3c ram\uff0c\u4f7f\u7528 calloc\uff0c\u4e0d\u652f\u6301 ksm\n  memory mode = dbengine\n  page cache size = 32\n  dbengine disk space = 256\n  dbengine multihost disk space = 256\n\n[web]\n# https://learn.netdata.cloud/docs/agent/web/server/#other-netdataconf-web-section-options\nrespect do not track policy=yes\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"[global]\n  # save \u6a21\u5f0f\u4e0d\u90a3\u4e48\u635f\u8017\u78c1\u76d8\n  memory mode = save\n  # \u9ed8\u8ba4 1h - \u4fee\u6539\u4e3a 6h\n  history = 21600\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/var/lib/netdata/cloud.d/cloud.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[global]\nenabled = false\n")),(0,o.kt)("h2",{id:"registry"},"registry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.netdata.cloud/docs/agent/registry/#run-your-own-registry"},"https://learn.netdata.cloud/docs/agent/registry/#run-your-own-registry")),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a Netdata \u90fd\u662f registry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/netdata/registry/*.db"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[registry]\nenabled = yes # server \u542f\u7528, \u5176\u4ed6\u7981\u7528\nregistry to announce = http://your.registry:19999\nregistry hostname = Group1 - Master DB\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[registry]\nallow from = *\n# allow by dns = heuristic\n# registry save db every new entries\n# enable cookies SameSite and Secure = no\n")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"preventing-more-logs-from-process-netdata-for-1199-seconds"},"Preventing more logs from process 'netdata' for 1199 seconds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"errors flood protection period = 0\n")),(0,o.kt)("h2",{id:"this-agent-doesnt-have-aclk-errno-22-invalid-argument"},"This agent doesn't have ACLK. (errno 22, Invalid argument)"),(0,o.kt)("h2",{id:"systemclock_sync_state"},"system.clock_sync_state"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u72b6\u6001\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man2/adjtimex.2.html"},"adjtimex")),(0,o.kt)("li",{parentName:"ul"},"added ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/netdata/netdata/pull/11177"},"https://github.com/netdata/netdata/pull/11177")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.netdata.cloud/docs/agent/collectors/timex.plugin"},"https://learn.netdata.cloud/docs/agent/collectors/timex.plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.ntp.org/ntpfaq/NTP-s-algo-kernel.htm"},"http://www.ntp.org/ntpfaq/NTP-s-algo-kernel.htm")),(0,o.kt)("li",{parentName:"ul"},"Busybox ntpd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://lists.busybox.net/pipermail/busybox/2014-September/081667.html"},"What's the easiest way to make Busybox keep correct time?"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# adjtimex --print\nadjtimex\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    mode:         0\n-o  offset:       19895 us\n-f  freq.adjust:  -1718067 (65536 = 1ppm)\n    maxerror:     16000000\n    esterror:     16000000\n    status:       16449 (PLL | UNSYNC)\n-p  timeconstant: 10\n    precision:    1 us\n    tolerance:    32768000\n-t  tick:         10000 us\n    time.tv_sec:  1642947197\n    time.tv_usec: 741874\n    return value: 5 (clock not synchronized)\n")))}m.isMDXComponent=!0}}]);