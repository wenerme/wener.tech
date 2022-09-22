"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38016],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=n(96600),i=n(27279),a=(n(59496),n(49613)),l=["components"],o={tags:["\u76ee\u5f55\u7ed3\u6784"]},u="Windows FHS",s={unversionedId:"os/windows/windows-fhs",id:"os/windows/windows-fhs",title:"Windows FHS",description:"- shell:RecycleBinFolder",source:"@site/notes/os/windows/windows-fhs.md",sourceDirName:"os/windows",slug:"/os/windows/windows-fhs",permalink:"/notes/os/windows/windows-fhs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-fhs.md",tags:[{label:"\u76ee\u5f55\u7ed3\u6784",permalink:"/notes/tags/\u76ee\u5f55\u7ed3\u6784"}],version:"current",frontMatter:{tags:["\u76ee\u5f55\u7ed3\u6784"]},sidebar:"docs",previous:{title:"Windows FAQ",permalink:"/notes/os/windows/windows-faq"},next:{title:"Windows Glossary",permalink:"/notes/os/windows/windows-glossary"}},p={},m=[{value:"C:UsersPublic",id:"cuserspublic",level:3},{value:"XP",id:"xp",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows-fhs"},"Windows FHS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"shell:RecycleBinFolder"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/security-identifiers"},"SID")," - User's Security Identifier",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"S-R-X-Y1-Y2-Yn-1-Yn",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"R - revision"),(0,a.kt)("li",{parentName:"ul"},"X - identifier authority"),(0,a.kt)("li",{parentName:"ul"},"Y - subauthority"))),(0,a.kt)("li",{parentName:"ul"},"S-1-5-32-544",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"R = revision level 1"),(0,a.kt)("li",{parentName:"ul"},"X = 5 - NT Authority"),(0,a.kt)("li",{parentName:"ul"},"32,Builtin - domain identifier"),(0,a.kt)("li",{parentName:"ul"},"544, Administrators - relative identifier"))),(0,a.kt)("li",{parentName:"ul"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wmic useraccount get name,sid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'wmic useraccount where name="USER" get sid')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'wmic useraccount where sid="S-1-5-21-992878714-4041223874-2616370337-1001" get name')))),(0,a.kt)("li",{parentName:"ul"},"RID - relative identifier"),(0,a.kt)("li",{parentName:"ul"},"LSA - Local Security Authority"),(0,a.kt)("li",{parentName:"ul"},"SAM - Security Accounts Manager")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/file-systems"},"Local File Systems")),(0,a.kt)("li",{parentName:"ul"},"wikipedia ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Directory_structure"},"Directory structure"))),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"c"},"C:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"$Recycle.Bin",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"%SID%"))),(0,a.kt)("li",{parentName:"ul"},"$SysReset"),(0,a.kt)("li",{parentName:"ul"},"PerfLogs/"),(0,a.kt)("li",{parentName:"ul"},"Program Files/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Common Files/"))),(0,a.kt)("li",{parentName:"ul"},"Program Files (x86)/"),(0,a.kt)("li",{parentName:"ul"},"ProgramData/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Microsoft/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows Defender/"))))),(0,a.kt)("li",{parentName:"ul"},"Users/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Public/ - \u5171\u4eab"),(0,a.kt)("li",{parentName:"ul"},"Default/ - \u7528\u4e8e\u521b\u5efa\u65b0\u7528\u6237"),(0,a.kt)("li",{parentName:"ul"},"%USERNAME%/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AppData/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Roaming/ - \u4f1a\u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"Local/"),(0,a.kt)("li",{parentName:"ul"},"LocalLow/"))))))),(0,a.kt)("li",{parentName:"ul"},"WinSxS/"),(0,a.kt)("li",{parentName:"ul"},"Windows/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"System/"),(0,a.kt)("li",{parentName:"ul"},"System32/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"wbem/"),(0,a.kt)("li",{parentName:"ul"},"drivers/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"etc/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"hosts"),(0,a.kt)("li",{parentName:"ul"},"lmhosts"),(0,a.kt)("li",{parentName:"ul"},"protocol"),(0,a.kt)("li",{parentName:"ul"},"networks"),(0,a.kt)("li",{parentName:"ul"},"services"))))))),(0,a.kt)("li",{parentName:"ul"},"System64/"))),(0,a.kt)("li",{parentName:"ul"},"Temp/")),(0,a.kt)("h3",{id:"cuserspublic"},"C:\\Users\\Public"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documents/")),(0,a.kt)("h2",{id:"xp"},"XP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documents and Settings/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"User/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Local Settings/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Application Data/")))))))))}k.isMDXComponent=!0}}]);