"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38530],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,p=g["".concat(l,".").concat(m)]||g[m]||h[m]||i;return t?r.createElement(p,c(c({ref:n},u),{},{components:t})):r.createElement(p,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86064:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],o={title:"Git Branch FAQ"},l=void 0,s={unversionedId:"service/forge/git/git-branch-faq",id:"service/forge/git/git-branch-faq",isDocsHomePage:!1,title:"Git Branch FAQ",description:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6",source:"@site/notes/service/forge/git/git-branch-faq.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/git-branch-faq",permalink:"/notes/service/forge/git/git-branch-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/git/git-branch-faq.md",tags:[],version:"current",frontMatter:{title:"Git Branch FAQ"},sidebar:"docs",previous:{title:"Git Branch",permalink:"/notes/service/forge/git/git-branch"},next:{title:"Git FAQ",permalink:"/notes/service/forge/git/git-faq"}},u=[{value:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6",id:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6",children:[]},{value:"\u79fb\u9664\u5206\u652f",id:"\u79fb\u9664\u5206\u652f",children:[]},{value:"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f",id:"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f",children:[]},{value:"\u91cd\u7f6e\u5206\u652f",id:"\u91cd\u7f6e\u5206\u652f",children:[]},{value:"\u5207\u6362\u5230\u8fdc\u7a0b\u5206\u652f",id:"\u5207\u6362\u5230\u8fdc\u7a0b\u5206\u652f",children:[]},{value:"\u83b7\u53d6\u8fdc\u7a0b\u5206\u652f",id:"\u83b7\u53d6\u8fdc\u7a0b\u5206\u652f",children:[]},{value:"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f",id:"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f",children:[]},{value:"Rename branch",id:"rename-branch",children:[]}],h={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6"},"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6587\u4ef6\u53d8\u4e3a\u6682\u5b58\u72b6\u6001\ngit symbolic-ref HEAD refs/heads/\u5176\u4ed6\u5206\u652f\n# \u53ef\u4ee5\u53d6\u6d88\u6682\u5b58\ngit reset\n")),(0,i.kt)("h2",{id:"\u79fb\u9664\u5206\u652f"},"\u79fb\u9664\u5206\u652f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git branch -d the_local_branch"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"git push origin :the_remote_branch"),"\n\u63d0\u4ea4\u65b0\u7684\u5206\u652f\n",(0,i.kt)("inlineCode",{parentName:"p"},"git push --all")),(0,i.kt)("h2",{id:"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f"},"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout --orphan <branchname>\ngit rm --cached -r .\n")),(0,i.kt)("h2",{id:"\u91cd\u7f6e\u5206\u652f"},"\u91cd\u7f6e\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5148\u5207\u5230\u975e master \u5206\u652f\ngit checkout -B temp\n\ngit branch -D master\ngit checkout --orphan master\ngit rm -rf *\n\necho '# My Project' > README.md\ngit add README.md\ngit commit -m 'initial commit'\n\ngit branch -D temp\n\ngit push --all -f\n")),(0,i.kt)("h2",{id:"\u5207\u6362\u5230\u8fdc\u7a0b\u5206\u652f"},"\u5207\u6362\u5230\u8fdc\u7a0b\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6240\u6709\u5206\u652f\n# -r \u8fdc\u7a0b\ngit branch -a\n\ngit fetch origin\ngit checkout --track origin/3.12-stable\n\n# git fetch <remote> <rbranch>:<lbranch>\ngit fetch origin 3.12-stable:3.12-stable\ngit checkout 3.12-stable\n")),(0,i.kt)("h2",{id:"\u83b7\u53d6\u8fdc\u7a0b\u5206\u652f"},"\u83b7\u53d6\u8fdc\u7a0b\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"branch=\ngit ls-remote origin $branch\ngit fetch origin $branch:refs/remotes/$branch/$branch\n")),(0,i.kt)("h2",{id:"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f"},"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u68c0\u51fa\u8fdc\u7a0b\u5206\u652f\ngit clone -b stable <URL>\n\n# \u6216\u68c0\u51fa\u540e\ngit fetch <remote> <rbranch>:<lbranch>\ngit checkout <lbranch>\n")),(0,i.kt)("h2",{id:"rename-branch"},"Rename branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Rename old-branch-name to a non exists new-branch-name\ngit branch -m old-branch-name new-branch-name\n# Rename current branch to new-branch-name\ngit branch -m new-branch-name\n\n# Rename remote\ngit branch new-branch-name origin/old-branch-name\ngit push origin --set-upstream new-branch-name\ngit push origin :old-branch-name\n")))}g.isMDXComponent=!0}}]);