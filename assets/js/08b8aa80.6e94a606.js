/*! For license information please see 08b8aa80.6e94a606.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87192],{96140:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(2488),r=s(62780);const l={title:"dexie"},t="dexie",c={id:"web/script/lib/dexie",title:"dexie",description:"- dexie/Dexie.js",source:"@site/../notes/web/script/lib/dexie.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/dexie",permalink:"/notes/web/script/lib/dexie",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/dexie.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"dexie"},sidebar:"docs",previous:{title:"DayJS",permalink:"/notes/web/script/lib/dayjs"},next:{title:"eta.js",permalink:"/notes/web/script/lib/eta"}},o={},d=[{value:"Notes",id:"notes",level:2},{value:"SyncProtocol",id:"syncprotocol",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dexie",children:"dexie"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dexie/Dexie.js",children:"dexie/Dexie.js"})}),"\n",(0,i.jsxs)(n.li,{children:["dexie-react-hooks\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://dexie.org/docs/dexie-react-hooks/useLiveQuery()",children:"useLiveQuery"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f1a observe \u6570\u636e\u53d8\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e liveQuery \u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["dexie-observable\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u63d0\u4f9b ",(0,i.jsx)(n.code,{children:"db.on('changes')"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["dexie-export-import\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bfc\u5165\u3001\u5bfc\u51fa IndexedDB <-> Blob"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexie.org/docs/DerivedWork",children:"https://dexie.org/docs/DerivedWork"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["NodeJS \u6301\u4e45\u5316 ",(0,i.jsx)(n.a,{href:"https://github.com/dexie/Dexie.js/issues/480",children:"#480"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dumbmatter/fakeIndexedDB",children:"dumbmatter/fakeIndexedDB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u5b9e\u73b0 IndexedDB API - mock \u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm add dexie dexie-react-hooks\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["schema\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"++"})," \u81ea\u589e\u957f\u4e3b\u952e"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"&"})," \u552f\u4e00\u7d22\u5f15"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"*"})," \u591a\u503c\u7d22\u5f15 - \u6570\u7ec4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[A+B]"})," \u7ec4\u5408\u7d22\u5f15\u6216\u4e3b\u952e"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7d22\u5f15\u6570\u636e\u7c7b\u578b\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"string, number, Date, Array"}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u80fd\u7d22\u5f15 boolean, null, undefined"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var db = new Dexie('MyDatabase');\ndb.version(1).stores({\n  friends: '++id,name,shoeSize', // \u81ea\u589e\u957f PK id\n  pets: 'id, name, kind', // \u975e\u81ea\u589e\u957f PK id\n  cars: '++, name', // \u81ea\u589e\u957f PK, \u9690\u85cf\n  enemies: ',name,*weaknesses', // \u9690\u85cf\u975e\u81ea\u589e\u957f PK\n  users: 'meta.ssn, addr.city', // keyPath\n  people: '[name+ssn], &ssn', // \u7ec4\u5408\u4e3b\u952e\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const db = new Dexie('MyDatabase');\ndb.version(1).stores({\n  // friends: '++id, name, age',\n  users: '$$uuid,name',\n});\n\n// liveQuery \u53ef\u4ee5 watch \u7ed3\u679c\n// https://dexie.org/docs/liveQuery()\nconst friendsObservable = Dexie.liveQuery(() => db.friends.where('age').between(18, 25).toArray());\nconst subscription = friendsObservable.subscribe({\n  next: (result) => console.log('Got result:', JSON.stringify(result)),\n  error: (error) => console.error(error),\n});\n// \u89e6\u53d1 liveQuery\nawait db.friends.add({ name: 'wener', age: 20 });\n\n// dexie-observable\ndb.on('changes', function (changes) {\n  changes.forEach(function (change) {\n    switch (change.type) {\n      case 1: // CREATED\n        console.log('CREATED: ' + JSON.stringify(change.obj));\n        break;\n      case 2:\n        console.log(`UPDATED ${change.key}: ` + JSON.stringify(change.mods));\n        break;\n      case 3:\n        console.log(`DELETED: ` + JSON.stringify(change.oldObj));\n        break;\n    }\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mapToClass, defineClass \u53ef\u4ee5\u5c06\u6570\u636e\u8f6c\u4e3a Class \u65b9\u4fbf\u4f7f\u7528"}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Table -> IDBObjectStore\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hook - creating, reading, updating, deleting"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Collection\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Query builder"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://dexie.org/docs/Syncable/Dexie.Syncable.js",children:"Dexie.Syncable"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u540c\u6b65\u534f\u8bae"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syncprotocol",children:"SyncProtocol"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ISyncProtocol {\n    /** Maximum number of changes per sync() call. Default Infinity. */\n    partialsThreshold?: number;\n\n    /** Called by the framework to send changes to server and\n     * receive changes back from server. */\n    sync (\n        context: IPersistedContext,\n        url: string,\n        options: Object,\n        baseRevision: any,\n        syncedRevision: any,\n        changes: IDatabaseChange[],\n        partial: boolean,\n        applyRemoteChanges: ApplyRemoteChangesFunction,\n        onChangesAccepted: ()=>void,\n        onSuccess: (continuation: Continuation)=>void,\n        onError: (error: any, again?: number) => void)\n    : void;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexie.org/docs/Syncable/Dexie.Syncable.ISyncProtocol",children:"ISyncProtocol"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexie.org/docs/Syncable/Dexie.Syncable.js.html",children:"https://dexie.org/docs/Syncable/Dexie.Syncable.js.html"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dexie/Dexie.js/blob/master/samples/remote-sync/ajax/AjaxSyncProtocol.js",children:"AjaxSyncProtocol"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528 jQuery \u53d1\u8d77 ajax \u8bf7\u6c42"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dexie/Dexie.js/blob/master/samples/remote-sync/websocket/WebSocketSyncProtocol.js",children:"WebSocketSyncProtocol"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dexie/Dexie.js/blob/master/samples/remote-sync/websocket/WebSocketSyncServer.js",children:"WebSocketSyncServer"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexie.org/docs/StorageManager",children:"StorageManager"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},38088:(e,n,s)=>{var i=s(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,l={},d=null,a=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,i)&&!o.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:a,props:l,_owner:c.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var i=s(96651);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);