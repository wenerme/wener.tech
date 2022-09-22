"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67622],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=m(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||N[k]||l;return n?a.createElement(s,i(i({ref:e},p),{},{components:n})):a.createElement(s,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65291:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return N}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],d={title:"Windows \u73af\u5883"},o="Windows \u73af\u5883\u4fe1\u606f",m={unversionedId:"os/windows/windows-env",id:"os/windows/windows-env",title:"Windows \u73af\u5883",description:"\u73af\u5883\u53d8\u91cf",source:"@site/../notes/os/windows/windows-env.md",sourceDirName:"os/windows",slug:"/os/windows/windows-env",permalink:"/notes/os/windows/windows-env",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/windows/windows-env.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Windows \u73af\u5883"},sidebar:"docs",previous:{title:"Windows \u5f00\u53d1",permalink:"/notes/os/windows/windows-dev"},next:{title:"Windows FAQ",permalink:"/notes/os/windows/windows-faq"}},p={},N=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}],u={toc:N};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows-\u73af\u5883\u4fe1\u606f"},"Windows \u73af\u5883\u4fe1\u606f"),(0,l.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u5f55\u6ce8\u518c\u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Vista+"),(0,l.kt)("th",{parentName:"tr",align:null},"XP"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ALLUSERSPROFILE%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\ProgramData"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\All Users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%APPDATA%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%\\AppData\\Roaming"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%\\Application Data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%COMMONPROGRAMFILES%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files\\Common Files"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files\\Common Files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%COMMONPROGRAMFILES(x86)%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)\\Common Files"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)\\Common Files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%COMSPEC%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Windows\\System32\\cmd.exe"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Windows\\System32\\cmd.exe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%HOMEDRIVE%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:"),(0,l.kt)("td",{parentName:"tr",align:null},"C:")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%HOMEPATH%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%LOCALAPPDATA%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%\\AppData\\Local"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%PROGRAMDATA%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\ProgramData"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%PROGRAMFILES%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%PROGRAMFILES(X86)%")," - 64 bit"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%PROGRAMFILES%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%PROGRAMFILES(X86)%")," - 64 bit"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%SystemDrive%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:"),(0,l.kt)("td",{parentName:"tr",align:null},"C:")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%SystemRoot%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Windows"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%TEMP%"),",",(0,l.kt)("inlineCode",{parentName:"td"},"%TMP%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%\\AppData\\Local\\Temp"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%\\Local Settings\\Temp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%USERPROFILE%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%WINDIR%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Windows"),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%SystemDirectory%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\WINDOWS\\System32"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%PUBLIC%")),(0,l.kt)("td",{parentName:"tr",align:null},"C:\\Users\\Public"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%CD%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ERRORLEVEL%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u9000\u51fa\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%OS%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf - Windows_NT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%USERDOMAIN%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%USERNAME%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%DATE%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%TIME%")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%RANDOM%")),(0,l.kt)("td",{parentName:"tr",align:null},"0-32767 \u968f\u673a\u6570")))))}k.isMDXComponent=!0}}]);