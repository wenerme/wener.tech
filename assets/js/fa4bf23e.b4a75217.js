"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61583],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return k}});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(r),k=n,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||o;return r?a.createElement(d,l(l({ref:e},m),{},{components:r})):a.createElement(d,l({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},31571:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=r(96600),n=r(27279),o=(r(59496),r(49613)),l=["components"],i={title:"protoc"},p="protoc",u={unversionedId:"service/api/protoc",id:"service/api/protoc",title:"protoc",description:"| flag                             | for                                           |",source:"@site/../notes/service/api/protoc.md",sourceDirName:"service/api",slug:"/service/api/protoc",permalink:"/notes/service/api/protoc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/api/protoc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"protoc"},sidebar:"docs",previous:{title:"protoc-gen-validate",permalink:"/notes/service/api/protoc-gen-validate"},next:{title:"Serialization Awesome",permalink:"/notes/service/api/serialization-awesome"}},m={},c=[{value:"Plugins",id:"plugins",level:2},{value:"Descriptor",id:"descriptor",level:2},{value:"Write Plugins",id:"write-plugins",level:2}],s={toc:c};function k(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protoc"},"protoc"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"flag"),(0,o.kt)("th",{parentName:"tr",align:null},"for"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-I,--proto_path ",(0,o.kt)("inlineCode",{parentName:"td"},"<PATH>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5f53\u524d\u76ee\u5f55, --descriptor_set_in")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--encode ",(0,o.kt)("inlineCode",{parentName:"td"},"<MESSAGE_TYPE>")),(0,o.kt)("td",{parentName:"tr",align:null},"text -> proto")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--deterministic_output"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"td"},"--encode")," \u786e\u4fdd map \u987a\u5e8f\u56fa\u5b9a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--decode ",(0,o.kt)("inlineCode",{parentName:"td"},"<MESSAGE_TYPE>")),(0,o.kt)("td",{parentName:"tr",align:null},"proto -> text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--decode_raw"),(0,o.kt)("td",{parentName:"tr",align:null},"proto -> tag,value - \u4e0d\u9700\u8981 proto")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--descriptor_set_in ",(0,o.kt)("inlineCode",{parentName:"td"},"<FILES>")),(0,o.kt)("td",{parentName:"tr",align:null},"FileDescriptorSet \u5217\u8868 descriptor.proto")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-o,--descriptor_set_out ",(0,o.kt)("inlineCode",{parentName:"td"},"<FILE>")),(0,o.kt)("td",{parentName:"tr",align:null},"FileDescriptorSet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--include_imports"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"td"},"--descriptor_set_out")," \u5305\u542b\u4f9d\u8d56")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--include_source_info"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"td"},"--descriptor_set_out")," \u4fdd\u7559 SourceCodeInfo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--dependency_out=FILE"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa make \u4f9d\u8d56")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--error_format=FORMAT"),(0,o.kt)("td",{parentName:"tr",align:null},"gcc, msvs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--fatal_warnings"),(0,o.kt)("td",{parentName:"tr",align:null},"warnings -> fatal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--print_free_field_numbers"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--plugin=EXECUTABLE"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 PATH, \u53ef\u4ee5\u662f ",(0,o.kt)("inlineCode",{parentName:"td"},"NAME=PATH"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@<filename>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ece\u6587\u4ef6\u8bfb\u53d6\u914d\u7f6e")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<plugin>_out")," - \u8f93\u51fa\u76ee\u5f55 - \u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},".:."),", ",(0,o.kt)("inlineCode",{parentName:"li"},".:./gen/out")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<plugin>_opt")," - \u53c2\u6570"))),(0,o.kt)("li",{parentName:"ul"},"plugin",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"cpp"),(0,o.kt)("li",{parentName:"ul"},"csharp"),(0,o.kt)("li",{parentName:"ul"},"java"),(0,o.kt)("li",{parentName:"ul"},"js"),(0,o.kt)("li",{parentName:"ul"},"kotlin"),(0,o.kt)("li",{parentName:"ul"},"objc"),(0,o.kt)("li",{parentName:"ul"},"php"),(0,o.kt)("li",{parentName:"ul"},"python"),(0,o.kt)("li",{parentName:"ul"},"ruby"))),(0,o.kt)("li",{parentName:"ul"},"descriptor_set",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9884\u751f\u6210 descriptor\uff0c\u4e4b\u540e\u5219\u4e0d\u9700\u8981 proto \u6e90\u6587\u4ef6")))),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"protoc-gen-<plugin>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/notes/service/api/protoc-gen-validate"},"protoc-gen-validate")," \u6821\u9a8c message",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"go,java,cc"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protobuf-c/protobuf-c"},"protoc-gen-c")),(0,o.kt)("li",{parentName:"ul"},"Golang",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protoc-gen-go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mitchellh/protoc-gen-go-json"},"protoc-gen-go-json")," Go JSON Marshal/Unmarshal"),(0,o.kt)("li",{parentName:"ul"},"protoc-gen-go-vtproto"),(0,o.kt)("li",{parentName:"ul"},"protoc-gen-gotag"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gogo/protobuf"},"gogo/protobuf"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"APIv2 \u53d1\u5e03\u540e\u4e0d\u518d\u7ef4\u62a4"),(0,o.kt)("li",{parentName:"ul"},"protoc-gen-{gofast,combo,gogo,gogofast,gogofaster,gogoslic,gogotypes,gostring}"))))),(0,o.kt)("li",{parentName:"ul"},"Document",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"protoc-gen-slate"),(0,o.kt)("li",{parentName:"ul"},"protoc-gen-swagger"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pseudomuto/protoc-gen-doc"},"protoc-gen-doc")))),(0,o.kt)("li",{parentName:"ul"},"Schema",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chrusty/protoc-gen-jsonschema"},"protoc-gen-jsonschema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/protoc-gen-bq-schema"},"protoc-gen-bq-schema"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"pb to BigQuery schema")))))),(0,o.kt)("h2",{id:"descriptor"},"Descriptor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"proto \u89e3\u6790\u8fc7\u540e\u7684\u7ed3\u6784"),(0,o.kt)("li",{parentName:"ul"},"DescriptorProto - Message",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"field FieldDescriptorProto"),(0,o.kt)("li",{parentName:"ul"},"extension"),(0,o.kt)("li",{parentName:"ul"},"nested_type - DescriptorProto"),(0,o.kt)("li",{parentName:"ul"},"enum_type - EnumDescriptorProto"),(0,o.kt)("li",{parentName:"ul"},"oneof - OneofDescriptorProto"),(0,o.kt)("li",{parentName:"ul"},"options - MessageOptions")))),(0,o.kt)("h2",{id:"write-plugins"},"Write Plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534f\u8bae ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/compiler/plugin.proto"},"https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/compiler/plugin.proto"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 stdio \u4ea4\u4e92"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lyft/protoc-gen-star"},"lyft/protoc-gen-star"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u5b9e\u73b0\u63d2\u4ef6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lyft/protoc-gen-star/tree/master/protoc-gen-debug"},"protoc-gen-debug"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u751f\u6210 bin\uff0c\u7528\u4e8e\u6d4b\u8bd5\u63d2\u4ef6"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/danielgtaylor/python-betterproto"},"danielgtaylor/python-betterproto"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Python 3.6+ code generator & library for Protobuf 3 and async gRPC"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://json-to-proto.github.io/"},"json-to-proto"))))}k.isMDXComponent=!0}}]);