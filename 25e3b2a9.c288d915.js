(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(9),l=(t(0),t(618)),s={id:"powerdns",title:"PowerDNS"},c={id:"ops/network/tool/powerdns",title:"PowerDNS",description:"# PowerDNS",source:"@site/../tricks/ops/network/tool/powerdns.md",permalink:"/notes/ops/network/tool/powerdns",sidebar:"docs",previous:{title:"NMap",permalink:"/notes/ops/network/tool/nmap"},next:{title:"Wireshark",permalink:"/notes/ops/network/tool/wireshark"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Get Start",id:"get-start",children:[]},{value:"GEO",id:"geo",children:[]},{value:"Setting",id:"setting",children:[]},{value:"CHANGELOG",id:"changelog",children:[{value:"4.2",id:"42",children:[]},{value:"4.1",id:"41",children:[]},{value:"\u540e\u7aef",id:"\u540e\u7aef",children:[]}]},{value:"recursor",id:"recursor",children:[]},{value:"FAQ",id:"faq",children:[{value:"TSIG is provided, but domain is not secured with TSIG. Processing continues",id:"tsig-is-provided-but-domain-is-not-secured-with-tsig-processing-continues",children:[]}]}],o={rightToc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"powerdns"},"PowerDNS"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.poweradmin.org/"}),"PowerAdmin")," \u7f51\u9875\u7ba1\u7406\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"Auth server ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.powerdns.com/md/authoritative/settings/"}),"settings")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.powerdns.com/authoritative/indexTOC.html"}),"https://doc.powerdns.com/authoritative/indexTOC.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/PowerDNS/pdns"}),"PowerDNS/pdns")),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u591a\u79cd\u540e\u7aef"),Object(l.b)("li",{parentName:"ul"},"\u591a\u79cd\u590d\u5236\u65b9\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u4e0d\u9700\u8981\u91cd\u542f"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u5236\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"Supermaster",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f53\u4e3a\u4e00\u4e2a\u8282\u70b9\u8bbe\u7f6e\u4e86 Supermaster \u540e,\u5728\u4e3b\u8282\u70b9\u4e0a\u521b\u5efa zone,\u6240\u6709\u5b50\u8282\u70b9\u4f1a\u81ea\u52a8\u521b\u5efa\u76f8\u5e94\u7684 zone, \u5e76\u53d1\u8d77\u4e00\u4e2a AXFR \u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"bind \u4e2d\u9700\u8981\u624b\u52a8\u4e3a\u6240\u6709\u5b50\u8282\u70b9\u6dfb\u52a0 zone"))))),Object(l.b)("li",{parentName:"ul"},"NOTES",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f53\u627e\u5230\u4e00\u6761\u5339\u914d\u7684\u540e\u4e0d\u4f1a\u518d\u5c1d\u8bd5\u4f7f\u7528\u901a\u914d\u7b26\u67e5\u627e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 *.example.org A 192.168.1.1, test.example.org TXT Test, \u5f53\u67e5\u8be2 ANY test.example.org \u53ea\u4f1a\u8fd4\u56de TXT"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.powerdns.com/md/appendix/backend-writers-guide/"}),"Backend writers' guide")))),Object(l.b)("li",{parentName:"ul"},"pdnsutil",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57df\u540d\u7ba1\u7406\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u4fee\u6539 DB - \u53ef\u4ee5\u8fdc\u7a0b\u4f7f\u7528")))),Object(l.b)("p",null,"dnsdist is a DNS loadbalancer from the people behind PowerDNS that balances DNS packets based on rules. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# macOS \u5b89\u88c5\nbrew install pdns --with-postgresql --with-remote\n\n# SQLite3\n# https://doc.powerdns.com/md/authoritative/backend-generic-sqlite/\n# \u5c06 Schema \u4fdd\u5b58\u5230 schema.sqlite3\nsqlite3 powerdns.sqlite .read schema.sqlite3\n# \u5728\u524d\u53f0\u542f\u52a8, \u4e4b\u6240\u4ee5\u4fee\u6539 \u7aef\u53e3\u548c socket-dir \u662f\u56e0\u4e3a\u53ef\u80fd\u4f1a\u6ca1\u6709\u6743\u9650\npdns_server --daemon=no --launch=gsqlite3 --local-port=5300 --socket-dir=`pwd`/socket\n# \u5c06\u914d\u7f6e\u6587\u4ef6\u5199\u5165\u5230 pdns.conf\n# launch=gsqlite3\n# local-port=5300\n# socket-dir=./socket\n# gsqlite3-database=powerdns.sqlite\n# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\npdns_server --daemon=yes --config-dir=.\n\npdns_server --daemon=no --launch=remote --local-port=5300 --socket-dir=`pwd`/socket\n\n# pdns_control \u7528\u4e8e\u64cd\u4f5c\u5b9e\u4f8b\n# \u7b80\u5316 pdns_control \u64cd\u4f5c\nalias pc="pdns_control --config-dir=`pwd`"\n# \u9000\u51fa\u670d\u52a1\npc quite\n# \u83b7\u53d6\u5f53\u524d\u7684\u914d\u7f6e\npc current-config\n\n# pdnsutil \u7528\u4e8e\u64cd\u4f5c\u540e\u7aef\u6570\u636e, \u5373\u4fbf\u6ca1\u6709\u542f\u52a8 server \u4e5f\u53ef\u4ee5\n# \u7b80\u5316 pdnsutil \u64cd\u4f5c\nalias pu="pdnsutil --config-dir=`pwd`"\n# \u6dfb\u52a0\u7528\u4e8e\u6d4b\u8bd5\u7684\u8bb0\u5f55\npu add-record i.wener.me @ A 127.0.0.1\npu add-record i.wener.me dev A 127.0.0.1\n\n# \u6d4b\u8bd5\u6dfb\u52a0\u7684\u8bb0\u5f55\ndig @127.0.0.1 -p 5300 dev.i.wener.me\n\n# \u5e38\u7528\u64cd\u4f5c\n# \u521b\u5efa\npdnsutil create-zone mydomain.com\n# \u68c0\u6d4b\u73b0\u6709\u7684\u95ee\u9898\npdnsutil check-zone mydomain.com\n# add-record ZONE NAME TYPE [ttl] content\n\n\n# Playground\ndocker run --rm -it -p 5353:53 --entrypoint bash wener/pdns:edge\n\n')),Object(l.b)("h2",{id:"get-start"},"Get Start"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'docker run --rm -it -p 80:80 -p 53:53 -p 53:53/udp -v $PWD:/host -w /host wener/dns bash\n\n# \u7528\u4e8e\u63a5\u53e3\u8bf7\u6c42\nAPI_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc \'a-zA-Z0-9\' | head -c 32)\nWEBSERVER_PASSWORD=$(cat /dev/urandom | env LC_CTYPE=C tr -dc \'a-zA-Z0-9\' | head -c 32)\n# /etc/pdns/pdns.conf \u6807\u51c6\u914d\u7f6e\u76ee\u5f55\ncat <<EOF | tee pdns.conf > /etc/pdns/pdns.conf\n# backend\nlaunch=gsqlite3\ngsqlite3-database=$PWD/pdns.sqlite\n# handle dnssec\ngsqlite3-dnssec\n\n# server\nlocal-port=53\nlocal-address=0.0.0.0\ndaemon=yes\nguardian=yes\n\n# dyndns\ndnsupdate=yes\nallow-dnsupdate-from=\n\n# web/api\nwebserver=yes\nwebserver-address=0.0.0.0\nwebserver-password=$WEBSERVER_PASSWORD\nwebserver-loglevel=normal\nwebserver-port=80\n\napi=yes\napi-key=$API_KEY\n\n# soa default\ndefault-soa-name=ns1.wener.me\ndefault-soa-edit=\ndefault-soa-edit-signed=\ndefault-soa-mail=\nsoa-expire-default=604800\nsoa-minimum-ttl=3600\nsoa-refresh-default=10800\nsoa-retry-default=3600\nEOF\n# \u521d\u59cb\u5316 sqlite\ncurl -LO https://raw.githubusercontent.com/PowerDNS/pdns/master/modules/gsqlite3backend/schema.sqlite3.sql\nsqlite3 pdns.sqlite ".read schema.sqlite3.sql"\n\n# \u524d\u53f0\u542f\u52a8\npdns_server --daemon=no\n\n# \u4ece\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd\u64cd\u4f5c\n\n# \u91cd\u542f - \u4fee\u6539\u914d\u7f6e\u540e\u53ef\u4ee5\u4f7f\u7528\npdns_control cycle\n\n# \u57df\u540d\u7ba1\u7406\npdnsutil create-zone wener.me\n# \u6dfb\u52a0\u8bb0\u5f55 - ns1.wener.tech \u5b9e\u9645\u4e0a\u5c31\u662f\u9700\u8981\u6307\u5411\u5f53\u524d\u7684\u670d\u52a1\u5668\npdnsutil add-record wener.me @ NS ns1.wener.tech\npdnsutil add-record wener.me @ A 127.0.0.1\npdnsutil add-record wener.me app A 127.0.0.1\n# \u68c0\u67e5\npdnsutil check-all-zones\n# \u6240\u6709\u7684\u8bb0\u5f55\nsqlite3 pdns.sqlite "select * from records"\n\n# \u5c06\u4e09\u7ea7\u57df\u540d\u4f5c\u4e3a zone\npdnsutil create-zone svc.wener.me\npdnsutil add-record svc.wener.me @ NS ns1.wener.tech\npdnsutil add-record svc.wener.me @ A 127.0.0.1\n# \u5728\u4e0a\u7ea7\u6dfb\u52a0 NS \u8bb0\u5f55\npdnsutil add-record wener.me svc NS ns1.wener.tech\n\n# NSUPDATE\n# --------------------\n# \u4e0a\u7ea7\u542f\u7528 TSIG\npdnsutil activate-tsig-key wener.me admin master\n# \u4e0b\u7ea7\u542f\u7528 TSIG slave\npdnsutil activate-tsig-key svc.wener.me admin slave\n# \u5355\u57df\u540d\u914d\u7f6e\npdnsutil generate-tsig-key svc-admin hmac-md5\npdnsutil set-meta svc.wener.me TSIG-ALLOW-DNSUPDATE svc-admin\npdnsutil set-meta svc.wener.me ALLOW-DNSUPDATE-FROM 0.0.0.0/0\n\n# \u67e5\u770b\npdnsutil list-tsig-keys\n# \u542f\u7528\u7684\u914d\u7f6e\u4fe1\u606f\nsqlite3 pdns.sqlite "select * from domainmetadata"\n\nSECRET=$(sqlite3 pdns.sqlite "select secret from tsigkeys where name=\'svc-admin\'")\n# DNS UPDATE\n# \u9ed8\u8ba4\u53ea\u652f\u6301 hmac-md5\nnsupdate <<EOF\nserver 127.0.0.1 53\nzone svc.wener.me\nupdate add web.svc.wener.me 3600 A 1.2.3.4\nkey svc-admin $SECRET\nsend\nEOF\n# \u6cdb\u57df\u540d\u4fee\u6539\nnsupdate <<EOF\nserver 127.0.0.1 53\nzone svc.wener.me\nupdate add *.svc.wener.me 3600 A 4.3.2.1\nkey svc-admin $SECRET\nsend\nEOF\n\n# \u4fee\u6539\u4e0a\u7ea7\u57df\u540d\u4f1a\u5931\u8d25\nnsupdate <<EOF\nserver 127.0.0.1 53\nzone wener.me\nupdate add web.wener.me 3600 A 1.2.3.4\nkey svc-admin $SECRET\nsend\nEOF\n\n# \u67e5\u770b\u6240\u6709\u57df\u540d\u4fe1\u606f\ndig -t axfr svc.wener.me @127.0.0.1\n\n# DNSSEC\n# --------------------\npdnsutil secure-zone wener.me\npdnsutil secure-zone svc.wener.me\n\n# \u8f93\u51fa\u7684 DS \u6dfb\u52a0\u5230\u4e0a\u7ea7\npdnsutil show-zone svc.wener.me\n\n# \u5173\u95ed - \u8bb0\u5f97\u5220\u9664\u4e0a\u7ea7\u7684 DS\npdnsutil disable-dnssec wener.me\n')),Object(l.b)("h2",{id:"geo"},"GEO"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.powerdns.com/md/authoritative/backend-geo/"}),"https://doc.powerdns.com/md/authoritative/backend-geo/")),Object(l.b)("h2",{id:"setting"},"Setting"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.powerdns.com/authoritative/settings.html"}),"https://doc.powerdns.com/authoritative/settings.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"# SQLite\n# ==========\nlaunch=gsqlite3\ngsqlite3-database=powerdns.sqlite\n\n# PostgreSQL\n# ==========\nlaunch=gpgsql\ngpgsql-host=127.0.0.1\ngpgsql-port=5432\ngpgsql-dbname=mydb\ngpgsql-user=pdns\ngpgsql-password=PASSWORD\n# \u53ef\u4ee5\u4fee\u6539\u4e3a\u4f7f\u7528\u5176\u4ed6 schema\ngpgsql-extra-connection-parameters=options='-csearch_path=public' sslmode=disable\n\n")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/PowerDNS/pdns/master/docs/http-api/swagger/authoritative-api-swagger.yaml"}),"https://raw.githubusercontent.com/PowerDNS/pdns/master/docs/http-api/swagger/authoritative-api-swagger.yaml"),"\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://petstore.swagger.io/"}),"http://petstore.swagger.io/")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# server id \u4e3a hostname, \u5927\u591a\u6570\u65f6\u5019\u4e3a localhost\ncurl -v -H 'X-API-Key: KEY' http://127.0.0.1:8001/api/v1/servers/localhost | jq .\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"# \u540e\u53f0\u8fd0\u884c\ndaemon=no\n\n# \u9ed8\u8ba4\u4e3a hostname\nserver-id=localhost\n\n# \u662f\u5426\u76d1\u542c TCP \u7aef\u53e3\ndisable-tcp=no\n# \u662f\u5426\u542f\u7528 RFC2136/DNS Update\ndnsupdate=no\n\n# \u5305\u542b\u5176\u4ed6\u914d\u7f6e\u76ee\u5f55\ninclude-dir=\n# \u52a0\u8f7d\u6a21\u5757, \u9017\u53f7\u5206\u9694\nload-modules=\n# \u6a21\u5757\u5730\u5740\n# \u7f16\u8bd1\u65f6 PKGLIBDIR \u6307\u5b9a\nmodule-dir=\n# \u4e0d\u8981\u5c1d\u8bd5\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\nno-config=no\n\nlocal-ipv6=\n# \u672c\u5730\u76d1\u542c\u5730\u5740\nlocal-address=0.0.0.0\nlocal-port=53\n\ntcp-control-address=\ntcp-control-port=53000\ntcp-control-range=\ntcp-control-secret=\n\n# dig chaos txt version.bind @pdns.ip.address\n# \u53ef\u9009 anonymous, powerdns, full\nversion-string=full\n\n# Linux 3.9 SO_REUSEPORT\nreuseport=no\n# fast open \u7684\u961f\u5217\u5927\u5c0f, 0 \u4e3a\u7981\u7528\ntcp-fast-open=0\n# LOCALSTATEDIR\nsocket-dir=/var/run\n\n# \u7f13\u5b58\u6570\u636e\u5e93\u57df\u540d\u6570\u636e\u7684\u65f6\u95f4\ndomain-metadata-cache-ttl=60\n\n# Server\n# ==========\n# \u5b88\u62a4\u8005\u6a21\u5f0f - \u5f53\u4e0d\u901a\u8fc7 supervisor \u542f\u52a8\u65f6\u5efa\u8bae\u5f00\u542f\nguardian=yes\n\n# SOA\n# ==========\ndefault-soa-name=a.misconfigured.powerdns.server\ndefault-soa-edit=\ndefault-soa-edit-signed=\ndefault-soa-mail=\nsoa-expire-default=604800\nsoa-minimum-ttl=3600\nsoa-refresh-default=10800\nsoa-retry-default=3600\n\n# Logging\n# ==========\ndisable-syslog=yes\n# syslog \u7684\u7f16\u53f7\n# \u6570\u5b57, \u4f8b\u5982 1 \u4f1a\u8bb0\u5f55\u65e5\u5fd7\u5230 local1\nlogging-facility=\n# \u4fe1\u606f\u60f3\u5e72\u7684 DNS \u4e0d\u4f1a\u53d1\u9001\u5230 syslog, \u63d0\u5347\u6027\u80fd\nlog-dns-details=no\n# \u4f1a\u8bb0\u5f55\u6240\u6709 DNS \u67e5\u8be2\u8bf7\u6c42, \u4f1a\u4ea7\u751f\u8f83\u591a\u65e5\u5fd7, \u5efa\u8bae\u53ea\u7528\u4e8e\u8c03\u8bd5\nlog-dns-queries=no\nlog-timestamp=yes\n# \u5efa\u8bae\u4e0d\u8981\u4f4e\u4e8e 3\nloglevel=4\n# \u63d0\u793a\u540e\u7aef\u5bf9\u67e5\u8be2\u8fdb\u884c\u65e5\u5fd7\nquery-logging=ni\n\n# \u9ed8\u8ba4 TTL\ndefault-ttl=3600\n\n# \u7f13\u5b58\u5e26\u7ed3\u679c\u7684\u67e5\u8be2\u65f6\u95f4\nquery-cache-ttl=20\n\n# \u9012\u5f52\u67e5\u8be2\u7684\u7f13\u5b58\u4e8b\u4ef6\nrecursive-cache-ttl=10\n\n# API/Webserver\n# ==========\n# \u9690\u6027\u7684\u6307\u5b9a webserver\napi=yes\napi-key=KEY\napi-readonly=no\n\n# \u7528\u4e8e\u76d1\u63a7\u7684 web \u670d\u52a1\nwebserver=no\nwebserver-address=127.0.0.1\nwebserver-allow-from=127.0.0.1,::1\nwebserver-password=\nwebserver-port=8001\nwebserver-print-arguments=no\n\n\n# Backend\n# =========\n# \u542f\u52a8\u7684\u540e\u7aef\u540d\u5b57\n# launch=bind,gmysql,remote\n# launch=gmysql,gmysql:server2 \u4e24\u4e2a mysql, \u7b2c\u4e8c\u4e2a\u7684\u914d\u7f6e\u4e3a gmysql-server2-host\nlaunch=\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"pdns.conf")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"cache-ttl=60\nchroot=/var/empty\nconfig-dir=/etc/pdns\ndaemon=yes\ndistributor-threads=1\nguardian=yes\nlocal-port=53\nloglevel=3\nmodule-dir=/usr/lib/pdns/pdns\nnegquery-cache-ttl=60\nsetgid=pdns\nsetuid=pdns\nsocket-dir=/var/run\nuse-logfile=no\nwebserver=no\nwildcards=yes\n")),Object(l.b)("h2",{id:"changelog"},"CHANGELOG"),Object(l.b)("h3",{id:"42"},"4.2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.powerdns.com/authoritative/changelog/4.2.html"}),"changelog")," / ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.powerdns.com/2019/08/30/powerdns-authoritative-server-4-2-0/"}),"\u53d1\u5e03\u7533\u660e")),Object(l.b)("li",{parentName:"ul"},"LUA \u8bb0\u5f55\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"LMDB \u540e\u7aef\u652f\u6301")),Object(l.b)("h3",{id:"41"},"4.1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.powerdns.com/authoritative/changelog/4.1.html"}),"changelog"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"api \u6dfb\u52a0 metadata \u63a5\u53e3")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u79fb\u9664\u4e86 as \u4e2d\u7684 recursor"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u901a\u8fc7 recursor \u8f6c\u53d1\u5230 as"),Object(l.b)("li",{parentName:"ol"},"\u901a\u8fc7 dnsdist \u8d1f\u8f7d\u5747\u8861\u57fa\u4e8e\u89c4\u5219\u8fdb\u884c\u5206\u53d1"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.powerdns.com/authoritative/guides/recursion.html"}),"Migrating from using recursion on the Authoritative Server to using a Recursor")))),Object(l.b)("h3",{id:"\u540e\u7aef"},"\u540e\u7aef"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u540e\u7aef\u6a21\u5757",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sql",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sqlite"),Object(l.b)("li",{parentName:"ul"},"oracle"),Object(l.b)("li",{parentName:"ul"},"mysql"),Object(l.b)("li",{parentName:"ul"},"pgsql"),Object(l.b)("li",{parentName:"ul"},"odbc"),Object(l.b)("li",{parentName:"ul"},"opendb"))),Object(l.b)("li",{parentName:"ul"},"bind"),Object(l.b)("li",{parentName:"ul"},"tinydns"),Object(l.b)("li",{parentName:"ul"},"remote"),Object(l.b)("li",{parentName:"ul"},"pipe"),Object(l.b)("li",{parentName:"ul"},"lua"),Object(l.b)("li",{parentName:"ul"},"ldap"))),Object(l.b)("li",{parentName:"ul"},"\u540e\u7aef\u65b9\u6cd5\u5206\u7c7b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"minimal",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"list",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u652f\u6301 AXFR"))),Object(l.b)("li",{parentName:"ul"},"lookup"),Object(l.b)("li",{parentName:"ul"},"get"),Object(l.b)("li",{parentName:"ul"},"getSOA"))),Object(l.b)("li",{parentName:"ul"},"master",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"getUpdatedMasters"),Object(l.b)("li",{parentName:"ul"},"setNotifed"))),Object(l.b)("li",{parentName:"ul"},"slave",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"getDomainInfo"),Object(l.b)("li",{parentName:"ul"},"isMaster"),Object(l.b)("li",{parentName:"ul"},"getUnfreshSlaveInfos"),Object(l.b)("li",{parentName:"ul"},"setFresh"),Object(l.b)("li",{parentName:"ul"},"startTransaction"),Object(l.b)("li",{parentName:"ul"},"commitTransaction"),Object(l.b)("li",{parentName:"ul"},"abortTransaction"),Object(l.b)("li",{parentName:"ul"},"feedRecord"))),Object(l.b)("li",{parentName:"ul"},"supermaster",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"superMasterBackend"),Object(l.b)("li",{parentName:"ul"},"createSlaveDomain"))),Object(l.b)("li",{parentName:"ul"},"dnssec"),Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6"))),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u63a5\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BackendFactory"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DNSBackend")," \u7684\u5de5\u5382\u7c7b"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DNSBackend"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u540e\u7aef\u63a5\u53e3"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"XXXLoader"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9759\u6001\u521d\u59cb\u5316\u7c7b"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u6ce8\u518c\u5de5\u5382\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BackendMakers().report(new XXXFactory)")))))),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0 ",Object(l.b)("inlineCode",{parentName:"li"},"pdns/dnsbackend.hh")," \u4e2d\u7684 DNSBackend"),Object(l.b)("li",{parentName:"ul"},"AXFR")),Object(l.b)("h2",{id:"recursor"},"recursor"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.powerdns.com/md/recursor/settings/"}),"https://doc.powerdns.com/md/recursor/settings/")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# macOS \u5b89\u88c5\nbrew install pdnsrec\n\n# \u751f\u6210\u914d\u7f6e\u6587\u4ef6\npdns_recursor --config > recursor.conf\n\n# \u6d4b\u8bd5\u672c\u5730\u542f\u52a8\npdns_recursor --daemon=no --local-port=5003 --socket-dir=$PWD --config-dir=$PWD\n\n# \u542f\u52a8 53 \u7aef\u53e3\u9700\u8981 root\n# LOCALSTATEDIR \u63a7\u5236 socket-dir\nsudo LOCALSTATEDIR=$PWD pdns_recursor --config-dir=$PWD\n\nsudo rec_control --config-dir=$PWD --socket-dir=$PWD ping\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"# ==========\n# simple\n# ==========\nallow-from=0.0.0.0/0\ndaemon=no\nlocal-address=127.0.0.1\nlocal-port=53\nreuseport=yes\nforward-zones=.=8.8.8.8\n\n# ==========\n# webserver\n# ==========\n# \nwebserver=yes\nwebserver-port=8082\napi-key=key\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"tsig-is-provided-but-domain-is-not-secured-with-tsig-processing-continues"},"TSIG is provided, but domain is not secured with TSIG. Processing continues"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 nsupdate \u4fee\u6539 - \u64cd\u4f5c\u4f1a\u6210\u529f"),Object(l.b)("li",{parentName:"ul"},"zone \u5141\u8bb8 tsig - \u4f46\u672a\u901a\u8fc7 tsig \u52a0\u5bc6")))}p.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||l;return t?r.a.createElement(m,c(c({ref:n},o),{},{components:t})):r.a.createElement(m,c({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var o=2;o<l;o++)s[o]=t[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);