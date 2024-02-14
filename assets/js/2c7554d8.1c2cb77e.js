/*! For license information please see 2c7554d8.1c2cb77e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33384],{18504:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>E,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(2488),t=a(62780);const l={title:"JavaCC"},o="JavaCC",s={id:"languages/parser/javacc",title:"JavaCC",description:"- JavaCC - The Java Parser Generator",source:"@site/../notes/languages/parser/javacc.md",sourceDirName:"languages/parser",slug:"/languages/parser/javacc",permalink:"/notes/languages/parser/javacc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/parser/javacc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"JavaCC"},sidebar:"docs",previous:{title:"Antlr 4",permalink:"/notes/languages/parser/antlr/"},next:{title:"ohmjs",permalink:"/notes/languages/parser/ohmjs"}},i={},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"\u8bed\u6cd5\u7ed3\u6784",id:"\u8bed\u6cd5\u7ed3\u6784",level:2}];function _(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"javacc",children:"JavaCC"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://javacc.org/",children:"JavaCC"})," - The Java Parser Generator"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/javacc/javacc",children:"javacc/javacc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4 LL(1) \u53ef LL(k)"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"LL(*)"})}),"\n",(0,r.jsx)(n.li,{children:"\u751f\u6210\u7684\u4ee3\u7801\u6ca1\u6709\u8fd0\u884c\u65f6\u4f9d\u8d56"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://javacc.org/grammar-library",children:"grammar repository"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.helger.maven</groupId>\n    <artifactId>ph-javacc-maven-plugin</artifactId>\n    <version>4.0.3</version>\n    <executions>\n        <execution>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>jjtree-javacc</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"LOOKAHEAD" "=" java_integer_literal ";"\n|\t"CHOICE_AMBIGUITY_CHECK" "=" java_integer_literal ";"\n|\t"OTHER_AMBIGUITY_CHECK" "=" java_integer_literal ";"\n|\t"STATIC" "=" java_boolean_literal ";"\n|\t"SUPPORT_CLASS_VISIBILITY_PUBLIC" "=" java_boolean_literal ";"\n|\t"DEBUG_PARSER" "=" java_boolean_literal ";"\n|\t"DEBUG_LOOKAHEAD" "=" java_boolean_literal ";"\n|\t"DEBUG_TOKEN_MANAGER" "=" java_boolean_literal ";"\n|\t"ERROR_REPORTING" "=" java_boolean_literal ";"\n|\t"JAVA_UNICODE_ESCAPE" "=" java_boolean_literal ";"\n|\t"UNICODE_INPUT" "=" java_boolean_literal ";"\n|\t"IGNORE_CASE" "=" java_boolean_literal ";"\n|\t"USER_TOKEN_MANAGER" "=" java_boolean_literal ";"\n|\t"USER_CHAR_STREAM" "=" java_boolean_literal ";"\n|\t"BUILD_PARSER" "=" java_boolean_literal ";"\n|\t"BUILD_TOKEN_MANAGER" "=" java_boolean_literal ";"\n|\t"TOKEN_EXTENDS" "=" java_string_literal ";"\n|\t"TOKEN_FACTORY" "=" java_string_literal ";"\n|\t"TOKEN_MANAGER_USES_PARSER" "=" java_boolean_literal ";"\n|\t"SANITY_CHECK" "=" java_boolean_literal ";"\n|\t"FORCE_LA_CHECK" "=" java_boolean_literal ";"\n|\t"COMMON_TOKEN_ACTION" "=" java_boolean_literal ";"\n|\t"CACHE_TOKENS" "=" java_boolean_literal ";"\n|\t"OUTPUT_DIRECTORY" "=" java_string_literal ";"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5\u7ed3\u6784",children:"\u8bed\u6cd5\u7ed3\u6784"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javacc",children:'/* \u9009\u9879 */\noptions{\n    UNICODE_INPUT=true;\n}\n\n/* \u89e3\u6790\u5668\u5b9a\u4e49 */\nPARSER_BEGIN(MyParser)\npackage me.wener.myparser;\nimport java.util.*;\nimport java.math.*;\nimport static me.wener.myparser.ParserHelper.*;\npublic class MyParser {\n\n}\nPARSER_END(MyParser)\n\n/* \u5ffd\u7565\u7684\u5185\u5bb9 */\nSKIP:\n{\n    " "\n|   "\\t"\n|   "\\r"\n|   "\\f"\n}\n\n/* \u8bcd\u6cd5\u5b9a\u4e49 */\nTOKEN: {\n    <LOGIC_OPERATOR: "&&" | "||" | "^" >\n    | <PREFXI_OPERATOR : "!">\n}\n\nTOKEN: {\n    < IDENTIFIER: <LETTER> (<LETTER>|<DIGIT>)*>\n    | < INTEGER: (<DIGIT>)+ >\n    | < #LETTER: ["a"-"z"] >\n    | < #DIGIT: ["0"-"9"] >\n    | < STRING:\n    "\'"\n    (\n        (~["\\\'","\\\\","\\n","\\r"])\n        |("\\\\"\n            ( ["n","t","b","r","f","\\\\","\'","\\""]\n            | ["0"-"7"] ( ["0"-"7"] )?\n            | ["0"-"3"] ["0"-"7"] ["0"-"7"]\n            )\n        )\n    )*\n    "\'"\n    >\n}\n\n/* \u8bed\u6cd5\u5b9a\u4e49 */\nTerm Term():{\n}{\n    "$" <IDENTIFIER> {return new VariableTerm().setName(token.image);}\n    | <INTEGER> {return new IntegerTerm().setValue(Long.parseLong(token.image));}\n    | <STRING> {return new StringTerm().setValue(token.image.substring(1,token.image.length()-1));}\n}\n'})})]})}function E(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},38088:(e,n,a)=>{var r=a(96651),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var r,l={},c=null,_=null;for(r in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(_=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:_,props:l,_owner:s.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},2488:(e,n,a)=>{e.exports=a(38088)},62780:(e,n,a)=>{a.d(n,{I:()=>s,M:()=>o});var r=a(96651);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);