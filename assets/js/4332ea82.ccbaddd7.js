"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45634],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),g=n,m=f["".concat(p,".").concat(g)]||f[g]||s[g]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52012:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var o=r(96600),n=r(27279),a=(r(59496),r(49613)),l=["components"],i={tags:["Golang"]},p="Protobuf Go",u={unversionedId:"service/api/protobuf-go",id:"service/api/protobuf-go",title:"Protobuf Go",description:"- protocolbuffers/protobuf-go",source:"@site/../notes/service/api/protobuf-go.md",sourceDirName:"service/api",slug:"/service/api/protobuf-go",permalink:"/notes/service/api/protobuf-go",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/api/protobuf-go.md",tags:[{label:"Golang",permalink:"/notes/tags/golang"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{tags:["Golang"]},sidebar:"docs",previous:{title:"Protobuf",permalink:"/notes/service/api/protobuf-faq"},next:{title:"protobuf-web",permalink:"/notes/service/api/protobuf-web"}},c={},s=[{value:"APIv2",id:"apiv2",level:2},{value:"proto",id:"proto",level:2}],f={toc:s};function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protobuf-go"},"Protobuf Go"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protocolbuffers/protobuf-go")),(0,a.kt)("li",{parentName:"ul"},"2020-03-02 ",(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/protobuf-apiv2"},"A new Go API for Protocol Buffers"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIv1 github.com/golang/protobuf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"github.com/golang/",(0,a.kt)("a",{parentName:"li",href:"mailto:protobuf@v1.4.0"},"protobuf@v1.4.0")," \u4f7f\u7528 APIv2 \u5b9e\u73b0"))),(0,a.kt)("li",{parentName:"ul"},"APIv2 google.golang.org/protobuf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"google.golang.org/",(0,a.kt)("a",{parentName:"li",href:"mailto:protobuf@v1.20.0"},"protobuf@v1.20.0")," \u4f9d\u8d56 github.com/golang/",(0,a.kt)("a",{parentName:"li",href:"mailto:protobuf@v1.4.0"},"protobuf@v1.4.0")),(0,a.kt)("li",{parentName:"ul"},"\u52a8\u6001 pb")))))),(0,a.kt)("h2",{id:"apiv2"},"APIv2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v2 protoreflect.ProtoMessage"),(0,a.kt)("li",{parentName:"ul"},"v1 protoiface.MessageV1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="protoreflect"',title:'"protoreflect"'},"// \u57fa\u4e8e\u53cd\u5c04\u7684\u4e3b\u8981\u63a5\u53e3\ntype ProtoMessage interface{ ProtoReflect() Message }\n\n// v2\n// \u53cd\u5c04\u4fe1\u606f\ntype Message interface {\n    Descriptor() MessageDescriptor\n    Type() MessageType\n\n    New() Message\n    Interface() ProtoMessage\n    Range(f func(FieldDescriptor, Value) bool)\n    Has(FieldDescriptor) bool\n    Clear(FieldDescriptor)\n    Get(FieldDescriptor) Value\n    Set(FieldDescriptor, Value)\n    Mutable(FieldDescriptor) Value\n    NewField(FieldDescriptor) Value\n    WhichOneof(OneofDescriptor) FieldDescriptor\n    GetUnknown() RawFields\n    SetUnknown(RawFields)\n\n    IsValid() bool\n    ProtoMethods() *methods\n}\n\n// v1\ntype MessageV1 interface {\n    Reset()\n    String() string\n    ProtoMessage()\n}\n")),(0,a.kt)("h2",{id:"proto"},"proto"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"golang proto v2 \u57fa\u4e8e\u53cd\u5c04"),(0,a.kt)("li",{parentName:"ul"},"github.com/golang/protobuf/proto"),(0,a.kt)("li",{parentName:"ul"},"\u53cd\u5c04",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u6ce8\u518c - google.golang.org/protobuf/reflect/protoregistry",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GlobalFiles"),(0,a.kt)("li",{parentName:"ul"},"GlobalTypes")))))))}g.isMDXComponent=!0}}]);