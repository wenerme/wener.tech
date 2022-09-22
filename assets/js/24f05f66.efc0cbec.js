"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6481],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,f=m["".concat(u,".").concat(g)]||m[g]||p[g]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14085:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(96600),a=t(27279),l=(t(59496),t(49613)),o=["components"],i={title:"sqlc"},u=void 0,c={unversionedId:"languages/go/lib/sqlc",id:"languages/go/lib/sqlc",title:"sqlc",description:"- kyleconroy/sqlc \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/languages/go/lib/sqlc.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/sqlc",permalink:"/notes/languages/go/lib/sqlc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/sqlc.md",tags:[],version:"current",frontMatter:{title:"sqlc"},sidebar:"docs",previous:{title:"rpcx",permalink:"/notes/languages/go/lib/rpcx"},next:{title:"tsuru",permalink:"/notes/languages/go/lib/tsuru"}},s={},p=[],m={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kyleconroy/sqlc"},"kyleconroy/sqlc")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQL \u6587\u4ef6\u751f\u6210 Go \u4ee3\u7801\u8fdb\u884c DB \u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u590d\u6742 SQL \u573a\u666f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://play.sqlc.dev/"},"Playground")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brandur.org/sqlc"},"How We Went All In on sqlc/pgx for Postgres + Go"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"sql \u91cc\u9700\u8981\u5305\u542b table \u5b9a\u4e49 - \u8f85\u52a9\u751f\u6210"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/kyleconroy/sqlc/cmd/sqlc\ndocker run --rm -v $(pwd):/src -w /src kjconroy/sqlc generate\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"sqlc.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"ersion: '1'\n# \u751f\u6210\u5305\npackages:\n  - name: 'db' # \u751f\u6210\u5305\u540d - \u9ed8\u8ba4 path \u7684 basename\n    path: 'internal/db' # \u751f\u6210\u4f4d\u7f6e\n    queries: './sql/query/' # \u67e5\u8be2 SQL \u4f4d\u7f6e\n    schema: './sql/schema/' # Schema SQL \u4f4d\u7f6e\n    engine: 'postgresql' # postgresql, mysql\n    emit_db_tags: false # \u751f\u6210 db tag\n    emit_prepared_queries: false # \u751f\u6210 prepare\n    emit_interface: false # Querier \u63a5\u53e3\n    emit_exact_table_names: false # \u5982\u679c\u4e3a true \u5219 struct \u4e0e\u8868\u540d\u76f8\u540c - \u5426\u5219\u4f1a\u81ea\u52a8\u4f7f\u7528\u5355\u6570\u5f62\u5f0f\n    emit_empty_slices: false # \u9ed8\u8ba4 :many \u6ca1\u6709\u7684\u65f6\u5019\u8fd4\u56de nil, true \u8fd4\u56de []\n    emit_json_tags: true # JSON tag\n    # \u5305\u7ea7\u522b\u8986\u76d6\n  - overrides: []\noverrides:\n  # \u7c7b\u578b\u8986\u76d6\n  - go_type: 'github.com/gofrs/uuid.UUID'\n    db_type: 'uuid'\n    nullable: false\n  # \u5217\u8986\u76d6\n  - column: 'authors.id'\n    go_type: 'github.com/segmentio/ksuid.KSUID'\n\n# Struct \u5b57\u6bb5\u540d\u6620\u5c04\nrename:\n  spotify_url: 'SpotifyURL'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: <name> <command>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name \u4f5c\u4e3a\u65b9\u6cd5\u540d"),(0,l.kt)("li",{parentName:"ul"},"command",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":exec")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":execresult")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) (sql.Result, error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":execrows")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) (int64, error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":many")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) ([]Schema, error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":one")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"func (q *Queries) Name(ctx context.Context) (Schema, error)"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE authors (\n  id   BIGSERIAL PRIMARY KEY,\n  name text      NOT NULL,\n  bio  text\n);\n\n-- name: GetAuthor :one\nSELECT * FROM authors\nWHERE id = $1 LIMIT 1;\n\n-- name: ListAuthors :many\nSELECT * FROM authors\nORDER BY name;\n\n-- name: CreateAuthor :one\nINSERT INTO authors (\n  name, bio\n) VALUES (\n  $1, $2\n)\nRETURNING *;\n\n-- name: DeleteAuthor :exec\nDELETE FROM authors\nWHERE id = $1;\n")))}g.isMDXComponent=!0}}]);