"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53318],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(r),s=n,d=k["".concat(u,".").concat(s)]||k[s]||m[s]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},39855:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return y}});var a=r(49613),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const k={title:"Louketo Proxy"},s="Louketo Proxy",d={unversionedId:"service/auth/keycloak/louketo-proxy",id:"service/auth/keycloak/louketo-proxy",title:"Louketo Proxy",description:"\u5df2\u505c\u6b62\u7ef4\u62a4\uff0c\u4f7f\u7528 oauth2-proxy \u66ff\u4ee3\u3002",source:"@site/../notes/service/auth/keycloak/louketo-proxy.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/louketo-proxy",permalink:"/notes/service/auth/keycloak/louketo-proxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/keycloak/louketo-proxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"Louketo Proxy"},sidebar:"docs",previous:{title:"Keycloak Version",permalink:"/notes/service/auth/keycloak/version"},next:{title:"Kratos",permalink:"/notes/service/auth/kratos"}},f={},y=[{value:"FAQ",id:"faq",level:2},{value:"oidc: JWT claims invalid: invalid claims, &#39;aud&#39; claim and &#39;client_id&#39; do not match, aud=account",id:"oidc-jwt-claims-invalid-invalid-claims-aud-claim-and-client_id-do-not-match-audaccount",level:3},{value:"no session found in request, redirecting for authorization",id:"no-session-found-in-request-redirecting-for-authorization",level:3}],h={toc:y};function N(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),c),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"louketo-proxy"}),"Louketo Proxy"),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u5df2\u505c\u6b62\u7ef4\u62a4\uff0c\u4f7f\u7528 ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/oauth2-proxy/oauth2-proxy"}),"oauth2-proxy")," \u66ff\u4ee3\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy"}),"louketo/louketo-proxy"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u539f\u6765\u7684 keycloak gatekeeper"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/blob/master/docs/user-guide.md"}),"\u4f7f\u7528\u624b\u518c")),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 - \u4f8b\u5982 Nginx",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e0a\u6e38\u643a\u5e26\u6388\u6743\u4fe1\u606f"))),(0,a.kt)("li",{parentName:"ul"},"\u524d\u5411\u4ee3\u7406 - HTTP_PROXY",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u63d0\u4f9b\u8d26\u53f7\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u63d0\u4f9b\u7684\u8d26\u53f7\u5bc6\u7801\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"client_credentials")," \u6388\u6743"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u9644\u52a0\u6388\u6743\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e ",(0,a.kt)("strong",{parentName:"li"},"\u670d\u52a1\u4e4b\u95f4")," \u4f7f\u7528 Token \u9274\u6743"))))),(0,a.kt)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u767d\u540d\u5355"),(0,a.kt)("li",{parentName:"ul"},"\u8def\u5f84 + HTTP \u65b9\u6cd5 + \u89d2\u8272"))),(0,a.kt)("li",{parentName:"ul"},"\u66b4\u9732\u7aef\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/logout?redirect=url")," \u9000\u51fa\u767b\u9646"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/callback")," OpenID \u56de\u8c03"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/authorize")," \u9274\u6743\uff0c\u751f\u6210 OpenID \u91cd\u5b9a\u5411\u5230 provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/expired")," \u5224\u65ad Token \u662f\u5426\u8fc7\u671f - \u8fd4\u56de 200 \u6216 401"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/health")," \u68c0\u67e5\u5065\u5eb7\u72b6\u6001\uff0c\u53ef\u901a\u8fc7\u5934 \u83b7\u53d6\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/login")," \u4e2d\u7ee7\u8d26\u53f7\u5bc6\u7801\u767b\u9646\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"grant_type=password"),"\uff0c\u901a\u8fc7 POST username \u548c password"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/token")," \u8fd4\u56de\u5f53\u524d AccessToken"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/metrics")," Prometheus \u6307\u6807"))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u914d\u5408 Traefik \u7684 ForwardAuth - ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/issues/672"}),"#672")," Support for Forward Auth/ External Auth"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u914d\u5408 Nginx auth_request \u4f7f\u7528 ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/issues/537"}),"#537"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3a oidc \u6d41\u7a0b\u76f8\u5bf9\u590d\u6742\uff0c\u76f4\u63a5\u7684 auth_request \u96be\u4ee5\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 /expired")))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm quay.io/louketo/louketo-proxy \\\n  --listen 127.0.0.1:8080 \\\n  --upstream-url http://127.0.0.1:80 \\\n  --discovery-url https://keycloak.example.com/auth/realms/<REALM_NAME> \\\n  --client-id <CLIENT_ID>\n")),(0,a.kt)("h2",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",m({},{id:"oidc-jwt-claims-invalid-invalid-claims-aud-claim-and-client_id-do-not-match-audaccount"}),"oidc: JWT claims invalid: invalid claims, 'aud' claim and 'client_id' do not match, aud=account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 OIDC \u5ba2\u6237\u7aef\u95ee\u9898 - \u5f85\u5347\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u89e3\u51b3\u529e\u6cd5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 mapper"),(0,a.kt)("li",{parentName:"ul"},"mapper \u7c7b\u578b audience"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 \u5ba2\u6237\u7aef"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/louketo/louketo-proxy/issues/567"}),"#567"))),(0,a.kt)("h3",m({},{id:"no-session-found-in-request-redirecting-for-authorization"}),"no session found in request, redirecting for authorization"),(0,a.kt)("p",null,"\u672a\u83b7\u53d6\u5230 token \u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"li"},"secure-cookie=false"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u662f true\uff0c\u5bfc\u81f4 http \u4e0d\u4f1a\u8bb0\u5f55 cookie"))),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6392\u67e5\u524d\u6bb5\u662f\u5426\u6709\u5b58\u50a8 cookie \u6765\u89e3\u51b3")))}N.isMDXComponent=!0}}]);