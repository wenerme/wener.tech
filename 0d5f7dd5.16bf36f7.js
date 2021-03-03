(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{766:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),i=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(t),m=a,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return t?r.a.createElement(u,l(l({ref:n},s),{},{components:t})):r.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return i}));var a=t(2),r=t(7),o=(t(0),t(766)),c={id:"docker-cookbook",title:"Docker \u5e38\u7528\u670d\u52a1"},l={unversionedId:"devops/docker/docker-cookbook",id:"devops/docker/docker-cookbook",isDocsHomePage:!1,title:"Docker \u5e38\u7528\u670d\u52a1",description:"Run container",source:"@site/notes/devops/docker/docker-cookbook.md",slug:"/devops/docker/docker-cookbook",permalink:"/notes/devops/docker/docker-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-cookbook.md",version:"current",sidebar:"docs",previous:{title:"Docker",permalink:"/notes/devops/docker/docker-intro"},next:{title:"Docker FAQ",permalink:"/notes/devops/docker/docker-faq"}},d=[{value:"\u5e38\u7528\u9009\u9879",id:"\u5e38\u7528\u9009\u9879",children:[]},{value:"xhyve",id:"xhyve",children:[]},{value:"MySQL",id:"mysql",children:[]},{value:"OwnCloud/Nextcloud",id:"owncloudnextcloud",children:[{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",children:[]}]},{value:"Jenkins",id:"jenkins",children:[]},{value:"gitea",id:"gitea",children:[]},{value:"PHP",id:"php",children:[]},{value:"Drone.io",id:"droneio",children:[{value:"\u66f4\u65b0",id:"\u66f4\u65b0",children:[]},{value:"\u5b89\u88c5 Go \u73af\u5883",id:"\u5b89\u88c5-go-\u73af\u5883",children:[]}]},{value:"WatchTower",id:"watchtower",children:[]},{value:"Redis",id:"redis",children:[]},{value:"Docker in Docker",id:"docker-in-docker",children:[]},{value:"MongoDB",id:"mongodb",children:[]},{value:"RethinkDB",id:"rethinkdb",children:[]},{value:"Nexus",id:"nexus",children:[]},{value:"Registry",id:"registry",children:[]},{value:"Odoo",id:"odoo",children:[]},{value:"XAMPP",id:"xampp",children:[]},{value:"ldap",id:"ldap",children:[]},{value:"Postgres",id:"postgres",children:[]},{value:"\u5176\u4ed6\u670d\u52a1",id:"\u5176\u4ed6\u670d\u52a1",children:[{value:"cow",id:"cow",children:[]}]}],s={rightToc:d};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"run-container"},"Run container"),Object(o.b)("h2",{id:"\u5e38\u7528\u9009\u9879"},"\u5e38\u7528\u9009\u9879"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# docker run\n--restart always\n# \u8c03\u6574\u5bb9\u5668\u4e2d\u7684\u65f6\u95f4\n-v /etc/localtime:/etc/localtime:ro\n# \u540e\u53f0\u8fd0\u884c\n-d\n")),Object(o.b)("h2",{id:"xhyve"},"xhyve"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 https://github.com/zchee/docker-machine-driver-xhyve#install\ndocker-machine create --driver xhyve xhyve\neval `docker-machine env xhyve`\ndocker info\n")),Object(o.b)("h2",{id:"mysql"},"MySQL"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"DIR=/data/mysql\n# \u81ea\u5b9a\u4e49\u914d\u7f6e\nmkdir -p /data/mysql/conf.d/\necho '\n[mysqld]\ncharacter_set_server=utf8mb4\ncollation_server=utf8mb4_unicode_ci\n' > /data/mysql/conf.d/my.cnf\n\n# \u81ea\u5b9a\u4e49\u6570\u636e\u76ee\u5f55\nmkdir -p /data/mysql/conf.d/datadir\n\n# \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u542f\u52a8 MySQL\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 3306:3306 \\\n  -v /data/mysql/datadir:/var/lib/mysql -v /data/mysql/conf.d:/etc/mysql/conf.d \\\n  -e MYSQL_ROOT_PASSWORD=ThisIsPassword \\\n  --name mysql mysql\n")),Object(o.b)("h2",{id:"owncloudnextcloud"},"OwnCloud/Nextcloud"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u9700\u8981\u5148\u521b\u5efa\u540d\u4e3a mysql \u7684 mysql \u5bb9\u5668,\u5982\u679c\u6ca1\u6709,\u53ef\u53bb\u9664 --link\n# \u542f\u52a8 OwnCloud\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 8080:80 \\\n  -v /data/owncloud:/var/www/html \\\n  --link mysql:mysql \\\n  --name owncloud owncloud\n")),Object(o.b)("h3",{id:"\u53cd\u5411\u4ee3\u7406"},"\u53cd\u5411\u4ee3\u7406"),Object(o.b)("p",null,"sudo nano /data/owncloud/config/config.php"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n/* $CONFIG */\n\n$EXTRA_CONFIG = array (\n  "trusted_proxies"   => [\'10.0.0.1\'],\n  "overwritehost"     => "ssl-proxy.tld",\n  "overwriteprotocol" => "https",\n  "overwritewebroot"  => "/domain.tld/owncloud",\n  "overwritecondaddr" => "^10\\.0\\.0\\.1$",\n);\n$CONFIG = array_merge($CONFIG, $EXTRA_CONFIG)\n')),Object(o.b)("h2",{id:"jenkins"},"Jenkins"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u4e0d\u7528\u6620\u5c04, \u5907\u4efd\u901a\u8fc7 docker cp $ID:/var/jenkins_home\n# \u8bbe\u7f6e JENKINS_OPTS="--prefix=/jenkins" \u6765\u505a\u53cd\u5411\u4ee3\u7406\n# \u5982\u679c\u76ee\u5f55\u6709\u6743\u9650\u95ee\u9898\u53ef\u624b\u52a8\u8bbe\u7f6e mkdir -p /data/jenkins && chwon 1000:1000 /data/jenkins\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 8080:8080 -p 50000:50000 \\\n  -v /data/jenkins:/var/jenkins_home \\\n  --name jenkins jenkins\n')),Object(o.b)("p",null,"Jenkins \u662f\u79bb\u7ebf\u7684,\u7531\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"jenkins-ci.org")," \u88ab\u5899,\u6240\u4ee5\u53ef\u80fd\u9700\u8981\u4f7f\u7528 HTTP \u4ee3\u7406"),Object(o.b)("h2",{id:"gitea"},"gitea"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 3000:3000 \\\n  -v /data/gitea:/data \\\n  --name gitea gitea/gitea\n")),Object(o.b)("h2",{id:"php"},"PHP"),Object(o.b)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u4e86\u5f88\u591a PHP \u7248\u672c, \u5982\u679c\u9700\u8981\u989d\u5916\u7684\u6269\u5c55\u5efa\u8bae\u81ea\u5df1 build \u4e00\u4e2a, \u4f8b\u5982"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"php.dockerfile")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),"FROM php:5-apache\nRUN apt-get update\nRUN apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev  \\\n    && pecl install mongodb \\\n    && docker-php-ext-enable mongodb\nRUN pecl install redis && docker-php-ext-enabl redis\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t wener/php -f php.dockerfile .\ndocker run -d --restart always -p 80:80 -v /data/php/www:/var/www/html --name php wener/php\n# \u4e5f\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5df1\u7684\u914d\u7f6e\n# \u8bbe\u7f6e\u9ed8\u8ba4\u65f6\u533a\necho 'date.timezone=Asia/Shanghai' > /data/php/config/php.ini;\ndocker run -d --restart always  -p 80:80 -v /data/php/www:/var/www/html \\\n  -v /data/php/config/php.ini:/usr/local/etc/php/php.ini  --name php wener/php\n")),Object(o.b)("h2",{id:"droneio"},"Drone.io"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Drone \u4e00\u822c\u914d\u5408 Gogs \u4f7f\u7528\nmkdir /opt/apps/drone && cd /opt/apps/drone\n# \u7528\u4e8e\u5b58\u653e\u6570\u636e\nmkdir data\n# \u9700\u8981\u9884\u5148\u5728 MySQL \u4e2d\u5c06 drone \u5e93\u521b\u5efa\u51fa\u6765\n# \u9700\u8981\u5c06\u6570\u636e\u5e93\u4fee\u6539\u4e3a\u5177\u4f53\u7684\n# \u914d\u7f6e\u53c2\u8003 http://readme.drone.io/setup/settings/\necho '\nREMOTE_DRIVER=gogs\nREMOTE_CONFIG=https://gogs.hooli.com?open=false\nDATABASE_DRIVER=mysql\nDATABASE_CONFIG=root:pa55word@tcp(localhost:3306)/drone?parseTime=true\n# HTTPS_PROXY=https://proxy.example.com\n# HTTP_PROXY=http://proxy.example.com\n# NO_PROXY=.example.com, *.docker.example.com\n' > dronerc\n\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p=8080:8000 \\\n    -v /opt/apps/drone/data:/var/lib/drone \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    --env-file ./dronerc \\\n  --link mysql:mysql \\\n    --name=drone drone/drone\n")),Object(o.b)("h3",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker stop drone\ndocker rm drone\ndocker pull drone/drone\ndocker run ...\n")),Object(o.b)("h3",{id:"\u5b89\u88c5-go-\u73af\u5883"},"\u5b89\u88c5 Go \u73af\u5883"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u8fdb\u5165\u5bb9\u5668\u6267\u884c\ndocker exec -it jenkins bash\n# \u5b89\u88c5 Go \u73af\u5883\nmkdir /var/jenkins_home/go/root\ncd /var/jenkins_home/go/root\nGOVERSION=1.7\nwget https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz\n# \u6216\u8005\u4f7f\u7528\u4ee3\u7406\u4e0b\u8f7d\n# https_proxy=socks://127.0.0.1:8888 curl https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz -o go$GOVERSION.linux-amd64.tar.gz\ntar -C /var/jenkins_home/go/root -xzf go$GOVERSION.linux-amd64.tar.gz\n# \u7136\u540e\u5728 Jenkins \u4e2d\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\n# GOROOT=/var/jenkins_home/go/root/go\n# GOPATH=/var/jenkins_home/go\n")),Object(o.b)("h2",{id:"watchtower"},"WatchTower"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/v2tec/watchtower"}),"https://github.com/v2tec/watchtower")),Object(o.b)("li",{parentName:"ul"},"Docker \u65e0\u6cd5\u8fd0\u884c\u540e\u6dfb\u52a0 Label ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/moby/moby/issues/21721"}),"#21721"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u5c06\u4e3b\u673a\u4e0a\u7684 docker \u914d\u7f6e\u6388\u6743\u6620\u5c04\u5230\u5bb9\u5668\u5185\u4ee5\u4fbf\u4e8e\u62c9\u53d6\u79c1\u6709\u4ed3\u5e93\n# -i \u68c0\u67e5\u95f4\u9694\n# --label-enable \u76d1\u63a7\u5e26 com.centurylinklabs.watchtower.enable="true" \u6807\u8bb0\u7684\ndocker run -d \\\n  --name watchtower \\\n  -v $HOME/.docker/config.json:/config.json \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  v2tec/watchtower container_to_watch --debug -i 120\n')),Object(o.b)("h2",{id:"redis"},"Redis"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 6379:6379 \\\n  -v /data/redis:/data \\\n  --name redis redis redis-server --appendonly yes\n\n# \u5ba2\u6237\u7aef\ndocker run -it --link some-redis:redis --rm redis redis-cli -h redis -p 6379\n")),Object(o.b)("h2",{id:"docker-in-docker"},"Docker in Docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u4e3b\u673a\u7684 Docker\ndocker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker wener/base:bash\n\n# start dockerd\ndocker run -it --privileged -v /data/docker:/var/lib/docker --name dockerd --rm docker:dind\n# \u5ba2\u6237\u7aef\n# DOCKER_HOST=tcp://docker:2375\ndocker run --rm -it --link dockerd:docker docker info\n")),Object(o.b)("h2",{id:"mongodb"},"MongoDB"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 27017:27017 \\\n  -v /data/mongo:/data/db \\\n  --name mongo mongo\n\n# \u5ba2\u6237\u7aef\ndocker run -it --link some-mongo:mongo --rm mongo sh -c 'exec mongo \"$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test\"'\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7531\u4e8e MongoDB \u4f7f\u7528\u7684 memmap, \u901a\u8fc7 vbox \u7684\u6620\u5c04\u4e0d\u80fd\u591f\u505a\u5171\u4eab\u6570\u636e\u5377, \u4f46\u53ef\u4ee5\u4f7f\u7528 xhyve \u9a71\u52a8\u7684 docker-machine")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# mongo with mongoclient\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  --network service \\\n  -p 27017:27017 \\\n  -v $HOME/data/mongo:/data/db \\\n  --name mongo mongo\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n    --network service \\\n    -e MONGO_URL=mongodb://mongo:27017 \\\n    -p 3000:3000 \\\n    --name mongoclient mongoclient/mongoclient\n")),Object(o.b)("h2",{id:"rethinkdb"},"RethinkDB"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u914d\u7f6e\u53c2\u8003\n# https://github.com/rethinkdb/rethinkdb/blob/next/packaging/assets/config/default.conf.sample\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 8080:8080 -p 28015:28015 \\\n  -v /data/rethinkdb:/data \\\n  --name some-rethink rethinkdb\n\n# \u7ba1\u7406\u754c\u9762\n$BROWSER \"http://$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' some-rethink):8080\"\n\n# \u7aef\u53e3\u8f6c\u53d1\nssh -fNTL localhost:8080:$(ssh remote \"docker inspect --format '{{ .NetworkSettings.IPAddress }}' some-rethink\"):8080 remote\n# \u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\nxdg-open http://localhost:8080\n# \u505c\u6b62\u7aef\u53e3\u8f6c\u53d1\nkill $(lsof -t -i @localhost:8080 -sTCP:listen)\n")),Object(o.b)("h2",{id:"nexus"},"Nexus"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# nexus3 \u652f\u6301 docker\n# \u9ed8\u8ba4\u7aef\u53e3\u4e3a 8081\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -e NEXUS_CONTEXT=nexus \\\n  -p8004:8004 -p8003:8003 -p8081:8081 \\\n  -v /data/nexus:/nexus-data \\\n  --name nexus sonatype/nexus3\n\n# \u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 admin / admin123\n# \u6d4b\u8bd5\u72b6\u6001\ncurl http://localhost:8081/nexus/service/local/status\n")),Object(o.b)("h2",{id:"registry"},"Registry"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u786e\u4fdd /certs \u4e2d\u6709 domain.crt \u548c domain.key\n# \u751f\u6210\u5bc6\u7801\nmkdir auth\ndocker run --entrypoint htpasswd registry:2 -Bbn testuser testpassword > auth/htpasswd\n# \u542f\u52a8\ndocker run -d -p 5000:5000 --restart=always --name registry \\\n  -v `pwd`/auth:/auth \\\n  -e "REGISTRY_AUTH=htpasswd" \\\n  -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" \\\n  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \\\n  -v `pwd`/certs:/certs \\\n  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \\\n  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \\\n  registry:2\n\n# \u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684\u4e0d\u5b89\u5168\u7684 registry\ndocker run -d -p 5000:5000 -v `pwd`/data:/var/lib/registry --restart=always --name registry registry:2\n')),Object(o.b)("h2",{id:"odoo"},"Odoo"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Postgres\n# \u6570\u636e\u76ee\u5f55 /var/lib/postgresql/data\ndocker run -d -e POSTGRES_USER=odoo -e POSTGRES_PASSWORD=odoo --name odoo-db postgres\n\n# Odoo\n# \u914d\u7f6e\u6587\u4ef6 /etc/odoo/openerp-server.conf\n# \u6269\u5c55\u8def\u5f84 /mnt/extra-addons\n# docker run -p 8069:8069 --name odoo --link db:db -t odoo -- \u81ea\u5b9a\u4e49\u53c2\u6570\ndocker run -d -p 8069:8069 -v /data/odoo/addons:/mnt/extra-addons --name odoo --link odoo-db:db -t odoo\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u9ed8\u8ba4 openerp-server.conf")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[options]\n[options]\naddons_path = /mnt/extra-addons,/usr/lib/python2.7/dist-packages/openerp/addons\ndata_dir = /var/lib/odoo\nauto_reload = True\n; admin_passwd = admin\n; csv_internal_sep = ,\n; db_maxconn = 64\n; db_name = False\n; db_template = template1\n; dbfilter = .*\n; debug_mode = False\n; email_from = False\n; limit_memory_hard = 2684354560\n; limit_memory_soft = 2147483648\n; limit_request = 8192\n; limit_time_cpu = 60\n; limit_time_real = 120\n; list_db = True\n; log_db = False\n; log_handler = [':INFO']\n; log_level = info\n; logfile = None\n; longpolling_port = 8072\n; max_cron_threads = 2\n; osv_memory_age_limit = 1.0\n; osv_memory_count_limit = False\n; smtp_password = False\n; smtp_port = 25\n; smtp_server = localhost\n; smtp_ssl = False\n; smtp_user = False\n; workers = 0\n; xmlrpc = True\n; xmlrpc_interface =\n; xmlrpc_port = 8069\n; xmlrpcs = True\n; xmlrpcs_interface =\n; xmlrpcs_port = 8071\n")),Object(o.b)("h2",{id:"xampp"},"XAMPP"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/r/tomsik68/xampp/"}),"tomsik68/xampp")),Object(o.b)("li",{parentName:"ul"},"mysql",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"/opt/lampp/var/mysql"))),Object(o.b)("li",{parentName:"ul"},"phpadmin",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"/opt/lampp/phpmyadmin/config.inc.php",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6570\u636e\u5e93\u5bc6\u7801\u7b49")))))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"// \u5728\u7f51\u9875\u4e0a\u8f93\u5165\u8d26\u53f7\u5bc6\u7801\n$cfg['Servers'][$i]['auth_type']    = 'cookie';\n$cfg['Servers'][$i]['AllowNoPassword']     = false;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 22222:22 -p 80:80 -p 443:443 -d \\\n  -v/data/xampp/www:/www \\\n  --name xampp  tomsik68/xampp\n\n# \u91cd\u542f xampp\n/opt/lampp/lampp restart\n# \u91cd\u542f apache\n/opt/lampp/bin/httpd -k restart\n")),Object(o.b)("h2",{id:"ldap"},"ldap"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 10636:10636 -p 10389:10389 \\\n  -v /data/apacheds:/opt/apacheds/instances \\\n  --name apacheds wener/apacheds\n")),Object(o.b)("h2",{id:"postgres"},"Postgres"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n    -p 5432:5432 -e POSTGRES_PASSWORD=thisispassword \\\n    -v /data/pg:/var/lib/postgresql/data \\\n    --name postgres postgres:alpine\n")),Object(o.b)("h2",{id:"\u5176\u4ed6\u670d\u52a1"},"\u5176\u4ed6\u670d\u52a1"),Object(o.b)("h3",{id:"cow"},"cow"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl https://github.com/cyfdecyf/cow/releases/download/0.9.8/cow-linux64-0.9.8.gz -Lo cow-linux64-0.9.8.gz\ngunzip cow-linux64-0.9.8.gz\nmkdir ~/bin\nmv cow-* ~/bin/cow\nchmod +x ~/bin/cow\n\nmkdir ~/.cow\necho '\nlisten = http://127.0.0.1:7777\nproxy = socks5://127.0.0.1:8888\n' > ~/.cow/rc\n\ncd ~/.cow\nnohup cow &\n")))}i.isMDXComponent=!0}}]);