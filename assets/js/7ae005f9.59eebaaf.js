"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25653],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,s=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(s,o(o({ref:t},d),{},{components:r})):n.createElement(s,o({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},69346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return s},metadata:function(){return N},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),k=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const s={title:"Docker CLI"},f="docker cli",N={unversionedId:"devops/docker/docker-cli",id:"devops/docker/docker-cli",title:"Docker CLI",description:"- https://docs.docker.com/engine/reference/commandline/cli/#environment-variables",source:"@site/../notes/devops/docker/docker-cli.md",sourceDirName:"devops/docker",slug:"/devops/docker/cli",permalink:"/notes/devops/docker/cli",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/docker/docker-cli.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"Docker CLI"},sidebar:"docs",previous:{title:"Docker",permalink:"/notes/devops/docker/"},next:{title:"Docker compose",permalink:"/notes/devops/docker/compose"}},b={},y=[],O={toc:y},g="wrapper";function v(e){var t=e,{components:r}=t,a=k(t,["components"]);return(0,n.kt)(g,m(u(u({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"docker-cli"}),"docker cli"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.docker.com/engine/reference/commandline/cli/#environment-variables"}),"https://docs.docker.com/engine/reference/commandline/cli/#environment-variables"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"env"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_CONFIG"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_CONTEXT"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_DEFAULT_PLATFORM"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"--platform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_HIDE_LEGACY_COMMANDS"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"docker rm, docker pull")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_HOST"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_TLS_VERIFY"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"BUILDKIT_PROGRESS"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"auto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_CONTENT_TRUST_SERVER"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_CONTENT_TRUST"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"notary sign & verify")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_API_VERSION"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_CERT_PATH"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"HTTP_PROXY"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"HTTPS_PROXY"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"NO_PROXY"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"DOCKER_REGISTRY_CREDENTIALS_ID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Jenkins")))))}v.isMDXComponent=!0}}]);