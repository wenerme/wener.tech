(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),o=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=o(n),s=r,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return n?a.a.createElement(O,c(c({ref:t},u),{},{components:n})):a.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),l=(n(0),n(1172)),i={title:"VPN Awesome"},c={unversionedId:"service/network/vpn-awesome",id:"service/network/vpn-awesome",isDocsHomePage:!1,title:"VPN Awesome",description:"- \u7ec4\u7f51\u573a\u666f",source:"@site/notes/service/network/vpn-awesome.md",slug:"/service/network/vpn-awesome",permalink:"/notes/service/network/vpn-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/vpn-awesome.md",version:"current",sidebar:"docs",previous:{title:"Villian",permalink:"/notes/service/network/villian"},next:{title:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/network/vpn-faq"}},b=[{value:"VPN/\u79c1\u6709\u7f51\u7edc",id:"vpn\u79c1\u6709\u7f51\u7edc",children:[]},{value:"\u57fa\u4e8e WireGuard",id:"\u57fa\u4e8e-wireguard",children:[]},{value:"Tunnel/\u901a\u9053",id:"tunnel\u901a\u9053",children:[]}],u={toc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7ec4\u7f51\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u7ec4\u7f51 - \u4f8b\u5982 Kubernetes \u6df7\u5408\u4e91",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"tinc, n2n, ipsec"))),Object(l.b)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u7f51 - \u4f8b\u5982 \u516c\u53f8\u5458\u5de5\u63a5\u5165",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"nebula, tailscale, innernet, ipsec"))),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7ec4\u7f51 - \u4f8b\u5982 \u6e38\u620f\uff0cVoIP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"n2n, tinc")))))),Object(l.b)("h2",{id:"vpn\u79c1\u6709\u7f51\u7edc"},"VPN/\u79c1\u6709\u7f51\u7edc"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"VPN/\u79c1\u6709\u7f51\u7edc \u6307\u6574\u4e2a\u7f51\u7edc\u7eac\u5ea6, \u533a\u5206 L2, L3")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc"},"gsliepen/tinc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/slackhq/nebula"},"slackhq/nebula"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MIT, Go"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e Noise \u534f\u8bae\uff0c WG \u5e95\u5c42\u534f\u8bae"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne"},"zerotier/ZeroTierOne"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BSL, C++"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u57fa\u4e8e\u5b98\u65b9 controller, \u53ef\u4ee5 selfhost \u4f46\u8fd8\u662f\u4f1a\u7528\u5230\u5b98\u65b9\u7684\u8282\u70b9\u8fdb\u884c\u4f20\u64ad"),Object(l.b)("li",{parentName:"ul"},"\u8fde\u63a5\u7a33\u5b9a\u6027\u4e00\u822c, \u4f7f\u7528 \u5b98\u65b9 controller \u514d\u8d39\u6700\u591a 100 \u8282\u70b9"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/dswd/vpncloud"},"dswd/vpncloud")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hwdsl2/setup-ipsec-vpn"},"hwdsl2/setup-ipsec-vpn")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kitz.co.uk/adsl/equip.htm"},"How adsl Works"))),Object(l.b)("h2",{id:"\u57fa\u4e8e-wireguard"},"\u57fa\u4e8e WireGuard"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/wiretrustee/wiretrustee"},"wiretrustee/wiretrustee"),"\nWireguard+Mesh",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BSD-3, Go"),Object(l.b)("li",{parentName:"ul"},"WebRTC, STUN, TURN"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/gravitl/netmaker"},"gravitl/netmaker"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SSPL"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/tailscale/tailscale"},"tailscale/tailscale"),"\nWireGuard+2FA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BSD-3"),Object(l.b)("li",{parentName:"ul"},"\u4f9d\u8d56 \u5b98\u65b9 coordinate \u670d\u52a1"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/tonarino/innernet"},"tonarino/innernet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MIT, Rust")))),Object(l.b)("h2",{id:"tunnel\u901a\u9053"},"Tunnel/\u901a\u9053"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Tunnel/\u901a\u9053 \u6307\u8fde\u63a5\u3001\u7aef\u53e3\u7eac\u5ea6, \u533a\u5206\u534f\u8bae\u534f\u8bae\u7c7b\u578b")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/rtctunnel/rtctunnel"},"rtctunnel/rtctunnel"),"\ntunnels over WebRTC",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MIT, Go"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/fatedier/frp"},"fatedier/frp"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Apache-2.0, Go"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.stunnel.org/"},"stunnel")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ehang-io/nps"},"ehang-io/nps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"GPL-3, Go"),Object(l.b)("li",{parentName:"ul"},"\u8f6c\u5411\u95ed\u6e90\u6536\u8d39, \u5f00\u6e90\u5f00\u53d1\u505c\u6ede")))))}o.isMDXComponent=!0}}]);