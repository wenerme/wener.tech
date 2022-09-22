"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44334],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,l(l({ref:e},s),{},{components:r})):n.createElement(d,l({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91410:function(t,e,r){r.r(e),r.d(e,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&s(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&s(t,r,e[r]);return t};const m={title:"fonoster"},f="fonoster",d={unversionedId:"voip/fonoster",id:"voip/fonoster",title:"fonoster",description:"- fonoster/fonoster",source:"@site/../notes/voip/fonoster.md",sourceDirName:"voip",slug:"/voip/fonoster",permalink:"/notes/voip/fonoster",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/fonoster.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"fonoster"},sidebar:"docs",previous:{title:"PJSIP",permalink:"/notes/voip/dev/pjsip"},next:{title:"FreePBX",permalink:"/notes/voip/freepbx/"}},k={},b=[{value:"Notes",id:"notes",level:2}],N={toc:b};function y(t){var e,r=t,{components:o}=r,s=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=c(c({},N),s),a(e,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"fonoster"}),"fonoster"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/fonoster/fonoster"}),"fonoster/fonoster"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, JS+TS")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# https://github.com/fonoster/fonoster/blob/main/Dockerfile\n# https://github.com/fonoster/fonoster/blob/main/install.sh\ndocker run -it --rm \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v $PWD/data:/out:rw \\\n  -p 50051:50051 \\\n  --entrypoint bash fonoster/fonoster:0.3.3\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/work/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"operator/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},".env - \u4e3b\u8981\u914d\u7f6e"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/fonoster/fonoster/blob/main/install.sh"}),"install.sh"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e /work/operator/.env"),(0,n.kt)("li",{parentName:"ul"},"\u590d\u5236 /work \u5230 /out"),(0,n.kt)("li",{parentName:"ul"},"docker volume create"),(0,n.kt)("li",{parentName:"ul"},"docker-compose -f init.yml up service_creds user_creds"),(0,n.kt)("li",{parentName:"ul"},"docker-compose -f init.yml up create_buckets bootstrap_sipnet"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/fonoster/fonoster/blob/main/operator/compose/init.yml"}),"operator/compose/init.yml"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"env"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"DOCKER_HOST_IP"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"DOMAIN"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ENABLE_TLS"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HTTP_PORT"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"50051")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HTTPS_PORT"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"LETSENCRYPT_EMAIL"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"admin@$DOMAIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GLOBAL_SIP_DOMAIN"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",c({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://learn.fonoster.com/docs/overview"}),"https://learn.fonoster.com/docs/overview"))))}y.isMDXComponent=!0}}]);