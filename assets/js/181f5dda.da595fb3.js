"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65196],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},33517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const s={title:"\u4f01\u4e1a\u5fae\u4fe1"},d="\u4f01\u4e1a\u5fae\u4fe1",f={unversionedId:"dev/platform/wecom",id:"dev/platform/wecom",title:"\u4f01\u4e1a\u5fae\u4fe1",description:"- \u5e94\u7528\u7c7b\u578b",source:"@site/../notes/dev/platform/wecom.md",sourceDirName:"dev/platform",slug:"/dev/platform/wecom",permalink:"/notes/dev/platform/wecom",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/platform/wecom.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{title:"\u4f01\u4e1a\u5fae\u4fe1"},sidebar:"docs",previous:{title:"\u4f01\u4e1a\u5fae\u4fe1\u670d\u52a1\u5546",permalink:"/notes/dev/platform/wecom-provider"},next:{title:"\u5c0f\u7c73",permalink:"/notes/dev/platform/xiaomi"}},k={},y=[{value:"\u6388\u6743",id:"\u6388\u6743",level:2},{value:"\u7f51\u9875\u6388\u6743",id:"\u7f51\u9875\u6388\u6743",level:3},{value:"Web \u626b\u7801\u6388\u6743\u767b\u5f55",id:"web-\u626b\u7801\u6388\u6743\u767b\u5f55",level:3},{value:"redirect_uri \u4e0e\u914d\u7f6e\u7684\u6388\u6743\u5b8c\u6210\u56de\u8c03\u57df\u540d\u4e0d\u4e00\u81f4",id:"redirect_uri-\u4e0e\u914d\u7f6e\u7684\u6388\u6743\u5b8c\u6210\u56de\u8c03\u57df\u540d\u4e0d\u4e00\u81f4",level:2}],w={toc:y};function b(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"\u4f01\u4e1a\u5fae\u4fe1"}),"\u4f01\u4e1a\u5fae\u4fe1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e94\u7528 - \u5185\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5efa\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u5f00\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5546"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://work.weixin.qq.com/api/doc/"}),"\u5f00\u53d1\u6587\u6863"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://work.weixin.qq.com/api/doc/90001/90148/90455"}),"\u5168\u5c40\u9519\u8bef\u7801")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.kkzxak47.com/2019/07/30/%E4%BD%BF%E7%94%A8%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95keycloak/"}),"Keycloak \u96c6\u6210")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/36320213"}),"\u4f01\u4e1a\u5fae\u4fe1\u5f00\u53d1\u6307\u5357"))))),(0,n.kt)("admonition",m({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5fae\u4fe1\u4f1a\u8bdd\u5b58\u6863\u4fdd\u5b58\u6700\u957f\u4e3a90\u5929"))),(0,n.kt)("admonition",m({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"access_token \u662f\u5168\u5c40\u7684\uff0c\u4e0d\u80fd\u8fd4\u56de\u5230\u524d\u7aef"),(0,n.kt)("li",{parentName:"ul"},"\u6388\u6743\u8ba4\u8bc1\u65f6\u7684 code \u53ea\u662f\u4f7f\u7528 access_token \u53bb ",(0,n.kt)("strong",{parentName:"li"},"\u6821\u9a8c")," \u800c\u4e0d\u662f\u4e3a\u7528\u6237\u6362\u53d6\u5c5e\u4e8e\u7528\u6237\u7684 access_token"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 scope \u4e3a snsapi_base"))),(0,n.kt)("h2",m({},{id:"\u6388\u6743"}),"\u6388\u6743"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u975e\u6807\u51c6 OAuth2"),(0,n.kt)("li",{parentName:"ul"},"access_token \u662f\u5168\u5c40",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 7200s"))),(0,n.kt)("li",{parentName:"ul"},"\u6362 token \u9700\u8981 appid \u548c agentid"),(0,n.kt)("li",{parentName:"ul"},"code \u53ea\u80fd\u7528\u4e00\u6b21")),(0,n.kt)("h3",m({},{id:"\u7f51\u9875\u6388\u6743"}),"\u7f51\u9875\u6388\u6743"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:'language-title="\u8df3\u8f6c\u6388\u6743"'}),"https://open.weixin.qq.com/connect/oauth2/authorize?\n  appid=wx10101&\n  response_type=code&\n  scope=snsapi_base&\n  redirect_uri=https%3A%2F%2Ftest.example.com%3A3000%2Fapi%2Fmyredirect\n  #wechat_redirect\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:'language-title="\u6362\u53d6',metastring:'Token"','Token"':!0}),"https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?\n  access_token=ACCESS_TOKEN&\n  code=CODE\n")),(0,n.kt)("h3",m({},{id:"web-\u626b\u7801\u6388\u6743\u767b\u5f55"}),"Web \u626b\u7801\u6388\u6743\u767b\u5f55"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:'language-title="\u8df3\u8f6c\u6388\u6743"'}),"https://open.work.weixin.qq.com/wwopen/sso/qrConnect?\n  appid=wx10101&\n  agentid=1000000&\n  redirect_uri=https%3A%2F%2Ftest.example.com%3A3000%2Fapi%2Fmyredirect\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:'language-title="\u6362\u53d6',metastring:'Token"','Token"':!0}),"https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?\n  access_token=ACCESS_TOKEN&\n  code=CODE\n")),(0,n.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",m({},{id:"redirect_uri-\u4e0e\u914d\u7f6e\u7684\u6388\u6743\u5b8c\u6210\u56de\u8c03\u57df\u540d\u4e0d\u4e00\u81f4"}),"redirect_uri \u4e0e\u914d\u7f6e\u7684\u6388\u6743\u5b8c\u6210\u56de\u8c03\u57df\u540d\u4e0d\u4e00\u81f4"),(0,n.kt)("p",null,"\u914d\u7f6e Web \u6388\u6743\u56de\u8c03\u57df\u540d"))}b.isMDXComponent=!0}}]);