(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),s=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),d=function(e){var n=s.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return s.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},u=s.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return t?s.a.createElement(m,l(l({ref:n},c),{},{components:t})):s.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},671:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return d}));var a=t(3),s=t(8),i=(t(0),t(1114)),r={title:"Asterisk \u914d\u7f6e"},l={unversionedId:"voip/asterisk/asterisk-conf",id:"voip/asterisk/asterisk-conf",isDocsHomePage:!1,title:"Asterisk \u914d\u7f6e",description:"\u76ee\u5f55",source:"@site/notes/voip/asterisk/asterisk-conf.md",slug:"/voip/asterisk/asterisk-conf",permalink:"/notes/voip/asterisk/asterisk-conf",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-conf.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u7f16\u7801",permalink:"/notes/voip/asterisk/codec"},next:{title:"Asterisk Debian",permalink:"/notes/voip/asterisk/asterisk-debian"}},o=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[]}]},{value:"asterisk.conf",id:"asteriskconf",children:[]},{value:"modules.conf",id:"modulesconf",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]},{value:"res_pgsql.conf",id:"res_pgsqlconf",children:[]},{value:"calender",id:"calender",children:[]},{value:"cdr",id:"cdr",children:[{value:"cdr.conf",id:"cdrconf",children:[]},{value:"cdr_manager.conf",id:"cdr_managerconf",children:[]},{value:"cdr_pgsql.conf",id:"cdr_pgsqlconf",children:[]},{value:"cdr_beanstalkd.conf",id:"cdr_beanstalkdconf",children:[]}]},{value:"cel",id:"cel",children:[{value:"cel.conf",id:"celconf",children:[]},{value:"cel_pgsql.conf",id:"cel_pgsqlconf",children:[]}]},{value:"sorcery.conf",id:"sorceryconf",children:[]},{value:"extconfig.conf",id:"extconfigconf",children:[]},{value:"http.conf",id:"httpconf",children:[]},{value:"ari.conf",id:"ariconf",children:[]},{value:"pjsip",id:"pjsip",children:[{value:"pjsip.conf",id:"pjsipconf",children:[]}]},{value:"extension",id:"extension",children:[{value:"extensions.conf",id:"extensionsconf",children:[]}]},{value:"PG",id:"pg",children:[{value:"cdr/cel",id:"cdrcel",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"dtmfmode",id:"dtmfmode",children:[]}]}],c={toc:o};function d(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Directory+and+File+Structure"},"\u6587\u4ef6\u548c\u76ee\u5f55\u7ed3\u6784")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astetcdir => /etc/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7528\u4e8e\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},".conf")," \u4f46\u4e5f\u5305\u542b ",Object(i.b)("inlineCode",{parentName:"li"},".lua")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},".ael")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astmoddir => /usr/lib/asterisk/modules"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6a21\u5757\u76ee\u5f55"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astvarlibdir => /var/lib/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u751f\u6210\u7684\u76ee\u5f55"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astdbdir => /var/lib/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5185\u90e8\u6570\u636e\u5e93"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/SQLite3+astdb+back-end"},"astdb.sqlite3")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astkeydir => /var/lib/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5bc6\u94a5\uff0c\u751f\u6210 ",Object(i.b)("inlineCode",{parentName:"li"},"keys")," \u5b50\u76ee\u5f55 - \u53ef\u80fd\u4f1a\u9501\u5b9a"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astdatadir => /var/lib/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u6570\u636e\u76ee\u5f55"),Object(i.b)("li",{parentName:"ul"},"sounds \u5b58\u50a8\u58f0\u97f3"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astagidir => /var/lib/asterisk/agi-bin"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8 AGI - Asterisk Gateway Interface"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astspooldir => /var/spool/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5404\u79cd\u6a21\u5757\u7684 spool \u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u5e38\u89c1\u7684\u5b50\u76ee\u5f55",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"dictate"),Object(i.b)("li",{parentName:"ul"},"meetme"),Object(i.b)("li",{parentName:"ul"},"monitor"),Object(i.b)("li",{parentName:"ul"},"outgoing"),Object(i.b)("li",{parentName:"ul"},"recording"),Object(i.b)("li",{parentName:"ul"},"system"),Object(i.b)("li",{parentName:"ul"},"tmp"),Object(i.b)("li",{parentName:"ul"},"voicemail"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astrundir => /var/run/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd0\u884c\u76ee\u5f55"),Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8 ",Object(i.b)("inlineCode",{parentName:"li"},"asterisk.ctl")," ",Object(i.b)("inlineCode",{parentName:"li"},"asterisk.pid")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astlogdir => /var/log/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(i.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Logging"},"\u65e5\u5fd7")),Object(i.b)("li",{parentName:"ul"},"/var/log/asterisk/message"),Object(i.b)("li",{parentName:"ul"},"/var/log/asterisk/queue"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"astsbindir => /usr/sbin"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u53ef\u6267\u884c\u6587\u4ef6")))),Object(i.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u76ee\u5f55\u89e3\u91ca")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+Configuration+Files"},"https://wiki.asterisk.org/wiki/display/AST/Asterisk+Configuration+Files"),"\nexecincludes=yes"),Object(i.b)("p",null,"asterisk.conf\nmodules.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[section-name]\nsetting=true\n#include otherconfig.conf      ; include another configuration file\n#include my_other_files/*.conf ; include all .conf files in the subdirectory my_other_files\n#tryinclude mytest/*.conf\n#exec otherprogram             ; include output of otherprogram\n\n\n#exec /usr/bin/curl -s http://example.com/mystuff > /etc/asterisk/mystuff\n#include mystuff\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/asterisk/asterisk/tree/master/configs/samples"},"https://github.com/asterisk/asterisk/tree/master/configs/samples"),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/asterisk/asterisk/tree/master/configs/basic-pbx"},"https://github.com/asterisk/asterisk/tree/master/configs/basic-pbx")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/asterisk/asterisk/tree/master/contrib/ast-db-manage"},"https://github.com/asterisk/asterisk/tree/master/contrib/ast-db-manage")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it --name ast wener/asterisk:full\n\n# \u62f7\u8d1d\u51fa\u914d\u7f6e\u6587\u4ef6\ndocker cp ast:/etc/asterisk etc\ndocker cp ast:/etc/dahdi etc\n# \u62f7\u8d1d\u51fa\u5f55\u97f3\u6587\u4ef6\ndocker cp ast:/var/lib/asterisk/moh var/lib/asterisk/moh\ndocker cp ast:/var/lib/asterisk/sounds var/lib/asterisk/sounds\n\n# \u62f7\u8d1d\u5b8c\u6210\u540e\u53ef\u4ee5\u4f7f\u7528\u4e3b\u673a\u4e0a\u7684\u914d\u7f6e\u542f\u52a8 - \u5e76\u6dfb\u52a0\u5bbf\u4e3b\u4e3b\u673a\u76ee\u5f55\u548c DB\n# 16.6 - PG 12 \u6709\u517c\u5bb9\u95ee\u9898\n# https://github.com/asterisk/asterisk/commit/52ade18420b346449dff40d6bdb071444cf29e2d\ndocker run -d \\\n  -p 5432:5432 -v $PWD/pg:/var/lib/postgresql/data \\\n  -e POSTGRES_USER=ast -e POSTGRES_PASSWORD=ast -e POSTGRES_DB=ast \\\n  --name ast-pg postgres:11-alpine\n\ndocker run --rm -it \\\n  -v $PWD/etc/asterisk:/etc/asterisk \\\n  -v $PWD/etc/dahdi:/etc/dahdi \\\n  -v $PWD:/host \\\n  --link ast-pg:ast-pg \\\n  --name ast wener/asterisk:full\n\n# \u542f\u52a8\u670d\u52a1 - \u53ef\u4ee5\u4e86\u89e3\u5404\u79cd\u547d\u4ee4\nasterisk -cvvv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u52a0\u8f7d\u7684\u6a21\u5757 - \u53ef\u4ee5\u9010\u6b65\u4e86\u89e3\u5404\u4e2a\u6a21\u5757\nmodule show\n\ncore restart\n\n# pg \u76f8\u5173\u6a21\u5757 - cdr cel config\nmodule show like pgsql\n")),Object(i.b)("h2",{id:"asteriskconf"},"asterisk.conf"),Object(i.b)("p",null,"\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"# \u76ee\u5f55\u914d\u7f6e\n[directories](!)\n# \u914d\u7f6e\u76ee\u5f55\nastetcdir => /etc/asterisk\n# \u6a21\u5757\u76ee\u5f55\nastmoddir => /usr/lib/asterisk/modules\nastvarlibdir => /var/lib/asterisk\nastdbdir => /var/lib/asterisk\nastkeydir => /var/lib/asterisk\nastdatadir => /var/lib/asterisk\nastagidir => /var/lib/asterisk/agi-bin\nastspooldir => /var/spool/asterisk\nastrundir => /var/run/asterisk\nastlogdir => /var/log/asterisk\nastsbindir => /usr/sbin\n")),Object(i.b)("h2",{id:"modulesconf"},"modules.conf"),Object(i.b)("p",null,"\u6a21\u5757\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[modules]\n; \u662f\u5426\u81ea\u52a8\u52a0\u8f7d - \u521d\u5b66\u5efa\u8bae\u81ea\u52a8\u52a0\u8f7d\uff0c\u5f53\u914d\u7f6e\u786e\u5b9a\u540e\u5efa\u8bae\u6dfb\u52a0 noload\nautoload=yes\n\n; \u5fc5\u987b\u52a0\u8f7d\nrequire = chan_pjsip.so\n\n; \u52a0\u8f7d\nload => res_musiconhold.so\n\n; \u4e0d\u52a0\u8f7d\nnoload => chan_alsa.so\n;noload => chan_oss.so\nnoload => chan_console.so\n")),Object(i.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[modules]\n; \u4ee5\u524d\u9700\u8981 preload - \u73b0\u5728\u4e0d\u9700\u8981\u4e86\nload => res_config_pgsql.so\nload => res_realtime.so\n\nautoload=yes\n\n; \u4f7f\u7528 pg \u6570\u636e\u5e93 - res_pgsql.conf cdr_pgsql.conf cel_pgsql.conf\nnoload => res_odbc.so\nnoload => res_config_odbc.so\nnoload => res_config_sqlite3.so\nnoload => res_odbc_transaction.so\n\nnoload => func_odbc.so\n\nnoload => cel_tds.so\nnoload => cel_odbc.so\nnoload => cel_sqlite3_custom.so\nnoload => cel_custom.so\n\nnoload => cdr_tds.so\nnoload => cdr_sqlite3_custom.so\nnoload => cdr_odbc.so\nnoload => cdr_mysql.so\nnoload => cdr_adaptive_odbc.so\nnoload => cdr_csv.so\nnoload => cdr_custom.so\n\n; \u4f7f\u7528 pgsip\nnoload => chan_mobile.so\nnoload => chan_dongle.so\nnoload => chan_skinny.so\nnoload => chan_phone.so\nnoload => chan_unistim.so\nnoload => chan_mgcp.so\nnoload => chan_sip.so\n\n; \u63a8\u8350\u4f7f\u7528 alsa - docker \u4e0b\u53ea\u80fd\u4f7f\u7528 oss\nnoload => chan_console.so\nnoload => chan_alsa.so\n; \u5982\u679c\u8fd0\u884c\u73af\u5883\u5e76\u4e0d\u80fd\u8fde\u63a5\u8033\u673a\u7b49\uff0c\u53ef\u4ee5\u8003\u8651\u76f4\u63a5\u5173\u95ed\nnoload => chan_oss.so\n\n; DAHDi\nnoload => chan_dahdi.so\nnoload => codec_dahdi.so\nnoload => res_timing_dahdi\n\n; \u4e0d\u9700\u8981 pbx_*\nnoload => pbx_dundi.so\nnoload => pbx_gtkconsole.so\nnoload => pbx_ael.so\n\nnoload => res_hep_rtcp.so\nnoload => res_hep_pjsip.so\n\n; \u4e0d\u9700\u8981\u7684\u4e00\u4e9b\u6a21\u5757\nnoload => res_phoneprov.so\nnoload => res_pjsip_phoneprov_provider.so\nnoload => res_smdi.so\n")),Object(i.b)("h2",{id:"res_pgsqlconf"},"res_pgsql.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[general]\ndbhost=ast-pg\ndbport=5432\ndbname=ast\ndbuser=ast\ndbpass=ast\n; \u5982\u679c\u914d\u7f6e\u5217\u4e0d\u5b58\u5728\n; warn \u8b66\u544a createclose \u521b\u5efa\u5c3d\u91cf\u7c7b\u4f3c\u7684\u5217 createchar \u53ea\u521b\u5efa char \u5217\nrequirements=warn\n")),Object(i.b)("h2",{id:"calender"},"calender"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.voip-info.org/asterisk-config-alsaconf/"},"https://www.voip-info.org/asterisk-config-alsaconf/"),"\nalsa.conf"),Object(i.b)("h2",{id:"cdr"},"cdr"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u547c\u53eb\u8be6\u7ec6\u8bb0\u5f55")),Object(i.b)("h3",{id:"cdrconf"},"cdr.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[general]\nenable=yes\n\n; \u662f\u5426\u8bb0\u5f55\u672a\u5e94\u7b54\nunanswered = yes\n\n; \u662f\u5426\u8bb0\u5f55\u88ab\u62e5\u585e\u547c\u53eb\ncongestion = yes\n\n; \u662f\u5426\u5728 h/hangup \u4e4b\u524d\u7ed3\u675f CDR - \u9ed8\u8ba4\u7b49\u5f85\u6240\u6709\u6269\u5c55\u6267\u884c\u5b8c\u6210\nendbeforehexten=no\n\n; \u65e5\u5fd7\u8bb0\u5f55\u4f7f\u7528 billsec \u5b57\u6bb5 - \u6302\u65ad\u65f6\u95f4\u51cf\u5e94\u7b54\u65f6\u95f4 - \u79d2\u7ea7\n; \u7cfb\u7edf\u5185\u90e8\u4f7f\u7528 \u5fae\u79d2\u548c\u79d2 - \u5f00\u542f\u8be5\u914d\u7f6e\u4f1a\u5f71\u54cd\u5fae\u79d2\u8ba1\u7b97 round up - \u4e00\u822c\u4f7f\u7528\u5f71\u54cd\u4e0d\u5927\n;initiatedseconds=no\n\n; \u6279\u91cf - \u9ed8\u8ba4\u672a\u5f00\u542f\n; \u5728 kill -9 \u53ef\u80fd\u4e22\u5931\u6570\u636e\n;batch=no\n\n; \u6279\u5927\u5c0f\n;size=100\n\n; \u6279\u7f13\u51b2\u6700\u5927\u65f6\u95f4 - \u79d2 - \u9ed8\u8ba4 5 \u5206\u949f\n;time=300\n\n; \u9ed8\u8ba4\u5728\u8c03\u5ea6\u7ebf\u7a0b\u63d0\u4ea4 - \u5982\u679c\u6279\u8f83\u5927\u8bbe\u7f6e\u4e3a no \u5219\u5728\u5728\u989d\u5916\u7ebf\u7a0b\u8fdb\u884c\u63d0\u4ea4\n;scheduleronly=no\n\n; \u505c\u6b62\u670d\u52a1\u65f6\u5b89\u5168\u5199\u5165\u65e5\u5fd7 - cdr status \u53ef\u4ee5\u770b\u5f53\u524d\u7684\u63d0\u4ea4\u60c5\u51b5\n;safeshutdown=yes\n")),Object(i.b)("h3",{id:"cdr_managerconf"},"cdr_manager.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},'[general]\nenabled = no\n\n; \u5b9a\u4e49\u989d\u5916\u7684\u5305\u542b\u5728\u7ba1\u7406\u4e8b\u4ef6\u4e2d\u7684 KV \u503c\n; "varname => label" \u6620\u5c04\u4e3a "label: ${CDR(varname)}"\n;[mappings]\n;rate => Rate\n;carrier => Carrier\n')),Object(i.b)("h3",{id:"cdr_pgsqlconf"},"cdr_pgsql.conf"),Object(i.b)("p",null,"CDR \u8bb0\u5f55\u5230 PG \u6570\u636e\u5e93"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"hostname=db\nport=5432\ndbname=ast\npassword=ast\nuser=ast\nappname=asterisk    ; Postgres application_name support (optional). Whitespace not allowed.\ntable=cdr               ; \u8bb0\u5f55\u7684\u8868\u540d\n;encoding=LATIN9      ; \u65e5\u5fd7\u7f16\u7801\n;timezone=UTC           ; \u65f6\u533a\n")),Object(i.b)("h3",{id:"cdr_beanstalkdconf"},"cdr_beanstalkd.conf"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/beanstalkd/beanstalkd"},"https://github.com/beanstalkd/beanstalkd")),Object(i.b)("p",null,"Simple and fast general purpose work queue."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[general]\nenabled = yes\n\nhost = 127.0.0.1\nport = 11300\ntube = asterisk-cdr ; \u961f\u5217\npriority = 99       ; \u9ed8\u8ba4\u4f18\u5148\u7ea7 - \u5728\u5b58\u5728\u591a\u4e2a asterisk \u65f6\u6709\u7528\n")),Object(i.b)("h2",{id:"cel"},"cel"),Object(i.b)("h3",{id:"celconf"},"cel.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},'[general]\n; \u5f00\u542f\nenable=yes\n\n; \u5e94\u7528\u4e8b\u4ef6\u8ddf\u8e2a\n; \u9017\u53f7\u5206\u5272\u7684\u5e94\u7528\u5217\u8868\uff0c\u4f8b\u5982 dial,park\n; all \u6807\u793a\u5168\u90e8\u5f00\u542f\uff0c\u53ef\u80fd\u5f71\u54cd\u6027\u80fd\napps=dial,park\n\n; \u4e8b\u4ef6\u8ddf\u8e2a\n; \u9017\u53f7\u5206\u5272\u7684\u4e8b\u4ef6\u5217\u8868\n;\n;  ALL              -- Generate entries on all events\n;  CHAN_START       -- The time a channel was created\n;  CHAN_END         -- The time a channel was terminated\n;  ANSWER           -- The time a channel was answered (ie, phone taken off-hook)\n;  HANGUP           -- The time at which a hangup occurred\n;  BRIDGE_ENTER       -- The time a channel was connected into a conference room\n;  BRIDGE_EXIT        -- The time a channel was removed from a conference room\n;  APP_START        -- The time a tracked application was started\n;  APP_END          -- the time a tracked application ended\n;  PARK_START       -- The time a call was parked\n;  PARK_END         -- Unpark event\n;  BLINDTRANSFER    -- When a blind transfer is initiated\n;  ATTENDEDTRANSFER -- When an attended transfer is initiated\n;  PICKUP           -- This channel picked up the specified channel\n;  FORWARD          -- This channel is being forwarded somewhere else\n;  LINKEDID_END     -- The last channel with the given linkedid is retired\n;  USER_DEFINED     -- Triggered from the dialplan, and has a name given by the\n;                      user\n;  LOCAL_OPTIMIZE   -- A local channel pair is optimizing away.\n;\n;events=APP_START,CHAN_START,CHAN_END,ANSWER,HANGUP,BRIDGE_ENTER,BRIDGE_EXIT\nevents=ALL\n\n; \u65e5\u671f\u683c\u5f0f\n; strftime \u652f\u6301\u7684\u683c\u5f0f\n;\n; \u4f8b\u5982: "%F %T" "2009-06-23 17:02:35"\n; \u4e0d\u6307\u5b9a\u9ed8\u8ba4\u4e3a "<seconds>.<microseconds>" - microseconds \u957f\u5ea6\u56fa\u5b9a 6 \u6709\u524d\u7f000\n;\n;dateformat = %F %T\n\n; Asterisk Manager Interface (AMI) \u4e8b\u4ef6\u8bb0\u5f55\n[manager]\nenabled=yes\n\n; \u663e\u793a USER_DEFINED \u4e8b\u4ef6\u7c7b\u578b\u800c\u4e0d\u662f\u76f4\u63a5\u653e\u4e8b\u4ef6\u540d\u5b57\n; \u53ef\u4ee5\u4f7f\u7528 UserDefType \u5934\u6307\u5b9a\nshow_user_defined=yes\n\n;\n; RADIUS CEL Backend\n;\n[radius]\n;\n; Log date/time in GMT\n;usegmtime=yes\n;\n; Set this to the location of the radiusclient-ng configuration file\n; The default is /etc/radiusclient-ng/radiusclient.conf\n;radiuscfg => /usr/local/etc/radiusclient-ng/radiusclient.conf\n;\n')),Object(i.b)("h3",{id:"cel_pgsqlconf"},"cel_pgsql.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[global]\n; \u9ed8\u8ba4\u53ea\u8bb0\u5f55\u4e8b\u4ef6\u540d\u5b57\uff0c\u5f00\u542f\u540e\u4f1a\u6dfb\u52a0 USER_DEFINED \u4e8b\u4ef6\u7c7b\u578b\nshow_user_defined=yes\n\n; \u8bb0\u5f55 GMT \u683c\u5f0f\u7684\u65e5\u671f\u4e8b\u4ef6 - \u9ed8\u8ba4 no\n;usegmtime=yes\n\nhostname=ast-pg\nport=5432\ndbname=ast\npassword=ast\nuser=ast\ntable=cel\nschema=public\n")),Object(i.b)("h2",{id:"sorceryconf"},"sorcery.conf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u548c\u6570\u636e\u5e93\u6620\u5c04")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"; \u5916\u90e8 MWI mailbox \u6620\u5c04 - \u6301\u4e45\u5316\u6d88\u606f\u6570\u91cf\n;[res_mwi_external]\n;mailboxes=astdb,mwi_external\n\n[res_pjsip]\nauth        =realtime,ps_auths\naor         =realtime,ps_aors\ncontact     =realtime,ps_contacts\ndomain_alias=realtime,ps_domain_aliases\nendpoint    =realtime,ps_endpoints\nglobal      =realtime,ps_globals\nsystem      =realtime,ps_systems\ntransport   =realtime,ps_transports\n\n; ps_resource_list\n; ps_subscription_persistence\n\n; PJSIP \u914d\u7f6e\u6620\u5c04\n\n[res_pjsip_endpoint_identifier_ip]\nidentify              =realtime,ps_endpoint_id_ips\n\n[res_pjsip_outbound_publish]\noutbound-publish      =realtime,ps_outbound_publishes\n\n[res_pjsip_pubsub]\ninbound-publication   =realtime,ps_inbound_publications\n\n[res_pjsip_outbound_registration]\nregistration          =realtime,ps_registrations\n\n[res_pjsip_publish_asterisk]\nasterisk-publication  =realtime,ps_asterisk_publications\n")),Object(i.b)("h2",{id:"extconfigconf"},"extconfig.conf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9759\u6001\u548c\u5b9e\u65f6\u5916\u90e8\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Realtime+Database+Configuration"},"\u5b9e\u65f6\u6570\u636e\u5e93\u914d\u7f6e"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[settings]\n; \u9759\u6001\u6587\u4ef6\u914d\u7f6e\u6620\u5c04\n; file.conf => driver,database[,table[,priority]]\n\n; \u914d\u7f6e\u6587\u4ef6 => \u6570\u636e\u5e93\u9a71\u52a8,\u6570\u636e\u5e93[,\u8868\u540d = \u9ed8\u8ba4\u4e3a\u6587\u4ef6\u540d]\n;queues.conf => odbc,asterisk,ast_config\n;extensions.conf => sqlite,asterisk,ast_config\n\n; \u81ea\u5b9a\u4e49\u6570\u636e\u5e93\n; staffs  => pgsql,ast\n; logs    => pgsql,ast\n\n; conf\nqueues => pgsql,ast\n\n; pjsip\nps_aors                     => pgsql,ast\nps_asterisk_publications    => pgsql,ast\nps_auths                    => pgsql,ast\nps_contacts                 => pgsql,ast\nps_domain_aliases           => pgsql,ast\nps_endpoint_id_ips          => pgsql,ast\nps_endpoints                => pgsql,ast\nps_globals                  => pgsql,ast\nps_inbound_publications     => pgsql,ast\nps_outbound_publishes       => pgsql,ast\nps_registrations            => pgsql,ast\nps_resource_list            => pgsql,ast\nps_subscription_persistence => pgsql,ast\nps_systems                  => pgsql,ast\nps_transports               => pgsql,ast\n")),Object(i.b)("h2",{id:"httpconf"},"http.conf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5185\u7f6e\u7684 HTTP \u670d\u52a1\u5668"),Object(i.b)("li",{parentName:"ul"},"\u9759\u6001 HTTP \u4f4d\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/asterisk/static-http"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[general]\n; Server \u5934\u548c\u4e00\u4e9b\u8bf7\u6c42\u7684\u6d88\u606f\u4f53\u91cc\u5305\u542b\nservername=Asterisk\n\n; \u542f\u7528\n; \u5f71\u54cd manager/rawman/mxml \u8bbf\u95ee - manager.conf\nenabled=yes\n\nbindaddr=127.0.0.1  ; \u7ed1\u5b9a\u5730\u5740\nbindport=8088       ; \u7aef\u53e3 - \u9ed8\u8ba4 8080\n\n;prefix=asterisk    ; \u8def\u5f84\u524d\u7f00\n;sessionlimit=100   ; \u4f1a\u8bdd\u6570 - \u9ed8\u8ba4 100\n; \u4f1a\u8bdd\u4e0d\u6d3b\u8dc3\u5173\u95ed\u7684\u7b49\u5f85\u4e8b\u4ef6 ms \u5355\u4f4d\n;session_inactivity=30000\n; Keep Alive \u65f6\u95f4 ms\n;session_keep_alive=15000\n\n; \u542f\u7528\u9759\u6001\u6587\u4ef6\u670d\u52a1\nenablestatic=yes\n\n; \u91cd\u5b9a\u5411\n;redirect = / /static/config/index.html\n\n; \u6587\u4ef6\u4e0a\u4f20\u6620\u5c04\n;[post_mappings]\n; \u8bbf\u95ee\u9700\u8981\u5408\u6cd5\u7684 AMI mansession_id cookie\n;\n; \u4e0a\u4f20\u5230 /uploads \u7684\u6587\u4ef6\u4f1a\u5b58\u653e\u5728 /var/lib/asterisk/uploads/\n;uploads = /var/lib/asterisk/uploads/\n")),Object(i.b)("h2",{id:"ariconf"},"ari.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[general]\n; \u5141\u8bb8\u8bbf\u95ee\u7684 origin\nallowed_origins=http://ari.asterisk.org\n; \u542f\u7528 ARI\nenabled = yes\n;pretty = no        ; \u8fd4\u56de\u7ed3\u679c\u683c\u5f0f\u5316\n;allowed_origins =  ; CORS \u9009\u9879\n;auth_realm =       ; \u9274\u6743\u7684\u57df - \u9ed8\u8ba4 Asterisk\n; \u9ed8\u8ba4\u5199\u8d85\u65f6 - \u9ed8\u8ba4 100ms\n;websocket_write_timeout = 100\n; \u53d1\u8d77\u547c\u53eb\u65f6\u663e\u793a\u6307\u5b9a\u53d8\u91cf\n;channelvars = var1,var2,var3\n\n; \u6dfb\u52a0\u4e00\u4e2a\u7528\u6237\n[admin]\ntype = user\nread_only = no      ; \u53ea\u8bfb\npassword = admin    ; \u5bc6\u7801\n; \u660e\u6587\u5bc6\u7801 - \u8bbe\u7f6e\u4e3a crypt \u53ef\u4ee5\u4f7f\u7528 echo -n admin | mkpasswd -m sha-512 -P 0 \u751f\u6210\npassword_format = plain\n")),Object(i.b)("h2",{id:"pjsip"},"pjsip"),Object(i.b)("h3",{id:"pjsipconf"},"pjsip.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},'; Anonymous Calls\n;\n; By default anonymous inbound calls via PJSIP are not allowed. If you want to\n; route anonymous calls you\'ll need to define an endpoint named "anonymous".\n; res_pjsip_endpoint_identifier_anonymous.so handles that functionality so it\n; must be loaded. It is not recommended to accept anonymous calls.\n\n[transport-ws]\ntype=transport\nprotocol=ws\nbind=0.0.0.0\n\n')),Object(i.b)("h2",{id:"extension"},"extension"),Object(i.b)("h3",{id:"extensionsconf"},"extensions.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"")),Object(i.b)("h2",{id:"pg"},"PG"),Object(i.b)("h3",{id:"cdrcel"},"cdr/cel"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE cdr\n(\n  id          serial primary key,\n  accountcode text,\n  src         text,\n  src         text,\n  dst         text,\n  dcontext    text,\n  clid        text,\n  channel     text,\n  dstchannel  text,\n  lastapp     text,\n  lastdata    text,\n  start       TIMESTAMP WITHOUT TIME ZONE,\n  answer      TIMESTAMP WITHOUT TIME ZONE,\n  "end"       TIMESTAMP WITHOUT TIME ZONE,\n  duration    INTEGER,\n  billsec     INTEGER,\n  disposition text,\n  amaflags    text,\n  userfield   text,\n  uniqueid    text,\n  linkedid    text,\n  peeraccount text,\n  sequence    INTEGER\n);\n\nCREATE TABLE cel\n(\n  id          serial primary key,\n  eventtype   text      NOT NULL,\n  eventtime   timestamp NOT NULL,\n  userdeftype text      NOT NULL,\n  cid_name    text      NOT NULL,\n  cid_num     text      NOT NULL,\n  cid_ani     text      NOT NULL,\n  cid_rdnis   text      NOT NULL,\n  cid_dnid    text      NOT NULL,\n  exten       text      NOT NULL,\n  context     text      NOT NULL,\n  channame    text      NOT NULL,\n  appname     text      NOT NULL,\n  appdata     text      NOT NULL,\n  amaflags    int       NOT NULL,\n  accountcode text      NOT NULL,\n  peeraccount text      NOT NULL,\n  uniqueid    text      NOT NULL,\n  linkedid    text      NOT NULL,\n  userfield   text      NOT NULL,\n  peer        text      NOT NULL\n);\n')),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"dtmfmode"},"dtmfmode"),Object(i.b)("p",null,"rfc2833\nrfc4733"))}d.isMDXComponent=!0}}]);