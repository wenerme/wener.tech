"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44334],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,l(l({ref:e},s),{},{components:r})):n.createElement(d,l({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16121:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),l=["components"],i={title:"fonoster"},p="fonoster",u={unversionedId:"voip/fonoster",id:"voip/fonoster",title:"fonoster",description:"- fonoster/fonoster",source:"@site/../notes/voip/fonoster.md",sourceDirName:"voip",slug:"/voip/fonoster",permalink:"/notes/voip/fonoster",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/voip/fonoster.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"fonoster"},sidebar:"docs",previous:{title:"PJSIP",permalink:"/notes/voip/dev/pjsip"},next:{title:"FreePBX",permalink:"/notes/voip/freepbx/"}},s={},c=[{value:"Notes",id:"notes",level:2}],m={toc:c};function f(t){var e=t.components,r=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fonoster"},"fonoster"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster"},"fonoster/fonoster"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT, JS+TS")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# https://github.com/fonoster/fonoster/blob/main/Dockerfile\n# https://github.com/fonoster/fonoster/blob/main/install.sh\ndocker run -it --rm \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v $PWD/data:/out:rw \\\n  -p 50051:50051 \\\n  --entrypoint bash fonoster/fonoster:0.3.3\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/work/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"operator/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},".env - \u4e3b\u8981\u914d\u7f6e"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster/blob/main/install.sh"},"install.sh"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e /work/operator/.env"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236 /work \u5230 /out"),(0,a.kt)("li",{parentName:"ul"},"docker volume create"),(0,a.kt)("li",{parentName:"ul"},"docker-compose -f init.yml up service_creds user_creds"),(0,a.kt)("li",{parentName:"ul"},"docker-compose -f init.yml up create_buckets bootstrap_sipnet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster/blob/main/operator/compose/init.yml"},"operator/compose/init.yml"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"env"),(0,a.kt)("th",{parentName:"tr",align:null},"default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DOCKER_HOST_IP"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DOMAIN"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ENABLE_TLS"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"50051")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTPS_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LETSENCRYPT_EMAIL"),(0,a.kt)("td",{parentName:"tr",align:null},"admin@$DOMAIN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GLOBAL_SIP_DOMAIN"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.fonoster.com/docs/overview"},"https://learn.fonoster.com/docs/overview"))))}f.isMDXComponent=!0}}]);