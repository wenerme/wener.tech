/*! For license information please see 9f46f986.6d841a13.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63389],{42451:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>x});var t=e(11527),d=e(47214);const r={title:"CSS Selector"},l="CSS Selector",i={id:"web/style/css-selector",title:"CSS Selector",description:"Pseudo",source:"@site/../notes/web/style/css-selector.md",sourceDirName:"web/style",slug:"/web/style/css-selector",permalink:"/notes/web/style/css-selector",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/css-selector.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"CSS Selector"},sidebar:"docs",previous:{title:"CSS Rule",permalink:"/notes/web/style/css-rule"},next:{title:"CSS Unit",permalink:"/notes/web/style/css-unit"}},c={},x=[{value:"Pseudo",id:"pseudo",level:2},{value:"\u9009\u62e9\u591a\u4e2a\u5b50\u5143\u7d20",id:"\u9009\u62e9\u591a\u4e2a\u5b50\u5143\u7d20",level:2},{value:"\u9009\u62e9\u5185\u5bb9\u5339\u914d",id:"\u9009\u62e9\u5185\u5bb9\u5339\u914d",level:2}];function j(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"css-selector",children:"CSS Selector"}),"\n",(0,t.jsx)(s.h2,{id:"pseudo",children:"Pseudo"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u7528\u6237\u64cd\u4f5c - :hover, :active, :focus, :focus-visible, :focus-within"}),"\n",(0,t.jsx)(s.li,{children:"\u4f4d\u7f6e - :any-link, :link, :visited, :local-link, :target, :target-within, :scope"}),"\n",(0,t.jsx)(s.li,{children:"\u8bed\u8a00 - :dir, :lang"}),"\n",(0,t.jsxs)(s.li,{children:["\u65f6\u95f4\u7ef4\u5ea6 - :current, :past, :future\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u7528\u4e8e WebVTT - \u5b57\u5e55"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\u8d44\u6e90\u72b6\u6001 - :playing, :paused\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u7528\u4e8e\u5a92\u4f53\u8d44\u6e90"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"\u8f93\u5165\u7ec4\u4ef6 - :blank, :placeholder, :default, :valid, :invalid, :required, :optional, :read-write, :read-only"}),"\n",(0,t.jsxs)(s.li,{children:["\u6811\u7ed3\u6784 - :root, :empty, ",(0,t.jsx)(s.code,{children:":nth[-last]-child"}),", ",(0,t.jsx)(s.code,{children:":(first|last|only)-child"}),",",(0,t.jsx)(s.code,{children:":nth[-last]-of-type"}),", ",(0,t.jsx)(s.code,{children:":(first|last|only)-of-type"})]}),"\n",(0,t.jsx)(s.li,{children:"\u9009\u62e9 - :is, :matches, :any, :has"}),"\n",(0,t.jsx)(s.li,{children:"ShadowDOM - :host, :host-context"}),"\n",(0,t.jsx)(s.li,{children:"\u5185\u5bb9 - :contains, :empty"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"defined"}),(0,t.jsx)(s.th,{children:"pseudo"}),(0,t.jsx)(s.th,{children:"desc"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CSS 1"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":link"}),(0,t.jsx)(s.td,{children:"\u672a\u8bbf\u95ee\u94fe\u63a5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":visited"}),(0,t.jsx)(s.td,{children:"\u5df2\u8bbf\u95ee\u94fe\u63a5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":active"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CSS 2"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":lang"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":first-child"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":hover"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":focus"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Selectors 3"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":target"}),(0,t.jsxs)(s.td,{children:["\u5f53\u524d url \u5339\u914d\u76ee\u6807 ",(0,t.jsx)(s.code,{children:"#ele-id"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":root"}),(0,t.jsx)(s.td,{children:"\u4e00\u822c\u6307 html, \u81ea\u5b9a\u4e49\u5143\u7d20\u65f6\u6307\u5f53\u524d\u5143\u7d20"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":nth-child()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":nth-last-of-child()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":nth-of-type()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":nth-last-of-type()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":last-child"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":first-of-type"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":last-of-type"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":only-child"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":only-of-type"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":empty"}),(0,t.jsx)(s.td,{children:"\u9009\u62e9\u7a7a\u767d\u8282\u70b9"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":not()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":enabled"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":disabled"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":checked"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":indeterminate"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CSS 3 UI"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":default"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":valid"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":invalid"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":in-range"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":out-of-range"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":required"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":optional"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":read-only"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":read-write"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Selectors 4"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":any-link"}),(0,t.jsx)(s.td,{children:":link or :visited ,\u6709 href \u5143\u7d20"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":blank"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":local-link"}),(0,t.jsx)(s.td,{children:"\u5982\u679c\u94fe\u63a5\u5339\u914d\u5f53\u524d\u9875\u9762"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":scope"}),(0,t.jsx)(s.td,{children:"\u76ee\u524d\u65e0\u6cd5\u5b9a\u4e49 scope, \u7b49\u540c :root; DOM \u6709 scope"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":drop"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":current"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":past"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":future"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":placeholder-shown"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":user-invalid"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":nth-col()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":nth-last-col()"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":is()"}),(0,t.jsx)(s.td,{children:"\u4f7f\u7528\u6700\u9ad8\u4f18\u5148\u7ea7"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":where()"}),(0,t.jsxs)(s.td,{children:["\u4e0e ",(0,t.jsx)(s.code,{children:":is"})," \u76f8\u540c\uff0c\u4f46\u65e0\u4f18\u5148\u7ea7\uff0c\u9002\u7528\u4e8e\u5199\u6837\u5f0f\u5e93"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":focus-visible"}),(0,t.jsx)(s.td,{children:"\u6d4f\u89c8\u5668\u6839\u636e\u64cd\u4f5c\u65b9\u5f0f\u51b3\u5b9a\u662f\u5426\u663e\u793a focus"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":focus-within"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u589e\u5f3a :not()"}),(0,t.jsx)(s.td,{children:"\u53c2\u6570\u4e0e :is \u76f8\u540c"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":has"}),(0,t.jsx)(s.td,{children:"\u6682\u672a\u5b9e\u73b0 - \u7c7b\u4f3c parent \u9009\u62e9"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":target-within"}),(0,t.jsx)(s.td,{children:"\u4e0d\u652f\u6301"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Fullscreen API"}),(0,t.jsx)(s.td,{children:":fullscreen"}),(0,t.jsx)(s.td,{children:"\u5168\u5c4f\u65f6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CSS 4 UI"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:":autofill"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"/* \u4e0d\u5728 nav \u4e0b\u7684 a */\na:not(nav *) {\n}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[":target - \u4f7f\u7528 id \u6216 name \u5c5e\u6027\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"https://wener.me#reference"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[":is - \u65e9\u671f\u53eb :matches\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u7c7b\u4f3c\u4e8e\u7f29\u5199\u5c55\u5f00 ",(0,t.jsx)(s.code,{children:":is(h1,h2) p"})," -> ",(0,t.jsx)(s.code,{children:"h1 p, h2 p"})]}),"\n",(0,t.jsx)(s.li,{children:"\u4e0d\u80fd\u9009\u62e9\u4f2a\u5143\u7d20"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:":where = :is - \u4f46\u4e0d\u589e\u52a0\u9009\u62e9\u7b26\u6743\u91cd"}),"\n",(0,t.jsx)(s.li,{children:":has - Chrome 105"}),"\n",(0,t.jsxs)(s.li,{children:[":scope = :root\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u9650\u5b9a\u9009\u62e9\u8303\u56f4 - ",(0,t.jsx)(s.code,{children:"querySelector()"}),", ",(0,t.jsx)(s.code,{children:"querySelectorAll()"}),", ",(0,t.jsx)(s.code,{children:"matches()"}),", ",(0,t.jsx)(s.code,{children:"Element.closest()"})]}),"\n",(0,t.jsx)(s.li,{children:"\u76ee\u524d\u8fd8\u65e0\u6cd5\u521b\u5efa scope"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/notes/web/style/container-query",children:"container query"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'\x3c!-- \u63d2\u5165\u4e00\u4e2a\u4e13\u95e8\u7528\u4e8e\u5b9a\u4f4d\u7684 anchor --\x3e\n\x3c!-- \u76ee\u524d name \u5c5e\u6027\u5df2\u5e9f\u5f03 --\x3e\n<a name="my-anchor"></a>\n<a id="my-anchor"></a>\n'})}),"\n",(0,t.jsx)(s.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(s.h2,{id:"\u9009\u62e9\u591a\u4e2a\u5b50\u5143\u7d20",children:"\u9009\u62e9\u591a\u4e2a\u5b50\u5143\u7d20"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"/* \u66f4\u73b0\u4ee3\u7684\u505a\u6cd5 */\n.article :is(h1, h2, h3) {\n}\n\n/* \u4ee5\u524d\u7684\u505a\u6cd5 */\n.article h1,\n.article h2,\n.article h3 {\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u9009\u62e9\u5185\u5bb9\u5339\u914d",children:"\u9009\u62e9\u5185\u5bb9\u5339\u914d"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jQuery\n$('td:contains(\"Yes\")')\n\n// js console\n$x(\"//td[text()='Yes']\")\n\n// js\ndocument.evaluate(\"//td[text()='Yes']\",document).iterateNext()\n"})})]})}function h(n={}){const{wrapper:s}={...(0,d.a)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}},3354:(n,s,e)=>{var t=e(50959),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function x(n,s,e){var t,r={},x=null,j=null;for(t in void 0!==e&&(x=""+e),void 0!==s.key&&(x=""+s.key),void 0!==s.ref&&(j=s.ref),s)l.call(s,t)&&!c.hasOwnProperty(t)&&(r[t]=s[t]);if(n&&n.defaultProps)for(t in s=n.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:d,type:n,key:x,ref:j,props:r,_owner:i.current}}s.Fragment=r,s.jsx=x,s.jsxs=x},11527:(n,s,e)=>{n.exports=e(3354)},47214:(n,s,e)=>{e.d(s,{Z:()=>i,a:()=>l});var t=e(50959);const d={},r=t.createContext(d);function l(n){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function i(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),t.createElement(r.Provider,{value:s},n.children)}}}]);