"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64067],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"xds"},p="xds",s={unversionedId:"service/api/xds",id:"service/api/xds",title:"xds",description:"\u6700\u65e9\u7531 Envoy \u5f00\u53d1\uff0c\u7528\u4e8e\u6784\u5efa ServiceMesh \u7edf\u4e00\u7684 DP \u63a5\u53e3\u3002",source:"@site/../notes/service/api/xds.md",sourceDirName:"service/api",slug:"/service/api/xds",permalink:"/notes/service/api/xds",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/api/xds.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"xds"},sidebar:"docs",previous:{title:"URQL",permalink:"/notes/service/api/urql"},next:{title:"Auth",permalink:"/notes/service/auth/"}},c={},u=[{value:"gRPC xDS",id:"grpc-xds",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xds"},"xds"),(0,o.kt)("p",null,"\u6700\u65e9\u7531 Envoy \u5f00\u53d1\uff0c\u7528\u4e8e\u6784\u5efa ServiceMesh \u7edf\u4e00\u7684 DP \u63a5\u53e3\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"xDS API - \u4e00\u5957 DP API - Mesh CP <-> Proxies",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e gRPC Mesh - ",(0,o.kt)("inlineCode",{parentName:"li"},"xds://pkg.service")))),(0,o.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LDS - Listener Discovery Service - type.googleapis.com/envoy.config.listener.v3.Listener"),(0,o.kt)("li",{parentName:"ul"},"RDS - Route Discovery Service - type.googleapis.com/envoy.config.route.v3.RouteConfiguration"),(0,o.kt)("li",{parentName:"ul"},"CDS - Cluster Discovery Service - type.googleapis.com/envoy.config.cluster.v3.Cluster"),(0,o.kt)("li",{parentName:"ul"},"EDS - Endpoint Discovery Service - type.googleapis.com/envoy.config.endpoint.v3.ClusterLoadAssignment"),(0,o.kt)("li",{parentName:"ul"},"ADS - Aggregate Discovery Service - gRPC"))),(0,o.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u62a5\u544a - LRS"),(0,o.kt)("li",{parentName:"ul"},"xDSv3"),(0,o.kt)("li",{parentName:"ul"},"CP \u5b9e\u73b0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GCP Traffic Director"),(0,o.kt)("li",{parentName:"ul"},"istio"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/envoyproxy/go-control-plane"},"envoyproxy/go-control-plane")))),(0,o.kt)("li",{parentName:"ul"},"UDPA - Universal Data Plane API",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0\uff0c\u8d1f\u8f7d\u5747\u8861\u5206\u914d\uff0c\u8def\u7531\u53d1\u73b0\uff0c\u76d1\u542c\u5668\u914d\u7f6e\uff0c\u5b89\u5168\u53d1\u73b0\uff0c\u8d1f\u8f7d\u62a5\u544a\uff0c\u8fd0\u884c\u72b6\u51b5\u68c0\u67e5\u59d4\u6258"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/envoyproxy/data-plane-api"},"envoyproxy/data-plane-api")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol"},"xDS REST and gRPC protocol"))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role"),(0,o.kt)("th",{parentName:"tr",align:null},"For"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gRPC"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9ad8\u6027\u80fd\u901a\u4fe1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,o.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0\u3001\u5065\u5eb7\u68c0\u6d4b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Istio"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u3001\u8d1f\u8f7d\uff0c\u670d\u52a1\u6cbb\u7406\uff1a\u7194\u65ad\u3001\u91cd\u62fe\uff0c\u5b89\u5168\uff1a\u8ba4\u8bc1\u3001mTLS\uff0c\u53ef\u89c2\u5bdf\u6027\uff1atrace\u3001log\u3001metrics")))),(0,o.kt)("h2",{id:"grpc-xds"},"gRPC xDS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GRPC_XDS_BOOTSTRAP"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/grpcdebug"},"grpc-ecosystem/grpcdebug"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e debug xds"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/salrashid123/grpc_xds"},"salrashid123/grpc_xds")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grpc.github.io/grpc/cpp/md_doc_grpc_xds_features.html"},"xDS Features in gRPC")),(0,o.kt)("li",{parentName:"ul"},"go grpc xds ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc-go/blob/master/examples/features/xds/README.md"},"example")),(0,o.kt)("li",{parentName:"ul"},"gRPC ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/grpc/proposal/blob/master/A27-xds-global-load-balancing.md"},"A27: xDS-Based Global Load Balancing"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // The xDS server to talk to.  The value is an array to allow for a\n  // future change to add support for failing over to a secondary xDS server\n  // if the primary is down, but for now, only the first entry in the\n  // array will be used.\n  "xds_servers": [\n    {\n      "server_uri": "", //<string containing URI of xds server>,\n      // List of channel creds; client will stop at the first type it\n      // supports.  This field is required and must contain at least one\n      // channel creds type that the client supports.\n      "channel_creds": [\n        {\n          "type": "", // google_default, insecure\n          // The "config" field is optional; it may be missing if the\n          // credential type does not require config parameters.\n          "config": "" //<JSON object containing config for the type>\n        }\n      ],\n      "server_features": ["xds_v3"]\n    }\n  ],\n  // JSON of proto\n  // https://github.com/envoyproxy/data-plane-api/blob/1adb5d54abb0e28ca409254d26fad1cf5535239b/envoy/api/v2/core/base.proto#L85-L118\n  "node": {\n    "id": "",\n    "cluster": "",\n    "metadata": {},\n    "locality": {\n      "region": "",\n      // https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\n      // https://cloud.google.com/compute/docs/regions-zones/\n      "zone": "",\n      "sub_zone": ""\n    },\n    "build_version": ""\n  }\n}\n')))}d.isMDXComponent=!0}}]);