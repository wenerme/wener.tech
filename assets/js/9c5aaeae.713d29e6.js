"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55167],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return g}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),g=r,m=f["".concat(s,".").concat(g)]||f[g]||c[g]||l;return n?t.createElement(m,i(i({ref:a},p),{},{components:n})):t.createElement(m,i({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74500:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var t=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"grafana",title:"Grafana"},s=void 0,u={unversionedId:"service/observability/grafana",id:"service/observability/grafana",isDocsHomePage:!1,title:"Grafana",description:"Tips",source:"@site/notes/service/observability/grafana.md",sourceDirName:"service/observability",slug:"/service/observability/grafana",permalink:"/notes/service/observability/grafana",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/grafana.md",tags:[],version:"current",frontMatter:{id:"grafana",title:"Grafana"},sidebar:"docs",previous:{title:"Observability FAQ",permalink:"/notes/service/observability/observability-faq"},next:{title:"Grafana Prometheus",permalink:"/notes/service/observability/grafana-prometheus"}},p=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"msg=&quot;Failed to look up user based on cookie&quot; logger=context error=&quot;user token not found&quot;",id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found",children:[]}],c={toc:p};function f(e){var a=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"255 MB\uff0c1 CPU"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQLite"),(0,l.kt)("li",{parentName:"ul"},"MySQL"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins"},"\u63d2\u4ef6\u5217\u8868")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6388\u6743\u65b9\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"basic\u3001generic oauth\u3001anonymous\u3001azuread\u3001github\u3001gitlab\u3001google\u3001grafana_com\u3001grafananet\u3001ldap\u3001okta\u3001proxy\u3001saml"))),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u62a5\u8868"),(0,l.kt)("li",{parentName:"ul"},"SAML"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u5f3a LDAP"),(0,l.kt)("li",{parentName:"ul"},"\u56e2\u961f\u540c\u6b65 - LDAP, GitHub OAuth, Auth Proxy, Okta - Grafana \u4f5c\u4e3a IdP"),(0,l.kt)("li",{parentName:"ul"},"White labeling"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7edf\u8ba1"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u677f\u70ed\u95e8\u6392\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u627e\u672a\u4f7f\u7528\u9762\u677f"),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u63d2\u4ef6 - Oracle\u3001Splunk\u3001Service Now\u3001Dynatrace\u3001DataDog\u3001AppDynamics"))),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/grafana/grafana/issues/11418"},"#11418")," - Conditional formatting"),(0,l.kt)("li",{parentName:"ul"},"Legend \u65e0\u6cd5\u683c\u5f0f\u5316\uff0c\u4f7f\u7528 prometheus \u53ef\u4ee5\u4fee\u6539 label",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'label_replace(my_vector, "short_hostname", "$1", "hostname", "(.*):.*")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'label_replace(up{instance=~"$instance"}, "instance_ip", "$2", "instance", "(192[.]168[.])?([0-9.+]+|.*).*")')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/grafana/grafana/issues/11170"},"#11170")," - \u65e0\u6cd5\u9690\u85cf Table \u7684 Filter for value"))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Value Mapping \u4e0d\u652f\u6301\u6587\u672c\u5339\u914d")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'brew install grafana\n\n# \u624b\u52a8\u5b89\u88c5\nwget https://dl.grafana.com/oss/release/grafana-7.1.1.darwin-amd64.tar.gz\ntar -zxvf grafana-7.1.1.darwin-amd64.tar.gz\n\n# docker\n# https://grafana.com/docs/grafana/latest/installation/docker/\n# \u63d2\u4ef6\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource"\n# \u53ef\u6307\u5b9a\u7248\u672c\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel 1.0.1,grafana-simple-json-datasource 1.3.5"\n# \u81ea\u5b9a\u4e49\u6765\u6e90\n# -e "GF_INSTALL_PLUGINS=http://plugin-domain.com/my-custom-plugin.zip;custom-plugin"\n# \u9ed8\u8ba4\u914d\u7f6e /usr/share/grafana/conf/defaults.ini /etc/grafana/grafana.ini\n# default.paths.data=/var/lib/grafana\n# default.paths.logs=/var/log/grafana\n# default.paths.plugins=/var/lib/grafana/plugins\n# default.paths.provisioning=/etc/grafana/provisioning\n# default.log.mode=console\ndocker run --rm -it -e TZ=Asia/Shanghai \\\n  -p 3000:3000 \\\n  --name=grafana grafana/grafana\n\n# \u9ed8\u8ba4\u670d\u52a1\u7aef\u914d\u7f6e\ngrafana-server \\\n  --config=/opt/grafana/grafana.ini \\\n  --homepath /usr/local/share/grafana \\\n  --packaging=brew cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n\n# \u542f\u52a8\u670d\u52a1\nbrew services start grafana\n\ncode /opt/grafana/grafana.ini\ngrafana-server --config /opt/grafana/grafana.ini --homepath /usr/local/share/grafana --packaging=brew\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57fa\u672c\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[path]\ndata = /opt/grafana\nlogs = /opt/grafana\nplugins = /usr/local/var/lib/grafana/plugins\n\n[server]\nhttp_port = 3030\n\n[database]\ntype=sqlite3\n\n[remote_cache]\n\n[analytics]\nreporting_enabled = false\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/administration/configuration/"},"Configuration")),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GF_<SectionName>_<KeyName>"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[database]\n# mysql, postgres, sqlite3\ntype=postgres\n# SQLite3\npath=\nhost=\nname=\nuser=\npassword=\n# mysql://user:secret@host:port/database\n# mysql://user:secret@host:port/database\nurl=\n# pg - disable, require, verify-full\n# mysql - true, false, skip-verify\nssl_mode=\n\n[remote_cache]\n# redis, memcached, database\ntype=database\n# database, redis, memcache\nconnstr=\ndatabase=\nredis=addr=127.0.0.1:6379,pool_size=100,db=0,ssl=false\nmemcache=127.0.0.1:11211\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found"},'msg="Failed to look up user based on cookie" logger=context error="user token not found"'))}f.isMDXComponent=!0}}]);