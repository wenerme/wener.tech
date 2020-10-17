(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(7),c=(n(0),n(586)),i={id:"ipsec",title:"IPSec"},l={unversionedId:"ops/network/private/ipsec",id:"ops/network/private/ipsec",isDocsHomePage:!1,title:"IPSec",description:"IPSec",source:"@site/notes/ops/network/private/ipsec.md",slug:"/ops/network/private/ipsec",permalink:"/notes/ops/network/private/ipsec",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/private/ipsec.md",version:"current",sidebar:"docs",previous:{title:"Privoxy Action",permalink:"/notes/ops/network/private/privoxy-action"},next:{title:"WireGuard",permalink:"/notes/ops/network/private/wireguard"}},b=[{value:"Tips",id:"tips",children:[]},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"Opportunistic IPsec",id:"opportunistic-ipsec",children:[]}],p={rightToc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"ipsec"},"IPSec"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IPsec"}),"IPsec")," - Internet Protocol Security"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.usenix.org/sites/default/files/conference/protected-files/srecon16europe_slides_garcia.pdf"}),"Full-mesh IPsec network"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"n2n \u8fc1\u79fb IPSec"),Object(c.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 ipsec-tools")))))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# ip xfrm\n# =========\n# http://man7.org/linux/man-pages/man8/ip-xfrm.8.html\n# \u5f53\u524d\u7684 SPDB\nip xfrm policy\n# \u5f53\u524d\u7684 SADB\nip xfrm state\n# \u76d1\u63a7 SADB \u548c SPDB \u53d8\u66f4\nip xfrm monitor\n# \u5220\u9664\u6240\u6709 SADB\nip xfrm state flush\n\n# \u5185\u6838\u7684 xfrm \u7edf\u8ba1\u4fe1\u606f\n# https://www.kernel.org/doc/Documentation/networking/xfrm_proc.txt\ncat /proc/net/xfrm_stat\n")),Object(c.b)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e00\u7ec4\u534f\u8bae - \u5f00\u653e\u6807\u51c6"),Object(c.b)("li",{parentName:"ul"},"\u6838\u5fc3\u80fd\u529b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u52a0\u5bc6"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u6765\u6e90\u9a8c\u8bc1"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027"))),Object(c.b)("li",{parentName:"ul"},"\u7279\u6027",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5185\u6838\u52a0\u5bc6 - \u901f\u5ea6\u5feb"),Object(c.b)("li",{parentName:"ul"},"\u52a0\u5bc6\u5f3a\u5ea6\u8f83\u9ad8"),Object(c.b)("li",{parentName:"ul"},"\u5f00\u653e\u534f\u8bae"))),Object(c.b)("li",{parentName:"ul"},"\u534f\u8bae\u65b9\u5f0f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"AH - Authentication Header - \u6570\u636e\u5b8c\u6574\u6027\u548c\u6765\u6e90\u6821\u9a8c"),Object(c.b)("li",{parentName:"ul"},"ESP - Encapsulating Security Payload - \u6570\u636e\u52a0\u5bc6"))),Object(c.b)("li",{parentName:"ul"},"SP - Security Policy - \u5b89\u5168\u7b56\u7565",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SPD - Security Policy Database"),Object(c.b)("li",{parentName:"ul"},"\u7531\u5185\u6838\u4f7f\u7528\uff0c\u8868\u8ff0\u5982\u4e0b\u8bed\u4e49",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4ece A \u5230 B \u4f7f\u7528 ESP \u7684\u4f20\u8f93\u6a21\u5f0f"),Object(c.b)("li",{parentName:"ul"},"\u4ece C \u5230 D \u7684 443 \u7aef\u53e3\u4e0d\u4f7f\u7528 IPSec"))))),Object(c.b)("li",{parentName:"ul"},"SA - Security Association - \u5b89\u5168\u5173\u7cfb",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5355\u5411\u7684\u70b9\u4e4b\u95f4\u5b89\u5168\u914d\u7f6e"),Object(c.b)("li",{parentName:"ul"},"\u5305\u542b\u70b9\u7684\u57fa\u672c\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SAD"))),Object(c.b)("li",{parentName:"ul"},"IKE - Internet Key Exchange",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u534f\u5546\u7528\u4e8e\u5efa\u7acb\u5b89\u5168\u901a\u9053\u7684\u7b97\u6cd5\u548c\u5bc6\u94a5"),Object(c.b)("li",{parentName:"ul"},"\u534f\u5546\u5b8c\u6210\u540e\u7684\u4fe1\u606f\u8bb0\u5f55\u4e3a SA")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5de5\u4f5c\u6a21\u5f0f")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6a21\u5f0f\\\u65b9\u5f0f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5c01\u88c5\u6d88\u606f\u5934"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5c01\u88c5\u6d88\u606f\u4f53"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u4e3b\u673a\u5bf9\u4e3b\u673a"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u7ad9\u70b9\u5bf9\u7ad9\u70b9"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u901a\u9053\u6a21\u5f0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2705"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2705"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2705"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4f20\u8f93\u6a21\u5f0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u274c"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2705"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2705"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u274c")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4f20\u8f93\u6a21\u5f0f\u914d\u7f6e\u66f4\u7b80\u5355\uff0c\u6027\u80fd\u66f4\u597d")),Object(c.b)("h2",{id:"opportunistic-ipsec"},"Opportunistic IPsec"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"libreswan HowTo ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://libreswan.org/wiki/HOWTO:_Opportunistic_IPsec"}),"Opportunistic IPsec")),Object(c.b)("li",{parentName:"ul"},"\u5927\u91cf\u8282\u70b9\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u6765\u90e8\u7f72 IPsec - \u6dfb\u52a0\u8282\u70b9\u4e0d\u9700\u8981\u4ece\u65b0\u914d\u7f6e\u73b0\u6709\u8282\u70b9"),Object(c.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u4f01\u4e1a\u6216\u4e91\u90e8\u7f72"),Object(c.b)("li",{parentName:"ul"},"\u4e5f\u53eb Mesh Encryption / ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Opportunistic_encryption"}),"Opportunistic encryption")),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://aws.amazon.com/cn/about-aws/whats-new/2019/05/new-quick-start-deploys-opportunistic-ipsec-mesh-on-aws/"}),"Quick Start: \u5728 AWS \u4e91\u4e0a\u90e8\u7f72\u673a\u4f1a\u6027 IPsec \u7f51\u683c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://events17.linuxfoundation.org/sites/events/files/slides/LinuxSecuritySummit-2016-OE-16x9.pdf"}),"OPPORTUNISTIC ENCRYPTION USING IPSEC"))))))}o.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=o(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||O[s]||c;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);