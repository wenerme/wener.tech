"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8020],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,N=m["".concat(o,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(N,l(l({ref:t},c),{},{components:n})):r.createElement(N,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return m},metadata:function(){return N},toc:function(){return d}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={title:"IPSec"},k="IPSec",N={unversionedId:"service/network/ipsec",id:"service/network/ipsec",title:"IPSec",description:"- \u4e00\u5957\u534f\u8bae\u800c\u4e0d\u662f\u5355\u4e2a\u534f\u8bae",source:"@site/../notes/service/network/ipsec.md",sourceDirName:"service/network",slug:"/service/network/ipsec",permalink:"/notes/service/network/ipsec",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/ipsec.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"IPSec"},sidebar:"docs",previous:{title:"inlets \u901a\u9053",permalink:"/notes/service/network/inlets"},next:{title:"MitmProxy",permalink:"/notes/service/network/mitmproxy"}},f={},d=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"Opportunistic IPsec",id:"opportunistic-ipsec",level:2}],h={toc:d};function w(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},h),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"ipsec"}),"IPSec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u5957\u534f\u8bae\u800c\u4e0d\u662f\u5355\u4e2a\u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6765\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6570\u636e\u5b8c\u6574\u6027"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IPsec"}),"IPsec")," - Internet Protocol Security"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.usenix.org/sites/default/files/conference/protected-files/srecon16europe_slides_garcia.pdf"}),"Full-mesh IPsec network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/ntop/n2n"}),"n2n")," \u8fc1\u79fb IPSec"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 ipsec-tools/racoon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://docs.ruckuswireless.com/fastiron/08.0.80/fastiron-08080-securityguide/GUID-0F5E2C64-B9B8-4900-A446-F44FBEA493C1.html"}),"IPSec over NAT")),(0,r.kt)("li",{parentName:"ul"},"RHEL 8 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/configuring-a-vpn-with-ipsec_securing-networks"}),"CONFIGURING A VPN WITH IPSEC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://backreference.org/2014/11/12/on-the-fly-ipsec-vpn-with-iproute2/"}),"\u201cOn the fly\u201d IPsec VPN with iproute2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.unixwiz.net/techtips/iguide-ipsec.html"}),"http://www.unixwiz.net/techtips/iguide-ipsec.html"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# ip xfrm\n# =========\n# http://man7.org/linux/man-pages/man8/ip-xfrm.8.html\n# \u5f53\u524d\u7684 SPDB\nip xfrm policy\n# \u5f53\u524d\u7684 SADB\nip xfrm state\n# \u76d1\u63a7 SADB \u548c SPDB \u53d8\u66f4\nip xfrm monitor\n# \u5220\u9664\u6240\u6709 SADB\nip xfrm state flush\n\n# \u5185\u6838\u7684 xfrm \u7edf\u8ba1\u4fe1\u606f\n# https://www.kernel.org/doc/Documentation/networking/xfrm_proc.txt\ncat /proc/net/xfrm_stat\n")),(0,r.kt)("h2",s({},{id:"\u6982\u5ff5"}),"\u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7ec4\u534f\u8bae - \u5f00\u653e\u6807\u51c6"),(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u80fd\u529b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u52a0\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u6765\u6e90\u9a8c\u8bc1"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5185\u6838\u52a0\u5bc6 - \u901f\u5ea6\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u5f3a\u5ea6\u8f83\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u653e\u534f\u8bae"))),(0,r.kt)("li",{parentName:"ul"},"\u534f\u8bae\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AH - Authentication Header - \u6570\u636e\u5b8c\u6574\u6027\u548c\u6765\u6e90\u6821\u9a8c"),(0,r.kt)("li",{parentName:"ul"},"ESP - Encapsulating Security Payload - \u6570\u636e\u52a0\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"AH+ESP"))),(0,r.kt)("li",{parentName:"ul"},"SP - Security Policy - \u5b89\u5168\u7b56\u7565",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SPD - Security Policy Database"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u5185\u6838\u4f7f\u7528\uff0c\u8868\u8ff0\u5982\u4e0b\u8bed\u4e49",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ece A \u5230 B \u4f7f\u7528 ESP \u7684\u4f20\u8f93\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u4ece C \u5230 D \u7684 443 \u7aef\u53e3\u4e0d\u4f7f\u7528 IPSec"))))),(0,r.kt)("li",{parentName:"ul"},"SPD - Security Policy Database - \u5b89\u5168\u7b56\u7565\u6570\u636e\u5e93",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 SA \u8def\u7531 - \u5305 \u5339\u914d \u5f97\u51fa\u76ee\u6807 SA"))),(0,r.kt)("li",{parentName:"ul"},"SA - Security Association - \u5b89\u5168\u5173\u7cfb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u5411\u7684\u70b9\u4e4b\u95f4\u5b89\u5168\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u70b9\u7684\u57fa\u672c\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SAD"),(0,r.kt)("li",{parentName:"ul"},"wikipedia ",(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Security_association"}),"SA")))),(0,r.kt)("li",{parentName:"ul"},"IKE - Internet Key Exchange",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u534f\u5546\u7528\u4e8e\u5efa\u7acb\u5b89\u5168\u901a\u9053\u7684\u7b97\u6cd5\u548c\u5bc6\u94a5"),(0,r.kt)("li",{parentName:"ul"},"\u534f\u5546\u5b8c\u6210\u540e\u7684\u4fe1\u606f\u8bb0\u5f55\u4e3a SA"))),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u9053\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u6a21\u5f0f - transport")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u6a21\u5f0f")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u6a21\u5f0f\\\u65b9\u5f0f"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u5c01\u88c5\u6d88\u606f\u5934"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u5c01\u88c5\u6d88\u606f\u4f53"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u4e3b\u673a\u5bf9\u4e3b\u673a"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7ad9\u70b9\u5bf9\u7ad9\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u901a\u9053\u6a21\u5f0f"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u4f20\u8f93\u6a21\u5f0f"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u274c"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u274c")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f20\u8f93\u6a21\u5f0f\u914d\u7f6e\u66f4\u7b80\u5355\uff0c\u6027\u80fd\u66f4\u597d")),(0,r.kt)("h2",s({},{id:"opportunistic-ipsec"}),"Opportunistic IPsec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libreswan HowTo ",(0,r.kt)("a",s({parentName:"li"},{href:"https://libreswan.org/wiki/HOWTO:_Opportunistic_IPsec"}),"Opportunistic IPsec")),(0,r.kt)("li",{parentName:"ul"},"\u5927\u91cf\u8282\u70b9\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u6765\u90e8\u7f72 IPsec - \u6dfb\u52a0\u8282\u70b9\u4e0d\u9700\u8981\u4ece\u65b0\u914d\u7f6e\u73b0\u6709\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u4f01\u4e1a\u6216\u4e91\u90e8\u7f72"),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53eb Mesh Encryption / ",(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Opportunistic_encryption"}),"Opportunistic encryption")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://aws.amazon.com/cn/about-aws/whats-new/2019/05/new-quick-start-deploys-opportunistic-ipsec-mesh-on-aws/"}),"Quick Start: \u5728 AWS \u4e91\u4e0a\u90e8\u7f72\u673a\u4f1a\u6027 IPsec \u7f51\u683c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://events17.linuxfoundation.org/sites/events/files/slides/LinuxSecuritySummit-2016-OE-16x9.pdf"}),"OPPORTUNISTIC ENCRYPTION USING IPSEC"))))))}w.isMDXComponent=!0}}]);