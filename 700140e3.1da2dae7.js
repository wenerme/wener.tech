(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(b,".").concat(s)]||u[s]||m[s]||l;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},555:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1169)),b={title:"entgo"},i={unversionedId:"languages/go/lib/ent",id:"languages/go/lib/ent",isDocsHomePage:!1,title:"entgo",description:"- ent/ent \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/languages/go/lib/ent.md",slug:"/languages/go/lib/ent",permalink:"/notes/languages/go/lib/ent",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/ent.md",version:"current",sidebar:"docs",previous:{title:"GORM",permalink:"/notes/languages/go/gorm"},next:{title:"fyne",permalink:"/notes/languages/go/lib/fyne"}},c=[{value:"Note",id:"note",children:[{value:"entql",id:"entql",children:[]}]},{value:"0.8",id:"08",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent"},"ent/ent")," \u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9879\u76ee\u6e90\u81ea facebook"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 RESTful \u63a5\u53e3"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u4ee3\u7801\u751f\u6210\u7684 ORM",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 MySQL, MariaDB, PostgreSQL, SQLite, Gremlin"))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0\u4f7f\u7528 setter/getter"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210 gqlgen \u96c6\u6210\u4ee3\u7801"),Object(l.b)("li",{parentName:"ul"},"\u7279\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u57fa\u4e8e struct \u5b9a\u4e49\u6a21\u578b\uff0c\u76f4\u63a5\u5b9a\u4e49 Fields, Indexes, Edges"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5b9a\u4e49\u6821\u9a8c"),Object(l.b)("li",{parentName:"ul"},"\u80fd mixin \u516c\u5171\u6a21\u578b"),Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0 annotation \u81ea\u5b9a\u4e49\u4fe1\u606f"))))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6240\u6709 golang \u6570\u5b57\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"bool"),Object(l.b)("li",{parentName:"ul"},"string"),Object(l.b)("li",{parentName:"ul"},"time.Time"),Object(l.b)("li",{parentName:"ul"},"[]byte"),Object(l.b)("li",{parentName:"ul"},"JSON"),Object(l.b)("li",{parentName:"ul"},"Enum"),Object(l.b)("li",{parentName:"ul"},"UUID"),Object(l.b)("li",{parentName:"ul"},"Other - \u81ea\u5b9a\u4e49 DB \u7c7b\u578b\u548c Go \u7c7b\u578b"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5168\u5c40\u552f\u4e00 ID - int \u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"migrate.WithGlobalUniqueID"),Object(l.b)("li",{parentName:"ul"},"ID \u524d\u9762\u90e8\u5206\u4e3a Table \u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"ent_types \u8868\u7ef4\u62a4 \u8868\u540d->\u7d22\u5f15 \u5173\u7cfb"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u4e00\u4e2a ID \u80fd\u83b7\u53d6\u5230\u7c7b\u578b\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"graphql Node ID \u9700\u8981\u8be5\u80fd\u529b"),Object(l.b)("li",{parentName:"ul"},"github gql \u4f7f\u7528 String ID - \u683c\u5f0f\u4e3a base64 ",Object(l.b)("inlineCode",{parentName:"li"},"04:User583231")))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/452#issuecomment-619430120"},"Neptune / Gremlin - experience compared to SQL backends"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ent \u65e9\u671f\u540e\u7aef\u4e3a Gremlin")))))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa id \u5b57\u6bb5 - \u53ef\u8986\u76d6")))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 upsert - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/139"},"ent/ent#139")),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u8f6f\u5220\u9664 - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/252"},"ent/ent#252")),Object(l.b)("li",{parentName:"ul"},"\u5173\u8054\u5173\u7cfb\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7ea7\u8054\u5220\u9664 - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/407"},"ent/ent#407")),Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d GoType \u8981\u6c42\u4e3a struct \u6216\u53ef\u6620\u5c04\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u591a\u6001 - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/1048"},"#1048")),Object(l.b)("li",{parentName:"ul"},"entql \u5d4c\u5957\u5206\u9875 N+1 \u95ee\u9898 - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/1180"},"#1180"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"go get entgo.io/ent/cmd/ent\n\ngo mod init <project>\nent init User\ngo generate ./ent\n\n# edge\ngo run entgo.io/ent/cmd/ent init Car Group\n")),Object(l.b)("h2",{id:"note"},"Note"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Validator \u4e0d\u80fd\u83b7\u53d6\u5230\u4e0a\u4e0b\u6587\uff0c\u4f1a cast \u6210\u5b9e\u9645\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"Save \u987a\u5e8f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u9ed8\u8ba4\u503c"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709 hooks",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6821\u9a8c\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u4fdd\u5b58"))),Object(l.b)("li",{parentName:"ul"},"\u6709 hooks",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u751f\u6210 Mutator - \u6821\u9a8c\u3001\u4fdd\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c hook"))))),Object(l.b)("li",{parentName:"ul"},"ent.Policy - \u8bbf\u95ee\u7b56\u7565\u63a7\u5236",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u62e6\u622a\u63a7\u5236\u67e5\u8be2\u548c\u4fee\u6539 - \u6ca1\u6709 Action \u6982\u5ff5\uff0c\u53ea\u6709 Query \u548c Mutation"),Object(l.b)("li",{parentName:"ul"},"\u4e09\u79cd\u51b3\u7b56\u7ed3\u679c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"privacy.Allow"),Object(l.b)("li",{parentName:"ul"},"privacy.Deny"),Object(l.b)("li",{parentName:"ul"},"privacy.Skip")))))),Object(l.b)("h3",{id:"entql"},"entql"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001 sql \u751f\u6210"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u51fd\u6570")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"func"),Object(l.b)("th",{parentName:"tr",align:null},"how"),Object(l.b)("th",{parentName:"tr",align:null},"note"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"equal_fold"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"LOWER(col) = ${strings.ToLower(sub)}")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"contains"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'col like ${"%"+sub+"%"}')),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"contains_fold"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'col ilike ${"%"+sub+"%"}')),Object(l.b)("td",{parentName:"tr",align:null},"pg ilike, mysql ",Object(l.b)("inlineCode",{parentName:"td"},"COLLATE utf8mb4_general_ci LIKE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"has_prefix"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'col like ${prefix+"%"}')),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"has_suffix"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'col like ${"%"+suffix}')),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"has_edge(edge,expr...)"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'select * from account where has_edge(owningUser)\n--\nselect * from account where owning_user_id IS NOT NULL\n\nselect * from account where has_edge(owningUser,username = "wener")\n-- args [wener]\nSELECT * FROM "accounts" WHERE "accounts"."owning_user_id" IS NOT NULL AND "accounts"."owning_user_id" IN (SELECT "users"."id" FROM "users" WHERE "username" = $1)\n\nselect * from account where has_edge(owningUser,has_edge(department,name = "Test"))\n-- args [Test]\nSELECT * FROM "accounts" WHERE "accounts"."owning_user_id" IN (SELECT "users"."id" FROM "users" WHERE "users"."department_id" IN (SELECT "departments"."id" FROM "departments" WHERE "name" = $1))\n')),Object(l.b)("h1",{id:"version"},"Version"),Object(l.b)("h2",{id:"08"},"0.8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"entc/gen"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://entgo.io/docs/templates/#global-annotations"},"\u5168\u5c40 Annotation"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f1a\u6dfb\u52a0\u5230 gen.Config"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u914d\u7f6e entc"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"entc/schema"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u4f7f\u7528\u5b9e\u9645 GoType - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ent/ent/pull/1428"},"#1428"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e4b\u524d\u4f8b\u5982 ID \u7c7b\u578b\uff0c\u4f1a\u751f\u6210\u5bf9\u5e94\u7684 SQL \u7c7b\u578b - \u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"sql.NullString")))),Object(l.b)("li",{parentName:"ul"},"UpdateOne \u652f\u6301 Select \u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u67e5\u8be2\u5173\u95ed DISTINCT - \u9ed8\u8ba4\u5f00\u542f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://github.com/ent/ent/releases/tag/v0.8.0"},"v0.8.0")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'type Annotation struct {\n    Config *config.Config\n}\n\nfunc (Annotation) Name() string {\n    return "GQL"\n}\n\n// \u5168\u5c40\nvar _ schema.Annotation = (*Annotation)(nil)\n')))}p.isMDXComponent=!0}}]);