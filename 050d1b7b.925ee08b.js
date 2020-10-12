(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{557:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||p;return t?a.a.createElement(b,o(o({ref:n},l),{},{components:t})):a.a.createElement(b,o({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<p;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(7),p=(t(0),t(557)),c={id:"php-pecl",title:"PHP Pecl"},o={unversionedId:"languages/php-pecl",id:"languages/php-pecl",isDocsHomePage:!1,title:"PHP Pecl",description:"PHP",source:"@site/contents/tricks/languages/php-pecl.md",slug:"/languages/php-pecl",permalink:"/notes/languages/php-pecl",version:"current"},i=[{value:"Tips",id:"tips",children:[]},{value:"PECL",id:"pecl",children:[]}],l={rightToc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"php"},"PHP"),Object(p.b)("h2",{id:"tips"},"Tips"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"After Alpine v3.5, the ",Object(p.b)("inlineCode",{parentName:"li"},"/usr/bin/php")," is php7, before that is php5 in php5-cli package.")),Object(p.b)("h2",{id:"pecl"},"PECL"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# igbinary\n# https://pecl.php.net/package/igbinary\npecl install -o -f igbinary\n\n# redis\n# OPTIONS: igbinary, lzf\n# https://pecl.php.net/package/redis\npecl install -o -f redis <<<""\n# build \napk add xz-dev\npecl install -o -f redis < <(echo -e "yes\\nyes")\n# \u6709\u4e9b\u73af\u5883\u4e0b\u4e0d\u652f\u6301 < <() \u8bed\u6cd5\u53ef\u4ee5\u8fd9\u6837\necho -e "yes\\nyes" | pecl install -o -f redis\n\n# imagick\napk add imagemagick-dev\npecl install -o -f imagick <<<""\n\n# protobuf\npecl install -o -f protobuf\npecl install -o -f grpc\n\n# yaml\n# require php7\napk add yaml-dev\npecl install -o -f yaml <<<""\n\n# mongodb\npecl install -o -f mongodb\n\n# APCU\n# require php7\n# OPTIONS internal debug\npecl install -o -f apcu <<<no\n\n# AMQP\n# https://pecl.php.net/package/amqp\n# \u662f\u52a8\u6001\u7f16\u8bd1\u7684, \u8fd0\u884c\u65f6\u9700\u8981\u5b89\u88c5 rabbitmq-c\napk add rabbitmq-c-dev\npecl install -o -f amqp <<<""\n\n# swoole\n# https://pecl.php.net/package/swoole\n# Event-driven asynchronous and concurrent networking engine with high performance for PHP.\n# OPTIONS: debug/trace log, sockets, openssl, http2 -> nghttp2-dev, async-redis -> hiredis, mysqlnd\n# all no\npecl install -o -f swoole <<<""\n\napk add nghttp2-dev hiredis-dev\n# all yes except trace log\npecl install -o -f swoole < <(echo -e "no\\nyes\\nyes\\nyes\\nyes\\nyes")\n\n# memcached\n# require php7\n\n# memcache\n# php5\n')))}s.isMDXComponent=!0}}]);