"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69974],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"doas"},p="doas",s={unversionedId:"os/linux/shell/doas",id:"os/linux/shell/doas",title:"doas",description:"- doas",source:"@site/../notes/os/linux/shell/doas.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/doas",permalink:"/notes/os/linux/shell/doas",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/shell/doas.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"doas"},sidebar:"docs",previous:{title:"dd",permalink:"/notes/os/linux/shell/dd"},next:{title:"expect",permalink:"/notes/os/linux/shell/expect"}},u={},m=[{value:"doas.conf",id:"doasconf",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"doas"},"doas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/openbsd/src/tree/master/usr.bin/doas"},"doas"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"95% of the features of sudo with a fraction of the codebase"),(0,l.kt)("li",{parentName:"ul"},"\u7ea6 1000 loc - sudo \u7ea6 18k loc"))),(0,l.kt)("li",{parentName:"ul"},"/etc/doas.conf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man.openbsd.org/doas"},"doas.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man.openbsd.org/doas.conf.5"},"doas.conf.5"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# run as wener\ndoas -u wener whoami\n# -s shell -> sudo su\ndoas -s\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"option"),(0,l.kt)("th",{parentName:"tr",align:null},"mean"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-a ",(0,l.kt)("em",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"auth style in /etc/login.conf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-C ",(0,l.kt)("em",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:null},"check dose.conf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-L"),(0,l.kt)("td",{parentName:"tr",align:null},"clear persisted auth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"non interactive mode - \u8981\u6c42 nopass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s"),(0,l.kt)("td",{parentName:"tr",align:null},"exec $SHELL or shell in /etc/passwd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-u ",(0,l.kt)("em",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"as ",(0,l.kt)("em",{parentName:"td"},"user")," - \u9ed8\u8ba4 root")))),(0,l.kt)("h2",{id:"doasconf"},"doas.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="\u914d\u7f6e\u8bed\u6cd5"',title:'"\u914d\u7f6e\u8bed\u6cd5"'},"permit|deny [options] identity [as target] [cmd command [args ...]]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"permit|deny"),(0,l.kt)("li",{parentName:"ul"},"options",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nopass - \u4e0d\u9700\u8981\u8f93\u5165\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"nolog - \u4e0d\u8bb0\u5f55\u6210\u529f\u6267\u884c\u7684\u547d\u4ee4\u5230 syslogd"),(0,l.kt)("li",{parentName:"ul"},"persist - \u8bb0\u5f55\u5bc6\u7801\u6388\u6743\u4e00\u6bb5\u65f6\u95f4 - \u7c7b\u4f3c macOS \u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"keepenv - \u4fdd\u7559\u73af\u5883\u53d8\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u73af\u5883\u53d8\u91cf HOME, LOGNAME, PATH, SHELL, USER, DOAS_USER, DISPLAY TERM"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setenv { [variable ...] [variable=value ...] }")," - \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d\u7f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," \u53ef\u79fb\u9664"),(0,l.kt)("li",{parentName:"ul"},"\u503c\u53ef\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"$")," \u5f15\u7528\u522b\u7684\u73af\u5883\u53d8\u91cf"))))),(0,l.kt)("li",{parentName:"ul"},"identity - \u7528\u6237\u540d\u3001\u5206\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"li"},":group"),"\u3001ID"),(0,l.kt)("li",{parentName:"ul"},"as target"),(0,l.kt)("li",{parentName:"ul"},"cmd command - \u9650\u5b9a\u6267\u884c\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"args ",(0,l.kt)("inlineCode",{parentName:"li"},"[argument ...]")," - \u9650\u5b9a\u53c2\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="doas.conf"',title:'"doas.conf"'},"permit admin as root\n\npermit nopass wener as root cmd apk args upgrade\n\npermit nopass setenv { -http_proxy APT_CONFIG=/etc/apt/apt.conf.d/50appstream } :updaters cmd apt args update\n\n# group :wheel\npermit nopass keepenv :wheel\n")))}c.isMDXComponent=!0}}]);