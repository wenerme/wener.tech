"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26662],{49613:function(a,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var t=n(59496);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},l=Object.keys(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=t.createContext({}),s=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):i(i({},e),a)),n},p=function(a){var e=s(a.components);return t.createElement(u.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,l=a.originalType,u=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),f=s(n),g=r,m=f["".concat(u,".").concat(g)]||f[g]||c[g]||l;return n?t.createElement(m,i(i({ref:e},p),{},{components:n})):t.createElement(m,i({ref:e},p))}));function g(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=a,o.mdxType="string"==typeof a?a:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18438:function(a,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var t=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"Grafana"},u="Grafana",s={unversionedId:"service/observability/grafana",id:"service/observability/grafana",title:"Grafana",description:"- \u8981\u6c42",source:"@site/../notes/service/observability/grafana.md",sourceDirName:"service/observability",slug:"/service/observability/grafana",permalink:"/notes/service/observability/grafana",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/observability/grafana.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Grafana"},sidebar:"docs",previous:{title:"Grafana Version",permalink:"/notes/service/observability/grafana-version"},next:{title:"Fluentbit",permalink:"/notes/service/observability/logging/fluentbit"}},p={},c=[{value:"plugins",id:"plugins",level:2},{value:"FAQ",id:"faq",level:2},{value:"msg=&quot;Failed to look up user based on cookie&quot; logger=context error=&quot;user token not found&quot;",id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found",level:2}],f={toc:c};function g(a){var e=a.components,n=(0,r.Z)(a,i);return(0,l.kt)("wrapper",(0,t.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"grafana"},"Grafana"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"255 MB\uff0c1 CPU"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQLite"),(0,l.kt)("li",{parentName:"ul"},"MySQL"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins"},"\u63d2\u4ef6\u5217\u8868")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6388\u6743\u65b9\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"basic\u3001generic oauth\u3001anonymous\u3001azuread\u3001github\u3001gitlab\u3001google\u3001grafana_com\u3001grafananet\u3001ldap\u3001okta\u3001proxy\u3001saml"))),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u62a5\u8868"),(0,l.kt)("li",{parentName:"ul"},"SAML"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u5f3a LDAP"),(0,l.kt)("li",{parentName:"ul"},"\u56e2\u961f\u540c\u6b65 - LDAP, GitHub OAuth, Auth Proxy, Okta - Grafana \u4f5c\u4e3a IdP"),(0,l.kt)("li",{parentName:"ul"},"White labeling"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7edf\u8ba1"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u677f\u70ed\u95e8\u6392\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u627e\u672a\u4f7f\u7528\u9762\u677f"),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u63d2\u4ef6 - Oracle\u3001Splunk\u3001Service Now\u3001Dynatrace\u3001DataDog\u3001AppDynamics")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Conditional formatting ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/grafana/grafana/issues/11418"},"#11418")),(0,l.kt)("li",{parentName:"ul"},"Legend \u65e0\u6cd5\u683c\u5f0f\u5316\uff0c\u4f7f\u7528 prometheus \u53ef\u4ee5\u4fee\u6539 label",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'label_replace(my_vector, "short_hostname", "$1", "hostname", "(.*):.*")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'label_replace(up{instance=~"$instance"}, "instance_ip", "$2", "instance", "(192[.]168[.])?([0-9.+]+|.*).*")')))),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u9690\u85cf Table \u7684 Filter for value ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/grafana/grafana/issues/11170"},"#11170")),(0,l.kt)("li",{parentName:"ul"},"OAuth \u65e0\u6cd5\u5173\u8054 org"),(0,l.kt)("li",{parentName:"ul"},"LDAP \u53ef\u80fd\u662f\u552f\u4e00\u591a\u79df\u6237\u767b\u9646\u65b9\u4fbf\u7684\u65b9\u5f0f - \u6216\u8005\u6bcf\u4e2a\u79df\u6237\u90e8\u7f72\u4e00\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"Dashboard Value Mapping \u4e0d\u652f\u6301\u6587\u672c\u5339\u914d"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'brew install grafana\n\n# \u624b\u52a8\u5b89\u88c5\nwget https://dl.grafana.com/oss/release/grafana-7.1.1.darwin-amd64.tar.gz\ntar -zxvf grafana-7.1.1.darwin-amd64.tar.gz\n\n# docker\n# https://grafana.com/docs/grafana/latest/installation/docker/\n# \u63d2\u4ef6\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource"\n# \u53ef\u6307\u5b9a\u7248\u672c\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel 1.0.1,grafana-simple-json-datasource 1.3.5"\n# \u81ea\u5b9a\u4e49\u6765\u6e90\n# -e "GF_INSTALL_PLUGINS=http://plugin-domain.com/my-custom-plugin.zip;custom-plugin"\n# \u9ed8\u8ba4\u914d\u7f6e /usr/share/grafana/conf/defaults.ini /etc/grafana/grafana.ini\n# default.paths.data=/var/lib/grafana\n# default.paths.logs=/var/log/grafana\n# default.paths.plugins=/var/lib/grafana/plugins\n# default.paths.provisioning=/etc/grafana/provisioning\n# default.log.mode=console\ndocker run --rm -it -e TZ=Asia/Shanghai \\\n  -p 3000:3000 \\\n  --name=grafana grafana/grafana\n\n# \u9ed8\u8ba4\u670d\u52a1\u7aef\u914d\u7f6e\ngrafana-server \\\n  --config=/opt/grafana/grafana.ini \\\n  --homepath /usr/local/share/grafana \\\n  --packaging=brew cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n\n# \u542f\u52a8\u670d\u52a1\nbrew services start grafana\n\ncode /opt/grafana/grafana.ini\ngrafana-server --config /opt/grafana/grafana.ini --homepath /usr/local/share/grafana --packaging=brew\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57fa\u672c\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[path]\ndata = /opt/grafana\nlogs = /opt/grafana\nplugins = /usr/local/var/lib/grafana/plugins\n\n[server]\nhttp_port = 3030\n\n[database]\ntype=sqlite3\n\n[remote_cache]\n\n[analytics]\nreporting_enabled = false\n")),(0,l.kt)("h2",{id:"plugins"},"plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins/"},"https://grafana.com/grafana/plugins/")),(0,l.kt)("li",{parentName:"ul"},"grafana-clock-panel"),(0,l.kt)("li",{parentName:"ul"},"grafana-polystat-panel"),(0,l.kt)("li",{parentName:"ul"},"marcusolsson-hexmap-panel")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found"},'msg="Failed to look up user based on cookie" logger=context error="user token not found"'))}g.isMDXComponent=!0}}]);