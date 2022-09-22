"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86288],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||k[m]||o;return n?a.createElement(y,c(c({ref:t},s),{},{components:n})):a.createElement(y,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var a=n(96600),r=n(27279),o=(n(59496),n(49613)),c=["components"],l={title:"Keycloak \u5ba2\u6237\u7aef"},i=void 0,p={unversionedId:"service/auth/keycloak/keycloak-client",id:"service/auth/keycloak/keycloak-client",title:"Keycloak \u5ba2\u6237\u7aef",description:"- Nerzal/gocloak - Golang",source:"@site/notes/service/auth/keycloak/keycloak-client.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-client",permalink:"/notes/service/auth/keycloak/keycloak-client",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-client.md",tags:[],version:"current",frontMatter:{title:"Keycloak \u5ba2\u6237\u7aef"},sidebar:"docs",previous:{title:"Keycloak Awesome",permalink:"/notes/service/auth/keycloak/keycloak-awesome"},next:{title:"keycloak-config-cli",permalink:"/notes/service/auth/keycloak/keycloak-config-cli"}},s={},k=[{value:"Javascript Adapter",id:"javascript-adapter",level:2},{value:"keycloak-config-cli",id:"keycloak-config-cli",level:2}],u={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Nerzal/gocloak"},"Nerzal/gocloak")," - Golang")),(0,o.kt)("h2",{id:"javascript-adapter"},"Javascript Adapter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter"},"https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e /keycloak.json",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Adapter Reference",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/securing_apps/#javascript-adapter-reference"},"JavaScript Adapter Reference"))))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm add keycloak-js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  <script src=\"keycloak.js\"><\/script>\n  <script>\n    var keycloak = new Keycloak();\n    keycloak\n      .init()\n      .then(function (authenticated) {\n        alert(authenticated ? 'authenticated' : 'not authenticated');\n      })\n      .catch(function () {\n        alert('failed to initialize');\n      });\n  <\/script>\n</head>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Keycloak('http://localhost:8080/myapp/keycloak.json');\nnew Keycloak({\n  url: 'http://keycloak-server/auth',\n  realm: 'myrealm',\n  clientId: 'myapp',\n});\n\nkeycloak.init({\n  onLoad: 'check-sso',\n  // onLoad: 'login-required'\n  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"silent-check-sso.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <body>\n    <script>\n      parent.postMessage(location.href, location.origin);\n    <\/script>\n  </body>\n</html>\n")),(0,o.kt)("h2",{id:"keycloak-config-cli"},"keycloak-config-cli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adorsys/keycloak-config-cli"},"adorsys/keycloak-config-cli"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u547d\u4ee4\u884c\u5bfc\u5165\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/adorsys/keycloak-config-cli/blob/main/contrib/example-config/moped.json"},"moped.json")),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 JSON \u548c YAML"),(0,o.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u4e0e\u5bfc\u51fa JSON \u76f8\u540c - \u652f\u6301\u5408\u5e76/\u90e8\u5206\u5bfc\u5165")))))}m.isMDXComponent=!0}}]);