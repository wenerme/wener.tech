(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{333:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(0),n(618)),i={id:"nextcloud-faq",title:"Nextcloud FAQ"},l={id:"service/file/nextcloud-faq",title:"Nextcloud FAQ",description:"# Nextcloud FAQ",source:"@site/../tricks/service/file/nextcloud-faq.md",permalink:"/notes/service/file/nextcloud-faq",sidebar:"docs",previous:{title:"Nextcloud \u914d\u7f6e",permalink:"/notes/service/file/nextcloud-config"},next:{title:"seaweedfs",permalink:"/notes/service/storage/seaweedfs"}},c=[{value:"Auto provisioning not allowed and user hello does not exist",id:"auto-provisioning-not-allowed-and-user-hello-does-not-exist",children:[]},{value:"Found an Attribute element with duplicated Name",id:"found-an-attribute-element-with-duplicated-name",children:[]},{value:'Command "maintenance:install" is not defined.',id:"command-maintenanceinstall-is-not-defined",children:[]},{value:"cURL error 28: Operation timed out after XXXXXX milliseconds",id:"curl-error-28-operation-timed-out-after-xxxxxx-milliseconds",children:[]},{value:"Error when trying to connect (Host violates local access rules)",id:"error-when-trying-to-connect-host-violates-local-access-rules",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"nextcloud-faq"},"Nextcloud FAQ"),Object(a.b)("h2",{id:"auto-provisioning-not-allowed-and-user-hello-does-not-exist"},"Auto provisioning not allowed and user hello does not exist"),Object(a.b)("h2",{id:"found-an-attribute-element-with-duplicated-name"},"Found an Attribute element with duplicated Name"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Keycloak"),Object(a.b)("li",{parentName:"ul"},"(Realm) -> Client Scopes -> role_list (saml) -> Mappers tab -> role list -> 'Single Role Attribute'.")),Object(a.b)("h2",{id:"command-maintenanceinstall-is-not-defined"},'Command "maintenance:install" is not defined.'),Object(a.b)("p",null,"\u5e94\u7528\u88ab\u91cd\u65b0\u5b89\u88c5\u4e86\uff0c\u56e0\u4e3a\u6ca1\u6709\u68c0\u6d4b\u5230 ",Object(a.b)("inlineCode",{parentName:"p"},"/var/www/html/version.php"),"\uff0c\u9700\u8981\u6ce8\u610f\u6302\u8f7d\u8def\u5f84"),Object(a.b)("h2",{id:"curl-error-28-operation-timed-out-after-xxxxxx-milliseconds"},"cURL error 28: Operation timed out after XXXXXX milliseconds"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/nextcloud/server/issues/18103"}),"#18103"))),Object(a.b)("h2",{id:"error-when-trying-to-connect-host-violates-local-access-rules"},"Error when trying to connect (Host violates local access rules)"),Object(a.b)("p",null,"\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"'allow_local_remote_servers'=>true,\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo -u www-data ./occ config:system:set allow_local_remote_servers --value=true --type=boolean\n")))}s.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);