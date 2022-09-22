"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26112],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||p;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(96600),a=n(27279),p=(n(59496),n(49613)),i=["components"],o={title:"PHP FAQ",tags:["FAQ"]},s=void 0,l={unversionedId:"languages/php/php-faq",id:"languages/php/php-faq",title:"PHP FAQ",description:"Timezone",source:"@site/notes/languages/php/php-faq.md",sourceDirName:"languages/php",slug:"/languages/php/php-faq",permalink:"/notes/languages/php/php-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/php/php-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"PHP FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"PHP Awesome",permalink:"/notes/languages/php/php-awesome"},next:{title:"PHP Pecl",permalink:"/notes/languages/php/php-pecl"}},u={},c=[{value:"Timezone",id:"timezone",level:2},{value:"redis session",id:"redis-session",level:2},{value:"\u5f3a\u5236\u7c7b\u578b",id:"\u5f3a\u5236\u7c7b\u578b",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"timezone"},"Timezone"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 TZ \u73af\u5883\u53d8\u91cf")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"<?php\ndate_default_timezone_set('Asia/Shanghai');\n\n$script_tz = date_default_timezone_get();\nif (strcmp($script_tz, ini_get('date.timezone'))){\n    echo '\u65f6\u533a\u4e0eINI\u914d\u7f6e \u4e0d\u540c';\n} else {\n    echo '\u65f6\u533a\u4e0eINI\u914d\u7f6e \u76f8\u540c'\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"php.ini")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ini"},'[Date]\n; Defines the default timezone used by the date functions\n; http://php.net/date.timezone\n; https://www.php.net/manual/en/timezones.asia.php\ndate.timezone = "Asia/Shanghai"\n')),(0,p.kt)("h2",{id:"redis-session"},"redis session"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-redis-server-as-a-session-handler-for-php-on-ubuntu-14-04"},"How to Set Up a Redis Server as a Session Handler for PHP on Ubuntu 14.04")),(0,p.kt)("li",{parentName:"ul"},"php5-redis")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"/etc/php5/fpm/php.ini")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ini"},'session.save_handler = redis\n# key \u683c\u5f0f\n# PHPREDIS_SESSION:j9rsgtde6st2rqb6lu5u6f4h83\nsession.save_path = "tcp://10.10.1.1:6379?auth=yourverycomplexpasswordhere"\n')),(0,p.kt)("h2",{id:"\u5f3a\u5236\u7c7b\u578b"},"\u5f3a\u5236\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"<?\ndeclare(strict_types=1)\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict"},"strict_types"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8 \u5f31\u7c7b\u578b \u7c7b\u578b\u8f6c\u6362")))))}f.isMDXComponent=!0}}]);