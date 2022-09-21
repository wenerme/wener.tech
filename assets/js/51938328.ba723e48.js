"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29409],{97319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(3905)),o=["components"],p={title:"Jackson \u4f7f\u7528\u603b\u7ed3",slug:"jackson-summary",tags:["Java","Jackson","Json","\u963f\u91cc"]},i=void 0,s={permalink:"/story/jackson-summary",editUrl:"https://github.com/wenerme/wener/edit/master/story/2019/2019-08-11-jackson-summary.md",source:"@site/story/2019/2019-08-11-jackson-summary.md",title:"Jackson \u4f7f\u7528\u603b\u7ed3",description:"\u52a8\u6001\u7b56\u7565",date:"2019-08-11T00:00:00.000Z",formattedDate:"August 11, 2019",tags:[{label:"Java",permalink:"/story/tags/java"},{label:"Jackson",permalink:"/story/tags/jackson"},{label:"Json",permalink:"/story/tags/json"},{label:"\u963f\u91cc",permalink:"/story/tags/\u963f\u91cc"}],readingTime:12.545,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Jackson \u4f7f\u7528\u603b\u7ed3",slug:"jackson-summary",tags:["Java","Jackson","Json","\u963f\u91cc"]},prevItem:{title:"Wener's APIs",permalink:"/story/wener-apis"},nextItem:{title:"\u56e7 -\u300a\u54ea\u5412\u4e4b\u9b54\u7ae5\u964d\u4e16\u300b\u89c2\u540e\u611f",permalink:"/story/tt10627720-review"}},c={authorsImageUrls:[]},u=[{value:"\u52a8\u6001\u7b56\u7565",id:"\u52a8\u6001\u7b56\u7565",level:2},{value:"\u57fa\u4e8e JSON \u7684\u52a8\u6001\u7b56\u7565\u914d\u7f6e",id:"\u57fa\u4e8e-json-\u7684\u52a8\u6001\u7b56\u7565\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u8fc7\u7a0b",id:"\u914d\u7f6e\u8fc7\u7a0b",level:3},{value:"\u7b56\u7565\u6269\u5c55",id:"\u7b56\u7565\u6269\u5c55",level:2},{value:"\u5b9e\u9645\u5e94\u7528",id:"\u5b9e\u9645\u5e94\u7528",level:2},{value:"\u5965\u683c\u5b58\u50a8",id:"\u5965\u683c\u5b58\u50a8",level:3},{value:"\u4efb\u52a1\u8c03\u5ea6",id:"\u4efb\u52a1\u8c03\u5ea6",level:3},{value:"\u72b6\u6001\u4eba\u7fa4\u8868\u8fbe\u5f0f",id:"\u72b6\u6001\u4eba\u7fa4\u8868\u8fbe\u5f0f",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u52a8\u6001\u7b56\u7565"},"\u52a8\u6001\u7b56\u7565"),(0,l.kt)("p",null,"\u52a8\u6001\u7b56\u7565\u6982\u5ff5\u76f8\u5bf9\u5bbd\u6cdb\uff0c\u5728\u8fdb\u5165\u6b63\u5f0f\u7684\u5185\u5bb9\u4e4b\u524d\u5bb9\u6211\u5148\u660e\u786e\u9898\u76ee\u4e2d\u52a8\u6001\u7b56\u7565\u7684\u8303\u7574\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u52a8\u6001\u7b56\u7565\u6307\uff0c\u73b0\u5728\u4ee5 A \u65b9\u5f0f\u6765\u505a\u67d0\u4ef6\u4e8b\uff0c\u5728\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u88ab\u5207\u6362\u4e3a B \u65b9\u6848\uff0c\u4f46\u5bf9\u4e0a\u5c42\u6765\u8bf4\u662f\u65e0\u611f\u7684\u3002\u7b56\u7565\u53ef\u4ee5\u6620\u5c04\u4e3a\u7b56\u7565\u6a21\u5f0f\uff08Strategy Pattern\uff09\uff0c\u4f8b\u5982"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u56fe\u7247\u7f3a\u5931")),(0,l.kt)("p",null,"\u4e0a\u4e0b\u6587\u4f9d\u8d56\u4e86\u4e00\u4e2a IStrategy \u63a5\u53e3\uff0c\u800c IStrategy \u6709\u4e24\u79cd\u5b9e\u73b0\uff0cStrategyA\u3001StrategyB\uff0c\u5728\u8fd0\u884c\u4e2d\u53ef\u80fd\u662f\u9009\u62e9\u7684 A \u7b56\u7565\u6216 B \u7b56\u7565\u3002\u518d\u4e00\u4e2a\u73b0\u5b9e\u4e00\u70b9\u7684\u4f8b\u5b50"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u56fe\u7247\u7f3a\u5931")),(0,l.kt)("p",null,"\u56fe\u4f8b\u63cf\u8ff0\u4e86\u4e00\u4e2a\u5177\u4f53\u7684\u5b58\u50a8\u7b56\u7565\uff0cCachedStrategy \u662f\u5e26\u7f13\u5b58\u7684\u5b58\u50a8\u7b56\u7565\uff0c cache \u548c backend \u5b9e\u73b0\u7f13\u5b58\u903b\u8f91\uff0cIStorage \u672c\u8eab\u662f\u62bd\u8c61\u7684\u63a5\u53e3\uff0c\u56e0\u6b64\u7f13\u5b58\u903b\u8f91\u4e5f\u53ea\u9700\u8981\u4f9d\u8d56\u63a5\u53e3\u800c\u4e0d\u9700\u8981\u5173\u5fc3\u5177\u4f53\u5b9e\u73b0\u3002MemoryStorage \u662f\u4e00\u4e2a\u5185\u5b58\u5b58\u50a8\uff0c\u6570\u636e\u5b58\u5728\u5185\u5b58\u7684 Map \u4e2d\uff0cRedisStorage \u662f\u8bbf\u95ee\u8fdc\u7a0b\u7684\u5b58\u50a8\u3002\u6240\u6709\u7684\u8fd9\u4e9b\u7b56\u7565\u7ec6\u8282\u5bf9\u4e0a\u5c42\u800c\u8a00\u90fd\u662f\u65e0\u611f\u7684\uff0c\u6700\u4e0a\u5c42\u4f7f\u7528\u7684\u4f9d\u7136\u662f\u4e00\u4e2a\u5b58\u50a8\u63a5\u53e3\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u7684\u7b56\u7565\u662f\u8fd8\u53ef\u4ee5\u53e0\u52a0\u7684\uff0c\u8fd9\u6837\u505a\u7b56\u7565\u7684\u76ee\u7684\u662f\u7b80\u5316\u4e86\u5355\u4e2a\u7b56\u7565\u5b9e\u73b0\u7684\u590d\u6742\u5ea6\uff0c\u4e13\u6ce8\u4e8e\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd\u70b9\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u7b56\u7565\uff0c\u5219\u9700\u8981\u5728\u4e00\u4e2a\u5b9e\u73b0\u7c7b\u91cc\u5b9e\u73b0\u8fc7\u591a\u7684\u903b\u8f91\uff0c\u5f53\u9762\u4e34\u65b0\u7684\u9700\u6c42\uff0c\u63a5\u5165\u65b0\u7684\u9002\u914d\u7684\u65f6\u5019\uff0c\u5bfc\u81f4\u6539\u52a8\u4f1a\u5f02\u5e38\u56f0\u96be\uff0c\u4ee5\u4e0b\u7684\u4f2a\u4ee3\u7801\u5c55\u793a\u4e86\u8fd9\u6837\u7684\u533a\u522b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5355\u4e2a\u7c7b\u5b9e\u73b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class StorageImpl {\n  constructor({ redisUrl, redisPort }) {\n    this.cache = {};\n    this.redis = new Redis({ url: redisUrl, port: redisPort });\n  }\n  get(key) {\n    if (this.cache[key]) {\n      return this.cache[key];\n    }\n    let val = this.redis.get(key);\n    if (val) {\n      this.cache[key] = val;\n    }\n    return val;\n  }\n  set(key, value) {\n    delete this.cache[key];\n    this.redis.set(key, value);\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u7b56\u7565\u5b9e\u73b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class CachedStorage {\n  constructor({ cache, backend }) {\n    this.cache = cache;\n    this.backend = backend;\n  }\n  get(key) {\n    let val = this.cache.get(key);\n    if (!val) {\n      val = this.backend.get(key);\n      if (val) {\n        this.cache.set(key, val);\n      }\n    }\n    return val;\n  }\n  set(key, val) {\n    this.cache.set(key, null);\n    this.backend.set(key, val);\n  }\n}\n\nclass MemoryStorage {\n  constructor() {\n    this.data = {};\n  }\n  get(key) {\n    return this.data[key];\n  }\n  set(key, val) {\n    this.data[key] = val;\n  }\n}\n\nclass RedisStorage {\n  constructor({ url, host }) {\n    this.redis = new Redis({ url, port });\n  }\n  get(key) {\n    return this.redis.get(key);\n  }\n  set(key, val) {\n    this.redis.set(key, val);\n  }\n}\n")),(0,l.kt)("p",null,"\u5f53\u4ee3\u7801\u548c\u7b56\u7565\u8f83\u5c11\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u76f4\u63a5\u5b9e\u73b0\u662f\u66f4\u7b80\u5355\u7684\uff0c\u4f46\u5f53\u7b56\u7565\u9010\u6e10\u589e\u591a\uff0c\u4e1a\u52a1\u903b\u8f91\u8d8a\u52a0\u590d\u6742\u7684\u65f6\u5019\uff0c\u5199\u5728\u5355\u4e2a\u5b9e\u73b0\u4e2d\u662f\u975e\u5e38\u96be\u4ee5\u7ef4\u62a4\u7684\uff0c\u4e00\u4e9b\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u4f8b\u5982 \u540e\u7aef\u8bbf\u95ee\u9700\u8981\u652f\u6301\u6309 key \u8fdb\u884c\u5206\u7247\u8bbf\u95ee\uff0c\u652f\u6301\u4ece\u53e6\u5916\u4e00\u79cd\u5b58\u50a8\u52a0\u8f7d\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u7b56\u7565\u53ef\u4ee5\u5f88\u7075\u6d3b\uff0c\u4e14\u4e0d\u53ef\u9884\u77e5\u7684\uff0c\u56e0\u6b64\u9700\u8981\u5b9e\u73b0\u8fd9\u6837\u7684\u7b56\u7565\u7ba1\u7406\u76f4\u63a5\u786c\u7f16\u7801\u7684\u65b9\u5f0f\u662f\u4e0d\u53ef\u884c\u7684\u3002"),(0,l.kt)("h2",{id:"\u57fa\u4e8e-json-\u7684\u52a8\u6001\u7b56\u7565\u914d\u7f6e"},"\u57fa\u4e8e JSON \u7684\u52a8\u6001\u7b56\u7565\u914d\u7f6e"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u7b56\u7565\u90fd\u662f\u4e00\u4e2a\u901a\u7528\u7684\u63a5\u53e3\u5b9e\u73b0\uff0c\u4e00\u4e2a\u7b56\u7565\u7684\u5b9e\u73b0\u53ef\u80fd\u4f9d\u8d56\u5176\u5b83\u7b56\u7565\uff0c\u8fd9\u6837\u7684\u7ed3\u6784\u662f\u4e00\u4e2a\u6811\u5f62\u7684\uff0c\u90a3\u4e48\u914d\u7f6e\u4e5f\u662f\u4e00\u4e2a\u6811\u5f62\u7684\u7ed3\u6784\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cached",\n  "cache": {\n    "type": "memory"\n  },\n  "backend": {\n    "type": "redis",\n    "port": 6379,\n    "host": "127.0.0.1"\n  }\n}\n')),(0,l.kt)("p",null,"\u6574\u4f53\u7ed3\u6784\u4e0e\u7b56\u7565\u7684\u7ec4\u6210\u4e00\u81f4\uff0c\u4ece\u914d\u7f6e\u89d2\u5ea6\u6765\u8bf4\uff0c\u975e\u5e38\u76f4\u89c2\u4fbf\u4e8e\u7406\u89e3\u3002\u4f46\u5b9e\u9645\u4f7f\u7528\u65f6\u9700\u8981\u8fdb\u884c\u89e3\u6790\u5904\u7406\u5e76\u6620\u5c04\u4e3a\u5177\u4f53\u7684\u7b56\u7565\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u5728\u73b0\u6709\u7684 Java JSON \u89e3\u6790\u5e93\u4e2d\uff0cJackson \u529f\u80fd\u6700\u4e3a\u4e30\u5bcc\uff0c\u8981\u5b9e\u73b0\u8fd9\u6837\u7684\u7b56\u7565\u914d\u7f6e\u6709\u4e09\u79cd\u65b9\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"JSON -> \u914d\u7f6e\u5bf9\u8c61 -> \u5b9e\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f55\u65f6\u9009\u7528\uff1a\u5b9e\u73b0\u590d\u6742\uff0c\u6709\u8f83\u591a\u8fd0\u884c\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u989d\u5916\u7684\u4e00\u6b21\u5b9e\u73b0\u6620\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316\u7b80\u5355"))),(0,l.kt)("li",{parentName:"ol"},"JSON -> \u5b9e\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f55\u65f6\u9009\u7528\uff1a\u5b9e\u73b0\u7b80\u5355\uff0c\u8fd0\u884c\u72b6\u6001\u53ef\u63a7"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u989d\u5916\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5b57\u6bb5\u9700\u8981\u6ce8\u610f\u4e0d\u8981\u88ab\u5e8f\u5217\u5316 - ",(0,l.kt)("inlineCode",{parentName:"li"},"@JsonIgnore")," \u6216 transient"))),(0,l.kt)("li",{parentName:"ol"},"JSON->\u62bd\u8c61\u914d\u7f6e\u5bf9\u8c61->\u62bd\u8c61\u5b9e\u73b0->\u5b9e\u9645\u914d\u7f6e\u5bf9\u8c61->\u5b9e\u9645\u5b9e\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f55\u65f6\u9009\u7528\uff1a\u5b9e\u73b0\u590d\u6742\u4e14\u6709\u7ee7\u627f\u5173\u7cfb\uff0c\u6bcf\u4e00\u5c42\u5b9e\u73b0\u590d\u6742\u5904\u7406\u4e0d\u540c\u7684\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u57fa\u4e8e\u914d\u7f6e\u5bf9\u8c61\uff0c\u914d\u7f6e\u5bf9\u8c61\u6709\u7ee7\u627f\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5bf9\u8c61\u80fd\u6301\u6709\u4efb\u610f\u914d\u7f6e\u5185\u5bb9\uff0c\u4e0d\u540c\u914d\u7f6e\u5bf9\u8c61\u53ef\u5728\u4e0d\u4e22\u5931\u6570\u636e\u7684\u524d\u63d0\u4e0b\u4e92\u76f8\u8f6c\u6362")))),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8fc7\u7a0b"},"\u914d\u7f6e\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u4f7f\u7528\u914d\u7f6e\u5bf9\u8c61\u6765\u5b9e\u73b0\u914d\u7f6e\u7684\u62bd\u8c61\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class ConfigObjectDemo {\n    @Test\n    public void test() throws IOException {\n        ObjectMapper mapper = new ObjectMapper();\n\n        String config = "{\\"type\\":\\"cached\\",\\"cache\\":{\\"type\\":\\"memory\\"},\\"backend\\":{\\"type\\":\\"redis\\",\\"port\\":6379,\\"host\\":\\"127.0.0.1\\"}}";\n        StorageConfig storageConfig = mapper.readValue(config, StorageConfig.class);\n        // \u8f93\u51fa CachedStorageConfig(cache=MemoryConfig(), backend=RedisConfig(host=127.0.0.1, port=6379))\n        System.out.println(storageConfig);\n        // \u8f93\u51fa {"type":"cached","cache":{"type":"memory"},"backend":{"type":"redis","host":"127.0.0.1","port":6379}}\n        System.out.println(mapper.writeValueAsString(storageConfig));\n    }\n}\n\n@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type")\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = CachedStorageConfig.class, name = "cached"),\n        @JsonSubTypes.Type(value = MemoryConfig.class, name = "memory"),\n        @JsonSubTypes.Type(value = RedisConfig.class, name = "redis")\n})\n@JsonInclude(JsonInclude.Include.NON_EMPTY)\n@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, getterVisibility = JsonAutoDetect.Visibility.NONE)\ninterface StorageConfig{ String getType();}\n\n@Data\nclass CachedStorageConfig implements StorageConfig{\n    private StorageConfig cache;private StorageConfig backend;\n    @Override public String getType() { return "cached"; }\n}\n@Data\nclass MemoryConfig implements StorageConfig{ @Override public String getType() { return "memory"; }}\n@Data\nclass RedisConfig implements StorageConfig{\n    private String host; private int port;\n    @Override public String getType() { return "redis"; }\n}\n')),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\u770b\u5230\u6bd4\u8f83\u590d\u6742\u7684\u6ce8\u89e3\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"@JsonSubTypes"),"\uff0c\u8be5\u6ce8\u89e3\u914d\u7f6e\u4e86\u7c7b\u578b\u4e0e\u5b9e\u9645\u5b9e\u73b0\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"@JsonTypeInfo")," \u914d\u7f6e\u4e86\u90a3\u4e2a\u5b57\u6bb5\u4f5c\u4e3a\u7c7b\u578b\u4fe1\u606f\u5b57\u6bb5\u3002\u901a\u8fc7\u6ce8\u89e3\u7684\u65b9\u5f0f\u914d\u7f6e\u4e0d\u592a\u7075\u6d3b\uff0c\u53ef\u80fd\u6709\u65f6\u5019\u4f1a\u5ffd\u7565\u914d\u7f6e\u6216\u914d\u7f6e\u9519\u8bef\uff0c\u4e14\u4e0d\u80fd\u52a8\u6001\u589e\u52a0\u3002"),(0,l.kt)("p",null,"\u89e3\u51b3\u914d\u7f6e\u6bd4\u8f83\u95ee\u9898\u4e5f\u6709\u4e24\u79cd\u529e\u6cd5\uff0c\u7b2c\u4e00\u79cd\u529e\u6cd5\u662f\u4fdd\u7559 ",(0,l.kt)("inlineCode",{parentName:"p"},"@JsonTypeInfo")," \u6ce8\u89e3\uff0c\u7136\u540e\u624b\u52a8\u8fdb\u884c\u6620\u5c04\u5173\u7cfb\u7684\u914d\u7f6e\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ObjectMapper mapper = new ObjectMapper();\nmapper.registerSubtypes(new NamedType(CachedStorageConfig.class,"cached"));\nmapper.registerSubtypes(new NamedType(MemoryConfig.class,"memory"));\nmapper.registerSubtypes(new NamedType(RedisConfig.class,"redis"));\n')),(0,l.kt)("p",null,"\u7ed3\u679c\u4e0e\u901a\u8fc7\u6ce8\u89e3\u7684\u65b9\u5f0f\u914d\u7f6e\u662f\u76f8\u540c\u7684\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u52a8\u6001\u914d\u7f6e\u4e86\u3002\u5982\u679c\u8fde ",(0,l.kt)("inlineCode",{parentName:"p"},"@JsonTypeInfo")," \u4e5f\u4e0d\u60f3\u8981\uff0c\u5e0c\u671b\u901a\u8fc7\u4ee3\u7801\u5b8c\u5168\u52a8\u6001\u6dfb\u52a0\uff0c\u8fd9\u6837\u7684\u8fc7\u7a0b\u4f1a\u6bd4\u8f83\u590d\u6742\u3002\u6700\u7ec8\u7684\u7ed3\u679c\u7c7b\u4f3c\u4e8e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \u6ce8\u518c\u4e00\u4e2a\u52a8\u6001\u7c7b\u578b\uff0c\u4e14\u8bf4\u660e\u5982\u4f55\u83b7\u53d6\u5230\u7c7b\u578b\nMyJson.registerDynamicType(StorageConfig.class, StorageConfig::getType);\nMyJson.registerDynamicSubtypes(StorageConfig.class, new NamedType(CachedStorageConfig.class, "cached"));\nMyJson.registerDynamicSubtypes(StorageConfig.class, new NamedType(MemoryConfig.class, "memory"));\nMyJson.registerDynamicSubtypes(StorageConfig.class, new NamedType(RedisConfig.class, "redis"));\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"registerDynamicType")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"registerDynamicSubtypes")," \u7684\u5b9e\u73b0\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wenerme/wava/blob/a216dfe8e92fe4822c9659949fbe862b9419eef4/wava-common/src/main/java/me/wener/wava/util/JSON.java#L114"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("p",null,"\u81f3\u6b64\u4fbf\u5b8c\u6210\u4e86\u6240\u6709\u7684\u52a8\u6001\u914d\u7f6e\uff0c\u53cd\u5e8f\u5217\u5316\u4e3a\u914d\u7f6e\u5bf9\u8c61\u548c\u5b9e\u73b0\u6ca1\u6709\u7279\u522b\u5927\u7684\u533a\u522b\uff0c\u53ea\u9700\u8981\u63a7\u5236\u597d\u5b57\u6bb5\u53ef\u89c1\u6027\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u62bd\u8c61\u914d\u7f6e\uff0c\u5219\u9700\u8981\u80fd\u591f\u8bb0\u5f55\u5b8c\u6574\u7684\u4fe1\u606f\uff0c\u4ece\u62bd\u8c61\u914d\u7f6e\u8f6c\u6362\u4e3a\u5b9e\u9645\u914d\u7f6e\u65f6\u4e0d\u80fd\u4e22\u914d\u7f6e\u5185\u5bb9\uff0c\u4f7f\u7528 Jackson\uff0c\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@JsonAnyGetter")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@JsonAnySetter")," \u5b9e\u73b0\uff0c\u56e0\u4e3a\u6211\u4f1a\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u4f3c\u5982\u4e0b\u7684\u57fa\u7840\u7c7b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class PropertyObject {\n    @JsonIgnore @Setter private Map<String, Object> properties;\n\n    @JsonAnyGetter public Map<String, Object> getProperties() { return properties; }\n    @JsonAnySetter\n    public Object set(String name, Object value) {\n        if (properties == null) { properties = Maps.newHashMap(); }\n        return properties.put(name, value);\n    }\n}\n")),(0,l.kt)("p",null,"\u5b8c\u6574\u5b9a\u4e49\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wenerme/wava/blob/a216dfe8e92fe4822c9659949fbe862b9419eef4/wava-common/src/main/java/me/wener/wava/model/PropertyObject.java"},"PropertyObject"),"\u3002"),(0,l.kt)("p",null,"\u5bf9\u914d\u7f6e\u7684\u5904\u7406\u5219\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c\u8d23\u4efb\u94fe\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u5b9e\u73b0\u5bf9\u914d\u7f6e\u611f\u5174\u8da3\uff0c\u5219\u5c06\u5176\u8f6c\u6362\u4e3a\u81ea\u5df1\u611f\u5174\u8da3\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u8fd9\u6837\u4e5f\u4fbf\u4e8e\u6dfb\u52a0\u6ce8\u89e3\u8fdb\u884c\u6821\u9a8c\u548c\u9a8c\u8bc1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b9e\u73b0\u8fc7\u7a0b"),(0,l.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u7684\u6b63\u786e\u5904\u7406\u548c\u6821\u9a8c\u4f7f\u5f97\u5b9e\u73b0\u8fc7\u7a0b\u76f8\u5bf9\u7b80\u5355\uff0c\u76f8\u5f53\u4e8e\u786e\u5b9a\u4e86\u7a0b\u5e8f\u7684\u6240\u6709\u5165\u53c2\uff0c\u5b9e\u73b0\u4fbf\u4e0d\u5728\u6b64\u8d58\u8ff0\u3002")),(0,l.kt)("h2",{id:"\u7b56\u7565\u6269\u5c55"},"\u7b56\u7565\u6269\u5c55"),(0,l.kt)("p",null,"\u6bcf\u4e00\u79cd\u7b56\u7565\u5b9e\u9645\u5bf9\u5e94\u7684\u90fd\u662f\u4e00\u90e8\u5206\u4e1a\u52a1\u903b\u8f91\uff0c\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"1+1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"1-1")," \u4e5f\u662f\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u4e24\u79cd\u7b56\u7565\uff0c\u5728",(0,l.kt)("a",{parentName:"p",href:"https://wener.me/story/get-started-with-dsl/"},"\u4ece 0 \u5230 1 \u5b9e\u73b0\u81ea\u5b9a\u4e49\u8bed\u8a00"),"\u4e2d\u6709\u63d0\u5230\uff0c\u8bed\u8a00\u88ab\u89e3\u6790\u540e\u4f1a\u751f\u6210\u8bed\u6cd5\u6811\uff0c\u800c\u8bed\u6cd5\u6811\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u79cd\u6811\u5f62\u7684\u7b56\u7565\u903b\u8f91\u3002\u8868\u8fbe\u5f0f\u4e2d\u7684\u901a\u7528\u8282\u70b9\u4e00\u822c\u53eb\u505a Expression\uff0c\u800c\u6bcf\u4e2a Expression \u90fd\u53ef\u4ee5\u8ba1\u7b97\u51fa\u6765\u4e00\u4e2a\u503c\uff0c\u8fd9\u4e2a\u503c\u53ef\u4ee5\u9690\u542b\u5728\u5176\u5b83\u7684\u4e00\u4e2a Expression \u4e2d\uff0c\u4f8b\u5982 1+1 \u53ef\u4ee5\u8868\u793a\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "BinaryOperation",\n  "operator": "ADD",\n  "left": { "type": "Literal", "value": 1 },\n  "right": { "type": "Literal", "value": 1 }\n}\n')),(0,l.kt)("p",null,"\u800c 1+1+1 \u5219\u8868\u793a\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "BinaryOperation",\n  "operator": "ADD",\n  "left": { "type": "Literal", "value": 1 },\n  "right": {\n    "type": "BinaryOperation",\n    "operator": "ADD",\n    "left": { "type": "Literal", "value": 1 },\n    "right": { "type": "Literal", "value": 1 }\n  }\n}\n')),(0,l.kt)("p",null,"\u5176\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u4e4b\u524d\u8ba8\u8bba\u7684\u914d\u7f6e\u662f\u5b8c\u5168\u4e00\u81f4\u7684\u3002\u5f88\u591a\u7684\u4e1a\u52a1\u903b\u8f91\u672c\u8eab\u4e5f\u662f\u53ef\u4ee5\u901a\u8fc7\u8868\u8fbe\u5f0f\u6765\u8868\u8ff0\u7684\uff0c\u800c\u4f7f\u7528\u8868\u8fbe\u5f0f\u5219\u80fd\u662f\u7684\u573a\u666f\u914d\u7f6e\u66f4\u4e3a\u7075\u6d3b\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u9645\u5e94\u7528"},"\u5b9e\u9645\u5e94\u7528"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5217\u4e3e\u5728\u5b9e\u4f8b\u5f00\u53d1\u4e2d\u4f7f\u7528\u5230\u7684\u573a\u666f\uff0c\u4e09\u79cd\u573a\u666f\u5404\u4e0d\u76f8\u540c\u3002"),(0,l.kt)("h3",{id:"\u5965\u683c\u5b58\u50a8"},"\u5965\u683c\u5b58\u50a8"),(0,l.kt)("p",null,"\u5728 \u5965\u683c\u4eba\u7fa4\u4e8c\u65b9\u5305\u5f00\u53d1\u603b\u7ed3 \u4e2d\u6709\u63d0\u5230\u5e95\u5c42\u5b58\u50a8\u7684\u590d\u6742\u6027"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u56fe\u7247\u7f3a\u5931")),(0,l.kt)("p",null,"\u8be5\u914d\u7f6e\u7684\u5b9e\u73b0\u4fbf\u662f\u57fa\u4e8e\u8fd9\u6837\u7684\u914d\u7f6e\u903b\u8f91\u5b9e\u73b0\u7684\u3002\u5206\u522b\u5bf9\u5e94\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CrowdStorage"),(0,l.kt)("li",{parentName:"ul"},"CrowdStore")),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u6210\u4e86\u5965\u683c\u4e8c\u65b9\u5305 \u662f\u770b\u5f97\u5230\u76f8\u5e94\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7684\u662f JSON \u76f4\u63a5\u53cd\u5e8f\u5217\u5316\u4e3a\u5b9e\u73b0\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"\u4efb\u52a1\u8c03\u5ea6"},"\u4efb\u52a1\u8c03\u5ea6"),(0,l.kt)("p",null,"\u5965\u683c\u7684\u6e20\u9053\u7ba1\u7406\u5e95\u5c42\u5b9e\u73b0\u662f\u4e00\u5957\u76f8\u5bf9\u901a\u7528\u7684\uff0c\u5728\u603b\u7ed3\u4e2d\u63d0\u5230\u591a\u5c42\u7ea7\u7684\u652f\u6301\u4fbf\u662f\u901a\u8fc7\u62bd\u8c61\u914d\u7f6e\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u8c03\u5ea6\u652f\u6301\n",(0,l.kt)("em",{parentName:"li"}," \u6e20\u9053\u6295\u653e\n")," \u6e20\u9053\u652f\u6301 - \u77ed\u4fe1\u3001\u5916\u547c\u3001\u90ae\u4ef6/SMTP\n",(0,l.kt)("em",{parentName:"li"}," \u6570\u636e\u6e90\u652f\u6301 - \u63a5\u53e3\u3001\u4eba\u7fa4\u3001ODPS\n")," \u8c03\u5ea6\u652f\u6301 - \u5355\u6b21\u3001\u5468\u671f\u3001\u624b\u52a8")),(0,l.kt)("p",null,"\u914d\u7f6e\u5bf9\u8c61\u7c7b\u56fe\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u56fe\u7247\u7f3a\u5931")),(0,l.kt)("h3",{id:"\u72b6\u6001\u4eba\u7fa4\u8868\u8fbe\u5f0f"},"\u72b6\u6001\u4eba\u7fa4\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u5965\u683c\u4e8c\u65b9\u5305\u73b0\u6709\u8868\u8fbe\u5f0f\u5904\u7406\u80fd\u529b\uff0c\u4f46\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\u4e2d\u8be5\u529f\u80fd\u4f1a\u88ab\u589e\u5f3a\uff0c\u5c06\u4e0d\u5728\u5ba2\u6237\u7aef\u89e3\u6790\u7f16\u8bd1\uff0c\u800c\u662f\u5728\u670d\u52a1\u7aef\u5904\u7406\u540e\u4e0b\u53d1\u8bed\u6cd5\u6811\uff0c\u4e0b\u53d1\u7684\u8bed\u6cd5\u6811\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u7b56\u7565\u914d\u7f6e\uff0c\u8868\u8fbe\u5f0f\u7684\u7c7b\u56fe\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u56fe\u7247\u7f3a\u5931")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u719f\u7ec3\u7684\u638c\u63e1\u548c\u4f7f\u7528\u5404\u79cd\u573a\u666f\u4e0b\u7684\u914d\u7f6e\u53ef\u4ee5\u51cf\u5c11\u5927\u91cf\u7684\u4e0d\u5fc5\u8981\u7684\u5904\u7406\u903b\u8f91\uff0c\u4e14\u80fd\u51cf\u5c11\u4e0d\u5c11\u7684 BUG\uff0c\u4e00\u4e9b Bad Smell \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},'JSON.parse(jsonString).get("someThing").asLong()')," \u662f\u5e94\u8be5\u88ab\u907f\u514d\u7684\uff0c\u56e0\u4e3a\u6ca1\u6709\u4eba\u80fd\u77e5\u9053\u8fd9\u662f\u5728\u505a\u4ec0\u4e48\uff0c\u4e5f\u4e0d\u77e5\u9053\u91cc\u9762\u90fd\u6709\u4ec0\u4e48\uff0c\u50cf\u662f\u4e00\u4e2a\u9ed1\u76d2\u3002\u5f00\u53d1\u65f6\u5f80\u5f80\u4e1a\u52a1\u903b\u8f91\u662f\u76f8\u5bf9\u7b80\u5355\u7684\uff0c\u4f46\u662f\u786e\u4fdd\u62ff\u5230\u6b63\u786e\u7684\u914d\u7f6e\u5f88\u96be\uff0c\u9762\u5411\u5931\u8d25\u8bbe\u8ba1\uff0c\u5f00\u95ed\u539f\u5219\uff0c\u6709\u95ee\u9898\u7684\u5730\u65b9\u5fc5\u7136\u4f1a\u51fa\u95ee\u9898\uff0c\u5f80\u5f80\u6211\u4eec\u7528\u6765\u6821\u9a8c\u662f\u5426\u6b63\u786e\u7684\u4ee3\u7801\u6bd4\u5b9e\u9645\u7684\u4ee3\u7801\u8fd8\u8981\u591a\uff0c\u5f53\u9047\u5230\u8fd9\u6837\u95ee\u9898\u7684\u65f6\u5019\uff0c\u601d\u8003\u662f\u5426\u6709\u66f4\u597d\u7684\u65b9\u5f0f\u6765\u505a\u8fd9\u4e9b\u4e8b\u60c5\u3002"))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,y=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);