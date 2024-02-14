/*! For license information please see 1f97abfd.45b1c126.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43420],{85284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(2488),s=t(62780);const i={title:"CubeJS \u914d\u7f6e",tags:["Configuration"]},o="CubeJS \u914d\u7f6e",c={id:"service/bi/cubejs/cubejs-conf",title:"CubeJS \u914d\u7f6e",description:"- \u73af\u5883\u53d8\u91cf\u914d\u7f6e",source:"@site/../notes/service/bi/cubejs/cubejs-conf.md",sourceDirName:"service/bi/cubejs",slug:"/service/bi/cubejs/conf",permalink:"/notes/service/bi/cubejs/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/bi/cubejs/cubejs-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702440128,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"CubeJS \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"CubeJS",permalink:"/notes/service/bi/cubejs/"},next:{title:"CubeJS Frontend",permalink:"/notes/service/bi/cubejs/frontend"}},l={},a=[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"Multitenancy",id:"multitenancy",level:2},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cubejs-\u914d\u7f6e",children:"CubeJS \u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\u914d\u7f6e\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CUBEJS_DEV_MODE=true - \u5f00\u53d1\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.li,{children:"CUBEJS_APP - APP ID"}),"\n",(0,r.jsx)(n.li,{children:"CUBEJS_TELEMETRY=false"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://cube.dev/docs/reference/environment-variables",children:"Environment Variables"})}),"\n",(0,r.jsxs)(n.li,{children:["\u6620\u5c04\u65b9\u5f0f ",(0,r.jsx)(n.code,{children:"CUBEJS_DB_TYPE"})," -> ",(0,r.jsx)(n.code,{children:"dbType"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["cube.js \u914d\u7f6e\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://cube.dev/docs/config",children:"https://cube.dev/docs/config"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["dev mode\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65e0 auth"}),"\n",(0,r.jsx)(n.li,{children:"\u5355\u8282\u70b9 cubestore"}),"\n",(0,r.jsx)(n.li,{children:"background refresh for in-memory cache, cheduled pre-aggregations"}),"\n",(0,r.jsx)(n.li,{children:"log level trace"}),"\n",(0,r.jsxs)(n.li,{children:["playground ",(0,r.jsx)(n.a,{href:"http://localhost:4000",children:"http://localhost:4000"})]}),"\n",(0,r.jsx)(n.li,{children:"memory as the default cache/queue engine"}),"\n",(0,r.jsx)(n.li,{children:"log incorrect/invalid configuration for for externalRefresh /waitForRenew instead of throwing errors"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="cube.js"',children:"module.exports = {\n  telemetry: false,\n  logger: (msg, params) => {\n    console.log(`${msg}: ${JSON.stringify(params)}`);\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4e0a\u4e0b\u6587\u5173\u7cfb"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf7\u6c42 - ExpressRequest"}),"\n",(0,r.jsx)(n.li,{children:"appId - RequestContext"}),"\n",(0,r.jsx)(n.li,{children:"COMPILE_CONTEXT - RequestContext"}),"\n",(0,r.jsx)(n.li,{children:"jwt - securityContext"}),"\n",(0,r.jsxs)(n.li,{children:["SECURITY_CONTEXT - securityContext\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5c3d\u91cf\u4f7f\u7528 queryRewrite \u800c\u4e0d\u662f SECURITY_CONTEXT"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e row level security"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface CubejsConfiguration {\n  // Schema \u6587\u4ef6\u8def\u5f84 /schema\n  schemaPath: string;\n  // REST \u63a5\u53e3\u8def\u5f84 /cubejs-api\n  basePath: string;\n  // \u9ed8\u8ba4 /\n  webSocketsBasePath: string;\n  // \u81ea\u5b9a\u4e49 logger\n  // \u4f8b\u5982 console.log(`${msg}: ${JSON.stringify(params)}`);\n  logger: (msg: string, params: object) => any;\n\n  // \u6570\u636e\u5e93\u7c7b\u578b - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  dbType: string | ((context: RequestContext) => string);\n  // \u6570\u636e\u6e90\u914d\u7f6e - \u4e00\u4e2a\u6570\u636e\u6e90\u8bf7\u6c42\u4e00\u6b21\n  driverFactory: (context: DriverContext) => BaseDriver | Promise<BaseDriver>;\n  // \u5916\u90e8\u6570\u636e\u5e93\u7c7b\u578b - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  externalDbType: string | ((context: RequestContext) => string);\n  // \u5916\u90e8 rollup - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  externalDriverFactory: (context: RequestContext) => BaseDriver | Promise<BaseDriver>;\n\n  // AppID - \u6bcf\u6b21\u8bf7\u6c42\n  // \u7f13\u5b58 Key - schema compilation results, connection pool \u7b49\n  // \u4f8b\u5982 ({ securityContext }) => `CUBEJS_APP_${securityContext.tenantId}_${securityContext.user_id}`\n  contextToAppId: (context: RequestContext) => string;\n  // \u67e5\u8be2\u7f16\u6392\u7f13\u5b58 Key - \u9ed8\u8ba4\u4e3a appId - \u6bcf\u6b21\u8bf7\u6c42\n  // \u6570\u636e\u5e93\u8fde\u63a5, \u6267\u884c\u961f\u5217, \u9884\u805a\u5408\u8868\u7f13\u5b58\n  // \u4f8b\u5982 ({ securityContext }) => `CUBEJS_APP_${securityContext.tenantId}`\n  contextToOrchestratorId: (context: RequestContext) => string;\n  // Schema \u4ed3\u5e93 - \u6bcf AppID \u8bf7\u6c42\n  // \u5b9e\u73b0\u591a\u79df\u6237\u4e0d\u540c schema\n  // \u4f8b\u5982 ({ securityContext }) => new FileRepository(`schema/${securityContext.appId}`)\n  repositoryFactory: (context: RequestContext) => SchemaFileRepository;\n  // REST \u548c WebSockets API \u9274\u6743\n  // \u9ed8\u8ba4 \u68c0\u67e5 Authorization JWT\uff0c\u9a8c\u8bc1\u540e\u5185\u5bb9\u8bbe\u7f6e\u4e3a req.securityContext\n  // \u53ef\u7981\u7528 (req, auth) => {}\n  checkAuth: (req: ExpressRequest, authorization: string) => any;\n  // SQL API \u9274\u6743 - \u9ed8\u8ba4\u6821\u9a8c CUBE_SQL_USERNAME, CUBE_SQL_PASSWORD\n  checkSqlAuth: (req: SQLRequest, user: string) => any;\n  // \u67e5\u8be2\u6267\u884c\u524d\u7684\u989d\u5916\u68c0\u67e5\n  queryRewrite: (query: object, context: RequestContext) => object;\n  // \u9884\u805a\u5408 schema - \u63a8\u8350\u751f\u4ea7\u548c\u5f00\u53d1\u4f7f\u7528\u4e0d\u540c schema - \u6bcf\u4e2a appId \u8bf7\u6c42\u4e00\u6b21\n  // \u5f00\u53d1\u6a21\u5f0f\u9ed8\u8ba4 dev_pre_aggregations\n  // \u751f\u4ea7\u6a21\u5f0f\u9ed8\u8ba4 prod_pre_aggregations\n  preAggregationsSchema: string | ((context: RequestContext) => string);\n  // schema \u7248\u672c - \u786e\u5b9a\u4ec0\u4e48\u65f6\u5019\u91cd\u65b0\u7f16\u8bd1\n  schemaVersion: (context: RequestContext) => string;\n\n  scheduledRefreshTimer: boolean | number;\n  scheduledRefreshTimeZones: string[];\n  scheduledRefreshContexts: () => Promise<object[]>;\n\n  // \u6269\u5c55 RequestContext\n  extendContext: (req: ExpressRequest) => any;\n  // \u9ed8\u8ba4 250\n  compilerCacheSize: number;\n  // \u5355\u4f4d ms\n  maxCompilerCacheKeepAlive: number;\n  updateCompilerCacheKeepAlive: boolean;\n  allowUngroupedWithoutPrimaryKey: boolean;\n  telemetry: boolean;\n\n  http: {\n    cors: {\n      methods: string | string[];\n      origin: string;\n      allowedHeaders: string | string[];\n      exposedHeaders: string | string[];\n      credentials: boolean;\n      maxAge: number;\n      preflightContinue: boolean;\n      optionsSuccessStatus: number;\n    };\n  };\n\n  jwt: {\n    jwkUrl?: ((payload: any) => string) | string;\n    key?: string;\n    algorithms?: string[];\n    issuer?: string[];\n    audience?: string;\n    subject?: string;\n    claimsNamespace?: string;\n  };\n  // \u63a8\u8350\u751f\u4ea7\u4f7f\u7528 redis\n  cacheAndQueueDriver: 'memory' | 'redis';\n  // \u63a8\u8350\u4fdd\u7559\u9ed8\u8ba4\n  orchestratorOptions: OrchestratorOptions | ((context: RequestContext) => OrchestratorOptions);\n  allowJsDuplicatePropsInSchema: boolean;\n}\n\ninterface OrchestratorOptions {\n  redisPrefix: string;\n  rollupOnlyMode: bool;\n  queryCacheOptions: {\n    refreshKeyRenewalThreshold: number;\n    backgroundRenew: boolean;\n    queueOptions: QueueOptions;\n  };\n  preAggregationsOptions: {\n    queueOptions: QueueOptions;\n  };\n}\n\ninterface QueueOptions {\n  concurrency: number;\n  continueWaitTimeout: number;\n  executionTimeout: number;\n  orphanedTimeout: number;\n  heartBeatInterval: number;\n}\n\ninterface RequestContext {\n  securityContext: object;\n  requestId: string;\n}\n\ninterface DriverContext extends RequestContext {\n  dataSource: string;\n}\n\ninterface SchemaFileRepository {\n  dataSchemaFiles(): Promise<FileContent[]>;\n}\n\ninterface FileContent {\n  fileName: string;\n  content: string;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="QueueOptions"',children:'{\n  "concurrency": 2,\n  "continueWaitTimeout": 5,\n  "executionTimeout": 600,\n  "orphanedTimeout": 120,\n  "heartBeatInterval": 30\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"multitenancy",children:"Multitenancy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Multitenancy vs Multiple Data Sources\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Multitenancy\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u591a\u7528\u6237\uff0c\u4e0d\u540c\u6570\u636e\u96c6"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Multiple Data Sources\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u76f8\u540c\u6570\u636e\u4e0d\u540c\u6570\u636e\u5e93"}),"\n",(0,r.jsx)(n.li,{children:"cube \u5173\u8054 dataSource"}),"\n",(0,r.jsx)(n.li,{children:"\u914d\u7f6e dbType+driverFactory \u751f\u6210\u591a\u6570\u636e\u6e90"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Security Context vs Multitenant Compile Context\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Security Context\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"row-level security within the same database for different users"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Multitenant Compile Context\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"access different databases"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Security Context vs queryRewrite\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Security Context\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"explicit control"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="cube.js"',children:"const PostgresDriver = require('@cubejs-backend/postgres-driver');\n\nmodule.exports = {\n  driverFactory: ({ dataSource }) => new PostgresDriver({ database: dataSource }),\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636e\u5e93",children:"\u6570\u636e\u5e93"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const MySQLDriver = require('@cubejs-backend/mysql-driver');\n\nnew MySQLDriver({\n  host: process.env.CUBEJS_EXT_DB_HOST,\n  database: process.env.CUBEJS_EXT_DB_NAME,\n  port: process.env.CUBEJS_EXT_DB_PORT,\n  user: process.env.CUBEJS_EXT_DB_USER,\n  password: process.env.CUBEJS_EXT_DB_PASS,\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,u=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:u,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var r=t(96651);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);