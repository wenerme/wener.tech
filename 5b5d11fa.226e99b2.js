(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,O=m["".concat(b,".").concat(d)]||m[d]||u[d]||l;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},463:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1152)),b={id:"ldap-schema",title:"LDAP Schema"},c={unversionedId:"service/auth/ldap-schema",id:"service/auth/ldap-schema",isDocsHomePage:!1,title:"LDAP Schema",description:"- Combined Active Directory Schema Classes and Attributes for Windows Server",source:"@site/notes/service/auth/ldap-schema.md",slug:"/service/auth/ldap-schema",permalink:"/notes/service/auth/ldap-schema",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/ldap-schema.md",version:"current",sidebar:"docs",previous:{title:"LDIF",permalink:"/notes/service/auth/ldif"},next:{title:"LADP",permalink:"/notes/service/auth/ldap"}},i=[{value:"inetOrgPerson",id:"inetorgperson",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/download/details.aspx?id=23782"},"Combined Active Directory Schema Classes and Attributes for Windows Server"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ldf \u683c\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u53c2\u8003\uff0c\u5305\u542b\u53ef\u591a AD DS \u64cd\u4f5c\u5c5e\u6027"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/dkoudela/active-directory-to-openldap"},"Active Directory to OpenLdap"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c06 Active Directory \u8f6c\u4e3a OpenLdap")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),Object(l.b)("th",{parentName:"tr",align:null},"\u5168\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dn"),Object(l.b)("td",{parentName:"tr",align:null},"distinguished name"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e13\u6709\u540d\u79f0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cn"),Object(l.b)("td",{parentName:"tr",align:null},"Common Name"),Object(l.b)("td",{parentName:"tr",align:null},"\u901a\u7528\u540d\u3001\u5168\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dc"),Object(l.b)("td",{parentName:"tr",align:null},"Domain Component"),Object(l.b)("td",{parentName:"tr",align:null},"wener.me -> dc=wener,dc=me")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ou"),Object(l.b)("td",{parentName:"tr",align:null},"Organizational Unit"),Object(l.b)("td",{parentName:"tr",align:null},"\u7ec4\u7ec7\u5355\u4f4d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sn"),Object(l.b)("td",{parentName:"tr",align:null},"surname"),Object(l.b)("td",{parentName:"tr",align:null},"\u59d3")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"inetOrgPerson",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e38\u7528\u7684\u7ec4\u7ec7\u7528\u6237\u7c7b")))),Object(l.b)("p",null,"cn\nperson, organizationalPerson, user"),Object(l.b)("p",null,"uid\ninetOrgPerson, organizationalPerson"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ldif"},"# \u9648\u5c0f\u660e\ndn: uid=chenxiaoming,ou=users,dc=incos\nobjectClass: inetOrgPerson\nobjectClass: organizationalPerson\nobjectClass: person\nobjectClass: top\ncn: \u9648\u5c0f\u660e\nsn: \u9648\nuid: chenxiaoming\n")),Object(l.b)("h2",{id:"inetorgperson"},"inetOrgPerson"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Attribute"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uid"),Object(l.b)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"initials"),Object(l.b)("td",{parentName:"tr",align:null},"\u9996\u5b57\u6bcd")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sn"),Object(l.b)("td",{parentName:"tr",align:null},"\u59d3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"givenName"),Object(l.b)("td",{parentName:"tr",align:null},"\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cn"),Object(l.b)("td",{parentName:"tr",align:null},"\u540d\u5b57\u3001\u5168\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"displayName"),Object(l.b)("td",{parentName:"tr",align:null},"\u6635\u79f0\u3001\u663e\u793a\u540d\u79f0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mail"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"telephoneNumber"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mobile"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"roomNumber"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"carLicense"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"title"),Object(l.b)("td",{parentName:"tr",align:null},"\u804c\u4f4d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"employeeNumber"),Object(l.b)("td",{parentName:"tr",align:null},"\u5de5\u53f7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"employeeType"),Object(l.b)("td",{parentName:"tr",align:null},"\u5458\u5de5\u7c7b\u578b\uff0c\u4f8b\u5982 \u6b63\u5f0f\u5458\u5de5\uff0c\u517c\u804c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"o"),Object(l.b)("td",{parentName:"tr",align:null},"\u516c\u53f8\u540d\u79f0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ou"),Object(l.b)("td",{parentName:"tr",align:null},"\u90e8\u95e8\u540d\u79f0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"departmentNumber"),Object(l.b)("td",{parentName:"tr",align:null},"\u90e8\u95e8\u7f16\u53f7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jpegPhoto"),Object(l.b)("td",{parentName:"tr",align:null},"\u5934\u50cf\u3001\u4e8c\u8fdb\u5236\u6570\u636e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"photo"),Object(l.b)("td",{parentName:"tr",align:null},"\u5934\u50cf\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"manager"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e3b\u7ba1")))))}p.isMDXComponent=!0}}]);