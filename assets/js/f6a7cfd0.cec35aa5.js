"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99312],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41204:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return w}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={title:"Awesome",tags:["Awesome"]},f="Web Server Awesome",b={unversionedId:"devops/web/web-awesome",id:"devops/web/web-awesome",title:"Awesome",description:"Framework",source:"@site/../notes/devops/web/web-awesome.md",sourceDirName:"devops/web",slug:"/devops/web/awesome",permalink:"/notes/devops/web/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/web-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"varnish",permalink:"/notes/devops/web/varnish"},next:{title:"Tenant DB Schema",permalink:"/notes/devops/xaas/db-schema"}},d={},w=[{value:"Framework",id:"framework",level:2},{value:"Proxy",id:"proxy",level:2}],k={toc:w};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"web-server-awesome"}),"Web Server Awesome"),(0,n.kt)("h2",c({},{id:"framework"}),"Framework"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://web-frameworks-benchmark.netlify.app/result"}),"https://web-frameworks-benchmark.netlify.app/result"))),(0,n.kt)("h2",c({},{id:"proxy"}),"Proxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"iptables \u8f6c\u53d1\u6027\u80fd\u6700\u597d\uff0c\u529f\u80fd\u6700\u5f31"),(0,n.kt)("li",{parentName:"ul"},"haproxy \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\uff0c\u5927\u591a\u65f6\u5019\u6027\u80fd\u591f\u597d\uff0c\u4f7f\u7528\u65b9\u4fbf"),(0,n.kt)("li",{parentName:"ul"},"nginx \u529f\u80fd\u6bd4 haproxy \u53cb\u597d\uff0c\u903b\u8f91\u5904\u7406\u80fd\u529b\u548c\u751f\u6001\u6bd4 haproxy \u597d\uff0c\u6027\u80fd\u53ef\u80fd\u5f31\u4e8e haproxy"),(0,n.kt)("li",{parentName:"ul"},"envoy \u6027\u80fd\u597d\uff0c\u4f5c\u4e3a\u5e95\u5c42\u5b58\u5728\uff0c\u5bf9\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u4e0d\u53cb\u597d\uff0c\u5bf9 api \u4f7f\u7528\u53cb\u597d"),(0,n.kt)("li",{parentName:"ul"},"treafik,caddy \u5bf9\u4f7f\u7528\u53cb\u597d\uff0c\u6027\u80fd\u53ef\u80fd\u5f31\u4e8e nginx"))),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd\u56e0\u7d20",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e76\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u5ef6\u65f6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4"),(0,n.kt)("li",{parentName:"ul"},"\u957f\u5c3e"))),(0,n.kt)("li",{parentName:"ul"},"RPS")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"nginx"),(0,n.kt)("li",{parentName:"ul"},"haproxy"),(0,n.kt)("li",{parentName:"ul"},"caddy"),(0,n.kt)("li",{parentName:"ul"},"treafik"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/dlundquist/sniproxy"}),"dlundquist/sniproxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/NickMRamirez/Proxy-Benchmarks"}),"NickMRamirez/Proxy-Benchmarks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/digitalocean/nginxconfig.io"}),"digitalocean/nginxconfig.io"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"nginx.conf webui")))))}y.isMDXComponent=!0}}]);