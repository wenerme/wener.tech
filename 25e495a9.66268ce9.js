(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1172:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),m=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},o=function(e){var n=m(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),o=m(t),u=a,d=o["".concat(i,".").concat(u)]||o[u]||p[u]||l;return t?r.a.createElement(d,c(c({ref:n},b),{},{components:t})):r.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},248:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(8),l=(t(0),t(1172)),i={title:"msys2"},c={unversionedId:"os/windows/msys2",id:"os/windows/msys2",isDocsHomePage:!1,title:"msys2",description:"- mingw/cygwin+\u5305",source:"@site/notes/os/windows/msys2.md",slug:"/os/windows/msys2",permalink:"/notes/os/windows/msys2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/msys2.md",version:"current",sidebar:"docs",previous:{title:"cygwin",permalink:"/notes/os/windows/cygwin"},next:{title:"Nano Server",permalink:"/notes/os/windows/nano-server"}},s=[{value:"Tips",id:"tips",children:[]},{value:"pacman \u5e38\u7528\u547d\u4ee4",id:"pacman-\u5e38\u7528\u547d\u4ee4",children:[]},{value:"\u955c\u50cf",id:"\u955c\u50cf",children:[]},{value:".profile",id:"profile",children:[]},{value:"\u4fee\u6539 Home \u76ee\u5f55",id:"\u4fee\u6539-home-\u76ee\u5f55",children:[]},{value:"SSHd",id:"sshd",children:[]},{value:"Gitlab Runner",id:"gitlab-runner",children:[]},{value:"CI",id:"ci",children:[]},{value:"GCC vs LLVM/Clang",id:"gcc-vs-llvmclang",children:[]},{value:"MSVCRT vs UCRT",id:"msvcrt-vs-ucrt",children:[]}],b={toc:s};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"mingw/cygwin+\u5305"),Object(l.b)("li",{parentName:"ul"},"pacman \u5305\u7ba1\u7406\u5668\n\u63d0\u4f9b\u7c7b\u4f3c sudo"),Object(l.b)("li",{parentName:"ul"},"\u63a8\u8350\u672c\u5730 bin \u4f4d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\msys64\\usr\\local\\bin")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/45836650"},"VSC \u96c6\u6210")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/imachug/win-sudo"},"imachug/win-sudo")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://packages.msys2.org/package/"},"\u5305\u7d22\u5f15")),Object(l.b)("li",{parentName:"ul"},"archlinux ",Object(l.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Pacman"},"Pacman")),Object(l.b)("li",{parentName:"ul"},"archlinux ",Object(l.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Pacman/Tips_and_tricks"},"Pacman tips"))))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u5c06 ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\msys64")," \u76ee\u5f55\u4ece\u5b89\u5168\u626b\u63cf\u6392\u9664")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u66f4\u65b0\npacman -Syu\n# \u4ece\u65b0\u542f\u52a8\u518d\u66f4\u65b0\npacman -Su\n\n# \u57fa\u7840\u5f00\u53d1\u5de5\u5177\npacman -Sy --needed base-devel git mingw-w64-x86_64-toolchain mingw-w64-x86_64-gcc\n\n# \u5b89\u88c5 Go\npacman -S mingw-w64-x86_64-go\n# export GOROOT=/mingw64/lib/go\n# export GOPATH=/mingw64\n\n# mingw-w64-x86_64-nsis - nsis \u811a\u672c\u5b89\u88c5\u5de5\u5177\n\n# \u5b89\u88c5 win-sudo\ncurl -s https://raw.githubusercontent.com/imachug/win-sudo/master/install.sh | sh\n")),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u6253\u5f00\u76ee\u5f55\nstart "$(cygpath -d $PWD)"\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"flavor")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Prefix"),Object(l.b)("th",{parentName:"tr",align:null},"Toolchain"),Object(l.b)("th",{parentName:"tr",align:null},"Architecture"),Object(l.b)("th",{parentName:"tr",align:null},"C Library"),Object(l.b)("th",{parentName:"tr",align:null},"C++ Library"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MSYS"),Object(l.b)("td",{parentName:"tr",align:null},"/usr"),Object(l.b)("td",{parentName:"tr",align:null},"gcc"),Object(l.b)("td",{parentName:"tr",align:null},"x86_64"),Object(l.b)("td",{parentName:"tr",align:null},"cygwin"),Object(l.b)("td",{parentName:"tr",align:null},"libstdc++")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MINGW64"),Object(l.b)("td",{parentName:"tr",align:null},"/mingw64"),Object(l.b)("td",{parentName:"tr",align:null},"gcc"),Object(l.b)("td",{parentName:"tr",align:null},"x86_64"),Object(l.b)("td",{parentName:"tr",align:null},"msvcrt"),Object(l.b)("td",{parentName:"tr",align:null},"libstdc++")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UCRT64"),Object(l.b)("td",{parentName:"tr",align:null},"/ucrt64"),Object(l.b)("td",{parentName:"tr",align:null},"gcc"),Object(l.b)("td",{parentName:"tr",align:null},"x86_64"),Object(l.b)("td",{parentName:"tr",align:null},"ucrt"),Object(l.b)("td",{parentName:"tr",align:null},"libstdc++")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CLANG64"),Object(l.b)("td",{parentName:"tr",align:null},"/clang64"),Object(l.b)("td",{parentName:"tr",align:null},"llvm"),Object(l.b)("td",{parentName:"tr",align:null},"x86_64"),Object(l.b)("td",{parentName:"tr",align:null},"ucrt"),Object(l.b)("td",{parentName:"tr",align:null},"libc++")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MINGW32"),Object(l.b)("td",{parentName:"tr",align:null},"/mingw32"),Object(l.b)("td",{parentName:"tr",align:null},"gcc"),Object(l.b)("td",{parentName:"tr",align:null},"i686"),Object(l.b)("td",{parentName:"tr",align:null},"msvcrt"),Object(l.b)("td",{parentName:"tr",align:null},"libstdc++")))),Object(l.b)("h2",{id:"pacman-\u5e38\u7528\u547d\u4ee4"},"pacman \u5e38\u7528\u547d\u4ee4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"pacman -Ss nano     # \u641c\u7d22\npacman -Qs nano     # \u641c\u7d22\u5df2\u7ecf\u5b89\u88c5\u7684\u5305\npacman -S nano      # \u5b89\u88c5\npacman -R nano      # \u5378\u8f7d\npacman -Ql nano     # \u663e\u793a\u5305\u5185\u5bb9\npactree nano        # \u5305\u4f9d\u8d56\u6811\npacman -Qi nano     # \u76f4\u63a5\u4f9d\u8d56\npacman -Qo nano.exe # \u6587\u4ef6\u5f52\u5c5e\u5305\npacman -F vim.exe   # \u5305\u542b\u6587\u4ef6\u7684\u5305 - \u4f1a\u4e0b\u8f7d\u6570\u636e\u5e93\n")),Object(l.b)("h2",{id:"\u955c\u50cf"},"\u955c\u50cf"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"mirror ",Object(l.b)("a",{parentName:"li",href:"https://mirrors.tuna.tsinghua.edu.cn/help/msys2/"},"https://mirrors.tuna.tsinghua.edu.cn/help/msys2/"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/etc/pacman.d/mirrorlist.mingw32 - i686"),Object(l.b)("li",{parentName:"ul"},"/etc/pacman.d/mirrorlist.mingw64 - x86_64"),Object(l.b)("li",{parentName:"ul"},"/etc/pacman.d/mirrorlist.msys")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u76ee\u524d\u5b98\u65b9\u4ed3\u5e93\u901f\u5ea6\u8fd8\u53ef\u4ee5")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# backup\nmv -t . /etc/pacman.d/mirrorlist.mingw32 /etc/pacman.d/mirrorlist.mingw64 /etc/pacman.d/mirrorlist.msys\necho "Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/i686" > /etc/pacman.d/mirrorlist.mingw32\necho "Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/x86_64" > /etc/pacman.d/mirrorlist.mingw64\necho \'Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/msys/$arch\' > /etc/pacman.d/mirrorlist.msys\n')),Object(l.b)("h2",{id:"profile"},".profile"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# /c/GO/bin \u770b\u60c5\u51b5 - pacman go \u548c\u5b98\u65b9\u5dee\u8ddd\u4e0d\u5927\n# export GOPATH=$HOME/go\nexport PATH="$PATH:$HOME/.local/bin:$HOME/go/bin"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n\nfunction o()\n{\n    if [ $# -eq 0 ]; then\n        local opath=.\n    else\n        local opath="$@"\n    fi\n    # Windows\n    command -v cygstart > /dev/null && cygstart "$opath" && return\n    command -v cygpath > /dev/null && start "$(cygpath -d $opath)" && return\n}\n')),Object(l.b)("h2",{id:"\u4fee\u6539-home-\u76ee\u5f55"},"\u4fee\u6539 Home \u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 home \u4e3a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/home/$USER")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/msys64/home/$USER")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/msys32/home/$USER"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/nsswitch.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"db_home: windows\n")),Object(l.b)("p",null,"\u5982\u679c\u4e0d\u884c\u5219\u5c1d\u8bd5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"db_home: windows cygwin desc\ndb_home: env windows /c/User/Administrator\n")),Object(l.b)("h2",{id:"sshd"},"SSHd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.msys2.org/wiki/Setting-up-SSHd/"},"Setting up SSHd"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"pacman -Sy openssh cygrunsrv mingw-w64-x86_64-editrights\n\n# \u521b\u5efa sshd \u7528\u6237\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\nsudo ./msys2-sshd-setup.sh\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"msys2-sshd-setup.sh")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n# from https://www.msys2.org/wiki/Setting-up-SSHd/\n\nset -e\n\nUNPRIV_USER=sshd # DO NOT CHANGE; this username is hardcoded in the openssh code\nUNPRIV_NAME="Privilege separation user for sshd"\n\nEMPTY_DIR=/var/empty\n\nif ! /mingw64/bin/editrights -h >/dev/null; then\n    echo "ERROR: Missing \'editrights\'. Try: pacman -S mingw-w64-x86_64-editrights."\n    exit 1\nfi\n\nif ! cygrunsrv -v >/dev/null; then\n    echo "ERROR: Missing \'cygrunsrv\'. Try: pacman -S cygrunsrv."\n    exit 1\nfi\n\nif ! ssh-keygen -A; then\n    echo "ERROR: Missing \'ssh-keygen\'. Try: pacman -S openssh."\n    exit 1\nfi\n\n#\n# The unprivileged sshd user (for privilege separation)\n#\nadd="$(if ! net user "${UNPRIV_USER}" >/dev/null; then echo "//add"; fi)"\nif ! net user "${UNPRIV_USER}" ${add} //fullname:"${UNPRIV_NAME}" \\\n              //homedir:"$(cygpath -w ${EMPTY_DIR})" //active:no; then\n    echo "ERROR: Unable to create Windows user ${UNPRIV_USER}"\n    exit 1\nfi\n\n#\n# Add or update /etc/passwd entries\n#\nif test -f /etc/passwd; then\n    sed -i -e \'/^\'"${UNPRIV_USER}"\':/d\' /etc/passwd\n    SED=\'/^\'"${UNPRIV_USER}"\':/s?^\\(\\([^:]*:\\)\\{5\\}\\).*?\\1\'"${EMPTY_DIR}"\':/bin/false?p\'\n    mkpasswd -l -u "${UNPRIV_USER}" | sed -e \'s/^[^:]*+//\' | sed -ne "${SED}" \\\n             >> /etc/passwd\n    mkgroup.exe -l > /etc/group\nfi\n\n#\n# Finally, register service with cygrunsrv and start it\n#\ncygrunsrv -R msys2_sshd || true\ncygrunsrv -I msys2_sshd -d "MSYS2 sshd" -p /usr/bin/sshd.exe -a "-D -e" -y tcpip\n\n# The SSH service should start automatically when Windows is rebooted. You can\n# manually restart the service by running `net stop msys2_sshd` + `net start msys2_sshd`\nif ! net start msys2_sshd; then\n    echo "ERROR: Unable to start msys2_sshd service"\n    exit 1\nfi\n')),Object(l.b)("h2",{id:"gitlab-runner"},"Gitlab Runner"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# --create-file-mode 0744\ncurl -LO https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-amd64.exe\nchmod +x gitlab-runner-windows-amd64.exe\n\nmkdir -p /opt/bin\nmv gitlab-runner-windows-amd64.exe /opt/bin/gitlab-runner.exe\n\nmkdir -p runner && cd runner\n# gitlab token env\nREGISTRATION_TOKEN=\ngitlab-runner register \\\n  --non-interactive \\\n  --executor shell \\\n  --shell bash \\\n  --url "https://gitlab.com/" \\\n  --registration-token "$REGISTRATION_TOKEN" \\\n  --description windows-shell-runner \\\n  --tag-list "windows,shell,bash" \\\n  --run-untagged=false \\\n  --locked=false \\\n  --access-level=not_protected \\\n  --builds-dir ./build \\\n  --cache-dir ./cache\n# \u751f\u6210\u7684\u914d\u7f6e\ncat config.toml\n# \u4e0d\u80fd\u901a\u8fc7 SSH \u6267\u884c - FATAL: Failed to start gitlab-runner: The specified service does not exist as an installed service.\ngitlab-runner run -c ./config.toml -d .\n\n# service\ncygrunsrv -R gitlab_shell_runner\ncygrunsrv -I gitlab_shell_runner -d "Gitlab Shell Runner" -p /opt/bin/gitlab-runner.exe -c $PWD -a "run -c ./config.toml -d ." -y tcpip\n')),Object(l.b)("h2",{id:"ci"},"CI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.msys2.org/docs/ci/"},"https://www.msys2.org/docs/ci/"))),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"gcc-vs-llvmclang"},"GCC vs LLVM/Clang"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"GCC",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u66f4\u591a"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Fortran"),Object(l.b)("li",{parentName:"ul"},"\u5305\u53ef\u80fd\u4f7f\u7528 Clang \u6784\u5efa"))),Object(l.b)("li",{parentName:"ul"},"LLVM/Clang",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u4f7f\u7528 LLVM \u5de5\u5177 - LLD linker, LIBC++"),Object(l.b)("li",{parentName:"ul"},"Clang \u652f\u6301 ASAN"),Object(l.b)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 TLS/Thread-local storage"),Object(l.b)("li",{parentName:"ul"},"LLD \u6bd4 LD \u66f4\u5feb \u4f46\u529f\u80fd\u7279\u6027\u66f4\u5c11"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u5c11\u90e8\u5206 GNU \u4e0b\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"Windows 10 \u652f\u6301 ARM64/AArch64 \u67b6\u6784")))),Object(l.b)("h2",{id:"msvcrt-vs-ucrt"},"MSVCRT vs UCRT"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MSVCRT - Microsoft Visual C++ Runtime",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\bWindows \u9ed8\u8ba4\uff0c\u540e\u5411\u517c\u5bb9\uff0c\u975e C99 \u517c\u5bb9"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UTF-8 locale"))),Object(l.b)("li",{parentName:"ul"},"UCRT - Universal C Runtime",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b0\u7248\u672c Microsoft Visual Studio \u9ed8\u8ba4"),Object(l.b)("li",{parentName:"ul"},"Windows 10 \u9ed8\u8ba4\u5e26")))))}m.isMDXComponent=!0}}]);