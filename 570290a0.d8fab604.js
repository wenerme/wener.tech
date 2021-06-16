(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1083:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:r},s),{},{components:t})):a.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},425:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(8),o=(t(0),t(1083)),i={title:"AppWrite"},c={unversionedId:"service/baas/appwrite",id:"service/baas/appwrite",isDocsHomePage:!1,title:"AppWrite",description:"- docker-compose.yml & .env",source:"@site/notes/service/baas/appwrite.md",slug:"/service/baas/appwrite",permalink:"/notes/service/baas/appwrite",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/baas/appwrite.md",version:"current",sidebar:"docs",previous:{title:"Backend as a Service",permalink:"/notes/service/baas/README"},next:{title:"Apache Superset",permalink:"/notes/service/bi/apache-superset"}},p=[],s={toc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/eldadfux/977869ff6bdd7312adfd4e629ee15cc5"},"docker-compose.yml & .env "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docker-compose up -d --remove-orphans")),Object(o.b)("li",{parentName:"ul"},"mariadb, redis, traefik, influxdb, telegraf"),Object(o.b)("li",{parentName:"ul"},"appwrite \u5165\u53e3 worker-usage, worker-audits, worker-webhooks, worker-tasks, worker-deletes, worker-certificates, worker-functions, worker-mails, appwrite-maintenance, appwrite-schedule")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'docker run -it --rm \\\n  --volume /var/run/docker.sock:/var/run/docker.sock \\\n  --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \\\n  --entrypoint="install" \\\n  appwrite/appwrite:0.8.0\n')))}u.isMDXComponent=!0}}]);