(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1021:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(a),O=n,s=o["".concat(r,".").concat(O)]||o[O]||m[O]||l;return a?i.a.createElement(s,b(b({ref:t},p),{},{components:a})):i.a.createElement(s,b({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var p=2;p<l;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},654:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(8),l=(a(0),a(1021)),r={id:"the-definitive-guide-4th",title:"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248"},b={unversionedId:"voip/asterisk/the-definitive-guide-4th",id:"voip/asterisk/the-definitive-guide-4th",isDocsHomePage:!1,title:"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248",description:"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248 - The Definitive Guide, 4th Edition",source:"@site/notes/voip/asterisk/asterisk-def-guide-4th.md",slug:"/voip/asterisk/the-definitive-guide-4th",permalink:"/notes/voip/asterisk/the-definitive-guide-4th",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-def-guide-4th.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u914d\u7f6e",permalink:"/notes/voip/asterisk/asterisk-conf"},next:{title:"\u5f00\u53d1",permalink:"/notes/voip/asterisk/dev"}},c=[{value:"Ch1. \u7535\u8bdd\u6280\u672f\u9769\u547d",id:"ch1-\u7535\u8bdd\u6280\u672f\u9769\u547d",children:[]},{value:"Ch2. \u67b6\u6784",id:"ch2-\u67b6\u6784",children:[]},{value:"Ch3. \u5b89\u88c5",id:"ch3-\u5b89\u88c5",children:[]},{value:"Ch4. \u521d\u59cb\u914d\u7f6e",id:"ch4-\u521d\u59cb\u914d\u7f6e",children:[]},{value:"Ch5. \u7528\u6237\u8bbe\u5907\u914d\u7f6e",id:"ch5-\u7528\u6237\u8bbe\u5907\u914d\u7f6e",children:[]},{value:"Ch6. \u62e8\u53f7\u8ba1\u5212\u57fa\u7840",id:"ch6-\u62e8\u53f7\u8ba1\u5212\u57fa\u7840",children:[]},{value:"Ch7. \u5916\u90e8\u8fde\u901a\u6027",id:"ch7-\u5916\u90e8\u8fde\u901a\u6027",children:[]},{value:"Ch8. \u8bed\u97f3\u4fe1\u7bb1",id:"ch8-\u8bed\u97f3\u4fe1\u7bb1",children:[]},{value:"Ch9. \u56fd\u9645\u5316",id:"ch9-\u56fd\u9645\u5316",children:[]},{value:"Ch10. \u6df1\u5165\u62e8\u53f7\u8ba1\u5212",id:"ch10-\u6df1\u5165\u62e8\u53f7\u8ba1\u5212",children:[{value:"MeetMe",id:"meetme",children:[]},{value:"ConfBridge",id:"confbridge",children:[]}]},{value:"Ch11. Parking, Paging, and Conferencing",id:"ch11-parking-paging-and-conferencing",children:[]},{value:"Ch12. \u7f51\u7edc\u901a\u8bdd\u8def\u7531",id:"ch12-\u7f51\u7edc\u901a\u8bdd\u8def\u7531",children:[]},{value:"Ch13. \u81ea\u52a8\u547c\u53eb\u5206\u53d1\u961f\u5217 - ACD Queue",id:"ch13-\u81ea\u52a8\u547c\u53eb\u5206\u53d1\u961f\u5217---acd-queue",children:[]},{value:"Ch14. \u8bbe\u5907\u72b6\u6001",id:"ch14-\u8bbe\u5907\u72b6\u6001",children:[]},{value:"Ch15. \u81ea\u52a8\u51fa\u5e2d",id:"ch15-\u81ea\u52a8\u51fa\u5e2d",children:[]},{value:"Ch16. \u5173\u7cfb\u578b\u6570\u636e\u5e93\u96c6\u6210",id:"ch16-\u5173\u7cfb\u578b\u6570\u636e\u5e93\u96c6\u6210",children:[]},{value:"Ch17. \u4ea4\u4e92\u8bed\u8a00\u54cd\u5e94 - IVR",id:"ch17-\u4ea4\u4e92\u8bed\u8a00\u54cd\u5e94---ivr",children:[]},{value:"Ch18. \u5916\u90e8\u670d\u52a1",id:"ch18-\u5916\u90e8\u670d\u52a1",children:[]},{value:"Ch19. \u4f20\u771f",id:"ch19-\u4f20\u771f",children:[]},{value:"Ch20. \u7ba1\u7406\u63a5\u53e3 - AMI",id:"ch20-\u7ba1\u7406\u63a5\u53e3---ami",children:[]},{value:"Ch21. \u7f51\u5173\u63a5\u53e3 - AGI",id:"ch21-\u7f51\u5173\u63a5\u53e3---agi",children:[]},{value:"Ch22. \u96c6\u7fa4",id:"ch22-\u96c6\u7fa4",children:[]},{value:"Ch23. \u5206\u5e03\u5f0f\u5168\u7403\u53f7\u7801\u53d1\u73b0 - DUNDi",id:"ch23-\u5206\u5e03\u5f0f\u5168\u7403\u53f7\u7801\u53d1\u73b0---dundi",children:[]},{value:"Ch24. \u7cfb\u7edf\u76d1\u63a7\u548c\u65e5\u5fd7",id:"ch24-\u7cfb\u7edf\u76d1\u63a7\u548c\u65e5\u5fd7",children:[]},{value:"Ch25. Web \u63a5\u53e3",id:"ch25-web-\u63a5\u53e3",children:[]},{value:"Ch26. \u5b89\u5168",id:"ch26-\u5b89\u5168",children:[]},{value:"Ch27. \u672a\u6765\u5c55\u671b",id:"ch27-\u672a\u6765\u5c55\u671b",children:[]},{value:"Apd.A \u7406\u89e3\u7535\u8bdd\u6280\u672f",id:"apda-\u7406\u89e3\u7535\u8bdd\u6280\u672f",children:[]},{value:"Apd.B VoIP \u4e2d\u7684\u534f\u8bae",id:"apdb-voip-\u4e2d\u7684\u534f\u8bae",children:[]},{value:"Apd.C \u7cfb\u7edf\u51c6\u5907",id:"apdc-\u7cfb\u7edf\u51c6\u5907",children:[]}],p={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"asterisk-\u6743\u5a01\u6307\u5357\u7b2c\u56db\u7248---the-definitive-guide-4th-edition"},"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248 - The Definitive Guide, 4th Edition"),Object(l.b)("p",null,"\u8bfb\u4e66\u7b14\u8bb0"),Object(l.b)("h2",{id:"ch1-\u7535\u8bdd\u6280\u672f\u9769\u547d"},"Ch1. \u7535\u8bdd\u6280\u672f\u9769\u547d"),Object(l.b)("h2",{id:"ch2-\u67b6\u6784"},"Ch2. \u67b6\u6784"),Object(l.b)("h2",{id:"ch3-\u5b89\u88c5"},"Ch3. \u5b89\u88c5"),Object(l.b)("h2",{id:"ch4-\u521d\u59cb\u914d\u7f6e"},"Ch4. \u521d\u59cb\u914d\u7f6e"),Object(l.b)("h2",{id:"ch5-\u7528\u6237\u8bbe\u5907\u914d\u7f6e"},"Ch5. \u7528\u6237\u8bbe\u5907\u914d\u7f6e"),Object(l.b)("h2",{id:"ch6-\u62e8\u53f7\u8ba1\u5212\u57fa\u7840"},"Ch6. \u62e8\u53f7\u8ba1\u5212\u57fa\u7840"),Object(l.b)("h2",{id:"ch7-\u5916\u90e8\u8fde\u901a\u6027"},"Ch7. \u5916\u90e8\u8fde\u901a\u6027"),Object(l.b)("h2",{id:"ch8-\u8bed\u97f3\u4fe1\u7bb1"},"Ch8. \u8bed\u97f3\u4fe1\u7bb1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"app_voice mail.so"),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u9650\u7684\u5bc6\u7801\u4fdd\u62a4\u7684\u8bed\u97f3\u4fe1\u7bb1."),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u95ee\u5019,\u5fd9\u97f3\u548c\u65e0\u6548\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u81ea\u5b9a\u4e49\u95ee\u5019\u8bed"),Object(l.b)("li",{parentName:"ul"},"\u8bed\u97f3\u4fe1\u7bb1\u548c\u7535\u8bdd\u4e4b\u95f4\u591a\u5bf9\u591a\u5173\u8054"),Object(l.b)("li",{parentName:"ul"},"\u90ae\u4ef6\u63d0\u9192\u5e76\u5728\u9644\u4ef6\u4e2d\u9644\u4e0a\u8bed\u97f3\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u8bed\u97f3\u90ae\u4ef6\u8f6c\u53d1\u548c\u5e7f\u64ad"),Object(l.b)("li",{parentName:"ul"},"\u6d88\u606f\u7b49\u5f85\u63d0\u793a"))),Object(l.b)("li",{parentName:"ul"},"voicemail.conf"),Object(l.b)("li",{parentName:"ul"},"\u5bc6\u7801",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mailbox context oldpass newpass")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mailbox => password[,FirstName LastName[,email addr[,pager addr [,options[|options]]]]]")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_VoiceMail"},"VoiceMail"),"(mailbox1&[mailbox2","[&...]","],","[options]",")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7279\u6b8a DTMF \u64cd\u4f5c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"0")," \u8df3\u8f6c\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"o")," \u6269\u5c55"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"*")," \u8df3\u8f6c\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"a")," \u6269\u5c55"))),Object(l.b)("li",{parentName:"ul"},"VMSTATUS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SUCCESS"),Object(l.b)("li",{parentName:"ul"},"USEREXIT"),Object(l.b)("li",{parentName:"ul"},"FAILED"))),Object(l.b)("li",{parentName:"ul"},"options",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"b - \u64ad\u653e\u5fd9\u97f3"),Object(l.b)("li",{parentName:"ul"},"d( c ) - Accept digits for a new extension in context c, if played during the greeting. Context defaults to the current context.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"c"))),Object(l.b)("li",{parentName:"ul"},"g( # ) - Use the specified amount of gain when recording the voicemail message. The units are whole-number decibels (dB). Only works on supported technologies, which is DAHDI only.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("h1",{parentName:"li",id:""})))),Object(l.b)("li",{parentName:"ul"},"s - \u4e0d\u64ad\u653e\u4efb\u4f55\u63d0\u793a\u97f3"),Object(l.b)("li",{parentName:"ul"},"u - \u64ad\u653e\u65e0\u6548\u97f3(unavailable greeting)"),Object(l.b)("li",{parentName:"ul"},"U - \u6807\u8bb0\u6d88\u606f URGENT."),Object(l.b)("li",{parentName:"ul"},"P - \u6807\u8bb0\u6d88\u606f PRIORITY."))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_VoiceMailMain"},"VoiceMailMain"),"([mailbox@","[context]","],","[options]",")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7279\u6b8a DTMF \u64cd\u4f5c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"*")," \u8df3\u8f6c\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"a")," \u6269\u5c55"))),Object(l.b)("li",{parentName:"ul"},"options",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"p - Consider the mailbox parameter as a prefix to the mailbox that is entered by the caller."),Object(l.b)("li",{parentName:"ul"},"g( # ) - Use the specified amount of gain when recording a voicemail message. The units are whole-number decibels (dB).",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("h1",{parentName:"li",id:"-1"})))),Object(l.b)("li",{parentName:"ul"},"s - \u4e0d\u68c0\u6d4b\u5bc6\u7801"),Object(l.b)("li",{parentName:"ul"},"a( folder ) - \u8df3\u8fc7\u76ee\u5f55\u8be2\u95ee, \u76f4\u63a5\u8fdb\u5165\u6307\u5b9a\u76ee\u5f55. \u9ed8\u8ba4\u4e3a INBOX (0).",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"folder",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"0 - \u6536\u4ef6\u7bb1 - INBOX"),Object(l.b)("li",{parentName:"ul"},"1 - \u65e7\u90ae\u4ef6 - Old"),Object(l.b)("li",{parentName:"ul"},"2 - \u5de5\u4f5c - Work"),Object(l.b)("li",{parentName:"ul"},"3 - \u5bb6\u5ead - Family"),Object(l.b)("li",{parentName:"ul"},"4 - \u670b\u53cb - Friends"),Object(l.b)("li",{parentName:"ul"},"5 - \u81ea\u5b9a\u4e49 1 - Cust1"),Object(l.b)("li",{parentName:"ul"},"6 - \u81ea\u5b9a\u4e49 2 - Cust2"),Object(l.b)("li",{parentName:"ul"},"7 - \u81ea\u5b9a\u4e49 3 - Cust3"),Object(l.b)("li",{parentName:"ul"},"8 - \u81ea\u5b9a\u4e49 4 - Cust4"),Object(l.b)("li",{parentName:"ul"},"9 - \u81ea\u5b9a\u4e49 5 - Cust5"))))))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_VoiceMailPlayMsg"},"VoiceMailPlayMsg"),"([mailbox@","[context]","],msg_id)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"VOICEMAIL_PLAYBACKSTATUS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SUCCESS"),Object(l.b)("li",{parentName:"ul"},"FAILED")))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"extensions.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'; \u6839\u636e\u72b6\u6001\u4e0d\u540c\u8fdb\u884c\u4e0d\u540c\u7684\u63d0\u793a\nexten => 101,1,NoOp()\n  same => n,Dial(${JOHN},10)\n  same => n,GotoIf($["${DIALSTATUS}" = "BUSY"]?busy:unavail) same => n(unavail),VoiceMail(101@default,u)\n  same => n,Hangup()\n  same => n(busy),VoiceMail(101@default,b)\n  same => n,Hangup()\n\n; \u8fdb\u5165\u8bed\u8a00\u4fe1\u7bb1\nexten => *98,1,NoOp(Access voicemail retrieval.)\n  same => n,VoiceMailMain()\n')),Object(l.b)("h2",{id:"ch9-\u56fd\u9645\u5316"},"Ch9. \u56fd\u9645\u5316"),Object(l.b)("h2",{id:"ch10-\u6df1\u5165\u62e8\u53f7\u8ba1\u5212"},"Ch10. \u6df1\u5165\u62e8\u53f7\u8ba1\u5212"),Object(l.b)("h3",{id:"meetme"},"MeetMe"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u5bc6\u7801\u4fdd\u62a4\u7684\u4f1a\u8bae"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u8bae\u7ba1\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9759\u97f3"),Object(l.b)("li",{parentName:"ul"},"\u9501\u5b9a"),Object(l.b)("li",{parentName:"ul"},"\u8e22\u51fa\u53c2\u4e0e\u8005"))),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u9009\u62e9\u53ea\u5141\u8bb8\u5355\u4eba\u53d1\u8bdd"),Object(l.b)("li",{parentName:"ul"},"\u9759\u6001\u6216\u52a8\u6001\u7684\u4f1a\u8bae\u521b\u5efa"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981 DAHDI \u652f\u6301")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"meetme.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[rooms]\nconf => 600\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"extensions.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[LocalConf]\n; 54321 \u4e3a\u5bc6\u7801\nexten => 600,1,MeetMe(600,i,54321)\n\n; MeetMeCount(room[, var])\n; \u83b7\u53d6\u4f1a\u8bae\u4eba\u6570, \u5e76\u6307\u5b9a\u5230\u53d8\u91cf, \u5982\u679c\u4e0d\u6307\u5b9a\u5219\u4f1a\u62a5\u7ed9\u5bf9\u65b9\nexten => 601,1,NoOp()\n  same => n,Playback(conf-thereare)\n  same => n,MeetMeCount(600)\n  same => n,Playback(conf-peopleinconf)\n\n; \u9650\u5236\u6700\u591a 10 \u4eba\u53c2\u4e0e\u4f1a\u8bae\nexten => 602,1,NoOp()\n  same => n,MeetMeCount(600,CONFCOUNT)\n  same => n,GotoIf($[${CONFCOUNT} <= 10]?meetme:conf_full,1)\n  same => n(meetme),MeetMe(600,i,54321)\nexten => conf_full,1,Playback(conf-full)\n")),Object(l.b)("h3",{id:"confbridge"},"ConfBridge"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Asterisk 10+"),Object(l.b)("li",{parentName:"ul"},"\u7528\u6765\u66ff\u4ee3 MeetMe \u7684\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ad8\u6e05\u97f3\u9891, 8kHz - 96kHz"),Object(l.b)("li",{parentName:"ul"},"\u89c6\u9891"),Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001\u63a7\u5236\u83dc\u5355"),Object(l.b)("li",{parentName:"ul"},"\u989d\u5916\u7684\u914d\u7f6e\u6587\u4ef6 ",Object(l.b)("em",{parentName:"li"},"confbridge.conf"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"confbridge.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[general]\n[default_user]\ntype=user\n\n[default_bridge]\ntype=bridge\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"extensions.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"; ConfBridge(conference,[bridge_profile:default_bridge,[user_profile:default_user,[menu]]])\n; https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_ConfBridge\n[ConferenceRooms]\nexten => 602,1,NoOp()\n  same => n,ConfBridge(${EXTEN})\n[LocalSets]\ninclude => ConferenceRooms\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'asterisk -rx "module load app_confbridge.so"\n')),Object(l.b)("h2",{id:"ch11-parking-paging-and-conferencing"},"Ch11. Parking, Paging, and Conferencing"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Call_parking"},"Parking")," \u547c\u53eb\u4fdd\u7559, Paging \u5bfb\u547c"),Object(l.b)("li",{parentName:"ul"},"features.conf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"general"),Object(l.b)("li",{parentName:"ul"},"featuremap"),Object(l.b)("li",{parentName:"ul"},"applicationmap"))),Object(l.b)("li",{parentName:"ul"},"\u91cd\u8f7d\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"features reload")),Object(l.b)("li",{parentName:"ul"},"\u91cd\u8f7d ConfBridge ",Object(l.b)("inlineCode",{parentName:"li"},"module reload app_confbridge.so")),Object(l.b)("li",{parentName:"ul"},"Asterisk 11+ \u540e\u53ef\u4ee5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"FEATURE")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"FEATUREMAP")," \u51fd\u6570\u52a8\u6001\u521b\u5efa\u7279\u6027\u6620\u5c04(Feature-Map).",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Function_FEATURE"},"FEATURE"),"(option_name)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"option_name",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"atxfer Attended transfer"),Object(l.b)("li",{parentName:"ul"},"blindxfer Blind transfer"),Object(l.b)("li",{parentName:"ul"},"automon Auto Monitor() (call recording)"),Object(l.b)("li",{parentName:"ul"},"disconnect Call disconnect"),Object(l.b)("li",{parentName:"ul"},"parkcall Call parking"),Object(l.b)("li",{parentName:"ul"},"automixmon Auto MixMonitor() (call recording)"))),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u8d85\u65f6 ",Object(l.b)("inlineCode",{parentName:"li"},"Set(FEATURE(parkingtime)=60)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Function_FEATUREMAP"},"FEATUREMAP"),"(feature_name)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"feature_name",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"atxfer - Attended Transfer"),Object(l.b)("li",{parentName:"ul"},"blindxfer - Blind Transfer"),Object(l.b)("li",{parentName:"ul"},"automon - Auto Monitor"),Object(l.b)("li",{parentName:"ul"},"disconnect - Call Disconnect"),Object(l.b)("li",{parentName:"ul"},"parkcall - Park Call"),Object(l.b)("li",{parentName:"ul"},"automixmon - Auto MixMonitor"))),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6216\u83b7\u53d6\u7279\u5b9a\u901a\u9053\u7684\u7279\u6027\u6620\u5c04"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Verbose(2,Current DTMF for atxfer: ${FEATUREMAP(atxfer)})")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Set(FEATUREMAP(atxfer)=*9)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Set(__DYNAMIC_FEATURES=shifteight)")," \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u7279\u6027\u7ec4"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_Page"},"Page"),"(Technology/Resource&[Technology2/Resource2","[&...]","],[options,","[timeout]","])"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_Read"},"Read"),"(variable,filename&[filename2","[&...]","],[maxdigits,[options,[attempts,","[timeout]","]]]])",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bfb\u53d6 ",Object(l.b)("inlineCode",{parentName:"li"},"#")," \u7ed3\u5c3e\u7684\u6570\u5b57"),Object(l.b)("li",{parentName:"ul"},"READSTATUS - \u8bfb\u53d6\u72b6\u6001",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"OK"),Object(l.b)("li",{parentName:"ul"},"ERROR"),Object(l.b)("li",{parentName:"ul"},"HANGUP"),Object(l.b)("li",{parentName:"ul"},"INTERRUPTED"),Object(l.b)("li",{parentName:"ul"},"SKIPPED"),Object(l.b)("li",{parentName:"ul"},"TIMEOUT"))),Object(l.b)("li",{parentName:"ul"},"maxdigits",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6700\u5927\u957f\u5ea6,\u9ed8\u8ba4 0, \u4e0d\u9650, \u7b49\u5f85\u7528\u6237\u8f93\u5165 ",Object(l.b)("inlineCode",{parentName:"li"},"#"),", \u6700\u957f 255"))),Object(l.b)("li",{parentName:"ul"},"options",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"s - \u5982\u679c\u7ebf\u8def\u4e2d\u65ad\u5219\u7acb\u5373\u8fd4\u56de"),Object(l.b)("li",{parentName:"ul"},"i - \u5c06\u6587\u4ef6\u540d\u4f5c\u4e3a indications.conf \u4e2d\u5b9a\u4e49\u7684\u63d0\u793a\u97f3\u8fdb\u884c\u64ad\u653e"),Object(l.b)("li",{parentName:"ul"},"n - \u5373\u4fbf\u662f\u7ebf\u8def\u72b6\u6001\u4e2d\u65ad\u4e5f\u8bfb\u53d6"))),Object(l.b)("li",{parentName:"ul"},"attempts",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u6b21\u6570, \u9ed8\u8ba4 0"))),Object(l.b)("li",{parentName:"ul"},"timeout",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8d85\u65f6\u65f6\u95f4, \u79d2, \u5982\u679c\u8bbe\u7f6e\u4e86\u5219\u4f1a\u8986\u76d6\u9ed8\u8ba4\u503c,\u53ef\u4ee5\u4e3a\u6d6e\u70b9\u6570"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+14+Application_Originate"},"Originate"),"(tech_data,type,arg1,[arg2,[arg3,","[timeout]","]])",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5916\u90e8\u547c\u53eb,\u5e76\u5173\u8054\u5230\u6307\u5b9a\u7684\u6269\u5c55\u6216\u5e94\u7528.\u4f1a\u963b\u585e\u76f4\u5230\u63a5\u901a\u6216\u5931\u8d25.\u8be5\u5e94\u7528\u4f1a\u8fd4\u56de\u5e76\u7ee7\u7eed\u5904\u7406."),Object(l.b)("li",{parentName:"ul"},"ORIGINATE_STATUS - \u8fd4\u56de\u72b6\u6001",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"FAILED"),Object(l.b)("li",{parentName:"ul"},"SUCCESS"),Object(l.b)("li",{parentName:"ul"},"BUSY"),Object(l.b)("li",{parentName:"ul"},"CONGESTION"),Object(l.b)("li",{parentName:"ul"},"HANGUP"),Object(l.b)("li",{parentName:"ul"},"RINGING"),Object(l.b)("li",{parentName:"ul"},"UNKNOWN - \u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u4f1a\u51fa\u73b0\u8be5\u503c\u7684,\u5982\u679c\u51fa\u73b0\u4e86\u8bf7\u524d\u53bb\u63d0 BUG"))))),Object(l.b)("li",{parentName:"ul"},"ConfBridge",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u89c6\u9891,\u4f46 Asterisk \u4e0d\u652f\u6301\u89c6\u9891\u8f6c\u7801,\u9700\u8981\u6240\u6709\u4eba\u90fd\u4f7f\u7528\u540c\u6837\u7684\u7f16\u7801"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u89c6\u9891\u5e7f\u64ad,\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u663e\u793a\u4e00\u4e2a\u89c6\u9891\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u5728 sip.conf \u4e2d\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"videosupport=yes")),Object(l.b)("li",{parentName:"ul"},"\u5728 confbridg.conf bridge \u4e2d\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"video_mode"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"none"),Object(l.b)("li",{parentName:"ul"},"follow_talker - \u4f1a\u5c06\u89c6\u9891\u6e90\u5207\u6362\u4e3a\u8bf4\u8bdd\u7684\u4eba"),Object(l.b)("li",{parentName:"ul"},"last_marked"),Object(l.b)("li",{parentName:"ul"},"first_marked"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sip show peer 0F1")," \u53ef\u67e5\u770b\u5bf9\u89c6\u9891\u7684\u652f\u6301\u72b6\u6001\u548c\u652f\u6301\u7684\u7f16\u7801"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jitsi.org/"},"https://jitsi.org/")),Object(l.b)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 H.264/H.263 \u7f16\u7801")))),Object(l.b)("p",null,"overhead paging system (PA system, or Tannoy, for our UK readers)\npaging system (more formally known as a public address system)\n",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public_address_system"},"https://en.wikipedia.org/wiki/Public_address_system")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"extensions.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"; \u542f\u7528\u5728 applicationmap \u4e2d\u5b9a\u4e49\u7684\u7279\u6027\nexten => 101,1,NoOp()\n  same => n,Set(__DYNAMIC_FEATURES=agi_test)\n  same => n,Dial(SIP/0000FFFF0002)\n\n; \u7b49\u5f85\u6807\u8bb0\u7684\u7528\u6237\u8fdb\u5165\u4f1a\u8bae\n[ConferenceRooms]\n; \u4e00\u822c\u53c2\u4e0e\u8005\nexten => 602,1,NoOp()\n    same => n,Set(CONFBRIDGE(user,wait_marked)=yes)\n    same => n,Set(CONFBRIDGE(user,end_marked)=yes)\n    same => n,Goto(conference,1)\n; \u6807\u8bb0\u7684\u53c2\u4e0e\u503c,\u9700\u8981\u5bc6\u7801\nexten => 603,1,NoOp()\n    same => n,Set(CONFBRIDGE(user,marked)=yes)\n    same => n,Set(CONFBRIDGE(user,pin)=1200)\n    same => n,Goto(conference,1)\n; \u6240\u6709\u4eba\u90fd\u4f7f\u7528\u540c\u6837\u7684\u6865\u63a5\nexten => conference,1,NoOp()\n    same => n,ConfBridge(primary)\n\n\n[ConferenceRooms]\n; \u4e00\u822c\u53c2\u4e0e\u8005\nexten => 602,1,NoOp()\n  same => n,Goto(conference,1)\nexten => conference,1,NoOp()\n  same => n,Set(thisBridge=primary)\n  same => n,ConfBridge(${thisBridge},,,volume_ctrl_menu)\n; \u7531\u83dc\u5355\u6267\u884c\nexten => conference_joiner,1,NoOp()\n  same => n,Read(numberToDial,vm-enter-num-to-call)\n  same => n,Originate(SIP/my_itsp/${numberToDial},exten,ConferenceRooms,602,1)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"confbridge.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[volume_ctrl_menu]\ntype=menu\n*5=toggle_mute\n1=increase_listening_volume 4=decrease_listening_volume\n7=reset_listening_volume\n3=increase_talking_volume\n6=decrease_talking_volume\n9=reset_talking_volume\n; \u7279\u6b8a\u7684\u83dc\u5355\u529f\u80fd\n0=dialplan_exec(ConferenceRooms,conference_joiner,1)\n")),Object(l.b)("h2",{id:"ch12-\u7f51\u7edc\u901a\u8bdd\u8def\u7531"},"Ch12. \u7f51\u7edc\u901a\u8bdd\u8def\u7531"),Object(l.b)("h2",{id:"ch13-\u81ea\u52a8\u547c\u53eb\u5206\u53d1\u961f\u5217---acd-queue"},"Ch13. \u81ea\u52a8\u547c\u53eb\u5206\u53d1\u961f\u5217 - ACD Queue"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ACD: Automatic Call Distribution")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"member & agent"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Asterisk \u4e2d\u7684 member \u662f\u6307\u80fd\u591f\u8fdb\u884c\u62e8\u53f7\u7684\u901a\u9053.\u4f8b\u5982 SIP/0F1"),Object(l.b)("li",{parentName:"ul"},"agent \u4e00\u822c\u4e5f\u6307\u7528\u6765\u62e8\u53f7\u7684\u901a\u9053,\u4f46\u73b0\u5728 agent \u901a\u9053\u73b0\u5728\u5df2\u7ecf\u4e0d\u518d\u4f7f\u7528\u4e86.\u56e0\u6b64\u4e0d\u5efa\u8bae\u4f7f\u7528 chan_agent."),Object(l.b)("li",{parentName:"ul"},"agent \u53ef\u7528\u6765\u7279\u6307\u63a5\u7ebf\u5458."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"queues.conf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"AddQueueMember()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"RemoveQueueMember()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"PauseQueueMember()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"UnpauseQueueMember()"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u91cd\u8f7d\u914d\u7f6e\nmodule reload app_queue.so\nqueue show\n# W: Queue weight\n# C: Number of calls presented to this queue\n# A: Number of calls that have been answered by a member SL: Service level\n# \u6210\u5458\u7ba1\u7406\n# queue add member <channel> to <queue> [[[penalty <penalty>] as <membername>] state_interface <interface>]\nqueue add member SIP/0F1 to support\nqueue show support\nqueue remove member SIP/0F1 from support\n\nqueue pause member SIP/0F1 queue support reason DoingCallbacks\nqueue unpause member SIP/0F1 queue support reason off-break\n\n\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"extensions.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[Queues]\nexten => 7001,1,Verbose(2,${CALLERID(all)} entering the support queue)\n  same => n,Queue(support)\n  same => n,Hangup()\nexten => 7002,1,Verbose(2,${CALLERID(all)} entering the sales queue)\n  same => n,Queue(sales)\n  same => n,Hangup()\n\n[LocalSets]\ninclude => Queues      ; allow phones to call queues\n")),Object(l.b)("h2",{id:"ch14-\u8bbe\u5907\u72b6\u6001"},"Ch14. \u8bbe\u5907\u72b6\u6001"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u865a\u62df\u8bbe\u5907"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"MeetMe:<conference bridge>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"SLA:<shared line>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Custom:<custom name>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Park:<exten@context>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Calendar:<calendar name>")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h2",{id:"ch15-\u81ea\u52a8\u51fa\u5e2d"},"Ch15. \u81ea\u52a8\u51fa\u5e2d"),Object(l.b)("h2",{id:"ch16-\u5173\u7cfb\u578b\u6570\u636e\u5e93\u96c6\u6210"},"Ch16. \u5173\u7cfb\u578b\u6570\u636e\u5e93\u96c6\u6210"),Object(l.b)("h2",{id:"ch17-\u4ea4\u4e92\u8bed\u8a00\u54cd\u5e94---ivr"},"Ch17. \u4ea4\u4e92\u8bed\u8a00\u54cd\u5e94 - IVR"),Object(l.b)("h2",{id:"ch18-\u5916\u90e8\u670d\u52a1"},"Ch18. \u5916\u90e8\u670d\u52a1"),Object(l.b)("h2",{id:"ch19-\u4f20\u771f"},"Ch19. \u4f20\u771f"),Object(l.b)("h2",{id:"ch20-\u7ba1\u7406\u63a5\u53e3---ami"},"Ch20. \u7ba1\u7406\u63a5\u53e3 - AMI"),Object(l.b)("h2",{id:"ch21-\u7f51\u5173\u63a5\u53e3---agi"},"Ch21. \u7f51\u5173\u63a5\u53e3 - AGI"),Object(l.b)("h2",{id:"ch22-\u96c6\u7fa4"},"Ch22. \u96c6\u7fa4"),Object(l.b)("h2",{id:"ch23-\u5206\u5e03\u5f0f\u5168\u7403\u53f7\u7801\u53d1\u73b0---dundi"},"Ch23. \u5206\u5e03\u5f0f\u5168\u7403\u53f7\u7801\u53d1\u73b0 - DUNDi"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Distributed Universal Number Discovery (DUNDi)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Distributed_Universal_Number_Discovery"},"DUNDi"))),Object(l.b)("h2",{id:"ch24-\u7cfb\u7edf\u76d1\u63a7\u548c\u65e5\u5fd7"},"Ch24. \u7cfb\u7edf\u76d1\u63a7\u548c\u65e5\u5fd7"),Object(l.b)("h2",{id:"ch25-web-\u63a5\u53e3"},"Ch25. Web \u63a5\u53e3"),Object(l.b)("h2",{id:"ch26-\u5b89\u5168"},"Ch26. \u5b89\u5168"),Object(l.b)("h2",{id:"ch27-\u672a\u6765\u5c55\u671b"},"Ch27. \u672a\u6765\u5c55\u671b"),Object(l.b)("h2",{id:"apda-\u7406\u89e3\u7535\u8bdd\u6280\u672f"},"Apd.A \u7406\u89e3\u7535\u8bdd\u6280\u672f"),Object(l.b)("h2",{id:"apdb-voip-\u4e2d\u7684\u534f\u8bae"},"Apd.B VoIP \u4e2d\u7684\u534f\u8bae"),Object(l.b)("h2",{id:"apdc-\u7cfb\u7edf\u51c6\u5907"},"Apd.C \u7cfb\u7edf\u51c6\u5907"))}u.isMDXComponent=!0}}]);