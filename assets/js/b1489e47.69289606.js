"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25222],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},577:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"rsync"},s=void 0,p={unversionedId:"ops/storage/tool/rsync",id:"ops/storage/tool/rsync",title:"rsync",description:"- \u53c2\u8003",source:"@site/notes/ops/storage/tool/rsync.md",sourceDirName:"ops/storage/tool",slug:"/ops/storage/tool/rsync",permalink:"/notes/ops/storage/tool/rsync",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/tool/rsync.md",tags:[],version:"current",frontMatter:{title:"rsync"},sidebar:"docs",previous:{title:"restic",permalink:"/notes/ops/storage/tool/restic"},next:{title:"Alpine",permalink:"/notes/os/alpine/"}},c={},m=[{value:"\u5e76\u884c",id:"\u5e76\u884c",level:2}],u={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/rsync.1.html"},"rsync.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cheatography.com/richardjh/cheat-sheets/rsync/"},"https://www.cheatography.com/richardjh/cheat-sheets/rsync/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/rsync"},"https://wiki.archlinux.org/index.php/rsync")),(0,l.kt)("li",{parentName:"ul"},"unison",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cis.upenn.edu/~bcpierce/unison/"},"https://www.cis.upenn.edu/~bcpierce/unison/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--info=progress2")," \u663e\u793a\u901f\u5ea6")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"rsync \u4e0d\u652f\u6301\u68c0\u6d4b rename, --fuzzy \u80fd\u5bf9\u540d\u5b57\u505a\u6a21\u7cca\u5339\u914d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rclone \u652f\u6301\u57fa\u4e8e hash, modtime, leaf \u68c0\u6d4b rename"))),(0,l.kt)("li",{parentName:"ul"},"rsync \u4e0d\u652f\u6301\u5e76\u884c - rclone \u652f\u6301\u5e76\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u590d\u6742\u7684\u540c\u6b65\u573a\u666f\u63a8\u8350 ",(0,l.kt)("a",{parentName:"li",href:"/notes/ops/storage/tool/rclone"},"rclone")),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u590d\u6742\u7684\u5907\u4efd\u573a\u666f\u63a8\u8350 ",(0,l.kt)("a",{parentName:"li",href:"/notes/ops/storage/tool/restic"},"restic"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flags"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--archive, -a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-rlptgoD"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--recursive, -r"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--links, -l"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--perms, -p"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--times, -t"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--owner, -o"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--group, -g"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-D"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--devices --specials"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose, -v"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--progress"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4f20\u8f93\u8fdb\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--partial"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u90e8\u5206\u4f20\u8f93\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-P"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--partial --progress"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--stats"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--remove-source-files"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u540e\u5220\u9664\u6e90\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--human-readable, -h"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rsync src dst")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"rsync src/ dst/src")," - src \u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u8868\u793a\u4e0d\u521b\u5efa\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"dst \u5982\u679c\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u5219\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\u76ee\u5f55\uff0c\u5426\u5219\u4f1a\u88ab\u590d\u5236\u4e3a\u6307\u5b9a\u6587\u4ef6"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528 SSH \u540c\u6b65\nrsync -avz -e ssh remoteuser@remotehost:/remote/dir /this/dir/\n\n# \u8fdc\u7a0b\u4f7f\u7528 sudo\nrsync --rsync-path="sudo rsync" -avz dnsmasq/ admin@10.1.1.1:/etc/dnsmasq/\n\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u4e0d\u540c\u6b65\u6743\u9650\u7528\u6237\u5206\u7ec4\u4fe1\u606f\nrsync -avz --no-perms --no-owner --no-group mnt/wener abuild/\n\n# \u914d\u5408 fswatch \u4f7f\u7528\n# \u62f7\u8d1d\nfswatch ./ | xargs -I{} cp {} ~/Dropbox/backup/latest/\n# rsync\nalias run_rsync=\'rsync -azP --exclude ".*/" --exclude ".*" --exclude "tmp/" ~/Documents/repos/my_repository username@host:~\'\nrun_rsync\nfswatch -o . | while read f; do run_rsync; done\n')),(0,l.kt)("h2",{id:"\u5e76\u884c"},"\u5e76\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -avzm --stats --safe-links --ignore-existing --dry-run \\\n  --human-readable /data/projects REMOTE-HOST:/data/ > /tmp/transfer.log\n\n# --relative \u8981\u6c42\u5728 /data/projects \u6267\u884c\ncat /tmp/transfer.log \\\n  | parallel --will-cite -j 5 rsync -avzm --relative \\\n    --stats --safe-links --ignore-existing \\\n    --human-readable {} REMOTE-HOST:/data/ > result.log\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync"},"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/189878"},"https://unix.stackexchange.com/questions/189878"))))}d.isMDXComponent=!0}}]);