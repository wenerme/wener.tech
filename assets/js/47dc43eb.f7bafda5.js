"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43669],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),k=o,d=f["".concat(i,".").concat(k)]||f[k]||u[k]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78335:function(e,n,t){t.r(n),t.d(n,{assets:function(){return w},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var r=t(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))l.call(n,t)&&p(e,t,n[t]);return e};const f={title:"strongSwan Cookbook",tags:["Cookbook"]},k="strongSwan Cookbook",d={unversionedId:"service/network/strongswan-cookbook",id:"service/network/strongswan-cookbook",title:"strongSwan Cookbook",description:"- strongSwan swanctl Tests",source:"@site/../notes/service/network/strongswan-cookbook.md",sourceDirName:"service/network",slug:"/service/network/strongswan-cookbook",permalink:"/notes/service/network/strongswan-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/strongswan-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"strongSwan Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"strongSwan \u914d\u7f6e",permalink:"/notes/service/network/strongswan-conf"},next:{title:"strongSwan FAQ",permalink:"/notes/service/network/strongswan-faq"}},w={},b=[{value:"\u57fa\u7840 ipsec.conf",id:"\u57fa\u7840-ipsecconf",level:2},{value:"\u57fa\u7840 swanctl.conf",id:"\u57fa\u7840-swanctlconf",level:3}],m={toc:b};function g(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},m),p),a(n,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"strongswan-cookbook"}),"strongSwan Cookbook"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.strongswan.org/testing/testresults/swanctl/"}),"strongSwan swanctl Tests"))),(0,r.kt)("h2",u({},{id:"\u57fa\u7840-ipsecconf"}),"\u57fa\u7840 ipsec.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"config setup\n    # strictcrlpolicy=yes\n    uniqueids = no\n\nconn %default\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn vpn\n  left=%any\n  leftsourceip=%config\n  # \u8fdc\u7a0b\u5730\u5740\n  right=1.2.3.4\n  rightsubnet=0.0.0.0/0\n  type=tunnel\n  auto=start\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ipsec.secrets")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u5bc6\u94a5\n: PSK "12345678"\n')),(0,r.kt)("h3",u({},{id:"\u57fa\u7840-swanctlconf"}),"\u57fa\u7840 swanctl.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'connections {\n    vpn {\n        include /etc/swanctl/conf.d/ike_sa_default.conf\n        remote_addrs=1.2.3.4\n        local_addrs=%any\n        vips=0.0.0.0\n        children {\n            vpn {\n                include /etc/swanctl/conf.d/child_sa_default.conf\n                start_action=start\n                remote_ts=0.0.0.0/0\n            }\n        }\n    remote {\n      id="vpn"\n      auth=psk\n    }\n    local {\n      id="vpn"\n      auth=psk\n    }\n    }\n}\npools {\n}\nauthorities {\n}\nsecrets {\n    ike- {\n    id="vpn"\n        secret="12345678"\n    }\n}\n')))}g.isMDXComponent=!0}}]);