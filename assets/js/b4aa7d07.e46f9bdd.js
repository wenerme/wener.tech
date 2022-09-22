"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38991],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68374:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return k}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"Keycloak JS SDK"},c="Keycloak JS SDK",s={unversionedId:"service/auth/keycloak/keycloak-js",id:"service/auth/keycloak/keycloak-js",title:"Keycloak JS SDK",description:"- adapters/oidc/js/src/main/resources \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/auth/keycloak/keycloak-js.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-js",permalink:"/notes/service/auth/keycloak/keycloak-js",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/auth/keycloak/keycloak-js.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Keycloak JS SDK"},sidebar:"docs",previous:{title:"Keycloak \u672f\u8bed\u8868",permalink:"/notes/service/auth/keycloak/keycloak-glossary"},next:{title:"KeyCloak LDAP",permalink:"/notes/service/auth/keycloak/keycloak-ldap"}},p={},k=[],u={toc:k};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keycloak-js-sdk"},"Keycloak JS SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak/tree/master/adapters/oidc/js/src/main/resources"},"adapters/oidc/js/src/main/resources")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Keycloak \u63d0\u4f9b\u7684 JS SDK"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u767b\u9646\u3001\u6ce8\u518c\u3001SSO \u68c0\u6d4b\u3001\u4e2a\u4eba\u4fe1\u606f URL\u3001\u81ea\u52a8\u5237\u65b0\u3001\u9000\u51fa\u767b\u9646\u7b49\u529f\u80fd")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"init \u53c2\u6570 \u7684 Typescript \u5b9a\u4e49\u6ca1\u6709 scope \u53c2\u6570\uff0c\u5b9e\u9645\u652f\u6301",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5728 init \u4e5f\u4f20\u5165\uff0c\u5426\u5219 checkSsoSilently \u4f1a\u4e22\u5931 scope"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const kc = Keycloak({\n    url: 'https://kc.example.com/auth',\n    realm: 'app',\n    clientId: 'app-web',\n  });\n}\nawait kc.init({\n  // onLoad: 'login-required', //  \u6bcf\u6b21\u8fdb\u884c\u5f3a\u5236\u767b\u9646\n  onLoad: 'check-sso', // iframe \u68c0\u6d4b\u767b\u9646\u72b6\u6001\n  // iframe sso \u91cd\u5b9a\u5411\u5730\u5740 - \u5c06 href postMessage \u5230\u4e3b window\n  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',\n  silentCheckSsoFallback: true, // \u672a\u767b\u9646\u65f6\u8fdb\u884c\u5f3a\u5236\u767b\u9646\n  // useNonce: true,\n  checkLoginIframe: true, // \u4f7f\u7528 iframe \u68c0\u6d4b\n  checkLoginIframeInterval: 30, // \u68c0\u6d4b\u95f4\u9694\n  enableLogging: process.env.NODE_ENV === 'development', // \u65e5\u5fd7\u8bb0\u5f55\n  // redirectUri: '' // \u91cd\u5b9a\u5411\u5730\u5740\n\n  responseMode: 'fragment', // \u901a\u8fc7 # \u8fd4\u56de\u72b6\u6001\n  // responseMode: 'query', // \u901a\u8fc7 ? \u8fd4\u56de\u72b6\u6001\n\n  flow: 'standard', // \u9ed8\u8ba4\n  responseType: 'code',\n  flow: 'implicit',\n  responseType: 'id_token token',\n  flow: 'hybrid',\n  responseType: 'code id_token token',\n\n  // timeSkew: 0 ,// \u5141\u8bb8\u7684\u65f6\u95f4\u503e\u659c\n  pkceMethod: 'S256', // \u5efa\u8bae - \u9ed8\u8ba4\u4e0d\u4f7f\u7528 pkce\n\n  scope: '', // \u5176\u4ed6 scope - \u7a7a\u683c\u5206\u5272\uff0c\u9ed8\u8ba4\u5305\u542b openid\n})\n// \u6388\u6743\u72b6\u6001\nkc.authenticated\n// token \u5982\u679c\u8fd8\u6709 45s \u5931\u6548\u5219\u5237\u65b0 token\nkc.updateToken(45)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="silent-check-sso.html"',title:'"silent-check-sso.html"'},'<html lang="zh">\n<body>\n<script>\n  parent.postMessage(location.href, location.origin)\n<\/script>\n</body>\n</html>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check-sso",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"loginIframe.enable == true",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"setup login iframe"),(0,o.kt)("li",{parentName:"ul"},"check login iframe"),(0,o.kt)("li",{parentName:"ul"},"silentCheckSsoRedirectUri",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709 - checkSsoSilently"),(0,o.kt)("li",{parentName:"ul"},"\u65e0 - doLogin"))))),(0,o.kt)("li",{parentName:"ul"},"loginIframe.enable == false",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"silentCheckSsoRedirectUri",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709 - checkSsoSilently"),(0,o.kt)("li",{parentName:"ul"},"\u65e0 - doLogin"))))))),(0,o.kt)("li",{parentName:"ul"},"login-required",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"doLogin - kc.login"))),(0,o.kt)("li",{parentName:"ul"},"checkSsoSilently",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa iframe"),(0,o.kt)("li",{parentName:"ul"},"src=",(0,o.kt)("inlineCode",{parentName:"li"},"kc.createLoginUrl({prompt: 'none', redirectUri: kc.silentCheckSsoRedirectUri})")),(0,o.kt)("li",{parentName:"ul"},"\u63a5\u53d7 postMessage - \u5305\u542b\u7ed3\u679c \bhref"))),(0,o.kt)("li",{parentName:"ul"},"\u975e implicit \u53d6\u5230 token \u540e\u4f1a\u8bf7\u6c42 kc \u83b7\u53d6 access_token \u548c refresh_token"),(0,o.kt)("li",{parentName:"ul"},"standard",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"code, state, session_state, kc_action_status"))),(0,o.kt)("li",{parentName:"ul"},"implicit",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"access_token, token_type, id_token, state, session_state, expires_in, kc_action_status"))),(0,o.kt)("li",{parentName:"ul"},"hybrid",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"access_token, id_token, code, state, session_state, kc_action_status"))),(0,o.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u53c2\u6570 - error, error_description, error_uri")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// loadUserProfile\n// token \u4e2d\u672c\u8eab\u643a\u5e26\u4e86\u4e2a\u4eba\u4fe1\u606f - profile \u4f1a\u8bf7\u6c42\u7528\u6237\u7684 account \u4fe1\u606f\ninterface KeycloakProfile {\n  id?: string;\n  username?: string;\n  email?: string;\n  firstName?: string;\n  lastName?: string;\n  enabled?: boolean;\n  emailVerified?: boolean;\n  totp?: boolean;\n  createdTimestamp?: number;\n  // \u6ce8\u610f - \u503c\u662f\u6570\u7ec4\n  attributes?: Record<string, string[]>;\n}\n")))}m.isMDXComponent=!0}}]);