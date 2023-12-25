/*! For license information please see 982a9eb3.7783d8a1.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84617],{23457:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=s(11527),r=s(47214);const i={title:"n2n"},l="n2n",d={id:"service/network/vpn/n2n",title:"n2n",description:"- ntop/n2n \u662f\u4ec0\u4e48?",source:"@site/../notes/service/network/vpn/n2n.md",sourceDirName:"service/network/vpn",slug:"/service/network/vpn/n2n",permalink:"/notes/service/network/vpn/n2n",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/n2n.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"n2n"},sidebar:"docs",previous:{title:"n2n version",permalink:"/notes/service/network/vpn/n2n-version"},next:{title:"nebula",permalink:"/notes/service/network/vpn/nebula"}},c={},h=[{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"\u52a0\u5bc6",id:"\u52a0\u5bc6",level:3},{value:"NOTES",id:"notes",level:2},{value:"supernode",id:"supernode",level:2},{value:"Supernode not responding, now trying",id:"supernode-not-responding-now-trying",level:2}];function x(n){const e={a:"a",admonition:"admonition",annotation:"annotation",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"n2n",children:"n2n"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/ntop/n2n",children:"ntop/n2n"})," \u662f\u4ec0\u4e48?"]}),"\n",(0,t.jsx)(e.li,{children:"\u4e2d\u5fc3\u8282\u70b9 - supernode"}),"\n",(0,t.jsx)(e.li,{children:"\u5355\u7ebf\u7a0b"}),"\n",(0,t.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"http://www.supernode.ml",children:"supernode.ml"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"supernode \u5217\u8868"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/lucktu/n2n",children:"lucktu/n2n"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9884\u7f16\u8bd1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["supernode\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"7654/udp - \u4e3b\u8981"}),"\n",(0,t.jsx)(e.li,{children:"7654/tcp - \u8f85\u52a9"}),"\n",(0,t.jsx)(e.li,{children:"5645/udp - \u7ba1\u7406"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["edge\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"5644/udp - \u7ba1\u7406"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"bridge \u652f\u6301\u6709\u70b9\u95ee\u9898"}),"\n",(0,t.jsxs)(e.li,{children:["\u6ca1\u6709\u53ef\u7528\u7684 ios \u5e94\u7528 - ",(0,t.jsx)(e.a,{href:"https://github.com/ntop/n2n/issues/381",children:"ntop/n2n#381"})]}),"\n"]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# macOS\nbrew install --cash tuntap\nbrew install openssl cmake\n\n# Make\n./autogen.sh\n# CFLAGS \u53ef\u542f\u7528\u672c\u5730\u6307\u4ee4\u4f18\u5316\n./configure CFLAGS=\"-O3 -march=native\"\nmake\n\n# CMake\nmkdir -p build && cd build\ncmake -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl ../\nmake\n# \u4e0d\u60f3\u5b89\u88c5\u53ef\u76f4\u63a5\u4f7f\u7528 - \u4f1a\u5b89\u88c5\u5230 /usr/local/sbin\n# make install\n\n./edge --help\n\n# -r -a dhcp:0.0.0.0\nN2N_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | head -c 32)\nsudo N2N_KEY=$N2N_KEY edge  -c community -l 127.0.0.1:7654 -f -a 10.20.1.1\n\n# supernode mgmt\nnc -u 127.0.0.1 5645\n# edge mgmt\nnc -u 127.0.0.1 5644\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"edge 3.0"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"edge <config file>\nedge  -c <community name> -l <supernode host:port>\n"})}),"\n",(0,t.jsxs)(e.p,{children:["| flag                     | defaul         |\n| ------------------------ | -------------- | ------------------------------------------------------------- |\n| -c COMMUNITY             | ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"N"}),(0,t.jsx)(e.mn,{children:"2"}),(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"N"}),(0,t.jsx)(e.mi,{children:"C"})]}),(0,t.jsx)(e.mi,{children:"O"}),(0,t.jsx)(e.mi,{children:"M"}),(0,t.jsx)(e.mi,{children:"M"}),(0,t.jsx)(e.mi,{children:"U"}),(0,t.jsx)(e.mi,{children:"N"}),(0,t.jsx)(e.mi,{children:"I"}),(0,t.jsx)(e.mi,{children:"T"}),(0,t.jsx)(e.mi,{children:"Y"}),(0,t.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,t.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,t.jsx)(e.mo,{children:"\u2212"}),(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"K"}),(0,t.jsx)(e.mi,{children:"E"}),(0,t.jsx)(e.mi,{children:"Y"}),(0,t.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"N2N_COMMUNITY |\n| -k KEY                   | "})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(e.span,{className:"mord",children:"2"}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"C"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"OMM"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,t.jsx)(e.span,{className:"mord",children:"\u2223\u2223"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"}),(0,t.jsx)(e.span,{className:"mord",children:"\u2223"})]})]})]}),"N2N_KEY       | encryption key                                                |\n| -J PASSWORD              | $N2N_PASSWORD  |\n| -l HOST:PORT             |                | supernode                                                     |\n| ",(0,t.jsx)(e.code,{children:" -p [<ip>:]<port>"}),"      | any            | \u7ed1\u5b9a\u7684\u672c\u5730\u5730\u5740\u548c\u7aef\u53e3                                          |\n| -T TOS                   |                | \u5305 TOS                                                        |\n| -D                       |                | PMTU discovery                                                |\n| -e IP                    | auto           | \u5e7f\u64ad\u7684\u672c\u5730\u5730\u5740                                                |\n| -S1                      |                | \u603b\u4f7f\u7528 supernode UDP                                          |\n| -S2                      |                | \u603b\u4f7f\u7528 supernode TCP                                          |\n| -i REG_INTERVAL          | 20             | \u6ce8\u518c\u95f4\u9694\uff0c\u7528\u4e8e NAT                                            |\n| -L REG_TTL               | 0              |\n| -H                       |                | \u5934\u52a0\u5bc6 - \u8981\u6c42 supernode \u914d\u7f6e\u56fa\u5b9a community                    |\n| -z,z1,z2                 |                | \u5305\u538b\u7f29 - -z1, -z = lzo1x                                      |\n| --select-rtt             |                | \u57fa\u4e8e rtt \u9009\u62e9 supernode - \u9ed8\u8ba4\u57fa\u4e8e\u8d1f\u8f7d                        |\n| ",(0,t.jsx)(e.code,{children:"-a [mode]<ip>[/n]"}),"      |                | CIDR \u9ed8\u8ba4 /24',mode=static,dhcp",(0,t.jsx)(e.br,{}),"DHCP ",(0,t.jsx)(e.code,{children:"-r -a dhcp:0.0.0.0"})," |\n| -m MAD                   |                | \u9ed8\u8ba4\u968f\u673a                                                      |\n| -d DEVICE                |                | TAP \u8bbe\u5907\u540d\u5b57                                                  |\n| -M MTU                   | 1290           |\n| -r                       |                | packet forwarding                                             |\n| -E                       |                | accept multicast MAC addresses                                |\n| -I DESCRIPTION           |                | edge \u63cf\u8ff0 - \u7528\u4e8e\u7ba1\u7406\u8bc6\u522b                                      |\n| -P public_key            |                | federation public key for user-password authentication        |\n| -R RULE                  |                | \u81ea\u5b9a\u4e49\u89c4\u5219                                                    |\n| -f                       |                |\n| -t PORT                  | 5644           |\n| --management_password PW | n2n            |\n| -n CIDW:GW               |                | \u8def\u7531\u89c4\u5219                                                      |"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"edge 2.8"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"flag"}),(0,t.jsx)(e.th,{children:"param"}),(0,t.jsx)(e.th,{children:"desc"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-d"}),(0,t.jsx)(e.td,{children:"tun device"}),(0,t.jsx)(e.td,{children:"tun \u8bbe\u5907\u540d\u5b57 - \u5426\u5219\u5c31\u662f tun0 \u8fd9\u6837\u7684\u540d\u5b57"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-a"}),(0,t.jsx)(e.td,{children:"mode:address"}),(0,t.jsx)(e.td,{children:"\u5730\u5740 - DHCP \u53ef\u4f7f\u7528 '-r -a dhcp:0.0.0.0'"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-c"}),(0,t.jsx)(e.td,{children:"community"}),(0,t.jsx)(e.td,{children:"community \u540d\u5b57"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-k"}),(0,t.jsx)(e.td,{children:"encrypt key"}),(0,t.jsx)(e.td,{children:"N2N_KEY"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-s"}),(0,t.jsx)(e.td,{children:"netmask"}),(0,t.jsx)(e.td,{children:"\u63a9\u7801 - 255.255.255.0 \u683c\u5f0f"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-l,supernode-list"}),(0,t.jsx)(e.td,{children:"host:port"}),(0,t.jsx)(e.td,{children:"Supernode \u5730\u5740:\u7aef\u53e3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-i"}),(0,t.jsx)(e.td,{children:"reg_interval"}),(0,t.jsx)(e.td,{children:"\u6ce8\u518c\u95f4\u9694\uff0c\u7528\u4e8e NAT \u7a7f\u900f - \u9ed8\u8ba4 20 \u79d2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-L"}),(0,t.jsx)(e.td,{children:"reg_ttl"}),(0,t.jsx)(e.td,{children:"NAT \u7a7f\u900f \u65f6 UDP \u6ce8\u518c\u7684 TTL - \u9ed8\u8ba4 0 \u672a\u8bbe\u7f6e"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-p"}),(0,t.jsx)(e.td,{children:"local port"}),(0,t.jsx)(e.td,{children:"\u672c\u5730\u56fa\u5b9a UDP \u7aef\u53e3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-u"}),(0,t.jsx)(e.td,{children:"UID"}),(0,t.jsx)(e.td,{children:"\u8fd0\u884c UID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-g"}),(0,t.jsx)(e.td,{children:"GID"}),(0,t.jsx)(e.td,{children:"\u8fd0\u884c GID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-f"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u524d\u53f0\u8fd0\u884c"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-m"}),(0,t.jsx)(e.td,{children:"MAC address"}),(0,t.jsx)(e.td,{children:"\u56fa\u5b9a mac \u5730\u5740"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-M"}),(0,t.jsx)(e.td,{children:"mtu"}),(0,t.jsx)(e.td,{children:"\u63a5\u53e3 MTU - \u9ed8\u8ba4 1290"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-D"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u542f\u7528 PMTU \u53d1\u73b0 - \u652f\u6301\u573a\u666f\u53ef\u51cf\u5c11\u5206\u5305\uff0c\u4e0d\u652f\u6301\u53ef\u80fd\u5bfc\u81f4\u5305\u5ef6\u65f6"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-r"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u542f\u7528\u5305\u8f6c\u53d1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-H"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u5934\u52a0\u5bc6 - \u8981\u6c42 supernode \u914d\u7f6e\u56fa\u5b9a community"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-z,z1,z2"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u5305\u538b\u7f29 - -z1 or -z = lzo1x (default=disabled)."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-E"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u652f\u6301\u591a\u64ad MAC - \u9ed8\u8ba4\u4e22\u5f03"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-S"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u4e0d\u5c1d\u8bd5 P2P - \u901a\u8fc7 supernode \u4e2d\u8f6c"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-T"}),(0,t.jsx)(e.td,{children:"tos"}),(0,t.jsx)(e.td,{children:"TOS for packets - \u4f8b\u5982 SSH \u4e3a 0x48"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-n"}),(0,t.jsx)(e.td,{children:"cidr:gateway"}),(0,t.jsx)(e.td,{children:"\u8def\u7531\u7ed9\u5b9a\u7f51\u7edc - \u53ef\u4f7f\u7528 0.0.0.0/0 \u8def\u7531\u9ed8\u8ba4\u7f51\u7edc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-v"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u8be6\u7ec6\u65e5\u5fd7 - \u53ef\u591a\u6b21\u6307\u5b9a"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"-t"}),(0,t.jsx)(e.td,{children:"port"}),(0,t.jsx)(e.td,{children:"\u7ba1\u7406 UDP \u7aef\u53e3"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"\u52a0\u5bc6",children:"\u52a0\u5bc6"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"n2n \u5185\u5efa\u7b97\u6cd5 - \u4e5f\u53ef\u4ee5\u7f16\u8bd1\u7684\u65f6\u5019 link openssl"}),"\n",(0,t.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"-k $KEY"})," \u6216\u8005 N2N_KEY \u63d0\u4f9b\u5bc6\u94a5"]}),"\n",(0,t.jsx)(e.li,{children:"\u9ed8\u8ba4 -A3/AES"}),"\n",(0,t.jsxs)(e.li,{children:["-A1 \u4e3a\u4e0d\u52a0\u5bc6\uff0c\u4e0d\u63d0\u4f9b ",(0,t.jsx)(e.code,{children:"-k"})," \u65f6\u7684\u9ed8\u8ba4"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Flag"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Cipher"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Mode"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Block Size"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Key Size"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"IV length"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Speed"}),(0,t.jsx)(e.th,{children:"Built-In"}),(0,t.jsx)(e.th,{children:"Origin"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"-A2"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Twofish"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"CTS"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128 bits"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"256 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"-..O"}),(0,t.jsx)(e.td,{children:"Y"}),(0,t.jsx)(e.td,{children:"Bruce Schneier"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"-A3"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"AES"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"CTS"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128 bits"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128, 192, 256 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"O..+"}),(0,t.jsx)(e.td,{children:"Y"}),(0,t.jsx)(e.td,{children:"Joan Daemen, Vincent Rijmen, NSA-approved"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"-A4"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"ChaCha20"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"CTR"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Stream"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"256 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"+..++"}),(0,t.jsx)(e.td,{children:"Y"}),(0,t.jsx)(e.td,{children:"Daniel J. Bernstein"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"-A5"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"SPECK"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"CTR"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Stream"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"256 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"128 bit"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"++"}),(0,t.jsx)(e.td,{children:"Y"}),(0,t.jsx)(e.td,{children:"NSA"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"notes",children:"NOTES"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u591a\u4e2a supernode \u53ef\u7ec4\u8054\u90a6 - community=*Federation\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5b9e\u73b0\u5907\u4efd\u3001\u5bb9\u707e\u548c\u8d1f\u8f7d\u5747\u8861 - \u907f\u514d DDoS"}),"\n",(0,t.jsx)(e.li,{children:"edge \u53ef\u4ee5\u8fde\u4e00\u4e2a\u6216\u591a\u4e2a"}),"\n",(0,t.jsxs)(e.li,{children:["\u540d\u5b57\u53ef ",(0,t.jsx)(e.code,{children:"-F"})," \u6307\u5b9a\uff0c\u9ed8\u8ba4 ",(0,t.jsx)(e.code,{children:"*Federation"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["3.0 \u5b9e\u73b0 ",(0,t.jsx)(e.a,{href:"https://github.com/ntop/n2n/blob/dev/doc/Authentication.md",children:"\u8ba4\u8bc1"})," - \u4e4b\u524d\u4f7f\u7528 MAC\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u652f\u6301\u57fa\u4e8e edge \u63d0\u4f9b\u7684\u6807\u8bc6\u4fe1\u606f"}),"\n",(0,t.jsxs)(e.li,{children:["\u652f\u6301 user/password \u6a21\u5f0f\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528 n2n-keygen \u751f\u6210"}),"\n",(0,t.jsx)(e.li,{children:"sn \u5728 community.list \u4e2d\u6dfb\u52a0\u751f\u6210\u7684\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"edge -I ${USERNAME} -J ${PASSWORD} -A5/-A4 -k ${N2N_KEY} -P ${SN_PUB_KEY}"})}),"\n",(0,t.jsx)(e.li,{children:"\u9700\u8981\u7528\u5230 \u5934 \u52a0\u5bc6"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["community\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["19 byte - \u4e0d\u5141\u8bb8\u5305\u542b ",(0,t.jsx)(e.code,{children:".*+?[]\\"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u652f\u6301\u6b63\u5219\u5339\u914d - \u4f8b\u5982 ",(0,t.jsx)(e.code,{children:"net[0-9]"})," \u6216\u8005 ",(0,t.jsx)(e.code,{children:"net\\d"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u9ed8\u8ba4 ",(0,t.jsx)(e.strong,{children:"\u660e\u6587\u4f20\u8f93"})," - \u9664\u975e\u5f00\u542f \u5934 \u52a0\u5bc6"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5f00\u542f \u5934 \u52a0\u5bc6\u540e\u540d\u5b57\u4e0d\u80fd\u4f7f\u7528\u6b63\u5219 - \u53ea\u80fd\u662f\u56fa\u5b9a\u540d\u5b57\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:".*"})," \u6765\u5141\u8bb8\u4efb\u610f"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"\u53ef\u88ab\u8ba4\u4e3a\u662f\u7b80\u5355\u7684\u5bc6\u7801 - \u53ea\u6709\u77e5\u9053 community \u624d\u80fd\u52a0\u5165\u7f51\u7edc"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"supernode",children:"supernode"}),"\n",(0,t.jsxs)(e.p,{children:["| opt                      | default                      |\n| ------------------------ | ---------------------------- | ----------------------------------------- |\n| -p PORT                  | 7654                         | UDP, \u672c\u5730\u7aef\u53e3                             |\n| -F FEDERATION            | ",(0,t.jsx)(e.code,{children:"*Federation"}),"                | \u8054\u90a6\u540d\u5b57                                  |\n| -l HOST:PORT             |                              | \u5df2\u77e5\u7684 supernode \u540d\u5b57\u6216\u5730\u5740               |\n| -M                       |                              | \u7981\u7528 MAC \u548c IP \u6b3a\u9a97\u4fdd\u62a4\u672a\u6388\u6743 communities |\n| -V VERSION               |                              | \u53d1\u9001\u7ed9 edge \u7684\u7248\u672c\u4fe1\u606f - \u6700\u957f 19          |\n| -c PATH                  |                              | \u5141\u8bb8\u7684 communities                        |\n| -a                       | 10.128.255.0-10.255.255.0/24 | \u5b50\u7f51                                      |\n| -t                       | 5645                         | UDP, \u7ba1\u7406\u7aef\u53e3                             |\n| --management_password PW | n2n                          | \u7ba1\u7406\u5bc6\u7801                                  |"]}),"\n",(0,t.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(e.h2,{id:"supernode-not-responding-now-trying",children:"Supernode not responding, now trying"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u91cd\u8bd5\u4e24\u6b21\u540e\u5c31\u505c\u6b62\u4e86\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u542f\u8fdb\u884c\u518d\u6b21\u8fde\u63a5\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},3354:(n,e,s)=>{var t=s(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var t,i={},h=null,x=null;for(t in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)l.call(e,t)&&!c.hasOwnProperty(t)&&(i[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===i[t]&&(i[t]=e[t]);return{$$typeof:r,type:n,key:h,ref:x,props:i,_owner:d.current}}e.Fragment=i,e.jsx=h,e.jsxs=h},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>l});var t=s(50959);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);