"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73319],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return N}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(a),N=r,c=k["".concat(o,".").concat(N)]||k[N]||m[N]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85011:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return N},default:function(){return f},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return g}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&s(e,a,t[a]);return e};const k={tags:["Design"]},N="API Design",c={unversionedId:"service/api/api-design",id:"service/api/api-design",title:"API Design",description:"- grpc \u5185\u90e8\u9ed8\u8ba4 4mb buffer",source:"@site/../notes/service/api/api-design.md",sourceDirName:"service/api",slug:"/service/api/design",permalink:"/notes/service/api/design",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/api-design.md",tags:[{label:"Design",permalink:"/notes/tags/design"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666229352,formattedLastUpdatedAt:"Oct 20, 2022",frontMatter:{tags:["Design"]},sidebar:"docs",previous:{title:"API Awesome",permalink:"/notes/service/api/awesome"},next:{title:"API FAQ",permalink:"/notes/service/api/faq"}},d={},g=[{value:"pagination",id:"pagination",level:2},{value:"Zalando",id:"zalando",level:2},{value:"Google Cloud",id:"google-cloud",level:2},{value:"gRPC API Design",id:"grpc-api-design",level:2},{value:"entpb",id:"entpb",level:3}],b={toc:g};function f(e){var t,a=e,{components:r}=a,s=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"api-design"}),"API Design"),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"grpc \u5185\u90e8\u9ed8\u8ba4 4mb buffer"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Google Cloud API ",(0,n.kt)("a",m({parentName:"li"},{href:"https://cloud.google.com/apis/design/design_patterns"}),"\u5e38\u89c1\u8bbe\u8ba1\u6a21\u5f0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[start_xxx, end_xxx)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"map<string, string> labels")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/Microsoft/api-guidelines"}),"https://github.com/Microsoft/api-guidelines")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://cloud.google.com/apis/design/"}),"https://cloud.google.com/apis/design/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://opensource.zalando.com/restful-api-guidelines/"}),"https://opensource.zalando.com/restful-api-guidelines/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/zalando/zally"}),"zalando/zally"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"API linter"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://apistylebook.com/"}),"https://apistylebook.com/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://apistylebook.com/design/guidelines/"}),"http://apistylebook.com/design/guidelines/")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/restcookbook/restcookbook"}),"https://github.com/restcookbook/restcookbook"))),(0,n.kt)("h2",m({},{id:"pagination"}),"pagination"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Offset/Limit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"offset+limit"))),(0,n.kt)("li",{parentName:"ul"},"Cursor/Limit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cursor+limit"),(0,n.kt)("li",{parentName:"ul"},"\u65f6\u95f4: until, since")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:'title="Meta GQL.json"',title:'"Meta','GQL.json"':!0}),'{\n  "data": [],\n  "paging": {\n    "cursors": {\n      "after": "XYZ=",\n      "before": "XYZ="\n    },\n    "previous": "https://?limit=25&before=XYZ=",\n    "next": "https://?limit=25&after=XYZ="\n  }\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:'title="Twitter.json"',title:'"Twitter.json"'}),'{\n  "ids": [123],\n  "next_cursor": 123,\n  "next_cursor_str": "123",\n  "previous_cursor": -123,\n  "previous_cursor_str": "-123"\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:'"Zalando.json"','"Zalando.json"':!0}),'{\n  "items": [],\n  "self": "http://?cursor=",\n  "first": "",\n  "prev": "",\n  "next": "",\n  "last": "",\n  "query": {}\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://developers.facebook.com/docs/graph-api/results"}),"https://developers.facebook.com/docs/graph-api/results"))))),(0,n.kt)("h2",m({},{id:"zalando"}),"Zalando"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u53c2\u6570",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"q"),(0,n.kt)("li",{parentName:"ul"},"sort - ",(0,n.kt)("inlineCode",{parentName:"li"},"+id,-name"),",",(0,n.kt)("inlineCode",{parentName:"li"},"-id"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," asc, ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," desc"))),(0,n.kt)("li",{parentName:"ul"},"fields - ",(0,n.kt)("inlineCode",{parentName:"li"},"(name,friends(name))"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u90e8\u5206\u5b57\u6bb5"))),(0,n.kt)("li",{parentName:"ul"},"embed - ",(0,n.kt)("inlineCode",{parentName:"li"},"(items)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u5173\u8054\u5c5e\u6027"))),(0,n.kt)("li",{parentName:"ul"},"offset"),(0,n.kt)("li",{parentName:"ul"},"cursor"),(0,n.kt)("li",{parentName:"ul"},"limit")))),(0,n.kt)("h2",m({},{id:"google-cloud"}),"Google Cloud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fields=name,generation,size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fields=items(id,metadata/key1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://cloud.google.com/storage/docs/json_api#partial-response"}),"https://cloud.google.com/storage/docs/json_api#partial-response"))),(0,n.kt)("h2",m({},{id:"grpc-api-design"}),"gRPC API Design"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u9762\u5411\u8d44\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u540d\u5b57",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90 ",(0,n.kt)("strong",{parentName:"li"},"\u5fc5\u987b")," \u5305\u542b\u8d44\u6e90\u540d\u5b57"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u53ef\u4ee5")," \u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"<resource>_id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u53ef\u4ee5")," \u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"uid")),(0,n.kt)("li",{parentName:"ul"},"ID \u5b57\u6bb5 ",(0,n.kt)("em",{parentName:"li"},"\u5e94\u8be5")," \u4e3a \u5b57\u7b26\u4e32"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"teams/first/members/wener")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"users/wener")))),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u8d44\u6e90\u540d\u5b57",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1\u540d\u5b57/\u8d44\u6e90\u540d\u5b57")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"//library.wener.me/publishers/123/books/456"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7684\u7c7b\u578b ",(0,n.kt)("inlineCode",{parentName:"li"},"library.wener.me/Publisher"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"library.wener.me/Book")))))))),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u5408\u8d44\u6e90\u540d\u5b57",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u590d\u6570\u3001\u9a7c\u5cf0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"users/wener/events/hello-world")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u652f\u6301\u8de8\u96c6\u5408",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"publishers/-/books/{book}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"users/-/events?filter=")))))),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7c7b\u578b - {Service Name}/{Type}",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ServiceName"),(0,n.kt)("li",{parentName:"ul"},"Type"))),(0,n.kt)("li",{parentName:"ul"},"GetResource(GetResourceRequest) returns (Resource)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GetResourceRequest#name -- \u8d44\u6e90\u540d\u5b57 -> ",(0,n.kt)("inlineCode",{parentName:"li"},"publishers/{publisher}/books/{book}")))),(0,n.kt)("li",{parentName:"ul"},"ListResources(ListResourceRequest) returns (ListResourceResponse)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ListResourceRequest#",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"parent - \u4e0a\u7ea7\u96c6\u5408 -> ",(0,n.kt)("inlineCode",{parentName:"li"},"publishers/*")),(0,n.kt)("li",{parentName:"ul"},"page_size"),(0,n.kt)("li",{parentName:"ul"},"page_token - \u5c3d\u91cf\u524d\u7aef\u4e0d\u53ef\u9006"),(0,n.kt)("li",{parentName:"ul"},"skip - \u53ef\u9009\u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"order_by - ",(0,n.kt)("inlineCode",{parentName:"li"},"field [asc|desc],...")),(0,n.kt)("li",{parentName:"ul"},"filter - ",(0,n.kt)("a",m({parentName:"li"},{href:"https://google.aip.dev/160"}),"AIP-160"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"a AND b OR NOT c")," - OR \u4f18\u5148\u7ea7\u9ad8\u4e8e AND"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NOT a")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"-a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"=,!=,>,<,>=,<=")),(0,n.kt)("li",{parentName:"ul"},"true,false,null"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"a.b = true")),(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b/has ",(0,n.kt)("inlineCode",{parentName:"li"},"a.b:10")," - a \u4e3a\u96c6\u5408\uff0cb \u4e3a\u96c6\u5408\u5143\u7d20\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"call(args...)")),(0,n.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u5fc5\u987b\u5728\u5de6\u8fb9"))),(0,n.kt)("li",{parentName:"ul"},"bool show_deleted - \u8f6f\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"unreachable"))),(0,n.kt)("li",{parentName:"ul"},"ListResourceResponse",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"repeated Resource resources"),(0,n.kt)("li",{parentName:"ul"},"next_page_token"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u9009 int64 total_size"))))),(0,n.kt)("li",{parentName:"ul"},"CreateResource(CreateResourceRequest) returns (Resource)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CreateResourceRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"parent"),(0,n.kt)("li",{parentName:"ul"},"resource"),(0,n.kt)("li",{parentName:"ul"},"resource_id \u6709\u4e9b\u573a\u666f\u53ef\u4ee5\u652f\u6301\u5ba2\u6237\u7aef\u81ea\u5df1\u6307\u5b9a"))),(0,n.kt)("li",{parentName:"ul"},"\u957f\u65f6\u95f4\u8fd0\u884c\u64cd\u4f5c\u8fd4\u56de google.longrunning.Operation"))),(0,n.kt)("li",{parentName:"ul"},"UpdateResource(UpdateResourceRequest) returns (Resource)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"UpdateResourceRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"resource",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 name \u5339\u914d"),(0,n.kt)("li",{parentName:"ul"},"etag - \u53ef\u6307\u5b9a etga \u8fdb\u884c\u6bd4\u8f83\u66f4\u65b0\uff0c\u5982\u679c\u4e0d\u5339\u914d\u5219\u5931\u8d25"))),(0,n.kt)("li",{parentName:"ul"},"google.protobuf.FieldMask update_mask - \u652f\u6301\u90e8\u5206\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ul"},"bool allow_missing - \u5982\u679c\u4e0d\u5b58\u5219\u521b\u5efa"))))),(0,n.kt)("li",{parentName:"ul"},"DeleteResource(DeleteResourceRequest) returns (google.protobuf.Empty)"),(0,n.kt)("li",{parentName:"ul"},"DeleteResourceRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"name"),(0,n.kt)("li",{parentName:"ul"},"bool force - \u5f3a\u5236\u7ea7\u8054\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"etag - \u5982\u679c\u5339\u914d\u624d\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"bool allow_missing - \u5ffd\u7565\u4e0d\u5b58\u5728"))),(0,n.kt)("li",{parentName:"ul"},"PurgeResources(PurgeResourcesRequest) returns (google.longrunning.Operation)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6279\u91cf\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"PurgeResourcesRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"parent"),(0,n.kt)("li",{parentName:"ul"},"filter"),(0,n.kt)("li",{parentName:"ul"},"force"))),(0,n.kt)("li",{parentName:"ul"},"PurgeResourcesResponse",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"purge_count"),(0,n.kt)("li",{parentName:"ul"},"purge_sample"))))),(0,n.kt)("li",{parentName:"ul"},"UndeleteResource(UndeleteResourceRequest) returns (Resource)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f6f\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"UndeleteResourceRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"name"))))),(0,n.kt)("li",{parentName:"ul"},"Batch"),(0,n.kt)("li",{parentName:"ul"},"ImportResources(ImportResourcesRequest) returns (google.longrunning.Operation)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ImportResourcesRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"parent"))))),(0,n.kt)("li",{parentName:"ul"},"ExportResources(ExportResourcesRequest) returns (google.longrunning.Operation)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ExportResourcesRequest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"filter"))))),(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u6807\u51c6\u5b57\u6bb5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"name"),(0,n.kt)("li",{parentName:"ul"},"parent"),(0,n.kt)("li",{parentName:"ul"},"uid"),(0,n.kt)("li",{parentName:"ul"},"display_name,title,given_name,faamily_ame"),(0,n.kt)("li",{parentName:"ul"},"create_time,update_time,delete_time"),(0,n.kt)("li",{parentName:"ul"},"expire_time - \u8f6f\u5220\u9664\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"etag - checksum"))),(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u8bf7\u6c42\u5b57\u6bb5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"request_id - UUID"),(0,n.kt)("li",{parentName:"ul"},"validate_only - Change validation"),(0,n.kt)("li",{parentName:"ul"},"google.protobuf.FieldMask",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5e94\u8be5\u5728\u8bf7\u6c42\u5305\u542b - \u53ef\u4ee5\u5728 metadata \u5305\u542b - \u4f8b\u5982 \u5934"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u987b optional"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"li"},"*")),(0,n.kt)("li",{parentName:"ul"},"\u73b0\u5728\u63a8\u8350 view"))),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 enum BookView {BOOK_VIEW_UNSPECIFIED=0;BASIC = 1;FULL = 2;}"))),(0,n.kt)("li",{parentName:"ul"},"\u5355\u5b9e\u4f8b\u8d44\u6e90\u53ea\u6709 Get \u548c Update"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://google.aip.dev/"}),"https://google.aip.dev/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/googleapis/googleapis/blob/master/google/api/"}),"https://github.com/googleapis/googleapis/blob/master/google/api/")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/einride/aip-go"}),"einride/aip-go"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u89e3\u6790\u8d44\u6e90\u540d\u5b57\u903b\u8f91")))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u7528 unsigned integer"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u7528 optional - \u9664\u975e\u8868\u793a\u7279\u5b9a\u542b\u4e49 - \u4f8b\u5982 \u7a7a \u4e3a \u672a\u6295\u7968\u3001\u672a\u8bc4\u5206",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"optional \u4f1a\u8fd4\u56de zero value - \u5373\u4fbf\u6ca1\u6709 set"))))),(0,n.kt)("h3",m({},{id:"entpb"}),"entpb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8d44\u6e90\u4e00\u4e2a\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210\u5927\u91cf\u5185\u5bb9\uff0c\u4f46\u6a21\u5f0f\u56fa\u5b9a"),(0,n.kt)("li",{parentName:"ul"},"entpb ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/ent/contrib"}),"https://github.com/ent/contrib")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/ent/ent/issues/2446"}),"#2446"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-proto"}),'syntax = "proto3";\n\nservice UserService {\n  rpc Create ( CreateUserRequest ) returns ( User );\n  rpc Get ( GetUserRequest ) returns ( User );\n  rpc Update ( UpdateUserRequest ) returns ( User );\n  rpc Delete ( DeleteUserRequest ) returns ( google.protobuf.Empty );\n  rpc List ( ListUserRequest ) returns ( ListUserResponse );\n  rpc BatchCreate ( BatchCreateUsersRequest ) returns ( BatchCreateUsersResponse );\n}\n\nmessage CreateUserRequest {\n  User user = 1;\n}\n\nmessage GetUserRequest {\n  int64 id = 1;\n  View view = 2;\n\n  enum View {\n    VIEW_UNSPECIFIED = 0;\n    BASIC = 1;\n    WITH_EDGE_IDS = 2;\n  }\n}\nmessage UpdateUserRequest {\n  User user = 1;\n}\nmessage DeleteUserRequest {\n  int64 id = 1;\n}\nmessage ListUserRequest {\n  int32 page_size = 1;\n  string page_token = 2;\n  View view = 3;\n\n  enum View {\n    VIEW_UNSPECIFIED = 0;\n    BASIC = 1;\n    WITH_EDGE_IDS = 2;\n  }\n}\nmessage ListUserResponse {\n  repeated User user_list = 1;\n  string next_page_token = 2;\n}\n\nmessage BatchCreateUsersRequest {\n  repeated CreateUserRequest requests = 1;\n}\nmessage BatchCreateUsersResponse {\n  repeated User users = 1;\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/ent/contrib/blob/1faab982b6648b7704a6cf41ff65d9cb7811a2be/entproto/internal/todo/ent/proto/entpb/entpb.proto"}),"https://github.com/ent/contrib/blob/1faab982b6648b7704a6cf41ff65d9cb7811a2be/entproto/internal/todo/ent/proto/entpb/entpb.proto"))))}f.isMDXComponent=!0}}]);