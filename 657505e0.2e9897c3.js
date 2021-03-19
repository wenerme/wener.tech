(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{364:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(8),a=(r(0),r(830)),o={id:"intro",title:"FreePBX"},p={unversionedId:"voip/freepbx/intro",id:"voip/freepbx/intro",isDocsHomePage:!1,title:"FreePBX",description:"Tips",source:"@site/notes/voip/freepbx/README.md",slug:"/voip/freepbx/intro",permalink:"/notes/voip/freepbx/intro",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/freepbx/README.md",version:"current",sidebar:"docs",previous:{title:"PJSIP",permalink:"/notes/voip/dev/pjsip"},next:{title:"\u786c\u4ef6\u8bbe\u5907",permalink:"/notes/voip/hardware/intro"}},c=[{value:"Tips",id:"tips",children:[]}],b={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.freepbx.org"},"FreePBX")," Asterisk \u7684 Web GUI"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://freepbx.org.cn/"},"http://freepbx.org.cn/"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://freepbx.org.cn/wiki/index.php?title=Asterisk_%E7%B3%BB%E7%BB%9F%E5%AE%8C%E6%95%B4%E7%9A%84%E4%B8%AD%E8%8B%B1%E6%96%87%E8%AF%AD%E9%9F%B3%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8F%E5%92%8C%E8%AF%AD%E9%9F%B3%E6%96%87%E4%BB%B6"},"\u4e2d\u6587\u8bed\u97f3\u5305")))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://community.freepbx.org/t/freepbx-architecture/62345/2"},"FreePBX architecture"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"FreePBX \u5c06\u6240\u6709\u4fe1\u606f\u5199\u5165\u5230 DB\uff0c\u5f53\u5728\u524d\u7aef\u70b9\u51fb\u5e94\u7528\u914d\u7f6e\u65f6\uff0c\u751f\u6210\u6240\u6709\u914d\u7f6e\u6587\u4ef6\u7136\u540e\u91cd\u8f7d asterisk"),Object(a.b)("li",{parentName:"ul"},"\u6838\u5fc3\u6240\u6709\u90fd\u662f\u7531\u6a21\u5757\u7ec4\u6210 - \u4e0d\u540c\u7684\u6a21\u5757\u53ef\u80fd\u4f4d\u4e8e\u4e0d\u540c\u7684 GIT \u4ed3\u5e93"),Object(a.b)("li",{parentName:"ul"},"\u6a21\u5757\u4f1a\u901a\u8fc7",Object(a.b)("a",{parentName:"li",href:"https://wiki.freepbx.org/pages/viewpage.action?pageId=29753662"},"\u7b7e\u540d"),"\u4fdd\u8bc1\u5b8c\u6574\u6027"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.freepbx.org/pages/viewpage.action?pageId=19498386"},"Big Module Object")," (BMO)  - \u662f\u5bf9\u6a21\u5757\u7684\u4e00\u4e2a\u62bd\u8c61 - \u5305\u542b \u5b89\u88c5\u3001\u5378\u8f7d\u3001\u5907\u4efd\u3001\u6062\u590d\u7b49"))))),Object(a.b)("li",{parentName:"ul"},"FAQ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://community.freepbx.org/t/fwconsole-not-found/33406"},"Fwconsole not found"))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e00\u4e2a\u57fa\u4e8e debian \u7684 freepbx \u5bb9\u5668\n# https://github.com/tiredofit/docker-freepbx\n# Docker Compose https://github.com/tiredofit/docker-freepbx/blob/15/examples/docker-compose.yml\n# https://github.com/tiredofit/docker-freepbx/issues/85\ndocker run --rm -it \\\n  -v $PWD/certs:/certs \\\n  -v $PWD/data:/data \\\n  -v $PWD/log:/var/log \\\n  -v $PWD/www:/var/www/html \\\n  -v $PWD/db:/var/lib/mysql \\\n  -v $PWD/custom:/assets/custom \\\n  -p 80:80 -p 5060:5060 -p 5160:5160 -p 18000-18100:18000-18100/udp \\\n  -p 4445:4445 \\\n  -e RTP_START=18000 -e RTP_FINISH=18100 -e DB_EMBEDDED=TRUE \\\n  --name freepbx tiredofit/freepbx\n\n\n# Docker \u542f\u52a8 UCP \u5b89\u88c5\u5931\u8d25 - \u56e0\u4e3a icu \u5b89\u88c5\u5931\u8d25\ndocker exec -it freepbx bash\napt update\n# icu libicu-devel \napt-get install pkg-config pkgconf\npkg-config --modversion icu-i18n\ncurl -O http://ftp.br.debian.org/debian/pool/main/i/icu/libicu52_52.1-8+deb8u7_amd64.deb\n\napt install ./libicu52_52*\n")))}l.isMDXComponent=!0},830:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||s[f]||a;return r?i.a.createElement(m,p(p({ref:t},b),{},{components:r})):i.a.createElement(m,p({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var b=2;b<a;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);