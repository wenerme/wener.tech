"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54764],{49613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(59496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=g(a),m=i,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38597:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var n=a(49613),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))g.call(t,a)&&p(e,a,t[a]);return e};const c={title:"Git FAQ",tags:["FAQ"]},m="Git FAQ",d={unversionedId:"service/forge/git/git-faq",id:"service/forge/git/git-faq",title:"Git FAQ",description:"\u4fee\u6b63\u7528\u6237\u540d",source:"@site/../notes/service/forge/git/git-faq.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/faq",permalink:"/notes/service/forge/git/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/git/git-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668326649,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Git FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Git Branch",permalink:"/notes/service/forge/git/branch"},next:{title:"Git Hook",permalink:"/notes/service/forge/git/hook"}},k={},h=[{value:"\u4fee\u6b63\u7528\u6237\u540d",id:"\u4fee\u6b63\u7528\u6237\u540d",level:2},{value:"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u4fe1\u606f",id:"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u4fe1\u606f",level:2},{value:"git+ssh proxy",id:"gitssh-proxy",level:2},{value:"\u83b7\u53d6\u4ed3\u5e93\u76ee\u5f55",id:"\u83b7\u53d6\u4ed3\u5e93\u76ee\u5f55",level:2},{value:"\u5b50\u6a21\u5757\u521d\u59cb\u5316",id:"\u5b50\u6a21\u5757\u521d\u59cb\u5316",level:2},{value:"\u7edf\u8ba1",id:"\u7edf\u8ba1",level:2},{value:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e",id:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e",level:2},{value:"\u6587\u4ef6\u592a\u5927",id:"\u6587\u4ef6\u592a\u5927",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55",id:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55",level:2},{value:"Undo a commit and redo",id:"undo-a-commit-and-redo",level:2},{value:"\u663e\u793a \u4e0d\u540c",id:"\u663e\u793a-\u4e0d\u540c",level:2},{value:"\u79fb\u9664 git \u5386\u53f2",id:"\u79fb\u9664-git-\u5386\u53f2",level:2},{value:"git push tags",id:"git-push-tags",level:2},{value:"git clone tag",id:"git-clone-tag",level:2},{value:"\u751f\u6210 patch",id:"\u751f\u6210-patch",level:2},{value:"\u8ba4\u8bc1\u7f13\u5b58",id:"\u8ba4\u8bc1\u7f13\u5b58",level:2},{value:"\u5f3a\u5236 pull",id:"\u5f3a\u5236-pull",level:2},{value:"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686",id:"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686",level:2},{value:"signoff",id:"signoff",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 signoff",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-signoff",level:2},{value:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93",id:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93",level:2},{value:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93",id:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93",level:2},{value:"\u53d6\u7b2c\u4e00\u4e2a commit",id:"\u53d6\u7b2c\u4e00\u4e2a-commit",level:2},{value:"\u641c\u7d22\u6587\u4ef6",id:"\u641c\u7d22\u6587\u4ef6",level:2},{value:"skip ci",id:"skip-ci",level:2},{value:"git ci info",id:"git-ci-info",level:2},{value:"annotated tag vs. unannotated tag",id:"annotated-tag-vs-unannotated-tag",level:2},{value:"svn export",id:"svn-export",level:2},{value:"\u5927\u578b monorepo",id:"\u5927\u578b-monorepo",level:2},{value:"master to main",id:"master-to-main",level:2},{value:"fetch remote branch",id:"fetch-remote-branch",level:2},{value:"user.signingkey",id:"usersigningkey",level:2},{value:"git Load key git_signing_key invalid format",id:"git-load-key-git_signing_key-invalid-format",level:2},{value:"fatal: detected dubious ownership in repository",id:"fatal-detected-dubious-ownership-in-repository",level:2},{value:"\u5982\u4f55\u5728\u4ed3\u5e93\u91cc\u5b58\u50a8\u660e\u6587\u5bc6\u94a5",id:"\u5982\u4f55\u5728\u4ed3\u5e93\u91cc\u5b58\u50a8\u660e\u6587\u5bc6\u94a5",level:2}],f={toc:h};function b(e){var t,a=e,{components:i}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&g.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},f),p),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"git-faq"}),"Git FAQ"),(0,n.kt)("h2",u({},{id:"\u4fee\u6b63\u7528\u6237\u540d"}),"\u4fee\u6b63\u7528\u6237\u540d"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'git commit --amend --author="Author Name <email@address.com>"\n')),(0,n.kt)("h2",u({},{id:"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u4fe1\u606f"}),"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u4fe1\u606f"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u63d0\u4ea4\u65f6\u7684 commitor")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u786e\u8ba4\u5f53\u524d\u7528\u6237\u4fe1\u606f\ngit config --global user.name\ngit config --global user.email\n\n# \u5982\u679c\u4e0d\u6b63\u786e\u53ef\u4ee5\u4fee\u6539\ngit config --global user.name "Author Name"\ngit config --global user.email "email@address.com"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"--local \u9488\u5bf9\u5f53\u524d\u4ed3\u5e93\u4fee\u6539")),(0,n.kt)("h2",u({},{id:"gitssh-proxy"}),"git+ssh proxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301 http_proxy \u548c https_proxy"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 git+ssh \u4ee3\u7406\u9700\u8981\u989d\u5916\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-txt",metastring:'title="$HOME/.ssh/config"',title:'"$HOME/.ssh/config"'}),"Host github.com\n    ProxyCommand socat - PROXY:your.proxy.ip:%h:%p,proxyport=1080,proxyauth=user:pwd\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u66ff\u6362 your.proxy.ip"),(0,n.kt)("li",{parentName:"ul"},"\u66ff\u6362 1080"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u8ba4\u8bc1\u53ef\u5220\u9664 proxyauth")),(0,n.kt)("h2",u({},{id:"\u83b7\u53d6\u4ed3\u5e93\u76ee\u5f55"}),"\u83b7\u53d6\u4ed3\u5e93\u76ee\u5f55"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git rev-parse --show-toplevel\n")),(0,n.kt)("h2",u({},{id:"\u5b50\u6a21\u5757\u521d\u59cb\u5316"}),"\u5b50\u6a21\u5757\u521d\u59cb\u5316"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git pull --recurse-submodules\n# \u6216\u8005\u9012\u5f52\u62c9\u53d6\ngit clone --recursive <URL>\n")),(0,n.kt)("h2",u({},{id:"\u7edf\u8ba1"}),"\u7edf\u8ba1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/arzzen/git-quick-stats"}),"https://github.com/arzzen/git-quick-stats"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u7edf\u8ba1\u6240\u6709\u5206\u652f\u7684\u7528\u6237\u63d0\u4ea4\u6570\ngit shortlog -s -n --all --no-merges\n\n# \u7edf\u8ba1 LOC\ngit ls-files | xargs -n1 git blame --line-porcelain | sed -n 's/^author //p' | sort -f | uniq -ic | sort -nr\n")),(0,n.kt)("h2",u({},{id:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e"}),"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://help.github.com/articles/removing-sensitive-data-from-a-repository/"}),"Removing sensitive data from a repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://rtyley.github.io/bfg-repo-cleaner/"}),"https://rtyley.github.io/bfg-repo-cleaner/"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# BFG\n# \u6bd4 git-filter-branch \u5feb 10 - 720x\nbrew install bfg\n\n# \u5728\u5220\u9664\u524d\u5148\u505a\u4e00\u6b21\u628a\u6587\u4ef6\u5220\u9664\u7684\u63d0\u4ea4\ngit rm id_{dsa,rsa}\ngit commit -m 'remove files'\n# \u6e05\u7406\u5386\u53f2\nbfg --delete-files id_{dsa,rsa} my-repo.git\nbfg --strip-blobs-bigger-than 50M my-repo.git\nbfg --delete-folders dirname my-repo.git\n\n# \u6e05\u7406\ngit reflog expire --expire=now --all && git gc --prune=now --aggressive\n")),(0,n.kt)("h2",u({},{id:"\u6587\u4ef6\u592a\u5927"}),"\u6587\u4ef6\u592a\u5927"),(0,n.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u9650\u5236\u4e86\u6587\u4ef6\u5927\u5c0f, \u5219\u5f53\u63a8\u9001\u4e00\u4e2a\u8f83\u5927\u7684\u4ed3\u5e93\u65f6\u4f1a\u5931\u8d25, \u5982\u679c\u65e0\u6cd5\u4fee\u6539\u670d\u52a1\u5668\u53c2\u6570, \u5219\u53ef\u4ee5\u8003\u8651\u5206\u6279\u63a8\u9001"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u83b7\u53d6\u603b\u5f97\u6709\u591a\u5c11\u4e2a\u63d0\u4ea4\ngut log --pretty=format:"%h" | wc -l\n# \u83b7\u53d6\u7b2c\u4e00\u5343\u4e2a\u63d0\u4ea4\ngit log --reverse --pretty=format:"%h" | sed \'1000!d\'\n# \u63a8\u9001\u524d\u4e00\u5343\u4e2a\u63d0\u4ea4\ngit push origin $(git log --reverse --pretty=format:"%h" | sed \'1000!d\'):master\n# \u5982\u679c\u51fa\u73b0\u8be5\u9519\u8bef\n# The destination refspec neither matches an existing ref on the remote nor\n# begins with refs/, and we are unable to guess a prefix based on the source ref.\n# \u5219\u4f7f\u7528\ngit push origin $(git log --reverse --pretty=format:"%h" | sed \'1000!d\'):refs/heads/master\n')),(0,n.kt)("h2",u({},{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5b9a\u4e49 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://git-scm.com/docs/git-config"}),"git-config")),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u53c2\u8003 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://gist.github.com/pksunkara/988716"}),"pksunkara/.gitconfig"))),(0,n.kt)("p",null,"Git \u4e0d\u5141\u8bb8\u76f4\u63a5\u5f15\u7528\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e, \u4f46\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u672c\u5730\u914d\u7f6e\u6765 include \u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u4ed3\u5e93\u4e2d\u5171\u4eab\u7684\u914d\u7f6e\ntouch .gitconfig\n# \u4fee\u6539 .git/config \u6765\u5f15\u5165\u4ed3\u5e93\u4e2d\u7684 .gitconfig, \u8fd9\u4e2a\u547d\u4ee4\u4f1a\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\n# [include]\n#  path = ../.gitconfig\ngit config --local include.path ../.gitconfig\n")),(0,n.kt)("h2",u({},{id:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55"}),"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git subtree add -P <prefix> <repo> <rev>\n")),(0,n.kt)("h2",u({},{id:"undo-a-commit-and-redo"}),"Undo a commit and redo"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git commit ...\ngit reset --soft 'HEAD^'\nedit\ngit add ....\ngit commit -c ORIG_HEAD\n")),(0,n.kt)("p",null,"from ",(0,n.kt)("a",u({parentName:"p"},{href:"http://stackoverflow.com/questions/927358"}),"here")),(0,n.kt)("h2",u({},{id:"\u663e\u793a-\u4e0d\u540c"}),"\u663e\u793a \u4e0d\u540c"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git diff \\\n  --cached \\\n  --staged \\\n  HEAD # \u5c1a\u672a\u6682\u5b58\u7684,\u5f53\u524d\u6b63\u5728\u7f16\u8f91\u7684\n")),(0,n.kt)("p",null,"from ",(0,n.kt)("a",u({parentName:"p"},{href:"http://stackoverflow.com/questions/1587846"}),"here")),(0,n.kt)("h2",u({},{id:"\u79fb\u9664-git-\u5386\u53f2"}),"\u79fb\u9664 git \u5386\u53f2"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# $sha \u4e3a\u9700\u8981\u79fb\u9664\u7684\u5386\u53f2\u4f4d\u7f6e\ngit checkout --orphan temp $sha\ngit commit -m "Truncated history"\ngit rebase --onto temp $sha master\ngit branch -D temp\n')),(0,n.kt)("h2",u({},{id:"git-push-tags"}),"git push tags"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git push --tags\n# \u53ea push \u4e00\u4e2a\ngit push origin <tag_name>\n")),(0,n.kt)("h2",u({},{id:"git-clone-tag"}),"git clone tag"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git clone --branch <tag_name> <repo_url>\n")),(0,n.kt)("h2",u({},{id:"\u751f\u6210-patch"}),"\u751f\u6210 patch"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# git diff --cached\ngit diff > my.patch\n")),(0,n.kt)("h2",u({},{id:"\u8ba4\u8bc1\u7f13\u5b58"}),"\u8ba4\u8bc1\u7f13\u5b58"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/5343068"}),"https://stackoverflow.com/questions/5343068"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u9ed8\u8ba4 15m\ngit config --global credential.helper "cache --timeout=3600"\n\n# macOS \u53ef\u4ee5\u4f7f\u7528 keychain\n# git config --global credential.helper osxkeychain\n\n# \u6216\u8005 ~/.netrc\n# machine <hostname> login <username> password <password>\nchmod 600 ~/.netrc\n')),(0,n.kt)("h2",u({},{id:"\u5f3a\u5236-pull"}),"\u5f3a\u5236 pull"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git fetch --all\ngit reset --hard origin/master\n")),(0,n.kt)("h2",u({},{id:"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686"}),"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git fetch --unshallow\n")),(0,n.kt)("h2",u({},{id:"signoff"}),"signoff"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git commit --amend --no-edit --signoff\ngit push --force-with-lease origin $(git rev-parse --abbrev-ref HEAD)\n")),(0,n.kt)("h2",u({},{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-signoff"}),"\u4e3a\u4ec0\u4e48\u9700\u8981 signoff"),(0,n.kt)("p",null,"signoff \u662f\u5728 commit \u6d88\u606f\u6700\u540e\u6dfb\u52a0\u4e00\u884c\u8868\u793a\u63d0\u4ea4\u4f5c\u8005\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"Signed-off-by: wener <wener@wener.me>\n")),(0,n.kt)("p",null,"\u7528\u4e8e\u8ddf\u8e2a\u8c01\u7684\u63d0\u4ea4\uff0c\u5982\u679c review \u65f6\u505a\u4e86\u4fee\u6539\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u66b4\u529b signoff \u4ee5\u8ddf\u8e2a\u539f\u59cb\u63d0\u4ea4\u4eba\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u521d\u662f\u56e0\u4e3a\u907f\u514d\u6cd5\u5f8b\u7ea0\u7eb7\u5f15\u5165",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developercertificate.org/"}),"developer certificate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u660e\u786e sign-off \u8eab\u4efd"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/1962112/1870054"}),"What is the Sign Off feature in Git for?"))))),(0,n.kt)("h2",u({},{id:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93"}),"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/359424"}),"Detach (move) subdirectory into separate Git repository"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# git filter-branch --prune-empty --subdirectory-filter FOLDER-NAME  BRANCH-NAME\n\ngit subtree split -P <name-of-folder> -b <name-of-new-branch>\n")),(0,n.kt)("h2",u({},{id:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93"}),"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mkdir /path/to/new/repo && cd "$@"\ngit config receive.denyCurrentBranch warn\ncd -\ngit push /path/to/new/repo:optional-new-branch-name branch-name\n')),(0,n.kt)("p",null,"from ",(0,n.kt)("a",u({parentName:"p"},{href:"http://stackoverflow.com/a/2227571/1870054"}),"Here")),(0,n.kt)("h2",u({},{id:"\u53d6\u7b2c\u4e00\u4e2a-commit"}),"\u53d6\u7b2c\u4e00\u4e2a commit"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git rev-list --max-parents=0 HEAD\n")),(0,n.kt)("h2",u({},{id:"\u641c\u7d22\u6587\u4ef6"}),"\u641c\u7d22\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git log --all -- '*.wmv'\n# \u53ea\u663e\u793a hash\ngit rev-list --all -- '*.wmv'\n")),(0,n.kt)("h2",u({},{id:"skip-ci"}),"skip ci"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u90fd\u652f\u6301 message \u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"[ci skip]"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"[skip ci]")),(0,n.kt)("li",{parentName:"ul"},"git 2.10 \u652f\u6301\u9009\u9879 git push -o ci.skip"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gitlab ",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.gitlab.com/ee/user/project/push_options.html#push-options-for-gitlab-cicd"}),"Push Options")),(0,n.kt)("li",{parentName:"ul"},"jetbrain \u6682\u4e0d\u652f\u6301 git option ",(0,n.kt)("a",u({parentName:"li"},{href:"https://youtrack.jetbrains.com/issue/IDEA-202210"}),"IDEA-202210")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://git-scm.com/docs/git-push#Documentation/git-push.txt--oltoptiongt"}),"git push -o"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'git push -o ci.skip\ngit push -o ci.variable="MAX_RETRIES=10" -o ci.variable="MAX_TIME=600"\n')),(0,n.kt)("h2",u({},{id:"git-ci-info"}),"git ci info"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"}),"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u6700\u8fd1 tag + rev\n# v1.0-COMMIT_COUNT-COMMIT_ID\ngit describe --tags\n# \u6700\u8fd1 tag\n# v1.0\ngit describe --tags --abbrev=0\n# most recent annotated tag\ngit describe --abbrev=0\n# \u5f53\u524d tag\ngit tag --points-at HEAD\n# 7 \u4f4d commitid\ngit rev-parse --short HEAD\n")),(0,n.kt)("h2",u({},{id:"annotated-tag-vs-unannotated-tag"}),"annotated tag vs. unannotated tag"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git tag <tagname>"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0 -a -s -m"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6d88\u606f"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git tag -a <tagname> -m '<message>'"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b tagger/auther, date \u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b message")))),(0,n.kt)("h2",u({},{id:"svn-export"}),"svn export"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git archive master | tar -x -C /somewhere/else\ngit archive --format zip --output /full/path/to/zipfile.zip master\n\nsvn export https://github.com/username/repo-name/trunk/\nsvn export https://github.com/username/repo-name/trunk/src/lib/folder\n\ngit checkout-index --prefix=git-export-dir/ -af\n")),(0,n.kt)("h2",u({},{id:"\u5927\u578b-monorepo"}),"\u5927\u578b monorepo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FSMonitor")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git config core.fsmonitor true\ngit config core.untrackedcache true\n\ngit status # \u7b2c\u4e00\u6b21\u6162\ngit status # \u7b2c\u4e8c\u6b21\u547d\u4e2d\u5927\u91cf\u7f13\u5b58\uff0c\u975e\u5e38\u5feb\n")),(0,n.kt)("h2",u({},{id:"master-to-main"}),"master to main"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git branch -m master main\n\n# owner\ngit push -u origin main\ngit push origin --delete master\n\n# user\ngit fetch origin main\ngit branch --unset-upstream\ngit branch -u origin/main\n\n# \u6216\u4fee\u6539 .git/config fetch\n")),(0,n.kt)("h2",u({},{id:"fetch-remote-branch"}),"fetch remote branch"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git fetch origin 3.16-stable:3.16-stable\ngit switch 3.16-stable\n")),(0,n.kt)("h2",u({},{id:"usersigningkey"}),"user.signingkey"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# GPG\ngpg --list-secret-keys --keyid-format=long\ngit config --global user.signingkey KEY\ngit config --global user.signingkey SUBKEY!\n\n# SSH - Git 2.34+\ngit config --global gpg.format ssh\ngit config --global user.signingkey "$(cat ~/.ssh/id_ed25519.pub)"\n# ssh-agent \u5982\u679c\u6ca1\u6709\u5219\u4f1a\u51fa\u73b0 Load key git_signing_key invalid format\n# ssh-add ~/.ssh/id_ed25519\n\n# X.509\ngit config --global gpg.x509.program smimesign\ngit config --global gpg.format x509\nsmimesign --list-keys\ngit config --global user.signingkey KEY\n\n# \u63d0\u4ea4\u81ea\u52a8\u7b7e\u540d\ngit config --global commit.gpgsign true\n')),(0,n.kt)("h2",u({},{id:"git-load-key-git_signing_key-invalid-format"}),"git Load key git_signing_key invalid format"),(0,n.kt)("p",null,"\u5148\u6267\u884c ssh-add"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"unsupported value for gpg.format: ssh\n")),(0,n.kt)("h2",u({},{id:"fatal-detected-dubious-ownership-in-repository"}),"fatal: detected dubious ownership in repository"),(0,n.kt)("p",null,"\u76ee\u5f55\u6743\u9650\u4e0d\u4e3a\u5f53\u524d user"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u62a5\u9519\ngit status\n\n# 1. \u4fee\u6539 owner \u53ef\u89e3\u51b3\nchown -R $(id -u):$(id -g) $PWD\n# 2. \u5141\u8bb8\u5355\u4e2a\u76ee\u5f55\ngit config --global --add safe.directory $PWD\n# 3. \u5ffd\u7565 - \u5141\u8bb8\u6240\u6709\ngit config --global --add safe.directory '*'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/git/git/commit/8959555cee7ec045958f9b6dd62e541affb7e7d9"}),"https://github.com/git/git/commit/8959555cee7ec045958f9b6dd62e541affb7e7d9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/actions/runner/issues/2033"}),"https://github.com/actions/runner/issues/2033"))),(0,n.kt)("h2",u({},{id:"\u5982\u4f55\u5728\u4ed3\u5e93\u91cc\u5b58\u50a8\u660e\u6587\u5bc6\u94a5"}),"\u5982\u4f55\u5728\u4ed3\u5e93\u91cc\u5b58\u50a8\u660e\u6587\u5bc6\u94a5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u975e git \u76f8\u5173\u65b9\u6848")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sops",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7ef4\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"argocd vault plugin \u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f88\u591a\u540e\u7aef\uff0c\u53ef\u4ee5\u7528 age"))),(0,n.kt)("li",{parentName:"ul"},"age - \u6bd4 gpg \u7b80\u5355\uff0c\u529f\u80fd\u5355\u4e00",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7ef4\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528 ssh key"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ssh agent - \u53ef\u4ee5\u4e3a gitops \u7684\u5e94\u7528\u521b\u5efa\u65e0\u5bc6\u7801 key"))),(0,n.kt)("li",{parentName:"ul"},"sealed-secrets - \u6ca1\u6709\u89e3\u51b3\u5b58\u50a8\u660e\u6587\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u4e86\u5bc6\u94a5\u653e\u5230 kube \u7684\u95ee\u9898")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"git \u76f8\u5173\u65b9\u6848")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"git-secret"),(0,n.kt)("li",{parentName:"ul"},"git-crypt"),(0,n.kt)("li",{parentName:"ul"},"blackbox")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5916\u90e8\u670d\u52a1\u65b9\u6848 - KMS, Vaulr")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u989d\u5916\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u65b9\u4fbf\u81ea\u52a8\u5316 - \u6d89\u53ca\u4eba\u5de5\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"\u8fd8\u662f\u9700\u8981\u89e3\u51b3 SSOT - Single Source Of Truth \u95ee\u9898")))}b.isMDXComponent=!0}}]);