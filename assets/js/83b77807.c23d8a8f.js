"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13818],{48511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(96600),o=n(27279),a=(n(59496),n(3905)),l=["components"],i={title:"pg_cron"},c=void 0,p={unversionedId:"db/relational/postgresql/pg_cron",id:"db/relational/postgresql/pg_cron",title:"pg_cron",description:"- citusdata/pgcron",source:"@site/notes/db/relational/postgresql/pg_cron.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pg_cron",permalink:"/notes/db/relational/postgresql/pg_cron",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/pg_cron.md",tags:[],version:"current",frontMatter:{title:"pg_cron"},sidebar:"docs",previous:{title:"patroni",permalink:"/notes/db/relational/postgresql/patroni"},next:{title:"pgadmin4",permalink:"/notes/db/relational/postgresql/pgadmin4"}},s={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/citusdata/pg_cron"},"citusdata/pg_cron"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5143\u6570\u636e\u8868\u4f4d\u4e8e postgres \u5e93 - \u53ea\u6709\u5728\u7ed9\u5b9a\u5e93\u624d\u53ef\u4ee5 CREATE EXTENSION",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"schema \u4e3a cron"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"shared_preload_libraries = 'pg_cron'\ncron.database_name = 'postgres'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cron.schedule('nightly-vacuum', '0 3 * * *', 'VACUUM');\nSELECT cron.unschedule('nightly-vacuum' );\n\n-- \u76f4\u63a5\u8de8\u5e93\u64cd\u4f5c\nINSERT INTO cron.job (schedule, command, nodename, nodeport, database, username)\nVALUES ('*/1 * * * *', '\nDO $$\nBEGIN\n    delete from table_one;\n    delete from table_two;\n    delete from table_three;\nEND;\n$$;',\n        '/run/postgresql', 5432, 'my_dataabse', 'postgres');\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);