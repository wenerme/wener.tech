(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(7),o=(t(0),t(586)),b={id:"mongodb",title:"MongoDB"},l={unversionedId:"db/document/mongodb",id:"db/document/mongodb",isDocsHomePage:!1,title:"MongoDB",description:"MongoDB",source:"@site/notes/db/document/mongo.md",slug:"/db/document/mongodb",permalink:"/notes/db/document/mongodb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/document/mongo.md",version:"current",sidebar:"docs",previous:{title:"SQLite",permalink:"/notes/db/relational/sqlite"},next:{title:"RethinkDB",permalink:"/notes/db/document/rethinkdb"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Operaters",id:"operaters",children:[{value:"\u7d22\u5f15\u7ba1\u7406",id:"\u7d22\u5f15\u7ba1\u7406",children:[]},{value:"\b\b\b\b\b\u89d2\u8272\u6743\u9650\u7ba1\u7406",id:"\b\b\b\b\b\u89d2\u8272\u6743\u9650\u7ba1\u7406",children:[]},{value:"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c",id:"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c",children:[]},{value:"parameters",id:"parameters",children:[]}]},{value:"Versions",id:"versions",children:[{value:"3.2",id:"32",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]}]}],i={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"mongodb"},"MongoDB"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/ecosystem/tools/administration-interfaces/"}),"\u7ba1\u7406\u5de5\u5177\u5217\u8868")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rsercano/mongoclient"}),"mongoclient")," \u57fa\u4e8e Web \u7684\u7ba1\u7406\u5de5\u5177"),Object(o.b)("li",{parentName:"ul"},"Reference",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/mongo-shell/"}),"mongo-shell")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/connection-string/"}),"Connection String"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"authSource \u4f7f\u7528\u4e0d\u540c\u7684\u5e93\u505a\u6388\u6743"))))))),Object(o.b)("li",{parentName:"ul"},"\u5efa\u6a21",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1"}),"6 Rules of Thumb for MongoDB Schema Design")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/data-modeling/"}),"Data Model"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/applications/data-models/"}),"Data Model Examples and Patterns")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/database-references/"}),"DBRef")))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/glossary"}),"Glossary")),Object(o.b)("li",{parentName:"ul"},"FAQ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Java \u76ee\u524d\u65e0\u6cd5\u901a\u8fc7 SSH \u8f6c\u53d1\u94fe\u63a5 ReplicaSet"),Object(o.b)("li",{parentName:"ul"},"DBRef \u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"$ref")," \u5fc5\u987b\u8981\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"$id")," \u4e4b\u524d"),Object(o.b)("li",{parentName:"ul"},"SSH \u8f6c\u53d1 Mongo \u53ef\u80fd\u4f1a\u5bfc\u81f4\u94fe\u63a5\u4e0d\u4f1a\u88ab\u91ca\u653e")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u5728\u524d\u53f0\u542f\u52a8\n# \u6570\u636e\u5b58\u50a8\u5230 ~/data/mgo\n# Ctrl-C \u505c\u6b62\ndocker run --rm -it -p 27017:27017 --name my-mongo -v ~/data/mgo:/data/db mongo\n# \u53e6\u5916\u4e00\u4e2a\u7ec8\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u7aef\nmongo\n\n# https://docs.mongodb.com/manual/reference/program/mongodump/\n# \u5bfc\u51fa\u4e00\u4e2a\u5e93\nmongodump -v --db test  --host myhost --port 27017 --out mg-`date +%Y%m%d`\n# \u5bfc\u5165\u4e00\u4e2a\u5e93\nmongorestore -v --db test  --host myhost --port 27017 mg-`date +%Y%m%d`/db\n# \u4f7f\u7528 URI \u53c2\u6570\nmongodump -v --uri mongodb://root:pass@host:27017/dbname?authSource=admin\n\n# \u5bfc\u51fa json\nmongoexport --db db-name --collection collection-name --out exp.json\n\nmongoexport -h localhost -d databse -c collection --csv \\\n--fields erpNum,orderId,time,status \\\n-q \'{"time":{"$gt":1438275600000}, "status":{"$ne" :"Cancelled"}}\' \\\n--out report.csv\n')),Object(o.b)("h2",{id:"operaters"},"Operaters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/reference/operator/"}),"https://docs.mongodb.com/manual/reference/operator/")),Object(o.b)("li",{parentName:"ul"},"FAQ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ObjectId \u8f6c\u5b57\u7b26\u4e32",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"str")," \u5c5e\u6027, \u4e0d\u8981\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"toString"))))))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u67e5\u770b\u670d\u52a1\u72b6\u6001\ndb.serverStatus()\n// \u67e5\u770b\u96c6\u5408\u72b6\u6001\ndb.list.stats()\n\n// \u67e5\u8be2\ndb.users.find({});\n// \u8981\u6c42\u67d0\u4e2a\u5b57\u6bb5\u4e3a null\ndb.users.find({name:null});\n// \u5b57\u6bb5\u4e0d\u4e3a null\ndb.users.find({name:{$ne:null});\n// \u5b57\u6bb5\u5b58\u5728\ndb.users.find({name:{$exists:true});\n// \u8fd4\u56de id \u548c name \u5b57\u6bb5\ndb.users.find({}, {name:1});\n// \u53ea\u8fd4\u56de name \u5b57\u6bb5, \u5e76\u505a explain\ndb.users.find({}, {_id:0, name:1}).explain()\n// \u8981\u6c42\u7c7b\u578b\u4e3a string\n// https://docs.mongodb.com/manual/reference/operator/query/type/#op._S_type\ndb.users.find({name:{$type:2});\n// \u8fd4\u56de\u4e00\u7ec4\u5b57\u7b26\u4e32\ndb.users.find().snapshot().forEach((e) => {\n    print(e._id.str)\n});\n// \u65e5\u671f\u67e5\u8be2\ndb.users.find({\n    "birth" : {"$gte": new Date("2013-10-01T00:00:00.000Z")},\n    "regDate" : {"$gte": ISODate("2013-10-01T00:00:00.000Z")}\n});\n// \u5b8c\u6574\u7684\u67e5\u8be2\ndb.books.find({publishDate:{$gt:ISODate(\'2017-09-14 10:49:47.132Z\')}}).sort({publishDate:1}).limit(1)\n\n// \u90e8\u5206\u66f4\u65b0\u5355\u6761\ndb.users.update({name:null},{$set:{name:"UNKNOWN"}});\n// \u90e8\u5206\u66f4\u65b0\u591a\u6761\ndb.users.updateMany({name:null},{$set:{name:"UNKNOWN"}});\n// \u4f7f\u7528 DBRef\ndb.users.update({role:null},{$set:{role:{"$ref" : "roles","$id" : ObjectId("598041d5e90a5d1e23d4518e")}}});\n// \u5728\u6570\u7ec4\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a\u503c\ndb.students.update({_id: 1},{ $set: { "grades.$" : 82 } });\n// \u4fee\u6539\u6570\u7ec4\u4e2d\u5bf9\u8c61\u503c\ndb.students.update({_id: 1},{ $set: { "grades.$.std" : 79 } });\n\ndb.collection.find().sort({age:-1}).limit(1) // for MAX\ndb.collection.find().sort({age:+1}).limit(1) // for MIN\n\n// \u67e5\u627e\u91cd\u590d\u7684 id\ndb.list.aggregate([\n    {\n        $group: {\n            _id: {cid: "$cid"},\n            uniqueIds: {$addToSet: "$_id"},\n            count: {$sum: 1}\n        }\n    },\n    {\n        $match: {\n            count: {"$gt": 1}\n        }\n    },\n    {\n        $sort: {\n            count: -1\n        }\n    }\n]);\n// \u5220\u9664\u91cd\u590d\u6570\u636e\n// .forEach(v=>{v.uniqueIds.pop();db.list.remove({\'_id\':{\'$in\':v.uniqueIds}})})\n\n// \u67e5\u627e\u4e0d\u4e3a\u7a7a\u7684\u5bf9\u8c61\ndb.col.find({\'score.user\': { "$gt": {}}});\n')),Object(o.b)("h3",{id:"\u7d22\u5f15\u7ba1\u7406"},"\u7d22\u5f15\u7ba1\u7406"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u521b\u5efa\u552f\u4e00\u7d22\u5f15\ndb.list.createIndex({cid:-1},{name:'cid_unique',unique:true})\n\n// \u83b7\u53d6\u7d22\u5f15\ndb.list.getIndexes()\n")),Object(o.b)("h3",{id:"\b\b\b\b\b\u89d2\u8272\u6743\u9650\u7ba1\u7406"},"\b\b\b\b\b\u89d2\u8272\u6743\u9650\u7ba1\u7406"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"}),"https://docs.mongodb.com/manual/tutorial/enable-authentication/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/"}),"https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/")),Object(o.b)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u9700\u8981 ",Object(o.b)("inlineCode",{parentName:"li"},"--auth")," \u6765\u542f\u7528\u6388\u6743, \u6216\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0 ",Object(o.b)("inlineCode",{parentName:"li"},"security.authorization")," \u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u5167\u5efa\u89d2\u8272",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7528\u6237: read,readWrite"),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7ba1\u7406\u5458: dbAdmin, dbOwner, userAdmin"),Object(o.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u7ba1\u7406: clusterAdmin, clusterManager, clusterMonitor, hostManager"),Object(o.b)("li",{parentName:"ul"},"\u5907\u4efd\u6062\u590d: backup, restore"),Object(o.b)("li",{parentName:"ul"},"\u6240\u6709\u6570\u636e\u5e93: readAnyDatabase, readWriteAnyDatabase, userAdminAnyDatabase, dbAdminAnyDatabase"),Object(o.b)("li",{parentName:"ul"},"\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272: root",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"readWriteAnyDatabase, dbAdminAnyDatabase, userAdminAnyDatabase, clusterAdmin, restore, backup "))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/v3.0/reference/method/js-user-management/"}),"https://docs.mongodb.com/v3.0/reference/method/js-user-management/"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// use admin;\n// \u521b\u5efa\u7ba1\u7406\u5458\ndb.createUser(\n  {\n    user: "admin",\n    pwd: "abc123",\n    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]\n  }\n);\ndb.changeUserPassword("admin", "myPassword");\ndb.getUser("admin");\ndb.getUsers();\n\ndb.getRole("read", { showPrivileges: true});\n\n// root \u6743\u9650\ndb.grantRolesToRole(\'admin\',[\'root\']);\n// \u6307\u5b9a\u5230\u67d0\u4e2a\u5e93\ndb.grantRolesToRole(\'admin\',[{role:\'readWrite\', db: "list"}]);\n')),Object(o.b)("h3",{id:"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c"},"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u4fee\u6539\u6587\u6863\u7ed3\u6784, \u4e0d\u6539\u53d8\u503c\ndb.events.find().snapshot().forEach(\n  function (e) {\n    // update document, using its own properties\n    e.coords = { lat: e.lat, lon: e.lon };\n\n    // remove old properties\n    delete e.lat;\n    delete e.lon;\n\n    // save the updated document\n    db.events.save(e);\n  }\n);\n")),Object(o.b)("h3",{id:"parameters"},"parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/v3.4/reference/parameters/"}),"https://docs.mongodb.com/v3.4/reference/parameters/"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"db.adminCommand({setParameter: 1, disableJavaScriptJIT: true});\n")),Object(o.b)("h2",{id:"versions"},"Versions"),Object(o.b)("h3",{id:"32"},"3.2"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/release-notes/3.2/"}),"https://docs.mongodb.com/manual/release-notes/3.2/")),Object(o.b)("li",{parentName:"ul"},"js",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"V8 \u66f4\u6539\u4e3a SpiderMonkey"),Object(o.b)("li",{parentName:"ul"},"arrow functions"),Object(o.b)("li",{parentName:"ul"},"destructuring assignment"),Object(o.b)("li",{parentName:"ul"},"for-of loops"),Object(o.b)("li",{parentName:"ul"},"generators")))),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mongod --config ./mongo.conf --fork\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"mongod.conf")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# https://docs.mongodb.com/manual/reference/configuration-options/\nsystemLog:\n  destination: file\n  path: mongo.log\n  logAppend: true\nstorage:\n  dbPath: . # \u6570\u636e\u5b58\u50a8\u4e8e\u5f53\u524d\u76ee\u5f55\nnet:\n  bindIp: 127.0.0.1\n")))}s.isMDXComponent=!0},586:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),s=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,p=d["".concat(b,".").concat(u)]||d[u]||m[u]||o;return t?r.a.createElement(p,l(l({ref:n},i),{},{components:t})):r.a.createElement(p,l({ref:n},i))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,b=new Array(o);b[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<o;i++)b[i]=t[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);