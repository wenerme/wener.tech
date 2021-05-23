(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1021:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},k=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),k=a,s=b["".concat(i,".").concat(k)]||b[k]||d[k]||r;return t?o.a.createElement(s,u(u({ref:n},c),{},{components:t})):o.a.createElement(s,u({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=k;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},543:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(8),r=(t(0),t(1021)),i={id:"dokku",title:"Dokku"},u={unversionedId:"devops/xaas/paas/dokku",id:"devops/xaas/paas/dokku",isDocsHomePage:!1,title:"Dokku",description:"Tips",source:"@site/notes/devops/xaas/paas/dokku.md",slug:"/devops/xaas/paas/dokku",permalink:"/notes/devops/xaas/paas/dokku",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/xaas/paas/dokku.md",version:"current",sidebar:"docs",previous:{title:"Tenant DB Schema",permalink:"/notes/devops/xaas/db-schema"},next:{title:"\u5bb9\u5668",permalink:"/notes/devops/container/container"}},l=[{value:"Tips",id:"tips",children:[]},{value:"Notes",id:"notes",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",children:[]},{value:"\u8fdc\u7a0b\u8bbf\u95ee",id:"\u8fdc\u7a0b\u8bbf\u95ee",children:[]},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5355\u670d\u52a1\u5668\u7684 PaaS, \u975e\u5e38\u7b80\u5355\u6613\u7528."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://dokku.viewdocs.io/dokku"},"\u6587\u6863"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u65e0\u6cd5\u64cd\u4f5c\u6302\u8f7d\u7684\u76ee\u5f55\u65f6\ndokku plugin:install https://github.com/expa/dokku-app-user.git\n\n# Git \u90e8\u7f72\n# \u4f7f\u7528 Buildpack \u6784\u5efa\ndokku config:set <app> DOKKU_APP_USER=expauser\ngit push dokku@dokku.me:<app> master\n\n# Docker \u955c\u50cf\u90e8\u7f72\n# \u5c06\u5e94\u7528\u955c\u50cf\u62c9\u5230\u672c\u5730\ndocker pull registry.gitlab.com/wenerme/myapp:master\n# tag \u4e3a dokku \u4e0b myapp \u7684 v1\ndocker tag registry.gitlab.com/wenerme/myapp:master dokku/myapp:v1\n# \u90e8\u7f72 v1\ndokku tags:deploy myapp v1\n")),Object(r.b)("h2",{id:"notes"},"Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dokku \u63a7\u5236 Docker",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7 Nomad \u6216 Kubernates \u8c03\u5ea6"),Object(r.b)("li",{parentName:"ul"},"\u4f46\u4f7f\u7528 Dokku \u4e00\u822c\u662f\u5355\u673a Docker"))),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7c7b\u4f3c Heroku \u7684\u63a5\u53e3"),Object(r.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5e94\u7528\u66b4\u9732\u7aef\u53e3\uff0c\u901a\u8fc7\u5185\u7f6e\u7684 Nginx \u8fdb\u884c\u57df\u540d\u53cd\u5411\u4ee3\u7406"),Object(r.b)("li",{parentName:"ul"},"Nginx",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u65e5\u5fd7 ",Object(r.b)("inlineCode",{parentName:"li"},"/var/log/nginx/${APP}-access.log")),Object(r.b)("li",{parentName:"ul"},"\u9519\u8bef\u65e5\u5fd7 ",Object(r.b)("inlineCode",{parentName:"li"},"/var/log/nginx/${APP}-error.log")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dokku nginx:report")," \u67e5\u770b Nginx \u4fe1\u606f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dokku nginx:show-config")," \u67e5\u770b\u751f\u6210\u7684\u914d\u7f6e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dokku nginx:validate-config")," \u914d\u7f6e\u6821\u9a8c"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://dokku.viewdocs.io/dokku/configuration/nginx/#customizing-the-nginx-configuration"},"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6a21\u677f\u4f7f\u7528 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/gliderlabs/sigil"},"gliderlabs/sigil")," \u751f\u6210"),Object(r.b)("li",{parentName:"ul"},"\u6a21\u7248 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/dokku/dokku/blob/master/plugins/nginx-vhosts/templates/nginx.conf.sigil"},"nginx.conf.sigil")," \u653e\u5230 WORKDIR \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"/app")," \u76ee\u5f55"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a include ",Object(r.b)("inlineCode",{parentName:"li"},"nginx.conf.d/")," \u4e0b\u7684\u914d\u7f6e - \u53ef\u4ee5\u5728\u8fd9\u91cc\u914d\u7f6e\u81ea\u5b9a\u4e49\u800c\u4e0d\u662f\u5168\u91cf\u66ff\u6362",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(r.b)("inlineCode",{parentName:"li"},"/home/dokku/myapp/nginx.conf.d/upload.conf")),Object(r.b)("li",{parentName:"ul"},"\u91cd\u8f7d nginx \u751f\u6548 ",Object(r.b)("inlineCode",{parentName:"li"},"service nginx reload"))))))),Object(r.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9700\u6c42")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ubuntu 16.04/18.04 x64, Debian 9+ x64 or CentOS 7 x64"),Object(r.b)("li",{parentName:"ul"},"1GB \u5185\u5b58")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\nwget https://raw.githubusercontent.com/dokku/dokku/v0.20.4/bootstrap.sh\nsudo DOKKU_TAG=v0.20.4 bash bootstrap.sh\n\n# \u6d4f\u89c8\u5668\u6253\u5f00\u8be5\u4e3b\u673a\u7684 80 \u7aef\u53e3,\u8bbe\u7f6e\u516c\u94a5\n# \u5982\u679c\u4e3a\u4e3b\u673a\u8bbe\u7f6e\u4e86\u57df\u540d,\u53ef\u4f7f\u7528\u865a\u62df\u4e3b\u673a\n# sudo hostname -f\n\n# \u5b89\u88c5 Redis \u63d2\u4ef6\nsudo dokku plugin:install --help https://github.com/dokku/dokku-redis.git redis\n\n# \u670d\u52a1\u5668: \u521b\u5efa\u5e94\u7528\ndokku apps:create my-app\n# \u6dfb\u52a0\u76f8\u5173\u914d\u7f6e\ndokku config:set my-app PORT=2333\n# \u5c06\u5e94\u7528\u5bb9\u5668\u4e2d\u7684 2333 \u6620\u5c04\u4e3a\u4e3b\u673a\u4e0a\u7684 8080\ndokku proxy:proxys-add my-app http:8080:2333\n\n# \u672c\u5730: \u9879\u76ee\u6709 Git \u4ed3\u5e93\u6dfb\u52a0\u670d\u52a1\u5668\u4f5c\u4e3a\u4ed3\u5e93\u5730\u5740\ngit remote add svr dokku@\u670d\u52a1\u5668\u5730\u5740:my-app\n# \u53d1\u5e03\u5e94\u7528\ngit push svr\n\n\n# \u53ef\u76f4\u63a5\u8fdc\u7a0b\u6267\u884c dokku \u547d\u4ee4\nssh -t dokku@\u670d\u52a1\u5668\u5730\u5740 -- help\n# \u5728\u73af\u5883\u4e2d\u6267\u884c\u547d\u4ee4\ndokku run my-app ls\n# \u5982\u679c\u5728 Procfile \u4e2d\u5b9a\u4e49\u4e86\u547d\u4ee4,\u53ef\u6267\u884c\u901a\u8fc7 run \u6267\u884c\n# console: bundle exec racksh\ndokku run my-app console\n# \u76f4\u63a5\u8fdb\u5165 APP \u5bb9\u5668\ndokku enter my-app web\n# \u6307\u5b9a\u4f7f\u7528\u7684 buildpack\ndokku config:set APP BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-ruby.git#v142\n# \u4e5f\u53ef\u5728 .buildpacks \u6587\u4ef6\u4e2d\u6307\u5b9a\u591a\u4e2a buildpack\n")),Object(r.b)("h2",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://dokku.viewdocs.io/dokku/getting-started/install/docker/"},"http://dokku.viewdocs.io/dokku/getting-started/install/docker/"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u81ea\u52a8\u5b89\u88c5\u7684\u63d2\u4ef6\u5217\u8868\nmkdir -p /data/dokku/data\ncat <<PLUGINS > /data/dokku/data/plugin-list\npostgres: https://github.com/dokku/dokku-postgres.git\nredis: https://github.com/dokku/dokku-redis.git\nPLUGINS\n\n# \u542f\u52a8\ndocker run \\\n  --env DOKKU_HOSTNAME=dokku.me \\\n  --name dokku \\\n  --publish 3022:22 \\\n  --publish 8080:80 \\\n  --publish 8443:443 \\\n  --volume /data/dokku/data:/mnt/dokku \\\n  --volume /var/run/docker.sock:/var/run/docker.sock \\\n  dokku/dokku\n\n# \u6dfb\u52a0\u516c\u94a5\ndocker exec -it dokku bash\ncurl https://github.com/wenerme.keys >> ~dokku/.ssh/authorized_keys\n")),Object(r.b)("h2",{id:"\u8fdc\u7a0b\u8bbf\u95ee"},"\u8fdc\u7a0b\u8bbf\u95ee"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Host my-dokku\nHostname 192.168.1.1\nUser dokku\nRequestTTY yes\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"ssh my-dokku dokku apps:list\n")),Object(r.b)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://dokku.viewdocs.io/dokku/community/clients/"},"http://dokku.viewdocs.io/dokku/community/clients/"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b98\u65b9\u5ba2\u6237\u7aef - \u4f7f\u7528 SSH \u6267\u884c\n# \u672c\u8d28\u662f alias dokku='$HOME/.dokku/contrib/dokku_client.sh'\nbrew install dokku/repo/dokku\nDOKKU_HOST=mydokku dokku apps:list\n\n# \u624b\u52a8\u5b89\u88c5\n# \bbrew \u5b89\u88c5\u53ef\u80fd\u7248\u672c\u4e0d\u5339\u914d\n# https://github.com/dokku/dokku/blob/master/contrib/dokku_client.sh\ngit clone https://github.com/dokku/dokku ~/.dokku\n\ncd ~/.dokku\n# \u5207\u6362\u7248\u672c\ngit checkout <tag/branch>\nalias dokku='$HOME/.dokku/contrib/dokku_client.sh'\nDOKKU_HOST=mydokku dokku dokku apps:list\n")),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://glebbahmutov.com/blog/running-multiple-applications-in-dokku/"},"Running multiple applications in Dokku"))))}p.isMDXComponent=!0}}]);