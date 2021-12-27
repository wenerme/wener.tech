"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91832],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},11249:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={title:"LDIF"},c=void 0,p={unversionedId:"service/auth/ldap/ldap-ldif",id:"service/auth/ldap/ldap-ldif",title:"LDIF",description:"- RFC2849 The LDAP Data Interchange Format (LDIF)",source:"@site/notes/service/auth/ldap/ldap-ldif.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/ldap-ldif",permalink:"/notes/service/auth/ldap/ldap-ldif",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/ldap/ldap-ldif.md",tags:[],version:"current",frontMatter:{title:"LDIF"},sidebar:"docs",previous:{title:"LDAP Glossary",permalink:"/notes/service/auth/ldap/ldap-glossary"},next:{title:"LDAP Schema",permalink:"/notes/service/auth/ldap/ldap-schema"}},u=[],d={toc:u};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2849"},"RFC2849 The LDAP Data Interchange Format (LDIF)")),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6761\u8bb0\u5f55\u90fd\u901a\u8fc7 dn \u6307\u5411\u4e00\u4e2a\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u4f7f\u7528\u7a7a\u884c\u5206\u5272"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u884c\u53ef\u4ee5\u5305\u542b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LDAP \u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"changetype",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add - \u6dfb\u52a0 Entry - \u9ed8\u8ba4"),(0,l.kt)("li",{parentName:"ul"},"delete - \u5220\u9664 Entry"),(0,l.kt)("li",{parentName:"ul"},"modify - \u4fee\u6539\u5c5e\u6027 - \u5bf9\u5c5e\u6027\u589e\u5220\u4e5f\u662f\u4f7f\u7528 modify"),(0,l.kt)("li",{parentName:"ul"},"moddn/modrdn - \u79fb\u52a8 Entry"))),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u64cd\u4f5c - ",(0,l.kt)("inlineCode",{parentName:"li"},"changetype: modify"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add, delete, replace"))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u91ca ",(0,l.kt)("inlineCode",{parentName:"li"},"#")),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5272 ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," \u64cd\u4f5c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ldif"},"# \u65b0\u589e - \u9ed8\u8ba4\u4e3a\u65b0\u589e\ndn: ou=users,dc=home\nchangetype: add\nobjectclass: inetOrgPerson\ncn: \u9648\u5c0f\u660e\nsn: \u5c0f\u660e\nuid: cxm\n\ndn: uid=cxm,ou=users,dc=home\n# \u4fee\u6539 DN\nchangetype: moddn\nnewrdn: uid=c\n# \u5220\u9664\u4e4b\u524d DN\ndeleteoldrdn: 1\n# \u4fee\u6539\u4e0a\u7ea7\nnewsuperior: ou=admins,dc=home\n\ndn: cn=c,ou=users,dc=home\nchangetype: modify\nadd: telephoneNumber\ntelephoneNumber: +123 456 789\n-\ndelete: sn\n-\nreplace: description\ndescription: Wener\n\n# \u6dfb\u52a0\u4e00\u6761\u5c5e\u6027\ndn: cn=Paula Jensen, ou=Product Development, dc=airius, dc=com\nchangetype: modify\nadd: postaladdress\npostaladdress: 123 Anystreet $ Sunnyvale, CA $ 94086\n")))}s.isMDXComponent=!0}}]);