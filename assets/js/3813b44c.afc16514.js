"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68268],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,v=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),l=["components"],o={id:"hibernate-enver",title:"Hibernate Enver"},s="Hibernate Enver",p={unversionedId:"java/library/hibernate-enver",id:"java/library/hibernate-enver",title:"Hibernate Enver",description:"Tips",source:"@site/../notes/java/library/hibernate-enver.md",sourceDirName:"java/library",slug:"/java/library/hibernate-enver",permalink:"/notes/java/library/hibernate-enver",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/java/library/hibernate-enver.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"hibernate-enver",title:"Hibernate Enver"},sidebar:"docs",previous:{title:"Hazelcast",permalink:"/notes/java/library/hazelcast"},next:{title:"Hibernate",permalink:"/notes/java/library/hibernate-orm"}},u={},d=[{value:"Tips",id:"tips",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"TODO",id:"todo",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hibernate-enver"},"Hibernate Enver"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://hibernate.org/orm/envers/"},"Hibernate ORM Envers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#envers"},"Hibernate User Guide Envers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"spring-data/envers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e3b\u8981\u529f\u80fd"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u64cd\u4f5c\u8bb0\u5f55\u4fee\u6539\u524d\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8bb0\u5f55\u540e\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8bb0\u5f55\u4fee\u6539\u7684\u5b9e\u4f53\u540d\u5b57"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8bb0\u5f55\u4fee\u6539\u7684\u5b57\u6bb5"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u5728\u4fee\u6539\u4fe1\u606f\u4e0a\u9644\u52a0\u81ea\u5b9a\u4e49\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@OneToMany")," \u53ef\u4ee5\u8bb0\u5f55\u4fee\u6539\u5230\u4e2d\u95f4\u8868",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@AuditMappedBy")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FAQ"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542f\u4e86 revend, \u5982\u679c\u662f\u4fee\u6539\u64cd\u4f5c, \u627e\u4e0d\u5230\u4e0a\u6b21\u8bb0\u5f55, \u4f1a\u5f02\u5e38"),(0,i.kt)("li",{parentName:"ul"},"SpringData \u7684 Enver \u65e0\u6cd5\u548c QueryDSL \u5171\u7528, \u9700\u8981\u91cd\u5199\u5f88\u591a\u4e1c\u897f")))),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6d89\u53ca\u7684\u8868"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_AUD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REVINFO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACKING_REVINFO")),(0,i.kt)("li",{parentName:"ul"},"\u5217 ",(0,i.kt)("inlineCode",{parentName:"li"},"_MOD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REVCHANGES")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"org.hibernate.envers.configuration.EnversSettings")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u5ba1\u8ba1\u8868\u524d\u7f00\norg.hibernate.envers.audit_table_prefix=\n# \u5ba1\u8ba1\u8868\u540e\u7f00\norg.hibernate.envers.audit_table_suffix=_AUD\n\n# \u4fee\u6b63\u5b57\u6bb5\u540d\norg.hibernate.envers.revision_field_name=REV\n# \u4fee\u6b63\u7c7b\u578b\u5b57\u6bb5\u540d 0,1,2 -> add,mod,del\norg.hibernate.envers.revision_type_field_name=REVTYPE\n\norg.hibernate.envers.revision_on_collection_change=true\n# \u4e0d\u8bb0\u5f55 @Version \u5b57\u6bb5\norg.hibernate.envers.do_not_audit_optimistic_locking_field=true\n# \u662f\u5426\u5728\u5220\u9664\u65f6\u8bb0\u5f55\u503c, \u9ed8\u8ba4\u53ea\u8bb0\u5f55\u4e00\u6761\u5220\u9664, \u6240\u6709\u5c5e\u6027\u4e3a null\norg.hibernate.envers.store_data_at_delete=false\n\norg.hibernate.envers.default_schema=\norg.hibernate.envers.default_catalog=\n\n# \u5ba1\u8ba1\u7b56\u7565\n# org.hibernate.envers.strategy.ValidityAuditStrategy \u4f1a\u8bb0\u5f55\u4fee\u6539\u524d\u548c\u4fee\u6539\u540e\u7684\u4fe1\u606f\norg.hibernate.envers.audit_strategy=org.hibernate.envers.strategy.DefaultAuditStrategy\n\n# ===================================================\n# org.hibernate.envers.strategy.ValidityAuditStrategy\n# ===================================================\n# \u4fee\u6539\u540e\u7684\u72b6\u6001\u4fee\u6b63\u8bb0\u5f55\norg.hibernate.envers.audit_strategy_validity_end_rev_field_name=REVEND\n# \u4fee\u6539\u540e\u7684\u65f6\u95f4\u6233\u662f\u5426\u8bb0\u5f55\n# \u8bb0\u5f55\u4fbf\u4e8e\u5206\u8868\u548c\u6e05\u9664\u65e7\u6570\u636e\norg.hibernate.envers.audit_strategy_validity_store_revend_timestamp=false\n# \u4fee\u6539\u540e\u7684\u65f6\u95f4\u6233\u5b57\u6bb5\u540d\norg.hibernate.envers.audit_strategy_validity_revend_timestamp_field_name=REVEND_TSTMP\n\n# \u5b9a\u4e49\u4fee\u6b63\u7248\u672c\u53f7\u7684\u751f\u6210\u65b9\u5f0f, \u9ed8\u8ba4\u7531\u6570\u636e\u5e93\u751f\u6210\n# \u5bf9\u4e8e PG, \u4f1a\u4f7f\u7528 sequence, \u4f7f\u7528 IDENTITY \u9700\u8981\u4fee\u6539\n# \u5982\u679c\u4e3a false \u5219\u4f7f\u7528  org.hibernate.envers.enhanced.SequenceIdRevisionEntity\n#   \u7531 org.hibernate.id.enhanced.SequenceStyleGenerator \u751f\u6210\norg.hibernate.envers.use_revision_entity_with_native_id=true\n\n# \u662f\u5426\u8bb0\u5f55\u6bcf\u6b21\u4fee\u6539\u7684\u5b9e\u4f53\u7c7b\u578b\n# \u5b58\u50a8\u5728\u8868 REVCHANGES(rev reference REVINFO(rev),name)\norg.hibernate.envers.track_entities_changed_in_revision=false\n\n# \u5c5e\u6027\u4fee\u6539\u4fe1\u606f\u662f\u5426\u8bb0\u5f55\n# \u4f1a\u8bb0\u5f55\u5728 <\u5c5e\u6027>_MOD BOOLEAN \u5b57\u6bb5\norg.hibernate.envers.global_with_modified_flag=false\n# \u5c5e\u6027\u4fee\u6539\u5b57\u6bb5\u540d\u540e\u7f00\norg.hibernate.envers.modified_flag_suffix=_MOD\n# \u8bb0\u5f55\u5d4c\u5165\u5143\u7d20\u7684\u4fee\u6539\u987a\u5e8f\u5b57\u6bb5\u540d\norg.hibernate.envers.embeddable_set_ordinal_field_name=SETORDINAL\n\n\norg.hibernate.envers.cascade_delete_revision=false\norg.hibernate.envers.allow_identifier_reuse=false\n# Specifies the composite-id key property name used by the audit table mappings.\norg.hibernate.envers.original_id_prop_name=originalId\n")),(0,i.kt)("h2",{id:"todo"},"TODO"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://javers.org/"},"https://javers.org/"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/javers/javers"},"https://github.com/javers/javers")),(0,i.kt)("p",null,"@Audited\n@javax.persistence.OrderColumn\n@CollectionId\nAuditJoinTable\nAuditMappedBy"))}c.isMDXComponent=!0}}]);