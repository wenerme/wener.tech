"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25917],{47984:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(96600),p=t(27279),a=(t(59496),t(3905)),o=["components"],i={title:"PHP Pecl"},l=void 0,c={unversionedId:"languages/php/php-pecl",id:"languages/php/php-pecl",title:"PHP Pecl",description:"After Alpine v3.5, the /usr/bin/php is php7, before that is php5 in php5-cli package.",source:"@site/notes/languages/php/php-pecl.md",sourceDirName:"languages/php",slug:"/languages/php/php-pecl",permalink:"/notes/languages/php/php-pecl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/php/php-pecl.md",tags:[],version:"current",frontMatter:{title:"PHP Pecl"},sidebar:"docs",previous:{title:"PHP FAQ",permalink:"/notes/languages/php/php-faq"},next:{title:"roadrunner",permalink:"/notes/languages/php/roadrunner"}},s={},u=[],f={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"After Alpine v3.5, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/php")," is php7, before that is php5 in php5-cli package.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# igbinary\n# https://pecl.php.net/package/igbinary\npecl install -o -f igbinary\n\n# redis\n# OPTIONS: igbinary, lzf\n# https://pecl.php.net/package/redis\npecl install -o -f redis <<<""\n# build\napk add xz-dev\npecl install -o -f redis < <(echo -e "yes\\nyes")\n# \u6709\u4e9b\u73af\u5883\u4e0b\u4e0d\u652f\u6301 < <() \u8bed\u6cd5\u53ef\u4ee5\u8fd9\u6837\necho -e "yes\\nyes" | pecl install -o -f redis\n\n# imagick\napk add imagemagick-dev\npecl install -o -f imagick <<<""\n\n# protobuf\npecl install -o -f protobuf\npecl install -o -f grpc\n\n# yaml\n# require php7\napk add yaml-dev\npecl install -o -f yaml <<<""\n\n# mongodb\npecl install -o -f mongodb\n\n# APCU\n# require php7\n# OPTIONS internal debug\npecl install -o -f apcu <<<no\n\n# AMQP\n# https://pecl.php.net/package/amqp\n# \u662f\u52a8\u6001\u7f16\u8bd1\u7684, \u8fd0\u884c\u65f6\u9700\u8981\u5b89\u88c5 rabbitmq-c\napk add rabbitmq-c-dev\npecl install -o -f amqp <<<""\n\n# swoole\n# https://pecl.php.net/package/swoole\n# Event-driven asynchronous and concurrent networking engine with high performance for PHP.\n# OPTIONS: debug/trace log, sockets, openssl, http2 -> nghttp2-dev, async-redis -> hiredis, mysqlnd\n# all no\npecl install -o -f swoole <<<""\n\napk add nghttp2-dev hiredis-dev\n# all yes except trace log\npecl install -o -f swoole < <(echo -e "no\\nyes\\nyes\\nyes\\nyes\\nyes")\n\n# memcached\n# require php7\n\n# memcache\n# php5\n')))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return f}});var r=t(59496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=p,h=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);