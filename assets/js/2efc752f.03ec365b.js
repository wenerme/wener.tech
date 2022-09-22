"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94693],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],s={title:"Scrapy"},p="Scrapy",o={unversionedId:"service/data/crawler/scrapy",id:"service/data/crawler/scrapy",title:"Scrapy",description:"- https://github.com/scrapy/scrapy/",source:"@site/../notes/service/data/crawler/scrapy.md",sourceDirName:"service/data/crawler",slug:"/service/data/crawler/scrapy",permalink:"/notes/service/data/crawler/scrapy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/data/crawler/scrapy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Scrapy"},sidebar:"docs",previous:{title:"Heritrix",permalink:"/notes/service/data/crawler/heritrix"},next:{title:"till",permalink:"/notes/service/data/crawler/till"}},d={},c=[{value:"Settings",id:"settings",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"\u7ba1\u9053",id:"\u7ba1\u9053",level:3},{value:"<code>scrapy.pipelines.files.FilesPipeline</code>",id:"scrapypipelinesfilesfilespipeline",level:4},{value:"<code>scrapy.pipelines.images.ImagesPipeline</code>",id:"scrapypipelinesimagesimagespipeline",level:4},{value:"Feed",id:"feed",level:3},{value:"\u6269\u5c55",id:"\u6269\u5c55",level:3},{value:"\u4e0b\u8f7d\u5668\u4e2d\u95f4\u4ef6",id:"\u4e0b\u8f7d\u5668\u4e2d\u95f4\u4ef6",level:3},{value:"\u722c\u866b\u4e2d\u95f4\u4ef6",id:"\u722c\u866b\u4e2d\u95f4\u4ef6",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:3},{value:"\u8fd4\u56de\u5355\u4e2a\u503c\u800c\u4e0d\u662f\u6570\u7ec4",id:"\u8fd4\u56de\u5355\u4e2a\u503c\u800c\u4e0d\u662f\u6570\u7ec4",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scrapy"},"Scrapy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scrapy/scrapy/"},"https://github.com/scrapy/scrapy/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scrapy/scrapyd"},"https://github.com/scrapy/scrapyd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.scrapy.org/en/latest/topics/commands.html"},"commands")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sebdah/scrapy-mongodb"},"scrapy-mongodb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c06 Item \u5b58\u50a8\u5230 Mongo"),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u62f7\u8d1d\u5230\u9879\u76ee\u4e2d\u4f7f\u7528, \u53ea\u6709\u5355\u4e2a\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip install scrapy-mongodb"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"ITEM_PIPELINES = [\n  'scrapy_mongodb.MongoDBPipeline',\n]\n\n# \u94fe\u63a5\u914d\u7f6e\nMONGODB_URI = 'mongodb://localhost:27017'\nMONGODB_DATABASE = 'scrapy'\n# \u96c6\u5408\u540d\nMONGODB_COLLECTION = 'my_items'\n# \u552f\u4e00\u952e\nMONGODB_UNIQUE_KEY = 'url'\n\n# \u526f\u672c\u94fe\u63a5\nMONGODB_REPLICA_SET = 'myReplicaSetName'\nMONGODB_URI = 'mongodb://host1.example.com:27017,host2.example.com:27017,host3.example.com:27017'\n\n# \u6dfb\u52a0\u65f6\u95f4\u6233\nMONGODB_ADD_TIMESTAMP = True\n\n# \u53ef\u8bbe\u7f6e\u7f13\u51b2, \u9ed8\u8ba4\u672a\u5f00\u542f\nMONGODB_BUFFER_DATA = 10\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cnu/scrapy-random-useragent"},"scrapy-random-useragent"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u4e2a UA \u5217\u8868"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://useragentstring.com/"},"http://useragentstring.com/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://udger.com/resources/ua-list"},"https://udger.com/resources/ua-list")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alecxe/scrapy-fake-useragent"},"alecxe/scrapy-fake-useragent"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210 UA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip install scrapy-fake-useragent"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"DOWNLOADER_MIDDLEWARES = {\n    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,\n    'scrapy_fake_useragent.middleware.RandomUserAgentMiddleware': 400,\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'start_urls = ["file:///home/my/test.html"]'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"allowed_domains")),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u76f4\u63a5\u8bbf\u95ee\u672c\u5730\u6587\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Telnet \u7aef\u53e3 ",(0,l.kt)("inlineCode",{parentName:"li"},"6023")),(0,l.kt)("li",{parentName:"ul"},"Spider \u53ef\u4ee5\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"custom_settings")," \u6765\u8bbe\u7f6e\u5355\u4e2a Spider \u7684\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5668",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/html/head/following-sibling::body")," \u627e\u5144\u5f1f\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'//div[@id="abc"]')," \u5c5e\u6027\u5339\u914d\u7684\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'//*[@id="abc"]')," \u4efb\u610f\u6807\u7b7e\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'//div[contains(@class,"top")]')," \u5c5e\u6027\u5305\u542b\u5224\u65ad"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'//div[@id="abc" and contains(@class,"top")]')," \u903b\u8f91\u6761\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#########\n# \u57fa\u7840\u64cd\u4f5c\n#########\n# \u521b\u5efa\u9879\u76ee\nscrapy startproject myproject\ncd myproject\n# \u751f\u6210\u722c\u866b\nscrapy genspider mydomain mydomain.com\n# \u8fd0\u884c\u722c\u866b\nscrapy crawl mydomain\n# \u8f93\u51fa\u5230\u6587\u4ef6\nscrapy crawl basic -o item.json\n\n\n")),(0,l.kt)("h2",{id:"settings"},"Settings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.scrapy.org/en/latest/topics/settings.html"},"Settings")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"scrapy/settings/default_settings.py"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u751f\u6210\u7684\u9ed8\u8ba4\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"BOT_NAME = 'abcd'\n\nSPIDER_MODULES = ['abcd.spiders']\nNEWSPIDER_MODULE = 'abcd.spiders'\n\n# \u5728 User-Agent \u4e2d\u6807\u8bc6\u722c\u866b\u8eab\u4efd\n# USER_AGENT = 'abcd (+http://www.yourdomain.com)'\n\n# \u662f\u5426\u9075\u5faa robots.txt \u89c4\u5219, \u9ed8\u8ba4\u4e3a\u9075\u5faa\nROBOTSTXT_OBEY = True\n\n# \u94fe\u63a5\u914d\u7f6e\n# \u6700\u5927\u5e76\u53d1\u8bf7\u6c42, \u9ed8\u8ba4 16\n# CONCURRENT_REQUESTS = 32\n\n# \u5bf9\u540c\u4e00\u4e2a\u7ad9\u70b9\u914d\u7f6e\u8bf7\u6c42\u5ef6\u65f6, \u9ed8\u8ba4 0\n# \u53c2\u8003 http://scrapy.readthedocs.org/en/latest/topics/settings.html#download-delay\n# See also autothrottle settings and docs\n# DOWNLOAD_DELAY = 3\n# \u4e0b\u8f7d\u5ef6\u65f6\u4f1a\u9075\u5faa\u4ee5\u4e0b\u7684\u89c4\u5219\u4e4b\u4e00\n# \u6bcf\u4e2a\u57df\u540d\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\n# CONCURRENT_REQUESTS_PER_DOMAIN = 16\n# \u6bcf\u4e2a IP \u7684\u5e76\u53d1\u8bf7\u6c42\u6570\n# CONCURRENT_REQUESTS_PER_IP = 16\n\n# \u7981\u7528 Cookie, \u9ed8\u8ba4\u542f\u7528\n# COOKIES_ENABLED = False\n\n# \u7981\u7528 Telnet \u63a7\u5236\u53f0, \u9ed8\u8ba4\u542f\u7528\n# TELNETCONSOLE_ENABLED = False\n\n# \u91cd\u5199\u9ed8\u8ba4\u8bf7\u6c42\u5934\n# DEFAULT_REQUEST_HEADERS = {\n#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',\n#   'Accept-Language': 'en',\n# }\n\n# \u542f\u7528\u6216\u7981\u7528\u722c\u866b\u4e2d\u95f4\u4ef6\n# See http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html\n# SPIDER_MIDDLEWARES = {\n#    'abcd.middlewares.AbcdSpiderMiddleware': 543,\n# }\n\n# \u542f\u7528\u6216\u7981\u7528\u4e0b\u8f7d\u5668\u4e2d\u95f4\u4ef6\n# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html\n# DOWNLOADER_MIDDLEWARES = {\n#    'abcd.middlewares.MyCustomDownloaderMiddleware': 543,\n# }\n\n# \u542f\u7528\u6216\u7981\u7528\u6269\u5c55\n# See http://scrapy.readthedocs.org/en/latest/topics/extensions.html\n# EXTENSIONS = {\n#    'scrapy.extensions.telnet.TelnetConsole': None,\n# }\n\n# \u914d\u7f6e Item \u7ba1\u9053\n# \u4f18\u5148\u7ea7\u4e3a 1-1000\n# See http://scrapy.readthedocs.org/en/latest/topics/item-pipeline.html\nITEM_PIPELINES = {\n   # 'abcd.pipelines.SbcxPipeline': 300,\n}\n\n# \u542f\u7528\u548c\u914d\u7f6e\u81ea\u52a8\u9650\u6d41 AutoThrottle \u6269\u5c55, \u9ed8\u8ba4\u7981\u7528\n# See http://doc.scrapy.org/en/latest/topics/autothrottle.html\n# AUTOTHROTTLE_ENABLED = True\n# \u521d\u59cb\u4e0b\u8f7d\u5ef6\u65f6\n# AUTOTHROTTLE_START_DELAY = 5\n# \u6700\u5927\u4e0b\u8f7d\u5ef6\u65f6,\u9ad8\u5ef6\u65f6\u65f6\u4f7f\u7528\n# AUTOTHROTTLE_MAX_DELAY = 60\n# Scrapy \u5e76\u53d1\u8bf7\u6c42\u8fdc\u7a0b\u670d\u52a1\u7684\u5e73\u5747\u8bf7\u6c42\u91cf\n# AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0\n# \u662f\u5426\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u663e\u793a\u9650\u6d41\u7edf\u8ba1\n# AUTOTHROTTLE_DEBUG = False\n\n# \u542f\u7528\u548c\u914d\u7f6e HTTP \u7f13\u5b58, \u9ed8\u8ba4\u7981\u7528\n# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings\n# HTTPCACHE_ENABLED = True\n# HTTPCACHE_EXPIRATION_SECS = 0\n# HTTPCACHE_DIR = 'httpcache'\n# HTTPCACHE_IGNORE_HTTP_CODES = []\n# HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u7528\u4e8e\u79fb\u9664\u4e0b\u8f7d\u56fe\u7247\u548c\u6587\u4ef6\u4f7f\u7528\u7684\u5b57\u6bb5\nclass CleanupPipeline(object):\n    def process_item(self, item, spider):\n        item.pop('file_urls', None)\n        item.pop('image_urls', None)\n        return item\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# HTTP \u7f13\u5b58\u76f8\u5173\u914d\u7f6e\n# \u542f\u7528\u7f13\u5b58, \u9ed8\u8ba4\u4e0d\u542f\u7528\nHTTPCACHE_ENABLED = True\n# \u7f13\u5b58\u5931\u6548\u65f6\u95f4, \u79d2\nHTTPCACHE_EXPIRATION_SECS = 60 * 60 * 72\n# \u7f13\u5b58\u76ee\u5f55, \u4f1a\u5728 .scrapy \u4e0b\u521b\u5efa\u8be5\u76ee\u5f55\n# \u4e0d\u540c\u7684 spider \u4f1a\u5728\u8be5\u76ee\u5f55\u4e0b\u521b\u5efa\u4e0d\u540c\u7684\u76ee\u5f55\nHTTPCACHE_DIR = 'httpcache'\n# \u4e0d\u7f13\u5b58\u6307\u5b9a\u7684 HTTP \u72b6\u6001\u7801\n# HTTPCACHE_IGNORE_HTTP_CODES = []\n# \u7f13\u5b58\u5b58\u50a8\nHTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'\n# \u7f13\u5b58\u7b56\u7565\nHTTPCACHE_POLICY = 'scrapy.contrib.httpcache.RFC2616Policy'\n# \u662f\u5426\u603b\u662f\u7f13\u5b58\nHTTPCACHE_ALWAYS_STORE = True\n\n# \u8bbe\u7f6e\u9ed8\u8ba4\u7684\u8bf7\u6c42\u5934\nDEFAULT_REQUEST_HEADERS = {\n    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',\n    'Accept-Language': 'zh-CN,zh',\n}\n\n# \u8bbe\u7f6e\u7f16\u7801\u683c\u5f0f\nFEED_EXPORT_ENCODING = 'utf-8'\n")),(0,l.kt)("h3",{id:"\u7ba1\u9053"},"\u7ba1\u9053"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.pipelines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.scrapy.org/en/latest/topics/item-pipeline.html"},"Item Pipeline"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class DummyPipeline(object):\n    # \u5fc5\u987b\u5b9e\u73b0\u7684\u65b9\u6cd5\n    # \u4f1a\u9488\u5bf9\u7ba1\u9053\u4e2d\u7684\u6bcf\u4e00\u4e2a item \u8fdb\u884c\u8c03\u7528\n    # \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a dict\n    # \u53ef\u8fd4\u56de\u4e00\u4e2a Twisted Deferred \u6216\u629b\u51fa\u4e00\u4e2a `scrapy.exceptions.DropItem` \u5f02\u5e38\n    # \u4e22\u6389\u7684 item \u4e0d\u4f1a\u518d\u88ab\u540e\u9762\u7684\u7ba1\u9053\u5904\u7406\n    def process_item(self, item, spider):\n        return item\n\n    def open_spider(self, spider):\n        pass\n    def close_spider(self, spider):\n        pass\n    # \u7528\u4e8e\u4ece\u4e00\u4e2a crawler \u521b\u5efa\u8be5\u7ba1\u9053\u5b9e\u4f8b\u7684\u65b9\u6cd5.\n    # \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ba1\u9053\u5b9e\u4f8b.\n    # \u4ece crawler \u5904\u53ef\u8bbf\u95ee\u5230\u6838\u5fc3\u7684\u7ec4\u4ef6,\u4f8b\u5982\u914d\u7f6e,\u4fe1\u53f7\u91cf\u7b49,\u7528\u4e8e\u7ec4\u88c5\u8be5\u7ba1\u9053\n    @classmethod\n    def from_crawler(cls, crawler):\n        return cls()\n")),(0,l.kt)("h4",{id:"scrapypipelinesfilesfilespipeline"},(0,l.kt)("inlineCode",{parentName:"h4"},"scrapy.pipelines.files.FilesPipeline")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4e0b\u8f7d\u7ba1\u9053"),(0,l.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u81ea ",(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.pipelines.media.MediaPipeline")),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u6700\u5c0f\u5316\u7f51\u7edc\u4f20\u8f93\u548c\u6587\u4ef6\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u8def\u5f84\u4e3a url \u7684 sha1 \u503c"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7684\u6821\u9a8c\u548c\u4e3a md5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u6587\u4ef6\u5b58\u50a8\u8def\u5f84\n# \u652f\u6301 file(FSFilesStore) \u548c s3(S3FilesStore), \u9ed8\u8ba4\u4e3a file\n# FILES_STORE='data/files'\n# \u8fc7\u671f\u65f6\u95f4, \u5929\nFILES_EXPIRES=90\n# \u5b58\u50a8\u4e0b\u8f7d\u6587\u4ef6 URL \u7684\u5b57\u6bb5\nFILES_URLS_FIELD='file_urls'\n# \u5b58\u50a8\u5df2\u4e0b\u8f7d\u6587\u4ef6\u4fe1\u606f\u7684\u5b57\u6bb5\nFILES_RESULT_FIELD='files'\n\n# s3 \u914d\u7f6e\u8bbe\u7f6e\n# AWS_ACCESS_KEY_ID='abc'\n# AWS_SECRET_ACCESS_KEY='abc'\n# FILES_STORE_S3_ACL='abc'\n")),(0,l.kt)("h4",{id:"scrapypipelinesimagesimagespipeline"},(0,l.kt)("inlineCode",{parentName:"h4"},"scrapy.pipelines.images.ImagesPipeline")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56fe\u7247\u4e0b\u8f7d\u7ba1\u9053"),(0,l.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u81ea ",(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.pipelines.files.FilesPipeline"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u5b58\u50a8\u4f4d\u7f6e\n# IMAGES_STORE='data/images'\n\nIMAGES_EXPIRES=90\nIMAGES_RESULT_FIELD='images'\nIMAGES_URLS_FIELD='image_urls'\n\n# \u4e0b\u8f7d\u56fe\u7247\u7684\u6700\u5c0f\u5c3a\u5bf8\nIMAGES_MIN_WIDTH=0\nIMAGES_MIN_HEIGHT=0\n# \u751f\u6210\u4e0d\u540c\u5c3a\u5bf8\u7684\u56fe\u7247\u9884\u89c8\n# IMAGES_THUMBS={}\n\n# s3 \u914d\u7f6e\n# id \u548c key \u7684\u914d\u7f6e\u662f\u76f8\u540c\u7684\n# IMAGES_STORE_S3_ACL=''\n")),(0,l.kt)("h3",{id:"feed"},"Feed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5e8f\u5217\u5316\u548c\u5b58\u50a8")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"FEED_TEMPDIR = None\nFEED_URI = None\nFEED_URI_PARAMS = None  # a function to extend uri arguments\nFEED_FORMAT = 'jsonlines'\nFEED_STORE_EMPTY = False\nFEED_EXPORT_ENCODING = None\nFEED_EXPORT_FIELDS = None\nFEED_STORAGES = {}\nFEED_STORAGES_BASE = {\n    '': 'scrapy.extensions.feedexport.FileFeedStorage',\n    'file': 'scrapy.extensions.feedexport.FileFeedStorage',\n    'stdout': 'scrapy.extensions.feedexport.StdoutFeedStorage',\n    's3': 'scrapy.extensions.feedexport.S3FeedStorage',\n    'ftp': 'scrapy.extensions.feedexport.FTPFeedStorage',\n}\nFEED_EXPORTERS = {}\nFEED_EXPORTERS_BASE = {\n    'json': 'scrapy.exporters.JsonItemExporter',\n    'jsonlines': 'scrapy.exporters.JsonLinesItemExporter',\n    'jl': 'scrapy.exporters.JsonLinesItemExporter',\n    'csv': 'scrapy.exporters.CsvItemExporter',\n    'xml': 'scrapy.exporters.XmlItemExporter',\n    'marshal': 'scrapy.exporters.MarshalItemExporter',\n    'pickle': 'scrapy.exporters.PickleItemExporter',\n}\nFEED_EXPORT_INDENT = 0\n\n")),(0,l.kt)("h3",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.scrapy.org/en/latest/topics/extensions.html"},"Extensions")),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.logstats.LogStats"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.corestats.CoreStats"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.telnet.TelnetConsole",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TELNETCONSOLE_ENABLED"),(0,l.kt)("li",{parentName:"ul"},"TELNETCONSOLE_PORT"))),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.memusage.MemoryUsage"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.memdebug.MemoryDebugger"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.closespider.CloseSpider"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.statsmailer.StatsMailer"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.debug.StackTraceDump"),(0,l.kt)("li",{parentName:"ul"},"scrapy.extensions.debug.Debugger")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u9ed8\u8ba4\nEXTENSIONS_BASE = {\n    'scrapy.extensions.corestats.CoreStats': 0,\n    'scrapy.extensions.telnet.TelnetConsole': 0,\n    'scrapy.extensions.memusage.MemoryUsage': 0,\n    'scrapy.extensions.memdebug.MemoryDebugger': 0,\n    'scrapy.extensions.closespider.CloseSpider': 0,\n    'scrapy.extensions.feedexport.FeedExporter': 0,\n    'scrapy.extensions.logstats.LogStats': 0,\n    'scrapy.extensions.spiderstate.SpiderState': 0,\n    'scrapy.extensions.throttle.AutoThrottle': 0,\n}\n\nEXTENSIONS = {\n    'scrapy.extensions.corestats.CoreStats': 500,\n    'scrapy.extensions.telnet.TelnetConsole': 500,\n}\n")),(0,l.kt)("h3",{id:"\u4e0b\u8f7d\u5668\u4e2d\u95f4\u4ef6"},"\u4e0b\u8f7d\u5668\u4e2d\u95f4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.scrapy.org/en/latest/topics/downloader-middleware.html"},"Downloader Middleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.cookies.CookiesMiddleware"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"COOKIES_ENABLED=True\nCOOKIES_DEBUG=False\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HTTPCACHE_STORAGE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.extensions.httpcache.FilesystemCacheStorage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.extensions.httpcache.DbmCacheStorage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTPCACHE_DBM_MODULE=anydbm")),(0,l.kt)("li",{parentName:"ul"},"DBM"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.extensions.httpcache.LeveldbCacheStorage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LevelDB"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip install leveldb")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HTTPCACHE_POLICY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.extensions.httpcache.RFC2616Policy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RFC2616"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.extensions.httpcache.DummyPolicy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4"),(0,l.kt)("li",{parentName:"ul"},"\u603b\u662f\u7f13\u5b58"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.redirect.RedirectMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.retry.RetryMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.stats.DownloaderStats")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.useragent.UserAgentMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class DownloaderMiddleware:\n  def process_request(request, spider):\n    pass\n  def process_response(request, response, spider):\n    pass\n  def process_exception(request, exception, spider):\n    pass\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u9ed8\u8ba4\nDOWNLOADER_MIDDLEWARES_BASE = {\n    # Engine side\n    'scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware': 100,\n    'scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware': 300,\n    'scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware': 350,\n    'scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware': 400,\n    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': 500,\n    'scrapy.downloadermiddlewares.retry.RetryMiddleware': 550,\n    'scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware': 560,\n    'scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware': 580,\n    'scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware': 590,\n    'scrapy.downloadermiddlewares.redirect.RedirectMiddleware': 600,\n    'scrapy.downloadermiddlewares.cookies.CookiesMiddleware': 700,\n    'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 750,\n    'scrapy.downloadermiddlewares.stats.DownloaderStats': 850,\n    'scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware': 900,\n    # Downloader side\n}\n\nDOWNLOADER_MIDDLEWARES = {\n    'myproject.middlewares.CustomDownloaderMiddleware': 543,\n    # \u7981\u7528\u5167\u5efa\n    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,\n}\n\n\n")),(0,l.kt)("h3",{id:"\u722c\u866b\u4e2d\u95f4\u4ef6"},"\u722c\u866b\u4e2d\u95f4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.spidermiddlewares")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.scrapy.org/en/latest/topics/spider-middleware.html"},"Spider Middleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.spidermiddlewares.depth.DepthMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.spidermiddlewares.httperror.HttpErrorMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.spidermiddlewares.offsite.OffsiteMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.spidermiddlewares.referer.RefererMiddleware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrapy.spidermiddlewares.urllength.UrlLengthMiddleware"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"SPIDER_LOADER_CLASS = 'scrapy.spiderloader.SpiderLoader'\nSPIDER_LOADER_WARN_ONLY = False\n\nSPIDER_MIDDLEWARES = {}\n\n# \u9ed8\u8ba4\u542f\u7528\u7684\u4e2d\u95f4\u4ef6\nSPIDER_MIDDLEWARES_BASE = {\n    # Engine side\n    'scrapy.spidermiddlewares.httperror.HttpErrorMiddleware': 50,\n    'scrapy.spidermiddlewares.offsite.OffsiteMiddleware': 500,\n    'scrapy.spidermiddlewares.referer.RefererMiddleware': 700,\n    'scrapy.spidermiddlewares.urllength.UrlLengthMiddleware': 800,\n    'scrapy.spidermiddlewares.depth.DepthMiddleware': 900,\n    # Spider side\n}\n\nSPIDER_MODULES = []\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class DummyMiddlewares:\n    # \u9488\u5bf9\u6bcf\u4e2a\u54cd\u5e94\u8fdb\u884c\u56de\u8c03\n    # \u8fd4\u56de None \u6216\u629b\u51fa\u5f02\u5e38\n    def process_spider_input(response, spider):\n        pass\n    # \u9488\u5bf9 Spider \u7684\u7ed3\u679c\u8fdb\u884c\u56de\u8c03\n    # \u8fd4\u56de Request, dict, Item \u7684 iterable \u5bf9\u8c61\n    def process_spider_output(response, result, spider):\n        pass\n    # \u5f02\u5e38\u5904\u7406\n    # \u8fd4\u56de None | iterable< Response | dict | Item >\n    def process_spider_exception(response, exception, spider):\n        pass\n    # \u5f00\u59cb\u8bf7\u6c42\u65f6\n    # sinc 0.15\n    # \u8fd4\u56de iterbale< Request >\n    def process_start_requests(start_requests, spider):\n        pass\n\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5168\u5c40\u76ee\u5f55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"startproject",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u9879\u76ee"))),(0,l.kt)("li",{parentName:"ul"},"genspider",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u722c\u866b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l")," \u652f\u6301\u7684\u722c\u866b\u6a21\u677f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-t")," \u6307\u5b9a\u722c\u866b\u6a21\u677f"))),(0,l.kt)("li",{parentName:"ul"},"settings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"runspider",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u521b\u5efa\u9879\u76ee\u8fd0\u884c\u722c\u866b"))),(0,l.kt)("li",{parentName:"ul"},"shell"),(0,l.kt)("li",{parentName:"ul"},"fetch"),(0,l.kt)("li",{parentName:"ul"},"view"),(0,l.kt)("li",{parentName:"ul"},"version"))),(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u76f8\u5173\u547d\u4ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"crawl"),(0,l.kt)("li",{parentName:"ul"},"check"),(0,l.kt)("li",{parentName:"ul"},"list"),(0,l.kt)("li",{parentName:"ul"},"edit"),(0,l.kt)("li",{parentName:"ul"},"parse"),(0,l.kt)("li",{parentName:"ul"},"bench")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u5355\u4e2a\u503c\u800c\u4e0d\u662f\u6570\u7ec4"},"\u8fd4\u56de\u5355\u4e2a\u503c\u800c\u4e0d\u662f\u6570\u7ec4"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53d6\u5230\u7684\u90fd\u662f\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u65b9\u6cd5 1. \u4e3a\u5b57\u6bb5\u8bbe\u7f6e\u9884\u5904\u7406\nclass MyItemClass(Item):\n    url = Field(output_processor=TakeFirst())\n    title = Field(output_processor=TakeFirst())\n    developer = Field(output_processor=TakeFirst())\n\n# \u65b9\u6cd5 2. ItemLoader \u8bbe\u7f6e\u9ed8\u8ba4 \u9884\u5904\u7406\nl.default_output_processor = TakeFirst()\n# \u5982\u679c\u6709\u4e2a\u522b\u5b57\u6bb5\u4e0d\u60f3\u88ab\u5904\u7406,\u53ef\u4ee5\u8003\u8651\u5148\u52a0\u4e00\u5c42\nl.add_xpath('authors', './div/article/header/div/div[2]/dl/dd[1]/a/text()', lambda v: [v])\n")))}u.isMDXComponent=!0}}]);