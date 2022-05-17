"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35670],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(a),c=n,d=s["".concat(o,".").concat(c)]||s[c]||k[c]||l;return a?r.createElement(d,u(u({ref:t},m),{},{components:a})):r.createElement(d,u({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var p=2;p<l;p++)u[p]=a[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},67165:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),u=["components"],i={title:"Quarkus"},o=void 0,p={unversionedId:"java/library/quarkus",id:"java/library/quarkus",title:"Quarkus",description:"- Quarkus - Kubernetes Native Java stack tailored for GraalVM & OpenJDK HotSpot",source:"@site/notes/java/library/quarkus.md",sourceDirName:"java/library",slug:"/java/library/quarkus",permalink:"/notes/java/library/quarkus",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/library/quarkus.md",tags:[],version:"current",frontMatter:{title:"Quarkus"},sidebar:"docs",previous:{title:"\u751f\u4ea7\u529b",permalink:"/notes/java/library/productive"},next:{title:"Maven",permalink:"/notes/java/maven"}},m={},k=[{value:"quarkus-maven-plugin",id:"quarkus-maven-plugin",level:2}],s={toc:k};function c(e){var t=e.components,a=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://quarkus.io/"},"Quarkus")," - Kubernetes Native Java stack tailored for GraalVM & OpenJDK HotSpot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://code.quarkus.io/"},"code.quarkus.io")," \u9879\u76ee\u751f\u6210\uff0c\u7c7b\u4f3c\u4e8e spring \u7684 start"),(0,l.kt)("li",{parentName:"ul"},"RedHat \u56e2\u961f - \u4f9d\u8d56\u7684\u4e3b\u8981\u662f RH \u76f8\u5173\u7684\u4e2d\u95f4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u4f18\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u542f\u52a8"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u5c11"),(0,l.kt)("li",{parentName:"ul"},"quarkus-maven-plugin \u5bf9\u5f00\u53d1\u53cb\u597d"),(0,l.kt)("li",{parentName:"ul"},"cdi+resteasy = 20mb \u4e8c\u8fdb\u5236"))),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u4f9d\u8d56",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"quarkus arc - CDI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u975e\u53cd\u5c04 - \u56e0\u4e3a Graalvm \u4e0d\u652f\u6301\u5927\u90e8\u5206\u53cd\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u90e8\u7f72\u65f6\u751f\u6210\u5143\u6570\u636e\u7c7b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"META-INF/jandex.idx"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*.zig")," - Jvm IR"),(0,l.kt)("li",{parentName:"ul"},"quarkus.index-dependency \u914d\u7f6e\u9879"))))),(0,l.kt)("li",{parentName:"ul"},"Substrate VM"),(0,l.kt)("li",{parentName:"ul"},"undertow - \u9ed8\u8ba4 servlet \u5bb9\u5668"),(0,l.kt)("li",{parentName:"ul"},"resteasy - jaxrs \u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"quarkus-hibernate-orm-panache - \u7c7b\u4f3c\u4e8e ActiveRecord \u7684\u6269\u5c55"),(0,l.kt)("li",{parentName:"ul"},"MicroProfile - \u5fae\u670d\u52a1\u76f8\u5173\u80fd\u529b")))),(0,l.kt)("h2",{id:"quarkus-maven-plugin"},"quarkus-maven-plugin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:add-extension"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6269\u5c55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:add-extensions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6269\u5c55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:analyze-call-tree"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u6790\u8c03\u7528\u6811")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:build"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6784\u5efa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:create"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u9879\u76ee\uff0c\u751f\u6210\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:create-extension"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6269\u5c55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:dev"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u5f00\u53d1\u670d\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:generate-config"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u793a\u4f8b\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:help"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e2e\u52a9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:list-extensions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u6269\u5c55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:native-image"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6784\u5efa\u672c\u5730\u955c\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mvn quarkus:remote-dev"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdc\u7a0b\u5f00\u53d1")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u5f00\u53d1\u670d\u52a1\nmvn compile quarkus:dev\n\n# \u6784\u5efa native \u955c\u50cf\nmvn package -Pnative\n# \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e GRAALVM_HOME \u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\nGRAALVM_HOME=~/jdk/graalvm/Contents/Home/ mvn package -Pnative\n# \u5982\u679c\u5931\u8d25\uff0c\u5c1d\u8bd5\u5b89\u88c5 native-image\n\n\n# \u521b\u5efa\u9879\u76ee\nmvn io.quarkus:quarkus-maven-plugin:0.22.0:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=application-lifecycle-events \\\n    -DclassName="org.acme.events.GreetingResource" \\\n    -Dpath="/hello"\n')))}c.isMDXComponent=!0}}]);