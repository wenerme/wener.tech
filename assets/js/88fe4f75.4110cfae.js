"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95124],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),s=r,N=c["".concat(u,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57116:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],o={title:"Keycloak Authz"},u=void 0,p={unversionedId:"service/auth/keycloak/keycloak-authz",id:"service/auth/keycloak/keycloak-authz",title:"Keycloak Authz",description:"- \u6388\u6743\u670d\u52a1",source:"@site/notes/service/auth/keycloak/keycloak-authz.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-authz",permalink:"/notes/service/auth/keycloak/keycloak-authz",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-authz.md",tags:[],version:"current",frontMatter:{title:"Keycloak Authz"},sidebar:"docs",previous:{title:"Keycloak AuthN",permalink:"/notes/service/auth/keycloak/keycloak-authn"},next:{title:"Keycloak Awesome",permalink:"/notes/service/auth/keycloak/keycloak-awesome"}},m={},k=[{value:"PEP",id:"pep",level:2},{value:"UMA",id:"uma",level:2},{value:"Example",id:"example",level:2}],c={toc:k};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/authorization_services/"},"\u6388\u6743\u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236\u65b9\u5f0f / Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ABAC - Attribute-based access control - \u57fa\u4e8e\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"RBAC- Role-based access control - \u57fa\u4e8e\u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},"UBAC - User-based access control - \u57fa\u4e8e\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},"CBAC - Context-based access control - \u57fa\u4e8e\u4e0a\u4e0b\u6587"),(0,l.kt)("li",{parentName:"ul"},"Rule-based access control - \u57fa\u4e8e\u89c4\u5219",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 JavaScript"))),(0,l.kt)("li",{parentName:"ul"},"Time-based access control - \u57fa\u4e8e\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7b56\u7565 SPI (Service Provider Interface) \u81ea\u5b9a\u4e49\u8bbf\u95ee\u63a7\u5236\u673a\u5236 (ACMs - access control mechanisms)")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"abbr"),(0,l.kt)("th",{parentName:"tr",align:null},"detail"),(0,l.kt)("th",{parentName:"tr",align:null},"role"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAP"),(0,l.kt)("td",{parentName:"tr",align:null},"Policy Administration Point"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin UI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PDP"),(0,l.kt)("td",{parentName:"tr",align:null},"Policy Decision Point"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization Services")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEP"),(0,l.kt)("td",{parentName:"tr",align:null},"Policy Enforcement Point"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u62e6\u622a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PIP"),(0,l.kt)("td",{parentName:"tr",align:null},"Policy Information Point"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b56\u7565\u4fe1\u606f")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6388\u6743\u6d41\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7ba1\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8d44\u6e90\u670d\u52a1 / Resource Server"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8d44\u6e90 / Resource",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 URL PATH, UUID, ID"))),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u5173\u8054\u8d44\u6e90\u57df / Scope",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5173\u8054 Action+Resource"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u8d44\u6e90\u5c5e\u6027\u5b9a\u4e49"))))),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u548c\u7b56\u7565\u7ba1\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7b56\u7565 / Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u8981\u6c42\u5339\u914d \u8d44\u6e90\u548c Scope"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 JavaScript \u5b9a\u4e49\u7b56\u7565"))),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6743\u9650 / Permission",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Resource + Scope + Policy -> grant/deny"))),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7b56\u7565\u5230\u6743\u9650"))),(0,l.kt)("li",{parentName:"ul"},"Policy Enforcement",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u4e2d\u6dfb\u52a0\u62e6\u622a\uff0c\u8bf7\u6c42 Keycloak \u8fdb\u884c\u9274\u6743"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/authorization_services/#_service_overview"},"Authorization Services")," - \u6388\u6743\u670d\u52a1 - \u63d0\u4f9b\u63a5\u53e3\u7ed9\u540e\u7aef\u8fdb\u884c\u6743\u9650\u4ea4\u4e92",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Token Endpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Token \u5305\u542b\u7b56\u7565\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"RPT - Requesting Party Token"))),(0,l.kt)("li",{parentName:"ul"},"Resource Management Endpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7ba1\u7406 - \u521b\u5efa\u3001\u5220\u9664\u3001FindByID\u3001Query"))),(0,l.kt)("li",{parentName:"ul"},"Permission Management Endpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Issue Permission Tickets"))))),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90/Protection API",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ee1\u8db3 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.kantarainitiative.org/uma/wg/oauth-uma-federated-authz-2.0-09.html"},"UMA")," \u89c4\u8303\u5b9a\u4e49\u7684\u8d44\u6e90\u6807\u8bc6\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 uma_protection scope"))),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650/Permission",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u51b3\u7b56\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unanimous - \u9ed8\u8ba4 - \u6240\u6709\u90fd\u5141\u8bb8"),(0,l.kt)("li",{parentName:"ul"},"Affirmative - \u81f3\u5c11\u4e00\u4e2a\u5141\u8bb8"),(0,l.kt)("li",{parentName:"ul"},"Consensus - \u81f3\u5c11\u4e00\u534a\u4ee5\u4e0a\u5141\u8bb8")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u62d2\u7edd\n$evaluation.deny();\n// \u5141\u8bb8\n$evaluation.grant();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface Evaluation {\n\n    /**\n     * Returns the {@link ResourcePermission} to be evaluated.\n     *\n     * @return the permission to be evaluated\n     */\n    ResourcePermission getPermission();\n\n    /**\n     * Returns the {@link EvaluationContext}. Which provides access to the whole evaluation runtime context.\n     *\n     * @return the evaluation context\n     */\n    EvaluationContext getContext();\n\n    /**\n     * Returns a {@link Realm} that can be used by policies to query information.\n     *\n     * @return a {@link Realm} instance\n     */\n    Realm getRealm();\n\n    /**\n     * Grants the requested permission to the caller.\n     */\n    void grant();\n\n    /**\n     * Denies the requested permission.\n     */\n    void deny();\n}\n\npublic interface EvaluationContext {\n    /**\n     * Returns the {@link Identity} that represents an entity (person or non-person) to which the permissions must be granted, or not.\n     *\n     * @return the identity to which the permissions must be granted, or not\n     */\n    Identity getIdentity();\n    /**\n     * Returns all attributes within the current execution and runtime environment.\n     *\n     * @return the attributes within the current execution and runtime environment\n     */\n    Attributes getAttributes();\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kc.time.date_time"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Current date and time - MM/dd/yyyy hh:mm:ss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kc.client.network.ip_address"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"IPv4 address of the client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kc.client.network.host"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Client\u2019s host name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kc.client.id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The client id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kc.client.user_agent"),(0,l.kt)("td",{parentName:"tr",align:null},"String[]"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the 'User-Agent' HTTP header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kc.realm.name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the realm")))),(0,l.kt)("h2",{id:"pep"},"PEP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/authorization_services/#_enforcer_overview"},"Policy Enforcers"))),(0,l.kt)("h2",{id:"uma"},"UMA"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/authorization_services/index.html#_service_authorization_uma_policy_api"},"Managing Resource Permissions using the Policy API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://${host}:${port}/auth/realms/${realm_name}/authz/protection/uma-policy/{resource_id}\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak-quickstarts/blob/latest/app-authz-uma-photoz/photoz-realm.json"},"https://github.com/keycloak/keycloak-quickstarts/blob/latest/app-authz-uma-photoz/photoz-realm.json"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Resource"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"URI"),(0,l.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Admin Resources"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://photoz.com/admin"},"http://photoz.com/admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/admin/*")),(0,l.kt)("td",{parentName:"tr",align:null},"admin:manage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User Profile Resource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://photoz.com/profile"},"http://photoz.com/profile")),(0,l.kt)("td",{parentName:"tr",align:null},"/profile"),(0,l.kt)("td",{parentName:"tr",align:null},"profile:view")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Album Resource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://photoz.com/album"},"http://photoz.com/album")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/album/*")),(0,l.kt)("td",{parentName:"tr",align:null},"album:delete",(0,l.kt)("br",null),"album:view")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Policies")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only Owner and Administrators Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=aggregate AFFIRMATIVE"),(0,l.kt)("li",{parentName:"ul"},"Administration Policy,Only Owner Policy"))),(0,l.kt)("li",{parentName:"ul"},"Administration Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=aggregate"),(0,l.kt)("li",{parentName:"ul"},"Any Admin Policy,Only From a Specific Client Address"))),(0,l.kt)("li",{parentName:"ul"},"Only Owner Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"script-only-owner.js"))),(0,l.kt)("li",{parentName:"ul"},"Any Admin Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=role logic=POSITIVE"),(0,l.kt)("li",{parentName:"ul"},"roles=admin"))),(0,l.kt)("li",{parentName:"ul"},"Only From a Specific Client Address",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"script-only-keycloak-domain-or-admin.js"))),(0,l.kt)("li",{parentName:"ul"},"Any User Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=role logic=POSITIVE"),(0,l.kt)("li",{parentName:"ul"},"roles=user,photoz-restful-api/manage-albums"))),(0,l.kt)("li",{parentName:"ul"},"Admin Resource Permission",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=resource logic=POSITIVE"),(0,l.kt)("li",{parentName:"ul"},"defaultResourceType=",(0,l.kt)("a",{parentName:"li",href:"http://photoz.com/admin"},"http://photoz.com/admin")),(0,l.kt)("li",{parentName:"ul"},"default=true"))),(0,l.kt)("li",{parentName:"ul"},"Album Resource Permission",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=scope logic=POSITIVE"),(0,l.kt)("li",{parentName:"ul"},"scopes=album:view,album:delete"),(0,l.kt)("li",{parentName:"ul"},"resources=Album Resource"))),(0,l.kt)("li",{parentName:"ul"},"View User Permission",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type=scope logic=POSITIVE"),(0,l.kt)("li",{parentName:"ul"},"scopes=profile:view")))))}s.isMDXComponent=!0}}]);