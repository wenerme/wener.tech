/*! For license information please see 02742422.3971265e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29432],{67092:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(11527),s=r(47214);const t={title:"mikro-orm"},o="mikro-orm",l={id:"web/nodejs/mikro-orm",title:"mikro-orm",description:"- mikro-orm/mikro-orm",source:"@site/../notes/web/nodejs/mikro-orm.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/mikro-orm",permalink:"/notes/web/nodejs/mikro-orm",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/mikro-orm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1704730282,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"mikro-orm"},sidebar:"docs",previous:{title:"ffi-napi",permalink:"/notes/web/nodejs/ffi-napi"},next:{title:"Nodejs Awesome",permalink:"/notes/web/nodejs/awesome"}},a={},d=[{value:"RequestContext",id:"requestcontext",level:2},{value:"MikroORM v6",id:"mikroorm-v6",level:2},{value:"Transaction query already complete",id:"transaction-query-already-complete",level:2}];function c(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mikro-orm",children:"mikro-orm"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/mikro-orm/mikro-orm",children:"mikro-orm/mikro-orm"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT, Typescript"}),"\n",(0,i.jsx)(n.li,{children:"ORM"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 Data Mapper, Unit of Work, Identity Map"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 MongoDB, MySQL, MariaDB, PostgreSQL, SQLite"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["@mikro-orm/knex\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Builder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mikro-orm \u4f7f\u7528 knex\uff0c knex pool \u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"min:2, max:10"})]}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u590d\u6742\u591a\u6837\u7684 JOIN \u903b\u8f91"}),"\n",(0,i.jsxs)(n.li,{children:["\u9ed8\u8ba4 cascade \u4e3a persist\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65b0 entity \u603b\u4f1a persist - \u5ffd\u7565 cascade"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0d\u652f\u6301\u591a\u6001 ",(0,i.jsx)(n.a,{href:"https://github.com/mikro-orm/mikro-orm/issues/706",children:"#706"})]}),"\n",(0,i.jsxs)(n.li,{children:["ManyToOne join \u5fc5\u987b\u4e3a\u4e3b\u952e ",(0,i.jsx)(n.a,{href:"https://github.com/mikro-orm/mikro-orm/issues/593",children:"#593"})]}),"\n",(0,i.jsxs)(n.li,{children:["join \u5217\u4e0d\u80fd\u91cd\u590d\u5b9a\u4e49\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f8b\u5982 user, userId \u4e0d\u80fd\u540c\u65f6\u5b58\u5728"}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// \u8ba9 user \u548c userId \u540c\u65f6\u5b58\u5728\n@Property({ persist: false })\nget userId(): string {\n  return this.user.id;\n}\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5168\u5c40 filter ",(0,i.jsx)(n.a,{href:"https://github.com/mikro-orm/mikro-orm/issues/3009",children:"#3009"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const filters = em.applyFilters('EntityName', {}, {}, 'read');\nqb.andWhere(filters);\n"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# mongodb, mysql, mariadb, sqlite\nnpm add @mikro-orm/core @mikro-orm/postgresql\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "experimentalDecorators": true,\n  "emitDecoratorMetadata": true,\n  "esModuleInterop": true\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package\nimport { EntityManager } from '@mikro-orm/postgresql';\n\nconst orm = await MikroORM.init<PostgreSqlDriver>({\n  // \u81ea\u52a8\u53d1\u73b0\n  entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`\n  entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`\n  // entities: ['./dist/app/**/entities'],\n  // entitiesTs: ['./src/app/**/entities'],\n  // entities: ['./dist/app/**/entities/*.entity.js'],\n  // entitiesTs: ['./src/app/**/entities/*.entity.ts'],\n\n  // \u624b\u52a8\u914d\u7f6e\n  entities: [Author, Book, BookTag, Publisher, Test],\n  discovery: { disableDynamicFileAccess: true },\n\n  dbName: 'my-db-name',\n  type: 'postgresql',\n});\nconst em = orm.em as EntityManager;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mikro-orm.io/docs/configuration#using-environment-variables",children:"https://mikro-orm.io/docs/configuration#using-environment-variables"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm add -D @mikro-orm/cli\n# mikro-orm.config.js\nnpx mikro-orm\n\nmikro-orm generate-entities\n\n# by dlx\npnpm --package=@mikro-orm/cli dlx mikro-orm\n\nNODE_OPTIONS='--loader tsx' pnpm mikro-orm generate-entities --schema public -p ./src/server/db/entities/ -d\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mikro-orm.config.ts\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f9d\u8d56 ts-node"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type MinimalOptionalEntityFields =\n  | 'id'\n  | 'uid'\n  | 'createdAt'\n  | 'updatedAt'\n  | 'sid'\n  | 'tid'\n  | 'attributes'\n  | 'properties'\n  | 'extensions';\n\n@Entity({ abstract: true })\nexport abstract class MinimalBaseEntity<Entity extends MinimalBaseEntity<any>> extends BaseEntity<Entity, 'id'> {\n  // \u5728\u5b50\u7c7b\u4e2d\u5b9a\u4e49 - Base \u91cc\u7684\u5b9a\u4e49\u65e0\u6cd5\u8986\u76d6\n  [OptionalProps]?: MinimalOptionalEntityFields;\n\n  @PrimaryKey({ type: 'text', defaultRaw: 'public.gen_ulid()' })\n  id!: string;\n\n  //@PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })\n  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })\n  uid!: string;\n\n  @Property()\n  createdAt: Date = new Date();\n\n  @Property({ type: 'timestamptz', defaultRaw: 'current_timestamp' })\n  createdAt!: Date;\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt: Date = new Date();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"requestcontext",children:"RequestContext"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Middleware ",(0,i.jsx)(n.code,{children:"RequestContext.create(orm.em, next)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"version",children:"Version"}),"\n",(0,i.jsx)(n.h2,{id:"mikroorm-v6",children:"MikroORM v6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7c7b\u578b\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"populate \u7c7b\u578b\u5b89\u5168"}),"\n",(0,i.jsx)(n.li,{children:"Opt \u7c7b\u578b - \u89e3\u51b3\u4e4b\u524d\u9700\u8981 OptionalProps \u7684\u95ee\u9898\uff0c\u4e0d\u597d\u6269\u5c55"}),"\n",(0,i.jsx)(n.li,{children:"Hidden \u7c7b\u578b - \u5e8f\u5217\u5316\u540e\u5b57\u6bb5\u4e0d\u5b58\u5728"}),"\n",(0,i.jsx)(n.li,{children:"BaseEntity \u4e0d\u518d\u9700\u8981\u7c7b\u578b\u53c2\u6570\uff0c\u901a\u8fc7 PrimaryKeyProp \u5b9a\u4e49"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[Config]?: DefineConfig<{ forceObject: true }>;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5e8f\u5217\u5316\u540e\u7c7b\u578b\u4e3a object"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u67e5\u8be2\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["populate \u652f\u6301 ",(0,i.jsx)(n.code,{children:"*"})," - \u6240\u6709\uff0c\u4e4b\u524d\u7684 true"]}),"\n",(0,i.jsxs)(n.li,{children:["populate \u652f\u6301 ",(0,i.jsx)(n.code,{children:"$infer"})," - \u57fa\u4e8e\u67e5\u8be2"]}),"\n",(0,i.jsx)(n.li,{children:"Collection \u63a5\u53e3\u529f\u80fd\u5b8c\u5584 - \u7c7b\u4f3c \u6570\u7ec4"}),"\n",(0,i.jsx)(n.li,{children:"findByCursor - \u57fa\u4e8e\u6e38\u6807\u5206\u9875"}),"\n",(0,i.jsxs)(n.li,{children:["\u5173\u8054\u5b50\u67e5\u8be2 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"s"}),(0,i.jsx)(n.mi,{children:"o"}),(0,i.jsx)(n.mi,{children:"m"}),(0,i.jsx)(n.mi,{children:"e"}),(0,i.jsx)(n.mo,{separator:"true",children:","})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"some, "})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"so"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(n.span,{className:"mpunct",children:","})]})})]}),"none, $every"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["helper\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"rel"}),"\n",(0,i.jsx)(n.li,{children:"ref"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mikro-orm.io/docs/dataloaders",children:"dataloader"})}),"\n",(0,i.jsxs)(n.li,{children:["Logging\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 label\u3001context"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u6309\u9700\u5173\u95ed"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u6269\u5c55 EntityManager"}),"\n",(0,i.jsx)(n.li,{children:"\u89e3\u51b3\u9ed8\u8ba4 require \u63d2\u4ef6\u4f9d\u8d56\u95ee\u9898"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"MikroORM.initSync"})}),"\n",(0,i.jsxs)(n.li,{children:["\u5143\u6570\u636e\u751f\u6210 adapter\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GeneratedCacheAdapter"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"npx mikro-orm cache:generate --combined"})}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u907f\u514d reflect-metadata \u3001 @mikro-orm/reflection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"MikroORM.init({\n  metadataCache: {\n    enabled: true,\n    adapter: GeneratedCacheAdapter,\n    options: { data: require('./temp/metadata.json') },\n  },\n});\n\n//\nMikroORM.init({\n  dataloader: Dataloader.ALL,\n});\n"})}),"\n",(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"transaction-query-already-complete",children:"Transaction query already complete"})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3354:(e,n,r)=>{var i=r(50959),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,t={},d=null,c=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:d,ref:c,props:t,_owner:l.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var i=r(50959);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);