"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86788],{49613:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return w}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),w=a,b=u["".concat(i,".").concat(w)]||u[w]||p[w]||o;return t?n.createElement(b,c(c({ref:r},m),{},{components:t})):n.createElement(b,c({ref:r},m))}));function w(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50044:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return i},default:function(){return w},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=t(96600),a=t(27279),o=(t(59496),t(49613)),c=["components"],l={title:"crawlab"},i="crawlab",s={unversionedId:"service/data/crawler/crawlab",id:"service/data/crawler/crawlab",title:"crawlab",description:"- crawlab-team/crawlab \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/data/crawler/crawlab.md",sourceDirName:"service/data/crawler",slug:"/service/data/crawler/crawlab",permalink:"/notes/service/data/crawler/crawlab",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/data/crawler/crawlab.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"crawlab"},sidebar:"docs",previous:{title:"archivebox",permalink:"/notes/service/data/crawler/archivebox"},next:{title:"Crawler FAQ",permalink:"/notes/service/data/crawler/crawler-faq"}},m={},p=[],u={toc:p};function w(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crawlab"},"crawlab"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/crawlab-team/crawlab"},"crawlab-team/crawlab")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u722c\u866b\u7ba1\u7406\u5e73\u53f0"),(0,o.kt)("li",{parentName:"ul"},"BSD-3, Go+Vue"),(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 MongoDB 3.6+"),(0,o.kt)("li",{parentName:"ul"},"\u533a\u5206 Master \u548c Worker \u89d2\u8272"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SeaweeFS \u63d0\u4f9b\u5b58\u50a8\u540c\u6b65")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# master \u5305\u542b\u4e86 nginx, backend, frontend, seaweedfs\ncat <<YAML > docker-compose.yml\nversion: \'3.3\'\nservices:\n  master:\n    image: crawlabteam/crawlab:latest\n    container_name: crawlab_example_master\n    environment:\n      CRAWLAB_NODE_MASTER: "Y"\n      CRAWLAB_MONGO_HOST: "mongo"\n    volumes:\n      - "./.crawlab/master:/root/.crawlab"\n    ports:\n      - "8080:8080"\n    depends_on:\n      - mongo\n\n  worker01:\n    image: crawlabteam/crawlab:latest\n    container_name: crawlab_example_worker01\n    environment:\n      CRAWLAB_NODE_MASTER: "N"\n      CRAWLAB_GRPC_ADDRESS: "master"\n      CRAWLAB_FS_FILER_URL: "http://master:8080/api/filer"\n    volumes:\n      - "./.crawlab/worker01:/root/.crawlab"\n    depends_on:\n      - master\n\n  worker02:\n    image: crawlabteam/crawlab:latest\n    container_name: crawlab_example_worker02\n    environment:\n      CRAWLAB_NODE_MASTER: "N"\n      CRAWLAB_GRPC_ADDRESS: "master"\n      CRAWLAB_FS_FILER_URL: "http://master:8080/api/filer"\n    volumes:\n      - "./.crawlab/worker02:/root/.crawlab"\n    depends_on:\n      - master\n\n  mongo:\n    image: mongo:latest\n    container_name: crawlab_example_mongo\n    restart: always\nYAML\ndocker-compose up\n')))}w.isMDXComponent=!0}}]);