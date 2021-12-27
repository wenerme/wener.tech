"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73076],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,N=c["".concat(u,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"entgo"},u=void 0,p={unversionedId:"languages/go/lib/ent",id:"languages/go/lib/ent",title:"entgo",description:"- ent/ent \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/languages/go/lib/ent.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/ent",permalink:"/notes/languages/go/lib/ent",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/ent.md",tags:[],version:"current",frontMatter:{title:"entgo"},sidebar:"docs",previous:{title:"chi",permalink:"/notes/languages/go/lib/chi"},next:{title:"fx",permalink:"/notes/languages/go/lib/fx"}},m=[{value:"Note",id:"note",children:[{value:"entql",id:"entql",children:[],level:3}],level:2},{value:"0.8",id:"08",children:[],level:2}],s={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent"},"ent/ent")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6e90\u81ea facebook, \u52a0\u5165 LF"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 RESTful \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4ee3\u7801\u751f\u6210\u7684 ORM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 MySQL, MariaDB, PostgreSQL, SQLite, Gremlin"))),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0\u4f7f\u7528 setter/getter"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210 gqlgen \u96c6\u6210\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u57fa\u4e8e struct \u5b9a\u4e49\u6a21\u578b\uff0c\u76f4\u63a5\u5b9a\u4e49 Fields, Indexes, Edges"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b9a\u4e49\u6821\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"\u80fd mixin \u516c\u5171\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 annotation \u81ea\u5b9a\u4e49\u4fe1\u606f"))))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 golang \u6570\u5b57\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"bool"),(0,l.kt)("li",{parentName:"ul"},"string"),(0,l.kt)("li",{parentName:"ul"},"time.Time"),(0,l.kt)("li",{parentName:"ul"},"[]byte"),(0,l.kt)("li",{parentName:"ul"},"JSON"),(0,l.kt)("li",{parentName:"ul"},"Enum"),(0,l.kt)("li",{parentName:"ul"},"UUID"),(0,l.kt)("li",{parentName:"ul"},"Other - \u81ea\u5b9a\u4e49 DB \u7c7b\u578b\u548c Go \u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5168\u5c40\u552f\u4e00 ID - int \u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"migrate.WithGlobalUniqueID"),(0,l.kt)("li",{parentName:"ul"},"ID \u524d\u9762\u90e8\u5206\u4e3a Table \u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},"ent_types \u8868\u7ef4\u62a4 \u8868\u540d->\u7d22\u5f15 \u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u4e00\u4e2a ID \u80fd\u83b7\u53d6\u5230\u7c7b\u578b\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"graphql Node ID \u9700\u8981\u8be5\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"github gql \u4f7f\u7528 String ID - \u683c\u5f0f\u4e3a base64 ",(0,l.kt)("inlineCode",{parentName:"li"},"04:User583231")))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/452#issuecomment-619430120"},"Neptune / Gremlin - experience compared to SQL backends"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ent \u65e9\u671f\u540e\u7aef\u4e3a Gremlin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ariga/entcache"},"ariga/entcache")),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6210\u5458\u6210\u7acb\u7684\u516c\u53f8 ",(0,l.kt)("a",{parentName:"li",href:"https://ariga.io/"},"https://ariga.io/")," operational data graph")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u5efa id \u5b57\u6bb5 - \u53ef\u8986\u76d6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u67e5\u8be2 Hook - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/833"},"ent/ent#833"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://entgo.io/docs/privacy/#multi-tenancy"},"privacy")," \u5b9e\u73b0\u7c7b\u578b\u529f\u80fd")))))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 upsert - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/139"},"ent/ent#139")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u8f6f\u5220\u9664 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/252"},"ent/ent#252")),(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054\u5173\u7cfb\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7ea7\u8054\u5220\u9664 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/407"},"ent/ent#407")),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d GoType \u8981\u6c42\u4e3a struct \u6216\u53ef\u6620\u5c04\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u591a\u6001 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/1048"},"#1048")),(0,l.kt)("li",{parentName:"ul"},"entql \u5d4c\u5957\u5206\u9875 N+1 \u95ee\u9898 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/issues/1180"},"#1180"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get entgo.io/ent/cmd/ent\n\ngo mod init <project>\nent init User\ngo generate ./ent\n\n# edge\ngo run entgo.io/ent/cmd/ent init Car Group\n")),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Validator \u4e0d\u80fd\u83b7\u53d6\u5230\u4e0a\u4e0b\u6587\uff0c\u4f1a cast \u6210\u5b9e\u9645\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"Save \u987a\u5e8f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u9ed8\u8ba4\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709 hooks",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6821\u9a8c\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u5b58"))),(0,l.kt)("li",{parentName:"ul"},"\u6709 hooks",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210 Mutator - \u6821\u9a8c\u3001\u4fdd\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c hook"))))),(0,l.kt)("li",{parentName:"ul"},"ent.Policy - \u8bbf\u95ee\u7b56\u7565\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u62e6\u622a\u63a7\u5236\u67e5\u8be2\u548c\u4fee\u6539 - \u6ca1\u6709 Action \u6982\u5ff5\uff0c\u53ea\u6709 Query \u548c Mutation"),(0,l.kt)("li",{parentName:"ul"},"\u4e09\u79cd\u51b3\u7b56\u7ed3\u679c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"privacy.Allow"),(0,l.kt)("li",{parentName:"ul"},"privacy.Deny"),(0,l.kt)("li",{parentName:"ul"},"privacy.Skip")))))),(0,l.kt)("h3",{id:"entql"},"entql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001 sql \u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u51fd\u6570")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"func"),(0,l.kt)("th",{parentName:"tr",align:null},"how"),(0,l.kt)("th",{parentName:"tr",align:null},"note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"equal_fold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOWER(col) = ${strings.ToLower(sub)}")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contains"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'col like ${"%"+sub+"%"}')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contains_fold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'col ilike ${"%"+sub+"%"}')),(0,l.kt)("td",{parentName:"tr",align:null},"pg ilike, mysql ",(0,l.kt)("inlineCode",{parentName:"td"},"COLLATE utf8mb4_general_ci LIKE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"has_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'col like ${prefix+"%"}')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"has_suffix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'col like ${"%"+suffix}')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"has_edge(edge,expr...)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'select * from account where has_edge(owningUser)\n--\nselect * from account where owning_user_id IS NOT NULL\n\nselect * from account where has_edge(owningUser,username = "wener")\n-- args [wener]\nSELECT * FROM "accounts" WHERE "accounts"."owning_user_id" IS NOT NULL AND "accounts"."owning_user_id" IN (SELECT "users"."id" FROM "users" WHERE "username" = $1)\n\nselect * from account where has_edge(owningUser,has_edge(department,name = "Test"))\n-- args [Test]\nSELECT * FROM "accounts" WHERE "accounts"."owning_user_id" IN (SELECT "users"."id" FROM "users" WHERE "users"."department_id" IN (SELECT "departments"."id" FROM "departments" WHERE "name" = $1))\n')),(0,l.kt)("h1",{id:"version"},"Version"),(0,l.kt)("h2",{id:"08"},"0.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"entc/gen",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://entgo.io/docs/templates/#global-annotations"},"\u5168\u5c40 Annotation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u6dfb\u52a0\u5230 gen.Config"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u914d\u7f6e entc"))))),(0,l.kt)("li",{parentName:"ul"},"entc/schema",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u4f7f\u7528\u5b9e\u9645 GoType - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/pull/1428"},"#1428"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4f8b\u5982 ID \u7c7b\u578b\uff0c\u4f1a\u751f\u6210\u5bf9\u5e94\u7684 SQL \u7c7b\u578b - \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"sql.NullString")))),(0,l.kt)("li",{parentName:"ul"},"UpdateOne \u652f\u6301 Select \u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u67e5\u8be2\u5173\u95ed DISTINCT - \u9ed8\u8ba4\u5f00\u542f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ent/ent/releases/tag/v0.8.0"},"v0.8.0"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Annotation struct {\n    Config *config.Config\n}\n\nfunc (Annotation) Name() string {\n    return "GQL"\n}\n\n// \u5168\u5c40\nvar _ schema.Annotation = (*Annotation)(nil)\n')))}c.isMDXComponent=!0}}]);