"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99358],{49613:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=m(a),N=l,c=s["".concat(u,".").concat(N)]||s[N]||k[N]||r;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},35146:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return N},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&o(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&o(t,a,e[a]);return t};const s={title:"SaaS"},N="SaaS",c={unversionedId:"dev/design/design-saas",id:"dev/design/design-saas",title:"SaaS",description:"Database",source:"@site/../notes/dev/design/design-saas.md",sourceDirName:"dev/design",slug:"/dev/design/saas",permalink:"/notes/dev/design/saas",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/design/design-saas.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688206885,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"SaaS"},sidebar:"docs",previous:{title:"Design Feature",permalink:"/notes/dev/design/feature"},next:{title:"Webhook \u8bbe\u8ba1",permalink:"/notes/dev/design/webhook"}},d={},f=[{value:"Database",id:"database",level:2},{value:"Tenant",id:"tenant",level:2},{value:"PostgreSQL",id:"postgresql",level:2}],g={toc:f};function h(t){var e,a=t,{components:l}=a,o=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},g),o),r(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"saas"}),"SaaS"),(0,n.kt)("h2",k({},{id:"database"}),"Database"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://sso.tax/"}),"https://sso.tax/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SSO Wall of Shame"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://www.citusdata.com/blog/2016/10/03/designing-your-saas-database-for-high-scalability/"}),"Designing a SaaS Database for Scale with Postgres"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=12649734"}),"HN")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://msdn.microsoft.com/en-us/library/aa479086.aspx"}),"Multi-Tenant Data Architecture")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/sql-database/sql-database-design-patterns-multi-tenancy-saas-applications"}),"Design patterns for multi-tenant SaaS applications and Azure SQL Database")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://www.slideshare.net/rcandidosilva/supporting-multitenancy-applications-with-java-ee"}),"JavaOne 2014 - Supporting Multi-tenancy Applications with Java EE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://saasaddict.walkme.com/saas-based-application-architecture-best-practices/"}),"SaaS Based Application Architecture \u2013 Best Practices"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Self Service & Personalization"),(0,n.kt)("li",{parentName:"ul"},"Multi-tenancy"),(0,n.kt)("li",{parentName:"ul"},"Integration",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u80fd\u4e0e\u5176\u4ed6\u5e94\u7528\u6216\u5e73\u53f0\u8fdb\u884c\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u53ef\u4ee5\u6709\u9884\u7f6e\u7684\u96c6\u6210"))),(0,n.kt)("li",{parentName:"ul"},"Operational Performance"),(0,n.kt)("li",{parentName:"ul"},"Security and Compliance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u9009\u62e9 SaaS \u5e73\u53f0\u7684\u9996\u8981\u8003\u8651"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7ed9\u7528\u6237\u66f4\u591a\u7684\u9009\u62e9\u5e76\u4e0d\u4ee3\u8868\u7528\u6237\u4e00\u5b9a\u4f1a\u9009\u62e9, \u4f46\u4f1a\u8ba9\u7528\u6237\u611f\u89c9\u6709\u9000\u8def"))),(0,n.kt)("li",{parentName:"ul"},"Why Multi-tenancy is Critical for the Success of SaaS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u79df\u6237\u662f\u5e73\u53f0\u6210\u529f\u7684\u5173\u952e"))),(0,n.kt)("li",{parentName:"ul"},"Design Considerations"),(0,n.kt)("li",{parentName:"ul"},"Security Considerations"),(0,n.kt)("li",{parentName:"ul"},"Scalability Considerations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Application Scalability"),(0,n.kt)("li",{parentName:"ul"},"Database Scalability"))),(0,n.kt)("li",{parentName:"ul"},"Monitoring"))),(0,n.kt)("li",{parentName:"ul"},"Salesforce",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://www.youtube.com/watch?v=jrKA3cJmoms"}),"Salesforce Multitenant Architecture: How We Do the Magic We Do")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://www.youtube.com/watch?v=jeysYua6ENs"}),"Understanding Multitenancy and the Architecture of the Salesforce Platform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://developer.salesforce.com/page/Multi_Tenant_Architecture"}),"The Force.com Multitenant Architecture")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://developer.salesforce.com/page/Architect_Core_Resources"}),"Architect Core Resources")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ISO/IEC_27001:2013"}),"ISO/IEC 27001:2013"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u5b89\u5168\u89c4\u8303"),(0,n.kt)("li",{parentName:"ul"},"Information technology \u2014 Security techniques \u2014 Information security management systems \u2014 Requirements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://tms.dingtalk.com/markets/dingtalk/dingtalksecurity"}),"\u9489\u9489\u5168\u9762\u5b89\u5168\u9632\u62a4")))),(0,n.kt)("li",{parentName:"ul"},"\u79df\u6237\u7ef4\u5ea6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 \u79df\u6237 -> 1 \u7269\u7406\u6570\u636e\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u9694\u79bb"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u5907\u4efd"),(0,n.kt)("li",{parentName:"ul"},"\u5907\u4efd\u6570\u636e\u66f4\u6709\u610f\u4e49"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u7684\u6570\u636e\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u7684\u8d1f\u8f7d\u548c\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u6c34\u5e73\u6269\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u76f4\u63a5\u8bbf\u95ee\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u7684\u8fc1\u79fb\u8def\u5f84",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u5e94\u7528\u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u6570\u636e\u7248\u672c"))),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u6258\u7ba1\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5229\u4e8e\u7edf\u8ba1\u5206\u6790",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u5c06\u6570\u636e\u4e8c\u6b21\u6c47\u603b"))),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u66f4\u591a\u7684\u8fd0\u7ef4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u91cf\u53d7\u9650"))))),(0,n.kt)("li",{parentName:"ul"},"1 \u79df\u6237 -> 1 \u903b\u8f91\u6570\u636e\u5e93 - Schema",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u5171\u4eab\u516c\u5171\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u5e93\u79df\u6237\u6570\u6709\u9650",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5907\u4efd\u6027\u80fd\u6709\u5f71\u54cd"))),(0,n.kt)("li",{parentName:"ul"},"\u540e\u671f\u53ef\u8003\u8651\u5bf9\u79df\u6237\u5206\u7247\u5230\u4e0d\u540c\u670d\u52a1\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4fdd\u8bc1 SLA"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u9274\u522b\u5bf9\u786c\u4ef6\u7684\u4f7f\u7528\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u5e76\u53d1\u91cf"))),(0,n.kt)("li",{parentName:"ul"},"N \u79df\u6237 -> 1 \u6570\u636e\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u6269\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u8fd0\u7ef4\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u7edf\u8ba1\u5206\u6790"),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5f00\u53d1\u76f8\u5bf9\u590d\u6742,\u6570\u636e\u98ce\u9669",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6280\u672f\u5c42\u9762\u5c4f\u853d\u79df\u6237\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u5f00\u53d1\u53ef\u8ba4\u4e3a\u662f\u4e00\u4e2a\u79df\u6237\u4e00\u4e2a\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u9519\u8bef\u4f1a\u53d1\u751f,\u90a3\u4e00\u5b9a\u4f1a\u53d1\u751f,\u9700\u8981\u4ece\u67b6\u6784\u5c42\u9762\u53bb\u907f\u514d"))))))),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7ef4\u5ea6\u6570\u636e\u6a21\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"N \u5e94\u7528 -> N \u6570\u636e\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49"),(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u5e94\u7528\u66f4\u65b0\u5347\u7ea7"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u9009\u62e9\u4e0d\u540c\u5e94\u7528\u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u5b9a\u5236\u5316"))),(0,n.kt)("li",{parentName:"ul"},"1 \u5e94\u7528 -> N \u6570\u636e\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u5171\u4eab\u4ee3\u7801, \u6613\u4e8e\u6269\u5c55\u548c\u5347\u7ea7\u5e94\u7528\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5347\u7ea7\u9700\u7ef4\u62a4\u8f83\u591a\u7684\u6570\u636e\u5e93"))),(0,n.kt)("li",{parentName:"ul"},"1 \u5e94\u7528 -> 1 \u6570\u636e\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55"))))),(0,n.kt)("li",{parentName:"ul"},"\u7efc\u5408\u7ef4\u5ea6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 \u79df\u6237 -> 1 \u5e94\u7528 -> 1 \u6570\u636e\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u9879\u76ee"))),(0,n.kt)("li",{parentName:"ul"},"N \u79df\u6237 -> 1 \u5e94\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"-> 1 \u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"-> N \u6570\u636e\u5e93"))),(0,n.kt)("li",{parentName:"ul"},"N \u79df\u6237 -> N \u5e94\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u5e94\u7528\u8fd8\u662f\u4ee5\u79df\u6237\u5212\u5206"),(0,n.kt)("li",{parentName:"ul"},"-> 1 \u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"-> N \u6570\u636e\u5e93"))))),(0,n.kt)("li",{parentName:"ul"},"\u8003\u8651\u56e0\u7d20",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b9a\u5236\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5b9a\u5236\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u6d41\u7a0b\u5b9a\u5236\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e94\u7528\u4f5c\u4e3a\u5e73\u53f0 vs \u4e00\u4e2a\u5e73\u53f0\u63d0\u4f9b\u591a\u4e2a\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"Licensing \u7279\u6027"))),(0,n.kt)("li",{parentName:"ul"},"\u8bef\u533a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9694\u79bb\u516c\u53f8\u6570\u636e\u548c\u5176\u4ed6\u79df\u6237\u6570\u636e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u80fd\u9694\u79bb, \u90a3\u4e48\u5176\u4ed6\u79df\u6237\u4e5f\u662f\u80fd\u591f\u9009\u62e9\u9694\u79bb"))),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u4f7f\u7528\u63a5\u53e3\u548c\u5176\u4ed6\u7528\u6237\u7684\u63a5\u53e3\u4e0d\u662f\u540c\u4e00\u5957\u63a5\u53e3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5b9a\u5236\u5316\u63a5\u53e3, \u90a3\u4e48\u5176\u4ed6\u79df\u6237\u4e5f\u662f\u5177\u6709\u5b9a\u5236\u5316\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u662f\u5e73\u53f0\u63a5\u53e3, \u90a3\u4e48\u662f\u4e0d\u5e94\u8be5\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://zh.wikipedia.org/zh-hans/Eating_your_own_dog_food"}),"Eating your own dog food")))))))),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u6743\u8861",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u79df\u6237\u9694\u79bb"),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u6d88\u8017"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u96be\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027"))),(0,n.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5546\u4e1a\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u6536\u8d39\u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u5730\u57df\u5206\u79bb"))),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6848",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5236\u5b9a\u5e73\u53f0\u53d1\u5c55\u7b56\u7565"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u5e73\u53f0\u7528\u6237\u8003\u8651\u53d1\u5c55\u7b56\u7565"),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u4ec0\u4e48\u662f\u5fc5\u7136\u7684")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u7b56\u7565")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7279\u6027"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u6570\u636e\u5e93\u5206\u79bb"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8868\u5206\u79bb"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5171\u4eab\u6570\u636e\u5e93"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6570\u636e\u5b9a\u5236\u5316"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5b89\u5168"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5185\u90e8\u4f9d\u8d56\u548c\u6027\u80fd"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u53ef\u6269\u5c55\u6a21\u578b"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Customer Onboarding"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Y")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Spring + Hibernate",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.jboss.org/hibernate/orm/4.2/devguide/en-US/html/ch16.html"}),"Hibernate Multi-tenancy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://anakiou.blogspot.hk/2015/08/multi-tenant-application-with-spring.html"}),"Multi-tenant application with Spring Boot + Spring Data JPA + Hibernate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u6570\u636e\u6e90"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://dzone.com/articles/spring-boot-hibernate-multitenancy-implementation"}),"Multi-Tenancy Implementation for Spring Boot + Hibernate Projects"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a Schema"))),(0,n.kt)("li",{parentName:"ul"},"AbstractDataSourceBasedMultiTenantConnectionProviderImpl"),(0,n.kt)("li",{parentName:"ul"},"MultiTenantConnectionProvider"),(0,n.kt)("li",{parentName:"ul"},"CurrentTenantIdentifierResolver")))),(0,n.kt)("h2",k({},{id:"tenant"}),"Tenant"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://cloud.google.com/identity-platform/docs/reference/rest/v2/projects.tenants"}),"https://cloud.google.com/identity-platform/docs/reference/rest/v2/projects.tenants"))),(0,n.kt)("h2",k({},{id:"postgresql"}),"PostgreSQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RLS"),(0,n.kt)("li",{parentName:"ul"},"Schema"),(0,n.kt)("li",{parentName:"ul"},"DB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tid="))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-sql"}),"CREATE POLICY tenant_isolation_policy ON student USING (tid = current_setting('auth.current_tenant_id')::int);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://fabian.ski/posts/nestjs-tenants/"}),"https://fabian.ski/posts/nestjs-tenants/"))))))}h.isMDXComponent=!0}}]);