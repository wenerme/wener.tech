/*! For license information please see 6fd05d62.dc367c35.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74607],{50146:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=t(11527),l=t(47214);const r={title:"nftables \u89c4\u5219"},s="\u8868\u8fbe\u5f0f",d={id:"os/linux/network/nftables-rule",title:"nftables \u89c4\u5219",description:"- accept\u3001drop\u3001queue\u3001continue\u3001return\u3001jump chain\u3001goto chain",source:"@site/../notes/os/linux/network/nftables-rule.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/nftables-rule",permalink:"/notes/os/linux/network/nftables-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/nftables-rule.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"nftables \u89c4\u5219"},sidebar:"docs",previous:{title:"NFTables Cookbook",permalink:"/notes/os/linux/network/nftables-cookbook"},next:{title:"NFTables",permalink:"/notes/os/linux/network/nftables"}},c={},h=[{value:"\u4f18\u5148\u7ea7",id:"\u4f18\u5148\u7ea7",level:2},{value:"\u5339\u914d",id:"\u5339\u914d",level:2},{value:"nft",id:"nft",level:2},{value:"nft cli",id:"nft-cli",level:2},{value:"\u9ed8\u8ba4\u89c4\u5219",id:"\u9ed8\u8ba4\u89c4\u5219",level:2},{value:"masquerade",id:"masquerade",level:2},{value:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",id:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",level:2},{value:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",id:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",level:2},{value:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230 22",id:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230-22",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u8868\u8fbe\u5f0f",children:"\u8868\u8fbe\u5f0f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"accept\u3001drop\u3001queue\u3001continue\u3001return\u3001jump chain\u3001goto chain"}),"\n",(0,i.jsx)(e.li,{children:"masquerade - \u6e90\u5730\u5740\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u51fa\u53e3\u5730\u5740"}),"\n",(0,i.jsxs)(e.li,{children:["type\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"filter\u3001route\u3001nat"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"family"}),(0,i.jsx)(e.th,{children:"-"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ip"}),(0,i.jsx)(e.td,{children:"IPv4 - \u9ed8\u8ba4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ip6"}),(0,i.jsx)(e.td,{children:"IPv6"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"inet"}),(0,i.jsx)(e.td,{children:"IPv4/IPv6"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"arp"}),(0,i.jsx)(e.td,{children:"IPv4 ARP"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"bridge"}),(0,i.jsx)(e.td,{children:"\u7ecf\u8fc7\u6865\u63a5\u8bbe\u5907\u7684\u5305"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"netdev"}),(0,i.jsx)(e.td,{children:"\u5165\u53e3\u8bbe\u5907"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"[\u5730\u5740\u7c7b\u578b]"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"hook"}),(0,i.jsx)(e.th,{children:"desc"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"prerouting"}),(0,i.jsx)(e.td,{children:"\u6240\u6709\u8fdb\u5165\u7cfb\u7edf\u7684\u5305\uff0c\u5728\u8def\u7531\u4e4b\u524d\u5904\u7406\uff0c\u53ef\u7528\u4e8e\u8fc7\u6ee4\u548c\u4fee\u6539\u5c5e\u6027"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"input"}),(0,i.jsx)(e.td,{children:"\u8fdb\u5165 \u672c\u5730 \u7cfb\u7edf\u7684\u5305"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"forward"}),(0,i.jsx)(e.td,{children:"\u8f6c\u53d1\u5230\u5176\u4ed6 host \u7684\u5305"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"output"}),(0,i.jsx)(e.td,{children:"\u672c\u5730 \u53d1\u51fa\u7684\u5305"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"postrouting"}),(0,i.jsx)(e.td,{children:"\u6240\u6709\u79bb\u5f00\u7cfb\u7edf\u7684\u5305"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ingress"}),(0,i.jsx)(e.td,{children:"\u6240\u6709\u8fdb\u5165\u7cfb\u7edf\u7684\u5305\uff0c L3 \u4e4b\u524d\uff0c\u65e9\u4e8e prerouting\uff0c\u53ea\u80fd\u7528\u4e8e inet"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"[Hook \u7c7b\u578b]"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5730\u5740 \u652f\u6301\u7684 hook\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ip,ip6,inet,bridge - prerouting,input,forward,output,postrouting"}),"\n",(0,i.jsx)(e.li,{children:"arp - input,output"}),"\n",(0,i.jsx)(e.li,{children:"netdav - ingress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f18\u5148\u7ea7",children:"\u4f18\u5148\u7ea7"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"PRI"}),(0,i.jsx)(e.th,{children:"name"}),(0,i.jsx)(e.th,{children:"def"}),(0,i.jsx)(e.th,{children:"desc"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-400"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_CONNTRACK_DEFRAG"}),(0,i.jsx)(e.td,{children:"priority of defragmentation"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-300"}),(0,i.jsx)(e.td,{children:"raw"}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_RAW"}),(0,i.jsx)(e.td,{children:"traditional priority of the raw table placed before connection tracking operation"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-225"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_SELINUX_FIRST"}),(0,i.jsx)(e.td,{children:"SELinux operations"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-200"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_CONNTRACK"}),(0,i.jsx)(e.td,{children:"Connection tracking operations"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-150"}),(0,i.jsx)(e.td,{children:"mangle"}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_MANGLE"}),(0,i.jsx)(e.td,{children:"mangle operation"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-100"}),(0,i.jsx)(e.td,{children:"dstnat"}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_NAT_DST"}),(0,i.jsx)(e.td,{children:"DNAT"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"0"}),(0,i.jsx)(e.td,{children:"filter"}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_FILTER"}),(0,i.jsx)(e.td,{children:"filtering operation, the filter table"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"50"}),(0,i.jsx)(e.td,{children:"security"}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_SECURITY"}),(0,i.jsx)(e.td,{children:"Place of security table where secmark can be set for example"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"srcnat"}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_NAT_SRC"}),(0,i.jsx)(e.td,{children:"SNAT"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"225"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_SELINUX_LAST"}),(0,i.jsx)(e.td,{children:"SELinux at packet exit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"NF_IP_PRI_CONNTRACK_HELPER"}),(0,i.jsx)(e.td,{children:"connection tracking at exit"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"bridge \u4f18\u5148\u7ea7"})}),"\n",(0,i.jsx)(e.p,{children:"| Name   | Value \uff5c Hooks |\n| ------ | -------------- | ----------- |\n| dstnat | -300           | prerouting  |\n| filter | -200           | all         |\n| out    | 100            | output      |\n| srcnat | 300            | postrouting |"}),"\n",(0,i.jsx)(e.h2,{id:"\u5339\u914d",children:"\u5339\u914d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["meta \uff08\u5143\u5c5e\u6027\uff0c\u5982\u63a5\u53e3\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"oif\u3001iif\u3001oifname\u3001iifname"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["icmp \uff08ICMP \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["icmpv6 \uff08ICMPv6 \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ip \uff08IP \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"protocol"}),"\n",(0,i.jsx)(e.li,{children:"daddr"}),"\n",(0,i.jsx)(e.li,{children:"saddr"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ip6 \uff08IPv6 \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"daddr"}),"\n",(0,i.jsx)(e.li,{children:"saddr"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["tcp \uff08TCP \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"dport"}),"\n",(0,i.jsx)(e.li,{children:"sport"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["udp \uff08UDP \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"dport"}),"\n",(0,i.jsx)(e.li,{children:"sport"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["sctp \uff08SCTP \u534f\u8bae\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"dport"}),"\n",(0,i.jsx)(e.li,{children:"sport"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ct \uff08\u94fe\u63a5\u8ddf\u8e2a\uff09\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"state new | established | related | invalid"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u770b\u7aef\u53e3\nnft describe tcp dport\n"})}),"\n",(0,i.jsx)(e.h2,{id:"nft",children:"nft"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"\\"})," \u7eed\u884c"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"#"})," \u6ce8\u91ca"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6807\u8bc6\u7b26 ",(0,i.jsx)(e.code,{children:"^[a-zA-Z][a-zA-Z0-9/\\_.]*"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53ef\u4f7f\u7528\u53cc\u5f15\u53f7\u907f\u514d\u51b2\u7a81"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://man.archlinux.org/man/nft.8",children:"nft.8"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-nft",children:"# \u5f15\u5165\u6587\u4ef6\n# -I/--includepath\n# \u5ffd\u7565 . \u5f00\u5934\u6587\u4ef6\ninclude filename\n\n# \u5b9a\u4e49\u53d8\u91cf\ndefine variable = expr\n# \u4f7f\u7528\u53d8\u91cf\n$variable\n"})}),"\n",(0,i.jsx)(e.h2,{id:"nft-cli",children:"nft cli"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u63cf\u8ff0\u4fe1\u606f\nnft describe tcp flags\nnft describe ct_state\nnft describe icmp type\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4e3b\u8981\u64cd\u4f5c\u5bf9\u8c61"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["rulset - \u6240\u6709\u7684 table \u548c chain\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"{list | flush} ruleset [family]"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["table\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"chain \u5bb9\u5668"}),"\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7 \u5730\u5740\u7c7b\u578b\u548c\u540d\u5b57\u6807\u8bc6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{add | create} table [family] table [{ flags flags ; }]\n{delete | list | flush} table [family] table\nlist tables [family]\ndelete table [family] handle handle\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["chain\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"rule \u5bb9\u5668"}),"\n",(0,i.jsx)(e.li,{children:"\u533a\u5206 base chian \u548c regular chain"}),"\n",(0,i.jsxs)(e.li,{children:["base - entry point for packets from the networking stack\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u652f\u6301 policy - \u9ed8\u8ba4 accept"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"regular - may be used as jump target and is used for better rule organization"}),"\n",(0,i.jsx)(e.li,{children:"chain type"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"type"}),(0,i.jsx)(e.th,{children:"families"}),(0,i.jsx)(e.th,{children:"hooks"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"filter"}),(0,i.jsx)(e.td,{children:"all"}),(0,i.jsx)(e.td,{children:"all"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"nat"}),(0,i.jsx)(e.td,{children:"ip, ip6, inet"}),(0,i.jsx)(e.td,{children:"prerouting, input, output, postrouting"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"route"}),(0,i.jsx)(e.td,{children:"ip, ip6"}),(0,i.jsx)(e.td,{children:"output"})]})]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"nat \u901a\u8fc7\u505a NAT \u5904\u7406\uff0c\u53ea\u5904\u7406\u7b2c\u4e00\u4e2a\u5305 - \u7528\u4e8e created conntrack entry"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{add | create} chain [family] table chain [{ type type hook hook [device device] priority priority ; [policy policy ;] }]\n{delete | list | flush} chain [family] table chain\nlist chains [family]\ndelete chain [family] table handle handle\nrename chain [family] table chain newname\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["rule\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5b9e\u9645\u64cd\u4f5c\u89c4\u5219"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{add | insert} rule [family] table chain [handle handle | index index] statement ... [comment comment]\nreplace rule [family] table chain handle handle statement ... [comment comment]\ndelete rule [family] table chain handle handle\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["set - ",(0,i.jsx)(e.code,{children:"{80,443}"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u533a\u5206\u533f\u540d\u96c6\u5408\u548c\u6709\u540d\u5b57\u7684\u96c6\u5408"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u4e8e\u8f85\u52a9\u5b9a\u4e49"}),"\n",(0,i.jsxs)(e.li,{children:["\u7528\u8fc7 ",(0,i.jsx)(e.code,{children:"@set_name"})," \u5f15\u7528"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"add set [family] table set { type type | typeof expression ; [flags flags ;] [timeout timeout ;] [gc-interval gc-interval ;] [elements = { element[, ...] } ;] [size size ;] [policy policy ;] [auto-merge ;] }\n{delete | list | flush} set [family] table set\nlist sets [family]\ndelete set [family] table handle handle\n{add | delete} element [family] table set { element[, ...] }\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"map"}),"\n",(0,i.jsx)(e.li,{children:"element"}),"\n",(0,i.jsxs)(e.li,{children:["flowtable\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"accelerate packet forwarding in software"}),"\n",(0,i.jsx)(e.li,{children:"layer 3/4"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u72b6\u6001\u5bf9\u8c61\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"counter"}),"\n",(0,i.jsx)(e.li,{children:"quota"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ct helper\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5b9a\u4e49 connection tracking helper"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u4e8e ct helper set"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ct timeout\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"update connection tracking timeout"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ct expectation\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"create connection expectations"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u4e8e ct expectation set"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"counter"}),"\n",(0,i.jsx)(e.li,{children:"quota"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9ed8\u8ba4\u89c4\u5219",children:"\u9ed8\u8ba4\u89c4\u5219"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'# \u6e05\u7a7a\nflush ruleset\n\n# \u57fa\u7840 IPv4/IPv6 \u6709\u72b6\u6001\u7684\u9632\u706b\u5899 - \u7528\u6237\u670d\u52a1\u5668\u6216\u5de5\u4f5c\u7ad9\ntable inet filter {\n\tchain input {\n    # \u9ed8\u8ba4 drop input\n\t\ttype filter hook input priority 0; policy drop;\n\n    # \u5141\u8bb8\u672c\u5730\u6d41\u91cf\n\t\tiifname lo accept \\\n\t\tcomment "Accept any localhost traffic"\n\n    # \u5141\u8bb8\u51fa\u53bb\u7684\u6d41\u91cf\n\t\tct state { established, related } accept \\\n\t\tcomment "Accept traffic originated from us"\n\n    # \u4e22\u5f03\u65e0\u6548\u8fde\u63a5\n\t\tct state invalid drop \\\n\t\tcomment "Drop invalid connections"\n\n    # 113 \u7aef\u53e3\u8fd4\u56de\u7aef\u53e3\u4e0d\u53ef\u8fbe\n    # https://en.wikipedia.org/wiki/Ident_protocol\n    # https://github.com/janikrabe/oidentd\n    # apk add oidentd\n\t\ttcp dport 113 reject with icmpx type port-unreachable \\\n\t\tcomment "Reject AUTH to make it fail fast"\n\n\t\t# ICMPv4\n    # \u63a5\u53d7\u6307\u5b9a\u7c7b\u578b\u7684 icmp \u7c7b\u578b\n\t\tip protocol icmp icmp type {\n\t\t\techo-reply,  # type 0\n\t\t\tdestination-unreachable,  # type 3\n\t\t\ttime-exceeded,  # type 11\n\t\t\tparameter-problem,  # type 12\n\t\t} accept \\\n\t\tcomment "Accept ICMP"\n\n    # \u9650\u5236 ping \u901f\u7387\n\t\tip protocol icmp icmp type echo-request limit rate 1/second accept \\\n\t\tcomment "Accept max 1 ping per second"\n\n\t\t# ICMPv6\n\n\t\tip6 nexthdr icmpv6 icmpv6 type {\n\t\t\tdestination-unreachable,  # type 1\n\t\t\tpacket-too-big,  # type 2\n\t\t\ttime-exceeded,  # type 3\n\t\t\tparameter-problem,  # type 4\n\t\t\techo-reply,  # type 129\n\t\t} accept \\\n\t\tcomment "Accept basic IPv6 functionality"\n\n\t\tip6 nexthdr icmpv6 icmpv6 type echo-request limit rate 1/second accept \\\n\t\tcomment "Accept max 1 ping per second"\n\n    # IPv6 SLAAC \u534f\u8bae\n\t\tip6 nexthdr icmpv6 icmpv6 type {\n\t\t\tnd-router-solicit,  # type 133\n\t\t\tnd-router-advert,  # type 134\n\t\t\tnd-neighbor-solicit,  # type 135\n\t\t\tnd-neighbor-advert,  # type 136\n\t\t} ip6 hoplimit 255 accept \\\n\t\tcomment "Allow IPv6 SLAAC"\n\n    # IPv6 \u591a\u64ad\u94fe\u8def\u53d1\u73b0\n\t\tip6 nexthdr icmpv6 icmpv6 type {\n\t\t\tmld-listener-query,  # type 130\n\t\t\tmld-listener-report,  # type 131\n\t\t\tmld-listener-reduction,  # type 132\n\t\t\tmld2-listener-report,  # type 143\n\t\t} ip6 saddr fe80::/10 accept \\\n\t\tcomment "Allow IPv6 multicast listener discovery on link-local"\n\t}\n\n\tchain forward {\n    # \u9ed8\u8ba4\u4e0d\u5141\u8bb8\u8f6c\u53d1\n\t\ttype filter hook forward priority 0; policy drop;\n\t}\n\n\tchain output {\n    # \u9ed8\u8ba4\u4e0d\u5141\u8bb8 output\n\t\ttype filter hook output priority 0; policy accept;\n\t}\n}\n# \u5305\u542b\u81ea\u5b9a\u4e49\u89c4\u5219\ninclude "/etc/nftables.d/*.nft"\n'})}),"\n",(0,i.jsx)(e.h2,{id:"masquerade",children:"masquerade"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'table ip nat {\n  chain prerouting {\n    type nat hook prerouting priority 0;\n  }\n  chain postrouting {\n    type nat hook postrouting priority 100;\n    # \u6e90\u5730\u5740\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u51fa\u53e3\u5730\u5740\n    oifname "enp0s2" masquerade\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",children:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"table inet filter {\n  chain input {\n    type filter hook input priority 0;\n    # allow ssh,http\n    tcp dport {ssh,http,https} accept\n    # http3 use udp\n    udp dport {https} accept\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",children:"\u9650\u5b9a\u6765\u6e90\u5730\u5740"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"define ALLOWED_NETS = {\n  192.168.0.0/16,\n  1.2.3.4\n}\n\ntable inet firewall {\n  chain inbound {\n    type filter hook input priority 0; policy drop;\n    # \u9650\u5b9a\u6765\u6e90\u8bbf\u95ee\n    tcp dport { http, https } ip saddr $ALLOWED_NETS accept\n    udp dport { http, https } ip saddr $ALLOWED_NETS accept\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230-22",children:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230 22"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"table ip nat {\n  chain prerouting {\n    type nat hook prerouting priority 0;\n    tcp dport != 22 redirect to 22\n  }\n  chain postrouting {\n    type nat hook postrouting priority 0;\n  }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},3354:(n,e,t)=>{var i=t(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,t){var i,r={},h=null,a=null;for(i in void 0!==t&&(h=""+t),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(a=e.ref),e)s.call(e,i)&&!c.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===r[i]&&(r[i]=e[i]);return{$$typeof:l,type:n,key:h,ref:a,props:r,_owner:d.current}}e.Fragment=r,e.jsx=h,e.jsxs=h},11527:(n,e,t)=>{n.exports=t(3354)},47214:(n,e,t)=>{t.d(e,{Z:()=>d,a:()=>s});var i=t(50959);const l={},r=i.createContext(l);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);