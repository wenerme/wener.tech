"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55982],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96659:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e};const f={tags:["FAQ"]},d="HAProxy FAQ",m={unversionedId:"devops/web/haproxy-faq",id:"devops/web/haproxy-faq",title:"HAProxy FAQ",description:"reqsslsni vs sslfcsni",source:"@site/../notes/devops/web/haproxy-faq.md",sourceDirName:"devops/web",slug:"/devops/web/haproxy-faq",permalink:"/notes/devops/web/haproxy-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"HAProxy Data Plane",permalink:"/notes/devops/web/haproxy-dataplane"},next:{title:"HAProxy Version",permalink:"/notes/devops/web/haproxy-version"}},y={},h=[{value:"req_ssl_sni vs ssl_fc_sni",id:"req_ssl_sni-vs-ssl_fc_sni",level:2},{value:"TLS handshake, Client hello \u540e\u65e0\u54cd\u5e94",id:"tls-handshake-client-hello-\u540e\u65e0\u54cd\u5e94",level:2}],b={toc:h};function v(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"haproxy-faq"}),"HAProxy FAQ"),(0,n.kt)("h2",u({},{id:"req_ssl_sni-vs-ssl_fc_sni"}),"req_ssl_sni vs ssl_fc_sni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"req_ssl_sni",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e ssl paththrough \u65f6"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6bd4 hdr(host) \u5feb\u4e00\u70b9\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://marc.info/?l=haproxy&m=144490809910124&w=2"}),"http://marc.info/?l=haproxy&m=144490809910124&w=2")))))),(0,n.kt)("li",{parentName:"ul"},"ssl_fc_sni",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e ssl offload \u65f6")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-haproxy"}),"use_backend s1 if { ssl_fc_sni my.domain.org }\nuse_backend s2 if { hdr(host) -i my2.domain.org }\n")),(0,n.kt)("h2",u({},{id:"tls-handshake-client-hello-\u540e\u65e0\u54cd\u5e94"}),"TLS handshake, Client hello \u540e\u65e0\u54cd\u5e94"),(0,n.kt)("p",null,"\u5728 AlpineLinux 3.14 \u4e0a\uff0cHost \u5185\u8fd0\u884c HAProxy\uff0c\u4f7f\u7528 SNI Passthrough \u51fa\u73b0\u8be5\u95ee\u9898\uff0c\u4fee\u6539\u4e3a\u5728\u5bb9\u5668\u5185\u8fd0\u884c\u540e\u95ee\u9898\u89e3\u51b3\u3002\n\u5728\u5bb9\u5668\u5185\u4f7f\u7528\u5b8c\u5168\u76f8\u540c\u7684 HAProxy \u7248\u672c\u4e5f\u6ca1\u6709\u95ee\u9898\uff0c\u4e00\u6b21\u65ad\u5b9a\u662f Host \u73af\u5883\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u7684\u539f\u56e0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4f9d\u8d56\u5347\u7ea7\u540e\u672a\u91cd\u542f")))}v.isMDXComponent=!0}}]);