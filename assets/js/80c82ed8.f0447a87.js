"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28546],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(t),g=a,p=d["".concat(o,".").concat(g)]||d[g]||u[g]||l;return t?r.createElement(p,i(i({ref:n},c),{},{components:t})):r.createElement(p,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<l;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24242:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=t(96600),a=t(27279),l=(t(59496),t(49613)),i=["components"],s={title:"Redis \u6d41\u7b80\u4ecb",slug:"redis-stream-intro",tags:["Java","\u963f\u91cc","Redis"]},o=void 0,m={permalink:"/story/redis-stream-intro",editUrl:"https://github.com/wenerme/wener/edit/master/story/2018/2018-10-25-redis-stream-intro.md",source:"@site/story/2018/2018-10-25-redis-stream-intro.md",title:"Redis \u6d41\u7b80\u4ecb",description:"\u6982\u8ff0",date:"2018-10-25T00:00:00.000Z",formattedDate:"October 25, 2018",tags:[{label:"Java",permalink:"/story/tags/java"},{label:"\u963f\u91cc",permalink:"/story/tags/\u963f\u91cc"},{label:"Redis",permalink:"/story/tags/redis"}],readingTime:12.57,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Redis \u6d41\u7b80\u4ecb",slug:"redis-stream-intro",tags:["Java","\u963f\u91cc","Redis"]},prevItem:{title:"Java 11 JavaFX \u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/story/java11-javafx-first-app"},nextItem:{title:"Java with GraphQL",permalink:"/story/jraphql"}},c={authorsImageUrls:[]},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u547d\u4ee4\u5217\u8868",id:"\u547d\u4ee4\u5217\u8868",level:2},{value:"\u547d\u4ee4\u4ea4\u4e92",id:"\u547d\u4ee4\u4ea4\u4e92",level:2},{value:"Java \u4ea4\u4e92",id:"java-\u4ea4\u4e92",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u5bf9 Redis \u7684\u5370\u8c61\u53ef\u80fd\u5f88\u591a\u4eba\u90fd\u8fd8\u53ea\u505c\u7559\u5728 2.8 \u7684\u9636\u6bb5\uff0c\u4e00\u4e2a\u7ed3\u6784\u5316\u7684\u5185\u5b58\u5b58\u50a8\uff08\u55ef\uff0c\u597d\u50cf\u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\uff09\u3002\u867d\u7136\u8ddd\u79bb 4.0 \u53d1\u5e03(2017.7.14)\u5df2\u7ecf\u4e00\u5e74\u8fc7\u53bb\u4e86\uff0c\u4f46\u76f8\u4fe1\u5f88\u591a\u4eba\u5df2\u7ecf\u4e0d\u518d\u53bb\u5173\u5fc3 Redis \u7684\u65b0\u7279\u6027\u4e86\uff0c\u56e0\u4e3a\u4ece 2.8 \u540e\u7684 Redis \u5df2\u7ecf\u8db3\u591f\u597d\u7528\u4e86\u3002\ud83d\ude04"),(0,l.kt)("p",null,"Redis 3.0 \u6dfb\u52a0\u4e86\u96c6\u7fa4\u7684\u80fd\u529b\uff0c4.0 \u6dfb\u52a0\u4e86\u6a21\u5757\u5316\u80fd\u529b\uff0c5.0 \u6dfb\u52a0\u4e86\u6d41\u7c7b\u578b\u3002\u5982\u679c\u8bf4 3.0 \u548c 4.0 \u6dfb\u52a0\u7684\u65b0\u7279\u6027\u5bf9\u4e8e\u4e00\u822c\u7528\u6237\u6765\u8bf4\u65e0\u8db3\u8f7b\u91cd\uff0c\u90a3 5.0 \u65b0\u7684\u6d41\u7c7b\u578b\u5c31\u4e0d\u53ef\u5ffd\u89c6\u5566\uff01"),(0,l.kt)("p",null,"\u5728\u6ca1\u6709 Stream \u7c7b\u578b\u4e4b\u524d\uff0c\u5176\u5b9e Redis \u4e5f\u652f\u6301\u5404\u79cd\u7c7b\u4f3c\u4e8e\u6d41\u7684\u5904\u7406\u6a21\u5f0f\uff0c\u4f8b\u5982 Fire and forget \u6a21\u5f0f\u7684 Pub/Sub\uff0c\u963b\u585e\u961f\u5217 BLPOP\uff0c\u65f6\u95f4\u5e8f\u5217 zsort \u5b58\u50a8\uff0c\u7b49\u5404\u79cd\u65b9\u5f0f\u90fd\u80fd\u6a21\u62df\u7c7b\u4f3c\u7684\u573a\u666f\uff0c\u4f46\u5374\u90fd\u89c9\u5f97\u6709\u70b9\u6b20\u7f3a\uff0c\u7ec8\u4e8e\uff0c\u6d41\u7c7b\u578b\u6210\u529f\u7684\u89e3\u51b3\u4e86\u4ee5\u4e0a\u6240\u6709\u95ee\u9898\uff0c\u5e76\u80fd\u652f\u6301\u5176\u4ed6\u7684\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u8bf4\u5230\u6d41\u6d88\u606f\u5c31\u4e0d\u5f97\u4e0d\u8bf4\u5230 Kafka \u5566\uff0c\u6211\u76f8\u4fe1\u5927\u5bb6\u5e94\u8be5\u90fd\u542c\u8bf4\u8fc7\u6d88\u606f\u4e2d\u95f4\u4ef6 Kafka\uff0c\u81f3\u4e8e RocketMQ \u6216\u8005 MetaQ \u5c31\u4e0d\u518d\u8d58\u8ff0\u4ed6\u4eec\u4e0e Kafka \u7684\u5173\u7cfb\u5566\uff0cRedis \u4f5c\u8005\u5728\u5b9e\u73b0\u6d41\u7c7b\u578b\u65f6\u5927\u91cf\u53c2\u8003\u4e86 Kafka \u4e2d\u7684\u6982\u5ff5\uff0c\u4f8b\u5982\u6d88\u8d39\u6a21\u578b\uff0c\u6d41\u6d88\u606f\u7684\u6982\u5ff5\u3002\u5f53\u7136\u6240\u6709\u7684\u53c2\u8003\u53ea\u5c40\u9650\u4e8e Kafka \u7684\u6587\u6863\uff0c\u4e0e Kafka \u7684\u4ee3\u7801\u5b9e\u73b0\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\u54e6\u3002"),(0,l.kt)("p",null,"\u5fc3\u52a8\u4e0d\u5982\u5fc3\u52a8\uff0c\u90a3\u5148\u4e00\u7779\u4e3a\u5feb\u5427\u3002"),(0,l.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u662f macOs \u7528\u6237\uff0c\u5e76\u4e14\u5b89\u88c5\u4e86 brew\uff08\u5982\u679c\u6ca1\u6709\u5b89\u88c5\uff0c\u90a3\u5efa\u8bae\u5148\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'),"\uff09\uff0c\u90a3\u4e48\u53ea\u9700\u8981"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install redis\n")),(0,l.kt)("p",null,"\u5373\u53ef\uff0c\u5982\u679c\u4f60\u662f\u975e macOs \u7528\u6237\uff0c\u90a3\u8981\u561b\u8003\u8651\u6362 mac\uff0c\u8981\u561b\u4f7f\u7528 docker \u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -p 6379:6379 -v $PWD:/data --name redis redis:alpine\n# \u9898\u5916\u8bdd: \u4f7f\u7528 alpine \u66f4\u5c0f\u66f4\u7701\u5fc3\uff0c\u5f3a\u70c8\u63a8\u8350\uff0c\u6709\u4efb\u4f55\u4f7f\u7528\u95ee\u9898\u90fd\u53ef\u4ee5\u4ea4\u6d41\u54e6\uff0c\u81f3\u4e8e\u6709\u591a\u597d\uff0c\u5728\u8fd9\u91cc\u6015\u662f\u8bf4\u4e0d\u5b8c\u3002\n\n# \u9a8c\u8bc1\u5b89\u88c5\u7684\u7248\u672c\ndocker exec redis redis-cli info server\n# \u5ba2\u6237\u7aef\u94fe\u63a5\ndocker exec -it redis redis-cli\n")),(0,l.kt)("p",null,"\u4e00\u5207\u51c6\u5907\u5c31\u7eea\uff0c\u5c31\u5f00\u59cb\u5b9e\u8df5\u5427\u3002\u65e2\u7136\u6d41\u662f\u65b0\u7684\u6570\u636e\u7c7b\u578b\uff0c\u90a3\u6211\u4eec\u5c31\u5148\u4ece\u652f\u6301\u7684\u64cd\u4f5c\u5f00\u59cb\u5427\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u5217\u8868"},"\u547d\u4ee4\u5217\u8868"),(0,l.kt)("p",null,"Stream \u7c7b\u578b\u4e00\u5171\u652f\u6301 13 \u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://redis.io/commands#stream"},"\u547d\u4ee4"),"\uff0c\u8fd9\u91cc\u7b80\u5355\u5217\u4e3e\u4e00\u4e0b\u652f\u6301\u7684\u547d\u4ee4\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u6982\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xinfo"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6d88\u8d39\u8005\uff0c\u5206\u7ec4\u548c\u6d41\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xadd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6d88\u606f\u5230\u6d41")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xtrim"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6d41\u91cd\u7f6e\u4e3a\u6307\u5b9a\u5927\u5c0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xdel"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 ID \u5220\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xrange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u8303\u56f4\u5185\u7684\u6d88\u606f\uff0c\u7279\u6b8a\u8d77\u59cb + -")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xrevrange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e xrange \u76f8\u540c\uff0c\u4f46\u8fd4\u56de\u987a\u5e8f\u76f8\u53cd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xlen"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6d41\u957f\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xread"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u6d41\u4e2d\u6307\u5b9a id \u5f00\u59cb\u8bfb\u53d6\u6307\u5b9a\u91cf\u6d88\u606f\uff0c\u53ef\u9009\u62e9\u963b\u585e\u8fd4\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xgroup"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u6d88\u8d39\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xreadgroup"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u8ba2\u9605\u7ec4\u6210\u5458\u7684\u8eab\u4efd\u8bfb\u53d6\u6d41\u6d88\u606f - \u5373\u8ba2\u9605/\u6d88\u8d39\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xack"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u6d88\u606f\u88ab\u6b63\u786e\u5904\u7406")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xpending"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u6b63\u5728\u5904\u7406\u4e2d\u7684\u6d88\u606f - \u5c1a\u672a ACK \u7684\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xclaim"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6b63\u5728\u5904\u7406\u4e2d\u7684\u6d88\u606f")))),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u7b80\u5355\u6982\u8ff0\u4e00\u4e0b\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9700\u8981\u6ce8\u610f\u7684\u70b9"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6d41\u6d88\u606f\u5185\u5bb9\u662f\u5b57\u5178 - \u5373 KV \u7ed3\u6784"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u6d88\u606f\u6709\u4e00\u4e2a ID - 128bit - \u7531\u65f6\u95f4\u6233\u548c\u5e8f\u5217\u53f7\u7ec4\u6210"),(0,l.kt)("li",{parentName:"ol"},"\u63d2\u5165\u6d88\u606f\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u4f5c\u4e3a ID \u5219\u662f\u7531\u670d\u52a1\u7aef\u751f\u6210 ID"),(0,l.kt)("li",{parentName:"ol"},"ID \u5fc5\u987b\u9012\u589e"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"-"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"+")," \u5206\u522b\u8868\u793a\u6700\u5c0f\u548c\u6700\u5927\u6d88\u606f ID"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"$")," \u8868\u793a\u6700\u65b0\u7684\u6d88\u606f\u4f4d\u7f6e\uff0c\u5728\u521b\u5efa\u6d88\u8d39\u7ec4\u65f6\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},">")," \u8868\u793a\u6700\u65b0\u6d88\u8d39\u7684\u6d88\u606f\u4f4d\u7f6e\uff0c\u5728\u6d88\u8d39\u6d88\u606f\u65f6\u4f7f\u7528")),(0,l.kt)("h2",{id:"\u547d\u4ee4\u4ea4\u4e92"},"\u547d\u4ee4\u4ea4\u4e92"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f80\u6d41\u4e2d\u6dfb\u52a0\u6d88\u606f - \u4f1a\u8fd4\u56de\u6d88\u606f ID\n# \u624b\u52a8\u6307\u5b9a ID\nxadd s 1-0 name wener age 18\nxadd s 1-1 name wen age 17\n# \u7531\u670d\u52a1\u7aef\u751f\u6210\u6d88\u606f ID\nxadd s * name xx age 16\n# \u8fd4\u56de\u6240\u6709\u6d88\u606f\nxrange s - +\n# \u8fd4\u56de\u7b2c\u4e00\u6761\nxrange s - + count 1\n# \u8fd4\u56de\u6700\u540e\u4e00\u6761\nxrevrange s + - count 1\n# \u8fd4\u56de\u6d88\u606f\u957f\u5ea6\nxlen s\n\n# \u8bfb\u7b2c\u4e00\u6761\u6d88\u606f\nxread count 1 streams s1 0-0\n# \u8bfb\u53d6\u7b2c\u4e8c\u6761 - \u6307\u5b9a\u7684\u6d88\u606f ID \u662f 1-0 \uff0c\u4f1a\u8fd4\u56de\u8fd9\u4e2a ID \u4e4b\u540e\u7684\u6d88\u606f\nxread count 1 streams s1 1-0\n\n# \u6a21\u62df\u6d88\u606f\u7684 Roling \u5904\u7406\n# ------\ndel s\n# \u5728\u63d2\u5165\u6d88\u606f\u65f6\uff0c\u53ef\u9650\u5236\u6d88\u606f\u7684\u6700\u5927\u957f\u5ea6\uff0c\u7c7b\u4f3c\u4e8e rolling \u65e5\u5fd7\u6587\u4ef6\u7684\u903b\u8f91\n# \u903b\u8f91\u7b49\u540c\u4e8e\u5148 add \u518d trim\n# \u63d2\u5165\u65f6\u9650\u5236\u6700\u5927\u957f\u5ea6 2\nxadd s MAXLEN 2 * ts 1\nxadd s MAXLEN 2 * ts 2\nxadd s MAXLEN 2 * ts 3\nxadd s MAXLEN 2 * ts 4\n# \u6d41\u4e2d\u53ea\u4f1a\u6709 3 4 \u8fd9\u4e24\u6761\u6d88\u606f\nxrange s - +\n\n# \u6d88\u8d39\u7ec4\n# ======\n# \u91cd\u7f6e\u6d41\u5185\u5bb9\ndel s\n# \u521b\u5efa\u6d88\u8d39\u7ec4 g1 \u5e76\u5c06\u6d88\u8d39\u4f4d\u7f6e\u7f6e\u4e3a\u6700\u65b0\u6d88\u606f\u4f4d\u7f6e $\n# \u56e0\u4e3a s \u4e0d\u5b58\u5728\uff0c\u6307\u5b9a MKSTREAM \u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u6d41 s\nxgroup create s g1 $ MKSTREAM\n# \u6dfb\u52a0\u65b0\u7684\u6d88\u606f\nxadd s 1-1 name zz age 16\n# \u4f1a\u8fd4\u56de\u6700\u65b0\u63d2\u5165\u7684\u6d88\u606f\uff0c\u5f53\u524d\u6d88\u8d39\u8005\u4e3a c1\nxreadgroup group g1 c1 count 1 streams s >\n# \u5f53\u6d88\u606f\u5904\u7406\u5b8c\u6210\u540e\u5bf9\u670d\u52a1\u7aef\u8fdb\u884c\u54cd\u5e94\nxack s g1 1-1\n\n# \u6a21\u62df\u6d88\u606f\u5904\u7406\u5931\u8d25\u573a\u666f\n# ------\n# \u6dfb\u52a0\u65b0\u7684\u6d88\u606f\nxadd s 1-2 name aa age 16\n# \u7531 c2 \u6d88\u8d39\nxreadgroup group g1 c2 count 1 streams s >\n# \u4f46\u5728\u5904\u7406\u8fc7\u7a0b\u4e2d\u5f02\u5e38\uff0c\u672a ACK\uff0c\u6b64\u65f6\u901a\u8fc7 pending \u67e5\u770b c2 \u5806\u79ef\u7684\u6d88\u606f\nxpending s g1 - + 1 c2\n# c1 \u6709\u80fd\u529b\u5904\u7406\uff0c\u56e0\u6b64\u53ef\u4ee5\u5c06 c2 \u5904\u7406\u5931\u8d25\u7684\u6d88\u606f\u62ff\u8fc7\u6765\u5904\u7406\n# retrycount \u7531\u5e94\u7528\u81ea\u5df1\u7ef4\u62a4\uff0c\u8bb0\u5f55\u91cd\u8bd5\u6b21\u6570\n# 500 \u4e3a\u8868\u793a\u8be5\u6d88\u606f\u7684\u5904\u7406\u65f6\u95f4\u8d85\u8fc7 500ms \u624d\u80fd\u201c\u62ff\u201d\u8fc7\u6765\nxclaim s g1 c1 500 1-2 retrycount 2\n# c1 \u6210\u529f\u5904\u7406\u8be5\u6d88\u606f\nxack s g1 1-2\n")),(0,l.kt)("p",null,"Stream \u7684\u64cd\u4f5c\u76f8\u5f53\u7b80\u4ecb\uff0c\u80fd\u5b9e\u73b0\u4ec0\u4e48\u6837\u7684\u529f\u80fd\u4e3b\u8981\u53d6\u51b3\u4e8e\u4e1a\u52a1\u7684\u8bbe\u8ba1\u3002\u4f7f\u7528 cli \u5b8c\u6210\u4e86\u57fa\u672c\u7684\u64cd\u4f5c\u518d\u6765\u770b\u770b Java \u7684\u64cd\u4f5c\u5427\u3002"),(0,l.kt)("h2",{id:"java-\u4ea4\u4e92"},"Java \u4ea4\u4e92"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lettuce-io/lettuce-core"},"lettuce")," \u662f\u4e00\u4e2a\u57fa\u4e8e Netty \u7684\u5f02\u6b65 Redis \u5ba2\u6237\u7aef\uff0c\u5728\u6700\u65b0\u7248\u4e2d\u652f\u6301\u4e86 Stream \u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u548c\u6d88\u8d39")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public void stream() throws InterruptedException {\n    RedisClient client = RedisClient.create("redis://localhost");\n    StatefulRedisConnection<String, String> connection = client.connect();\n    // \u6d41\u7684\u540d\u5b57\n    String streamName = "s";\n    // \u6d88\u8d39\u7ec4\u540d\n    String groupName = "g1";\n\n    AtomicInteger counter = new AtomicInteger();\n    // \u603b\u6d88\u606f\u91cf\n    long total = 1000000;\n    // \u5e76\u53d1\u751f\u4ea7\n    int producerCount = 2;\n    // \u5e76\u53d1\u6d88\u8d39\n    int consumerCount = 4;\n    for (int i = 0; i < producerCount; i++) {\n        int id = i;\n        CompletableFuture.runAsync(() -> {\n            String name = "producer." + id;\n            StatefulRedisConnection<String, String> connect = client.connect();\n            while (true) {\n                int n = counter.incrementAndGet();\n                if (n > total) {\n                    return;\n                }\n                // \u540c\u6b65\u751f\u4ea7\n                Timer.Context context = metrics.timer(name).time();\n                connect\n                        .sync()\n                        .xadd(streamName, "ts", String.valueOf(System.currentTimeMillis()), "i", String.valueOf(n))\n                ;\n                context.close();\n            }\n        });\n    }\n\n    for (int i = 0; i < consumerCount; i++) {\n        StatefulRedisConnection<String, String> connect = client.connect();\n\n        // \u6d88\u8d39\u7684\u4e0a\u4e0b\u6587\n        ConsumerContext c = new ConsumerContext();\n        c\n                .setConnection(connect)\n                .setConsumer(Consumer.from(groupName, "c" + i))\n                .setStreamName(streamName)\n                .setGroupName(groupName)\n                .setName("consumer." + i)\n                .setXReadArgs(XReadArgs.Builder.block(Duration.ofSeconds(5)))\n                .setXreadLastOffset(XReadArgs.StreamOffset.lastConsumed(streamName))\n        ;\n        // \u5f02\u6b65\u6d88\u8d39\n        consume(c);\n    }\n\n    Thread.sleep(Duration.ofMinutes(10).toMillis());\n}\n\n\nprivate CompletionStage<?> consume(ConsumerContext c) {\n    Timer.Context context = metrics.timer(c.name).time();\n    return c.connection\n            .async()\n            .xreadgroup(c.consumer, c.xReadArgs, c.xreadLastOffset)\n            // \u6d88\u606f\u5904\u7406\n            .thenCompose(v -> {\n                context.close();\n                if (v.isEmpty()) {\n                    metrics.meter(c.name + ".empty").mark();\n                    return CompletableFuture.completedFuture(null);\n                }\n                StreamMessage<String, String> message = v.get(0);\n\n                // \u8f93\u51fa\u4e00\u5b9a\u65e5\u5fd7\u91cf\n                if (ThreadLocalRandom.current().nextDouble() < 0.01) {\n                    log.info("[{}] {}", c.name, message.getBody());\n                }\n\n                // \u6210\u529f\u5904\u7406\n                return c.connection.async().xack(c.streamName, c.groupName, message.getId());\n            })\n            // \u5f02\u5e38\u5904\u7406\n            .exceptionally(e -> {\n                metrics.meter(c.name + ".error").mark();\n                return null;\n            })\n            // \u5faa\u73af - \u6ca1\u6709\u63a8\u51fa\u903b\u8f91\n            .thenCompose((v) -> consume(c));\n}\n\n\n@Data\n@Accessors(chain = true)\npublic static class ConsumerContext {\n    String name;\n    String streamName;\n    String groupName;\n    Consumer<String> consumer;\n\n    StatefulRedisConnection<String, String> connection;\n\n    XReadArgs.StreamOffset<String> xreadLastOffset;\n\n    XReadArgs xReadArgs;\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5904\u7406\u672a\u6210\u529f\u7684\u6d88\u606f")),(0,l.kt)("p",null,"\u540c\u6b65\u64cd\u4f5c\uff0c\u903b\u8f91\u76f8\u5bf9\u6e05\u6670"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public void testClaimPendingSingleThreadSync() {\n    RedisClient client = RedisClient.create("redis://localhost");\n    StatefulRedisConnection<String, String> connection = client.connect();\n    String streamName = "s";\n    String groupName = "g1";\n\n    RedisCommands<String, String> sync = connection.sync();\n    Consumer<String> consumer = Consumer.from(groupName, "c1");\n    Range<String> fullRange = Range.create("-", "+");\n\n    while (true) {\n        try (Timer.Context ignored = metrics.timer(consumer.getName() + ".pending").time()) {\n            PendingResult result = PendingResult.of(sync.xpending(streamName, consumer, fullRange, Limit.from(1)));\n\n            if (!result.hasPending()) {\n                break;\n            }\n\n            List<StreamMessage<String, String>> list = sync.xclaim(\n                    streamName,\n                    consumer,\n                    new XClaimArgs().minIdleTime(500).retryCount(result.getDeliverCount() + 1),\n                    result.getMessageId()\n            );\n            if (list.isEmpty()) {\n                continue;\n            }\n            StreamMessage<String, String> message = list.get(0);\n            if (ThreadLocalRandom.current().nextDouble() < 0.001) {\n                log.info("[{}] {}", consumer.getName(), message.getBody());\n            }\n            sync.xack(streamName, groupName, message.getId());\n        }\n    }\n}\n\n/**\n * Pending \u8fd4\u56de\u7684\u7ed3\u679c\u5904\u7406\n */\ninterface PendingResult {\n    static PendingResult of(List<Object> v) {\n        return () -> v;\n    }\n\n    List<Object> getResult();\n\n    default boolean hasPending() {\n        List<Object> result = getResult();\n        if (result != null && !result.isEmpty()) {\n            List list = (List) result.get(0);\n            return !list.isEmpty() && list.get(0) != null;\n        }\n        return false;\n    }\n\n    default String getMessageId() {\n        return String.valueOf(((List) getResult().get(0)).get(0));\n    }\n\n    default String getConsumer() {\n        return String.valueOf(((List) getResult().get(0)).get(1));\n    }\n\n    default long getElapseTime() {\n        return ((Number) ((List) getResult().get(0)).get(2)).longValue();\n    }\n\n    default long getDeliverCount() {\n        return ((Number) ((List) getResult().get(0)).get(3)).longValue();\n    }\n}\n\n')),(0,l.kt)("p",null,"\u67d0\u6b21\u7684\u6027\u80fd\u7edf\u8ba1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Java CPU 70%\nc1.pending\n             count = 769903\n         mean rate = 3360.66 calls/second\n     1-minute rate = 3267.08 calls/second\n     5-minute rate = 2855.18 calls/second\n    15-minute rate = 2538.15 calls/second\n               min = 0.22 milliseconds\n               max = 1.80 milliseconds\n              mean = 0.30 milliseconds\n            stddev = 0.13 milliseconds\n            median = 0.26 milliseconds\n              75% <= 0.32 milliseconds\n              95% <= 0.49 milliseconds\n              98% <= 0.65 milliseconds\n              99% <= 0.88 milliseconds\n            99.9% <= 1.66 milliseconds\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5904\u7406\u672a\u6210\u529f\u7684\u6d88\u606f")),(0,l.kt)("p",null,"\u5f02\u6b65\u64cd\u4f5c\uff0c\u903b\u8f91\u76f8\u5bf9\u4e0d\u90a3\u4e48\u6e05\u6670\uff5e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public void testClaimPendingSingleThreadAsync() throws ExecutionException, InterruptedException {\n    RedisClient client = RedisClient.create("redis://localhost");\n    StatefulRedisConnection<String, String> connection = client.connect();\n    String streamName = "s";\n    String groupName = "g1";\n\n    RedisAsyncCommands<String, String> async = connection.async();\n    Consumer<String> consumer = Consumer.from(groupName, "c2");\n    Range<String> fullRange = Range.create("-", "+");\n\n    AtomicReference<Supplier<CompletionStage<?>>> process = new AtomicReference<>();\n    AtomicReference<Timer.Context> context = new AtomicReference<>();\n    // \u4e00\u6b21\u5904\u7406\n    process.set(() -> {\n        context.set(metrics.timer(consumer.getName() + ".process").time());\n        return async\n                .xpending(streamName, consumer, fullRange, Limit.from(1))\n                .thenCompose(v -> {\n                    PendingResult result = PendingResult.of(v);\n                    if (!result.hasPending()) {\n                        throw new RuntimeException("DONE");\n                    }\n\n                    return async.xclaim(\n                            streamName,\n                            consumer,\n                            new XClaimArgs().minIdleTime(500).retryCount(result.getDeliverCount() + 1),\n                            result.getMessageId()\n                    );\n                })\n                .thenCompose(list -> {\n                    StreamMessage<String, String> message = list.get(0);\n                    if (ThreadLocalRandom.current().nextDouble() < 0.001) {\n                        log.info("[{}] {}", consumer.getName(), message.getBody());\n                    }\n                    return async.xack(streamName, groupName, message.getId());\n                })\n                .thenCompose(v -> {\n                    context.get().close();\n                    return process.get().get();\n                });\n    });\n    // \u5faa\u73af\n    process.get()\n            .get()\n            .whenComplete((v, e) -> {\n                if (e != null) {\n                    e.printStackTrace();\n                }\n                log.info("Complete");\n            })\n            .toCompletableFuture()\n            .get();\n}\n')),(0,l.kt)("p",null,"\u4f46\u6027\u80fd\u4f1a\u6bd4\u540c\u6b65\u64cd\u4f5c\u7684\u6027\u80fd\u8981\u597d\u5462\uff0cJava \u7684 CPU \u4e5f\u6bd4\u540c\u6b65\u7684\u66f4\u4f4e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Java CPU 50%\nredis-server CPU 50%\nc2.process\n            count = 879207\n        mean rate = 5145.76 calls/second\n    1-minute rate = 5128.23 calls/second\n    5-minute rate = 3779.55 calls/second\n15-minute rate = 3132.92 calls/second\n            min = 0.14 milliseconds\n            max = 0.81 milliseconds\n            mean = 0.18 milliseconds\n        stddev = 0.06 milliseconds\n        median = 0.16 milliseconds\n            75% <= 0.19 milliseconds\n            95% <= 0.29 milliseconds\n            98% <= 0.34 milliseconds\n            99% <= 0.40 milliseconds\n        99.9% <= 0.81 milliseconds\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u5f53\u4ec0\u4e48\u65f6\u5019\u9009\u62e9 Redis \u7684\u6d41\u5462\uff1f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5185\u5b58\u5b58\u50a8\u6ee1\u8db3\u9700\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u901f\u5ea6\u8981\u6c42\u9ad8"),(0,l.kt)("li",{parentName:"ol"},"\u80fd\u63a5\u6536 Redis \u7684\u6301\u4e45\u5316\u4fdd\u969c - \uff08\u4fdd\u969c\u662f\u4e0d\u4e00\u5b9a\u6301\u4e45 \ud83d\ude04\uff09")),(0,l.kt)("p",null,"\u5408\u7406\u7684\u5e94\u7528\u4e5f\u662f\u9700\u8981\u5408\u7406\u7684\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u6d41\u603b\u7684\u6765\u8bf4\u8fd8\u662f\u5f88\u4e0d\u9519\u7684\uff0c\u8fd8\u6709\u5f88\u591a\u53ef\u80fd\u4f7f\u7528\u7684\u573a\u666f\u5728\u8fd9\u91cc\u4e0d\u505a\u4e00\u4e00\u8d58\u8ff0\uff0c\u6d41\u7684\u5185\u90e8\u5b9e\u73b0\u4e5f\u662f\u975e\u5e38\u7684\u6709\u610f\u601d\u7684\uff0c\u7b49\u6709\u65f6\u95f4\u518d\u505a\u53e6\u5916\u7684\u4e00\u4e2a\u5206\u4eab\u3002\u6b64\u5916 Redis 4 \u7684 Module \u4e5f\u662f\u975e\u5e38\u6709\u9b45\u529b\uff0c\u4f8b\u5982\u751a\u81f3\u53ef\u4ee5\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wenerme/go-rm"},"Golang")," \u6765\u5b9e\u73b0\u6a21\u5757\u6dfb\u52a0\u65b0\u7684\u547d\u4ee4\u529f\u80fd\uff0c\u55ef\u55ef\uff0c\u673a\u4f1a\u591a\u591a\u3002"))}g.isMDXComponent=!0}}]);