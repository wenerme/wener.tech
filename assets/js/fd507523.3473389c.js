/*! For license information please see fd507523.3473389c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23328],{51328:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var t=s(2488),r=s(62780);const d={title:"apk"},i="apk",l={id:"os/alpine/alpine-apk",title:"apk",description:"- alpine/apk-tools",source:"@site/../notes/os/alpine/alpine-apk.md",sourceDirName:"os/alpine",slug:"/os/alpine/apk",permalink:"/notes/os/alpine/apk",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-apk.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1692169664,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{title:"apk"},sidebar:"docs",previous:{title:"Alpine",permalink:"/notes/os/alpine/"},next:{title:"AlpineLinux Awesome",permalink:"/notes/os/alpine/awesome"}},c={},h=[{value:"Notes",id:"notes",level:2}];function x(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"apk",children:"apk"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://gitlab.alpinelinux.org/alpine/apk-tools",children:"alpine/apk-tools"})}),"\n",(0,t.jsxs)(e.li,{children:["github ",(0,t.jsx)(e.a,{href:"https://github.com/alpinelinux/apk-tools",children:"mirror"})]}),"\n",(0,t.jsxs)(e.li,{children:[".apk-new\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"apk \u5347\u7ea7\u5982\u679c\u68c0\u6d4b\u5230\u672c\u5730\u4fee\u6539\uff0c\u5219\u4f1a\u521b\u5efa apk-new \u6587\u4ef6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"apk info -r so:libgnutls.so.30.28.0\napk search cmd:blkid\napk version -l '!'\n\n# \u7248\u672c\u53f7\napk policy musl | sed '2!d' | sed 's/[^0-9a-z.-]//g'\n\n# 1.2.3-r4\ndocker run --rm -it wener/base sh -c 'apk update >/dev/null;apk policy musl | sed \"2!d\" | sed \"s/[^0-9a-z.-]//g\"'\n# 1.2.3\ndocker run --rm -it wener/base sh -c 'apk update >/dev/null;apk policy musl | sed \"2!d\" | sed \"s/[^0-9a-z.-]//g\"' | cut -d '-' -f 1\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"command"}),(0,t.jsx)(e.th,{children:"note"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add"}),(0,t.jsx)(e.td,{children:"\u5b89\u88c5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"del"}),(0,t.jsx)(e.td,{children:"\u5378\u8f7d"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fix"}),(0,t.jsx)(e.td,{children:"reinstall/upgrade - \u4e0d\u4fee\u6539 world"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"update"}),(0,t.jsx)(e.td,{children:"\u66f4\u65b0 index"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"upgrade"}),(0,t.jsx)(e.td,{children:"\u5347\u7ea7\u5305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cache"}),(0,t.jsx)(e.td,{children:"\u7f13\u5b58\u7ba1\u7406"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u67e5\u8be2"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"info"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"list"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dot"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"policy"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"search"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u4ed3\u5e93\u7ba1\u7406"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"index"}),(0,t.jsx)(e.td,{children:"\u521b\u5efa index"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fetch"}),(0,t.jsx)(e.td,{children:"\u4e0b\u8f7d pkg \u5230\u672c\u5730"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"manifest"}),(0,t.jsx)(e.td,{children:"\u5185\u5bb9 checksum"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"verify"}),(0,t.jsx)(e.td,{children:"\u6821\u9a8c\u5185\u5bb9\u548c\u7b7e\u540d"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u5176\u4ed6"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"audit"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"stats"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"version"}),(0,t.jsx)(e.td,{})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"flag"}),(0,t.jsx)(e.th,{children:"for"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u5168\u5c40"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-p, --root ROOTFS"}),(0,t.jsx)(e.td,{children:"/"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-X, --repository REPO"}),(0,t.jsx)(e.td,{children:"\u4fee\u6539\u4f7f\u7528\u7684\u4ed3\u5e93"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--allow-untrusted"}),(0,t.jsx)(e.td,{children:"\u5141\u8bb8\u4f7f\u7528\u672a\u7b7e\u540d\u7684\u5305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--arch ARCH"}),(0,t.jsx)(e.td,{children:"\u6307\u5b9a\u67b6\u6784"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--cache-dir CACHEDIR"}),(0,t.jsx)(e.td,{children:"\u6307\u5b9a\u7f13\u5b58\u76ee\u5f55 /etc/apk/cache"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--cache-max-age AGE"}),(0,t.jsx)(e.td,{children:"\u6307\u5b9a\u7f13\u5b58\u6700\u5927\u65f6\u95f4 min"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-U, --update-cache"}),(0,t.jsxs)(e.td,{children:["\u66f4\u65b0\u7f13\u5b58 -> ",(0,t.jsx)(e.code,{children:"--cache-max-age 1"})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--keys-dir KEYSDIR"}),(0,t.jsx)(e.td,{children:"\u6307\u5b9a\u5bc6\u94a5\u76ee\u5f55 /etc/apk/keys/"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--no-cache"}),(0,t.jsx)(e.td,{children:"\u4e0d\u4f7f\u7528\u7f13\u5b58"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--no-network"}),(0,t.jsx)(e.td,{children:"\u4e0d\u4f7f\u7528\u7f51\u7edc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--no-progress"}),(0,t.jsx)(e.td,{children:"\u4e0d\u663e\u793a\u8fdb\u5ea6"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--print-arch"}),(0,t.jsx)(e.td,{children:"\u6253\u5370\u67b6\u6784"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--purge"}),(0,t.jsx)(e.td,{children:"\u5378\u8f7d\u5305\u65f6\u5220\u9664\u914d\u7f6e"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--repositories-file REPOFILE"}),(0,t.jsx)(e.td,{children:"\u6307\u5b9a\u4ed3\u5e93\u6587\u4ef6 /etc/apk/repositories"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Commit"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-s, --simulate"}),(0,t.jsx)(e.td,{children:"\u6a21\u62df"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--clean-protected"}),(0,t.jsxs)(e.td,{children:["\u4e0d\u521b\u5efa ",(0,t.jsx)(e.code,{children:".apk-new"})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--no-scripts"}),(0,t.jsx)(e.td,{children:"\u4e0d\u6267\u884c\u811a\u672c"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--no-commit-hooks"}),(0,t.jsx)(e.td,{children:"\u4e0d\u6267\u884c commit hook"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"apk add"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--initdb"}),(0,t.jsx)(e.td,{children:"\u521d\u59cb\u5316\u6570\u636e\u5e93"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-l, --latest"}),(0,t.jsx)(e.td,{children:"\u4f7f\u7528\u6700\u65b0\u7248\u672c"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-u, --upgrade"}),(0,t.jsx)(e.td,{children:"\u5347\u7ea7\u5305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-t, --virtual NAME"}),(0,t.jsx)(e.td,{children:"\u5b89\u88c5\u865a\u62df\u5305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--no-chown"}),(0,t.jsx)(e.td,{children:"\u4e0d\u4fee\u6539\u6587\u4ef6\u6240\u6709\u8005"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"apk audit"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--backup"}),(0,t.jsx)(e.td,{children:"/etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--system"}),(0,t.jsx)(e.td,{children:"/"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--check-permissions"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--packages"}),(0,t.jsx)(e.td,{children:"\u53ea\u8f93\u51fa\u5305\u540d"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-r, --recursive"}),(0,t.jsx)(e.td,{children:"\u9012\u5f52\u76ee\u5f55"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"--packages -q"}),(0,t.jsx)(e.td,{children:"\u65e0\u7248\u672c\u53f7"})]})]})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"apk --print-arch  # x86_64\ncat /etc/apk/arch #\n\napk audit                               # \u7cfb\u7edf\u76ee\u524d\u53d8\u5316 - \u54ea\u4e9b\u589e\u52a0\u4e86\uff0c\u54ea\u4e9b\u5220\u9664\u4e86\napk audit --system                      #\napk audit --packages -q | xargs apk fix # \u4fee\u590d\u6709\u4fee\u6539\u7684\u5305\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["/etc/apk/repositories\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"http://"}),", ",(0,t.jsx)(e.code,{children:"https://"}),", ",(0,t.jsx)(e.code,{children:"ftp://"})]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"$repository/$arch/APKINDEX.tar.gz"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"$repository/$arch/$pkgname-$pkgver-r$pkgrel.apk"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"/etc/apk/world"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"apk_name_foreach_matching \u6838\u5fc3\u5339\u914d\u903b\u8f91"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"struct apk_hash_ops {\n\tptrdiff_t\tnode_offset;\n\tapk_blob_t\t  (*get_key)(apk_hash_item item);\n\tunsigned long\t(*hash_key)(apk_blob_t key);\n\tunsigned long\t(*hash_item)(apk_hash_item item);\n\tint\t\t        (*compare)(apk_blob_t itemkey, apk_blob_t key);// \u6bd4\u8f83\u5305\u540d\n\tint\t\t        (*compare_item)(apk_hash_item item, apk_blob_t key); // \u6bd4\u8f83\u5185\u5bb9\n\tvoid\t\t      (*delete_item)(apk_hash_item item);\n};\n\n// \u5305\u540d\u5b57\u5217\u8868\nstruct apk_hash {\n\tconst struct apk_hash_ops *ops;\n\tstruct apk_hash_array *buckets;\n\tint num_items;\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},38088:(n,e,s)=>{var t=s(96651),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var t,d={},h=null,x=null;for(t in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)i.call(e,t)&&!c.hasOwnProperty(t)&&(d[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===d[t]&&(d[t]=e[t]);return{$$typeof:r,type:n,key:h,ref:x,props:d,_owner:l.current}}e.Fragment=d,e.jsx=h,e.jsxs=h},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>l,M:()=>i});var t=s(96651);const r={},d=t.createContext(r);function i(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);