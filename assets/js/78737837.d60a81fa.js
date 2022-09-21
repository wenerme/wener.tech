"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94822],{70678:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=a(96600),n=a(27279),l=(a(59496),a(3905)),i=["components"],u={title:"CloudFlare"},o=void 0,p={unversionedId:"platform/cloudflare",id:"platform/cloudflare",title:"CloudFlare",description:"- /cdn-cgi",source:"@site/notes/platform/cloudflare.md",sourceDirName:"platform",slug:"/platform/cloudflare",permalink:"/notes/platform/cloudflare",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/platform/cloudflare.md",tags:[],version:"current",frontMatter:{title:"CloudFlare"},sidebar:"docs",previous:{title:"Cloudflare Workers",permalink:"/notes/platform/cloudflare-worker"},next:{title:"cloudflared",permalink:"/notes/platform/cloudflared"}},m={},d=[{value:"Argo Tunnel",id:"argo-tunnel",level:2},{value:"Worker",id:"worker",level:2},{value:"Bot Fight Mode",id:"bot-fight-mode",level:2},{value:"Cloudflare \u4e0d\u652f\u6301\u591a\u7ea7\u57df\u540d",id:"cloudflare-\u4e0d\u652f\u6301\u591a\u7ea7\u57df\u540d",level:2}],k={toc:d};function c(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/cdn-cgi"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/zh-cn/learning/"},"https://www.cloudflare.com/zh-cn/learning/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webmasters.stackexchange.com/a/88685"},"\u4e3a\u4ec0\u4e48\u80fd\u63d0\u4f9b\u65e0\u9650\u5e26\u5bbd\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/en-us/articles/115003206852-Understanding-Origin-Cache-Control"},"Understanding Origin Cache-Control"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"product"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Base"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developers.cloudflare.com/spectrum/"},"spectrum")),(0,l.kt)("td",{parentName:"tr",align:null},"TCP, UDP - SSH, RDP"),(0,l.kt)("td",{parentName:"tr",align:null},"5G + 1$/G, 10C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"argo tunnel"),(0,l.kt)("td",{parentName:"tr",align:null},"Tunnel HTTP,HTTPS"),(0,l.kt)("td",{parentName:"tr",align:null},"5G, 5$")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"worker"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load balance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rate limiting"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"team"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cloudflare for SaaS/Custom Hostname",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d 100 \u4e2a\u514d\u8d39"),(0,l.kt)("li",{parentName:"ul"},"0.10$/\u4e00\u4e2a"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Universal SSL - \u53ea\u652f\u6301\u9876\u7ea7 \u57df\u540d ",(0,l.kt)("inlineCode",{parentName:"li"},"*.wener.me, wener.me")),(0,l.kt)("li",{parentName:"ul"},"Advanced Certificate Manager 10$/\u6708",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u989d\u5916\u57df\u540d")))),(0,l.kt)("h2",{id:"argo-tunnel"},"Argo Tunnel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u6e90\u7aef\u548c Cloudflare \u4e4b\u95f4\u52a0\u5bc6\u901a\u8baf - ZeroTrust"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/zh-cn/articles/115000224192"},"\u4ef7\u683c")," - Since 2018"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/tunnel-for-everyone/"},"\u514d\u8d39\u58f0\u660e")," - 2021-4-17",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709 Argo Smart Routing \u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u4e3a Cloudflare Tunnel")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Traffic"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"$/Month")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"$/G/Month")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"< 1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"5.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"100 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"14.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.149")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1 TB / 1000 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"104.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1049")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 TB"),(0,l.kt)("td",{parentName:"tr",align:null},"1004.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.10049")))),(0,l.kt)("h2",{id:"worker"},"Worker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Free",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"100,000 \u8bf7\u6c42/\u5929",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1000 \u8bf7\u6c42/\u5206\u949f"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42 CPU 10ms"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u8bf7\u6c42\u540e\u5ef6\u8fdf\u4f1a\u964d\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"30 \u4e2a Worker"))),(0,l.kt)("li",{parentName:"ul"},"Bundled 5$/M",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"10M \u8bf7\u6c42/\u6708",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa 1M \u8bf7\u6c42 ",(0,l.kt)("inlineCode",{parentName:"li"},"$0.50")))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42 CPU 50ms"),(0,l.kt)("li",{parentName:"ul"},"\u603b\u662f\u6700\u4f4e\u5ef6\u8fdf"),(0,l.kt)("li",{parentName:"ul"},"30 \u4e2a Worker"),(0,l.kt)("li",{parentName:"ul"},"KV",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"100 \u547d\u540d\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"1G"),(0,l.kt)("li",{parentName:"ul"},"10M \u8bfb, 1M \u5199, 1M \u5220\u9664, 10M List")))))),(0,l.kt)("h2",{id:"bot-fight-mode"},"Bot Fight Mode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u6ce8\u5165 /cdn-cgi/challenge-platform/h/g/scripts/invisible.js"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5141\u8bb8 js")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"cloudflare-\u4e0d\u652f\u6301\u591a\u7ea7\u57df\u540d"},"Cloudflare \u4e0d\u652f\u6301\u591a\u7ea7\u57df\u540d"),(0,l.kt)("p",null,"\u591a\u7ea7\u57df\u540d\u4f1a\u8fd4\u56de ERR_SSL_VERSION_OR_CIPHER_MISMATCH"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Advanced Certificate Manager 10$/\u6708 \u53ef\u4ee5\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u6216\u8005\u8003\u8651 bypass"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.cloudflare.com/t/subdomain-too-deep/81872"},"https://community.cloudflare.com/t/subdomain-too-deep/81872"))))}c.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{kt:function(){return k}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=p(a),c=n,N=k["".concat(o,".").concat(c)]||k[c]||m[c]||l;return a?r.createElement(N,i(i({ref:e},d),{},{components:a})):r.createElement(N,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);