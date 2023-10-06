"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87737],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43469:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),h=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={tags:["FAQ"]},d="HAProxy FAQ",y={unversionedId:"devops/web/haproxy/haproxy-faq",id:"devops/web/haproxy/haproxy-faq",title:"HAProxy FAQ",description:"Memory Usage",source:"@site/../notes/devops/web/haproxy/haproxy-faq.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/faq",permalink:"/notes/devops/web/haproxy/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/haproxy-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"HAProxy Data Plane",permalink:"/notes/devops/web/haproxy/dataplane"},next:{title:"HAProxy Proxy Protocol",permalink:"/notes/devops/web/haproxy/proxy-protocol"}},k={},v=[{value:"Memory Usage",id:"memory-usage",level:2},{value:"perf debug",id:"perf-debug",level:2},{value:"req_ssl_sni vs ssl_fc_sni",id:"req_ssl_sni-vs-ssl_fc_sni",level:2},{value:"TLS handshake, Client hello \u540e\u65e0\u54cd\u5e94",id:"tls-handshake-client-hello-\u540e\u65e0\u54cd\u5e94",level:2},{value:"HAProxy exit code 143",id:"haproxy-exit-code-143",level:2},{value:"cannot parse Content-Length: too long int",id:"cannot-parse-content-length-too-long-int",level:2},{value:"Cannot raise FD limit to 20637, limit is 4096.",id:"cannot-raise-fd-limit-to-20637-limit-is-4096",level:2},{value:"ERR_HTTP2_SERVER_REFUSED_STREAM",id:"err_http2_server_refused_stream",level:2},{value:"h3",id:"h3",level:2},{value:"Whitelist",id:"whitelist",level:2}],b={toc:v},g="wrapper";function _(e){var t=e,{components:r}=t,a=h(t,["components"]);return(0,n.kt)(g,m(c(c({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"haproxy-faq"}),"HAProxy FAQ"),(0,n.kt)("h2",c({},{id:"memory-usage"}),"Memory Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"16 kB buffers"),(0,n.kt)("li",{parentName:"ul"},"34 kB/session"),(0,n.kt)("li",{parentName:"ul"},"30000 sessions/GB"),(0,n.kt)("li",{parentName:"ul"},"20000 sessions/GB - \u8003\u8651\u7cfb\u7edf\u4e5f\u4f1a\u9700\u8981\u5185\u5b58")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://sysadminxpert.com/what-is-haproxy-and-important-performance-factors/"}),"https://sysadminxpert.com/what-is-haproxy-and-important-performance-factors/"))),(0,n.kt)("h2",c({},{id:"perf-debug"}),"perf debug"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sysctl net.ipv4.ip_local_port_range\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"net.core.wmem_max\nnet.core.rmem_max\nnet.ipv4.tcp_rmem\nnet.ipv4.tcp_wmem\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"nbproc $(nproc)"))),(0,n.kt)("h2",c({},{id:"req_ssl_sni-vs-ssl_fc_sni"}),"req_ssl_sni vs ssl_fc_sni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"req_ssl_sni",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e ssl paththrough \u65f6"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6bd4 hdr(host) \u5feb\u4e00\u70b9\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://marc.info/?l=haproxy&m=144490809910124&w=2"}),"http://marc.info/?l=haproxy&m=144490809910124&w=2")))))),(0,n.kt)("li",{parentName:"ul"},"ssl_fc_sni",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e ssl offload \u65f6")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-haproxy"}),"use_backend s1 if { ssl_fc_sni my.domain.org }\nuse_backend s2 if { hdr(host) -i my2.domain.org }\n")),(0,n.kt)("h2",c({},{id:"tls-handshake-client-hello-\u540e\u65e0\u54cd\u5e94"}),"TLS handshake, Client hello \u540e\u65e0\u54cd\u5e94"),(0,n.kt)("p",null,"\u5728 AlpineLinux 3.14 \u4e0a\uff0cHost \u5185\u8fd0\u884c HAProxy\uff0c\u4f7f\u7528 SNI Passthrough \u51fa\u73b0\u8be5\u95ee\u9898\uff0c\u4fee\u6539\u4e3a\u5728\u5bb9\u5668\u5185\u8fd0\u884c\u540e\u95ee\u9898\u89e3\u51b3\u3002\n\u5728\u5bb9\u5668\u5185\u4f7f\u7528\u5b8c\u5168\u76f8\u540c\u7684 HAProxy \u7248\u672c\u4e5f\u6ca1\u6709\u95ee\u9898\uff0c\u4e00\u6b21\u65ad\u5b9a\u662f Host \u73af\u5883\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u7684\u539f\u56e0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4f9d\u8d56\u5347\u7ea7\u540e\u672a\u91cd\u542f")),(0,n.kt)("h2",c({},{id:"haproxy-exit-code-143"}),"HAProxy exit code 143"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SIGTERM")),(0,n.kt)("h2",c({},{id:"cannot-parse-content-length-too-long-int"}),"cannot parse Content-Length: too long int"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"H2, ssl-passthrough \u65f6\u4f1a\u6709\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/haproxy/haproxy/issues/1561"}),"#1561"))),(0,n.kt)("h2",c({},{id:"cannot-raise-fd-limit-to-20637-limit-is-4096"}),"Cannot raise FD limit to 20637, limit is 4096."),(0,n.kt)("h2",c({},{id:"err_http2_server_refused_stream"}),"ERR_HTTP2_SERVER_REFUSED_STREAM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://confluence.atlassian.com/jirakb/some-jira-pages-fail-to-render-or-some-actions-fail-to-complete-with-the-error-err_http2_server_refused_stream-1085441145.html"}),"https://confluence.atlassian.com/jirakb/some-jira-pages-fail-to-render-or-some-actions-fail-to-complete-with-the-error-err_http2_server_refused_stream-1085441145.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/opnsense/plugins/issues/2013"}),"https://github.com/opnsense/plugins/issues/2013"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"libressl")))),(0,n.kt)("h2",c({},{id:"h3"}),"h3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/haproxytech/kubernetes-ingress/issues/546"}),"https://github.com/haproxytech/kubernetes-ingress/issues/546"))),(0,n.kt)("h2",c({},{id:"whitelist"}),"Whitelist"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"acl white_list src 192.168.1.0/24 192.168.10.0/24\ntcp-request content accept if white_list\ntcp-request content reject\n")))}_.isMDXComponent=!0}}]);