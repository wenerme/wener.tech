"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86490],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Louketo Proxy"},u=void 0,p={unversionedId:"service/auth/keycloak/louketo-proxy",id:"service/auth/keycloak/louketo-proxy",title:"Louketo Proxy",description:"\u5df2\u505c\u6b62\u7ef4\u62a4\uff0c\u4f7f\u7528 oauth2-proxy \u66ff\u4ee3\u3002",source:"@site/notes/service/auth/keycloak/louketo-proxy.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/louketo-proxy",permalink:"/notes/service/auth/keycloak/louketo-proxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/louketo-proxy.md",tags:[],version:"current",frontMatter:{title:"Louketo Proxy"},sidebar:"docs",previous:{title:"Keycloak Version",permalink:"/notes/service/auth/keycloak/keycloak-version"},next:{title:"Kratos",permalink:"/notes/service/auth/kratos"}},c={},k=[{value:"FAQ",id:"faq",level:2},{value:"oidc: JWT claims invalid: invalid claims, &#39;aud&#39; claim and &#39;client_id&#39; do not match, aud=account",id:"oidc-jwt-claims-invalid-invalid-claims-aud-claim-and-client_id-do-not-match-audaccount",level:3},{value:"no session found in request, redirecting for authorization",id:"no-session-found-in-request-redirecting-for-authorization",level:3}],m={toc:k};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5df2\u505c\u6b62\u7ef4\u62a4\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy"},"oauth2-proxy")," \u66ff\u4ee3\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/louketo/louketo-proxy"},"louketo/louketo-proxy"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u539f\u6765\u7684 keycloak gatekeeper"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/louketo/louketo-proxy/blob/master/docs/user-guide.md"},"\u4f7f\u7528\u624b\u518c")),(0,o.kt)("li",{parentName:"ul"},"\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 - \u4f8b\u5982 Nginx",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e0a\u6e38\u643a\u5e26\u6388\u6743\u4fe1\u606f"))),(0,o.kt)("li",{parentName:"ul"},"\u524d\u5411\u4ee3\u7406 - HTTP_PROXY",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u63d0\u4f9b\u8d26\u53f7\u5bc6\u7801"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u63d0\u4f9b\u7684\u8d26\u53f7\u5bc6\u7801\u8fdb\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"client_credentials")," \u6388\u6743"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u9644\u52a0\u6388\u6743\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e ",(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u4e4b\u95f4")," \u4f7f\u7528 Token \u9274\u6743"))))),(0,o.kt)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u7406",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u767d\u540d\u5355"),(0,o.kt)("li",{parentName:"ul"},"\u8def\u5f84 + HTTP \u65b9\u6cd5 + \u89d2\u8272"))),(0,o.kt)("li",{parentName:"ul"},"\u66b4\u9732\u7aef\u53e3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/logout?redirect=url")," \u9000\u51fa\u767b\u9646"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/callback")," OpenID \u56de\u8c03"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/authorize")," \u9274\u6743\uff0c\u751f\u6210 OpenID \u91cd\u5b9a\u5411\u5230 provider"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/expired")," \u5224\u65ad Token \u662f\u5426\u8fc7\u671f - \u8fd4\u56de 200 \u6216 401"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/health")," \u68c0\u67e5\u5065\u5eb7\u72b6\u6001\uff0c\u53ef\u901a\u8fc7\u5934 \u83b7\u53d6\u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/login")," \u4e2d\u7ee7\u8d26\u53f7\u5bc6\u7801\u767b\u9646\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"grant_type=password"),"\uff0c\u901a\u8fc7 POST username \u548c password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/token")," \u8fd4\u56de\u5f53\u524d AccessToken"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/oauth/metrics")," Prometheus \u6307\u6807"))),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u914d\u5408 Traefik \u7684 ForwardAuth - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/louketo/louketo-proxy/issues/672"},"#672")," Support for Forward Auth/ External Auth"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u914d\u5408 Nginx auth_request \u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/louketo/louketo-proxy/issues/537"},"#537"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u56e0\u4e3a oidc \u6d41\u7a0b\u76f8\u5bf9\u590d\u6742\uff0c\u76f4\u63a5\u7684 auth_request \u96be\u4ee5\u5b9e\u73b0"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 /expired")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm quay.io/louketo/louketo-proxy \\\n  --listen 127.0.0.1:8080 \\\n  --upstream-url http://127.0.0.1:80 \\\n  --discovery-url https://keycloak.example.com/auth/realms/<REALM_NAME> \\\n  --client-id <CLIENT_ID>\n")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"oidc-jwt-claims-invalid-invalid-claims-aud-claim-and-client_id-do-not-match-audaccount"},"oidc: JWT claims invalid: invalid claims, 'aud' claim and 'client_id' do not match, aud=account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 OIDC \u5ba2\u6237\u7aef\u95ee\u9898 - \u5f85\u5347\u7ea7"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u89e3\u51b3\u529e\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 mapper"),(0,o.kt)("li",{parentName:"ul"},"mapper \u7c7b\u578b audience"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 \u5ba2\u6237\u7aef"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/louketo/louketo-proxy/issues/567"},"#567"))),(0,o.kt)("h3",{id:"no-session-found-in-request-redirecting-for-authorization"},"no session found in request, redirecting for authorization"),(0,o.kt)("p",null,"\u672a\u83b7\u53d6\u5230 token \u4fe1\u606f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"li"},"secure-cookie=false"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u662f true\uff0c\u5bfc\u81f4 http \u4e0d\u4f1a\u8bb0\u5f55 cookie"))),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6392\u67e5\u524d\u6bb5\u662f\u5426\u6709\u5b58\u50a8 cookie \u6765\u89e3\u51b3")))}s.isMDXComponent=!0}}]);