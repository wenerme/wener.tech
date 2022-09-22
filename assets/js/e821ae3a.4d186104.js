"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15862],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var i=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,v=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return t?i.createElement(v,a(a({ref:n},u),{},{components:t})):i.createElement(v,a({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72060:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var i=t(96600),r=t(27279),l=(t(59496),t(49613)),a=["components"],o={id:"libvirtd",title:"Libvirt Daemon"},s="Libvirt Daemon",c={unversionedId:"os/virt/libvirtd",id:"os/virt/libvirtd",title:"Libvirt Daemon",description:"Tips",source:"@site/../notes/os/virt/libvirtd.md",sourceDirName:"os/virt",slug:"/os/virt/libvirtd",permalink:"/notes/os/virt/libvirtd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/virt/libvirtd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"libvirtd",title:"Libvirt Daemon"},sidebar:"docs",previous:{title:"Libvirt",permalink:"/notes/os/virt/libvirt"},next:{title:"lima",permalink:"/notes/os/virt/lima"}},u={},m=[{value:"Tips",id:"tips",level:2},{value:"libvirt.conf",id:"libvirtconf",level:2},{value:"libvirtd.conf",id:"libvirtdconf",level:2}],d={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"libvirt-daemon"},"Libvirt Daemon"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/var/run/libvirt/libvirt-sock"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 tcp \u7aef\u53e3 16509"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/mcastelino/9a57d00ccf245b98de2129f0efe39857"},"Simple vsock setup for QEMU")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qemu:///session"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528\uff0c\u5c3d\u91cf\u4f7f\u7528 system")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'virsh -c unix:///var/run/libvirt/libvirt-sock list\n\n# macOS\n# ==========\nbrew install libvirt\n\n# \u8c03\u6574\u914d\u7f6e\uff0c\u5141\u8bb8\u7528\u6237\u76f4\u63a5\u64cd\u4f5c\n# unix_sock_group = "staff"\n# unix_sock_rw_perms = "0770"\nnano /usr/local/etc/libvirt/libvirtd.conf\n\n# \u542f\u52a8\u670d\u52a1\u7aef\nsudo libvirtd -v\n# \u6216\u8005\u4f7f\u7528 brew \u8fdb\u884c\u670d\u52a1\u7ba1\u7406\nbrew services start libvirt\n\n# \u5ba2\u6237\u7aef\u8fde\u63a5\nvirsh -c qemu:///system list\n')),(0,l.kt)("h2",{id:"libvirtconf"},"libvirt.conf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\b\u5f53\u524d\u7528\u6237\u914d\u7f6e\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"$XDG_CONFIG_HOME/libvirt/libvirt.conf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c ",(0,l.kt)("inlineCode",{parentName:"li"},"XDG_CONFIG_HOME=$HOME/.config"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'# \u94fe\u63a5\u522b\u540d\n#uri_aliases = [\n#  "hail=qemu+ssh://root@hail.cloud.example.com/system",\n#  "sleet=qemu+ssh://root@sleet.cloud.example.com/system",\n#]\n\n# \u9ed8\u8ba4\u94fe\u63a5\n#uri_default = "qemu:///system"\n')),(0,l.kt)("h2",{id:"libvirtdconf"},"libvirtd.conf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://libvirt.org/format.html"},"https://libvirt.org/format.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'# Libvirtd Daemon \u7f51\u7edc\u8fde\u901a\u6027\u63a7\u5236\n# ====================\n# TLS \u76d1\u542c - \u5fc5\u987b\u8981\u6307\u5b9a --listen\n#listen_tls = 0\n\n# TCP \u76d1\u542c - \u672a\u52a0\u5bc6\uff0c\u9700\u8981 --listen\n# \u9ed8\u8ba4\u9700\u8981 SASL \u8ba4\u8bc1 - DIGEST_MD5\u3001GSSAPI\n#listen_tcp = 1\n\n# TLS \u7aef\u53e3\u6216\u670d\u52a1\u540d\n#tls_port = "16514"\n# TCP \u7aef\u53e3\u6216\u670d\u52a1\u540d\n#tcp_port = "16509"\n\n# \u76d1\u542c\u5730\u5740 - \u9ed8\u8ba4\u76d1\u542c\u6240\u6709\n#listen_addr = "192.168.0.1"\n\n# mDNS \u5e7f\u64ad libvirt \u670d\u52a1 - \u914d\u5408 Host \u4e0a\u7684 Avahi daemon\n#mdns_adv = 1\n\n# mDNS \u670d\u52a1\u540d\u5b57 - \u9ed8\u8ba4 "Virtualization Host ${HOSTNAME}"\n#mdns_name = "Virtualization Host Joe Demo"\n\n# Libvirtd Daemon UNIX Socket \u8bbf\u95ee\u63a7\u5236\n# ====================\n# \u5206\u7ec4\u6743\u9650 - \u9ed8\u8ba4\u53ea\u5141\u8bb8 root\n# unix_sock_group = "libvirt"\n\n# \u53ea\u8bfb socket \u6743\u9650 - \u9ed8\u8ba4 0777\n# \u5982\u679c\u8bbe\u7f6e\u4e86\u5206\u7ec4\u6743\u9650\uff0c\u4e5f\u53ef\u4ee5\u8003\u8651\u8bbe\u7f6e\u53ea\u8bfb\u6743\u9650\n#unix_sock_ro_perms = "0777"\n\n# \u8bfb\u5199 socket \u6743\u9650 - \u9ed8\u8ba4\u53ea\u6709 root\n# \u5982\u679c\u8bbe\u7f6e\u4e86\u5206\u7ec4\u6743\u9650\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a 0700\n# \u5982\u679c\u6ca1\u6709\u4f7f\u7528 PolicyKit \u5219\u53ef\u4ee5\u8003\u8651\u653e\u677e\u6743\u9650\n# unix_sock_rw_perms = "0770"\n\n# \u7ba1\u7406 socket \u6743\u9650 - \u9ed8\u8ba4\u5141\u8bb8 owner\n#unix_sock_admin_perms = "0700"\n\n# socket \u8def\u5f84 - linux \u4e00\u822c\u9ed8\u8ba4\u4e3a /run/libvirt\n#unix_sock_dir = "/usr/local/var/run/libvirt"\n\n\n# \u8ba4\u8bc1\n# =====================\n# none - \u4e0d\u505a\u8ba4\u8bc1\u68c0\u67e5\uff0c\u80fd\u8fde\u63a5\u5c31\u80fd\u8bbf\u95ee - \u9002\u7528\u4e8e unix scoket \u573a\u666f\n# sasl - TCP GSSAPI & DIGEST-MD5 schema \u4e3a /usr/local/etc/sasl2/libvirt.conf - \u975e TCP \u4efb\u4f55 schema \u90fd\u53ef\u4ee5\n# polkit - UNIX sockets \u65f6\n\n# \u53ea\u8bfb unix sockets \u8ba4\u8bc1\n#auth_unix_ro = "none"\n\n# \u8bfb\u5199 unix sockets \u8ba4\u8bc1\n#auth_unix_rw = "none"\n\n# tcp \u8ba4\u8bc1\u65b9\u5f0f - \u9ed8\u8ba4 sasl\n#auth_tcp = "sasl"\n\n# tls \u8ba4\u8bc1\u65b9\u5f0f - \u56e0\u4e3a tls \u901a\u8fc7\u52a0\u5bc6\u8bc1\u4e66\u5df2\u7ecf\u8ba4\u8bc1\u4e86\uff0c\u6240\u4ee5\u53ef\u4ee5\u5173\u95ed\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 sasl\u3002\n#auth_tls = "none"\n\n# API \u8bbf\u95ee\u63a7\u5236 schema - \u9ed8\u8ba4\u542f\u7528\u4e86 \'nop\'\n#access_drivers = [ "polkit" ]\n\n# TLS x509 \u8bc1\u4e66\u914d\u7f6e\n# =====================\n# \u9ed8\u8ba4\u4f4d\u7f6e\n#   /usr/local/etc/pki/CA/cacert.pem                 - The CA master certificate\n#   /usr/local/etc/pki/libvirt/servercert.pem        - The server certificate signed with the cacert.pem\n#   /usr/local/etc/pki/libvirt/private/serverkey.pem - The server private key\n#\n# It is possible to override the default locations by altering the \'key_file\',\n# \'cert_file\', and \'ca_file\' values and uncommenting them below.\n#\n# NB, overriding the default of one location requires uncommenting and\n# possibly additionally overriding the other settings.\n#\n\n#key_file = "/usr/local/etc/pki/libvirt/private/serverkey.pem"\n#cert_file = "/usr/local/etc/pki/libvirt/servercert.pem"\n#ca_file = "/usr/local/etc/pki/CA/cacert.pem"\n#crl_file = "/usr/local/etc/pki/CA/crl.pem"\n\n# \u9274\u6743\u63a7\u5236\n# =====================\n# Flag to disable verification of our own server certificates\n#\n# When libvirtd starts it performs some sanity checks against\n# its own certificates.\n#\n# Default is to always run sanity checks. Uncommenting this\n# will disable sanity checks which is not a good idea\n#tls_no_sanity_certificate = 1\n\n# Flag to disable verification of client certificates\n#\n# Client certificate verification is the primary authentication mechanism.\n# Any client which does not present a certificate signed by the CA\n# will be rejected.\n#\n# Default is to always verify. Uncommenting this will disable\n# verification - make sure an IP whitelist is set\n#tls_no_verify_certificate = 1\n\n\n# A whitelist of allowed x509 Distinguished Names\n# This list may contain wildcards such as\n#\n#    "C=GB,ST=London,L=London,O=Red Hat,CN=*"\n#\n# See the POSIX fnmatch function for the format of the wildcards.\n#\n# NB If this is an empty list, no client can connect, so comment out\n# entirely rather than using empty list to disable these checks\n#\n# By default, no DN\'s are checked\n#tls_allowed_dn_list = ["DN1", "DN2"]\n\n\n# A whitelist of allowed SASL usernames. The format for username\n# depends on the SASL authentication mechanism. Kerberos usernames\n# look like username@REALM\n#\n# This list may contain wildcards such as\n#\n#    "*@EXAMPLE.COM"\n#\n# See the POSIX fnmatch function for the format of the wildcards.\n#\n# NB If this is an empty list, no client can connect, so comment out\n# entirely rather than using empty list to disable these checks\n#\n# By default, no Username\'s are checked\n#sasl_allowed_username_list = ["joe@EXAMPLE.COM", "fred@EXAMPLE.COM" ]\n\n\n# Override the compile time default TLS priority string. The\n# default is usually "NORMAL" unless overridden at build time.\n# Only set this is it is desired for libvirt to deviate from\n# the global default settings.\n#\n#tls_priority="NORMAL"\n\n\n# \u8fdb\u7a0b\u63a7\u5236\n# =====================\n# \u5ba2\u6237\u7aef\u8fde\u63a5\u6570\n#max_clients = 5000\n\n# \u6700\u5927\u7b49\u5f85\u7684\u5ba2\u6237\u7aef\u6570\n#max_queued_clients = 1000\n\n# \u6700\u5927\u533f\u540d\u5ba2\u6237\u7aef\u6570 - \u8bbe\u7f6e\u4e3a 0 \u53ef\u7981\u7528\n#max_anonymous_clients = 20\n\n# \u8fdb\u7a0b\u6570 - \u4e00\u822c\u5c06\u6700\u5927\u503c\u8bbe\u7f6e\u4e3a\u6700\u5927\u5141\u8bb8\u7684\u5ba2\u6237\u7aef\u6570\n#min_workers = 5\n#max_workers = 20\n\n# \u4f18\u5148 worker \u6570 - \u4f8b\u5982 domainDestroy \u4f1a\u4f18\u5148\n#prio_workers = 5\n\n# \u5355\u4e2a\u5ba2\u6237\u7aef\u5e76\u884c\u8bf7\u6c42\u6570\n#max_client_requests = 5\n\n# \u7ba1\u7406\u63a5\u53e3\u8fdb\u7a0b\u63a7\u5236\n#admin_min_workers = 1\n#admin_max_workers = 5\n#admin_max_clients = 5\n#admin_max_queued_clients = 5\n#admin_max_client_requests = 5\n\n# \u65e5\u5fd7\u63a7\u5236\n# =====================\n# \u7ea7\u522b: 4 errors, 3 warnings, 2 information, 1 debug\n# journald \u53ea\u5141\u8bb8 3\u30014\n# \u4e0d\u5efa\u8bae\u8bbe\u7f6e\u4e3a 1\n#log_level = 3\n\n# \u65e5\u5fd7\u8fc7\u6ee4\uff0c\u8c03\u6574\u5339\u914d\u7684\u65e5\u5fd7\u7ea7\u522b:\n#    level:match\n#    level:+match\n# \u5206\u7c7b\u4f8b\u5982 "remote", "qemu", "util.json"\uff0c \u4f7f\u7528 glob \u5339\u914d\uff0c \u6709 + \u4f1a\u8f93\u51fa\u5806\u6808\n# \u7a7a\u683c\u5206\u5272\u8bbe\u7f6e\u591a\u4e2a\u89c4\u5219\uff0c\u4f46\u5339\u914d\u7b2c\u4e00\u4e2a\n#\n# \u4f8b\u5982 debug qemu \u548c hypervisor \u9a71\u52a8\u573a\u666f\n#log_filters="1:qemu 1:libvirt 4:object 4:json 4:event 1:util"\n\n# \u65e5\u5fd7\u8f93\u51fa:\n#    level:stderr\n#    level:syslog:name - name \u4f5c\u4e3a ident\n#    level:file:file_path\n#    level:journald\n# \u7a7a\u683c\u5206\u5272\u8bbe\u7f6e\u591a\u4e2a\n#log_outputs="3:syslog:libvirtd"\n\n# \u5ba1\u8ba1\n# =====================\n# audit \u5b50\u7cfb\u7edf\n#   audit_level == 0  -> \u7981\u7528\n#   audit_level == 1  -> \u542f\u7528,\u5bbf\u4e3b\u673a(\u9ed8\u8ba4)\n#   audit_level == 2  -> \u542f\u7528, and exit if disabled on host\n#\n#audit_level = 2\n#\n# \u8bbe\u7f6e\u4e3a 1 \u5219\u4e5f\u53ef\u4ee5\u8f93\u51fa\u5230\u65e5\u5fd7 - \u9ed8\u8ba4 0\n#audit_logging = 1\n\n# \u4e3b\u673a ID\n# =====================\n# \u9ed8\u8ba4\u4f7f\u7528 host_uuid_source.\n#\n# - \'smbios\': \'dmidecode -s system-uuid\'\n# - \'machine-id\': /usr/local/etc/machine-id\n#\n# \u5982\u679c dmidecode \u6ca1\u6709\u83b7\u53d6\u5230\u5219\u4f1a\u751f\u6210\u4e34\u65f6\u7684\n\n# \u76f4\u63a5\u8bbe\u7f6e\n#host_uuid = "00000000-0000-0000-0000-000000000000"\n#host_uuid_source = "smbios"\n\n# Keepalive \u534f\u8bae\n# =====================\n# \u68c0\u6d4b\u4e2d\u65ad\u7684\u6216\u5df2\u65ad\u5f00\u7684\u5ba2\u6237\u7aef\n#\n# \u53d1\u9001 keepalive \u6d88\u606f\u95f4\u9694 - \u8bbe\u7f6e\u4e3a -1 \u5219\u4e0d\u53d1\u9001\n#keepalive_interval = 5\n# \u6700\u5927\u5931\u8d25\u6570\u91cf - \u6700\u957f\u68c0\u6d4b\u65f6\u95f4\u4e3a keepalive_interval * (keepalive_count + 1)\n# \u8bbe\u7f6e\u4e3a 0 \u5219\u8fbe\u5230\u95f4\u9694\u540e\u76f4\u63a5\u65ad\u5f00\n#keepalive_count = 5\n\n# \u4e0d\u518d\u4f7f\u7528\n#keepalive_required = 1\n#admin_keepalive_required = 1\n\n# \u7ba1\u7406\u63a5\u53e3\n#admin_keepalive_interval = 5\n#admin_keepalive_count = 5\n\n# Open vSwitch:\n# =====================\n# ovs \u4ea4\u4e92\u8d85\u65f6\u65f6\u95f4 - ovs-vsctl\n#ovs_timeout = 5\n')))}p.isMDXComponent=!0}}]);