"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40],{77179:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var n=a(96600),r=a(27279),l=(a(59496),a(3905)),i=["components"],o={title:"ArangoDB"},p=void 0,m={unversionedId:"db/graph/arangodb",id:"db/graph/arangodb",title:"ArangoDB",description:"- arangodb/arangodb",source:"@site/notes/db/graph/arangodb.md",sourceDirName:"db/graph",slug:"/db/graph/arangodb",permalink:"/notes/db/graph/arangodb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/graph/arangodb.md",tags:[],version:"current",frontMatter:{title:"ArangoDB"},sidebar:"docs",previous:{title:"ArangoDB Version",permalink:"/notes/db/graph/arangodb-version"},next:{title:"Cayley",permalink:"/notes/db/graph/cayley"}},u={},s=[{value:"Model",id:"model",level:2},{value:"AQL",id:"aql",level:2},{value:"FTS",id:"fts",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"arangoimport",id:"arangoimport",level:3},{value:"arangosh",id:"arangosh",level:3},{value:"Foxx",id:"foxx",level:2},{value:"Schema Validation",id:"schema-validation",level:2},{value:"failed to locate javascript.startup-directory directory",id:"failed-to-locate-javascriptstartup-directory-directory",level:2}],d={toc:s};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/arangodb/arangodb"},"arangodb/arangodb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, C++, JS"),(0,l.kt)("li",{parentName:"ul"},"Graph+Document+KV"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8 rocksdb"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e V8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"AQL vs SQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/wp-content/uploads/2016/05/shell-reference-card.pdf"},"Shell cheatsheet")),(0,l.kt)("li",{parentName:"ul"},"Admin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"arangoimp",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301: JSON, CSV, TSV"),(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u5165 CSV \u6216 TSV \u65f6\u5982\u679c\u6709\u5934,\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--skip-lines=1")," \u8df3\u8fc7"))),(0,l.kt)("li",{parentName:"ul"},"arangodump",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u8f6c\u50a8"))),(0,l.kt)("li",{parentName:"ul"},"arangorestore",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6062\u590d\u8f6c\u50a8\u7684\u6570\u636e"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/Administration/Configuration/"},"Configuration")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 8529, \u652f\u6301 HTTP \u548c TCP \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u4e3a root, \u65e0\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"Key \u89c4\u8303",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/DataModeling/NamingConventions/DocumentKeys.html"},"DocumentKeys")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[_-:.@()+,=;$!*'%0-9a-zA-Z]{1,254}")),(0,l.kt)("li",{parentName:"ul"},"UTF8 \u4e0d\u80fd\u4f5c\u4e3a key, \u53ef\u4ee5\u5148 SHA \u540e\u4f5c\u4e3a KEY"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5347\u7ea7\u4e86\u7248\u672c\uff0c\u7b2c\u4e00\u6b21\u542f\u52a8\u6dfb\u52a0 --database.auto-upgrade"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 8529"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/arangodb/go-driver"},"arangodb/go-driver")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/solutions/case-studies/fbi-grade-case-mgmt-investigative-community/"},"Meet Kaseware: FBI-grade case management for the larger investigative community"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# https://hub.docker.com/_/arangodb\ndocker run --rm -it -v /etc/localtime:/etc/localtime:ro \\\n  -e ARANGO_ROOT_PASSWORD=password \\\n  -v $PWD/arangodb/data:/var/lib/arangodb3 -v $PWD/arangodb/apps:/var/lib/arangodb3-apps \\\n  -p 8529:8529 \\\n  --name arangodb arangodb --tcp.reuse-address=true --http.hide-product-header=true --query.cache-mode=on\n\n# \u8fdc\u7a0b\u8fde\u63a5\n# \u5982\u679c\u662f https \u5219\u7528 ssl://mydomain.com\narangosh --server.endpoint http+tcp://192.168.1.1:8529 \\\n  --server.username $USERNAME --server.password $PASSWORD  --server.database Nodes\n\n# Linux client\ncurl -O https://download.arangodb.com/arangodb39/Community/Linux/arangodb3-client-linux-3.9.2.tar.gz\ntar zxvf arangodb3-client-linux-3.9.2.tar.gz\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARANGO_ROOT_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARANGO_NO_AUTH"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARANGO_RANDOM_ROOT_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARANGODB_OVERRIDE_DETECTED_TOTAL_MEMORY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"4G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARANGODB_OVERRIDE_DETECTED_NUMBER_OF_CORES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARANGOSH_ARGS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/docs/stable/administration-configuration.html"},"Configuration"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")," \u53ef\u80fd\u9047\u5230\u7684\u95ee\u9898"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"graph visualizer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pick multiple labels ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/arangodb/arangodb/issues/14456"},"#14456")),(0,l.kt)("li",{parentName:"ul"},"Support of multiple attributes for displaying labels ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/arangodb/arangodb/issues/7772"},"#7772")))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")," \u7cfb\u7edf\u9650\u5236"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"AQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u62fc\u63a5\u4f7f\u7528 CONCAT\uff0c\u4e0d\u80fd ",(0,l.kt)("inlineCode",{parentName:"li"},"+")),(0,l.kt)("li",{parentName:"ul"},"\u4e09\u5143\u8fd0\u7b97 ",(0,l.kt)("inlineCode",{parentName:"li"},"a ? b : c")," \u4f1a\u5bfc\u81f4 b c \u90fd\u8ba1\u7b97 - \u4e0d\u80fd\u77ed\u8def"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u56fe\u67e5\u8be2\u6700\u591a\u6d89\u53ca 256 \u4e2a Collection"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u591a 1000 \u6ce8\u518c\u5668 - \u53d8\u91cf\u3001\u67e5\u8be2\u53d8\u91cf\u3001\u5185\u90e8\u67e5\u8be2\u53d8\u91cf\u3001\u4e2d\u95f4\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u67e5\u8be2\u6700\u591a 4000 \u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u67e5\u8be2\u6700\u591a 2048 collections/shards"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// https://docs.arangodb.com/3.1/Manual/Administration/ManagingUsers.html\n// \u7528\u6237\u7ba1\u7406\nvar users = require('@arangodb/users');\n// users.save(user, passwd, active, extra)\nusers.save('admin@testapp', 'mypassword');\nusers.grantDatabase('admin@testapp', 'testdb');\n\n// \u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\nrequire('fs').write('/var/lib/arangodb3/export.json', JSON.stringify(aql`FOR n IN Nodes return n`));\n// \u5bfc\u51fa\u62fc\u63a5\u540e\u7684\u6570\u636e\nrequire('fs').write(\n  '/var/lib/arangodb3/export.txt',\n  db\n    ._query(`return CONCAT_SEPARATOR(\"\\n\",FOR n IN Nodes FILTER n.name != null COLLECT col = n.name return col)`)\n    .toArray()[0],\n);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u5c06\u8fb9\u7684\u6570\u91cf\u66f4\u65b0\u5230\u8282\u70b9\u4e0a\nFOR doc IN documents\n  LET inEdgesCount = LENGTH(FOR v IN 1..1 INBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  LET outEdgesCount = LENGTH(FOR v IN 1..1 OUTBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  UPDATE doc WITH\n     {inEdgesCount: inEdgesCount, outEdgesCount: outEdgesCount} In Documents\n")),(0,l.kt)("h2",{id:"model"},"Model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_key"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"254bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"^[-a-zA-Z0-9_:.@()+,=;$!*'%]{,254}$")))),(0,l.kt)("li",{parentName:"ul"},"Collection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Document"),(0,l.kt)("li",{parentName:"ul"},"Edge - ",(0,l.kt)("inlineCode",{parentName:"li"},"_from"),",",(0,l.kt)("inlineCode",{parentName:"li"},"_to")))),(0,l.kt)("li",{parentName:"ul"},"Graph",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fromCollections"),(0,l.kt)("li",{parentName:"ul"},"toCollections"),(0,l.kt)("li",{parentName:"ul"},"Vertex - graph \u4e00\u90e8\u5206\u4f46\u672a\u7528\u4e8e edge \u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"OUTBOUND: ","_","from \u2192 ","_","to, INBOUND: ","_","from \u2190 ","_","to, ANY: ","_","from \u2194 ","_","to"),(0,l.kt)("li",{parentName:"ul"},"Algorithms",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Traversal"),(0,l.kt)("li",{parentName:"ul"},"Shortest Path"),(0,l.kt)("li",{parentName:"ul"},"k Shortest Paths"),(0,l.kt)("li",{parentName:"ul"},"k Paths"),(0,l.kt)("li",{parentName:"ul"},"Distributed Iterative Graph Processing (Pregel)")))))),(0,l.kt)("h2",{id:"aql"},"AQL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d2\u5165")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-aql"},'INSERT {name: "John Doe", gender: "m"} INTO users;\n\nFOR user IN [\n  {name: "John Doe",gender: "m"},\n  {name: "Jane Smith",gender: "f"}\n  ]\n  INSERT user INTO users;\n\nFOR user IN users FILTER user.active = = 1 INSERT user INTO backup;\n\nFOR i IN 1..1000 INSERT {name: CONCAT("test", i), gender: (i % 2 = = 0 ? "f": "m")} INTO users\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u66f4\u65b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-aql"},'UPDATE { _key: "1" }\n  WITH { name: "John Smith" }\n  IN users;\n\nFOR user IN users\n  UPDATE user\n    WITH { numberOfLogins: 0 } IN users;\n\nFOR user IN users\n  FILTER user.active == 1\n    UPDATE user\n      WITH {\n        numberOfLogins: LENGTH(\n          FOR login IN logins\n            FILTER login.user == user._key\n            COLLECT WITH COUNT INTO numLogins\n            RETURN numLogins\n        )\n      } IN users;\n\nLET date = DATE_NOW()\n  FOR user IN users\n    FILTER user.isImportantUser == null\n    LET numberOfLogins = (\n      FOR login IN logins\n        FILTER login.user == user._key\n        COLLECT WITH COUNT INTO numLogins\n        RETURN numLogins\n      )\n    FILTER numberOfLogins > 50\n    UPDATE user\n      WITH {\n        isImportantUser: 1,\n        dateBecameImportant: date\n      }\n      IN users;\n\n-- \u79fb\u9664\u5c5e\u6027\nFOR user IN users\n  UPDATE user WITH { numberOfLogins: null }\n    IN users\n  OPTIONS { keepNull: false };\n\n-- \u79fb\u9664\u90e8\u5206\u5c5e\u6027\nFOR user IN users\n  FILTER user.isImportantUser == 1 AND\n         user.active == 0\n    UPDATE user\n      WITH {\n        isImportantUser: null,\n        dateBecameImportant: null\n      }\n      IN users\n    OPTIONS { keepNull: false }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/community-server/sql-aql-comparison/"},"https://www.arangodb.com/community-server/sql-aql-comparison/"))),(0,l.kt)("h2",{id:"fts"},"FTS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/docs/stable/programs-arangod-options.html"},"https://www.arangodb.com/docs/stable/programs-arangod-options.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'RETURN TOKENS("\u4eca\u5929\u7684\u5929\u6c14\u771f\u7684\u5f88\u597d", "text_zh")\n')),(0,l.kt)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install arangodb\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"arangodump"),(0,l.kt)("li",{parentName:"ul"},"arangorestore"),(0,l.kt)("li",{parentName:"ul"},"arangobackup"),(0,l.kt)("li",{parentName:"ul"},"arangoimport"),(0,l.kt)("li",{parentName:"ul"},"arangoexport"),(0,l.kt)("li",{parentName:"ul"},"arangobench"),(0,l.kt)("li",{parentName:"ul"},"arangovpack",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8f6c\u6362 VelocyPack \u7684\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8c03\u8bd5 ArangoDB \u65f6\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"json,json-hex,vpack,vpack-hex"))),(0,l.kt)("li",{parentName:"ul"},"arangoinspect")),(0,l.kt)("h3",{id:"arangoimport"},"arangoimport"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file \u652f\u6301\u538b\u7f29 - gz,bz2")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"opt"),(0,l.kt)("th",{parentName:"tr",align:null},"demo val"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"auto,tsv,csv,json,jsonl"),(0,l.kt)("td",{parentName:"tr",align:null},"auto \u57fa\u4e8e\u6587\u4ef6\u540d\u68c0\u6d4b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")," stdin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"define"),(0,l.kt)("td",{parentName:"tr",align:null},"key=val"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66ff\u6362\u914d\u7f6e\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"@key@"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers-file"),(0,l.kt)("td",{parentName:"tr",align:null},"header.csv"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on-duplicate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"error"),", ignore, replace, update"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"overwrite"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66ff\u6362 collection - \u5220\u9664\u4e4b\u524d\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create-collection"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create-collection-type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"document"),", edge"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create-database"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip-lines"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip-validation"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e tsv,csv")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backslash-escape"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch-size"),(0,l.kt)("td",{parentName:"tr",align:null},"8388608"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4f4d byte - \u9ed8\u8ba4 8MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto-rate-limit"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ignore-missing"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"preprocess")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"translate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id=_key")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove-attribute"),(0,l.kt)("td",{parentName:"tr",align:null},"attr"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datatype"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"key=string\\|number\\|null\\|boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"merge-attributes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fullName=[firstName]:[lastName]")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"edge")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from-collection-prefix"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to-collection-prefix"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'arangoimport --file "data.csv" --type csv --collection "users"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="edge"',title:'"edge"'},'{"_from": "users/1234", "_to": "users/4321", "desc": "1234 is connected to 4321"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/docs/stable/programs-arangoimport-options.html"},"https://www.arangodb.com/docs/stable/programs-arangoimport-options.html"))),(0,l.kt)("h3",{id:"arangosh"},"arangosh"),(0,l.kt)("h2",{id:"foxx"},"Foxx"),(0,l.kt)("h2",{id:"schema-validation"},"Schema Validation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ffd\u7565 ",(0,l.kt)("inlineCode",{parentName:"li"},"_key"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"_id"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"_rev"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"_from"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"_to")),(0,l.kt)("li",{parentName:"ul"},"JSON Schema"),(0,l.kt)("li",{parentName:"ul"},"level - \u9ed8\u8ba4 strict",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"moderate - \u5f71\u54cd\u65b0\u7684\u548c\u4fee\u6539\u7684\uff0c\u4e0d\u5f71\u54cd\u65e7\u7684"),(0,l.kt)("li",{parentName:"ul"},"strict - \u8981\u6c42\u6240\u6709\u9a8c\u8bc1\u901a\u8fc7"),(0,l.kt)("li",{parentName:"ul"},"new - \u65b0\u7684"),(0,l.kt)("li",{parentName:"ul"},"none - \u4e0d\u9a8c\u8bc1"))),(0,l.kt)("li",{parentName:"ul"},"message - \u9519\u8bef\u4fe1\u606f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u6cd5\u544a\u77e5\u54ea\u91cc\u7684\u95ee\u9898 - ",(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/docs/stable/release-notes-known-issues39.html#schema-validation"},"https://www.arangodb.com/docs/stable/release-notes-known-issues39.html#schema-validation")))),(0,l.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u51fd\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SCHEMA_GET()"),(0,l.kt)("li",{parentName:"ul"},"SCHEMA_VALIDATE()")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var schema = {\n  rule: {\n    properties: {nums: {type: 'array', items: {type: 'number', maximum: 6}}},\n    additionalProperties: {type: 'string'},\n    required: ['nums'],\n  },\n  level: 'moderate',\n  message:\n    \"The document does not contain an array of numbers in attribute 'nums', or one of the numbers is bigger than 6.\",\n};\n\n/* Create a new collection with schema */\ndb._create('schemaCollection', {schema: schema});\n\n/* Update the schema of an existing collection */\ndb.schemaCollection.properties({schema: schema});\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"failed-to-locate-javascriptstartup-directory-directory"},"failed to locate javascript.startup-directory directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS /usr/local/opt/arangodb/share/arangodb3/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"arangosh --javascript.startup-directory /usr/local/opt/arangodb/share/arangodb3/js\n")))}N.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{kt:function(){return d}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),N=r,k=d["".concat(p,".").concat(N)]||d[N]||u[N]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);