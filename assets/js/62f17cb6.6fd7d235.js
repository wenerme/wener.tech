"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97038],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17695:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"FAQ",tags:["FAQ"]},k="FAQ",g={unversionedId:"service/network/spec/http/http-faq",id:"service/network/spec/http/http-faq",title:"FAQ",description:"| Request           | Response         |",source:"@site/../notes/service/network/spec/http/http-faq.md",sourceDirName:"service/network/spec/http",slug:"/service/network/spec/http/faq",permalink:"/notes/service/network/spec/http/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/spec/http/http-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693804740,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{title:"FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"HTTP Extension",permalink:"/notes/service/network/spec/http/extensions"},next:{title:"HTTP Status",permalink:"/notes/service/network/spec/http/status"}},v={},b=[{value:"Transfer-Encoding vs Content-Encoding",id:"transfer-encoding-vs-content-encoding",level:2},{value:"301 vs 302",id:"301-vs-302",level:2}],y={toc:b},h="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(h,m(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Request"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"}),"Accept-Encoding")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Content-Encoding")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Response",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Accept-Ranges: bytes|none - \u662f\u5426\u652f\u6301\u90e8\u5206\u8bf7\u6c42")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1\nRange: bytes=200-1000, 2000-6576, 19000-\n")),(0,r.kt)("h2",u({},{id:"transfer-encoding-vs-content-encoding"}),"Transfer-Encoding vs Content-Encoding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transfer-Encoding - \u53ef\u52a8\u6001\u4fee\u6539 - \u4f20\u8f93\u5c42"),(0,r.kt)("li",{parentName:"ul"},"Content-Encoding - \u4e0d\u8981\u52a8\u6001\u4fee\u6539 - \u4e1a\u52a1\u903b\u8f91\u5c42",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5927\u591a\u5ba2\u6237\u7aef\u5b9e\u73b0\u90fd\u4f7f\u7528 Content-Encoding \u68c0\u6d4b\u538b\u7f29")))),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u8fd4\u56de content-encoding: gzip\ncurl -H 'Accept-encoding: gzip' -I https://s.wener.me\n\ncurl -H 'Accept-encoding: zstd, br, gzip, deflate' -I https://s.wener.me\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://support.cloudflare.com/hc/en-us/articles/200168396"}),"What will Cloudflare compress?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/11664307/1870054"}),"https://stackoverflow.com/a/11664307/1870054"))),(0,r.kt)("h2",u({},{id:"301-vs-302"}),"301 vs 302"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"301 Moved Permanently",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6c38\u4e45\uff0c\u5ba2\u6237\u7aef\u4e0b\u6b21\u53ef\u80fd\u76f4\u63a5\u6620\u5c04\u91cd\u5b9a\u5411\u540e\u7684\u5730\u5740"))),(0,r.kt)("li",{parentName:"ul"},"302 Found / Moved Temporarily",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e34\u65f6\uff0c\u8fd8\u4f1a\u518d\u8bf7\u6c42"))),(0,r.kt)("li",{parentName:"ul"},"303 See Other",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u8bed\u4e49"))),(0,r.kt)("li",{parentName:"ul"},"307 Temporary Redirect",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u91cd\u53d1"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 POST"))),(0,r.kt)("li",{parentName:"ul"},"308 Permanent Redirect",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c 301 \u4f46\u4e0d\u5141\u8bb8\u4fee\u6539 method")))))}N.isMDXComponent=!0}}]);