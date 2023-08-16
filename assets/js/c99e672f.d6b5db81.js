"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19595],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,y=m["".concat(i,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={title:"ECS Agent"},f="ECS Agent",y={unversionedId:"platform/aliyun/ecs-agent",id:"platform/aliyun/ecs-agent",title:"ECS Agent",description:"- /opt/local/share/assist-daemon",source:"@site/../notes/platform/aliyun/ecs-agent.md",sourceDirName:"platform/aliyun",slug:"/platform/aliyun/ecs-agent",permalink:"/notes/platform/aliyun/ecs-agent",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/aliyun/ecs-agent.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1692169664,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{title:"ECS Agent"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91",permalink:"/notes/platform/aliyun/"},next:{title:"Apple",permalink:"/notes/platform/apple/"}},d={},b=[],g={toc:b};function O(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),c),s(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"ecs-agent"}),"ECS Agent"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'mkdir -p /tmp/dl && cd $_\n\n# \u5185\u7f51 "https://aliyun-client-assist-{regionId}.oss-{regionId}-internal.aliyuncs.com/linux/aliyun_assist_latest.rpm"\ncurl -LO "https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest_update.zip"\n\nsudo unzip aliyun_assist_latest_update.zip -d /usr/local/share/aliyun-assist/\nVERSION=$(cat /usr/local/share/aliyun-assist/version)\n\nsudo apk add psutils procps-ng\n\nsudo chmod a+x /usr/local/share/aliyun-assist/$VERSION/update_install\nsudo bash /usr/local/share/aliyun-assist/$VERSION/update_install\n\nservice aliyun-service status\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/opt/local/share/assist-daemon"),(0,r.kt)("li",{parentName:"ul"},"/usr/local/share/assist-daemon",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"assist_daemon"))),(0,r.kt)("li",{parentName:"ul"},"/usr/local/share/aliyun-assist"),(0,r.kt)("li",{parentName:"ul"},"/usr/local/share/aliyun-assist/version"),(0,r.kt)("li",{parentName:"ul"},"/usr/local/share/aliyun-assist/$VERSION/")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# by RPM\ncurl -LO "https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm"\napk add rpm2cpio\nrpm2cpio aliyun_assist_latest.rpm | cpio -idmv\nsudo rsync -av ./usr/local/share/aliyun-assist/ /usr/local/share/aliyun-assist/\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"bash: line 1: chkconfig: command not found\n\n * service: Exec format error\n")))}O.isMDXComponent=!0}}]);