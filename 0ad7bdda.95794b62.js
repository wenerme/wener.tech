(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),l=a(8),r=(a(0),a(830)),b={id:"thanos",title:"Thanos"},i={unversionedId:"devops/metrics/thanos",id:"devops/metrics/thanos",isDocsHomePage:!1,title:"Thanos",description:"Tips",source:"@site/notes/devops/metrics/thanos.md",slug:"/devops/metrics/thanos",permalink:"/notes/devops/metrics/thanos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/thanos.md",version:"current",sidebar:"docs",previous:{title:"Thanos \u7248\u672c",permalink:"/notes/devops/metrics/thanos-version"},next:{title:"VictoriaMetrics",permalink:"/notes/devops/metrics/victoria-metrics"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"Tool",id:"tool",children:[]},{value:"\u7f13\u5b58\u914d\u7f6e",id:"\u7f13\u5b58\u914d\u7f6e",children:[]},{value:"\u5b58\u50a8\u914d\u7f6e",id:"\u5b58\u50a8\u914d\u7f6e",children:[]},{value:"Kubernetest",id:"kubernetest",children:[]},{value:"Tracing",id:"tracing",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"\bSidecar \u4e0a\u4f20\u5386\u53f2\u6587\u4ef6",id:"\bsidecar-\u4e0a\u4f20\u5386\u53f2\u6587\u4ef6",children:[{value:"Sidecar \u66b4\u9732 Prometheus \u4e3a StoreAPI",id:"sidecar-\u66b4\u9732-prometheus-\u4e3a-storeapi",children:[]}]},{value:"\u8de8\u7f51\u7edc\u90e8\u7f72\u65b9\u6848",id:"\u8de8\u7f51\u7edc\u90e8\u7f72\u65b9\u6848",children:[]},{value:"\u81ea\u52a8\u4e0b\u91c7\u6837",id:"\u81ea\u52a8\u4e0b\u91c7\u6837",children:[]}],p={toc:c};function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u591a\u79df\u6237\u65b9\u6848",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"sidecar \u914d\u7f6e external label\uff0c\u4f7f\u7528\u591a\u5c42 query"),Object(r.b)("li",{parentName:"ul"},"receive \u63a5\u6536\u591a\u79df\u6237\uff0c\u4f46\u4e0d\u63a8\u8350",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7f51\u7edc\u9694\u79bb\u573a\u666f\uff0cquerier \u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee sidecar \u65f6"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://thanos.io/storage.md"},"\u5b58\u50a8"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"S3"),Object(r.b)("li",{parentName:"ul"},"GCS"),Object(r.b)("li",{parentName:"ul"},"Azure"),Object(r.b)("li",{parentName:"ul"},"OpenStack Swift"),Object(r.b)("li",{parentName:"ul"},"Tencent COS"),Object(r.b)("li",{parentName:"ul"},"AliYun OSS"))),Object(r.b)("li",{parentName:"ul"},"\u5757\u5b58\u50a8",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u57fa\u4e8e Prometheus TSDB"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 2h \u4e00\u4e2a\u533a\u5757"),Object(r.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5757\u90fd\u6709\u5bf9\u5e94\u7684 index",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6307\u6807\u540d\u5b57"),Object(r.b)("li",{parentName:"ul"},"\u6807\u7b7e"),Object(r.b)("li",{parentName:"ul"},"\u65f6\u95f4\u8303\u56f4")))))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u79df\u6237\u9700\u8981\u4e00\u4e2a Bucket",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/thanos-io/thanos/issues/1318"},"#1318")," \b\u63d0\u8bae\u6dfb\u52a0\u524d\u7f00 - \u4f46\u5de5\u4f5c\u91cf\u5f88\u5927")))))),Object(r.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"compactor",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0d\u53c2\u4e0e\u96c6\u7fa4"),Object(r.b)("li",{parentName:"ul"},"\u538b\u7f29 OSS \u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u4e0b\u91c7\u6837 - downsampling",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5927\u4e8e 40 \u5c0f\u65f6\u521b\u5efa 5m \u91c7\u6837"),Object(r.b)("li",{parentName:"ul"},"\u5927\u4e8e 10 \u5929\u521b\u5efa 1h \u91c7\u6837"))),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6c38\u4e45\u4fdd\u7559 ",Object(r.b)("inlineCode",{parentName:"li"},"--retention.resolution-X=0d")," - X \u4e3a\u91c7\u6837\u7c7b\u578b - raw,5m,1h"),Object(r.b)("li",{parentName:"ul"},"\u6267\u884c\u4fdd\u7559\u7b56\u7565 - \u5220\u9664\u65e7\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a bucket \u90e8\u7f72\u4e00\u4e2a - \u5e76\u884c\u90e8\u7f72\u591a\u4e2a\u4f1a\u6709\u95ee\u9898"),Object(r.b)("li",{parentName:"ul"},"\u4e0b\u91c7\u6837\u5e76\u4e0d\u4f1a\u8282\u7701\u7a7a\u95f4\uff0c\u6bcf\u4e2a\u539f\u59cb\u533a\u5757\u4f1a\u6dfb\u52a0\u989d\u5916\u7684\u4e0b\u91c7\u6837\u533a\u5757\u6570\u636e - \u53ea\u6bd4\u539f\u59cb\u7684\u5c0f\u4e00\u70b9\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u5bb9\u91cf\u589e\u52a0 3 \u500d"))),Object(r.b)("li",{parentName:"ul"},"\u63d0\u5347\u8303\u56f4\u67e5\u8be2\u6027\u80fd"),Object(r.b)("li",{parentName:"ul"},"\u8fd0\u884c\u9700\u8981\u672c\u5730\u4e34\u65f6\u5b58\u50a8",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5efa\u8bae 100G"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u91cd\u542f\u540e\u5220\u9664 - \u4e0d\u9700\u8981\u6301\u4e45"))),Object(r.b)("li",{parentName:"ul"},"kube-thanos \u5c06 compact \u90e8\u7f72\u4e3a sts \u800c\u4e0d\u662f cronjob"))),Object(r.b)("li",{parentName:"ul"},"query",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\uff0c\u53ef\u6269\u5bb9"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0 Prometheus HTTP v1 API"),Object(r.b)("li",{parentName:"ul"},"PromQL"),Object(r.b)("li",{parentName:"ul"},"\u4ece StoreAPI \u83b7\u53d6\u6570\u636e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u90e8\u5206\u8fd4\u56de",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"?partial_response=1")," - \u8bf7\u6c42\u63a5\u53d7\u90e8\u5206\u54cd\u5e94"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.partial-response")," - \u63a7\u5236\u662f\u5426\u5f00\u542f\u548c\u7b56\u7565"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.timeout=2m")," - \u67e5\u8be2\u8d85\u65f6"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.lookback-delta=5m")," - \u56de\u67e5\u65f6\u95f4\uff0c\u8fc7\u77ed\u4f1a\u4ea7\u751f gap\uff0c\u81f3\u5c11\u8bbe\u7f6e\u4e3a\u6293\u53d6\u65f6\u95f4\u4e24\u500d"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--store.response-timeout")," - \u5b58\u50a8\u54cd\u5e94\u8d85\u65f6"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--no-query.partial-response")," - \u5f3a\u5236\u5173\u95ed"))),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u6307\u5b9a\u526f\u672c label \u5c31\u884c\u53bb\u91cd",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"?replicaLabels=replicaA&replicaLabels=replicaB")))),Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u53bb\u91cd",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"?dedup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.replica-label")," - \u57fa\u4e8e\u526f\u672c\u6807\u7b7e\u8fdb\u884c\u53bb\u91cd"))),Object(r.b)("li",{parentName:"ul"},"\u81ea\u52a8\u4e0b\u91c7\u6837",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"?max_source_resolution=5m")," - 0s \u7981\u7528\uff0c\u53ef\u8bbe\u7f6e\u4e3a 1h \u6216 auto",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u6570\u636e\u6709 gap \u53ef\u7981\u7528"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.auto-downsampling")," - \u9ed8\u8ba4\u4e3a step/5"))),Object(r.b)("li",{parentName:"ul"},"\u5e76\u53d1 select",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.max-concurrent-select=4")," - \u6bcf\u6b21\u8bf7\u6c42\u7684\u6700\u5927\u5e76\u53d1 select"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query.max-concurrent=20")," - \u6700\u5927\u5e76\u53d1\u67e5\u8be2\u6570"))),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u8fd4\u56de\u5b57\u6bb5"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u8fc7\u6ee4 store",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'?query=up&dedup=true&partial_response=true&storeMatch[]={__address__=~"prometheus-foo.*"}')))))),Object(r.b)("li",{parentName:"ul"},"grafana \u53ef\u914d\u7f6e\u67e5\u8be2\u53c2\u6570 ",Object(r.b)("inlineCode",{parentName:"li"},"max_source_resolution=auto&partial_response=true")))),Object(r.b)("li",{parentName:"ul"},"query-frontend",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\uff0c\u53ef\u6269\u5bb9"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u9645\u4f7f\u7528\u65f6\u5f71\u54cd\u67e5\u8be2\u6027\u80fd\u7684\u5173\u952e\u7ec4\u4ef6"),Object(r.b)("li",{parentName:"ul"},"\u5904\u7406 ",Object(r.b)("inlineCode",{parentName:"li"},"/api/v1/query_range")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-frontend.downstream-url")," - \u4e0b\u6e38 Prometheus \u5730\u5740 - \u4e00\u822c\u4e3a Thanos Query \u66b4\u9732\u5730\u5740"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-frontend.compress-responses")," - \u54cd\u5e94\u7ed3\u679c\u538b\u7f29"),Object(r.b)("li",{parentName:"ul"},"\u5e76\u884c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-query-range.max-query-length=0")," - \u9650\u5236\u67e5\u8be2\u957f\u5ea6"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-range.max-query-parallelism=14")," - \u6700\u5927\u5e76\u884c\u67e5\u8be2"))),Object(r.b)("li",{parentName:"ul"},"\u5207\u5206\u67e5\u8be2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-range.split-interval=24h")," - \u5207\u5206\u5e76\u884c\u67e5\u8be2\u7684\u95f4\u9694 ",Object(r.b)("inlineCode",{parentName:"li"},"response-cache-config")),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u907f\u514d query \u67e5\u8be2\u8fc7\u5927\u6570\u636e\u5bfc\u81f4 OOM"),Object(r.b)("li",{parentName:"ul"},"\u5e76\u884c\u67e5\u8be2\u6548\u7387\u66f4\u597d"),Object(r.b)("li",{parentName:"ul"},"query \u8d1f\u8f7d\u5747\u8861"))),Object(r.b)("li",{parentName:"ul"},"\u91cd\u8bd5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-range.max-retries-per-request=5")))),Object(r.b)("li",{parentName:"ul"},"\u7f13\u5b58",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0b\u6b21\u67e5\u8be2\u65f6\u590d\u7528"),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u5c11\u6570\u636e\u4f1a\u5e76\u884c\u67e5\u8be2\u5c31\u884c\u8865\u9f50"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301 IN-MEMORY \u548c MEMCACHED"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-range.response-cache-max-freshness=1m")," - \u7f13\u5b58\u7684\u6700\u65b0\u65f6\u95f4 - \u5c0f\u4e8e\u8be5\u65f6\u95f4\u4e0d\u7f13\u5b58"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-range.response-cache-config-file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-range.response-cache-config")))),Object(r.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u6162\u67e5\u8be2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--query-frontend.log-queries-longer-than")))))),Object(r.b)("li",{parentName:"ul"},"receive",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0 Prometheus \u8fdc\u7a0b\u5199\u5165\u63a5\u53e3\uff0c\u5199\u5165\u672c\u5730 tsdb"),Object(r.b)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u652f\u6301\u5355\u4e2a tsdb"),Object(r.b)("li",{parentName:"ul"},"\u66b4\u9732 StoreAPI"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u57fa\u4e8e\u63a8\u9001\u7684\u6307\u6807\u91c7\u96c6"),Object(r.b)("li",{parentName:"ul"},"\u7528\u4e8e\u7f51\u7edc\u4e0d\u4e92\u901a\u3001\u5916\u90e8\u6307\u6807\u91c7\u96c6\u73af\u5883"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u7ee7\u7eed\u4f20\u9012\u5230 receive",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u526f\u672c"))),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u652f\u6301\u591a\u79df\u6237",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u79df\u6237\u5934 ",Object(r.b)("inlineCode",{parentName:"li"},"--receive.tenant-header=THANOS-TENANT")," \u53ef\u7528\u4e8e\u5206\u6d41"))),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"write \u5730\u5740\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"/api/v1/receive")),Object(r.b)("li",{parentName:"ul"},"\u8282\u70b9\u8c03\u6574\u65f6\u786e\u4fdd\u6570\u636e\u88ab\u5237\u5230 \u5b58\u50a8"),Object(r.b)("li",{parentName:"ul"},"\u91cd\u542f\u540e\u53ef\u80fd\u4f1a\u6536\u5230\u5927\u91cf Prometheus \u8bf7\u6c42\u9700\u8981\u63a7\u5236\u597d\u6d41\u91cf"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"li"},'tenant_id="default-tenant"')," - \u53ef\u81ea\u884c\u63a7\u5236"),Object(r.b)("li",{parentName:"ul"},"\u8d44\u6e90\u5360\u7528\u8f83\u591a\uff0c\u53cd\u5411\u4ee3\u7406\u4e5f\u4f1a\u5360\u7528\u8d44\u6e90",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"4k/s \u5927\u7ea6 0.1 CPU, 250M \u5185\u5b58"),Object(r.b)("li",{parentName:"ul"},"0 \u8d1f\u8f7d\u7684 nginx \u591a\u4e86 1 \u7684 CPU"))))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://thanos.io/tip/proposals/201812_thanos-remote-receive.md/"},"Thanos Remote Write")))))),Object(r.b)("li",{parentName:"ul"},"rule",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5bf9\u67e5\u8be2\u6c42\u503c - \u63d0\u4f9b StoreAPI\uff0c\u7ed3\u679c\u5199\u5165\u78c1\u76d8"),Object(r.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e00\u4e2a\u7b80\u5355\u7684 Prometheus \u5b9e\u4f8b"),Object(r.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u662f\u67e5\u8be2\u7684\u5206\u5e03\u5f0f\u6570\u636e\uff0c\u67e5\u8be2\u53ef\u80fd\u5931\u8d25\uff0c\u7528\u4e8e\u76d1\u63a7\u65f6\u9700\u8981\u5c0f\u5fc3"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u8bb0\u5f55\u89c4\u5219\u3001\u544a\u8b66\u89c4\u5219"))),Object(r.b)("li",{parentName:"ul"},"sidecar",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0a\u4f20 Prometheus \u7684\u6570\u636e\u5230\u5bf9\u8c61\u5b58\u50a8"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b StoreAPI"),Object(r.b)("li",{parentName:"ul"},"\u8981\u6c42 prometheus \u8bbe\u7f6e\u53c2\u6570",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--storage.tsdb.min-block-duration=2h")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--storage.tsdb.max-block-duration=2h")))),Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u6709\u5927\u7ea6 2h \u5ef6\u65f6\uff0c\u5982\u679c prometheus \u5f02\u5e38\u6570\u636e\u4e22\u5931\u5219\u53ef\u80fd\u4e22\u5931 2h \u7684\u76d1\u63a7\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u8981\u6c42 prometheus \u914d\u7f6e external_labels - \u7528\u4e8e\u53bb\u91cd"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u4f1a\u4e0a\u4f20\u5df2\u538b\u7f29\u6570\u636e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"tsdb \u5757\u4e0b meta.json \u91cc\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"compaction.level")," \u8868\u793a\u4e86\u538b\u7f29\u7ea7\u522b - 1 \u4e3a\u672a\u538b\u7f29"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--shipper.upload-compacted")," \u4e0a\u4f20\u538b\u7f29\u6570\u636e - \u7528\u4e8e\u7b2c\u4e00\u6b21\u8fc1\u79fb"))),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u65e0\u6cd5 flush \u6570\u636e - prometheus \u65e0\u6cd5 flush wal\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u4e22\u5931 2h \u6570\u636e"))))),Object(r.b)("li",{parentName:"ul"},"store",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b58\u50a8\u7f51\u5173 - Store Gateway"),Object(r.b)("li",{parentName:"ul"},"\u8bfb\u53d6 \u5bf9\u8c61\u5b58\u50a8 \u66b4\u9732 StoreAPI"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u7d22\u5f15\u7f13\u5b58",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"in-memory"),Object(r.b)("li",{parentName:"ul"},"memcached"))),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301 Bucket \u7f13\u5b58 - \u7f13\u5b58 Prometheus \u533a\u5757\u6570\u636e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"memcached"))),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5185\u5b58\u7f13\u5b58 250M"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u6587\u4ef6\u7f13\u5b58 index-header, in-mem cache items, meta.jsons"),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u521d\u59cb\u7d22\u5f15\u8fc7\u7a0b\u53ef\u80fd\u4f1a\u8017\u8d39\u5927\u91cf\u5185\u5b58"))))),Object(r.b)("li",{parentName:"ul"},"tools",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"bucket \u7ba1\u7406\u5de5\u5177",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ls\u3001verify\u3001downsampling\u3001inspect\u3001replicate\u3001web"))),Object(r.b)("li",{parentName:"ul"},"\u89c4\u5219\u68c0\u67e5"))),Object(r.b)("li",{parentName:"ul"},"StoreAPI",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u6570\u636e\u7684\u540e\u7aef\u63a5\u53e3"),Object(r.b)("li",{parentName:"ul"},"Prometheus Sidecar"),Object(r.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b58\u50a8 - Store Gateway"),Object(r.b)("li",{parentName:"ul"},"\u5168\u5c40 alerting/recording \u89c4\u5219\u7ed3\u679c - Ruler"),Object(r.b)("li",{parentName:"ul"},"Receiver"),Object(r.b)("li",{parentName:"ul"},"\u5176\u4ed6 Queriers"),Object(r.b)("li",{parentName:"ul"},"\u5176\u4ed6\u6307\u6807\u7cfb\u7edf - OpenTSDB"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/G-Research/thanos-remote-read"},"G-Research/thanos-remote-read"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5c06 remove read \u66b4\u9732\u4e3a StoreAPI"),Object(r.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 Sidecar + Prometheus Remote Read \u6765\u8fbe\u5230\u76f8\u540c\u76ee\u7684")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Component"),Object(r.b)("th",{parentName:"tr",align:null},"Interface"),Object(r.b)("th",{parentName:"tr",align:null},"Port"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Sidecar"),Object(r.b)("td",{parentName:"tr",align:null},"gRPC"),Object(r.b)("td",{parentName:"tr",align:null},"10901")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Sidecar"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP"),Object(r.b)("td",{parentName:"tr",align:null},"10902")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Query"),Object(r.b)("td",{parentName:"tr",align:null},"gRPC"),Object(r.b)("td",{parentName:"tr",align:null},"10903")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Query"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP"),Object(r.b)("td",{parentName:"tr",align:null},"10904")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Store"),Object(r.b)("td",{parentName:"tr",align:null},"gRPC"),Object(r.b)("td",{parentName:"tr",align:null},"10905")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Store"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP"),Object(r.b)("td",{parentName:"tr",align:null},"10906")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Receive"),Object(r.b)("td",{parentName:"tr",align:null},"gRPC (StoreAPI)"),Object(r.b)("td",{parentName:"tr",align:null},"10907")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Receive"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP (remote write API)"),Object(r.b)("td",{parentName:"tr",align:null},"10908")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Receive"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP"),Object(r.b)("td",{parentName:"tr",align:null},"10909")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Rule"),Object(r.b)("td",{parentName:"tr",align:null},"gRPC"),Object(r.b)("td",{parentName:"tr",align:null},"10910")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Rule"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP"),Object(r.b)("td",{parentName:"tr",align:null},"10911")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Compact"),Object(r.b)("td",{parentName:"tr",align:null},"HTTP"),Object(r.b)("td",{parentName:"tr",align:null},"10912")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# macOS\nbrew install thanos\n\n# external_labels \u662f\u5fc5\u987b\u7684\ncat <<YAML > prometheus.yaml\nglobal:\n  external_labels:\n    cluster: test\n    replica: svr-1\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n    - targets: ["localhost:9090"]\n\n  - job_name: "node"\n    static_configs:\n    - targets: ["localhost:9100"]\nYAML\n\n# \u9ed8\u8ba4\u53c2\u6570\n# http://localhost:9090\nprometheus \\\n  --config.file="prometheus.yml" \\\n  --storage.tsdb.path=data/ \\\n  --storage.tsdb.max-block-duration=2h \\\n  --storage.tsdb.min-block-duration=2h \\\n  --web.enable-lifecycle \\\n  --web.enable-admin-api\n\ncat <<YAML > thanos-store.yaml\ntype: S3\nconfig:\n  bucket: "metrics"\n  endpoint: "minio.cluster.internal"\n  insecure: true\n  signature_version2: false\n  access_key: "key"\n  secret_key: "secretsecret"\nYAML\n# Sidecar \u4e0a\u4f20 chunk \u66b4\u9732 prometheus \u4e3a StoreAPI\n# \u9ed8\u8ba4 http://localhost:10902 grpc://localhost:10901\nthanos sidecar \\\n  --tsdb.path="./data" \\\n  --prometheus.url=http://localhost:9090 \\\n  --objstore.config-file=thanos-store.yaml \\\n  --http-address="0.0.0.0:10902" \\\n  --grpc-address="0.0.0.0:10901"\n\n# \u66b4\u9732 S3 \u4e3a StoreAPI\n# \u4fee\u6539\u7aef\u53e3\u907f\u514d\u51b2\u7a81\nthanos store \\\n    --http-address=0.0.0.0:10912 \\\n    --grpc-address=0.0.0.0:10911 \\\n    --data-dir="./store-cache" \\\n    --objstore.config-file=thanos-store.yaml\n\n# \u67e5\u8be2\n# \u4fee\u6539\u7aef\u53e3\u907f\u514d\u51b2\u7a81\n# \u67e5\u8be2 UI http://localhost:11902/graph\n# --store \u4e3a\u540e\u7aef\nthanos query \\\n    --http-address=0.0.0.0:11902 \\\n    --grpc-address=0.0.0.0:11901 \\\n    --store=localhost:10901 \\\n    --store=localhost:10911\n\n\n# \u538b\u7f29\n# --data-dir cache blocks and process compactions\n# --wait \u7b49\u5f85\u65b0\u7684\u4efb\u52a1\uff0c\u9ed8\u8ba4\u6267\u884c\u5b8c\u6210\u540e\u9000\u51fa\nthanos compact \\\n  --http-address=0.0.0.0:12902 \\\n  --data-dir=thanos-compact \\\n  --objstore.config-file=thanos-store.yaml \\\n  --wait\n')),Object(r.b)("h2",{id:"tool"},"Tool"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b bucket \u5206\u5e03\u60c5\u51b5\n# http://localhost:10902/\nthanos tools bucket web --objstore.config-file=truth-bucket.yaml\n\n# \u67e5\u770b bucket\nthanos tools bucket ls\n# \u4ee5 table \u663e\u793a bucket \u4fe1\u606f\n# | ULID | FROM | UNTIL | RANGE | UNTIL-DOWN | #SERIES | #SAMPLES | #CHUNKS | COMP-LEVEL | COMP-FAILED | LABELS | RESOLUTION | SOURCE |\nthanos tools bucket inspect\n\n# \u6807\u8bb0\u5220\u9664\u6216\u4e0d\u538b\u7f29\n# tools bucket mark --id=ID --marker=MARKER --details=DETAILS\n# Marker - deletion-mark.json,no-compact-mark.json\n# mark \u6216\u5220\u9664\u5728 web \u4e0a\u4e0d\u4f1a\u5237\u65b0\uff0c\u9700\u8981\u505c\u6b62\u4ece\u5f00\nthanos tools bucket mark --id 01EJD9PS4P3MJMF3TGJGTJTE25 --marker deletion-mark.json --details 'useless bucket'\n\n# \u7acb\u5373\u6e05\u9664\u88ab mark bucket\n# \u9ed8\u8ba4\u7531 compactor \u6765\u6e05\u7406\nthanos tools bucket cleanup\n")),Object(r.b)("h2",{id:"\u7f13\u5b58\u914d\u7f6e"},"\u7f13\u5b58\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# \u6587\u4ef6\u7f13\u5b58\ntype: IN-MEMORY\nconfig:\n  max_size: 0\n  max_size_items: 2048\n  # \u7f13\u5b58\u65f6\u6548\n  validity: 6h\n\n---\ntype: MEMCACHED\nconfig:\n  addresses: []\n  timeout: 0s\n  max_idle_connections: 0\n  max_async_concurrency: 0\n  max_async_buffer_size: 0\n  max_get_multi_concurrency: 0\n  max_item_size: 0\n  max_get_multi_batch_size: 0\n  dns_provider_update_interval: 0s\n  expiration: 0s\n")),Object(r.b)("h2",{id:"\u5b58\u50a8\u914d\u7f6e"},"\u5b58\u50a8\u914d\u7f6e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://thanos.io/tip/thanos/storage.md"},"Storage"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"---\n# S3 \u5e38\u7528\u914d\u7f6e\ntype: S3\nconfig:\n  bucket: ''\n  endpoint: ''\n  # HTTP \u8fd8\u662f HTTPS\n  insecure: true\n  access_key: ''\n  secret_key: ''\n  # \u90e8\u5206 S3 \u5b9e\u73b0\u9700\u8981\u8bbe\u7f6e\u4e3a false\n  signature_version2: false\n  # multipart \u4e0a\u4f20\u7684\u5355\u5757 \u5927\u5c0f - \u90e8\u5206 S3 \u5b9e\u73b0\u9700\u8981\u4fee\u6539\n  # 0 -> \u9ed8\u8ba4 128m\n  part_size: 0\n\n---\n# S3 \u5b8c\u6574\u914d\u7f6e\ntype: S3\nconfig:\n  bucket: ''\n  endpoint: ''\n  region: ''\n  access_key: ''\n  insecure: false\n  signature_version2: false\n  secret_key: ''\n  put_user_metadata: {}\n  http_config:\n    idle_conn_timeout: 1m30s\n    response_header_timeout: 2m\n    insecure_skip_verify: false\n  trace:\n    enable: false\n  part_size: 134217728\n  sse_config:\n    type: ''\n    kms_key_id: ''\n    kms_encryption_context: {}\n    encryption_key: ''\n\n---\n# \u963f\u91cc\u4e91 OSS\ntype: ALIYUNOSS\nconfig:\n  endpoint: ''\n  bucket: ''\n  access_key_id: ''\n  access_key_secret: ''\n\n---\n# \u817e\u8baf\u4e91 COS\ntype: COS\nconfig:\n  bucket: ''\n  region: ''\n  app_id: ''\n  secret_key: ''\n  secret_id: ''\n")),Object(r.b)("h2",{id:"kubernetest"},"Kubernetest"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/thanos-io/kube-thanos"},"thanos-io/kube-thanos")," - jsonnet manifest",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/thanos-io/kube-thanos/blob/master/examples/all/manifests"},"examples/all/manifests"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff0c\u503c\u5f97\u53c2\u8003"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/banzaicloud/thanos-operator"},"banzaicloud/thanos-operator"))),Object(r.b)("h2",{id:"tracing"},"Tracing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://thanos.io/tip/thanos/tracing.md/"},"Tracing"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"type: JAEGER\nconfig:\n  service_name: ''\n  disabled: false\n  rpc_metrics: false\n  tags: ''\n  sampler_type: ''\n  sampler_param: 0\n  sampler_manager_host_port: ''\n  sampler_max_operations: 0\n  sampler_refresh_interval: 0s\n  reporter_max_queue_size: 0\n  reporter_flush_interval: 0s\n  reporter_log_spans: false\n  endpoint: ''\n  user: ''\n  password: ''\n  agent_host: ''\n  agent_port: 0\n")),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"\bsidecar-\u4e0a\u4f20\u5386\u53f2\u6587\u4ef6"},"\bSidecar \u4e0a\u4f20\u5386\u53f2\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"thanos sidecar \\\n  --tsdb.path=/var/lib/prometheus/data/ \\\n  --prometheus.url=http://localhost:9090 \\\n  --objstore.config-file=thanos-bucket.yaml \\\n  --shipper.upload-compacted\n")),Object(r.b)("h3",{id:"sidecar-\u66b4\u9732-prometheus-\u4e3a-storeapi"},"Sidecar \u66b4\u9732 Prometheus \u4e3a StoreAPI"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"thanos sidecar --prometheus.url=http://localhost:9090\n")),Object(r.b)("h2",{id:"\u8de8\u7f51\u7edc\u90e8\u7f72\u65b9\u6848"},"\u8de8\u7f51\u7edc\u90e8\u7f72\u65b9\u6848"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Prometheus Remote Write + Thanos Receive")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f18\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u90e8\u7f72\u7b80\u5355"),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u4e22\u6570\u636e"))),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"RW \u6027\u80fd\u6269\u5bb9\u95ee\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 max_samples_per_send \u4e3a 100\uff0c\u6307\u6807\u4e0a\u53bb\u540e\u5f88\u5bb9\u6613 qps \u4e0a\u767e"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86\u53cd\u5411\u4ee3\u7406\uff0c\u53cd\u5411\u4ee3\u7406\u4e5f\u4f1a\u6709\u4e00\u5b9a\u6027\u80fd\u95ee\u9898"),Object(r.b)("li",{parentName:"ul"},"\u589e\u5927\u5355\u6b21\u6279\u91cf\u4f1a\u5360\u7528\u8f83\u591a\u5185\u5b58\uff0c\u4f8b\u5982 max_samples_per_send 5000 capacity 1000 \u542f\u52a8\u53d1\u9001\u540e\u5185\u5b58\u8fbe\u5230 1G+"))),Object(r.b)("li",{parentName:"ul"},"\u7a33\u5b9a\u6027\u95ee\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u989d\u5916\u7ef4\u62a4 thanos receive"))),Object(r.b)("li",{parentName:"ul"},"thanos receive \u6709\u72b6\u6001 - \u672c\u5730\u8bb0\u5f55 tsdb"))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://thanos.io/tip/proposals/201812_thanos-remote-receive.md/"},"Thanos Remote Write"))))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Prometheus + Sidecar + Prometheus Remote Write + Thanos Receive")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sidecar \u4e0a\u4f20 2h"),Object(r.b)("li",{parentName:"ul"},"Receive \u67e5\u8be2\u6700\u8fd1 2h"),Object(r.b)("li",{parentName:"ul"},"\u4f18\u70b9 - thanos receive \u72b6\u6001\u65e0\u6240\u8c13\uff0c\u53ef\u4e22\u5f03"),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u70b9 - \u591a\u90e8\u7f72\u4e00\u4e2a sidecar")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Prometheus + Sidecar + StoreAPI tunnel")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"StoreAPI \u9ed8\u8ba4 h2c"),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"grpc \u4e0d\u80fd tunnel \u5230\u5b50\u8def\u5f84\uff0c\u9700\u8981\u4f7f\u7528\u5b50\u57df\u540d\u6216\u72ec\u7acb\u7aef\u53e3"),Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u989d\u5916\u7684 tunnel \u90e8\u7f72"))),Object(r.b)("li",{parentName:"ul"},"\u4f18\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7406\u89e3"),Object(r.b)("li",{parentName:"ul"},"\u6253\u901a\u6240\u9700\u670d\u52a1\u7f51\u7edc")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Prometheus + Sidecar + Prometheus:8080 tunnel + Sidecar")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 9090 tunnel \u5230\u5b50\u8def\u5f84"),Object(r.b)("li",{parentName:"ul"},"\u5185\u7f51 sidecar \u5c06 tunnel \u66b4\u9732\u4e3a StoreAPI"),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u591a\u90e8\u7f72\u4e00\u4e2a sidecar \u5230\u5185\u7f51"))),Object(r.b)("li",{parentName:"ul"},"\u4f18\u70b9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef tunnel \u5230\u5b50\u8def\u5f84"),Object(r.b)("li",{parentName:"ul"},"\u6253\u901a\u6240\u76d1\u63a7\u7684 prometheus")))),Object(r.b)("h2",{id:"\u81ea\u52a8\u4e0b\u91c7\u6837"},"\u81ea\u52a8\u4e0b\u91c7\u6837"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"?max_source_resolution"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"0s - \u7981\u7528"),Object(r.b)("li",{parentName:"ul"},"5m"),Object(r.b)("li",{parentName:"ul"},"1h"),Object(r.b)("li",{parentName:"ul"},"auto - \u81ea\u52a8"))),Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 rate \u53ef\u80fd\u4f1a\u5bfc\u81f4 gap"),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/thanos-io/thanos/issues/813"},"#813"))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-promql"},'# 5m \u4f7f\u7528\u4e0b\u91c7\u6837\u4f1a\u6709 gap\navg(irate(node_cpu_seconds_total{mode="system"}[5m])) by (instance) *100\n# 10m \u5219\u6ca1\u6709\u95ee\u9898\navg(irate(node_cpu_seconds_total{mode="system"}[10m])) by (instance) *100\n\n# grafana\navg(irate(node_cpu_seconds_total{mode="system"}[$__interval])) by (instance) *100\n')))}m.isMDXComponent=!0},830:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),m=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=m(a),s=n,O=u["".concat(b,".").concat(s)]||u[s]||o[s]||r;return a?l.a.createElement(O,i(i({ref:t},p),{},{components:a})):l.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<r;p++)b[p]=a[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);