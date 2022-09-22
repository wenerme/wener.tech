"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48005],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(t),d=a,y=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},73816:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return y},toc:function(){return b}});var r=t(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))o.call(n,t)&&p(e,t,n[t]);return e};const c={title:"CubeJS Schema"},d="CubeJS Schema",y={unversionedId:"service/bi/cubejs-schema",id:"service/bi/cubejs-schema",title:"CubeJS Schema",description:"- dimensions",source:"@site/../notes/service/bi/cubejs-schema.md",sourceDirName:"service/bi",slug:"/service/bi/cubejs-schema",permalink:"/notes/service/bi/cubejs-schema",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/bi/cubejs-schema.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"CubeJS Schema"},sidebar:"docs",previous:{title:"CubeJS Frontend",permalink:"/notes/service/bi/cubejs-frontend"},next:{title:"cubestore",permalink:"/notes/service/bi/cubejs-store"}},k={},b=[{value:"\u9884\u805a\u5408",id:"\u9884\u805a\u5408",level:2}],g={toc:b};function f(e){var n,t=e,{components:a}=t,p=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&o.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},g),p),i(n,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"cubejs-schema"}),"CubeJS Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dimensions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u6570\u636e\u70b9\u7684 ",(0,r.kt)("strong",{parentName:"li"},"\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},"Time Dimension"),(0,r.kt)("li",{parentName:"ul"},"type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"time, string, number, boolean, geo"))),(0,r.kt)("li",{parentName:"ul"},"format:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imageUrl, link, currency, percent"),(0,r.kt)("li",{parentName:"ul"},"id - \u907f\u514d\u9488\u5bf9 number \u52a0\u5206\u9694\u7b26"))))),(0,r.kt)("li",{parentName:"ul"},"measures",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"set of data points"),(0,r.kt)("li",{parentName:"ul"},"type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"number - \u7528\u4e8e\u8ba1\u7b97 measure"),(0,r.kt)("li",{parentName:"ul"},"count - \u4e0d\u9700\u8981\u5199 sql\uff0c\u4e00\u822c\u4f1a\u914d\u5408\u4e0b\u94bb"),(0,r.kt)("li",{parentName:"ul"},"countDistinct - ",(0,r.kt)("inlineCode",{parentName:"li"},"COUNT DISTINCT")),(0,r.kt)("li",{parentName:"ul"},"countDistinctApprox",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u80fd\u4f7f\u7528 rollup pre-aggregations"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4f7f\u7528 HyperLogLog"))),(0,r.kt)("li",{parentName:"ul"},"sum, avg, min, max, runningTotal"))),(0,r.kt)("li",{parentName:"ul"},"format: percent, currency"),(0,r.kt)("li",{parentName:"ul"},"drillMembers:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u94bb\u7eac\u5ea6 - \u4f1a\u9ed8\u8ba4\u5305\u542b\u8fd9\u4e9b\u4e0b\u94bb\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6784\u5efa\u66f4\u4e30\u5bcc\u7684\u5ba2\u6237\u7aef"))))),(0,r.kt)("li",{parentName:"ul"},"joins",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"relationship: belongsTo,hasMany,hasOne"),(0,r.kt)("li",{parentName:"ul"},"sql"),(0,r.kt)("li",{parentName:"ul"},"\u5747\u4e3a LEFT JOIN",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NOT NULL")," \u8fbe\u5230 INNER JOIN"))))),(0,r.kt)("li",{parentName:"ul"},"segments",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9884\u5b9a\u4e49\u5728 schema \u4e2d\u7684\u8fc7\u6ee4\u6761\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u7528\u4e8e\u590d\u6742\u67e5\u8be2\uff0c\u7b80\u5355\u573a\u666f\u4f7f\u7528 filter"))),(0,r.kt)("li",{parentName:"ul"},"preAggregations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9884\u805a\u5408"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u53d8\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FILTER_PARAMS - ",(0,r.kt)("inlineCode",{parentName:"li"},"FILTER_PARAMS.<CUBE_NAME>.<FILTER_NAME>.filter(expression)")),(0,r.kt)("li",{parentName:"ul"},"SECURITY_CONTEXT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350\u5c3d\u91cf\u4f7f\u7528 queryRewrite"))),(0,r.kt)("li",{parentName:"ul"},"SQL_UTILS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"convertTz('created_at')")))),(0,r.kt)("li",{parentName:"ul"},"COMPILE_CONTEXT - \u7f16\u8bd1\u4e0a\u4e0b\u6587"))),(0,r.kt)("li",{parentName:"ul"},"partition",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rollup \u57fa\u4e8e\u5206\u7247"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u901a\u5e38\u662f\u65f6\u95f4\u7eac\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u7ef4\u5ea6+\u65f6\u95f4\u7cbe\u5ea6\u4ea7\u751f\u4e0d\u540c\u7c92\u5ea6\u7684\u5206\u7247")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"cube(`Users`, {\n  sql: `select * from public.users`,\n  title: `\u7528\u6237`,\n  description: '\u6240\u6709\u7684\u7cfb\u7edf\u7528\u6237',\n  // extends: BaseEntity // \u7ee7\u627f\n  // sqlAlias: `usr`,\n\n  joins: {\n    // key \u5fc5\u9700\u4e3a Cube \u540d\u5b57\n    // \u610f\u5473\u7740\u76f8\u540c\u5173\u7cfb\u53ea\u80fd join \u4e00\u4e2a\uff0c\u9664\u975e\u521b\u5efa\u591a\u4e2a\u76f8\u540c cube\n    Teams: {\n      relationship: `belongsTo`,\n      sql: `${Users}.team_id = ${Teams}.id`,\n    },\n  },\n  segments: {\n    activitiedUsers: {\n      sql: `${CUBE}.state = 'activitied'`,\n    },\n  },\n  preAggregations: {\n    usersByStatus: {\n      // rollup - \u9ed8\u8ba4 - count, sum, min, max, countDistinctApprox\n      // originalSql - \u7279\u6b8a\u60c5\u51b5\u4f7f\u7528  - \u4f8b\u5982 \u6f0f\u6597\uff0c\u5f88\u590d\u6742\u7684 SQL\n      // rollupJoin - \u652f\u6301 join\n      type: 'rollup',\n      dimensions: [CUBE.status],\n      measures: [CUBE.count],\n      timeDimension: CUBE.createdAt,\n      // hour, day, week, month, quarter, year\n      granularity: `day`,\n      segments: [CUBE.activitiedUsers],\n      // \u5206\u533a\u7c92\u5ea6\n      partitionGranularity: `month`,\n      // \u5237\u65b0 key\n      refreshKey: {\n        // \u65e0 sql \u9ed8\u8ba4 1 hour\n        // \u6709 sql \u9ed8\u8ba4 10 seconds\n        every: `1 day`,\n        // \u6574\u7406 rollup - \u9ed8\u8ba4 true\n        incremental: true,\n        // \u589e\u91cf\u7a97\u53e3\n        updateWindow: `7 day`,\n      },\n      useOriginalSqlPreAggregations: true,\n      // \u5b9a\u65f6\u5237\u65b0\n      scheduledRefresh: false,\n      // \u8303\u56f4\u5b9a\u4e49\n      buildRangeStart: {\n        sql: `SELECT NOW() - interval '300 day'`,\n      },\n      buildRangeEnd: {\n        sql: `SELECT NOW()`,\n      },\n      //\n      indexes: {\n        categoryIndex: {\n          columns: [CUBE.category],\n        },\n        timestampIndex: {\n          columns: ['timestamp'],\n        },\n      },\n    },\n    // rollup join\n    usersRollup: {\n      type: 'rollupJoin',\n      dimensions: [Teams.teamsRollup, CUBE.usersByStatus],\n    },\n    // sql\n    main: {\n      type: `originalSql`,\n    },\n  },\n  measures: {\n    count: {\n      sql: `id`,\n      type: `count`,\n      title: '\u603b\u6570',\n      description: '\u7528\u6237\u6570\u91cf',\n      shown: true, // \u662f\u5426\u53ef\u89c1\n      // \u81ea\u5b9a\u4e49\u8fc7\u6ee4\u67e5\u8be2\n      filters: [{ sql: `${CUBE}.status = 'activited'` }],\n      // \u6eda\u52a8\u7a97\u53e3\n      rollingWindow: {\n        // (-?\\d+) (minute|hour|day|week|month|year)\n        // unbounded\n        trailing: `1 month`,\n        leading: '',\n        offset: '', // start|end\n      },\n      // \u4e0b\u94bb\u7eac\u5ea6\n      drillMembers: [id, status, Products.name, Users.email],\n      // \u4f20\u9012\u5230\u524d\u7aef\u7684\u81ea\u5b9a\u4e49\u4fe1\u606f\n      meta: {\n        any: 'value',\n      },\n    },\n\n    payingCount: {\n      sql: `id`,\n      type: `count`,\n      filters: [{ sql: `${CUBE}.paying = 'true'` }],\n    },\n\n    payingPercentage: {\n      // \u8ba1\u7b97\u503c\n      sql: `100.0 * ${payingCount} / ${count}`,\n      type: `number`,\n      format: `percent`,\n    },\n\n    // \u5f15\u7528 subquery\n    averageTeamsScore: {\n      sql: `${teamsScore}`,\n      type: `avg`,\n    },\n  },\n  // \u7eac\u5ea6\n  dimensions: {\n    id: {\n      sql: `id`,\n      type: `string`,\n      // \u4f1a\u7528\u4e8e\u53bb\u91cd\uff0cjoin\n      // shown \u4f1a\u9ed8\u8ba4\u4e3a false\n      primaryKey: true,\n    },\n    age: {\n      sql: 'age',\n      type: 'number',\n      title: '\u5e74\u9f84',\n      description: '\u7528\u6237\u6d3b\u4e86\u51e0\u591a\u5e74',\n      shown: true,\n      case: {\n        when: [\n          { sql: `${CUBE}.age < 2`, label: `baby` },\n          { sql: `${CUBE}.age < 18`, label: `young` },\n          { sql: `${CUBE}.age < 60`, label: { sql: `${CUBE}.job` } }, // label \u4e5f\u53ef\u4ee5\u5f15\u7528\n        ],\n        else: { label: `\u8001\u4eba` },\n      },\n      meta: {\n        any: 'value',\n      },\n    },\n\n    // \u65f6\u95f4\u7ef4\u5ea6\n    createdAt: {\n      sql: `created_at`,\n      type: `time`,\n    },\n\n    completedAt: {\n      sql: `completed_at`,\n      type: `time`,\n    },\n    // \u5b50\u67e5\u8be2\n    // - \u5fc5\u9700\u5148\u5b9a\u4e49 join\n    // - \u5f15\u7528 measure\n    teamsScore: {\n      sql: `${Teams.score}`,\n      type: `number`,\n      subQuery: true, // \u58f0\u660e\u5b50\u67e5\u8be2\n      propagateFiltersToSubQuery: true, //  \u4f20\u9012\u67e5\u8be2\u5230\u5b50\u67e5\u8be2\n    },\n  },\n\n  // SQL \u751f\u6210\u540e\u662f\u5426\u5141\u8bb8 cube \u91cd\u5199\u67e5\u8be2 - \u53ef\u8fdb\u884c\u4e00\u5b9a\u4f18\u5316\n  rewriteQueries: false,\n  // \u7f13\u5b58\u5237\u65b0 key\n  refreshKey: {\n    // 1. evert interval\n    every: '2 minute', // \u9ed8\u8ba4 BigQuery, Athena, Snowflake, Presto\n    every: '10 second', // \u5176\u4ed6 DB \u9ed8\u8ba4\n    // 2. \u81ea\u5b9a\u4e49\n    sql: `SELECT MAX(update_at) FROM users`,\n    // 3. corn\n    every: '30 5 * * 5',\n    timezone: 'Asia/Shanghai',\n  },\n  // \u6570\u636e\u6e90\n  dataSource: `default`,\n});\n\n// \u62bd\u8c61 Cube - \u7528\u4e8e extends\nconst Users = cube({\n  sql: `select * from users`,\n\n  dimensions: {\n    // primary key,\n    name: {\n      sql: `${CUBE}.name`,\n      type: `string`,\n    },\n  },\n});\n\ncube(`BaseEvents`, {\n  sql: `select * from events`,\n});\n\n// \u7ee7\u627f sql, joins, measures, dimensions\ncube(`PageViews`, {\n  sql: `select * from page_views`,\n  extends: BaseEvents,\n\n  dimensions: {\n    pagePath: {\n      sql: `page_path`,\n      type: `string`,\n    },\n  },\n});\n\n// Data Blending/\u6570\u636e\u6df7\u5408 - \u878d\u5408\u591a\u7ec4\u6570\u636e\ncube(`AllSales`, {\n  sql: `\nSELECT\n  amount,\n  user_id AS customer_id,\n  created_at,\n  'OnlineOrders' AS row_type\nFROM ${OnlineOrders.sql()}\nUNION ALL\nSELECT\n  amount,\n  customer_id,\n  created_at,\n  'Orders' AS row_type\nFROM ${RetailOrders.sql()}\n `,\n});\n")),(0,r.kt)("h2",m({},{id:"\u9884\u805a\u5408"}),"\u9884\u805a\u5408"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"additive rollup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"count, sum, min, max, countDistinctApprox"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/OLAP_cube"}),"https://en.wikipedia.org/wiki/OLAP_cube")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Aggregate_function"}),"https://en.wikipedia.org/wiki/Aggregate_function")),(0,r.kt)("li",{parentName:"ul"},"CUBEJS_ROLLUP_ONLY - \u8981\u6c42\u6240\u6709\u8bf7\u6c42\u90fd\u8d70\u9884\u805a\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u805a\u5408\u8868\u540d - ",(0,r.kt)("inlineCode",{parentName:"li"},"<CUBE>_<ROLLUP><date partation>_23jnqarg_uiyfxd0f_1gifflf"))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"cube(`Users`, {\n  preAggregations: {\n    main: {\n      measures: [CUBE.count],\n      refreshKey: {\n        every: `1 hour`,\n        incremental: true,\n        updateWindow: `7 day`,\n      },\n    },\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ini",metastring:'title="external db"',title:'"external','db"':!0}),"CUBEJS_EXT_DB_HOST=YOUR_DB_HOST_HERE\nCUBEJS_EXT_DB_PORT=YOUR_DB_PORT_HERE\nCUBEJS_EXT_DB_NAME=YOUR_DB_NAME_HERE\nCUBEJS_EXT_DB_USER=YOUR_DB_USER_HERE\nCUBEJS_EXT_DB_PASS=YOUR_DB_PASS_HERE\nCUBEJS_EXT_DB_TYPE=SUPPORTED_DB_TYPE_HERE\n")))}f.isMDXComponent=!0}}]);