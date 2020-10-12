(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{385:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),c=(n(0),n(557)),i={slug:"git",title:"Git"},b={unversionedId:"manual/git",id:"manual/git",isDocsHomePage:!1,title:"Git",description:"Git",source:"@site/contents/notes/manual/git.md",slug:"/manual/git",permalink:"/notes/manual/git",version:"current"},l=[{value:"Tips",id:"tips",children:[]},{value:"gitflow",id:"gitflow",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6",id:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6",children:[]},{value:"\u4fee\u6b63\u7528\u6237\u540d",id:"\u4fee\u6b63\u7528\u6237\u540d",children:[]},{value:"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237",id:"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237",children:[{value:"\u5b50\u6a21\u5757\u521d\u59cb\u5316",id:"\u5b50\u6a21\u5757\u521d\u59cb\u5316",children:[]},{value:"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f",id:"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f",children:[]},{value:"\u7edf\u8ba1",id:"\u7edf\u8ba1",children:[]},{value:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e",id:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e",children:[]},{value:"\u6587\u4ef6\u592a\u5927",id:"\u6587\u4ef6\u592a\u5927",children:[]},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:[]},{value:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55",id:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55",children:[]},{value:"Undo a commit and redo",id:"undo-a-commit-and-redo",children:[]},{value:"\u663e\u793a \u4e0d\u540c",id:"\u663e\u793a-\u4e0d\u540c",children:[]},{value:"\u79fb\u9664 git \u5386\u53f2",id:"\u79fb\u9664-git-\u5386\u53f2",children:[]},{value:"push tags",id:"push-tags",children:[]},{value:"clone tag",id:"clone-tag",children:[]},{value:"\u751f\u6210 patch",id:"\u751f\u6210-patch",children:[]},{value:"\u6388\u6743\u7f13\u5b58",id:"\u6388\u6743\u7f13\u5b58",children:[]},{value:"\u5f3a\u5236 pull",id:"\u5f3a\u5236-pull",children:[]},{value:"\u542f\u52a8git\u670d\u52a1",id:"\u542f\u52a8git\u670d\u52a1",children:[]},{value:"\u79fb\u9664\u5206\u652f",id:"\u79fb\u9664\u5206\u652f",children:[]},{value:"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f",id:"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f",children:[]},{value:"\u91cd\u7f6e\u5206\u652f",id:"\u91cd\u7f6e\u5206\u652f",children:[]},{value:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93",id:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93",children:[]},{value:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93",id:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93",children:[]},{value:"\u53d6\u7b2c\u4e00\u4e2a commit",id:"\u53d6\u7b2c\u4e00\u4e2a-commit",children:[]}]},{value:"\u641c\u7d22\u6587\u4ef6",id:"\u641c\u7d22\u6587\u4ef6",children:[{value:"Rename branch",id:"rename-branch",children:[]},{value:"Linux &amp; Mac OS",id:"linux--mac-os",children:[]},{value:"Windows",id:"windows",children:[]}]}],o={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"git"},"Git"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 alias \u6765\u7b80\u5316\u64cd\u4f5c"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 IDE \u96c6\u6210\u7684 git \u5de5\u5177"),Object(c.b)("li",{parentName:"ul"},"\u907f\u514d\u76f4\u63a5\u64cd\u4f5c\u4e3b\u5206\u652f"),Object(c.b)("li",{parentName:"ul"},"\u907f\u514d\u7ba1\u7406\u5927\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6"),Object(c.b)("li",{parentName:"ul"},"\u5e38\u63d0\u4ea4,\u65e9\u63d0\u4ea4,\u63d0\u4ea4\u4ee5\u5de5\u4f5c\u4efb\u52a1\u4e3a\u5355\u4f4d"),Object(c.b)("li",{parentName:"ul"},"\u4e3a\u63d0\u4ea4\u5199\u4e0a\u8be6\u7ec6\u7684\u6ce8\u91ca"),Object(c.b)("li",{parentName:"ul"},"\u8c28\u614e PUSH"),Object(c.b)("li",{parentName:"ul"},"\u76f8\u5173\u5f00\u53d1\u4eba\u5458\u7edf\u4e00\u4ee3\u7801\u98ce\u683c"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u52a8\u8865\u5168"),Object(c.b)("li",{parentName:"ul"},"\u5728\u5207\u6362\u5206\u4e4b\u524d\u4f7f\u7528 stash"),Object(c.b)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528 Markdown"),Object(c.b)("li",{parentName:"ul"},"\u6709\u95ee\u9898\u95ee\u8c37\u6b4c")),Object(c.b)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://git.oschina.net/progit/"}),"Pro Git\uff08\u4e2d\u6587\u7248\uff09")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/315911/"}),"Git for beginners: The definitive practical guide")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://rogerdudler.github.io/git-guide/index.zh.html"}),"git - \u7b80\u660e\u6307\u5357")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://git.or.cz/course/svn.html"}),"git \u4e0e svn \u547d\u4ee4\u6bd4\u8f83")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wenerme/dotfiles/blob/master/.gitconfig"}),"\u6211\u7684 .gitconfig"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u76f4\u63a5\u901a\u8fc7 SSH \u8fdb\u884c\u4ed3\u5e93\u63a8\u9001\nssh user@host 'git init --bare /repo/my-project'\ngit push 'ssh://user@host/repo/my-project'\n# \u5728\u8fdc\u7a0b\u4f7f\u7528\u8be5\u4ed3\u5e93\nmkdir -p /src/my-project\ngit clone /repo/my-project /src/my-project\n\n\ngit fetch origin 15:15\ngit checkout 15\n")),Object(c.b)("h2",{id:"gitflow"},"gitflow"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/nvie/gitflow"}),"nvie/gitflow")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/petervanderdoes/gitflow-avh"}),"petervanderdoes/gitflow-avh"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"a collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model."),Object(c.b)("li",{parentName:"ul"},"adds more functionality to the existing git-flow and several of the internal commands have been rewritten to speed up the software."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://nvie.com/posts/a-successful-git-branching-model"}),"A successful Git branching model")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow"}),"git-flow \u5de5\u4f5c\u6d41\u7a0b"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install git-flow-avh\n")),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h2",{id:"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6"},"\u5207\u6362\u5206\u652f\u4f46\u4e0d\u6361\u51fa\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u6587\u4ef6\u53d8\u4e3a\u6682\u5b58\u72b6\u6001\ngit symbolic-ref HEAD refs/heads/\u5176\u4ed6\u5206\u652f\n# \u53ef\u4ee5\u53d6\u6d88\u6682\u5b58\ngit reset\n")),Object(c.b)("h2",{id:"\u4fee\u6b63\u7528\u6237\u540d"},"\u4fee\u6b63\u7528\u6237\u540d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'git commit --amend --author="Author Name <email@address.com>"\n')),Object(c.b)("h2",{id:"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237"},"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'git config --local user.name "Author Name"\ngit config --local user.email "email@address.com"\n')),Object(c.b)("h3",{id:"\u5b50\u6a21\u5757\u521d\u59cb\u5316"},"\u5b50\u6a21\u5757\u521d\u59cb\u5316"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git pull --recurse-submodules\n# \u6216\u8005\u9012\u5f52\u62c9\u53d6\ngit clone --recursive <URL>\n")),Object(c.b)("h3",{id:"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f"},"\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u51fa\u8fdc\u7a0b\u5206\u652f\ngit clone -b stable <URL>\n\n# \u6216\u68c0\u51fa\u540e\ngit fetch <remote> <rbranch>:<lbranch>\ngit checkout <lbranch>\n")),Object(c.b)("h3",{id:"\u7edf\u8ba1"},"\u7edf\u8ba1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/arzzen/git-quick-stats"}),"https://github.com/arzzen/git-quick-stats"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u7edf\u8ba1\u6240\u6709\u5206\u652f\u7684\u7528\u6237\u63d0\u4ea4\u6570\ngit shortlog -s -n --all --no-merges\n\n# \u7edf\u8ba1 LOC\ngit ls-files | xargs -n1 git blame --line-porcelain | sed -n 's/^author //p' | sort -f | uniq -ic | sort -nr\n")),Object(c.b)("h3",{id:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e"},"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.github.com/articles/removing-sensitive-data-from-a-repository/"}),"Removing sensitive data from a repository")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://rtyley.github.io/bfg-repo-cleaner/"}),"https://rtyley.github.io/bfg-repo-cleaner/"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# BFG\n# \u6bd4 git-filter-branch \u5feb 10 - 720x\nbrew install bfg\n\n# \u5728\u5220\u9664\u524d\u5148\u505a\u4e00\u6b21\u628a\u6587\u4ef6\u5220\u9664\u7684\u63d0\u4ea4\nbfg --delete-files id_{dsa,rsa}  my-repo.git\nbfg --strip-blobs-bigger-than 50M  my-repo.git\nbfg --delete-folders dirname  my-repo.git\n\n# \u6e05\u7406\ngit reflog expire --expire=now --all && git gc --prune=now --aggressive\n")),Object(c.b)("h3",{id:"\u6587\u4ef6\u592a\u5927"},"\u6587\u4ef6\u592a\u5927"),Object(c.b)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u9650\u5236\u4e86\u6587\u4ef6\u5927\u5c0f, \u5219\u5f53\u63a8\u9001\u4e00\u4e2a\u8f83\u5927\u7684\u4ed3\u5e93\u65f6\u4f1a\u5931\u8d25, \u5982\u679c\u65e0\u6cd5\u4fee\u6539\u670d\u52a1\u5668\u53c2\u6570, \u5219\u53ef\u4ee5\u8003\u8651\u5206\u6279\u63a8\u9001"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u83b7\u53d6\u603b\u5f97\u6709\u591a\u5c11\u4e2a\u63d0\u4ea4\ngut log --pretty=format:"%h" | wc -l\n# \u83b7\u53d6\u7b2c\u4e00\u5343\u4e2a\u63d0\u4ea4\ngit log --reverse --pretty=format:"%h" | sed \'1000!d\'\n# \u63a8\u9001\u524d\u4e00\u5343\u4e2a\u63d0\u4ea4\ngit push origin $(git log --reverse --pretty=format:"%h" | sed \'1000!d\'):master\n# \u5982\u679c\u51fa\u73b0\u8be5\u9519\u8bef\n# The destination refspec neither matches an existing ref on the remote nor\n# begins with refs/, and we are unable to guess a prefix based on the source ref.\n# \u5219\u4f7f\u7528\ngit push origin $(git log --reverse --pretty=format:"%h" | sed \'1000!d\'):refs/heads/master\n')),Object(c.b)("h3",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5b9a\u4e49 ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/docs/git-config"}),"git-config")),Object(c.b)("li",{parentName:"ul"},"\u914d\u7f6e\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://gist.github.com/pksunkara/988716"}),"pksunkara/.gitconfig"))))),Object(c.b)("p",null,"Git \u4e0d\u5141\u8bb8\u76f4\u63a5\u5f15\u7528\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e, \u4f46\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u672c\u5730\u914d\u7f6e\u6765 include \u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u4ed3\u5e93\u4e2d\u5171\u4eab\u7684\u914d\u7f6e\ntouch .gitconfig\n# \u4fee\u6539 .git/config \u6765\u5f15\u5165\u4ed3\u5e93\u4e2d\u7684 .gitconfig, \u8fd9\u4e2a\u547d\u4ee4\u4f1a\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\n# [include]\n#  path = ../.gitconfig\ngit config --local include.path ../.gitconfig\n")),Object(c.b)("h3",{id:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55"},"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"git subtree add -P <prefix> <repo> <rev>\n")),Object(c.b)("h3",{id:"undo-a-commit-and-redo"},"Undo a commit and redo"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"git commit ...\ngit reset --soft 'HEAD^'\nedit\ngit add ....\ngit commit -c ORIG_HEAD\n")),Object(c.b)("p",null,"from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://stackoverflow.com/questions/927358"}),"here")),Object(c.b)("h3",{id:"\u663e\u793a-\u4e0d\u540c"},"\u663e\u793a \u4e0d\u540c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git diff \\\n    --cached \\\n    --staged \\\n    HEAD # \u5c1a\u672a\u6682\u5b58\u7684,\u5f53\u524d\u6b63\u5728\u7f16\u8f91\u7684\n")),Object(c.b)("p",null,"from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://stackoverflow.com/questions/1587846"}),"here")),Object(c.b)("h3",{id:"\u79fb\u9664-git-\u5386\u53f2"},"\u79fb\u9664 git \u5386\u53f2"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# $sha \u4e3a\u9700\u8981\u79fb\u9664\u7684\u5386\u53f2\u4f4d\u7f6e\ngit checkout --orphan temp $sha\ngit commit -m "Truncated history"\ngit rebase --onto temp $sha master\ngit branch -D temp\n')),Object(c.b)("h3",{id:"push-tags"},"push tags"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git push --tags\n# \u53ea push \u4e00\u4e2a\ngit push origin <tag_name>\n")),Object(c.b)("h3",{id:"clone-tag"},"clone tag"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone --branch <tag_name> <repo_url>\n")),Object(c.b)("h3",{id:"\u751f\u6210-patch"},"\u751f\u6210 patch"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# git diff --cached\ngit diff > my.patch\n")),Object(c.b)("h3",{id:"\u6388\u6743\u7f13\u5b58"},"\u6388\u6743\u7f13\u5b58"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/5343068"}),"https://stackoverflow.com/questions/5343068"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u9ed8\u8ba4 15m\ngit config --global credential.helper "cache --timeout=3600"\n\n# macOS \u53ef\u4ee5\u4f7f\u7528 keychain\n# git config --global credential.helper osxkeychain\n\n# \u6216\u8005 ~/.netrc\n# machine <hostname> login <username> password <password>\nchmod 600 ~/.netrc\n')),Object(c.b)("h3",{id:"\u5f3a\u5236-pull"},"\u5f3a\u5236 pull"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"git fetch --all\ngit reset --hard origin/master\n")),Object(c.b)("h3",{id:"\u542f\u52a8git\u670d\u52a1"},"\u542f\u52a8git\u670d\u52a1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://git-scm.com/docs/git-daemon"}),"http://git-scm.com/docs/git-daemon")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://git-scm.com/docs/git-http-backend"}),"http://git-scm.com/docs/git-http-backend"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir eddies  # MAKE folder for repo\nchown -R eddie:websrv eddies/  # ensure apache (webserver) can access it\ncd eddies/\ngit --bare init --shared\nls\nbranches  config  description  HEAD  hooks  info  objects  refs\n# \u5982\u679c\u662f\u5df2\u6709\u7684\u9879\u76ee,\u53ef\u4ee5\u8fd9\u6837\u542f\u7528 receivepack\ngit config --file config http.receivepack true\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8\u670d\u52a1\ngit daemon --reuseaddr --base-path=. --export-all --verbose --enable=receive-pack\n# receive-pack \u4f1a\u5141\u8bb8\u533f\u540d\u7684push \u4f7f\u7528\u9700\u8c28\u614e\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u8f6c\u6362\u4e3a bare \u4ed3\u5e93\ncd repo\nmv .git .. && rm -fr *\nmv ../.git .\nmv .git/* .\nrmdir .git\n\ngit config --bool core.bare true # \u8fd9\u4e2a\u5f88\u91cd\u8981\ncd ..; mv repo repo.git # renaming just for clarity\n\n# \u6216\u8005\u8fd9\u6837\u64cd\u4f5c\u65b9\u4fbf\u4e9b\ngit clone --bare /path/to/repo\n\n")),Object(c.b)("p",null,"\u68c0\u51fa\u672c\u5730"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git://localhost/reponame\n")),Object(c.b)("h3",{id:"\u79fb\u9664\u5206\u652f"},"\u79fb\u9664\u5206\u652f"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"git branch -d the_local_branch"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"git push origin :the_remote_branch"),"\n\u63d0\u4ea4\u65b0\u7684\u5206\u652f\n",Object(c.b)("inlineCode",{parentName:"p"},"git push --all")),Object(c.b)("h3",{id:"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f"},"\u5f00\u59cb\u7a7a\u7684\u65b0\u5206\u652f"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git checkout --orphan <branchname>\ngit rm --cached -r .\n")),Object(c.b)("h3",{id:"\u91cd\u7f6e\u5206\u652f"},"\u91cd\u7f6e\u5206\u652f"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5148\u5207\u5230\u975e master \u5206\u652f\ngit checkout -B temp\n\ngit branch -D master\ngit checkout --orphan master\ngit rm -rf *\n\necho '# My Project' > README.md\ngit add README.md\ngit commit -m 'initial commit'\n\ngit branch -D temp\n\ngit push --all -f\n")),Object(c.b)("h3",{id:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93"},"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/359424"}),"Detach (move) subdirectory into separate Git repository"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# git filter-branch --prune-empty --subdirectory-filter FOLDER-NAME  BRANCH-NAME\n\ngit subtree split -P <name-of-folder> -b <name-of-new-branch>\n")),Object(c.b)("h3",{id:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93"},"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'mkdir /path/to/new/repo && cd "$@"\ngit config receive.denyCurrentBranch warn\ncd -\ngit push /path/to/new/repo:optional-new-branch-name branch-name\n')),Object(c.b)("p",null,"from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://stackoverflow.com/a/2227571/1870054"}),"Here")),Object(c.b)("h3",{id:"\u53d6\u7b2c\u4e00\u4e2a-commit"},"\u53d6\u7b2c\u4e00\u4e2a commit"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git rev-list --max-parents=0 HEAD\n")),Object(c.b)("h2",{id:"\u641c\u7d22\u6587\u4ef6"},"\u641c\u7d22\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git log --all -- '*.wmv'\n# \u53ea\u663e\u793a hash\ngit rev-list --all -- '*.wmv'\n")),Object(c.b)("h3",{id:"rename-branch"},"Rename branch"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Rename old-branch-name to a non exists new-branch-name\ngit branch -m old-branch-name new-branch-name\n# Rename current branch to new-branch-name\ngit branch -m new-branch-name\n\n# Rename remote\ngit branch new-branch-name origin/old-branch-name\ngit push origin --set-upstream new-branch-name\ngit push origin :old-branch-name\n")),Object(c.b)("h3",{id:"linux--mac-os"},"Linux & Mac OS"),Object(c.b)("p",null,"\u5728 Mac \u548c Linux \u5747\u5efa\u8bae\u4f7f\u7528 Homebrew \u6765\u7ba1\u7406\u5305,\u5f53 Homebrew \u5b89\u88c5\u597d\u540e"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 Git\nbrew install git\n# \u66f4\u65b0 Git \u7248\u672c\nbrew update\nbrew upgrade git\n")),Object(c.b)("h3",{id:"windows"},"Windows"),Object(c.b)("p",null,"\u5efa\u8bae\u4f7f\u7528 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cygwin.org/"}),"Cygwin"),"+",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cygwinports.org/"}),"Cygwinports")," \u6765\u4f7f\u7528 Git, \u907f\u514d\u81ea\u5df1\u7f16\u8bd1\u6216\u4e0b\u8f7d\u4e00\u4e2a\u5b8c\u6574\u7684 MingWin \u5305."),Object(c.b)("h1",{id:"git-\u57fa\u672c\u4f7f\u7528"},"Git \u57fa\u672c\u4f7f\u7528"),Object(c.b)("p",null,"\u4f7f\u7528\u65f6\u9996\u5148\u9700\u8981\u660e\u786e\u4f7f\u7528\u8005\u8eab\u4efd,\u90ae\u7bb1\u548c\u59d3\u540d,\u4f8b\u5982\u6211\u81ea\u5df1\u4f7f\u7528\u65f6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"git config --global user.name=wener\ngit config --global user.email=wenermail@gmail.com\n")),Object(c.b)("p",null,"\u57fa\u672c\u64cd\u4f5c\u53ef\u53c2\u8003 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://rogerdudler.github.io/git-guide/index.zh.html"}),"git - \u7b80\u660e\u6307\u5357")),Object(c.b)("h1",{id:"git--svn"},"Git & SVN"),Object(c.b)("p",null,"\u8fd9\u91cc\u53ea\u8bb2\u89e3\u7b80\u5355\u7684\u4e0e SVN \u4e92\u64cd\u4f5c,\u66f4\u590d\u6742\u7684\u6587\u6863,\u53ef\u53c2\u8003",Object(c.b)("inlineCode",{parentName:"p"},"git svn --help")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'# Clone svn \u5730\u5740\n# \u5982\u679c\u662f\u6807\u51c6 svn \u5e93\u53ef\u4f7f\u7528 --stdlayout\ngit svn clone svn\u5730\u5740\n# \u5ffd\u7565 svn \u5ffd\u7565\u7684\u5185\u5bb9\ngit svn show-ignore >> .git/info/exclude\n# \u5b8c\u6210\u540e\u80fd\u5728 git \u914d\u7f6e\u4e2d\u770b\u5230\u76f8\u5173\u4fe1\u606f\ncat .git/config\n# \u5f53\u4fee\u6539\u672c\u5730\u6587\u4ef6\u540e,\u5148\u672c\u5730\u63d0\u4ea4,\u518d\u63d0\u4ea4\u5230 svn\ngit add .\ngit commit -m "\u63cf\u8ff0\u4fee\u6539"\ngit svn dcommit\n# \u5f53 SVN \u4e0a\u6709\u6bd4\u672c\u5730\u66f4\u65b0\u7684\u5185\u5bb9\u65f6,\u62c9\u53d6\u65b0\u7684\u5185\u5bb9\ngit svn rebase\n')))}p.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,u=s["".concat(i,".").concat(g)]||s[g]||m[g]||c;return n?r.a.createElement(u,b(b({ref:t},o),{},{components:n})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=g;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);