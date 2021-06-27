(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1096:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(1096)),i={title:"strongSwan"},c={unversionedId:"service/network/strongswan",id:"service/network/strongswan",isDocsHomePage:!1,title:"strongSwan",description:"* vici",source:"@site/notes/service/network/strongswan.md",slug:"/service/network/strongswan",permalink:"/notes/service/network/strongswan",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/strongswan.md",version:"current",sidebar:"docs",previous:{title:"strongSwan FAQ",permalink:"/notes/service/network/strongswan-faq"},next:{title:"stun",permalink:"/notes/service/network/stun"}},s=[{value:"Route-based VPNs",id:"route-based-vpns",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/strongswan/strongswan/blob/master/src/libcharon/plugins/vici/README.md"},"vici"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u63a7\u5236\u534f\u8bae")))),Object(o.b)("h2",{id:"route-based-vpns"},"Route-based VPNs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/RouteBasedVPN"},"RouteBasedVPN")),Object(o.b)("li",{parentName:"ul"},"VTI Linux 3.6+"),Object(o.b)("li",{parentName:"ul"},"Linux 4.19+ XFRM \u6bd4 VTI \u66f4\u597d - strongSwan 5.8.0+"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://vincent.bernat.ch/en/blog/2017-route-based-vpn"},"Route-based IPsec VPN on Linux with strongSwan"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"VTI")))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# iproute2\n# ip link add <name> type xfrm dev <underlying interface> if_id <interface ID>\n# strongSwan \u5de5\u5177\n# /usr/local/libexec/ipsec/xfrmi --name <name> --id <interface ID> --dev <underlying interface>\n# <interface ID> 32\u4f4d\u6574\u6570\uff0c\u4f7f\u7528 0x \u5341\u516d\u8fdb\u5236\u8868\u793a\n# <underlying interface> \u76ee\u524d\u65e0\u610f\u4e49 - \u9664\u975e\u9700\u8981\u914d\u7f6e\u6d41\u51fa\u7b56\u7565\n\nip link add ipsec0 type xfrm dev eth0 if_id 42\n\n# \u7edf\u8ba1\u4fe1\u606f\nip -s link show eth0\n")))}u.isMDXComponent=!0}}]);