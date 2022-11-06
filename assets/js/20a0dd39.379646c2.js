"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74747],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,y=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15372:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const f={title:"TProxy"},m="TProxy",y={unversionedId:"service/network/tproxy",id:"service/network/tproxy",title:"TProxy",description:"- \u900f\u660e\u4ee3\u7406",source:"@site/../notes/service/network/tproxy.md",sourceDirName:"service/network",slug:"/service/network/tproxy",permalink:"/notes/service/network/tproxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/tproxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"TProxy"},sidebar:"docs",previous:{title:"tinyproxy",permalink:"/notes/service/network/tinyproxy"},next:{title:"turn",permalink:"/notes/service/network/turn"}},d={},b=[],k={toc:b};function v(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},k),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"tproxy"}),"TProxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u900f\u660e\u4ee3\u7406"),(0,n.kt)("li",{parentName:"ul"},"Linux 2.2+"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u652f\u6301: Squid, Envoy"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/networking/tproxy.txt"}),"networking/tproxy.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://blog.csdn.net/dog250/article/details/13161945"}),"https://blog.csdn.net/dog250/article/details/13161945")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://toutyrater.github.io/app/tproxy.html"}),"https://toutyrater.github.io/app/tproxy.html"))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"iptables -t mangle -N DIVERT\niptables -t mangle -A PREROUTING -p tcp -m socket -j DIVERT\niptables -t mangle -A DIVERT -j MARK --set-mark 1\niptables -t mangle -A DIVERT -j TPROXY --on-port 1080\n\nip rule add fwmark 1 lookup 100\nip route add local 0.0.0.0/0 dev lo table 100\n\n#iptables -t mangle -A PREROUTING -p tcp --dport 50080 -j TPROXY --tproxy-mark 0x1/0x1 --on-port 80\n")))}v.isMDXComponent=!0}}]);