(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{766:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(7),o=(t(0),t(766)),c={title:"Anaconda"},i={unversionedId:"os/rhel/anaconda",id:"os/rhel/anaconda",isDocsHomePage:!1,title:"Anaconda",description:"anaconda",source:"@site/notes/os/rhel/anaconda.md",slug:"/os/rhel/anaconda",permalink:"/notes/os/rhel/anaconda",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/rhel/anaconda.md",version:"current",sidebar:"docs",previous:{title:"VyOS",permalink:"/notes/os/network/vyos"},next:{title:"\u5982\u4f55\u901a\u8fc7 Ansible \u6765\u7ba1\u7406 AlpineLinux \uff1f",permalink:"/notes/howto/ops/alpine-admin-ansible"}},l=[{value:"Kickstart",id:"kickstart",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"anaconda"},"anaconda"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"RHEL \u7cfb\u5217\u7684 Linux \u7cfb\u7edf\u5b89\u88c5\u5668"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rhinstaller/anaconda"}),"rhinstaller/anaconda")),Object(o.b)("li",{parentName:"ul"},"wikipedia ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Anaconda_(installer)"}),"Anaconda"))),Object(o.b)("h2",{id:"kickstart"},"Kickstart"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5feb\u901f\u5b89\u88c5\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u7cfb\u7edf\u5b89\u88c5"),Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5668\u53c2\u6570\u914d\u7f6e"))),Object(o.b)("li",{parentName:"ul"},"\u751f\u6210\u5668 ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://access.redhat.com/labs/kickstartconfig/"}),"https://access.redhat.com/labs/kickstartconfig/"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yum install pykickstart\n# \u6821\u9a8c\nksvalidator ks.conf\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'lang en_US\nkeyboard us\ntimezone Asia/Shanghai --isUtc\n# root:root\nrootpw $1$k5y95rV/$IXnt41W62IefrGconPHUP/ --iscrypted\n#platform x86, AMD64, or Intel EM64T\ntext\ncdrom\nbootloader --location=mbr --append="rhgb quiet crashkernel=auto"\nzerombr\nclearpart --all --initlabel\nautopart\nauth --passalgo=sha512 --useshadow\nselinux --disabled\nfirewall --enabled --ssh\nskipx\nfirstboot --disable\n%packages\n@^minimal-environment\nkexec-tools\n%end\n')))}p.isMDXComponent=!0}}]);