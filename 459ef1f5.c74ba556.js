(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{263:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(9),o=(t(0),t(618)),i={id:"couchdb",title:"CouchDB"},c={id:"db/document/couchdb",title:"CouchDB",description:"# CouchDB",source:"@site/../tricks/db/document/couchdb.md",permalink:"/notes/db/document/couchdb",sidebar:"docs",previous:{title:"RethinkDB",permalink:"/notes/db/document/rethinkdb"},next:{title:"Key Value",permalink:"/notes/db/kv/kv"}},s=[{value:"Tips",id:"tips",children:[]},{value:"\u5b89\u5168",id:"\u5b89\u5168",children:[]},{value:"\u8bbe\u8ba1\u6587\u6863",id:"\u8bbe\u8ba1\u6587\u6863",children:[]},{value:"_users",id:"_users",children:[{value:"_design/_auth",id:"_design_auth",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"Referer header required",id:"referer-header-required",children:[]}]}],l={rightToc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"couchdb"},"CouchDB"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/couchdb"}),"CouchDB"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.couchbase.com/couchbase-vs-couchdb"}),"vs Couchbase")))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3: 5984"),Object(o.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u4f7f\u7528 4369 EPMD \u53d1\u73b0\u5176\u5b83\u8282\u70b9\uff0c\u4f7f\u7528 9100 \u901a\u4fe1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/_utils")," futon \u7ba1\u7406\u754c\u9762"),Object(o.b)("li",{parentName:"ul"},"\u5173\u4e8e CouchDB \u7684\u8bc4\u8bba",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://news.ycombinator.com/item?id=17115649"}),"https://news.ycombinator.com/item?id=17115649")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u4ec0\u4e48\u65f6\u5019\u7528 CouchDB"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f53\u4f60\u9700\u8981\u89e3\u51b3\u591a\u7aef\u79bb\u5728\u7ebf\u6570\u636e\u540c\u6b65\u65f6 - \u5176\u5b83\u529f\u80fd\u53ef\u80fd\u90fd\u5f88\u5dee\uff0c\u4f46\u8fd9\u4e00\u4e2a\u529f\u80fd\u662f\u6700\u597d\u7684"),Object(o.b)("li",{parentName:"ul"},"\u5f53\u6ca1\u6709\u540e\u7aef\u5f00\u53d1\u63a5\u53e3\uff0c\u5e0c\u671b\u76f4\u63a5\u5b58\u53d6\u6570\u636e\u65f6 - BaaS"),Object(o.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7684\u6570\u636e\u5e93",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"RealmDB"),Object(o.b)("li",{parentName:"ul"},"RethinkDB"))),Object(o.b)("li",{parentName:"ul"},"\u914d\u5408 ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://pouchdb.com/"}),"PouchDB")," \u5728 JS \u4f7f\u7528 - \u5982\u679c\u7528\u4e0d\u4e0a\u90a3\u8003\u8651\u4e0d\u8981\u7528 CouchDB",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u9700\u8981 CRUD \u8003\u8651\u4f7f\u7528 PostREST \u6216 Hasura"))))),Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5355\u6587\u6863\u8bfb\u6743\u9650\u63a7\u5236"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u9ed8\u8ba4\u8bfb\u53d6\u7684\u8fc7\u6ee4"),Object(o.b)("li",{parentName:"ul"},"\u540c\u6b65\u662f \u6570\u636e\u5e93 \u7eac\u5ea6"),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93 \u6210\u672c\u5f88\u4f4e\uff0c\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u7528\u6237\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u5b9e\u73b0\u6743\u9650\u548c\u540c\u6b65"),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6ca1\u6709 members \u548c admins\uff0c\u6240\u6709\u6587\u6863\u90fd\u53ef\u4ee5\u8bfb\u5199"),Object(o.b)("li",{parentName:"ul"},"design doc \u80fd\u591f\u88ab\u76f4\u63a5\u8bfb\u53d6,",Object(o.b)("inlineCode",{parentName:"li"},"/db/_design_docs")," \u80fd\u591f\u88ab\u76f4\u63a5\u8bbf\u95ee"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/db/_all_docs")," \u80fd\u591f\u88ab\u76f4\u63a5\u8bbf\u95ee"),Object(o.b)("li",{parentName:"ul"},"\u76f8\u5173\u5173\u95ed\u76f8\u5173\u63a5\u53e3\u53ea\u80fd\u901a\u8fc7\u53cd\u5411\u4ee3\u7406\u5b9e\u73b0"),Object(o.b)("li",{parentName:"ul"},"\u6ca1\u529e\u6cd5\u5168\u91cf\u4fee\u6539,\u5199\u5ba2\u6237\u7aef\u8fdb\u884c\u64cd\u4f5c"),Object(o.b)("li",{parentName:"ul"},"couch_httpd_auth/public_fields \u63a7\u5236\u7528\u6237\u7684\u90a3\u4e9b\u5b57\u6bb5\u53ef\u89c1"))),Object(o.b)("li",{parentName:"ul"},"\u7d22\u5f15\u4e5f\u53eb\u8bbe\u8ba1\u6587\u6863/design document",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e00\u822c\u5305\u542b JS \u4ee3\u7801"))),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u901a\u8fc7 \u5b89\u5168\u5bf9\u8c61/security object \u5b9a\u4e49\u5b89\u5168\u5c5e\u6027",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"JSON \u5bf9\u8c61 ",Object(o.b)("inlineCode",{parentName:"li"},"{admins:[{names:[],roles:[]}],members:[]}")))),Object(o.b)("li",{parentName:"ul"},"\u4e24\u79cd\u89d2\u8272",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"admins - \u7d22\u5f15\u4fee\u6539\u3001\u5b89\u5168\u5bf9\u8c61\u4fee\u6539"),Object(o.b)("li",{parentName:"ul"},"members - \u6587\u6863 CRUD")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Docker \u542f\u52a8\n# \u5b98\u65b9\u955c\u50cf\u6709 2.0 https://github.com/apache/couchdb-docker\n# COUCHDB_USER COUCHDB_PASSWORD\n# EXPOSE 4369 5984 9100\ndocker run -p 5984:5984 -v $(pwd):/opt/couchdb/data --name couchdb couchdb\n\ndb=http://127.0.0.1:5984\n# \u521b\u5efa DB\ncurl -X PUT $db/test\n# \u76f4\u63a5\u4fee\u6539\ncurl $db/test/hello | jq '.name=\"abc\"' | curl -X POST $db/test -d @-\n")),Object(o.b)("h2",{id:"\u5b89\u5168"},"\u5b89\u5168"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# \u521b\u5efa\u7528\u6237\ncurl -X POST $db/_users/org.couchdb.user:wener -d \'{"name":"wener","password":"wener","roles":["admin"], "type":"user"}\'\n# \u7528\u6237\u4fe1\u606f\ncurl $db/_users/org.couchdb.user:wener\n\n# \u76f4\u63a5 PUT \u4f1a\u521b\u5efa\u6570\u636e\u5e93\ncurl -X PUT $db/test\n# \u83b7\u53d6\u5b89\u5168\u5bf9\u8c61\ncurl $db/test/_security\n# \u6dfb\u52a0\u8bbf\u95ee\u9650\u5236 - \u5141\u8bb8 admin \u89d2\u8272\u548c user \u89d2\u8272\ncurl -X PUT $db/test/_security -d \'{"members":{"roles":["user"]},"admins":{"roles":["admin"]}}\'\n# \u7528\u521a\u624d\u521b\u5efa\u7684\u8d26\u6237\u8fdb\u884c\u8bbf\u95ee\ncurl -u wener:wener $db/test/_security \n')),Object(o.b)("h2",{id:"\u8bbe\u8ba1\u6587\u6863"},"\u8bbe\u8ba1\u6587\u6863"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  // \u4e00\u822c\u4e3a JS - Query Server \u5b9a\u4e49\u5904\u7406\n  language: "javascript",\n  // \u8fc7\u6ee4\u51fd\u6570\u5b9a\u4e49\n  filters:"",\n  // \u8bd5\u56fe\u9ed8\u8ba4\u9009\u9879\n  options:{},\n  // \u5217\u8868\u51fd\u6570\u5b9a\u4e49\n  lists: "",\n  // \u91cd\u5199\u89c4\u5219\n  // array | string\n  rewrites: [],\n  // Show \u51fd\u6570\n  shows: {},\n  // \u66f4\u65b0\u51fd\u6570\n  updates:{},\n  // \u9a8c\u8bc1\u6587\u6863\u66f4\u65b0\u51fd\u6570\n  // function(newDoc, oldDoc, userCtx, secObj)\n  validate_doc_update: "",\n  // \u89c6\u56fe\u51fd\u6570\n  views: {}\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// https://docs.couchdb.org/en/stable/json-structure.html#request-object\ninterface Request {\n  body;\n  cookie;\n  form;\n  headers;\n  id;\n  info;\n  method;\n  path;\n  peer;\n  query;\n  request_path;\n  raw_path;\n  secObj;\n  userCtx;\n  uuid;\n}\n\n// \u6620\u5c04\u51fd\u6570\ntype MapFunction = (doc) => void\n\ntype ReduceFunction = (keys, values, rereduce?:boolean) => array\n\n// \u663e\u793a\u51fd\u6570\n// \u8fd4\u56de string \u76f4\u63a5\u663e\u793a\u6216\u8005\u8fd4\u56de\u54cd\u5e94\u5bf9\u8c61\n// \u8fd4\u56de JSON: {json:{name:doc['name']}}\n// \u8fd4\u56de \u81ea\u5b9a\u4e49\u5934: {headers:{'Content-Type':'image/png'}, base64:''} - \u5185\u5bb9\u53ef\u4ee5\u4f7f\u7528 base64 \u7f16\u7801\ntype ShowFunction = (doc,req) => object|string\n\n// \u66f4\u65b0\u51fd\u6570\n// \u8fd4\u56de\u66f4\u65b0\u5bf9\u8c61\u548c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u5bf9\u8c61\ntype UpdateFunction = (doc,req) => [any|null,any]\n\n// \u5217\u8868\u51fd\u6570\n// \u8c03\u7528 start send \u90e8\u5206\u53d1\u9001\ntype ListFunction = (head,req) => string\n\n// \u5904\u7406\u5bf9\u8c61\u548c\u8bf7\u6c42\u5bf9\u8c61 - \u8fd4\u56de\u662f\u5426\u8fc7\u6ee4\n// GET /db/_changes?filter=mailbox/new_mail\ntype FilterFunction = (doc,req)=>boolean\n\n// \u89c6\u56fe\u8fc7\u6ee4\n// GET /db/_changes?filter=_view&view=dname/viewname\ntype ViewFilterFunction = (doc,req)=>boolean\n\n// \u9a8c\u8bc1\u51fd\u6570\n// \u65b0\u6587\u6863,\u65e7\u6587\u6863,\u7528\u6237\u4e0a\u4e0b\u6587,\u5b89\u5168\u5bf9\u8c61\n// throw({forbidden:''}) \u6216 throw({unauthorized:''})\n// \u5982\u679c\u4e3a\u5220\u9664 newDoc \u5305\u542b _deleted \u5b57\u6bb5\ntype ValidateFunction = (newDoc, oldDoc, userCtx, secObj) => void\n")),Object(o.b)("h2",{id:"_users"},"_users"),Object(o.b)("h3",{id:"_design_auth"},"_design/_auth"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"validate_doc_update",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6821\u9a8c ",Object(o.b)("inlineCode",{parentName:"li"},"_users")," \u66f4\u65b0")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function(newDoc, oldDoc, userCtx, secObj) {\n  if (newDoc._deleted === true) {\n      // allow deletes by admins and matching users\n      // without checking the other fields\n      if ((userCtx.roles.indexOf('_admin') !== -1) ||\n          (userCtx.name == oldDoc.name)) {\n          return;\n      } else {\n          throw({forbidden: 'Only admins may delete other user docs.'});\n      }\n  }\n\n  if (newDoc.type !== 'user') {\n      throw({forbidden : 'doc.type must be user'});\n  } // we only allow user docs for now\n\n  if (!newDoc.name) {\n      throw({forbidden: 'doc.name is required'});\n  }\n\n  if (!newDoc.roles) {\n      throw({forbidden: 'doc.roles must exist'});\n  }\n\n  if (!isArray(newDoc.roles)) {\n      throw({forbidden: 'doc.roles must be an array'});\n  }\n\n  for (var idx = 0; idx < newDoc.roles.length; idx++) {\n      if (typeof newDoc.roles[idx] !== 'string') {\n          throw({forbidden: 'doc.roles can only contain strings'});\n      }\n  }\n\n  if (newDoc._id !== ('org.couchdb.user:' + newDoc.name)) {\n      throw({\n          forbidden: 'Doc ID must be of the form org.couchdb.user:name'\n      });\n  }\n\n  if (oldDoc) { // validate all updates\n      if (oldDoc.name !== newDoc.name) {\n          throw({forbidden: 'Usernames can not be changed.'});\n      }\n  }\n\n  if (newDoc.password_sha && !newDoc.salt) {\n      throw({\n          forbidden: 'Users with password_sha must have a salt.' +\n              'See /_utils/script/couch.js for example code.'\n      });\n  }\n\n  var available_schemes = [\"simple\", \"pbkdf2\", \"bcrypt\"];\n  if (newDoc.password_scheme\n          && available_schemes.indexOf(newDoc.password_scheme) == -1) {\n      throw({\n          forbidden: 'Password scheme `' + newDoc.password_scheme\n              + '` not supported.'\n      });\n  }\n\n  if (newDoc.password_scheme === \"pbkdf2\") {\n      if (typeof(newDoc.iterations) !== \"number\") {\n          throw({forbidden: \"iterations must be a number.\"});\n      }\n      if (typeof(newDoc.derived_key) !== \"string\") {\n          throw({forbidden: \"derived_key must be a string.\"});\n      }\n  }\n\n  var is_server_or_database_admin = function(userCtx, secObj) {\n      // see if the user is a server admin\n      if(userCtx.roles.indexOf('_admin') !== -1) {\n          return true; // a server admin\n      }\n\n      // see if the user a database admin specified by name\n      if(secObj && secObj.admins && secObj.admins.names) {\n          if(secObj.admins.names.indexOf(userCtx.name) !== -1) {\n              return true; // database admin\n          }\n      }\n\n      // see if the user a database admin specified by role\n      if(secObj && secObj.admins && secObj.admins.roles) {\n          var db_roles = secObj.admins.roles;\n          for(var idx = 0; idx < userCtx.roles.length; idx++) {\n              var user_role = userCtx.roles[idx];\n              if(db_roles.indexOf(user_role) !== -1) {\n                  return true; // role matches!\n              }\n          }\n      }\n\n      return false; // default to no admin\n  }\n\n  if (!is_server_or_database_admin(userCtx, secObj)) {\n      if (oldDoc) { // validate non-admin updates\n          if (userCtx.name !== newDoc.name) {\n              throw({\n                  forbidden: 'You may only update your own user document.'\n              });\n          }\n          // validate role updates\n          var oldRoles = (oldDoc.roles || []).sort();\n          var newRoles = newDoc.roles.sort();\n\n          if (oldRoles.length !== newRoles.length) {\n              throw({forbidden: 'Only _admin may edit roles'});\n          }\n\n          for (var i = 0; i < oldRoles.length; i++) {\n              if (oldRoles[i] !== newRoles[i]) {\n                  throw({forbidden: 'Only _admin may edit roles'});\n              }\n          }\n      } else if (newDoc.roles.length > 0) {\n          throw({forbidden: 'Only _admin may set roles'});\n      }\n  }\n\n  // no system roles in users db\n  for (var i = 0; i < newDoc.roles.length; i++) {\n      if (newDoc.roles[i][0] === '_') {\n          throw({\n              forbidden:\n              'No system roles (starting with underscore) in users db.'\n          });\n      }\n  }\n\n  // no system names as names\n  if (newDoc.name[0] === '_') {\n      throw({forbidden: 'Username may not start with underscore.'});\n  }\n\n  var badUserNameChars = [':'];\n\n  for (var i = 0; i < badUserNameChars.length; i++) {\n      if (newDoc.name.indexOf(badUserNameChars[i]) >= 0) {\n          throw({forbidden: 'Character `' + badUserNameChars[i] +\n                  '` is not allowed in usernames.'});\n      }\n  }\n}\n")),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"referer-header-required"},"Referer header required"),Object(o.b)("p",null,"\u8be5\u7528 PUT \u7528\u6210\u4e86 POST"))}d.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(t),m=r,p=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return t?a.a.createElement(p,c(c({ref:n},l),{},{components:t})):a.a.createElement(p,c({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);