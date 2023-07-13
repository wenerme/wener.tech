"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96017],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},37275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&c(e,r,t[r]);return e};const s={title:"Kafka"},d="Kafka",m={unversionedId:"queue/kafka/README",id:"queue/kafka/README",title:"Kafka",description:"- Apache Kafka",source:"@site/../notes/queue/kafka/README.md",sourceDirName:"queue/kafka",slug:"/queue/kafka/",permalink:"/notes/queue/kafka/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/kafka/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"Kafka"},sidebar:"docs",previous:{title:"EMQX",permalink:"/notes/queue/emqx"},next:{title:"mosquitto",permalink:"/notes/queue/mosquitto"}},k={},g=[{value:"Notes",id:"notes",level:2}],y={toc:g};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"kafka"}),"Kafka"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"http://kafka.apache.org/"}),"Apache Kafka"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A distributed streaming platform"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://cloud.spring.io/spring-cloud-bus/"}),"Spring Cloud BUS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"http://cloud.spring.io/spring-cloud-static/spring-cloud-bus/1.3.1.RELEASE/"}),"Reference")),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Spring Cloud Stream"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"http://cloud.spring.io/spring-cloud-stream/"}),"Spring Cloud Stream"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"http://docs.spring.io/spring-cloud-stream/docs/current/reference/htmlsingle/index.html"}),"Reference")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/yahoo/kafka-manager"}),"kafka manager"))),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-bus-kafka</artifactId>\n</dependency>\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-stream-binder-kafka</artifactId>\n</dependency>\n")),(0,n.kt)("h2",f({},{id:"notes"}),"Notes"))}b.isMDXComponent=!0}}]);