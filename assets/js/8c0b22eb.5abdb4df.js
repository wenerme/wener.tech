"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56196],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||p;return r?t.createElement(d,i(i({ref:n},s),{},{components:r})):t.createElement(d,i({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75809:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var t=r(87462),o=r(63366),p=(r(67294),r(3905)),i=["components"],a={title:"ngrep"},u=void 0,l={unversionedId:"os/linux/network/ngrep",id:"os/linux/network/ngrep",title:"ngrep",description:"* ngrep usage",source:"@site/notes/os/linux/network/ngrep.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/ngrep",permalink:"/notes/os/linux/network/ngrep",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/ngrep.md",tags:[],version:"current",frontMatter:{title:"ngrep"},sidebar:"docs",previous:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"},next:{title:"NMap",permalink:"/notes/os/linux/network/nmap"}},s=[],c={toc:s};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://ngrep.sourceforge.net/usage.html"},"ngrep usage"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'ngrep -q -d eth1 -W byline host stackoverflow.com and port 80\n       ^  ^       ^         ^\n       |  |       |         |\n       |  |       |         |\n       |  |       |         v\n       |  |       |         filter expression\n       |  |       |\n       |  |       +--\x3e  -W  is set the dump format ("normal", "byline", "single", "none")\n       |  |\n       |  +----------\x3e  -d  is use specified device instead of the pcap default\n       |\n       +-------------\x3e  -q  is be quiet ("don\'t print packet reception hash marks")\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"ngrep -d any port 25\n\n# \u8fc7\u6ee4 syslog \u7aef\u53e3\u91cc\u7684 error \u5173\u952e\u5b57\nngrep -d any 'error' port syslog\n\n# FTP \u91cc\u7684\u8d26\u53f7\u5bc6\u7801\nngrep -wi -d any 'user|pass' port 21\n\nngrep -W byline port 80\n\n# \u67e5\u770b\u672c\u5730 DNS \u67e5\u8be2\nngrep -d lo -x port 53\n\n# \u8f93\u51fa dump\nngrep -O /tmp/dns.dump -d any -T port domain\n# \u8bfb\u53d6 dump\nngrep -w 'm'  -I /tmp/dns.dump\nngrep -tD ns3  -I /tmp/dns.dump\n")))}f.isMDXComponent=!0}}]);