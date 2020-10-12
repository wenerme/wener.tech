(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{391:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),b=(a(0),a(557)),l={id:"hibernate-orm",title:"Hibernate"},i={unversionedId:"java/library/hibernate-orm",id:"java/library/hibernate-orm",isDocsHomePage:!1,title:"Hibernate",description:"Hibernate",source:"@site/contents/notes/java/library/hibernate.md",slug:"/java/library/hibernate-orm",permalink:"/notes/java/library/hibernate-orm",version:"current",sidebar:"docs",previous:{title:"Hazelcast",permalink:"/notes/java/library/hazelcast"},next:{title:"Hibernate Enver",permalink:"/notes/java/library/hibernate-enver"}},c=[{value:"\u6587\u6863\u8def\u5f84",id:"\u6587\u6863\u8def\u5f84",children:[]},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",children:[]},{value:"What&#39;s new in Hibernate 5",id:"whats-new-in-hibernate-5",children:[]},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[]},{value:"Fetching \u7b56\u7565",id:"fetching-\u7b56\u7565",children:[]},{value:"\u4e00\u7ea7\u7f13\u5b58 vs \u4e8c\u7ea7\u7f13\u5b58",id:"\u4e00\u7ea7\u7f13\u5b58-vs-\u4e8c\u7ea7\u7f13\u5b58",children:[]},{value:"2LC - \u4e8c\u7ea7\u7f13\u5b58",id:"2lc---\u4e8c\u7ea7\u7f13\u5b58",children:[]},{value:"Hibernate \u66f4\u65b0\u64cd\u4f5c",id:"hibernate-\u66f4\u65b0\u64cd\u4f5c",children:[]},{value:"\u591a\u79df\u6237/Multi-Tenancy",id:"\u591a\u79df\u6237multi-tenancy",children:[]},{value:"JSON",id:"json",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5185\u5d4c\u81ea\u5b9a\u4e49\u65b9\u8a00\u51fd\u6570",id:"\u5185\u5d4c\u81ea\u5b9a\u4e49\u65b9\u8a00\u51fd\u6570",children:[]}]}],p={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"hibernate"},"Hibernate"),Object(b.b)("h2",{id:"\u6587\u6863\u8def\u5f84"},"\u6587\u6863\u8def\u5f84"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.jboss.org/hibernate/orm"}),"https://docs.jboss.org/hibernate/orm")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hibernate/hibernate-orm/blob/master/hibernate-core/src/main/antlr/hql.g"}),"https://github.com/hibernate/hibernate-orm/blob/master/hibernate-core/src/main/antlr/hql.g")),Object(b.b)("h2",{id:"\u914d\u7f6e\u9009\u9879"},"\u914d\u7f6e\u9009\u9879"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/apa.html"}),"Configuration properties")),Object(b.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u5c5e\u6027\u4e5f\u5b9a\u4e49\u5728",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"org.hibernate.cfg.Environment")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"org.hibernate.cfg.AvailableSettings")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"org.hibernate.jpa.AvailableSettings"))))),Object(b.b)("h2",{id:"whats-new-in-hibernate-5"},"What's new in Hibernate 5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Java 8 \u652f\u6301 ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://mvnrepository.com/artifact/org.hibernate/hibernate-java8"}),"Hibernate Java 8"))),Object(b.b)("h2",{id:"\u4f18\u5316"},"\u4f18\u5316"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u5f00\u542f\u7528\u4e8e\u8c03\u8bd5\u7684\u65e5\u5fd7")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"org.hibernate.SQL: debug # \u5982\u679c\u5f00\u4e86 show_sql \u5c31\u53ef\u4ee5\u4e0d\u7528\u5f00\u8fd9\u4e2a\norg.hibernate.id: info # Logs SQL statements for id generation\norg.hibernate.type: debug # \u8bf7\u6c42\u53c2\u6570\norg.hibernate.type.descriptor.sql: trace # \u63d0\u53d6\u7684\u8fd4\u56de\u503c\norg.hibernate.cache: debug # \u7f13\u5b58\u76f8\u5173\norg.hibernate.stat: debug # \u7edf\u8ba1\norg.hibernate.event.internal: trace # \u67e5\u770b\u6240\u6709\u7684\u7f13\u5b58\u64cd\u4f5c\norg.springframework.cache: trace\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u5f00\u542f\u7528\u4e8e\u8c03\u8bd5\u7684\u914d\u7f6e")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# \u751f\u6210\u7edf\u8ba1\nhibernate.generate_statistics: true\n# \u683c\u5f0f\u5316 SQL\nhibernate.format_sql: true\n# \u663e\u793a SQL\nhibernate.show_sql: true\n# \u6dfb\u52a0 HQL \u76f8\u5173\u7684\u6ce8\u91ca\u4fe1\u606f\nhibernate.use_sql_comments: true\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# \u53ea\u9488\u5bf9\u4f7f\u7528\u4e86\u6ce8\u89e3\u7684\u5b9e\u4f53\u8fdb\u884c\u7f13\u5b58\njavax.persistence.sharedCache.mode: ENABLE_SELECTIVE\n# \u7f13\u5b58\u5904\u7406\u7c7b\nhibernate.cache.region.factory_class: com.hazelcast.hibernate.HazelcastLocalCacheRegionFactory\nhibernate.cache.hazelcast.instance_name: default # \u4f7f\u7528\u73b0\u6709\u7684 Hazelcast \u5b9e\u4f8b,\u800c\u4e0d\u662f\u521b\u5efa\nhibernate.cache.use_second_level_cache: true # \u542f\u7528\u4e8c\u7ea7\u7f13\u5b58\nhibernate.cache.use_query_cache: true # \u542f\u7528\u67e5\u8be2\u7f13\u5b58\nhibernate.cache.use_reference_entries: true # \u7f13\u5b58\u4f7f\u7528\u5f15\u7528\nhibernate.cache.use_structured_entries: true # \u4f7f\u7f13\u5b58\u6570\u636e\u7684\u7ed3\u6784\u66f4\u53ef\u8bfb\nhibernate.cache.use_minimal_puts: true # \u63d0\u793a Hibernate \u51cf\u5c11\u7f13\u5b58 put\nhibernate.cache.default_cache_concurrency_strategy: nonstrict-read-write # \u9ed8\u8ba4\u7f13\u5b58\u5e76\u53d1\u7ea7\u522b\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Hibernate \u7edf\u8ba1\u4fe1\u606f\nStatistics statistics = sessionFactory.getStatistics();\nstatistics.setStatisticsEnabled(true);\nstatistics.logSummary();\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"BatchSize")," \u63a7\u5236\u96c6\u5408\u52a0\u8f7d\u7684\u6570\u636e\u91cf"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u8bbe\u7f6e ",Object(b.b)("inlineCode",{parentName:"li"},"default_batch_fetch_size")," \u6765\u63a7\u5236\u9ed8\u8ba4\u7684\u52a0\u8f7d\u91cf"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 Bag \u6216 List \u6765\u5b9e\u73b0\u53cd\u5411\u7684\u96c6\u5408,\u800c\u975e Set, \u8fd9\u6837\u53ef\u4ee5\u5728\u4e0d\u83b7\u53d6\u6574\u4e2a\u96c6\u5408\u7684\u524d\u63d0\u4e0b\u5411\u96c6\u5408\u4e2d\u6dfb\u52a0\u5143\u7d20"),Object(b.b)("li",{parentName:"ul"},"\u7f13\u5b58\u53ea\u4f1a\u7f13\u5b58\u5b9e\u4f53\u672c\u8eab\u800c",Object(b.b)("strong",{parentName:"li"},"\u4e0d\u4f1a"),"\u7f13\u5b58\u5b9e\u4f53\u5173\u7cfb,\u4f8b\u5982: OneToMany \u96c6\u5408"),Object(b.b)("li",{parentName:"ul"},"\u96c6\u5408\u7f13\u5b58\u9700\u8981\u989d\u5916\u6dfb\u52a0\u6ce8\u89e3 ",Object(b.b)("inlineCode",{parentName:"li"},"@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_ONLY)"))),Object(b.b)("h2",{id:"fetching-\u7b56\u7565"},"Fetching \u7b56\u7565"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4fdd\u7559\u9ed8\u8ba4,\u5efa\u8bae\u5728\u67e5\u8be2\u65f6\u63a7\u5236,\u7ec6\u7c92\u5ea6\u63a7\u5236"),Object(b.b)("li",{parentName:"ul"},"WHEN -  \u4f55\u65f6\u83b7\u53d6\u6570\u636e - \u901a\u8fc7\u5404\u4e2a ToOne \u548c ToMany \u4e0a\u7684 fetch \u63a7\u5236",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"EAGER - ToOne \u9ed8\u8ba4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5f53\u5173\u8054\u5173\u7cfb\u8f83\u6df1\u65f6\u4f1a\u52a0\u8f7d\u5927\u91cf\u6570\u636e"))),Object(b.b)("li",{parentName:"ul"},"LAZY - ToMany \u9ed8\u8ba4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u61d2\u60f0\u7ea7\u522b",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5c5e\u6027\u7ea7\u522b: \u8f83\u5c11\u4f7f\u7528"),Object(b.b)("li",{parentName:"ul"},"ToOne",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4ee3\u7406\u5b9e\u73b0: \u5728\u4f7f\u7528 ID \u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6574\u4e2a\u5bf9\u8c61\u52a0\u8f7d,\u4ee3\u7406\u5bf9\u8c61\u7531 Hibernate \u7ba1\u7406"),Object(b.b)("li",{parentName:"ul"},"\u975e\u4ee3\u7406\u5b9e\u73b0: \u5728\u4f7f\u7528 ID \u65f6\u4f1a\u5bfc\u81f4\u6574\u4e2a\u5bf9\u8c61\u52a0\u8f7d,\u9700\u8981\u6784\u5efa\u65f6\u7ec7\u5165"))))))),Object(b.b)("li",{parentName:"ul"},"EXTRA LAZY - \u901a\u8fc7 Hibernate LazyCollection \u6ce8\u89e3\u8bbe\u7f6e",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ea\u5bf9\u96c6\u5408\u6709\u6548"),Object(b.b)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u96c6\u5408\u5185\u5143\u7d20\u7684 ID \u65f6\u4e5f\u4e0d\u4f1a\u5bfc\u81f4\u96c6\u5408\u4e2d\u5b9e\u4f53\u7684\u6570\u636e\u88ab\u52a0\u8f7d"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u96c6\u5408\u4e2d\u7684\u5355\u4e2a\u5143\u7d20\u53ea\u4f1a\u52a0\u8f7d\u5355\u4e2a,\u800c\u4e0d\u4f1a\u52a0\u8f7d\u6574\u4e2a\u96c6\u5408"),Object(b.b)("li",{parentName:"ul"},"\u96c6\u5408\u5927\u5c0f\u4e0d\u4f1a\u88ab\u7f13\u5b58"))))),Object(b.b)("li",{parentName:"ul"},"HOW - \u5982\u4f55\u83b7\u53d6\u6570\u636e - Hibernate \u6269\u5c55,\u4f7f\u7528 Fetch \u6ce8\u89e3\u63a7\u5236",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"JOIN",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e ToOne \u5173\u7cfb"),Object(b.b)("li",{parentName:"ul"},"\u5728\u5bf9\u96c6\u5408\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\u4e00\u822c\u6570\u636e\u5e93 Select \u4f1a\u6bd4 Join \u66f4\u5feb"))),Object(b.b)("li",{parentName:"ul"},"SELECT",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u96c6\u5408\u7684\u9ed8\u8ba4\u83b7\u53d6\u65b9\u5f0f,\u907f\u514d\u7b1b\u5361\u5c14\u4e58\u79ef"),Object(b.b)("li",{parentName:"ul"},"\u9700\u8981\u6ce8\u610f N+1 \u95ee\u9898, \u6bcf\u4e2a\u96c6\u5408\u5143\u7d20\u90fd\u83b7\u53d6\u4e00\u6b21"))),Object(b.b)("li",{parentName:"ul"},"BATCH - @Fetch(FetchMode.SELECT) @BatchSize(size = 10)",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728\u8bbf\u95ee\u4e00\u4e2a\u5143\u7d20\u65f6\u5373\u52a0\u8f7d\u591a\u4e2a\u5143\u7d20"),Object(b.b)("li",{parentName:"ul"},"\u6279\u91cf\u52a0\u8f7d\u6570\u91cf\u53ef\u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},"\u6279\u91cf\u52a0\u8f7d\u6570\u91cf\u6709\u591a\u79cd\u7b97\u6cd5\u6765\u5224\u65ad"))),Object(b.b)("li",{parentName:"ul"},"SUBSELLECT",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5f53\u8bbf\u95ee\u96c6\u5408\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u65f6\u52a0\u8f7d\u6574\u4e2a\u96c6\u5408"),Object(b.b)("li",{parentName:"ul"},"\u6027\u80fd\u53d6\u51b3\u4e8e\u6570\u636e\u5e93"))),Object(b.b)("li",{parentName:"ul"},"PROFILE",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u6307\u5b9a\u591a\u4e2a\u914d\u7f6e\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u4f7f\u7528\u4e0d\u540c\u7684\u7b56\u7565")))))),Object(b.b)("h2",{id:"\u4e00\u7ea7\u7f13\u5b58-vs-\u4e8c\u7ea7\u7f13\u5b58"},"\u4e00\u7ea7\u7f13\u5b58 vs \u4e8c\u7ea7\u7f13\u5b58"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e00\u7ea7\u7f13\u5b58",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Session \u7ea7\u522b\u7f13\u5b58"),Object(b.b)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d"),Object(b.b)("li",{parentName:"ul"},"\u4e8b\u52a1\u4e4b\u95f4\u4e0d\u4f1a\u5171\u4eab\u7f13\u5b58\u6570\u636e"),Object(b.b)("li",{parentName:"ul"},"\u4e8b\u52a1\u7ed3\u675f\u65f6\u7f13\u5b58\u5373\u88ab\u6e05\u7406"))),Object(b.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7f13\u5b58",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"SessionFactory \u7ea7\u522b\u7f13\u5b58\u5373 JVM \u7ea7\u522b\u7f13\u5b58"),Object(b.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u4f1a\u8bdd\u90fd\u4f1a\u5171\u4eab\u7f13\u5b58"),Object(b.b)("li",{parentName:"ul"},"\u4e8b\u52a1\u5b8c\u6210\u540e\u7f13\u5b58\u4f9d\u7136\u5b58\u5728")))),Object(b.b)("h2",{id:"2lc---\u4e8c\u7ea7\u7f13\u5b58"},"2LC - \u4e8c\u7ea7\u7f13\u5b58"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u542f\u7528",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ef\u6253\u5f00\u5168\u5c40\u7684\u4e8c\u7ea7\u7f13\u5b58,sharedMode ALL"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u9488\u5bf9\u5355\u4e2a\u5b9e\u4f53\u548c\u96c6\u5408\u8fdb\u884c\u7f13\u5b58"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u5728\u4f1a\u8bdd\u7ea7\u522b\u63a7\u5236\u7f13\u5b58\u6a21\u5f0f"))),Object(b.b)("li",{parentName:"ul"},"\u53ef\u7f13\u5b58\u6240\u6709\u5c5e\u6027(\u9ed8\u8ba4)\u6216\u975e\u61d2\u52a0\u8f7d\u5c5e\u6027"),Object(b.b)("li",{parentName:"ul"},"userguide ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.jboss.org/hibernate/orm/current/userguide/html_single/chapters/caching/Caching.html"}),"Caching")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.slideshare.net/brmeyer/hibernate-orm-performance-31550150"}),"Hibernate ORM: Tips, Tricks, and Performance Techniques")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://what-when-how.com/hibernate/optimizing-fetching-and-caching-hibernate/"}),"\u6570\u636e\u83b7\u53d6\u548c\u7f13\u5b58\u4f18\u5316")),Object(b.b)("li",{parentName:"ul"},"\u96c6\u5408\u7f13\u5b58",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"@Cachable")," \u4e0d\u652f\u6301 Field"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"hibernate.cache.auto_evict_collection_cache"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed, \u56e0\u4e3a\u8ddf\u8e2a\u8be5\u72b6\u6001\u4f1a\u6709\u4e00\u5b9a\u6027\u80fd\u5f71\u54cd"),Object(b.b)("li",{parentName:"ul"},"\u5728\u53cc\u5411\u5173\u7cfb\u65f6, \u5f53\u4e0d\u662f\u5173\u7cfb\u6240\u5c5e\u65b9, \u662f\u5426\u81ea\u52a8\u6e05\u9664\u96c6\u5408\u7f13\u5b58"))))),Object(b.b)("li",{parentName:"ul"},"FAQ",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f\u4f7f\u7528\u4e8c\u7ea7\u7f13\u5b58, JCache \u5728\u914d\u5408 SpringBoot Restart \u65f6\u53ef\u80fd\u4f1a\u6709 ClassLoader \u7684\u95ee\u9898",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"org.hibernate.PropertyAccessException: Could not set field value ","[VAL]"," value by reflection : ","[class me.wener.CustomerEntity.type]"," setter of me.wener.CustomerEntity.type.type"),Object(b.b)("li",{parentName:"ul"},"\u5728 ",Object(b.b)("inlineCode",{parentName:"li"},"META-INF/spring-devtools.properties")," \u6dfb\u52a0\u76f8\u5e94 jar \u5305",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(b.b)("inlineCode",{parentName:"li"},"restart.include.jcache=/jcache-[.0-9]+\\.jar"))))))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u4e8c\u7ea7\u7f13\u5b58\u7684\u5e76\u53d1\u7b56\u7565")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CacheConcurrencyStrategy"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NONE"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e0d\u4f7f\u7528\u4efb\u4f55\u5e76\u53d1\u7b56\u7565")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"READ_ONLY"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6700\u7b80\u5355\u548c\u6700\u4f18\u7684")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NONSTRICT_READ_WRITE"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5982\u679c\u66f4\u65b0\u8f83\u5c11\u4e14\u4e0d\u6613\u78b0\u649e,\u4e8b\u52a1\u9694\u79bb\u4e0d\u5f3a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"READ_WRITE"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u652f\u6301\u66f4\u65b0,\u5728\u4f7f\u7528\u4e32\u884c\u4e8b\u52a1\u7ea7\u522b\u65f6\u4e0d\u5e94\u8be5\u4f7f\u7528")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRANSACTIONAL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9700\u8981\u652f\u6301\u4e8b\u52a1\u7684\u7f13\u5b58,\u9700\u8981 JTA")))),Object(b.b)("h2",{id:"hibernate-\u66f4\u65b0\u64cd\u4f5c"},"Hibernate \u66f4\u65b0\u64cd\u4f5c"),Object(b.b)("p",null,"PreUpdate \u53ea\u6709\u5728\u4fee\u6539\u5b9e\u4f53\u65f6\u624d\u4f1a\u89e6\u53d1,\u5982\u679c\u4f7f\u7528 Hibernate \u7684 EXTRA LAZY, \u5f80 Collection \u4e2d\u63d2\u5165\u65f6\u65f6\u4e0d\u4f1a\u89e6\u53d1\u539f\u5b9e\u4f53\u7684,\u56e0\u6b64 PreUpdate \u5728\u4fee\u6539\u90e8\u5206 Collection \u7684\u65f6\u5019\u4e0d\u4f1a\u88ab\u89e6\u53d1."),Object(b.b)("p",null,"Version \u5b57\u6bb5\u53ea\u6709\u5728\u81ea\u5df1\u6240\u6301\u6709\u719f\u6089\u548c\u81ea\u5df1\u6240\u6301\u6709\u7684\u5173\u7cfb\u88ab\u4fee\u6539\u65f6\u624d\u4f1a\u66f4\u65b0 Version, \u66f4\u65b0 Version \u65f6\u4e5f\u4f1a\u89e6\u53d1 PreUpdate \u4fee\u6539."),Object(b.b)("p",null,"\u5728 Hibernate \u4e2d\u53ef\u5f3a\u5236\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"OptimisticLock")," \u4f7f\u5f97\u5728\u66f4\u65b0\u96c6\u5408\u65f6\u4e5f\u89e6\u53d1 Version \u7684\u4fee\u6539,\u56e0\u6b64\u4e5f\u53ef\u4ee5\u5f3a\u5236\u89e6\u53d1 PreUpdate \u4e8b\u4ef6."),Object(b.b)("h2",{id:"\u591a\u79df\u6237multi-tenancy"},"\u591a\u79df\u6237/Multi-Tenancy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e09\u79cd\u6a21\u5f0f",Object(b.b)("ol",{parentName:"li"},Object(b.b)("li",{parentName:"ol"},"DB per tenant"),Object(b.b)("li",{parentName:"ol"},"Schema per tenant"),Object(b.b)("li",{parentName:"ol"},"\u6bcf\u4e2a Schema \u4e00\u4e2a\u8fde\u63a5\u6c60"),Object(b.b)("li",{parentName:"ol"},"\u6bcf\u6b21\u6307\u5b9a Schema"),Object(b.b)("li",{parentName:"ol"},"Discriminator field"))),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u63a5\u53e3",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"CurrentTenantIdentifierResolver",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u7684\u79df\u6237"))),Object(b.b)("li",{parentName:"ul"},"MultiTenantConnectionProvider",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u79df\u6237\u83b7\u53d6\u94fe\u63a5"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://dzone.com/articles/spring-boot-hibernate-multitenancy-implementation"}),"Multi-Tenancy Implementation for Spring Boot + Hibernate Projects"))),Object(b.b)("h2",{id:"json"},"JSON"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/velo/hibernate-native-json"}),"https://github.com/velo/hibernate-native-json")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wenerme/postjava"}),"https://github.com/wenerme/postjava")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@TypeDefs({\n  @TypeDef(name = "json", typeClass = JsonStringType.class),\n  @TypeDef(name = "jsonb", typeClass = JsonBinaryType.class),\n  @TypeDef(name = "json-node", typeClass = JsonNodeStringType.class),\n  @TypeDef(name = "jsonb-node", typeClass = JsonNodeBinaryType.class),\n})\n@Entity\n@Table(name = "users")\n@Setter\n@Getter\nclass UserEntity {\n  Integer id;\n  @Type(type="json-node")\n  JsonNode attributes;\n  @Type(type="jsonb")\n  Map<String,String> labels;\n}\n')),Object(b.b)("h2",{id:"faq"},"FAQ"),Object(b.b)("h3",{id:"\u5185\u5d4c\u81ea\u5b9a\u4e49\u65b9\u8a00\u51fd\u6570"},"\u5185\u5d4c\u81ea\u5b9a\u4e49\u65b9\u8a00\u51fd\u6570"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/17368962"}),"Can I nest functions in Hibernate custom dialect ?")),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u80fd, \u6700\u7b80\u5355\u7684\u505a\u6cd5\u662f\u589e\u52a0\u53c2\u6570\u6570\u91cf, \u5408\u5e76\u6210\u5355\u4e2a\u51fd\u6570")))}o.isMDXComponent=!0},557:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(a),m=n,O=u["".concat(l,".").concat(m)]||u[m]||j[m]||b;return a?r.a.createElement(O,i(i({ref:t},p),{},{components:a})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);