"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16543],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39737:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var r=t(49613),o=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&u(e,t,n[t]);return e};const f={title:"Nextcloud \u914d\u7f6e",tags:["Configuration"]},d="Nextcloud \u914d\u7f6e",m={unversionedId:"service/file/nextcloud-conf",id:"service/file/nextcloud-conf",title:"Nextcloud \u914d\u7f6e",description:"- \u73af\u5883\u53d8\u91cf\u4f1a\u8986\u76d6\u914d\u7f6e config.php",source:"@site/../notes/service/file/nextcloud-conf.md",sourceDirName:"service/file",slug:"/service/file/nextcloud-conf",permalink:"/notes/service/file/nextcloud-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/file/nextcloud-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672043702,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{title:"Nextcloud \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"netatalk",permalink:"/notes/service/file/netatalk"},next:{title:"Nextcloud \u5f00\u53d1",permalink:"/notes/service/file/nextcloud-dev"}},g={},y=[],v={toc:y};function b(e){var n,t=e,{components:o}=t,u=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},v),u),c(n,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"nextcloud-\u914d\u7f6e"}),"Nextcloud \u914d\u7f6e"),(0,r.kt)("admonition",p({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u4f1a\u8986\u76d6\u914d\u7f6e config.php"),(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u4f1a\u5728 redis.config.php autoconfig.php \u7b49\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bfb\u53d6"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/nextcloud/server/blob/master/config/config.sample.php"}),"config.sample.php"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker exec -it -u www-data nextcloud bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"cat config/config.php\n\n# \u670d\u52a1\u5668\u72b6\u6001\n./occ status\n\n# \u914d\u7f6e\n./occ config:system:get trusted_domains\n./occ config:system:set trusted_domains 1 --value=192.168.1.1\n\n# \u79bb\u7ebf\n./occ config:system:set has_internet_connection --value=true --type=boolean\n\n# \u8bbe\u7f6e\u9ed8\u8ba4\u8bed\u8a00\n./occ config:system:set default_language --value=zh_CN\n./occ config:system:set default_ladefault_localenguage --value=zh\n\n# \u5bfc\u51fa\u914d\u7f6e\n# private \u5305\u542b\u5bc6\u7801\u4e4b\u7c7b\u7684\u5185\u5bb9\n./occ config:list --private\n./occ config:list system --output=plain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"<?php\n\n$CONFIG = array(\n// \u5b9e\u4f8b\u552f\u4e00\u6807\u8bc6\u7b26\n'instanceid' => '',\n// \u9ed8\u8ba4\u8bed\u8a00 - \u9ed8\u8ba4 en\n'default_language' => 'zh_CN',\n'default_locale' => 'zh',\n// \u9ed8\u8ba4\u6253\u5f00\u5e94\u7528\n'defaultapp' => 'files',\n// \u4fe1\u4efb\u57df\u540d\n'trusted_domains' =>\n  [\n    'localhost',\n  ],\n\n// \u9ed8\u8ba4\u5f00\u542f\u5e2e\u52a9\u6587\u6863\n'knowledgebaseenabled' => false,\n\n// \u6a21\u677f\u6587\u4ef6\u76ee\u5f55 - \u65b0\u521b\u5efa\u7528\u6237\n'skeletondirectory' => 'core/skeleton',\n// 'skeletondirectory' => 'config/skeleton',\n\n// HTTP_PROXY\n'proxy' => '',\n'proxyuserpwd' => '',\n// NO_PROXY\n'proxyexclude' => [],\n\n// \u662f\u5426\u81ea\u52a8\u68c0\u67e5\u66f4\u65b0\n'updatechecker' => false,\n\n// \u662f\u5426\u6709\u7f51\u7edc\u94fe\u63a5 - false \u5219\u662f\u79bb\u7ebf\u72b6\u6001\n'has_internet_connection' => true,\n// \u68c0\u6d4b\u8054\u901a\u6027\n'connectivity_check_domains' => [\n    'www.nextcloud.com',\n    'www.startpage.com',\n    'www.eff.org',\n    'www.edri.org'\n],\n\n\n// \u4e2a\u4e2a\u5e73\u53f0\u7684\u5ba2\u6237\u7aef\u4e0b\u8f7d\u94fe\u63a5\u914d\u7f6e\n'customclient_desktop' =>\n    'https://nextcloud.com/install/#install-clients',\n'customclient_android' =>\n    'https://play.google.com/store/apps/details?id=com.nextcloud.client',\n'customclient_ios' =>\n    'https://itunes.apple.com/us/app/nextcloud/id1125420102?mt=8',\n'customclient_ios_appid' =>\n    '1125420102',\n\n\n// \u662f\u5426\u542f\u7528\u5e94\u7528\u5546\u5e97\n'appstoreenabled' => true,\n\n// \u4fe1\u4efb\u7684\u53cd\u5411\u4ee3\u7406\n'trusted_proxies' => ['192.168.0.0/16'],\n'forwarded_for_headers' => ['HTTP_X_FORWARDED_FOR'],\n\n// \u4ee3\u7406\u914d\u7f6e\n// ==============================\n\n// \u8986\u76d6\u4e3b\u673a - \u7528\u4e8e\u68c0\u6d4b\u4e0d\u5230\u53cd\u5411\u4ee3\u7406\u7684 Host \u65f6\n'overwritehost' => '',\n\n// \u5982\u679c\u5728\u53cd\u5411\u4ee3\u7406\u4e4b\u540e\u68c0\u6d4b\u4e0d\u5230 schema \u65f6\u53ef\u4ee5\u8bbe\u7f6e - \u4f8b\u5982 https\n'overwriteprotocol' => '',\n\n// \u8986\u76d6 root \u8def\u5f84 - \u4f8b\u5982 www.example.com/nextcloud \u4f1a\u68c0\u6d4b\u4e3a /nextcloud\n// \u53cd\u5411\u4ee3\u7406\u7684\u65f6\u5019\u53ef\u80fd\u68c0\u6d4b\u4e0d\u5230\n'overwritewebroot' => '',\n\n// \u590d\u5199\u7684\u6761\u4ef6\u5730\u5740 - \u4f8b\u5982 10\\.0\\.0\\. \u5219\u53ea\u8986\u76d6 10.0.0.0/24 \u8fc7\u6765\u7684\u8bf7\u6c42\n// \u6b63\u5219\u8868\u8fbe\u5f0f\n'overwritecondaddr' => '',\n\n// \u8986\u76d6\u547d\u4ee4\u884c\u5de5\u5177\u5730\u5740 - \u4f8b\u5982 occ cron \u7b49\n'overwrite.cli.url' => '',\n\n)\n")))}b.isMDXComponent=!0}}]);