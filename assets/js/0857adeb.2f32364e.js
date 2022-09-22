"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12493],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return d}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(h,c(c({ref:t},o),{},{components:a})):r.createElement(h,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<l;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35101:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return b}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&o(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&o(e,a,t[a]);return e};const m={title:"Apache Directory"},d="Apache DS",h={unversionedId:"service/auth/ldap/apacheds",id:"service/auth/ldap/apacheds",title:"Apache Directory",description:"- Apache Directory\u2122",source:"@site/../notes/service/auth/ldap/apacheds.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/apacheds",permalink:"/notes/service/auth/ldap/apacheds",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/ldap/apacheds.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"Apache Directory"},sidebar:"docs",previous:{title:"ApacheDS \u8fd0\u7ef4",permalink:"/notes/service/auth/ldap/apacheds-ops"},next:{title:"LDAP Awesome",permalink:"/notes/service/auth/ldap/awesome"}},f={},b=[{value:"Schema",id:"schema",level:2},{value:"\u624b\u52a8\u5b89\u88c5",id:"\u624b\u52a8\u5b89\u88c5",level:2}],k={toc:b};function y(e){var t,a=e,{components:n}=a,o=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),o),l(t,c({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"apache-ds"}),"Apache DS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://directory.apache.org/"}),"Apache Directory\u2122"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LDAP \u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"Kerberos \u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7aef\u4e3a\u81ea\u5b9a\u4e49 DB - \u9700\u8981\u78c1\u76d8\u7a7a\u95f4\u5b58\u50a8\uff0c\u4e0d\u652f\u6301 DB"))),(0,r.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91\u955c\u50cf\u4e0b\u8f7d ",(0,r.kt)("a",u({parentName:"li"},{href:"http://mirrors.aliyun.com/apache/directory/"}),"http://mirrors.aliyun.com/apache/directory/")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6388\u6743",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uid=admin,ou=system"),(0,r.kt)("li",{parentName:"ul"},"secret"))),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u9879\u76ee",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ApacheDS - Directory Server - LDAP \u670d\u52a1\u5668"),(0,r.kt)("li",{parentName:"ul"},"Apache Directory Studio - \u57fa\u4e8e Eclipse \u7684\u684c\u9762\u7ba1\u7406\u5de5\u5177"),(0,r.kt)("li",{parentName:"ul"},"LDAP API 1.x"),(0,r.kt)("li",{parentName:"ul"},"LDAP API 2.x"),(0,r.kt)("li",{parentName:"ul"},"Mavibot - \u540e\u7aef\u7684 KV \u5b58\u50a8 - MVCC+BTree"),(0,r.kt)("li",{parentName:"ul"},"Fortress - \u57fa\u4e8e\u89d2\u8272\u548c\u5c5e\u6027\u7684\u8bbf\u95ee\u63a7\u5236\u6388\u6743\u7cfb\u7edf\uff0c\u5c06\u7ba1\u7406\u548c\u5bc6\u7801\u7b56\u7565\u4ea4\u7531\u540e\u7aef LDAP \u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"SCIMple"),(0,r.kt)("li",{parentName:"ul"},"Kerby - Java Kerberos",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c KDC"),(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e0d\u5c11 KDC \u5de5\u5177"))))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"10389 - LDAP"),(0,r.kt)("li",{parentName:"ul"},"10636 - LDAPs"),(0,r.kt)("li",{parentName:"ul"},"60088 - Kerberos"),(0,r.kt)("li",{parentName:"ul"},"60464 - Kerberos \u4fee\u6539\u5bc6\u7801\u670d\u52a1"))),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u57df\u540d\u9700\u8981\u5148\u6dfb\u52a0\u5206\u7247, \u6dfb\u52a0\u5206\u7247\u540e\u9700\u8981\u91cd\u542f\u540e\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206 schema \u662f\u7981\u7528\u7684, \u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"ou=schema")," \u4e0b\u542f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 posixAccount \u9700\u8981\u542f\u7528 nis , \u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"cn=nis,ou=schema")," \u4e2d, \u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"m-disable")," \u8bbe\u7f6e\u4e3a false"))))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/kwart/kerberos-using-apacheds/blob/master/src/main/java/org/jboss/test/kerberos/CreateKeytab.java"}),"CreateKeytab.java"))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Docker \u542f\u52a8\n# \u5982\u679c\u9700\u8981 kerberos -p 60088:60088 -p 60464:60464  -p 60088:60088/udp -p 60464:60464/udp\ndocker run --rm -it -e TZ=Asia/Shanghai \\\n    -p 10389:10389 -p 10636:10636 \\\n    -v $PWD/apacheds:/opt/apacheds/instances \\\n    --name apacheds wener/apacheds\n\n# \u6d4b\u8bd5\u670d\u52a1\u5668\u662f\u5426\u542f\u52a8\u6210\u529f\nldapmodify -H ldap://127.0.0.1:10389\n# \u5907\u4efd\u73b0\u6709\u6570\u636e\nldapsearch -D "uid=admin,ou=system" -w secret -p 10389 -h localhost -b "dc=example,dc=com" -s sub "(ObjectClass=*)" \'*\' + > backup.ldif\n# \u5224\u65ad\u7528\u6237\u662f\u5426\u5f52\u5c5e\u7ec4\nldapsearch -D "uid=admin,ou=system" -w secret -p 10389 -h localhost -b "dc=example,dc=com" -s sub  "(&(objectClass=person)(uid=wener)(memberof=CN=developer,OU=users,DC=example,DC=com))"\n')),(0,r.kt)("h2",u({},{id:"schema"}),"Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u9884\u5b9a\u4e49 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/directory-ldap-api/tree/master/ldap/schema/data/src/main/resources/schema/ou%3Dschema"}),"Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://directory.apache.org/apacheds/basic-ug/2.3.2-enabling-schema.html"}),"Enabling Schema"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'alias ldapsearch=\'ldapsearch -D "uid=admin,ou=system" -w secret -p 10389 -h localhost\'\n\n# \u67e5\u770b Schema\nldapsearch -b "cn=schema" -s base "(objectclass=subschema)" objectclasses\n')),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ldif"}),"# \u542f\u7528 schema\ndn: cn=nis,ou=schema\nchangetype: modify\ndelete: m-disabled\n")),(0,r.kt)("h2",u({},{id:"\u624b\u52a8\u5b89\u88c5"}),"\u624b\u52a8\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5f53\u524d\u6700\u65b0\u7248\u4e3a 2.0.0-M26\nver=2.0.0.M26\nwget http://mirrors.aliyun.com/apache/directory/apacheds/dist/$ver/apacheds-$ver.zip\nunzip apacheds-$ver.zip\ncd apacheds-$ver\n\n# apacheds.sh [<instance name>] <action>\n# instance \u9ed8\u8ba4\u4e3a default, action \u4e3a run,start,stop,status,repair\n# \u542f\u52a8\u670d\u52a1\nsh ./bin/apacheds.sh run\n")))}y.isMDXComponent=!0}}]);