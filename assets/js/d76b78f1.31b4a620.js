/*! For license information please see d76b78f1.31b4a620.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68778],{96894:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var o=l(11527),i=l(47214);const r={title:"Collabora Online"},s="Collabora Online",t={id:"service/office/collabora",title:"Collabora Online",description:"- \u670d\u52a1\u7aef\u8fd0\u884c Libreoffice",source:"@site/../notes/service/office/collabora.md",sourceDirName:"service/office",slug:"/service/office/collabora",permalink:"/notes/service/office/collabora",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/office/collabora.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701580433,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"Collabora Online"},sidebar:"docs",previous:{title:"\u529e\u516c\u5957\u4ef6",permalink:"/notes/service/office/"},next:{title:"fortune-sheet",permalink:"/notes/service/office/fortune-sheet"}},c={},a=[{value:"CODE",id:"code",level:2},{value:"Docker",id:"docker",level:2},{value:"coolmount: Operation not permitted",id:"coolmount-operation-not-permitted",level:2},{value:"Explore The New Version",id:"explore-the-new-version",level:2},{value:"Your Collabora Online server needs updating",id:"your-collabora-online-server-needs-updating",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"collabora-online",children:"Collabora Online"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u670d\u52a1\u7aef\u8fd0\u884c Libreoffice"}),"\n",(0,o.jsx)(n.li,{children:"\u754c\u9762\u6e32\u67d3\u5230\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef"}),"\n",(0,o.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u5904\u7406\u83dc\u5355\u3001\u5149\u6807\u3001\u6587\u672c\u9009\u62e9\u7b49"}),"\n",(0,o.jsx)(n.li,{children:"\u5f39\u51fa\u83dc\u5355\u548c\u4fa7\u8fb9\u680f\u4e5f\u662f\u7531\u670d\u52a1\u7aef\u6e32\u67d3"}),"\n",(0,o.jsxs)(n.li,{children:["Collabora Online CODE \u5b9e\u73b0\u57fa\u4e8e LibreOffice Online LOOL (LOOLWSD)\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"20 \u4eba\u9650\u5236\uff0c\u53ef\u81ea\u5df1\u7f16\u8bd1\u53d6\u6d88\u9650\u5236"}),"\n",(0,o.jsx)(n.li,{children:"\u4e24\u8005\u533a\u522b\u5e76\u4e0d\u5927"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/r/libreoffice/online",children:"libreoffice/online"})," \u955c\u50cf"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Collabora Online Development Edition (CODE)"}),"\n",(0,o.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://sdk.collaboraonline.com/contents.html",children:"https://sdk.collaboraonline.com/contents.html"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# https://www.collaboraoffice.com/code/docker/\n# \u7ba1\u7406\n# http://collabora.localhost/loleaflet/dist/admin/admin.html\n# -v $PWD/loolwsd.xml:/etc/loolwsd/loolwsd.xml\n# -e "extra_params=--o:ssl.enable=false" \u4e0d\u542f\u7528 ssl\n# \u652f\u6301\u591a\u4e2a\u57df\u540d \'domain=collaboradomain\\\\.tld|nextclouddomain\\\\.tld\'\n# \u57df\u540d\u4e3a nextcloud \u7684\u57df\u540d - \u8bbf\u95ee\u8005\u7684\u57df\u540d\n# \u542f\u52a8\u6bd4\u8f83\u6162 - \u4f1a link \u5f88\u591a\u8d44\u6e90\ndocker run --rm -it \\\n  -p 9980:9980 \\\n  -e "domain=collabora.localhost" \\\n  -e "username=admin" -e "password=S3cRet" \\\n  -e "extra_params=--o:ssl.enable=false --o:allowed_languages=zh_CN" \\\n  --cap-add MKNO \\\n  -e \'dictionaries=zh en\' \\\n  --name collabora collabora/code\n\n# \u62f7\u8d1d\u914d\u7f6e\ndocker cp collabora:/etc/loolwsd/loolwsd.xml loolwsd.xml\n'})}),"\n",(0,o.jsx)(n.h2,{id:"code",children:"CODE"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://<DOMAIN>/browser/dist/admin/admin.html"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7ba1\u7406\u754c\u9762"}),"\n",(0,o.jsx)(n.li,{children:"\u80fd\u770b\u5230\u5185\u5b58\u548c\u5728\u7ebf\u7528\u6237"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://sdk.collaboraonline.com/docs/installation/CODE_Docker_image.html?highlight=acceptable%20wopi%20hosts#setting-the-application-configuration-dynamically-via-environment-variables",children:"https://sdk.collaboraonline.com/docs/installation/CODE_Docker_image.html?highlight=acceptable%20wopi%20hosts#setting-the-application-configuration-dynamically-via-environment-variables"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"coolmount-operation-not-permitted",children:"coolmount: Operation not permitted"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"cap_add: MKNOD"}),"\n",(0,o.jsx)(n.li,{children:"cap_add: SYS_ADMIN"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"explore-the-new-version",children:"Explore The New Version"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5c06 /usr/share/coolwsd/browser/dist/welcome \u6302\u8f7d\u4e3a\u7a7a\u76ee\u5f55"}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Nextcloud app - repeatedly showing welcome screen ",(0,o.jsx)(n.a,{href:"https://github.com/CollaboraOnline/online/issues/5854",children:"#5854"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/CollaboraOnline/online/issues/4489",children:"https://github.com/CollaboraOnline/online/issues/4489"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"extra_params: --o:welcome.enable=false"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/nextcloud/richdocuments/issues/1034#issuecomment-726052204",children:"https://github.com/nextcloud/richdocuments/issues/1034#issuecomment-726052204"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/nextcloud/richdocuments/issues/1034#issuecomment-702742995",children:"https://github.com/nextcloud/richdocuments/issues/1034#issuecomment-702742995"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"your-collabora-online-server-needs-updating",children:"Your Collabora Online server needs updating"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Menu/Tools/Options/LibreOffice/Online update options."}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wiki.documentfoundation.org/UserProfile",children:"https://wiki.documentfoundation.org/UserProfile"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3354:(e,n,l)=>{var o=l(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,l){var o,r={},a=null,d=null;for(o in void 0!==l&&(a=""+l),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:i,type:e,key:a,ref:d,props:r,_owner:t.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},11527:(e,n,l)=>{e.exports=l(3354)},47214:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>s});var o=l(50959);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);