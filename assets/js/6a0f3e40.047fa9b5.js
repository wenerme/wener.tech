"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45136],{49613:function(e,t,l){l.d(t,{Zo:function(){return N},kt:function(){return E}});var r=l(59496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},N=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,N=p(e,["components","mdxType","originalType","parentName"]),s=o(l),E=a,k=s["".concat(u,".").concat(E)]||s[E]||m[E]||n;return l?r.createElement(k,i(i({ref:t},N),{},{components:l})):r.createElement(k,i({ref:t},N))}));function E(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<n;o++)i[o]=l[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}s.displayName="MDXCreateElement"},37003:function(e,t,l){l.r(t),l.d(t,{assets:function(){return c},contentTitle:function(){return E},default:function(){return g},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return O}});var r=l(49613),a=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,N=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,m=(e,t)=>{for(var l in t||(t={}))u.call(t,l)&&N(e,l,t[l]);if(p)for(var l of p(t))o.call(t,l)&&N(e,l,t[l]);return e};const s={title:"PL/pgSQL"},E="PL/pgSQL",k={unversionedId:"db/relational/postgresql/postgresql-plpgsql",id:"db/relational/postgresql/postgresql-plpgsql",title:"PL/pgSQL",description:"- plpgsql",source:"@site/../notes/db/relational/postgresql/postgresql-plpgsql.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/plpgsql",permalink:"/notes/db/relational/postgresql/plpgsql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-plpgsql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1632926151,formattedLastUpdatedAt:"Sep 29, 2021",frontMatter:{title:"PL/pgSQL"},sidebar:"docs",previous:{title:"PostgreSQL PL",permalink:"/notes/db/relational/postgresql/pl"},next:{title:"PostgreSQL \u94fe\u63a5\u6c60",permalink:"/notes/db/relational/postgresql/pool"}},c={},O=[],T={toc:O};function g(e){var t,l=e,{components:a}=l,N=((e,t)=>{var l={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&o.call(e,r)&&(l[r]=e[r]);return l})(l,["components"]);return(0,r.kt)("wrapper",(t=m(m({},T),N),n(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"plpgsql"}),"PL/pgSQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.postgresql.org/docs/current/plpgsql.html"}),"plpgsql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.postgresql.org/docs/current/plpgsql-declarations.html"}),"declarations"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"%TYPE"),(0,r.kt)("li",{parentName:"ul"},"%ROWTYPE"))))),(0,r.kt)("li",{parentName:"ul"},"raise",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DEBUG, LOG, INFO, NOTICE, WARNING, EXCEPTION"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 EXCEPTION")))),(0,r.kt)("admonition",m({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u907f\u514d EXCEPTION - \u8fc7\u591a\u5f71\u54cd\u6027\u80fd"))),(0,r.kt)("admonition",m({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u60f3\u8981\u7ed3\u679c\u4f7f\u7528 PERFORM"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u903b\u8f91\u5bf9\u6bd4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IF expression THEN ...")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT expression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IF x < y THEN ...")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"PREPARE statement_name(integer, integer) AS SELECT $1 < $2")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u53e5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SELECT, INSERT, UPDATE, DELETE + INTO"),(0,r.kt)("li",{parentName:"ul"},"PERFORM - \u6267\u884c\u4e0d\u8fd4\u56de\u7ed3\u679c\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"EXECUTE - \u6267\u884c\u52a8\u6001\u6784\u5efa\u7684\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET [ CURRENT ] DIAGNOSTICS variable { = | := } item [ , ... ]"),"\n\u83b7\u53d6\u7ed3\u679c\u72b6\u6001",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ROW_COUNT"),(0,r.kt)("li",{parentName:"ul"},"PG_CONTEXT"))),(0,r.kt)("li",{parentName:"ul"},"NULL - noop"),(0,r.kt)("li",{parentName:"ul"},"COMMIT"),(0,r.kt)("li",{parentName:"ul"},"ROLLBACK"),(0,r.kt)("li",{parentName:"ul"},"RAISE"),(0,r.kt)("li",{parentName:"ul"},"ASSERT"))),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u6d41",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RETURN"),(0,r.kt)("li",{parentName:"ul"},"RETURN NEXT, RETURN QUERY, RETURN QUERY EXECUTE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u8fd4\u56de\u7ed3\u679c\uff0c\u8fd8\u9700\u8981\u6267\u884c RETURN \u624d\u4f1a\u8fd4\u56de"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u524d\u7ed3\u679c\u4f1a\u5168\u90e8\u5b58\u50a8 - \u56e0\u6b64\u4e0d\u8981\u8fd4\u56de\u5927\u91cf\u7684\u6570\u636e"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EXIT [ label ] [ WHEN boolean-expression ]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8df3\u51fa BLOCK - \u7c7b\u4f3c break"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTINUE [ label ] [ WHEN boolean-expression ]")),(0,r.kt)("li",{parentName:"ul"},"IF/THEN/ELSE/ELSIF/END IF"),(0,r.kt)("li",{parentName:"ul"},"CASE/WHEN/ELSE/END CASE"),(0,r.kt)("li",{parentName:"ul"},"LOOP/END LOOP"),(0,r.kt)("li",{parentName:"ul"},"WHILE/LOOP/END LOOP"),(0,r.kt)("li",{parentName:"ul"},"FOR/IN/LOOP/END LOOP - \u4fbf\u5229\u7ed3\u679c\u3001\u6570\u5b57"),(0,r.kt)("li",{parentName:"ul"},"FOREACH/IN ARRYAY/LOOP/END LOOP - \u4fbf\u5229\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"EXCEPTION/WHEN/THEN",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET STACKED DIAGNOSTICS variable { = | := } item [ , ... ]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5f02\u5e38\u4fe1\u606f"))))))),(0,r.kt)("li",{parentName:"ul"},"cursor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refcursor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CURSOR FOR SELECT * FROM tenk1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CURSOR (key integer) FOR SELECT * FROM tenk1 WHERE unique1 = key")))),(0,r.kt)("li",{parentName:"ul"},"OPEN/FOR"),(0,r.kt)("li",{parentName:"ul"},"OPEN/FOR EXECUTE"),(0,r.kt)("li",{parentName:"ul"},"FETCH/INTO"),(0,r.kt)("li",{parentName:"ul"},"MOVE - \u7c7b\u4f3c FETCH \u4f46\u4e0d\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE table SET ... WHERE CURRENT OF cursor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8981\u6c42 cursor \u6ca1\u6709 \u805a\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u6dfb\u52a0 FOR UPDATE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE FROM table WHERE CURRENT OF cursor")),(0,r.kt)("li",{parentName:"ul"},"CLOSE"),(0,r.kt)("li",{parentName:"ul"},"FOR/IN/LOOP/END LOOP"))),(0,r.kt)("li",{parentName:"ul"},"trigger",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b trigger - \u6570\u636e\u53d8\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b event_trigger - \u6570\u636e\u5e93\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"li"},"TG_<NAME>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NEW, OLD"),(0,r.kt)("li",{parentName:"ul"},"TG_NAME, TG_WHEN, TG_LEVEL, TG_OP, TG_RELID, TG_RELNAME"),(0,r.kt)("li",{parentName:"ul"},"TG_TABLE_NAME, TG_TABLE_SCHEMA"),(0,r.kt)("li",{parentName:"ul"},"TG_NARGS, TG_ARGV"),(0,r.kt)("li",{parentName:"ul"},"event - DDL - ",(0,r.kt)("a",m({parentName:"li"},{href:"https://www.postgresql.org/docs/current/event-trigger-matrix.html"}),"https://www.postgresql.org/docs/current/event-trigger-matrix.html"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TG_EVENT, TG_TAG"))))),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de NULL \u6216 record"),(0,r.kt)("li",{parentName:"ul"},"BEFORE row",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de NULL \u5219\u4e0d\u4f1a\u89e6\u53d1\u5b9e\u9645\u64cd\u4f5c - INSERT/UPDATE/DELETE"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 NEW \u8fd4\u56de\u4f1a\u4f7f\u7528\u65b0\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"DELETE \u8fd4\u56de\u5185\u5bb9\u65e0\u610f\u4e49\uff0c\u4f46\u9700\u8981 \u975e NULL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6b64\u65f6 NEW \u4e3a NULL\uff0c\u4e00\u822c\u8fd4\u56de OLD")))))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-sql",metastring:'title="\u6574\u4f53\u7ed3\u6784"',title:'"\u6574\u4f53\u7ed3\u6784"'}),"[ <<label>> ]\n[ DECLARE\n    declarations ]\nBEGIN\n    statements\nEND [ label ];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-sql",metastring:'title="print_strict_params \u8f85\u52a9\u8c03\u8bd5"',title:'"print_strict_params','\u8f85\u52a9\u8c03\u8bd5"':!0}),"CREATE FUNCTION get_userid(username text) RETURNS int\nAS $$\n#print_strict_params on\nDECLARE\nuserid int;\nBEGIN\n    SELECT users.userid INTO STRICT userid\n        FROM users WHERE users.username = get_userid.username;\n    RETURN userid;\nEND;\n$$ LANGUAGE plpgsql;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-sql",metastring:'title="FOR \u652f\u6301 REVERSE \u548c BY"',title:'"FOR',"\u652f\u6301":!0,REVERSE:!0,"\u548c":!0,'BY"':!0}),"FOR i IN REVERSE 10..1 BY 2 LOOP\n    -- i will take on the values 10,8,6,4,2 within the loop\nEND LOOP;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9690\u542b\u6700\u5916\u5c42 block - label \u4e3a\u51fd\u6570\u540d\u5b57",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b DIAGNOSTICS \u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u9690\u542b FOUND \u53d8\u91cf - \u5f53\u8bed\u53e5\u6709\u503c\u65f6\u4f1a\u8bbe\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SELECT INTO"),(0,r.kt)("li",{parentName:"ul"},"PERFORM"),(0,r.kt)("li",{parentName:"ul"},"UPDATE, INSERT, DELETE"),(0,r.kt)("li",{parentName:"ul"},"FETCH"),(0,r.kt)("li",{parentName:"ul"},"MOVE"),(0,r.kt)("li",{parentName:"ul"},"FOR, FOREACH"),(0,r.kt)("li",{parentName:"ul"},"RETURN QUERY, RETURN QUERY EXECUTE")))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-sql",metastring:'title="\u4f7f\u7528\u9690\u542b\u7684 FOUND \u53d8\u91cf"',title:'"\u4f7f\u7528\u9690\u542b\u7684',FOUND:!0,'\u53d8\u91cf"':!0}),"SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;\nIF NOT FOUND THEN\n    RAISE EXCEPTION 'employee % not found', myname;\nEND IF;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"select into STRICT \u5355\u4e2a record \u53ef\u80fd\u7684\u5f02\u5e38 code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NO_DATA_FOUND"),(0,r.kt)("li",{parentName:"ul"},"TOO_MANY_ROWS"))),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709 STRICT \u76f4\u63a5\u8fd4\u56de\u7b2c\u4e00\u6761\uff0c\u6ca1\u6709\u5219\u662f NULL")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"-- strict_multi_assignment\n-- too_many_rows\nSET plpgsql.extra_warnings TO 'shadowed_variables';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"#variable_conflict error\n#variable_conflict use_variable\n#variable_conflict use_column\n")))}g.isMDXComponent=!0}}]);