"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25509],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=l(t),m=o,f=y["".concat(c,".").concat(m)]||y[m]||u[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},17538:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return y}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),s=["components"],i={title:"TypeScript \u7c7b\u578b\u5b9a\u4e49"},c=void 0,l={unversionedId:"web/script/typescript-typing",id:"web/script/typescript-typing",isDocsHomePage:!1,title:"TypeScript \u7c7b\u578b\u5b9a\u4e49",description:"maybeFunction",source:"@site/notes/web/script/typescript-typing.md",sourceDirName:"web/script",slug:"/web/script/typescript-typing",permalink:"/notes/web/script/typescript-typing",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/script/typescript-typing.md",version:"current",frontMatter:{title:"TypeScript \u7c7b\u578b\u5b9a\u4e49"},sidebar:"docs",previous:{title:"JSON Schema",permalink:"/notes/web/script/jsonschema"},next:{title:"HTML",permalink:"/notes/web/spec/html"}},p=[{value:"maybeFunction",id:"maybefunction",children:[]},{value:"keyof \u5f3a\u5236\u4e3a string \u7c7b\u578b",id:"keyof-\u5f3a\u5236\u4e3a-string-\u7c7b\u578b",children:[]},{value:"Example",id:"example",children:[]},{value:"\u5141\u8bb8\u5bfc\u5165\u5176\u4ed6\u6587\u4ef6",id:"\u5141\u8bb8\u5bfc\u5165\u5176\u4ed6\u6587\u4ef6",children:[]}],u={toc:p};function y(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"maybefunction"},"maybeFunction"),(0,a.kt)("p",null,"T \u9700\u8981\u68c0\u6d4b\u662f\u5426\u4e3a\u51fd\u6570\uff0c\u5426\u5219\u76f4\u63a5 typeof \u65e0\u6cd5\u533a\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// eslint-disable-next-line @typescript-eslint/ban-types\nexport type MaybeFunction<T, A extends any[]> = T extends Function ? (...args: A) => T : T;\n\nexport function maybeFunction<T, A extends any[]>(v: MaybeFunction<T, A>, ...args: A): T {\n  return typeof v === 'function' ? v(...args) : v;\n}\n")),(0,a.kt)("h2",{id:"keyof-\u5f3a\u5236\u4e3a-string-\u7c7b\u578b"},"keyof \u5f3a\u5236\u4e3a string \u7c7b\u578b"),(0,a.kt)("p",null,"\u9ed8\u8ba4 keyof \u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"string|number|symbol")," \u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u53d6 string\ntype StringKeys = Extract<keyof AbstractModel, string>;\n// \u5f3a\u5236 string\ntype Keys = keyof AbstractModel & string;\n// \u5b9a\u4e49\u5de5\u5177\u7c7b\u578b\ntype KeyOf<T extends object> = Extract<keyof T, string>;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/// 1\nconst values = ['A', 'B'] as const;\ntype ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;\n\ntype Foo = ElementType<typeof values>; // this is correctly inferred as literal \"A\" | \"B\"\n\n/// 2\n\nexport const type = <const>['room', 'room_with_gifter', 'user_send'];\n\nexport interface Activity {\n  id?: string;\n  type: typeof type[number];\n}\n\n/// 3\nconst pages = <const>[\n  {\n    label: 'homepage',\n    url: '',\n  },\n  {\n    label: 'team',\n    url: '',\n  },\n];\n\n// resulting signature = function getUrl(label: \"homepage\" | \"team\"): void\nfunction getUrl(label: typeof pages[number]['label']) {}\n\ngetUrl('homepage'); // ok\ngetUrl('team'); // ok\ngetUrl('bad'); // wrong\n\n// stub \u7c7b\u578b\n\ninterface ExampleType {\n  [key: string]: string | (() => string);\n}\n\nconst specific = <T>() => <U extends T>(argument: U) => argument;\nconst testObj = specific<ExampleType>()({\n  firstName: 'Peter',\n  lastName: 'Parker',\n  gender: 'male',\n  getFullName: () => 'I am Peter Parker',\n});\nconsole.log(testObj.getFullName()); // this works\n")),(0,a.kt)("h2",{id:"\u5141\u8bb8\u5bfc\u5165\u5176\u4ed6\u6587\u4ef6"},"\u5141\u8bb8\u5bfc\u5165\u5176\u4ed6\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare module '*.module.css' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.module.sass' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.module.scss' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.mdx' {\n  let MDXComponent: (props) => JSX.Element;\n  export default MDXComponent;\n}\n")))}y.isMDXComponent=!0}}]);