"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40459],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return r?n.createElement(N,i(i({ref:t},s),{},{components:r})):n.createElement(N,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58479:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),i=["components"],p={title:"Parser FAQ",tags:["FAQ"]},o="Parser FAQ",u={unversionedId:"languages/parser/parser-faq",id:"languages/parser/parser-faq",title:"Parser FAQ",description:"Antlr vs PEG",source:"@site/../notes/languages/parser/parser-faq.md",sourceDirName:"languages/parser",slug:"/languages/parser/parser-faq",permalink:"/notes/languages/parser/parser-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/parser/parser-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Parser FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Parser Awesome",permalink:"/notes/languages/parser/parser-awesome"},next:{title:"Parser Glossary",permalink:"/notes/languages/parser/glossary"}},s={},m=[{value:"Antlr vs PEG",id:"antlr-vs-peg",level:2},{value:"OctetString",id:"octetstring",level:2}],c={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parser-faq"},"Parser FAQ"),(0,l.kt)("h2",{id:"antlr-vs-peg"},"Antlr vs PEG"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PEG - Parsing expression grammar",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u5957\u901a\u7528\u7684 \u89e3\u6790\u8868\u8fbe\u6587\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u8bed\u8a00\u6709\u4e0d\u540c\u5b9e\u73b0\uff0c\u4f46\u80fd\u529b\u548c\u5904\u7406\u903b\u8f91\u76f8\u540c"))),(0,l.kt)("li",{parentName:"ul"},"Antlr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"LL(*)")," \u8bed\u6cd5\u89e3\u6790\u5668\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u4e3a Java \u8bed\u8a00\uff0c\u53ef\u4ee5\u751f\u6210\u4e0d\u540c\u76ee\u6807\u8bed\u8a00")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e66\u5199\u8bed\u6cd5\u533a\u522b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PEG",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u7ed3\u6784\u66f4\u7b80\u5355\uff0c\u7c7b\u4f3c\u4e8e\u62fc\u88c5\u590d\u6742\u6b63\u5219\uff0c\u4e0d\u533a\u5206\u8bed\u6cd5\u548c\u8bcd\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u903b\u8f91\u81ea\u4e0a\u4e0b\u4e0b\u4e00\u6b21\u6027\u6267\u884c\u51fa\u7ed3\u679c"))),(0,l.kt)("li",{parentName:"ul"},"Antlr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u533a\u5206\u8bcd\u6cd5\u548c\u8bed\u6cd5 - Lexer \u548c Grammar"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6790\u662f\u6709\u5206\u8bcd\u903b\u8f91 - Tokenize"),(0,l.kt)("li",{parentName:"ul"},"\u5c06 Token \u653e\u5165 Grammar \u903b\u8f91\u5f97\u5230\u6700\u7ec8\u7684 AST")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6982\u5ff5\u7406\u8bba\u533a\u522b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PEG",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c CFG \u4f46\u5e76\u4e0d\u662f\u5b50\u96c6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"A{n}B{n}C{n}")," \u80fd\u8868\u8fbe\u4e0a\u4e0b\u6587\u76f8\u5173\u8bed\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u4e8c\u4e49\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A / AB")," \u6c38\u8fdc\u4e0d\u4f1a\u5339\u914d\u5230\u7b2c\u4e8c\u4e2a\u89c4\u5219"))),(0,l.kt)("li",{parentName:"ul"},"Lookahead \u53ef\u4ee5\u5305\u542b\u9012\u5f52",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c PEG \u4e0d\u5305\u542b\u9012\u5f52 LA \u5219\u53ef\u4ee5\u7ffb\u8bd1\u4e3a Antlr"))))),(0,l.kt)("li",{parentName:"ul"},"Antlr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LL(*)"),", CFG \u5b50\u96c6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A / AB")," \u53ef\u80fd\u5339\u914d\u7b2c\u4e8c\u4e2a\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"Lookahead \u53ea\u80fd\u662f\u7b80\u5355\u7684\u6a21\u5f0f - DFA")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u529f\u80fd\u533a\u522b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PEG",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u7b80\u5355\uff0c\u6bcf\u4e2a\u8bed\u8a00\u4e00\u822c\u90fd\u6709\u5b9e\u73b0\uff0c\u8bed\u6cd5\u4e0d\u540c\u4f46\u76f8\u4f3c"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6309\u9700\u6355\u83b7 text \u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u4e66\u5199\u590d\u6742\u8bed\u6cd5\u9700\u8981\u6ce8\u610f\u4f18\u5148\u7ea7 - ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Operator-precedence_parser"},"Operator-precedence parser")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5de6\u9012\u5f52"))),(0,l.kt)("li",{parentName:"ul"},"Antlr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5f3a\u5927\uff0c\u652f\u6301\u975e\u5e38\u591a\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},"\u5468\u8fb9\u5de5\u5177\u8f83\u591a - IDE \u652f\u6301")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-antlr"},"// PEG \u4f18\u5148\u7ea7 - \u6709\u5e8f\uff0c\u65e0\u6b67\u4e49\nAddExp: MultiExp ( '+' MultiExp)*\nMultiExp: Primary ( '*' Primary)\nPrimary: [0-9]+\n\n// Antlr \u4f18\u5148\u7ea7 - \u5de6\u9012\u5f52\nexpression\n  : expression '*' expression\n  | expression '+' expression\n  | Int\n  ;\nInt: [0-9]+ ;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1207.0443"},"Left Recursion in Parsing Expression Grammars"))))),(0,l.kt)("h2",{id:"octetstring"},"OctetString"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sequence of Byte"),(0,l.kt)("li",{parentName:"ul"},"ASN.1 OCTET STRING - TLV"),(0,l.kt)("li",{parentName:"ul"},"LDAP - OID",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1.3.6.1.4.1.1466.115.121.1.40"),(0,l.kt)("li",{parentName:"ul"},"Microsoft Active Directory 2.5.5.10"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/win32/seccertenroll/about-octet-string"},"https://docs.microsoft.com/en-us/windows/win32/seccertenroll/about-octet-string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ldapwiki.com/wiki/OctetString"},"https://ldapwiki.com/wiki/OctetString")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.iso.org/obp/ui/#iso:std:iso-iec:8825:-7:ed-2:v1:en"},"https://www.iso.org/obp/ui/#iso:std:iso-iec:8825:-7:ed-2:v1:en"))))))}k.isMDXComponent=!0}}]);