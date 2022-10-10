"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89299],{49613:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var r=a(59496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),p=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=p(a),m=t,_=v["".concat(c,".").concat(m)]||v[m]||s[m]||l;return a?r.createElement(_,o(o({ref:n},u),{},{components:a})):r.createElement(_,o({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=v;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},51651:function(e,n,a){a.r(n),a.d(n,{assets:function(){return g},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return v},metadata:function(){return _},toc:function(){return f}});var r=a(49613),t=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,a)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,s=(e,n)=>{for(var a in n||(n={}))c.call(n,a)&&u(e,a,n[a]);if(i)for(var a of i(n))p.call(n,a)&&u(e,a,n[a]);return e};const v={title:"JavaCC"},m="JavaCC",_={unversionedId:"languages/parser/javacc",id:"languages/parser/javacc",title:"JavaCC",description:"- JavaCC - The Java Parser Generator",source:"@site/../notes/languages/parser/javacc.md",sourceDirName:"languages/parser",slug:"/languages/parser/javacc",permalink:"/notes/languages/parser/javacc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/parser/javacc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"JavaCC"},sidebar:"docs",previous:{title:"Antlr 4",permalink:"/notes/languages/parser/antlr4"},next:{title:"ohmjs",permalink:"/notes/languages/parser/ohmjs"}},g={},f=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"\u8bed\u6cd5\u7ed3\u6784",id:"\u8bed\u6cd5\u7ed3\u6784",level:2}],E={toc:f};function O(e){var n,a=e,{components:t}=a,u=((e,n)=>{var a={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(n=s(s({},E),u),l(n,o({components:t,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"javacc"}),"JavaCC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://javacc.org/"}),"JavaCC")," - The Java Parser Generator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/javacc/javacc"}),"javacc/javacc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 LL(1) \u53ef LL(k)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LL(*)")),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684\u4ee3\u7801\u6ca1\u6709\u8fd0\u884c\u65f6\u4f9d\u8d56"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://javacc.org/grammar-library"}),"grammar repository"))),(0,r.kt)("h2",s({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.helger.maven</groupId>\n    <artifactId>ph-javacc-maven-plugin</artifactId>\n    <version>4.0.3</version>\n    <executions>\n        <execution>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>jjtree-javacc</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")),(0,r.kt)("h2",s({},{id:"\u9009\u9879"}),"\u9009\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),'"LOOKAHEAD" "=" java_integer_literal ";"\n|   "CHOICE_AMBIGUITY_CHECK" "=" java_integer_literal ";"\n|   "OTHER_AMBIGUITY_CHECK" "=" java_integer_literal ";"\n|   "STATIC" "=" java_boolean_literal ";"\n|   "SUPPORT_CLASS_VISIBILITY_PUBLIC" "=" java_boolean_literal ";"\n|   "DEBUG_PARSER" "=" java_boolean_literal ";"\n|   "DEBUG_LOOKAHEAD" "=" java_boolean_literal ";"\n|   "DEBUG_TOKEN_MANAGER" "=" java_boolean_literal ";"\n|   "ERROR_REPORTING" "=" java_boolean_literal ";"\n|   "JAVA_UNICODE_ESCAPE" "=" java_boolean_literal ";"\n|   "UNICODE_INPUT" "=" java_boolean_literal ";"\n|   "IGNORE_CASE" "=" java_boolean_literal ";"\n|   "USER_TOKEN_MANAGER" "=" java_boolean_literal ";"\n|   "USER_CHAR_STREAM" "=" java_boolean_literal ";"\n|   "BUILD_PARSER" "=" java_boolean_literal ";"\n|   "BUILD_TOKEN_MANAGER" "=" java_boolean_literal ";"\n|   "TOKEN_EXTENDS" "=" java_string_literal ";"\n|   "TOKEN_FACTORY" "=" java_string_literal ";"\n|   "TOKEN_MANAGER_USES_PARSER" "=" java_boolean_literal ";"\n|   "SANITY_CHECK" "=" java_boolean_literal ";"\n|   "FORCE_LA_CHECK" "=" java_boolean_literal ";"\n|   "COMMON_TOKEN_ACTION" "=" java_boolean_literal ";"\n|   "CACHE_TOKENS" "=" java_boolean_literal ";"\n|   "OUTPUT_DIRECTORY" "=" java_string_literal ";"\n')),(0,r.kt)("h2",s({},{id:"\u8bed\u6cd5\u7ed3\u6784"}),"\u8bed\u6cd5\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javacc"}),'/* \u9009\u9879 */\noptions{\n    UNICODE_INPUT=true;\n}\n\n/* \u89e3\u6790\u5668\u5b9a\u4e49 */\nPARSER_BEGIN(MyParser)\npackage me.wener.myparser;\nimport java.util.*;\nimport java.math.*;\nimport static me.wener.myparser.ParserHelper.*;\npublic class MyParser {\n\n}\nPARSER_END(MyParser)\n\n/* \u5ffd\u7565\u7684\u5185\u5bb9 */\nSKIP:\n{\n    " "\n|   "\\t"\n|   "\\r"\n|   "\\f"\n}\n\n/* \u8bcd\u6cd5\u5b9a\u4e49 */\nTOKEN: {\n    <LOGIC_OPERATOR: "&&" | "||" | "^" >\n    | <PREFXI_OPERATOR : "!">\n}\n\nTOKEN: {\n    < IDENTIFIER: <LETTER> (<LETTER>|<DIGIT>)*>\n    | < INTEGER: (<DIGIT>)+ >\n    | < #LETTER: ["a"-"z"] >\n    | < #DIGIT: ["0"-"9"] >\n    | < STRING:\n    "\'"\n    (\n        (~["\\\'","\\\\","\\n","\\r"])\n        |("\\\\"\n            ( ["n","t","b","r","f","\\\\","\'","\\""]\n            | ["0"-"7"] ( ["0"-"7"] )?\n            | ["0"-"3"] ["0"-"7"] ["0"-"7"]\n            )\n        )\n    )*\n    "\'"\n    >\n}\n\n/* \u8bed\u6cd5\u5b9a\u4e49 */\nTerm Term():{\n}{\n    "$" <IDENTIFIER> {return new VariableTerm().setName(token.image);}\n    | <INTEGER> {return new IntegerTerm().setValue(Long.parseLong(token.image));}\n    | <STRING> {return new StringTerm().setValue(token.image.substring(1,token.image.length()-1));}\n}\n')))}O.isMDXComponent=!0}}]);