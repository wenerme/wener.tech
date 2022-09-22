"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55026],{49613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32168:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return g}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&p(e,a,t[a]);return e};const d={title:"Keycloak \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},m="Keycloak FAQ",k={unversionedId:"service/auth/keycloak/keycloak-faq",id:"service/auth/keycloak/keycloak-faq",title:"Keycloak \u5e38\u89c1\u95ee\u9898",description:"- \u591a Realm/Client \u6027\u80fd\u6709\u95ee\u9898 - \u5b98\u65b9\u6b63\u5728\u7740\u624b\u5904\u7406",source:"@site/../notes/service/auth/keycloak/keycloak-faq.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-faq",permalink:"/notes/service/auth/keycloak/keycloak-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/keycloak/keycloak-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656388638,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{title:"Keycloak \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Keycloak \u5f00\u53d1",permalink:"/notes/service/auth/keycloak/keycloak-dev"},next:{title:"Keycloak \u672f\u8bed\u8868",permalink:"/notes/service/auth/keycloak/keycloak-glossary"}},h={},g=[{value:"\u9ed8\u8ba4 mapper \u5b57\u6bb5",id:"\u9ed8\u8ba4-mapper-\u5b57\u6bb5",level:2},{value:"OIDC Brokering \u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7",id:"oidc-brokering-\u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7",level:2},{value:"\u670d\u52a1\u8d26\u53f7 - Service Account",id:"\u670d\u52a1\u8d26\u53f7---service-account",level:2},{value:"\u4e3b\u57df - Master Realm",id:"\u4e3b\u57df---master-realm",level:2},{value:"login-status-iframe.html/init 403 \u5f02\u5e38",id:"login-status-iframehtmlinit-403-\u5f02\u5e38",level:2},{value:"invalid_grant: Code not valid",id:"invalid_grant-code-not-valid",level:2},{value:"invalid_client_credentials CODE_TO_TOKEN_ERROR",id:"invalid_client_credentials-code_to_token_error",level:2},{value:"Could not modify attribute for DN",id:"could-not-modify-attribute-for-dn",level:2},{value:"Found an Attribute element with duplicated Name",id:"found-an-attribute-element-with-duplicated-name",level:2},{value:'IDP parameter for the UID (username) not found. Possible parameters are: "Role"',id:"idp-parameter-for-the-uid-username-not-found-possible-parameters-are-role",level:2},{value:"Access to XMLHttpRequest at keycloak from origin &#39;http://127.0.0.1:3000&#39; has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.",id:"access-to-xmlhttprequest-at-keycloak-from-origin-http1270013000-has-been-blocked-by-cors-policy-no-access-control-allow-origin-header-is-present-on-the-requested-resource",level:2},{value:"JWKs \u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5",id:"jwks-\u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5",level:2},{value:"\u57df\u540d\u6620\u5c04\u57df",id:"\u57df\u540d\u6620\u5c04\u57df",level:2},{value:"Unexpected error when authenticating with identity provider",id:"unexpected-error-when-authenticating-with-identity-provider",level:2},{value:"ISPN000474: Error processing request 4@sparkle-stack-keycloak-76f867dd87-nkpcl: protostream.com.google.protobuf.InvalidProtocolBufferException: While parsing a protocol message, the input ended unexpectedly in the middle of a field. This could mean either that the input has been truncated or that an embedded message misreported its own length.",id:"ispn000474-error-processing-request-4sparkle-stack-keycloak-76f867dd87-nkpcl-protostreamcomgoogleprotobufinvalidprotocolbufferexception-while-parsing-a-protocol-message-the-input-ended-unexpectedly-in-the-middle-of-a-field-this-could-mean-either-that-the-input-has-been-truncated-or-that-an-embedded-message-misreported-its-own-length",level:2},{value:"failed getting JSON response from Kubernetes Client",id:"failed-getting-json-response-from-kubernetes-client",level:2}],f={toc:g};function b(e){var t,a=e,{components:n}=a,p=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},f),p),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"keycloak-faq"}),"Keycloak FAQ"),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u591a Realm/Client \u6027\u80fd\u6709\u95ee\u9898 - \u5b98\u65b9\u6b63\u5728\u7740\u624b\u5904\u7406",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8d85\u8fc7 100 Realm \u53ef\u80fd\u9700\u8981\u591a \u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"console \u8bbe\u8ba1\u672a\u8003\u8651 realm \u5f88\u591a\u7684\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/keycloak/keycloak-benchmark/"}),"keycloak/keycloak-benchmark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/keycloak/keycloak/discussions/11074"}),"keycloak#11074")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://issues.redhat.com/browse/KEYCLOAK-4593"}),"KEYCLOAK-4593")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/q/44583833/1870054"}),"https://stackoverflow.com/q/44583833/1870054"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u57fa\u4e8e realm \u5c31\u884c\u91cd\u5b9a\u5411 - \u5b9e\u73b0\u5206\u7247"))))))),(0,r.kt)("h2",u({},{id:"\u9ed8\u8ba4-mapper-\u5b57\u6bb5"}),"\u9ed8\u8ba4 mapper \u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"scope"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"mapper"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"to"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"roles"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"realm roles"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"realm_access.roles"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"User Realm Role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"^"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"client roles"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"resource_access.${client_id}.roles"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"User Client Role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"web-origins"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"allowed web origins"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"allowed-origins"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Allowed Web Origins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"phone"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"phone number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"phone_number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Attribute - phoneNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"^"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"phone number verified"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"phone_number_verified"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Attribute - phoneNumberVerified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"email"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"email"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"email"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Property - phoneNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"^"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"email verified"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"email_verified"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Property - emailVerified")))),(0,r.kt)("h2",u({},{id:"oidc-brokering-\u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7"}),"OIDC Brokering \u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u89e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://issues.redhat.com/browse/KEYCLOAK-4429"}),"https://issues.redhat.com/browse/KEYCLOAK-4429")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://developers.redhat.com/blog/2020/12/30/how-to-restrict-users-being-authenticated-in-keycloak-during-identity-brokering#"}),"https://developers.redhat.com/blog/2020/12/30/how-to-restrict-users-being-authenticated-in-keycloak-during-identity-brokering#"))),(0,r.kt)("h2",u({},{id:"\u670d\u52a1\u8d26\u53f7---service-account"}),"\u670d\u52a1\u8d26\u53f7 - Service Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u76f4\u63a5\u7533\u8bf7\u83b7\u53d6 Token\uff0c\u7136\u540e\u4f7f\u7528\u7533\u8bf7\u5230\u7684 Token \u8bbf\u95ee\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u6d89\u53ca\u7528\u6237\u548c\u6d4f\u89c8\u5668\u4ea4\u4e92"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u670d\u52a1\u4e4b\u95f4\u9274\u6743\uff0c\u4f8b\u5982 \u670d\u52a1\u7aef API \u6388\u6743"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.keycloak.org/docs/latest/server_admin/#_service_accounts"}),"https://www.keycloak.org/docs/latest/server_admin/#_service_accounts"))),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://medium.com/@mihirrajdixit/getting-started-with-service-accounts-in-keycloak-c8f6798a0675"}),"https://medium.com/@mihirrajdixit/getting-started-with-service-accounts-in-keycloak-c8f6798a0675"),"\ngreat for administrative tasks executed on behalf of a service instead of individual user."),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://planet.jboss.org/post/service_accounts_support_in_keycloak"}),"https://planet.jboss.org/post/service_accounts_support_in_keycloak"),"\nallows to authenticate the client application with Keycloak server and retrieve the access token dedicated to this application."),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://www.keycloak.org/docs/latest/server_admin/index.html#_service_accounts"}),"https://www.keycloak.org/docs/latest/server_admin/index.html#_service_accounts")),(0,r.kt)("h2",u({},{id:"\u4e3b\u57df---master-realm"}),"\u4e3b\u57df - Master Realm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u8d85\u7ba1\u8fdb\u884c\u7cfb\u7edf\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5c06 Master Realm \u7528\u4e8e\u4e1a\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5177\u4f53\u57df\u4e0b\u521b\u5efa\u7ba1\u7406\u5458\uff0c\u7136\u540e\u7981\u7528 Master Realm"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.keycloak.org/docs/latest/server_admin/#the-master-realm"}),"The Master Realm"))))),(0,r.kt)("h2",u({},{id:"login-status-iframehtmlinit-403-\u5f02\u5e38"}),"login-status-iframe.html/init 403 \u5f02\u5e38"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5f00\u542f Implicit Flow Enabled"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd client_id \b \u6b63\u786e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c client_id \u9519\u4e86\u4f1a 403\uff0c\u4f46\u6ca1\u6709\u4efb\u4f55\u5730\u65b9\u63d0\u793a client_id \u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u5e38\u96be\u6392\u67e5")))),(0,r.kt)("h2",u({},{id:"invalid_grant-code-not-valid"}),"invalid_grant: Code not valid"),(0,r.kt)("h2",u({},{id:"invalid_client_credentials-code_to_token_error"}),"invalid_client_credentials CODE_TO_TOKEN_ERROR"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u7eaf\u524d\u7aef\uff0c\u9700\u8981\u751f\u6210 Token"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"curl -L -X POST 'http://localhost:8080/auth/realms/whatever-realm/protocol/openid-connect/token' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'client_id=clientid-03' \\\n  --data-urlencode 'grant_type=password' \\\n  --data-urlencode 'client_secret=ec78c6bb-8339-4bed-9b1b-e973d27107dc' \\\n  --data-urlencode 'scope=openid' \\\n  --data-urlencode 'username=emuhamma' \\\n  --data-urlencode 'password=1'\n")),(0,r.kt)("h2",u({},{id:"could-not-modify-attribute-for-dn"}),"Could not modify attribute for DN"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86 federation\uff0c\u4fee\u6539\u5bc6\u7801\u53ef\u80fd\u88ab\u7981\u6b62")),(0,r.kt)("h2",u({},{id:"found-an-attribute-element-with-duplicated-name"}),"Found an Attribute element with duplicated Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SAML \u7684\u65f6\u5019 Nextcloud \u8981\u8bbe\u7f6e\u89d2\u8272\u5217\u8868\u8fd4\u56de\u5355\u4e2a\u89d2\u8272"),(0,r.kt)("li",{parentName:"ul"},"(Realm) -> Client Scopes -> role_list (saml) -> Mappers tab -> role list -> 'Single Role Attribute'.")),(0,r.kt)("h2",u({},{id:"idp-parameter-for-the-uid-username-not-found-possible-parameters-are-role"}),"IDP parameter for the UID (username) not found. Possible parameters are: ",'["Role"]'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nextcloud + SAML \u51fa\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u5728 Keycloak Client Mappers \u6dfb\u52a0 Mapper")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Option"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Mapper Type"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"User Property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Friendly Name"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SAML Attribute Name"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SAML Attribute NameFormat"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Basic")))),(0,r.kt)("h2",u({},{id:"access-to-xmlhttprequest-at-keycloak-from-origin-http1270013000-has-been-blocked-by-cors-policy-no-access-control-allow-origin-header-is-present-on-the-requested-resource"}),"Access to XMLHttpRequest at keycloak from origin '",(0,r.kt)("a",u({parentName:"h2"},{href:"http://127.0.0.1:3000'"}),"http://127.0.0.1:3000'")," has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u903b\u8f91\u4e0a\u6765\u8bf4\u662f\u9700\u8981\u914d\u7f6e Client \u7684 Web Origins"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u540e\u8fd8\u662f\u51fa\u73b0"),(0,r.kt)("li",{parentName:"ul"},"curl \u6d4b\u8bd5\u6b63\u5e38"),(0,r.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6ca1\u6709\u53d1\u8d77 OPTIONS \u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u662f\u524d\u7aef\u4f7f\u7528\uff0c\u4e00\u5b9a\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"public"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u76f4\u63a5\u6d4b\u8bd5\u6709\u8fd4\u56de\ncurl \\\n  --verbose \\\n  --request OPTIONS \\\n  https://keycloak \\\n  --header 'Origin: http://127.0.0.1:3000' \\\n  --header 'Access-Control-Request-Headers: Origin, Accept, Content-Type' \\\n  --header 'Access-Control-Request-Method: POST'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"date: Fri, 15 Jan 2021 15:41:37 GMT\ncontent-length: 0\naccess-control-allow-headers: Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization\nx-xss-protection: 1; mode=block\nreferrer-policy: no-referrer\naccess-control-allow-origin: http://127.0.0.1:3000\naccess-control-allow-credentials: true\nstrict-transport-security: max-age=15724800; includeSubDomains\nx-content-type-options: nosniff\naccess-control-allow-methods: POST, OPTIONS\naccess-control-max-age: 3600\n")),(0,r.kt)("h2",u({},{id:"jwks-\u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5"}),"JWKs \u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u6240\u6709\u7b97\u6cd5\u90fd\u6709"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6709 Public key \u7684\u7b97\u6cd5")),(0,r.kt)("h2",u({},{id:"\u57df\u540d\u6620\u5c04\u57df"}),"\u57df\u540d\u6620\u5c04\u57df"),(0,r.kt)("p",null,"\u6ca1\u6709\u5f88\u597d\u7684\u529e\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://keycloak.discourse.group/t/1833"}),"One domain per realm, disabling unrelated keycloak pages"))))),(0,r.kt)("h2",u({},{id:"unexpected-error-when-authenticating-with-identity-provider"}),"Unexpected error when authenticating with identity provider"),(0,r.kt)("p",null,"\u53ef\u5f00\u542f login \u65e5\u5fd7\u6392\u67e5\u5177\u4f53\u9519\u8bef"),(0,r.kt)("p",null,"\u5982\u679c\u5bf9\u65b9\u6ca1\u51fa\u95ee\u9898\uff0c\u68c0\u67e5\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u53d1\u73b0 \u5f00\u542f back-channel logout \u4e14\u8bbe\u7f6e\u4e3a basic auth \u89e3\u51b3\u4e86\u95ee\u9898\u3002"),(0,r.kt)("h2",u({},{id:"ispn000474-error-processing-request-4sparkle-stack-keycloak-76f867dd87-nkpcl-protostreamcomgoogleprotobufinvalidprotocolbufferexception-while-parsing-a-protocol-message-the-input-ended-unexpectedly-in-the-middle-of-a-field-this-could-mean-either-that-the-input-has-been-truncated-or-that-an-embedded-message-misreported-its-own-length"}),"ISPN000474: Error processing request 4@sparkle-stack-keycloak-76f867dd87-nkpcl: protostream.com.google.protobuf.InvalidProtocolBufferException: While parsing a protocol message, the input ended unexpectedly in the middle of a field. This could mean either that the input has been truncated or that an embedded message misreported its own length."),(0,r.kt)("p",null,"Kubernetes \u4e0a\u90e8\u7f72\u4fee\u6539\u53d1\u73b0\u903b\u8f91\u4e3a KUBE_PING"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"env:\n  # https://github.com/codecentric/helm-charts/issues/149\n  - name: JGROUPS_DISCOVERY_PROTOCOL\n    value: kubernetes.KUBE_PING\n  - name: JGROUPS_DISCOVERY_PROPERTIES\n    value: dump_requests=true,port_range=0,namespace={{.Release.Namespace}}\n")),(0,r.kt)("h2",u({},{id:"failed-getting-json-response-from-kubernetes-client"}),"failed getting JSON response from Kubernetes Client"))}b.isMDXComponent=!0}}]);