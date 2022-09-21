"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33469],{1719:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(96600),o=r(27279),a=(r(59496),r(3905)),s=["components"],i={title:"ZFS Awesome",tags:["Awesome"]},l=void 0,u={unversionedId:"ops/storage/fs/zfs-awesome",id:"ops/storage/fs/zfs-awesome",title:"ZFS Awesome",description:"- containerd/zfs",source:"@site/notes/ops/storage/fs/zfs-awesome.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/zfs-awesome",permalink:"/notes/ops/storage/fs/zfs-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/zfs-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"ZFS Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"DFS",permalink:"/notes/ops/storage/fs/dfs"},next:{title:"ZFS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/ops/storage/fs/zfs-faq"}},p={},c=[{value:"Issues",id:"issues",level:2},{value:"Stories",id:"stories",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/zfs"},"containerd/zfs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"containerd ZFS snapshotter"),(0,a.kt)("li",{parentName:"ul"},"containerd 1.1 \u5185\u7f6e - 2018-04-24")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zfs create -o mountpoint=/var/lib/containerd/io.containerd.snapshotter.v1.zfs tank/containerd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kimono-koans/httm"},"kimono-koans/httm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jimsalterjrs/sanoid"},"jimsalterjrs/sanoid"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5feb\u7167\u7ba1\u7406\uff0c\u526f\u672c\u7ba1\u7406"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ubuntu/zsys"},"ubuntu/zsys"))),(0,a.kt)("h2",{id:"issues"},"Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/moby/moby/issues/41055"},"moby/moby#41055"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Docker zfs driver \u6709\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ef\u8003\u8651\u4f7f\u7528 zvol")))),(0,a.kt)("h2",{id:"stories"},"Stories"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We saved millions in SSD costs by upgrading our filesystem\nheap.io\n",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29164727"},"HN"))))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);