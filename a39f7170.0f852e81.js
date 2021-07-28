(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),u=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(a),s=n,j=p["".concat(i,".").concat(s)]||p[s]||m[s]||r;return a?l.a.createElement(j,c(c({ref:t},o),{},{components:a})):l.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<r;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},775:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(8),r=(a(0),a(1172)),i={id:"hazelcast",title:"Hazelcast"},c={unversionedId:"java/library/hazelcast",id:"java/library/hazelcast",isDocsHomePage:!1,title:"Hazelcast",description:"* IMDG - In Memory Data Grid - \u5185\u5b58\u6570\u636e\u7f51\u683c",source:"@site/notes/java/library/hazelcast.md",slug:"/java/library/hazelcast",permalink:"/notes/java/library/hazelcast",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/library/hazelcast.md",version:"current",sidebar:"docs",previous:{title:"Guava",permalink:"/notes/java/library/guava"},next:{title:"Hibernate Enver",permalink:"/notes/java/library/hibernate-enver"}},b=[{value:"Tips",id:"tips",children:[]},{value:"Hazelcast Jet",id:"hazelcast-jet",children:[]},{value:"Notes",id:"notes",children:[]},{value:"\u7ebf\u7a0b\u6a21\u578b",id:"\u7ebf\u7a0b\u6a21\u578b",children:[{value:"\u6162\u64cd\u4f5c\u68c0\u6d4b",id:"\u6162\u64cd\u4f5c\u68c0\u6d4b",children:[]}]},{value:"Version",id:"version",children:[]},{value:"IMDG 4.0",id:"imdg-40",children:[]},{value:"IMDG 3.9",id:"imdg-39",children:[{value:"IMGD 3.8",id:"imgd-38",children:[]}]}],o={toc:b};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"IMDG - In Memory Data Grid - \u5185\u5b58\u6570\u636e\u7f51\u683c")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Near Cache - \u8fd1\u7f13\u5b58,\u4f1a\u5c06\u4ece\u96c6\u7fa4\u4e2d\u83b7\u53d6\u5230\u7684\u6570\u636e\u7f13\u5b58\u5728\u672c\u5730")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://docs.hazelcast.org/docs/latest-dev/manual/html-single/"},"\u6587\u6863")))),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hazelcast/hazelcast"},"hazelcast/hazelcast")),Object(r.b)("li",{parentName:"ul"},"Hazelcast ",Object(r.b)("a",{parentName:"li",href:"https://hazelcast.org/plugins/"},"Plugins")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://hazelcast.org/features/"},"Features")),Object(r.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"WAN \u590d\u5236"),Object(r.b)("li",{parentName:"ul"},"\u70ed\u91cd\u542f, \u4e0d\u4e22\u5931\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u7ba1\u7406\u4e2d\u5fc3"),Object(r.b)("li",{parentName:"ul"},"\u6eda\u52a8\u5347\u7ea7"),Object(r.b)("li",{parentName:"ul"},"\u8ba4\u8bc1,\u6388\u6743"))),Object(r.b)("li",{parentName:"ul"},"hazelcast < 5MB"),Object(r.b)("li",{parentName:"ul"},"Features",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Distributed implementations of ",Object(r.b)("inlineCode",{parentName:"li"},"java.util.{Queue, Set, List, Map}"),"."),Object(r.b)("li",{parentName:"ul"},"Distributed implementation of ",Object(r.b)("inlineCode",{parentName:"li"},"java.util.concurrent.locks.Lock"),"."),Object(r.b)("li",{parentName:"ul"},"Distributed implementation of ",Object(r.b)("inlineCode",{parentName:"li"},"java.util.concurrent.ExecutorService"),"."),Object(r.b)("li",{parentName:"ul"},"Distributed ",Object(r.b)("inlineCode",{parentName:"li"},"MultiMap")," for one-to-many relationships."),Object(r.b)("li",{parentName:"ul"},"Distributed ",Object(r.b)("inlineCode",{parentName:"li"},"Topic")," for publish/subscribe messaging."),Object(r.b)("li",{parentName:"ul"},"Distributed Query, MapReduce and Aggregators."),Object(r.b)("li",{parentName:"ul"},"Synchronous (write-through) and asynchronous (write-behind) persistence."),Object(r.b)("li",{parentName:"ul"},"Transaction support."),Object(r.b)("li",{parentName:"ul"},"Specification compliant JCache implementation."),Object(r.b)("li",{parentName:"ul"},"Native Java, .NET, C++ clients, Memcache and REST clients."),Object(r.b)("li",{parentName:"ul"},"Socket level encryption support for secure clusters."),Object(r.b)("li",{parentName:"ul"},"Second level cache provider for Hibernate."),Object(r.b)("li",{parentName:"ul"},"Monitoring and management of the cluster via JMX."),Object(r.b)("li",{parentName:"ul"},"Dynamic HTTP session clustering."),Object(r.b)("li",{parentName:"ul"},"Support for cluster info and membership events."),Object(r.b)("li",{parentName:"ul"},"Dynamic discovery, scaling, partitioning with backups and fail-over.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"# \u662f\u5426\u542f\u7528 3.6 \u4e2d\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49\u670d\u52a1\u53d1\u73b0\nhazelcast.discovery.enabled: true\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# \u901a\u8fc7 REST \u63a5\u53e3\u83b7\u53d6\u96c6\u7fa4\u72b6\u6001\ncurl --data "dev&dev-pass" http://127.0.0.1:5701/hazelcast/rest/management/cluster/state\n')),Object(r.b)("h2",{id:"hazelcast-jet"},"Hazelcast Jet"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6d41\u5904\u7406"),Object(r.b)("li",{parentName:"ul"},"Hazelcast ",Object(r.b)("a",{parentName:"li",href:"https://hazelcast.com/products/jet/"},"Jet")),Object(r.b)("li",{parentName:"ul"},"Jet ",Object(r.b)("a",{parentName:"li",href:"http://jet.hazelcast.org/features/"},"Features")),Object(r.b)("li",{parentName:"ul"},"Jet ",Object(r.b)("a",{parentName:"li",href:"http://docs.hazelcast.org/docs/jet/latest/manual/"},"Manual"))),Object(r.b)("h2",{id:"notes"},"Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5206\u7247\u6570\u4e3a 271"),Object(r.b)("li",{parentName:"ul"},"lite-member",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0d\u5b58\u50a8\u6570\u636e\u4f46\u53ef\u6267\u884c\u4efb\u52a1\u548c\u6dfb\u52a0\u76d1\u542c,\u4e0d\u5f71\u54cd\u96c6\u7fa4"),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u53c2\u4e0e\u5206\u7247"))),Object(r.b)("li",{parentName:"ul"},"Smart Client \u5bf9\u6574\u4e2a\u96c6\u7fa4\u6709\u611f\u77e5,\u5728\u5ba2\u6237\u7aef\u4f1a\u7ef4\u62a4\u5206\u7247\u8868,\u5ba2\u6237\u7aef\u4f1a\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\u5230\u76f8\u5e94\u7684\u670d\u52a1\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"Dummy Client \u5bf9\u96c6\u7fa4\u65e0\u611f\u77e5,\u8bf7\u6c42\u7531\u670d\u52a1\u7aef\u8fdb\u884c\u8f6c\u53d1"),Object(r.b)("li",{parentName:"ul"},"\u6210\u5458\u5c5e\u6027\u662f\u5426\u4f1a\u7f13\u5b58\u5728\u672c\u5730?"),Object(r.b)("li",{parentName:"ul"},"\u60f3\u8981\u5b89\u5168\u7684\u5173\u95ed\u672c\u5730\u8282\u70b9\u4e0d\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u9700\u8981\u68c0\u6d4b\u8282\u70b9\u662f\u5426\u5b89\u5168"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u5bf9\u5355\u4e2a\u5206\u5e03\u5f0f\u5bf9\u8c61(Map/List)\u6307\u5b9a\u4e00\u4e2a Quorum, \u5373\u53ea\u6709\u6ee1\u8db3\u7ed9\u5b9a\u7684\u8282\u70b9\u6570\u91cf\u65f6\u8be5\u5bf9\u8c61\u624d\u53ef\u64cd\u4f5c"),Object(r.b)("li",{parentName:"ul"},"Management Center",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://docs.hazelcast.org/docs/latest/manual/html-single/index.html#getting-started-to-management-center"},"Getting Started to Management Center")),Object(r.b)("li",{parentName:"ul"},"\u793e\u533a\u7248\u9650\u5236\u4e3a 2 \u4e2a\u6210\u5458"),Object(r.b)("li",{parentName:"ul"},"\u4e3b\u8981\u529f\u80fd",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u811a\u672c"),Object(r.b)("li",{parentName:"ul"},"\u63a7\u5236\u53f0"),Object(r.b)("li",{parentName:"ul"},"\u8b66\u544a"),Object(r.b)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u7406"),Object(r.b)("li",{parentName:"ul"},"\u70ed\u91cd\u542f"),Object(r.b)("li",{parentName:"ul"},"Caches"),Object(r.b)("li",{parentName:"ul"},"Maps"),Object(r.b)("li",{parentName:"ul"},"Replicated Maps"),Object(r.b)("li",{parentName:"ul"},"Queues"),Object(r.b)("li",{parentName:"ul"},"Topics"),Object(r.b)("li",{parentName:"ul"},"MultiMaps"),Object(r.b)("li",{parentName:"ul"},"Executors"),Object(r.b)("li",{parentName:"ul"},"WAN"),Object(r.b)("li",{parentName:"ul"},"Members"))))),Object(r.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"MembershipListener"),Object(r.b)("li",{parentName:"ul"},"InstanceListener"),Object(r.b)("li",{parentName:"ul"},"MigrationListener"),Object(r.b)("li",{parentName:"ul"},"DistributedObjectListener"),Object(r.b)("li",{parentName:"ul"},"PartitionLostListener"))),Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.nio.ssl.SSLContextFactory"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.spi.discovery.DiscoveryStrategy"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.core.QueueStore"))),Object(r.b)("li",{parentName:"ul"},"\u96c6\u5408",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u76d1\u542c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ItemListener"))),Object(r.b)("li",{parentName:"ul"},"\u7c7b\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Queue"),Object(r.b)("li",{parentName:"ul"},"Set"),Object(r.b)("li",{parentName:"ul"},"List"))))),Object(r.b)("li",{parentName:"ul"},"Map",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u76d1\u542c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"EntryListener"),Object(r.b)("li",{parentName:"ul"},"MapListener"),Object(r.b)("li",{parentName:"ul"},"MapClearedListener"),Object(r.b)("li",{parentName:"ul"},"MapEvictedListener"),Object(r.b)("li",{parentName:"ul"},"EntryAddedListener"),Object(r.b)("li",{parentName:"ul"},"EntryEvictedListener"),Object(r.b)("li",{parentName:"ul"},"EntryRemovedListener"),Object(r.b)("li",{parentName:"ul"},"EntryMergedListener"),Object(r.b)("li",{parentName:"ul"},"EntryUpdatedListener"))),Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.map.merge.MapMergePolicy",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.map.merge.PutIfAbsentMapMergePolicy"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.map.merge.HigherHitsMapMergePolicy"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.map.merge.PassThroughMergePolicy"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.map.merge.LatestUpdateMapMergePolicy"))),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.partition.PartitionLostListener"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.core.MapStore"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.core.MapLoader"))))),Object(r.b)("li",{parentName:"ul"},"Query",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.query.Predicate"))),Object(r.b)("li",{parentName:"ul"},"Cache"),Object(r.b)("li",{parentName:"ul"},"Topic",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.core.MessageListener"))),Object(r.b)("li",{parentName:"ul"},"Reliable Topic",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u63a5\u53e3\u540c\u4e3a ITopic"),Object(r.b)("li",{parentName:"ul"},"\u4f46\u5185\u90e8\u4f7f\u7528 Hazelcast Ringbuffer \u6570\u636e\u7ed3\u6784"))),Object(r.b)("li",{parentName:"ul"},"JobTracker",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u6765\u505a MR"))),Object(r.b)("li",{parentName:"ul"},"Semaphore"),Object(r.b)("li",{parentName:"ul"},"Lock"),Object(r.b)("li",{parentName:"ul"},"Ringbuffer",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9879",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5bb9\u91cf"),Object(r.b)("li",{parentName:"ul"},"TTL"),Object(r.b)("li",{parentName:"ul"},"\u5907\u4efd\u6570\u91cf"),Object(r.b)("li",{parentName:"ul"},"\u5f02\u6b65\u5907\u4efd\u6570\u91cf"),Object(r.b)("li",{parentName:"ul"},"\u5185\u5b58\u683c\u5f0f"),Object(r.b)("li",{parentName:"ul"},"\u5b58\u50a8"))),Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.core.RingbufferStore"))))),Object(r.b)("li",{parentName:"ul"},"\u5e8f\u5217\u5316",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.IdentifiedDataSerializable"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.DataSerializableFactory"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.DataSerializable"),Object(r.b)("li",{parentName:"ul"},"com.hazelcast.nio.serialization.Portable"))))),Object(r.b)("li",{parentName:"ul"},"\u670d\u52a1"),Object(r.b)("li",{parentName:"ul"},"Quorum",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u76d1\u542c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"com.hazelcast.quorum.QuorumListener"))))),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u4ee3\u7801\u90e8\u7f72",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542f\u4e86, \u5219\u5141\u8bb8\u4ece\u5176\u4ed6\u96c6\u7fa4\u6210\u5458\u52a0\u8f7d\u7c7b"),Object(r.b)("li",{parentName:"ul"},"\u7b80\u5316\u90e8\u7f72, \u4e0d\u9700\u8981\u5728\u6240\u6709\u8282\u70b9\u90fd\u90e8\u7f72\u7c7b"),Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7c7b\u7f13\u5b58\u6a21\u5f0f"),Object(r.b)("li",{parentName:"ul"},"\u63a7\u5236\u5982\u4f55\u5904\u7406\u7c7b\u52a0\u8f7d\u8bf7\u6c42"),Object(r.b)("li",{parentName:"ul"},"\u9ed1\u540d\u5355\u524d\u7f00"),Object(r.b)("li",{parentName:"ul"},"\u767d\u540d\u5355\u524d\u7f00"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u65b9\u8fc7\u6ee4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982\u53ea\u4ece lite \u8282\u70b9\u8bf7\u6c42"))))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"com.hazelcast.core.server.StartServer"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u542f\u52a8\u7c7b")))),Object(r.b)("h2",{id:"\u7ebf\u7a0b\u6a21\u578b"},"\u7ebf\u7a0b\u6a21\u578b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"IO \u7ebf\u7a0b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a hazelcast.io.thread.count=3, \u5373 1 \u63a5\u6536, 3 \u8bfb, 3 \u5199"),Object(r.b)("li",{parentName:"ul"},"\u8bfb\u5199\u6709\u81ea\u5df1\u7684 Selector.select \u4e8b\u4ef6\u5206\u53d1"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u53d1\u73b0\u8bfb\u6216\u5199\u7ebf\u7a0b\u8d1f\u8f7d\u4e0d\u5747\u8861\u7684\u65f6\u5019,\u4f1a\u81ea\u52a8\u8c03\u6574,\u53ef\u901a\u8fc7 hazelcast.io.balancer.interval.seconds=20 \u63a7\u5236,\u8bbe\u7f6e\u4e3a < 0 \u5373\u5173\u95ed"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u8bfb\u7ebf\u7a0b\u5728\u8bfb\u53d6\u65f6\u53d1\u73b0\u8be5\u5305\u4e3a\u64cd\u4f5c\u6216\u4e8b\u4ef6\u65f6,\u4f1a\u5c06\u5176\u8fc1\u79fb\u5230\u76f8\u5e94\u7684\u7ebf\u7a0b\u505a\u540e\u7eed\u7684\u63a5\u6536\u5904\u7406"),Object(r.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u5206\u7c7b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u63a5\u6536\u7ebf\u7a0b"),Object(r.b)("li",{parentName:"ul"},"\u8bfb\u7ebf\u7a0b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 hazelcast.io.input.thread.count \u5355\u72ec\u63a7\u5236"))),Object(r.b)("li",{parentName:"ul"},"\u5199\u7ebf\u7a0b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 hazelcast.io.ouput.thread.count \u5355\u72ec\u63a7\u5236"))))))),Object(r.b)("li",{parentName:"ul"},"Event \u7ebf\u7a0b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570\u91cf hazelcast.event.thread.count=5"),Object(r.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u961f\u5217 hazelcast.event.queue.capacity=1000000"),Object(r.b)("li",{parentName:"ul"},"\u653e\u5165\u4e8b\u4ef6\u961f\u5217\u7684\u8d85\u65f6\u65f6\u95f4 hazelcast.event.queue.timeout.millis=250"))),Object(r.b)("li",{parentName:"ul"},"IExecutor \u7ebf\u7a0b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"li"},"ExecutorConfig")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"<executor>")," \u63a7\u5236"),Object(r.b)("li",{parentName:"ul"},"\u662f Hazelcast \u63d0\u4f9b\u7684\u670d\u52a1\u800c\u4e0d\u662f\u5185\u90e8\u4f7f\u7528\u7684\u7ebf\u7a0b"))),Object(r.b)("li",{parentName:"ul"},"Operation \u7ebf\u7a0b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u7247\u5173\u8054",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570 hazelcast.operation.thread.count property=Max(CORE * 2, 2)"),Object(r.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u9009\u62e9\u65b9\u5f0f ",Object(r.b)("inlineCode",{parentName:"li"},"threadIndex = partitionId % partition thread-count")),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u5b9c\u5728\u8fd9\u7c7b\u7ebf\u7a0b\u4e2d\u64cd\u4f5c\u8fc7\u957f\u7684\u64cd\u4f5c,\u7ebf\u7a0b\u963b\u585e\u4f1a\u5bfc\u81f4\u540e\u7eed\u5206\u7247\u7684\u64cd\u4f5c\u53d7\u5230\u5f71\u54cd"))),Object(r.b)("li",{parentName:"ul"},"\u901a\u7528",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570 hazelcast.operation.generic.thread.count=Max(CORE / 2, 2)"),Object(r.b)("li",{parentName:"ul"},"\u6240\u6709\u975e\u5206\u7247\u76f8\u5173\u7684\u64cd\u4f5c\u90fd\u5728\u8fd9\u7c7b\u7ebf\u7a0b\u4e2d\u64cd\u4f5c"),Object(r.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u5728 genericWorkQueue"))),Object(r.b)("li",{parentName:"ul"},"\u4f18\u5148",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u5728 genericPriorityWorkQueue"),Object(r.b)("li",{parentName:"ul"},"\u901a\u7528\u7ebf\u7a0b\u4f1a\u5148\u68c0\u67e5 genericPriorityWorkQueue")))))),Object(r.b)("h3",{id:"\u6162\u64cd\u4f5c\u68c0\u6d4b"},"\u6162\u64cd\u4f5c\u68c0\u6d4b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"hazelcast.slow.operation.detector.enabled\nhazelcast.slow.operation.detector.log.purge.interval.seconds\nhazelcast.slow.operation.detector.log.retention.seconds\nhazelcast.slow.operation.detector.stacktrace.logging.enabled\nhazelcast.slow.operation.detector.threshold.millis\n")),Object(r.b)("h2",{id:"version"},"Version"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://docs.hazelcast.org/docs/rn/index.html"},"Release Notes"))),Object(r.b)("h2",{id:"imdg-40"},"IMDG 4.0"),Object(r.b)("p",null,"Java 8 Language Level\nLift the language level for Hazelcast members and their API to Java 8. Add a new Java 8\nclient. Continue to maintain the Java 6 compatible client. This will allow us to take advantage\nof Java 8 language features.\nJava 9 Modularisation Java 9 modularisation for Hazelcast IMDG, which introduces Jigsaw - a new modular\nsystems with a strict enforcement of module boundaries.\nProper Separation of Public and\nPrivate APIs Re-design of the whole private/public API to keep as much private as possible.\nPublic and Stable SPI Make SPI a second public and stable API. This work includes many refactorings, client\nprotocol enhancements, documentation efforts, and reference implementations.\nEntryProcessor Contract\nFormalisation\nOptimization of the EntryProcessor which would bring the IMap behaviour inline with the\nJCache behaviour.\nUnification of Client / Member\nBehaviour in Exceptional States\nEqualization of exceptions in client-side and member-side so that clients can throw the same\nexceptions as server whenever possible. This work also includes a documentation effort on\nexceptional cases for each method."),Object(r.b)("h2",{id:"imdg-39"},"IMDG 3.9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Features\nNear Cache: Key Store-byReference\nOption Key store-by-reference option for IMap and Hazelcast JCache Near Cache.\nDynamic Creation of Specificly\nConfigured Distributed Objects Ability to define new data structures with custom configuration on the fly.\nGigantic Cache Migration\nEnhancements Improvements in partition migration process to allow better gigantic cache migrations.\nLazy Initiation for Java Client An async client factory to connect lazily and in a non-blocking manner.\nClient Support for User Code\nDeployment Dynamic Classloading from clients for User Code Deployment.\nQuery Async API Async query methods on the IMap")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Security Features\nMutual TLS Auth Java Client Allow a member to authenticate a client using a certificate installed in the client\nMutual TLS Auth C# Client Allow a member to authenticate a client using a certificate installed in the client\nManagement Center TLS TLS from members to Man Center. TLS from browser. TLS for REST endpoint\nTLS for REST endpoint on\nMembers\nGeneral Security Hardening Implement things like password blacklisting, password complexity requirements, toggling off\nof non-secure mechanisms when secure version is enabled and so on\nFast SSL/TLS Make SSL/TLS almost as fast as unencrypted.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"New Hazelcast IMDG 3.9 Enterprise Features\nDynamic Addition of WAN\nEndpoints Ability to add WAN Targets to a running cluster.\nNearCache Stats in Management\nCenter\nProvision of showing data inside Near-Cache of client or member, similar to IMap/Cache in\nManagement Center.\nSearch Indexes in HD Memory Support for sorted and unsorted indexes in Hazelcast HD Memory Store.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"New Hazelcast IMDG 3.9 Clients Features\nSimulator Integrations of\nC++, Python, and Node.js Clients Integration of C++, Python, and Node.js clients into Hazelcast Simulator.\nSSL Performance Improvements\nfor .NET Client Large performance increase in SSL when using the .NET Client.\nProjections for .NET Client Add projections (returning attributes rather than full values) to .NET.\nPaging Predicate for .NET Client Support for paging predicates in Hazelcast .NET Client.\nExecutorService for C++ Client Ability to use the distributed ExecutorService from Hazelcast C++ Client.\nNear Cache for C++ Client Add near cache to C++ client\nTLS for C++ Client Add TLS encryption for C++ Clients communicating with members")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"New Hazelcast IMDG 3.9 Cloud & Plugins Features\nGoogle Cloud Platform Integration SPI Plugin for GCP for Cloud Discovery with a support for partition groups.\nAWS support for C++ Client We have comprehensive cloud support for Java. Adding AWS to C++.\nStats for Hibernate\nLocalRegionCache Ability to provide statistics for Hibernate LocalRegionCache.\nWeb Sessions for WebSphere\nLiberty Web sessions replication plugin for WebSphere Liberty"))),Object(r.b)("h3",{id:"imgd-38"},"IMGD 3.8"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://hazelcast.com/content/Whats_New_in_Hazelcast_IMDG_3.8_Slides.pdf"},"http://hazelcast.com/content/Whats_New_in_Hazelcast_IMDG_3.8_Slides.pdf")),Object(r.b)("li",{parentName:"ul"},"Scheduled Executor Service",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Delays operations for single execution or"),Object(r.b)("li",{parentName:"ul"},"Offers to schedule tasks for recurring events"),Object(r.b)("li",{parentName:"ul"},"Supports execution with member selection"))),Object(r.b)("li",{parentName:"ul"},"Continuous Query Cache \u2013 open sourced!",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Keeps a local cache on clients or members"),Object(r.b)("li",{parentName:"ul"},"Local cache is automatically updated"),Object(r.b)("li",{parentName:"ul"},"Predicate is used to create a view on-top of the overall dataset"))),Object(r.b)("li",{parentName:"ul"},"Query Projection",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Helps to optimize traffic"),Object(r.b)("li",{parentName:"ul"},"Offers functionality similar to SELECT x, y, z queries"),Object(r.b)("li",{parentName:"ul"},"Optimized handling of large object hierarchies"))),Object(r.b)("li",{parentName:"ul"},"Revised Aggregations API",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Fast way to retrieve standard aggregates, such as min, max, avg, \u2026"),Object(r.b)("li",{parentName:"ul"},"Supports the usage of existing indexes"),Object(r.b)("li",{parentName:"ul"},"Easy to use API"))),Object(r.b)("li",{parentName:"ul"},"User Code Deployment",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Lite-Member contains additional classes"),Object(r.b)("li",{parentName:"ul"},"Black- and Whitelisting support"),Object(r.b)("li",{parentName:"ul"},"Remote Class Caching support"),Object(r.b)("li",{parentName:"ul"},"Security Restrictions support"))),Object(r.b)("li",{parentName:"ul"},"Rolling Upgrades"),Object(r.b)("li",{parentName:"ul"},"New Hazelcast IMDG 3.8 Features",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Fast Aggregations Based on Queries"),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u4ee3\u7801\u90e8\u7f72",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u8bbf\u95ee\u548c\u4f7f\u7528\u7528\u6237\u5b9a\u4e49\u7684\u7c7b, \u4e0d\u9700\u5176\u7c7b\u8981\u5728\u7c7b\u8def\u5f84\u4e2d"))),Object(r.b)("li",{parentName:"ul"},"\u67e5\u8be2\u6620\u5c04"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0 RingBuffer \u5b58\u50a8"),Object(r.b)("li",{parentName:"ul"},"\u6301\u7eed\u67e5\u8be2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e4b\u524d\u4e3a\u4f01\u4e1a\u7248\u529f\u80fd, \u73b0\u5728\u5f00\u6e90\u4e86"))),Object(r.b)("li",{parentName:"ul"},"\u7edf\u4e00 IMap \u548c JCache \u7684 Near Cache \u5b9e\u73b0"),Object(r.b)("li",{parentName:"ul"},"Near Cache \u6027\u80fd\u63d0\u5347"),Object(r.b)("li",{parentName:"ul"},"Eventually Consistent Near Cache",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A guarantee of delivery of cache invalidations to the near cache."))),Object(r.b)("li",{parentName:"ul"},"HyperLogLog",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 HyperLogLog \u6570\u636e\u7ed3\u6784"))),Object(r.b)("li",{parentName:"ul"},"Scheduled Executor Service",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u7684  java.util.concurrent.ScheduledExecutorService"))),Object(r.b)("li",{parentName:"ul"},"Queue \u548c Lock \u652f\u6301 Quorum"))),Object(r.b)("li",{parentName:"ul"},"New Hazelcast IMDG 3.8 Enterprise Features",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Rolling Member Upgrades for Minor Releases",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Extending current rolling upgrade capability of Hazelcast IMDG (client rolling upgradeability, patch version rolling member upgrades) to allow heterogeneous versions of Hazelcast IMDG members to be rolling upgraded without service interruption for minor version changes."))),Object(r.b)("li",{parentName:"ul"},"Copying HRS Data from a Source to a Target Cluster",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ability to copy the Hot Restart store files from a source environment to a target environment (for example, product to test environment). This feature also applies to running sources."))),Object(r.b)("li",{parentName:"ul"},"One-Off WAN Sync with Dynamically Added Endpoint",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ability to copy all Maps\u2019 content to a target cluster dynamically in runtime."))),Object(r.b)("li",{parentName:"ul"},"SSL Performance Improvements (Java)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Large performance increase in SSL when using the Java client."))),Object(r.b)("li",{parentName:"ul"},"LDAP Integration for Management Center",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Authentication and authorizarion with LDAP in Management Center."))),Object(r.b)("li",{parentName:"ul"},"Many Management Center Enhancements",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"More metrics, stats, and improved usability and monitoring."))))),Object(r.b)("li",{parentName:"ul"},"\u65b0\u7684\u5ba2\u6237\u7aef\u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 TLS \u8bc1\u4e66\u4f5c\u4e3a\u6388\u6743"),Object(r.b)("li",{parentName:"ul"},"Simulator Integration for Hazelcast .NET Client"),Object(r.b)("li",{parentName:"ul"},"Node.js \u5ba2\u6237\u7aef\u589e\u5f3a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"RingBuffer, Topic, and Near Cache Support for Node.js client."))),Object(r.b)("li",{parentName:"ul"},"Node.js \u5ba2\u6237\u7aef\u652f\u6301 SSL"),Object(r.b)("li",{parentName:"ul"},"Near Cache Support for C++ Client"),Object(r.b)("li",{parentName:"ul"},"AWS Discovery for C++ Client"))),Object(r.b)("li",{parentName:"ul"},"New Hazelcast IMDG 3.8 Plugins Features",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Pivotal\xae CloudFoundry"),Object(r.b)("li",{parentName:"ul"},"IBM DynaCache API Support"),Object(r.b)("li",{parentName:"ul"},"Discovery SPI based AWS Module"),Object(r.b)("li",{parentName:"ul"},"Striim Hot Cache Adapter"),Object(r.b)("li",{parentName:"ul"},"Hibernate 5.2 Support")))))}u.isMDXComponent=!0}}]);