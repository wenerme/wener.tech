(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,j=u["".concat(i,".").concat(O)]||u[O]||m[O]||l;return n?r.a.createElement(j,b(b({ref:t},o),{},{components:n})):r.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},567:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1021)),i={title:"HAProxy Version"},b={unversionedId:"devops/web/haproxy-version",id:"devops/web/haproxy-version",isDocsHomePage:!1,title:"HAProxy Version",description:"2.4 - 2021-05-13",source:"@site/notes/devops/web/haproxy-version.md",slug:"/devops/web/haproxy-version",permalink:"/notes/devops/web/haproxy-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/haproxy-version.md",version:"current",sidebar:"docs",previous:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy-conf"},next:{title:"HAProxy",permalink:"/notes/devops/web/haproxy"}},c=[{value:"2.4 - 2021-05-13",id:"24---2021-05-13",children:[]},{value:"2.3 - 2020-11-05",id:"23---2020-11-05",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"24---2021-05-13"},"2.4 - 2021-05-13"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u53d8\u5316\u975e\u5e38\u5927")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u534f\u8bae",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"HTTP2/WebSocket",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc8441"},"rfc8441")," HTTP CONNECT"))),Object(l.b)("li",{parentName:"ul"},"FIX - Financial Information eXchange"),Object(l.b)("li",{parentName:"ul"},"MQTT",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5305\u6709\u6548\u6027\u6821\u9a8c"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u5ba2\u6237\u7aef\u6807\u8bc6\u8def\u7531"))))),Object(l.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 TCP DNS"),Object(l.b)("li",{parentName:"ul"},"\u7194\u65ad\u589e\u5f3a - http_fail_cnt, http_fail_rate"))),Object(l.b)("li",{parentName:"ul"},"SSL/TLS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001 SSL \u8bc1\u4e66\u5b58\u50a8 - \u4e0d\u518d\u9700\u8981\u91cd\u542f"),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u52a8\u6001 SNI \u94fe\u63a5\u590d\u7528 - ",Object(l.b)("inlineCode",{parentName:"li"},"sni req.hdr(host)")))),Object(l.b)("li",{parentName:"ul"},"Observability",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5185\u7f6e OpenTracing"),Object(l.b)("li",{parentName:"ul"},"Prometheus \u589e\u52a0\u6307\u6807"),Object(l.b)("li",{parentName:"ul"},"\u7edf\u8ba1\u589e\u52a0 SSL/TLS \u6a21\u5757\u76f8\u5173 - ",Object(l.b)("inlineCode",{parentName:"li"},"stats show-modules")))),Object(l.b)("li",{parentName:"ul"},"\u7f13\u5b58",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Vary \u5934 - ",Object(l.b)("inlineCode",{parentName:"li"},"process-vary on")),Object(l.b)("li",{parentName:"ul"},"\u6700\u5927\u7f13\u5b58\u6761\u76ee\u63a7\u5236 - ",Object(l.b)("inlineCode",{parentName:"li"},"max-secondary-entries 10")))),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u9884\u5904\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},".if <condition> ... .elif <condition> ... .else ... .endif")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},".diag"),", ",Object(l.b)("inlineCode",{parentName:"li"},".notice"),", ",Object(l.b)("inlineCode",{parentName:"li"},".warning"),", ",Object(l.b)("inlineCode",{parentName:"li"},".alert"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"-dD \u663e\u793a\u8bca\u65ad\u4fe1\u606f"))),Object(l.b)("li",{parentName:"ul"},"\u6761\u4ef6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"defined(<name>)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"feature(<name>)")," - ",Object(l.b)("inlineCode",{parentName:"li"},"haproxy -vv"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"OT - OpenTracing"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"streq(<str1>,<str2>)"),", ",Object(l.b)("inlineCode",{parentName:"li"},"strneq(<str1>,<str2>)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"version_atleast(<ver>)"),", ",Object(l.b)("inlineCode",{parentName:"li"},"version_before(<ver>)")))))),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8def\u5f84 - ",Object(l.b)("inlineCode",{parentName:"li"},"default-path")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u547d\u540d - ",Object(l.b)("inlineCode",{parentName:"li"},"default http-defaults from tcp-defaults")),Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001\u8d85\u65f6 - ",Object(l.b)("inlineCode",{parentName:"li"},"http-request set-timeout")),Object(l.b)("li",{parentName:"ul"},"TCP \u5347\u7ea7 HTTP - fe tcp, be http - ",Object(l.b)("inlineCode",{parentName:"li"},"tcp-request content switch-mode")),Object(l.b)("li",{parentName:"ul"},"\u5339\u914d\u5220\u9664 HTTP \u5934 - ",Object(l.b)("inlineCode",{parentName:"li"},"http-request del-header X-Forwarded -m beg")),Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e\u5b9e\u9a8c\u6a21\u5f0f - \u5f00\u542f\u5b9e\u9a8c\u529f\u80fd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001\u670d\u52a1\u3001\u53d8\u91cf\u4fee\u6539"))))),Object(l.b)("li",{parentName:"ul"},"Lua",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b - ",Object(l.b)("inlineCode",{parentName:"li"},"lua-load-per-thread")))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/announcing-haproxy-2-4"},"Announcing HAProxy 2.4"))))),Object(l.b)("h2",{id:"23---2020-11-05"},"2.3 - 2020-11-05"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u94fe\u63a5\u589e\u5f3a - \u4e3a\u652f\u6301 QUIC \u548c UDP \u505a\u51c6\u5907",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b8c\u5584 Linux keepalive - \u652f\u6301 sysctl \u4fee\u6539\u53c2\u6570"))),Object(l.b)("li",{parentName:"ul"},"\u534f\u8bae - Syslog TCP/UDP"),Object(l.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"balance uri path-only - \u89e3\u51b3 HTTP1 \u548c HTTP2 \u5730\u5740\u4e0d\u4e00\u6837\u95ee\u9898"))),Object(l.b)("li",{parentName:"ul"},"SSL/TLS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u9759\u6001 SNI \u94fe\u63a5\u590d\u7528 - ",Object(l.b)("inlineCode",{parentName:"li"},"sni str(example.local)")))),Object(l.b)("li",{parentName:"ul"},"Observability",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"stats HTTP 2 \u4fe1\u606f - ",Object(l.b)("inlineCode",{parentName:"li"},"stats show-modules")),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e SPOE \u96c6\u6210 OpenTracing"))),Object(l.b)("li",{parentName:"ul"},"Lua 5.4"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/announcing-haproxy-2-3"},"Announcing HAProxy 2.3"))))))}p.isMDXComponent=!0}}]);