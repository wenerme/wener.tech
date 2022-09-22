"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41174],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,k=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(k,c(c({ref:t},s),{},{components:r})):n.createElement(k,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17236:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(96600),o=r(27279),i=(r(59496),r(49613)),c=["components"],a={title:"Zerotier Controller"},l="zerotier-controller",u={unversionedId:"service/network/zerotier-controller",id:"service/network/zerotier-controller",title:"Zerotier Controller",description:"- \u5b9e\u73b0 https://github.com/zerotier/ZeroTierOne/tree/master/controller",source:"@site/../notes/service/network/zerotier-controller.md",sourceDirName:"service/network",slug:"/service/network/zerotier-controller",permalink:"/notes/service/network/zerotier-controller",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/network/zerotier-controller.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Zerotier Controller"},sidebar:"docs",previous:{title:"wiretrustee",permalink:"/notes/service/network/wiretrustee"},next:{title:"Zerotier",permalink:"/notes/service/network/zerotier"}},s={},p=[{value:"ztncui",id:"ztncui",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zerotier-controller"},"zerotier-controller"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne/tree/master/controller"},"https://github.com/zerotier/ZeroTierOne/tree/master/controller")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 UDP/9993"),(0,i.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u5b58\u50a8 PostgreSQL")),(0,i.kt)("h2",{id:"ztncui"},"ztncui"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/key-networks/ztncui"},"key-networks/ztncui"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"controller \u524d\u7aef"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/key-networks/ztncui-containerized"},"key-networks/ztncui-containerized"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Docker")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v $PWD/ztc:/host --entrypoint sh keynetworks/ztncui -c 'cp -r /opt/key-networks/ztncui/etc /host/ztncui'\ndocker run --rm -it -v $PWD/ztc:/host --entrypoint sh keynetworks/ztncui -c 'cp -r /var/lib/zerotier-one /host/data'\n\nsudo chown 998:998 -R ztc/\n\n# http://localhost:3000\n# https://localhost:3443\n# admin:password\ndocker run -d --restart=always \\\n  -p 3000:3000 -p 3443:3443 \\\n  --cap-add=NET_ADMIN \\\n  -e HTTP_ALL_INTERFACES=yes \\\n  -v $PWD/ztc/ztncui:/opt/key-networks/ztncui/etc/ \\\n  -v $PWD/ztc/data:/var/lib/zerotier-one/ \\\n  --name ztncui keynetworks/ztncui\n")))}f.isMDXComponent=!0}}]);