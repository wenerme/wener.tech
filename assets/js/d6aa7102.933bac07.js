"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70630],{49613:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=r,g=p["".concat(i,".").concat(c)]||p[c]||u[c]||o;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7494:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var a=t(96600),r=t(27279),o=(t(59496),t(49613)),l=["components"],s={title:"MongoDB"},i="MongoDB",m={unversionedId:"db/document/mongo",id:"db/document/mongo",title:"MongoDB",description:"- \u7ba1\u7406\u5de5\u5177\u5217\u8868",source:"@site/../notes/db/document/mongo.md",sourceDirName:"db/document",slug:"/db/document/mongo",permalink:"/notes/db/document/mongo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/document/mongo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"MongoDB"},sidebar:"docs",previous:{title:"CouchDB",permalink:"/notes/db/document/couchdb"},next:{title:"RethinkDB",permalink:"/notes/db/document/rethinkdb"}},d={},u=[{value:"Operaters",id:"operaters",level:2},{value:"\u7d22\u5f15\u7ba1\u7406",id:"\u7d22\u5f15\u7ba1\u7406",level:3},{value:"\u89d2\u8272\u6743\u9650\u7ba1\u7406",id:"\u89d2\u8272\u6743\u9650\u7ba1\u7406",level:3},{value:"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c",id:"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c",level:3},{value:"parameters",id:"parameters",level:3},{value:"Versions",id:"versions",level:2},{value:"3.2",id:"32",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3}],p={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDB"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/ecosystem/tools/administration-interfaces/"},"\u7ba1\u7406\u5de5\u5177\u5217\u8868")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rsercano/mongoclient"},"mongoclient")," \u57fa\u4e8e Web \u7684\u7ba1\u7406\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},"Reference",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/mongo-shell/"},"mongo-shell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"Connection String"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"authSource \u4f7f\u7528\u4e0d\u540c\u7684\u5e93\u505a\u6388\u6743"))))))),(0,o.kt)("li",{parentName:"ul"},"\u5efa\u6a21",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1"},"6 Rules of Thumb for MongoDB Schema Design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/data-modeling/"},"Data Model"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/applications/data-models/"},"Data Model Examples and Patterns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/database-references/"},"DBRef")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/glossary"},"Glossary")),(0,o.kt)("li",{parentName:"ul"},"FAQ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Java \u76ee\u524d\u65e0\u6cd5\u901a\u8fc7 SSH \u8f6c\u53d1\u94fe\u63a5 ReplicaSet"),(0,o.kt)("li",{parentName:"ul"},"DBRef \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"$ref")," \u5fc5\u987b\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"$id")," \u4e4b\u524d"),(0,o.kt)("li",{parentName:"ul"},"SSH \u8f6c\u53d1 Mongo \u53ef\u80fd\u4f1a\u5bfc\u81f4\u94fe\u63a5\u4e0d\u4f1a\u88ab\u91ca\u653e")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5728\u524d\u53f0\u542f\u52a8\n# \u6570\u636e\u5b58\u50a8\u5230 ~/data/mgo\n# Ctrl-C \u505c\u6b62\ndocker run --rm -it -p 27017:27017 --name my-mongo -v ~/data/mgo:/data/db mongo\n# \u53e6\u5916\u4e00\u4e2a\u7ec8\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u7aef\nmongo\n\n# https://docs.mongodb.com/manual/reference/program/mongodump/\n# \u5bfc\u51fa\u4e00\u4e2a\u5e93\nmongodump -v --db test  --host myhost --port 27017 --out mg-`date +%Y%m%d`\n# \u5bfc\u5165\u4e00\u4e2a\u5e93\nmongorestore -v --db test  --host myhost --port 27017 mg-`date +%Y%m%d`/db\n# \u4f7f\u7528 URI \u53c2\u6570\nmongodump -v --uri mongodb://root:pass@host:27017/dbname?authSource=admin\n\n# \u5bfc\u51fa json\nmongoexport --db db-name --collection collection-name --out exp.json\n\nmongoexport -h localhost -d databse -c collection --csv \\\n--fields erpNum,orderId,time,status \\\n-q \'{"time":{"$gt":1438275600000}, "status":{"$ne" :"Cancelled"}}\' \\\n--out report.csv\n')),(0,o.kt)("h2",{id:"operaters"},"Operaters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/operator/"},"https://docs.mongodb.com/manual/reference/operator/")),(0,o.kt)("li",{parentName:"ul"},"FAQ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ObjectId \u8f6c\u5b57\u7b26\u4e32",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"str")," \u5c5e\u6027, \u4e0d\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"toString"))))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u67e5\u770b\u670d\u52a1\u72b6\u6001\ndb.serverStatus()\n// \u67e5\u770b\u96c6\u5408\u72b6\u6001\ndb.list.stats()\n\n// \u67e5\u8be2\ndb.users.find({});\n// \u8981\u6c42\u67d0\u4e2a\u5b57\u6bb5\u4e3a null\ndb.users.find({name:null});\n// \u5b57\u6bb5\u4e0d\u4e3a null\ndb.users.find({name:{$ne:null});\n// \u5b57\u6bb5\u5b58\u5728\ndb.users.find({name:{$exists:true});\n// \u8fd4\u56de id \u548c name \u5b57\u6bb5\ndb.users.find({}, {name:1});\n// \u53ea\u8fd4\u56de name \u5b57\u6bb5, \u5e76\u505a explain\ndb.users.find({}, {_id:0, name:1}).explain()\n// \u8981\u6c42\u7c7b\u578b\u4e3a string\n// https://docs.mongodb.com/manual/reference/operator/query/type/#op._S_type\ndb.users.find({name:{$type:2});\n// \u8fd4\u56de\u4e00\u7ec4\u5b57\u7b26\u4e32\ndb.users.find().snapshot().forEach((e) => {\n    print(e._id.str)\n});\n// \u65e5\u671f\u67e5\u8be2\ndb.users.find({\n    "birth" : {"$gte": new Date("2013-10-01T00:00:00.000Z")},\n    "regDate" : {"$gte": ISODate("2013-10-01T00:00:00.000Z")}\n});\n// \u5b8c\u6574\u7684\u67e5\u8be2\ndb.books.find({publishDate:{$gt:ISODate(\'2017-09-14 10:49:47.132Z\')}}).sort({publishDate:1}).limit(1)\n\n// \u90e8\u5206\u66f4\u65b0\u5355\u6761\ndb.users.update({name:null},{$set:{name:"UNKNOWN"}});\n// \u90e8\u5206\u66f4\u65b0\u591a\u6761\ndb.users.updateMany({name:null},{$set:{name:"UNKNOWN"}});\n// \u4f7f\u7528 DBRef\ndb.users.update({role:null},{$set:{role:{"$ref" : "roles","$id" : ObjectId("598041d5e90a5d1e23d4518e")}}});\n// \u5728\u6570\u7ec4\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a\u503c\ndb.students.update({_id: 1},{ $set: { "grades.$" : 82 } });\n// \u4fee\u6539\u6570\u7ec4\u4e2d\u5bf9\u8c61\u503c\ndb.students.update({_id: 1},{ $set: { "grades.$.std" : 79 } });\n\ndb.collection.find().sort({age:-1}).limit(1) // for MAX\ndb.collection.find().sort({age:+1}).limit(1) // for MIN\n\n// \u67e5\u627e\u91cd\u590d\u7684 id\ndb.list.aggregate([\n    {\n        $group: {\n            _id: {cid: "$cid"},\n            uniqueIds: {$addToSet: "$_id"},\n            count: {$sum: 1}\n        }\n    },\n    {\n        $match: {\n            count: {"$gt": 1}\n        }\n    },\n    {\n        $sort: {\n            count: -1\n        }\n    }\n]);\n// \u5220\u9664\u91cd\u590d\u6570\u636e\n// .forEach(v=>{v.uniqueIds.pop();db.list.remove({\'_id\':{\'$in\':v.uniqueIds}})})\n\n// \u67e5\u627e\u4e0d\u4e3a\u7a7a\u7684\u5bf9\u8c61\ndb.col.find({\'score.user\': { "$gt": {}}});\n')),(0,o.kt)("h3",{id:"\u7d22\u5f15\u7ba1\u7406"},"\u7d22\u5f15\u7ba1\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa\u552f\u4e00\u7d22\u5f15\ndb.list.createIndex({ cid: -1 }, { name: 'cid_unique', unique: true });\n\n// \u83b7\u53d6\u7d22\u5f15\ndb.list.getIndexes();\n")),(0,o.kt)("h3",{id:"\u89d2\u8272\u6743\u9650\u7ba1\u7406"},"\u89d2\u8272\u6743\u9650\u7ba1\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"},"https://docs.mongodb.com/manual/tutorial/enable-authentication/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/"},"https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/")),(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"li"},"--auth")," \u6765\u542f\u7528\u6388\u6743, \u6216\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"li"},"security.authorization")," \u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u5167\u5efa\u89d2\u8272",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7528\u6237: read,readWrite"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7ba1\u7406\u5458: dbAdmin, dbOwner, userAdmin"),(0,o.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7ba1\u7406: clusterAdmin, clusterManager, clusterMonitor, hostManager"),(0,o.kt)("li",{parentName:"ul"},"\u5907\u4efd\u6062\u590d: backup, restore"),(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u6570\u636e\u5e93: readAnyDatabase, readWriteAnyDatabase, userAdminAnyDatabase, dbAdminAnyDatabase"),(0,o.kt)("li",{parentName:"ul"},"\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272: root",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"readWriteAnyDatabase, dbAdminAnyDatabase, userAdminAnyDatabase, clusterAdmin, restore, backup"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/v3.0/reference/method/js-user-management/"},"https://docs.mongodb.com/v3.0/reference/method/js-user-management/"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// use admin;\n// \u521b\u5efa\u7ba1\u7406\u5458\ndb.createUser({\n  user: 'admin',\n  pwd: 'abc123',\n  roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }],\n});\ndb.changeUserPassword('admin', 'myPassword');\ndb.getUser('admin');\ndb.getUsers();\n\ndb.getRole('read', { showPrivileges: true });\n\n// root \u6743\u9650\ndb.grantRolesToRole('admin', ['root']);\n// \u6307\u5b9a\u5230\u67d0\u4e2a\u5e93\ndb.grantRolesToRole('admin', [{ role: 'readWrite', db: 'list' }]);\n")),(0,o.kt)("h3",{id:"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c"},"\u66f4\u65b0\u65e0\u6cd5\u5f15\u7528\u5f53\u524d\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u4fee\u6539\u6587\u6863\u7ed3\u6784, \u4e0d\u6539\u53d8\u503c\ndb.events\n  .find()\n  .snapshot()\n  .forEach(function (e) {\n    // update document, using its own properties\n    e.coords = { lat: e.lat, lon: e.lon };\n\n    // remove old properties\n    delete e.lat;\n    delete e.lon;\n\n    // save the updated document\n    db.events.save(e);\n  });\n")),(0,o.kt)("h3",{id:"parameters"},"parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/v3.4/reference/parameters/"},"https://docs.mongodb.com/v3.4/reference/parameters/"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"db.adminCommand({ setParameter: 1, disableJavaScriptJIT: true });\n")),(0,o.kt)("h2",{id:"versions"},"Versions"),(0,o.kt)("h3",{id:"32"},"3.2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/release-notes/3.2/"},"https://docs.mongodb.com/manual/release-notes/3.2/")),(0,o.kt)("li",{parentName:"ul"},"js",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"V8 \u66f4\u6539\u4e3a SpiderMonkey"),(0,o.kt)("li",{parentName:"ul"},"arrow functions"),(0,o.kt)("li",{parentName:"ul"},"destructuring assignment"),(0,o.kt)("li",{parentName:"ul"},"for-of loops"),(0,o.kt)("li",{parentName:"ul"},"generators")))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongod --config ./mongo.conf --fork\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"mongod.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# https://docs.mongodb.com/manual/reference/configuration-options/\nsystemLog:\n  destination: file\n  path: mongo.log\n  logAppend: true\nstorage:\n  dbPath: . # \u6570\u636e\u5b58\u50a8\u4e8e\u5f53\u524d\u76ee\u5f55\nnet:\n  bindIp: 127.0.0.1\n")))}c.isMDXComponent=!0}}]);