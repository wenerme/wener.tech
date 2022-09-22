"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22902],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(u,".").concat(g)]||m[g]||p[g]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"sqlc"},u="sqlc",s={unversionedId:"languages/go/lib/sqlc",id:"languages/go/lib/sqlc",title:"sqlc",description:"- kyleconroy/sqlc \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/languages/go/lib/sqlc.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/sqlc",permalink:"/notes/languages/go/lib/sqlc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/sqlc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"sqlc"},sidebar:"docs",previous:{title:"rpcx",permalink:"/notes/languages/go/lib/rpcx"},next:{title:"tsuru",permalink:"/notes/languages/go/lib/tsuru"}},c={},p=[],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sqlc"},"sqlc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kyleconroy/sqlc"},"kyleconroy/sqlc")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQL \u6587\u4ef6\u751f\u6210 Go \u4ee3\u7801\u8fdb\u884c DB \u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u590d\u6742 SQL \u573a\u666f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://play.sqlc.dev/"},"Playground")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brandur.org/sqlc"},"How We Went All In on sqlc/pgx for Postgres + Go"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"sql \u91cc\u9700\u8981\u5305\u542b table \u5b9a\u4e49 - \u8f85\u52a9\u751f\u6210"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/kyleconroy/sqlc/cmd/sqlc\ndocker run --rm -v $(pwd):/src -w /src kjconroy/sqlc generate\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"sqlc.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"ersion: '1'\n# \u751f\u6210\u5305\npackages:\n  - name: 'db' # \u751f\u6210\u5305\u540d - \u9ed8\u8ba4 path \u7684 basename\n    path: 'internal/db' # \u751f\u6210\u4f4d\u7f6e\n    queries: './sql/query/' # \u67e5\u8be2 SQL \u4f4d\u7f6e\n    schema: './sql/schema/' # Schema SQL \u4f4d\u7f6e\n    engine: 'postgresql' # postgresql, mysql\n    emit_db_tags: false # \u751f\u6210 db tag\n    emit_prepared_queries: false # \u751f\u6210 prepare\n    emit_interface: false # Querier \u63a5\u53e3\n    emit_exact_table_names: false # \u5982\u679c\u4e3a true \u5219 struct \u4e0e\u8868\u540d\u76f8\u540c - \u5426\u5219\u4f1a\u81ea\u52a8\u4f7f\u7528\u5355\u6570\u5f62\u5f0f\n    emit_empty_slices: false # \u9ed8\u8ba4 :many \u6ca1\u6709\u7684\u65f6\u5019\u8fd4\u56de nil, true \u8fd4\u56de []\n    emit_json_tags: true # JSON tag\n    # \u5305\u7ea7\u522b\u8986\u76d6\n  - overrides: []\noverrides:\n  # \u7c7b\u578b\u8986\u76d6\n  - go_type: 'github.com/gofrs/uuid.UUID'\n    db_type: 'uuid'\n    nullable: false\n  # \u5217\u8986\u76d6\n  - column: 'authors.id'\n    go_type: 'github.com/segmentio/ksuid.KSUID'\n\n# Struct \u5b57\u6bb5\u540d\u6620\u5c04\nrename:\n  spotify_url: 'SpotifyURL'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: <name> <command>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name \u4f5c\u4e3a\u65b9\u6cd5\u540d"),(0,l.kt)("li",{parentName:"ul"},"command",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":exec")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":execresult")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) (sql.Result, error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":execrows")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) (int64, error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":many")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) ([]Schema, error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":one")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) (Schema, error)"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE authors (\n  id   BIGSERIAL PRIMARY KEY,\n  name text      NOT NULL,\n  bio  text\n);\n\n-- name: GetAuthor :one\nSELECT * FROM authors\nWHERE id = $1 LIMIT 1;\n\n-- name: ListAuthors :many\nSELECT * FROM authors\nORDER BY name;\n\n-- name: CreateAuthor :one\nINSERT INTO authors (\n  name, bio\n) VALUES (\n  $1, $2\n)\nRETURNING *;\n\n-- name: DeleteAuthor :exec\nDELETE FROM authors\nWHERE id = $1;\n")))}g.isMDXComponent=!0}}]);