"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1742],{78497:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(96600),a=t(27279),o=(t(59496),t(3905)),l=["components"],i={title:"keycloak-config-cli"},c=void 0,s={unversionedId:"service/auth/keycloak/keycloak-config-cli",id:"service/auth/keycloak/keycloak-config-cli",title:"keycloak-config-cli",description:"- adorsys/keycloak-config-cli \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/auth/keycloak/keycloak-config-cli.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-config-cli",permalink:"/notes/service/auth/keycloak/keycloak-config-cli",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-config-cli.md",tags:[],version:"current",frontMatter:{title:"keycloak-config-cli"},sidebar:"docs",previous:{title:"Keycloak \u5ba2\u6237\u7aef",permalink:"/notes/service/auth/keycloak/keycloak-client"},next:{title:"Keycloak \u5f00\u53d1",permalink:"/notes/service/auth/keycloak/keycloak-dev"}},u={},p=[],m={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adorsys/keycloak-config-cli"},"adorsys/keycloak-config-cli")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Keycloak \u547d\u4ee4\u884c\u914d\u7f6e\u5bfc\u5165"),(0,o.kt)("li",{parentName:"ul"},"Apache-2.0, Java"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/adorsys/keycloak-config-cli/tree/main/src/test/resources/import-files"},"import-files"))))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u56e0\u4e3a Keycloak \u53ef\u4ee5\u7ba1\u7406\u8d26\u6237\uff0c\u4f46\u8d26\u6237\u901a\u5e38\u4f1a\u5141\u8bb8\u4fee\u6539\uff0c\u4e00\u6b21\u4e0d\u9002\u5408\u4f7f\u7528\u7c7b\u4f3c terraform \u4e4b\u7c7b\u7684\u7ba1\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u529f\u80fd\u975e\u5e38\u9002\u5408 realm \u521d\u59cb\u5316 \u6216 \u4e00\u6b21\u6027\u5bfc\u5165"),(0,o.kt)("li",{parentName:"ul"},"docker \u955c\u50cf\u63d0\u4f9b\u5339\u914d kc \u7684\u7248\u672c - \u4f8b\u5982 v4.2.0-15.0.1 \u6216\u8005 latest-15.0.1"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  -e KEYCLOAK_AVAILABILITYCHECK_ENABLED=true \\\n  -e KEYCLOAK_AVAILABILITYCHECK_TIMEOUT=120s \\\n  -e IMPORT_PATH=/config \\\n  -e IMPORT_FORCE=false \\\n  --env-file kc.env \\\n  -v $PWD/keycloak-conf:/config \\\n  adorsys/keycloak-config-cli:latest\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"kc.env")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"KEYCLOAK_URL=https://kc.example.com/auth\nKEYCLOAK_USER=admin\nKEYCLOAK_PASSWORD=password\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'#\nenabled: true\n\n# \u57df\u57fa\u672c\u4fe1\u606f\nrealm: demo\n\ndisplayName: Demo\ndisplayNameHtml: "<h2>DemoSSO</h2>"\n\nsslRequired: "external"\nloginWithEmailAllowed: true\n\ninternationalizationEnabled: true\nsupportedLocales:\n- zh-CN\n- en\ndefaultLocale: zh-CN\n\n\n# \u89d2\u8272\nroles:\n  # \u57df\u89d2\u8272\n  realm:\n    - name: admin\n      description: \u7ba1\u7406\n      attributes:\n        \'example.com/admin\':\n          - true\n\n# \u7528\u6237\nusers:\n  - username: wener\n    firstName: Chen\n    lastName: Wener\n    email: example@example.com\n    enabled: true\n    emailVerified: true\n    attributes:\n      jobNumber: 1000\n    credentials:\n      - type: password\n        value: 123456\n        temporary: true\n        # \u652f\u6301\u8bbe\u7f6e\u521d\u59cb\u5bc6\u7801\n        userLabel: initial\n    # \u89d2\u8272\n    realmRoles:\n      - admin\n\nclientScopes:\n\nclients:\n- clientId: demo-web\n\ndefaultDefaultClientScopes:\n- role_list\n- profile\n- email\n- roles\n- web-origins\n\n\n')))}k.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,f=m["".concat(c,".").concat(k)]||m[k]||u[k]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);