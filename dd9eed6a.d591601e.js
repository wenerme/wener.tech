(window.webpackJsonp=window.webpackJsonp||[]).push([[939],{1012:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(1151)),i={slug:"ketama-consistence-hash",title:"\u4e00\u81f4\u6027Hash\u7b97\u6cd5",tags:["\u7b97\u6cd5"]},l={permalink:"/story/ketama-consistence-hash",editUrl:"https://github.com/wenerme/wener/edit/master/story/2014/2014-11-12-\u4e00\u81f4\u6027Hash\u7b97\u6cd5.md",source:"@site/story/2014/2014-11-12-\u4e00\u81f4\u6027Hash\u7b97\u6cd5.md",description:"ketama",date:"2014-11-12T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/story/tags/\u7b97\u6cd5"}],title:"\u4e00\u81f4\u6027Hash\u7b97\u6cd5",readingTime:1.285,truncated:!0,prevItem:{title:"\u8f6c\u6218 Hugo, \u535a\u5ba2\u8fc1\u79fb\u4e4b\u8def",permalink:"/story/2015/09/25/blog-hugo"},nextItem:{title:"\u6d88\u606f\u4e2d\u95f4\u4ef6\u7b80\u4ecb mom-intro",permalink:"/story/mom-intro"}},c=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ketama"},"ketama"),Object(o.b)("p",null,"\u8be5\u7b97\u6cd5\u6700\u5f00\u59cb\u662f\u5f00\u53d1\u6765\u66ff\u4ee3",Object(o.b)("inlineCode",{parentName:"p"},"memcached"),"\u952e\u5230\u670d\u52a1\u5668\u7684\u6620\u5c04\u7b97\u6cd5\u7684."),Object(o.b)("p",null,"\u5728\u8fd9\u4e4b\u524d,\u5ba2\u6237\u7aef\u6620\u5c04\u952e\u5230\u670d\u52a1\u5668\u7684\u65b9\u6cd5\u7c7b\u4f3c\u4e8e:\n",Object(o.b)("inlineCode",{parentName:"p"}," server = serverlist[hash(key)%serverlist.length];"),"\n\u8fd9\u5c31\u610f\u5473\u7740,\u4e0d\u7ba1\u6211\u4eec\u4ece\u6c60\u4e2d\u589e\u52a0\u6216\u5220\u9664\u8282\u70b9,\u90fd\u4f1a\u5bfc\u81f4\u6240\u6709\u5df2\u7ecfhash\u7684\u503c\u4ece\u65b0hash\u5230\u4e0d\u540c\u7684\u8282\u70b9,\u8fd9\u4f1a\u5bfc\u81f4\u6240\u6709",Object(o.b)("inlineCode",{parentName:"p"},"memcached"),"\u7684\u6240\u6709\u7f13\u5b58\u5931\u6548."),Object(o.b)("p",null,"Ketama \u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u6765\u89e3\u51b3\u4e86\u8be5\u95ee\u9898:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6307\u5b9a\u7684\u4e00\u7ec4\u670d\u52a1(\u4f8b\u5982: 1.2.3.4:11211, 5.6.7.8:11211, 9.8.7.6:11211)"),Object(o.b)("li",{parentName:"ul"},"\u5c06\u6bcf\u4e2a\u670d\u52a1\u7684\u5b57\u7b26\u4e32\u90fdhash\u4e3a\u591a\u4e2a(100-200\u4e2a)\u65e0\u7b26\u53f7\u6574\u6570"),Object(o.b)("li",{parentName:"ul"},"\u6982\u5ff5\u4e0a,\u8fd9\u4e9b\u6570\u5b57\u662f\u653e\u7f6e\u5728\u4e00\u4e2a\u73af\u4e0a\u7684.(\u60f3\u8c61\u4e00\u4e2a\u65f6\u949f\u90a3\u6837,\u4ece 0 - 2^32 \u6b21\u65b9\u7684\u4e00\u4e2a\u73af)"),Object(o.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6570\u7ec4\u90fd\u5173\u8054\u5b83hash\u4e4b\u524d\u7684\u90a3\u4e2a\u670d\u52a1\u5668\u5730\u5740,\u56e0\u6b64,\u4e00\u4e2a\u670d\u52a1\u4f1a\u5728\u73af\u4e0a\u51fa\u73b0\u591a\u6b21.\u51fa\u73b0\u7684\u65b9\u5f0f\u4f1a\u4ee5\u4ed6\u4eechash\u540e\u7684\u6570\u5b57\u6765\u8868\u793a"),Object(o.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u5c06\u4e00\u4e2a\u952e\u6620\u5c04\u5230\u670d\u52a1\u5668,\u9996\u5148\u5c06\u952e\u503chash\u4e3a\u4e00\u4e2a\u65e0\u7b26\u53f7\u6574\u6570,\u7136\u540e\u5728\u73af\u4e0a\u627e\u5230\u4e0b\u4e00\u4e2a\u6700\u5927\u7684\u6570\u5b57.\u8be5\u670d\u52a1\u4f1a\u88ab\u9009\u62e9\u6765\u5b58\u653e\u8be5\u952e\u503c"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679chash\u7684\u952e\u503c\u63a5\u8fd12^32\u6b21\u65b9,\u90a3\u4e48\u53ef\u80fd\u5728\u73af\u4e0a\u6ca1\u6709\u6bd4\u8be5hash\u503c\u5927\u7684\u7684hash,\u6b64\u65f6\u8fd4\u56de\u73af\u4e0a\u7684\u7b2c\u4e00\u4e2a\u670d\u52a1.")),Object(o.b)("p",null,"\u8fd9\u6837\u5b9e\u73b0\u4ee5\u540e,\u5728\u8be5\u670d\u52a1\u5217\u8868\u4e0a\u8fdb\u884c\u6dfb\u52a0\u548c\u5220\u9664\u53ea\u4f1a\u5bf9\u4e00\u5c0f\u90e8\u5206\u7684\u952e\u503c\u6620\u5c04\u4ea7\u751f\u5f71\u54cd,\u56e0\u6b64\u53ea\u9700\u8981\u4ece\u65b0\u6620\u5c04\u4e00\u5c0f\u90e8\u5206\u503c."),Object(o.b)("p",null,"\u6b64\u5916,\u5982\u679c\u60f3\u8981\u63a7\u5236\u670d\u52a1\u5668\u7684\u6743\u91cd,\u5219\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u8be5\u670d\u52a1\u7684hash\u503c\u6570\u91cf\u6765\u5b9e\u73b0."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u539f\u6587")),Object(o.b)("p",null,"This was initially written to replace how our memcached clients mapped keys to servers."),Object(o.b)("p",null,"Previously, clients mapped keys->servers like this:\n",Object(o.b)("inlineCode",{parentName:"p"}," server = serverlist[hash(key)%serverlist.length];")),Object(o.b)("p",null,"This meant that whenever we added or removed servers from the pool, everything hashed to different servers, which effectively wiped the entire cache."),Object(o.b)("p",null,"Ketama solves this problem in the following way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Take your list of servers (eg: 1.2.3.4:11211, 5.6.7.8:11211, 9.8.7.6:11211)"),Object(o.b)("li",{parentName:"ul"},"Hash each server string to several (100-200) unsigned ints"),Object(o.b)("li",{parentName:"ul"},"Conceptually, these numbers are placed on a circle called the continuum. (imagine a clock face that goes from 0 to 2^32)"),Object(o.b)("li",{parentName:"ul"},"Each number links to the server it was hashed from, so servers appear at several points on the continuum, by each of the numbers they hashed to."),Object(o.b)("li",{parentName:"ul"},"To map a key->server, hash your key to a single unsigned int, and find the next biggest number on the continuum. The server linked to that number is the correct server for that key."),Object(o.b)("li",{parentName:"ul"},"If you hash your key to a value near 2^32 and there are no points on the continuum greater than your hash, return the first server in the continuum.")),Object(o.b)("p",null,"If you then add or remove a server from the list, only a small proportion of keys end up mapping to different servers."),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.audioscrobbler.net/development/ketama/"},"\u539f\u6587")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RJ/ketama/blob/master/java_ketama/SockIOPool.java"},"\u53c2\u8003Java\u5b9e\u73b0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Consistent_hashing"},"\u7ef4\u57fa\u767e\u79d1 Consistent hashing"))))}u.isMDXComponent=!0},1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);