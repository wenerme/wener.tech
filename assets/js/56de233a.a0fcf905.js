"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1571],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return c}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),N=m(a),c=l,s=N["".concat(p,".").concat(c)]||N[c]||k[c]||r;return a?n.createElement(s,u(u({ref:e},o),{},{components:a})):n.createElement(s,u({ref:e},o))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,u=new Array(r);u[0]=N;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,u[1]=i;for(var m=2;m<r;m++)u[m]=a[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},18468:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return k}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),u=["components"],i={title:"\u6570\u636e\u540c\u6b65\u6a21\u5f0f",slug:"etl-pattens",tags:["\u8bbe\u8ba1","\u67b6\u6784"]},p=void 0,m={permalink:"/story/etl-pattens",editUrl:"https://github.com/wenerme/wener/edit/master/story/2022/2022-01-26-etl-pattens.md",source:"@site/story/2022/2022-01-26-etl-pattens.md",title:"\u6570\u636e\u540c\u6b65\u6a21\u5f0f",description:"A \u540c\u6b65\u5230 B",date:"2022-01-26T00:00:00.000Z",formattedDate:"January 26, 2022",tags:[{label:"\u8bbe\u8ba1",permalink:"/story/tags/\u8bbe\u8ba1"},{label:"\u67b6\u6784",permalink:"/story/tags/\u67b6\u6784"}],readingTime:2.655,truncated:!0,authors:[],frontMatter:{title:"\u6570\u636e\u540c\u6b65\u6a21\u5f0f",slug:"etl-pattens",tags:["\u8bbe\u8ba1","\u67b6\u6784"]},prevItem:{title:"Love the World",permalink:"/story/love-the-world"},nextItem:{title:"\u7ec4\u5efa\u4f60\u81ea\u5df1\u7684 NAS \u670d\u52a1\u5668",permalink:"/story/build-your-own-nas"}},o={authorsImageUrls:[]},k=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u6a21\u5f0f",id:"\u6a21\u5f0f",level:2},{value:"\u65b9\u5f0f",id:"\u65b9\u5f0f",level:2},{value:"\u5b9e\u73b0\u65b9\u6848",id:"\u5b9e\u73b0\u65b9\u6848",level:2},{value:"Transform \u8003\u8651",id:"transform-\u8003\u8651",level:2},{value:"\u6570\u636e\u7f16\u7801 \u8003\u8651",id:"\u6570\u636e\u7f16\u7801-\u8003\u8651",level:2}],N={toc:k};function c(t){var e=t.components,a=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A \u540c\u6b65\u5230 B"),(0,r.kt)("p",{parentName:"blockquote"},"DBA -> A -> B -> DBB"),(0,r.kt)("p",{parentName:"blockquote"},"Extract -> Load"),(0,r.kt)("p",{parentName:"blockquote"},"Extract -Transform-> Load")),(0,r.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A,B,DBA,DBB \u4e92\u901a\u6027")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"from\\to"),(0,r.kt)("th",{parentName:"tr",align:null},"DBA"),(0,r.kt)("th",{parentName:"tr",align:null},"A"),(0,r.kt)("th",{parentName:"tr",align:null},"B"),(0,r.kt)("th",{parentName:"tr",align:null},"DBB"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBA"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe0"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBB"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udfe2 - \u6709\u53ef\u80fd - A <-> B"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udfe1 - \u4e5f\u8bb8\u53ef\u80fd - \u63d0\u4f9b\u516c\u6709\u4e91\u6570\u636e\u5e93\u4f5c\u4e3a\u540c\u6b65\u76ee\u6807"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udfe0 - \u4e0d\u592a\u53ef\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5185\u90e8\u670d\u52a1\u662f\u53ef\u80fd\u7684")))),(0,r.kt)("h2",{id:"\u6a21\u5f0f"},"\u6a21\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Push - \u63a8 - A -> B"),(0,r.kt)("li",{parentName:"ul"},"Pull - \u62c9 - A <- B"),(0,r.kt)("li",{parentName:"ul"},"Reactive - A <-> B"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9 - A -> X -> B")),(0,r.kt)("h2",{id:"\u65b9\u5f0f"},"\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5168\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u589e\u91cf\u6e38\u6807"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e CDC \u4e8b\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},"Schema+Data")),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u65b9\u6848"},"\u5b9e\u73b0\u65b9\u6848"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DBA -> A -> B -> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"B \u66b4\u9732 API\uff0cA \u8bf7\u6c42 B - Push/Hook"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: WebHook"))),(0,r.kt)("li",{parentName:"ul"},"DBA -> A <- B -> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A \u66b4\u9732 API\uff0cB \u8bf7\u6c42 A - Pull/Query"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: WebHook"))),(0,r.kt)("li",{parentName:"ul"},"DBA -> A -> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u914d\u7f6e\u540c\u6b65\u76ee\u6807\u7ed9 A, A \u76f4\u63a5\u5199\u5165"))),(0,r.kt)("li",{parentName:"ul"},"DBA -> B -> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: RLS \u66b4\u9732\u7ed9 B \u8bbf\u95ee"))),(0,r.kt)("li",{parentName:"ul"},"DBA <-> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: DB Link, Replication"))),(0,r.kt)("li",{parentName:"ul"},"DBA -> A -> Queue -> B -> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A,B \u901a\u8fc7 Queue \u4ea4\u4e92 - A,B \u90fd\u6ca1\u6709\u66b4\u9732\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u88ab\u52a8"),(0,r.kt)("li",{parentName:"ul"},"Queue \u5b9a\u4f4d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8 - Kafka"),(0,r.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u4f20\u8f93 - Redis, Nats - \u4f8b\u5982 RPC over Redis Stream"))))),(0,r.kt)("li",{parentName:"ul"},"DBA -> X -> DBB"),(0,r.kt)("li",{parentName:"ul"},"DBA -> A -> X -> B -> DBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u501f\u52a9\u7b2c\u4e09\u65b9\u670d\u52a1 - \u4f8b\u5982: AirByte, PgLoader"),(0,r.kt)("li",{parentName:"ul"},"X \u670d\u52a1\u4f5c\u4e3a \u4e2d\u95f4\u670d\u52a1 \u4e0e A,B \u4ea4\u4e92",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 Queue \u89d2\u8272"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u52a8"))),(0,r.kt)("li",{parentName:"ul"},"X \u5177\u6709\u9002\u914d\u80fd\u529b")))),(0,r.kt)("h2",{id:"transform-\u8003\u8651"},"Transform \u8003\u8651"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e Schema \u9002\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\u9002\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4\u3001\u8f6c\u6362\u3001\u8ba1\u7b97"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\u5305\u542b\u903b\u8f91",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u903b\u8f91 ~= Script",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lua, Python, JS"))),(0,r.kt)("li",{parentName:"ul"},"gRPC - \u5916\u90e8\u8c03\u7528"))),(0,r.kt)("li",{parentName:"ul"},"Transform \u7684\u590d\u6742\u5ea6\u51b3\u5b9a\u4e86\u662f ETL \u8fd8\u662f\u6d41\u5904\u7406",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ETL - \u7b80\u5355\u9002\u914d\u3001\u8c03\u6574\u3001\u5143\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u6d41\u5904\u7406 - \u5305\u542b\u72b6\u6001\u3001\u4f9d\u8d56\u524d\u540e\u6d88\u606f/Window\u3001\u5305\u542b\u805a\u5408"))),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: Flink, SparkSQL, Storm\u3001KafkaSQL")),(0,r.kt)("h2",{id:"\u6570\u636e\u7f16\u7801-\u8003\u8651"},"\u6570\u636e\u7f16\u7801 \u8003\u8651"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u672c\u7f16\u7801 - CSV,JSON,JSONL - \u57fa\u7840\uff0c\u4e22\u5931\u7c7b\u578b\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u7f16\u7801 - Avro, Parqute, Protobuf"),(0,r.kt)("li",{parentName:"ul"},"CBOR - Concise Binary Object Representation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4 JSON \u80fd\u66f4\u597d\u7684\u4fdd\u7559\u7c7b\u578b\u4fe1\u606f"))),(0,r.kt)("li",{parentName:"ul"},"Schema+Data - \u6570\u636e\u66f4\u7d27\u51d1")))}c.isMDXComponent=!0}}]);