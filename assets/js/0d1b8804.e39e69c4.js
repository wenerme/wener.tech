"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44610],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return N}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(a),k=r,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7514:function(e,t,a){a.r(t),a.d(t,{assets:function(){return _},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return N},metadata:function(){return f},toc:function(){return y}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a};const N={title:"Linux PAM"},d="Linux PAM",f={unversionedId:"os/linux/linux-pam",id:"os/linux/linux-pam",title:"Linux PAM",description:"- linux-pam/linux-pam",source:"@site/../notes/os/linux/linux-pam.md",sourceDirName:"os/linux",slug:"/os/linux/pam",permalink:"/notes/os/linux/pam",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/linux-pam.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1670745441,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{title:"Linux PAM"},sidebar:"docs",previous:{title:"Linux Glossary",permalink:"/notes/os/linux/glossary"},next:{title:"Linux Releases",permalink:"/notes/os/linux/version"}},_={},y=[{value:"pam.conf",id:"pamconf",level:2},{value:"pam.d",id:"pamd",level:2},{value:"modules",id:"modules",level:2}],h={toc:y},b="wrapper";function g(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(b,c(s(s({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"linux-pam"}),"Linux PAM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/linux-pam/linux-pam"}),"linux-pam/linux-pam")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?file=&path=&name=linux-pam&branch=edge&arch=x86_64"}),"https://pkgs.alpinelinux.org/contents?file=&path=&name=linux-pam&branch=edge&arch=x86_64"))),(0,n.kt)("h2",s({},{id:"pamconf"}),"pam.conf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/pam.d/<service>"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type control module-path module-arguments")))),(0,n.kt)("li",{parentName:"ul"},"service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"su"),(0,n.kt)("li",{parentName:"ul"},"login"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"other")," - \u9ed8\u8ba4"))),(0,n.kt)("li",{parentName:"ul"},"type",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"account"),(0,n.kt)("li",{parentName:"ul"},"auth"),(0,n.kt)("li",{parentName:"ul"},"password"),(0,n.kt)("li",{parentName:"ul"},"session"))),(0,n.kt)("li",{parentName:"ul"},"control",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"required"),(0,n.kt)("li",{parentName:"ul"},"requisite"),(0,n.kt)("li",{parentName:"ul"},"sufficient"),(0,n.kt)("li",{parentName:"ul"},"optional"),(0,n.kt)("li",{parentName:"ul"},"include"),(0,n.kt)("li",{parentName:"ul"},"substack"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value1=action1 value2=action2")))),(0,n.kt)("li",{parentName:"ul"},"module-path",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u6216\u76f8\u5bf9"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/lib/security/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"/lib64/security/"))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-txt",metastring:'title="/etc/pam.d/su"',title:'"/etc/pam.d/su"'}),"# basic PAM configuration for Alpine.\nauth            sufficient      pam_rootok.so\nauth            include         base-auth\naccount         include         base-account\npassword        include         base-password\nsession         include         base-session-noninteractive\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/pam.conf.5.html"}),"https://man7.org/linux/man-pages/man5/pam.conf.5.html"))),(0,n.kt)("h2",s({},{id:"pamd"}),"pam.d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"base-account"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",s({parentName:"pre"},{}),"account     required    pam_unix.so\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"base-auth"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",s({parentName:"pre"},{}),"auth    required    pam_env.so\nauth    required    pam_unix.so nullok_secure\nauth    required    pam_nologin.so  successok\n\nauth    sufficient  pam_unix.so nullok try_first_pass\n\naccount required    pam_nologin.so\naccount sufficient  pam_unix.so\n\npassword    sufficient  pam_unix.so nullok sha512 shadow try_first_pass use_authtok\n\n-session    optional    pam_loginuid.so\n-session    optional    pam_elogind.so\nsession sufficient  pam_unix.so\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"base-password"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",s({parentName:"pre"},{}),"password    required    pam_unix.so nullok md5 sha512\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"base-session"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",s({parentName:"pre"},{}),"session     include     base-session-noninteractive\nsession     required    pam_motd.so\n-session    optional    pam_elogind.so\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"base-session-noninteractive"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",s({parentName:"pre"},{}),"session     required    pam_limits.so\nsession     required    pam_unix.so\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"chpasswd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"groupadd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"groupdel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"groupmems")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"groupmod")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"newusers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"other")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"polkit-1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"su")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"system-local-login")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"system-login")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"system-login.apk-new")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"useradd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"userdel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"usermod"))),(0,n.kt)("h2",s({},{id:"modules"}),"modules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pam_access.so"),(0,n.kt)("li",{parentName:"ul"},"pam_cgfs.so"),(0,n.kt)("li",{parentName:"ul"},"pam_debug.so"),(0,n.kt)("li",{parentName:"ul"},"pam_deny.so"),(0,n.kt)("li",{parentName:"ul"},"pam_echo.so"),(0,n.kt)("li",{parentName:"ul"},"pam_env.so"),(0,n.kt)("li",{parentName:"ul"},"pam_exec.so"),(0,n.kt)("li",{parentName:"ul"},"pam_faildelay.so"),(0,n.kt)("li",{parentName:"ul"},"pam_faillock.so"),(0,n.kt)("li",{parentName:"ul"},"pam_filter.so"),(0,n.kt)("li",{parentName:"ul"},"pam_ftp.so"),(0,n.kt)("li",{parentName:"ul"},"pam_group.so"),(0,n.kt)("li",{parentName:"ul"},"pam_issue.so"),(0,n.kt)("li",{parentName:"ul"},"pam_keyinit.so"),(0,n.kt)("li",{parentName:"ul"},"pam_limits.so"),(0,n.kt)("li",{parentName:"ul"},"pam_listfile.so"),(0,n.kt)("li",{parentName:"ul"},"pam_localuser.so"),(0,n.kt)("li",{parentName:"ul"},"pam_loginuid.so"),(0,n.kt)("li",{parentName:"ul"},"pam_mail.so"),(0,n.kt)("li",{parentName:"ul"},"pam_mkhomedir.so"),(0,n.kt)("li",{parentName:"ul"},"pam_motd.so"),(0,n.kt)("li",{parentName:"ul"},"pam_namespace.so"),(0,n.kt)("li",{parentName:"ul"},"pam_nologin.so"),(0,n.kt)("li",{parentName:"ul"},"pam_permit.so"),(0,n.kt)("li",{parentName:"ul"},"pam_pwhistory.so"),(0,n.kt)("li",{parentName:"ul"},"pam_rootok.so"),(0,n.kt)("li",{parentName:"ul"},"pam_securetty.so"),(0,n.kt)("li",{parentName:"ul"},"pam_setquota.so"),(0,n.kt)("li",{parentName:"ul"},"pam_shells.so"),(0,n.kt)("li",{parentName:"ul"},"pam_stress.so"),(0,n.kt)("li",{parentName:"ul"},"pam_succeed_if.so"),(0,n.kt)("li",{parentName:"ul"},"pam_time.so"),(0,n.kt)("li",{parentName:"ul"},"pam_timestamp.so"),(0,n.kt)("li",{parentName:"ul"},"pam_umask.so"),(0,n.kt)("li",{parentName:"ul"},"pam_unix.so"),(0,n.kt)("li",{parentName:"ul"},"pam_usertype.so"),(0,n.kt)("li",{parentName:"ul"},"pam_warn.so"),(0,n.kt)("li",{parentName:"ul"},"pam_wheel.so"),(0,n.kt)("li",{parentName:"ul"},"pam_xauth.so")))}g.isMDXComponent=!0}}]);