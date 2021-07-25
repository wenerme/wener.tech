(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(1169)),i={id:"nexus",title:"Nexus"},s={unversionedId:"service/repository/nexus",id:"service/repository/nexus",isDocsHomePage:!1,title:"Nexus",description:"- Release-Notes",source:"@site/notes/service/repository/nexus.md",slug:"/service/repository/nexus",permalink:"/notes/service/repository/nexus",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/repository/nexus.md",version:"current",sidebar:"docs",previous:{title:"athens",permalink:"/notes/service/repository/athens"},next:{title:"Awesome Repository",permalink:"/notes/service/repository/repository-awesome"}},p=[],c={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://support.sonatype.com/hc/en-us/sections/203012688-Release-Notes"},"Release-Notes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://issues.sonatype.org/browse/NEXUS-10471"},"NEXUS-10471")," - \u90e8\u7f72\u5230 group \u4ed3\u5e93",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/54590014/1870054"},"Nginx \u53cd\u5411\u4ee3\u7406")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://help.sonatype.com/repomanager3/formats/go-repositories"},"Go Repositories"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://guides.sonatype.com/repo3/technical-guides/go-dependencies-nxrm3/"},"Guide")))),Object(o.b)("li",{parentName:"ul"},"\u5f00\u53d1\u96c6\u6210",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$URL/swagger-ui/")," Swagger \u754c\u9762"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://help.sonatype.com/repomanager3/installation/system-requirements"},"\u7cfb\u7edf\u8981\u6c42"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u74f6\u9888\u662f IO, Java \u5e94\u7528 \u5c3d\u91cf\u786e\u4fdd\u5185\u5b58\u8db3\u591f"),Object(o.b)("li",{parentName:"ul"},"4 Core 8 G"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://community.sonatype.com/t/creating-repositories-groups-etc-via-rest-api-in-nexus-3/814/3"},"\u521b\u5efa\u4ed3\u5e93\u53ea\u80fd\u662f Groovy \u811a\u672c - \u53ef\u901a\u8fc7 REST \u4e0a\u4f20"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/sonatype-nexus-community/nexus-scripting-examples/tree/master/simple-shell-example"},"simple-shell-example")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/41450338"},"Trying to use REST API to create repositories in sonatype Nexus")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://help.sonatype.com/repomanager3/rest-and-integration-api/repositories-api"},"\u4ed3\u5e93\u63a5\u53e3"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u73af\u5883\u53d8\u91cf\u65b9\u5f0f\nexport GOPROXY=https://gonexus.dev\n# \u914d\u7f6e\u65b9\u5f0f\ngo env -w GOPROXY=https://gonexus.dev,direct\n")))}l.isMDXComponent=!0},1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,O=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(O,s(s({ref:t},c),{},{components:r})):a.a.createElement(O,s({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);