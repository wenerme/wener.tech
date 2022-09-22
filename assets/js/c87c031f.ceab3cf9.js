"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34352],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9582:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={title:"augeas"},f="augeas",d={unversionedId:"ops/admin/augeas",id:"ops/admin/augeas",title:"augeas",description:"- Augeas - a configuration API",source:"@site/../notes/ops/admin/augeas.md",sourceDirName:"ops/admin",slug:"/ops/admin/augeas",permalink:"/notes/ops/admin/augeas",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/admin/augeas.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627915171,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"augeas"},sidebar:"docs",previous:{title:"\u8fd0\u7ef4",permalink:"/notes/ops/"},next:{title:"Benchmark",permalink:"/notes/ops/admin/benchmark"}},g={},y=[],k={toc:y};function b(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"augeas"}),"augeas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"http://augeas.net/"}),"Augeas")," - a configuration API"),(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u5316\u7684\u7f16\u8f91\u5404\u79cd\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4e8e\u975e\u4ea4\u4e92\u5f0f\u7684\u7f16\u8f91\u7ed3\u6784\u5316\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u8d77\u6765\u6bd4 set/grep \u4e4b\u7c7b\u7684\u66f4\u52a0\u7b80\u5355"))),(0,r.kt)("li",{parentName:"ul"},"augparse - Evaluate MODULE"),(0,r.kt)("li",{parentName:"ul"},"augtool - Load the Augeas tree and modify it. If no COMMAND is given, run interactively"),(0,r.kt)("li",{parentName:"ul"},"fadot - Compile REGEXP and apply operation to them. By default, just print the minimized regexp."),(0,r.kt)("li",{parentName:"ul"},"augmatch"),(0,r.kt)("li",{parentName:"ul"},"\u6982\u5ff5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lens - \u5904\u7406\u6587\u4ef6\u7684\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"http://augeas.net/stock_lenses.html"}),"\u5f53\u524d\u7684 Lens \u5217\u8868")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"http://augeas.net/docs/tree.html"}),"Tree")," - \u5185\u90e8\u6811\u7ed3\u6784",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/augeas")," - \u8fd0\u884c\u7684\u5185\u90e8\u72b6\u6001",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/root")," - \u539f\u59cb\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/save")," - \u4fdd\u5b58\u6a21\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/files")," - \u672c\u5730\u6587\u4ef6")))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"brew install augeas\n\n# \u8f93\u51fa augeas \u5185\u90e8\u7ed3\u6784\naugmatch /etc/hosts\n# \u8f93\u51fa\u5904\u7406\u6587\u4ef6\u7684 Lens\naugmatch /etc/hosts -L\n\n# \u53ea\u8f93\u51fa\u5339\u914d\u5185\u5bb9\naugmatch /etc/hosts -m '*/ipaddr'\n\n# \u8f93\u51fa\u5185\u90e8\u7684\u8bed\u6cd5\u6811\naugtool 'dump-xml /files/etc/hosts'\n")))}b.isMDXComponent=!0}}]);