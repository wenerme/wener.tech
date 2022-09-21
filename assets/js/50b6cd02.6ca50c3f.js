"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1999],{1008:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=r(96600),a=r(27279),o=(r(59496),r(3905)),i=["components"],c={title:"PKCE"},l=void 0,u={unversionedId:"service/auth/oauth/pkce",id:"service/auth/oauth/pkce",title:"PKCE",description:"- PKCE=Proof Key for Code Exchange",source:"@site/notes/service/auth/oauth/pkce.md",sourceDirName:"service/auth/oauth",slug:"/service/auth/oauth/pkce",permalink:"/notes/service/auth/oauth/pkce",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/oauth/pkce.md",tags:[],version:"current",frontMatter:{title:"PKCE"},sidebar:"docs",previous:{title:"OpenID Connect",permalink:"/notes/service/auth/oauth/oidc"},next:{title:"oauth2-proxy",permalink:"/notes/service/auth/oauth2-proxy"}},p={},f=[],s={toc:f};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PKCE=Proof Key for Code Exchange"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://oauth.net/2/pkce/"},"https://oauth.net/2/pkce/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7636"},"https://datatracker.ietf.org/doc/html/rfc7636")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://auth0.com/docs/authorization/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce"},"Authorization Code Flow with Proof Key for Code Exchange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dropbox.tech/developers/pkce--what-and-why-"},"PKCE: What and Why?")))),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e authorization code flow \u7528\u4e8e\u66ff\u4ee3 implicit flow - \u907f\u514d\u56de\u8df3\u65f6\u9644\u52a0 access_token",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u6dfb\u52a0 code_challenge, code_challenge_method",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"code_challenge=base64(sha256(client_verifier))",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u80fd S256 \u52a0\u5bc6"))),(0,o.kt)("li",{parentName:"ul"},"code_challenge_method=plain,S256"),(0,o.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u6784\u5efa code_verifier \u4f46\u4e0d\u53d1\u9001"))),(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u54cd\u5e94 authorization_code"),(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42 token \u63a5\u53e3 - code={authorization_code},code_verifier,grant_type=authorization_code"),(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u68c0\u67e5 \u57fa\u4e8e\u521d\u59cb\u8bf7\u6c42\u7684 code_challenge \u68c0\u67e5 code_verifier"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u68c0\u67e5\u54cd\u5e94 access_token")))))}h.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(r),h=a,m=s["".concat(l,".").concat(h)]||s[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);