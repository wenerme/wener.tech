"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64658],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={title:"PHP FAQ",tags:["FAQ"]},f="PHP FAQ",m={unversionedId:"languages/php/php-faq",id:"languages/php/php-faq",title:"PHP FAQ",description:"Timezone",source:"@site/../notes/languages/php/php-faq.md",sourceDirName:"languages/php",slug:"/languages/php/faq",permalink:"/notes/languages/php/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/php/php-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"PHP FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"PHP Awesome",permalink:"/notes/languages/php/awesome"},next:{title:"PHP FPM",permalink:"/notes/languages/php/fpm"}},h={},g=[{value:"Timezone",id:"timezone",level:2},{value:"redis session",id:"redis-session",level:2},{value:"\u5f3a\u5236\u7c7b\u578b",id:"\u5f3a\u5236\u7c7b\u578b",level:2},{value:"Connection to `ssl://pecl.php.net:443&#39; failed: Unable to find the socket transport &quot;ssl&quot; - did you forget to enable it when you configured PHP",id:"connection-to-sslpeclphpnet443-failed-unable-to-find-the-socket-transport-ssl---did-you-forget-to-enable-it-when-you-configured-php",level:2},{value:"sodium_crypto_aead_aes256gcm_decrypt",id:"sodium_crypto_aead_aes256gcm_decrypt",level:2}],y={toc:g};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),u),o(t,p({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"php-faq"}),"PHP FAQ"),(0,r.kt)("h2",c({},{id:"timezone"}),"Timezone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 TZ \u73af\u5883\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"<?php\ndate_default_timezone_set('Asia/Shanghai');\n\n$script_tz = date_default_timezone_get();\nif (strcmp($script_tz, ini_get('date.timezone'))){\n    echo '\u65f6\u533a\u4e0eINI\u914d\u7f6e \u4e0d\u540c';\n} else {\n    echo '\u65f6\u533a\u4e0eINI\u914d\u7f6e \u76f8\u540c'\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"php.ini")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini"}),'[Date]\n; Defines the default timezone used by the date functions\n; http://php.net/date.timezone\n; https://www.php.net/manual/en/timezones.asia.php\ndate.timezone = "Asia/Shanghai"\n')),(0,r.kt)("h2",c({},{id:"redis-session"}),"redis session"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-redis-server-as-a-session-handler-for-php-on-ubuntu-14-04"}),"How to Set Up a Redis Server as a Session Handler for PHP on Ubuntu 14.04")),(0,r.kt)("li",{parentName:"ul"},"php5-redis")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/php5/fpm/php.ini")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini"}),'session.save_handler = redis\n# key \u683c\u5f0f\n# PHPREDIS_SESSION:j9rsgtde6st2rqb6lu5u6f4h83\nsession.save_path = "tcp://10.10.1.1:6379?auth=yourverycomplexpasswordhere"\n')),(0,r.kt)("h2",c({},{id:"\u5f3a\u5236\u7c7b\u578b"}),"\u5f3a\u5236\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"<?\ndeclare(strict_types=1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict"}),"strict_types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8 \u5f31\u7c7b\u578b \u7c7b\u578b\u8f6c\u6362")))),(0,r.kt)("h2",c({},{id:"connection-to-sslpeclphpnet443-failed-unable-to-find-the-socket-transport-ssl---did-you-forget-to-enable-it-when-you-configured-php"}),'Connection to `ssl://pecl.php.net:443\' failed: Unable to find the socket transport "ssl" - did you forget to enable it when you configured PHP'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apk add php7-openssl\n")),(0,r.kt)("h2",c({},{id:"sodium_crypto_aead_aes256gcm_decrypt"}),"sodium_crypto_aead_aes256gcm_decrypt"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apk add php7-sodium\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sodium_crypto_aead_aes256gcm_is_available()")))}b.isMDXComponent=!0}}]);