"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[42020],{49613:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return v}});var n=r(59496);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(r),v=o,f=s["".concat(i,".").concat(v)]||s[v]||m[v]||l;return r?n.createElement(f,a(a({ref:e},p),{},{components:r})):n.createElement(f,a({ref:e},p))}));function v(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,a=new Array(l);a[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},69672:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return g}});var n=r(49613),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))i.call(e,r)&&p(t,r,e[r]);if(u)for(var r of u(e))c.call(e,r)&&p(t,r,e[r]);return t};const s={title:"vultr"},v="vultr",f={unversionedId:"platform/vultr",id:"platform/vultr",title:"vultr",description:"- https://www.vultr.com/vultr-vs-linode/",source:"@site/../notes/platform/vultr.md",sourceDirName:"platform",slug:"/platform/vultr",permalink:"/notes/platform/vultr",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/vultr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680491916,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{title:"vultr"},sidebar:"docs",previous:{title:"Vercel Golang",permalink:"/notes/platform/vercel/go"},next:{title:"WeChat",permalink:"/notes/platform/wechat/"}},d={},g=[{value:"Regions",id:"regions",level:2}],w={toc:g};function b(t){var e,r=t,{components:o}=r,p=((t,e)=>{var r={};for(var n in t)i.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=m(m({},w),p),l(e,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"vultr"}),"vultr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.vultr.com/vultr-vs-linode/"}),"https://www.vultr.com/vultr-vs-linode/"))),(0,n.kt)("h2",m({},{id:"regions"}),"Regions"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'cat << EOF > curl-format.txt\n     time_namelookup:  %{time_namelookup}s\\n\n        time_connect:  %{time_connect}s\\n\n     time_appconnect:  %{time_appconnect}s\\n\n    time_pretransfer:  %{time_pretransfer}s\\n\n       time_redirect:  %{time_redirect}s\\n\n  time_starttransfer:  %{time_starttransfer}s\\n\n      speed_download:  %{speed_download}s\\n\n                      ----------\\n\n          time_total:  %{time_total}s\\n\nEOF\n\n# -r -10000000\ncurl -o /dev/null -w "@curl-format.txt" https://sgp-ping.vultr.com/vultr.com.100MB.bin > sgp.txt\ncurl -o /dev/null -w "@curl-format.txt" https://sel-kor-ping.vultr.com/vultr.com.100MB.bin > sel-kor.txt\ncurl -o /dev/null -w "@curl-format.txt" https://bom-in-ping.vultr.com/vultr.com.100MB.bin > bom-in.txt\ntime curl -o /dev/null -w "@curl-format.txt" https://hnd-jp-ping.vultr.com/vultr.com.100MB.bin > hnd-jp.txt\ntime curl -o /dev/null -w "@curl-format.txt" https://osk-jp-ping.vultr.com/vultr.com.100MB.bin > osk-jp.txt\ntime curl -o /dev/null -w "@curl-format.txt" https://lax-ca-us-ping.vultr.com/vultr.com.100MB.bin > lax-ca-us.txt\ntime curl -o /dev/null -w "@curl-format.txt" https://sjo-ca-us-ping.vultr.com/vultr.com.100MB.bin > lax-ca-us.txt\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.vultr.com/features/datacenter-locations/"}),"https://www.vultr.com/features/datacenter-locations/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Array.from(new Set($$('[data-category]').map(v=>v.href))).sort()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Array.from(new Set($$('[data-category]').map(v=>v.href))).sort().map(v=>new URL(v).hostname).join(' ')")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.cloudping.cloud/vultr"}),"https://www.cloudping.cloud/vultr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://cloudpingtest.com/vultr"}),"https://cloudpingtest.com/vultr"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"fping -ac 60 ams-nl-ping.vultr.com blr-in-ping.vultr.com bom-in-ping.vultr.com del-in-ping.vultr.com fl-us-ping.vultr.com fra-de-ping.vultr.com ga-us-ping.vultr.com hnd-jp-ping.vultr.com hon-hi-us-ping.vultr.com il-us-ping.vultr.com jnb-za-ping.vultr.com lax-ca-us-ping.vultr.com lon-gb-ping.vultr.com mad-es-ping.vultr.com mel-au-ping.vultr.com mex-mx-ping.vultr.com nj-us-ping.vultr.com osk-jp-ping.vultr.com par-fr-ping.vultr.com sao-br-ping.vultr.com scl-cl-ping.vultr.com sel-kor-ping.vultr.com sgp-ping.vultr.com sjo-ca-us-ping.vultr.com sto-se-ping.vultr.com syd-au-ping.vultr.com tor-ca-ping.vultr.com tx-us-ping.vultr.com wa-us-ping.vultr.com waw-pl-ping.vultr.com\n")))}b.isMDXComponent=!0}}]);