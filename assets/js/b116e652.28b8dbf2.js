"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10605],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,g=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},941:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return c}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&p(t,n,e[n]);if(m)for(var n of m(e))u.call(e,n)&&p(t,n,e[n]);return t};const k={title:"GORM"},s=void 0,g={unversionedId:"languages/go/lib/gorm",id:"languages/go/lib/gorm",title:"GORM",description:"gorm",source:"@site/../notes/languages/go/lib/gorm.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/gorm",permalink:"/notes/languages/go/lib/gorm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/gorm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"GORM"},sidebar:"docs",previous:{title:"goreleaser",permalink:"/notes/languages/go/lib/goreleaser"},next:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"}},N={},c=[{value:"gorm",id:"gorm",level:2},{value:"Model",id:"model",level:2},{value:"\u94a9\u5b50",id:"\u94a9\u5b50",level:2},{value:"Upsert",id:"upsert",level:2},{value:"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5",id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5",level:2},{value:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",level:2},{value:"\u591a\u6001",id:"\u591a\u6001",level:2},{value:"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",level:2},{value:"\u6dfb\u52a0 SQL \u51fd\u6570 \u9ed8\u8ba4\u503c",id:"\u6dfb\u52a0-sql-\u51fd\u6570-\u9ed8\u8ba4\u503c",level:2},{value:"\u907f\u514d\u63d2\u5165\u7a7a\u503c",id:"\u907f\u514d\u63d2\u5165\u7a7a\u503c",level:2}],y={toc:c};function f(t){var e,n=t,{components:r}=n,p=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},y),p),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"gorm"}),"gorm"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Golang \u7684 ORM \u5b9e\u73b0\n\u57fa\u4e8e Entity \u6a21\u578b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/go-gorm/gorm"}),"go-gorm/gorm")),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u8fc7\u7a0b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6784\u5efa Statement \u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2 - \u6267\u884c query \u56de\u8c03"))),(0,a.kt)("li",{parentName:"ul"},"\u51e0\u4e4e\u6240\u6709\u5b9e\u9645\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7 callback \u4e32\u8054\u8d77\u6765\u7684"),(0,a.kt)("li",{parentName:"ul"},"callbacks \u7ba1\u7406 processor \u7ec4"),(0,a.kt)("li",{parentName:"ul"},"processor \u4e0b\u6709\u5b9e\u9645\u56de\u8c03\u5904\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u56de\u8c03 \u64cd\u4f5c Statement \u4e0a\u5173\u8054\u7684\u503c\u5bf9\u8c61\u8fdb\u884c\u67e5\u8be2\u4fee\u6539",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"func(db *gorm.DB)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db.Statement.ReflectValue")," - \u7ed3\u679c\u6570\u636e"))),(0,a.kt)("li",{parentName:"ul"},"\u5165\u53e3 processor - \u8c03\u7528\u540e\u5f00\u59cb\u5b9e\u9645\u6267\u884c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"create",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gorm:begin_transaction"),(0,a.kt)("li",{parentName:"ul"},"gorm:before_create"),(0,a.kt)("li",{parentName:"ul"},"gorm:save_before_associations"),(0,a.kt)("li",{parentName:"ul"},"gorm:create"),(0,a.kt)("li",{parentName:"ul"},"gorm:save_after_associations"),(0,a.kt)("li",{parentName:"ul"},"gorm:after_create"),(0,a.kt)("li",{parentName:"ul"},"gorm:commit_or_rollback_transaction"))),(0,a.kt)("li",{parentName:"ul"},"query",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gorm:query"),(0,a.kt)("li",{parentName:"ul"},"gorm:preload"),(0,a.kt)("li",{parentName:"ul"},"gorm:after_query"))),(0,a.kt)("li",{parentName:"ul"},"update",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0e create \u7c7b\u4f3c"),(0,a.kt)("li",{parentName:"ul"},"gorm:setup_reflect_value - \u5728 begin_transaction \u540e"))),(0,a.kt)("li",{parentName:"ul"},"delete",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gorm:begin_transaction"),(0,a.kt)("li",{parentName:"ul"},"gorm:before_delete"),(0,a.kt)("li",{parentName:"ul"},"gorm:delete_before_associations"),(0,a.kt)("li",{parentName:"ul"},"gorm:delete"),(0,a.kt)("li",{parentName:"ul"},"gorm:after_delete"),(0,a.kt)("li",{parentName:"ul"},"gorm:commit_or_rollback_transaction"))),(0,a.kt)("li",{parentName:"ul"},"row",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gorm:row"))),(0,a.kt)("li",{parentName:"ul"},"raw",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gorm:raw"))))),(0,a.kt)("li",{parentName:"ul"},"RegisterDefaultCallbacks - \u9ed8\u8ba4 callback \u6ce8\u518c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u80fd\u770b\u5f97\u51fa\u6765\u6267\u884c\u8fc7\u7a0b"))),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb - Relationship",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u5173\u8054"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u64cd\u4f5c\u53ef\u9009 - ",(0,a.kt)("inlineCode",{parentName:"li"},"Select(clause.Associations)")," ",(0,a.kt)("inlineCode",{parentName:"li"},'Select("Profile")')),(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u9488\u5bf9\u5173\u8054\u8fdb\u884c\u64cd\u4f5c - ",(0,a.kt)("inlineCode",{parentName:"li"},'Association("Profile")')),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u5904\u7406\u65b9\u5f0f\u5206\u4e3a JoinTable \u548c Reference"))),(0,a.kt)("li",{parentName:"ul"},"gorm:preload",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u591a\u5c42\u7ea7 Preload \u4f1a\u6309\u5e8f - \u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},'Preload("Profile.Address")')," \u4f1a\u5206\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"Profile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Profile.Address")," \u4e24\u6b21\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5173\u7cfb\u4e0d\u5b58\u5728\uff0c\u627e\u4e0d\u5230 Relationship \u76ee\u524d\u4f1a NPE"))),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u6784\u5efa",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clause.Expression{ Build(Builder) }")," - \u8868\u793a\u4efb\u610f\u8bed\u53e5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clause.Builder")," - WriteString, AddVar, WriteQuoted - \u6784\u5efa\u4e0a\u4e0b\u6587"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clause.Interface")," - \u5e26 Name \u7684 \u8868\u8fbe\u5f0f - \u53ef\u4ee5\u88ab\u5408\u5e76\u548c\u66ff\u6362 - \u4f8b\u5982 LIMIT, SELECT"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clause.Table"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"clause.Column")))),(0,a.kt)("li",{parentName:"ul"},"Relationship \u5173\u8054\u7684 Schema \u53ef\u80fd\u548c\u5b9e\u9645 Schema \u4e0d\u540c - \u5bfc\u81f4\u65e0\u6cd5 Preload"),(0,a.kt)("li",{parentName:"ul"},"Embed Struct \u4e5f\u662f\u5f53\u4f5c embedded \u6765\u5904\u7406\u7684\uff0c\u53ea\u4e0d\u8fc7\u6ca1\u6709\u524d\u7f00",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u73b0\u5728\u5d4c\u5957\u591a\u5c42\u89e3\u6790\u7684 schema \u4f1a\u6709\u95ee\u9898 - ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/go-gorm/gorm/issues/3964"}),"#3964")))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/pilagod/gorm-cursor-paginator"}),"pilagod/gorm-cursor-paginator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/go-gorm/datatypes"}),"go-gorm/datatypes")," - gorm.io/datatypes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u5176\u4ed6\u6570\u636e\u7c7b\u578b - \u4f8b\u5982 JSON")))))),(0,a.kt)("admonition",d({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u5b57\u6bb5\u8bbe\u7f6e\u4e3a default:null",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"OnConflict UpdateAll \u4e0d\u4f1a\u5904\u7406"),(0,a.kt)("li",{parentName:"ul"},"Null \u65e0\u6cd5\u88ab\u8bfb\u53d6\u4e3a \u975e Ptr \u6216 \u975e sql.Null"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"tag"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"mean"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"e.g."))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"column:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5217\u540d"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"type:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"size:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"primaryKey"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"unique"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"default:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"precision:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"scale:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"not null"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"autoIncrement"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"autoIncrementIncrement:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u81ea\u589e\u6b65\u957f"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"embedded"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"embeddedPrefix:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"autoCreateTime:nano/milli"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"autoUpdateTime:nano/milli"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"uniqueIndex"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"check:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"<-"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u53ef\u6743\u9650: create,update,false"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'gorm:"<-:create"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"->"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8bfb\u6743\u9650"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'gorm:"->:false"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5ffd\u7565\u5b57\u6bb5"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"comment:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"foreignKey:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u5efa\u540d\u5b57 - \u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"td"},"{ForeignModel}ID")),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"references:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u88ab\u5173\u8054\u5bf9\u8c61\u5b57\u6bb5"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"polymorphic:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"polymorphicValue:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"many2many:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"join table"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"joinForeignKey:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"joinReferences:"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"constraint:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"OnUpdate,OnDelete"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"'))))),(0,a.kt)("admonition",d({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Tag \u4e0d\u5206\u5927\u5c0f\u5199"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"index",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"unique"),(0,a.kt)("li",{parentName:"ul"},"priority"),(0,a.kt)("li",{parentName:"ul"},"class, type, where, comment, expression, sort, collate, option"),(0,a.kt)("li",{parentName:"ul"},"composite"))),(0,a.kt)("li",{parentName:"ul"},"uniqueIndex")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go",metastring:'title="\u7279\u6b8a\u503c"',title:'"\u7279\u6b8a\u503c"'}),'const (\n    PrimaryKey   string = "~~~py~~~" // primary key\n    CurrentTable string = "~~~ct~~~" // current table\n    Associations string = "~~~as~~~" // associations\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'// \u76f4\u63a5\u8c03\u7528 processor\nfunc TestPreloadOnly(t *testing.T){\n  // \u6a21\u578b\u53ea\u5305\u542b\u4e3b\u952e\n  var m models.User\n  m.ID = 1\n  // \u901a\u5e38\u903b\u8f91 - \u4f46\u6784\u9020\u51fa\u6765\u7684 stmt \u5305\u542b\u57fa\u7840\u4fe1\u606f\n  stmt := db.Model(&m).Preload("Profile")\n  // \u586b\u5145\u9700\u8981\u7684\u4fe1\u606f - \u6b63\u5e38\u903b\u8f91\u8fd9\u4e9b\u5b57\u6bb5\u4f1a\u88ab\u586b\u5145\n  stmt.Statement.Dest = stmt.Statement.Model\n  stmt.Statement.ReflectValue = reflect.ValueOf(stmt.Statement.Dest).Elem()\n  assert.NoError(t, stmt.Statement.Parse(stmt.Statement.Model))\n\n  // \u76f4\u63a5\u8c03\u7528 preload\n  callbacks.Preload(stmt)\n  assert.NoError(t, stmt.Error)\n\n  // \u5b57\u6bb5\u88ab\u6210\u529f preload\n  fmt.Println(m.Profile)\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664 \u9ed8\u8ba4\u5728\u4e8b\u52a1\u4e2d\u6267\u884c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SkipDefaultTransaction \u53ef\u5173\u95ed - \u7ea6 30% \u6027\u80fd"))),(0,a.kt)("li",{parentName:"ul"},"Tag \u4e0d\u533a\u5206\u5927\u5c0f\u5199")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'// \u67e5\u8be2\u6761\u4ef6\u4e0e\u6570\u636e\u4e0d\u540c\u4f46\u53ef\u4ee5\u4e00\u6b21\u64cd\u4f5c\ndb.Where(User{Name: "non_existing"}).Assign(User{Age: 20}).FirstOrCreate(&user)\n')),(0,a.kt)("h2",d({},{id:"model"}),"Model"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'import (\n  "github.com/google/uuid"\n  "github.com/lib/pq"\n)\n\ntype Post struct {\n  ID     uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`\n  Title  string\n  Tags   pq.StringArray `gorm:"type:text[]"` // \u9700\u8981\u6307\u5b9a\u7c7b\u578b\n}\n')),(0,a.kt)("h2",d({},{id:"\u94a9\u5b50"}),"\u94a9\u5b50"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BeforeSave"),(0,a.kt)("li",{parentName:"ul"},"BeforeCreate/BeforeUpdate"),(0,a.kt)("li",{parentName:"ul"},"AfterCreate/AfterUpdate"),(0,a.kt)("li",{parentName:"ul"},"AfterSave"))),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BeforeDelete"),(0,a.kt)("li",{parentName:"ul"},"AfterDelete"))),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AfterFind")))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'// \u64cd\u4f5c\u5f53\u524d\u7684 Statement \u53ef\u4fee\u6539\u8bed\u53e5\nfunc (u *User) BeforeCreate(tx *gorm.DB) error {\n  // \u901a\u8fc7 tx.Statement \u4fee\u6539\u5f53\u524d\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\n  tx.Statement.Select("Name", "Age")\n  tx.Statement.AddClause(clause.OnConflict{DoNothing: true})\n\n  // tx \u662f\u5e26\u6709 `NewDB` \u9009\u9879\u7684\u65b0\u4f1a\u8bdd\u6a21\u5f0f\n  // \u57fa\u4e8e tx \u7684\u64cd\u4f5c\u4f1a\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u4f46\u4e0d\u4f1a\u5e26\u4e0a\u4efb\u4f55\u5f53\u524d\u7684\u6761\u4ef6\n  err := tx.First(&role, "name = ?", user.Role).Error\n  // SELECT * FROM roles WHERE name = "admin"\n  // ...\n  return err\n}\n')),(0,a.kt)("h2",d({},{id:"upsert"}),"Upsert"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'// \u66f4\u65b0\u90e8\u5206\u5b57\u6bb5\ndb.Clauses(clause.OnConflict{\n  Columns:   []clause.Column{{Name: "id"}},\n  DoUpdates: clause.AssignmentColumns([]string{"name", "age"}),\n}).Create(&users)\n\n// \u4ece\u65b0\u6620\u5c04\ndb.Clauses(clause.OnConflict{\n  Columns:   []clause.Column{{Name: "id"}},\n  DoUpdates: clause.Assignments(map[string]interface{}{\n    "role": "user"\uff0c\n    "count": gorm.Expr("GREATEST(count, VALUES(count))"),\n  }),\n}).Create(&users)\n\n// \u66f4\u65b0\u6240\u6709\ndb.Clauses(clause.OnConflict{\n  Columns:   []clause.Column{{Name: "id"}},\n  UpdateAll: true,\n}).Create(&users)\n')),(0,a.kt)("h2",d({},{id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5"}),"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),"stmt := db.Session(&gorm.Session{DryRun: true}).First(&user, 1).Statement\nstmt.SQL.String() //=> SELECT * FROM `users` WHERE `id` = $1 ORDER BY `id`\nstmt.Vars         //=> []interface{}{1}\n\n// \u53ef\u751f\u6210\u5b8c\u6574 SQL - \u4e0d\u8981\u7528\u4e8e\u67e5\u8be2\uff0c\u6709 SQL \u6ce8\u5165\u98ce\u9669\ndb.Dialector.Explain(stmt.SQL.String(), stmt.Vars...)\n")),(0,a.kt)("h2",d({},{id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406"}),"\u8df3\u56de\u94a9\u5b50\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),"db.Session(&gorm.Session{SkipHooks: true}).Create(&user)\n")),(0,a.kt)("h2",d({},{id:"\u591a\u6001"}),"\u591a\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u591a\u6001\u503c\u4e3a\u8868\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'type Cat struct {\n  ID    int\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  ID   int\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n}\n')),(0,a.kt)("h2",d({},{id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"}),"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'type Model struct {\n  ID    int\n  UID   string // uuid\n}\ntype Cat struct {\n  Model\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  Model\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n  OwnerUID string\n}\n')),(0,a.kt)("h2",d({},{id:"\u6dfb\u52a0-sql-\u51fd\u6570-\u9ed8\u8ba4\u503c"}),"\u6dfb\u52a0 SQL \u51fd\u6570 \u9ed8\u8ba4\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'type User struct {\n    ID          int       `sql:"DEFAULT:myfunction"`\n    XID         int       `sql:"type:bigint; DEFAULT:id_generator()"`\n    CreatedAt   time.Time `sql:"DEFAULT:current_timestamp"`\n}\n')),(0,a.kt)("h2",d({},{id:"\u907f\u514d\u63d2\u5165\u7a7a\u503c"}),"\u907f\u514d\u63d2\u5165\u7a7a\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-go"}),'type User struct {\n    gorm.Model\n    Email  string    `gorm:"unique;not null;type:varchar(100);default:null"`\n}\n')))}f.isMDXComponent=!0}}]);