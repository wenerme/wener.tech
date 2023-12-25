/*! For license information please see 637aa0b0.6ba22e53.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12636],{31539:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=s(11527),r=s(47214);const l={title:"Keycloak Legacy"},c="Keycloak Legacy",d={id:"service/auth/keycloak/keycloak-legacy",title:"Keycloak Legacy",description:"- Keycloak 17+ \u4e3a Quakus, Docker \u542f\u52a8\u53d1\u751f\u53d8\u5316, \u5185\u90e8\u7ed3\u6784\u53d8\u5316",source:"@site/../notes/service/auth/keycloak/keycloak-legacy.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/legacy",permalink:"/notes/service/auth/keycloak/legacy",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/keycloak/keycloak-legacy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660724655,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{title:"Keycloak Legacy"},sidebar:"docs",previous:{title:"KeyCloak LDAP",permalink:"/notes/service/auth/keycloak/ldap"},next:{title:"keycloak-operator",permalink:"/notes/service/auth/keycloak/operator"}},a={},o=[{value:"Keycloak 16 vs Keycloak 17+",id:"keycloak-16-vs-keycloak-17",level:2},{value:"Keycloak &lt; 16 Docker",id:"keycloak--16-docker",level:2}];function i(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"keycloak-legacy",children:"Keycloak Legacy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keycloak 17+ \u4e3a Quakus, Docker \u542f\u52a8\u53d1\u751f\u53d8\u5316, \u5185\u90e8\u7ed3\u6784\u53d8\u5316"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keycloak-16-vs-keycloak-17",children:"Keycloak 16 vs Keycloak 17+"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DB_"})," -> ",(0,t.jsx)(n.code,{children:"KC_DB_"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/auth"})," -> ",(0,t.jsx)(n.code,{children:"/"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--http-relative-path /auth"})," \u6062\u590d\u4e3a\u4e4b\u524d\u914d\u7f6e"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.keycloak.org/migration/migrating-to-quarkus",children:"https://www.keycloak.org/migration/migrating-to-quarkus"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keycloak--16-docker",children:"Keycloak < 16 Docker"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"/opt/jboss/keycloak/themes - \u4e3b\u9898\u76ee\u5f55"}),"\n",(0,t.jsx)(n.li,{children:"/opt/jboss/keycloak/standalone/deployments - \u81ea\u5b9a\u4e49 provider \u76ee\u5f55"}),"\n",(0,t.jsx)(n.li,{children:"/opt/jboss/startup-scripts - \u542f\u52a8\u8fd0\u884c\u811a\u672c\u76ee\u5f55"}),"\n",(0,t.jsxs)(n.li,{children:["quay ",(0,t.jsx)(n.a,{href:"https://quay.io/repository/keycloak/keycloak",children:"keycloak/keycloak"})]}),"\n",(0,t.jsxs)(n.li,{children:["dockerhub ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/jboss/keycloak",children:"jboss/keycloak"})]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Env"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_USER"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_PASSWORD"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_USER_FILE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_PASSWORD_FILE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_VENDOR"}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["h2,postgres,mysql,mariadb,oracle,mssql",(0,t.jsx)(n.br,{}),"\u9ed8\u8ba4\u81ea\u52a8\u68c0\u6d4b"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_ADDR"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_PORT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_DATABASE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_SCHEMA"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_USER"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_USER_FILE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_PASSWORD"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DB_PASSWORD_FILE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PROXY_ADDRESS_FORWARDING"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"\u5728\u4ee3\u7406\u4e4b\u540e\u9700\u8981\u63a5\u53d7\u53cd\u5411\u4ee3\u7406\u53c2\u6570"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_FRONTEND_URL"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"\u524d\u7aef\u5730\u5740"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_LOGLEVEL"}),(0,t.jsx)(n.td,{children:"INFO"}),(0,t.jsx)(n.td,{children:"ALL, DEBUG, ERROR, FATAL, INFO, OFF, TRACE, WARN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ROOT_LOGLEVEL"}),(0,t.jsx)(n.td,{children:"INFO"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_STATISTICS"}),(0,t.jsx)(n.td,{children:"db,http"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"/metrics"})," \u66b4\u9732\u7684\u4fe1\u606f"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_WELCOME_THEME"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_DEFAULT_THEME"}),(0,t.jsx)(n.td,{children:"keycloak"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KEYCLOAK_IMPORT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"\u53ef\u6307\u5b9a\u4e00\u4e2a realm json \u6587\u4ef6\u5bfc\u5165"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u9ed8\u8ba4\u542f\u52a8\u4f7f\u7528 H2\n# \u6620\u5c04\u51fa\u6570\u636e\u53ef\u91cd\u590d\u542f\u52a8\u4e0d\u4e22\u914d\u7f6e\n# \u9700\u8981\u6dfb\u52a0\u7684\u7528\u6237\u4f1a\u751f\u6210\u914d\u7f6e\u5230 /opt/jboss/keycloak/standalone/configuration/keycloak-add-user.json\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -v $PWD/keycloak/data:/opt/jboss/keycloak/standalone/data \\\n  --name keycloak jboss/keycloak\n\ndocker run --rm -it --entrypoint bash \\\n  -e -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -v $PWD/keycloak:/opt/jboss/.keycloak \\\n  -v $PWD:/host -w /host \\\n  --name keycloak jboss/keycloak\n\n# \u914d\u7f6e\u6587\u4ef6\n# $HOME/.keycloak/kcadm.config\ndocker run --rm -it --entrypoint bash \\\n  -v $PWD/keycloak:/opt/jboss/.keycloak \\\n  -v $PWD:/host -w /host \\\n  --name keycloak jboss/keycloak\n\nexport PATH=/opt/jboss/keycloak/bin:$PATH\n\n# master \u6388\u6743\nkcadm.sh config credentials --server http://localhost:8080/auth --realm master --user admin --password admin\n\n# \u6388\u6743\u4fe1\u606f\nkcadm.sh config credentials --server http://localhost:8080/auth --realm demo --user admin --client admin\n# \u521b\u5efa\u57df\nkcadm.sh create realms -s realm=demorealm -s enabled=true -o\n# \u521b\u5efa Client\nCID=$(kcadm.sh create clients -r demorealm -s clientId=my_client -s 'redirectUris=[\"http://localhost:8980/myapp/*\"]' -i)\n\n# \u83b7\u53d6 oidc \u8fde\u63a5\u4fe1\u606f\nkcadm.sh get clients/$CID/installation/providers/keycloak-oidc-keycloak-json\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# H2 Console\njar="./modules/system/layers/base/com/h2database/h2/main/h2-*.jar"\nurl="jdbc:h2:./standalone/data/keycloak;AUTO_SERVER=TRUE"\n\njava -cp $jar org.h2.tools.Console -url "$url" -user sa -password sa\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},3354:(e,n,s)=>{var t=s(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var t,l={},o=null,i=null;for(t in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(i=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:r,type:e,key:o,ref:i,props:l,_owner:d.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var t=s(50959);const r={},l=t.createContext(r);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);