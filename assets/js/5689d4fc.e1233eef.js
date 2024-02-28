/*! For license information please see 5689d4fc.e1233eef.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90432],{7556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=s(2488),t=s(62780);const o={title:"Nexus"},i="Nexus",l={id:"service/forge/nexus",title:"Nexus",description:"- sonatype/nexus-public",source:"@site/../notes/service/forge/nexus.md",sourceDirName:"service/forge",slug:"/service/forge/nexus",permalink:"/notes/service/forge/nexus",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/nexus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679060062,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Nexus"},sidebar:"docs",previous:{title:"Jenkinsfile",permalink:"/notes/service/forge/jenkins/jenkinsfile"},next:{title:"onedev",permalink:"/notes/service/forge/onedev"}},c={},a=[{value:"Pro",id:"pro",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nexus",children:"Nexus"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/sonatype/nexus-public",children:"sonatype/nexus-public"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"EPL-1.0, Java"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://support.sonatype.com/hc/en-us/sections/203012688-Release-Notes",children:"Release-Notes"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://issues.sonatype.org/browse/NEXUS-10471",children:"NEXUS-10471"})," - \u90e8\u7f72\u5230 group \u4ed3\u5e93\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/a/54590014/1870054",children:"Nginx \u53cd\u5411\u4ee3\u7406"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://help.sonatype.com/repomanager3/formats/go-repositories",children:"Go Repositories"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://guides.sonatype.com/repo3/technical-guides/go-dependencies-nxrm3/",children:"Guide"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5f00\u53d1\u96c6\u6210\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$URL/swagger-ui/"})," Swagger \u754c\u9762"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://help.sonatype.com/repomanager3/installation/system-requirements",children:"\u7cfb\u7edf\u8981\u6c42"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u74f6\u9888\u662f IO, Java \u5e94\u7528 \u5c3d\u91cf\u786e\u4fdd\u5185\u5b58\u8db3\u591f"}),"\n",(0,r.jsx)(n.li,{children:"4 Core 8 G"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://community.sonatype.com/t/creating-repositories-groups-etc-via-rest-api-in-nexus-3/814/3",children:"\u521b\u5efa\u4ed3\u5e93\u53ea\u80fd\u662f Groovy \u811a\u672c - \u53ef\u901a\u8fc7 REST \u4e0a\u4f20"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/sonatype-nexus-community/nexus-scripting-examples/tree/master/simple-shell-example",children:"simple-shell-example"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/41450338",children:"Trying to use REST API to create repositories in sonatype Nexus"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.sonatype.com/repomanager3/rest-and-integration-api/repositories-api",children:"\u4ed3\u5e93\u63a5\u53e3"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# https://github.com/sonatype/docker-nexus3\n# https://hub.docker.com/r/sonatype/nexus3\ndocker run --rm -it -v $PWD/data:/data -p 8081:8081 --name nexus sonatype/nexus3\n\n# \u73af\u5883\u53d8\u91cf\u65b9\u5f0f\nexport GOPROXY=https://gonexus.dev\n# \u914d\u7f6e\u65b9\u5f0f\ngo env -w GOPROXY=https://gonexus.dev,direct\n"})}),"\n",(0,r.jsx)(n.h2,{id:"pro",children:"Pro"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Staging & Build Promotion"}),"\n",(0,r.jsx)(n.li,{children:"SAML/SSO, Enterprise LDAP, Auth Tokens"}),"\n",(0,r.jsx)(n.li,{children:"Runtime Storage Expansion/ Migration"}),"\n",(0,r.jsx)(n.li,{children:"Content Replication"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.sonatype.com/products/repository-oss-download#repo-compare-chart",children:"https://www.sonatype.com/products/repository-oss-download#repo-compare-chart"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38088:(e,n,s)=>{var r=s(96651),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,o={},a=null,p=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:p,props:o,_owner:l.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>i});var r=s(96651);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);