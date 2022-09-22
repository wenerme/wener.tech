"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[138],{49613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return N}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=o(a),N=r,c=s["".concat(u,".").concat(N)]||s[N]||k[N]||l;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},28067:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return k}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],m={title:"IAX",tags:["RFC","Protocol"]},u=void 0,o={unversionedId:"voip/asterisk/iax",id:"voip/asterisk/iax",title:"IAX",description:"- rfc5456",source:"@site/notes/voip/asterisk/iax.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/iax",permalink:"/notes/voip/asterisk/iax",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/iax.md",tags:[{label:"RFC",permalink:"/notes/tags/rfc"},{label:"Protocol",permalink:"/notes/tags/protocol"}],version:"current",frontMatter:{title:"IAX",tags:["RFC","Protocol"]},sidebar:"docs",previous:{title:"DAHDI",permalink:"/notes/voip/asterisk/dahdi"},next:{title:"res_http",permalink:"/notes/voip/asterisk/res_http"}},p={},k=[{value:"Protocol",id:"protocol",level:2}],s={toc:k};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc5456"},"rfc5456"),"\nIAX: Inter-Asterisk eXchange Version 2"),(0,l.kt)("li",{parentName:"ul"},"peer-to-peer, VoIP-oriented protocol"),(0,l.kt)("li",{parentName:"ul"},"control & media"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iax:[username@]host[:port][/number[?context]]")),(0,l.kt)("li",{parentName:"ul"},"60s \u8d85\u65f6")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Registration - \u6ce8\u518c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"REGREQ, REGAUTH, REGACK, REGREJ, REGREL"))),(0,l.kt)("li",{parentName:"ul"},"Call Link Management - Call Leg Management",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NEW, AUTHREP, AUTHREQ, REJECT, HANGUP, ACCEPT, PROCEEDING, RINGING, ANSWER"))),(0,l.kt)("li",{parentName:"ul"},"Call Control",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PROCEEDING, RINGING, ANSWER"))),(0,l.kt)("li",{parentName:"ul"},"Mid-Call Behavior - Mid-Call Link Operations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FLASH, HOLD, UNHOLD, QUELCH, UNQUELCH, TRANSFER"))),(0,l.kt)("li",{parentName:"ul"},"Call Path Optimization",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TXREJ, TXREL, TXREQ, TXCNT, TXACC, TXREADY, TXMEDIA"))),(0,l.kt)("li",{parentName:"ul"},"Call Tear Down",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HANGUP, REJECT, TRANSFER, TXREADY"))),(0,l.kt)("li",{parentName:"ul"},"Network Monitoring",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"POKE, PING, PONG, LAGRQ, LAGRP"))),(0,l.kt)("li",{parentName:"ul"},"Digit Dialing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DPREQ, DPREP, DIAL"))),(0,l.kt)("li",{parentName:"ul"},"Miscellaneous",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ACK, INVAL, VNAK, MWI, UNSUPPORT"))),(0,l.kt)("li",{parentName:"ul"},"Media Messages",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DMTF"),(0,l.kt)("li",{parentName:"ul"},"voice, video, text, image, html")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"abbr."),(0,l.kt)("th",{parentName:"tr",align:null},"stand for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IE"),(0,l.kt)("td",{parentName:"tr",align:null},"Information Element")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d88\u606f\u4f20\u8f93",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mini Frame",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"media data"))),(0,l.kt)("li",{parentName:"ul"},"Full Frame - reliably",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"signaling, media data"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ACK \u786e\u8ba4"),(0,l.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 sequence"),(0,l.kt)("li",{parentName:"ul"},"timestamp \u8981\u6c42\u5355\u8c03\u9012\u589e"))))),(0,l.kt)("li",{parentName:"ul"},"Trunking",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"trunk frame",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c01\u88c5 trunked call audio"),(0,l.kt)("li",{parentName:"ul"},"2 octets - source number"),(0,l.kt)("li",{parentName:"ul"},"2 octets - length of data"))))),(0,l.kt)("li",{parentName:"ul"},"Timers"),(0,l.kt)("li",{parentName:"ul"},"Encryption",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AES"),(0,l.kt)("li",{parentName:"ul"},"NEW \u65f6\u5efa\u7acb")))),(0,l.kt)("h2",{id:"protocol"},"Protocol"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://kroki.io/bytefield/svg/eNqlkktvwjAMgO_8iqi7gLRKpTzHbYMh7bJJgxvqwS0OREsfS1IxhPLf57KuDwnQpB2-i_PZie10t8jBGKXZLNy5O4WYsNOMCymZcwce5-A5ttfptrQjSpkeao_zy14mko-mFXqXrOgI7TuBw4Vaucok1h4OwxGfFN5ZZFEq8zhxJYQoNds4nnPv9AmfGBBDYkSMiQkxJR6IR-KJmBML4plYEv_LD36ez8L0C7WboXIVDWzg12H3ILZmz3yvCCk4uGUDe4QtKv0bJZNRPbY5zXRGc-rbelEBa1mrNFcRsjnQfF7zOETVSBvZaiNBK-v9Su2WtEBtRAJGpMnt-sUu26lrEVMyxFktD3zb-EbBeYOV_7bCzyR1WOlObavay83TpYIY2fqY4TVj_pduV3kYSdC6KjKx1Rt3kNE4wEBxGIvyw5XL02xsG90Yk8a9zjfJygQ0",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"F - full frame"),(0,l.kt)("li",{parentName:"ul"},"R - retransmitted"),(0,l.kt)("li",{parentName:"ul"},"time-stamp - since first transmission of the call"),(0,l.kt)("li",{parentName:"ul"},"OSeqno - outbound stream sequence number"),(0,l.kt)("li",{parentName:"ul"},"ISeqno - inbound stream sequence number"),(0,l.kt)("li",{parentName:"ul"},"C - \u5f71\u54cd Subclass",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"0 - Subclass 7-bit unsigned integer"),(0,l.kt)("li",{parentName:"ul"},"1 - pow(Subclass,2)"))),(0,l.kt)("li",{parentName:"ul"},"frame type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DTMF"),(0,l.kt)("li",{parentName:"ul"},"Voice"),(0,l.kt)("li",{parentName:"ul"},"Video"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Null"),(0,l.kt)("li",{parentName:"ul"},"IAX",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b IE"))),(0,l.kt)("li",{parentName:"ul"},"Text"),(0,l.kt)("li",{parentName:"ul"},"Image"),(0,l.kt)("li",{parentName:"ul"},"HTML"),(0,l.kt)("li",{parentName:"ul"},"Comfort Noise")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="mini frame"',title:'"mini','frame"':!0},"                        1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |F|     Source call number      |            time-stamp         |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               |\n   :                             Data                              :\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="meta frame"',title:'"meta','frame"':!0},"    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |F|         Meta Indicator      |V|      Source Call Number     |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |?|          time-stamp         |                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                               |\n   |                                         Data                  |\n   :                                                               :\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"frame \u524d 16 byte \u90fd\u4e3a 0"),(0,l.kt)("li",{parentName:"ul"},"Meta Indicator = 0"),(0,l.kt)("li",{parentName:"ul"},"V=1 - meta video frame")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="meta trunk frame"',title:'"meta',trunk:!0,'frame"':!0},"    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |F|         Meta Indicator      |V|Meta Command | Cmd Data (0)  |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                            time-stamp                         |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |R|      Source Call Number     |     Data Length (in octets)   |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               |\n   :                             Data                              :\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n                                   .\n                                   .\n                                   .\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |R|      Source Call Number     |     Data Length (in octets)   |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               |\n   :                             Data                              :\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Meta Command=1 - meta trunk frame"),(0,l.kt)("li",{parentName:"ul"},"Command Data",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"0 - \u4e0d\u5305\u542b timestamp"),(0,l.kt)("li",{parentName:"ul"},"1 - \u989d\u5916\u589e\u52a0 timestamp")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="full frame enc"',title:'"full',frame:!0,'enc"':!0},"                        1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |F|     Source Call Number      |R|   Destination Call Number   |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                         12 Random bytes                       |\n   |                                                               |\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |               28  Random bits                         |padding|\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               |\n   : between 0 and 15 (as indicated by the padding field above)    :\n   :                         Random bytes                          :\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               |\n   :                    Remainder of Actual Frame                  :\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="full frame dec"',title:'"full',frame:!0,'dec"':!0},"                        1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |F|     Source Call Number      |R|   Destination Call Number   |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                         Encrypted data                        |\n   |                Multiple of 16 bytes                           |\n   |                                                               |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")))}N.isMDXComponent=!0}}]);