"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43669],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),k=o,d=f["".concat(i,".").concat(k)]||f[k]||p[k]||a;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19628:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),s=["components"],c={title:"strongSwan Cookbook",tags:["Cookbook"]},i="strongSwan Cookbook",l={unversionedId:"service/network/strongswan-cookbook",id:"service/network/strongswan-cookbook",title:"strongSwan Cookbook",description:"- strongSwan swanctl Tests",source:"@site/../notes/service/network/strongswan-cookbook.md",sourceDirName:"service/network",slug:"/service/network/strongswan-cookbook",permalink:"/notes/service/network/strongswan-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/network/strongswan-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"strongSwan Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"strongSwan \u914d\u7f6e",permalink:"/notes/service/network/strongswan-conf"},next:{title:"strongSwan FAQ",permalink:"/notes/service/network/strongswan-faq"}},u={},p=[{value:"\u57fa\u7840 ipsec.conf",id:"\u57fa\u7840-ipsecconf",level:2},{value:"\u57fa\u7840 swanctl.conf",id:"\u57fa\u7840-swanctlconf",level:3}],f={toc:p};function k(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"strongswan-cookbook"},"strongSwan Cookbook"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.strongswan.org/testing/testresults/swanctl/"},"strongSwan swanctl Tests"))),(0,a.kt)("h2",{id:"\u57fa\u7840-ipsecconf"},"\u57fa\u7840 ipsec.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"config setup\n    # strictcrlpolicy=yes\n    uniqueids = no\n\nconn %default\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn vpn\n  left=%any\n  leftsourceip=%config\n  # \u8fdc\u7a0b\u5730\u5740\n  right=1.2.3.4\n  rightsubnet=0.0.0.0/0\n  type=tunnel\n  auto=start\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ipsec.secrets")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5bc6\u94a5\n: PSK "12345678"\n')),(0,a.kt)("h3",{id:"\u57fa\u7840-swanctlconf"},"\u57fa\u7840 swanctl.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'connections {\n    vpn {\n        include /etc/swanctl/conf.d/ike_sa_default.conf\n        remote_addrs=1.2.3.4\n        local_addrs=%any\n        vips=0.0.0.0\n        children {\n            vpn {\n                include /etc/swanctl/conf.d/child_sa_default.conf\n                start_action=start\n                remote_ts=0.0.0.0/0\n            }\n        }\n    remote {\n      id="vpn"\n      auth=psk\n    }\n    local {\n      id="vpn"\n      auth=psk\n    }\n    }\n}\npools {\n}\nauthorities {\n}\nsecrets {\n    ike- {\n    id="vpn"\n        secret="12345678"\n    }\n}\n')))}k.isMDXComponent=!0}}]);