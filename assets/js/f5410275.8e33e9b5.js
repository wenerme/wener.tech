"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57978],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83923:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"dexie"},s=void 0,c={unversionedId:"web/script/lib/dexie",id:"web/script/lib/dexie",title:"dexie",description:"- dexie-react-hooks",source:"@site/notes/web/script/lib/dexie.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/dexie",permalink:"/notes/web/script/lib/dexie",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/script/lib/dexie.md",tags:[],version:"current",frontMatter:{title:"dexie"},sidebar:"docs",previous:{title:"DayJS",permalink:"/notes/web/script/lib/dayjs"},next:{title:"final-form",permalink:"/notes/web/script/lib/final-form"}},p={},u=[{value:"Notes",id:"notes",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dexie-react-hooks",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dexie.org/docs/dexie-react-hooks/useLiveQuery()"},"useLiveQuery"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f1a observe \u6570\u636e\u53d8\u5316"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e liveQuery \u65b9\u6cd5"))))),(0,i.kt)("li",{parentName:"ul"},"dexie-observable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"li"},"db.on('changes')")))),(0,i.kt)("li",{parentName:"ul"},"dexie-export-import",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u3001\u5bfc\u51fa IndexedDB <-> Blob"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dexie.org/docs/DerivedWork"},"https://dexie.org/docs/DerivedWork"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm add dexie dexie-react-hooks\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"schema",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"++")," \u81ea\u589e\u957f\u4e3b\u952e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&")," \u552f\u4e00\u7d22\u5f15"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u591a\u503c\u7d22\u5f15 - \u6570\u7ec4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[A+B]")," \u7ec4\u5408\u7d22\u5f15\u6216\u4e3b\u952e"))),(0,i.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u6570\u636e\u7c7b\u578b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string, number, Date, Array"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u7d22\u5f15 boolean, null, undefined")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var db = new Dexie('MyDatabase');\ndb.version(1).stores({\n  friends: '++id,name,shoeSize', // \u81ea\u589e\u957f PK id\n  pets: 'id, name, kind', // \u975e\u81ea\u589e\u957f PK id\n  cars: '++, name', // \u81ea\u589e\u957f PK, \u9690\u85cf\n  enemies: ',name,*weaknesses', // \u9690\u85cf\u975e\u81ea\u589e\u957f PK\n  users: 'meta.ssn, addr.city', // keyPath\n  people: '[name+ssn], &ssn', // \u7ec4\u5408\u4e3b\u952e\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const db = new Dexie('MyDatabase');\ndb.version(1).stores({\n  // friends: '++id, name, age',\n  users: '$$uuid,name',\n});\n\n// liveQuery \u53ef\u4ee5 watch \u7ed3\u679c\n// https://dexie.org/docs/liveQuery()\nconst friendsObservable = Dexie.liveQuery(() => db.friends.where('age').between(18, 25).toArray());\nconst subscription = friendsObservable.subscribe({\n  next: (result) => console.log('Got result:', JSON.stringify(result)),\n  error: (error) => console.error(error),\n});\n// \u89e6\u53d1 liveQuery\nawait db.friends.add({ name: 'wener', age: 20 });\n\n// dexie-observable\ndb.on('changes', function (changes) {\n  changes.forEach(function (change) {\n    switch (change.type) {\n      case 1: // CREATED\n        console.log('CREATED: ' + JSON.stringify(change.obj));\n        break;\n      case 2:\n        console.log(`UPDATED ${change.key}: ` + JSON.stringify(change.mods));\n        break;\n      case 3:\n        console.log(`DELETED: ` + JSON.stringify(change.oldObj));\n        break;\n    }\n  });\n});\n")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"mapToClass, defineClass \u53ef\u4ee5\u5c06\u6570\u636e\u8f6c\u4e3a Class \u65b9\u4fbf\u4f7f\u7528")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Table -> IDBObjectStore",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"hook - creating, reading, updating, deleting"))),(0,i.kt)("li",{parentName:"ul"},"Collection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Query builder"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dexie.org/docs/Syncable/Dexie.Syncable.js"},"Dexie.Syncable"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65\u534f\u8bae")))))}m.isMDXComponent=!0}}]);