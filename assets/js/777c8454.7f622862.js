/*! For license information please see 777c8454.7f622862.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77080],{32692:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=s(2488),r=s(62780);const i={title:"Shell FAQ",tags:["FAQ"]},d="Shell FAQ",c={id:"os/linux/shell/shell-faq",title:"Shell FAQ",description:"skip first n line",source:"@site/../notes/os/linux/shell/shell-faq.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/faq",permalink:"/notes/os/linux/shell/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/shell-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1705291463,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"Shell FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Shell Awesome",permalink:"/notes/os/linux/shell/awesome"},next:{title:"profile",permalink:"/notes/os/linux/shell/profile"}},t={},h=[{value:"skip first n line",id:"skip-first-n-line",level:2},{value:"sort in place",id:"sort-in-place",level:2},{value:"tree utf8 chartset",id:"tree-utf8-chartset",level:2},{value:"tree exclude",id:"tree-exclude",level:2},{value:"shebang",id:"shebang",level:2},{value:"\u83b7\u53d6\u4e00\u4e2a Tab \u5b57\u7b26",id:"\u83b7\u53d6\u4e00\u4e2a-tab-\u5b57\u7b26",level:2},{value:"\u627e\u5230\u6700\u5927\u7684\u6587\u4ef6",id:"\u627e\u5230\u6700\u5927\u7684\u6587\u4ef6",level:2},{value:"\u6587\u4ef6\u65f6\u95f4\u4fe1\u606f",id:"\u6587\u4ef6\u65f6\u95f4\u4fe1\u606f",level:2},{value:"pwd vs cwd",id:"pwd-vs-cwd",level:2},{value:"doas vs sudo",id:"doas-vs-sudo",level:2},{value:"string include/match",id:"string-includematch",level:2},{value:"trim space",id:"trim-space",level:2},{value:"Terminal vs Console vs Shell",id:"terminal-vs-console-vs-shell",level:2},{value:"\u57fa\u4e8e\u65f6\u95f4\u641c\u7d22",id:"\u57fa\u4e8e\u65f6\u95f4\u641c\u7d22",level:2},{value:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55 mod",id:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55-mod",level:2},{value:"shell vs python",id:"shell-vs-python",level:2},{value:"zsh vs bash",id:"zsh-vs-bash",level:2},{value:"tee stderr",id:"tee-stderr",level:2},{value:"Sort Large File",id:"sort-large-file",level:2},{value:"arch",id:"arch",level:2},{value:"detect",id:"detect",level:2},{value:"PATH",id:"path",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"shell-faq",children:"Shell FAQ"}),"\n",(0,l.jsx)(n.h2,{id:"skip-first-n-line",children:"skip first n line"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"tail -n +1\n"})}),"\n",(0,l.jsx)(n.h2,{id:"sort-in-place",children:"sort in place"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# -o \u53ef\u4ee5\uff0c\u4e0d\u8981 > file\nsort -o file{,}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"tree-utf8-chartset",children:"tree utf8 chartset"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# -N Print non-printable characters\ntree -N\n"})}),"\n",(0,l.jsx)(n.h2,{id:"tree-exclude",children:"tree exclude"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"tree -I 'containerd|docker'\ntree -I 'node_modules|cache|test_*'\n\ntree -L 3 -I 'node_modules*|cache*'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"shebang",children:"shebang"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"for bash"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"#!/usr/bin/env bash\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"posix shell"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u83b7\u53d6\u4e00\u4e2a-tab-\u5b57\u7b26",children:"\u83b7\u53d6\u4e00\u4e2a Tab \u5b57\u7b26"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo -ne \\\\t | pbcopy\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u627e\u5230\u6700\u5927\u7684\u6587\u4ef6",children:"\u627e\u5230\u6700\u5927\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"find . -printf '%s %p\\n' | sort -nr | head\nfind . -maxdepth 1 -printf '%s %p\\n' | sort -nr | head\ndu -a . | sort -nr | head\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6587\u4ef6\u65f6\u95f4\u4fe1\u606f",children:"\u6587\u4ef6\u65f6\u95f4\u4fe1\u606f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"touch file\nstat file\nTZ=UTC stat -c '%y %n' file\ndate -r file +%s\n# [[CC]YY]MMDDhhmm[.ss]\ntouch -a -m -t 203801181205.09 file\ntouch -d \"2012-10-19 12:12:12.000000000 +0530\" file\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"crtime - birt time"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'inode=$(stat -c %i test)\n# stat \u4fe1\u606f\ndebugfs -R "stat ${inode}" /dev/sdb1\n# \u5371\u9669\u64cd\u4f5c\numount /dev/sdb1\ndebugfs -w -R "set_inode_field ${inode} crtime 200001010101.11" /dev/sdb1\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/herzbube/birthtime_touch",children:"herzbube/birthtime_touch"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pwd-vs-cwd",children:"pwd vs cwd"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"type -a pwd\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"-"}),(0,l.jsx)(n.th,{children:"-"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"builtin pwd"}),(0,l.jsx)(n.td,{children:"echo $PWD"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"/bin/pwd"}),(0,l.jsx)(n.td,{children:"pwd -P"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"getcwd"}),(0,l.jsx)(n.td,{children:"readlink -f /proc/self/cwd"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"doas-vs-sudo",children:"doas vs sudo"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["doas\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"95% of the features of sudo with a fraction of the codebase"}),"\n",(0,l.jsx)(n.li,{children:"~1000 LOC"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["sudo\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"~18K LOC"}),"\n",(0,l.jsx)(n.li,{children:"\u4f9d\u8d56\u5f88\u591a - eventlog, iolog, logsrv, protobuf-c, zlib"}),"\n",(0,l.jsx)(n.li,{children:"logsrvd"}),"\n",(0,l.jsx)(n.li,{children:"\u529f\u80fd\u591a\u4e00\u4e9b - \u4e0d\u4e00\u5b9a\u4f1a\u7528\u5f97\u5230"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"string-includematch",children:"string include/match"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"[[ 'abcd' = *'bc'* ]] && echo yes\n[[ 'abcd' =~ 'bc' ]] && echo yes\nstr=abcd [ -z \"${str##*bc*}\" ] && echo yes\n"})}),"\n",(0,l.jsx)(n.h2,{id:"trim-space",children:"trim space"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo \"   lol  \" | xargs\n# \u4e0d\u4f1a trim \u6362\u884c\necho -e \"   lol\\r\\n  \" | xargs | hexdump -C\n# \u79fb\u9664\u6240\u6709\u7a7a\u767d\necho -e 'a b c\\r' | tr -d '[:space:]'\n# trim left - sed \u4e0d\u80fd\u66ff\u6362 \\r\\n\necho -e ' \\r\\nabc\\r\\n ' | sed -e 's/^[[:space:]]*//'\n# trim right\necho -e ' abc ' | sed -e 's/[[:space:]]*$//'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"terminal-vs-console-vs-shell",children:"Terminal vs Console vs Shell"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["console = physical terminal\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7269\u7406\u5b9e\u4f53"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["terminal = tty = teletype = text input/output environment\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u94fe\u8def\u534f\u8bae\u63a5\u53e3"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["shell = command line interpreter\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0a\u5c42\u62bd\u8c61\u884c\u4e3a\u6982\u5ff5"}),"\n",(0,l.jsx)(n.li,{children:"\u903b\u8f91\u534f\u8bae"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u57fa\u4e8e\u65f6\u95f4\u641c\u7d22",children:"\u57fa\u4e8e\u65f6\u95f4\u641c\u7d22"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4fee\u6539\u65f6\u95f4\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u4e4b\u524d\u7684\u76ee\u5f55\nfind . -maxdepth 1 -type d -not -newermt 2022-01-01 -ls\n# \u9012\u5f52\u5220\u9664\nfind . -maxdepth 1 -type d -not -newermt 2022-01-01 -exec rm -r {} ';'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55-mod",children:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55 mod"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"find . -type d -exec chmod 0755 {} \\;\nfind . -type f -exec chmod 0644 {} \\;\n\n# \u4fee\u590d \u67d0\u4e2a owner\nfind . -type d -user harry -exec chown daisy {} \\;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"shell-vs-python",children:"shell vs python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["shell - \u5fc5\u77e5\u5fc5\u4f1a\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8ba9\u7b80\u5355\u7684\u4e8b\u60c5 \u975e\u5e38\u7b80\u5355\uff0c\u8ba9\u590d\u6742\u7684\u4e8b\u60c5 \u975e\u5e38\u590d\u6742"}),"\n",(0,l.jsx)(n.li,{children:"\u590d\u6742\u8fc7\u540e\u53ef\u7ef4\u62a4\u6027\u5dee"}),"\n",(0,l.jsx)(n.li,{children:"\u6838\u5fc3\u4f18\u52bf\u5728\u4e8e compose/\u7ec4\u5408/\u8054\u7ed3 \u5404\u79cd\u5de5\u5177"}),"\n",(0,l.jsx)(n.li,{children:"\u73af\u5883\u53ef\u9884\u671f"}),"\n",(0,l.jsxs)(n.li,{children:["\u4f46 ",(0,l.jsx)(n.strong,{children:"\u5de5\u5177"})," \u4e0d\u4e00\u5b9a\u5b8c\u5168\u517c\u5bb9\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"posix/gnu/busybox/coreutils/findutils/util-linux"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["python - \u8865\u5145\u6269\u5c55\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u96be\u5ea6\u9002\u4e2d\uff0c\u53ef\u7ef4\u62a4"}),"\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u5927\u591a linux \u73af\u5883\u90fd\u6709\u5b89\u88c5 python"}),"\n",(0,l.jsx)(n.li,{children:"python \u4e5f\u662f shell \u4e00\u90e8\u5206"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://stackoverflow.com/q/796319/1870054",children:"https://stackoverflow.com/q/796319/1870054"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"zsh-vs-bash",children:"zsh vs bash"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"vs."}),(0,l.jsx)(n.th,{children:"zsh"}),(0,l.jsx)(n.th,{children:"bash"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"interactive shell"}),(0,l.jsx)(n.td,{children:".zshrc"}),(0,l.jsx)(n.td,{children:".inputrc,.bashrc"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"login shell"}),(0,l.jsx)(n.td,{children:".zprofile"}),(0,l.jsx)(n.td,{children:".profile,.bash_profile"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"key binding"}),(0,l.jsx)(n.td,{children:"bindkey -> zle"}),(0,l.jsxs)(n.td,{children:[".inputrc ",(0,l.jsx)(n.code,{children:"bind"})," -> readline"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"prompt PS1 escape"}),(0,l.jsxs)(n.td,{children:["PS1 - ",(0,l.jsx)(n.code,{children:"%"})," \u8f6c\u4e49"]}),(0,l.jsx)(n.td,{children:"PS1 - ``` \u8f6c\u4e49"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"promot command"}),(0,l.jsx)(n.td,{children:"precmd + preexec hook"}),(0,l.jsx)(n.td,{children:"PROMPT_COMMAND"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"array index"}),(0,l.jsxs)(n.td,{children:["start from ",(0,l.jsx)(n.strong,{children:"1"})]}),(0,l.jsxs)(n.td,{children:["start from ",(0,l.jsx)(n.strong,{children:"0"})]})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["zsh\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u591a\u7528\u4e8e\u7528\u6237\u73af\u5883\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4ea4\u4e92\u66f4\u597d"}),"\n",(0,l.jsx)(n.li,{children:"\u529f\u80fd\u66f4\u591a"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["bash\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u591a\u7528\u4e8e\u670d\u52a1\u7aef\u73af\u5883\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9ed8\u8ba4"}),"\n",(0,l.jsx)(n.li,{children:"\u7a33\u5b9a"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://apple.stackexchange.com/a/361957/103557",children:"https://apple.stackexchange.com/a/361957/103557"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"tee-stderr",children:"tee stderr"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo message | tee -a /dev/fd/2 > /dev/null\n"})}),"\n",(0,l.jsx)(n.h2,{id:"sort-large-file",children:"Sort Large File"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"split -l 1000000 in.txt chunk\nfor X in chunk*; do sort < $X > sorted-$X; done\nsort -m sorted-chunk* > out.txt\n\n# \u6e05\u7406\nrm chunk* sorted-chunk*\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-m"})," \u53ea\u5408\u5e76\u4e0d\u505a\u6574\u4f53\u6392\u5e8f"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--parallel=$(nproc)"})," \u5e76\u884c"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://man7.org/linux/man-pages/man1/sort.1.html",children:"https://man7.org/linux/man-pages/man1/sort.1.html"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"arch",children:"arch"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'architecture=""\ncase $(uname -m) in\n  i386 | i686) architecture="386" ;;\n  x86_64) architecture="amd64" ;;\n  # apk --print-arch\n  arm) dpkg --print-architecture | grep -q "arm64" && architecture="arm64" || architecture="arm" ;;\nesac\n'})}),"\n",(0,l.jsx)(n.h2,{id:"detect",children:"detect"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'if [ -n "$ZSH_VERSION" ]; then\n  echo "zsh"\nelif [ -n "$BASH_VERSION" ]; then\n  echo "bash"\nelse\n  # assume something else\nfi\n\ncase $SHELL in\n  */zsh)\n    echo "zsh"\n    ;;\n  */bash)\n    echo "bash"\n    ;;\n  *) ;;\n    # assume something else\nesac\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["FCEDIT\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fcsh"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["KSH_VERSION\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ksh"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["PS3\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ps3sh"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"path",children:"PATH"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"/etc/paths"}),"\n",(0,l.jsx)(n.li,{children:"/etc/paths.d"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"macOS"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"/usr/libexec/path_helper"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"/usr/local/bin\n/System/Cryptexes/App/usr/bin\n/usr/bin\n/bin\n/usr/sbin\n/sbin\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="/etc/paths.d/10-cryptex"',children:"/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin\n/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin\n/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},38088:(e,n,s)=>{var l=s(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var l,i={},h=null,a=null;for(l in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,l)&&!t.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===i[l]&&(i[l]=n[l]);return{$$typeof:r,type:e,key:h,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=h,n.jsxs=h},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>d});var l=s(96651);const r={},i=l.createContext(r);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);