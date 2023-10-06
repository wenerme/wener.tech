"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53324],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,d=c["".concat(i,".").concat(f)]||c[f]||m[f]||l;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9934:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,p(t)),f=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={title:"expressvpn"},v="expressvpn",k={unversionedId:"platform/expressvpn",id:"platform/expressvpn",title:"expressvpn",description:"- \u56fd\u5185\u80fd\u8fde\u4e0a",source:"@site/../notes/platform/expressvpn.md",sourceDirName:"platform",slug:"/platform/expressvpn",permalink:"/notes/platform/expressvpn",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/expressvpn.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680154821,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{title:"expressvpn"},sidebar:"docs",previous:{title:"\u4e0a\u6d77\u5efa\u5468",permalink:"/notes/platform/cn/sh-jianzhou"},next:{title:"\u98de\u4e66",permalink:"/notes/platform/feishu/"}},y={},O=[{value:"Docker",id:"docker",level:2}],b={toc:O},N="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,m(c(c({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"expressvpn"}),"expressvpn"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u56fd\u5185\u80fd\u8fde\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u534f\u8bae\u5c11")),(0,n.kt)("h2",c({},{id:"docker"}),"Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/polkaned/dockerfiles/tree/master/expressvpn"}),"polkaned/expressvpn")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/Misioslav/expressvpn"}),"Misioslav/expressvpn"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"cat <<EOF > .env\nCODE=\nSERVER=smart\nEOF\n\ndocker run --rm -it --cap-add NET_ADMIN --devices /dev/net/tun --privileged \\\n  -p 80:80 \\\n  --name expressvpn Misioslav/expressvpn\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PROTOCOL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lightway_udp")),(0,n.kt)("li",{parentName:"ul"},"lightway_tcp"),(0,n.kt)("li",{parentName:"ul"},"tcp"),(0,n.kt)("li",{parentName:"ul"},"udp"),(0,n.kt)("li",{parentName:"ul"},"auto"))),(0,n.kt)("li",{parentName:"ul"},"CIPHER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"chacha20")),(0,n.kt)("li",{parentName:"ul"},"aes"),(0,n.kt)("li",{parentName:"ul"},"auto"))),(0,n.kt)("li",{parentName:"ul"},"NETWORK_LOCK=on"),(0,n.kt)("li",{parentName:"ul"},"WHITELIST_DNS"),(0,n.kt)("li",{parentName:"ul"},"DDNS"),(0,n.kt)("li",{parentName:"ul"},"IP"),(0,n.kt)("li",{parentName:"ul"},"BEAERER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ipinfo.io AccessToken"))),(0,n.kt)("li",{parentName:"ul"},"HEALTHCHECK"),(0,n.kt)("li",{parentName:"ul"},"healthchecks.io ID")))}h.isMDXComponent=!0}}]);