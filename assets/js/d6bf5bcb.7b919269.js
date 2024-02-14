/*! For license information please see d6bf5bcb.7b919269.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82268],{13368:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var r=e(2488),s=e(62780);const i={title:"Grafana"},l="Grafana",t={id:"service/observability/grafana/README",title:"Grafana",description:"- \u8981\u6c42",source:"@site/../notes/service/observability/grafana/README.md",sourceDirName:"service/observability/grafana",slug:"/service/observability/grafana/",permalink:"/notes/service/observability/grafana/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/grafana/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684666307,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{title:"Grafana"},sidebar:"docs",previous:{title:"goaccess",permalink:"/notes/service/observability/goaccess"},next:{title:"Grafana \u914d\u7f6e",permalink:"/notes/service/observability/grafana/conf"}},o={},c=[{value:"plugins",id:"plugins",level:2},{value:"FAQ",id:"faq",level:2},{value:"msg=&quot;Failed to look up user based on cookie&quot; logger=context error=&quot;user token not found&quot;",id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found",level:2}];function d(n){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"grafana",children:"Grafana"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\u8981\u6c42\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"255 MB\uff0c1 CPU"}),"\n",(0,r.jsxs)(a.li,{children:["\u6570\u636e\u5e93\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"SQLite"}),"\n",(0,r.jsx)(a.li,{children:"MySQL"}),"\n",(0,r.jsx)(a.li,{children:"PostgreSQL"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://grafana.com/grafana/plugins",children:"\u63d2\u4ef6\u5217\u8868"})}),"\n",(0,r.jsxs)(a.li,{children:["\u652f\u6301\u6388\u6743\u65b9\u5f0f\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"basic\u3001generic oauth\u3001anonymous\u3001azuread\u3001github\u3001gitlab\u3001google\u3001grafana_com\u3001grafananet\u3001ldap\u3001okta\u3001proxy\u3001saml"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\u4f01\u4e1a\u7248\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\u6570\u636e\u6e90\u6743\u9650"}),"\n",(0,r.jsx)(a.li,{children:"\u62a5\u8868"}),"\n",(0,r.jsx)(a.li,{children:"SAML"}),"\n",(0,r.jsx)(a.li,{children:"\u589e\u5f3a LDAP"}),"\n",(0,r.jsx)(a.li,{children:"\u56e2\u961f\u540c\u6b65 - LDAP, GitHub OAuth, Auth Proxy, Okta - Grafana \u4f5c\u4e3a IdP"}),"\n",(0,r.jsx)(a.li,{children:"White labeling"}),"\n",(0,r.jsx)(a.li,{children:"\u4f7f\u7528\u7edf\u8ba1"}),"\n",(0,r.jsx)(a.li,{children:"\u9762\u677f\u70ed\u95e8\u6392\u5e8f"}),"\n",(0,r.jsx)(a.li,{children:"\u67e5\u627e\u672a\u4f7f\u7528\u9762\u677f"}),"\n",(0,r.jsx)(a.li,{children:"\u4f01\u4e1a\u63d2\u4ef6 - Oracle\u3001Splunk\u3001Service Now\u3001Dynatrace\u3001DataDog\u3001AppDynamics"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"caution",children:(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Conditional formatting ",(0,r.jsx)(a.a,{href:"https://github.com/grafana/grafana/issues/11418",children:"#11418"})]}),"\n",(0,r.jsxs)(a.li,{children:["Legend \u65e0\u6cd5\u683c\u5f0f\u5316\uff0c\u4f7f\u7528 prometheus \u53ef\u4ee5\u4fee\u6539 label\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:'label_replace(my_vector, "short_hostname", "$1", "hostname", "(.*):.*")'})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:'label_replace(up{instance=~"$instance"}, "instance_ip", "$2", "instance", "(192[.]168[.])?([0-9.+]+|.*).*")'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\u65e0\u6cd5\u9690\u85cf Table \u7684 Filter for value ",(0,r.jsx)(a.a,{href:"https://github.com/grafana/grafana/issues/11170",children:"#11170"})]}),"\n",(0,r.jsx)(a.li,{children:"OAuth \u65e0\u6cd5\u5173\u8054 org"}),"\n",(0,r.jsx)(a.li,{children:"LDAP \u53ef\u80fd\u662f\u552f\u4e00\u591a\u79df\u6237\u767b\u9646\u65b9\u4fbf\u7684\u65b9\u5f0f - \u6216\u8005\u6bcf\u4e2a\u79df\u6237\u90e8\u7f72\u4e00\u4e2a"}),"\n",(0,r.jsx)(a.li,{children:"Dashboard Value Mapping \u4e0d\u652f\u6301\u6587\u672c\u5339\u914d"}),"\n"]})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'brew install grafana\n\n# \u624b\u52a8\u5b89\u88c5\nwget https://dl.grafana.com/oss/release/grafana-7.1.1.darwin-amd64.tar.gz\ntar -zxvf grafana-7.1.1.darwin-amd64.tar.gz\n\n# docker\n# https://grafana.com/docs/grafana/latest/installation/docker/\n# \u63d2\u4ef6\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource"\n# \u53ef\u6307\u5b9a\u7248\u672c\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel 1.0.1,grafana-simple-json-datasource 1.3.5"\n# \u81ea\u5b9a\u4e49\u6765\u6e90\n# -e "GF_INSTALL_PLUGINS=http://plugin-domain.com/my-custom-plugin.zip;custom-plugin"\n# \u9ed8\u8ba4\u914d\u7f6e /usr/share/grafana/conf/defaults.ini /etc/grafana/grafana.ini\n# default.paths.data=/var/lib/grafana\n# default.paths.logs=/var/log/grafana\n# default.paths.plugins=/var/lib/grafana/plugins\n# default.paths.provisioning=/etc/grafana/provisioning\n# default.log.mode=console\ndocker run --rm -it -e TZ=Asia/Shanghai \\\n  -p 3000:3000 \\\n  --name=grafana grafana/grafana\n\n# \u9ed8\u8ba4\u670d\u52a1\u7aef\u914d\u7f6e\ngrafana-server \\\n  --config=/opt/grafana/grafana.ini \\\n  --homepath /usr/local/share/grafana \\\n  --packaging=brew cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n\n# \u542f\u52a8\u670d\u52a1\nbrew services start grafana\n\ncode /opt/grafana/grafana.ini\ngrafana-server --config /opt/grafana/grafana.ini --homepath /usr/local/share/grafana --packaging=brew\n'})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"\u57fa\u672c\u914d\u7f6e"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ini",children:"[path]\ndata = /opt/grafana\nlogs = /opt/grafana\nplugins = /usr/local/var/lib/grafana/plugins\n\n[server]\nhttp_port = 3030\n\n[database]\ntype=sqlite3\n\n[remote_cache]\n\n[analytics]\n# \u5173\u95ed telemetry\nreporting_enabled = false\n"})}),"\n",(0,r.jsx)(a.h2,{id:"plugins",children:"plugins"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://grafana.com/grafana/plugins/",children:"https://grafana.com/grafana/plugins/"})}),"\n",(0,r.jsx)(a.li,{children:"grafana-clock-panel"}),"\n",(0,r.jsx)(a.li,{children:"grafana-polystat-panel"}),"\n",(0,r.jsx)(a.li,{children:"marcusolsson-hexmap-panel"}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(a.h2,{id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found",children:'msg="Failed to look up user based on cookie" logger=context error="user token not found"'})]})}function g(n={}){const{wrapper:a}={...(0,s.M)(),...n.components};return a?(0,r.jsx)(a,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},38088:(n,a,e)=>{var r=e(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(n,a,e){var r,i={},c=null,d=null;for(r in void 0!==e&&(c=""+e),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)l.call(a,r)&&!o.hasOwnProperty(r)&&(i[r]=a[r]);if(n&&n.defaultProps)for(r in a=n.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:s,type:n,key:c,ref:d,props:i,_owner:t.current}}a.Fragment=i,a.jsx=c,a.jsxs=c},2488:(n,a,e)=>{n.exports=e(38088)},62780:(n,a,e)=>{e.d(a,{I:()=>t,M:()=>l});var r=e(96651);const s={},i=r.createContext(s);function l(n){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function t(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:a},n.children)}}}]);