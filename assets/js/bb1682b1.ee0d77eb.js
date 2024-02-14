/*! For license information please see bb1682b1.ee0d77eb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78136],{65148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var i=t(2488),r=t(62780);const c={sidebar_title:"Internal"},s="Git Internal",l={id:"service/forge/git/git-internal",title:"Git Internal",description:"| str    | object type   | number |",source:"@site/../notes/service/forge/git/git-internal.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/internal",permalink:"/notes/service/forge/git/internal",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/git/git-internal.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1665107861,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{sidebar_title:"Internal"},sidebar:"docs",previous:{title:"Git Hook",permalink:"/notes/service/forge/git/hook"},next:{title:"git-secret",permalink:"/notes/service/forge/git/secret"}},d={},o=[{value:"sha256",id:"sha256",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"git-internal",children:"Git Internal"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"str"}),(0,i.jsx)(n.th,{children:"object type"}),(0,i.jsx)(n.th,{children:"number"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"commit"}),(0,i.jsx)(n.td,{children:"OBJ_COMMIT"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tree"}),(0,i.jsx)(n.td,{children:"OBJ_TREE"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"OBJ_BLOB"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tag"}),(0,i.jsx)(n.td,{children:"OBJ_TAG"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"OBJ_OFS_DELTA"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"OBJ_REF_DELTA"}),(0,i.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain",children:"Git Internals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Git-Internals-Git-Objects",children:"Git Objects"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'echo -n hello | git hash-object --stdin\n# blob <size>\\0\nprintf \'blob 5\\0hello\' | sha1sum\nCONTENTS=hello sh -c \'printf "blob ${#CONTENTS}\\0$CONTENTS"\' | sha1sum\n\necho -n hello > /tmp/hello\nfile=/tmp/hello\n(\n  stat --printf="blob %s\\0" "$file"\n  cat "$file"\n) | sha1sum\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[".git\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HEAD"}),"\n",(0,i.jsx)(n.li,{children:"config"}),"\n",(0,i.jsx)(n.li,{children:"description"}),"\n",(0,i.jsx)(n.li,{children:"hooks/"}),"\n",(0,i.jsx)(n.li,{children:"info/"}),"\n",(0,i.jsxs)(n.li,{children:["objects/\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"info/"}),"\n",(0,i.jsxs)(n.li,{children:["pack/ - ",(0,i.jsx)(n.a,{href:"https://git-scm.com/docs/gitformat-pack",children:"Git pack format"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pack-.{pack,idx}"}),"\n",(0,i.jsx)(n.li,{children:"pack-.rev"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pack-*.mtimes"})}),"\n",(0,i.jsx)(n.li,{children:"multi-pack-index"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"refs/"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#\ngit init /tmp/git\ncd /tmp/git\necho -n hello | git hash-object -w --stdin\nfind .git/objects -type f\nfile .git/objects/b6/fc4c620b67d95f953a5c1c1230aaab5db5a1b0 # zlib compressed data\ngit cat-file -p b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0\ngit cat-file -t b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0 # blob\n\necho -n hello > hello.txt\ngit add hello.txt\ngit commit -m 'hello.txt'\n\ngit cat-file -p master^{tree} # hello.txt\nfind .git/objects -type f\ngit cat-file -t 04df07b08ca746b3167d0f1d1514e2f39a52c16c # tree\ngit cat-file -p 04df07b08ca746b3167d0f1d1514e2f39a52c16c\n# 100644 blob b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0    hello.txt\ngit cat-file -t d7ca319a50ed5fb97583cc0ef251d19b503caa6d # commit\ngit cat-file -p d7ca319a50ed5fb97583cc0ef251d19b503caa6d\n# author wener <email> 1665103472 +0800\n# committer wener <email> 1665103472 +0800\n# gpgsig\n#\n# hello.txt\n\ngit write-tree\ngit update-index --cacheinfo 100644 $(git hash-object hello.txt) hello.txt\n\necho new > new.txt\ngit update-index --add new.txt\ngit write-tree\n\ngit cat-file -p $(git write-tree)\n\ngit read-tree --prefix=bak $(git write-tree)\n\necho 'commit' | git commit-tree $(git write-tree)\ngit cat-file -p dc1eb3\n\necho 'Second commit' | git commit-tree $(git write-tree) -p dc1eb3\ngit cat-file -p 8989b5\ngit log --stat 8989b5\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sha256",children:"sha256"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:"[core]\n\trepositoryFormatVersion = 1\n[extensions]\n\tobjectFormat = sha256\n\tcompatObjectFormat = sha1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/docs/hash-function-transition/",children:"https://git-scm.com/docs/hash-function-transition/"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},38088:(e,n,t)=>{var i=t(96651),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var i,c={},o=null,a=null;for(i in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,i)&&!d.hasOwnProperty(i)&&(c[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===c[i]&&(c[i]=n[i]);return{$$typeof:r,type:e,key:o,ref:a,props:c,_owner:l.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var i=t(96651);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);