"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24422],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return o}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),N=d(a),o=l,g=N["".concat(m,".").concat(o)]||N[o]||k[o]||r;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},19019:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return N},metadata:function(){return g},toc:function(){return c}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))d.call(e,a)&&u(t,a,e[a]);return t};const N={title:"FreeSWITCH Conf"},o="FreeSWITCH Conf",g={unversionedId:"voip/freeswitch/freeswitch-conf",id:"voip/freeswitch/freeswitch-conf",title:"FreeSWITCH Conf",description:"- \u53d8\u91cf\u4f5c\u7528\u57df",source:"@site/../notes/voip/freeswitch/freeswitch-conf.md",sourceDirName:"voip/freeswitch",slug:"/voip/freeswitch/freeswitch-conf",permalink:"/notes/voip/freeswitch/freeswitch-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/freeswitch/freeswitch-conf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634309581,formattedLastUpdatedAt:"Oct 15, 2021",frontMatter:{title:"FreeSWITCH Conf"},sidebar:"docs",previous:{title:"FreeSWITCH-1.8",permalink:"/notes/voip/freeswitch/freeswitch-18-book"},next:{title:"FreeSWITCH Dev",permalink:"/notes/voip/freeswitch/freeswitch-dev"}},s={},c=[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u9884\u5904\u7406",id:"\u9884\u5904\u7406",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"vars",id:"vars",level:2},{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u5a92\u4f53",id:"\u5a92\u4f53",level:3},{value:"dingaling",id:"dingaling",level:3},{value:"switch.conf",id:"switchconf",level:2},{value:"modules.conf",id:"modulesconf",level:2},{value:"\u901a\u9053",id:"\u901a\u9053",level:2}],b={toc:c};function f(t){var e,a=t,{components:l}=a,u=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},b),u),r(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"freeswitch-conf"}),"FreeSWITCH Conf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u4f5c\u7528\u57df",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5168\u5c40"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u9053"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://freeswitch.org/confluence/display/FREESWITCH/Understanding+the+Configuration+Files"}),"Understanding the Configuration Files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://freeswitch.org/confluence/display/FREESWITCH/Configuration"}),"https://freeswitch.org/confluence/display/FREESWITCH/Configuration"))),(0,n.kt)("h2",k({},{id:"\u914d\u7f6e\u8bf4\u660e"}),"\u914d\u7f6e\u8bf4\u660e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u914d\u7f6e\uff0c\u6ca1\u6709 DTD\uff0c\u6709 schema \u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u5165\u53e3\u914d\u7f6e switch.conf"),(0,n.kt)("li",{parentName:"ul"},"\u6a21\u5757\u914d\u7f6e modules.conf"),(0,n.kt)("li",{parentName:"ul"},"\u6a21\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"default.xml - ",(0,n.kt)("inlineCode",{parentName:"li"},'<user id="1000" type="pointer"/>')," \u6307\u5411 \u76ee\u5f55\u91cc\u7684\u5177\u4f53\u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"default/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"spec.xml"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'<param name="password" value="$${default_password}"/>')," \u53d8\u91cf\u5f15\u7528"))),(0,n.kt)("li",{parentName:"ul"},"XML \u63a5\u53e3\u6a21\u5757",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mod_xml_cdr"),(0,n.kt)("li",{parentName:"ul"},"mod_xml_curl"),(0,n.kt)("li",{parentName:"ul"},"mod_xml_diaplan"),(0,n.kt)("li",{parentName:"ul"},"mod_xml_radius"),(0,n.kt)("li",{parentName:"ul"},"mod_xml_rpc"),(0,n.kt)("li",{parentName:"ul"},"mod_xml_scgi")))),(0,n.kt)("h2",k({},{id:"\u9884\u5904\u7406"}),"\u9884\u5904\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"include"),(0,n.kt)("li",{parentName:"ul"},"set - \u5168\u5c40\u53d8\u91cf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",k({parentName:"li"},{className:"math math-display"}),(0,n.kt)("span",k({parentName:"div"},{className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 35: \u2026\u7406\u540e\u4f1a\u88ab\u66ff\u6362 - \u8fd0\u884c\u65f6\u540c `$\u0332{variable}`",style:{color:"#cc0000"}}),"{variable} - \u914d\u7f6e\u65f6\u5728\u9884\u5904\u7406\u540e\u4f1a\u88ab\u66ff\u6362 - \u8fd0\u884c\u65f6\u540c `${variable}`"))),(0,n.kt)("li",{parentName:"ul"},"${variable} - \u4e0d\u53d7\u9884\u5904\u7406\u5f71\u54cd"),(0,n.kt)("li",{parentName:"ul"},"\u9759\u6001\uff0c\u4e00\u6b21\u6027"))),(0,n.kt)("li",{parentName:"ul"},"exec - \u6267\u884c\u811a\u672c"),(0,n.kt)("li",{parentName:"ul"},"exec-set - \u7ed3\u679c\u8bbe\u7f6e\u4e3a\u53d8\u91cf"),(0,n.kt)("li",{parentName:"ul"},"comment")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-xml",metastring:'title="\u53d8\u91cf"',title:'"\u53d8\u91cf"'}),'\x3c!-- \u8bbe\u7f6e\u53d8\u91cf --\x3e\n<X-PRE-PROCESS cmd="set" data="my_variable=\'value\'"/>\n\x3c!--#set my_variable=\'value\'--\x3e\n\n\x3c!-- \u4e0d\u751f\u6548 - \u4e34\u65f6\u7981\u7528 --\x3e\n<X-PRE-PROCESS cmd="comment" data="my_variable=\'value\'"/>\n<X-NO-PRE-PROCESS cmd="set" data="my_variable=\'value\'"/>\n<Y-PRE-PROCESS cmd="set" data="my_variable=\'value\'"/>\n\n<X-PRE-PROCESS cmd="exec" data="/path/to/my_script_that_dumps_all_configs_to_stdout.pl"/>\n<X-PRE-PROCESS cmd="exec-set" data="local_ip_v4=ip addr show eth1 | awk \'/inet /{print $2}\' | head -n 1 | cut -d \'/\' -f 1"/>\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6ce8\u91ca"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u79fb\u9664\u6216\u8005\u6539\u540d\u5b57 - \u4f8b\u5982 \u6539\u4e3a X-NO-PRE-PROCESS")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-xml",metastring:'title="include"',title:'"include"'}),'<X-PRE-PROCESS cmd="include" data="vars.xml"/>\n\n<section name="configuration" description="Various Configuration">\n    <X-PRE-PROCESS cmd="include" data="autoload_configs/*.xml"/>\n</section>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-xml",metastring:'title="vars.xml"',title:'"vars.xml"'}),"<include>\n    \x3c!-- \u88ab include \u5185\u5bb9 --\x3e\n</include>\n")),(0,n.kt)("h2",k({},{id:"\u914d\u7f6e\u6587\u4ef6"}),"\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extensions.conf"),(0,n.kt)("li",{parentName:"ul"},"freeswitch.xml"),(0,n.kt)("li",{parentName:"ul"},"fur_elise.xml"),(0,n.kt)("li",{parentName:"ul"},"mime.types"),(0,n.kt)("li",{parentName:"ul"},"notify-voicemail.tpl"),(0,n.kt)("li",{parentName:"ul"},"tetris.ttml"),(0,n.kt)("li",{parentName:"ul"},"vars.xml"),(0,n.kt)("li",{parentName:"ul"},"voicemail.tpl"),(0,n.kt)("li",{parentName:"ul"},"web-vm.tpl"),(0,n.kt)("li",{parentName:"ul"},"autoload_configs/ - \u81ea\u52a8\u52a0\u8f7d\u7684\u914d\u7f6e\u76ee\u5f55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"switch.conf.xml - \u6838\u5fc3\u914d\u7f6e"))),(0,n.kt)("li",{parentName:"ul"},"chatplan/"),(0,n.kt)("li",{parentName:"ul"},"dialplan/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"features.xml"),(0,n.kt)("li",{parentName:"ul"},"default.xml"),(0,n.kt)("li",{parentName:"ul"},"default/"),(0,n.kt)("li",{parentName:"ul"},"public.xml"),(0,n.kt)("li",{parentName:"ul"},"public/"),(0,n.kt)("li",{parentName:"ul"},"skinny-patterns.xml"),(0,n.kt)("li",{parentName:"ul"},"skinny-patterns/"))),(0,n.kt)("li",{parentName:"ul"},"directory/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"default.xml"),(0,n.kt)("li",{parentName:"ul"},"default/"))),(0,n.kt)("li",{parentName:"ul"},"ivr_menus"),(0,n.kt)("li",{parentName:"ul"},"jingle_profiles"),(0,n.kt)("li",{parentName:"ul"},"lang"),(0,n.kt)("li",{parentName:"ul"},"mrcp_profiles"),(0,n.kt)("li",{parentName:"ul"},"sip_profiles"),(0,n.kt)("li",{parentName:"ul"},"skinny_profiles"),(0,n.kt)("li",{parentName:"ul"},"tls",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dtls-srtp.pem"),(0,n.kt)("li",{parentName:"ul"},"wss.pem")))),(0,n.kt)("h2",k({},{id:"vars"}),"vars"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{}),"global_getvar variable_name\nuuid_getvar <uuid> variable_name\n")),(0,n.kt)("h3",k({},{id:"\u76ee\u5f55"}),"\u76ee\u5f55"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"base_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/etc/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"cache_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/cache/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"certs_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/etc/freeswitch/tls"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"conf_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/etc/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"data_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"db_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/lib/freeswitch/db"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"fonts_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch/fonts"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"grammar_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch/grammar"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"htdocs_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch/htdocs"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"images_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/lib/freeswitch/images"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"localstate_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/lib/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"log_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/log/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"mod_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/lib/freeswitch/mod"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"recordings_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/lib/freeswitch/recordings"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"run_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/run/freeswitch"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"script_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch/scripts"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sounds_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch/sounds"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"storage_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/var/lib/freeswitch/storage"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"temp_dir"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/tmp"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sound_prefix"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"/share/freeswitch/sounds/en/us/callie"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h3",k({},{id:"\u7f51\u7edc"}),"\u7f51\u7edc"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"domain"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"$${local_ip_v4}"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default/fallback domain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"domain_name"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"$${domain}"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external_auth_calls"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external_rtp_ip"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"stun:stun.freeswitch.org"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"stun-set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external_sip_ip"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"stun:stun.freeswitch.org"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"stun-set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unroll_loops"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sip loopback unrolling")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external_sip_port"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"5080"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external_ssl_enable"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external_tls_port"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"5081"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"internal_auth_calls"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"internal_sip_port"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"5060"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"internal_ssl_enable"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"internal_tls_port"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"5061"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"local_ip_v4"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"192.168.1.1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"local_ip_v6"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"::1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"local_mask_v4"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"255.255.252.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"zrtp_secure_media"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ZRTP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nat_public_addr"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nat_private_addr"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nat_type"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp_secure_media"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"SRTP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp_secure_media_inbound"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp_secure_media_outbound"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ZRTP ",(0,n.kt)("a",k({parentName:"li"},{href:"http://wiki.freeswitch.org/wiki/ZRTP"}),"http://wiki.freeswitch.org/wiki/ZRTP")),(0,n.kt)("li",{parentName:"ul"},"SRTP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"do not offer or accept variable bit rate codecs")))),(0,n.kt)("h3",k({},{id:"\u5a92\u4f53"}),"\u5a92\u4f53"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"call_debug"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"console_loglevel"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"info"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_areacode"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"918"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_country"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"US"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"core_uuid"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_password"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1234"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_provider"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"example.com"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_provider_contact"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"5000"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_provider_from_domain"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"example.com"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_provider_password"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"password"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_provider_register"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_provider_username"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"joeuser"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"global_codec_prefs"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"OPUS,G722,PCMU,PCMA,H264,VP8"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"outbound_codec_prefs"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"OPUS,G722,PCMU,PCMA,H264,VP8"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"hold_music"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"local_stream://moh"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"outbound_caller_id"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0000000000"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"outbound_caller_name"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"FreeSWITCH"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"conference.conf.xml, user directory default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"presence_privacy"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp_liberal_dtmf"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp_video_max_bandwidth_in"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"3mb"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp_video_max_bandwidth_out"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"3mb"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"suppress_cng"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"use_profile"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"external"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"codecname[@8000h|16000h|32000h[@XXi]]"))),(0,n.kt)("h3",k({},{id:"dingaling"}),"dingaling"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bind_server_ip"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"auto"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"xmpp_client_profile"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"xmppc"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"xmpp_server_profile"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"xmpps"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",k({},{id:"switchconf"}),"switch.conf"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-xml"}),'<configuration name="switch.conf" description="Core Configuration">\n  <cli-keybindings>\n    \x3c!-- bind function key --\x3e\n    <key name="[1-12]" value="[api command]"/>\n  </cli-keybindings>\n  \x3c!-- \u6240\u6709 codec \u9ed8\u8ba4 20ms --\x3e\n  <default-ptimes>\n    \x3c!-- <codec name="G729" ptime="40"/> --\x3e\n  </default-ptimes>\n  <settings>\n  </settings>\n</configuration>\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"setting"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"max-db-handles"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"50"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"db-handle-timeout"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"min-idle-cpu"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"25"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event-heartbeat-interval"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"max-sessions"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1000"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sessions-per-second"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"30"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"loglevel"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"debug"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5168\u5c40\u9ed8\u8ba4 log \u7ea7\u522b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"debug-level"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0-10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sql-buffer-len"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1m"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"max-sql-buffer-len"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2m"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"min-dtmf-duration"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"400"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6700\u4f4e 400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"max-dtmf-duration"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"192000"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default_dtmf_duration"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2000"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"verbose-channel-events"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"no"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enable-clock-nanosleep"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enable-monotonic-timing"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp-start-port"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"16384"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp-end-port"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"32768"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp-port-usage-robustness"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u4f7f\u7528\u7aef\u53e3\u524d\u5148\u6d4b\u8bd5\u672a\u88ab\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp-enable-zrtp"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rtp-retain-crypto-keys"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"core-db-dsn"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6570\u636e\u5e93\u914d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"core-db-name"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"auto-create-schemas"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"auto-clear-sql"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enable-early-hangup"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"core-dbtype"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"multiple-registrations"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"max-audio-channels"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u6309\u952e\u7ed1\u5b9a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"key"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"command"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"help")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F3"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"show channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F4"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"show calls")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sofia status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F6"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"reloadxml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F7"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"console loglevel 0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F8"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"console loglevel 7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F9"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sofia status profile internal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sofia profile internal siptrace on")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F11"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sofia profile internal siptrace off")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"F12"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"version")))),(0,n.kt)("h2",k({},{id:"modulesconf"}),"modules.conf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u987a\u5e8f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"logger"),(0,n.kt)("li",{parentName:"ul"},"Multi-Faceted"),(0,n.kt)("li",{parentName:"ul"},"xml interface"),(0,n.kt)("li",{parentName:"ul"},"event handler"),(0,n.kt)("li",{parentName:"ul"},"directory interface"),(0,n.kt)("li",{parentName:"ul"},"Endpoints"),(0,n.kt)("li",{parentName:"ul"},"Applications"),(0,n.kt)("li",{parentName:"ul"},"SNOM"),(0,n.kt)("li",{parentName:"ul"},"Dialplan Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Codec Interfaces"),(0,n.kt)("li",{parentName:"ul"},"File Format Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Timer"),(0,n.kt)("li",{parentName:"ul"},"Languages"),(0,n.kt)("li",{parentName:"ul"},"ASR/TTS"),(0,n.kt)("li",{parentName:"ul"},"Say"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9")))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-xml"}),'<configuration name="modules.conf" description="Modules">\n  <modules>\n    \x3c!-- \u81ea\u5b9a\u4e49\u52a0\u8f7d\u6a21\u5757 - \u5185\u7f6e\u6a21\u5757\u4e0d\u9700\u8981 path --\x3e\n    <load module="mod_com_g729" path="/opt/fs/mod_com" critical="true"/>\n  </modules>\n</configuration>\n')),(0,n.kt)("h2",k({},{id:"\u901a\u9053"}),"\u901a\u9053"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables+Catalog"}),"Channel Variables Catalog"))))}f.isMDXComponent=!0}}]);