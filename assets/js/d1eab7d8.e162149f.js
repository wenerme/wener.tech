"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99212],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),u=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=u(a),N=n,s=k["".concat(d,".").concat(N)]||k[N]||o[N]||l;return a?r.createElement(s,p(p({ref:e},m),{},{components:a})):r.createElement(s,p({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},31267:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return o}});var r=a(96600),n=a(27279),l=(a(59496),a(49613)),p=["components"],i={title:"ApacheDS \u8fd0\u7ef4"},d="ApacheDS \u8fd0\u7ef4",u={unversionedId:"service/auth/ldap/apacheds-ops",id:"service/auth/ldap/apacheds-ops",title:"ApacheDS \u8fd0\u7ef4",description:"ApacheDS \u76ee\u5f55\u8bbe\u8ba1",source:"@site/../notes/service/auth/ldap/apacheds-ops.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/apacheds-ops",permalink:"/notes/service/auth/ldap/apacheds-ops",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/auth/ldap/apacheds-ops.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ApacheDS \u8fd0\u7ef4"},sidebar:"docs",previous:{title:"ApacheDS Kerberos",permalink:"/notes/service/auth/ldap/apacheds-kerberos"},next:{title:"Apache Directory",permalink:"/notes/service/auth/ldap/apacheds"}},m={},o=[{value:"ApacheDS \u76ee\u5f55\u8bbe\u8ba1",id:"apacheds-\u76ee\u5f55\u8bbe\u8ba1",level:2},{value:"\u5220\u9664\u9ed8\u8ba4\u5206\u533a",id:"\u5220\u9664\u9ed8\u8ba4\u5206\u533a",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801",id:"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801",level:2},{value:"Nextcloud LDAP",id:"nextcloud-ldap",level:2},{value:"\u5206\u533a",id:"\u5206\u533a",level:2}],k={toc:o};function N(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apacheds-\u8fd0\u7ef4"},"ApacheDS \u8fd0\u7ef4"),(0,l.kt)("h2",{id:"apacheds-\u76ee\u5f55\u8bbe\u8ba1"},"ApacheDS \u76ee\u5f55\u8bbe\u8ba1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DN",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ou=users - \u7528\u6237",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid=test.cs"))),(0,l.kt)("li",{parentName:"ul"},"ou=groups - \u5206\u7ec4\u3001\u7ec4\u7ec7\u67b6\u6784",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid=company",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"objectclass: groupOfNames"))))),(0,l.kt)("li",{parentName:"ul"},"ou=roles - \u89d2\u8272",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid=admin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"objectclass: groupOfNames"))))),(0,l.kt)("li",{parentName:"ul"},"ou=services - \u670d\u52a1\u8d26\u53f7",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid=keycloak"),(0,l.kt)("li",{parentName:"ul"},"uid=nextcloud"))),(0,l.kt)("li",{parentName:"ul"},"dc=security - \u5b89\u5168\u76f8\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ou=services - \u5b89\u5168\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid=krbtgt",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"krb5PrincipalName: krbtgt/",(0,l.kt)("a",{parentName:"li",href:"mailto:EXAMPLE.COM@EXAMPLE.COM"},"EXAMPLE.COM@EXAMPLE.COM")),(0,l.kt)("li",{parentName:"ul"},"userPassword: randomKey"))),(0,l.kt)("li",{parentName:"ul"},"uid=kpasswd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"krb5PrincipalName: kadmin/",(0,l.kt)("a",{parentName:"li",href:"mailto:changepw@EXAMPLE.COM"},"changepw@EXAMPLE.COM")))),(0,l.kt)("li",{parentName:"ul"},"uid=ldap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"krb5PrincipalName: ldap/",(0,l.kt)("a",{parentName:"li",href:"mailto:example.net@EXAMPLE.COM"},"example.net@EXAMPLE.COM")))))))))),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u9009\u62e9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u4f53 inetOrgPerson",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53c2\u7167 ",(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2798"},"rfc2798")," \u9009\u7528\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7ec4 groupOfNames"),(0,l.kt)("li",{parentName:"ul"},"\u89d2\u8272 groupOfNames"))),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u9009\u62e9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid \u7528\u4e8e\u552f\u4e00\u6807\u793a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uid \u4e0d\u662f inetOrgPerson \u5f3a\u5236\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"cn \u548c sn \u662f\u5f3a\u5236\u5c5e\u6027")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ldif"},"# \u521b\u5efa\u57fa\u7840\u7ed3\u6784 - \u53ef\u66ff\u6362 basedn dc=example,dc=com\ndn: ou=users,dc=example,dc=com\nobjectclass: organizationalUnit\nou: users\n\ndn: ou=groups,dc=example,dc=com\nobjectclass: organizationalUnit\nou: groups\n\ndn: ou=roles,dc=example,dc=com\nobjectclass: organizationalUnit\nou: roles\n\ndn: ou=services,dc=example,dc=com\nobjectclass: organizationalUnit\nou: services\n\ndn: dc=security,dc=example,dc=com\nobjectclass: domain\ndc: security\n\ndn: ou=services,dc=security,dc=example,dc=com\nobjectclass: organizationalUnit\nou: services\n")),(0,l.kt)("h2",{id:"\u5220\u9664\u9ed8\u8ba4\u5206\u533a"},"\u5220\u9664\u9ed8\u8ba4\u5206\u533a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9012\u5f52\u5220\u9664\u914d\u7f6e\nldapdelete -r -H ldap://localhost:10389 -D uid=admin,ou=system -w secret ads-partitionId=example,ou=partitions,ads-directoryServiceId=default,ou=config\n")),(0,l.kt)("h2",{id:"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801"},"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ldif"},"# \u4fee\u6539\u9ed8\u8ba4 admin \u5bc6\u7801\ndn:uid=admin,ou=system\nchangetype: modify\nreplace: userPassword\n# \u65b0\u7684\u5bc6\u7801\nuserPassword: secret\n")),(0,l.kt)("h2",{id:"nextcloud-ldap"},"Nextcloud LDAP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./occ ldap:show-config s01\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"s01"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hasMemberOfFilterSupport"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"homeFolderNamingRule"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastJpegPhotoLookup"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapAgentName"),(0,l.kt)("td",{parentName:"tr",align:null},"uid=admin,ou=system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapAgentPassword"),(0,l.kt)("td",{parentName:"tr",align:null},"secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapAttributesForGroupSearch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapAttributesForUserSearch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapBackupHost"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapBackupPort"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapBase"),(0,l.kt)("td",{parentName:"tr",align:null},"dc=example,dc=com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapBaseGroups"),(0,l.kt)("td",{parentName:"tr",align:null},"ou=groups,dc=example,dc=com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapBaseUsers"),(0,l.kt)("td",{parentName:"tr",align:null},"ou=users,dc=example,dc=com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapCacheTTL"),(0,l.kt)("td",{parentName:"tr",align:null},"600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapConfigurationActive"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapDefaultPPolicyDN"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapDynamicGroupMemberURL"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapEmailAttribute"),(0,l.kt)("td",{parentName:"tr",align:null},"mail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapExperiencedAdmin"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapExpertUUIDGroupAttr"),(0,l.kt)("td",{parentName:"tr",align:null},"enrtyUUID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapExpertUUIDUserAttr"),(0,l.kt)("td",{parentName:"tr",align:null},"enrtyUUID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapExpertUsernameAttr"),(0,l.kt)("td",{parentName:"tr",align:null},"uid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapExtStorageHomeAttribute"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGidNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"gidNumber")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGroupDisplayName"),(0,l.kt)("td",{parentName:"tr",align:null},"cn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGroupFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"(objectclass=groupOfNames)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGroupFilterGroups"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGroupFilterMode"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGroupFilterObjectclass"),(0,l.kt)("td",{parentName:"tr",align:null},"inetOrgPerson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapGroupMemberAssocAttr"),(0,l.kt)("td",{parentName:"tr",align:null},"member")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapHost"),(0,l.kt)("td",{parentName:"tr",align:null},"ldap://192.168.1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapIgnoreNamingRules"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapLoginFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"`(&(")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapLoginFilterAttributes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapLoginFilterEmail"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapLoginFilterMode"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapLoginFilterUsername"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapNestedGroups"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapOverrideMainServer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapPagingSize"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapPort"),(0,l.kt)("td",{parentName:"tr",align:null},"10389")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapQuotaAttribute"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapQuotaDefault"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapTLS"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserAvatarRule"),(0,l.kt)("td",{parentName:"tr",align:null},"default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserDisplayName"),(0,l.kt)("td",{parentName:"tr",align:null},"cn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserDisplayName2"),(0,l.kt)("td",{parentName:"tr",align:null},"displayname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"(objectclass=inetOrgPerson)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserFilterGroups"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserFilterMode"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUserFilterObjectclass"),(0,l.kt)("td",{parentName:"tr",align:null},"inetOrgPerson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUuidGroupAttribute"),(0,l.kt)("td",{parentName:"tr",align:null},"auto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapUuidUserAttribute"),(0,l.kt)("td",{parentName:"tr",align:null},"auto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"turnOffCertCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"turnOnPasswordChange"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useMemberOfToDetectMembership"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("h2",{id:"\u5206\u533a"},"\u5206\u533a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ldif"},"")))}N.isMDXComponent=!0}}]);