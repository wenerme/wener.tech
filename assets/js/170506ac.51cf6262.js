"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17470],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var l=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,k=c["".concat(u,".").concat(g)]||c[g]||s[g]||n;return a?l.createElement(k,i(i({ref:t},m),{},{components:a})):l.createElement(k,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24652:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var l=a(96600),r=a(27279),n=(a(59496),a(49613)),i=["components"],o={title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},u=void 0,p={unversionedId:"languages/go/lib/go-lib-faq",id:"languages/go/lib/go-lib-faq",title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",description:"chi vs gorilla mux",source:"@site/notes/languages/go/lib/go-lib-faq.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/go-lib-faq",permalink:"/notes/languages/go/lib/go-lib-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/go-lib-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"go-kit",permalink:"/notes/languages/go/lib/go-kit"},next:{title:"go-micro",permalink:"/notes/languages/go/lib/go-micro"}},m={},s=[{value:"chi vs gorilla mux",id:"chi-vs-gorilla-mux",level:2},{value:"graphql-go/graphql vs 99designs/gqlgen",id:"graphql-gographql-vs-99designsgqlgen",level:2},{value:"urfave vs cobra",id:"urfave-vs-cobra",level:2},{value:"go-micro vs micro",id:"go-micro-vs-micro",level:2},{value:"go-micro vs go-kit vs gizmo",id:"go-micro-vs-go-kit-vs-gizmo",level:2},{value:"yaml.v2 vs yaml.v3",id:"yamlv2-vs-yamlv3",level:2},{value:"pq: unsupported sslmode &quot;prefer&quot;",id:"pq-unsupported-sslmode-prefer",level:2}],c={toc:s};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"chi-vs-gorilla-mux"},"chi vs gorilla mux"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b interface - \u66f4\u6613\u4e8e\u6a21\u5757\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u66f4\u52a0\u76f4\u89c2\u6e05\u6670"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u66f4\u6d3b\u8dc3"),(0,n.kt)("li",{parentName:"ul"},"\u5339\u914d\u903b\u8f91\u6027\u80fd\u66f4\u597d")),(0,n.kt)("h2",{id:"graphql-gographql-vs-99designsgqlgen"},"graphql-go/graphql vs 99designs/gqlgen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code First vs Schema First"),(0,n.kt)("li",{parentName:"ul"},"Reflection vs Hard Code",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u900f\u660e\u4ee3\u7801 vs \u900f\u660e\u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u903b\u8f91 vs \u72ec\u7acb\u903b\u8f91",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u903b\u8f91\u53ef\u52a8\u6001\u8c03\u6574"),(0,n.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u903b\u8f91\u66f4\u6613\u4e8e\u505a\u7279\u6b8a Case"))),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5c11 vs \u4ee3\u7801\u591a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5c11 - \u9009\u62e9\u624b\u5199"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u591a - \u9009\u62e9\u751f\u6210")))))),(0,n.kt)("p",null,"\u5982\u4f55\u9009\u62e9\u548c\u51b3\u5b9a\u66f4\u591a\u8fd8\u8981\u770b\u6570\u636e\u5c42\u7684\u5b9e\u73b0\u903b\u8f91\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u6570\u636e\u5c42\u4e5f\u6709\u5f88\u597d\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u90a3\u4e48 GraphQL Schema \u4e5f\u53ef\u4ee5\u751f\u6210\uff0c\u5904\u7406\u7684\u903b\u8f91\u4ee3\u7801\u4e5f\u53ef\u4ee5\u751f\u6210\uff0c\u5982\u4f55\u9009\u62e9\u5c31\u4f1a\u66f4\u52a0\u7075\u6d3b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 gorm \u914d\u5408 graphql-go/graphql",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u90fd\u57fa\u4e8e\u53cd\u5c04"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u751f\u6210\u5173\u7cfb - \u52a8\u6001"))),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ent \u914d\u5408 99designs/gqlgen",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u90fd\u57fa\u4e8e\u751f\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u524d\u751f\u6210 schema \u548c\u5904\u7406\u903b\u8f91 - \u9759\u6001")))),(0,n.kt)("h2",{id:"urfave-vs-cobra"},"urfave vs cobra"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"urfave",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u504f\u6846\u67b6\u6027\u8d28"),(0,n.kt)("li",{parentName:"ul"},"opinionated"))),(0,n.kt)("li",{parentName:"ul"},"cobra",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5de5\u5177\u96c6 - \u66f4\u52a0\u7075\u6d3b"),(0,n.kt)("li",{parentName:"ul"},"pflag \u5904\u7406 flag, viper \u5904\u7406\u914d\u7f6e")))),(0,n.kt)("h2",{id:"go-micro-vs-micro"},"go-micro vs micro"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u4f5c\u8005"),(0,n.kt)("li",{parentName:"ul"},"\u5148\u6709 go-micro \u518d\u6709 micro")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro"},"asim/go-micro"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0"),(0,n.kt)("li",{parentName:"ul"},"library - \u9762\u5411\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1 - RPC, \u4e8b\u4ef6\u9a71\u52a8"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c Spring for Java \u548c Rails for Ruby \u89d2\u8272"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/micro/micro"},"micro"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"License \u4e25\u683c -> Apache-2.0"),(0,n.kt)("li",{parentName:"ul"},"CLI-based cloud native development framework - sane defaults with a pluggable architecture"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CLI \u5feb\u901f\u63d0\u4f9b go-micro \u6240\u9700\u7684\u5e73\u53f0\u670d\u52a1 - dashboard, API gateway"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.infoq.com/podcasts/microservices-go-micro-paas3/"},"Asim Aslam on Microservices, go-micro, and PaaS 3.0"))))),(0,n.kt)("h2",{id:"go-micro-vs-go-kit-vs-gizmo"},"go-micro vs go-kit vs gizmo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go-micro",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u5de5\u5177\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u601d\u8def\u4e00\u81f4"))),(0,n.kt)("li",{parentName:"ul"},"go-kit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u5de5\u5177\u96c6"),(0,n.kt)("li",{parentName:"ul"},"\u611f\u89c9\u662f\u5f88\u591a\u79bb\u6563\u62bd\u8c61\u7684\u96c6\u5408"))),(0,n.kt)("li",{parentName:"ul"},"gizmo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u6d3b\u8dc3\u4e0d\u5efa\u8bae\u4f7f\u7528"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/cloud-native-the-gathering/5b396058c5b2"},"https://medium.com/cloud-native-the-gathering/5b396058c5b2"))))),(0,n.kt)("h2",{id:"yamlv2-vs-yamlv3"},"yaml.v2 vs yaml.v3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"yaml.v2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"yaml 1.1 spec"),(0,n.kt)("li",{parentName:"ul"},"off/on/yes/no \u90fd\u4f1a\u89e3\u6790\u6210 bool"))),(0,n.kt)("li",{parentName:"ul"},"yaml.v3 - \u63a8\u8350",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"yaml 1.2 spec",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"anchors & aliases"),(0,n.kt)("li",{parentName:"ul"},"8 \u8fdb\u5236"))),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6709 true/false \u89e3\u6790\u6210 bool"),(0,n.kt)("li",{parentName:"ul"},"AST \u5305\u542b Comment"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 indentation - \u9ed8\u8ba4 4 space"),(0,n.kt)("li",{parentName:"ul"},"time.Duration \u62d2\u7edd\u7eaf int"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ubuntu.com/blog/api-v3-of-the-yaml-package-for-go-is-available"},"https://ubuntu.com/blog/api-v3-of-the-yaml-package-for-go-is-available")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/spf13/viper/issues/942"},"https://github.com/spf13/viper/issues/942"))))),(0,n.kt)("h2",{id:"pq-unsupported-sslmode-prefer"},'pq: unsupported sslmode "prefer"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'pq: unsupported sslmode "prefer"; only "require" (default), "verify-full", "verify-ca", and "disable" supported\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jackc/pgx"},"jackc/pgx")," \u4e0d\u8981\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lib/pq"},"lib/pq"))))}g.isMDXComponent=!0}}]);