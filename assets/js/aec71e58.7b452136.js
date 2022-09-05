"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8670],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=o(a),k=r,N=s["".concat(m,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(N,p(p({ref:e},u),{},{components:a})):n.createElement(N,p({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26976:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],i={title:"pmset"},m=void 0,o={unversionedId:"os/darwin/pmset",id:"os/darwin/pmset",title:"pmset",description:"pmset",source:"@site/notes/os/darwin/pmset.md",sourceDirName:"os/darwin",slug:"/os/darwin/pmset",permalink:"/notes/os/darwin/pmset",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/darwin/pmset.md",tags:[],version:"current",frontMatter:{title:"pmset"},sidebar:"docs",previous:{title:"macOS Version",permalink:"/notes/os/darwin/macos-version"},next:{title:"Debian",permalink:"/notes/os/debian/"}},u={},d=[{value:"pmset",id:"pmset",level:2}],s={toc:d};function k(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"pmset"},"pmset"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wiki ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pmset"},"Pmset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.dssw.co.uk/reference/pmset.html"},"pmset")," man"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.freebsd.org/cgi/man.cgi?query=pmset&sektion=1&manpath=Darwin"},"https://www.freebsd.org/cgi/man.cgi?query=pmset&sektion=1&manpath=Darwin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opensource.apple.com/source/PowerManagement/PowerManagement-321.5.3/pmset/"},"https://opensource.apple.com/source/PowerManagement/PowerManagement-321.5.3/pmset/"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u907f\u514d\u5f85\u673a\ncaffeinate\n# \u6216\npmset noidel\n\n# \u67e5\u770b\u5f53\u524d\u914d\u7f6e - \u57fa\u4e8e\u60c5\u51b5\u663e\u793a AC \u6216 \u7535\u6c60\npmset -g\n# \u6240\u6709\u914d\u7f6e\npmset -g custom\n\n# \u7535\u6e90\u914d\u7f6e\u6062\u590d\u7cfb\u7edf\u8bbe\u7f6e\npmset restoredefaults\n\n# \u4e00\u6b21\u4fee\u6539\u591a\u4e2a\u8bbe\u7f6e\npmset -a displaysleep 10 disksleep  10 sleep 30 womp 1\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flag"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-a"),(0,l.kt)("td",{parentName:"tr",align:null},"all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-b"),(0,l.kt)("td",{parentName:"tr",align:null},"bettery")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-c"),(0,l.kt)("td",{parentName:"tr",align:null},"charger, wall power, ac power")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-u"),(0,l.kt)("td",{parentName:"tr",align:null},"UPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-g"),(0,l.kt)("td",{parentName:"tr",align:null},"-> -g live \u663e\u793a\u5f53\u524d\u914d\u7f6e")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-g live - \u5f53\u524d\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"disk"),(0,l.kt)("li",{parentName:"ul"},"cap - \u652f\u6301\u7684\u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"shed - scheduled startup/wake and shutdown/sleep events"),(0,l.kt)("li",{parentName:"ul"},"ups - UPS emergency thresholds"),(0,l.kt)("li",{parentName:"ul"},"ps - status of batteries and\tUPSs"),(0,l.kt)("li",{parentName:"ul"},"pslog - \u76d1\u542c\u65e5\u5fd7"),(0,l.kt)("li",{parentName:"ul"},"batt")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"conf"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acwake"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u7535\u65f6\u5524\u9192")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autopoweroff"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u505c\u6b62\u7535\u6e90")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autopoweroffdelay"),(0,l.kt)("td",{parentName:"tr",align:null},"14400"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u81ea\u52a8\u505c\u6b62\u7535\u6e90\u6a21\u5f0f\u7684\u5ef6\u8fdf,\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lowpowermode"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e\u7535\u91cf\u6a21\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disksleep"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u78c1\u76d8\u7761\u7720\u5b9a\u65f6\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displaysleep"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5668\u7761\u7720\u5b9a\u65f6\u5668,\u5206\u949f,0 \u7981\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpuswitch"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"GUP \u5207\u6362")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"halfdim"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5668\u4f11\u7720\u4f7f\u7528\u66f4\u6697\u7684\u4eae\u5ea6\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5173")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hibernatefile"),(0,l.kt)("td",{parentName:"tr",align:null},"/var/vm/sleepimage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f11\u7720\u65f6\u8f6c\u50a8\u7684\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hibernatemode"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f11\u7720\u6a21\u5f0f,\u5206\u949f,0 \u7981\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"highstandbythreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lidwake"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b14\u8bb0\u672c\u5f00\u76d6\u65f6\u5524\u9192")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"networkoversleep"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"powernap"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528 Power Nap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proximitywake"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u540c iCloud ID \u8bbe\u5907\u63a5\u8fd1\u65f6\u5524\u9192")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sleep"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7761\u7720\u5b9a\u65f6\u5668,\u5206\u949f,0 \u7981\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"standby"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8ba9\u7535\u6e90\u7ba1\u7406\u5668\u81ea\u52a8\u4f11\u7720\u7cfb\u7edf.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("del",{parentName:"td"},"standbydelay")),(0,l.kt)("td",{parentName:"tr",align:null},"10800"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u4f11\u7720\u955c\u50cf\u5230\u78c1\u76d8\u4e4b\u524d\u548c\u505c\u6b62\u7ed9\u5185\u5b58\u4f9b\u7535\u7684\u5ef6\u8fdf,\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"standbydelayhigh"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u4f11\u7720\u955c\u50cf\u7684\u5ef6\u65f6\uff0c\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"standbydelaylow"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u4f11\u7720\u955c\u50cf\u7684\u5ef6\u65f6\uff0c\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttyskeepawake"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4efb\u4f55 tty \u5904\u4e8e'\u6fc0\u6d3b'\u7684\u65f6\u5019\u90fd\u4f7f\u7cfb\u7edf\u4e0d\u4f1a\u8fdb\u5165\u7761\u7720.\u5f53 tty \u7684\u7a7a\u95f2\u65f6\u95f4\u8d85\u8fc7\u7cfb\u7edf\u7761\u7720\u65f6\u95f4\u540e\u4fbf\u4e0d\u518d\u5904\u4e8e '\u6fc0\u6d3b' \u72b6\u6001.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"womp"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u7f51\u7edc\u5524\u9192")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcpkeepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("p",{parentName:"blockquote"},"default \u6839\u636e mac \u578b\u53f7\u4e0d\u540c\u800c\u4e0d\u540c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"autorestart \u662f\u5426\u5728\u65ad\u7535\u540e\u81ea\u52a8\u91cd\u542f"),(0,l.kt)("li",{parentName:"ul"},"ring - wake on modem ring"),(0,l.kt)("li",{parentName:"ul"},"lessbright - slightly turn down display brightness when switching to this power source"),(0,l.kt)("li",{parentName:"ul"},"sms - use Sudden Motion Sensor to park disk heads on sudden changes in G force"),(0,l.kt)("li",{parentName:"ul"},"networkoversleep - this setting affects how OS X networking presents shared network services during system sleep. This setting is not used by all platforms; changing its value is unsupported."),(0,l.kt)("li",{parentName:"ul"},"destroyfvkeyonstandby - Destroy File Vault Key when going to standby mode. By default File vault keys are retained even when system goes to standby. If the keys are destroyed, user will be prompted to enter the password while coming out of standby mode.(value: 1 - Destroy, 0 - Retain)"),(0,l.kt)("li",{parentName:"ul"},"womp - wake on ethernet magic packet"),(0,l.kt)("li",{parentName:"ul"},"reduce - CPU \u964d\u901f"),(0,l.kt)("li",{parentName:"ul"},"lessbright"),(0,l.kt)("li",{parentName:"ul"},"sms - Sudden Motion Sensor"),(0,l.kt)("li",{parentName:"ul"},"hibernatemode"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf /Library/Preferences/SystemConfiguration/com.apple.PowerManagement.plist"),(0,l.kt)("li",{parentName:"ul"},"Scheduled /Library/Preferences/SystemConfiguration/com.apple.AutoWake.plist")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5176\u4ed6\u53c2\u6570\n#  boot \u91cd\u542f\u7cfb\u7edf\n#  force \u5f3a\u5236 PM(Power Management) \u7acb\u5373\u6fc0\u6d3b\u8bbe\u7f6e.\u4e0d\u8bb2\u8bbe\u7f6e\u5199\u5230\u78c1\u76d8,\u53ef\u4ee5\u4f7f\u8bbe\u7f6e\u80fd\u591f\u5f88\u5bb9\u6613\u88ab\u91cd\u5199.\u5f53\u5728\u7279\u6b8a\u573a\u666f\u4e0b PM \u672a\u8fd0\u884c\u65f6\u5f88\u6709\u5e2e\u52a9.\n#  touch PM \u4ece\u65b0\u4ece\u78c1\u76d8\u8bfb\u53d6\u73b0\u6709\u914d\u7f6e\n#  noidle \u907f\u514d\u7a7a\u95f2\u65f6\u8fdb\u5165\u7761\u7720\u6a21\u5f0f,\u8be5\u547d\u4ee4\u5df2\u88ab\u5e9f\u5f03,\u4f7f\u7528 caffeinate \u66ff\u4ee3\n#  sleepnow \u7acb\u5373\u4f7f\u7cfb\u7edf\u8fdb\u5165\u7761\u7720\n#  restoredefaults \u6062\u590d\u8282\u80fd\u7a0b\u5e8f\u5230\u9ed8\u8ba4\u503c\n#  displaysleepnow \u4f7f\u663e\u793a\u5668\u7acb\u5373\u8fdb\u5165\u7761\u7720\n#  resetdisplayambientparams \u91cd\u7f6e\u6307\u5b9a\u663e\u793a\u5668\u7684\u73af\u5883\u5149\u53c2\u6570\n\n# \u4fee\u6539\u65f6\u6307\u5b9a\u8303\u56f4\n#       -b \u7535\u6c60\n#       -c \u94fe\u63a5\u4e86\u7535\u6e90, UPS ( -u )\n#       -u UPS\n#       -a \u6240\u6709\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f11\u7720\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"0 \u4e0d\u4f1a\u5c06\u5185\u5b58\u6301\u4e45\u5316\u5230\u5b58\u50a8.\u5728\u65ad\u7535\u65f6\u5185\u5b58\u6570\u636e\u4f1a\u4e22\u5931."),(0,l.kt)("li",{parentName:"ul"},"3 \u4f1a\u5c06\u5185\u5b58\u62f7\u8d1d\u5230\u5b58\u50a8,\u5f53\u7761\u7720\u65f6\u4e5f\u4f1a\u7ed9\u5185\u5b58\u4f9b\u7535,\u7cfb\u7edf\u4f1a\u5c1d\u8bd5\u4ece\u5185\u5b58\u542f\u52a8,\u5982\u679c\u65ad\u7535\u4f1a\u5f3a\u5236\u4ece\u78c1\u76d8\u6062\u590d.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a\u8be5\u9009\u9879"))),(0,l.kt)("li",{parentName:"ul"},"25 \u4f1a\u5c06\u5185\u5b58\u62f7\u8d1d\u5230\u5b58\u50a8,\u5e76\u4e14\u505c\u6b62\u7ed9\u5185\u5b58\u4f9b\u7535,\u542f\u52a8\u65f6\u4f1a\u4ece\u78c1\u76d8\u6062\u590d\u5185\u5b58.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7701\u7535,\u7535\u6c60\u5bff\u547d\u66f4\u4e45"),(0,l.kt)("li",{parentName:"ul"},"\u4f46\u7761\u7720\u548c\u5524\u9192\u66f4\u6162"))))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7cfb\u7edf\u652f\u6301 standby, \u5219\u5728\u8d85\u8fc7 standbydely \u540e\u5c31\u4f1a\u5199\u4e00\u4e2a\u4f11\u7720\u955c\u50cf"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u5b8c\u5168\u7981\u6b62\u4f11\u7720,\u53ef\u5c06 hibernatemode, standby \u548c autopoweroff \u8bbe\u7f6e\u4e3a 0")))}k.isMDXComponent=!0}}]);