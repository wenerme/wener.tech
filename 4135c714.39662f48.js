(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{233:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return p})),a.d(n,"default",(function(){return s}));var t=a(2),i=a(7),r=(a(0),a(749)),l={id:"alpine-pkgs",title:"Alpine \u5305\u7ef4\u62a4"},c={unversionedId:"os/alpine/alpine-pkgs",id:"os/alpine/alpine-pkgs",isDocsHomePage:!1,title:"Alpine \u5305\u7ef4\u62a4",description:"Tips",source:"@site/notes/os/alpine/alpine-pkgs.md",slug:"/os/alpine/alpine-pkgs",permalink:"/notes/os/alpine/alpine-pkgs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-pkgs.md",version:"current",sidebar:"docs",previous:{title:"Alpine \u8fd0\u7ef4\u7b14\u8bb0",permalink:"/notes/os/alpine/alpine-ops"},next:{title:"Alpine local backup",permalink:"/notes/os/alpine/alpine-lbu"}},p=[{value:"Tips",id:"tips",children:[]},{value:"abuild",id:"abuild",children:[]},{value:"abuild.conf",id:"abuildconf",children:[]},{value:"\u751f\u6210\u548c\u4f7f\u7528 Patch",id:"\u751f\u6210\u548c\u4f7f\u7528-patch",children:[]},{value:"\u65b0\u589e",id:"\u65b0\u589e",children:[]},{value:"init tips",id:"init-tips",children:[{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[]}]},{value:"Invalid configuration <code>x86_64-alpine-linux-musl</code>: machine <code>x86_64-alpine-linux</code> not recognized",id:"invalid-configuration-x86_64-alpine-linux-musl-machine-x86_64-alpine-linux-not-recognized",children:[]}],o={rightToc:p};function s(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package"}),"Creating an Alpine package")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/APKBUILD_Reference"}),"https://wiki.alpinelinux.org/wiki/APKBUILD_Reference")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Apkindex_format"}),"Apkindex format")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Abuild_and_Helpers"}),"Abuild and Helpers")),Object(r.b)("li",{parentName:"ul"},"\u955c\u50cf\u72b6\u6001 - ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://mirrors.alpinelinux.org/status.json"}),"https://mirrors.alpinelinux.org/status.json")),Object(r.b)("li",{parentName:"ul"},"Golang",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://git.alpinelinux.org/cgit/aports/tree/community/godep/APKBUILD"}),"https://git.alpinelinux.org/cgit/aports/tree/community/godep/APKBUILD")))),Object(r.b)("li",{parentName:"ul"},"aports ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/alpinelinux/aports/blob/master/.github/CONTRIBUTING.md"}),"How to contribute")),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4ea4\u65b0\u7684\u5305",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"fork aports"),Object(r.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b0\u7684\u5305"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4ea4 PR"),Object(r.b)("li",{parentName:"ul"},"\u65b0\u7684\u5305\u53ea\u80fd\u6dfb\u52a0\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"testing/"),", \u5728\u7ed3\u679c\u4e00\u6bb5\u65f6\u95f4\u6d4b\u8bd5\u540e\u624d\u4f1a\u79fb\u52a8\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"main/")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"community/")),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4ea4\u7684\u4fe1\u606f\u683c\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${repo}/${pkgname}: new aport")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${repo}/${pkgname}: move from testing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${repo}/${pkgname}: upgrade to 3.1.0")))),Object(r.b)("li",{parentName:"ul"},"\u786e\u4fdd\u4f7f\u7528 Tab \u800c\u4e0d\u662f\b\u7a7a\u683c"))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/alpinelinux/abuild"}),"alpinelinux/abuild")," - abuild \u6e90\u7801")))),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# \u51c6\u5907\nmkdir buiild && cd build\ngit clone --depth 50 https://gitlab.alpinelinux.org/alpine/aports\n\n# \u542f\u52a8\u73af\u5883\n# \u914d\u7f6e\u7f13\u5b58\ndocker run --rm -it \\\n    -v $PWD:/build \\\n    -v $PWD/distfiles:/var/cache/distfiles \\\n    -v $PWD/cache:/etc/apk/cache \\\n    --name builder wener/base:builder\n\n# \u66f4\u65b0\u4ed3\u5e93\nsudo apk update\n\n# git \u7528\u6237\u914d\u7f6e\ngit config --global user.name "Your Full Name"\ngit config --global user.email "your@email.address"\n# \u4e2a\u4eba\u4fe1\u606f\n[ -e ~/.abuild/abuild.conf ] || { mkdir -p ~/.abuild; echo "PACKAGER=\\"$(git config --global user.name) <$(git config --global user.email)>\\"" > ~/.abuild/abuild.conf; }\n# \u751f\u6210\u5bc6\u94a5\ngrep PACKAGER_PRIVKEY ~/.abuild/abuild.conf || abuild-keygen -ani\n\n# \u6253\u5305\n# community/grpc\ncd aports/community/grpc\n# \u7f16\u8bd1\u6784\u5efa\u5230 ~/packages\n# -K \u4fdd\u7559 src \u548c pkg - \u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\n# -r \u5b89\u88c5\u4f9d\u8d56\nabuild -Kr\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# /var/cache/distfiles\nabuild checksum\nabuild -r\n# \u4f4d\u4e8e $HOME/packages/main/x86_64\n\nabuild -Kf\n\n# \u9488\u5bf9\u5355\u4e2a\u5305\u64cd\u4f5c\nabuild package dev\n\n# \b\u79fb\u9664\u6240\u6709\u6784\u5efa\u65f6\u5b89\u88c5\u7684\u4f9d\u8d56\n# \u76f4\u63a5\u7f16\u8f91 /etc/apk/world \u7136\u540e apk fix \u4e5f\u53ef\u4ee5\napk del '.makedepends-*'\n\nrsync -avz --no-perms --no-owner --no-group --exclude='src,pkg' mnt/wener abuild/\n")),Object(r.b)("h2",{id:"abuild"},"abuild"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# \u9ed8\u8ba4\u73af\u5883\nstartdir="${APKBUILD%/*}"\nsrcdir=${srcdir:-"$startdir/src"}\npkgbasedir=${pkgbasedir:-"$startdir/pkg"}\n\nrepo=${startdir%/*}\nrepo=${repo##*/}\n\nbuilddir=${builddir:-"$srcdir/$pkgname-$pkgver"}\n')),Object(r.b)("h2",{id:"abuildconf"},"abuild.conf"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/alpinelinux/abuild/blob/master/abuild.conf"}),"abuild.conf"))),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),'export CFLAGS="-Os -fomit-frame-pointer"\nexport CXXFLAGS="$CFLAGS"\nexport CPPFLAGS="$CFLAGS"\nexport LDFLAGS="-Wl,--as-needed"\nexport GOFLAGS="-buildmode=pie"\n# Do note that these should work with at least GDC and LDC\nexport DFLAGS="-Os"\n\nexport JOBS=2\nexport MAKEFLAGS=-j$JOBS\n\n# remove line below to disable colors\nUSE_COLORS=1\n\n# uncomment line below to enable ccache support.\n#USE_CCACHE=1\n\nSRCDEST=/var/cache/distfiles\n\n# uncomment line below to store built packages in other location\n# The package will be stored as $REPODEST/$repo/$pkgname-$pkgver-r$pkgrel.apk\n# where $repo is the name of the parent directory of $startdir.\nREPODEST=$HOME/packages/\n\n# PACKAGER and MAINTAINER are used by newapkbuild when creating new aports for\n# the APKBUILD\'s "Contributor:" and "Maintainer:" comments, respectively.\n#PACKAGER="Your Name <your@email.address>"\n#MAINTAINER="$PACKAGER"\n\n# what to clean up after a successful build\nCLEANUP="srcdir bldroot pkgdir deps"\n\n# what to cleanup after a failed build\nERROR_CLEANUP="bldroot deps"\n')),Object(r.b)("h2",{id:"\u751f\u6210\u548c\u4f7f\u7528-patch"},"\u751f\u6210\u548c\u4f7f\u7528 Patch"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cd src/dahdi-linux-3.1.0/\ncp include/kernel.h include/kernel.h.new\nnano include/kernel.h.new\ndiff -u include/kernel.h include/kernel.h.new > ../../kernel-compact-5.4.patch\n\n# \u6dfb\u52a0 patch\nnano APKBUILD\nabuild checksum\n# \u9a8c\u8bc1 patch \u6b63\u786e\u6027\nrm -rf src; abuild prepare && abuild prepare\n# \u6784\u5efa\nabuild -r\n")),Object(r.b)("h2",{id:"\u65b0\u589e"},"\u65b0\u589e"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# -c \u6dfb\u52a0 init.d \u548c conf.d\nnewapkbuild -n frp \\\n  -d 'A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.' \\\n  -l 'Apache-2.0' \\\n  -u https://github.com/fatedier/frp \\\n  -c \\\n  https://github.com/fatedier/frp/archive/v0.35.1.tar.gz\n")),Object(r.b)("h2",{id:"init-tips"},"init tips"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# \u652f\u6301\u591a init\n[ "${RC_SVCNAME}" != "${RC_SVCNAME##*.}" ] && INSTANCE=${RC_SVCNAME##*.}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u67e5\u5305\u5185\u5185\u5bb9\ntar -tvf ~/packages/testing/x86_64/frp-openrc-*.apk\n")),Object(r.b)("h3",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package"}),"https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package"))),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"Usage: newapkbuild [-n PKGNAME] [-d PKGDESC] [-l LICENSE] [-u URL]\n       [-a | -C | -m | -p | -y | -r] [-s] [-c] [-f] [-h]\n       PKGNAME[-PKGVER] | SRCURL\nOptions:\n  -n  Set package name to PKGNAME (only use with SRCURL)\n  -d  Set package description to PKGDESC\n  -l  Set package license to LICENSE, use identifiers from:\n      <https://spdx.org/licenses/>\n  -u  Set package URL\n  -a  Create autotools package (use ./configure ...)\n  -C  Create CMake package (Assume cmake/ is there)\n  -m  Create meson package (Assume meson.build is there)\n  -p  Create perl package (Assume Makefile.PL is there)\n  -y  Create python package (Assume setup.py is there)\n  -r  Crate rust package (Assume Cargo.toml is there)\n  -s  Use sourceforge source URL\n  -c  Copy a sample init.d, conf.d, and install script\n  -f  Force even if directory already exists\n  -h  Show this help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ abuild -h\nusage: abuild [options] [-P REPODEST] [-s SRCDEST] [-D DESCRIPTION] [cmd] ...\n       abuild [-c] -n PKGNAME[-PKGVER]\nOptions:\n -A  Print CARCH and exit\n -c  Enable colored output\n -d  Disable dependency checking\n -D  Set APKINDEX description (default: $repo $(git describe))\n -f  Force specified cmd (skip checks: apk up to date, arch, libc)\n -F  Force run as root\n -h  Show this help\n -k  Keep built packages, even if APKBUILD or sources are newer\n -K  Keep buildtime temp dirs and files (srcdir/pkgdir/deps)\n -m  Disable colors (monochrome)\n -P  Set REPODEST as the repository location for created packages\n -q  Quiet\n -r  Install missing dependencies from system repository (using sudo)\n -s  Set source package destination directory\n -v  Verbose: show every command as it is run (very noisy)\n\nCommands:\n  build       Compile and install package into $pkgdir\n  check       Run any defined tests concerning the package\n  checksum    Generate checksum to be included in APKBUILD\n  clean       Remove temp build and install dirs\n  cleancache  Remove downloaded files from $SRCDEST\n  cleanoldpkg Remove binary packages except current version\n  cleanpkg    Remove already built binary and source package\n  deps        Install packages listed in makedepends and depends\n  fetch       Fetch sources to $SRCDEST (consider: 'abuild fetch verify')\n  index       Regenerate indexes in $REPODEST\n  listpkg     List target packages\n  package     Install project into\n  prepare     Apply patches\n  rootbld     Build package in clean chroot\n  rootpkg     Run 'package', the split functions and create apks as fakeroot\n  sanitycheck Basic sanity check of APKBUILD\n  snapshot    Create a $giturl or $svnurl snapshot and upload to $disturl\n  sourcecheck Check if remote source package exists upstream\n  srcpkg      Make a source package\n  undeps      Uninstall packages listed in makedepends and depends\n  unpack      Unpack sources to $srcdir\n  up2date     Compare target and sources dates\n  verify      Verify checksums\n\nTo activate cross compilation specify in environment:\n  CHOST       Arch or hostspec of machine to generate packages for\n  CTARGET     Arch or hostspec of machine to generate compiler for\n")),Object(r.b)("h1",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"invalid-configuration-x86_64-alpine-linux-musl-machine-x86_64-alpine-linux-not-recognized"},"Invalid configuration ",Object(r.b)("inlineCode",{parentName:"h2"},"x86_64-alpine-linux-musl"),": machine ",Object(r.b)("inlineCode",{parentName:"h2"},"x86_64-alpine-linux")," not recognized"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"--build")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"--host")," \u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"x86_64-alpine-linux")),Object(r.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u90e8\u5206\u9879\u76ee\u6784\u5efa\u662f\u65e0\u6cd5\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"musl")," \u8bc6\u522b\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"gnu"))))}s.isMDXComponent=!0},749:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return m}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),s=function(e){var n=i.a.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},b=function(e){var n=s(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=s(a),d=t,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return a?i.a.createElement(m,c(c({ref:n},o),{},{components:a})):i.a.createElement(m,c({ref:n},o))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var o=2;o<r;o++)l[o]=a[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);