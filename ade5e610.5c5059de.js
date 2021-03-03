(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{529:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(7),l=(t(0),t(766)),i={id:"brew",title:"Brew"},o={unversionedId:"os/darwin/brew",id:"os/darwin/brew",isDocsHomePage:!1,title:"Brew",description:"Tips",source:"@site/notes/os/darwin/brew.md",slug:"/os/darwin/brew",permalink:"/notes/os/darwin/brew",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/darwin/brew.md",version:"current",sidebar:"docs",previous:{title:"Darwin",permalink:"/notes/os/darwin/darwin"},next:{title:"macOS",permalink:"/notes/os/darwin/macos"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u57fa\u7840\u7684\u8f6f\u4ef6\u5305",id:"\u57fa\u7840\u7684\u8f6f\u4ef6\u5305",children:[{value:"\u66f4\u6539\u9ed8\u8ba4 SHELL",id:"\u66f4\u6539\u9ed8\u8ba4-shell",children:[]},{value:"Font",id:"font",children:[]},{value:"FUSE",id:"fuse",children:[]},{value:"Tex",id:"tex",children:[]},{value:"PHP",id:"php",children:[]},{value:"\u5bb9\u5668\u76f8\u5173",id:"\u5bb9\u5668\u76f8\u5173",children:[]}]},{value:"Linuxbrew",id:"linuxbrew",children:[]},{value:"\u4f7f\u7528 gcc \u800c\u4e0d\u4f7f\u7528 clang",id:"\u4f7f\u7528-gcc-\u800c\u4e0d\u4f7f\u7528-clang",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u7f13\u5b58\u76ee\u5f55",id:"\u7f13\u5b58\u76ee\u5f55",children:[]},{value:"\u624b\u52a8\u4e0b\u8f7d\u672a\u4e0b\u8f7d\u5b8c\u6210\u7684\u5b89\u88c5\u5305",id:"\u624b\u52a8\u4e0b\u8f7d\u672a\u4e0b\u8f7d\u5b8c\u6210\u7684\u5b89\u88c5\u5305",children:[]},{value:"xcode \u7248\u672c\u68c0\u6d4b\u9519\u8bef",id:"xcode-\u7248\u672c\u68c0\u6d4b\u9519\u8bef",children:[]},{value:"dir_s_mkdir permission denied",id:"dir_s_mkdir-permission-denied",children:[]},{value:"openjdk",id:"openjdk",children:[]}]}],b={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"http://brew.sh/"}),"Brew")," \u662f OS X \u4e0b\u5fc5\u4e0d\u53ef\u5c11\u7684\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u26a0\ufe0f")),Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},"\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9700\u8981\u4ee3\u7406"),Object(l.b)("li",{parentName:"ol"},"\u4ee3\u7406\u5efa\u8bae\u4f7f\u7528 https_proxy \u8fdb\u884c\u8bbe\u7f6e\u6216\u5168\u5c40\u4ee3\u7406"),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 https_proxy \u5efa\u8bae\u4f7f\u7528 http \u4ee3\u7406"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# \u5b89\u88c5\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n# \u5982\u679c XCode \u5b89\u88c5\u5931\u8d25\u53ef\u4f7f\u7528 xcode-select --install \u5b89\u88c5\n\n# \u4f7f\u7528\u6e05\u534e\u955c\u50cf\uff0c\u907f\u514d\u4ee3\u7406\n# https://mirror.tuna.tsinghua.edu.cn/help/homebrew/\ngit -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git\ngit -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git\ngit -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git\nbrew update\n# bottle/\u4e8c\u8fdb\u5236 \u4e5f\u4f7f\u7528\u955c\u50cf\nexport HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles\n')),Object(l.b)("h2",{id:"\u57fa\u7840\u7684\u8f6f\u4ef6\u5305"},"\u57fa\u7840\u7684\u8f6f\u4ef6\u5305"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u57fa\u7840\nbrew tap caskroom/cask\nbrew tap caskroom/versions\nbrew tap homebrew/versions\nbrew tap homebrew/dupes\nbrew tap homebrew/completions\nbrew tap homebrew/games\nbrew tap homebrew/command-not-found\n\n# \u5148\u5b89\u88c5 Lantern \u7528\u4f5c\u68af\u5b50\n# \u4e0b\u9762\u7684\u90e8\u5206\u8f6f\u4ef6\u5305\u662f\u5b89\u88c5\u4e0d\u4e86\u7684,\u5fc5\u987b\u9700\u8981\u68af\u5b50,\u5728\u542f\u52a8 lantern \u540e,\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 google-chrome\n# https_proxy=127.0.0.1:8787 brew cask install google-chrome\nbrew cask install lantern\n\n# \u57fa\u7840\u7a0b\u5e8f\nbrew install openssh autossh git mosh bash sshrc ssh-copy-id sshuttle tmux vim\n\n# Linux/GNU \u547d\u4ee4\n# \u8fd9\u4e9b gnu \u547d\u4ee4\u90fd\u6ca1\u7528 --with-default-names \u53c2\u6570,\u56e0\u6b64\u547d\u4ee4\u4f1a\u63a8\u8350\u4e00\u4e2a g \u524d\u7f00,\u4f8b\u5982 gawk\n# \u4f7f\u7528\u7684\u65f6\u5019\u6dfb\u52a0 /usr/local/opt/coreutils/libexec/gnubin \u8be5\u8def\u5f84\u5c31\u53ef\u4ee5\u4e86, \u4e0d\u9700\u8981 g \u524d\u7f00\nbrew install less nano file-formula findutils coreutils binutils diffutils wget rsync unzip gzip wdiff\nbrew install gnu-{indent,sed,tar,which,units,time} gnutls gpatch grep\nbrew install bash-completion2\n\n# \u57fa\u672c\u8bed\u8a00\u73af\u5883, \u53ef\u9009\u88c5\n# \u5982\u679c\u4f7f\u7528 nvm \u5219\u4e0d\u5b89\u88c5 node\n# python \u9ed8\u8ba4\u4e3a 3 \u53ef\u540c\u65f6\u5b89\u88c5 python@2\nbrew install ruby python go node\n# \u8865\u5168\nbrew install {pip,ruby,gem,bundler,open,maven,brew-cask,apm-bash}-completion\n\n# Java \u73af\u5883\n# \u4e0d\u5efa\u8bae\u901a\u8fc7 brew \u5b89\u88c5 java \u56e0\u4e3a\u6309\u4f4f\u7684\u662f\u6700\u65b0\u7248\uff0c\u5efa\u8bae\u81ea\u884c\u5b89\u88c5 LTS \u7248\n# brew cask install java\n# \u6700\u65b0 beta \u7248\u53ef\u5b89\u88c5 homebrew/cask-versions/java-beta\nbrew install maven\n# \u5efa\u8bae\u901a\u8fc7 toolbox \u5b89\u88c5 jetbrain \u7684 ide\n# brew cask install intellij-idea\n\n# \u6570\u636e\u5e93\n# \u53ef\u9009 mongodb mysql mariadb postgresql\nbrew install sqlite\n\n# \u65e5\u5e38\u5de5\u5177\nbrew cask install iterm2 google-chrome atom\n# xtrafinder \u5728 10.11 \u4e2d\u9700\u8981\u989d\u5916\u914d\u7f6e\u624d\u80fd\u4f7f\u7528\n# FinderPath \u65e0\u6cd5\u901a\u8fc7 cask \u5b89\u88c5\n\n# Java \u73af\u5883\nbrew cask install java7 java\nbrew install maven\nbrew cask install intellij-idea\n\n# OS X \u4e0b\u7684\u5e38\u7528\u5de5\u5177\n# \u4e5f\u53ef\u4ee5\u7528 AppleScript \u63d0\u4f9b\u7684\u547d\u4ee4\u5b9e\u73b0 https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_cmds.html#//apple_ref/doc/uid/TP40000983-CH216-SW224\nbrew install terminal-notifier\n\n# \u5728\u4e2d\u56fd\u7684\u57fa\u672c\u5de5\u5177\n# \u5982\u679c\u4e60\u60ef\u82f9\u679c\u7684\u8f93\u5165\u6cd5\u53ef\u4ee5\u8003\u8651\u4e0d\u5b89\u88c5 \u641c\u72d7\nbrew cask install qq sogouinput\nopen  /opt/homebrew-cask/Caskroom/sogouinput/*/\u5b89\u88c5\u641c\u72d7\u8f93\u5165\u6cd5.app\n# \u4e5f\u53ef\u4ee5\u5b89\u88c5\u767e\u5ea6\u4e91 baiducloud\n# brew cask install baiducloud\n\n# \u5a31\u4e50\u76f8\u5173\u7a0b\u5e8f\nbrew install youtube-dl ffmpeg cmus\nbrew install mpv # \u53ea\u662f\u547d\u4ee4\u884c\u542f\u52a8,\u672a\u5173\u8054\u6587\u4ef6, mpv --profile=pseudo-gui \u53ef\u542f\u52a8\u4f2a UI\n# mpv \u7684 app\nbrew cask install mpv\n\n# \u5e38\u7528\u8f85\u52a9\u5de5\u5177\nbrew install di pv jlhonora/lsusb/lsusb\n\n# \u5c0f\u5de5\u5177\nbrew install archey cmatrix cowsay fortune screenfetch sl\n\n# \u5c0f\u6e38\u620f\nbrew install c2048\n")),Object(l.b)("h3",{id:"\u66f4\u6539\u9ed8\u8ba4-shell"},"\u66f4\u6539\u9ed8\u8ba4 SHELL"),Object(l.b)("p",null,"OS X \u81ea\u5e26\u7684 Bash \u662f 3 \u7684,\u6709\u4e9b\u529f\u80fd\u4e0d\u652f\u6301,\u4f7f\u7528 Brew \u5b89\u88c5\u7684\u662f\u6700\u65b0\u7248\u7684 Bash, \u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4fee\u6539\u64cd\u4f5c\u7cfb\u7edf\u9ed8\u8ba4 SHELL"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"echo /usr/local/bin/bash | sudo tee -a /etc/shells\nchsh -s /usr/local/bin/bash\n")),Object(l.b)("h3",{id:"font"},"Font"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u6dfb\u52a0\u5b57\u4f53\u5e93\nbrew tap caskroom/fonts\n# \u641c\u7d22\u5b57\u4f53\n# brew cask search /monoid/ # \u652f\u6301 ligature \u7684\u7f16\u7a0b\u5b57\u4f53\n# brew cask search /noto/ # \u8c37\u6b4c\u7684 noto \u5b57\u4f53\n# brew cask install font-noto-emoji font-noto-color-emoji font-noto-sans-cjk-sc\n# fc-list : file family |grep \\/Library # \u67e5\u770b\u5b89\u88c5\u7684\u5b57\u4f53\n")),Object(l.b)("h3",{id:"fuse"},"FUSE"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Filesystem_in_Userspace"}),"FUSE")," \u662f ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://zh.wikipedia.org/wiki/FUSE"}),"\u7528\u6237\u7a7a\u95f4\u6587\u4ef6\u7cfb\u7edf"),",\u6bd4\u8f83\u5e38\u89c1\u7684\u4f7f\u7528\u60c5\u51b5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5c06\u8fdc\u7a0b\u670d\u52a1\u5668\u901a\u8fc7 SFTP \u6216\u8005 FTP \u6302\u5728\u5230\u672c\u5730"),Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u64cd\u4f5c\u7cfb\u7edf\u4e0d\u652f\u6301\u7684\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf\u52a0\u5bc6")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# OS X \u81ea\u8eab\u6ca1\u6709 FUSE \u652f\u6301,\u9700\u8981\u989d\u5916\u5b89\u88c5 osxfuse\nbrew cask install osxfuse\n\n# \u6dfb\u52a0 fuse \u4ed3\u5e93\n# \u6240\u6709\u652f\u6301\u7684 fs \u53ef\u5728 https://github.com/Homebrew/homebrew-fuse/tree/master/Formula \u770b\u5230\nbrew tap homebrew/fuse\n\n# \u4f7f\u7528\u65b9\u5f0f sshfs HOST:/opt ~/mnt \u5c06\u4e3b\u673a\u7684 /opt \u76ee\u5f55\u6620\u5c04\u5230\u672c\u5730\u7684 ~/mnt\nbrew install sshfs\n\n# \u7528\u4e8e\u76ee\u5f55\u6620\u5c04, OS X \u4e0b HFS+ \u6709\u6587\u4ef6\u76ee\u5f55\u7684\u786c\u94fe\u63a5,\u4f46\u53ea\u80fd\u662f\u540c\u78c1\u76d8\nbrew install bindfs\n# \u652f\u6301 MTP, \u5927\u591a\u6570\u662f\u60f3\u64cd\u4f5c\u624b\u673a\u6587\u4ef6\u7684\u65f6\u5019, OS X \u65e0\u6cd5\u76f4\u63a5\u64cd\u4f5c, Windows \u81ea\u5e26 MTP \u652f\u6301\n# simple-mtpfs --list-devices # \u67e5\u770b\u6240\u6709\u8bbe\u5907\n# simple-mtpfs --device 1  ~/mnt/android/ # \u6302\u8f7d\u8bbe\u5907\u53f7\u4e3a 1 \u7684 mtp \u5230 ~/mnt/android/\nbrew install simple-mtpfs\n\n# \u52a0\u5bc6\u7684\u6587\u4ef6\u7cfb\u7edf\n# encfs ~/data/enc ~/mnt/enc # \u5c06 ~/data/enc \u4f5c\u4e3a\u52a0\u5bc6\u6570\u636e\u7684\u5b58\u50a8\u76ee\u5f55, ~/mnt/enc \u4e3a\u6302\u8f7d\u70b9\n# \u7b2c\u4e00\u6b21\u6267\u884c\u65f6\u9009\u62e9 p \u8fdb\u5165\u9884\u7f6e\u6a21\u5f0f,\u7136\u540e\u8f93\u5165\u5bc6\u7801,\u4e4b\u540e\u6302\u8f7d\u7684\u65f6\u5019\u90fd\u9700\u8981\u8f93\u5165\u5bc6\u7801\nbrew install encfs\n\n# \u5c06 zip \u6302\u8f7d\u4e3a\u4e00\u4e2a\u6587\u4ef6\u76ee\u5f55\n# fuse-zip data.zip ~/mnt/zip/\nbrew install fuse-zip\n# \u5c06\u5f52\u6863\u6587\u4ef6\u6302\u8f7d\u4e3a\u6587\u4ef6\u76ee\u5f55\nbrew install avfs\n# \u5c06 BT \u79cd\u5b50\u6302\u8f7d\u4e3a\u76ee\u5f55\nbrew install btfs\n")),Object(l.b)("h3",{id:"tex"},"Tex"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# \u5b8c\u6574\u7684 MacTex \u76f8\u5f53\u5927,\u53ef\u4ee5\u53ea\u5b89\u88c5 BasicTex \u7136\u540e\u901a\u8fc7 tlmgr \u5b89\u88c5\u989d\u5916\u7684\u5305\n# http://www.tug.org/mactex/morepackages.html\n# export PATH="$PATH:/Library/TeX/texbin/"\n# tlmgr update --self\n# tlmgr install collection-fontsrecommended\nbrew cask install basictex\n')),Object(l.b)("h3",{id:"php"},"PHP"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Homebrew/homebrew-php"}),"homebrew-php"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew tap homebrew/dupes\nbrew tap homebrew/versions\nbrew tap homebrew/homebrew-php\n# \u5b89\u88c5\u9700\u8981\u7684\u7248\u672c\nbrew install php56\n")),Object(l.b)("p",null,"\u591a\u7248\u672c PHP \u53ef\u4f7f\u7528 ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wilmoore/php-version"}),"php-version")," \u63a7\u5236"),Object(l.b)("h3",{id:"\u5bb9\u5668\u76f8\u5173"},"\u5bb9\u5668\u76f8\u5173"),Object(l.b)("p",null,"\u5982\u679c\u60f3\u8981\u4f7f\u7528\u4f8b\u5982 Docker \u4e4b\u7c7b\u7684\u5bb9\u5668\u6280\u672f,\u53ef\u5b89\u88c5\u4e0b\u5217\u8f6f\u4ef6\u5305"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u57fa\u7840 Docker \u4f9d\u8d56\nbrew install docker docker-machine docker-machine-driver-xhyve docker-compose docker-swarm\nbrew cask install virtualbox vagrant\n\nbrew install {docker,docker-machine,docker-compose,vagrant}-completion docker-machine-completion\n")),Object(l.b)("h2",{id:"linuxbrew"},"Linuxbrew"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"http://linuxbrew.sh/"}),"Linuxbrew")," \u662f Brew \u7684 Linux \u79fb\u690d\u7248, \u652f\u6301\u5927\u591a\u7684\u5b89\u88c5\u5305."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Ubuntu \u4f9d\u8d56\nsudo apt-get install build-essential curl git m4 python-setuptools ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev\n\n# Centos \u4f9d\u8d56\nsudo yum groupinstall 'Development Tools' && sudo yum install curl git irb m4 python-setuptools ruby texinfo bzip2-devel curl-devel expat-devel ncurses-devel zlib-devel\n\n# \u5b89\u88c5 Linuxbrew\nruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)\"\n")),Object(l.b)("h2",{id:"\u4f7f\u7528-gcc-\u800c\u4e0d\u4f7f\u7528-clang"},"\u4f7f\u7528 gcc \u800c\u4e0d\u4f7f\u7528 clang"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd /usr/local/bin\nVER=8\nfor v in gcc c++ g++ cpp; do ln -s $v-$VER $v; done\n\n# \u6062\u590d\nfor v in gcc c++ g++ cpp; do unlink $v; done\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"\u7f13\u5b58\u76ee\u5f55"},"\u7f13\u5b58\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Homebrew",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"~/Library/Caches/Homebrew")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/Hombrew")))),Object(l.b)("li",{parentName:"ul"},"Cask",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e9\u671f\u5b58\u50a8\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/opt/homebrew-cask/Caskroom/")),Object(l.b)("li",{parentName:"ul"},"\u540e\u8fc1\u79fb\u81f3 ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/Caskroom/")),Object(l.b)("li",{parentName:"ul"},"\u518d\u540e\u6765 ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/Hombrew/Cask"))))),Object(l.b)("h3",{id:"\u624b\u52a8\u4e0b\u8f7d\u672a\u4e0b\u8f7d\u5b8c\u6210\u7684\u5b89\u88c5\u5305"},"\u624b\u52a8\u4e0b\u8f7d\u672a\u4e0b\u8f7d\u5b8c\u6210\u7684\u5b89\u88c5\u5305"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd /Library/Caches/Homebrew/\nfor f in `echo *.incomplete`; do\n  echo Manual download ${f%.incomplete}\n  aria2c -c -j 10 https://homebrew.bintray.com/bottles/${f%.incomplete} && rm $f\ndone\n")),Object(l.b)("h3",{id:"xcode-\u7248\u672c\u68c0\u6d4b\u9519\u8bef"},"xcode \u7248\u672c\u68c0\u6d4b\u9519\u8bef"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u663e\u793a\u5f53\u524d\u4f7f\u7528\u7684\u7248\u672c\nxcode-select -p\n# \u5207\u6362\u4e3a\u53e6\u5916\u7684\u7248\u672c\nsudo xcode-select --switch /Applications/Xcode.app/Contents/Developer\n")),Object(l.b)("h3",{id:"dir_s_mkdir-permission-denied"},"dir_s_mkdir permission denied"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Homebrew/homebrew-core/issues/19789"}),"#19789"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew link ruby -- dir_s_mkdir permission denied\nfind /usr/local -not -uid $(id -u)\nfind /usr/local -not -uid $(id -u) | xargs -n 1 sudo chown -R $(whoami)\n")),Object(l.b)("h3",{id:"openjdk"},"openjdk"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'sudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk\n# export PATH="/usr/local/opt/openjdk/bin:$PATH"\n')))}s.isMDXComponent=!0},766:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);