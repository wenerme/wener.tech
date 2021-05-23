(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(g,i(i({ref:t},u),{},{components:n})):a.a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1021)),l={title:"GORM"},i={unversionedId:"languages/go/gorm",id:"languages/go/gorm",isDocsHomePage:!1,title:"GORM",description:"* \u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664 \u9ed8\u8ba4\u5728\u4e8b\u52a1\u4e2d\u6267\u884c",source:"@site/notes/languages/go/gorm.md",slug:"/languages/go/gorm",permalink:"/notes/languages/go/gorm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/gorm.md",version:"current",sidebar:"docs",previous:{title:"Go2",permalink:"/notes/languages/go/go2"},next:{title:"entgo",permalink:"/notes/languages/go/lib/ent"}},c=[{value:"\u94a9\u5b50",id:"\u94a9\u5b50",children:[]},{value:"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5",id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5",children:[]},{value:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",children:[]},{value:"\u591a\u6001",id:"\u591a\u6001",children:[]},{value:"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664 \u9ed8\u8ba4\u5728\u4e8b\u52a1\u4e2d\u6267\u884c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"SkipDefaultTransaction \u53ef\u5173\u95ed - \u7ea6 30% \u6027\u80fd"))),Object(o.b)("li",{parentName:"ul"},"Tag \u4e0d\u533a\u5206\u5927\u5c0f\u5199")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'// \u67e5\u8be2\u6761\u4ef6\u4e0e\u6570\u636e\u4e0d\u540c\u4f46\u53ef\u4ee5\u4e00\u6b21\u64cd\u4f5c\ndb.Where(User{Name: "non_existing"}).Assign(User{Age: 20}).FirstOrCreate(&user)\n')),Object(o.b)("h2",{id:"\u94a9\u5b50"},"\u94a9\u5b50"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"BeforeSave"),Object(o.b)("li",{parentName:"ul"},"BeforeCreate/BeforeUpdate"),Object(o.b)("li",{parentName:"ul"},"AfterCreate/AfterUpdate"),Object(o.b)("li",{parentName:"ul"},"AfterSave"))),Object(o.b)("li",{parentName:"ul"},"\u5220\u9664",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"BeforeDelete"),Object(o.b)("li",{parentName:"ul"},"AfterDelete"))),Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"AfterFind")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'// \u64cd\u4f5c\u5f53\u524d\u7684 Statement \u53ef\u4fee\u6539\u8bed\u53e5\nfunc (u *User) BeforeCreate(tx *gorm.DB) error {\n  // \u901a\u8fc7 tx.Statement \u4fee\u6539\u5f53\u524d\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\n  tx.Statement.Select("Name", "Age")\n  tx.Statement.AddClause(clause.OnConflict{DoNothing: true})\n\n  // tx \u662f\u5e26\u6709 `NewDB` \u9009\u9879\u7684\u65b0\u4f1a\u8bdd\u6a21\u5f0f\n  // \u57fa\u4e8e tx \u7684\u64cd\u4f5c\u4f1a\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u4f46\u4e0d\u4f1a\u5e26\u4e0a\u4efb\u4f55\u5f53\u524d\u7684\u6761\u4ef6\n  err := tx.First(&role, "name = ?", user.Role).Error\n  // SELECT * FROM roles WHERE name = "admin"\n  // ...\n  return err\n}\n')),Object(o.b)("h2",{id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5"},"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"stmt := db.Session(&gorm.Session{DryRun: true}).First(&user, 1).Statement\nstmt.SQL.String() //=> SELECT * FROM `users` WHERE `id` = $1 ORDER BY `id`\nstmt.Vars         //=> []interface{}{1}\n\n// \u53ef\u751f\u6210\u5b8c\u6574 SQL - \u4e0d\u8981\u7528\u4e8e\u67e5\u8be2\uff0c\u6709 SQL \u6ce8\u5165\u98ce\u9669\ndb.Dialector.Explain(stmt.SQL.String(), stmt.Vars...)\n")),Object(o.b)("h2",{id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406"},"\u8df3\u56de\u94a9\u5b50\u5904\u7406"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"db.Session(&gorm.Session{SkipHooks: true}).Create(&user)\n")),Object(o.b)("h2",{id:"\u591a\u6001"},"\u591a\u6001"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u591a\u6001\u503c\u4e3a\u8868\u540d")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Cat struct {\n  ID    int\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  ID   int\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n}\n')),Object(o.b)("h2",{id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"},"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Model struct {\n  ID    int\n  UID   string // uuid\n}\ntype Cat struct {\n  Model\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  Model\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n  OwnerUID string\n}\n')))}s.isMDXComponent=!0}}]);