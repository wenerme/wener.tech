"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55299],{91919:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(96600),r=n(27279),o=(n(59496),n(3905)),s=["components"],i={id:"share",title:"Share"},l="File Share",u={unversionedId:"ops/storage/network/share",id:"ops/storage/network/share",title:"Share",description:"- AFP vs. SMB and NFS file sharing for network clients",source:"@site/notes/ops/storage/network/share.md",sourceDirName:"ops/storage/network",slug:"/ops/storage/network/share",permalink:"/notes/ops/storage/network/share",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/network/share.md",tags:[],version:"current",frontMatter:{id:"share",title:"Share"},sidebar:"docs",previous:{title:"NFS",permalink:"/notes/ops/storage/network/nfs"},next:{title:"SSHFS",permalink:"/notes/ops/storage/network/sshfs"}},p={},c=[{value:"FTP",id:"ftp",level:2},{value:"OS X",id:"os-x",level:3},{value:"Pure-FTPd",id:"pure-ftpd",level:3},{value:"vsftp",id:"vsftp",level:3},{value:"vsftpd.conf.example",id:"vsftpdconfexample",level:4},{value:"Share",id:"share",level:2},{value:"Syncany",id:"syncany",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-share"},"File Share"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.helios.de/web/EN/news/AFP_vs_SMB-NFS.html"},"AFP vs. SMB and NFS file sharing for network clients"))),(0,o.kt)("h2",{id:"ftp"},"FTP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.pureftpd.org/project/pure-ftpd"},"pure-ftpd"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pure-FTPd"},"Pure-FTPd:wikipedia")),(0,o.kt)("li",{parentName:"ul"},"Pure-FTPd \u975e\u5e38\u7b80\u5355\u7684 FTP \u670d\u52a1, \u53ea\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"li"},"pure-ftpd &")," \u5373\u53ef."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://security.appspot.com/vsftpd.html"},"vsftpd"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Vsftpd"},"vsftpd:wikipedia")),(0,o.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u8f83\u4e3a\u5b89\u5168\u5e76\u4e14\u8fc5\u901f\u7a33\u5b9a."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.proftpd.org/"},"ProFTPD"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ProFTPD"},"ProFTPD:wikipedia")),(0,o.kt)("li",{parentName:"ul"},"\u6709\u8f83\u591a\u7684\u7279\u6027")))),(0,o.kt)("h3",{id:"os-x"},"OS X"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u81ea\u5e26\u7684 FTP \u6587\u4ef6\u5171\u4eab\nsudo -s launchctl load -w /System/Library/LaunchDaemons/ftp.plist\nftp localhost\nsftp localhost\n# \u5173\u95ed FTP \u670d\u52a1\nsudo -s launchctl unload -w /System/Library/LaunchDaemons/ftp.plist\n")),(0,o.kt)("h3",{id:"pure-ftpd"},"Pure-FTPd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a group for Pure-FTPD.\n# OS X http://serverfault.com/questions/20702\ngroupadd ftpgroup\n# Add a user to the group (revoke the home directory and deny acces to shell login).\nuseradd -g ftpgroup -d /dev/null -s /etc ftpuser\n\n\n# Create a directory for your ftp-files (you can also specify a specific user e.g.: /root/ftphome/bob).\nmkdir /root/ftphome\n\n# Create a ftp-user, in our example "bob" (again you can set "-d /root/ftphome/bob/" if you wish).\npure-pw useradd bob -u ftpuser -g ftpgroup -d /root/ftphome/\n\n\n# Update the ftp database after adding our new user.\npure-pw mkdb\n\n# This is optional, you can list the users in the database, and enumerate spesific users...\npure-pw list\npure-pw show bob\n\n# We set symbolic links for some files.\nln -s /etc/pure-ftpd/pureftpd.passwd /etc/pureftpd.passwd\nln -s /etc/pure-ftpd/pureftpd.pdb /etc/pureftpd.pdb\nln -s /etc/pure-ftpd/conf/PureDB /etc/pure-ftpd/auth/PureDB\n\n# The specified ftp directory (and all it\'s sub-direcotries) needs to be owned by "ftpuser".\nchown -R ftpuser:ftpgroup /root/ftphome\n# Finally we restart Pure-FTPD. You should now be able to log in with your created user account.\npure-ftpd restart\n')),(0,o.kt)("h3",{id:"vsftp"},"vsftp"),(0,o.kt)("h4",{id:"vsftpdconfexample"},"vsftpd.conf.example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'# Example config file /etc/vsftpd.conf\n#\n# The default compiled in settings are fairly paranoid. This sample file\n# loosens things up a bit, to make the ftp daemon more usable.\n# Please see vsftpd.conf.5 for all compiled in defaults.\n#\n# READ THIS: This example file is NOT an exhaustive list of vsftpd options.\n# Please read the vsftpd.conf.5 manual page to get a full idea of vsftpd\'s\n# capabilities.\n#\n# Allow anonymous FTP? (Beware - allowed by default if you comment this out).\nanonymous_enable=YES\n#\n# Uncomment this to allow local users to log in.\n#local_enable=YES\n#\n# Uncomment this to enable any form of FTP write command.\n#write_enable=YES\n#\n# Default umask for local users is 077. You may wish to change this to 022,\n# if your users expect that (022 is used by most other ftpd\'s)\n#local_umask=022\n#\n# Uncomment this to allow the anonymous FTP user to upload files. This only\n# has an effect if the above global write enable is activated. Also, you will\n# obviously need to create a directory writable by the FTP user.\n#anon_upload_enable=YES\n#\n# Uncomment this if you want the anonymous FTP user to be able to create\n# new directories.\n#anon_mkdir_write_enable=YES\n#\n# Activate directory messages - messages given to remote users when they\n# go into a certain directory.\ndirmessage_enable=YES\n#\n# Activate logging of uploads/downloads.\nxferlog_enable=YES\n#\n# Make sure PORT transfer connections originate from port 20 (ftp-data).\nconnect_from_port_20=YES\n#\n# If you want, you can arrange for uploaded anonymous files to be owned by\n# a different user. Note! Using "root" for uploaded files is not\n# recommended!\n#chown_uploads=YES\n#chown_username=whoever\n#\n# You may override where the log file goes if you like. The default is shown\n# below.\n#xferlog_file=/var/log/vsftpd.log\n#\n# If you want, you can have your log file in standard ftpd xferlog format.\n# Note that the default log file location is /var/log/xferlog in this case.\n#xferlog_std_format=YES\n#\n# You may change the default value for timing out an idle session.\n#idle_session_timeout=600\n#\n# You may change the default value for timing out a data connection.\n#data_connection_timeout=120\n#\n# It is recommended that you define on your system a unique user which the\n# ftp server can use as a totally isolated and unprivileged user.\n#nopriv_user=ftpsecure\n#\n# Enable this and the server will recognise asynchronous ABOR requests. Not\n# recommended for security (the code is non-trivial). Not enabling it,\n# however, may confuse older FTP clients.\n#async_abor_enable=YES\n#\n# By default the server will pretend to allow ASCII mode but in fact ignore\n# the request. Turn on the below options to have the server actually do ASCII\n# mangling on files when in ASCII mode.\n# Beware that on some FTP servers, ASCII support allows a denial of service\n# attack (DoS) via the command "SIZE /big/file" in ASCII mode. vsftpd\n# predicted this attack and has always been safe, reporting the size of the\n# raw file.\n# ASCII mangling is a horrible feature of the protocol.\n#ascii_upload_enable=YES\n#ascii_download_enable=YES\n#\n# You may fully customise the login banner string:\n#ftpd_banner=Welcome to blah FTP service.\n#\n# You may specify a file of disallowed anonymous e-mail addresses. Apparently\n# useful for combatting certain DoS attacks.\n#deny_email_enable=YES\n# (default follows)\n#banned_email_file=/etc/vsftpd.banned_emails\n#\n# You may specify an explicit list of local users to chroot() to their home\n# directory. If chroot_local_user is YES, then this list becomes a list of\n# users to NOT chroot().\n# (Warning! chroot\'ing can be very dangerous. If using chroot, make sure that\n# the user does not have write access to the top level directory within the\n# chroot)\n#chroot_local_user=YES\n#chroot_list_enable=YES\n# (default follows)\n#chroot_list_file=/etc/vsftpd.chroot_list\n#\n# You may activate the "-R" option to the builtin ls. This is disabled by\n# default to avoid remote users being able to cause excessive I/O on large\n# sites. However, some broken FTP clients such as "ncftp" and "mirror" assume\n# the presence of the "-R" option, so there is a strong case for enabling it.\n#ls_recurse_enable=YES\n#\n# When "listen" directive is enabled, vsftpd runs in standalone mode and\n# listens on IPv4 sockets. This directive cannot be used in conjunction\n# with the listen_ipv6 directive.\nlisten=YES\n#\n# This directive enables listening on IPv6 sockets. To listen on IPv4 and IPv6\n# sockets, you must run two copies of vsftpd with two configuration files.\n# Make sure, that one of the listen options is commented !!\n#listen_ipv6=YES\n')),(0,o.kt)("h2",{id:"share"},"Share"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ignacionelson/ProjectSend"},"ProjectSend"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Star < 100"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hbons/SparkleShare"},"SparkleShare"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"C#"),(0,o.kt)("li",{parentName:"ul"},"Star 3k"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/syncany/syncany"},"Syncany"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Java"),(0,o.kt)("li",{parentName:"ul"},"Star 1k"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/haiwen/seafile"},"seafile"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"C++"),(0,o.kt)("li",{parentName:"ul"},"Star 3k"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/owncloud/core"},"ownCloud"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PHP"),(0,o.kt)("li",{parentName:"ul"},"Star 4k")))),(0,o.kt)("h2",{id:"syncany"},"Syncany"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install https://get.syncany.org/homebrew/syncany.rb\n# http://syncany.readthedocs.org/en/latest/commands.html\nsy init\nsy status\nsy down\nsy up\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);