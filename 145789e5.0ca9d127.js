(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return k}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(i,".").concat(m)]||p[m]||b[m]||c;return n?a.a.createElement(k,o(o({ref:t},s),{},{components:n})):a.a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),c=(n(0),n(1152)),i={title:"Keycloak JS SDK"},o={unversionedId:"service/auth/keycloak/keycloak-js",id:"service/auth/keycloak/keycloak-js",isDocsHomePage:!1,title:"Keycloak JS SDK",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/auth/keycloak/keycloak-js.md",slug:"/service/auth/keycloak/keycloak-js",permalink:"/notes/service/auth/keycloak/keycloak-js",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-js.md",version:"current",sidebar:"docs",previous:{title:"Keycloak \u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/auth/keycloak/keycloak-faq"},next:{title:"CMS \u6982\u89c8",permalink:"/notes/service/cms/cms"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Keycloak \u63d0\u4f9b\u7684 JS SDK"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u767b\u9646\u3001\u6ce8\u518c\u3001SSO \u68c0\u6d4b\u3001\u4e2a\u4eba\u4fe1\u606f URL\u3001\u81ea\u52a8\u5237\u65b0\u3001\u9000\u51fa\u767b\u9646\u7b49\u529f\u80fd")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const kc = Keycloak({\n    url: 'https://kc.example.com/auth',\n    realm: 'app',\n    clientId: 'app-web',\n  });\n}\nawait kc.init({\n  // onLoad: 'login-required', //  \u6bcf\u6b21\u8fdb\u884c\u5f3a\u5236\u767b\u9646\n  onLoad: 'check-sso', // iframe \u68c0\u6d4b\u767b\u9646\u72b6\u6001\n  // iframe sso \u91cd\u5b9a\u5411\u5730\u5740 - \u5c06 href postMessage \u5230\u4e3b window\n  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',\n  silentCheckSsoFallback: true, // \u672a\u767b\u9646\u65f6\u8fdb\u884c\u5f3a\u5236\u767b\u9646\n  // useNonce: true,\n  checkLoginIframe: true, // \u4f7f\u7528 iframe \u68c0\u6d4b\n  checkLoginIframeInterval: 30, // \u68c0\u6d4b\u95f4\u9694\n  enableLogging: process.env.NODE_ENV === 'development', // \u65e5\u5fd7\u8bb0\u5f55\n  // redirectUri: '' // \u91cd\u5b9a\u5411\u5730\u5740\n\n  responseMode: 'fragment', // \u901a\u8fc7 # \u8fd4\u56de\u72b6\u6001\n  // responseMode: 'query', // \u901a\u8fc7 ? \u8fd4\u56de\u72b6\u6001\n\n  flow: 'standard', // \u9ed8\u8ba4\n  responseType: 'code',\n  flow: 'implicit',\n  responseType: 'id_token token',\n  flow: 'hybrid',\n  responseType: 'code id_token token',\n\n  // timeSkew: 0 ,// \u5141\u8bb8\u7684\u65f6\u95f4\u503e\u659c\n  // pkceMethod: 'S256',\n})\n// \u6388\u6743\u72b6\u6001\nkc.authenticated\n// token \u5982\u679c\u8fd8\u6709 45s \u5931\u6548\u5219\u5237\u65b0 token\nkc.updateToken(45)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"check-sso",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"loginIframe.enable == true",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"setup login iframe"),Object(c.b)("li",{parentName:"ul"},"check login iframe"),Object(c.b)("li",{parentName:"ul"},"silentCheckSsoRedirectUri",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6709 - checkSsoSilently"),Object(c.b)("li",{parentName:"ul"},"\u65e0 - doLogin"))))),Object(c.b)("li",{parentName:"ul"},"loginIframe.enable == false",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"silentCheckSsoRedirectUri",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6709 - checkSsoSilently"),Object(c.b)("li",{parentName:"ul"},"\u65e0 - doLogin"))))))),Object(c.b)("li",{parentName:"ul"},"login-required",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"doLogin - kc.login"))),Object(c.b)("li",{parentName:"ul"},"checkSsoSilently",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u521b\u5efa iframe"),Object(c.b)("li",{parentName:"ul"},"src=",Object(c.b)("inlineCode",{parentName:"li"},"kc.createLoginUrl({prompt: 'none', redirectUri: kc.silentCheckSsoRedirectUri})")),Object(c.b)("li",{parentName:"ul"},"\u63a5\u53d7 postMessage - \u5305\u542b\u7ed3\u679c \bhref"))),Object(c.b)("li",{parentName:"ul"},"\u975e implicit \u53d6\u5230 token \u540e\u4f1a\u8bf7\u6c42 kc \u83b7\u53d6 access_token \u548c refresh_token"),Object(c.b)("li",{parentName:"ul"},"standard",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"code, state, session_state, kc_action_status"))),Object(c.b)("li",{parentName:"ul"},"implicit",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"access_token, token_type, id_token, state, session_state, expires_in, kc_action_status"))),Object(c.b)("li",{parentName:"ul"},"hybrid",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"access_token, id_token, code, state, session_state, kc_action_status"))),Object(c.b)("li",{parentName:"ul"},"\u5f02\u5e38\u53c2\u6570 - error, error_description, error_uri")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"// loadUserProfile\n// token \u4e2d\u672c\u8eab\u643a\u5e26\u4e86\u4e2a\u4eba\u4fe1\u606f - profile \u4f1a\u8bf7\u6c42\u7528\u6237\u7684 account \u4fe1\u606f\ninterface KeycloakProfile {\n  id?: string;\n  username?: string;\n  email?: string;\n  firstName?: string;\n  lastName?: string;\n  enabled?: boolean;\n  emailVerified?: boolean;\n  totp?: boolean;\n  createdTimestamp?: number;\n  // \u6ce8\u610f - \u503c\u662f\u6570\u7ec4\n  attributes?: Record<string, string[]>;\n}\n")))}u.isMDXComponent=!0}}]);