"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74437],{49613:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return k}});var n=t(59496);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),m=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=m(e.components);return n.createElement(u.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=m(t),k=l,N=s["".concat(u,".").concat(k)]||s[k]||c[k]||r;return t?n.createElement(N,i(i({ref:a},o),{},{components:t})):n.createElement(N,i({ref:a},o))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},26806:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var n=t(96600),l=t(27279),r=(t(59496),t(49613)),i=["components"],p={title:"Apache Cassandra"},u="Cassandra",m={unversionedId:"db/column/cassandra",id:"db/column/cassandra",title:"Apache Cassandra",description:"Tips",source:"@site/notes/db/column/cassandra.md",sourceDirName:"db/column",slug:"/db/column/cassandra",permalink:"/notes/db/column/cassandra",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/column/cassandra.md",tags:[],version:"current",frontMatter:{title:"Apache Cassandra"},sidebar:"docs",previous:{title:"Column Store",permalink:"/notes/db/column/"},next:{title:"ClickHouse",permalink:"/notes/db/column/clickhouse"}},o={},c=[{value:"Tips",id:"tips",level:2},{value:"Notes",id:"notes",level:2},{value:"Doc Notes",id:"doc-notes",level:2},{value:"Cassandra 4.0",id:"cassandra-40",level:2}],s={toc:c};function k(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cassandra"},"Cassandra"),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/cassandra"},"apache/cassandra")),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("a",{parentName:"li",href:"http://cassandra.apache.org/doc/latest/configuration/cassandra_config_file.html"},"http://cassandra.apache.org/doc/latest/configuration/cassandra_config_file.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://projects.spring.io/spring-data-cassandra/"},"http://projects.spring.io/spring-data-cassandra/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.spring.io/spring-data/cassandra/docs/1.5.4.RELEASE/reference/html/"},"http://docs.spring.io/spring-data/cassandra/docs/1.5.4.RELEASE/reference/html/")))),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/17523595/1870054"},"https://stackoverflow.com/a/17523595/1870054")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/serge-rider/dbeaver"},"https://github.com/serge-rider/dbeaver")),(0,r.kt)("li",{parentName:"ul"},"JDBC ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datastax/java-driver/tree/3.x/manual/shaded_jar"},"https://github.com/datastax/java-driver/tree/3.x/manual/shaded_jar")))),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u6a21\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.datastax.com/en/cql/3.3/cql/ddl/dataModelingApproach.html"},"Data modeling concepts")))),(0,r.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u8981\u6c42 - \u751f\u4ea7\u6700\u4f4e 2 \u6838 8G\uff0c\u63a8\u8350 8 \u6838 32G")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u7528\u4e8e\u6d4b\u8bd5\u7684\u670d\u52a1\n# \u66b4\u9732 JMX \u548c CQL \u7aef\u53e3\n# \u4f7f\u7528\u4e86 mmap, \u5728 mac \u4e0b\u4e0d\u80fd\u6620\u5c04 volume\ndocker run -it --rm -p 9042:9042 -p 7199:7199 -v /data/cassandra/dev:/var/lib/cassandra cassandra\n\n# \u672c\u5730\u8fde\u63a5 docker \u4e2d\u7684\u670d\u52a1\u5668\ncqlsh `docker-machine ip`\n\n# \u53ef\u4ece\u5bb9\u5668\u4e2d\u5c06\u914d\u7f6e\u62f7\u8d1d\u51fa\u6765\ndocker cp cassandra:/etc/cassandra config\n\n# \u81ea\u5b9a\u4e49 yaml \u914d\u7f6e\nJVM_OPTS="$JVM_OPTS -Dcassandra.config=file://$PWD/config/cassandra.yaml" cassandra -f\n\n# \u9ed8\u8ba4\u914d\u7f6e\u76ee\u5f55 /usr/local/etc/cassandra/\n# \u9ed8\u8ba4\u6570\u636e\u76ee\u5f55 /usr/local/var/lib/cassandra/\nbrew install cassandra\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- \u521b\u5efa\u7a7a\u95f4\nCREATE KEYSPACE Excelsior\nWITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};\nUSE Excelsior;\n-- \u521b\u5efa\u4e00\u4e2a\u6700\u5c0f\u8868\nCREATE TABLE t (k text PRIMARY KEY);\n-- \u63d2\u5165\u548c\u67e5\u8be2\nINSERT INTO t(k) values('Hello');\nSELECT * FROM t;\n\n-- http://docs.datastax.com/en/cql/3.3/cql/cql_reference/cqlshDescribe.html\n-- \u663e\u793a\u6240\u6709\u8868\nDESCRIBE TABLES;\n\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.cassandra.config.YamlConfigurationLoader"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52a0\u8f7d YAML \u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.cassandra.config.Config"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7c7b"))),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u952e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4")))))),(0,r.kt)("h2",{id:"doc-notes"},"Doc Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"7000 \u96c6\u7fa4\u901a\u4fe1"),(0,r.kt)("li",{parentName:"ul"},"7001 \u96c6\u7fa4\u901a\u4fe1 SSL"),(0,r.kt)("li",{parentName:"ul"},"9042 \u5ba2\u6237\u7aef"),(0,r.kt)("li",{parentName:"ul"},"7199 JMX"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 BLOB \u6700\u5927 16M",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"max_mutation_size_in_kb"),(0,r.kt)("li",{parentName:"ul"},"commitlog_segment_size_in_mb \u7684\u4e00\u534a"))),(0,r.kt)("li",{parentName:"ul"},"BLOB \u6ca1\u6709\u505a\u7279\u6b8a\u4f18\u5316, \u5efa\u8bae <10MB \u5355\u4e2a\u503c, \u66f4\u5927\u7684 BLOB \u5efa\u8bae\u5e94\u7528\u5206\u5757"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u952e\u76f8\u540c\u7684\u884c\u5728\u540c\u4e00\u4e2a\u5206\u7247"),(0,r.kt)("li",{parentName:"ul"},"STATIC \u5217\u7531\u540c\u4e00\u4e2a\u5206\u7247\u5171\u4eab",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0e COMPACT STORAGE \u51b2\u7a81"))),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u952e\u7531\u4e24\u90e8\u5206\u7ec4\u6210",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u952e, Partition Key"),(0,r.kt)("li",{parentName:"ul"},"\u65cf\u7fa4\u5217, Clustering Columns"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY (a)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u952e a"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u65cf\u7fa4\u5217"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY (a, b, c)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u952e a"),(0,r.kt)("li",{parentName:"ul"},"\u65cf\u7fa4\u5217 b, c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY ((a, b), c)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u5206\u7247\u952e a,b"),(0,r.kt)("li",{parentName:"ul"},"\u65cf\u7fa4\u5217"))))),(0,r.kt)("li",{parentName:"ul"},"COMPACT STORAGE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u540e\u4e0d\u53ef\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"4.0 \u540e\u5df2\u7ecf\u79fb\u9664, \u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u96c6\u5408\u548c STATIC \u5217"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a compact table \u6709\u81f3\u5c11\u4e00\u5217 clustering column,\u90a3\u4e48\u5728\u4e3b\u952e\u4e4b\u5916\u53ea\u80fd\u6709\u4e00\u5217"),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u5c31\u610f\u5473\u7740\u5728\u521b\u5efa\u540e\u4e0d\u80fd\u4fee\u6539\u5217\u5b9a\u4e49"),(0,r.kt)("li",{parentName:"ul"},"compact table \u53ea\u9650\u5236\u4e86\u521b\u5efa\u7684\u7d22\u5f15, \u800c materialized view \u662f\u4e0d\u53d7\u9650\u5236\u7684"))))),(0,r.kt)("li",{parentName:"ul"},"CLUSTERING ORDER",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u540e\u4e0d\u53ef\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u4fee\u6539\u65cf\u7fa4\u5217\u7684\u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u5f71\u54cd SELECT \u80fd\u591f\u4f7f\u7528\u7684 order \u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"WITH CLUSTERING ORDER (a DESC, b ASC)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY (a DESC, b ASC)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY (a ASC, b DESC)")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY (a ASC, b ASC)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY (a DESC, b DESC)")))),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u4fee\u6539\u9ed8\u8ba4\u987a\u5e8f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u5185\u4f1a\u4ee5\u5b9a\u4e49\u7684\u987a\u5e8f\u8fd4\u56de"))),(0,r.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b\u67e5\u8be2\u4e2d,\u53cd\u5e8f\u67e5\u8be2\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f71\u54cd"))))),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8868\u65f6\u7684 WITH ",(0,r.kt)("a",{parentName:"li",href:"http://cassandra.apache.org/doc/latest/cql/ddl.html#other-table-options"},"\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},"Materialized View",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SELECT \u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u952e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5305\u542b\u6240\u6709\u57fa\u7840\u8868\u7684\u4e3b\u952e"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u989d\u5916\u5217\u4f5c\u4e3a\u4e3b\u952e"))),(0,r.kt)("li",{parentName:"ul"},"\u9009\u9879"))))),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u89d2\u8272",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6709\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u63a7\u5236\u662f\u5426\u5141\u8bb8\u767b\u9646"))),(0,r.kt)("li",{parentName:"ul"},"\u6743\u9650",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CREATE"),(0,r.kt)("li",{parentName:"ul"},"ALTER"),(0,r.kt)("li",{parentName:"ul"},"DROP"),(0,r.kt)("li",{parentName:"ul"},"SELECT"),(0,r.kt)("li",{parentName:"ul"},"MODIFY"),(0,r.kt)("li",{parentName:"ul"},"AUTHORIZE"),(0,r.kt)("li",{parentName:"ul"},"DESCRIBE"),(0,r.kt)("li",{parentName:"ul"},"EXECUTE"))),(0,r.kt)("li",{parentName:"ul"},"\u8d44\u6e90",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ALL KEYSPACES -> KEYSPACE -> TABLE"),(0,r.kt)("li",{parentName:"ul"},"ALL FUNCTIONS -> KEYSPACE -> FUNCTION"),(0,r.kt)("li",{parentName:"ul"},"ALL ROLES -> ROLE"),(0,r.kt)("li",{parentName:"ul"},"ALL MBEANS -> MBEAN"))))),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u517c\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u65b0\u7248\u672c\u4e2d\u7684\u89d2\u8272"))))),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6807\u91cf\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u805a\u5408\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5904\u4e8e\u5b89\u5168\u8003\u8651, \u7528\u6237\u5b9a\u4e49\u51fd\u6570\u9ed8\u8ba4\u662f\u5173\u95ed\u7684, ",(0,r.kt)("inlineCode",{parentName:"li"},"enable_user_defined_functions")),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u4f1a\u8fd0\u884c\u5728\u6c99\u7bb1\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u5167\u5efa\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cast")," \u7c7b\u578b\u8f6c\u6362 ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT avg(cast(count as double)) FROM myTable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token")," \u8ba1\u7b97\u5206\u7247\u952e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," \u751f\u6210 UUID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"now")," \u751f\u6210 timeuuid"))),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u5b9a\u4e49\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Java \u7f16\u5199"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.cassandra.cql3.functions.UDFContext")))))),(0,r.kt)("li",{parentName:"ul"},"JSON",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u7136\u662f\u5f3a\u7c7b\u578b\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u662f\u7b80\u5316\u57fa\u4e8e JSON \u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b fromJSON \u548c toJSON \u51fd\u6570"))),(0,r.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u5668",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u89e6\u53d1\u5668\u9700\u8981\u5236\u5b9a\u5bf9\u5e94\u7684 Java \u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u5c06 Java \u7c7b\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/triggers"))))),(0,r.kt)("h2",{id:"cassandra-40"},"Cassandra 4.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java 11"),(0,r.kt)("li",{parentName:"ul"},"Virtual Tables",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"backed by an API instead of data"))),(0,r.kt)("li",{parentName:"ul"},"Audit Logging"),(0,r.kt)("li",{parentName:"ul"},"Full Query Logging (FQL)"),(0,r.kt)("li",{parentName:"ul"},"Internode Messaging \u589e\u5f3a"),(0,r.kt)("li",{parentName:"ul"},"Streaming \u589e\u5f3a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Netty NIO"),(0,r.kt)("li",{parentName:"ul"},"Zero Copy"))),(0,r.kt)("li",{parentName:"ul"},"Transient Replication")))}k.isMDXComponent=!0}}]);