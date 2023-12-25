/*! For license information please see 60a96308.47cc0aa8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68691],{85310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(11527),n=t(47214);const o={title:"PostgreSQL Upgrade"},l="PostgreSQL Upgrade",i={id:"db/relational/postgresql/postgresql-upgrade",title:"PostgreSQL Upgrade",description:"- pg_upgrade",source:"@site/../notes/db/relational/postgresql/postgresql-upgrade.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/upgrade",permalink:"/notes/db/relational/postgresql/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-upgrade.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"PostgreSQL Upgrade"},sidebar:"docs",previous:{title:"Trigger",permalink:"/notes/db/relational/postgresql/trigger"},next:{title:"PostgreSQL Vacuum",permalink:"/notes/db/relational/postgresql/vacuum"}},a={},d=[{value:"over docker",id:"over-docker",level:2},{value:"There seems to be a postmaster servicing the old cluster.",id:"there-seems-to-be-a-postmaster-servicing-the-old-cluster",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"postgresql-upgrade",children:"PostgreSQL Upgrade"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://www.postgresql.org/docs/current/pgupgrade.html",children:"pg_upgrade"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"-c,--check - \u53ea\u68c0\u6d4b"}),"\n",(0,s.jsx)(r.li,{children:"-k,--link - hard link, \u907f\u514d\u590d\u5236"}),"\n",(0,s.jsxs)(r.li,{children:["--clone - \u4f7f\u7528 reflinks - macOS APFS, Linux 4.5+ Btrfs XFS\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["zfs support --reflink ",(0,s.jsx)(r.a,{href:"https://github.com/openzfs/zfs/issues/405",children:"#405"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5347\u7ea7\u540e\u6ce8\u610f\u540c\u6b65 pg_hba.conf \u548c postgres.conf"}),"\n"]})}),"\n",(0,s.jsx)(r.h2,{id:"over-docker",children:"over docker"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/tianon/docker-postgres-upgrade",children:"tianon/docker-postgres-upgrade"})}),"\n",(0,s.jsxs)(r.li,{children:["/var/lib/postgresql\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"OLD/data"}),"\n",(0,s.jsx)(r.li,{children:"NEW/data"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"docker run --rm \\\n\t-v DIR:/var/lib/postgresql \\\n\ttianon/postgres-upgrade:OLD-to-NEW \\\n\t--link\n\ndocker run --rm \\\n\t-v PGDATAOLD:/var/lib/postgresql/OLD/data \\\n\t-v PGDATANEW:/var/lib/postgresql/NEW/data \\\n\ttianon/postgres-upgrade:OLD-to-NEW\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Optimizer statistics are not transferred by pg_upgrade so,\nonce you start the new server, consider running:\n    ./analyze_new_cluster.sh\n\nRunning this script will delete the old cluster's data files:\n    ./delete_old_cluster.sh\n"})}),"\n",(0,s.jsx)(r.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(r.h2,{id:"there-seems-to-be-a-postmaster-servicing-the-old-cluster",children:"There seems to be a postmaster servicing the old cluster."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"There seems to be a postmaster servicing the old cluster.\nPlease shutdown that postmaster and try again.\nFailure, exiting\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u65e7 server \u5f3a\u5236\u5173\u95ed\u5bfc\u81f4\u7684\u5f02\u5e38\u3002\n\u91cd\u542f\u670d\u52a1\uff0c\u7136\u540e ",(0,s.jsx)(r.code,{children:"pg_ctl stop"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"docker exec -it -u postgres postgres pg_ctl stop\n"})})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3354:(e,r,t)=>{var s=t(50959),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,o={},d=null,c=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,s)&&!a.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},11527:(e,r,t)=>{e.exports=t(3354)},47214:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>l});var s=t(50959);const n={},o=s.createContext(n);function l(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);