"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14421],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=i(r),f=a,b=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(b,u(u({ref:t},c),{},{components:r})):n.createElement(b,u({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67528:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,u(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const b={title:"Pulsar"},d="Pulsar",k={unversionedId:"queue/pulsar",id:"queue/pulsar",title:"Pulsar",description:"- apache/pulsar",source:"@site/../notes/queue/pulsar.md",sourceDirName:"queue",slug:"/queue/pulsar",permalink:"/notes/queue/pulsar",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/pulsar.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"Pulsar"},sidebar:"docs",previous:{title:"nsc",permalink:"/notes/queue/nats/nsc"},next:{title:"Queue Awesome",permalink:"/notes/queue/awesome"}},y={},h=[{value:"Kubernetes",id:"kubernetes",level:2}],v={toc:h},O="wrapper";function g(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,m(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"pulsar"}),"Pulsar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/pulsar"}),"apache/pulsar"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u7b97\u5206\u79bb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/bookkeeper"}),"apache/bookkeeper")),(0,n.kt)("li",{parentName:"ul"},"Broker \u65e0\u72b6\u6001")))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# standalone \u6a21\u5f0f\ndocker run --rm -it \\\n  -p 6650:6650 -p 8080:8080 \\\n  -v $PWD/data:/pulsar/data \\\n  -v $PWD/conf:/pulsar/conf \\\n  --name pulsar apachepulsar/pulsar:3.0.0 bin/pulsar standalone\n\n# \u7ba1\u7406\u63a5\u53e3\n# https://pulsar.apache.org/docs/3.0.x/admin-api-overview/\ncurl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats\n")),(0,n.kt)("h2",s({},{id:"kubernetes"}),"Kubernetes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/pulsar-helm-chart"}),"apache/pulsar-helm-chart")),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"zookeeper"),(0,n.kt)("li",{parentName:"ul"},"bookkeeper"),(0,n.kt)("li",{parentName:"ul"},"autorecovery - for bookkeeper"),(0,n.kt)("li",{parentName:"ul"},"broker"),(0,n.kt)("li",{parentName:"ul"},"functions"),(0,n.kt)("li",{parentName:"ul"},"proxy"),(0,n.kt)("li",{parentName:"ul"},"toolset"),(0,n.kt)("li",{parentName:"ul"},"pulsar_manager"))),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all"))))}g.isMDXComponent=!0}}]);