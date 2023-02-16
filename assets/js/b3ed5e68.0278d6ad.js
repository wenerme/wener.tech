"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68153],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=d(n),h=o,m=f["".concat(l,".").concat(h)]||f[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var a=n(49613),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&c(e,n,t[n]);return e};const f={title:"macOS Network",tags:["Network"]},h="macOS Network",m={unversionedId:"os/darwin/macos-network",id:"os/darwin/macos-network",title:"macOS Network",description:"ifconfig",source:"@site/../notes/os/darwin/macos-network.md",sourceDirName:"os/darwin",slug:"/os/darwin/macos-network",permalink:"/notes/os/darwin/macos-network",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/darwin/macos-network.md",tags:[{label:"Network",permalink:"/notes/tags/network"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675953425,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{title:"macOS Network",tags:["Network"]},sidebar:"docs",previous:{title:"macOS \u672f\u8bed\u8868",permalink:"/notes/os/darwin/macos-glossary"},next:{title:"macOS Version",permalink:"/notes/os/darwin/macos-version"}},p={},y=[{value:"ifconfig",id:"ifconfig",level:2}],g={toc:y};function w(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"macos-network"}),"macOS Network"),(0,a.kt)("h2",u({},{id:"ifconfig"}),"ifconfig"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"ifconfig [-L] [-m] [-r] INTERFACE [create] [ADDRESS_FAMILY] [ADDRESS [DEST_ADDRESS]] [PARAMETERS]\nifconfig INTERFACE destroy\nifconfig -a [-L] [-d] [-m] [-r] [-u] [-v] [ADDRESS_FAMILY]\nifconfig -l [-d] [-u] [ADDRESS_FAMILY]\nifconfig [-L] [-d] [-m] [-r] [-u] [-v] [-C]\nifconfig INTERFACE vlan VLAN-TAG vlandev IFACE\nifconfig INTERFACE -vlandev IFACE\nifconfig INTERFACE bonddev IFACE\nifconfig INTERFACE -bonddev IFACE\nifconfig INTERFACE bondmode lacp | static\nifconfig -X PATTERN [PARAMETERS]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ADDRESS_FAMILY",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"inet, inet6, link"),(0,a.kt)("li",{parentName:"ul"},"ether, lladdr -> link")))),(0,a.kt)("h1",u({},{id:"netstat"}),"netstat"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"netstat -nr # \u8def\u7531\u8868\n")),(0,a.kt)("h1",u({},{id:"route"}),"route"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"ROUTE(8)                  BSD System Manager's Manual                 ROUTE(8)\n\nNAME\n     route -- manually manipulate the routing tables\n\nSYNOPSIS\n     route [-dnqtv] command [[modifiers] args]\n\nDESCRIPTION\n     Route is a utility used to manually manipulate the network routing\n     tables.  It normally is not needed, as a system routing table management\n     daemon such as routed(8), should tend to this task.\n\n     The route utility supports a limited number of general options, but a\n     rich command language, enabling the user to specify any arbitrary request\n     that could be delivered via the programmatic interface discussed in\n     route(4).\n\n     The following options are available:\n\n     -d      Run in debug-only mode, i.e., do not actually modify the routing\n             table.\n\n     -n      Bypass attempts to print host and network names symbolically when\n             reporting actions.  (The process of translating between symbolic\n             names and numerical equivalents can be quite time consuming, and\n             may require correct operation of the network; thus it may be\n             expedient to forget this, especially when attempting to repair\n             networking operations).\n\n     -t      Run in test-only mode.  /dev/null is used instead of a socket.\n\n     -v      (verbose) Print additional details.\n\n     -q      Suppress all output.\n\n     The route utility provides six commands:\n\n     add         Add a route.\n     flush       Remove all routes.\n     delete      Delete a specific route.\n     change      Change aspects of a route (such as its gateway).\n     get         Lookup and display the route for a destination.\n     monitor     Continuously report any changes to the routing information\n                 base, routing lookup misses, or suspected network partition-\n                 ings.\n\n     The monitor command has the syntax:\n\n           route [-n] monitor\n\n     The flush command has the syntax:\n\n           route [-n] flush [family]\n\n     If the flush command is specified, route will ``flush'' the routing\n     tables of all gateway entries.  When the address family may is specified\n     by any of the -osi, -xns, -atalk, -inet6, or -inet modifiers, only routes\n     having destinations with addresses in the delineated family will be\n     deleted.\n\n     The other commands have the following syntax:\n\n           route [-n] command [-net | -host] [-ifscope boundif] destination\n           gateway [netmask]\n\n     where destination is the destination host or network, gateway is the\n     next-hop intermediary via which packets should be routed.  Routes to a\n     particular host may be distinguished from those to a network by inter-\n     preting the Internet address specified as the destination argument.  The\n     optional modifiers -net and -host force the destination to be interpreted\n     as a network or a host, respectively.  Otherwise, if the destination has\n     a ``local address part'' of INADDR_ANY (0.0.0.0), or if the destination\n     is the symbolic name of a network, then the route is assumed to be to a\n     network; otherwise, it is presumed to be a route to a host.  Optionally,\n     the destination could also be specified in the net/bits format.\n\n     For example, 128.32 is interpreted as -host 128.0.0.32; 128.32.130 is\n     interpreted as -host 128.32.0.130; -net 128.32 is interpreted as\n     128.32.0.0; -net 128.32.130 is interpreted as 128.32.130.0; and\n     192.168.64/20 is interpreted as -net 192.168.64 -netmask 255.255.240.0.\n\n     A destination of default is a synonym for -net 0.0.0.0, which is the\n     default route.\n\n     If the destination is directly reachable via an interface requiring no\n     intermediary system to act as a gateway, the -interface modifier should\n     be specified; the gateway given is the address of this host on the common\n     network, indicating the interface to be used for transmission.  Alter-\n     nately, if the interface is point to point the name of the interface\n     itself may be given, in which case the route remains valid even if the\n     local or remote addresses change.\n\n     For AF_INET and AF_INET6, the -ifscope modifier specifies the additional\n     property of the route related to the interface scope derived from inter-\n     face boundif.  Such property allows for the presence of multiple route\n     entries with the same destination, where each route is associated with a\n     unique interface.  This modifier is required in order to manipulate route\n     entries marked with the RTF_IFSCOPE flag.\n\n     The optional modifier -link specify that all subsequent addresses are\n     specified as link-level addresses, and the names must be numeric specifi-\n     cations rather than symbolic names.\n\n     The optional -netmask modifier is intended to achieve the effect of an\n     OSI ESIS redirect with the netmask option, or to manually add subnet\n     routes with netmasks different from that of the implied network interface\n     (as would otherwise be communicated using the OSPF or ISIS routing proto-\n     cols).  One specifies an additional ensuing address parameter (to be\n     interpreted as a network mask).  The implicit network mask generated in\n     the AF_INET case can be overridden by making sure this option follows the\n     destination parameter.\n\n     For AF_INET6, the -prefixlen qualifier is available instead of the -mask\n     qualifier because non-continuous masks are not allowed in IPv6.  For\n     example, -prefixlen 32 specifies network mask of\n     ffff:ffff:0000:0000:0000:0000:0000:0000 to be used.  The default value of\n     prefixlen is 64 to get along with the aggregatable address.  But 0 is\n     assumed if default is specified.  Note that the qualifier works only for\n     AF_INET6 address family.\n\n     Routes have associated flags which influence operation of the protocols\n     when sending to destinations matched by the routes.  These flags may be\n     set (or sometimes cleared) by indicating the following corresponding mod-\n     ifiers:\n\n     -cloning   RTF_CLONING    - generates a new route on use\n     -xresolve  RTF_XRESOLVE   - emit mesg on use (for external lookup)\n     -iface    ~RTF_GATEWAY    - destination is directly reachable\n     -static    RTF_STATIC     - manually added route\n     -nostatic ~RTF_STATIC     - pretend route added by kernel or daemon\n     -reject    RTF_REJECT     - emit an ICMP unreachable when matched\n     -blackhole RTF_BLACKHOLE  - silently discard pkts (during updates)\n     -proto1    RTF_PROTO1     - set protocol specific routing flag #1\n     -proto2    RTF_PROTO2     - set protocol specific routing flag #2\n     -llinfo    RTF_LLINFO     - validly translates proto addr to link addr\n\n     The optional modifiers -rtt, -rttvar, -sendpipe, -recvpipe, -mtu,\n     -hopcount, -expire, and -ssthresh provide initial values to quantities\n     maintained in the routing entry by transport level protocols, such as TCP\n     or TP4.  These may be individually locked by preceding each such modifier\n     to be locked by the -lock meta-modifier, or one can specify that all\n     ensuing metrics may be locked by the -lockrest meta-modifier.\n\n     In a change or add command where the destination and gateway are not suf-\n     ficient to specify the route (as in the ISO case where several interfaces\n     may have the same address), the -ifp or -ifa modifiers may be used to\n     determine the interface or interface address.\n\n     The optional -proxy modifier specifies that the RTF_LLINFO routing table\n     entry is the ``published (proxy-only)'' ARP entry, as reported by arp(8).\n\n     All symbolic names specified for a destination or gateway are looked up\n     first as a host name using gethostbyname(3).  If this lookup fails,\n     getnetbyname(3) is then used to interpret the name as that of a network.\n\n     Route uses a routing socket and the new message types RTM_ADD,\n     RTM_DELETE, RTM_GET, and RTM_CHANGE.  As such, only the super-user may\n     modify the routing tables.\n\nDIAGNOSTICS\n     add [host | network ] %s: gateway %s flags %x  The specified route is\n     being added to the tables.  The values printed are from the routing table\n     entry supplied in the ioctl(2) call.  If the gateway address used was not\n     the primary address of the gateway (the first one returned by\n     gethostbyname(3)), the gateway address is printed numerically as well as\n     symbolically.\n\n     delete [ host | network ] %s: gateway %s flags %x  As above, but when\n     deleting an entry.\n\n     %s %s done  When the flush command is specified, each routing table entry\n     deleted is indicated with a message of this form.\n\n     Network is unreachable  An attempt to add a route failed because the\n     gateway listed was not on a directly-connected network.  The next-hop\n     gateway must be given.\n\n     not in table  A delete operation was attempted for an entry which wasn't\n     present in the tables.\n\n     routing table overflow  An add operation was attempted, but the system\n     was low on resources and was unable to allocate memory to create the new\n     entry.\n\n     gateway uses the same route  A change operation resulted in a route whose\n     gateway uses the same route as the one being changed.  The next-hop gate-\n     way should be reachable through a different route.\n\n     The route utility exits 0 on success, and >0 if an error occurs.\n\nSEE ALSO\n     netintro(4), route(4), arp(8), routed(8)\n\nHISTORY\n     The route command appeared in 4.2BSD.\n\nBUGS\n     The first paragraph may have slightly exaggerated routed(8)'s abilities.\n\n4.4BSD                           June 8, 2001                           4.4BSD\n")))}w.isMDXComponent=!0}}]);