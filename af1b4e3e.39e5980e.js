(window.webpackJsonp=window.webpackJsonp||[]).push([[699],{1083:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,d=p["".concat(c,".").concat(u)]||p[u]||b[u]||i;return t?a.a.createElement(d,o(o({ref:n},s),{},{components:t})):a.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},772:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(1083)),c={title:"Mysy2"},o={unversionedId:"dev/windows/msys2",id:"dev/windows/msys2",isDocsHomePage:!1,title:"Mysy2",description:"msys2",source:"@site/notes/dev/windows/msys2.md",slug:"/dev/windows/msys2",permalink:"/notes/dev/windows/msys2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/windows/msys2.md",version:"current",sidebar:"docs",previous:{title:"\u7c7b\u578b",permalink:"/notes/dev/theory/typing"},next:{title:"Windows Manifest",permalink:"/notes/dev/windows/windows-manifest"}},m=[{value:".profile",id:"profile",children:[]},{value:"\u4fee\u6539 Home \u76ee\u5f55",id:"\u4fee\u6539-home-\u76ee\u5f55",children:[]}],s={toc:m};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"msys2"},"msys2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 mingw64"),Object(i.b)("li",{parentName:"ul"},"/",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"/mingw64 - \u542f\u52a8 mingw64 \u4f1a\u6dfb\u52a0\u8be5\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\u4f5c\u4e3a root"),Object(i.b)("li",{parentName:"ul"},"/mingw32"))),Object(i.b)("li",{parentName:"ul"},"mirror ",Object(i.b)("a",{parentName:"li",href:"https://mirrors.tuna.tsinghua.edu.cn/help/msys2/"},"https://mirrors.tuna.tsinghua.edu.cn/help/msys2/"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"/etc/pacman.d/mirrorlist.mingw32 - i686"),Object(i.b)("li",{parentName:"ul"},"/etc/pacman.d/mirrorlist.mingw64 - x86_64"),Object(i.b)("li",{parentName:"ul"},"/etc/pacman.d/mirrorlist.msys"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.msys2.org/docs/package-management/"},"https://www.msys2.org/docs/package-management/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://packages.msys2.org/package"},"Packages"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"git"),Object(i.b)("li",{parentName:"ul"},"nano"),Object(i.b)("li",{parentName:"ul"},"gcc"),Object(i.b)("li",{parentName:"ul"},"mingw-w64-x86_64-nsis"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/45836650"},"VSC \u96c6\u6210"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# backup\nmv -t . /etc/pacman.d/mirrorlist.mingw32 /etc/pacman.d/mirrorlist.mingw64 /etc/pacman.d/mirrorlist.msys\necho "Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/i686" > /etc/pacman.d/mirrorlist.mingw32\necho "Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/x86_64" > /etc/pacman.d/mirrorlist.mingw64\necho \'Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/msys/$arch\' > /etc/pacman.d/mirrorlist.msys\n\n# \u66f4\u65b0\u7d22\u5f15\npacman -Sy\n# \u5347\u7ea7\npacman -Su\n\n# \u641c\u7d22\npacman -Ss nano\n# \u5b89\u88c5\npacman -S nano\n# \u5e38\u7528\u4f9d\u8d56\npacman -S git make mingw-w64-x86_64-go mingw-w64-x86_64-gcc\n')),Object(i.b)("h2",{id:"profile"},".profile"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'export GOPATH=$HOME/go\n# /c/GO/bin \u770b\u60c5\u51b5 - pacman go \u7248\u672c\u843d\u540e\u5b98\u65b9\nexport PATH="$PATH:$HOME/.local/bin:/c/GO/bin:$HOME/go/bin"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n\nfunction o()\n{\n    if [ $# -eq 0 ]; then\n        local opath=.\n    else\n        local opath="$@"\n    fi\n    # Windows\n    command -v cygstart > /dev/null && cygstart "$opath" && return\n    command -v cygpath > /dev/null && start "$(cygpath -d $opath)" && return\n}\n')),Object(i.b)("h2",{id:"\u4fee\u6539-home-\u76ee\u5f55"},"\u4fee\u6539 Home \u76ee\u5f55"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 home \u4e3a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/home/$USER")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/msys64/home/$USER")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/msys32/home/$USER"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"/etc/nsswitch.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"db_home: windows\n")),Object(i.b)("p",null,"\u5982\u679c\u4e0d\u884c\u5219\u5c1d\u8bd5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"db_home: windows cygwin desc\ndb_home: env windows /c/User/Administrator\n")))}l.isMDXComponent=!0}}]);