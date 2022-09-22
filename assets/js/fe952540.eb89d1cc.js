"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18766],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,g=f["".concat(i,".").concat(d)]||f[d]||u[d]||p;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},20438:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return m}});var r=t(49613),a=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&s(e,t,n[t]);return e};const f={title:"PHP Pecl"},d="PHP Pecl",g={unversionedId:"languages/php/php-pecl",id:"languages/php/php-pecl",title:"PHP Pecl",description:"After Alpine v3.5, the /usr/bin/php is php7, before that is php5 in php5-cli package.",source:"@site/../notes/languages/php/php-pecl.md",sourceDirName:"languages/php",slug:"/languages/php/pecl",permalink:"/notes/languages/php/pecl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/php/php-pecl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642767775,formattedLastUpdatedAt:"Jan 21, 2022",frontMatter:{title:"PHP Pecl"},sidebar:"docs",previous:{title:"PHP FAQ",permalink:"/notes/languages/php/faq"},next:{title:"roadrunner",permalink:"/notes/languages/php/roadrunner"}},h={},m=[],y={toc:m};function b(e){var n,t=e,{components:a}=t,s=((e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},y),s),p(n,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"php-pecl"}),"PHP Pecl"),(0,r.kt)("admonition",u({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"After Alpine v3.5, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin/php")," is php7, before that is php5 in php5-cli package.")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# igbinary\n# https://pecl.php.net/package/igbinary\npecl install -o -f igbinary\n\n# redis\n# OPTIONS: igbinary, lzf\n# https://pecl.php.net/package/redis\npecl install -o -f redis <<<""\n# build\napk add xz-dev\npecl install -o -f redis < <(echo -e "yes\\nyes")\n# \u6709\u4e9b\u73af\u5883\u4e0b\u4e0d\u652f\u6301 < <() \u8bed\u6cd5\u53ef\u4ee5\u8fd9\u6837\necho -e "yes\\nyes" | pecl install -o -f redis\n\n# imagick\napk add imagemagick-dev\npecl install -o -f imagick <<<""\n\n# protobuf\npecl install -o -f protobuf\npecl install -o -f grpc\n\n# yaml\n# require php7\napk add yaml-dev\npecl install -o -f yaml <<<""\n\n# mongodb\npecl install -o -f mongodb\n\n# APCU\n# require php7\n# OPTIONS internal debug\npecl install -o -f apcu <<<no\n\n# AMQP\n# https://pecl.php.net/package/amqp\n# \u662f\u52a8\u6001\u7f16\u8bd1\u7684, \u8fd0\u884c\u65f6\u9700\u8981\u5b89\u88c5 rabbitmq-c\napk add rabbitmq-c-dev\npecl install -o -f amqp <<<""\n\n# swoole\n# https://pecl.php.net/package/swoole\n# Event-driven asynchronous and concurrent networking engine with high performance for PHP.\n# OPTIONS: debug/trace log, sockets, openssl, http2 -> nghttp2-dev, async-redis -> hiredis, mysqlnd\n# all no\npecl install -o -f swoole <<<""\n\napk add nghttp2-dev hiredis-dev\n# all yes except trace log\npecl install -o -f swoole < <(echo -e "no\\nyes\\nyes\\nyes\\nyes\\nyes")\n\n# memcached\n# require php7\n\n# memcache\n# php5\n')))}b.isMDXComponent=!0}}]);