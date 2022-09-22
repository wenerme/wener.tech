"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56441],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43420:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"Nginx FAQ",tags:["FAQ"]},u="Nginx FAQ",p={unversionedId:"devops/web/nginx-faq",id:"devops/web/nginx-faq",title:"Nginx FAQ",description:"a client request body is buffered to a temporary file",source:"@site/../notes/devops/web/nginx-faq.md",sourceDirName:"devops/web",slug:"/devops/web/nginx-faq",permalink:"/notes/devops/web/nginx-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/web/nginx-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Nginx FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Nginx \u5e38\u7528\u914d\u7f6e",permalink:"/notes/devops/web/nginx-cookbook"},next:{title:"Nginx Modules",permalink:"/notes/devops/web/nginx-modules"}},s={},c=[{value:"a client request body is buffered to a temporary file",id:"a-client-request-body-is-buffered-to-a-temporary-file",level:2},{value:"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3",id:"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3",level:2},{value:"$request_uri vs $uri",id:"request_uri-vs-uri",level:2},{value:"$host vs $http_host",id:"host-vs-http_host",level:2}],f={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nginx-faq"},"Nginx FAQ"),(0,i.kt)("h2",{id:"a-client-request-body-is-buffered-to-a-temporary-file"},"a client request body is buffered to a temporary file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client_body_buffer_size")),(0,i.kt)("h2",{id:"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3"},"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"# \u4f7f\u7528 http_host\nproxy_set_header Host $http_host;\n# \u6216\u8005\nproxy_set_header Host $host:$server_port;\n")),(0,i.kt)("h2",{id:"request_uri-vs-uri"},"$request_uri vs $uri"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$request_uri")," - \u4fdd\u7559\u67e5\u8be2\u53c2\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"?")," \u90e8\u5206"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$uri")," - \u53ea\u6709\u8def\u5f84")),(0,i.kt)("h2",{id:"host-vs-http_host"},"$host vs $http_host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"$host",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5b9a\u4e49\u53d8\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f HTTP Host \u5934",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"$http_host")," \u7c7b\u4f3c"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u5199\uff0c\u6ca1\u6709\u7aef\u53e3"))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f URL \u4e2d\u7684 HOST"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f \u7b2c\u4e00\u4e2a server_name"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c server_name \u5305\u542b\u6b63\u5219\uff0c\u90a3\u4e48 $host \u4e5f\u4f1a - \u5bfc\u81f4\u51fa\u73b0\u96be\u770b\u7684\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$server_name")," \u603b\u662f\u7b2c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"server_name")),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4e0d\u5305\u542b port"))),(0,i.kt)("li",{parentName:"ul"},"$http_host",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#variables"},"$http_HEADER")," \u5b9a\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u4e0e HTTP \u5934\u4e2d\u4fe1\u606f\u4fdd\u6301\u4e00\u81f4"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b port")))))}m.isMDXComponent=!0}}]);