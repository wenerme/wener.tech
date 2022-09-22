"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65220],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},83566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"LDIF"},c="LDIF",p={unversionedId:"service/auth/ldap/ldap-ldif",id:"service/auth/ldap/ldap-ldif",title:"LDIF",description:"- RFC2849 The LDAP Data Interchange Format (LDIF)",source:"@site/../notes/service/auth/ldap/ldap-ldif.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/ldap-ldif",permalink:"/notes/service/auth/ldap/ldap-ldif",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/auth/ldap/ldap-ldif.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"LDIF"},sidebar:"docs",previous:{title:"LDAP Glossary",permalink:"/notes/service/auth/ldap/ldap-glossary"},next:{title:"LDAP on macOS",permalink:"/notes/service/auth/ldap/ldap-macos"}},u={},d=[],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ldif"},"LDIF"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2849"},"RFC2849 The LDAP Data Interchange Format (LDIF)")),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6761\u8bb0\u5f55\u90fd\u901a\u8fc7 dn \u6307\u5411\u4e00\u4e2a\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u4f7f\u7528\u7a7a\u884c\u5206\u5272"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u884c\u53ef\u4ee5\u5305\u542b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LDAP \u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"changetype",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add - \u6dfb\u52a0 Entry - \u9ed8\u8ba4"),(0,l.kt)("li",{parentName:"ul"},"delete - \u5220\u9664 Entry"),(0,l.kt)("li",{parentName:"ul"},"modify - \u4fee\u6539\u5c5e\u6027 - \u5bf9\u5c5e\u6027\u589e\u5220\u4e5f\u662f\u4f7f\u7528 modify"),(0,l.kt)("li",{parentName:"ul"},"moddn/modrdn - \u79fb\u52a8 Entry"))),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u64cd\u4f5c - ",(0,l.kt)("inlineCode",{parentName:"li"},"changetype: modify"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add, delete, replace"))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u91ca ",(0,l.kt)("inlineCode",{parentName:"li"},"#")),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5272 ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," \u64cd\u4f5c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ldif"},"# \u65b0\u589e - \u9ed8\u8ba4\u4e3a\u65b0\u589e\ndn: ou=users,dc=home\nchangetype: add\nobjectclass: inetOrgPerson\ncn: \u9648\u5c0f\u660e\nsn: \u5c0f\u660e\nuid: cxm\n\ndn: uid=cxm,ou=users,dc=home\n# \u4fee\u6539 DN\nchangetype: moddn\nnewrdn: uid=c\n# \u5220\u9664\u4e4b\u524d DN\ndeleteoldrdn: 1\n# \u4fee\u6539\u4e0a\u7ea7\nnewsuperior: ou=admins,dc=home\n\ndn: cn=c,ou=users,dc=home\nchangetype: modify\nadd: telephoneNumber\ntelephoneNumber: +123 456 789\n-\ndelete: sn\n-\nreplace: description\ndescription: Wener\n\n# \u6dfb\u52a0\u4e00\u6761\u5c5e\u6027\ndn: cn=Paula Jensen, ou=Product Development, dc=airius, dc=com\nchangetype: modify\nadd: postaladdress\npostaladdress: 123 Anystreet $ Sunnyvale, CA $ 94086\n")))}m.isMDXComponent=!0}}]);