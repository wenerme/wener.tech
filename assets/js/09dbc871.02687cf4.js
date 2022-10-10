"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79724],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(a),h=n,w=u["".concat(p,".").concat(h)]||u[h]||s[h]||o;return a?r.createElement(w,l(l({ref:t},c),{},{components:a})):r.createElement(w,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58184:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return u},metadata:function(){return w},toc:function(){return d}});var r=a(49613),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&c(e,a,t[a]);return e};const u={title:"OLAP Database Awesome"},h="OLAP Database Awesome",w={unversionedId:"db/db-olap-awesome",id:"db/db-olap-awesome",title:"OLAP Database Awesome",description:"Database",source:"@site/../notes/db/db-olap-awesome.md",sourceDirName:"db",slug:"/db/olap-awesome",permalink:"/notes/db/olap-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/db-olap-awesome.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1630662479,formattedLastUpdatedAt:"Sep 3, 2021",frontMatter:{title:"OLAP Database Awesome"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u672f\u8bed",permalink:"/notes/db/glossary"},next:{title:"Schema Design",permalink:"/notes/db/design-schema"}},f={},d=[{value:"Database",id:"database",level:2},{value:"BI and Analytics",id:"bi-and-analytics",level:2},{value:"Integration",id:"integration",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],k={toc:d};function b(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},k),c),o(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"olap-database-awesome"}),"OLAP Database Awesome"),(0,r.kt)("h2",s({},{id:"database"}),"Database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"clickhouse"),(0,r.kt)("li",{parentName:"ul"},"kylin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/trinodb/trino"}),"trinodb/trino"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://trino.io/blog/2020/12/27/announcing-trino.html"}),"\u4e4b\u524d\u7684 presto")))),(0,r.kt)("li",{parentName:"ul"},"greenplum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/pinot"}),"apache/pinot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/prestodb/presto"}),"prestodb/presto"),"\ndistributed SQL query engine")),(0,r.kt)("h2",s({},{id:"bi-and-analytics"}),"BI and Analytics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BEE - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://bee.insightstrategy.cz/en/index.html"}),"http://bee.insightstrategy.cz/en/index.html")),(0,r.kt)("li",{parentName:"ul"},"BIRT - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.eclipse.org/birt"}),"http://www.eclipse.org/birt")),(0,r.kt)("li",{parentName:"ul"},"JasperSoft \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.jaspersoft.com"}),"http://www.jaspersoft.com")),(0,r.kt)("li",{parentName:"ul"},"MarvelIT - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.marvelit.com/dash.html"}),"http://www.marvelit.com/dash.html")),(0,r.kt)("li",{parentName:"ul"},"OpenI \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://openi.sourceforge.net"}),"http://openi.sourceforge.net")),(0,r.kt)("li",{parentName:"ul"},"OpenReports \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://oreports.com"}),"http://oreports.com")),(0,r.kt)("li",{parentName:"ul"},"Orange - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.ailab.si/orange"}),"http://www.ailab.si/orange")),(0,r.kt)("li",{parentName:"ul"},"Palo \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.palo.net"}),"http://www.palo.net")),(0,r.kt)("li",{parentName:"ul"},"Pentaho - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.pentaho.com"}),"http://www.pentaho.com")),(0,r.kt)("li",{parentName:"ul"},"R - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.r-project.org"}),"http://www.r-project.org")),(0,r.kt)("li",{parentName:"ul"},"SpagoBI \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://spagobi.eng.it"}),"http://spagobi.eng.it")),(0,r.kt)("li",{parentName:"ul"},"Weka - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.cs.waikato.ac.nz/~ml/index.html"}),"http://www.cs.waikato.ac.nz/~ml/index.html")),(0,r.kt)("li",{parentName:"ul"},"VitalSigns - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://vitalsigns.sourceforge.net/"}),"http://vitalsigns.sourceforge.net/"))),(0,r.kt)("h2",s({},{id:"integration"}),"Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apatar - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.apatar.com"}),"http://www.apatar.com")),(0,r.kt)("li",{parentName:"ul"},"CloverETL - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://cloveretl.berlios.de/"}),"http://cloveretl.berlios.de/")),(0,r.kt)("li",{parentName:"ul"},"JitterBit - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.jitterbit.com/"}),"http://www.jitterbit.com/")),(0,r.kt)("li",{parentName:"ul"},"KETL - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.ketl.org"}),"http://www.ketl.org")),(0,r.kt)("li",{parentName:"ul"},"Octopus - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.enhydra.org/tech/octopus/index.html"}),"http://www.enhydra.org/tech/octopus/index.html")),(0,r.kt)("li",{parentName:"ul"},"OSDQ - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://sourceforge.net/projects/dataquality"}),"http://sourceforge.net/projects/dataquality")),(0,r.kt)("li",{parentName:"ul"},"Pentaho - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.pentaho.com"}),"http://www.pentaho.com")),(0,r.kt)("li",{parentName:"ul"},"Red Hat \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.redhat.com"}),"http://www.redhat.com")),(0,r.kt)("li",{parentName:"ul"},"Saga.M31 Galaxy - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://galaxy.sagadc.com"}),"http://galaxy.sagadc.com")),(0,r.kt)("li",{parentName:"ul"},"Talend - ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.talend.com"}),"http://www.talend.com")),(0,r.kt)("li",{parentName:"ul"},"SnapLogic \u2013 ",(0,r.kt)("a",s({parentName:"li"},{href:"http://www.snaplogic.com"}),"http://www.snaplogic.com"))),(0,r.kt)("h2",s({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://stackoverflow.com/a/3350180/1870054"}),"https://stackoverflow.com/a/3350180/1870054")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.wherescape.com/blog/building-a-data-warehouse/"}),"Building a Data Warehouse"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Understand the Data Sources"),(0,r.kt)("li",{parentName:"ol"},"Compare the Data"),(0,r.kt)("li",{parentName:"ol"},"Modify the Data Warehouse Model"),(0,r.kt)("li",{parentName:"ol"},"Test Performance"),(0,r.kt)("li",{parentName:"ol"},"Rinse and Repeat")))))}b.isMDXComponent=!0}}]);