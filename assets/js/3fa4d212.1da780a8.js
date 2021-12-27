"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49046],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51997:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],u={title:"Angular FAQ"},o=void 0,p={unversionedId:"web/framework/angular-faq",id:"web/framework/angular-faq",title:"Angular FAQ",description:"Multiple entry points / pages",source:"@site/notes/web/framework/angular-faq.md",sourceDirName:"web/framework",slug:"/web/framework/angular-faq",permalink:"/notes/web/framework/angular-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/angular-faq.md",tags:[],version:"current",frontMatter:{title:"Angular FAQ"},sidebar:"docs",previous:{title:"Angular Package Format",permalink:"/notes/web/framework/angular-apf"},next:{title:"Angular Version",permalink:"/notes/web/framework/angular-version"}},s=[{value:"Multiple entry points / pages",id:"multiple-entry-points--pages",children:[],level:2},{value:"\u6d4f\u89c8\u5668\u652f\u6301",id:"\u6d4f\u89c8\u5668\u652f\u6301",children:[],level:2},{value:"\u624b\u52a8\u6807\u8bc6\u53d1\u751f\u4e86\u53d8\u5316",id:"\u624b\u52a8\u6807\u8bc6\u53d1\u751f\u4e86\u53d8\u5316",children:[],level:2},{value:"ViewChild \u4e3a null/undefined",id:"viewchild-\u4e3a-nullundefined",children:[],level:2},{value:"\u52a8\u753b\u5728 Safari \u4e0b\u65e0\u6548",id:"\u52a8\u753b\u5728-safari-\u4e0b\u65e0\u6548",children:[],level:2},{value:"\u5982\u4f55\u5728 ios \u5f00\u53d1\u8c03\u8bd5",id:"\u5982\u4f55\u5728-ios-\u5f00\u53d1\u8c03\u8bd5",children:[],level:2},{value:"date pipe \u5728 ios/Safari \u4e0b\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c",id:"date-pipe-\u5728-iossafari-\u4e0b\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c",children:[],level:2},{value:"AoT \u65e0\u6cd5 Watch",id:"aot-\u65e0\u6cd5-watch",children:[],level:2},{value:"AoT \u5728\u9047\u5230 Sass \u51fa\u73b0\u627e\u4e0d\u5230\u8d44\u6e90\u7684\u60c5\u51b5",id:"aot-\u5728\u9047\u5230-sass-\u51fa\u73b0\u627e\u4e0d\u5230\u8d44\u6e90\u7684\u60c5\u51b5",children:[],level:2},{value:"AoT \u65e0\u6cd5\u5904\u7406 Router \u7684 loadChildren",id:"aot-\u65e0\u6cd5\u5904\u7406-router-\u7684-loadchildren",children:[],level:2},{value:"/deep/ \u88ab\u5e9f\u5f03",id:"deep-\u88ab\u5e9f\u5f03",children:[],level:2},{value:"scss \u5168\u5c40\u53d8\u91cf",id:"scss-\u5168\u5c40\u53d8\u91cf",children:[],level:2}],c={toc:s};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"multiple-entry-points--pages"},"Multiple entry points / pages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/angular/angular-cli/issues/1804"},"angular/angular-cli#1804")," Multiple Entrypoints, Main Files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/angular/angular-cli/issues/6428"},"angular/angular-cli#6428")," Multiple entry points with ng serve"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/angular/angular/issues/14745"},"angular/angular#14745")," Is there any way to use Angular2 in multi-page app instead SPA?"),(0,l.kt)("li",{parentName:"ul"},"ng6 \u540e .angular-cli.json \u88ab angular.json \u66ff\u4ee3")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ng serve = ng serve --app=0\nng serve --app=1\n")),(0,l.kt)("h2",{id:"\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://angular.io/guide/browser-support"},"Browser support"))),(0,l.kt)("h2",{id:"\u624b\u52a8\u6807\u8bc6\u53d1\u751f\u4e86\u53d8\u5316"},"\u624b\u52a8\u6807\u8bc6\u53d1\u751f\u4e86\u53d8\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"ChangeDetectorRef")),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u53d1\u751f\u4e86\u53d8\u5316\u4f46 angular \u672a\u68c0\u6d4b\u5230\u7684\u65f6\u5019, \u624b\u52a8\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"markForCheck"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u5728\u522b\u7684\u5730\u65b9\u505a\u4e86\u4e8b\u4ef6\u76d1\u542c\u5f71\u54cd\u7ed1\u5b9a\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u5bf9\u8c61\u4f7f\u7528\u7684 getter/setter, \u800c\u4e0d\u662f\u5c5e\u6027")))),(0,l.kt)("h2",{id:"viewchild-\u4e3a-nullundefined"},"ViewChild \u4e3a null/undefined"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u5185\u5bb9\u521d\u59cb\u5316\u540e\u624d\u4e0d\u4e3a undefined"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3a null, \u68c0\u6d4b\u662f\u5426\u6709 ngIf")),(0,l.kt)("h2",{id:"\u52a8\u753b\u5728-safari-\u4e0b\u65e0\u6548"},"\u52a8\u753b\u5728 Safari \u4e0b\u65e0\u6548"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 web-animate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"npm install --save web-animations-js")),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"polyfills.ts")," \u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"import 'web-animations-js'"))),(0,l.kt)("h2",{id:"\u5982\u4f55\u5728-ios-\u5f00\u53d1\u8c03\u8bd5"},"\u5982\u4f55\u5728 ios \u5f00\u53d1\u8c03\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"safari")," \u8fdb\u884c\u5f00\u53d1"),(0,l.kt)("li",{parentName:"ul"},"Safari \u7684\u6280\u672f\u9884\u89c8\u7248\u4e5f\u90fd\u53ef\u4ee5\u6a21\u62df\u8bbe\u5907\u548c\u5f00\u542f\u63a7\u5236\u53f0"),(0,l.kt)("li",{parentName:"ul"},"ios \u4e0a\u9ed8\u8ba4\u4e3a Safari \u6d4f\u89c8\u5668\u5185\u6838, \u56e0\u6b64\u5728\u6d4f\u89c8\u5668\u4e2d\u8c03\u8bd5\u548c\u5728\u771f\u673a\u8c03\u8bd5\u6ca1\u592a\u5927\u533a\u522b")),(0,l.kt)("h2",{id:"date-pipe-\u5728-iossafari-\u4e0b\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c"},"date pipe \u5728 ios/Safari \u4e0b\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/angular/angular/issues/7008"},"https://github.com/angular/angular/issues/7008")),(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e Safari \u5bf9\u65f6\u95f4\u683c\u5f0f\u7684\u8981\u6c42\u6bd4\u8f83\u4e25\u683c, \u4f8b\u5982 '2017-1-1' \u8fd9\u6837\u7684\u683c\u5f0f\u5728 Safari \u4e0b\u662f\u65e0\u6cd5\u6b63\u5e38\u5904\u7406\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"https://momentjs.com/"},"momentjs")," \u5b9e\u73b0\u4e00\u4e2a\u81ea\u5df1\u7684 date pipe"),(0,l.kt)("li",{parentName:"ul"},"\u6216\u8005\u5728\u4f20\u5165\u5230 date pipe \u524d\u786e\u4fdd date \u662f\u6b63\u786e\u7684\u683c\u5f0f")),(0,l.kt)("h2",{id:"aot-\u65e0\u6cd5-watch"},"AoT \u65e0\u6cd5 Watch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/angular/angular/issues/12867"},"#12867")),(0,l.kt)("li",{parentName:"ul"},"~\u53ea\u80fd\u662f\u5728\u6700\u7ec8\u53d1\u5e03\u6784\u5efa\u65f6\u4f7f\u7528 aot~"),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728\u53ef\u4ee5\u4e86")),(0,l.kt)("h2",{id:"aot-\u5728\u9047\u5230-sass-\u51fa\u73b0\u627e\u4e0d\u5230\u8d44\u6e90\u7684\u60c5\u51b5"},"AoT \u5728\u9047\u5230 Sass \u51fa\u73b0\u627e\u4e0d\u5230\u8d44\u6e90\u7684\u60c5\u51b5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/angular/angular/issues/11897"},"#11897")),(0,l.kt)("li",{parentName:"ul"},"AoT \u4e0d\u80fd\u4e0e SASS \u540c\u65f6\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 CSS + \u5b57\u4f53\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u5728\u5916\u90e8\u5f15\u5165")),(0,l.kt)("h2",{id:"aot-\u65e0\u6cd5\u5904\u7406-router-\u7684-loadchildren"},"AoT \u65e0\u6cd5\u5904\u7406 Router \u7684 loadChildren"),(0,l.kt)("p",null,"\u9700\u8981\u4f7f\u7528 AppModuleNgFactory, \u4f7f\u7528 AoT \u7f16\u8bd1\u51fa\u6765"),(0,l.kt)("h2",{id:"deep-\u88ab\u5e9f\u5f03"},"/deep/ \u88ab\u5e9f\u5f03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.chromestatus.com/features/4964279606312960"},"https://www.chromestatus.com/features/4964279606312960")),(0,l.kt)("li",{parentName:"ul"},"\u5728\u540e\u9762\u7248\u672c\u4f1a\u4e0d\u4ea7\u751f\u4efb\u4f55\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},">>>")),(0,l.kt)("li",{parentName:"ul"},"ng-deep")),(0,l.kt)("h2",{id:"scss-\u5168\u5c40\u53d8\u91cf"},"scss \u5168\u5c40\u53d8\u91cf"))}m.isMDXComponent=!0}}]);