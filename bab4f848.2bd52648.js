(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var l=n(0),r=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(n),j=l,m=o["".concat(a,".").concat(j)]||o[j]||O[j]||b;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,a=new Array(b);a[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var p=2;p<b;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},886:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var l=n(3),r=n(8),b=(n(0),n(1151)),a={id:"astrisk-deploy-mode-think",title:"Asterisk \u90e8\u7f72\u6a21\u5f0f\u601d\u8003",date:new Date("2020-01-19T00:00:00.000Z")},c={unversionedId:"howto/voip/astrisk-deploy-mode-think",id:"howto/voip/astrisk-deploy-mode-think",isDocsHomePage:!1,title:"Asterisk \u90e8\u7f72\u6a21\u5f0f\u601d\u8003",description:"\u5f53\u5c06 Asterisk \u5b9e\u9645\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u65f6\uff0c\u9700\u8981\u8003\u8651\u5982\u4f55\u8fdb\u884c\u90e8\u7f72\uff0c\u4e0d\u540c\u7684\u90e8\u7f72\u6a21\u5f0f\u662f\u5bf9\u4e0d\u540c VoIP \u534f\u8bae\u7684\u4e0d\u540c\u7ec4\u5408\u65b9\u5f0f\u3002",source:"@site/notes/howto/voip/astrisk-deploy-mode-think.md",slug:"/howto/voip/astrisk-deploy-mode-think",permalink:"/notes/howto/voip/astrisk-deploy-mode-think",editUrl:"https://github.com/wenerme/wener/edit/master/notes/howto/voip/astrisk-deploy-mode-think.md",version:"current",sidebar:"docs",previous:{title:"\u5982\u4f55\u57fa\u4e8e TINC \u5b9e\u73b0\u900f\u660e\u4ee3\u7406",permalink:"/notes/howto/network/tinc-transparency-proxy"},next:{title:"crontab",permalink:"/notes/ops/admin/crontab"}},i=[{value:"\u79c1\u7f51 SIP \u5355\u673a\u90e8\u7f72 - \u6700\u7b80\u573a\u666f",id:"\u79c1\u7f51-sip-\u5355\u673a\u90e8\u7f72---\u6700\u7b80\u573a\u666f",children:[{value:"\u5e26\u5bbd",id:"\u5e26\u5bbd",children:[]},{value:"\u5f55\u97f3\u6587\u4ef6",id:"\u5f55\u97f3\u6587\u4ef6",children:[]},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",children:[]},{value:"\u8f6c\u7801",id:"\u8f6c\u7801",children:[]}]},{value:"\u79c1\u7f51 \u7269\u7406\u7ebf\u8def \u5355\u673a\u90e8\u7f72 - \u5e38\u89c1\u573a\u666f",id:"\u79c1\u7f51-\u7269\u7406\u7ebf\u8def-\u5355\u673a\u90e8\u7f72---\u5e38\u89c1\u573a\u666f",children:[]},{value:"\u79c1\u7f51 \u7269\u7406\u7ebf\u8def \u96c6\u7fa4\u90e8\u7f72 - \u4e2d\u5927\u578b\u5e38\u89c1",id:"\u79c1\u7f51-\u7269\u7406\u7ebf\u8def-\u96c6\u7fa4\u90e8\u7f72---\u4e2d\u5927\u578b\u5e38\u89c1",children:[]},{value:"\u516c\u7f51\u8bbf\u95ee\u90e8\u7f72 - \u670d\u52a1\u5546\u573a\u666f",id:"\u516c\u7f51\u8bbf\u95ee\u90e8\u7f72---\u670d\u52a1\u5546\u573a\u666f",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5f53\u5c06 Asterisk \u5b9e\u9645\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u65f6\uff0c\u9700\u8981\u8003\u8651\u5982\u4f55\u8fdb\u884c\u90e8\u7f72\uff0c\u4e0d\u540c\u7684\u90e8\u7f72\u6a21\u5f0f\u662f\u5bf9\u4e0d\u540c VoIP \u534f\u8bae\u7684\u4e0d\u540c\u7ec4\u5408\u65b9\u5f0f\u3002"),Object(b.b)("p",null,"\u90e8\u7f72\u9700\u8981\u8003\u8651\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u4f7f\u7528\u60c5\u51b5\u548c\u5bf9\u4e0d\u540c\u8d44\u6e90\u7684\u4f9d\u8d56\u60c5\u51b5\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u8003\u91cf\u56e0\u7d20",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 SIP \u7ebf\u8def"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6570\u5b57\u7ebf\u8def"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6a21\u62df\u7ebf\u8def"),Object(b.b)("li",{parentName:"ul"},"\u662f\u5426\u90e8\u7f72\u591a\u8282\u70b9"))),Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8003\u91cf\u56e0\u7d20",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7 SIP \u8bdd\u673a\u4f7f\u7528"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6a21\u62df\u8bdd\u673a\u4f7f\u7528"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7\u684c\u9762 SIP \u5ba2\u6237\u7aef\u4f7f\u7528"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7\u79fb\u52a8\u7aef SIP \u4f7f\u7528"),Object(b.b)("li",{parentName:"ul"},"\u662f\u5426\u5141\u8bb8\u4e92\u8054\u7f51\u8bbf\u95ee"))),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u8d44\u6e90\u7684\u8003\u91cf\u56e0\u7d20",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5e26\u5bbd\u3001\u5ef6\u65f6"),Object(b.b)("li",{parentName:"ul"},"\u5f55\u97f3\u78c1\u76d8\u5b58\u50a8"),Object(b.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93")))),Object(b.b)("h2",{id:"\u79c1\u7f51-sip-\u5355\u673a\u90e8\u7f72---\u6700\u7b80\u573a\u666f"},"\u79c1\u7f51 SIP \u5355\u673a\u90e8\u7f72 - \u6700\u7b80\u573a\u666f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u9009\u62e9\u901a\u8fc7 SIP \u51fa\u5c40\u5165\u5c40"),Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u901a\u8fc7 SIP \u5ba2\u6237\u7aef\u5c40\u57df\u7f51\u8bbf\u95ee")),Object(b.b)("p",null,"\u8be5\u573a\u666f\u53ea\u9700\u8981\u5c06 Asterisk \u914d\u7f6e\u4e3a\u4e00\u4e2a SIP \u670d\u52a1\u7aef\uff0c\u5e76\u6ce8\u518c SIP \u7ebf\u8def\u8fdb\u884c\u51fa\u5c40\u3002\u90e8\u7f72\u8fd0\u7ef4\u90fd\u5341\u5206\u7b80\u5355\uff0c\u4f46\u56e0\u4e3a\u5355\u673a\uff0c\u80fd\u627f\u63a5\u7684\u5e76\u53d1\u6570\u6709\u6709\u4e0a\u7ebf\uff0c\u4f46\u73b0\u4ee3\u7684\u670d\u52a1\u5668\u7684 8C16G \u6027\u80fd\u5b8c\u5168\u80fd\u627f\u53d7\uff0c\u6027\u80fd\u74f6\u9888\u4e3b\u8981\u6765\u81ea\u4e8e"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6570\u636e\u65e5\u5fd7 - cel\u3001cdr"),Object(b.b)("li",{parentName:"ul"},"\u5f55\u97f3\u6587\u4ef6")),Object(b.b)("h3",{id:"\u5e26\u5bbd"},"\u5e26\u5bbd"),Object(b.b)("p",null,"\u56e0\u4e3a\u73b0\u5728\u7684 SIP \u7f16\u7801\u7801\u7387\u57fa\u672c\u4e0d\u4f1a\u592a\u9ad8\uff0c\u5c40\u57df\u7f51\u7684\u5343\u5146\u7f51\u5361\u5373\u53ef\u627f\u53d7\u81f3\u5c11 100+ \u7684\u5e76\u53d1\uff0c\u7eaf\u8bed\u97f3\uff0c\u5982\u679c\u6d89\u53ca\u5230\u89c6\u9891\uff0c\u90a3\u4e48\u8ba1\u7b97\u903b\u8f91\u4f1a\u6709\u6240\u4e0d\u540c\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"ulaw \u548c alow \u4e3a\u5e38\u89c1\u7684 VoIP \u7f16\u7801 - \u7801\u7387\u4e3a ",Object(b.b)("strong",{parentName:"li"},"8Kbps")),Object(b.b)("li",{parentName:"ul"},"Opus \u4e3a\u76f8\u5bf9\u73b0\u4ee3\u5316\u7684\u7f16\u7801 - \u7801\u7387\u8303\u56f4\u4e3a ",Object(b.b)("strong",{parentName:"li"},"6Kbps")," - ",Object(b.b)("strong",{parentName:"li"},"510Kbps")),Object(b.b)("li",{parentName:"ul"},"H.263 \u662f\u6bd4\u8f83\u8001\u7684\u89c6\u9891\u7f16\u7801 - \u7801\u7387\u4e3a ",Object(b.b)("strong",{parentName:"li"},"90Kbps"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\ud83d\udca1: \u89c6\u9891\u7f16\u7801\u4e3b\u8981\u4e0e\u671f\u671b\u7684\u6e05\u6670\u5ea6\u6709\u5173\uff0c\u56e0\u6b64\u5982\u679c\u9700\u8981\u89c6\u9891\u6700\u597d\u989d\u5916\u518d\u8fdb\u884c\u8bc4\u4f30\u3002")),Object(b.b)("p",null,"Opus \u6309\u7167\u6700\u9ad8\u7801\u7387\u8ba1\u7b97\uff0c ",Object(b.b)("inlineCode",{parentName:"p"},"510Kbps")," \u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},"64KB/s"),"\uff0c10M \u5e26\u5bbd\u80fd\u627f\u53d7 16 \u8def\u5e76\u53d1\uff0c100M \u80fd\u652f\u6301 160 \u8def\u5e76\u53d1\u3002\u56e0\u4e3a\u51fa\u5c40\u4e5f\u4f7f\u7528 SIP\uff0c\u56e0\u6b64\u9700\u8981\u8003\u91cf WAN \u53e3\u5e26\u5bbd\uff0c\u76ee\u524d\u5bb6\u7528\u5e26\u5bbd 100M+ \u4f01\u4e1a\u5e26\u5bbd 500M+\uff0c\u56e0\u6b64\u652f\u6301 200 \u8def\u5e76\u53d1\u51fa\u5c40\u662f\u6ca1\u95ee\u9898\u7684\u3002\u6309\u7167\u4f01\u4e1a\u4e00\u822c\u4f7f\u7528\u9891\u7387\uff0c\u6700\u9ad8\u5cf0\u53ef\u80fd\u662f\u603b\u5750\u5e2d\u6570\u7684 50% - 30% - 10%\uff0c\u4e5f\u5c31\u662f\u81f3\u5c11\u80fd\u652f\u6301\u5230 ",Object(b.b)("strong",{parentName:"p"},"500")," \u4eba/\u5206\u673a\u3002"),Object(b.b)("p",null,"\u6309\u7167 500 \u5206\u673a\uff0c200 \u5e76\u53d1\u8ba1\u7b97\uff0c\u5bf9\u670d\u52a1\u5668\u7684\u8981\u6c42\u53ef\u80fd\u4f1a\u8f6c\u53d8\u4e3a CPU \u548c\u78c1\u76d8\u5bb9\u91cf\u7684\u8981\u6c42\u3002"),Object(b.b)("h3",{id:"\u5f55\u97f3\u6587\u4ef6"},"\u5f55\u97f3\u6587\u4ef6"),Object(b.b)("p",null,"\u5f55\u97f3\u6587\u4ef6\u6309\u7167 16K/s \u8ba1\u7b97\uff0c200 \u5e76\u53d1\u5219\u4e3a 3.2M/s\u3002\u6309\u7167\u5e73\u5747\u6bcf\u5206\u673a\u6bcf\u5929\u901a\u8bdd 5 \u5c0f\u65f6\u8ba1\u7b97\uff0c\u5219\u6bcf\u5929\u751f\u6210\u7684\u5f55\u97f3\u6587\u4ef6\u4e3a ",Object(b.b)("strong",{parentName:"p"},"57.6G"),"\uff0c\u81f3\u5c11\u9700\u8981\u6bcf\u5929\u5bf9\u5f55\u97f3\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\u5f52\u6863\u3002\u56e0\u6b64\u9700\u8981\u989d\u5916\u90e8\u7f72 OSS \u5b58\u50a8\u670d\u52a1\u6765\u5904\u7406\u5f55\u97f3\u6587\u4ef6\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\ud83d\udca1\u7a7a\u767d\u5f55\u97f3\u6587\u4ef6"),Object(b.b)("ol",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ol"},"wav \u7a7a\u767d\u6587\u4ef6\u4e3a 44 byte"),Object(b.b)("li",{parentName:"ol"},"opus \u7a7a\u767d\u6587\u4ef6\u4e3a 872"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u7a7a\u767d\u6587\u4ef6\nfind . -size 44c -delete\n# \u65f6\u95f4\u8303\u56f4\nfind . -type f -newermt 2017-9-28 ! -newermt 2017-9-29\n# 15 \u5206\u949f\u524d\u5230\u73b0\u5728\nfind . -type f -mmin -15\n# \u5220\u9664\u8fd9\u4e4b\u524d\u7684\u6570\u636e\nfind . -type f ! -newermt 2017-9-29 -delete\n")),Object(b.b)("h3",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),Object(b.b)("p",null,"\u5982\u679c\u670d\u52a1\u7aef\u5f00\u542f\u4e86 cel \u548c cdr\uff0c\u90a3\u4e48\u6bcf\u6b21\u901a\u8bdd\u81f3\u5c11\u90fd\u4f1a\u4ea7\u751f\u7ea6 10 \u6761\u65e5\u5fd7\uff0c\u5982\u679c\u5b9e\u73b0\u4e86\u81ea\u5b9a\u4e49\u7684\u4e8b\u4ef6\u5904\u7406\uff0c\u8bb0\u5f55\u65e5\u5fd7\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u4e14\u5206\u6790\u5904\u7406\u8d77\u6765\u4e5f\u66f4\u52a0\u65b9\u4fbf\uff0c\u4f46\u5e26\u6765\u7684\u95ee\u9898\u662f\u5b58\u50a8\u91cf\u548c DB \u538b\u529b\u3002"),Object(b.b)("p",null,"\u6309\u7167 500 \u5206\u673a\uff0c200 \u5e76\u53d1\u8ba1\u7b97\uff0c\u6309\u7167\u5e73\u5747\u6bcf\u5206\u673a\u6bcf\u4e09\u5206\u949f\u4e00\u901a\u7535\u8bdd\uff0c\u4e00\u5929\u6309\u7167 5 \u5c0f\u65f6\u4f30\u8ba1\uff0c\u5219\u4ea7\u751f\u7684\u65e5\u5fd7\u91cf\u81f3\u5c11 20\u4e07 \u6761\uff0c\u4e14\u548c\u914d\u7f6e\u7684\u5206\u673a\u5904\u7406\u903b\u8f91\u975e\u5e38\u76f8\u5173\u76f8\u5173\uff0c\u56e0\u6b64\u5bf9\u4e8e DB \u6765\u8bf4\uff0c\u4e5f\u9700\u8981 2-3 \u5929\u8fdb\u884c\u4e00\u6b21\u5f52\u6863\u4ee5\u4fdd\u8bc1 DB \u7684\u63d2\u5165\u6027\u80fd\u548c\u78c1\u76d8\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u56e0\u6b64\u8fd9\u6837\u7684\u573a\u666f\u4e0b\u4e5f\u53ef\u80fd\u9700\u8981\u90e8\u7f72\u989d\u5916\u7684\u5206\u6790\u578b\u6570\u636e\u5e93\u3002"),Object(b.b)("h3",{id:"\u8f6c\u7801"},"\u8f6c\u7801"),Object(b.b)("p",null,"\u5f53\u51fa\u5c40\u548c\u5165\u5c40\u7f16\u7801\u4e0d\u540c\u65f6\uff0c\u5982\u679c\u7f16\u7801\u662f\u88ab\u5141\u8bb8\u7684\uff0c\u90a3\u4e48\u670d\u52a1\u7aef\u4f1a\u8fdb\u884c\u8f6c\u7801\u64cd\u4f5c\uff0c\u8fc7\u591a\u7684\u5206\u673a\u8fdb\u884c\u8f6c\u7801\u5bf9 CPU \u7684\u8981\u6c42\u4f1a\u975e\u5e38\u9ad8\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u901a\u8bdd\u7684\u5b9e\u65f6\u6027\u3002\u5efa\u8bae\u5c3d\u91cf\u914d\u7f6e\u4e3a\u7cbe\u5fc3\u7b5b\u9009\u540e\u7684\u7f16\u7801\uff0c\u914d\u5408\u5ba2\u6237\u7aef\u9009\u62e9\u5408\u9002\u7f16\u7801\u4ee5\u907f\u514d\u670d\u52a1\u7aef\u8f6c\u7801\u3002"),Object(b.b)("p",null,"\u6b64\u5916\u7b49\u5f85\u97f3\u548c\u64ad\u653e\u7684\u5f55\u97f3\u6587\u4ef6\u4e5f\u9488\u5bf9\u6bcf\u4e2a\u7b5b\u9009\u540e\u7684\u7c7b\u578b\u8fdb\u884c\u9884\u5148\u8f6c\u7801\u4e00\u4efd\uff0c\u8fd9\u6837\u5728\u64ad\u653e\u5f55\u97f3\u65f6\u670d\u52a1\u7aef\u624d\u4e0d\u4f1a\u8fdb\u884c\u989d\u5916\u7684\u64cd\u4f5c\u3002"),Object(b.b)("h2",{id:"\u79c1\u7f51-\u7269\u7406\u7ebf\u8def-\u5355\u673a\u90e8\u7f72---\u5e38\u89c1\u573a\u666f"},"\u79c1\u7f51 \u7269\u7406\u7ebf\u8def \u5355\u673a\u90e8\u7f72 - \u5e38\u89c1\u573a\u666f"),Object(b.b)("p",null,"\u901a\u5e38\u4f01\u4e1a\u53ef\u80fd\u90fd\u4f1a\u7533\u8bf7\u4e00\u6761\u6570\u5b57\u7535\u8bdd\u7ebf\u8def\uff0c\u4e00\u822c\u4e3a 30B+D - \u5373 30 \u4e2a\u5e76\u53d1\uff0c\u4e00\u822c\u5305\u542b 200 \u4e2a\u53f7\u7801\u3002\u5f53\u53ea\u6709 1-2 \u6761\u6570\u5b57\u7ebf\u8def\u65f6\uff0c\u9009\u62e9\u4e00\u5f20\u6570\u5b57\u7ebf\u8def\u8bed\u97f3\u5361\u5373\u53ef\u652f\u6301\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\u8bed\u97f3\u5361\u548c\u6570\u5b57\u7ebf\u8def\u4e5f\u4f1a\u5bf9\u7cfb\u7edf\u6709\u4e00\u5b9a\u8d44\u6e90\u5360\u7528\uff0c\u56e0\u4e3a\u6ca1\u6709\u505a\u8fc7\u5177\u4f53\u8bc4\u4f30\uff0c\u4f46\u662f\u9700\u8981\u6309\u7167 SIP \u60c5\u51b5\u7684 30% \u8fdb\u884c\u9884\u7559\u3002"),Object(b.b)("p",null,"\u5982\u679c\u4e0d\u662f\u4f7f\u7528\u6570\u5b57\u7ebf\u8def\uff0c\u800c\u662f\u4f7f\u7528\u5df2\u6709\u7684\u6a21\u62df\u7ebf\u8def\uff0c\u90a3\u4e00\u822c\u53ef\u80fd\u662f\u76f8\u5bf9\u5c0f\u578b\u7684\u529e\u516c\u5e38\u89c1\uff0c\u5e38\u7528\u7684\u677f\u5361\u5355\u5361\u652f\u6301 8 \u8def\uff0c\u4e00\u822c\u6a21\u62df\u7ebf\u8def\u7684\u5361\u4f1a\u6709 ",Object(b.b)("strong",{parentName:"p"},"\u53d1\u70ed\u95ee\u9898")," \u56e0\u6b64\u4e5f\u4e0d\u5efa\u8bae\u5355\u673a\u63d2\u5165\u8fc7\u591a\u7684\u6a21\u62df\u5361\u3002\u6700\u597d 2 \u5f20 16 \u8def\u5373\u53ef\u3002"),Object(b.b)("p",null,"\u4f7f\u7528\u7269\u7406\u7ebf\u8def\uff0c\u914d\u7f6e DAHDi \u901a\u9053\uff0c\u9700\u8981\u6ce8\u610f\u7cfb\u7edf\u8981\u8fdb\u884c DID/CID \u7684\u7ba1\u7406\uff0c\u5426\u4fa7\u51fa\u5c40\u90fd\u662f\u9ed8\u8ba4\u7684\u53f7\u7801\uff0c\u9700\u8981\u5c06\u5b9e\u9645\u7684\u53f7\u7801\u5bf9\u5e94\u5230\u5bf9\u5e94 span \u7684\u5177\u4f53\u901a\u9053\u4e0a\uff0c\u5728\u62e8\u53f7\u524d\u5c06\u9700\u8981\u7684\u4e3b\u53eb\u53f7\u6620\u5c04\u4e3a span \u548c channel\u3002"),Object(b.b)("p",null,"\u5982\u679c\u662f\u4f7f\u7528\u6a21\u62df\u7ebf\u8def\uff0c\u53ef\u80fd\u5ba2\u6237\u7aef\u4e5f\u4f1a\u4f7f\u7528\u6a21\u62df\u8bdd\u673a\uff0c\u90a3\u4e48\u80fd\u652f\u6301\u7684\u5165\u5c40\u7ebf\u8def\u4e5f\u4f1a\u964d\u4f4e\uff0c\u5982\u679c\u677f\u5361\u9009\u62e9 4 FXO/4 FXS\uff0c\u5219\u652f\u6301 4 \u5750\u5e2d 4 \u51fa\u5c40\u7ebf\u8def\u3002\u6a21\u62df\u8bdd\u673a\u7275\u6d89\u5230\u989d\u5916\u7684\u5e03\u7ebf\uff0c\u4f1a\u76f8\u5bf9\u9ebb\u70e6\uff0c\u9700\u8981\u63d0\u524d\u8fdb\u884c\u89c4\u5212\u5e03\u5c40\uff0c\u957f\u671f\u6765\u770b\u9700\u8981\u8fdb\u884c\u7ef4\u62a4\u3002\u56e0\u6b64\u5c3d\u53ef\u80fd\u9009\u62e9\u6570\u5b57\u8bdd\u673a\u3002"),Object(b.b)("h2",{id:"\u79c1\u7f51-\u7269\u7406\u7ebf\u8def-\u96c6\u7fa4\u90e8\u7f72---\u4e2d\u5927\u578b\u5e38\u89c1"},"\u79c1\u7f51 \u7269\u7406\u7ebf\u8def \u96c6\u7fa4\u90e8\u7f72 - \u4e2d\u5927\u578b\u5e38\u89c1"),Object(b.b)("p",null,"\u5f53\u6709\u591a\u4e2a\u529e\u516c\u5730\u70b9\uff0c\u591a\u4e2a\u7ebf\u8def\uff0c\u5e0c\u671b\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u7ef4\u62a4\uff0c\u5e0c\u671b\u7ebf\u8def\u5171\u4eab\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u90e8\u7f72\u591a\u4e2a\u670d\u52a1\u7aef\u5b9e\u4f8b\uff0c\u6b64\u65f6\u7684\u90e8\u7f72\u6a21\u5f0f\u9700\u8981\u8fdb\u884c\u66f4\u591a\u7684\u8003\u8651\u3002"),Object(b.b)("p",null,"Asterisk \u652f\u6301 IAX2 \u534f\u8bae\uff0cIAX \u4e3a Internal Asterisk eXchange\uff0c\u5373 Asterisk \u5185\u90e8\u4ea4\u6362\u534f\u8bae\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u4e2d\u5fc3\u5316\u8bbf\u95ee - \u66b4\u9732 IAX2 \u51fa\u5c40")),Object(b.b)("p",null,"\u591a\u5b9e\u4f8b\u90e8\u7f72\u65f6\u53ef\u4ee5\u628a\u6bcf\u4e2a\u7269\u7406\u7ebf\u8def\u8282\u70b9\u66b4\u9732\u4e3a\u4e00\u4e2a IAX2 \u7684\u51fa\u5c40\u7ebf\u8def\uff0c\u5ba2\u6237\u7aef\u6ce8\u518c\u5230\u4e2d\u5fc3\u670d\u52a1\u5668\u4e0a\uff0c\u4e2d\u5fc3\u670d\u52a1\u5668\u901a\u8fc7 IAX2 \u4e0e\u5b9e\u9645\u7ebf\u8def\u8fdb\u884c\u901a\u4fe1\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7edf\u4e00\u7ba1\u7406\u7528\u6237\u6ce8\u518c"),Object(b.b)("li",{parentName:"ul"},"\u5355\u673a\u6570\u636e\u5e93"),Object(b.b)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u7ef4\u62a4 - \u51fa\u5c40\u7ebf\u8def\u8282\u70b9\u76f8\u5bf9\u9700\u8981\u7684\u7ef4\u62a4\u5185\u5bb9\u8f83\u5c11"))),Object(b.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u8bbf\u95ee\u9700\u8981\u5148\u901a\u5411\u4e2d\u5fc3\u8282\u70b9 - \u53ef\u80fd\u6d89\u53ca\u8de8\u7f51\u7edc\u8bbf\u95ee"),Object(b.b)("li",{parentName:"ul"},"\u4e2d\u5fc3\u670d\u52a1\u5668\u6027\u80fd\u662f\u74f6\u9888 - \u5bf9\u4e2d\u5fc3\u670d\u52a1\u5668\u6027\u80fd\u8981\u6c42\u66f4\u9ad8")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u53bb\u5fc3\u5316\u8bbf\u95ee - \u66b4\u9732 SIP \u51fa\u5c40")),Object(b.b)("p",null,"\u6bcf\u4e2a\u5b9e\u4f8b\u540c\u7b49\u5bf9\u5f85\uff0c\u6240\u6709\u8282\u70b9\u8bbf\u95ee\u76f8\u540c\u7684\u6570\u636e\u5e93\uff0cDNS \u8d1f\u8f7d\u5230\u6700\u8fd1\u7684\u670d\u52a1\u7aef IP\uff0c\u8bdd\u673a\u5c31\u8fd1\u6ce8\u518c\u3002\u6bcf\u4e2a\u8282\u70b9\u7684\u51fa\u5c40\u7ebf\u8def\u66b4\u9732\u4e3a SIP\uff0c\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u62e8\u53f7\u65f6\uff0c\u670d\u52a1\u7aef\u547c\u53eb\u5bf9\u5e94\u7684 SIP \u670d\u52a1\u8282\u70b9\uff0c\u5b9e\u73b0\u76f4\u8054\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u80fd\u652f\u6301\u66f4\u5927\u89c4\u6a21"),Object(b.b)("li",{parentName:"ul"},"\u80fd\u591f\u5b9e\u73b0\u5bb9\u707e"),Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u901a\u8bdd\u76f4\u8fde - \u66f4\u597d\u7684\u5b9e\u65f6\u6027"))),Object(b.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5bf9\u6570\u636e\u5e93\u6027\u80fd\u8981\u6c42\u66f4\u9ad8 - \u6700\u597d\u662f\u5206\u5e03\u5f0f\u6570\u636e\u5e93 - \u53ef\u80fd\u4f1a\u6709\u7f51\u7edc\u5e26\u6765\u7684\u5ef6\u65f6"),Object(b.b)("li",{parentName:"ul"},"\u5fc5\u987b\u9700\u8981\u5206\u79bb\u65e5\u5fd7\u5b58\u50a8 - \u6b64\u65f6\u4e0d\u5efa\u8bae\u6240\u6709\u65e5\u5fd7\u8fd8\u5b58 DB"),Object(b.b)("li",{parentName:"ul"},"\u9700\u8981\u66f4\u591a\u7684\u7ef4\u62a4\u5de5\u4f5c - \u90e8\u7f72\u7ed3\u6784\u66f4\u52a0\u590d\u6742")))),Object(b.b)("h2",{id:"\u516c\u7f51\u8bbf\u95ee\u90e8\u7f72---\u670d\u52a1\u5546\u573a\u666f"},"\u516c\u7f51\u8bbf\u95ee\u90e8\u7f72 - \u670d\u52a1\u5546\u573a\u666f"),Object(b.b)("p",null,"\u516c\u7f51\u8bbf\u95ee\u4e0e\u79c1\u7f51\u8bbf\u95ee\u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8e NAT \u548c\u8bbf\u95ee\u65b9\u5f0f\uff0c\u79c1\u7f51\u53ef\u4ee5\u4f7f\u7528 IP \u76f4\u63a5\u8fde\u63a5\uff0c\u516c\u7f51\u4e00\u822c\u4f7f\u7528\u57df\u540d SVR \u8bb0\u5f55\u8fdb\u884c\u8fde\u63a5\u3002\u516c\u7f51 NAT \u9700\u8981\u4f9d\u8d56 STURN \u670d\u52a1\u5668\uff0c\u5efa\u8bae\u90e8\u7f72\u81ea\u5df1\u7684 STURN \u670d\u52a1\u5668\uff0c\u4f7f\u7528\u56fd\u5916\u7684\u670d\u52a1\u8054\u901a\u6027\u4f1a\u6709\u5f71\u54cd\u3002\u9700\u8981\u5141\u8bb8\u516c\u7f51\u8bbf\u95ee\u65f6\u66b4\u9732\u670d\u52a1\u7684\u670d\u52a1\u5668\u5c3d\u91cf\u4e0d\u8981\u5728\u4e0a\u5c42\u505a\u8fc7\u591a\u7684\u8def\u7531\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u6709\u7a7f\u900f\u7684\u95ee\u9898\u3002"),Object(b.b)("p",null,"\u6b64\u5916\u516c\u7f51\u90e8\u7f72\u9700\u8981\u5bf9\u7ec8\u7aef\u505a\u66f4\u591a\u914d\u7f6e\uff0cpjsip \u7684 endpoint \u914d\u7f6e\u3002"),Object(b.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(b.b)("p",null,"\u90e8\u7f72\u603b\u7684\u6765\u8bf4\u662f\u6bcf\u4e00\u5c42\u76f8\u4e92\u4e4b\u95f4\u4f7f\u7528\u4e0d\u540c\u7684\u7ec4\u5408\u65b9\u5f0f\uff0c\u9009\u62e9\u7684\u7ec4\u5408\u65b9\u5f0f\u4e0d\u540c\uff0c\u90a3\u4e48\u5b9e\u9645\u4f7f\u7528\u4e5f\u4f1a\u4e0d\u5c3d\u76f8\u540c\u3002"),Object(b.b)("p",null,"\u5c1d\u8bd5\u6392\u5217\u7ec4\u5408\u7684\u95ee\u9898\u548c\u7b54\u6848"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u600e\u4e48\u4f7f\u7528\u7ebf\u8def - \u547c\u51fa/\u63a5\u5165\u7535\u8bdd"),Object(b.b)("li",{parentName:"ul"},"\u591a\u5c11\u6761\u7ebf\u8def"),Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u600e\u4e48\u63a5\u5165"),Object(b.b)("li",{parentName:"ul"},"\u600e\u4e48\u5b58\u50a8 - \u5f55\u97f3\u3001\u6570\u636e\u5e93"),Object(b.b)("li",{parentName:"ul"},"\u600e\u4e48\u8fd0\u7ef4\u7ba1\u7406")),Object(b.b)("p",null,"\u5f53\u771f\u6b63\u9700\u8981\u81ea\u884c\u90e8\u7f72\u7684\u65f6\u5019\u591a\u601d\u8003\u8fd9\u4e9b\u95ee\u9898\u3002"))}u.isMDXComponent=!0}}]);