"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93214],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(a),k=n,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},60155:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=a(96600),n=a(27279),l=(a(59496),a(49613)),i=["components"],u={title:"Apache Guacamole"},o="Apache Guacamole",p={unversionedId:"os/virt/guacamole",id:"os/virt/guacamole",title:"Apache Guacamole",description:"- apache/guacamole-server",source:"@site/../notes/os/virt/guacamole.md",sourceDirName:"os/virt",slug:"/os/virt/guacamole",permalink:"/notes/os/virt/guacamole",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/virt/guacamole.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Apache Guacamole"},sidebar:"docs",previous:{title:"Firecracker",permalink:"/notes/os/virt/firecracker"},next:{title:"HAXM",permalink:"/notes/os/virt/haxm"}},c={},m=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8ba4\u8bc1",id:"\u8ba4\u8bc1",level:3},{value:"Docker",id:"docker",level:2}],s={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apache-guacamole"},"Apache Guacamole"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/guacamole-server"},"apache/guacamole-server"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"clientless remote desktop gateway"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u5ba2\u6237\u7aef\u7684\u8fdc\u7a0b\u684c\u9762\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 VNC, RDP, SSH, telnet, Kubernetes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes - \u5bb9\u5668\u63a7\u5236\u53f0"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 mysql, postgresql, ldap, 2factor, totp, http header, cas, oidc, saml, ad-hoc \u8ba4\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f55\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u4f9d\u8d56: Cairo, libjpeg-turbo/libjpeg, libpng, OSSP UUID"),(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u4f9d\u8d56:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FreeRDP"),(0,l.kt)("li",{parentName:"ul"},"SSH - libssh2, OpenSSL, Pango"),(0,l.kt)("li",{parentName:"ul"},"SFTP - libssh2, OpenSSL"),(0,l.kt)("li",{parentName:"ul"},"WebP - libwebp"),(0,l.kt)("li",{parentName:"ul"},"guacenc - FFmpeg"),(0,l.kt)("li",{parentName:"ul"},"libtelnnet, Pango"),(0,l.kt)("li",{parentName:"ul"},"libVNCserver - PulseAudio"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://guacamole.apache.org/doc/gug/guacamole-protocol.html"},"The Guacamole protocol")),(0,l.kt)("li",{parentName:"ul"},"\u5355\u5e94\u7528 rdp initial_program ",(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/43199970/1870054"},"https://stackoverflow.com/a/43199970/1870054"))))),(0,l.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"guacd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3 4822"))),(0,l.kt)("li",{parentName:"ul"},"quickconnect",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh://linux1.example.com/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vnc://linux1.example.com:5900/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rdp://localuser@windows1.example.com/?security=rdp&ignore-cert=true&disable-audio=true&enable-drive=true&drive-path=/mnt/usb"))))),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://guacamole.apache.org/doc/gug/configuring-guacamole.html"},"Configuring Guacamole"))),(0,l.kt)("h3",{id:"\u8ba4\u8bc1"},"\u8ba4\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"postgresql",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"POSTGRES_HOSTNAME"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_PORT"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_DATABASE"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_USER"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_PASSWORD"))),(0,l.kt)("li",{parentName:"ul"},"ldap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LDAP_HOSTNAME"),(0,l.kt)("li",{parentName:"ul"},"LDAP_PORT"),(0,l.kt)("li",{parentName:"ul"},"LDAP_ENCRYPTION_METHOD"),(0,l.kt)("li",{parentName:"ul"},"LDAP_USER_BASE_DN"))),(0,l.kt)("li",{parentName:"ul"},"header",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HEADER_ENABLED"),(0,l.kt)("li",{parentName:"ul"},"HTTP_AUTH_HEADER=REMOTE_USER"))),(0,l.kt)("li",{parentName:"ul"},"oidc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"openid-authorization-endpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"https://identity-provider/.well-known/openid-configuration"))),(0,l.kt)("li",{parentName:"ul"},"openid-jwks-endpoint"),(0,l.kt)("li",{parentName:"ul"},"openid-issuer"),(0,l.kt)("li",{parentName:"ul"},"openid-client-id"),(0,l.kt)("li",{parentName:"ul"},"openid-redirect-uri")))),(0,l.kt)("h2",{id:"docker"},"Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"guacamole/guacd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Daemon"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 VNC, RDP, SSH, telnet, Kubernetes"))),(0,l.kt)("li",{parentName:"ul"},"guacamole/guacamole",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Web"),(0,l.kt)("li",{parentName:"ul"},"http://HOSTNAME:8080/guacamole/")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -e GUACD_LOG_LEVEL=debug -p 4822:4822 --name guacd guacamole/guacd\n\ndocker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --postgres > initdb.sql\n\n# GUACD_HOSTNAME=172.17.42.1\n# GUACD_PORT=4822\ndocker run --rm -it \\\n  --link guacd:guacd \\\n  -p 8080:8080 \\\n  --name guacamole guacamole/guacamole\n")))}k.isMDXComponent=!0}}]);