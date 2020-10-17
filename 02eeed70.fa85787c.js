(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{586:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(7),i=(n(0),n(586)),a={id:"riot",title:"Riot"},c={unversionedId:"web/framework/riot",id:"web/framework/riot",isDocsHomePage:!1,title:"Riot",description:"riotjs",source:"@site/notes/web/framework/riot.md",slug:"/web/framework/riot",permalink:"/notes/web/framework/riot",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/riot.md",version:"current",sidebar:"docs",previous:{title:"Angular",permalink:"/notes/web/framework/angular"},next:{title:"Prisma",permalink:"/notes/web/framework/prisma"}},s=[{value:"Tips",id:"tips",children:[]},{value:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528",id:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"riotjs"},"riotjs"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("h2",{id:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528"},"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var tags = `\n<pusher>\n  <h3>{ message }</h3>\n  <ul>\n    <li each={ techs }>{ name }</li>\n  </ul>\n\n  <script>\n    this.message = 'Hello, Riot!'\n    this.techs = [\n      { name: 'HTML' },\n      { name: 'JavaScript' },\n      { name: 'CSS' }\n    ]\n  <\/script>\n\n  <style scoped>\n    :scope { font-size: 2rem }\n    h3 { color: #444 }\n    ul { color: #999 }\n  </style>\n</pusher>\n`\n\nif(!window.jQuery){\n  document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://code.jquery.com/jquery-2.2.3.js',onload: setup}));\n}else {\n  setup()\n}\n\nfunction setup(){\n  $.getScript('https://cdn.jsdelivr.net/riot/2.3/riot+compiler.min.js')\n  .done(()=>$('pusher, script[type=\"riot/tag\"]').remove())\n  .done(()=>$('body').append($('<script type=\"riot/tag\"><\/script>').text(tags)).append($(`<pusher></pusher>`)))\n  .done(()=>riot.mount('pusher'))\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- mount point --\x3e\n<my-tag></my-tag>\n\n\x3c!-- inlined tag definition --\x3e\n<script type="riot/tag">\n  <my-tag>\n    <h3>Tag layout</h3>\n    <inner-tag />\n  </my-tag>\n<\/script>\n\n\x3c!-- <inner-tag/> is specified on external file --\x3e\n<script src="path/to/javascript/with-tags.js" type="riot/tag"><\/script>\n\n\x3c!-- include riot.js and the compiler --\x3e\n<script src="https://cdn.jsdelivr.net/riot/2.6/riot+compiler.min.js"><\/script>\n\n\n\x3c!-- mount normally --\x3e\n<script>\nriot.compile(my_tag.innerHTML)\nriot.mount(\'*\')\n<\/script>\n')))}l.isMDXComponent=!0}}]);