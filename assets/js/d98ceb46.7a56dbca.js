"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66079],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={title:"Schema Design",tags:["Design"]},m="Schema Design",f={unversionedId:"db/design-schema",id:"db/design-schema",title:"Schema Design",description:"\u4e3b\u952e",source:"@site/../notes/db/design-schema.md",sourceDirName:"db",slug:"/db/design-schema",permalink:"/notes/db/design-schema",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/design-schema.md",tags:[{label:"Design",permalink:"/notes/tags/design"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"Schema Design",tags:["Design"]},sidebar:"docs",previous:{title:"OLAP Database Awesome",permalink:"/notes/db/olap-awesome"},next:{title:"CouchDB",permalink:"/notes/db/document/couchdb"}},b={},k=[{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:2},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",level:2},{value:"created_at vs create_time",id:"created_at-vs-create_time",level:2}],g={toc:k};function N(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},g),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"schema-design"}),"Schema Design"),(0,r.kt)("h2",s({},{id:"\u4e3b\u952e"}),"\u4e3b\u952e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"/notes/db/ulid"}),"ULID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u5e8f - \u53ef\u4ee5\u7528\u4e8e\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u8bbf\u95ee\u66f4\u5bb9\u6613\u547d\u4e2d\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5b58\u50a8\u4e3a string"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u989d\u5916\u7684 function"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4e00\u5b9a\u80fd\u4fdd\u8bc1\u5168\u5c40\u9012\u589e - \u56e0\u4e3a\u9700\u8981\u7ef4\u62a4\u5168\u5c40\u72b6\u6001"))))),(0,r.kt)("li",{parentName:"ul"},"UUIDv4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"128bit - \u7f16\u7801\u540e 36 \u5b57\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u968f\u673a"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u652f\u6301 UUID \u7c7b\u578b\u7684\u8bdd\u80fd\u4f7f\u7528\u66f4\u5c11\u7a7a\u95f4 -"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/ai/nanoid"}),"NanoID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e0d\u76f4\u63a5\u7528\u4e8e DB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A-Za-z0-9_-")),(0,r.kt)("li",{parentName:"ul"},"26 bytes")))),(0,r.kt)("h2",s({},{id:"\u5143\u6570\u636e"}),"\u5143\u6570\u636e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u4e0d\u8981\u7528\u4e8e\u4e1a\u52a1\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u521b\u5efa\u6a21\u677f\u8868\u7136\u540e CREATE TABLE LIKE"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"create table tpl_res\n(\n    -- \u57fa\u7840\n    id                  text        not null default gen_ulid(),\n    tid                 bigint      not null default current_tenant_id(), -- \u79df\u6237\n    uid                 uuid        not null default gen_random_uuid(),\n    sid                 bigint      not null default (next_res_sid('tpl_pri_resources')),\n    created_at          timestamptz not null default current_timestamp,\n    updated_at          timestamptz not null default current_timestamp,\n    deleted_at          timestamptz,\n    -- auditor \u4fe1\u606f\n    created_by_id       text                 default current_setting('app.user.id'),\n    updated_by_id       text                 default current_setting('app.user.id'),\n    deleted_by_id       text,\n    -- \u6309\u9700\u9644\u52a0\u4efb\u610f\u5c42\u9762\u7684\u6570\u636e\n    -- \u4f8b\u5982: attributes \u5141\u8bb8\u5ba2\u6237\u7aef\u4fee\u6539, properties \u4e0d\u5141\u8bb8\u5ba2\u6237\u7aef\u4fee\u6539, extensions \u5ba2\u6237\u7aef\u4e0d\u53ef\u89c1\n    extensions          jsonb,\n    properties          jsonb,\n    attributes          jsonb,\n    -- \u4e1a\u52a1 owner \u4fe1\u606f\n    owner_id            text,\n    owner_type          text,\n    owner_uid           uuid,\n    owner_user_id       text,\n    owner_team_id       text,\n    owner_department_id text,\n    primary key (tid, id),\n    unique (tid, sid),\n    unique (tid, uid)\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id \u53ef\u6309\u7167\u4e1a\u52a1\u903b\u8f91\u751f\u6210 - \u4f8b\u5982: ",(0,r.kt)("inlineCode",{parentName:"li"},"<tid>-<\u8d44\u6e90\u540d\u79f0>-UUID/ULID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e GraphQL NodeID"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e AIP \u7684 resource-name"))),(0,r.kt)("li",{parentName:"ul"},"sid \u79df\u6237\u7ef4\u5ea6\u5355\u8c03\u9012\u589e - \u7528\u6237\u53cb\u597d"),(0,r.kt)("li",{parentName:"ul"},"owner \u903b\u8f91\u53d6\u51b3\u4e8e\u4e1a\u52a1 - \u4f8b\u5982: \u6743\u9650\uff0c\u5b64\u513f\u5bf9\u8c61\u5224\u65ad"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5143\u6570\u636e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"version - \u7528\u4e8e\u652f\u6301\u573a\u666f\u7684\u66f4\u65b0\u903b\u8f91 - \u4f8b\u5982: Hibernate")))),(0,r.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",s({},{id:"created_at-vs-create_time"}),"created_at vs create_time"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"created_at - \u63a8\u8350",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bed\u4e49 \u51c6\u786e"),(0,r.kt)("li",{parentName:"ul"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"created_by_id")," \u5f62\u5f0f\u4e0a\u7c7b\u4f3c"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528: Spring, Gorm \u9ed8\u8ba4"))),(0,r.kt)("li",{parentName:"ul"},"create_time",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528: AIP")))))}N.isMDXComponent=!0}}]);