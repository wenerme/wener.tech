"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15051],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,b=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(b,l(l({ref:n},u),{},{components:t})):r.createElement(b,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25826:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],c={title:"crontab"},i=void 0,p={unversionedId:"ops/admin/crontab",id:"ops/admin/crontab",title:"crontab",description:"- crontab.guru",source:"@site/notes/ops/admin/crontab.md",sourceDirName:"ops/admin",slug:"/ops/admin/crontab",permalink:"/notes/ops/admin/crontab",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/crontab.md",tags:[],version:"current",frontMatter:{title:"crontab"},sidebar:"docs",previous:{title:"augeas",permalink:"/notes/ops/admin/augeas"},next:{title:"fio",permalink:"/notes/ops/admin/fio"}},u={},s=[{value:"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1",id:"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1",level:2},{value:"macOS",id:"macos",level:2},{value:"\u5e38\u89c1\u6e05\u7406",id:"\u5e38\u89c1\u6e05\u7406",level:2},{value:"help",id:"help",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crontab.guru"},"crontab.guru"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u7f16\u8f91\u5668"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.sanctum.geek.nz/cron-best-practices/"},"Cron best practices"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30636872"},"HN"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u63a8\u8350\u4f7f\u7528\u4e00\u4e2a\u81ea\u5df1\u7684 crontab \u6587\u4ef6, \u8fd9\u6837\u4fbf\u4e8e\u7ba1\u7406\nnano ~/.crontab\ncrontab ~/.crontab\ncrontab -l\n\n# \u91cd\u5b9a\u5411\u65e5\u5fd7\nnano /etc/rsyslog.d/50-default.conf\n# \u6dfb\u52a0\n# cron.*\nsudo service rsyslog restart\n\n# \u6216\u8005\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 sysylog \u4e2d\u627e\ntail -f /var/log/syslog | grep CRON\n\n# \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06\u4efb\u52a1\u8bbe\u7f6e\u4e3a\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21,\u7136\u540e\u5c06 crond \u5728\u524d\u53f0\u6267\u884c,\u6d4b\u8bd5\u65e5\u5fd7\u8f93\u51fa\ncrond -nx test\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# \u7b80\u5355\u7684\u670d\u52a1\u81ea\u52a8\u91cd\u542f\n# \u7136\u540e\u6dfb\u52a0\u5230 @reboot \u89c4\u5219\u4e2d\u5c31\u53ef\u4ee5\nuntil myserver; do\n    echo \"Server 'myserver' crashed with exit code $?.  Respawning..\" >&2\n    sleep 1\ndone\n")),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1"},"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e /etc/conf.d/crond",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'\u9ed8\u8ba4 CRON_OPTS="-c /etc/crontabs"'),(0,o.kt)("li",{parentName:"ul"},'\u53ef\u4ee5\u4fee\u6539\u4e3a CRON_OPTS="-c /etc/crontabs -L /var/log/crond.log -l 6"'))),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f4d\u7f6e /etc/crontabs"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1 /etc/crontabs/root",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/var/spool/cron/root"))),(0,o.kt)("li",{parentName:"ul"},"run-parts \u4f1a\u6267\u884c\u4e00\u4e2a\u76ee\u5f55\u4e0b\u7684\u811a\u672c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684 run-parts \u662f busybox \u81ea\u5e26\u7684, \u4e5f\u53ef\u4ee5\u989d\u5916\u5b89\u88c5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/run-parts"},"https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/run-parts")),(0,o.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u4e00\u4e2a\u76ee\u5f55\u4e0b\u6709\u54ea\u4e9b\u4f1a\u88ab\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"run-parts --test /etc/periodic/daily")),(0,o.kt)("li",{parentName:"ul"},"\u91cc\u9762\u7684\u811a\u672c ",(0,o.kt)("strong",{parentName:"li"},"\u4e0d\u8981")," \u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"li"},".sh")," \u540e\u7f00\uff0c\u4e14\u786e\u4fdd\u53ef\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# do daily/weekly/monthly maintenance\n# min   hour    day month   weekday command\n*/15    *   *   *   *   run-parts /etc/periodic/15min\n0   *   *   *   *   run-parts /etc/periodic/hourly\n0   2   *   *   *   run-parts /etc/periodic/daily\n0   3   *   *   6   run-parts /etc/periodic/weekly\n0   5   1   *   *   run-parts /etc/periodic/monthly\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u6bcf\u4e24\u5468\u4e00\u6b21\n0 4 * * 6 test $((10#$(date +\\%W)\\%2)) -eq 1 && run-parts /etc/periodic/bi-weekly\n")),(0,o.kt)("h2",{id:"macos"},"macOS"),(0,o.kt)("p",null,"\u867d\u7136\u4e0d\u63a8\u8350\u4f7f\u7528 crontab, \u56e0\u4e3a\u5176\u529f\u80fd\u90fd\u5df2\u7ecf\u88ab lanuchd \u66ff\u4ee3,\u4f46\u7b80\u5355\u7684\u5de5\u4f5c\u8fd8\u662f crontab \u66f4\u7b80\u5355"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/23880156/1870054"},"http://stackoverflow.com/a/23880156/1870054")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/ScheduledJobs.html"},"ScheduledJobs"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u91cd\u5b9a\u5411 cron \u65e5\u5fd7\nsudo nano /etc/syslog.conf\n# \u6dfb\u52a0\n# cron.* /var/log/cron.log\n\n# \u91cd\u542f syslog\nsudo launchctl unload /System/Library/LaunchDaemons/com.apple.syslogd.plist\nsudo launchctl load /System/Library/LaunchDaemons/com.apple.syslogd.plist\n")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u6e05\u7406"},"\u5e38\u89c1\u6e05\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Docker GC\ndocker system prune --force\n\n# ZFS scrub\nzpoll scrub main\n")),(0,o.kt)("h2",{id:"help"},"help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ crond --help\nBusyBox v1.27.2 (2017-11-28 16:17:30 GMT) multi-call binary.\n\nUsage: crond -fbS -l N -d N -L LOGFILE -c DIR\n\n    -f  Foreground\n    -b  Background (default)\n    -S  Log to syslog (default)\n    -l N    Set log level. Most verbose 0, default 8\n    -d N    Set log level, log to stderr\n    -L FILE Log to FILE\n    -c DIR  Cron dir. Default:/var/spool/cron/crontabs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ crontab --help\nBusyBox v1.27.2 (2017-11-28 16:17:30 GMT) multi-call binary.\n\nUsage: crontab [-c DIR] [-u USER] [-ler]|[FILE]\n\n    -c  Crontab directory\n    -u  User\n    -l  List crontab\n    -e  Edit crontab\n    -r  Delete crontab\n    FILE    Replace crontab by FILE ('-': stdin)\n")))}d.isMDXComponent=!0}}]);