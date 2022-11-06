"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88342],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,w=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(w,i(i({ref:t},c),{},{components:n})):r.createElement(w,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1233:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return u},metadata:function(){return w},toc:function(){return b}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={title:"Windows Remote Management"},f="Windows Remote Management",w={unversionedId:"os/windows/winrm",id:"os/windows/winrm",title:"Windows Remote Management",description:"- \u9ed8\u8ba4\u7aef\u53e3 HTTP 5985, HTTPS 5986",source:"@site/../notes/os/windows/winrm.md",sourceDirName:"os/windows",slug:"/os/windows/winrm",permalink:"/notes/os/windows/winrm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/windows/winrm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627459974,formattedLastUpdatedAt:"Jul 28, 2021",frontMatter:{title:"Windows Remote Management"},sidebar:"docs",previous:{title:"Windows XP",permalink:"/notes/os/windows/xp"},next:{title:"Philosophy FAQ",permalink:"/notes/philosophy/faq"}},d={},b=[],g={toc:b};function y(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"windows-remote-management"}),"Windows Remote Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 HTTP 5985, HTTPS 5986"),(0,r.kt)("li",{parentName:"ul"},"Windows Remote Shell (WinRS)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Windows 2008+"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://pentestlab.blog/tag/winrm/"}),"https://pentestlab.blog/tag/winrm/"))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"apk add nmap-scripts nmap-nselibs\n\nnmap -p 5985,5986 -sV 192.168.0.0/24\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'Invoke-Command -ComputerName TARGET -ScriptBlock { dir c:\\ }\nImport-Module ./Invoke-Mimikatz.ps1\nInvoke-Mimikatz -ComputerName TARGET\n\nEnable-PSRemoting -Force\n\nwinrm quickconfig\nwinrm set winrm/config/Client @{AllowUnencrypted = "true"}\nSet-Item WSMan:localhost\\client\\trustedhosts -value *\n')),(0,r.kt)("p",null,"winrm enumerate winrm/config/Listener"),(0,r.kt)("p",null,"winrm quickconfig -transport:http"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cmd"}),'winrm e winrm/config/listener\n\n# \u8fdc\u7a0b\u6267\u884c\nwinrs -r:http://WIN-2NE38K15TGH/wsman "cmd"\nwinrs -r:http://WIN-2NE38K15TGH/wsman "net localgroup administrators"\n')))}y.isMDXComponent=!0}}]);