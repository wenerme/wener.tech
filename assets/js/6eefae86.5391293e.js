"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70040],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},g=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return t?r.createElement(m,p(p({ref:n},g),{},{components:t})):r.createElement(m,p({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},27285:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return g},default:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),p=["components"],s={title:"GPG"},o=void 0,l={unversionedId:"ops/admin/gpg",id:"ops/admin/gpg",isDocsHomePage:!1,title:"GPG",description:"- GNU Privacy Guard",source:"@site/notes/ops/admin/gpg.md",sourceDirName:"ops/admin",slug:"/ops/admin/gpg",permalink:"/notes/ops/admin/gpg",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/gpg.md",tags:[],version:"current",frontMatter:{title:"GPG"},sidebar:"docs",previous:{title:"gopaas",permalink:"/notes/ops/admin/gopaas"},next:{title:"htop",permalink:"/notes/ops/admin/htop"}},g=[{value:"gpg-agent.conf",id:"gpg-agentconf",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5931\u6548\u540e\u64cd\u4f5c",id:"\u5931\u6548\u540e\u64cd\u4f5c",children:[]},{value:"gpg: lookup_hashtable failed: Unknown system error",id:"gpg-lookup_hashtable-failed-unknown-system-error",children:[]}]},{value:"gpg --help",id:"gpg---help",children:[]}],u={toc:g};function c(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GNU_Privacy_Guard"},"GNU Privacy Guard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gnupg.org/documentation/manuals/gnupg/GPG-Commands.html"},"https://gnupg.org/documentation/manuals/gnupg/GPG-Commands.html")),(0,i.kt)("li",{parentName:"ul"},"Cheatsheet",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://stuff.imeos.org/persistent/gpg-cheatsheet.pdf"},"http://stuff.imeos.org/persistent/gpg-cheatsheet.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devhints.io/gnupg"},"https://devhints.io/gnupg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/"},"http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/")))),(0,i.kt)("li",{parentName:"ul"},"Public keyservers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"pgp.mit.edu"),(0,i.kt)("li",{parentName:"ul"},"keys.gnupg.net"),(0,i.kt)("li",{parentName:"ul"},"sks-keyservers.net"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.gnupg/pubring.gpg"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install gpg\n# \u5bf9\u8bdd\u6846\u8f93\u5165\nbrew install pinentry-mac\n\n# \u751f\u6210\u79d8\u94a5\ngpg --gen-key\n\n# gpg -k\ngpg --list-keys\ngpg --list-secret-keys\n\n# \u63d0\u4ea4\u5230\u670d\u52a1\u5668\ngpg --keyserver hkp://pgp.mit.edu --send-keys $KEYID\n# \u9a8c\u8bc1\u662f\u5426\u6210\u529f\ngpg --keyserver hkp://pgp.mit.edu --recv-keys $KEYID\n\n# \u5bfc\u51fa\ngpg --export-secret-keys $KEYID > private.key\n# \u5bfc\u5165\ngpg --import private.key\n\n# \u914d\u7f6e\u4fe1\u606f\ngpgconf --list-components\n# check password\ngpg --dry-run --passwd $KEYID\n")),(0,i.kt)("h2",{id:"gpg-agentconf"},"gpg-agent.conf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"~/.gnupg/gpg-agent.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pinentry-program /usr/local/bin/pinentry-mac\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"\u5931\u6548\u540e\u64cd\u4f5c"},"\u5931\u6548\u540e\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --edit-key $KEYID\nlist\n\nkey 0\nexpire\n\nkey 1\nexpire\n\nlist    # \u786e\u8ba4\nsave    # \u4fdd\u5b58\u9000\u51fa\n")),(0,i.kt)("h3",{id:"gpg-lookup_hashtable-failed-unknown-system-error"},"gpg: lookup_hashtable failed: Unknown system error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gpg --fix-trustdb\n\ncd ~/.gnupg\ngpg --export-ownertrust > otrust.tmp\nrm trustdb.gpg\ngpg --import-ownertrust < otrust.tmp\n")),(0,i.kt)("h2",{id:"gpg---help"},"gpg --help"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gpg (GnuPG) 2.2.5\nlibgcrypt 1.8.2\nCopyright (C) 2018 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: /Users/user/.gnupg\n\u652f\u6301\u7684\u7b97\u6cd5\uff1a\n\u516c\u94a5\uff1aRSA, ELG, DSA, ECDH, ECDSA, EDDSA\n\u5bf9\u79f0\u52a0\u5bc6\uff1aIDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256,\n     TWOFISH, CAMELLIA128, CAMELLIA192, CAMELLIA256\n\u6563\u5217\uff1aSHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\n\u538b\u7f29\uff1a\u4e0d\u538b\u7f29, ZIP, ZLIB, BZIP2\n\nSyntax: gpg [options] [files]\nSign, check, encrypt or decrypt\nDefault operation depends on the input data\n\n\u6307\u4ee4\uff1a\n\n -s, --sign                  make a signature\n     --clear-sign            make a clear text signature\n -b, --detach-sign           \u751f\u6210\u4e00\u4efd\u5206\u79bb\u7684\u7b7e\u540d\n -e, --encrypt               \u52a0\u5bc6\u6570\u636e\n -c, --symmetric             \u4ec5\u4f7f\u7528\u5bf9\u79f0\u52a0\u5bc6\n -d, --decrypt               \u89e3\u5bc6\u6570\u636e(\u9ed8\u8ba4)\n     --verify                \u9a8c\u8bc1\u7b7e\u540d\n -k, --list-keys             \u5217\u51fa\u5bc6\u94a5\n     --list-signatures       \u5217\u51fa\u5bc6\u94a5\u548c\u7b7e\u540d\n     --check-signatures      \u5217\u51fa\u5e76\u68c0\u67e5\u5bc6\u94a5\u7b7e\u540d\n     --fingerprint           \u5217\u51fa\u5bc6\u94a5\u548c\u6307\u7eb9\n -K, --list-secret-keys      \u5217\u51fa\u79c1\u94a5\n     --generate-key          \u751f\u6210\u4e00\u526f\u65b0\u7684\u5bc6\u94a5\u5bf9\n     --quick-generate-key    quickly generate a new key pair\n     --quick-add-uid         quickly add a new user-id\n     --quick-revoke-uid      quickly revoke a user-id\n     --quick-set-expire      quickly set a new expiration date\n     --full-generate-key     full featured key pair generation\n     --generate-revocation   \u751f\u6210\u4e00\u4efd\u540a\u9500\u8bc1\u4e66\n     --delete-keys           \u4ece\u516c\u94a5\u94a5\u5319\u73af\u91cc\u5220\u9664\u5bc6\u94a5\n     --delete-secret-keys    \u4ece\u79c1\u94a5\u94a5\u5319\u73af\u91cc\u5220\u9664\u5bc6\u94a5\n     --quick-sign-key        quickly sign a key\n     --quick-lsign-key       quickly sign a key locally\n     --sign-key              \u4e3a\u67d0\u628a\u5bc6\u94a5\u6dfb\u52a0\u7b7e\u540d\n     --lsign-key             \u4e3a\u67d0\u628a\u5bc6\u94a5\u6dfb\u52a0\u672c\u5730\u7b7e\u540d\n     --edit-key              \u7f16\u8f91\u67d0\u628a\u5bc6\u94a5\u6216\u4e3a\u5176\u6dfb\u52a0\u7b7e\u540d\n     --change-passphrase     change a passphrase\n     --export                \u5bfc\u51fa\u5bc6\u94a5\n     --send-keys             \u628a\u5bc6\u94a5\u5bfc\u51fa\u5230\u67d0\u4e2a\u516c\u94a5\u670d\u52a1\u5668\u4e0a\n     --receive-keys          \u4ece\u516c\u94a5\u670d\u52a1\u5668\u4e0a\u5bfc\u5165\u5bc6\u94a5\n     --search-keys           \u5728\u516c\u94a5\u670d\u52a1\u5668\u4e0a\u641c\u5bfb\u5bc6\u94a5\n     --refresh-keys          \u4ece\u516c\u94a5\u670d\u52a1\u5668\u66f4\u65b0\u6240\u6709\u7684\u672c\u5730\u5bc6\u94a5\n     --import                \u5bfc\u5165/\u5408\u5e76\u5bc6\u94a5\n     --card-status           \u6253\u5370\u5361\u72b6\u6001\n     --edit-card             \u66f4\u6539\u5361\u4e0a\u7684\u6570\u636e\n     --change-pin            \u66f4\u6539\u5361\u7684 PIN\n     --update-trustdb        \u66f4\u65b0\u4fe1\u4efb\u5ea6\u6570\u636e\u5e93\n     --print-md              print message digests\n     --server                run in server mode\n     --tofu-policy VALUE     set the TOFU policy for a key\n\n\u9009\u9879\uff1a\n\n -a, --armor                 \u8f93\u51fa\u7ecf ASCII \u5c01\u88c5\n -r, --recipient USER-ID     encrypt for USER-ID\n -u, --local-user USER-ID    use USER-ID to sign or decrypt\n -z N                        set compress level to N (0 disables)\n     --textmode              \u4f7f\u7528\u6807\u51c6\u7684\u6587\u672c\u6a21\u5f0f\n -o, --output FILE           write output to FILE\n -v, --verbose               \u8be6\u7ec6\u6a21\u5f0f\n -n, --dry-run               \u4e0d\u505a\u4efb\u4f55\u6539\u53d8\n -i, --interactive           \u8986\u76d6\u524d\u5148\u8be2\u95ee\n     --openpgp               \u884c\u4e3a\u4e25\u683c\u9075\u5faa OpenPGP \u5b9a\u4e49\n\n(\u8bf7\u53c2\u8003\u5728\u7ebf\u8bf4\u660e\u4ee5\u83b7\u5f97\u6240\u6709\u547d\u4ee4\u548c\u9009\u9879\u7684\u5b8c\u6574\u6e05\u5355)\n\nExamples:\n\n -se -r Bob [file]          sign and encrypt for user Bob\n --clear-sign [file]        make a clear text signature\n --detach-sign [file]       make a detached signature\n --list-keys [names]        show keys\n --fingerprint [names]      show fingerprints\n\n\u8bf7\u5411 <https://bugs.gnupg.org> \u62a5\u544a\u7a0b\u5e8f\u7f3a\u9677\u3002\n\u8bf7\u5411 <zuxyhere@eastday.com> \u53cd\u6620\u7b80\u4f53\u4e2d\u6587\u7ffb\u8bd1\u7684\u95ee\u9898\u3002\n")))}c.isMDXComponent=!0}}]);