(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{557:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,b(b({ref:t},l),{},{components:n})):r.a.createElement(d,b({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,s[1]=b;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(7),i=(n(0),n(557)),s={id:"smb",title:"Samba"},b={unversionedId:"ops/storage/fs/smb",id:"ops/storage/fs/smb",isDocsHomePage:!1,title:"Samba",description:"SMB",source:"@site/contents/tricks/ops/storage/fs/smb.md",slug:"/ops/storage/fs/smb",permalink:"/notes/ops/storage/fs/smb",version:"current",sidebar:"docs",previous:{title:"NFS",permalink:"/notes/ops/storage/fs/nfs"},next:{title:"NTFS",permalink:"/notes/ops/storage/fs/ntfs"}},o=[{value:"Tips",id:"tips",children:[]},{value:"Quick start",id:"quick-start",children:[]},{value:"smb.conf",id:"smbconf",children:[]},{value:"smbd --help",id:"smbd---help",children:[]},{value:"FAQ",id:"faq",children:[{value:"CIFS vs SMB",id:"cifs-vs-smb",children:[]},{value:"NT_STATUS_BAD_NETWORK_NAME",id:"nt_status_bad_network_name",children:[]},{value:"MacOS \u4e0b\u65e0\u6cd5\u4f7f\u7528",id:"macos-\u4e0b\u65e0\u6cd5\u4f7f\u7528",children:[]},{value:"NT_STATUS_INVALID_NETWORK_RESPONSE",id:"nt_status_invalid_network_response",children:[]}]},{value:"NTLMv1 NT_STATUS_WRONG_PASSWORD",id:"ntlmv1-nt_status_wrong_password",children:[{value:"mounting cifs: \u201cOperation not supported\u201d",id:"mounting-cifs-operation-not-supported",children:[]}]}],l={rightToc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"smb"},"SMB"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.samba.org/samba/docs/Samba3-ByExample.pdf"}),"Samba3 by Example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.samba.org/samba/docs/Samba3-HOWTO.pdf"}),"Samba3 How to")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Server_Message_Block"}),"Server Message Block")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/CIFSD"}),"CIFSD")," - in-kernel CIFS/SMB server"),Object(i.b)("li",{parentName:"ul"},"Wikipedia ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Samba_(software)"}),"Samba")),Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u7684\u7528\u6237\u540d\u5fc5\u987b\u8981\u5148\u5b58\u5728\u4e8e\u7cfb\u7edf\u4e2d,\u5373\u9700\u8981\u5148 ",Object(i.b)("inlineCode",{parentName:"li"},"useradd")),Object(i.b)("li",{parentName:"ul"},"\u7981\u7528\u6253\u5370\u673a\u670d\u52a1")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"load printers = no\nprinting = bsd\nprintcap name = /dev/null\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5141\u8bb8\u8bbf\u5ba2\u767b\u9646",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"guest ok = yes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"smbclient  //127.0.0.1/public -U guest")))),Object(i.b)("li",{parentName:"ul"},"smb.conf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.samba.org/samba/docs/using_samba/ch06.html"}),"Using samba ch06")),Object(i.b)("li",{parentName:"ul"},"man ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.samba.org/samba/docs/man/manpages/smb.conf.5.html"}),"smb.conf")))),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"137 netbios-ns NETBIOS Name Service"),Object(i.b)("li",{parentName:"ul"},"138 netbios-dgm NETBIOS Datagram Service"),Object(i.b)("li",{parentName:"ul"},"139/udp/tcp netbios-ssn NETBIOS Session Service"),Object(i.b)("li",{parentName:"ul"},"445/tcp NetBIOS was moved to 445 after 2000 and beyond, (CIFS)"))),Object(i.b)("li",{parentName:"ul"},"\u76f8\u5173\u7aef\u53e3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"901 SWAT service (not related to client communication)"),Object(i.b)("li",{parentName:"ul"},"445 microsoft-ds \u57df\u63a7"))),Object(i.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"smbd"),Object(i.b)("li",{parentName:"ul"},"nmbd"))),Object(i.b)("li",{parentName:"ul"},"\u5de5\u5177",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"smbstatus - \u67e5\u770b\u670d\u52a1\u72b6\u6001",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f53\u524d\u6587\u4ef6\u9501"))),Object(i.b)("li",{parentName:"ul"},"eventlogadm"))),Object(i.b)("li",{parentName:"ul"},"samba-dc",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"samba-tool"),Object(i.b)("li",{parentName:"ul"},"samba - gpupdate dnsupdate downgrade_db kcc spnupdate upgradedns"))),Object(i.b)("li",{parentName:"ul"},"samba-winbind",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"winbindd")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5e26 samba \u7684\u955c\u50cf\ndocker run --rm -it -p 139:139 -p 445:445 -v $PWD:/share -w /share wener/samba sh\n\n# \u6216\u8005 APK \u5b89\u88c5\napk add samba samba-dc\n\n# Linux\nmount -t cifs -o username=username,password=password,uid=33,gid=33,rw,nounix,iocharset=utf8,file_mode=0777,dir_mode=0777 //192.168.1.120/storage /mnt/storage\nmount -t cifs -o credentials=/root/.the-creds-file,uid=33,gid=33,rw,nounix,iocharset=utf8,file_mode=0777,dir_mode=0777 //192.168.1.120/storage /mnt/storage\n# this-creds-file\n# username=winuser\n# password=winpass\n\n# fstab\n# //192.168.1.120/storage /mnt/storage        cifs    credentials=/root/.smbcredentials,uid=33,gid=33,rw,nounix,iocharset=utf8,file_mode=0777,dir_mode=0777 0 0\n\n# Windows\nnet use Z: \\\\computer_name\\share_name /PERSISTENT:YES\n# \u65ad\u5f00\u8fde\u63a5\nnet use  Z: /delete\n\nsmbcontrol all reload-config\n# killall -HUP smbd nmbd\n")),Object(i.b)("h2",{id:"quick-start"},"Quick start"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"guest \u9700\u8981 ",Object(i.b)("inlineCode",{parentName:"li"},"map to guest = Bad User"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Debian: apt-get install samba samba-client\n\nmkdir -p ~/temp/share && cd $_\nmkdir private state usershare public\nchmod 755 public\ncat <<CONF > smbd.ini\n[global]\nlog file = $PWD/log.%m\nidmap config * : backend = tdb\nstate directory = $PWD/state\nusershare path = $PWD/usershare\nprivate dir = $PWD/private\nsmb passwd file = $PWD/private/smbpasswd\n\n[public]\ncomment = Public share\npath = $PWD/public\nvalid users = wener\nread only = No\nCONF\n# \u65b0\u5efa\u7528\u6237, \u5bc6\u7801\u4e0d\u9700\u8981\u548c\u7cfb\u7edf\u5bc6\u7801\u76f8\u540c, \u4f46\u9700\u8981\u5b58\u5728\u8be5\u7528\u6237\n# -s /sbin/nologin -d /dev/null\n# \u9ed8\u8ba4 state \u8def\u5f84\u4e3a /var/lib/samba/ \u540e\u7aef\u9ed8\u8ba4\u4e3a tdb\nadduser wener -DH\nsmbpasswd -L -c smbd.ini -a wener\n\n# \u68c0\u6d4b\u914d\u7f6e\u6b63\u786e\ntestparm smbd.ini\n# \u8f93\u51fa\u6700\u7ec8\u914d\u7f6e\ntestparm -v smbd.ini\n\n# \u542f\u52a8\u670d\u52a1\nsmbd -s smbd.ini\n\n# \u4f8b\u4e3e\u6240\u6709\u5171\u4eab\nsmbclient  -L //127.0.0.1/public -U wener\n# \u8fde\u63a5\nsmbclient  //127.0.0.1/public -U wener\n# Linux: smb://<HOST_IP_OR_NAME>/<folder_name>/\n# Windows: \\\\<HOST_IP_OR_NAME>\\<folder_name>\\\n\n# \u6302\u8f7d smb, \u4fee\u6539\u5bc6\u7801\u4e3a\u4e4b\u524d\u8f93\u5165\u7684\u5bc6\u7801\nmount -t smbfs //wener:wener@localhost/public ~/mnt/smb/\nmount \u2013t smbfs //localhost/public ~/mnt/smb/ \u2013o username=wener\n\nmount -t cifs -o user=luke //192.168.1.1/share /mnt\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html"}),"https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html")),Object(i.b)("h2",{id:"smbconf"},"smb.conf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html"}),"smb.conf.5")),Object(i.b)("li",{parentName:"ul"},"\u7279\u6b8a section",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"global",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5168\u5c40\u914d\u7f6e\u6216\u9ed8\u8ba4\u914d\u7f6e"))),Object(i.b)("li",{parentName:"ul"},"homes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u4e86\uff0c\u5219\u652f\u6301\u81ea\u52a8\u521b\u5efa HOME \u76ee\u5f55"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"%S")," \u7528\u6237\u5b8f ",Object(i.b)("inlineCode",{parentName:"li"},"path = /data/users/%S")))),Object(i.b)("li",{parentName:"ul"},"printers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e homes\uff0c\u4f46\u662f\u7528\u4e8e\u6253\u5370\u673a")))))),Object(i.b)("p",null,"tdb (idmap_tdb(8)), tdb2 (idmap_tdb2(8)), ldap (idmap_ldap(8)), rid (idmap_rid(8)), hash (idmap_hash(8)), autorid (idmap_autorid(8)), ad (idmap_ad(8)), nss (idmap_nss(8)), and rfc2307 (idmap_rfc2307(8))."),Object(i.b)("p",null,"idmap_tdb\nSamba's idmap_tdb Backend for Winbind"),Object(i.b)("p",null,"The idmap_tdb plugin is the default backend used by winbindd for storing SID/uid/gid mapping tables."),Object(i.b)("p",null,"In contrast to read only backends like idmap_rid, it is an allocating backend: This means that it needs to allocate new user and group IDs in order to create new mappings."),Object(i.b)("p",null,"range = low - high\nDefines the available matching uid and gid range for which the backend is authoritative."),Object(i.b)("p",null,"idmap_tdb2 \u2014 Samba's idmap_tdb2 Backend for Winbind\nThe idmap_tdb2 plugin is a substitute for the default idmap_tdb backend used by winbindd for storing SID/uid/gid mapping tables in clustered environments with Samba and CTDB."),Object(i.b)("p",null,"script\nThis option can be used to configure an external program for performing id mappings instead of using the tdb counter. The mappings are then stored int tdb2 idmap database. For details see the section on IDMAP SCRIPT below."),Object(i.b)("p",null,"idmap config * : script = /usr/local/samba/bin/idmap_script.sh"),Object(i.b)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528 hash"),Object(i.b)("p",null,"The idmap_ad plugin provides a way for Winbind to read id mappings from an AD server that uses RFC2307/SFU schema extensions. "),Object(i.b)("p",null,"\"map to guest = Bad User\" will reject a user if that user is in the server's samba password database but has the wrong password. But if the client user name doesn't exist in the samba password database he is converted to the guest account and then it's up to a given share definition to determine if he can gain access."),Object(i.b)("p",null,"\"map to guest = Never\" makes the exact same comparison to the database but if it doesn't find that user it doesn't convert the user to the guest account it just rejects him and that user isn't even allowed to view the share list."),Object(i.b)("p",null,"Don't pass a username and the \"map to guest\" logic is never used at the browse level and that's what a Linux client does unless you force it.."),Object(i.b)("p",null,"Starting with v4.0, Samba is (or can be):"),Object(i.b)("p",null,"a file server\na DNS server\nan LDAP server\na Kerberos server\nan AD server"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller"}),"https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller")),Object(i.b)("p",null,"Create an Active Directory Infrastructure with Samba4 on Ubuntu\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.tecmint.com/install-samba4-active-directory-ubuntu/"}),"https://www.tecmint.com/install-samba4-active-directory-ubuntu/")),Object(i.b)("p",null,"Windows 7 Service Pack 1 (SP1) \u8fdc\u7a0b\u670d\u52a1\u5668\u7ba1\u7406\u5de5\u5177\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=7887"}),"https://www.microsoft.com/zh-cn/download/details.aspx?id=7887")),Object(i.b)("p",null,"Alpine Linux based container (aka Docker) for Samba 4 Active Directory\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tkaefer/alpine-samba-ad-container"}),"https://github.com/tkaefer/alpine-samba-ad-container")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dperson/samba"}),"https://github.com/dperson/samba")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cptactionhank/docker-netatalk"}),"https://github.com/cptactionhank/docker-netatalk")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"# \u5168\u5c40\u914d\u7f6e\n# \u5176\u4ed6 sestion \u7684\u9ed8\u8ba4\u914d\u7f6e\n[global]\nsecurity = domain\nworkgroup = MAIN\n\nstate directory = ${prefix}/var/locks\n\nusershare path = ${prefix}/var/locks/usershares\n\n# \u670d\u52a1\u8fd4\u56de\u4fe1\u606f\nserver string = server %h\n# \u4e0d\u8d77\u540d\u533f\u540d\nmap to guest = never\n\nidmap config * : backend        = tdb\nidmap config * : range          = 1000000-1999999\n\nidmap config MAIN : backend     = rid\nidmap config MAIN : range       = 5000000-5999999\n\nidmap config TRUSTED : backend  = rid\nidmap config TRUSTED : range    = 6000000-6999999\n\n# \u670d\u52a1\u4f1a\u5728\u94fe\u63a5\u662f\u521b\u5efa\u4e3b\u76ee\u5f55\n[homes]\npath = /data/pchome/%S\n\n# \u548c [homes] \u7c7b\u4f3c, \u4f46\u662f\u9488\u5bf9\u6253\u5370\u673a\u7684\n[printers]\npath = /usr/spool/public\nguest ok = yes\nprintable = yes\n\n[foo]\n# \u5907\u6ce8\ncomment = Public share\n# \u8def\u5f84\npath = /data/share/public\n# \u7528\u6237\nvalid users = wener\n# \u662f\u5426\u53ea\u8bfb\nread only = No\n")),Object(i.b)("p",null,"socket options = TCP_NODELAY IPTOS_LOWDELAY SO_RCVBUF=65536 SO_SNDBUF=65536"),Object(i.b)("p",null,"docker run --rm -it --cap-add SYS_ADMIN --cap-add DAC_READ_SEARCH -v $PWD:/share -w /share wener/samba sh"),Object(i.b)("p",null,"mount -t cifs //10.88.2.202/share $PWD/mnt -o user=user,password=pass"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"[global]\nworkgroup = MYGROUP\nserver string = Samba Server\nserver role = standalone server\nlog file = /usr/local/samba/var/log.%m\nmax log size = 50\ndns proxy = no\n\nidmap config * : backend = tdb\n\nhosts allow = 192.168.0.\n\n[public]\ncomment = Public share\npath = /data/share\nread only = No\nvalid users = share\n\nbrowsable = yes\nwritable = yes\ncreate mask = 0775\ndirectory mask = 0755\n")),Object(i.b)("h2",{id:"smbd---help"},"smbd --help"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Usage: smbd [OPTION...]\n  -D, --daemon                            Become a daemon (default)\n  -i, --interactive                       Run interactive (not a daemon) and log to stdout\n  -F, --foreground                        Run daemon in foreground (for daemontools, etc.)\n      --no-process-group                  Don't create a new process group\n  -S, --log-stdout                        Log to stdout\n  -b, --build-options                     Print build options\n  -p, --port=STRING                       Listen on the specified ports\n  -P, --profiling-level=PROFILE_LEVEL     Set profiling level\n\nHelp options:\n  -?, --help                              Show this help message\n      --usage                             Display brief usage message\n\nCommon samba options:\n  -d, --debuglevel=DEBUGLEVEL             Set debug level\n  -s, --configfile=CONFIGFILE             Use alternate configuration file\n  -l, --log-basename=LOGFILEBASE          Base name for log files\n  -V, --version                           Print version\n      --option=name=value                 Set smb.conf option from command line\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"cifs-vs-smb"},"CIFS vs SMB"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.varonis.com/cifs-vs-smb/"}),"CIFS vs SMB"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"CIFS \u662f SMB \u7684\u65b9\u8a00")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5efa\u8bae\u7edf\u4e00\u4f7f\u7528 SMB")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Windows Vista/Windows 2006 SMBv2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Windows 8/Windows 2012 SMBv3"))),Object(i.b)("h3",{id:"nt_status_bad_network_name"},"NT_STATUS_BAD_NETWORK_NAME"),Object(i.b)("p",null,"\u53ef\u80fd\u662f\u56e0\u4e3a\u76ee\u5f55\u6ca1\u6709\u6743\u9650"),Object(i.b)("h3",{id:"macos-\u4e0b\u65e0\u6cd5\u4f7f\u7528"},"MacOS \u4e0b\u65e0\u6cd5\u4f7f\u7528"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.spiceworks.com/topic/2085366-can-samba-active-directory-and-afp-run-simultaneously"}),"https://community.spiceworks.com/topic/2085366-can-samba-active-directory-and-afp-run-simultaneously")),Object(i.b)("h3",{id:"nt_status_invalid_network_response"},"NT_STATUS_INVALID_NETWORK_RESPONSE"),Object(i.b)("p",null,"\u53ef\u80fd\u662f min protocol \u5bfc\u81f4\u7684\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linuxquestions.org/questions/linux-networking-3/samba-min-protocol-%3D-smb2-causes-protocol-negotiation-failed-nt_status_invalid_network_response-4175597669/"}),"https://www.linuxquestions.org/questions/linux-networking-3/samba-min-protocol-%3D-smb2-causes-protocol-negotiation-failed-nt_status_invalid_network_response-4175597669/")),Object(i.b)("h2",{id:"ntlmv1-nt_status_wrong_password"},"NTLMv1 NT_STATUS_WRONG_PASSWORD"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Samba \u9ed8\u8ba4\u53ea\u5141\u8bb8 NTLMv2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539\u4e3a\u5141\u8bb8 v1 ",Object(i.b)("inlineCode",{parentName:"li"},"ntlm auth = ntlmv1-permitted")))),Object(i.b)("li",{parentName:"ul"},"\u6216\u8005 Windows \u4fee\u6539\u4e3a\u4f7f\u7528 v2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"secpol.msc")),Object(i.b)("li",{parentName:"ul"},"NTLMv2 response only/refuse LM and NTLM."))),Object(i.b)("li",{parentName:"ul"},"Windows 7 \u5f00\u59cb\u9ed8\u8ba4 NTLMv2 \u4f46\u6709\u53ef\u80fd\u5f00\u542f\u5171\u4eab\u65f6\u88ab\u914d\u7f6e\u6210\u4e86 v1")),Object(i.b)("h3",{id:"mounting-cifs-operation-not-supported"},"mounting cifs: \u201cOperation not supported\u201d"),Object(i.b)("p",null,"\u5c1d\u8bd5\u6dfb\u52a0 vers=3.0 \u9009\u9879"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mount -t cifs //192.168.1.1/share /mnt -o user=username,password=passwordd,vers=3.0\n")))}c.isMDXComponent=!0}}]);